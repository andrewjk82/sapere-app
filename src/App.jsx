import { useState, useEffect, useMemo, useCallback, useRef, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useAuth } from './context/AuthContext';
import { useToast } from './context/ToastContext';
import { useProfile } from './context/ProfileContext';
import { studentService } from './services/studentService';
import Sidebar from './components/Sidebar';
import ErrorBoundary from './components/ErrorBoundary';
// Route-level views are code-split so the main bundle only loads the
// shell; each view is fetched on first navigation.
//
// After a new deploy the hashed chunk filenames change. A browser still
// running the old build will request a stale chunk; the server answers with
// index.html (text/html), which fails as "not a valid JavaScript MIME type".
// lazyWithReload detects a failed dynamic import (stale chunk after a deploy)
// and reloads the page once per chunk to pick up the fresh build.
// Each chunk gets its own sessionStorage key so multiple chunks can each
// trigger one reload independently without blocking each other.
// On module load, purge any stale reload guards older than 60 s so they
// never permanently block retries across app sessions.
(() => {
  try {
    const now = Date.now();
    Object.keys(sessionStorage).forEach((k) => {
      if (k.startsWith('sapere:chunk-reload')) {
        const ts = Number(sessionStorage.getItem(k));
        if (!ts || now - ts > 60_000) sessionStorage.removeItem(k);
      }
    });
  } catch (_) { /* sessionStorage unavailable */ }
})();

const lazyWithReload = (importer) => {
  // Convert the importer function to a stable string key for sessionStorage.
  const chunkKey = `sapere:chunk-reload:${importer.toString().replace(/\s+/g, '')}`;
  return lazy(() =>
    importer()
      .then((mod) => { sessionStorage.removeItem(chunkKey); return mod; })
      .catch((err) => {
        if (!sessionStorage.getItem(chunkKey)) {
          sessionStorage.setItem(chunkKey, String(Date.now()));
          // Use replace() with a cache-bust param so mobile browsers don't
          // serve a stale index.html from their local cache on reload.
          const sep = window.location.search ? '&' : '?';
          window.location.replace(window.location.href + sep + `_cb=${Date.now()}`);
          return new Promise(() => {}); // never resolves — the page is navigating
        }
        throw err;
      })
  );
};
// Dashboard and Schedule are eagerly imported — they are the first screens
// students and tutors see, so lazy-loading them only adds latency and risks
// "Failed to fetch dynamically imported module" errors on stale deploys.
import Dashboard from './components/Dashboard';
import CurriculumGraph3D from './components/CurriculumGraph3D';
import Schedule from './components/Schedule';
import Library from './components/Library';
const StudentList = lazyWithReload(() => import('./components/StudentList'));
const Curriculum = lazyWithReload(() => import('./components/Curriculum'));
const DailyChallenge = lazyWithReload(() => import('./components/DailyChallenge'));
const Settings = lazyWithReload(() => import('./components/Settings'));
const StudentDetail = lazyWithReload(() => import('./components/StudentDetail'));
const ReportsAdmin = lazyWithReload(() => import('./components/ReportsAdmin'));
const ExamPrep = lazyWithReload(() => import('./components/ExamPrep'));
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthLayout from './pages/AuthLayout';
import LeaderboardModal from './components/LeaderboardModal';
import { AlertCircle, ArrowRight, LogOut, Bell, Settings as SettingsIcon, Trophy } from 'lucide-react';
import { db, auth, listenForForegroundNotifications, requestNotificationPermission } from './firebase/config';
import { doc, onSnapshot, query, collection, orderBy, limit, updateDoc, deleteField } from 'firebase/firestore';
import { CURRENT_APP_VERSION } from './constants/appVersion';
import { getRandomConcept } from './data/keyConceptsData';
import { localCache } from './services/localCacheService';
import { getChallengeBootCacheKey } from './utils/challengeUtils';
import { pruneBlocked, applyTeacherApprovals as applySecretNoteApprovals } from './utils/secretNote';
import { applyTeacherApprovals as applyExamPrepApprovals, applyTeacherRejections as applyExamPrepRejections } from './services/examPrepService';
import './components/app-shell.css';
import './components/mobile-capsule.css';

const isNewer = (cloud, local) => {
  if (!cloud || !local) return false;
  const c = cloud.split('.').map(Number);
  const l = local.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if ((c[i] || 0) > (l[i] || 0)) return true;
    if ((c[i] || 0) < (l[i] || 0)) return false;
  }
  return false;
};

const isIOSStandaloneApp = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  return isiOS && (
    window.matchMedia?.('(display-mode: standalone)').matches
    || window.navigator?.standalone === true
  );
};

const isStandaloneAppDisplay = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(display-mode: standalone)').matches
    || window.matchMedia?.('(display-mode: fullscreen)').matches
    || window.navigator?.standalone === true;
};

const KEYBOARD_ACTIVITY_GRACE_MS = 8000;
const VIEWPORT_ACTIVITY_GRACE_MS = 4000;

const isEditableElement = (target) =>
  Boolean(target?.closest?.('input, textarea, select, [contenteditable="true"]')) ||
  ['INPUT', 'TEXTAREA', 'SELECT'].includes(target?.tagName);

const isTodayDateKey = (dateKey) => dateKey === new Date().toLocaleDateString('en-CA');

const getTimeGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

const getProfileCacheKey = (uid) => `profile:v1:${uid}`;

// Typewriter hook — types out `text` one character at a time after `startDelay` ms
function useTypewriter(text, { startDelay = 0, charInterval = 38 } = {}) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!text) return;
    indexRef.current = 0;
    setDisplayed('');
    setDone(false);

    const startTimer = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        indexRef.current += 1;
        setDisplayed(text.slice(0, indexRef.current));
        if (indexRef.current >= text.length) {
          window.clearInterval(interval);
          setDone(true);
        }
      }, charInterval);
      return () => window.clearInterval(interval);
    }, startDelay);

    return () => window.clearTimeout(startTimer);
  }, [text, startDelay, charInterval]);

  return { displayed, done };
}

