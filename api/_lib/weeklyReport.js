/* ==========================================================================
   Weekly student report — shared builder
   --------------------------------------------------------------------------
   Used by both the Sunday cron (api/cron-unified.js) and the on-demand
   "Send Weekly Report" button (api/send-report.js). Files under api/_lib are
   ignored by Vercel's function router (underscore prefix).
   ========================================================================== */

const TZ = 'Australia/Sydney';

const sydneyDateStr = (date) =>
  date.toLocaleDateString('en-CA', { timeZone: TZ });

// Mon–Sun week containing `now` (Sydney). Returns YYYY-MM-DD day strings.
export function getWeekRangeSydney(now = new Date()) {
  const todayStr = sydneyDateStr(now);
  const todayUTC = new Date(`${todayStr}T00:00:00Z`);
  const dow = todayUTC.getUTCDay(); // 0 = Sunday
  const offsetToMon = dow === 0 ? 6 : dow - 1;
  const monday = new Date(todayUTC);
  monday.setUTCDate(todayUTC.getUTCDate() - offsetToMon);

  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setUTCDate(monday.getUTCDate() + i);
    days.push(d.toISOString().slice(0, 10));
  }
  const fmt = (s) => {
    const d = new Date(`${s}T00:00:00Z`);
    return d.toLocaleDateString('en-AU', { timeZone: 'UTC', day: 'numeric', month: 'short' });
  };
  return {
    weekId: days[0],
    days,
    dow,
    todayStr,
    label: `${fmt(days[0])} – ${fmt(days[6])}`,
  };
}

// Gather one student's data for the given week (7 day strings).
export async function gatherStudentWeek(db, studentId, days, studentEmail = '') {
  const userRef = db.collection('users').doc(studentId);

  // Challenge stats — one doc per day per collection (doc id = YYYY-MM-DD).
  const dailyByDate = {};
  const calcByDate = {};
  await Promise.all(days.map(async (d) => {
    const [ds, cs] = await Promise.all([
      userRef.collection('daily_stats').doc(d).get(),
      userRef.collection('calc_stats').doc(d).get(),
    ]);
    if (ds.exists) dailyByDate[d] = ds.data();
    if (cs.exists) calcByDate[d] = cs.data();
  }));

  // Lessons this week.
  const sessions = [];
  const seen = new Set();
  const emailLc = (studentEmail || '').trim().toLowerCase();
  try {
    const snap = await db.collection('sessions').where('date', 'in', days).get();
    snap.docs.forEach((doc) => {
      const s = doc.data();
      const matchId = String(s.studentId || '') === String(studentId);
      const sEmail = String(s.studentEmail || s.email || '').trim().toLowerCase();
      const matchEmail = emailLc && sEmail === emailLc;
      if ((matchId || matchEmail) && !seen.has(doc.id)) {
        seen.add(doc.id);
        sessions.push({ id: doc.id, ...s });
      }
    });
  } catch {
    // 'in' query needs an index in some cases — fall back to per-day reads.
    for (const d of days) {
      const snap = await db.collection('sessions').where('date', '==', d).get();
      snap.docs.forEach((doc) => {
        const s = doc.data();
        const matchId = String(s.studentId || '') === String(studentId);
        const sEmail = String(s.studentEmail || s.email || '').trim().toLowerCase();
        if ((matchId || (emailLc && sEmail === emailLc)) && !seen.has(doc.id)) {
          seen.add(doc.id);
          sessions.push({ id: doc.id, ...s });
        }
      });
    }
  }
  sessions.sort((a, b) => String(a.date).localeCompare(String(b.date)));

  return { dailyByDate, calcByDate, sessions };
}

