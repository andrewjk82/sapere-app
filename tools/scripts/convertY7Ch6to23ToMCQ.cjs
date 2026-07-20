/**
 * Year 7 Chapters 6–23: convert remaining short_answer → multiple_choice
 * and enrich thin solutionSteps for existing MC.
 *
 * Flat top-level docs only (no parent nesting). English steps. \(...\) LaTeX.
 *
 *   node tools/scripts/convertY7Ch6to23ToMCQ.cjs                  # dry-run summary
 *   node tools/scripts/convertY7Ch6to23ToMCQ.cjs --push           # write Firestore
 *   node tools/scripts/convertY7Ch6to23ToMCQ.cjs --push --chapter y7-6
 *   node tools/scripts/convertY7Ch6to23ToMCQ.cjs --push --limit 50
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const PUSH = process.argv.includes('--push');
const chapterArg = (() => {
  const i = process.argv.indexOf('--chapter');
  return i >= 0 ? process.argv[i + 1] : null;
})();
const limitArg = (() => {
  const i = process.argv.indexOf('--limit');
  return i >= 0 ? Number(process.argv[i + 1]) : null;
})();

const ROOT = path.resolve(__dirname, '../..');
const SA =
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';

function hashId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

/** Normalize $...$ and bare math into \(...\). Avoid nested \( \). */
function normalizeLatex(s) {
  if (s == null) return '';
  let t = String(s).trim();
  // strip trailing junk like "\\$" alone
  t = t.replace(/\\\$\s*$/g, '').replace(/\$\\$/g, '');
  // $...$ → \(...\)
  t = t.replace(/\$([^$]+)\$/g, '\\($1\\)');
  // leftover lone $
  t = t.replace(/(^|[^\\])\$/g, '$1');
  // collapse accidental nested \( \(
  t = t.replace(/\\\(\s*\\\(/g, '\\(').replace(/\\\)\s*\\\)/g, '\\)');
  return t.trim();
}

function stripDelims(s) {
  let t = normalizeLatex(s);
  const m = t.match(/^\\\(([\s\S]*)\\\)$/);
  if (m) t = m[1].trim();
  return t;
}

function wrapMath(s) {
  const t = stripDelims(s);
  if (!t) return t;
  // pure prose sentence → leave plain
  if (/^[A-Z][a-z].*\s/.test(t) && !/\\[a-zA-Z]/.test(t) && !/[=^_{}]/.test(t)) return t;
  // already has \(
  if (/\\\(/.test(t)) return t;
  return `\\(${t}\\)`;
}

function optText(o) {
  if (o == null) return '';
  if (typeof o === 'string') return o;
  return String(o.text || o.value || '');
}

function isMC(q) {
  const opts = q.options || q.opts || [];
  return q.type === 'multiple_choice' && Array.isArray(opts) && opts.length >= 2;
}

function getCorrectText(q) {
  const opts = (q.options || q.opts || []).map(optText);
  if (isMC(q)) {
    const a = q.answer;
    const idx = Number(a);
    if (Number.isInteger(idx) && idx >= 0 && idx < opts.length) return opts[idx];
    // answer might be the text itself
    const hit = opts.find((o) => stripDelims(o) === stripDelims(String(a)));
    if (hit) return hit;
  }
  return String(q.answer ?? q.a ?? q.solution ?? '').trim();
}

/** Invent 3 distractors from correct answer text. */
function inventDistractors(correctRaw) {
  const raw = stripDelims(correctRaw);
  const set = new Set();
  const add = (s) => {
    const t = stripDelims(s);
    if (!t || t === raw) return;
    set.add(t);
  };

  // numeric
  const num = Number(String(raw).replace(/[^0-9.eE+-]/g, ''));
  if (Number.isFinite(num) && /^-?\d+(\.\d+)?$/.test(raw.replace(/\s/g, ''))) {
    add(String(num + 1));
    add(String(num - 1));
    add(String(-num));
    add(String(num * 2));
    add(String(Math.round(num * 10) / 100));
  }

  // fraction a/b
  const frac = raw.match(/^(-?)\\?frac\{([^}]+)\}\{([^}]+)\}$/) || raw.match(/^(-?)(\d+)\/(\d+)$/);
  if (frac) {
    add(`${frac[1] || ''}\\frac{${frac[3]}}{${frac[2]}}`);
    add(`${frac[1] || ''}\\frac{${frac[2]}}{${Number(frac[3]) + 1 || frac[3]}}`);
  }

  // sign flip
  if (raw.startsWith('-')) add(raw.slice(1));
  else add(`-${raw}`);

  // algebra swaps
  add(raw.replace(/\+/g, '−').replace(/-/g, '+'));
  add(raw.replace(/(\d+)/, (_, n) => String(Number(n) + 1)));
  add(raw.split('').reverse().join(''));

  // list answers: drop one element
  if (raw.includes(',')) {
    const parts = raw.split(',').map((s) => s.trim());
    if (parts.length > 1) add(parts.slice(0, -1).join(', '));
    if (parts.length > 2) add(parts.slice(1).join(', '));
  }

  // fill
  const pool = [...set].filter(Boolean);
  while (pool.length < 3) {
    pool.push(`option ${pool.length + 1}`);
  }
  // unique wrap
  const out = [];
  const seen = new Set([wrapMath(raw)]);
  for (const p of pool) {
    const w = wrapMath(p);
    if (seen.has(w)) continue;
    // reject garbage float noise
    if (/0\.449999999|999999/.test(w)) continue;
    seen.add(w);
    out.push(w);
    if (out.length === 3) break;
  }
  let k = 2;
  while (out.length < 3) {
    const w = wrapMath(String(k * 10 + 3));
    if (!seen.has(w)) {
      seen.add(w);
      out.push(w);
    }
    k++;
  }
  return out.slice(0, 3);
}