// Soft, synthesized "sunrise" chime — a gentle ascending arpeggio with a
// smooth bell-like envelope. No audio asset needed (Web Audio API). Autoplay
// rejection is caught silently. Respects the sapere:intro-muted preference.
const playIntroChime = () => {
  try {
    if (localStorage.getItem('sapere:intro-muted') === '1') return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.value = 0.0001;
    master.connect(ctx.destination);
    // Gentle swell in, slow release out.
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.16, now + 0.25);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);
    // Warm major arpeggio: C5, E5, G5, C6
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const t = now + i * 0.18;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.9, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
      osc.connect(g);
      g.connect(master);
      osc.start(t);
      osc.stop(t + 1.7);
    });
    // Close the context after the sound finishes to free resources.
    setTimeout(() => { ctx.close?.(); }, 3600);
  } catch (_) { /* autoplay blocked or unsupported — silent */ }
};

const OpeningIntro = ({ name = 'Andrew', greeting = 'Good morning', yearLevel = '', course = '', onDone }) => {
  const greetingText = `${greeting},`;
  // Name starts after: initial delay + all greeting chars have appeared
  const nameDelay = 0.2 + greetingText.length * 0.08;

  // Play the chime once when the intro mounts.
  useEffect(() => { playIntroChime(); }, []);

  // Pre-computed particle field — random positions/durations, stable per mount.
  const particles = useMemo(() => Array.from({ length: 18 }, () => ({
    left: Math.random() * 100,
    size: 2 + Math.random() * 3,
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 5,
  })), []);

  // Pick one random concept once on mount
  const concept = useMemo(() => getRandomConcept(yearLevel, course), [yearLevel, course]);

  // Concept typewriter starts after greeting + name animation finishes
  const conceptStartDelay = Math.round((nameDelay + name.length * 0.08 + 0.6) * 1000);
  const { displayed: conceptTyped } = useTypewriter(concept, {
    startDelay: conceptStartDelay,
    charInterval: 28,
  });

  const renderCharacters = (text, prefix = '') => text.split('').map((char, index) => (
    <motion.span
      key={`${prefix}-${index}`}
      aria-hidden="true"
      variants={{
        hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));

  return (
    <motion.div
      className="opening-intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={(definition) => {
        if (definition?.opacity === 0) onDone?.();
      }}
    >
      {/* Ambient background: breathing glow + drifting gold particles */}
      <div className="opening-intro__glow" aria-hidden="true" />
      <div className="opening-intro__particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="opening-intro__particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div
        className="opening-intro__text opening-intro__text--single"
        aria-label={`${greeting}, ${name}`}
      >
        <div className="opening-intro__line opening-intro__line--single">
          {/* Greeting: "Good morning," — animates first */}
          <motion.span
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
          >
            {renderCharacters(greetingText, 'greeting')}
          </motion.span>

          {/* Name — starts only after greeting is done */}
          <motion.span
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: nameDelay } },
            }}
          >
            {renderCharacters(`\u00A0${name}`, 'name')}
          </motion.span>
        </div>
      </div>

      {/* Key concept typewriter line */}
      {concept && (
        <div className="opening-intro__concept" aria-live="polite">
          {conceptTyped}
          <span className="opening-intro__cursor" aria-hidden="true" />
        </div>
      )}
    </motion.div>
  );
};

