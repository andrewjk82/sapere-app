import { useState, useEffect } from "react";
import { Check, TrendingUp, Save, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { CURRICULUM_DATA } from "../../constants/curriculumData";
import {
  ensureCalcProgress,
  saveAutoModeConfig,
  getGroupsForStage,
  buildConfigFromPreset,
} from "../../services/calcProgressService";

const CALC_STAGES = (CURRICULUM_DATA["Daily Calculation"] || []).filter((s) =>
  s.id.startsWith("calc-stage") || s.id.startsWith("clock-stage"),
);

const YEAR_OPTIONS = [
  { value: 1, label: "Year 1", desc: "Addition, Subtraction basics + Clock basics" },
  { value: 2, label: "Year 2", desc: "+/− 2-digit, Mult intro, Clock quarters" },
  { value: 3, label: "Year 3", desc: "+/− 3-digit, ×/÷ intro, Fractions intro, Clock 5-min" },
  { value: 4, label: "Year 4", desc: "Decimals intro, ×/÷ expanded, Fractions ×, Clock precise" },
  { value: 5, label: "Year 5", desc: "All operations advanced, BODMAS intro, Clock elapsed" },
  { value: 6, label: "Year 6", desc: "All operations mastery, Word problems, full BODMAS" },
];

/**
 * Auto Mode 설정 패널 (v2 — Year Level Preset).
 *
 * 선생님은 학년을 선택하면 모든 Stage/Group이 적정 수준에 자동 배치됨.
 * 필요시 "Advanced Settings"를 펼쳐서 개별 Stage/Group을 미세 조정할 수 있음.
 */
export default function CalcAutoModePanel({ uid }) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

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
            groupCfg[groupKey] = savedStep || groups[groupKey][0]?.id;
          });
          next[stage.id] = { enabled: Boolean(saved?.enabled), groups: groupCfg };
        });
        setConfig(next);
        // Detect if existing config matches a year preset
        if (data?.yearLevel) setSelectedYear(data.yearLevel);
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

  const handleYearSelect = (year) => {
    const yr = Number(year);
    setSelectedYear(yr);
    const presetConfig = buildConfigFromPreset(yr);
    if (presetConfig) {
      setConfig(presetConfig);
    }
  };

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

  // Count enabled stages & groups for summary
  const enabledStages = Object.entries(config).filter(([, c]) => c.enabled);
  const totalGroups = enabledStages.reduce((sum, [stageId]) => {
    return sum + Object.keys(getGroupsForStage(stageId)).length;
  }, 0);

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
      {/* ── Year Level Preset Selector ── */}
      <div
        style={{
          padding: "20px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #f5f3ff, #eef2ff)",
          border: "2px solid #c4b5fd",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <Sparkles size={20} color="#7c3aed" />
          <span style={{ fontSize: "0.95rem", fontWeight: 900, color: "#5b21b6" }}>
            Quick Setup — Select Year Level
          </span>
        </div>
        <p style={{ fontSize: "0.8rem", color: "#6d28d9", fontWeight: 600, marginBottom: "14px", lineHeight: 1.5 }}>
          학년을 선택하면 모든 Stage/Group이 적정 난이도에 자동 배치됩니다.
          주간 성과에 따라 각 Group이 자동으로 레벨 업/다운합니다.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          {YEAR_OPTIONS.map((opt) => {
            const isSelected = selectedYear === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleYearSelect(opt.value)}
                style={{
                  padding: "12px 14px",
                  borderRadius: "14px",
                  border: `2px solid ${isSelected ? "#7c3aed" : "#e2e8f0"}`,
                  background: isSelected
                    ? "linear-gradient(135deg, #7c3aed, #6366f1)"
                    : "white",
                  color: isSelected ? "white" : "#1e1b4b",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                }}
              >
                <div style={{ fontSize: "1rem", fontWeight: 900 }}>{opt.label}</div>
                <div style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  marginTop: "4px",
                  opacity: isSelected ? 0.9 : 0.6,
                  lineHeight: 1.3,
                }}>
                  {opt.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Summary after selection */}
        {selectedYear && (
          <div style={{
            marginTop: "14px",
            padding: "10px 14px",
            borderRadius: "12px",
            background: "white",
            border: "1px solid #ddd6fe",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <Check size={16} color="#16a34a" />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1e1b4b" }}>
              Year {selectedYear} preset applied — <strong style={{ color: "#7c3aed" }}>{enabledStages.length} Stages</strong> enabled,{" "}
              <strong style={{ color: "#7c3aed" }}>{totalGroups} Groups</strong> configured
            </span>
          </div>
        )}
      </div>

      {/* ── Info banner ── */}
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

      {/* ── Advanced Settings (Collapsible) ── */}
      <button
        type="button"
        onClick={() => setShowAdvanced(!showAdvanced)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          borderRadius: "12px",
          background: showAdvanced ? "#faf8ff" : "#f8fafc",
          border: `1.5px solid ${showAdvanced ? "#c4b5fd" : "#e2e8f0"}`,
          cursor: "pointer",
          fontFamily: "inherit",
          color: showAdvanced ? "#5b21b6" : "#64748b",
          fontWeight: 800,
          fontSize: "0.82rem",
          transition: "all 0.2s ease",
        }}
      >
        {showAdvanced ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        Advanced Settings — Fine-tune individual stages & groups
      </button>

      {showAdvanced && (
        <div style={{ display: "grid", gap: "12px" }}>
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
                  padding: "14px 18px",
                }}
              >
                {/* Stage header toggle */}
                <div
                  onClick={() => toggleStage(stage.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "6px",
                      background: cfg.enabled ? "#7c3aed" : "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {cfg.enabled && <Check size={13} />}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: "0.88rem", color: cfg.enabled ? "#5b21b6" : "#94a3b8" }}>
                    {stage.title}
                  </div>
                  <span style={{
                    marginLeft: "auto",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#94a3b8",
                  }}>
                    {Object.keys(groups).length} groups
                  </span>
                </div>

                {/* Group rows */}
                {cfg.enabled && (
                  <div style={{ display: "grid", gap: "8px", paddingLeft: "34px", marginTop: "12px" }}>
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
                            gap: "10px",
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 800,
                              color: "#6d28d9",
                              minWidth: "160px",
                            }}
                          >
                            {groupName}
                          </span>
                          <select
                            value={selected}
                            onChange={(e) => setGroupStep(stage.id, groupKey, e.target.value)}
                            style={{
                              flex: 1,
                              minWidth: "200px",
                              background: "white",
                              border: "1.5px solid #c4b5fd",
                              borderRadius: "10px",
                              padding: "5px 8px",
                              fontSize: "0.78rem",
                              fontWeight: 600,
                              color: "#5b21b6",
                              outline: "none",
                              cursor: "pointer",
                              fontFamily: "inherit",
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
                                fontSize: "0.65rem",
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
                                fontSize: "0.65rem",
                                fontWeight: 700,
                                color: "#b45309",
                                background: "#fffbeb",
                                border: "1px solid #fcd34d",
                                borderRadius: "100px",
                                padding: "2px 8px",
                              }}
                            >
                              Will override
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
        </div>
      )}

      {/* ── Save bar ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={handleSave}
          disabled={saving || enabledStages.length === 0}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            borderRadius: "12px",
            border: "none",
            background: saving || enabledStages.length === 0 ? "#c4b5fd" : "#7c3aed",
            color: "white",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: saving || enabledStages.length === 0 ? "default" : "pointer",
            fontFamily: "inherit",
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
        {enabledStages.length === 0 && !saving && (
          <span style={{ fontSize: "0.78rem", color: "#b45309", fontWeight: 600 }}>
            Select a Year Level or enable at least one stage
          </span>
        )}
      </div>
    </div>
  );
}
