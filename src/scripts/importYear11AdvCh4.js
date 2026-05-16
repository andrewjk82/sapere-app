import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-4',
  chapterTitle: 'Chapter 4: Equations and inequations',
  year: 'Year 11',
  isManual: true
};

const allQuestions4A = [
  // --- Q1: Number Line Representation (6 items) ---
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', topicCode: '4A', type: 'multiple_choice', 
    question: 'Which of the following describes the graph of \\(x > 3\\) on a number line?', 
    options: [
      {text: 'An open circle at 3 with an arrow pointing to the right', imageUrl: ''}, 
      {text: 'A closed circle at 3 with an arrow pointing to the right', imageUrl: ''},
      {text: 'An open circle at 3 with an arrow pointing to the left', imageUrl: ''},
      {text: 'A closed circle at 3 with an arrow pointing to the left', imageUrl: ''}
    ], 
    answer: "0", 
    solution: 'The inequality \\(x > 3\\) means all values greater than 3. Since it is "strictly greater than", we use an **open circle** to show 3 is not included, and point the arrow to the **right**.' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'multiple_choice', 
    question: 'Which of the following describes the graph of \\(x \\leq -2\\)?', 
    options: [
      {text: 'A closed circle at -2 with an arrow pointing to the left', imageUrl: ''}, 
      {text: 'An open circle at -2 with an arrow pointing to the left', imageUrl: ''},
      {text: 'A closed circle at -2 with an arrow pointing to the right', imageUrl: ''},
      {text: 'An open circle at -2 with an arrow pointing to the right', imageUrl: ''}
    ], 
    answer: "0", 
    solution: 'The inequality \\(x \\leq -2\\) includes -2, so we use a **closed circle**. "Less than or equal to" means the arrow points to the **left**.' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'multiple_choice', 
    question: 'Which of the following describes the graph of \\(x \\geq 5\\)?', 
    options: [
      {text: 'A closed circle at 5 with an arrow pointing to the right', imageUrl: ''}, 
      {text: 'An open circle at 5 with an arrow pointing to the right', imageUrl: ''},
      {text: 'A closed circle at 5 with an arrow pointing to the left', imageUrl: ''},
      {text: 'An open circle at 5 with an arrow pointing to the left', imageUrl: ''}
    ], 
    answer: "0", 
    solution: 'The inequality \\(x \\geq 5\\) includes 5, so we use a **closed circle**. "Greater than or equal to" means the arrow points to the **right**.' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'multiple_choice', 
    question: 'Describe the graph of the combined inequality: \\(-1 < x < 4\\).', 
    options: [
      {text: 'Open circles at both -1 and 4, with a line connecting them', imageUrl: ''}, 
      {text: 'Closed circles at both -1 and 4, with a line connecting them', imageUrl: ''},
      {text: 'Open circle at -1 and closed circle at 4, with a line connecting them', imageUrl: ''},
      {text: 'Arrows pointing outwards from -1 and 4', imageUrl: ''}
    ], 
    answer: "0", 
    solution: 'Both endpoints use strict inequalities (<), so we use **open circles** at -1 and 4. The value of x is between them, so we draw a **line segment connecting** the two circles.' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'multiple_choice', 
    question: 'Describe the graph of: \\(2 \\leq x < 6\\).', 
    options: [
      {text: 'Closed circle at 2 and open circle at 6, with a line connecting them', imageUrl: ''}, 
      {text: 'Open circle at 2 and closed circle at 6, with a line connecting them', imageUrl: ''},
      {text: 'Closed circles at both 2 and 6, with a line connecting them', imageUrl: ''},
      {text: 'Open circles at both 2 and 6, with a line connecting them', imageUrl: ''}
    ], 
    answer: "0", 
    solution: '\\(x \\geq 2\\) requires a **closed circle** at 2. \\(x < 6\\) requires an **open circle** at 6. We connect them with a line segment.' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'multiple_choice', 
    question: 'Describe the graph of: \\(-4 \\leq x \\leq 2\\).', 
    options: [
      {text: 'Closed circles at both -4 and 2, with a line connecting them', imageUrl: ''}, 
      {text: 'Open circles at both -4 and 2, with a line connecting them', imageUrl: ''},
      {text: 'Closed circle at -4 and open circle at 2, with a line connecting them', imageUrl: ''},
      {text: 'Arrows pointing outwards from -4 and 2', imageUrl: ''}
    ], 
    answer: "0", 
    solution: 'Both endpoints include the "equal to" part (\\(\\leq\\)), so we use **closed circles** at both -4 and 2 and connect them.' 
  },

  // --- Q2: Solve and Graph (6 items) ---
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve the inequation: \\(x - 5 < 2\\).', 
    answer: 'x < 7', 
    solution: '1. Add 5 to both sides:\n\\[x < 2 + 5\\]\n\\[x < 7\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve the inequation: \\(4x \\geq -12\\).', 
    answer: 'x >= -3', 
    solution: '1. Divide both sides by 4:\n\\[x \\geq \\frac{-12}{4}\\]\n\\[x \\geq -3\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve the inequation: \\(2x + 8 > 14\\).', 
    answer: 'x > 3', 
    solution: '1. Subtract 8 from both sides:\n\\[2x > 6\\]\n2. Divide by 2:\n\\[x > 3\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve the inequation: \\(3x - 1 \\leq -10\\).', 
    answer: 'x <= -3', 
    solution: '1. Add 1 to both sides:\n\\[3x \\leq -9\\]\n2. Divide by 3:\n\\[x \\leq -3\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve the inequation: \\(5x + 2 \\geq 2x + 11\\).', 
    answer: 'x >= 3', 
    solution: '1. Subtract 2x from both sides:\n\\[3x + 2 \\geq 11\\]\n2. Subtract 2 from both sides:\n\\[3x \\geq 9\\]\n3. Divide by 3:\n\\[x \\geq 3\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve the inequation: \\(7x - 4 < 2x - 19\\).', 
    answer: 'x < -3', 
    solution: '1. Subtract 2x from both sides:\n\\[5x - 4 < -19\\]\n2. Add 4 to both sides:\n\\[5x < -15\\]\n3. Divide by 5:\n\\[x < -3\\]' 
  },

  // --- Q3: Solving with Negative Coefficients (9 items) ---
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'multiple_choice', 
    question: 'Solve: \\(-3x < 12\\).', 
    options: [{text: 'x > -4', imageUrl: ''}, {text: 'x < -4', imageUrl: ''}, {text: 'x > 4', imageUrl: ''}, {text: 'x < 4', imageUrl: ''}], 
    answer: "0", 
    solution: 'When dividing by a negative number, the inequality sign MUST be flipped:\n\\[-3x < 12\\]\n\\[x > \\frac{12}{-3}\\]\n\\[x > -4\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'multiple_choice', 
    question: 'Solve: \\(-2x \\geq -10\\).', 
    options: [{text: 'x \\leq 5', imageUrl: ''}, {text: 'x \\geq 5', imageUrl: ''}, {text: 'x \\leq -5', imageUrl: ''}, {text: 'x \\geq -5', imageUrl: ''}], 
    answer: "0", 
    solution: 'Divide by -2 and flip the sign:\n\\[-2x \\geq -10\\]\n\\[x \\leq \\frac{-10}{-2}\\]\n\\[x \\leq 5\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve: \\(-x \\leq 5\\).', 
    answer: 'x >= -5', 
    solution: 'Multiply by -1 and flip the sign:\n\\[x \\geq -5\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve: \\(4 - 3x > 13\\).', 
    answer: 'x < -3', 
    solution: '1. Subtract 4:\n\\[-3x > 9\\]\n2. Divide by -3 and flip the sign:\n\\[x < -3\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve: \\(10 - 2x < 4\\).', 
    answer: 'x > 3', 
    solution: '1. Subtract 10:\n\\[-2x < -6\\]\n2. Divide by -2 and flip the sign:\n\\[x > 3\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve: \\(-1 - x \\geq 6\\).', 
    answer: 'x <= -7', 
    solution: '1. Add 1:\n\\[-x \\geq 7\\]\n2. Multiply by -1 and flip sign:\n\\[x \\leq -7\\]' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve: \\(5 - 2x > 3x - 10\\).', 
    answer: 'x < 3', 
    solution: '1. Add 2x to both sides:\n\\[5 > 5x - 10\\]\n2. Add 10:\n\\[15 > 5x\\]\n3. Divide by 5:\n\\[3 > x\\] or \\(x < 3\\)' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve: \\(2 - 4x \\leq 14 + x\\).', 
    answer: 'x >= -2.4', 
    solution: '1. Add 4x:\n\\[2 \\leq 14 + 5x\\]\n2. Subtract 14:\n\\[-12 \\leq 5x\\]\n3. Divide by 5:\n\\[-2.4 \\leq x\\] or \\(x \\geq -2.4\\)' 
  },
  { 
    ...chapterData, difficulty: 'easy', topicId: 'y11a-4A', type: 'short_answer', 
    question: 'Solve: \\(15 - 8x > -3x - 10\\).', 
    answer: 'x < 5', 
    solution: '1. Add 8x:\n\\[15 > 5x - 10\\]\n2. Add 10:\n\\[25 > 5x\\]\n3. Divide by 5:\n\\[5 > x\\] or \\(x < 5\\)' 
  }
];

export const importYear11AdvCh4 = async () => {
  console.log(`Starting full sync of Y11 Adv Ch4 (Total 21)...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-4')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    for (const q of allQuestions4A) {
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
