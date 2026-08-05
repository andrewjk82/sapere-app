const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function cleanStep0(workingOut) {
    if (!workingOut) return workingOut;
    // Pattern: \(<div ...>...(truncated)\) — wraps HTML in math delimiters
    if (/^\\\(/.test(workingOut) && /\\\)$/.test(workingOut)) {
        return true; // broken
    }
    // Pattern: truncated HTML ending with </ or similar
    if (/[^>]$/.test(workingOut) && workingOut.includes('<div') && !workingOut.includes('</div>')) {
        return true;
    }
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

async function fixAll() {
    const snapshot = await db.collection('questions').get();
    let fixedCount = 0;
    let batch = db.batch();
    let batchSize = 0;

    for (const doc of snapshot.docs) {
        const data = doc.data();
        if (!data.solutionSteps) continue;

        let changed = false;
        const steps = data.solutionSteps.map((step, i) => {
            if (i === 0 && cleanStep0(step.workingOut)) {
                step.workingOut = '<div style="text-align: left;"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>';
                changed = true;
            } else if (step.workingOut && step.workingOut.includes('\\)\\(')) {
                step.workingOut = fixDelimiters(step.workingOut);
                changed = true;
            }
            return step;
        });

        let solution = data.solution;
        if (solution && solution.includes('\\)\\(')) {
            solution = fixDelimiters(solution);
            changed = true;
        }

        if (changed) {
            fixedCount++;
            const update = { solutionSteps: steps };
            if (solution !== data.solution) update.solution = solution;
            batch.update(doc.ref, update);
            batchSize++;
            console.log(`Queued fix: ${doc.id}`);

            if (batchSize >= 450) {
                await batch.commit();
                console.log('Committed batch...');
                batch = db.batch();
                batchSize = 0;
            }
        }
    }

    if (batchSize > 0) {
        await batch.commit();
    }

    console.log(`\nTotal fixed: ${fixedCount} documents.`);
}
fixAll().catch(console.error);
