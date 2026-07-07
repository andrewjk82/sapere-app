/**
 * calcProgressService.js
 *
 * Auto Mode의 학생별 Daily Calculation 진행 상태를 관리한다.
 *
 * Firestore 구조:
 *   users/{uid}/calc_progress/main
 *   {
 *     autoMode: boolean,
 *     stages: {
 *       [stageId]: {
 *         enabled: boolean,
 *         groups: {
 *           [groupKey]: {           // 'A', 'B', 'C' …
 *             currentStepId: string,
 *             // 마지막 판정 이후 누적된, 아직 소비되지 않은 세션들.
 *             // 판정이 나면(UP/DOWN/STAY 무관) 비우고 새로 쌓기 시작한다.
 *             weeklyScores: [{ date: 'YYYY-MM-DD', score: number, total: number }],
 *             lastEvaluatedWeek: 'YYYY-MM-DD' | null  // 마지막으로 "체크"한 날짜
 *           }
 *         }
 *       }
 *     },
 *     updatedAt: serverTimestamp
 *   }
 *
 * 누적-기반 2주 평가 (앱 진입 시 최대 주 1회 트리거되지만, 그룹별로는 마지막
 * 체크 후 14일 이상 지나야 실제로 판정한다):
 *   - 그룹별로 마지막 판정 이후 누적된 문제 수가 50문제 미만이면 스텝 유지,
 *     14일 뒤 다시 누적량을 확인한다 (계속 쌓임 — 데이터 손실 없음).
 *   - 50문제 이상 쌓였으면 누적 전체의 정답률로 판정 후 누적 초기화:
 *     평균 ≥ 90% → 다음 스텝 UP · 평균 ≤ 50% → 이전 스텝 DOWN
 *     (첫 스텝이면 선생님 알림) · 그 외 → 유지
 *   1문제짜리 하루치 세션 하나로 스텝이 오르내리던 문제(작은 표본의 우연)를
 *   막기 위해 주 단위 소표본 평가에서 2주 단위 50문제 누적 평가로 변경.
 */

import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { CURRICULUM_DATA } from '../constants/curriculumData';

const progressRef = (uid) => doc(db, 'users', uid, 'calc_progress', 'main');

// ─── 커리큘럼 헬퍼 ────────────────────────────────────────────────────────────

const CALC_STAGES = CURRICULUM_DATA['Daily Calculation'] || [];

// ─── Year Level Presets ───────────────────────────────────────────────────────
// Each preset maps a school year (1–6) to:
//   • which stages to enable
//   • for each enabled stage, the starting step for every group
// The teacher picks a year, and the system populates ~50 dropdowns automatically.

/**
 * Preset format:
 *   { [stageId]: { [groupKey]: startStepId } }
 *
 * Stages NOT listed for a year are disabled.
 * Groups NOT listed within a listed stage start at their first step.
 */
