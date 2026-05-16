import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch, doc } from 'firebase/firestore';
import { ALGEBRA_QUESTIONS_Y11A } from '../constants/seedQuestions';

const chapterData = {
  chapterId: 'y11a-1',
  chapterTitle: 'Chapter 1: Algebra review',
  year: 'Year 11',
  difficulty: 'easy',
  isManual: true
};

const newQuestions = [
  // --- Section 1: Simple Expansion ---
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(4(x - 3)\\)', answer: '4x-12', solution: '1. \\(4 \\times x = 4x\\)\n2. \\(4 \\times (-3) = -12\\)\n\nResult: **\\(4x - 12\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(5(a - 2)\\)', answer: '5a-10', solution: '1. \\(5 \\times a = 5a\\)\n2. \\(5 \\times (-2) = -10\\)\n\nResult: **\\(5a - 10\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(-2(y - 5)\\)', answer: '-2y+10', solution: '1. \\(-2 \\times y = -2y\\)\n2. \\(-2 \\times (-5) = +10\\)\n\nResult: **\\(-2y + 10\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(-3(z + 4)\\)', answer: '-3z-12', solution: '1. \\(-3 \\times z = -3z\\)\n2. \\(-3 \\times 4 = -12\\)\n\nResult: **\\(-3z - 12\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(6(2x + 3)\\)', answer: '12x+18', solution: '1. \\(6 \\times 2x = 12x\\)\n2. \\(6 \\times 3 = 18\\)\n\nResult: **\\(12x + 18\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(-(x + 7)\\)', answer: '-x-7', solution: '1. \\(-1 \\times x = -x\\)\n2. \\(-1 \\times 7 = -7\\)\n\nResult: **\\(-x - 7\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(3(a + 4)\\)', answer: '3a+12', solution: '1. \\(3 \\times a = 3a\\)\n2. \\(3 \\times 4 = 12\\)\n\nResult: **\\(3a + 12\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(7(x - 2)\\)', answer: '7x-14', solution: '1. \\(7 \\times x = 7x\\)\n2. \\(7 \\times (-2) = -14\\)\n\nResult: **\\(7x - 14\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(-4(y + 3)\\)', answer: '-4y-12', solution: '1. \\(-4 \\times y = -4y\\)\n2. \\(-4 \\times 3 = -12\\)\n\nResult: **\\(-4y - 12\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(-2(5 - z)\\)', answer: '-10+2z', solution: '1. \\(-2 \\times 5 = -10\\)\n2. \\(-2 \\times (-z) = +2z\\)\n\nResult: **\\(-10 + 2z\\)**' },

  // --- Section 2: Variables and Negatives ---
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(2(x + 3y)\\)', answer: '2x+6y', solution: '1. \\(2 \\times x = 2x\\)\n2. \\(2 \\times 3y = 6y\\)\n\nResult: **\\(2x + 6y\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(-3(p - 2q)\\)', answer: '-3p+6q', solution: '1. \\(-3 \\times p = -3p\\)\n2. \\(-3 \\times (-2q) = +6q\\)\n\nResult: **\\(-3p + 6q\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(k(x - 5)\\)', answer: 'kx-5k', solution: '1. \\(k \\times x = kx\\)\n2. \\(k \\times (-5) = -5k\\)\n\nResult: **\\(kx - 5k\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(-y(y - 2)\\)', answer: '-y^2+2y', solution: '1. \\(-y \\times y = -y^2\\)\n2. \\(-y \\times (-2) = +2y\\)\n\nResult: **\\(-y^2 + 2y\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(x(x + 5)\\)', answer: 'x^2+5x', solution: '1. \\(x \\times x = x^2\\)\n2. \\(x \\times 5 = 5x\\)\n\nResult: **\\(x^2 + 5x\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(2a(a - 3)\\)', answer: '2a^2-6a', solution: '1. \\(2a \\times a = 2a^2\\)\n2. \\(2a \\times (-3) = -6a\\)\n\nResult: **\\(2a^2 - 6a\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(-3y(2y + 1)\\)', answer: '-6y^2-3y', solution: '1. \\(-3y \\times 2y = -6y^2\\)\n2. \\(-3y \\times 1 = -3y\\)\n\nResult: **\\(-6y^2 - 3y\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(4(3x - 2y)\\)', answer: '12x-8y', solution: '1. \\(4 \\times 3x = 12x\\)\n2. \\(4 \\times (-2y) = -8y\\)\n\nResult: **\\(12x - 8y\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(-k(k^2 - 4)\\)', answer: '-k^3+4k', solution: '1. \\(-k \\times k^2 = -k^3\\)\n2. \\(-k \\times (-4) = +4k\\)\n\nResult: **\\(-k^3 + 4k\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'short_answer', question: 'Expand: \\(2x(y - z)\\)', answer: '2xy-2xz', solution: '1. \\(2x \\times y = 2xy\\)\n2. \\(2x \\times (-z) = -2xz\\)\n\nResult: **\\(2xy - 2xz\\)**' },

  // --- Section 3: Expand and Simplify ---
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(3(x + 2) - 2x\\)', options: [{text: 'x + 6', imageUrl: ''}, {text: 'x + 2', imageUrl: ''}, {text: '5x + 6', imageUrl: ''}, {text: 'x - 6', imageUrl: ''}], answer: "0", solution: '1. \\(3x + 6 - 2x\\)\n2. \\((3x - 2x) + 6 = x + 6\\)\n\nResult: **\\(x + 6\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(2a + 4 + 3(a - 1)\\)', options: [{text: '5a + 1', imageUrl: ''}, {text: '5a + 7', imageUrl: ''}, {text: '5a - 1', imageUrl: ''}, {text: 'a + 1', imageUrl: ''}], answer: "0", solution: '1. \\(2a + 4 + 3a - 3\\)\n2. \\((2a + 3a) + (4 - 3) = 5a + 1\\)\n\nResult: **\\(5a + 1\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(7 - (x + 2)\\)', options: [{text: '5 - x', imageUrl: ''}, {text: '9 - x', imageUrl: ''}, {text: 'x + 5', imageUrl: ''}, {text: '-x + 9', imageUrl: ''}], answer: "0", solution: '1. \\(7 - x - 2\\)\n2. \\(5 - x\\)\n\nResult: **\\(5 - x\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((3x - 2y) - (2x - 3y)\\)', options: [{text: 'x + y', imageUrl: ''}, {text: 'x - 5y', imageUrl: ''}, {text: '5x + y', imageUrl: ''}, {text: 'x - y', imageUrl: ''}], answer: "0", solution: '1. \\(3x - 2y - 2x + 3y\\)\n2. \\((3x - 2x) + (-2y + 3y) = x + y\\)\n\nResult: **\\(x + y\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(2(x - 3) - 3(x - 1)\\)', options: [{text: '-x - 3', imageUrl: ''}, {text: '-x - 9', imageUrl: ''}, {text: 'x - 3', imageUrl: ''}, {text: '-x + 3', imageUrl: ''}], answer: "0", solution: '1. \\(2x - 6 - 3x + 3\\)\n2. \\(-x - 3\\)\n\nResult: **\\(-x - 3\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(5(x + 1) - 3x\\)', options: [{text: '2x + 5', imageUrl: ''}, {text: '2x + 1', imageUrl: ''}, {text: '8x + 5', imageUrl: ''}, {text: '2x - 5', imageUrl: ''}], answer: "0", solution: '1. \\(5x + 5 - 3x\\)\n2. \\(2x + 5\\)\n\nResult: **\\(2x + 5\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(2(3a - 4) + 5\\)', options: [{text: '6a - 3', imageUrl: ''}, {text: '6a - 8', imageUrl: ''}, {text: '6a + 1', imageUrl: ''}, {text: '3a - 3', imageUrl: ''}], answer: "0", solution: '1. \\(6a - 8 + 5\\)\n2. \\(6a - 3\\)\n\nResult: **\\(6a - 3\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(10 - 2(y + 4)\\)', options: [{text: '2 - 2y', imageUrl: ''}, {text: '6 - 2y', imageUrl: ''}, {text: '18 - 2y', imageUrl: ''}, {text: '2y + 2', imageUrl: ''}], answer: "0", solution: '1. \\(10 - 2y - 8\\)\n2. \\(2 - 2y\\)\n\nResult: **\\(2 - 2y\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(4(x - 2) - 3(x + 1)\\)', options: [{text: 'x - 11', imageUrl: ''}, {text: 'x - 5', imageUrl: ''}, {text: 'x + 5', imageUrl: ''}, {text: '7x - 11', imageUrl: ''}], answer: "0", solution: '1. \\(4x - 8 - 3x - 3\\)\n2. \\(x - 11\\)\n\nResult: **\\(x - 11\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(3(2a + b) + 2(a - 2b)\\)', options: [{text: '8a - b', imageUrl: ''}, {text: '8a + b', imageUrl: ''}, {text: '4a - b', imageUrl: ''}, {text: '8a - 3b', imageUrl: ''}], answer: "0", solution: '1. \\(6a + 3b + 2a - 4b\\)\n2. \\(8a - b\\)\n\nResult: **\\(8a - b\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(x(x + 2) - x(x - 3)\\)', options: [{text: '5x', imageUrl: ''}, {text: '-x', imageUrl: ''}, {text: '2x^2 + 5x', imageUrl: ''}, {text: '5', imageUrl: ''}], answer: "0", solution: '1. \\(x^2 + 2x - (x^2 - 3x)\\)\n2. \\(x^2 + 2x - x^2 + 3x = 5x\\)\n\nResult: **\\(5x\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\(2(p - q) - (p + q)\\)', options: [{text: 'p - 3q', imageUrl: ''}, {text: 'p - q', imageUrl: ''}, {text: '3p - q', imageUrl: ''}, {text: 'p + q', imageUrl: ''}], answer: "0", solution: '1. \\(2p - 2q - p - q\\)\n2. \\(p - 3q\\)\n\nResult: **\\(p - 3q\\)**' },

  // --- Section 4: Binomial Expansion ---
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((x + 1)(x + 4)\\)', options: [{text: 'x^2 + 5x + 4', imageUrl: ''}, {text: 'x^2 + 4x + 1', imageUrl: ''}, {text: 'x^2 + 5x + 5', imageUrl: ''}, {text: '2x + 5', imageUrl: ''}], answer: "0", solution: '1. \\(x^2 + 4x + x + 4\\)\n2. \\(x^2 + 5x + 4\\)\n\nResult: **\\(x^2 + 5x + 4\\)**' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((y + 3)(y + 2)\\)', options: [{text: 'y^2 + 5y + 6', imageUrl: ''}, {text: 'y^2 + 6y + 5', imageUrl: ''}, {text: 'y^2 + 5y + 5', imageUrl: ''}, {text: 'y^2 + 6', imageUrl: ''}], answer: "0", solution: '1. \\(y^2 + 2y + 3y + 6 = y^2 + 5y + 6\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((t + 5)(t - 2)\\)', options: [{text: 't^2 + 3t - 10', imageUrl: ''}, {text: 't^2 - 3t - 10', imageUrl: ''}, {text: 't^2 + 3t + 10', imageUrl: ''}, {text: 't^2 + 7t - 10', imageUrl: ''}], answer: "0", solution: '1. \\(t^2 - 2t + 5t - 10 = t^2 + 3t - 10\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((x - 3)(x + 1)\\)', options: [{text: 'x^2 - 2x - 3', imageUrl: ''}, {text: 'x^2 + 2x - 3', imageUrl: ''}, {text: 'x^2 - 4x - 3', imageUrl: ''}, {text: 'x^2 - 3', imageUrl: ''}], answer: "0", solution: '1. \\(x^2 + x - 3x - 3 = x^2 - 2x - 3\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((3a + 1)(a + 2)\\)', options: [{text: '3a^2 + 7a + 2', imageUrl: ''}, {text: '3a^2 + 6a + 2', imageUrl: ''}, {text: '3a^2 + 7a + 1', imageUrl: ''}, {text: '4a^2 + 7a + 2', imageUrl: ''}], answer: "0", solution: '1. \\(3a^2 + 6a + a + 2 = 3a^2 + 7a + 2\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((x + 2)(x + 5)\\)', options: [{text: 'x^2 + 7x + 10', imageUrl: ''}, {text: 'x^2 + 10x + 7', imageUrl: ''}, {text: 'x^2 + 7x + 7', imageUrl: ''}, {text: '2x + 7', imageUrl: ''}], answer: "0", solution: '1. \\(x^2 + 5x + 2x + 10 = x^2 + 7x + 10\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((a - 3)(a - 4)\\)', options: [{text: 'a^2 - 7a + 12', imageUrl: ''}, {text: 'a^2 + 7a + 12', imageUrl: ''}, {text: 'a^2 - 7a - 12', imageUrl: ''}, {text: 'a^2 - 12', imageUrl: ''}], answer: "0", solution: '1. \\(a^2 - 4a - 3a + 12 = a^2 - 7a + 12\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((2y + 1)(y + 3)\\)', options: [{text: '2y^2 + 7y + 3', imageUrl: ''}, {text: '2y^2 + 6y + 3', imageUrl: ''}, {text: '2y^2 + 5y + 3', imageUrl: ''}, {text: '3y^2 + 7y + 3', imageUrl: ''}], answer: "0", solution: '1. \\(2y^2 + 6y + y + 3 = 2y^2 + 7y + 3\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((3k - 2)(k + 4)\\)', options: [{text: '3k^2 + 10k - 8', imageUrl: ''}, {text: '3k^2 + 12k - 8', imageUrl: ''}, {text: '3k^2 + 10k + 8', imageUrl: ''}, {text: '3k^2 - 10k - 8', imageUrl: ''}], answer: "0", solution: '1. \\(3k^2 + 12k - 2k - 8 = 3k^2 + 10k - 8\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((x + 6)(x - 6)\\)', options: [{text: 'x^2 - 36', imageUrl: ''}, {text: 'x^2 + 36', imageUrl: ''}, {text: 'x^2 - 12x + 36', imageUrl: ''}, {text: 'x^2 - 12', imageUrl: ''}], answer: "0", solution: 'This is a difference of squares: \\(x^2 - 6^2 = x^2 - 36\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((2a - 1)(2a + 1)\\)', options: [{text: '4a^2 - 1', imageUrl: ''}, {text: '4a^2 + 1', imageUrl: ''}, {text: '2a^2 - 1', imageUrl: ''}, {text: '4a^2 - 4a - 1', imageUrl: ''}], answer: "0", solution: '\\((2a)^2 - 1^2 = 4a^2 - 1\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((t + 4)^2\\)', options: [{text: 't^2 + 8t + 16', imageUrl: ''}, {text: 't^2 + 16', imageUrl: ''}, {text: 't^2 + 4t + 16', imageUrl: ''}, {text: 't^2 + 8t + 8', imageUrl: ''}], answer: "0", solution: '\\(t^2 + 2(t)(4) + 4^2 = t^2 + 8t + 16\\)' },
  { ...chapterData, topicId: 'y11a-1A', topicCode: '1A', topicTitle: 'Expanding brackets', type: 'multiple_choice', question: 'Expand and simplify: \\((2x - 3)^2\\)', options: [{text: '4x^2 - 12x + 9', imageUrl: ''}, {text: '4x^2 - 6x + 9', imageUrl: ''}, {text: '4x^2 + 9', imageUrl: ''}, {text: '2x^2 - 12x + 9', imageUrl: ''}], answer: "0", solution: '\\((2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9\\)' }
];

export const importYear11AdvCh1 = async (forceReset = false) => {
  console.log(`Starting full sync of Year 11 Adv Ch1 (74 original + 45 new)...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-1')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log('Cleared existing questions for y11a-1');

    let count = 0;
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

    for (const q of newQuestions) {
      await addDoc(collection(db, 'questions'), { ...q, createdAt: serverTimestamp(), updatedAt: serverTimestamp(), isActive: true });
      count++;
    }

    console.log(`Successfully imported total ${count} questions (119 total).`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
