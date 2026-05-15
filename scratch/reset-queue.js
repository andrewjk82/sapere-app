import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
});

const db = admin.firestore();

async function reset() {
  const todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' });
  await db.collection('notification_queue_8pm').doc(todayStr).delete();
  console.log(`Deleted 8pm queue for today: ${todayStr}`);
}

reset();
