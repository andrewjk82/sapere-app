/**
 * Flatten parent `subquestions` docs into top-level multiple_choice docs.
 *
 * Why: Curriculum counts, question_index, Question Bank prev/next, and practice
 * pools all count/navigate TOP-LEVEL question documents only. Nesting every
 * exercise as subQuestions made y12a-5C/5D look like ~18 questions even though
 * 65–112 MC parts existed inside parents.
 *
 * Usage:
 *   node tools/scripts/flattenY12ACh5Subquestions.cjs y12a-5D           # dry-run
 *   node tools/scripts/flattenY12ACh5Subquestions.cjs y12a-5D --write   # seed only
 *   node tools/scripts/flattenY12ACh5Subquestions.cjs y12a-5D --write --push
 *   node tools/scripts/flattenY12ACh5Subquestions.cjs y12a-5C --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const topicArg = process.argv[2];
const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');

const TOPIC = {
  'y12a-5C': {
    seedFile: 'src/constants/seedYear12Ch5CQuestions.js',
    exportName: 'Y12A_CH5C_QUESTIONS',
    topicId: 'y12a-5C',
    topicCode: '5C',
    topicTitle: 'Applications of differentiation',
    idPrefix: 'y12a-5c-',
  },
  'y12a-5D': {
    seedFile: 'src/constants/seedYear12Ch5DQuestions.js',
    exportName: 'Y12A_CH5D_QUESTIONS',
    topicId: 'y12a-5D',
    topicCode: '5D',
    topicTitle: 'Integration of exponential functions',
    idPrefix: 'y12a-5d-',
  },
}[topicArg];

if (!TOPIC) {
  console.error('Usage: node tools/scripts/flattenY12ACh5Subquestions.cjs y12a-5C|y12a-5D [--write] [--push]');
  process.exit(1);
}

function loadSeed() {
  const full = path.join(ROOT, TOPIC.seedFile);
  const src = readFileSync(full, 'utf8');
  const body = src.replace(new RegExp(`^export const ${TOPIC.exportName} = `), 'module.exports = ');
  const tmp = path.join('/tmp', `flatten-${TOPIC.topicId}.cjs`);
  writeFileSync(tmp, body);
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

/** Combine parent stem + part prompt when the part doesn't already include enough context. */
function composeQuestion(parentQ, sq) {
  const stem = String(parentQ || '').trim();
  const part = String(sq.question || sq.q || '').trim();
  if (!stem || stem === part) return part;
  // Skip generic stems that just say "find each..."
  const generic =
    /find each|evaluate each|express each|write each|expand the brackets|use integration with|differentiate, then use|simplify each integrand|consider the function|a function \\?\(?f/i.test(
      stem
    ) && !/curve|point|given that/i.test(stem);
  // For true multiparts ("Consider the curve..."), prepend stem
  if (/consider the|given that|the gradient|a function/i.test(stem) && !generic) {
    // Avoid double-paste if part already starts with same math
    if (part.includes(stem.slice(0, 40))) return part;
    return `${stem}\n\n${part}`;
  }
  // Independent exercises: use part only
  return part;
}

function flatten(parents) {
  const out = [];
  for (const p of parents) {
    const subs = Array.isArray(p.subQuestions) ? p.subQuestions : [];
    if (p.type === 'subquestions' && subs.length > 0) {
      for (const sq of subs) {
        const isMC =
          sq.type === 'multiple_choice' ||
          (Array.isArray(sq.opts) && sq.opts.length > 0) ||
          (Array.isArray(sq.options) && sq.options.length > 0);

        const optsRaw = sq.opts || sq.options || [];
        const opts = optsRaw.map((o) => (typeof o === 'string' ? o : o?.text || ''));

        let a = sq.a;
        if (a == null && sq.answer != null && /^\d+$/.test(String(sq.answer))) {
          a = Number(sq.answer);
        }
        a = Number(a);
        if (isMC && (!Number.isInteger(a) || a < 0 || a >= opts.length)) {
          throw new Error(`bad answer index for ${sq.id}: a=${sq.a} answer=${sq.answer} opts=${opts.length}`);
        }

        const flat = {
          id: sq.id,
          topicId: TOPIC.topicId,
          c: TOPIC.topicCode,
          t: TOPIC.topicTitle,
          type: isMC ? 'multiple_choice' : sq.type || 'short_answer',
          difficulty: sq.difficulty || p.difficulty || 'medium',
          timeLimit: sq.timeLimit || p.timeLimit || 120,
          question: composeQuestion(p.question, sq),
          hint: sq.hint || p.hint || '',
          solution: sq.solution || '',
          solutionSteps: Array.isArray(sq.solutionSteps)
            ? sq.solutionSteps.map((s) => ({
                explanation: s.explanation || '',
                workingOut: s.workingOut || '',
                graphData: s.graphData ?? null,
              }))
            : [],
          graphData: sq.graphData ?? null,
          isNew: true,
          requiresManualGrading: sq.requiresManualGrading === true || sq.type === 'teacher_review',
        };

        if (isMC) {
          flat.opts = opts;
          flat.a = a;
          flat.answer = String(a);
        } else {
          flat.a = sq.a ?? sq.answer ?? '';
          flat.answer = String(sq.answer ?? sq.a ?? '');
        }

        out.push(flat);
      }
    } else {
      // already flat
      out.push({ ...p, isNew: p.isNew !== false });
    }
  }
  return out;
}

function selfCheck(items) {
  const ids = new Set();
  let mc = 0;
  for (const q of items) {
    if (ids.has(q.id)) throw new Error(`duplicate id ${q.id}`);
    ids.add(q.id);
    if (q.type === 'subquestions') throw new Error(`still nested ${q.id}`);
    if (q.type === 'multiple_choice') {
      mc++;
      if (!Array.isArray(q.opts) || q.opts.length !== 4) throw new Error(`${q.id} opts`);
      if (new Set(q.opts).size !== 4) throw new Error(`${q.id} dup opts`);
      if (!Number.isInteger(q.a) || q.opts[q.a] == null) throw new Error(`${q.id} bad a`);
    }
  }
  console.log('self-check OK', { total: items.length, mc, uniqueIds: ids.size });
}

async function push(items) {
  const { initializeApp, cert, getApps } = require('firebase-admin/app');
  const { getFirestore, FieldValue } = require('firebase-admin/firestore');
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  const seedIds = new Set(items.map((q) => q.id));
  const existing = await db.collection('questions').where('topicId', '==', TOPIC.topicId).get();

  // Delete bank docs that are obsolete parents (or old flats not in new seed).
  // Never touch exam papers / teacher origin.
  const toDelete = [];
  for (const doc of existing.docs) {
    if (!doc.id.startsWith(TOPIC.idPrefix)) continue;
    if (doc.data()?.origin === 'teacher') continue;
    if (!seedIds.has(doc.id)) toDelete.push(doc.id);
  }
  console.log('delete obsolete bank docs', toDelete.length, toDelete.slice(0, 12).join(', '));

  let batch = db.batch();
  let n = 0;
  const flush = async () => {
    if (!n) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  for (const id of toDelete) {
    batch.delete(db.collection('questions').doc(id));
    n++;
    if (n >= 400) await flush();
  }
  await flush();

  let ok = 0;
  for (const raw of items) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') {
      console.log('skip teacher', raw.id);
      continue;
    }
    const isMC = raw.type === 'multiple_choice';
    const payload = {
      chapterId: 'y12a-5',
      chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
      topicId: TOPIC.topicId,
      topicCode: TOPIC.topicCode,
      topicTitle: TOPIC.topicTitle,
      year: 'Year 12',
      isManual: true,
      origin: 'seed',
      title: String(raw.question || '').replace(/\\[\(\)\[\]]/g, '').slice(0, 40) + '...',
      question: raw.question,
      difficulty: raw.difficulty || 'medium',
      timeLimit: raw.timeLimit || 120,
      type: raw.type,
      requiresManualGrading: !!raw.requiresManualGrading,
      options: isMC ? raw.opts.map((t) => ({ text: t, imageUrl: '' })) : [],
      answer: isMC ? String(raw.a) : String(raw.answer ?? raw.a ?? ''),
      hint: raw.hint || '',
      solution: raw.solution || '',
      solutionSteps: raw.solutionSteps || [],
      subQuestions: [], // flattened — no nested parts
      graphData: raw.graphData ?? null,
      isNew: true,
      updatedAt: FieldValue.serverTimestamp(),
    };
    if (!snap.exists) payload.createdAt = FieldValue.serverTimestamp();
    batch.set(ref, payload, { merge: true });
    n++;
    ok++;
    if (n >= 200) await flush();
  }
  await flush();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('pushed', ok, 'deleted', toDelete.length, 'version', ver);
}

async function main() {
  const parents = loadSeed();
  console.log('loaded', parents.length, 'top-level seed rows');
  const flat = flatten(parents);
  selfCheck(flat);
  console.log(
    'before→after top-level count:',
    parents.length,
    '→',
    flat.length,
    '(this is what Curriculum/Question Bank will show)'
  );

  if (WRITE) {
    const full = path.join(ROOT, TOPIC.seedFile);
    writeFileSync(full, `export const ${TOPIC.exportName} = ${JSON.stringify(flat, null, 2)};\n`);
    console.log('wrote', full);
  } else {
    console.log('dry-run (pass --write)');
  }

  if (PUSH) {
    if (!WRITE) {
      console.error('Need --write with --push');
      process.exit(1);
    }
    await push(flat);
    console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js y12a-5');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
