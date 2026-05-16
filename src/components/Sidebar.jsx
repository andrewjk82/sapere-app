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
  BookMarked,
  Bell
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

const Sidebar = ({ activeTab, setActiveTab, isLocked, onShowLeaderboard, onShowNotifs, unreadCount = 0 }) => {
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
          <img src="/logo.png?v=2" alt="Sapere Logo" />
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

      <div className="app-sidebar__footer">
        {/* Quick-action icon row: Leaderboard, Notifications, Logout */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '4px',
          padding: '8px 4px',
          marginBottom: '8px',
          background: 'rgba(255,255,255,0.6)',
          borderRadius: '16px',
          border: '1px solid rgba(167,139,250,0.15)',
        }}>
          {!isAdmin && onShowLeaderboard && (
            <button
              onClick={onShowLeaderboard}
              title="Leaderboard"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '10px', transition: 'background 0.2s' }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(99,102,241,0.08)'}
              onMouseOut={e => e.currentTarget.style.background = 'none'}
            >
              <Trophy size={18} />
            </button>
          )}
          {onShowNotifs && (
            <button
              onClick={(e) => { e.stopPropagation(); onShowNotifs(); }}
              title="Notifications"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '10px', position: 'relative', transition: 'background 0.2s' }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(99,102,241,0.08)'}
              onMouseOut={e => e.currentTarget.style.background = 'none'}
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span style={{ position: 'absolute', top: '6px', right: '6px', width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', border: '1.5px solid white' }} />
              )}
            </button>
          )}
          <button
            onClick={logout}
            title="Sign Out"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '10px', transition: 'background 0.2s' }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(99,102,241,0.08)'}
            onMouseOut={e => e.currentTarget.style.background = 'none'}
          >
            <LogOut size={18} />
          </button>
        </div>

        {/* Profile card — only on desktop (>920px sidebar layout) */}
        {!isMobile && (
          <div className="app-panel app-sidebar__profile" style={{
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(167, 139, 250, 0.15)',
            marginBottom: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                className="app-avatar clickable-avatar"
                onClick={() => setAvatarOpen(true)}
                role="button"
                tabIndex={0}
                style={{ width: '42px', height: '42px', border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              >
                <img src={avatarUrl} alt="Avatar" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1e1b4b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {profile?.firstName || user?.displayName?.split(' ')[0] || 'User'}
                </div>
                <div style={{ fontSize: '0.65rem', color: '#8b5cf6', fontWeight: 700 }}>
                  {isAdmin ? 'Academic Admin' : (profile?.year || 'Student')}
                </div>
              </div>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', fontSize: '0.65rem', fontWeight: 800, color: '#8b5cf6', opacity: 0.5, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          v{CURRENT_APP_VERSION}
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
