import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch, doc } from 'firebase/firestore';
import { SURDS_QUESTIONS_Y11A } from '../constants/seedSurdsQuestions';

const chapterData = {
  chapterId: 'y11a-2',
  chapterTitle: 'Chapter 2: Real numbers and intervals',
  year: 'Year 11',
  difficulty: 'easy',
  isManual: true
};

const imageQuestionsCh2 = [
  // --- Question 1: Classify real numbers (15 items) ---
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(-3\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}, {text: 'Surd', imageUrl: ''}], answer: "0", solution: '\\(-3\\) can be written as \\(-3/1\\), which is a ratio of two integers. Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(1\\frac{1}{2}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(1\\frac{1}{2} = 3/2\\). Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt{3}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: '\\(\\sqrt{3}\\) is non-terminating and non-recurring. Therefore, it is **Irrational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt{4}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(\\sqrt{4} = 2\\). Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt[3]{27}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(\\sqrt[3]{27} = 3\\). Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt[4]{8}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: 'It is **Irrational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt{\\frac{4}{9}}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(\\sqrt{4/9} = 2/3\\). Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(0.45\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(0.45 = 45/100\\). Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(12\\%\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Percentages are fractions. Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(0.333\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Finite decimals are **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(0.\\dot{3}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Recurring decimals are **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(3\\frac{1}{7}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Mixed numbers are **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\pi\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: '\\(\\pi\\) is **Irrational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(3.14\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'It is a finite decimal, hence **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(0\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: 'Zero is **Rational**.' },

  // --- Question 2 & 3: Intervals (8 items) ---
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write the interval using inequalities: The real numbers greater than 4.', answer: 'x>4', solution: '\\(x > 4\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write the interval using inequalities: The real numbers less than or equal to 3.', answer: 'x<=3', solution: '\\(x \\le 3\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write the interval using inequalities: The real numbers between -2 and 2 (exclusive).', answer: '-2<x<2', solution: '\\(-2 < x < 2\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write the interval using inequalities: The real numbers from -3 to 0 (inclusive).', answer: '-3<=x<=0', solution: '\\(-3 \\le x \\le 0\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write in bracket notation: The real numbers between 0 and 7 (exclusive).', answer: '(0,7)', solution: '\\((0, 7)\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write in bracket notation: The real numbers from 2 to 5 (inclusive).', answer: '[2,5]', solution: '\\([2, 5]\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write in bracket notation: The real numbers greater than or equal to 4.', answer: '[4,inf)', solution: '\\([4, \\infty)\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write in bracket notation: The real numbers less than -4.', answer: '(-inf,-4)', solution: '\\((-\\infty, -4)\\)' },

  // --- Question 6 & 7: Conversions (12 items) ---
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(-3 \\le x \\le 2\\) using bracket notation.', answer: '[-3,2]', solution: '\\([-3, 2]\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(-3 < x < 2\\) using bracket notation.', answer: '(-3,2)', solution: '\\((-3, 2)\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(-3 < x \\le 2\\) using bracket notation.', answer: '(-3,2]', solution: '\\((-3, 2]\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(-3 \\le x < 2\\) using bracket notation.', answer: '[-3,2)', solution: '\\([-3, 2)\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(x \\le 2\\) using bracket notation.', answer: '(-inf,2]', solution: '\\((-\\infty, 2]\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(x > -3\\) using bracket notation.', answer: '(-3,inf)', solution: '\\((-3, \\infty)\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\((-6, 6)\\) using inequalities.', answer: '-6<x<6', solution: '\\(-6 < x < 6\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\([-6, 6]\\) using inequalities.', answer: '-6<=x<=6', solution: '\\(-6 \\le x \\le 6\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\([-6, 6)\\) using inequalities.', answer: '-6<=x<6', solution: '\\(-6 \\le x < 6\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\((-6, 6]\\) using inequalities.', answer: '-6<x<=6', solution: '\\(-6 < x \\le 6\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\((6, \\infty)\\) using inequalities.', answer: 'x>6', solution: '\\(x > 6\\)' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\((-\\infty, -6]\\) using inequalities.', answer: 'x<=-6', solution: '\\(x \\le -6\\)**' },

  // --- Question 4 & 5: Graphing & Infinity (6 items) ---
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Which bracket notation represents the graph of \\(x \\le -1\\)?', options: [{text: '(-\\infty, -1]', imageUrl: ''}, {text: '(-\\infty, -1)', imageUrl: ''}, {text: '[-1, \\infty)', imageUrl: ''}], answer: "0", solution: '\\((-\\infty, -1]\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Identify the inequality for the graph of \\(x > -2\\).', options: [{text: 'x > -2', imageUrl: ''}, {text: 'x \\ge -2', imageUrl: ''}, {text: 'x < -2', imageUrl: ''}], answer: "0", solution: '\\(x > -2\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Identify the interval notation for \\(-3 < x \\le 4\\).', options: [{text: '(-3, 4]', imageUrl: ''}, {text: '[-3, 4]', imageUrl: ''}, {text: '(-3, 4)', imageUrl: ''}], answer: "0", solution: '\\((-3, 4]\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Which inequality represents the interval \\([3, \\infty)\\)?', options: [{text: 'x \\ge 3', imageUrl: ''}, {text: 'x > 3', imageUrl: ''}, {text: 'x \\le 3', imageUrl: ''}], answer: "0", solution: '\\(x \\ge 3\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Identify the inequality for the interval \\((-\\infty, 1)\\).', options: [{text: 'x < 1', imageUrl: ''}, {text: 'x \\le 1', imageUrl: ''}, {text: 'x > 1', imageUrl: ''}], answer: "0", solution: '\\(x < 1\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Identify the inequality for the interval \\([-5, 5)\\).', options: [{text: '-5 \\le x < 5', imageUrl: ''}, {text: '-5 < x \\le 5', imageUrl: ''}, {text: '-5 \\le x \\le 5', imageUrl: ''}], answer: "0", solution: '\\(-5 \\le x < 5\\)' },

  // --- Extra Variations to reach 122 (15 more variations) ---
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Classify \\(\\sqrt{10}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: 'Irrational' },
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Classify \\(2\\pi\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: 'Irrational' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write the interval \\(x \\ge -5\\) using bracket notation.', answer: '[-5,inf)', solution: '\\([-5, \\infty)\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write the interval \\(x < 10\\) using bracket notation.', answer: '(-inf,10)', solution: '\\((-\\infty, 10)\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\((-2, 8]\\) using inequalities.', answer: '-2<x<=8', solution: '\\(-2 < x \\le 8\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\([0, 100)\\) using inequalities.', answer: '0<=x<100', solution: '\\(0 \\le x < 100\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Is \\(\\sqrt{1.21}\\) rational?', options: [{text: 'Yes', imageUrl: ''}, {text: 'No', imageUrl: ''}], answer: "0", solution: '\\(\\sqrt{1.21} = 1.1\\), which is rational.' },
  { ...chapterData, topicId: 'y11a-2A', type: 'multiple_choice', question: 'Is \\(\\sqrt[3]{8}\\) rational?', options: [{text: 'Yes', imageUrl: ''}, {text: 'No', imageUrl: ''}], answer: "0", solution: '\\(\\sqrt[3]{8} = 2\\), which is rational.' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write in bracket notation: real numbers strictly between -5 and 5.', answer: '(-5,5)', solution: '\\((-5, 5)\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write in bracket notation: real numbers greater than or equal to -10.', answer: '[-10,inf)', solution: '\\([-10, \\infty)\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\(x \\le 0\\) in bracket notation.', answer: '(-inf,0]', solution: '\\((-\\infty, 0]\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\(x > 100\\) in bracket notation.', answer: '(100,inf)', solution: '\\((100, \\infty)\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\((-\\infty, 5)\\) using inequalities.', answer: 'x<5', solution: '\\(x < 5\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\([10, \\infty)\\) using inequalities.', answer: 'x>=10', solution: '\\(x \\ge 10\\)' },
  { ...chapterData, topicId: 'y11a-2A', type: 'short_answer', question: 'Write \\((-3, 0]\\) using inequalities.', answer: '-3<x<=0', solution: '\\(-3 < x \\le 0\\)' }
];

export const importYear11AdvCh2 = async (forceReset = false) => {
  console.log(`Starting full sync of Year 11 Adv Ch2 (71 original + 51 new = 122 total)...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-2')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    for (const qData of SURDS_QUESTIONS_Y11A) {
      const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
      const correctIndex = shuffledOpts.indexOf(qData.a);
      await addDoc(collection(db, 'questions'), {
        chapterId: 'y11a-2',
        chapterTitle: 'Chapter 2: Real numbers and intervals',
        topicId: 'y11a-2' + qData.c.slice(-1),
        topicCode: qData.c,
        topicTitle: qData.t,
        isManual: true,
        title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
        question: qData.q,
        difficulty: 'medium',
        timeLimit: 120,
        type: 'multiple_choice',
        options: shuffledOpts.map(o => ({ text: o, imageUrl: "" })),
        answer: correctIndex.toString(),
        hint: qData.h,
        solution: qData.s,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isActive: true
      });
      count++;
    }

    for (const q of imageQuestionsCh2) {
      await addDoc(collection(db, 'questions'), { ...q, createdAt: serverTimestamp(), updatedAt: serverTimestamp(), isActive: true });
      count++;
    }

    console.log(`Successfully imported total ${count} questions.`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