export const YEAR_LEVEL_PRESETS = {
  1: {
    'calc-stage-1':   { A: 'calc-1-s1', B: 'calc-1-s5' },
    'calc-stage-sub': { A: 'calc-sub-s1', B: 'calc-sub-s5' },
  },
  2: {
    'calc-stage-1':   { A: 'calc-1-s1', B: 'calc-1-s5', C: 'calc-1-s9' },
    'calc-stage-sub': { A: 'calc-sub-s1', B: 'calc-sub-s5', C: 'calc-sub-s9' },
    'calc-stage-2':   { C: 'calc-2-core' },
    'calc-stage-3':   { A: 'calc-3-a1' },
  },
  3: {
    'calc-stage-1':   { A: 'calc-1-s1', B: 'calc-1-s5', C: 'calc-1-s9', D: 'calc-1-s14' },
    'calc-stage-sub': { A: 'calc-sub-s1', B: 'calc-sub-s5', C: 'calc-sub-s9', D: 'calc-sub-s14' },
    'calc-stage-2':   { C: 'calc-2-core', A: 'calc-2-adv' },
    'calc-stage-3':   { A: 'calc-3-a1', B: 'calc-3-b5' },
    'calc-stage-4':   { A: 'calc-4-a1' },
    'calc-stage-5':   { A: 'calc-5-s1' },
  },
  4: {
    'calc-stage-1':   { A: 'calc-1-s1', B: 'calc-1-s5', C: 'calc-1-s9', D: 'calc-1-s14', E: 'calc-1-s18' },
    'calc-stage-sub': { A: 'calc-sub-s1', B: 'calc-sub-s5', C: 'calc-sub-s9', D: 'calc-sub-s14', E: 'calc-sub-s18' },
    'calc-stage-2':   { C: 'calc-2-core', A: 'calc-2-adv', E: 'calc-2-enrich' },
    'calc-stage-3':   { A: 'calc-3-a1', B: 'calc-3-b5', C: 'calc-3-c10', D: 'calc-3-d15' },
    'calc-stage-4':   { A: 'calc-4-a1', B: 'calc-4-b5', C: 'calc-4-c10' },
    'calc-stage-5':   { A: 'calc-5-s1', B: 'calc-5-s9' },
    'calc-stage-6':   { A: 'calc-6-s1' },
  },
  5: {
    'calc-stage-1':   { A: 'calc-1-s1', B: 'calc-1-s5', C: 'calc-1-s9', D: 'calc-1-s14', E: 'calc-1-s18', F: 'calc-1-s23' },
    'calc-stage-sub': { A: 'calc-sub-s1', B: 'calc-sub-s5', C: 'calc-sub-s9', D: 'calc-sub-s14', E: 'calc-sub-s18', F: 'calc-sub-s23' },
    'calc-stage-2':   { C: 'calc-2-core', A: 'calc-2-adv', E: 'calc-2-enrich' },
    'calc-stage-3':   { A: 'calc-3-a1', B: 'calc-3-b5', C: 'calc-3-c10', D: 'calc-3-d15', E: 'calc-3-e18', F: 'calc-3-f23' },
    'calc-stage-4':   { A: 'calc-4-a1', B: 'calc-4-b5', C: 'calc-4-c10', D: 'calc-4-d15', E: 'calc-4-e18' },
    'calc-stage-5':   { A: 'calc-5-s1', B: 'calc-5-s9', C: 'calc-5-s13', D: 'calc-5-s17' },
    'calc-stage-6':   { A: 'calc-6-s1', B: 'calc-6-s5', C: 'calc-6-s11' },
    'calc-stage-7':   { C: 'calc-7-core' },
  },
  6: {
    'calc-stage-1':   { A: 'calc-1-s1', B: 'calc-1-s5', C: 'calc-1-s9', D: 'calc-1-s14', E: 'calc-1-s18', F: 'calc-1-s23', G: 'calc-1-s27' },
    'calc-stage-sub': { A: 'calc-sub-s1', B: 'calc-sub-s5', C: 'calc-sub-s9', D: 'calc-sub-s14', E: 'calc-sub-s18', F: 'calc-sub-s23', G: 'calc-sub-s27' },
    'calc-stage-2':   { C: 'calc-2-core', A: 'calc-2-adv', E: 'calc-2-enrich' },
    'calc-stage-3':   { A: 'calc-3-a1', B: 'calc-3-b5', C: 'calc-3-c10', D: 'calc-3-d15', E: 'calc-3-e18', F: 'calc-3-f23', G: 'calc-3-g27' },
    'calc-stage-4':   { A: 'calc-4-a1', B: 'calc-4-b5', C: 'calc-4-c10', D: 'calc-4-d15', E: 'calc-4-e18', F: 'calc-4-f23', G: 'calc-4-g27' },
    'calc-stage-5':   { A: 'calc-5-s1', B: 'calc-5-s9', C: 'calc-5-s13', D: 'calc-5-s17', E: 'calc-5-s21' },
    'calc-stage-6':   { A: 'calc-6-s1', B: 'calc-6-s5', C: 'calc-6-s11', D: 'calc-6-s16', E: 'calc-6-s21' },
    'calc-stage-7':   { C: 'calc-7-core', A: 'calc-7-adv', E: 'calc-7-enrich' },
  },
};

