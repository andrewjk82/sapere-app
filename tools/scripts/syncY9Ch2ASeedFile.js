import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y9-2a')
    .get();

  const list = [];
  snap.forEach(doc => {
    const d = doc.data();
    list.push({
      id: doc.id,
      c: d.topicCode || '2A',
      t: d.topicTitle || 'Pythagoras\' Theorem',
      type: d.type,
      difficulty: d.difficulty,
      q: d.question,
      a: d.answer,
      opts: d.options || [],
      h: d.hint || '',
      s: d.solution || '',
      solutionSteps: d.solutionSteps || []
    });
  });

  list.sort((x, y) => x.id.localeCompare(y.id));

  // Now read the local seed file
  const seedFilePath = 'src/constants/seedSurdsQuestions.js';
  const fileContent = readFileSync(seedFilePath, 'utf8');
  
  // Find where the first y9-2a question block starts
  // It will have "id": "y9-2a-..."
  const regexStart = /\n\s*\{\n\s*"id":\s*"y9-2a-/;
  const matchStart = fileContent.match(regexStart);
  if (!matchStart) {
    console.error('Could not find start of y9-2a questions in file!');
    return;
  }
  const startIndex = matchStart.index + 1; // start after the newline

  // Find the end index of the SURDS_QUESTIONS_Y11A array
  const endKeyword = '\n];\n\n// Year 9 Ch2A questions';
  const endIndex = fileContent.indexOf(endKeyword);
  if (endIndex === -1) {
    console.error('Could not find end of SURDS_QUESTIONS_Y11A array in file!');
    return;
  }

  // Format list to match the indentation and file style
  const formattedQuestions = list.map(q => {
    return JSON.stringify(q, null, 4)
      .split('\n')
      .map(line => '    ' + line)
      .join('\n');
  }).join(',\n');

  const newContent = fileContent.substring(0, startIndex) + formattedQuestions + fileContent.substring(endIndex);
  
  writeFileSync(seedFilePath, newContent);
  console.log('✅ Local seed file seedSurdsQuestions.js updated successfully!');
}

run().catch(console.error);