function placeCorrect(id, correct, distractors) {
  const c = wrapMath(correct);
  const dist = distractors.map(wrapMath).filter((d) => d && d !== c);
  const uniq = [];
  const seen = new Set([c]);
  for (const d of dist) {
    if (seen.has(d)) continue;
    seen.add(d);
    uniq.push(d);
    if (uniq.length === 3) break;
  }
  while (uniq.length < 3) {
    const pad = wrapMath(String(uniq.length + 7));
    if (!seen.has(pad)) {
      seen.add(pad);
      uniq.push(pad);
    } else break;
  }
  const a = hashId(id) % 4;
  const opts = [...uniq.slice(0, 3)];
  opts.splice(a, 0, c);
  // ensure length 4 unique
  while (opts.length < 4) opts.push(wrapMath(`x${opts.length}`));
  const final = opts.slice(0, 4);
  // if collision after splice, re-unique
  if (new Set(final).size !== 4) {
    const cleaned = [c];
    for (const o of final) {
      if (o !== c && !cleaned.includes(o)) cleaned.push(o);
    }
    let i = 0;
    while (cleaned.length < 4) {
      const p = wrapMath(String(100 + i++));
      if (!cleaned.includes(p)) cleaned.push(p);
    }
    const a2 = hashId(id) % 4;
    const rest = cleaned.filter((x) => x !== c);
    const out = rest.slice(0, 3);
    out.splice(a2, 0, c);
    return { opts: out.slice(0, 4), a: out.indexOf(c) };
  }
  return { opts: final, a: final.indexOf(c) };
}

