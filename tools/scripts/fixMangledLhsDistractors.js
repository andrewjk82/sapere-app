#!/usr/bin/env node
/**
 * Fix "mangled LHS notation" broken distractors (2026-08-15 corpus audit,
 * Pattern A) across 16 differentiation multiple_choice questions in the
 * school-exam seed packs (Abbotsleigh Ext1, Blacktown Boys, Caringbah,
 * Cranbrook, Danebank — "Questions" + "Similar" files).
 *
 * Every affected question had two distractor slots that were meaningless
 * LHS notation instead of a real wrong derivative:
 *   - "\frac{1}{dx} = ..."   -- "1/dx" is not a thing
 *   - "\frac{dx}{dy} = ..."  -- reciprocal-derivative notation, wrong here
 *   - (2 "show that" questions instead had "\frac{dx}{d}(...)")
 * The RHS of each was just the correct-answer expression copy-pasted, so
 * these slots were not just badly notated -- they carried no wrong content
 * at all. Replaced with real plausible-mistake expressions (forgot a
 * chain-rule factor, product/quotient-rule sign error, forgot to square
 * the denominator, etc.), grounded in that question's own derivative.
 * The existing sign-flipped "-dy/dx = ..." option (index 0) is left
 * untouched per instructions -- it's a legitimate "forgot a sign" distractor.
 *
 * Every marked-correct answer was independently re-derived by hand before
 * this script was written; none needed changing.
 *
 * Usage:
 *   node tools/scripts/fixMangledLhsDistractors.js          # dry run
 *   node tools/scripts/fixMangledLhsDistractors.js --write  # write seed files
 *   node tools/scripts/fixMangledLhsDistractors.js --sync   # also push to Firestore
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WRITE = process.argv.includes('--write');
const SYNC = process.argv.includes('--sync');

const FILES = {
  abb: join(__dirname, '../../src/constants/seedAbbotsleigh2020Ext1Questions.js'),
  abbs: join(__dirname, '../../src/constants/seedAbbotsleigh2020Ext1SimilarQuestions.js'),
  bbhs: join(__dirname, '../../src/constants/seedBlacktownBoys2020Questions.js'),
  bbhss: join(__dirname, '../../src/constants/seedBlacktownBoys2020SimilarQuestions.js'),
  car: join(__dirname, '../../src/constants/seedCaringbah2020Questions.js'),
  cars: join(__dirname, '../../src/constants/seedCaringbah2020SimilarQuestions.js'),
  cra: join(__dirname, '../../src/constants/seedCranbrook2023Questions.js'),
  cras: join(__dirname, '../../src/constants/seedCranbrook2023SimilarQuestions.js'),
  dane: join(__dirname, '../../src/constants/seedDanebank2020Questions.js'),
  danes: join(__dirname, '../../src/constants/seedDanebank2020SimilarQuestions.js'),
};

// Each fix: { id, file, expectAnswer, replacements: { oldSubstring: newSubstring } }
const FIXES = [
  {
    id: 'abb2020e1-q11c', file: FILES.abb, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1 - 16x^2}}\\)':
        '\\(\\dfrac{dy}{dx} = \\cos^{-1}(4x) - \\dfrac{x}{\\sqrt{1 - 16x^2}}\\)',
      '\\(\\frac{dx}{dy} = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1 - 16x^2}}\\)':
        '\\(\\dfrac{dy}{dx} = \\cos^{-1}(4x) + \\dfrac{4x}{\\sqrt{1 - 16x^2}}\\)',
    },
  },
  {
    id: 'abb2020e1s-q11c', file: FILES.abbs, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\sin^{-1}(3x) + \\dfrac{3x}{\\sqrt{1 - 9x^2}}\\)':
        '\\(\\dfrac{dy}{dx} = \\sin^{-1}(3x) + \\dfrac{x}{\\sqrt{1 - 9x^2}}\\)',
      '\\(\\frac{dx}{dy} = \\sin^{-1}(3x) + \\dfrac{3x}{\\sqrt{1 - 9x^2}}\\)':
        '\\(\\dfrac{dy}{dx} = \\sin^{-1}(3x) - \\dfrac{3x}{\\sqrt{1 - 9x^2}}\\)',
    },
  },
  {
    id: 'dane2020-q23', file: FILES.dane, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = 2x\\cos 2x + \\sin 2x\\)':
        '\\(\\dfrac{dy}{dx} = x\\cos 2x + \\sin 2x\\)',
      '\\(\\frac{dx}{dy} = 2x\\cos 2x + \\sin 2x\\)':
        '\\(\\dfrac{dy}{dx} = 2x\\cos 2x - \\sin 2x\\)',
    },
  },
  {
    id: 'dane2020s-q23', file: FILES.danes, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\cos 3x - 3x\\sin 3x\\)':
        '\\(\\dfrac{dy}{dx} = \\cos 3x - x\\sin 3x\\)',
      '\\(\\frac{dx}{dy} = \\cos 3x - 3x\\sin 3x\\)':
        '\\(\\dfrac{dy}{dx} = \\cos 3x + 3x\\sin 3x\\)',
    },
  },
  {
    id: 'car2020s-q25', file: FILES.cars, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = 2x\\cos 3x - 3x^2\\sin 3x\\)':
        '\\(\\dfrac{dy}{dx} = 2x\\cos 3x - x^2\\sin 3x\\)',
      '\\(\\frac{dx}{dy} = 2x\\cos 3x - 3x^2\\sin 3x\\)':
        '\\(\\dfrac{dy}{dx} = 2x\\cos 3x + 3x^2\\sin 3x\\)',
    },
  },
  {
    id: 'car2020s-q27', file: FILES.cars, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\dfrac{(x+2)e^x}{(x+3)^2}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{(x+2)e^x}{x+3}\\)',
      '\\(\\frac{dx}{dy} = \\dfrac{(x+2)e^x}{(x+3)^2}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{(x+4)e^x}{(x+3)^2}\\)',
    },
  },
  {
    id: 'car2020-q25', file: FILES.car, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = 2x\\cos 2x + \\sin 2x\\)':
        '\\(\\dfrac{dy}{dx} = x\\cos 2x + \\sin 2x\\)',
      '\\(\\frac{dx}{dy} = 2x\\cos 2x + \\sin 2x\\)':
        '\\(\\dfrac{dy}{dx} = 2x\\cos 2x - \\sin 2x\\)',
    },
  },
  {
    id: 'car2020-q27', file: FILES.car, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\dfrac{xe^x}{(x+1)^2}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{xe^x}{x+1}\\)',
      '\\(\\frac{dx}{dy} = \\dfrac{xe^x}{(x+1)^2}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{(x+2)e^x}{(x+1)^2}\\)',
    },
  },
  {
    id: 'cra2023-q14a', file: FILES.cra, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\dfrac{2\\ln x}{x}\\)':
        '\\(\\dfrac{dy}{dx} = 2\\ln x\\)',
      '\\(\\frac{dx}{dy} = \\dfrac{2\\ln x}{x}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{2}{x}\\)',
    },
  },
  {
    id: 'cra2023s-q14a', file: FILES.cras, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\dfrac{3(\\ln x)^2}{x}\\)':
        '\\(\\dfrac{dy}{dx} = 3(\\ln x)^2\\)',
      '\\(\\frac{dx}{dy} = \\dfrac{3(\\ln x)^2}{x}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{3\\ln x}{x}\\)',
    },
  },
  {
    id: 'bbhs2020s-14a', file: FILES.bbhss, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\sin^2\\!\\left(\\dfrac{x}{3}\\right)\\cos\\!\\left(\\dfrac{x}{3}\\right)\\)':
        '\\(\\dfrac{dy}{dx} = 3\\sin^2\\!\\left(\\dfrac{x}{3}\\right)\\cos\\!\\left(\\dfrac{x}{3}\\right)\\)',
      '\\(\\frac{dx}{dy} = \\sin^2\\!\\left(\\dfrac{x}{3}\\right)\\cos\\!\\left(\\dfrac{x}{3}\\right)\\)':
        '\\(\\dfrac{dy}{dx} = \\cos^2\\!\\left(\\dfrac{x}{3}\\right)\\sin\\!\\left(\\dfrac{x}{3}\\right)\\)',
    },
  },
  {
    id: 'bbhs2020s-14b', file: FILES.bbhss, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\dfrac{2xe^{2x} - 3e^{2x} - 3}{(x-1)^2}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{2xe^{2x} - 3e^{2x} - 3}{x-1}\\)',
      '\\(\\frac{dx}{dy} = \\dfrac{2xe^{2x} - 3e^{2x} - 3}{(x-1)^2}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{2xe^{2x} - 3e^{2x} + 3}{(x-1)^2}\\)',
    },
  },
  {
    id: 'bbhs2020s-18a', file: FILES.bbhss, expectAnswer: '3',
    replacements: {
      'By the product rule: \\(\\frac{1}{dx}(e^{3x}\\sin x) = 3e^{3x}\\sin x + e^{3x}\\cos x = e^{3x}(3\\sin x + \\cos x)\\).':
        'By the product rule: \\(\\dfrac{d}{dx}(e^{3x}\\sin x) = e^{3x}\\sin x + e^{3x}\\cos x = e^{3x}(\\sin x + \\cos x)\\).',
      'By the product rule: \\(\\frac{dx}{d}(e^{3x}\\sin x) = 3e^{3x}\\sin x + e^{3x}\\cos x = e^{3x}(3\\sin x + \\cos x)\\).':
        'By the product rule: \\(\\dfrac{d}{dx}(e^{3x}\\sin x) = 3e^{3x}\\sin x - e^{3x}\\cos x = e^{3x}(3\\sin x - \\cos x)\\).',
    },
  },
  {
    id: 'bbhs2020-14a', file: FILES.bbhs, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\)':
        '\\(\\dfrac{dy}{dx} = 3\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\)',
      '\\(\\frac{dx}{dy} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{3}{4}\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\)',
    },
  },
  {
    id: 'bbhs2020-14b', file: FILES.bbhs, expectAnswer: '1',
    replacements: {
      '\\(\\frac{1}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{x+1}\\)',
      '\\(\\frac{dx}{dy} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}\\)':
        '\\(\\dfrac{dy}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} - 5}{(x+1)^2}\\)',
    },
  },
  {
    id: 'bbhs2020-18a', file: FILES.bbhs, expectAnswer: '3',
    replacements: {
      'By the product rule: \\(\\frac{1}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)\\).':
        'By the product rule: \\(\\dfrac{d}{dx}(e^{2x}\\cos x) = e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(\\cos x - \\sin x)\\).',
      'By the product rule: \\(\\frac{dx}{d}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)\\).':
        'By the product rule: \\(\\dfrac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x + e^{2x}\\sin x = e^{2x}(2\\cos x + \\sin x)\\).',
    },
  },
];

// `fix.replacements` keys/values are in "decoded value" form (single
// backslash, matching what a JSON.parse'd Firestore doc would contain).
// The seed .js FILE'S RAW TEXT is itself a JS string literal, so on disk
// each backslash is escaped again (double backslash). Convert before
// searching/replacing against the raw file text.
function toRawSource(str) {
  return str.replace(/\\/g, '\\\\');
}

function fixSeedFile(filePath, fixesForFile) {
  let content = readFileSync(filePath, 'utf8');
  for (const fix of fixesForFile) {
    // Locate the block for this id to scope replacements safely.
    const idMarker = `"id": "${fix.id}"`;
    const idIdx = content.indexOf(idMarker);
    if (idIdx === -1) {
      console.warn(`SKIP ${fix.id} (seed) — id not found in ${filePath}`);
      continue;
    }
    // Block ends at the next "id": occurrence or end of file.
    const nextIdx = content.indexOf('"id":', idIdx + idMarker.length);
    const blockEnd = nextIdx === -1 ? content.length : nextIdx;
    let block = content.slice(idIdx, blockEnd);
    let changed = 0;
    for (const [oldStrVal, newStrVal] of Object.entries(fix.replacements)) {
      const oldStr = toRawSource(oldStrVal);
      const newStr = toRawSource(newStrVal);
      if (block.includes(oldStr)) {
        block = block.replace(oldStr, newStr);
        changed++;
      }
    }
    if (changed !== Object.keys(fix.replacements).length) {
      console.warn(`SKIP ${fix.id} (seed) — expected ${Object.keys(fix.replacements).length} replacement(s), matched ${changed}. Not touching.`);
      continue;
    }
    content = content.slice(0, idIdx) + block + content.slice(blockEnd);
    console.log(`✓ ${fix.id} (seed) — ${changed} distractor(s) replaced`);
  }
  return content;
}

async function main() {
  const byFile = new Map();
  for (const fix of FIXES) {
    if (!byFile.has(fix.file)) byFile.set(fix.file, []);
    byFile.get(fix.file).push(fix);
  }

  for (const [filePath, fixesForFile] of byFile) {
    const newContent = fixSeedFile(filePath, fixesForFile);
    if (WRITE) {
      writeFileSync(filePath, newContent, 'utf8');
      console.log(`Wrote ${filePath}`);
    }
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
  if (!app) {
    console.error('ERROR: No Firebase service account key found.');
    process.exit(1);
  }
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
      console.warn(`SKIP ${fix.id} (firestore) — expected to replace ${Object.keys(fix.replacements).length} option(s), matched ${changed}. Content may already differ — not touching.`);
      continue;
    }
    await ref.set({ options: newOptions }, { merge: true });
    console.log(`✓ ${fix.id} (firestore) — ${changed} distractor(s) replaced`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
