/**
 * Fix broken dy/dx fraction LaTeX + enrich verify-DE steps for Ch5B.
 * Targets: y12a-5b-q12a..d, y12a-5b-q19b (and related bad \dfrac{LHS = dy}{dx=...}).
 *
 * Usage: node tools/scripts/fixY12ACh5B_fracLatex.cjs [--write] [--push]
 */
const fs = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const seedPath = path.join(__dirname, '../../src/constants/seedYear12Ch5BQuestions.js');

const S = (explanation, workingOut) => ({
  explanation,
  workingOut: workingOut.startsWith('\\(') ? workingOut : `\\(${workingOut}\\)`,
  graphData: null,
});

/** Verify y = A e^{kx} satisfies dy/dx = k y */
function verifyLinearDE({ yExpr, k, yPrime, rhsExpr, rhsSimplified }) {
  const answer =
    `\\(\\text{LHS} = \\dfrac{dy}{dx} = ${yPrime}.\\)\n` +
    `\\(\\text{RHS} = ${rhsExpr} = ${rhsSimplified}.\\)\n` +
    `\\(\\text{LHS} = \\text{RHS}.\\)`;

  const solution =
    `Given \\(y = ${yExpr}\\). ` +
    `Differentiate: \\(\\dfrac{dy}{dx} = ${yPrime}\\) (chain rule on the exponential). ` +
    `Right-hand side: \\(${rhsExpr} = ${rhsSimplified}\\). ` +
    `Both sides equal \\(${yPrime}\\), so the DE is satisfied.`;

  const steps = [
    S(
      `We must show that \\(y = ${yExpr}\\) satisfies \\(\\dfrac{dy}{dx} = ${k}y\\). Evaluate the left-hand side and the right-hand side separately, then compare.`,
      `y = ${yExpr}`
    ),
    S(
      `Left-hand side: differentiate \\(y\\). Using \\(\\dfrac{d}{dx}e^{u} = e^{u}u'\\) with the appropriate constant multiple, ` +
        `\\(\\dfrac{dy}{dx} = ${yPrime}\\).`,
      `\\text{LHS} = \\dfrac{dy}{dx} = ${yPrime}`
    ),
    S(
      `Right-hand side: substitute the given function into \\(${k}y\\). ` +
        `\\(${rhsExpr} = ${rhsSimplified}\\).`,
      `\\text{RHS} = ${rhsExpr} = ${rhsSimplified}`
    ),
    S(
      `Compare: both sides equal \\(${yPrime}\\). Therefore \\(\\text{LHS} = \\text{RHS}\\), and \\(y = ${yExpr}\\) satisfies the differential equation.`,
      `\\text{LHS} = \\text{RHS} = ${yPrime}`
    ),
  ];

  return { a: answer, answer, solution, solutionSteps: steps };
}

const UPDATES = {
  'y12a-5b-q12a': verifyLinearDE({
    yExpr: 'e^{6x}',
    k: '6',
    yPrime: '6e^{6x}',
    rhsExpr: '6y = 6e^{6x}',
    rhsSimplified: '6e^{6x}',
  }),

  'y12a-5b-q12b': verifyLinearDE({
    yExpr: '4e^{3x}',
    k: '3',
    yPrime: '12e^{3x}',
    rhsExpr: '3y = 3(4e^{3x})',
    rhsSimplified: '12e^{3x}',
  }),

  'y12a-5b-q12c': verifyLinearDE({
    yExpr: '3e^{-5x}',
    k: '-5',
    yPrime: '-15e^{-5x}',
    rhsExpr: '-5y = -5(3e^{-5x})',
    rhsSimplified: '-15e^{-5x}',
  }),

  'y12a-5b-q12d': verifyLinearDE({
    yExpr: '2e^{-4x}',
    k: '-4',
    yPrime: '-8e^{-4x}',
    rhsExpr: '-4y = -4(2e^{-4x})',
    rhsSimplified: '-8e^{-4x}',
  }),

  'y12a-5b-q19b': (() => {
    const answer =
      `\\(\\dfrac{dy}{dx} = -\\dfrac{2}{3}e^{-2x}.\\)\n` +
      `\\(-2(y - 5) = -2\\left(\\dfrac{1}{3}e^{-2x}\\right) = -\\dfrac{2}{3}e^{-2x}.\\)\n` +
      `\\(\\text{LHS} = \\text{RHS}.\\)`;

    const solution =
      `Given \\(y = \\dfrac{1}{3}e^{-2x} + 5\\). ` +
      `Differentiate: \\(\\dfrac{dy}{dx} = \\dfrac{1}{3}\\cdot(-2)e^{-2x} = -\\dfrac{2}{3}e^{-2x}\\). ` +
      `Right-hand side: \\(y - 5 = \\dfrac{1}{3}e^{-2x}\\), so ` +
      `\\(-2(y - 5) = -2\\cdot\\dfrac{1}{3}e^{-2x} = -\\dfrac{2}{3}e^{-2x}\\). ` +
      `Both sides match, so the DE is satisfied.`;

    return {
      a: answer,
      answer,
      solution,
      solutionSteps: [
        S(
          'We must show that \\(y = \\dfrac{1}{3}e^{-2x} + 5\\) satisfies \\(\\dfrac{dy}{dx} = -2(y - 5)\\). Work out each side separately.',
          'y = \\dfrac{1}{3}e^{-2x} + 5'
        ),
        S(
          'Left-hand side: differentiate term by term. ' +
            '\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{3}e^{-2x}\\right) = \\dfrac{1}{3}\\cdot(-2)e^{-2x} = -\\dfrac{2}{3}e^{-2x}\\), ' +
            'and the constant 5 vanishes. So \\(\\dfrac{dy}{dx} = -\\dfrac{2}{3}e^{-2x}\\).',
          '\\text{LHS} = \\dfrac{dy}{dx} = -\\dfrac{2}{3}e^{-2x}'
        ),
        S(
          'Right-hand side: first simplify \\(y - 5\\). ' +
            '\\(y - 5 = \\dfrac{1}{3}e^{-2x} + 5 - 5 = \\dfrac{1}{3}e^{-2x}\\). ' +
            'Then multiply by \\(-2\\): \\(-2(y - 5) = -2\\cdot\\dfrac{1}{3}e^{-2x} = -\\dfrac{2}{3}e^{-2x}\\).',
          '\\text{RHS} = -2(y - 5) = -\\dfrac{2}{3}e^{-2x}'
        ),
        S(
          'Both sides equal \\(-\\dfrac{2}{3}e^{-2x}\\). Therefore \\(\\text{LHS} = \\text{RHS}\\), and the given function satisfies the equation.',
          '\\text{LHS} = \\text{RHS} = -\\dfrac{2}{3}e^{-2x}'
        ),
      ],
    };
  })(),
};

