/**
 * syncNewQuestionsIndex.js
 * 
 * One-time migration: reads all isNew:true question IDs from Firestore,
 * writes them as an array into sync_meta/newQuestions, then can be imported
 * as a helper in all update scripts going forward.
 *
 * Usage:
 *   node tools/scripts/syncNewQuestionsIndex.js
 *
 * In update scripts, import and call addToNewQuestionsIndex(ids) after writing.
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

/** Helper: add IDs to sync_meta/newQuestions in bulk. Use this in update scripts. */
export async function addToNewQuestionsIndex(ids) {
  if (!ids || ids.length === 0) return;
  await db.doc('sync_meta/newQuestions').set(
    { ids: FieldValue.arrayUnion(...ids.map(String)), updatedAt: new Date() },
    { merge: true }
  );
}

/** Helper: remove IDs from sync_meta/newQuestions (when student views or admin clears). */
export async function removeFromNewQuestionsIndex(ids) {
  if (!ids || ids.length === 0) return;
  await db.doc('sync_meta/newQuestions').set(
    { ids: FieldValue.arrayRemove(...ids.map(String)), updatedAt: new Date() },
    { merge: true }
  );
}

// ─── One-time migration: build index from existing isNew:true questions ──────
async function migrate() {
  console.log('Scanning for isNew:true questions...');
  const snap = await db.collection('questions').where('isNew', '==', true).get();
  const ids = snap.docs.map(d => d.id);
  console.log(`Found ${ids.length} isNew questions.`);

  if (ids.length === 0) {
    console.log('No isNew questions found. Creating empty sync_meta/newQuestions doc.');
    await db.doc('sync_meta/newQuestions').set({ ids: [], updatedAt: new Date() });
    return;
  }

  // Write to sync_meta/newQuestions (single doc with array of IDs)
  await db.doc('sync_meta/newQuestions').set({ ids, updatedAt: new Date() });
  console.log(`sync_meta/newQuestions populated with ${ids.length} IDs.`);
  console.log('Migration complete. Future reads will be 1 doc instead of', ids.length, 'docs.');
  process.exit(0);
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
