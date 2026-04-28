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
  subscribeToStudents(tutorId, callback, onError) {
    const q = query(
      collection(db, COLLECTION_NAME), 
      where("tutorId", "==", tutorId),
      orderBy("createdAt", "desc")
    );

    return onSnapshot(q, (snapshot) => {
      const students = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(students);
    }, (error) => {
      console.error("Error subscribing to students: ", error);
      if (typeof onError === 'function') onError(error);
    });
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
