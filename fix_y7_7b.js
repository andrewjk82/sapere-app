import fs from 'fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const rawData = fs.readFileSync('/Users/andrewkim/Desktop/sapere1/y7-7b-audit.json', 'utf8');
const questions = JSON.parse(rawData);

async function fixQuestions() {
  const batch = db.batch();
  let updatesCount = 0;

  for (const q of questions) {
    if (q.id === 'y7-7-practice-q5') continue; // This one looks fine, has 'answer': '0' which is True.

    let correctAnswerStr = null;
    if (q.solutionSteps && q.solutionSteps.length > 0) {
      const lastStep = q.solutionSteps[q.solutionSteps.length - 1].workingOut;
      // Extract from \( ... \) or $ ... $
      const match1 = lastStep.match(/\\\\\((.*?)\\\\\)/) || lastStep.match(/\\\((.*?)\\\)/);
      const match2 = lastStep.match(/\$(.*?)\$/);
      if (match1) correctAnswerStr = match1[0].trim();
      else if (match2) correctAnswerStr = match2[0].trim();
      else correctAnswerStr = lastStep.trim();
    }

    if (!correctAnswerStr) {
      console.log(`Could not find correct answer for ${q.id}`);
      continue;
    }
    
    // Convert $2.5$ to \(2.5\) because options use \( \) format usually
    if (correctAnswerStr.startsWith('$') && correctAnswerStr.endsWith('$')) {
      correctAnswerStr = `\\(${correctAnswerStr.slice(1, -1)}\\)`;
    }

    let correctIndex = q.options.findIndex(o => o.text === correctAnswerStr);
    
    if (correctIndex === -1) {
      // Sometimes options have double slashes like \\(2.5\\)
      correctIndex = q.options.findIndex(o => o.text.replace(/\\\\/g, '\\') === correctAnswerStr.replace(/\\\\/g, '\\'));
    }

    if (correctIndex !== -1) {
      const oldAnswer = q.answer;
      if (oldAnswer !== correctIndex.toString()) {
        console.log(`Fixing ${q.id}: ${q.question}`);
        console.log(`  Old answer index: ${oldAnswer} -> New answer index: ${correctIndex} (${correctAnswerStr})`);
        
        const docRef = db.collection('questions').doc(q.id);
        batch.update(docRef, { answer: correctIndex.toString() });
        updatesCount++;
      } else {
        console.log(`OK ${q.id}: index ${oldAnswer} (${correctAnswerStr})`);
      }
    } else {
      console.log(`FAILED to map answer for ${q.id}: Target ${correctAnswerStr}`);
      console.log(`  Options: ${q.options.map(o => o.text).join(', ')}`);
    }
  }

  if (updatesCount > 0) {
    console.log(`Applying ${updatesCount} updates to Firestore...`);
    await batch.commit();
    console.log('Done.');
  } else {
    console.log('No updates needed.');
  }
}

fixQuestions().catch(console.error);
