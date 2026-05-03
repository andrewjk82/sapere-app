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
    const logs = [];

    // ── Helper: Get Sydney date string YYYY-MM-DD ──────────────────────────
    const getSydneyDateStr = (date) =>
      date.toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' });

    // ── Helper: Parse "2:30 PM" style string → total minutes ──────────────
    const parseTimeStr = (t) => {
      if (!t) return null;
      const parts = t.trim().split(' ');
      const period = parts[1]?.toUpperCase(); // AM / PM
      const [hStr, mStr] = parts[0].split(':');
      let h = parseInt(hStr, 10);
      const m = parseInt(mStr || '0', 10);
      if (period === 'PM' && h !== 12) h += 12;
      if (period === 'AM' && h === 12) h = 0;
      return h * 60 + m;
    };

    // ── Helper: Format minutes → "2:30 PM" ────────────────────────────────
    const formatMinutes = (totalMin) => {
      let h = Math.floor(totalMin / 60) % 24;
      const m = totalMin % 60;
      const period = h >= 12 ? 'PM' : 'AM';
      const displayH = h % 12 || 12;
      return `${displayH}:${String(m).padStart(2, '0')} ${period}`;
    };

    // ── Get current Sydney time in minutes ────────────────────────────────
    const sydneyParts = new Intl.DateTimeFormat('en-AU', {
      hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'Australia/Sydney'
    }).formatToParts(nowUTC);

    const sydHour   = parseInt(sydneyParts.find(p => p.type === 'hour').value);
    const sydMinute = parseInt(sydneyParts.find(p => p.type === 'minute').value);
    const sydTotalMin = sydHour * 60 + sydMinute;

    logs.push(`[Cron] Sydney time: ${sydHour}:${String(sydMinute).padStart(2,'0')} (${sydTotalMin} min)`);

    // ── Nodemailer transport ───────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    // ══════════════════════════════════════════════════════════════════════
    // PART 1: 2-Hour Reminder
    // Target = sessions starting 2 hours from now (±15 min window)
    // ══════════════════════════════════════════════════════════════════════
    const targetMin = sydTotalMin + 120; // 2 hours ahead in minutes
    const windowMin = 15; // ±15 minute tolerance

    // The date for the session (could be today or tomorrow if near midnight)
    const todayStr    = getSydneyDateStr(nowUTC);
    const tomorrowUTC = new Date(nowUTC.getTime() + 24 * 60 * 60 * 1000);
    const tomorrowStr = getSydneyDateStr(tomorrowUTC);

    // Fetch ALL sessions for today and tomorrow that haven't had reminder sent
    const sessionDates = targetMin >= 1440
      ? [tomorrowStr]   // target wraps into next day
      : [todayStr];

    logs.push(`[Cron] Checking sessions on: ${sessionDates.join(', ')} | Target window: ${formatMinutes(targetMin - windowMin)} – ${formatMinutes(targetMin + windowMin)}`);

    for (const dateStr of sessionDates) {
      const snap = await db.collection('sessions')
        .where('date', '==', dateStr)
        .where('reminderSent', '!=', true)
        .get();

      logs.push(`[Cron] Found ${snap.docs.length} unsent-reminder sessions on ${dateStr}`);

      for (const docSnapshot of snap.docs) {
        const s = docSnapshot.data();
        const sessionMin = parseTimeStr(s.startTime);

        logs.push(`[Cron] Session: ${s.studentName} @ ${s.startTime} (${sessionMin} min) | diff = ${Math.abs(sessionMin - targetMin)} min`);

        if (sessionMin === null) {
          logs.push(`[Cron] SKIP: Could not parse startTime "${s.startTime}"`);
          continue;
        }

        // Normalize target for next-day wrap
        const normalizedTarget = targetMin >= 1440 ? targetMin - 1440 : targetMin;

        if (Math.abs(sessionMin - normalizedTarget) <= windowMin) {
          logs.push(`[Cron] ✅ MATCH! Sending 2hr reminder to ${s.studentName}`);
          await sendNotification(
            db, transporter, s,
            'class_reminder',
            `Your ${s.subject} class starts in 2 hours!`,
            `Don't forget: ${s.subject} @ ${s.startTime} today!`
          );
          await docSnapshot.ref.update({ reminderSent: true });
          logs.push(`2hr reminder sent to ${s.studentName}`);
        }
      }
    }

    // ══════════════════════════════════════════════════════════════════════
    // PART 2: 8PM Next-Day Reminder
    // ══════════════════════════════════════════════════════════════════════
    if (sydHour === 20 && sydMinute < 30) {
      logs.push(`[Cron] 8PM window reached. Checking tomorrow: ${tomorrowStr}`);

      const snapDaily = await db.collection('sessions')
        .where('date', '==', tomorrowStr)
        .get();

      for (const docSnapshot of snapDaily.docs) {
        const s = docSnapshot.data();
        await sendNotification(
          db, transporter, s,
          'daily_reminder',
          `You have a ${s.subject} class tomorrow!`,
          `Tomorrow's class: ${s.subject} @ ${s.startTime}`
        );
        logs.push(`Daily reminder sent to ${s.studentName}`);
      }
    }

    return res.status(200).json({ success: true, logs });

  } catch (error) {
    console.error('Unified Cron Error:', error.message, error.stack);
    return res.status(500).json({ error: error.message });
  }
}

// ── Send email + push + save to notification history ──────────────────────
async function sendNotification(db, transporter, session, type, subject, body) {
  const studentId    = session.studentId;
  const studentEmail = session.studentEmail || session.email;

  // Email
  if (studentEmail) {
    try {
      await transporter.sendMail({
        from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
        to: studentEmail,
        subject: `[Reminder] ${subject}`,
        html: `
          <div style="font-family: sans-serif; padding: 40px; background-color: #f4f6fc;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 24px; padding: 40px; border: 1px solid #eef2ff;">
              <h1 style="color: #6366f1; margin-top: 0;">Sapere Aude</h1>
              <p style="color: #475569; line-height: 1.6; font-size: 16px;">${body}</p>
            </div>
          </div>`
      });
      console.log(`[Email] Sent to ${studentEmail}`);
    } catch (e) {
      console.error(`[Email] FAILED for ${studentEmail}:`, e.message);
    }
  } else {
    console.warn(`[Email] No email found for session (studentId: ${studentId})`);
  }

  // Firestore notification history + Push
  if (studentId) {
    const userRef = db.collection('users').doc(studentId);
    await userRef.collection('notifications').add({
      title: subject, body, timestamp: admin.firestore.FieldValue.serverTimestamp(), read: false, type
    });

    const userDoc = await userRef.get();
    if (userDoc.exists) {
      const tokens = userDoc.data().fcmTokens || (userDoc.data().fcmToken ? [userDoc.data().fcmToken] : []);
      if (tokens.length > 0) {
        try {
          await admin.messaging().sendEachForMulticast({
            notification: { title: subject, body },
            tokens
          });
          console.log(`[Push] Sent to ${tokens.length} device(s) for ${studentId}`);
        } catch (e) {
          console.error(`[Push] FAILED for ${studentId}:`, e.message);
        }
      }
    }
  }
}
