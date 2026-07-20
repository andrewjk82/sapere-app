import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// Updated question 12d
const q12d = {
  question: "By completing the square, express \\(y = x^2 + 12x + 40\\) in the form \\(y = (x - h)^2 + k\\). Find only the coordinates of the turning point.",
  opts: [
    "\\((6, 4)\\)",
    "\\((-6, 4)\\)",
    "\\((-12, -104)\\)",
    "\\((-6, -4)\\)"
  ],
  options: [
    "\\((6, 4)\\)",
    "\\((-6, 4)\\)",
    "\\((-12, -104)\\)",
    "\\((-6, -4)\\)"
  ],
  a: 1,
  answer: 1,
  solutionSteps: [
    {
      "explanation": "We begin by writing down the given quadratic equation and preparing to complete the square. The goal is to rewrite the quadratic polynomial in vertex form to easily identify the coordinates of the turning point. We will first focus on the quadratic and linear terms.",
      "workingOut": "Given equation: \\(y = x^2 + 12x + 40\\)",
      "graphData": null
    },
    {
      "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and then add and subtract this value to complete the square. This creates a perfect square trinomial. A common mistake is forgetting to subtract the squared term, which would change the overall equation value.",
      "workingOut": "\\(y = (x^2 + 12x + 36) - 36 + 40 \\;\\Rightarrow\\; y = (x + 6)^2 + 4\\)",
      "graphData": null
    },
    {
      "explanation": "Finally, we extract the coordinates of the turning point by comparing the equation with the standard vertex form. The horizontal coordinate is the value of the variable that makes the squared term zero, and the vertical coordinate is the constant. This matches our target coordinates.",
      "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-6, 4)\\)",
      "graphData": null
    }
  ],
  isNew: true
};

