import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// 15 new unique questions (y11a-5-newq41 to newq55) under topic 5A
const newQuestions = [
  {
    "id": "y11a-5-newq41",
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
    "question": "A subsea pipeline depth model follows the rational curve \\(y = \\frac{5}{x}\\). If it is translated 3 units to the left and 2 units upward, find the new model equation.",
    "opts": [
      "\\(y = \\frac{5}{x + 3} + 2\\)",
      "\\(y = \\frac{5}{x - 3} + 2\\)",
      "\\(y = \\frac{5}{x + 3} - 2\\)",
      "\\(y = \\frac{5}{x - 3} - 2\\)"
    ],
    "options": [
      "\\(y = \\frac{5}{x + 3} + 2\\)",
      "\\(y = \\frac{5}{x - 3} + 2\\)",
      "\\(y = \\frac{5}{x + 3} - 2\\)",
      "\\(y = \\frac{5}{x - 3} - 2\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the original subsea depth curve. The curve undergoes both horizontal and vertical translations, which we will apply to the variable and overall function respectively.",
        "workingOut": "Given: \\(y = \\frac{5}{x}\\), Horizontal: 3 units left, Vertical: 2 units up"
      },
      {
        "explanation": "Next, we apply the horizontal translation. Shifting to the left requires replacing the independent variable with a sum inside the denominator. A common mistake is subtracting the constant in the denominator when moving left.",
        "workingOut": "\\(x \\;\u2192\\; x + 3 \\;\\Rightarrow\\; y = \\frac{5}{x + 3}\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by adding two to the expression. Simplifying the constant terms gives us the final simplified pipeline equation.",
        "workingOut": "\\(y = \\frac{5}{x + 3} + 2\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq42",
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
    "question": "A high-precision optical laser path is modeled by \\(y = (x - 3)^2 + 1\\). If the path is translated 2 units to the right and 3 units downward, find the new path equation.",
    "opts": [
      "\\(y = (x - 5)^2 - 2\\)",
      "\\(y = (x - 1)^2 - 2\\)",
      "\\(y = (x - 5)^2 + 4\\)",
      "\\(y = (x - 1)^2 + 4\\)"
    ],
    "options": [
      "\\(y = (x - 5)^2 - 2\\)",
      "\\(y = (x - 1)^2 - 2\\)",
      "\\(y = (x - 5)^2 + 4\\)",
      "\\(y = (x - 1)^2 + 4\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic model. The objective is to translate the path horizontally and vertically. We identify the translation constants.",
        "workingOut": "Given: \\(y = (x - 3)^2 + 1\\), Horizontal: 2 units right, Vertical: 3 units down"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the horizontal constant from the variable. A common mistake is adding the value inside the parenthesis.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2) \\;\\Rightarrow\\; y = ((x - 2) - 3)^2 + 1\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by subtracting three, then we simplify the constants inside the parentheses and combine the numbers outside to find the new quadratic equation.",
        "workingOut": "\\(y = (x - 5)^2 + 1 - 3 \\;\\Rightarrow\\; y = (x - 5)^2 - 2\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq43",
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
    "question": "A cylindrical sensor boundary is represented by \\((x - 1)^2 + (y + 2)^2 = 4\\). If the machine is calibrated to translate the scan 2 units to the right and 3 units upward, find the new boundary equation.",
    "opts": [
      "\\((x - 3)^2 + (y - 1)^2 = 4\\)",
      "\\((x + 1)^2 + (y - 1)^2 = 4\\)",
      "\\((x - 3)^2 + (y + 5)^2 = 4\\)",
      "\\((x + 1)^2 + (y + 5)^2 = 4\\)"
    ],
    "options": [
      "\\((x - 3)^2 + (y - 1)^2 = 4\\)",
      "\\((x + 1)^2 + (y - 1)^2 = 4\\)",
      "\\((x - 3)^2 + (y + 5)^2 = 4\\)",
      "\\((x + 1)^2 + (y + 5)^2 = 4\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the circular boundary equation and the translation details. Both coordinates are translated to find the new scanner profile.",
        "workingOut": "Given: \\((x - 1)^2 + (y + 2)^2 = 4\\)"
      },
      {
        "explanation": "Next, we replace the coordinate variables with the translations. Shifting right subtracts from the horizontal variable, and shifting up subtracts from the vertical variable in vertex form. A common mistake is reversing these signs.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2)\\) and \\(y \\;\u2192\\; (y - 3)\\)"
      },
      {
        "explanation": "Finally, we substitute the translations back into the circle equation and simplify the integers inside both sets of parentheses to obtain the finished circular boundary.",
        "workingOut": "\\(((x - 2) - 1)^2 + ((y - 3) + 2)^2 = 4 \\;\\Rightarrow\\; (x - 3)^2 + (y - 1)^2 = 4\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq44",
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
    "question": "A logistics vehicle's route line is defined by \\(y = -3x + 2\\). Write the equation of the route after it is translated 4 units to the left.",
    "opts": [
      "\\(y = -3(x + 4) + 2\\)",
      "\\(y = -3(x - 4) + 2\\)",
      "\\(y = -3x - 10\\)",
      "\\(y = -3x + 14\\)"
    ],
    "options": [
      "\\(y = -3(x + 4) + 2\\)",
      "\\(y = -3(x - 4) + 2\\)",
      "\\(y = -3x - 10\\)",
      "\\(y = -3x + 14\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally left by four units. We identify the horizontal variable parameter.",
        "workingOut": "Given: \\(y = -3x + 2\\) and translation of 4 units left"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting to the left requires adding the constant to the variable argument. A common mistake is subtracting the constant inside the parenthesis.",
        "workingOut": "\\(x \\;\u2192\\; (x + 4) \\;\\Rightarrow\\; y = -3(x + 4) + 2\\)"
      },
      {
        "explanation": "Finally, we state the final transformed equation matching our options in its factored horizontal translation form.",
        "workingOut": "\\(y = -3(x + 4) + 2\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq45",
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
    "question": "A satellite trajectory profile is defined by \\(y = 3x^3 - 2\\). If the tracking model translates the curve 3 units to the right, write the new equation.",
    "opts": [
      "\\(y = 3(x - 3)^3 - 2\\)",
      "\\(y = 3(x + 3)^3 - 2\\)",
      "\\(y = 3x^3 - 11\\)",
      "\\(y = 3x^3 + 7\\)"
    ],
    "options": [
      "\\(y = 3(x - 3)^3 - 2\\)",
      "\\(y = 3(x + 3)^3 - 2\\)",
      "\\(y = 3x^3 - 11\\)",
      "\\(y = 3x^3 + 7\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the base cubic model. A horizontal translation affects the independent variable in the equation. We plan to perform a direct substitution.",
        "workingOut": "Given: \\(y = 3x^3 - 2\\) and translation: 3 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the constant from the variable. A common mistake is replacing the entire term without applying the exponent to the translation binomial.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3) \\;\\Rightarrow\\; y = 3(x - 3)^3 - 2\\)"
      },
      {
        "explanation": "Finally, we state the final cubic model equation in its factored horizontal translation form.",
        "workingOut": "\\(y = 3(x - 3)^3 - 2\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq46",
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
    "question": "A thermal fluid channel boundary follows the curve \\(y = \frac{6}{x}\\). If the channel is translated 3 units to the right and 1 unit downward, find the new boundary equation.",
    "opts": [
      "\\(y = \\frac{6}{x - 3} - 1\\)",
      "\\(y = \\frac{6}{x + 3} - 1\\)",
      "\\(y = \\frac{6}{x - 3} + 1\\)",
      "\\(y = \\frac{6}{x + 3} + 1\\)"
    ],
    "options": [
      "\\(y = \\frac{6}{x - 3} - 1\\)",
      "\\(y = \\frac{6}{x + 3} - 1\\)",
      "\\(y = \\frac{6}{x - 3} + 1\\)",
      "\\(y = \\frac{6}{x + 3} + 1\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the rational curve model and the required translation vector. Both horizontal and vertical coordinates are modified. We plan to perform these steps sequentially.",
        "workingOut": "Given: \\(y = \\frac{6}{x}\\), Horizontal: 3 units right, Vertical: 1 unit down"
      },
      {
        "explanation": "Next, we apply the horizontal shift by modifying the independent variable in the denominator. A common mistake is adding the constant inside the denominator instead of subtracting it when shifting right.",
        "workingOut": "\\(x \\;\u2192\\; x - 3 \\;\\Rightarrow\\; y = \\frac{6}{x - 3}\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by subtracting the constant from the entire rational term to obtain the final translated fluid channel equation.",
        "workingOut": "\\(y = \\frac{6}{x - 3} - 1\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq47",
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
    "question": "A robotics arm path is defined by \\(y = (x + 2)^2 - 3\\). Describe the translation required to map this path onto the new trajectory \\(y = (x - 3)^2 - 3\\).",
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
        "workingOut": "Initial: \\(y_1 = (x + 2)^2 - 3\\), Target: \\(y_2 = (x - 3)^2 - 3\\)"
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
    "id": "y11a-5-newq48",
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
    "question": "A suspension cable contour follows the curve \\(y = x^2 - 2x + 3\\). If the engineering model is translated 4 units vertically upward, find the new equation of the cable.",
    "opts": [
      "\\(y = x^2 - 2x + 7\\)",
      "\\(y = x^2 - 2x - 1\\)",
      "\\(y = (x - 4)^2 - 2x + 3\\)",
      "\\(y = x^2 - 2x + 12\\)"
    ],
    "options": [
      "\\(y = x^2 - 2x + 7\\)",
      "\\(y = x^2 - 2x - 1\\)",
      "\\(y = (x - 4)^2 - 2x + 3\\)",
      "\\(y = x^2 - 2x + 12\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic cable equation and identifying the translation direction. A vertical shift upwards requires modifying the entire output.",
        "workingOut": "Given: \\(y = x^2 - 2x + 3\\) and shift: +4 units vertically"
      },
      {
        "explanation": "Next, we perform the addition of the translation parameter directly to the constant term of the quadratic function. A common mistake is adding the parameter inside the linear terms.",
        "workingOut": "\\(y_{\\text{new}} = (x^2 - 2x + 3) + 4\\)"
      },
      {
        "explanation": "Finally, we combine the numerical constants to obtain the final simplified quadratic equation of the cable deflection path.",
        "workingOut": "\\(y = x^2 - 2x + 7\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq49",
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
    "question": "A conveyor track's trajectory is modeled by the cubic function \\(y = (x - 3)^3 + 4\\). If the track is translated 2 units to the right, find the new path equation.",
    "opts": [
      "\\(y = (x - 5)^3 + 4\\)",
      "\\(y = (x - 1)^3 + 4\\)",
      "\\(y = (x - 5)^3 + 6\\)",
      "\\(y = (x - 3)^3 + 6\\)"
    ],
    "options": [
      "\\(y = (x - 5)^3 + 4\\)",
      "\\(y = (x - 1)^3 + 4\\)",
      "\\(y = (x - 5)^3 + 6\\)",
      "\\(y = (x - 3)^3 + 6\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial cubic equation. The objective is to translate the path horizontally. We identify the horizontal parameter within the cubed expression.",
        "workingOut": "Given: \\(y = (x - 3)^3 + 4\\) and shift of 2 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the translation constant from the variable. A common mistake is performing addition.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2) \\;\\Rightarrow\\; y = ((x - 2) - 3)^3 + 4\\)"
      },
      {
        "explanation": "Finally, we simplify the terms within the cubed bracket to formulate our new conveyor track equation.",
        "workingOut": "\\(y = (x - 5)^3 + 4\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq50",
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
    "question": "A high-precision laser alignment line follows the model \\(y = 2x - 3\\). If the alignment is translated 4 units to the right and 2 units downward, find the new linear equation.",
    "opts": [
      "\\(y = 2x - 13\\)",
      "\\(y = 2x - 3\\)",
      "\\(y = 2(x - 4) - 3\\)",
      "\\(y = 2x - 9\\)"
    ],
    "options": [
      "\\(y = 2x - 13\\)",
      "\\(y = 2x - 3\\)",
      "\\(y = 2(x - 4) - 3\\)",
      "\\(y = 2x - 9\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally right by four units and vertically down by two units.",
        "workingOut": "Given: \\(y = 2x - 3\\)"
      },
      {
        "explanation": "Next, we substitute the horizontal translation into the independent variable and apply the vertical translation by subtraction. A common mistake is neglecting to apply both translations simultaneously.",
        "workingOut": "\\(x \\;\u2192\\; (x - 4)\\) and \\(y \\;\u2192\\; y - 2 \\;\\Rightarrow\\; y = 2(x - 4) - 3 - 2\\)"
      },
      {
        "explanation": "Finally, we expand the expression and combine the constant integers to simplify the equation to its standard slope-intercept form.",
        "workingOut": "\\(y = 2x - 8 - 5 \\;\\Rightarrow\\; y = 2x - 13\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq51",
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
    "question": "A digital imaging sensor maps pixel intensity along the curve \\(y = x^2 - 6x + 8\\). Find the vertex of this intensity model by completing the square.",
    "opts": [
      "\\((3, -1)\\)",
      "\\((-3, -1)\\)",
      "\\((3, 1)\\)",
      "\\((6, -1)\\)"
    ],
    "options": [
      "\\((3, -1)\\)",
      "\\((-3, -1)\\)",
      "\\((3, 1)\\)",
      "\\((6, -1)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the given quadratic equation representing pixel intensity. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 - 6x + 8\\)"
      },
      {
        "explanation": "Next, we halve the linear term coefficient, square it, and then add and subtract this value. This completes the perfect square trinomial. A common mistake is changing the signs during consolidation.",
        "workingOut": "\\(y = (x^2 - 6x + 9) - 9 + 8 \\;\\Rightarrow\\; y = (x - 3)^2 - 1\\)"
      },
      {
        "explanation": "Finally, we identify the turning point coordinates. Comparing this with the standard vertex form yields the horizontal and vertical vertex coordinates.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (3, -1)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq52",
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
    "question": "A mechanical link deflection is modeled by \\(y = x^2 + 8x + 19\\). Complete the square to determine the coordinate pair of its minimum point.",
    "opts": [
      "\\((-4, 3)\\)",
      "\\((4, 3)\\)",
      "\\((-4, -3)\\)",
      "\\((-8, 3)\\)"
    ],
    "options": [
      "\\((-4, 3)\\)",
      "\\((4, 3)\\)",
      "\\((-4, -3)\\)",
      "\\((-8, 3)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the mechanical link deflection equation to identify the turning point. We isolate the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 + 8x + 19\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and add and subtract this value to complete the square. A common mistake is failing to apply the correct sign inside the binomial squared expression.",
        "workingOut": "\\(y = (x^2 + 8x + 16) - 16 + 19 \\;\\Rightarrow\\; y = (x + 4)^2 + 3\\)"
      },
      {
        "explanation": "Finally, we extract the coordinates of the minimum turning point by comparing the equation with the standard vertex form.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-4, 3)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq53",
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
    "question": "A thermal expansion profile follows the parabola \\(y = x^2 - 14x + 55\\). Express the equation in vertex form to find the coordinates of the turning point.",
    "opts": [
      "\\((7, 6)\\)",
      "\\((-7, 6)\\)",
      "\\((7, -6)\\)",
      "\\((14, 6)\\)"
    ],
    "options": [
      "\\((7, 6)\\)",
      "\\((-7, 6)\\)",
      "\\((7, -6)\\)",
      "\\((14, 6)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the thermal expansion model equation. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 - 14x + 55\\)"
      },
      {
        "explanation": "We complete the square by adding and subtracting the square of half the linear coefficient. A common mistake is subtracting the squared value incorrectly from the constant term.",
        "workingOut": "\\(y = (x^2 - 14x + 49) - 49 + 55 \\;\\Rightarrow\\; y = (x - 7)^2 + 6\\)"
      },
      {
        "explanation": "Finally, we extract the turning point coordinates. Comparing this with the standard vertex form yields the coordinates.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (7, 6)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq54",
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
    "question": "A structural brace deflection profile is modeled by \\(y = x^2 + 12x + 32\\). Complete the square to determine the coordinate pair of its minimum point.",
    "opts": [
      "\\((-6, -4)\\)",
      "\\((6, -4)\\)",
      "\\((-6, 4)\\)",
      "\\((-12, -4)\\)"
    ],
    "options": [
      "\\((-6, -4)\\)",
      "\\((6, -4)\\)",
      "\\((-6, 4)\\)",
      "\\((-12, -4)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structural brace deflection equation to identify the turning point. We isolate the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 + 12x + 32\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and add and subtract this value to complete the square. A common mistake is failing to apply the correct sign inside the binomial squared expression.",
        "workingOut": "\\(y = (x^2 + 12x + 36) - 36 + 32 \\;\\Rightarrow\\; y = (x + 6)^2 - 4\\)"
      },
      {
        "explanation": "Finally, we extract the coordinates of the minimum turning point by comparing the equation with the standard vertex form.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-6, -4)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq55",
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
    "question": "An agricultural terrain gradient is modeled by the function \\(y = x^2 - 16x + 60\\). Complete the square to determine the coordinate pair of its minimum point.",
    "opts": [
      "\\((8, -4)\\)",
      "\\((-8, -4)\\)",
      "\\((8, 4)\\)",
      "\\((16, -4)\\)"
    ],
    "options": [
      "\\((8, -4)\\)",
      "\\((-8, -4)\\)",
      "\\((8, 4)\\)",
      "\\((16, -4)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the terrain gradient equation to identify the turning point. We isolate the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 - 16x + 60\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and add and subtract this value to complete the square. A common mistake is failing to apply the correct sign inside the binomial squared expression.",
        "workingOut": "\\(y = (x^2 - 16x + 64) - 64 + 60 \\;\\Rightarrow\\; y = (x - 8)^2 - 4\\)"
      },
      {
        "explanation": "Finally, we extract the coordinates of the minimum turning point by comparing the equation with the standard vertex form.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (8, -4)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  }
];

async function run() {
  console.log(`Adding 15 new questions (41 to 55)...`);
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
