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
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { readChapterIndex } from './questionIndexService';
import { buildDailyTargets, getCurriculumSignature } from './dailyAssignmentService';

// ─── helpers ────────────────────────────────────────────────────────────────

const poolRef = (uid) => doc(db, 'users', uid, 'practice_pool', 'main');

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
export const ensurePracticePool = async (uid, studentProfile) => {
  if (!uid) throw new Error('uid required');

  const newSignature = getCurriculumSignature(studentProfile);
  const snap = await getDoc(poolRef(uid));
  const existing = snap.exists() ? snap.data() : null;

  // 시그니처 일치 → 그대로 반환
  if (existing && existing.curriculumSignature === newSignature) {
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

  const indexResults = await Promise.all(
    chapterIds.map(async (chapterId) => {
      const index = await readChapterIndex(chapterId);
      return { chapterId, ids: index?.ids?.map(String) || [] };
    }),
  );

  // 기존 done / accuracy 최대한 보존
  const prevPools = existing?.chapter_pools || {};
  const prevAccuracy = existing?.chapter_accuracy || {};

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

  await setDoc(poolRef(uid), newPool, { merge: false });
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
  const snap = await getDoc(poolRef(uid));
  if (!snap.exists()) throw new Error('Practice pool not initialized. Call ensurePracticePool first.');

  let data = snap.data();
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
  let totalUndone = Object.values(undoneMap).reduce((s, arr) => s + arr.length, 0);

  // 전체 소진 → 리셋
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

  // 균등 배분
  const numChapters = chapterIds.length;
  const basePerChapter = Math.floor(actualCount / numChapters);
  const remainder = actualCount % numChapters;

  const targets = {};
  chapterIds.forEach((cid) => { targets[cid] = basePerChapter; });
  // 나머지는 가장 약한 챕터부터 +1
  sortedByWeakness.slice(0, remainder).forEach((cid) => { targets[cid] += 1; });

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
  const chapterBreakdown = {};
  const allSelected = [];
  chapterIds.forEach((cid) => {
    const picked = shuffle(undoneMap[cid]).slice(0, targets[cid]);
    chapterBreakdown[cid] = picked;
    allSelected.push(...picked);
  });

  return {
    selectedIds: shuffle(allSelected),
    chapterBreakdown,
    poolData: data,
  };
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
    const snap = await getDoc(poolRef(uid));
    if (!snap.exists()) return;

    const data = snap.data();
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

    await setDoc(poolRef(uid), {
      ...data,
      chapter_pools,
      chapter_accuracy,
      updatedAt: serverTimestamp(),
    }, { merge: false });
  } catch (err) {
    // non-critical: 실패해도 퀴즈 경험에 영향 없음
    console.warn('updatePoolAfterQuiz failed (non-critical):', err?.code || err);
  }
};
