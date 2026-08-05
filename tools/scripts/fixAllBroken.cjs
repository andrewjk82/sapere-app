const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

// Fix the 2 that still need step 0 fixed + step 1 that's truncated
const fixes = {
  'WRLBARk7ruucLqXRm9qQ': {
    step1: '<div style="text-align: left;"><p>\\(-2\\frac{2}{3} + 3\\frac{1}{4} = -\\frac{8}{3} + \\frac{13}{4} = -\\frac{32}{12} + \\frac{39}{12} = \\frac{7}{12}\\)</p></div>'
  },
  'xuFKu9fW2J0c70falQ3A': {
    step1: '<div style="text-align: left;"><p>\\(-1\\frac{1}{6} - 3\\frac{1}{4} = -\\frac{7}{6} - \\frac{13}{4} = -\\frac{14}{12} - \\frac{39}{12} = -\\frac{53}{12} = -4\\frac{5}{12}\\)</p></div>'
  },
  'yGWGwNKlpEVvffnvqbPC': {
    step0: '<div style="text-align: left;"><p>We need to subtract two negative mixed numbers. Convert to improper fractions and find a common denominator.</p></div>',
    step1: '<div style="text-align: left;"><p>\\(-3\\frac{3}{5} - 2\\frac{1}{3} = -\\frac{18}{5} - \\frac{7}{3} = -\\frac{54}{15} - \\frac{35}{15} = -\\frac{89}{15} = -5\\frac{14}{15}\\)</p></div>'
  },
  'z9dqmYOzb2NUkn36lnpr': {
    step0: '<div style="text-align: left;"><p>We need to add a negative fraction and a positive mixed number. Convert to improper fractions and find a common denominator.</p></div>',
    step1: '<div style="text-align: left;"><p>\\(-\\frac{2}{3} + 2\\frac{3}{10} = -\\frac{2}{3} + \\frac{23}{10} = -\\frac{20}{30} + \\frac{69}{30} = \\frac{49}{30} = 1\\frac{19}{30}\\)</p></div>'
  }
};

// Global fix: scan all docs for broken Step 0 and bad \)\( delimiters
function isBrokenStep0(wo) {
  if (!wo) return false;
  if (/^\\\(/.test(wo) && /\\\)$/.test(wo)) return true;
  if (wo.includes('<div') && !wo.includes('</div>')) return true;
  return false;
}

function fixDelimiters(str) {
  if (!str) return str;
  return str
    .replace(/\\\)\\\(<\/li><li>\\\)\\\(/g, '\\)</li><li>\\(')
    .replace(/<li>\\\)\\\(/g, '<li>\\(')
    .replace(/\\\)\\\(<\/li>/g, '\\)</li>')
    .replace(/<p>\\\)\\\(/g, '<p>\\(')
    .replace(/\\\)\\\(<\/p>/g, '\\)</p>')
    .replace(/\\\)\\\(<\/ul>/g, '\\)</ul>');
}

async function run() {
  // Fix the 4 specific IDs
  for (const [id, f] of Object.entries(fixes)) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      const steps = doc.data().solutionSteps || [];
      if (f.step0) steps[0].workingOut = f.step0;
      if (f.step1 && steps[1]) steps[1].workingOut = f.step1;
      await doc.ref.update({ solutionSteps: steps });
      console.log(`Fixed: ${id}`);
    }
  }

  // Global scan - continue from where we errored (after y12a-1g-q9-9)
  const snapshot = await db.collection('questions').get();
  let fixedCount = 0;
  let batch = db.batch();
  let batchSize = 0;

  for (const doc of snapshot.docs) {
    const data = doc.data();
    if (!data.solutionSteps) continue;

    let changed = false;
    const steps = data.solutionSteps.map((step, i) => {
      if (i === 0 && isBrokenStep0(step.workingOut)) {
        step.workingOut = '<div style="text-align: left;"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>';
        changed = true;
      } else if (step.workingOut && step.workingOut.includes('\\)\\(')) {
        step.workingOut = fixDelimiters(step.workingOut);
        changed = true;
      }
      return step;
    });

    let updateData = {};
    if (changed) updateData.solutionSteps = steps;

    // Safely check solution (must be string)
    if (data.solution && typeof data.solution === 'string' && data.solution.includes('\\)\\(')) {
      updateData.solution = fixDelimiters(data.solution);
      changed = true;
    }

    if (changed && Object.keys(updateData).length > 0) {
      fixedCount++;
      batch.update(doc.ref, updateData);
      batchSize++;
      if (batchSize >= 450) {
        await batch.commit();
        console.log(`Committed batch of 450...`);
        batch = db.batch();
        batchSize = 0;
      }
    }
  }

  if (batchSize > 0) await batch.commit();
  console.log(`\nGlobal scan complete. Fixed ${fixedCount} documents.`);
}

run().catch(console.error);
