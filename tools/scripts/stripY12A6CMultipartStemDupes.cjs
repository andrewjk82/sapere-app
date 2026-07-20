/**
 * Strip parent multi_part stem from sub-question text (seed + Firestore).
 * UI already shows the parent stem above each part.
 *
 *   node tools/scripts/stripY12A6CMultipartStemDupes.cjs
 */
'use strict';

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

function stripStem(parentStem, subText) {
  const stem = (parentStem || '').trim();
  let t = (subText || '').trim();
  if (!stem || !t) return t;

  if (t.startsWith(stem)) {
    t = t.slice(stem.length).replace(/^[\s\n]+/, '');
  } else {
    // Fallback: first ~80 chars of stem appear at start
    const head = stem.slice(0, Math.min(80, stem.length));
    if (head.length >= 40 && t.startsWith(head)) {
      // remove through first double-newline after stem-like block, or first \n\n(a)
      const m = t.match(/^[\s\S]*?\n\s*\n+/);
      if (m) t = t.slice(m[0].length).trim();
    }
  }
  return t.trim();
}

(async () => {
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6CQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const mod = require(seedPath);
  const list = mod.Y12A_CH6C_QUESTIONS || mod.default;

  let seedChanged = 0;
  const parentUpdates = [];

  for (const q of list) {
    if (!q.subQuestions?.length) continue;
    const stem = (q.question || '').trim();
    if (!stem) continue;

    let parentDirty = false;
    for (const sq of q.subQuestions) {
      const before = sq.question || '';
      const after = stripStem(stem, before);
      if (after !== before.trim() && after !== before) {
        sq.question = after;
        seedChanged++;
        parentDirty = true;
        console.log(q.id, '->', sq.id);
        console.log('  was:', before.slice(0, 70).replace(/\n/g, ' | ') + '…');
        console.log('  now:', after.slice(0, 90).replace(/\n/g, ' | '));
      } else if (after !== before) {
        sq.question = after;
        seedChanged++;
        parentDirty = true;
        console.log(q.id, '->', sq.id, '(trimmed)');
      }
    }
    if (parentDirty) {
      q.isNew = true;
      parentUpdates.push(q);
    }
  }

  writeFileSync(
    seedPath,
    'export const Y12A_CH6C_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6C_QUESTIONS;\n'
  );

  // Firestore: update parent subQuestions + child docs
  let fsParents = 0;
  let fsChildren = 0;
  for (const q of parentUpdates) {
    await db.collection('questions').doc(q.id).set(
      {
        subQuestions: q.subQuestions,
        isNew: true,
        origin: 'seed',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    fsParents++;

    for (const sq of q.subQuestions) {
      if (!sq.id) continue;
      const ref = db.collection('questions').doc(sq.id);
      const snap = await ref.get();
      if (!snap.exists) continue;
      await ref.set(
        {
          question: sq.question,
          isNew: true,
          origin: 'seed',
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      fsChildren++;
    }
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

  // verify q13
  const d = (await db.collection('questions').doc('y12a-6c-q13').get()).data();
  console.log('\n=== y12a-6c-q13 parent ===');
  console.log(d.question.slice(0, 100) + '…');
  for (const sq of d.subQuestions || []) {
    console.log(sq.id + ':', (sq.question || '').slice(0, 100).replace(/\n/g, ' '));
  }
  const a = (await db.collection('questions').doc('y12a-6c-q13a').get()).data();
  console.log('\nchild q13a:', (a.question || '').slice(0, 120));

  console.log('\nseedChanged', seedChanged, 'parents', fsParents, 'children', fsChildren, 'ver', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
