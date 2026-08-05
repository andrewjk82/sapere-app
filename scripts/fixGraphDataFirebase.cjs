const admin = require('firebase-admin');
const fs = require('fs');
const vm = require('vm');

const saPath = '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const sa = JSON.parse(fs.readFileSync(saPath, 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({ credential: admin.credential.cert(sa) });
}

const db = admin.firestore();

// ESM 파일을 vm으로 파싱
const seedFilePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
const seedContent = fs.readFileSync(seedFilePath, 'utf8');

// export const ... → const ... 로 변환 후 vm에서 실행
const scriptContent = seedContent.replace(/^export const /, 'const ');
const context = {};
vm.createContext(context);
vm.runInContext(scriptContent, context);

const Y10_CH13A_QUESTIONS = context.Y10_CH13A_QUESTIONS;
console.log(`총 문제 수: ${Y10_CH13A_QUESTIONS.length}개`);

async function pushToFirebase() {
  let updateCount = 0;
  let currentBatch = db.batch();
  const commits = [];

  for (const question of Y10_CH13A_QUESTIONS) {
    const ref = db.collection('questions').doc(question.id);
    currentBatch.set(ref, question, { merge: true });
    updateCount++;

    if (updateCount % 400 === 0) {
      commits.push(currentBatch.commit());
      currentBatch = db.batch();
      console.log(`  배치 커밋 예약: ${updateCount}개`);
    }
  }

  commits.push(currentBatch.commit());
  await Promise.all(commits);

  console.log(`\n✅ 완료! 총 ${updateCount}개 문제를 시드 그대로 Firebase에 업데이트했습니다.`);
  process.exit(0);
}

pushToFirebase().catch(err => {
  console.error('❌ 오류:', err);
  process.exit(1);
});
