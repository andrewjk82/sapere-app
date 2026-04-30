const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Initialize Firebase Admin (Vercel uses env variables)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { studentId, email, subject, text, html } = req.body;

  try {
    // Check if env vars are present
    if (!process.env.FIREBASE_SERVICE_ACCOUNT) throw new Error('FIREBASE_SERVICE_ACCOUNT is missing in Vercel');
    if (!process.env.EMAIL_USER) throw new Error('EMAIL_USER is missing in Vercel');
    if (!process.env.EMAIL_PASS) throw new Error('EMAIL_PASS is missing in Vercel');

    // 1. Send Email
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
      console.log(`Attempting to send push to student: ${studentId}`);
      const userDoc = await db.collection('users').doc(studentId).get();
      if (userDoc.exists && userDoc.data().fcmToken) {
        await admin.messaging().send({
          notification: { title: subject, body: text },
          token: userDoc.data().fcmToken
        });
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Detailed API Error:', error.message);
    return res.status(500).json({ error: error.message }); // Return the specific error message
  }
}
