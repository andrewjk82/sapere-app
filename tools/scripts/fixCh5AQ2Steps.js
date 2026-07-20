import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('cFWooF7i9L47uPvKkiiS');
  
  // Custom options with only real points from the diagram: W, X, Y, Z
  const subQuestions = [
    {
      id: "q2a",
      question: "In symbols, write \"$WX$ is parallel to $ZY$\".",
      type: "multiple_choice",
      isManual: true,
      options: [
        "$WX \\parallel ZY$",
        "$WX \\perp ZY$",
        "$WX \\parallel XY$",
        "$WX = ZY$"
      ],
      answer: 0,
      solutionSteps: [
        {
          explanation: "We begin by identifying the two lines to compare: Line \\\\(WX\\\\) (the top horizontal line) and Line \\\\(ZY\\\\) (the bottom horizontal line).",
          workingOut: "\\\\( \\text{Compare lines } WX \\text{ and } ZY \\\\)"
        },
        {
          explanation: "Next, we recall that the standard mathematical symbol for representing that two lines are parallel (never intersecting in the same plane) is \\\\(\\\\parallel\\\\).",
          workingOut: "\\\\( \\text{Parallel Symbol: } \\\\parallel \\\\)"
        },
        {
          explanation: "Finally, we combine the line names with the parallel symbol to write \\\\(WX \\\\parallel ZY\\\\). This matches option A.",
          workingOut: "\\\\( WX \\\\parallel ZY \\\\)"
        }
      ]
    },
    {
      id: "q2b",
      question: "In symbols, write \"$XY$ is parallel to $WZ$\".",
      type: "multiple_choice",
      isManual: true,
      options: [
        "$XY \\parallel WZ$",
        "$XY \\perp WZ$",
        "$XY \\parallel WX$",
        "$XY = WZ$"
      ],
      answer: 0,
      solutionSteps: [
        {
          explanation: "We begin by locating the two slanted parallel lines in the diagram: Line \\\\(XY\\\\) on the right and Line \\\\(WZ\\\\) on the left.",
          workingOut: "\\\\( \\text{Identify slanted lines: } XY \\text{ and } WZ \\\\)"
        },
        {
          explanation: "Next, we use the standard parallel operator \\\\(\\\\parallel\\\\) to represent that these two lines have the same slope and will never cross.",
          workingOut: "\\\\( \\text{Parallel Operator: } \\\\parallel \\\\)"
        },
        {
          explanation: "Finally, we write the symbolic expression representing this relationship, which is \\\\(XY \\\\parallel WZ\\\\). This corresponds directly to option A.",
          workingOut: "\\\\( XY \\\\parallel WZ \\\\)"
        }
      ]
    },
    {
      id: "q2c",
      question: "What is the intersection of the lines $WX$ and $XY$?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Point $W$",
        "Point $Y$",
        "Point $X$",
        "Point $Z$"
      ],
      answer: 2,
      opts: [
        "Point $W$",
        "Point $Y$",
        "Point $X$",
        "Point $Z$"
      ],
      a: 2,
      solutionSteps: [
        {
          explanation: "We begin by identifying the two lines to intersect: Line \\\\(WX\\\\) (the top horizontal line) and Line \\\\(XY\\\\) (the right slanted line).",
          workingOut: "\\\\( \\text{Find lines: } WX \\text{ and } XY \\\\)"
        },
        {
          explanation: "Next, we find the common letter/point between the names of the two lines, which represents the point where they cross each other in the diagram.",
          workingOut: "\\\\( WX \\\\cap XY \\\\)"
        },
        {
          explanation: "Finally, looking at the diagram, the two lines meet at the top-right corner, which is labeled Point \\\\(X\\\\). Thus, the correct option is Point \\\\(X\\\\).",
          workingOut: "\\\\( WX \\\\cap XY = Point \\; X \\\\)"
        }
      ]
    },
    {
      id: "q2d",
      question: "What point lies on both $XY$ and $YZ$?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Point $W$",
        "Point $X$",
        "Point $Z$",
        "Point $Y$"
      ],
      answer: 3,
      opts: [
        "Point $W$",
        "Point $X$",
        "Point $Z$",
        "Point $Y$"
      ],
      a: 3,
      solutionSteps: [
        {
          explanation: "We start by identifying the two lines in question: Line \\\\(XY\\\\) (the right slanted line) and Line \\\\(YZ\\\\) (the bottom horizontal line).",
          workingOut: "\\\\( \\text{Find lines: } XY \\text{ and } YZ \\\\)"
        },
        {
          explanation: "Next, we look for the common point shared by both lines. Mathematically, this is their point of intersection.",
          workingOut: "\\\\( XY \\\\cap YZ \\\\)"
        },
        {
          explanation: "Finally, observing the letters, both names share the letter \\\\(Y\\\\). Looking at the diagram, the bottom-right corner where they meet is Point \\\\(Y\\\\).",
          workingOut: "\\\\( XY \\\\cap YZ = Point \\; Y \\\\)"
        }
      ]
    },
    {
      id: "q2e",
      question: "Do any points lie on both lines $WX$ and $ZY$?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "No, because parallel lines never intersect.",
        "Yes, point $W$.",
        "Yes, point $X$.",
        "Yes, point $Z$."
      ],
      answer: 0,
      solutionSteps: [
        {
          explanation: "We begin by locating lines \\\\(WX\\\\) (top horizontal line) and \\\\(ZY\\\\) (bottom horizontal line) in the diagram.",
          workingOut: "\\\\( \\text{Compare lines } WX \\text{ and } ZY \\\\)"
        },
        {
          explanation: "Next, we observe that these two lines are parallel to each other. By definition, parallel lines in the same plane never meet, no matter how far they are extended.",
          workingOut: "\\\\( WX \\\\parallel ZY \\\\)"
        },
        {
          explanation: "Finally, since they never intersect, there are no common points between them. Therefore, the correct answer is: No, because parallel lines never intersect.",
          workingOut: "\\\\( WX \\\\cap ZY = \\\\emptyset \\\\)"
        }
      ]
    }
  ];

  console.log('Updating cFWooF7i9L47uPvKkiiS in Firestore with realistic point options and subQuestion solutionSteps...');
  await docRef.update({
    subQuestions,
    solution: null,
    isNew: true
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Done!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
