import { ChevronLeft, Mail, Phone } from "lucide-react";

const getRoleLabel = (role) => {
  if (role === "student") return "Student";
  if (role === "parent") return "Parent";
  if (role === "admin") return "Admin";
  return "Role not set";
};

export default function StudentHeaderCard({
  styles,
  student,
  onBack,
  onOpenMessage,
  onSendReport,
  sendingReport,
  onEditProfile,
}) {
  return (
    <div style={styles.card} className="profile-card-mobile">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <button style={styles.backBtn} onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <h1 className="student-name-title" style={{ margin: 0 }}>
          {student?.name ||
            (student?.firstName
              ? `${student.firstName} ${student.lastName || ""}`.trim()
              : null) ||
            student?.displayName ||
            "Student"}
        </h1>
        <span
          className="page-pill"
          style={{ background: "#e0e7ff", color: "#6366f1" }}
        >
          {(() => {
            const y = student?.year || student?.level;
            if (!y) return "No Grade";
            return String(y).toLowerCase().includes("year") ? y : `Year ${y}`;
          })()}
        </span>
        <span
          className="page-pill"
          style={{
            background: student?.role ? "#ecfdf5" : "#fff1f2",
            color: student?.role ? "#047857" : "#e11d48",
            border: `1px solid ${student?.role ? "#bbf7d0" : "#fecdd3"}`,
          }}
        >
          {getRoleLabel(student?.role)}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            color: "#475569",
            fontWeight: 600,
            fontSize: "0.85rem",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <Mail size={16} /> {student?.email || "No Email"}
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <Phone size={16} /> {student?.phone || "No Phone"}
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={onOpenMessage}
            className="app-button"
            style={{
              padding: "8px 16px",
              borderRadius: "12px",
              background: "#f5f3ff",
              color: "#6366f1",
              fontWeight: 700,
              border: "1px solid #e0e7ff",
            }}
          >
            Message
          </button>
          <button
            onClick={onSendReport}
            disabled={sendingReport}
            className="app-button"
            style={{
              padding: "8px 16px",
              borderRadius: "12px",
              background: sendingReport ? "#f1f5f9" : "#ecfdf5",
              color: sendingReport ? "#94a3b8" : "#047857",
              fontWeight: 700,
              border: "1px solid #a7f3d0",
              cursor: sendingReport ? "default" : "pointer",
            }}
          >
            {sendingReport ? "Sending…" : "Weekly Report"}
          </button>
          <button
            onClick={onEditProfile}
            className="app-button"
            style={{
              padding: "8px 16px",
              borderRadius: "12px",
              background: "#6366f1",
              color: "white",
              fontWeight: 700,
              border: 0,
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