// 10 new unique questions for translations and completing the square
const newQuestions = [
  {
    "id": "y11a-5-newq1",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A robotics team is programming an autonomous rover's path modeled by the parabola \\(y = x^2 - 8x + 15\\). Find the turning point by completing the square.",
    "opts": ["\\((4, -1)\\)", "\\((-4, -1)\\)", "\\((4, 1)\\)", "\\((8, -1)\\)"],
    "options": ["\\((4, -1)\\)", "\\((-4, -1)\\)", "\\((4, 1)\\)", "\\((8, -1)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the rover path equation to complete the square. The objective is to identify the turning point of the trajectory. We will first group the quadratic and linear terms.",
        "workingOut": "Given: \\(y = x^2 - 8x + 15\\)"
      },
      {
        "explanation": "Now we complete the square by taking half of the coefficient of the linear term, squaring it, and adding and subtracting it. This gives a perfect square trinomial. A common mistake is adding the term without subtracting it.",
        "workingOut": "\\(y = (x^2 - 8x + 16) - 16 + 15 \\;\\Rightarrow\\; y = (x - 4)^2 - 1\\)"
      },
      {
        "explanation": "Finally, we compare the equation to standard vertex form to find the coordinates of the turning point. The turning point occurs where the squared expression is zero, yielding the horizontal coordinate, paired with the constant offset.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (4, -1)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq2",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A biomedical device records a patient's breathing cycle modeled by the curve \\(y = x^2 + 4x + 7\\). Express this quadratic function in vertex form to find the turning point.",
    "opts": ["\\((2, 3)\\)", "\\((-2, 3)\\)", "\\((-2, -3)\\)", "\\((-4, 3)\\)"],
    "options": ["\\((2, 3)\\)", "\\((-2, 3)\\)", "\\((-2, -3)\\)", "\\((-4, 3)\\)"],
    "a": 1,
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the breathing cycle quadratic equation to express it in vertex form. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 + 4x + 7\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, halve it, square it, and then add and subtract this value to complete the square. A common mistake is incorrectly halving the coefficient.",
        "workingOut": "\\(y = (x^2 + 4x + 4) - 4 + 7 \\;\\Rightarrow\\; y = (x + 2)^2 + 3\\)"
      },
      {
        "explanation": "Finally, we read the turning point from the vertex form. The horizontal coordinate corresponds to the variable value making the binomial zero, and the vertical coordinate corresponds to the constant.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-2, 3)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq3",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "An aerospace trajectory for a descending shuttle is modeled by \\(y = x^2 - 14x + 52\\). Find the turning point by completing the square.",
    "opts": ["\\((-7, 3)\\)", "\\((7, -3)\\)", "\\((7, 3)\\)", "\\((14, 3)\\)"],
    "options": ["\\((-7, 3)\\)", "\\((7, -3)\\)", "\\((7, 3)\\)", "\\((14, 3)\\)"],
    "a": 2,
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the shuttle trajectory equation to find the coordinates of the turning point. We isolate the variable terms to facilitate completing the square.",
        "workingOut": "Given: \\(y = x^2 - 14x + 52\\)"
      },
      {
        "explanation": "We complete the square by adding and subtracting the square of half the linear coefficient. This transforms the quadratic into a squared term. A common mistake is arithmetic errors when subtracting the squared value from the constant.",
        "workingOut": "\\(y = (x^2 - 14x + 49) - 49 + 52 \\;\\Rightarrow\\; y = (x - 7)^2 + 3\\)"
      },
      {
        "explanation": "Finally, we identify the turning point from the resulting equation. The turning point coordinates are extracted directly from the vertex form parameters.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (7, 3)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq4",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A logistics drone has a delivery profile represented by \\(y = x^2 + 6x - 2\\). Complete the square to find the turning point coordinates.",
    "opts": ["\\((-3, -11)\\)", "\\((3, -11)\\)", "\\((-3, 7)\\)", "\\((-6, -11)\\)"],
    "options": ["\\((-3, -11)\\)", "\\((3, -11)\\)", "\\((-3, 7)\\)", "\\((-6, -11)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the quadratic delivery profile equation to find the coordinates of the turning point. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 + 6x - 2\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and then add and subtract this value to complete the square. A common mistake is subtracting the value from the constant with incorrect signs.",
        "workingOut": "\\(y = (x^2 + 6x + 9) - 9 - 2 \\;\\Rightarrow\\; y = (x + 3)^2 - 11\\)"
      },
      {
        "explanation": "Finally, we extract the coordinates of the turning point by comparing the equation with the standard vertex form. The turning point is represented by the horizontal and vertical shift parameters.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-3, -11)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq5",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A weather research ballon's altitude path is modeled by \\(y = x^2 - 10x + 21\\). Express it in vertex form to find the coordinates of the turning point.",
    "opts": ["\\((-5, -4)\\)", "\\((5, 4)\\)", "\\((10, -4)\\)", "\\((5, -4)\\)"],
    "options": ["\\((-5, -4)\\)", "\\((5, 4)\\)", "\\((10, -4)\\)", "\\((5, -4)\\)"],
    "a": 3,
    "answer": 3,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the balloon trajectory model to find the turning point of the curve. We group the terms containing variables to complete the square.",
        "workingOut": "Given: \\(y = x^2 - 10x + 21\\)"
      },
      {
        "explanation": "Next, we halve the linear coefficient, square it, and add and subtract this square. This creates a perfect square binomial. A common mistake is adding the squared term but neglecting the subtraction outside the parenthesis.",
        "workingOut": "\\(y = (x^2 - 10x + 25) - 25 + 21 \\;\\Rightarrow\\; y = (x - 5)^2 - 4\\)"
      },
      {
        "explanation": "Finally, we identify the turning point coordinates. The coordinates correspond to the translations represented by the horizontal shift and the constant offset.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (5, -4)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq6",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A marine sonar signal depth curve is modeled by the function \\(y = x^2 + 2x - 5\\). Complete the square to determine the turning point.",
    "opts": ["\\((-1, -6)\\)", "\\((1, -6)\\)", "\\((-1, 6)\\)", "\\((-2, -6)\\)"],
    "options": ["\\((-1, -6)\\)", "\\((1, -6)\\)", "\\((-1, 6)\\)", "\\((-2, -6)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the sonar depth function to find the coordinates of the turning point. We isolate the quadratic and linear terms.",
        "workingOut": "Given: \\(y = x^2 + 2x - 5\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and add and subtract it to complete the square. A common mistake is incorrectly adding the squared term.",
        "workingOut": "\\(y = (x^2 + 2x + 1) - 1 - 5 \\;\\Rightarrow\\; y = (x + 1)^2 - 6\\)"
      },
      {
        "explanation": "Finally, we compare the equation with standard vertex form to find the coordinates of the turning point. The coordinates correspond directly to the translations.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-1, -6)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq7",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "An industrial mechanical link operates along a path given by \\(y = x^2 - 12x + 32\\). Find the turning point of this path by completing the square.",
    "opts": ["\\((6, 4)\\)", "\\((-6, -4)\\)", "\\((6, -4)\\)", "\\((12, -4)\\)"],
    "options": ["\\((6, 4)\\)", "\\((-6, -4)\\)", "\\((6, -4)\\)", "\\((12, -4)\\)"],
    "a": 2,
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the mechanical path equation to complete the square. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 - 12x + 32\\)"
      },
      {
        "explanation": "Now we complete the square by adding and subtracting the square of half the linear coefficient. A common mistake is arithmetic errors when subtracting the squared value from the constant.",
        "workingOut": "\\(y = (x^2 - 12x + 36) - 36 + 32 \\;\\Rightarrow\\; y = (x - 6)^2 - 4\\)"
      },
      {
        "explanation": "Finally, we compare the equation to standard vertex form to find the coordinates of the turning point. The turning point is represented by the horizontal and vertical shift parameters.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (6, -4)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq8",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A structural beam deflection shape is modeled by the parabola \\(y = x^2 + 8x + 12\\). Find the turning point by completing the square.",
    "opts": ["\\((-4, -4)\\)", "\\((4, -4)\\)", "\\((-4, 4)\\)", "\\((-8, -4)\\)"],
    "options": ["\\((-4, -4)\\)", "\\((4, -4)\\)", "\\((-4, 4)\\)", "\\((-8, -4)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the beam deflection equation to find the coordinates of the turning point. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 + 8x + 12\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and then add and subtract this value to complete the square. A common mistake is incorrectly adding the squared term.",
        "workingOut": "\\(y = (x^2 + 8x + 16) - 16 + 12 \\;\\Rightarrow\\; y = (x + 4)^2 - 4\\)"
      },
      {
        "explanation": "Finally, we extract the coordinates of the turning point by comparing the equation with the standard vertex form. The turning point is represented by the horizontal and vertical shift parameters.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-4, -4)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq9",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "An agricultural drone sweeps a crop row modeled by the quadratic function \\(y = x^2 - 2x + 6\\). Find the turning point by completing the square.",
    "opts": ["\\((-1, 5)\\)", "\\((1, 5)\\)", "\\((1, -5)\\)", "\\((2, 5)\\)"],
    "options": ["\\((-1, 5)\\)", "\\((1, 5)\\)", "\\((1, -5)\\)", "\\((2, 5)\\)"],
    "a": 1,
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the drone row equation to complete the square. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 - 2x + 6\\)"
      },
      {
        "explanation": "Now we complete the square by adding and subtracting the square of half the linear coefficient. A common mistake is arithmetic errors when subtracting the squared value from the constant.",
        "workingOut": "\\(y = (x^2 - 2x + 1) - 1 + 6 \\;\\Rightarrow\\; y = (x - 1)^2 + 5\\)"
      },
      {
        "explanation": "Finally, we compare the equation to standard vertex form to find the coordinates of the turning point. The turning point is represented by the horizontal and vertical shift parameters.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (1, 5)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq10",
    "chapterId": "y11a-5",
    "chapterTitle": "Chapter 5: Transformations and symmetry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-5A",
    "topicCode": "5A",
    "topicTitle": "Translations of known graphs",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A signal transmitter has an optimal power trajectory modeled by \\(y = x^2 + 10x + 20\\). Determine the coordinates of the turning point.",
    "opts": ["\\((-5, -5)\\)", "\\((5, -5)\\)", "\\((-5, 5)\\)", "\\((-10, -5)\\)"],
    "options": ["\\((-5, -5)\\)", "\\((5, -5)\\)", "\\((-5, 5)\\)", "\\((-10, -5)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the power trajectory quadratic equation to complete the square. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 + 10x + 20\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and then add and subtract this value to complete the square. A common mistake is incorrectly adding the squared term.",
        "workingOut": "\\(y = (x^2 + 10x + 25) - 25 + 20 \\;\\Rightarrow\\; y = (x + 5)^2 - 5\\)"
      },
      {
        "explanation": "Finally, we extract the coordinates of the turning point by comparing the equation with the standard vertex form. The turning point is represented by the horizontal and vertical shift parameters.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-5, -5)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  }
];

async function run() {
  // Update 12d
  const docIdD = 'y11a-5-12d';
  console.log(`Updating ${docIdD}...`);
  const docRefD = db.collection('questions').doc(docIdD);
  const snapD = await docRefD.get();
  if (snapD.exists) {
    await docRefD.update(q12d);
    console.log(`Updated ${docIdD} successfully.`);
  } else {
    console.error(`${docIdD} does not exist!`);
  }

  // Add 10 new questions
  console.log(`Adding 10 new questions...`);
  for (const q of newQuestions) {
    await db.collection('questions').doc(q.id).set({
      ...q,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true
    });
    console.log(`Added ${q.id} successfully.`);
  }
}

run().catch(console.error);
