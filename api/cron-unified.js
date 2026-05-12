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
    const normalizeSubjectLabel = (value = '') => String(value).replace(/\bmaths\b/gi, 'Maths');

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
          const subjectLabel = normalizeSubjectLabel(s.subject);
          const reminderBody = `
            <div style="background: #eef2ff; padding: 20px; border-radius: 16px; border: 1px solid #e0e7ff; margin-bottom: 20px;">
              <h3 style="margin: 0 0 10px 0; color: #4338ca; font-size: 1.1rem; font-weight: 800;">🔔 Class Reminder</h3>
              <p style="margin: 0; color: #3730a3; font-size: 1rem; font-weight: 600;">
                Your <strong>${subjectLabel}</strong> session is starting in <strong>2 hours</strong>!
              </p>
              <div style="margin-top: 15px; display: flex; align-items: center; gap: 8px; color: #475569; font-size: 0.9rem; font-weight: 700;">
                <span style="background: white; padding: 4px 10px; border-radius: 8px; border: 1px solid #e2e8f0;">🕒 ${s.startTime}</span>
                <span style="background: white; padding: 4px 10px; border-radius: 8px; border: 1px solid #e2e8f0;">📅 Today</span>
              </div>
            </div>
            <p style="color: #64748b; font-size: 0.9rem; line-height: 1.5;">We recommend logging in a few minutes early to prepare your materials. See you soon!</p>
          `;
          await sendNotification(db, transporter, s, 'class_reminder', `Your ${subjectLabel} class starts in 2 hours!`, reminderBody);
          await docSnapshot.ref.update({ reminderSent: true });
          logs.push(`2hr reminder sent to ${s.studentName}`);
        }
      }
    }

    // ══════════════════════════════════════════════════════════════════════
    // PART 2: Daily Wrap-up (Tasks & Tomorrow's Schedule) - Runs in the evening.
    // Vercel daily crons can drift within the hour, so keep this window forgiving.
    // ══════════════════════════════════════════════════════════════════════
    if (sydHour >= 19 && sydHour <= 21) {
      logs.push(`[Cron] Evening wrap-up window reached. Checking tasks and tomorrow's schedule...`);

      // 1. Fetch all student-like users. Some legacy student docs have no role field.
      const usersSnap = await db.collection('users').get();
      const studentDocs = usersSnap.docs.filter(doc => isStudentProfile(doc.data()));

      const cleanupRef = db.collection('system_config').doc('stat_cleanup');
      const cleanupSnap = await cleanupRef.get();
      if (cleanupSnap.data()?.lastRunDate !== todayStr) {
        const cutoffDate = new Date(nowUTC);
        cutoffDate.setDate(cutoffDate.getDate() - 7);
        const cutoffStr = getSydneyDateStr(cutoffDate);
        let deletedStats = 0;
        for (const studentDoc of studentDocs) {
          deletedStats += await pruneOldStatDocs(db, studentDoc.ref, 'daily_stats', cutoffStr);
          deletedStats += await pruneOldStatDocs(db, studentDoc.ref, 'calc_stats', cutoffStr);
        }
        await cleanupRef.set({
          lastRunDate: todayStr,
          cutoffDate: cutoffStr,
          deletedStats,
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        logs.push(`[Cleanup] Deleted ${deletedStats} stat docs older than ${cutoffStr}.`);
      } else {
        logs.push(`[Cleanup] Stat cleanup already ran for ${todayStr}.`);
      }
      
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

        // A. Check Today's Challenge
        const challengeSnap = await db.collection('users').doc(studentId).collection('daily_stats').doc(todayStr).get();
        const challengeDone = challengeSnap.exists && challengeSnap.data().completed === true;

        // B. Check Today's Calculation (if enabled)
        const calcEnabled = student.calculationEnabled !== false;
        let calcDone = true;
        if (calcEnabled) {
          const calcSnap = await db.collection('users').doc(studentId).collection('calc_stats').doc(todayStr).get();
          calcDone = calcSnap.exists && calcSnap.data().completed === true;
        }

        const hasUnfinishedTasks = !challengeDone || (calcEnabled && !calcDone);
        const reminderKey = [
          todayStr,
          `classes:${tomorrowClassIds.join(',')}`,
          `daily:${challengeDone ? 'done' : 'todo'}`,
          `calc:${calcEnabled ? (calcDone ? 'done' : 'todo') : 'off'}`,
        ].join('|');

        if (student.last8PMReminderKey === reminderKey) {
          continue;
        }

        // Send reminder if they have classes tomorrow OR unfinished tasks today
        if (tomorrowClasses.length > 0 || hasUnfinishedTasks) {
          let body = `<h2 style="color: #4f46e5;">Hello, ${studentName}!</h2>`;
          
          if (hasUnfinishedTasks) {
            body += `<div style="background: #fff1f2; padding: 22px 28px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #fecaca; color: #1f2937; line-height: 1.65; font-size: 16px;">`;
            body += `<p style="margin: 0 0 16px;">Hello ${studentName},</p>`;
            body += `<p style="margin: 0 0 16px;">You haven't completed your daily mathematics challenge for today yet.</p>`;
            body += `<p style="margin: 0 0 16px;">Consistent practice is the key to mastery! Take 10 minutes to complete your challenge before the day ends.</p>`;
            body += `<p style="margin: 0;">Good luck!</p>`;
            body += `</div>`;
          }

          if (tomorrowClasses.length > 0) {
            body += `<div style="background: #f0f9ff; padding: 15px; border-radius: 12px; border: 1px solid #bae6fd;">`;
            body += `<strong style="color: #0369a1;">📅 Tomorrow's Schedule (${tomorrowStr}):</strong><ul style="margin: 10px 0;">`;
            tomorrowClasses.forEach(c => {
              body += `<li><strong>${normalizeSubjectLabel(c.subject)}</strong> @ ${c.startTime}</li>`;
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
            last8PMReminderClassIds: tomorrowClassIds,
            last8PMReminderKey: reminderKey
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

async function commitDeletes(db, refs) {
  let deleted = 0;
  for (let i = 0; i < refs.length; i += 450) {
    const batch = db.batch();
    const chunk = refs.slice(i, i + 450);
    chunk.forEach(ref => batch.delete(ref));
    await batch.commit();
    deleted += chunk.length;
  }
  return deleted;
}

async function pruneOldStatDocs(db, userRef, statCollection, cutoffDate) {
  const snap = await userRef.collection(statCollection).get();
  const oldStats = snap.docs.filter(docSnapshot => {
    const id = docSnapshot.id || '';
    if (/^\d{4}-\d{2}-\d{2}$/.test(id)) return id < cutoffDate;
    const data = docSnapshot.data() || {};
    const rawDate = data.date || data.timestamp || data.completedAt || data.createdAt;
    if (!rawDate) return false;
    const parsed = typeof rawDate?.toDate === 'function' ? rawDate.toDate() : new Date(rawDate);
    if (Number.isNaN(parsed.getTime())) return false;
    return parsed.toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' }) < cutoffDate;
  });

  let deletedStats = 0;
  for (const statDoc of oldStats) {
    const workingOutSnap = await statDoc.ref.collection('working_out').get();
    await commitDeletes(db, workingOutSnap.docs.map(docSnapshot => docSnapshot.ref));
    await commitDeletes(db, [statDoc.ref]);
    deletedStats += 1;
  }
  return deletedStats;
}

async function findNotificationUser(db, studentId, email) {
  if (studentId) {
    const directRef = db.collection('users').doc(studentId);
    const directDoc = await directRef.get();
    if (directDoc.exists) {
      return { userRef: directRef, userDoc: directDoc };
    }
  }

  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!normalizedEmail) {
    return { userRef: null, userDoc: null };
  }

  const emailQueries = normalizedEmail === email
    ? [normalizedEmail]
    : [email, normalizedEmail].filter(Boolean);

  for (const candidateEmail of emailQueries) {
    const snap = await db.collection('users').where('email', '==', candidateEmail).limit(1).get();
    if (!snap.empty) {
      const userDoc = snap.docs[0];
      return { userRef: userDoc.ref, userDoc };
    }
  }

  return { userRef: null, userDoc: null };
}

function buildEmailTemplate(title, body, ctaLabel = 'Go to Academy') {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body style="margin:0; padding:0; background:#f4f7ff; font-family:Arial, Helvetica, sans-serif; color:#191927;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f7ff;">
        <tr>
          <td align="center" style="padding:24px 14px 30px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:760px; background:#ffffff; border-radius:30px; overflow:hidden; box-shadow:0 18px 50px rgba(31,41,55,0.08);">
              <tr>
                <td align="center" style="background:#b4a6e4; padding:46px 28px;">
                  <div style="font-size:34px; line-height:1.15; font-weight:900; color:#ffffff; letter-spacing:-0.02em;">Sapereaude Academia</div>
                </td>
              </tr>
              <tr>
                <td style="padding:54px 50px 46px;">
                  <h1 style="margin:0 0 28px; font-size:28px; line-height:1.25; font-weight:900; color:#191927;">${title}</h1>
                  <div style="font-size:20px; line-height:1.65; color:#4d4d60;">
                    ${body}
                  </div>
                  <div style="margin-top:44px; padding-top:28px; border-top:1px solid #edf0f7; text-align:center;">
                    <a href="https://sapere-app.vercel.app" style="display:inline-block; min-width:150px; background:#b4a6e4; color:#ffffff; padding:16px 32px; border-radius:999px; text-decoration:none; font-size:16px; font-weight:900; box-shadow:0 10px 24px rgba(180,166,228,0.28);">${ctaLabel}</a>
                  </div>
                </td>
              </tr>
            </table>
            <p style="margin:26px 0 0; color:#818194; font-size:14px; line-height:1.5; font-weight:600;">© 2026 Sapereaude Academia. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

const invalidTokenCodes = new Set([
  'messaging/invalid-registration-token',
  'messaging/registration-token-not-registered',
  'messaging/invalid-argument'
]);

async function sendPushToUser(userRef, userData, title, body) {
  const tokens = [...new Set(userData.fcmTokens || (userData.fcmToken ? [userData.fcmToken] : []))].filter(Boolean);
  if (tokens.length === 0) {
    return { successCount: 0, failureCount: 0, removedCount: 0 };
  }

  const response = await admin.messaging().sendEachForMulticast({
    notification: { title, body },
    webpush: {
      notification: {
        icon: '/logo.png',
        badge: '/logo.png'
      },
      fcmOptions: {
        link: 'https://sapere-app.vercel.app'
      }
    },
    tokens
  });

  const invalidTokens = [];
  response.responses.forEach((result, index) => {
    if (!result.success && invalidTokenCodes.has(result.error?.code)) {
      invalidTokens.push(tokens[index]);
    }
  });

  if (invalidTokens.length > 0) {
    const updatePayload = {
      fcmTokens: admin.firestore.FieldValue.arrayRemove(...invalidTokens)
    };
    if (invalidTokens.includes(userData.fcmToken)) {
      updatePayload.fcmToken = admin.firestore.FieldValue.delete();
    }
    await userRef.set(updatePayload, { merge: true });
  }

  return {
    successCount: response.successCount,
    failureCount: response.failureCount,
    removedCount: invalidTokens.length
  };
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
        html: buildEmailTemplate(subject, body)
      });
      emailSent = true;
    } catch (e) { console.error(`Email fail:`, e.message); }
  }

  if (studentId || studentEmail) {
    const { userRef, userDoc } = await findNotificationUser(db, studentId, studentEmail);
    if (!userRef || !userDoc?.exists) {
      return { emailSent, pushSent };
    }

    await userRef.collection('notifications').add({
      title: subject, 
      body: body.replace(/<[^>]*>/g, ''), // Strip HTML for push
      timestamp: admin.firestore.FieldValue.serverTimestamp(), 
      read: false, 
      type
    });

    try {
      const pushBody = body.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().substring(0, 120);
      const pushResult = await sendPushToUser(userRef, userDoc.data(), subject, pushBody || 'You have a new notification.');
      pushSent = pushResult.successCount > 0;
      if (pushResult.failureCount > 0) {
        console.warn(`Push partial failure for ${studentId || studentEmail}:`, pushResult);
      }
    } catch (e) { console.error(`Push fail:`, e.message); }
  }

  return { emailSent, pushSent };
}
