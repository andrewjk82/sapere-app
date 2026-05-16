const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'sapere-fe23e'
  });
}

const db = admin.firestore();

async function checkLogs() {
  console.log('Checking system_logs (Simple Query on sapere-fe23e)...');
  
  const snap = await db.collection('system_logs')
    .orderBy('timestamp', 'desc')
    .limit(10)
    .get();

  if (snap.empty) {
    console.log('No logs found.');
    return;
  }

  snap.forEach(doc => {
    const data = doc.data();
    const ts = data.timestamp ? data.timestamp.toDate().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' }) : 'N/A';
    console.log(`[${ts}] TYPE: ${data.type} | STATUS: ${data.status || 'N/A'}`);
    if (data.sydneyTime) console.log(`   SYDNEY_TIME: ${data.sydneyTime}`);
    if (data.error) console.log(`   ERROR: ${data.error}`);
    console.log('---');
  });
}

checkLogs().catch(console.error);
