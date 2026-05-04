import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkCronState() {
  const jihwanRef = db.collection('users').doc('6p7K1nz1ecXkQ5h92jWXx4pwrls2');
  const snap = await jihwanRef.get();
  
  if (snap.exists) {
    const data = snap.data();
    console.log('Jihwan Data:', {
      email: data.email,
      role: data.role,
      last8PMReminderDate: data.last8PMReminderDate,
      calculationEnabled: data.calculationEnabled
    });

    const todayStr = '2026-05-03'; // Hardcoded for check
    const challengeSnap = await jihwanRef.collection('daily_stats').doc(todayStr).get();
    console.log('Daily Challenge State:', challengeSnap.exists ? challengeSnap.data() : 'Not started');
    
    const calcSnap = await jihwanRef.collection('calc_stats').where('timestamp', '>=', todayStr).get();
    console.log('Calc State Count:', calcSnap.size);
  } else {
    console.log('Jihwan not found');
  }
}

checkCronState().catch(console.error);
