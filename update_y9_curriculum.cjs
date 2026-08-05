const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const y9_14 = {
    id: 'y9-14',
    title: 'Chapter 14: Simultaneous linear equations',
    modules: 7,
    topics: [
      { id: 'y9-14a', code: '14A', title: 'Solving simultaneous equations by drawing graphs' },
      { id: 'y9-14b', code: '14B', title: 'Substitution' },
      { id: 'y9-14c', code: '14C', title: 'Elimination' },
      { id: 'y9-14d', code: '14D', title: 'Problems involving simultaneous linear equations' },
      { id: 'y9-14e', code: '14E', title: 'Geometry and simultaneous equations' },
      { id: 'y9-14f', code: '14F', title: 'Families of straight lines' },
      { id: 'y9-14g', code: '14G', title: 'Revision' }
    ]
  };

  const docRef = db.collection('curriculum').doc('Year_9');
  const doc = await docRef.get();
  
  if (doc.exists) {
    const data = doc.data();
    const exists = data.chapters.find(c => c.id === 'y9-14');
    if (!exists) {
      data.chapters.push(y9_14);
      data.chapters.sort((a, b) => {
        const numA = parseInt(a.id.split('-')[1]);
        const numB = parseInt(b.id.split('-')[1]);
        return numA - numB;
      });
      await docRef.update({ chapters: data.chapters });
      console.log('Successfully added y9-14 to Year_9 profile!');
    } else {
      console.log('y9-14 already exists in Year_9 profile.');
    }
  } else {
    console.log('Year_9 doc not found, creating...');
    await docRef.set({ year: 'Year 9', chapters: [y9_14] });
    console.log('Created Year_9 doc with y9-14.');
  }
}

run().catch(console.error);
