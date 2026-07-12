/**
 * FlameBuddy — floating coach in the bottom-right corner.
 * Visuals ported from flame_character_prototype.html.
 * Speaks friendly, conversational tips based on daily work + schedule.
 */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { localCache } from '../services/localCacheService';
import { getDueCount } from '../utils/secretNote';
import { normalizeSubjectLabel } from '../utils/subjectLabels';
import './FlameBuddy.css';

// Time-of-day stages for unfinished Daily Practice (local hours, float).
// 0 morning → 6 near midnight. Mood climbs with the stage.
// Placeholders (English only):
//   {name}      → " Chloe" or "" (leading space when present)
//   {Name}      → "Chloe" or "friend"
//   {heyName}   → "Hey Chloe" or "Hey"
//   {commaName} → ", Chloe" or ""
const PRACTICE_STAGES = [
  // 0 — morning / before noon
  {
    mood: 'idle',
    lines: [
      { msg: "{heyName}! Now's a perfect time to start today's practice.", sub: "Morning brain is fresh — you'll fly through it." },
      { msg: "Psst{name}… today's practice is unlocked and waiting for you.", sub: "Kick it off early and the rest of the day feels lighter." },
      { msg: "Good morning{commaName}! Shall we tick off Daily Practice before anything else?", sub: "Small win first. Future-you will high-five you later." },
      { msg: "I saved you a seat at the practice desk{commaName}. Ready when you are!", sub: "No rush… okay, a tiny rush. It feels good to start." },
    ],
  },
  // 1 — early afternoon
  {
    mood: 'idle',
    lines: [
      { msg: "{Name}, lunch brain is perfect for a quick practice session.", sub: "Tenish minutes and you're done. Want to go?" },
      { msg: "Hey {Name}, practice is still sitting there looking lonely.", sub: "Give it some love this afternoon?" },
      { msg: "Midday check-in{commaName}: have we practiced yet? (Spoiler: not yet.)", sub: "Hop in now while the day's still soft and easy." },
      { msg: "If you start now{commaName}, you could be finished before the next snack.", sub: "That's basically free progress. I'm just saying." },
    ],
  },
  // 2 — late afternoon (~3–6)
  {
    mood: 'thinking',
    lines: [
      { msg: "Afternoon's rolling on{commaName}, and practice is still open…", sub: "This is usually the sweet spot — not too early, not too late." },
      { msg: "Okay {Name}, official nudge: it's practice o'clock.", sub: "You'll feel so smug when it's done. The good kind of smug." },
      { msg: "I believe in you{commaName}. Also I believe practice won't do itself.", sub: "One short session. Then free time, guilt-free." },
      { msg: "Still on the to-do list{commaName}: Daily Practice.", sub: "Cross it off before dinner and the evening is yours." },
    ],
  },
  // 3 — early evening (~6–8)
  {
    mood: 'thinking',
    lines: [
      { msg: "Evening already{commaName}? Practice still says hi from the Challenge tab.", sub: "Do it now and you can actually relax after." },
      { msg: "Hey {Name} — we still haven't practiced today.", sub: "I won't tell Andrew… yet. Let's just finish it, yeah?" },
      { msg: "{Name}, dinner can wait five more minutes. Practice first?", sub: "Okay maybe not dinner. But you get the idea." },
      { msg: "Your streak is peeking around the corner{commaName}.", sub: "Don't leave it hanging. Quick session?" },
    ],
  },
  // 4 — late evening (~8–10)
  {
    mood: 'thinking',
    lines: [
      { msg: "It's getting late{commaName}, and practice is still open… just saying.", sub: "Better now than at 11 when I get dramatic." },
      { msg: "Friendly reminder{commaName}: practice is unfinished.", sub: "Andrew would say the same thing, but nicer if you do it first." },
      { msg: "Night mode unlocked{commaName}. Practice mode… still waiting.", sub: "Knock it out before the couch absorbs you completely." },
      { msg: "{Name}, you and I both know it'll take less time than scrolling.", sub: "One practice. Then you can scroll with a clear conscience." },
    ],
  },
  // 5 — ~10–11pm
  {
    mood: 'urgent',
    lines: [
      { msg: "Okay {Name}, it's getting seriously late — practice is still not done!", sub: "Start now so we don't enter full panic mode at 11." },
      { msg: "Clock's loud tonight{commaName}. Practice is louder in my head.", sub: "Please? Your streak (and my nerves) will thank you." },
      { msg: "We're in the danger zone{commaName}. Practice still open.", sub: "If Andrew checks the dashboard later… let's make him smile, not sigh." },
      { msg: "Ten-o'clock energy{commaName}: still time, but not forever.", sub: "Short session. Big relief. Let's go." },
    ],
  },
  // 6 — ~11pm–midnight
  {
    mood: 'urgent',
    lines: [
      { msg: "{Name}, it's basically 11 — we need to start practice NOW.", sub: "Otherwise Andrew's going to start the famous lecture. Save us both." },
      { msg: "Midnight is way too close{commaName}, and practice is still empty!", sub: "Quick — before Andrew sends the 'did you practice?' message." },
      { msg: "I'm not yelling{commaName}. I'm urgently encouraging. PRACTICE.", sub: "Andrew's residual nagging power activates at this hour. Trust me." },
      { msg: "Last call for today's practice{commaName} — for real this time.", sub: "Do it now or face Andrew tomorrow with the 'I forgot' face. Nope." },
      { msg: "{Name}. It's late. Practice. Please.", sub: "I can bounce. You can finish. Andrew can stay quiet. Win-win-win." },
    ],
  },
];

