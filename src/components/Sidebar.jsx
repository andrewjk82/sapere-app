import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  BookOpen, 
  Settings, 
  GraduationCap,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
      active 
        ? 'bg-accent text-bg-deep shadow-glow' 
        : 'text-text-secondary hover:bg-glass hover:text-text-primary'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { user, isAdmin, logout } = useAuth();

  return (
    <aside className="w-72 border-r border-border p-6 flex flex-col gap-8 h-full sticky top-0">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 px-2"
      >
        <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-glow">
          <GraduationCap className="text-bg-deep" size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold font-heading leading-tight">Sapere</h1>
          <p className="text-[10px] text-accent uppercase tracking-widest font-bold">Academia</p>
        </div>
      </motion.div>

      <nav className="flex flex-col gap-2 flex-grow">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
        <SidebarItem icon={Users} label="Students" active={activeTab === 'Students'} onClick={() => setActiveTab('Students')} />
        <SidebarItem icon={Calendar} label="Schedule" active={activeTab === 'Schedule'} onClick={() => setActiveTab('Schedule')} />
        <SidebarItem icon={BookOpen} label="Curriculum" active={activeTab === 'Curriculum'} onClick={() => setActiveTab('Curriculum')} />
        <SidebarItem icon={Settings} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
      </nav>

      <div className="flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 bg-accent/5 border-accent/10"
        >
          <p className="text-xs text-text-secondary mb-2">Upgrade to Pro</p>
          <p className="text-sm font-semibold mb-3">Unlimited Students</p>
          <button className="w-full py-2 bg-accent text-bg-deep rounded-lg text-xs font-bold hover:scale-[1.02] transition-transform">Upgrade Now</button>
        </motion.div>

        <div className="glass-card p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center overflow-hidden border border-accent/20">
              <img src={user?.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} alt="Avatar" />
            </div>
            <div className="flex-grow min-w-0">
              <p className="text-xs font-bold truncate">{user?.displayName || user?.email?.split('@')[0]}</p>
              {isAdmin && (
                <span className="flex items-center gap-1 text-[10px] text-accent font-bold uppercase tracking-widest">
                  <ShieldCheck size={10} />
                  Admin
                </span>
              )}
            </div>
          </div>
          <button 
            onClick={logout}
            className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent transition-colors w-full px-1"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
