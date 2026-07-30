#!/usr/bin/env node
/**
 * Deploy approved, generated, validation-passed corpus questions to
 * Firestore. This is the ONLY script in the corpus pipeline that ever
 * touches Firestore — ingest.js, the viewer, and the approve/unapprove
 * buttons are all local-DB-only.
 *
 * SAFETY: defaults to a dry run (prints exactly what would be written, never
 * calls Firestore). Nothing is written until you pass --live.
 *
 * Usage:
 *   node tools/corpus/deploy.js                # dry run (default, safe)
 *   node tools/corpus/deploy.js --live          # actually writes to Firestore
 *
 * Only rows where source='generated' AND validation_status='passed' AND
 * deploy_status='approved' are eligible — approve them first in the viewer
 * (npm run corpus:viewer). Never deploys source='original' rows (those exist
 * for style/difficulty reference only — see tools/corpus/README.md).
 *
 * On a successful --live run: writes with merge:true, skips (and reports)
 * any id that collides with an existing origin:'teacher' doc rather than
 * overwriting it (CLAUDE.md contract), then shells out to
 * tools/scripts/rebuildQuestionIndexes.js for every chapterId touched, then
 * marks those rows deploy_status='deployed' in the LOCAL corpus DB only.
 */
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { openDb } from './lib/db.js';
import { mapToFirestoreDoc } from './lib/mapToFirestoreDoc.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..', '..');
const LIVE = process.argv.includes('--live');
const SERVICE_ACCOUNT_PATH = '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';

function getApprovedRows() {
  const db = openDb();
  return db.prepare(`
    SELECT id, chapter_id AS chapterId, raw_json AS rawJson
    FROM questions
    WHERE source = 'generated' AND validation_status = 'passed' AND deploy_status = 'approved'
    ORDER BY chapter_id, id
  `).all();
}

function markDeployed(ids) {
  if (!ids.length) return;
  const db = openDb();
  const stmt = db.prepare("UPDATE questions SET deploy_status = 'deployed', deployed_at = datetime('now') WHERE id = ?");
  db.exec('BEGIN');
  ids.forEach((id) => stmt.run(id));
  db.exec('COMMIT');
}

async function main() {
  const rows = getApprovedRows();
  if (rows.length === 0) {
    console.log("No approved questions to deploy (source='generated', validation_status='passed', deploy_status='approved').");
    console.log('Approve questions in the viewer first: npm run corpus:viewer');
    return;
  }

  const planned = [];
  const mapErrors = [];
  for (const row of rows) {
    let raw;
    try { raw = JSON.parse(row.rawJson); } catch (e) { mapErrors.push({ id: row.id, error: `bad raw_json: ${e.message}` }); continue; }
    try {
      const doc = mapToFirestoreDoc(raw);
      planned.push({ id: row.id, chapterId: row.chapterId, doc });
    } catch (e) {
      mapErrors.push({ id: row.id, error: e.message });
    }
  }

  console.log(`\n${LIVE ? 'LIVE DEPLOY' : 'DRY RUN (pass --live to actually write)'}`);
  console.log(`Approved: ${rows.length} | Mappable: ${planned.length} | Errors: ${mapErrors.length}\n`);

  if (mapErrors.length) {
    console.log('Cannot deploy (fix in the source seed file, re-ingest, re-approve):');
    mapErrors.forEach((e) => console.log(`  - ${e.id}: ${e.error}`));
    console.log('');
  }

  planned.forEach((p) => {
    console.log(`  ${p.id}  [${p.chapterId}/${p.doc.topicId}]  "${p.doc.question.slice(0, 60)}${p.doc.question.length > 60 ? '…' : ''}"`);
  });

  if (!LIVE) {
    console.log(`\n${planned.length} question(s) would be written to Firestore 'questions' collection. Nothing was written.`);
    return;
  }

  if (planned.length === 0) {
    console.log('\nNothing mappable to deploy.');
    return;
  }

  const { initializeApp, cert } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  const serviceAccount = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const fsDb = getFirestore();

  const written = [];
  const skippedTeacher = [];
  for (const p of planned) {
    const existing = await fsDb.collection('questions').doc(p.id).get();
    if (existing.exists && existing.data()?.origin === 'teacher') {
      skippedTeacher.push(p.id);
      continue;
    }
    await fsDb.collection('questions').doc(p.id).set(p.doc, { merge: true });
    written.push(p);
  }

  console.log(`\nWrote ${written.length} question(s) to Firestore.`);
  if (skippedTeacher.length) {
    console.log(`Skipped ${skippedTeacher.length} id(s) that collide with an existing origin:'teacher' doc (never overwritten):`);
    skippedTeacher.forEach((id) => console.log(`  - ${id}`));
  }

  const chapterIds = [...new Set(written.map((p) => p.chapterId).filter(Boolean))];
  if (chapterIds.length) {
    console.log(`\nRebuilding question_index for: ${chapterIds.join(', ')}`);
    const result = spawnSync('node', [join(PROJECT_ROOT, 'tools/scripts/rebuildQuestionIndexes.js'), ...chapterIds], {
      stdio: 'inherit',
      cwd: PROJECT_ROOT,
    });
    if (result.status !== 0) {
      console.error('\nrebuildQuestionIndexes.js failed — the questions were written but the index is now STALE. Run it manually before students rely on these chapters.');
      process.exit(1);
    }
  }

  markDeployed(written.map((p) => p.id));
  console.log(`\nMarked ${written.length} question(s) as deployed in the local corpus DB.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
