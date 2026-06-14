import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';

const RANK_EMOJI = ['🥇', '🥈', '🥉'];

/* ── Running keyframe injected once ─────────────────────────────────── */
const STYLE = `
@keyframes sap-run {
  0%   { transform: translateY(0px)   rotate(-2deg) scaleX(1);   }
  25%  { transform: translateY(-5px)  rotate(0deg)  scaleX(0.97);}
  50%  { transform: translateY(0px)   rotate(2deg)  scaleX(1);   }
  75%  { transform: translateY(-3px)  rotate(0deg)  scaleX(0.97);}
  100% { transform: translateY(0px)   rotate(-2deg) scaleX(1);   }
}
@keyframes sap-shadow {
  0%,100% { transform: scaleX(1);   opacity: 0.3; }
  25%,75%  { transform: scaleX(0.7); opacity: 0.15;}
}
@keyframes sap-crowd {
  0%,100% { opacity: 0.7; }
  50%      { opacity: 1;   }
}
`;

const LeaderboardModal = ({ open, onClose, currentUserId, currentUserXP = 0, currentUserName = '' }) => {
  const [leaders, setLeaders]   = useState([]);
  const [loading, setLoading]   = useState(true);
  const [ready,   setReady]     = useState(false); // delay runners until modal settled

  useEffect(() => {
    if (!open) { setReady(false); return; }
    setLoading(true);
    const q = query(collection(db, 'leaderboard'), orderBy('totalXP', 'desc'), limit(10));
    const unsub = onSnapshot(q, (snap) => {
      setLeaders(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
      setTimeout(() => setReady(true), 400);
    }, () => setLoading(false));
    return () => unsub();
  }, [open]);

  if (!open) return null;

  const maxXP  = leaders[0]?.totalXP || 1;
  const count  = leaders.length;

  // 내 순위/점수 (추가 쿼리 없이 — 점수는 프로필값, 순위는 top10 목록에서 계산)
  const myIndex = leaders.findIndex((s) => s.id === currentUserId);
  const myInTop = myIndex >= 0;
  const myRank  = myInTop ? myIndex + 1 : null;
  const myXP    = myInTop ? (leaders[myIndex].totalXP || 0) : currentUserXP;

  // Lane layout — fit all runners vertically
  const TRACK_TOP    = 110; // px from top of track area where lanes start
  const LANE_HEIGHT  = 52;  // px per lane
  const AVATAR_SIZE  = 38;
  const TRACK_H      = TRACK_TOP + count * LANE_HEIGHT + 24;

  return (
    <div className="app-modal" style={{ zIndex: 99999 }}>
      <style>{STYLE}</style>

      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="app-modal__backdrop"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{   opacity: 0, scale: 0.93, y: 24  }}
        style={{
          position: 'relative', zIndex: 1,
          width: '94vw', maxWidth: '720px',
          borderRadius: '28px', overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
          display: 'flex', flexDirection: 'column',
          maxHeight: '92vh',
        }}
      >
        {/* ── Header ── */}
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
          padding: '14px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>🏟️</span>
            <div>
              <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 900, color: '#fff' }}>Challenge Sprint</h2>
              <p  style={{ margin: 0, fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>XP Leaderboard Race</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <X size={15} />
          </button>
        </div>

        {/* ── My rank/score banner ── */}
        {currentUserId && !loading && (
          <div style={{
            background: 'linear-gradient(135deg, #4338ca, #6366f1)',
            padding: '10px 20px', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                fontSize: '0.62rem', fontWeight: 900, color: '#c7d2fe',
                textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>
                {currentUserName ? `${currentUserName} ·` : ''} Your rank
              </span>
              <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                {myRank ? `#${myRank}` : 'Outside top 10'}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
              <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fde68a', lineHeight: 1 }}>
                {(myXP || 0).toLocaleString()}
              </span>
              <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#c7d2fe' }}>XP</span>
            </div>
          </div>
        )}

        {/* ── Stadium + Track ── */}
        <div style={{ overflowY: 'auto', flexShrink: 1 }}>
          {loading ? (
            <div style={{ background: '#3b5998', padding: '60px', textAlign: 'center' }}>
              <div className="app-spinner" style={{ margin: '0 auto', borderColor: 'rgba(255,255,255,0.2)', borderTopColor: '#fff' }} />
            </div>
          ) : (
            <div style={{ position: 'relative', width: '100%', height: `${TRACK_H}px`, overflow: 'hidden', userSelect: 'none' }}>

              {/* ── Sky / Stadium background ── */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #9ca3c7 0%, #b8bdd9 60%, #8b9dc3 100%)' }} />

              {/* Crowd stands */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: `${TRACK_TOP - 8}px`, background: 'linear-gradient(180deg, #6b7ab8 0%, #8892c4 100%)', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
                {/* Crowd dots */}
                {Array.from({ length: 60 }).map((_, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    left: `${(i * 1.7) % 100}%`,
                    bottom: `${8 + (i % 4) * 10}px`,
                    width: '8px', height: '10px',
                    borderRadius: '50% 50% 40% 40%',
                    background: ['#fcd34d','#f9a8d4','#a5f3fc','#86efac','#c4b5fd','#fda4af'][i % 6],
                    opacity: 0.85,
                    animation: `sap-crowd ${1.5 + (i % 5) * 0.3}s ease-in-out ${(i * 0.07) % 1}s infinite`,
                  }} />
                ))}
                {/* Floodlight poles */}
                {[15, 50, 85].map(x => (
                  <React.Fragment key={x}>
                    <div style={{ position: 'absolute', left: `${x}%`, bottom: 0, width: '4px', height: '55px', background: '#4b5563' }} />
                    <div style={{ position: 'absolute', left: `calc(${x}% - 12px)`, bottom: '52px', width: '28px', height: '8px', background: '#374151', borderRadius: '3px' }} />
                    <div style={{ position: 'absolute', left: `calc(${x}% - 14px)`, bottom: '58px', width: '32px', height: '6px', background: '#fef08a', borderRadius: '2px', boxShadow: '0 0 8px #fef08a' }} />
                  </React.Fragment>
                ))}
              </div>

              {/* ── Track surface ── */}
              <div style={{ position: 'absolute', top: `${TRACK_TOP - 8}px`, left: 0, right: 0, bottom: 0, background: '#c2410c' }}>
                {/* Lane lines */}
                {Array.from({ length: count + 1 }).map((_, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    top: `${i * LANE_HEIGHT}px`,
                    left: 0, right: 0, height: '2px',
                    background: i === 0 || i === count ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)',
                  }} />
                ))}

                {/* Start line */}
                <div style={{ position: 'absolute', left: '6%', top: 0, bottom: 0, width: '3px', background: 'rgba(255,255,255,0.7)' }} />

                {/* Finish line — checkerboard */}
                <div style={{ position: 'absolute', right: '6%', top: 0, bottom: 0, width: '12px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  {Array.from({ length: Math.ceil((count * LANE_HEIGHT) / 8) }).map((_, i) => (
                    <div key={i} style={{ display: 'flex', height: '8px', flexShrink: 0 }}>
                      <div style={{ flex: 1, background: i % 2 === 0 ? '#fff' : '#111' }} />
                      <div style={{ flex: 1, background: i % 2 === 0 ? '#111' : '#fff' }} />
                    </div>
                  ))}
                </div>
                <div style={{ position: 'absolute', right: 'calc(6% - 26px)', top: '4px', fontSize: '0.5rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FINISH</div>

                {/* Runners */}
                {leaders.map((student, idx) => {
                  const rank   = idx + 1;
                  const xp     = student.totalXP || 0;
                  const pct    = maxXP > 0 ? xp / maxXP : 0;
                  const isMe   = student.id === currentUserId;
                  const avatarUrl = student.avatarUrl
                    || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(student.id || 'sapere')}`;

                  // horizontal: 6% (start) → 94% - avatar (finish)
                  // expressed as % of track width
                  const laneTop  = idx * LANE_HEIGHT + (LANE_HEIGHT - AVATAR_SIZE) / 2;
                  const runLeft  = ready ? `calc(6% + ${pct} * (88% - ${AVATAR_SIZE}px))` : '6%';

                  const runSpeed = 0.35 + (idx * 0.04); // faster runners animate a bit quicker
                  const runDelay = idx * 0.05;

                  return (
                    <React.Fragment key={student.id}>
                      {/* Runner */}
                      <motion.div
                        initial={{ left: '6%' }}
                        animate={{ left: runLeft }}
                        transition={{ duration: 3.2, delay: runDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                          position: 'absolute',
                          top:   `${laneTop}px`,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '1px',
                          zIndex: count - idx + 1,
                        }}
                      >
                        {/* Rank chip */}
                        <div style={{
                          fontSize:   rank <= 3 ? '0.85rem' : '0.52rem',
                          fontWeight: 900,
                          lineHeight: 1,
                          color:   rank <= 3 ? undefined : '#fff',
                          background: rank <= 3 ? 'transparent' : 'rgba(0,0,0,0.45)',
                          borderRadius: '999px',
                          padding: rank <= 3 ? '0' : '1px 4px',
                          marginBottom: '1px',
                          textShadow: rank <= 3 ? '0 1px 3px rgba(0,0,0,0.5)' : 'none',
                        }}>
                          {rank <= 3 ? RANK_EMOJI[rank - 1] : rank}
                        </div>

                        {/* Avatar with running animation + XP / "나" badge */}
                        <div style={{ position: 'relative' }}>
                          <div style={{
                            width:  `${AVATAR_SIZE}px`,
                            height: `${AVATAR_SIZE}px`,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: isMe ? '3px solid #818cf8'
                              : rank === 1 ? '2.5px solid #fbbf24'
                              : rank === 2 ? '2.5px solid #e2e8f0'
                              : rank === 3 ? '2.5px solid #f97316'
                              : '2px solid rgba(255,255,255,0.5)',
                            boxShadow: isMe ? '0 0 0 2px rgba(129,140,248,0.4), 0 3px 10px rgba(0,0,0,0.5)' : '0 3px 10px rgba(0,0,0,0.5)',
                            background: '#fff',
                            animation: ready ? `sap-run ${runSpeed}s ease-in-out infinite` : 'none',
                          }}>
                            <img src={avatarUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>

                          {/* XP — 캐릭터 왼쪽, 크고 볼드한 금색 그라데이션 */}
                          <div style={{
                            position: 'absolute', right: 'calc(100% + 7px)', top: '50%',
                            transform: 'translateY(-50%)', whiteSpace: 'nowrap',
                            display: 'flex', alignItems: 'baseline', gap: '2px',
                          }}>
                            <span style={{
                              fontFamily: '"Avenir Next", "Segoe UI", system-ui, sans-serif',
                              fontSize: '0.95rem', fontWeight: 900, lineHeight: 1,
                              fontStyle: 'italic', letterSpacing: '-0.02em',
                              background: 'linear-gradient(180deg, #fff7d6, #fbbf24)',
                              WebkitBackgroundClip: 'text', backgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.65))',
                            }}>
                              {xp.toLocaleString()}
                            </span>
                            <span style={{
                              fontSize: '0.5rem', fontWeight: 900, color: '#fde68a',
                              textShadow: '0 1px 2px rgba(0,0,0,0.6)',
                            }}>XP</span>
                          </div>

                          {/* 본인 표시 — 캐릭터 오른쪽 */}
                          {isMe && (
                            <div style={{
                              position: 'absolute', left: 'calc(100% + 5px)', top: '50%',
                              transform: 'translateY(-50%)', whiteSpace: 'nowrap',
                              background: '#818cf8', color: '#fff',
                              fontSize: '0.55rem', fontWeight: 900, lineHeight: 1,
                              padding: '2px 5px', borderRadius: '999px',
                              boxShadow: '0 1px 4px rgba(0,0,0,0.4)',
                            }}>
                              YOU
                            </div>
                          )}
                        </div>

                        {/* Shadow on track */}
                        <div style={{
                          width: `${AVATAR_SIZE * 0.7}px`,
                          height: '4px',
                          borderRadius: '50%',
                          background: 'rgba(0,0,0,0.35)',
                          marginTop: '-1px',
                          animation: ready ? `sap-shadow ${runSpeed}s ease-in-out infinite` : 'none',
                        }} />
                      </motion.div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LeaderboardModal;
