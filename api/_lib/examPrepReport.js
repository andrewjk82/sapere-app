/* ==========================================================================
   Exam Prep D-1 Report — email template + personalised comment engine
   Sends to both student and teacher the day before a scheduled exam.
   ========================================================================== */

import { emailShell } from './emailTemplates.js';

const APP_URL = 'https://sapere-app.vercel.app';

const esc = (s) => String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

const button = (label, href = APP_URL, color = '#7c3aed') =>
  `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="background:${color};border-radius:13px;">
      <a href="${href}" style="display:inline-block;padding:15px 30px;color:#ffffff;text-decoration:none;font-size:15px;font-weight:800;">${esc(label)}</a>
    </td></tr></table>`;

// ── Comment bank — selected based on performance profile ─────────────────
// Each entry: { match: fn(profile) → bool, weight, lines: string[] }
// "lines" are varied messages in the same category so repeated D-1 emails
// never feel copy-pasted. The engine picks one line at random.

const COMMENT_BANK = [
  // ── Excellent performer: high accuracy + many sessions
  {
    tag: 'excellent',
    match: ({ pct, sessions }) => pct >= 80 && sessions >= 5,
    lines: [
      "Your preparation has been outstanding. Going into tomorrow with {pct}% accuracy across {sessions} sessions is genuinely impressive — trust your work and back yourself.",
      "You've put in the hours and it shows. {pct}% correct over {sessions} rounds of practice is exactly the foundation you want heading into an exam. Stay calm, stay sharp.",
      "Honestly, {pct}% accuracy with {sessions} sessions under your belt? You're in great shape. Rest well tonight — your brain has done the heavy lifting.",
      "The numbers tell a clear story: {pct}% accuracy, {sessions} sessions completed. You've earned your confidence for tomorrow. Trust the process.",
      "You've nailed your prep — {pct}% accuracy and {sessions} full rounds of practice. At this point it's about getting a good night's sleep and showing up fresh.",
    ],
  },

  // ── Good performer: solid accuracy, regular sessions
  {
    tag: 'good',
    match: ({ pct, sessions }) => pct >= 65 && sessions >= 3,
    lines: [
      "You're sitting at {pct}% accuracy after {sessions} sessions — solid foundation. Tomorrow, focus on reading each question carefully and trust what you already know.",
      "Good consistent work: {pct}% accuracy across {sessions} practice rounds. You're well prepared. Take a breath, re-read your weak topics tonight, and go in confident.",
      "{pct}% accuracy and {sessions} sessions in — you're ready. The best thing you can do now is rest and let everything you've practised settle.",
      "Strong preparation, {firstName}. {pct}% accuracy across {sessions} rounds shows you understand the material. Tomorrow is your chance to show that.",
      "You've done what needs to be done — {sessions} sessions, {pct}% accuracy. Keep your focus tomorrow and don't second-guess yourself.",
    ],
  },

  // ── Improving trend: recent sessions better than earlier ones
  {
    tag: 'improving',
    match: ({ trend }) => trend === 'up',
    lines: [
      "Your recent sessions show real improvement — you're getting sharper the closer you get to the exam. That's the trend you want. Keep the momentum going tomorrow.",
      "The progress over your last few sessions is noticeable. You've been improving consistently, which is the best sign heading into an exam.",
      "Great to see the upward trend in your recent practice. You've clearly been putting in focused effort — carry that energy into tomorrow.",
      "Your accuracy has been climbing session by session. That kind of improvement doesn't happen by accident — it shows you've been paying attention to your mistakes.",
    ],
  },

  // ── Needs more sessions but decent accuracy
  {
    tag: 'few_sessions_decent',
    match: ({ pct, sessions }) => sessions >= 1 && sessions < 3 && pct >= 60,
    lines: [
      "You've started your exam prep and your accuracy is solid at {pct}%. Tonight, try to squeeze in one more quick session on your weakest topic — it'll make a difference.",
      "{pct}% accuracy is a good sign. With only {sessions} session{s} under your belt, there's still time for a focused 15-minute review tonight before you sleep.",
      "Your {pct}% hit rate shows you know the material. Given you've had {sessions} practice session{s}, a short targeted review tonight on your trouble spots would be worthwhile.",
    ],
  },

  // ── Weak performer: low accuracy
  {
    tag: 'needs_work',
    match: ({ pct, sessions }) => pct < 60 && sessions >= 2,
    lines: [
      "Your accuracy is currently at {pct}% — there's room to improve, but the fact you've put in {sessions} sessions means the foundations are there. Tonight, focus only on your two weakest topics rather than trying to cover everything.",
      "At {pct}% accuracy across {sessions} sessions, you're still building confidence with the material. For tonight: pick your single hardest topic, work through 5-10 questions slowly, then rest. Quality over quantity.",
      "The exam is tomorrow and your prep sits at {pct}% accuracy. Don't panic — focus on your weak spots tonight, get sleep, and remember that {sessions} sessions of practice is more than many students do.",
      "With {pct}% accuracy across {sessions} practice sessions, there's still work to do. But you've shown up and done the practice — tonight, slow down and re-read your incorrect answers carefully before the exam.",
    ],
  },

  // ── Very few sessions (first time or skipped most prep)
  {
    tag: 'minimal_prep',
    match: ({ sessions }) => sessions <= 1,
    lines: [
      "It looks like tomorrow's exam crept up on you — and that's okay. Spend 20-30 focused minutes tonight on the core concepts, then sleep. A rested mind beats a tired one every time.",
      "There hasn't been much time for exam prep, but there's still time to make tonight count. Pick your three most likely exam topics and review them once through. Quality focus now matters more than quantity.",
      "You're heading into tomorrow with limited practice sessions — it happens. The best thing to do now is review one or two key topics, and approach the exam calmly. You know more than you think.",
    ],
  },

  // ── Specific weak topics identified
  {
    tag: 'weak_topics',
    match: ({ weakTopics }) => weakTopics && weakTopics.length > 0,
    lines: [
      "Looking at your practice data, {weakTopicList} {isAre} where you've struggled most. If you have time tonight, a focused review there could pay off tomorrow.",
      "Your weak spots based on your practice sessions: {weakTopicList}. Worth revisiting those tonight if you can — even 10 minutes of targeted work is valuable.",
      "The data from your sessions flags {weakTopicList} as areas to watch. A quick focused review on {weakTopicShort} before bed tonight wouldn't hurt.",
    ],
  },

  // ── Generic fallback (always available as last resort)
  {
    tag: 'generic',
    match: () => true,
    lines: [
      "Tomorrow's the day. Whatever preparation you've done has built a foundation — now it's about executing on what you know. Read carefully, show your working, and trust yourself.",
      "Exam day is here. Take a deep breath, read each question carefully, and remember: all the practice you've done has been building to this. You've got this.",
      "Good luck tomorrow. Go in calm, be methodical, and don't forget to check your answers if time allows.",
      "The preparation is done — now it's time to perform. Read the questions carefully, manage your time well, and back yourself.",
    ],
  },
];

