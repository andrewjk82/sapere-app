
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore';

export const importYear10Ch4 = async () => {
  const CHAPTER_ID = 'y10-4';
  const YEAR = 10;

  const questions = [
    // Q9 (Split into separate questions)
    {
      chapterId: CHAPTER_ID,
      chapterTitle: 'Chapter 4: Lines and linear equations',
      topicId: 'y10-4d',
      topicTitle: 'Point-gradient form of an equation of a line',
      year: "Year 10",
      difficulty: 'medium',
      type: 'short_answer',
      isManual: true,
      question: 'Find the equation of the line that passes through the points $(6, 7)$ and $(-3, 16)$ in gradient-intercept form $y = mx + c$.',
      answer: 'y = -x + 13',
      solution: `**Step 1: Find the gradient ($m$)**\\nUsing the formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$:\\n$m = \\frac{16 - 7}{-3 - 6} = \\frac{9}{-9} = -1$\\n\\n**Step 2: Use the point-gradient form**\\nUsing the point $(6, 7)$ and $m = -1$:\\n$y - 7 = -1(x - 6)$\\n$y - 7 = -x + 6$\\n$y = -x + 13$`,
      hint: 'First find the gradient $m$, then use $y - y_1 = m(x - x_1)$.'
    },
    {
      chapterId: CHAPTER_ID,
      chapterTitle: 'Chapter 4: Lines and linear equations',
      topicId: 'y10-4d',
      topicTitle: 'Point-gradient form of an equation of a line',
      year: "Year 10",
      difficulty: 'medium',
      type: 'short_answer',
      isManual: true,
      question: 'Find the equation of the line that passes through the points $(4, 5)$ and $(-2, 17)$ in gradient-intercept form $y = mx + c$.',
      answer: 'y = -2x + 13',
      solution: `**Step 1: Find the gradient ($m$)**\\n$m = \\frac{17 - 5}{-2 - 4} = \\frac{12}{-6} = -2$\\n\\n**Step 2: Use the point-gradient form**\\nUsing $(4, 5)$ and $m = -2$:\\n$y - 5 = -2(x - 4)$\\n$y - 5 = -2x + 8$\\n$y = -2x + 13$`,
      hint: 'Find $m$ first, then substitute into $y = mx + c$ to find $c$.'
    },
    {
      chapterId: CHAPTER_ID,
      chapterTitle: 'Chapter 4: Lines and linear equations',
      topicId: 'y10-4d',
      topicTitle: 'Point-gradient form of an equation of a line',
      year: "Year 10",
      difficulty: 'medium',
      type: 'short_answer',
      isManual: true,
      question: 'Find the equation of the line that passes through the points $(-3, 7)$ and $(2, 12)$ in gradient-intercept form $y = mx + c$.',
      answer: 'y = x + 10',
      solution: `**Step 1: Find the gradient ($m$)**\\n$m = \\frac{12 - 7}{2 - (-3)} = \\frac{5}{5} = 1$\\n\\n**Step 2: Use the point-gradient form**\\nUsing $(2, 12)$ and $m = 1$:\\n$y - 12 = 1(x - 2)$\\n$y = x + 10$`,
      hint: 'Gradient is positive here. Use the formula $m = \\Delta y / \\Delta x$.'
    },

    // Q10
    {
      chapterId: CHAPTER_ID,
      chapterTitle: 'Chapter 4: Lines and linear equations',
      topicId: 'y10-4e',
      topicTitle: 'Review of simultaneous linear equations',
      year: "Year 10",
      difficulty: 'medium',
      type: 'short_answer',
      isManual: true,
      question: 'Solve the simultaneous equations: \\n $6x + 2y = 26$ \\n $x - y = 3$ \\n (Enter your answer in the form $(x, y)$)',
      answer: '(4, 1)',
      solution: `**Method: Substitution**\\nFrom the second equation: $x = y + 3$\\n\\n**Step 1: Substitute into the first equation**\\n$6(y + 3) + 2y = 26$\\n$6y + 18 + 2y = 26$\\n$8y = 8 \\Rightarrow y = 1$\\n\\n**Step 2: Find $x$**\\n$x = 1 + 3 = 4$\\nThe solution is $(4, 1)$.`,
      hint: 'Rearrange the second equation to $x = y + 3$ and substitute it into the first.'
    },

    // Q12 (Sub-questions)
    {
      chapterId: CHAPTER_ID,
      chapterTitle: 'Chapter 4: Lines and linear equations',
      topicId: 'y10-4c',
      topicTitle: 'Gradient-intercept form and the general form of the equation of a line',
      year: "Year 10",
      difficulty: 'hard',
      isManual: true,
      question: 'The vertices of $\\triangle ABC$ are $A(4, 5)$, $B(10, 13)$, and $C(6, -3)$.',
      subQuestions: [
        {
          id: 'q12a_i',
          type: 'short_answer',
          question: 'Find the equation of the perpendicular bisector of $AB$. (Express in $y = mx + c$ form)',
          answer: 'y = -3/4x + 57/4',
          solution: `**Step 1: Find the midpoint of $AB$**\\n$M_{AB} = (\\frac{4+10}{2}, \\frac{5+13}{2}) = (7, 9)$\\n\\n**Step 2: Find the gradient of $AB$**\\n$m_{AB} = \\frac{13-5}{10-4} = \\frac{8}{6} = \\frac{4}{3}$\\n\\n**Step 3: Gradient of perpendicular bisector**\\nThe perpendicular gradient is the negative reciprocal: $m_{\\perp} = -\\frac{3}{4}$\\n\\n**Step 4: Equation**\\n$y - 9 = -\\frac{3}{4}(x - 7)$\\n$y = -\\frac{3}{4}x + \\frac{21}{4} + 9$\\n$y = -\\frac{3}{4}x + \\frac{57}{4}$`
        },
        {
          id: 'q12a_ii',
          type: 'short_answer',
          question: 'Find the equation of the perpendicular bisector of $BC$. (Express in $y = mx + c$ form)',
          answer: 'y = -1/4x + 7',
          solution: `**Step 1: Find the midpoint of $BC$**\\n$M_{BC} = (\\frac{10+6}{2}, \\frac{13-3}{2}) = (8, 5)$\\n\\n**Step 2: Find the gradient of $BC$**\\n$m_{BC} = \\frac{-3-13}{6-10} = \\frac{-16}{-4} = 4$\\n\\n**Step 3: Gradient of perpendicular bisector**\\n$m_{\\perp} = -\\frac{1}{4}$\\n\\n**Step 4: Equation**\\n$y - 5 = -\\frac{1}{4}(x - 8)$\\n$y = -\\frac{1}{4}x + 2 + 5$\\n$y = -\\frac{1}{4}x + 7$`
        },
        {
          id: 'q12b',
          type: 'short_answer',
          question: 'Find the coordinates of the point of intersection of the two perpendicular bisectors (the circumcentre).',
          answer: '(14.5, 3.375)',
          solution: `Equate the two equations:\\n$-\\frac{3}{4}x + \\frac{57}{4} = -\\frac{1}{4}x + 7$\\nMultiply by 4:\\n$-3x + 57 = -x + 28$\\n$29 = 2x \\Rightarrow x = 14.5$\\n\\nFind $y$:\\n$y = -\\frac{1}{4}(14.5) + 7 = -3.625 + 7 = 3.375$`
        }
      ],
      hint: 'Find the midpoints and negative reciprocal gradients first.'
    },

    // Q17
    {
      chapterId: CHAPTER_ID,
      chapterTitle: 'Chapter 4: Lines and linear equations',
      topicId: 'y10-4f',
      topicTitle: 'Solving word problems using simultaneous equations',
      year: "Year 10",
      difficulty: 'medium',
      type: 'short_answer',
      isManual: true,
      question: 'Find two numbers whose sum is $152$ and whose difference is $94$. (Enter as: "small, large")',
      answer: '29, 123',
      solution: `Let the numbers be $x$ and $y$ ($x > y$).\\n1) $x + y = 152$\\n2) $x - y = 94$\\n\\n**Step 1: Add the equations**\\n$(x + y) + (x - y) = 152 + 94$\\n$2x = 246 \\Rightarrow x = 123$\\n\\n**Step 2: Find $y$**\\n$123 + y = 152 \\Rightarrow y = 29$\\nThe numbers are 29 and 123.`,
      hint: 'Let $x+y=152$ and $x-y=94$, then add the equations.'
    },

    // Q19 (Sub-questions)
    {
      chapterId: CHAPTER_ID,
      chapterTitle: 'Chapter 4: Lines and linear equations',
      topicId: 'y10-4b',
      topicTitle: 'Gradient',
      year: "Year 10",
      difficulty: 'hard',
      isManual: true,
      question: 'Three points have coordinates $A(2, 3)$, $B(4, 11)$ and $C(p, 9)$.',
      subQuestions: [
        {
          id: 'q19a',
          type: 'short_answer',
          question: 'Find the value of $p$ if $A$, $B$ and $C$ are collinear.',
          answer: '3.5',
          solution: `**Step 1: Find gradient $AB$**\\n$m_{AB} = \\frac{11 - 3}{4 - 2} = 4$\\n\\n**Step 2: Equate gradients**\\n$m_{AC} = \\frac{9 - 3}{p - 2} = \\frac{6}{p - 2}$\\n$4 = \\frac{6}{p - 2} \\Rightarrow 4p - 8 = 6 \\Rightarrow 4p = 14 \\Rightarrow p = 3.5$`
        },
        {
          id: 'q19b',
          type: 'short_answer',
          question: 'Find the value of $p$ if $AC$ is perpendicular to $AB$.',
          answer: '-22',
          solution: `**Step 1: Gradient $AB = 4$**\\n**Step 2: Gradient $AC$ must be $-1/4$**\\n$\\frac{9 - 3}{p - 2} = -\\frac{1}{4}$\\n$\\frac{6}{p - 2} = -\\frac{1}{4}$\\n$-24 = p - 2 \\Rightarrow p = -22$`
        }
      ],
      hint: 'For collinear points, $m_{AB} = m_{AC}$. For perpendicular, $m_{AB} \\times m_{AC} = -1$.'
    }
  ];

  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', CHAPTER_ID), where('isManual', '==', true)));
    if (qSnap.size >= questions.length) {
      return 0;
    }

    let count = 0;
    for (const q of questions) {
      await addDoc(collection(db, 'questions'), {
        ...q,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      count++;
    }
    return count;
  } catch (err) {
    console.error("Import y10-4 error:", err);
    return 0;
  }
};
