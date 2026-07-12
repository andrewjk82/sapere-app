/**
 * FlameBuddy — floating coach in the bottom-right corner.
 * Visuals ported from flame_character_prototype.html.
 * Speaks friendly, conversational tips based on daily work + schedule.
 */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
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
      { msg: "Rise and shine{commaName} — practice is already on the menu.", sub: "Do it while the house is quiet. Peak productivity vibes." },
      { msg: "{Name}, the early bird gets the XP. Just saying.", sub: "A short session now beats a long guilt later." },
      { msg: "Coffee? Optional. Practice? Strongly recommended{commaName}.", sub: "I'll cheer quietly while you crush it." },
      { msg: "Plot twist{commaName}: you could be done before lunch.", sub: "That would be extremely cool of you." },
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
      { msg: "Post-lunch power hour{commaName}? Perfect for Daily Practice.", sub: "Your brain is online. Let's use it." },
      { msg: "{heyName} — little reminder floating by.", sub: "Challenge tab is open. Practice is unfinished. You know the rest." },
      { msg: "Not to be dramatic{commaName}, but practice is still on the list.", sub: "Knock it out and the afternoon feels lighter." },
      { msg: "Quick math break{commaName}? Your future self already high-fived you.", sub: "I'll wait here. (Not that I have a choice.)" },
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
      { msg: "Hey {Name}, the day's half gone — practice isn't though.", sub: "Fifteenish minutes now saves the 'I'll do it later' spiral." },
      { msg: "Soft afternoon reminder{commaName}.", sub: "Challenge is one tap away. You've got this." },
      { msg: "{Name}, want a tiny win before evening?", sub: "Finish practice and ride that good feeling into dinner." },
      { msg: "I'm not the boss of you{commaName}. But practice is still open.", sub: "Consider this a friendly flame-shaped sticky note." },
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
      { msg: "Evening check-in{commaName}: Daily Practice is still unfinished.", sub: "Do it now and the rest of the night is guilt-free TV." },
      { msg: "Plot twist{commaName}: you could still finish practice before 8.", sub: "I'd be extremely proud. Quietly. With sparkles." },
      { msg: "{heyName}! One more thing before you fully clock out.", sub: "A short practice session. Then you're free. Deal?" },
      { msg: "I'm bouncing over here for a reason{commaName}.", sub: "Practice is still open. Let's not make tomorrow-you do double work." },
      { msg: "Friendly flame alert{commaName}: today's practice is incomplete.", sub: "Andrew's not watching right now. Still… better finish it, yeah?" },
      { msg: "{Name}, same time tomorrow we could be celebrating instead.", sub: "All it takes is one session tonight. You've done harder things." },
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
      { msg: "Hey {Name} — still time tonight, still no practice logged.", sub: "Short session now = peaceful bedtime later." },
      { msg: "Couch is calling{commaName}. So is Daily Practice.", sub: "Pick practice first. Couch will still be there. Promise." },
      { msg: "Soft but serious nudge{commaName}.", sub: "Today's practice is incomplete. You've got a little window left." },
      { msg: "If practice were a snack{commaName}, you'd have finished it already.", sub: "Treat your brain to one quick set. Then snack. Fair?" },
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
      { msg: "{Name}, this is the 'do it before it's a problem' window.", sub: "Open Challenge, finish practice, sleep like a champion." },
      { msg: "Not mad{commaName}. Just… highly motivated for you.", sub: "Practice is unfinished. We can still save the day." },
      { msg: "Late-night flame reporting in{commaName}.", sub: "Daily Practice: still open. You: still capable. Go team." },
      { msg: "Hey {Name} — last good hour for a calm session.", sub: "After this I get louder. You don't want loud flame." },
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
      { msg: "Emergency sparkle mode{commaName}: practice still not done!", sub: "One session. Then bed. Then pride. In that order." },
      { msg: "If this were a movie{commaName}, this is the montage moment.", sub: "Open Challenge. Finish practice. Cue the victory music." },
      { msg: "Final boss of the day{commaName}: Daily Practice.", sub: "You're the hero. I'm the tiny coach. Let's end this chapter." },
    ],
  },
];

