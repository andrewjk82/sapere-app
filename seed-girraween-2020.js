/**
 * 시드 스크립트: Girraween 2020 2U 수학 문제를 Firestore에 씨딩
 *
 * 사용법:
 *   node seed-girraween-2020.js
 *
 * 필요 환경변수:
 *   - FIREBASE_PROJECT_ID
 *   - FIREBASE_CLIENT_EMAIL
 *   - FIREBASE_PRIVATE_KEY
 */

import admin from 'firebase-admin';
import { GIRRAWEEN_2020_ALL_QUESTIONS } from './tools/seeds/girraween/index.js';

// Firebase Admin 초기화
function getAdminApp() {
  if (admin.apps.length > 0) return admin.apps[0];

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Missing Firebase credentials (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY)');
  }

  return admin.initializeApp({
    credential: admin.credential.cert({ projectId, clientEmail, privateKey })
  });
}

async function seedQuestions() {
  try {
    const app = getAdminApp();
    const db = admin.firestore(app);

    console.log('🌱 Seeding Girraween 2020 questions to Firestore...');
    console.log(`📊 Total questions: ${GIRRAWEEN_2020_ALL_QUESTIONS.length}`);

    const batch = db.batch();
    let count = 0;

    for (const question of GIRRAWEEN_2020_ALL_QUESTIONS) {
      const docRef = db.collection('questions').doc(question.id);

      // 기존 문서의 origin이 'teacher'면 스킵 (사용자 편집 보호)
      try {
        const existing = await docRef.get();
        if (existing.exists && existing.data()?.origin === 'teacher') {
          console.log(`⏭️  Skipping ${question.id} (teacher-edited, protected)`);
          continue;
        }
      } catch (err) {
        // 문서가 없으면 계속
      }

      // 시드 질문에 메타데이터 추가
      const seedQuestion = {
        ...question,
        origin: 'seed',
        seedFile: 'girraween-2020',
        _seedTimestamp: admin.firestore.FieldValue.serverTimestamp(),
      };

      batch.set(docRef, seedQuestion, { merge: false });
      count++;

      if (count % 10 === 0) {
        console.log(`✅ Prepared ${count}/${GIRRAWEEN_2020_ALL_QUESTIONS.length} questions...`);
      }
    }

    console.log(`\n📝 Committing ${count} questions to Firestore...`);
    await batch.commit();

    console.log(`\n✨ Success! Seeded ${count} questions to Firestore`);
    console.log(`   - Chapter ID: exam:girr-2020`);
    console.log(`   - School: Girraween High School`);
    console.log(`   - Year: 2020`);
    console.log(`   - Subject: Year 12 Mathematics Advanced (2U)`);
    console.log(`   - Total Marks: 100`);

    process.exit(0);

  } catch (error) {
    console.error('❌ Error seeding questions:', error.message);
    console.error(error);
    process.exit(1);
  }
}

// 실행
seedQuestions();
