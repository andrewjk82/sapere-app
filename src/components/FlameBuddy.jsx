/**
 * FlameBuddy — floating coach in the bottom-right corner.
 * Visuals ported from flame_character_prototype.html.
 * Speaks friendly, conversational tips based on daily work + schedule.
 */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { localCache } from '../services/localCacheService';
import { getDueCount } from '../utils/secretNote';
import { normalizeSubjectLabel } from '../utils/subjectLabels';
import './FlameBuddy.css';

const CALM_UNTIL = 17; // 5 PM local
const DEADLINE = 24;

const COPY = {
  practice: [
    { msg: "Hey — still haven't done today's practice yet?", sub: "It's a quick one. Start now and you'll feel so much better after. 😊" },
    { msg: "Pssst… your daily practice is waiting for you.", sub: "Afternoon's a great time to knock it out. Want to try?" },
    { msg: "Okay friend, evening's here and practice is still open…", sub: "Let's do it together? The longer you wait, the harder it feels. 😟" },
    { msg: "Almost midnight!! We really should finish practice today.", sub: "Come on — one short session so your streak stays alive. 😠" },
  ],
  sprint: [
    { msg: "Oh, and the calculation sprint is still open!", sub: "Just a few questions — like three minutes. Easy win." },
    { msg: "Perfect little window for your calculation sprint.", sub: "Quick questions, done before you know it." },
    { msg: "Hey — sprint still needs you!", sub: "Only a few minutes. You can squeeze it in right now." },
    { msg: "Still no sprint today… last chance before the day ends!", sub: "I believe in you — let's finish it now. 😤" },
  ],
  bothDone: [
    { msg: "You crushed today's practice — I'm so proud of you! 🔥", sub: "Rest a bit, or poke around the Journey Map if you're curious." },
  ],
  secretNote: [
    { msg: "Hey, your Secret Note has a few things to review.", sub: "A quick look now means those mistakes won't stick. Want to peek?" },
  ],
  idle: [
    { msg: "I'm right here if you need a little nudge!", sub: "Tap me anytime — happy to chat." },
  ],
};

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const urgencyFor = (hour) => clamp((hour - CALM_UNTIL) / (DEADLINE - CALM_UNTIL), 0, 1);
const stageIndex = (t) => (t < 0.2 ? 0 : t < 0.5 ? 1 : t < 0.78 ? 2 : 3);

const parseSessionStartMs = (s) => {
  try {
    if (!s?.date || !s?.startTime) return 0;
    const timeMatch = String(s.startTime).match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!timeMatch) return new Date(`${s.date}T12:00:00`).getTime();
    let hours = parseInt(timeMatch[1], 10);
    const minutes = parseInt(timeMatch[2], 10);
    const period = timeMatch[3].toUpperCase();
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    const [y, m, d] = s.date.split('-').map(Number);
    return new Date(y, m - 1, d, hours, minutes).getTime();
  } catch {
    return 0;
  }
};

/** "today at 3:30 PM" / "tomorrow at …" / "Wed, 22 Jul at …" */
const friendlyWhen = (dateStr, startTime) => {
  if (!dateStr) return startTime || 'soon';
  const time = startTime || '';
  const todayStr = new Date().toLocaleDateString('en-CA');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomStr = tomorrow.toLocaleDateString('en-CA');
  if (dateStr === todayStr) return time ? `today at ${time}` : 'today';
  if (dateStr === tomStr) return time ? `tomorrow at ${time}` : 'tomorrow';
  try {
    const d = new Date(`${dateStr}T12:00:00`);
    const label = d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' });
    return time ? `${label} at ${time}` : label;
  } catch {
    return time ? `${dateStr} at ${time}` : dateStr;
  }
};

const clipText = (text, max = 100) => {
  const t = String(text || '').replace(/\s+/g, ' ').trim();
  if (!t) return '';
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
};

