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
  subject: session.subject || '',
  createdAt: serverTimestamp(),
}, { merge: true });

export const addMakeup = (fields) => addDoc(collection(db, MAKEUP_COL), { ...fields, createdAt: serverTimestamp() });
export const saveMakeupNote = (id, note) => updateDoc(doc(db, MAKEUP_COL, id), { note });
export const removeMakeup = (id) => deleteDoc(doc(db, MAKEUP_COL, id));

// A make-up lesson is an ordinary session doc (so Schedule, the Class page and the student all show it), tagged with
// the list entry it came from. The Make-up page reads these live, so later moves or deletes show there too.
export const addMakeupLesson = async ({ entryId, student, studentId, studentName, subject, date, startTime, endTime }) => {
  const data = {
    subject, studentId, studentName, studentEmail: String(student?.email || '').toLowerCase(),
    groupStudentNames: [studentName], groupId: `series_${Date.now()}`,
    date, startTime, endTime, makeupId: entryId,
    notes: '', homework: '', recurring: false, isHomeworkCompleted: false, reminderSent: false,
    createdAt: new Date().toISOString(),
  };
  await addDoc(collection(db, 'sessions'), data);
  fetch('/api/send-notif', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ studentId, email: student?.email || '', subject: 'Your schedule has been updated', text: `Your ${subject} session has been scheduled for ${date} at ${startTime}.` }),
  }).catch(() => {});
};
