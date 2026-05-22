import { emailShell } from './emailTemplates.js';
/* ==========================================================================
   Weekly student report — shared builder
   --------------------------------------------------------------------------
   Used by the Sunday cron (api/cron-unified.js) and the on-demand
   "Weekly Report" button (api/send-report.js). Files under api/_lib are
   ignored by Vercel's function router (underscore prefix).

   Email layout is fully table-based with inline styles — Gmail/Outlook safe
   (no flexbox).
   ========================================================================== */

const TZ = 'Australia/Sydney';

const sydneyDateStr = (date) =>
  date.toLocaleDateString('en-CA', { timeZone: TZ });

const esc = (s) => String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

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
  const fmt = (s) => new Date(`${s}T00:00:00Z`)
    .toLocaleDateString('en-AU', { timeZone: 'UTC', day: 'numeric', month: 'short' });
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

  const sessions = [];
  const seen = new Set();
  const emailLc = (studentEmail || '').trim().toLowerCase();
  const matches = (s) => {
    const matchId = String(s.studentId || '') === String(studentId);
    const sEmail = String(s.studentEmail || s.email || '').trim().toLowerCase();
    return matchId || (emailLc && sEmail === emailLc);
  };
  try {
    const snap = await db.collection('sessions').where('date', 'in', days).get();
    snap.docs.forEach((doc) => {
      const s = doc.data();
      if (matches(s) && !seen.has(doc.id)) { seen.add(doc.id); sessions.push({ id: doc.id, ...s }); }
    });
  } catch {
    for (const d of days) {
      const snap = await db.collection('sessions').where('date', '==', d).get();
      snap.docs.forEach((doc) => {
        const s = doc.data();
        if (matches(s) && !seen.has(doc.id)) { seen.add(doc.id); sessions.push({ id: doc.id, ...s }); }
      });
    }
  }
  sessions.sort((a, b) => String(a.date).localeCompare(String(b.date)));

  return { dailyByDate, calcByDate, sessions };
}

// ── Topic labelling ────────────────────────────────────────────────────────
const TYPE_NAMES = {
  short_answer: 'Short-answer questions',
  multiple_choice: 'Multiple-choice questions',
  graph_sketch: 'Graphing questions',
};
const topicLabel = (r) => {
  if (r.topicTitle) return r.topicTitle;
  if (r.topicCode) return r.topicCode;
  if (r.type && TYPE_NAMES[r.type]) return TYPE_NAMES[r.type];
  if (r.type) return String(r.type).replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return 'General';
};

function summarize(days, dailyByDate, calcByDate) {
  let challengesCompleted = 0;
  let scoreSum = 0;
  let totalSum = 0;
  let xpEarned = 0;
  const topics = {};

  const collect = (stat) => {
    if (!stat) return;
    if (stat.completed === true) challengesCompleted += 1;
    if (typeof stat.score === 'number') scoreSum += stat.score;
    if (typeof stat.total === 'number') totalSum += stat.total;
    if (typeof stat.xpEarned === 'number') xpEarned += stat.xpEarned;
    if (Array.isArray(stat.answerResults)) {
      stat.answerResults.forEach((r) => {
        if (!r || typeof r !== 'object') return;
        const label = topicLabel(r);
        if (!topics[label]) topics[label] = { total: 0, wrong: 0 };
        topics[label].total += 1;
        if (r.correct === false) topics[label].wrong += 1;
      });
    }
  };
  days.forEach((d) => { collect(dailyByDate[d]); collect(calcByDate[d]); });

  const accuracy = totalSum > 0 ? Math.round((scoreSum / totalSum) * 100) : null;
  const weakTopics = Object.entries(topics)
    .map(([label, t]) => ({ label, ...t, errorRate: Math.round((t.wrong / t.total) * 100) }))
    .filter((t) => t.wrong > 0 && t.total >= 2)
    .sort((a, b) => b.errorRate - a.errorRate)
    .slice(0, 4);

  // Full per-topic breakdown — every topic the student attempted this week,
  // with how many questions were solved and how many were correct.
  const topicBreakdown = Object.entries(topics)
    .map(([label, t]) => ({
      label,
      total: t.total,
      correct: t.total - t.wrong,
      accuracy: Math.round(((t.total - t.wrong) / t.total) * 100),
    }))
    .sort((a, b) => b.total - a.total || a.label.localeCompare(b.label));

  return {
    challengesCompleted,
    accuracy,
    xpEarned,
    weakTopics,
    topicBreakdown,
    hasAttempts: totalSum > 0,
  };
}

