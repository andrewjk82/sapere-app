import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const allQuestions = [
  // --- 4A: Distance between two points and midpoint of an interval ---
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4a', topicCode: '4A', topicTitle: 'Distance and Midpoint',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the distance between the points $A(2, 3)$ and $B(5, 7)$.',
    options: ['$5$ units', '$\\sqrt{13}$ units', '$7$ units', '$25$ units'],
    answer: '0',
    graphData: {
      equations: [],
      points: [
        { x: 2, y: 3, label: 'A(2,3)' },
        { x: 5, y: 7, label: 'B(5,7)' }
      ],
      config: { xRange: [-1, 7], yRange: [-1, 9], size: 300, showSegment: true }
    },
    solution: 'Step 1: Use the distance formula $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.\nStep 2: Substitute the coordinates $(2, 3)$ and $(5, 7)$:\n$$d = \\sqrt{(5 - 2)^2 + (7 - 3)^2}$$\nStep 3: Simplify:\n$$d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\nResult: $5$ units'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4a', topicCode: '4A', topicTitle: 'Distance and Midpoint',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the midpoint of the interval joining $P(-1, 4)$ and $Q(3, -2)$.',
    options: ['$(1, 1)$', '$(2, 2)$', '$(1, 3)$', '$(2, 1)$'],
    answer: '0',
    graphData: {
      equations: [],
      points: [
        { x: -1, y: 4, label: 'P' },
        { x: 3, y: -2, label: 'Q' },
        { x: 1, y: 1, label: 'M(1,1)', color: '#10b981' }
      ],
      config: { xRange: [-3, 5], yRange: [-4, 6], size: 300, showSegment: true }
    },
    solution: 'Step 1: Use the midpoint formula $M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)$.\nStep 2: Substitute the coordinates $(-1, 4)$ and $(3, -2)$:\n$$M = \\left( \\frac{-1 + 3}{2}, \\frac{4 + (-2)}{2} \\right)$$\nStep 3: Simplify:\n$$M = \\left( \\frac{2}{2}, \\frac{2}{2} \\right) = (1, 1)$$\nResult: $(1, 1)$'
  },

  // --- 4B: Gradient ---
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4b', topicCode: '4B', topicTitle: 'Gradient',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the gradient of the line passing through $(2, -1)$ and $(5, 5)$.',
    options: ['$2$', '$\\frac{1}{2}$', '$-2$', '$3$'],
    answer: '0',
    graphData: {
      equations: ['y = 2x - 5'],
      points: [
        { x: 2, y: -1, label: '(2,-1)' },
        { x: 5, y: 5, label: '(5,5)' }
      ],
      config: { xRange: [-1, 7], yRange: [-3, 7], size: 300 }
    },
    solution: 'Step 1: Use the gradient formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\nStep 2: Substitute $(2, -1)$ and $(5, 5)$:\n$$m = \\frac{5 - (-1)}{5 - 2}$$\nStep 3: Simplify:\n$$m = \\frac{6}{3} = 2$$\nResult: Gradient $m = 2$'
  },

  // --- 4C: Gradient-intercept and General form ---
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4c', topicCode: '4C', topicTitle: 'Line Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Convert the equation $y = 3x - 4$ into general form $ax + by + c = 0$.',
    options: ['$3x - y - 4 = 0$', '$3x + y - 4 = 0$', '$x - 3y + 4 = 0$', '$3x - y + 4 = 0$'],
    answer: '0',
    solution: 'Step 1: The general form is $ax + by + c = 0$.\nStep 2: Move all terms to one side of the equation $y = 3x - 4$:\n$$0 = 3x - y - 4$$\nStep 3: Rearrange to match the standard form:\n$$3x - y - 4 = 0$$\nResult: $3x - y - 4 = 0$'
  },

  // --- 4D: Point-gradient form ---
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4d', topicCode: '4D', topicTitle: 'Point-Gradient Form',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Find the equation of the line that passes through the point $(2, 3)$ with a gradient of $4$. Write in the form $y = mx + c$.',
    options: ['$y = 4x - 5$', '$y = 4x + 3$', '$y = 2x + 4$', '$y = 4x - 11$'],
    answer: '0',
    graphData: {
      equations: ['y = 4x - 5'],
      points: [{ x: 2, y: 3, label: '(2,3)' }],
      config: { xRange: [-2, 6], yRange: [-2, 10], size: 300 }
    },
    solution: 'Step 1: Use the point-gradient formula $y - y_1 = m(x - x_1)$.\nStep 2: Substitute $m = 4$ and $(x_1, y_1) = (2, 3)$:\n$$y - 3 = 4(x - 2)$$\nStep 3: Expand the brackets:\n$$y - 3 = 4x - 8$$\nStep 4: Solve for $y$:\n$$y = 4x - 8 + 3 \\Rightarrow y = 4x - 5$$\nResult: $y = 4x - 5$'
  },

  // --- 4E: Simultaneous linear equations ---
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4e', topicCode: '4E', topicTitle: 'Simultaneous Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve the following simultaneous equations graphically:\n$$y = 2x + 1$$\n$$y = 3x - 4$$',
    options: ['$x=5, y=11$', '$x=3, y=7$', '$x=5, y=9$', '$x=2, y=5$'],
    answer: '0',
    graphData: {
      equations: ['y = 2x + 1', 'y = 3x - 4'],
      points: [{ x: 5, y: 11, label: 'Intersection' }],
      config: { xRange: [-1, 7], yRange: [-1, 13], size: 300 }
    },
    solution: 'Step 1: The intersection of the two lines on the graph gives the solution.\nStep 2: From the graph, the lines cross at $(5, 11)$.\nStep 3: Verify algebraically: $2(5)+1 = 11$ and $3(5)-4 = 11$.\nResult: $x=5, y=11$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4c', topicCode: '4C', topicTitle: 'Line Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the $x$ and $y$ intercepts of the line $2x + 3y = 6$.',
    options: ['$x=3, y=2$', '$x=2, y=3$', '$x=6, y=6$', '$x=3, y=3$'],
    answer: '0',
    graphData: {
      equations: ['y = -0.67x + 2'],
      points: [
        { x: 3, y: 0, label: 'x-intercept' },
        { x: 0, y: 2, label: 'y-intercept' }
      ],
      config: { xRange: [-2, 5], yRange: [-2, 5], size: 300 }
    },
    solution: 'Step 1: Set $y=0$ for $x$-intercept: $2x + 3(0) = 6 \\Rightarrow x=3$.\nStep 2: Set $x=0$ for $y$-intercept: $2(0) + 3y = 6 \\Rightarrow y=2$.\nStep 3: The points are $(3, 0)$ and $(0, 2)$.\nResult: $x=3, y=2$'
  },


  // --- 4F: Word problems using simultaneous equations ---
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4f', topicCode: '4F', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'The sum of two numbers is $25$ and their difference is $7$. Find the two numbers.',
    options: ['$16$ and $9$', '$18$ and $11$', '$15$ and $8$', '$17$ and $10$'],
    answer: '0',
    solution: 'Step 1: Let the numbers be $x$ and $y$. Set up the equations:\n$$x + y = 25$$\n$$x - y = 7$$\nStep 2: Add the two equations to eliminate $y$:\n$$(x + y) + (x - y) = 25 + 7$$\n$$2x = 32 \\Rightarrow x = 16$$\nStep 3: Substitute $x = 16$ into the first equation:\n$$16 + y = 25 \\Rightarrow y = 9$$\nResult: The numbers are $16$ and $9$.'
  },
  
  // --- VARIATIONS ---
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4a', topicCode: '4A', topicTitle: 'Distance and Midpoint',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the distance between $(-3, 2)$ and $(1, -1)$.',
    options: ['$5$ units', '$\\sqrt{7}$ units', '$4$ units', '$\\sqrt{15}$ units'],
    answer: '0',
    solution: 'Step 1: $d = \\sqrt{(1 - (-3))^2 + (-1 - 2)^2}$.\nStep 2: $d = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.\nResult: $5$ units'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4b', topicCode: '4B', topicTitle: 'Gradient',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the gradient of the line passing through $(0, 4)$ and $(2, 0)$.',
    options: ['$-2$', '$2$', '$0$', 'Undefined'],
    answer: '0',
    solution: 'Step 1: $m = \\frac{0 - 4}{2 - 0} = \\frac{-4}{2} = -2$.\nResult: $m = -2$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4e', topicCode: '4E', topicTitle: 'Simultaneous Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve: \n$2x + y = 7$\n$x - y = 2$',
    options: ['$x=3, y=1$', '$x=2, y=3$', '$x=4, y=-1$', '$x=5, y=-3$'],
    answer: '0',
    solution: 'Step 1: Add equations to eliminate $y$: $(2x+y) + (x-y) = 7 + 2 \\Rightarrow 3x = 9 \\Rightarrow x = 3$.\nStep 2: Substitute $x=3$: $3 - y = 2 \\Rightarrow y = 1$.\nResult: $x=3, y=1$'
  },
  // --- NEW ADDITIONS ---
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4b', topicCode: '4B', topicTitle: 'Gradient',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the gradient of the line that is perpendicular to the line with gradient $m = \\frac{2}{3}$.',
    options: ['$-\\frac{3}{2}$', '$\\frac{3}{2}$', '$-\\frac{2}{3}$', '$\\frac{2}{3}$'],
    answer: '0',
    solution: 'Step 1: For perpendicular lines, the product of their gradients is $-1$ ($m_1 \\times m_2 = -1$).\nStep 2: Let the required gradient be $m_2$. Then $\\frac{2}{3} \\times m_2 = -1$.\nStep 3: Solve for $m_2$:\n$$m_2 = -1 \\div \\frac{2}{3} = -1 \\times \\frac{3}{2} = -\\frac{3}{2}$$\nResult: $m = -\\frac{3}{2}$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4c', topicCode: '4C', topicTitle: 'Line Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the $x$-intercept of the line $2x - 5y = 10$.',
    options: ['$5$', '$-2$', '$2$', '$-5$'],
    answer: '0',
    solution: 'Step 1: To find the $x$-intercept, set $y = 0$.\nStep 2: Substitute $y = 0$ into the equation:\n$$2x - 5(0) = 10 \\Rightarrow 2x = 10$$\nStep 3: Solve for $x$:\n$$x = \\frac{10}{2} = 5$$\nResult: $x$-intercept is $5$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4c', topicCode: '4C', topicTitle: 'Line Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the $y$-intercept of the line $3x + 4y = 12$.',
    options: ['$3$', '$4$', '$-3$', '$-4$'],
    answer: '0',
    solution: 'Step 1: To find the $y$-intercept, set $x = 0$.\nStep 2: Substitute $x = 0$ into the equation:\n$$3(0) + 4y = 12 \\Rightarrow 4y = 12$$\nStep 3: Solve for $y$:\n$$y = \\frac{12}{4} = 3$$\nResult: $y$-intercept is $3$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4d', topicCode: '4D', topicTitle: 'Point-Gradient Form',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Find the equation of the line passing through $(-1, 4)$ and $(2, 10)$. Write in gradient-intercept form.',
    options: ['$y = 2x + 6$', '$y = 2x + 4$', '$y = 3x + 7$', '$y = 2x + 8$'],
    answer: '0',
    solution: 'Step 1: Find the gradient $m = \\frac{10 - 4}{2 - (-1)} = \\frac{6}{3} = 2$.\nStep 2: Use point-gradient form with point $(-1, 4)$:\n$$y - 4 = 2(x - (-1)) \\Rightarrow y - 4 = 2(x + 1)$$\nStep 3: Expand and solve for $y$:\n$$y - 4 = 2x + 2 \\Rightarrow y = 2x + 6$$\nResult: $y = 2x + 6$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4f', topicCode: '4F', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'A rectangle has a perimeter of $40$ cm. The length is $4$ cm more than the width. Find the dimensions.',
    options: ['$12 \\times 8$', '$14 \\times 10$', '$11 \\times 9$', '$13 \\times 7$'],
    answer: '0',
    solution: 'Step 1: Let length be $L$ and width be $W$. Equations:\n$$2L + 2W = 40 \\Rightarrow L + W = 20$$\n$$L = W + 4$$\nStep 2: Substitute $L$ into the first equation:\n$$(W + 4) + W = 20 \\Rightarrow 2W = 16 \\Rightarrow W = 8$$\nStep 3: Find $L$:\n$$L = 8 + 4 = 12$$\nResult: $12$ cm by $8$ cm'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4f', topicCode: '4F', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'The total cost of $3$ coffees and $2$ muffins is $\\$18$. The cost of $2$ coffees and $4$ muffins is $\\$20$. Find the price of one coffee.',
    options: ['$\\$4$', '$\\$3$', '$\\$5$', '$\\$2.5$'],
    answer: '0',
    solution: 'Step 1: Let coffee be $C$ and muffin be $M$. Equations:\n$$3C + 2M = 18 \\quad (1)$$\n$$2C + 4M = 20 \\quad (2)$$\nStep 2: Multiply $(1)$ by $2$ to eliminate $M$:\n$$6C + 4M = 36 \\quad (3)$$\nStep 3: Subtract $(2)$ from $(3)$:\n$$(6C + 4M) - (2C + 4M) = 36 - 20$$\n$$4C = 16 \\Rightarrow C = 4$$\nResult: One coffee costs $\\$4$.'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4a', topicCode: '4A', topicTitle: 'Distance and Midpoint',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the midpoint of the interval joining $A(-3, 5)$ and $B(1, -1)$.',
    options: ['$(-1, 2)$', '$(-2, 4)$', '$(0, 2)$', '$(-1, 3)$'],
    answer: '0',
    solution: 'Step 1: $M = \\left( \\frac{-3 + 1}{2}, \\frac{5 + (-1)}{2} \\right)$.\nStep 2: $M = \\left( \\frac{-2}{2}, \\frac{4}{2} \\right) = (-1, 2)$.\nResult: $(-1, 2)$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4b', topicCode: '4B', topicTitle: 'Gradient',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the gradient of the line with equation $5x + 2y = 10$.',
    options: ['$-2.5$', '$2.5$', '$-5$', '$5$'],
    answer: '0',
    solution: 'Step 1: Rewrite in $y = mx + c$ form:\n$$2y = -5x + 10$$\nStep 2: Divide by $2$:\n$$y = -2.5x + 5$$\nStep 3: Gradient $m = -2.5$.\nResult: $m = -2.5$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4c', topicCode: '4C', topicTitle: 'Line Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Which of the following lines is parallel to $y = 3x - 5$?',
    options: ['$y = 3x + 10$', '$y = -3x + 5$', '$y = \\frac{1}{3}x - 5$', '$y = -\\frac{1}{3}x + 2$'],
    answer: '0',
    graphData: {
      equations: ['y = 3x - 5', 'y = 3x + 10'],
      config: { xRange: [-5, 5], yRange: [-10, 15], size: 300 }
    },
    solution: 'Step 1: Parallel lines have the same gradient.\nStep 2: The gradient of $y = 3x - 5$ is $m = 3$.\nStep 3: Check the options for $m = 3$. Only $y = 3x + 10$ has $m = 3$.\nResult: $y = 3x + 10$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4e', topicCode: '4E', topicTitle: 'Simultaneous Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve using substitution: \n$y = 4x - 7$\n$2x + 3y = 21$',
    options: ['$x=3, y=5$', '$x=2, y=1$', '$x=4, y=9$', '$x=1, y=-3$'],
    answer: '0',
    solution: 'Step 1: Substitute $y = 4x - 7$ into the second equation:\n$$2x + 3(4x - 7) = 21$$\nStep 2: Expand and solve for $x$:\n$$2x + 12x - 21 = 21 \\Rightarrow 14x = 42 \\Rightarrow x = 3$$\nStep 3: Find $y$:\n$$y = 4(3) - 7 = 12 - 7 = 5$$\nResult: $x=3, y=5$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4f', topicCode: '4F', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'A piggy bank contains $\\$5$ and $\\$10$ notes. There are $20$ notes in total, with a total value of $\\$160$. How many $\\$10$ notes are there?',
    options: ['$12$', '$8$', '$10$', '$15$'],
    answer: '0',
    solution: 'Step 1: Let $x$ be $\\$5$ notes and $y$ be $\\$10$ notes. Equations:\n$$x + y = 20 \\quad (1)$$\n$$5x + 10y = 160 \\Rightarrow x + 2y = 32 \\quad (2)$$\nStep 2: Subtract $(1)$ from $(2)$:\n$$(x + 2y) - (x + y) = 32 - 20$$\n$$y = 12$$\nResult: There are $12$ ten-dollar notes.'
  },
  // --- ADDITIONAL VARIATIONS ---
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4a', topicCode: '4A', topicTitle: 'Distance and Midpoint',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the distance between $(-5, -2)$ and $(7, 3)$.',
    options: ['$13$ units', '$12$ units', '$15$ units', '$\\sqrt{119}$ units'],
    answer: '0',
    solution: 'Step 1: $d = \\sqrt{(7 - (-5))^2 + (3 - (-2))^2}$.\nStep 2: $d = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$.\nResult: $13$ units'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4a', topicCode: '4A', topicTitle: 'Distance and Midpoint',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: '$M(2, 3)$ is the midpoint of the interval $AB$. If $A$ is $(1, 1)$, find the coordinates of $B$.',
    options: ['$(3, 5)$', '$(4, 6)$', '$(3, 4)$', '$(2.5, 4.5)$'],
    answer: '0',
    solution: 'Step 1: Use the midpoint formula $M = (\\frac{x_A+x_B}{2}, \\frac{y_A+y_B}{2})$.\nStep 2: $2 = \\frac{1 + x_B}{2} \\Rightarrow 4 = 1 + x_B \\Rightarrow x_B = 3$.\nStep 3: $3 = \\frac{1 + y_B}{2} \\Rightarrow 6 = 1 + y_B \\Rightarrow y_B = 5$.\nResult: $B(3, 5)$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4b', topicCode: '4B', topicTitle: 'Gradient',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the gradient of a line that is parallel to the line passing through $(-2, 4)$ and $(4, 1)$.',
    options: ['$-0.5$', '$0.5$', '$-2$', '$2$'],
    answer: '0',
    solution: 'Step 1: Find the gradient of the given points $m = \\frac{1 - 4}{4 - (-2)} = \\frac{-3}{6} = -0.5$.\nStep 2: Parallel lines have the same gradient.\nResult: $m = -0.5$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4c', topicCode: '4C', topicTitle: 'Line Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'medium', isManual: true,
    question: 'Find the gradient and $y$-intercept of the line $4x - 2y + 8 = 0$.',
    options: ['$m = 2, c = 4$', '$m = -2, c = 8$', '$m = 2, c = -4$', '$m = 4, c = 8$'],
    answer: '0',
    solution: 'Step 1: Solve for $y$: $2y = 4x + 8$.\nStep 2: Divide by $2$: $y = 2x + 4$.\nStep 3: $m = 2, c = 4$.\nResult: $m = 2, c = 4$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4d', topicCode: '4D', topicTitle: 'Point-Gradient Form',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Find the equation of the line passing through $(5, -2)$ with gradient $m = -3$. Write in general form.',
    options: ['$3x + y - 13 = 0$', '$3x - y - 17 = 0$', '$x + 3y + 1 = 0$', '$3x + y + 13 = 0$'],
    answer: '0',
    solution: 'Step 1: $y - (-2) = -3(x - 5) \\Rightarrow y + 2 = -3x + 15$.\nStep 2: $3x + y - 13 = 0$.\nResult: $3x + y - 13 = 0$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4e', topicCode: '4E', topicTitle: 'Simultaneous Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Solve using elimination: \n$3x + 2y = 12$\n$2x + 3y = 13$',
    options: ['$x=2, y=3$', '$x=3, y=2$', '$x=1, y=4.5$', '$x=4, y=0$'],
    answer: '0',
    solution: 'Step 1: Multiply 1st by $3$ and 2nd by $2$: \n$9x + 6y = 36$\n$4x + 6y = 26$\nStep 2: Subtract: $5x = 10 \\Rightarrow x = 2$.\nStep 3: $3(2) + 2y = 12 \\Rightarrow 6 + 2y = 12 \\Rightarrow 2y = 6 \\Rightarrow y = 3$.\nResult: $x=2, y=3$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4f', topicCode: '4F', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'A shop sells two types of pens. 3 of type A and 5 of type B cost $\\$21$. 6 of type A and 2 of type B cost $\\$18$. Find the cost of type B.',
    options: ['$\\$3$', '$\\$2$', '$\\$4$', '$\\$2.5$'],
    answer: '0',
    solution: 'Step 1: $3A + 5B = 21 \\quad (1)$\n$6A + 2B = 18 \\Rightarrow 3A + B = 9 \\quad (2)$\nStep 2: Subtract $(2)$ from $(1)$: $4B = 12 \\Rightarrow B = 3$.\nResult: Type B costs $\\$3$.'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4c', topicCode: '4C', topicTitle: 'Line Equations',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Find the equation of the line passing through $(-2, 1)$ that is parallel to $y = 5x + 3$.',
    options: ['$y = 5x + 11$', '$y = 5x - 9$', '$y = 5x + 1$', '$y = -0.2x + 1$'],
    answer: '0',
    solution: 'Step 1: $m = 5$. Use point $(-2, 1)$.\nStep 2: $y - 1 = 5(x - (-2)) \\Rightarrow y - 1 = 5x + 10 \\Rightarrow y = 5x + 11$.\nResult: $y = 5x + 11$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4d', topicCode: '4D', topicTitle: 'Point-Gradient Form',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Find the equation of the line passing through $(4, -3)$ that is perpendicular to $y = 2x - 1$.',
    options: ['$y = -0.5x - 1$', '$y = -0.5x + 1$', '$y = 2x - 11$', '$y = 0.5x - 5$'],
    answer: '0',
    solution: 'Step 1: Perpendicular gradient $m = -1/2 = -0.5$.\nStep 2: $y - (-3) = -0.5(x - 4) \\Rightarrow y + 3 = -0.5x + 2 \\Rightarrow y = -0.5x - 1$.\nResult: $y = -0.5x - 1$'
  },
  {
    chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4f', topicCode: '4F', topicTitle: 'Word Problems',
    year: 'Year 10', type: 'multiple_choice', difficulty: 'hard', isManual: true,
    question: 'Find two numbers such that five times the first plus the second is $25$, and the first minus the second is $5$.',
    options: ['$5$ and $0$', '$4$ and $5$', '$6$ and $-5$', '$3$ and $10$'],
    answer: '0',
    solution: 'Step 1: $5x + y = 25$\n$x - y = 5$\nStep 2: Add equations: $6x = 30 \\Rightarrow x = 5$.\nStep 3: $5 - y = 5 \\Rightarrow y = 0$.\nResult: $5$ and $0$'
  },


];

export const importYear10Ch4 = async () => {
  const { collection, getDocs, query, where, addDoc } = await import('firebase/firestore');
  console.log('[Ch4 Import] Starting audit...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y10-4')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question)) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
  } catch (error) {
    console.error('[Ch4 Import] ERROR:', error);
  }
  
  console.log(`[Ch4 Import] Successfully added ${importedCount} NEW questions.`);
  return importedCount;
};
