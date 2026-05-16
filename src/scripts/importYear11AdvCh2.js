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
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(1\\frac{1}{2}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(1\\frac{1}{2} = 3/2\\), which is a fraction of integers. Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt{3}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: '\\(\\sqrt{3}\\) cannot be expressed as a ratio of integers. It is a non-terminating, non-recurring decimal. Therefore, it is **Irrational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt{4}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(\\sqrt{4} = 2\\), which is an integer. Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt[3]{27}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(\\sqrt[3]{27} = 3\\), which is an integer. Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt[4]{8}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: 'The 4th root of 8 is not an integer or a simple fraction. Therefore, it is **Irrational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\sqrt{\\frac{4}{9}}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(\\sqrt{\\frac{4}{9}} = \\frac{2}{3}\\), which is a fraction. Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(0.45\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(0.45 = 45/100 = 9/20\\). Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(12\\%\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(12\\% = 12/100 = 3/25\\). Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(0.333\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(0.333 = 333/1000\\). Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(0.\\dot{3}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(0.\\dot{3} = 1/3\\). Recurring decimals are **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(3\\frac{1}{7}\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(3\\frac{1}{7} = 22/7\\). Therefore, it is **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(\\pi\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "1", solution: '\\(\\pi\\) is a well-known **Irrational** number.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(3.14\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(3.14 = 314/100\\). Finite decimals are **Rational**.' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'multiple_choice', question: 'Classify the number: \\(0\\)', options: [{text: 'Rational', imageUrl: ''}, {text: 'Irrational', imageUrl: ''}], answer: "0", solution: '\\(0 = 0/1\\). Therefore, it is **Rational**.' },

  // --- Question 2: Inequalities (4 items) ---
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'short_answer', question: 'Write the interval using inequalities: The real numbers greater than 4.', answer: 'x>4', solution: 'Result: **\\(x > 4\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'short_answer', question: 'Write the interval using inequalities: The real numbers less than or equal to 3.', answer: 'x<=3', solution: 'Result: **\\(x \\le 3\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'short_answer', question: 'Write the interval using inequalities: The real numbers greater than -2 and less than 2.', answer: '-2<x<2', solution: 'Result: **\\(-2 < x < 2\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', topicTitle: 'Real numbers and intervals', type: 'short_answer', question: 'Write the interval using inequalities: The real numbers greater than or equal to -3 and less than or equal to 0.', answer: '-3<=x<=0', solution: 'Result: **\\(-3 \\le x \\le 0\\)**' },

  // --- Question 3: Bracket Notation (4 items) ---
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write in bracket notation: The real numbers greater than 0 and less than 7.', answer: '(0,7)', solution: 'Result: **\\((0, 7)\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write in bracket notation: The real numbers greater than or equal to 2 and less than or equal to 5.', answer: '[2,5]', solution: 'Result: **\\([2, 5]\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write in bracket notation: The real numbers greater than or equal to 4.', answer: '[4,inf)', solution: 'Result: **\\([4, \\infty)\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write in bracket notation: The real numbers less than -4.', answer: '(-inf,-4)', solution: 'Result: **\\((-\\infty, -4)\\)**' },

  // --- Question 6: Bracket Notation from Inequalities (6 items) ---
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(-3 \\le x \\le 2\\) using bracket notation.', answer: '[-3,2]', solution: 'Result: **\\([-3, 2]\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(-3 < x < 2\\) using bracket notation.', answer: '(-3,2)', solution: 'Result: **\\((-3, 2)\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(-3 < x \\le 2\\) using bracket notation.', answer: '(-3,2]', solution: 'Result: **\\((-3, 2]\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(-3 \\le x < 2\\) using bracket notation.', answer: '[-3,2)', solution: 'Result: **\\([-3, 2)\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(x \\le 2\\) using bracket notation.', answer: '(-inf,2]', solution: 'Result: **\\((-\\infty, 2]\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\(x > -3\\) using bracket notation.', answer: '(-3,inf)', solution: 'Result: **\\((-3, \\infty)\\)**' },

  // --- Question 7: Inequalities from Bracket Notation (6 items) ---
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\((-6, 6)\\) using inequalities.', answer: '-6<x<6', solution: 'Result: **\\(-6 < x < 6\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\([-6, 6]\\) using inequalities.', answer: '-6<=x<=6', solution: 'Result: **\\(-6 \\le x \\le 6\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\([-6, 6)\\) using inequalities.', answer: '-6<=x<6', solution: 'Result: **\\(-6 \\le x < 6\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\((-6, 6]\\) using inequalities.', answer: '-6<x<=6', solution: 'Result: **\\(-6 < x \\le 6\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\((6, \\infty)\\) using inequalities.', answer: 'x>6', solution: 'Result: **\\(x > 6\\)**' },
  { ...chapterData, topicId: 'y11a-2A', topicCode: '2A', type: 'short_answer', question: 'Write \\((-\\infty, -6]\\) using inequalities.', answer: 'x<=-6', solution: 'Result: **\\(x \\le -6\\)**' },

  // --- Question 4 & 5: Graph Matching (MC) (6 items) ---
  {
    ...chapterData, topicId: 'y11a-2A', topicCode: '2A',
    type: 'multiple_choice',
    question: 'Which bracket notation represents the graph of \\(x \\le -1\\)?',
    options: [{text: '(-\\infty, -1]', imageUrl: ''}, {text: '(-\\infty, -1)', imageUrl: ''}, {text: '[-1, \\infty)', imageUrl: ''}, {text: '(-1, \\infty)', imageUrl: ''}],
    answer: "0",
    solution: 'The closed circle at -1 means included (square bracket). The arrow to the left means towards negative infinity. Result: **\\((-\\infty, -1]\\)**'
  },
  {
    ...chapterData, topicId: 'y11a-2A', topicCode: '2A',
    type: 'multiple_choice',
    question: 'Identify the inequality for the interval \\((-2, \\infty)\\).',
    options: [{text: 'x > -2', imageUrl: ''}, {text: 'x \\ge -2', imageUrl: ''}, {text: 'x < -2', imageUrl: ''}, {text: 'x \\le -2', imageUrl: ''}],
    answer: "0",
    solution: 'The round bracket means not included (strict inequality). \\(\\infty\\) means greater than. Result: **\\(x > -2\\)**'
  }
];

export const importYear11AdvCh2 = async (forceReset = false) => {
  console.log(`Starting full sync of Year 11 Adv Ch2 (81 original + 41 image = 122 total)...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-2')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    
    // 1. Add Original 81 Questions (from seedSurdsQuestions)
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

    // 2. Add Image Questions (41 total)
    for (const q of imageQuestionsCh2) {
      await addDoc(collection(db, 'questions'), {
        ...q,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isActive: true
      });
      count++;
    }

    console.log(`Successfully imported total ${count} questions.`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
