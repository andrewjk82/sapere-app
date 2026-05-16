import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch, doc } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-1',
  chapterTitle: 'Chapter 1: Algebra review',
  topicId: 'y11a-1A',
  topicCode: '1A',
  topicTitle: 'Expanding brackets',
  year: 'Year 11',
  difficulty: 'easy',
  isManual: true
};

const allQuestions = [
  // --- Section 1: Simple Expansion ---
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(4(x - 3)\\)',
    answer: '4x-12',
    solution: 'To expand \\(4(x - 3)\\), multiply the term outside the bracket by each term inside:\n1. \\(4 \\times x = 4x\\)\n2. \\(4 \\times (-3) = -12\\)\n\nResult: **\\(4x - 12\\)**'
  },
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(5(a - 2)\\)',
    answer: '5a-10',
    solution: 'Distribute the 5 through the brackets:\n1. \\(5 \\times a = 5a\\)\n2. \\(5 \\times (-2) = -10\\)\n\nResult: **\\(5a - 10\\)**'
  },
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(-2(y - 5)\\)',
    answer: '-2y+10',
    solution: 'Multiply by -2. Be careful with the signs:\n1. \\(-2 \\times y = -2y\\)\n2. \\(-2 \\times (-5) = +10\\)\n\nResult: **\\(-2y + 10\\)**'
  },
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(-3(z + 4)\\)',
    answer: '-3z-12',
    solution: 'Multiply by -3:\n1. \\(-3 \\times z = -3z\\)\n2. \\(-3 \\times (+4) = -12\\)\n\nResult: **\\(-3z - 12\\)**'
  },
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(6(2x + 3)\\)',
    answer: '12x+18',
    solution: 'Distribute the 6:\n1. \\(6 \\times 2x = 12x\\)\n2. \\(6 \\times 3 = 18\\)\n\nResult: **\\(12x + 18\\)**'
  },
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(-(x + 7)\\)',
    answer: '-x-7',
    solution: 'The minus sign outside means multiplying by -1:\n1. \\(-1 \\times x = -x\\)\n2. \\(-1 \\times 7 = -7\\)\n\nResult: **\\(-x - 7\\)**'
  },

  // --- Section 2: Variables and Negatives ---
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(2(x + 3y)\\)',
    answer: '2x+6y',
    solution: 'Distribute the 2 over the terms \\(x\\) and \\(3y\\):\n1. \\(2 \\times x = 2x\\)\n2. \\(2 \\times 3y = 6y\\)\n\nResult: **\\(2x + 6y\\)**'
  },
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(-3(p - 2q)\\)',
    answer: '-3p+6q',
    solution: 'Multiply by -3:\n1. \\(-3 \\times p = -3p\\)\n2. \\(-3 \\times (-2q) = +6q\\)\n\nResult: **\\(-3p + 6q\\)**'
  },
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(k(x - 5)\\)',
    answer: 'kx-5k',
    solution: 'Distribute the variable \\(k\\):\n1. \\(k \\times x = kx\\)\n2. \\(k \\times (-5) = -5k\\)\n\nResult: **\\(kx - 5k\\)**'
  },
  {
    ...chapterData,
    type: 'short_answer',
    question: 'Expand the expression: \\(-y(y - 2)\\)',
    answer: '-y^2+2y',
    solution: 'Multiply by \\(-y\\):\n1. \\(-y \\times y = -y^2\\)\n2. \\(-y \\times (-2) = +2y\\)\n\nResult: **\\(-y^2 + 2y\\)**'
  },

  // --- Section 3: Expand and Simplify (Linear Combination) ---
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\(3(x + 2) - 2x\\)',
    options: [{text: 'x + 6', imageUrl: ''}, {text: 'x + 2', imageUrl: ''}, {text: '5x + 6', imageUrl: ''}, {text: 'x - 6', imageUrl: ''}],
    answer: "0",
    solution: '1. Expand the brackets: \\(3x + 6 - 2x\\)\n2. Group like terms: \\((3x - 2x) + 6\\)\n3. Simplify: \\(x + 6\\)\n\nResult: **\\(x + 6\\)**'
  },
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\(2a + 4 + 3(a - 1)\\)',
    options: [{text: '5a + 1', imageUrl: ''}, {text: '5a + 7', imageUrl: ''}, {text: '5a - 1', imageUrl: ''}, {text: 'a + 1', imageUrl: ''}],
    answer: "0",
    solution: '1. Expand brackets: \\(2a + 4 + 3a - 3\\)\n2. Group terms: \\((2a + 3a) + (4 - 3)\\)\n3. Simplify: \\(5a + 1\\)\n\nResult: **\\(5a + 1\\)**'
  },
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\(7 - (x + 2)\\)',
    options: [{text: '5 - x', imageUrl: ''}, {text: '9 - x', imageUrl: ''}, {text: 'x + 5', imageUrl: ''}, {text: '-x + 9', imageUrl: ''}],
    answer: "0",
    solution: '1. Distribute the minus: \\(7 - x - 2\\)\n2. Simplify constants: \\(5 - x\\)\n\nResult: **\\(5 - x\\)**'
  },
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\((3x - 2y) - (2x - 3y)\\)',
    options: [{text: 'x + y', imageUrl: ''}, {text: 'x - 5y', imageUrl: ''}, {text: '5x + y', imageUrl: ''}, {text: 'x - y', imageUrl: ''}],
    answer: "0",
    solution: '1. Remove brackets (careful with the second set): \\(3x - 2y - 2x + 3y\\)\n2. Group terms: \\((3x - 2x) + (-2y + 3y)\\)\n3. Simplify: \\(x + y\\)\n\nResult: **\\(x + y\\)**'
  },
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\(2(x - 3) - 3(x - 1)\\)',
    options: [{text: '-x - 3', imageUrl: ''}, {text: '-x - 9', imageUrl: ''}, {text: 'x - 3', imageUrl: ''}, {text: '-x + 3', imageUrl: ''}],
    answer: "0",
    solution: '1. Expand first bracket: \\(2x - 6\\)\n2. Expand second bracket: \\(-3x + 3\\)\n3. Combine: \\(2x - 6 - 3x + 3 = -x - 3\\)\n\nResult: **\\(-x - 3\\)**'
  },

  // --- Section 4: Binomial Expansion (Easy) ---
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\((x + 1)(x + 4)\\)',
    options: [{text: 'x^2 + 5x + 4', imageUrl: ''}, {text: 'x^2 + 4x + 1', imageUrl: ''}, {text: 'x^2 + 5x + 5', imageUrl: ''}, {text: '2x + 5', imageUrl: ''}],
    answer: "0",
    solution: 'Use FOIL (First, Outer, Inner, Last):\n1. First: \\(x \\times x = x^2\\)\n2. Outer: \\(x \\times 4 = 4x\\)\n3. Inner: \\(1 \\times x = 1x\\)\n4. Last: \\(1 \\times 4 = 4\\)\n5. Combine: \\(x^2 + (4x + 1x) + 4 = x^2 + 5x + 4\\)\n\nResult: **\\(x^2 + 5x + 4\\)**'
  },
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\((y + 3)(y + 2)\\)',
    options: [{text: 'y^2 + 5y + 6', imageUrl: ''}, {text: 'y^2 + 6y + 5', imageUrl: ''}, {text: 'y^2 + 5y + 5', imageUrl: ''}, {text: 'y^2 + 6', imageUrl: ''}],
    answer: "0",
    solution: '1. \\(y \\times y = y^2\\)\n2. \\(y \\times 2 = 2y\\)\n3. \\(3 \\times y = 3y\\)\n4. \\(3 \\times 2 = 6\\)\n5. Total: \\(y^2 + 5y + 6\\)\n\nResult: **\\(y^2 + 5y + 6\\)**'
  },
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\((t + 5)(t - 2)\\)',
    options: [{text: 't^2 + 3t - 10', imageUrl: ''}, {text: 't^2 - 3t - 10', imageUrl: ''}, {text: 't^2 + 3t + 10', imageUrl: ''}, {text: 't^2 + 7t - 10', imageUrl: ''}],
    answer: "0",
    solution: '1. \\(t \\times t = t^2\\)\n2. \\(t \\times (-2) = -2t\\)\n3. \\(5 \\times t = 5t\\)\n4. \\(5 \\times (-2) = -10\\)\n5. Combine: \\(t^2 + 3t - 10\\)\n\nResult: **\\(t^2 + 3t - 10\\)**'
  },
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\((x - 3)(x + 1)\\)',
    options: [{text: 'x^2 - 2x - 3', imageUrl: ''}, {text: 'x^2 + 2x - 3', imageUrl: ''}, {text: 'x^2 - 4x - 3', imageUrl: ''}, {text: 'x^2 - 3', imageUrl: ''}],
    answer: "0",
    solution: '1. \\(x \\times x = x^2\\)\n2. \\(x \\times 1 = x\\)\n3. \\(-3 \\times x = -3x\\)\n4. \\(-3 \\times 1 = -3\\)\n5. Combine: \\(x^2 - 2x - 3\\)\n\nResult: **\\(x^2 - 2x - 3\\)**'
  },
  {
    ...chapterData,
    type: 'multiple_choice',
    question: 'Expand and simplify: \\((3a + 1)(a + 2)\\)',
    options: [{text: '3a^2 + 7a + 2', imageUrl: ''}, {text: '3a^2 + 6a + 2', imageUrl: ''}, {text: '3a^2 + 7a + 1', imageUrl: ''}, {text: '4a^2 + 7a + 2', imageUrl: ''}],
    answer: "0",
    solution: '1. \\(3a \\times a = 3a^2\\)\n2. \\(3a \\times 2 = 6a\\)\n3. \\(1 \\times a = a\\)\n4. \\(1 \\times 2 = 2\\)\n5. Combine: \\(3a^2 + 7a + 2\\)\n\nResult: **\\(3a^2 + 7a + 2\\)**'
  }
];

export const importYear11AdvCh1 = async (forceReset = false) => {
  console.log(`Starting import of Year 11 Adv Ch1A...`);
  try {
    if (forceReset) {
      const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-1')));
      const batch = writeBatch(db);
      qSnap.forEach(d => batch.delete(d.ref));
      await batch.commit();
      console.log('Cleared existing questions for y11a-1');
    }

    let count = 0;
    for (const q of allQuestions) {
      await addDoc(collection(db, 'questions'), {
        ...q,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isActive: true
      });
      count++;
    }
    console.log(`Successfully imported ${count} questions.`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