const DAY_LETTERS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const fmtLessonDate = (dateStr, time) => {
  const d = new Date(`${dateStr}T00:00:00Z`);
  const day = d.toLocaleDateString('en-AU', { timeZone: 'UTC', weekday: 'short', day: 'numeric', month: 'short' });
  return time ? `${day} · ${time}` : day;
};

const C = {
  ink: '#0f172a', sub: '#64748b', muted: '#94a3b8', faint: '#cbd5e1',
  accent: '#4f46e5', line: '#e5e7eb', lineSoft: '#f1f5f9',
};

const sectionLabel = (txt) =>
  `<div style="margin:36px 0 16px;">
    <div style="font-size:11.5px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:${C.accent};">${txt}</div>
    <div style="height:1px;background-color:${C.line};margin-top:10px;"></div>
  </div>`;

// Build a 7-column day grid (one value per cell).
function dayGrid(days, byDate) {
  const cells = days.map((d, i) => {
    const stat = byDate[d];
    const done = stat && typeof stat.score === 'number';
    const val = done ? `${stat.score}/${stat.total ?? '?'}` : '–';
    return `<td width="14.28%" align="center" style="padding:0 3px;">
      <div style="background:${done ? '#eef2ff' : '#f8fafc'};border:1px solid ${done ? '#e0e7ff' : C.lineSoft};border-radius:10px;padding:11px 2px;">
        <div style="font-size:10px;font-weight:700;color:${C.muted};letter-spacing:0.03em;">${DAY_LETTERS[i]}</div>
        <div style="font-size:13px;font-weight:800;color:${done ? '#3730a3' : C.faint};margin-top:7px;">${val}</div>
      </div>
    </td>`;
  }).join('');
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed;"><tr>${cells}</tr></table>`;
}

import { CURRICULUM_DATA } from '../../src/constants/curriculumData.js';

