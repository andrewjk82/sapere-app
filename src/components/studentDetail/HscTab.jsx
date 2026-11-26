import { useState, useRef } from "react";
import { Plus, Trash2 } from "lucide-react";
import HscScoreChart from "../HscScoreChart";
import { NSW_SCHOOL_RANKINGS } from "../../constants/nswSchoolRankings";

const HscTab = ({
  hscRecords,
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
  const [showForm, setShowForm] = useState(false);
  const [showTools, setShowTools] = useState(false);
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

  // Only for students with HSC switched on (Settings → Features, or Edit profile).
  const hscOn = student?.showHscGraph === true;
  const fmtDate = (k) => (k ? new Date(`${k}T12:00:00`).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }) : "—");

  if (!hscOn && !showTools) {
    return (
      <section className="sd-tile">
        <h3 className="sd-h">HSC <small>off for this student</small></h3>
        <p className="sd-muted" style={{ margin: "0 0 12px" }}>
          Trial papers, HSC band projection and Practice by Type show when HSC is on (Settings → Features).
          {hscRecords.length > 0 && ` ${hscRecords.length} saved paper${hscRecords.length === 1 ? "" : "s"} are kept.`}
        </p>
        <button type="button" className="sd-btn sd-btn--soft" onClick={() => setShowTools(true)}>Show anyway</button>
      </section>
    );
  }

  return (
    <div className="sd-hsc">
      {/* ── HSC exam log ── */}
      <section className="sd-tile">
        <h3 className="sd-h">
          <span>HSC trial papers <span className="sd-count">{hscRecords.length}</span></span>
          <button type="button" className="sd-btn sd-btn--soft" aria-expanded={showForm} onClick={() => setShowForm((v) => !v)}>
            {showForm ? "Close" : <><Plus size={16} /> Add paper</>}
          </button>
        </h3>

        {showForm && (
          <form onSubmit={onSaveRecord} className="sd-form sd-hsc-form">
            <label>Date<input type="date" value={hscForm.examDate} onChange={(e) => setHscForm({ ...hscForm, examDate: e.target.value })} /></label>
            <label className="sd-wide">Paper<input value={hscForm.paper} onChange={(e) => setHscForm({ ...hscForm, paper: e.target.value })} placeholder="e.g. 2023 HSC Paper 1" /></label>
            <label>Score<input type="number" min="0" value={hscForm.score} onChange={(e) => setHscForm({ ...hscForm, score: e.target.value })} /></label>
            <label>Out of<input type="number" min="1" value={hscForm.total} onChange={(e) => setHscForm({ ...hscForm, total: e.target.value })} /></label>
            <fieldset className="sd-full">
              <legend>Topic breakdown <small>optional · % per strand</small></legend>
              <div className="sd-form-row">
                {["Algebra", "Calculus", "Statistics", "Trigonometry"].map((topic) => (
                  <label key={topic}>{topic}
                    <input type="number" min="0" max="100" placeholder="%" value={hscForm.topics?.[topic] ?? ""}
                      onChange={(e) => setHscForm({ ...hscForm, topics: { ...(hscForm.topics || {}), [topic]: e.target.value } })} />
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="sd-full">Notes
              <textarea rows={3} value={hscForm.notes} onChange={(e) => setHscForm({ ...hscForm, notes: e.target.value })} placeholder="Topics to review, exam conditions, paper section notes..." />
            </label>
            <div className="sd-full sd-form-acts">
              <button type="submit" className="sd-btn sd-btn--primary" disabled={hscSaving}><Plus size={16} /> {hscSaving ? "Saving…" : "Add paper"}</button>
            </div>
          </form>
        )}

        {hscRecords.length > 0 ? (
          <ul className="sd-rows">
            {hscRecords.map((record) => {
              const percentage = Number(record.percentage ?? ((Number(record.score) / Number(record.total)) * 100));
              return (
                <li key={record.id} className="sd-row sd-hsc-row">
                  <span className="sd-row-date">{fmtDate(record.examDate)}</span>
                  <span className="sd-hsc-paper"><b>{record.paper}</b>{record.notes && <small>{record.notes}</small>}</span>
                  <span className="sd-hsc-mark"><b>{Number(record.score)}/{Number(record.total)}</b><small>{Number.isFinite(percentage) ? percentage.toFixed(1) : "0.0"}%</small></span>
                  <button type="button" className="sd-row-reset" onClick={() => onDeleteRecord(record)} aria-label={`Delete ${record.paper}`}><Trash2 size={16} /></button>
                </li>
              );
            })}
          </ul>
        ) : <p className="sd-muted" style={{ margin: 0 }}>No HSC papers recorded yet.</p>}
      </section>

      <HscScoreChart hscRecords={hscRecords} student={student} />

      {/* ── Practice by Type ── */}
      <section className="sd-tile">
        <h3 className="sd-h">Practice by Type <small>accuracy per question type in HSC past paper practice</small></h3>
        {typeEntries === null ? (
          <p className="sd-muted" style={{ margin: 0 }}>Loading…</p>
        ) : typeEntries.length === 0 ? (
          <p className="sd-muted" style={{ margin: 0 }}>No Practice by Type attempts yet.</p>
        ) : (
          <div className="sd-types">
            {typeEntries.map(([slug, st]) => {
              const pct = Math.round(((st.mastered ?? st.correct ?? 0) / st.total) * 100);
              return (
                <div key={slug} className="sd-type">
                  <span>{slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</span>
                  <span className="sd-ch-bar"><i style={{ width: `${pct}%`, background: pct >= 70 ? "#3fae6c" : pct >= 40 ? "#9fd8ae" : "#f2b632" }} /></span>
                  <span className={`sd-type-num${pct >= 70 ? " sd-up" : ""}`}>{pct}% <small>({st.mastered ?? st.correct ?? 0}/{st.total})</small></span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── HSC moderation inputs ── */}
      <section className="sd-tile">
        <h3 className="sd-h">HSC band projection <small>school rank and internal rank, for the NSW moderation estimate</small></h3>
        <div className="sd-form">
          <label className="sd-school" ref={dropdownRef}>School
            <input
              type="text" value={schoolSearch} placeholder="Search school…"
              onChange={(e) => { setSchoolSearch(e.target.value); setModForm((f) => ({ ...f, school: e.target.value, schoolSubjectRank: "" })); setShowDropdown(true); }}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            />
            {showDropdown && filteredSchools.length > 0 && (
              <span className="sd-dropdown">
                {filteredSchools.map((sc) => (
                  <button type="button" key={sc.rank} onMouseDown={() => handleSelectSchool(sc)}><b>#{sc.rank}</b> {sc.school}</button>
                ))}
              </span>
            )}
          </label>
          <label>HSC subject
            <select value={modForm.assignedCourse} onChange={(e) => setModForm((f) => ({ ...f, assignedCourse: e.target.value }))}>
              <option value="">Select subject…</option>
              <option value="Advanced">Mathematics Advanced</option>
              <option value="Standard 2">Mathematics Standard 2</option>
              <option value="Standard 1">Mathematics Standard 1</option>
              <option value="Extension 1">Mathematics Extension 1</option>
              <option value="Extension 2">Mathematics Extension 2</option>
            </select>
          </label>
          <label>School rank (NSW 2025)<span className="sd-readonly">{modForm.schoolSubjectRank ? `#${modForm.schoolSubjectRank}` : "Auto from school"}</span></label>
          <label>Internal rank<input type="number" min="1" placeholder="e.g. 3" value={modForm.internalRank} onChange={(e) => setModForm((f) => ({ ...f, internalRank: e.target.value }))} /></label>
          <label>Total in cohort<input type="number" min="1" placeholder="e.g. 25" value={modForm.internalTotal} onChange={(e) => setModForm((f) => ({ ...f, internalTotal: e.target.value }))} /></label>
          <div className="sd-full sd-form-acts">
            <button type="button" className="sd-btn sd-btn--primary" onClick={handleModSave} disabled={modSaving || !onUpdateModeration}>{modSaving ? "Saving…" : "Save"}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HscTab;