/**
 * Generate a full stage config object from a year level preset.
 * Returns the same shape as CalcAutoModePanel's local `config` state:
 *   { [stageId]: { enabled: boolean, groups: { [groupKey]: currentStepId } } }
 *
 * Stages in the preset are enabled; stages NOT in the preset are disabled but
 * still included (with their first-step defaults) so the Advanced panel can
 * toggle them on.
 */
export const buildConfigFromPreset = (yearLevel) => {
  const preset = YEAR_LEVEL_PRESETS[yearLevel];
  if (!preset) return null;

  const config = {};
  CALC_STAGES.forEach((stage) => {
    const presetGroups = preset[stage.id]; // { A: stepId, B: stepId, … } or undefined
    const allGroups = getGroupsForStage(stage.id);
    const groupCfg = {};

    Object.keys(allGroups).forEach((groupKey) => {
      const topics = allGroups[groupKey];
      if (presetGroups) {
        // Enabled stage: only include groups explicitly listed in the preset.
        // Non-preset groups are left out of groupCfg so they aren't saved and
        // don't get injected into the quiz pool (e.g. Year 1 shouldn't get
        // 3-digit+ problems from group D just because it's the first step).
        if (presetGroups[groupKey]) groupCfg[groupKey] = presetGroups[groupKey];
      } else {
        // Disabled stage: populate all groups so the teacher can see options
        // in the UI if they manually toggle the stage on.
        groupCfg[groupKey] = topics[0]?.id;
      }
    });

    config[stage.id] = {
      enabled: Boolean(presetGroups),
      groups: groupCfg,
    };
  });

  return config;
};

/** stageId → topics 배열 */
const getStageTopics = (stageId) =>
  CALC_STAGES.find((s) => s.id === stageId)?.topics || [];

/** stage의 topics를 group별로 묶어 반환: { [groupKey]: topic[] } */
export const getGroupsForStage = (stageId) => {
  const groups = {};
  getStageTopics(stageId).forEach((topic) => {
    // group 문자열에서 첫 글자(A, B, C …)를 키로 사용
    const key = topic.group ? topic.group.charAt(0) : '?';
    if (!groups[key]) groups[key] = [];
    groups[key].push(topic);
  });
  return groups;
};

/** group 내 stepId 순서 배열 */
const getStepOrder = (stageId, groupKey) =>
  (getGroupsForStage(stageId)[groupKey] || []).map((t) => t.id);

/** 현재 스텝에서 N 이동한 스텝 ID. 범위 초과 시 null 반환 */
const shiftStep = (stageId, groupKey, currentStepId, delta) => {
  const order = getStepOrder(stageId, groupKey);
  const idx = order.indexOf(currentStepId);
  if (idx < 0) return null;
  const next = idx + delta;
  if (next < 0 || next >= order.length) return null;
  return order[next];
};

/** stepId가 그룹의 첫 번째 스텝인지 */
const isFirstStep = (stageId, groupKey, stepId) => {
  const order = getStepOrder(stageId, groupKey);
  return order.length > 0 && order[0] === stepId;
};

/** stepId가 그룹의 마지막 스텝인지 */
const isLastStep = (stageId, groupKey, stepId) => {
  const order = getStepOrder(stageId, groupKey);
  return order.length > 0 && order[order.length - 1] === stepId;
};

// ─── 메달 헬퍼 ────────────────────────────────────────────────────────────────

const hasMedal = (medals, pred) => medals.some(pred);

const pushMedal = (medals, medal) => {
  medals.push({ ...medal, awardedAt: new Date().toISOString(), seen: false });
};

/** step 메달: 같은 (stage,group,step) 중복 금지 */
const awardStepMedal = (medals, stageId, groupKey, stepId) => {
  if (hasMedal(medals, (m) => m.tier === 'step' && m.stageId === stageId
    && m.groupKey === groupKey && m.stepId === stepId)) return false;
  pushMedal(medals, { tier: 'step', stageId, groupKey, stepId });
  return true;
};

/** phase 메달: 같은 (stage,group) 중복 금지 */
const awardPhaseMedal = (medals, stageId, groupKey) => {
  if (hasMedal(medals, (m) => m.tier === 'phase' && m.stageId === stageId
    && m.groupKey === groupKey)) return false;
  pushMedal(medals, { tier: 'phase', stageId, groupKey });
  return true;
};

