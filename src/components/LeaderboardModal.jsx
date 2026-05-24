import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';

const RANK_LABELS = ['🥇', '🥈', '🥉'];

const LANE_COLORS = [
  '#fde68a', // 1st — gold
  '#e2e8f0', // 2nd — silver
  '#fed7aa', // 3rd — bronze
  '#dbeafe', '#d1fae5', '#ede9fe', '#fce7f3',
  '#f0fdf4', '#fefce8', '#f0f9ff',
];

const LeaderboardModal = ({ open, onClose, currentUserId }) => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    const q = query(collection(db, 'leaderboard'), orderBy('totalXP', 'desc'), limit(20));
    const unsub = onSnapshot(q, (snap) => {
      setLeaders(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    }, () => setLoading(false));
    return () => unsub();
  }, [open]);

  if (!open) return null;

  const maxXP = leaders[0]?.totalXP || 1;

  return (
    <div className="app-modal" style={{ zIndex: 99999 }}>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="app-modal__backdrop"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        className="app-panel app-modal__card"
        style={{
          maxWidth: '560px', width: '95%',
          padding: 0, overflow: 'hidden', borderRadius: '32px',
          maxHeight: '90vh', display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', padding: '20px 24px', flexShrink: 0, position: 'relative' }}>
          <button
            onClick={onClose}
            style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.8rem' }}>🏁</span>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 900, color: '#fff' }}>Race Leaderboard</h2>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>XP race — who's ahead?</p>
            </div>
          </div>
        </div>

        {/* Race track */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '20px 16px 24px', display: 'flex', flexDirection: 'column', gap: '0', background: '#f8fafc' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div className="app-spinner" style={{ margin: '0 auto', borderColor: '#e2e8f0', borderTopColor: '#6366f1' }} />
            </div>
          ) : leaders.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#94a3b8', fontWeight: 600 }}>No students yet.</div>
          ) : (
            <>
              {/* Finish line label */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '12px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>🏁 Finish</span>
              </div>

              {leaders.map((student, idx) => {
                const rank = idx + 1;
                const xp = student.totalXP || 0;
                const pct = maxXP > 0 ? xp / maxXP : 0;
                const isCurrentUser = student.id === currentUserId;
                const laneColor = LANE_COLORS[idx] || '#f1f5f9';
                const avatarUrl = student.avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(student.id || 'sapere')}`;
                const rankLabel = rank <= 3 ? RANK_LABELS[rank - 1] : `${rank}`;
                const isTop3 = rank <= 3;

                return (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0',
                      marginBottom: '6px',
                    }}
                  >
                    {/* Lane */}
                    <div style={{
                      flex: 1,
                      height: isTop3 ? '62px' : '52px',
                      background: laneColor,
                      borderRadius: '16px',
                      position: 'relative',
                      overflow: 'visible',
                      border: isCurrentUser ? '2px solid #6366f1' : '2px solid transparent',
                      boxShadow: isCurrentUser ? '0 0 0 3px rgba(99,102,241,0.2)' : 'none',
                    }}>
                      {/* Progress bar fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct * 100}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.05 + 0.2, ease: 'easeOut' }}
                        style={{
                          position: 'absolute',
                          left: 0, top: 0, bottom: 0,
                          background: isTop3
                            ? `linear-gradient(90deg, ${laneColor}, ${rank === 1 ? '#fbbf24' : rank === 2 ? '#94a3b8' : '#f97316'})`
                            : `linear-gradient(90deg, ${laneColor}, rgba(99,102,241,0.15))`,
                          borderRadius: '14px',
                          opacity: 0.6,
                        }}
                      />

                      {/* Runner avatar — positioned at the progress point */}
                      <motion.div
                        initial={{ left: '0%' }}
                        animate={{ left: `calc(${pct * 100}% - 28px)` }}
                        transition={{ duration: 0.8, delay: idx * 0.05 + 0.2, ease: 'easeOut' }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          zIndex: 10,
                        }}
                      >
                        {/* Rank badge above head */}
                        <div style={{
                          fontSize: isTop3 ? '1rem' : '0.65rem',
                          fontWeight: 900,
                          color: isTop3 ? undefined : '#475569',
                          background: isTop3 ? 'transparent' : '#e2e8f0',
                          borderRadius: '999px',
                          padding: isTop3 ? '0' : '1px 5px',
                          marginBottom: '2px',
                          lineHeight: 1,
                          whiteSpace: 'nowrap',
                        }}>
                          {rankLabel}
                        </div>

                        {/* Avatar */}
                        <div style={{
                          width: isTop3 ? '40px' : '32px',
                          height: isTop3 ? '40px' : '32px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          border: isCurrentUser ? '2px solid #6366f1' : `2px solid ${rank === 1 ? '#fbbf24' : rank === 2 ? '#94a3b8' : rank === 3 ? '#f97316' : '#fff'}`,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                          background: '#fff',
                          flexShrink: 0,
                          // Slight bounce to simulate running
                        }}>
                          <img src={avatarUrl} alt={student.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </motion.div>

                      {/* Name tag on the left */}
                      <div style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1px',
                      }}>
                        <span style={{
                          fontSize: isTop3 ? '0.8rem' : '0.72rem',
                          fontWeight: 900,
                          color: '#1e1b4b',
                          whiteSpace: 'nowrap',
                          maxWidth: '90px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                          {student.name || 'Student'}
                        </span>
                        <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#64748b' }}>
                          {xp.toLocaleString()} XP
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Track dashes at bottom */}
              <div style={{ display: 'flex', gap: '4px', marginTop: '8px', paddingLeft: '4px', paddingRight: '12px', alignItems: 'center' }}>
                <div style={{ flex: 1, borderTop: '2px dashed #cbd5e1' }} />
                <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 700 }}>Start 🚀</span>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LeaderboardModal;
