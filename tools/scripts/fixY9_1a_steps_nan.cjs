const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function frac(n) {
    const r = Math.round(n * 1000) / 1000;
    return Number.isInteger(r) ? String(r) : String(r);
  }

  function parseFracTex(s) {
    if (!s) return 0;
    const m = s.match(/(-?)\\frac\{(\d+)\}\{(\d+)\}/);
    if (m) {
      const val = parseInt(m[2]) / parseInt(m[3]);
      return m[1] === '-' ? -val : val;
    }
    return parseFloat(s);
  }

  function genSteps(id, question) {
    const q = question || '';

    // === p^2 - 2q (fractions) ===
    const t9 = q.match(/Evaluate \\?\(p\^2 - 2q\\?\) when \\?\(p = (.*?)\\?\) and \\?\(q = (.*?)\\?\)/);
    if (t9) {
      const pStr = t9[1], qStr = t9[2];
      const p = parseFracTex(pStr), q2 = parseFracTex(qStr);
      const pSq = p * p, cq = 2 * q2, result = pSq - cq;
      return [
        { explanation: `Substitute \\(p = ${pStr}\\) and \\(q = ${qStr}\\) into \\(p^{2} - 2q\\).`, workingOut: `\\( \\left(${pStr}\\right)^{2} - 2\\left(${qStr}\\right) \\)`, graphData: null },
        { explanation: `Evaluate the power first (BODMAS), then the multiplication.`, workingOut: `\\( \\left(${pStr}\\right)^{2} = ${frac(pSq)} \\)\n\\( 2 \\times \\left(${qStr}\\right) = ${frac(cq)} \\)`, graphData: null },
        { explanation: `Subtract to get the final answer.`, workingOut: `\\( ${frac(pSq)} - (${frac(cq)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === 2m(m-3n) with fractions ===
    const t10f = q.match(/Evaluate \\?\(2m\(m - 3n\)\\?\) when \\?\(m = (.*?)\\?\) and \\?\(n = (.*?)\\?\)/);
    if (t10f) {
      const mStr = t10f[1], nStr = t10f[2];
      const m = parseFracTex(mStr), n = parseFracTex(nStr);
      const outer = 2 * m, inner = m - 3 * n, result = outer * inner;
      return [
        { explanation: `Substitute \\(m = ${mStr}\\) and \\(n = ${nStr}\\) into \\(2m(m - 3n)\\).`, workingOut: `\\( 2\\left(${mStr}\\right)\\left(\\left(${mStr}\\right) - 3\\left(${nStr}\\right)\\right) \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate inside the bracket first.`, workingOut: `Inner: \\( ${mStr} - 3 \\times ${nStr} = ${frac(m)} - ${frac(3 * n)} = ${frac(inner)} \\)\nOuter: \\( 2 \\times ${mStr} = ${frac(outer)} \\)`, graphData: null },
        { explanation: `Multiply the outer factor by the bracket result.`, workingOut: `\\( ${frac(outer)} \\times (${frac(inner)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === a(2b - c) with fractions ===
    const t11f = q.match(/Evaluate \\?\(a\(2b - c\)\\?\) when \\?\(a = (.*?)\\?\),? \\?\(b = (.*?)\\?\) and \\?\(c = (.*?)\\?\)/);
    if (t11f) {
      const aStr = t11f[1], bStr = t11f[2], cStr = t11f[3];
      const a = parseFracTex(aStr), b = parseFracTex(bStr), cv = parseFracTex(cStr);
      const inner = 2 * b - cv, result = a * inner;
      return [
        { explanation: `Substitute \\(a = ${aStr}\\), \\(b = ${bStr}\\), \\(c = ${cStr}\\) into \\(a(2b - c)\\).`, workingOut: `\\( \\left(${aStr}\\right)\\left(2\\left(${bStr}\\right) - \\left(${cStr}\\right)\\right) \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate inside the bracket first.`, workingOut: `\\( 2 \\times (${bStr}) = ${frac(2 * b)} \\)\n\\( ${frac(2 * b)} - (${cStr}) = ${frac(inner)} \\)`, graphData: null },
        { explanation: `Multiply by the outer factor.`, workingOut: `\\( (${aStr}) \\times (${frac(inner)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    return null;
  }

  const ids = ['y9-1a-q10e', 'y9-1a-q10f', 'y9-1a-q11e', 'y9-1a-q11f', 'y9-1a-q9e', 'y9-1a-q9f'];
  const parentSet = new Set();
  
  for (const id of ids) {
    const snap = await db.collection('questions').doc(id).get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = genSteps(id, data.question);
      if (newSteps) {
        await snap.ref.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
        console.log(`Fixed NaN: ${id}`);
        parentSet.add(id.replace(/[a-z]$/, ''));
      }
    }
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, solutionSteps: cSnap.data().solutionSteps } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\\nDone.');
  process.exit(0);
}

run().catch(console.error);
