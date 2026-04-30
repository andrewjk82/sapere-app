import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus, MoreVertical, Mail, BookOpen } from 'lucide-react';
import { studentService } from '../services/studentService';
import AvatarPickerModal from './AvatarPickerModal';
import StudentProfileModal from './StudentProfileModal';

const StudentList = ({ students, onAddStudent, onSelectStudent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [activeStudent, setActiveStudent] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileStudent, setProfileStudent] = useState(null);
  
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Students</h2>
          <p>Manage active learners, keep records tidy, and stay on top of progress.</p>
        </div>
        <button 
          onClick={onAddStudent}
          className="app-button app-button--primary"
        >
          <Plus size={20} />
          Add Student
        </button>
      </div>

      <div className="app-page__actions">
        <div className="app-input">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search by name or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="app-button app-button--secondary">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <div className="student-list-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => {
            const isMenuOpen = activeMenuId === student.id;
            const studentAvatar = student.avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(student.name || student.id)}`;
            
            return (
              <motion.div 
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="app-panel student-card"
                style={{ position: 'relative' }}
              >
                <div className="student-card__top">
                  <div className="student-card__main">
                    <div
                      className="student-card__avatar"
                      style={{ 
                        width: '70px', 
                        height: '70px', 
                        borderRadius: '18px', 
                        overflow: 'hidden', 
                        background: '#f8fafc',
                        border: '1px solid rgba(0,0,0,0.05)'
                      }}
                    >
                      <img 
                        src={studentAvatar} 
                        alt={student.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e1b4b', margin: 0 }}>{student.name}</h3>
                        <span className={`status-badge status-badge--sm ${
                          student.status === 'Active' ? 'status-badge--active' : 'status-badge--inactive'
                        }`} style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                          {student.status || 'Active'}
                        </span>
                      </div>
                      <p className="student-card__meta" style={{ marginBottom: '10px', fontSize: '0.85rem' }}>{student.level} • {student.school || student.subject}</p>
                      
                      <div className="student-card__progress-wrapper" style={{ 
                        background: 'rgba(99, 102, 241, 0.05)', 
                        padding: '6px 12px', 
                        borderRadius: '10px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        border: '1px solid rgba(99, 102, 241, 0.1)'
                      }}>
                        <div className="student-card__progress-track" style={{ flex: 1, height: '6px', background: 'rgba(0,0,0,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div className="student-card__progress-fill" style={{ width: '54%', height: '100%', background: '#a78bfa', borderRadius: '3px' }}></div>
                        </div>
                        <span style={{ fontWeight: 800, color: '#475569', fontSize: '0.8rem' }}>54%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ position: 'relative' }}>
                    <button 
                      className="app-icon-button" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenuId(activeMenuId === student.id ? null : student.id);
                      }}
                      style={{ padding: '8px', borderRadius: '12px' }}
                    >
                      <MoreVertical size={20} />
                    </button>

                    <AnimatePresence>
                      {isMenuOpen && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          style={{
                            position: 'absolute', top: '100%', right: 0, width: '140px',
                            background: 'white', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            border: '1px solid #f1f5f9', zIndex: 10, padding: '6px', marginTop: '8px'
                          }}
                        >
                          <button 
                            onClick={() => { onSelectStudent(student.id); setActiveMenuId(null); }}
                            style={{ width: '100%', textAlign: 'left', padding: '10px 14px', background: 'none', border: 'none', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, color: '#334155', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                          >
                            Profile
                          </button>
                          <button 
                            onClick={async () => {
                              if (window.confirm('Delete this student?')) {
                                await studentService.deleteStudent(student.id);
                              }
                              setActiveMenuId(null);
                            }}
                            style={{ width: '100%', textAlign: 'left', padding: '10px 14px', background: 'none', border: 'none', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, color: '#f43f5e', cursor: 'pointer' }}
                          >
                            Delete
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <div className="student-card__actions" style={{ borderTop: '1px solid #f8fafc', paddingTop: '16px', marginTop: '4px' }}>
                  <div className="student-card__info" style={{ fontSize: '0.8rem' }}>
                    <BookOpen size={14} />
                    <span>{student.lessons || 0} lessons completed</span>
                  </div>
                  <div className="student-card__info" style={{ fontSize: '0.8rem' }}>
                    <Mail size={14} />
                    <span>Contact student</span>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="app-empty" style={{ gridColumn: '1 / -1' }}>
            {searchTerm ? "No students match your search." : "No students added yet. Click 'Add Student' to get started."}
          </div>
        )}
      </div>

      <StudentProfileModal 
        open={profileOpen}
        student={profileStudent}
        onClose={() => {
          setProfileOpen(false);
          setProfileStudent(null);
        }}
      />

      <AvatarPickerModal
        open={avatarOpen}
        title={activeStudent ? `${activeStudent.name}'s Persona` : 'Student Persona'}
        subtitle="Choose an avatar for this student"
        initialStyle={activeStudent?.avatarStyle || 'avataaars'}
        initialSeed={activeStudent?.avatarSeed || (activeStudent?.name?.split(' ')?.[0] ?? '')}
        onClose={() => {
          setAvatarOpen(false);
          setActiveStudent(null);
        }}
        onApply={async ({ avatarStyle, avatarSeed, avatarUrl }) => {
          if (!activeStudent?.id) return;
          await studentService.updateStudent(activeStudent.id, {
            avatarStyle,
            avatarSeed,
            avatarUrl,
            updatedAt: new Date().toISOString(),
          });
          setAvatarOpen(false);
          setActiveStudent(null);
        }}
      />
    </div>
  );
};

export default StudentList;
