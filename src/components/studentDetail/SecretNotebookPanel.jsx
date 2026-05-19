import React from "react";

// Secret Notebook panel — extracted from StudentDetail.jsx challenge tab.
// Purely presentational; renders null when the student has no mistake notes.
const SecretNotebookPanel = ({ student }) => {
  const snc = student.secretNoteCount || {};
  const mt = student.mistakeTags || {};
  const dailyN = Number(snc.daily) || 0;
  const calcN = Number(snc.calc) || 0;
  if (dailyN === 0 && calcN === 0) return null;
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
  return (
    <div style={{ background: "white", borderRadius: "24px", border: "1px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(99,102,241,0.06)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
        <div style={{ width: "4px", height: "24px", background: "linear-gradient(to bottom, #a78bfa, #ec4899)", borderRadius: "2px" }} />
        <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#6d28d9", letterSpacing: "0.05em", textTransform: "uppercase" }}>Secret Notebook</div>
        <span style={{ marginLeft: "auto", fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8" }}>updated at last test</span>
      </div>
      {/* Counts */}
      <div style={{ display: "flex", gap: "12px", marginBottom: totalTagged > 0 ? "18px" : 0 }}>
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
        <div>
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
    </div>
  );
};

export default SecretNotebookPanel;
