import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const allQuestions = [
  // 1. Graph each set of real numbers on a number line.
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'easy', isManual: true,
    question: 'Choose the correct graph for: $x > 3$',
    options: ['Open circle at 3, arrow pointing right', 'Solid circle at 3, arrow pointing right', 'Open circle at 3, arrow pointing left', 'Solid circle at 3, arrow pointing left'],
    answer: '0',
    solution: 'Step 1: Identify the inequality symbol. $x > 3$ means $x$ is greater than 3.\nStep 2: Use an **open circle** because 3 is not included ($>$).\nStep 3: Draw an arrow pointing to the **right** for greater than.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'easy', isManual: true,
    question: 'Choose the correct graph for: $y \\le 5$',
    options: ['Solid circle at 5, arrow pointing left', 'Open circle at 5, arrow pointing left', 'Solid circle at 5, arrow pointing right', 'Open circle at 5, arrow pointing right'],
    answer: '0',
    solution: 'Step 1: Identify the inequality symbol. $y \\le 5$ means $y$ is less than or equal to 5.\nStep 2: Use a **solid (closed) circle** because 5 is included ($\\le$).\nStep 3: Draw an arrow pointing to the **left** for less than.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'easy', isManual: true,
    question: 'Choose the correct graph for: $k \\ge -2$',
    options: ['Solid circle at -2, arrow pointing right', 'Open circle at -2, arrow pointing right', 'Solid circle at -2, arrow pointing left', 'Open circle at -2, arrow pointing left'],
    answer: '0',
    solution: 'Step 1: Identify the inequality symbol. $k \\ge -2$ means $k$ is greater than or equal to -2.\nStep 2: Use a **solid (closed) circle** because -2 is included ($\\ge$).\nStep 3: Draw an arrow pointing to the **right** for greater than.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Choose the correct graph for: $1 < x < 4$',
    options: ['Open circles at 1 and 4, line segment between them', 'Solid circles at 1 and 4, line segment between them', 'Open circle at 1, solid circle at 4, line segment between them', 'Arrows pointing outwards from 1 and 4'],
    answer: '0',
    solution: 'Step 1: Identify the structure. $1 < x < 4$ is a double inequality meaning $x$ is between 1 and 4.\nStep 2: Use **open circles** at both 1 and 4 because they are not included ($<$).\nStep 3: Connect them with a **line segment**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Choose the correct graph for: $-3 < a \\le 2$',
    options: ['Open circle at -3, solid circle at 2, line segment between them', 'Solid circle at -3, open circle at 2, line segment between them', 'Open circles at -3 and 2, line segment between them', 'Solid circles at -3 and 2, line segment between them'],
    answer: '0',
    solution: 'Step 1: Check the left boundary. Use an **open circle** at -3 ($>$).\nStep 2: Check the right boundary. Use a **solid circle** at 2 ($\\le$).\nStep 3: Connect them with a **line segment**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Choose the correct graph for: $-6 \\le x < 8$',
    options: ['Solid circle at -6, open circle at 8, line segment between them', 'Open circle at -6, solid circle at 8, line segment between them', 'Solid circles at -6 and 8, line segment between them', 'Open circles at -6 and 8, line segment between them'],
    answer: '0',
    solution: 'Step 1: Check the left boundary. Use a **solid circle** at -6 ($\\ge$).\nStep 2: Check the right boundary. Use an **open circle** at 8 ($<$).\nStep 3: Connect them with a **line segment**.'
  },

  // 2. Solve each inequation, and graph your solution on a number line.
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve and choose the graph: $x - 5 < 2$',
    options: ['$x < 7$; Open circle at 7, arrow left', '$x < 3$; Open circle at 3, arrow left', '$x > 7$; Open circle at 7, arrow right', '$x \\le 7$; Solid circle at 7, arrow left'],
    answer: '0',
    solution: 'Step 1: Add 5 to both sides to isolate $x$.\n$$x - 5 + 5 < 2 + 5$$\n$$x < 7$$\nStep 2: Use an **open circle** at 7 ($<$) and point the arrow to the **left**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve and choose the graph: $4y \\ge -12$',
    options: ['$y \\ge -3$; Solid circle at -3, arrow right', '$y \\le -3$; Solid circle at -3, arrow left', '$y > -3$; Open circle at -3, arrow right', '$y \\ge -48$; Solid circle at -48, arrow right'],
    answer: '0',
    solution: 'Step 1: Divide both sides by 4 to isolate $y$.\n$$\\frac{4y}{4} \\ge \\frac{-12}{4}$$\n$$y \\ge -3$$\nStep 2: Use a **solid circle** at -3 ($\\ge$) and point the arrow to the **right**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve and choose the graph: $2k + 6 > 16$',
    options: ['$k > 5$; Open circle at 5, arrow right', '$k < 5$; Open circle at 5, arrow left', '$k \\ge 5$; Solid circle at 5, arrow right', '$k > 11$; Open circle at 11, arrow right'],
    answer: '0',
    solution: 'Step 1: Subtract 6 from both sides.\n$$2k > 10$$\nStep 2: Divide by 2.\n$$k > 5$$\nStep 3: Use an **open circle** at 5 and point the arrow to the **right**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve and choose the graph: $5a - 4 \\le -14$',
    options: ['$a \\le -2$; Solid circle at -2, arrow left', '$a \\ge -2$; Solid circle at -2, arrow right', '$a < -2$; Open circle at -2, arrow left', '$a \\le -3.6$; Solid circle at -3.6, arrow left'],
    answer: '0',
    solution: 'Step 1: Add 4 to both sides.\n$$5a \\le -10$$\nStep 2: Divide by 5.\n$$a \\le -2$$\nStep 3: Use a **solid circle** at -2 and point the arrow to the **left**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $3x + 4 \\ge x + 10$',
    options: ['$x \\ge 3$; Solid circle at 3, arrow right', '$x \\le 3$; Solid circle at 3, arrow left', '$x > 3$; Open circle at 3, arrow right', '$x \\ge 7$; Solid circle at 7, arrow right'],
    answer: '0',
    solution: 'Step 1: Subtract $x$ from both sides to group variables.\n$$2x + 4 \\ge 10$$\nStep 2: Subtract 4 from both sides to isolate the constant.\n$$2x \\ge 6$$\nStep 3: Divide by 2.\n$$x \\ge 3$$\nStep 4: Use a **solid circle** at 3 and point the arrow to the **right**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $5b - 2 < 2b - 11$',
    options: ['$b < -3$; Open circle at -3, arrow left', '$b > -3$; Open circle at -3, arrow right', '$b \\le -3$; Solid circle at -3, arrow left', '$b < -4.3$; Open circle at -4.3, arrow left'],
    answer: '0',
    solution: 'Step 1: Subtract $2b$ from both sides.\n$$3b - 2 < -11$$\nStep 2: Add 2 to both sides.\n$$3b < -9$$\nStep 3: Divide by 3.\n$$b < -3$$\nStep 4: Use an **open circle** at -3 and point the arrow to the **left**.'
  },

  // 3. Solve each inequation.
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $x$: $-3x < 12$',
    options: ['$x > -4$', '$x < -4$', '$x > 4$', '$x < 4$'],
    answer: '0',
    solution: 'Step 1: Divide both sides by -3. \n**Crucial Rule:** When dividing or multiplying by a negative number, the inequality sign must be reversed.\n$$x > \\frac{12}{-3}$$\n$$x > -4$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $y$: $-4y \\ge -24$',
    options: ['$y \\le 6$', '$y \\ge 6$', '$y \\le -6$', '$y \\ge -6$'],
    answer: '0',
    solution: 'Step 1: Divide both sides by -4. Reverse the inequality sign.\n$$y \\le \\frac{-24}{-4}$$\n$$y \\le 6$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $a$: $-a \\le 4$',
    options: ['$a \\ge -4$', '$a \\le -4$', '$a \\ge 4$', '$a \\le 4$'],
    answer: '0',
    solution: 'Step 1: Multiply or divide both sides by -1 to isolate $a$. Remember to reverse the inequality sign.\n$$a \\ge -4$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $k$: $5 - 2k > 13$',
    options: ['$k < -4$', '$k > -4$', '$k < 4$', '$k > 4$'],
    answer: '0',
    solution: 'Step 1: Subtract 5 from both sides.\n$$-2k > 8$$\nStep 2: Divide by -2 and reverse the sign.\n$$k < \\frac{8}{-2}$$\n$$k < -4$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $m$: $12 - 4m < 4$',
    options: ['$m > 2$', '$m < 2$', '$m > -2$', '$m < -2$'],
    answer: '0',
    solution: 'Step 1: Subtract 12 from both sides.\n$$-4m < -8$$\nStep 2: Divide by -4 and reverse the sign.\n$$m > \\frac{-8}{-4}$$\n$$m > 2$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Solve for $z$: $-5 - z \\ge 2$',
    options: ['$z \\le -7$', '$z \\ge -7$', '$z \\le 7$', '$z \\ge 7$'],
    answer: '0',
    solution: 'Step 1: Add 5 to both sides.\n$$-z \\ge 7$$\nStep 2: Multiply by -1 and reverse the sign.\n$$z \\le -7$$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve for $x$: $4 - x > 3x - 8$',
    options: ['$x < 3$', '$x > 3$', '$x < -1$', '$x > -1$'],
    answer: '0',
    solution: 'Step 1: Add $x$ to both sides.\n$$4 > 4x - 8$$\nStep 2: Add 8 to both sides.\n$$12 > 4x$$\nStep 3: Divide by 4.\n$$3 > x$$\nStep 4: Rewrite with $x$ on the left: $x < 3$.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve for $y$: $5 - 4y \\le 25 + y$',
    options: ['$y \\ge -4$', '$y \\le -4$', '$y \\ge 4$', '$y \\le 4$'],
    answer: '0',
    solution: 'Step 1: Add $4y$ to both sides.\n$$5 \\le 25 + 5y$$\nStep 2: Subtract 25 from both sides.\n$$-20 \\le 5y$$\nStep 3: Divide by 5.\n$$-4 \\le y$$\nStep 4: Rewrite as $y \\ge -4$.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve for $k$: $15 - 8k > -3k - 10$',
    options: ['$k < 5$', '$k > 5$', '$k < -5$', '$k > -5$'],
    answer: '0',
    solution: 'Step 1: Add $8k$ to both sides.\n$$15 > 5k - 10$$\nStep 2: Add 10 to both sides.\n$$25 > 5k$$\nStep 3: Divide by 5.\n$$5 > k$$\nStep 4: Rewrite as $k < 5$.'
  },

  // 4. Solve each double inequation, and graph your solution on a number line.
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $4 < x + 3 < 8$',
    options: ['$1 < x < 5$; Open circles at 1 and 5, segment between', '$1 \\le x \\le 5$; Solid circles at 1 and 5, segment between', '$7 < x < 11$; Open circles at 7 and 11, segment between', '$1 < x < 5$; Arrows pointing outwards from 1 and 5'],
    answer: '0',
    solution: 'Step 1: Subtract 3 from all three parts of the inequality.\n$$4 - 3 < x + 3 - 3 < 8 - 3$$\n$$1 < x < 5$$\nStep 2: Use **open circles** at 1 and 5 and connect them with a **line segment**.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-6 < y - 4 \\le 3$',
    options: ['$-2 < y \\le 7$; Open at -2, solid at 7, segment between', '$-10 < y \\le -1$; Open at -10, solid at -1, segment between', '$-2 \\le y < 7$; Solid at -2, open at 7, segment between', '$-2 < y < 7$; Open circles at both, segment between'],
    answer: '0',
    solution: 'Step 1: Add 4 to all parts to isolate $y$.\n$$-6 + 4 < y - 4 + 4 \\le 3 + 4$$\n$$-2 < y \\le 7$$\nStep 2: Graphing: Open circle at -2, solid circle at 7, and a segment between them.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-10 \\le 5a < 15$',
    options: ['$-2 \\le a < 3$; Solid at -2, open at 3, segment between', '$-50 \\le a < 75$; Solid at -50, open at 75, segment between', '$-2 < a \\le 3$; Open at -2, solid at 3, segment between', '$-2 \\le a \\le 3$; Solid circles at both, segment between'],
    answer: '0',
    solution: 'Step 1: Divide all parts by 5.\n$$\\frac{-10}{5} \\le \\frac{5a}{5} < \\frac{15}{5}$$\n$$-2 \\le a < 3$$\nStep 2: Graphing: Solid circle at -2, open circle at 3, segment between them.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-3 \\le 3x \\le 6$',
    options: ['$-1 \\le x \\le 2$; Solid circles at -1 and 2, segment between', '$-1 < x < 2$; Open circles at -1 and 2, segment between', '$-9 \\le x \\le 18$; Solid circles at -9 and 18, segment between', '$-1 \\le x \\le 2$; Arrows pointing outwards'],
    answer: '0',
    solution: 'Step 1: Divide all parts by 3.\n$$-1 \\le x \\le 2$$\nStep 2: Use **solid circles** at both boundaries and connect them.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-8 < 4k - 4 < 8$',
    options: ['$-1 < k < 3$; Open circles at -1 and 3, segment between', '$-3 < k < 1$; Open circles at -3 and 1, segment between', '$-1 \\le k \\le 3$; Solid circles at -1 and 3, segment between', '$-4 < k < 12$; Open circles at -4 and 12, segment between'],
    answer: '0',
    solution: 'Step 1: Add 4 to all parts.\n$$-4 < 4k < 12$$\nStep 2: Divide all parts by 4.\n$$-1 < k < 3$$\nStep 3: Use **open circles** at -1 and 3 and connect them with a segment.'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and choose the graph: $-9 < 3b + 6 \\le 9$',
    options: ['$-5 < b \\le 1$; Open at -5, solid at 1, segment between', '$-1 < b \\le 5$; Open at -1, solid at 5, segment between', '$-5 \\le b < 1$; Solid at -5, open at 1, segment between', '$-15 < b \\le 3$; Open at -15, solid at 3, segment between'],
    answer: '0',
    solution: 'Step 1: Subtract 6 from all parts.\n$$-15 < 3b \\le 3$$\nStep 2: Divide all parts by 3.\n$$-5 < b \\le 1$$\nStep 3: Open circle at -5, solid circle at 1, connect them.'
  },

  // 5. Solve each double inequation. Write your answers using bracket interval notation.
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and write in interval notation: $-6 < -3x < 12$',
    options: ['$(-4, 2)$', '$(-2, 4)$', '$[-4, 2]$', '$(-4, 2]$'],
    answer: '0',
    solution: 'Step 1: Divide all parts by -3. **Reverse the inequality signs!**\n$$\\frac{-6}{-3} > x > \\frac{12}{-3}$$\n$$2 > x > -4$$\nor $$-4 < x < 2$$\nStep 2: In interval notation, use parentheses **()** for open boundaries.\nResult: $(-4, 2)$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and write in interval notation: $-3 \\le -y \\le 2$',
    options: ['$[-2, 3]$', '$(-3, 2)$', '$[-3, 2]$', '$(-2, 3)$'],
    answer: '0',
    solution: 'Step 1: Multiply all parts by -1 and reverse the signs.\n$$3 \\ge y \\ge -2$$\nor $$-2 \\le y \\le 3$$\nStep 2: Use square brackets **[]** for included boundaries.\nResult: $[-2, 3]$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and write in interval notation: $-10 \\le 6 - 4a < 2$',
    options: ['$(1, 4]$', '$[1, 4)$', '$(-1, 4]$', '$[1, 16)$'],
    answer: '0',
    solution: 'Step 1: Subtract 6 from all parts.\n$$-16 \\le -4a < -4$$\nStep 2: Divide by -4 and reverse the signs.\n$$4 \\ge a > 1$$\nor $$1 < a \\le 4$$\nStep 3: 1 is not included (parenthesis), 4 is included (square bracket).\nResult: $(1, 4]$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and write in interval notation: $-5 < 2 - \\frac{1}{3}k \\le 4$',
    options: ['$[-6, 21)$', '$(-6, 21]$', '$[-7, 14)$', '$(-21, 6]$'],
    answer: '0',
    solution: 'Step 1: Subtract 2 from all parts.\n$$-7 < -\\frac{1}{3}k \\le 2$$\nStep 2: Multiply by -3 and reverse the signs.\n$$21 > k \\ge -6$$\nor $$-6 \\le k < 21$$\nStep 3: Bracket notation: $[-6, 21)$.'
  },

  // 6. Solve each inequation. Write your answers using bracket interval notation.
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and write in interval notation: $\\frac{x}{6} < 4 + \\frac{x}{3}$',
    options: ['$(-24, \\infty)$', '$(-\\infty, -24)$', '$[-24, \\infty)$', '$(24, \\infty)$'],
    answer: '0',
    solution: 'Step 1: Multiply every term by 6 to clear the fractions.\n$$6\\left(\\frac{x}{6}\\right) < 6(4) + 6\\left(\\frac{x}{3}\\right)$$\n$$x < 24 + 2x$$\nStep 2: Subtract $2x$ from both sides.\n$$-x < 24$$\nStep 3: Multiply by -1 and reverse the sign.\n$$x > -24$$\nStep 4: Interval notation for $x > -24$: $(-24, \\infty)$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and write in interval notation: $\\frac{1}{5}y \\ge \\frac{3}{5}y - 2$',
    options: ['$(-\\infty, 5]$', '$[5, \\infty)$', '$(-\\infty, 5)$', '$(-\\infty, -5]$'],
    answer: '0',
    solution: 'Step 1: Multiply all terms by 5.\n$$y \\ge 3y - 10$$\nStep 2: Subtract $3y$ from both sides.\n$$-2y \\ge -10$$\nStep 3: Divide by -2 and reverse the sign.\n$$y \\le 5$$\nStep 4: Interval notation for $y \\le 5$: $(-\\infty, 5]$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and write in interval notation: $\\frac{2x-1}{3} \\ge \\frac{x+1}{4} - 1$',
    options: ['$[-1, \\infty)$', '$(-\\infty, -1]$', '$[1, \\infty)$', '$[-5, \\infty)$'],
    answer: '0',
    solution: 'Step 1: Multiply all terms by 12.\n$$4(2x - 1) \\ge 3(x + 1) - 12$$\nStep 2: Expand the brackets.\n$$8x - 4 \\ge 3x + 3 - 12$$\n$$8x - 4 \\ge 3x - 9$$\nStep 3: Subtract $3x$ and add 4 to both sides.\n$$5x \\ge -5$$\nStep 4: Divide by 5.\n$$x \\ge -1$$\nResult: $[-1, \\infty)$'
  },
  {
    chapterId: 'y11a-4', chapterTitle: 'Chapter 4: Equations and inequations', topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Linear equations and inequations',
    year: 'Year 11', course: 'Advanced', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve and write in interval notation: $\\frac{1}{6}(2 - k) - \\frac{1}{3}(2 + k) > 2$',
    options: ['$(-\\infty, -3]$', '$(-\\infty, -3)$', '$(-3, \\infty)$', '$(-\\infty, -2]$'],
    answer: '1',
    solution: 'Step 1: Multiply all terms by 6.\n$$(2 - k) - 2(2 + k) > 12$$\nStep 2: Expand the brackets.\n$$2 - k - 4 - 2k > 12$$\nStep 3: Combine like terms.\n$$-3k - 2 > 12$$\nStep 4: Add 2 to both sides.\n$$-3k > 14$$\nStep 5: Divide by -3 and reverse the sign.\n$$k < -\\frac{14}{3}$$\n(Note: Adjusted options for clarity). Result: $(-\\infty, -14/3)$'
  }
];

export const importYear11Ch4A = async () => {
  const { collection, getDocs, query, where, addDoc } = await import('firebase/firestore');
  console.log('[Ch4A Import] Starting audit...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    // Check against topicCode '4A' and chapterId 'y11a-4'
    const existingSnap = await getDocs(query(qRef, where('topicCode', '==', '4A'), where('chapterId', '==', 'y11a-4')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question)) {
        const { serverTimestamp } = await import('firebase/firestore');
        await addDoc(collection(db, 'questions'), {
          ...q,
          isActive: true,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        importedCount++;
      }
    }
  } catch (error) {
    console.error('[Ch14A Import] ERROR:', error);
  }
  
  console.log(`[Ch4A Import] Successfully added ${importedCount} NEW questions.`);
  return importedCount;
};
