import React, { useEffect, useMemo, useState } from 'react';
import '../utils/clayStyle';
import './clay-sidebar.css';
import './sidebar-dock.css';
import {
  LayoutDashboard,
  Presentation,
  Users,
  Calendar,
  BookOpen,
  Settings,
  LogOut,
  ShieldCheck,
  Trophy,
  Inbox,
  BookMarked,
  Bell,
  GraduationCap,
  Award,
  FileText,
  Timer,
  Clock,
  Shuffle,
  ListChecks,
  Target,
  MoreHorizontal,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useAdminFeed } from '../context/AdminFeedContext';
import { db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { useProfile } from '../context/ProfileContext';
import { hubExamsFor, HUB_PAGES } from '../utils/examHub';
import AvatarPickerModal from './AvatarPickerModal';
import { MyHero } from './hero/PixelHero';
import { CURRENT_APP_VERSION } from '../constants/appVersion';

const SidebarItem = ({ icon: Icon, label, active, onClick, disabled, badge }) => (
  <button 
    onClick={disabled ? undefined : onClick}
    className={`app-sidebar__item ${active ? 'is-active' : ''} ${disabled ? 'is-disabled' : ''}`}
    title={label}
    aria-label={label}
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

// Phone menu for students: a floating pill dock with 4 main pages + More (sheet with everything else).
const PhoneDock = ({ activeTab, setActiveTab, isLocked, profile, onShowLeaderboard, onShowNotifs, unreadCount, logout }) => {
  const [moreOpen, setMoreOpen] = useState(false);
  const main = [
    { tab: 'Dashboard', label: 'Home', Icon: LayoutDashboard },
    { tab: 'Challenge', label: 'Study', Icon: Trophy },
    { tab: 'TimesTableSprint', label: 'Challenge', Icon: Timer },
    { tab: 'StudyTimer', label: 'Planner', Icon: Clock },
  ];
  const more = [
    { tab: 'Schedule', label: 'Schedule', Icon: Calendar },
    ...(profile?.examPrepEnabled === true ? [{ tab: 'ExamPrep', label: 'Exam Prep', Icon: GraduationCap }] : []),
    ...hubExamsFor(profile).map((examId) => ({ tab: HUB_PAGES[examId].tab, label: HUB_PAGES[examId].label, Icon: examId === 'sch-acer' ? Award : Target })),
    { tab: 'Curriculum', label: 'Curriculum', Icon: BookOpen },
    { tab: 'Library', label: 'Library', Icon: BookMarked },
    { tab: 'Settings', label: 'Settings', Icon: Settings },
  ];
  const mainTabs = main.map((m) => m.tab);
  const moreActive = !mainTabs.includes(activeTab);
  const go = (tab) => { setMoreOpen(false); if (!isLocked || tab === activeTab) setActiveTab(tab); };
  return (
    <>
      <nav className="phone-dock" aria-label="Main menu">
        {main.map(({ tab, label, Icon }) => (
          <button key={tab} type="button" aria-label={label} title={label} disabled={isLocked && activeTab !== tab}
            className={`phone-dock__item${activeTab === tab ? ' is-active' : ''}`} onClick={() => go(tab)}>
            <Icon size={22} />{activeTab === tab && <span>{label}</span>}
          </button>
        ))}
        <button type="button" aria-label="More" title="More" className={`phone-dock__item${moreActive || moreOpen ? ' is-active' : ''}`} onClick={() => setMoreOpen((o) => !o)}>
          <MoreHorizontal size={22} />{(moreActive || moreOpen) && <span>More</span>}
        </button>
      </nav>
      {moreOpen && (
        <>
          <div className="phone-sheet__backdrop" onClick={() => setMoreOpen(false)} />
          <div className="phone-sheet" role="dialog" aria-label="More">
            <div className="phone-sheet__grip" />
            <b className="phone-sheet__title">More</b>
            <div className="phone-sheet__grid">
              {more.map(({ tab, label, Icon }) => (
                <button key={tab} type="button" className={`phone-sheet__item${activeTab === tab ? ' is-active' : ''}`} onClick={() => go(tab)}>
                  <Icon size={24} /><span>{label}</span>
                </button>
              ))}
            </div>
            <div className="phone-sheet__row">
              {onShowLeaderboard && <button type="button" onClick={() => { setMoreOpen(false); onShowLeaderboard(); }}><Trophy size={18} /> Leaderboard</button>}
              {onShowNotifs && <button type="button" onClick={() => { setMoreOpen(false); onShowNotifs(); }}><Bell size={18} /> Notifications{unreadCount > 0 ? ` (${unreadCount})` : ''}</button>}
              <button type="button" onClick={logout}><LogOut size={18} /> Sign out</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const Sidebar = ({ activeTab, setActiveTab, isLocked, onShowLeaderboard, onShowNotifs, unreadCount = 0 }) => {
  const { user, isAdmin, logout } = useAuth();
  const { gradingCount, reportCount } = useAdminFeed();
  const [avatarOpen, setAvatarOpen] = useState(false);
  const { profile } = useProfile();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 720);
  // The student dock: tell the page CSS (no :has(), which some iPad/Safari versions ignore).
  useEffect(() => {
    document.documentElement.classList.toggle('has-dock', !isAdmin);
    return () => document.documentElement.classList.remove('has-dock');
  }, [isAdmin]);

  useEffect(() => {
    const handleResize = () => { setIsMobile(window.innerWidth <= 1024); setIsPhone(window.innerWidth <= 720); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Profile + admin badge counts both come from shared context providers
  // (ProfileContext / AdminFeedContext) — no per-component listeners.

  const fallbackUrl = useMemo(() => {
    if (user?.photoURL) return user.photoURL;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.email || 'sapere')}`;
  }, [user?.photoURL, user?.email]);

  const avatarUrl = profile?.avatarUrl || (profile?.avatarStyle && profile?.avatarSeed
    ? `https://api.dicebear.com/7.x/${profile.avatarStyle}/svg?seed=${encodeURIComponent(profile.avatarSeed)}`
    : fallbackUrl);

  if (!isAdmin && isPhone) {
    return <PhoneDock activeTab={activeTab} setActiveTab={setActiveTab} isLocked={isLocked} profile={profile} onShowLeaderboard={onShowLeaderboard} onShowNotifs={onShowNotifs} unreadCount={unreadCount} logout={logout} />;
  }

  return (
    <aside className={`app-sidebar${isAdmin ? '' : ' app-sidebar--dock'}`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="app-sidebar__brand"
      >
        <div className="app-sidebar__logo">
          <img src="/logo.png?v=4" alt="Secret Study Logo" />
        </div>
        <div>
          <h1>SECRET<br />STUDY</h1>
        </div>
      </motion.div>

      <nav className="app-sidebar__nav">
        {isAdmin && (
          <SidebarItem icon={Presentation} label="Class" active={activeTab === 'Class'} onClick={() => setActiveTab('Class')} disabled={isLocked} />
        )}
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} disabled={isLocked} />
        {isAdmin && (
          <SidebarItem icon={Users} label="Students" active={activeTab === 'Students'} onClick={() => setActiveTab('Students')} disabled={isLocked} />
        )}
        <SidebarItem icon={Calendar} label="Schedule" active={activeTab === 'Schedule'} onClick={() => setActiveTab('Schedule')} disabled={isLocked} />
        {!isAdmin && (
          <SidebarItem icon={Trophy} label="Daily Study" active={activeTab === 'Challenge'} onClick={() => setActiveTab('Challenge')} disabled={isLocked && activeTab !== 'Challenge'} />
        )}
        {/* Student-facing name for the Times Table Sprint tab (renamed from
            "Times Table", 2026-10). Visible to the teacher too — admin runs are
            a practice mode and are never recorded (see TimesTableSprint). */}
        <SidebarItem icon={Timer} label="Daily Challenge" active={activeTab === 'TimesTableSprint'} onClick={() => setActiveTab('TimesTableSprint')} disabled={isLocked && activeTab !== 'TimesTableSprint'} />

        {!isAdmin && (
          <SidebarItem icon={Clock} label="Study Planner" active={activeTab === 'StudyTimer'} onClick={() => setActiveTab('StudyTimer')} disabled={isLocked} />
        )}

        {!isAdmin && profile?.examPrepEnabled === true && (
          <SidebarItem icon={GraduationCap} label="Exam Prep" active={activeTab === 'ExamPrep'} onClick={() => setActiveTab('ExamPrep')} disabled={isLocked} />
        )}
        {/* OC, Selective and Scholarship (ACER) are separate pages: a student sees one item per exam the teacher ticked. */}
        {!isAdmin && hubExamsFor(profile).map((examId) => (
          <SidebarItem key={examId} icon={examId === 'sch-acer' ? Award : Target} label={HUB_PAGES[examId].label} active={activeTab === HUB_PAGES[examId].tab} onClick={() => setActiveTab(HUB_PAGES[examId].tab)} disabled={isLocked} />
        ))}
        {isAdmin && (
          <SidebarItem icon={Inbox} label="Reports & Review" active={activeTab === 'Reports'} onClick={() => setActiveTab('Reports')} disabled={isLocked} badge={reportCount + gradingCount} />
        )}
        {isAdmin && (
          <SidebarItem icon={Shuffle} label="DNA Warmup" active={activeTab === 'DnaWarmupReview'} onClick={() => setActiveTab('DnaWarmupReview')} disabled={isLocked} />
        )}
        {isAdmin && (
          <SidebarItem icon={ListChecks} label="Question Pre-Steps" active={activeTab === 'QuestionPreStepsReview'} onClick={() => setActiveTab('QuestionPreStepsReview')} disabled={isLocked} />
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
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
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
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onShowNotifs(); }}
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
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            boxShadow: 'none',
            marginBottom: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                className="app-avatar clickable-avatar"
                onClick={() => (isAdmin ? setAvatarOpen(true) : window.dispatchEvent(new Event('sapere:open-hero')))}
                role="button"
                tabIndex={0}
                style={{ width: '42px', height: '42px', border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              >
                {isAdmin ? <img src={avatarUrl} alt="Avatar" /> : <MyHero view="head" className="hero-avatar" />}
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
          // Sync avatar to leaderboard so the race view updates immediately
          setDoc(
            doc(db, 'leaderboard', user.uid),
            { avatarUrl: nextUrl },
            { merge: true },
          ).catch(e => console.warn('leaderboard avatar sync failed:', e?.code || e));
          setAvatarOpen(false);
        }}
      />
    </aside>
  );
};

export default Sidebar;
