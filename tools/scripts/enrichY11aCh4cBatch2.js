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
  console.log('Enriching and shuffling next 10 questions of Chapter 4C...');

  // 1. y11a-4c-q4d
  await enrichQuestion('y11a-4c-q4d', {
    options: [
      '\\(p \\le 1\\)',
      '\\(p \\ge 1\\)',
      '\\(p \\le 3\\)',
      '\\(p \\le \\frac{1}{3}\\)'
    ]
  }, '\\(p \\le 1\\)', [
    {
      explanation: "A quadratic equation has real roots when the discriminant is greater than or equal to zero.",
      workingOut: "\\(\\Delta = b^2 - 4ac \\ge 0\\)"
    },
    {
      explanation: "For the equation \\((3p - 1)x^2 - 4x + 2 = 0\\), identify the coefficients: \\(a = 3p - 1\\), \\(b = -4\\), and \\(c = 2\\). Substitute these into the inequality.",
      workingOut: "\\((-4)^2 - 4(3p - 1)(2) \\ge 0\\)"
    },
    {
      explanation: "Expand the terms and collect variable elements.",
      workingOut: "\\(16 - 8(3p - 1) \\ge 0 \\implies 16 - 24p + 8 \\ge 0 \\implies 24 - 24p \\ge 0\\)"
    },
    {
      explanation: "Solve the inequality for \\(p\\). Remember that since this is a quadratic equation, the coefficient of \\(x^2\\) must also be non-zero.",
      workingOut: "\\(24 \\ge 24p \\implies p \\le 1 \\quad (\\text{where } p \\ne \\frac{1}{3})\\)"
    }
  ]);

  // 2. y11a-4c-q5a
  await enrichQuestion('y11a-4c-q5a', {
    options: [
      '\\(\\lambda > 16\\)',
      '\\(\\lambda < 16\\)',
      '\\(\\lambda > 64\\)',
      '\\(\\lambda < -16\\)'
    ]
  }, '\\(\\lambda > 16\\)', [
    {
      explanation: "A quadratic equation has no zeroes (no real roots) when its discriminant is strictly less than zero.",
      workingOut: "\\(\\Delta = b^2 - 4ac < 0\\)"
    },
    {
      explanation: "Identify the coefficients of the equation \\(x^2 + 8x + \lambda = 0\\): \\(a = 1\\), \\(b = 8\\), and \\(c = \\lambda\\). Substitute them into the discriminant.",
      workingOut: "\\(8^2 - 4(1)(\\lambda) < 0\\)"
    },
    {
      explanation: "Solve the inequality for \\(\\lambda\\).",
      workingOut: "\\(64 - 4\\lambda < 0 \\implies 64 < 4\\lambda \\implies \\lambda > 16\\)"
    }
  ]);

  // 3. y11a-4c-q5b
  await enrichQuestion('y11a-4c-q5b', {
    options: [
      '\\(\\lambda < 18\\)',
      '\\(\\lambda > 18\\)',
      '\\(\\lambda > 144\\)',
      '\\(\\lambda < -18\\)'
    ]
  }, '\\(\\lambda > 18\\)', [
    {
      explanation: "For the equation to have no zeroes, the discriminant must be strictly less than zero.",
      workingOut: "\\(\\Delta = b^2 - 4ac < 0\\)"
    },
    {
      explanation: "Substitute the coefficients \\(a = \\lambda\\), \\(b = -12\\), and \\(c = 2\\) into the discriminant.",
      workingOut: "\\((-12)^2 - 4(\\lambda)(2) < 0\\)"
    },
    {
      explanation: "Solve the inequality for \\(\\lambda\\).",
      workingOut: "\\(144 - 8\\lambda < 0 \\implies 144 < 8\\lambda \\implies \\lambda > 18\\)"
    }
  ]);

  // 4. y11a-4c-q5c
  await enrichQuestion('y11a-4c-q5c', {
    options: [
      '\\(\\lambda < \\frac{37}{12}\\)',
      '\\(\\lambda > \\frac{49}{12}\\)',
      '\\(\\lambda > \\frac{37}{13}\\)',
      '\\(\\lambda > \\frac{37}{12}\\)'
    ]
  }, '\\(\\lambda > \\frac{37}{12}\\)', [
    {
      explanation: "Identify the conditions for no real zeroes: \\(\\Delta < 0\\).",
      workingOut: "\\(\\Delta = b^2 - 4ac < 0\\)"
    },
    {
      explanation: "For the equation \\(3x^2 - 7x + (\\lambda + 1) = 0\\), plug the coefficients into the discriminant equation.",
      workingOut: "\\((-7)^2 - 4(3)(\\lambda + 1) < 0\\)"
    },
    {
      explanation: "Expand and simplify.",
      workingOut: "\\(49 - 12(\\lambda + 1) < 0 \\implies 49 - 12\\lambda - 12 < 0 \\implies 37 - 12\\lambda < 0\\)"
    },
    {
      explanation: "Isolate \\(\\lambda\\) to find the final range.",
      workingOut: "\\(37 < 12\\lambda \\implies \\lambda > \\frac{37}{12}\\)"
    }
  ]);

  // 5. y11a-4c-q5d
  await enrichQuestion('y11a-4c-q5d', {
    options: [
      '\\(\\lambda < 6\\)',
      '\\(\\lambda > 2\\)',
      '\\(\\lambda > 4\\)',
      '\\(\\lambda > 6\\)'
    ]
  }, '\\(\\lambda > 6\\)', [
    {
      explanation: "Set the discriminant to be strictly less than zero for no zeroes.",
      workingOut: "\\(\\Delta = b^2 - 4ac < 0\\)"
    },
    {
      explanation: "For the quadratic equation \\((\\lambda - 2)x^2 + 8x + 4 = 0\\), substitute \\(a = \\lambda - 2\\), \\(b = 8\\), and \\(c = 4\\).",
      workingOut: "\\(8^2 - 4(\\lambda - 2)(4) < 0\\)"
    },
    {
      explanation: "Simplify the inequality.",
      workingOut: "\\(64 - 16(\\lambda - 2) < 0 \\implies 64 - 16\\lambda + 32 < 0 \\implies 96 - 16\\lambda < 0\\)"
    },
    {
      explanation: "Solve for \\(\\lambda\\).",
      workingOut: "\\(96 < 16\\lambda \\implies \\lambda > 6\\)"
    }
  ]);

  // 6. y11a-4c-q6a
  await enrichQuestion('y11a-4c-q6a', {
    options: [
      '\\(g = \\pm 5\\)',
      '\\(g = \\pm 10\\)',
      '\\(g = 5\\) only',
      '\\(g = \\pm 2.5\\)'
    ]
  }, '\\(g = \\pm 5\\)', [
    {
      explanation: "Find the discriminant of \\(y = gx^2 - 10x + g\\). Here \\(a = g\\), \\(b = -10\\), and \\(c = g\\).",
      workingOut: "\\(\\Delta = (-10)^2 - 4(g)(g) = 100 - 4g^2\\)"
    },
    {
      explanation: "Set the discriminant equal to zero to find the conditions for exactly one zero.",
      workingOut: "\\(100 - 4g^2 = 0\\)"
    },
    {
      explanation: "Solve the equation for \\(g\\).",
      workingOut: "\\(4g^2 = 100 \\implies g^2 = 25 \\implies g = \\pm 5\\)"
    }
  ]);

  // 7. y11a-4c-q6b
  await enrichQuestion('y11a-4c-q6b', {
    options: [
      '\\(g = -2\\) or \\(g = -6\\)',
      '\\(g = 2\\) or \\(g = 6\\)',
      '\\(g = 4\\) or \\(g = 12\\)',
      '\\(g = 3\\) only'
    ]
  }, '\\(g = 2\\) or \\(g = 6\\)', [
    {
      explanation: "For the function \\(y = 4x^2 + 2gx + (2g - 3)\\), express the discriminant.",
      workingOut: "\\(\\Delta = (2g)^2 - 4(4)(2g - 3) = 4g^2 - 16(2g - 3)\\)"
    },
    {
      explanation: "Factor out 4 to simplify the expression, then set the discriminant to zero.",
      workingOut: "\\(4(g^2 - 8g + 12) = 0 \\implies g^2 - 8g + 12 = 0\\)"
    },
    {
      explanation: "Factor the quadratic expression to solve for the values of \\(g\\).",
      workingOut: "\\((g - 2)(g - 6) = 0 \\implies g = 2 \\quad \\text{or} \\quad g = 6\\)"
    }
  ]);

  // 8. y11a-4c-q6c
  await enrichQuestion('y11a-4c-q6c', {
    options: [
      '\\(g = 6\\) or \\(g = -10\\)',
      '\\(g = \\pm 6\\)',
      '\\(g = 4\\) or \\(g = -8\\)',
      '\\(g = 8\\) or \\(g = -4\\)'
    ]
  }, '\\(g = 4\\) or \\(g = -8\\)', [
    {
      explanation: "Find the discriminant of the function \\(y = 4x^2 - 2(g + 2)x + 9\\). Here \\(a = 4\\), \\(b = -2(g+2)\\), and \\(c = 9\\).",
      workingOut: "\\(\\Delta = [-2(g+2)]^2 - 4(4)(9) = 4(g+2)^2 - 144\\)"
    },
    {
      explanation: "Set the discriminant to zero to solve for exactly one zero.",
      workingOut: "\\(4(g+2)^2 - 144 = 0 \\implies 4(g+2)^2 = 144\\)"
    },
    {
      explanation: "Divide both sides by 4 and take the square root of both sides.",
      workingOut: "\\((g+2)^2 = 36 \\implies g+2 = \\pm 6\\)"
    },
    {
      explanation: "Solve the two linear equations for \\(g\\).",
      workingOut: "\\(g+2 = 6 \\implies g = 4; \\quad g+2 = -6 \\implies g = -8\\)"
    }
  ]);

  // 9. y11a-4c-q6d
  await enrichQuestion('y11a-4c-q6d', {
    options: [
      '\\(g = -\\frac{5}{8}\\)',
      '\\(g = \\frac{5}{16}\\)',
      '\\(g = \\frac{5}{8}\\)',
      '\\(g = \\frac{8}{5}\\)'
    ]
  }, '\\(g = \\frac{5}{8}\\)', [
    {
      explanation: "Formulate the discriminant of \\(y = (2g - 1)x^2 + (4g - 1)x + (2g + 1)\\). Here \\(a = 2g - 1\\), \\(b = 4g - 1\\), and \\(c = 2g + 1\\).",
      workingOut: "\\(\\Delta = (4g - 1)^2 - 4(2g - 1)(2g + 1)\\)"
    },
    {
      explanation: "Expand and simplify the algebraic expression.",
      workingOut: "\\(\\Delta = (16g^2 - 8g + 1) - 4(4g^2 - 1) = 16g^2 - 8g + 1 - 16g^2 + 4 = -8g + 5\\)"
    },
    {
      explanation: "Set the discriminant to zero to solve for \\(g\\). Check that the coefficient of \\(x^2\\) is non-zero.",
      workingOut: "\\(-8g + 5 = 0 \\implies g = \\frac{5}{8} \\quad (\\text{since } 2(\\frac{5}{8})-1 \\ne 0)\\)"
    }
  ]);

  // 10. Restructure y11a-4c-q7 into subquestions format with MCQs and step-by-step solutions
  const q10Ref = db.collection('questions').doc('y11a-4c-q7');
  await q10Ref.update({
    type: 'subquestions',
    options: FieldValue.delete(),
    answer: FieldValue.delete(),
    solutionSteps: FieldValue.delete(),
    subQuestions: [
      {
        id: 'y11a-4c-q7-sub1',
        type: 'multiple_choice',
        question: 'Part (a): Determine the discriminant of the parabola \\(y = gx^2 - 2gx + 3\\).',
        options: mapOptions(['4g^2 - 12g', '4g^2 - 12', '2g^2 - 12g', '4g^2 + 12g']),
        answer: '4g^2 - 12g',
        solutionSteps: [
          {
            explanation: "Identify the coefficients of the quadratic equation.",
            workingOut: "\\(a = g, \\quad b = -2g, \\quad c = 3\\)"
          },
          {
            explanation: "Substitute into the discriminant formula \\(\\Delta = b^2 - 4ac\\).",
            workingOut: "\\(\\Delta = (-2g)^2 - 4(g)(3)\\)"
          },
          {
            explanation: "Simplify the squared term and multiplication.",
            workingOut: "\\(\\Delta = 4g^2 - 12g\\)"
          }
        ]
      },
      {
        id: 'y11a-4c-q7-sub2',
        type: 'multiple_choice',
        question: 'Part (b): Find the values of \\(g\\) which make \\(\\Delta = 0\\).',
        options: mapOptions(['g = 0 \\text{ or } g = 3', 'g = 0 \\text{ or } g = -3', 'g = 3 \\text{ only}', 'g = \\pm 3']),
        answer: 'g = 0 \\text{ or } g = 3',
        solutionSteps: [
          {
            explanation: "Set the discriminant expression equal to zero.",
            workingOut: "\\(4g^2 - 12g = 0\\)"
          },
          {
            explanation: "Factor out the common term \\(4g\\).",
            workingOut: "\\(4g(g - 3) = 0\\)"
          },
          {
            explanation: "Solve for \\(g\\).",
            workingOut: "\\(g = 0 \\quad \\text{or} \\quad g = 3\\)"
          }
        ]
      },
      {
        id: 'y11a-4c-q7-sub3',
        type: 'multiple_choice',
        question: 'Part (c): Which value of \\(g\\) is not valid in this case, and why?',
        options: mapOptions([
          'g = 0 is invalid because it ceases to be a quadratic function.',
          'g = 3 is invalid because it makes the discriminant positive.',
          'g = 0 is invalid because the parabola must pass through the origin.',
          'Both values are valid.'
        ]),
        answer: 'g = 0 is invalid because it ceases to be a quadratic function.',
        solutionSteps: [
          {
            explanation: "Examine the effect of \\(g = 0\\) on the leading term coefficient.",
            workingOut: ""
          },
          {
            explanation: "Substitute \\(g = 0\\) back into \\(y = gx^2 - 2gx + 3\\).",
            workingOut: "\\(y = 0x^2 - 2(0)x + 3 \\implies y = 3\\)"
          },
          {
            explanation: "Since \\(y = 3\\) is a straight line, not a parabola (quadratic function), the value \\(g = 0\\) is mathematically invalid.",
            workingOut: ""
          }
        ]
      },
      {
        id: 'y11a-4c-q7-sub4',
        type: 'multiple_choice',
        question: 'Part (d): Write down the equation of the parabola that has a double zero.',
        options: mapOptions(['y = 3x^2 - 6x + 3', 'y = 3x^2 - 6x', 'y = 3x^2 + 6x + 3', 'y = x^2 - 2x + 1']),
        answer: 'y = 3x^2 - 6x + 3',
        solutionSteps: [
          {
            explanation: "Identify the valid non-zero value of \\(g\\) that yields a double zero.",
            workingOut: "\\(g = 3\\)"
          },
          {
            explanation: "Substitute \\(g = 3\\) into the original parabola equation \\(y = gx^2 - 2gx + 3\\).",
            workingOut: "\\(y = 3x^2 - 2(3)x + 3\\)"
          },
          {
            explanation: "Simplify the final equation.",
            workingOut: "\\(y = 3x^2 - 6x + 3\\)"
          }
        ]
      }
    ]
  });
  console.log('Successfully restructured and shuffled subquestions for y11a-4c-q7');

  // Sync version meta
  const metaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await metaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully completed second 10 questions enrichment for Chapter 4C!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
