import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// 10 new unique questions (y11a-5-newq21 to newq30) under topic 5A
const newQuestions = [
  {
    "id": "y11a-5-newq21",
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
    "question": "An acoustics engineer monitors sound waves defined by the wave function \\(y = \\frac{1}{x}\\). If the wave is translated 4 units to the left and 2 units upward, find the new model equation.",
    "opts": [
      "\\(y = \\frac{1}{x + 4} + 2\\)",
      "\\(y = \\frac{1}{x - 4} + 2\\)",
      "\\(y = \\frac{1}{x + 4} - 2\\)",
      "\\(y = \\frac{1}{x - 4} - 2\\)"
    ],
    "options": [
      "\\(y = \\frac{1}{x + 4} + 2\\)",
      "\\(y = \\frac{1}{x - 4} + 2\\)",
      "\\(y = \\frac{1}{x + 4} - 2\\)",
      "\\(y = \\frac{1}{x - 4} - 2\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the base wave function and identifying the components of the translation. The horizontal component shifts the curve left, while the vertical component shifts it upward. We plan to apply these translations sequentially.",
        "workingOut": "Given: \\(y = \\frac{1}{x}\\), Horizontal: 4 units left, Vertical: 2 units up"
      },
      {
        "explanation": "Next, we apply the horizontal translation by modifying the independent variable. Translating to the left requires adding the constant to the variable within the denominator. A common mistake is subtracting the constant in the denominator when translating left.",
        "workingOut": "\\(x \\;\u2192\\; x + 4 \\;\\Rightarrow\\; y = \\frac{1}{x + 4}\\)"
      },
      {
        "explanation": "Finally, we apply the vertical translation by adding the vertical constant to the entire rational term. This completes the transformation, matching our final target function.",
        "workingOut": "\\(y = \\frac{1}{x + 4} + 2\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq22",
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
    "question": "A thermal fluid channel profile is given by \\(y = (x - 2)^2 - 5\\). If the channel is translated 3 units to the right, determine the new path equation.",
    "opts": [
      "\\(y = (x - 5)^2 - 5\\)",
      "\\(y = (x + 1)^2 - 5\\)",
      "\\(y = (x - 5)^2 - 2\\)",
      "\\(y = (x - 2)^2 - 2\\)"
    ],
    "options": [
      "\\(y = (x - 5)^2 - 5\\)",
      "\\(y = (x + 1)^2 - 5\\)",
      "\\(y = (x - 5)^2 - 2\\)",
      "\\(y = (x - 2)^2 - 2\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic function. The objective is to translate the path horizontally by three units to the right. We identify the horizontal parameter within the squared expression.",
        "workingOut": "Given: \\(y = (x - 2)^2 - 5\\) and shift of 3 units right"
      },
      {
        "explanation": "Next, we perform the horizontal substitution. Shifting right requires subtracting the translation constant from the variable. A common mistake is adding the value inside the binomial squared term.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3) \\;\\Rightarrow\\; y = ((x - 3) - 2)^2 - 5\\)"
      },
      {
        "explanation": "Finally, we combine and simplify the constant integers inside the squared bracket to formulate our new channel boundary equation.",
        "workingOut": "\\(y = (x - 5)^2 - 5\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq23",
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
    "question": "A satellite radar boundary is modeled by the equation \\((x - 3)^2 + (y + 1)^2 = 16\\). If the tracking center is translated 4 units to the left, write the new equation of the boundary.",
    "opts": [
      "\\((x + 1)^2 + (y + 1)^2 = 16\\)",
      "\\((x - 7)^2 + (y + 1)^2 = 16\\)",
      "\\((x - 3)^2 + (y + 5)^2 = 16\\)",
      "\\((x + 1)^2 + (y - 3)^2 = 16\\)"
    ],
    "options": [
      "\\((x + 1)^2 + (y + 1)^2 = 16\\)",
      "\\((x - 7)^2 + (y + 1)^2 = 16\\)",
      "\\((x - 3)^2 + (y + 5)^2 = 16\\)",
      "\\((x + 1)^2 + (y - 3)^2 = 16\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the circular boundary equation and the horizontal shift vector. Shifting horizontally affects the horizontal variable term inside the squared expression.",
        "workingOut": "Given: \\((x - 3)^2 + (y + 1)^2 = 16\\) and shift: 4 units left"
      },
      {
        "explanation": "Next, we apply the translation by substituting the translation variable. Shifting left requires adding the constant to the variable argument. A common mistake is subtracting the value.",
        "workingOut": "\\(x \\;\u2192\\; (x + 4) \\;\\Rightarrow\\; ((x + 4) - 3)^2 + (y + 1)^2 = 16\\)"
      },
      {
        "explanation": "Finally, we combine the integers inside the horizontal squared term to obtain the finished translated circular model.",
        "workingOut": "\\((x + 1)^2 + (y + 1)^2 = 16\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq24",
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
    "question": "A light beam vector in an optical scanner follows the line \\(y = -x + 6\\). If the scanning mirror translates the line 5 units to the left, find the new linear equation.",
    "opts": [
      "\\(y = -x + 11\\)",
      "\\(y = -x + 1\\)",
      "\\(y = -x + 6\\)",
      "\\(y = -x - 5\\)"
    ],
    "options": [
      "\\(y = -x + 11\\)",
      "\\(y = -x + 1\\)",
      "\\(y = -x + 6\\)",
      "\\(y = -x - 5\\)"
    ],
    "a": 1,
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally left by five units. We identify the horizontal variable parameter.",
        "workingOut": "Given: \\(y = -x + 6\\) and translation of 5 units left"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting to the left requires adding the constant to the variable argument. A common mistake is failing to distribute the negative sign to the added constant.",
        "workingOut": "\\(x \\;\u2192\\; (x + 5) \\;\\Rightarrow\\; y = -(x + 5) + 6\\)"
      },
      {
        "explanation": "Finally, we expand the negative sign and simplify the constants to obtain the final slope-intercept equation of the shifted line.",
        "workingOut": "\\(y = -x - 5 + 6 \\;\\Rightarrow\\; y = -x + 1\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq25",
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
    "question": "A meteorological balloon's trajectory profile is defined by \\(y = x^3 + 3x\\). If the balloon moves such that the profile translates 2 units to the right, write the new trajectory equation.",
    "opts": [
      "\\(y = (x - 2)^3 + 3(x - 2)\\)",
      "\\(y = (x + 2)^3 + 3(x + 2)\\)",
      "\\(y = x^3 + 3x - 2\\)",
      "\\(y = x^3 + 3x + 2\\)"
    ],
    "options": [
      "\\(y = (x - 2)^3 + 3(x - 2)\\)",
      "\\(y = (x + 2)^3 + 3(x + 2)\\)",
      "\\(y = x^3 + 3x - 2\\)",
      "\\(y = x^3 + 3x + 2\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the base cubic model. A horizontal translation affects all instances of the independent variable in the equation. We plan to perform a direct substitution.",
        "workingOut": "Given: \\(y = x^3 + 3x\\) and translation: 2 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the constant from the variable. A common mistake is replacing only the first variable term and leaving the linear term unmodified.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2) \\;\\Rightarrow\\; y = (x - 2)^3 + 3(x - 2)\\)"
      },
      {
        "explanation": "Finally, we state the final cubic model equation in its factored horizontal translation form.",
        "workingOut": "\\(y = (x - 2)^3 + 3(x - 2)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq26",
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
    "question": "A shipping port boundary follows the curve \\(y = \\frac{2}{x}\\). If the port map translates the boundary 3 units to the right and 1 unit downward, find the new boundary equation.",
    "opts": [
      "\\(y = \\frac{2}{x - 3} - 1\\)",
      "\\(y = \\frac{2}{x + 3} - 1\\)",
      "\\(y = \\frac{2}{x - 3} + 1\\)",
      "\\(y = \\frac{2}{x + 3} + 1\\)"
    ],
    "options": [
      "\\(y = \\frac{2}{x - 3} - 1\\)",
      "\\(y = \\frac{2}{x + 3} - 1\\)",
      "\\(y = \\frac{2}{x - 3} + 1\\)",
      "\\(y = \\frac{2}{x + 3} + 1\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the rational curve model and the required translation vector. Both horizontal and vertical coordinates are modified. We plan to perform these steps sequentially.",
        "workingOut": "Given: \\(y = \\frac{2}{x}\\), Horizontal: 3 units right, Vertical: 1 unit down"
      },
      {
        "explanation": "Next, we apply the horizontal shift by modifying the independent variable in the denominator. A common mistake is adding the constant inside the denominator instead of subtracting it when shifting right.",
        "workingOut": "\\(x \\;\u2192\\; x - 3 \\;\\Rightarrow\\; y = \\frac{2}{x - 3}\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by subtracting the constant from the entire rational term to obtain the final translated shipping port model.",
        "workingOut": "\\(y = \\frac{2}{x - 3} - 1\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq27",
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
    "question": "A drone path is defined by \\(y = (x + 4)^2\\). Describe the translation required to map this path onto the new trajectory \\(y = (x - 1)^2\\).",
    "opts": [
      "5 units to the right",
      "5 units to the left",
      "5 units upward",
      "5 units downward"
    ],
    "options": [
      "5 units to the right",
      "5 units to the left",
      "5 units upward",
      "5 units downward"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial function and the target function. Analyzing the horizontal shift parameter inside each squared binomial term will reveal the direction and magnitude of the translation.",
        "workingOut": "Initial: \\(y_1 = (x + 4)^2\\), Target: \\(y_2 = (x - 1)^2\\)"
      },
      {
        "explanation": "Next, we evaluate the horizontal translation by setting up a variable replacement relation. We determine the constant offset required to transition from the initial term to the target term. A common mistake is subtracting the constants in the wrong order.",
        "workingOut": "\\(x + 4 \\;\u2192\\; x - 1 \\;\\Rightarrow\\; x \\;\u2192\\; x - 5\\)"
      },
      {
        "explanation": "Finally, we state the translation based on the sign of the constant. A negative constant in the variable substitution argument corresponds to a shift to the right.",
        "workingOut": "Result: 5 units to the right"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq28",
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
    "question": "A suspension cable contour follows the curve \\(y = x^2 - 4x + 6\\). If the engineering model is translated 2 units vertically upward, find the new equation of the cable.",
    "opts": [
      "\\(y = x^2 - 4x + 8\\)",
      "\\(y = x^2 - 4x + 4\\)",
      "\\(y = (x - 2)^2 - 4x + 6\\)",
      "\\(y = x^2 - 4x + 12\\)"
    ],
    "options": [
      "\\(y = x^2 - 4x + 8\\)",
      "\\(y = x^2 - 4x + 4\\)",
      "\\(y = (x - 2)^2 - 4x + 6\\)",
      "\\(y = x^2 - 4x + 12\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic cable equation and identifying the translation direction. A vertical shift upwards requires modifying the entire output.",
        "workingOut": "Given: \\(y = x^2 - 4x + 6\\) and shift: +2 units vertically"
      },
      {
        "explanation": "Next, we perform the addition of the translation parameter directly to the constant term of the quadratic function. A common mistake is adding the parameter inside the linear terms.",
        "workingOut": "\\(y_{\\text{new}} = (x^2 - 4x + 6) + 2\\)"
      },
      {
        "explanation": "Finally, we combine the numerical constants to obtain the final simplified quadratic equation of the cable deflection path.",
        "workingOut": "\\(y = x^2 - 4x + 8\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq29",
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
    "question": "A conveyor track's trajectory is modeled by the cubic function \\(y = (x - 1)^3 + 5\\). If the track is translated 2 units to the right, find the new path equation.",
    "opts": [
      "\\(y = (x - 3)^3 + 5\\)",
      "\\(y = (x + 1)^3 + 5\\)",
      "\\(y = (x - 3)^3 + 7\\)",
      "\\(y = (x - 1)^3 + 7\\)"
    ],
    "options": [
      "\\(y = (x - 3)^3 + 5\\)",
      "\\(y = (x + 1)^3 + 5\\)",
      "\\(y = (x - 3)^3 + 7\\)",
      "\\(y = (x - 1)^3 + 7\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial cubic equation. The objective is to translate the path horizontally. We identify the horizontal parameter within the cubed expression.",
        "workingOut": "Given: \\(y = (x - 1)^3 + 5\\) and shift of 2 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the translation constant from the variable. A common mistake is performing addition.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2) \\;\\Rightarrow\\; y = ((x - 2) - 1)^3 + 5\\)"
      },
      {
        "explanation": "Finally, we simplify the terms within the cubed bracket to formulate our new conveyor track equation.",
        "workingOut": "\\(y = (x - 3)^3 + 5\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq30",
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
    "question": "A high-precision laser alignment line follows the model \\(y = 5x - 7\\). If the alignment is translated 3 units to the right and 4 units downward, find the new linear equation.",
    "opts": [
      "\\(y = 5x - 26\\)",
      "\\(y = 5x - 6\\)",
      "\\(y = 5(x - 3) - 7\\)",
      "\\(y = 5x - 18\\)"
    ],
    "options": [
      "\\(y = 5x - 26\\)",
      "\\(y = 5x - 6\\)",
      "\\(y = 5(x - 3) - 7\\)",
      "\\(y = 5x - 18\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally right by three units and vertically down by four units.",
        "workingOut": "Given: \\(y = 5x - 7\\)"
      },
      {
        "explanation": "Next, we substitute the horizontal translation into the independent variable and apply the vertical translation by subtraction. A common mistake is neglecting to apply both translations simultaneously.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3)\\) and \\(y \\;\u2192\\; y - 4 \\;\\Rightarrow\\; y = 5(x - 3) - 7 - 4\\)"
      },
      {
        "explanation": "Finally, we expand the expression and combine the constant integers to simplify the equation to its standard slope-intercept form.",
        "workingOut": "\\(y = 5x - 15 - 11 \\;\\Rightarrow\\; y = 5x - 26\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  }
];

async function run() {
  console.log(`Adding 10 new questions (21 to 30)...`);
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
