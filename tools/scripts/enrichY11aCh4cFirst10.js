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

  // Map to structured objects first
  const mappedOpts = mapOptions(data.options);
  const shuffledOpts = shuffleArray(mappedOpts);

  // Find where the correct answer ended up
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
  console.log('Enriching and shuffling first 10 questions of Chapter 4C...');

  // 1. y11a-4c-q1a
  await enrichQuestion('y11a-4c-q1a', {
    options: [
      'No real zeroes (\\(\\Delta < 0\\))',
      'Two distinct irrational zeroes (\\(\\Delta > 0\\), not a perfect square)',
      'Two equal rational zeroes (\\(\\Delta = 0\\))',
      'Two distinct rational zeroes (\\(\\Delta > 0\\), a perfect square)'
    ]
  }, 'Two distinct irrational zeroes (\\(\\Delta > 0\\), not a perfect square)', [
    {
      explanation: "Identify the value and sign of the given discriminant: \\(\\Delta = 5\\).",
      workingOut: "\\(\\Delta = 5 > 0\\)"
    },
    {
      explanation: "Since \\(\\Delta > 0\\), the quadratic has two distinct real zeroes.",
      workingOut: ""
    },
    {
      explanation: "Examine whether the value is a perfect square. Because 5 is not a perfect square, the square root of the discriminant \\(\\sqrt{5}\\) is irrational, yielding two distinct irrational zeroes.",
      workingOut: ""
    }
  ]);

  // 2. y11a-4c-q1b
  await enrichQuestion('y11a-4c-q1b', {
    options: [
      'Two equal rational zeroes (\\(\\Delta = 0\\))',
      'Two distinct rational zeroes (\\(\\Delta > 0\\), a perfect square)',
      'No real zeroes (\\(\\Delta < 0\\))',
      'Two distinct irrational zeroes (\\(\\Delta > 0\\), not a perfect square)'
    ]
  }, 'No real zeroes (\\(\\Delta < 0\\))', [
    {
      explanation: "Check the sign of the given discriminant: \\(\\Delta = -4\\).",
      workingOut: "\\(\\Delta = -4 < 0\\)"
    },
    {
      explanation: "Since the discriminant is strictly negative, the square root term \\(\\sqrt{\\Delta}\\) is imaginary. Therefore, the quadratic has no real zeroes.",
      workingOut: ""
    }
  ]);

  // 3. y11a-4c-q1c
  await enrichQuestion('y11a-4c-q1c', {
    options: [
      'No real zeroes (\\(\\Delta < 0\\))',
      'Two distinct irrational zeroes (\\(\\Delta > 0\\), not a perfect square)',
      'Two equal rational zeroes (\\(\\Delta = 0\\))',
      'Two distinct rational zeroes (\\(\\Delta > 0\\), a perfect square)'
    ]
  }, 'Two equal rational zeroes (\\(\\Delta = 0\\))', [
    {
      explanation: "Observe the value of the given discriminant: \\(\\Delta = 0\\).",
      workingOut: "\\(\\Delta = 0\\)"
    },
    {
      explanation: "When \\(\\Delta = 0\\), the term under the square root in the quadratic formula becomes zero.",
      workingOut: "x = \\frac{-b \\pm \\sqrt{0}}{2a} = \\frac{-b}{2a}"
    },
    {
      explanation: "This results in exactly one unique real solution, which is a pair of equal rational zeroes (also known as a double root).",
      workingOut: ""
    }
  ]);

  // 4. y11a-4c-q1d
  await enrichQuestion('y11a-4c-q1d', {
    options: [
      'No real zeroes (\\(\\Delta < 0\\))',
      'Two distinct rational zeroes (\\(\\Delta > 0\\), a perfect square)',
      'Two distinct irrational zeroes (\\(\\Delta > 0\\), not a perfect square)',
      'Two equal rational zeroes (\\(\\Delta = 0\\))'
    ]
  }, 'Two distinct rational zeroes (\\(\\Delta > 0\\), a perfect square)', [
    {
      explanation: "Analyze the sign of the given discriminant: \\(\\Delta = 9\\).",
      workingOut: "\\(\\Delta = 9 > 0\\)"
    },
    {
      explanation: "Identify if 9 is a perfect square. Since \\(9 = 3^2\\), its square root is rational.",
      workingOut: "\\(\\sqrt{9} = 3\\)"
    },
    {
      explanation: "Because the coefficients are rational and the square root of the discriminant is rational, the quadratic has two distinct rational zeroes.",
      workingOut: ""
    }
  ]);

  // 5. y11a-4c-q1e
  await enrichQuestion('y11a-4c-q1e', {
    options: [
      'Two distinct irrational zeroes (\\(\\Delta > 0\\), not a perfect square)',
      'Two equal rational zeroes (\\(\\Delta = 0\\))',
      'No real zeroes (\\(\\Delta < 0\\))',
      'Two distinct rational zeroes (\\(\\Delta > 0\\), a perfect square)'
    ]
  }, 'No real zeroes (\\(\\Delta < 0\\))', [
    {
      explanation: "Check the sign of the given discriminant: \\(\\Delta = -5\\).",
      workingOut: "\\(\\Delta = -5 < 0\\)"
    },
    {
      explanation: "Because the discriminant is negative, we cannot take a real square root of it. Thus, there are no real zeroes.",
      workingOut: ""
    }
  ]);

  // 6. y11a-4c-q1f
  await enrichQuestion('y11a-4c-q1f', {
    options: [
      'No real zeroes (\\(\\Delta < 0\\))',
      'Two equal rational zeroes (\\(\\Delta = 0\\))',
      'Two distinct irrational zeroes (\\(\\Delta > 0\\), not a perfect square)',
      'Two distinct rational zeroes (\\(\\Delta > 0\\), a perfect square)'
    ]
  }, 'Two distinct rational zeroes (\\(\\Delta > 0\\), a perfect square)', [
    {
      explanation: "Observe the value and sign of the discriminant: \\(\\Delta = 16\\).",
      workingOut: "\\(\\Delta = 16 > 0\\)"
    },
    {
      explanation: "Determine if 16 is a perfect square. Since \\(16 = 4^2\\), its square root is rational.",
      workingOut: "\\(\\sqrt{16} = 4\\)"
    },
    {
      explanation: "This results in two distinct rational zeroes.",
      workingOut: ""
    }
  ]);

  // 7. y11a-4c-q3a
  await enrichQuestion('y11a-4c-q3a', {
    options: [
      '\\(k = 36\\)',
      '\\(k = 144\\)',
      '\\(k = -36\\)',
      '\\(k = 3\\)'
    ]
  }, '\\(k = 36\\)', [
    {
      explanation: "A quadratic function has exactly one zero when its discriminant is equal to zero.",
      workingOut: "\\(\\Delta = b^2 - 4ac = 0\\)"
    },
    {
      explanation: "Identify the coefficients from the function \\(y = x^2 + 12x + k\\): \\(a = 1\\), \\(b = 12\\), and \\(c = k\\). Substitute these values into the discriminant formula.",
      workingOut: "\\(\\Delta = 12^2 - 4(1)(k) = 0\\)"
    },
    {
      explanation: "Solve for \\(k\\).",
      workingOut: "\\(144 - 4k = 0 \\implies 144 = 4k \\implies k = 36\\)"
    }
  ]);

  // 8. y11a-4c-q4a
  await enrichQuestion('y11a-4c-q4a', {
    options: [
      '\\(p \\le 4\\)',
      '\\(p \\ge 4\\)',
      '\\(p \\le 16\\)',
      '\\(p \\le -4\\)'
    ]
  }, '\\(p \\le 4\\)', [
    {
      explanation: "The roots of a quadratic equation \\(ax^2 + bx + c = 0\\) are real numbers when the discriminant is greater than or equal to zero.",
      workingOut: "\\(\\Delta = b^2 - 4ac \\ge 0\\)"
    },
    {
      explanation: "For the equation \\(x^2 + 4x + p = 0\\), identify the coefficients: \\(a = 1\\), \\(b = 4\\), and \\(c = p\\). Plug them into the inequality.",
      workingOut: "\\(4^2 - 4(1)(p) \\ge 0\\)"
    },
    {
      explanation: "Solve the inequality for \\(p\\). Remember to change the inequality direction if you divide by a negative number.",
      workingOut: "\\(16 - 4p \\ge 0 \\implies 16 \\ge 4p \\implies p \\le 4\\)"
    }
  ]);

  // 9. y11a-4c-q4b
  await enrichQuestion('y11a-4c-q4b', {
    options: [
      '\\(p \\ge 3\\)',
      '\\(p \\le 3 \\text{ and } p \\ne 0\\)',
      '\\(p \\le 36\\)',
      '\\(p \\le 3\\)'
    ]
  }, '\\(p \\le 3 \\text{ and } p \\ne 0\\)', [
    {
      explanation: "For the quadratic equation \\(px^2 - 6x + 3 = 0\\) to have real roots, the discriminant must be greater than or equal to zero.",
      workingOut: "\\(\\Delta = b^2 - 4ac \\ge 0\\)"
    },
    {
      explanation: "Substitute \\(a = p\\), \\(b = -6\\), and \\(c = 3\\) into the formula.",
      workingOut: "\\((-6)^2 - 4(p)(3) \\ge 0 \\implies 36 - 12p \\ge 0\\)"
    },
    {
      explanation: "Solve the inequality for \\(p\\).",
      workingOut: "\\(36 \\ge 12p \\implies p \\le 3\\)"
    },
    {
      explanation: "Additionally, since the equation is specified to be a quadratic equation, the coefficient of \\(x^2\\) cannot be zero.",
      workingOut: "\\(p \\ne 0 \\implies p \\le 3 \\text{ and } p \\ne 0\\)"
    }
  ]);

  // 10. y11a-4c-q4c
  await enrichQuestion('y11a-4c-q4c', {
    options: [
      '\\(p \\ge \\frac{5}{2}\\)',
      '\\(p \\le \\frac{9}{2}\\)',
      '\\(p \\le 4.75\\)',
      '\\(p \\le \\frac{5}{2}\\)'
    ]
  }, '\\(p \\le \\frac{5}{2}\\)', [
    {
      explanation: "Set the discriminant of the quadratic equation \\(2x^2 - 6x + (p + 2) = 0\\) to be greater than or equal to zero.",
      workingOut: "\\(\\Delta = b^2 - 4ac \\ge 0\\)"
    },
    {
      explanation: "Substitute the coefficients \\(a = 2\\), \\(b = -6\\), and \\(c = p+2\\) into the inequality.",
      workingOut: "\\((-6)^2 - 4(2)(p + 2) \\ge 0\\)"
    },
    {
      explanation: "Expand and simplify the inequality.",
      workingOut: "\\(36 - 8(p + 2) \\ge 0 \\implies 36 - 8p - 16 \\ge 0 \\implies 20 - 8p \\ge 0\\)"
    },
    {
      explanation: "Solve for \\(p\\).",
      workingOut: "\\(20 \\ge 8p \\implies p \\le \\frac{20}{8} \\implies p \\le \\frac{5}{2}\\)"
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

  console.log('Successfully completed first 10 questions enrichment for Chapter 4C!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