/** stage 메달: 같은 stage 중복 금지 */
const awardStageMedal = (medals, stageId) => {
  if (hasMedal(medals, (m) => m.tier === 'stage' && m.stageId === stageId)) return false;
  pushMedal(medals, { tier: 'stage', stageId });
  return true;
};

const awardMasteryMedal = (medals) => {
  if (hasMedal(medals, (m) => m.tier === 'mastery')) return false;
  pushMedal(medals, { tier: 'mastery' });
  return true;
};

/** 그룹이 마스터됐는지 = 그 그룹의 phase 메달 보유 여부 */
const groupMastered = (medals, stageId, groupKey) =>
  hasMedal(medals, (m) => m.tier === 'phase' && m.stageId === stageId && m.groupKey === groupKey);

// ─── 날짜 유틸 ────────────────────────────────────────────────────────────────

const toDateKey = (d = new Date()) => d.toLocaleDateString('en-CA'); // YYYY-MM-DD

/** 날짜 문자열이 속한 주의 월요일 날짜 반환 (YYYY-MM-DD) */
const getMondayOf = (dateStr) => {
  const d = new Date(dateStr + 'T00:00:00');
  const day = d.getDay(); // 0=Sun … 6=Sat
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return toDateKey(d);
};

/** 이번주 월요일 (YYYY-MM-DD) — 앱 진입 주간 가드용 */
export const getThisWeekMonday = () => getMondayOf(toDateKey());

/** 두 'YYYY-MM-DD' 날짜 사이의 일수 (오늘 - dateStr) */
const daysSince = (dateStr) => {
  const then = new Date(dateStr + 'T00:00:00');
  const now = new Date(toDateKey() + 'T00:00:00');
  return Math.round((now - then) / 86400000);
};

// ─── 초기화 ───────────────────────────────────────────────────────────────────

/**
 * calc_progress 문서를 읽어 반환한다. 문서가 없으면 메모리상의 기본값만
 * 반환하고 Firestore에는 쓰지 않는다 (패널을 여는 것만으로 빈 문서가 생기는
 * 쓰기 낭비를 방지). 실제 문서는 saveAutoModeConfig/setCalcAutoMode에서 생성됨.
 */
export const ensureCalcProgress = async (uid) => {
  if (!uid) return null;
  const snap = await getDoc(progressRef(uid));
  if (snap.exists()) return snap.data();
  return { autoMode: false, stages: {} };
};

/**
 * 선생님이 Auto Mode 설정을 저장할 때 호출.
 *
 * 각 그룹의 currentStepId는 선생님이 드롭다운에서 고른 값이 곧 "현재 스텝"이다
 * (= 수동 override). 이전 스텝과 다르게 바뀌면 그 그룹의 주간 기록을 리셋해
 * 새 스텝 기준으로 다시 평가되도록 한다. 값이 같으면 진행상태를 그대로 보존.
 *
 * @param {string} uid
 * @param {boolean} autoMode
 * @param {Object} stageConfig  { [stageId]: { enabled, groups: { [groupKey]: { currentStepId } } } }
 * @param {number} [yearLevel] Optional year level (1-6) for auto-promotion tracking
 */
export const saveAutoModeConfig = async (uid, autoMode, stageConfig, yearLevel) => {
  if (!uid) return;
  const snap = await getDoc(progressRef(uid));
  const existing = snap.exists() ? snap.data() : {};
  const prevStages = existing.stages || {};

  const stages = {};
  Object.entries(stageConfig).forEach(([stageId, stageCfg]) => {
    const prevGroups = prevStages[stageId]?.groups || {};
    const groups = {};
    Object.entries(stageCfg.groups || {}).forEach(([groupKey, groupCfg]) => {
      const prev = prevGroups[groupKey] || {};
      const stepChanged = prev.currentStepId && prev.currentStepId !== groupCfg.currentStepId;
      groups[groupKey] = {
        currentStepId: groupCfg.currentStepId,
        // 스텝이 바뀌면(override 또는 신규) 기록 리셋, 같으면 보존
        weeklyScores: stepChanged ? [] : (prev.weeklyScores || []),
        lastEvaluatedWeek: stepChanged ? null : (prev.lastEvaluatedWeek || null),
      };
    });
    stages[stageId] = { enabled: stageCfg.enabled !== false, groups };
  });

  await setDoc(progressRef(uid), {
    ...existing,
    autoMode,
    stages,
    ...(yearLevel ? { yearLevel } : {}),
    updatedAt: serverTimestamp(),
  }, { merge: false });
};