const SPRINT_STAGES = [
  {
    mood: 'idle',
    lines: [
      { msg: "Oh {Name} — calculation sprint is still open too!", sub: "Tiny set of questions. Like a warm-up for your brain." },
      { msg: "Sprint's waiting whenever you're ready{commaName}.", sub: "A few minutes and it's gone from your list." },
      { msg: "Bonus round{commaName}: the calculation sprint is unlocked.", sub: "Quick numbers. Instant tidy-up on your day list." },
      { msg: "Psst{name}… sprint wants a turn after practice.", sub: "Or before. Or right now. I'm flexible." },
    ],
  },
  {
    mood: 'idle',
    lines: [
      { msg: "Calculation sprint still needs a little love{commaName}.", sub: "Perfect between other things — super short." },
      { msg: "Hey {Name}, don't forget the sprint after practice!", sub: "Or before. I'm flexible. The sprint is not." },
      { msg: "Numbers check{commaName}: sprint still open.", sub: "Three minutes of focus. That's the whole pitch." },
      { msg: "{Name}, sprint is giving polite coughs in the corner.", sub: "Tap Challenge and clear it when you can." },
    ],
  },
  {
    mood: 'thinking',
    lines: [
      { msg: "Sprint check{commaName}: still unfinished.", sub: "Three-ish minutes. You've survived longer things." },
      { msg: "{Name}, calculation sprint is giving you the puppy eyes.", sub: "Don't leave it hanging all afternoon." },
      { msg: "Afternoon sprint reminder{commaName}!", sub: "Short, sharp, done. Then pure free time." },
      { msg: "Still on the board{commaName}: calculation sprint.", sub: "Andrew likes completed sprints. Just putting that out there." },
    ],
  },
  {
    mood: 'thinking',
    lines: [
      { msg: "Evening sprint reminder for you{commaName}!", sub: "Quick numbers, then free evening. Deal?" },
      { msg: "Sprint's still on the board{commaName}.", sub: "Andrew likes completed sprints. Just putting that out there." },
      { msg: "Hey {Name} — practice might be done, sprint might not.", sub: "One more tiny win and the day is fully clear." },
      { msg: "Calculation sprint says hi from Challenge{commaName}.", sub: "You'll barely notice the time. Promise." },
    ],
  },
  {
    mood: 'thinking',
    lines: [
      { msg: "Late-night sprint still open{commaName}…", sub: "It's short. Your pillow can wait two more minutes." },
      { msg: "Don't let the sprint be the thing you 'meant to do'{commaName}.", sub: "Open Challenge, finish it, sleep heroically." },
      { msg: "{Name}, sprint is the last sticky note on the day.", sub: "Peel it off with a quick session." },
      { msg: "Night sprint nudge{commaName}: still unfinished.", sub: "Tiny effort, big clean-day feeling." },
    ],
  },
  {
    mood: 'urgent',
    lines: [
      { msg: "Sprint's almost out of time today{commaName}!", sub: "Hit it now before the clock wins." },
      { msg: "{Name}, calculation sprint: still not done, still very doable.", sub: "Last good window before midnight chaos." },
      { msg: "Ten-ish and sprint's still open{commaName}.", sub: "Go go go — short set, big relief." },
      { msg: "Final sprint window{commaName}. You've got this.", sub: "I believe in your calculation muscles." },
    ],
  },
  {
    mood: 'urgent',
    lines: [
      { msg: "It's late{commaName}, and the sprint is STILL open!", sub: "Finish it before Andrew asks about calculations tomorrow." },
      { msg: "Midnight sprint emergency{commaName} — sort of!", sub: "You're one short set away from a clean day. Go!" },
      { msg: "{Name}. Sprint. Now. Please.", sub: "Then sleep. Then glory. In that order." },
      { msg: "Last call for calculation sprint{commaName}!", sub: "Open Challenge and close the day properly." },
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

/**
 * Build weak-topic insights from recent daily_stats docs (topicStats preferred).
 * Returns [{ label, errorRate, total, wrong }] sorted weakest first.
 */
const analyzeWeakTopics = (statsDocs) => {
  const topicMistakes = {};
  const topicTotals = {};
  const topicLabels = {};

  (statsDocs || []).forEach((stat) => {
    if (stat.topicStats && typeof stat.topicStats === 'object' && Object.keys(stat.topicStats).length > 0) {
      Object.entries(stat.topicStats).forEach(([topicKey, data]) => {
        if (!topicKey || topicKey === 'undefined') return;
        const label = data?.label || data?.topicTitle || topicKey;
        topicLabels[topicKey] = label;
        topicTotals[topicKey] = (topicTotals[topicKey] || 0) + (Number(data?.total) || 0);
        const correct = Number(data?.correct) || 0;
        const total = Number(data?.total) || 0;
        topicMistakes[topicKey] = (topicMistakes[topicKey] || 0) + Math.max(0, total - correct);
      });
      return;
    }
    const results = stat.answerResults || [];
    results.forEach((result) => {
      const topicKey = result?.topicId || result?.type || 'general';
      if (!topicKey || topicKey === 'undefined') return;
      const topicLabel = result?.topicTitle || result?.topicCode || topicKey;
      topicLabels[topicKey] = result?.topicCode
        ? `${result.topicCode} ${result.topicTitle || ''}`.trim()
        : topicLabel;
      topicTotals[topicKey] = (topicTotals[topicKey] || 0) + 1;
      if (!result?.correct) topicMistakes[topicKey] = (topicMistakes[topicKey] || 0) + 1;
    });
  });

  return Object.keys(topicTotals)
    .filter((k) => topicTotals[k] >= 2)
    .map((k) => {
      const total = topicTotals[k];
      const wrong = topicMistakes[k] || 0;
      return {
        label: topicLabels[k] || k,
        total,
        wrong,
        errorRate: total > 0 ? (wrong / total) * 100 : 0,
      };
    })
    .filter((t) => t.errorRate >= 25)
    .sort((a, b) => b.errorRate - a.errorRate || b.wrong - a.wrong)
    .slice(0, 3);
};

const summarizeRecentScores = (statsDocs) => {
  let sessions = 0;
  let scoreSum = 0;
  let totalSum = 0;
  (statsDocs || []).forEach((s) => {
    const total = Number(s.total) || 0;
    const score = Number(s.score) || 0;
    if (total <= 0) return;
    sessions += 1;
    scoreSum += score;
    totalSum += total;
  });
  if (sessions === 0 || totalSum === 0) {
    return { sessions: 0, avgPct: null, scoreSum: 0, totalSum: 0 };
  }
  return {
    sessions,
    avgPct: Math.round((scoreSum / totalSum) * 100),
    scoreSum,
    totalSum,
  };
};

/** Soft add-ons for Challenge tab: teacher comments + Secret Note backlog. */
const challengeFeedbackPhrase = (count) => {
  const n = Number(count) || 0;
  if (n <= 0) return '';
  if (n === 1) {
    return 'Also — Andrew left you a teacher comment. Pop into Feedback when you can; it is written just for you.';
  }
  return `Also — you have ${n} new teacher comments waiting. Check Feedback when you have a sec; they are gold for next time.`;
};

const challengeSecretNoteBacklogPhrase = (dueNotes) => {
  const n = Number(dueNotes) || 0;
  // Only mention when it feels "backed up", not for a tiny handful.
  if (n < 12) return '';
  const pile = secretNoteCountPhrase(n);
  if (n >= 40) {
    return `One more thing: your Secret Note has ${pile}. Totally normal after a busy stretch — chipping away a few at a time keeps old mistakes from piling forever.`;
  }
  return `And hey — Secret Note has ${pile}. A short rematch session later would help them stick less.`;
};

/** Friendly Challenge-tab briefing from recent performance + optional nudges. */
const buildChallengeBriefing = (statsDocs, firstName, seedBase, extras = {}) => {
  const weak = analyzeWeakTopics(statsDocs);
  const scores = summarizeRecentScores(statsDocs);
  const n = firstName || '';
  const hey = n ? `Hey ${n}` : 'Hey';
  const cn = n ? `, ${n}` : '';
  const unreadFeedback = Number(extras.unreadFeedback) || 0;
  const dueNotes = Number(extras.dueNotes) || 0;
  const fbBit = challengeFeedbackPhrase(unreadFeedback);
  const noteBit = challengeSecretNoteBacklogPhrase(dueNotes);
  const appendBits = (sub) => {
    const parts = [sub, fbBit, noteBit].filter(Boolean);
    return parts.join(' ');
  };
  // Prefer Feedback CTA when comments are unread; else Secret Note peek if backlog-y.
  let cta = null;
  if (unreadFeedback > 0) {
    cta = { label: unreadFeedback === 1 ? 'See feedback' : 'See comments', tab: 'Feedback' };
  } else if (dueNotes >= 12) {
    cta = { label: 'Secret Note', tab: 'Challenge', action: 'secret-note' };
  }

  if (scores.sessions === 0 && weak.length === 0) {
    const lines = [
      {
        msg: `${hey}! Ready when you are.`,
        sub: "I don't have much history yet — after a few practices I'll start spotting your soft spots.",
      },
      {
        msg: `Fresh slate${cn}. Let's build some momentum.`,
        sub: 'Start a session when you feel ready. I will keep notes and coach you next time.',
      },
    ];
    const line = pickLine(lines, `${seedBase}-ch-empty`, firstName);
    const mood = unreadFeedback > 0 || dueNotes >= 40 ? 'hint' : 'idle';
    return {
      mood,
      eyebrow: unreadFeedback > 0 ? 'Heads-up' : 'Challenge briefing',
      msg: line.msg,
      sub: appendBits(line.sub),
      cta,
      key: `challenge-empty-${todayKeyFromSeed(seedBase)}-fb${unreadFeedback}-n${dueNotes >= 12 ? 1 : 0}`,
    };
  }

  const top = weak[0];
  const second = weak[1];
  const avg = scores.avgPct;

  // Soft labels for accuracy bands
  let overallLine = 'I have a few of your recent attempts lined up.';
  if (avg != null && avg >= 85) {
    overallLine = `Lately you are around ${avg}% — solid work.`;
  } else if (avg != null && avg >= 70) {
    overallLine = `Lately you are around ${avg}% — good base, room to climb.`;
  } else if (avg != null && avg >= 50) {
    overallLine = `Lately you are around ${avg}%. Totally fixable with focus.`;
  } else if (avg != null) {
    overallLine = `Lately you are around ${avg}%. No shame — we just need careful practice.`;
  }

  if (top) {
    const weakLabel = String(top.label || 'that topic').replace(/\s+/g, ' ').trim();
    const rate = Math.round(top.errorRate);
    const watchList = [weakLabel]
      .concat(second ? [String(second.label || '').replace(/\s+/g, ' ').trim()] : [])
      .filter(Boolean);

    const watchPhrase = watchList.length > 1
      ? `${watchList[0]} and ${watchList[1]}`
      : watchList[0];

    const lines = [
      {
        msg: `${hey} — quick scouting report before you dive in.`,
        sub: `${overallLine} Watch ${watchPhrase} today (about ${rate}% of those have been tripping you up). Read carefully, double-check signs, and do not rush the setup.`,
      },
      {
        msg: `${n || 'Friend'}, I peeked at your recent practice.`,
        sub: `${overallLine} Soft spot: ${weakLabel}. When a question smells like that, slow down and check your method twice.`,
      },
      {
        msg: `Coach tip${cn}: be extra careful with ${weakLabel}.`,
        sub: `${overallLine} That area has been your trickiest lately. Write steps cleanly and ask "does this answer make sense?" before you lock it.`,
      },
      {
        msg: `${hey}! One thing to keep in mind for this session.`,
        sub: `${weakLabel} has been a bit wobbly for you. If you see it, take a breath and work it slowly. You have got this.`,
      },
    ];
    const line = pickLine(lines, `${seedBase}-ch-weak-${weakLabel}`, firstName);
    return {
      mood: rate >= 50 ? 'thinking' : 'hint',
      eyebrow: unreadFeedback > 0 ? 'Briefing + feedback' : 'Pre-practice briefing',
      msg: line.msg,
      sub: appendBits(line.sub),
      cta,
      key: `challenge-weak-${todayKeyFromSeed(seedBase)}-${weakLabel}-fb${unreadFeedback}-n${dueNotes >= 12 ? 1 : 0}`,
    };
  }

  // No weak topics over threshold — positive briefing
  const lines = [
    {
      msg: `${hey} — you are looking consistent lately.`,
      sub: `${overallLine} No big red flags in recent topics. Stay sharp on reading the question fully, and enjoy the session.`,
    },
    {
      msg: `Nice form${cn}. Ready for another round?`,
      sub: `${overallLine} Keep the same careful habits and you will keep climbing.`,
    },
  ];
  const line = pickLine(lines, `${seedBase}-ch-strong`, firstName);
  return {
    mood: unreadFeedback > 0 ? 'hint' : 'cheer',
    eyebrow: unreadFeedback > 0 ? 'Briefing + feedback' : 'Pre-practice briefing',
    msg: line.msg,
    sub: appendBits(line.sub),
    cta,
    key: `challenge-strong-${todayKeyFromSeed(seedBase)}-fb${unreadFeedback}-n${dueNotes >= 12 ? 1 : 0}`,
  };
};

/**
 * Score-based post-result coaching. Ends by nudging Review for missed questions.
 * pct = 0–100 accuracy; wrongCount for soft wording.
 */
const buildResultSpeech = (score, total, firstName, seedBase, challengeType = 'daily') => {
  const s = Math.max(0, Number(score) || 0);
  const t = Math.max(0, Number(total) || 0);
  const wrong = Math.max(0, t - s);
  const pct = t > 0 ? Math.round((s / t) * 100) : 0;
  const n = firstName || '';
  const hey = n ? `Hey ${n}` : 'Hey';
  const cn = n ? `, ${n}` : '';
  const scoreBit = t > 0 ? `${s}/${t}` : `${pct}%`;
  const kind = challengeType === 'calc' ? 'sprint' : 'practice';

  const reviewCloser = wrong > 0
    ? (wrong === 1
      ? 'When you are ready, hop into Review and walk through that one miss — that is where the real learning sticks.'
      : `When you are ready, hop into Review and walk through the ${wrong} you missed — that is where the real learning sticks.`)
    : 'Everything correct — still worth a quick Review skim if you want to lock the methods in.';

  let band;
  let mood;
  let eyebrow;
  let lines;

  if (pct >= 90) {
    band = 'great';
    mood = 'cheer';
    eyebrow = 'Crushing it';
    lines = [
      {
        msg: `${hey}! ${scoreBit} — that is seriously strong.`,
        sub: `You showed up and the numbers show it. ${reviewCloser}`,
      },
      {
        msg: `Look at that score${cn}: ${scoreBit}. Flame is doing a little victory flicker.`,
        sub: `Proud of you. ${reviewCloser}`,
      },
      {
        msg: `${n || 'Friend'}, ${scoreBit} on this ${kind}? Chef's kiss.`,
        sub: `Keep that careful energy. ${reviewCloser}`,
      },
    ];
  } else if (pct >= 75) {
    band = 'good';
    mood = 'cheer';
    eyebrow = 'Nice work';
    lines = [
      {
        msg: `${hey} — ${scoreBit}. Solid session.`,
        sub: `You are in a good zone. A little review on the misses and you will climb even higher. ${reviewCloser}`,
      },
      {
        msg: `Nice job${cn}! ${scoreBit} is real progress.`,
        sub: `Not perfect — and that is fine. ${reviewCloser}`,
      },
      {
        msg: `${scoreBit}${cn}. I like that consistency.`,
        sub: `Celebrate the wins, then clean up the wobbly ones. ${reviewCloser}`,
      },
    ];
  } else if (pct >= 55) {
    band = 'mid';
    mood = 'hint';
    eyebrow = 'Good effort';
    lines = [
      {
        msg: `${hey}, you finished — ${scoreBit}. That still counts.`,
        sub: `Some bits need another look, and that is normal. Next time a little more focus goes a long way. ${reviewCloser}`,
      },
      {
        msg: `${scoreBit}${cn}. Honest score, honest plan.`,
        sub: `You showed up. Now Review turns "almost" into "got it." ${reviewCloser}`,
      },
      {
        msg: `Session done${cn}: ${scoreBit}.`,
        sub: `Not your peak day — totally fine. Let's learn from the misses and come back sharper. ${reviewCloser}`,
      },
    ];
  } else {
    band = 'low';
    mood = 'thinking';
    eyebrow = 'Keep going';
    lines = [
      {
        msg: `${hey}… ${scoreBit}. Rough set, not a rough student.`,
        sub: `Everyone has days like this. What matters is we review the misses and try a bit harder next time — I've got your back. ${reviewCloser}`,
      },
      {
        msg: `Okay${cn}, ${scoreBit}. Let's not spiral — let's learn.`,
        sub: `Slow down on the next one, read twice, and use Review as your coach. ${reviewCloser}`,
      },
      {
        msg: `${n || 'Friend'}, finishing still takes guts. Score: ${scoreBit}.`,
        sub: `Tomorrow we climb. Today we understand the tricky ones. ${reviewCloser}`,
      },
    ];
  }

  const line = pickLine(lines, `${seedBase}-result-${band}-${scoreBit}`, firstName);
  return {
    mood,
    eyebrow,
    msg: line.msg,
    sub: line.sub,
    cta: wrong > 0
      ? { label: 'Review misses', action: 'review' }
      : { label: 'Review answers', action: 'review' },
    key: `result-${seedBase}-${band}-${scoreBit}`,
  };
};

const todayKeyFromSeed = (seedBase) => {
  // seedBase is `${uid}-${today}`
  const parts = String(seedBase).split('-');
  return parts.slice(-3).join('-') || 'today';
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

/** "Today · 3:30 PM" / "Tomorrow · …" / "Wed · 22 Jul · 3:30 PM" — easy to scan. */
const friendlyWhen = (dateStr, startTime) => {
  if (!dateStr) return startTime || 'soon';
  const time = String(startTime || '').trim();
  const todayStr = new Date().toLocaleDateString('en-CA');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomStr = tomorrow.toLocaleDateString('en-CA');
  if (dateStr === todayStr) return time ? `Today · ${time}` : 'Today';
  if (dateStr === tomStr) return time ? `Tomorrow · ${time}` : 'Tomorrow';
  try {
    const d = new Date(`${dateStr}T12:00:00`);
    const weekday = d.toLocaleDateString('en-AU', { weekday: 'short' });
    const dayMonth = d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
    return time ? `${weekday} · ${dayMonth} · ${time}` : `${weekday} · ${dayMonth}`;
  } catch {
    return time ? `${dateStr} · ${time}` : dateStr;
  }
};

/** Wrap schedule date / weekday / time for bold rendering in the bubble. */
const boldWhen = (when) => {
  const w = String(when || '').trim();
  if (!w) return w;
  return `**${w}**`;
};

/** Remove **bold** markers (for typewriter length / plain compare). */
const stripMdBold = (text) => String(text || '').replace(/\*\*/g, '');

/**
 * Render text with **bold** markers as <strong>.
 * Works on a full template + how many plain chars are visible (typewriter).
 */
const renderMdBold = (template, visiblePlainLen = null) => {
  const raw = String(template || '');
  if (!raw.includes('**')) {
    if (visiblePlainLen == null) return raw;
    return raw.slice(0, visiblePlainLen);
  }
  const limit = visiblePlainLen == null ? Infinity : visiblePlainLen;
  const nodes = [];
  let plainIdx = 0;
  let i = 0;
  let bold = false;
  let buf = '';
  let key = 0;
  const flush = () => {
    if (!buf) return;
    if (bold) {
      nodes.push(
        <strong key={`b${key}`} className="fb-em">{buf}</strong>,
      );
    } else {
      nodes.push(buf);
    }
    key += 1;
    buf = '';
  };
  while (i < raw.length && plainIdx < limit) {
    if (raw[i] === '*' && raw[i + 1] === '*') {
      flush();
      bold = !bold;
      i += 2;
      continue;
    }
    buf += raw[i];
    plainIdx += 1;
    i += 1;
  }
  flush();
  if (nodes.length === 0) return '';
  if (nodes.length === 1 && typeof nodes[0] === 'string') return nodes[0];
  return nodes;
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
  const whenBold = boldWhen(when);
  const hw = clipText(session.homework);
  const hwDone = Boolean(session.isHomeworkCompleted);

  let msg = `${hey}! Just a heads-up — you've got ${subject} ${whenBold}.`;
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
      ? `${n}, today's the day! ${subject} is ${whenBold}.`
      : `Today's the day! ${subject} is ${whenBold}.`;
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

/**
 * Fast typewriter for bubble text.
 * Types `msg` first, then `sub`. Calls onDone when finished.
 * ~16ms/char (~60 chars/s) — snappy but readable.
 */
function useTypewriter(msg, sub, active, msPerChar = 15) {
  // Type plain characters only (** markers are not typed, but still bolded on render).
  const fullMsg = stripMdBold(msg);
  const fullSub = stripMdBold(sub);
  const [msgOut, setMsgOut] = useState('');
  const [subOut, setSubOut] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer;
    const preferReduce = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    if (!active) {
      setMsgOut('');
      setSubOut('');
      setDone(false);
      return undefined;
    }

    if (preferReduce || (!fullMsg && !fullSub)) {
      setMsgOut(fullMsg);
      setSubOut(fullSub);
      setDone(true);
      return undefined;
    }

    setMsgOut('');
    setSubOut('');
    setDone(false);

    let i = 0;
    let phase = 'msg'; // msg → pause → sub → done

    const schedule = (fn, ms) => {
      clearTimeout(timer);
      timer = setTimeout(fn, ms);
    };

    const tick = () => {
      if (cancelled) return;
      if (phase === 'msg') {
        i += 1;
        setMsgOut(fullMsg.slice(0, i));
        if (i >= fullMsg.length) {
          if (fullSub) {
            phase = 'pause';
            i = 0;
            schedule(tick, 100);
          } else {
            setDone(true);
          }
          return;
        }
        const ch = fullMsg[i - 1];
        schedule(tick, ch === ' ' ? msPerChar * 0.5 : msPerChar);
        return;
      }
      if (phase === 'pause') {
        phase = 'sub';
        schedule(tick, msPerChar);
        return;
      }
      if (phase === 'sub') {
        i += 1;
        setSubOut(fullSub.slice(0, i));
        if (i >= fullSub.length) {
          setDone(true);
          return;
        }
        const ch = fullSub[i - 1];
        schedule(tick, ch === ' ' ? msPerChar * 0.5 : msPerChar);
      }
    };

    schedule(tick, 30);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [msg, sub, active, msPerChar, fullMsg, fullSub]);

  return { msgOut, subOut, done, fullMsgLen: fullMsg.length, fullSubLen: fullSub.length };
}

function BubbleTypewriter({ eyebrow, msg, sub, cta, onCta, onDismiss, mood = 'idle' }) {
  const { msgOut, subOut, done, fullMsgLen, fullSubLen } = useTypewriter(msg, sub, true, 14);
  const typingMsg = !done && msgOut.length < fullMsgLen;
  const typingSub = !done && !typingMsg && Boolean(stripMdBold(sub));
  const moodClass = ['idle', 'thinking', 'urgent', 'cheer', 'hint'].includes(mood)
    ? mood
    : 'idle';

  return (
    <div className={`fb-bubble fb-bubble--${moodClass}`}>
      {eyebrow && <div className="fb-bubble__eyebrow">{eyebrow}</div>}
      <p className="fb-bubble__msg">
        {renderMdBold(msg, msgOut.length)}
        {typingMsg && <span className="fb-caret" aria-hidden />}
      </p>
      {(subOut || typingSub || (done && sub)) && (
        <p className="fb-bubble__sub">
          {renderMdBold(sub, subOut.length)}
          {typingSub && subOut.length < fullSubLen && <span className="fb-caret" aria-hidden />}
        </p>
      )}
      {done && (
        <div className="fb-bubble__actions fb-bubble__actions--in">
          {cta && (
            <button type="button" className="fb-bubble__cta" onClick={onCta}>
              {cta.label}
            </button>
          )}
          <button type="button" className="fb-bubble__dismiss" onClick={onDismiss}>
            Got it
          </button>
        </div>
      )}
    </div>
  );
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
  // Recent daily_stats for Challenge-tab performance briefing (topicStats only).
  const [recentPerf, setRecentPerf] = useState([]);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [dismissedKey, setDismissedKey] = useState('');
  const [cheerUntil, setCheerUntil] = useState(0);
  // Brief bounce when the avatar is tapped.
  const [tapBounce, setTapBounce] = useState(false);
  // Bumps each time the student re-opens the bubble so practice lines rotate.
  const [speechEpoch, setSpeechEpoch] = useState(0);
  // Post-quiz score coaching (takes priority while active).
  const [resultCoach, setResultCoach] = useState(null); // { score, total, challengeType, until, id }
  // Entrance phase: hidden → enter (pop) → ready.
  // Never park on an invisible "pre" frame — cancelled rAFs left the avatar
  // stuck at opacity 0. Remounts / already-seen sessions go straight to ready.
  const [phase, setPhase] = useState('hidden'); // hidden | enter | ready

  const calcEnabled = profile?.calculationEnabled !== false;
  const today = new Date().toLocaleDateString('en-CA');
  const firstName = useMemo(() => studentFirstName(profile), [profile]);
  const unreadFeedback = Number(profile?.unreadFeedbackCount) || 0;

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

  // Recent performance for Challenge-tab briefing (last 7 daily_stats, slim fields).
  useEffect(() => {
    if (!uid) return undefined;
    // Load when opening Challenge, or once in the background after arrive.
    if (activeTab !== 'Challenge' && recentPerf.length > 0) return undefined;

    const cacheKey = `flame-buddy-perf-v1-${uid}`;
    const cached = localCache.get(cacheKey);
    if (cached?.date === today && Array.isArray(cached.stats)) {
      setRecentPerf(cached.stats);
      // Still refresh under the hood when landing on Challenge.
      if (activeTab !== 'Challenge') return undefined;
    }

    let cancelled = false;
    (async () => {
      try {
        const snap = await getDocs(
          query(
            collection(db, 'users', uid, 'daily_stats'),
            orderBy('timestamp', 'desc'),
            limit(7),
          ),
        );
        if (cancelled) return;
        const stats = snap.docs.map((d) => {
          const data = d.data() || {};
          return {
            id: d.id,
            score: data.score,
            total: data.total,
            topicStats: data.topicStats || null,
            // Slim answerResults fallback (no full question payloads).
            answerResults: Array.isArray(data.answerResults)
              ? data.answerResults.map((r) => ({
                  correct: !!r?.correct,
                  topicId: r?.topicId || '',
                  topicTitle: r?.topicTitle || '',
                  topicCode: r?.topicCode || '',
                  type: r?.type || '',
                }))
              : null,
          };
        });
        setRecentPerf(stats);
        localCache.set(cacheKey, { date: today, stats });
      } catch (e) {
        console.warn('[FlameBuddy] perf fetch failed:', e?.code || e);
      }
    })();
    return () => { cancelled = true; };
  }, [uid, today, activeTab, recentPerf.length]);

  // Cheer when daily practice completes (task flags + legacy short cheer).
  useEffect(() => {
    if (!uid) return undefined;
    const onDone = (e) => {
      if (e.detail?.uid && e.detail.uid !== uid) return;
      if (e.detail?.completed === false) return;
      // Task board: only mark daily done from daily event (not calc).
      if ((e.detail?.challengeType || 'daily') === 'daily') {
        setCheerUntil(Date.now() + 12_000);
        setTasks((t) => {
          const next = { ...t, dailyDone: true, loaded: true };
          localCache.set(`flame-buddy-tasks-${uid}`, { date: today, dailyDone: true, calcDone: t.calcDone });
          return next;
        });
      } else if (e.detail?.challengeType === 'calc') {
        setTasks((t) => {
          const next = { ...t, calcDone: true, loaded: true };
          localCache.set(`flame-buddy-tasks-${uid}`, { date: today, dailyDone: t.dailyDone, calcDone: true });
          return next;
        });
      }
      // Bust perf cache so next Challenge visit re-reads.
      try { localCache.remove(`flame-buddy-perf-v1-${uid}`); } catch { /* ignore */ }
      setRecentPerf([]);
      setBubbleOpen(true);
      setDismissedKey('');
    };
    // Score-based wrap-up when any challenge ends (daily or calc).
    const onResult = (e) => {
      if (e.detail?.uid && e.detail.uid !== uid) return;
      if (e.detail?.completed === false) return;
      const score = Number(e.detail?.score);
      const total = Number(e.detail?.total);
      if (!(total > 0) || Number.isNaN(score)) return;
      setCheerUntil(0); // score speech replaces the generic cheer
      const kind = e.detail?.challengeType || 'daily';
      setTasks((t) => {
        const next = {
          ...t,
          loaded: true,
          dailyDone: kind === 'daily' ? true : t.dailyDone,
          calcDone: kind === 'calc' ? true : t.calcDone,
        };
        localCache.set(`flame-buddy-tasks-${uid}`, {
          date: today,
          dailyDone: next.dailyDone,
          calcDone: next.calcDone,
        });
        return next;
      });
      try { localCache.remove(`flame-buddy-perf-v1-${uid}`); } catch { /* ignore */ }
      setRecentPerf([]);
      setResultCoach({
        score,
        total,
        challengeType: kind,
        until: Date.now() + 50_000,
        id: `${Date.now()}-${score}-${total}`,
      });
      setBubbleOpen(true);
      setDismissedKey('');
    };
    window.addEventListener('sapere:daily-practice-completed', onDone);
    window.addEventListener('sapere:challenge-result', onResult);
    return () => {
      window.removeEventListener('sapere:daily-practice-completed', onDone);
      window.removeEventListener('sapere:challenge-result', onResult);
    };
  }, [uid, today]);

  // End cheer mood after the celebration window.
  useEffect(() => {
    if (!cheerUntil) return undefined;
    const ms = Math.max(0, cheerUntil - Date.now());
    const t = setTimeout(() => setCheerUntil(0), ms);
    return () => clearTimeout(t);
  }, [cheerUntil]);

  // Clear post-result coaching after its window.
  useEffect(() => {
    if (!resultCoach?.until) return undefined;
    const ms = Math.max(0, resultCoach.until - Date.now());
    const t = setTimeout(() => setResultCoach(null), ms);
    return () => clearTimeout(t);
  }, [resultCoach?.until, resultCoach?.id]);

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
    // Rotate lines: time slot (~30 min) + reopen count, so the same nag isn't stuck all day.
    const slot = Math.floor(hour * 2);
    const rotateSeed = `${seedBase}-s${slot}-e${speechEpoch}`;

    // Highest priority: just finished a challenge — score mantras + review CTA.
    // Cleared by timeout / dismiss (no Date.now() in render — purity lint).
    if (resultCoach) {
      return buildResultSpeech(
        resultCoach.score,
        resultCoach.total,
        firstName,
        `${seedBase}-${resultCoach.id || 'r'}`,
        resultCoach.challengeType,
      );
    }

    // cheerUntil is a timestamp; non-zero means still celebrating (cleared by timer).
    if (cheerUntil) {
      const line = pickLine(COPY.bothDone, `${rotateSeed}-cheer`, firstName);
      return {
        mood: 'cheer',
        eyebrow: 'Great job',
        msg: line.msg,
        sub: line.sub,
        cta: null,
        key: `cheer-${today}-${speechEpoch}`,
      };
    }

    // On Schedule tab: talk about the next class + homework in a friendly voice.
    if (activeTab === 'Schedule') {
      return buildScheduleSpeech(nextSession, firstName);
    }

    // On Challenge tab: performance report + teacher feedback + secret-note backlog.
    if (activeTab === 'Challenge') {
      return buildChallengeBriefing(recentPerf, firstName, `${rotateSeed}-ch`, {
        unreadFeedback,
        dueNotes,
      });
    }

    // Dashboard (and other tabs): time-escalating practice coaching.
    const needDaily = !tasks.dailyDone;
    const needCalc = calcEnabled && !tasks.calcDone;

    if (!needDaily && !needCalc) {
      if (dueNotes > 0) {
        const countPhrase = secretNoteCountPhrase(dueNotes);
        const countPhraseCapital = countPhrase.charAt(0).toUpperCase() + countPhrase.slice(1);
        const line = pickLine(COPY.secretNote, `${rotateSeed}-note`, firstName, {
          countPhrase,
          countPhraseCapital,
        });
        return {
          mood: 'hint',
          eyebrow: 'A gentle nudge',
          msg: line.msg,
          sub: line.sub,
          cta: { label: 'Take a peek', tab: 'Challenge' },
          key: `note-${today}-${dueNotes}-${speechEpoch}`,
        };
      }
      const line = pickLine(COPY.bothDone, `${rotateSeed}-done`, firstName);
      return {
        mood: 'idle',
        eyebrow: 'All set',
        msg: line.msg,
        sub: line.sub,
        cta: null,
        key: `done-${today}-${speechEpoch}`,
      };
    }

    // Prefer daily practice messaging first (matches old nudge priority).
    if (needDaily) {
      const pack = PRACTICE_STAGES[stage] || PRACTICE_STAGES[0];
      const line = pickLine(pack.lines, `${rotateSeed}-daily-${stage}`, firstName);
      return {
        mood: pack.mood,
        eyebrow: stage >= 5 ? 'Almost midnight' : stage >= 3 ? 'Evening check-in' : 'Daily Practice',
        msg: line.msg,
        sub: line.sub,
        cta: { label: 'Start practice', tab: 'Challenge' },
        key: `daily-${today}-${stage}-${slot}-${speechEpoch}`,
      };
    }

    // Calc only left
    const pack = SPRINT_STAGES[stage] || SPRINT_STAGES[0];
    const line = pickLine(pack.lines, `${rotateSeed}-calc-${stage}`, firstName);
    return {
      mood: pack.mood,
      eyebrow: stage >= 5 ? 'Sprint — last call' : 'Daily Calculation',
      msg: line.msg,
      sub: line.sub,
      cta: { label: 'Start sprint', tab: 'Challenge' },
      key: `calc-${today}-${stage}-${slot}-${speechEpoch}`,
    };
  }, [cheerUntil, resultCoach, tasks, calcEnabled, dueNotes, stage, today, activeTab, nextSession, uid, firstName, recentPerf, unreadFeedback, hour, speechEpoch]);

  // Auto-open bubble when situation key changes (new day / tab / urgency / complete).
  // Challenge tab is allowed — that is where the performance briefing lives.
  useEffect(() => {
    if (!situation?.key) return;
    if (dismissedKey === situation.key) return;
    // Hide speech while a quiz is actively locked (hidden prop covers exam;
    // Challenge start screen still gets the briefing).
    if (hidden) return;
    setBubbleOpen(true);
  }, [situation?.key, dismissedKey, hidden]);

  if (!uid || phase === 'hidden') return null;

  // Soft-hide during exam / quiz lock: stay mounted so entrance state is kept,
  // but don't cover the quiz UI.
  if (hidden) return null;

  const showBubble = bubbleOpen && dismissedKey !== situation.key;
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
        <BubbleTypewriter
          key={situation.key}
          eyebrow={situation.eyebrow}
          msg={situation.msg}
          sub={situation.sub}
          cta={situation.cta}
          mood={situation.mood || mood}
          onCta={() => {
            const action = situation.cta?.action;
            if (action === 'review') {
              try {
                window.dispatchEvent(new CustomEvent('sapere:flame-open-review', {
                  detail: { uid },
                }));
              } catch { /* ignore */ }
              setBubbleOpen(false);
              return;
            }
            if (situation.cta?.tab) setActiveTab?.(situation.cta.tab);
            setBubbleOpen(false);
          }}
          onDismiss={() => {
            setDismissedKey(situation.key);
            setBubbleOpen(false);
            // Don't re-open the same result speech after dismiss.
            if (situation.key?.startsWith('result-')) setResultCoach(null);
          }}
        />
      )}

      <div
        className={`fb-stage${tapBounce ? ' fb-stage--bounce' : ''}`}
        title="Tap for a tip"
        onClick={() => {
          // Re-trigger bounce even if already mid-animation.
          setTapBounce(false);
          requestAnimationFrame(() => setTapBounce(true));
          setDismissedKey('');
          setBubbleOpen((o) => {
            // Each re-open rotates to a different practice / sprint line.
            if (!o) setSpeechEpoch((n) => n + 1);
            return !o;
          });
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setTapBounce(false);
            requestAnimationFrame(() => setTapBounce(true));
            setDismissedKey('');
            setBubbleOpen((o) => {
              if (!o) setSpeechEpoch((n) => n + 1);
              return !o;
            });
          }
        }}
      >
        <div
          className={`fb-flame ${mood}`}
          onAnimationEnd={(e) => {
            if (e.animationName === 'fb-tap-bounce') {
              e.stopPropagation();
              setTapBounce(false);
            }
          }}
        >
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
