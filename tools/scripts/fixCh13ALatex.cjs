const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function fixLatexDelimiters(str) {
    if (!str) return str;
    return str
      .replace(/\\\)\\\(<\/li><li>\\\)\\\(/g, '\\)</li><li>\\(')
      .replace(/\\\)\\\(<\/ul>/g, '\\)</ul>')
      .replace(/<p>\\\)\\\(/g, '<p>\\(')
      .replace(/\\\)\\\(<\/p>/g, '\\)</p>')
      .replace(/\\\)\\\(<\/li>/g, '\\)</li>')
      .replace(/<li>\\\)\\\(/g, '<li>\\(');
}

async function fix() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y7-13a').get();
  let count = 0;
  
  for (const doc of snapshot.docs) {
      const data = doc.data();
      let hasError = false;
      let newData = { ...data };
      
      if (newData.solutionSteps) {
          newData.solutionSteps = newData.solutionSteps.map((step, i) => {
              const wo = step.workingOut || '';
              const openCount = (wo.match(/\\\(/g) || []).length;
              const closeCount = (wo.match(/\\\)/g) || []).length;
              
              if (openCount > closeCount && i === 0) {
                  // Truncated at step 0
                  step.workingOut = '<div style="text-align: left;"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators.</p></div>';
                  hasError = true;
              } else if (wo.includes('\\)\\(')) {
                  step.workingOut = fixLatexDelimiters(wo);
                  hasError = true;
              }
              return step;
          });
      }
      
      if (newData.solution && newData.solution.includes('\\)\\(')) {
          newData.solution = fixLatexDelimiters(newData.solution);
          hasError = true;
      }
      
      if (hasError) {
          await doc.ref.update({
              solution: newData.solution,
              solutionSteps: newData.solutionSteps
          });
          count++;
          console.log(`Fixed doc: ${doc.id}`);
      }
  }
  console.log(`Finished fixing ${count} documents in y7-13a.`);
}
fix().catch(console.error);