/** Auto Mode ON/OFF 플래그만 토글 (설정/진행상태는 보존). */
export const setCalcAutoMode = async (uid, autoMode) => {
  if (!uid) return;
  const snap = await getDoc(progressRef(uid));
  const existing = snap.exists() ? snap.data() : { stages: {} };
  await setDoc(progressRef(uid), {
    ...existing,
    autoMode: Boolean(autoMode),
    updatedAt: serverTimestamp(),
  }, { merge: false });
};

// ─── 누적 기반 2주 평가 ──────────────────────────────────────────────────────

const MIN_QUESTIONS_FOR_EVAL = 50;
const UP_THRESHOLD = 0.9;
const DOWN_THRESHOLD = 0.5;
const EVAL_PERIOD_DAYS = 14;

/**
 * 그룹별 누적-기반 2주 평가. 앱은 최대 주 1회 이 함수를 호출하지만, 그룹별로는
 * 마지막 체크(lastEvaluatedWeek) 후 EVAL_PERIOD_DAYS(14일)가 지나야 실제로
 * 판정을 시도한다 — 그보다 자주 불려도 대부분의 그룹은 그냥 skip된다.
 *
 * 판정 시점에 누적된 세션 수가 MIN_QUESTIONS_FOR_EVAL(50문제) 미만이면 스텝을
 * 유지하고 데이터를 지우지 않은 채 다음 체크(14일 뒤)까지 계속 쌓는다 — 하루
 * 1문제짜리 세션 하나로 스텝이 오르내리는 것을 막기 위함. 50문제 이상 쌓이면
 * 누적 전체의 정답률로 판정하고 그 즉시 누적을 초기화해 다음 판정을 위한 새
 * 배치를 시작한다.
 *
 * @returns {{ changes: Array<{stageId, groupKey, from, to, reason}>, alerts: Array, data: Object }}
 */
