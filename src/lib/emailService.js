import nodemailer from 'nodemailer';

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
      <meta name="color-scheme" content="light only">
      <meta name="supported-color-schemes" content="light">
      <title>${escapeHtml(subject)}</title>
    </head>
    <body bgcolor="#f7f4ff" style="margin:0; padding:0; background:#f7f4ff; font-family:Arial, Helvetica, sans-serif; color:#1e1b4b;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f7f4ff" style="background:#f7f4ff;">
        <tr>
          <td align="center" style="padding:28px 14px 32px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="max-width:720px; background:#ffffff; border-radius:26px; overflow:hidden; border:1px solid #e8e2ff; box-shadow:0 18px 45px rgba(99,102,241,0.12);">
              <tr>
                <td align="center" bgcolor="#ede9fe" style="background:#ede9fe; padding:34px 28px; border-bottom:1px solid #ddd6fe;">
                  <div style="font-size:30px; line-height:1.15; font-weight:900; color:#312e81; letter-spacing:0;">Sapereaude Academia</div>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" style="background:#ffffff; padding:46px 44px 42px;">
                  <h1 style="margin:0 0 24px; font-size:28px; line-height:1.28; font-weight:900; color:#1e1b4b;">${escapeHtml(subject)}</h1>
                  <div style="font-size:19px; line-height:1.68; color:#475569;">
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:20px; padding:26px 28px; white-space:pre-wrap;">${escapeHtml(body)}</div>
                  </div>
                  <div style="margin-top:36px; padding-top:26px; border-top:1px solid #eef2ff; text-align:center;">
                    <a href="https://sapere-app.vercel.app" style="display:inline-block; min-width:150px; background:#6366f1; color:#ffffff; padding:15px 32px; border-radius:999px; text-decoration:none; font-size:16px; font-weight:900; box-shadow:0 10px 22px rgba(99,102,241,0.24);">Go to Academy</a>
                  </div>
                </td>
              </tr>
            </table>
            <p style="margin:24px 0 0; color:#64748b; font-size:14px; line-height:1.5; font-weight:600;">© 2026 Sapereaude Academia. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export const EmailService = {
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
