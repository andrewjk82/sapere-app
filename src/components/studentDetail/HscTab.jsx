import React from "react";
import { FileText, Plus, Trash2 } from "lucide-react";
import HscScoreChart from "../HscScoreChart";

// HSC exam log tab — extracted from StudentDetail.jsx.
// State (hscForm/hscSaving/hscRecords) and the save/delete handlers stay in
// StudentDetail; this component is purely presentational.
const HscTab = ({
  hscRecords,
  styles,
  hscForm,
  setHscForm,
  hscSaving,
  onSaveRecord,
  onDeleteRecord,
}) => {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <HscScoreChart hscRecords={hscRecords} />

      <div style={styles.card} className="profile-card-mobile">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#7c3aed", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              HSC Exam Log
            </div>
            <h3 style={{ margin: "6px 0 0", fontSize: "1.5rem", color: "#1e1b4b" }}>
              Trial papers and marks
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "999px", background: "#f5f3ff", color: "#6d28d9", fontWeight: 900 }}>
            <FileText size={18} />
            {hscRecords.length} record{hscRecords.length === 1 ? "" : "s"}
          </div>
        </div>

        <form
          onSubmit={onSaveRecord}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(130px, 0.8fr) minmax(180px, 1.4fr) minmax(90px, 0.6fr) minmax(90px, 0.6fr) auto",
            gap: "12px",
            alignItems: "end",
            padding: "16px",
            borderRadius: "22px",
            background: "#f8fafc",
            border: "1px solid #eef2ff",
            marginBottom: "24px",
          }}
        >
          <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase" }}>
            Date
            <input
              type="date"
              value={hscForm.examDate}
              onChange={(e) => setHscForm({ ...hscForm, examDate: e.target.value })}
              style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 800, color: "#1e1b4b", outline: "none" }}
            />
          </label>
          <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase" }}>
            Paper
            <input
              value={hscForm.paper}
              onChange={(e) => setHscForm({ ...hscForm, paper: e.target.value })}
              placeholder="e.g. 2023 HSC Paper 1"
              style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 800, color: "#1e1b4b", outline: "none" }}
            />
          </label>
          <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase" }}>
            Score
            <input
              type="number"
              min="0"
              value={hscForm.score}
              onChange={(e) => setHscForm({ ...hscForm, score: e.target.value })}
              style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 900, color: "#1e1b4b", outline: "none" }}
            />
          </label>
          <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase" }}>
            Out of
            <input
              type="number"
              min="1"
              value={hscForm.total}
              onChange={(e) => setHscForm({ ...hscForm, total: e.target.value })}
              style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 900, color: "#1e1b4b", outline: "none" }}
            />
          </label>
          <button
            type="submit"
            disabled={hscSaving}
            style={{
              height: "45px",
              padding: "0 18px",
              borderRadius: "14px",
              border: "none",
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              color: "white",
              fontWeight: 900,
              cursor: hscSaving ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            <Plus size={17} />
            {hscSaving ? "Saving" : "Add"}
          </button>
          {/* Topic breakdown — optional per-strand percentages */}
          <div style={{ gridColumn: "1 / -1" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase", marginBottom: "8px" }}>
              Topic breakdown <span style={{ color: "#94a3b8", fontWeight: 700 }}>(optional · % per strand)</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "10px" }}>
              {["Algebra", "Calculus", "Statistics", "Trigonometry"].map((topic) => (
                <label key={topic} style={{ display: "grid", gap: "5px", fontSize: "0.68rem", fontWeight: 800, color: "#94a3b8" }}>
                  {topic}
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={hscForm.topics?.[topic] ?? ""}
                    onChange={(e) => setHscForm({
                      ...hscForm,
                      topics: { ...(hscForm.topics || {}), [topic]: e.target.value },
                    })}
                    placeholder="%"
                    style={{ padding: "10px 12px", borderRadius: "12px", border: "1.5px solid #e2e8f0", fontWeight: 900, color: "#1e1b4b", outline: "none" }}
                  />
                </label>
              ))}
            </div>
          </div>
          <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase", gridColumn: "1 / -1" }}>
            Notes
            <textarea
              rows={3}
              value={hscForm.notes}
              onChange={(e) => setHscForm({ ...hscForm, notes: e.target.value })}
              placeholder="Topics to review, exam conditions, paper section notes..."
              style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 700, color: "#1e1b4b", outline: "none", resize: "vertical" }}
            />
          </label>
        </form>

        <div style={{ display: "grid", gap: "12px" }}>
          {hscRecords.length > 0 ? hscRecords.map((record) => {
            const percentage = Number(record.percentage ?? ((Number(record.score) / Number(record.total)) * 100));
            return (
              <div
                key={record.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px minmax(0, 1fr) 90px auto",
                  gap: "16px",
                  alignItems: "center",
                  padding: "16px",
                  borderRadius: "18px",
                  background: "white",
                  border: "1px solid #eef2ff",
                  boxShadow: "0 10px 24px rgba(79,70,229,0.05)",
                }}
              >
                <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#64748b" }}>{record.examDate}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 900, color: "#1e1b4b", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{record.paper}</div>
                  {record.notes && <div style={{ marginTop: "4px", fontSize: "0.78rem", color: "#64748b", lineHeight: 1.45 }}>{record.notes}</div>}
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 950, color: "#4f46e5", fontSize: "1.05rem" }}>{Number(record.score)}/{Number(record.total)}</div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 900, color: "#7c3aed" }}>{Number.isFinite(percentage) ? percentage.toFixed(1) : "0.0"}%</div>
                </div>
                <button
                  type="button"
                  onClick={() => onDeleteRecord(record)}
                  aria-label={`Delete ${record.paper}`}
                  style={{ width: "42px", height: "42px", borderRadius: "12px", border: "none", background: "#fff1f2", color: "#e11d48", display: "grid", placeItems: "center", cursor: "pointer" }}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            );
          }) : (
            <div style={{ padding: "30px", borderRadius: "20px", background: "#f8fafc", border: "1px dashed #cbd5e1", color: "#64748b", textAlign: "center", fontWeight: 800 }}>
              No HSC papers recorded yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HscTab;
