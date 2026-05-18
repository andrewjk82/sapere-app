import admin from 'firebase-admin';
import { CURRICULUM_DATA } from '../src/constants/curriculumData.js';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    }),
  });
}
const db = admin.firestore();

async function run() {
  const snap = await db.collection('users').where('firstName', '==', 'Chloe').get();
  snap.docs.forEach(d => {
    const s = d.data();
    console.log('User:', s.name || s.firstName);
    console.log('assignedYear:', s.assignedYear);
    console.log('assignedCourse:', s.assignedCourse);
    console.log('assignedChapters:', s.assignedChapters);
    console.log('completedChapters:', s.completedChapters);
    
    // Reproduce logic
    let chapters = [];
    const assignedYears = (Array.isArray(s.assignedYear) ? s.assignedYear : [s.assignedYear || "Year 11"]).filter(y => typeof y === 'string' && y.startsWith('Year '));
    const assignedCourses = Array.isArray(s.assignedCourse) ? s.assignedCourse : [s.assignedCourse || "Advanced"];
    assignedYears.forEach((year) => {
      const yearData = CURRICULUM_DATA[year];
      if (!yearData) return;
      if (Array.isArray(yearData)) chapters = [...chapters, ...yearData];
      else assignedCourses.forEach((course) => { if (yearData[course]) chapters = [...chapters, ...yearData[course]]; });
    });
    console.log('Matched Chapters count:', chapters.length);
    const curIds = new Set(chapters.map(c => c.id));
    const uniqueCompleted = new Set(s.completedChapters || []);
    const completedInCur = Array.from(uniqueCompleted).filter(id => curIds.has(id));
    console.log('completedInCurriculum count:', completedInCur.length);
    const progressPct = Math.min(Math.round((completedInCur.length / (chapters.length || 1)) * 100), 100);
    console.log('Progress PCT:', progressPct);
  });
}
run();