// Build the inner HTML body + subject for a student's weekly report.
export function renderWeeklyReportBody({ name, label, days, dailyByDate, calcByDate, sessions, student = {} }) {
  const s = summarize(days, dailyByDate, calcByDate);
  const hasCalc = days.some((d) => calcByDate[d]);
  const hasData = sessions.length > 0 || s.challengesCompleted > 0 || s.hasAttempts;
  const firstName = esc(String(name || 'Student').split(' ')[0]);

  // ── Compute Curriculum Progress ──
  let curriculumHtml = '';
  try {
    let rawYears = Array.isArray(student.assignedYear)
      ? student.assignedYear
      : [student.assignedYear || student.level || student.year || "Year 11"];
      
    let assignedYears = [];
    rawYears.forEach(y => {
      if (!y) return;
      let s = String(y).trim();
      if (/^\d+$/.test(s)) assignedYears.push(`Year ${s}`);
      else if (s.toLowerCase().startsWith('year ')) assignedYears.push(`Year ${s.substring(5).trim()}`);
      else assignedYears.push(s);
    });

    const rawCourse = student.assignedCourse || student.course || "Advanced";
    const assignedCourses = Array.isArray(student.assignedCourse)
      ? student.assignedCourse
      : [rawCourse];

    let chapters = [];
    assignedYears.forEach((year) => {
      const yearData = CURRICULUM_DATA[year];
      if (!yearData) return;
      if (Array.isArray(yearData)) {
        chapters = [...chapters, ...yearData];
      } else {
        assignedCourses.forEach((course) => {
          if (yearData[course]) {
            chapters = [...chapters, ...yearData[course]];
          }
        });
      }
    });

    const uniqueChapters = [];
    const seenIds = new Set();
    chapters.forEach((ch) => {
      if (!seenIds.has(ch.id)) { uniqueChapters.push(ch); seenIds.add(ch.id); }
    });
    chapters = uniqueChapters;

    const assignedChapterIds = student.assignedChapters || [];
    const completedChapters = student.completedChapters || [];
    
    // Find current chapter: the last assigned chapter that isn't completed.
    let currentChapterTitle = '';
    for (let i = assignedChapterIds.length - 1; i >= 0; i--) {
      if (!completedChapters.includes(assignedChapterIds[i])) {
        const ch = chapters.find(c => c.id === assignedChapterIds[i]);
        if (ch) {
          currentChapterTitle = ch.title;
          break;
        }
      }
    }
    // If none found but there are completed chapters, they might be done or we just pick the last assigned
    if (!currentChapterTitle && assignedChapterIds.length > 0) {
      const lastId = assignedChapterIds[assignedChapterIds.length - 1];
      const ch = chapters.find(c => c.id === lastId);
      if (ch) currentChapterTitle = ch.title + ' (Completed)';
    }

    if (chapters.length > 0) {
      const currentChapterIds = new Set(chapters.map((ch) => ch.id));
      const uniqueCompleted = new Set(completedChapters);
      const completedInCurriculum = Array.from(uniqueCompleted).filter((id) => currentChapterIds.has(id));
      const progressPct = Math.min(Math.round((completedInCurriculum.length / (chapters.length || 1)) * 100), 100);

      curriculumHtml = `
        ${sectionLabel('Academic Progress')}
        <div style="background:#ffffff;border:1px solid #eef2ff;border-radius:20px;padding:22px 24px;margin-bottom:28px;box-shadow:0 8px 24px rgba(99,102,241,0.04);">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:12px;">
            <div>
              <div style="font-size:16px;font-weight:800;color:${C.ink};">Curriculum</div>
              ${currentChapterTitle ? `<div style="font-size:13px;font-weight:600;color:${C.accent};margin-top:4px;">Currently on: ${esc(currentChapterTitle)}</div>` : ''}
            </div>
            <div style="font-size:16px;font-weight:800;color:${C.accent};">${progressPct}%</div>
          </div>
          <div style="background:#eef2ff;border-radius:999px;height:8px;width:100%;overflow:hidden;">
            <div style="background:linear-gradient(90deg, #6366f1, #8b5cf6);height:100%;border-radius:999px;width:${progressPct}%;"></div>
          </div>
        </div>
      `;
    }
  } catch (err) {
    console.error('Error generating curriculum progress for email:', err);
  }

  // ── Summary: 3 figures, hairline-divided ──
  const stat = (value, sub, lbl, isLast) => `
    <td width="33.33%" align="center" style="padding:22px 8px;${isLast ? '' : `border-right:1px solid ${C.line};`}">
      <div style="font-size:30px;font-weight:800;color:${C.ink};line-height:1;">${value}${sub ? `<span style="font-size:15px;font-weight:700;color:${C.muted};">${sub}</span>` : ''}</div>
      <div style="font-size:10px;font-weight:700;color:${C.muted};letter-spacing:0.08em;text-transform:uppercase;margin-top:9px;">${lbl}</div>
    </td>`;
  const summary = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${C.line};border-radius:14px;border-collapse:separate;">
      <tr>
        ${stat(s.challengesCompleted, '/7', 'Challenges done', false)}
        ${stat(s.accuracy != null ? s.accuracy : '—', s.accuracy != null ? '%' : '', 'Accuracy', false)}
        ${stat(`+${s.xpEarned}`, '', 'XP earned', true)}
      </tr>
    </table>`;

  // ── Attendance badge ──
  const ATTENDANCE = {
    attended:    { label: 'Attended',    bg: '#f0fdf4', fg: '#166534' },
    late:        { label: 'Late',        bg: '#fffbeb', fg: '#b45309' },
    absent:      { label: 'Absent',      bg: '#fef2f2', fg: '#b91c1c' },
    rescheduled: { label: 'Rescheduled', bg: '#eef2ff', fg: '#4338ca' },
    cancelled:   { label: 'Cancelled',   bg: '#f1f5f9', fg: '#64748b' },
  };
  const attendanceBadge = (key) => {
    const a = ATTENDANCE[key];
    if (!a) return '';
    return `<span style="display:inline-block;font-size:10.5px;font-weight:800;padding:3px 9px;border-radius:999px;background:${a.bg};color:${a.fg};">${a.label}</span>`;
  };

  // ── Lessons / classes & attendance ──
  let lessonsHtml;
  if (sessions.length > 0) {
    lessonsHtml = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">` +
      sessions.map((ses, idx) => `
        <tr><td style="padding:15px 0;${idx < sessions.length - 1 ? `border-bottom:1px solid ${C.lineSoft};` : ''}">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="font-size:15px;font-weight:700;color:${C.ink};">${esc(ses.subject || 'Lesson')}</td>
            <td align="right">${attendanceBadge(ses.attendance)}</td>
          </tr></table>
          <div style="font-size:12px;font-weight:600;color:${C.muted};margin-top:3px;">${esc(fmtLessonDate(ses.date, ses.startTime))}</div>
          ${ses.topicCovered ? `
          <div style="margin-top:14px;margin-bottom:6px;">
            <div style="font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#94a3b8;margin-bottom:6px;">Today Covered</div>
            <div style="background:#f8fafc;border:1px solid #f1f5f9;border-radius:12px;padding:12px 14px;">
              ${ses.topicCovered.split('\n').filter(l => l.trim()).map((line, i, arr) => `
                <div style="display:flex;align-items:flex-start;${i < arr.length - 1 ? 'margin-bottom:6px;' : ''}">
                  <span style="font-size:14px;margin-right:8px;line-height:1.4;">✅</span>
                  <span style="font-size:13.5px;font-weight:600;color:#0f172a;line-height:1.4;">${esc(line.trim())}</span>
                </div>
              `).join('')}
            </div>
          </div>` : ''}
          ${ses.notes ? `<div style="font-size:13px;color:#475569;line-height:1.55;margin-top:9px;"><span style="font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${C.muted};">Notes</span><br>${esc(ses.notes)}</div>` : ''}
          ${ses.homework ? `<div style="font-size:13px;color:#475569;line-height:1.55;margin-top:9px;"><span style="font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${C.accent};">Homework</span><br>${esc(ses.homework)}</div>` : ''}
        </td></tr>`).join('') +
      `</table>`;
  } else {
    lessonsHtml = `<div style="font-size:13px;color:${C.muted};">No lessons were scheduled this week.</div>`;
  }

  // ── Homework ──
  const hwSessions = sessions.filter((ses) => (ses.homework || '').trim()
    || ses.homeworkScore != null || ses.homeworkTotal != null);
  let homeworkHtml = '';
  if (hwSessions.length > 0) {
    homeworkHtml = sectionLabel('Homework') +
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">` +
      hwSessions.map((ses, idx) => {
        const hasMark = ses.homeworkScore != null && ses.homeworkTotal != null && Number(ses.homeworkTotal) > 0;
        const done = ses.isHomeworkCompleted === true;
        const markPct = hasMark ? (Number(ses.homeworkScore) / Number(ses.homeworkTotal)) * 100 : null;
        const markColor = markPct == null ? C.sub : markPct >= 80 ? '#16a34a' : markPct >= 50 ? '#d97706' : '#dc2626';
        const right = hasMark
          ? `<span style="font-size:14px;font-weight:900;color:${markColor};">${Number(ses.homeworkScore)}/${Number(ses.homeworkTotal)}</span>`
          : `<span style="font-size:10.5px;font-weight:800;padding:3px 9px;border-radius:999px;background:${done ? '#f0fdf4' : '#fff7ed'};color:${done ? '#166534' : '#9a3412'};">${done ? 'Submitted' : 'Pending'}</span>`;
        return `<tr><td style="padding:13px 0;${idx < hwSessions.length - 1 ? `border-bottom:1px solid ${C.lineSoft};` : ''}">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="font-size:13.5px;font-weight:700;color:${C.ink};line-height:1.5;">${esc((ses.homework || 'Homework').trim())}
              <div style="font-size:11.5px;font-weight:600;color:${C.muted};margin-top:2px;">${esc(ses.subject || '')} · ${esc(fmtLessonDate(ses.date))}</div>
            </td>
            <td align="right" style="white-space:nowrap;padding-left:12px;">${right}</td>
          </tr></table>
        </td></tr>`;
      }).join('') + `</table>`;
  }

  // ── Challenge record ──
  const miniLabel = (txt) => `<div style="font-size:11px;font-weight:700;color:${C.sub};margin:0 0 8px;">${txt}</div>`;
  let challengeHtml = miniLabel('Daily practice') + dayGrid(days, dailyByDate);
  if (hasCalc) {
    challengeHtml += `<div style="height:14px;"></div>` + miniLabel('Calculation sprint') + dayGrid(days, calcByDate);
  }

  // ── Topic breakdown — solved / correct per topic ──
  let topicHtml = '';
  if (s.topicBreakdown.length > 0) {
    const headCell = (txt, align) =>
      `<td align="${align}" style="padding:10px 14px;font-size:10px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:${C.muted};white-space:nowrap;background:#f8fafc;">${txt}</td>`;
    const rows = s.topicBreakdown.map((t, i) => {
      const last = i === s.topicBreakdown.length - 1;
      const border = last ? '' : `border-bottom:1px solid ${C.lineSoft};`;
      const accColor = t.accuracy >= 80 ? '#16a34a' : t.accuracy >= 50 ? '#d97706' : '#dc2626';
      return `<tr>
        <td style="padding:11px 14px;font-size:13px;font-weight:600;color:${C.ink};${border}">${esc(t.label)}</td>
        <td align="center" style="padding:11px 10px;font-size:13px;font-weight:700;color:${C.sub};${border}">${t.total}</td>
        <td align="center" style="padding:11px 10px;font-size:13px;font-weight:700;color:${C.sub};${border}">${t.correct}</td>
        <td align="right" style="padding:11px 14px;font-size:13px;font-weight:800;color:${accColor};${border}">${t.accuracy}%</td>
      </tr>`;
    }).join('');
    topicHtml = sectionLabel('Topic breakdown') +
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${C.line};border-radius:12px;border-collapse:separate;">
        <tr>
          ${headCell('Topic', 'left')}
          ${headCell('Solved', 'center')}
          ${headCell('Correct', 'center')}
          ${headCell('Accuracy', 'right')}
        </tr>
        ${rows}
      </table>`;
  }

  // ── Focus areas ──
  let focusHtml = '';
  if (s.weakTopics.length > 0) {
    focusHtml = sectionLabel('Focus for next week') +
      s.weakTopics.map((t) => `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;margin-bottom:7px;">
          <tr>
            <td style="padding:12px 15px;font-size:13px;font-weight:600;color:#9a3412;">${esc(t.label)}</td>
            <td align="right" style="padding:12px 15px;font-size:12px;font-weight:800;color:#c2410c;white-space:nowrap;">${t.errorRate}% missed</td>
          </tr>
        </table>`).join('');
  }

  const closing = hasData
    ? `Consistent practice is what turns effort into mastery. Great work this week, ${firstName}!`
    : `No activity was recorded this week. Just a few minutes of daily practice makes a real difference — let's get back on track.`;

  const bodyHtml = `
    <p style="margin:0 0 3px;font-size:15px;font-weight:600;color:${C.ink};">Hi ${firstName},</p>
    <p style="margin:0 0 28px;font-size:14px;color:${C.sub};line-height:1.55;">Here is the learning summary for <strong style="color:${C.ink};">${esc(label)}</strong>.</p>
    ${summary}
    ${curriculumHtml}
    ${sectionLabel("Classes & attendance")}
    ${lessonsHtml}
    ${homeworkHtml}
    ${sectionLabel('Challenge record')}
    ${challengeHtml}
    ${topicHtml}
    ${focusHtml}
    <p style="margin:32px 0 0;font-size:13.5px;color:#475569;line-height:1.6;">${closing}</p>`;

  return {
    subject: `Weekly Report · ${label}`,
    bodyHtml,
    hasData,
  };
}

// Weekly report email — uses the shared branded shell.
export function buildEmailShell(title, body) {
  const inner = `
    <div style="background:linear-gradient(135deg,#7c3aed,#a78bfa);padding:28px 32px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.75);">Weekly report</div>
      <div style="font-family:'Outfit',sans-serif;font-size:22px;font-weight:800;color:#ffffff;margin-top:6px;">${esc(title)}</div>
    </div>
    <div style="padding:28px 32px;">${body}</div>`;
  return emailShell(title, inner);
}