/** Friendly schedule bubble for the next class + homework nudge. */
const buildScheduleSpeech = (session) => {
  if (!session) {
    return {
      mood: 'idle',
      eyebrow: 'Schedule',
      msg: "Hmm, nothing booked on your calendar right now.",
      sub: "When your tutor adds a class, I'll remind you here — promise!",
      cta: null,
      key: 'sched-empty',
    };
  }

  const subject = normalizeSubjectLabel(session.subject || 'class');
  const when = friendlyWhen(session.date, session.startTime);
  const hw = clipText(session.homework);
  const hwDone = Boolean(session.isHomeworkCompleted);

  let msg = `Hey! Just a heads-up — you've got ${subject} ${when}.`;
  let sub = "I'll be rooting for you. Bring any questions you've been stuck on!";
  let mood = 'hint';

  if (hw && !hwDone) {
    sub = `Also… don't forget your homework: "${hw}" Want me to keep reminding you? You've got this! 💪`;
    mood = 'thinking';
  } else if (hw && hwDone) {
    sub = "And nice one — homework for that lesson is already ticked off. ✨ You're ahead of the game!";
    mood = 'cheer';
  }

  // Class is later today → a bit more urgent energy
  const todayStr = new Date().toLocaleDateString('en-CA');
  if (session.date === todayStr && !hwDone) {
    msg = `Today's the day! ${subject} is ${when.replace(/^today at /, 'at ')}.`;
    if (hw) {
      sub = `Before you go, try to finish: "${hw}" — future-you will thank you.`;
      mood = 'thinking';
    } else {
      sub = "Any last questions? Write them down so you don't forget in class.";
      mood = 'hint';
    }
  }

  return {
    mood,
    eyebrow: 'Your schedule',
    msg,
    sub,
    cta: null,
    key: `sched-${session.id || session.date}-${session.startTime || ''}-${hwDone ? 'hw1' : 'hw0'}`,
  };
};

function useLocalHour() {
  const [, force] = useState(0);
  useEffect(() => {
    const id = setInterval(() => force((n) => n + 1), 60 * 1000);
    return () => clearInterval(id);
  }, []);
  const d = new Date();
  return d.getHours() + d.getMinutes() / 60;
}

function FlameSvg() {
  return (
    <svg viewBox="0 0 100 130" width="88" height="114" aria-hidden>
      <defs>
        <filter id="fb-softGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
          </feMerge>
        </filter>
        <linearGradient id="fb-outerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#6E1A08" />
          <stop offset="30%" stopColor="#C43D12" />
          <stop offset="60%" stopColor="#F0872A" />
          <stop offset="85%" stopColor="#FFC93C" />
          <stop offset="100%" stopColor="#FFE9A8" />
        </linearGradient>
        <linearGradient id="fb-innerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C43D12" />
          <stop offset="40%" stopColor="#F0872A" />
          <stop offset="70%" stopColor="#FFD24C" />
          <stop offset="100%" stopColor="#FFFBEF" />
        </linearGradient>
        <radialGradient id="fb-sheenGrad" cx="35%" cy="30%" r="45%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="fb-thinkOuterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#061F3D" />
          <stop offset="30%" stopColor="#0C3A66" />
          <stop offset="60%" stopColor="#2E7FCC" />
          <stop offset="100%" stopColor="#C7E8FF" />
        </linearGradient>
        <linearGradient id="fb-thinkInnerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0C3A66" />
          <stop offset="45%" stopColor="#2E7FCC" />
          <stop offset="75%" stopColor="#8FCBFF" />
          <stop offset="100%" stopColor="#F5FBFF" />
        </linearGradient>
        <linearGradient id="fb-urgentOuterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#4A0E0E" />
          <stop offset="30%" stopColor="#8E1F1F" />
          <stop offset="60%" stopColor="#D63838" />
          <stop offset="100%" stopColor="#FFC7B0" />
        </linearGradient>
        <linearGradient id="fb-urgentInnerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8E1F1F" />
          <stop offset="45%" stopColor="#D63838" />
          <stop offset="75%" stopColor="#FF8A65" />
          <stop offset="100%" stopColor="#FFF0E6" />
        </linearGradient>
        <linearGradient id="fb-cheerOuterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#1F3D08" />
          <stop offset="30%" stopColor="#3B6D11" />
          <stop offset="60%" stopColor="#7CBF2E" />
          <stop offset="100%" stopColor="#EFFAC0" />
        </linearGradient>
        <linearGradient id="fb-cheerInnerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3B6D11" />
          <stop offset="45%" stopColor="#7CBF2E" />
          <stop offset="75%" stopColor="#C7EE7E" />
          <stop offset="100%" stopColor="#FBFFEF" />
        </linearGradient>
        <linearGradient id="fb-hintOuterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C99A1E" />
          <stop offset="30%" stopColor="#F2C13B" />
          <stop offset="60%" stopColor="#FFDE7A" />
          <stop offset="100%" stopColor="#FFFCE8" />
        </linearGradient>
        <linearGradient id="fb-hintInnerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F2C13B" />
          <stop offset="45%" stopColor="#FFE38A" />
          <stop offset="100%" stopColor="#FFFFF6" />
        </linearGradient>
      </defs>
      <g className="fb-glow" filter="url(#fb-softGlow)" opacity="0.55">
        <path className="fb-flamePath" fill="url(#fb-outerGrad)" d="M30,40 C15.6,61 10,76.4 10,86 C10,97.1 18.3,110 30,110 C41.7,110 50,97.1 50,86 C50,76.4 44.4,61 30,40 Z" />
        <path className="fb-flamePath" fill="url(#fb-outerGrad)" d="M70,28 C55.6,54.4 50,73.8 50,85.8 C50,99.8 58.3,116 70,116 C81.7,116 90,99.8 90,85.8 C90,73.8 84.4,54.4 70,28 Z" />
        <path className="fb-flamePath" fill="url(#fb-outerGrad)" d="M50,6 C26,42 16,68 16,85 C16,105 30,126 50,126 C70,126 84,105 84,85 C84,68 74,42 50,6 Z" />
      </g>
      <g className="fb-outer">
        <path className="fb-flamePath" fill="url(#fb-outerGrad)" d="M30,40 C15.6,61 10,76.4 10,86 C10,97.1 18.3,110 30,110 C41.7,110 50,97.1 50,86 C50,76.4 44.4,61 30,40 Z" />
        <path className="fb-flamePath" fill="url(#fb-outerGrad)" d="M70,28 C55.6,54.4 50,73.8 50,85.8 C50,99.8 58.3,116 70,116 C81.7,116 90,99.8 90,85.8 C90,73.8 84.4,54.4 70,28 Z" />
        <path className="fb-flamePath" fill="url(#fb-outerGrad)" d="M50,6 C26,42 16,68 16,85 C16,105 30,126 50,126 C70,126 84,105 84,85 C84,68 74,42 50,6 Z" />
      </g>
      <g className="fb-inner">
        <path className="fb-flamePath" fill="url(#fb-innerGrad)" d="M50,44 C31.3,67.4 24,84.6 24,95.2 C24,107.6 34.8,122 50,122 C65.2,122 76,107.6 76,95.2 C76,84.6 68.7,67.4 50,44 Z" />
      </g>
      <ellipse cx="38" cy="75" rx="8" ry="14" fill="url(#fb-sheenGrad)" opacity="0.6" />
    </svg>
  );
}

