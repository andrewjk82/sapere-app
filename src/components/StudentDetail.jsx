import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Edit3, Mail, Phone, Calendar, 
  BarChart3, Trophy, MessageSquare, Check, X,
  Clock, MapPin, Repeat
} from 'lucide-react';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const StudentDetail = ({ studentId, onBack }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [sessionForm, setSessionForm] = useState({
    date: '28/04/2026',
    focus: '',
    start: '04:00 pm',
    end: '05:00 pm',
    recurring: false
  });

  useEffect(() => {
    const fetchStudent = async () => {
      if (!studentId) return;
      try {
        setLoading(true);
        // Try 'users' collection first (registered)
        let docRef = doc(db, 'users', studentId);
        let snap = await getDoc(docRef);
        
        if (!snap.exists()) {
          // Try 'students' collection (manual)
          docRef = doc(db, 'students', studentId);
          snap = await getDoc(docRef);
        }

        if (snap.exists()) {
          setStudent({ id: snap.id, ...snap.data() });
        }
      } catch (error) {
        console.error("Error fetching student detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]);

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;
  if (!student) return <div className="app-empty">Student not found.</div>;

  const displayName = student.firstName ? `${student.firstName} ${student.lastName}` : (student.name || 'Student');

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="app-page student-detail-page"
    >
      {/* 1. Header Card */}
      <div className="app-panel detail-header-card">
        <div className="detail-header-card__top">
          <button className="back-arrow-btn" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="detail-header-card__title">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1a1c2c', margin: 0 }}>{displayName}</h1>
            </div>
            <div className="detail-header-card__meta">
              <span>{student.school || student.subject || 'N/A'}</span>
              <span className="page-pill" style={{ background: '#e0e7ff', color: '#6366f1' }}>{student.year || student.level}</span>
            </div>
          </div>
          <button className="app-button app-button--secondary" style={{ borderRadius: '24px', padding: '10px 20px', marginLeft: 'auto' }}>
            <Edit3 size={18} />
            Edit Profile
          </button>
        </div>
        
        <div className="detail-header-card__contact">
          <div className="contact-item">
            <Mail size={18} />
            <span>{student.email || 'No email provided'}</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>{student.phone || 'No phone set'}</span>
          </div>
        </div>
      </div>

      <div className="app-grid app-grid--content" style={{ marginTop: '24px' }}>
        {/* 2. Dashboard Preview Section */}
        <div className="app-panel detail-preview-section" style={{ gridColumn: 'span 2' }}>
          <div className="section-title">STUDENT DASHBOARD PREVIEW</div>
          <div className="preview-container">
            <div className="preview-vision-board" style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${student.dreamImageUrl || 'https://images.unsplash.com/photo-1516534775068-ba3e84529519?auto=format&fit=crop&q=80&w=800'})`
            }}>
              <div className="preview-vision-board__content">
                <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Good Morning 👋</span>
                <h3 style={{ fontSize: '1.8rem', margin: '4px 0' }}>{student.firstName || student.name?.split(' ')[0]}</h3>
                <span className="preview-vision-pill">{student.dreamJob || 'Future Professional'}</span>
              </div>
              <button className="change-bg-btn">
                <Calendar size={14} />
                Change Background
              </button>
            </div>
          </div>
        </div>

        {/* 3. Persona & Goal Section */}
        <div className="app-panel detail-persona-section">
          <div className="section-title">STUDENT PERSONA & GOAL</div>
          <div className="persona-content">
            <div className="persona-tag">{student.dreamJob || 'Future Professional'}</div>
            
            <div className="academic-progress-card" style={{ marginTop: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', color: '#64748b' }}>Academic Progress</span>
                <span style={{ color: '#6366f1', fontWeight: 900, background: '#f5f3ff', padding: '4px 12px', borderRadius: '8px' }}>26%</span>
              </div>
              <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '26%', height: '100%', background: '#a78bfa', borderRadius: '5px' }}></div>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '12px' }}>Auto-synced with assigned chapters</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Navigation Tabs Section */}
      <div className="detail-nav-grid" style={{ marginTop: '24px' }}>
        <button className="detail-nav-btn active">
          <Calendar size={20} />
          Schedule
        </button>
        <button className="detail-nav-btn">
          <BarChart3 size={20} />
          Analytics
        </button>
        <button className="detail-nav-btn">
          <Trophy size={20} />
          Challenge
        </button>
        <button className="detail-nav-btn">
          <MessageSquare size={20} />
          Q&A
        </button>
      </div>

      {/* 5. Book New Session Section */}
      <div className="app-panel detail-session-card" style={{ marginTop: '24px' }}>
        <div className="section-title">BOOK NEW SESSION</div>
        <div className="app-form-grid" style={{ marginTop: '20px' }}>
          <div className="app-form-field">
            <label>Date</label>
            <div className="app-input">
              <Calendar size={18} />
              <input type="text" value={sessionForm.date} onChange={e => setSessionForm({...sessionForm, date: e.target.value})} />
            </div>
          </div>
          <div className="app-form-field">
            <label>Focus Subject</label>
            <input type="text" value={sessionForm.focus} onChange={e => setSessionForm({...sessionForm, focus: e.target.value})} placeholder="e.g. Algebra" />
          </div>
          <div className="app-form-field">
            <label>Start</label>
            <div className="app-input">
              <Clock size={18} />
              <input type="text" value={sessionForm.start} onChange={e => setSessionForm({...sessionForm, start: e.target.value})} />
            </div>
          </div>
          <div className="app-form-field">
            <label>End</label>
            <div className="app-input">
              <Clock size={18} />
              <input type="text" value={sessionForm.end} onChange={e => setSessionForm({...sessionForm, end: e.target.value})} />
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div className={`app-checkbox ${sessionForm.recurring ? 'active' : ''}`} onClick={() => setSessionForm({...sessionForm, recurring: !sessionForm.recurring})}>
              {sessionForm.recurring && <Check size={14} />}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 600, color: '#1a1c2c' }}>
              <Repeat size={16} />
              Recurring Weekly
            </div>
          </label>
          
          <button className="app-button app-button--primary" style={{ background: '#1a1c2c', padding: '12px 32px', borderRadius: '12px' }}>
            Finalize Session
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentDetail;