// ── Pick the most relevant comment ───────────────────────────────────────
function pickComment(profile) {
  const { firstName, pct, sessions, weakTopics = [], trend } = profile;

  // Try categories in priority order (most specific first)
  const priority = ['excellent', 'good', 'improving', 'few_sessions_decent', 'needs_work', 'minimal_prep', 'weak_topics', 'generic'];

  let chosen = null;
  for (const tag of priority) {
    const bank = COMMENT_BANK.find((b) => b.tag === tag);
    if (bank && bank.match(profile)) {
      chosen = bank;
      break;
    }
  }
  if (!chosen) chosen = COMMENT_BANK.find((b) => b.tag === 'generic');

  // Pick a random line from the matched category
  const lines = chosen.lines;
  let line = lines[Math.floor(Math.random() * lines.length)];

  // Substitute tokens
  const s = sessions === 1 ? '' : 's';
  const weakTopicList = weakTopics.length > 1
    ? weakTopics.slice(0, 3).map((t, i) => i === weakTopics.length - 1 ? `and ${t}` : t).join(', ')
    : weakTopics[0] || '';
  const weakTopicShort = weakTopics[0] || '';
  const isAre = weakTopics.length === 1 ? 'is' : 'are';

  line = line
    .replace(/{pct}/g, String(pct))
    .replace(/{sessions}/g, String(sessions))
    .replace(/{s}/g, s)
    .replace(/{firstName}/g, esc(firstName))
    .replace(/{weakTopicList}/g, esc(weakTopicList))
    .replace(/{weakTopicShort}/g, esc(weakTopicShort))
    .replace(/{isAre}/g, isAre);

  return line;
}

