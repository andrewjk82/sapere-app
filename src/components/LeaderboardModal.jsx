import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, Medal, Crown } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const LeaderboardModal = ({ open, onClose, currentUserId, students = [] }) => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) return;

    if (students.length > 0) {
      setLeaders(
        [...students]
          .sort((a, b) => (Number(b.totalXP) || 0) - (Number(a.totalXP) || 0))
          .slice(0, 50)
      );
      setLoading(false);
      return;
    }
    
    const fetchLeaders = async () => {
      setLoading(true);
      try {
        const usersSnap = await getDocs(collection(db, 'users'));
        const registeredStudents = usersSnap.docs
          .map(d => ({ id: d.id, source: 'registered', ...d.data() }))
          .filter(u => {
            const role = String(u.role || '').toLowerCase();
            return role !== 'admin' && role !== 'parent' && u.email !== 'andrewjk82@gmail.com';
          });

        // Manual students may be inaccessible for non-admin users — skip gracefully
        let manualStudents = [];
        try {
          const studentsSnap = await getDocs(collection(db, 'students'));
          manualStudents = studentsSnap.docs
            .map(d => ({ id: `manual-${d.id}`, sourceId: d.id, source: 'manual', ...d.data() }));
        } catch {
          console.warn('manual leaderboard onSnapshot permission error (non-fatal): permission-denied');
        }

        const data = [...manualStudents, ...registeredStudents]
          .sort((a, b) => (Number(b.totalXP) || 0) - (Number(a.totalXP) || 0))
          .slice(0, 50);
        setLeaders(data);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeaders();
      }, [open, students]);

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
        style={{ maxWidth: '500px', width: '92%', padding: '0', overflow: 'hidden', borderRadius: '32px' }}
      >
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', padding: '20px 24px', position: 'relative' }}>
          <button 
            onClick={onClose}
            style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
              <Trophy size={20} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: 'white' }}>Leaderboard</h2>
            </div>
          </div>
        </div>

        {/* List */}
        <div style={{ padding: '20px', maxHeight: '65vh', overflowY: 'auto' }}>
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

                const displayName = student.name || student.displayName || (student.firstName ? `${student.firstName} ${student.lastName || ''}`.trim() : '') || 'Unknown Student';
                const displayLevel = student.level || student.year || 'Student';
                const avatarUrl = student.dreamImageUrl || student.avatarUrl || (student.avatarStyle && student.avatarSeed
                  ? `https://api.dicebear.com/7.x/${student.avatarStyle}/svg?seed=${encodeURIComponent(student.avatarSeed)}`
                  : `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(student.email || displayName || 'sapere')}`);

                return (
                  <div 
                    key={student.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      padding: '16px 24px',
                      borderRadius: '24px',
                      background: isCurrentUser ? '#f5f3ff' : '#fff',
                      border: `2px solid ${isCurrentUser ? '#6366f1' : '#f1f5f9'}`,
                      boxShadow: isCurrentUser ? '0 10px 25px rgba(99, 102, 241, 0.15)' : '0 4px 12px rgba(0,0,0,0.02)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: rankBg, color: rankColor, borderRadius: '12px', fontWeight: 900, fontSize: '1rem', flexShrink: 0 }}>
                        {RankIcon ? <RankIcon size={20} /> : rank}
                      </div>
                      
                      <img 
                        src={avatarUrl} 
                        alt={displayName} 
                        style={{ 
                          width: '56px', 
                          height: '56px', 
                          borderRadius: '50%', 
                          background: '#fff', 
                          objectFit: 'cover',
                          border: isCurrentUser ? '3px solid #6366f1' : '3px solid #f8fafc',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.08)'
                        }} 
                      />
                    </div>
                    
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 950, color: isCurrentUser ? '#4f46e5' : '#1e1b4b', fontSize: '1.4rem', letterSpacing: '-0.02em' }}>
                        {student.totalXP || 0}
                      </div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Total XP
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
