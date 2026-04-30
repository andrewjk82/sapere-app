import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, Calendar, BookOpen, 
  MessageSquare, Trophy, 
  Mail, Phone, Check, Settings, Clock,
  Edit3, Save, Bell
} from 'lucide-react';
import { db } from '../firebase/config';
import { 
  doc, updateDoc, onSnapshot, collection, 
  addDoc, serverTimestamp 
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

  useEffect(() => {
    if (!studentId) return;

    const unsubUsers = onSnapshot(doc(db, 'users', studentId), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setStudent({ id: snap.id, ...data });
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
        const unsubStudents = onSnapshot(doc(db, 'students', studentId), (mSnap) => {
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
              assignedYear: mData.assignedYear || mData.level || mData.year || 'Year 11',
              assignedCourse: mData.assignedCourse || 'Advanced'
            });
          }
          setLoading(false);
        });
        return () => unsubStudents();
      }
    });

    return () => unsubUsers();
  }, [studentId]);

  const handleUpdateProfile = async () => {
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      const studentRef = doc(db, colName, studentId);
      const updateData = {
        ...editForm,
        year: editForm.level,
        school: editForm.subject
      };
      await updateDoc(studentRef, updateData);
      setIsEditing(false);
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleUpdateCurriculumSetting = async (field, value) => {
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      const studentRef = doc(db, colName, studentId);
      await updateDoc(studentRef, { [field]: value });
    } catch (error) {
      console.error("Error updating curriculum setting:", error);
    }
  };

  const handleToggleChapter = async (chapterId) => {
    const newChapters = assignedChapters.includes(chapterId)
      ? assignedChapters.filter(id => id !== chapterId)
      : [...assignedChapters, chapterId];
    
    setAssignedChapters(newChapters);
    try {
      const colName = student.source === 'manual' ? 'students' : 'users';
      const studentRef = doc(db, colName, studentId);
      await updateDoc(studentRef, { assignedChapters: newChapters });
    } catch (error) {
      console.error("Error updating chapters:", error);
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
      await addDoc(collection(db, 'sessions'), {
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
      });
      alert("Session booked!");
      setSessionForm(prev => ({ ...prev, focus: '' }));
    } catch (error) { console.error(error); } finally { setBooking(false); }
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
              <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                ASSIGN CURRICULUM
              </div>
              
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#f8fafc', padding: '8px 16px', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b' }}>YEAR:</span>
                  <select 
                    value={currentYear} 
                    onChange={e => handleUpdateCurriculumSetting('assignedYear', e.target.value)}
                    style={{ background: 'transparent', border: 0, fontWeight: 800, color: '#6366f1', cursor: 'pointer', outline: 'none', fontSize: '0.85rem' }}
                  >
                    {Object.keys(CURRICULUM_DATA).map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                
                {(currentYear === 'Year 11' || currentYear === 'Year 12') && (
                  <>
                    <div style={{ width: '1px', height: '20px', background: '#e2e8f0' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b' }}>COURSE:</span>
                      <select 
                        value={currentCourse} 
                        onChange={e => handleUpdateCurriculumSetting('assignedCourse', e.target.value)}
                        style={{ background: 'transparent', border: 0, fontWeight: 800, color: '#6366f1', cursor: 'pointer', outline: 'none', fontSize: '0.85rem' }}
                      >
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
                <div key={ch.id} onClick={() => handleToggleChapter(ch.id)} style={{ padding: '16px 20px', borderRadius: '16px', border: '2px solid', borderColor: assignedChapters.includes(ch.id) ? '#6366f1' : '#f1f5f9', background: assignedChapters.includes(ch.id) ? '#f5f3ff' : 'white', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', border: '2px solid', borderColor: assignedChapters.includes(ch.id) ? '#6366f1' : '#cbd5e1', background: assignedChapters.includes(ch.id) ? '#6366f1' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    {assignedChapters.includes(ch.id) && <Check size={14} />}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1a1c2c' }}>{ch.title}</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8' }}>{ch.modules} modules</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'schedule':
      default:
        return (
          <div style={styles.card} className="profile-card-mobile">
            <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', textTransform: 'uppercase' }}>BOOK NEW SESSION</div>
            <div className="form-grid-mobile">
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>Date</label>
                <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white' }}>
                  <Calendar size={18} /><input type="date" value={sessionForm.date} onChange={e => setSessionForm({...sessionForm, date: e.target.value})} style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>Focus Subject</label>
                <input type="text" value={sessionForm.focus} onChange={e => setSessionForm({...sessionForm, focus: e.target.value})} placeholder="e.g. Algebra" style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>Start Time</label>
                <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white' }}>
                  <Clock size={18} /><input type="text" value={sessionForm.start} onChange={e => setSessionForm({...sessionForm, start: e.target.value})} placeholder="04:00 pm" style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>End Time</label>
                <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white' }}>
                  <Clock size={18} /><input type="text" value={sessionForm.end} onChange={e => setSessionForm({...sessionForm, end: e.target.value})} placeholder="05:00 pm" style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
                </div>
              </div>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', justifyContent: 'space-between', alignItems: window.innerWidth < 768 ? 'flex-start' : 'center', gap: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <div onClick={() => setSessionForm({...sessionForm, recurring: !sessionForm.recurring})} style={{ width: '24px', height: '24px', border: '2px solid', borderRadius: '6px', background: sessionForm.recurring ? '#6366f1' : 'white', borderColor: sessionForm.recurring ? '#6366f1' : '#cbd5e1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{sessionForm.recurring && <Check size={14} />}</div>
                <span style={{ fontWeight: 600, color: '#1a1c2c' }}>Recurring Weekly</span>
              </label>
              <button onClick={handleBookSession} disabled={booking} className="app-button" style={{ background: '#1a1c2c', padding: '16px 40px', borderRadius: '16px', color: 'white', fontWeight: 800, border: 0, width: window.innerWidth < 768 ? '100%' : 'auto' }}>{booking ? 'Booking...' : 'Finalize Session'}</button>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="student-detail-container">
      {/* 1. Profile Header Card */}
      <div style={styles.card} className="profile-card-mobile">
        <div className="profile-header-flex">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={styles.backBtn} onClick={onBack}><ChevronLeft size={24} /></button>
            {isEditing ? (
              <input type="text" value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1a1c2c', border: 'none', borderBottom: '2px solid #6366f1', outline: 'none', background: 'transparent' }} />
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

          <button 
            onClick={() => isEditing ? handleUpdateProfile() : setIsEditing(true)} 
            className={`app-button ${isEditing ? 'app-button--primary' : 'app-button--secondary'} mobile-edit-btn`}
            style={{ borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            {isEditing ? <><Save size={18} /> Save</> : <><Edit3 size={18} /> Edit Profile</>}
          </button>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.05)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}><Mail size={16} style={{ color: '#6366f1' }} /> {student.email}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}><Phone size={16} style={{ color: '#6366f1' }} /> {student.phone}</div>
          </div>
          
          <button 
            onClick={async () => {
              if (!window.confirm(`Send an instant test reminder to ${student.name || 'this student'}?`)) return;
              try {
                const response = await fetch('/api/send-notif', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    studentId: studentId,
                    email: student.email,
                    subject: 'Sapere Aude - Instant Test Notification',
                    text: 'This is a real-time test notification.',
                    html: '<b>This is a real-time test notification</b> from your tutor.'
                  })
                });
                
                if (response.ok) {
                  const data = await response.json();
                  alert(`Success! Email sent. Push tokens found: ${data.tokensFound || 0}. If 0, ask the student to refresh and allow notifications.`);
                } else {
                  const contentType = response.headers.get("content-type");
                  if (contentType && contentType.indexOf("application/json") !== -1) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Server responded with error');
                  } else {
                    const textError = await response.text();
                    throw new Error(textError.substring(0, 100) || 'Server error occurred');
                  }
                }
              } catch (e) {
                alert('Failed to send instant test: ' + e.message);
              }
            }}
            className="app-button app-button--secondary"
            style={{ padding: '8px 16px', fontSize: '0.8rem', borderRadius: '12px', background: '#f5f3ff', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.2)' }}
          >
            <Bell size={14} style={{ marginRight: '6px' }} />
            Send Test Reminder
          </button>
        </div>
      </div>

      {/* 2. DASHBOARD PREVIEW & ACADEMIC PROGRESS */}
      <div className="stats-grid-mobile">
        <div style={{ ...styles.card }} className="dashboard-preview-card">
          <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '24px' }}>DASHBOARD PREVIEW</div>
          <div style={{ ...styles.visionBoard, backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.4)), url(${student.dreamImageUrl || 'https://images.unsplash.com/photo-1516534775068-ba3e84529519'})` }}>
            <button onClick={() => fileInputRef.current.click()} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(0,0,0,0.5)', border: 0, color: 'white', padding: '8px 16px', borderRadius: '12px', cursor: 'pointer', zIndex: 10, fontSize: '0.8rem' }}>Change</button>
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageUpload} />
          </div>
        </div>
        
        <div style={{ ...styles.card }}>
          <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '24px' }}>ACADEMIC PROGRESS</div>
          <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontWeight: 800 }}>
              <span style={{ fontSize: '0.9rem' }}>Curriculum Completion</span>
              <span style={{ color: '#6366f1', fontSize: '1.1rem' }}>{Math.round((assignedChapters.length / (chapters.length || 1)) * 100)}%</span>
            </div>
            <div style={{ height: '12px', background: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
              <div style={{ width: `${(assignedChapters.length / (chapters.length || 1)) * 100}%`, height: '100%', background: '#6366f1' }}></div>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Based on {assignedChapters.length} assigned chapters out of {chapters.length} available.</p>
          </div>
        </div>
      </div>

      {/* 3. Navigation Tabs */}
      <div className="nav-tabs-mobile">
        <button onClick={() => setActiveTab('schedule')} className="tab-btn-mobile" style={{ ...styles.navBtn, ...(activeTab === 'schedule' ? styles.navBtnActive : {}) }}><Calendar size={18} /> Schedule</button>
        <button onClick={() => setActiveTab('curriculum')} className="tab-btn-mobile" style={{ ...styles.navBtn, ...(activeTab === 'curriculum' ? styles.navBtnActive : {}) }}><BookOpen size={18} /> Curriculum</button>
        <button className="tab-btn-mobile" style={styles.navBtn}><Trophy size={18} /> Challenge</button>
        <button className="tab-btn-mobile" style={styles.navBtn}><MessageSquare size={18} /> Q&A</button>
      </div>

      {/* 4. Tab Content */}
      {renderTabContent()}
    </motion.div>
  );
};

export default StudentDetail;
