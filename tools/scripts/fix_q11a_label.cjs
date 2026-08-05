const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const SEED_FILE = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch16GQuestions.js';

async function run() {
  let content = fs.readFileSync(SEED_FILE, 'utf8');
  let jsonString = content.replace('export const Y9_CH16G_QUESTIONS = ', '').replace(/;\\s*$/, '');
  let questions = new Function('return ' + jsonString)();

  let updated = false;
  for (let q of questions) {
    if (q.id === 'y9-16g-q11a' && q.graphData && q.graphData.svg) {
      // Fix the label overlapping the line
      let oldText = '<text x="25" y="155" font-family="sans-serif" font-size="15" fill="#0f172a">1.5 m</text>';
      let newText = '<text x="40" y="155" font-family="sans-serif" font-size="15" fill="#0f172a" text-anchor="end">1.5 m</text>';
      if (q.graphData.svg.includes(oldText)) {
        q.graphData.svg = q.graphData.svg.replace(oldText, newText);
        updated = true;
        console.log("Fixed overlapping label in seed object in memory.");
      }
    }
  }

  if (updated) {
    const newFileContent = `export const Y9_CH16G_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync(SEED_FILE, newFileContent, 'utf8');
    console.log("Wrote fix to seed file.");

    // Update in Firestore
    const snapshot = await db.collection('questions').where('topicId', '==', 'y9-16g').get();
    for (let doc of snapshot.docs) {
      if (doc.id === 'y9-16g-q11a') {
        let q = questions.find(x => x.id === 'y9-16g-q11a');
        await db.collection('questions').doc(doc.id).update({ graphData: q.graphData });
        console.log("Updated q11a in Firestore.");
      }
    }
  } else {
    console.log("Nothing to update.");
  }
  process.exit(0);
}

run().catch(console.error);
