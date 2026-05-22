/* ==========================================================================
   Sapere Aude — transactional email templates
   --------------------------------------------------------------------------
   Gmail / Outlook-safe: fully table-based, inline styles only, no flexbox.
   One shared shell + per-email body builders. Used by api/cron-unified.js.
   ========================================================================== */

const APP_URL = 'https://sapere-app.vercel.app';

const esc = (s) => String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

// Brand shell — purple header lockup, white content card, footer.
export function emailShell(previewText, innerHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
  <title>Sapere Aude</title>
</head>
<body style="margin:0;padding:0;background:#f3f1fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(previewText)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f3f1fb" style="background:#f3f1fb;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
        <!-- Brand row -->
        <tr><td style="padding:0 4px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
            <td style="width:34px;height:34px;background:#7c3aed;border-radius:9px;text-align:center;vertical-align:middle;color:#fff;font-weight:800;font-size:16px;">S</td>
            <td style="padding-left:10px;font-weight:800;font-size:15px;color:#1e1b4b;">Sapere Aude Academia</td>
          </tr></table>
        </td></tr>
        <!-- Card -->
        <tr><td style="background:#ffffff;border-radius:22px;overflow:hidden;box-shadow:0 14px 40px rgba(76,29,149,0.10);">
          ${innerHtml}
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:22px 8px 0;text-align:center;color:#9890b5;font-size:12px;line-height:1.6;font-weight:500;">
          Sent because you're enrolled at Sapere Aude Academia · North Sydney NSW<br>
          <a href="${APP_URL}" style="color:#7c3aed;text-decoration:none;font-weight:700;">Open the app</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// Shared button.
const button = (label, href = APP_URL, color = '#7c3aed') =>
  `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="background:${color};border-radius:13px;">
      <a href="${href}" style="display:inline-block;padding:15px 30px;color:#ffffff;text-decoration:none;font-size:15px;font-weight:800;">${esc(label)}</a>
    </td></tr></table>`;

// A small icon-less info row inside a soft card.
const infoRow = (label, value) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 2px;"><tr>
    <td style="padding:9px 0;border-bottom:1px solid #f1f0f8;">
      <span style="font-size:11px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:#9890b5;">${esc(label)}</span><br>
      <span style="font-size:14.5px;font-weight:700;color:#1e1b4b;">${value}</span>
    </td></tr></table>`;

/* ──────────────────────────────────────────────────────────────────────────
   1 · Daily challenge reminder
   ────────────────────────────────────────────────────────────────────────── */
export function dailyChallengeEmail({ name = 'there', topic = 'today\'s topics', questionCount = 10, minutes = 5, xp = 100, streak = 0 }) {
  const first = esc(String(name).split(' ')[0]);
  const stat = (val, lbl) =>
    `<td width="33.33%" align="center" style="padding:14px 6px;">
      <div style="font-family:'Outfit',sans-serif;font-size:22px;font-weight:800;color:#1e1b4b;">${val}</div>
      <div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#9890b5;margin-top:4px;">${lbl}</div>
    </td>`;
  const inner = `
    <div style="background:linear-gradient(135deg,#7c3aed,#a78bfa);padding:30px 32px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.75);">Daily challenge</div>
      <div style="font-family:'Outfit',sans-serif;font-size:24px;font-weight:800;color:#fff;margin-top:6px;">Today's practice is ready</div>
    </div>
    <div style="padding:30px 32px;">
      <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#1e1b4b;">Good morning, ${first} 👋</p>
      <p style="margin:0 0 22px;font-size:14px;line-height:1.6;color:#6d6a85;">
        ${questionCount} questions on <strong style="color:#1e1b4b;">${esc(topic)}</strong>, calibrated from your recent practice. About ${minutes} minutes.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f5fd;border-radius:16px;margin-bottom:22px;"><tr>
        ${stat(questionCount, 'Questions')}
        ${stat(`~${minutes} min`, 'Time')}
        ${stat(`+${xp} XP`, 'Up for grabs')}
      </tr></table>
      ${streak > 0 ? `<p style="margin:0 0 22px;font-size:13.5px;font-weight:700;color:#b45309;background:#fffbeb;border:1px solid #fef3c7;border-radius:12px;padding:12px 14px;">🔥 You're on a ${streak}-day streak — let's keep it going.</p>` : ''}
      ${button('Begin practice')}
    </div>`;
  return {
    subject: "Today's daily challenge is ready",
    html: emailShell(`${questionCount} questions on ${topic} — about ${minutes} minutes.`, inner),
  };
}

/* ──────────────────────────────────────────────────────────────────────────
   2 · Class reminder
   ────────────────────────────────────────────────────────────────────────── */
export function classReminderEmail({ name = 'there', subjectLabel = 'your class', whenLabel = '', dateLabel = '', teacher = '', topic = '', room = '', bring = '', hoursAway = 1 }) {
  const first = esc(String(name).split(' ')[0]);
  const rows = [
    (whenLabel || dateLabel) && infoRow('When', `${esc(whenLabel)}${whenLabel && dateLabel ? ' · ' : ''}${esc(dateLabel)}`),
    room && infoRow('Where', esc(room)),
    teacher && infoRow('Teacher', esc(teacher)),
    topic && infoRow('Topic', esc(topic)),
    bring && infoRow('Bring', esc(bring)),
  ].filter(Boolean).join('');
  const inner = `
    <div style="background:linear-gradient(135deg,#312e81,#4338ca);padding:30px 32px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.75);">Class reminder · in ${hoursAway === 1 ? '1 hour' : `${hoursAway} hours`}</div>
      <div style="font-family:'Outfit',sans-serif;font-size:23px;font-weight:800;color:#fff;margin-top:6px;">${esc(subjectLabel)}</div>
    </div>
    <div style="padding:30px 32px;">
      <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#1e1b4b;">Hi ${first},</p>
      <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:#6d6a85;">
        A quick reminder that your next class is coming up. Here are the details:
      </p>
      <div style="background:#f7f5fd;border-radius:16px;padding:6px 18px;margin-bottom:22px;">
        ${rows}
      </div>
      ${button('View lesson', APP_URL, '#4338ca')}
    </div>`;
  return {
    subject: `Class reminder · ${subjectLabel}`,
    html: emailShell(`${subjectLabel} starts soon${whenLabel ? ` — ${whenLabel}` : ''}.`, inner),
  };
}

/* ──────────────────────────────────────────────────────────────────────────
   1b · Evening wrap-up — the existing 6 PM reminder, restyled
   ────────────────────────────────────────────────────────────────────────── */
export function dailyWrapupEmail({ name = 'there', hasUnfinishedTasks = false, challengeDone = false, calcEnabled = false, calcDone = false, tomorrowClasses = [] }) {
  const first = esc(String(name).split(' ')[0]);
  const headline = hasUnfinishedTasks ? "Today's practice is waiting" : "You're all set for tomorrow";

  let cards = '';
  if (hasUnfinishedTasks) {
    const bits = [];
    if (!challengeDone) bits.push('your daily challenge');
    if (calcEnabled && !calcDone) bits.push('your calculation sprint');
    cards += `<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;padding:15px 17px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:800;color:#9a3412;">⏳ Not finished yet</div>
      <p style="margin:6px 0 0;font-size:13.5px;line-height:1.6;color:#7c2d12;">
        You still have ${bits.join(' and ') || 'practice'} to complete today — just 10 minutes keeps your streak alive.
      </p>
    </div>`;
  } else {
    cards += `<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:15px 17px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:800;color:#166534;">✓ All done for today</div>
      <p style="margin:6px 0 0;font-size:13.5px;line-height:1.6;color:#166534;">Great consistency — here's what's coming up.</p>
    </div>`;
  }
  if (tomorrowClasses.length > 0) {
    cards += `<div style="background:#f7f5fd;border-radius:16px;padding:6px 18px;">`
      + tomorrowClasses.map((c, i) => `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="padding:11px 0;${i < tomorrowClasses.length - 1 ? 'border-bottom:1px solid #f1f0f8;' : ''}">
            <span style="font-size:11px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:#9890b5;">Tomorrow</span><br>
            <span style="font-size:14.5px;font-weight:700;color:#1e1b4b;">${esc(c.subject)} · ${esc(c.startTime)}</span>
          </td></tr></table>`).join('')
      + `</div>`;
  }

  const inner = `
    <div style="background:linear-gradient(135deg,#7c3aed,#a78bfa);padding:30px 32px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.75);">Evening check-in</div>
      <div style="font-family:'Outfit',sans-serif;font-size:23px;font-weight:800;color:#fff;margin-top:6px;">${headline}</div>
    </div>
    <div style="padding:30px 32px;">
      <p style="margin:0 0 16px;font-size:15px;font-weight:700;color:#1e1b4b;">Hi ${first},</p>
      ${cards}
      <div style="margin-top:22px;">${button(hasUnfinishedTasks ? "Finish today's practice" : 'Open the app')}</div>
    </div>`;
  return {
    subject: hasUnfinishedTasks ? 'You have unfinished practice today' : 'Your schedule for tomorrow',
    html: emailShell(hasUnfinishedTasks ? "Today's practice isn't finished yet." : "Here's what's coming up tomorrow.", inner),
  };
}

/* ──────────────────────────────────────────────────────────────────────────
   3 · Challenge completed — sent to the teacher when a student finishes
   ────────────────────────────────────────────────────────────────────────── */
export function challengeCompleteEmail({ studentName = 'A student', label = 'Daily Challenge', score = 0, total = 0, xpEarned = 0, reviewCount = 0, reportCount = 0 }) {
  const name = esc(studentName);
  const pct = total > 0 ? Math.round((Number(score) / Number(total)) * 100) : 0;
  const accentColor = pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444';
  const fillPct = Math.max(4, Math.min(100, pct)); // keep a sliver visible

  // Email-safe "graph": a two-cell table acts as a progress bar.
  const scoreBar = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2ff;border-radius:999px;">
      <tr>
        <td width="${fillPct}%" style="background:${accentColor};border-radius:999px;font-size:0;line-height:0;height:12px;">&nbsp;</td>
        <td style="font-size:0;line-height:0;">&nbsp;</td>
      </tr>
    </table>`;

  const stat = (val, lbl, color) =>
    `<td width="33.33%" align="center" style="padding:14px 6px;">
      <div style="font-family:'Outfit',sans-serif;font-size:22px;font-weight:800;color:${color || '#1e1b4b'};">${val}</div>
      <div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#9890b5;margin-top:4px;">${lbl}</div>
    </td>`;

  const attention = [];
  if (reviewCount > 0) attention.push(`${reviewCount} answer${reviewCount === 1 ? '' : 's'} need review`);
  if (reportCount > 0) attention.push(`${reportCount} question${reportCount === 1 ? '' : 's'} reported`);

  const inner = `
    <div style="background:linear-gradient(135deg,#7c3aed,#a78bfa);padding:28px 32px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.75);">${esc(label)} complete</div>
      <div style="font-family:'Outfit',sans-serif;font-size:23px;font-weight:800;color:#fff;margin-top:6px;">${name}</div>
    </div>
    <div style="padding:30px 32px;">
      <!-- Big score -->
      <div style="text-align:center;margin-bottom:8px;">
        <span style="font-family:'Outfit',sans-serif;font-size:46px;font-weight:800;color:#1e1b4b;">${score}</span>
        <span style="font-family:'Outfit',sans-serif;font-size:22px;font-weight:700;color:#9890b5;"> / ${total}</span>
      </div>
      <div style="text-align:center;font-size:13px;font-weight:800;color:${accentColor};letter-spacing:0.04em;margin-bottom:14px;">${pct}% ACCURACY</div>
      ${scoreBar}
      <!-- Stat tiles -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f5fd;border-radius:16px;margin-top:22px;"><tr>
        ${stat(`${score}/${total}`, 'Score')}
        ${stat(`${pct}%`, 'Accuracy', accentColor)}
        ${stat(`+${xpEarned}`, 'XP earned', '#7c3aed')}
      </tr></table>
      ${attention.length ? `
      <div style="margin-top:18px;background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;padding:14px 16px;">
        <div style="font-size:13px;font-weight:800;color:#9a3412;">⚠️ Needs your attention</div>
        <p style="margin:6px 0 0;font-size:13px;line-height:1.6;color:#7c2d12;">${esc(attention.join(' · '))}</p>
      </div>` : ''}
      <div style="margin-top:24px;">${button('Go to Academy')}</div>
    </div>`;
  return {
    subject: `${label} completed: ${studentName}`,
    html: emailShell(`${name} scored ${score}/${total} on ${label}.`, inner),
  };
}

