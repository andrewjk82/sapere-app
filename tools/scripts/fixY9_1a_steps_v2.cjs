const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function genSteps(id, question) {
    const q = question || '';

    // === VOLUME: V = (1/3)Ah ===
    const volMatch = q.match(/V = \\frac\{1\}\{3\} A h.*?A = ([\d\.]+).*?h = ([\d\.]+)/s);
    if (volMatch) {
      const A = parseFloat(volMatch[1]), h = parseFloat(volMatch[2]);
      const Ah = A * h, V = Ah / 3;
      return [
        { explanation: `Substitute \\(A = ${A}\\) and \\(h = ${h}\\) into the volume formula \\(V = \\frac{1}{3}Ah\\).`, workingOut: `\\( V = \\frac{1}{3} \\times ${A} \\times ${h} \\)`, graphData: null },
        { explanation: `First, multiply \\(A \\times h\\).`, workingOut: `\\( ${A} \\times ${h} = ${Ah} \\)`, graphData: null },
        { explanation: `Then multiply by \\(\\frac{1}{3}\\) (i.e., divide by 3).`, workingOut: `\\( \\frac{${Ah}}{3} = ${V} \\)`, graphData: null }
      ];
    }

    // === GAS PRESSURE: P = nRT/V ===
    const gasMatch = q.match(/P = \\frac\{nRT\}\{V\}.*?n = ([\d\.]+).*?R = ([\d\.]+).*?T = ([\d\.]+).*?V = ([\d\.]+)/s);
    if (gasMatch) {
      const n = parseFloat(gasMatch[1]), R = parseFloat(gasMatch[2]), T = parseFloat(gasMatch[3]), V = parseFloat(gasMatch[4]);
      const nR = parseFloat((n * R).toFixed(2));
      const nRT = parseFloat((nR * T).toFixed(2));
      const P = parseFloat((nRT / V).toFixed(2));
      return [
        { explanation: `Substitute \\(n = ${n}\\), \\(R = ${R}\\), \\(T = ${T}\\), \\(V = ${V}\\) into the formula \\(P = \\frac{nRT}{V}\\).`, workingOut: `\\( P = \\frac{${n} \\times ${R} \\times ${T}}{${V}} \\)`, graphData: null },
        { explanation: `Evaluate the numerator step by step. Multiply from left to right.`, workingOut: `\\( ${n} \\times ${R} = ${nR} \\)\n\\( ${nR} \\times ${T} = ${nRT} \\)`, graphData: null },
        { explanation: `Divide the numerator by the volume.`, workingOut: `\\( P = \\frac{${nRT}}{${V}} = ${P} \\)`, graphData: null }
      ];
    }

    // === KINEMATIC: v = sqrt(v0^2 + 2as) ===
    const kinMatch = q.match(/v = \\sqrt\{v_0\^.*?\}.*?v_0 = ([\d\.]+).*?a = ([\d\.]+).*?s = ([\d\.]+)/s);
    if (kinMatch) {
      const v0 = parseFloat(kinMatch[1]), a = parseFloat(kinMatch[2]), s = parseFloat(kinMatch[3]);
      const v0sq = parseFloat((v0 * v0).toFixed(2));
      const twoas = parseFloat((2 * a * s).toFixed(2));
      const inside = parseFloat((v0sq + twoas).toFixed(2));
      const v = parseFloat(Math.sqrt(inside).toFixed(2));
      return [
        { explanation: `Substitute \\(v_0 = ${v0}\\), \\(a = ${a}\\), \\(s = ${s}\\) into the kinematic formula \\(v = \\sqrt{v_0^{2} + 2as}\\).`, workingOut: `\\( v = \\sqrt{(${v0})^{2} + 2(${a})(${s})} \\)`, graphData: null },
        { explanation: `Evaluate each term inside the square root separately.`, workingOut: `\\( (${v0})^{2} = ${v0sq} \\)\n\\( 2 \\times ${a} \\times ${s} = ${twoas} \\)`, graphData: null },
        { explanation: `Add the two terms, then take the square root.`, workingOut: `\\( \\sqrt{${v0sq} + ${twoas}} = \\sqrt{${inside}} \\approx ${v} \\)`, graphData: null }
      ];
    }

    // === TRAPEZIUM: A = (1/2)(a+b)h ===
    const trapMatch = q.match(/A = \\frac\{1\}\{2\}.*?a \+ b.*?a = ([\d\.]+).*?b = ([\d\.]+).*?h = ([\d\.]+)/s);
    if (trapMatch) {
      const a = parseFloat(trapMatch[1]), b = parseFloat(trapMatch[2]), h = parseFloat(trapMatch[3]);
      const apb = a + b, A = 0.5 * apb * h;
      return [
        { explanation: `Substitute \\(a = ${a}\\), \\(b = ${b}\\), \\(h = ${h}\\) into the trapezium area formula \\(A = \\frac{1}{2}(a + b)h\\).`, workingOut: `\\( A = \\frac{1}{2}(${a} + ${b}) \\times ${h} \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate inside the brackets first.`, workingOut: `\\( ${a} + ${b} = ${apb} \\)`, graphData: null },
        { explanation: `Now multiply: \\(\\frac{1}{2} \\times ${apb} \\times ${h}\\).`, workingOut: `\\( \\frac{1}{2} \\times ${apb} = ${apb / 2} \\)\n\\( ${apb / 2} \\times ${h} = ${A} \\)`, graphData: null }
      ];
    }

    // === QUADRATIC: ax^2 + bx + c at x=k ===
    const quadMatch = q.match(/Evaluate.*?\\((-?\d+)x\^\{2\} ([+-]) (\d+)x \+ (-?[\d\-]+)\\) when \\(x = (-?[\d\.]+)\\)/);
    if (quadMatch) {
      const a = parseInt(quadMatch[1]), opSign = quadMatch[2], b = parseInt(quadMatch[3] ) * (opSign === '-' ? -1 : 1);
      const cRaw = quadMatch[4], c = parseInt(cRaw);
      const x = parseFloat(quadMatch[5]);
      const xSq = x * x;
      const term1 = a * xSq, term2 = b * x, result = term1 + term2 + c;
      return [
        { explanation: `Substitute \\(x = ${x}\\) into the expression \\(${a}x^{2} + ${b}x + ${c}\\).`, workingOut: `\\( ${a}(${x})^{2} + ${b}(${x}) + (${c}) \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate the power first, then each multiplication.`, workingOut: `\\( (${x})^{2} = ${xSq} \\)\n\\( ${a} \\times ${xSq} = ${term1} \\)\n\\( ${b} \\times (${x}) = ${term2} \\)`, graphData: null },
        { explanation: `Add all three terms together.`, workingOut: `\\( ${term1} + (${term2}) + (${c}) = ${result} \\)`, graphData: null }
      ];
    }

    // === QUADRATIC v2: -3x^2 + 4x + -15 (restored question format) ===
    const quadMatch2 = q.match(/Evaluate.*?\\((-?\d+)x\^\{2\} \+ (-?\d+)x \+ (-?[\d\.]+)\\) when \\(x = (-?[\d\.]+)\\)/);
    if (quadMatch2) {
      const a = parseInt(quadMatch2[1]), b = parseInt(quadMatch2[2]), c = parseFloat(quadMatch2[3]);
      const x = parseFloat(quadMatch2[4]);
      const xSq = x * x;
      const term1 = a * xSq, term2 = b * x, result = term1 + term2 + c;
      const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
      return [
        { explanation: `Substitute \\(x = ${x}\\) into the expression \\(${a}x^{2} + ${b}x ${cStr}\\).`, workingOut: `\\( ${a}(${x})^{2} + ${b}(${x}) ${cStr} \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate the power first, then multiply each coefficient.`, workingOut: `\\( (${x})^{2} = ${xSq} \\)\n\\( ${a} \\times ${xSq} = ${term1} \\)\n\\( ${b} \\times (${x}) = ${term2} \\)`, graphData: null },
        { explanation: `Sum all three terms. Take care with negative signs.`, workingOut: `\\( (${term1}) + (${term2}) + (${c}) = ${result} \\)`, graphData: null }
      ];
    }

    // === SIMPLE ARITHMETIC: A x B - C x D ===
    const arithMatch = q.match(/Evaluate.*?\\(([\d\.]+) \\times ([\d\.]+) - ([\d\.]+) \\times ([\d\.]+)\\)/);
    if (arithMatch) {
      const a = parseFloat(arithMatch[1]), b = parseFloat(arithMatch[2]), c = parseFloat(arithMatch[3]), d = parseFloat(arithMatch[4]);
      const ab = parseFloat((a * b).toFixed(2)), cd = parseFloat((c * d).toFixed(2));
      const result = parseFloat((ab - cd).toFixed(2));
      return [
        { explanation: `Use BODMAS — perform the multiplications before the subtraction.`, workingOut: `\\( ${a} \\times ${b} - ${c} \\times ${d} \\)`, graphData: null },
        { explanation: `Evaluate each multiplication separately.`, workingOut: `\\( ${a} \\times ${b} = ${ab} \\)\n\\( ${c} \\times ${d} = ${cd} \\)`, graphData: null },
        { explanation: `Now subtract the two results.`, workingOut: `\\( ${ab} - ${cd} = ${result} \\)`, graphData: null }
      ];
    }

    // === PYTHAGORAS: sqrt(a^2 + b^2) ===
    const pythagorasMatch = q.match(/Find the length of the hypotenuse.*?legs \\?\(?([\d\.]+)\\?\)? and \\?\(?([\d\.]+)\\?\)/);
    if (pythagorasMatch) {
      const a = parseFloat(pythagorasMatch[1]), b = parseFloat(pythagorasMatch[2]);
      const aSq = parseFloat((a * a).toFixed(2)), bSq = parseFloat((b * b).toFixed(2));
      const sum = parseFloat((aSq + bSq).toFixed(2));
      const hyp = parseFloat(Math.sqrt(sum).toFixed(2));
      return [
        { explanation: `Apply Pythagoras' Theorem: \\(c = \\sqrt{a^{2} + b^{2}}\\). Substitute \\(a = ${a}\\) and \\(b = ${b}\\).`, workingOut: `\\( c = \\sqrt{(${a})^{2} + (${b})^{2}} \\)`, graphData: null },
        { explanation: `Square each leg.`, workingOut: `\\( (${a})^{2} = ${aSq} \\)\n\\( (${b})^{2} = ${bSq} \\)`, graphData: null },
        { explanation: `Add the squares, then take the square root.`, workingOut: `\\( \\sqrt{${aSq} + ${bSq}} = \\sqrt{${sum}} \\approx ${hyp} \\)`, graphData: null }
      ];
    }

    // === COMPOUND/EXPONENTIAL: N × r^k ===
    const compMatch = q.match(/Evaluate.*?\\(([\d\.]+) \\times ([\d\.]+)\\)/);
    if (compMatch) {
      const base = parseFloat(compMatch[1]), mult = parseFloat(compMatch[2]);
      const result = parseFloat((base * mult).toFixed(2));
      return [
        { explanation: `Substitute the values directly and evaluate the expression.`, workingOut: `\\( ${base} \\times ${mult} \\)`, graphData: null },
        { explanation: `Perform the multiplication.`, workingOut: `\\( ${base} \\times ${mult} = ${result} \\)`, graphData: null },
        { explanation: `The final answer is:`, workingOut: `\\(${result}\\)`, graphData: null }
      ];
    }

    return null;
  }

  // Fetch all y9-1a docs
  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y9-1')
    .get();

  const targets = snap.docs.filter(d => d.id.startsWith('y9-1a-'));
  const parentSet = new Set();
  let updateCount = 0;

  for (const doc of targets) {
    const data = doc.data();
    if (!data.question) continue;

    // Check if has HTML or "quad" string (bad formatting)
    const hasIssue = (data.solutionSteps || []).some(s =>
      (s.workingOut || '').includes('<') || (s.workingOut || '').includes('quad') ||
      (s.explanation || '').includes('{A}') || (s.explanation || '').includes('{h}')
    );
    if (!hasIssue) continue;

    const newSteps = genSteps(doc.id, data.question);
    if (!newSteps) {
      console.log('SKIPPED (no pattern):', doc.id, data.question.substring(0, 60));
      continue;
    }

    await doc.ref.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
    console.log(`Fixed: ${doc.id}`);
    updateCount++;

    const parentId = doc.id.replace(/[a-z]$/, '');
    parentSet.add(parentId);
  }

  // Sync parents
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

  console.log('\nTotal fixed:', updateCount, '| Skipped parents:', parentSet.size);
  process.exit(0);
}

run().catch(console.error);
