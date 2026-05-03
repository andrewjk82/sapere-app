import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIME_OPTIONS } from '../constants/timeOptions';
import { 
  ChevronLeft, Calendar, BookOpen, 
  MessageSquare, Trophy, 
  Mail, Phone, Check, Clock,
  Edit3, Save, Bell, X, MapPin
} from 'lucide-react';
import { db } from '../firebase/config';
import { 
  doc, updateDoc, onSnapshot, collection, 
  addDoc, serverTimestamp, deleteDoc, increment
} from 'firebase/firestore';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import './student-detail.css';

const StudentDetail = ({ studentId, onBack }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('curriculum');
  const [assignedChapters, setAssignedChapters] = useState([]);
  const [booking, setBooking] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [dailyStats, setDailyStats] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const [sessionForm, setSessionForm] = useState({
    date: new Date().toISOString().split('T')[0],
    focus: '',
    start: '10:00 AM',
    end: '11:30 AM',
    recurring: false
  });

  const [editForm, setEditForm] = useState({
    name: '', email: '', phone: '', level: '', subject: '',
    school: '', year: '', dreamJob: '', address: '',
    assignedYear: 'Year 11', assignedCourse: 'Advanced',
    dailyQuestionCount: 10,
    calculationEnabled: true
  });

  const styles = {
    card: { padding: '32px', borderRadius: '32px', background: 'white', border: '1px solid rgba(167, 139, 250, 0.15)', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' },
    backBtn: { width: '48px', height: '48px', borderRadius: '16px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
    navBtn: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '20px', background: 'white', border: '2px solid rgba(167, 139, 250, 0.1)', borderRadius: '20px', color: '#64748b', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s ease', flex: 1 },
    navBtnActive: { borderColor: '#6366f1', color: '#6366f1', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.1)' },
    visionBoard: { borderRadius: '24px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '24px', color: 'white', overflow: 'hidden', flex: 1, minHeight: '200px' }
  };

  useEffect(() => {
    if (!studentId) return;
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
          school: data.school || '',
          year: data.year || '',
          dreamJob: data.dreamJob || '',
          address: data.address || '',
          assignedYear: data.assignedYear || data.level || data.year || 'Year 11',
          assignedCourse: data.assignedCourse || 'Advanced',
          dailyQuestionCount: data.dailyQuestionCount || 10,
          calculationEnabled: data.calculationEnabled !== false
        });
        setLoading(false);
      } else {
        const unsubManual = onSnapshot(doc(db, 'students', studentId), (mSnap) => {
          if (mSnap.exists()) {
            const mData = mSnap.data();
            setStudent({ id: mSnap.id, source: 'manual', ...mData });
            setAssignedChapters(mData.assignedChapters || []);
            setEditForm({
              name: mData.name || '', email: mData.email || '', phone: mData.phone || '',
              level: mData.level || mData.year || '', subject: mData.subject || mData.school || '',
              school: mData.school || '', year: mData.year || '',
              dreamJob: mData.dreamJob || '', address: mData.address || '',
              assignedYear: mData.assignedYear || mData.level || mData.year || 'Year 11',
              assignedCourse: mData.assignedCourse || 'Advanced',
              dailyQuestionCount: mData.dailyQuestionCount || 10,
              calculationEnabled: mData.calculationEnabled !== false
            });
          }
          setLoading(false);
        });
        return () => unsubManual();
      }
    });
    return () => unsub();
  }, [studentId]);

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
        alert("Message sent successfully!");
        setMessageText('');
        setMessageOpen(false);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setSendingMessage(false);
    }
  };

  useEffect(() => {
    if (!studentId || !student?.id) return;
    const colName = student.source === 'manual' ? 'students' : 'users';
    return onSnapshot(collection(db, colName, studentId, 'daily_stats'), (snap) => {
      const stats = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      stats.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      setDailyStats(stats);
    });
  }, [studentId, student?.source, student?.id]);

  const handleUpdateProfile = async () => {
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, colName, studentId), { ...editForm, updatedAt: serverTimestamp() });
      setIsEditModalOpen(false);
      alert("Profile updated successfully!");
    } catch (e) { console.error(e); }
  };

  const handleUpdateCurriculumSetting = async (field, value) => {
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, colName, studentId), { [field]: value });
    } catch (e) { console.error(e); }
  };

  const handleToggleChapter = async (chapterId) => {
    const newChapters = assignedChapters.includes(chapterId)
      ? assignedChapters.filter(id => id !== chapterId)
      : [...assignedChapters, chapterId];
    setAssignedChapters(newChapters);
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, colName, studentId), { assignedChapters: newChapters });
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
        const url = canvas.toDataURL('image/jpeg', 0.8);
        try {
          const colName = student.source === 'manual' ? 'students' : 'users';
          await updateDoc(doc(db, colName, studentId), { dreamImageUrl: url });
        } catch (err) { console.error(err); } finally { setUploading(false); }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleBookSession = async () => {
    if (!sessionForm.focus || !sessionForm.date) return alert("Please fill in subject and date.");
    try {
      setBooking(true);
      const session = {
        studentId,
        studentName: student.name || student.firstName || 'Student',
        studentEmail: student.email || '',
        date: sessionForm.date,
        subject: sessionForm.focus,
        startTime: sessionForm.start,
        endTime: sessionForm.end,
        recurring: sessionForm.recurring,
        status: 'Scheduled',
        createdAt: serverTimestamp()
      };
      await addDoc(collection(db, 'sessions'), session);
      alert("Session booked successfully!");
      setIsScheduleModalOpen(false);
      setSessionForm(prev => ({ ...prev, focus: '' }));
    } catch (e) { 
      console.error(e); 
      alert("Booking failed.");
    } finally { setBooking(false); }
  };

  const handleResetChallenge = async (stat) => {
    if (!confirm("Are you sure you want to reset this challenge? This will subtract XP and challenge count.")) return;
    
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      const userRef = doc(db, colName, studentId);
      
      // Subtract XP and challenge count
      await updateDoc(userRef, {
        totalXP: increment(-(stat.score * 10)),
        challengesCompleted: increment(-1)
      });

      // Delete the specific daily_stat record
      const statRef = doc(db, colName, studentId, 'daily_stats', stat.id);
      await deleteDoc(statRef);
      
      alert("Challenge reset and XP updated.");
    } catch (err) {
      console.error("Reset error:", err);
      alert("Failed to reset challenge.");
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={styles.card} className="profile-card-mobile">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
                <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>ASSIGN CURRICULUM</div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#f8fafc', padding: '8px 16px', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800 }}>YEAR:</span>
                  <span style={{ fontWeight: 800, color: '#6366f1' }}>{currentYear}</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {chapters.map(ch => (
                  <div key={ch.id} onClick={() => handleToggleChapter(ch.id)} style={{ padding: '16px 20px', borderRadius: '16px', border: '2px solid', borderColor: assignedChapters.includes(ch.id) ? '#6366f1' : '#f1f5f9', background: assignedChapters.includes(ch.id) ? '#f5f3ff' : 'white', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: assignedChapters.includes(ch.id) ? '#6366f1' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                      {assignedChapters.includes(ch.id) && <Check size={14} />}
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>{ch.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.card} className="profile-card-mobile">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
                <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>BASIC CALCULATION</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div 
                    onClick={() => handleUpdateCurriculumSetting('calculationEnabled', (student?.calculationEnabled ?? true) === false)}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      cursor: 'pointer',
                      padding: '8px 16px',
                      borderRadius: '16px',
                      background: (student?.calculationEnabled ?? true) !== false ? '#f5f3ff' : '#f8fafc',
                      border: `2px solid ${(student?.calculationEnabled ?? true) !== false ? '#6366f1' : '#e2e8f0'}`,
                      transition: 'all 0.2s',
                      boxShadow: '0 4px 12px rgba(99,102,241,0.1)'
                    }}
                  >
                    <div style={{ 
                      width: '36px', 
                      height: '20px', 
                      background: (student?.calculationEnabled ?? true) !== false ? '#6366f1' : '#cbd5e1', 
                      borderRadius: '20px', 
                      position: 'relative',
                      transition: 'all 0.2s'
                    }}>
                      <div style={{ 
                        width: '14px', 
                        height: '14px', 
                        background: 'white', 
                        borderRadius: '50%', 
                        position: 'absolute', 
                        top: '3px', 
                        left: (student?.calculationEnabled ?? true) !== false ? '19px' : '3px',
                        transition: 'all 0.2s'
                      }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 900, color: (student?.calculationEnabled ?? true) !== false ? '#6366f1' : '#64748b' }}>
                      {(student?.calculationEnabled ?? true) !== false ? 'ENABLED' : 'DISABLED'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fffbeb', padding: '10px 20px', borderRadius: '30px', border: '1px solid #fef3c7', minWidth: '140px', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#d97706', whiteSpace: 'nowrap' }}>COUNT:</span>
                  <input 
                    type="number" 
                    min="5" 
                    max="50"
                    value={student.calcQuestionCount || 10} 
                    onChange={e => handleUpdateCurriculumSetting('calcQuestionCount', parseInt(e.target.value) || 10)}
                    style={{ width: '60px', background: 'transparent', border: 0, fontWeight: 900, color: '#92400e', outline: 'none', textAlign: 'center', fontSize: '1.1rem', padding: 0 }}
                  />
                </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {(CURRICULUM_DATA['Basic Calculation'] || []).map(stage => {
                  // Determine if all topics in stage are assigned
                  const stageTopicIds = stage.topics.map(t => t.id);
                  const isFullyAssigned = stageTopicIds.every(id => assignedChapters.includes(id));
                  const isPartiallyAssigned = !isFullyAssigned && stageTopicIds.some(id => assignedChapters.includes(id));

                  const toggleStage = () => {
                    let newChapters = [...assignedChapters];
                    if (isFullyAssigned) {
                      newChapters = newChapters.filter(id => !stageTopicIds.includes(id));
                    } else {
                      stageTopicIds.forEach(id => {
                        if (!newChapters.includes(id)) newChapters.push(id);
                      });
                    }
                    setAssignedChapters(newChapters);
                    const colName = student.source === 'manual' ? 'students' : 'users';
                    updateDoc(doc(db, colName, studentId), { assignedChapters: newChapters }).catch(console.error);
                  };

                  return (
                    <div key={stage.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px', borderRadius: '16px', border: '2px solid', borderColor: isFullyAssigned ? '#d97706' : isPartiallyAssigned ? '#fcd34d' : '#f1f5f9', background: isFullyAssigned ? '#fffbeb' : 'white' }}>
                      <div onClick={toggleStage} style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: isFullyAssigned ? '#d97706' : isPartiallyAssigned ? '#fcd34d' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                          {(isFullyAssigned || isPartiallyAssigned) && <Check size={14} />}
                        </div>
                        <div style={{ fontWeight: 800, fontSize: '1rem', color: '#92400e' }}>{stage.title}</div>
                      </div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px', paddingLeft: '40px', marginTop: '8px' }}>
                        {stage.topics.map(topic => (
                          <div key={topic.id} onClick={() => handleToggleChapter(topic.id)} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', opacity: assignedChapters.includes(topic.id) ? 1 : 0.5 }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: '2px solid #d97706', background: assignedChapters.includes(topic.id) ? '#d97706' : 'transparent' }} />
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#78350f' }}>{topic.group}: {topic.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case 'challenge':
        return (
          <div style={styles.card} className="profile-card-mobile">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
              <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>DAILY QUESTION LIMIT</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f5f3ff', padding: '10px 20px', borderRadius: '30px', border: '1px solid rgba(99, 102, 241, 0.2)', minWidth: '140px', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6366f1', whiteSpace: 'nowrap' }}>COUNT:</span>
                <input 
                  type="number" 
                  min="5" 
                  max="50"
                  value={student.dailyQuestionCount || 10} 
                  onChange={e => handleUpdateCurriculumSetting('dailyQuestionCount', parseInt(e.target.value) || 10)}
                  style={{ width: '60px', background: 'transparent', border: 0, fontWeight: 900, color: '#1e1b4b', outline: 'none', textAlign: 'center', fontSize: '1.1rem', padding: 0 }}
                />
              </div>
            </div>

            <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '24px' }}>CHALLENGE HISTORY</div>
            <div style={{ display: 'grid', gap: '12px' }}>
              {dailyStats.length > 0 ? dailyStats.map(stat => (
                <div key={stat.id} onClick={() => setSelectedChallenge(stat)} style={{ padding: '20px', borderRadius: '20px', border: '1px solid #f1f5f9', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1' }}><Trophy size={20} /></div>
                    <div>
                      <div style={{ fontWeight: 800 }}>{stat.id}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Score: {stat.score}/{stat.total}</div>
                    </div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleResetChallenge(stat); }} style={{ padding: '8px 16px', borderRadius: '10px', background: '#fff1f2', color: '#f43f5e', border: 0, fontWeight: 700, cursor: 'pointer' }}>Reset</button>
                </div>
              )) : (
                <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', fontWeight: 600 }}>No challenge history yet.</div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="student-detail-container">
      {/* 1. Header Card */}
      <div style={styles.card} className="profile-card-mobile">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <button style={styles.backBtn} onClick={onBack}><ChevronLeft size={24} /></button>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>{student.name || 'Student'}</h1>
          <span className="page-pill" style={{ background: '#e0e7ff', color: '#6366f1' }}>{student.year || student.level}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '20px', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', gap: '8px' }}><Mail size={16} /> {student.email}</div>
            <div style={{ display: 'flex', gap: '8px' }}><Phone size={16} /> {student.phone}</div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setMessageOpen(true)} className="app-button" style={{ padding: '8px 16px', borderRadius: '12px', background: '#f5f3ff', color: '#6366f1', fontWeight: 700, border: '1px solid #e0e7ff' }}>Message</button>
            <button onClick={() => setIsEditModalOpen(true)} className="app-button" style={{ padding: '8px 16px', borderRadius: '12px', background: '#6366f1', color: 'white', fontWeight: 700, border: 0 }}>Edit</button>
          </div>
        </div>
      </div>

      {/* 2. Dashboard & Progress */}
      <div className="stats-grid-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '24px 0' }}>
        <div style={styles.card} className="dashboard-preview-card">
          <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '16px' }}>DASHBOARD PREVIEW</div>
          <div style={{ ...styles.visionBoard, backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.4)), url(${student.dreamImageUrl || 'https://images.unsplash.com/photo-1516534775068-ba3e84529519'})`, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <div style={{ fontWeight: 900, fontSize: '1.2rem' }}>{student.dreamJob || 'Dream Career'}</div>
            <button onClick={() => fileInputRef.current.click()} style={{ position: 'absolute', top: 12, right: 12, padding: '4px 8px', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', border: 0, color: 'white', fontSize: '0.7rem', cursor: 'pointer' }}>Change Image</button>
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageUpload} />
          </div>
        </div>
        <div style={styles.card}>
          <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '16px' }}>ACADEMIC PROGRESS</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {(() => {
              const currentChapterIds = chapters.map(ch => ch.id);
              const assignedInCurriculum = assignedChapters.filter(id => currentChapterIds.includes(id));
              const progressPct = Math.round((assignedInCurriculum.length / (chapters.length || 1)) * 100);
              const clampedPct = Math.min(progressPct, 100);
              
              return (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: 800 }}>
                    <span>Curriculum</span>
                    <span style={{ color: '#6366f1' }}>{clampedPct}%</span>
                  </div>
                  <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${clampedPct}%`, height: '100%', background: '#6366f1' }}></div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>

      {/* 3. Navigation */}
      <div className="nav-tabs-mobile" style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <button onClick={() => setActiveTab('curriculum')} style={{ ...styles.navBtn, ...(activeTab === 'curriculum' ? styles.navBtnActive : {}) }}><BookOpen size={18} /> Curriculum</button>
        <button onClick={() => setActiveTab('challenge')} style={{ ...styles.navBtn, ...(activeTab === 'challenge' ? styles.navBtnActive : {}) }}><Trophy size={18} /> Challenge</button>
        <button style={styles.navBtn}><MessageSquare size={18} /> Q&A</button>
        <button onClick={() => setIsScheduleModalOpen(true)} style={styles.navBtn}><Calendar size={18} /> Add Schedule</button>
      </div>

      {/* 4. Content */}
      {renderTabContent()}

      {/* 5. Modals */}
      <AnimatePresence>
        {messageOpen && (
          <div className="app-modal" style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMessageOpen(false)} 
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }} 
            />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ position: 'relative', background: 'white', padding: '32px', borderRadius: '32px', width: '100%', maxWidth: '500px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontWeight: 900, margin: 0, fontSize: '1.2rem' }}>Message to {student.name}</h3>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Sent via Email & Push Notification</p>
                </div>
                <button onClick={() => setMessageOpen(false)} style={{ background: '#f1f5f9', border: 'none', borderRadius: '10px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}><X size={18} /></button>
              </div>
              <textarea value={messageText} onChange={e => setMessageText(e.target.value)} placeholder="Type your message here..." style={{ width: '100%', height: '160px', padding: '20px', borderRadius: '20px', border: '2px solid #f1f5f9', marginBottom: '24px', outline: 'none', fontSize: '1rem', resize: 'none' }} />
              <button 
                onClick={handleSendMessage} 
                disabled={sendingMessage || !messageText.trim()} 
                style={{ width: '100%', padding: '16px', borderRadius: '16px', background: '#6366f1', color: 'white', fontWeight: 800, border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                {sendingMessage ? 'Sending...' : <><Check size={18} /> Send Message</>}
              </button>
            </motion.div>
          </div>
        )}

        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="app-modal" style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div onClick={() => setIsEditModalOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ position: 'relative', background: 'white', padding: '40px', borderRadius: '32px', width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h2 style={{ fontWeight: 900, margin: 0, fontSize: '1.5rem' }}>Edit Student Profile</h2>
                <button onClick={() => setIsEditModalOpen(false)} style={{ background: '#f1f5f9', border: 'none', borderRadius: '10px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}><X size={20} /></button>
              </div>
              
              <div style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.8rem', color: '#64748b' }}>Full Name</label>
                    <input type="text" value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', fontWeight: 700 }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.8rem', color: '#64748b' }}>Phone</label>
                    <input type="text" value={editForm.phone} onChange={e => setEditForm({...editForm, phone: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', fontWeight: 700 }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.8rem', color: '#64748b' }}>School / Institution</label>
                  <input type="text" value={editForm.school} onChange={e => setEditForm({...editForm, school: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', fontWeight: 700 }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.8rem', color: '#64748b' }}>Assigned Year</label>
                    <select value={editForm.assignedYear} onChange={e => setEditForm({...editForm, assignedYear: e.target.value})} style={{ width: '100%', padding: '18px', borderRadius: '14px', border: '1px solid #e2e8f0', fontWeight: 700, background: 'white', cursor: 'pointer' }}>
                      {Object.keys(CURRICULUM_DATA).map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.8rem', color: '#64748b' }}>Course Level</label>
                    <select value={editForm.assignedCourse} onChange={e => setEditForm({...editForm, assignedCourse: e.target.value})} style={{ width: '100%', padding: '18px', borderRadius: '14px', border: '1px solid #e2e8f0', fontWeight: 700, background: 'white', cursor: 'pointer' }}>
                      <option value="N/A">N/A</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Standard">Standard</option>
                      <option value="Extension 1">Extension 1</option>
                      <option value="Extension 2">Extension 2</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '12px', fontWeight: 800, fontSize: '0.8rem', color: '#64748b' }}>Enrolled Subjects</label>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    {['Maths', 'English'].map(subj => {
                      const isSelected = (editForm.subject || '').includes(subj);
                      return (
                        <div 
                          key={subj}
                          onClick={() => {
                            let current = (editForm.subject || '').split(',').map(s => s.trim()).filter(s => s);
                            if (isSelected) {
                              current = current.filter(s => s !== subj);
                            } else {
                              current.push(subj);
                            }
                            setEditForm({ ...editForm, subject: current.join(', ') });
                          }}
                          style={{ 
                            flex: 1,
                            padding: '12px',
                            borderRadius: '12px',
                            border: '2px solid',
                            borderColor: isSelected ? '#6366f1' : '#e2e8f0',
                            background: isSelected ? '#f5f3ff' : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: '2px solid', borderColor: isSelected ? '#6366f1' : '#cbd5e1', background: isSelected ? '#6366f1' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            {isSelected && <Check size={12} />}
                          </div>
                          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: isSelected ? '#6366f1' : '#475569' }}>{subj}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.8rem', color: '#64748b' }}>Daily Challenge Questions</label>
                  <input type="number" min="5" max="50" value={editForm.dailyQuestionCount} onChange={e => setEditForm({...editForm, dailyQuestionCount: parseInt(e.target.value) || 10})} style={{ width: '100%', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', fontWeight: 700 }} placeholder="Default: 10" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.8rem', color: '#64748b' }}>Dream Career / Goal</label>
                  <input type="text" value={editForm.dreamJob} onChange={e => setEditForm({...editForm, dreamJob: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', fontWeight: 700 }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.8rem', color: '#64748b' }}>Address</label>
                  <textarea value={editForm.address} onChange={e => setEditForm({...editForm, address: e.target.value})} style={{ width: '100%', height: '80px', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', fontWeight: 700, resize: 'none' }} />
                </div>
                <div style={{ padding: '16px', borderRadius: '16px', background: '#f5f3ff', border: '1px solid #e0e7ff', marginBottom: '8px' }}>
                  <div 
                    onClick={() => setEditForm({ ...editForm, calculationEnabled: !editForm.calculationEnabled })}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                  >
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e1b4b' }}>Calculation Practice</div>
                      <div style={{ fontSize: '0.75rem', color: '#6366f1', fontWeight: 600 }}>Enable arithmetic module</div>
                    </div>
                    <div style={{ 
                      width: '44px', 
                      height: '24px', 
                      background: editForm.calculationEnabled ? '#6366f1' : '#cbd5e1', 
                      borderRadius: '20px', 
                      position: 'relative',
                      transition: 'all 0.2s'
                    }}>
                      <div style={{ 
                        width: '20px', 
                        height: '20px', 
                        background: 'white', 
                        borderRadius: '50%', 
                        position: 'absolute', 
                        top: '2px', 
                        left: editForm.calculationEnabled ? '22px' : '2px',
                        transition: 'all 0.2s'
                      }} />
                    </div>
                  </div>
                </div>
                <button onClick={handleUpdateProfile} style={{ width: '100%', padding: '20px', borderRadius: '20px', background: '#6366f1', color: 'white', border: 0, fontWeight: 900, fontSize: '1.1rem', cursor: 'pointer', marginTop: '12px' }}>Save All Changes</button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Schedule Modal */}
        {isScheduleModalOpen && (
          <div className="app-modal" style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div onClick={() => setIsScheduleModalOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ position: 'relative', background: 'white', borderRadius: '32px', width: '100%', maxWidth: '500px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}>
              {/* Purple Header */}
              <div style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', padding: '32px', color: 'white', position: 'relative' }}>
                <h2 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 900 }}>Schedule Lesson</h2>
                <p style={{ margin: '8px 0 0', opacity: 0.9, fontWeight: 500 }}>Create a new session for a student</p>
                <button onClick={() => setIsScheduleModalOpen(false)} style={{ position: 'absolute', top: 32, right: 32, background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}><X size={20} /></button>
              </div>

              <div style={{ padding: '32px', display: 'grid', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>STUDENT</label>
                  <div style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: 700, color: '#1e293b' }}>{student.name || 'Student'}</div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>SUBJECT</label>
                  <input type="text" value={sessionForm.focus} onChange={e => setSessionForm({...sessionForm, focus: e.target.value})} placeholder="e.g. Mathematics" style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', fontWeight: 700, outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>DATE</label>
                  <input type="date" value={sessionForm.date} onChange={e => setSessionForm({...sessionForm, date: e.target.value})} style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', fontWeight: 700, outline: 'none' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>START TIME</label>
                    <select 
                      value={sessionForm.start} 
                      onChange={e => setSessionForm({...sessionForm, start: e.target.value})} 
                      style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', background: 'white', fontWeight: 700, outline: 'none', cursor: 'pointer', appearance: 'none' }}
                    >
                      {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 800, fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>END TIME</label>
                    <select 
                      value={sessionForm.end} 
                      onChange={e => setSessionForm({...sessionForm, end: e.target.value})} 
                      style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', background: 'white', fontWeight: 700, outline: 'none', cursor: 'pointer', appearance: 'none' }}
                    >
                      {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={sessionForm.recurring} onChange={e => setSessionForm({...sessionForm, recurring: e.target.checked})} style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                  <span style={{ fontWeight: 700, color: '#475569' }}>Recurring Weekly</span>
                </label>

                <button onClick={handleBookSession} disabled={booking} style={{ width: '100%', padding: '20px', borderRadius: '20px', background: 'linear-gradient(to right, #6366f1, #818cf8)', color: 'white', border: 0, fontWeight: 900, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)', marginTop: '8px' }}>{booking ? 'Creating...' : 'Create Session'}</button>
              </div>
            </motion.div>
          </div>
        )}

        {selectedChallenge && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedChallenge(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ position: 'relative', width: '100%', maxWidth: '700px', maxHeight: '85vh', backgroundColor: '#fff', borderRadius: '24px', overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h2 style={{ margin: '0 0 4px', fontSize: '1.5rem', fontWeight: 900 }}>Challenge Details</h2>
                  <p style={{ margin: 0, color: '#64748b', fontWeight: 600 }}>{selectedChallenge.id} • Score: {selectedChallenge.score}/{selectedChallenge.total}</p>
                </div>
                <button onClick={() => setSelectedChallenge(null)} style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
                  <X size={20} />
                </button>
              </div>

              {selectedChallenge.questions ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {selectedChallenge.questions.map((q, idx) => {
                    const userAnswer = selectedChallenge.userAnswers ? selectedChallenge.userAnswers[idx] : null;
                    const isCorrect = userAnswer === q.answer;
                    return (
                      <div key={idx} style={{ padding: '20px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontWeight: 800, marginBottom: '16px', color: '#1e293b', fontSize: '1.05rem', lineHeight: 1.5 }}>
                          {idx + 1}. {q.text}
                        </div>
                        <div style={{ display: 'grid', gap: '8px' }}>
                          {q.options.map((opt, i) => {
                            let bg = 'white';
                            let border = '1px solid #cbd5e1';
                            let color = '#475569';
                            if (opt === q.answer) {
                              bg = '#dcfce7';
                              border = '1px solid #22c55e';
                              color = '#166534';
                            } else if (opt === userAnswer && !isCorrect) {
                              bg = '#fee2e2';
                              border = '1px solid #ef4444';
                              color = '#991b1b';
                            }
                            return (
                              <div key={i} style={{ padding: '12px 16px', borderRadius: '12px', background: bg, border: border, color: color, fontSize: '0.95rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>{opt}</span>
                                {opt === q.answer && <Check size={18} style={{ color: '#166534' }} />}
                                {opt === userAnswer && !isCorrect && <X size={18} style={{ color: '#991b1b' }} />}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
                  <Trophy size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>Detailed history not available.</p>
                  <p style={{ margin: '8px 0 0', fontSize: '0.9rem' }}>This challenge was completed before detailed tracking was enabled.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StudentDetail;
