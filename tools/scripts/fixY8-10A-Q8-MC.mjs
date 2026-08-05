import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

async function run() {
  const filepath = path.resolve('src/constants/seedYear8Ch10Questions.js');
  const { Y8_CH10A_QUESTIONS } = await import('../../src/constants/seedYear8Ch10Questions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let q8Found = false;

  for (let q of Y8_CH10A_QUESTIONS) {
    if (q.id === 'y8-10a-q8') {
      q8Found = true;
      q.type = 'multiple_choice';
      q.isManual = false;
      q.options = [
        { text: "The 500 g box is cheaper by \\(\\$0.50\\)", imageUrl: "" },
        { text: "The special packet is cheaper by \\(\\$0.50\\)", imageUrl: "" },
        { text: "The 500 g box is cheaper by \\(\\$1.00\\)", imageUrl: "" },
        { text: "The special packet is cheaper by \\(\\$1.00\\)", imageUrl: "" }
      ];
      q.a = 0;
      q.answer = "0";

      const updateData = {
        type: 'multiple_choice',
        isManual: false,
        options: q.options,
        a: q.a,
        answer: q.answer,
        updatedAt: FieldValue.serverTimestamp()
      };

      await db.collection('questions').doc(q.id).update(updateData);
      console.log(`Updated y8-10a-q8 in Firestore.`);
    }
  }

  if (q8Found) {
    const fileContent = "export const Y8_CH10A_QUESTIONS = " + JSON.stringify(Y8_CH10A_QUESTIONS, null, 2) + ";\n";
    fs.writeFileSync(filepath, fileContent, 'utf8');
    console.log(`Successfully converted y8-10a-q8 to multiple_choice.`);
  } else {
    console.log(`Could not find y8-10a-q8.`);
  }
}
run().catch(console.error);
