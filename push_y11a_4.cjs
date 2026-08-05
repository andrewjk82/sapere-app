const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const code = fs.readFileSync('tools/scripts/importYear11AdvCh4.js', 'utf8');
  const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });

  let qList = [];
  traverse(ast, {
    VariableDeclarator(path) {
      if (path.node.id.name === 'allQuestions4A') {
        const arr = path.node.init.elements;
        arr.forEach(el => {
          if (el.type !== 'ObjectExpression') return;
          const qObj = {};
          el.properties.forEach(prop => {
            if (prop.type === 'SpreadElement') return; // ignore spread
            const key = prop.key.name || prop.key.value;
            if (prop.value.type === 'StringLiteral') qObj[key] = prop.value.value;
            if (prop.value.type === 'NumericLiteral') qObj[key] = prop.value.value;
            if (prop.value.type === 'ArrayExpression' && key === 'options') {
              qObj.options = prop.value.elements.map(e => {
                if (e.type === 'StringLiteral') return { text: e.value, imageUrl: '' };
                if (e.type === 'ObjectExpression') {
                  const o = {};
                  e.properties.forEach(p => {
                    const pk = p.key.name || p.key.value;
                    if (p.value.type === 'StringLiteral') o[pk] = p.value.value;
                  });
                  return o;
                }
                return { text: '', imageUrl: '' };
              });
            }
          });
          if (qObj.question) qList.push(qObj);
        });
      }
    }
  });

  console.log(`Found ${qList.length} questions in importYear11AdvCh4.js`);

  let count = 0;
  for (const q of qList) {
    if (!q.question || !q.options) continue;
    const qs = await db.collection('questions').where('question', '==', q.question).get();
    for (const doc of qs.docs) {
      await doc.ref.update({ options: q.options });
      count++;
    }
  }
  console.log(`Updated ${count} docs.`);
}
run().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
