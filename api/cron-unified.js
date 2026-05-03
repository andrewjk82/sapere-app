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

    // ── Get current Sydney time ───────────────────────────────────────────
    const sydneyParts = new Intl.DateTimeFormat('en-AU', {
      hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'Australia/Sydney'
    }).formatToParts(nowUTC);

    const sydHour   = parseInt(sydneyParts.find(p => p.type === 'hour').value);
    const sydMinute = parseInt(sydneyParts.find(p => p.type === 'minute').value);
    const sydTotalMin = sydHour * 60 + sydMinute;
    const todayStr    = getSydneyDateStr(nowUTC);

    logs.push(`[Cron] Sydney time: ${sydHour}:${String(sydMinute).padStart(2,'0')} (${sydTotalMin} min)`);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    // ══════════════════════════════════════════════════════════════════════
    // PART 1: 2-Hour Reminder
    // ══════════════════════════════════════════════════════════════════════
    const targetMin = sydTotalMin + 120;
    const windowMin = 15;
    const tomorrowUTC = new Date(nowUTC.getTime() + 24 * 60 * 60 * 1000);
    const tomorrowStr = getSydneyDateStr(tomorrowUTC);

    const sessionDates = targetMin >= 1440 ? [tomorrowStr] : [todayStr];
    const normalizedTarget = targetMin >= 1440 ? targetMin - 1440 : targetMin;

    for (const dateStr of sessionDates) {
      const snap = await db.collection('sessions').where('date', '==', dateStr).get();
      for (const docSnapshot of snap.docs) {
        const s = docSnapshot.data();
        if (s.reminderSent === true) continue;

        const sessionMin = parseTimeStr(s.startTime);
        if (sessionMin !== null && Math.abs(sessionMin - normalizedTarget) <= windowMin) {
          await sendNotification(db, transporter, s, 'class_reminder', `Your ${s.subject} class starts in 2 hours!`, `Don't forget: ${s.subject} @ ${s.startTime} today!`);
          await docSnapshot.ref.update({ reminderSent: true });
          logs.push(`2hr reminder sent to ${s.studentName}`);
        }
      }
    }

    // ══════════════════════════════════════════════════════════════════════
    // PART 2: 8PM Daily Wrap-up (Tasks & Tomorrow's Schedule)
    // ══════════════════════════════════════════════════════════════════════
    if (sydHour === 20 && sydMinute < 30) {
      logs.push(`[Cron] 8PM reached. Checking tasks and tomorrow's schedule...`);

      // 1. Fetch all students
      const studentsSnap = await db.collection('users').where('role', '==', 'student').get();
      
      // 2. Fetch all tomorrow's sessions to map them to students
      const tomorrowSessionsSnap = await db.collection('sessions').where('date', '==', tomorrowStr).get();
      const sessionsByStudent = {};
      tomorrowSessionsSnap.docs.forEach(doc => {
        const data = doc.data();
        if (!sessionsByStudent[data.studentId]) sessionsByStudent[data.studentId] = [];
        sessionsByStudent[data.studentId].push(data);
      });

      for (const studentDoc of studentsSnap.docs) {
        const student = studentDoc.data();
        const studentId = studentDoc.id;
        const studentEmail = student.email;

        // Skip if already sent 8PM reminder (safety)
        if (student.last8PMReminderDate === todayStr) continue;

        // A. Check Today's Challenge
        const challengeSnap = await db.collection('users').doc(studentId).collection('daily_stats').doc(todayStr).get();
        const challengeDone = challengeSnap.exists && challengeSnap.data().completed === true;

        // B. Check Today's Calculation (if enabled)
        const calcEnabled = student.calculationEnabled !== false;
        let calcDone = true;
        if (calcEnabled) {
          // Check if any calc session exists for today
          const calcSnap = await db.collection('users').doc(studentId).collection('calc_stats')
            .where('timestamp', '>=', todayStr)
            .limit(1).get();
          calcDone = !calcSnap.empty;
        }

        const tomorrowClasses = sessionsByStudent[studentId] || [];
        const hasUnfinishedTasks = !challengeDone || (calcEnabled && !calcDone);

        // Send reminder if they have classes tomorrow OR unfinished tasks today
        if (tomorrowClasses.length > 0 || hasUnfinishedTasks) {
          let body = `<h2 style="color: #4f46e5;">Hello, ${student.name || 'Student'}!</h2>`;
          
          if (hasUnfinishedTasks) {
            body += `<div style="background: #fff1f2; padding: 15px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #fecaca;">`;
            body += `<strong style="color: #e11d48;">⚠️ Unfinished Tasks for Today:</strong><ul style="margin: 10px 0;">`;
            if (!challengeDone) body += `<li>Daily Challenge is not completed yet!</li>`;
            if (calcEnabled && !calcDone) body += `<li>Daily Calculation practice is missing!</li>`;
            body += `</ul></div>`;
          }

          if (tomorrowClasses.length > 0) {
            body += `<div style="background: #f0f9ff; padding: 15px; border-radius: 12px; border: 1px solid #bae6fd;">`;
            body += `<strong style="color: #0369a1;">📅 Tomorrow's Schedule (${tomorrowStr}):</strong><ul style="margin: 10px 0;">`;
            tomorrowClasses.forEach(c => {
              body += `<li><strong>${c.subject}</strong> @ ${c.startTime}</li>`;
            });
            body += `</ul></div>`;
          }

          body += `<p style="margin-top: 20px; color: #64748b; font-size: 14px;">Keep up the great work! See you soon.</p>`;

          await sendNotification(db, transporter, { studentId, studentEmail, name: student.name }, 'daily_wrapup', 
            hasUnfinishedTasks ? "You have unfinished tasks today!" : "Your schedule for tomorrow", 
            body
          );
          
          // Mark as sent
          await studentDoc.ref.update({ last8PMReminderDate: todayStr });
          logs.push(`8PM Wrap-up sent to ${student.name}`);
        }
      }
    }

    return res.status(200).json({ success: true, logs });

  } catch (error) {
    console.error('Unified Cron Error:', error.message, error.stack);
    return res.status(500).json({ error: error.message });
  }
}

async function sendNotification(db, transporter, session, type, subject, body) {
  const studentId    = session.studentId;
  const studentEmail = session.studentEmail || session.email;

  if (studentEmail) {
    try {
      await transporter.sendMail({
        from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
        to: studentEmail,
        subject: `[Sapere] ${subject}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; background-color: #f8fafc;">
            <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 20px; padding: 30px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
              ${body}
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #f1f5f9; text-align: center;">
                <span style="color: #94a3b8; font-size: 12px;">© Sapere Aude Academia</span>
              </div>
            </div>
          </div>`
      });
    } catch (e) { console.error(`Email fail:`, e.message); }
  }

  if (studentId) {
    const userRef = db.collection('users').doc(studentId);
    await userRef.collection('notifications').add({
      title: subject, 
      body: body.replace(/<[^>]*>/g, ''), // Strip HTML for push
      timestamp: admin.firestore.FieldValue.serverTimestamp(), 
      read: false, 
      type
    });

    const userDoc = await userRef.get();
    if (userDoc.exists) {
      const tokens = userDoc.data().fcmTokens || (userDoc.data().fcmToken ? [userDoc.data().fcmToken] : []);
      if (tokens.length > 0) {
        try {
          await admin.messaging().sendEachForMulticast({
            notification: { title: subject, body: body.replace(/<[^>]*>/g, '').substring(0, 100) + '...' },
            tokens
          });
        } catch (e) { console.error(`Push fail:`, e.message); }
      }
    }
  }
}
