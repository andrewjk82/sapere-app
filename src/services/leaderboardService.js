/**
 * leaderboardService.js
 * ─────────────────────────────────────────────────────────────────────────
 * 리더보드 전용 컬렉션 (`leaderboard`)을 관리하는 공통 서비스입니다.
 *
 * 데이터 구조: leaderboard/{userId}
 *   - name        : string  — 표시 이름
 *   - avatarUrl   : string  — 아바타 이미지 URL
 *   - totalXP     : number  — 누적 XP (기본값 0)
 *   - role        : string  — 역할 (student 등)
 *   - year        : string  — 학년
 *   - source      : string  — 'registered' | 'manual'
 *   - sourceId    : string? — manual 학생의 students/{id}
 *   - lastUpdated : timestamp
 * ─────────────────────────────────────────────────────────────────────────
 */

import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { buildAvatarUrl, buildDisplayName } from '../utils/avatarUtils';

const ADMIN_EMAIL = 'andrewjk82@gmail.com';
const SKIP_ROLES = ['admin', 'parent'];

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * 등록 학생(users 컬렉션)을 leaderboard 컬렉션에 upsert합니다.
 * @param {string} userId  — Firebase Auth UID
 * @param {object} userData — users/{userId} 문서 데이터
 */
export const upsertRegisteredUserLeaderboard = async (userId, userData) => {
  const role = String(userData.role || '').toLowerCase();
  if (SKIP_ROLES.includes(role) || userData.email === ADMIN_EMAIL) return;

  const name = buildDisplayName(userData);
  const avatarUrl = buildAvatarUrl(userData, userData.email || userId);

  await setDoc(
    doc(db, 'leaderboard', userId),
    {
      name,
      avatarUrl,
      totalXP: Number(userData.totalXP) || 0,
      role: role || 'student',
      year: userData.year || userData.assignedYear || '',
      source: 'registered',
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );
};

/**
 * Manual 학생(students 컬렉션)을 leaderboard 컬렉션에 upsert합니다.
 * @param {string} studentId — students/{id}
 * @param {object} studentData — students/{id} 문서 데이터
 */
export const upsertManualStudentLeaderboard = async (studentId, studentData) => {
  const name = buildDisplayName(studentData);
  const avatarUrl = buildAvatarUrl(studentData, studentId);

  await setDoc(
    doc(db, 'leaderboard', `manual-${studentId}`),
    {
      name,
      avatarUrl,
      totalXP: Number(studentData.totalXP) || 0,
      role: 'student',
      year: studentData.year || studentData.assignedYear || studentData.level || '',
      source: 'manual',
      sourceId: studentId,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );
};

/**
 * 특정 유저의 leaderboard XP를 업데이트합니다.
 * (시험 완료 시 DailyChallenge.jsx 에서 사용)
 */
export const updateLeaderboardXP = async (userId, newTotalXP, userData) => {
  const name = buildDisplayName(userData);
  const avatarUrl = buildAvatarUrl(userData, userId);

  await setDoc(
    doc(db, 'leaderboard', userId),
    {
      name,
      avatarUrl,
      totalXP: newTotalXP,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );
};

/**
 * leaderboard 컬렉션에서 특정 항목을 삭제합니다.
 * (학생 삭제 시 사용)
 */
export const removeFromLeaderboard = async (leaderboardId) => {
  try {
    await deleteDoc(doc(db, 'leaderboard', leaderboardId));
  } catch (err) {
    console.warn('leaderboard removeFromLeaderboard failed (non-fatal):', err.code);
  }
};

/**
 * [Admin 전용] 기존 users + students 전체를 leaderboard에 일괄 동기화합니다.
 * @param {object} options — { onProgress: (msg) => void }
 * @returns {{ added: number, skipped: number }}
 */
export const seedLeaderboardFromExistingData = async ({ onProgress } = {}) => {
  const log = (msg) => {
    console.log(msg);
    if (onProgress) onProgress(msg);
  };

  let added = 0;
  let skipped = 0;

  log('leaderboard 동기화 시작...');

  // 1. registered users
  const usersSnap = await getDocs(collection(db, 'users'));
  log(`등록 사용자 ${usersSnap.docs.length}명 발견`);

  for (const userDoc of usersSnap.docs) {
    const data = userDoc.data();
    const role = String(data.role || '').toLowerCase();

    if (SKIP_ROLES.includes(role) || data.email === ADMIN_EMAIL) {
      skipped++;
      continue;
    }

    try {
      await upsertRegisteredUserLeaderboard(userDoc.id, data);
      log(`✅ [등록] ${buildDisplayName(data)} — XP: ${Number(data.totalXP) || 0}`);
      added++;
    } catch (err) {
      log(`⚠️ [등록] ${userDoc.id} 실패: ${err.code || err.message}`);
    }
  }

  // 2. manual students
  const studentsSnap = await getDocs(collection(db, 'students'));
  log(`수동 등록 학생 ${studentsSnap.docs.length}명 발견`);

  for (const studentDoc of studentsSnap.docs) {
    const data = studentDoc.data();
    try {
      await upsertManualStudentLeaderboard(studentDoc.id, data);
      log(`✅ [수동] ${buildDisplayName(data)} — XP: ${Number(data.totalXP) || 0}`);
      added++;
    } catch (err) {
      log(`⚠️ [수동] ${studentDoc.id} 실패: ${err.code || err.message}`);
    }
  }

  log(`완료! 추가/업데이트: ${added}명 · 건너뜀: ${skipped}명`);
  return { added, skipped };
};

/**
 * 상위 N명 리더보드 데이터를 조회합니다.
 */
export const fetchTopLeaderboard = async (n = 50) => {
  const snap = await getDocs(
    query(collection(db, 'leaderboard'), orderBy('totalXP', 'desc'), limit(n))
  );
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};
