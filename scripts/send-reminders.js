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
  // Adjust for Sydney Time (UTC +10/11)
  const sydneyOffset = 10; // Standard time. Use 11 for DST.
  const sydneyHour = (now.getUTCHours() + sydneyOffset) % 24;
  
  console.log(`Current Sydney Hour: ${sydneyHour}`);

  // 1. NIGHT BEFORE REMINDER (Runs only at 8 PM Sydney Time)
  if (sydneyHour === 20) {
    console.log('--- Processing Night-Before Reminders (8 PM) ---');
    await sendNightBeforeReminders();
  }

  // 2. 2-HOUR BEFORE REMINDER (Runs every hour)
  console.log('--- Checking for lessons starting in 2 hours ---');
  await sendUpcomingReminders();

  // 3. PROCESS TEST EMAILS (Runs every hour)
  console.log('--- Processing pending test emails ---');
  await processTestEmails();
}

async function processTestEmails() {
  const mailSnap = await db.collection('mail')
    .where('status', '!=', 'sent')
    .get();

  for (const doc of mailSnap.docs) {
    const mailData = doc.data();
    console.log(`Sending pending test email to: ${mailData.to}`);
    
    try {
      await transporter.sendMail({
        from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
        to: mailData.to,
        subject: mailData.message.subject,
        html: mailData.message.html
      });
      await doc.ref.update({ status: 'sent', sentAt: admin.firestore.FieldValue.serverTimestamp() });
    } catch (e) {
      console.error('Test email failed:', e);
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
    await sendEmail(session, `[Sapere] Reminder: Your lesson tomorrow at ${session.startTime}`, true);
  }
}

async function sendUpcomingReminders() {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  
  // Find sessions starting in ~2 hours
  // This logic assumes session.startTime is in "HH:mm" format (e.g., "15:00")
  const targetHour = (new Date().getUTCHours() + 10 + 2) % 24; // 2 hours from now in Sydney
  const targetTimePrefix = `${targetHour.toString().padStart(2, '0')}:`;

  console.log(`Looking for lessons starting around ${targetTimePrefix}`);

  const sessionsSnap = await db.collection('sessions')
    .where('date', '==', todayStr)
    .where('status', '==', 'Scheduled')
    .get();

  for (const doc of sessionsSnap.docs) {
    const session = doc.data();
    // Check if session starts within the target hour
    if (session.startTime && session.startTime.startsWith(targetTimePrefix)) {
      console.log(`Found lesson for ${session.studentName} at ${session.startTime}. Sending 2hr reminder.`);
      await sendEmail(session, `[Sapere] Quick Reminder: Your lesson starts in 2 hours!`, false);
    }
  }
}

async function sendEmail(session, subject, isNightBefore) {
  const userDoc = await db.collection('users').doc(session.studentId).get();
  if (!userDoc.exists) return;
  const userData = userDoc.data();
  const prefs = userData.notifications || {};
    
  // Prioritize the email the student uses to login (stored in user profile)
  const loginEmail = userData.email;

  if (prefs.email && loginEmail) {
    console.log(`Sending reminder to login email: ${loginEmail} for student: ${userData.firstName}`);
    const mailOptions = {
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
      to: loginEmail,
      subject: subject,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1a1c2c; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 16px;">
          <h2 style="color: #6366f1;">Hi ${userData.firstName}!</h2>
          <p>${isNightBefore ? 'This is a reminder for your lesson tomorrow.' : 'Your lesson is starting in <b>2 hours</b>!'}</p>
          <div style="background: #f5f3ff; padding: 20px; border-radius: 12px; border: 1px solid #e0e7ff; margin: 20px 0;">
            <p style="margin: 0; font-size: 1.1rem;">⏰ <b>Time:</b> ${session.startTime}</p>
            <p style="margin: 10px 0 0 0; font-size: 1.1rem;">📚 <b>Subject:</b> ${session.subject}</p>
          </div>
          <p>Please be ready a few minutes before the start time.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 0.8rem; color: #94a3b8;">Sapere Aude Academia | Premium Private Tutoring</p>
        </div>
      `
    };
    await transporter.sendMail(mailOptions);
  }
}

runTasks().catch(err => {
  console.error(err);
  process.exit(1);
});
