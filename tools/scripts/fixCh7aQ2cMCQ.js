import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.join(__dirname, '../../backup_seeds/seedYear9Ch7Questions.js');
let seedContent = fs.readFileSync(seedPath, 'utf8');

// The replacement logic:
// We need to find y9-7a-q2c in the seed file.
// We will replace its type to 'multiple_choice'
// Add options and answer.
// Clean up question string.

const regex = /id:\s*'y9-7a-q2c'[\s\S]*?question:\s*`([^`]+)`,\s*type:\s*'short_answer'/;

const match = seedContent.match(regex);
if (match) {
  let originalQuestion = match[1];
  // Remove ", giving reasons (right angle)." or ", giving reasons (straight angle)." etc.
  let newQuestion = originalQuestion.replace(/,\s*giving reasons[^.]*\./g, '.');
  
  const replacement = `id: 'y9-7a-q2c',
    question: \`${newQuestion}\`,
    type: 'multiple_choice',
    options: [
      { text: '\\\\(12.5^\\\\circ\\\\)' },
      { text: '\\\\(22.5^\\\\circ\\\\)' },
      { text: '\\\\(30^\\\\circ\\\\)' },
      { text: '\\\\(45^\\\\circ\\\\)' }
    ],
    answer: 1`;
    
  seedContent = seedContent.replace(regex, replacement);
  fs.writeFileSync(seedPath, seedContent, 'utf8');
  console.log('Successfully updated seed file for y9-7a-q2c');
} else {
  console.log('Could not find y9-7a-q2c short_answer block in seed file.');
}

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y9-7a-q2c');
  const data = (await docRef.get()).data();
  if (data) {
    let q = data.question;
    q = q.replace(/,\s*giving reasons[^.]*\./g, '.');
    await docRef.update({
      question: q,
      type: 'multiple_choice',
      options: [
        { text: '\\(12.5^\\circ\\)' },
        { text: '\\(22.5^\\circ\\)' },
        { text: '\\(30^\\circ\\)' },
        { text: '\\(45^\\circ\\)' }
      ],
      answer: 1
    });
    console.log('Successfully updated Firestore for y9-7a-q2c');
  }
}

run().catch(console.error);
