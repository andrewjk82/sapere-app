/**
 * practicePoolService.js
 *
 * 학생마다 practice_pool/main 문서 하나를 유지한다.
 *
 * 구조:
 *   users/{uid}/practice_pool/main
 *   {
 *     curriculumSignature: string,   // 할당 변경 감지용
 *     cycle: number,                 // 전체 소진 후 몇 번째 순환
 *     chapter_pools: {
 *       [chapterId]: {
 *         ids:  string[],   // 해당 챕터의 전체 문제 ID
 *         done: string[],   // 이미 출제된 ID
 *       }
 *     },
 *     chapter_accuracy: {
 *       [chapterId]: { correct: number, total: number }
 *     },
 *     updatedAt: serverTimestamp,
 *   }
 *
 * 읽기 비용:
 *   - 출제 1회: practice_pool 1 read + 문제 fetch ~2 reads = 3 reads (고정)
 *   - 커리큘럼 변경 시만: question_index 챕터 수만큼 추가 read (드묾)
 */

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from '../firebase/firestoreWrapper';
import { db } from '../firebase/config';
import { readChapterIndex } from './questionIndexService';
import { buildDailyTargets, getCurriculumSignature } from './dailyAssignmentService';

// ─── helpers ────────────────────────────────────────────────────────────────

const poolRef = (uid) => doc(db, 'users', uid, 'practice_pool', 'main');

// 세션 내 in-memory 캐시 — 같은 uid/signature 조합은 Firestore를 다시 읽지 않음.
// prepareNextDailyAssignment 등 퀴즈 완료 후 두 번째 호출에서 reads를 막기 위함.
const _poolCache = new Map(); // uid → { signature, data }

const getCached = (uid, signature) => {
  const entry = _poolCache.get(uid);
  return entry?.signature === signature ? entry.data : null;
};
const setCached = (uid, signature, data) => {
  _poolCache.set(uid, { signature, data });
};

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ─── init / refresh pool ────────────────────────────────────────────────────

/**
 * 풀이 없거나 커리큘럼 시그니처가 바뀐 경우에만 재빌드.
 * 이미 최신이면 아무것도 안 함 (추가 read 없음).
 *
 * Returns: pool data object (Firestore 데이터 형태)
 */
export const ensurePracticePool = async (uid, studentProfile, membershipVersion) => {
  if (!uid) throw new Error('uid required');

  const newSignature = getCurriculumSignature(studentProfile, membershipVersion);

  // 세션 캐시 히트 → Firestore read 없음
  const cached = getCached(uid, newSignature);
  if (cached) return cached;

  const snap = await getDoc(poolRef(uid));
  const existing = snap.exists() ? snap.data() : null;

  // 시그니처 일치 → 캐시 저장 후 반환
  if (existing && existing.curriculumSignature === newSignature) {
    setCached(uid, newSignature, existing);
    return existing;
  }

  // 재빌드: 할당 챕터의 question_index 읽기
  let targets;
  try {
    targets = buildDailyTargets(studentProfile);
  } catch {
    throw new Error('No valid curriculum targets found for this student.');
  }
  const chapterIds = Array.from(targets.targetChapterIds);
  const prevPools = existing?.chapter_pools || {};
  const prevAccuracy = existing?.chapter_accuracy || {};

  // Re-read indexes for assigned chapters; preserve done[] for IDs still active.
  const indexResults = await Promise.all(
    chapterIds.map(async (chapterId) => {
      const index = await readChapterIndex(chapterId);
      return { chapterId, ids: index?.ids?.map(String) || [] };
    }),
  );

  const chapter_pools = {};
  indexResults.forEach(({ chapterId, ids }) => {
    const prev = prevPools[chapterId] || {};
    const prevDoneSet = new Set(prev.done || []);
    // 여전히 active인 ID만 done으로 유지
    const done = ids.filter((id) => prevDoneSet.has(id));
    chapter_pools[chapterId] = { ids, done };
  });

  const newPool = {
    curriculumSignature: newSignature,
    cycle: existing?.cycle || 0,
    chapter_pools,
    chapter_accuracy: prevAccuracy,
    updatedAt: serverTimestamp(),
  };

  // If nothing structural changed (same chapters + same id sets) only the
  // signature stamp needs updating — still one write, but avoids churning
  // clients that compare pool contents. Always write signature for mv bumps.
  await setDoc(poolRef(uid), newPool, { merge: false });
  setCached(uid, newSignature, newPool);
  return newPool;
};

