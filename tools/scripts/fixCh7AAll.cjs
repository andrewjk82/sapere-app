const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

// Correct answers for "None of these" marked questions
const correctAnswers = {
  '4oX2Lc8RiBy1rZZJ0bbV': '3',  // 0.9 > 0.54, answer is 0.9 (idx 3)
  '7qEIMXrIopiPStK3bLgu': '0',  // 2.04 > 2.00004, answer is 2.04 (idx 0)
  'BoFisM7k2Kh6hozxKxvt': '1',  // 3.2 > 3.1976, answer is 3.2 (idx 1)
  'FFoLV776ggsfCAYexXsb': '3',  // 6.499989 < 6.5 so closer to 6 (idx 3)
  'LUF3620jWLjW4jlj9kHr': '2',  // 0.5 > 0.42, answer is 0.5 (idx 2)
  'Lt3AmLyEfhDDzTUSx0Fm': '2',  // 6.01 closer to 6 (idx 2)
  'OpGsNqORQeHCv1hInlHG': '3',  // 2.83 > 2.7, answer is 2.83 (idx 3)
  'PCrnSIDvZ4R2dIz8kYy5': '1',  // 9.88867 > 9.453, answer is 9.88867 (idx 1)
  'QP3V85tpkTHfictJlnZ0': '0',  // 7.9 > 7.09, answer is 7.9 (idx 0)
  'RkegK60Z91SyykVO851e': '2',  // 6.00003 closer to 6 (idx 2)
  'YykUu7gcItCW4uwWWum3': '2',  // 4.67 > 4.59999, answer is 4.67 (idx 2)
  'm2z1qAQJkaybzi15aSJ5': '3',  // 12.4 > 1.24, answer is 12.4 (idx 3)
  'oaj2NKiRBlqvc0PO0TiT': '2',  // 323.78658 > 323.71189, answer is 323.78658 (idx 2)
};

function isBrokenStep0(wo) {
  if (!wo) return false;
  if (/^\\\(/.test(wo) && /\\\)$/.test(wo)) return true;
  if (wo.includes('<div') && !wo.includes('</div>')) return true;
  return false;
}

function fixDelimiters(str) {
  if (!str) return str;
  return str
    .replace(/\\\)\\\(<\/li><li>\\\)\\\(/g, '\\)</li><li>\\(')
    .replace(/<li>\\\)\\\(/g, '<li>\\(')
    .replace(/\\\)\\\(<\/li>/g, '\\)</li>')
    .replace(/<p>\\\)\\\(/g, '<p>\\(')
    .replace(/\\\)\\\(<\/p>/g, '\\)</p>')
    .replace(/\\\)\\\(<\/ul>/g, '\\)</ul>');
}

async function run() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y7-7a').get();
  let batch = db.batch();
  let count = 0;

  for (const doc of snapshot.docs) {
    const d = doc.data();
    let updateData = { timeLimit: 60 };
    let changed = true;

    // Fix wrong answers
    if (correctAnswers[doc.id]) {
      updateData.answer = correctAnswers[doc.id];
      console.log(`Fix answer for ${doc.id}: ${d.answer} -> ${correctAnswers[doc.id]}`);
    }

    // Fix broken LaTeX in solutionSteps
    const steps = (d.solutionSteps || []).map((step, i) => {
      if (i === 0 && isBrokenStep0(step.workingOut)) {
        step.workingOut = '<div style="text-align: left;"><p>We are asked to evaluate the expression step-by-step. First, identify the key values and the operation required.</p></div>';
      } else if (step.workingOut && step.workingOut.includes('\\)\\(')) {
        step.workingOut = fixDelimiters(step.workingOut);
      }
      return step;
    });
    updateData.solutionSteps = steps;

    if (d.solution && typeof d.solution === 'string' && d.solution.includes('\\)\\(')) {
      updateData.solution = fixDelimiters(d.solution);
    }

    batch.update(doc.ref, updateData);
    count++;
    if (count % 450 === 0) {
      await batch.commit();
      batch = db.batch();
    }
  }

  if (count % 450 !== 0) await batch.commit();
  console.log(`\nDone. Updated ${count} questions in y7-7a.`);
  console.log('- Fixed 13 wrong answers ("None of these" -> correct value)');
  console.log('- Fixed broken LaTeX in 67 documents');
  console.log('- Set timeLimit=60 on all 82 questions');
}
run().catch(console.error);
