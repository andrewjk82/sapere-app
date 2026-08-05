const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function fixGraphData() {
  const qIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].map(x => 'y11a-5i-q17' + x);
  
  for (let qid of qIds) {
    let docRef = db.collection('questions').doc(qid);
    let doc = await docRef.get();
    if (doc.exists) {
      let data = doc.data();
      if (data.graphData && data.graphData.jsxGraph && data.graphData.jsxGraph.script) {
        let script = data.graphData.jsxGraph.script;
        if (script.includes('\\n')) {
          console.log(`Fixing double backslashes in ${qid}`);
          script = script.replace(/\\n/g, '\n');
          data.graphData.jsxGraph.script = script;
          await docRef.update({ graphData: data.graphData });
        }
      }
    } else {
      // Check subQuestions if any
      let snap = await db.collection('questions').get();
      for (let d of snap.docs) {
        let parentData = d.data();
        if (parentData.subQuestions) {
          let sqIdx = parentData.subQuestions.findIndex(sq => sq.id === qid);
          if (sqIdx > -1) {
            let sq = parentData.subQuestions[sqIdx];
            if (sq.graphData && sq.graphData.jsxGraph && sq.graphData.jsxGraph.script) {
              let script = sq.graphData.jsxGraph.script;
              if (script.includes('\\n')) {
                console.log(`Fixing double backslashes in ${qid} (subquestion)`);
                script = script.replace(/\\n/g, '\n');
                sq.graphData.jsxGraph.script = script;
                parentData.subQuestions[sqIdx] = sq;
                await db.collection('questions').doc(d.id).update({ subQuestions: parentData.subQuestions });
              }
            }
          }
        }
      }
    }
  }
  console.log('Done fixing graphData for q17 series.');
  process.exit(0);
}

fixGraphData();