// ─── select questions ────────────────────────────────────────────────────────

/**
 * practice_pool 에서 questionCount 개를 선택해 반환.
 *
 * 알고리즘:
 *   1. 챕터별 균등 배분 (basePerChapter = floor(n/chapters))
 *   2. 나머지는 정확도 낮은 챕터(약점) 순으로 +1
 *   3. undone이 target보다 적은 챕터 → 부족분을 약점 챕터 중 여유있는 곳에서 충당
 *   4. 전체 undone < questionCount → 전체 리셋(cycle+1) 후 재시도
 *
 * Returns: { selectedIds: string[], chapterBreakdown: { [chapterId]: string[] }, poolData }
 */
export const selectDailyQuestions = async (uid, questionCount) => {
  // Use in-memory cache if available — ensurePracticePool already read/wrote
  // the pool doc in this call chain, so a second getDoc is redundant.
  const cachedEntry = _poolCache.get(uid);
  let data = cachedEntry?.data || null;

  if (!data) {
    const snap = await getDoc(poolRef(uid));
    if (!snap.exists()) throw new Error('Practice pool not initialized. Call ensurePracticePool first.');
    data = snap.data();
    if (data.curriculumSignature) setCached(uid, data.curriculumSignature, data);
  }

  let chapter_pools = data.chapter_pools || {};
  const chapter_accuracy = data.chapter_accuracy || {};
  const chapterIds = Object.keys(chapter_pools);

  if (chapterIds.length === 0) throw new Error('No chapters in practice pool.');

  // undone 계산
  const getUndone = (pools) => {
    const result = {};
    Object.entries(pools).forEach(([cid, cp]) => {
      const doneSet = new Set(cp.done || []);
      result[cid] = (cp.ids || []).filter((id) => !doneSet.has(id));
    });
    return result;
  };

  let undoneMap = getUndone(chapter_pools);

  // 챕터별 개별 리셋: undone이 0인 챕터는 그 챕터만 done 초기화.
  // 이렇게 해야 Ch7처럼 문제가 많은 챕터에 deficit이 몰리지 않고
  // 각 챕터가 독립적으로 순환한다.
  const perChapterReset = {};
  chapterIds.forEach((cid) => {
    if (undoneMap[cid].length === 0 && (chapter_pools[cid].ids || []).length > 0) {
      perChapterReset[cid] = { ...chapter_pools[cid], done: [] };
    }
  });
  if (Object.keys(perChapterReset).length > 0) {
    const resetPools = { ...chapter_pools, ...perChapterReset };
    const updatedData = { ...data, chapter_pools: resetPools, updatedAt: serverTimestamp() };
    await setDoc(poolRef(uid), updatedData, { merge: false });
    chapter_pools = resetPools;
    data = updatedData;
    undoneMap = getUndone(chapter_pools);
    // 캐시도 반드시 갱신 — 안 하면 updatePoolAfterQuiz가 stale 캐시로 리셋을 덮어씀
    if (data.curriculumSignature) setCached(uid, data.curriculumSignature, data);
  }

  let totalUndone = Object.values(undoneMap).reduce((s, arr) => s + arr.length, 0);

  // 전체 소진 (챕터 자체에 문제가 아예 없는 경우 등 극단적 케이스) → 전체 리셋
  if (totalUndone < questionCount) {
    const resetPools = {};
    chapterIds.forEach((cid) => {
      resetPools[cid] = { ...chapter_pools[cid], done: [] };
    });
    const updatedData = {
      ...data,
      chapter_pools: resetPools,
      cycle: (data.cycle || 0) + 1,
      updatedAt: serverTimestamp(),
    };
    await setDoc(poolRef(uid), updatedData, { merge: false });
    chapter_pools = resetPools;
    data = updatedData;
    undoneMap = getUndone(chapter_pools);
    totalUndone = Object.values(undoneMap).reduce((s, arr) => s + arr.length, 0);
  }

  // 실제로 꺼낼 수 있는 수 (풀 자체가 questionCount보다 작은 극단적 경우 대비)
  const actualCount = Math.min(questionCount, totalUndone);

  // 정확도 낮은 순 정렬 (데이터 없으면 0.5로 취급 → 중간)
  const sortedByWeakness = [...chapterIds].sort((a, b) => {
    const aa = chapter_accuracy[a];
    const ab = chapter_accuracy[b];
    const ra = aa && aa.total > 0 ? aa.correct / aa.total : 0.5;
    const rb = ab && ab.total > 0 ? ab.correct / ab.total : 0.5;
    return ra - rb; // 오름차순 = 약점 먼저
  });

  // 균등 배분 — 문제가 없는 빈 챕터(ids=0)는 배분 계산에서 제외.
  // 포함하면 빈 챕터 수만큼 deficit이 생겨 특정 챕터에 문제가 몰린다.
  const activeChapterIds = chapterIds.filter((cid) => (chapter_pools[cid]?.ids || []).length > 0);
  const numChapters = activeChapterIds.length || 1;
  const basePerChapter = Math.floor(actualCount / numChapters);
  const remainder = actualCount % numChapters;

  const targets = {};
  chapterIds.forEach((cid) => { targets[cid] = 0; }); // 빈 챕터는 0으로 초기화
  activeChapterIds.forEach((cid) => { targets[cid] = basePerChapter; });
  // 나머지는 가장 약한 챕터부터 +1
  sortedByWeakness.filter((cid) => activeChapterIds.includes(cid)).slice(0, remainder).forEach((cid) => { targets[cid] += 1; });

  // undone < target인 챕터 → 가능한 만큼만, deficit 계산
  let totalDeficit = 0;
  chapterIds.forEach((cid) => {
    const available = undoneMap[cid].length;
    if (targets[cid] > available) {
      totalDeficit += targets[cid] - available;
      targets[cid] = available;
    }
  });

  // deficit → 약점 챕터 중 여유있는 곳에서 충당
  if (totalDeficit > 0) {
    for (const cid of sortedByWeakness) {
      if (totalDeficit <= 0) break;
      const surplus = undoneMap[cid].length - targets[cid];
      if (surplus > 0) {
        const take = Math.min(surplus, totalDeficit);
        targets[cid] += take;
        totalDeficit -= take;
      }
    }
  }

  // 최종 선택 (챕터 내 셔플, 전체도 셔플)
  // globalSeen으로 교차-챕터 중복을 막고, 중복으로 빠진 만큼 다른 챕터 여분에서 보충.
  const chapterBreakdown = {};
  const allSelected = [];
  const globalSeen = new Set();
  const shuffledUndone = {}; // 챕터별 셔플된 undone 목록 (보충 시 재사용)

  chapterIds.forEach((cid) => {
    shuffledUndone[cid] = shuffle(undoneMap[cid]);
    const picked = shuffledUndone[cid]
      .filter((id) => !globalSeen.has(id))
      .slice(0, targets[cid]);
    picked.forEach((id) => globalSeen.add(id));
    chapterBreakdown[cid] = picked;
    allSelected.push(...picked);
  });

  // 중복 제거로 모자란 만큼 → 약점 챕터 순으로 여분에서 보충
  let deficit = actualCount - allSelected.length;
  if (deficit > 0) {
    for (const cid of sortedByWeakness) {
      if (deficit <= 0) break;
      const extras = shuffledUndone[cid].filter((id) => !globalSeen.has(id));
      const take = extras.slice(0, deficit);
      take.forEach((id) => globalSeen.add(id));
      chapterBreakdown[cid] = [...(chapterBreakdown[cid] || []), ...take];
      allSelected.push(...take);
      deficit -= take.length;
    }
  }

  return {
    selectedIds: shuffle(allSelected),
    chapterBreakdown,
    poolData: data,
  };
};

