import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Medal, Award, Trophy, Crown } from "lucide-react";
import { describeMedal } from "../constants/calcMedals";
import { markMedalsSeen } from "../services/calcProgressService";

const ICONS = { Medal, Award, Trophy, Crown };

const MedalIcon = ({ name, size, color }) => {
  const Cmp = ICONS[name] || Medal;
  return <Cmp size={size} color={color} strokeWidth={2} />;
};

const Confetti = () => {
  const cols = ["#f59e0b", "#7c3aed", "#ec4899", "#14b8a6", "#6366f1"];
  const pieces = Array.from({ length: 14 });
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {pieces.map((_, i) => {
        const left = (i * 7 + 5) % 100;
        const delay = (i % 5) * 0.08;
        return (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0, rotate: 0 }}
            animate={{ y: 140, opacity: [0, 1, 1, 0], rotate: 360 }}
            transition={{ duration: 1.4, delay, repeat: Infinity, repeatDelay: 0.6 }}
            style={{
              position: "absolute", top: 0, left: `${left}%`,
              width: i % 2 ? 7 : 6, height: i % 2 ? 7 : 6,
              borderRadius: i % 3 ? "2px" : "50%",
              background: cols[i % cols.length],
            }}
          />
        );
      })}
    </div>
  );
};

/**
 * 메달 획득 축하 모달.
 * 앱 진입 시 미확인 메달이 있으면 표시. "받기"를 누르면 메달이 화면 우상단
 * (대시보드 진열장 방향)으로 날아가는 연출 후 닫히고 markMedalsSeen 처리.
 *
 * props:
 *  - uid: 학생 uid
 *  - medals: 미확인 메달 배열 (raw)
 *  - onClose: 닫힘 콜백 (선택)
 */
export default function MedalCelebrationModal({ uid, medals, onClose }) {
  const [open, setOpen] = useState(true);
  const [flying, setFlying] = useState(false);
  const described = (medals || []).map(describeMedal);
  const multi = described.length > 1;
  const flyRef = useRef(null);

  useEffect(() => {
    if (!medals || medals.length === 0) setOpen(false);
  }, [medals]);

  if (!medals || medals.length === 0) return null;

  const handleClaim = async () => {
    if (flying) return;
    setFlying(true);
    // 진열장 방향(우상단)으로 날아가는 연출 시간 후 닫기 + seen 처리
    if (uid) markMedalsSeen(uid).catch(() => {});
    setTimeout(() => {
      setOpen(false);
      onClose?.();
    }, 1000);
  };

  const accent = multi ? "#7c3aed" : described[0].border;
  const accentDark = multi ? "#6d28d9" : described[0].color;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(15,23,42,0.45)", backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={flying ? { scale: 0.9, opacity: 0 } : { scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            style={{
              width: "340px", maxWidth: "100%", borderRadius: "24px",
              background: "#fff", boxShadow: "0 24px 60px rgba(99,102,241,0.3)",
              overflow: "hidden", position: "relative",
            }}
          >
            {/* Header band with confetti + hero medal */}
            <div style={{
              height: multi ? "92px" : "124px", position: "relative", overflow: "hidden",
              background: multi
                ? "linear-gradient(135deg,#f5f3ff,#ddd6fe)"
                : `linear-gradient(135deg,${described[0].bgFrom},${described[0].bgTo})`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Confetti />
              {multi ? (
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#5b21b6", zIndex: 2 }}>
                  🎉 메달 {described.length}개 획득!
                </div>
              ) : (
                <motion.div
                  ref={flyRef}
                  animate={flying
                    ? { x: 220, y: -260, scale: 0.3, rotate: 360, opacity: 0 }
                    : { scale: [0.4, 1.15, 1], rotate: [0, 0, 0] }}
                  transition={flying
                    ? { duration: 1, ease: [0.45, 0, 0.3, 1] }
                    : { duration: 0.6, ease: "easeOut" }}
                  style={{
                    width: "84px", height: "84px", borderRadius: "50%",
                    background: `linear-gradient(135deg,${described[0].bgFrom},${described[0].bgTo})`,
                    border: `3px solid ${described[0].border}`,
                    boxShadow: `0 8px 20px ${described[0].border}66`,
                    display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3,
                  }}
                >
                  <MedalIcon name={described[0].icon} size={42} color={described[0].color} />
                </motion.div>
              )}
            </div>

            {/* Body */}
            <div style={{ padding: multi ? "16px 18px 20px" : "22px 24px 24px" }}>
              {multi ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {described.map((m, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: "10px 12px", borderRadius: "12px",
                      background: m.pillBg, border: `1px solid ${m.pillBorder}`,
                    }}>
                      <div style={{
                        width: "42px", height: "42px", borderRadius: "50%", flexShrink: 0,
                        background: `linear-gradient(135deg,${m.bgFrom},${m.bgTo})`,
                        border: `2px solid ${m.border}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <MedalIcon name={m.icon} size={22} color={m.color} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "12px", fontWeight: 800, color: "#1e1b4b" }}>{m.title}</div>
                        <div style={{ fontSize: "10px", color: m.color }}>{m.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: "10px", fontWeight: 800, letterSpacing: "0.08em",
                    color: described[0].border, textTransform: "uppercase",
                  }}>
                    {described[0].label}
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#1e1b4b", marginTop: "6px" }}>
                    레벨이 올랐어요 🎉
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748b", marginTop: "8px", lineHeight: 1.5 }}>
                    {described[0].stageName}<br />
                    <b style={{ color: "#1e1b4b" }}>{described[0].subtitle}</b>
                  </div>
                </div>
              )}

              <button
                onClick={handleClaim}
                disabled={flying}
                style={{
                  marginTop: "18px", width: "100%", padding: "13px", border: "none",
                  borderRadius: "14px", color: "#fff", fontSize: "14px", fontWeight: 800,
                  cursor: flying ? "default" : "pointer",
                  background: `linear-gradient(135deg,${accent},${accentDark})`,
                  boxShadow: `0 6px 16px ${accent}4d`,
                  opacity: flying ? 0.7 : 1,
                }}
              >
                {flying ? "받는 중…" : multi ? "모두 받기 🏅" : "받기 🏅"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
