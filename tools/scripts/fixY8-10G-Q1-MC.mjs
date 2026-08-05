import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

async function run() {
  const filepath = path.resolve('src/constants/seedYear8Ch10GQuestions.js');
  const { Y8_CH10G_QUESTIONS } = await import('../../src/constants/seedYear8Ch10GQuestions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let found = 0;

  for (let q of Y8_CH10G_QUESTIONS) {
    if (q.id === 'y8-10g-q1b') {
      found++;
      q.type = 'multiple_choice';
      q.isManual = false;
      q.requiresManualGrading = false;
      q.options = [
        { text: "\\(2\\)", imageUrl: "" },
        { text: "\\(4\\)", imageUrl: "" },
        { text: "\\(16\\)", imageUrl: "" },
        { text: "\\(1\\)", imageUrl: "" }
      ];
      q.a = 0;
      q.answer = "0";

      await db.collection('questions').doc(q.id).update({
        type: 'multiple_choice',
        isManual: false,
        requiresManualGrading: false,
        options: q.options,
        a: q.a,
        answer: q.answer,
        updatedAt: FieldValue.serverTimestamp()
      }).catch(e => console.error(e));
    }
    
    if (q.id === 'y8-10g-q1d') {
      found++;
      q.type = 'multiple_choice';
      q.isManual = false;
      q.requiresManualGrading = false;
      q.options = [
        { text: "\\(3\\)", imageUrl: "" },
        { text: "\\(5\\)", imageUrl: "" },
        { text: "\\(15\\)", imageUrl: "" },
        { text: "\\(1\\)", imageUrl: "" }
      ];
      q.a = 0;
      q.answer = "0";

      await db.collection('questions').doc(q.id).update({
        type: 'multiple_choice',
        isManual: false,
        requiresManualGrading: false,
        options: q.options,
        a: q.a,
        answer: q.answer,
        updatedAt: FieldValue.serverTimestamp()
      }).catch(e => console.error(e));
    }
  }

  if (found > 0) {
    const fileContent = "export const Y8_CH10G_QUESTIONS = " + JSON.stringify(Y8_CH10G_QUESTIONS, null, 2) + ";\n";
    fs.writeFileSync(filepath, fileContent, 'utf8');
    console.log(`Successfully converted ${found} questions to multiple_choice.`);
  } else {
    console.log(`Could not find questions.`);
  }
}
run().catch(console.error);
