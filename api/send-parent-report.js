import admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import { getWeekRangeSydney, gatherStudentWeek } from './_lib/weeklyReport.js';
import { buildParentReport } from './_lib/parentWeeklyReport.js';

/**
 * Parent weekly report — triggered by the teacher from a student's profile.
 * POST { studentId, lang?: 'en' | 'ko', preview?: boolean }
 *   - sends this week's report to the parent email saved on the student (parent_contacts/{id}.parentEmail),
 *     in `lang` (default: parent_contacts/{id}.parentLang, else 'en').
 *   - preview: true → returns { subject, html } and sends nothing.
 */
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

// Same rule as firestore.rules isAdmin(): the teacher's own account only.
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'andrewjk82@gmail.com').toLowerCase();

async function verifyAdmin(req) {
  const token = (req.headers.authorization || '').replace('Bearer ', '').trim();
  if (!token) return false;
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    return String(decoded.email || '').toLowerCase() === ADMIN_EMAIL;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
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
    if (!(await verifyAdmin(req))) return res.status(401).json({ error: 'Unauthorized' });
    const db = admin.firestore();
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { studentId, preview = false } = body;
    if (!studentId) return res.status(400).json({ error: 'studentId is required' });

    const userSnap = await db.collection('users').doc(studentId).get();
    if (!userSnap.exists) {
      return res.status(404).json({ error: 'Student account not found. Parent reports need a registered student.' });
    }
    const student = userSnap.data();
    // Parent contact is in parent_contacts/{uid} (admin-only), not on the student's own document.
    const contact = (await db.collection('parent_contacts').doc(studentId).get()).data() || {};
    const parentEmail = String(contact.parentEmail || '').trim();
    const lang = (body.lang || contact.parentLang) === 'ko' ? 'ko' : 'en';
    if (!preview && !EMAIL_RE.test(parentEmail)) {
      return res.status(200).json({ success: false, emailError: 'No valid parent email saved for this student (add it in Edit profile).' });
    }

    const name = `${student.firstName || ''} ${student.lastName || ''}`.trim() || student.name || student.displayName || 'Student';
    // Sent on a Monday (the week has just started) → report the week that just ended.
    let week = getWeekRangeSydney(new Date());
    if (week.dow === 1) week = getWeekRangeSydney(new Date(Date.now() - 24 * 3600 * 1000));
    const { dailyByDate, sessions } = await gatherStudentWeek(db, studentId, week.days, student.email || '');

    // Textbook progress: every lesson the student has had, per book (one bounded query on their own sessions).
    const allSnap = await db.collection('sessions').where('studentId', '==', studentId).get();
    const allSessions = allSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
    const groupKeys = [...new Set(allSessions.flatMap((s) => (s.learnedTopics || []).map((t) => t.groupKey)).filter(Boolean))];
    const curricula = {};
    await Promise.all(groupKeys.map(async (k) => {
      const [year, course] = k.split('|');
      const snap = await db.collection('curriculum').doc([String(year).replace(/ /g, '_'), course].filter(Boolean).join('_')).get();
      if (snap.exists) curricula[k] = snap.data();
    }));

    const { subject, html } = buildParentReport({
      lang,
      name,
      subtitle: [student.year || student.level, 'Maths'].filter(Boolean).join(' · '),
      days: week.days,
      dailyByDate,
      sessions,
      allSessions,
      curricula,
      dailyGoal: Number(student.dailyQuestionCount) || 10,
    });
    if (preview) return res.status(200).json({ success: true, preview: true, subject, html, lang });

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', port: 465, secure: true,
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
      });
      await transporter.sendMail({
        from: `"Secret Study" <${process.env.GMAIL_USER}>`,
        to: parentEmail,
        subject,
        html,
      });
    } catch (e) {
      return res.status(200).json({ success: false, emailError: e.message });
    }
    return res.status(200).json({ success: true, lang });
  } catch (error) {
    console.error('send-parent-report error:', error);
    return res.status(500).json({ error: error.message });
  }
}
