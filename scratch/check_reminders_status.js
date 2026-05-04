const admin = require('firebase-admin');
const path = require('path');

// Initialize with local credentials if possible, or just use the same env vars
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // This might work in the environment
    projectId: 'sapere-app-f2e32'
  });
}

const db = admin.firestore();

async function checkSessions() {
  const today = '2026-05-04';
  console.log('Checking sessions for date:', today);
  
  const snap = await db.collection('sessions').where('date', '==', today).get();
  
  if (snap.empty) {
    console.log('No sessions found for today.');
    return;
  }
  
  snap.forEach(doc => {
    const data = doc.data();
    console.log(`ID: ${doc.id}`);
    console.log(`Student: ${data.studentName}`);
    console.log(`Time: ${data.startTime}`);
    console.log(`Reminder Sent: ${data.reminderSent}`);
    console.log('---');
  });
}

checkSessions().catch(console.error);
