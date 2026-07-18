/**
 * Convert Y12 Adv Ch5B short_answer "Differentiate …" items to 4-option MC.
 * Leaves teacher_review / prove / multiparts alone.
 *
 * Usage: node tools/scripts/convertY12ACh5BToMCQ.js [--write] [--push]
 */
const fs = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const root = path.join(__dirname, '../..');
const seedPath = path.join(root, 'src/constants/seedYear12Ch5BQuestions.js');
const { Y12A_CH5B_QUESTIONS: Q } = require(seedPath);

function wrap(s) {
  const t = String(s).trim();
  if (!t) return t;
  if (t.startsWith('\\(') || t.startsWith('$')) return t.replace(/^\$|\$$/g, (m, i, str) => {
    if (m === '$' && !str.startsWith('\\(')) return '';
    return m;
  }).replace(/^\$/, '').replace(/\$$/, '');
  // strip $ then wrap
  const bare = t.replace(/^\$/, '').replace(/\$$/, '');
  if (bare.startsWith('\\(')) return bare;
  return `\\(${bare}\\)`;
}

function diversifyIndex(id, n = 4) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h % n;
}

function distractorsFor(answer) {
  const a = String(answer).replace(/\$/g, '').replace(/\\\(|\\\)/g, '').trim();
  const set = new Set([a]);
  const out = [];
  const push = (x) => {
    const t = String(x).trim();
    if (!t || set.has(t)) return;
    set.add(t);
    out.push(t);
  };

  // sign flip
  if (a.startsWith('-')) push(a.slice(1));
  else push(`-${a}`);

  // drop leading coefficient
  const lead = a.match(/^(-?\d+)(.*)$/);
  if (lead && lead[1] !== '1' && lead[1] !== '-1') {
    push(lead[2] || 'e^{x}');
    const n = Number(lead[1]);
    if (Number.isFinite(n) && Math.abs(n) > 1) push(`${n > 0 ? n - 1 : n + 1}${lead[2]}`);
  }

  // e^{kx} without k
  push(a.replace(/^(-?\d*)e\^\{([^}]+)\}$/, 'e^{$2}'));
  push(a.replace(/^(-?\d+)e/, 'e'));

  // common pads
  ['e^{x}', '0', 'e^{2x}', '2e^{x}', 'x e^{x}', 'e^{-x}', '1'].forEach(push);
  return out.slice(0, 8);
}

function toMc(q) {
  if (q.type !== 'short_answer') return null;
  const text = q.question || q.q || '';
  if (!/Differentiat/i.test(text)) return null;
  if (/\na\)|\nb\)|show that|prove|sketch/i.test(text)) return null;
  const ans = String(q.a || q.answer || '').replace(/\$/g, '').trim();
  if (!ans || ans.length > 90) return null;
  if (/[;,]/.test(ans) && ans.length > 40) return null; // multi-part answers

  const dist = distractorsFor(ans);
  if (dist.length < 3) return null;

  const correctW = wrap(ans);
  const targetIdx = diversifyIndex(q.id, 4);
  const used = new Set([correctW]);
  const opts = new Array(4);
  opts[targetIdx] = correctW;
  let di = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetIdx) continue;
    while (di < dist.length && used.has(wrap(dist[di]))) di++;
    const d = di < dist.length ? wrap(dist[di++]) : wrap(`e^{${i + 3}x}`);
    opts[i] = d;
    used.add(d);
  }

  const steps = Array.isArray(q.solutionSteps) && q.solutionSteps.length
    ? q.solutionSteps.map((s) => {
        let w = String(s.workingOut || '');
        w = w.replace(/,?\s+quad\s+/g, ',\\quad ');
        if (w && !/\\\(|\\\[|\$/.test(w)) w = `\\(${w}\\)`;
        return { explanation: s.explanation, workingOut: w, graphData: s.graphData ?? null };
      })
    : [{
        explanation: 'Differentiate using the standard exponential rules (chain / constant multiple as needed).',
        workingOut: correctW,
        graphData: null,
      }];

  return {
    ...q,
    type: 'multiple_choice',
    opts,
    a: targetIdx,
    answer: String(targetIdx),
    solutionSteps: steps,
    isNew: true,
  };
}

const converted = [];
const out = Q.map((q) => {
  const mc = toMc(q);
  if (mc) {
    converted.push({ id: mc.id, a: mc.a, correct: mc.opts[mc.a] });
    return mc;
  }
  if (Array.isArray(q.solutionSteps)) {
    return {
      ...q,
      solutionSteps: q.solutionSteps.map((s) => ({
        ...s,
        workingOut: String(s.workingOut || '').replace(/,?\s+quad\s+/g, ',\\quad '),
      })),
    };
  }
  return q;
});

console.log(`Converted ${converted.length} / ${Q.length}`);
converted.slice(0, 25).forEach((c) => console.log(' ', c.id, '→', String.fromCharCode(65 + c.a), c.correct));

if (WRITE) {
  const body = `export const Y12A_CH5B_QUESTIONS = ${JSON.stringify(out, null, 2)};\n`;
  fs.writeFileSync(seedPath, body);
  console.log('Wrote', seedPath);
}

if (PUSH) {
  const admin = require('firebase-admin');
  const saPath = path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-81866b8996.json');
  const sa = require(saPath);
  if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(sa) });
  const db = admin.firestore();
  const bump = Date.now();
  const convertedIds = new Set(converted.map((c) => c.id));
  // also push latex heals
  const healIds = out.filter((q) => !convertedIds.has(q.id)).map((q) => q.id);

  (async () => {
    let n = 0;
    const batchSize = 400;
    let batch = db.batch();
    let ops = 0;
    const flush = async () => {
      if (ops === 0) return;
      await batch.commit();
      batch = db.batch();
      ops = 0;
    };

    for (const q of out) {
      if (!convertedIds.has(q.id)) continue;
      const isMC = q.type === 'multiple_choice';
      const payload = {
        type: q.type,
        question: q.question,
        answer: isMC ? String(q.a) : (q.a || ''),
        hint: q.hint || '',
        solution: q.solution || '',
        solutionSteps: q.solutionSteps || [],
        contentBump: bump,
        isNew: true,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      };
      if (isMC) {
        payload.options = (q.opts || []).map((t) => ({ text: String(t), imageUrl: '' }));
        payload.requiresManualGrading = false;
      }
      batch.set(db.collection('questions').doc(q.id), payload, { merge: true });
      ops++;
      n++;
      if (ops >= 400) await flush();
    }
    // heal q5bi / q18 latex
    for (const id of ['y12a-5b-q5bi', 'y12a-5b-q18']) {
      const q = out.find((x) => x.id === id);
      if (!q) continue;
      batch.set(db.collection('questions').doc(id), {
        solutionSteps: q.solutionSteps,
        contentBump: bump,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      ops++;
      n++;
    }
    await flush();
    await db.doc('sync_meta/questions').set({
      version: bump,
      membershipVersion: bump,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    console.log('Pushed', n, 'docs; version', bump);
  })().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
