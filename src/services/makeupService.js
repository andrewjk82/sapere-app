import { addDoc, collection, deleteDoc, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// Make-up lessons the teacher still owes (admin-only by rules). An entry added from a lesson uses the session doc id,
// so pressing the button twice never lists the same lesson twice.
export const MAKEUP_COL = 'makeup_classes';

export const addMakeupFromSession = (session) => setDoc(doc(db, MAKEUP_COL, session.id), {
  studentName: session.studentName || session.groupStudentNames?.[0] || 'Student',
  studentId: session.studentId || session.groupStudents?.[0]?.studentId || '',
  missedDate: session.date || '',
  missedTime: session.startTime || '',
  createdAt: serverTimestamp(),
}, { merge: true });

export const addMakeup = (fields) => addDoc(collection(db, MAKEUP_COL), { ...fields, createdAt: serverTimestamp() });
export const saveMakeupNote = (id, note) => updateDoc(doc(db, MAKEUP_COL, id), { note });
export const removeMakeup = (id) => deleteDoc(doc(db, MAKEUP_COL, id));
