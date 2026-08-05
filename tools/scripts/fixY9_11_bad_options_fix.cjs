const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  console.log("Fetching all Year 9 Chapter 11 questions to fix the hardcoded options bug...");
  const snapshot = await db.collection('questions')
    .where('chapterId', '==', 'y9-11')
    .get();

  let count = 0;
  snapshot.forEach(doc => {
    const data = doc.data();
    
    // Check if it got infected by the hardcoded opt0: y = -3x + 5
    let isBad = false;
    if (data.options && data.options.length === 4) {
      if (data.options[0].text === '\\(y = -3x + 5\\)' || data.options[0].text === '\\(4\\)') {
        isBad = true;
      }
    }
    
    if (isBad) {
      // Find the correct answer
      let ansIdx = parseInt(data.answer || "0");
      let correctOptionText = data.options[ansIdx] ? data.options[ansIdx].text : null;
      
      if (correctOptionText) {
          let rawEq = correctOptionText.replace(/\\\(|\\\)/g, '');
          let opt0, opt1, opt2, opt3;
          
          if (rawEq.includes('x')) {
              // It's an equation. Let's generate somewhat random but distinct linear equations.
              // We'll use the doc.id's hash or simple pseudo-random so it varies per question.
              let hash = 0;
              for (let i = 0; i < doc.id.length; i++) hash += doc.id.charCodeAt(i);
              
              let m1 = (hash % 5) + 2; // 2 to 6
              let c1 = (hash % 7) - 3; // -3 to 3
              
              let m2 = -((hash % 4) + 1); // -1 to -4
              let c2 = (hash % 5) + 4; // 4 to 8
              
              let m3 = (hash % 3) + 3; // 3 to 5
              let c3 = -((hash % 6) + 2); // -2 to -7
              
              opt0 = `\\(y = ${m1}x ${c1 >= 0 ? '+' : '-'} ${Math.abs(c1)}\\)`;
              opt1 = correctOptionText;
              opt2 = `\\(y = ${m2 === -1 ? '-' : m2}x ${c2 >= 0 ? '+' : '-'} ${Math.abs(c2)}\\)`;
              opt3 = `\\(y = ${m3}x ${c3 >= 0 ? '+' : '-'} ${Math.abs(c3)}\\)`;
              
              // Ensure uniqueness from correct text
              if (opt0 === correctOptionText) opt0 = `\\(y = 7x + 1\\)`;
              if (opt2 === correctOptionText) opt2 = `\\(y = -5x - 3\\)`;
              if (opt3 === correctOptionText) opt3 = `\\(y = 2x - 9\\)`;
              
              // Clean up +- 0
              opt0 = opt0.replace(' + 0', '').replace(' - 0', '');
              opt2 = opt2.replace(' + 0', '').replace(' - 0', '');
              opt3 = opt3.replace(' + 0', '').replace(' - 0', '');
          } else {
              // It's just a number.
              let num = parseFloat(rawEq);
              if (isNaN(num)) num = 0;
              
              let hash = 0;
              for (let i = 0; i < doc.id.length; i++) hash += doc.id.charCodeAt(i);
              
              opt0 = `\\(${num + (hash % 4) + 1}\\)`;
              opt1 = correctOptionText;
              opt2 = `\\(${num - (hash % 5) - 2}\\)`;
              opt3 = `\\(${-(num + (hash % 3) + 1)}\\)`;
              
              if (opt0 === correctOptionText) opt0 = `\\(${num + 5}\\)`;
              if (opt2 === correctOptionText) opt2 = `\\(${num - 4}\\)`;
              if (opt3 === correctOptionText) opt3 = `\\(${-(num + 2)}\\)`;
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
    console.log(`Successfully fixed the options for ${count} questions.`);
  } else {
    console.log("No bad questions found.");
  }
  process.exit(0);
}

run().catch(console.error);
