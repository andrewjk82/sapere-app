const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Build correct options based on question type
  function fixOptions(id, question, currentOpts, currentAnswer) {
    const text = (t) => ({ text: t, imageUrl: '' });

    // q5: n^p * n^q — simple variable multiplication
    if (id.includes('y9-8a-5')) {
      const m = question.match(/\\\((\d+)?([a-z])\^?\{?(\d+)\}? \\times (\d+)?([a-z])\^?\{?(\d+)\}?\\\)/);
      if (!m) return null;
      const c1 = parseInt(m[1]||1), v = m[2], p1 = parseInt(m[3]);
      const c2 = parseInt(m[4]||1), p2 = parseInt(m[6]);
      const coeff = c1 * c2;
      const pAns = p1 + p2;
      const correctStr = coeff === 1 ? `\\(${v}^{${pAns}}\\)` : `\\(${coeff}${v}^{${pAns}}\\)`;
      const opts = [
        text(correctStr),
        text(coeff === 1 ? `\\(${v}^{${p1 * p2}}\\)` : `\\(${coeff}${v}^{${p1 * p2}}\\)`), // multiplied instead of added
        text(coeff === 1 ? `\\(${v}^{${pAns + 2}}\\)` : `\\(${coeff}${v}^{${pAns + 2}}\\)`), // off by 2
        text(coeff === 1 ? `\\(${v}^{${p1}}\\)` : `\\(${coeff}${v}^{${p1}}\\)`),             // forgot second term
      ];
      return { options: [opts[1], opts[2], opts[3], opts[0]], answer: '3' };
    }

    // q10: y^p * ... = y^q  or  y^p / ... = y^q
    if (id.includes('y9-8a-10')) {
      const m = question.match(/\\\(([a-z])\^?\{?(\d+)\}? (\\times|\\div) \.\.\. = ([a-z])\^?\{?(\d+)\}?\\\)/);
      if (!m) return null;
      const v = m[1], p1 = parseInt(m[2]), op = m[3], p2 = parseInt(m[5]);
      const ans = op === '\\times' ? p2 - p1 : p1 - p2;
      const correct = `\\(${v}^{${ans}}\\)`;
      const opts = [
        text(correct),
        text(`\\(${v}^{${ans + 1}}\\)`),
        text(`\\(${v}^{${ans - 1 < 0 ? ans + 2 : ans - 1}}\\)`),
        text(`\\(${v}^{${p1 + p2}}\\)`),
      ];
      // Shuffle: correct at index 3
      return { options: [opts[1], opts[2], opts[3], opts[0]], answer: '3' };
    }

    // q11: frac{Nv^p}{Mv^q} — division with coefficient
    if (id.includes('y9-8a-11')) {
      const fracM = question.match(/frac\{([\d\.]+)([a-z])\^?\{?(\d+)\}?\}\{([\d\.]+)([a-z])\^?\{?(\d+)\}?\}/);
      if (!fracM) return null;
      const nc = parseFloat(fracM[1]), v = fracM[2], np = parseInt(fracM[3]);
      const dc = parseFloat(fracM[4]), dp = parseInt(fracM[6]);
      const coeff = nc / dc;
      const pAns = np - dp;
      const correct = pAns === 0 ? `\\(${coeff}\\)` : (coeff === 1 ? `\\(${v}^{${pAns}}\\)` : `\\(${coeff}${v}^{${pAns}}\\)`);
      const opts = [
        text(correct),
        text(coeff === 1 ? `\\(${v}^{${pAns + 2}}\\)` : `\\(${coeff}${v}^{${pAns + 2}}\\)`),
        text(coeff === 1 ? `\\(${v}^{${np + dp}}\\)` : `\\(${coeff}${v}^{${np + dp}}\\)`),
        text(coeff === 1 ? `\\(2${v}^{${pAns}}\\)` : `\\(${nc}${v}^{${pAns}}\\)`),
      ];
      // Deduplicate
      const seen = new Set();
      const unique = opts.filter(o => { const t = o.text; if(seen.has(t)) return false; seen.add(t); return true; });
      while(unique.length < 4) unique.push(text(`\\(${coeff + 1}${v}^{${pAns}}\\)`));
      return { options: [unique[1], unique[2], unique[3], unique[0]], answer: '3' };
    }

    // q15: (v^p)^k / (v^p)^j
    if (id.includes('y9-8a-15')) {
      const m = question.match(/\\frac\{\(([a-z])\^?\{?(\d+)\}?\)\^(\d+)\}\{\(([a-z])\^?\{?(\d+)\}?\)\^(\d+)\}/);
      if (!m) return null;
      const v = m[1], p1 = parseInt(m[2]), k1 = parseInt(m[3]), p2 = parseInt(m[5]), k2 = parseInt(m[6]);
      const num = p1 * k1, den = p2 * k2;
      const exp = num - den; // negative
      const correct = exp === 0 ? `\\(1\\)` : `\\(\\frac{1}{${v}^{${Math.abs(exp)}}}\\)`;
      const opts = [
        text(correct),
        text(`\\(${v}^{${Math.abs(exp)}}\\)`),   // forgot to flip
        text(`\\(1\\)`),                          // wrong
        text(`\\(${Math.abs(exp)}\\)`),           // bare number
      ];
      const seen = new Set();
      const unique = opts.filter(o => { const t = o.text; if(seen.has(t)) return false; seen.add(t); return true; });
      while(unique.length < 4) unique.push(text(`\\(\\frac{1}{${v}^{${Math.abs(exp)+1}}}\\)`));
      return { options: [unique[1], unique[2], unique[3], unique[0]], answer: '3' };
    }

    // q19: (2a^2b)^2 * 3ab^3 etc
    if (id.includes('y9-8a-19')) {
      const m = question.match(/\\\(\((\d+)([a-z])\^(\d+)([a-z])\)\^(\d+) \\times (\d+)([a-z])([a-z])\^(\d+)\\\)/);
      if (!m) return null;
      const N = parseInt(m[1]), v1 = m[2], p1 = parseInt(m[3]), v2 = m[4], k = parseInt(m[5]);
      const c2 = parseInt(m[6]), p3 = parseInt(m[9]);
      const coeff = Math.pow(N, k) * c2;
      const expV1 = p1 * k + 1;
      const expV2 = k + p3;
      const correct = `\\(${coeff}${v1}^{${expV1}}${v2}^{${expV2}}\\)`;
      const opts = [
        text(correct),
        text(`\\(${coeff}${v1}^{${expV1 - 1}}${v2}^{${expV2 + 1}}\\)`),
        text(`\\(${c2 + N}${v1}^{${expV1}}${v2}^{${expV2}}\\)`),
        text(`\\(${coeff}${v1}^{${expV1 + 1}}${v2}^{${expV2 - 1}}\\)`),
      ];
      return { options: [opts[0], opts[1], opts[2], opts[3]], answer: '0' };
    }

    return null;
  }

  // Get all problem docs
  const snap = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-8a')
    .where(FieldPath.documentId(), '<=', 'y9-8a\uf8ff')
    .get();

  let updateCount = 0;
  const parentUpdates = new Set();

  for (const doc of snap.docs) {
    const data = doc.data();
    const opts = (data.options || []).map(o => o.text);
    const seen = new Set();
    const hasDuplicate = opts.some(o => { if(seen.has(o)) return true; seen.add(o); return false; });
    const hasPlaceholder = opts.some(o => o.includes('100'));
    
    if (!hasDuplicate && !hasPlaceholder) continue;

    const result = fixOptions(doc.id, data.question, data.options, data.answer);
    if (!result) {
      console.log('Could not auto-fix:', doc.id, opts);
      continue;
    }

    await doc.ref.update({
      options: result.options,
      answer: result.answer,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log('Fixed:', doc.id);
    updateCount++;

    // Track parent
    const parentId = doc.id.replace(/[a-z]$/, '');
    parentUpdates.add(parentId);
  }

  // Update all affected parent docs
  for (const parentId of parentUpdates) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, options: cSnap.data().options, answer: cSnap.data().answer } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
      console.log('Updated parent:', parentId);
    }
  }

  console.log('\nTotal fixed:', updateCount);
  process.exit(0);
}

run().catch(console.error);
