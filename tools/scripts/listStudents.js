import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const usersSnap = await db.collection('users').get();
console.log(`Total users: ${usersSnap.size}\n`);

const students = [];
for (const doc of usersSnap.docs) {
  const d = doc.data();
  if (d.role === 'admin') continue;
  const name = d.name || d.firstName || d.displayName || '';
  const year = d.assignedYear || d.year || '';
  students.push({ uid: doc.id, name, year: JSON.stringify(year), qCount: d.dailyQuestionCount || 10 });
}

students.sort((a, b) => a.name.localeCompare(b.name));
for (const s of students) {
  console.log(`${s.name.padEnd(25)} | Year: ${String(s.year).padEnd(15)} | Q: ${s.qCount} | ${s.uid}`);
}

process.exit(0);
