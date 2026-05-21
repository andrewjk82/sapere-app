
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore';

// Year 10 · Chapter 4 — Lines and linear equations.
// v4 rebuild: real line breaks, step-by-step solutionSteps, corrected maths
// (the v3 batch had AI-artefact text and several wrong answers).
export const importYear10Ch4 = async () => {
  const CHAPTER_ID = 'y10-4';
  const BATCH_ID = 'y10-4-complete-v4';
  const base = {
    batchId: BATCH_ID,
    chapterId: CHAPTER_ID,
    chapterTitle: 'Chapter 4: Lines and linear equations',
    year: 'Year 10',
    isManual: true,
  };

  const questions = [
    // ── Q9 · Point-gradient form ───────────────────────────────────────────
    {
      ...base, topicId: 'y10-4d', topicTitle: 'Point-gradient form',
      difficulty: 'medium', type: 'short_answer',
      question: 'Find the equation of the line passing through $(4, 7)$ and $(-2, 16)$ in $y=mx+c$ form.',
      answer: 'y = -1.5x + 13',
      solutionSteps: [
        { explanation: 'Find the gradient $m$ using the two points.', workingOut: '$m = \\dfrac{16-7}{-2-4} = \\dfrac{9}{-6} = -1.5$' },
        { explanation: 'Substitute one point into $y = mx + c$ to find $c$.', workingOut: '$7 = -1.5(4) + c \\Rightarrow 7 = -6 + c \\Rightarrow c = 13$' },
        { explanation: 'Write the final equation.', workingOut: '$y = -1.5x + 13$' },
      ],
      hint: 'Gradient formula: $m = \\Delta y / \\Delta x$.',
    },
    {
      ...base, topicId: 'y10-4d', topicTitle: 'Point-gradient form',
      difficulty: 'medium', type: 'short_answer',
      question: 'Find the equation of the line passing through $(5, 6)$ and $(-1, 12)$ in $y=mx+c$ form.',
      answer: 'y = -x + 11',
      solutionSteps: [
        { explanation: 'Find the gradient $m$.', workingOut: '$m = \\dfrac{12-6}{-1-5} = \\dfrac{6}{-6} = -1$' },
        { explanation: 'Substitute $(5, 6)$ to find $c$.', workingOut: '$6 = -1(5) + c \\Rightarrow c = 11$' },
        { explanation: 'Write the equation.', workingOut: '$y = -x + 11$' },
      ],
      hint: 'Gradient is $-1$.',
    },
    {
      ...base, topicId: 'y10-4d', topicTitle: 'Point-gradient form',
      difficulty: 'medium', type: 'short_answer',
      question: 'Find the equation of the line passing through $(-4, 5)$ and $(2, 17)$ in $y=mx+c$ form.',
      answer: 'y = 2x + 13',
      solutionSteps: [
        { explanation: 'Find the gradient $m$.', workingOut: '$m = \\dfrac{17-5}{2-(-4)} = \\dfrac{12}{6} = 2$' },
        { explanation: 'Substitute $(-4, 5)$ to find $c$.', workingOut: '$5 = 2(-4) + c \\Rightarrow 5 = -8 + c \\Rightarrow c = 13$' },
        { explanation: 'Write the equation.', workingOut: '$y = 2x + 13$' },
      ],
      hint: 'Gradient is $2$.',
    },

    // ── Q10 · Simultaneous equations ───────────────────────────────────────
    {
      ...base, topicId: 'y10-4e', topicTitle: 'Simultaneous equations',
      difficulty: 'medium', type: 'short_answer',
      question: 'Solve the simultaneous equations (answer as $(x, y)$):\n$4x + 3y = 24$\n$x - y = -1$',
      answer: '(3, 4)',
      solutionSteps: [
        { explanation: 'Rearrange the second equation to make $x$ the subject.', workingOut: '$x - y = -1 \\Rightarrow x = y - 1$' },
        { explanation: 'Substitute $x = y - 1$ into the first equation.', workingOut: '$4(y-1) + 3y = 24 \\Rightarrow 7y - 4 = 24$' },
        { explanation: 'Solve for $y$.', workingOut: '$7y = 28 \\Rightarrow y = 4$' },
        { explanation: 'Back-substitute to find $x$.', workingOut: '$x = 4 - 1 = 3$. Solution: $(3, 4)$' },
      ],
      hint: 'Substitute $x = y - 1$ into the first equation.',
    },
    {
      ...base, topicId: 'y10-4e', topicTitle: 'Simultaneous equations',
      difficulty: 'hard', type: 'short_answer',
      question: 'Solve the simultaneous equations (answer as $(x, y)$):\n$\\dfrac{x}{2} + \\dfrac{y}{4} = 2$\n$2x + 4y = 20$',
      answer: '(2, 4)',
      solutionSteps: [
        { explanation: 'Clear fractions: multiply the first equation by $4$.', workingOut: '$2x + y = 8 \\Rightarrow y = 8 - 2x$' },
        { explanation: 'Substitute $y = 8 - 2x$ into the second equation.', workingOut: '$2x + 4(8 - 2x) = 20 \\Rightarrow 2x + 32 - 8x = 20$' },
        { explanation: 'Solve for $x$.', workingOut: '$-6x = -12 \\Rightarrow x = 2$' },
        { explanation: 'Back-substitute to find $y$.', workingOut: '$y = 8 - 2(2) = 4$. Solution: $(2, 4)$' },
      ],
      hint: 'Multiply the first equation by $4$ to remove the fractions.',
    },
    {
      ...base, topicId: 'y10-4e', topicTitle: 'Simultaneous equations',
      difficulty: 'medium', type: 'short_answer',
      question: 'Solve the simultaneous equations (answer as $(x, y)$):\n$y = 4x + 1$\n$y = 2x - 5$',
      answer: '(-3, -11)',
      solutionSteps: [
        { explanation: 'Both equations equal $y$, so set the right-hand sides equal.', workingOut: '$4x + 1 = 2x - 5$' },
        { explanation: 'Solve for $x$.', workingOut: '$2x = -6 \\Rightarrow x = -3$' },
        { explanation: 'Substitute $x = -3$ into either equation.', workingOut: '$y = 4(-3) + 1 = -11$. Solution: $(-3, -11)$' },
      ],
      hint: 'Equate the two expressions for $y$.',
    },

    // ── Q12 · Triangle geometry (sub-questions) ────────────────────────────
    {
      ...base, topicId: 'y10-4c', topicTitle: 'Triangle geometry',
      difficulty: 'hard',
      question: 'The vertices of $\\triangle ABC$ are $A(2, 5)$, $B(8, 11)$, and $C(4, -1)$.',
      subQuestions: [
        { id: 'q12_1', type: 'short_answer', question: 'Find the perpendicular bisector of $AB$.', answer: 'y = -x + 13', solution: 'Midpoint of $AB$ is $(5, 8)$. Gradient of $AB$ is $1$, so the perpendicular gradient is $-1$. $y - 8 = -1(x - 5) \\Rightarrow y = -x + 13$.' },
        { id: 'q12_2', type: 'short_answer', question: 'Find the perpendicular bisector of $BC$.', answer: 'y = (1/3)x + 1', solution: 'Midpoint of $BC$ is $(6, 5)$. Gradient of $BC$ is $\\frac{-1-11}{4-8} = 3$, so the perpendicular gradient is $-\\frac{1}{3}$. $y - 5 = -\\frac{1}{3}(x - 6) \\Rightarrow y = -\\frac{1}{3}x + 7$.' },
        { id: 'q12_3', type: 'short_answer', question: 'Find the circumcentre coordinates.', answer: '(9, 4)', solution: 'Solve $y = -x + 13$ and $y = -\\frac{1}{3}x + 7$ simultaneously: $-x + 13 = -\\frac{1}{3}x + 7 \\Rightarrow -\\frac{2}{3}x = -6 \\Rightarrow x = 9$, $y = 4$.' },
      ],
      hint: 'Use midpoints and negative-reciprocal gradients.',
    },

    // ── Q13 · Perpendicular bisector ───────────────────────────────────────
    {
      ...base, topicId: 'y10-4c', topicTitle: 'Perpendicular bisectors',
      difficulty: 'hard', type: 'short_answer',
      question: 'The perpendicular bisector of $AB$ is $2y = 3x - 5$. Given $A(2, 6)$, find the coordinates of $B$.',
      answer: '(5, 4)',
      solutionSteps: [
        { explanation: 'The perpendicular bisector has gradient $\\frac{3}{2}$, so $AB$ has the negative-reciprocal gradient.', workingOut: '$m_{AB} = -\\dfrac{2}{3}$' },
        { explanation: 'Write the equation of line $AB$ through $A(2, 6)$.', workingOut: '$y - 6 = -\\dfrac{2}{3}(x - 2) \\Rightarrow 2x + 3y = 22$' },
        { explanation: 'The midpoint $M$ lies on both lines. Solve $2x + 3y = 22$ with $3x - 2y = 5$.', workingOut: '$x = 3.5,\\ y = 5 \\Rightarrow M(3.5, 5)$' },
        { explanation: 'Use the midpoint formula to find $B$.', workingOut: '$\\dfrac{2+x}{2} = 3.5 \\Rightarrow x = 5$;  $\\dfrac{6+y}{2} = 5 \\Rightarrow y = 4$. So $B(5, 4)$.' },
      ],
      hint: 'Find where the perpendicular bisector meets the line through $A$.',
    },

    // ── Q15 · Right-angled triangle (MCQ) ──────────────────────────────────
    {
      ...base, topicId: 'y10-4c', topicTitle: 'Coordinate proofs',
      difficulty: 'medium', type: 'multiple_choice',
      question: 'Are the points $A(2, 5)$, $B(-3, 0)$, $C(3, 4)$ the vertices of a right-angled triangle?',
      options: [
        { text: 'Yes — $AB$ and $AC$ are perpendicular', imageUrl: '' },
        { text: 'No — all gradients are positive', imageUrl: '' },
        { text: 'Yes — all three sides are equal', imageUrl: '' },
        { text: 'No — the points are collinear', imageUrl: '' },
      ],
      answer: '0',
      solutionSteps: [
        { explanation: 'Find the gradient of each side.', workingOut: '$m_{AB} = \\dfrac{0-5}{-3-2} = 1$;  $m_{AC} = \\dfrac{4-5}{3-2} = -1$' },
        { explanation: 'Check whether any pair multiplies to $-1$.', workingOut: '$m_{AB} \\times m_{AC} = 1 \\times (-1) = -1$' },
        { explanation: 'A product of $-1$ means the sides are perpendicular.', workingOut: '$AB \\perp AC$, so the triangle is right-angled at $A$.' },
      ],
      hint: 'Two sides are perpendicular when the product of their gradients is $-1$.',
    },

    // ── Q16 · Rhombus properties (sub-questions) ───────────────────────────
    {
      ...base, topicId: 'y10-4c', topicTitle: 'Quadrilateral properties',
      difficulty: 'hard',
      question: 'Consider the points $A(2, -1)$, $B(6, 7)$, $C(-2, 3)$, $D(-6, -5)$.',
      subQuestions: [
        { id: 'q16_1', type: 'multiple_choice', question: 'Which property best proves $ABCD$ is a rhombus?', options: [{ text: 'All four sides are equal in length', imageUrl: '' }, { text: 'Only the opposite sides are parallel', imageUrl: '' }], answer: '0', solution: 'All side lengths equal $\\sqrt{80}$: $AB = \\sqrt{4^2+8^2} = \\sqrt{80}$, and similarly for $BC$, $CD$, $DA$.' },
        { id: 'q16_2', type: 'short_answer', question: 'Find the length of diagonal $AC$.', answer: '5.66', solution: '$AC = \\sqrt{(-2-2)^2 + (3-(-1))^2} = \\sqrt{16+16} = \\sqrt{32} \\approx 5.66$.' },
      ],
      hint: 'A rhombus has four equal sides.',
    },

    // ── Q17 · Word problem ─────────────────────────────────────────────────
    {
      ...base, topicId: 'y10-4f', topicTitle: 'Word problems',
      difficulty: 'medium', type: 'short_answer',
      question: 'Two numbers have a sum of $160$ and a difference of $74$. Find the two numbers (answer as: "small, large").',
      answer: '43, 117',
      solutionSteps: [
        { explanation: 'Let the numbers be $x$ (large) and $y$ (small). Write two equations.', workingOut: '$x + y = 160$\n$x - y = 74$' },
        { explanation: 'Add the equations to eliminate $y$.', workingOut: '$2x = 234 \\Rightarrow x = 117$' },
        { explanation: 'Subtract to find $y$.', workingOut: '$y = 160 - 117 = 43$. Numbers: $43, 117$.' },
      ],
      hint: 'Add the two equations to eliminate one unknown.',
    },

    // ── Q18 · Word problem (corrected: prices now consistent) ──────────────
    {
      ...base, topicId: 'y10-4f', topicTitle: 'Word problems',
      difficulty: 'hard', type: 'short_answer',
      question: '4 stools and 5 chairs cost $\\$450$. 6 stools and 2 chairs cost $\\$400$. Find the cost of one stool.',
      answer: '50',
      solutionSteps: [
        { explanation: 'Let $s$ be the stool price and $c$ the chair price. Write two equations.', workingOut: '$4s + 5c = 450$\n$6s + 2c = 400$' },
        { explanation: 'Eliminate $c$: multiply Eq1 by $2$ and Eq2 by $5$.', workingOut: '$8s + 10c = 900$\n$30s + 10c = 2000$' },
        { explanation: 'Subtract the equations and solve for $s$.', workingOut: '$22s = 1100 \\Rightarrow s = 50$' },
        { explanation: 'A stool costs $\\$50$ (and a chair $\\$50$).', workingOut: '$4(50) + 5c = 450 \\Rightarrow c = 50$' },
      ],
      hint: 'Eliminate the chair term $c$.',
    },

    // ── Q19 · Collinear points (sub-questions) ─────────────────────────────
    {
      ...base, topicId: 'y10-4b', topicTitle: 'Collinear points',
      difficulty: 'hard',
      question: 'Points $A(3, 2)$, $B(5, 10)$, $C(p, 6)$.',
      subQuestions: [
        { id: 'q19_1', type: 'short_answer', question: 'Find $p$ if $A$, $B$, $C$ are collinear.', answer: '4', solution: '$m_{AB} = \\frac{10-2}{5-3} = 4$. For $C$ on the line: $\\frac{6-2}{p-3} = 4 \\Rightarrow 4 = 4(p-3) \\Rightarrow p = 4$.' },
        { id: 'q19_2', type: 'short_answer', question: 'Find $p$ if $AC \\perp AB$.', answer: '-13', solution: 'Perpendicular gradient $= -\\frac{1}{4}$. $\\frac{6-2}{p-3} = -\\frac{1}{4} \\Rightarrow p - 3 = -16 \\Rightarrow p = -13$.' },
      ],
      hint: 'Use gradient conditions for collinearity and perpendicularity.',
    },

    // ── Q20 · Rectangle perimeter ──────────────────────────────────────────
    {
      ...base, topicId: 'y10-4f', topicTitle: 'Word problems',
      difficulty: 'hard', type: 'short_answer',
      question: 'A rectangle has opposite sides $3x+2y$ and $x+10$, and the other pair $2y$ and $x+1$. Find the perimeter.',
      answer: '34',
      solutionSteps: [
        { explanation: 'Opposite sides are equal — form two equations.', workingOut: '$3x + 2y = x + 10$\n$2y = x + 1$' },
        { explanation: 'Simplify the first equation.', workingOut: '$2x + 2y = 10 \\Rightarrow x + y = 5$' },
        { explanation: 'From the second equation $x = 2y - 1$. Substitute.', workingOut: '$(2y - 1) + y = 5 \\Rightarrow 3y = 6 \\Rightarrow y = 2,\\ x = 3$' },
        { explanation: 'Find the side lengths and the perimeter.', workingOut: 'Length $= x + 10 = 13$, width $= 2y = 4$. Perimeter $= 2(13 + 4) = 34$.' },
      ],
      hint: 'Opposite sides of a rectangle are equal.',
    },

    // ── Q21 · Concurrency (MCQ — third line corrected so it is concurrent) ─
    {
      ...base, topicId: 'y10-4e', topicTitle: 'Simultaneous equations',
      difficulty: 'hard', type: 'multiple_choice',
      question: 'Are the lines $y = 2x - 1$, $y = x + 3$ and $y = -x + 11$ concurrent?',
      options: [
        { text: 'Yes — they all pass through $(4, 7)$', imageUrl: '' },
        { text: 'No — they form a triangle', imageUrl: '' },
      ],
      answer: '0',
      solutionSteps: [
        { explanation: 'Find where the first two lines meet.', workingOut: '$2x - 1 = x + 3 \\Rightarrow x = 4,\\ y = 7$' },
        { explanation: 'Check whether $(4, 7)$ lies on the third line.', workingOut: '$y = -x + 11 = -4 + 11 = 7$ ✓' },
        { explanation: 'All three lines pass through $(4, 7)$, so they are concurrent.', workingOut: 'Concurrent at $(4, 7)$.' },
      ],
      hint: 'Find the intersection of two lines, then test the third.',
    },
  ];

  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('batchId', '==', BATCH_ID)));
    if (!qSnap.empty) { return 0; }
    let count = 0;
    for (const q of questions) {
      await addDoc(collection(db, 'questions'), { ...q, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
      count++;
    }
    return count;
  } catch (err) { console.error(err); return 0; }
};
