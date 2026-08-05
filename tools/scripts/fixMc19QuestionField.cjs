const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'girr2020-mc19b',
      question: 'Given the probability distribution $P(X = 0) = 0.1$, $P(X = 1) = 0.2$, $P(X = 2) = 0.3$, $P(X = 3) = 0.2$, and $P(X = 4) = 0.2$, find the expected value (mean) $E(X)$.'
    },
    {
      id: 'girr2020-mc19c',
      question: 'Given the probability distribution $P(X = 0) = 0.1$, $P(X = 1) = 0.2$, $P(X = 2) = 0.3$, $P(X = 3) = 0.2$, and $P(X = 4) = 0.2$, find $P(X < E(X))$.'
    },
    {
      id: 'girr2020-mc19bs',
      question: 'Given the distribution $P(Y=0)=0.15, P(Y=1)=0.25, P(Y=2)=0.35, P(Y=3)=0.25$, find $E(Y)$.'
    },
    {
      id: 'girr2020-mc19cs',
      question: 'Given the distribution $P(Y=0)=0.15, P(Y=1)=0.25, P(Y=2)=0.35, P(Y=3)=0.25$, find $P(Y \\leq 1)$.'
    }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      question: u.question,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log(`Updated question field for ${u.id}`);
  }

  // Bump sync_meta so cache is invalidated
  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Done. sync_meta bumped.");
  process.exit(0);
}

run().catch(console.error);