function replaceFieldBlock(src, id, fields) {
  // Replace a, solution, solutionSteps (and answer if present) for one question id.
  const idMarker = `"id": "${id}"`;
  const idIdx = src.indexOf(idMarker);
  if (idIdx < 0) {
    console.error('ID not found:', id);
    return src;
  }

  // Find next id boundary
  const nextId = src.indexOf('\n  {\n    "id":', idIdx + 1);
  const endBound = nextId < 0 ? src.length : nextId;
  let block = src.slice(idIdx, endBound);
  // Actually we need from start of object - safer to work on full file with positions relative to idIdx
  // Find the opening brace of this object
  let objStart = src.lastIndexOf('\n  {', idIdx);
  if (objStart < 0) objStart = src.lastIndexOf('{', idIdx);
  else objStart = objStart + 1; // point at space? better find '{'
  objStart = src.indexOf('{', objStart);

  // Find matching closing of object
  let depth = 0;
  let objEnd = -1;
  for (let i = objStart; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) {
        objEnd = i;
        break;
      }
    }
  }
  if (objEnd < 0) {
    console.error('Could not find object end for', id);
    return src;
  }

  let obj = src.slice(objStart, objEnd + 1);

  // Replace "a": "..."
  if (fields.a != null) {
    obj = obj.replace(/"a":\s*"(?:\\.|[^"\\])*"/, `"a": ${JSON.stringify(fields.a)}`);
  }
  // Replace "answer": if present (string form)
  if (fields.answer != null && /"answer":/.test(obj)) {
    obj = obj.replace(/"answer":\s*"(?:\\.|[^"\\])*"/, `"answer": ${JSON.stringify(fields.answer)}`);
  } else if (fields.answer != null && !/"answer":/.test(obj)) {
    // insert answer after a
    obj = obj.replace(
      /("a":\s*(?:"(?:\\.|[^"\\])*"|[^,\n]+),)/,
      `$1\n    "answer": ${JSON.stringify(fields.answer)},`
    );
  }

  // Replace solution
  if (fields.solution != null) {
    obj = obj.replace(/"solution":\s*"(?:\\.|[^"\\])*"/, `"solution": ${JSON.stringify(fields.solution)}`);
  }

  // Replace solutionSteps array
  if (fields.solutionSteps != null) {
    const stepsKey = '"solutionSteps":';
    const si = obj.indexOf(stepsKey);
    if (si >= 0) {
      const arrStart = obj.indexOf('[', si);
      let d = 0;
      let arrEnd = -1;
      for (let i = arrStart; i < obj.length; i++) {
        if (obj[i] === '[') d++;
        else if (obj[i] === ']') {
          d--;
          if (d === 0) {
            arrEnd = i;
            break;
          }
        }
      }
      if (arrEnd >= 0) {
        const newSteps = JSON.stringify(fields.solutionSteps, null, 2)
          .split('\n')
          .map((line, i) => (i === 0 ? line : '    ' + line))
          .join('\n');
        obj = obj.slice(0, si) + `"solutionSteps": ${newSteps}` + obj.slice(arrEnd + 1);
      }
    }
  }

  return src.slice(0, objStart) + obj + src.slice(objEnd + 1);
}

function updateSeed() {
  let src = fs.readFileSync(seedPath, 'utf8');
  for (const [id, fields] of Object.entries(UPDATES)) {
    src = replaceFieldBlock(src, id, fields);
    console.log('updated', id, 'steps=', fields.solutionSteps.length);
  }
  if (WRITE) {
    fs.writeFileSync(seedPath, src);
    console.log('Wrote', seedPath);
  } else {
    console.log('Dry-run only (pass --write)');
  }
}

async function pushFirestore() {
  const admin = require('firebase-admin');
  const credCandidates = [
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-81866b8996.json'),
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json'),
    path.join(process.env.HOME, 'Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-dffb22a1c2.json'),
  ];
  const credPath = credCandidates.find((p) => fs.existsSync(p));
  if (!credPath) throw new Error('No Firebase credentials');

  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(require(credPath)) });
  }
  const db = admin.firestore();
  const batch = db.batch();

  for (const [id, u] of Object.entries(UPDATES)) {
    batch.set(
      db.collection('questions').doc(id),
      {
        a: u.a,
        answer: u.answer,
        solution: u.solution,
        solutionSteps: u.solutionSteps,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log('queued', id);
  }
  await batch.commit();
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('Pushed', Object.keys(UPDATES).length, 'docs; version', ver);
}

(async () => {
  updateSeed();
  if (PUSH) await pushFirestore();
  else console.log('Skip push (pass --push)');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
