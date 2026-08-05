const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Fix 3VCQGRNFnpRFvQPtBACD: "implies" in math mode renders as spaced letters → use \Rightarrow
  const doc1 = await db.collection('questions').doc('3VCQGRNFnpRFvQPtBACD').get();
  if (doc1.exists) {
    const steps = doc1.data().solutionSteps;
    steps[0].workingOut = '<div style="text-align: left;"><p>Read the word problem carefully and translate each phrase into algebraic terms.</p></div>';
    steps[1].workingOut = `<div style="text-align: left;"><p>Translating the word problem into algebra:</p><ul><li>"12 bags containing \\(x\\) marbles" \\(\\Rightarrow 12x\\).</li><li>"18 loose marbles" \\(\\Rightarrow +18\\).</li><li>"Total of 378 marbles" \\(\\Rightarrow = 378\\).</li></ul><p>Therefore, the equation is:</p><p>\\(12x + 18 = 378\\)</p></div>`;
    await doc1.ref.update({ solutionSteps: steps });
    console.log('Fixed 3VCQGRNFnpRFvQPtBACD');
  }

  // Fix 53BWnLQL10wmGZabBsET: broken \)\( in mid-sentence
  const doc2 = await db.collection('questions').doc('53BWnLQL10wmGZabBsET').get();
  if (doc2.exists) {
    const steps = doc2.data().solutionSteps;
    steps[0].workingOut = '<div style="text-align: left;"><p>Substitute the given value of \\(y\\) into the equation and solve for \\(x\\).</p></div>';
    steps[1].workingOut = `<div style="text-align: left;"><p>Substitute \\(y = 48\\) into the formula \\(y = 4x\\):</p><p>\\(48 = 4x\\)</p><p>Divide both sides by 4:</p><p>\\(x = \\frac{48}{4} = 12\\)</p></div>`;
    await doc2.ref.update({ solutionSteps: steps });
    console.log('Fixed 53BWnLQL10wmGZabBsET');
  }

  // Fix 9iQj7JXO1W9cduNrYGrx: same broken pattern
  const doc3 = await db.collection('questions').doc('9iQj7JXO1W9cduNrYGrx').get();
  if (doc3.exists) {
    const steps = doc3.data().solutionSteps;
    steps[0].workingOut = '<div style="text-align: left;"><p>Substitute the given value of \\(y\\) into the equation and solve for \\(x\\).</p></div>';
    steps[1].workingOut = `<div style="text-align: left;"><p>Substitute \\(y = 25\\) into the formula \\(y = x - 7\\):</p><p>\\(25 = x - 7\\)</p><p>Add 7 to both sides:</p><p>\\(x = 25 + 7 = 32\\)</p></div>`;
    await doc3.ref.update({ solutionSteps: steps });
    console.log('Fixed 9iQj7JXO1W9cduNrYGrx');
  }

  // Check new ID (past paper format)
  const newId = '8fff7565669472ee2db861f03e3c1c6c';
  // Try questions collection first, then pastPaperQuestions
  let newDoc = await db.collection('questions').doc(newId).get();
  if (!newDoc.exists) newDoc = await db.collection('pastPaperQuestions').doc(newId).get();
  if (!newDoc.exists) newDoc = await db.collection('pastpaperquestions').doc(newId).get();
  
  if (newDoc.exists) {
    const d = newDoc.data();
    console.log(`\n=== ${newId} (collection: ${newDoc.ref.parent.id}) ===`);
    console.log('question:', (d.question||'').substring(0,300));
    (d.solutionSteps||[]).forEach((s,i) => console.log(`step${i}:`, (s.workingOut||'').substring(0,300)));
    console.log('solution:', (d.solution||'').substring(0,300));
  } else {
    console.log(`\nID ${newId} not found in any collection.`);
  }
}
run().catch(console.error);
