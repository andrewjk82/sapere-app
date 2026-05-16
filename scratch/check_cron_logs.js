import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import 'dotenv/config';

// Load env from .env.local if exists
try {
  const envFile = readFileSync('.env.local', 'utf8');
  envFile.split('\n').forEach(line => {
    const [key, ...value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.join('=').trim().replace(/^"|"$/g, '');
    }
  });
} catch(e) {}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

async function check() {
  const db = admin.firestore();
  console.log("Fetching latest cron_execution logs...");
  const snap = await db.collection('system_logs')
    .where('type', 'in', ['cron_execution', 'cron_execution_error', 'cron_execution_start'])
    .orderBy('timestamp', 'desc')
    .limit(10)
    .get();
  
  if (snap.empty) {
    console.log("No cron logs found.");
    return;
  }

  snap.forEach(doc => {
    const data = doc.data();
    console.log(`[${data.timestamp?.toDate()?.toISOString()}] TYPE: ${data.type}`);
    console.log(`Sydney Time: ${data.sydneyTime}, Status: ${data.status || 'N/A'}`);
    if (data.error) console.log(`Error: ${data.error}`);
    console.log(`Logs:`);
    (data.logs || []).forEach(l => console.log(`  - ${l}`));
    console.log('---');
  });
}
check().catch(console.error);
