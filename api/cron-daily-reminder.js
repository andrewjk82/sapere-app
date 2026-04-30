import admin from 'firebase-admin';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
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
    
    // 1. Calculate "Tomorrow" in Sydney Time (GMT+10)
    // Vercel UTC -> Add 10 hours for Sydney, then add 1 day for tomorrow
    const nowUTC = new Date();
    const sydneyTime = new Date(nowUTC.getTime() + (10 * 60 * 60 * 1000));
    const tomorrow = new Date(sydneyTime);
    tomorrow.setDate(sydneyTime.getDate() + 1);
    
    const tomorrowDateStr = tomorrow.toISOString().split('T')[0];
    
    console.log(`[Daily Cron] Checking for sessions on tomorrow: ${tomorrowDateStr}`);

    const sessionsRef = db.collection('sessions');
    const snapshot = await sessionsRef
      .where('date', '==', tomorrowDateStr)
      .get();

    if (snapshot.empty) {
      return res.status(200).json({ message: 'No sessions tomorrow.' });
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
            subject: `[Reminder] You have a ${subject} class tomorrow!`,
            html: `
              <div style="font-family: sans-serif; padding: 40px; background-color: #f4f6fc;">
                <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 24px; padding: 40px; border: 1px solid #eef2ff;">
                  <h1 style="color: #6366f1; margin-top: 0;">Sapere Aude</h1>
                  <h2 style="color: #1e293b;">Tomorrow's Schedule</h2>
                  <p style="color: #475569; line-height: 1.6; font-size: 16px;">
                    Hi! Just a friendly heads up that you have a <b>${subject}</b> session scheduled for tomorrow, <b>${tomorrowDateStr}</b> at <b>${session.startTime}</b>.
                  </p>
                  <p style="color: #475569; line-height: 1.6; font-size: 16px;">Get some good rest and see you tomorrow!</p>
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
        await userRef.collection('notifications').add({
          title: "Tomorrow's Class Reminder",
          body: `You have ${subject} at ${session.startTime} tomorrow!`,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          read: false,
          type: 'daily_reminder'
        });

        const userDoc = await userRef.get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          const tokens = userData.fcmTokens || (userData.fcmToken ? [userData.fcmToken] : []);
          if (tokens.length > 0) {
            try {
              await admin.messaging().sendEachForMulticast({
                notification: { 
                  title: "See you tomorrow!", 
                  body: `${subject} @ ${session.startTime}` 
                },
                tokens: tokens
              });
            } catch (e) { console.error("Push fail:", e.message); }
          }
        }
      }
      results.push({ student: session.studentName, subject: subject });
    }

    return res.status(200).json({ success: true, count: results.length });

  } catch (error) {
    console.error('Daily Cron Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
