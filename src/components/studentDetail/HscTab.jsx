import React, { useState, useRef } from "react";
import { FileText, Plus, Trash2 } from "lucide-react";
import HscScoreChart from "../HscScoreChart";
import { NSW_SCHOOL_RANKINGS } from "../../constants/nswSchoolRankings";

const HscTab = ({
  hscRecords,
  styles,
  hscForm,
  setHscForm,
  hscSaving,
  onSaveRecord,
  onDeleteRecord,
  student,
  onUpdateModeration,
  hscTypeStats,
}) => {
  const [modForm, setModForm] = useState({
    assignedCourse: Array.isArray(student?.assignedCourse) ? student.assignedCourse[0] : (student?.assignedCourse || ""),
    school: student?.school || "",
    schoolSubjectRank: student?.schoolSubjectRank || "",
    internalRank: student?.internalRank || "",
    internalTotal: student?.internalTotal || "",
  });
  const [modSaving, setModSaving] = useState(false);
  const [schoolSearch, setSchoolSearch] = useState(student?.school || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const filteredSchools = schoolSearch.trim().length >= 2
    ? NSW_SCHOOL_RANKINGS.filter((s) =>
        s.school.toLowerCase().includes(schoolSearch.toLowerCase())
      ).slice(0, 8)
    : [];

  const handleSelectSchool = (s) => {
    setSchoolSearch(s.school);
    setModForm((f) => ({ ...f, school: s.school, schoolSubjectRank: s.rank }));
    setShowDropdown(false);
  };

  const handleModSave = async () => {
    if (!onUpdateModeration) return;
    setModSaving(true);
    const fields = {
      school: modForm.school || null,
      schoolSubjectRank: modForm.schoolSubjectRank ? Number(modForm.schoolSubjectRank) : null,
      internalRank: modForm.internalRank ? Number(modForm.internalRank) : null,
      internalTotal: modForm.internalTotal ? Number(modForm.internalTotal) : null,
    };
    if (modForm.assignedCourse) fields.assignedCourse = [modForm.assignedCourse];
    await onUpdateModeration(fields);
    setModSaving(false);
  };

  const typeEntries = hscTypeStats
    ? Object.entries(hscTypeStats).filter(([, s]) => s?.total > 0).sort(([, a], [, b]) => (b.total || 0) - (a.total || 0))
    : null;

  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <HscScoreChart hscRecords={hscRecords} student={student} />

      {/* ── Practice by Type Progress ── */}
      <div style={{ ...styles.card, padding: "20px 24px" }} className="profile-card-mobile">
        <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#7c3aed", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
          Practice by Type
        </div>
        <div style={{ fontSize: "0.8rem", color: "#6d6a85", fontWeight: 600, marginBottom: "16px" }}>
          Accuracy per question type from HSC past paper practice sessions.
        </div>
        {typeEntries === null ? (
          <div style={{ color: "#94a3b8", fontSize: "0.82rem", fontWeight: 700, textAlign: "center", padding: "12px" }}>Loading…</div>
        ) : typeEntries.length === 0 ? (
          <div style={{ padding: "16px", background: "#f8fafc", borderRadius: "12px", border: "1px dashed #e2e8f0", color: "#94a3b8", fontWeight: 700, fontSize: "0.82rem", textAlign: "center" }}>
            No Practice by Type attempts yet.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {typeEntries.map(([slug, s]) => {
              const pct = Math.round(((s.mastered ?? s.correct ?? 0) / s.total) * 100);
              const barColor = pct >= 90 ? "#22c55e" : pct >= 70 ? "#4ade80" : pct >= 40 ? "#86efac" : "#fbbf24";
              return (
                <div key={slug}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569" }}>
                      {slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                    </span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 900, color: pct >= 70 ? "#16a34a" : "#94a3b8" }}>
                      {pct}% <span style={{ fontWeight: 600, color: "#94a3b8" }}>({s.mastered ?? s.correct ?? 0}/{s.total})</span>
                    </span>
                  </div>
                  <div style={{ height: "6px", background: "#f1f5f9", borderRadius: "99px", overflow: "hidden" }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: barColor, borderRadius: "99px", transition: "width 0.4s ease" }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── HSC Moderation Inputs ── */}
      <div style={{ ...styles.card, padding: "20px 24px" }} className="profile-card-mobile">
        <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#7c3aed", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
          HSC Moderation Inputs
        </div>
        <div style={{ fontSize: "0.8rem", color: "#6d6a85", fontWeight: 600, marginBottom: "16px" }}>
          Used to calculate the student's projected HSC band via NSW moderation logic.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
          {/* School autocomplete */}
          <div style={{ position: "relative" }} ref={dropdownRef}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 800, fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase" }}>
              School
            </label>
            <input
              type="text"
              value={schoolSearch}
              onChange={(e) => {
                setSchoolSearch(e.target.value);
                setModForm((f) => ({ ...f, school: e.target.value, schoolSubjectRank: "" }));
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
              placeholder="Search school…"
              style={{ width: "100%", padding: "11px 14px", borderRadius: "12px", border: "1.5px solid #e2e8f0", fontWeight: 700, fontSize: "0.88rem", boxSizing: "border-box", outline: "none" }}
            />
            {showDropdown && filteredSchools.length > 0 && (
              <div style={{
                position: "absolute", top: "100%", left: 0, right: 0, zIndex: 50,
                background: "#fff", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                border: "1.5px solid #e2e8f0", overflow: "hidden", marginTop: "4px",
              }}>
                {filteredSchools.map((s) => (
                  <div
                    key={s.rank}
                    onMouseDown={() => handleSelectSchool(s)}
                    style={{
                      padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px",
                      fontSize: "0.85rem", fontWeight: 700, color: "#1e1b4b",
                      borderBottom: "1px solid #f1f5f9",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#f5f3ff"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <span style={{ minWidth: "28px", fontWeight: 900, color: "#7c3aed", fontSize: "0.78rem" }}>#{s.rank}</span>
                    {s.school}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 800, fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase" }}>
              HSC Subject
            </label>
            <select
              value={modForm.assignedCourse}
              onChange={(e) => setModForm((f) => ({ ...f, assignedCourse: e.target.value }))}
              style={{
                width: "100%", padding: "11px 14px", borderRadius: "12px",
                border: "1.5px solid #e2e8f0", fontWeight: 700, fontSize: "0.88rem",
                background: "white", color: "#1e1b4b", cursor: "pointer", boxSizing: "border-box",
              }}
            >
              <option value="">Select subject…</option>
              <option value="Advanced">Mathematics Advanced</option>
              <option value="Standard 2">Mathematics Standard 2</option>
              <option value="Standard 1">Mathematics Standard 1</option>
              <option value="Extension 1">Mathematics Extension 1</option>
              <option value="Extension 2">Mathematics Extension 2</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "16px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 800, fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase" }}>
              School Rank (NSW 2025)
            </label>
            <div style={{
              padding: "11px 14px", borderRadius: "12px", border: "1.5px solid #e2e8f0",
              background: modForm.schoolSubjectRank ? "#f5f3ff" : "#f8fafc",
              fontWeight: 800, fontSize: "0.88rem",
              color: modForm.schoolSubjectRank ? "#4c1d95" : "#94a3b8",
            }}>
              {modForm.schoolSubjectRank ? `#${modForm.schoolSubjectRank}` : "Auto from school"}
            </div>
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 800, fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase" }}>
              Internal Rank
            </label>
            <input
              type="number" min="1" placeholder="e.g. 3"
              value={modForm.internalRank}
              onChange={(e) => setModForm((f) => ({ ...f, internalRank: e.target.value }))}
              style={{ width: "100%", padding: "11px 14px", borderRadius: "12px", border: "1.5px solid #e2e8f0", fontWeight: 700, fontSize: "0.88rem", boxSizing: "border-box", outline: "none" }}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 800, fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase" }}>
              Total in Cohort
            </label>
            <input
              type="number" min="1" placeholder="e.g. 25"
              value={modForm.internalTotal}
              onChange={(e) => setModForm((f) => ({ ...f, internalTotal: e.target.value }))}
              style={{ width: "100%", padding: "11px 14px", borderRadius: "12px", border: "1.5px solid #e2e8f0", fontWeight: 700, fontSize: "0.88rem", boxSizing: "border-box", outline: "none" }}
            />
          </div>
        </div>

        <button
          onClick={handleModSave}
          disabled={modSaving || !onUpdateModeration}
          style={{
            padding: "11px 24px", borderRadius: "12px", border: "none",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            color: "#fff", fontWeight: 900, fontSize: "0.88rem",
            cursor: modSaving ? "wait" : "pointer", opacity: modSaving ? 0.7 : 1,
          }}
        >
          {modSaving ? "Saving…" : "Save"}
        </button>
      </div>

      {/* ── Trial papers card ── */}
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
              type="number" min="0"
              value={hscForm.score}
              onChange={(e) => setHscForm({ ...hscForm, score: e.target.value })}
              style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 900, color: "#1e1b4b", outline: "none" }}
            />
          </label>
          <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase" }}>
            Out of
            <input
              type="number" min="1"
              value={hscForm.total}
              onChange={(e) => setHscForm({ ...hscForm, total: e.target.value })}
              style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 900, color: "#1e1b4b", outline: "none" }}
            />
          </label>
          <button
            type="submit"
            disabled={hscSaving}
            style={{
              height: "45px", padding: "0 18px", borderRadius: "14px", border: "none",
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              color: "white", fontWeight: 900,
              cursor: hscSaving ? "wait" : "pointer",
              display: "flex", alignItems: "center", gap: "8px",
              justifyContent: "center", whiteSpace: "nowrap",
            }}
          >
            <Plus size={17} />
            {hscSaving ? "Saving" : "Add"}
          </button>
          <div style={{ gridColumn: "1 / -1" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase", marginBottom: "8px" }}>
              Topic breakdown <span style={{ color: "#94a3b8", fontWeight: 700 }}>(optional · % per strand)</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "10px" }}>
              {["Algebra", "Calculus", "Statistics", "Trigonometry"].map((topic) => (
                <label key={topic} style={{ display: "grid", gap: "5px", fontSize: "0.68rem", fontWeight: 800, color: "#94a3b8" }}>
                  {topic}
                  <input
                    type="number" min="0" max="100"
                    value={hscForm.topics?.[topic] ?? ""}
                    onChange={(e) => setHscForm({ ...hscForm, topics: { ...(hscForm.topics || {}), [topic]: e.target.value } })}
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
                  gap: "16px", alignItems: "center",
                  padding: "16px", borderRadius: "18px",
                  background: "white", border: "1px solid #eef2ff",
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
