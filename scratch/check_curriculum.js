import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkCurriculum() {
  const doc = await db.collection('curriculum').doc('Year_9').get();
  console.log('Exists?', doc.exists);
  if (doc.exists) {
    const data = doc.data();
    console.log(`Chapters count: ${data.chapters?.length || 0}`);
    if (data.chapters?.length > 0) {
      console.log('First chapter ID:', data.chapters[0].id);
    }
  } else {
    // List all curriculums to see what's there
    const snap = await db.collection('curriculum').get();
    console.log('Available curriculum docs:');
    snap.docs.forEach(d => console.log(d.id));
  }
}

checkCurriculum().catch(console.error);