/**
 * @param {object} props
 * @param {string} props.uid
 * @param {object} [props.profile]
 * @param {string} [props.activeTab]
 * @param {(tab: string) => void} [props.setActiveTab]
 * @param {boolean} [props.hidden]
 */
export default function FlameBuddy({ uid, profile, activeTab, setActiveTab, hidden = false }) {
  const hour = useLocalHour();
  const [tasks, setTasks] = useState({ dailyDone: false, calcDone: false, loaded: false });
  const [nextSession, setNextSession] = useState(null);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [dismissedKey, setDismissedKey] = useState('');
  const [cheerUntil, setCheerUntil] = useState(0);
  // Fairy-pop entrance: hidden → wait ~1s → scale/pop in.
  const [arrived, setArrived] = useState(false);
  const [enterAnim, setEnterAnim] = useState(false);

  const calcEnabled = profile?.calculationEnabled !== false;
  const today = new Date().toLocaleDateString('en-CA');

  // First mount this session: wait ~1s, then pop in like a fairy appearing.
  // Later remounts in the same tab session appear immediately (no re-delay).
  useEffect(() => {
    if (!uid || hidden) return undefined;
    let showTimer;
    let animTimer;
    let bubbleTimer;
    const sessionKey = `sapere:flame-buddy-arrived:${uid}`;
    let already = false;
    try {
      already = Boolean(sessionStorage.getItem(sessionKey));
    } catch { /* ignore */ }

    if (already) {
      setArrived(true);
      setEnterAnim(false);
      setBubbleOpen(true);
      return undefined;
    }

    showTimer = setTimeout(() => {
      setArrived(true);
      // Double-rAF so the browser paints the pre-enter frame before animating.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnterAnim(true));
      });
      try {
        sessionStorage.setItem(sessionKey, '1');
      } catch { /* ignore */ }
      // Speech bubble follows the pop (after the bounce settles).
      bubbleTimer = setTimeout(() => setBubbleOpen(true), 450);
    }, 1000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(animTimer);
      clearTimeout(bubbleTimer);
    };
  }, [uid, hidden]);

  // Load today's completion (same cheap point-reads as old nudge cards).
  const refreshTasks = useCallback(async () => {
    if (!uid) return;
    const cacheKey = `flame-buddy-tasks-${uid}`;
    const cached = localCache.get(cacheKey);
    if (cached?.date === today && cached.dailyDone && (cached.calcDone || !calcEnabled)) {
      setTasks({ dailyDone: true, calcDone: true, loaded: true });
      return;
    }
    try {
      const [dailySnap, calcSnap] = await Promise.all([
        getDoc(doc(db, 'users', uid, 'daily_stats', today)),
        calcEnabled ? getDoc(doc(db, 'users', uid, 'calc_stats', today)) : Promise.resolve(null),
      ]);
      const dailyDone = dailySnap.exists() && dailySnap.data().completed === true;
      const calcDone = !calcEnabled || (calcSnap?.exists() && calcSnap.data().completed === true);
      const next = { dailyDone, calcDone, loaded: true };
      setTasks(next);
      localCache.set(cacheKey, { date: today, ...next });
    } catch (e) {
      console.warn('[FlameBuddy] task status failed:', e?.code || e);
      setTasks((t) => ({ ...t, loaded: true }));
    }
  }, [uid, today, calcEnabled]);

  useEffect(() => {
    refreshTasks();
  }, [refreshTasks, activeTab]);

  // Next class + homework (for Schedule-tab coaching). Cached for the day.
  useEffect(() => {
    if (!uid) return undefined;
    let cancelled = false;
    const cacheKey = `flame-buddy-next-session-v1-${uid}`;
    const cached = localCache.get(cacheKey);
    if (cached?.date === today && cached.session !== undefined) {
      setNextSession(cached.session || null);
      // Still refresh in background when opening Schedule so homework flags stay fresh.
      if (activeTab !== 'Schedule') return undefined;
    }

    (async () => {
      try {
        const snap = await getDocs(query(collection(db, 'sessions'), where('studentId', '==', uid)));
        if (cancelled) return;
        const now = Date.now();
        const upcoming = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .filter((s) => parseSessionStartMs(s) > now)
          .sort((a, b) => parseSessionStartMs(a) - parseSessionStartMs(b));
        const next = upcoming[0] || null;
        // Keep only the fields we speak about (small cache payload).
        const slim = next
          ? {
              id: next.id,
              date: next.date || '',
              startTime: next.startTime || '',
              endTime: next.endTime || '',
              subject: next.subject || '',
              homework: next.homework || '',
              isHomeworkCompleted: Boolean(next.isHomeworkCompleted),
            }
          : null;
        setNextSession(slim);
        localCache.set(cacheKey, { date: today, session: slim });
      } catch (e) {
        console.warn('[FlameBuddy] session fetch failed:', e?.code || e);
      }
    })();

    return () => { cancelled = true; };
  }, [uid, today, activeTab]);

  // Cheer when daily practice completes.
  useEffect(() => {
    if (!uid) return undefined;
    const onDone = (e) => {
      if (e.detail?.uid && e.detail.uid !== uid) return;
      if (e.detail?.completed === false) return;
      setCheerUntil(Date.now() + 12_000);
      setTasks((t) => {
        const next = { ...t, dailyDone: true, loaded: true };
        localCache.set(`flame-buddy-tasks-${uid}`, { date: today, dailyDone: true, calcDone: t.calcDone });
        return next;
      });
      setBubbleOpen(true);
      setDismissedKey('');
    };
    window.addEventListener('sapere:daily-practice-completed', onDone);
    return () => window.removeEventListener('sapere:daily-practice-completed', onDone);
  }, [uid, today]);

  // End cheer mood after the celebration window.
  useEffect(() => {
    if (!cheerUntil) return undefined;
    const ms = Math.max(0, cheerUntil - Date.now());
    const t = setTimeout(() => setCheerUntil(0), ms);
    return () => clearTimeout(t);
  }, [cheerUntil]);

  const dueNotes = useMemo(() => {
    if (!uid) return 0;
    try {
      return getDueCount('daily', uid) + getDueCount('calc', uid);
    } catch {
      return 0;
    }
  }, [uid, activeTab, tasks]);

  const urgency = urgencyFor(hour);
  const stage = stageIndex(urgency);

  const situation = useMemo(() => {
    const cheering = Date.now() < cheerUntil;
    if (cheering) {
      return {
        mood: 'cheer',
        eyebrow: 'Great job',
        ...COPY.bothDone[0],
        cta: null,
        key: `cheer-${today}`,
      };
    }

    // On Schedule tab: talk about the next class + homework in a friendly voice.
    if (activeTab === 'Schedule') {
      return buildScheduleSpeech(nextSession);
    }

    const needDaily = !tasks.dailyDone;
    const needCalc = calcEnabled && !tasks.calcDone;

    if (!needDaily && !needCalc) {
      if (dueNotes > 0) {
        return {
          mood: 'hint',
          eyebrow: 'Secret Note',
          msg: COPY.secretNote[0].msg,
          sub: `${dueNotes} item${dueNotes === 1 ? '' : 's'} · ${COPY.secretNote[0].sub}`,
          cta: { label: 'Review now', tab: 'Challenge' },
          key: `note-${today}-${dueNotes}`,
        };
      }
      return {
        mood: 'idle',
        eyebrow: 'All set',
        ...COPY.bothDone[0],
        cta: null,
        key: `done-${today}`,
      };
    }

    // Prefer daily practice messaging first (matches old nudge priority).
    if (needDaily) {
      const line = COPY.practice[stage];
      const mood = stage >= 2 ? 'urgent' : stage >= 1 ? 'thinking' : 'idle';
      return {
        mood,
        eyebrow: 'Daily Practice',
        msg: line.msg,
        sub: line.sub,
        cta: { label: 'Start practice', tab: 'Challenge' },
        key: `daily-${today}-${stage}`,
      };
    }

    // Calc only left
    const line = COPY.sprint[stage];
    const mood = stage >= 2 ? 'urgent' : 'thinking';
    return {
      mood,
      eyebrow: 'Daily Calculation',
      msg: line.msg,
      sub: line.sub,
      cta: { label: 'Start sprint', tab: 'Challenge' },
      key: `calc-${today}-${stage}`,
    };
  }, [cheerUntil, tasks, calcEnabled, dueNotes, stage, today, activeTab, nextSession]);

  // Auto-open bubble when situation key changes (new day / tab / urgency / complete).
  useEffect(() => {
    if (!situation?.key) return;
    if (dismissedKey === situation.key) return;
    // Don't force bubble open on Challenge while user is mid-session.
    if (activeTab === 'Challenge') return;
    setBubbleOpen(true);
  }, [situation?.key, dismissedKey, activeTab]);

  if (hidden || !uid || !arrived) return null;

  const showBubble = bubbleOpen && dismissedKey !== situation.key;

  return (
    <div
      className={`fb-root${enterAnim ? ' fb-root--enter' : ' fb-root--pre'}`}
      role="complementary"
      aria-label="Flame coach"
    >
      <div className="fb-burst" aria-hidden />
      {showBubble && (
        <div className="fb-bubble">
          <div className="fb-bubble__eyebrow">{situation.eyebrow}</div>
          <p className="fb-bubble__msg">{situation.msg}</p>
          {situation.sub && <p className="fb-bubble__sub">{situation.sub}</p>}
          <div className="fb-bubble__actions">
            {situation.cta && (
              <button
                type="button"
                className="fb-bubble__cta"
                onClick={() => {
                  setActiveTab?.(situation.cta.tab);
                  setBubbleOpen(false);
                }}
              >
                {situation.cta.label}
              </button>
            )}
            <button
              type="button"
              className="fb-bubble__dismiss"
              onClick={() => {
                setDismissedKey(situation.key);
                setBubbleOpen(false);
              }}
            >
              Got it
            </button>
          </div>
        </div>
      )}

      <div
        className="fb-stage"
        title="Tap for a tip"
        onClick={() => {
          setDismissedKey('');
          setBubbleOpen((o) => !o);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setDismissedKey('');
            setBubbleOpen((o) => !o);
          }
        }}
      >
        <div className={`fb-flame ${situation.mood}`}>
          <div className="fb-flame-wrap">
            <div className="fb-aura" />
            <div className="fb-ember fb-ember1" />
            <div className="fb-ember fb-ember2" />
            <div className="fb-ember fb-ember3" />
            <FlameSvg />
            <div className="fb-sparkle fb-sparkle1" />
            <div className="fb-sparkle fb-sparkle2" />
            <div className="fb-sparkle fb-sparkle3" />
            <div className="fb-face">
              <div className="fb-eye fb-eyeL"><div className="fb-highlight" /></div>
              <div className="fb-eye fb-eyeR"><div className="fb-highlight" /></div>
              <div className="fb-mouth" />
            </div>
          </div>
        </div>
        <div className="fb-shadow" />
      </div>
    </div>
  );
}
