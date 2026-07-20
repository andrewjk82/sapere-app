import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// List of target questions in order of createdAt asc (Q1 to Q10)
const targetIds = [
  '0nzh7k9TNsZh0XnNNrYo', // Q1
  '174vTcmPNyrWdudcjXbI', // Q2
  '4iuQdKTLAyoDq8RtfLMO', // Q3
  '8MedElQ8DXAEvu3sLYj9', // Q4
  '9ni0MXbfodc341D7UrD8', // Q5
  'CRXJmlbWXX32rEoigTjp', // Q6
  'DBAjNxog17KWz5qZx9UL', // Q7
  'HcNx5MsUT6SDTzrdIbD7', // Q8
  'Is9hgc2mgCYNN0K51mFm', // Q9
  'J2NWhuhxRywBSPFSBYCh'  // Q10
];

// Clean LaTex format
function cleanLatex(str) {
  if (!str) return '';
  return str
    .replace(/\$([^$]+)\$/g, '\\\\( $1 \\\\)')
    .replace(/\\\\\(\s*\\\\\(/g, '\\\\(')
    .replace(/\\\\\)\s*\\\\\)/g, '\\\\)');
}

async function run() {
  const batch = db.batch();

  // 1. Q1: 0nzh7k9TNsZh0XnNNrYo (5/14 * 7/10 * 8/9 = 2/9)
  const q1 = {
    question: 'Complete the multiplication, simplifying where possible: \\\\( \\\\frac{5}{14} \\\\times \\\\frac{7}{10} \\\\times \\\\frac{8}{9} \\\\)',
    opts: ['\\\\( \\\\frac{2}{9} \\\\)', '\\\\( \\\\frac{1}{9} \\\\)', '\\\\( \\\\frac{2}{3} \\\\)', '\\\\( \\\\frac{5}{9} \\\\)'],
    options: ['\\\\( \\\\frac{2}{9} \\\\)', '\\\\( \\\\frac{1}{9} \\\\)', '\\\\( \\\\frac{2}{3} \\\\)', '\\\\( \\\\frac{5}{9} \\\\)'],
    a: 0,
    answer: 0,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We start by identifying the three fractions given in the problem to multiply. Our plan is to multiply the numerators together and the denominators together to form a single fraction, then simplify it.',
        workingOut: '\\\\( \\\\frac{5 \\\\times 7 \\\\times 8}{14 \\\\times 10 \\\\times 9} \\\\)'
      },
      {
        explanation: 'Next, we calculate the products of the numerators and the denominators. Multiplying the numerators gives \\\\( 5 \\\\times 7 \\\\times 8 = 280 \\\\), and multiplying the denominators gives \\\\( 14 \\\\times 10 \\\\times 9 = 1260 \\\\). This results in the intermediate fraction.',
        workingOut: '\\\\( \\\\frac{280}{1260} \\\\)'
      },
      {
        explanation: 'Finally, we simplify the fraction by dividing both the numerator and the denominator by their greatest common divisor, which is 140. This reduces the expression to its simplest form and yields our final answer.',
        workingOut: '\\\\( \\\\frac{280 \\\\div 140}{1260 \\\\div 140} = \\\\frac{2}{9} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('0nzh7k9TNsZh0XnNNrYo'), q1, { merge: true });

  // 2. Q2: 174vTcmPNyrWdudcjXbI (Line Geometry question with subQuestions)
  // Already multiple_choice and subQuestions resolved to MCQ. We will add proper standard solutionSteps to it.
  const q2 = {
    question: 'Analyze the complex system of intersecting and parallel lines below.',
    isNew: true,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We begin by reviewing the geometric configuration shown in the diagram. We identify the concurrent lines passing through point \\\\(M\\\\), the parallel lines indicated by the arrowheads, and the specific line intersections.',
        workingOut: '\\\\( \\text{Given: Points } M, A, B, C, D \\text{ on intersecting and parallel configurations} \\\\)'
      },
      {
        explanation: 'Next, we apply the definition of concurrent lines (lines intersecting at a single point) to identify \\\\(AB, CD\\\\) and other transversals meeting at \\\\(M\\\\), and use the parallel symbol \\\\(\\\\parallel\\\\) to represent the parallel lines \\\\(AC\\\\) and \\\\(BD\\\\).',
        workingOut: '\\\\( AC \\\\parallel BD \\\\)'
      },
      {
        explanation: 'Finally, we identify the exact intersection points from the grid locations, noting that \\\\(AB \\\\cap CD = M\\\\) and the common point between \\\\(AC\\\\) and \\\\(CD\\\\) is \\\\(C\\\\). This completes the systematic breakdown of all sub-questions.',
        workingOut: '\\\\( AB \\\\cap CD = M \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('174vTcmPNyrWdudcjXbI'), q2, { merge: true });

  // 3. Q3: 4iuQdKTLAyoDq8RtfLMO (7/12 * 8/21 * 9/14 = 1/7)
  const q3 = {
    question: 'Complete the multiplication, simplifying where possible: \\\\( \\\\frac{7}{12} \\\\times \\\\frac{8}{21} \\\\times \\\\frac{9}{14} \\\\)',
    opts: ['\\\\( \\\\frac{2}{7} \\\\)', '\\\\( \\\\frac{1}{8} \\\\)', '\\\\( \\\\frac{1}{7} \\\\)', '\\\\( \\\\frac{3}{14} \\\\)'],
    options: ['\\\\( \\\\frac{2}{7} \\\\)', '\\\\( \\\\frac{1}{8} \\\\)', '\\\\( \\\\frac{1}{7} \\\\)', '\\\\( \\\\frac{3}{14} \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by expressing the product of the three fractions by grouping all numerators together and all denominators together. This establishes our strategy for calculation.',
        workingOut: '\\\\( \\\\frac{7 \\\\times 8 \\\\times 9}{12 \\\\times 21 \\\\times 14} \\\\)'
      },
      {
        explanation: 'Next, we calculate the products of the numerators and denominators. Multiplying the numerators gives \\\\( 7 \\\\times 8 \\\\times 9 = 504 \\\\), and multiplying the denominators gives \\\\( 12 \\\\times 21 \\\\times 14 = 3528 \\\\). This gives us the unsimplified product.',
        workingOut: '\\\\( \\\\frac{504}{3528} \\\\)'
      },
      {
        explanation: 'Finally, we simplify the fraction. By dividing both the numerator and the denominator by their greatest common divisor, which is 504, we arrive at the simplest form, matching one of the options.',
        workingOut: '\\\\( \\\\frac{504 \\\\div 504}{3528 \\\\div 504} = \\\\frac{1}{7} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('4iuQdKTLAyoDq8RtfLMO'), q3, { merge: true });

  // 4. Q4: 8MedElQ8DXAEvu3sLYj9 (7/5 of 2/7 = 2/5)
  const q4 = {
    question: 'Find: \\\\( \\\\frac{7}{5} \\\\) of \\\\( \\\\frac{2}{7} \\\\)',
    opts: ['\\\\( \\\\frac{3}{5} \\\\)', '\\\\( \\\\frac{2}{5} \\\\)', '\\\\( \\\\frac{5}{2} \\\\)', '\\\\( \\\\frac{2}{6} \\\\)'],
    options: ['\\\\( \\\\frac{3}{5} \\\\)', '\\\\( \\\\frac{2}{5} \\\\)', '\\\\( \\\\frac{5}{2} \\\\)', '\\\\( \\\\frac{2}{6} \\\\)'],
    a: 1,
    answer: 1,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by translating the word \"of\" into the mathematical operator for multiplication. This sets up the product of the two fractions.',
        workingOut: '\\\\( \\\\frac{7}{5} \\\\times \\\\frac{2}{7} \\\\)'
      },
      {
        explanation: 'Next, we multiply the numerators and the denominators. The product of the numerators is \\\\( 7 \\\\times 2 = 14 \\\\), and the product of the denominators is \\\\( 5 \\\\times 7 = 35 \\\\). This results in the unsimplified fraction.',
        workingOut: '\\\\( \\\\frac{14}{35} \\\\)'
      },
      {
        explanation: 'Finally, we simplify the fraction by dividing the numerator and the denominator by their greatest common divisor, which is 7. This yields the final answer.',
        workingOut: '\\\\( \\\\frac{14 \\\\div 7}{35 \\\\div 7} = \\\\frac{2}{5} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('8MedElQ8DXAEvu3sLYj9'), q4, { merge: true });

  // 5. Q5: 9ni0MXbfodc341D7UrD8 (15/8 * 32/45 = 4/3)
  const q5 = {
    question: 'Find: \\\\( \\\\frac{15}{8} \\\\times \\\\frac{32}{45} \\\\)',
    opts: ['\\\\( \\\\frac{3}{4} \\\\)', '\\\\( \\\\frac{4}{3} \\\\)', '\\\\( 1 \\\\)', '\\\\( \\\\frac{5}{3} \\\\)'],
    options: ['\\\\( \\\\frac{3}{4} \\\\)', '\\\\( \\\\frac{4}{3} \\\\)', '\\\\( 1 \\\\)', '\\\\( \\\\frac{5}{3} \\\\)'],
    a: 1,
    answer: 1,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We start by writing the multiplication of the two fractions by grouping their numerators and denominators together. This outlines our calculation plan.',
        workingOut: '\\\\( \\\\frac{15 \\\\times 32}{8 \\\\times 45} \\\\)'
      },
      {
        explanation: 'Next, we compute the products. Multiplying the numerators gives \\\\( 15 \\\\times 32 = 480 \\\\), and multiplying the denominators gives \\\\( 8 \\\\times 45 = 360 \\\\). This forms the intermediate fraction.',
        workingOut: '\\\\( \\\\frac{480}{360} \\\\)'
      },
      {
        explanation: 'Finally, we simplify the fraction by dividing both the numerator and denominator by their greatest common divisor, which is 120. This gives us the simplest improper fraction.',
        workingOut: '\\\\( \\\\frac{480 \\\\div 120}{360 \\\\div 120} = \\\\frac{4}{3} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('9ni0MXbfodc341D7UrD8'), q5, { merge: true });

  // 6. Q6: CRXJmlbWXX32rEoigTjp (9/16 * 8/15 = 3/10)
  const q6 = {
    question: 'Find: \\\\( \\\\frac{9}{16} \\\\times \\\\frac{8}{15} \\\\)',
    opts: ['\\\\( \\\\frac{3}{10} \\\\)', '\\\\( \\\\frac{10}{3} \\\\)', '\\\\( \\\\frac{3}{11} \\\\)', '\\\\( \\\\frac{2}{5} \\\\)'],
    options: ['\\\\( \\\\frac{3}{10} \\\\)', '\\\\( \\\\frac{10}{3} \\\\)', '\\\\( \\\\frac{3}{11} \\\\)', '\\\\( \\\\frac{2}{5} \\\\)'],
    a: 0,
    answer: 0,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by setting up the multiplication of the two fractions, combining the numerators and denominators respectively.',
        workingOut: '\\\\( \\\\frac{9 \\\\times 8}{16 \\\\times 15} \\\\)'
      },
      {
        explanation: 'Next, we calculate the values. The product of the numerators is \\\\( 9 \\\\times 8 = 72 \\\\), and the product of the denominators is \\\\( 16 \\\\times 15 = 240 \\\\). This represents our product before reduction.',
        workingOut: '\\\\( \\\\frac{72}{240} \\\\)'
      },
      {
        explanation: 'Finally, we simplify this fraction by dividing both terms by their greatest common divisor, which is 24. This simplifies the fraction to its final value.',
        workingOut: '\\\\( \\\\frac{72 \\\\div 24}{240 \\\\div 24} = \\\\frac{3}{10} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('CRXJmlbWXX32rEoigTjp'), q6, { merge: true });

  // 7. Q7: DBAjNxog17KWz5qZx9UL (2/7 of 11 = 22/7)
  const q7 = {
    question: 'Find: \\\\( \\\\frac{2}{7} \\\\) of \\\\( 11 \\\\)',
    opts: ['\\\\( \\\\frac{7}{22} \\\\)', '\\\\( \\\\frac{23}{7} \\\\)', '\\\\( \\\\frac{22}{7} \\\\)', '\\\\( \\\\frac{11}{7} \\\\)'],
    options: ['\\\\( \\\\frac{7}{22} \\\\)', '\\\\( \\\\frac{23}{7} \\\\)', '\\\\( \\\\frac{22}{7} \\\\)', '\\\\( \\\\frac{11}{7} \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by converting the word \"of\" to the multiplication operator. We also express the whole number 11 as a fraction by putting it over 1.',
        workingOut: '\\\\( \\\\frac{2}{7} \\\\times \\\\frac{11}{1} \\\\)'
      },
      {
        explanation: 'Next, we multiply the numerators and the denominators. This gives us the product directly since there are no common factors to cancel.',
        workingOut: '\\\\( \\\\frac{2 \\\\times 11}{7 \\\\times 1} = \\\\frac{22}{7} \\\\)'
      },
      {
        explanation: 'Finally, we check the fraction for simplification. Since 22 and 7 share no common factors other than 1, the fraction is in its simplest improper form.',
        workingOut: '\\\\( \\text{Final Answer: } \\\\frac{22}{7} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('DBAjNxog17KWz5qZx9UL'), q7, { merge: true });

  // 8. Q8: HcNx5MsUT6SDTzrdIbD7 (1/3 * 2/5 = 2/15)
  const q8 = {
    question: 'Evaluate the product, simplifying where possible: \\\\( \\\\frac{1}{3} \\\\times \\\\frac{2}{5} \\\\)',
    opts: ['\\\\( \\\\frac{2}{16} \\\\)', '\\\\( \\\\frac{3}{15} \\\\)', '\\\\( \\\\frac{2}{15} \\\\)', '\\\\( \\\\frac{15}{2} \\\\)'],
    options: ['\\\\( \\\\frac{2}{16} \\\\)', '\\\\( \\\\frac{3}{15} \\\\)', '\\\\( \\\\frac{2}{15} \\\\)', '\\\\( \\\\frac{15}{2} \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by setting up the multiplication of the two simple fractions, combining the numerators and denominators.',
        workingOut: '\\\\( \\\\frac{1 \\\\times 2}{3 \\\\times 5} \\\\)'
      },
      {
        explanation: 'Next, we compute the final product. Multiplying the numerators gives 2, and multiplying the denominators gives 15.',
        workingOut: '\\\\( \\\\frac{2}{15} \\\\)'
      },
      {
        explanation: 'Finally, we check if the fraction can be simplified. Since 2 and 15 are coprime, the fraction is already in its simplest form.',
        workingOut: '\\\\( \\text{Final Answer: } \\\\frac{2}{15} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('HcNx5MsUT6SDTzrdIbD7'), q8, { merge: true });

  // 9. Q9: Is9hgc2mgCYNN0K51mFm (3 * 2/5 = 6/5)
  const q9 = {
    question: 'Find: \\\\( 3 \\\\times \\\\frac{2}{5} \\\\)',
    opts: ['\\\\( \\\\frac{6}{5} \\\\)', '\\\\( \\\\frac{5}{6} \\\\)', '\\\\( \\\\frac{7}{5} \\\\)', '\\\\( \\\\frac{6}{6} \\\\)'],
    options: ['\\\\( \\\\frac{6}{5} \\\\)', '\\\\( \\\\frac{5}{6} \\\\)', '\\\\( \\\\frac{7}{5} \\\\)', '\\\\( \\\\frac{6}{6} \\\\)'],
    a: 0,
    answer: 0,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by representing the whole number 3 as a fraction by placing it over a denominator of 1. This allows us to multiply it systematically by the second fraction.',
        workingOut: '\\\\( \\\\frac{3}{1} \\\\times \\\\frac{2}{5} \\\\)'
      },
      {
        explanation: 'Next, we multiply the numerators and denominators together. This calculates the product directly.',
        workingOut: '\\\\( \\\\frac{3 \\\\times 2}{1 \\\\times 5} = \\\\frac{6}{5} \\\\)'
      },
      {
        explanation: 'Finally, we verify if the fraction can be simplified. Since 6 and 5 share no common factors, the fraction is in its simplest improper form.',
        workingOut: '\\\\( \\text{Final Answer: } \\\\frac{6}{5} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('Is9hgc2mgCYNN0K51mFm'), q9, { merge: true });

  // 10. Q10: J2NWhuhxRywBSPFSBYCh (5/12 * 5 = 25/12)
  const q10 = {
    question: 'Find: \\\\( \\\\frac{5}{12} \\\\times 5 \\\\)',
    opts: ['\\\\( \\\\frac{12}{25} \\\\)', '\\\\( \\\\frac{25}{13} \\\\)', '\\\\( \\\\frac{25}{12} \\\\)', '\\\\( \\\\frac{26}{12} \\\\)'],
    options: ['\\\\( \\\\frac{12}{25} \\\\)', '\\\\( \\\\frac{25}{13} \\\\)', '\\\\( \\\\frac{25}{12} \\\\)', '\\\\( \\\\frac{26}{12} \\\\)'],
    a: 2,
    answer: 2,
    solution: null,
    isNew: true,
    solutionSteps: [
      {
        explanation: 'We begin by expressing the whole number 5 as a fraction, which is 5 over 1. This establishes our strategy for fraction multiplication.',
        workingOut: '\\\\( \\\\frac{5}{12} \\\\times \\\\frac{5}{1} \\\\)'
      },
      {
        explanation: 'Next, we multiply the numerators and the denominators together. The product of the numerators is \\\\( 5 \\\\times 5 = 25 \\\\), and the product of the denominators is \\\\( 12 \\\\times 1 = 12 \\\\).',
        workingOut: '\\\\( \\\\frac{25}{12} \\\\)'
      },
      {
        explanation: 'Finally, we check if the fraction can be simplified. Since 25 and 12 are coprime, the fraction is in its simplest improper form.',
        workingOut: '\\\\( \\text{Final Answer: } \\\\frac{25}{12} \\\\)'
      }
    ]
  };
  batch.set(db.collection('questions').doc('J2NWhuhxRywBSPFSBYCh'), q10, { merge: true });

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
  console.log('Successfully transformed all Year 7 Chapter 5A Q1-Q10 questions to multiple_choice and synchronized Firestore!');
}

run().catch(err => {
  console.error('Error running conversion:', err);
  process.exit(1);
});
