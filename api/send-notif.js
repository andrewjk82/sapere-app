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
    // 1. Send Email (using your Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Sapere Aude" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: subject,
      html: html || text
    });

    // 2. Send Push Notification (if token exists)
    if (studentId) {
      const userDoc = await db.collection('users').doc(studentId).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        if (userData.fcmToken) {
          await admin.messaging().send({
            notification: { title: subject, body: text },
            token: userData.fcmToken
          });
        }
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
