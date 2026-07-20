import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// Question 14a - Update to detailed step-by-step
const q14a = {
  question: "Write the new equation of the line \\(y = 3x - 2\\) after it is translated 4 units upwards.",
  opts: [
    "\\(y = 3x - 6\\)",
    "\\(y = 3(x + 4) - 2\\)",
    "\\(y = 3(x - 4) - 2\\)",
    "\\(y = 3x + 2\\)"
  ],
  options: [
    "\\(y = 3x - 6\\)",
    "\\(y = 3(x + 4) - 2\\)",
    "\\(y = 3(x - 4) - 2\\)",
    "\\(y = 3x + 2\\)"
  ],
  a: 3,
  answer: 3,
  solutionSteps: [
    {
      "explanation": "We begin by analyzing the original linear equation representing the path. The objective is to apply a vertical translation of four units upwards to the entire line equation. We plan to identify the vertical translation parameter to modify our base function.",
      "workingOut": "Original equation: \\(y = 3x - 2\\)",
      "graphData": null
    },
    {
      "explanation": "Next, we recall the mathematical definition of a vertical shift. When translating a function vertically by a positive amount, we add the constant directly to the functional value. A common mistake is adding the translation term to the variable input within parenthesis instead of adding it to the end of the expression.",
      "workingOut": "Vertical translation rule: \\(y \\;\u2192\\; y + k\\) where \\(k = +4\\) \\(\\Rightarrow\\; y = (3x - 2) + 4\\)",
      "graphData": null
    },
    {
      "explanation": "Finally, we combine the constant integers by adding them together. This simplifies the equation to its standard slope-intercept form, giving us the transformed coordinate line equation.",
      "workingOut": "\\(y = 3x + (-2 + 4) \\;\\Rightarrow\\; y = 3x + 2\\)",
      "graphData": null
    }
  ],
  isNew: true
};

