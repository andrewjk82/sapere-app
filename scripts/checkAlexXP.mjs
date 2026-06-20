/**
 * Check Alex's XP data for the last 2 days.
 * Run: GOOGLE_APPLICATION_CREDENTIALS=~/.config/firebase/andrewjk82_gmail_com_application_default_credentials.json node scripts/checkAlexXP.mjs
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { homedir } from 'os';

const credPath = `${homedir()}/.config/firebase/andrewjk82_gmail_com_application_default_credentials.json`;
const cred = JSON.parse(readFileSync(credPath, 'utf8'));

if (!getApps().length) {
  initializeApp({
    credential: {
      getAccessToken: async () => {
        // Use OAuth2 refresh token to get an access token
        const res = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            client_id: cred.client_id,
            client_secret: cred.client_secret,
            refresh_token: cred.refresh_token,
            grant_type: 'refresh_token',
          }),
        });
        const data = await res.json();
        return { access_token: data.access_token, expires_in: data.expires_in };
      },
    },
    projectId: 'sapere-fe23e',
  });
}

const db = getFirestore();

const today = new Date().toLocaleDateString('en-CA');
const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');
console.log(`Checking dates: ${yesterday}, ${today}`);

// Find Alex in users collection
const usersSnap = await db.collection('users').get();
const students = await db.collection('students').get();

const allDocs = [...usersSnap.docs, ...students.docs];
const alexDocs = allDocs.filter(d => {
  const data = d.data();
  const name = (data.name || data.displayName || data.firstName || '').toLowerCase();
  return name.includes('alex');
});

if (alexDocs.length === 0) {
  console.log('No Alex found in users or students collections');
  process.exit(0);
}

for (const alexDoc of alexDocs) {
  const data = alexDoc.data();
  const col = alexDoc.ref.parent.id;
  console.log(`\n=== ${col}/${alexDoc.id} ===`);
  console.log(`  Name: ${data.name || data.displayName || data.firstName}`);
  console.log(`  totalXP: ${data.totalXP ?? 'MISSING'}`);
  console.log(`  challengesCompleted: ${data.challengesCompleted ?? 'N/A'}`);

  for (const date of [yesterday, today]) {
    for (const colName of ['daily_stats', 'calc_stats']) {
      const statSnap = await alexDoc.ref.collection(colName).doc(date).get();
      if (statSnap.exists) {
        const s = statSnap.data();
        console.log(`\n  [${colName}/${date}]`);
        console.log(`    score: ${s.score} / ${s.total}`);
        console.log(`    xpEarned: ${s.xpEarned ?? 'MISSING'}`);
        console.log(`    completed: ${s.completed}`);
        console.log(`    progressSyncFailed: ${s.progressSyncFailed ?? false}`);
        console.log(`    progressSyncError: ${s.progressSyncError ?? 'none'}`);
        console.log(`    timestamp: ${s.timestamp}`);
      }
    }
  }
}

process.exit(0);
