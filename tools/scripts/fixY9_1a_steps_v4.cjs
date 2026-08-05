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

    // === 2x - 3y (fractions) ===
    const t7 = q.match(/Evaluate \\?\((\d+)([a-z]) - (\d+)([a-z])\\?\) when \\?\(([a-z]) = (.*?)\\?\) and \\?\(([a-z]) = (.*?)\\?\)/);
    if (t7 && (t7[6].includes('frac') || t7[8].includes('frac'))) {
      const c1=parseInt(t7[1]), v1=t7[2], c2=parseInt(t7[3]), v2=t7[4];
      const xRaw=t7[6], yRaw=t7[8];
      const x=parseFracTex(xRaw), y=parseFracTex(yRaw);
      const t1v=c1*x, t2v=c2*y, result=t1v-t2v;
      return [
        { explanation: `Substitute \\(${v1} = ${xRaw}\\) and \\(${v2} = ${yRaw}\\) into \\(${c1}${v1} - ${c2}${v2}\\).`, workingOut: `\\( ${c1}\\left(${xRaw}\\right) - ${c2}\\left(${yRaw}\\right) \\)`, graphData: null },
        { explanation: `Evaluate each multiplication.`, workingOut: `\\( ${c1} \\times \\left(${xRaw}\\right) = ${frac(t1v)} \\)\n\\( ${c2} \\times \\left(${yRaw}\\right) = ${frac(t2v)} \\)`, graphData: null },
        { explanation: `Subtract the two results.`, workingOut: `\\( ${frac(t1v)} - ${frac(t2v)} = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === p^2 - 2q (fractions) ===
    const t9 = q.match(/Evaluate \\?\(([a-z])\^2 - (\d+)([a-z])\\?\) when \\?\(([a-z]) = (.*?)\\?\) and \\?\(([a-z]) = (.*?)\\?\)/);
    if (t9 && (t9[4].includes('frac') || t9[5].includes('frac'))) {
      const v1=t9[1], c=parseInt(t9[2]), v2=t9[3];
      const p=parseFracTex(t9[4]), q2=parseFracTex(t9[5]);
      const pSq=p*p, cq=c*q2, result=pSq-cq;
      return [
        { explanation: `Substitute \\(${v1} = ${t9[4]}\\) and \\(${v2} = ${t9[5]}\\) into \\(${v1}^{2} - ${c}${v2}\\).`, workingOut: `\\( \\left(${t9[4]}\\right)^{2} - ${c}\\left(${t9[5]}\\right) \\)`, graphData: null },
        { explanation: `Evaluate the power first (BODMAS), then the multiplication.`, workingOut: `\\( \\left(${t9[4]}\\right)^{2} = ${frac(pSq)} \\)\n\\( ${c} \\times \\left(${t9[5]}\\right) = ${frac(cq)} \\)`, graphData: null },
        { explanation: `Subtract to get the final answer.`, workingOut: `\\( ${frac(pSq)} - (${frac(cq)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === 2m(m-3n) with fractions ===
    const t10f = q.match(/Evaluate \\?\((\d+)([a-z])\(([a-z]) - (\d+)([a-z])\)\\?\) when \\?\(([a-z]) = (.*?)\\?\) and \\?\(([a-z]) = (.*?)\\?\)/);
    if (t10f && (t10f[6].includes('frac') || t10f[7].includes('frac'))) {
      const c1=parseInt(t10f[1]), v1=t10f[2], v2=t10f[3], c2=parseInt(t10f[4]), v3=t10f[5];
      const m=parseFracTex(t10f[6]), n=parseFracTex(t10f[7]);
      const outer=c1*m, inner=m-c2*n, result=outer*inner;
      return [
        { explanation: `Substitute \\(${v1} = ${t10f[6]}\\) and \\(${v2} = ${t10f[7]}\\) into \\(${c1}${v1}(${v2} - ${c2}${v3})\\).`, workingOut: `\\( ${c1}\\left(${t10f[6]}\\right)\\left(\\left(${t10f[6]}\\right) - ${c2}\\left(${t10f[7]}\\right)\\right) \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate inside the bracket first.`, workingOut: `Inner: \\( ${t10f[6]} - ${c2} \\times ${t10f[7]} = ${frac(m)} - ${frac(c2*n)} = ${frac(inner)} \\)\nOuter: \\( ${c1} \\times ${t10f[6]} = ${frac(outer)} \\)`, graphData: null },
        { explanation: `Multiply the outer factor by the bracket result.`, workingOut: `\\( ${frac(outer)} \\times (${frac(inner)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === a(2b - c) with fractions ===
    const t11f = q.match(/Evaluate \\?\(([a-z])\((\d+)([a-z]) - ([a-z])\)\\?\) when \\?\(([a-z]) = (.*?)\\?\),? \\?\(([a-z]) = (.*?)\\?\) and \\?\(([a-z]) = (.*?)\\?\)/);
    if (t11f && (t11f[5].includes('frac') || t11f[6].includes('frac') || t11f[7].includes('frac'))) {
      const v1=t11f[1], c=parseInt(t11f[2]), v2=t11f[3], v3=t11f[4];
      const a=parseFracTex(t11f[5]), b=parseFracTex(t11f[6]), cv=parseFracTex(t11f[7]);
      const inner=c*b-cv, result=a*inner;
      return [
        { explanation: `Substitute \\(${v1} = ${t11f[5]}\\), \\(${v2} = ${t11f[6]}\\), \\(${v3} = ${t11f[7]}\\) into \\(${v1}(${c}${v2} - ${v3})\\).`, workingOut: `\\( \\left(${t11f[5]}\\right)\\left(${c}\\left(${t11f[6]}\\right) - \\left(${t11f[7]}\\right)\\right) \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate inside the bracket first.`, workingOut: `\\( ${c} \\times (${t11f[6]}) = ${frac(c*b)} \\)\n\\( ${frac(c*b)} - (${t11f[7]}) = ${frac(inner)} \\)`, graphData: null },
        { explanation: `Multiply by the outer factor.`, workingOut: `\\( (${t11f[5]}) \\times (${frac(inner)}) = ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === v_e = sqrt(2GM/R) ===
    const esc = q.match(/v_e = \\sqrt\{\\frac\{2GM\}\{R\}\}.*?G = ([\d\.]+).*?M = ([\d\.]+).*?R = ([\d\.]+)/s);
    if (esc) {
      const G=parseFloat(esc[1]), M=parseFloat(esc[2]), R=parseFloat(esc[3]);
      const num = 2*G*M, frac_res = num/R, result = Math.sqrt(frac_res);
      return [
        { explanation: `Substitute \\(G = ${G}\\), \\(M = ${M}\\), \\(R = ${R}\\) into \\(v_e = \\sqrt{\\frac{2GM}{R}}\\).`, workingOut: `\\( v_e = \\sqrt{\\frac{2(${G})(${M})}{${R}}} \\)`, graphData: null },
        { explanation: `Evaluate the numerator first, then divide by \\(R\\).`, workingOut: `Numerator: \\( 2 \\times ${G} \\times ${M} = ${num} \\)\nDivide: \\( \\frac{${num}}{${R}} = ${frac_res} \\)`, graphData: null },
        { explanation: `Take the square root.`, workingOut: `\\( \\sqrt{${frac_res}} \\approx ${frac(result)} \\)`, graphData: null }
      ];
    }

    // === Q = mc(T_f - T_i) ===
    const qtherm = q.match(/Q = mc\(T_f - T_i\).*?m = ([\d\.]+).*?c = ([\d\.]+).*?T_i = (-?[\d\.]+).*?T_f = (-?[\d\.]+)/s);
    if (qtherm) {
      const m=parseFloat(qtherm[1]), c=parseFloat(qtherm[2]), ti=parseFloat(qtherm[3]), tf=parseFloat(qtherm[4]);
      const dt=tf-ti, mc=m*c, result=mc*dt;
      return [
        { explanation: `Substitute \\(m = ${m}\\), \\(c = ${c}\\), \\(T_i = ${ti}\\), \\(T_f = ${tf}\\) into \\(Q = mc(T_f - T_i)\\).`, workingOut: `\\( Q = (${m})(${c})(${tf} - (${ti})) \\)`, graphData: null },
        { explanation: `Calculate the change in temperature (inside brackets) and the product \\(mc\\).`, workingOut: `\\( T_f - T_i = ${tf} - (${ti}) = ${dt} \\)\n\\( m \\times c = ${m} \\times ${c} = ${mc} \\)`, graphData: null },
        { explanation: `Multiply the two values together.`, workingOut: `\\( ${mc} \\times ${dt} = ${result} \\)`, graphData: null }
      ];
    }

    // General fallback for any remaining equations if we don't have a specific parser
    return null;
  }

  const snap = await db.collection('questions').where('chapterId', '==', 'y9-1').get();
  const targets = snap.docs.filter(d => d.id.startsWith('y9-1a-'));
  const parentSet = new Set();
  let updateCount = 0;

  for (const doc of targets) {
    const data = doc.data();
    if (!data.question) continue;
    const hasIssue = (data.solutionSteps || []).some(s =>
      (s.workingOut || '').includes('<') || (s.workingOut || '').includes('quad') ||
      (s.explanation || '').includes('{A}') || (s.explanation || '').includes('{h}')
    );
    if (!hasIssue) continue;

    const newSteps = genSteps(doc.id, data.question);
    if (!newSteps) continue;

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

  console.log('\\nTotal fixed:', updateCount);
  process.exit(0);
}

run().catch(console.error);
