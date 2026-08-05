/**
 * auditQuestionIdTwins.js
 * ─────────────────────────────────────────────────────────────────────────
 * DRY RUN ONLY — reads the `questions` collection and reports candidate
 * "twin" documents whose id is identical once hyphens/spaces/case are
 * stripped (e.g. "asc2020-q17-a" vs "asc2020-q17a"). It does NOT delete or
 * modify anything.
 *
 * Why exact normalized-match grouping (not fuzzy): exam ids legitimately use
 * letter/roman-numeral suffixes for distinct sub-parts (abb2020-q11a,
 * -q11bi, -q11bii, -q11eiv, ...). Grouping only exact-after-strip matches
 * catches true separator-only twins without merging real sub-parts.
 *
 * Every candidate group is additionally flagged:
 *   - teacherOrigin: true if ANY member has origin: 'teacher' → do not touch,
 *     per project rule (origin:'teacher' docs must never be overwritten).
 *   - sameContent: whether the `question` text (whitespace/case-normalized)
 *     matches across all members — a real duplicate should say yes; "no"
 *     means the id collision may be coincidental and needs a human look.
 *
 * Usage:
 *   node tools/scripts/auditQuestionIdTwins.js
 *   node tools/scripts/auditQuestionIdTwins.js --chapter=y11a-1
 *
 * Output: prints a summary + writes a full JSON report to
 *   tools/scripts/reports/questionIdTwins-<timestamp>.json
 * Nothing in Firestore is written. After reviewing the report, any actual
 * delete/merge must be done in a SEPARATE script, must skip origin:'teacher'
 * docs, and must be followed by rebuildQuestionIndexes.js.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const chapterFilterArg = process.argv.find(a => a.startsWith('--chapter='));
const chapterFilter = chapterFilterArg ? chapterFilterArg.split('=')[1] : null;

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

function normalizeId(id) {
  return id.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function normalizeText(t) {
  return (t || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

async function run() {
  console.log('Reading questions collection' + (chapterFilter ? ` (chapter=${chapterFilter})` : ' (all chapters)') + '...');

  let query = db.collection('questions').select('chapterId', 'topicId', 'origin', 'question', 'title', 'createdAt');
  if (chapterFilter) query = query.where('chapterId', '==', chapterFilter);

  const snap = await query.get();
  console.log(`Read ${snap.size} docs.`);

  const groups = new Map();
  snap.forEach(doc => {
    const key = normalizeId(doc.id);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({
      id: doc.id,
      chapterId: doc.get('chapterId') || null,
      topicId: doc.get('topicId') || null,
      origin: doc.get('origin') || null,
      question: doc.get('question') || doc.get('title') || '',
      createdAt: doc.get('createdAt') || null,
    });
  });

  const candidates = [];
  for (const [key, members] of groups) {
    if (members.length < 2) continue;
    const texts = members.map(m => normalizeText(m.question));
    const sameContent = texts.every(t => t === texts[0]);
    const teacherOrigin = members.some(m => m.origin === 'teacher');
    candidates.push({ normalizedId: key, count: members.length, sameContent, teacherOrigin, members });
  }

  candidates.sort((a, b) => b.count - a.count);

  const highConfidence = candidates.filter(c => c.sameContent && !c.teacherOrigin);
  const needsReview = candidates.filter(c => !c.sameContent && !c.teacherOrigin);
  const teacherFlagged = candidates.filter(c => c.teacherOrigin);

  console.log('\n=== SUMMARY (read-only, nothing modified) ===');
  console.log(`Total docs scanned:        ${snap.size}`);
  console.log(`Candidate twin groups:     ${candidates.length}`);
  console.log(`  - high confidence dup (same content, no teacher doc involved): ${highConfidence.length}`);
  console.log(`  - id collides, content differs (needs manual look):            ${needsReview.length}`);
  console.log(`  - involves an origin:'teacher' doc (DO NOT auto-touch):        ${teacherFlagged.length}`);

  if (highConfidence.length) {
    console.log('\n--- sample high-confidence duplicates ---');
    for (const c of highConfidence.slice(0, 10)) {
      console.log(`  [${c.members.map(m => m.id).join(' <-> ')}]  chapter=${c.members[0].chapterId}`);
    }
  }

  const reportsDir = path.join(__dirname, 'reports');
  mkdirSync(reportsDir, { recursive: true });
  const outPath = path.join(reportsDir, `questionIdTwins-${Date.now()}.json`);
  writeFileSync(outPath, JSON.stringify({ scannedAt: new Date().toISOString(), totalDocs: snap.size, candidates }, null, 2));
  console.log(`\nFull report written to: ${outPath}`);
  console.log('No Firestore writes were made. Review the report before deciding what (if anything) to delete/merge.');

  process.exit(0);
}

run();
