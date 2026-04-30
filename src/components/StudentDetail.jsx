import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, Calendar, BookOpen, 
  MessageSquare, Trophy, 
  Mail, Phone, Check, Settings, Clock,
  Edit3, Save, Bell, X
} from 'lucide-react';
import { db } from '../firebase/config';
import { 
  doc, updateDoc, onSnapshot, collection, 
  addDoc, serverTimestamp, getDocs, query, where, orderBy, deleteDoc
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

  // 1. Unified Student Data Listener
  useEffect(() => {
    if (!studentId) return;

    let unsub = () => {};

    // Try users collection first
    const uRef = doc(db, 'users', studentId);
    const unsubUsers = onSnapshot(uRef, (snap) => {
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
        // Try students collection
        const sRef = doc(db, 'students', studentId);
        const unsubStudents = onSnapshot(sRef, (mSnap) => {
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
        unsub = unsubStudents;
      }
    });

    return () => {
      unsubUsers();
      unsub();
    };
  }, [studentId]);

  // 2. Separate Effect for Stats
  useEffect(() => {
    if (!studentId || !student) return;
    
    const colName = student.source === 'manual' ? 'students' : 'users';
    const statsRef = collection(db, colName, studentId, 'daily_stats');
    
    const unsubStats = onSnapshot(statsRef, (snap) => {
      const stats = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      stats.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      setDailyStats(stats);
    }, (err) => {
      console.error("Stats Error:", err);
    });

    return () => unsubStats();
  }, [studentId, student?.source]);

  const handleResetChallenge = async (statId) => {
    if (!window.confirm("Are you sure you want to reset this challenge?")) return;
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      await deleteDoc(doc(db, colName, studentId, 'daily_stats', statId));
      alert("Challenge reset successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, colName, studentId), {
        ...editForm,
        updatedAt: new Date().toISOString()
      });
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateCurriculumSetting = async (field, value) => {
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, colName, studentId), { [field]: value });
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleChapter = async (chapterId) => {
    const newChapters = assignedChapters.includes(chapterId)
      ? assignedChapters.filter(id => id !== chapterId)
      : [...assignedChapters, chapterId];
    
    setAssignedChapters(newChapters);
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, colName, studentId), { assignedChapters: newChapters });
    } catch (error) {
      console.error(error);
    }
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
        let width = img.width, height = img.height;
        const MAX = 1200;
        if (width > height && width > MAX) { height *= MAX / width; width = MAX; }
        else if (height > MAX) { width *= MAX / height; height = MAX; }
        canvas.width = width; canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        try {
          const colName = student.source === 'manual' ? 'students' : 'users';
          await updateDoc(doc(db, colName, studentId), { dreamImageUrl: dataUrl });
          setStudent(prev => ({ ...prev, dreamImageUrl: dataUrl }));
        } catch (error) { console.error(error); } finally { setUploading(false); }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleBookSession = async () => {
    if (!sessionForm.focus || !sessionForm.date) return alert("Please fill in focus and date.");
    try {
      setBooking(true);
      const sessionsToAdd = [];
      const groupId = sessionForm.recurring ? `group_${Date.now()}` : null;
      const numWeeks = sessionForm.recurring ? 8 : 1;

      for (let i = 0; i < numWeeks; i++) {
        const currentDate = new Date(sessionForm.date);
        currentDate.setDate(currentDate.getDate() + (i * 7));
        const dateStr = currentDate.toISOString().split('T')[0];

        sessionsToAdd.push({
          studentId,
          studentName: student.name || student.firstName || 'Student',
          studentEmail: student.email || '',
          date: dateStr,
          subject: sessionForm.focus,
          startTime: sessionForm.start,
          endTime: sessionForm.end,
          recurring: sessionForm.recurring,
          groupId: groupId,
          status: 'Scheduled',
          createdAt: serverTimestamp(),
          reminderSent: false
        });
      }

      for (const session of sessionsToAdd) {
        await addDoc(collection(db, 'sessions'), session);
      }

      alert("Session booked!");
      setSessionForm(prev => ({ ...prev, focus: '' }));
    } catch (error) { 
      console.error(error); 
    } finally { 
      setBooking(false); 
    }
  };

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;
    try {
      setSendingMessage(true);
      const response = await fetch('/api/send-notif', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: studentId,
          email: student.email,
          subject: `Message from your Tutor`,
          text: messageText,
          html: `<div style="font-family: sans-serif; padding: 30px; background: #f9fafb; border-radius: 20px;">
                  <h2 style="color: #6366f1;">New Message</h2>
                  <p style="font-size: 16px; color: #374151; line-height: 1.6;">${messageText}</p>
                 </div>`
        })
      });

      if (response.ok) {
        alert("Message sent!");
        setMessageText('');
        setMessageOpen(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSendingMessage(false);
    }
  };

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;
  if (!student) return <div className="app-empty">Student not found.</div>;

  const currentYear = student.assignedYear || student.level || student.year || 'Year 11';
  const currentCourse = student.assignedCourse || 'Advanced';
  let chapters = CURRICULUM_DATA[currentYear] || [];
  if (!Array.isArray(chapters)) chapters = chapters[currentCourse] || [];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'curriculum':
        return (
          <div style={styles.card} className="profile-card-mobile">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
              <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>ASSIGN CURRICULUM</div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#f8fafc', padding: '8px 16px', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b' }}>YEAR:</span>
                  <select value={currentYear} onChange={e => handleUpdateCurriculumSetting('assignedYear', e.target.value)} style={{ background: 'transparent', border: 0, fontWeight: 800, color: '#6366f1', cursor: 'pointer', outline: 'none' }}>
                    {Object.keys(CURRICULUM_DATA).map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                {(currentYear === 'Year 11' || currentYear === 'Year 12') && (
                  <>
                    <div style={{ width: '1px', height: '20px', background: '#e2e8f0' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b' }}>COURSE:</span>
                      <select value={currentCourse} onChange={e => handleUpdateCurriculumSetting('assignedCourse', e.target.value)} style={{ background: 'transparent', border: 0, fontWeight: 800, color: '#6366f1', cursor: 'pointer', outline: 'none' }}>
                        <option value="Standard">Standard</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Extension 1">Extension 1</option>
                        {currentYear === 'Year 12' && <option value="Extension 2">Extension 2</option>}
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
              {chapters.map(ch => (
                <div key={ch.id} onClick={() => handleToggleChapter(ch.id)} style={{ padding: '16px 20px', borderRadius: '16px', border: '2px solid', borderColor: assignedChapters.includes(ch.id) ? '#6366f1' : '#f1f5f9', background: assignedChapters.includes(ch.id) ? '#f5f3ff' : 'white', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', border: '2px solid', borderColor: assignedChapters.includes(ch.id) ? '#6366f1' : '#cbd5e1', background: assignedChapters.includes(ch.id) ? '#6366f1' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    {assignedChapters.includes(ch.id) && <Check size={14} />}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>{ch.title}</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{ch.modules} modules</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'schedule':
        return (
          <div style={styles.card} className="profile-card-mobile">
            <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '20px', textTransform: 'uppercase' }}>BOOK NEW SESSION</div>
            <div className="form-grid-mobile">
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem' }}>Date</label>
                <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', background: 'white' }}>
                  <Calendar size={18} /><input type="date" value={sessionForm.date} onChange={e => setSessionForm({...sessionForm, date: e.target.value})} style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem' }}>Focus Subject</label>
                <input type="text" value={sessionForm.focus} onChange={e => setSessionForm({...sessionForm, focus: e.target.value})} placeholder="e.g. Algebra" style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem' }}>Start Time</label>
                <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', background: 'white' }}>
                  <Clock size={18} /><input type="text" value={sessionForm.start} onChange={e => setSessionForm({...sessionForm, start: e.target.value})} placeholder="04:00 pm" style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem' }}>End Time</label>
                <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', background: 'white' }}>
                  <Clock size={18} /><input type="text" value={sessionForm.end} onChange={e => setSessionForm({...sessionForm, end: e.target.value})} placeholder="05:00 pm" style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
                </div>
              </div>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <div onClick={() => setSessionForm({...sessionForm, recurring: !sessionForm.recurring})} style={{ width: '24px', height: '24px', border: '2px solid', borderRadius: '6px', background: sessionForm.recurring ? '#6366f1' : 'white', borderColor: sessionForm.recurring ? '#6366f1' : '#cbd5e1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{sessionForm.recurring && <Check size={14} />}</div>
                <span style={{ fontWeight: 600 }}>Recurring Weekly</span>
              </label>
              <button onClick={handleBookSession} disabled={booking} className="app-button" style={{ background: '#1a1c2c', padding: '16px 40px', borderRadius: '16px', color: 'white', fontWeight: 800, border: 0 }}>{booking ? 'Booking...' : 'Finalize Session'}</button>
            </div>
          </div>
        );
      case 'challenge':
        return (
          <div style={styles.card} className="profile-card-mobile">
            <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '24px', textTransform: 'uppercase' }}>CHALLENGE HISTORY</div>
            {dailyStats.length === 0 ? (
              <div className="app-empty">No challenge history yet.</div>
            ) : (
              <div style={{ display: 'grid', gap: '12px' }}>
                {dailyStats.map(stat => (
                  <div key={stat.id} style={{ padding: '20px', borderRadius: '20px', border: '1px solid #f1f5f9', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}><Trophy size={20} /></div>
                      <div>
                        <div style={{ fontWeight: 800 }}>{stat.id} Challenge</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Score: {stat.score}/{stat.total} • Accuracy: {Math.round((stat.score/stat.total)*100)}%</div>
                      </div>
                    </div>
                    <button onClick={() => handleResetChallenge(stat.id)} style={{ padding: '8px 16px', borderRadius: '10px', background: '#fff1f2', color: '#f43f5e', border: 'none', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }}>Reset</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="student-detail-container">
      <div style={styles.card} className="profile-card-mobile">
        <div className="profile-header-flex">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={styles.backBtn} onClick={onBack}><ChevronLeft size={24} /></button>
            {isEditing ? (
              <input type="text" value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} style={{ fontSize: '1.5rem', fontWeight: 900, border: 'none', borderBottom: '2px solid #6366f1', outline: 'none' }} />
            ) : (
              <h1 className="student-name-title">{student.name || student.firstName || 'Student'}</h1>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#64748b', fontWeight: 600 }}>
              <span>{student.school || student.subject || 'N/A'}</span>
              <span className="page-pill" style={{ background: '#e0e7ff', color: '#6366f1' }}>{student.year || student.level}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {isEditing ? (
              <button onClick={handleUpdateProfile} className="app-button app-button--primary" style={{ borderRadius: '16px' }}><Save size={18} /> Save</button>
            ) : (
              <button onClick={() => setIsEditing(true)} className="app-button app-button--secondary" style={{ borderRadius: '16px' }}><Edit3 size={18} /> Edit</button>
            )}
          </div>
        </div>
      </div>

      <div className="stats-grid-mobile">
        <div style={styles.card}>
          <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '24px' }}>DASHBOARD PREVIEW</div>
          <div style={{ ...styles.visionBoard, backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.4)), url(${student.dreamImageUrl || 'https://images.unsplash.com/photo-1516534775068-ba3e84529519'})` }}>
            <button onClick={() => fileInputRef.current.click()} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(0,0,0,0.5)', border: 0, color: 'white', padding: '8px 16px', borderRadius: '12px', cursor: 'pointer' }}>Change</button>
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageUpload} />
          </div>
        </div>
        <div style={styles.card}>
          <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '24px' }}>ACADEMIC PROGRESS</div>
          <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontWeight: 800 }}>
              <span>Completion</span>
              <span style={{ color: '#6366f1' }}>{Math.round((assignedChapters.length / (chapters.length || 1)) * 100)}%</span>
            </div>
            <div style={{ height: '12px', background: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
              <div style={{ width: `${(assignedChapters.length / (chapters.length || 1)) * 100}%`, height: '100%', background: '#6366f1' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-tabs-mobile">
        <button onClick={() => setActiveTab('schedule')} className="tab-btn-mobile" style={{ ...styles.navBtn, ...(activeTab === 'schedule' ? styles.navBtnActive : {}) }}><Calendar size={18} /> Schedule</button>
        <button onClick={() => setActiveTab('curriculum')} className="tab-btn-mobile" style={{ ...styles.navBtn, ...(activeTab === 'curriculum' ? styles.navBtnActive : {}) }}><BookOpen size={18} /> Curriculum</button>
        <button onClick={() => setActiveTab('challenge')} className="tab-btn-mobile" style={{ ...styles.navBtn, ...(activeTab === 'challenge' ? styles.navBtnActive : {}) }}><Trophy size={18} /> Challenge</button>
        <button className="tab-btn-mobile" style={styles.navBtn}><MessageSquare size={18} /> Q&A</button>
      </div>

      {renderTabContent()}

      <AnimatePresence>
        {messageOpen && (
          <div className="app-modal" style={{ zIndex: 2000 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMessageOpen(false)} className="app-modal__backdrop" style={{ backdropFilter: 'blur(8px)' }} />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="app-panel app-modal__card" style={{ maxWidth: '500px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ margin: 0 }}>Message to {student.name}</h3>
                <button onClick={() => setMessageOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} /></button>
              </div>
              <textarea value={messageText} onChange={e => setMessageText(e.target.value)} placeholder="Type message..." style={{ width: '100%', height: '160px', padding: '20px', borderRadius: '20px', border: '1px solid #f1f5f9', outline: 'none', resize: 'none', marginBottom: '24px' }} />
              <button onClick={handleSendMessage} disabled={sendingMessage || !messageText.trim()} style={{ width: '100%', background: '#6366f1', color: '#fff', border: 'none', padding: '16px', borderRadius: '16px', fontWeight: 800, cursor: 'pointer' }}>{sendingMessage ? 'Sending...' : 'Send Message'}</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StudentDetail;
