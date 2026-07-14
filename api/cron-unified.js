import admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import { getWeekRangeSydney, gatherStudentWeek, renderWeeklyReportBody, buildEmailShell } from './_lib/weeklyReport.js';
import { classReminderEmail, dailyWrapupEmail, adminSummaryEmail, genericEmail } from './_lib/emailTemplates.js';
import { buildProfile, examPrepD1StudentEmail, examPrepD1TeacherEmail } from './_lib/examPrepReport.js';

// Emails sent per hourly run — the queue carries the rest to the next hour,
// spreading the load (avoids email throttling).
const SIX_PM_BATCH_SIZE = 15;          // evening reminders (5–9 PM window)
const WEEKLY_REPORT_BATCH_SIZE = 15;   // Sunday weekly reports (1–4 PM window)
/** Cap per-student retries in the 5–9 PM window so SMTP outages don't re-hit
 *  the same 24 users every hour with identical user-doc reads. */
const SIX_PM_MAX_ATTEMPTS = 3;
const CRON_STARTED_AT = Date.now();
const CRON_SOFT_LIMIT_MS = 24_000;
const ADMIN_UID = 'MeohP8s0LkPWSTWgEbzc7uaWVEG2';

export default async function handler(req, res) {
  let dbForErrorLog = null;
  let startLogRef = null;
  const logs = [];
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
    dbForErrorLog = db;
    const nowUTC = new Date();
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
    startLogRef = await db.collection('system_logs').add({
      type: 'cron_execution_start',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      sydneyTime: `${sydHour}:${String(sydMinute).padStart(2,'0')}`,
      status: 'started',
      logs: [...logs],
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    // ══════════════════════════════════════════════════════════════════════
    // PART 1: 2-Hour Reminder
    // ══════════════════════════════════════════════════════════════════════
    const targetMin = sydTotalMin + 120;
    // 30 = half the hourly cron interval → consecutive runs tile every session
    // time with no gap. The reminderSent flag dedupes the 1-minute overlap.
    const windowMin = 30;
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
          // First non-empty line of topicCovered makes a tidy "topic" line.
          const topicLine = String(s.topicCovered || s.topic || '')
            .split('\n').map((l) => l.trim()).filter(Boolean)[0] || '';
          const whenLabel = s.endTime ? `${s.startTime} – ${s.endTime}` : String(s.startTime || '');
          const { subject: emailSubject, html } = classReminderEmail({
            name: s.studentName || 'there',
            subjectLabel,
            whenLabel,
            dateLabel: dateStr === todayStr ? 'Today' : 'Tomorrow',
            teacher: s.tutorName || s.teacherName || '',
            topic: topicLine,
            room: s.room || s.location || '',
            bring: s.bring || '',
            hoursAway: 2,
          });
          const pushBody = `Your ${subjectLabel} class starts in 2 hours${whenLabel ? ` (${whenLabel})` : ''}.`;
          await sendNotification(db, transporter, s, 'class_reminder', emailSubject, pushBody, html);
          await docSnapshot.ref.update({ reminderSent: true });
          logs.push(`2hr reminder sent to ${s.studentName}`);
        }
      }
    }

    // ══════════════════════════════════════════════════════════════════════
    // PART 1.5: Exam Prep D-1 Report
    // Runs EARLY in the handler so the 30–60s function budget can't be eaten
    // by the evening wrap-up queue before the report goes out (the cron only
    // fires once a day, so a timeout here means the report is never sent).
    //
    // Targeted per-field equality queries replace the old full `users` scan,
    // and BOTH collections are covered: registered students (users) and
    // manual students (students) — exam dates are mirrored onto users only
    // when a linked registered account exists, so manual-only students were
    // previously invisible to this report. Linked pairs (date present on
    // both docs) are de-duplicated by email.
    // ══════════════════════════════════════════════════════════════════════
    try {
      const examTermKeys = [
        'term1ExamDate', 'term2ExamDate', 'term3ExamDate', 'term4ExamDate',
        'ext1term1ExamDate', 'ext1term2ExamDate', 'ext1term3ExamDate', 'ext1term4ExamDate',
      ];
      const examTermLabels = {
        term1ExamDate: 'Term 1 Exam', term2ExamDate: 'Term 2 Exam',
        term3ExamDate: 'Term 3 Exam', term4ExamDate: 'Term 4 Exam',
        ext1term1ExamDate: 'Ext1 Term 1 Exam', ext1term2ExamDate: 'Ext1 Term 2 Exam',
        ext1term3ExamDate: 'Ext1 Term 3 Exam', ext1term4ExamDate: 'Ext1 Term 4 Exam',
      };

      // Gather candidates with cheap equality queries (a handful of reads)
      // instead of scanning every user document.
      const d1Candidates = [];
      for (const col of ['users', 'students']) {
        const snaps = await Promise.all(examTermKeys.map((dateKey) =>
          db.collection(col).where(dateKey, '==', tomorrowStr).get()
            .catch(() => ({ docs: [] }))
        ));
        snaps.forEach((snap, i) => {
          snap.docs.forEach((d) => d1Candidates.push({ col, studentDoc: d, dateKey: examTermKeys[i] }));
        });
      }

      const handledD1 = new Set();
      let d1Sent = 0;

      for (const { col, studentDoc, dateKey } of d1Candidates) {
        const student = studentDoc.data();
        if (!isStudentProfile(student)) continue;

        const studentId = studentDoc.id;
        const studentEmail = normalizeEmail(student.email);
        const studentName = student.name || student.displayName ||
          `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'Student';

        // One report per student per exam — linked manual/registered pairs
        // both carry the mirrored date, so dedupe by email when available.
        const dedupeKey = `${studentEmail || `${col}/${studentId}`}|${dateKey}`;
        if (handledD1.has(dedupeKey)) continue;
        handledD1.add(dedupeKey);

        const examLabel = examTermLabels[dateKey] || 'Exam';

        // Already sent? Check the nested map (current format) and the legacy
        // literal dotted field name (old writes via set+merge created a nested
        // map the old dotted read never found — fixed here).
        const sentMap = (student.examPrepD1SentFor && typeof student.examPrepD1SentFor === 'object')
          ? student.examPrepD1SentFor : {};
        if (sentMap[dateKey] === tomorrowStr || student[`examPrepD1SentFor.${dateKey}`] === tomorrowStr) continue;

        // Fetch exam prep data. It is always keyed by the student's registered
        // auth uid (the student app uses user.uid). When this candidate is a
        // manual `students` record, resolve the linked registered uid so we
        // read from the right place; otherwise the doc id IS the auth uid.
        let examSummary = null;
        let examPrepHistory = [];
        try {
          let dataUid = studentId;
          if (col === 'students') {
            const linked = await db.collection('users')
              .where('linkedManualStudentId', '==', studentId).limit(1).get()
              .catch(() => ({ empty: true, docs: [] }));
            if (!linked.empty) dataUid = linked.docs[0].id;
          }
          const summarySnap = await db.collection('students').doc(dataUid).collection('exam_prep').doc('summary').get();
          if (summarySnap.exists) examSummary = summarySnap.data();
          const stateSnap = await db.collection('users').doc(dataUid).collection('examPrep').doc('state').get();
          if (stateSnap.exists) {
            const stateData = stateSnap.data();
            if (!examSummary && stateData.stats) examSummary = stateData.stats;
            if (Array.isArray(stateData.history)) examPrepHistory = stateData.history;
          }
        } catch (e) {
          logs.push(`[D-1] Could not fetch exam prep data for ${studentName}: ${e.message}`);
        }

        const profile = buildProfile(studentName, examSummary, examPrepHistory);

        // Send to student
        if (studentEmail) {
          try {
            const { subject, html } = examPrepD1StudentEmail({ studentName, examLabel, examDate: tomorrowStr, profile, examSummary });
            await transporter.sendMail({
              from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
              to: studentEmail,
              subject: `[Sapere] ${subject}`,
              html,
            });
            logs.push(`[D-1] Student email sent to ${studentName} (${examLabel})`);
            d1Sent += 1;
          } catch (e) {
            logs.push(`[D-1] Student email failed for ${studentName}: ${e.message}`);
          }
        } else {
          logs.push(`[D-1] No email on record for ${studentName} (${col}) — teacher copy only.`);
        }

        // Send to teacher (admin)
        try {
          const { subject, html } = examPrepD1TeacherEmail({ studentName, examLabel, examDate: tomorrowStr, profile, examSummary });
          await transporter.sendMail({
            from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
            to: adminEmail,
            subject: `[Sapere] ${subject}`,
            html,
          });
          logs.push(`[D-1] Teacher email sent for ${studentName} (${examLabel})`);
        } catch (e) {
          logs.push(`[D-1] Teacher email failed for ${studentName}: ${e.message}`);
        }

        // In-app notification (registered students only — manual students
        // have no app login to read it)
        if (col === 'users') {
          try {
            await db.collection('users').doc(studentId).collection('notifications').add({
              title: `${examLabel} is tomorrow — check your prep summary`,
              body: `You've completed ${profile.sessions} exam prep session${profile.sessions !== 1 ? 's' : ''} · ${profile.pct}% accuracy. Good luck tomorrow!`,
              timestamp: admin.firestore.FieldValue.serverTimestamp(),
              read: false,
              type: 'exam_d1_report',
            });
          } catch (e) { /* non-fatal */ }
        }

        // Mark sent (nested map — matches the read above)
        await studentDoc.ref.set({
          examPrepD1SentFor: { [dateKey]: tomorrowStr },
        }, { merge: true });
      }
      if (d1Sent > 0) logs.push(`[D-1] ${d1Sent} D-1 report(s) sent.`);
    } catch (e) {
      logs.push(`[D-1] Error: ${e.message}`);
    }

    // ══════════════════════════════════════════════════════════════════════
    // PART 2: Daily Wrap-up (Tasks & Tomorrow's Schedule) - Runs in the evening.
    // Vercel daily crons can drift within the hour, so keep this window forgiving.
    // ══════════════════════════════════════════════════════════════════════
    // Evening reminder window: 4:50 PM – 9:10 PM Sydney. The cron is called
    // hourly, so 5/6/7/8/9 PM runs all fall inside; the queue's retry model
    // means a student missed at 5pm is re-attempted on the later runs.
    if (sydTotalMin >= 1010 && sydTotalMin <= 1270) {
      logs.push(`[Cron] Evening wrap-up window reached. Processing queued reminders...`);
      const queueResult = await processSixPmQueue({
        db,
        transporter,
        todayStr,
        tomorrowStr,
        nowUTC,
        logs,
        isStudentProfile,
        normalizeEmail,
        normalizeSubjectLabel,
        force: req.query.force === 'true',
      });
      logs.push(`[6PM Queue] ${queueResult.sentCount} sent this run, cursor=${queueResult.nextCursor}/${queueResult.totalCount}, complete=${queueResult.complete}.`);
      if (queueResult.complete) {
        await notifyAdminQueueComplete(db, transporter, todayStr, queueResult, logs);
      }
    }

    // ══════════════════════════════════════════════════════════════════════
    // PART 3: Weekly student report — Sundays, spread across the 12:50–16:10
    // window (1/2/3/4 PM hourly runs). A per-week queue with sentIds sends a
    // batch each run and carries the rest over — no big burst, no duplicates.
    // ══════════════════════════════════════════════════════════════════════
    const sydDow = new Date(`${todayStr}T00:00:00Z`).getUTCDay(); // 0 = Sunday
    if (sydDow === 0 && sydTotalMin >= 770 && sydTotalMin <= 970) {
      try {
        const week = getWeekRangeSydney(nowUTC);
        const reportRef = db.collection('weekly_report').doc(week.weekId);
        const reportSnap = await reportRef.get();
        const reportData = reportSnap.exists ? reportSnap.data() : {};
        if (reportData.status === 'complete') {
          logs.push(`[Weekly] Report already complete for week ${week.weekId}.`);
        } else {
          const sentIds = new Set(reportData.sentIds || []);
          // Build the student roster once per week and cache the ids on the
          // report doc. Later Sunday runs (1/2/3/4 PM) reuse that list and
          // fetch only the pending batch by id, instead of re-scanning the
          // whole `users` collection on every run.
          let rosterIds = Array.isArray(reportData.rosterIds) ? reportData.rosterIds : null;
          let batchDocs;
          if (!rosterIds) {
            const usersSnap = await db.collection('users').get();
            const studentDocs = usersSnap.docs.filter((d) => isStudentProfile(d.data()));
            rosterIds = studentDocs.map((d) => d.id);
            const byId = new Map(studentDocs.map((d) => [d.id, d]));
            const pendingIds = rosterIds.filter((id) => !sentIds.has(id));
            batchDocs = pendingIds.slice(0, WEEKLY_REPORT_BATCH_SIZE).map((id) => byId.get(id));
          } else {
            const pendingIds = rosterIds.filter((id) => !sentIds.has(id));
            const batchIds = pendingIds.slice(0, WEEKLY_REPORT_BATCH_SIZE);
            batchDocs = await Promise.all(
              batchIds.map((id) => db.collection('users').doc(id).get())
            );
          }
          let sent = 0;
          let skipped = 0;
          const results = await Promise.allSettled(batchDocs.map(async (sd) => {
            const student = sd.data();
            // A roster id may point to a user deleted mid-week; the fresh-scan
            // path never saw it, but the cached-roster path can. Drop it so it
            // stops being retried and counted as pending forever.
            if (!student) return { id: sd.id, done: true, skipped: true };
            const email = normalizeEmail(student.email);
            const name = student.name || student.displayName ||
              `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'Student';
            const data = await gatherStudentWeek(db, sd.id, week.days, email);
            const report = renderWeeklyReportBody({ name, label: week.label, days: week.days, student, ...data });
            if (!report.hasData) return { id: sd.id, done: true, skipped: true };
            let emailSent = true;
            if (email) {
              try {
                await transporter.sendMail({
                  from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
                  to: email,
                  subject: `[Sapere] ${report.subject}`,
                  html: buildEmailShell(report.subject, report.bodyHtml),
                });
              } catch (err) {
                emailSent = false;
                logs.push(`[Weekly] email failed for ${name}: ${err.message}`);
              }
            }
            await db.collection('users').doc(sd.id).collection('notifications').add({
              title: report.subject,
              body: 'Your weekly learning report is ready — check your email.',
              timestamp: admin.firestore.FieldValue.serverTimestamp(),
              read: false,
              type: 'weekly_report',
            }).catch(() => {});
            // done=true → won't be retried; failed emails stay pending.
            return { id: sd.id, done: emailSent, sent: emailSent };
          }));
          results.forEach((r) => {
            if (r.status === 'fulfilled') {
              if (r.value.done) sentIds.add(r.value.id);
              if (r.value.sent) sent += 1;
              else if (r.value.skipped) skipped += 1;
            } else {
              logs.push(`[Weekly] fail: ${r.reason?.message || r.reason}`);
            }
          });
          const remaining = rosterIds.filter((id) => !sentIds.has(id)).length;
          const complete = remaining === 0;
          await reportRef.set({
            weekId: week.weekId,
            status: complete ? 'complete' : 'partial',
            rosterIds,
            sentIds: Array.from(sentIds),
            sentCount: sentIds.size,
            lastRunAt: admin.firestore.FieldValue.serverTimestamp(),
            ...(complete ? { completedAt: admin.firestore.FieldValue.serverTimestamp() } : {}),
          }, { merge: true });
          logs.push(`[Weekly] ${sent} sent, ${skipped} skipped this run; ${remaining} remaining.`);
        }
      } catch (e) {
        logs.push(`[Weekly] Error: ${e.message}`);
      }
    }

    // (PART 4: Exam Prep D-1 Report moved to PART 1.5 above — it must run
    // before the evening wrap-up queue so the once-a-day cron can't time out
    // before sending it.)

    // ══════════════════════════════════════════════════════════════════════
    // PART 5: Exam Prep D+1 Cleanup
    // The day AFTER an exam: disable examPrepEnabled, clear exam prep stats
    // and history so the student starts fresh for the next exam.
    // The exam date field itself is also cleared so the UI shows a blank date.
    //
    // Read-cost note: gated to the early-morning window (1–5 AM Sydney) and uses
    // indexed `where(dateKey, '==', yesterday)` queries — same pattern as the
    // D-1 report (PART 1.5) — instead of scanning the whole `users` collection
    // every hour. The multi-hour window mirrors the 6PM/weekly windows so a
    // single missed ping doesn't drop that day's cleanup; once a match is
    // cleaned its exam-date field is set to '' so later runs re-query 0 docs.
    // Most days this matches 0 students = a handful of reads total.
    // ══════════════════════════════════════════════════════════════════════
    if (sydTotalMin >= 60 && sydTotalMin < 300) {
    try {
      const examTermKeys = [
        'term1ExamDate', 'term2ExamDate', 'term3ExamDate', 'term4ExamDate',
        'ext1term1ExamDate', 'ext1term2ExamDate', 'ext1term3ExamDate', 'ext1term4ExamDate',
      ];
      // yesterdayStr = the exam date that is now in the past
      const yesterdayUTC = new Date(nowUTC.getTime() - 24 * 60 * 60 * 1000);
      const yesterdayStr = getSydneyDateStr(yesterdayUTC);

      // Only students whose exam was yesterday — indexed query, not a full scan.
      const cleanupSnaps = await Promise.all(examTermKeys.map((dateKey) =>
        db.collection('users').where(dateKey, '==', yesterdayStr).get()
      ));
      // Dedupe: a student could match more than one key; keep userDoc + its keys.
      const candidates = new Map(); // studentId -> { userDoc, dateKeys: Set }
      cleanupSnaps.forEach((snap, i) => {
        const dateKey = examTermKeys[i];
        snap.docs.forEach((userDoc) => {
          if (!isStudentProfile(userDoc.data())) return;
          if (!candidates.has(userDoc.id)) {
            candidates.set(userDoc.id, { userDoc, dateKeys: new Set() });
          }
          candidates.get(userDoc.id).dateKeys.add(dateKey);
        });
      });

      let cleanupCount = 0;

      for (const { userDoc, dateKeys } of candidates.values()) {
        const student = userDoc.data();
        const studentId = userDoc.id;
        const studentName = student.name || student.displayName ||
          `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'Student';

        for (const dateKey of dateKeys) {
          // Skip if already cleaned up for this date
          if (student[`examPrepCleanedFor.${dateKey}`] === yesterdayStr) continue;

          // 1. Disable toggle + clear exam date on the user doc
          const userUpdate = {
            examPrepEnabled: false,
            [dateKey]: '',
            // Clear the D-1 sent flag in its nested-map form (matches the
            // format PART 1.5 writes).
            examPrepD1SentFor: { [dateKey]: admin.firestore.FieldValue.delete() },
            [`examPrepCleanedFor.${dateKey}`]: yesterdayStr,
          };
          await userDoc.ref.set(userUpdate, { merge: true });

          // 2. Delete exam prep summary (students/{uid}/exam_prep/summary)
          try {
            await db.collection('students').doc(studentId)
              .collection('exam_prep').doc('summary').delete();
          } catch (e) { /* doc may not exist */ }

          // 3. Delete cross-device state (users/{uid}/examPrep/state)
          try {
            await db.collection('users').doc(studentId)
              .collection('examPrep').doc('state').delete();
          } catch (e) { /* doc may not exist */ }

          // 4. In-app notification
          try {
            await db.collection('users').doc(studentId).collection('notifications').add({
              title: 'Exam prep reset — ready for next time',
              body: 'Your exam is done! Exam prep has been reset so you can start fresh for your next exam whenever you\'re ready.',
              timestamp: admin.firestore.FieldValue.serverTimestamp(),
              read: false,
              type: 'exam_prep_reset',
            });
          } catch (e) { /* non-fatal */ }

          logs.push(`[D+1] Cleaned up exam prep for ${studentName} (${dateKey}=${yesterdayStr})`);
          cleanupCount += 1;
        }
      }
      if (cleanupCount > 0) logs.push(`[D+1] ${cleanupCount} exam prep reset(s) completed.`);
    } catch (e) {
      logs.push(`[D+1] Cleanup error: ${e.message}`);
    }
    } // end D+1 cleanup 2 AM gate

    // ── Log Execution to system_logs for Dashboard visibility ────────────
    await db.collection('system_logs').add({
      type: 'cron_execution',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      sydneyTime: `${sydHour}:${String(sydMinute).padStart(2,'0')}`,
      remindersSentCount: logs.filter(l => l.toLowerCase().includes('sent')).length,
      logs: logs
    });
    if (startLogRef) {
      await startLogRef.set({
        status: 'completed',
        completedAt: admin.firestore.FieldValue.serverTimestamp(),
        remindersSentCount: logs.filter(l => l.toLowerCase().includes('sent')).length,
        logs,
      }, { merge: true });
    }

    return res.status(200).json({ success: true, logs });

  } catch (error) {
    console.error('Unified Cron Error:', error.message, error.stack);
    logs.push(`[Cron Error] ${error.message}`);
    if (startLogRef) {
      await startLogRef.set({
        status: 'failed',
        failedAt: admin.firestore.FieldValue.serverTimestamp(),
        error: error.message,
        logs,
      }, { merge: true }).catch(() => {});
    } else if (dbForErrorLog) {
      await dbForErrorLog.collection('system_logs').add({
        type: 'cron_execution_error',
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        error: error.message,
        logs,
      }).catch(() => {});
    }
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

async function processSixPmQueue({
  db,
  transporter,
  todayStr,
  tomorrowStr,
  nowUTC,
  logs,
  isStudentProfile,
  normalizeEmail,
  normalizeSubjectLabel,
  force,
}) {
  const queueRef = db.collection('notification_queue_6pm').doc(todayStr);
  const queueSnap = await queueRef.get();
  let queue = queueSnap.exists ? queueSnap.data() : null;

  if (!queue || queue.status === 'failed') {
    queue = await buildSixPmQueue({
      db,
      queueRef,
      todayStr,
      tomorrowStr,
      nowUTC,
      logs,
      isStudentProfile,
      normalizeEmail,
      normalizeSubjectLabel,
    });
  }

  const items = Array.isArray(queue.items) ? queue.items : [];
  const sentIds = new Set(queue.sentIds || []);
  const failCounts = { ...(queue.failCounts || {}) };
  const abandonedIds = new Set(queue.abandonedIds || []);
  let sentCount = 0;

  // Retry model: each hourly run targets students not yet sent and not abandoned
  // after SIX_PM_MAX_ATTEMPTS failures (e.g. Gmail 535 during an outage).
  const pending = items.filter((it) => {
    if (!it?.studentId || sentIds.has(it.studentId) || abandonedIds.has(it.studentId)) return false;
    return (failCounts[it.studentId] || 0) < SIX_PM_MAX_ATTEMPTS;
  });
  const batch = pending.slice(0, SIX_PM_BATCH_SIZE);

  const results = await Promise.allSettled(batch.map(async (item) => {
    try {
      const result = await sendNotification(
        db,
        transporter,
        {
          studentId: item.studentId,
          studentEmail: item.studentEmail,
          email: item.studentEmail,
          name: item.studentName,
        },
        'daily_wrapup',
        item.subject,
        item.body,
        item.fullHtml,
      );

      // Only mark as sent if at least one notification method succeeded
      if (!result.emailSent && !result.pushSent) {
        throw new Error(`Both email and push failed. Email error: ${result.emailError || 'N/A'}. Push error: ${result.pushError || 'N/A'}`);
      }

      await db.collection('users').doc(item.studentId).set({
        last6PMReminderDate: todayStr,
        last6PMReminderClassIds: item.tomorrowClassIds || [],
        last6PMReminderKey: item.reminderKey,
      }, { merge: true });

      sentIds.add(item.studentId);
      delete failCounts[item.studentId];
      return {
        ok: true,
        item,
        message: `6PM wrap-up sent to ${item.studentName} (email=${result.emailSent}, push=${result.pushSent})`,
      };
    } catch (err) {
      const n = (failCounts[item.studentId] || 0) + 1;
      failCounts[item.studentId] = n;
      if (n >= SIX_PM_MAX_ATTEMPTS) {
        abandonedIds.add(item.studentId);
        return {
          ok: false,
          item,
          message: `6PM wrap-up abandoned for ${item.studentName || item.studentId} after ${n} failures: ${err.message}`,
        };
      }
      return {
        ok: false,
        item,
        message: `6PM wrap-up failed for ${item.studentName || item.studentId} (attempt ${n}/${SIX_PM_MAX_ATTEMPTS}): ${err.message}`,
      };
    }
  }));

  results.forEach((result) => {
    const value = result.status === 'fulfilled'
      ? result.value
      : { ok: false, message: `6PM wrap-up failed unexpectedly: ${result.reason?.message || result.reason}` };
    if (value.ok) sentCount += 1;
    logs.push(value.message);
  });

  const remaining = items.filter((it) => (
    it?.studentId
    && !sentIds.has(it.studentId)
    && !abandonedIds.has(it.studentId)
    && (failCounts[it.studentId] || 0) < SIX_PM_MAX_ATTEMPTS
  )).length;
  // Queue is "complete" when nothing left to try (sent or abandoned).
  const complete = remaining === 0;
  await queueRef.set({
    sentIds: Array.from(sentIds),
    abandonedIds: Array.from(abandonedIds),
    failCounts,
    sentCount: sentIds.size,
    status: complete ? 'complete' : 'partial',
    lastRunAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });

  return {
    sentCount,
    totalCount: items.length,
    remaining,
    complete,
    elapsedMs: Date.now() - CRON_STARTED_AT,
  };
}

async function notifyAdminQueueComplete(db, transporter, todayStr, queueResult, logs) {
  const queueRef = db.collection('notification_queue_6pm').doc(todayStr);
  const queueSnap = await queueRef.get();
  const queue = queueSnap.exists ? queueSnap.data() : {};
  if (queue.adminNotifiedAt) return;

  const total = Number(queue.totalCount || queueResult.totalCount || 0);
  const sent = Number(queue.sentCount || queueResult.sentCount || 0);
  const failed = Math.max(0, total - sent);
  const title = `6PM reminder complete: ${sent}/${total}`;
  const body = [
    `Date: ${todayStr}`,
    `Queued: ${total}`,
    `Sent/marked: ${sent}`,
    failed ? `Not completed: ${failed}` : 'All queued reminders processed.',
  ].join('\n');

  const adminHtml = adminSummaryEmail({
    title,
    rows: [
      ['Date', todayStr],
      ['Queued', String(total)],
      ['Sent / marked', String(sent)],
      ...(failed ? [['Not completed', String(failed)]] : []),
    ],
    note: failed ? `${failed} reminder${failed === 1 ? '' : 's'} could not be completed.` : 'All queued reminders processed.',
  });
  await sendNotification(
    db,
    transporter,
    { studentId: ADMIN_UID, email: 'andrewjk82@gmail.com' },
    'cron_summary',
    title,
    `<p style="white-space: pre-wrap; font-size: 16px;">${body}</p>`,
    adminHtml,
  );

  await queueRef.set({
    adminNotifiedAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });
  logs.push(`[6PM Queue] Admin in-app summary notification saved (${sent}/${total}).`);
}

async function buildSixPmQueue({
  db,
  queueRef,
  todayStr,
  tomorrowStr,
  nowUTC,
  logs,
  isStudentProfile,
  normalizeEmail,
  normalizeSubjectLabel,
}) {
  logs.push(`[6PM Queue] Building queue for ${todayStr}.`);
  await queueRef.set({
    status: 'building',
    cursor: 0,
    sentIds: [],
    sentCount: 0,
    date: todayStr,
    tomorrowDate: tomorrowStr,
    startedAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });

  const usersSnap = await db.collection('users').get();
  const studentDocs = usersSnap.docs.filter(doc => isStudentProfile(doc.data()));
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

  logs.push(`[6PM Queue] Found ${studentDocs.length} student profiles and ${tomorrowSessionsSnap.size} sessions for ${tomorrowStr}.`);

  const cleanupRef = db.collection('system_config').doc('stat_cleanup');
  cleanupRef.set({
    lastQueuedDate: todayStr,
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).catch(() => {});

  const items = [];
  const statusChecks = await Promise.all(studentDocs.map(async (studentDoc) => {
    const student = studentDoc.data();
    const studentId = studentDoc.id;
    const studentEmail = normalizeEmail(student.email);
    const studentName = student.name || student.displayName || `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'Student';
    const tomorrowClasses = dedupeSessions([
      ...(sessionsByStudent[studentId] || []),
      ...(sessionsByEmail[studentEmail] || []),
    ]);
    const tomorrowClassIds = tomorrowClasses.map(c => c.id).sort();

    const [challengeSnap, calcSnap] = await Promise.all([
      db.collection('users').doc(studentId).collection('daily_stats').doc(todayStr).get(),
      student.calculationEnabled === false
        ? Promise.resolve(null)
        : db.collection('users').doc(studentId).collection('calc_stats').doc(todayStr).get(),
    ]);
    const challengeDone = challengeSnap.exists && challengeSnap.data().completed === true;
    const calcEnabled = student.calculationEnabled !== false;
    const calcDone = !calcEnabled || (calcSnap?.exists && calcSnap.data().completed === true);
    const hasUnfinishedTasks = !challengeDone || (calcEnabled && !calcDone);
    const reminderKey = [
      todayStr,
      `classes:${tomorrowClassIds.join(',')}`,
      `daily:${challengeDone ? 'done' : 'todo'}`,
      `calc:${calcEnabled ? (calcDone ? 'done' : 'todo') : 'off'}`,
    ].join('|');

    if (student.last6PMReminderKey === reminderKey) return null;
    if (tomorrowClasses.length === 0 && !hasUnfinishedTasks) return null;

    let body = `<h2 style="color: #4f46e5;">Hello, ${studentName}!</h2>`;
    if (hasUnfinishedTasks) {
      body += `<div style="background: #fff1f2; padding: 22px 28px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #fecaca; color: #1f2937; line-height: 1.65; font-size: 16px;">`;
      body += `<p style="margin: 0 0 16px;">You haven't completed your daily mathematics challenge for today yet.</p>`;
      body += `<p style="margin: 0 0 16px;">Consistent practice is the key to mastery! Take 10 minutes to complete your challenge before the day ends.</p>`;
      body += `<p style="margin: 0;">Good luck!</p>`;
      body += `</div>`;
    }
    if (tomorrowClasses.length > 0) {
      body += `<div style="background: #f0f9ff; padding: 15px; border-radius: 12px; border: 1px solid #bae6fd;">`;
      body += `<strong style="color: #0369a1;">Tomorrow's Schedule (${tomorrowStr}):</strong><ul style="margin: 10px 0;">`;
      tomorrowClasses.forEach(c => {
        body += `<li><strong>${normalizeSubjectLabel(c.subject)}</strong> @ ${c.startTime}</li>`;
      });
      body += `</ul></div>`;
    }

    const notificationEmail = studentEmail || normalizeEmail(
      tomorrowClasses.find(c => c.studentEmail || c.email)?.studentEmail ||
      tomorrowClasses.find(c => c.studentEmail || c.email)?.email
    );

    // Branded HTML email — same design language as the class reminder.
    const wrap = dailyWrapupEmail({
      name: studentName,
      hasUnfinishedTasks,
      challengeDone,
      calcDone,
      calcEnabled,
      tomorrowClasses: tomorrowClasses.map(c => ({
        subject: normalizeSubjectLabel(c.subject),
        startTime: c.startTime,
      })),
    });

    return {
      studentId,
      studentEmail: notificationEmail,
      studentName,
      subject: wrap.subject,
      body,
      fullHtml: wrap.html,
      reminderKey,
      hasUnfinishedTasks,
      tomorrowClassIds,
      challengeDone,
      calcDone,
      calcEnabled,
    };
  }));

  statusChecks.filter(Boolean).forEach(item => items.push(item));

  const queue = {
    date: todayStr,
    tomorrowDate: tomorrowStr,
    status: items.length === 0 ? 'complete' : 'ready',
    cursor: 0,
    items,
    totalCount: items.length,
    sentIds: [],
    sentCount: 0,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  await queueRef.set(queue, { merge: true });
  logs.push(`[6PM Queue] Built ${items.length} queued reminders.`);
  return queue;
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
  return genericEmail({ title, body, ctaLabel });
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

async function sendNotification(db, transporter, session, type, subject, body, fullHtml = null) {
  const studentId    = session.studentId;
  const studentEmail = session.studentEmail || session.email;
  let emailSent = false;
  let pushSent = false;
  let emailError = null;
  let pushError = null;

  if (studentEmail) {
    try {
      await transporter.sendMail({
        from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
        to: studentEmail,
        subject: `[Sapere] ${subject}`,
        html: fullHtml || buildEmailTemplate(subject, body)
      });
      emailSent = true;
    } catch (e) { 
      emailError = e.message;
      console.error(`Email fail:`, e.message); 
    }
  } else {
    emailError = "No student email provided";
  }

  if (studentId || studentEmail) {
    const { userRef, userDoc } = await findNotificationUser(db, studentId, studentEmail);
    if (!userRef || !userDoc?.exists) {
      pushError = "User document not found";
      return { emailSent, pushSent, emailError, pushError };
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
        pushError = `Push failed. invalid tokens removed: ${pushResult.removedCount}`;
        console.warn(`Push partial failure for ${studentId || studentEmail}:`, pushResult);
      } else if (!pushSent) {
         pushError = "No active FCM tokens found";
      }
    } catch (e) { 
      pushError = e.message;
      console.error(`Push fail:`, e.message); 
    }
  } else {
    pushError = "No student ID or email provided";
  }

  return { emailSent, pushSent, emailError, pushError };
}
