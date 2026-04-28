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
      return docRef.id;
    } catch (error) {
      console.error("Error adding student: ", error);
      throw error;
    }
  },

  // 실시간 학생 목록 구독
  subscribeToStudents(tutorId, callback, onError, isAdmin = false) {
    // 1. Manual students query
    const studentsRef = collection(db, COLLECTION_NAME);
    const manualQuery = query(studentsRef, where("tutorId", "==", tutorId));

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

    // 2. If admin, also subscribe to registered student users
    let unsubUsers = () => {};
    if (isAdmin) {
      const usersRef = collection(db, "users");
      const usersQuery = query(usersRef, where("role", "==", "student"));
      
      unsubUsers = onSnapshot(usersQuery, (snapshot) => {
        registeredStudents = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            source: 'registered',
            name: data.displayName || `${data.firstName} ${data.lastName}` || data.email,
            level: data.year || "Year ?",
            subject: "Registered Student", // Or from a specific field if available
            status: "Active",
            email: data.email,
            ...data
          };
        });
        updateAll();
      }, onError);
    }

    // Return a function to unsubscribe from both
    return () => {
      unsubManual();
      unsubUsers();
    };
  },

  // 학생 정보 수정
  async updateStudent(studentId, data) {
    const docRef = doc(db, COLLECTION_NAME, studentId);
    return await updateDoc(docRef, data);
  },

  // 학생 삭제
  async deleteStudent(studentId) {
    const docRef = doc(db, COLLECTION_NAME, studentId);
    return await deleteDoc(docRef);
  }
};
