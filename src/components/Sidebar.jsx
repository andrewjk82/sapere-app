import React, { useEffect, useMemo, useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  BookOpen, 
  Settings, 
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import AvatarPickerModal from './AvatarPickerModal';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`app-sidebar__item ${active ? 'is-active' : ''}`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { user, isAdmin, logout } = useAuth();
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user?.uid) return undefined;
    const ref = doc(db, 'users', user.uid);
    return onSnapshot(ref, (snap) => {
      setProfile(snap.exists() ? snap.data() : null);
    });
  }, [user?.uid]);

  const fallbackUrl = useMemo(() => {
    if (user?.photoURL) return user.photoURL;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.email || 'sapere')}`;
  }, [user?.photoURL, user?.email]);

  const avatarUrl = profile?.avatarUrl || (profile?.avatarStyle && profile?.avatarSeed
    ? `https://api.dicebear.com/7.x/${profile.avatarStyle}/svg?seed=${encodeURIComponent(profile.avatarSeed)}`
    : fallbackUrl);

  return (
    <aside className="app-sidebar">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="app-sidebar__brand"
      >
        <div className="app-sidebar__logo">
          <img src="/logo.png?v=1" alt="Sapere Logo" />
        </div>
        <div>
          <h1>Sapere</h1>
          <p>Academia</p>
        </div>
      </motion.div>

      <nav className="app-sidebar__nav">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
        <SidebarItem icon={Users} label="Students" active={activeTab === 'Students'} onClick={() => setActiveTab('Students')} />
        <SidebarItem icon={Calendar} label="Schedule" active={activeTab === 'Schedule'} onClick={() => setActiveTab('Schedule')} />
        <SidebarItem icon={BookOpen} label="Curriculum" active={activeTab === 'Curriculum'} onClick={() => setActiveTab('Curriculum')} />
        <SidebarItem icon={Settings} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
      </nav>

      <div className="app-sidebar__footer">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="app-panel app-sidebar__upgrade"
        >
          <p className="app-sidebar__eyebrow">Upgrade to Pro</p>
          <p className="app-sidebar__title">Unlimited students and a more polished workflow</p>
          <button className="app-button app-button--primary">Upgrade now</button>
        </motion.div>

        <div className="app-panel app-sidebar__profile">
          <div className="app-sidebar__profile-top">
            <div className="app-avatar clickable-avatar" onClick={() => setAvatarOpen(true)} role="button" tabIndex={0}>
              <img src={avatarUrl} alt="Avatar" />
            </div>
            <div>
              <p className="app-sidebar__profile-name">{user?.displayName || user?.email?.split('@')[0]}</p>
              {isAdmin && (
                <span className="app-sidebar__profile-meta">
                  <ShieldCheck size={10} />
                  Admin
                </span>
              )}
            </div>
          </div>
          <button 
            onClick={logout}
            className="app-link-button"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      <AvatarPickerModal
        open={avatarOpen}
        title="My Persona"
        subtitle="Choose your face"
        initialStyle={profile?.avatarStyle || 'avataaars'}
        initialSeed={profile?.avatarSeed || (user?.email?.split('@')[0] ?? '')}
        onClose={() => setAvatarOpen(false)}
        onApply={async ({ avatarStyle, avatarSeed, avatarUrl: nextUrl }) => {
          if (!user?.uid) return;
          await setDoc(
            doc(db, 'users', user.uid),
            { avatarStyle, avatarSeed, avatarUrl: nextUrl, updatedAt: new Date().toISOString() },
            { merge: true },
          );
          setAvatarOpen(false);
        }}
      />
    </aside>
  );
};

export default Sidebar;