/**
 * Extra IDs when the first draw was short after filtering (e.g. isActive:false).
 * Prefers still-undone questions; if not enough, reuses done IDs not in excludeIds
 * so Year 5–6 seed-only assignments can still fill to the requested count.
 *
 * No extra Firestore read when the in-memory pool cache is warm.
 *
 * @returns {string[]}
 */
export const pickExtraPoolIds = async (uid, { excludeIds = [], count = 10 } = {}) => {
  if (!uid || count <= 0) return [];

  const exclude = new Set((excludeIds || []).map(String));
  const cachedEntry = _poolCache.get(uid);
  let data = cachedEntry?.data || null;
  if (!data) {
    const snap = await getDoc(poolRef(uid));
    if (!snap.exists()) return [];
    data = snap.data();
  }

  const chapter_pools = data.chapter_pools || {};
  const undone = [];
  const recycled = [];

  Object.values(chapter_pools).forEach((cp) => {
    const ids = cp?.ids || [];
    const doneSet = new Set((cp?.done || []).map(String));
    ids.forEach((id) => {
      const sid = String(id);
      if (!sid || exclude.has(sid)) return;
      if (doneSet.has(sid)) recycled.push(sid);
      else undone.push(sid);
    });
  });

  const pick = [...shuffle(undone)];
  if (pick.length < count) {
    pick.push(...shuffle(recycled).filter((id) => !pick.includes(id)));
  }
  return pick.slice(0, count);
};

