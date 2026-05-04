import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkRecentLogs() {
  console.log('Checking for the latest cron execution log...');
  const snap = await db.collection('system_logs')
    .get();
  
  const cronLogs = snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(l => l.type === 'cron_execution')
    .sort((a, b) => (b.timestamp?.toMillis() || 0) - (a.timestamp?.toMillis() || 0));
  
  if (cronLogs.length === 0) {
    console.log('No cron_execution logs found.');
    return;
  }
  
  const latest = cronLogs[0];
  console.log(`Latest Log ID: ${latest.id}`);
  console.log(`Time: ${latest.timestamp?.toDate()}`);
  console.log(`Sydney Time: ${latest.sydneyTime}`);
  console.log(`Reminders Sent Count: ${latest.remindersSentCount}`);
}

checkRecentLogs().catch(console.error);
