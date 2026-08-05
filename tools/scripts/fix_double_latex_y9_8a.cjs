const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-8a')
    .where(FieldPath.documentId(), '<=', 'y9-8a\uf8ff')
    .get();

  let updateCount = 0;
  
  for (const doc of snap.docs) {
    const data = doc.data();
    let updates = {};
    let changed = false;
    
    // Check options
    if (data.options && Array.isArray(data.options)) {
       let optionsChanged = false;
       const newOpts = data.options.map(opt => {
          if (opt.text && (opt.text.includes('\\(\\(') || opt.text.includes('\\)\\)'))) {
             optionsChanged = true;
             changed = true;
             let fixedText = opt.text.replace(/\\\(\\\(/g, '\\(').replace(/\\\)\\\)/g, '\\)');
             return { ...opt, text: fixedText };
          }
          return opt;
       });
       if (optionsChanged) updates.options = newOpts;
    }

    // Check subQuestions options
    if (data.subQuestions && Array.isArray(data.subQuestions)) {
       let subChanged = false;
       const newSubQs = data.subQuestions.map(sq => {
         if (sq.options && Array.isArray(sq.options)) {
            let sqOptsChanged = false;
            const newSqOpts = sq.options.map(opt => {
               if (opt.text && (opt.text.includes('\\(\\(') || opt.text.includes('\\)\\)'))) {
                  subChanged = true;
                  sqOptsChanged = true;
                  let fixedText = opt.text.replace(/\\\(\\\(/g, '\\(').replace(/\\\)\\\)/g, '\\)');
                  return { ...opt, text: fixedText };
               }
               return opt;
            });
            if (sqOptsChanged) {
               return { ...sq, options: newSqOpts };
            }
         }
         return sq;
       });
       
       if (subChanged) {
          updates.subQuestions = newSubQs;
          changed = true;
       }
    }
    
    if (changed) {
       updates.updatedAt = FieldValue.serverTimestamp();
       await doc.ref.update(updates);
       updateCount++;
    }
  }

  console.log('Fixed double latex parentheses in', updateCount, 'documents in Year 9 Chapter 8A');
  process.exit(0);
}

run().catch(console.error);