export const evaluateWeeklyProgress = async (uid, notifyFn, preloaded = null) => {
  if (!uid) return { changes: [], alerts: [], data: preloaded };

  const data = preloaded || (await getDoc(progressRef(uid)).then((s) => (s.exists() ? s.data() : null)));
  if (!data) return { changes: [], alerts: [], data: null };
  if (!data.autoMode) return { changes: [], alerts: [], data };

  const today = toDateKey();
  const changes = [];
  const alerts = [];
  const newlyUnlockedGroups = [];
  let mutated = false; // 실제 변경이 있을 때만 Firestore에 씀 (불필요 쓰기 방지)
  const updatedStages = JSON.parse(JSON.stringify(data.stages || {}));
  const medals = Array.isArray(data.medals) ? [...data.medals] : [];

  Object.entries(updatedStages).forEach(([stageId, stageCfg]) => {
    if (!stageCfg.enabled) return;
    Object.entries(stageCfg.groups || {}).forEach(([groupKey, groupData]) => {
      // 마지막 체크 후 14일이 안 지났으면 아직 체크포인트가 아님 — skip
      if (groupData.lastEvaluatedWeek && daysSince(groupData.lastEvaluatedWeek) < EVAL_PERIOD_DAYS) return;

      mutated = true; // 이 그룹을 체크하므로 doc이 바뀜 (lastEvaluatedWeek 갱신)
      const accumulated = groupData.weeklyScores || [];
      const totalPossible = accumulated.reduce((s, r) => s + r.total, 0);

      // 50문제 미만이면 판정 보류 — 데이터는 그대로 두고 다음 체크포인트(14일 뒤)에 다시 확인
      if (totalPossible < MIN_QUESTIONS_FOR_EVAL) {
        groupData.lastEvaluatedWeek = today;
        return;
      }

      const totalScore = accumulated.reduce((s, r) => s + r.score, 0);
      const avg = totalScore / totalPossible;

      const currentStepId = groupData.currentStepId;
      let newStepId = currentStepId;
      let reason = 'stay';

      if (avg >= UP_THRESHOLD) {
        const next = shiftStep(stageId, groupKey, currentStepId, +1);
        if (next) {
          newStepId = next;
          reason = 'up';
        } else {
          reason = 'top'; // 이미 최상위 스텝
        }
      } else if (avg <= DOWN_THRESHOLD) {
        if (isFirstStep(stageId, groupKey, currentStepId)) {
          reason = 'bottom_alert'; // 첫 스텝 + 50% 이하 → 알림
          alerts.push({ stageId, groupKey, stepId: currentStepId, avg });
        } else {
          const prev = shiftStep(stageId, groupKey, currentStepId, -1);
          if (prev) {
            newStepId = prev;
            reason = 'down';
          }
        }
      }

      if (newStepId !== currentStepId) {
        changes.push({ stageId, groupKey, from: currentStepId, to: newStepId, reason });
        groupData.currentStepId = newStepId;
      }

      // 메달 발급: 스텝업 → step, 마지막 스텝 마스터 → phase
      if (reason === 'up') awardStepMedal(medals, stageId, groupKey, newStepId);
      else if (reason === 'top') {
        awardPhaseMedal(medals, stageId, groupKey);
        // 그룹 마스터 → 같은 stage의 다음 그룹 자동 언락
        const allGroupsForStage = getGroupsForStage(stageId);
        const allGroupKeys = Object.keys(allGroupsForStage);
        const currentIdx = allGroupKeys.indexOf(groupKey);
        if (currentIdx >= 0 && currentIdx + 1 < allGroupKeys.length) {
          const nextGroupKey = allGroupKeys[currentIdx + 1];
          if (!stageCfg.groups[nextGroupKey]) {
            const nextTopics = allGroupsForStage[nextGroupKey];
            if (nextTopics?.length > 0) {
              stageCfg.groups[nextGroupKey] = {
                currentStepId: nextTopics[0].id,
                weeklyScores: [],
                lastEvaluatedWeek: null,
              };
              newlyUnlockedGroups.push({ stageId, groupKey: nextGroupKey, stepId: nextTopics[0].id });
              mutated = true;
            }
          }
        }
      }

      // 이번 배치로 판정을 내렸으니(UP/DOWN/STAY 무관) 누적을 비우고 다음
      // 체크포인트를 위한 새 배치를 시작한다.
      groupData.lastEvaluatedWeek = today;
      groupData.weeklyScores = [];
    });

    // stage 메달: 이 stage의 모든 그룹이 마스터됐으면 발급
    const groupKeys = Object.keys(stageCfg.groups || {});
    if (groupKeys.length > 0 && groupKeys.every((gk) => groupMastered(medals, stageId, gk))) {
      awardStageMedal(medals, stageId);
    }
  });

  // mastery 메달: 켜진 모든 stage가 완주됐으면 발급
  const enabledStageIds = Object.entries(updatedStages)
    .filter(([, c]) => c.enabled).map(([id]) => id);
  if (enabledStageIds.length > 0
    && enabledStageIds.every((sid) => hasMedal(medals, (m) => m.tier === 'stage' && m.stageId === sid))) {
    awardMasteryMedal(medals);
  }

  // ── Per-Stage Prerequisite Auto-Unlock ──────────────────────────────────────
  // When a stage earns a stage medal (all groups mastered), check if any
  // DISABLED stages whose prerequisites are now satisfied should be unlocked.
  // This gives gradual, per-stage progression instead of whole-year jumps.
  //
  // Prerequisite map: { stageId: [prerequisite stageIds that must be mastered] }
  const STAGE_PREREQUISITES = {
    'calc-stage-2':   ['calc-stage-1', 'calc-stage-sub'],           // 2-3 digit add/sub requires add+sub basics
    'calc-stage-3':   ['calc-stage-1'],                              // multiplication requires addition
    'calc-stage-4':   ['calc-stage-3'],                              // division requires multiplication
    'calc-stage-5':   ['calc-stage-1', 'calc-stage-sub'],           // fractions require add+sub
    'calc-stage-6':   ['calc-stage-5'],                              // decimals require fractions
    'calc-stage-7':   ['calc-stage-3', 'calc-stage-4'],             // BODMAS requires mult+div
    'clock-stage-2':  ['clock-stage-1'],                             // quarter past requires o'clock
    'clock-stage-3':  ['clock-stage-2'],                             // 5-min requires quarters
    'clock-stage-4':  ['clock-stage-3'],                             // minute-precise requires 5-min
    'clock-stage-5':  ['clock-stage-4'],                             // elapsed time requires precise
  };

  const masteredStageSet = new Set(
    medals.filter((m) => m.tier === 'stage').map((m) => m.stageId),
  );
  const newlyUnlocked = [];

  Object.entries(STAGE_PREREQUISITES).forEach(([stageId, prereqs]) => {
    // Skip if already enabled
    if (updatedStages[stageId]?.enabled) return;
    // Check if ALL prerequisites are mastered
    if (!prereqs.every((pid) => masteredStageSet.has(pid))) return;

    // All prereqs met — auto-enable this stage with first-step defaults
    const allGroups = getGroupsForStage(stageId);
    const allGroupKeys = Object.keys(allGroups);
    if (allGroupKeys.length === 0) return;

    // 첫 번째 그룹만 열고, 나머지는 그룹 마스터 시 순차 언락
    const firstGroupKey = allGroupKeys[0];
    const firstTopics = allGroups[firstGroupKey];
    const groups = {
      [firstGroupKey]: {
        currentStepId: firstTopics[0]?.id,
        weeklyScores: [],
        lastEvaluatedWeek: null,
      },
    };
    updatedStages[stageId] = { enabled: true, groups };
    newlyUnlocked.push(stageId);
    mutated = true;
  });

  // 변경이 없으면 쓰지 않음 (주 2회차 이후 세션은 read만 발생)
  if (!mutated) return { changes, alerts, data };

  const nextData = { ...data, stages: updatedStages, medals };
  await setDoc(progressRef(uid), {
    ...nextData,
    updatedAt: serverTimestamp(),
  }, { merge: false });

  // 선생님 알림 (첫 스텝 + DOWN 조건)
  if (alerts.length > 0 && typeof notifyFn === 'function') {
    alerts.forEach((alert) => notifyFn(alert).catch(() => {}));
  }

  // Stage 자동 활성화 알림
  if (newlyUnlocked.length > 0 && typeof notifyFn === 'function') {
    newlyUnlocked.forEach((stageId) => {
      const stageTitle = CALC_STAGES.find((s) => s.id === stageId)?.title || stageId;
      notifyFn({
        type: 'stage_unlocked',
        stageId,
        stageTitle,
      }).catch(() => {});
    });
  }

  // Group 자동 언락 알림
  if (newlyUnlockedGroups.length > 0 && typeof notifyFn === 'function') {
    newlyUnlockedGroups.forEach(({ stageId, groupKey, stepId }) => {
      const stageTitle = CALC_STAGES.find((s) => s.id === stageId)?.title || stageId;
      notifyFn({
        type: 'group_unlocked',
        stageId,
        stageTitle,
        groupKey,
        stepId,
      }).catch(() => {});
    });
  }

  return { changes, alerts, data: nextData, newlyUnlocked, newlyUnlockedGroups };
};

