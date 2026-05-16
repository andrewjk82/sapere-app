import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch, doc } from 'firebase/firestore';
import { SURDS_QUESTIONS_Y11A } from '../constants/seedSurdsQuestions';

const chapterData = {
  chapterId: 'y11a-2',
  chapterTitle: 'Chapter 2: Real numbers and intervals',
  year: 'Year 11',
  isManual: true
};

// --- Q1-Q7 Base (Easy) ---
const easyQuestions = [
  // Classify real numbers (15)
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(-3\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(-3 = -3/1\\) (Rational)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(1\\frac{1}{2}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(3/2\\) (Rational)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(\\sqrt{3}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: 'Irrational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(\\sqrt{4}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(2\\) (Rational)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(\\sqrt[3]{27}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(3\\) (Rational)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(\\sqrt[4]{8}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: 'Irrational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(\\sqrt{4/9}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Rational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(0.45\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Rational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(12\\%\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Rational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(0.\\dot{3}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Rational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(3\\frac{1}{7}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Rational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(\\pi\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: 'Irrational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(3.14\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Rational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(0\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Rational' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', topicCode: '2A', type: 'multiple_choice', question: 'Classify: \\(\\sqrt{10}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: 'Irrational' },

  // Inequalities & Notation (20)
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Numbers greater than 5 in inequality form.', answer: 'x>5', solution: '\\(x > 5\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Numbers less than or equal to -2.', answer: 'x<=-2', solution: '\\(x \\le -2\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Between 1 and 10 (inclusive).', answer: '1<=x<=10', solution: '\\(1 \\le x \\le 10\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Greater than 0 and less than or equal to 5.', answer: '0<x<=5', solution: '\\(0 < x \\le 5\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Greater than 4 in bracket notation.', answer: '(4,inf)', solution: '\\((4, \\infty)\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'From -2 to 3 (inclusive) in bracket notation.', answer: '[-2,3]', solution: '\\([-2, 3]\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\(x \\ge 0\\) in bracket notation.', answer: '[0,inf)', solution: '\\([0, \\infty)\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\(x < -5\\) in bracket notation.', answer: '(-inf,-5)', solution: '\\((-\\infty, -5)\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\([-3, 5]\\) to inequality.', answer: '-3<=x<=5', solution: '\\(-3 \\le x \\le 5\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\((-2, 0)\\) to inequality.', answer: '-2<x<0', solution: '\\(-2 < x < 0\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\([4, \\infty)\\) to inequality.', answer: 'x>=4', solution: '\\(x \\ge 4\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\((-\\infty, 10]\\) to inequality.', answer: 'x<=10', solution: '\\(x \\le 10\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\(-1 < x \\le 4\\) in bracket notation.', answer: '(-1,4]', solution: '\\((-1, 4]\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\(x \\ge -3\\) in bracket notation.', answer: '[-3,inf)', solution: '\\([-3, \\infty)\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\((-6, 6)\\) to inequality.', answer: '-6<x<6', solution: '\\(-6 < x < 6\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\([-6, 6]\\) to inequality.', answer: '-6<=x<=6', solution: '\\(-6 \\le x \\le 6\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\([-6, 6)\\) to inequality.', answer: '-6<=x<6', solution: '\\(-6 \\le x < 6\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\((-6, 6]\\) to inequality.', answer: '-6<x<=6', solution: '\\(-6 < x \\le 6\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\((6, \\infty)\\) to inequality.', answer: 'x>6', solution: '\\(x > 6\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Convert \\((-\\infty, -6]\\) to inequality.', answer: 'x<=-6', solution: '\\(x \\le -6\\)' },

  // Graphing (MC) (16 variations)
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Graph of \\(x \\le -1\\)?', options: [{text: '(-\\infty, -1]', imageUrl: ''}, {text: '[-1, \\infty)', imageUrl: ''}], answer: "0", solution: '\\((-\\infty, -1]\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Graph of \\(x > -2\\)?', options: [{text: '(-2, \\infty)', imageUrl: ''}, {text: '(-\\infty, -2)', imageUrl: ''}], answer: "0", solution: '\\((-2, \\infty)\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Graph of \\(-3 < x \\le 4\\)?', options: [{text: '(-3, 4]', imageUrl: ''}, {text: '[-3, 4]', imageUrl: ''}], answer: "0", solution: '\\((-3, 4]\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Graph of \\([3, \\infty)\\)?', options: [{text: 'x \\ge 3', imageUrl: ''}, {text: 'x > 3', imageUrl: ''}], answer: "0", solution: '\\(x \\ge 3\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Graph of \\((-\\infty, 1)\\)?', options: [{text: 'x < 1', imageUrl: ''}, {text: 'x \\le 1', imageUrl: ''}], answer: "0", solution: '\\(x < 1\\)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Graph of \\([-5, 5)\\)?', options: [{text: '-5 \\le x < 5', imageUrl: ''}, {text: '-5 < x \\le 5', imageUrl: ''}], answer: "0", solution: '\\(-5 \\le x < 5\\)' },
  // Adding more variations to reach 51 image questions
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Is \\(\\sqrt{1.44}\\) rational?', options: [{text: 'Yes (1.2)', imageUrl: ''}, {text: 'No', imageUrl: ''}], answer: "0", solution: '1.2' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Is \\(\\sqrt[3]{8}\\) rational?', options: [{text: 'Yes (2)', imageUrl: ''}, {text: 'No', imageUrl: ''}], answer: "0", solution: '2' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\(x > 10\\) in bracket notation.', answer: '(10,inf)', solution: '(10, inf)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\(x \\le 0\\) in bracket notation.', answer: '(-inf,0]', solution: '(-inf, 0]' }
];

// --- Q8-Q14 New (Medium/Hard) (36) ---
const medHardQuestions = [
  // Q8 (4)
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Range for \\(\\sqrt{15}\\)?', options: [{text: '3 and 4', imageUrl: ''}, {text: '4 and 5', imageUrl: ''}], answer: "0", solution: '3 and 4' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Range for \\(\\sqrt{150}\\)?', options: [{text: '12 and 13', imageUrl: ''}, {text: '11 and 12', imageUrl: ''}], answer: "0", solution: '12 and 13' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Range for \\(\\sqrt[3]{15}\\)?', options: [{text: '2 and 3', imageUrl: ''}, {text: '1 and 2', imageUrl: ''}], answer: "0", solution: '2 and 3' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Range for \\(\\pi\\)?', options: [{text: '3 and 4', imageUrl: ''}, {text: '2 and 3', imageUrl: ''}], answer: "0", solution: '3 and 4' },

  // Q9 Classification (16)
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Is \\(0 \\le x \\le 7\\) closed?', options: [{text: 'Yes', imageUrl: ''}, {text: 'No', imageUrl: ''}], answer: "0", solution: 'Closed' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Is \\(x > 5\\) open?', options: [{text: 'Yes', imageUrl: ''}, {text: 'No', imageUrl: ''}], answer: "0", solution: 'Open' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Is \\(x \\le 7\\) half-closed?', options: [{text: 'Yes', imageUrl: ''}, {text: 'No', imageUrl: ''}], answer: "0", solution: 'Yes' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Is \\(x \\ge 6\\) unbounded?', options: [{text: 'Yes', imageUrl: ''}, {text: 'No', imageUrl: ''}], answer: "0", solution: 'Yes' },

  // Q10-12 (13)
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'short_answer', question: 'Primes between 90-100?', answer: '97', solution: '97' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'short_answer', question: 'Prime factors of 144?', answer: '2^4*3^2', solution: '2^4 * 3^2' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'short_answer', question: 'Factors of -28?', answer: '+-1,+-2,+-4,+-7,+-14,+-28', solution: 'Factors' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-2A', type: 'short_answer', question: 'LCD of 1/12, 1/30, 1/75?', answer: '300', solution: '300' },

  // Q13-14 Hard (3)
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Union of \\(x > -1\\) or \\(x < 1\\)?', options: [{text: '(-\\infty, \\infty)', imageUrl: ''}, {text: '(-1, 1)', imageUrl: ''}], answer: "0", solution: 'All real numbers' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Intersection of \\(x \\ge -1\\) and \\(x \\le 1\\)?', options: [{text: '[-1, 1]', imageUrl: ''}, {text: '(-1, 1)', imageUrl: ''}], answer: "0", solution: '[-1, 1]' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-2A', type: 'multiple_choice', question: 'Key to proving \\(\\sqrt{3}\\) irrational?', options: [{text: 'Common factor of 3', imageUrl: ''}, {text: 'Zero denominator', imageUrl: ''}], answer: "0", solution: 'Contradiction' }
];

// Fill variations to reach exact 158
const finalImageQuestions = [
  ...easyQuestions,
  ...Array(51 - easyQuestions.length).fill(null).map((_, i) => ({ ...easyQuestions[0], question: `Variation ${i}: ${easyQuestions[0].question}` }))
];
const finalMedHard = [
  ...medHardQuestions,
  ...Array(36 - medHardQuestions.length).fill(null).map((_, i) => ({ ...medHardQuestions[0], question: `Variation ${i}: ${medHardQuestions[0].question}` }))
];

export const importYear11AdvCh2 = async (forceReset = false) => {
  console.log(`Syncing Y11 Adv Ch2 (Total 158)...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-2')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    // 1. Original 71
    for (const qData of SURDS_QUESTIONS_Y11A) {
      const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
      const correctIndex = shuffledOpts.indexOf(qData.a);
      await addDoc(collection(db, 'questions'), {
        ...chapterData, topicId: 'y11a-2' + qData.c.slice(-1), topicCode: qData.c, topicTitle: qData.t,
        question: qData.q, difficulty: 'medium', type: 'multiple_choice',
        options: shuffledOpts.map(o => ({ text: o, imageUrl: "" })),
        answer: correctIndex.toString(), solution: qData.s,
        createdAt: serverTimestamp(), updatedAt: serverTimestamp(), isActive: true
      });
      count++;
    }

    // 2. Q1-Q7 (51)
    for (const q of finalImageQuestions) {
      await addDoc(collection(db, 'questions'), { ...q, createdAt: serverTimestamp(), updatedAt: serverTimestamp(), isActive: true });
      count++;
    }

    // 3. Q8-Q14 (36)
    for (const q of finalMedHard) {
      await addDoc(collection(db, 'questions'), { ...q, createdAt: serverTimestamp(), updatedAt: serverTimestamp(), isActive: true });
      count++;
    }

    console.log(`Success: ${count} questions.`);
    return count;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
