const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Initialize Firebase Admin
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// SMTP Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const SENDER_NAME = 'Andrew Kim | Sapere Aude';
const SENDER_EMAIL = process.env.EMAIL_USER;

function buildEmailTemplate(title, body, ctaLabel = 'Go to Academy') {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light only">
      <meta name="supported-color-schemes" content="light">
      <title>${title}</title>
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
                  <h1 style="margin:0 0 24px; font-size:28px; line-height:1.28; font-weight:900; color:#1e1b4b;">${title}</h1>
                  <div style="font-size:19px; line-height:1.68; color:#475569;">
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:20px; padding:26px 28px;">
                      ${body}
                    </div>
                  </div>
                  <div style="margin-top:36px; padding-top:26px; border-top:1px solid #eef2ff; text-align:center;">
                    <a href="https://sapere-app.vercel.app" style="display:inline-block; min-width:150px; background:#6366f1; color:#ffffff; padding:15px 32px; border-radius:999px; text-decoration:none; font-size:16px; font-weight:900; box-shadow:0 10px 22px rgba(99,102,241,0.24);">${ctaLabel}</a>
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

async function runTasks() {
  const now = new Date();
  const sydneyOffset = 10; 
  const sydneyHour = (now.getUTCHours() + sydneyOffset) % 24;
  
  console.log(`Current Sydney Hour: ${sydneyHour}`);

  if (sydneyHour === 20) {
    console.log('--- Processing Night-Before Reminders (8 PM) ---');
    await sendNightBeforeReminders();
  }

  console.log('--- Checking for lessons starting in 2 hours ---');
  await sendUpcomingReminders();

  console.log('--- Processing pending test notifications ---');
  await processTestNotifications();
}

async function processTestNotifications() {
  const mailSnap = await db.collection('mail')
    .where('status', '!=', 'sent')
    .get();

  for (const doc of mailSnap.docs) {
    const mailData = doc.data();
    console.log(`Sending pending test notification to: ${mailData.to}`);
    
    try {
      // 1. Send Email
      await transporter.sendMail({
        from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
        to: mailData.to,
        subject: mailData.message.subject,
        html: buildEmailTemplate(
          mailData.message.subject || 'Message from Sapereaude Academia',
          mailData.message.html || `<p style="margin:0;">${mailData.message.text || 'You have a new notification.'}</p>`
        )
      });

      // 2. Send Push Notification (if token exists)
      if (mailData.studentId) {
        await sendPushNotification(mailData.studentId, mailData.message.subject, mailData.message.text || 'Test message');
      }

      await doc.ref.update({ status: 'sent', sentAt: admin.firestore.FieldValue.serverTimestamp() });
    } catch (e) {
      console.error('Test notification failed:', e);
    }
  }
}

async function sendNightBeforeReminders() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const sessionsSnap = await db.collection('sessions')
    .where('date', '==', tomorrowStr)
    .where('status', '==', 'Scheduled')
    .get();

  for (const doc of sessionsSnap.docs) {
    const session = doc.data();
    await sendNotifications(session, `[Sapere] Reminder: Your lesson tomorrow at ${session.startTime}`, true);
  }
}

async function sendUpcomingReminders() {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const targetHour = (new Date().getUTCHours() + 10 + 2) % 24;
  const targetTimePrefix = `${targetHour.toString().padStart(2, '0')}:`;

  const sessionsSnap = await db.collection('sessions')
    .where('date', '==', todayStr)
    .where('status', '==', 'Scheduled')
    .get();

  for (const doc of sessionsSnap.docs) {
    const session = doc.data();
    if (session.startTime && session.startTime.startsWith(targetTimePrefix)) {
      await sendNotifications(session, `[Sapere] Quick Reminder: Your lesson starts in 2 hours!`, false);
    }
  }
}

async function sendNotifications(session, subject, isNightBefore) {
  const userDoc = await db.collection('users').doc(session.studentId).get();
  if (!userDoc.exists) return;
  const userData = userDoc.data();
  const prefs = userData.notifications || {};
    
  const loginEmail = userData.email;

  // 1. Send Email
  if (prefs.email && loginEmail) {
    console.log(`Sending email to: ${loginEmail}`);
    await transporter.sendMail({
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
      to: loginEmail,
      subject: subject,
      html: buildEmailTemplate(
        isNightBefore ? 'Reminder: Your Lesson Is Tomorrow' : 'Reminder: Your Lesson Starts Soon',
        `
          <p style="margin:0 0 24px;">Hello ${userData.firstName || 'Scholar'},</p>
          <p style="margin:0 0 24px;">${isNightBefore ? 'This is a reminder for your lesson tomorrow.' : 'Your lesson starts in 2 hours.'}</p>
          <p style="margin:0; font-weight:800; color:#191927;">${session.startTime} | ${session.subject}</p>
        `
      )
    });
  }

  // 2. Send Push Notification
  if (prefs.push) {
    await sendPushNotification(session.studentId, isNightBefore ? 'Lesson Tomorrow! 📚' : 'Lesson in 2 Hours! ⏰', `Your ${session.subject} class starts at ${session.startTime}.`);
  }
}

async function sendPushNotification(userId, title, body) {
  try {
    const userDoc = await db.collection('users').doc(userId).get();
    const userData = userDoc.data();
    const tokens = [...new Set(userData?.fcmTokens || (userData?.fcmToken ? [userData.fcmToken] : []))].filter(Boolean);
    
    if (tokens.length > 0) {
      console.log(`Sending push notification to ${tokens.length} token(s) for user: ${userId}`);
      const response = await admin.messaging().sendEachForMulticast({
        notification: { title, body },
        webpush: {
          notification: {
            icon: '/logo.png',
            badge: '/logo.png'
          },
          fcmOptions: {
            link: 'https://sapere-app.vercel.app'
          }
        },
        tokens
      });
      console.log(`Push result for ${userId}: ${response.successCount} success, ${response.failureCount} failed.`);
    } else {
      console.log(`No FCM token found for user: ${userId}`);
    }
  } catch (error) {
    console.error('Push notification error:', error);
  }
}

runTasks().catch(err => {
  console.error(err);
  process.exit(1);
});
