import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Four pencil cases each have $x$ pencils in them, and there are six loose pencils. In total there are 46 pencils. Write down an equation representing this scenario.",
    "options": [
      "$$4x + 6 = 46$$",
      "$$4x - 6 = 46$$",
      "$$6x + 4 = 46$$",
      "$$4(x + 6) = 46$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's construct the equation step-by-step from the description:</p><ul><li>\"Four pencil cases each have $x$ pencils in them\" $implies 4x$ pencils.</li><li>\"six loose pencils\" $implies +6$ pencils.</li><li>\"In total there are 46 pencils\" $implies = 46$.</li></ul><p>Combining these parts, the algebraic equation is:</p><p>$$4x + 6 = 46$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.994Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Solve the pencil case equation: $$4x + 6 = 46$$ to find the value of $x$.",
    "options": [
      "$$x = 10$$",
      "$$x = 13$$",
      "$$x = 40$$",
      "$$x = 8$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's solve the equation step-by-step:</p><p>$$4x + 6 = 46$$</p><p>Subtract 6 from both sides:</p><p>$$4x = 46 - 6$$</p><p>$$4x = 40$$</p><p>Divide both sides by 4:</p><p>$$x = \\frac{40}{4}$$</p><p>$$x = 10$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Four pencil cases each have $x$ pencils in them, and there are six loose pencils. In total there are 46 pencils. How many pencils are in each pencil case?",
    "options": [
      "10 pencils",
      "8 pencils",
      "12 pencils",
      "6 pencils"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>We established the equation: $$4x + 6 = 46$$.</p><p>Solving for $x$ gives $$x = 10$$. Since $x$ represents the number of pencils in each case, there are exactly 10 pencils in each pencil case.</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$x + 4 = 12$$",
    "options": [
      "$$x = 8$$",
      "$$x = 16$$",
      "$$x = 6$$",
      "$$x = 12$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$x = 12 - 4 = 8$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$x - 6 = 13$$",
    "options": [
      "$$x = 19$$",
      "$$x = 7$$",
      "$$x = 18$$",
      "$$x = 20$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$x = 13 + 6 = 19$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$x - 7 = 11$$",
    "options": [
      "$$x = 18$$",
      "$$x = 4$$",
      "$$x = 17$$",
      "$$x = 21$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$x = 11 + 7 = 18$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$3x = 12$$",
    "options": [
      "$$x = 4$$",
      "$$x = 9$$",
      "$$x = 15$$",
      "$$x = 36$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$x = \\frac{12}{3} = 4$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$x - 15 = 8$$",
    "options": [
      "$$x = 23$$",
      "$$x = 7$$",
      "$$x = 22$$",
      "$$x = 15$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$x = 8 + 15 = 23$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$\\frac{x}{4} = 8$$",
    "options": [
      "$$x = 32$$",
      "$$x = 2$$",
      "$$x = 12$$",
      "$$x = 16$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$x = 8 \\times 4 = 32$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$3x + 4 = 19$$",
    "options": [
      "$$x = 5$$",
      "$$x = 6$$",
      "$$x = 15$$",
      "$$x = 8$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$3x = 19 - 4 = 15 \\implies x = \\frac{15}{3} = 5$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$19 - x = 12$$",
    "options": [
      "$$x = 7$$",
      "$$x = 31$$",
      "$$x = 6$$",
      "$$x = 8$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$x = 19 - 12 = 7$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$2x + 8 = 17$$",
    "options": [
      "$$x = 4.5$$",
      "$$x = 9$$",
      "$$x = 5$$",
      "$$x = 4$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$2x = 17 - 8 = 9 \\implies x = \\frac{9}{2} = 4.5$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$24 - 3x = 0$$",
    "options": [
      "$$x = 8$$",
      "$$x = 24$$",
      "$$x = 12$$",
      "$$x = 6$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$3x = 24 \\implies x = \\frac{24}{3} = 8$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$\\frac{x}{5} = 7$$",
    "options": [
      "$$x = 35$$",
      "$$x = 12$$",
      "$$x = 2$$",
      "$$x = 40$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$x = 7 \\times 5 = 35$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$\\frac{x}{6} = 15$$",
    "options": [
      "$$x = 90$$",
      "$$x = 21$$",
      "$$x = 9$$",
      "$$x = 60$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation:</p><p>$$x = 15 \\times 6 = 90$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$a + 5 = 14$$",
    "options": [
      "$$a = 9$$",
      "$$a = 19$$",
      "$$a = 8$$",
      "$$a = 10$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation for $a$:</p><p>$$a = 14 - 5 = 9$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$a - 8 = 21$$",
    "options": [
      "$$a = 29$$",
      "$$a = 13$$",
      "$$a = 28$$",
      "$$a = 30$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation for $a$:</p><p>$$a = 21 + 8 = 29$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$3a = 45$$",
    "options": [
      "$$a = 15$$",
      "$$a = 42$$",
      "$$a = 12$$",
      "$$a = 13$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation for $a$:</p><p>$$a = \\frac{45}{3} = 15$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$6a = 42$$",
    "options": [
      "$$a = 7$$",
      "$$a = 36$$",
      "$$a = 8$$",
      "$$a = 9$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation for $a$:</p><p>$$a = \\frac{42}{6} = 7$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$\\frac{a}{6} = 8$$",
    "options": [
      "$$a = 48$$",
      "$$a = 14$$",
      "$$a = 2$$",
      "$$a = 24$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation for $a$:</p><p>$$a = 8 \\times 6 = 48$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$4a + 9 = 25$$",
    "options": [
      "$$a = 4$$",
      "$$a = 16$$",
      "$$a = 5$$",
      "$$a = 6$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation for $a$:</p><p>$$4a = 25 - 9 = 16 \\implies a = \\frac{16}{4} = 4$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$17 - a = 9$$",
    "options": [
      "$$a = 8$$",
      "$$a = 26$$",
      "$$a = 7$$",
      "$$a = 9$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation for $a$:</p><p>$$a = 17 - 9 = 8$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation mentally: $$3a + 12 = 39$$",
    "options": [
      "$$a = 9$$",
      "$$a = 27$$",
      "$$a = 8$$",
      "$$a = 10$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the equation for $a$:</p><p>$$3a = 39 - 12 = 27 \\implies a = \\frac{27}{3} = 9$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Eighteen boxes of chocolates each have $a$ chocolates in them. There are also 25 loose chocolates. In total there are 475 chocolates. Write an equation representing this statement.",
    "options": [
      "$$18a + 25 = 475$$",
      "$$25a + 18 = 475$$",
      "$$18a - 25 = 475$$",
      "$$18(a + 25) = 475$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's translate the sentence to algebra:</p><ul><li>\"Eighteen boxes each containing $a$ chocolates\" $implies 18a$.</li><li>\"25 loose chocolates\" $implies +25$.</li><li>\"In total there are 475 chocolates\" $implies = 475$.</li></ul><p>Hence, the equation is:</p><p>$$18a + 25 = 475$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation: $$18a + 25 = 475$$ to find the number of chocolates, $a$, in each box.",
    "options": [
      "$$a = 25$$",
      "$$a = 20$$",
      "$$a = 30$$",
      "$$a = 15$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's solve step-by-step:</p><p>$$18a + 25 = 475$$</p><p>Subtract 25 from both sides:</p><p>$$18a = 475 - 25$$</p><p>$$18a = 450$$</p><p>Divide both sides by 18:</p><p>$$a = \\frac{450}{18} = 25$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Sam has 12 bags of marbles, each containing $x$ marbles. He tidies his room and finds 18 more marbles under his bed. He knows that he now has a total of 378 marbles. Write an equation representing this statement.",
    "options": [
      "$$12x + 18 = 378$$",
      "$$18x + 12 = 378$$",
      "$$12x - 18 = 378$$",
      "$$12(x + 18) = 378$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Translating the word problem into algebra:</p><ul><li>\"12 bags containing $x$ marbles\" $implies 12x$.</li><li>\"18 loose marbles\" $implies +18$.</li><li>\"Total of 378 marbles\" $implies = 378$.</li></ul><p>Therefore, the equation is:</p><p>$$12x + 18 = 378$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation: $$12x + 18 = 378$$ to find the number of marbles, $x$, in each bag.",
    "options": [
      "$$x = 30$$",
      "$$x = 32$$",
      "$$x = 25$$",
      "$$x = 28$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's solve step-by-step:</p><p>$$12x + 18 = 378$$</p><p>Subtract 18 from both sides:</p><p>$$12x = 378 - 18$$</p><p>$$12x = 360$$</p><p>Divide both sides by 12:</p><p>$$x = \\frac{360}{12} = 30$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "A school runs vans, each of which carries $n$ students. There are eight vans and they hold a total of 96 students. Write an equation representing this statement.",
    "options": [
      "$$8n = 96$$",
      "$$\\frac{n}{8} = 96$$",
      "$$n + 8 = 96$$",
      "$$8 + n = 96$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Translating to algebra:</p><ul><li>\"eight vans each carrying $n$ students\" $implies 8n$ students.</li><li>\"Total capacity is 96 students\" $implies = 96$.</li></ul><p>Therefore, the equation is:</p><p>$$8n = 96$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation: $$8n = 96$$ to find the number of students, $n$, in each van.",
    "options": [
      "$$n = 12$$",
      "$$n = 14$$",
      "$$n = 10$$",
      "$$n = 16$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solve the simple multiplication equation:</p><p>$$8n = 96$$</p><p>Divide both sides by 8:</p><p>$$n = \\frac{96}{8} = 12$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Oliver has seven packets of chocolates, each of which holds $c$ chocolates. He also has nine chocolates that are not in a packet. He has a total of 149 chocolates. Write an equation representing this statement.",
    "options": [
      "$$7c + 9 = 149$$",
      "$$9c + 7 = 149$$",
      "$$7c - 9 = 149$$",
      "$$7(c + 9) = 149$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Translating to algebra:</p><ul><li>\"seven packets each containing $c$ chocolates\" $implies 7c$ chocolates.</li><li>\"nine loose chocolates\" $implies +9$.</li><li>\"Total of 149 chocolates\" $implies = 149$.</li></ul><p>Therefore, the equation is:</p><p>$$7c + 9 = 149$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation: $$7c + 9 = 149$$ to find the number of chocolates, $c$, in each packet.",
    "options": [
      "$$c = 20$$",
      "$$c = 22$$",
      "$$c = 18$$",
      "$$c = 25$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's solve step-by-step:</p><p>$$7c + 9 = 149$$</p><p>Subtract 9 from both sides:</p><p>$$7c = 149 - 9$$</p><p>$$7c = 140$$</p><p>Divide both sides by 7:</p><p>$$c = \\frac{140}{7} = 20$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Lisa has 28 stickers and gives $x$ stickers to her sister. She counts the remaining stickers and discovers she now has 19. Write an equation representing this statement.",
    "options": [
      "$$28 - x = 19$$",
      "$$x - 28 = 19$$",
      "$$28 + x = 19$$",
      "$$19 - x = 28$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Translating to algebra:</p><ul><li>\"Lisa starts with 28 stickers\" $implies 28$.</li><li>\"gives $x$ stickers away\" $implies -x$.</li><li>\"has 19 remaining\" $implies = 19$.</li></ul><p>Therefore, the equation is:</p><p>$$28 - x = 19$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Solve the equation: $$28 - x = 19$$ to find the number of stickers, $x$, Lisa gave to her sister.",
    "options": [
      "$$x = 9$$",
      "$$x = 7$$",
      "$$x = 8$$",
      "$$x = 10$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's solve step-by-step:</p><p>$$28 - x = 19$$</p><p>Add $x$ to both sides:</p><p>$$28 = 19 + x$$</p><p>Subtract 19 from both sides:</p><p>$$x = 28 - 19$$</p><p>$$x = 9$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "If $y = 4x$, what is the value of $x$ when $y = 48$?",
    "options": [
      "$$x = 12$$",
      "$$x = 14$$",
      "$$x = 192$$",
      "$$x = 44$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>We substitute $y = 48$ into the formula $$y = 4x$$:</p><p>$$48 = 4x$$</p><p>Solve for $x$ by dividing both sides by 4:</p><p>$$x = \\frac{48}{4} = 12$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "If $y = 3x + 2$, what is the value of $x$ when $y = 26$?",
    "options": [
      "$$x = 8$$",
      "$$x = 6$$",
      "$$x = 9$$",
      "$$x = 10$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Substitute $y = 26$ into the formula $$y = 3x + 2$$:</p><p>$$26 = 3x + 2$$</p><p>Subtract 2 from both sides:</p><p>$$26 - 2 = 3x$$</p><p>$$24 = 3x$$</p><p>Divide both sides by 3:</p><p>$$x = \\frac{24}{3} = 8$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  },
  {
    "chapterId": "y7-15",
    "chapterTitle": "Chapter 15: Equations",
    "topicId": "y7-15a",
    "topicCode": "15A",
    "topicTitle": "An introduction to equations",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "If $y = x - 7$, what is the value of $x$ when $y = 25$?",
    "options": [
      "$$x = 32$$",
      "$$x = 18$$",
      "$$x = 28$$",
      "$$x = 35$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Substitute $y = 25$ into the formula $$y = x - 7$$:</p><p>$$25 = x - 7$$</p><p>Add 7 to both sides to solve for $x$:</p><p>$$x = 25 + 7 = 32$$</p></div>",
    "createdAt": "2026-05-17T13:42:42.996Z"
  }
];

export const importYear7Ch15A = async (forceReset = false) => {
  console.log('[Ch15A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch15 (15a to 15h) questions...');
      const topicsToDelete = ['y7-15a', 'y7-15b', 'y7-15c', 'y7-15d', 'y7-15e', 'y7-15f', 'y7-15g', 'y7-15h'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch15 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-15a', 'y7-15b', 'y7-15c', 'y7-15d', 'y7-15e', 'y7-15f', 'y7-15g', 'y7-15h'];
    for (const tId of topicsToCheck) {
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
      existingSnap.docs.forEach(doc => {
        existingQuestions.add(doc.data().question.trim());
      });
    }
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch15A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch15A Year 7 Import] ERROR:', error);
    return 0;
  }
};
