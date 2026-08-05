import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('8fff7565669472ee2db861f03e3c1c6c');

docRef.get().then(doc => {
  const data = doc.data();
  // replace \\$ with \$ in question
  const newQ = data.question.replace(/\\\\\$/g, '\\$');
  return docRef.update({ question: newQ });
}).then(() => {
  console.log('Fixed double backslash in 8fff7565669472ee2db861f03e3c1c6c');
}).catch(console.error);
