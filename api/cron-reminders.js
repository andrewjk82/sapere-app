import admin from 'firebase-admin';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
    // Initialize Firebase Admin
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
      });
    }

    const db = admin.firestore();
    
    // 1. Calculate time window (2 hours from now)
    const now = new Date();
    const targetTime = new Date(now.getTime() + (2 * 60 * 60 * 1000));
    
    const targetDateStr = targetTime.toISOString().split('T')[0];
    
    // Convert target time to "H:MM AM/PM" format (e.g. "3:30 PM")
    const hours = targetTime.getHours();
    const minutes = targetTime.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    // We check for slots within a 15-min window to ensure we don't miss any due to execution timing
    const targetTimeStr = `${displayHours}:${String(minutes < 30 ? '00' : '30').padStart(2, '0')} ${period}`;

    console.log(`[Cron] Checking for sessions on ${targetDateStr} at ${targetTimeStr}`);

    const sessionsRef = db.collection('sessions');
    const snapshot = await sessionsRef
      .where('date', '==', targetDateStr)
      .where('startTime', '==', targetTimeStr)
      .where('reminderSent', '!=', true)
      .get();

    if (snapshot.empty) {
      return res.status(200).json({ message: 'No sessions need reminders at this time.' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    const results = [];

    for (const sessionDoc of snapshot.docs) {
      const session = sessionDoc.data();
      const studentId = session.studentId;
      const studentEmail = session.studentEmail || session.email;
      const subject = session.subject;

      if (!studentEmail && !studentId) continue;

      if (studentEmail) {
        try {
          await transporter.sendMail({
            from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
            to: studentEmail,
            subject: `[Reminder] Your ${subject} class starts in 2 hours!`,
            html: `
              <div style="font-family: sans-serif; padding: 40px; background-color: #f4f6fc;">
                <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 24px; padding: 40px; border: 1px solid #eef2ff;">
                  <h1 style="color: #6366f1; margin-top: 0;">Sapere Aude</h1>
                  <h2 style="color: #1e293b;">Class Reminder</h2>
                  <p style="color: #475569; line-height: 1.6; font-size: 16px;">
                    Hi there! This is a friendly reminder that your <b>${subject}</b> session is scheduled to start at <b>${session.startTime}</b> today.
                  </p>
                  <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
                    <p style="color: #94a3b8; font-size: 12px;">© 2026 Sapere Aude Academia</p>
                  </div>
                </div>
              </div>
            `
          });
        } catch (e) { console.error("Email fail:", e.message); }
      }

      if (studentId) {
        const userRef = db.collection('users').doc(studentId);
        const userDoc = await userRef.get();
        
        await userRef.collection('notifications').add({
          title: "Upcoming Class Reminder",
          body: `Your ${subject} class starts at ${session.startTime} today!`,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          read: false,
          type: 'class_reminder'
        });

        if (userDoc.exists) {
          const userData = userDoc.data();
          const tokens = userData.fcmTokens || (userData.fcmToken ? [userData.fcmToken] : []);
          if (tokens.length > 0) {
            try {
              await admin.messaging().sendEachForMulticast({
                notification: { 
                  title: "Class in 2 Hours!", 
                  body: `Don't forget: ${subject} @ ${session.startTime}` 
                },
                tokens: tokens
              });
            } catch (e) { console.error("Push fail:", e.message); }
          }
        }
      }

      await sessionDoc.ref.update({ reminderSent: true });
      results.push({ student: session.studentName, subject: subject });
    }

    return res.status(200).json({ success: true, sentTo: results });

  } catch (error) {
    console.error('Cron Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
