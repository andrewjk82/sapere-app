import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const SecretNotebookPanel = ({ student }) => {
  const [confirming, setConfirming] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [resetDone, setResetDone] = useState(false);

  const snc = student.secretNoteCount || {};
  const mt = student.mistakeTags || {};
  console.log("[SecretNotebookPanel DEBUG]", { 
    studentId: student?.uid || student?.id, 
    email: student?.email,
    secretNoteCount: student?.secretNoteCount, 
    dailyN: snc.daily, 
    calcN: snc.calc 
  });
  const dailyN = Number(snc.daily) || 0;
  const calcN = Number(snc.calc) || 0;

  const TAGS = [
    { id: "mistake", emoji: "🎨", label: "Simple mistake", color: "#0ea5e9" },
    { id: "concept", emoji: "🌀", label: "Concept gap", color: "#8b5cf6" },
    { id: "time", emoji: "⏰", label: "Ran out of time", color: "#f59e0b" },
    { id: "comprehension", emoji: "🧩", label: "Didn't understand", color: "#ef4444" },
  ];
  const merged = {};
  TAGS.forEach(t => {
    merged[t.id] = (Number(mt.daily?.[t.id]) || 0) + (Number(mt.calc?.[t.id]) || 0);
  });
  const totalTagged = Object.values(merged).reduce((a, b) => a + b, 0);

  const handleReset = async () => {
    setResetting(true);
    try {
      await updateDoc(doc(db, "users", student.uid), {
        secretNoteResets: { kinds: ["daily", "calc"], resetAt: Date.now() },
      });
      setResetDone(true);
      setConfirming(false);
    } catch (e) {
      console.error("secretNoteResets write failed:", e);
    } finally {
      setResetting(false);
    }
  };

  if (dailyN === 0 && calcN === 0 && !resetDone) return null;

  return (
    <div style={{ background: "white", borderRadius: "24px", border: "1px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(99,102,241,0.06)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
        <div style={{ width: "4px", height: "24px", background: "linear-gradient(to bottom, #a78bfa, #ec4899)", borderRadius: "2px" }} />
        <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#6d28d9", letterSpacing: "0.05em", textTransform: "uppercase" }}>Secret Notebook</div>
        <span style={{ marginLeft: "auto", fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8" }}>updated at last test</span>
      </div>

      {resetDone ? (
        <div style={{ padding: "16px", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0", color: "#15803d", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
          Reset queued — clears next time student opens the app.
        </div>
      ) : (
        <>
          {/* Counts */}
          <div style={{ display: "flex", gap: "12px", marginBottom: totalTagged > 0 ? "18px" : "16px" }}>
            <div style={{ flex: 1, background: "#f5f3ff", borderRadius: "16px", padding: "14px 16px", border: "1px solid #ddd6fe" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#7c3aed" }}>{dailyN}</div>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>Daily mistakes</div>
            </div>
            <div style={{ flex: 1, background: "#fffbeb", borderRadius: "16px", padding: "14px 16px", border: "1px solid #fde68a" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#b45309" }}>{calcN}</div>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>Calculation mistakes</div>
            </div>
          </div>

          {/* Mistake tag breakdown */}
          {totalTagged > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", marginBottom: "10px" }}>Why mistakes happen</div>
              {TAGS.filter(t => merged[t.id] > 0).sort((a, b) => merged[b.id] - merged[a.id]).map(t => {
                const pct = Math.round((merged[t.id] / totalTagged) * 100);
                return (
                  <div key={t.id} style={{ marginBottom: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#475569" }}>{t.emoji} {t.label}</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 800, color: t.color }}>{merged[t.id]} · {pct}%</span>
                    </div>
                    <div style={{ height: "8px", background: "#f1f5f9", borderRadius: "4px", overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: t.color, borderRadius: "4px" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Reset action */}
          {!confirming ? (
            <button
              onClick={() => setConfirming(true)}
              style={{ width: "100%", padding: "10px", background: "transparent", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "0.8rem", fontWeight: 700, color: "#94a3b8", cursor: "pointer" }}
            >
              Reset Secret Notebook
            </button>
          ) : (
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#b91c1c" }}>Clear all {dailyN + calcN} mistakes? This cannot be undone.</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={handleReset}
                  disabled={resetting}
                  style={{ flex: 1, padding: "9px", background: "#ef4444", border: "none", borderRadius: "8px", color: "white", fontWeight: 800, fontSize: "0.82rem", cursor: resetting ? "not-allowed" : "pointer", opacity: resetting ? 0.7 : 1 }}
                >
                  {resetting ? "Resetting…" : "Yes, reset"}
                </button>
                <button
                  onClick={() => setConfirming(false)}
                  style={{ flex: 1, padding: "9px", background: "white", border: "1px solid #e2e8f0", borderRadius: "8px", fontWeight: 700, fontSize: "0.82rem", cursor: "pointer" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SecretNotebookPanel;
