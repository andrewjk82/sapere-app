import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// Families waiting for a place (admin-only by rules).
export const WAITING_COL = 'waiting_list';

export const addWaiting = (fields) => addDoc(collection(db, WAITING_COL), { ...fields, createdAt: serverTimestamp() });
export const updateWaiting = (id, fields) => updateDoc(doc(db, WAITING_COL, id), fields);
export const removeWaiting = (id) => deleteDoc(doc(db, WAITING_COL, id));