const SPRINT_STAGES = [
  {
    mood: 'idle',
    lines: [
      { msg: "Oh {Name} — calculation sprint is still open too!", sub: "Tiny set of questions. Like a warm-up for your brain." },
      { msg: "Sprint's waiting whenever you're ready{commaName}.", sub: "A few minutes and it's gone from your list." },
    ],
  },
  {
    mood: 'idle',
    lines: [
      { msg: "Calculation sprint still needs a little love{commaName}.", sub: "Perfect between other things — super short." },
      { msg: "Hey {Name}, don't forget the sprint after practice!", sub: "Or before. I'm flexible. The sprint is not." },
    ],
  },
  {
    mood: 'thinking',
    lines: [
      { msg: "Sprint check{commaName}: still unfinished.", sub: "Three-ish minutes. You've survived longer things." },
      { msg: "{Name}, calculation sprint is giving you the puppy eyes.", sub: "Don't leave it hanging all afternoon." },
    ],
  },
  {
    mood: 'thinking',
    lines: [
      { msg: "Evening sprint reminder for you{commaName}!", sub: "Quick numbers, then free evening. Deal?" },
      { msg: "Sprint's still on the board{commaName}.", sub: "Andrew likes completed sprints. Just putting that out there." },
    ],
  },
  {
    mood: 'thinking',
    lines: [
      { msg: "Late-night sprint still open{commaName}…", sub: "It's short. Your pillow can wait two more minutes." },
      { msg: "Don't let the sprint be the thing you 'meant to do'{commaName}.", sub: "Open Challenge, finish it, sleep heroically." },
    ],
  },
  {
    mood: 'urgent',
    lines: [
      { msg: "Sprint's almost out of time today{commaName}!", sub: "Hit it now before the clock wins." },
      { msg: "{Name}, calculation sprint: still not done, still very doable.", sub: "Last good window before midnight chaos." },
    ],
  },
  {
    mood: 'urgent',
    lines: [
      { msg: "It's late{commaName}, and the sprint is STILL open!", sub: "Finish it before Andrew asks about calculations tomorrow." },
      { msg: "Midnight sprint emergency{commaName} — sort of!", sub: "You're one short set away from a clean day. Go!" },
    ],
  },
];

