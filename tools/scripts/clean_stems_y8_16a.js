import fs from 'fs';
import path from 'path';

const filepath = path.resolve('src/constants/seedYear8Ch16Questions.js');
let content = fs.readFileSync(filepath, 'utf8');

const exportMatch = content.match(/export const (Y8_CH16A_QUESTIONS) = /);
const prefix = 'export const ' + exportMatch[1] + ' = ';
const startIndex = content.indexOf(prefix);
let arrayContent = content.substring(startIndex + prefix.length).trim();
if (arrayContent.endsWith(';')) arrayContent = arrayContent.substring(0, arrayContent.length - 1);

const questions = eval('(' + arrayContent + ')');

let count = 0;
for (const q of questions) {
  if (q.id.match(/q[0-9]+[a-z]$/)) { // matches q10a, q8b, etc.
    const lines = q.question.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    // The last line is usually "a) What is the probability..."
    let lastLine = lines[lines.length - 1];
    
    // Remove the "a) " or "b) " prefix
    lastLine = lastLine.replace(/^[a-z]\)\s*/, '');
    
    // The first line is the main stem
    let firstLine = lines[0];
    
    // If firstLine contains "Find the probability", strip it.
    firstLine = firstLine.replace(/\s*Find the probability that.*$/, '');
    firstLine = firstLine.replace(/\s*What is the probability that when it stops it will be pointing to:$/, '');
    firstLine = firstLine.replace(/\s*What is the probability that:$/, '');
    firstLine = firstLine.replace(/\s*What is the probability that one marble selected at random is:$/, '');
    firstLine = firstLine.replace(/\s*What is the probability that the first fruit chosen at random is:$/, '');
    firstLine = firstLine.replace(/\s*What is the probability that it is:$/, '');
    
    q.question = firstLine.trim() + ' ' + lastLine.trim();
    count++;
  }
}

const newContent = prefix + JSON.stringify(questions, null, 2) + ';\n';
fs.writeFileSync(filepath, newContent, 'utf8');
console.log('Cleaned stems for ' + count + ' questions.');

const adminCode = "import { initializeApp, cert } from 'firebase-admin/app';\\n" +
"import { getFirestore, FieldValue } from 'firebase-admin/firestore';\\n" +
"import fs from 'fs';\\n\\n" +
"async function runPush() {\\n" +
"  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));\\n" +
"  initializeApp({ credential: cert(serviceAccount) });\\n" +
"  const db = getFirestore();\\n\\n" +
"  const { Y8_CH16A_QUESTIONS } = await import('../../../src/constants/seedYear8Ch16Questions.js');\\n" +
"  let count = 0;\\n" +
"  for (const q of Y8_CH16A_QUESTIONS) {\\n" +
"    if (!q.id.match(/q[0-9]+[a-z]$/)) continue;\\n" +
"    await db.collection('questions').doc(q.id).set({\\n" +
"      question: q.question\\n" +
"    }, { merge: true });\\n" +
"    count++;\\n" +
"  }\\n" +
"  console.log(`Updated ${count} question stems in Firestore.`);\\n" +
"}\\nrunPush().catch(console.error);\\n";
fs.writeFileSync(path.resolve('tools/scripts/pushY8Ch16AStems.mjs'), adminCode, 'utf8');
