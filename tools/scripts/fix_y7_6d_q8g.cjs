const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y7-6d-q8g');
  
  const options = [
    { text: '\\(\\frac{769}{900}\\)', imageUrl: '' },
    { text: '\\(\\frac{641}{900}\\)', imageUrl: '' }, // 16/900 + 625/900
    { text: '\\(\\frac{77}{90}\\)', imageUrl: '' }, // simplified 770/900
    { text: '\\(\\frac{629}{900}\\)', imageUrl: '' }  // random plausible fraction
  ];

  const solutionSteps = [
    {
      explanation: 'Substitute \\(a = \\frac{2}{5}\\) and \\(b = \\frac{5}{6}\\) into \\(a^2 + b^2\\).',
      workingOut: '\\( \\left(\\frac{2}{5}\\right)^2 + \\left(\\frac{5}{6}\\right)^2 \\)',
      graphData: null
    },
    {
      explanation: 'Evaluate the squares.',
      workingOut: '\\( \\frac{4}{25} + \\frac{25}{36} \\)',
      graphData: null
    },
    {
      explanation: 'Find a common denominator to add the fractions. The lowest common multiple of 25 and 36 is 900.',
      workingOut: '\\( \\frac{4 \\times 36}{25 \\times 36} + \\frac{25 \\times 25}{36 \\times 25} = \\frac{144}{900} + \\frac{625}{900} \\)',
      graphData: null
    },
    {
      explanation: 'Add the numerators to find the final evaluated value.',
      workingOut: '\\( \\frac{144 + 625}{900} = \\frac{769}{900} \\)',
      graphData: null
    }
  ];

  await docRef.update({
    options: options,
    solutionSteps: solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Fixed y7-6d-q8g');
  
  // also check if there are other questions in y7-6 with "opt2"
  const snap = await db.collection('questions').where('chapterId', '==', 'y7-6').get();
  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.options && data.options.some(o => o.text.includes('opt2'))) {
      console.log('Found opt2 in:', doc.id);
    }
  }

  process.exit(0);
}

run().catch(console.error);
