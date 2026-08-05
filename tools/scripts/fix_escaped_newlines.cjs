const fs = require('fs');
const path = require('path');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const dir = '/Users/andrewkim/Desktop/sapere1/src/constants/';
  const files = fs.readdirSync(dir).filter(f => f.startsWith('seed') && f.endsWith('.js'));
  
  let updates = [];
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('\\\\\\\\n')) {
      const prefixMatch = content.match(/export const \\w+ = /);
      if (!prefixMatch) continue;
      
      const prefix = prefixMatch[0];
      const arrayString = content.slice(prefix.length).trim().replace(/;$/, '');
      let questions;
      try {
        questions = JSON.parse(arrayString);
      } catch (e) {
        console.error(`Error parsing ${file}`);
        continue;
      }
      
      let fileUpdated = false;
      const walkAndReplace = (obj) => {
        let changed = false;
        for (let key in obj) {
          if (typeof obj[key] === 'string' && obj[key].includes('\\n')) {
            obj[key] = obj[key].replace(/\\\\n/g, '\\n');
            changed = true;
          } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (walkAndReplace(obj[key])) changed = true;
          }
        }
        return changed;
      };

      for (let q of questions) {
        let qChanged = false;
        // Search for literal '\n' which is '\\n' in memory
        const fixString = (str) => {
            if (str.includes('\\n')) {
                return str.replace(/\\n/g, '\n');
            }
            return str;
        };

        const fixObject = (obj) => {
            let changed = false;
            for (let key in obj) {
                if (typeof obj[key] === 'string' && obj[key].includes('\\n')) {
                    obj[key] = fixString(obj[key]);
                    changed = true;
                } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    if (fixObject(obj[key])) changed = true;
                }
            }
            return changed;
        };

        if (fixObject(q)) {
            updates.push(q);
            fileUpdated = true;
        }
      }
      
      if (fileUpdated) {
        const output = prefix + JSON.stringify(questions, null, 2) + ';\n';
        fs.writeFileSync(filePath, output);
        console.log(`Updated local file ${file}`);
      }
    }
  }
  
  console.log(`Total questions to update in Firestore: ${updates.length}`);
  
  // Chunk into batches of 400
  const chunkSize = 400;
  for (let i = 0; i < updates.length; i += chunkSize) {
    const chunk = updates.slice(i, i + chunkSize);
    const batch = db.batch();
    for (const q of chunk) {
      const docRef = db.collection('questions').doc(q.id);
      batch.update(docRef, { ...q, updatedAt: FieldValue.serverTimestamp() });
    }
    await batch.commit();
    console.log(`Committed batch ${Math.floor(i/chunkSize) + 1}`);
  }
  
  console.log('All double-escaped newlines fixed.');
  process.exit(0);
}

run().catch(console.error);
