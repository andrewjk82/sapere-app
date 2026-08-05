const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function frac(n) {
    // Format number: if integer, show as int, else 2 dp
    const r = Math.round(n * 100) / 100;
    return Number.isInteger(r) ? String(r) : r.toFixed(2);
  }

  function genSteps(id, question) {
    const q = question || '';

    // === a + 2b - 3c (three variable linear) ===
    const t6 = q.match(/Evaluate \\?\(([a-z]) \+ (\d+)([a-z]) - (\d+)([a-z])\\?\) when \\?\(([a-z]) = (-?[\d\.]+(?:\/[\d\.]+)?)\\?\),? \\?\(([a-z]) = (-?[\d\.]+(?:\/[\d\.]+)?)\\?\) and \\?\(([a-z]) = (-?[\d\.]+(?:\/[\d\.]+)?)\\?\)/);
    if (t6) {
      const v1=t6[1], c2=parseInt(t6[2]), v2=t6[3], c3=parseInt(t6[4]), v3=t6[5];
      const aVal=parseFloat(t6[7]), bVal=parseFloat(t6[9]), cVal=parseFloat(t6[11]);
      const t1=aVal, t2=c2*bVal, t3=c3*cVal, result=t1+t2-t3;
      return [
        { explanation: `Substitute \\(${v1} = ${aVal}\\), \\(${v2} = ${bVal}\\), \\(${v3} = ${cVal}\\) into the expression \\(${v1} + ${c2}${v2} - ${c3}${v3}\\).`, workingOut: `\\( (${aVal}) + ${c2}(${bVal}) - ${c3}(${cVal}) \\)`, graphData: null },
        { explanation: `Evaluate each multiplication first.`, workingOut: `\\( ${c2} \\times (${bVal}) = ${frac(t2)} \\)\n\\( ${c3} \\times (${cVal}) = ${frac(t3)} \\)`, graphData: null },
        { explanation: `Now combine the terms: add the first two, then subtract the third.`, workingOut: `\\( (${frac(t1)}) + (${frac(t2)}) - (${frac(t3)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === 2x - 3y (fractions) ===
    const t7 = q.match(/Evaluate \\?\((\d+)([a-z]) - (\d+)([a-z])\\?\) when \\?\(([a-z]) = (-?[\d\/\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\/\.]+)\\?\)/);
    if (t7) {
      const c1=parseInt(t7[1]), v1=t7[2], c2=parseInt(t7[3]), v2=t7[4];
      const xRaw=t7[6], yRaw=t7[8];
      const evalFrac = (s) => { const m = s.match(/(-?\d+)\/(-?\d+)/); return m ? parseInt(m[1])/parseInt(m[2]) : parseFloat(s); };
      const x=evalFrac(xRaw), y=evalFrac(yRaw);
      const t1v=c1*x, t2v=c2*y, result=t1v-t2v;
      return [
        { explanation: `Substitute \\(${v1} = ${xRaw}\\) and \\(${v2} = ${yRaw}\\) into \\(${c1}${v1} - ${c2}${v2}\\).`, workingOut: `\\( ${c1}\\left(${xRaw}\\right) - ${c2}\\left(${yRaw}\\right) \\)`, graphData: null },
        { explanation: `Evaluate each multiplication.`, workingOut: `\\( ${c1} \\times \\left(${xRaw}\\right) = ${frac(t1v)} \\)\n\\( ${c2} \\times \\left(${yRaw}\\right) = ${frac(t2v)} \\)`, graphData: null },
        { explanation: `Subtract the two results.`, workingOut: `\\( ${frac(t1v)} - ${frac(t2v)} = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === (x + y) / k ===
    const t12 = q.match(/Evaluate \\?\(\\frac\{([a-z])\+([a-z])\}\{(\d+)\}\\?\) when \\?\(([a-z]) = (-?[\d\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\.]+)\\?\)/);
    if (t12) {
      const v1=t12[1], v2=t12[2], k=parseInt(t12[3]), x=parseFloat(t12[5]), y=parseFloat(t12[7]);
      const num=x+y, result=num/k;
      return [
        { explanation: `Substitute \\(${v1} = ${x}\\) and \\(${v2} = ${y}\\) into \\(\\frac{${v1}+${v2}}{${k}}\\).`, workingOut: `\\( \\frac{(${x}) + (${y})}{${k}} \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate the numerator (top) first.`, workingOut: `\\( (${x}) + (${y}) = ${frac(num)} \\)`, graphData: null },
        { explanation: `Divide the numerator by ${k}.`, workingOut: `\\( \\frac{${frac(num)}}{${k}} = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === (p + 2q) / (3r) ===
    const t13 = q.match(/Evaluate \\?\(\\frac\{([a-z])\+(\d+)([a-z])\}\{(\d+)([a-z])\}\\?\) when \\?\(([a-z]) = (-?[\d\.]+)\\?\),? \\?\(([a-z]) = (-?[\d\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\.]+)\\?\)/);
    if (t13) {
      const v1=t13[1], c2=parseInt(t13[2]), v2=t13[3], c3=parseInt(t13[4]), v3=t13[5];
      const p=parseFloat(t13[7]), q2=parseFloat(t13[9]), r=parseFloat(t13[11]);
      const num=p+c2*q2, den=c3*r, result=num/den;
      return [
        { explanation: `Substitute \\(${v1} = ${p}\\), \\(${v2} = ${q2}\\), \\(${v3} = ${r}\\) into \\(\\frac{${v1}+${c2}${v2}}{${c3}${v3}}\\).`, workingOut: `\\( \\frac{(${p}) + ${c2}(${q2})}{${c3}(${r})} \\)`, graphData: null },
        { explanation: `Evaluate numerator and denominator separately.`, workingOut: `Numerator: \\( (${p}) + ${c2} \\times (${q2}) = ${p} + (${frac(c2*q2)}) = ${frac(num)} \\)\nDenominator: \\( ${c3} \\times (${r}) = ${frac(den)} \\)`, graphData: null },
        { explanation: `Divide the numerator by the denominator.`, workingOut: `\\( \\frac{${frac(num)}}{${frac(den)}} = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === p^2 - 2q ===
    const t9 = q.match(/Evaluate \\?\(([a-z])\^2 - (\d+)([a-z])\\?\) when \\?\(([a-z]) = (-?[\d\/\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\/\.]+)\\?\)/);
    if (t9) {
      const v1=t9[1], c=parseInt(t9[2]), v2=t9[3];
      const evalFrac = (s) => { const m = s.match(/(-?\d+)\/(-?\d+)/); return m ? parseInt(m[1])/parseInt(m[2]) : parseFloat(s); };
      const p=evalFrac(t9[5]), q2=evalFrac(t9[7]);
      const pSq=p*p, cq=c*q2, result=pSq-cq;
      return [
        { explanation: `Substitute \\(${v1} = ${t9[5]}\\) and \\(${v2} = ${t9[7]}\\) into \\(${v1}^{2} - ${c}${v2}\\).`, workingOut: `\\( \\left(${t9[5]}\\right)^{2} - ${c}\\left(${t9[7]}\\right) \\)`, graphData: null },
        { explanation: `Evaluate the power first (BODMAS), then the multiplication.`, workingOut: `\\( \\left(${t9[5]}\\right)^{2} = ${frac(pSq)} \\)\n\\( ${c} \\times \\left(${t9[7]}\\right) = ${frac(cq)} \\)`, graphData: null },
        { explanation: `Subtract to get the final answer.`, workingOut: `\\( ${frac(pSq)} - (${frac(cq)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === 2m(m-3n) with fractions ===
    const t10f = q.match(/Evaluate \\?\((\d+)([a-z])\(([a-z]) - (\d+)([a-z])\)\\?\) when \\?\(([a-z]) = (-?[\d\/\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\/\.]+)\\?\)/);
    if (t10f) {
      const c1=parseInt(t10f[1]), v1=t10f[2], v2=t10f[3], c2=parseInt(t10f[4]), v3=t10f[5];
      const evalFrac = (s) => { const m=s.match(/(-?\d+)\/(-?\d+)/); return m ? parseInt(m[1])/parseInt(m[2]) : parseFloat(s); };
      const m=evalFrac(t10f[7]), n=evalFrac(t10f[9]);
      const outer=c1*m, inner=m-c2*n, result=outer*inner;
      return [
        { explanation: `Substitute \\(${v1} = ${t10f[7]}\\) and \\(${v2} = ${t10f[9]}\\) into \\(${c1}${v1}(${v2} - ${c2}${v3})\\).`, workingOut: `\\( ${c1}\\left(${t10f[7]}\\right)\\left(\\left(${t10f[7]}\\right) - ${c2}\\left(${t10f[9]}\\right)\\right) \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate inside the bracket first.`, workingOut: `Inner: \\( ${t10f[7]} - ${c2} \\times ${t10f[9]} = ${frac(m)} - ${frac(c2*n)} = ${frac(inner)} \\)\nOuter: \\( ${c1} \\times ${t10f[7]} = ${frac(outer)} \\)`, graphData: null },
        { explanation: `Multiply the outer factor by the bracket result.`, workingOut: `\\( ${frac(outer)} \\times (${frac(inner)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === a(2b - c) with fractions ===
    const t11f = q.match(/Evaluate \\?\(([a-z])\((\d+)([a-z]) - ([a-z])\)\\?\) when \\?\(([a-z]) = (-?[\d\/\.]+)\\?\),? \\?\(([a-z]) = (-?[\d\/\.]+)\\?\) and \\?\(([a-z]) = (-?[\d\/\.]+)\\?\)/);
    if (t11f) {
      const v1=t11f[1], c=parseInt(t11f[2]), v2=t11f[3], v3=t11f[4];
      const evalFrac = (s) => { const m=s.match(/(-?\d+)\/(-?\d+)/); return m ? parseInt(m[1])/parseInt(m[2]) : parseFloat(s); };
      const a=evalFrac(t11f[6]), b=evalFrac(t11f[8]), cv=evalFrac(t11f[10]);
      const inner=c*b-cv, result=a*inner;
      return [
        { explanation: `Substitute \\(${v1} = ${t11f[6]}\\), \\(${v2} = ${t11f[8]}\\), \\(${v3} = ${t11f[10]}\\) into \\(${v1}(${c}${v2} - ${v3})\\).`, workingOut: `\\( \\left(${t11f[6]}\\right)\\left(${c}\\left(${t11f[8]}\\right) - \\left(${t11f[10]}\\right)\\right) \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate inside the bracket first.`, workingOut: `\\( ${c} \\times (${t11f[8]}) = ${frac(c*b)} \\)\n\\( ${frac(c*b)} - (${t11f[10]}) = ${frac(inner)} \\)`, graphData: null },
        { explanation: `Multiply by the outer factor.`, workingOut: `\\( (${t11f[6]}) \\times (${frac(inner)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === rho = m/V (density) ===
    const densityMatch = q.match(/density \\?\(\\rho = \\frac\{m\}\{V\}\\?\).*?m = ([\d\.]+).*?V = ([\d\.]+)/s);
    if (densityMatch) {
      const m=parseFloat(densityMatch[1]), V=parseFloat(densityMatch[2]);
      const result=parseFloat((m/V).toFixed(4));
      return [
        { explanation: `Substitute \\(m = ${m}\\) and \\(V = ${V}\\) into the density formula \\(\\rho = \\frac{m}{V}\\).`, workingOut: `\\( \\rho = \\frac{${m}}{${V}} \\)`, graphData: null },
        { explanation: `Divide the mass by the volume.`, workingOut: `\\( \\rho = ${m} \\div ${V} = ${result} \\)`, graphData: null },
        { explanation: `The final density is:`, workingOut: `\\(${result}\\)`, graphData: null }
      ];
    }

    // === z-score: z = (x - mu) / sigma ===
    const zMatch = q.match(/z = \\frac\{x - \\mu\}\{\\sigma\}.*?x = ([\d\.]+).*?\\mu = ([\d\.]+).*?\\sigma = ([\d\.]+)/s);
    if (zMatch) {
      const x=parseFloat(zMatch[1]), mu=parseFloat(zMatch[2]), sigma=parseFloat(zMatch[3]);
      const num=parseFloat((x-mu).toFixed(4)), result=parseFloat((num/sigma).toFixed(4));
      return [
        { explanation: `Substitute \\(x = ${x}\\), \\(\\mu = ${mu}\\), \\(\\sigma = ${sigma}\\) into the z-score formula \\(z = \\frac{x - \\mu}{\\sigma}\\).`, workingOut: `\\( z = \\frac{${x} - ${mu}}{${sigma}} \\)`, graphData: null },
        { explanation: `Evaluate the numerator first.`, workingOut: `\\( ${x} - ${mu} = ${num} \\)`, graphData: null },
        { explanation: `Divide by the standard deviation.`, workingOut: `\\( z = \\frac{${num}}{${sigma}} = ${result} \\)`, graphData: null }
      ];
    }

    // === General complex formulas — parse from solutionSteps ===
    return null;
  }

  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y9-1')
    .get();

  const targets = snap.docs.filter(d => d.id.startsWith('y9-1a-'));
  const parentSet = new Set();
  let updateCount = 0, skipCount = 0;

  for (const doc of targets) {
    const data = doc.data();
    if (!data.question) continue;
    const hasIssue = (data.solutionSteps || []).some(s =>
      (s.workingOut || '').includes('<') || (s.workingOut || '').includes('quad') ||
      (s.explanation || '').includes('{A}') || (s.explanation || '').includes('{h}')
    );
    if (!hasIssue) continue;

    const newSteps = genSteps(doc.id, data.question);
    if (!newSteps) {
      skipCount++;
      console.log('SKIP:', doc.id, data.question.substring(0, 50));
      continue;
    }

    await doc.ref.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
    console.log(`Fixed: ${doc.id}`);
    updateCount++;
    const parentId = doc.id.replace(/[a-z]$/, '');
    parentSet.add(parentId);
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

  console.log('\nFixed:', updateCount, '| Skipped:', skipCount);
  process.exit(0);
}

run().catch(console.error);
