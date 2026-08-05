const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function shuffleOptions(options, correctIndex) {
  const indexed = options.map((opt, i) => ({ opt, isCorrect: i === correctIndex }));
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  return {
    newOptions: indexed.map(x => x.opt),
    newCorrectIndex: indexed.findIndex(x => x.isCorrect)
  };
}

async function run() {
  // 1. Fix RufxKAOuzyBOf5Jy4FV5 — broken \)\( in step1 and solution
  const rufxRef = db.collection('questions').doc('RufxKAOuzyBOf5Jy4FV5');
  const rufxDoc = await rufxRef.get();
  if (rufxDoc.exists) {
    const steps = rufxDoc.data().solutionSteps || [];
    steps[1].workingOut = '<div style="text-align: left;"><p>Converting the value step-by-step:</p><p>\\(150\\% = \\frac{150}{100} = 1.5\\) and \\(\\frac{150}{100} = \\frac{3}{2} = 1\\frac{1}{2}\\)</p></div>';
    await rufxRef.update({
      solutionSteps: steps,
      solution: '<div style="text-align: left;"><p>Converting the value step-by-step:</p><p>\\(150\\% = \\frac{150}{100} = 1.5\\) and \\(\\frac{150}{100} = \\frac{3}{2} = 1\\frac{1}{2}\\)</p></div>'
    });
    console.log('Fixed: RufxKAOuzyBOf5Jy4FV5');
  }

  // 2. Fix Ch14A — shuffle answers and set time to 60s
  // First check what topicId Ch14A uses
  const sample = await db.collection('questions').where('topicCode', '==', '14A').where('year', '==', 'Year 7').limit(1).get();
  let topicId = 'y7-14a';
  if (!sample.empty) {
    topicId = sample.docs[0].data().topicId;
    console.log(`Found topicId: ${topicId}`);
  }

  const snapshot = await db.collection('questions').where('topicId', '==', topicId).get();
  let batch = db.batch();
  let count = 0;
  let allA = 0;

  for (const doc of snapshot.docs) {
    const data = doc.data();
    const currentAnswer = parseInt(data.answer || '0');
    if (currentAnswer === 0) allA++;

    let newOptions = data.options;
    let newAnswer = currentAnswer;
    if (data.options && data.options.length > 1) {
      const result = shuffleOptions(data.options, currentAnswer);
      newOptions = result.newOptions;
      newAnswer = result.newCorrectIndex;
    }

    batch.update(doc.ref, { options: newOptions, answer: String(newAnswer), timeLimit: 60 });
    count++;

    if (count % 450 === 0) {
      await batch.commit();
      console.log(`Committed batch of 450...`);
      batch = db.batch();
    }
  }

  if (count % 450 !== 0) await batch.commit();
  console.log(`Fixed ${count} questions in ${topicId} (${allA} were answer A). Set time=60s.`);
}
run().catch(console.error);
