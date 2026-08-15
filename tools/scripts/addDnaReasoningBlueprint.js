#!/usr/bin/env node
/**
 * Push `reasoningBlueprint` (and bump `taxonomyVersion`) onto question_dna
 * docs from tools/dna/dnaTaxonomy.js that define one. Additive merge only —
 * does not touch any other field on the doc, and does not touch `questions`
 * at all (see importQuestionDna.js for the full corpus import/backfill).
 *
 * Usage:
 *   node tools/scripts/addDnaReasoningBlueprint.js
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { QUESTION_DNA, DNA_TAXONOMY_VERSION } from '../dna/dnaTaxonomy.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

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
    console.log(`Using service account: ${keyPath}`);
    break;
  } catch { /* try next */ }
}
if (!app) {
  console.error('ERROR: No Firebase service account key found.');
  process.exit(1);
}
const db = getFirestore(app);

async function main() {
  const withBlueprint = QUESTION_DNA.filter((d) => d.reasoningBlueprint?.length);
  if (withBlueprint.length === 0) {
    console.log('No DNA entries with a reasoningBlueprint — nothing to do.');
    return;
  }
  for (const d of withBlueprint) {
    await db.collection('question_dna').doc(d.dna_id).set(
      { reasoningBlueprint: d.reasoningBlueprint, taxonomyVersion: DNA_TAXONOMY_VERSION },
      { merge: true }
    );
    console.log(`✓ ${d.dna_id} — ${d.reasoningBlueprint.length} warmup steps`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
