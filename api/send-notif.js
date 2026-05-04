import admin from 'firebase-admin';
import nodemailer from 'nodemailer';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailTemplate(title, body, ctaLabel = 'Go to Academy') {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${escapeHtml(title)}</title>
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
                  <h1 style="margin:0 0 28px; font-size:28px; line-height:1.25; font-weight:900; color:#191927;">${escapeHtml(title)}</h1>
                  <div style="font-size:20px; line-height:1.65; color:#4d4d60;">
                    ${body}
                  </div>
                  <div style="margin-top:44px; padding-top:28px; border-top:1px solid #edf0f7; text-align:center;">
                    <a href="https://sapere-app.vercel.app" style="display:inline-block; min-width:150px; background:#b4a6e4; color:#ffffff; padding:16px 32px; border-radius:999px; text-decoration:none; font-size:16px; font-weight:900; box-shadow:0 10px 24px rgba(180,166,228,0.28);">${ctaLabel}</a>
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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { studentId, email, subject, text, html } = req.body;
  let emailSent = false;

  try {
    // 0. Initialize Firebase Admin
    if (!admin.apps.length) {
      const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
      const privateKey = process.env.FIREBASE_PRIVATE_KEY;

      if (!projectId || !clientEmail || !privateKey) {
        throw new Error('Missing Firebase credentials (ID, Email, or Key)');
      }

      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey: privateKey.replace(/\\n/g, '\n'),
        }),
      });
    }

    const db = admin.firestore();

    // 1. Send Email (Inlined EmailService for reliability)
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_PASS = process.env.GMAIL_PASS;

    if (GMAIL_USER && GMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Sapere Aude Academia" <${GMAIL_USER}>`,
        to: email,
        subject: subject,
        html: buildEmailTemplate(subject, html || `<p style="margin:0; white-space:pre-wrap;">${escapeHtml(text || '')}</p>`)
      });
      emailSent = true;
    }

    // 2. Send Push Notification & Save to History
    let tokensFound = 0;
    if (studentId) {
      const userRef = db.collection('users').doc(studentId);
      const userDoc = await userRef.get();
      
      // Save to notification history subcollection
      await userRef.collection('notifications').add({
        title: subject,
        body: text || 'New notification',
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        read: false,
        type: 'test_reminder'
      });

      if (userDoc.exists) {
        const userData = userDoc.data();
        const tokens = userData.fcmTokens || (userData.fcmToken ? [userData.fcmToken] : []);
        tokensFound = tokens.length;
        
        if (tokens.length > 0) {
          console.log(`[API] Sending push to ${tokens.length} devices for student: ${studentId}`);
          await admin.messaging().sendEachForMulticast({
            notification: { title: subject, body: text || 'New notification' },
            tokens: tokens
          });
        }
      }
    }

    return res.status(200).json({ 
      success: true, 
      emailSent, 
      tokensFound 
    });
  } catch (error) {
    console.error('API Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
