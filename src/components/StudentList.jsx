import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus, MoreVertical, Mail, BookOpen } from 'lucide-react';
import { studentService } from '../services/studentService';
import AvatarPickerModal from './AvatarPickerModal';
import StudentProfileModal from './StudentProfileModal';

const StudentList = ({ students, onAddStudent }) => {
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
                    className="student-card__avatar clickable-avatar"
                    onClick={() => {
                      setActiveStudent(student);
                      setAvatarOpen(true);
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {student.avatarUrl ? (
                      <img src={student.avatarUrl} alt={`${student.name} avatar`} style={{ width: '92%', height: '92%', objectFit: 'contain' }} />
                    ) : (
                      student.name?.charAt(0) || 'S'
                    )}
                  </div>
                  <div>
                    <h3>{student.name}</h3>
                    <p className="student-card__meta">{student.level} • {student.subject}</p>
                  </div>
                </div>
                <button className="student-card__menu">
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
                  onClick={() => {
                    setProfileStudent(student);
                    setProfileOpen(true);
                  }}
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
