import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Trophy } from "lucide-react";
import { db } from "../../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

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
