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
import { db } from '../firebase/config';
import { doc, onSnapshot, setDoc, collection, query, where } from 'firebase/firestore';
import AvatarPickerModal from './AvatarPickerModal';
import { CURRENT_APP_VERSION } from '../constants/appVersion';

const SidebarItem = ({ icon: Icon, label, active, onClick, disabled, badge, isMobile }) => (
  <button 
    onClick={disabled ? undefined : onClick}
    className={`app-sidebar__item ${active ? 'is-active' : ''} ${disabled ? 'is-disabled' : ''} ${isMobile ? 'is-mobile' : ''}`}
    style={{ 
      opacity: disabled ? 0.5 : 1, 
      cursor: disabled ? 'not-allowed' : 'pointer',
      pointerEvents: disabled ? 'none' : 'auto',
      position: 'relative',
      justifyContent: isMobile ? 'center' : 'flex-start'
    }}
    title={label}
  >
    <div className="app-sidebar__item-inner" style={{ justifyContent: isMobile ? 'center' : 'flex-start' }}>
      <Icon size={20} />
      {!isMobile && <span>{label}</span>}
    </div>
    {!isMobile && badge > 0 && (
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
    {isMobile && badge > 0 && (
      <div style={{
        position: 'absolute',
        top: '6px',
        right: '6px',
        width: '8px',
        height: '8px',
        background: '#ef4444',
        borderRadius: '50%',
        border: '2px solid white'
      }} />
    )}
  </button>
);

const Sidebar = ({ activeTab, setActiveTab, isLocked }) => {
  const { user, isAdmin, logout } = useAuth();
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [reportCount, setReportCount] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAdmin) return;
    const q = query(collection(db, 'reports'), where('status', '==', 'open'));
    const unsub = onSnapshot(q, (snap) => {
      setReportCount(snap.size);
    });
    return unsub;
  }, [isAdmin]);

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
    <aside className={`app-sidebar ${isMobile ? 'is-mobile' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="app-sidebar__brand"
        style={{ justifyContent: isMobile ? 'center' : 'flex-start' }}
      >
        <div className="app-sidebar__logo" style={{ width: isMobile ? '44px' : '54px', height: isMobile ? '44px' : '54px' }}>
          <img src="/logo.png?v=1" alt="Sapere Logo" />
        </div>
        {!isMobile && (
          <div>
            <h1>Sapere Aude Academia</h1>
          </div>
        )}
      </motion.div>

      <nav className="app-sidebar__nav">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} disabled={isLocked} isMobile={isMobile} />
        {isAdmin && (
          <SidebarItem icon={Users} label="Students" active={activeTab === 'Students'} onClick={() => setActiveTab('Students')} disabled={isLocked} isMobile={isMobile} />
        )}
        <SidebarItem icon={Calendar} label="Schedule" active={activeTab === 'Schedule'} onClick={() => setActiveTab('Schedule')} disabled={isLocked} isMobile={isMobile} />
        {!isAdmin && (
          <SidebarItem icon={Trophy} label="Challenge" active={activeTab === 'Challenge'} onClick={() => setActiveTab('Challenge')} disabled={isLocked && activeTab !== 'Challenge'} isMobile={isMobile} />
        )}
        {isAdmin && (
          <SidebarItem icon={Inbox} label="Reports" active={activeTab === 'Reports'} onClick={() => setActiveTab('Reports')} disabled={isLocked} badge={reportCount} isMobile={isMobile} />
        )}
        <SidebarItem icon={BookOpen} label="Curriculum" active={activeTab === 'Curriculum'} onClick={() => setActiveTab('Curriculum')} disabled={isLocked} isMobile={isMobile} />
        <SidebarItem icon={BookMarked} label="Library" active={activeTab === 'Library'} onClick={() => setActiveTab('Library')} disabled={isLocked} isMobile={isMobile} />
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
