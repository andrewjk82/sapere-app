/**
 * deleteStudentCompletely.js
 *
 * Permanently delete one student: every Firestore document plus their
 * Firebase Auth login. Irreversible — there is no undo and no backup.
 *
 * WHY THIS EXISTS (the in-app delete is not enough):
 * studentService.deleteRegisteredUser() removes only users/{uid}, the
 * leaderboard row and grading_queue items. It does NOT remove
 *   - the users/{uid} SUBcollections (Firestore never cascade-deletes them),
 *   - the student's `sessions` documents,
 *   - the Firebase Auth account — so the student could still sign in, and
 *     signing in would recreate a partial profile.
 * This script closes all three gaps.
 *
 * Usage — dry run first (reads only, writes nothing):
 *   node tools/scripts/deleteStudentCompletely.js someone@example.com
 *
 * Then, to actually delete:
 *   node tools/scripts/deleteStudentCompletely.js someone@example.com --confirm
 *
 * Keep the Firestore data but revoke access only:
 *   node tools/scripts/deleteStudentCompletely.js someone@example.com --confirm --auth-only
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { readFileSync } from 'fs';

const saPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  || '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
initializeApp({ credential: cert(JSON.parse(readFileSync(saPath, 'utf8'))) });
const db = getFirestore();
const auth = getAuth();

const email = (process.argv[2] || '').trim();
const confirm = process.argv.includes('--confirm');
const authOnly = process.argv.includes('--auth-only');

if (!email) {
  console.error('Usage: node tools/scripts/deleteStudentCompletely.js <email> [--confirm] [--auth-only]');
  process.exit(1);
}

/** Top-level collections that reference a student by a uid field. */
const REFERENCING = [
  ['sessions', 'studentId'],
  ['grading_queue', 'userId'],
  ['timestable_sprint_results', 'userId'],
  ['timestable_sprint_attempts', 'userId'],
];

const deleteAll = async (refs) => {
  for (let i = 0; i < refs.length; i += 400) {
    const batch = db.batch();
    refs.slice(i, i + 400).forEach((r) => batch.delete(r));
    await batch.commit();
  }
};

// ── 1. Resolve the account ──────────────────────────────────────────────────
let authUser = null;
try {
  authUser = await auth.getUserByEmail(email);
} catch {
  console.log(`No Firebase Auth account for ${email}.`);
}

const byEmail = await db.collection('users').where('email', '==', email).get();
const uids = [...new Set([
  ...(authUser ? [authUser.uid] : []),
  ...byEmail.docs.map((d) => d.id),
])];

if (uids.length === 0) {
  console.error(`Nothing found for ${email}. Aborting.`);
  process.exit(1);
}
if (uids.length > 1) {
  console.error(`Multiple uids resolved for ${email}: ${uids.join(', ')}`);
  console.error('Refusing to guess — delete them one at a time by uid instead.');
  process.exit(1);
}
const uid = uids[0];

console.log(`\n${confirm ? 'DELETING' : 'DRY RUN — nothing will be written'}`);
console.log(`email : ${email}`);
console.log(`uid   : ${uid}`);
if (authUser) {
  console.log(`auth  : ${authUser.displayName || '(no name)'} · ${authUser.providerData.map((p) => p.providerId).join(', ')}`);
  console.log(`        created ${authUser.metadata.creationTime}, last sign-in ${authUser.metadata.lastSignInTime}`);
}

// ── 2. Enumerate everything ─────────────────────────────────────────────────
const plan = [];        // { label, refs }
let tutorId = null;

if (!authOnly) {
  const userSnap = await db.collection('users').doc(uid).get();
  if (userSnap.exists) {
    tutorId = userSnap.data().tutorId || null;
    plan.push({ label: `users/${uid}`, refs: [userSnap.ref] });
  }

  for (const coll of await db.collection('users').doc(uid).listCollections()) {
    const snap = await coll.get();
    if (snap.size) plan.push({ label: `users/${uid}/${coll.id}`, refs: snap.docs.map((d) => d.ref) });
  }

  const lb = await db.collection('leaderboard').doc(uid).get();
  if (lb.exists) plan.push({ label: `leaderboard/${uid}`, refs: [lb.ref] });

  for (const [coll, field] of REFERENCING) {
    const snap = await db.collection(coll).where(field, '==', uid).get();
    if (snap.size) plan.push({ label: `${coll} (${field})`, refs: snap.docs.map((d) => d.ref) });
  }
}

const totalDocs = plan.reduce((n, p) => n + p.refs.length, 0);
console.log('\nFirestore documents to delete:');
plan.forEach((p) => console.log(`   ${String(p.refs.length).padStart(4)}  ${p.label}`));
if (!plan.length) console.log('   (none)');
console.log(`   ${String(totalDocs).padStart(4)}  TOTAL`);
console.log(`\nFirebase Auth login: ${authUser ? (confirm ? 'will be deleted' : 'would be deleted') : 'nothing to delete'}`);

if (!confirm) {
  console.log('\nDry run only. Re-run with --confirm to perform the deletion.\n');
  process.exit(0);
}

// ── 3. Delete ───────────────────────────────────────────────────────────────
for (const p of plan) {
  await deleteAll(p.refs);
  console.log(`deleted ${p.refs.length} · ${p.label}`);
}

if (authUser) {
  await auth.deleteUser(uid);
  console.log(`deleted Firebase Auth account ${uid}`);
}

// Invalidate the teacher's cached student list (same signal the app's own
// delete path sends) so the roster refreshes instead of showing a ghost row.
if (!authOnly) {
  const metaIds = ['students_admin', `students_${tutorId || 'unknown'}`];
  await Promise.all(metaIds.map((id) => db.collection('sync_meta').doc(id).set(
    { version: Date.now(), updatedAt: new Date() },
    { merge: true },
  )));
  console.log(`stamped ${metaIds.join(', ')} so the student list refreshes`);
}

console.log(`\nDone. ${email} removed (${totalDocs} documents${authUser ? ' + auth account' : ''}).\n`);
process.exit(0);
