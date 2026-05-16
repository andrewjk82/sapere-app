import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch, doc } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-3',
  chapterTitle: 'Chapter 3: Functions and graphs',
  year: 'Year 11',
  difficulty: 'easy',
  isManual: true
};

const questions3A = [
  // --- Question 1: Basic linear functions (4 items) ---
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Let \\(f(x) = 3x - 1\\). Calculate \\(f(2)\\).', answer: '5', solution: '1. Substitute \\(x = 2\\) into \\(f(x) = 3x - 1\\).\n2. \\(f(2) = 3(2) - 1 = 6 - 1 = 5\\).\n\nResult: **5**' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Let \\(f(x) = 4x + 5\\). Calculate \\(f(0)\\).', answer: '5', solution: '1. \\(f(0) = 4(0) + 5 = 5\\).' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Let \\(f(x) = 2x - 7\\). Calculate \\(f(-3)\\).', answer: '-13', solution: '1. \\(f(-3) = 2(-3) - 7 = -6 - 7 = -13\\).' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Let \\(f(x) = 5x + 2\\). Calculate \\(f(4)\\).', answer: '22', solution: '1. \\(f(4) = 5(4) + 2 = 22\\).' },

  // --- Question 2: Basic quadratic functions (4 items) ---
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Let \\(p(x) = x^2 + 2x - 5\\). Determine \\(p(0)\\).', answer: '-5', solution: '1. \\(p(0) = 0^2 + 2(0) - 5 = -5\\).' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Let \\(p(x) = x^2 - x + 4\\). Determine \\(p(3)\\).', answer: '10', solution: '1. \\(p(3) = 3^2 - 3 + 4 = 9 - 3 + 4 = 10\\).' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Let \\(p(x) = x^2 + 4x + 1\\). Determine \\(p(-2)\\).', answer: '-3', solution: '1. \\(p(-2) = (-2)^2 + 4(-2) + 1 = 4 - 8 + 1 = -3\\).' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Let \\(p(x) = 2x^2 - 3x + 1\\). Determine \\(p(2)\\).', answer: '3', solution: '1. \\(p(2) = 2(2^2) - 3(2) + 1 = 2(4) - 6 + 1 = 8 - 6 + 1 = 3\\).' },

  // --- Question 3: Function values (4 items) ---
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Find the value of \\(y = 10 - 2x + x^2\\) at \\(x = 3\\).', answer: '13', solution: '1. \\(y = 10 - 2(3) + 3^2 = 10 - 6 + 9 = 13\\).' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Find the value of \\(y = x^2 - 5x + 6\\) at \\(x = -1\\).', answer: '12', solution: '1. \\(y = (-1)^2 - 5(-1) + 6 = 1 + 5 + 6 = 12\\).' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Find the value of \\(y = 3x^2 + 2\\) at \\(x = 0\\).', answer: '2', solution: '1. \\(y = 3(0)^2 + 2 = 2\\).' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'Find the value of \\(y = 5 - 4x\\) at \\(x = 2\\).', answer: '-3', solution: '1. \\(y = 5 - 4(2) = -3\\).' },

  // --- Question 4: Rational and Radical (12 items) ---
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\frac{4}{x}\\), find \\(h(2)\\).', answer: '2', solution: '1. \\(h(2) = 4/2 = 2\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\frac{10}{x + 3}\\), find \\(h(2)\\).', answer: '2', solution: '1. \\(h(2) = 10/(2+3) = 10/5 = 2\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\sqrt{x + 16}\\), find \\(h(9)\\).', answer: '5', solution: '1. \\(h(9) = \\sqrt{9 + 16} = \\sqrt{25} = 5\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\sqrt{2x + 1}\\), find \\(h(4)\\).', answer: '3', solution: '1. \\(h(4) = \\sqrt{2(4) + 1} = \\sqrt{9} = 3\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = x^3 - 1\\), find \\(h(2)\\).', answer: '7', solution: '1. \\(h(2) = 2^3 - 1 = 8 - 1 = 7\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 3x^2 - x\\), find \\(h(-1)\\).', answer: '4', solution: '1. \\(h(-1) = 3(-1)^2 - (-1) = 3 + 1 = 4\\).' },
  // (Adding more to reach 12 for Q4)
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\frac{1}{x^2}\\), find \\(h(3)\\).', answer: '1/9', solution: '1. \\(h(3) = 1/3^2 = 1/9\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 5 - x^2\\), find \\(h(0)\\).', answer: '5', solution: '1. \\(h(0) = 5 - 0^2 = 5\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 2^x\\), find \\(h(3)\\).', answer: '8', solution: '1. \\(h(3) = 2^3 = 8\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\sqrt[3]{x}\\), find \\(h(8)\\).', answer: '2', solution: '1. \\(h(8) = 2\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = |x - 5|\\), find \\(h(2)\\).', answer: '3', solution: '1. \\(|2 - 5| = |-3| = 3\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\frac{x + 4}{2}\\), find \\(h(6)\\).', answer: '5', solution: '1. \\((6+4)/2 = 5\\).' },

  // --- Question 5: Variable swap (3 items) ---
  { ...chapterData, topicId: 'y11a-3A', type: 'multiple_choice', question: 'If \\(g(x) = 5x - 2\\), what is \\(g(t)\\)?', options: [{text: '5t - 2', imageUrl: ''}, {text: '5x - 2', imageUrl: ''}, {text: 't - 2', imageUrl: ''}, {text: '5t', imageUrl: ''}], answer: "0", solution: 'Substitute \\(x\\) with \\(t\\). Result: **\\(5t - 2\\)**' },
  { ...chapterData, topicId: 'y11a-3A', type: 'multiple_choice', question: 'If \\(g(x) = x^2 + 4x\\), what is \\(g(a)\\)?', options: [{text: 'a^2 + 4a', imageUrl: ''}, {text: 'x^2 + 4x', imageUrl: ''}, {text: 'a^2 + 4', imageUrl: ''}], answer: "0", solution: 'Result: **\\(a^2 + 4a\\)**' },
  { ...chapterData, topicId: 'y11a-3A', topicCode: '3A', type: 'multiple_choice', question: 'If \\(g(x) = x - \\sqrt{x}\\), what is \\(g(k)\\)?', options: [{text: 'k - \\sqrt{k}', imageUrl: ''}, {text: 'x - \\sqrt{x}', imageUrl: ''}, {text: 'k + \\sqrt{k}', imageUrl: ''}], answer: "0", solution: 'Result: **\\(k - \\sqrt{k}\\)**' },

  // --- Question 6: Algebraic Substitution (4 items) ---
  { ...chapterData, topicId: 'y11a-3A', type: 'multiple_choice', question: 'Find \\(y\\) if \\(y = 5 - x\\) and \\(x = p + 1\\).', options: [{text: '4 - p', imageUrl: ''}, {text: '6 - p', imageUrl: ''}, {text: '5 - p', imageUrl: ''}, {text: '4 + p', imageUrl: ''}], answer: "0", solution: '1. \\(y = 5 - (p + 1)\\)\n2. \\(y = 5 - p - 1 = 4 - p\\).\n\nResult: **4 - p**' },
  { ...chapterData, topicId: 'y11a-3A', type: 'multiple_choice', question: 'Find \\(y\\) if \\(y = 2x + 3\\) and \\(x = k - 2\\).', options: [{text: '2k - 1', imageUrl: ''}, {text: '2k + 1', imageUrl: ''}, {text: '2k - 4', imageUrl: ''}, {text: 'k + 1', imageUrl: ''}], answer: "0", solution: '1. \\(y = 2(k - 2) + 3 = 2k - 4 + 3 = 2k - 1\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'multiple_choice', question: 'Substitute \\(x = a + 1\\) into \\(y = x^2 + x\\) and simplify.', options: [{text: 'a^2 + 3a + 2', imageUrl: ''}, {text: 'a^2 + a + 2', imageUrl: ''}, {text: 'a^2 + 3a', imageUrl: ''}, {text: 'a^2 + 2a + 2', imageUrl: ''}], answer: "0", solution: '1. \\(y = (a + 1)^2 + (a + 1)\\)\n2. \\(y = (a^2 + 2a + 1) + a + 1 = a^2 + 3a + 2\\).' },
  { ...chapterData, topicId: 'y11a-3A', type: 'multiple_choice', question: 'Substitute \\(x = m - 2\\) into \\(y = x^2 - 4\\) and simplify.', options: [{text: 'm^2 - 4m', imageUrl: ''}, {text: 'm^2 + 4m', imageUrl: ''}, {text: 'm^2 - 4', imageUrl: ''}, {text: 'm^2 - 8m', imageUrl: ''}], answer: "0", solution: '1. \\(y = (m - 2)^2 - 4 = (m^2 - 4m + 4) - 4 = m^2 - 4m\\).' }
];

export const importYear11AdvCh3 = async (forceReset = false) => {
  console.log(`Starting full sync of Year 11 Adv Ch3 (31 total)...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-3')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    for (const q of questions3A) {
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
