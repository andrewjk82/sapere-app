import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch, doc } from 'firebase/firestore';
import { ALGEBRA_QUESTIONS_Y11A } from '../constants/seedQuestions';

const chapterData = {
  chapterId: 'y11a-1',
  chapterTitle: 'Chapter 1: Algebra review',
  year: 'Year 11',
  difficulty: 'medium', // Set to Medium as requested
  isManual: true
};

const imageQuestions = [
  // --- Question 5: Proofs (Multiple Choice) ---
  {
    ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets',
    type: 'multiple_choice',
    question: 'Expand and simplify: \\((A + B)(A + B)\\)',
    options: [{text: 'A^2 + 2AB + B^2', imageUrl: ''}, {text: 'A^2 + B^2', imageUrl: ''}, {text: 'A^2 + AB + B^2', imageUrl: ''}, {text: '2A + 2B', imageUrl: ''}],
    answer: "0",
    solution: '1. Multiply first terms: \\(A \\times A = A^2\\)\n2. Multiply outer terms: \\(A \\times B = AB\\)\n3. Multiply inner terms: \\(B \\times A = AB\\)\n4. Multiply last terms: \\(B \\times B = B^2\\)\n5. Combine like terms: \\(A^2 + AB + AB + B^2 = A^2 + 2AB + B^2\\)\n\nResult: **\\(A^2 + 2AB + B^2\\)**'
  },
  {
    ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets',
    type: 'multiple_choice',
    question: 'Expand and simplify: \\((A - B)^2\\)',
    options: [{text: 'A^2 - 2AB + B^2', imageUrl: ''}, {text: 'A^2 - B^2', imageUrl: ''}, {text: 'A^2 + 2AB + B^2', imageUrl: ''}, {text: 'A^2 - 2AB - B^2', imageUrl: ''}],
    answer: "0",
    solution: '1. \\((A - B)(A - B)\\)\n2. \\(A^2 - AB - AB + B^2\\)\n3. Combine: \\(A^2 - 2AB + B^2\\)\n\nResult: **\\(A^2 - 2AB + B^2\\)**'
  },
  {
    ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets',
    type: 'multiple_choice',
    question: 'Expand and simplify: \\((A - B)(A + B)\\)',
    options: [{text: 'A^2 - B^2', imageUrl: ''}, {text: 'A^2 + B^2', imageUrl: ''}, {text: 'A^2 - 2AB + B^2', imageUrl: ''}, {text: 'A^2 + 2AB + B^2', imageUrl: ''}],
    answer: "0",
    solution: '1. Multiply terms: \\(A^2 + AB - AB - B^2\\)\n2. The middle terms \\(+AB\\) and \\(-AB\\) cancel out.\n3. Result: \\(A^2 - B^2\\)\n\nResult: **\\(A^2 - B^2\\)**'
  },

  // --- Question 6: Special Expansions (Randomized from a-x) ---
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((m + n)^2\\)', answer: 'm^2+2mn+n^2', solution: 'Using \\((a+b)^2 = a^2 + 2ab + b^2\\):\n1. Square first: \\(m^2\\)\n2. Twice product: \\(2mn\\)\n3. Square last: \\(n^2\\)\n\nResult: **\\(m^2 + 2mn + n^2\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((p - q)^2\\)', answer: 'p^2-2pq+q^2', solution: 'Using \\((a-b)^2 = a^2 - 2ab + b^2\\):\n1. Square first: \\(p^2\\)\n2. Twice product: \\(-2pq\\)\n3. Square last: \\(q^2\\)\n\nResult: **\\(p^2 - 2pq + q^2\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((u - v)(u + v)\\)', answer: 'u^2-v^2', solution: 'Difference of squares: \\(u^2 - v^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((x + 5)^2\\)', answer: 'x^2+10x+25', solution: '1. \\(x^2\\)\n2. \\(2 \\times x \\times 5 = 10x\\)\n3. \\(5^2 = 25\\)\n\nResult: **\\(x^2 + 10x + 25\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((y - 3)^2\\)', answer: 'y^2-6y+9', solution: '1. \\(y^2\\)\n2. \\(2 \\times y \\times (-3) = -6y\\)\n3. \\((-3)^2 = 9\\)\n\nResult: **\\(y^2 - 6y + 9\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((k + 8)^2\\)', answer: 'k^2+16k+64', solution: '1. \\(k^2 + 2(k)(8) + 8^2\\)\n2. \\(k^2 + 16k + 64\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((a - 7)(a + 7)\\)', answer: 'a^2-49', solution: 'Difference of squares: \\(a^2 - 7^2 = a^2 - 49\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((10 + b)(10 - b)\\)', answer: '100-b^2', solution: 'Difference of squares: \\(10^2 - b^2 = 100 - b^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((5 + c)^2\\)', answer: 'c^2+10c+25', solution: '1. \\(25 + 10c + c^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((11 - g)^2\\)', answer: '121-22g+g^2', solution: '1. \\(121 - 22g + g^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((h + 12)(h - 12)\\)', answer: 'h^2-144', solution: 'Difference of squares: \\(h^2 - 144\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((i + 13)^2\\)', answer: 'i^2+26i+169', solution: '1. \\(i^2 + 26i + 169\\)' },
  
  // --- Question 6 (Continued - More complex) ---
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((3x + 1)^2\\)', options: [{text: '9x^2 + 6x + 1', imageUrl: ''}, {text: '9x^2 + 1', imageUrl: ''}, {text: '9x^2 + 3x + 1', imageUrl: ''}, {text: '6x^2 + 6x + 1', imageUrl: ''}], answer: "0", solution: '1. \\((3x)^2 = 9x^2\\)\n2. \\(2(3x)(1) = 6x\\)\n3. \\(1^2 = 1\\)\n\nResult: **\\(9x^2 + 6x + 1\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((4y - 5)^2\\)', options: [{text: '16y^2 - 40y + 25', imageUrl: ''}, {text: '16y^2 - 20y + 25', imageUrl: ''}, {text: '16y^2 - 25', imageUrl: ''}, {text: '8y^2 - 40y + 25', imageUrl: ''}], answer: "0", solution: '1. \\((4y)^2 = 16y^2\\)\n2. \\(2(4y)(-5) = -40y\\)\n3. \\((-5)^2 = 25\\)\n\nResult: **\\(16y^2 - 40y + 25\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((2z + 3)^2\\)', options: [{text: '4z^2 + 12z + 9', imageUrl: ''}, {text: '4z^2 + 6z + 9', imageUrl: ''}, {text: '4z^2 + 9', imageUrl: ''}, {text: '2z^2 + 12z + 9', imageUrl: ''}], answer: "0", solution: '1. \\(4z^2 + 12z + 9\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((5a + 2b)^2\\)', options: [{text: '25a^2 + 20ab + 4b^2', imageUrl: ''}, {text: '25a^2 + 10ab + 4b^2', imageUrl: ''}, {text: '25a^2 + 4b^2', imageUrl: ''}, {text: '10a^2 + 20ab + 4b^2', imageUrl: ''}], answer: "0", solution: '1. \\((5a)^2 = 25a^2\\)\n2. \\(2(5a)(2b) = 20ab\\)\n3. \\((2b)^2 = 4b^2\\)\n\nResult: **\\(25a^2 + 20ab + 4b^2\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((3p + 4q)(3p - 4q)\\)', options: [{text: '9p^2 - 16q^2', imageUrl: ''}, {text: '9p^2 + 16q^2', imageUrl: ''}, {text: '9p^2 - 24pq + 16q^2', imageUrl: ''}, {text: '3p^2 - 4q^2', imageUrl: ''}], answer: "0", solution: 'Difference of squares: \\((3p)^2 - (4q)^2 = 9p^2 - 16q^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((2u - 5v)(2u + 5v)\\)', options: [{text: '4u^2 - 25v^2', imageUrl: ''}, {text: '4u^2 + 25v^2', imageUrl: ''}, {text: '2u^2 - 5v^2', imageUrl: ''}, {text: '4u^2 - 20uv + 25v^2', imageUrl: ''}], answer: "0", solution: '\\((2u)^2 - (5v)^2 = 4u^2 - 25v^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((4j + 3)^2\\)', options: [{text: '16j^2 + 24j + 9', imageUrl: ''}, {text: '16j^2 + 12j + 9', imageUrl: ''}, {text: '16j^2 + 9', imageUrl: ''}, {text: '8j^2 + 24j + 9', imageUrl: ''}], answer: "0", solution: '1. \\(16j^2 + 24j + 9\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((5x - 2y)^2\\)', options: [{text: '25x^2 - 20xy + 4y^2', imageUrl: ''}, {text: '25x^2 - 10xy + 4y^2', imageUrl: ''}, {text: '25x^2 + 4y^2', imageUrl: ''}, {text: '5x^2 - 20xy + 2y^2', imageUrl: ''}], answer: "0", solution: '1. \\(25x^2 - 20xy + 4y^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((6 + 7n)(6 - 7n)\\)', options: [{text: '36 - 49n^2', imageUrl: ''}, {text: '36 + 49n^2', imageUrl: ''}, {text: '49n^2 - 36', imageUrl: ''}, {text: '36 - 14n', imageUrl: ''}], answer: "0", solution: '\\(6^2 - (7n)^2 = 36 - 49n^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((9 - 2m)^2\\)', options: [{text: '81 - 36m + 4m^2', imageUrl: ''}, {text: '81 + 4m^2', imageUrl: ''}, {text: '81 - 18m + 4m^2', imageUrl: ''}, {text: '18 - 36m + 4m^2', imageUrl: ''}], answer: "0", solution: '\\(81 - 36m + 4m^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((8a + 3b)^2\\)', options: [{text: '64a^2 + 48ab + 9b^2', imageUrl: ''}, {text: '64a^2 + 24ab + 9b^2', imageUrl: ''}, {text: '64a^2 + 9b^2', imageUrl: ''}, {text: '16a^2 + 48ab + 6b^2', imageUrl: ''}], answer: "0", solution: '\\(64a^2 + 48ab + 9b^2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((10 - 7k)^2\\)', options: [{text: '100 - 140k + 49k^2', imageUrl: ''}, {text: '100 - 70k + 49k^2', imageUrl: ''}, {text: '100 + 49k^2', imageUrl: ''}, {text: '20 - 140k + 49k^2', imageUrl: ''}], answer: "0", solution: '\\(100 - 140k + 49k^2\\)' }
];

export const importYear11AdvCh1 = async (forceReset = false) => {
  console.log(`Starting full sync of Year 11 Adv Ch1 (Original 74 + Image 27 + Variations)...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-1')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    
    // 1. Add Original 74 Questions (Set to medium)
    for (const qData of ALGEBRA_QUESTIONS_Y11A) {
      const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
      const correctIndex = shuffledOpts.indexOf(qData.a);
      await addDoc(collection(db, 'questions'), {
        chapterId: 'y11a-1',
        chapterTitle: 'Chapter 1: Algebra review',
        topicId: 'y11a-1' + qData.c.slice(-1),
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

    // 2. Add Image Questions (27 total)
    for (const q of imageQuestions) {
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
