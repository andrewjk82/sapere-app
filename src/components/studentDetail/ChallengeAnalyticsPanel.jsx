import React from "react";

// Performance analytics panel — extracted from StudentDetail.jsx challenge tab.
// Purely presentational; analytics data stays in StudentDetail.
const ChallengeAnalyticsPanel = ({ studentAnalytics, dailyStats }) => {
  return (
    <div style={{ background: "white", borderRadius: "24px", border: "1px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(99,102,241,0.06)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <div style={{ width: "4px", height: "24px", background: "linear-gradient(to bottom, #8b5cf6, #6366f1)", borderRadius: "2px" }} />
        <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#4c1d95", letterSpacing: "0.05em", textTransform: "uppercase" }}>Performance Analysis</div>
        {studentAnalytics.trend !== "insufficient_data" && (
          <span style={{
            marginLeft: "auto", fontSize: "0.7rem", fontWeight: 800, borderRadius: "100px", padding: "3px 12px",
            background: studentAnalytics.trend === "improving" ? "#d1fae5" : studentAnalytics.trend === "declining" ? "#fee2e2" : "#f1f5f9",
            color: studentAnalytics.trend === "improving" ? "#065f46" : studentAnalytics.trend === "declining" ? "#991b1b" : "#475569",
          }}>
            {studentAnalytics.trend === "improving" ? "📈 Improving" : studentAnalytics.trend === "declining" ? "📉 Declining" : "➡ Stable"}
          </span>
        )}
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
        {[
          { label: "Overall Accuracy", value: `${studentAnalytics.overallAccuracy}%`, color: studentAnalytics.overallAccuracy >= 75 ? "#10b981" : studentAnalytics.overallAccuracy >= 50 ? "#f59e0b" : "#ef4444" },
          { label: "Questions Done", value: studentAnalytics.totalQuestionsAttempted.toLocaleString(), color: "#6366f1" },
          { label: "Sessions", value: dailyStats.length, color: "#8b5cf6" },
        ].map(stat => (
          <div key={stat.label} style={{ flex: "1 1 100px", background: "#f8fafc", borderRadius: "16px", padding: "14px 16px", border: "1px solid #e2e8f0" }}>
            <div style={{ fontSize: "1.4rem", fontWeight: 900, color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Weak topics */}
      {studentAnalytics.weakTopics.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", marginBottom: "10px" }}>⚠ Needs Attention</div>
          {studentAnalytics.weakTopics.map(t => (
            <div key={t.topicId} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#fff7ed", borderRadius: "12px", marginBottom: "6px", border: "1px solid #fed7aa" }}>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#92400e" }}>{t.label}</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "#fef3c7", color: "#b45309", borderRadius: "100px", padding: "3px 10px" }}>{t.errorRate}% wrong</span>
            </div>
          ))}
        </div>
      )}

      {/* Strong topics */}
      {studentAnalytics.strongTopics.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", marginBottom: "10px" }}>✓ Strong Areas</div>
          {studentAnalytics.strongTopics.map(t => (
            <div key={t.topicId} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#f0fdf4", borderRadius: "12px", marginBottom: "6px", border: "1px solid #bbf7d0" }}>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#14532d" }}>{t.label}</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "#dcfce7", color: "#166534", borderRadius: "100px", padding: "3px 10px" }}>{100 - t.errorRate}% correct</span>
            </div>
          ))}
        </div>
      )}

      {/* Recommendations */}
      {studentAnalytics.recommendations.length > 0 && (
        <div>
          <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", marginBottom: "10px" }}>📚 Study Recommendations</div>
          {studentAnalytics.recommendations.map((rec, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", padding: "12px 14px", background: "#fafafe", borderRadius: "12px", marginBottom: "6px", border: "1px solid #e0e7ff", alignItems: "flex-start" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: rec.priority === "high" ? "#ef4444" : rec.priority === "medium" ? "#f59e0b" : "#10b981" }} />
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#1e1b4b", marginBottom: "2px" }}>{rec.title}</div>
                <div style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.5 }}>{rec.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeAnalyticsPanel;
