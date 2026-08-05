const fs = require('fs');
const path = require('path');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

const workingOutMap = {
  'y9-1b-q9b1': '\\( (m + 3n) + (2m + n) = 3m + 4n \\)',
  'y9-1b-q9b2': '\\( (2m + n) + (4m + 3n) = 6m + 4n \\)',
  'y9-1b-q9b3': '\\( (3m + 4n) + (6m + 4n) = 9m + 8n \\)',
  'y9-1b-q9c1': '\\( (2p - 3q) + (4p + q) = 6p - 2q \\)',
  'y9-1b-q9c2': '\\( (4p + q) + (5p - 2q) = 9p - q \\)',
  'y9-1b-q9c3': '\\( (6p - 2q) + (9p - q) = 15p - 3q \\)',
  'y9-1b-q9d1': '\\( (6a + 2b) - (4a + b) = 2a + b \\)',
  'y9-1b-q9d2': '\\( (3a + 2b) + (2a + b) = 5a + 3b \\)',
  'y9-1b-q9d3': '\\( (5a + 3b) + (6a + 2b) = 11a + 5b \\)',
  'y9-1b-q9e1': '\\( (11x + 2y) - (6x - 3y) = 5x + 5y \\)',
  'y9-1b-q9e2': '\\( (5x + 5y) - (4x - y) = x + 6y \\)',
  'y9-1b-q9e3': '\\( (6x - 3y) - (x + 6y) = 5x - 9y \\)',
  'y9-1b-q9f1': '\\( (7d + e) - (5d + 3e) = 2d - 2e \\)',
  'y9-1b-q9f2': '\\( (4d - 5e) - (5d + 3e) = -d - 8e \\)',
  'y9-1b-q9f3': '\\( (7d + e) + (4d - 5e) = 11d - 4e \\)'
};

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const seedPath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch1BQuestions.js';
  let content = fs.readFileSync(seedPath, 'utf8');
  
  const prefix = 'export const Y9_CH1B_QUESTIONS = ';
  if (!content.startsWith(prefix)) {
    console.error('File does not start with expected prefix.');
    process.exit(1);
  }
  
  const arrayString = content.slice(prefix.length).trim().replace(/;$/, '');
  let questions = JSON.parse(arrayString);
  
  let updatedCount = 0;
  for (let q of questions) {
    if (q.id && q.id.startsWith('y9-1b-q9') && workingOutMap[q.id]) {
      if (q.solutionSteps && q.solutionSteps.length > 1) {
        q.solutionSteps[1].workingOut = workingOutMap[q.id];
        
        // Also update Firestore
        const docRef = db.collection('questions').doc(q.id);
        batch.update(docRef, { 
          solutionSteps: q.solutionSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updatedCount++;
      }
    }
  }

  await batch.commit();
  console.log(`Successfully updated ${updatedCount} questions in Firestore.`);
  
  await touchChapterIndex(db, 'y9-1b');

  const output = prefix + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(seedPath, output);
  console.log('Successfully updated seedYear9Ch1BQuestions.js locally.');

  process.exit(0);
}

run().catch(console.error);
