const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function reconstructQuestion(id, title, steps, correctAnswer) {
    const s = steps || [];
    const lastStep = s[s.length - 1] || {};
    const midStep = s[1] || {};
    const workingOut = midStep.workingOut || '';
    const explanation = s[0] ? s[0].explanation : '';

    // === Pattern 1: Quadratic ax^2 + bx + c at x=k ===
    // workingOut like: \((k)^2 = A, quad b * A = B, quad c * (k) = C\)
    // sum: B + C + const = answer
    const quadMatch = workingOut.match(/\\?\((-?[\d\.]+)\)\^2 = ([\d\.]+),.*?(-?[\d\.]+) \\times ([\d\.]+) = (-?[\d\.]+),.*?(-?[\d\.]+) \\times \((-?[\d\.]+)\) = (-?[\d\.]+)/);
    if (quadMatch) {
      const x = quadMatch[1];
      const a = parseFloat(quadMatch[3]);
      const b = parseFloat(quadMatch[6]);
      const c_str = lastStep.workingOut ? lastStep.workingOut.match(/\+ (-?[\d\.]+) =/) : null;
      const c = c_str ? parseFloat(c_str[1]) : '';
      const cPart = c !== '' ? ` + ${c}` : '';
      return `Evaluate the expression \\(${a}x^{2} ${b >= 0 ? '+' : ''} ${b}x${cPart}\\) when \\(x = ${x}\\).`;
    }

    // === Pattern 2: Pythagoras sqrt(a^2 + b^2) ===
    const pythagorasMatch = workingOut.match(/([\d\.]+)\^2 = ([\d\.]+),.*?([\d\.]+)\^2 = ([\d\.]+)/);
    const sqrtMatch = (lastStep.workingOut || '').match(/\\sqrt\{([\d\.]+) \+ ([\d\.]+)\}/);
    if (pythagorasMatch && sqrtMatch) {
      const a = pythagorasMatch[1], b = pythagorasMatch[3];
      return `Find the length of the hypotenuse of a right-angled triangle with legs \\(${a}\\) and \\(${b}\\).`;
    }

    // === Pattern 3: Kinematic sqrt(v0^2 + 2as) ===
    const kinematicMatch = workingOut.match(/([\d\.]+)\^2 = ([\d\.]+),.*?2 \\times ([\d\.]+) \\times ([\d\.]+) = ([\d\.]+)/);
    if (kinematicMatch) {
      const v0 = kinematicMatch[1], a = kinematicMatch[3], s = kinematicMatch[4];
      return `Using the kinematic formula \\(v = \\sqrt{v_0^{2} + 2as}\\), find the final velocity when \\(v_0 = ${v0}\\), \\(a = ${a}\\), \\(s = ${s}\\).`;
    }

    // === Pattern 4: Simple linear ax - bx or ax + b (force, power, etc) ===
    const multiplyMatch = workingOut.match(/([\d\.]+) \\times ([\d\.]+) = ([\d\.]+),.*?([\d\.]+) \\times ([\d\.]+) = ([\d\.]+)/);
    if (multiplyMatch) {
      const sub = (lastStep.workingOut || '').match(/([\d\.]+) - ([\d\.]+) = ([\d\.]+)/);
      if (sub) {
        return `Evaluate the expression \\(${multiplyMatch[1]} \\times ${multiplyMatch[2]} - ${multiplyMatch[4]} \\times ${multiplyMatch[5]}\\).`;
      }
      return `Evaluate the expression \\(${multiplyMatch[1]} \\times ${multiplyMatch[2]} + ${multiplyMatch[4]} \\times ${multiplyMatch[5]}\\).`;
    }

    // === Pattern 5: Simple arithmetic from workingOut of last step ===
    const lastWorkingOut = lastStep.workingOut || '';
    const simpleArith = lastWorkingOut.replace(/\\\\/g, '').replace(/\(\s*/g, '').replace(/\s*\)/g, '').trim();
    if (simpleArith && simpleArith.includes('=')) {
      const lhs = simpleArith.split('=')[0].trim();
      if (lhs.length < 60) {
        return `Evaluate: \\(${lhs}\\).`;
      }
    }

    // === Fallback: use title + answer to construct generic question ===
    return `Evaluate the expression and find the result. \\(\\text{Answer} = ${correctAnswer}\\)`;
  }

  const snap = await db.collection('questions')
    .where('chapterId', '==', 'exam:year9ch1')
    .get();

  const problems = snap.docs.filter(d => !d.data().question || d.data().question.trim() === '');
  console.log('Total to fix:', problems.length);

  let fixedCount = 0;
  let failedCount = 0;

  for (const doc of problems) {
    const data = doc.data();
    const opts = data.options || [];
    const correctText = opts[parseInt(data.answer || 0)]?.text || '';
    const correctClean = correctText.replace(/\\\\/g, '').replace(/\\\(/g, '').replace(/\\\)/g, '').trim();

    const question = reconstructQuestion(doc.id, data.title, data.solutionSteps, correctClean);

    // Also clean up solutionSteps that have HTML in workingOut
    const cleanedSteps = (data.solutionSteps || []).map(step => {
      let wo = step.workingOut || '';
      // Remove HTML tags
      wo = wo.replace(/<[^>]+>/g, '').trim();
      return { ...step, workingOut: wo, graphData: step.graphData || null };
    });

    await doc.ref.update({
      question,
      solutionSteps: cleanedSteps,
      updatedAt: FieldValue.serverTimestamp()
    });
    fixedCount++;
    console.log(`Fixed [${fixedCount}/${problems.length}]:`, doc.id, '->', question.substring(0, 60) + '...');
  }

  console.log(`\nDone. Fixed: ${fixedCount}, Failed: ${failedCount}`);
  process.exit(0);
}

run().catch(console.error);
