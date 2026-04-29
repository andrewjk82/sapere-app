import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Edit3, Mail, Phone, Calendar, 
  BarChart3, Trophy, MessageSquare, Check, X,
  Clock, MapPin, Repeat, Upload
} from 'lucide-react';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const StudentDetail = ({ studentId, onBack }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [sessionForm, setSessionForm] = useState({
    date: '28/04/2026',
    focus: '',
    start: '04:00 pm',
    end: '05:00 pm',
    recurring: false
  });

  const styles = {
    page: { padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' },
    card: { padding: '32px', borderRadius: '32px', background: 'white', border: '1px solid rgba(167, 139, 250, 0.15)', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' },
    headerTop: { display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' },
    backBtn: { width: '48px', height: '48px', borderRadius: '16px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
    title: { fontSize: '2.5rem', fontWeight: 900, color: '#1a1c2c', margin: 0 },
    meta: { display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px', color: '#64748b', fontWeight: 600 },
    contact: { display: 'flex', gap: '32px', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.05)' },
    contactItem: { display: 'flex', alignItems: 'center', gap: '10px', color: '#475569', fontWeight: 600, fontSize: '0.9rem' },
    navGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', margin: '24px 0' },
    navBtn: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '20px', background: 'white', border: '2px solid rgba(167, 139, 250, 0.1)', borderRadius: '20px', color: '#64748b', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s ease' },
    navBtnActive: { borderColor: '#6366f1', color: '#6366f1', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.1)' },
    visionBoard: { height: '280px', borderRadius: '28px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '32px', color: 'white', overflow: 'hidden' },
    visionPill: { background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', padding: '6px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700, display: 'inline-block', marginTop: '8px' }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Resize logic (800px standard for free storage efficiency)
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 800;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Compress to JPEG 70% quality (Tutor-pro style)
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
        
        try {
          const collectionName = student.source === 'manual' ? 'students' : 'users';
          const studentRef = doc(db, collectionName, studentId);
          await setDoc(studentRef, { dreamImageUrl: compressedDataUrl }, { merge: true });
          
          setStudent(prev => ({ ...prev, dreamImageUrl: compressedDataUrl }));
        } catch (error) {
          console.error("Save failed:", error);
          alert("Failed to save image to system.");
        } finally {
          setUploading(false);
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

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
      style={styles.page}
    >
      {/* 1. Header Card */}
      <div style={styles.card}>
        <div style={styles.headerTop}>
          <button style={styles.backBtn} onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="detail-header-card__title">
            <h1 style={styles.title}>{displayName}</h1>
            <div style={styles.meta}>
              <span>{student.school || student.subject || 'N/A'}</span>
              <span className="page-pill" style={{ background: '#e0e7ff', color: '#6366f1' }}>{student.year || student.level}</span>
            </div>
          </div>
          <button className="app-button app-button--secondary" style={{ borderRadius: '24px', padding: '10px 20px', marginLeft: 'auto' }}>
            <Edit3 size={18} />
            Edit Profile
          </button>
        </div>
        
        <div style={styles.contact}>
          <div style={styles.contactItem}>
            <Mail size={18} />
            <span>{student.email || 'No email provided'}</span>
          </div>
          <div style={styles.contactItem}>
            <Phone size={18} />
            <span>{student.phone || 'No phone set'}</span>
          </div>
        </div>
      </div>

      {/* 2 & 3. Combined Vision & Persona Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '24px', alignItems: 'stretch' }}>
        {/* Dashboard Preview Section (Vision Board) */}
        <div style={{ ...styles.card, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', textTransform: 'uppercase' }}>STUDENT DASHBOARD PREVIEW</div>
          <div style={{ 
            ...styles.visionBoard, 
            flex: 1,
            height: 'auto',
            minHeight: '220px',
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${student.dreamImageUrl || 'https://images.unsplash.com/photo-1516534775068-ba3e84529519?auto=format&fit=crop&q=80&w=800'})` 
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))', zIndex: 1 }}></div>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              accept="image/*"
              onChange={handleImageUpload}
            />

            <button 
              className="change-bg-btn" 
              onClick={() => fileInputRef.current.click()}
              disabled={uploading}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 14px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', zIndex: 3 }}
            >
              {uploading ? (
                <>
                  <div className="app-spinner-sm" style={{ width: '12px', height: '12px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
                  ...
                </>
              ) : (
                <>
                  <Upload size={12} />
                  Change
                </>
              )}
            </button>
          </div>
        </div>

        {/* Persona & Goal Section */}
        <div style={{ ...styles.card, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', textTransform: 'uppercase' }}>STUDENT PERSONA & GOAL</div>
          <div className="persona-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="persona-tag" style={{ background: '#f5f3ff', color: '#6366f1', padding: '12px 24px', borderRadius: '12px', fontWeight: 700, display: 'inline-block', width: 'fit-content' }}>{student.dreamJob || 'Future Professional'}</div>
            
            <div className="academic-progress-card" style={{ marginTop: '24px', background: '#f8fafc', padding: '20px', borderRadius: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', color: '#64748b' }}>Academic Progress</span>
                <span style={{ color: '#6366f1', fontWeight: 900, background: '#f5f3ff', padding: '4px 12px', borderRadius: '8px' }}>26%</span>
              </div>
              <div style={{ height: '10px', background: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '26%', height: '100%', background: '#a78bfa', borderRadius: '5px' }}></div>
              </div>
              <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '12px' }}>Auto-synced with assigned chapters</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Navigation Tabs Section */}
      <div style={styles.navGrid}>
        <button style={{ ...styles.navBtn, ...styles.navBtnActive }}>
          <Calendar size={20} />
          Schedule
        </button>
        <button style={styles.navBtn}>
          <BarChart3 size={20} />
          Analytics
        </button>
        <button style={styles.navBtn}>
          <Trophy size={20} />
          Challenge
        </button>
        <button style={styles.navBtn}>
          <MessageSquare size={20} />
          Q&A
        </button>
      </div>

      {/* 5. Book New Session Section */}
      <div style={styles.card}>
        <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', textTransform: 'uppercase' }}>BOOK NEW SESSION</div>
        <div className="app-form-grid" style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div className="app-form-field">
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>Date</label>
            <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white' }}>
              <Calendar size={18} />
              <input type="text" value={sessionForm.date} onChange={e => setSessionForm({...sessionForm, date: e.target.value})} style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
            </div>
          </div>
          <div className="app-form-field">
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>Focus Subject</label>
            <input type="text" value={sessionForm.focus} onChange={e => setSessionForm({...sessionForm, focus: e.target.value})} placeholder="e.g. Algebra" style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', outline: 'none' }} />
          </div>
          <div className="app-form-field">
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>Start</label>
            <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white' }}>
              <Clock size={18} />
              <input type="text" value={sessionForm.start} onChange={e => setSessionForm({...sessionForm, start: e.target.value})} style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
            </div>
          </div>
          <div className="app-form-field">
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>End</label>
            <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white' }}>
              <Clock size={18} />
              <input type="text" value={sessionForm.end} onChange={e => setSessionForm({...sessionForm, end: e.target.value})} style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div 
              style={{ width: '24px', height: '24px', border: '2px solid #cbd5e1', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: sessionForm.recurring ? '#6366f1' : 'white', borderColor: sessionForm.recurring ? '#6366f1' : '#cbd5e1', color: 'white' }} 
              onClick={() => setSessionForm({...sessionForm, recurring: !sessionForm.recurring})}
            >
              {sessionForm.recurring && <Check size={14} />}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 600, color: '#1a1c2c' }}>
              <Repeat size={16} />
              Recurring Weekly
            </div>
          </label>
          
          <button className="app-button" style={{ background: '#1a1c2c', padding: '16px 40px', borderRadius: '16px', color: 'white', fontWeight: 800, border: 0, cursor: 'pointer', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
            Finalize Session
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentDetail;
