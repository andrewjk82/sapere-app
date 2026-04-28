import React from 'react';
import { ChevronRight } from 'lucide-react';

const StudentRow = ({ name, level, subject, status, onClick }) => (
  <div 
    onClick={onClick}
    className="student-row"
  >
    <div className="student-row__main">
      <div className="student-row__avatar">
        {name.charAt(0)}
      </div>
      <div>
        <h4>{name}</h4>
        <p className="student-row__meta">{level} • {subject}</p>
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

export default StudentRow;
