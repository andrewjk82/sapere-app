import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.join(__dirname, '../../backup_seeds/seedYear9Ch7Questions.js');
const seedContent = fs.readFileSync(seedPath, 'utf8');
const jsonStr = seedContent.replace(/export\s+const\s+\w+\s*=\s*/, '').replace(/;\s*$/, '');
const seedData = JSON.parse(jsonStr);

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function convertLatex(str) {
  if (!str) return str;
  if (str.includes('\\\\(') || str.includes('\\(')) return str;
  return str.replace(/\$(.*?)\$/g, '\\\\($1\\\\)');
}

async function run() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y9-7a').get();
  let count = 0;
  const batch = db.batch();
  
  snapshot.forEach(doc => {
    const id = doc.id;
    const match = id.match(/^y9-7a-q(\d+)/);
    if (!match || parseInt(match[1]) > 10) return;
    
    const originalQ = seedData.find(q => q.id === id);
    if (originalQ && originalQ.solutionSteps) {
      
      const newSteps = originalQ.solutionSteps.map(step => {
        return {
          explanation: convertLatex(step.explanation || ''),
          workingOut: convertLatex(step.workingOut || ''),
          graphData: step.graphData || null
        };
      });
      
      batch.update(doc.ref, { solutionSteps: newSteps });
      count++;
    }
  });
  
  console.log(`Prepared ${count} questions for restoring original detailed step-by-step solutions.`);
  if (count > 0) {
    await batch.commit();
    console.log('Batch commit successful!');
  }
}

run().catch(console.error);
