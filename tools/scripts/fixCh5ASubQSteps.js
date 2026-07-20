import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('174vTcmPNyrWdudcjXbI');
  const d = (await docRef.get()).data();

  // Create detailed solutionSteps for each subQuestion in 174vTcmPNyrWdudcjXbI
  const subQuestions = [
    {
      id: "q3a",
      question: "Name the four concurrent lines passing through the point $M$ in the diagram.",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Lines $AB$, $CD$, $EF$, and $GH$",
        "Lines $AC$, $BD$, $EM$, and $HM$",
        "Lines $AM$, $BM$, $CM$, and $DM$",
        "Lines $AB$, $CD$, $AC$, and $BD$"
      ],
      answer: 0,
      solutionSteps: [
        {
          explanation: "We start by identifying the point \\\\(M\\\\) in the diagram, which is the red dot in the center. We need to identify all distinct lines that pass through this single intersection point.",
          workingOut: "\\\\( \\text{Point } M \\text{ is the point of concurrency} \\\\)"
        },
        {
          explanation: "Next, we trace the straight lines passing directly through \\\\(M\\\\). By observing the labeled points, the horizontal line is line \\\\(AB\\\\), the vertical line is line \\\\(CD\\\\), and we also have two diagonal lines which are named \\\\(EF\\\\) and \\\\(GH\\\\).",
          workingOut: "\\\\( \\text{Concurrent lines: } AB, \\; CD, \\; EF, \\; GH \\\\)"
        },
        {
          explanation: "Finally, we combine these names to identify the matching option. The correct list containing all four straight lines passing through \\\\(M\\\\) is Lines \\\\(AB\\\\), \\\\(CD\\\\), \\\\(EF\\\\), and \\\\(GH\\\\).",
          workingOut: "\\\\( \\text{Final Answer: Lines } AB, \\; CD, \\; EF, \\; GH \\\\)"
        }
      ]
    },
    {
      id: "q3b",
      question: "Name the two parallel lines, using the correct symbol for \"is parallel to\".",
      type: "multiple_choice",
      isManual: true,
      options: [
        "$AC \\parallel BD$",
        "$AB \\parallel CD$",
        "$EF \\parallel GH$",
        "$AC \\perp BD$"
      ],
      answer: 0,
      solutionSteps: [
        {
          explanation: "We begin by locating the parallel lines in the geometry diagram. Parallel lines are represented visually with matching arrows or arrowheads pointing in the same direction.",
          workingOut: "\\\\( \\text{Look for matching blue dashed lines with arrowheads} \\\\)"
        },
        {
          explanation: "Next, we observe that the left vertical dashed line passes through points \\\\(A\\\\) and \\\\(C\\\\) (line \\\\(AC\\\\)), and the right vertical dashed line passes through points \\\\(B\\\\) and \\\\(D\\\\) (line \\\\(BD\\\\)).",
          workingOut: "\\\\( \\text{Lines: } AC \\text{ and } BD \\\\)"
        },
        {
          explanation: "Finally, we apply the standard parallel notation symbol \\\\(\\\\parallel\\\\). Writing that line \\\\(AC\\\\) is parallel to line \\\\(BD\\\\) yields \\\\(AC \\\\parallel BD\\\\).",
          workingOut: "\\\\( AC \\\\parallel BD \\\\)"
        }
      ]
    },
    {
      id: "q3c",
      question: "Name the point of intersection of the lines $AB$ and $CD$.",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Point $A$",
        "Point $B$",
        "Point $P$",
        "Point $M$"
      ],
      answer: 3,
      solutionSteps: [
        {
          explanation: "We start by identifying the two lines \\\\(AB\\\\) (the horizontal line) and \\\\(CD\\\\) (the vertical solid line) on the coordinate plane.",
          workingOut: "\\\\( \\text{Find lines: } AB \\text{ and } CD \\\\)"
        },
        {
          explanation: "Next, we trace both lines to locate the single point where they cross each other. This is the intersection point.",
          workingOut: "\\\\( AB \\\\cap CD \\\\)"
        },
        {
          explanation: "Finally, we read the label of this intersection point from the diagram, which is clearly marked as \\\\(M\\\\). Thus, the correct option is Point \\\\(M\\\\).",
          workingOut: "\\\\( AB \\\\cap CD = Point \\; M \\\\)"
        }
      ]
    },
    {
      id: "q3d",
      question: "Name the line joining $C$ and the intersection of $AB$ and $CD$.",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Line $CM$",
        "Line $AM$",
        "Line $CD$",
        "Line $AC$"
      ],
      answer: 0,
      solutionSteps: [
        {
          explanation: "We begin by determining the intersection of lines \\\\(AB\\\\) and \\\\(CD\\\\), which we previously found to be the point \\\\(M\\\\).",
          workingOut: "\\\\( \\text{Intersection} = M \\\\)"
        },
        {
          explanation: "Next, we identify the line that connects point \\\\(C\\\\) and this intersection point \\\\(M\\\\).",
          workingOut: "\\\\( \\text{Connect point } C \\text{ and point } M \\\\)"
        },
        {
          explanation: "Finally, in standard geometric notation, a line passing through points \\\\(C\\\\) and \\\\(M\\\\) is named Line \\\\(CM\\\\). This corresponds directly to our correct option.",
          workingOut: "\\\\( \\text{Line Name: } CM \\\\)"
        }
      ]
    },
    {
      id: "q3e",
      question: "What point belongs to both lines $AC$ and $CD$?",
      type: "multiple_choice",
      isManual: true,
      options: [
        "Point $A$",
        "Point $C$",
        "Point $B$",
        "Point $P$"
      ],
      answer: 1,
      solutionSteps: [
        {
          explanation: "We start by identifying the two lines \\\\(AC\\\\) (the left dashed vertical line) and \\\\(CD\\\\) (the vertical solid line passing through the center).",
          workingOut: "\\\\( \\text{Find lines: } AC \\text{ and } CD \\\\)"
        },
        {
          explanation: "Next, we find the common point shared by both lines. This is the point of intersection between line \\\\(AC\\\\) and line \\\\(CD\\\\).",
          workingOut: "\\\\( AC \\\\cap CD \\\\)"
        },
        {
          explanation: "Finally, looking at the letter designations, both lines share the letter \\\\(C\\\\). The intersection point in the diagram is Point \\\\(C\\\\).",
          workingOut: "\\\\( AC \\\\cap CD = Point \\; C \\\\)"
        }
      ]
    }
  ];

  console.log('Updating 174vTcmPNyrWdudcjXbI with subQuestion solutionSteps...');
  await docRef.update({
    subQuestions,
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
