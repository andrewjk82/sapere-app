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
    const nowUTC = new Date();
    const sydneyTime = new Date(nowUTC.getTime() + (10 * 60 * 60 * 1000)); // Sydney GMT+10
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    const logs = [];

    // --- PART 1: 2-Hour Reminder (Runs every 30 mins) ---
    const target2HrTime = new Date(sydneyTime.getTime() + (2 * 60 * 60 * 1000));
    const date2HrStr = target2HrTime.toISOString().split('T')[0];
    const h2 = target2HrTime.getHours();
    const m2 = target2HrTime.getMinutes();
    const p2 = h2 >= 12 ? 'PM' : 'AM';
    const dh2 = h2 % 12 || 12;
    const time2HrStr = `${dh2}:${String(m2 < 30 ? '00' : '30').padStart(2, '0')} ${p2}`;

    console.log(`[Cron] Checking 2-hr reminders for ${date2HrStr} @ ${time2HrStr}`);
    
    const snap2Hr = await db.collection('sessions')
      .where('date', '==', date2HrStr)
      .where('startTime', '==', time2HrStr)
      .where('reminderSent', '!=', true)
      .get();

    for (const doc of snap2Hr.docs) {
      const s = doc.data();
      await sendNotification(db, transporter, s, 'class_reminder', `Your ${s.subject} class starts in 2 hours!`, `Don't forget: ${s.subject} @ ${s.startTime} today!`);
      await doc.ref.update({ reminderSent: true });
      logs.push(`2hr reminder sent to ${s.studentName}`);
    }

    // --- PART 2: Daily 8PM Reminder (Runs if current Sydney time is around 8PM) ---
    // Since this runs at 00 and 30, it will catch the 8:00 PM or 8:30 PM slot.
    const currentHour = sydneyTime.getHours();
    const currentMinute = sydneyTime.getMinutes();
    
    if (currentHour === 20 && currentMinute < 30) {
      const tomorrow = new Date(sydneyTime);
      tomorrow.setDate(sydneyTime.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split('T')[0];
      
      console.log(`[Cron] 8PM reached. Checking tomorrow's sessions: ${tomorrowStr}`);
      
      const snapDaily = await db.collection('sessions')
        .where('date', '==', tomorrowStr)
        .get();

      for (const doc of snapDaily.docs) {
        const s = doc.data();
        await sendNotification(db, transporter, s, 'daily_reminder', `You have a ${s.subject} class tomorrow!`, `Tomorrow's Preview: ${s.subject} @ ${s.startTime}`);
        logs.push(`Daily reminder sent to ${s.studentName}`);
      }
    }

    return res.status(200).json({ success: true, logs });

  } catch (error) {
    console.error('Unified Cron Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}

async function sendNotification(db, transporter, session, type, subject, body) {
  const studentId = session.studentId;
  const studentEmail = session.studentEmail || session.email;

  // Email
  if (studentEmail) {
    try {
      await transporter.sendMail({
        from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
        to: studentEmail,
        subject: `[Reminder] ${subject}`,
        html: `<div style="font-family: sans-serif; padding: 40px; background-color: #f4f6fc;">
                <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 24px; padding: 40px; border: 1px solid #eef2ff;">
                  <h1 style="color: #6366f1; margin-top: 0;">Sapere Aude</h1>
                  <p style="color: #475569; line-height: 1.6; font-size: 16px;">${body}</p>
                </div>
              </div>`
      });
    } catch (e) { console.error("Email fail:", e.message); }
  }

  // Push & History
  if (studentId) {
    const userRef = db.collection('users').doc(studentId);
    await userRef.collection('notifications').add({
      title: subject, body: body, timestamp: admin.firestore.FieldValue.serverTimestamp(), read: false, type: type
    });

    const userDoc = await userRef.get();
    if (userDoc.exists) {
      const tokens = userDoc.data().fcmTokens || (userDoc.data().fcmToken ? [userDoc.data().fcmToken] : []);
      if (tokens.length > 0) {
        try {
          await admin.messaging().sendEachForMulticast({
            notification: { title: subject, body: body },
            tokens: tokens
          });
        } catch (e) { console.error("Push fail:", e.message); }
      }
    }
  }
}
