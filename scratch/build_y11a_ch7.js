import fs from 'fs';

console.log('Generating 20 Coordinate Geometry questions for Year 11 Chapter 7A...');

const questions7A = [];

// ========================================================
// Q1: Midpoint of each line segment AB (6 questions)
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
// Q2: Length of each line segment AB (6 questions)
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
// Q3: Midpoint and Length Verification (2 questions)
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
// Q4: Triangle Sides and Isosceles Classification (2 questions)
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
// Q5: Triangle Sides and Right-Angled Check (2 questions)
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
// Q6: Triangle Side Lengths and Midpoints (2 questions)
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
