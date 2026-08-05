const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y7-7a').get();
  console.log(`Total y7-7a questions: ${snapshot.size}`);

  const answerDist = { '0': 0, '1': 0, '2': 0, '3': 0 };
  const noneOfTheseAsAnswer = [];
  const timeLimits = {};
  const latexBroken = [];

  for (const doc of snapshot.docs) {
    const d = doc.data();

    // Answer distribution
    const ans = d.answer || '0';
    answerDist[ans] = (answerDist[ans] || 0) + 1;

    // Check if correct answer is "None of these"
    const correctOpt = (d.options || [])[parseInt(ans)];
    const correctText = (correctOpt?.text || correctOpt || '').toString();
    if (correctText.toLowerCase().includes('none of these')) {
      noneOfTheseAsAnswer.push({ id: doc.id, question: (d.question||'').substring(0,80), options: d.options });
    }

    // Time limits
    const tl = d.timeLimit || 'unset';
    timeLimits[tl] = (timeLimits[tl] || 0) + 1;

    // Check broken LaTeX in solutionSteps
    const steps = d.solutionSteps || [];
    let broken = false;
    for (const step of steps) {
      const wo = step.workingOut || '';
      if (/^\\\(/.test(wo) && /\\\)$/.test(wo)) broken = true;
      if (wo.includes('<div') && !wo.includes('</div>')) broken = true;
      if (wo.includes('\\)\\(')) broken = true;
    }
    if (broken) latexBroken.push(doc.id);
  }

  console.log('\n--- Answer Distribution ---');
  console.log(answerDist);

  console.log('\n--- Time Limits ---');
  console.log(timeLimits);

  if (noneOfTheseAsAnswer.length > 0) {
    console.log(`\n--- "None of these" set as correct answer (${noneOfTheseAsAnswer.length}) ---`);
    noneOfTheseAsAnswer.forEach(x => {
      console.log(`ID: ${x.id}`);
      console.log(`  Q: ${x.question}`);
      (x.options||[]).forEach((o,i) => console.log(`  ${i}: ${(o?.text||o)}`));
    });
  } else {
    console.log('\n✅ No "None of these" set as correct answer');
  }

  if (latexBroken.length > 0) {
    console.log(`\n--- Broken LaTeX (${latexBroken.length}) ---`);
    latexBroken.forEach(id => console.log(`  ${id}`));
  } else {
    console.log('\n✅ No broken LaTeX found');
  }
}
run().catch(console.error);
