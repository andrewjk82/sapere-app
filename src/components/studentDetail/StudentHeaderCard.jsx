import { useEffect, useRef, useState } from "react";
import { ChevronLeft, Mail, Phone, FileDown, ChevronDown } from "lucide-react";
import Face from "../hero/Face";

const getRoleLabel = (role) => {
  if (role === "student") return "Student";
  if (role === "parent") return "Parent";
  if (role === "admin") return "Admin";
  return "Role not set";
};

// Student page header: who, then the everyday actions; the less frequent ones sit under "More".
export default function StudentHeaderCard({
  student,
  onBack,
  onOpenMessage,
  onSendReport,
  sendingReport,
  onSendParentReport,
  sendingParentReport,
  onExportDailyPdf,
  exportingDailyPdf,
  onEditProfile,
  extraActions = null,
}) {
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  useEffect(() => {
    if (!moreOpen) return undefined;
    const close = (e) => { if (!moreRef.current?.contains(e.target)) setMoreOpen(false); };
    const esc = (e) => { if (e.key === "Escape") setMoreOpen(false); };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", esc); };
  }, [moreOpen]);

  const name = student?.name
    || (student?.firstName ? `${student.firstName} ${student.lastName || ""}`.trim() : null)
    || student?.displayName || "Student";
  const year = (() => {
    const y = student?.year || student?.level;
    if (!y) return "No grade";
    return String(y).toLowerCase().includes("year") || String(y) === "Kindergarten" ? y : `Year ${y}`;
  })();

  return (
    <header className="sd-head">
      <button type="button" className="sd-icon-btn sd-back" onClick={onBack} aria-label="Back to students"><ChevronLeft size={24} /></button>
      <span className="sd-av" aria-hidden="true" style={{ overflow: "hidden", padding: 0 }}><Face photo={student?.dreamImageUrl} hero={student?.avatar} /></span>
      <div className="sd-who">
        <h1>{name}</h1>
        <div className="sd-chips">
          <span className="sd-chip">{year}</span>
          {student?.school && <span className="sd-chip">{student.school}</span>}
          <span className={`sd-chip${student?.role ? "" : " is-warn"}`}>{getRoleLabel(student?.role)}</span>
          <span className="sd-chip sd-chip--plain"><Mail size={14} /> {student?.email || "No email"}</span>
          <span className="sd-chip sd-chip--plain"><Phone size={14} /> {student?.phone || "No phone"}</span>
        </div>
      </div>
      <div className="sd-acts">
        <button type="button" className="sd-btn" onClick={onOpenMessage}>Message</button>
        {extraActions}
        <button type="button" className="sd-btn" onClick={onEditProfile}>Edit</button>
        <div className="sd-more" ref={moreRef}>
          <button type="button" className="sd-btn sd-btn--primary" aria-expanded={moreOpen} aria-haspopup="menu" onClick={() => setMoreOpen((v) => !v)}>
            Reports <ChevronDown size={16} />
          </button>
          {moreOpen && (
            <div className="sd-menu" role="menu">
              <button type="button" role="menuitem" onClick={onSendReport} disabled={sendingReport}>
                {sendingReport ? "Sending…" : "Weekly Report"}<small>email the student this week’s report</small>
              </button>
              {["en", "ko"].map((lang) => (
                <button key={lang} type="button" role="menuitem" onClick={() => onSendParentReport?.(lang)} disabled={sendingParentReport}>
                  {sendingParentReport ? "Sending…" : lang === "ko" ? "Parent report · 한국어" : "Parent report · English"}
                  <small>to the parent email set in Edit</small>
                </button>
              ))}
              <button type="button" role="menuitem" onClick={onExportDailyPdf} disabled={exportingDailyPdf}>
                <span><FileDown size={15} /> {exportingDailyPdf ? "Generating…" : "Daily PDF"}</span>
                <small>today’s Daily Challenge on paper, with answers</small>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
