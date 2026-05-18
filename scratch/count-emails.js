import { db } from '../src/firebase/config.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

async function estimate() {
  try {
    // 1. Get active students
    const usersSnap = await getDocs(collection(db, 'users'));
    let activeStudents = 0;
    usersSnap.forEach(doc => {
      const data = doc.data();
      // Assuming students have a role or just count all non-admins
      if (data.role !== 'admin' && data.email) {
        activeStudents++;
      }
    });

    // 2. We can estimate 4 weekly reports per student per month
    const weeklyEmailsPerMonth = activeStudents * 4;

    console.log(`Active Students with email: ${activeStudents}`);
    console.log(`Estimated Weekly Reports per month: ${weeklyEmailsPerMonth}`);
    
    // Hard to count challenge stats across all subcollections easily without admin SDK,
    // let's just log the user count first to get a baseline.
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}
estimate();
