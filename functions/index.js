const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore();

/**
 * 📧 Email Configuration
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'andrewjk82@gmail.com',
    pass: 'hqdpgfwctiozyscw'
  }
});

const SENDER_NAME = 'Andrew Kim | Sapere Aude';
const SENDER_EMAIL = 'andrewjk82@gmail.com';

/**
 * 🚀 NEW: Immediate Test Email Trigger
 * Listens to the 'mail' collection and sends emails instantly.
 * This makes the "Send Test Reminder" button work.
 */
exports.processEmailQueue = functions.firestore
  .document('mail/{mailId}')
  .onCreate(async (snap, context) => {
    const mailData = snap.data();
    console.log(`Processing test email to: ${mailData.to}`);

    try {
      const mailOptions = {
        from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
        to: mailData.to,
        subject: mailData.message.subject,
        html: mailData.message.html,
        text: mailData.message.text
      };

      await transporter.sendMail(mailOptions);
      return snap.ref.update({ status: 'sent', sentAt: admin.firestore.FieldValue.serverTimestamp() });
    } catch (error) {
      console.error('Error sending test email:', error);
      return snap.ref.update({ status: 'failed', error: error.message });
    }
  });

/**
 * Scheduled Function: Runs every day at 8:00 PM
 */
exports.sendNightBeforeReminders = functions.pubsub
  .schedule('0 20 * * *')
  .timeZone('Australia/Sydney')
  .onRun(async (context) => {
    // ... (existing code for night before)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const sessionsSnap = await db.collection('sessions')
      .where('date', '==', tomorrowStr)
      .where('status', '==', 'Scheduled')
      .get();

    for (const doc of sessionsSnap.docs) {
      const session = doc.data();
      const userDoc = await db.collection('users').doc(session.studentId).get();
      if (!userDoc.exists) continue;
      const userData = userDoc.data();
      if (userData.notifications?.email && userData.email) {
        await transporter.sendMail({
          from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
          to: userData.email,
          subject: `[Sapere] Tomorrow's Lesson: ${session.startTime}`,
          html: `<p>Hi ${userData.firstName}, you have a lesson tomorrow at ${session.startTime}.</p>`
        });
      }
    }
    return null;
  });
