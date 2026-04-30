import admin from 'firebase-admin';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { studentId, email, subject, text } = req.body;
  let emailSent = false;

  try {
    // 0. Initialize Firebase Admin
    if (!admin.apps.length) {
      const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
      const privateKey = process.env.FIREBASE_PRIVATE_KEY;

      if (!projectId || !clientEmail || !privateKey) {
        throw new Error('Missing Firebase credentials (ID, Email, or Key)');
      }

      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey: privateKey.replace(/\\n/g, '\n'),
        }),
      });
    }

    const db = admin.firestore();

    // 1. Send Email (Inlined EmailService for reliability)
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_PASS = process.env.GMAIL_PASS;

    if (GMAIL_USER && GMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Sapere Aude Academia" <${GMAIL_USER}>`,
        to: email,
        subject: subject,
        html: `
          <div style="font-family: sans-serif; padding: 40px; background-color: #f4f6fc;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 24px; padding: 40px; border: 1px solid #eef2ff;">
              <h1 style="color: #6366f1; margin-top: 0;">Sapere Aude</h1>
              <h2 style="color: #1e293b;">${subject}</h2>
              <p style="color: #475569; line-height: 1.6; font-size: 16px;">${text}</p>
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
                <p style="color: #94a3b8; font-size: 12px;">© 2026 Sapere Aude Academia</p>
              </div>
            </div>
          </div>
        `
      });
      emailSent = true;
    }

    // 2. Send Push Notification & Save to History
    let tokensFound = 0;
    if (studentId) {
      const userRef = db.collection('users').doc(studentId);
      const userDoc = await userRef.get();
      
      // Save to notification history subcollection
      await userRef.collection('notifications').add({
        title: subject,
        body: text || 'New notification',
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        read: false,
        type: 'test_reminder'
      });

      if (userDoc.exists) {
        const userData = userDoc.data();
        const tokens = userData.fcmTokens || (userData.fcmToken ? [userData.fcmToken] : []);
        tokensFound = tokens.length;
        
        if (tokens.length > 0) {
          console.log(`[API] Sending push to ${tokens.length} devices for student: ${studentId}`);
          await admin.messaging().sendEachForMulticast({
            notification: { title: subject, body: text || 'New notification' },
            tokens: tokens
          });
        }
      }
    }

    return res.status(200).json({ 
      success: true, 
      emailSent, 
      tokensFound 
    });
  } catch (error) {
    console.error('API Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
