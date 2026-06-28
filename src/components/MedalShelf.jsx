import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Medal, Award, Trophy, Crown, X } from "lucide-react";
import { describeMedal, MEDAL_TIERS } from "../constants/calcMedals";

const ICONS = { Medal, Award, Trophy, Crown };

const MedalIcon = ({ name, size, color }) => {
  const Cmp = ICONS[name] || Medal;
  return <Cmp size={size} color={color} strokeWidth={2} />;
};

const TIER_ORDER = ["mastery", "stage", "phase", "step"];

// 각 메달 등급이 무엇을 의미하는지 (학생 대면 = 영어)
const TIER_MEANING = {
  step: "Earned for completing a single learning step. The first building block of progress!",
  phase: "Earned for mastering a whole phase — a group of related steps within a stage.",
  stage: "Earned for clearing an entire stage. Every phase inside it is complete.",
  mastery: "The highest honor — awarded when every single stage is complete. True mastery!",
};

/**
 * 대시보드 메달 진열장.
 * App 진입 시 localStorage('calc:all-medals:{uid}')에 캐시된 메달을 읽어
 * 표시한다 (추가 Firestore read 0). Auto Mode 학생 + 메달 1개 이상일 때만 노출.
 */
export default function MedalShelf({ uid }) {
  const [medals, setMedals] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!uid) return;
    try {
      const raw = localStorage.getItem(`calc:all-medals:${uid}`);
      const parsed = raw ? JSON.parse(raw) : [];
      setMedals(Array.isArray(parsed) ? parsed : []);
    } catch {
      setMedals([]);
    }
  }, [uid]);

  if (!medals || medals.length === 0) return null;

  // 티어별 개수
  const counts = medals.reduce((acc, m) => {
    acc[m.tier] = (acc[m.tier] || 0) + 1;
    return acc;
  }, {});

  // 최신순 정렬해서 진열 (최대 12개 노출)
  const shown = [...medals]
    .sort((a, b) => String(b.awardedAt || "").localeCompare(String(a.awardedAt || "")))
    .slice(0, 12)
    .map(describeMedal);

  const Icon = MedalIcon;

  return (
    <div style={{
      background: "#fff", borderRadius: "28px", padding: "18px 22px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.06)", border: "1px solid #f1f5f9",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Trophy size={18} color="#7c3aed" />
          <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#1e1b4b" }}>Medal Shelf</span>
        </div>
        {/* 티어별 카운트 칩 */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {TIER_ORDER.filter((t) => counts[t]).map((t) => {
            const meta = MEDAL_TIERS[t];
            return (
              <span key={t} style={{
                display: "inline-flex", alignItems: "center", gap: "4px",
                fontSize: "0.7rem", fontWeight: 800, color: meta.color,
                background: meta.pillBg, border: `1px solid ${meta.pillBorder}`,
                borderRadius: "100px", padding: "2px 8px",
              }}>
                <Icon name={meta.icon} size={12} color={meta.color} />
                {counts[t]}
              </span>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {shown.map((m, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => { e.stopPropagation(); setSelected(m); }}
            title={`${m.title} — ${m.subtitle}`}
            style={{
              width: "46px", height: "46px", borderRadius: "50%", padding: 0,
              background: `linear-gradient(135deg,${m.bgFrom},${m.bgTo})`,
              border: `2px solid ${m.border}`,
              boxShadow: `0 3px 8px ${m.border}40`,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "transform .12s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            <Icon name={m.icon} size={22} color={m.color} />
          </button>
        ))}
      </div>

      {typeof document !== 'undefined' && createPortal(
        <MedalDetailModal medal={selected} onClose={() => setSelected(null)} />,
        document.body
      )}
    </div>
  );
}

/** 메달 클릭 시 어떤 메달인지 상세 정보를 보여주는 모달. */
function MedalDetailModal({ medal, onClose }) {
  const Icon = MedalIcon;
  const awarded = medal?.awardedAt
    ? new Date(medal.awardedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : null;

  return (
    <AnimatePresence>
      {medal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(15,23,42,0.45)", backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "340px", maxWidth: "100%", borderRadius: "24px",
              background: "#fff", boxShadow: `0 24px 60px ${medal.border}40`,
              overflow: "hidden", position: "relative",
            }}
          >
            {/* 닫기 버튼 */}
            <button
              type="button"
              onClick={onClose}
              style={{
                position: "absolute", top: "12px", right: "12px", zIndex: 4,
                width: "30px", height: "30px", borderRadius: "50%", border: "none",
                background: "rgba(255,255,255,0.7)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <X size={16} color="#475569" />
            </button>

            {/* 헤더 — 메달 아이콘 */}
            <div style={{
              height: "124px", position: "relative",
              background: `linear-gradient(135deg,${medal.bgFrom},${medal.bgTo})`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: "84px", height: "84px", borderRadius: "50%",
                background: `linear-gradient(135deg,${medal.bgFrom},${medal.bgTo})`,
                border: `3px solid ${medal.border}`,
                boxShadow: `0 8px 20px ${medal.border}66`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon name={medal.icon} size={42} color={medal.color} />
              </div>
            </div>

            {/* 본문 */}
            <div style={{ padding: "22px 24px 24px", textAlign: "center" }}>
              <div style={{
                fontSize: "10px", fontWeight: 800, letterSpacing: "0.08em",
                color: medal.border, textTransform: "uppercase",
              }}>
                {medal.label}
              </div>
              <div style={{ fontSize: "18px", fontWeight: 800, color: "#1e1b4b", marginTop: "6px" }}>
                {medal.title}
              </div>
              <div style={{ fontSize: "12px", color: medal.color, marginTop: "4px", fontWeight: 700 }}>
                {medal.subtitle}
              </div>

              <div style={{
                marginTop: "16px", padding: "12px 14px", borderRadius: "14px",
                background: medal.pillBg, border: `1px solid ${medal.pillBorder}`,
                fontSize: "12.5px", color: "#475569", lineHeight: 1.55,
              }}>
                {TIER_MEANING[medal.tier] || ""}
              </div>

              {awarded && (
                <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "14px" }}>
                  Earned on {awarded}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
