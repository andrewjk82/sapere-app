/**
 * seedLeaderboard.mjs
 * ─────────────────────────────────────────────
 * 기존 users + students 컬렉션 전체를 leaderboard 컬렉션에 동기화합니다.
 * 점수가 없는 학생은 totalXP = 0 으로 등록됩니다.
 * 중복 실행해도 안전합니다 (setDoc with merge:true 사용).
 * ─────────────────────────────────────────────
 * 실행: node src/scripts/seedLeaderboard.mjs
 */

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0wipuWHllQjqiGdCttJ0U6N4mHZysZPk",
  authDomain: "sapere-fe23e.firebaseapp.com",
  projectId: "sapere-fe23e",
  storageBucket: "sapere-fe23e.firebasestorage.app",
  appId: "1:183895600316:web:4a4c185768fac7873eb4b9"
};

const ADMIN_EMAIL = 'andrewjk82@gmail.com';
const SKIP_ROLES = ['admin', 'parent'];

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ── Helper ─────────────────────────────────────────────────────────────────
const buildAvatarUrl = (data, fallbackSeed) => {
  if (data.dreamImageUrl) return data.dreamImageUrl;
  if (data.avatarUrl) return data.avatarUrl;
  if (data.avatarStyle && data.avatarSeed) {
    return `https://api.dicebear.com/7.x/${data.avatarStyle}/svg?seed=${encodeURIComponent(data.avatarSeed)}`;
  }
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(fallbackSeed)}`;
};

const buildDisplayName = (data) => {
  if (data.name) return data.name;
  if (data.displayName) return data.displayName;
  if (data.firstName) return `${data.firstName} ${data.lastName || ''}`.trim();
  return 'Student';
};

// ── Main ───────────────────────────────────────────────────────────────────
let added = 0;
let skipped = 0;

console.log('🌱  Starting leaderboard seed...\n');

// 1. registered users (users 컬렉션)
const usersSnap = await getDocs(collection(db, 'users'));
console.log(`📋  Found ${usersSnap.docs.length} users`);

for (const userDoc of usersSnap.docs) {
  const data = userDoc.data();
  const role = String(data.role || '').toLowerCase();

  // admin / parent 제외
  if (SKIP_ROLES.includes(role) || data.email === ADMIN_EMAIL) {
    console.log(`  ⏭  Skipping ${data.email || userDoc.id} (role: ${role})`);
    skipped++;
    continue;
  }

  const name = buildDisplayName(data);
  const avatarUrl = buildAvatarUrl(data, data.email || userDoc.id);
  const totalXP = Number(data.totalXP) || 0;

  await setDoc(
    doc(db, 'leaderboard', userDoc.id),
    {
      name,
      avatarUrl,
      totalXP,
      role: role || 'student',
      year: data.year || data.assignedYear || '',
      source: 'registered',
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );

  console.log(`  ✅  [registered] ${name} — XP: ${totalXP}`);
  added++;
}

// 2. manual students (students 컬렉션)
const studentsSnap = await getDocs(collection(db, 'students'));
console.log(`\n📋  Found ${studentsSnap.docs.length} manual students`);

for (const studentDoc of studentsSnap.docs) {
  const data = studentDoc.data();
  const name = buildDisplayName(data);
  const avatarUrl = buildAvatarUrl(data, studentDoc.id);
  const totalXP = Number(data.totalXP) || 0;

  // manual 학생은 students/{id} 가 다르므로 "manual-{id}" 키로 저장
  await setDoc(
    doc(db, 'leaderboard', `manual-${studentDoc.id}`),
    {
      name,
      avatarUrl,
      totalXP,
      role: 'student',
      year: data.year || data.assignedYear || data.level || '',
      source: 'manual',
      sourceId: studentDoc.id,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );

  console.log(`  ✅  [manual] ${name} — XP: ${totalXP}`);
  added++;
}

console.log(`\n🎉  Done! Added/updated: ${added} · Skipped: ${skipped}`);
process.exit(0);
