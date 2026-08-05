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
  
  // The new precise text
  const newQuestionText = "A plan of a tennis court is drawn to a scale of \\(1\\text{ cm}\\) to represent \\(200\\text{ cm}\\) (\\(1 : 200\\)). The plan measurements are as follows:\n- Length of the court: \\(12\\text{ cm}\\)\n- Width of the court: \\(6\\text{ cm}\\)\n- Distance from base line to service line: \\(3.2\\text{ cm}\\)\n- Distance between singles and doubles side lines: \\(0.5\\text{ cm}\\)";

  // We need to update the parent document text in Firestore
  const parentId = 'y8-10g-q16';
  const parentRef = db.collection('questions').doc(parentId);

  try {
    await parentRef.update({
      question: newQuestionText,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log(`Updated parent document ${parentId} in Firestore.`);
  } catch (e) {
    console.log(`Failed to update parent document:`, e);
  }

  console.log(`Successfully completed Q16 diagram text fix.`);
}
run().catch(console.error);
