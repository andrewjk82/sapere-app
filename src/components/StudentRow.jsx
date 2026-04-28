import React from 'react';
import { ChevronRight } from 'lucide-react';

const StudentRow = ({ name, level, subject, status, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center justify-between p-4 rounded-xl hover:bg-glass transition-colors group cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-bold text-bg-deep uppercase">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold group-hover:text-accent transition-colors">{name}</h4>
        <p className="text-text-secondary text-xs">{level} • {subject}</p>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
        status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
      }`}>
        {status}
      </span>
      <button className="p-2 text-text-secondary hover:text-white transition-transform group-hover:translate-x-1">
        <ChevronRight size={18} />
      </button>
    </div>
  </div>
);

export default StudentRow;
