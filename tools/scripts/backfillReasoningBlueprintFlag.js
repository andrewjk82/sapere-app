#!/usr/bin/env node
/**
 * Backfill a queryable `hasReasoningBlueprint: true` flag onto every
 * questions/{id} doc that actually has a non-empty `reasoning_blueprint`
 * array — so the new teacher-facing "Question Pre-Steps Review" page can
 * run `where('hasReasoningBlueprint', '==', true)` (a normal indexed
 * equality query, auto-indexed by Firestore) instead of scanning the
 * whole `questions` collection, which project convention forbids (see
 * memory: "stat 컬렉션 스캔 금지" / tools/scripts/CLAUDE.md).
 *
 * The candidate ID list below was compiled by grepping every
 * add*ReasoningBlueprint*.js script written this session (2026-08-15/16)
 * for their `id: '...'` entries — not a live Firestore scan. Each
 * candidate is checked individually (a bounded `doc().get()`, not a
 * collection scan) before the flag is set, since some were reclassified
 * to a different DNA or had their write skipped by a guard mismatch
 * along the way and may not actually carry reasoning_blueprint today.
 *
 * IMPORTANT for future scripts: any NEW add*ReasoningBlueprint*.js
 * script must also set `hasReasoningBlueprint: true` alongside
 * `reasoning_blueprint` on every successful write, or this index will
 * silently go stale. Consider updating this backfill's CANDIDATE_IDS list
 * and re-running it after any future batch instead, if that's simpler.
 *
 * Usage:
 *   node tools/scripts/backfillReasoningBlueprintFlag.js
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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

const CANDIDATE_IDS = readFileSync(join(__dirname, '_reasoningBlueprintCandidateIds.txt'), 'utf8')
  .split('\n')
  .map((s) => s.trim())
  .filter(Boolean);

async function main() {
  let flagged = 0;
  let skippedNoDoc = 0;
  let skippedNoBlueprint = 0;
  let alreadyFlagged = 0;

  for (const id of CANDIDATE_IDS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { skippedNoDoc++; console.warn(`SKIP ${id} — doc not found.`); continue; }
    const data = doc.data();
    if (!data.reasoning_blueprint?.length) { skippedNoBlueprint++; console.warn(`SKIP ${id} — no reasoning_blueprint present (reclassified or write skipped?).`); continue; }
    if (data.hasReasoningBlueprint === true) { alreadyFlagged++; continue; }
    await ref.set({ hasReasoningBlueprint: true }, { merge: true });
    flagged++;
  }

  console.log(`\n✓ ${flagged} newly flagged, ${alreadyFlagged} already flagged, ${skippedNoBlueprint} skipped (no blueprint), ${skippedNoDoc} skipped (not found)`);
  console.log(`Total candidates checked: ${CANDIDATE_IDS.length}`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
