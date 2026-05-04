import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function debugReminders() {
  const today = '2026-05-04';
  console.log('Checking sessions for date:', today);
  
  const snap = await db.collection('sessions').where('date', '==', today).get();
  
  for (const doc of snap.docs) {
    const data = doc.data();
    console.log(`--- Session ID: ${doc.id} ---`);
    console.log(`Student: ${data.studentName} (${data.studentId})`);
    console.log(`Time: ${data.startTime}`);
    console.log(`Reminder Sent: ${data.reminderSent}`);
    
    if (data.studentId) {
      const notifSnap = await db.collection('users').doc(data.studentId).collection('notifications')
        .where('type', '==', 'class_reminder')
        .orderBy('timestamp', 'desc').limit(1).get();
      
      if (!notifSnap.empty) {
        const notif = notifSnap.docs[0].data();
        console.log(`Last Notification: ${notif.title} at ${notif.timestamp?.toDate()}`);
      } else {
        console.log('No class_reminder notification found in Firestore sub-collection.');
      }
    }
    console.log('---');
  }
}

debugReminders().catch(console.error);
