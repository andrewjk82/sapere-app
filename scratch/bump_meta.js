import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

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
  await db.collection('sync_meta').doc('questions').set({
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    version: Date.now()
  }, { merge: true });
  console.log("Bumped sync_meta/questions!");
  process.exit(0);
}
run();
