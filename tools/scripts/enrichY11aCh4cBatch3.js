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
  console.log('Enriching and shuffling Batch 3 questions of Chapter 4C...');

  // 1. y11a-4c-q8a
  await enrichQuestion('y11a-4c-q8a', {
    options: [
      '\\(k \\le -6\\) or \\(k \\ge 6\\)',
      '\\(-6 \\le k \\le 6\\)',
      '\\(k \\ge 6\\)',
      '\\(k \\le -6\\)'
    ]
  }, '\\(k \\le -6\\) or \\(k \\ge 6\\)', [
    {
      explanation: "Find the discriminant of the quadratic equation \\(x^2 + kx + 9 = 0\\). Here \\(a = 1\\), \\(b = k\\), and \\(c = 9\\).",
      workingOut: "\\(\\Delta = b^2 - 4ac = k^2 - 4(1)(9) = k^2 - 36\\)"
    },
    {
      explanation: "For real roots, the discriminant must be greater than or equal to zero.",
      workingOut: "\\(k^2 - 36 \\ge 0\\)"
    },
    {
      explanation: "Factor the difference of squares and determine the critical boundaries.",
      workingOut: "\\((k - 6)(k + 6) \\ge 0 \\implies k \\le -6 \\quad \\text{or} \\quad k \\ge 6\\)"
    }
  ]);

  // 2. y11a-4c-q8b
  await enrichQuestion('y11a-4c-q8b', {
    options: [
      '\\(-4 \\le k \\le 4\\)',
      '\\(k \\le -8\\) or \\(k \\ge 8\\)',
      '\\(k \\le -4\\) or \\(k \\ge 4\\)',
      '\\(k \\ge 4\\)'
    ]
  }, '\\(k \\le -4\\) or \\(k \\ge 4\\)', [
    {
      explanation: "Find the discriminant of the quadratic equation \\(x^2 - 2kx + 16 = 0\\). Here \\(a = 1\\), \\(b = -2k\\), and \\(c = 16\\).",
      workingOut: "\\(\\Delta = (-2k)^2 - 4(1)(16) = 4k^2 - 64\\)"
    },
    {
      explanation: "For real roots, set the discriminant to be greater than or equal to zero.",
      workingOut: "\\(4k^2 - 64 \\ge 0 \\implies 4(k^2 - 16) \\ge 0 \\implies k^2 - 16 \\ge 0\\)"
    },
    {
      explanation: "Factor the difference of squares and solve for \\(k\\).",
      workingOut: "\\((k - 4)(k + 4) \\ge 0 \\implies k \\le -4 \\quad \\text{or} \\quad k \\ge 4\\)"
    }
  ]);

  // 3. y11a-4c-q8c
  await enrichQuestion('y11a-4c-q8c', {
    options: [
      '\\(-6 \\le k \\le 2\\)',
      '\\(k \\le -2\\) or \\(k \\ge 6\\)',
      '\\(k \\le -6\\) or \\(k \\ge 2\\)',
      '\\(k \\ge 2\\)'
    ]
  }, '\\(k \\le -6\\) or \\(k \\ge 2\\)', [
    {
      explanation: "Calculate the discriminant of \\(x^2 - (2 + k)x + 4 = 0\\). Here \\(a = 1\\), \\(b = -(2+k)\\), and \\(c = 4\\).",
      workingOut: "\\(\\Delta = [-(2+k)]^2 - 4(1)(4) = (2+k)^2 - 16\\)"
    },
    {
      explanation: "Set \\(\\Delta \\ge 0\\) for real roots.",
      workingOut: "\\((2+k)^2 - 16 \\ge 0 \\implies (2+k)^2 \\ge 16\\)"
    },
    {
      explanation: "Take the square root of both sides to find the critical boundary limits.",
      workingOut: "\\(2 + k \\le -4 \\quad \\text{or} \\quad 2 + k \\ge 4\\)"
    },
    {
      explanation: "Subtract 2 from all boundary limits to solve for \\(k\\).",
      workingOut: "\\(k \\le -6 \\quad \\text{or} \\quad k \\ge 2\\)"
    }
  ]);

  // 4. y11a-4c-q8d
  await enrichQuestion('y11a-4c-q8d', {
    options: [
      '\\(-1 \\le k \\le 7\\)',
      '\\(k \\le -7\\) or \\(k \\ge 1\\)',
      '\\(k \\le -1\\) or \\(k \\ge 7\\)',
      '\\(k \\ge 7\\)'
    ]
  }, '\\(k \\le -1\\) or \\(k \\ge 7\\)', [
    {
      explanation: "Calculate the discriminant of \\(x^2 + (k - 3)x + 4 = 0\\). Here \\(a = 1\\), \\(b = k - 3\\), and \\(c = 4\\).",
      workingOut: "\\(\\Delta = (k - 3)^2 - 4(1)(4) = (k - 3)^2 - 16\\)"
    },
    {
      explanation: "Set the discriminant to be greater than or equal to zero for real roots.",
      workingOut: "\\((k - 3)^2 - 16 \\ge 0 \\implies (k - 3)^2 \\ge 16\\)"
    },
    {
      explanation: "Determine the boundaries.",
      workingOut: "\\(k - 3 \\le -4 \\quad \\text{or} \\quad k - 3 \\ge 4\\)"
    },
    {
      explanation: "Add 3 to all boundaries to solve for \\(k\\).",
      workingOut: "\\(k \\le -1 \\quad \\text{or} \\quad k \\ge 7\\)"
    }
  ]);

  // 5. y11a-4c-q9a
  await enrichQuestion('y11a-4c-q9a', {
    options: [
      '\\(\\lambda < -4\\) or \\(\\lambda > 4\\)',
      '\\(-16 < \\lambda < 16\\)',
      '\\(-4 < \\lambda < 4\\)',
      '\\(\\lambda > 4\\)'
    ]
  }, '\\(-4 < \\lambda < 4\\)', [
    {
      explanation: "A parabola \\(y = ax^2 + bx + c\\) has no \\(x\\)-intercepts when its discriminant is strictly negative.",
      workingOut: "\\(\\Delta = b^2 - 4ac < 0\\)"
    },
    {
      explanation: "For \\(y = x^2 + \\lambda x + 4\\), identify the coefficients and plug them in.",
      workingOut: "\\(\\Delta = \\lambda^2 - 4(1)(4) = \\lambda^2 - 16 < 0\\)"
    },
    {
      explanation: "Solve the inequality.",
      workingOut: "\\(\\lambda^2 < 16 \\implies -4 < \\lambda < 4\\)"
    }
  ]);

  // 6. y11a-4c-q9b
  await enrichQuestion('y11a-4c-q9b', {
    options: [
      '\\(-4 < \\lambda < 4\\)',
      '\\(\\lambda < -4\\) or \\(\\lambda > 4\\)',
      '\\(\\lambda > 4\\)',
      '\\(\\lambda < -16\\) or \\(\\lambda > 16\\)'
    ]
  }, '\\(\\lambda < -4\\) or \\(\\lambda > 4\\)', [
    {
      explanation: "Set the discriminant of \\(y = \\lambda x^2 + 8x + \\lambda\\) to be strictly negative for no \\(x\\)-intercepts.",
      workingOut: "\\(\\Delta = 8^2 - 4(\\lambda)(\\lambda) < 0\\)"
    },
    {
      explanation: "Simplify the inequality expression.",
      workingOut: "\\(64 - 4\\lambda^2 < 0 \\implies 64 < 4\\lambda^2 \\implies \\lambda^2 > 16\\)"
    },
    {
      explanation: "Take the square root to find the valid non-intersecting regions.",
      workingOut: "\\(\\lambda < -4 \\quad \\text{or} \\quad \\lambda > 4\\)"
    }
  ]);

  // 7. y11a-4c-q9c
  await enrichQuestion('y11a-4c-q9c', {
    options: [
      'All real values of \\(\\lambda\\)',
      '\\(\\lambda = -2\\)',
      'No real values of \\(\\lambda\\)',
      '\\(-4 < \\lambda < 4\\)'
    ]
  }, 'No real values of \\(\\lambda\\)', [
    {
      explanation: "For the parabola \\(y = x^2 + (2 - \\lambda)x - \\lambda\\) to have no \\(x\\)-intercepts, set the discriminant to be strictly less than zero.",
      workingOut: "\\(\\Delta = (2 - \\lambda)^2 - 4(1)(-\\lambda) < 0\\)"
    },
    {
      explanation: "Expand and simplify the algebraic terms.",
      workingOut: "\\(\\Delta = (4 - 4\\lambda + \\lambda^2) + 4\\lambda = \\lambda^2 + 4 < 0\\)"
    },
    {
      explanation: "Observe that the term \\(\\lambda^2 + 4\\) is always positive for any real value of \\(\\lambda\\), since \\(\\lambda^2 \\ge 0\\). Therefore, no real value of \\(\\lambda\\) can satisfy the inequality.",
      workingOut: "\\(\\lambda^2 + 4 \\ge 4 \\implies \\text{No real solutions}\\)"
    }
  ]);

  // 8. y11a-4c-q9d
  await enrichQuestion('y11a-4c-q9d', {
    options: [
      '\\(0 < \\lambda < \\frac{3}{5}\\)',
      '\\(\\lambda < 0\\) or \\(\\lambda > \\frac{3}{5}\\)',
      '\\(\\lambda < -\\frac{3}{5}\\) or \\(\\lambda > 0\\)',
      '\\(0 < \\lambda < \\frac{5}{3}\\)'
    ]
  }, '\\(0 < \\lambda < \\frac{3}{5}\\)', [
    {
      explanation: "Calculate the discriminant of the quadratic function \\(y = \\lambda x^2 - 4\lambda x - (\\lambda - 3)\\).",
      workingOut: "\\(\\Delta = (-4\\lambda)^2 - 4(\\lambda)(-(\\lambda - 3))\\)"
    },
    {
      explanation: "Expand and collect the quadratic terms.",
      workingOut: "\\(\\Delta = 16\\lambda^2 + 4\\lambda^2 - 12\\lambda = 20\\lambda^2 - 12\\lambda\\)"
    },
    {
      explanation: "Set the discriminant to be strictly negative for no zeroes, and factor the expression.",
      workingOut: "\\(20\\lambda^2 - 12\\lambda < 0 \\implies 4\\lambda(5\\lambda - 3) < 0\\)"
    },
    {
      explanation: "Solve the factored quadratic inequality.",
      workingOut: "\\(0 < \\lambda < \\frac{3}{5}\\)"
    }
  ]);

  // 9. Restructure y11a-4c-q10 into subquestions format with MCQs and step-by-step solutions
  const q9Ref = db.collection('questions').doc('y11a-4c-q10');
  await q9Ref.update({
    type: 'subquestions',
    options: FieldValue.delete(),
    answer: FieldValue.delete(),
    solutionSteps: FieldValue.delete(),
    subQuestions: [
      {
        id: 'y11a-4c-q10-sub1',
        type: 'multiple_choice',
        question: 'Part (a): If \\(y = ax^2 + bx + c\\), rearrange it to complete the square on the left-hand side. What quantity must be added to both sides?',
        options: mapOptions(['\\(\\frac{b^2}{4a^2}\\)', '\\(\\frac{b^2}{2a^2}\\)', '\\(\\frac{b}{2a}\\)', '\\(\\frac{b^2}{4a}\\)']),
        answer: '0', // index of \\(\\frac{b^2}{4a^2}\\) after shuffling, we will shuffle below
        solutionSteps: [
          {
            explanation: "Divide the parabola equation by \\(a\\) and group the \\(x\\) terms.",
            workingOut: "\\(x^2 + \\frac{b}{a}x = \\frac{y - c}{a}\\)"
          },
          {
            explanation: "To complete the square on \\(x^2 + \\frac{b}{a}x\\), add the square of half the coefficient of \\(x\\). Half of \\(\\frac{b}{a}\\) is \\(\\frac{b}{2a}\\).",
            workingOut: "\\(\\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2}\\)"
          }
        ]
      },
      {
        id: 'y11a-4c-q10-sub2',
        type: 'multiple_choice',
        question: 'Part (b): Why are there no real zeroes when the discriminant \\(\\Delta < 0\\)?',
        options: mapOptions([
          'A perfect square of a real number cannot be negative.',
          'The coefficient a must be positive.',
          'The square root of a negative number is zero.',
          'The vertex of the parabola lies on the x-axis.'
        ]),
        answer: 'A perfect square of a real number cannot be negative.',
        solutionSteps: [
          {
            explanation: "When \\(y = 0\\), the completed square equation is written in terms of the discriminant \\(\\Delta = b^2 - 4ac\\).",
            workingOut: "\\(\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{\\Delta}{4a^2}\\)"
          },
          {
            explanation: "Since the left-hand side is a squared real number, it is always non-negative. If \\(\\Delta < 0\\), the right-hand side is strictly negative, which is a contradiction. Therefore, no real zeroes exist.",
            workingOut: ""
          }
        ]
      },
      {
        id: 'y11a-4c-q10-sub3',
        type: 'multiple_choice',
        question: 'Part (c): What does the equation reduce to when \\(\\Delta = 0\\), and how many roots does it yield?',
        options: mapOptions([
          '\\(x = -\\frac{b}{2a}\\); one double root',
          '\\(x = \\frac{b}{2a}\\); two distinct roots',
          '\\(x = 0\\); one root',
          'No real roots'
        ]),
        answer: '\\(x = -\\frac{b}{2a}\\); one double root',
        solutionSteps: [
          {
            explanation: "Substitute \\(\\Delta = 0\\) into the completed square equation.",
            workingOut: "\\(\\left(x + \\frac{b}{2a}\\right)^2 = 0\\)"
          },
          {
            explanation: "Take the square root of both sides and solve for \\(x\\).",
            workingOut: "\\(x + \\frac{b}{2a} = 0 \\implies x = -\\frac{b}{2a}\\)"
          }
        ]
      },
      {
        id: 'y11a-4c-q10-sub4',
        type: 'multiple_choice',
        question: 'Part (d): Derive the roots when \\(\\Delta > 0\\). Which formula describes the solutions?',
        options: mapOptions([
          '\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)',
          '\\(x = \\frac{-b \\pm (b^2 - 4ac)}{2a}\\)',
          '\\(x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)',
          '\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{a}\\)'
        ]),
        answer: '\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)',
        solutionSteps: [
          {
            explanation: "Take the square root on both sides when \\(\\Delta > 0\\).",
            workingOut: "\\(x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{\\Delta}}{2a}\\)"
          },
          {
            explanation: "Subtract \\(\\frac{b}{2a}\\) from both sides and combine terms over the common denominator.",
            workingOut: "\\(x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)"
          }
        ]
      }
    ]
  });

  // Shuffle sub-question options and update answer indices for y11a-4c-q10
  const q9UpdatedDoc = await q9Ref.get();
  const subQuestions = q9UpdatedDoc.data().subQuestions;
  const subAnswersMap = {
    'y11a-4c-q10-sub1': '\\(\\frac{b^2}{4a^2}\\)',
    'y11a-4c-q10-sub2': 'A perfect square of a real number cannot be negative.',
    'y11a-4c-q10-sub3': '\\(x = -\\frac{b}{2a}\\); one double root',
    'y11a-4c-q10-sub4': '\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)'
  };
  const shuffledSubQuestions = subQuestions.map(sq => {
    const correctText = subAnswersMap[sq.id];
    const shuffledOpts = shuffleArray(sq.options);
    const index = shuffledOpts.findIndex(opt => opt.text === correctText);
    return {
      ...sq,
      options: shuffledOpts,
      answer: String(index >= 0 ? index : 0)
    };
  });
  await q9Ref.update({
    subQuestions: shuffledSubQuestions
  });
  console.log('Successfully restructured and shuffled subquestions for y11a-4c-q10');

  // 10. y11a-4c-q11a
  await enrichQuestion('y11a-4c-q11a', {
    options: [
      '2 intersections at \\(x = 3\\) and \\(x = -3\\)',
      'No intersections',
      '1 intersection at \\(x = 3\\)',
      '1 intersection at \\(x = -3\\)'
    ]
  }, '1 intersection at \\(x = 3\\)', [
    {
      explanation: "Equate the parabola \\(y = x^2 + 2x + 2\\) and the line \\(y = 8x - 7\\) to find their points of intersection.",
      workingOut: "\\(x^2 + 2x + 2 = 8x - 7\\)"
    },
    {
      explanation: "Rearrange the equation into standard quadratic form \\(ax^2 + bx + c = 0\\).",
      workingOut: "\\(x^2 - 6x + 9 = 0\\)"
    },
    {
      explanation: "Find the discriminant of the resulting equation: \\(a = 1\\), \\(b = -6\\), and \\(c = 9\\).",
      workingOut: "\\(\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0\\)"
    },
    {
      explanation: "Since \\(\\Delta = 0\\), the line is tangent to the parabola, resulting in exactly one point of intersection.",
      workingOut: ""
    },
    {
      explanation: "Solve the quadratic equation to find the \\(x\\)-coordinate.",
      workingOut: "\\((x - 3)^2 = 0 \\implies x = 3\\)"
    }
  ]);

  // Sync version meta
  const metaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await metaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully completed third 10 questions enrichment for Chapter 4C!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
