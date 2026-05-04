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
      <title>${title}</title>
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
                  <h1 style="margin:0 0 28px; font-size:28px; line-height:1.25; font-weight:900; color:#191927;">${title}</h1>
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
          <p style="margin:0 0 28px;">Hello ${userData.firstName || 'Scholar'},</p>
          <p style="margin:0 0 28px;">${isNightBefore ? 'This is a reminder for your lesson tomorrow.' : 'Your lesson starts in 2 hours.'}</p>
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
    
    if (userData && userData.fcmToken) {
      console.log(`Sending push notification to token for user: ${userId}`);
      const message = {
        notification: { title, body },
        token: userData.fcmToken
      };
      await admin.messaging().send(message);
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
