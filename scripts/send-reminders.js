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
        html: mailData.message.html
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
      html: `<div style="font-family: sans-serif; padding: 20px;"><h2>Hi ${userData.firstName}!</h2><p>${isNightBefore ? 'Reminder for your lesson tomorrow.' : 'Lesson starts in 2 hours!'}</p><p>⏰ ${session.startTime} | 📚 ${session.subject}</p></div>`
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
