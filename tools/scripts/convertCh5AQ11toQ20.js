import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Next 10 questions target IDs
const targetIds = [
  'KNY4o0Pe2LcwCoD45p8T', // Q11
  'LjEFaDShSJsk3Hcj8iTH', // Q12
  'Mbsl9L6Xcq2vlqyLlFOB', // Q13
  'MdDDdXVddPTM83EP1VNX', // Q14
  'OJDAAlbPIuKT4GrkVbQw', // Q15
  'OzkaKVY9be4cDgeO3YKo', // Q16
  'QL1WGe4EAi2cVEhSeOf0', // Q17
  'R89kM84ofAVM1mFjguPj', // Q18
  'RBWHT8iMaaokYXaho2sr', // Q19
  'RFMczaVZmQdhC8U0Bfy7'  // Q20
];

async function run() {
  const batch = db.batch();

  // 1. Q11: KNY4o0Pe2LcwCoD45p8T (9/14 * 28/33 * 11/18 = 1/3)
  const q11 = {
    question: 'Complete the multiplication, simplifying where possible: \\\\( \\\\frac{9}{14} \\\\times \\\\frac{28}{33} \\\\times \\\\frac{11}{18} \\\\)',
    opts: ['3', '\\\\( \\\\frac{1}{4} \\\\)', '\\\\( \\\\frac{2}{3} \\\\)', '\\\\( \\\\frac{1}{3} \\\\)'],
    options: ['3', '\\\\( \\\\frac{1}{4} \\\\)', '\\\\( \\\\frac{2}{3} \\\\)', '\\\\( \\\\frac{1}{3} \\\\)'],
    a: 3,
    answer: 3,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by setting up the multiplication of the three fractions by grouping their numerators and denominators together. This lets us see all terms in one fraction.',
        workingOut: '\\\\( \\\\frac{9 \\\\times 28 \\\\times 11}{14 \\\\times 33 \\\\times 18} \\\\)'
      },
      {
        explanation: 'Next, we compute the products of the numerators and denominators. Multiplying the numerators gives \\\\( 9 \\\\times 28 \\\\times 11 = 2772 \\\\), and multiplying the denominators gives \\\\( 14 \\\\times 33 \\\\times 18 = 8316 \\\\). This represents the unsimplified fraction.',
        workingOut: '\\\\( \\\\frac{2772}{8316} \\\\)'
      },
      {
        explanation: 'Finally, we simplify the fraction by dividing both terms by their greatest common divisor, which is 2772. This reduces the fraction to its simplest form.',
        workingOut: '\\\\( \\\\frac{2772 \\\\div 2772}{8316 \\\\div 2772} = \\\\frac{1}{3} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('KNY4o0Pe2LcwCoD45p8T'), q11, { merge: true });

  // 2. Q12: LjEFaDShSJsk3Hcj8iTH (3/10 * 7 = 21/10)
  const q12 = {
    question: 'Find: \\\\( \\\\frac{3}{10} \\\\times 7 \\\\)',
    opts: ['\\\\( \\\\frac{10}{21} \\\\)', '\\\\( \\\\frac{21}{10} \\\\)', '\\\\( \\\\frac{21}{11} \\\\)', '\\\\( \\\\frac{22}{10} \\\\)'],
    options: ['\\\\( \\\\frac{10}{21} \\\\)', '\\\\( \\\\frac{21}{10} \\\\)', '\\\\( \\\\frac{21}{11} \\\\)', '\\\\( \\\\frac{22}{10} \\\\)'],
    a: 1,
    answer: 1,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by representing the whole number 7 as a fraction by placing it over a denominator of 1. This aligns it for standard multiplication.',
        workingOut: '\\\\( \\\\frac{3}{10} \\\\times \\\\frac{7}{1} \\\\)'
      },
      {
        explanation: 'Next, we multiply the numerators together and the denominators together. The product of the numerators is \\\\( 3 \\\\times 7 = 21 \\\\), and the product of the denominators is \\\\( 10 \\\\times 1 = 10 \\\\).',
        workingOut: '\\\\( \\\\frac{21}{10} \\\\)'
      },
      {
        explanation: 'Finally, we check if the fraction can be simplified. Since 21 and 10 share no common factors other than 1, it is already in its simplest improper form.',
        workingOut: '\\\\( \\text{Final Answer: } \\\\frac{21}{10} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('LjEFaDShSJsk3Hcj8iTH'), q12, { merge: true });

  // 3. Q13: Mbsl9L6Xcq2vlqyLlFOB (1/4 of 1/3 = 1/12)
  const q13 = {
    question: 'Find: \\\\( \\\\frac{1}{4} \\\\) of \\\\( \\\\frac{1}{3} \\\\)',
    opts: ['\\\\( \\\\frac{1}{12} \\\\)', '\\\\( \\\\frac{2}{12} \\\\)', '\\\\( \\\\frac{1}{13} \\\\)', '12'],
    options: ['\\\\( \\\\frac{1}{12} \\\\)', '\\\\( \\\\frac{2}{12} \\\\)', '\\\\( \\\\frac{1}{13} \\\\)', '12'],
    a: 0,
    answer: 0,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We start by translating the word \"of\" into the mathematical multiplication operator. This represents the fraction multiplication task.',
        workingOut: '\\\\( \\\\frac{1}{4} \\\\times \\\\frac{1}{3} \\\\)'
      },
      {
        explanation: 'Next, we multiply the numerators and the denominators together. Multiplying the numerators gives \\\\( 1 \\\\times 1 = 1 \\\\), and multiplying the denominators gives \\\\( 4 \\\\times 3 = 12 \\\\).',
        workingOut: '\\\\( \\\\frac{1}{12} \\\\)'
      },
      {
        explanation: 'Finally, we verify that 1 and 12 are coprime, meaning the fraction cannot be simplified further. This gives us our final answer.',
        workingOut: '\\\\( \\text{Final Answer: } \\\\frac{1}{12} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('Mbsl9L6Xcq2vlqyLlFOB'), q13, { merge: true });

  // 4. Q14: MdDDdXVddPTM83EP1VNX (Geometry: General quadrangle opposite sides extend to intersect)
  // Let's add standard solutionSteps for each subQuestion and clean up incorrect options to only use real points P, Q, R, S, X, Y, Z from the diagram
  const subQuestionsQ14 = [
    {
      id: "q6a",
      question: "If you construct the lines $PQ$ and $SR$, and produce (extend) them, at which point do they meet?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Point $X$",
        "Point $Y$",
        "Point $Z$",
        "Point $P$"
      ],
      answer: 0,
      opts: [
        "Point $X$",
        "Point $Y$",
        "Point $Z$",
        "Point $P$"
      ],
      a: 0,
      solutionSteps: [
        {
          explanation: "We begin by locating points \\\\(P, Q, S,\\\\) and \\\\(R\\\\) representing the vertices of the general quadrangle in the diagram. We identify the side lines \\\\(PQ\\\\) and \\\\(SR\\\\).",
          workingOut: "\\\\( \\text{Identify lines: } PQ \\text{ and } SR \\\\)"
        },
        {
          explanation: "Next, we extend (produce) both of these lines in the direction of their convergence until they meet.",
          workingOut: "\\\\( PQ \\\\cap SR \\\\)"
        },
        {
          explanation: "Finally, tracing the extended lines, they intersect at the far right point labeled as Point \\\\(X\\\\). This matches option A.",
          workingOut: "\\\\( PQ \\\\cap SR = Point \\; X \\\\)"
        }
      ]
    },
    {
      id: "q6b",
      question: "If you construct the lines $PS$ and $QR$, and produce (extend) them, at which point do they meet?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Point $X$",
        "Point $Y$",
        "Point $Z$",
        "Point $Q$"
      ],
      answer: 1,
      opts: [
        "Point $X$",
        "Point $Y$",
        "Point $Z$",
        "Point $Q$"
      ],
      a: 1,
      solutionSteps: [
        {
          explanation: "We begin by identifying the other pair of opposite sides in the quadrangle: Line \\\\(PS\\\\) (left side) and Line \\\\(QR\\\\) (right side).",
          workingOut: "\\\\( \\text{Identify lines: } PS \\text{ and } QR \\\\)"
        },
        {
          explanation: "Next, we extend both lines upwards towards their point of convergence.",
          workingOut: "\\\\( PS \\\\cap QR \\\\)"
        },
        {
          explanation: "Finally, tracing the extensions of \\\\(PS\\\\) and \\\\(QR\\\\) upwards, we see they intersect at the top point labeled as Point \\\\(Y\\\\). This matches option B.",
          workingOut: "\\\\( PS \\\\cap QR = Point \\; Y \\\\)"
        }
      ]
    },
    {
      id: "q6c",
      question: "Construct the diagonals $PR$ and $QS$, at which point do they intersect?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Point $X$",
        "Point $Y$",
        "Point $Z$",
        "Point $S$"
      ],
      answer: 2,
      opts: [
        "Point $X$",
        "Point $Y$",
        "Point $Z$",
        "Point $S$"
      ],
      a: 2,
      solutionSteps: [
        {
          explanation: "We start by identifying the diagonals of the quadrangle. Diagonals connect opposite vertices: \\\\(PR\\\\) connects \\\\(P\\\\) and \\\\(R\\\\), while \\\\(QS\\\\) connects \\\\(Q\\\\) and \\\\(S\\\\).",
          workingOut: "\\\\( \\text{Identify diagonals: } PR \\text{ and } QS \\\\)"
        },
        {
          explanation: "Next, we locate the intersection point of these two diagonal lines inside the quadrangle.",
          workingOut: "\\\\( PR \\\\cap QS \\\\)"
        },
        {
          explanation: "Finally, tracing the lines \\\\(PR\\\\) and \\\\(QS\\\\), they cross at the central point labeled as Point \\\\(Z\\\\). This corresponds directly to option C.",
          workingOut: "\\\\( PR \\\\cap QS = Point \\; Z \\\\)"
        }
      ]
    }
  ];
  const q14 = {
    question: "A four-point general quadrangle is shown below. We can produce (extend) its opposite sides to find additional intersections.",
    subQuestions: subQuestionsQ14,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We begin by analyzing the general quadrangle \\\\(PQRS\\\\) in the diagram, identifying its opposite sides \\\\((PQ, SR)\\\\) and \\\\((PS, QR)\\\\), and its interior diagonals \\\\((PR, QS)\\\\).",
        workingOut: "\\\\( \\text{Given: Quadrangle } PQRS \\\\)"
      },
      {
        explanation: "Next, we perform extensions of the opposite side pairs to find their external intersection points \\\\(X\\\\) and \\\\(Y\\\\).",
        workingOut: "\\\\( PQ \\\\cap SR = X, \\; PS \\\\cap QR = Y \\\\)"
      },
      {
        explanation: "Finally, we construct the diagonals inside the quadrangle to locate their intersection point \\\\(Z\\\\). This maps out the full projective geometry layout.",
        workingOut: "\\\\( PR \\\\cap QS = Z \\\\)"
      }
    ]
  };
  batch.set(db.collection('questions').doc('MdDDdXVddPTM83EP1VNX'), q14, { merge: true });

  // 5. Q15: OJDAAlbPIuKT4GrkVbQw (18/5 * 10/21 * 7/12 = 1)
  const q15 = {
    question: 'Complete the multiplication, simplifying where possible: \\\\( \\\\frac{18}{5} \\\\times \\\\frac{10}{21} \\\\times \\\\frac{7}{12} \\\\)',
    opts: ['2', '\\\\( \\\\frac{1}{2} \\\\)', '1', '0'],
    options: ['2', '\\\\( \\\\frac{1}{2} \\\\)', '1', '0'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by setting up the multiplication by grouping all numerators together and all denominators together into one unified fraction.',
        workingOut: '\\\\( \\\\frac{18 \\\\times 10 \\\\times 7}{5 \\\\times 21 \\\\times 12} \\\\)'
      },
      {
        explanation: 'Next, we compute the products of the numerators and denominators. Multiplying the numerators gives \\\\( 18 \\\\times 10 \\\\times 7 = 1260 \\\\), and multiplying the denominators gives \\\\( 5 \\\\times 21 \\\\times 12 = 1260 \\\\).',
        workingOut: '\\\\( \\\\frac{1260}{1260} \\\\)'
      },
      {
        explanation: 'Finally, we divide the numerator by the denominator. Since they are identical, the division simplifies perfectly to 1.',
        workingOut: '\\\\( \\\\frac{1260}{1260} = 1 \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('OJDAAlbPIuKT4GrkVbQw'), q15, { merge: true });

  // 6. Q16: OzkaKVY9be4cDgeO3YKo (5/3 * 5/4 = 25/12)
  const q16 = {
    question: 'Evaluate the product, simplifying where possible: \\\\( \\\\frac{5}{3} \\\\times \\\\frac{5}{4} \\\\)',
    opts: ['\\\\( \\\\frac{25}{13} \\\\)', '\\\\( \\\\frac{12}{25} \\\\)', '\\\\( \\\\frac{25}{12} \\\\)', '\\\\( \\\\frac{26}{12} \\\\)'],
    options: ['\\\\( \\\\frac{25}{13} \\\\)', '\\\\( \\\\frac{12}{25} \\\\)', '\\\\( \\\\frac{25}{12} \\\\)', '\\\\( \\\\frac{26}{12} \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by setting up the product, multiplying the numerators and the denominators respectively.',
        workingOut: '\\\\( \\\\frac{5 \\\\times 5}{3 \\\\times 4} \\\\)'
      },
      {
        explanation: 'Next, we calculate the values. The product of the numerators is \\\\( 5 \\\\times 5 = 25 \\\\), and the product of the denominators is \\\\( 3 \\\\times 4 = 12 \\\\).',
        workingOut: '\\\\( \\\\frac{25}{12} \\\\)'
      },
      {
        explanation: 'Finally, we check if the fraction can be simplified. Since 25 and 12 are coprime, the fraction is in its simplest improper form.',
        workingOut: '\\\\( \\text{Final Answer: } \\\\frac{25}{12} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('OzkaKVY9be4cDgeO3YKo'), q16, { merge: true });

  // 7. Q17: QL1WGe4EAi2cVEhSeOf0 (3/2 * 8/9 = 4/3)
  const q17 = {
    question: 'Find: \\\\( \\\\frac{3}{2} \\\\times \\\\frac{8}{9} \\\\)',
    opts: ['\\\\( \\\\frac{3}{4} \\\\)', '\\\\( 1 \\\\)', '\\\\( \\\\frac{4}{3} \\\\)', '\\\\( \\\\frac{5}{3} \\\\)'],
    options: ['\\\\( \\\\frac{3}{4} \\\\)', '\\\\( 1 \\\\)', '\\\\( \\\\frac{4}{3} \\\\)', '\\\\( \\\\frac{5}{3} \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by setting up the product, multiplying the numerators and the denominators respectively.',
        workingOut: '\\\\( \\\\frac{3 \\\\times 8}{2 \\\\times 9} \\\\)'
      },
      {
        explanation: 'Next, we calculate the products. The product of the numerators is \\\\( 3 \\\\times 8 = 24 \\\\), and the product of the denominators is \\\\( 2 \\\\times 9 = 18 \\\\). This gives the intermediate fraction.',
        workingOut: '\\\\( \\\\frac{24}{18} \\\\)'
      },
      {
        explanation: 'Finally, we simplify the fraction by dividing the numerator and denominator by their greatest common divisor, which is 6.',
        workingOut: '\\\\( \\\\frac{24 \\\\div 6}{18 \\\\div 6} = \\\\frac{4}{3} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('QL1WGe4EAi2cVEhSeOf0'), q17, { merge: true });

  // 8. Q18: R89kM84ofAVM1mFjguPj (1/5 of 3/4 = 3/20)
  const q18 = {
    question: 'Find: \\\\( \\\\frac{1}{5} \\\\) of \\\\( \\\\frac{3}{4} \\\\)',
    opts: ['\\\\( \\\\frac{3}{21} \\\\)', '\\\\( \\\\frac{3}{20} \\\\)', '\\\\( \\\\frac{4}{20} \\\\)', '\\\\( \\\\frac{20}{3} \\\\)'],
    options: ['\\\\( \\\\frac{3}{21} \\\\)', '\\\\( \\\\frac{3}{20} \\\\)', '\\\\( \\\\frac{4}{20} \\\\)', '\\\\( \\\\frac{20}{3} \\\\)'],
    a: 1,
    answer: 1,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We start by converting the word \"of\" into the mathematical multiplication operator.',
        workingOut: '\\\\( \\\\frac{1}{5} \\\\times \\\\frac{3}{4} \\\\)'
      },
      {
        explanation: 'Next, we multiply the numerators and the denominators together. The product of the numerators is 3, and the product of the denominators is 20.',
        workingOut: '\\\\( \\\\frac{3}{20} \\\\)'
      },
      {
        explanation: 'Finally, we check if the fraction can be simplified. Since 3 and 20 share no common factors, the fraction is in its simplest form.',
        workingOut: '\\\\( \\text{Final Answer: } \\\\frac{3}{20} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('R89kM84ofAVM1mFjguPj'), q18, { merge: true });

  // 9. Q19: RBWHT8iMaaokYXaho2sr (35/18 * 27/49 = 15/14)
  const q19 = {
    question: 'Find: \\\\( \\\\frac{35}{18} \\\\times \\\\frac{27}{49} \\\\)',
    opts: ['\\\\( \\\\frac{14}{15} \\\\)', '\\\\( 1 \\\\)', '\\\\( \\\\frac{15}{14} \\\\)', '\\\\( \\\\frac{16}{14} \\\\)'],
    options: ['\\\\( \\\\frac{14}{15} \\\\)', '\\\\( 1 \\\\)', '\\\\( \\\\frac{15}{14} \\\\)', '\\\\( \\\\frac{16}{14} \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We start by writing the multiplication of the two fractions, combining the numerators and denominators respectively.',
        workingOut: '\\\\( \\\\frac{35 \\\\times 27}{18 \\\\times 49} \\\\)'
      },
      {
        explanation: 'Next, we calculate the intermediate products. Multiplying the numerators gives \\\\( 35 \\\\times 27 = 945 \\\\), and multiplying the denominators gives \\\\( 18 \\\\times 49 = 882 \\\\).',
        workingOut: '\\\\( \\\\frac{945}{882} \\\\)'
      },
      {
        explanation: 'Finally, we simplify the fraction by dividing both terms by their greatest common divisor, which is 63.',
        workingOut: '\\\\( \\\\frac{945 \\\\div 63}{882 \\\\div 63} = \\\\frac{15}{14} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('RBWHT8iMaaokYXaho2sr'), q19, { merge: true });

  // 10. Q20: RFMczaVZmQdhC8U0Bfy7 (3/5 of 7 = 21/5)
  const q20 = {
    question: 'Find: \\\\( \\\\frac{3}{5} \\\\) of \\\\( 7 \\\\)',
    opts: ['\\\\( \\\\frac{22}{5} \\\\)', '\\\\( \\\\frac{21}{6} \\\\)', '\\\\( \\\\frac{21}{5} \\\\)', '\\\\( \\\\frac{5}{21} \\\\)'],
    options: ['\\\\( \\\\frac{22}{5} \\\\)', '\\\\( \\\\frac{21}{6} \\\\)', '\\\\( \\\\frac{21}{5} \\\\)', '\\\\( \\\\frac{5}{21} \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by converting the word \"of\" to the multiplication operator, and writing the integer 7 as a fraction (7 over 1).',
        workingOut: '\\\\( \\\\frac{3}{5} \\\\times \\\\frac{7}{1} \\\\)'
      },
      {
        explanation: 'Next, we multiply the numerators and the denominators together. The product of the numerators is \\\\( 3 \\\\times 7 = 21 \\\\), and the product of the denominators is \\\\( 5 \\\\times 1 = 5 \\\\).',
        workingOut: '\\\\( \\\\frac{21}{5} \\\\)'
      },
      {
        explanation: 'Finally, we verify if the fraction can be simplified. Since 21 and 5 are coprime, the fraction is in its simplest improper form.',
        workingOut: '\\\\( \\text{Final Answer: } \\\\frac{21}{5} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('RFMczaVZmQdhC8U0Bfy7'), q20, { merge: true });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.set(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  // Update newQuestions registry
  const newQuestionsMetaRef = db.doc('sync_meta/newQuestions');
  batch.set(newQuestionsMetaRef, {
    ids: FieldValue.arrayUnion(...targetIds),
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  await batch.commit();
  console.log('Successfully transformed next 10 questions (index 10-19) to multiple_choice and synchronized Firestore!');
}

run().catch(err => {
  console.error('Error running conversion:', err);
  process.exit(1);
});
