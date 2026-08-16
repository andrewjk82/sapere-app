#!/usr/bin/env node
/**
 * D5 (work-backwards) axis validation, per Sapere_Question_DNA_v2.0 §7/§12
 * "Prototype B — apply the framework to a genuinely D5-primary problem."
 * Per the plan's own caution ("D5 may appear as a supporting reasoning
 * pattern, but should not be forced as the primary DNA" for financial
 * math), this does NOT create a new DNA or reclassify FIN-INTEREST-01.
 * Instead it retags the `axis` field on 5 already-verified, already-live
 * reasoning_blueprint steps that are genuinely backward-reasoning in
 * character (present-value "divide instead of multiply" steps, and
 * "solve backward from the terminal condition A_n=0" steps) from
 * axis:'execution'/'strategy_selection' to axis:'backward_reasoning'.
 *
 * No answer/content changes — axis field only. Content-only edit, so
 * touchChapterIndex per chapter, no rebuildQuestionIndexes needed.
 */
import { readFileSync } from 'fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { touchChapterIndex } from './_lib/touchChapterIndex.js';

const keyPath = '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
const app = initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore(app);

// questionId -> step_id to retag
const TARGETS = {
  'asc2020-mc8': 'S3',
  'asc2020-mc8v': 'S3',
  'dane2020-q34b': 'S3',
  'bar2020-q17biib': 'S1',
  'bar2020-q17biibv': 'S1',
};

async function main() {
  const touchedChapters = new Set();
  for (const [id, stepId] of Object.entries(TARGETS)) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.error(`✗ ${id} — not found`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.error(`✗ ${id} — origin:teacher, skipping (never overwrite teacher edits)`); continue; }
    const steps = data.reasoning_blueprint;
    if (!steps?.length) { console.error(`✗ ${id} — no reasoning_blueprint`); continue; }
    const idx = steps.findIndex((s) => s.step_id === stepId);
    if (idx === -1) { console.error(`✗ ${id} — step ${stepId} not found`); continue; }
    if (steps[idx].axis === 'backward_reasoning') { console.log(`= ${id} ${stepId} — already backward_reasoning, skipping`); continue; }
    const before = steps[idx].axis;
    const newSteps = steps.map((s, i) => (i === idx ? { ...s, axis: 'backward_reasoning' } : s));
    await ref.update({ reasoning_blueprint: newSteps });
    console.log(`✓ ${id} ${stepId} — axis ${before} -> backward_reasoning`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    await touchChapterIndex(db, chapterId);
    console.log(`✓ touched chapter index: ${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
