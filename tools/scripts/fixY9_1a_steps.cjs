const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Helper: extract values from question text
  function parseVarQuestion(q) {
    // Simple: Evaluate \(3a\) when \(a = 7\)
    const simple = q.match(/Evaluate \\?\(?([^)\\]+)\\?\)? when \\?\(?([a-z]) = (-?[\d\.]+)\\?\)/);
    if (simple) return { expr: simple[1], vars: { [simple[2]]: parseFloat(simple[3]) } };
    return null;
  }

  function genStepsForDoc(id, question) {
    const q = question;
    let steps = null;

    // === TYPE 1: Evaluate \(3a\) when \(a = 7\) — single variable, single term ===
    const t1 = q.match(/Evaluate \\?\((\d+)([a-z])\\?\) when \\?\(([a-z]) = (-?[\d\.]+)\\?\)/);
    if (t1) {
      const coeff = parseInt(t1[1]), v = t1[2], val = parseFloat(t1[4]);
      const result = coeff * val;
      return [
        { explanation: `We need to substitute the given value of \\(${v}\\) into the expression \\(${coeff}${v}\\). This means replacing every \\(${v}\\) in the expression with \\(${val}\\).`, workingOut: `\\( ${coeff}${v} = ${coeff} \\times ${val} \\)`, graphData: null },
        { explanation: `Now perform the multiplication. Remember: a number multiplied by another number gives the product.`, workingOut: `\\( ${coeff} \\times ${val} = ${result} \\)`, graphData: null },
        { explanation: `The final answer is:`, workingOut: `\\(${result}\\)`, graphData: null }
      ];
    }

    // === TYPE 2: Evaluate \(12x\) when \(x = -5\) — single variable, negative value ===
    const t2 = q.match(/Evaluate \\?\((\d+)([a-z])\\?\) when \\?\(([a-z]) = (-?[\d\.]+)\\?\)/);
    if (t2) {
      const coeff = parseInt(t2[1]), v = t2[2], val = parseFloat(t2[4]);
      const result = coeff * val;
      const signNote = val < 0 ? `When multiplying a positive number by a negative number, the result is negative: \\( (+) \\times (-) = (-) \\).` : '';
      return [
        { explanation: `Substitute \\(${v} = ${val}\\) into the expression \\(${coeff}${v}\\).`, workingOut: `\\( ${coeff}${v} = ${coeff} \\times (${val}) \\)`, graphData: null },
        { explanation: signNote || `Perform the multiplication.`, workingOut: `\\( ${coeff} \\times (${val}) = ${result} \\)`, graphData: null },
        { explanation: 'Final answer:', workingOut: `\\(${result}\\)`, graphData: null }
      ];
    }

    // === TYPE 3: Evaluate \(7m - 4n\) — two variables, linear ===
    const t3 = q.match(/Evaluate \\?\((-?\d+)([a-z]) ([+-]) (\d+)([a-z])\\?\) when \\?\(([a-z]) = (-?[\d\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\.]+)\\?\)/);
    if (t3) {
      const a = parseInt(t3[1]), v1 = t3[2], op = t3[3], b = parseInt(t3[4]), v2 = t3[5];
      const x = parseFloat(t3[7]), y = parseFloat(t3[9]);
      const t1val = a * x;
      const t2val = b * y;
      const result = op === '+' ? t1val + t2val : t1val - t2val;
      return [
        { explanation: `Substitute \\(${v1} = ${x}\\) and \\(${v2} = ${y}\\) into the expression \\(${a}${v1} ${op} ${b}${v2}\\).`, workingOut: `\\( ${a}(${x}) ${op} ${b}(${y}) \\)`, graphData: null },
        { explanation: `Evaluate each multiplication separately.`, workingOut: `\\( ${a} \\times ${x} = ${t1val} \\)\n\\( ${b} \\times ${y} = ${t2val} \\)`, graphData: null },
        { explanation: `Now ${op === '+' ? 'add' : 'subtract'} the two results. ${result < 0 && t1val > 0 && t2val > 0 ? 'The second term is larger, so the result is negative.' : ''}`, workingOut: `\\( ${t1val} ${op} ${Math.abs(t2val)} = ${result} \\)`, graphData: null }
      ];
    }

    // === TYPE 4: Evaluate \(4x + 9y\) ===
    const t4 = q.match(/Evaluate \\?\((-?\d+)([a-z]) \+ (\d+)([a-z])\\?\) when \\?\(([a-z]) = (-?[\d\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\.]+)\\?\)/);
    if (t4) {
      const a = parseInt(t4[1]), v1 = t4[2], b = parseInt(t4[3]), v2 = t4[4];
      const x = parseFloat(t4[6]), y = parseFloat(t4[8]);
      const t1v = a * x, t2v = b * y, result = t1v + t2v;
      const doubleNeg = x < 0 || y < 0;
      return [
        { explanation: `Substitute \\(${v1} = ${x}\\) and \\(${v2} = ${y}\\) into the expression \\(${a}${v1} + ${b}${v2}\\).`, workingOut: `\\( ${a}(${x}) + ${b}(${y}) \\)`, graphData: null },
        { explanation: `Evaluate each multiplication separately.${doubleNeg ? ' When multiplying by a negative number, the sign of the term changes.' : ''}`, workingOut: `\\( ${a} \\times (${x}) = ${t1v} \\)\n\\( ${b} \\times (${y}) = ${t2v} \\)`, graphData: null },
        { explanation: `Add the two terms together.`, workingOut: `\\( ${t1v} + (${t2v}) = ${result} \\)`, graphData: null }
      ];
    }

    // === TYPE 5: Evaluate \(p - 2q\) ===
    const t5 = q.match(/Evaluate \\?\(([a-z]) - (\d+)([a-z])\\?\) when \\?\(([a-z]) = (-?[\d\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\.]+)\\?\)/);
    if (t5) {
      const v1 = t5[1], coeff = parseInt(t5[2]), v2 = t5[3];
      const x = parseFloat(t5[5]), y = parseFloat(t5[7]);
      const t2v = coeff * y, result = x - t2v;
      const doubleNeg = y < 0;
      return [
        { explanation: `Substitute \\(${v1} = ${x}\\) and \\(${v2} = ${y}\\) into the expression \\(${v1} - ${coeff}${v2}\\).`, workingOut: `\\( (${x}) - ${coeff}(${y}) \\)`, graphData: null },
        { explanation: `Evaluate the multiplication first.${doubleNeg ? ` Note: \\( ${coeff} \\times (${y}) = ${t2v} \\). Subtracting a negative is the same as adding its positive: \\( - (${t2v}) = +${Math.abs(t2v)} \\).` : ''}`, workingOut: `\\( ${coeff} \\times (${y}) = ${t2v} \\)\n\\( (${x}) - (${t2v}) \\)`, graphData: null },
        { explanation: `Perform the final subtraction.`, workingOut: `\\( ${x} - (${t2v}) = ${x} ${t2v < 0 ? '+' : '-'} ${Math.abs(t2v)} = ${result} \\)`, graphData: null }
      ];
    }

    // === TYPE 6: Evaluate \(2m(m - 3n)\) — bracket with product outside ===
    const t6 = q.match(/Evaluate \\?\((\d+)([a-z])\(([a-z]) - (\d+)([a-z])\)\\?\) when \\?\(([a-z]) = (-?[\d\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\.]+)\\?\)/);
    if (t6) {
      const coeff1 = parseInt(t6[1]), outer = t6[2], inner1 = t6[3], coeff2 = parseInt(t6[4]), inner2 = t6[5];
      const m = parseFloat(t6[7]), n = parseFloat(t6[9]);
      const outerFactor = coeff1 * m;
      const bracketInner = m - coeff2 * n;
      const result = outerFactor * bracketInner;
      return [
        { explanation: `Substitute \\(${outer} = ${m}\\) and \\(${inner2} = ${n}\\) into the expression \\(${coeff1}${outer}(${inner1} - ${coeff2}${inner2})\\).`, workingOut: `\\( ${coeff1}(${m})\\big((${m}) - ${coeff2}(${n})\\big) \\)`, graphData: null },
        { explanation: `Use BODMAS: evaluate inside the brackets first. Calculate \\(${coeff2} \\times ${n} = ${coeff2 * n}\\), then subtract.`, workingOut: `Inside bracket: \\( ${m} - ${coeff2 * n} = ${bracketInner} \\)\nOutside factor: \\( ${coeff1} \\times ${m} = ${outerFactor} \\)`, graphData: null },
        { explanation: `Now multiply the outside factor by the bracket result.${outerFactor < 0 || bracketInner < 0 ? ` Remember: \\( (${outerFactor}) \\times (${bracketInner}) \\) — when multiplying two negatives, the result is positive.` : ''}`, workingOut: `\\( ${outerFactor} \\times (${bracketInner}) = ${result} \\)`, graphData: null }
      ];
    }

    // === TYPE 7: Evaluate \(a(2b - c)\) ===
    const t7 = q.match(/Evaluate \\?\(([a-z])\((\d+)([a-z]) - ([a-z])\)\\?\) when \\?\(([a-z]) = (-?[\d\.]+)\\?\),? \\?\(([a-z]) = (-?[\d\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\.]+)\\?\)/);
    if (t7) {
      const v1 = t7[1], c2 = parseInt(t7[2]), v2 = t7[3], v3 = t7[4];
      const a = parseFloat(t7[6]), b = parseFloat(t7[8]), c = parseFloat(t7[10]);
      const bracket = c2 * b - c;
      const result = a * bracket;
      return [
        { explanation: `Substitute \\(${v1} = ${a}\\), \\(${v2} = ${b}\\), \\(${v3} = ${c}\\) into the expression \\(${v1}(${c2}${v2} - ${v3})\\).`, workingOut: `\\( (${a})\\big(${c2}(${b}) - (${c})\\big) \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate inside the brackets first. Calculate each multiplication before subtracting.`, workingOut: `\\( ${c2} \\times (${b}) = ${c2 * b} \\)\n\\( ${c2 * b} - (${c}) = ${bracket} \\)`, graphData: null },
        { explanation: `Now multiply the outside factor by the simplified bracket.${a < 0 && bracket < 0 ? ' Two negatives multiplied give a positive result.' : ''}`, workingOut: `\\( (${a}) \\times (${bracket}) = ${result} \\)`, graphData: null }
      ];
    }

    return null;
  }

  // Get all y9-1a subquestions (q1 through q11d)
  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y9-1')
    .get();

  // Filter to y9-1a only and those that have solutionSteps with HTML garbage
  const y9_1a_docs = snap.docs.filter(d => d.id.startsWith('y9-1a-'));
  
  let updateCount = 0;
  const parentSet = new Set();

  for (const doc of y9_1a_docs) {
    const data = doc.data();
    if (!data.question) continue;
    
    // Check if steps have HTML
    const hasHTML = (data.solutionSteps || []).some(s => (s.workingOut || '').includes('<'));
    if (!hasHTML) continue;  // skip already-fixed ones

    const newSteps = genStepsForDoc(doc.id, data.question);
    if (!newSteps) continue;

    await doc.ref.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
    console.log(`Fixed: ${doc.id}`);
    updateCount++;

    // Track parent
    const parentId = doc.id.replace(/[a-z]$/, '');
    parentSet.add(parentId);
  }

  // Sync parent subQuestions
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

  console.log('\nTotal fixed:', updateCount);
  process.exit(0);
}

run().catch(console.error);
