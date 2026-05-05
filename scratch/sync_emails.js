import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();
const auth = admin.auth();

async function syncEmails() {
  console.log('Fetching all users from Firestore...');
  const usersSnap = await db.collection('users').get();
  
  let updatedCount = 0;
  
  for (const doc of usersSnap.docs) {
    const data = doc.data();
    if (!data.email) {
      console.log(`User ${doc.id} (${data.displayName || data.firstName}) is missing email in Firestore.`);
      try {
        const authUser = await auth.getUser(doc.id);
        if (authUser.email) {
          console.log(` - Found email in Auth: ${authUser.email}. Updating Firestore...`);
          await db.collection('users').doc(doc.id).update({
            email: authUser.email,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
          });
          updatedCount++;
        }
      } catch (e) {
        console.error(` - Error fetching Auth user for ${doc.id}:`, e.message);
      }
    }
  }
  
  console.log(`\nFinished! Updated ${updatedCount} users.`);
}

syncEmails().catch(console.error);
