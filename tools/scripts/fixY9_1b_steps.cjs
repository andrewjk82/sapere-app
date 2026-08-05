const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y9-1')
    .get();

  const targets = snap.docs.filter(d => d.id.startsWith('y9-1b-'));
  const parentSet = new Set();
  let updateCount = 0;

  for (const doc of targets) {
    const data = doc.data();
    if (!data.question) continue;
    
    let needsFix = false;
    let steps = data.solutionSteps || [];
    
    // Check if step 1 has HTML
    if (steps.length > 0 && steps[0].workingOut && steps[0].workingOut.includes('<div')) {
      needsFix = true;
    }

    if (!needsFix) continue;

    // Custom logic to build step 1 workingOut if it's a sum/perimeter question
    let step1WO = '';
    if (data.question.includes('side lengths:')) {
      const parts = data.question.match(/\\?\((.*?)\\?\)/g);
      if (parts && parts.length > 0) {
        // e.g., parts = [ '\(3.5x +2y -1.2\)', '\(1.5x -4.5y +3\)', ... ]
        // Keep only those that look like algebraic expressions
        const exprs = parts.filter(p => p.match(/[xya-z]/i)).map(p => {
          let s = p.replace(/^\\?\(/, '').replace(/\\?\)$/, '');
          return `(${s})`;
        });
        if (exprs.length > 1) {
          step1WO = `\\( ${exprs.join(' + ')} \\)`;
        }
      }
    }
    
    // If it's a "simplify the expression" question
    if (!step1WO && data.question.includes('expression:')) {
      const match = data.question.match(/expression:\s*\\?\((.*?)\\?\)/);
      if (match) {
        step1WO = `\\( ${match[1]} \\)`;
      }
    }
    
    // If it's a subtraction problem: "subtract X from Y"
    if (!step1WO && data.question.includes('subtract') && data.question.includes('from')) {
      const parts = data.question.match(/\\?\((.*?)\\?\)/g);
      if (parts && parts.length === 2) {
        const p1 = parts[0].replace(/^\\?\(/, '').replace(/\\?\)$/, '');
        const p2 = parts[1].replace(/^\\?\(/, '').replace(/\\?\)$/, '');
        step1WO = `\\( (${p2}) - (${p1}) \\)`;
      }
    }

    // Clean up the steps genericly
    const newSteps = steps.map((s, idx) => {
      let exp = s.explanation || '';
      let wo = s.workingOut || '';
      let gd = s.graphData || null;

      if (idx === 0) {
        // Leave the explanation as is (it's usually good, like "Set up the sum...")
        // Remove the HTML garbage and replace with our parsed equation (if any)
        wo = step1WO; 
      } else {
        // Fix formatting in subsequent steps
        wo = wo.replace(/\*/g, '\\times');
        // If it doesn't have LaTeX wrappers but has math, wrap it
        if (wo && !wo.includes('\\(') && (wo.includes('=') || wo.includes('\\times') || wo.includes('+') || wo.includes('-'))) {
          // don't double wrap
          wo = `\\( ${wo} \\)`;
        }
      }
      return { explanation: exp, workingOut: wo, graphData: gd };
    });

    await doc.ref.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
    console.log(`Cleaned y9-1b: ${doc.id}`);
    updateCount++;
    const parentId = doc.id.replace(/-[\d]+$/, ''); // For y9-1b-q112-10, parent is y9-1b-q112. Wait, let me check the ID format.
    // Actually, let's just extract everything up to the last hyphen if it looks like a subquestion.
    const m = doc.id.match(/^(y9-1b-[q\d]+)-\d+$/);
    if (m) {
      parentSet.add(m[1]);
    } else {
      parentSet.add(doc.id.replace(/[a-z]$/, '')); // e.g. q1a -> q1
    }
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

  console.log('\nTotal y9-1b fixed:', updateCount);
  process.exit(0);
}

run().catch(console.error);
