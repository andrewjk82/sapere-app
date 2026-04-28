import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Bell, Users, Clock, CheckCircle2, GraduationCap } from 'lucide-react';
import StatCard from './StatCard';
import StudentRow from './StudentRow';
import { useAuth } from '../context/AuthContext';

const Dashboard = ({ students, onAddStudent }) => {
  const { user } = useAuth();
  const userName = user?.displayName || user?.email?.split('@')[0] || 'Andrew';

  // Calculate dynamic stats
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'Active').length;
  const totalLessons = students.reduce((acc, s) => acc + (s.lessons || 0), 0);

  const displayStats = [
    { label: "Total Students", value: totalStudents.toString(), icon: "Users" },
    { label: "Active Students", value: activeStudents.toString(), icon: "GraduationCap" },
    { label: "Total Lessons", value: totalLessons.toString(), icon: "CheckCircle2" },
    { label: "Hours Tutored", value: `${Math.round(totalLessons * 1.5)}h`, icon: "Clock" },
  ];

  return (
    <div className="flex-grow p-8 overflow-y-auto">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <div>
          <h2 className="text-3xl font-bold">Welcome back, Tutor {userName}</h2>
          <p className="text-text-secondary">You have {totalStudents} students registered.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="bg-glass border border-glass-border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent transition-colors w-64"
            />
          </div>
          <button className="p-2 bg-glass border border-glass-border rounded-xl text-text-secondary hover:text-white relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-bg-deep"></span>
          </button>
          <div className="w-10 h-10 rounded-xl bg-glass border border-glass-border flex items-center justify-center overflow-hidden border-2 border-accent/20">
            <img src={user?.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} alt="Profile" />
          </div>
        </div>
      </motion.header>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-12 gap-6"
      >
        {/* Stats */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayStats.map((stat, index) => (
            <StatCard key={index} {...stat} iconName={stat.icon} />
          ))}
        </div>

        {/* Recent Students */}
        <div className="col-span-12 lg:col-span-8 glass-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Recent Students</h3>
            <button className="text-accent text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="flex flex-col gap-2">
            {students.length > 0 ? (
              students.slice(0, 5).map(student => (
                <StudentRow key={student.id} {...student} />
              ))
            ) : (
              <div className="py-10 text-center text-text-secondary border border-dashed border-glass-border rounded-xl">
                No students added yet.
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions & Upcoming */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="glass-card p-6 bg-accent-glow border border-accent/20">
            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
              <button 
                onClick={onAddStudent}
                className="btn-primary w-full justify-center"
              >
                <Plus size={20} />
                Add New Student
              </button>
              <button className="btn-secondary w-full">Schedule Lesson</button>
              <button className="btn-secondary w-full">Record Progress</button>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
            <div className="flex flex-col gap-4">
              {students.slice(0, 3).map(s => (
                <div key={s.id} className="border-l-4 border-accent pl-4 py-1 hover:bg-glass rounded-r-lg transition-colors cursor-pointer">
                  <p className="text-sm font-bold">New student: {s.name}</p>
                  <p className="text-xs text-text-secondary">{s.level} • {s.subject}</p>
                </div>
              ))}
              {students.length === 0 && <p className="text-sm text-text-secondary italic">No recent activity.</p>}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
