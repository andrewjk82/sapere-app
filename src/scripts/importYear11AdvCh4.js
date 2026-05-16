import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-4',
  chapterTitle: 'Chapter 4: Equations and inequations',
  year: 'Year 11',
  isManual: true
};

const allQuestions4A = [
  // --- FROM OLD importYear11Ch4A.js (27 questions) ---
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'easy', isManual: true,
    question: 'Choose the correct graph for: $x > 3$',
    options: [{text: 'Open circle at 3, arrow pointing right', imageUrl: ''}, {text: 'Solid circle at 3, arrow pointing right', imageUrl: ''}, {text: 'Open circle at 3, arrow pointing left', imageUrl: ''}, {text: 'Solid circle at 3, arrow pointing left', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Identify the inequality symbol. $x > 3$ means $x$ is greater than 3.\nStep 2: Use an **open circle** because 3 is not included ($>$).\nStep 3: Draw an arrow pointing to the **right** for greater than.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'easy', isManual: true,
    question: 'Choose the correct graph for: $y \\le 5$',
    options: [{text: 'Solid circle at 5, arrow pointing left', imageUrl: ''}, {text: 'Open circle at 5, arrow pointing left', imageUrl: ''}, {text: 'Solid circle at 5, arrow pointing right', imageUrl: ''}, {text: 'Open circle at 5, arrow pointing right', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Identify the inequality symbol. $y \\le 5$ means $y$ is less than or equal to 5.\nStep 2: Use a **solid (closed) circle** because 5 is included ($\\le$).\nStep 3: Draw an arrow pointing to the **left** for less than.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'easy', isManual: true,
    question: 'Choose the correct graph for: $k \\ge -2$',
    options: [{text: 'Solid circle at -2, arrow pointing right', imageUrl: ''}, {text: 'Open circle at -2, arrow pointing right', imageUrl: ''}, {text: 'Solid circle at -2, arrow pointing left', imageUrl: ''}, {text: 'Open circle at -2, arrow pointing left', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Identify the inequality symbol. $k \\ge -2$ means $k$ is greater than or equal to -2.\nStep 2: Use a **solid (closed) circle** because -2 is included ($\\ge$).\nStep 3: Draw an arrow pointing to the **right** for greater than.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Choose the correct graph for: $1 < x < 4$',
    options: [{text: 'Open circles at 1 and 4, line segment between them', imageUrl: ''}, {text: 'Solid circles at 1 and 4, line segment between them', imageUrl: ''}, {text: 'Open circle at 1, solid circle at 4, line segment between them', imageUrl: ''}, {text: 'Arrows pointing outwards from 1 and 4', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Identify the structure. $1 < x < 4$ is a double inequality meaning $x$ is between 1 and 4.\nStep 2: Use **open circles** at both 1 and 4 because they are not included ($<$).\nStep 3: Connect them with a **line segment**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Choose the correct graph for: $-3 < a \\le 2$',
    options: [{text: 'Open circle at -3, solid circle at 2, line segment between them', imageUrl: ''}, {text: 'Solid circle at -3, open circle at 2, line segment between them', imageUrl: ''}, {text: 'Open circles at -3 and 2, line segment between them', imageUrl: ''}, {text: 'Solid circles at -3 and 2, line segment between them', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Check the left boundary. Use an **open circle** at -3 ($>$).\nStep 2: Check the right boundary. Use a **solid circle** at 2 ($\\le$).\nStep 3: Connect them with a **line segment**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Choose the correct graph for: $-6 \\le x < 8$',
    options: [{text: 'Solid circle at -6, open circle at 8, line segment between them', imageUrl: ''}, {text: 'Open circle at -6, solid circle at 8, line segment between them', imageUrl: ''}, {text: 'Solid circles at -6 and 8, line segment between them', imageUrl: ''}, {text: 'Open circles at -6 and 8, line segment between them', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Check the left boundary. Use a **solid circle** at -6 ($\\ge$).\nStep 2: Check the right boundary. Use an **open circle** at 8 ($<$).\nStep 3: Connect them with a **line segment**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve and choose the graph: $x - 5 < 2$',
    options: [{text: '$x < 7$; Open circle at 7, arrow left', imageUrl: ''}, {text: '$x < 3$; Open circle at 3, arrow left', imageUrl: ''}, {text: '$x > 7$; Open circle at 7, arrow right', imageUrl: ''}, {text: '$x \\le 7$; Solid circle at 7, arrow left', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Add 5 to both sides to isolate $x$.\n$$x - 5 + 5 < 2 + 5$$\n$$x < 7$$\nStep 2: Use an **open circle** at 7 ($<$) and point the arrow to the **left**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve and choose the graph: $4y \\ge -12$',
    options: [{text: '$y \\ge -3$; Solid circle at -3, arrow right', imageUrl: ''}, {text: '$y \\le -3$; Solid circle at -3, arrow left', imageUrl: ''}, {text: '$y > -3$; Open circle at -3, arrow right', imageUrl: ''}, {text: '$y \\ge -48$; Solid circle at -48, arrow right', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Divide both sides by 4 to isolate $y$.\n$$\\frac{4y}{4} \\ge \\frac{-12}{4}$$\n$$y \\ge -3$$\nStep 2: Use a **solid circle** at -3 ($\\ge$) and point the arrow to the **right**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve and choose the graph: $2k + 6 > 16$',
    options: [{text: '$k > 5$; Open circle at 5, arrow right', imageUrl: ''}, {text: '$k < 5$; Open circle at 5, arrow left', imageUrl: ''}, {text: '$k \\ge 5$; Solid circle at 5, arrow right', imageUrl: ''}, {text: '$k > 11$; Open circle at 11, arrow right', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Subtract 6 from both sides.\n$$2k > 10$$\nStep 2: Divide by 2.\n$$k > 5$$\nStep 3: Use an **open circle** at 5 and point the arrow to the **right**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve and choose the graph: $5a - 4 \\le -14$',
    options: [{text: '$a \\le -2$; Solid circle at -2, arrow left', imageUrl: ''}, {text: '$a \\ge -2$; Solid circle at -2, arrow right', imageUrl: ''}, {text: '$a < -2$; Open circle at -2, arrow left', imageUrl: ''}, {text: '$a \\le -3.6$; Solid circle at -3.6, arrow left', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Add 4 to both sides.\n$$5a \\le -10$$\nStep 2: Divide by 5.\n$$a \\le -2$$\nStep 3: Use a **solid circle** at -2 and point the arrow to the **left**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $3x + 4 \\ge x + 10$',
    options: [{text: '$x \\ge 3$; Solid circle at 3, arrow right', imageUrl: ''}, {text: '$x \\le 3$; Solid circle at 3, arrow left', imageUrl: ''}, {text: '$x > 3$; Open circle at 3, arrow right', imageUrl: ''}, {text: '$x \\ge 7$; Solid circle at 7, arrow right', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Subtract $x$ from both sides to group variables.\n$$2x + 4 \\ge 10$$\nStep 2: Subtract 4 from both sides to isolate the constant.\n$$2x \\ge 6$$\nStep 3: Divide by 2.\n$$x \\ge 3$$\nStep 4: Use a **solid circle** at 3 and point the arrow to the **right**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $5b - 2 < 2b - 11$',
    options: [{text: '$b < -3$; Open circle at -3, arrow left', imageUrl: ''}, {text: '$b > -3$; Open circle at -3, arrow right', imageUrl: ''}, {text: '$b \\le -3$; Solid circle at -3, arrow left', imageUrl: ''}, {text: '$b < -4.3$; Open circle at -4.3, arrow left', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Subtract $2b$ from both sides.\n$$3b - 2 < -11$$\nStep 2: Add 2 to both sides.\n$$3b < -9$$\nStep 3: Divide by 3.\n$$b < -3$$\nStep 4: Use an **open circle** at -3 and point the arrow to the **left**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $x$: $-3x < 12$',
    options: [{text: '$x > -4$', imageUrl: ''}, {text: '$x < -4$', imageUrl: ''}, {text: '$x > 4$', imageUrl: ''}, {text: '$x < 4$', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Divide both sides by -3. \n**Crucial Rule:** When dividing or multiplying by a negative number, the inequality sign must be reversed.\n$$x > \\frac{12}{-3}$$\n$$x > -4$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $y$: $-4y \\ge -24$',
    options: [{text: '$y \\le 6$', imageUrl: ''}, {text: '$y \\ge 6$', imageUrl: ''}, {text: '$y \\le -6$', imageUrl: ''}, {text: '$y \\ge -6$', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Divide both sides by -4. Reverse the inequality sign.\n$$y \\le \\frac{-24}{-4}$$\n$$y \\le 6$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $a$: $-a \\le 4$',
    options: [{text: '$a \\ge -4$', imageUrl: ''}, {text: '$a \\le -4$', imageUrl: ''}, {text: '$a \\ge 4$', imageUrl: ''}, {text: '$a \\le 4$', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Multiply or divide both sides by -1 to isolate $a$. Remember to reverse the inequality sign.\n$$a \\ge -4$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $k$: $5 - 2k > 13$',
    options: [{text: '$k < -4$', imageUrl: ''}, {text: '$k > -4$', imageUrl: ''}, {text: '$k < 4$', imageUrl: ''}, {text: '$k > 4$', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Subtract 5 from both sides.\n$$-2k > 8$$\nStep 2: Divide by -2 and reverse the sign.\n$$k < \\frac{8}{-2}$$\n$$k < -4$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $m$: $12 - 4m < 4$',
    options: [{text: '$m > 2$', imageUrl: ''}, {text: '$m < 2$', imageUrl: ''}, {text: '$m > -2$', imageUrl: ''}, {text: '$m < -2$', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Subtract 12 from both sides.\n$$-4m < -8$$\nStep 2: Divide by -4 and reverse the sign.\n$$m > \\frac{-8}{-4}$$\n$$m > 2$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $z$: $-5 - z \\ge 2$',
    options: [{text: '$z \\le -7$', imageUrl: ''}, {text: '$z \\ge -7$', imageUrl: ''}, {text: '$z \\le 7$', imageUrl: ''}, {text: '$z \\ge 7$', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Add 5 to both sides.\n$$-z \\ge 7$$\nStep 2: Multiply by -1 and reverse the sign.\n$$z \\le -7$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve for $x$: $4 - x > 3x - 8$',
    options: [{text: '$x < 3$', imageUrl: ''}, {text: '$x > 3$', imageUrl: ''}, {text: '$x < -1$', imageUrl: ''}, {text: '$x > -1$', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Add $x$ to both sides.\n$$4 > 4x - 8$$\nStep 2: Add 8 to both sides.\n$$12 > 4x$$\nStep 3: Divide by 4.\n$$3 > x$$\nStep 4: Rewrite with $x$ on the left: $x < 3$.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve for $y$: $5 - 4y \\le 25 + y$',
    options: [{text: '$y \\ge -4$', imageUrl: ''}, {text: '$y \\le -4$', imageUrl: ''}, {text: '$y \\ge 4$', imageUrl: ''}, {text: '$y \\le 4$', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Add $4y$ to both sides.\n$$5 \\le 25 + 5y$$\nStep 2: Subtract 25 from both sides.\n$$-20 \\le 5y$$\nStep 3: Divide by 5.\n$$-4 \\le y$$\nStep 4: Rewrite as $y \\ge -4$.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve for $k$: $15 - 8k > -3k - 10$',
    options: [{text: '$k < 5$', imageUrl: ''}, {text: '$k > 5$', imageUrl: ''}, {text: '$k < -5$', imageUrl: ''}, {text: '$k > -5$', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Add $8k$ to both sides.\n$$15 > 5k - 10$$\nStep 2: Add 10 to both sides.\n$$25 > 5k$$\nStep 3: Divide by 5.\n$$5 > k$$\nStep 4: Rewrite as $k < 5$.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $4 < x + 3 < 8$',
    options: [{text: '$1 < x < 5$; Open circles at 1 and 5, segment between', imageUrl: ''}, {text: '$1 \\le x \\le 5$; Solid circles at 1 and 5, segment between', imageUrl: ''}, {text: '$7 < x < 11$; Open circles at 7 and 11, segment between', imageUrl: ''}, {text: '$1 < x < 5$; Arrows pointing outwards from 1 and 5', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Subtract 3 from all three parts of the inequality.\n$$4 - 3 < x + 3 - 3 < 8 - 3$$\n$$1 < x < 5$$\nStep 2: Use **open circles** at 1 and 5 and connect them with a **line segment**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-6 < y - 4 \\le 3$',
    options: [{text: '$-2 < y \\le 7$; Open at -2, solid at 7, segment between', imageUrl: ''}, {text: '$-10 < y \\le -1$; Open at -10, solid at -1, segment between', imageUrl: ''}, {text: '$-2 \\le y < 7$; Solid at -2, open at 7, segment between', imageUrl: ''}, {text: '$-2 < y < 7$; Open circles at both, segment between', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Add 4 to all parts to isolate $y$.\n$$-6 + 4 < y - 4 + 4 \\le 3 + 4$$\n$$-2 < y \\le 7$$\nStep 2: Graphing: Open circle at -2, solid circle at 7, and a segment between them.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-10 \\le 5a < 15$',
    options: [{text: '$-2 \\le a < 3$; Solid at -2, open at 3, segment between', imageUrl: ''}, {text: '$-50 \\le a < 75$; Solid at -50, open at 75, segment between', imageUrl: ''}, {text: '$-2 < a \\le 3$; Open at -2, solid at 3, segment between', imageUrl: ''}, {text: '$-2 \\le a \\le 3$; Solid circles at both, segment between', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Divide all parts by 5.\n$$\\frac{-10}{5} \\le \\frac{5a}{5} < \\frac{15}{5}$$\n$$-2 \\le a < 3$$\nStep 2: Graphing: Solid circle at -2, open circle at 3, segment between them.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-3 \\le 3x \\le 6$',
    options: [{text: '$-1 \\le x \\le 2$; Solid circles at -1 and 2, segment between', imageUrl: ''}, {text: '$-1 < x < 2$; Open circles at -1 and 2, segment between', imageUrl: ''}, {text: '$-9 \\le x \\le 18$; Solid circles at -9 and 18, segment between', imageUrl: ''}, {text: '$-1 \\le x \\le 2$; Arrows pointing outwards', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Divide all parts by 3.\n$$-1 \\le x \\le 2$$\nStep 2: Use **solid circles** at both boundaries and connect them.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-8 < 4k - 4 < 8$',
    options: [{text: '$-1 < k < 3$; Open circles at -1 and 3, segment between', imageUrl: ''}, {text: '$-3 < k < 1$; Open circles at -3 and 1, segment between', imageUrl: ''}, {text: '$-1 \\le k \\le 3$; Solid circles at -1 and 3, segment between', imageUrl: ''}, {text: '$-4 < k < 12$; Open circles at -4 and 12, segment between', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Add 4 to all parts.\n$$-4 < 4k < 12$$\nStep 2: Divide all parts by 4.\n$$-1 < k < 3$$\nStep 3: Use **open circles** at -1 and 3 and connect them with a segment.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-9 < 3b + 6 \\le 9$',
    options: [{text: '$-5 < b \\le 1$; Open at -5, solid at 1, segment between', imageUrl: ''}, {text: '$-1 < b \\le 5$; Open at -1, solid at 5, segment between', imageUrl: ''}, {text: '$-5 \\le b < 1$; Solid at -5, open at 1, segment between', imageUrl: ''}, {text: '$-15 < b \\le 3$; Open at -15, solid at 3, segment between', imageUrl: ''}],
    answer: '0',
    solution: 'Step 1: Subtract 6 from all parts.\n$$-15 < 3b \\le 3$$\nStep 2: Divide all parts by 3.\n$$-5 < b \\le 1$$\nStep 3: Open circle at -5, solid circle at 1, connect them.'
  },

  // --- NEW 21 EASY QUESTIONS ---
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
  console.log(`Starting full sync of Y11 Adv Ch4 (Total ${allQuestions4A.length})...`);
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
