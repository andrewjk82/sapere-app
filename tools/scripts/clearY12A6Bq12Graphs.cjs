'use strict';
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const IDS = [
  'y12a-6b-q12a',
  'y12a-6b-q12b',
  'y12a-6b-q12c',
  'y12a-6b-q12e',
  'y12a-6b-q12f',
];

const SEED = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

(async () => {
  delete require.cache[require.resolve(SEED)];
  const mod = require(SEED);
  const list = mod.Y12A_CH6B_QUESTIONS;
  for (const id of IDS) {
    const q = list.find((x) => x.id === id);
    if (q) {
      q.graphData = null;
      // also clear step graphs if any
      if (Array.isArray(q.solutionSteps)) {
        q.solutionSteps = q.solutionSteps.map((s) => ({ ...s, graphData: null }));
      }
      console.log('seed cleared', id);
    }
  }
  writeFileSync(
    SEED,
    'export const Y12A_CH6B_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6B_QUESTIONS;\n'
  );

  const batch = db.batch();
  for (const id of IDS) {
    batch.set(
      db.collection('questions').doc(id),
      {
        graphData: null,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    // Also strip graphData from solutionSteps if present
    const snap = await db.collection('questions').doc(id).get();
    const data = snap.data() || {};
    if (Array.isArray(data.solutionSteps)) {
      const steps = data.solutionSteps.map((s) => ({ ...s, graphData: null }));
      batch.set(
        db.collection('questions').doc(id),
        { solutionSteps: steps, graphData: null, updatedAt: FieldValue.serverTimestamp() },
        { merge: true }
      );
    }
  }
  await batch.commit();

  // Fully replace graphData field (merge null may not clear nested objects in some clients;
  // update with null should work in Firestore)
  for (const id of IDS) {
    await db.collection('questions').doc(id).update({ graphData: null });
  }

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  for (const id of IDS) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log('FS', id, 'graphData=', d.graphData);
  }
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
