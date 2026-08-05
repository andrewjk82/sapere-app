/**
 * fixGraphDataFirebase.js
 * 
 * 시드 파일(seedYear10Ch13AQuestions.js)에서 graphData를 읽어
 * Firebase의 questions 컬렉션에 svg만 사용하도록 업데이트합니다.
 * jsxGraph 필드는 제거합니다.
 */

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Firebase Admin SDK 초기화
const saPath = '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const sa = JSON.parse(fs.readFileSync(saPath, 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({ credential: admin.credential.cert(sa) });
}

const db = admin.firestore();

// 시드 파일 동적 임포트 (ESM → CJS 변환)
const seedFilePath = path.resolve('/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js');
const seedContent = fs.readFileSync(seedFilePath, 'utf8');

// export const ... 를 module.exports = ... 로 변환
const cjsContent = seedContent.replace(
  'export const Y10_CH13A_QUESTIONS',
  'const Y10_CH13A_QUESTIONS'
) + '\nmodule.exports = { Y10_CH13A_QUESTIONS };';

const tmpPath = '/tmp/seedYear10Ch13AQuestions_tmp.js';
fs.writeFileSync(tmpPath, cjsContent);
const { Y10_CH13A_QUESTIONS } = require(tmpPath);

async function fixGraphData() {
  const questionsWithGraph = Y10_CH13A_QUESTIONS.filter(q => q.graphData && q.graphData.svg);
  
  console.log(`총 ${Y10_CH13A_QUESTIONS.length}개 문제 중 graphData.svg가 있는 문제: ${questionsWithGraph.length}개`);
  
  const batch = db.batch();
  let updateCount = 0;

  for (const question of questionsWithGraph) {
    const ref = db.collection('questions').doc(question.id);
    
    // svg만 사용하도록 graphData 정리 (jsxGraph 제거)
    const cleanGraphData = {
      svg: question.graphData.svg
    };

    batch.update(ref, {
      graphData: cleanGraphData
    });

    console.log(`  ✓ ${question.id} - graphData.svg로 업데이트 예정`);
    updateCount++;

    // Firestore 배치 한계(500개) 근처면 커밋
    if (updateCount % 490 === 0) {
      await batch.commit();
      console.log(`배치 커밋: ${updateCount}개 완료`);
    }
  }

  await batch.commit();
  console.log(`\n✅ 완료! 총 ${updateCount}개 문제의 graphData를 svg 전용으로 업데이트했습니다.`);
  process.exit(0);
}

fixGraphData().catch(err => {
  console.error('❌ 오류 발생:', err);
  process.exit(1);
});
