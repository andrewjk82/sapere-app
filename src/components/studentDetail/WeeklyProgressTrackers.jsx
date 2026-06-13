import React from "react";
import { Trophy, Target } from "lucide-react";

// Weekly Challenge / Basic Calculation progress trackers — extracted from
// StudentDetail.jsx. Purely presentational; receives the student's daily
// stats and whether the calculation test is enabled.

const toJsDate = (value) => {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value?.toDate === "function") return value.toDate();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const isSameCalendarDay = (a, b) => {
  const dateA = toJsDate(a);
  const dateB = toJsDate(b);
  if (!dateA || !dateB) return false;
  return dateA.toISOString().slice(0, 10) === dateB.toISOString().slice(0, 10);
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Builds the seven Mon→Sun date cells for the current week.
const buildWeek = () => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sun, 1-6 = Mon-Sat
  const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
  return DAYS.map((day, index) => {
    const date = new Date(now);
    date.setDate(now.getDate() + mondayOffset + index);
    return { day, date };
  });
};

const WeeklyProgressTrackers = ({ dailyStats, calculationEnabled }) => {
  return (
    <>
      {/* 3. Weekly Challenge Tracker */}
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "20px 24px",
          marginBottom: "24px",
          border: "1px solid rgba(167, 139, 250, 0.12)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h3 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: "#1e1b4b", display: "flex", alignItems: "center", gap: "8px" }}>
            <Trophy size={18} color="#6366f1" /> Weekly Challenge Progress
          </h3>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", background: "#f8fafc", padding: "4px 10px", borderRadius: "100px" }}>
            Current Week
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
          {buildWeek().map(({ day, date }) => {
            // Use the LOCAL date (en-CA → YYYY-MM-DD) to match how stat doc
            // ids are keyed. toISOString() is UTC and shifts the day for
            // students in positive-UTC-offset timezones.
            const dateStr = date.toLocaleDateString("en-CA");
            const dayStat = dailyStats.find(s => s.statCollection === "daily_stats" && (s.id === dateStr || (s.timestamp && toJsDate(s.timestamp).toLocaleDateString("en-CA") === dateStr)));
            const isCompleted = !!dayStat;
            const score = dayStat?.score || 0;
            const total = dayStat?.total || 0;
            const isToday = isSameCalendarDay(new Date(), date);

            return (
              <div key={day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, color: isToday ? "#6366f1" : "#94a3b8", textTransform: "uppercase" }}>{day}</span>
                <div
                  style={{
                    width: "100%",
                    height: "44px",
                    borderRadius: "12px",
                    background: isCompleted ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : (isToday ? "#eef2ff" : "#f8fafc"),
                    border: isToday ? "2px solid #6366f1" : "1px solid #f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: isCompleted ? "white" : "#cbd5e1",
                    transition: "all 0.3s ease",
                    boxShadow: isCompleted ? "0 4px 12px rgba(99, 102, 241, 0.2)" : "none"
                  }}
                >
                  {isCompleted ? (
                    <>
                      <span style={{ fontSize: "0.85rem", fontWeight: 900 }}>{score}</span>
                      <div style={{ width: "12px", height: "2px", background: "rgba(255,255,255,0.4)", borderRadius: "1px" }} />
                      <span style={{ fontSize: "0.6rem", fontWeight: 700, opacity: 0.8 }}>{total}</span>
                    </>
                  ) : (
                    <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "#cbd5e1", lineHeight: 1 }}>–</span>
                  )}
                </div>
                <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#cbd5e1" }}>{date.getDate()}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Basic Calculation Tracker (Conditional) */}
      {calculationEnabled !== false && (
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "20px 24px",
            marginBottom: "24px",
            border: "1px solid rgba(245, 158, 11, 0.12)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: "#1e1b4b", display: "flex", alignItems: "center", gap: "8px" }}>
              <Target size={18} color="#f59e0b" /> Daily Calculation Progress
            </h3>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", background: "#fffbeb", padding: "4px 10px", borderRadius: "100px" }}>
              Mental Math
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
            {buildWeek().map(({ day, date }) => {
              const dateStr = date.toLocaleDateString("en-CA");
              const dayStat = dailyStats.find(s => s.statCollection === "calc_stats" && (s.id === dateStr || (s.timestamp && toJsDate(s.timestamp).toLocaleDateString("en-CA") === dateStr)));
              const isCompleted = !!dayStat;
              const score = dayStat?.score || 0;
              const total = dayStat?.total || 0;
              const isToday = isSameCalendarDay(new Date(), date);

              return (
                <div key={day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: isToday ? "#f59e0b" : "#94a3b8", textTransform: "uppercase" }}>{day}</span>
                  <div
                    style={{
                      width: "100%",
                      height: "44px",
                      borderRadius: "12px",
                      background: isCompleted ? "linear-gradient(135deg, #f59e0b, #fbbf24)" : (isToday ? "#fffbeb" : "#f8fafc"),
                      border: isToday ? "2px solid #f59e0b" : "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      color: isCompleted ? "white" : "#cbd5e1",
                      transition: "all 0.3s ease",
                      boxShadow: isCompleted ? "0 4px 12px rgba(245, 158, 11, 0.2)" : "none"
                    }}
                  >
                    {isCompleted ? (
                      <>
                        <span style={{ fontSize: "0.85rem", fontWeight: 900 }}>{score}</span>
                        <div style={{ width: "12px", height: "2px", background: "rgba(255,255,255,0.4)", borderRadius: "1px" }} />
                        <span style={{ fontSize: "0.6rem", fontWeight: 700, opacity: 0.8 }}>{total}</span>
                      </>
                    ) : (
                      <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "#cbd5e1", lineHeight: 1 }}>–</span>
                    )}
                  </div>
                  <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#cbd5e1" }}>{date.getDate()}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default WeeklyProgressTrackers;
