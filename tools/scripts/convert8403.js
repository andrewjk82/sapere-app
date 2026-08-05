import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('84032d3c6f5028695d4d0b1f30b52831');

const options = [
  '\\(x = -2, y = -4 \\text{ or } x = \\frac{5}{4}, y = \\frac{5}{2}\\)',
  '\\(x = 2, y = 4 \\text{ or } x = -\\frac{5}{4}, y = -\\frac{5}{2}\\)',
  '\\(x = 4, y = 2 \\text{ or } x = -\\frac{5}{2}, y = -\\frac{5}{4}\\)',
  '\\(x = -2, y = 4 \\text{ or } x = \\frac{5}{4}, y = -\\frac{5}{2}\\)'
];

docRef.update({
  type: 'multiple_choice',
  options: options,
  answer: 1
}).then(() => {
  console.log('Successfully converted 84032d3c6f5028695d4d0b1f30b52831 to multiple choice');
}).catch(console.error);
