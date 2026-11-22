/* ==========================================================================
   Parent weekly report — email body builder (English / Korean)
   --------------------------------------------------------------------------
   Pure: takes already-loaded data, returns { subject, html }. The layout is
   table-based with inline styles (Gmail/Outlook safe). Preview sample:
   tools/email/parent_weekly_sample.py → docs/sample-parent-weekly-report-jamie*.html
   ========================================================================== */

const esc = (s) => String(s ?? '').replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Apple SD Gothic Neo','Malgun Gothic',Helvetica,Arial,sans-serif";

const STR = {
  en: {
    intro: (n) => `Hi, here is a summary of ${n}'s week.`,
    kicker: (r) => `Weekly report · ${r}`,
    tLessons: 'Lessons', tHw: 'Homework due', tDays: 'Practice days', tAcc: 'Accuracy',
    sLessons: 'Lessons & what we covered', sHw: 'Homework', sPrac: 'Online practice', sBook: 'Textbook progress', sNext: 'Next week',
    due: (d) => `Due ${d}`, checked: 'Checked', submitted: 'Submitted · marking', excused: 'Excused',
    goal: (n) => `Questions answered each day · daily set is ${n}`,
    answered: 'Questions answered', correct: (n) => `(${n} correct)`, byDay: 'Accuracy by day', study: 'Study time logged',
    min: (m) => (m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : `${m} min`),
    most: 'Most practised topics',
    week: (n) => `+${n} topics this week`, ofBook: 'of the book covered', topics: (a, b) => `${a} of ${b} topics`,
    chapter: (n) => `Ch ${n}`, bookNote: 'Topics covered in lessons so far, per textbook. Current chapter in bold.',
    nHw: (items) => `Hand in homework ${items} by ${'{d}'}.`,
    nPrac: 'Daily practice: keep going with the daily set.',
    nBest: (p, d) => `${d}'s ${p}% was the best day of the week.`,
    noLessons: 'No lessons this week.', noPractice: 'No online practice recorded this week.',
    foot: 'Sent to parents of Secret Study students · North Sydney NSW<br>Reply to this email if you have any questions.',
    subject: (n, r) => `[Secret Study] Weekly report: ${n} (${r})`,
    dayShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    dateFmt: (d) => d.toLocaleDateString('en-AU', { timeZone: 'UTC', weekday: 'short', day: 'numeric', month: 'short' }),
    rangeFmt: (a, b) => `${a.toLocaleDateString('en-AU', { timeZone: 'UTC', day: 'numeric', month: 'short' })} – ${b.toLocaleDateString('en-AU', { timeZone: 'UTC', day: 'numeric', month: 'short' })}`,
    dueFmt: (d) => d.toLocaleDateString('en-AU', { timeZone: 'UTC', weekday: 'short', day: 'numeric', month: 'short' }),
    time: (t) => t,
    chapterHead: (course, n) => `${course} · Chapter ${n}`,
  },
  ko: {
    intro: (n) => `안녕하세요, ${n}의 이번 주 학습 내용을 정리해 드립니다.`,
    kicker: (r) => `주간 리포트 · ${r}`,
    tLessons: '수업', tHw: '마감 숙제', tDays: '연습한 날', tAcc: '정답률',
    sLessons: '수업 & 배운 내용', sHw: '숙제', sPrac: '온라인 연습', sBook: '교재 진도', sNext: '다음 주',
    due: (d) => `${d} 마감`, checked: '채점 완료', submitted: '제출 · 채점 중', excused: '면제',
    goal: (n) => `하루에 푼 문제 수 · 하루 기본 세트는 ${n}문제`,
    answered: '푼 문제 수', correct: (n) => `(정답 ${n})`, byDay: '요일별 정답률', study: '기록된 학습 시간',
    min: (m) => (m >= 60 ? `${Math.floor(m / 60)}시간 ${m % 60}분` : `${m}분`),
    most: '가장 많이 푼 단원',
    week: (n) => `이번 주 +${n}개 단원`, ofBook: '교재 진행률', topics: (a, b) => `전체 ${b}개 중 ${a}개 완료`,
    chapter: (n) => `${n}장`, bookNote: '지금까지 수업에서 다룬 단원 기준, 교재별 진도입니다. 현재 진행 중인 장은 굵게 표시됩니다.',
    nHw: (items) => `숙제 ${items}를 {d}까지 제출해 주세요.`,
    nPrac: '매일 연습: 기본 세트를 계속 이어가세요.',
    nBest: (p, d) => `${d}요일 ${p}%가 이번 주 최고 기록이었습니다.`,
    noLessons: '이번 주 수업이 없었습니다.', noPractice: '이번 주 온라인 연습 기록이 없습니다.',
    foot: 'Secret Study 학부모님께 발송 · North Sydney NSW<br>궁금한 점은 이 메일에 답장해 주세요.',
    subject: (n, r) => `[Secret Study] 주간 리포트: ${n} (${r})`,
    dayShort: ['월', '화', '수', '목', '금', '토', '일'],
    dateFmt: (d) => `${d.getUTCMonth() + 1}월 ${d.getUTCDate()}일 (${['일', '월', '화', '수', '목', '금', '토'][d.getUTCDay()]})`,
    rangeFmt: (a, b) => `${a.getUTCMonth() + 1}월 ${a.getUTCDate()}일 – ${b.getUTCDate()}일${a.getUTCMonth() !== b.getUTCMonth() ? ` (${b.getUTCMonth() + 1}월)` : ''}`,
    dueFmt: (d) => `${d.getUTCMonth() + 1}월 ${d.getUTCDate()}일(${['일', '월', '화', '수', '목', '금', '토'][d.getUTCDay()]})`,
    time: (t) => String(t || '').replace(/^(\d{1,2}:\d{2})\s*(AM|PM)$/i, (_, hm, ap) => `${/pm/i.test(ap) ? '오후' : '오전'} ${hm}`),
    chapterHead: (course, n) => `${course} · ${n}장`,
  },
};

