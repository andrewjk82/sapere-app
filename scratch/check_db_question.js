import admin from 'firebase-admin';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!projectId || !clientEmail || !privateKey) {
  console.error("Missing credentials");
  process.exit(1);
}

admin.initializeApp({
  projectId,
  credential: admin.credential.cert({
    projectId,
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, '\n'),
  }),
});

const db = admin.firestore();

async function run() {
  const snap = await db.collection('questions').where('topicId', '==', 'y7-4a').get();
  for (const doc of snap.docs) {
    const q = doc.data();
    if (q.question.includes('Choose the diagram')) {
      console.log('--- Found Question ---');
      console.log(q.question);
      console.log('--- End Question ---');
    }
  }
  process.exit(0);
}

run();
