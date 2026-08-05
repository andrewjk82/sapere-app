import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const filepath = path.resolve('src/constants/seedYear10Ch11AQuestions.js');
  const content = fs.readFileSync(filepath, 'utf8');
  let match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);\n$/);
  let questions = eval(match[1]);
  
  let rootUpdates = [];
  let parentUpdates = {};
  let updateCount = 0;

  function updateQuestion(id, newOptions) {
    let q = questions.find(q => q.id === id);
    if (!q) return;
    
    // Find index of the correct answer string from the newOptions that matches the answer
    // For q11a, answer is "6". newOptions has text "\((...)\)" or "6".
    // Wait, the options objects have `text`.
    q.options = newOptions.map(opt => ({ text: opt, imageUrl: '' }));
    // We assume the first option in newOptions is the correct one, so a = 0.
    // Let's shuffle them to be safe, but then we must find the correct answer index.
    // Actually, just keep a=0 and let the app handle it, or we shuffle and set a.
    // Let's set a = 0 and answer = "0"
    q.a = 0;
    q.answer = "0";

    rootUpdates.push(q);
    
    const parentId = q.id.replace(/[a-z]$/, '');
    if (parentId !== q.id) {
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
    }
    updateCount++;
  }

  updateQuestion('y10-11a-q11a', [
    '\\(6\\)',
    '\\(36\\)',
    '\\(12\\)',
    '\\(3\\)'
  ]);

  updateQuestion('y10-11a-q11b', [
    '\\((6, 8)\\)',
    '\\((8, 6)\\)',
    '\\((-6, 8)\\)',
    '\\((-6, -8)\\)'
  ]);

  updateQuestion('y10-11a-q11c', [
    '\\((x - 6)^2 + (y - 8)^2 = 9\\)',
    '\\((x + 6)^2 + (y + 8)^2 = 9\\)',
    '\\((x - 6)^2 + (y - 8)^2 = 3\\)',
    '\\((x - 6)^2 + (y - 8)^2 = 36\\)'
  ]);

  updateQuestion('y10-11a-q12a', [
    '\\(10\\)',
    '\\(100\\)',
    '\\(20\\)',
    '\\(5\\)'
  ]);

  updateQuestion('y10-11a-q12b', [
    '\\((4, 1)\\)',
    '\\((1, 4)\\)',
    '\\((-4, 1)\\)',
    '\\((-4, -1)\\)'
  ]);

  updateQuestion('y10-11a-q12c', [
    '\\((x - 4)^2 + (y - 1)^2 = 25\\)',
    '\\((x + 4)^2 + (y + 1)^2 = 25\\)',
    '\\((x - 4)^2 + (y - 1)^2 = 5\\)',
    '\\((x - 4)^2 + (y - 1)^2 = 100\\)'
  ]);

  if (updateCount > 0) {
    const newFileContent = `export const Y10_CH11A_QUESTIONS = ` + JSON.stringify(questions, null, 2) + ";\n";
    fs.writeFileSync(filepath, newFileContent, 'utf8');
    console.log(`Updated ${updateCount} questions with better distractors in JS file.`);
  }

  // Update root docs in Firestore
  for (const rq of rootUpdates) {
    try {
      await db.collection('questions').doc(rq.id).update({
        options: rq.options,
        a: rq.a,
        answer: rq.answer,
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
            currentSubQs[i].options = newSq.options;
            currentSubQs[i].a = newSq.a;
            currentSubQs[i].answer = newSq.answer;
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