const COPY = {
  bothDone: [
    { msg: "{Name}, you crushed today's practice — I'm so proud of you!", sub: "Rest a bit, or poke around the Journey Map if you're curious." },
    { msg: "Both done{commaName}? Look at you go!", sub: "I'm doing a little victory flicker over here." },
    { msg: "Practice complete{commaName}. Streak safe. Flame happy.", sub: "You've earned a break — seriously." },
    { msg: "That's a full day of work{commaName}. Nice one!", sub: "Andrew would be nodding approvingly right now." },
  ],
  // Soft, friendly Secret Note prompts. Count is phrased gently via {countPhrase}.
  secretNote: [
    {
      msg: "Hey {Name} — got a quiet minute?",
      sub: "Your Secret Note has {countPhrase} ready for a friendly rematch. No pressure — even one or two helps them stick less next time.",
    },
    {
      msg: "Psst{name}… your old mistakes are being very polite today.",
      sub: "There's {countPhrase} waiting in Secret Note. Peek when you feel like it — small reviews, big payoff.",
    },
    {
      msg: "{Name}, want a tiny brain-boost?",
      sub: "Secret Note has {countPhrase} lined up. Think of it as a chat with past-you, not a test.",
    },
    {
      msg: "Whenever you're free{commaName}, I've got something light.",
      sub: "{countPhraseCapital} in your Secret Note would love a quick look. Start with any one — you're allowed to stop anytime.",
    },
    {
      msg: "Hey {Name}, practice is done — nice work.",
      sub: "If you've got a spare moment, Secret Note has {countPhrase}. Totally optional, totally worth it.",
    },
  ],
  idle: [
    { msg: "I'm right here if you need a little nudge{commaName}!", sub: "Tap me anytime — happy to chat." },
  ],
};

/** Soft English for due-count (avoid "137 items"). */
const secretNoteCountPhrase = (n) => {
  if (n <= 0) return 'a few notes';
  if (n === 1) return 'one note';
  if (n <= 5) return 'a few notes';
  if (n <= 15) return 'a little stack of notes';
  if (n <= 40) return 'a decent pile of notes';
  if (n <= 80) return 'quite a few notes waiting';
  return 'a big stack of notes waiting';
};

/** Given-name only, English UI. Empty if unknown. */
const studentFirstName = (profile) => {
  const raw =
    (typeof profile?.firstName === 'string' && profile.firstName.trim()) ||
    (typeof profile?.displayName === 'string' && profile.displayName.trim()) ||
    (typeof profile?.name === 'string' && profile.name.trim()) ||
    '';
  if (!raw) return '';
  return raw.split(/\s+/)[0];
};

/** Fill name + optional count placeholders. */
const fillTemplate = (text, firstName, extras = {}) => {
  if (!text) return text;
  const n = firstName || '';
  let out = String(text)
    .replaceAll('{heyName}', n ? `Hey ${n}` : 'Hey')
    .replaceAll('{commaName}', n ? `, ${n}` : '')
    .replaceAll('{name}', n ? ` ${n}` : '')
    .replaceAll('{Name}', n || 'friend');
  Object.entries(extras).forEach(([key, val]) => {
    out = out.replaceAll(`{${key}}`, val == null ? '' : String(val));
  });
  return out;
};

/** Stable pick so the line doesn't change every re-render (changes by day + stage). */
const hashSeed = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return Math.abs(h);
};

const pickLine = (lines, seed, firstName = '', extras = {}) => {
  if (!lines?.length) return { msg: '', sub: '' };
  const line = lines[hashSeed(seed) % lines.length];
  return {
    msg: fillTemplate(line.msg, firstName, extras),
    sub: fillTemplate(line.sub, firstName, extras),
  };
};

