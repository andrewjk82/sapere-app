const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function fixNumberString(str) {
    if (!str) return str;
    return str.replace(/-?\d+\.\d+/g, (match) => {
        const fractionalPart = match.split('.')[1];
        if (fractionalPart && (fractionalPart.includes('99999') || fractionalPart.includes('00000'))) {
            // Check if it's literally just 0.00000... which might be valid, but 0.000001 is a rounding error often.
            // If it's a percentage like 0.00007% from the previous log, we shouldn't ruin it if it's exact.
            // But wait, 0.00007 doesn't have 00000. It has 0000. 
            // My check requires 5 zeroes '00000' or 5 nines '99999'.
            // "0.00007%" -> fractional part is "00007" which has four zeroes. So it's skipped!
            // Wait, what if it's "0.000007"? That has five zeroes.
            // Let's just trust toPrecision(10). 0.000007 to precision 10 is still 0.000007.
            // So it's very safe!
            const num = parseFloat(match);
            let fixed = parseFloat(num.toPrecision(10)).toString();
            return fixed;
        }
        return match;
    });
}

async function fixFloatingPointErrors() {
  const snapshot = await db.collection('questions').get();
  let count = 0;
  
  // We process in batches of 500
  let batches = [];
  let currentBatch = db.batch();
  let currentBatchSize = 0;

  for (const doc of snapshot.docs) {
    const data = doc.data();
    let hasError = false;
    let updateData = {};
    
    // Check options
    if (data.options) {
      const newOptions = data.options.map(opt => {
        if (opt.text) {
            const newText = fixNumberString(opt.text);
            if (newText !== opt.text) {
                console.log(`[${doc.id}] Fixed option: ${opt.text} -> ${newText}`);
                hasError = true;
                opt.text = newText;
            }
        }
        return opt;
      });
      if (hasError) updateData.options = newOptions;
    }

    if (data.solutionSteps) {
      let stepError = false;
      const newSteps = data.solutionSteps.map(step => {
        if (step.workingOut) {
            const newWorkingOut = fixNumberString(step.workingOut);
            if (newWorkingOut !== step.workingOut) {
                console.log(`[${doc.id}] Fixed step workingOut`);
                stepError = true;
                step.workingOut = newWorkingOut;
            }
        }
        if (step.explanation) {
            const newExp = fixNumberString(step.explanation);
            if (newExp !== step.explanation) {
                console.log(`[${doc.id}] Fixed step explanation`);
                stepError = true;
                step.explanation = newExp;
            }
        }
        return step;
      });
      if (stepError) {
          hasError = true;
          updateData.solutionSteps = newSteps;
      }
    }
    
    if (data.question) {
        const newQuestion = fixNumberString(data.question);
        if (newQuestion !== data.question) {
            console.log(`[${doc.id}] Fixed question`);
            hasError = true;
            updateData.question = newQuestion;
        }
    }

    if (data.question && data.question.includes('840mg')) {
        console.log(`Found 840mg question: ${doc.id}`);
    }
    
    if (hasError) {
        currentBatch.update(doc.ref, updateData);
        currentBatchSize++;
        count++;
        
        if (currentBatchSize >= 450) {
            batches.push(currentBatch);
            currentBatch = db.batch();
            currentBatchSize = 0;
        }
    }
  }
  
  if (currentBatchSize > 0) {
      batches.push(currentBatch);
  }

  for (let i = 0; i < batches.length; i++) {
      await batches[i].commit();
      console.log(`Committed batch ${i + 1}/${batches.length}`);
  }
  
  if (count > 0) {
      console.log(`Successfully fixed ${count} documents globally.`);
  } else {
      console.log('No documents to fix.');
  }
}

fixFloatingPointErrors().catch(console.error);
