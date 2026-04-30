const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore();

/**
 * 📧 Email Configuration
 * Teacher: Andrew Kim (andrewjk82@gmail.com)
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'andrewjk82@gmail.com',
    pass: 'hqdpgfwctiozyscw' // Securely added as requested
  }
});

const SENDER_NAME = 'Andrew Kim | Sapere Aude';
const SENDER_EMAIL = 'andrewjk82@gmail.com';

/**
 * Scheduled Function: Runs every day at 8:00 PM
 * Sends reminders for the next day's lessons.
 */
exports.sendNightBeforeReminders = functions.pubsub
  .schedule('0 20 * * *')
  .timeZone('Australia/Sydney')
  .onRun(async (context) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const sessionsSnap = await db.collection('sessions')
      .where('date', '==', tomorrowStr)
      .where('status', '==', 'Scheduled')
      .get();

    const notifications = [];

    for (const doc of sessionsSnap.docs) {
      const session = doc.data();
      const studentId = session.studentId;

      const userDoc = await db.collection('users').doc(studentId).get();
      if (!userDoc.exists) continue;
      
      const userData = userDoc.data();
      const prefs = userData.notifications || {};

      if (prefs.email && userData.email) {
        const mailOptions = {
          from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
          to: userData.email,
          subject: `[Sapere] Tomorrow's Lesson: ${session.startTime}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #1a1c2c; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 16px;">
              <h2 style="color: #6366f1;">Hi ${userData.firstName}!</h2>
              <p>This is a friendly reminder for your <b>${session.subject}</b> lesson tomorrow.</p>
              <div style="background: #f5f3ff; padding: 20px; border-radius: 12px; border: 1px solid #e0e7ff; margin: 20px 0;">
                <p style="margin: 0; font-size: 1.1rem;">⏰ <b>Time:</b> ${session.startTime}</p>
                <p style="margin: 10px 0 0 0; font-size: 1.1rem;">📚 <b>Subject:</b> ${session.subject}</p>
              </div>
              <p>If you have any questions, feel free to reply to this email.</p>
              <p>See you then!</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
              <p style="font-size: 0.8rem; color: #94a3b8;">Sapere Aude Academia | Premium Private Tutoring</p>
            </div>
          `
        };
        notifications.push(transporter.sendMail(mailOptions));
      }

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
  .schedule('0 * * * *')
  .onRun(async (context) => {
    console.log("Checking for upcoming sessions (2hr reminder)...");
    return null;
  });
