import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch, doc } from 'firebase/firestore';
import { ALGEBRA_QUESTIONS_Y11A } from '../constants/seedQuestions';

const chapterData = {
  chapterId: 'y11a-1',
  chapterTitle: 'Chapter 1: Algebra review',
  year: 'Year 11',
  isManual: true
};

const mediumQuestions = [
  // --- Section 1: Simple Expansion (10 items) ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(4(x - 3)\\)', answer: '4x-12', solution: '1. \\(4x - 12\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(5(a - 2)\\)', answer: '5a-10', solution: '1. \\(5a - 10\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(-2(y - 5)\\)', answer: '-2y+10', solution: '1. \\(-2y + 10\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(-3(z + 4)\\)', answer: '-3z-12', solution: '1. \\(-3z - 12\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(6(2x + 3)\\)', answer: '12x+18', solution: '1. \\(12x + 18\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(-(x + 7)\\)', answer: '-x-7', solution: '1. \\(-x - 7\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(3(a + 4)\\)', answer: '3a+12', solution: '1. \\(3a + 12\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(7(x - 2)\\)', answer: '7x-14', solution: '1. \\(7x - 14\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(-4(y + 3)\\)', answer: '-4y-12', solution: '1. \\(-4y - 12\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(-2(5 - z)\\)', answer: '-10+2z', solution: '1. \\(-10 + 2z\\)' },

  // --- Section 2: Variables and Negatives (10 items) ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(2(x + 3y)\\)', answer: '2x+6y', solution: '1. \\(2x + 6y\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(-3(p - 2q)\\)', answer: '-3p+6q', solution: '1. \\(-3p + 6q\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(k(x - 5)\\)', answer: 'kx-5k', solution: '1. \\(kx - 5k\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(-y(y - 2)\\)', answer: '-y^2+2y', solution: '1. \\(-y^2 + 2y\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(x(x + 5)\\)', answer: 'x^2+5x', solution: '1. \\(x^2 + 5x\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(2a(a - 3)\\)', answer: '2a^2-6a', solution: '1. \\(2a^2 - 6a\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(-3y(2y + 1)\\)', answer: '-6y^2-3y', solution: '1. \\(-6y^2 - 3y\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(4(3x - 2y)\\)', answer: '12x-8y', solution: '1. \\(12x - 8y\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(-k(k^2 - 4)\\)', answer: '-k^3+4k', solution: '1. \\(-k^3 + 4k\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\(2x(y - z)\\)', answer: '2xy-2xz', solution: '1. \\(2xy - 2xz\\)' },

  // --- Section 3: Expand and Simplify (12 items) ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(3(x + 2) - 2x\\)', options: [{text: 'x + 6', imageUrl: ''}, {text: 'x + 2', imageUrl: ''}, {text: '5x + 6', imageUrl: ''}, {text: 'x - 6', imageUrl: ''}], answer: "0", solution: '1. \\(x + 6\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(2a + 4 + 3(a - 1)\\)', options: [{text: '5a + 1', imageUrl: ''}, {text: '5a + 7', imageUrl: ''}, {text: '5a - 1', imageUrl: ''}, {text: 'a + 1', imageUrl: ''}], answer: "0", solution: '1. \\(5a + 1\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(7 - (x + 2)\\)', options: [{text: '5 - x', imageUrl: ''}, {text: '9 - x', imageUrl: ''}, {text: 'x + 5', imageUrl: ''}, {text: '-x + 9', imageUrl: ''}], answer: "0", solution: '1. \\(5 - x\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((3x - 2y) - (2x - 3y)\\)', options: [{text: 'x + y', imageUrl: ''}, {text: 'x - 5y', imageUrl: ''}, {text: '5x + y', imageUrl: ''}, {text: 'x - y', imageUrl: ''}], answer: "0", solution: '1. \\(x + y\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(2(x - 3) - 3(x - 1)\\)', options: [{text: '-x - 3', imageUrl: ''}, {text: '-x - 9', imageUrl: ''}, {text: 'x - 3', imageUrl: ''}, {text: '-x + 3', imageUrl: ''}], answer: "0", solution: '1. \\(-x - 3\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(5(x + 1) - 3x\\)', options: [{text: '2x + 5', imageUrl: ''}, {text: '2x + 1', imageUrl: ''}, {text: '8x + 5', imageUrl: ''}, {text: '2x - 5', imageUrl: ''}], answer: "0", solution: '1. \\(2x + 5\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(2(3a - 4) + 5\\)', options: [{text: '6a - 3', imageUrl: ''}, {text: '6a - 8', imageUrl: ''}, {text: '6a + 1', imageUrl: ''}, {text: '3a - 3', imageUrl: ''}], answer: "0", solution: '1. \\(6a - 3\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(10 - 2(y + 4)\\)', options: [{text: '2 - 2y', imageUrl: ''}, {text: '6 - 2y', imageUrl: ''}, {text: '18 - 2y', imageUrl: ''}, {text: '2y + 2', imageUrl: ''}], answer: "0", solution: '1. \\(2 - 2y\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(4(x - 2) - 3(x + 1)\\)', options: [{text: 'x - 11', imageUrl: ''}, {text: 'x - 5', imageUrl: ''}, {text: 'x + 5', imageUrl: ''}, {text: '7x - 11', imageUrl: ''}], answer: "0", solution: '1. \\(x - 11\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(3(2a + b) + 2(a - 2b)\\)', options: [{text: '8a - b', imageUrl: ''}, {text: '8a + b', imageUrl: ''}, {text: '4a - b', imageUrl: ''}, {text: '8a - 3b', imageUrl: ''}], answer: "0", solution: '1. \\(8a - b\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(x(x + 2) - x(x - 3)\\)', options: [{text: '5x', imageUrl: ''}, {text: '-x', imageUrl: ''}, {text: '2x^2 + 5x', imageUrl: ''}, {text: '5', imageUrl: ''}], answer: "0", solution: '1. \\(5x\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\(2(p - q) - (p + q)\\)', options: [{text: 'p - 3q', imageUrl: ''}, {text: 'p - q', imageUrl: ''}, {text: '3p - q', imageUrl: ''}, {text: 'p + q', imageUrl: ''}], answer: "0", solution: '1. \\(p - 3q\\)' },

  // --- Section 4: Binomial Expansion (13 items) ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((x + 1)(x + 4)\\)', options: [{text: 'x^2 + 5x + 4', imageUrl: ''}, {text: 'x^2 + 4x + 1', imageUrl: ''}, {text: 'x^2 + 5x + 5', imageUrl: ''}, {text: '2x + 5', imageUrl: ''}], answer: "0", solution: '1. \\(x^2 + 5x + 4\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((y + 3)(y + 2)\\)', options: [{text: 'y^2 + 5y + 6', imageUrl: ''}, {text: 'y^2 + 6y + 5', imageUrl: ''}, {text: 'y^2 + 5y + 5', imageUrl: ''}, {text: 'y^2 + 6', imageUrl: ''}], answer: "0", solution: '1. \\(y^2 + 5y + 6\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((t + 5)(t - 2)\\)', options: [{text: 't^2 + 3t - 10', imageUrl: ''}, {text: 't^2 - 3t - 10', imageUrl: ''}, {text: 't^2 + 3t + 10', imageUrl: ''}, {text: 't^2 + 7t - 10', imageUrl: ''}], answer: "0", solution: '1. \\(t^2 + 3t - 10\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((x - 3)(x + 1)\\)', options: [{text: 'x^2 - 2x - 3', imageUrl: ''}, {text: 'x^2 + 2x - 3', imageUrl: ''}, {text: 'x^2 - 4x - 3', imageUrl: ''}, {text: 'x^2 - 3', imageUrl: ''}], answer: "0", solution: '1. \\(x^2 - 2x - 3\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((3a + 1)(a + 2)\\)', options: [{text: '3a^2 + 7a + 2', imageUrl: ''}, {text: '3a^2 + 6a + 2', imageUrl: ''}, {text: '3a^2 + 7a + 1', imageUrl: ''}, {text: '4a^2 + 7a + 2', imageUrl: ''}], answer: "0", solution: '1. \\(3a^2 + 7a + 2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((x + 2)(x + 5)\\)', options: [{text: 'x^2 + 7x + 10', imageUrl: ''}, {text: 'x^2 + 10x + 7', imageUrl: ''}, {text: 'x^2 + 7x + 7', imageUrl: ''}, {text: '2x + 7', imageUrl: ''}], answer: "0", solution: '1. \\(x^2 + 7x + 10\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((a - 3)(a - 4)\\)', options: [{text: 'a^2 - 7a + 12', imageUrl: ''}, {text: 'a^2 + 7a + 12', imageUrl: ''}, {text: 'a^2 - 7a - 12', imageUrl: ''}, {text: 'a^2 - 12', imageUrl: ''}], answer: "0", solution: '1. \\(a^2 - 7a + 12\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((2y + 1)(y + 3)\\)', options: [{text: '2y^2 + 7y + 3', imageUrl: ''}, {text: '2y^2 + 6y + 3', imageUrl: ''}, {text: '2y^2 + 5y + 3', imageUrl: ''}, {text: '3y^2 + 7y + 3', imageUrl: ''}], answer: "0", solution: '1. \\(2y^2 + 7y + 3\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((3k - 2)(k + 4)\\)', options: [{text: '3k^2 + 10k - 8', imageUrl: ''}, {text: '3k^2 + 12k - 8', imageUrl: ''}, {text: '3k^2 + 10k + 8', imageUrl: ''}, {text: '3k^2 - 10k - 8', imageUrl: ''}], answer: "0", solution: '1. \\(3k^2 + 10k - 8\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((x + 6)(x - 6)\\)', options: [{text: 'x^2 - 36', imageUrl: ''}, {text: 'x^2 + 36', imageUrl: ''}, {text: 'x^2 - 12x + 36', imageUrl: ''}, {text: 'x^2 - 12', imageUrl: ''}], answer: "0", solution: '1. \\(x^2 - 36\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((2a - 1)(2a + 1)\\)', options: [{text: '4a^2 - 1', imageUrl: ''}, {text: '4a^2 + 1', imageUrl: ''}, {text: '2a^2 - 1', imageUrl: ''}, {text: '4a^2 - 4a - 1', imageUrl: ''}], answer: "0", solution: '1. \\(4a^2 - 1\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((t + 4)^2\\)', options: [{text: 't^2 + 8t + 16', imageUrl: ''}, {text: 't^2 + 16', imageUrl: ''}, {text: 't^2 + 4t + 16', imageUrl: ''}, {text: 't^2 + 8t + 8', imageUrl: ''}], answer: "0", solution: '1. \\(t^2 + 8t + 16\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((2x - 3)^2\\)', options: [{text: '4x^2 - 12x + 9', imageUrl: ''}, {text: '4x^2 - 6x + 9', imageUrl: ''}, {text: '4x^2 + 9', imageUrl: ''}, {text: '2x^2 - 12x + 9', imageUrl: ''}], answer: "0", solution: '1. \\(4x^2 - 12x + 9\\)' },

  // --- IMAGE QUESTIONS (Question 5 & 6) (27 items) ---
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((A + B)(A + B)\\)', options: [{text: 'A^2 + 2AB + B^2', imageUrl: ''}, {text: 'A^2 + B^2', imageUrl: ''}, {text: 'A^2 + AB + B^2', imageUrl: ''}, {text: '2A + 2B', imageUrl: ''}], answer: "0", solution: '1. \\(A^2 + 2AB + B^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((A - B)^2\\)', options: [{text: 'A^2 - 2AB + B^2', imageUrl: ''}, {text: 'A^2 - B^2', imageUrl: ''}, {text: 'A^2 + 2AB + B^2', imageUrl: ''}, {text: 'A^2 - 2AB - B^2', imageUrl: ''}], answer: "0", solution: '1. \\(A^2 - 2AB + B^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((A - B)(A + B)\\)', options: [{text: 'A^2 - B^2', imageUrl: ''}, {text: 'A^2 + B^2', imageUrl: ''}, {text: 'A^2 - 2AB + B^2', imageUrl: ''}, {text: 'A^2 + 2AB + B^2', imageUrl: ''}], answer: "0", solution: '1. \\(A^2 - B^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((m + n)^2\\)', answer: 'm^2+2mn+n^2', solution: '1. \\(m^2 + 2mn + n^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((p - q)^2\\)', answer: 'p^2-2pq+q^2', solution: '1. \\(p^2 - 2pq + q^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((u - v)(u + v)\\)', answer: 'u^2-v^2', solution: '1. \\(u^2 - v^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((x + 5)^2\\)', answer: 'x^2+10x+25', solution: '1. \\(x^2 + 10x + 25\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((y - 3)^2\\)', answer: 'y^2-6y+9', solution: '1. \\(y^2 - 6y + 9\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((k + 8)^2\\)', answer: 'k^2+16k+64', solution: '1. \\(k^2 + 16k + 64\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((a - 7)(a + 7)\\)', answer: 'a^2-49', solution: '1. \\(a^2 - 49\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((10 + b)(10 - b)\\)', answer: '100-b^2', solution: '1. \\(100 - b^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((5 + c)^2\\)', answer: 'c^2+10c+25', solution: '1. \\(25 + 10c + c^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((11 - g)^2\\)', answer: '121-22g+g^2', solution: '1. \\(121 - 22g + g^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((h + 12)(h - 12)\\)', answer: 'h^2-144', solution: '1. \\(h^2 - 144\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand: \\((i + 13)^2\\)', answer: 'i^2+26i+169', solution: '1. \\(i^2 + 26i + 169\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((3x + 1)^2\\)', options: [{text: '9x^2 + 6x + 1', imageUrl: ''}, {text: '9x^2 + 1', imageUrl: ''}, {text: '9x^2 + 3x + 1', imageUrl: ''}, {text: '6x^2 + 6x + 1', imageUrl: ''}], answer: "0", solution: '1. \\(9x^2 + 6x + 1\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((4y - 5)^2\\)', options: [{text: '16y^2 - 40y + 25', imageUrl: ''}, {text: '16y^2 - 20y + 25', imageUrl: ''}, {text: '16y^2 - 25', imageUrl: ''}, {text: '8y^2 - 40y + 25', imageUrl: ''}], answer: "0", solution: '1. \\(16y^2 - 40y + 25\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((2z + 3)^2\\)', options: [{text: '4z^2 + 12z + 9', imageUrl: ''}, {text: '4z^2 + 6z + 9', imageUrl: ''}, {text: '4z^2 + 9', imageUrl: ''}, {text: '2z^2 + 12z + 9', imageUrl: ''}], answer: "0", solution: '1. \\(4z^2 + 12z + 9\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((5a + 2b)^2\\)', options: [{text: '25a^2 + 20ab + 4b^2', imageUrl: ''}, {text: '25a^2 + 10ab + 4b^2', imageUrl: ''}, {text: '25a^2 + 4b^2', imageUrl: ''}, {text: '10a^2 + 20ab + 4b^2', imageUrl: ''}], answer: "0", solution: '1. \\(25a^2 + 20ab + 4b^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((3p + 4q)(3p - 4q)\\)', options: [{text: '9p^2 - 16q^2', imageUrl: ''}, {text: '9p^2 + 16q^2', imageUrl: ''}, {text: '9p^2 - 24pq + 16q^2', imageUrl: ''}, {text: '3p^2 - 4q^2', imageUrl: ''}], answer: "0", solution: '1. \\(9p^2 - 16q^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((2u - 5v)(2u + 5v)\\)', options: [{text: '4u^2 - 25v^2', imageUrl: ''}, {text: '4u^2 + 25v^2', imageUrl: ''}, {text: '2u^2 - 5v^2', imageUrl: ''}, {text: '4u^2 - 20uv + 25v^2', imageUrl: ''}], answer: "0", solution: '1. \\(4u^2 - 25v^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((4j + 3)^2\\)', options: [{text: '16j^2 + 24j + 9', imageUrl: ''}, {text: '16j^2 + 12j + 9', imageUrl: ''}, {text: '16j^2 + 9', imageUrl: ''}, {text: '8j^2 + 24j + 9', imageUrl: ''}], answer: "0", solution: '1. \\(16j^2 + 24j + 9\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((5x - 2y)^2\\)', options: [{text: '25x^2 - 20xy + 4y^2', imageUrl: ''}, {text: '25x^2 - 10xy + 4y^2', imageUrl: ''}, {text: '25x^2 + 4y^2', imageUrl: ''}, {text: '5x^2 - 20xy + 2y^2', imageUrl: ''}], answer: "0", solution: '1. \\(25x^2 - 20xy + 4y^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((6 + 7n)(6 - 7n)\\)', options: [{text: '36 - 49n^2', imageUrl: ''}, {text: '36 + 49n^2', imageUrl: ''}, {text: '49n^2 - 36', imageUrl: ''}, {text: '36 - 14n', imageUrl: ''}], answer: "0", solution: '1. \\(36 - 49n^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((9 - 2m)^2\\)', options: [{text: '81 - 36m + 4m^2', imageUrl: ''}, {text: '81 + 4m^2', imageUrl: ''}, {text: '81 - 18m + 4m^2', imageUrl: ''}, {text: '18 - 36m + 4m^2', imageUrl: ''}], answer: "0", solution: '1. \\(81 - 36m + 4m^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((8a + 3b)^2\\)', options: [{text: '64a^2 + 48ab + 9b^2', imageUrl: ''}, {text: '64a^2 + 24ab + 9b^2', imageUrl: ''}, {text: '64a^2 + 9b^2', imageUrl: ''}, {text: '16a^2 + 48ab + 6b^2', imageUrl: ''}], answer: "0", solution: '1. \\(64a^2 + 48ab + 9b^2\\)' },
  { ...chapterData, difficulty: 'medium', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand: \\((10 - 7k)^2\\)', options: [{text: '100 - 140k + 49k^2', imageUrl: ''}, {text: '100 - 70k + 49k^2', imageUrl: ''}, {text: '100 + 49k^2', imageUrl: ''}, {text: '20 - 140k + 49k^2', imageUrl: ''}], answer: "0", solution: '1. \\(100 - 140k + 49k^2\\)' }
];

const hardQuestions = [
  // --- Section 7: Algebraic Fractions Expansion (3 items) ---
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((t + \\frac{1}{t})^2\\)', options: [{text: 't^2 + 2 + \\frac{1}{t^2}', imageUrl: ''}, {text: 't^2 + \\frac{1}{t^2}', imageUrl: ''}, {text: 't^2 + \\frac{2}{t} + \\frac{1}{t^2}', imageUrl: ''}, {text: '2t + \\frac{2}{t}', imageUrl: ''}], answer: "0", solution: '1. \\((t)^2 + 2(t)(\\frac{1}{t}) + (\\frac{1}{t})^2\\)\n2. \\(t^2 + 2 + \\frac{1}{t^2}\\)\n\nResult: **\\(t^2 + 2 + \\frac{1}{t^2}\\)**' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((x - \\frac{2}{x})^2\\)', options: [{text: 'x^2 - 4 + \\frac{4}{x^2}', imageUrl: ''}, {text: 'x^2 + \\frac{4}{x^2}', imageUrl: ''}, {text: 'x^2 - 4x + \\frac{4}{x^2}', imageUrl: ''}, {text: 'x^2 - 2 + \\frac{4}{x^2}', imageUrl: ''}], answer: "0", solution: '1. \\(x^2 - 2(x)(\\frac{2}{x}) + (\\frac{2}{x})^2 = x^2 - 4 + \\frac{4}{x^2}\\)' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((y + \\frac{3}{y})(y - \\frac{3}{y})\\)', options: [{text: 'y^2 - \\frac{9}{y^2}', imageUrl: ''}, {text: 'y^2 - 9', imageUrl: ''}, {text: 'y^2 + \\frac{9}{y^2}', imageUrl: ''}, {text: 'y^2 - 3', imageUrl: ''}], answer: "0", solution: '1. \\(y^2 - (\\frac{3}{y})^2 = y^2 - \\frac{9}{y^2}\\)' },

  // --- Section 8: Numerical Expansions (3 items) ---
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Find the value of \\(103^2\\) using special expansions.', answer: '10609', solution: '1. \\((100 + 3)^2 = 100^2 + 2(100)(3) + 3^2\\)\n2. \\(10000 + 600 + 9 = 10609\\)' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Find the value of \\(998^2\\) using special expansions.', answer: '996004', solution: '1. \\((1000 - 2)^2 = 1000^2 - 2(1000)(2) + 2^2\\)\n2. \\(1000000 - 4000 + 4 = 996004\\)' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Find the value of \\(302 \\times 298\\) using special expansions.', answer: '89996', solution: '1. \\((300 + 2)(300 - 2) = 300^2 - 2^2\\)\n2. \\(90000 - 4 = 89996\\)' },

  // --- Section 9: Complex Expansions (6 items) ---
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((x - y)(x^2 + xy + y^2)\\)', options: [{text: 'x^3 - y^3', imageUrl: ''}, {text: 'x^3 + y^3', imageUrl: ''}, {text: '(x - y)^3', imageUrl: ''}, {text: 'x^3 - 3x^2y + 3xy^2 - y^3', imageUrl: ''}], answer: "0", solution: 'This is the difference of cubes identity: \\(x^3 - y^3\\)' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand and simplify: \\((x + 3)^2 - (x + 2)^2\\)', answer: '2x+5', solution: '1. \\((x^2 + 6x + 9) - (x^2 + 4x + 4)\\)\n2. \\(x^2 + 6x + 9 - x^2 - 4x - 4 = 2x + 5\\)' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand and simplify: \\((a - 4)^2 - (a - 4)(a + 4)\\)', answer: '-8a+32', solution: '1. \\((a^2 - 8a + 16) - (a^2 - 16)\\)\n2. \\(a^2 - 8a + 16 - a^2 + 16 = -8a + 32\\)' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'short_answer', question: 'Expand and simplify: \\((2x + 1)(x - 2) - (x - 3)(x + 2)\\)', answer: 'x^2-2x+4', solution: '1. \\((2x^2 - 4x + x - 2) - (x^2 + 2x - 3x - 6)\\)\n2. \\((2x^2 - 3x - 2) - (x^2 - x - 6)\\)\n3. \\(x^2 - 2x + 4\\)' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Expand and simplify: \\((x - 2)^3\\)', options: [{text: 'x^3 - 6x^2 + 12x - 8', imageUrl: ''}, {text: 'x^3 - 8', imageUrl: ''}, {text: 'x^3 - 2x^2 + 4x - 8', imageUrl: ''}, {text: 'x^3 - 4x^2 + 8x - 8', imageUrl: ''}], answer: "0", solution: '1. \\((x - 2)(x^2 - 4x + 4)\\)\n2. \\(x(x^2 - 4x + 4) - 2(x^2 - 4x + 4)\\)\n3. \\(x^3 - 4x^2 + 4x - 2x^2 + 8x - 8 = x^3 - 6x^2 + 12x - 8\\)' },
  { ...chapterData, difficulty: 'hard', topicId: 'y11a-1A', topicCode: '1A', type: 'multiple_choice', question: 'Simplify: \\((a + b + c)^2 - 2(ab + bc + ca)\\)', options: [{text: 'a^2 + b^2 + c^2', imageUrl: ''}, {text: 'a^2 + b^2 + c^2 + 4(ab+bc+ca)', imageUrl: ''}, {text: '0', imageUrl: ''}, {text: '(a + b + c)^2', imageUrl: ''}], answer: "0", solution: '1. \\((a^2 + b^2 + c^2 + 2ab + 2bc + 2ca) - 2(ab + bc + ca) = a^2 + b^2 + c^2\\)' }
];

export const importYear11AdvCh1 = async (forceReset = false) => {
  console.log(`Starting full sync of Year 11 Adv Ch1 (74 original + 72 medium + 12 hard = 158 total)...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-1')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    
    // 1. Add Original 74 Questions
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

    // 2. Add Medium Questions (72 items)
    for (const q of mediumQuestions) {
      await addDoc(collection(db, 'questions'), { ...q, createdAt: serverTimestamp(), updatedAt: serverTimestamp(), isActive: true });
      count++;
    }

    // 3. Add Hard Questions (12 items)
    for (const q of hardQuestions) {
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
