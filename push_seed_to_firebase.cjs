const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Babel로 시드 파일 파싱 → JS 오브젝트 추출
  const code = fs.readFileSync('src/constants/seedYear9Ch14BQuestions.js', 'utf8');
  const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });

  let questions = null;
  traverse(ast, {
    ExportNamedDeclaration(path) {
      const decl = path.node.declaration;
      if (decl && decl.type === 'VariableDeclaration') {
        for (const declarator of decl.declarations) {
          if (declarator.id.name === 'Y9_CH14B_QUESTIONS') {
            // eval the init node by re-stringifying its source
            const { start, end } = declarator.init;
            const arrSrc = code.slice(start, end);
            // Use Function constructor to safely evaluate the JS array literal
            questions = (new Function(`return ${arrSrc}`))();
          }
        }
      }
    }
  });

  if (!questions) {
    console.error('❌ Y9_CH14B_QUESTIONS를 파싱할 수 없습니다.');
    process.exit(1);
  }

  console.log(`총 ${questions.length}개 문제를 Firebase에 업데이트합니다...`);

  let count = 0;
  for (const question of questions) {
    if (question.opts && !question.options) {
      question.options = question.opts.map(opt => 
        typeof opt === 'string' ? { text: opt, imageUrl: "" } : opt
      );
      delete question.opts;
    }
    const ref = db.collection('questions').doc(question.id);
    await ref.set(question, { merge: true });
    count++;
    if (count % 10 === 0) console.log(`  ${count}/${questions.length} 완료...`);
  }

  console.log(`\n✅ 완료! 총 ${count}개 문제를 시드 그대로 Firebase에 업데이트했습니다.`);
  process.exit(0);
}

run().catch(err => {
  console.error('❌ 오류:', err);
  process.exit(1);
});
