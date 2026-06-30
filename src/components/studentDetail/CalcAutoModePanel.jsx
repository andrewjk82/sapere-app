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
  s.id.startsWith("calc-stage")
);

const CLOCK_STAGES = (CURRICULUM_DATA["Daily Calculation"] || []).filter((s) =>
  s.id.startsWith("clock-stage")
);

const YEAR_OPTIONS = [
  { value: 1, label: "Year 1", desc: "Addition, Subtraction basics" },
  { value: 2, label: "Year 2", desc: "+/− 2-digit, Mult intro" },
  { value: 3, label: "Year 3", desc: "+/− 3-digit, ×/÷ intro, Fractions intro" },
  { value: 4, label: "Year 4", desc: "Decimals intro, ×/÷ expanded, Fractions ×" },
  { value: 5, label: "Year 5", desc: "All operations advanced, BODMAS intro" },
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
        // 서버 상태 → 로컬 편집 상태로 변환 (계산 + 시계 모두 포함)
        const next = {};
        [...CALC_STAGES, ...CLOCK_STAGES].forEach((stage) => {
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
      setConfig((prev) => {
        const merged = { ...prev };
        // 계산 영역만 프리셋 값으로 덮어쓰고, 시계(clock-stage) 영역은 이전 설정 그대로 유지
        Object.entries(presetConfig).forEach(([stageId, cfg]) => {
          if (stageId.startsWith("calc-stage")) {
            merged[stageId] = cfg;
          }
        });
        return merged;
      });
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
        const savedGroupsInFirestore = progress?.stages?.[stageId]?.groups || {};
        const allGroupKeys = Object.keys(cfg.groups);
        Object.entries(cfg.groups).forEach(([groupKey, currentStepId]) => {
          // Only save groups that are already in Firestore (previously active)
          // or the first group (A) of a newly-enabled stage.
          // This ensures newly enabled stages start from group A only,
          // letting the auto-unlock chain handle subsequent groups.
          const isFirstGroup = allGroupKeys[0] === groupKey;
          const alreadySaved = Boolean(savedGroupsInFirestore[groupKey]);
          if (isFirstGroup || alreadySaved) {
            groups[groupKey] = { currentStepId };
          }
        });
        stageConfig[stageId] = { enabled: true, groups };
      });
      await saveAutoModeConfig(uid, true, stageConfig, selectedYear || undefined);
      const fresh = await ensureCalcProgress(uid);
      setProgress(fresh);
      setSavedAt(Date.now());
    } catch (e) {
      console.error("Auto mode save failed:", e);
    } finally {
      setSaving(false);
    }
  };

  const [activeTab, setActiveTab] = useState("calc"); // "calc" | "clock"

  const stepLabel = (topic) => `${topic.code} · ${topic.title}`;

  // Count enabled stages & groups for summary
  const enabledStages = Object.entries(config).filter(([stageId, c]) => c.enabled && stageId.startsWith("calc-stage"));
  const totalGroups = enabledStages.reduce((sum, [stageId]) => {
    return sum + Object.keys(getGroupsForStage(stageId)).length;
  }, 0);

  const enabledClockStages = Object.entries(config).filter(([stageId, c]) => c.enabled && stageId.startsWith("clock-stage"));

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
      {/* ── Tabs Navigation ── */}
      <div style={{
        display: "flex",
        background: "#f1f5f9",
        padding: "4px",
        borderRadius: "12px",
        gap: "4px"
      }}>
        <button
          type="button"
          onClick={() => setActiveTab("calc")}
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            background: activeTab === "calc" ? "white" : "transparent",
            color: activeTab === "calc" ? "#5b21b6" : "#64748b",
            fontWeight: 800,
            fontSize: "0.8rem",
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: activeTab === "calc" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.2s"
          }}
        >
          Calculation Settings (연산)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("clock")}
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            background: activeTab === "clock" ? "white" : "transparent",
            color: activeTab === "clock" ? "#5b21b6" : "#64748b",
            fontWeight: 800,
            fontSize: "0.8rem",
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: activeTab === "clock" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.2s"
          }}
        >
          Clock Settings (시계)
        </button>
      </div>

      {activeTab === "calc" && (
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
              학년을 선택하면 모든 연산 Stage/Group이 적정 난이도에 자동 배치됩니다.
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
            Advanced Settings — Fine-tune individual calculation stages & groups
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
        </div>
      )}

      {activeTab === "clock" && (
        <div style={{ display: "grid", gap: "12px" }}>
          <div
            style={{
              padding: "16px",
              borderRadius: "12px",
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              fontSize: "0.8rem",
              color: "#1e3a8a",
              fontWeight: 600,
              lineHeight: 1.5
            }}
          >
            시계(Clock) 학습 설정 섹션입니다. 연산 학년 프리셋 설정과 무관하게, 학생의 현재 이해도에 맞춰 시계 단계를 개별적으로 켜거나 끄고 시작 지점을 지정할 수 있습니다.
          </div>

          {CLOCK_STAGES.map((stage) => {
            const cfg = config[stage.id] || { enabled: false, groups: {} };
            const groups = getGroupsForStage(stage.id);
            const savedGroups = progress?.stages?.[stage.id]?.groups || {};

            return (
              <div
                key={stage.id}
                style={{
                  borderRadius: "16px",
                  border: "2px solid",
                  borderColor: cfg.enabled ? "#3b82f6" : "#f1f5f9",
                  background: cfg.enabled ? "#f8fafc" : "white",
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
                      background: cfg.enabled ? "#3b82f6" : "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {cfg.enabled && <Check size={13} />}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: "0.88rem", color: cfg.enabled ? "#1e3a8a" : "#94a3b8" }}>
                    {stage.title}
                  </div>
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
                              color: "#2563eb",
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
                              border: "1.5px solid #93c5fd",
                              borderRadius: "10px",
                              padding: "5px 8px",
                              fontSize: "0.78rem",
                              fontWeight: 600,
                              color: "#1e3a8a",
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
      </div>
    </div>
  );
}

