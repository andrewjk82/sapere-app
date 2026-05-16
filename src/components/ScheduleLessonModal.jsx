import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useToast } from '../context/ToastContext';
import { TIME_OPTIONS } from '../constants/timeOptions';
import { normalizeSubjectLabel } from '../utils/subjectLabels';

const ScheduleLessonModal = ({ isOpen, onClose, students }) => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newSession, setNewSession] = useState({
    studentIds: [], 
    studentName: '',
    subject: '',
    date: new Date().toISOString().split('T')[0],
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    notes: '',
    homework: '',
    recurring: false
  });

  if (!isOpen) return null;

  const handleCreateSession = async (e) => {
    e.preventDefault();
    if (newSession.studentIds.length === 0 || !newSession.subject) {
      showToast("Please select at least one student and a subject.", 'warning');
      return;
    }
    setIsSubmitting(true);
    try {
      const sessionsToCreate = [];
      const groupId = `series_${Date.now()}`; 
      const sessionSubject = normalizeSubjectLabel(newSession.subject.trim());
      
      const allStudentNames = newSession.studentIds.map(id => {
        const s = students.find(st => st.id === id);
        return s?.name || s?.displayName || `${s?.firstName || ''} ${s?.lastName || ''}`.trim() || 'Student';
      });

      for (const studentId of newSession.studentIds) {
        const selectedStudent = students.find(s => s.id === studentId);
        const studentEmail = (selectedStudent?.email || '').toLowerCase();
        const studentName = selectedStudent?.name || selectedStudent?.displayName || `${selectedStudent?.firstName || ''} ${selectedStudent?.lastName || ''}`.trim() || 'Student';

        const count = newSession.recurring ? 52 : 1;
        const baseDate = new Date(newSession.date + 'T12:00:00'); // noon avoids UTC day shift

        for (let i = 0; i < count; i++) {
          const nextDate = new Date(baseDate);
          nextDate.setDate(baseDate.getDate() + (i * 7));
          const year = nextDate.getFullYear();
          const month = String(nextDate.getMonth() + 1).padStart(2, '0');
          const day   = String(nextDate.getDate()).padStart(2, '0');
          
          sessionsToCreate.push({
            ...newSession,
            subject: sessionSubject,
            studentId,
            studentName,
            studentEmail,
            groupStudentNames: allStudentNames, // Store everyone's name in each doc
            groupId: groupId, 
            date: `${year}-${month}-${day}`,
            isHomeworkCompleted: false,
            reminderSent: false,
            createdAt: new Date().toISOString()
          });
        }
      }

      // Add all to Firestore
      await Promise.all(sessionsToCreate.map(s => {
        const { studentIds, ...rest } = s; // Don't save the array of all IDs to individual docs
        return addDoc(collection(db, 'sessions'), rest);
      }));

      await Promise.all(newSession.studentIds.map(async (studentId) => {
        const selectedStudent = students.find(s => s.id === studentId);
        const firstSession = sessionsToCreate.find(s => s.studentId === studentId);
        if (!selectedStudent || !firstSession) return;

        try {
          await fetch('/api/send-notif', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              studentId,
              email: selectedStudent.email || '',
              subject: 'Your schedule has been updated',
              text: `Your ${firstSession.subject} session has been scheduled for ${firstSession.date} at ${firstSession.startTime}.`
            })
          });
        } catch (err) {
          console.warn('Schedule notification failed:', err);
        }
      }));

      onClose();
      setNewSession({ 
        studentIds: [], 
        studentName: '', 
        subject: '', 
        date: new Date().toISOString().split('T')[0], 
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        notes: '',
        homework: '',
        recurring: false 
      });
      showToast('Session created successfully!', 'success');
    } catch (err) {
      console.error('Error creating session:', err);
      showToast('Error creating session.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(4px)' }}
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        style={{ position: 'relative', width: '100%', maxWidth: '460px', backgroundColor: '#fff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.18)' }}
      >
        {/* Modal header */}
        <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '28px 32px', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900, color: 'white' }}>Schedule Lesson</h3>
              <p style={{ margin: 0, opacity: 0.85, fontSize: '0.9rem', fontWeight: 600 }}>Create a new session for a student</p>
            </div>
            <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal body */}
        <form onSubmit={handleCreateSession} style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Student Multi-selector */}
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Select Students</label>
            <div style={{ 
              maxHeight: '150px', 
              overflowY: 'auto', 
              backgroundColor: '#f8fafc', 
              border: '2px solid #e2e8f0', 
              borderRadius: '14px',
              padding: '8px'
            }}>
              {students.map(s => {
                const isSelected = newSession.studentIds.includes(s.id);
                return (
                  <div 
                    key={s.id} 
                    onClick={() => {
                      const current = [...newSession.studentIds];
                      if (isSelected) {
                        setNewSession({ ...newSession, studentIds: current.filter(id => id !== s.id) });
                      } else {
                        setNewSession({ ...newSession, studentIds: [...current, s.id] });
                      }
                    }}
                    style={{ 
                      padding: '10px 12px', 
                      borderRadius: '10px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      cursor: 'pointer',
                      backgroundColor: isSelected ? '#eef2ff' : 'transparent',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '4px', 
                      border: '2px solid', 
                      borderColor: isSelected ? '#6366f1' : '#cbd5e1', 
                      background: isSelected ? '#6366f1' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      {isSelected && <Check size={12} />}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: isSelected ? '#6366f1' : '#334155' }}>
                      {s.name || s.displayName || s.firstName} <span style={{ opacity: 0.6, fontSize: '0.75rem', fontWeight: 600 }}>({s.level || s.year || ''})</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Subject</label>
            <input
              required
              type="text"
              placeholder="e.g. Mathematics"
              value={newSession.subject}
              onChange={e => setNewSession({ ...newSession, subject: e.target.value })}
              style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          {/* Date */}
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Date</label>
            <input
              required
              type="date"
              value={newSession.date}
              onChange={e => setNewSession({ ...newSession, date: e.target.value })}
              style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          {/* Start / End time */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Start Time</label>
              <select
                required
                value={newSession.startTime}
                onChange={e => setNewSession({ ...newSession, startTime: e.target.value })}
                style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box', cursor: 'pointer', appearance: 'none' }}
              >
                {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>End Time</label>
              <select
                required
                value={newSession.endTime}
                onChange={e => setNewSession({ ...newSession, endTime: e.target.value })}
                style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box', cursor: 'pointer', appearance: 'none' }}
              >
                {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* Recurring Checkbox */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
            <div 
              onClick={() => setNewSession({...newSession, recurring: !newSession.recurring})}
              style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '6px', 
                border: '2px solid', 
                borderColor: newSession.recurring ? '#6366f1' : '#cbd5e1', 
                background: newSession.recurring ? '#6366f1' : 'transparent', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                cursor: 'pointer' 
              }}
            >
              {newSession.recurring && <Check size={14} />}
            </div>
            <span style={{ fontWeight: 700, color: '#334155', fontSize: '0.9rem' }}>Recurring Weekly</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{ width: '100%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', padding: '16px', borderRadius: '14px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', marginTop: '4px', boxShadow: '0 4px 12px rgba(99,102,241,0.3)', opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? 'Saving...' : 'Create Session'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ScheduleLessonModal;
