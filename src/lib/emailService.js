const nodemailer = require('nodemailer');

const GMAIL_USER = process.env.GMAIL_USER || process.env.EMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS || process.env.EMAIL_PASS;

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailTemplate(subject, body) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${escapeHtml(subject)}</title>
    </head>
    <body style="margin:0; padding:0; background:#f4f7ff; font-family:Arial, Helvetica, sans-serif; color:#191927;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f7ff;">
        <tr>
          <td align="center" style="padding:24px 14px 30px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:760px; background:#ffffff; border-radius:30px; overflow:hidden; box-shadow:0 18px 50px rgba(31,41,55,0.08);">
              <tr>
                <td align="center" style="background:#b4a6e4; padding:46px 28px;">
                  <div style="font-size:34px; line-height:1.15; font-weight:900; color:#ffffff; letter-spacing:-0.02em;">Sapereaude Academia</div>
                </td>
              </tr>
              <tr>
                <td style="padding:54px 50px 46px;">
                  <h1 style="margin:0 0 28px; font-size:28px; line-height:1.25; font-weight:900; color:#191927;">${escapeHtml(subject)}</h1>
                  <div style="font-size:20px; line-height:1.65; color:#4d4d60; white-space:pre-wrap;">${escapeHtml(body)}</div>
                  <div style="margin-top:44px; padding-top:28px; border-top:1px solid #edf0f7; text-align:center;">
                    <a href="https://sapere-app.vercel.app" style="display:inline-block; min-width:150px; background:#b4a6e4; color:#ffffff; padding:16px 32px; border-radius:999px; text-decoration:none; font-size:16px; font-weight:900; box-shadow:0 10px 24px rgba(180,166,228,0.28);">Go to Academy</a>
                  </div>
                </td>
              </tr>
            </table>
            <p style="margin:26px 0 0; color:#818194; font-size:14px; line-height:1.5; font-weight:600;">© 2026 Sapereaude Academia. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

const EmailService = {
  async sendEmail(to, subject, body) {
    if (!to || !to.includes('@')) {
      console.warn(`Invalid email address: ${to}. Skipping email.`);
      return;
    }

    const htmlContent = buildEmailTemplate(subject, body);

    if (GMAIL_USER && GMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS,
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
        });

        await transporter.sendMail({
          from: `"Sapere Aude Academia" <${GMAIL_USER}>`,
          to,
          subject,
          html: htmlContent,
        });

        console.log(`Email successfully sent via Gmail to ${to}`);
        return true;
      } catch (error) {
        console.error('Gmail SMTP Error Detail:', error);
        throw error;
      }
    }

    console.warn('No email service configured. Skipping email notification.');
    return false;
  }
};

module.exports = { EmailService };
