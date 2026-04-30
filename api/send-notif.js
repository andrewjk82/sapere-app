const admin = require('firebase-admin');
const { EmailService } = require('../src/lib/emailService');

// Initialize Firebase Admin (Using the reliable tutor-pro style)
if (!admin.apps.length) {
  try {
    // Priority 1: Separate environment variables (More reliable on Vercel)
    if (process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
        }),
      });
    } 
    // Priority 2: Fallback to the single JSON string
    else if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      if (serviceAccount.private_key) {
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
      }
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    }

    console.log("Firebase Admin initialized successfully.");
  } catch (error) {
    console.error('Firebase Admin Initialization Error:', error.message);
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { studentId, email, subject, text } = req.body;

  try {
    const db = admin.firestore();

    // 1. Send Email Notification (Using the new EmailService)
    console.log(`[API] Attempting to send email to ${email}...`);
    const emailSent = await EmailService.sendEmail(email, subject, text);

    // 2. Send Push Notification (If studentId provided)
    if (studentId) {
      const userDoc = await db.collection('users').doc(studentId).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        // Support both single fcmToken or array fcmTokens (for tutor-pro compatibility)
        const tokens = userData.fcmTokens || (userData.fcmToken ? [userData.fcmToken] : []);
        
        if (tokens.length > 0) {
          console.log(`[API] Sending push to ${tokens.length} devices for student: ${studentId}`);
          await admin.messaging().sendEachForMulticast({
            notification: { title: subject, body: text },
            tokens: tokens
          });
        }
      }
    }

    return res.status(200).json({ success: true, emailSent });
  } catch (error) {
    console.error('[API Error]:', error.message);
    return res.status(500).json({ error: error.message });
  }
};
