const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions')
    .where('topicId', '==', 'y7-7a')
    .get();
  
  for (const doc of snapshot.docs) {
    const d = doc.data();
    const q = d.question || '';
    if (q.includes('185.3468') || q.includes('185.34')) {
      console.log(`ID: ${doc.id}`);
      console.log(`Question: ${q}`);
      console.log(`Answer: ${d.answer}`);
      console.log(`Options:`, JSON.stringify(d.options, null, 2));
      
      // Find correct index (185.3468)
      const correctIdx = (d.options || []).findIndex(opt => {
        const t = (opt.text || opt || '').toString();
        return t.includes('185.3468');
      });
      
      if (correctIdx !== -1 && d.answer !== String(correctIdx)) {
        await doc.ref.update({ answer: String(correctIdx) });
        console.log(`Fixed! Answer changed from ${d.answer} to ${correctIdx}`);
      } else if (d.answer === String(correctIdx)) {
        console.log(`Answer already correct (index ${correctIdx})`);
      } else {
        console.log(`Could not find 185.3468 in options`);
      }
    }
  }
}
run().catch(console.error);
