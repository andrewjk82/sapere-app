import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkStudentsVisibility() {
  const tutorId = 'some_tutor_id'; // Not strictly needed for registered students if admin
  const isAdmin = true;
  const adminEmail = "andrewjk82@gmail.com";

  console.log('--- Checking manual students ---');
  const manualSnap = await db.collection('students').get();
  console.log(`Manual students count: ${manualSnap.size}`);
  manualSnap.forEach(doc => {
    const data = doc.data();
    console.log(` - ${data.name} (Tutor: ${data.tutorId})`);
  });

  console.log('--- Checking registered users ---');
  const usersSnap = await db.collection('users').get();
  console.log(`Total users count: ${usersSnap.size}`);
  
  const registered = usersSnap.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(data => 
      data.email !== adminEmail && 
      data.role !== 'admin'
    );
  
  console.log(`Registered students/parents count: ${registered.length}`);
  registered.forEach(data => {
    console.log(` - ${data.displayName || data.firstName || data.email} (Role: ${data.role}, Status: ${data.status})`);
  });
}

checkStudentsVisibility().catch(console.error);
