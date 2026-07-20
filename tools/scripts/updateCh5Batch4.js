import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// 10 new unique questions (y11a-5-newq31 to newq40) under topic 5A
const newQuestions = [
  {
    "id": "y11a-5-newq31",
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
    "question": "A chemical concentration decay is modeled by the function \\(y = \\frac{3}{x} - 2\\). If the decay curve is translated 1 unit to the left and 4 units upward, write the new equation.",
    "opts": [
      "\\(y = \\frac{3}{x + 1} + 2\\)",
      "\\(y = \\frac{3}{x - 1} + 2\\)",
      "\\(y = \\frac{3}{x + 1} - 6\\)",
      "\\(y = \\frac{3}{x - 1} - 6\\)"
    ],
    "options": [
      "\\(y = \\frac{3}{x + 1} + 2\\)",
      "\\(y = \\frac{3}{x - 1} + 2\\)",
      "\\(y = \\frac{3}{x + 1} - 6\\)",
      "\\(y = \\frac{3}{x - 1} - 6\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the original rational concentration decay model. The curve undergoes both horizontal and vertical translations, which we will apply to the variable and overall function respectively.",
        "workingOut": "Given: \\(y = \\frac{3}{x} - 2\\), Horizontal: 1 unit left, Vertical: 4 units up"
      },
      {
        "explanation": "Next, we apply the horizontal translation. Shifting to the left requires replacing the independent variable with a sum inside the denominator. A common mistake is subtracting the constant in the denominator when moving left.",
        "workingOut": "\\(x \\;\u2192\\; x + 1 \\;\\Rightarrow\\; y = \\frac{3}{x + 1} - 2\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by adding four to the expression. Simplifying the constant terms gives us the final simplified concentration decay equation.",
        "workingOut": "\\(y = \\frac{3}{x + 1} - 2 + 4 \\;\\Rightarrow\\; y = \\frac{3}{x + 1} + 2\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq32",
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
    "question": "A parabolic projectile trajectory is modeled by \\(y = -(x - 1)^2 + 3\\). If the projectile path is translated 3 units to the right and 1 unit downward, find the new trajectory equation.",
    "opts": [
      "\\(y = -(x - 4)^2 + 2\\)",
      "\\(y = -(x + 2)^2 + 2\\)",
      "\\(y = -(x - 4)^2 + 4\\)",
      "\\(y = -(x + 2)^2 + 4\\)"
    ],
    "options": [
      "\\(y = -(x - 4)^2 + 2\\)",
      "\\(y = -(x + 2)^2 + 2\\)",
      "\\(y = -(x - 4)^2 + 4\\)",
      "\\(y = -(x + 2)^2 + 4\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic model. The objective is to translate the path horizontally and vertically. We identify the translation constants.",
        "workingOut": "Given: \\(y = -(x - 1)^2 + 3\\), Horizontal: 3 units right, Vertical: 1 unit down"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the horizontal constant from the variable. A common mistake is adding the value inside the parenthesis.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3) \\;\\Rightarrow\\; y = -((x - 3) - 1)^2 + 3\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by subtracting one, then we simplify the constants inside the parentheses and combine the numbers outside to find the new quadratic equation.",
        "workingOut": "\\(y = -(x - 4)^2 + 3 - 1 \\;\\Rightarrow\\; y = -(x - 4)^2 + 2\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq33",
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
    "question": "A cylindrical scanner boundary is represented by \\((x + 1)^2 + (y - 3)^2 = 9\\). If the machine is calibrated to translate the scan 3 units to the right and 2 units upward, find the new boundary equation.",
    "opts": [
      "\\((x - 2)^2 + (y - 5)^2 = 9\\)",
      "\\((x + 4)^2 + (y - 5)^2 = 9\\)",
      "\\((x - 2)^2 + (y - 1)^2 = 9\\)",
      "\\((x + 4)^2 + (y - 1)^2 = 9\\)"
    ],
    "options": [
      "\\((x - 2)^2 + (y - 5)^2 = 9\\)",
      "\\((x + 4)^2 + (y - 5)^2 = 9\\)",
      "\\((x - 2)^2 + (y - 1)^2 = 9\\)",
      "\\((x + 4)^2 + (y - 1)^2 = 9\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the circular boundary equation and the translation details. Both coordinates are translated to find the new scanner profile.",
        "workingOut": "Given: \\((x + 1)^2 + (y - 3)^2 = 9\\)"
      },
      {
        "explanation": "Next, we replace the coordinate variables with the translations. Shifting right subtracts from the horizontal variable, and shifting up subtracts from the vertical variable in vertex form. A common mistake is reversing these signs.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3)\\) and \\(y \\;\u2192\\; (y - 2)\\)"
      },
      {
        "explanation": "Finally, we substitute the translations back into the circle equation and simplify the integers inside both sets of parentheses to obtain the finished circular boundary.",
        "workingOut": "\\(((x - 3) + 1)^2 + ((y - 2) - 3)^2 = 9 \\;\\Rightarrow\\; (x - 2)^2 + (y - 5)^2 = 9\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq34",
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
    "question": "A logistics vehicle's route line is defined by \\(y = -4x + 3\\). Write the equation of the route after it is translated 6 units to the left.",
    "opts": [
      "\\(y = -4(x + 6) + 3\\)",
      "\\(y = -4(x - 6) + 3\\)",
      "\\(y = -4x - 21\\)",
      "\\(y = -4x + 9\\)"
    ],
    "options": [
      "\\(y = -4(x + 6) + 3\\)",
      "\\(y = -4(x - 6) + 3\\)",
      "\\(y = -4x - 21\\)",
      "\\(y = -4x + 9\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally left by six units. We identify the horizontal variable parameter.",
        "workingOut": "Given: \\(y = -4x + 3\\) and translation of 6 units left"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting to the left requires adding the constant to the variable argument. A common mistake is subtracting the constant inside the parenthesis.",
        "workingOut": "\\(x \\;\u2192\\; (x + 6) \\;\\Rightarrow\\; y = -4(x + 6) + 3\\)"
      },
      {
        "explanation": "Finally, we state the final transformed equation matching our options in its factored horizontal translation form.",
        "workingOut": "\\(y = -4(x + 6) + 3\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq35",
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
    "question": "A satellite trajectory profile is defined by \\(y = 2x^3 - 5\\). If the tracking model translates the curve 2 units to the right, write the new equation.",
    "opts": [
      "\\(y = 2(x - 2)^3 - 5\\)",
      "\\(y = 2(x + 2)^3 - 5\\)",
      "\\(y = 2x^3 - 7\\)",
      "\\(y = 2x^3 - 3\\)"
    ],
    "options": [
      "\\(y = 2(x - 2)^3 - 5\\)",
      "\\(y = 2(x + 2)^3 - 5\\)",
      "\\(y = 2x^3 - 7\\)",
      "\\(y = 2x^3 - 3\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the base cubic model. A horizontal translation affects the independent variable in the equation. We plan to perform a direct substitution.",
        "workingOut": "Given: \\(y = 2x^3 - 5\\) and translation: 2 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the constant from the variable. A common mistake is replacing the entire term without applying the exponent to the translation binomial.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2) \\;\\Rightarrow\\; y = 2(x - 2)^3 - 5\\)"
      },
      {
        "explanation": "Finally, we state the final cubic model equation in its factored horizontal translation form.",
        "workingOut": "\\(y = 2(x - 2)^3 - 5\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq36",
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
    "question": "A thermal fluid channel boundary follows the curve \\(y = \\frac{4}{x}\\). If the channel is translated 2 units to the right and 3 units downward, find the new boundary equation.",
    "opts": [
      "\\(y = \\frac{4}{x - 2} - 3\\)",
      "\\(y = \\frac{4}{x + 2} - 3\\)",
      "\\(y = \\frac{4}{x - 2} + 3\\)",
      "\\(y = \\frac{4}{x + 2} + 3\\)"
    ],
    "options": [
      "\\(y = \\frac{4}{x - 2} - 3\\)",
      "\\(y = \\frac{4}{x + 2} - 3\\)",
      "\\(y = \\frac{4}{x - 2} + 3\\)",
      "\\(y = \\frac{4}{x + 2} + 3\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the rational curve model and the required translation vector. Both horizontal and vertical coordinates are modified. We plan to perform these steps sequentially.",
        "workingOut": "Given: \\(y = \\frac{4}{x}\\), Horizontal: 2 units right, Vertical: 3 units down"
      },
      {
        "explanation": "Next, we apply the horizontal shift by modifying the independent variable in the denominator. A common mistake is adding the constant inside the denominator instead of subtracting it when shifting right.",
        "workingOut": "\\(x \\;\u2192\\; x - 2 \\;\\Rightarrow\\; y = \\frac{4}{x - 2}\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by subtracting the constant from the entire rational term to obtain the final translated fluid channel equation.",
        "workingOut": "\\(y = \\frac{4}{x - 2} - 3\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq37",
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
    "question": "A robotics arm path is defined by \\(y = (x + 3)^2 - 1\\). Describe the translation required to map this path onto the new trajectory \\(y = (x - 2)^2 - 1\\).",
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
        "workingOut": "Initial: \\(y_1 = (x + 3)^2 - 1\\), Target: \\(y_2 = (x - 2)^2 - 1\\)"
      },
      {
        "explanation": "Next, we evaluate the horizontal translation by setting up a variable replacement relation. We determine the constant offset required to transition from the initial term to the target term. A common mistake is subtracting the constants in the wrong order.",
        "workingOut": "\\(x + 3 \\;\u2192\\; x - 2 \\;\\Rightarrow\\; x \\;\u2192\\; x - 5\\)"
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
    "id": "y11a-5-newq38",
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
    "question": "A suspension cable contour follows the curve \\(y = x^2 - 6x + 5\\). If the engineering model is translated 3 units vertically upward, find the new equation of the cable.",
    "opts": [
      "\\(y = x^2 - 6x + 8\\)",
      "\\(y = x^2 - 6x + 2\\)",
      "\\(y = (x - 3)^2 - 6x + 5\\)",
      "\\(y = x^2 - 6x + 15\\)"
    ],
    "options": [
      "\\(y = x^2 - 6x + 8\\)",
      "\\(y = x^2 - 6x + 2\\)",
      "\\(y = (x - 3)^2 - 6x + 5\\)",
      "\\(y = x^2 - 6x + 15\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic cable equation and identifying the translation direction. A vertical shift upwards requires modifying the entire output.",
        "workingOut": "Given: \\(y = x^2 - 6x + 5\\) and shift: +3 units vertically"
      },
      {
        "explanation": "Next, we perform the addition of the translation parameter directly to the constant term of the quadratic function. A common mistake is adding the parameter inside the linear terms.",
        "workingOut": "\\(y_{\\text{new}} = (x^2 - 6x + 5) + 3\\)"
      },
      {
        "explanation": "Finally, we combine the numerical constants to obtain the final simplified quadratic equation of the cable deflection path.",
        "workingOut": "\\(y = x^2 - 6x + 8\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq39",
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
    "question": "A conveyor track's trajectory is modeled by the cubic function \\(y = (x - 2)^3 + 6\\). If the track is translated 2 units to the right, find the new path equation.",
    "opts": [
      "\\(y = (x - 4)^3 + 6\\)",
      "\\(y = x^3 + 6\\)",
      "\\(y = (x - 4)^3 + 8\\)",
      "\\(y = (x - 2)^3 + 8\\)"
    ],
    "options": [
      "\\(y = (x - 4)^3 + 6\\)",
      "\\(y = x^3 + 6\\)",
      "\\(y = (x - 4)^3 + 8\\)",
      "\\(y = (x - 2)^3 + 8\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial cubic equation. The objective is to translate the path horizontally. We identify the horizontal parameter within the cubed expression.",
        "workingOut": "Given: \\(y = (x - 2)^3 + 6\\) and shift of 2 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the translation constant from the variable. A common mistake is performing addition.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2) \\;\\Rightarrow\\; y = ((x - 2) - 2)^3 + 6\\)"
      },
      {
        "explanation": "Finally, we simplify the terms within the cubed bracket to formulate our new conveyor track equation.",
        "workingOut": "\\(y = (x - 4)^3 + 6\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq40",
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
    "question": "A high-precision laser alignment line follows the model \\(y = 3x - 5\\). If the alignment is translated 2 units to the right and 3 units downward, find the new linear equation.",
    "opts": [
      "\\(y = 3x - 14\\)",
      "\\(y = 3x - 2\\)",
      "\\(y = 3(x - 2) - 5\\)",
      "\\(y = 3x - 8\\)"
    ],
    "options": [
      "\\(y = 3x - 14\\)",
      "\\(y = 3x - 2\\)",
      "\\(y = 3(x - 2) - 5\\)",
      "\\(y = 3x - 8\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally right by two units and vertically down by three units.",
        "workingOut": "Given: \\(y = 3x - 5\\)"
      },
      {
        "explanation": "Next, we substitute the horizontal translation into the independent variable and apply the vertical translation by subtraction. A common mistake is neglecting to apply both translations simultaneously.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2)\\) and \\(y \\;\u2192\\; y - 3 \\;\\Rightarrow\\; y = 3(x - 2) - 5 - 3\\)"
      },
      {
        "explanation": "Finally, we expand the expression and combine the constant integers to simplify the equation to its standard slope-intercept form.",
        "workingOut": "\\(y = 3x - 6 - 8 \\;\\Rightarrow\\; y = 3x - 14\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  }
];

async function run() {
  console.log(`Adding 10 new questions (31 to 40)...`);
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
