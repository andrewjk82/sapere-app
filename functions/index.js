const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore();

// 1. Email Setup (Gmail recommended for easy setup)
// ⚠️ IMPORTANT: Replace 'YOUR_EMAIL@gmail.com' and 'YOUR_APP_PASSWORD' 
// with your actual Gmail and the 16-digit App Password you generated.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com', 
    pass: 'YOUR_APP_PASSWORD' 
  }
});

const SENDER_NAME = 'Sapere Aude Academia'; // You can change this to your name
const SENDER_EMAIL = 'YOUR_EMAIL@gmail.com'; 

/**
 * Scheduled Function: Runs every day at 8:00 PM
 * Sends reminders for the next day's lessons.
 */
exports.sendNightBeforeReminders = functions.pubsub
  .schedule('0 20 * * *') // 8:00 PM every day
  .timeZone('Australia/Sydney') // Change to your timezone
  .onRun(async (context) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    // 1. Get all sessions for tomorrow
    const sessionsSnap = await db.collection('sessions')
      .where('date', '==', tomorrowStr)
      .where('status', '==', 'Scheduled')
      .get();

    const notifications = [];

    for (const doc of sessionsSnap.docs) {
      const session = doc.data();
      const studentId = session.studentId;

      // 2. Get student profile for notification preferences and FCM token
      const userDoc = await db.collection('users').doc(studentId).get();
      if (!userDoc.exists) continue;
      
      const userData = userDoc.data();
      const prefs = userData.notifications || {};

      // 3. Send Email if opted-in
      if (prefs.email && userData.email) {
        const mailOptions = {
          from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
          to: userData.email,
          subject: `Reminder: Your lesson tomorrow at ${session.startTime}`,
          text: `Hi ${userData.firstName}, this is a reminder for your ${session.subject} lesson tomorrow at ${session.startTime}. See you then!`,
          html: `<b>Hi ${userData.firstName},</b><p>This is a reminder for your <b>${session.subject}</b> lesson tomorrow at <b>${session.startTime}</b>.</p><p>See you then!</p>`
        };
        notifications.push(transporter.sendMail(mailOptions));
      }

      // 4. Send Push Notification if opted-in and has token
      if (prefs.push && userData.fcmToken) {
        const message = {
          notification: {
            title: 'Lesson Tomorrow! 📚',
            body: `Don't forget your ${session.subject} class at ${session.startTime}.`
          },
          token: userData.fcmToken
        };
        notifications.push(admin.messaging().send(message));
      }
    }

    await Promise.all(notifications);
    console.log(`Sent ${notifications.length} reminders for ${tomorrowStr}`);
    return null;
  });

/**
 * Scheduled Function: Runs every hour
 * Checks for lessons starting in exactly 2 hours.
 */
exports.sendUpcomingReminders = functions.pubsub
  .schedule('0 * * * *') // Every hour
  .onRun(async (context) => {
    // Similar logic but with time-based filtering
    // 1. Calculate time window (2 hours from now)
    // 2. Find sessions in that window
    // 3. Send email/push
    console.log("Checking for upcoming sessions (2hr reminder)...");
    return null;
  });
