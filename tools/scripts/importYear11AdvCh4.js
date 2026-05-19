import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-4',
  chapterTitle: 'Chapter 4: Equations and inequations',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

const allQuestions4A = [
  // --- EXISTING EASY QUESTIONS (Merged 48 questions) ---
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
  },

  // --- NEW MEDIUM QUESTIONS (Q4 - Q15) ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve the double inequation and choose the correct solution set: $$4 < x + 3 < 9$$',
    options: [{ text: '$1 < x < 6$', imageUrl: '' }, { text: '$4 < x < 9$', imageUrl: '' }, { text: '$1 \\le x \\le 6$', imageUrl: '' }, { text: '$7 < x < 12$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Subtract 3 from all parts of the inequality.\n$$4 - 3 < x + 3 - 3 < 9 - 3$$\nStep 2: Simplify:\n$$1 < x < 6$$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve the double inequation: $$-6 < y - 4 \\le 5$$',
    options: [{ text: '$-2 < y \\le 9$', imageUrl: '' }, { text: '$-10 < y \\le 1$', imageUrl: '' }, { text: '$-2 \\le y < 9$', imageUrl: '' }, { text: '$-2 < y < 9$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Add 4 to all parts to isolate $y$.\n$$-6 + 4 < y - 4 + 4 \\le 5 + 4$$\nStep 2: Simplify:\n$$-2 < y \\le 9$$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve: $$-10 \\le 5a < 15$$',
    options: [{ text: '$-2 \\le a < 3$', imageUrl: '' }, { text: '$-2 < a \\le 3$', imageUrl: '' }, { text: '$-50 \\le a < 75$', imageUrl: '' }, { text: '$-2 \\le a \\le 3$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Divide all parts by 5 to isolate $a$.\n$$\\frac{-10}{5} \\le \\frac{5a}{5} < \\frac{15}{5}$$\nStep 2: Simplify:\n$$-2 \\le a < 3$$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve: $$-2 \\le 3k \\le 4$$',
    options: [{ text: '$-\\frac{2}{3} \\le k \\le \\frac{4}{3}$', imageUrl: '' }, { text: '$-6 \\le k \\le 12$', imageUrl: '' }, { text: '$-\\frac{2}{3} < k < \\frac{4}{3}$', imageUrl: '' }, { text: '$k \\le \\frac{4}{3}$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Divide all parts by 3 to isolate $k$.\n$$-\\frac{2}{3} \\le k \\le \\frac{4}{3}$$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve: $$-11 < 4m - 1 < 5$$',
    options: [{ text: '$-2.5 < m < 1.5$', imageUrl: '' }, { text: '$-3 < m < 1$', imageUrl: '' }, { text: '$-2.5 \\le m \\le 1.5$', imageUrl: '' }, { text: '$-3 < m < 1.5$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Add 1 to all parts.\n$$-10 < 4m < 6$$\nStep 2: Divide by 4.\n$$-2.5 < m < 1.5$$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve: $$-8 < 6x + 4 \\le 10$$',
    options: [{ text: '$-2 < x \\le 1$', imageUrl: '' }, { text: '$-12 < x \\le 6$', imageUrl: '' }, { text: '$-2 \\le x < 1$', imageUrl: '' }, { text: '$-1 < x \\le 2$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Subtract 4 from all parts.\n$$-12 < 6x \\le 6$$\nStep 2: Divide by 6.\n$$-2 < x \\le 1$$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve and write in interval notation: $$-6 < -3x < 12$$',
    options: [{ text: '$(-4, 2)$', imageUrl: '' }, { text: '$[-4, 2]$', imageUrl: '' }, { text: '$(2, -4)$', imageUrl: '' }, { text: '$(-4, 2]$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Divide by -3 and reverse signs.\n$$\\frac{-6}{-3} > x > \\frac{12}{-3} \\implies 2 > x > -4$$\nStep 2: Rewrite in order: $-4 < x < 2$. Result: $(-4, 2)$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve and express in interval notation: $$-3 \\le -x \\le 2$$',
    options: [{ text: '$[-2, 3]$', imageUrl: '' }, { text: '$(-2, 3)$', imageUrl: '' }, { text: '$[-3, 2]$', imageUrl: '' }, { text: '$[-2, 3)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Multiply by -1 and reverse signs.\n$$3 \\ge x \\ge -2 \\implies -2 \\le x \\le 3$$. Result: $[-2, 3]$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve and express in interval notation: $$-8 \\le 7 - 5x < 2$$',
    options: [{ text: '$(1, 3]$', imageUrl: '' }, { text: '$[1, 3)$', imageUrl: '' }, { text: '$(1, 3)$', imageUrl: '' }, { text: '$(-15, -5)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Subtract 7: $-15 \\le -5x < -5$\nStep 2: Divide by -5 and reverse signs: $3 \\ge x > 1$. Result: $(1, 3]$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve and express in interval notation: $$-5 < 2 - \\frac{1}{4}x \\le 1$$',
    options: [{ text: '$[4, 28)$', imageUrl: '' }, { text: '$(4, 28]$', imageUrl: '' }, { text: '$[1, 7)$', imageUrl: '' }, { text: '$(-28, -4]$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Subtract 2: $-7 < -\\frac{1}{4}x \\le -1$\nStep 2: Multiply by -4 and reverse signs: $28 > x \\ge 4$. Result: $[4, 28)$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve and express in interval notation: $$\\frac{x}{4} < 2 + \\frac{x}{3}$$',
    options: [{ text: '$(-24, \\infty)$', imageUrl: '' }, { text: '$(-\\infty, -24)$', imageUrl: '' }, { text: '$(24, \\infty)$', imageUrl: '' }, { text: '$(-8, \\infty)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Multiply by 12: $3x < 24 + 4x$\nStep 2: Solve: $-x < 24 \\implies x > -24$. Result: $(-24, \\infty)$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve: $$\\frac{1}{5}y \\ge \\frac{2}{5}y - 2$$',
    options: [{ text: '$(-\\infty, 10]$', imageUrl: '' }, { text: '$[10, \\infty)$', imageUrl: '' }, { text: '$(-\\infty, -10]$', imageUrl: '' }, { text: '$[-10, 10]$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Multiply by 5: $y \\ge 2y - 10$\nStep 2: Solve: $-y \\ge -10 \\implies y \\le 10$. Result: $(-\\infty, 10]$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve: $$\\frac{3x-2}{4} \\ge \\frac{x+2}{5} - 1$$',
    options: [{ text: '$x \\ge -\\frac{2}{11}$', imageUrl: '' }, { text: '$x \\ge \\frac{1}{2}$', imageUrl: '' }, { text: '$x \\le -\\frac{2}{11}$', imageUrl: '' }, { text: '$x \\ge 0$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Multiply by 20: $5(3x - 2) \\ge 4(x + 2) - 20$\nStep 2: Expand: $15x - 10 \\ge 4x + 8 - 20 \\implies 15x - 10 \\ge 4x - 12$\nStep 3: Solve: $11x \\ge -2 \\implies x \\ge -\\frac{2}{11}$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve: $$\\frac{1}{8}(3 - x) - \\frac{1}{4}(3 + x) > 1$$',
    options: [{ text: '$x < -\\frac{11}{3}$', imageUrl: '' }, { text: '$x > -\\frac{11}{3}$', imageUrl: '' }, { text: '$x < 1$', imageUrl: '' }, { text: '$x < -5$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Multiply by 8: $(3 - x) - 2(3 + x) > 8$\nStep 2: Expand: $3 - x - 6 - 2x > 8 \\implies -3x - 3 > 8$\nStep 3: Solve: $-3x > 11 \\implies x < -\\frac{11}{3}$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'For $y = 8 - 4x$, for what values of $x$ is $8 - 4x > 0$?',
    options: [{ text: '$x < 2$', imageUrl: '' }, { text: '$x > 2$', imageUrl: '' }, { text: '$x < 8$', imageUrl: '' }, { text: '$x > 0$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Algebraic check: $8 - 4x > 0 \\implies -4x > -8 \\implies x < 2$.'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Part (a): Consider $y = 3x - 6$. (i) Find the x-intercept. (ii) Solve $3x - 6 \\ge 0$.',
    options: [{ text: '(i) $x=2$; (ii) $x \\ge 2$', imageUrl: '' }, { text: '(i) $x=-6$; (ii) $x \\le 2$', imageUrl: '' }, { text: '(i) $x=2$; (ii) $x \\le 2$', imageUrl: '' }, { text: '(i) $x=6$; (ii) $x \\ge 2$' }],
    answer: "0",
    solution: 'Step 1: $0 = 3x - 6 \\implies x = 2$.\nStep 2: Line is increasing (slope 3), so it is $\\ge 0$ for $x \\ge 2$.'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Part (b): For $y = 3x - 2$ and $y = 4 - x$, (i) find the intersection and (ii) solve $3x - 2 < 4 - x$.',
    options: [{ text: '(i) $x=1.5$; (ii) $x < 1.5$', imageUrl: '' }, { text: '(i) $x=1.5$; (ii) $x > 1.5$', imageUrl: '' }, { text: '(i) $x=1$; (ii) $x < 1$', imageUrl: '' }, { text: '(i) $x=2$; (ii) $x < 2$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: $3x - 2 = 4 - x \\implies 4x = 6 \\implies x = 1.5$.\nStep 2: Line 1 is increasing, Line 2 is decreasing. Line 1 < Line 2 for $x < 1.5$.'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'short_answer',
    question: 'Find the values of $x$ for which $4x - 5$ is below the line $10 - x$.',
    answer: 'x < 3',
    solution: 'Step 1: $4x - 5 < 10 - x \\implies 5x < 15 \\implies x < 3$.'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Investment of $150,000 earns $750/month interest. (i) Equation for balance B at month n. (ii) Last month n for $B \\le 156,000$. (iii) First month n for $B > 162,000$.',
    options: [{ text: '(i) $B = 150000 + 750n$; (ii) n=8; (iii) n=17', imageUrl: '' }, { text: '(i) $B = 150000 + 750(n-1)$; (ii) n=9; (iii) n=17', imageUrl: '' }, { text: '(i) $B = 150000 + 750n$; (ii) n=8; (iii) n=16', imageUrl: '' }, { text: '(i) $B = 750n$; (ii) n=200; (iii) n=216' }],
    answer: "0",
    solution: 'Step 1: (i) $B = 150000 + 750n$. (ii) $150000 + 750n \\le 156000 \\implies 750n \\le 6000 \\implies n=8$. (iii) $150000 + 750n > 162000 \\implies 750n > 12000 \\implies n > 16 \\implies n=17$.'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'short_answer',
    question: 'Call-out fee $250 plus $60/light. Budget $800. Max lights?',
    answer: '9',
    solution: 'Step 1: $250 + 60n \\le 800 \\implies 60n \\le 550 \\implies n \\le 9.16$. Max lights = 9.'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'short_answer',
    question: '31 members voted. Votes for Jack (x) > 2 * votes for Jill (y). Min votes for Jack?',
    answer: '21',
    solution: 'Step 1: $x + y = 31 \\implies y = 31 - x$. Step 2: $x > 2(31 - x) \\implies x > 62 - 2x \\implies 3x > 62 \\implies x > 20.66$. Min = 21.'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Business: Fixed $1200, variable $40/item, price $70/item. (i) Break-even. (ii) Min items to cover $500 loss. (iii) Items for $1500 profit.',
    options: [{ text: '(i) 40 items; (ii) 24 items; (iii) 90 items', imageUrl: '' }, { text: '(i) 40 items; (ii) 23 items; (iii) 90 items', imageUrl: '' }, { text: '(i) 30 items; (ii) 17 items; (iii) 60 items', imageUrl: '' }, { text: '(i) 40 items; (ii) 24 items; (iii) 50 items' }],
    answer: "0",
    solution: 'Step 1: Profit $P = 70n - (1200 + 40n) = 30n - 1200$. (i) $P=0 \\implies n=40$. (ii) $P \\ge -500 \\implies 30n \\ge 700 \\implies n \\ge 23.3 \\implies 24$. (iii) $P \ge 1500 \\implies 30n \\ge 2700 \\implies n=90$.'
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
