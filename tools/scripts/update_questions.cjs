const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Update fd86831b3328c6ffa2f15e714d3ce14a
  await db.collection('questions').doc('fd86831b3328c6ffa2f15e714d3ce14a').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(x = 1, y = 3\\) or \\(x = -\\frac{9}{5}, y = -\\frac{13}{5}\\)', imageUrl: '' },
      { text: '\\(x = 1, y = 3\\) or \\(x = \\frac{9}{5}, y = \\frac{13}{5}\\)', imageUrl: '' },
      { text: '\\(x = -1, y = -3\\) or \\(x = -\\frac{9}{5}, y = -\\frac{13}{5}\\)', imageUrl: '' },
      { text: '\\(x = 1, y = 2\\) or \\(x = -\\frac{9}{5}, y = -\\frac{13}{5}\\)', imageUrl: '' }
    ],
    answer: '0'
  });
  console.log('Updated fd86831b3328c6ffa2f15e714d3ce14a');

  // Update asc2020-q16
  const docRef = db.collection('questions').doc('asc2020-q16');
  const doc = await docRef.get();
  if (doc.exists) {
    let data = doc.data();
    if (data.subQuestions && data.subQuestions.length === 3) {
      data.subQuestions[0].type = 'multiple_choice';
      data.subQuestions[0].options = [
        { text: '\\(C = 60 + 16x\\)', imageUrl: '' },
        { text: '\\(C = 16 + 60x\\)', imageUrl: '' },
        { text: '\\(C = 60 - 16x\\)', imageUrl: '' },
        { text: '\\(C = 16x\\)', imageUrl: '' }
      ];
      data.subQuestions[0].answer = '0';

      data.subQuestions[1].type = 'multiple_choice';
      data.subQuestions[1].options = [
        { text: '\\(I = 20x\\)', imageUrl: '' },
        { text: '\\(I = 20 + x\\)', imageUrl: '' },
        { text: '\\(I = 60x\\)', imageUrl: '' },
        { text: '\\(I = 16x\\)', imageUrl: '' }
      ];
      data.subQuestions[1].answer = '0';

      data.subQuestions[2].type = 'multiple_choice';
      data.subQuestions[2].options = [
        { text: '15', imageUrl: '' },
        { text: '12', imageUrl: '' },
        { text: '20', imageUrl: '' },
        { text: '16', imageUrl: '' }
      ];
      data.subQuestions[2].answer = '0';

      await docRef.update({ subQuestions: data.subQuestions });
      console.log('Updated asc2020-q16 subquestions to multiple choice');
    }
  }
}
run().catch(console.error);