const utc = (s) => new Date(`${s}T00:00:00Z`);

// ── layout pieces ──────────────────────────────────────────────────────────
const chip = (t, bg, fg) => `<span style="display:inline-block;background:${bg};color:${fg};font-size:11px;font-weight:800;padding:3px 9px;border-radius:99px;">${esc(t)}</span>`;
const sec = (t) => `<div style="margin:34px 0 14px;"><div style="font-size:11.5px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#4f46e5;">${esc(t)}</div><div style="height:1px;background:#e5e7eb;margin-top:10px;"></div></div>`;
const tile = (v, l) => `<td width="25%" style="padding:0 3px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f3ff;border-radius:14px;"><tr><td style="padding:14px 6px;text-align:center;"><div style="font-size:24px;font-weight:800;color:#4c1d95;">${esc(v)}</div><div style="font-size:11px;font-weight:700;color:#7c3aed;margin-top:2px;">${esc(l)}</div></td></tr></table></td>`;
const bar = (p, color = '#4f46e5') => {
  const w = Math.max(0, Math.min(100, Math.round(p)));
  if (w <= 0) return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background:#e5e7eb;height:8px;border-radius:99px;font-size:0;line-height:0;">&nbsp;</td></tr></table>';
  if (w >= 100) return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background:${color};height:8px;border-radius:99px;font-size:0;line-height:0;">&nbsp;</td></tr></table>`;
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td width="${w}%" style="background:${color};height:8px;border-radius:99px 0 0 99px;font-size:0;line-height:0;">&nbsp;</td><td style="background:#e5e7eb;height:8px;border-radius:0 99px 99px 0;font-size:0;line-height:0;">&nbsp;</td></tr></table>`;
};
const row = (label, p, val, color = '#4f46e5', vcolor = '#0f172a', bold = false) =>
  `<tr><td width="42%" style="padding:6px 0;">${bold ? `<b style="color:#0f172a;">${esc(label)}</b>` : esc(label)}</td><td style="padding:6px 8px;">${bar(p, color)}</td><td width="56" align="right" style="padding:6px 0;font-weight:800;color:${vcolor};white-space:nowrap;">${esc(val)}</td></tr>`;
const dayCell = (l, v) => {
  const on = v != null;
  return `<td align="center" width="14.28%" style="padding:0 2px;"><div style="font-size:11px;font-weight:700;color:#94a3b8;padding-bottom:6px;">${esc(l)}</div><div style="background:${on ? '#4f46e5' : '#f1f5f9'};color:${on ? '#fff' : '#cbd5e1'};border-radius:10px;padding:9px 0;font-size:13px;font-weight:800;">${on ? esc(v) : '–'}</div></td>`;
};

const pctColor = (p) => (p >= 70 ? ['#4f46e5', '#0f172a'] : p >= 40 ? ['#f59e0b', '#b45309'] : ['#ef4444', '#b91c1c']);

const isCancelled = (s) => /cancel/i.test(String(s.attendance || s.status || ''));

/**
 * @param {object} a
 * @param {'en'|'ko'} a.lang
 * @param {string} a.name        student's display name
 * @param {string} a.subtitle    e.g. "Year 11 · Maths"
 * @param {string[]} a.days      Mon..Sun YYYY-MM-DD
 * @param {object} a.dailyByDate daily_stats docs by date
 * @param {object[]} a.sessions  this week's sessions
 * @param {object[]} a.allSessions every session of the student (for textbook progress)
 * @param {object} a.curricula   { 'Year 12|Extension 1': curriculumDoc, ... }
 * @param {number} [a.dailyGoal]
 */
export function buildParentReport({ lang = 'en', name, subtitle = '', days, dailyByDate = {}, sessions = [], allSessions = [], curricula = {}, dailyGoal = 10 }) {
  const L = STR[lang] || STR.en;
  const first = String(name || '').trim().split(/\s+/)[0] || name;
  const range = L.rangeFmt(utc(days[0]), utc(days[6]));
  const live = sessions.filter((s) => !isCancelled(s));

  // ── lessons ──
  const lessonHtml = live.length ? live.map((s, i) => {
    const byBook = new Map();
    for (const t of s.learnedTopics || []) {
      const key = t.groupKey || '';
      const chNum = (String(t.chapterTitle || '').match(/Chapter\s+(\d+)/i) || [])[1] || (String(t.chapterId || '').match(/(\d+)$/) || [])[1] || '';
      const k = `${key}#${chNum}`;
      if (!byBook.has(k)) byBook.set(k, { course: key.split('|')[1] || key.split('|')[0] || '', chNum, lines: [] });
      byBook.get(k).lines.push(`${esc(t.code || '')} ${esc(t.title || t.label || '')}`.trim());
    }
    const groups = [...byBook.values()];
    const body = groups.length
      ? groups.map((g) => `<b style="color:#0f172a;">${esc(g.chNum ? L.chapterHead(g.course, g.chNum) : g.course)}</b><br>${g.lines.join('<br>')}`).join('<br><br>')
      : `<b style="color:#0f172a;">${esc(s.subject || 'Maths')}</b>`;
    const time = [s.startTime, s.endTime].filter(Boolean).map(L.time).join(' – ');
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:${i < live.length - 1 ? 14 : 0}px;"><tr><td width="118" valign="top" style="font-size:13px;font-weight:800;color:#1e1b4b;line-height:1.5;">${esc(L.dateFmt(utc(s.date)))}<br><span style="font-weight:600;color:#94a3b8;">${esc(time)}</span></td><td valign="top" style="font-size:14px;line-height:1.6;color:#334155;">${body}</td></tr></table>`;
  }).join('') : `<div style="font-size:14px;color:#94a3b8;">${L.noLessons}</div>`;

  // ── homework (one line per session's set) ──
  const hwItems = [];
  for (const s of live) {
    const lines = String(s.homework || '').split('\n').map((x) => x.trim()).filter(Boolean);
    if (!lines.length) continue;
    const status = s.isHomeworkCompleted === true || s.homeworkStatus === 'checked' ? 'checked' : s.homeworkStatus === 'submitted' ? 'submitted' : s.homeworkStatus === 'excused' ? 'excused' : s.homeworkStatus === 'deleted' ? 'deleted' : 'todo';
    if (status === 'deleted') continue;
    hwItems.push({ lines, status, due: s.homeworkDueDate, score: s.homeworkScore, total: s.homeworkTotal });
  }
  const hwHtml = hwItems.length ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;color:#334155;">${hwItems.map((h, i) => {
    const codes = h.lines.map((l) => l.split('·')[0].trim()).join(', ');
    const sub = h.lines.map((l) => l.split('·').slice(1).join('·').trim() || l).join(' · ');
    const badge = h.status === 'checked' ? `${h.score != null && h.total ? `<span style="font-weight:800;color:#0f172a;">${esc(h.score)}/${esc(h.total)}</span> &nbsp;` : ''}${chip(L.checked, '#dcfce7', '#166534')}`
      : h.status === 'submitted' ? chip(L.submitted, '#dbeafe', '#1e40af')
        : h.status === 'excused' ? chip(L.excused, '#f1f5f9', '#475569')
          : chip(L.due(h.due ? L.dueFmt(utc(h.due)) : '—'), '#fef3c7', '#92400e');
    return `<tr><td style="padding:9px 0;${i < hwItems.length - 1 ? 'border-bottom:1px solid #f1f5f9;' : ''}"><b style="color:#0f172a;">${esc(codes)}</b><br><span style="font-size:12.5px;color:#64748b;">${esc(sub)}</span></td><td align="right" valign="top" style="padding:9px 0;${i < hwItems.length - 1 ? 'border-bottom:1px solid #f1f5f9;' : ''}white-space:nowrap;">${badge}</td></tr>`;
  }).join('')}</table>` : '';
  const pendingTopics = hwItems.filter((h) => h.status === 'todo').reduce((n, h) => n + h.lines.length, 0);

  // ── practice ──
  const perDay = days.map((d) => {
    const v = dailyByDate[d];
    const ts = Object.values(v?.topicStats || {});
    const total = ts.reduce((n, x) => n + (x.total || 0), 0);
    const correct = ts.reduce((n, x) => n + (x.correct || 0), 0);
    return { d, total, correct, secs: v?.studyTimeTotalSec || 0 };
  });
  const active = perDay.filter((x) => x.total > 0);
  const totalQ = active.reduce((n, x) => n + x.total, 0);
  const totalC = active.reduce((n, x) => n + x.correct, 0);
  const accPct = totalQ ? Math.round((100 * totalC) / totalQ) : null;
  const studyMin = Math.round(perDay.reduce((n, x) => n + x.secs, 0) / 60);
  const topicAgg = new Map();
  for (const v of Object.values(dailyByDate)) for (const x of Object.values(v?.topicStats || {})) {
    const cur = topicAgg.get(x.id) || { label: x.label, total: 0, correct: 0 };
    cur.total += x.total || 0; cur.correct += x.correct || 0; topicAgg.set(x.id, cur);
  }
  const topTopics = [...topicAgg.values()].sort((a, b) => b.total - a.total).slice(0, 4);
  const bestDay = active.length > 1 ? active.reduce((a, b) => (b.correct / b.total > a.correct / a.total ? b : a)) : null;
  const practiceHtml = active.length ? `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>${perDay.map((x, i) => dayCell(L.dayShort[i], x.total > 0 ? x.total : null)).join('')}</tr><tr><td colspan="7" style="padding-top:8px;font-size:12px;color:#94a3b8;">${L.goal(dailyGoal)}</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;font-size:14px;color:#334155;">
<tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${L.answered}</td><td align="right" style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-weight:800;color:#0f172a;">${totalQ} &nbsp;<span style="font-weight:600;color:#64748b;">${L.correct(totalC)}</span></td></tr>
<tr><td style="padding:8px 0;${studyMin ? 'border-bottom:1px solid #f1f5f9;' : ''}">${L.byDay}</td><td align="right" style="padding:8px 0;${studyMin ? 'border-bottom:1px solid #f1f5f9;' : ''}font-weight:800;color:#0f172a;">${active.map((x, i) => { const p = Math.round((100 * x.correct) / x.total); return i === active.length - 1 ? `<span style="color:${p >= 50 ? '#16a34a' : '#0f172a'};">${p}%</span>` : `${p}%`; }).join(' → ')}</td></tr>
${studyMin ? `<tr><td style="padding:8px 0;">${L.study}</td><td align="right" style="padding:8px 0;font-weight:800;color:#0f172a;">${L.min(studyMin)}</td></tr>` : ''}</table>
${topTopics.length ? `<div style="margin-top:20px;font-size:12px;font-weight:800;color:#64748b;letter-spacing:0.04em;">${L.most}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:8px;font-size:13px;color:#334155;">${topTopics.map((t) => { const p = Math.round((100 * t.correct) / t.total); const [c, vc] = pctColor(p); return row(t.label, p, `${t.correct}/${t.total}`, c, vc); }).join('')}</table>` : ''}`
    : `<div style="font-size:14px;color:#94a3b8;">${L.noPractice}</div>`;

  // ── textbook progress ──
  const weekIds = new Set(live.flatMap((s) => (s.learnedTopics || []).map((t) => t.id)));
  const before = new Set(allSessions.filter((s) => s.date < days[0]).flatMap((s) => (s.learnedTopics || []).map((t) => t.id)));
  const everByBook = new Map();
  for (const s of allSessions) for (const t of s.learnedTopics || []) {
    if (!t.groupKey) continue;
    if (!everByBook.has(t.groupKey)) everByBook.set(t.groupKey, new Set());
    everByBook.get(t.groupKey).add(t.id);
  }
  const bookKeys = [...everByBook.keys()].filter((k) => curricula[k]);
  // this week's books first
  const weekBooks = new Set(live.flatMap((s) => (s.learnedTopics || []).map((t) => t.groupKey)));
  bookKeys.sort((a, b) => Number(weekBooks.has(b)) - Number(weekBooks.has(a)));
  const bookHtml = bookKeys.map((k) => {
    const cur = curricula[k];
    const covered = everByBook.get(k);
    const chapters = (cur.chapters || []);
    const all = chapters.flatMap((c) => (c.topics || []).map((t) => t.id));
    const done = all.filter((id) => covered.has(id)).length;
    const wk = all.filter((id) => weekIds.has(id) && !before.has(id)).length;
    const pct = all.length ? Math.round((100 * done) / all.length) : 0;
    const currentChapter = [...live].reverse().flatMap((s) => [...(s.learnedTopics || [])].reverse()).find((t) => t.groupKey === k)?.chapterId;
    let shown = chapters.map((c, i) => ({ c, i, n: (c.topics || []).filter((t) => covered.has(t.id)).length })).filter((x) => x.n > 0 || x.c.id === currentChapter);
    if (shown.length > 5) shown = shown.slice(-5);
    const rows = shown.map(({ c, i, n }) => {
      const tot = (c.topics || []).length || 1;
      const num = (String(c.title || '').match(/Chapter\s+(\d+)/i) || [])[1] || i + 1;
      const title = String(c.title || '').replace(/^Chapter\s+\d+:\s*/i, '');
      const cur2 = c.id === currentChapter;
      return row(`${L.chapter(num)} ${title}`, (100 * n) / tot, `${n}/${tot}`, '#4f46e5', cur2 ? '#4f46e5' : '#0f172a', cur2);
    }).join('');
    const bname = [cur.year, cur.course].filter(Boolean).join(' ') || k.replace('|', ' ');
    return `<div style="margin-top:6px;padding:16px;border:1px solid #e5e7eb;border-radius:14px;margin-bottom:14px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="font-size:14px;font-weight:800;color:#4c1d95;">${esc(bname)}</td>${wk ? `<td align="right" style="font-size:12px;font-weight:800;color:#16a34a;white-space:nowrap;">${L.week(wk)}</td>` : ''}</tr></table>