// Aggregate week stats from the gathered data.
function summarize(days, dailyByDate, calcByDate) {
  let challengesCompleted = 0;
  let scoreSum = 0;
  let totalSum = 0;
  let xpEarned = 0;
  const topics = {}; // title → { total, wrong }

  const collect = (stat) => {
    if (!stat) return;
    if (stat.completed === true) challengesCompleted += 1;
    if (typeof stat.score === 'number') scoreSum += stat.score;
    if (typeof stat.total === 'number') totalSum += stat.total;
    if (typeof stat.xpEarned === 'number') xpEarned += stat.xpEarned;
    if (Array.isArray(stat.answerResults)) {
      stat.answerResults.forEach((r) => {
        if (!r || typeof r !== 'object') return;
        const title = r.topicTitle || r.topicCode || r.type || 'General';
        if (!topics[title]) topics[title] = { total: 0, wrong: 0 };
        topics[title].total += 1;
        if (r.correct === false) topics[title].wrong += 1;
      });
    }
  };

  days.forEach((d) => {
    collect(dailyByDate[d]);
    collect(calcByDate[d]);
  });

  const accuracy = totalSum > 0 ? Math.round((scoreSum / totalSum) * 100) : null;
  const weakTopics = Object.entries(topics)
    .map(([title, t]) => ({ title, ...t, errorRate: Math.round((t.wrong / t.total) * 100) }))
    .filter((t) => t.wrong > 0 && t.total >= 2)
    .sort((a, b) => b.errorRate - a.errorRate)
    .slice(0, 4);

  return { challengesCompleted, accuracy, xpEarned, weakTopics, attempts: scoreSum > 0 || totalSum > 0 };
}

const DAY_LETTERS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const esc = (s) => String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

// Build the inner HTML body + subject for a student's weekly report.
// Returns { subject, bodyHtml, hasData }.
export function renderWeeklyReportBody({ name, label, days, dailyByDate, calcByDate, sessions }) {
  const s = summarize(days, dailyByDate, calcByDate);
  const hasData = sessions.length > 0 || s.challengesCompleted > 0 || s.attempts;
  const firstName = String(name || 'Student').split(' ')[0];

  // ── Summary stat cards ──
  const statCard = (value, lbl, color) => `
    <td align="center" style="padding:6px;">
      <div style="background:#ffffff;border:1px solid #e8e2ff;border-radius:16px;padding:16px 8px;">
        <div style="font-size:26px;font-weight:900;color:${color};line-height:1;">${value}</div>
        <div style="font-size:11px;font-weight:800;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em;margin-top:6px;">${lbl}</div>
      </div>
    </td>`;
  const summaryRow = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;"><tr>
      ${statCard(`${s.challengesCompleted}/7`, 'Challenges', '#7c3aed')}
      ${statCard(s.accuracy != null ? `${s.accuracy}%` : '—', 'Accuracy', '#16a34a')}
      ${statCard(`+${s.xpEarned}`, 'XP earned', '#f59e0b')}
    </tr></table>`;

  // ── Lessons ──
  let lessonsHtml;
  if (sessions.length > 0) {
    lessonsHtml = sessions.map((ses) => `
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;padding:14px 16px;margin-bottom:8px;">
        <div style="font-weight:800;color:#1e1b4b;font-size:15px;">${esc(ses.subject || 'Lesson')}
          <span style="font-weight:700;color:#8b5cf6;font-size:13px;"> · ${esc(ses.date)} ${esc(ses.startTime || '')}</span>
        </div>
        ${ses.notes ? `<div style="color:#475569;font-size:13px;margin-top:6px;"><strong>Notes:</strong> ${esc(ses.notes)}</div>` : ''}
        ${ses.homework ? `<div style="color:#0369a1;font-size:13px;margin-top:4px;"><strong>Homework:</strong> ${esc(ses.homework)}</div>` : ''}
      </div>`).join('');
  } else {
    lessonsHtml = `<div style="color:#94a3b8;font-size:14px;">No lessons recorded this week.</div>`;
  }

  // ── Daily challenge grid ──
  const dayCells = days.map((d, i) => {
    const daily = dailyByDate[d];
    const calc = calcByDate[d];
    const parts = [];
    if (daily && typeof daily.score === 'number') parts.push(`${daily.score}/${daily.total ?? '?'}`);
    if (calc && typeof calc.score === 'number') parts.push(`⚡${calc.score}/${calc.total ?? '?'}`);
    const done = parts.length > 0;
    return `
      <td align="center" style="padding:4px;">
        <div style="background:${done ? '#f5f3ff' : '#f8fafc'};border:1px solid ${done ? '#ddd6fe' : '#eef2f7'};border-radius:12px;padding:10px 4px;">
          <div style="font-size:11px;font-weight:800;color:#94a3b8;">${DAY_LETTERS[i]}</div>
          <div style="font-size:12px;font-weight:800;color:${done ? '#6d28d9' : '#cbd5e1'};margin-top:4px;">${done ? parts.join('<br>') : '–'}</div>
        </div>
      </td>`;
  }).join('');
  const challengeGrid = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${dayCells}</tr></table>`;

  // ── Weak topics ──
  let weakHtml = '';
  if (s.weakTopics.length > 0) {
    weakHtml = `
      <h3 style="font-size:15px;font-weight:900;color:#1e1b4b;margin:24px 0 10px;">🎯 Focus areas for next week</h3>
      ${s.weakTopics.map((t) => `
        <div style="display:flex;justify-content:space-between;background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:10px 14px;margin-bottom:6px;">
          <span style="color:#92400e;font-weight:700;font-size:13px;">${esc(t.title)}</span>
          <span style="color:#b45309;font-weight:800;font-size:12px;">${t.errorRate}% wrong</span>
        </div>`).join('')}`;
  }

  const sectionTitle = (txt) =>
    `<h3 style="font-size:15px;font-weight:900;color:#1e1b4b;margin:24px 0 10px;">${txt}</h3>`;

  const bodyHtml = `
    <p style="margin:0 0 6px;font-size:16px;color:#1e1b4b;font-weight:700;">Hi ${esc(firstName)},</p>
    <p style="margin:0 0 18px;font-size:14px;color:#64748b;">Here is your learning summary for <strong>${esc(label)}</strong>.</p>
    ${summaryRow}
    ${sectionTitle('📚 This week\'s lessons')}
    ${lessonsHtml}
    ${sectionTitle('⚡ Daily challenge record')}
    ${challengeGrid}
    ${weakHtml}
    <p style="margin:24px 0 0;font-size:14px;color:#475569;line-height:1.6;">
      ${hasData
        ? 'Keep up the great work — consistency is what builds mastery. See you next week!'
        : 'No activity was recorded this week. A few minutes of daily practice makes a big difference — let\'s get started!'}
    </p>`;

  return {
    subject: `Weekly Report · ${label}`,
    bodyHtml,
    hasData,
  };
}