// ─── 메달 조회/확인 ───────────────────────────────────────────────────────────

/** 아직 축하 모달로 안 보여준 메달들 */
export const getUnseenMedals = (progressData) =>
  (progressData?.medals || []).filter((m) => m && m.seen === false);

/** 모든 메달 (진열장용, 최신순) */
export const getAllMedals = (progressData) =>
  [...(progressData?.medals || [])].sort(
    (a, b) => String(b.awardedAt || '').localeCompare(String(a.awardedAt || '')),
  );

/** 축하 모달 표시 후 모든 메달을 seen 처리 (1 read + 1 write) */
export const markMedalsSeen = async (uid) => {
  if (!uid) return;
  try {
    const snap = await getDoc(progressRef(uid));
    if (!snap.exists()) return;
    const data = snap.data();
    const medals = (data.medals || []).map((m) => ({ ...m, seen: true }));
    await setDoc(progressRef(uid), { ...data, medals, updatedAt: serverTimestamp() }, { merge: false });
  } catch (err) {
    console.warn('markMedalsSeen failed (non-critical):', err?.code || err);
  }
};

// ─── 세션 기록 ────────────────────────────────────────────────────────────────

/**
 * 퀴즈 완료 후 각 그룹의 결과를 weeklyScores에 누적.
 *
 * @param {string} uid
 * @param {Array<{ stageId, groupKey, score, total }>} groupResults
 */