// 10 new translation questions (y11a-5-newq11 to newq20)
const newQuestions = [
  {
    "id": "y11a-5-newq11",
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
    "question": "A logistics drone routes its cargo path along the line \\(y = -2x + 5\\). If the dispatcher translates the path 3 units downwards, write the equation of the new flight path.",
    "opts": ["\\(y = -2x + 2\\)", "\\(y = -2x + 8\\)", "\\(y = -2(x - 3) + 5\\)", "\\(y = -2x - 3\\)"],
    "options": ["\\(y = -2x + 2\\)", "\\(y = -2x + 8\\)", "\\(y = -2(x - 3) + 5\\)", "\\(y = -2x - 3\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the entire line down by three units. We identify the vertical shift variable.",
        "workingOut": "Given: \\(y = -2x + 5\\)"
      },
      {
        "explanation": "Next, we apply the vertical translation property. Since the shift is downwards, we subtract the constant value from the entire expression. A common mistake is incorrectly distributing the negative sign across the linear term.",
        "workingOut": "\\(y_{\\text{new}} = (-2x + 5) - 3\\)"
      },
      {
        "explanation": "Finally, we simplify the constants to obtain the final slope-intercept equation of the shifted line.",
        "workingOut": "\\(y = -2x + 2\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq12",
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
    "question": "An industrial conveyor belt operates on a line modeled by \\(y = 4x + 1\\). Find the equation of the conveyor line after a translation of 5 units to the right.",
    "opts": ["\\(y = 4x - 19\\)", "\\(y = 4x - 4\\)", "\\(y = 4x + 21\\)", "\\(y = 4(x - 5) + 1\\)"],
    "options": ["\\(y = 4x - 19\\)", "\\(y = 4x - 4\\)", "\\(y = 4x + 21\\)", "\\(y = 4(x - 5) + 1\\)"],
    "a": 3,
    "answer": 3,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the base linear function and the required translation. A shift to the right affects the independent variable directly. We plan to substitute the shifted variable into the equation.",
        "workingOut": "Base: \\(y = 4x + 1\\) and Shift: 5 units to the right"
      },
      {
        "explanation": "Next, we replace the independent variable variable with the subtraction term. A common mistake is adding the constant inside the parenthesis instead of subtracting it when translating to the right.",
        "workingOut": "\\(x \\;\u2192\\; (x - 5) \\;\\Rightarrow\\; y = 4(x - 5) + 1\\)"
      },
      {
        "explanation": "Finally, we keep the equation in this factored horizontal translation form as matches our target option.",
        "workingOut": "\\(y = 4(x - 5) + 1\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq13",
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
    "question": "A robotics calibration line is defined by \\(y = -3x - 4\\). Write the equation of the line after a horizontal translation of 2 units to the left.",
    "opts": ["\\(y = -3(x + 2) - 4\\)", "\\(y = -3(x - 2) - 4\\)", "\\(y = -3x - 10\\)", "\\(y = -3x - 2\\)"],
    "options": ["\\(y = -3(x + 2) - 4\\)", "\\(y = -3(x - 2) - 4\\)", "\\(y = -3x - 10\\)", "\\(y = -3x - 2\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line left by two units. We identify the horizontal shift transformation variable.",
        "workingOut": "Given: \\(y = -3x - 4\\)"
      },
      {
        "explanation": "Next, we apply the horizontal translation property. Shifting to the left requires replacing the independent variable with a sum. A common mistake is subtracting the constant inside the parenthesis.",
        "workingOut": "\\(x \\;\u2192\\; (x + 2) \\;\\Rightarrow\\; y = -3(x + 2) - 4\\)"
      },
      {
        "explanation": "Finally, we state the final transformed equation matching our options.",
        "workingOut": "\\(y = -3(x + 2) - 4\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq14",
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
    "question": "A laser cutting path follows the graph of \\(y = x^2 - 3\\). If the path is translated 4 units upwards, find the equation of the new path.",
    "opts": ["\\(y = x^2 - 7\\)", "\\(y = (x - 4)^2 - 3\\)", "\\(y = x^2 + 1\\)", "\\(y = x^2 + 7\\)"],
    "options": ["\\(y = x^2 - 7\\)", "\\(y = (x - 4)^2 - 3\\)", "\\(y = x^2 + 1\\)", "\\(y = x^2 + 7\\)"],
    "a": 2,
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the laser path quadratic function and the vertical translation direction. We plan to add the translation constant directly to the function.",
        "workingOut": "Given: \\(y = x^2 - 3\\) and translation of +4 units vertically"
      },
      {
        "explanation": "Next, we perform the addition to apply the vertical transformation. A common mistake is applying the translation to the independent variable inside a square parenthetical expression.",
        "workingOut": "\\(y_{\\text{new}} = (x^2 - 3) + 4\\)"
      },
      {
        "explanation": "Finally, we combine the constants to simplify the equation to its standard quadratic form.",
        "workingOut": "\\(y = x^2 + 1\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq15",
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
    "question": "An marine vessel sonar signal is modeled by the function \\(y = \\frac{1}{x} + 2\\). If the signal curve is translated 3 units downwards, determine the new equation.",
    "opts": ["\\(y = \\frac{1}{x} - 1\\)", "\\(y = \\frac{1}{x} + 5\\)", "\\(y = \\frac{1}{x - 3} + 2\\)", "\\(y = \\frac{1}{x + 3} + 2\\)"],
    "options": ["\\(y = \\frac{1}{x} - 1\\)", "\\(y = \\frac{1}{x} + 5\\)", "\\(y = \\frac{1}{x - 3} + 2\\)", "\\(y = \\frac{1}{x + 3} + 2\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the reciprocal function and the vertical translation parameter. We will subtract the constant from the output of the function.",
        "workingOut": "Given: \\(y = \\frac{1}{x} + 2\\) and shift of -3 units"
      },
      {
        "explanation": "Next, we apply the translation by subtracting the units from the constant addition. A common mistake is translating the independent variable in the denominator.",
        "workingOut": "\\(y_{\\text{new}} = \\left(\\frac{1}{x} + 2\\right) - 3\\)"
      },
      {
        "explanation": "Finally, we simplify the terms to find the final transformed expression.",
        "workingOut": "\\(y = \\frac{1}{x} - 1\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq16",
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
    "question": "A high-speed rail track path is defined by \\(y = x^3 - 4\\). Write the equation of the path after it is translated 2 units to the left.",
    "opts": ["\\(y = (x - 2)^3 - 4\\)", "\\(y = x^3 - 6\\)", "\\(y = x^3 - 2\\)", "\\(y = (x + 2)^3 - 4\\)"],
    "options": ["\\(y = (x - 2)^3 - 4\\)", "\\(y = x^3 - 6\\)", "\\(y = x^3 - 2\\)", "\\(y = (x + 2)^3 - 4\\)"],
    "a": 3,
    "answer": 3,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the cubic trajectory function and the horizontal translation direction. A shift to the left affects the input variable directly.",
        "workingOut": "Given: \\(y = x^3 - 4\\) and translation of 2 units left"
      },
      {
        "explanation": "Next, we substitute the horizontal translation value into the independent variable. A common mistake is subtracting the constant instead of adding it when shifting left.",
        "workingOut": "\\(x \\;\u2192\\; (x + 2) \\;\\Rightarrow\\; y = (x + 2)^3 - 4\\)"
      },
      {
        "explanation": "Finally, we state the completed transformed equation.",
        "workingOut": "\\(y = (x + 2)^3 - 4\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq17",
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
    "question": "A light beam path in an optical fiber is modeled by \\(y = (x - 1)^2\\). Express the new equation of the path after it is translated 3 units to the right.",
    "opts": ["\\(y = (x - 4)^2\\)", "\\(y = (x + 2)^2\\)", "\\(y = (x - 1)^2 + 3\\)", "\\(y = (x - 1)^2 - 3\\)"],
    "options": ["\\(y = (x - 4)^2\\)", "\\(y = (x + 2)^2\\)", "\\(y = (x - 1)^2 + 3\\)", "\\(y = (x - 1)^2 - 3\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic function. The objective is to translate the path horizontally. We identify the horizontal shift direction.",
        "workingOut": "Given: \\(y = (x - 1)^2\\) and shift of 3 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Translating to the right requires subtracting the shift value from the variable inside the parenthetical expression. A common mistake is performing addition.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3) \\;\\Rightarrow\\; y = ((x - 3) - 1)^2\\)"
      },
      {
        "explanation": "Finally, we simplify the terms within the parenthesis to obtain the standard vertex form of the translated path.",
        "workingOut": "\\(y = (x - 4)^2\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq18",
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
    "question": "A radar scan boundary is represented by the circle \\(x^2 + y^2 = 25\\). If the scan center is translated 2 units to the right and 4 units downwards, find the new equation.",
    "opts": ["\\((x - 2)^2 + (y + 4)^2 = 25\\)", "\\((x + 2)^2 + (y - 4)^2 = 25\\)", "\\((x - 2)^2 + (y - 4)^2 = 25\\)", "\\((x + 2)^2 + (y + 4)^2 = 25\\)"],
    "options": ["\\((x - 2)^2 + (y + 4)^2 = 25\\)", "\\((x + 2)^2 + (y - 4)^2 = 25\\)", "\\((x - 2)^2 + (y - 4)^2 = 25\\)", "\\((x + 2)^2 + (y + 4)^2 = 25\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by writing the standard equation of the circle and the horizontal and vertical shift details. We plan to translate both coordinates.",
        "workingOut": "Given: \\(x^2 + y^2 = 25\\) with shift of +2 horizontal and -4 vertical"
      },
      {
        "explanation": "Next, we replace the coordinate variables with the translations. Shifting right subtracts from the horizontal variable, and shifting down adds to the vertical variable in vertex form. A common mistake is reversing these signs.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2)\\) and \\(y \\;\u2192\\; (y + 4)\\)"
      },
      {
        "explanation": "Finally, we substitute the translations back into the circle equation to formulate the new boundary path.",
        "workingOut": "\\((x - 2)^2 + (y + 4)^2 = 25\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq19",
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
    "question": "A thermal fluid channel boundary is modeled by the function \\(y = \\frac{1}{x + 1}\\). Find the equation of the channel after it is translated 3 units to the left.",
    "opts": ["\\(y = \\frac{1}{x + 4}\\)", "\\(y = \\frac{1}{x - 2}\\)", "\\(y = \\frac{1}{x + 1} - 3\\)", "\\(y = \\frac{1}{x + 1} + 3\\)"],
    "options": ["\\(y = \\frac{1}{x + 4}\\)", "\\(y = \\frac{1}{x - 2}\\)", "\\(y = \\frac{1}{x + 1} - 3\\)", "\\(y = \\frac{1}{x + 1} + 3\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the rational function and the horizontal shift direction. A shift to the left modifies the independent variable inside the denominator.",
        "workingOut": "Given: \\(y = \\frac{1}{x + 1}\\) and shift of 3 units left"
      },
      {
        "explanation": "Next, we replace the independent variable. Translating left requires adding the shift value directly to the variable argument. A common mistake is subtracting the constant.",
        "workingOut": "\\(x \\;\u2192\\; (x + 3) \\;\\Rightarrow\\; y = \\frac{1}{(x + 3) + 1}\\)"
      },
      {
        "explanation": "Finally, we simplify the denominator to find the final equation.",
        "workingOut": "\\(y = \\frac{1}{x + 4}\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq20",
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
    "question": "A cryptographic curve modeled by \\(y = (x + 3)^3\\) is translated 5 units to the right. Express the transformed curve equation.",
    "opts": ["\\(y = (x - 2)^3\\)", "\\(y = (x + 8)^3\\)", "\\(y = (x + 3)^3 + 5\\)", "\\(y = (x + 3)^3 - 5\\)"],
    "options": ["\\(y = (x - 2)^3\\)", "\\(y = (x + 8)^3\\)", "\\(y = (x + 3)^3 + 5\\)", "\\(y = (x + 3)^3 - 5\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by analyzing the base cubic function and the translation vector. Shifting right directly affects the input variable within the parenthetical cube.",
        "workingOut": "Given: \\(y = (x + 3)^3\\) and shift of 5 units right"
      },
      {
        "explanation": "Next, we perform the horizontal variable substitution. Translating to the right requires subtracting the shift parameter from the variable. A common mistake is adding the value.",
        "workingOut": "\\(x \\;\u2192\\; (x - 5) \\;\\Rightarrow\\; y = ((x - 5) + 3)^3\\)"
      },
      {
        "explanation": "Finally, we simplify the terms inside the parentheses to find the finished cubic equation.",
        "workingOut": "\\(y = (x - 2)^3\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  }
];

async function run() {
  // Update 14a
  const docIdA = 'y11a-5-14a';
  console.log(`Updating ${docIdA}...`);
  const docRefA = db.collection('questions').doc(docIdA);
  const snapA = await docRefA.get();
  if (snapA.exists) {
    await docRefA.update(q14a);
    console.log(`Updated ${docIdA} successfully.`);
  } else {
    console.error(`${docIdA} does not exist!`);
  }

  // Add 10 new questions (11 to 20)
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
