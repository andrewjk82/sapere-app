import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// 8 missing unique questions (y11a-5-newq131 to newq138) under topic 5A
const newQuestions = [
  {
    "id": "y11a-5-newq131",
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
    "question": "A subsea pipeline depth model follows the rational curve \\(y = \\frac{11}{x}\\). If it is translated 3 units to the left and 4 units upward, find the new model equation.",
    "opts": [
      "\\(y = \\frac{11}{x + 3} + 4\\)",
      "\\(y = \\frac{11}{x - 3} + 4\\)",
      "\\(y = \\frac{11}{x + 3} - 4\\)",
      "\\(y = \\frac{11}{x - 3} - 4\\)"
    ],
    "options": [
      "\\(y = \\frac{11}{x + 3} + 4\\)",
      "\\(y = \\frac{11}{x - 3} + 4\\)",
      "\\(y = \\frac{11}{x + 3} - 4\\)",
      "\\(y = \\frac{11}{x - 3} - 4\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the original subsea depth curve. The curve undergoes both horizontal and vertical translations, which we will apply to the variable and overall function respectively.",
        "workingOut": "Given: \\(y = \\frac{11}{x}\\), Horizontal: 3 units left, Vertical: 4 units up"
      },
      {
        "explanation": "Next, we apply the horizontal translation. Shifting to the left requires replacing the independent variable with a sum inside the denominator. A common mistake is subtracting the constant in the denominator when moving left.",
        "workingOut": "\\(x \\;\u2192\\; x + 3 \\;\\Rightarrow\\; y = \\frac{11}{x + 3}\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by adding four to the expression. Simplifying the constant terms gives us the final simplified pipeline equation.",
        "workingOut": "\\(y = \\frac{11}{x + 3} + 4\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq132",
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
    "question": "A high-precision optical laser path is modeled by \\(y = (x - 5)^2 + 6\\). If the path is translated 2 units to the right and 3 units downward, find the new path equation.",
    "opts": [
      "\\(y = (x - 7)^2 + 3\\)",
      "\\(y = (x - 3)^2 + 3\\)",
      "\\(y = (x - 7)^2 + 9\\)",
      "\\(y = (x - 3)^2 + 9\\)"
    ],
    "options": [
      "\\(y = (x - 7)^2 + 3\\)",
      "\\(y = (x - 3)^2 + 3\\)",
      "\\(y = (x - 7)^2 + 9\\)",
      "\\(y = (x - 3)^2 + 9\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic model. The objective is to translate the path horizontally and vertically. We identify the translation constants.",
        "workingOut": "Given: \\(y = (x - 5)^2 + 6\\), Horizontal: 2 units right, Vertical: 3 units down"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the horizontal constant from the variable. A common mistake is adding the value inside the parenthesis.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2) \\;\\Rightarrow\\; y = ((x - 2) - 5)^2 + 6\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by subtracting three, then we simplify the constants inside the parentheses and combine the numbers outside to find the new quadratic equation.",
        "workingOut": "\\(y = (x - 7)^2 + 6 - 3 \\;\\Rightarrow\\; y = (x - 7)^2 + 3\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq133",
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
    "question": "A cylindrical sensor boundary is represented by \\((x - 2)^2 + (y + 5)^2 = 16\\). If the machine is calibrated to translate the scan 3 units to the right and 1 unit upward, find the new boundary equation.",
    "opts": [
      "\\((x - 5)^2 + (y + 4)^2 = 16\\)",
      "\\((x + 1)^2 + (y + 4)^2 = 16\\)",
      "\\((x - 5)^2 + (y + 6)^2 = 16\\)",
      "\\((x + 1)^2 + (y + 6)^2 = 16\\)"
    ],
    "options": [
      "\\((x - 5)^2 + (y + 4)^2 = 16\\)",
      "\\((x + 1)^2 + (y + 4)^2 = 16\\)",
      "\\((x - 5)^2 + (y + 6)^2 = 16\\)",
      "\\((x + 1)^2 + (y + 6)^2 = 16\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the circular boundary equation and the translation details. Both coordinates are translated to find the new scanner profile.",
        "workingOut": "Given: \\((x - 2)^2 + (y + 5)^2 = 16\\)"
      },
      {
        "explanation": "Next, we replace the coordinate variables with the translations. Shifting right subtracts from the horizontal variable, and shifting up subtracts from the vertical variable in vertex form. A common mistake is reversing these signs.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3)\\) and \\(y \\;\u2192\\; (y - 1)\\)"
      },
      {
        "explanation": "Finally, we substitute the translations back into the circle equation and simplify the integers inside both sets of parentheses to obtain the finished circular boundary.",
        "workingOut": "\\(((x - 3) - 2)^2 + ((y - 1) + 5)^2 = 16 \\;\\Rightarrow\\; (x - 5)^2 + (y + 4)^2 = 16\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq134",
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
    "question": "A logistics vehicle's route line is defined by \\(y = -3x + 6\\). Write the equation of the route after it is translated 4 units to the left.",
    "opts": [
      "\\(y = -3(x + 4) + 6\\)",
      "\\(y = -3(x - 4) + 6\\)",
      "\\(y = -3x - 6\\)",
      "\\(y = -3x + 18\\)"
    ],
    "options": [
      "\\(y = -3(x + 4) + 6\\)",
      "\\(y = -3(x - 4) + 6\\)",
      "\\(y = -3x - 6\\)",
      "\\(y = -3x + 18\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally left by four units. We identify the horizontal variable parameter.",
        "workingOut": "Given: \\(y = -3x + 6\\) and translation of 4 units left"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting to the left requires adding the constant to the variable argument. A common mistake is subtracting the constant inside the parenthesis.",
        "workingOut": "\\(x \\;\u2192\\; (x + 4) \\;\\Rightarrow\\; y = -3(x + 4) + 6\\)"
      },
      {
        "explanation": "Finally, we state the final transformed equation matching our options in its factored horizontal translation form.",
        "workingOut": "\\(y = -3(x + 4) + 6\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq135",
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
    "question": "A satellite trajectory profile is defined by \\(y = 3x^3 - 6\\). If the tracking model translates the curve 2 units to the right, write the new equation.",
    "opts": [
      "\\(y = 3(x - 2)^3 - 6\\)",
      "\\(y = 3(x + 2)^3 - 6\\)",
      "\\(y = 3x^3 - 12\\)",
      "\\(y = 3x^3\\)",
    ],
    "options": [
      "\\(y = 3(x - 2)^3 - 6\\)",
      "\\(y = 3(x + 2)^3 - 6\\)",
      "\\(y = 3x^3 - 12\\)",
      "\\(y = 3x^3\\)",
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the base cubic model. A horizontal translation affects the independent variable in the equation. We plan to perform a direct substitution.",
        "workingOut": "Given: \\(y = 3x^3 - 6\\) and translation: 2 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the constant from the variable. A common mistake is replacing the entire term without applying the exponent to the translation binomial.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2) \\;\\Rightarrow\\; y = 3(x - 2)^3 - 6\\)"
      },
      {
        "explanation": "Finally, we state the final cubic model equation in its factored horizontal translation form.",
        "workingOut": "\\(y = 3(x - 2)^3 - 6\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq136",
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
    "question": "A thermal fluid channel boundary follows the curve \\(y = \\frac{18}{x}\\). If the channel is translated 2 units to the right and 1 unit downward, find the new boundary equation.",
    "opts": [
      "\\(y = \\frac{18}{x - 2} - 1\\)",
      "\\(y = \\frac{18}{x + 2} - 1\\)",
      "\\(y = \\frac{18}{x - 2} + 1\\)",
      "\\(y = \\frac{18}{x + 2} + 1\\)"
    ],
    "options": [
      "\\(y = \\frac{18}{x - 2} - 1\\)",
      "\\(y = \\frac{18}{x + 2} - 1\\)",
      "\\(y = \\frac{18}{x - 2} + 1\\)",
      "\\(y = \\frac{18}{x + 2} + 1\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the rational curve model and the required translation vector. Both horizontal and vertical coordinates are modified. We plan to perform these steps sequentially.",
        "workingOut": "Given: \\(y = \\frac{18}{x}\\), Horizontal: 2 units right, Vertical: 1 unit down"
      },
      {
        "explanation": "Next, we apply the horizontal shift by modifying the independent variable in the denominator. A common mistake is adding the constant inside the denominator instead of subtracting it when shifting right.",
        "workingOut": "\\(x \\;\u2192\\; x - 2 \\;\\Rightarrow\\; y = \\frac{18}{x - 2}\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by subtracting the constant from the entire rational term to obtain the final translated fluid channel equation.",
        "workingOut": "\\(y = \\frac{18}{x - 2} - 1\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq137",
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
    "question": "A robotics arm path is defined by \\(y = (x + 2)^2 - 6\\). Describe the translation required to map this path onto the new trajectory \\(y = (x - 3)^2 - 6\\).",
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
        "workingOut": "Initial: \\(y_1 = (x + 2)^2 - 6\\), Target: \\(y_2 = (x - 3)^2 - 6\\)"
      },
      {
        "explanation": "Next, we evaluate the horizontal translation by setting up a variable replacement relation. We determine the constant offset required to transition from the initial term to the target term. A common mistake is subtracting the constants in the wrong order.",
        "workingOut": "\\(x + 2 \\;\u2192\\; x - 3 \\;\\Rightarrow\\; x \\;\u2192\\; x - 5\\)"
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
    "id": "y11a-5-newq138",
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
    "question": "A suspension cable contour follows the curve \\(y = x^2 - 4x + 4\\). If the engineering model is translated 2 units vertically upward, find the new equation of the cable.",
    "opts": [
      "\\(y = x^2 - 4x + 6\\)",
      "\\(y = x^2 - 4x + 2\\)",
      "\\(y = (x - 2)^2 - 4x + 4\\)",
      "\\(y = x^2 - 4x + 10\\)"
    ],
    "options": [
      "\\(y = x^2 - 4x + 6\\)",
      "\\(y = x^2 - 4x + 2\\)",
      "\\(y = (x - 2)^2 - 4x + 4\\)",
      "\\(y = x^2 - 4x + 10\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic cable equation and identifying the translation direction. A vertical shift upwards requires modifying the entire output.",
        "workingOut": "Given: \\(y = x^2 - 4x + 4\\) and shift: +2 units vertically"
      },
      {
        "explanation": "Next, we perform the addition of the translation parameter directly to the constant term of the quadratic function. A common mistake is adding the parameter inside the linear terms.",
        "workingOut": "\\(y_{\\text{new}} = (x^2 - 4x + 4) + 2\\)"
      },
      {
        "explanation": "Finally, we combine the numerical constants to obtain the final simplified quadratic equation of the cable deflection path.",
        "workingOut": "\\(y = x^2 - 4x + 6\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  }
];

async function run() {
  console.log(`Adding 8 missing questions (131 to 138)...`);
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
