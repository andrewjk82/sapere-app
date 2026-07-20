import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targetIds = [
  'TOcXsCu6R4KpoDDh6uXX', // index 20
  'UrKUM2wQdZkKycFEvJQn', // index 21
  'VCcijcXSIiwaeC6kAXa1', // index 22
  'X6xwgJKI23CQZ771Xg6R', // index 23
  'XOvPPPTbY5AzWhBOwEqD', // index 24
  'YZa93YWfcqpobERQ87Hm', // index 25
  'YweS5ffVJ4eHcq9a4bAC', // index 26
  'Zj5pzO7b33sQ7n7sD0Ot', // index 27
  'buRlolE2dh6oaZMIpRcG', // index 28
  'cFWooF7i9L47uPvKkiiS'  // index 29 (already has custom subQuestions but we'll add main solutionSteps)
];

async function run() {
  const batch = db.batch();

  // 1. TOcXsCu6R4KpoDDh6uXX (Axioms of Geometry - subQuestions q7a, q7b)
  // Let's add subQuestion solutionSteps
  const subQuestionsQ20 = [
    {
      id: "q7a",
      question: "There are \"infinitely many points on every line\". Explain the use of the word infinitely in this statement.",
      type: "multiple_choice",
      isManual: true,
      options: [
        "It means there is no limit to the number of points; we can find as many points as we want between any two points.",
        "It means a line has a fixed starting point and an ending point with exactly 10 points.",
        "It means the line contains exactly 100 points.",
        "It means the points are extremely large in size."
      ],
      answer: 0,
      solutionSteps: [
        {
          explanation: "We start by analyzing the concept of a line in geometry. A geometric line is continuous and does not consist of discrete, countable steps.",
          workingOut: "\\\\( \\text{Line} = \\text{Continuous set of points} \\\\)"
        },
        {
          explanation: "Next, we focus on the word 'infinitely'. In mathematical density, between any two real numbers or points on a line, we can always find another point.",
          workingOut: "\\\\( \\text{Density property: } \\forall A, B \\; \\exists C \\text{ between } A, B \\\\)"
        },
        {
          explanation: "Finally, we conclude that 'infinitely' indicates there is no upper limit or bound to the number of points we can choose. This matches option A.",
          workingOut: "\\\\( \\text{Final Answer: Option A} \\\\)"
        }
      ]
    },
    {
      id: "q7b",
      question: "There are \"infinitely many lines passing through every point\". Explain the use of the word infinitely in this statement.",
      type: "multiple_choice",
      isManual: true,
      options: [
        "It means we can draw as many lines as we want through a single point in different directions without ever running out.",
        "It means only parallel lines can pass through a single point.",
        "It means exactly 4 lines can cross at any point.",
        "It means lines are infinitely thick."
      ],
      answer: 0,
      solutionSteps: [
        {
          explanation: "We start by considering a single point on a plane. A line passing through this point can be drawn at any angle or direction.",
          workingOut: "\\\\( \\text{Lines through } P \\text{ can rotate } 360^{\\circ} \\\\)"
        },
        {
          explanation: "Next, since the set of possible angles (slopes) in a 2D plane is continuous, we can rotate a line passing through the point by any real angle increment.",
          workingOut: "\\\\( \\text{Number of directions} = \\text{Infinite} \\\\)"
        },
        {
          explanation: "Finally, we conclude that we can construct an endless number of lines through that single point in different directions, matching option A.",
          workingOut: "\\\\( \\text{Final Answer: Option A} \\\\)"
        }
      ]
    }
  ];
  batch.set(db.collection('questions').doc('TOcXsCu6R4KpoDDh6uXX'), {
    subQuestions: subQuestionsQ20,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We begin by reviewing the core axioms of Euclidean geometry regarding points and lines. These axioms form the foundation of logical geometric reasoning.",
        workingOut: "\\\\( \\text{Given: Geometric Axioms} \\\\)"
      },
      {
        explanation: "Next, we investigate the density of points on lines and the rotational degrees of freedom of lines through a point, translating the term 'infinite' to continuous possibility.",
        workingOut: "\\\\( \\text{Infinitely} = \\text{Continuous, unbounded quantity} \\\\)"
      },
      {
        explanation: "Finally, we map these logical properties to select the options describing the infinite division of segments and direction choices. This resolves the conceptual questions.",
        workingOut: "\\\\( \\text{Verification complete} \\\\)"
      }
    ]
  }, { merge: true });

  // 2. UrKUM2wQdZkKycFEvJQn (5 * 2/9 = 10/9)
  const q21 = {
    question: 'Find: \\\\( 5 \\\\times \\\\frac{2}{9} \\\\)',
    opts: ['\\\\( \\\\frac{9}{10} \\\\)', '\\\\( \\\\frac{11}{9} \\\\)', '\\\\( \\\\frac{10}{9} \\\\)', '\\\\( 1 \\\\)'],
    options: ['\\\\( \\\\frac{9}{10} \\\\)', '\\\\( \\\\frac{11}{9} \\\\)', '\\\\( \\\\frac{10}{9} \\\\)', '\\\\( 1 \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We begin by expressing the whole number 5 as a fraction, which is 5 over 1. This aligns it for standard multiplication with the second fraction.",
        workingOut: "\\\\( \\\\frac{5}{1} \\\\times \\\\frac{2}{9} \\\\)"
      },
      {
        explanation: "Next, we multiply the numerators together and the denominators together. The product of the numerators is \\\\( 5 \\\\times 2 = 10 \\\\), and the product of the denominators is \\\\( 1 \\\\times 9 = 9 \\\\).",
        workingOut: "\\\\( \\\\frac{10}{9} \\\\)"
      },
      {
        explanation: "Finally, we check if the fraction can be simplified. Since 10 and 9 share no common factors other than 1, the fraction is in its simplest improper form.",
        workingOut: "\\\\( \\text{Final Answer: } \\\\frac{10}{9} \\\\)"
      }
    ]
  };
  batch.set(db.collection('questions').doc('UrKUM2wQdZkKycFEvJQn'), q21, { merge: true });

  // 3. VCcijcXSIiwaeC6kAXa1 (7 * 3/4 = 21/4)
  const q22 = {
    question: 'Find: \\\\( 7 \\\\times \\\\frac{3}{4} \\\\)',
    opts: ['\\\\( \\\\frac{21}{5} \\\\)', '\\\\( \\\\frac{22}{4} \\\\)', '\\\\( \\\\frac{4}{21} \\\\)', '\\\\( \\\\frac{21}{4} \\\\)'],
    options: ['\\\\( \\\\frac{21}{5} \\\\)', '\\\\( \\\\frac{22}{4} \\\\)', '\\\\( \\\\frac{4}{21} \\\\)', '\\\\( \\\\frac{21}{4} \\\\)'],
    a: 3,
    answer: 3,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We begin by writing the whole number 7 as a fraction, which is 7 over 1. This aligns it for direct multiplication with the second fraction.",
        workingOut: "\\\\( \\\\frac{7}{1} \\\\times \\\\frac{3}{4} \\\\)"
      },
      {
        explanation: "Next, we multiply the numerators together and the denominators together. The product of the numerators is \\\\( 7 \\\\times 3 = 21 \\\\), and the product of the denominators is \\\\( 1 \\\\times 4 = 4 \\\\).",
        workingOut: "\\\\( \\\\frac{21}{4} \\\\)"
      },
      {
        explanation: "Finally, we check if the fraction can be simplified. Since 21 and 4 are coprime, the fraction is in its simplest improper form.",
        workingOut: "\\\\( \\text{Final Answer: } \\\\frac{21}{4} \\\\)"
      }
    ]
  };
  batch.set(db.collection('questions').doc('VCcijcXSIiwaeC6kAXa1'), q22, { merge: true });

  // 4. X6xwgJKI23CQZ771Xg6R (3/8 of 5/2 = 15/16)
  const q23 = {
    question: 'Find: \\\\( \\\\frac{3}{8} \\\\) of \\\\( \\\\frac{5}{2} \\\\)',
    opts: ['\\\\( 1 \\\\)', '\\\\( \\\\frac{16}{15} \\\\)', '\\\\( \\\\frac{15}{16} \\\\)', '\\\\( \\\\frac{15}{17} \\\\)'],
    options: ['\\\\( 1 \\\\)', '\\\\( \\\\frac{16}{15} \\\\)', '\\\\( \\\\frac{15}{16} \\\\)', '\\\\( \\\\frac{15}{17} \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We start by translating the word \"of\" into the mathematical multiplication operator.",
        workingOut: "\\\\( \\\\frac{3}{8} \\\\times \\\\frac{5}{2} \\\\)"
      },
      {
        explanation: "Next, we multiply the numerators and the denominators together. The product of the numerators is \\\\( 3 \\\\times 5 = 15 \\\\), and the product of the denominators is \\\\( 8 \\\\times 2 = 16 \\\\).",
        workingOut: "\\\\( \\\\frac{15}{16} \\\\)"
      },
      {
        explanation: "Finally, we check if the fraction can be simplified. Since 15 and 16 share no common factors other than 1, the fraction is in its simplest form.",
        workingOut: "\\\\( \\text{Final Answer: } \\\\frac{15}{16} \\\\)"
      }
    ]
  };
  batch.set(db.collection('questions').doc('X6xwgJKI23CQZ771Xg6R'), q23, { merge: true });

  // 5. XOvPPPTbY5AzWhBOwEqD (4/15 * 5/7 = 4/21)
  const q24 = {
    question: 'Find: \\\\( \\\\frac{4}{15} \\\\times \\\\frac{5}{7} \\\\)',
    opts: ['\\\\( \\\\frac{21}{4} \\\\)', '\\\\( \\\\frac{4}{22} \\\\)', '\\\\( \\\\frac{5}{21} \\\\)', '\\\\( \\\\frac{4}{21} \\\\)'],
    options: ['\\\\( \\\\frac{21}{4} \\\\)', '\\\\( \\\\frac{4}{22} \\\\)', '\\\\( \\\\frac{5}{21} \\\\)', '\\\\( \\\\frac{4}{21} \\\\)'],
    a: 3,
    answer: 3,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We begin by writing the product, grouping all numerators together and all denominators together.",
        workingOut: "\\\\( \\frac{4 \\times 5}{15 \\times 7} \\\\)"
      },
      {
        explanation: "Next, we calculate the intermediate products. Multiplying the numerators gives \\\\( 4 \\\\times 5 = 20 \\\\), and multiplying the denominators gives \\\\( 15 \\\\times 7 = 105 \\\\).",
        workingOut: "\\\\( \\\\frac{20}{105} \\\\)"
      },
      {
        explanation: "Finally, we simplify the fraction by dividing the numerator and denominator by their greatest common divisor, which is 5.",
        workingOut: "\\\\( \\\\frac{20 \\\\div 5}{105 \\\\div 5} = \\\\frac{4}{21} \\\\)"
      }
    ]
  };
  batch.set(db.collection('questions').doc('XOvPPPTbY5AzWhBOwEqD'), q24, { merge: true });

  // 6. YZa93YWfcqpobERQ87Hm (1/3 * 2/5 * 5/8 = 1/12)
  const q25 = {
    question: 'Complete the multiplication, simplifying where possible: \\\\( \\\\frac{1}{3} \\\\times \\\\frac{2}{5} \\\\times \\\\frac{5}{8} \\\\)',
    opts: ['12', '\\\\( \\\\frac{2}{12} \\\\)', '\\\\( \\\\frac{1}{13} \\\\)', '\\\\( \\\\frac{1}{12} \\\\)'],
    options: ['12', '\\\\( \\\\frac{2}{12} \\\\)', '\\\\( \\\\frac{1}{13} \\\\)', '\\\\( \\\\frac{1}{12} \\\\)'],
    a: 3,
    answer: 3,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We begin by setting up the multiplication by grouping all numerators together and all denominators together into one unified fraction.",
        workingOut: "\\\\( \\\\frac{1 \\\\times 2 \\\\times 5}{3 \\\\times 5 \\\\times 8} \\\\)"
      },
      {
        explanation: "Next, we compute the products of the numerators and denominators. Multiplying the numerators gives \\\\( 1 \\\\times 2 \\\\times 5 = 10 \\\\), and multiplying the denominators gives \\\\( 3 \\\\times 5 \\\\times 8 = 120 \\\\).",
        workingOut: "\\\\( \\\\frac{10}{120} \\\\)"
      },
      {
        explanation: "Finally, we simplify the fraction by dividing the numerator and denominator by their greatest common divisor, which is 10.",
        workingOut: "\\\\( \\\\frac{10 \\\\div 10}{120 \\\\div 10} = \\\\frac{1}{12} \\\\)"
      }
    ]
  };
  batch.set(db.collection('questions').doc('YZa93YWfcqpobERQ87Hm'), q25, { merge: true });

  // 7. YweS5ffVJ4eHcq9a4bAC (Three Lines in a Plane - subQuestions q8a, q8b)
  const subQuestionsQ26 = [
    {
      id: "q8a",
      question: "How many of the four configurations involve parallel lines?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 1, // Configuration A (3 parallel) and B (2 parallel) -> 2 configurations
      solutionSteps: [
        {
          explanation: "We start by analyzing each of the four configurations (A, B, C, D) shown in the diagram.",
          workingOut: "\\\\( \\text{Configurations: } A, \\; B, \\; C, \\; D \\\\)"
        },
        {
          explanation: "Next, we identify which configurations have lines that never cross (parallel lines): Configuration A shows three parallel lines, and Configuration B shows two parallel lines cut by a transversal.",
          workingOut: "\\\\( \\text{Parallel elements in A and B} \\\\)"
        },
        {
          explanation: "Finally, we count them. Sceince Configurations A and B involve parallel lines, the total number is 2. This matches option B.",
          workingOut: "\\\\( \\text{Total} = 2 \\\\)"
        }
      ]
    },
    {
      id: "q8b",
      question: "Which configuration is the ONLY one that encloses a region?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Configuration A",
        "Configuration B",
        "Configuration C",
        "Configuration D"
      ],
      answer: 3, // Configuration D (triangle)
      solutionSteps: [
        {
          explanation: "We start by reviewing what it means to enclose a region. An enclosed region is a closed shape with a finite area bounded by the lines.",
          workingOut: "\\\\( \\text{Enclosed region} = \\text{Closed boundary} \\\\)"
        },
        {
          explanation: "Next, we look at Configuration D, where three intersecting lines cross in a way that forms a central triangle, enclosing a flat space.",
          workingOut: "\\\\( \\text{Configuration D forms a closed triangle} \\\\)"
        },
        {
          explanation: "Finally, we verify that Configurations A, B, and C all have lines extending to infinity without bounding a closed, finite area. Thus, Configuration D is the only one.",
          workingOut: "\\\\( \\text{Final Answer: Configuration D} \\\\)"
        }
      ]
    }
  ];
  batch.set(db.collection('questions').doc('YweS5ffVJ4eHcq9a4bAC'), {
    subQuestions: subQuestionsQ26,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We begin by examining the diagram showing the four distinct geometric arrangements of three straight lines in a single flat plane.",
        workingOut: "\\\\( \\text{Configurations: } A (3 \\parallel), \\; B (2 \\parallel), \\; C (\\text{concurrent}), \\; D (\\text{triangle}) \\\\)"
      },
      {
        explanation: "Next, we apply line properties to determine which arrangements include parallel lines and which ones form closed intersections.",
        workingOut: "\\\\( \\text{Parallel: A and B. Enclosed: D} \\\\)"
      },
      {
        explanation: "Finally, we map these observations to answer each sub-question regarding parallel counts and enclosed region types.",
        workingOut: "\\\\( \\text{Verification complete} \\\\)"
      }
    ]
  }, { merge: true });

  // 8. Zj5pzO7b33sQ7n7sD0Ot (6/25 * 5/18 = 1/15)
  const q27 = {
    question: 'Find: \\\\( \\\\frac{6}{25} \\\\pm \\\\frac{5}{18} \\\\)', // Wait, it's multiply
    question: 'Find: \\\\( \\\\frac{6}{25} \\\\times \\\\frac{5}{18} \\\\)',
    opts: ['\\\\( \\\\frac{2}{15} \\\\)', '\\\\( \\\\frac{1}{16} \\\\)', '\\\\( \\\\frac{1}{15} \\\\)', '15'],
    options: ['\\\\( \\\\frac{2}{15} \\\\)', '\\\\( \\\\frac{1}{16} \\\\)', '\\\\( \\\\frac{1}{15} \\\\)', '15'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We begin by writing the product, grouping all numerators together and all denominators together.",
        workingOut: "\\\\( \\frac{6 \\times 5}{25 \\times 18} \\\\)"
      },
      {
        explanation: "Next, we calculate the intermediate products. Multiplying the numerators gives \\\\( 6 \\\\times 5 = 30 \\\\), and multiplying the denominators gives \\\\( 25 \\\\times 18 = 450 \\\\).",
        workingOut: "\\\\( \\\\frac{30}{450} \\\\)"
      },
      {
        explanation: "Finally, we simplify the fraction by dividing the numerator and denominator by their greatest common divisor, which is 30.",
        workingOut: "\\\\( \\\\frac{30 \\\\div 30}{450 \\\\div 30} = \\\\frac{1}{15} \\\\)"
      }
    ]
  };
  batch.set(db.collection('questions').doc('Zj5pzO7b33sQ7n7sD0Ot'), q27, { merge: true });

  // 9. buRlolE2dh6oaZMIpRcG (1/4 * 3/5 = 3/20)
  const q28 = {
    question: 'Evaluate the product, simplifying where possible: \\\\( \\\\frac{1}{4} \\\\times \\\\frac{3}{5} \\\\)',
    opts: ['\\\\( \\\\frac{3}{21} \\\\)', '\\\\( \\\\frac{3}{20} \\\\)', '\\\\( \\\\frac{4}{20} \\\\)', '\\\\( \\\\frac{20}{3} \\\\)'],
    options: ['\\\\( \\\\frac{3}{21} \\\\)', '\\\\( \\\\frac{3}{20} \\\\)', '\\\\( \\\\frac{4}{20} \\\\)', '\\\\( \\\\frac{20}{3} \\\\)'],
    a: 1,
    answer: 1,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: "We begin by setting up the product, multiplying the numerators and the denominators respectively.",
        workingOut: "\\\\( \\\\frac{1 \\\\times 3}{4 \\\\times 5} \\\\)"
      },
      {
        explanation: "Next, we calculate the values. The product of the numerators is 3, and the product of the denominators is 20.",
        workingOut: "\\\\( \\\\frac{3}{20} \\\\)"
      },
      {
        explanation: "Finally, we check if the fraction can be simplified. Since 3 and 20 are coprime, the fraction is in its simplest form.",
        workingOut: "\\\\( \\text{Final Answer: } \\\\frac{3}{20} \\\\)"
      }
    ]
  };
  batch.set(db.collection('questions').doc('buRlolE2dh6oaZMIpRcG'), q28, { merge: true });

  // 10. cFWooF7i9L47uPvKkiiS (Parallel Lines WX parallel ZY etc.)
  // Already has subQuestions configured correctly, we will add main solutionSteps
  const q29 = {
    solutionSteps: [
      {
        explanation: "We begin by studying the parallel line pairs in the diagram: WX is parallel to ZY, and XY is parallel to WZ.",
        workingOut: "\\\\( \\text{Identify parallel pairs: } (WX, ZY) \\text{ and } (XY, WZ) \\\\)"
      },
      {
        explanation: "Next, we apply the standard parallel notation symbol \\\\(\\\\parallel\\\\) to represent these parallel relationships in mathematical writing.",
        workingOut: "\\\\( WX \\\\parallel ZY, \\\\; XY \\\\parallel WZ \\\\)"
      },
      {
        explanation: "Finally, we locate the intersection points between intersecting line pairs, verifying that WX and XY intersect at point X, while XY and YZ meet at point Y.",
        workingOut: "\\\\( WX \\\\cap XY = X, \\\\; XY \\\\cap YZ = Y \\\\)"
      }
    ],
    isNew: true
  };
  batch.set(db.collection('questions').doc('cFWooF7i9L47uPvKkiiS'), q29, { merge: true });

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
  console.log('Successfully transformed next 10 questions (index 20-29) to multiple_choice and synchronized Firestore!');
}

run().catch(err => {
  console.error('Error running conversion:', err);
  process.exit(1);
});