function App() {
  // Triggering fresh deployment with version 1.1.2
  const { user, isAdmin, logout, refreshUser, resendVerificationEmail } = useAuth();
  const { profile: sharedProfile } = useProfile();
  const { showToast } = useToast();

  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  const [cloudAppVersion, setCloudAppVersion] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const isLockedRef = useRef(false);
  useEffect(() => { isLockedRef.current = isLocked; }, [isLocked]);
  const [examInProgress, setExamInProgress] = useState(false);
  
  const [isScreenProtected, setIsScreenProtected] = useState(false);
  const keyboardActivityAtRef = useRef(0);
  const viewportActivityAtRef = useRef(0);
  
  // ── Screen Protection Logic (Non-Admins Only) ──
  useEffect(() => {
    if (isAdmin === true || !user) return undefined;

    const markKeyboardActivity = () => {
      keyboardActivityAtRef.current = Date.now();
    };
    const hasRecentKeyboardActivity = () => {
      const now = Date.now();
      return (
        isEditableElement(document.activeElement) ||
        now - keyboardActivityAtRef.current < KEYBOARD_ACTIVITY_GRACE_MS ||
        now - viewportActivityAtRef.current < VIEWPORT_ACTIVITY_GRACE_MS
      );
    };
    const handleInputActivity = (e) => {
      if (isEditableElement(e.target)) markKeyboardActivity();
    };
    const handleViewportResize = () => {
      if (hasRecentKeyboardActivity()) viewportActivityAtRef.current = Date.now();
    };
    const handleBlur = () => {
      if (hasRecentKeyboardActivity()) return;
      setIsScreenProtected(true);
    };
    const handleFocus = () => setIsScreenProtected(false);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (hasRecentKeyboardActivity()) return;
        handleBlur();
      }
      else handleFocus();
    };
    const handleContextMenu = (e) => e.preventDefault();
    const handleCopy = (e) => {
      e.preventDefault();
      showToast("Copying is disabled for security.", 'warning');
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('focusin', handleInputActivity);
    document.addEventListener('focusout', handleInputActivity);
    document.addEventListener('input', handleInputActivity);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    window.visualViewport?.addEventListener('resize', handleViewportResize);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('focusin', handleInputActivity);
      document.removeEventListener('focusout', handleInputActivity);
      document.removeEventListener('input', handleInputActivity);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      window.visualViewport?.removeEventListener('resize', handleViewportResize);
    };
  }, [isAdmin, user, showToast]);
  
  // Question-index freshness: if the question bank changed outside the
  // incremental hooks (e.g. legacy import tools that only bump sync_meta),
  // rebuild the per-chapter sampling indexes once per admin session.
  useEffect(() => {
    if (!user?.uid || !isAdmin) return;
    import('./services/questionIndexService')
      .then(({ ensureQuestionIndexFresh }) => ensureQuestionIndexFresh())
      .catch((err) => console.warn('question index freshness check failed:', err?.code || err));
  }, [user?.uid, isAdmin]);

  // Secret-Note blocklist: when a teacher flags a broken question, purge any
  // locally-saved copy from this student's Secret Note(s). Live subscription so
  // it clears immediately even while the student is using the app.
  useEffect(() => {
    if (!user?.uid || isAdmin) return undefined;
    const ref = doc(db, 'system_config', 'secretNoteBlocklist');
    return onSnapshot(ref, (snap) => {
      const ids = snap.exists() ? snap.data().ids : null;
      if (Array.isArray(ids) && ids.length) {
        try { pruneBlocked(user.uid, ids); } catch (_) { /* non-fatal */ }
      }
    }, () => { /* ignore permission/transient errors */ });
  }, [user?.uid, isAdmin]);

  // Teacher approvals queued on the student's user doc:
  //  - secretNoteApprovals → graduate (remove) the approved note locally
  //  - examPrepApprovals   → count the approved answer as correct in local stats
  // Applied live, then the queue fields are cleared so they run exactly once.
  // Reads the shared ProfileContext snapshot instead of opening a second
  // onSnapshot on the same users/{uid} doc (every profile write was billed 2×).
  useEffect(() => {
    if (!user?.uid || isAdmin || !sharedProfile) return undefined;
    const ref = doc(db, 'users', user.uid);
    {
      const data = sharedProfile;
      const noteApprovals = data.secretNoteApprovals;
      const examApprovals = data.examPrepApprovals;
      const examRejections = data.examPrepRejections;
      if (!Array.isArray(noteApprovals) && !Array.isArray(examApprovals) && !Array.isArray(examRejections)) return undefined;
      const clear = {};
      try {
        if (Array.isArray(noteApprovals) && noteApprovals.length) {
          const n = applySecretNoteApprovals(user.uid, noteApprovals);
          if (n > 0) showToast(`Your teacher approved ${n} Secret Note answer${n === 1 ? '' : 's'} — mastered! 🎉`, 'success');
          clear.secretNoteApprovals = deleteField();
        }
        if (Array.isArray(examApprovals) && examApprovals.length) {
          const n = applyExamPrepApprovals(user.uid, examApprovals);
          // The approved question also sits in the exam-prep Secret Note deck
          // (wrong/pending answers are auto-added) — graduate it there too.
          applySecretNoteApprovals(user.uid, examApprovals.map((a) => ({ kind: 'exam_prep', questionId: a.questionId })));
          if (n > 0) showToast(`Your teacher marked ${n} exam prep answer${n === 1 ? '' : 's'} correct!`, 'success');
          clear.examPrepApprovals = deleteField();
        }
        if (Array.isArray(examRejections) && examRejections.length) {
          const fresh = applyExamPrepRejections(user.uid, examRejections);
          if (fresh.length > 0) showToast(`Your teacher reviewed ${fresh.length} exam prep answer${fresh.length === 1 ? '' : 's'} — marked incorrect. Check your Secret Note to retry.`, 'info');
          clear.examPrepRejections = deleteField();
        }
      } catch (_) { /* non-fatal — retried on next snapshot */ }
      if (Object.keys(clear).length) {
        updateDoc(ref, clear).catch(() => {});
      }
    }
    return undefined;
  }, [user?.uid, isAdmin, sharedProfile, showToast]);

  // Auto-disable Exam Prep if all set exam dates have passed (D-Day < 0)
  useEffect(() => {
    if (!user?.uid || isAdmin || !sharedProfile || sharedProfile.examPrepEnabled !== true) return undefined;

    const assignedCourses = Array.isArray(sharedProfile.assignedCourse) ? sharedProfile.assignedCourse : [sharedProfile.assignedCourse || 'Advanced'];
    const isExtension = assignedCourses.some(c => c === 'Extension 1' || c === 'Extension 2');
    const examEntries = [1, 2, 3, 4].flatMap(t => {
      const entries = [{ date: sharedProfile[`term${t}ExamDate`] }];
      if (isExtension) entries.push({ date: sharedProfile[`ext1term${t}ExamDate`] });
      return entries;
    }).filter(t => t.date);

    if (examEntries.length > 0) {
      const allPast = examEntries.every(t => {
        const dday = Math.ceil((new Date(t.date) - new Date(new Date().toDateString())) / 86400000);
        return dday < 0;
      });

      if (allPast) {
        updateDoc(doc(db, 'users', user.uid), { examPrepEnabled: false }).catch(() => {});
      }
    }
  }, [user?.uid, isAdmin, sharedProfile]);

  // Real-time Version Check
  useEffect(() => {
    const versionRef = doc(db, 'system_config', 'app');
    return onSnapshot(versionRef, (snap) => {
      if (snap.exists()) {
        const cloudVersion = snap.data().version;
        setCloudAppVersion(cloudVersion || '');
        // Temporarily disable strict version checking to prevent infinite update loops
        if (isNewer(cloudVersion, CURRENT_APP_VERSION)) {
          setNewVersionAvailable(true);
        }
      }
    }, (err) => {
      console.warn('[App] System config listener failed:', err);
    });
  }, []);

  const handleUpdateApp = useCallback(() => {
    const reload = () => {
      if (isLockedRef.current) {
        console.log('[AutoUpdate] Blocked: Challenge is active.');
        return;
      }
      window.location.href = window.location.pathname + '?v=' + Date.now();
    };
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations()
        .then((registrations) =>
          // Wait for ALL service workers to fully unregister before reloading
          Promise.all(registrations.map((r) => r.unregister()))
        )
        .then(reload)
        .catch(reload);
    } else {
      reload();
    }
  }, []);

  useEffect(() => {
    // Auto-update fires once when a new version is detected — NOT on isLocked changes.
    // Removing isLocked from deps prevents the app from reloading right after a quiz
    // ends (which made the result screen disappear after ~1 second).
    if (!newVersionAvailable || !cloudAppVersion || !isIOSStandaloneApp()) return undefined;
    if (isLocked) return undefined; // still skip if quiz is active, but won't re-fire on unlock
    const updateKey = `sapere-ios-auto-update-${cloudAppVersion}`;
    if (sessionStorage.getItem(updateKey)) return undefined;
    sessionStorage.setItem(updateKey, '1');
    showToast('A new version is ready. Updating now...', 'info', 2500);
    const timer = window.setTimeout(handleUpdateApp, 3000);
    return () => window.clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudAppVersion, handleUpdateApp, newVersionAvailable, showToast]);
  
  // Request notification permission on login
  useEffect(() => {
    if (user?.uid) {
      requestNotificationPermission(user.uid, { interactive: false });
    }
  }, [user?.uid]);

  useEffect(() => {
    if (!user?.uid) return undefined;
    return listenForForegroundNotifications((payload) => {
      const title = payload.notification?.title || payload.data?.title || 'Notification';
      const body = payload.notification?.body || payload.data?.body || '';
      if (body) {
        showToast(`${title}: ${body}`, 'info');
      }
    });
  }, [showToast, user?.uid]);
  const hasPendingSignup = Boolean(sessionStorage.getItem('pendingSignupStep'));
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showJourneyMap, setShowJourneyMap] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [isCapsuleExpanded, setIsCapsuleExpanded] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);
  // Use sessionStorage so the intro never re-appears within the same browser session,
  // even if App remounts or the user switches tabs (which can cause re-renders).
  const [showOpeningIntro, setShowOpeningIntro] = useState(
    () => !sessionStorage.getItem('sapere:intro-shown')
  );
  const [openingIntroVisible, setOpeningIntroVisible] = useState(
    () => !sessionStorage.getItem('sapere:intro-shown')
  );
  const introShownOnceRef = useRef(!!sessionStorage.getItem('sapere:intro-shown'));
  const [isStandaloneIntro, setIsStandaloneIntro] = useState(() => isStandaloneAppDisplay());
  const [verificationChecking, setVerificationChecking] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  
  const handleChallengeBack = useCallback(() => {
    setActiveTab('Dashboard');
  }, []);
  
  // Scroll tracking for mobile capsule
  const [isVisible, setIsVisible] = useState(true);
  // Desktop sidebar already exposes the same quick actions, so the floating
  // mobile capsule is only useful below the layout breakpoint. We render it
  // conditionally rather than rely on CSS, because the capsule's JSX sets
  // `display: 'flex'` inline which beats stylesheet `display: none`.
  const [isMobileViewport, setIsMobileViewport] = useState(() =>
    typeof window === 'undefined' ? false : window.innerWidth < 921
  );
  useEffect(() => {
    const onResize = () => setIsMobileViewport(window.innerWidth < 921);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setIsVisible(false);
      // Auto-close open menus when scrolling away
      setIsCapsuleExpanded(false);
      setShowNotifs(false);
    } else {
      setIsVisible(true);
    }
  });


  useEffect(() => {
    const standaloneQuery = window.matchMedia?.('(display-mode: standalone)');
    const fullscreenQuery = window.matchMedia?.('(display-mode: fullscreen)');
    const updateStandaloneState = () => setIsStandaloneIntro(isStandaloneAppDisplay());

    updateStandaloneState();
    standaloneQuery?.addEventListener?.('change', updateStandaloneState);
    fullscreenQuery?.addEventListener?.('change', updateStandaloneState);
    return () => {
      standaloneQuery?.removeEventListener?.('change', updateStandaloneState);
      fullscreenQuery?.removeEventListener?.('change', updateStandaloneState);
    };
  }, []);

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    subject: '',
    level: 'Year 10'
  });

  const [profile, setProfile] = useState(null);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const unreadCount = notifications.filter(n => !n.read).length;

  // Real listener for notifications
  useEffect(() => {
    if (!user?.uid) return undefined;
    const q = query(
      collection(db, 'users', user.uid, 'notifications'),
      orderBy('timestamp', 'desc'),
      limit(10)
    );
    return onSnapshot(q, (snap) => {
      setNotifications(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => {
      console.warn('[App] Notifications listener failed:', err);
    });
  }, [user?.uid]);

  const handleMarkAsRead = async () => {
    if (!user?.uid || unreadCount === 0) return;
    const { writeBatch } = await import('firebase/firestore');
    const batch = writeBatch(db);
    notifications.filter(n => !n.read).forEach(n => {
      batch.update(doc(db, 'users', user.uid, 'notifications', n.id), { read: true });
    });
    await batch.commit();
  };

  const handleApplyChallengeReset = async (notification) => {
    const metadata = notification?.metadata || {};
    if (!user?.uid || metadata.type !== 'challenge_reset') return;
    if (!isTodayDateKey(metadata.date)) {
      showToast('This reset is for another date.', 'info');
      return;
    }

    const cacheKey = getChallengeBootCacheKey(user.uid);
    const current = localCache.get(cacheKey) || {};
    const patch = metadata.challengeType === 'calc'
      ? {
          calcStatus: 'open',
          calcCompletedToday: false,
          calcAbandonedToday: false,
        }
      : {
          dailyStatus: 'open',
          todayCompleted: false,
          abandonedToday: false,
        };

    localCache.set(cacheKey, {
      ...current,
      date: metadata.date,
      ...patch,
      resetAppliedAt: Date.now(),
      resetVersion: metadata.resetVersion || Date.now(),
      savedAt: Date.now(),
    });
    window.dispatchEvent(new Event('sapere-challenge-reset-applied'));

    try {
      await updateDoc(doc(db, 'users', user.uid, 'notifications', notification.id), {
        read: true,
        resetApplied: true
      });
    } catch (err) {
      console.warn('Could not mark reset notification applied:', err?.code || err);
    }

    setShowNotifs(false);
    setActiveTab('Challenge');
    showToast('Reset applied on this device.', 'success');
  };

  // Admin grading-queue / reports toasts are now driven by AdminFeedContext —
  // a single shared listener handles both badge counts (Sidebar), pending
  // list (Dashboard), and new-item toasts. No per-component subscription.

  useEffect(() => {
    if (!user?.uid) {
      setProfile(null);
      setProfileLoaded(false);
      return undefined;
    }
    const cacheKey = getProfileCacheKey(user.uid);
    const cachedProfile = localCache.get(cacheKey);
    if (cachedProfile && typeof cachedProfile === 'object') {
      setProfile(cachedProfile);
      setProfileLoaded(true);
    } else {
      setProfileLoaded(false);
    }
    const ref = doc(db, 'users', user.uid);
    return onSnapshot(ref, (snap) => {
      const nextProfile = snap.exists() ? snap.data() : null;
      setProfile(nextProfile);
      setProfileLoaded(true);
      if (nextProfile) {
        localCache.set(cacheKey, nextProfile);
      } else {
        localCache.remove(cacheKey);
      }
    }, (err) => {
      console.error('Profile listener error:', err);
      if (!cachedProfile) {
        setProfile(null);
        setProfileLoaded(true);
      }
    });
  }, [user?.uid]);

  const fallbackUrl = useMemo(() => {
    if (user?.photoURL) return user.photoURL;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.email || 'sapere')}`;
  }, [user?.photoURL, user?.email]);

  const avatarUrl = profile?.avatarUrl || (profile?.avatarStyle && profile?.avatarSeed
    ? `https://api.dicebear.com/7.x/${profile.avatarStyle}/svg?seed=${encodeURIComponent(profile.avatarSeed)}`
    : fallbackUrl);

  const introName = useMemo(() => {
    const rawName = profile?.firstName
      || profile?.displayName?.split(' ')[0]
      || user?.displayName?.split(' ')[0]
      || user?.email?.split('@')[0]
      || 'Andrew';
    // firstName may hold a full name ("Anna de Xavier") — greet with the given name only
    const givenName = String(rawName).trim().split(/\s+/)[0] || 'Andrew';
    return givenName.charAt(0).toUpperCase() + givenName.slice(1);
  }, [profile?.displayName, profile?.firstName, user?.displayName, user?.email]);

  const introGreeting = useMemo(() => getTimeGreeting(), []);

  // Student year level for key concept (e.g. "Year 1", "Year 10")
  const introYearLevel = useMemo(() => {
    if (isAdmin) return ''; // admin sees random concept from any year
    return profile?.year || '';
  }, [isAdmin, profile?.year]);

  // Stage 6 course (Standard / Advanced / Extension 1 / Extension 2) so the
  // key concept matches a Year 11/12 student's actual course.
  const introCourse = useMemo(() => {
    if (isAdmin) return '';
    return profile?.assignedCourse || profile?.course || '';
  }, [isAdmin, profile?.assignedCourse, profile?.course]);

  useEffect(() => {
    if (!user?.uid) {
      // User logged out — reset so next login gets the intro
      introShownOnceRef.current = false;
      sessionStorage.removeItem('sapere:intro-shown');
      setShowOpeningIntro(false);
      setOpeningIntroVisible(false);
      return undefined;
    }
    if (!profileLoaded && !isAdmin) return undefined;
    // Only show once per session — don't re-trigger on profile reloads / re-renders
    if (introShownOnceRef.current) return undefined;
    introShownOnceRef.current = true;
    sessionStorage.setItem('sapere:intro-shown', '1');

    setShowOpeningIntro(true);
    setOpeningIntroVisible(true);
  }, [isAdmin, profileLoaded, user?.uid]);

  useEffect(() => {
    if (!showOpeningIntro) return undefined;
    // Duration: greeting + name animation + concept typewriter + reading time
    const greetingAnimMs = (introGreeting.length + introName.length) * 80 + 600;
    const concept = getRandomConcept(introYearLevel, introCourse);
    const conceptMs = concept.length * 28 + 1800; // typing time + reading pause
    const messageDuration = greetingAnimMs + conceptMs;
    const timer = window.setTimeout(() => {
      setOpeningIntroVisible(false);
    }, messageDuration);
    return () => window.clearTimeout(timer);
  }, [introGreeting, introName, introYearLevel, showOpeningIntro]);

  const hasProfile = Boolean(profile);
  const handleRefreshStudents = useCallback(async (silent = false, forceRefresh = false) => {
    // 1. Guard: Wait for both auth user and Firestore profile to be certain of isAdmin status
    if (!user || !profileLoaded) {
      // Profile not yet loaded — clear the initial loading spinner to avoid getting stuck
      setLoading(false);
      return;
    }

    // 2. Optimization: Regular students who haven't completed setup yet shouldn't trigger full fetches.
    // FIX: Must call setLoading(false) here too, because loading starts as true on mount.
    // Without this, new students who haven't finished signup see an infinite loading spinner.
    if (!hasProfile && !isAdmin) {
      setLoading(false);
      return;
    }

    // Show the full-page loading spinner only on non-silent calls.
    // Silent calls (background refreshes after quiz etc.) skip the spinner
    // but ALWAYS clear the loading state in finally so we don't get stuck.
    if (!silent) setLoading(true);

    try {
      const data = await studentService.getStudents(user.uid, isAdmin, { forceRefresh });
      setStudents(data);
      setLoadError('');
    } catch (err) {
      setStudents([]);
      setLoadError('We couldn\'t load your students. Please try again.');
      console.error(err);
    } finally {
      setLoading(false); // always clear — loading starts as true on mount
    }
  }, [user, profileLoaded, hasProfile, isAdmin]);


  useEffect(() => {
    if (user) {
      handleRefreshStudents(true);
    }
    // Intentionally omit handleRefreshStudents from deps: its identity changes when
    // profileLoaded/hasProfile update, which would retrigger this effect and overwrite
    // a forceRefresh Sync result with stale cached data.
    // profileLoaded is included so non-admin students wait for profile before fetching.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid, isAdmin, profileLoaded]);

  const handleAddStudent = async () => {
    if (!newStudent.name || !newStudent.subject || !newStudent.email) {
      showToast("Please fill in all fields including the student's email.", 'warning');
      return;
    }
    
    try {
      await studentService.addStudent(user.uid, newStudent);
      setNewStudent({ name: '', email: '', subject: '', level: 'Year 10' });
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      showToast("Error adding student. Make sure Firestore is enabled.", 'error');
    }
  };

  if (!user) {
    return (
      <AnimatePresence mode="wait">
        {authMode === 'login' ? (
          <Login key="login" onToggleMode={() => setAuthMode('signup')} />
        ) : (
          <Signup key="signup" onToggleMode={() => setAuthMode('login')} />
        )}
      </AnimatePresence>
    );
  }

  if (authMode !== 'login' && ((hasPendingSignup && !profile) || (profileLoaded && !profile && !isAdmin))) {
    return <Signup key="signup-pending" onToggleMode={() => setAuthMode('login')} />;
  }

  const isPasswordProvider = user?.providerData?.some((p) => p?.providerId === 'password');

  // Only block for email verification if the profile is ALREADY complete (not during signup)
  const isProfileComplete = profile && (profile.role === 'parent' || (profile.role === 'student' && profile.firstName));
  if (!user.emailVerified && isPasswordProvider && isProfileComplete) {
    const handleCheckVerification = async () => {
      try {
        setVerificationChecking(true);
        setVerificationMessage('');
        const refreshedUser = await refreshUser();
        if (!refreshedUser?.emailVerified) {
          setVerificationMessage('Email verification is not updated yet. Please open the verification link, then try again.');
        }
      } catch (err) {
        console.error('Verification refresh failed:', err);
        setVerificationMessage('Could not refresh your verification status. Please try signing out and back in.');
      } finally {
        setVerificationChecking(false);
      }
    };

    const handleResendVerification = async () => {
      try {
        setVerificationChecking(true);
        setVerificationMessage('');
        await resendVerificationEmail();
        setVerificationMessage('A new verification email has been sent. Please check your inbox and spam folder.');
      } catch (err) {
        console.error('Resend verification failed:', err);
        setVerificationMessage(err?.message || 'Could not resend the verification email right now.');
      } finally {
        setVerificationChecking(false);
      }
    };

    return (
      <AuthLayout
        eyebrow="One last step"
        title="Verify your email"
        description={`We've sent a verification email to ${user.email}. Please confirm it to access the platform.`}
        sideLabel="Secure onboarding"
        sideTitle="A polished start for every family."
        sideDescription="Your account stays protected while keeping the setup flow calm, clean, and aligned with the Sapere look."
        sideStats={[
          { value: 'Secure', label: 'email confirmation' },
          { value: '1 min', label: 'to complete setup' },
        ]}
        sidePoints={[
          'Check your inbox and spam folder for the verification email',
          'Return after confirming to unlock the full platform',
          'Use the same email address you signed up with',
        ]}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="auth-verify-card"
        >
          <div className="auth-verify-card__icon">
            <AlertCircle size={30} />
          </div>
          <div className="auth-verify-card__copy">
            <h2>Email sent successfully</h2>
            <p>
              Verify <strong>{user.email}</strong> to continue into your account.
            </p>
          </div>
          {verificationMessage && (
            <div className="auth-message auth-message--success" style={{ width: '100%' }}>
              {verificationMessage}
            </div>
          )}
          <button onClick={handleCheckVerification} disabled={verificationChecking} className="auth-submit">
            {verificationChecking ? 'Checking...' : "I've verified, continue"}
            <ArrowRight size={18} />
          </button>
          <button onClick={handleResendVerification} disabled={verificationChecking} className="app-button app-button--secondary" style={{ width: '100%' }}>
            Resend verification email
          </button>
          <button onClick={logout} className="auth-submit">
            Sign out and try again
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </AuthLayout>
    );
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div className="app-loading">
          <div className="app-spinner"></div>
        </div>
      );
    }

    if (loadError) {
      return (
        <div className="app-page">
          <div className="app-page__header">
            <div className="app-page__title">
              <h2>Something needs attention</h2>
              <p>{loadError}</p>
            </div>
          </div>
          <div className="app-panel page-card">
            <div className="app-empty">
              If you just enabled Firestore or updated rules, refresh the page.
            </div>
            <div style={{ marginTop: 12, display: 'grid', gap: 12 }}>
              <button className="app-button app-button--primary" onClick={() => window.location.reload()}>
                Refresh
              </button>
              <button className="app-button app-button--secondary" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (selectedStudentId) {
      return (
        <StudentDetail 
          studentId={selectedStudentId} 
          onBack={() => setSelectedStudentId(null)} 
        />
      );
    }


    switch (activeTab) {
      case 'Dashboard':
        return (
          <Dashboard
            students={students}
            onAddStudent={() => setIsModalOpen(true)}
            onRefreshStudents={handleRefreshStudents}
            onSelectStudent={(id) => setSelectedStudentId(id)}
            onShowLeaderboard={() => setShowLeaderboard(true)}
            setActiveTab={handleTabChange}
            onOpenJourneyMap={() => setShowJourneyMap(true)}
          />
        );
      case 'Students':
        return (
          <StudentList 
            students={students} 
            onAddStudent={() => setIsModalOpen(true)} 
            onRefreshStudents={handleRefreshStudents}
            onSelectStudent={(id) => setSelectedStudentId(id)}
          />
        );
      case 'Schedule':
        return <Schedule students={students} />;
      case 'Challenge':
        return (
          <DailyChallenge 
            key={`challenge-${user?.uid}`}
            onBack={handleChallengeBack} 
            setIsLocked={setIsLocked} 
          />
        );
      case 'Curriculum':
        return <Curriculum />;
      case 'ExamPrep':
        return <ExamPrep profile={profile} onExamActiveChange={setExamInProgress} />;
      case 'Library':
        return <Library />;
      case 'Reports':
        return <ReportsAdmin />;
      case 'Settings':
        return <Settings />;
      default:
        return (
          <div className="app-placeholder">
            {activeTab} section is under development.
          </div>
        );
    }
  };

  const handleTabChange = (tab) => {
    if (isLocked) {
      showToast("Please finish your current challenge before switching tabs.", 'warning');
      return;
    }
    setActiveTab(tab);
    setSelectedStudentId(null);
  };

  return (
    <div className={`app-shell ${!isAdmin ? 'app-shell--protected' : ''} ${isScreenProtected ? 'app-shell--blurred' : ''}`}>
      <AnimatePresence>
        {isScreenProtected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="protection-overlay"
          >
            <AlertCircle size={48} style={{ color: '#ef4444', marginBottom: '20px' }} />
            <h2>Screen Protected</h2>
            <p>For security, content is hidden when the browser is inactive.</p>
            <p style={{ marginTop: '12px', fontSize: '0.9rem' }}>Return to the app to continue.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showOpeningIntro && openingIntroVisible && (
          <OpeningIntro
            name={introName}
            greeting={introGreeting}
            yearLevel={introYearLevel}
            course={introCourse}
            onDone={() => setShowOpeningIntro(false)}
          />
        )}
      </AnimatePresence>

      {!examInProgress && (
        <Sidebar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          isLocked={isLocked}
          onShowLeaderboard={() => setShowLeaderboard(true)}
          onShowNotifs={() => { setShowNotifs(prev => !prev); if (!showNotifs) handleMarkAsRead(); }}
          unreadCount={unreadCount}
        />
      )}
      <div className="app-shell__main" style={examInProgress ? { padding: 0 } : undefined}>
        <ErrorBoundary key={activeTab}>
          <Suspense fallback={<div className="app-loading"><div className="app-spinner"></div></div>}>
            {renderContent()}
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* ── Journey Map overlay — rendered via portal to escape filter/stacking context ── */}
      {showJourneyMap && createPortal(
        <CurriculumGraph3D profile={profile} onClose={() => setShowJourneyMap(false)} />,
        document.body
      )}

      {/* ── Version Update Banner ── */}
      <AnimatePresence>
        {newVersionAvailable && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            style={{
              position: 'fixed',
              top: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 9999,
              backgroundColor: '#1e1b4b',
              color: '#fff',
              padding: '8px 24px',
              borderRadius: '100px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 0 0 100vw rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,0,0.3)',
              border: '2px solid #6366f1',
              backdropFilter: 'blur(20px)',
              width: 'max-content',
              maxWidth: '90vw',
              animation: 'pulse 2s infinite'
            }}
          >
            <div style={{ width: '12px', height: '12px', backgroundColor: '#6366f1', borderRadius: '50%', boxShadow: '0 0 15px #6366f1' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1rem', fontWeight: 900, whiteSpace: 'nowrap' }}>Update Required</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>New features are ready for you.</span>
            </div>
            <button 
              onClick={handleUpdateApp}
              style={{
                backgroundColor: '#fff',
                color: '#6366f1',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              Update Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <div className="app-modal">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="app-modal__backdrop"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="app-panel app-modal__card"
            >
              <h3>Add New Student</h3>
              <div className="app-form-grid">
                <div className="app-form-field">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                    placeholder="e.g. John Doe" 
                  />
                </div>
                <div className="app-form-field">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                    placeholder="student@example.com" 
                  />
                </div>
                <div className="app-form-field">
                  <label>Subject</label>
                  <input 
                    type="text" 
                    value={newStudent.subject}
                    onChange={(e) => setNewStudent({...newStudent, subject: e.target.value})}
                    placeholder="e.g. Mathematics" 
                  />
                </div>
                <div className="app-form-field">
                  <label>Level</label>
                  <select 
                    value={newStudent.level}
                    onChange={(e) => setNewStudent({...newStudent, level: e.target.value})}
                  >
                    <option value="Year 7">Year 7</option>
                    <option value="Year 8">Year 8</option>
                    <option value="Year 9">Year 9</option>
                    <option value="Year 10">Year 10</option>
                    <option value="Year 11">Year 11</option>
                    <option value="Year 12">Year 12</option>
                  </select>
                </div>
                <button 
                  className="app-button app-button--primary"
                  onClick={handleAddStudent}
                >
                  Save Student
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <LeaderboardModal 
        open={showLeaderboard} 
        onClose={() => setShowLeaderboard(false)} 
        currentUserId={user?.uid} 
        students={students}
      />

      {isMobileViewport && createPortal(
        <>
          <motion.div
            className="mobile-user-capsule"
            initial={{ y: 0, opacity: 1 }}
            animate={{ 
              y: (isVisible && !isLocked) ? 0 : -100,
              opacity: (isVisible && !isLocked) ? 1 : 0,
              width: isCapsuleExpanded ? 'auto' : '52px'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ 
              display: 'flex', 
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}
          >
            <div 
              className="mobile-user-capsule__avatar" 
              onClick={() => {
                const nextState = !isCapsuleExpanded;
                setIsCapsuleExpanded(nextState);
                if (!nextState) setShowNotifs(false);
              }}
              style={{ cursor: 'pointer', flexShrink: 0 }}
            >
              <img src={avatarUrl} alt="Avatar" />
            </div>

            <AnimatePresence>
              {isCapsuleExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <div className="mobile-user-capsule__divider" />

                  <button 
                    className="mobile-user-capsule__notif" 
                    onClick={() => {
                      setShowLeaderboard(true);
                      setIsCapsuleExpanded(false);
                    }}
                  >
                    <Trophy size={20} />
                  </button>

                  <div className="mobile-user-capsule__divider" />

                  <button 
                    className="mobile-user-capsule__notif" 
                    onClick={() => {
                      if (isLocked) {
                        showToast("Please finish your current challenge before switching tabs.", 'warning');
                        return;
                      }
                      setActiveTab('Settings');
                      setIsCapsuleExpanded(false);
                    }}
                    style={{ opacity: isLocked ? 0.5 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
                  >
                    <SettingsIcon size={20} />
                  </button>
                  
                  <div className="mobile-user-capsule__divider" />
                  
                  <button 
                    className="mobile-user-capsule__notif" 
                    onClick={() => {
                      setShowNotifs(!showNotifs);
                      if (!showNotifs) handleMarkAsRead();
                    }}
                  >
                    <Bell size={20} />
                    {unreadCount > 0 && <div className="mobile-user-capsule__badge" />}
                  </button>

                  <div className="mobile-user-capsule__divider" />
                  
                  <button 
                    onClick={() => {
                      if (isLocked) {
                        showToast("Please finish your current challenge before logging out.", 'warning');
                        return;
                      }
                      logout();
                    }} 
                    className="mobile-user-capsule__logout"
                    style={{ opacity: isLocked ? 0.5 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
                  >
                    <LogOut size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="mobile-user-capsule__version"
            role="button"
            tabIndex={0}
            title="Refresh app"
            onClick={handleUpdateApp}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleUpdateApp();
              }
            }}
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: (isVisible && !isLocked) ? 0 : -100,
              opacity: (isVisible && !isLocked) ? 1 : 0
            }}
            style={{ cursor: 'pointer' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            v{CURRENT_APP_VERSION}
          </motion.div>

          <AnimatePresence>
            {null}
          </AnimatePresence>
        </>,
        document.body
      )}

      {/* ── Notification Panel (always rendered, for all viewports) ── */}
      {createPortal(
        <AnimatePresence>
          {showNotifs && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowNotifs(false)}
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 9998,
                  background: 'rgba(15,23,42,0.4)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                }}
              />
              {/* Centering wrapper */}
              <div style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                pointerEvents: 'none',
              }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                style={{
                  pointerEvents: 'auto',
                  width: '100%',
                  maxWidth: '460px',
                  maxHeight: '78vh',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.99) 0%, rgba(248,246,255,0.99) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '32px',
                  border: '1px solid rgba(167,139,250,0.25)',
                  boxShadow: '0 32px 64px -12px rgba(99,102,241,0.18), 0 8px 24px -4px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Header */}
                <div style={{
                  padding: '22px 24px 18px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '12px',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem'
                    }}>🔔</div>
                    <div>
                      <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem', letterSpacing: '-0.01em' }}>
                        Notifications
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>
                        {notifications.filter(n => !n.read).length > 0
                          ? `${notifications.filter(n => !n.read).length} unread`
                          : 'All caught up'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowNotifs(false)}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#fff',
                      width: 32, height: 32,
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      transition: 'background 0.2s',
                    }}
                    onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                    onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                  >✕</button>
                </div>

                {/* Notification list */}
                <div style={{ overflowY: 'auto', padding: '12px', flex: 1 }}>
                  {notifications.length === 0 ? (
                    <div style={{
                      padding: '60px 20px',
                      textAlign: 'center',
                      color: '#94a3b8',
                    }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🎉</div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#64748b', marginBottom: 4 }}>No notifications yet</div>
                      <div style={{ fontSize: '0.8rem' }}>You're all caught up!</div>
                    </div>
                  ) : (
                    notifications.map((n) => {
                      const isUnread = !n.read;
                      const time = n.timestamp?.toDate ? n.timestamp.toDate() : null;
                      const timeStr = time ? time.toLocaleString('en-AU', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Just now';
                      const icon = n.title?.toLowerCase().includes('reset') ? '🔄'
                        : n.title?.toLowerCase().includes('challeng') ? '⚡'
                        : n.title?.toLowerCase().includes('xp') ? '✨'
                        : n.title?.toLowerCase().includes('review') ? '📝'
                        : '📣';
                      return (
                        <div key={n.id} style={{
                          display: 'flex',
                          gap: '12px',
                          padding: '14px 16px',
                          borderRadius: '18px',
                          marginBottom: '6px',
                          background: isUnread
                            ? 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(167,139,250,0.06) 100%)'
                            : 'rgba(255,255,255,0.6)',
                          border: isUnread
                            ? '1px solid rgba(99,102,241,0.15)'
                            : '1px solid rgba(167,139,250,0.08)',
                          transition: 'all 0.2s ease',
                          position: 'relative',
                        }}>
                          {isUnread && (
                            <div style={{
                              position: 'absolute', top: 14, right: 14,
                              width: 8, height: 8, borderRadius: '50%',
                              background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                              boxShadow: '0 0 6px rgba(99,102,241,0.5)',
                            }} />
                          )}
                          <div style={{
                            width: 40, height: 40, borderRadius: '14px', flexShrink: 0,
                            background: isUnread
                              ? 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(167,139,250,0.12))'
                              : 'rgba(167,139,250,0.08)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.1rem',
                          }}>
                            {icon}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: 700, fontSize: '0.87rem', color: '#1e1b4b', marginBottom: '3px', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                              {n.title}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.5, marginBottom: '6px' }}>
                              {n.body}
                            </div>
                            <div style={{ fontSize: '0.68rem', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.02em' }}>
                              {timeStr}
                            </div>
                            {n.metadata?.type === 'challenge_reset' && isTodayDateKey(n.metadata?.date) && !n.resetApplied && (
                              <button
                                onClick={() => handleApplyChallengeReset(n)}
                                style={{
                                  marginTop: 10, width: '100%', border: 'none', borderRadius: 12,
                                  padding: '9px 12px', background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                                  color: '#fff', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer',
                                  letterSpacing: '0.01em', boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
                                }}
                              >
                                🔄 Apply Reset
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

export default App;
