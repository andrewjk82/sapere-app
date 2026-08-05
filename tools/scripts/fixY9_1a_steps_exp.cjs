const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function genSteps(id, question) {
    const q = question || '';

    // === q21: V = P(1 + r)^t ===
    const t21 = q.match(/V = P\(1 \+ r\)\^t.*?P = ([\d\.]+).*?r = ([\d\.]+).*?t = ([\d\.]+)/s);
    if (t21) {
      const P = parseFloat(t21[1]), r = parseFloat(t21[2]), t = parseInt(t21[3]);
      const base = 1 + r;
      const power = Math.pow(base, t);
      const result = P * power;
      const rounded = Math.round(result);
      return [
        { explanation: `Substitute principal \\(P = ${P}\\), rate \\(r = ${r}\\), and time \\(t = ${t}\\) into the compound interest formula \\(V = P(1 + r)^t\\).`, workingOut: `\\( V = ${P}(1 + ${r})^{${t}} \\)`, graphData: null },
        { explanation: `First, calculate the value inside the parentheses, then raise it to the power of \\(${t}\\).`, workingOut: `\\( (1 + ${r}) = ${base} \\)\n\\( (${base})^{${t}} \\approx ${power.toFixed(6)} \\)`, graphData: null },
        { explanation: `Multiply by the principal \\(P\\), and finally round to the nearest integer as requested.`, workingOut: `\\( ${P} \\times ${power.toFixed(6)} = ${result.toFixed(2)} \\approx ${rounded} \\)`, graphData: null }
      ];
    }

    // === q36: V = V_0(1 - d)^t - M ===
    const t36 = q.match(/V = V_0\(1 - d\)\^t - M.*?V_0 = ([\d\.]+).*?d = ([\d\.]+).*?t = ([\d\.]+).*?M = ([\d\.]+)/s);
    if (t36) {
      const V0 = parseFloat(t36[1]), d = parseFloat(t36[2]), t = parseInt(t36[3]), M = parseFloat(t36[4]);
      const base = 1 - d;
      const power = Math.pow(base, t);
      const val = V0 * power;
      const result = val - M;
      return [
        { explanation: `Substitute \\(V_0 = ${V0}\\), \\(d = ${d}\\), \\(t = ${t}\\), and \\(M = ${M}\\) into the depreciation formula \\(V = V_0(1 - d)^t - M\\).`, workingOut: `\\( V = ${V0}(1 - ${d})^{${t}} - ${M} \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate the parentheses and power first.`, workingOut: `\\( 1 - ${d} = ${base} \\)\n\\( (${base})^{${t}} = ${power.toFixed(3)} \\)`, graphData: null },
        { explanation: `Multiply by \\(V_0\\), then subtract the maintenance cost \\(M\\).`, workingOut: `\\( ${V0} \\times ${power.toFixed(3)} = ${val} \\)\n\\( ${val} - ${M} = ${result} \\)`, graphData: null }
      ];
    }

    // === q44: D = 1/(1+r)^t - c ===
    const t44 = q.match(/D = \\frac\{1\}\{\(1 \+ r\)\^t\} - c.*?r = ([\d\.]+).*?t = ([\d\.]+).*?c = ([\d\.]+)/s);
    if (t44) {
      const r = parseFloat(t44[1]), t = parseInt(t44[2]), c = parseFloat(t44[3]);
      const base = 1 + r;
      const power = Math.pow(base, t);
      const frac = 1 / power;
      const result = frac - c;
      const rounded = result.toFixed(3);
      return [
        { explanation: `Substitute \\(r = ${r}\\), \\(t = ${t}\\), and \\(c = ${c}\\) into the discount factor formula \\(D = \\frac{1}{(1 + r)^t} - c\\).`, workingOut: `\\( D = \\frac{1}{(1 + ${r})^{${t}}} - ${c} \\)`, graphData: null },
        { explanation: `Evaluate the denominator first by adding inside the parentheses, then raising to the power.`, workingOut: `\\( 1 + ${r} = ${base} \\)\n\\( (${base})^{${t}} = ${power.toFixed(4)} \\)`, graphData: null },
        { explanation: `Divide 1 by the denominator, subtract \\(c\\), and round to three decimal places.`, workingOut: `\\( \\frac{1}{${power.toFixed(4)}} \\approx ${frac.toFixed(4)} \\)\n\\( ${frac.toFixed(4)} - ${c} = ${result.toFixed(4)} \\approx ${rounded} \\)`, graphData: null }
      ];
    }

    return null;
  }

  const snap = await db.collection('questions').where('chapterId', '==', 'y9-1').get();
  const targets = snap.docs.filter(d => ['y9-1a-q21', 'y9-1a-q36', 'y9-1a-q44'].includes(d.id));
  
  const parentSet = new Set();
  for (const doc of targets) {
    const data = doc.data();
    const newSteps = genSteps(doc.id, data.question);
    if (newSteps) {
      await doc.ref.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
      console.log(`Fixed custom: ${doc.id}`);
      parentSet.add(doc.id.replace(/[a-z]$/, ''));
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
  process.exit(0);
}

run().catch(console.error);
