import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targetIds = [
  'rFhK4fpV4YFwqMhJUy9b', // q1
  'cFWooF7i9L47uPvKkiiS', // q2
  '174vTcmPNyrWdudcjXbI', // q3
  'tqGERhwsvzIcDZpfNHwn', // q4
  'cR3Rwod6nxnPELv16cIx', // q5
  'MdDDdXVddPTM83EP1VNX', // q6
  'TOcXsCu6R4KpoDDh6uXX', // q7
  'YweS5ffVJ4eHcq9a4bAC', // q8
  'pYtSRZEFCiIiLlRcj0SE'  // q9
];

async function run() {
  const list = [];
  for (const id of targetIds) {
    const doc = await db.collection('questions').doc(id).get();
    list.push({ id, ...doc.data() });
  }

  // Convert short_answer subQuestions to multiple_choice
  const updatedList = list.map(q => {
    if (!q.subQuestions) return q;

    const newSubQuestions = q.subQuestions.map(sq => {
      if (sq.type !== 'short_answer') return sq;

      const answerVal = sq.answer; // e.g. 'M', 'C', 'X', 'Y', 'Z'
      // Create actual math options
      const options = [
        `Point $${answerVal}$`,
        `Point $A$`,
        `Point $B$`,
        `Point $P$`
      ].filter((v, i, self) => self.indexOf(v) === i).slice(0, 4);

      // Make options unique and clean
      while (options.length < 4) {
        const char = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
        const cand = `Point $${char}$`;
        if (!options.includes(cand)) {
          options.push(cand);
        }
      }

      // Shuffle options and put answer in a specific index
      // Let's place the correct answer randomly based on question id
      let hash = 0;
      for (let i = 0; i < sq.id.length; i++) {
        hash += sq.id.charCodeAt(i);
      }
      const aIndex = hash % 4;

      const finalOpts = [];
      let idx = 0;
      for (let i = 0; i < 4; i++) {
        if (i === aIndex) {
          finalOpts.push(`Point $${answerVal}$`);
        } else {
          let opt = options[idx];
          if (opt === `Point $${answerVal}$`) {
            idx++;
            opt = options[idx];
          }
          finalOpts.push(opt);
          idx++;
        }
      }

      return {
        ...sq,
        type: 'multiple_choice',
        isManual: true,
        options: finalOpts,
        opts: finalOpts,
        answer: aIndex,
        a: aIndex
      };
    });

    return {
      ...q,
      subQuestions: newSubQuestions,
      isNew: true
    };
  });

  console.log('Writing changes to Firestore...');
  const batch = db.batch();
  for (const q of updatedList) {
    const docRef = db.collection('questions').doc(q.id);
    batch.set(docRef, q, { merge: true });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.set(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  // Update newQuestions registry
  const newQuestionsMetaRef = db.doc('sync_meta/newQuestions');
  batch.set(newQuestionsMetaRef, {
    ids: FieldValue.arrayUnion(...targetIds),
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  await batch.commit();
  console.log('Successfully transformed all Year 7 Chapter 5A geometry short_answer subquestions to multiple_choice and synchronized Firestore!');
}

run().catch(err => {
  console.error('Error running conversion:', err);
  process.exit(1);
});
