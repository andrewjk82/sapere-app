const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

const updates = {
  'y10-13a-q5a': {
    q: 'Find the values of \\(\\alpha\\) and \\(\\beta\\).',
    opts: [
      '\\\\(\\alpha = 100^\\\\circ, \\\\beta = 20^\\\\circ\\\\)',
      '\\\\(\\alpha = 80^\\\\circ, \\\\beta = 40^\\\\circ\\\\)',
      '\\\\(\\alpha = 110^\\\\circ, \\\\beta = 10^\\\\circ\\\\)',
      '\\\\(\\alpha = 100^\\\\circ, \\\\beta = 40^\\\\circ\\\\)'
    ]
  },
  'y10-13a-q5b': {
    q: 'Find the values of \\(\\alpha\\) and \\(\\beta\\).',
    opts: [
      '\\\\(\\alpha = 60^\\\\circ, \\\\beta = 30^\\\\circ\\\\)',
      '\\\\(\\alpha = 50^\\\\circ, \\\\beta = 40^\\\\circ\\\\)',
      '\\\\(\\alpha = 70^\\\\circ, \\\\beta = 20^\\\\circ\\\\)',
      '\\\\(\\alpha = 60^\\\\circ, \\\\beta = 60^\\\\circ\\\\)'
    ]
  },
  'y10-13a-q5c': {
    q: 'Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\).',
    opts: [
      '\\\\(\\alpha = 40^\\\\circ, \\\\beta = 110^\\\\circ, \\\\gamma = 140^\\\\circ\\\\)',
      '\\\\(\\alpha = 50^\\\\circ, \\\\beta = 100^\\\\circ, \\\\gamma = 140^\\\\circ\\\\)',
      '\\\\(\\alpha = 40^\\\\circ, \\\\beta = 140^\\\\circ, \\\\gamma = 110^\\\\circ\\\\)',
      '\\\\(\\alpha = 30^\\\\circ, \\\\beta = 120^\\\\circ, \\\\gamma = 130^\\\\circ\\\\)'
    ]
  },
  'y10-13a-q5d': {
    q: 'Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\).',
    opts: [
      '\\\\(\\alpha = 120^\\\\circ, \\\\beta = 60^\\\\circ, \\\\gamma = 70^\\\\circ\\\\)',
      '\\\\(\\alpha = 60^\\\\circ, \\\\beta = 120^\\\\circ, \\\\gamma = 70^\\\\circ\\\\)',
      '\\\\(\\alpha = 110^\\\\circ, \\\\beta = 70^\\\\circ, \\\\gamma = 60^\\\\circ\\\\)',
      '\\\\(\\alpha = 120^\\\\circ, \\\\beta = 70^\\\\circ, \\\\gamma = 60^\\\\circ\\\\)'
    ]
  },
  'y10-13a-q5e': {
    q: 'Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\).',
    opts: [
      '\\\\(\\alpha = 140^\\\\circ, \\\\beta = 80^\\\\circ, \\\\gamma = 20^\\\\circ\\\\)',
      '\\\\(\\alpha = 80^\\\\circ, \\\\beta = 140^\\\\circ, \\\\gamma = 20^\\\\circ\\\\)',
      '\\\\(\\alpha = 130^\\\\circ, \\\\beta = 90^\\\\circ, \\\\gamma = 30^\\\\circ\\\\)',
      '\\\\(\\alpha = 140^\\\\circ, \\\\beta = 20^\\\\circ, \\\\gamma = 80^\\\\circ\\\\)'
    ]
  },
  'y10-13a-q5f': {
    q: 'Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\).',
    opts: [
      '\\\\(\\alpha = 40^\\\\circ, \\\\beta = 40^\\\\circ, \\\\gamma = 10^\\\\circ\\\\)',
      '\\\\(\\alpha = 40^\\\\circ, \\\\beta = 50^\\\\circ, \\\\gamma = 20^\\\\circ\\\\)',
      '\\\\(\\alpha = 50^\\\\circ, \\\\beta = 30^\\\\circ, \\\\gamma = 10^\\\\circ\\\\)',
      '\\\\(\\alpha = 10^\\\\circ, \\\\beta = 40^\\\\circ, \\\\gamma = 40^\\\\circ\\\\)'
    ]
  }
};

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const seedPath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
  let content = fs.readFileSync(seedPath, 'utf8');
  
  const prefix = 'export const Y10_CH13A_QUESTIONS = ';
  if (!content.startsWith(prefix)) {
    console.error('File does not start with expected prefix.');
    process.exit(1);
  }
  
  const arrayString = content.slice(prefix.length).trim().replace(/;$/, '');
  let questions = JSON.parse(arrayString);
  
  let updatedCount = 0;
  for (let q of questions) {
    if (updates[q.id]) {
      const up = updates[q.id];
      q.question = up.q;
      q.opts = up.opts;
      q.a = '0'; // Since correct is first in our array, let's make sure it's 0 (it was usually index 2 before, but our opts has correct at 0)
      
      const docRef = db.collection('questions').doc(q.id);
      batch.update(docRef, { 
        question: q.question,
        opts: q.opts,
        a: q.a,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  await batch.commit();
  console.log(`Successfully updated ${updatedCount} questions in Firestore.`);
  
  await touchChapterIndex(db, 'y10-13a');

  const output = prefix + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(seedPath, output);
  console.log('Successfully updated seedYear10Ch13AQuestions.js locally.');

  process.exit(0);
}

run().catch(console.error);
