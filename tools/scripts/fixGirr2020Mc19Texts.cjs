const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // 19b
  await db.collection('questions').doc('girr2020-mc19b').update({
    q: 'Given the probability distribution $P(X = 0) = 0.1$, $P(X = 1) = 0.2$, $P(X = 2) = 0.3$, $P(X = 3) = 0.2$, and $P(X = 4) = 0.2$, find the expected value (mean) $E(X)$.',
    updatedAt: FieldValue.serverTimestamp()
  });

  // 19c
  await db.collection('questions').doc('girr2020-mc19c').update({
    q: 'Given the probability distribution $P(X = 0) = 0.1$, $P(X = 1) = 0.2$, $P(X = 2) = 0.3$, $P(X = 3) = 0.2$, and $P(X = 4) = 0.2$, find $P(X < E(X))$.',
    updatedAt: FieldValue.serverTimestamp()
  });

  // 19bs
  await db.collection('questions').doc('girr2020-mc19bs').update({
    q: 'Given the distribution $P(Y=0)=0.15, P(Y=1)=0.25, P(Y=2)=0.35, P(Y=3)=0.25$, find $E(Y)$.',
    updatedAt: FieldValue.serverTimestamp()
  });

  // 19cs
  await db.collection('questions').doc('girr2020-mc19cs').update({
    q: 'Given the distribution $P(Y=0)=0.15, P(Y=1)=0.25, P(Y=2)=0.35, P(Y=3)=0.25$, find $P(Y \\leq 1)$.',
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated 19b, 19c, 19bs, 19cs question texts in Firestore.");
  process.exit(0);
}

run().catch(console.error);
