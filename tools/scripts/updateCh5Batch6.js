import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// 15 new unique questions (y11a-5-newq56 to newq70) under topic 5A
const newQuestions = [
  {
    "id": "y11a-5-newq56",
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
    "question": "A digital intensity contour follows the curve \\(y = x^2 - 4x + 9\\). Find the coordinates of the turning point by completing the square.",
    "opts": [
      "\\((2, 5)\\)",
      "\\((-2, 5)\\)",
      "\\((2, -5)\\)",
      "\\((4, 5)\\)"
    ],
    "options": [
      "\\((2, 5)\\)",
      "\\((-2, 5)\\)",
      "\\((2, -5)\\)",
      "\\((4, 5)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the given quadratic equation. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 - 4x + 9\\)"
      },
      {
        "explanation": "Next, we halve the linear term coefficient, square it, and then add and subtract this value to complete the perfect square trinomial. A common mistake is changing the signs during consolidation.",
        "workingOut": "\\(y = (x^2 - 4x + 4) - 4 + 9 \\;\\Rightarrow\\; y = (x - 2)^2 + 5\\)"
      },
      {
        "explanation": "Finally, we identify the turning point coordinates. Comparing this with the standard vertex form yields the horizontal and vertical vertex coordinates.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (2, 5)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq57",
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
    "question": "A mechanical link deflection is modeled by \\(y = x^2 + 6x + 13\\). Complete the square to determine the coordinate pair of its minimum point.",
    "opts": [
      "\\((-3, 4)\\)",
      "\\((3, 4)\\)",
      "\\((-3, -4)\\)",
      "\\((-6, 4)\\)"
    ],
    "options": [
      "\\((-3, 4)\\)",
      "\\((3, 4)\\)",
      "\\((-3, -4)\\)",
      "\\((-6, 4)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the mechanical link deflection equation to identify the turning point. We isolate the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 + 6x + 13\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and add and subtract this value to complete the square. A common mistake is failing to apply the correct sign inside the binomial squared expression.",
        "workingOut": "\\(y = (x^2 + 6x + 9) - 9 + 13 \\;\\Rightarrow\\; y = (x + 3)^2 + 4\\)"
      },
      {
        "explanation": "Finally, we extract the coordinates of the minimum turning point by comparing the equation with the standard vertex form.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-3, 4)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq58",
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
    "question": "A thermal expansion profile follows the parabola \\(y = x^2 - 10x + 31\\). Express the equation in vertex form to find the coordinates of the turning point.",
    "opts": [
      "\\((5, 6)\\)",
      "\\((-5, 6)\\)",
      "\\((5, -6)\\)",
      "\\((10, 6)\\)"
    ],
    "options": [
      "\\((5, 6)\\)",
      "\\((-5, 6)\\)",
      "\\((5, -6)\\)",
      "\\((10, 6)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the thermal expansion model equation. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 - 10x + 31\\)"
      },
      {
        "explanation": "We complete the square by adding and subtracting the square of half the linear coefficient. A common mistake is subtracting the squared value incorrectly from the constant term.",
        "workingOut": "\\(y = (x^2 - 10x + 25) - 25 + 31 \\;\\Rightarrow\\; y = (x - 5)^2 + 6\\)"
      },
      {
        "explanation": "Finally, we extract the turning point coordinates. Comparing this with the standard vertex form yields the coordinates.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (5, 6)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq59",
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
    "question": "A structural brace deflection profile is modeled by \\(y = x^2 + 14x + 45\\). Complete the square to determine the coordinate pair of its minimum point.",
    "opts": [
      "\\((-7, -4)\\)",
      "\\((7, -4)\\)",
      "\\((-7, 4)\\)",
      "\\((-14, -4)\\)"
    ],
    "options": [
      "\\((-7, -4)\\)",
      "\\((7, -4)\\)",
      "\\((-7, 4)\\)",
      "\\((-14, -4)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structural brace deflection equation to identify the turning point. We isolate the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 + 14x + 45\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and add and subtract this value to complete the square. A common mistake is failing to apply the correct sign inside the binomial squared expression.",
        "workingOut": "\\(y = (x^2 + 14x + 49) - 49 + 45 \\;\\Rightarrow\\; y = (x + 7)^2 - 4\\)"
      },
      {
        "explanation": "Finally, we extract the coordinates of the minimum turning point by comparing the equation with the standard vertex form.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-7, -4)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq60",
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
    "question": "An agricultural terrain gradient is modeled by the function \\(y = x^2 - 12x + 32\\). Complete the square to determine the coordinate pair of its minimum point.",
    "opts": [
      "\\((6, -4)\\)",
      "\\((-6, -4)\\)",
      "\\((6, 4)\\)",
      "\\((12, -4)\\)"
    ],
    "options": [
      "\\((6, -4)\\)",
      "\\((-6, -4)\\)",
      "\\((6, 4)\\)",
      "\\((12, -4)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the terrain gradient equation to identify the turning point. We isolate the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 - 12x + 32\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and add and subtract this value to complete the square. A common mistake is failing to apply the correct sign inside the binomial squared expression.",
        "workingOut": "\\(y = (x^2 - 12x + 36) - 36 + 32 \\;\\Rightarrow\\; y = (x - 6)^2 - 4\\)"
      },
      {
        "explanation": "Finally, we extract the coordinates of the minimum turning point by comparing the equation with the standard vertex form.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (6, -4)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq61",
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
    "question": "A logistics routing path follows the line \\(y = -x + 3\\). Write the equation of the route after it is translated 3 units to the right.",
    "opts": [
      "\\(y = -x\\)",
      "\\(y = -x + 6\\)",
      "\\(y = -(x - 3) + 3\\)",
      "\\(y = -x - 3\\)"
    ],
    "options": [
      "\\(y = -x\\)",
      "\\(y = -x + 6\\)",
      "\\(y = -(x - 3) + 3\\)",
      "\\(y = -x - 3\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally right by three units.",
        "workingOut": "Given: \\(y = -x + 3\\) and translation: 3 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the translation constant from the variable. A common mistake is adding the constant inside the parenthesis.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3) \\;\\Rightarrow\\; y = -(x - 3) + 3\\)"
      },
      {
        "explanation": "Finally, we expand and simplify the terms to obtain the final slope-intercept equation of the shifted line.",
        "workingOut": "\\(y = -x + 3 + 3 \\;\\Rightarrow\\; y = -x\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq62",
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
    "question": "A satellite radar boundary is modeled by the equation \\((x - 1)^2 + (y + 3)^2 = 16\\). If the tracking center is translated 2 units to the left, write the new equation of the boundary.",
    "opts": [
      "\\((x + 1)^2 + (y + 3)^2 = 16\\)",
      "\\((x - 3)^2 + (y + 3)^2 = 16\\)",
      "\\((x - 1)^2 + (y + 5)^2 = 16\\)",
      "\\((x - 1)^2 + (y + 1)^2 = 16\\)"
    ],
    "options": [
      "\\((x + 1)^2 + (y + 3)^2 = 16\\)",
      "\\((x - 3)^2 + (y + 3)^2 = 16\\)",
      "\\((x - 1)^2 + (y + 5)^2 = 16\\)",
      "\\((x - 1)^2 + (y + 1)^2 = 16\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the circular boundary equation and the horizontal shift vector. Shifting horizontally affects the horizontal variable term inside the squared expression.",
        "workingOut": "Given: \\((x - 1)^2 + (y + 3)^2 = 16\\) and shift: 2 units left"
      },
      {
        "explanation": "Next, we apply the translation by substituting the translation variable. Shifting left requires adding the constant to the variable argument. A common mistake is subtracting the value.",
        "workingOut": "\\(x \\;\u2192\\; (x + 2) \\;\\Rightarrow\\; ((x + 2) - 1)^2 + (y + 3)^2 = 16\\)"
      },
      {
        "explanation": "Finally, we combine the integers inside the horizontal squared term to obtain the finished translated circular model.",
        "workingOut": "\\((x + 1)^2 + (y + 3)^2 = 16\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq63",
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
    "question": "A light beam vector in an optical scanner follows the line \\(y = -x + 4\\). If the scanning mirror translates the line 4 units to the left, find the new linear equation.",
    "opts": [
      "\\(y = -x\\)",
      "\\(y = -x + 8\\)",
      "\\(y = -(x + 4) + 4\\)",
      "\\(y = -x - 4\\)"
    ],
    "options": [
      "\\(y = -x\\)",
      "\\(y = -x + 8\\)",
      "\\(y = -(x + 4) + 4\\)",
      "\\(y = -x - 4\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally left by four units. We identify the horizontal variable parameter.",
        "workingOut": "Given: \\(y = -x + 4\\) and translation of 4 units left"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting to the left requires adding the constant to the variable argument. A common mistake is failing to distribute the negative sign to the added constant.",
        "workingOut": "\\(x \\;\u2192\\; (x + 4) \\;\\Rightarrow\\; y = -(x + 4) + 4\\)"
      },
      {
        "explanation": "Finally, we expand the negative sign and simplify the constants to obtain the final slope-intercept equation of the shifted line.",
        "workingOut": "\\(y = -x - 4 + 4 \\;\\Rightarrow\\; y = -x\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq64",
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
    "question": "A meteorological balloon's trajectory profile is defined by \\(y = x^3 + 2x\\). If the balloon moves such that the profile translates 1 unit to the right, write the new trajectory equation.",
    "opts": [
      "\\(y = (x - 1)^3 + 2(x - 1)\\)",
      "\\(y = (x + 1)^3 + 2(x + 1)\\)",
      "\\(y = x^3 + 2x - 1\\)",
      "\\(y = x^3 + 2x + 1\\)"
    ],
    "options": [
      "\\(y = (x - 1)^3 + 2(x - 1)\\)",
      "\\(y = (x + 1)^3 + 2(x + 1)\\)",
      "\\(y = x^3 + 2x - 1\\)",
      "\\(y = x^3 + 2x + 1\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the base cubic model. A horizontal translation affects all instances of the independent variable in the equation. We plan to perform a direct substitution.",
        "workingOut": "Given: \\(y = x^3 + 2x\\) and translation: 1 unit right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the constant from the variable. A common mistake is replacing only the first variable term and leaving the linear term unmodified.",
        "workingOut": "\\(x \\;\u2192\\; (x - 1) \\;\\Rightarrow\\; y = (x - 1)^3 + 2(x - 1)\\)"
      },
      {
        "explanation": "Finally, we state the final cubic model equation in its factored horizontal translation form.",
        "workingOut": "\\(y = (x - 1)^3 + 2(x - 1)\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq65",
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
    "question": "A shipping port boundary follows the curve \\(y = \\frac{3}{x}\\). If the port map translates the boundary 2 units to the right and 1 unit downward, find the new boundary equation.",
    "opts": [
      "\\(y = \\frac{3}{x - 2} - 1\\)",
      "\\(y = \\frac{3}{x + 2} - 1\\)",
      "\\(y = \\frac{3}{x - 2} + 1\\)",
      "\\(y = \\frac{3}{x + 2} + 1\\)"
    ],
    "options": [
      "\\(y = \\frac{3}{x - 2} - 1\\)",
      "\\(y = \\frac{3}{x + 2} - 1\\)",
      "\\(y = \\frac{3}{x - 2} + 1\\)",
      "\\(y = \\frac{3}{x + 2} + 1\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the rational curve model and the required translation vector. Both horizontal and vertical coordinates are modified. We plan to perform these steps sequentially.",
        "workingOut": "Given: \\(y = \\frac{3}{x}\\), Horizontal: 2 units right, Vertical: 1 unit down"
      },
      {
        "explanation": "Next, we apply the horizontal shift by modifying the independent variable in the denominator. A common mistake is adding the constant inside the denominator instead of subtracting it when shifting right.",
        "workingOut": "\\(x \\;\u2192\\; x - 2 \\;\\Rightarrow\\; y = \\frac{3}{x - 2}\\)"
      },
      {
        "explanation": "Finally, we apply the vertical shift by subtracting the constant from the entire rational term to obtain the final translated shipping port model.",
        "workingOut": "\\(y = \\frac{3}{x - 2} - 1\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq66",
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
    "question": "A drone path is defined by \\(y = (x + 3)^2\\). Describe the translation required to map this path onto the new trajectory \\(y = (x - 2)^2\\).",
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
        "workingOut": "Initial: \\(y_1 = (x + 3)^2\\), Target: \\(y_2 = (x - 2)^2\\)"
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
    "id": "y11a-5-newq67",
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
    "question": "A suspension cable contour follows the curve \\(y = x^2 - 4x + 5\\). If the engineering model is translated 1 unit vertically upward, find the new equation of the cable.",
    "opts": [
      "\\(y = x^2 - 4x + 6\\)",
      "\\(y = x^2 - 4x + 4\\)",
      "\\(y = (x - 1)^2 - 4x + 5\\)",
      "\\(y = x^2 - 4x + 10\\)"
    ],
    "options": [
      "\\(y = x^2 - 4x + 6\\)",
      "\\(y = x^2 - 4x + 4\\)",
      "\\(y = (x - 1)^2 - 4x + 5\\)",
      "\\(y = x^2 - 4x + 10\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial quadratic cable equation and identifying the translation direction. A vertical shift upwards requires modifying the entire output.",
        "workingOut": "Given: \\(y = x^2 - 4x + 5\\) and shift: +1 unit vertically"
      },
      {
        "explanation": "Next, we perform the addition of the translation parameter directly to the constant term of the quadratic function. A common mistake is adding the parameter inside the linear terms.",
        "workingOut": "\\(y_{\\text{new}} = (x^2 - 4x + 5) + 1\\)"
      },
      {
        "explanation": "Finally, we combine the numerical constants to obtain the final simplified quadratic equation of the cable deflection path.",
        "workingOut": "\\(y = x^2 - 4x + 6\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq68",
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
    "question": "A conveyor track's trajectory is modeled by the cubic function \\(y = (x - 1)^3 + 3\\). If the track is translated 3 units to the right, find the new path equation.",
    "opts": [
      "\\(y = (x - 4)^3 + 3\\)",
      "\\(y = (x + 2)^3 + 3\\)",
      "\\(y = (x - 4)^3 + 6\\)",
      "\\(y = (x - 1)^3 + 6\\)"
    ],
    "options": [
      "\\(y = (x - 4)^3 + 3\\)",
      "\\(y = (x + 2)^3 + 3\\)",
      "\\(y = (x - 4)^3 + 6\\)",
      "\\(y = (x - 1)^3 + 6\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial cubic equation. The objective is to translate the path horizontally. We identify the horizontal parameter within the cubed expression.",
        "workingOut": "Given: \\(y = (x - 1)^3 + 3\\) and shift of 3 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the translation constant from the variable. A common mistake is performing addition.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3) \\;\\Rightarrow\\; y = ((x - 3) - 1)^3 + 3\\)"
      },
      {
        "explanation": "Finally, we simplify the terms within the cubed bracket to formulate our new conveyor track equation.",
        "workingOut": "\\(y = (x - 4)^3 + 3\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq69",
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
    "question": "A high-precision laser alignment line follows the model \\(y = 4x - 5\\). If the alignment is translated 2 units to the right and 3 units downward, find the new linear equation.",
    "opts": [
      "\\(y = 4x - 16\\)",
      "\\(y = 4x - 6\\)",
      "\\(y = 4(x - 2) - 5\\)",
      "\\(y = 4x - 10\\)"
    ],
    "options": [
      "\\(y = 4x - 16\\)",
      "\\(y = 4x - 6\\)",
      "\\(y = 4(x - 2) - 5\\)",
      "\\(y = 4x - 10\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial line equation. The goal is to determine the equation after shifting the line horizontally right by two units and vertically down by three units.",
        "workingOut": "Given: \\(y = 4x - 5\\)"
      },
      {
        "explanation": "Next, we substitute the horizontal translation into the independent variable and apply the vertical translation by subtraction. A common mistake is neglecting to apply both translations simultaneously.",
        "workingOut": "\\(x \\;\u2192\\; (x - 2)\\) and \\(y \\;\u2192\\; y - 3 \\;\\Rightarrow\\; y = 4(x - 2) - 5 - 3\\)"
      },
      {
        "explanation": "Finally, we expand the expression and combine the constant integers to simplify the equation to its standard slope-intercept form.",
        "workingOut": "\\(y = 4x - 8 - 8 \\;\\Rightarrow\\; y = 4x - 16\\)"
      }
    ],
    "isNew": true,
    "graphData": null
  },
  {
    "id": "y11a-5-newq70",
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
    "question": "A cryptographic curve modeled by \\(y = (x + 2)^3\\) is translated 4 units to the right. Express the transformed curve equation.",
    "opts": [
      "\\(y = (x - 2)^3\\)",
      "\\(y = (x + 6)^3\\)",
      "\\(y = (x + 2)^3 + 4\\)",
      "\\(y = (x + 2)^3 - 4\\)"
    ],
    "options": [
      "\\(y = (x - 2)^3\\)",
      "\\(y = (x + 6)^3\\)",
      "\\(y = (x + 2)^3 + 4\\)",
      "\\(y = (x + 2)^3 - 4\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by analyzing the base cubic function and the translation vector. Shifting right directly affects the input variable within the parenthetical cube.",
        "workingOut": "Given: \\(y = (x + 2)^3\\) and shift of 4 units right"
      },
      {
        "explanation": "Next, we perform the horizontal variable substitution. Translating to the right requires subtracting the shift parameter from the variable. A common mistake is adding the value.",
        "workingOut": "\\(x \\;\u2192\\; (x - 4) \\;\\Rightarrow\\; y = ((x - 4) + 2)^3\\)"
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
  console.log(`Adding 15 new questions (56 to 70)...`);
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
