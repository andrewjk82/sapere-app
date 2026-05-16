import admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import {
  getWeekRangeSydney,
  gatherStudentWeek,
  renderWeeklyReportBody,
  buildEmailShell,
} from './_lib/weeklyReport.js';

/**
 * On-demand weekly report — triggered by the teacher from a student's profile.
 * POST { studentId }  →  builds the current week's report and emails it.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }
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

    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { studentId } = body;
    if (!studentId) {
      return res.status(400).json({ error: 'studentId is required' });
    }

    const userSnap = await db.collection('users').doc(studentId).get();
    if (!userSnap.exists) {
      return res.status(404).json({ error: 'Student account not found. Reports are only available for registered students.' });
    }
    const student = userSnap.data();
    const email = (student.email || '').trim();
    const name = student.name || student.displayName ||
      `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'Student';

    const { days, label } = getWeekRangeSydney(new Date());
    const data = await gatherStudentWeek(db, studentId, days, email);
    const { subject, bodyHtml } = renderWeeklyReportBody({ name, label, days, student, ...data });

    // Send the email.
    let emailSent = false;
    let emailError = null;
    if (email) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com', port: 465, secure: true,
          auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
        });
        await transporter.sendMail({
          from: `"Sapere Aude Academia" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: `[Sapere] ${subject}`,
          html: buildEmailShell(subject, bodyHtml),
        });
        emailSent = true;
      } catch (e) {
        emailError = e.message;
      }
    } else {
      emailError = 'Student has no email address on file.';
    }

    // In-app notification.
    await db.collection('users').doc(studentId).collection('notifications').add({
      title: subject,
      body: 'Your weekly learning report is ready — check your email.',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      read: false,
      type: 'weekly_report',
    }).catch(() => {});

    if (!emailSent) {
      return res.status(200).json({ success: false, emailSent, emailError, email });
    }
    return res.status(200).json({ success: true, emailSent, email });
  } catch (error) {
    console.error('send-report error:', error);
    return res.status(500).json({ error: error.message });
  }
}
