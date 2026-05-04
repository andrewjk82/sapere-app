import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

async function checkAdminUser() {
  const adminEmail = "andrewjk82@gmail.com";
  try {
    const user = await admin.auth().getUserByEmail(adminEmail);
    console.log(`Admin User found in Auth:`);
    console.log(` - UID: ${user.uid}`);
    console.log(` - Email: ${user.email}`);
  } catch (e) {
    console.log(`Admin User ${adminEmail} NOT found in Auth!`);
  }

  console.log('\nChecking "Andrew Kim" UID MeohP8s0LkPWSTWgEbzc7uaWVEG2:');
  try {
    const user = await admin.auth().getUser('MeohP8s0LkPWSTWgEbzc7uaWVEG2');
    console.log(` - Email: ${user.email}`);
  } catch (e) {
    console.log(` - UID not found in Auth.`);
  }
}

checkAdminUser().catch(console.error);
