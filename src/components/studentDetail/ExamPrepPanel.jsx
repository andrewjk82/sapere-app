import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Sparkles, Trophy, Target } from "lucide-react";
import { db } from "../../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { CURRICULUM_DATA } from "../../constants/curriculumData";

// Flatten Year 11/12 (which are split by course) into a flat chapter list.
const flattenChapters = (yearKey) => {
  const data = CURRICULUM_DATA[yearKey];
  if (!data) return [];
  if (Array.isArray(data)) return data;
  return Object.values(data).flat();
};
const allYearKeys = Object.keys(CURRICULUM_DATA);

/**
 * Teacher-side Exam Prep panel.
 *
 * Lives in the Challenge tab right under Basic Calculation and mirrors its
 * card layout: a left-side section title + a right-side enable/disable pill.
 * When enabled, the panel expands to show cumulative topic analysis pulled
 * from `students/{uid}/exam_prep/summary` (mirrored by the student app on
 * every round finish).
 */
export default function ExamPrepPanel({ styles, student, studentId, onUpdateSetting }) {
  const enabled = student?.examPrepEnabled === true;
  const [summary, setSummary] = useState(null);

  // Teacher-controlled selection. Stored on the student doc so the student
  // app picks it up automatically; falls back to an empty selection.
  const selection = useMemo(() => ({
    years: Array.isArray(student?.examPrepSelection?.years) ? student.examPrepSelection.years : [],
    chapters: Array.isArray(student?.examPrepSelection?.chapters) ? student.examPrepSelection.chapters : [],
  }), [student?.examPrepSelection]);

  const [activeYear, setActiveYear] = useState(selection.years[0] || student?.assignedYear || "Year 9");
  const yearChapters = flattenChapters(activeYear);

  const writeSelection = (next) => {
    onUpdateSetting("examPrepSelection", {
      years: Array.isArray(next?.years) ? next.years : [],
      chapters: Array.isArray(next?.chapters) ? next.chapters : [],
    });
  };
  // Selection is driven by chapter checkboxes only. The Year strip is a
  // pure navigation control — clicking it just changes which year's chapters
  // are shown. The set of "active" years is derived from selected chapters
  // so the UI stays consistent without a separate year toggle.
  const yearsForChapters = useMemo(() => {
    const set = new Set();
    allYearKeys.forEach((y) => {
      flattenChapters(y).forEach((ch) => {
        if (selection.chapters.includes(ch.id)) set.add(y);
      });
    });
    return set;
  }, [selection.chapters]);

  const toggleChapter = (chId) => {
    const chapters = selection.chapters.includes(chId)
      ? selection.chapters.filter((v) => v !== chId)
      : [...selection.chapters, chId];
    writeSelection({ ...selection, chapters });
  };

  useEffect(() => {
    if (!studentId || !enabled) { setSummary(null); return undefined; }
    const ref = doc(db, "students", studentId, "exam_prep", "summary");
    return onSnapshot(ref, (snap) => {
      setSummary(snap.exists() ? snap.data() : null);
    }, (err) => console.warn("exam_prep summary listen failed:", err));
  }, [studentId, enabled]);

  const sessions = summary?.sessions || 0;
  const attempted = summary?.attempted || 0;
  const correct = summary?.correct || 0;
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  const byTopic = summary?.byTopic || {};
  const lastRound = summary?.lastRound;

  const analysis = Object.entries(byTopic).map(([id, t]) => ({
    id,
    title: t.title || "Untitled topic",
    attempted: t.attempted || 0,
    correct: t.correct || 0,
    pct: (t.attempted || 0) > 0 ? Math.round((t.correct / t.attempted) * 100) : 0,
  })).sort((a, b) => {
    const aSmall = a.attempted < 3 ? 1 : 0;
    const bSmall = b.attempted < 3 ? 1 : 0;
    if (aSmall !== bSmall) return aSmall - bSmall;
    return a.pct - b.pct;
  });

  return (
    <div style={styles.card} className="profile-card-mobile">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: enabled ? "24px" : "0",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "4px",
              height: "24px",
              background: "linear-gradient(to bottom, #a78bfa, #7c3aed)",
              borderRadius: "2px",
            }}
          />
          <div
            className="section-title"
            style={{
              fontSize: "0.85rem",
              fontWeight: 800,
              color: "#1e1b4b",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            EXAM PREP
          </div>
        </div>

        {/* Enable/Disable toggle — same shape as Basic Calculation's */}
        <div
          onClick={() => onUpdateSetting("examPrepEnabled", !enabled)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "100px",
            background: enabled ? "linear-gradient(135deg, #f5f3ff, #ede9fe)" : "#f8fafc",
            border: `1.5px solid ${enabled ? "#a78bfa" : "#e2e8f0"}`,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: enabled ? "0 4px 12px rgba(124,58,237,0.12)" : "none",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "22px",
              background: enabled ? "#7c3aed" : "#cbd5e1",
              borderRadius: "20px",
              position: "relative",
              transition: "all 0.3s",
            }}
          >
            <motion.div
              animate={{ x: enabled ? 20 : 3 }}
              style={{
                width: "16px",
                height: "16px",
                background: "white",
                borderRadius: "50%",
                position: "absolute",
                top: "3px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 900,
              color: enabled ? "#5b21b6" : "#64748b",
              letterSpacing: "0.02em",
            }}
          >
            {enabled ? "ENABLED" : "DISABLED"}
          </span>
        </div>
      </div>

      {enabled && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Header row with last-round chip */}
          {lastRound && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#ede9fe", color: "#5b21b6", padding: "6px 12px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 800 }}>
                <Trophy size={14} /> Last: {lastRound.correct}/{lastRound.total} · +{lastRound.xp} XP
              </div>
            </div>
          )}

          {/* Three stat tiles */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            <Stat label="Sessions" value={sessions} color="#7c3aed" />
            <Stat label="Accuracy" value={`${accuracy}%`} color="#10b981" />
            <Stat label="Attempted" value={attempted} color="#1e1b4b" />
          </div>

          {/* Teacher-driven topic picker. Lives here (NOT on the student
              app) — the student only sees the chosen chapters and a Start
              button on their Exam Prep page. */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <Target size={16} color="#7c3aed" />
              <span style={{ fontWeight: 900, color: "#1e1b4b", fontSize: "0.9rem" }}>Exam topics for this student</span>
              <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "#94a3b8", fontWeight: 800 }}>
                {selection.chapters.length} selected
              </span>
            </div>

            {/* Year tabs — pure navigation. "Active" = currently viewing.
                "Has selections" (light tint) = at least one chapter from that
                year is checked. Clicking only switches the visible year. */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
              {allYearKeys.map((y) => {
                const hasSelections = yearsForChapters.has(y);
                const isActive = activeYear === y;
                return (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setActiveYear(y)}
                    style={{
                      padding: "6px 12px", borderRadius: "999px",
                      border: `1px solid ${isActive ? "#7c3aed" : hasSelections ? "#c4b5fd" : "#e2e8f0"}`,
                      background: isActive ? "#ede9fe" : hasSelections ? "#faf5ff" : "#fff",
                      color: isActive ? "#5b21b6" : hasSelections ? "#6d28d9" : "#475569",
                      fontWeight: 800, fontSize: "0.78rem", cursor: "pointer",
                    }}
                  >
                    {y}
                  </button>
                );
              })}
            </div>

            {/* Chapter cards — single onClick on the whole card so a click
                anywhere toggles selection cleanly (no label/input nesting). */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px" }}>
              {yearChapters.length === 0 ? (
                <div style={{ gridColumn: "1 / -1", padding: "16px", background: "#f8fafc", borderRadius: "12px", color: "#94a3b8", fontWeight: 700, textAlign: "center", fontSize: "0.85rem" }}>
                  No chapters defined for {activeYear} yet.
                </div>
              ) : yearChapters.map((ch) => {
                const on = selection.chapters.includes(ch.id);
                return (
                  <div
                    key={ch.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleChapter(ch.id)}
                    onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleChapter(ch.id); } }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "10px 12px", borderRadius: "12px",
                      border: `1.5px solid ${on ? "#a78bfa" : "#e2e8f0"}`,
                      background: on ? "#faf5ff" : "#fff",
                      cursor: "pointer", userSelect: "none",
                      transition: "all 0.15s",
                    }}
                  >
                    {/* Custom checkbox visual (no real <input> to avoid
                        label/input double-click toggling). */}
                    <div
                      aria-hidden
                      style={{
                        width: "18px", height: "18px", borderRadius: "5px",
                        border: `2px solid ${on ? "#7c3aed" : "#cbd5e1"}`,
                        background: on ? "#7c3aed" : "#fff",
                        display: "grid", placeItems: "center", flexShrink: 0,
                        transition: "all 0.15s",
                      }}
                    >
                      {on && (
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6.5L4.8 8.8L9.5 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span style={{ fontWeight: 700, color: on ? "#5b21b6" : "#334155", fontSize: "0.85rem", lineHeight: 1.3 }}>
                      {ch.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Topic analysis */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <Sparkles size={16} color="#7c3aed" />
              <span style={{ fontWeight: 900, color: "#1e1b4b", fontSize: "0.9rem" }}>Where to focus</span>
            </div>
            {analysis.length === 0 ? (
              <div style={{ padding: "18px", borderRadius: "14px", background: "#f8fafc", color: "#94a3b8", textAlign: "center", fontWeight: 700, fontSize: "0.85rem" }}>
                No exam prep rounds completed yet.
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {analysis.slice(0, 8).map((t) => {
                  const color = t.attempted < 3 ? "#94a3b8" : t.pct < 50 ? "#ef4444" : t.pct < 75 ? "#f59e0b" : "#10b981";
                  return (
                    <div key={t.id}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "4px" }}>
                        <span style={{ fontWeight: 700, color: "#1e293b" }}>{t.title}</span>
                        <span style={{ fontWeight: 800, color }}>{t.pct}% · {t.correct}/{t.attempted}</span>
                      </div>
                      <div style={{ height: "6px", background: "#f1f5f9", borderRadius: "999px", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${t.pct}%`, background: color }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const Stat = ({ label, value, color }) => (
  <div style={{ background: "#f8fafc", padding: "12px 14px", borderRadius: "14px", textAlign: "center" }}>
    <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
    <div style={{ fontSize: "1.4rem", fontWeight: 900, color, marginTop: "2px" }}>{value}</div>
  </div>
);
