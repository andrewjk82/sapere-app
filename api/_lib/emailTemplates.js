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

export { APP_URL };
