import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch, doc } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-3',
  chapterTitle: 'Chapter 3: Functions and graphs',
  year: 'Year 11',
  isManual: true
};

const allQuestions3A = [
  // --- Q1: 4 items ---
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'If \\(f(x) = 2x + 3\\), find \\(f(1)\\).', answer: '5', solution: 'f(1) = 2(1)+3 = 5' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'If \\(f(x) = 2x + 3\\), find \\(f(0)\\).', answer: '3', solution: 'f(0) = 2(0)+3 = 3' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'If \\(f(x) = 2x + 3\\), find \\(f(-2)\\).', answer: '-1', solution: 'f(-2) = 2(-2)+3 = -1' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', topicCode: '3A', type: 'short_answer', question: 'If \\(f(x) = 2x + 3\\), find \\(f(4)\\).', answer: '11', solution: 'f(4) = 2(4)+3 = 11' },
  // --- Q2: 4 items ---
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'Let \\(p(x) = x^2 - 2x - 3\\). Find \\(p(0)\\).', answer: '-3', solution: 'p(0) = -3' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'Let \\(p(x) = x^2 - 2x - 3\\). Find \\(p(4)\\).', answer: '5', solution: 'p(4) = 16 - 8 - 3 = 5' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'Let \\(p(x) = x^2 - 2x - 3\\). Find \\(p(3)\\).', answer: '0', solution: 'p(3) = 9 - 6 - 3 = 0' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'Let \\(p(x) = x^2 - 2x - 3\\). Find \\(p(-2)\\).', answer: '5', solution: 'p(-2) = 4 + 4 - 3 = 5' },
  // --- Q3: 4 items ---
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'Value of \\(y = 5 + 2x - x^2\\) at \\(x = 0\\).', answer: '5', solution: '5' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'Value of \\(y = 5 + 2x - x^2\\) at \\(x = 5\\).', answer: '-10', solution: '5+10-25 = -10' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'Value of \\(y = 5 + 2x - x^2\\) at \\(x = -2\\).', answer: '-3', solution: '5-4-4 = -3' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'Value of \\(y = 5 + 2x - x^2\\) at \\(x = -1\\).', answer: '2', solution: '5-2-1 = 2' },
  // --- Q4: 12 items ---
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 2x + 2\\), find \\(h(-3)\\).', answer: '-4', solution: '-4' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 2x + 2\\), find \\(h(1)\\).', answer: '4', solution: '4' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 2x + 2\\), find \\(h(5)\\).', answer: '12', solution: '12' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 1/x\\), find \\(h(-3)\\).', answer: '-1/3', solution: '-1/3' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 1/x\\), find \\(h(1)\\).', answer: '1', solution: '1' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 1/x\\), find \\(h(5)\\).', answer: '1/5', solution: '1/5' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 3x - x^2\\), find \\(h(-3)\\).', answer: '-18', solution: '-18' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 3x - x^2\\), find \\(h(1)\\).', answer: '2', solution: '2' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = 3x - x^2\\), find \\(h(5)\\).', answer: '-10', solution: '-10' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\sqrt{x+4}\\), find \\(h(-3)\\).', answer: '1', solution: '1' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\sqrt{x+4}\\), find \\(h(1)\\).', answer: '2.236', solution: 'sqrt(5)' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(h(x) = \\sqrt{x+4}\\), find \\(h(5)\\).', answer: '3', solution: '3' },
  // --- Q5: 3 items ---
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'multiple_choice', question: 'If \\(g(x) = 3x + 1\\), write \\(g(t)\\).', options: [{text: '3t + 1', imageUrl: ''}, {text: '3x + 1', imageUrl: ''}], answer: "0", solution: '3t+1' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'multiple_choice', question: 'If \\(g(x) = x^2 - 2x + 8\\), write \\(g(t)\\).', options: [{text: 't^2 - 2t + 8', imageUrl: ''}, {text: 'x^2 - 2x + 8', imageUrl: ''}], answer: "0", solution: 't^2-2t+8' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'multiple_choice', question: 'If \\(g(x) = x - \\sqrt{x}\\), write \\(g(t)\\).', options: [{text: 't - \\sqrt{t}', imageUrl: ''}, {text: 'x - \\sqrt{x}', imageUrl: ''}], answer: "0", solution: 't-sqrt(t)' },
  // --- Q6: 4 items ---
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Substitute \\(x = p - 1\\) into \\(y = 2 - x\\).', options: [{text: '3 - p', imageUrl: ''}, {text: '1 - p', imageUrl: ''}], answer: "0", solution: '2-(p-1)=3-p' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Substitute \\(x = q + 2\\) into \\(y = 2x - 5\\).', options: [{text: '2q - 1', imageUrl: ''}, {text: '2q + 9', imageUrl: ''}], answer: "0", solution: '2(q+2)-5=2q-1' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Substitute \\(x = a + 1\\) into \\(y = x^2 - x\\).', options: [{text: 'a^2 + a', imageUrl: ''}, {text: 'a^2 - a', imageUrl: ''}], answer: "0", solution: '(a+1)^2-(a+1)=a^2+a' },
  { ...chapterData, difficulty: 'easy', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Substitute \\(x = b - 2\\) into \\(y = x^2 - 3x - 4\\).', options: [{text: 'b^2 - 7b + 6', imageUrl: ''}, {text: 'b^2 - b - 6', imageUrl: ''}], answer: "0", solution: 'b^2-7b+6' },

  // --- Q7: 4 items ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Table for \\(y = 2x + 1\\) at \\(x = [-1, 0, 1]\\).', options: [{text: 'y = [-1, 1, 3]', imageUrl: ''}, {text: 'y = [-1, 0, 1]', imageUrl: ''}], answer: "0", solution: 'y = [-1, 1, 3]' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Table for \\(y = x^2 - 2x\\) at \\(x = [-1, 0, 1, 2, 3]\\).', options: [{text: 'y = [3, 0, -1, 0, 3]', imageUrl: ''}, {text: 'y = [1, 0, 1, 4, 9]', imageUrl: ''}], answer: "0", solution: 'y = [3, 0, -1, 0, 3]' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Table for \\(f(x) = 1 - x^2\\) at \\(x = [-2, -1, 0, 1, 2]\\).', options: [{text: 'y = [-3, 0, 1, 0, -3]', imageUrl: ''}, {text: 'y = [5, 2, 1, 2, 5]', imageUrl: ''}], answer: "0", solution: '[-3, 0, 1, 0, -3]' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Table for \\(f(x) = x^3 - 4x\\) at \\(x = [-1, 0, 1, 2]\\).', options: [{text: 'y = [3, 0, -3, 0]', imageUrl: ''}, {text: 'y = [-1, 0, 1, 2]', imageUrl: ''}], answer: "0", solution: '[3, 0, -3, 0]' },
  // --- Q8: 2 items ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Function for "Subtract square of number from 6":', options: [{text: 'f(x) = 6 - x^2', imageUrl: ''}, {text: 'f(x) = x^2 - 6', imageUrl: ''}], answer: "0", solution: '6-x^2' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Table for \\(f(x) = 6 - x^2\\) at \\(x = 2\\).', options: [{text: '2', imageUrl: ''}, {text: '4', imageUrl: ''}], answer: "0", solution: '6-4=2' },
  // --- Q9: 4 items ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(L(x) = 3x + 1\\), find \\(L(1) - 2\\).', answer: '2', solution: '4-2=2' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(L(x) = 3x + 1\\), find \\(3L(-1)\\).', answer: '-6', solution: '3*(-2)=-6' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(L(x) = 3x + 1\\), find \\(L(1) + L(2)\\).', answer: '11', solution: '4+7=11' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(L(x) = 3x + 1\\), find \\(L(9)/L(2)\\).', answer: '4', solution: '28/7=4' },
  // --- Q10: 2 items ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'If \\(P(x) = x^2 - 2x - 4\\), find \\(P(\\sqrt{2})\\).', options: [{text: '-2 - 2\\sqrt{2}', imageUrl: ''}, {text: '2 - 2\\sqrt{2}', imageUrl: ''}], answer: "0", solution: '2-2sqrt(2)-4 = -2-2sqrt(2)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'If \\(P(x) = x^2 - 2x - 4\\), find \\(P(\\sqrt{7})\\).', options: [{text: '3 - 2\\sqrt{7}', imageUrl: ''}, {text: '11 - 2\\sqrt{7}', imageUrl: ''}], answer: "0", solution: '7-2sqrt(7)-4 = 3-2sqrt(7)' },
  // --- Q11: 7 items ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Write \\(3x + 4y + 5 = 0\\) with independent variable \\(x\\).', options: [{text: 'y = -0.75x - 1.25', imageUrl: ''}, {text: 'y = 0.75x + 1.25', imageUrl: ''}], answer: "0", solution: 'y = (-3x-5)/4' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Write \\(3x + 4y + 5 = 0\\) with independent variable \\(y\\).', options: [{text: 'x = -1.33y - 1.67', imageUrl: ''}, {text: 'x = 1.33y + 1.67', imageUrl: ''}], answer: "0", solution: 'x = (-4y-5)/3' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Write \\(4 + xy = 0\\) with dependent variable \\(y\\).', options: [{text: 'y = -4/x', imageUrl: ''}, {text: 'y = 4/x', imageUrl: ''}], answer: "0", solution: 'y = -4/x' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Write \\(V = s^3\\) with dependent variable \\(s\\).', options: [{text: 's = \\sqrt[3]{V}', imageUrl: ''}, {text: 's = V^3', imageUrl: ''}], answer: "0", solution: 's = cuberoot(V)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Write \\(A = 6s^2\\) with dependent variable \\(s\\).', options: [{text: 's = \\sqrt{A/6}', imageUrl: ''}, {text: 's = A/6', imageUrl: ''}], answer: "0", solution: 's = sqrt(A/6)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Write \\(lb = 100\\) with \\(l\\) as dependent.', options: [{text: 'l = 100/b', imageUrl: ''}, {text: 'l = b/100', imageUrl: ''}], answer: "0", solution: 'l = 100/b' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Write \\(lb = 100\\) with \\(l\\) as independent.', options: [{text: 'b = 100/l', imageUrl: ''}, {text: 'b = l/100', imageUrl: ''}], answer: "0", solution: 'b = 100/l' },
  // --- Q12: 1 item ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Meal cost: $50 fee + $20 per person.', options: [{text: 'C(x) = 20x + 50', imageUrl: ''}, {text: 'C(x) = 50x + 20', imageUrl: ''}], answer: "0", solution: '20x + 50' },
  // --- Q13: 4 items ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Why can \\(F(0)\\) not be found for \\(F(x) = \\sqrt{x-4}\\)?', options: [{text: 'Negative under root', imageUrl: ''}, {text: 'Zero denominator', imageUrl: ''}], answer: "0", solution: 'sqrt(-4)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Why can \\(H(3)\\) not be found for \\(H(x) = \\sqrt{1-x^2}\\)?', options: [{text: 'Negative under root', imageUrl: ''}, {text: 'Zero denominator', imageUrl: ''}], answer: "0", solution: 'sqrt(1-9) = sqrt(-8)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Why can \\(g(-2)\\) not be found for \\(g(x) = 1/(2+x)\\)?', options: [{text: 'Zero denominator', imageUrl: ''}, {text: 'Negative under root', imageUrl: ''}], answer: "0", solution: '1/0' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'multiple_choice', question: 'Why can \\(f(0)\\) not be found for \\(f(x) = 1/x\\)?', options: [{text: 'Zero denominator', imageUrl: ''}, {text: 'Undefined', imageUrl: ''}], answer: "0", solution: '1/0' },
  // --- Q14: 12 items ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = 2x-4\\), find \\(g(a)\\).', answer: '2a-4', solution: '2a-4' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = 2x-4\\), find \\(g(-a)\\).', answer: '-2a-4', solution: '-2a-4' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = 2x-4\\), find \\(g(a+1)\\).', answer: '2a-2', solution: '2a+2-4 = 2a-2' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = 2-x\\), find \\(g(a)\\).', answer: '2-a', solution: '2-a' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = 2-x\\), find \\(g(-a)\\).', answer: '2+a', solution: '2-(-a)=2+a' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = 2-x\\), find \\(g(a+1)\\).', answer: '1-a', solution: '2-(a+1)=1-a' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = x^2\\), find \\(g(a)\\).', answer: 'a^2', solution: 'a^2' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = x^2\\), find \\(g(-a)\\).', answer: 'a^2', solution: 'a^2' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = x^2\\), find \\(g(a+1)\\).', answer: 'a^2+2a+1', solution: 'a^2+2a+1' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = 1/(x-1)\\), find \\(g(a)\\).', answer: '1/(a-1)', solution: '1/(a-1)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = 1/(x-1)\\), find \\(g(-a)\\).', answer: '1/(-a-1)', solution: '1/(-a-1)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(g(x) = 1/(x-1)\\), find \\(g(a+1)\\).', answer: '1/a', solution: '1/(a+1-1)=1/a' },
  // --- Q15: 8 items ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(F(x) = 5x+2\\), find \\(F(t)-2\\).', answer: '5t', solution: '5t+2-2 = 5t' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(F(x) = 5x+2\\), find \\(F(t-2)\\).', answer: '5t-8', solution: '5(t-2)+2 = 5t-8' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(F(x) = \\sqrt{x}\\), find \\(F(t)-2\\).', answer: 'sqrt(t)-2', solution: 'sqrt(t)-2' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(F(x) = \\sqrt{x}\\), find \\(F(t-2)\\).', answer: 'sqrt(t-2)', solution: 'sqrt(t-2)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(F(x) = x^2+2x\\), find \\(F(t)-2\\).', answer: 't^2+2t-2', solution: 't^2+2t-2' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(F(x) = x^2+2x\\), find \\(F(t-2)\\).', answer: 't^2-2t', solution: '(t-2)^2+2(t-2)=t^2-4t+4+2t-4=t^2-2t' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(F(x) = 2-x^2\\), find \\(F(t)-2\\).', answer: '-t^2', solution: '2-t^2-2 = -t^2' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(F(x) = 2-x^2\\), find \\(F(t-2)\\).', answer: '-t^2+4t-2', solution: '2-(t-2)^2 = 2-(t^2-4t+4) = -t^2+4t-2' }
];

export const importYear11AdvCh3 = async (forceReset = false) => {
  console.log(`Starting full sync of Y11 Adv Ch3 (Total 75)...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-3')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    for (const q of allQuestions3A) {
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
