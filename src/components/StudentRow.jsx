import React from 'react';
import { ChevronRight } from 'lucide-react';
import { normalizeSubjectLabel } from '../utils/subjectLabels';

const StudentRow = ({ name, firstName, lastName, level, year, subject, school, status, onClick }) => {
  const displayName = name || (firstName ? `${firstName} ${lastName || ''}` : 'Unnamed Student');
  const displayLevel = level || year || 'N/A';
  const displaySubject = normalizeSubjectLabel(subject || school || 'N/A');

  return (
    <div 
      onClick={onClick}
      className="student-row"
    >
      <div className="student-row__main">
        <div className="student-row__avatar">
          {displayName.charAt(0)}
        </div>
        <div>
          <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#1a1c2c' }}>{displayName}</h4>
          <p className="student-row__meta">{displayLevel} • {displaySubject}</p>
        </div>
      </div>
      <div className="student-row__side">
        <span className={`status-badge ${status === 'Active' ? 'status-badge--active' : 'status-badge--inactive'}`}>
          {status}
        </span>
        <button className="app-icon-button">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default StudentRow;
