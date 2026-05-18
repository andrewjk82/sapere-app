import fs from 'fs';

console.log('Building restored Chapter 5 and new Chapter 6 Trigonometry questions...');

const originalQuestions = [
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Find the value of $y = (x - 2)^2$ when $x = 3$.',
    options: [{ text: '1', imageUrl: '' }, { text: '2', imageUrl: '' }, { text: '4', imageUrl: '' }, { text: '9', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Substitute $x = 3$ into the equation.\n$$y = (3 - 2)^2$$\nStep 2: Simplify the expression inside the parenthesis.\n$$y = (1)^2$$\nStep 3: Calculate the square.\n$$y = 1$$'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'What is the coordinates of the vertex for the parabola $y = (x - 3)^2$?',
    options: [{ text: '$(3, 0)$', imageUrl: '' }, { text: '$(-3, 0)$', imageUrl: '' }, { text: '$(0, 3)$', imageUrl: '' }, { text: '$(0, -3)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Identify the standard vertex form $y = a(x - h)^2 + k$.\nStep 2: Compare $y = (x - 3)^2$ to the standard form.\n- Here, $h = 3$ and $k = 0$.\nStep 3: The vertex is $(h, k)$.\nResult: $(3, 0)$'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Which transformation maps the graph of $y = x^2$ onto $y = (x - 4)^2$?',
    options: [
      { text: 'A horizontal shift 4 units to the right', imageUrl: '' },
      { text: 'A horizontal shift 4 units to the left', imageUrl: '' },
      { text: 'A vertical shift 4 units up', imageUrl: '' },
      { text: 'A vertical shift 4 units down', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Analyze the change in the function. The variable $x$ is replaced by $(x - 4)$.\nStep 2: Recall the rule: $f(x - h)$ represents a horizontal shift of $h$ units.\nStep 3: Since $h = 4$ (positive), the graph moves to the **right**.\nResult: 4 units to the right.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Find the $y$-intercept of the cubic function $y = \\frac{1}{2}x^3 + 4$.',
    options: [{ text: '$(0, 4)$', imageUrl: '' }, { text: '$(0, 2)$', imageUrl: '' }, { text: '$(4, 0)$', imageUrl: '' }, { text: '$(0, 0)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: To find the $y$-intercept, set $x = 0$.\nStep 2: Substitute into the equation:\n$$y = \\frac{1}{2}(0)^3 + 4$$\n$$y = 0 + 4 = 4$$\nStep 3: The intercept is a point $(0, 4)$'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'What transformation maps $y = x^3$ to $y = x^3 + 5$?',
    options: [
      { text: 'A vertical shift 5 units up', imageUrl: '' },
      { text: 'A vertical shift 5 units down', imageUrl: '' },
      { text: 'A horizontal shift 5 units left', imageUrl: '' },
      { text: 'A horizontal shift 5 units right', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Observe that 5 is added to the entire function ($y = f(x) + k$).\nStep 2: Adding a constant $k$ outside the parent function moves the graph vertically.\nStep 3: Since $k = 5$ is positive, the shift is **upward**.\nResult: 5 units up.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'How has the parabola $y = x^2$ been shifted to produce $y = x^2 + 3$?',
    options: [{ text: 'Shifted 3 units up', imageUrl: '' }, { text: 'Shifted 3 units down', imageUrl: '' }, { text: 'Shifted 3 units right', imageUrl: '' }, { text: 'Shifted 3 units left', imageUrl: '' }],
    answer: "0",
    solution: 'The transformation $y = f(x) + k$ shifts the graph vertically by $k$ units. Here $k = 3$, so it is 3 units up.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'How has the parabola $y = x^2$ been shifted to produce $y = (x + 5)^2$?',
    options: [{ text: 'Shifted 5 units left', imageUrl: '' }, { text: 'Shifted 5 units right', imageUrl: '' }, { text: 'Shifted 5 units up', imageUrl: '' }, { text: 'Shifted 5 units down', imageUrl: '' }],
    answer: "0",
    solution: 'The transformation $y = f(x + h)$ shifts the graph horizontally. For $x + 5$, the shift is 5 units to the **left**.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Describe the shift from $y = \\frac{1}{x}$ to $y = \\frac{1}{x - 6}$.',
    options: [{ text: '6 units to the right', imageUrl: '' }, { text: '6 units to the left', imageUrl: '' }, { text: '6 units up', imageUrl: '' }, { text: '6 units down', imageUrl: '' }],
    answer: "0",
    solution: 'Replacing $x$ with $(x - 6)$ in the denominator is a horizontal translation of 6 units to the right.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Describe the shift from $y = \\frac{1}{x}$ to $y = \\frac{1}{x} - 2$.',
    options: [{ text: '2 units down', imageUrl: '' }, { text: '2 units up', imageUrl: '' }, { text: '2 units left', imageUrl: '' }, { text: '2 units right', imageUrl: '' }],
    answer: "0",
    solution: 'Subtracting 2 from the entire function is a vertical translation of 2 units down.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'Find the center of the circle given by the equation $(x + 2)^2 + y^2 = 9$.',
    options: [{ text: '$(-2, 0)$', imageUrl: '' }, { text: '$(2, 0)$', imageUrl: '' }, { text: '$(0, -2)$', imageUrl: '' }, { text: '$(0, 2)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: For $(x + 2)^2 + y^2 = 9$, we have $h = -2$ and $k = 0$.\nStep 3: The center is $(h, k) = (-2, 0)$.'
  },
  {
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5A',
    topicCode: '5A',
    topicTitle: 'Translations of known graphs',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: 'What is the radius of the circle $(x - 1)^2 + (y + 4)^2 = 16$?',
    options: [{ text: '4', imageUrl: '' }, { text: '16', imageUrl: '' }, { text: '1', imageUrl: '' }, { text: '2', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: The equation is in the form $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: Identify $r^2 = 16$.\nStep 3: Take the square root: $r = \\sqrt{16} = 4$.'
  }
];

const trigQuestions = [];

// ========================================================
// QUESTION 8: Trigonometric Ratios on Right Triangle (6 questions)
// ========================================================
const q8BaseSvg = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 60 160 L 180 160 L 180 30 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 168 160 L 168 148 L 180 148" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="85" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">17</text>
  <text x="120" y="185" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">15</text>
  <text x="195" y="100" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">8</text>
  <path d="M 90 160 A 30 30 0 0 0 84 141" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="96" y="152" fill="#fbbf24" font-size="16" font-family="Outfit, sans-serif" font-weight="600">α</text>
  <path d="M 180 60 A 30 30 0 0 1 156 49" fill="none" stroke="#34d399" stroke-width="2" />
  <text x="162" y="75" fill="#34d399" font-size="16" font-family="Outfit, sans-serif" font-weight="600">β</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\sin \\alpha$.<br/>${q8BaseSvg}`,
  options: [{ text: '$\\frac{8}{17}$', imageUrl: '' }, { text: '$\\frac{15}{17}$', imageUrl: '' }, { text: '$\\frac{8}{15}$', imageUrl: '' }, { text: '$\\frac{17}{8}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the definitions of trigonometric ratios**
$$\\sin \\alpha = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$

**Step 2: Read the sides from the triangle relative to $\\alpha$**
- **Opposite side** $= 8$
- **Hypotenuse** $= 17$

**Step 3: Substitute the values into the formula**
$$\\sin \\alpha = \\frac{8}{17}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\tan \\beta$.<br/>${q8BaseSvg}`,
  options: [{ text: '$\\frac{15}{8}$', imageUrl: '' }, { text: '$\\frac{8}{15}$', imageUrl: '' }, { text: '$\\frac{15}{17}$', imageUrl: '' }, { text: '$\\frac{17}{8}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the definition of tangent ratio**
$$\\tan \\beta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

**Step 2: Identify the sides relative to $\\beta$ (the angle at the top)**
- **Opposite side** (bottom side) $= 15$
- **Adjacent side** (vertical side) $= 8$

**Step 3: Substitute the values into the ratio**
$$\\tan \\beta = \\frac{15}{8}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\sec \\beta$.<br/>${q8BaseSvg}`,
  options: [{ text: '$\\frac{17}{8}$', imageUrl: '' }, { text: '$\\frac{17}{15}$', imageUrl: '' }, { text: '$\\frac{8}{17}$', imageUrl: '' }, { text: '$\\frac{15}{17}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the secant ratio**
$$\\sec \\beta = \\frac{1}{\\cos \\beta} = \\frac{\\text{Hypotenuse}}{\\text{Adjacent}}$$

**Step 2: Read the sides relative to angle $\\beta$**
- **Hypotenuse** $= 17$
- **Adjacent side** $= 8$

**Step 3: Substitute these values into the ratio**
$$\\sec \\beta = \\frac{17}{8}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\cot \\alpha$.<br/>${q8BaseSvg}`,
  options: [{ text: '$\\frac{15}{8}$', imageUrl: '' }, { text: '$\\frac{8}{15}$', imageUrl: '' }, { text: '$\\frac{17}{8}$', imageUrl: '' }, { text: '$\\frac{17}{15}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the cotangent ratio**
$$\\cot \\alpha = \\frac{1}{\\tan \\alpha} = \\frac{\\text{Adjacent}}{\\text{Opposite}}$$

**Step 2: Identify the sides relative to angle $\\alpha$**
- **Adjacent side** $= 15$
- **Opposite side** $= 8$

**Step 3: Substitute these values into the ratio**
$$\\cot \\alpha = \\frac{15}{8}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\csc \\alpha$.<br/>${q8BaseSvg}`,
  options: [{ text: '$\\frac{17}{8}$', imageUrl: '' }, { text: '$\\frac{17}{15}$', imageUrl: '' }, { text: '$\\frac{8}{17}$', imageUrl: '' }, { text: '$\\frac{15}{8}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the cosecant ratio**
$$\\csc \\alpha = \\frac{1}{\\sin \\alpha} = \\frac{\\text{Hypotenuse}}{\\text{Opposite}}$$

**Step 2: Identify the sides relative to angle $\\alpha$**
- **Hypotenuse** $= 17$
- **Opposite side** $= 8$

**Step 3: Calculate the ratio**
$$\\csc \\alpha = \\frac{17}{8}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the right-angled triangle shown below, find the value of $\\sec \\alpha$.<br/>${q8BaseSvg}`,
  options: [{ text: '$\\frac{17}{15}$', imageUrl: '' }, { text: '$\\frac{17}{8}$', imageUrl: '' }, { text: '$\\frac{15}{17}$', imageUrl: '' }, { text: '$\\frac{8}{17}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the secant ratio**
$$\\sec \\alpha = \\frac{1}{\\cos \\alpha} = \\frac{\\text{Hypotenuse}}{\\text{Adjacent}}$$

**Step 2: Identify the sides relative to angle $\\alpha$**
- **Hypotenuse** $= 17$
- **Adjacent side** $= 15$

**Step 3: Substitute the values into the formula**
$$\\sec \\alpha = \\frac{17}{15}$$`
});

// ========================================================
// QUESTION 9: Double Right Triangle sharing a height of 12 (7 questions)
// ========================================================
const q9BaseSvg = `<svg width="280" height="200" viewBox="0 0 280 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 40 150 L 240 150 L 120 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 120 40 L 120 150" stroke="#60a5fa" stroke-dasharray="4 4" stroke-width="2" />
  <path d="M 108 150 L 108 138 L 120 138" fill="none" stroke="#ef4444" stroke-width="2" />
  <path d="M 132 150 L 132 138 L 120 138" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="75" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600">13</text>
  <text x="185" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600">15</text>
  <text x="135" y="105" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600">12</text>
  <text x="80" y="170" fill="#fbbf24" font-size="16" font-family="Outfit, sans-serif" font-weight="600">a</text>
  <text x="180" y="170" fill="#fbbf24" font-size="16" font-family="Outfit, sans-serif" font-weight="600">b</text>
  <path d="M 120 60 A 20 20 0 0 0 102 54" fill="none" stroke="#34d399" stroke-width="2" />
  <text x="96" y="78" fill="#34d399" font-size="16" font-family="Outfit, sans-serif" font-weight="600">x</text>
  <path d="M 120 60 A 20 20 0 0 1 138 54" fill="none" stroke="#a78bfa" stroke-width="2" />
  <text x="132" y="78" fill="#a78bfa" font-size="16" font-family="Outfit, sans-serif" font-weight="600">y</text>
  
  <line x1="40" y1="180" x2="240" y2="180" stroke="#f8fafc" stroke-width="1.5" />
  <text x="140" y="195" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">14</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `In the diagram below, a vertical height of $12$ divides the base of length $14$ into two segments $a$ and $b$. Find the values of $a$ and $b$.<br/>${q9BaseSvg}`,
  options: [{ text: '$a = 5,\\, b = 9$', imageUrl: '' }, { text: '$a = 6,\\, b = 8$', imageUrl: '' }, { text: '$a = 4,\\, b = 10$', imageUrl: '' }, { text: '$a = 7,\\, b = 7$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Solve for the segment $a$ using Pythagoras' Theorem in the left right-angled triangle**
The left triangle has hypotenuse $13$ and height $12$.
$$a^2 + 12^2 = 13^2$$
$$a^2 + 144 = 169$$
$$a^2 = 169 - 144 = 25 \\implies a = 5$$

**Step 2: Solve for $b$ using the total base length**
The total base is $14$. Since $a + b = 14$ and $a = 5$:
$$5 + b = 14$$
$$b = 14 - 5 = 9$$

**Step 3: Double-check with Pythagoras in the right triangle**
$$b^2 + 12^2 = 9^2 + 12^2 = 81 + 144 = 225 = 15^2$$ (Matches the hypotenuse of $15$!)

**Result:**
$$a = 5,\\, b = 9$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the diagram below, find the exact value of $\\cos y$.<br/>${q9BaseSvg}`,
  options: [{ text: '$\\frac{4}{5}$', imageUrl: '' }, { text: '$\\frac{3}{5}$', imageUrl: '' }, { text: '$\\frac{3}{4}$', imageUrl: '' }, { text: '$\\frac{12}{15}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Solve for $b$ first**
Using Pythagoras' Theorem in the right triangle with height $12$ and hypotenuse $15$:
$$b^2 + 12^2 = 15^2$$
$$b^2 + 144 = 225$$
$$b^2 = 81 \\implies b = 9$$

**Step 2: Find $\\cos y$ in the right triangle**
The angle $y$ is at the top vertex of the right triangle.
- **Adjacent side** to $y$ is the height $= 12$.
- **Hypotenuse** is $= 15$.
$$\\cos y = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{12}{15}$$

**Step 3: Simplify the fraction**
$$\\cos y = \\frac{12 \\div 3}{15 \\div 3} = \\frac{4}{5}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the diagram below, find the exact value of $\\sin x$.<br/>${q9BaseSvg}`,
  options: [{ text: '$\\frac{5}{13}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{5}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Solve for $a$ using Pythagoras' Theorem in the left triangle**
$$a^2 + 12^2 = 13^2 \\implies a^2 + 144 = 169 \\implies a^2 = 25 \\implies a = 5$$

**Step 2: Identify $\\sin x$ for angle $x$ at the top vertex**
- **Opposite side** (bottom side) to angle $x$ $= a = 5$.
- **Hypotenuse** $= 13$.

**Step 3: Write down the ratio**
$$\\sin x = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{5}{13}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the diagram below, find the exact value of $\\cot x$.<br/>${q9BaseSvg}`,
  options: [{ text: '$\\frac{12}{5}$', imageUrl: '' }, { text: '$\\frac{5}{12}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{13}{5}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Find the value of base segment $a$**
$$a = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = 5$$

**Step 2: Apply the cotangent definition relative to angle $x$ at the top vertex**
$$\\cot x = \\frac{1}{\\tan x} = \\frac{\\text{Adjacent}}{\\text{Opposite}}$$
- **Adjacent side** $= 12$
- **Opposite side** $= a = 5$

**Step 3: Formulate the ratio**
$$\\cot x = \\frac{12}{5}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the diagram below, find the exact value of $\\csc y$.<br/>${q9BaseSvg}`,
  options: [{ text: '$\\frac{5}{3}$', imageUrl: '' }, { text: '$\\frac{5}{4}$', imageUrl: '' }, { text: '$\\frac{3}{5}$', imageUrl: '' }, { text: '$\\frac{4}{5}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Solve for base segment $b$ in the right-hand triangle**
$$b = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = 9$$

**Step 2: Recall the definition of cosecant relative to angle $y$ at the top**
$$\\csc y = \\frac{1}{\\sin y} = \\frac{\\text{Hypotenuse}}{\\text{Opposite}}$$
- **Hypotenuse** $= 15$
- **Opposite side** $= b = 9$

**Step 3: Compute and simplify the ratio**
$$\\csc y = \\frac{15}{9} = \\frac{5}{3}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the diagram below, find the exact value of $\\sec x$.<br/>${q9BaseSvg}`,
  options: [{ text: '$\\frac{13}{12}$', imageUrl: '' }, { text: '$\\frac{13}{5}$', imageUrl: '' }, { text: '$\\frac{12}{13}$', imageUrl: '' }, { text: '$\\frac{5}{13}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Find segment $a$ in the left-hand triangle**
$$a = \\sqrt{13^2 - 12^2} = 5$$

**Step 2: Apply the secant definition relative to angle $x$ at the top**
$$\\sec x = \\frac{1}{\\cos x} = \\frac{\\text{Hypotenuse}}{\\text{Adjacent}}$$
- **Hypotenuse** $= 13$
- **Adjacent side** $= 12$

**Step 3: Construct the exact value**
$$\\sec x = \\frac{13}{12}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `From the diagram below, find the exact value of $\\cot y$.<br/>${q9BaseSvg}`,
  options: [{ text: '$\\frac{4}{3}$', imageUrl: '' }, { text: '$\\frac{3}{4}$', imageUrl: '' }, { text: '$\\frac{5}{3}$', imageUrl: '' }, { text: '$\\frac{3}{5}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Solve for base segment $b$ in the right-hand triangle**
$$b = \\sqrt{15^2 - 12^2} = 9$$

**Step 2: Apply the cotangent definition relative to angle $y$ at the top**
$$\\cot y = \\frac{1}{\\tan y} = \\frac{\\text{Adjacent}}{\\text{Opposite}}$$
- **Adjacent side** $= 12$
- **Opposite side** $= b = 9$

**Step 3: Construct and simplify the ratio**
$$\\cot y = \\frac{12}{9} = \\frac{4}{3}$$`
});

// ========================================================
// QUESTION 10: Special Exact Values (6 questions)
// ========================================================
trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Write down the exact value of $\\sin 45^\\circ$.`,
  options: [{ text: '$\\frac{1}{\\sqrt{2}}$', imageUrl: '' }, { text: '$\\frac{\\sqrt{3}}{2}$', imageUrl: '' }, { text: '$\\frac{1}{2}$', imageUrl: '' }, { text: '$\\sqrt{2}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the standard isosceles right-angled triangle ($45^\\circ - 45^\\circ - 90^\\circ$)**
- Side lengths are in the ratio $1 : 1 : \\sqrt{2}$.

**Step 2: Formulate the sine ratio for $45^\\circ$**
$$\\sin 45^\\circ = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{1}{\\sqrt{2}}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Write down the exact value of $\\cos 30^\\circ$.`,
  options: [{ text: '$\\frac{\\sqrt{3}}{2}$', imageUrl: '' }, { text: '$\\frac{1}{2}$', imageUrl: '' }, { text: '$\\frac{1}{\\sqrt{3}}$', imageUrl: '' }, { text: '$\\sqrt{3}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the standard right-angled triangle ($30^\\circ - 60^\\circ - 90^\\circ$)**
- Side lengths relative to $30^\\circ$ are: Opposite $= 1$, Adjacent $= \\sqrt{3}$, Hypotenuse $= 2$.

**Step 2: Formulate the cosine ratio for $30^\\circ$**
$$\\cos 30^\\circ = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{\\sqrt{3}}{2}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Write down the exact value of $\\tan 60^\\circ$.`,
  options: [{ text: '$\\sqrt{3}$', imageUrl: '' }, { text: '$\\frac{1}{\\sqrt{3}}$', imageUrl: '' }, { text: '$\\frac{\\sqrt{3}}{2}$', imageUrl: '' }, { text: '$\\frac{1}{2}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the standard $30^\\circ - 60^\\circ - 90^\\circ$ triangle**
- Side lengths relative to $60^\\circ$ are: Opposite $= \\sqrt{3}$, Adjacent $= 1$, Hypotenuse $= 2$.

**Step 2: Formulate the tangent ratio for $60^\\circ$**
$$\\tan 60^\\circ = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Write down the exact value of $\\sec 45^\\circ$.`,
  options: [{ text: '$\\sqrt{2}$', imageUrl: '' }, { text: '$\\frac{1}{\\sqrt{2}}$', imageUrl: '' }, { text: '$\\frac{2}{\\sqrt{3}}$', imageUrl: '' }, { text: '$1$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the secant ratio**
$$\\sec 45^\\circ = \\frac{1}{\\cos 45^\\circ}$$

**Step 2: Substitute the exact value of $\\cos 45^\\circ = \\frac{1}{\\sqrt{2}}$**
$$\\sec 45^\\circ = \\frac{1}{1/\\sqrt{2}} = \\sqrt{2}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Write down the exact value of $\\csc 60^\\circ$.`,
  options: [{ text: '$\\frac{2}{\\sqrt{3}}$', imageUrl: '' }, { text: '$\\frac{\\sqrt{3}}{2}$', imageUrl: '' }, { text: '$\\sqrt{3}$', imageUrl: '' }, { text: '$\\frac{1}{2}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the cosecant ratio**
$$\\csc 60^\\circ = \\frac{1}{\\sin 60^\\circ}$$

**Step 2: Substitute the exact value of $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$**
$$\\csc 60^\\circ = \\frac{1}{\\sqrt{3}/2} = \\frac{2}{\\sqrt{3}}$$`
}, {
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Write down the exact value of $\\cot 45^\\circ$.`,
  options: [{ text: '$1$', imageUrl: '' }, { text: '$\\sqrt{3}$', imageUrl: '' }, { text: '$\\frac{1}{\\sqrt{3}}$', imageUrl: '' }, { text: '$\\sqrt{2}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Recall the definition of the cotangent ratio**
$$\\cot 45^\\circ = \\frac{1}{\\tan 45^\\circ}$$

**Step 2: Substitute the exact value of $\\tan 45^\\circ = 1$**
$$\\cot 45^\\circ = \\frac{1}{1} = 1$$`
});

// ========================================================
// QUESTION 11: Side Lengths to 1 Decimal Place (4 questions)
// ========================================================
const q11aSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 190 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 130 L 178 118 L 190 118" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="70" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">18</text>
  <text x="210" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">x</text>
  <path d="M 80 130 A 30 30 0 0 0 74 111" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="90" y="122" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">35°</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to one decimal place, the length of the side marked with $x$ in the triangle below.<br/>${q11aSvg}`,
  options: [{ text: '$10.3$', imageUrl: '' }, { text: '$12.6$', imageUrl: '' }, { text: '$14.7$', imageUrl: '' }, { text: '$9.8$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the given side and the angle**
- **Angle** $= 35^\\circ$
- **Hypotenuse** $= 18$
- **Opposite side** $= x$

**Step 2: Choose the correct trigonometric ratio**
$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$
$$\\sin 35^\\circ = \\frac{x}{18}$$

**Step 3: Solve for $x$ and evaluate**
$$x = 18 \\times \\sin 35^\\circ$$
$$x \\approx 18 \\times 0.573576 = 10.324$$

**Step 4: Round to one decimal place**
$$x \\approx 10.3$$`
});

const q11bSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 50 20 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 50 118 L 62 118 L 62 130" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="130" y="70" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">y</text>
  <text x="32" y="80" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">14</text>
  <path d="M 160 130 A 30 30 0 0 0 170 108" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="135" y="120" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">52°</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to one decimal place, the length of the side marked with $y$ in the triangle below.<br/>${q11bSvg}`,
  options: [{ text: '$22.7$', imageUrl: '' }, { text: '$17.8$', imageUrl: '' }, { text: '$24.1$', imageUrl: '' }, { text: '$11.0$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Analyze the triangle relative to the $52^\\circ$ angle**
- **Angle** $= 52^\\circ$
- **Adjacent side** $= 14$
- **Hypotenuse** $= y$

**Step 2: Set up the cosine ratio**
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$
$$\\cos 52^\\circ = \\frac{14}{y}$$

**Step 3: Solve for $y$**
$$y = \\frac{14}{\\cos 52^\\circ}$$
$$y \\approx \\frac{14}{0.61566} = 22.739$$

**Step 4: Round to one decimal place**
$$y \\approx 22.7$$`
});

const q11cSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 40 L 190 40 L 50 130 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 50 52 L 62 52 L 62 40" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="120" y="28" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">z</text>
  <text x="32" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">8</text>
  <path d="M 160 40 A 30 30 0 0 1 170 52" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="135" y="58" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">22°</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to one decimal place, the length of the side marked with $z$ in the triangle below.<br/>${q11cSvg}`,
  options: [{ text: '$19.8$', imageUrl: '' }, { text: '$21.4$', imageUrl: '' }, { text: '$3.2$', imageUrl: '' }, { text: '$18.5$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Analyze the triangle relative to the $22^\\circ$ angle**
- **Angle** $= 22^\\circ$
- **Opposite side** $= 8$
- **Adjacent side** $= z$

**Step 2: Set up the tangent ratio**
$$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$
$$\\tan 22^\\circ = \\frac{8}{z}$$

**Step 3: Solve for $z$**
$$z = \\frac{8}{\\tan 22^\\circ}$$
$$z \\approx \\frac{8}{0.404026} = 19.80$$

**Step 4: Round to one decimal place**
$$z \\approx 19.8$$`
});

const q11dSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 190 30 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 130 L 178 118 L 190 118" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="70" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">25</text>
  <text x="120" y="150" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">w</text>
  <path d="M 80 130 A 30 30 0 0 0 74 111" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="90" y="122" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">68°</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to one decimal place, the length of the side marked with $w$ in the triangle below.<br/>${q11dSvg}`,
  options: [{ text: '$9.4$', imageUrl: '' }, { text: '$23.2$', imageUrl: '' }, { text: '$10.1$', imageUrl: '' }, { text: '$8.8$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Analyze the triangle relative to the $68^\\circ$ angle**
- **Angle** $= 68^\\circ$
- **Hypotenuse** $= 25$
- **Adjacent side** $= w$

**Step 2: Set up the cosine ratio**
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$
$$\\cos 68^\\circ = \\frac{w}{25}$$

**Step 3: Solve for $w$**
$$w = 25 \\times \\cos 68^\\circ$$
$$w \\approx 25 \\times 0.374606 = 9.365$$

**Step 4: Round to one decimal place**
$$w \\approx 9.4$$`
});

// ========================================================
// QUESTION 12: DMS Angle Sides to 2 Decimal Places (4 questions)
// ========================================================
const q12aSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 190 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 130 L 178 118 L 190 118" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="70" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">a</text>
  <text x="210" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">12</text>
  <path d="M 80 130 A 30 30 0 0 0 74 111" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="82" y="122" fill="#fbbf24" font-size="14" font-family="Outfit, sans-serif" font-weight="600">48°15'</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to two decimal places, the length of the side marked with $a$ in the triangle below.<br/>${q12aSvg}`,
  options: [{ text: '$16.08$', imageUrl: '' }, { text: '$14.22$', imageUrl: '' }, { text: '$17.15$', imageUrl: '' }, { text: '$15.98$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Convert DMS to Decimal Degrees**
$$48^\\circ 15' = 48 + \\frac{15}{60} = 48.25^\\circ$$

**Step 2: Identify the trigonometric ratio**
$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$
$$\\sin 48.25^\\circ = \\frac{12}{a}$$

**Step 3: Solve for $a$**
$$a = \\frac{12}{\\sin 48.25^\\circ}$$
$$a \\approx \\frac{12}{0.746057} = 16.0845$$

**Step 4: Round to two decimal places**
$$a \\approx 16.08$$`
});

const q12bSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 190 30 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 130 L 178 118 L 190 118" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="120" y="150" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">15.5</text>
  <text x="210" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">b</text>
  <path d="M 80 130 A 30 30 0 0 0 74 111" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="82" y="122" fill="#fbbf24" font-size="14" font-family="Outfit, sans-serif" font-weight="600">72°30'</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to two decimal places, the length of the side marked with $b$ in the triangle below.<br/>${q12bSvg}`,
  options: [{ text: '$49.17$', imageUrl: '' }, { text: '$47.24$', imageUrl: '' }, { text: '$51.05$', imageUrl: '' }, { text: '$45.89$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Convert DMS to Decimal Degrees**
$$72^\\circ 30' = 72 + \\frac{30}{60} = 72.5^\\circ$$

**Step 2: Identify the trigonometric ratio**
$$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$
$$\\tan 72.5^\\circ = \\frac{b}{15.5}$$

**Step 3: Solve for $b$**
$$b = 15.5 \\times \\tan 72.5^\\circ$$
$$b \\approx 15.5 \\times 3.17159 = 49.1597$$

**Step 4: Round to two decimal places**
$$b \\approx 49.17$$`
});

const q12cSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 50 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 50 118 L 62 118 L 62 130" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="130" y="75" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">38.6</text>
  <text x="120" y="150" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">c</text>
  <path d="M 160 130 A 30 30 0 0 0 170 108" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="132" y="120" fill="#fbbf24" font-size="14" font-family="Outfit, sans-serif" font-weight="600">15°45'</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to two decimal places, the length of the side marked with $c$ in the triangle below.<br/>${q12cSvg}`,
  options: [{ text: '$37.15$', imageUrl: '' }, { text: '$36.21$', imageUrl: '' }, { text: '$38.10$', imageUrl: '' }, { text: '$35.95$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Convert DMS to Decimal Degrees**
$$15^\\circ 45' = 15 + \\frac{45}{60} = 15.75^\\circ$$

**Step 2: Identify the trigonometric ratio**
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$
$$\\cos 15.75^\\circ = \\frac{c}{38.6}$$

**Step 3: Solve for $c$**
$$c = 38.6 \\times \\cos 15.75^\\circ$$
$$c \\approx 38.6 \\times 0.962455 = 37.1507$$

**Step 4: Round to two decimal places**
$$c \\approx 37.15$$`
});

const q12dSvg = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 190 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 130 L 178 118 L 190 118" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="70" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">50.4</text>
  <text x="210" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">d</text>
  <path d="M 80 130 A 30 30 0 0 0 74 111" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="82" y="122" fill="#fbbf24" font-size="14" font-family="Outfit, sans-serif" font-weight="600">24°12'</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find, correct to two decimal places, the length of the side marked with $d$ in the triangle below.<br/>${q12dSvg}`,
  options: [{ text: '$20.66$', imageUrl: '' }, { text: '$19.85$', imageUrl: '' }, { text: '$21.32$', imageUrl: '' }, { text: '$22.04$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Convert DMS to Decimal Degrees**
$$24^\\circ 12' = 24 + \\frac{12}{60} = 24.2^\\circ$$

**Step 2: Identify the trigonometric ratio**
$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$
$$\\sin 24.2^\\circ = \\frac{d}{50.4}$$

**Step 3: Solve for $d$**
$$d = 50.4 \\times \\sin 24.2^\\circ$$
$$d \\approx 50.4 \\times 0.409923 = 20.6601$$

**Step 4: Round to two decimal places**
$$d \\approx 20.66$$`
});

// ========================================================
// QUESTION 13: Find Angle correct to nearest minute (6 questions)
// ========================================================
const q13aSvg_ = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 190 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 130 L 178 118 L 190 118" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="70" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">12</text>
  <text x="210" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">7</text>
  <path d="M 80 130 A 30 30 0 0 0 74 111" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="92" y="122" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">θ</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the angle $\\theta$, correct to the nearest minute, in the diagram below.<br/>${q13aSvg_}`,
  options: [{ text: '$35°41\'$', imageUrl: '' }, { text: '$35°40\'$', imageUrl: '' }, { text: '$54°19\'$', imageUrl: '' }, { text: '$36°00\'$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the given sides relative to $\\theta$**
- **Opposite side** $= 7$
- **Hypotenuse** $= 12$

**Step 2: Set up the sine ratio**
$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{7}{12}$$

**Step 3: Solve for $\\theta$ in decimal degrees**
$$\\theta = \\sin^{-1}\\left(\\frac{7}{12}\\right) \\approx 35.68533^\\circ$$

**Step 4: Convert the decimal part to minutes**
$$\\text{Minutes} = 0.68533 \\times 60 = 41.12'$$

**Step 5: Round to the nearest minute**
$$\\theta \\approx 35^\\circ 41'$$`
});

const q13bSvg_ = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 190 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 130 L 178 118 L 190 118" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="120" y="150" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">15.2</text>
  <text x="210" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">9.6</text>
  <path d="M 80 130 A 30 30 0 0 0 74 111" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="92" y="122" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">θ</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the angle $\\theta$, correct to the nearest minute, in the diagram below.<br/>${q13bSvg_}`,
  options: [{ text: '$32°17\'$', imageUrl: '' }, { text: '$32°18\'$', imageUrl: '' }, { text: '$57°43\'$', imageUrl: '' }, { text: '$30°15\'$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the given sides relative to $\\theta$**
- **Opposite side** $= 9.6$
- **Adjacent side** $= 15.2$

**Step 2: Set up the tangent ratio**
$$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{9.6}{15.2}$$

**Step 3: Solve for $\\theta$ in decimal degrees**
$$\\theta = \\tan^{-1}\\left(\\frac{9.6}{15.2}\\right) \\approx 32.2756^\\circ$$

**Step 4: Convert the decimal part to minutes**
$$\\text{Minutes} = 0.2756 \\times 60 = 16.536'$$

**Step 5: Round up to the nearest minute**
$$\\theta \\approx 32^\\circ 17'$$`
});

const q13cSvg_ = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 130 L 190 130 L 190 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 178 130 L 178 118 L 190 118" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="70" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">16.8</text>
  <text x="120" y="150" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">11.4</text>
  <path d="M 80 130 A 30 30 0 0 0 74 111" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="92" y="122" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">θ</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the angle $\\theta$, correct to the nearest minute, in the diagram below.<br/>${q13cSvg_}`,
  options: [{ text: '$47°16\'$', imageUrl: '' }, { text: '$47°15\'$', imageUrl: '' }, { text: '$42°44\'$', imageUrl: '' }, { text: '$48°02\'$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the given sides relative to $\\theta$**
- **Adjacent side** $= 11.4$
- **Hypotenuse** $= 16.8$

**Step 2: Set up the cosine ratio**
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{11.4}{16.8}$$

**Step 3: Solve for $\\theta$ in decimal degrees**
$$\\theta = \\cos^{-1}\\left(\\frac{11.4}{16.8}\\right) \\approx 47.269^\\circ$$

**Step 4: Convert the decimal part to minutes**
$$\\text{Minutes} = 0.269 \\times 60 = 16.14'$$

**Step 5: Round to the nearest minute**
$$\\theta \\approx 47^\\circ 16'$$`
});

const q13dSvg_ = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 40 140 L 200 140 L 120 40 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <path d="M 120 40 L 120 140" stroke="#60a5fa" stroke-dasharray="4 4" stroke-width="2" />
  <path d="M 108 140 L 108 128 L 120 128" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="135" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600">18</text>
  <path d="M 70 140 A 30 30 0 0 1 64 121" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="76" y="132" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">θ</text>
  
  <line x1="40" y1="160" x2="200" y2="160" stroke="#f8fafc" stroke-width="1.5" />
  <text x="120" y="175" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">48</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the base angle $\\theta$ of the symmetric isosceles triangle below, correct to the nearest minute.<br/>${q13dSvg_}`,
  options: [{ text: '$36°52\'$', imageUrl: '' }, { text: '$36°53\'$', imageUrl: '' }, { text: '$53°08\'$', imageUrl: '' }, { text: '$37°00\'$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Divide the isosceles triangle into two right-angled triangles**
The vertical altitude of $18$ splits the base of $48$ exactly in half:
$$\\text{Half-Base} = \\frac{48}{2} = 24$$

**Step 2: Focus on one of the right-angled triangles**
Relative to the angle $\\theta$ at the base:
- **Opposite side** (height) $= 18$
- **Adjacent side** (half-base) $= 24$

**Step 3: Set up the tangent ratio**
$$\\tan \\theta = \\frac{18}{24} = 0.75$$

**Step 4: Solve for $\\theta$**
$$\\theta = \\tan^{-1}(0.75) \\approx 36.869897^\\circ$$
$$\\text{Minutes} = 0.869897 \\times 60 = 52.19'$$

**Step 5: Round to the nearest minute**
$$\\theta \\approx 36^\\circ 52'$$`
});

const q13eSvg_ = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <circle cx="120" cy="100" r="80" fill="none" stroke="#60a5fa" stroke-width="2.5" />
  <path d="M 40 100 L 200 100 L 72 150 Z" fill="none" stroke="#fbbf24" stroke-width="2.5" />
  <path d="M 68 136 L 82 131 L 86 145" fill="none" stroke="#ef4444" stroke-width="2" />
  
  <text x="120" y="90" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">8</text>
  <text x="50" y="130" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600">5</text>
  <path d="M 200 100 A 30 30 0 0 1 170 115" fill="none" stroke="#34d399" stroke-width="2.5" />
  <text x="162" y="112" fill="#34d399" font-size="16" font-family="Outfit, sans-serif" font-weight="600">θ</text>
  
  <circle cx="120" cy="100" r="4" fill="#ef4444" />
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `A triangle is inscribed in a circle with a diameter of $8$ as shown. Find the angle $\\theta$, correct to the nearest minute.<br/>${q13eSvg_}`,
  options: [{ text: '$51°19\'$', imageUrl: '' }, { text: '$51°20\'$', imageUrl: '' }, { text: '$38°41\'$', imageUrl: '' }, { text: '$45°00\'$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Apply Circle Geometry theorems**
- The angle subtended by a diameter in a semicircle is a **right angle ($90^\\circ$)**.
- Thus, the triangle inscribed is a **right-angled triangle** with the diameter ($8$) as the hypotenuse.

**Step 2: Focus on the right-angled triangle relative to $\\theta$**
- **Hypotenuse** (diameter) $= 8$
- **Adjacent side** to $\\theta$ $= 5$

**Step 3: Select the cosine ratio**
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{5}{8} = 0.625$$

**Step 4: Compute $\\theta$**
$$\\theta = \\cos^{-1}(0.625) \\approx 51.3178^\\circ$$
$$\\text{Minutes} = 0.3178 \\times 60 = 19.068'$$

**Step 5: Round to the nearest minute**
$$\\theta \\approx 51^\\circ 19'$$`
});

const q13fSvg_ = `<svg width="240" height="180" viewBox="0 0 240 180" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <path d="M 50 140 L 190 140 L 120 30 Z" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linejoin="round" />
  <text x="75" y="85" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600">20</text>
  <text x="155" y="85" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600">20</text>
  <text x="120" y="160" fill="#f8fafc" font-size="16" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">14</text>
  <path d="M 80 140 A 30 30 0 0 0 74 121" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="86" y="132" fill="#fbbf24" font-size="15" font-family="Outfit, sans-serif" font-weight="600">θ</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the base angle $\\theta$ of the isosceles triangle below, correct to the nearest minute.<br/>${q13fSvg_}`,
  options: [{ text: '$69°31\'$', imageUrl: '' }, { text: '$69°30\'$', imageUrl: '' }, { text: '$20°29\'$', imageUrl: '' }, { text: '$70°00\'$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Form a right-angled triangle**
By dropping a vertical altitude from the top vertex, we bisect the base of length $14$ into two segments of:
$$\\text{Half-Base} = \\frac{14}{2} = 7$$

**Step 2: Focus on one half of the triangle**
Relative to the base angle $\\theta$:
- **Adjacent side** $= 7$
- **Hypotenuse** (equal side) $= 20$

**Step 3: Set up the cosine ratio**
$$\\cos \\theta = \\frac{7}{20} = 0.35$$

**Step 4: Solve for $\\theta$**
$$\\theta = \\cos^{-1}(0.35) \\approx 69.51268^\\circ$$
$$\\text{Minutes} = 0.51268 \\times 60 = 30.76'$$

**Step 5: Round to the nearest minute**
$$\\theta \\approx 69^\\circ 31'$$`
});

// ========================================================
// QUESTION 14: Unit Circle Challenge (2 questions)
// ========================================================
const q14aSvg_ = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <circle cx="100" cy="110" r="70" fill="none" stroke="#60a5fa" stroke-width="2" />
  <line x1="30" y1="110" x2="200" y2="110" stroke="#f8fafc" stroke-width="1.5" />
  <line x1="100" y1="40" x2="100" y2="180" stroke="#f8fafc" stroke-width="1.5" />
  <line x1="100" y1="110" x2="154" y2="65" stroke="#fbbf24" stroke-width="2.5" />
  <line x1="154" y1="65" x2="154" y2="110" stroke="#a78bfa" stroke-dasharray="3 3" stroke-width="2" />
  <line x1="100" y1="110" x2="170" y2="110" stroke="#fbbf24" stroke-width="2.5" />
  <line x1="170" y1="110" x2="170" y2="52" stroke="#34d399" stroke-width="2.5" />
  <line x1="100" y1="110" x2="170" y2="52" stroke="#fbbf24" stroke-width="2" />
  <text x="90" y="125" fill="#f8fafc" font-size="14" font-family="Outfit, sans-serif" font-weight="600">O</text>
  <text x="175" y="125" fill="#f8fafc" font-size="14" font-family="Outfit, sans-serif" font-weight="600">T</text>
  <text x="175" y="45" fill="#f8fafc" font-size="14" font-family="Outfit, sans-serif" font-weight="600">P</text>
  <path d="M 120 110 A 20 20 0 0 0 116 97" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="122" y="105" fill="#fbbf24" font-size="14" font-family="Outfit, sans-serif" font-weight="600">θ</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `In the unit circle diagram below (radius $1$), a tangent line is drawn from $T(1,0)$ up to $P$ where it meets the extended ray $OP$. Prove the relationship for the length of $TP$ and the length of $OP$.<br/>${q14aSvg_}`,
  options: [
    { text: '$TP = \\tan \\theta$ and $OP = \\sec \\theta$', imageUrl: '' },
    { text: '$TP = \\sin \\theta$ and $OP = \\cos \\theta$', imageUrl: '' },
    { text: '$TP = \\cot \\theta$ and $OP = \\csc \\theta$', imageUrl: '' },
    { text: '$TP = \\sec \\theta$ and $OP = \\tan \\theta$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Proof

**Step 1: Observe the right-angled triangle $\\triangle OTP$**
- Since $PT$ is tangent to the circle at $T(1,0)$, the radius $OT$ is perpendicular to the tangent $PT$.
- Therefore, $\\angle OTP = 90^\\circ$.

**Step 2: Relate the sides of $\\triangle OTP$**
- The radius $OT = 1$ (adjacent to $\\theta$).
- The tangent segment $TP$ is the side opposite to $\\theta$.
- The line segment $OP$ is the hypotenuse.

**Step 3: Derive $TP = \\tan \\theta$**
$$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{TP}{OT} = \\frac{TP}{1} \\implies TP = \\tan \\theta$$

**Step 4: Derive $OP = \\sec \\theta$**
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{OT}{OP} = \\frac{1}{OP} \\implies OP = \\frac{1}{\\cos \\theta} = \\sec \\theta$$

**Result:**
$$TP = \\tan \\theta \\text{ and } OP = \\sec \\theta$$`
});

const q14bSvg_ = `<svg width="240" height="200" viewBox="0 0 240 200" style="background:#0f172a; border-radius:12px; margin: 10px auto; display:block;">
  <circle cx="120" cy="110" r="70" fill="none" stroke="#60a5fa" stroke-width="2" />
  <line x1="120" y1="110" x2="60" y2="145" stroke="#fbbf24" stroke-width="2" />
  <line x1="120" y1="110" x2="180" y2="145" stroke="#fbbf24" stroke-width="2" />
  <line x1="60" y1="145" x2="180" y2="145" stroke="#34d399" stroke-width="2" />
  <line x1="120" y1="110" x2="120" y2="145" stroke="#ef4444" stroke-dasharray="3 3" stroke-width="2" />
  
  <text x="120" y="100" fill="#f8fafc" font-size="14" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">O</text>
  <text x="50" y="155" fill="#f8fafc" font-size="14" font-family="Outfit, sans-serif" font-weight="600">A</text>
  <text x="185" y="155" fill="#f8fafc" font-size="14" font-family="Outfit, sans-serif" font-weight="600">B</text>
  <text x="120" y="160" fill="#f8fafc" font-size="14" font-family="Outfit, sans-serif" font-weight="600" text-anchor="middle">M</text>
  
  <path d="M 120 110 A 30 30 0 0 0 96 124" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="105" y="130" fill="#fbbf24" font-size="13" font-family="Outfit, sans-serif" font-weight="600">θ</text>
  
  <path d="M 120 110 A 30 30 0 0 1 144 124" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="128" y="130" fill="#fbbf24" font-size="13" font-family="Outfit, sans-serif" font-weight="600">θ</text>
</svg>`;

trigQuestions.push({
  chapterId: 'y11a-6', chapterTitle: 'Chapter 6: Trigonometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-6A', topicCode: '6A', topicTitle: 'Trigonometry with right-angled triangles', difficulty: 'medium', type: 'multiple_choice',
  question: `In a unit circle of radius $1$, a chord $AB$ subtends an angle of $2\\theta$ at the center $O$. If $OM$ is the perpendicular bisector of $AB$, show that the length of the semi-chord $AM$ is equal to $\\sin \\theta$.<br/>${q14bSvg_}`,
  options: [
    { text: '$AM = \\sin \\theta$', imageUrl: '' },
    { text: '$AM = \\cos \\theta$', imageUrl: '' },
    { text: '$AM = \\tan \\theta$', imageUrl: '' },
    { text: '$AM = \\csc \\theta$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Proof

**Step 1: Understand the symmetry of the construction**
- $OM$ is drawn perpendicular to $AB$.
- In the isosceles triangle $\\triangle OAB$ (since $OA = OB = 1$ are radii), the altitude $OM$ bisects the vertex angle $\\angle AOB = 2\\theta$.
- Thus:
$$\\angle AOM = \\angle BOM = \\theta$$

**Step 2: Analyze the right-angled triangle $\\triangle OMA$**
- The hypotenuse is the radius $OA = 1$.
- The side opposite to the angle $\\angle AOM = \\theta$ is the semi-chord $AM$.

**Step 3: Formulate the sine ratio**
$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{AM}{OA}$$

**Step 4: Substitute $OA = 1$**
$$\\sin \\theta = \\frac{AM}{1} \\implies AM = \\sin \\theta$$

**Result:**
$$AM = \\sin \\theta$$`
});


// ========================================================
// WRITE importYear11AdvCh5.js (Restored 11 Questions)
// ========================================================
const outputCh5 = `import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-5',
  chapterTitle: 'Chapter 5: Transformations and symmetry',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

export const questions5A = ${JSON.stringify(originalQuestions, null, 2)};

export const importYear11AdvCh5 = async (forceReset = false) => {
  console.log(\`Starting restored sync of Y11 Adv Ch5A (Total \${questions5A.length})...\\nChapter: Transformations and symmetry\`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), 
      where('chapterId', '==', 'y11a-5'),
      where('topicCode', '==', '5A')
    ));
    
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(\`Cleared \${qSnap.size} old questions under chapter y11a-5, topicCode 5A.\`);

    let count = 0;
    for (const q of questions5A) {
        await addDoc(collection(db, 'questions'), { 
          ...q, 
          createdAt: serverTimestamp(), 
          updatedAt: serverTimestamp(), 
          isActive: true 
        });
        count++;
    }
    console.log(\`Successfully imported \${count} questions.\`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
`;

fs.writeFileSync('src/scripts/importYear11AdvCh5.js', outputCh5);
console.log('Successfully restored importYear11AdvCh5.js to original 11 questions!');


// ========================================================
// WRITE importYear11AdvCh6.js (35 Trig Questions)
// ========================================================
const outputCh6 = `import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-6',
  chapterTitle: 'Chapter 6: Trigonometry',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

export const questions6A = ${JSON.stringify(trigQuestions, null, 2)};

export const importYear11AdvCh6 = async (forceReset = false) => {
  console.log(\`Starting sync of Y11 Adv Ch6A (Total \${questions6A.length})...\` + '\\n' + \`Chapter: Trigonometry\`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), 
      where('chapterId', '==', 'y11a-6'),
      where('topicCode', '==', '6A')
    ));
    
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(\`Cleared \${qSnap.size} old questions under chapter y11a-6, topicCode 6A.\`);

    let count = 0;
    for (const q of questions6A) {
        await addDoc(collection(db, 'questions'), { 
          ...q, 
          createdAt: serverTimestamp(), 
          updatedAt: serverTimestamp(), 
          isActive: true 
        });
        count++;
    }
    console.log(\`Successfully imported \${count} questions.\`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
`;

fs.writeFileSync('src/scripts/importYear11AdvCh6.js', outputCh6);
console.log('Successfully generated importYear11AdvCh6.js with 35 trigonometry questions!');

// Write pure JSON to avoid ESM import resolution issues in raw Node scripts
fs.writeFileSync('scratch/questions5A.json', JSON.stringify(originalQuestions, null, 2));
fs.writeFileSync('scratch/questions6A.json', JSON.stringify(trigQuestions, null, 2));
console.log('Successfully wrote raw JSON files to scratch/ for ESM-safe loading!');
