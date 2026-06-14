/**
 * calcMedals.js
 *
 * Daily Calculation 메달 시스템의 표시 메타데이터.
 * 발급 로직은 calcProgressService.js, UI는 MedalCelebrationModal/대시보드.
 *
 * 3계층(+Mastery):
 *   step    🥉 그룹에서 스텝 1칸 UP        — Medal  아이콘 / 앰버
 *   phase   🥈 한 그룹(A/B/C…) 완주        — Award  아이콘 / 인디고
 *   stage   🥇 한 Stage의 모든 그룹 완주   — Trophy 아이콘 / 골드
 *   mastery 👑 켜진 모든 Stage 완주        — Crown  아이콘 / 퍼플
 */

import { CURRICULUM_DATA } from "./curriculumData";

export const MEDAL_TIERS = {
  step: {
    tier: "step",
    label: "Step Up",
    icon: "Medal",
    // 앱 계산 테마 = 앰버/골드
    color: "#b45309",
    border: "#f59e0b",
    bgFrom: "#fffbeb",
    bgTo: "#fcd34d",
    pillBg: "#fffbeb",
    pillBorder: "#fde68a",
  },
  phase: {
    tier: "phase",
    label: "Phase Complete",
    icon: "Award",
    color: "#4338ca",
    border: "#6366f1",
    bgFrom: "#eef2ff",
    bgTo: "#c7d2fe",
    pillBg: "#eef2ff",
    pillBorder: "#c7d2fe",
  },
  stage: {
    tier: "stage",
    label: "Stage Clear",
    icon: "Trophy",
    color: "#a16207",
    border: "#eab308",
    bgFrom: "#fef9c3",
    bgTo: "#fcd34d",
    pillBg: "#fef9c3",
    pillBorder: "#fde047",
  },
  mastery: {
    tier: "mastery",
    label: "Mastery",
    icon: "Crown",
    color: "#6d28d9",
    border: "#7c3aed",
    bgFrom: "#f5f3ff",
    bgTo: "#ddd6fe",
    pillBg: "#f5f3ff",
    pillBorder: "#ddd6fe",
  },
};

// 빠른 stage/step 조회 맵
const STAGE_BY_ID = {};
const STEP_META = {};
(CURRICULUM_DATA["Daily Calculation"] || []).forEach((stage) => {
  STAGE_BY_ID[stage.id] = stage;
  (stage.topics || []).forEach((t) => {
    if (t.id) STEP_META[t.id] = { code: t.code || "", title: t.title || "", group: t.group || "" };
  });
});

const shortStageTitle = (stageId) => {
  const full = STAGE_BY_ID[stageId]?.title || stageId;
  // "Stage 3: Multiplication (34 steps · 7 phases)" → "Multiplication"
  const m = full.match(/^(?:Stage|Clock Stage)\s*[\w]*:?\s*([^(]+)/);
  return (m ? m[1] : full).trim();
};

/**
 * 메달 1개를 모달/진열장에서 쓸 표시 정보로 변환.
 * { tier, title, subtitle, ...MEDAL_TIERS[tier] }
 */
export const describeMedal = (medal) => {
  const meta = MEDAL_TIERS[medal.tier] || MEDAL_TIERS.step;
  const stageName = shortStageTitle(medal.stageId);
  const step = medal.stepId ? STEP_META[medal.stepId] : null;
  const groupName = step?.group || (medal.groupKey ? `${medal.groupKey} group` : "");

  let title;
  let subtitle;
  if (medal.tier === "step") {
    title = `${meta.label} · ${stageName}`;
    subtitle = step ? `${step.code} · ${step.title}` : stageName;
  } else if (medal.tier === "phase") {
    title = `${meta.label} · ${stageName}`;
    subtitle = groupName ? `${groupName} mastered` : "Phase mastered";
  } else if (medal.tier === "stage") {
    title = `${meta.label} · ${stageName}`;
    subtitle = "All phases complete 🎉";
  } else {
    title = meta.label;
    subtitle = "Every stage complete 👑";
  }

  return { ...meta, ...medal, stageName, title, subtitle };
};
