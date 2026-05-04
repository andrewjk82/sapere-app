import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkAllStudents() {
  const snap = await db.collection('users').where('role', '==', 'student').get();
  const todayStr = '2026-05-03';
  
  for (const doc of snap.docs) {
    const data = doc.data();
    const challengeSnap = await doc.ref.collection('daily_stats').doc(todayStr).get();
    const challengeDone = challengeSnap.exists && challengeSnap.data().completed === true;
    
    console.log(`Student: ${data.name || data.firstName + ' ' + data.lastName} (${doc.id})`);
    console.log(` - Email: ${data.email}`);
    console.log(` - Last 8PM: ${data.last8PMReminderDate}`);
    console.log(` - Challenge Done: ${challengeDone}`);
    console.log(` - Calc Enabled: ${data.calculationEnabled !== false}`);
  }
}

checkAllStudents().catch(console.error);
