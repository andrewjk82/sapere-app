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
    const sydneyTime = new Date(nowUTC.getTime() + (10 * 60 * 60 * 1000));

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    const logs = [];

    // Helper to get Sydney date string (YYYY-MM-DD)
    const getSydneyDateStr = (date) => {
      return date.toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' });
    };

    // Get current Sydney status robustly
    const sydneyStatus = new Intl.DateTimeFormat('en-AU', {
      hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'Australia/Sydney'
    }).formatToParts(nowUTC);

    const currentHour = parseInt(sydneyStatus.find(p => p.type === 'hour').value);
    const currentMinute = parseInt(sydneyStatus.find(p => p.type === 'minute').value);

    // --- PART 1: 2-Hour Reminder ---
    // Calculate target time (Current Sydney + 2 hours)
    const targetTime = new Date(nowUTC.getTime() + (2 * 60 * 60 * 1000));
    const date2HrStr = getSydneyDateStr(targetTime);

    const targetStatus = new Intl.DateTimeFormat('en-AU', {
      hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'Australia/Sydney'
    }).formatToParts(targetTime);

    const th2 = parseInt(targetStatus.find(p => p.type === 'hour').value);
    const tm2 = parseInt(targetStatus.find(p => p.type === 'minute').value);
    const p2 = th2 >= 12 ? 'pm' : 'am';
    const dh2 = th2 % 12 || 12;
    const time2HrStr = `${dh2}:${String(tm2 < 30 ? '00' : '30').padStart(2, '0')} ${p2}`;

    console.log(`[Cron] Sydney: ${currentHour}:${currentMinute} | Target: ${date2HrStr} @ ${time2HrStr}`);

    const snap2Hr = await db.collection('sessions')
      .where('date', '==', date2HrStr)
      .where('startTime', '==', time2HrStr)
      .where('reminderSent', '!=', true)
      .get();

    for (const docSnapshot of snap2Hr.docs) {
      const s = docSnapshot.data();
      await sendNotification(db, transporter, s, 'class_reminder', `Your ${s.subject} class starts in 2 hours!`, `Don't forget: ${s.subject} @ ${s.startTime} today!`);
      await docSnapshot.ref.update({ reminderSent: true });
      logs.push(`2hr reminder sent to ${s.studentName}`);
    }

    // --- PART 2: Daily 8PM Reminder ---
    if (currentHour === 20 && currentMinute < 30) {
      const tomorrow = new Date(nowUTC.getTime() + (24 * 60 * 60 * 1000));
      const tomorrowStr = getSydneyDateStr(tomorrow);

      console.log(`[Cron] 8PM reached. Checking tomorrow's sessions: ${tomorrowStr}`);

      const snapDaily = await db.collection('sessions')
        .where('date', '==', tomorrowStr)
        .get();

      for (const docSnapshot of snapDaily.docs) {
        const s = docSnapshot.data();
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
