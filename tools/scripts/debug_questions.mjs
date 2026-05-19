import { db } from '../firebase/config.js';
import { collection, getDocs, query, limit } from 'firebase/firestore';

async function checkQuestions() {
  try {
    const qCol = collection(db, 'questions');
    const snapshot = await getDocs(query(qCol, limit(150)));
    
    snapshot.forEach(doc => {
      const data = doc.data();
      const question = data.question || data.text || '';
      
      if (question.includes('distance between') || question.includes('Simplify') || question.includes('scientific')) {
        console.log('\n--- Question Found ---');
        console.log('ID:', doc.id);
        console.log('Question Text:', JSON.stringify(question));
        console.log('Options:', JSON.stringify(data.options));
        console.log('Solution:', JSON.stringify(data.solution));
      }
    });
    console.log('\nScan complete.');
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

checkQuestions();