/** Map local hour (0–24 float) → practice stage 0–6. */
const practiceStageForHour = (hour) => {
  if (hour < 12) return 0;
  if (hour < 15) return 1;
  if (hour < 18) return 2;
  if (hour < 20) return 3;
  if (hour < 22) return 4;
  if (hour < 23) return 5;
  return 6;
};

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
const buildScheduleSpeech = (session, firstName = '') => {
  const n = firstName || '';
  const hey = n ? `Hey ${n}` : 'Hey';
  const cn = n ? `, ${n}` : '';

  if (!session) {
    return {
      mood: 'idle',
      eyebrow: 'Schedule',
      msg: fillTemplate("Hmm{commaName}, nothing booked on your calendar right now.", firstName),
      sub: "When your tutor adds a class, I'll remind you here — promise!",
      cta: null,
      key: 'sched-empty',
    };
  }

  const subject = normalizeSubjectLabel(session.subject || 'class');
  const when = friendlyWhen(session.date, session.startTime);
  const hw = clipText(session.homework);
  const hwDone = Boolean(session.isHomeworkCompleted);

  let msg = `${hey}! Just a heads-up — you've got ${subject} ${when}.`;
  let sub = "I'll be rooting for you. Bring any questions you've been stuck on!";
  let mood = 'hint';

  if (hw && !hwDone) {
    sub = `Also… don't forget your homework: "${hw}" You've got this!`;
    mood = 'thinking';
  } else if (hw && hwDone) {
    sub = `And nice one${cn} — homework for that lesson is already ticked off. You're ahead of the game!`;
    mood = 'cheer';
  }

  // Class is later today → a bit more urgent energy
  const todayStr = new Date().toLocaleDateString('en-CA');
  if (session.date === todayStr && !hwDone) {
    msg = n
      ? `${n}, today's the day! ${subject} is ${when.replace(/^today at /, 'at ')}.`
      : `Today's the day! ${subject} is ${when.replace(/^today at /, 'at ')}.`;
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
  // Entrance phase: hidden → enter (pop) → ready.
  // Never park on an invisible "pre" frame — cancelled rAFs left the avatar
  // stuck at opacity 0. Remounts / already-seen sessions go straight to ready.
  const [phase, setPhase] = useState('hidden'); // hidden | enter | ready

  const calcEnabled = profile?.calculationEnabled !== false;
  const today = new Date().toLocaleDateString('en-CA');
  const firstName = useMemo(() => studentFirstName(profile), [profile]);

  // First appearance this browser session: wait ~1s, then fairy pop-in.
  // Later remounts in the same session appear immediately as "ready".
  useEffect(() => {
    if (!uid) return undefined;

    // Soft-hide (exam etc.) must not cancel a half-finished entrance forever.
    // When un-hidden again, if we already marked arrived → ready; else restart.
    if (hidden) return undefined;

    let cancelled = false;
    let showTimer;
    let settleTimer;
    let bubbleTimer;
    let safetyTimer;
    const sessionKey = `sapere:flame-buddy-arrived:${uid}`;
    let already = false;
    try {
      already = Boolean(sessionStorage.getItem(sessionKey));
    } catch { /* ignore */ }

    const goReady = (openBubble) => {
      if (cancelled) return;
      setPhase('ready');
      if (openBubble) setBubbleOpen(true);
      try { sessionStorage.setItem(sessionKey, '1'); } catch { /* ignore */ }
    };

    if (already) {
      goReady(true);
      return undefined;
    }

    // Absolute safety: never stay invisible more than 3.5s after becoming visible.
    safetyTimer = setTimeout(() => goReady(true), 3500);

    showTimer = setTimeout(() => {
      if (cancelled) return;
      setPhase('enter');
      try { sessionStorage.setItem(sessionKey, '1'); } catch { /* ignore */ }
      settleTimer = setTimeout(() => {
        if (!cancelled) setPhase('ready');
      }, 750);
      bubbleTimer = setTimeout(() => {
        if (!cancelled) setBubbleOpen(true);
      }, 450);
    }, 1000);

    return () => {
      cancelled = true;
      clearTimeout(showTimer);
      clearTimeout(settleTimer);
      clearTimeout(bubbleTimer);
      clearTimeout(safetyTimer);
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

  const stage = practiceStageForHour(hour);

  const situation = useMemo(() => {
    const seedBase = `${uid || 'anon'}-${today}`;
    const cheering = Date.now() < cheerUntil;
    if (cheering) {
      const line = pickLine(COPY.bothDone, `${seedBase}-cheer`, firstName);
      return {
        mood: 'cheer',
        eyebrow: 'Great job',
        msg: line.msg,
        sub: line.sub,
        cta: null,
        key: `cheer-${today}`,
      };
    }

    // On Schedule tab: talk about the next class + homework in a friendly voice.
    if (activeTab === 'Schedule') {
      return buildScheduleSpeech(nextSession, firstName);
    }

    // Dashboard (and other tabs): time-escalating practice coaching.
    const needDaily = !tasks.dailyDone;
    const needCalc = calcEnabled && !tasks.calcDone;

    if (!needDaily && !needCalc) {
      if (dueNotes > 0) {
        const countPhrase = secretNoteCountPhrase(dueNotes);
        const countPhraseCapital = countPhrase.charAt(0).toUpperCase() + countPhrase.slice(1);
        const line = pickLine(COPY.secretNote, `${seedBase}-note`, firstName, {
          countPhrase,
          countPhraseCapital,
        });
        return {
          mood: 'hint',
          eyebrow: 'A gentle nudge',
          msg: line.msg,
          sub: line.sub,
          cta: { label: 'Take a peek', tab: 'Challenge' },
          key: `note-${today}-${dueNotes}`,
        };
      }
      const line = pickLine(COPY.bothDone, `${seedBase}-done`, firstName);
      return {
        mood: 'idle',
        eyebrow: 'All set',
        msg: line.msg,
        sub: line.sub,
        cta: null,
        key: `done-${today}`,
      };
    }

    // Prefer daily practice messaging first (matches old nudge priority).
    if (needDaily) {
      const pack = PRACTICE_STAGES[stage] || PRACTICE_STAGES[0];
      const line = pickLine(pack.lines, `${seedBase}-daily-${stage}`, firstName);
      return {
        mood: pack.mood,
        eyebrow: stage >= 5 ? 'Almost midnight' : stage >= 3 ? 'Evening check-in' : 'Daily Practice',
        msg: line.msg,
        sub: line.sub,
        cta: { label: 'Start practice', tab: 'Challenge' },
        key: `daily-${today}-${stage}`,
      };
    }

    // Calc only left
    const pack = SPRINT_STAGES[stage] || SPRINT_STAGES[0];
    const line = pickLine(pack.lines, `${seedBase}-calc-${stage}`, firstName);
    return {
      mood: pack.mood,
      eyebrow: stage >= 5 ? 'Sprint — last call' : 'Daily Calculation',
      msg: line.msg,
      sub: line.sub,
      cta: { label: 'Start sprint', tab: 'Challenge' },
      key: `calc-${today}-${stage}`,
    };
  }, [cheerUntil, tasks, calcEnabled, dueNotes, stage, today, activeTab, nextSession, uid, firstName]);

  // Auto-open bubble when situation key changes (new day / tab / urgency / complete).
  useEffect(() => {
    if (!situation?.key) return;
    if (dismissedKey === situation.key) return;
    // Don't force bubble open on Challenge while user is mid-session.
    if (activeTab === 'Challenge') return;
    setBubbleOpen(true);
  }, [situation?.key, dismissedKey, activeTab]);

  if (!uid || phase === 'hidden') return null;

  // Soft-hide during exam / quiz lock: stay mounted so entrance state is kept,
  // but don't cover the quiz UI.
  if (hidden) return null;

  const showBubble = bubbleOpen && dismissedKey !== situation.key && activeTab !== 'Challenge';
  const phaseClass = phase === 'enter' ? 'fb-root--enter' : 'fb-root--ready';
  const mood = situation?.mood || 'idle';

  const node = (
    <div
      className={`fb-root ${phaseClass}`}
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
        <div className={`fb-flame ${mood}`}>
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

  // Portal to body so app-shell filter/overflow never clips or re-parents fixed.
  if (typeof document !== 'undefined' && document.body) {
    return createPortal(node, document.body);
  }
  return node;
}
