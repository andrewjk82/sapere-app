#!/usr/bin/env node
/**
 * One-off reconciliation (2026-08-15): 19 questions in the Pattern-B
 * generic-filler sweep turned out to already have been fixed live in
 * Firestore by an earlier process (dated 2026-07-18 .. 2026-08-12), with
 * legitimate real distractors -- but the seed files were never synced back
 * and still had the old "opposite of this statement is true" garbage.
 * fixGenericFillerDistractors.js correctly detected the Firestore content
 * no longer matched the expected garbage and skipped those writes rather
 * than clobbering already-good live data. This script pulls Firestore's
 * current (good) options/answer for exactly those 19 ids and overwrites
 * the seed files' "opts"/"a"/"answer" to match, so seed and Firestore
 * agree again. Read-only against Firestore; writes only the seed files.
 *
 * Usage:
 *   node tools/scripts/reconcileSeedFromFirestore.js          # dry run
 *   node tools/scripts/reconcileSeedFromFirestore.js --write  # write seed files
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WRITE = process.argv.includes('--write');
const C = (name) => join(__dirname, `../../src/constants/${name}`);

const IDS_TO_FILE = {
  'dane2020s-q22b': C('seedDanebank2020SimilarQuestions.js'),
  'fortst2020-q18a': C('seedFortSt2020Questions.js'),
  'fortst2020s-q18a': C('seedFortSt2020SimilarQuestions.js'),
  'fortst2020-q18c': C('seedFortSt2020Questions.js'),
  'fortst2020s-q18c': C('seedFortSt2020SimilarQuestions.js'),
  'y11a-6e-q4aii': C('seedYear11Ch6EQuestions.js'),
  'y11a-6e-q4bi': C('seedYear11Ch6EQuestions.js'),
  'y11a-6e-q4bii': C('seedYear11Ch6EQuestions.js'),
  'y11a-6e-q6d': C('seedYear11Ch6EQuestions.js'),
  'y11a-6e-q6f': C('seedYear11Ch6EQuestions.js'),
  'y11a-6e-q8a': C('seedYear11Ch6EQuestions.js'),
  'y11a-6e-q8c': C('seedYear11Ch6EQuestions.js'),
  'y11a-6e-q12-sin': C('seedYear11Ch6EQuestions.js'),
  'y11a-6e-q12-sec': C('seedYear11Ch6EQuestions.js'),
  'y11a-6d-q3b': C('seedYear11Ch6DQuestions.js'),
  'y11a-6d-q3d': C('seedYear11Ch6DQuestions.js'),
  'y11a-6d-q3h': C('seedYear11Ch6DQuestions.js'),
  'y11a-6d-q3j': C('seedYear11Ch6DQuestions.js'),
  'y11a-6d-q3l': C('seedYear11Ch6DQuestions.js'),
};

function toRawSource(str) {
  return str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n');
}

async function main() {
  const POSSIBLE_KEY_PATHS = [
    join(__dirname, '../../serviceAccountKey.json'),
    join(__dirname, '../../firebase-service-account.json'),
    process.env.GOOGLE_APPLICATION_CREDENTIALS,
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
  ].filter(Boolean);
  let app;
  for (const keyPath of POSSIBLE_KEY_PATHS) {
    try {
      if (!existsSync(keyPath)) continue;
      const serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
      app = initializeApp({ credential: cert(serviceAccount) });
      break;
    } catch { /* try next */ }
  }
  if (!app) { console.error('No service account key found'); process.exit(1); }
  const db = getFirestore(app);

  const byFile = new Map();
  for (const [id, file] of Object.entries(IDS_TO_FILE)) {
    const doc = await db.collection('questions').doc(id).get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not in Firestore`); continue; }
    const data = doc.data();
    if (!byFile.has(file)) byFile.set(file, []);
    byFile.get(file).push({ id, options: data.options, answer: data.answer });
  }

  for (const [filePath, fixes] of byFile) {
    let content = readFileSync(filePath, 'utf8');
    for (const fix of fixes) {
      const idMarker = `"id": "${fix.id}"`;
      const idIdx = content.indexOf(idMarker);
      if (idIdx === -1) { console.warn(`SKIP ${fix.id} (seed) — id not found`); continue; }
      const nextIdx = content.indexOf('"id":', idIdx + idMarker.length);
      const blockEnd = nextIdx === -1 ? content.length : nextIdx;
      let block = content.slice(idIdx, blockEnd);

      const optsMatch = block.match(/"opts":\s*\[[\s\S]*?\](?=,\n\s*"a")/);
      if (!optsMatch) { console.warn(`SKIP ${fix.id} — opts array pattern not found`); continue; }
      const newOptsArray = `"opts": [\n      ${fix.options.map((o) => `"${toRawSource(o.text)}"`).join(',\n      ')}\n    ]`;
      block = block.slice(0, optsMatch.index) + newOptsArray + block.slice(optsMatch.index + optsMatch[0].length);

      block = block.replace(/"a":\s*\d+/, `"a": ${fix.answer}`);
      block = block.replace(/"answer":\s*"[^"]*"/, `"answer": "${fix.answer}"`);

      content = content.slice(0, idIdx) + block + content.slice(blockEnd);
      console.log(`✓ ${fix.id} (seed) — reconciled to Firestore's live options/answer`);
    }
    if (WRITE) {
      writeFileSync(filePath, content, 'utf8');
      console.log(`Wrote ${filePath}`);
    }
  }
  if (!WRITE) console.log('\n(dry run — pass --write to apply)');
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
