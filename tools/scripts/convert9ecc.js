import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('9ecc497c1b30ca2568b296fce66a3e2e');

const options = [
  '\\(x = -2, y = -3 \\text{ or } x = -3, y = -2\\)',
  '\\(x = 1, y = 4 \\text{ or } x = 4, y = 1\\)',
  '\\(x = 2, y = 3 \\text{ or } x = 3, y = 2\\)',
  '\\(x = -1, y = 6 \\text{ or } x = 6, y = -1\\)'
];

docRef.update({
  type: 'multiple_choice',
  options: options,
  answer: 2
}).then(() => {
  console.log('Successfully converted 9ecc497c1b30ca2568b296fce66a3e2e to multiple choice');
}).catch(console.error);
