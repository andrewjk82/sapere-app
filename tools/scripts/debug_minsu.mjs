// Debug script to check Minsu's sessions
import { db } from '../firebase/config.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

async function checkMinsu() {
  console.log('--- Checking Users for "Minsu" ---');
  const userRef = collection(db, 'users');
  const userSnap = await getDocs(userRef);
  let minsuUid = null;
  userSnap.forEach(doc => {
    const data = doc.data();
    if (data.firstName === 'Minsu' || data.displayName === 'Minsu') {
      console.log(`Found Minsu: UID=${doc.id}, Email=${data.email}`);
      minsuUid = doc.id;
    }
  });

  if (!minsuUid) {
    console.log('Minsu not found in users collection.');
    return;
  }

  console.log('\n--- Checking Sessions for Minsu ---');
  const sessionRef = collection(db, 'sessions');
  const q = query(sessionRef, where('studentId', '==', minsuUid));
  const sessionSnap = await getDocs(q);
  console.log(`Found ${sessionSnap.size} sessions for UID ${minsuUid}`);
  sessionSnap.forEach(doc => {
    console.log(`Session ID: ${doc.id}, Subject: ${doc.data().subject}, Date: ${doc.data().date}`);
  });

  console.log('\n--- Checking Sessions for Minsu by Name ---');
  const qName = query(sessionRef, where('studentName', '==', 'Minsu'));
  const sessionSnapName = await getDocs(qName);
  console.log(`Found ${sessionSnapName.size} sessions for name "Minsu"`);
  sessionSnapName.forEach(doc => {
    console.log(`Session ID: ${doc.id}, studentId in Doc: ${doc.data().studentId}`);
  });
}

checkMinsu();