<div style="margin-top:8px;font-size:14px;color:#334155;"><b style="color:#0f172a;font-size:22px;">${pct}%</b> &nbsp;${L.ofBook} <span style="color:#94a3b8;">· ${L.topics(done, all.length)}</span></div>
<div style="margin-top:8px;">${bar(pct)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;font-size:13px;color:#334155;">${rows}</table></div>`;
  }).join('');

  // ── next week ──
  const dueDates = [...new Set(hwItems.filter((h) => h.status === 'todo' && h.due).map((h) => h.due))].sort();
  const pendCodes = hwItems.filter((h) => h.status === 'todo').flatMap((h) => h.lines.map((l) => l.split('·')[0].trim()));
  const next = [];
  if (pendCodes.length) next.push(L.nHw(`<b>${esc(pendCodes.join(', '))}</b>`).replace('{d}', dueDates.length ? L.dueFmt(utc(dueDates[0])) : '—'));
  if (active.length) next.push(L.nPrac + (bestDay && bestDay.correct / bestDay.total >= 0.5 ? ` ${L.nBest(Math.round((100 * bestDay.correct) / bestDay.total), L.dayShort[days.indexOf(bestDay.d)])}` : ''));
  const nextHtml = next.length ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;line-height:1.65;color:#334155;">${next.map((t, i) => `<tr><td width="22" valign="top" style="color:#7c3aed;font-weight:800;">${i + 1}.</td><td style="padding-bottom:6px;">${t}</td></tr>`).join('')}</table>` : '';

  const html = `<!DOCTYPE html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="color-scheme" content="light only"><title>${esc(L.subject(name, range))}</title></head>
<body style="margin:0;padding:0;background:#f3f1fb;font-family:${FONT};color:#0f172a;word-break:keep-all;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(L.intro(first))}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f3f1fb"><tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
<tr><td style="padding:0 4px 16px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="width:34px;height:34px;background:#7c3aed;border-radius:9px;text-align:center;vertical-align:middle;color:#fff;font-weight:800;font-size:16px;">S</td><td style="padding-left:10px;font-weight:800;font-size:15px;color:#1e1b4b;">Secret Study</td></tr></table></td></tr>
<tr><td style="background:#ffffff;border-radius:22px;overflow:hidden;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background:#4c1d95;padding:30px 32px 28px;">
<div style="font-size:11.5px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#c4b5fd;">${esc(L.kicker(range))}</div>
<div style="font-size:26px;line-height:1.25;font-weight:800;color:#ffffff;margin-top:8px;">${esc(name)}</div>
${subtitle ? `<div style="font-size:14px;color:#ddd6fe;margin-top:4px;">${esc(subtitle)}</div>` : ''}</td></tr></table>
<div style="padding:8px 32px 32px;">
<p style="margin:22px 0 0;font-size:15px;line-height:1.65;color:#334155;">${esc(L.intro(first))}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;"><tr>${tile(live.length, L.tLessons)}${tile(hwItems.length ? pendingTopics : '–', L.tHw)}${tile(`${active.length}/7`, L.tDays)}${tile(accPct != null ? `${accPct}%` : '–', L.tAcc)}</tr></table>
${sec(L.sLessons)}${lessonHtml}
${hwHtml ? sec(L.sHw) + hwHtml : ''}
${sec(L.sPrac)}${practiceHtml}
${bookHtml ? sec(L.sBook) + bookHtml + `<div style="font-size:12px;color:#94a3b8;">${L.bookNote}</div>` : ''}
${nextHtml ? sec(L.sNext) + nextHtml : ''}
</div></td></tr>
<tr><td style="padding:22px 8px 0;text-align:center;color:#9890b5;font-size:12px;line-height:1.6;font-weight:500;">${L.foot}</td></tr>
</table></td></tr></table></body></html>`;

  return { subject: L.subject(name, range), html };
}
