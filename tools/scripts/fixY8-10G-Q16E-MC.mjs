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
  
  let q16eFound = false;
  let q16eRef = null;

  for (let q of Y8_CH10G_QUESTIONS) {
    if (q.id === 'y8-10g-q16e') {
      q16eFound = true;
      q.type = 'multiple_choice';
      q.isManual = false;
      q.requiresManualGrading = false;
      q.options = [
        { text: "\\(1\\)", imageUrl: "" },
        { text: "\\(2\\)", imageUrl: "" },
        { text: "\\(0.5\\)", imageUrl: "" },
        { text: "\\(10\\)", imageUrl: "" }
      ];
      q.a = 0;
      q.answer = "0";
      q16eRef = q;
    }
  }

  if (q16eFound) {
    const fileContent = "export const Y8_CH10G_QUESTIONS = " + JSON.stringify(Y8_CH10G_QUESTIONS, null, 2) + ";\n";
    fs.writeFileSync(filepath, fileContent, 'utf8');

    // Also update it in Firestore
    try {
      await db.collection('questions').doc('y8-10g-q16e').update({
        type: 'multiple_choice',
        isManual: false,
        requiresManualGrading: false,
        options: q16eRef.options,
        a: 0,
        answer: "0",
        updatedAt: FieldValue.serverTimestamp()
      });
    } catch(e) {} // skip if standalone doc doesn't exist

    try {
      const parentRef = db.collection('questions').doc('y8-10g-q16');
      const parentSnap = await parentRef.get();
      if (parentSnap.exists) {
        let parentData = parentSnap.data();
        let subQs = parentData.subQuestions || [];
        for (let i = 0; i < subQs.length; i++) {
          if (subQs[i].id === 'y8-10g-q16e') {
            subQs[i] = { ...subQs[i], ...q16eRef };
            delete subQs[i].opts;
          }
        }
        await parentRef.update({
          subQuestions: subQs,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log(`Successfully updated parent y8-10g-q16 with multiple_choice for q16e.`);
      }
    } catch (e) {
      console.error(`Failed to update parent document:`, e);
    }
    console.log(`Successfully converted y8-10g-q16e to multiple_choice.`);
  } else {
    console.log(`Could not find y8-10g-q16e.`);
  }
}
run().catch(console.error);
