const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function shuffleOptions(options, correctIndex) {
  // Create indexed array
  const indexed = options.map((opt, i) => ({ opt, isCorrect: i === correctIndex }));
  
  // Fisher-Yates shuffle
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  
  const newOptions = indexed.map(x => x.opt);
  const newCorrectIndex = indexed.findIndex(x => x.isCorrect);
  return { newOptions, newCorrectIndex };
}

async function fix() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y7-13a').get();
  let batch = db.batch();
  let count = 0;
  let allA = 0;

  for (const doc of snapshot.docs) {
    const data = doc.data();
    
    // Check current answer
    const currentAnswer = parseInt(data.answer || '0');
    if (currentAnswer === 0) allA++;
    
    // Shuffle options
    let newOptions = data.options;
    let newAnswer = currentAnswer;
    
    if (data.options && data.options.length > 1) {
      const result = shuffleOptions(data.options, currentAnswer);
      newOptions = result.newOptions;
      newAnswer = result.newCorrectIndex;
    }

    batch.update(doc.ref, {
      options: newOptions,
      answer: String(newAnswer),
      timeLimit: 60
    });
    count++;
  }

  await batch.commit();
  console.log(`Fixed ${count} questions in y7-13a (${allA} were answer A before).`);
  console.log('Set timeLimit=60 and shuffled all options.');
}
fix().catch(console.error);
