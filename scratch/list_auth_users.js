import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const auth = admin.auth();

async function listAuthUsers() {
  console.log("Fetching all users from Firebase Auth...");
  const listUsersResult = await auth.listUsers(1000);
  
  if (listUsersResult.users.length === 0) {
    console.log("No users found in Auth.");
    return;
  }

  listUsersResult.users.forEach((userRecord) => {
    console.log(`UID: ${userRecord.uid} | Email: ${userRecord.email || 'N/A'} | Created: ${userRecord.metadata.creationTime}`);
  });
}

listAuthUsers().catch(console.error);
