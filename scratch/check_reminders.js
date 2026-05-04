import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkReminders() {
  const snap = await db.collection('sessions').where('reminderSent', '==', true).get();
  console.log(`Sessions with reminders sent: ${snap.size}`);
  snap.docs.forEach(doc => {
    console.log(` - Session ${doc.id}: ${doc.data().studentName} @ ${doc.data().startTime} (${doc.data().date})`);
  });
}

checkReminders().catch(console.error);
