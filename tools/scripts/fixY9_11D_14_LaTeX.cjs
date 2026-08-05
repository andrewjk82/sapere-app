const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const latexSolution = "Proof: Gradient \\(m = -\\frac{b}{a}\\), \\(y\\)-intercept \\(c = b\\).<br>Substituting into \\(y = mx + c\\) gives \\(y = -\\frac{b}{a}x + b\\).<br>Dividing by \\(b\\) yields \\(\\frac{y}{b} = -\\frac{x}{a} + 1\\), which rearranges to \\(\\frac{x}{a} + \\frac{y}{b} = 1\\).";

  batch.update(db.collection('questions').doc('y9-11d-q14'), {
    'answer': latexSolution,
    'solution': latexSolution,
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q14 answer and solution with LaTeX.");
  process.exit(0);
}

run().catch(console.error);