/* ──────────────────────────────────────────────────────────────────────────
   Generic notification — any title + HTML body (schedule updates, messages…)
   ────────────────────────────────────────────────────────────────────────── */
export function genericEmail({ title = 'Sapere Aude', body = '', ctaLabel = 'Open the app', ctaHref = APP_URL }) {
  const inner = `
    <div style="background:linear-gradient(135deg,#7c3aed,#a78bfa);padding:28px 32px;">
      <div style="font-family:'Outfit',sans-serif;font-size:21px;font-weight:800;color:#fff;line-height:1.3;">${esc(title)}</div>
    </div>
    <div style="padding:28px 32px;">
      <div style="font-size:14.5px;line-height:1.65;color:#3f3a5c;">${body}</div>
      ${ctaLabel ? `<div style="margin-top:24px;">${button(ctaLabel, ctaHref)}</div>` : ''}
    </div>`;
  return emailShell(title, inner);
}

/* ──────────────────────────────────────────────────────────────────────────
   Admin summary — internal cron / batch completion reports
   ────────────────────────────────────────────────────────────────────────── */
export function adminSummaryEmail({ title = 'Summary', rows = [], note = '' }) {
  const rowHtml = rows.map(([k, v], i) => `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="padding:10px 0;${i < rows.length - 1 ? 'border-bottom:1px solid #f1f0f8;' : ''}">
        <span style="font-size:12px;font-weight:700;color:#9890b5;">${esc(k)}</span>
      </td>
      <td align="right" style="padding:10px 0;${i < rows.length - 1 ? 'border-bottom:1px solid #f1f0f8;' : ''}">
        <span style="font-size:14px;font-weight:800;color:#1e1b4b;">${esc(v)}</span>
      </td>
    </tr></table>`).join('');
  const inner = `
    <div style="background:linear-gradient(135deg,#312e81,#4338ca);padding:26px 32px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.7);">Admin · automated report</div>
      <div style="font-family:'Outfit',sans-serif;font-size:21px;font-weight:800;color:#fff;margin-top:6px;">${esc(title)}</div>
    </div>
    <div style="padding:26px 32px;">
      <div style="background:#f7f5fd;border-radius:16px;padding:6px 18px;">${rowHtml}</div>
      ${note ? `<p style="margin:16px 0 0;font-size:13px;font-weight:600;color:#6d6a85;">${esc(note)}</p>` : ''}
    </div>`;
  return emailShell(title, inner);
}

export { APP_URL };
