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
  let fileContentsToWrite = {}; // filename -> new content
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const prefixMatch = content.match(/export const \w+\s*=\s*/);
    if (!prefixMatch) continue;
    
    const matchIndex = prefixMatch.index;
    const prefix = prefixMatch[0];
    const prefixFull = content.slice(0, matchIndex + prefix.length); 
    const arrayString = content.slice(matchIndex + prefix.length).trim().replace(/;$/, '');
    
    let questions;
    try {
      questions = JSON.parse(arrayString);
    } catch (e) {
      console.error(`Error parsing ${file}`);
      continue;
    }
    
    let fileUpdated = false;
    
    const fixString = (str) => {
        // Replace literal backslash-n with actual newline
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

    for (let q of questions) {
      if (fixObject(q)) {
          updates.push(q);
          fileUpdated = true;
      }
    }
    
    if (fileUpdated) {
      const output = prefixFull + JSON.stringify(questions, null, 2) + ';\n';
      fileContentsToWrite[filePath] = output;
    }
  }
  
  console.log(`Total questions to update in Firestore: ${updates.length}`);
  if (updates.length === 0) {
      console.log('No updates found.');
      process.exit(0);
  }
  
  // Write local files
  for (const [filePath, output] of Object.entries(fileContentsToWrite)) {
      fs.writeFileSync(filePath, output);
      console.log(`Updated local file ${path.basename(filePath)}`);
  }
  
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
  
  console.log('All double-escaped newlines fixed in Firestore and locally.');
  process.exit(0);
}

run().catch(console.error);