// ── Build performance profile from exam_prep summary ─────────────────────
export function buildProfile(studentName, examSummary, examPrepHistory = []) {
  const firstName = (studentName || 'there').split(' ')[0];
  const sessions = Number(examSummary?.sessions || 0);
  const attempted = Number(examSummary?.attempted || 0);
  const correct = Number(examSummary?.correct || 0);
  const pct = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  const byTopic = examSummary?.byTopic || {};

  // Find weak topics (< 60% accuracy, ≥ 2 attempts)
  const weakTopics = Object.entries(byTopic)
    .filter(([, t]) => t.attempted >= 2 && t.attempted > 0 && Math.round((t.correct / t.attempted) * 100) < 60)
    .sort((a, b) => (a[1].correct / a[1].attempted) - (b[1].correct / b[1].attempted))
    .slice(0, 3)
    .map(([, t]) => t.title);

  // Trend: compare last 3 history sessions vs prior 3
  let trend = 'flat';
  if (examPrepHistory.length >= 4) {
    const recent = examPrepHistory.slice(0, 3);
    const older = examPrepHistory.slice(3, 6);
    const avgRecent = recent.reduce((s, h) => s + (h.total > 0 ? h.correct / h.total : 0), 0) / recent.length;
    const avgOlder = older.reduce((s, h) => s + (h.total > 0 ? h.correct / h.total : 0), 0) / older.length;
    if (avgRecent > avgOlder + 0.05) trend = 'up';
    else if (avgRecent < avgOlder - 0.05) trend = 'down';
  }

  return { firstName, sessions, attempted, correct, pct, weakTopics, trend };
}

// ── Student email ─────────────────────────────────────────────────────────
export function examPrepD1StudentEmail({ studentName, examLabel, examDate, profile, examSummary }) {
  const first = esc(profile.firstName);
  const { pct, sessions, attempted, correct, weakTopics } = profile;
  const comment = pickComment(profile);
  const hasData = sessions > 0;

  const accentColor = pct >= 80 ? '#10b981' : pct >= 60 ? '#f59e0b' : '#ef4444';
  const fillPct = Math.max(4, Math.min(100, pct));

  const scoreBar = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2ff;border-radius:999px;margin:8px 0 18px;">
      <tr>
        <td width="${fillPct}%" style="background:${accentColor};border-radius:999px;font-size:0;line-height:0;height:10px;">&nbsp;</td>
        <td style="font-size:0;line-height:0;">&nbsp;</td>
      </tr>
    </table>`;

  const stat = (val, lbl, color = '#1e1b4b') =>
    `<td width="33.33%" align="center" style="padding:14px 6px;">
      <div style="font-family:'Outfit',sans-serif;font-size:22px;font-weight:800;color:${color};">${val}</div>
      <div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#9890b5;margin-top:4px;">${lbl}</div>
    </td>`;

  const statsBlock = hasData ? `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f5fd;border-radius:16px;margin-bottom:20px;"><tr>
      ${stat(String(sessions), 'Sessions')}
      ${stat(`${correct}/${attempted}`, 'Questions')}
      ${stat(`${pct}%`, 'Accuracy', accentColor)}
    </tr></table>
    <div style="margin-bottom:8px;">
      <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;color:#9890b5;">
        <span>Accuracy</span><span style="color:${accentColor};">${pct}%</span>
      </div>
      ${scoreBar}
    </div>` : `
    <div style="background:#f7f5fd;border-radius:16px;padding:15px 17px;margin-bottom:20px;text-align:center;color:#9890b5;font-size:14px;font-weight:600;">
      No exam prep sessions recorded yet — but it's not too late for a quick review tonight!
    </div>`;

  const weakBlock = weakTopics.length > 0 ? `
    <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;padding:14px 17px;margin-bottom:20px;">
      <div style="font-size:12px;font-weight:800;color:#9a3412;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:6px;">Topics to review tonight</div>
      <ul style="margin:0;padding-left:18px;color:#7c2d12;font-size:13.5px;line-height:1.8;">
        ${weakTopics.map((t) => `<li>${esc(t)}</li>`).join('')}
      </ul>
    </div>` : '';

  const inner = `
    <div style="background:linear-gradient(135deg,#312e81,#6d28d9);padding:30px 32px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.75);">Exam Prep · D-1 Report</div>
      <div style="font-family:'Outfit',sans-serif;font-size:24px;font-weight:800;color:#fff;margin-top:6px;">${esc(examLabel)}</div>
      <div style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.8);margin-top:4px;">Tomorrow · ${esc(examDate)}</div>
    </div>
    <div style="padding:30px 32px;">
      <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#1e1b4b;">Hi ${first},</p>
      <p style="margin:0 0 22px;font-size:14px;line-height:1.65;color:#6d6a85;">
        Your exam is <strong style="color:#312e81;">tomorrow</strong>. Here's a summary of your exam prep practice so far.
      </p>
      ${statsBlock}
      ${weakBlock}
      <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:14px;padding:16px 18px;margin-bottom:22px;">
        <div style="font-size:12px;font-weight:800;color:#0369a1;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:8px;">A note from your teacher</div>
        <p style="margin:0;font-size:14px;line-height:1.7;color:#1e3a5f;">${comment}</p>
      </div>
      <p style="margin:0 0 22px;font-size:13px;font-weight:600;color:#9890b5;text-align:center;">Get a good night's sleep. You've got this. 💪</p>
      ${button('Open Exam Prep', APP_URL)}
    </div>`;

  return {
    subject: `${examLabel} is tomorrow — your exam prep summary`,
    html: emailShell(`${examLabel} tomorrow — here's your prep summary.`, inner),
  };
}

