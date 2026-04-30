import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, Calendar, BookOpen, 
  MessageSquare, Trophy, 
  Mail, Phone, Check, Clock,
  Edit3, Save, Bell, X
} from 'lucide-react';
import { db } from '../firebase/config';
import { 
  doc, updateDoc, onSnapshot, collection, 
  addDoc, serverTimestamp, deleteDoc
} from 'firebase/firestore';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import './student-detail.css';

const StudentDetail = ({ studentId, onBack }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');
  const [assignedChapters, setAssignedChapters] = useState([]);
  const [booking, setBooking] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [dailyStats, setDailyStats] = useState([]);

  const [sessionForm, setSessionForm] = useState({
    date: new Date().toISOString().split('T')[0],
    focus: '',
    start: '04:00 pm',
    end: '05:00 pm',
    recurring: false
  });

  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    phone: '',
    level: '',
    subject: '',
    school: '',
    year: '',
    dreamJob: '',
    address: '',
    assignedYear: 'Year 11',
    assignedCourse: 'Advanced'
  });

  const styles = {
    card: { padding: '32px', borderRadius: '32px', background: 'white', border: '1px solid rgba(167, 139, 250, 0.15)', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' },
    backBtn: { width: '48px', height: '48px', borderRadius: '16px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
    navBtn: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '20px', background: 'white', border: '2px solid rgba(167, 139, 250, 0.1)', borderRadius: '20px', color: '#64748b', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s ease' },
    navBtnActive: { borderColor: '#6366f1', color: '#6366f1', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.1)' },
    visionBoard: { borderRadius: '24px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '24px', color: 'white', overflow: 'hidden', flex: 1 }
  };

  // 1. Primary Student Listener
  useEffect(() => {
    if (!studentId) return;
    
    // First try users collection
    const unsub = onSnapshot(doc(db, 'users', studentId), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setStudent({ id: snap.id, source: 'users', ...data });
        setAssignedChapters(data.assignedChapters || []);
        setEditForm({
          name: data.name || data.firstName || '',
          email: data.email || '',
          phone: data.phone || '',
          level: data.level || data.year || '',
          subject: data.subject || data.school || '',
          assignedYear: data.assignedYear || data.level || data.year || 'Year 11',
          assignedCourse: data.assignedCourse || 'Advanced'
        });
        setLoading(false);
      } else {
        // Fallback to students collection
        onSnapshot(doc(db, 'students', studentId), (mSnap) => {
          if (mSnap.exists()) {
            const mData = mSnap.data();
            setStudent({ id: mSnap.id, source: 'manual', ...mData });
            setAssignedChapters(mData.assignedChapters || []);
            setEditForm({
              name: mData.name || '',
              email: mData.email || '',
              phone: mData.phone || '',
              level: mData.level || mData.year || '',
              subject: mData.subject || mData.school || '',
              school: mData.school || '',
              year: mData.year || mData.level || '',
              dreamJob: mData.dreamJob || '',
              address: mData.address || '',
              assignedYear: mData.assignedYear || mData.level || mData.year || 'Year 11',
              assignedCourse: mData.assignedCourse || 'Advanced'
            });
          }
          setLoading(false);
        });
      }
    });

    return () => unsub();
  }, [studentId]);

  // 2. Stats Listener
  useEffect(() => {
    if (!studentId || !student?.id) return;
    
    const col = student.source === 'manual' ? 'students' : 'users';
    const unsubStats = onSnapshot(collection(db, col, studentId, 'daily_stats'), (snap) => {
      const stats = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      stats.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      setDailyStats(stats);
    });

    return () => unsubStats();
  }, [studentId, student?.source, student?.id]);

  const handleResetChallenge = async (statId) => {
    if (!window.confirm("Reset this challenge?")) return;
    try {
      const col = student.source === 'manual' ? 'students' : 'users';
      await deleteDoc(doc(db, col, studentId, 'daily_stats', statId));
      alert("Reset complete.");
    } catch (e) { console.error(e); }
  };

  const handleUpdateProfile = async () => {
    try {
      const col = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, col, studentId), { ...editForm, updatedAt: new Date().toISOString() });
      setIsEditing(false);
      alert("Updated.");
    } catch (e) { console.error(e); }
  };

  const handleUpdateCurriculumSetting = async (field, value) => {
    try {
      const col = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, col, studentId), { [field]: value });
    } catch (e) { console.error(e); }
  };

  const handleToggleChapter = async (chapterId) => {
    const newChapters = assignedChapters.includes(chapterId)
      ? assignedChapters.filter(id => id !== chapterId)
      : [...assignedChapters, chapterId];
    setAssignedChapters(newChapters);
    try {
      const col = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, col, studentId), { assignedChapters: newChapters });
    } catch (e) { console.error(e); }
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
        let w = img.width, h = img.height;
        if (w > 1200) { h *= 1200 / w; w = 1200; }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        const url = canvas.toDataURL('image/jpeg', 0.7);
        try {
          const col = student.source === 'manual' ? 'students' : 'users';
          await updateDoc(doc(db, col, studentId), { dreamImageUrl: url });
          setStudent(p => ({ ...p, dreamImageUrl: url }));
        } catch (err) { console.error(err); } finally { setUploading(false); }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleBookSession = async () => {
    if (!sessionForm.focus || !sessionForm.date) return alert("Fill fields.");
    try {
      setBooking(true);
      const groupId = sessionForm.recurring ? `g_${Date.now()}` : null;
      const weeks = sessionForm.recurring ? 8 : 1;
      for (let i = 0; i < weeks; i++) {
        const d = new Date(sessionForm.date);
        d.setDate(d.getDate() + (i * 7));
        await addDoc(collection(db, 'sessions'), {
          studentId, studentName: student.name || 'Student',
          date: d.toISOString().split('T')[0],
          subject: sessionForm.focus, startTime: sessionForm.start, endTime: sessionForm.end,
          recurring: sessionForm.recurring, groupId, status: 'Scheduled', createdAt: serverTimestamp()
        });
      }
      alert("Booked.");
      setSessionForm(p => ({ ...p, focus: '' }));
    } catch (err) { console.error(err); } finally { setBooking(false); }
  };

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;
    try {
      setSendingMessage(true);
      const res = await fetch('/api/send-notif', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, email: student.email, subject: 'Message', text: messageText })
      });
      if (res.ok) { alert("Sent."); setMessageText(''); setMessageOpen(false); }
    } catch (e) { console.error(e); } finally { setSendingMessage(false); }
  };

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;
  if (!student) return <div className="app-empty">Not found.</div>;

  const y = student.assignedYear || student.level || student.year || 'Year 11';
  const c = student.assignedCourse || 'Advanced';
  let chaps = CURRICULUM_DATA[y] || [];
  if (!Array.isArray(chaps)) chaps = chaps[c] || [];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'curriculum':
        return (
          <div style={styles.card} className="profile-card-mobile">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div className="section-title">CURRICULUM</div>
              <select value={y} onChange={e => handleUpdateCurriculumSetting('assignedYear', e.target.value)}>
                {Object.keys(CURRICULUM_DATA).map(year => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
              {chaps.map(ch => (
                <div key={ch.id} onClick={() => handleToggleChapter(ch.id)} style={{ padding: '12px', borderRadius: '12px', border: '1px solid', borderColor: assignedChapters.includes(ch.id) ? '#6366f1' : '#eee', background: assignedChapters.includes(ch.id) ? '#f5f3ff' : '#fff', cursor: 'pointer' }}>
                  <div style={{ fontWeight: 800 }}>{ch.title}</div>
                  <div style={{ fontSize: '0.7rem', color: '#999' }}>{ch.modules} modules</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'schedule':
        return (
          <div style={styles.card} className="profile-card-mobile">
            <div className="section-title">BOOK SESSION</div>
            <div className="form-grid-mobile">
              <input type="date" value={sessionForm.date} onChange={e => setSessionForm({...sessionForm, date: e.target.value})} />
              <input type="text" value={sessionForm.focus} onChange={e => setSessionForm({...sessionForm, focus: e.target.value})} placeholder="Focus" />
            </div>
            <button onClick={handleBookSession} disabled={booking} className="app-button">{booking ? '...' : 'Book'}</button>
          </div>
        );
      case 'challenge':
        return (
          <div style={styles.card} className="profile-card-mobile">
            <div className="section-title">CHALLENGE HISTORY</div>
            {dailyStats.length === 0 ? <p>No history.</p> : dailyStats.map(s => (
              <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f8fafc', marginBottom: '8px', borderRadius: '12px' }}>
                <div><b>{s.id}</b> - {s.score}/{s.total} ({Math.round((s.score/s.total)*100)}%)</div>
                <button onClick={() => handleResetChallenge(s.id)}>Reset</button>
              </div>
            ))}
          </div>
        );
      default: return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="student-detail-container">
      <div style={styles.card}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onBack}><ChevronLeft /></button>
          <h2>{student.name || student.firstName || 'Student'}</h2>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setActiveTab('schedule')}>Schedule</button>
          <button onClick={() => setActiveTab('curriculum')}>Curriculum</button>
          <button onClick={() => setActiveTab('challenge')}>Challenge</button>
        </div>
      </div>
      {renderTabContent()}
      <AnimatePresence>
        {messageOpen && (
          <div className="app-modal">
            <motion.div onClick={() => setMessageOpen(false)} className="app-modal__backdrop" />
            <motion.div className="app-panel app-modal__card">
              <h3>Message {student.name}</h3>
              <textarea value={messageText} onChange={e => setMessageText(e.target.value)} />
              <button onClick={handleSendMessage}>Send</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StudentDetail;
