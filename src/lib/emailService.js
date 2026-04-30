const nodemailer = require('nodemailer');

const GMAIL_USER = process.env.GMAIL_USER || process.env.EMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS || process.env.EMAIL_PASS;

const EmailService = {
  async sendEmail(to, subject, body) {
    if (!to || !to.includes('@')) {
      console.warn(`Invalid email address: ${to}. Skipping email.`);
      return;
    }

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; background-color: #f4f6fc; color: #1a1a24;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
          <div style="background: #6366f1; padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Sapere Aude Academia</h1>
          </div>
          <div style="padding: 40px;">
            <h2 style="color: #1a1a24; margin-top: 0;">${subject}</h2>
            <div style="font-size: 16px; line-height: 1.6; color: #4a4a5a; white-space: pre-wrap;">${body}</div>
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #f4f6fc; text-align: center;">
              <a href="https://sapere-app.vercel.app" style="display: inline-block; padding: 14px 28px; background: #6366f1; color: white; text-decoration: none; border-radius: 99px; font-weight: bold;">Go to Dashboard</a>
            </div>
          </div>
        </div>
        <p style="text-align: center; font-size: 12px; color: #7a7a8c; margin-top: 24px;">
          © 2026 Sapere Aude Academia. All rights reserved.
        </p>
      </div>
    `;

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
