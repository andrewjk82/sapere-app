import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const auth = admin.auth();

async function checkJiminAuth() {
  try {
    const user = await auth.getUser('ktPXIjuDOYbCWt0dN6VqkYncTqs1');
    console.log('Jimin Auth Record:');
    console.log(`Email: ${user.email}`);
    console.log(`Email Verified: ${user.emailVerified}`);
    console.log(`Providers: ${JSON.stringify(user.providerData)}`);
  } catch (e) {
    console.error('Error:', e.message);
  }
}

checkJiminAuth().catch(console.error);
