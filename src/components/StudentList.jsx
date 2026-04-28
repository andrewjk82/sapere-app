import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus, MoreVertical, Mail, Phone, BookOpen } from 'lucide-react';

const StudentList = ({ students, onAddStudent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-grow p-8 overflow-y-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold">Students</h2>
          <p className="text-text-secondary">Manage your active and past students.</p>
        </div>
        <button 
          onClick={onAddStudent}
          className="btn-primary"
        >
          <Plus size={20} />
          Add Student
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-glass border border-glass-border rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-accent transition-colors w-full"
          />
        </div>
        <button className="px-4 bg-glass border border-glass-border rounded-xl text-text-secondary hover:text-white flex items-center gap-2">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <motion.div 
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 hover:border-accent/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-bold text-bg-deep text-xl uppercase">
                  {student.name?.charAt(0) || 'S'}
                </div>
                <button className="p-1 text-text-secondary hover:text-white">
                  < MoreVertical size={20} />
                </button>
              </div>
              
              <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{student.name}</h3>
              <p className="text-text-secondary text-sm mb-4">{student.level} • {student.subject}</p>
              
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <BookOpen size={16} />
                  <span>{student.lessons || 0} Lessons completed</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Mail size={16} />
                  <span>Contact student</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  student.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                }`}>
                  {student.status || 'Active'}
                </span>
                <button className="text-accent text-sm font-bold hover:underline">View Profile</button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-text-secondary border border-dashed border-glass-border rounded-2xl">
            {searchTerm ? "No students match your search." : "No students added yet. Click 'Add Student' to get started."}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
