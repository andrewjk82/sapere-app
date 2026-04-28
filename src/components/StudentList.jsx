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
          filteredStudents.map((student, index) => (
            <motion.div 
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="app-panel student-card"
            >
              <div className="student-card__top">
                <div className="student-card__main">
                  <div
                    className="student-card__avatar"
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      borderRadius: '20px', 
                      overflow: 'hidden', 
                      background: '#f1f5f9',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}
                  >
                    <img 
                      src={student.dreamImageUrl || 'https://images.unsplash.com/photo-1516534775068-ba3e84529519?auto=format&fit=crop&q=80&w=200'} 
                      alt={student.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a1c2c', margin: '0 0 4px 0' }}>{student.name}</h3>
                    <p className="student-card__meta" style={{ marginBottom: '12px' }}>{student.level} • {student.school || student.subject}</p>
                    
                    <div className="student-card__progress-wrapper" style={{ 
                      background: 'rgba(99, 102, 241, 0.05)', 
                      padding: '8px 16px', 
                      borderRadius: '12px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      border: '1px solid rgba(99, 102, 241, 0.1)'
                    }}>
                      <div className="student-card__progress-track" style={{ flex: 1, height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div className="student-card__progress-fill" style={{ width: '54%', height: '100%', background: '#a78bfa', borderRadius: '4px' }}></div>
                      </div>
                      <span style={{ fontWeight: 800, color: '#475569', fontSize: '0.9rem' }}>54%</span>
                    </div>
                  </div>
                </div>
                <button className="app-icon-button" style={{ alignSelf: 'flex-start' }}>
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <div className="student-card__actions">
                <div className="student-card__info">
                  <BookOpen size={16} />
                  <span>{student.lessons || 0} lessons completed</span>
                </div>
                <div className="student-card__info">
                  <Mail size={16} />
                  <span>Contact student</span>
                </div>
              </div>

              <div className="student-card__footer">
                <span className={`status-badge ${
                  student.status === 'Active' ? 'status-badge--active' : 'status-badge--inactive'
                }`}>
                  {student.status || 'Active'}
                </span>
                <button 
                  className="app-button app-button--secondary app-button--sm"
                  onClick={() => onSelectStudent(student.id)}
                >
                  View Profile
                </button>
              </div>
            </motion.div>
          ))
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
