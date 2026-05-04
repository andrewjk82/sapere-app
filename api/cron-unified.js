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
    const adminEmail = 'andrewjk82@gmail.com';

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

    const normalizeEmail = (email) => (email || '').trim().toLowerCase();

    const isStudentProfile = (student) => {
      const role = (student.role || '').toLowerCase();
      const email = normalizeEmail(student.email);
      return role !== 'admin' && role !== 'parent' && email !== adminEmail;
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
          const reminderBody = `
            <div style="background: #eef2ff; padding: 20px; border-radius: 16px; border: 1px solid #e0e7ff; margin-bottom: 20px;">
              <h3 style="margin: 0 0 10px 0; color: #4338ca; font-size: 1.1rem; font-weight: 800;">🔔 Class Reminder</h3>
              <p style="margin: 0; color: #3730a3; font-size: 1rem; font-weight: 600;">
                Your <strong>${s.subject}</strong> session is starting in <strong>2 hours</strong>!
              </p>
              <div style="margin-top: 15px; display: flex; align-items: center; gap: 8px; color: #475569; font-size: 0.9rem; font-weight: 700;">
                <span style="background: white; padding: 4px 10px; border-radius: 8px; border: 1px solid #e2e8f0;">🕒 ${s.startTime}</span>
                <span style="background: white; padding: 4px 10px; border-radius: 8px; border: 1px solid #e2e8f0;">📅 Today</span>
              </div>
            </div>
            <p style="color: #64748b; font-size: 0.9rem; line-height: 1.5;">We recommend logging in a few minutes early to prepare your materials. See you soon!</p>
          `;
          await sendNotification(db, transporter, s, 'class_reminder', `Your ${s.subject} class starts in 2 hours!`, reminderBody);
          await docSnapshot.ref.update({ reminderSent: true });
          logs.push(`2hr reminder sent to ${s.studentName}`);
        }
      }
    }

    // ══════════════════════════════════════════════════════════════════════
    // PART 2: Daily Wrap-up (Tasks & Tomorrow's Schedule) - Runs between 7PM and 9PM
    // ══════════════════════════════════════════════════════════════════════
    if (sydHour >= 19 && sydHour < 21) {
      logs.push(`[Cron] 7PM-9PM window reached. Checking tasks and tomorrow's schedule...`);

      // 1. Fetch all student-like users. Some legacy student docs have no role field.
      const usersSnap = await db.collection('users').get();
      const studentDocs = usersSnap.docs.filter(doc => isStudentProfile(doc.data()));
      
      // 2. Fetch all tomorrow's sessions to map them to students
      const tomorrowSessionsSnap = await db.collection('sessions').where('date', '==', tomorrowStr).get();
      const sessionsByStudent = {};
      const sessionsByEmail = {};
      tomorrowSessionsSnap.docs.forEach(doc => {
        const data = { id: doc.id, ...doc.data() };
        if (data.studentId) {
          if (!sessionsByStudent[data.studentId]) sessionsByStudent[data.studentId] = [];
          sessionsByStudent[data.studentId].push(data);
        }
        const sessionEmail = normalizeEmail(data.studentEmail || data.email);
        if (sessionEmail) {
          if (!sessionsByEmail[sessionEmail]) sessionsByEmail[sessionEmail] = [];
          sessionsByEmail[sessionEmail].push(data);
        }
      });

      logs.push(`[Cron] Found ${studentDocs.length} student profiles and ${tomorrowSessionsSnap.size} sessions for ${tomorrowStr}.`);

      for (const studentDoc of studentDocs) {
        const student = studentDoc.data();
        const studentId = studentDoc.id;
        const studentEmail = normalizeEmail(student.email);
        const studentName = student.name || student.displayName || `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'Student';
        const tomorrowClasses = dedupeSessions([
          ...(sessionsByStudent[studentId] || []),
          ...(sessionsByEmail[studentEmail] || []),
        ]);
        const tomorrowClassIds = tomorrowClasses.map(c => c.id).sort();

        // Skip duplicate wrap-ups, but allow a resend if newly matched classes were missing earlier.
        const previousClassIds = Array.isArray(student.last8PMReminderClassIds)
          ? [...student.last8PMReminderClassIds].sort()
          : [];
        if (
          student.last8PMReminderDate === todayStr &&
          arraysEqual(previousClassIds, tomorrowClassIds)
        ) {
          continue;
        }

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

        const hasUnfinishedTasks = !challengeDone || (calcEnabled && !calcDone);

        // Send reminder if they have classes tomorrow OR unfinished tasks today
        if (tomorrowClasses.length > 0 || hasUnfinishedTasks) {
          let body = `<h2 style="color: #4f46e5;">Hello, ${studentName}!</h2>`;
          
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

          const notificationEmail = studentEmail || normalizeEmail(tomorrowClasses.find(c => c.studentEmail || c.email)?.studentEmail || tomorrowClasses.find(c => c.studentEmail || c.email)?.email);

          const result = await sendNotification(db, transporter, { studentId, studentEmail: notificationEmail, name: studentName }, 'daily_wrapup', 
            hasUnfinishedTasks ? "You have unfinished tasks today!" : "Your schedule for tomorrow", 
            body
          );
          
          // Mark as sent
          await studentDoc.ref.update({
            last8PMReminderDate: todayStr,
            last8PMReminderClassIds: tomorrowClassIds
          });
          logs.push(`8PM wrap-up sent to ${studentName} (${tomorrowClasses.length} classes, unfinished=${hasUnfinishedTasks}, email=${result.emailSent}, push=${result.pushSent})`);
        }
      }
    }

    // ── Log Execution to system_logs for Dashboard visibility ────────────
    await db.collection('system_logs').add({
      type: 'cron_execution',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      sydneyTime: `${sydHour}:${String(sydMinute).padStart(2,'0')}`,
      remindersSentCount: logs.filter(l => l.toLowerCase().includes('sent')).length,
      logs: logs
    });

    return res.status(200).json({ success: true, logs });

  } catch (error) {
    console.error('Unified Cron Error:', error.message, error.stack);
    return res.status(500).json({ error: error.message });
  }
}

function dedupeSessions(sessions) {
  const seen = new Set();
  return sessions.filter(session => {
    const key = session.id || `${session.date}-${session.startTime}-${session.studentId || session.studentEmail || ''}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

async function sendNotification(db, transporter, session, type, subject, body) {
  const studentId    = session.studentId;
  const studentEmail = session.studentEmail || session.email;
  let emailSent = false;
  let pushSent = false;

  if (studentEmail) {
    try {
      await transporter.sendMail({
        from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
        to: studentEmail,
        subject: `[Sapere] ${subject}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 540px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px 40px; text-align: left;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td>
                              <div style="font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: -0.02em;">Sapere Aude</div>
                              <div style="font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px;">Academia</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px; background-color: #ffffff;">
                        ${body}
                        
                        <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #f1f5f9; text-align: center;">
                          <a href="https://sapere-app.vercel.app" style="display: inline-block; background-color: #6366f1; color: #ffffff; padding: 14px 28px; border-radius: 14px; text-decoration: none; font-weight: 800; fontSize: 15px; box-shadow: 0 4px 12px rgba(99,102,241,0.2);">Open Dashboard</a>
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 0 40px 40px 40px; text-align: center;">
                        <p style="margin: 0; color: #94a3b8; font-size: 12px; font-weight: 600;">
                          © 2026 Sapere Aude Academia<br>
                          Excellence in Mathematics Tutoring
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>`
      });
      emailSent = true;
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
          pushSent = true;
        } catch (e) { console.error(`Push fail:`, e.message); }
      }
    }
  }

  return { emailSent, pushSent };
}
