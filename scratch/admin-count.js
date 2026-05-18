import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!projectId || !clientEmail || !privateKey) {
  console.error("Missing credentials in .env.local");
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
  try {
    const usersSnap = await db.collection('users').get();
    let studentCount = 0;
    
    // Admin IDs
    const admins = new Set(['andrewjk82@gmail.com', 'admin@example.com']); 
    
    usersSnap.forEach(doc => {
      const data = doc.data();
      if (data.email && !admins.has(data.email) && data.role !== 'admin') {
        studentCount++;
      }
    });

    console.log(`\n--- ESTIMATION ---`);
    console.log(`Active Students: ${studentCount}`);
    console.log(`Weekly Reports (4 weeks): ${studentCount * 4} emails/month`);
    
    // Let's estimate daily challenges. If each student does 5 challenges a week
    // That's 20 challenges a month per student.
    const challengesPerMonth = studentCount * 20;
    console.log(`Admin Notifications (if 5/week/student): ${challengesPerMonth} emails/month to Admin`);
    
    const total = (studentCount * 4) + challengesPerMonth;
    console.log(`Total estimated volume: ~${total} emails/month`);

    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}
run();
