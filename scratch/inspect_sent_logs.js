
import admin from 'firebase-admin';
import { readFileSync } from 'fs';

async function inspectSentLogs() {
  const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  const db = admin.firestore();
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' });

  console.log(`Inspecting logs for ${today}...`);

  const queueSnap = await db.collection('notification_queue_8pm').doc(today).get();
  if (queueSnap.exists) {
    const data = queueSnap.data();
    console.log(`Queue Status: ${data.status}`);
    console.log(`Sent Count: ${data.sentCount}`);
    
    // Check first 5 items to see what was sent
    if (data.items) {
      console.log('\n--- Sample Queue Items ---');
      data.items.slice(0, 5).forEach(item => {
        const isSent = data.sentIds?.includes(item.studentId);
        console.log(`Student: ${item.studentName} (${item.studentId}) - Sent: ${isSent}`);
        console.log(`  Subject: ${item.subject}`);
      });
    }
  }

  // Find the log entry for the main run
  console.log('\n--- Detailed Execution Logs ---');
  const logsSnap = await db.collection('system_logs')
    .where('type', '==', 'cron_execution')
    .orderBy('timestamp', 'desc')
    .limit(5)
    .get();

  logsSnap.forEach(doc => {
    const d = doc.data();
    console.log(`\n[${d.timestamp?.toDate()?.toISOString()}] Sent: ${d.remindersSentCount}`);
    if (d.logs) {
      d.logs.forEach(l => {
        if (l.includes('wrap-up') || l.includes('fail') || l.includes('error')) {
          console.log(`  > ${l}`);
        }
      });
    }
  });
}

inspectSentLogs().catch(console.error);
