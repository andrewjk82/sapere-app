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
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-3A', type: 'short_answer', question: 'If \\(F(x) = 2-x^2\\), find \\(F(t-2)\\).', answer: '-t^2+4t-2', solution: '2-(t-2)^2 = 2-(t^2-4t+4) = -t^2+4t-2' },

  // --- Q16: 2 items (Hard) ---
  { 
    ...chapterData, 
    difficulty: 'hard', 
    topicId: 'y11a-3A', 
    type: 'multiple_choice', 
    question: 'Using \\(P(x) = x^2 - 4x - 6\\), find the value of \\(P(2 + \\sqrt{10})\\).', 
    options: [
      {text: '0', imageUrl: ''}, 
      {text: '4', imageUrl: ''}, 
      {text: '10', imageUrl: ''}, 
      {text: '-6', imageUrl: ''}
    ], 
    answer: "0", 
    solution: `To find \\(P(2 + \\sqrt{10})\\), we substitute \\(x = 2 + \\sqrt{10}\\) into the function:\n\n1. **Substitution:**\n\\[P(2 + \\sqrt{10}) = (2 + \\sqrt{10})^2 - 4(2 + \\sqrt{10}) - 6\\]\n\n2. **Expand the square:**\n\\[(2 + \\sqrt{10})^2 = 2^2 + 2(2)(\\sqrt{10}) + (\\sqrt{10})^2 = 4 + 4\\sqrt{10} + 10 = 14 + 4\\sqrt{10}\\]\n\n3. **Expand the middle term:**\n\\[-4(2 + \\sqrt{10}) = -8 - 4\\sqrt{10}\\]\n\n4. **Combine all parts:**\n\\[P = (14 + 4\\sqrt{10}) + (-8 - 4\\sqrt{10}) - 6\\]\n\\[P = 14 - 8 - 6 + 4\\sqrt{10} - 4\\sqrt{10} = 0\\]\n\n**Final Answer: 0**` 
  },
  { 
    ...chapterData, 
    difficulty: 'hard', 
    topicId: 'y11a-3A', 
    type: 'multiple_choice', 
    question: 'Using \\(P(x) = x^2 - 4x - 6\\), find the value of \\(P(\\sqrt{5} + 2)\\).', 
    options: [
      {text: '-5', imageUrl: ''}, 
      {text: '5', imageUrl: ''}, 
      {text: '0', imageUrl: ''}, 
      {text: '-14', imageUrl: ''}
    ], 
    answer: "0", 
    solution: `Substitute \\(x = \\sqrt{5} + 2\\) into \\(P(x) = x^2 - 4x - 6\\):\n\n1. **Substitution:**\n\\[P = (\\sqrt{5} + 2)^2 - 4(\\sqrt{5} + 2) - 6\\]\n\n2. **Expand the square:**\n\\[(\\sqrt{5} + 2)^2 = (\\sqrt{5})^2 + 2(2)(\\sqrt{5}) + 2^2 = 5 + 4\\sqrt{5} + 4 = 9 + 4\\sqrt{5}\\]\n\n3. **Expand the middle term:**\n\\[-4(\\sqrt{5} + 2) = -4\\sqrt{5} - 8\\]\n\n4. **Combine:**\n\\[P = (9 + 4\\sqrt{5}) - 4\\sqrt{5} - 8 - 6\\]\n\\[P = 9 - 8 - 6 = -5\\]\n\n**Final Answer: -5**` 
  },

  // --- Q17: 3 items (Hard) ---
  { 
    ...chapterData, 
    difficulty: 'hard', 
    topicId: 'y11a-3A', 
    type: 'multiple_choice', 
    question: 'If \\(f(x) = x^2 + 3x\\), find \\(\\frac{f(2+h) - f(2)}{h}\\) in simplest form.', 
    options: [
      {text: 'h + 7', imageUrl: ''}, 
      {text: 'h + 4', imageUrl: ''}, 
      {text: '2h + 7', imageUrl: ''}, 
      {text: 'h + 10', imageUrl: ''}
    ], 
    answer: "0", 
    solution: `We follow these steps to simplify the expression:\n\n1. **Find \\(f(2+h)\\):**\n\\[f(2+h) = (2+h)^2 + 3(2+h)\\]\n\\[= (4 + 4h + h^2) + (6 + 3h) = h^2 + 7h + 10\\]\n\n2. **Find \\(f(2)\\):**\n\\[f(2) = 2^2 + 3(2) = 4 + 6 = 10\\]\n\n3. **Substitute into the formula:**\n\\[\\frac{f(2+h) - f(2)}{h} = \\frac{(h^2 + 7h + 10) - 10}{h}\\]\n\\[= \\frac{h^2 + 7h}{h} = \\frac{h(h + 7)}{h} = h + 7\\]\n\n**Final Answer: h + 7**` 
  },
  { 
    ...chapterData, 
    difficulty: 'hard', 
    topicId: 'y11a-3A', 
    type: 'multiple_choice', 
    question: 'If \\(f(x) = x^2 + 3x\\), find \\(\\frac{f(a) - f(b)}{a-b}\\) in simplest form (\\(a \\neq b\\)).', 
    options: [
      {text: 'a + b + 3', imageUrl: ''}, 
      {text: 'a + b - 3', imageUrl: ''}, 
      {text: '2(a + b)', imageUrl: ''}, 
      {text: 'a - b + 3', imageUrl: ''}
    ], 
    answer: "0", 
    solution: `1. **Write the expressions for f(a) and f(b):**\n\\(f(a) = a^2 + 3a\\)\n\\(f(b) = b^2 + 3b\\)\n\n2. **Set up the numerator:**\n\\(f(a) - f(b) = (a^2 + 3a) - (b^2 + 3b) = (a^2 - b^2) + (3a - 3b)\\)\n\n3. **Factorize:**\n\\(a^2 - b^2 = (a-b)(a+b)\\)\n\\(3a - 3b = 3(a-b)\\)\nSo, \\(f(a) - f(b) = (a-b)(a+b) + 3(a-b) = (a-b)(a + b + 3)\\)\n\n4. **Divide by (a-b):**\n\\[\\frac{(a-b)(a + b + 3)}{a-b} = a + b + 3\\]\n\n**Final Answer: a + b + 3**` 
  },
  { 
    ...chapterData, 
    difficulty: 'hard', 
    topicId: 'y11a-3A', 
    type: 'multiple_choice', 
    question: 'If \\(f(x) = x^2 + 3x\\), find \\(\\frac{f(x+h) - f(x)}{h}\\) in simplest form.', 
    options: [
      {text: '2x + h + 3', imageUrl: ''}, 
      {text: 'x + h + 3', imageUrl: ''}, 
      {text: '2x + 3', imageUrl: ''}, 
      {text: 'x^2 + h + 3', imageUrl: ''}
    ], 
    answer: "0", 
    solution: `This is the formal definition of a derivative. Let's simplify:\n\n1. **Expand \\(f(x+h)\\):**\n\\[f(x+h) = (x+h)^2 + 3(x+h) = x^2 + 2xh + h^2 + 3x + 3h\\]\n\n2. **Subtract \\(f(x)\\):**\n\\[f(x+h) - f(x) = (x^2 + 2xh + h^2 + 3x + 3h) - (x^2 + 3x)\\]\n\\[= 2xh + h^2 + 3h\\]\n\n3. **Divide by h:**\n\\[\\frac{2xh + h^2 + 3h}{h} = \\frac{h(2x + h + 3)}{h} = 2x + h + 3\\]\n\n**Final Answer: 2x + h + 3**` 
  },

  // --- Q18: 3 items (Hard) ---
  { 
    ...chapterData, 
    difficulty: 'hard', 
    topicId: 'y11a-3A', 
    type: 'multiple_choice', 
    question: 'Given \\(f(x) = x^4 + 3x^2 + 7\\), which of the following properties is true for all values of \\(x\\)?', 
    options: [
      {text: 'f(-x) = f(x)', imageUrl: ''}, 
      {text: 'f(-x) = -f(x)', imageUrl: ''}, 
      {text: 'f(1/x) = f(x)', imageUrl: ''}, 
      {text: 'f(x+1) = f(x)', imageUrl: ''}
    ], 
    answer: "0", 
    solution: `To check if a function is even, we find \\(f(-x)\\):\n\n1. **Substitution:**\n\\[f(-x) = (-x)^4 + 3(-x)^2 + 7\\]\n\n2. **Simplify:**\nSince any even power of a negative number is positive:\n\\((-x)^4 = x^4\\)\n\\((-x)^2 = x^2\\)\n\n3. **Conclusion:**\n\\[f(-x) = x^4 + 3x^2 + 7 = f(x)\\]\nThis type of function is known as an **Even function**.\n\n**Final Answer: f(-x) = f(x)**` 
  },
  { 
    ...chapterData, 
    difficulty: 'hard', 
    topicId: 'y11a-3A', 
    type: 'multiple_choice', 
    question: 'For the function \\(g(x) = x^3 + \\frac{5}{x}\\), which property holds whenever \\(x \\neq 0\\)?', 
    options: [
      {text: 'g(-x) = -g(x)', imageUrl: ''}, 
      {text: 'g(-x) = g(x)', imageUrl: ''}, 
      {text: 'g(1/x) = g(x)', imageUrl: ''}, 
      {text: 'g(x) = 0', imageUrl: ''}
    ], 
    answer: "0", 
    solution: `Let's test \\(g(-x)\\):\n\n1. **Substitution:**\n\\[g(-x) = (-x)^3 + \\frac{5}{(-x)}\\]\n\n2. **Simplify:**\n\\((-x)^3 = -x^3\\)\n\\(\\frac{5}{-x} = -\\frac{5}{x}\\)\n\n3. **Factorize the negative sign:**\n\\[g(-x) = -x^3 - \\frac{5}{x} = -\\left(x^3 + \\frac{5}{x}\\right) = -g(x)\\]\nThis type of function is known as an **Odd function**.\n\n**Final Answer: g(-x) = -g(x)**` 
  },
  { 
    ...chapterData, 
    difficulty: 'hard', 
    topicId: 'y11a-3A', 
    type: 'multiple_choice', 
    question: 'If \\(h(x) = \\frac{4x}{x^2+1}\\), which of the following is true for all \\(x \\neq 0\\)?', 
    options: [
      {text: 'h(1/x) = h(x)', imageUrl: ''}, 
      {text: 'h(-x) = h(x)', imageUrl: ''}, 
      {text: 'h(1/x) = -h(x)', imageUrl: ''}, 
      {text: 'h(x) = 1', imageUrl: ''}
    ], 
    answer: "0", 
    solution: `Let's substitute \\(1/x\\) for \\(x\\):\n\n1. **Substitution:**\n\\[h(1/x) = \\frac{4(1/x)}{(1/x)^2 + 1}\\]\n\n2. **Simplify the denominator:**\n\\[(1/x)^2 + 1 = \\frac{1}{x^2} + 1 = \\frac{1 + x^2}{x^2}\\]\n\n3. **Divide:**\n\\[h(1/x) = \\frac{4}{x} \\div \\frac{1 + x^2}{x^2} = \\frac{4}{x} \\times \\frac{x^2}{1 + x^2}\\]\n\\[= \\frac{4x}{1 + x^2} = h(x)\\]\n\n**Final Answer: h(1/x) = h(x)**` 
  }
];

export const importYear11AdvCh3 = async (forceReset = false) => {
  console.log(`Starting full sync of Y11 Adv Ch3 (Total 83)...`);
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