// ─── update pool after quiz ──────────────────────────────────────────────────

/**
 * 퀴즈 완료 후 호출.
 * - 출제된 문제 → done에 추가
 * - 챕터별 정확도 누적
 *
 * @param {string} uid
 * @param {Array<{id: string, chapterId: string, correct: boolean}>} results
 */
export const updatePoolAfterQuiz = async (uid, results) => {
  if (!uid || !Array.isArray(results) || results.length === 0) return;

  try {
    // Use in-memory cache when available — avoids a redundant Firestore read
    // immediately after a quiz (ensurePracticePool already read this doc).
    let data;
    const cachedEntry = _poolCache.get(uid);
    if (cachedEntry?.data) {
      data = cachedEntry.data;
    } else {
      const snap = await getDoc(poolRef(uid));
      if (!snap.exists()) return;
      data = snap.data();
    }
    const chapter_pools = JSON.parse(JSON.stringify(data.chapter_pools || {}));
    const chapter_accuracy = JSON.parse(JSON.stringify(data.chapter_accuracy || {}));

    // 챕터별 그룹핑
    const byChapter = {};
    results.forEach(({ id, chapterId, correct }) => {
      if (!id || !chapterId) return;
      if (!byChapter[chapterId]) byChapter[chapterId] = { ids: [], correct: 0, total: 0 };
      byChapter[chapterId].ids.push(String(id));
      byChapter[chapterId].total += 1;
      if (correct) byChapter[chapterId].correct += 1;
    });

    Object.entries(byChapter).forEach(([cid, { ids, correct, total }]) => {
      // done 업데이트
      if (chapter_pools[cid]) {
        const doneSet = new Set(chapter_pools[cid].done || []);
        ids.forEach((id) => doneSet.add(id));
        chapter_pools[cid] = { ...chapter_pools[cid], done: [...doneSet] };
      }
      // 정확도 누적
      const prev = chapter_accuracy[cid] || { correct: 0, total: 0 };
      chapter_accuracy[cid] = {
        correct: prev.correct + correct,
        total: prev.total + total,
      };
    });

    const updated = { ...data, chapter_pools, chapter_accuracy, updatedAt: serverTimestamp() };
    await setDoc(poolRef(uid), updated, { merge: false });
    // Update cache in-place so the next selectDailyQuestions call uses fresh
    // data without an extra Firestore read.
    setCached(uid, updated.curriculumSignature, updated);
  } catch (err) {
    // non-critical: 실패해도 퀴즈 경험에 영향 없음
    console.warn('updatePoolAfterQuiz failed (non-critical):', err?.code || err);
  }
};
