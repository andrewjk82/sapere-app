import { useState, useEffect } from "react";
import { Check, TrendingUp, Save } from "lucide-react";
import { CURRICULUM_DATA } from "../../constants/curriculumData";
import {
  ensureCalcProgress,
  saveAutoModeConfig,
  getGroupsForStage,
} from "../../services/calcProgressService";

const CALC_STAGES = (CURRICULUM_DATA["Daily Calculation"] || []).filter((s) =>
  s.id.startsWith("calc-stage"),
);

/**
 * Auto Mode 설정 패널.
 *
 * 선생님은 Stage를 켜고, 각 그룹(A, B, C…)별 현재 스텝을 드롭다운으로 고른다.
 * 시스템이 주간 성과에 따라 각 그룹을 독립적으로 자동 조정한다.
 *
 * 진행상태는 users/{uid}/calc_progress/main 에 저장된다.
 */
export default function CalcAutoModePanel({ uid }) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);
  const [loadError, setLoadError] = useState(null);

  // 로컬 편집 상태: { [stageId]: { enabled, groups: { [groupKey]: currentStepId } } }
  const [config, setConfig] = useState({});
  // 서버에서 읽어온 진행상태 (currentStep 표시용)
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    let cancelled = false;
    if (!uid) {
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const data = await ensureCalcProgress(uid);
        if (cancelled) return;
        setProgress(data);
        // 서버 상태 → 로컬 편집 상태로 변환
        const next = {};
        CALC_STAGES.forEach((stage) => {
          const saved = data?.stages?.[stage.id];
          const groups = getGroupsForStage(stage.id);
          const groupCfg = {};
          Object.keys(groups).forEach((groupKey) => {
            const savedStep = saved?.groups?.[groupKey]?.currentStepId;
            // 기본값: 그룹의 첫 스텝
            groupCfg[groupKey] = savedStep || groups[groupKey][0]?.id;
          });
          next[stage.id] = { enabled: Boolean(saved?.enabled), groups: groupCfg };
        });
        setConfig(next);
      } catch (e) {
        if (!cancelled) {
          console.error('Auto mode progress load failed:', e);
          setLoadError(e?.code || e?.message || 'load-failed');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [uid]);

  const toggleStage = (stageId) => {
    setConfig((prev) => ({
      ...prev,
      [stageId]: { ...prev[stageId], enabled: !prev[stageId]?.enabled },
    }));
  };

  const setGroupStep = (stageId, groupKey, stepId) => {
    setConfig((prev) => ({
      ...prev,
      [stageId]: {
        ...prev[stageId],
        groups: { ...prev[stageId].groups, [groupKey]: stepId },
      },
    }));
  };

  const handleSave = async () => {
    if (!uid) return;
    setSaving(true);
    try {
      // 활성화된 stage만 저장
      const stageConfig = {};
      Object.entries(config).forEach(([stageId, cfg]) => {
        if (!cfg.enabled) return;
        const groups = {};
        Object.entries(cfg.groups).forEach(([groupKey, currentStepId]) => {
          groups[groupKey] = { currentStepId };
        });
        stageConfig[stageId] = { enabled: true, groups };
      });
      await saveAutoModeConfig(uid, true, stageConfig);
      const fresh = await ensureCalcProgress(uid);
      setProgress(fresh);
      setSavedAt(Date.now());
    } catch (e) {
      console.error("Auto mode save failed:", e);
    } finally {
      setSaving(false);
    }
  };

  const stepLabel = (topic) => `${topic.code} · ${topic.title}`;

  if (!uid) {
    return (
      <div style={{ padding: "20px", color: "#92400e", fontSize: "0.85rem" }}>
        This student has no linked registered account, so Auto Mode is unavailable.
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ padding: "20px", color: "#94a3b8", fontSize: "0.85rem" }}>
        Loading auto-mode progress…
      </div>
    );
  }

  if (loadError) {
    return (
      <div style={{ padding: "20px", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600 }}>
        Could not load auto-mode progress ({loadError}). Please retry — if this
        persists, the Firestore rules may need to be deployed.
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: "16px" }}>
      {/* Info banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "12px 16px",
          borderRadius: "12px",
          background: "#f5f3ff",
          border: "1px solid #ddd6fe",
        }}
      >
        <TrendingUp size={18} color="#7c3aed" />
        <span style={{ fontSize: "0.8rem", color: "#5b21b6", fontWeight: 600 }}>
          Each row (A, B, C…) levels up or down on its own. Weekly avg ≥ 90% → next
          step · ≤ 50% → previous step (min 3 sessions/week).
        </span>
      </div>

      {CALC_STAGES.map((stage) => {
        const cfg = config[stage.id] || { enabled: false, groups: {} };
        const groups = getGroupsForStage(stage.id);
        const savedGroups = progress?.stages?.[stage.id]?.groups || {};

        return (
          <div
            key={stage.id}
            style={{
              borderRadius: "16px",
              border: "2px solid",
              borderColor: cfg.enabled ? "#7c3aed" : "#f1f5f9",
              background: cfg.enabled ? "#faf5ff" : "white",
              padding: "16px 20px",
            }}
          >
            {/* Stage header toggle */}
            <div
              onClick={() => toggleStage(stage.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  background: cfg.enabled ? "#7c3aed" : "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                {cfg.enabled && <Check size={14} />}
              </div>
              <div style={{ fontWeight: 800, fontSize: "1rem", color: "#5b21b6" }}>
                {stage.title}
              </div>
            </div>

            {/* Group rows */}
            {cfg.enabled && (
              <div style={{ display: "grid", gap: "10px", paddingLeft: "38px", marginTop: "14px" }}>
                {Object.entries(groups).map(([groupKey, topics]) => {
                  const groupName = topics[0]?.group || groupKey;
                  const selected = cfg.groups[groupKey] || topics[0]?.id;
                  const liveStep = savedGroups[groupKey]?.currentStepId;
                  const isOverride = liveStep && liveStep !== selected;
                  return (
                    <div
                      key={groupKey}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 800,
                          color: "#6d28d9",
                          minWidth: "180px",
                        }}
                      >
                        {groupName}
                      </span>
                      <select
                        value={selected}
                        onChange={(e) => setGroupStep(stage.id, groupKey, e.target.value)}
                        style={{
                          flex: 1,
                          minWidth: "220px",
                          background: "white",
                          border: "1.5px solid #c4b5fd",
                          borderRadius: "10px",
                          padding: "6px 10px",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "#5b21b6",
                          outline: "none",
                          cursor: "pointer",
                        }}
                      >
                        {topics.map((topic) => (
                          <option key={topic.id} value={topic.id}>
                            {stepLabel(topic)}
                          </option>
                        ))}
                      </select>
                      {liveStep && !isOverride && (
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            color: "#16a34a",
                            background: "#f0fdf4",
                            border: "1px solid #bbf7d0",
                            borderRadius: "100px",
                            padding: "2px 8px",
                          }}
                        >
                          Current
                        </span>
                      )}
                      {isOverride && (
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            color: "#b45309",
                            background: "#fffbeb",
                            border: "1px solid #fcd34d",
                            borderRadius: "100px",
                            padding: "2px 8px",
                          }}
                        >
                          Will override (resets weekly record)
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* Save bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            borderRadius: "12px",
            border: "none",
            background: saving ? "#c4b5fd" : "#7c3aed",
            color: "white",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: saving ? "default" : "pointer",
          }}
        >
          <Save size={16} />
          {saving ? "Saving…" : "Save Auto Mode"}
        </button>
        {savedAt && !saving && (
          <span style={{ fontSize: "0.78rem", color: "#16a34a", fontWeight: 600 }}>
            Saved ✓
          </span>
        )}
      </div>
    </div>
  );
}
