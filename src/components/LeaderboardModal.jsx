import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';

const RANK_EMOJI = ['🥇', '🥈', '🥉'];

const LeaderboardModal = ({ open, onClose, currentUserId }) => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    const q = query(collection(db, 'leaderboard'), orderBy('totalXP', 'desc'), limit(12));
    const unsub = onSnapshot(q, (snap) => {
      setLeaders(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    }, () => setLoading(false));
    return () => unsub();
  }, [open]);

  if (!open) return null;

  const maxXP = leaders[0]?.totalXP || 1;
  const LANE_H = 56; // px per lane
  const AVATAR_SIZE = 40;

  return (
    <div className="app-modal" style={{ zIndex: 99999 }}>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="app-modal__backdrop"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        style={{
          position: 'relative', zIndex: 1,
          width: '92vw', maxWidth: '900px',
          borderRadius: '28px', overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
          padding: '16px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.6rem' }}>🏁</span>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>100m Sprint</h2>
              <p style={{ margin: 0, fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>XP leaderboard race</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Track */}
        <div style={{
          background: '#2d6a2d',
          padding: '0',
          overflow: 'hidden',
        }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px', color: '#fff' }}>
              <div className="app-spinner" style={{ margin: '0 auto', borderColor: 'rgba(255,255,255,0.3)', borderTopColor: '#fff' }} />
            </div>
          ) : (
            <div style={{ position: 'relative', width: '100%' }}>

              {/* Finish line */}
              <div style={{
                position: 'absolute', right: '48px', top: 0, bottom: 0,
                width: '4px',
                background: 'repeating-linear-gradient(to bottom, #fff 0px, #fff 8px, #111 8px, #111 16px)',
                zIndex: 5,
              }} />
              <div style={{
                position: 'absolute', right: '20px', top: '8px',
                fontSize: '0.65rem', fontWeight: 900, color: '#fff',
                textTransform: 'uppercase', letterSpacing: '0.08em', writingMode: 'vertical-rl',
                opacity: 0.8,
              }}>FINISH</div>

              {/* Start line */}
              <div style={{
                position: 'absolute', left: '14px', top: 0, bottom: 0,
                width: '3px', background: 'rgba(255,255,255,0.4)', zIndex: 5,
              }} />

              {/* Lanes */}
              {leaders.map((student, idx) => {
                const rank = idx + 1;
                const xp = student.totalXP || 0;
                const pct = maxXP > 0 ? xp / maxXP : 0;
                const isCurrentUser = student.id === currentUserId;
                const avatarUrl = student.avatarUrl
                  || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(student.id || 'sapere')}`;
                const isLast = idx === leaders.length - 1;

                // Avatar runs in the lane, positioned from left (16px start) to right (finish area)
                // Track usable width: from 16px to (100% - 60px)
                const TRACK_LEFT = 16;   // px — start line
                const TRACK_RIGHT = 60;  // px — right margin (finish line area)

                return (
                  <div
                    key={student.id}
                    style={{
                      position: 'relative',
                      height: `${LANE_H}px`,
                      borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.18)',
                      background: isCurrentUser
                        ? 'rgba(99,102,241,0.25)'
                        : idx % 2 === 0
                          ? 'rgba(0,0,0,0.08)'
                          : 'transparent',
                    }}
                  >
                    {/* Lane number on far left */}
                    <div style={{
                      position: 'absolute', left: 0, top: 0, bottom: 0,
                      width: '14px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.5rem', fontWeight: 900, color: 'rgba(255,255,255,0.35)',
                    }}>
                      {rank}
                    </div>

                    {/* Progress fill */}
                    <motion.div
                      initial={{ width: `${TRACK_LEFT}px` }}
                      animate={{ width: `calc(${TRACK_LEFT}px + ${pct} * (100% - ${TRACK_LEFT + TRACK_RIGHT}px))` }}
                      transition={{ duration: 1.2, delay: idx * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                      style={{
                        position: 'absolute',
                        left: 0, top: 0, bottom: 0,
                        background: rank === 1
                          ? 'rgba(251,191,36,0.22)'
                          : rank === 2
                            ? 'rgba(148,163,184,0.18)'
                            : rank === 3
                              ? 'rgba(251,146,60,0.18)'
                              : 'rgba(255,255,255,0.06)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Runner (avatar + rank badge) */}
                    <motion.div
                      initial={{ left: `${TRACK_LEFT}px` }}
                      animate={{ left: `calc(${TRACK_LEFT}px + ${pct} * (100% - ${TRACK_LEFT + TRACK_RIGHT + AVATAR_SIZE}px))` }}
                      transition={{ duration: 1.2, delay: idx * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1px',
                        zIndex: 10,
                      }}
                    >
                      {/* Rank above head */}
                      <div style={{
                        fontSize: rank <= 3 ? '1rem' : '0.6rem',
                        fontWeight: 900,
                        lineHeight: 1,
                        color: rank <= 3 ? undefined : 'rgba(255,255,255,0.8)',
                        background: rank <= 3 ? 'transparent' : 'rgba(0,0,0,0.35)',
                        borderRadius: '999px',
                        padding: rank <= 3 ? '0' : '1px 4px',
                        marginBottom: '1px',
                      }}>
                        {rank <= 3 ? RANK_EMOJI[rank - 1] : rank}
                      </div>

                      {/* Avatar */}
                      <div style={{
                        width: `${AVATAR_SIZE}px`,
                        height: `${AVATAR_SIZE}px`,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: isCurrentUser
                          ? '2.5px solid #818cf8'
                          : rank === 1 ? '2.5px solid #fbbf24'
                          : rank === 2 ? '2.5px solid #94a3b8'
                          : rank === 3 ? '2.5px solid #f97316'
                          : '2px solid rgba(255,255,255,0.4)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                        background: '#fff',
                        flexShrink: 0,
                      }}>
                        <img src={avatarUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </motion.div>

                    {/* XP badge — floats at the right end of the progress fill */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.06 + 1.0 }}
                      style={{
                        position: 'absolute',
                        right: `${TRACK_RIGHT + 8}px`,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '0.6rem',
                        fontWeight: 800,
                        color: 'rgba(255,255,255,0.55)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {xp.toLocaleString()} XP
                    </motion.div>
                  </div>
                );
              })}

              {/* Bottom distance markers */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '4px 60px 6px 16px',
                background: 'rgba(0,0,0,0.25)',
              }}>
                {[0, 25, 50, 75, 100].map(m => (
                  <span key={m} style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>{m}m</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LeaderboardModal;
