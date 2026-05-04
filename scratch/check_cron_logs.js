import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkCronLogs() {
  console.log('Checking system_logs for cron_execution...');
  const snap = await db.collection('system_logs')
    .where('type', '==', 'cron_execution')
    .orderBy('timestamp', 'desc')
    .limit(5)
    .get();
  
  if (snap.empty) {
    console.log('No cron_execution logs found.');
    return;
  }
  
  snap.forEach(doc => {
    const data = doc.data();
    console.log(`Log ID: ${doc.id}`);
    console.log(`Time: ${data.timestamp?.toDate()}`);
    console.log(`Sydney Time: ${data.sydneyTime}`);
    console.log(`Reminders Sent: ${data.remindersSentCount}`);
    console.log('---');
  });
}

checkCronLogs().catch(console.error);
