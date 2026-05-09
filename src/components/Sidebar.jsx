import React, { useEffect, useMemo, useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  BookOpen, 
  Settings, 
  LogOut,
  ShieldCheck,
  Trophy,
  Inbox,
  BookMarked
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useAdminFeed } from '../context/AdminFeedContext';
import { db } from '../firebase/config';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import AvatarPickerModal from './AvatarPickerModal';
import { CURRENT_APP_VERSION } from '../constants/appVersion';

const SidebarItem = ({ icon: Icon, label, active, onClick, disabled, badge }) => (
  <button 
    onClick={disabled ? undefined : onClick}
    className={`app-sidebar__item ${active ? 'is-active' : ''} ${disabled ? 'is-disabled' : ''}`}
    style={{ 
      opacity: disabled ? 0.5 : 1, 
      cursor: disabled ? 'not-allowed' : 'pointer',
      pointerEvents: disabled ? 'none' : 'auto',
      position: 'relative'
    }}
  >
    <div className="app-sidebar__item-inner">
      <Icon size={20} />
      <span>{label}</span>
    </div>
    {badge > 0 && (
      <span style={{
        background: '#ef4444',
        color: 'white',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        padding: '2px 8px',
        borderRadius: '12px',
        marginLeft: 'auto'
      }}>
        {badge}
      </span>
    )}
  </button>
);

const Sidebar = ({ activeTab, setActiveTab, isLocked }) => {
  const { user, isAdmin, logout } = useAuth();
  const { gradingCount, reportCount } = useAdminFeed();
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Badge counts come from AdminFeedContext (single shared listener);
  // no per-component grading_queue / reports subscription needed.

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
          <h1>Sapere Aude Academia</h1>
        </div>
      </motion.div>

      <nav className="app-sidebar__nav">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} disabled={isLocked} />
        {isAdmin && (
          <SidebarItem icon={Users} label="Students" active={activeTab === 'Students'} onClick={() => setActiveTab('Students')} disabled={isLocked} />
        )}
        <SidebarItem icon={Calendar} label="Schedule" active={activeTab === 'Schedule'} onClick={() => setActiveTab('Schedule')} disabled={isLocked} />
        {!isAdmin && (
          <SidebarItem icon={Trophy} label="Challenge" active={activeTab === 'Challenge'} onClick={() => setActiveTab('Challenge')} disabled={isLocked && activeTab !== 'Challenge'} />
        )}
        {isAdmin && (
          <SidebarItem icon={Inbox} label="Reports & Review" active={activeTab === 'Reports'} onClick={() => setActiveTab('Reports')} disabled={isLocked} badge={reportCount + gradingCount} />
        )}
        <SidebarItem icon={BookOpen} label="Curriculum" active={activeTab === 'Curriculum'} onClick={() => setActiveTab('Curriculum')} disabled={isLocked} />
        <SidebarItem icon={BookMarked} label="Library" active={activeTab === 'Library'} onClick={() => setActiveTab('Library')} disabled={isLocked} />
        <SidebarItem icon={Settings} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} disabled={isLocked} />
      </nav>

      {/* Only render footer on desktop — on mobile the capsule in App.jsx handles avatar/logout */}
      {!isMobile && (
        <div className="app-sidebar__footer">
          <div className="app-panel app-sidebar__profile" style={{ padding: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <div className="app-avatar clickable-avatar" onClick={() => setAvatarOpen(true)} role="button" tabIndex={0} style={{ width: '42px', height: '42px' }}>
                <img src={avatarUrl} alt="Avatar" />
              </div>
              <button 
                onClick={logout}
                className="app-icon-button"
                style={{ width: '42px', height: '42px', borderRadius: '12px' }}
                title="Sign Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
          <div className="app-sidebar__version">v{CURRENT_APP_VERSION}</div>
        </div>
      )}

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
