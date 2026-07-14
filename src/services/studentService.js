import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  writeBatch
} from "firebase/firestore";
import { db } from "../firebase/config";
import { upsertManualStudentLeaderboard, removeFromLeaderboard } from "./leaderboardService";
import { localCache } from "./localCacheService";
import { buildAvatarUrl, buildDisplayName } from "../utils/avatarUtils";

const COLLECTION_NAME = "students";
const STUDENT_CACHE_VERSION = 2;

const normalizeEmail = (email) => (email || "").trim().toLowerCase();

const mergeDuplicateStudentRecords = (manualStudents, registeredStudents) => {
  const registeredByEmail = new Map();
  registeredStudents.forEach((student) => {
    const email = normalizeEmail(student.email);
    if (email) registeredByEmail.set(email, student);
  });

  const mergedRegistered = new Map(registeredStudents.map((student) => [student.id, student]));
  const unmatchedManual = [];

  manualStudents.forEach((manual) => {
    const registered = registeredByEmail.get(normalizeEmail(manual.email));
    if (!registered) {
      unmatchedManual.push(manual);
      return;
    }

    mergedRegistered.set(registered.id, {
      ...registered,
      linkedManualStudentId: manual.id,
      tutorId: manual.tutorId || registered.tutorId,
      manualProfile: manual,
    });
  });

  return [
    ...unmatchedManual,
    ...Array.from(mergedRegistered.values())
  ].sort((a, b) => {
    const nameA = a.name || a.displayName || "";
    const nameB = b.name || b.displayName || "";
    return nameA.localeCompare(nameB);
  });
};

const getStudentsCacheKey = (tutorId, isAdmin) =>
  `students:v${STUDENT_CACHE_VERSION}:${isAdmin ? "admin" : tutorId || "unknown"}`;

const getStudentsMetaId = (tutorId, isAdmin) =>
  isAdmin ? "students_admin" : `students_${tutorId || "unknown"}`;

const metaVersionOf = (data) =>
  Number(data?.version || data?.updatedAt?.toMillis?.() || data?.updatedAtMs || 0);

// In-memory cache: avoids the sync_meta Firestore read on rapid successive calls.
// Invalidated on any write operation (add/update/delete/touch).
// P1: 5 min TTL — teacher roster rarely changes mid-session; forceRefresh still bypasses.
const MEM_CACHE_TTL_MS = 5 * 60_000;
const memCache = new Map();
const memGet = (key) => {
  const entry = memCache.get(key);
  if (!entry || Date.now() > entry.expiresAt) { memCache.delete(key); return null; }
  return entry.data;
};
const memSet = (key, data) => memCache.set(key, { data, expiresAt: Date.now() + MEM_CACHE_TTL_MS });
const memInvalidate = (tutorId) => {
  memCache.delete(getStudentsCacheKey(tutorId, false));
  memCache.delete(getStudentsCacheKey(tutorId, true));
  memCache.delete(getStudentsCacheKey(null, true));
};

export const touchStudentsSyncMeta = async (tutorId, isAdmin = false) => {
  memInvalidate(tutorId);
  const metaId = getStudentsMetaId(tutorId, isAdmin);
  await setDoc(doc(db, "sync_meta", metaId), {
    version: Date.now(),
    updatedAt: serverTimestamp(),
  }, { merge: true });
};