// Full email shell (purple Sapere theme). Mirrors the cron's template.
export function buildEmailShell(title, body, ctaLabel = 'Open Academy') {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light only"><title>${title}</title></head>
<body bgcolor="#f7f4ff" style="margin:0;padding:0;background:#f7f4ff;font-family:Arial,Helvetica,sans-serif;color:#1e1b4b;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f7f4ff" style="background:#f7f4ff;">
    <tr><td align="center" style="padding:28px 14px 32px;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="max-width:720px;background:#ffffff;border-radius:26px;overflow:hidden;border:1px solid #e8e2ff;box-shadow:0 18px 45px rgba(99,102,241,0.12);">
        <tr><td align="center" bgcolor="#ede9fe" style="background:#ede9fe;padding:34px 28px;border-bottom:1px solid #ddd6fe;">
          <div style="font-size:30px;line-height:1.15;font-weight:900;color:#312e81;">Sapereaude Academia</div>
        </td></tr>
        <tr><td bgcolor="#ffffff" style="background:#ffffff;padding:42px 40px 40px;">
          <h1 style="margin:0 0 22px;font-size:24px;line-height:1.3;font-weight:900;color:#1e1b4b;">${title}</h1>
          <div style="font-size:15px;line-height:1.6;color:#475569;">${body}</div>
          <div style="margin-top:34px;padding-top:24px;border-top:1px solid #eef2ff;text-align:center;">
            <a href="https://sapere-app.vercel.app" style="display:inline-block;min-width:150px;background:#6366f1;color:#ffffff;padding:15px 32px;border-radius:999px;text-decoration:none;font-size:16px;font-weight:900;">${ctaLabel}</a>
          </div>
        </td></tr>
      </table>
      <p style="margin:24px 0 0;color:#64748b;font-size:13px;font-weight:600;">© 2026 Sapereaude Academia. All rights reserved.</p>
    </td></tr>
  </table>
</body></html>`;
}