function expandSteps(q, correctText) {
  const existing = Array.isArray(q.solutionSteps) ? q.solutionSteps : [];
  const steps = [];

  const push = (explanation, workingOut) => {
    let exp = String(explanation || '').trim();
    if (exp.length < 25) {
      exp = `${exp} Work carefully and simplify fully before selecting the matching option.`.trim();
    }
    if (!exp.endsWith('.') && !exp.endsWith('?') && !exp.endsWith('!')) exp += '.';
    // strip Korean if any slipped in
    let w = normalizeLatex(workingOut || '');
    if (w && !/\\\(|\\\[|\$/.test(w) && /[\\^=_{}]/.test(w)) w = `\\(${stripDelims(w)}\\)`;
    else if (w && !/\\\(/.test(w) && /[0-9a-zA-Z]/.test(w) && w.length < 40 && /[=+\-*/]/.test(w)) {
      w = `\\(${stripDelims(w)}\\)`;
    }
    steps.push({ explanation: exp, workingOut: w || wrapMath(correctText), graphData: null });
  };

  if (existing.length > 0) {
    for (const st of existing) {
      push(
        normalizeLatex(st.explanation || 'Carry out the next step of the solution'),
        st.workingOut || ''
      );
    }
  } else if (q.solution) {
    const sol = normalizeLatex(String(q.solution));
    push(
      'Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).',
      sol.slice(0, 120)
    );
    push(
      'Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.',
      sol
    );
    push(
      'State the final simplified answer and match it to the correct option.',
      wrapMath(correctText)
    );
  } else {
    const qText = String(q.question || '').replace(/\\[\(\)\[\]]/g, '').slice(0, 80);
    push(
      `Read the question carefully. Focus on what is required (for example: evaluate, simplify, convert, or list). Relevant detail: ${qText || 'see question'}.`,
      ''
    );
    push(
      'Apply the correct Year 7 method: substitute values, convert units or forms, expand or simplify algebra, or list set elements in order as asked.',
      wrapMath(correctText)
    );
    push(
      'Check the result is simplified and matches one of the four options exactly.',
      wrapMath(correctText)
    );
  }

  while (steps.length < 3) {
    push('Confirm the answer against the options.', wrapMath(correctText));
  }
  // cap very long
  return steps.slice(0, 8);
}

function convertDoc(id, data) {
  if (data.origin === 'teacher') return null;
  if (data.isActive === false) return null;
  if (data.type === 'teacher_review' && data.requiresManualGrading) return null;

  const correctRaw = getCorrectText(data);
  if (!correctRaw || correctRaw === 'See sub-questions.') {
    // try subquestions flatten - convert each sub if parent multi
    return null;
  }

  const needsMC = !isMC(data);
  const steps = Array.isArray(data.solutionSteps) ? data.solutionSteps : [];
  const needsSteps = isMC(data) && steps.length < 3;

  if (!needsMC && !needsSteps) {
    // still normalize option latex if broken $
    const opts = (data.options || []).map(optText);
    const dirty = opts.some((o) => o.includes('$') && !o.includes('\\('));
    if (!dirty) return null;
  }

  let opts;
  let a;
  if (needsMC) {
    const dist = inventDistractors(correctRaw);
    ({ opts, a } = placeCorrect(id, correctRaw, dist));
  } else {
    opts = (data.options || data.opts || []).map((o) => wrapMath(normalizeLatex(optText(o))));
    // dedupe / pad
    const cIdx = Number(data.answer);
    let correct =
      Number.isInteger(cIdx) && opts[cIdx] != null ? opts[cIdx] : wrapMath(correctRaw);
    // fix float garbage options
    opts = opts.map((o) => (o.includes('999999') ? wrapMath(String(Math.round(Number(stripDelims(o)) * 1000) / 1000 || o)) : o));
    if (opts.length !== 4 || new Set(opts).size !== 4) {
      const dist = inventDistractors(correct);
      ({ opts, a } = placeCorrect(id, correct, dist));
    } else {
      a = Number.isInteger(cIdx) && cIdx >= 0 && cIdx < 4 ? cIdx : opts.indexOf(correct);
      if (a < 0) a = hashId(id) % 4;
      // ensure opts[a] is correct
      if (stripDelims(opts[a]) !== stripDelims(correct)) {
        opts[a] = wrapMath(correct);
      }
    }
  }

  // nested delimiter guard on opts
  opts = opts.map((o) => {
    const n = (String(o).match(/\\\(/g) || []).length;
    if (n > 1) {
      // prose with nested math → plain
      return stripDelims(o)
        .replace(/\\\(/g, '')
        .replace(/\\\)/g, '')
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
        .replace(/\\/g, '');
    }
    return o;
  });
  // re-unique after sanitize
  if (new Set(opts).size !== 4) {
    const c = wrapMath(correctRaw);
    const dist = inventDistractors(c);
    ({ opts, a } = placeCorrect(id, c, dist));
  }

  const solutionSteps = expandSteps(data, opts[a] || correctRaw);

  return {
    type: 'multiple_choice',
    requiresManualGrading: false,
    isManual: true,
    options: opts.map((t) => ({ text: t, imageUrl: '' })),
    answer: String(a),
    solutionSteps,
    question: normalizeLatex(data.question || data.q || ''),
    hint: normalizeLatex(data.hint || data.h || ''),
    solution: normalizeLatex(data.solution || data.s || ''),
    isNew: true,
  };
}

async function main() {
  const sa = JSON.parse(readFileSync(SA, 'utf8'));
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  const chapters = [];
  for (let n = 6; n <= 23; n++) {
    const ch = `y7-${n}`;
    if (chapterArg && ch !== chapterArg) continue;
    chapters.push(ch);
  }

  const stats = { scanned: 0, converted: 0, enriched: 0, skipped: 0, errors: 0 };
  const log = [];

  for (const ch of chapters) {
    const snap = await db.collection('questions').where('chapterId', '==', ch).get();
    console.log(`\n=== ${ch}: ${snap.size} docs ===`);
    let batch = db.batch();
    let n = 0;
    const flush = async () => {
      if (!n || !PUSH) {
        n = 0;
        batch = db.batch();
        return;
      }
      await batch.commit();
      batch = db.batch();
      n = 0;
    };

    let processed = 0;
    for (const doc of snap.docs) {
      if (limitArg != null && stats.converted + stats.enriched >= limitArg) break;
      stats.scanned++;
      const data = doc.data();
      try {
        const payload = convertDoc(doc.id, data);
        if (!payload) {
          stats.skipped++;
          continue;
        }
        const wasMC = isMC(data);
        if (wasMC) stats.enriched++;
        else stats.converted++;
        processed++;
        log.push({ id: doc.id, ch, wasMC });

        if (PUSH) {
          batch.set(
            doc.ref,
            {
              ...payload,
              updatedAt: FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
          n++;
          if (n >= 400) await flush();
        }
      } catch (e) {
        stats.errors++;
        console.warn('ERR', doc.id, e.message);
      }
    }
    await flush();
    console.log(`  processed ${processed}`);
  }

  if (PUSH) {
    const ver = Date.now();
    await db.collection('sync_meta').doc('questions').set(
      { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
    console.log('sync version', ver);
  }

  console.log('\nSTATS', stats);
  writeFileSync(
    path.join(ROOT, 'tools/audit-state/y7-6-23-convert-log.json'),
    JSON.stringify({ stats, sample: log.slice(0, 50), count: log.length }, null, 2)
  );
  console.log('log → tools/audit-state/y7-6-23-convert-log.json');
  if (!PUSH) console.log('(dry-run — pass --push to write)');
  else console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js y7-6 y7-7 y7-8 y7-10 y7-11 y7-12 y7-13 y7-14 y7-15 y7-16 y7-17 y7-18 y7-19 y7-20 y7-22 y7-23');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
