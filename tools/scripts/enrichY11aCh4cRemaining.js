import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to convert plain string options to standard { text, imageUrl } objects
function mapOptions(opts) {
  return opts.map(o => ({ text: String(o), imageUrl: '' }));
}

// Helper to shuffle array
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Helper to update a question doc with shuffled options and detailed step-by-step worked solutions
async function enrichQuestion(id, data, correctText, steps) {
  const qRef = db.collection('questions').doc(id);
  const mappedOpts = mapOptions(data.options);
  const shuffledOpts = shuffleArray(mappedOpts);

  const newAnswerIdx = shuffledOpts.findIndex(opt => {
    return String(opt.text).trim() === String(correctText).trim();
  });

  if (newAnswerIdx < 0) {
    throw new Error(`Correct text "${correctText}" not found in options for question ${id}`);
  }

  await qRef.update({
    options: shuffledOpts,
    answer: String(newAnswerIdx),
    solutionSteps: steps
  });
  console.log(`Successfully enriched & shuffled question ${id}`);
}

async function run() {
  console.log('Enriching and shuffling final remaining questions of Chapter 4C...');

  // 1. y11a-4c-q11bii
  await enrichQuestion('y11a-4c-q11bii', {
    options: [
      '1 intersection at \\(x = -3\\)',
      '2 intersections (irrational \\(x\\)-coordinates)',
      '2 intersections at \\(x = -2\\) and \\(x = -5\\)',
      'No intersections'
    ]
  }, 'No intersections', [
    {
      explanation: "Equate the equations of the parabola \\(y = x^2 + 4x + 7\\) and the line \\(y = -2x - 3\\) to find their intersections.",
      workingOut: "\\(x^2 + 4x + 7 = -2x - 3\\)"
    },
    {
      explanation: "Rearrange the equation into standard quadratic form \\(ax^2 + bx + c = 0\\).",
      workingOut: "\\(x^2 + 6x + 10 = 0\\)"
    },
    {
      explanation: "Find the discriminant of the resulting quadratic: \\(a = 1\\), \\(b = 6\\), and \\(c = 10\\).",
      workingOut: "\\(\\Delta = b^2 - 4ac = 6^2 - 4(1)(10) = 36 - 40 = -4 < 0\\)"
    },
    {
      explanation: "Since the discriminant is strictly negative, there are no real solutions, meaning the line and the parabola do not intersect.",
      workingOut: ""
    }
  ]);

  // 2. y11a-4c-q12a
  await enrichQuestion('y11a-4c-q12a', {
    options: [
      '1 intersection at \\(x = -0.5\\)',
      '2 intersections at \\(x = 1\\) and \\(x = -2.5\\)',
      'No intersections',
      '2 intersections at \\(x = -1\\) and \\(x = 1\\)'
    ]
  }, 'No intersections', [
    {
      explanation: "Equate the two parabolas to study their intersections.",
      workingOut: "\\(x^2 + 4x + 2 = -x^2 + 2x - 3\\)"
    },
    {
      explanation: "Group all terms to the left-hand side.",
      workingOut: "\\(2x^2 + 2x + 5 = 0\\)"
    },
    {
      explanation: "Determine the discriminant of the resulting quadratic equation.",
      workingOut: "\\(\\Delta = b^2 - 4ac = 2^2 - 4(2)(5) = 4 - 40 = -36 < 0\\)"
    },
    {
      explanation: "Because \\(\\Delta < 0\\), no real points of intersection exist.",
      workingOut: ""
    }
  ]);

  // 3. y11a-4c-q12bi
  await enrichQuestion('y11a-4c-q12bi', {
    options: [
      'No intersections',
      '2 intersections at \\(x = -2\\) and \\(x = 2\\)',
      '1 intersection at \\(x = -2\\)',
      '1 intersection at \\(x = 2\\)'
    ]
  }, '1 intersection at \\(x = -2\\)', [
    {
      explanation: "Equate the two parabolas.",
      workingOut: "\\(x^2 + 2x + 3 = -x^2 - 6x - 5\\)"
    },
    {
      explanation: "Rearrange the equation to have zero on the right side.",
      workingOut: "\\(2x^2 + 8x + 8 = 0\\)"
    },
    {
      explanation: "Divide the entire equation by 2.",
      workingOut: "\\(x^2 + 4x + 4 = 0\\)"
    },
    {
      explanation: "Calculate the discriminant to determine the number of intersection points.",
      workingOut: "\\(\\Delta = 4^2 - 4(1)(4) = 16 - 16 = 0\\)"
    },
    {
      explanation: "Since \\(\\Delta = 0\\), they intersect at exactly one point. Factor the perfect square to solve for \\(x\\).",
      workingOut: "\\((x + 2)^2 = 0 \\implies x = -2\\)"
    }
  ]);

  // 4. y11a-4c-q12bii
  await enrichQuestion('y11a-4c-q12bii', {
    options: [
      'No intersections',
      '1 intersection at \\(x = -1\\)',
      '2 intersections at \\(x = -1\\) and \\(x = 1\\)',
      '1 intersection at \\(x = 1\\)'
    ]
  }, '1 intersection at \\(x = -1\\)', [
    {
      explanation: "Equate the equations of the two parabolas.",
      workingOut: "\\(\\frac{1}{2}x^2 - 2x + 3 = -\\frac{1}{2}x^2 - 4x + 2\\)"
    },
    {
      explanation: "Rearrange terms by moving everything to the left side.",
      workingOut: "\\(x^2 + 2x + 1 = 0\\)"
    },
    {
      explanation: "Find the discriminant.",
      workingOut: "\\(\\Delta = 2^2 - 4(1)(1) = 0\\)"
    },
    {
      explanation: "Since \\(\\Delta = 0\\), there is exactly one point of intersection. Solve the perfect square.",
      workingOut: "\\((x + 1)^2 = 0 \\implies x = -1\\)"
    }
  ]);

  // 5. y11a-4c-q13ai
  await enrichQuestion('y11a-4c-q13ai', {
    options: [
      '\\(2x^2 + 4x - 5 = 0\\)',
      '\\(2x^2 + 4x + 5 = 0\\)',
      '\\(x^2 + 4x - 5 = 0\\)',
      '\\(2x^2 + 4x - 7 = 0\\)'
    ]
  }, '\\(2x^2 + 4x - 5 = 0\\)', [
    {
      explanation: "Given the circle equation \\(x^2 + y^2 = 9\\) and the line equation \\(y = x + 2\\), substitute \\(y\\) into the circle equation.",
      workingOut: "\\(x^2 + (x + 2)^2 = 9\\)"
    },
    {
      explanation: "Expand the perfect square term.",
      workingOut: "\\(x^2 + (x^2 + 4x + 4) = 9\\)"
    },
    {
      explanation: "Combine like terms and subtract 9 from both sides to form a quadratic equation.",
      workingOut: "\\(2x^2 + 4x + 4 - 9 = 0 \\implies 2x^2 + 4x - 5 = 0\\)"
    }
  ]);

  // 6. y11a-4c-q13aii
  await enrichQuestion('y11a-4c-q13aii', {
    options: [
      '\\(\\Delta = 16\\), intersects twice',
      '\\(\\Delta = 56\\), intersects twice',
      '\\(\\Delta = -56\\), does not intersect',
      '\\(\\Delta = 96\\), intersects twice'
    ]
  }, '\\(\\Delta = 56\\), intersects twice', [
    {
      explanation: "Use the quadratic equation obtained in part (i): \\(2x^2 + 4x - 5 = 0\\). Identify the coefficients: \\(a = 2\\), \\(b = 4\\), and \\(c = -5\\).",
      workingOut: ""
    },
    {
      explanation: "Calculate the discriminant.",
      workingOut: "\\(\\Delta = b^2 - 4ac = 4^2 - 4(2)(-5) = 16 + 40 = 56\\)"
    },
    {
      explanation: "Since \\(\\Delta = 56 > 0\\) (strictly positive), the line intersects the circle at two distinct points.",
      workingOut: ""
    }
  ]);

  // 7. y11a-4c-q13bi
  await enrichQuestion('y11a-4c-q13bi', {
    options: [
      '0 times',
      '1 time',
      '2 times',
      '2 times, at \\(x = 1\\) and \\(x = -4\\)'
    ]
  }, '0 times', [
    {
      explanation: "Substitute the line \\(y = x + 3\\) into the circle equation \\(x^2 + y^2 = 2\\).",
      workingOut: "\\(x^2 + (x + 3)^2 = 2\\)"
    },
    {
      explanation: "Expand and simplify the resulting quadratic expression.",
      workingOut: "\\(x^2 + x^2 + 6x + 9 = 2 \\implies 2x^2 + 6x + 7 = 0\\)"
    },
    {
      explanation: "Find the discriminant of \\(2x^2 + 6x + 7 = 0\\).",
      workingOut: "\\(\\Delta = 6^2 - 4(2)(7) = 36 - 56 = -20\\)"
    },
    {
      explanation: "Because \\(\\Delta = -20 < 0\\), the equation has no real roots, meaning the line does not intersect the circle (intersects 0 times).",
      workingOut: ""
    }
  ]);

  // 8. y11a-4c-q13bii
  await enrichQuestion('y11a-4c-q13bii', {
    options: [
      '0 times',
      '2 times',
      '2 times, at \\(x = 1\\) and \\(x = 5\\)',
      '1 time'
    ]
  }, '1 time', [
    {
      explanation: "Substitute the line \\(y = -3x + 10\\) into the circle equation \\(x^2 + y^2 = 10\\).",
      workingOut: "\\(x^2 + (-3x + 10)^2 = 10\\)"
    },
    {
      explanation: "Expand and rearrange the terms.",
      workingOut: "\\(x^2 + (9x^2 - 60x + 100) = 10 \\implies 10x^2 - 60x + 90 = 0\\)"
    },
    {
      explanation: "Divide the equation by 10.",
      workingOut: "\\(x^2 - 6x + 9 = 0\\)"
    },
    {
      explanation: "Determine the discriminant.",
      workingOut: "\\(\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0\\)"
    },
    {
      explanation: "Since \\(\\Delta = 0\\), the line is tangent to the circle, intersecting it exactly 1 time.",
      workingOut: ""
    }
  ]);

  // 9. Restructure y11a-4c-q14 (Study intersection of line y = x + b and parabola y = 3x^2 - 5x + 2)
  const q14Ref = db.collection('questions').doc('y11a-4c-q14');
  await q14Ref.update({
    type: 'subquestions',
    options: FieldValue.delete(),
    answer: FieldValue.delete(),
    solutionSteps: FieldValue.delete(),
    subQuestions: [
      {
        id: 'y11a-4c-q14-sub1',
        type: 'multiple_choice',
        question: 'Part (a): Set \\(y = x + b\\) equal to \\(y = 3x^2 - 5x + 2\\) and rearrange it into standard quadratic form.',
        options: mapOptions(['3x^2 - 6x + (2 - b) = 0', '3x^2 - 6x + (2 + b) = 0', '3x^2 - 4x + (2 - b) = 0', '3x^2 - 6x + 2 = 0']),
        answer: '0',
        solutionSteps: [
          {
            explanation: "Set the two equations equal to find their intersection.",
            workingOut: "\\(3x^2 - 5x + 2 = x + b\\)"
          },
          {
            explanation: "Subtract \\(x\\) and \\(b\\) from both sides to gather all terms on the left.",
            workingOut: "\\(3x^2 - 6x + 2 - b = 0 \\implies 3x^2 - 6x + (2 - b) = 0\\)"
          }
        ]
      },
      {
        id: 'y11a-4c-q14-sub2',
        type: 'multiple_choice',
        question: 'Part (b): Solve \\(\\Delta = 0\\) to find the value of \\(b\\) for which the line is tangent to the curve.',
        options: mapOptions(['b = -1', 'b = 1', 'b = -2', 'b = 0']),
        answer: '0',
        solutionSteps: [
          {
            explanation: "Identify the coefficients of the quadratic equation: \\(a = 3\\), \\(b_{coeff} = -6\\), and \\(c = 2 - b\\). Set the discriminant to zero.",
            workingOut: "\\(\\Delta = (-6)^2 - 4(3)(2 - b) = 0\\)"
          },
          {
            explanation: "Simplify and solve for \\(b\\).",
            workingOut: "\\(36 - 12(2 - b) = 0 \\implies 36 - 24 + 12b = 0 \\implies 12 + 12b = 0 \\implies b = -1\\)"
          }
        ]
      }
    ]
  });
  // Shuffle sub-questions for y11a-4c-q14
  const q14Updated = await q14Ref.get();
  const q14Subs = q14Updated.data().subQuestions;
  const q14Answers = {
    'y11a-4c-q14-sub1': '3x^2 - 6x + (2 - b) = 0',
    'y11a-4c-q14-sub2': 'b = -1'
  };
  const shuffledQ14Subs = q14Subs.map(sq => {
    const correctText = q14Answers[sq.id];
    const shuffled = shuffleArray(sq.options);
    const index = shuffled.findIndex(opt => opt.text === correctText);
    return { ...sq, options: shuffled, answer: String(index >= 0 ? index : 0) };
  });
  await q14Ref.update({ subQuestions: shuffledQ14Subs });
  console.log('Restructured y11a-4c-q14');

  // 10. Restructure y11a-4c-q15 (y = mx passes through origin and is secant of circle x^2 + (y-3)^2 = 4)
  const q15Ref = db.collection('questions').doc('y11a-4c-q15');
  await q15Ref.update({
    type: 'subquestions',
    options: FieldValue.delete(),
    answer: FieldValue.delete(),
    solutionSteps: FieldValue.delete(),
    subQuestions: [
      {
        id: 'y11a-4c-q15-sub1',
        type: 'multiple_choice',
        question: 'Part (a): Find the range of values for \\(m\\) for which the line \\(y = mx\\) intersects the circle twice.',
        options: mapOptions([
          'm < -\\frac{\\sqrt{5}}{2} \\text{ or } m > \\frac{\\sqrt{5}}{2}',
          '-\\frac{\\sqrt{5}}{2} < m < \\frac{\\sqrt{5}}{2}',
          'm > \\frac{5}{4}',
          'm < -\\frac{5}{2} \\text{ or } m > \\frac{5}{2}'
        ]),
        answer: '0',
        solutionSteps: [
          {
            explanation: "Substitute \\(y = mx\\) into \\(x^2 + (y - 3)^2 = 4\\).",
            workingOut: "\\(x^2 + (mx - 3)^2 = 4 \\implies x^2 + m^2x^2 - 6mx + 9 = 4\\)"
          },
          {
            explanation: "Group the terms to write a quadratic equation: \\((1 + m^2)x^2 - 6mx + 5 = 0\\). Set \\(\\Delta > 0\\) for two intersections.",
            workingOut: "\\(\\Delta = (-6m)^2 - 4(1 + m^2)(5) > 0 \\implies 36m^2 - 20(1 + m^2) > 0\\)"
          },
          {
            explanation: "Simplify the inequality and solve for \\(m\\).",
            workingOut: "\\(16m^2 - 20 > 0 \\implies m^2 > \\frac{5}{4} \\implies m < -\\frac{\\sqrt{5}}{2} \\quad \\text{or} \\quad m > \\frac{\\sqrt{5}}{2}\\)"
          }
        ]
      },
      {
        id: 'y11a-4c-q15-sub2',
        type: 'multiple_choice',
        question: 'Part (b): Find the equation of the vertical line passing through the origin that also intersects the circle twice.',
        options: mapOptions(['x = 0', 'y = 0', 'x = 3', 'x = 2']),
        answer: '0',
        solutionSteps: [
          {
            explanation: "A straight line passing through the origin that is not a function (so it has no defined slope \\(m\\)) must be the vertical line.",
            workingOut: "\\(x = 0\\)"
          },
          {
            explanation: "Substitute \\(x = 0\\) back into the circle equation to verify it has two intersection points.",
            workingOut: "\\(0^2 + (y - 3)^2 = 4 \\implies y - 3 = \\pm 2 \\implies y = 1 \\quad \\text{or} \\quad y = 5\\)"
          }
        ]
      }
    ]
  });
  const q15Updated = await q15Ref.get();
  const q15Subs = q15Updated.data().subQuestions;
  const q15Answers = {
    'y11a-4c-q15-sub1': 'm < -\\frac{\\sqrt{5}}{2} \\text{ or } m > \\frac{\\sqrt{5}}{2}',
    'y11a-4c-q15-sub2': 'x = 0'
  };
  const shuffledQ15Subs = q15Subs.map(sq => {
    const correctText = q15Answers[sq.id];
    const shuffled = shuffleArray(sq.options);
    const index = shuffled.findIndex(opt => opt.text === correctText);
    return { ...sq, options: shuffled, answer: String(index >= 0 ? index : 0) };
  });
  await q15Ref.update({ subQuestions: shuffledQ15Subs });
  console.log('Restructured y11a-4c-q15');

  // 11. Restructure y11a-4c-q16 (line y = mx + b is tangent to parabola y = 2x^2)
  const q16Ref = db.collection('questions').doc('y11a-4c-q16');
  await q16Ref.update({
    type: 'subquestions',
    options: FieldValue.delete(),
    answer: FieldValue.delete(),
    solutionSteps: FieldValue.delete(),
    subQuestions: [
      {
        id: 'y11a-4c-q16-sub1',
        type: 'multiple_choice',
        question: 'Part (a): If the line is tangent to the parabola, show that \\(b\\) must equal:',
        options: mapOptions(['-\\frac{1}{8}m^2', '\\frac{1}{8}m^2', '-\\frac{1}{4}m^2', '-8m^2']),
        answer: '0',
        solutionSteps: [
          {
            explanation: "Set the parabola equation equal to the line equation.",
            workingOut: "\\(2x^2 = mx + b \\implies 2x^2 - mx - b = 0\\)"
          },
          {
            explanation: "For tangency, set the discriminant of this quadratic equation equal to zero.",
            workingOut: "\\(\\Delta = (-m)^2 - 4(2)(-b) = 0 \\implies m^2 + 8b = 0\\)"
          },
          {
            explanation: "Solve for \\(b\\) in terms of \\(m\\).",
            workingOut: "\\(b = -\\frac{1}{8}m^2\\)"
          }
        ]
      },
      {
        id: 'y11a-4c-q16-sub2',
        type: 'multiple_choice',
        question: 'Part (b): Hence find the coordinates of the point of contact in terms of \\(m\\).',
        options: mapOptions([
          '\\(\\left(\\frac{m}{4}, \\frac{m^2}{8}\\right)\\)',
          '\\(\\left(\\frac{m}{2}, \\frac{m^2}{4}\\right)\\)',
          '\\(\\left(\\frac{m}{4}, \\frac{m^2}{4}\\right)\\)',
          '\\(\\left(\\frac{m}{8}, \\frac{m^2}{16}\\right)\\)'
        ]),
        answer: '0',
        solutionSteps: [
          {
            explanation: "Since the line is tangent, the double root \\(x\\) is given by the axis of symmetry formula.",
            workingOut: "\\(x = -\\frac{b_{coeff}}{2a} = -\\frac{-m}{2(2)} = \\frac{m}{4}\\)"
          },
          {
            explanation: "Substitute \\(x = \\frac{m}{4}\\) back into the parabola equation to find the \\(y\\)-coordinate.",
            workingOut: "\\(y = 2x^2 = 2\\left(\\frac{m}{4}\\right)^2 = 2\\left(\\frac{m^2}{16}\\right) = \\frac{m^2}{8}\\)"
          }
        ]
      }
    ]
  });
  const q16Updated = await q16Ref.get();
  const q16Subs = q16Updated.data().subQuestions;
  const q16Answers = {
    'y11a-4c-q16-sub1': '-\\frac{1}{8}m^2',
    'y11a-4c-q16-sub2': '\\(\\left(\\frac{m}{4}, \\frac{m^2}{8}\\right)\\)'
  };
  const shuffledQ16Subs = q16Subs.map(sq => {
    const correctText = q16Answers[sq.id];
    const shuffled = shuffleArray(sq.options);
    const index = shuffled.findIndex(opt => opt.text === correctText);
    return { ...sq, options: shuffled, answer: String(index >= 0 ? index : 0) };
  });
  await q16Ref.update({ subQuestions: shuffledQ16Subs });
  console.log('Restructured y11a-4c-q16');

  // 12. y11a-4c-q17
  await enrichQuestion('y11a-4c-q17', {
    options: [
      '\\(y = 2x + 1\\) or \\(y = 6x + 9\\)',
      '\\(y = -2x - 1\\) or \\(y = -6x - 9\\)',
      '\\(y = 2x - 1\\) or \\(y = 6x - 9\\)',
      '\\(y = 2x - 1\\) only'
    ]
  }, '\\(y = 2x - 1\\) or \\(y = 6x - 9\\)', [
    {
      explanation: "Substitute the point \\((2, 3)\\) into the line equation \\(y = mx + b\\) to get an expression for \\(b\\) in terms of \\(m\\).",
      workingOut: "\\(3 = 2m + b \\implies b = 3 - 2m\\)"
    },
    {
      explanation: "Equate the line equation and the parabola \\(y = x^2\\) to study their intersection.",
      workingOut: "\\(x^2 = mx + b \\implies x^2 - mx - b = 0\\)"
    },
    {
      explanation: "For the line to be tangent to the parabola, set the discriminant equal to zero and substitute \\(b = 3 - 2m\\).",
      workingOut: "\\(\\Delta = b_{coeff}^2 - 4ac = (-m)^2 - 4(1)(-b) = m^2 + 4b = 0\\)"
    },
    {
      explanation: "Substitute \\(b\\) and solve the quadratic equation for \\(m\\).",
      workingOut: "\\(m^2 + 4(3 - 2m) = 0 \\implies m^2 - 8m + 12 = 0 \\implies (m - 2)(m - 6) = 0 \\implies m = 2 \\text{ or } m = 6\\)"
    },
    {
      explanation: "Find the corresponding values of \\(b\\) and write down the two line equations.",
      workingOut: "\\text{For } m=2: b=3-2(2)=-1 \\implies y = 2x - 1; \\quad \\text{For } m=6: b=3-2(6)=-9 \\implies y = 6x - 9"
    }
  ]);

  // 13. y11a-4c-q18
  await enrichQuestion('y11a-4c-q18', {
    options: [
      '\\(\\frac{1}{9} < m < 9\\)',
      '\\(m < \\frac{1}{9}\\) or \\(m > 9\\)',
      '\\(-9 < m < -\\frac{1}{9}\\)',
      '\\(1 < m < 9\\)'
    ]
  }, '\\(\\frac{1}{9} < m < 9\\)', [
    {
      explanation: "Substitute the point \\((-3, -3)\\) into the line equation \\(y = mx + b\\) to find \\(b\\).",
      workingOut: "\\(-3 = -3m + b \\implies b = 3m - 3\\)"
    },
    {
      explanation: "Equate the line equation and the hyperbola \\(y = -\\frac{16}{x}\\).",
      workingOut: "\\(mx + 3m - 3 = -\\frac{16}{x}\\)"
    },
    {
      explanation: "Multiply the entire equation by \\(x\\) to form a quadratic equation.",
      workingOut: "\\(mx^2 + (3m - 3)x + 16 = 0\\)"
    },
    {
      explanation: "For the line not to intersect the hyperbola, set the discriminant to be strictly negative.",
      workingOut: "\\(\\Delta = (3m - 3)^2 - 4(m)(16) < 0\\)"
    },
    {
      explanation: "Simplify the quadratic inequality.",
      workingOut: "\\(9m^2 - 18m + 9 - 64m < 0 \\implies 9m^2 - 82m + 9 < 0\\)"
    },
    {
      explanation: "Factor the quadratic and solve for \\(m\\).",
      workingOut: "\\((9m - 1)(m - 9) < 0 \\implies \\frac{1}{9} < m < 9\\)"
    }
  ]);

  // 14. Restructure y11a-4c-q19 (Prove roots properties)
  const q19Ref = db.collection('questions').doc('y11a-4c-q19');
  await q19Ref.update({
    type: 'subquestions',
    options: FieldValue.delete(),
    answer: FieldValue.delete(),
    solutionSteps: FieldValue.delete(),
    subQuestions: [
      {
        id: 'y11a-4c-q19-sub1',
        type: 'multiple_choice',
        question: 'Part (a): Find the discriminant of \\(x^2 + (\\lambda + 2)x + (\\lambda - 3) = 0\\) and explain why the roots are always real.',
        options: mapOptions([
          '\\(\\Delta = \\lambda^2 + 16 > 0\\); positive for all real \\(\\lambda\\)',
          '\\(\\Delta = \\lambda^2 + 4 > 0\\); positive for all real \\(\\lambda\\)',
          '\\(\\Delta = \\lambda^2 - 16\\); positive only for large \\(\\lambda\\)',
          '\\(\\Delta = \\lambda^2 + 8 > 0\\); positive for all real \\(\\lambda\\)'
        ]),
        answer: '0',
        solutionSteps: [
          {
            explanation: "Determine the discriminant.",
            workingOut: "\\(\\Delta = (\\lambda + 2)^2 - 4(1)(\\lambda - 3)\\)"
          },
          {
            explanation: "Expand and simplify terms.",
            workingOut: "\\(\\Delta = (\\lambda^2 + 4\\lambda + 4) - 4\\lambda + 12 = \\lambda^2 + 16\\)"
          },
          {
            explanation: "Since \\(\\lambda^2 \\ge 0\\) for all real numbers, \\(\\lambda^2 + 16\\) is always positive, proving the roots are real and distinct.",
            workingOut: "\\(\\lambda^2 + 16 \\ge 16 > 0\\)"
          }
        ]
      },
      {
        id: 'y11a-4c-q19-sub2',
        type: 'multiple_choice',
        question: 'Part (b): For \\(x^2 + \\lambda x - 2 = 0\\), use the y-intercept of the associated parabola to explain why the roots are real and distinct.',
        options: mapOptions([
          'The y-intercept is -2, and since the parabola opens upwards, it must cross the x-axis twice.',
          'The y-intercept is 2, and since the parabola opens downwards, it must cross the x-axis twice.',
          'The y-intercept is 0, meaning it passes through the origin.',
          'The y-intercept is negative, which means the vertex is also negative.'
        ]),
        answer: '0',
        solutionSteps: [
          {
            explanation: "Find the y-intercept of the parabola \\(y = x^2 + \\lambda x - 2\\) by substituting \\(x = 0\\).",
            workingOut: "\\(y = -2\\)"
          },
          {
            explanation: "Since the leading coefficient is 1 (positive), the parabola is concave upwards. Since it passes through a point below the x-axis, it must cross the x-axis twice, resulting in two distinct real roots.",
            workingOut: ""
          }
        ]
      }
    ]
  });
  const q19Updated = await q19Ref.get();
  const q19Subs = q19Updated.data().subQuestions;
  const q19Answers = {
    'y11a-4c-q19-sub1': '\\(\\Delta = \\lambda^2 + 16 > 0\\); positive for all real \\(\\lambda\\)',
    'y11a-4c-q19-sub2': 'The y-intercept is -2, and since the parabola opens upwards, it must cross the x-axis twice.'
  };
  const shuffledQ19Subs = q19Subs.map(sq => {
    const correctText = q19Answers[sq.id];
    const shuffled = shuffleArray(sq.options);
    const index = shuffled.findIndex(opt => opt.text === correctText);
    return { ...sq, options: shuffled, answer: String(index >= 0 ? index : 0) };
  });
  await q19Ref.update({ subQuestions: shuffledQ19Subs });
  console.log('Restructured y11a-4c-q19');

  // 15. Restructure y11a-4c-q20 (Geometric analysis of line & circle)
  const q20Ref = db.collection('questions').doc('y11a-4c-q20');
  await q20Ref.update({
    type: 'multiple_choice',
    question: 'How can the intersection of the circle \\(x^2 + y^2 = r^2\\) and the line \\(Ax + By + C = 0\\) be studied using geometry?',
    options: mapOptions([
      'Calculate the perpendicular distance d from the origin to the line and compare it to the radius r.',
      'Find the intersection of the line with the x and y axes.',
      'Check the slope of the line and compare it to the radius.',
      'Calculate the area of the triangle formed by the origin and the axis intercepts.'
    ]),
    answer: '0',
    solutionSteps: [
      {
        explanation: "The perpendicular distance \\(d\\) from the center \\((0,0)\\) to the line \\(Ax + By + C = 0\\) is calculated using the distance formula.",
        workingOut: "\\(d = \\frac{|C|}{\\sqrt{A^2 + B^2}}\\)"
      },
      {
        explanation: "Compare \\(d\\) with the radius \\(r\\) of the circle.",
        workingOut: ""
      },
      {
        explanation: "If \\(d < r\\), the line cuts the circle at two points (secant). If \\(d = r\\), the line touches the circle at one point (tangent). If \\(d > r\\), the line does not intersect the circle.",
        workingOut: ""
      }
    ]
  });
  await enrichQuestion('y11a-4c-q20', {
    options: [
      'Calculate the perpendicular distance d from the origin to the line and compare it to the radius r.',
      'Find the intersection of the line with the x and y axes.',
      'Check the slope of the line and compare it to the radius.',
      'Calculate the area of the triangle formed by the origin and the axis intercepts.'
    ]
  }, 'Calculate the perpendicular distance d from the origin to the line and compare it to the radius r.', [
    {
      explanation: "The perpendicular distance \\(d\\) from the center \\((0,0)\\) to the line \\(Ax + By + C = 0\\) is calculated using the distance formula.",
      workingOut: "\\(d = \\frac{|C|}{\\sqrt{A^2 + B^2}}\\)"
    },
    {
      explanation: "Compare \\(d\\) with the radius \\(r\\) of the circle.",
      workingOut: ""
    },
    {
      explanation: "If \\(d < r\\), the line cuts the circle at two points (secant). If \\(d = r\\), the line touches the circle at one point (tangent). If \\(d > r\\), the line does not intersect the circle.",
      workingOut: ""
    }
  ]);
  console.log('Restructured y11a-4c-q20');

  // Sync version meta
  const metaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await metaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully completed remaining questions enrichment for Chapter 4C!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
