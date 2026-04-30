const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { studentId, email, subject, text, html } = req.body;

  try {
    // 0. Initialize Firebase Admin safely
    if (!admin.apps.length) {
      if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT is missing in Vercel settings');
      }
      try {
        admin.initializeApp({
          credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
        });
      } catch (parseErr) {
        throw new Error('Invalid JSON format in FIREBASE_SERVICE_ACCOUNT. Make sure you copied the entire { ... } block.');
      }
    }

    const db = admin.firestore();

    // 1. Send Email
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email credentials (EMAIL_USER/EMAIL_PASS) are missing');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    console.log(`Attempting to send email to: ${email}`);
    await transporter.sendMail({
      from: `"Sapere Aude" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: subject,
      html: html || text
    });

    // 2. Send Push
    if (studentId) {
      const userDoc = await db.collection('users').doc(studentId).get();
      if (userDoc.exists && userDoc.data().fcmToken) {
        await admin.messaging().send({
          notification: { title: subject, body: text || 'You have a new update.' },
          token: userDoc.data().fcmToken
        });
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Detailed API Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
