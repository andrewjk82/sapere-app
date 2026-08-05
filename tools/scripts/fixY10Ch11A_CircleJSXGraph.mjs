import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const filepath = path.resolve('src/constants/seedYear10Ch11AQuestions.js');
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Replace fillColor: 'none' with fillColor: '#4f46e5', fillOpacity: 0.06
  content = content.replace(/fillColor:\s*'none'/g, "fillColor: '#4f46e5', fillOpacity: 0.06");
  
  fs.writeFileSync(filepath, content, 'utf8');
  console.log('Replaced fillColor: none in local file.');

  let match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);\n$/);
  let questions = eval(match[1]);
  
  let rootUpdates = [];
  let parentUpdates = {};
  let updateCount = 0;

  for (let q of questions) {
    if (q.solutionSteps) {
      let changed = false;
      for (let s of q.solutionSteps) {
        if (s.graphData && s.graphData.jsxGraph && s.graphData.jsxGraph.script && s.graphData.jsxGraph.script.includes("fillColor: '#4f46e5', fillOpacity: 0.06")) {
          changed = true;
        }
      }
      if (changed) {
        rootUpdates.push(q);
        const parentId = q.id.replace(/[a-z]$/, '');
        if (parentId !== q.id) {
          if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
          parentUpdates[parentId].push(q);
        }
        updateCount++;
      }
    }
  }

  // Update root docs in Firestore
  for (const rq of rootUpdates) {
    try {
      await db.collection('questions').doc(rq.id).update({
        solutionSteps: rq.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log(`Successfully updated root document ${rq.id}`);
    } catch(e) {
      console.error(`Failed to update root document ${rq.id}:`, e);
    }
  }

  // Update parent docs in Firestore
  for (const [parentId, subQs] of Object.entries(parentUpdates)) {
    try {
      const parentRef = db.collection('questions').doc(parentId);
      const parentSnap = await parentRef.get();
      if (parentSnap.exists) {
        let parentData = parentSnap.data();
        let currentSubQs = parentData.subQuestions || [];
        for (let i = 0; i < currentSubQs.length; i++) {
          const newSq = subQs.find(s => s.id === currentSubQs[i].id);
          if (newSq) {
            currentSubQs[i].solutionSteps = newSq.solutionSteps;
          }
        }
        await parentRef.update({
          subQuestions: currentSubQs,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log(`Successfully updated parent ${parentId} with subQuestions`);
      }
    } catch(e) {
      console.error(`Failed to update parent ${parentId}:`, e);
    }
  }
}

run().catch(console.error);
