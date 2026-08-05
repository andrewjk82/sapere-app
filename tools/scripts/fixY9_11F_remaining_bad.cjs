const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  console.log("Fetching all Year 9 Chapter 11 questions to fix remaining bad options...");
  const snapshot = await db.collection('questions')
    .where('chapterId', '==', 'y9-11')
    .get();

  let count = 0;
  snapshot.forEach(doc => {
    const data = doc.data();
    
    // Check if options have the string '13/6' or 'y = ... + 1'
    let hasBadOptions = false;
    if (data.options && data.options.length > 0) {
      for (let opt of data.options) {
        if (opt.text.includes('13/6') || opt.text.includes('+ 1') || opt.text.includes('12/5')) {
          hasBadOptions = true;
          break;
        }
      }
    }
    
    if (hasBadOptions) {
      console.log("Found bad options in:", doc.id);
      
      // We need to rewrite these options.
      // The correct answer is data.options[data.answer].text (or if answer is an index string)
      let ansIdx = parseInt(data.answer || "0");
      let correctOptionText = data.options[ansIdx] ? data.options[ansIdx].text : null;
      
      if (!correctOptionText && data.solution) {
          let m = data.solution.match(/\\(y = .*?\\)/g);
          if (m) correctOptionText = m[m.length - 1];
      }
      
      if (correctOptionText) {
          // Generate 3 distinct fake options based on the correct one
          let rawEq = correctOptionText.replace(/\\\(|\\\)/g, ''); // e.g. "y = 2x - 3"
          let m = 2, c = -3;
          let mMatch = rawEq.match(/y = ([-0-9./]+)?x/);
          let cMatch = rawEq.match(/x\s*([+-]\s*[-0-9./]+)/);
          
          let opt0, opt1, opt2, opt3;
          
          if (mMatch || cMatch) {
             let baseM = mMatch && mMatch[1] ? mMatch[1].replace('+', '') : '1';
             let baseC = cMatch && cMatch[1] ? cMatch[1].replace(/\s+/g, '') : '+0';
             
             // Create completely different numbers
             opt0 = `\\(y = -3x + 5\\)`;
             opt1 = correctOptionText;
             opt2 = `\\(y = 4x - 7\\)`;
             opt3 = `\\(y = -x - 2\\)`;
             
             // Make sure they are distinct
             if (opt0 === correctOptionText) opt0 = `\\(y = 5x + 1\\)`;
             if (opt2 === correctOptionText) opt2 = `\\(y = -2x - 4\\)`;
             if (opt3 === correctOptionText) opt3 = `\\(y = x + 8\\)`;
          } else {
             opt0 = `\\(4\\)`;
             opt1 = correctOptionText;
             opt2 = `\\(-2\\)`;
             opt3 = `\\(7\\)`;
          }
          
          batch.update(doc.ref, {
            options: [
              { text: opt0, imageUrl: '' },
              { text: opt1, imageUrl: '' },
              { text: opt2, imageUrl: '' },
              { text: opt3, imageUrl: '' }
            ],
            answer: '1',
            updatedAt: FieldValue.serverTimestamp()
          });
          count++;
      }
    }
  });

  if (count > 0) {
    await batch.commit();
    console.log(`Updated options for ${count} remaining bad questions.`);
  } else {
    console.log("No more bad options found.");
  }
  process.exit(0);
}

run().catch(console.error);
