import { useState, useEffect } from "react";
import { Medal, Award, Trophy, Crown } from "lucide-react";
import { describeMedal, MEDAL_TIERS } from "../constants/calcMedals";

const ICONS = { Medal, Award, Trophy, Crown };

const TIER_ORDER = ["mastery", "stage", "phase", "step"];

/**
 * 대시보드 메달 진열장.
 * App 진입 시 localStorage('calc:all-medals:{uid}')에 캐시된 메달을 읽어
 * 표시한다 (추가 Firestore read 0). Auto Mode 학생 + 메달 1개 이상일 때만 노출.
 */
export default function MedalShelf({ uid }) {
  const [medals, setMedals] = useState([]);

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

  const Icon = ({ name, size, color }) => {
    const Cmp = ICONS[name] || Medal;
    return <Cmp size={size} color={color} strokeWidth={2} />;
  };

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
          <div key={i} title={`${m.title} — ${m.subtitle}`} style={{
            width: "46px", height: "46px", borderRadius: "50%",
            background: `linear-gradient(135deg,${m.bgFrom},${m.bgTo})`,
            border: `2px solid ${m.border}`,
            boxShadow: `0 3px 8px ${m.border}40`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icon name={m.icon} size={22} color={m.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
