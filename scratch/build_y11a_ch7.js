import fs from 'fs';

console.log('Generating 47 Coordinate Geometry questions (Easy, Medium & Hard) for Year 11 Chapter 7A...');

const questions7A = [];

// ========================================================
// [EASY] Q1: Midpoint of each line segment AB (6 questions)
// ========================================================
const q1Data = [
  { a: [5, 7], b: [1, 11], ans: '(3, 9)', opt: ['(3, 9)', '(3, 18)', '(6, 9)', '(2, 8)'], id: 'a' },
  { a: [2, 10], b: [8, 4], ans: '(5, 7)', opt: ['(5, 7)', '(6, 6)', '(5, 6)', '(10, 14)'], id: 'b' },
  { a: [-6, 5], b: [10, -9], ans: '(2, -2)', opt: ['(2, -2)', '(2, -7)', '(4, -4)', '(-8, 7)'], id: 'c' },
  { a: [-5, 8], b: [5, 3], ans: '(0, 5.5)', opt: ['(0, 5.5)', '(0, 5)', '(0, 11)', '(5, 5.5)'], id: 'd' },
  { a: [0, -6], b: [-9, -14], ans: '(-4.5, -10)', opt: ['(-4.5, -10)', '(-9, -20)', '(-4.5, -20)', '(-4, -10)'], id: 'e' },
  { a: [6, -9], b: [6, 9], ans: '(6, 0)', opt: ['(6, 0)', '(0, 0)', '(6, -9)', '(12, 0)'], id: 'f' }
];

