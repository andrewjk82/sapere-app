const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function check() {
  const snapshot = await db.collection('questions')
    .where('topicId', '==', 'y7-13a')
    .get();
    
  console.log(`Found ${snapshot.size} questions for y7-13a`);
  let brokenCount = 0;
  
  for (const doc of snapshot.docs) {
      const data = doc.data();
      let isBroken = false;
      let brokenReason = [];
      
      if (data.solutionSteps) {
          data.solutionSteps.forEach((step, i) => {
              const wo = step.workingOut || '';
              // Check for unclosed \(
              const openCount = (wo.match(/\\\(/g) || []).length;
              const closeCount = (wo.match(/\\\)/g) || []).length;
              
              if (openCount !== closeCount) {
                  isBroken = true;
                  brokenReason.push(`Step ${i} unclosed delimiters: open=${openCount}, close=${closeCount}`);
              }
              
              if (wo.includes('\\)\\(')) {
                  isBroken = true;
                  brokenReason.push(`Step ${i} has \\)\\(`);
              }
          });
      }
      
      if (data.solution) {
          const wo = data.solution;
          const openCount = (wo.match(/\\\(/g) || []).length;
          const closeCount = (wo.match(/\\\)/g) || []).length;
          if (openCount !== closeCount) {
              isBroken = true;
              brokenReason.push(`Solution unclosed delimiters: open=${openCount}, close=${closeCount}`);
          }
          if (wo.includes('\\)\\(')) {
              isBroken = true;
              brokenReason.push(`Solution has \\)\\(`);
          }
      }
      
      if (isBroken) {
          brokenCount++;
          console.log(`ID: ${doc.id} - ${brokenReason.join(', ')}`);
      }
  }
  console.log(`Total broken: ${brokenCount}`);
}
check().catch(console.error);
