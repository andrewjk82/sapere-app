#!/usr/bin/env node
/**
 * Fix "generic-template filler" broken distractors (Pattern B, same sweep
 * as fixGenericFillerDistractors.js) on 5 questions in
 * seedAscham2020Questions.js that were missed from the initial file list
 * (this file uses unquoted object keys, e.g. `id: "..."` instead of
 * `"id": "..."`, which is why the original grep-based file list still
 * caught it but the id-block parser in the main script assumed quoted keys).
 *
 * Every marked-correct answer was independently re-derived by hand:
 *  - asc2020-q30-c: T_5 = 2000 - 1000(1.05)^5 = 2000 - 1276.3 = 723.7 ~ 724. Correct.
 *  - asc2020-q30-d: 1.05^n = 2 => n = ln2/ln1.05 = 14.21; base year 2003,
 *    so extinction falls 0.21 of the way through the year starting at
 *    n=14 (2017) -- "During 2017" is correct.
 *  - asc2020-q33v: z with P(Z<z)=0.95 is z~1.645; height = 165 + 1.645*8
 *    = 165 + 13.16 = 178.16 ~ 178.2 cm. Correct.
 *  - asc2020-q16-a, asc2020-q28-c: word-problem answers trusted as given
 *    (their numeric inputs are in an earlier part of the multi-part
 *    question not visible in this option block); distractors below are
 *    swapped/mixed-up variants of the same given numbers, not fresh
 *    independent derivations.
 *
 * Usage:
 *   node tools/scripts/fixAscham2020BrokenOptions.js          # dry run
 *   node tools/scripts/fixAscham2020BrokenOptions.js --write  # write seed file
 *   node tools/scripts/fixAscham2020BrokenOptions.js --sync   # also push to Firestore
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WRITE = process.argv.includes('--write');
const SYNC = process.argv.includes('--sync');
const SEED_PATH = join(__dirname, '../../src/constants/seedAscham2020Questions.js');

const OLD = {
  opp: 'The opposite of this statement is true.',
  lin: 'This is true only when the function is linear.',
  pos: 'This only holds for positive values of x.',
};

const FIXES = [
  { id: 'asc2020-q16-a', expectAnswer: '0', replacements: {
    [OLD.opp]: 'C = 60 + 20x\\) and \\(I = 16x',
    [OLD.lin]: 'C = 16 + 60x\\) and \\(I = 20x',
    [OLD.pos]: 'C = 60 + 16x\\) and \\(I = 16x',
  }},
  { id: 'asc2020-q28-c', expectAnswer: '0', replacements: {
    [OLD.opp]: 'Kelly should take Shop \\(Y\\). Expected pay: Shop \\(X\\) = \\(650, Shop \\)Y\\( = \\)700.',
    [OLD.lin]: 'Kelly should take Shop \\(X\\). Expected pay: Shop \\(X\\) = \\(650, Shop \\)Y\\( = \\)700.',
    [OLD.pos]: "Both shops offer the same expected pay, so it doesn't matter which Kelly takes.",
  }},
  { id: 'asc2020-q30-c', expectAnswer: '0', replacements: {
    [OLD.opp]: 'Approximately \\(785\\) drop-bears',
    [OLD.lin]: 'Approximately \\(660\\) drop-bears',
    [OLD.pos]: 'Approximately \\(1276\\) drop-bears',
  }},
  { id: 'asc2020-q30-d', expectAnswer: '0', replacements: {
    [OLD.opp]: 'During \\(2018\\)',
    [OLD.lin]: 'During \\(2016\\)',
    [OLD.pos]: 'The drop-bears never become extinct, since the population approaches a stable equilibrium.',
  }},
  { id: 'asc2020-q33v', expectAnswer: '0', replacements: {
    [OLD.opp]: 'Approximately \\(151.8\\) cm',
    [OLD.lin]: 'Approximately \\(173.2\\) cm',
    [OLD.pos]: 'Approximately \\(181.6\\) cm',
  }},
];

function toRawSource(str) {
  return str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n');
}

function fixSeedFile() {
  let content = readFileSync(SEED_PATH, 'utf8');
  // This file uses unquoted keys: `id: "..."` not `"id": "..."`.
  const idRe = /id:\s*"([^"]+)"/g;
  const idPositions = [...content.matchAll(idRe)].map((m) => ({ id: m[1], index: m.index }));

  for (const fix of FIXES) {
    const rec = idPositions.find((r) => r.id === fix.id);
    if (!rec) { console.warn(`SKIP ${fix.id} (seed) — id not found`); continue; }
    const idx = idPositions.indexOf(rec);
    const start = rec.index;
    const end = idx + 1 < idPositions.length ? idPositions[idx + 1].index : content.length;
    let block = content.slice(start, end);
    let changed = 0;
    for (const [oldVal, newVal] of Object.entries(fix.replacements)) {
      const oldRaw = toRawSource(oldVal);
      const newRaw = toRawSource(newVal);
      if (block.includes(oldRaw)) {
        block = block.replace(oldRaw, newRaw);
        changed++;
      }
    }
    if (changed !== Object.keys(fix.replacements).length) {
      console.warn(`SKIP ${fix.id} (seed) — expected ${Object.keys(fix.replacements).length}, matched ${changed}. Not touching.`);
      continue;
    }
    content = content.slice(0, start) + block + content.slice(end);
    console.log(`✓ ${fix.id} (seed) — ${changed} replacement(s) applied`);
  }
  return content;
}

async function main() {
  const newContent = fixSeedFile();
  if (WRITE) {
    writeFileSync(SEED_PATH, newContent, 'utf8');
    console.log(`Wrote ${SEED_PATH}`);
  }
  if (!SYNC) {
    console.log('\n(dry run / seed-only — pass --sync to also push to Firestore)');
    return;
  }

  const { initializeApp, cert } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  const { touchChapterIndex } = await import('./_lib/touchChapterIndex.js');

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
  if (!app) { console.error('No service account key found'); process.exit(1); }
  const db = getFirestore(app);

  const touchedChapters = new Set();
  for (const fix of FIXES) {
    const ref = db.collection('questions').doc(fix.id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${fix.id} (firestore) — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${fix.id} (firestore) — origin:'teacher'.`); continue; }
    if (data.answer !== fix.expectAnswer) {
      console.warn(`SKIP ${fix.id} (firestore) — answer is '${data.answer}', expected '${fix.expectAnswer}'. Not touching.`);
      continue;
    }
    let changed = 0;
    const newOptions = (data.options || []).map((o) => {
      if (fix.replacements[o.text]) {
        changed += 1;
        return { text: fix.replacements[o.text], imageUrl: o.imageUrl || '' };
      }
      return o;
    });
    if (changed !== Object.keys(fix.replacements).length) {
      console.warn(`SKIP ${fix.id} (firestore) — expected ${Object.keys(fix.replacements).length}, matched ${changed}. Not touching.`);
      continue;
    }
    await ref.set({ options: newOptions }, { merge: true });
    console.log(`✓ ${fix.id} (firestore) — ${changed} option(s) replaced`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
