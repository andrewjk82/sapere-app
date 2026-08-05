import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('Im3hhX4zl9vb8HthBfuh');
  const doc = await docRef.get();
  const data = doc.data();
  
  if (!data.subQuestions) {
    console.error('No subQuestions found');
    return;
  }
  
  const updatedSubQs = data.subQuestions.map(sq => {
    if (sq.partLabel === 'a') {
      sq.type = 'multiple_choice';
      sq.options = [
        '\\(\\{x\\}\\)',
        '\\(\\emptyset, \\{x\\}\\)',
        '\\(\\emptyset, \\{x\\}, \\{y\\}\\)',
        '\\(\\emptyset\\)'
      ];
      sq.answer = 1;
    } else if (sq.partLabel === 'b') {
      sq.type = 'multiple_choice';
      sq.options = [
        '\\(\\emptyset, \\{x\\}, \\{y\\}\\)',
        '\\(\\{x\\}, \\{y\\}, \\{x, y\\}\\)',
        '\\(\\emptyset, \\{x\\}, \\{y\\}, \\{x, y\\}\\)',
        '\\(\\emptyset, \\{x, y\\}\\)'
      ];
      sq.answer = 2;
    } else if (sq.partLabel === 'c') {
      sq.type = 'multiple_choice';
      sq.options = [
        '\\(\\emptyset, \\{x\\}, \\{y\\}, \\{z\\}, \\{x, y, z\\}\\)',
        '\\(\\{x\\}, \\{y\\}, \\{z\\}, \\{x, y\\}, \\{x, z\\}, \\{y, z\\}, \\{x, y, z\\}\\)',
        '\\(\\emptyset, \\{x, y\\}, \\{x, z\\}, \\{y, z\\}, \\{x, y, z\\}\\)',
        '\\(\\emptyset, \\{x\\}, \\{y\\}, \\{z\\}, \\{x, y\\}, \\{x, z\\}, \\{y, z\\}, \\{x, y, z\\}\\)'
      ];
      sq.answer = 3;
    } else if (sq.partLabel === 'd') {
      sq.type = 'multiple_choice';
      sq.options = [
        '\\(\\emptyset\\)',
        '\\(\\{\\emptyset\\}\\)',
        '\\(\\{0\\}\\)',
        'None'
      ];
      sq.answer = 0;
    }
    return sq;
  });

  await docRef.update({ subQuestions: updatedSubQs });
  console.log('Successfully updated subQuestions to multiple choice for Im3hhX4zl9vb8HthBfuh');
}

run().catch(console.error);
