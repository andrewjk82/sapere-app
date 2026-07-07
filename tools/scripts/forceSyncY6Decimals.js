import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { DECIMALS_QUESTIONS_Y6 } from '../../src/constants/seedYear6DecimalsQuestions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const run = async () => {
  try {
    const collRef = db.collection('questions');
    
    console.log(`Writing ${DECIMALS_QUESTIONS_Y6.length} decimals questions...`);
    const version = Date.now();
    const batchSize = 100;
    
    for (let i = 0; i < DECIMALS_QUESTIONS_Y6.length; i += batchSize) {
      const batch = db.batch();
      DECIMALS_QUESTIONS_Y6.slice(i, i + batchSize).forEach(qData => {
        const docRef = collRef.doc(qData.id);
        let optionsField = qData.options || [];
        let answerField = String(qData.answer);
        
        batch.set(docRef, {
          chapterId: qData.chapterId,
          chapterTitle: qData.chapterId === 'y6-rn' ? 'Chapter 3: Represents Numbers (B)' :
                        qData.chapterId === 'y6-ar' ? 'Chapter 4: Additive Relations (B)' :
                        'Chapter 5: Multiplicative Relations (B)',
          topicId: qData.topicId,
          topicCode: qData.topicId === 'y6-rn-2' ? 'MA3-RN-01' :
                     qData.topicId === 'y6-ar-2' ? 'MA3-AR-01' :
                     'MA3-MR-01',
          topicTitle: qData.topicId === 'y6-rn-2' ? 'Fractions, decimals, percentages' :
                      qData.topicId === 'y6-ar-2' ? 'Add and subtract decimals' :
                      'Multiply and divide decimals',
          isManual: true,
          origin: "seed",
          title: qData.question.replace(/\\\\\(|\\\\\)/g, '').slice(0, 30) + '...',
          question: qData.question,
          difficulty: qData.difficulty || 'easy',
          timeLimit: 120,
          type: qData.type,
          options: optionsField,
          answer: answerField,
          hint: qData.hint || "",
          solution: "",
          solutionSteps: qData.solutionSteps || [],
          isNew: qData.isNew || false,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          bankVersion: version
        }, { merge: true });
      });
      await batch.commit();
    }
    console.log("Successfully seeded decimals questions.");

    // Rebuild index for chapter y6-rn, y6-ar, y6-mr
    const chapters = ['y6-rn', 'y6-ar', 'y6-mr'];
    for (const chapterId of chapters) {
      console.log(`Rebuilding index for chapter ${chapterId}...`);
      const snap = await db.collection('questions').where('chapterId', '==', chapterId).get();
      const activeIds = [];
      snap.docs.forEach(doc => {
        const data = doc.data();
        if (data.isActive !== false) {
          activeIds.push(doc.id);
        }
      });
      activeIds.sort();
      await db.collection('question_index').doc(chapterId).set({
        ids: activeIds,
        count: activeIds.length,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log(`Rebuilt chapter index ${chapterId} with ${activeIds.length} questions.`);
    }

    // Stamp sync_meta
    await db.collection('sync_meta').doc('questions').set({
      version,
      membershipVersion: version,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    
    await db.collection('question_index').doc('_meta').set({
      builtVersion: version,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    console.log("Successfully completed sync for Y6 Decimals!");
    process.exit(0);
  } catch (err) {
    console.error("Force sync failed:", err);
    process.exit(1);
  }
};

run();
