import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  orderBy
} from "firebase/firestore";
import { db } from "../firebase/config";
import { upsertManualStudentLeaderboard, removeFromLeaderboard } from "./leaderboardService";

const COLLECTION_NAME = "students";

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

      return docRef.id;
    } catch (error) {
      console.error("Error adding student: ", error);
      throw error;
    }
  },

  // 학생 목록 수동 가져오기 (1회성)
  async getStudents(tutorId, isAdmin = false) {
    try {
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
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(data => 
            data.email !== "andrewjk82@gmail.com" && 
            data.role !== 'admin' && 
            data.id !== tutorId
          )
          .map(data => {
            const fallbackAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(data.email || data.id)}`;
            return {
              ...data,
              source: 'registered',
              name: data.name || data.displayName || `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'Student',
              avatarUrl: data.avatarUrl || data.dreamImageUrl || fallbackAvatar,
              level: data.assignedYear?.[0] || data.year || data.level || "Year 11",
              subject: data.assignedCourse?.[0] || data.subject || "Maths"
            };
          });
      }

      return [
        ...manualStudents,
        ...registeredStudents
      ].sort((a, b) => {
        const nameA = a.name || "";
        const nameB = b.name || "";
        return nameA.localeCompare(nameB);
      });
    } catch (error) {
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
      // Merge and normalize
      const combined = [
        ...manualStudents,
        ...registeredStudents
      ].sort((a, b) => {
        const nameA = a.name || a.displayName || "";
        const nameB = b.name || b.displayName || "";
        return nameA.localeCompare(nameB);
      });
      callback(combined);
    };

    // Unsubscribe from manual students
    const unsubManual = onSnapshot(manualQuery, (snapshot) => {
      manualStudents = snapshot.docs.map(doc => ({
        id: doc.id,
        source: 'manual',
        ...doc.data()
      }));
      updateAll();
    }, onError);

    // 2. If admin, fetch registered student users.
    //
    // Previously this used onSnapshot on the unfiltered `users` collection.
    // Every user-doc write anywhere in the system fired the listener and
    // re-read every user — a major contributor to RESOURCE_EXHAUSTED. The
    // student list does NOT need sub-second freshness; a one-shot fetch on
    // subscribe + a 5-minute periodic refresh is plenty for a tutoring
    // admin view.
    let intervalId = null;
    let cancelled = false;
    if (isAdmin) {
      const fetchRegistered = async () => {
        try {
          const { getDocs } = await import('firebase/firestore');
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
              const fallbackAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(data.email || data.id)}`;
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
                name: data.name || data.displayName || (data.firstName ? `${data.firstName} ${data.lastName || ''}`.trim() : data.email),
                level: formattedYear,
                subject: displaySubject,
                status: "Active",
                email: data.email,
                avatarUrl: data.avatarUrl || fallbackAvatar,
              };
            });
          updateAll();
        } catch (err) {
          if (typeof onError === 'function') onError(err);
        }
      };
      fetchRegistered();
      intervalId = setInterval(fetchRegistered, 5 * 60 * 1000); // 5 minutes
    }

    // Return a function to unsubscribe from both
    return () => {
      cancelled = true;
      unsubManual();
      if (intervalId) clearInterval(intervalId);
    };
  },

  // 학생 정보 수정
  async updateStudent(studentId, data) {
    const docRef = doc(db, COLLECTION_NAME, studentId);
    return await updateDoc(docRef, data);
  },

  // 가입 학생(유저) 정보 수정
  async updateRegisteredUser(userId, data) {
    const docRef = doc(db, "users", userId);
    return await updateDoc(docRef, data);
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
  },

  async deleteStudentRecord(student) {
    if (student?.source === "registered") {
      return await this.deleteRegisteredUser(student.id);
    }
    return await this.deleteStudent(student?.id || student);
  }
};
