
import admin from 'firebase-admin';
import { readFileSync } from 'fs';

async function checkCronLogs() {
  const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' });
  
  console.log(`Checking logs for Sydney date: ${today}`);

  // 1. Check if queue exists
  const queueSnap = await db.collection('notification_queue_8pm').doc(today).get();
  if (queueSnap.exists) {
    console.log('\n--- 8PM Queue Status ---');
    const data = queueSnap.data();
    console.log(`Status: ${data.status}`);
    console.log(`Total items: ${data.totalCount}`);
    console.log(`Sent items: ${data.sentCount}`);
    console.log(`Cursor: ${data.cursor}`);
    console.log(`Last run: ${data.lastRunAt?.toDate()?.toISOString()}`);
  } else {
    console.log('\nNo 8PM queue found for today.');
  }

  // 2. Check system_logs for cron_execution
  console.log('\n--- Recent System Logs (Cron) ---');
  const logsSnap = await db.collection('system_logs')
    .where('type', 'in', ['cron_execution', 'cron_execution_error', 'cron_execution_start'])
    .orderBy('timestamp', 'desc')
    .limit(10)
    .get();

  if (logsSnap.empty) {
    console.log('No cron logs found.');
  }

  logsSnap.forEach(doc => {
    const d = doc.data();
    console.log(`[${d.timestamp?.toDate()?.toISOString()}] ${d.type} - Status: ${d.status || 'N/A'}`);
    if (d.logs) {
      d.logs.forEach(l => console.log(`  > ${l}`));
    }
    if (d.error) console.log(`  !! ERROR: ${d.error}`);
  });
}

checkCronLogs().catch(console.error);
