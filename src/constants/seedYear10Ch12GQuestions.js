export const Y10_CH12G_QUESTIONS = [
  {
    id: 'y10-12g-q6a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A rhombus $PQRS$ has side lengths $8\\text{ m}$, and contains an angle of $128^\\circ$.\n\nFind the length of the longer diagonal, correct to two decimal places.',
    a: '14.38',
    solution: 'The longer diagonal is opposite the obtuse angle ($128^\\circ$).\n\nUsing the cosine rule in the triangle formed by two sides and the longer diagonal $d_1$:\n$d_1^2 = 8^2 + 8^2 - 2(8)(8)\\cos 128^\\circ$\n$d_1^2 = 64 + 64 - 128\\cos 128^\\circ$\n$d_1^2 \\approx 128 - 128(-0.6157) \\approx 206.80$\n$d_1 = \\sqrt{206.80} \\approx 14.38\\text{ m}$',
    t: 'Finding angles using the cosine rule',
    hint: 'The longer diagonal is opposite the larger angle ($128^\\circ$). Use the cosine rule.'
  },
  {
    id: 'y10-12g-q6b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A rhombus $PQRS$ has side lengths $8\\text{ m}$, and contains an angle of $128^\\circ$.\n\nFind the length of the shorter diagonal, correct to two decimal places.',
    a: '7.01',
    solution: 'Adjacent angles in a rhombus add to $180^\\circ$. The acute angle is $180^\\circ - 128^\\circ = 52^\\circ$.\nThe shorter diagonal $d_2$ is opposite the $52^\\circ$ angle.\n\nUsing the cosine rule:\n$d_2^2 = 8^2 + 8^2 - 2(8)(8)\\cos 52^\\circ$\n$d_2^2 = 128 - 128\\cos 52^\\circ \\approx 128 - 78.805 \\approx 49.195$\n$d_2 = \\sqrt{49.195} \\approx 7.01\\text{ m}$',
    t: 'Finding angles using the cosine rule',
    hint: 'Find the acute angle of the rhombus first (co-interior angles add to $180^\\circ$). Then use the cosine rule.'
  },
  {
    id: 'y10-12g-q6c',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A rhombus $PQRS$ has side lengths $8\\text{ m}$, and contains an angle of $128^\\circ$.\n\nFind the area of the rhombus, correct to two decimal places.',
    a: '50.43',
    solution: 'The area of a rhombus can be found using the formula $A = a^2 \\sin \\theta$, or by finding the area of two identical triangles.\nArea $= 2 \\times \\left(\\frac{1}{2} \\times 8 \\times 8 \\times \\sin 128^\\circ\\right)$\nArea $= 64 \\sin 128^\\circ$\nArea $\\approx 64 \\times 0.7880 \\approx 50.43\\text{ m}^2$',
    t: 'Finding angles using the cosine rule',
    hint: 'Use the sine area formula: $\\text{Area} = ab\\sin C$ for the two triangles that make up the rhombus, or $A = a^2\\sin\\theta$.'
  },
  {
    id: 'y10-12g-q7',
    type: 'teacher_review',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Prove the cosine rule when the included angle, $A$ is obtuse.',
    a: '',
    solution: 'Consider $\\triangle ABC$ where angle $A$ is obtuse. Drop a perpendicular from $B$ to meet $CA$ extended at $D$. Let the height be $h$ and the extended length $DA$ be $x$.\n\nIn the small right-angled $\\triangle BDA$:\n$\\angle BDA = 90^\\circ$\n$\\angle BAD = 180^\\circ - A$\nUsing trigonometry: $\\cos(180^\\circ - A) = \\frac{x}{c}$. Since $\\cos(180^\\circ - A) = -\\cos A$, we have $x = -c \\cos A$.\nAlso, by Pythagoras\' theorem: $h^2 + x^2 = c^2$.\n\nIn the large right-angled $\\triangle BDC$, the base is $DC = b + x$.\nUsing Pythagoras\' theorem:\n$a^2 = h^2 + (b + x)^2$\n$a^2 = h^2 + b^2 + 2bx + x^2$\nRearranging the terms:\n$a^2 = (h^2 + x^2) + b^2 + 2bx$\nSubstitute $h^2 + x^2 = c^2$ and $x = -c \\cos A$:\n$a^2 = c^2 + b^2 + 2b(-c \\cos A)$\n$a^2 = b^2 + c^2 - 2bc \\cos A$\n\nThis proves the cosine rule for an obtuse angle.',
    t: 'Finding angles using the cosine rule',
    hint: 'Drop a perpendicular from $B$ to the line $AC$ extended. Use Pythagoras\' theorem on both the small and large right-angled triangles, and note that $\\cos(180^\\circ - A) = -\\cos A$.'
  }
];
