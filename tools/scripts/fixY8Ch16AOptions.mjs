import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';

async function fixOptions() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const { Y8_CH16A_QUESTIONS } = await import('../../src/constants/seedYear8Ch16Questions.js');
  let count = 0;
  
  for (const q of Y8_CH16A_QUESTIONS) {
    if (!q.id.startsWith('y8-16a')) continue;
    
    // Convert opts strings into options objects
    const modernOptions = (q.opts || []).map(optString => ({
      text: optString,
      imageUrl: ''
    }));

    await db.collection('questions').doc(q.id).set({
      options: modernOptions,
      isManual: false,               // Crucial: disables "Type answer..." text box
      requiresManualGrading: false,
      type: 'multiple_choice'
    }, { merge: true });
    
    count++;
  }
  console.log(`Successfully fixed options and removed isManual for ${count} questions in Firestore.`);
  
  // Also fix the local seed file just in case it's used elsewhere
  const filepath = path.resolve('src/constants/seedYear8Ch16Questions.js');
  let content = fs.readFileSync(filepath, 'utf8');
  const exportMatch = content.match(/export const (Y8_CH16A_QUESTIONS) = /);
  const prefix = 'export const ' + exportMatch[1] + ' = ';
  const startIndex = content.indexOf(prefix);
  let arrayContent = content.substring(startIndex + prefix.length).trim();
  if (arrayContent.endsWith(';')) arrayContent = arrayContent.substring(0, arrayContent.length - 1);
  const questions = eval('(' + arrayContent + ')');
  for (const localQ of questions) {
    localQ.options = (localQ.opts || []).map(opt => ({text: opt, imageUrl: ''}));
    localQ.isManual = false;
  }
  const newContent = prefix + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(filepath, newContent, 'utf8');
  console.log('Successfully updated local seed file with options.');
}

fixOptions().catch(console.error);
