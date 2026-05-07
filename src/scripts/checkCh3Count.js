import { db } from '../firebase/config.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const checkCh3Count = async () => {
  const qRef = collection(db, 'questions');
  const q = query(qRef, where('chapterId', '==', 'y10-3'));
  const snap = await getDocs(q);
  console.log(`Current Chapter 3 count: ${snap.size}`);
  return snap.size;
};