q1Data.forEach((d, idx) => {
  questions7A.push({
    chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
    question: `Find the midpoint of the line segment $AB$ joining the points $A(${d.a[0]}, ${d.a[1]})$ and $B(${d.b[0]}, ${d.b[1]})$.`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: State the midpoint formula**
$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

**Step 2: Assign variables to the coordinates**
- Point $A(${d.a[0]}, ${d.a[1]}) \\implies (x_1, y_1)$
- Point $B(${d.b[0]}, ${d.b[1]}) \\implies (x_2, y_2)$

**Step 3: Substitute the coordinates into the formula**
- **x-coordinate**:
  $$x = \\frac{${d.a[0]} + ${d.b[0]}}{2} = \\frac{${d.a[0] + d.b[0]}}{2} = ${((d.a[0]+d.b[0])/2)}$$
- **y-coordinate**:
  $$y = \\frac{${d.a[1]} + ${d.b[1]}}{2} = \\frac{${d.a[1] + d.b[1]}}{2} = ${((d.a[1]+d.b[1])/2)}$$

**Step 4: Combine the coordinates**
$$\\text{Midpoint} = ${d.ans}$$`
  });
});

// ========================================================
// [EASY] Q2: Length of each line segment AB (6 questions)
// ========================================================
const q2Data = [
  { a: [2, 5], b: [6, 2], ans: '5', opt: ['5', '25', '\\sqrt{7}', '\\sqrt{13}'], id: 'a', rational: true },
  { a: [-3, 8], b: [2, -4], ans: '13', opt: ['13', '169', '12', '\\sqrt{145}'], id: 'b', rational: true },
  { a: [-6, -3], b: [2, 3], ans: '10', opt: ['10', '100', '8', '\\sqrt{52}'], id: 'c', rational: true },
  { a: [4, 7], b: [6, 5], ans: '2\\sqrt{2}', opt: ['2\\sqrt{2}', '\\sqrt{8}', '4', '2'], id: 'd', rational: false, surd: '\\sqrt{8} = 2\\sqrt{2}' },
  { a: [-5, -2], b: [3, 2], ans: '4\\sqrt{5}', opt: ['4\\sqrt{5}', '\\sqrt{80}', '8', '10'], id: 'e', rational: false, surd: '\\sqrt{80} = 4\\sqrt{5}' },
  { a: [8, -15], b: [0, 0], ans: '17', opt: ['17', '289', '15', '13'], id: 'f', rational: true }
];

q2Data.forEach((d, idx) => {
  questions7A.push({
    chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
    topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
    question: `Find the exact length of the line segment joining the points $A(${d.a[0]}, ${d.a[1]})$ and $B(${d.b[0]}, ${d.b[1]})$.`,
    options: d.opt.map(o => ({ text: `$${o}$`, imageUrl: '' })),
    answer: "0",
    solution: `### Step-by-Step Solution

**Step 1: State the distance formula**
$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Step 2: Identify variables**
- $x_1 = ${d.a[0]}, \\ y_1 = ${d.a[1]}$
- $x_2 = ${d.b[0]}, \\ y_2 = ${d.b[1]}$

**Step 3: Substitute the coordinates**
$$AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$
$$AB^2 = (${d.b[0]} - (${d.a[0]}))^2 + (${d.b[1]} - (${d.a[1]}))^2$$
$$AB^2 = (${d.b[0] - d.a[0]})^2 + (${d.b[1] - d.a[1]})^2$$
$$AB^2 = ${Math.pow(d.b[0] - d.a[0], 2)} + ${Math.pow(d.b[1] - d.a[1], 2)}$$
$$AB^2 = ${Math.pow(d.b[0] - d.a[0], 2) + Math.pow(d.b[1] - d.a[1], 2)}$$

**Step 4: Take the square root**
$$AB = \\sqrt{${Math.pow(d.b[0] - d.a[0], 2) + Math.pow(d.b[1] - d.a[1], 2)}}$$
$$AB = ${d.ans}$$`
  });
});

// ========================================================
// [EASY] Q3: Midpoint and Length Verification (2 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
  question: `Find the midpoint $M$ of the line segment joining the points $P(-4, 2)$ and $Q(8, 18)$.`,
  options: [{ text: '$(2, 10)$', imageUrl: '' }, { text: '$(4, 10)$', imageUrl: '' }, { text: '$(2, 8)$', imageUrl: '' }, { text: '$(6, 20)$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Apply the midpoint formula**
$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

**Step 2: Plug in coordinates of $P(-4, 2)$ and $Q(8, 18)$**
$$x = \\frac{-4 + 8}{2} = \\frac{4}{2} = 2$$
$$y = \\frac{2 + 18}{2} = \\frac{20}{2} = 10$$

**Step 3: State the final coordinates**
$$M = (2, 10)$$`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
  question: `For the points $P(-4, 2)$ and $Q(8, 18)$, find the lengths of segments $PM$ and $MQ$ where $M(2, 10)$ is the midpoint, and verify their relationship.`,
  options: [
    { text: '$PM = MQ = 10$', imageUrl: '' },
    { text: '$PM = 8, \\ MQ = 12$', imageUrl: '' },
    { text: '$PM = MQ = \\sqrt{50}$', imageUrl: '' },
    { text: '$PM = MQ = 20$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate the length of $PM$ using the distance formula**
For $P(-4, 2)$ and $M(2, 10)$:
$$PM = \\sqrt{(2 - (-4))^2 + (10 - 2)^2}$$
$$PM = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$

**Step 2: Calculate the length of $MQ$**
For $M(2, 10)$ and $Q(8, 18)$:
$$MQ = \\sqrt{(8 - 2)^2 + (18 - 10)^2}$$
$$MQ = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$

**Step 3: Compare both lengths**
Since both calculations yield $10$, we have:
$$PM = MQ = 10$$`
});

// ========================================================
// [EASY] Q4: Triangle Sides and Isosceles Classification (2 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
  question: `Find the exact side lengths of the triangle formed by the vertices $P(0, 2)$, $Q(1, 6)$ and $R(5, 7)$.`,
  options: [
    { text: '$PQ = \\sqrt{17}, \\ QR = \\sqrt{17}, \\ PR = 5\\sqrt{2}$', imageUrl: '' },
    { text: '$PQ = 17, \\ QR = 17, \\ PR = 50$', imageUrl: '' },
    { text: '$PQ = \\sqrt{13}, \\ QR = \\sqrt{13}, \\ PR = 5$', imageUrl: '' },
    { text: '$PQ = \\sqrt{17}, \\ QR = \\sqrt{13}, \\ PR = 5\\sqrt{2}$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate $PQ$ using points $P(0, 2)$ and $Q(1, 6)$**
$$PQ = \\sqrt{(1 - 0)^2 + (6 - 2)^2} = \\sqrt{1^2 + 4^2} = \\sqrt{1 + 16} = \\sqrt{17}$$

**Step 2: Calculate $QR$ using points $Q(1, 6)$ and $R(5, 7)$**
$$QR = \\sqrt{(5 - 1)^2 + (7 - 6)^2} = \\sqrt{4^2 + 1^2} = \\sqrt{16 + 1} = \\sqrt{17}$$

**Step 3: Calculate $PR$ using points $P(0, 2)$ and $R(5, 7)$**
$$PR = \\sqrt{(5 - 0)^2 + (7 - 2)^2} = \\sqrt{5^2 + 5^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}$$

**Step 4: Summarize the results**
- $PQ = \\sqrt{17}$
- $QR = \\sqrt{17}$
- $PR = 5\\sqrt{2}$`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
  question: `By examining the side lengths of the triangle formed by $P(0, 2)$, $Q(1, 6)$ and $R(5, 7)$, classify the triangle $\\Delta PQR$.`,
  options: [
    { text: 'Isosceles triangle', imageUrl: '' },
    { text: 'Scalene triangle', imageUrl: '' },
    { text: 'Equilateral triangle', imageUrl: '' },
    { text: 'Right-angled scalene triangle', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Retrieve side lengths**
From our previous calculations, we found:
- $PQ = \\sqrt{17}$
- $QR = \\sqrt{17}$
- $PR = 5\\sqrt{2}$

**Step 2: Compare the side lengths**
Since $PQ = QR = \\sqrt{17}$ (two sides are equal) and $PR \\neq \\sqrt{17}$ (the third side is different):
$$\\text{Two sides are equal in length.}$$

**Step 3: Classify the triangle**
A triangle with two equal sides is defined as an **isosceles** triangle.`
});

// ========================================================
// [EASY] Q5: Triangle Sides and Right-Angled Check (2 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
  question: `Find the exact side lengths of the triangle $\\Delta ABC$ with vertices $A(0, 0)$, $B(18, 24)$ and $C(50, 0)$.`,
  options: [
    { text: '$AB = 30, \\ BC = 40, \\ AC = 50$', imageUrl: '' },
    { text: '$AB = 18, \\ BC = 32, \\ AC = 50$', imageUrl: '' },
    { text: '$AB = 24, \\ BC = 30, \\ AC = 40$', imageUrl: '' },
    { text: '$AB = 30, \\ BC = 30, \\ AC = 50$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate $AB$ using $A(0, 0)$ and $B(18, 24)$**
$$AB = \\sqrt{(18 - 0)^2 + (24 - 0)^2} = \\sqrt{18^2 + 24^2}$$
$$AB = \\sqrt{324 + 576} = \\sqrt{900} = 30$$

**Step 2: Calculate $BC$ using $B(18, 24)$ and $C(50, 0)$**
$$BC = \\sqrt{(50 - 18)^2 + (0 - 24)^2} = \\sqrt{32^2 + (-24)^2}$$
$$BC = \\sqrt{1024 + 576} = \\sqrt{1600} = 40$$

**Step 3: Calculate $AC$ using $A(0, 0)$ and $C(50, 0)$**
Since both points lie on the x-axis:
$$AC = |50 - 0| = 50$$

**Step 4: Summarize lengths**
- $AB = 30$
- $BC = 40$
- $AC = 50$`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
  question: `Show that the triangle $\\Delta ABC$ with vertices $A(0, 0)$, $B(18, 24)$ and $C(50, 0)$ is right-angled.`,
  options: [
    { text: 'Yes, because $AB^2 + BC^2 = AC^2$ ($30^2 + 40^2 = 50^2$)', imageUrl: '' },
    { text: 'No, because $AB^2 + BC^2 \\neq AC^2$', imageUrl: '' },
    { text: 'Yes, because $AB = BC$', imageUrl: '' },
    { text: 'Yes, because angle $A$ is $90^\\circ$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Retrieve side lengths**
From our previous computations:
- $AB = 30$
- $BC = 40$
- $AC = 50$

**Step 2: Apply the converse of Pythagoras\' theorem**
For $\\Delta ABC$ to be right-angled with hypotenuse $AC$, it must satisfy:
$$AB^2 + BC^2 = AC^2$$

**Step 3: Calculate the squares of the sides**
- Left side:
  $$AB^2 + BC^2 = 30^2 + 40^2 = 900 + 1600 = 2500$$
- Right side:
  $$AC^2 = 50^2 = 2500$$

**Step 4: Draw conclusion**
Since $2500 = 2500$, the equation $AB^2 + BC^2 = AC^2$ holds true. By the converse of Pythagoras\' theorem, $\\Delta ABC$ is a right-angled triangle with the right angle at vertex $B$.`
});

// ========================================================
// [EASY] Q6: Triangle Side Lengths and Midpoints (2 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
  question: `Find the exact side lengths of the triangle $\\Delta ABC$ formed by the vertices $A(0, 6)$, $B(4, -1)$ and $C(-4, 5)$.`,
  options: [
    { text: '$AB = \\sqrt{65}, \\ BC = 10, \\ AC = \\sqrt{17}$', imageUrl: '' },
    { text: '$AB = \\sqrt{65}, \\ BC = \\sqrt{80}, \\ AC = \\sqrt{17}$', imageUrl: '' },
    { text: '$AB = 8, \\ BC = 10, \\ AC = 4$', imageUrl: '' },
    { text: '$AB = \\sqrt{17}, \\ BC = 10, \\ AC = \\sqrt{65}$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate $AB$ using $A(0, 6)$ and $B(4, -1)$**
$$AB = \\sqrt{(4 - 0)^2 + (-1 - 6)^2} = \\sqrt{4^2 + (-7)^2} = \\sqrt{16 + 49} = \\sqrt{65}$$

**Step 2: Calculate $BC$ using $B(4, -1)$ and $C(-4, 5)$**
$$BC = \\sqrt{(-4 - 4)^2 + (5 - (-1))^2} = \\sqrt{(-8)^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$$

**Step 3: Calculate $AC$ using $A(0, 6)$ and $C(-4, 5)$**
$$AC = \\sqrt{(-4 - 0)^2 + (5 - 6)^2} = \\sqrt{(-4)^2 + (-1)^2} = \\sqrt{16 + 1} = \\sqrt{17}$$

**Step 4: Summarize lengths**
- $AB = \\sqrt{65}$
- $BC = 10$
- $AC = \\sqrt{17}$`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'easy', type: 'multiple_choice',
  question: `Find the midpoints of the three sides $AB$, $BC$, and $AC$ of the triangle $\\Delta ABC$ formed by $A(0, 6)$, $B(4, -1)$ and $C(-4, 5)$.`,
  options: [
    { text: 'Midpoints: $AB(2, 2.5), \\ BC(0, 2), \\ AC(-2, 5.5)$', imageUrl: '' },
    { text: 'Midpoints: $AB(2, 3.5), \\ BC(0, 2), \\ AC(-2, 5.5)$', imageUrl: '' },
    { text: 'Midpoints: $AB(2, 2.5), \\ BC(0, 3), \\ AC(-2, 1)$', imageUrl: '' },
    { text: 'Midpoints: $AB(4, 5), \\ BC(0, 4), \\ AC(-4, 11)$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate midpoint of side $AB$ using $A(0, 6)$ and $B(4, -1)$**
$$M_{AB} = \\left(\\frac{0 + 4}{2}, \\frac{6 + (-1)}{2}\\right) = \\left(2, \\frac{5}{2}\\right) = (2, 2.5)$$

**Step 2: Calculate midpoint of side $BC$ using $B(4, -1)$ and $C(-4, 5)$**
$$M_{BC} = \\left(\\frac{4 + (-4)}{2}, \\frac{-1 + 5}{2}\\right) = \\left(0, \\frac{4}{2}\\right) = (0, 2)$$

**Step 3: Calculate midpoint of side $AC$ using $A(0, 6)$ and $C(-4, 5)$**
$$M_{AC} = \\left(\\frac{0 + (-4)}{2}, \\frac{6 + 5}{2}\\right) = \\left(-2, \\frac{11}{2}\\right) = (-2, 5.5)$$

**Step 4: Summarize midpoints**
- Midpoint of $AB$: $(2, 2.5)$
- Midpoint of $BC$: $(0, 2)$
- Midpoint of $AC$: $(-2, 5.5)$`
});


// ========================================================
// [MEDIUM] Q7: Circles, Radii and Centers (4 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `A circle with center $O(0, 0)$ passes through the point $A(8, 15)$. What is its radius?`,
  options: [{ text: '$17$', imageUrl: '' }, { text: '$289$', imageUrl: '' }, { text: '$15$', imageUrl: '' }, { text: '$\\sqrt{23}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Use the distance formula from the origin**
The radius is the distance from $O(0, 0)$ to $A(8, 15)$:
$$r = \\sqrt{(x - 0)^2 + (y - 0)^2} = \\sqrt{x^2 + y^2}$$

**Step 2: Plug in the coordinates**
$$r = \\sqrt{8^2 + 15^2}$$
$$r = \\sqrt{64 + 225}$$
$$r = \\sqrt{289} = 17$$

**Step 3: State the final radius**
The radius of the circle is $17$ units.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `A circle with center $B(5, 12)$ passes through the origin $O(0,0)$. What is its radius?`,
  options: [{ text: '$13$', imageUrl: '' }, { text: '$169$', imageUrl: '' }, { text: '$12$', imageUrl: '' }, { text: '$\\sqrt{17}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Use the distance formula from the origin**
The radius is the distance from $B(5, 12)$ to $O(0,0)$:
$$r = \\sqrt{(5 - 0)^2 + (12 - 0)^2} = \\sqrt{5^2 + 12^2}$$

**Step 2: Evaluate the sum of squares**
$$r = \\sqrt{25 + 144}$$
$$r = \\sqrt{169} = 13$$

**Step 3: State the final radius**
The radius is $13$ units.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the coordinates of the center of a circle with diameter $CD$, where $C(4, 3)$ and $D(10, -5)$.`,
  options: [{ text: '$(7, -1)$', imageUrl: '' }, { text: '$(3, -4)$', imageUrl: '' }, { text: '$(14, -2)$', imageUrl: '' }, { text: '$(7, -2)$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Understand diameter and center relationship**
The center of the circle is the **midpoint** of the diameter $CD$.

**Step 2: Apply the midpoint formula**
$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

**Step 3: Substitute the endpoints $C(4, 3)$ and $D(10, -5)$**
$$x = \\frac{4 + 10}{2} = \\frac{14}{2} = 7$$
$$y = \\frac{3 + (-5)}{2} = \\frac{-2}{2} = -1$$

**Step 4: Combine coordinates**
The center is $(7, -1)$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Determine if the point $E(-8, -15)$ lies on the circle with center at the origin $O(0,0)$ and radius $17$.`,
  options: [
    { text: 'Yes, because the distance $OE = 17$', imageUrl: '' },
    { text: 'No, because the distance $OE = 23$', imageUrl: '' },
    { text: 'No, because the distance $OE = \\sqrt{161}$', imageUrl: '' },
    { text: 'Yes, because $E$ lies on the x-axis', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Understand the condition for a point to lie on a circle**
A point lies on a circle if its distance from the center is exactly equal to the radius ($17$).

**Step 2: Calculate the distance from $O(0,0)$ to $E(-8, -15)$**
$$OE = \\sqrt{(-8 - 0)^2 + (-15 - 0)^2}$$
$$OE = \\sqrt{(-8)^2 + (-15)^2}$$
$$OE = \\sqrt{64 + 225}$$
$$OE = \\sqrt{289} = 17$$

**Step 3: Compare with the radius**
Since $OE = 17$, the distance is exactly equal to the radius. Therefore, the point $E$ lies on the circle.`
});

// ========================================================
// [MEDIUM] Q8: Diagonals Bisect - Parallelogram Check (3 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the midpoint of the line segment $AC$ joining the vertices $A(5, 10)$ and $C(-1, 2)$ of the quadrilateral $ABCD$.`,
  options: [{ text: '$(2, 6)$', imageUrl: '' }, { text: '$(3, 6)$', imageUrl: '' }, { text: '$(2, 4)$', imageUrl: '' }, { text: '$(4, 12)$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Apply the midpoint formula**
$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

**Step 2: Plug in $A(5, 10)$ and $C(-1, 2)$**
$$x = \\frac{5 + (-1)}{2} = \\frac{4}{2} = 2$$
$$y = \\frac{10 + 2}{2} = \\frac{12}{2} = 6$$

**Step 3: State the final coordinates**
The midpoint of $AC$ is $(2, 6)$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the midpoint of the line segment $BD$ joining the vertices $B(1, 4)$ and $D(3, 8)$ of the quadrilateral $ABCD$.`,
  options: [{ text: '$(2, 6)$', imageUrl: '' }, { text: '$(1.5, 6)$', imageUrl: '' }, { text: '$(2, 8)$', imageUrl: '' }, { text: '$(4, 12)$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Apply the midpoint formula**
$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

**Step 2: Plug in $B(1, 4)$ and $D(3, 8)$**
$$x = \\frac{1 + 3}{2} = \\frac{4}{2} = 2$$
$$y = \\frac{4 + 8}{2} = \\frac{12}{2} = 6$$

**Step 3: State the final coordinates**
The midpoint of $BD$ is $(2, 6)$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Given that the midpoints of diagonals $AC$ and $BD$ of the quadrilateral $ABCD$ are both $(2, 6)$, what geometric conclusion can you draw about the quadrilateral?`,
  options: [
    { text: 'It is a parallelogram because its diagonals bisect each other.', imageUrl: '' },
    { text: 'It is a trapezoid because only two sides are parallel.', imageUrl: '' },
    { text: 'It is a kite because adjacent sides are equal.', imageUrl: '' },
    { text: 'No conclusion can be made.', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Retrieve the diagonal midpoints**
- Midpoint of diagonal $AC = (2, 6)$
- Midpoint of diagonal $BD = (2, 6)$

**Step 2: Interpret the intersection**
Since both diagonals share the exact same midpoint, they intersect at their midpoints. This means the diagonals **bisect each other**.

**Step 3: Classify the shape**
By definition, a quadrilateral whose diagonals bisect each other is a **parallelogram**.`
});

// ========================================================
// [MEDIUM] Q9: Rhombus Verification (2 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the exact side lengths of the quadrilateral $ABCD$ with vertices $A(4, 3)$, $B(11, 4)$, $C(6, 9)$ and $D(-1, 8)$.`,
  options: [
    { text: '$AB = BC = CD = AD = 5\\sqrt{2}$', imageUrl: '' },
    { text: '$AB = BC = 5\\sqrt{2}, \\ CD = AD = 10$', imageUrl: '' },
    { text: '$AB = CD = 7, \\ BC = AD = 5$', imageUrl: '' },
    { text: '$AB = BC = CD = AD = 50$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate $AB$ using $A(4, 3)$ and $B(11, 4)$**
$$AB = \\sqrt{(11 - 4)^2 + (4 - 3)^2} = \\sqrt{7^2 + 1^2} = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2}$$

**Step 2: Calculate $BC$ using $B(11, 4)$ and $C(6, 9)$**
$$BC = \\sqrt{(6 - 11)^2 + (9 - 4)^2} = \\sqrt{(-5)^2 + 5^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}$$

**Step 3: Calculate $CD$ using $C(6, 9)$ and $D(-1, 8)$**
$$CD = \\sqrt{(-1 - 6)^2 + (8 - 9)^2} = \\sqrt{(-7)^2 + (-1)^2} = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2}$$

**Step 4: Calculate $AD$ using $A(4, 3)$ and $D(-1, 8)$**
$$AD = \\sqrt{(-1 - 4)^2 + (8 - 3)^2} = \\sqrt{(-5)^2 + 5^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}$$

**Step 5: Conclude**
All 4 sides have the exact same length of $5\\sqrt{2}$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Based on the side lengths of the quadrilateral $ABCD$ with vertices $A(4, 3)$, $B(11, 4)$, $C(6, 9)$ and $D(-1, 8)$, classify the shape.`,
  options: [
    { text: 'Rhombus', imageUrl: '' },
    { text: 'Kite', imageUrl: '' },
    { text: 'Rectangle', imageUrl: '' },
    { text: 'Trapezium', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Retrieve side lengths**
From our previous computations:
- $AB = 5\\sqrt{2}$
- $BC = 5\\sqrt{2}$
- $CD = 5\\sqrt{2}$
- $AD = 5\\sqrt{2}$

**Step 2: Identify geometric characteristics**
All four sides of the quadrilateral are equal in length:
$$AB = BC = CD = AD = 5\\sqrt{2}$$

**Step 3: Draw class definition**
A quadrilateral with four equal sides is defined as a **rhombus**.`
});

// ========================================================
// [MEDIUM] Q10: Right-Angled Isosceles Triangle & Area (3 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the exact side lengths of the triangle with vertices $X(2, -2)$, $Y(6, 4)$ and $Z(0, 8)$.`,
  options: [
    { text: '$XY = \\sqrt{52}, \\ YZ = \\sqrt{52}, \\ XZ = \\sqrt{104}$', imageUrl: '' },
    { text: '$XY = 52, \\ YZ = 52, \\ XZ = 104$', imageUrl: '' },
    { text: '$XY = \\sqrt{20}, \\ YZ = \\sqrt{20}, \\ XZ = 4\\sqrt{5}$', imageUrl: '' },
    { text: '$XY = \\sqrt{52}, \\ YZ = \\sqrt{40}, \\ XZ = 10$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate $XY$ using $X(2, -2)$ and $Y(6, 4)$**
$$XY = \\sqrt{(6 - 2)^2 + (4 - (-2))^2} = \\sqrt{4^2 + 6^2} = \\sqrt{16 + 36} = \\sqrt{52}$$

**Step 2: Calculate $YZ$ using $Y(6, 4)$ and $Z(0, 8)$**
$$YZ = \\sqrt{(0 - 6)^2 + (8 - 4)^2} = \\sqrt{(-6)^2 + 4^2} = \\sqrt{36 + 16} = \\sqrt{52}$$

**Step 3: Calculate $XZ$ using $X(2, -2)$ and $Z(0, 8)$**
$$XZ = \\sqrt{(0 - 2)^2 + (8 - (-2))^2} = \\sqrt{(-2)^2 + 10^2} = \\sqrt{4 + 100} = \\sqrt{104}$$

**Step 4: Summarize exact lengths**
- $XY = \\sqrt{52}$
- $YZ = \\sqrt{52}$
- $XZ = \\sqrt{104} = 2\\sqrt{26}$`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Show that the triangle $\\Delta XYZ$ with vertices $X(2, -2)$, $Y(6, 4)$ and $Z(0, 8)$ is a right-angled isosceles triangle.`,
  options: [
    { text: 'Yes, because $XY = YZ = \\sqrt{52}$ and $XY^2 + YZ^2 = XZ^2$ ($52 + 52 = 104$)', imageUrl: '' },
    { text: 'No, because $XY^2 + YZ^2 \\neq XZ^2$', imageUrl: '' },
    { text: 'Yes, but it is scalene, not isosceles.', imageUrl: '' },
    { text: 'Yes, because all sides are equilateral.', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Check if the triangle is isosceles**
Since the side lengths are $XY = \\sqrt{52}$, $YZ = \\sqrt{52}$ and $XZ = \\sqrt{104}$:
$$XY = YZ = \\sqrt{52}$$
Because two sides are equal in length, the triangle is **isosceles**.

**Step 2: Check if the triangle satisfies Pythagoras\' theorem**
For the right angle to be at vertex $Y$, we must satisfy:
$$XY^2 + YZ^2 = XZ^2$$
Substitute the squares of the side lengths:
$$(\\sqrt{52})^2 + (\\sqrt{52})^2 = 52 + 52 = 104$$
$$XZ^2 = (\\sqrt{104})^2 = 104$$
Since $104 = 104$, Pythagoras\' theorem is satisfied, meaning $\\Delta XYZ$ is right-angled at $Y$.

**Step 3: Combine both properties**
Therefore, $\\Delta XYZ$ is a **right-angled isosceles triangle**.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the area of the right-angled isosceles triangle $\\Delta XYZ$ with vertices $X(2, -2)$, $Y(6, 4)$ and $Z(0, 8)$.`,
  options: [{ text: '$26$', imageUrl: '' }, { text: '$52$', imageUrl: '' }, { text: '$13$', imageUrl: '' }, { text: '$26\\sqrt{2}$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify base and height**
Since $\\Delta XYZ$ is right-angled at vertex $Y$, the two perpendicular sides forming the right angle are the base and height:
- $\\text{Base} = XY = \\sqrt{52}$
- $\\text{Height} = YZ = \\sqrt{52}$

**Step 2: Apply the triangle area formula**
$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$
$$\\text{Area} = \\frac{1}{2} \\times \\sqrt{52} \\times \\sqrt{52}$$

**Step 3: Evaluate the multiplication**
$$\\text{Area} = \\frac{1}{2} \\times 52 = 26$$

**Step 4: State the final area**
The area of the triangle is $26$ square units.`
});

// ========================================================
// [MEDIUM] Q11: Circle Concircular Points (2 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the distance of each of the points $A(1, 5)$, $B(3, \\sqrt{17})$, $C(4, \\sqrt{10})$ and $D(5, 1)$ from the origin $O(0,0)$ to show they lie on a circle with center at the origin.`,
  options: [
    { text: '$OA = OB = OC = OD = \\sqrt{26}$', imageUrl: '' },
    { text: '$OA = OB = OC = OD = 26$', imageUrl: '' },
    { text: '$OA = 5, \\ OB = 17, \\ OC = 10, \\ OD = 5$', imageUrl: '' },
    { text: 'The distances are unequal.', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate distance of $A(1, 5)$ from $O(0,0)$**
$$OA = \\sqrt{1^2 + 5^2} = \\sqrt{1 + 25} = \\sqrt{26}$$

**Step 2: Calculate distance of $B(3, \\sqrt{17})$ from $O(0,0)$**
$$OB = \\sqrt{3^2 + (\\sqrt{17})^2} = \\sqrt{9 + 17} = \\sqrt{26}$$

**Step 3: Calculate distance of $C(4, \\sqrt{10})$ from $O(0,0)$**
$$OC = \\sqrt{4^2 + (\\sqrt{10})^2} = \\sqrt{16 + 10} = \\sqrt{26}$$

**Step 4: Calculate distance of $D(5, 1)$ from $O(0,0)$**
$$OD = \\sqrt{5^2 + 1^2} = \\sqrt{25 + 1} = \\sqrt{26}$$

**Step 5: Conclude**
Since $OA = OB = OC = OD = \\sqrt{26}$ (all points are equidistant from the origin), they all lie on a circle centered at the origin with a radius of $\\sqrt{26}$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `What are the radius, diameter, circumference and area of the circle passing through points $A(1, 5)$, $B(3, \\sqrt{17})$, $C(4, \\sqrt{10})$ and $D(5, 1)$ with its center at the origin?`,
  options: [
    { text: '$r = \\sqrt{26}, \\ d = 2\\sqrt{26}, \\ C = 2\\pi\\sqrt{26}, \\ A = 26\\pi$', imageUrl: '' },
    { text: '$r = 26, \\ d = 52, \\ C = 52\\pi, \\ A = 676\\pi$', imageUrl: '' },
    { text: '$r = \\sqrt{26}, \\ d = 26, \\ C = 26\\pi, \\ A = 26\\pi$', imageUrl: '' },
    { text: '$r = 5, \\ d = 10, \\ C = 10\\pi, \\ A = 25\\pi$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Identify the radius ($r$)**
From our previous computations, the radius is the distance from the origin to any point:
$$r = \\sqrt{26}$$

**Step 2: Calculate the diameter ($d$)**
$$d = 2r = 2\\sqrt{26}$$

**Step 3: Calculate the circumference ($C$)**
$$C = 2\\pi r = 2\\pi\\sqrt{26}$$

**Step 4: Calculate the area ($A$)**
$$A = \\pi r^2 = \\pi (\\sqrt{26})^2 = 26\\pi$$

**Step 5: Summarize results**
- **Radius**: $\\sqrt{26}$
- **Diameter**: $2\\sqrt{26}$
- **Circumference**: $2\\pi\\sqrt{26}$
- **Area**: $26\\pi$`
});

// ========================================================
// [MEDIUM] Q12: Find Endpoints using Midpoint formula (1 question)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `The point $M(4, 9)$ is the midpoint of the line segment joining $A(2, 14)$ and $B(x_2, y_2)$. Find the coordinates $x_2$ and $y_2$ of $B$.`,
  options: [{ text: '$(6, 4)$', imageUrl: '' }, { text: '$(3, 11.5)$', imageUrl: '' }, { text: '$(6, 5)$', imageUrl: '' }, { text: '$(8, -2)$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: State the midpoint coordinate relations**
$$x_m = \\frac{x_1 + x_2}{2} \\quad \\text{and} \\quad y_m = \\frac{y_1 + y_2}{2}$$

**Step 2: Substitute known variables**
- $x_m = 4, \\ y_m = 9$
- $x_1 = 2, \\ y_1 = 14$

**Step 3: Solve for $x_2$**
$$4 = \\frac{2 + x_2}{2}$$
$$4 \\times 2 = 2 + x_2$$
$$8 = 2 + x_2 \\implies x_2 = 6$$

**Step 4: Solve for $y_2$**
$$9 = \\frac{14 + y_2}{2}$$
$$9 \\times 2 = 14 + y_2$$
$$18 = 14 + y_2 \\implies y_2 = 4$$

**Step 5: Write the coordinates of $B$**
The coordinates of $B$ are $(6, 4)$.`
});

// ========================================================
// [MEDIUM] Q13: Endpoints and Geometry Applications (4 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `If $A(-2, 3)$ is the midpoint of the line segment joining $S(x, y)$ and $T(4, 8)$, find the coordinates of $S$.`,
  options: [{ text: '$(-8, -2)$', imageUrl: '' }, { text: '$(1, 5.5)$', imageUrl: '' }, { text: '$(-6, -2)$', imageUrl: '' }, { text: '$(-8, -5)$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Use the midpoint formulas**
$$x_m = \\frac{x_s + x_t}{2} \\quad \\text{and} \\quad y_m = \\frac{y_s + y_t}{2}$$

**Step 2: Plug in $M(-2, 3)$ and $T(4, 8)$**
- **x-coordinate**:
  $$-2 = \\frac{x + 4}{2}$$
  $$-4 = x + 4 \\implies x = -8$$
- **y-coordinate**:
  $$3 = \\frac{y + 8}{2}$$
  $$6 = y + 8 \\implies y = -2$$

**Step 3: State the coordinates of $S$**
The coordinates of $S$ are $(-8, -2)$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `The midpoint of the line segment $PQ$ is $M(3, -5)$. Find the coordinates of $P$ if $Q = (6, 1)$.`,
  options: [{ text: '$(0, -11)$', imageUrl: '' }, { text: '$(0, -9)$', imageUrl: '' }, { text: '$(4.5, -2)$', imageUrl: '' }, { text: '$(9, -4)$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Use the midpoint formula**
$$x_m = \\frac{x_p + x_q}{2} \\quad \\text{and} \\quad y_m = \\frac{y_p + y_q}{2}$$

**Step 2: Plug in $M(3, -5)$ and $Q(6, 1)$**
- **x-coordinate**:
  $$3 = \\frac{x_p + 6}{2}$$
  $$6 = x_p + 6 \\implies x_p = 0$$
- **y-coordinate**:
  $$-5 = \\frac{y_p + 1}{2}$$
  $$-10 = y_p + 1 \\implies y_p = -11$$

**Step 3: State coordinates of $P$**
The coordinates of $P$ are $(0, -11)$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Find the coordinates of the endpoint $B$ of a circle diameter $AB$, given that the circle has center $Q(5, 6)$ and the other endpoint is $A(9, 4)$.`,
  options: [{ text: '$(1, 8)$', imageUrl: '' }, { text: '$(7, 5)$', imageUrl: '' }, { text: '$(1, 10)$', imageUrl: '' }, { text: '$(13, 2)$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Understand diameter midpoint relationship**
The center $Q(5, 6)$ is the midpoint of the diameter $AB$ joining $A(9, 4)$ and $B(x, y)$.

**Step 2: Use the midpoint formulas**
- **x-coordinate**:
  $$5 = \\frac{9 + x}{2}$$
  $$10 = 9 + x \\implies x = 1$$
- **y-coordinate**:
  $$6 = \\frac{4 + y}{2}$$
  $$12 = 4 + y \\implies y = 8$$

**Step 3: State the coordinates of $B$**
The opposite endpoint $B$ is $(1, 8)$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Given that $P(5, 8)$ is one vertex of the square $PQRS$, and the center of the square is $M(9, 0)$, find the coordinates of the opposite vertex $R$.`,
  options: [{ text: '$(13, -8)$', imageUrl: '' }, { text: '$(7, 4)$', imageUrl: '' }, { text: '$(13, -16)$', imageUrl: '' }, { text: '$(14, -8)$', imageUrl: '' }],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Understand geometry of diagonals in a square**
In a square $PQRS$, the diagonals bisect each other at the center $M$. Therefore, the center $M(9, 0)$ is the midpoint of diagonal $PR$.

**Step 2: Use the midpoint formulas for $P(5, 8)$ and $R(x, y)$**
- **x-coordinate**:
  $$9 = \\frac{5 + x}{2}$$
  $$18 = 5 + x \\implies x = 13$$
- **y-coordinate**:
  $$0 = \\frac{8 + y}{2}$$
  $$0 = 8 + y \\implies y = -8$$

**Step 3: State the coordinates of $R$**
The opposite vertex $R$ is $(13, -8)$.`
});

// ========================================================
// [MEDIUM] Q14: Challenge / Open-Ended (2 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Which of the following pairs of points $A$ and $B$ has a midpoint of exactly $M(5, 7)$?`,
  options: [
    { text: '$A(2, 4)$ and $B(8, 10)$', imageUrl: '' },
    { text: '$A(3, 5)$ and $B(9, 11)$', imageUrl: '' },
    { text: '$A(1, 3)$ and $B(7, 9)$', imageUrl: '' },
    { text: '$A(0, 0)$ and $B(5, 7)$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Test each coordinate option using the midpoint formula**
$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

**Step 2: Test Option 1: $A(2, 4)$ and $B(8, 10)$**
$$x = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$
$$y = \\frac{4 + 10}{2} = \\frac{14}{2} = 7$$
$$\\text{Midpoint} = (5, 7)$$
This matches perfectly!

**Step 3: Let\'s inspect other options for educational context**
- Option 2: Midpoint of $(3, 5)$ and $(9, 11)$ is $(6, 8)$.
- Option 3: Midpoint of $(1, 3)$ and $(7, 9)$ is $(4, 6)$.
- Option 4: Midpoint of $(0, 0)$ and $(5, 7)$ is $(2.5, 3.5)$.

**Step 4: Draw final conclusion**
Therefore, the correct pair of points is $A(2, 4)$ and $B(8, 10)$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'medium', type: 'multiple_choice',
  question: `Which of the following pairs of points $C$ and $D$ are exactly $13$ units apart?`,
  options: [
    { text: '$C(2, 3)$ and $D(7, 15)$', imageUrl: '' },
    { text: '$C(1, 1)$ and $D(4, 5)$', imageUrl: '' },
    { text: '$C(0, 2)$ and $D(6, 8)$', imageUrl: '' },
    { text: '$C(-1, -1)$ and $D(9, 9)$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: State the distance formula**
$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Step 2: Verify Option 1: $C(2, 3)$ and $D(7, 15)$**
$$d^2 = (7 - 2)^2 + (15 - 3)^2$$
$$d^2 = 5^2 + 12^2$$
$$d^2 = 25 + 144 = 169$$
$$d = \\sqrt{169} = 13$$
This is exactly $13$ units!

**Step 3: Evaluate other options**
- Option 2: distance $= \\sqrt{3^2 + 4^2} = 5$
- Option 3: distance $= \\sqrt{6^2 + 6^2} = 6\\sqrt{2}$
- Option 4: distance $= \\sqrt{10^2 + 10^2} = 10\\sqrt{2}$

**Step 4: Confirm final answer**
The correct pair of points is $C(2, 3)$ and $D(7, 15)$.`
});


// ========================================================
// [HARD] Q15: Triangle Classification (4 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'hard', type: 'multiple_choice',
  question: `Determine the type of triangle formed by the vertices $A(-2, 0)$, $B(2, 0)$ and $C(0, 2\\sqrt{3})$ by calculating its side lengths.`,
  options: [
    { text: 'Equilateral triangle', imageUrl: '' },
    { text: 'Isosceles triangle', imageUrl: '' },
    { text: 'Right-angled triangle', imageUrl: '' },
    { text: 'None of these (Scalene)', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate the side length $AB$**
$$AB = \\sqrt{(2 - (-2))^2 + (0 - 0)^2} = \\sqrt{4^2} = 4$$

**Step 2: Calculate the side length $BC$**
$$BC = \\sqrt{(0 - 2)^2 + (2\\sqrt{3} - 0)^2} = \\sqrt{(-2)^2 + 12} = \\sqrt{4 + 12} = \\sqrt{16} = 4$$

**Step 3: Calculate the side length $AC$**
$$AC = \\sqrt{(0 - (-2))^2 + (2\\sqrt{3} - 0)^2} = \\sqrt{2^2 + 12} = \\sqrt{4 + 12} = \\sqrt{16} = 4$$

**Step 4: Compare side lengths**
Since $AB = BC = AC = 4$ (all three sides are equal), the triangle is **equilateral**.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'hard', type: 'multiple_choice',
  question: `Determine the type of triangle formed by the vertices $P(-2, 2)$, $Q(0, -2)$ and $R(6, 6)$ by calculating its side lengths.`,
  options: [
    { text: 'Right-angled triangle', imageUrl: '' },
    { text: 'Equilateral triangle', imageUrl: '' },
    { text: 'Isosceles triangle', imageUrl: '' },
    { text: 'None of these (Scalene)', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate the side lengths**
- **$PQ$** using $P(-2, 2)$ and $Q(0, -2)$:
  $$PQ = \\sqrt{(0 - (-2))^2 + (-2 - 2)^2} = \\sqrt{2^2 + (-4)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$$
- **$QR$** using $Q(0, -2)$ and $R(6, 6)$:
  $$QR = \\sqrt{(6 - 0)^2 + (6 - (-2))^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$
- **$PR$** using $P(-2, 2)$ and $R(6, 6)$:
  $$PR = \\sqrt{(6 - (-2))^2 + (6 - 2)^2} = \\sqrt{8^2 + 4^2} = \\sqrt{64 + 16} = \\sqrt{80} = 4\\sqrt{5}$$

**Step 2: Check for special configurations**
Let\'s check the sum of squares of the two shorter sides:
$$PQ^2 + PR^2 = (\\sqrt{20})^2 + (\\sqrt{80})^2 = 20 + 80 = 100$$
$$QR^2 = 10^2 = 100$$
Since $PQ^2 + PR^2 = QR^2$, by the converse of Pythagoras\' theorem, the triangle is **right-angled** at $P$.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'hard', type: 'multiple_choice',
  question: `Determine the type of triangle formed by the vertices $D(2, 2)$, $E(3, -1)$ and $F(-2, 1)$ by calculating its side lengths.`,
  options: [
    { text: 'None of these (Scalene)', imageUrl: '' },
    { text: 'Isosceles triangle', imageUrl: '' },
    { text: 'Equilateral triangle', imageUrl: '' },
    { text: 'Right-angled triangle', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate the side lengths**
- **$DE$** using $D(2, 2)$ and $E(3, -1)$:
  $$DE = \\sqrt{(3 - 2)^2 + (-1 - 2)^2} = \\sqrt{1^2 + (-3)^2} = \\sqrt{1 + 9} = \\sqrt{10}$$
- **$EF$** using $E(3, -1)$ and $F(-2, 1)$:
  $$EF = \\sqrt{(-2 - 3)^2 + (1 - (-1))^2} = \\sqrt{(-5)^2 + 2^2} = \\sqrt{25 + 4} = \\sqrt{29}$$
- **$DF$** using $D(2, 2)$ and $F(-2, 1)$:
  $$DF = \\sqrt{(-2 - 2)^2 + (1 - 2)^2} = \\sqrt{(-4)^2 + (-1)^2} = \\sqrt{16 + 1} = \\sqrt{17}$$

**Step 2: Examine side length relationships**
- All three side lengths are different: $\\sqrt{10} \\neq \\sqrt{29} \\neq \\sqrt{17}$. Therefore, it is **not equilateral** and **not isosceles**.
- Check Pythagoras: $(\\sqrt{10})^2 + (\\sqrt{17})^2 = 10 + 17 = 27 \\neq 29$. Therefore, it is **not right-angled**.
- Since it fits none of the special categories, it is a **scalene** triangle.`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'hard', type: 'multiple_choice',
  question: `Determine the type of triangle formed by the vertices $X(-2, 0)$, $Y(1, 1)$ and $Z(-1, 3)$ by calculating its side lengths.`,
  options: [
    { text: 'Isosceles triangle', imageUrl: '' },
    { text: 'Equilateral triangle', imageUrl: '' },
    { text: 'Right-angled triangle', imageUrl: '' },
    { text: 'None of these (Scalene)', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Calculate the side lengths**
- **$XY$** using $X(-2, 0)$ and $Y(1, 1)$:
  $$XY = \\sqrt{(1 - (-2))^2 + (1 - 0)^2} = \\sqrt{3^2 + 1^2} = \\sqrt{9 + 1} = \\sqrt{10}$$
- **$YZ$** using $Y(1, 1)$ and $Z(-1, 3)$:
  $$YZ = \\sqrt{(-1 - 1)^2 + (3 - 1)^2} = \\sqrt{(-2)^2 + 2^2} = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$$
- **$XZ$** using $X(-2, 0)$ and $Z(-1, 3)$:
  $$XZ = \\sqrt{(-1 - (-2))^2 + (3 - 0)^2} = \\sqrt{1^2 + 3^2} = \\sqrt{1 + 9} = \\sqrt{10}$$

**Step 2: Compare the side lengths**
Since $XY = XZ = \\sqrt{10}$ (two sides are equal in length) and the third side $YZ = \\sqrt{8}$ is different, the triangle is **isosceles**.`
});

// ========================================================
// [HARD] Q16: Equations of Circles (2 questions)
// ========================================================
questions7A.push({
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'hard', type: 'multiple_choice',
  question: `Find the equation of the circle with center at $(4, -3)$ and passing through the point $(-2, 0)$.`,
  options: [
    { text: '$(x - 4)^2 + (y + 3)^2 = 45$', imageUrl: '' },
    { text: '$(x + 4)^2 + (y - 3)^2 = 45$', imageUrl: '' },
    { text: '$(x - 4)^2 + (y + 3)^2 = 9$', imageUrl: '' },
    { text: '$(x - 4)^2 + (y + 3)^2 = \\sqrt{45}$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: State the general equation of a circle**
A circle with center $(h, k)$ and radius $r$ is represented by:
$$(x - h)^2 + (y - k)^2 = r^2$$

**Step 2: Plug in the center $(h, k) = (4, -3)$**
$$(x - 4)^2 + (y - (-3))^2 = r^2$$
$$(x - 4)^2 + (y + 3)^2 = r^2$$

**Step 3: Calculate the radius square ($r^2$)**
Since the circle passes through $(-2, 0)$, this coordinate must satisfy the equation:
$$r^2 = (-2 - 4)^2 + (0 + 3)^2$$
$$r^2 = (-6)^2 + 3^2$$
$$r^2 = 36 + 9 = 45$$

**Step 4: Write the final equation**
$$(x - 4)^2 + (y + 3)^2 = 45$$`
}, {
  chapterId: 'y11a-7', chapterTitle: 'Chapter 7: Coordinate Geometry', year: 'Year 11', course: 'Advanced', isManual: true,
  topicId: 'y11a-7A', topicCode: '7A', topicTitle: 'Lengths and midpoints of line segments', difficulty: 'hard', type: 'multiple_choice',
  question: `Find the equation of the circle given that $K(6, 8)$ and $L(-8, -2)$ are the endpoints of its diameter.`,
  options: [
    { text: '$(x + 1)^2 + (y - 3)^2 = 74$', imageUrl: '' },
    { text: '$(x - 1)^2 + (y + 3)^2 = 74$', imageUrl: '' },
    { text: '$(x + 1)^2 + (y - 3)^2 = 296$', imageUrl: '' },
    { text: '$(x - 6)^2 + (y - 8)^2 = 74$', imageUrl: '' }
  ],
  answer: "0",
  solution: `### Step-by-Step Solution

**Step 1: Find the center of the circle**
The center $(h, k)$ is the midpoint of diameter endpoints $K(6, 8)$ and $L(-8, -2)$:
$$h = \\frac{6 + (-8)}{2} = \\frac{-2}{2} = -1$$
$$k = \\frac{8 + (-2)}{2} = \\frac{6}{2} = 3$$
$$\\text{Center} = (-1, 3)$$

**Step 2: State the circle equation template**
$$(x - h)^2 + (y - k)^2 = r^2$$
$$(x - (-1))^2 + (y - 3)^2 = r^2$$
$$(x + 1)^2 + (y - 3)^2 = r^2$$

**Step 3: Calculate the radius square ($r^2$)**
The radius is the distance from the center $(-1, 3)$ to any endpoint, e.g., $K(6, 8)$:
$$r^2 = (6 - (-1))^2 + (8 - 3)^2$$
$$r^2 = 7^2 + 5^2$$
$$r^2 = 49 + 25 = 74$$

**Step 4: Write the final equation**
$$(x + 1)^2 + (y - 3)^2 = 74$$`
});

console.log(`Successfully generated ${questions7A.length} Coordinate Geometry questions.`);

// Write backup JSON
fs.writeFileSync('scratch/questions7A.json', JSON.stringify(questions7A, null, 2));

// Generate the fully unified import script content for Chapter 7
const outputCh7 = `import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-7',
  chapterTitle: 'Chapter 7: Coordinate Geometry',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

export const questions7A = ${JSON.stringify(questions7A, null, 2)};

export const importYear11AdvCh7 = async (forceReset = false) => {
  console.log(\`Starting sync of Y11 Adv Ch7A (Total \${questions7A.length})...\` + '\\n' + \`Chapter: Coordinate Geometry\`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), 
      where('chapterId', '==', 'y11a-7'),
      where('topicCode', '==', '7A')
    ));
    
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(\`Cleared \${qSnap.size} old questions under chapter y11a-7, topicCode 7A.\`);

    let count = 0;
    for (const q of questions7A) {
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

fs.writeFileSync('src/scripts/importYear11AdvCh7.js', outputCh7);
console.log('Successfully wrote Chapter 7 import script to src/scripts/importYear11AdvCh7.js!');
