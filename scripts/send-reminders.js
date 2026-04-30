const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Initialize Firebase Admin using Service Account from Environment Variables
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// SMTP Setup (Using your Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const SENDER_NAME = 'Andrew Kim | Sapere Aude';
const SENDER_EMAIL = process.env.EMAIL_USER;

async function sendReminders() {
  console.log('--- Starting Daily Reminder Task ---');
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  console.log(`Checking lessons for: ${tomorrowStr}`);

  const sessionsSnap = await db.collection('sessions')
    .where('date', '==', tomorrowStr)
    .where('status', '==', 'Scheduled')
    .get();

  if (sessionsSnap.empty) {
    console.log('No sessions scheduled for tomorrow.');
    return;
  }

  for (const doc of sessionsSnap.docs) {
    const session = doc.data();
    const studentId = session.studentId;

    const userDoc = await db.collection('users').doc(studentId).get();
    if (!userDoc.exists) continue;
    
    const userData = userDoc.data();
    const prefs = userData.notifications || {};

    if (prefs.email && userData.email) {
      console.log(`Sending email to ${userData.email}...`);
      const mailOptions = {
        from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
        to: userData.email,
        subject: `[Sapere] Tomorrow's Lesson Reminder: ${session.startTime}`,
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
      await transporter.sendMail(mailOptions);
    }
  }
  
  console.log('--- Task Completed ---');
}

sendReminders().catch(err => {
  console.error('Error in reminder task:', err);
  process.exit(1);
});