export const studentService = {
  // 학생 추가
  async addStudent(tutorId, studentData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...studentData,
        tutorId,
        createdAt: serverTimestamp(),
        lessons: 0,
        status: "Active"
      });

      // Register in leaderboard with XP=0
      try {
        await upsertManualStudentLeaderboard(docRef.id, {
          ...studentData,
          totalXP: 0,
        });
      } catch (lbErr) {
        console.warn('leaderboard addStudent failed (non-fatal):', lbErr.code);
      }
      memInvalidate(tutorId);
      await touchStudentsSyncMeta(tutorId, false).catch(() => {});
      await touchStudentsSyncMeta(tutorId, true).catch(() => {});

      return docRef.id;
    } catch (error) {
      console.error("Error adding student: ", error);
      throw error;
    }
  },

  // 학생 목록 수동 가져오기 (1회성)
  async getStudents(tutorId, isAdmin = false, { forceRefresh = false } = {}) {
    const cacheKey = getStudentsCacheKey(tutorId, isAdmin);

    if (!forceRefresh) {
      // Fast path: in-memory hit (skips even the sync_meta Firestore read)
      const mem = memGet(cacheKey);
      if (mem) return mem;
    }

    const cached = forceRefresh ? null : localCache.get(cacheKey);
    try {
      const metaSnap = await getDoc(doc(db, "sync_meta", getStudentsMetaId(tutorId, isAdmin)));
      const remoteVersion = metaVersionOf(metaSnap.data());
      if (cached?.students && cached?.version === remoteVersion && remoteVersion > 0) {
        memSet(cacheKey, cached.students);
        return cached.students;
      }

      const studentsRef = collection(db, COLLECTION_NAME);
      const manualQuery = isAdmin 
        ? query(studentsRef) 
        : query(studentsRef, where("tutorId", "==", tutorId));

      const manualSnap = await getDocs(manualQuery);
      const manualStudents = manualSnap.docs.map(doc => ({
        id: doc.id,
        source: 'manual',
        ...doc.data()
      }));

      let registeredStudents = [];
      if (isAdmin) {
        const usersRef = collection(db, "users");
        const usersSnap = await getDocs(usersRef);
        registeredStudents = usersSnap.docs
          .filter(doc =>
            doc.data().email !== "andrewjk82@gmail.com" &&
            doc.data().role !== 'admin' &&
            doc.id !== tutorId
          )
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .map(data => ({
            ...data,
            source: 'registered',
            name: buildDisplayName(data),
            avatarUrl: buildAvatarUrl(data, data.email || data.id),
            level: data.assignedYear?.[0] || data.year || data.level || "Year 11",
            subject: data.assignedCourse?.[0] || data.subject || "Maths",
          }));
      }

      const students = mergeDuplicateStudentRecords(manualStudents, registeredStudents);
      const version = remoteVersion || Date.now();
      if (!remoteVersion) {
        await setDoc(doc(db, "sync_meta", getStudentsMetaId(tutorId, isAdmin)), {
          version,
          updatedAt: serverTimestamp(),
        }, { merge: true }).catch(() => {});
      }
      memSet(cacheKey, students);
      localCache.set(cacheKey, { version, savedAt: Date.now(), students });
      return students;
    } catch (error) {
      if (cached?.students) return cached.students;
      console.error("Error fetching students: ", error);
      throw error;
    }
  },

  // 실시간 학생 목록 구독
  subscribeToStudents(tutorId, callback, onError, isAdmin = false) {
    // 1. Manual students query
    const studentsRef = collection(db, COLLECTION_NAME);
    
    // If admin, get ALL manual students. Otherwise, only get those for this tutor.
    const manualQuery = isAdmin 
      ? query(studentsRef) 
      : query(studentsRef, where("tutorId", "==", tutorId));

    // For combined results
    let manualStudents = [];
    let registeredStudents = [];

    const updateAll = () => {
      callback(mergeDuplicateStudentRecords(manualStudents, registeredStudents));
    };

    // Unsubscribe from manual students
    const unsubManual = onSnapshot(manualQuery, (snapshot) => {
      manualStudents = snapshot.docs.map(doc => ({
        id: doc.id,
        source: 'manual',
        ...doc.data()
      }));
      // Preserve the sync_meta-matched version if one is cached — stamping
      // Date.now() here would defeat the version gate that lets the next tab
      // open skip the full users collection scan.
      const cacheKey = getStudentsCacheKey(tutorId, isAdmin);
      const prevVersion = localCache.get(cacheKey)?.version;
      localCache.set(cacheKey, {
        version: prevVersion || Date.now(),
        savedAt: Date.now(),
        students: mergeDuplicateStudentRecords(manualStudents, registeredStudents),
      });
      updateAll();
    }, onError);

    // 2. If admin, fetch registered student users once.
    // Student refresh is manual from the UI; avoid background polling that
    // repeatedly reads the full users collection while a teacher keeps a tab open.
    let cancelled = false;
    if (isAdmin) {
      const fetchRegistered = async () => {
        try {
          const { getDocs } = await import('firebase/firestore');
          // Version-gated like getStudents(): if the cached roster matches the
          // sync_meta version, reuse its registered students (1 read) instead
          // of re-scanning the whole users collection on every tab open.
          try {
            const metaSnap = await getDoc(doc(db, "sync_meta", getStudentsMetaId(tutorId, isAdmin)));
            const remoteVersion = metaVersionOf(metaSnap.data());
            const cached = localCache.get(getStudentsCacheKey(tutorId, isAdmin));
            if (remoteVersion > 0 && cached?.version === remoteVersion && Array.isArray(cached?.students)) {
              const cachedRegistered = cached.students.filter(s => s.source === 'registered');
              if (cachedRegistered.length) {
                if (cancelled) return;
                registeredStudents = cachedRegistered;
                updateAll();
                return;
              }
            }
          } catch (_) { /* fall through to full fetch */ }
          const snap = await getDocs(collection(db, "users"));
          if (cancelled) return;
          registeredStudents = snap.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(data =>
              data.email !== "andrewjk82@gmail.com" &&
              data.role !== 'admin' &&
              data.id !== tutorId
            )
            .map(data => {
              const rawYear = data.level || data.year || "Year ?";
              const formattedYear = /^\d+$/.test(rawYear.toString().trim()) ? `Year ${rawYear.toString().trim()}` : rawYear;
              let displaySubject = data.subject;
              if (!displaySubject) {
                if (data.role === 'parent') displaySubject = "Parent Account";
                else if (data.school) displaySubject = `${data.school}, Maths`;
                else displaySubject = "Registered Student";
              }
              return {
                ...data,
                id: data.id,
                source: 'registered',
                name: buildDisplayName(data),
                level: formattedYear,
                subject: displaySubject,
                status: "Active",
                email: data.email,
                avatarUrl: buildAvatarUrl(data, data.email || data.id),
              };
            });
          localCache.set(getStudentsCacheKey(tutorId, isAdmin), {
            version: Date.now(),
            savedAt: Date.now(),
            students: mergeDuplicateStudentRecords(manualStudents, registeredStudents),
          });
          updateAll();
        } catch (err) {
          if (typeof onError === 'function') onError(err);
        }
      };
      fetchRegistered();
    }

    // Return a function to unsubscribe from both
    return () => {
      cancelled = true;
      unsubManual();
    };
  },

  // 학생 정보 수정
  async updateStudent(studentId, data) {
    const docRef = doc(db, COLLECTION_NAME, studentId);
    await updateDoc(docRef, data);
    await touchStudentsSyncMeta(data?.tutorId, true).catch(() => {});
  },

  // 가입 학생(유저) 정보 수정
  async updateRegisteredUser(userId, data) {
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, data);
    await touchStudentsSyncMeta(data?.tutorId, true).catch(() => {});
  },

  // 학생 삭제
  async deleteStudent(studentId) {
    const docRef = doc(db, COLLECTION_NAME, studentId);
    await deleteDoc(docRef);
    // Remove from leaderboard
    try {
      await removeFromLeaderboard(`manual-${studentId}`);
    } catch (lbErr) {
      console.warn('leaderboard removeStudent failed (non-fatal):', lbErr.code);
    }
    // Clean up any pending grading_queue items so stale review notifications
    // don't keep firing after the student is deleted.
    try {
      const qSnap = await getDocs(query(collection(db, 'grading_queue'), where('userId', '==', studentId)));
      if (!qSnap.empty) {
        const batch = writeBatch(db);
        qSnap.docs.forEach(d => batch.delete(d.ref));
        await batch.commit();
      }
    } catch (qErr) {
      console.warn('grading_queue cleanup failed (non-fatal):', qErr?.message || qErr);
    }
    await touchStudentsSyncMeta(null, true).catch(() => {});
  },

  async deleteRegisteredUser(userId) {
    const docRef = doc(db, "users", userId);
    await deleteDoc(docRef);
    // Remove from leaderboard
    try {
      await removeFromLeaderboard(userId);
    } catch (lbErr) {
      console.warn('leaderboard removeUser failed (non-fatal):', lbErr.code);
    }
    // Clean up any pending grading_queue items so stale review notifications
    // don't keep firing after the student is deleted.
    try {
      const qSnap = await getDocs(query(collection(db, 'grading_queue'), where('userId', '==', userId)));
      if (!qSnap.empty) {
        const batch = writeBatch(db);
        qSnap.docs.forEach(d => batch.delete(d.ref));
        await batch.commit();
      }
    } catch (qErr) {
      console.warn('grading_queue cleanup failed (non-fatal):', qErr?.message || qErr);
    }
    await touchStudentsSyncMeta(null, true).catch(() => {});
  },

  async deleteStudentRecord(student) {
    if (student?.source === "registered") {
      return await this.deleteRegisteredUser(student.id);
    }
    return await this.deleteStudent(student?.id || student);
  }
};