export const recordCalcSession = async (uid, groupResults) => {
  if (!uid || !groupResults?.length) return;
  const snap = await getDoc(progressRef(uid));
  if (!snap.exists()) return;

  const data = snap.data();
  if (!data.autoMode) return;

  const today = toDateKey();
  const updated = JSON.parse(JSON.stringify(data.stages || {}));

  groupResults.forEach(({ stageId, groupKey, score, total }) => {
    if (!updated[stageId]?.groups?.[groupKey]) return;
    const scores = updated[stageId].groups[groupKey].weeklyScores || [];
    // 같은 날 중복 기록 방지 — 오늘 기록이 있으면 덮어씀
    const todayIdx = scores.findIndex((s) => s.date === today);
    const entry = { date: today, score, total };
    if (todayIdx >= 0) scores[todayIdx] = entry;
    else scores.push(entry);
    updated[stageId].groups[groupKey].weeklyScores = scores;
  });

  await setDoc(progressRef(uid), {
    ...data,
    stages: updated,
    updatedAt: serverTimestamp(),
  }, { merge: false });
};

// ─── 문제 타겟 생성 ───────────────────────────────────────────────────────────

/**
 * Auto Mode에서 출제할 스텝 ID 목록을 반환.
 * 활성화된 모든 stage의 활성화된 group의 currentStepId를 모아 반환.
 *
 * @returns string[]   e.g. ['calc-1-s3', 'calc-3-s6', ...]
 */
export const getAutoModeStepIds = (progressData) => {
  if (!progressData?.autoMode) return [];
  const stepIds = [];
  Object.entries(progressData.stages || {}).forEach(([, stageCfg]) => {
    if (!stageCfg.enabled) return;
    Object.values(stageCfg.groups || {}).forEach((groupData) => {
      if (groupData.currentStepId) stepIds.push(groupData.currentStepId);
    });
  });
  return stepIds;
};

/**
 * 퀴즈 결과에서 그룹별 점수를 집계.
 * answerResults: [{ chapterId (= topicId), correct }]
 *
 * @returns Array<{ stageId, groupKey, score, total }>
 */
export const aggregateGroupResults = (progressData, answerResults) => {
  if (!progressData?.autoMode || !answerResults?.length) return [];

  // stepId → { stageId, groupKey } 매핑 미리 빌드
  const stepMap = {};
  Object.entries(progressData.stages || {}).forEach(([stageId, stageCfg]) => {
    Object.entries(stageCfg.groups || {}).forEach(([groupKey, groupData]) => {
      if (groupData.currentStepId) {
        stepMap[groupData.currentStepId] = { stageId, groupKey };
      }
    });
  });

  const tally = {}; // `${stageId}::${groupKey}` → { stageId, groupKey, score, total }
  answerResults.forEach((r) => {
    const topicId = r?.topicId || r?.chapterId;
    const mapping = stepMap[topicId];
    if (!mapping) return;
    const key = `${mapping.stageId}::${mapping.groupKey}`;
    if (!tally[key]) tally[key] = { ...mapping, score: 0, total: 0 };
    tally[key].total += 1;
    if (r?.correct) tally[key].score += 1;
  });

  return Object.values(tally);
};
