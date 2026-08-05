import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const allDocs = await db.collection('questions').get();
  const allQuestionsData = [];
  allDocs.forEach(doc => {
    const data = doc.data();
    const cId = data.chapterId || data.ChapterId;
    if (cId === 'y7-04' || cId === 'y7-4') {
      allQuestionsData.push({ id: doc.id, ...data });
    }
  });

  const scriptPath = './importYear7Ch4.js';
  const localImportContent = `import { db } from '../firebase/config.js';\nimport { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';\n\nexport const allQuestions = ${JSON.stringify(allQuestionsData, null, 2)};\n\nexport const importYear7Ch4 = async (forceReset = false) => {\n  console.log('[Ch4 Year 7 Import] STARTING PHYSICAL SYNC...');\n  let importedCount = 0;\n  try {\n    const qRef = collection(db, 'questions');\n    \n    if (forceReset) {\n      console.log('Force reset enabled. Deleting existing Y7 Ch4 questions...');\n      const topicsToDelete = ['y7-04a', 'y7-04b', 'y7-04c', 'y7-04d', 'y7-04e', 'y7-04f', 'y7-4a', 'y7-4b', 'y7-4c', 'y7-4d', 'y7-4e', 'y7-4f'];\n      for (const tId of topicsToDelete) {\n        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));\n        for (const doc of existingSnap.docs) {\n          await deleteDoc(doc.ref);\n        }\n      }\n      console.log('Deleted existing Ch4 topic questions.');\n    }\n\n    const existingQuestions = new Set();\n    const topicsToCheck = ['y7-04a', 'y7-04b', 'y7-04c', 'y7-04d', 'y7-04e', 'y7-04f', 'y7-4a', 'y7-4b', 'y7-4c', 'y7-4d', 'y7-4e', 'y7-4f'];\n    for (const tId of topicsToCheck) {\n      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));\n      existingSnap.docs.forEach(doc => {\n        existingQuestions.add(doc.data().question.trim());\n      });\n    }\n    \n    for (const q of allQuestions) {\n      if (!existingQuestions.has(q.question.trim())) {\n        await addDoc(collection(db, 'questions'), q);\n        importedCount++;\n      }\n    }\n    console.log('[Ch4 Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');\n    return importedCount;\n  } catch (error) {\n    console.error('[Ch4 Year 7 Import] ERROR:', error);\n    return 0;\n  }\n};\n`;
  fs.writeFileSync(scriptPath, localImportContent, 'utf8');
  console.log('Import file updated successfully.');
}
run().catch(console.error);