// ── Teacher email ─────────────────────────────────────────────────────────
export function examPrepD1TeacherEmail({ studentName, examLabel, examDate, profile, examSummary }) {
  const { pct, sessions, attempted, correct, weakTopics, trend } = profile;
  const name = esc(studentName);
  const accentColor = pct >= 80 ? '#10b981' : pct >= 60 ? '#f59e0b' : '#ef4444';
  const fillPct = Math.max(4, Math.min(100, pct));
  const hasData = sessions > 0;

  const trendLabel = trend === 'up' ? '↑ Improving' : trend === 'down' ? '↓ Declining' : '→ Stable';
  const trendColor = trend === 'up' ? '#10b981' : trend === 'down' ? '#ef4444' : '#6366f1';

  const scoreBar = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2ff;border-radius:999px;margin:6px 0;">
      <tr>
        <td width="${fillPct}%" style="background:${accentColor};border-radius:999px;font-size:0;line-height:0;height:8px;">&nbsp;</td>
        <td style="font-size:0;line-height:0;">&nbsp;</td>
      </tr>
    </table>`;

  const row = (label, value, valueColor = '#1e1b4b') => `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="padding:9px 0;border-bottom:1px solid #f1f0f8;">
        <span style="font-size:11px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:#9890b5;">${esc(label)}</span><br>
        <span style="font-size:14px;font-weight:700;color:${valueColor};">${value}</span>
      </td></tr></table>`;

  const weakBlock = weakTopics.length > 0 ? `
    <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:12px 16px;margin-top:16px;">
      <div style="font-size:11px;font-weight:800;color:#9a3412;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:6px;">Weak topics (under 60%)</div>
      <ul style="margin:0;padding-left:16px;color:#7c2d12;font-size:13px;line-height:1.8;">
        ${weakTopics.map((t) => `<li>${esc(t)}</li>`).join('')}
      </ul>
    </div>` : `
    <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:12px 16px;margin-top:16px;font-size:13px;color:#166534;font-weight:600;">
      ✓ No topics below 60% accuracy — balanced preparation.
    </div>`;

  const noDataBlock = !hasData ? `
    <div style="background:#fff1f2;border:1px solid #fecaca;border-radius:12px;padding:12px 16px;margin-top:16px;font-size:13px;color:#991b1b;font-weight:600;">
      ⚠️ No exam prep sessions completed — may need encouragement.
    </div>` : '';

  const inner = `
    <div style="background:linear-gradient(135deg,#1e3a8a,#312e81);padding:28px 32px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.7);">Teacher Report · D-1</div>
      <div style="font-family:'Outfit',sans-serif;font-size:22px;font-weight:800;color:#fff;margin-top:6px;">${name}</div>
      <div style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.8);margin-top:3px;">${esc(examLabel)} · tomorrow ${esc(examDate)}</div>
    </div>
    <div style="padding:28px 32px;">
      <p style="margin:0 0 18px;font-size:14px;line-height:1.6;color:#6d6a85;">
        ${name} has an exam tomorrow. Here's a snapshot of their exam prep activity for your review.
      </p>
      <div style="background:#f7f5fd;border-radius:16px;padding:6px 18px;margin-bottom:16px;">
        ${row('Sessions completed', hasData ? String(sessions) : 'None')}
        ${row('Questions attempted', hasData ? String(attempted) : '—')}
        ${row('Accuracy', hasData ? `${pct}%` : '—', accentColor)}
        ${row('Recent trend', hasData ? trendLabel : '—', trendColor)}
      </div>
      ${hasData ? scoreBar : ''}
      ${hasData ? weakBlock : ''}
      ${noDataBlock}
      <div style="margin-top:22px;">${button('View Student Profile', APP_URL, '#312e81')}</div>
    </div>`;

  return {
    subject: `[D-1] ${studentName} · ${examLabel} tomorrow`,
    html: emailShell(`${studentName}'s ${examLabel} is tomorrow — prep summary inside.`, inner),
  };
}
