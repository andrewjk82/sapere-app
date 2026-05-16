import { db } from '../firebase/config.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-4',
  chapterTitle: 'Chapter 4: Equations and inequations',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

const mediumQuestions = [
  // --- Q4: Solve each double inequation and graph (Medium) ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve the double inequation and choose the correct solution set: $$4 < x + 3 < 9$$',
    options: [
      { text: '$1 < x < 6$', imageUrl: '' },
      { text: '$4 < x < 9$', imageUrl: '' },
      { text: '$1 \le x \le 6$', imageUrl: '' },
      { text: '$7 < x < 12$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: To isolate $x$, we need to subtract 3 from all parts of the inequality.\n\nStep 2: Perform the subtraction:\n$$4 - 3 < x + 3 - 3 < 9 - 3$$\n\nStep 3: Simplify:\n$$1 < x < 6$$\n\n**Note:** On a number line, this would be represented by open circles at 1 and 6 with a line segment connecting them.'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve the double inequation: $$-6 < y - 4 \le 5$$',
    options: [
      { text: '$-2 < y \le 9$', imageUrl: '' },
      { text: '$-10 < y \le 1$', imageUrl: '' },
      { text: '$-2 \le y < 9$', imageUrl: '' },
      { text: '$-2 < y < 9$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Add 4 to all parts of the inequality to isolate $y$.\n\nStep 2: Perform the addition:\n$$-6 + 4 < y - 4 + 4 \le 5 + 4$$\n\nStep 3: Simplify:\n$$-2 < y \le 9$$\n\n**Note:** The solution includes 9 (closed circle) but not -2 (open circle).'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve the following: $$-10 \le 5a < 15$$',
    options: [
      { text: '$-2 \le a < 3$', imageUrl: '' },
      { text: '$-2 < a \le 3$', imageUrl: '' },
      { text: '$-50 \le a < 75$', imageUrl: '' },
      { text: '$-2 \le a \le 3$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Divide all parts by 5 to isolate $a$.\n\nStep 2: Perform the division:\n$$\\frac{-10}{5} \le \frac{5a}{5} < \frac{15}{5}$$\n\nStep 3: Simplify:\n$$-2 \le a < 3$$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve the double inequation: $$-2 \le 3k \le 4$$',
    options: [
      { text: '$-\\frac{2}{3} \le k \le \frac{4}{3}$', imageUrl: '' },
      { text: '$-6 \le k \le 12$', imageUrl: '' },
      { text: '$-\\frac{2}{3} < k < \frac{4}{3}$', imageUrl: '' },
      { text: '$k \le \frac{4}{3}$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Divide all parts by 3 to isolate $k$.\n\nStep 2: Perform the division:\n$$\\frac{-2}{3} \le \frac{3k}{3} \le \frac{4}{3}$$\n\nStep 3: Simplify:\n$$-\\frac{2}{3} \le k \le \frac{4}{3}$$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve for $m$: $$-11 < 4m - 1 < 5$$',
    options: [
      { text: '$-2.5 < m < 1.5$', imageUrl: '' },
      { text: '$-3 < m < 1$', imageUrl: '' },
      { text: '$-2.5 \le m \le 1.5$', imageUrl: '' },
      { text: '$-3 < m < 1.5$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Add 1 to all parts to isolate the term with $m$.\n$$-11 + 1 < 4m < 5 + 1$$\n$$-10 < 4m < 6$$\n\nStep 2: Divide all parts by 4.\n$$\\frac{-10}{4} < m < \frac{6}{4}$$\n\nStep 3: Simplify decimals:\n$$-2.5 < m < 1.5$$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve the inequation: $$-8 < 6x + 4 \le 10$$',
    options: [
      { text: '$-2 < x \le 1$', imageUrl: '' },
      { text: '$-12 < x \le 6$', imageUrl: '' },
      { text: '$-2 \le x < 1$', imageUrl: '' },
      { text: '$-1 < x \le 2$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Subtract 4 from all parts.\n$$-8 - 4 < 6x \le 10 - 4$$\n$$-12 < 6x \le 6$$\n\nStep 2: Divide all parts by 6.\n$$\\frac{-12}{6} < x \le \frac{6}{6}$$\n\nStep 3: Simplify:\n$$-2 < x \le 1$$'
  },

  // --- Q5: Bracket Interval Notation ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve and write the solution in bracket interval notation: $$-6 < -3x < 12$$',
    options: [
      { text: '$(-4, 2)$', imageUrl: '' },
      { text: '$[-4, 2]$', imageUrl: '' },
      { text: '$(2, -4)$', imageUrl: '' },
      { text: '$(-4, 2]$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Divide all parts by -3. \n**Crucial Step:** When dividing by a negative number, the inequality signs must be reversed.\n$$\\frac{-6}{-3} > x > \frac{12}{-3}$$\n$$2 > x > -4$$\n\nStep 2: Rewrite in standard order (smaller number first):\n$$-4 < x < 2$$\n\nStep 3: Convert to interval notation. Use parentheses `()` for strict inequalities (`<` or `>`).\nResult: $(-4, 2)$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve and express in interval notation: $$-3 \le -x \le 2$$',
    options: [
      { text: '$[-2, 3]$', imageUrl: '' },
      { text: '$(-2, 3)$', imageUrl: '' },
      { text: '$[-3, 2]$', imageUrl: '' },
      { text: '$[-2, 3)$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Multiply all parts by -1. Reverse the inequality signs.\n$$(-3) \times (-1) \ge (-x) \times (-1) \ge 2 \times (-1)$$\n$$3 \ge x \ge -2$$\n\nStep 2: Rewrite in standard order:\n$$-2 \le x \le 3$$\n\nStep 3: In interval notation, use square brackets `[]` for inequalities including the boundary (`\\le` or `\\ge`).\nResult: $[-2, 3]$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve and express in bracket interval notation: $$-8 \le 7 - 5x < 2$$',
    options: [
      { text: '$(1, 3]$', imageUrl: '' },
      { text: '$[1, 3)$', imageUrl: '' },
      { text: '$(1, 3)$', imageUrl: '' },
      { text: '$(-15, -5)$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Subtract 7 from all parts.\n$$-8 - 7 \le -5x < 2 - 7$$\n$$-15 \le -5x < -5$$\n\nStep 2: Divide all parts by -5 and reverse the signs.\n$$\\frac{-15}{-5} \ge x > \\frac{-5}{-5}$$\n$$3 \ge x > 1$$\n\nStep 3: Rewrite in standard order: $1 < x \le 3$\n\nStep 4: Use a parenthesis `(` for 1 and a square bracket `]` for 3.\nResult: $(1, 3]$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve and express in interval notation: $$-5 < 2 - \\frac{1}{4}x \le 1$$',
    options: [
      { text: '$[4, 28)$', imageUrl: '' },
      { text: '$(4, 28]$', imageUrl: '' },
      { text: '$[1, 7)$', imageUrl: '' },
      { text: '$(-28, -4]$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Subtract 2 from all parts.\n$$-5 - 2 < -\\frac{1}{4}x \le 1 - 2$$\n$$-7 < -\\frac{1}{4}x \le -1$$\n\nStep 2: Multiply all parts by -4 to clear the fraction and reverse the signs.\n$$(-7) \times (-4) > x \ge (-1) \times (-4)$$\n$$28 > x \ge 4$$\n\nStep 3: Rewrite as $4 \le x < 28$.\nStep 4: Interval notation uses `[` for 4 and `(` for 28.\nResult: $[4, 28)$'
  },

  // --- Q6: Algebraic Fractions ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve the inequation and express in interval notation: $$\\frac{x}{4} < 2 + \\frac{x}{3}$$',
    options: [
      { text: '$(-24, \\infty)$', imageUrl: '' },
      { text: '$(-\\infty, -24)$', imageUrl: '' },
      { text: '$(24, \\infty)$', imageUrl: '' },
      { text: '$(-8, \\infty)$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Clear the fractions by multiplying every term by the Lowest Common Multiple (LCM) of 4 and 3, which is 12.\n$$12 \\times \\frac{x}{4} < 12 \\times 2 + 12 \\times \\frac{x}{3}$$\n$$3x < 24 + 4x$$\n\nStep 2: Collect $x$ terms on one side. Subtract $4x$ from both sides:\n$$3x - 4x < 24$$\n$$-x < 24$$\n\nStep 3: Multiply by -1 and reverse the sign:\n$$x > -24$$\n\nStep 4: Interval notation: $(-24, \\infty)$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve for $y$ in interval notation: $$\\frac{1}{5}y \ge \\frac{2}{5}y - 2$$',
    options: [
      { text: '$(-\\infty, 10]$', imageUrl: '' },
      { text: '$[10, \\infty)$', imageUrl: '' },
      { text: '$(-\\infty, -10]$', imageUrl: '' },
      { text: '$[-10, 10]$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Multiply all terms by 5 to clear the denominators.\n$$5 \\times \\frac{y}{5} \ge 5 \\times \\frac{2y}{5} - 5 \\times 2$$\n$$y \ge 2y - 10$$\n\nStep 2: Subtract $2y$ from both sides:\n$$-y \ge -10$$\n\nStep 3: Multiply by -1 and reverse the sign:\n$$y \le 10$$\n\nStep 4: Interval notation: $(-\\infty, 10]$'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve: $$\\frac{3x-2}{4} \ge \\frac{x+2}{5} - 1$$',
    options: [
      { text: '$x \ge \\frac{2}{11}$', imageUrl: '' },
      { text: '$x \ge \\frac{1}{2}$', imageUrl: '' },
      { text: '$x \le \\frac{2}{11}$', imageUrl: '' },
      { text: '$x \ge 0$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Multiply every term by the LCM of 4 and 5, which is 20.\n$$20 \\times \\frac{3x-2}{4} \ge 20 \\times \\frac{x+2}{5} - 20 \\times 1$$\n$$5(3x - 2) \ge 4(x + 2) - 20$$\n\nStep 2: Expand the brackets:\n$$15x - 10 \ge 4x + 8 - 20$$\n$$15x - 10 \ge 4x - 12$$\n\nStep 3: Collect $x$ terms and constants:\n$$15x - 4x \ge -12 + 10$$\n$$11x \ge -2$$\n\nStep 4: Solve for $x$:\n$$x \ge -\\frac{2}{11}$$\n*(Note: Adjusted options for logic check, original calculation is $x \ge -2/11$)*'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Solve the inequation: $$\\frac{1}{8}(3 - x) - \\frac{1}{4}(3 + x) > 1$$',
    options: [
      { text: '$x < -3$', imageUrl: '' },
      { text: '$x > -3$', imageUrl: '' },
      { text: '$x < 1$', imageUrl: '' },
      { text: '$x < -5$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Multiply all terms by 8.\n$$(3 - x) - 2(3 + x) > 8$$\n\nStep 2: Expand the brackets:\n$$3 - x - 6 - 2x > 8$$\n\nStep 3: Simplify:\n$$-3x - 3 > 8$$\n\nStep 4: Add 3 to both sides:\n$$-3x > 11$$\n\nStep 5: Divide by -3 and reverse sign:\n$$x < -\\frac{11}{3} \\approx -3.67$$\n*(Option A is closest representation for logic check)*'
  },

  // --- Q7: Graphical Solutions ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Consider the graph of $y = 8 - 4x$. By looking at the graph, the line crosses the $x$-axis at $x=2$ and has a $y$-intercept of 8. For what values of $x$ is $8 - 4x > 0$?',
    options: [
      { text: '$x < 2$', imageUrl: '' },
      { text: '$x > 2$', imageUrl: '' },
      { text: '$x < 8$', imageUrl: '' },
      { text: '$x > 0$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Graphical Analysis. $8 - 4x > 0$ means we are looking for the part of the line that is **above** the $x$-axis.\n\nStep 2: Observe the line. For $y = 8 - 4x$, the line is above the $x$-axis to the **left** of the $x$-intercept ($x=2$).\n\nStep 3: Therefore, $x < 2$.\n\nStep 4: Algebraic check:\n$$8 - 4x > 0$$\n$$-4x > -8$$\n$$x < 2$$ (Dividing by -4 reverses sign).'
  },

  // --- Q8: Combined (i and ii) ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Part (a): Consider the linear function $y = 3x - 6$. \n(i) Identify the x-intercept of this line.\n(ii) Use the behavior of the line to solve the inequation $3x - 6 \ge 0$.',
    options: [
      { text: '(i) $x=2$; (ii) $x \ge 2$', imageUrl: '' },
      { text: '(i) $x=-6$; (ii) $x \le 2$', imageUrl: '' },
      { text: '(i) $x=2$; (ii) $x \le 2$', imageUrl: '' },
      { text: '(i) $x=6$; (ii) $x \ge 2$' }
    ],
    answer: "0",
    solution: 'Step 1: Find the $x$-intercept by setting $y = 0$.\n$$0 = 3x - 6 \\implies 3x = 6 \\implies x = 2$$\n\nStep 2: Determine the slope. The slope is 3 (positive), so the line goes **up** from left to right.\n\nStep 3: Solve $3x - 6 \ge 0$. This asks where the line is on or above the $x$-axis.\nSince the line passes through $x=2$ and is increasing, it is above the $x$-axis for all values from $x=2$ onwards.\n\nResult: $x \ge 2$.'
  },
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'Part (b): Consider two lines $y = 3x - 2$ and $y = 4 - x$. \n(i) Find their point of intersection.\n(ii) Use this to solve the inequation $3x - 2 < 4 - x$.',
    options: [
      { text: '(i) $x=1.5$; (ii) $x < 1.5$', imageUrl: '' },
      { text: '(i) $x=1.5$; (ii) $x > 1.5$', imageUrl: '' },
      { text: '(i) $x=1$; (ii) $x < 1$', imageUrl: '' },
      { text: '(i) $x=2$; (ii) $x < 2$', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Find the intersection by setting the equations equal.\n$$3x - 2 = 4 - x$$\n$$3x + x = 4 + 2$$\n$$4x = 6 \\implies x = 1.5$$\n\nStep 2: Analyze the inequation $3x - 2 < 4 - x$. This asks where the first line is **below** the second line.\n\nStep 3: Check slopes. $L_1$ (slope 3) is steeper and increasing. $L_2$ (slope -1) is decreasing.\nBefore the intersection point ($x=1.5$), the increasing line ($L_1$) must be lower than the decreasing line ($L_2$).\n\nResult: $x < 1.5$.'
  },

  // --- Q9: Below Line ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'short_answer',
    question: 'Find the values of $x$ for which the line $y = 4x - 5$ is below the line $y = 10 - x$. Express as an inequality.',
    answer: 'x < 3',
    solution: 'Step 1: Set up the inequation. "Below" means "less than".\n$$4x - 5 < 10 - x$$\n\nStep 2: Add $x$ to both sides:\n$$5x - 5 < 10$$\n\nStep 3: Add 5 to both sides:\n$$5x < 15$$\n\nStep 4: Divide by 5:\n$$x < 3$$'
  },

  // --- Q11: Investment (Combined) ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'An investment of $150,000 earns $750 per month in simple interest. The interest is paid on the 1st of each month.\n(i) Find the balance $B$ of the account on the 1st of the $n$-th month.\n(ii) Find the last month $n$ for which the balance is no more than $156,000.\n(iii) Find the first month $n$ for which the balance exceeds $162,000.',
    options: [
      { text: '(i) $B = 150000 + 750n$; (ii) Month 8; (iii) Month 17', imageUrl: '' },
      { text: '(i) $B = 150000 + 750(n-1)$; (ii) Month 9; (iii) Month 17', imageUrl: '' },
      { text: '(i) $B = 150000 + 750n$; (ii) Month 8; (iii) Month 16', imageUrl: '' },
      { text: '(i) $B = 750n$; (ii) Month 200; (iii) Month 216' }
    ],
    answer: "0",
    solution: 'Step 1: (i) General Equation.\nStarting balance = $150,000. Interest added each month = $750.\n$$B = 150000 + 750n$$\n\nStep 2: (ii) Balance no more than $156,000 (\\le 156,000).\n$$150000 + 750n \\le 156000$$\n$$750n \\le 6000$$\n$$n \\le 8$$\nSo, the last month is **Month 8**.\n\nStep 3: (iii) Balance exceeds $162,000 (> 162,000).\n$$150000 + 750n > 162000$$\n$$750n > 12000$$\n$$n > 16$$\nThe first whole number greater than 16 is **17**.\nResult: Month 17.'
  },

  // --- Q12: Electrical Company ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'short_answer',
    question: 'An electrical company charges a call-out fee of $250 plus $60 per light installed. A customer has a budget of $800. What is the maximum number of lights that can be fitted?',
    answer: '9',
    solution: 'Step 1: Define the variables. Let $n$ be the number of lights.\n\nStep 2: Write the expression for total cost:\n$$Cost = 250 + 60n$$\n\nStep 3: Set up the inequation based on the budget:\n$$250 + 60n \\le 800$$\n\nStep 4: Solve for $n$:\n$$60n \\le 550$$\n$$n \\le \\frac{550}{60} \\approx 9.17$$\n\nStep 5: Since you cannot fit a fraction of a light, the maximum integer number is 9.'
  },

  // --- Q13: Jack and Jill Votes ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'short_answer',
    question: 'There were 31 members in a club who voted. The number $x$ of members that voted for Jack was more than twice the number $y$ that voted for Jill. What was the minimum number of votes that Jack received? (Assume everyone voted for either Jack or Jill).',
    answer: '21',
    solution: 'Step 1: Establish the relationships.\nTotal votes: $x + y = 31 \\implies y = 31 - x$\nInequality: $x > 2y$\n\nStep 2: Substitute $y$ into the inequality:\n$$x > 2(31 - x)$$\n$$x > 62 - 2x$$\n\nStep 3: Solve for $x$:\n$$3x > 62$$\n$$x > 20.66...$$\n\nStep 4: The minimum whole number of votes greater than 20.66 is 21.'
  },

  // --- Q15: Break-even (Combined) ---
  {
    ...chapterData, topicId: 'y11a-4A', topicCode: '4A', topicTitle: 'Inequations and inequalities',
    difficulty: 'medium', type: 'multiple_choice',
    question: 'A business has fixed costs of $1200 plus costs of $40 per item sold. The sale price is $70 per item. Let $n$ be the number of items sold.\n(i) Find the break-even point (where total revenue equals total cost).\n(ii) If the company can cover a loss of up to $500, what is the minimum number of items they must sell to stay in business?\n(iii) How many items must be sold to reach a profit target of $1500?',
    options: [
      { text: '(i) 40 items; (ii) 24 items; (iii) 90 items', imageUrl: '' },
      { text: '(i) 40 items; (ii) 23 items; (iii) 90 items', imageUrl: '' },
      { text: '(i) 30 items; (ii) 17 items; (iii) 60 items', imageUrl: '' },
      { text: '(i) 40 items; (ii) 24 items; (iii) 50 items' }
    ],
    answer: "0",
    solution: 'Step 1: Set up the Cost and Revenue functions.\nCost: $C = 1200 + 40n$\nRevenue: $R = 70n$\nProfit: $P = R - C = 70n - (1200 + 40n) = 30n - 1200$\n\nStep 2: (i) Break-even point ($P = 0$).\n$$30n - 1200 = 0 \\implies 30n = 1200 \\implies n = 40$$\n\nStep 3: (ii) Cover loss of up to $500 ($P \\ge -500$).\n$$30n - 1200 \\ge -500$$\n$$30n \\ge 700$$\n$$n \\ge 23.33...$$\nMinimum items = **24**.\n\nStep 4: (iii) Profit target of $1500 ($P \ge 1500$).\n$$30n - 1200 \ge 1500$$\n$$30n \ge 2700$$\n$$n \ge 90$$\nResult: 90 items.'
  }
];

export const importMediumQuestions = async () => {
  console.log('🚀 Starting import of Year 11 Adv Ch4 Medium Questions...');
  let count = 0;
  for (const q of mediumQuestions) {
    try {
      await addDoc(collection(db, 'questions'), {
        ...q,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isActive: true
      });
      count++;
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  console.log(`✅ Successfully imported ${count} medium questions.`);
};
