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

    // 2. If admin, also subscribe to registered student users
    let unsubUsers = () => {};
    if (isAdmin) {
      const usersRef = collection(db, "users");
      // Fetch all users and filter in memory to handle missing 'role' fields
      unsubUsers = onSnapshot(usersRef, (snapshot) => {
        registeredStudents = snapshot.docs
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
              if (data.role === 'parent') {
                displaySubject = "Parent Account";
              } else if (data.school) {
                displaySubject = `${data.school}, Maths`;
              } else {
                displaySubject = "Registered Student";
              }
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

  // 가입 학생(유저) 정보 수정
  async updateRegisteredUser(userId, data) {
    const docRef = doc(db, "users", userId);
    return await updateDoc(docRef, data);
  },

  // 학생 삭제
  async deleteStudent(studentId) {
    const docRef = doc(db, COLLECTION_NAME, studentId);
    return await deleteDoc(docRef);
  },

  async deleteRegisteredUser(userId) {
    const docRef = doc(db, "users", userId);
    return await deleteDoc(docRef);
  },

  async deleteStudentRecord(student) {
    if (student?.source === "registered") {
      return await this.deleteRegisteredUser(student.id);
    }
    return await this.deleteStudent(student?.id || student);
  }
};
