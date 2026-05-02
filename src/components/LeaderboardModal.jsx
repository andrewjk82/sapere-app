import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, Medal, Crown } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

const LeaderboardModal = ({ open, onClose, currentUserId }) => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) return;
    
    const fetchLeaders = async () => {
      setLoading(true);
      try {
        const usersRef = collection(db, 'users');
        const q = query(
          usersRef,
          where('role', '==', 'student'),
          orderBy('totalXP', 'desc'),
          limit(50)
        );
        const snap = await getDocs(q);
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setLeaders(data);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeaders();
  }, [open]);

  if (!open) return null;

  return (
    <div className="app-modal" style={{ zIndex: 99999 }}>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="app-modal__backdrop"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="app-panel app-modal__card"
        style={{ maxWidth: '500px', width: '90%', padding: '0', overflow: 'hidden' }}
      >
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', padding: '24px', position: 'relative' }}>
          <button 
            onClick={onClose}
            style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
              <Trophy size={24} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: 'white' }}>Leaderboard</h2>
              <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#e0e7ff', fontWeight: 500 }}>Top students by XP</p>
            </div>
          </div>
        </div>

        {/* List */}
        <div style={{ padding: '24px', maxHeight: '60vh', overflowY: 'auto' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div className="app-spinner" style={{ margin: '0 auto', borderColor: '#e2e8f0', borderTopColor: '#6366f1' }}></div>
            </div>
          ) : leaders.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {leaders.map((student, idx) => {
                const isCurrentUser = student.id === currentUserId;
                const rank = idx + 1;
                
                let RankIcon = null;
                let rankColor = '#64748b';
                let rankBg = '#f1f5f9';
                
                if (rank === 1) {
                  RankIcon = Crown;
                  rankColor = '#d97706';
                  rankBg = '#fef3c7';
                } else if (rank === 2) {
                  RankIcon = Medal;
                  rankColor = '#64748b';
                  rankBg = '#f1f5f9';
                } else if (rank === 3) {
                  RankIcon = Medal;
                  rankColor = '#b45309';
                  rankBg = '#ffedd5';
                }

                const avatarUrl = student.avatarUrl || (student.avatarStyle && student.avatarSeed
                  ? `https://api.dicebear.com/7.x/${student.avatarStyle}/svg?seed=${encodeURIComponent(student.avatarSeed)}`
                  : `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(student.email || 'sapere')}`);

                return (
                  <div 
                    key={student.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px',
                      borderRadius: '16px',
                      background: isCurrentUser ? '#f5f3ff' : '#fff',
                      border: `2px solid ${isCurrentUser ? '#818cf8' : '#f1f5f9'}`,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  >
                    <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: rankBg, color: rankColor, borderRadius: '50%', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0 }}>
                      {RankIcon ? <RankIcon size={16} /> : rank}
                    </div>
                    
                    <img src={avatarUrl} alt={student.name} style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafc', objectFit: 'cover' }} />
                    
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 800, color: '#1e293b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {student.name || 'Unknown Student'}
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>
                        {student.level || 'Student'}
                      </div>
                    </div>
                    
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontWeight: 900, color: '#6366f1', fontSize: '1.1rem' }}>
                        {student.totalXP || 0}
                      </div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        XP
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8', fontWeight: 600 }}>
              No students found yet.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LeaderboardModal;
