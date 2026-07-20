import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// We will map all 33 remaining y11a-5A-new- questions to MCQ in a single script run.
const updates = {
  "y11a-5A-new-11a": {
    "type": "multiple_choice",
    "question": "A parabola opening upwards has its vertex at \\((4, 0)\\) and its shape matches \\(y = x^2\\). Write down its equation.",
    "opts": ["\\(y = (x - 4)^2\\)", "\\(y = (x + 4)^2\\)", "\\(y = x^2 - 4\\)", "\\(y = x^2 + 4\\)"],
    "options": ["\\(y = (x - 4)^2\\)", "\\(y = (x + 4)^2\\)", "\\(y = x^2 - 4\\)", "\\(y = x^2 + 4\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the general vertex form of a quadratic equation. The coordinates of the vertex represent the horizontal and vertical translations of the basic function.",
        "workingOut": "Standard form: \\(y = a(x - h)^2 + k\\)"
      },
      {
        "explanation": "Next, we substitute the given parameters into the vertex form. Since the shape matches the basic parabola, the scaling factor is equal to one. The vertex coordinate values are substituted directly. A common mistake is using incorrect signs.",
        "workingOut": "Given: \\(a = 1\\), Vertex: \\((h, k) = (4, 0) \\;\\Rightarrow\\; y = 1(x - 4)^2 + 0\\)"
      },
      {
        "explanation": "Finally, we simplify the equation by omitting the zero constant term to write the completed parabolic model equation.",
        "workingOut": "\\(y = (x - 4)^2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-11c": {
    "type": "multiple_choice",
    "question": "A parabola opening upwards has its vertex at \\((3, -2)\\) and its shape matches \\(y = x^2\\). Write down its equation.",
    "opts": ["\\(y = (x - 3)^2 - 2\\)", "\\(y = (x + 3)^2 - 2\\)", "\\(y = (x - 3)^2 + 2\\)", "\\(y = (x + 3)^2 + 2\\)"],
    "options": ["\\(y = (x - 3)^2 - 2\\)", "\\(y = (x + 3)^2 - 2\\)", "\\(y = (x - 3)^2 + 2\\)", "\\(y = (x + 3)^2 + 2\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the general vertex form of a quadratic equation. The coordinates of the vertex represent the horizontal and vertical translations of the basic function.",
        "workingOut": "Standard form: \\(y = a(x - h)^2 + k\\)"
      },
      {
        "explanation": "Next, we substitute the given parameters into the vertex form. Since the shape matches the basic parabola, the scaling factor is equal to one. The vertex coordinate values are substituted directly. A common mistake is using incorrect signs.",
        "workingOut": "Given: \\(a = 1\\), Vertex: \\((h, k) = (3, -2) \\;\\Rightarrow\\; y = 1(x - 3)^2 + (-2)\\)"
      },
      {
        "explanation": "Finally, we simplify the equation by resolving the signs to write the completed parabolic model equation.",
        "workingOut": "\\(y = (x - 3)^2 - 2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-13a": {
    "type": "multiple_choice",
    "question": "A circle has its centre at \\((3, 4)\\) and a radius of \\(2\\). Write down its standard equation.",
    "opts": [
      "\\((x - 3)^2 + (y - 4)^2 = 4\\)",
      "\\((x - 3)^2 + (y - 4)^2 = 2\\)",
      "\\((x + 3)^2 + (y + 4)^2 = 4\\)",
      "\\((x - 3)^2 - (y - 4)^2 = 4\\)"
    ],
    "options": [
      "\\((x - 3)^2 + (y - 4)^2 = 4\\)",
      "\\((x - 3)^2 + (y - 4)^2 = 2\\)",
      "\\((x + 3)^2 + (y + 4)^2 = 4\\)",
      "\\((x - 3)^2 - (y - 4)^2 = 4\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the standard equation form for a circle in a Cartesian plane. The equation is represented by the squared coordinates translated by the center coordinates, equating to the squared radius.",
        "workingOut": "Standard form: \\((x - h)^2 + (y - k)^2 = r^2\\)"
      },
      {
        "explanation": "Next, we substitute the center coordinates and the radius value into our standard equation form. A common mistake is writing the radius value directly on the right side instead of squaring it.",
        "workingOut": "Given: Center \\((h, k) = (3, 4)\\) and radius \\(r = 2 \\;\\Rightarrow\\; (x - 3)^2 + (y - 4)^2 = 2^2\\)"
      },
      {
        "explanation": "Finally, we evaluate the squared term on the right side of the equation to write the completed standard circular boundary equation.",
        "workingOut": "\\((x - 3)^2 + (y - 4)^2 = 4\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-13b": {
    "type": "multiple_choice",
    "question": "A circle has its centre at \\((-5, -2)\\) and a radius of \\(6\\). Write down its standard equation.",
    "opts": [
      "\\((x + 5)^2 + (y + 2)^2 = 36\\)",
      "\\((x - 5)^2 + (y - 2)^2 = 36\\)",
      "\\((x + 5)^2 + (y + 2)^2 = 6\\)",
      "\\((x + 5)^2 - (y + 2)^2 = 36\\)"
    ],
    "options": [
      "\\((x + 5)^2 + (y + 2)^2 = 36\\)",
      "\\((x - 5)^2 + (y - 2)^2 = 36\\)",
      "\\((x + 5)^2 + (y + 2)^2 = 6\\)",
      "\\((x + 5)^2 - (y + 2)^2 = 36\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the standard equation form for a circle in a Cartesian plane. The equation is represented by the squared coordinates translated by the center coordinates, equating to the squared radius.",
        "workingOut": "Standard form: \\((x - h)^2 + (y - k)^2 = r^2\\)"
      },
      {
        "explanation": "Next, we substitute the center coordinates and the radius value into our standard equation form. A common mistake is writing the radius value directly on the right side instead of squaring it, or using incorrect signs for negative center coordinates.",
        "workingOut": "Given: Center \\((h, k) = (-5, -2)\\) and radius \\(r = 6 \\;\\Rightarrow\\; (x - (-5))^2 + (y - (-2))^2 = 6^2\\)"
      },
      {
        "explanation": "Finally, we evaluate the squared term on the right side and simplify signs on the left to write the completed standard circular boundary equation.",
        "workingOut": "\\((x + 5)^2 + (y + 2)^2 = 36\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-13c": {
    "type": "multiple_choice",
    "question": "A circle has its centre at \\((-3, 1)\\) and a radius of \\(7\\). Write down its standard equation.",
    "opts": [
      "\\((x + 3)^2 + (y - 1)^2 = 49\\)",
      "\\((x - 3)^2 + (y + 1)^2 = 49\\)",
      "\\((x + 3)^2 + (y - 1)^2 = 7\\)",
      "\\((x + 3)^2 - (y - 1)^2 = 49\\)"
    ],
    "options": [
      "\\((x + 3)^2 + (y - 1)^2 = 49\\)",
      "\\((x - 3)^2 + (y + 1)^2 = 49\\)",
      "\\((x + 3)^2 + (y - 1)^2 = 7\\)",
      "\\((x + 3)^2 - (y - 1)^2 = 49\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the standard equation form for a circle in a Cartesian plane. The equation is represented by the squared coordinates translated by the center coordinates, equating to the squared radius.",
        "workingOut": "Standard form: \\((x - h)^2 + (y - k)^2 = r^2\\)"
      },
      {
        "explanation": "Next, we substitute the center coordinates and the radius value into our standard equation form. A common mistake is writing the radius value directly on the right side instead of squaring it, or using incorrect signs for negative center coordinates.",
        "workingOut": "Given: Center \\((h, k) = (-3, 1)\\) and radius \\(r = 7 \\;\\Rightarrow\\; (x - (-3))^2 + (y - 1)^2 = 7^2\\)"
      },
      {
        "explanation": "Finally, we evaluate the squared term on the right side and simplify signs on the left to write the completed standard circular boundary equation.",
        "workingOut": "\\((x + 3)^2 + (y - 1)^2 = 49\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-13d": {
    "type": "multiple_choice",
    "question": "A circle has its centre at \\((6, -5)\\) and a radius of \\(9\\). Write down its standard equation.",
    "opts": [
      "\\((x - 6)^2 + (y + 5)^2 = 81\\)",
      "\\((x + 6)^2 + (y - 5)^2 = 81\\)",
      "\\((x - 6)^2 + (y + 5)^2 = 9\\)",
      "\\((x - 6)^2 - (y + 5)^2 = 81\\)"
    ],
    "options": [
      "\\((x - 6)^2 + (y + 5)^2 = 81\\)",
      "\\((x + 6)^2 + (y - 5)^2 = 81\\)",
      "\\((x - 6)^2 + (y + 5)^2 = 9\\)",
      "\\((x - 6)^2 - (y + 5)^2 = 81\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the standard equation form for a circle in a Cartesian plane. The equation is represented by the squared coordinates translated by the center coordinates, equating to the squared radius.",
        "workingOut": "Standard form: \\((x - h)^2 + (y - k)^2 = r^2\\)"
      },
      {
        "explanation": "Next, we substitute the center coordinates and the radius value into our standard equation form. A common mistake is writing the radius value directly on the right side instead of squaring it, or using incorrect signs for negative center coordinates.",
        "workingOut": "Given: Center \\((h, k) = (6, -5)\\) and radius \\(r = 9 \\;\\Rightarrow\\; (x - 6)^2 + (y - (-5))^2 = 9^2\\)"
      },
      {
        "explanation": "Finally, we evaluate the squared term on the right side and simplify signs on the left to write the completed standard circular boundary equation.",
        "workingOut": "\\((x - 6)^2 + (y + 5)^2 = 81\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-5a": {
    "type": "multiple_choice",
    "question": "Identify the key features of the parabola \\(y = x^2 + 5\\), including its turning point and intercepts.",
    "opts": [
      "Turning point at \\((0, 5)\\), y-intercept at \\((0, 5)\\), no x-intercepts",
      "Turning point at \\((0, -5)\\), y-intercept at \\((0, -5)\\), no x-intercepts",
      "Turning point at \\((5, 0)\\), y-intercept at \\((0, 5)\\), x-intercept at \\((5, 0)\\)",
      "Turning point at \\((0, 5)\\), y-intercept at \\((0, 5)\\), x-intercepts at \\((\\pm 5, 0)\\)"
    ],
    "options": [
      "Turning point at \\((0, 5)\\), y-intercept at \\((0, 5)\\), no x-intercepts",
      "Turning point at \\((0, -5)\\), y-intercept at \\((0, -5)\\), no x-intercepts",
      "Turning point at \\((5, 0)\\), y-intercept at \\((0, 5)\\), x-intercept at \\((5, 0)\\)",
      "Turning point at \\((0, 5)\\), y-intercept at \\((0, 5)\\), x-intercepts at \\((\\pm 5, 0)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structure of the quadratic function. The equation represents a basic parabola with a vertical translation. We plan to extract the vertex coordinates directly.",
        "workingOut": "Given: \\(y = x^2 + 5\\)"
      },
      {
        "explanation": "Next, we find the vertical axis intercept by evaluating the function where the horizontal coordinate is zero. A common mistake is assuming the y-intercept is always at the origin.",
        "workingOut": "Set \\(x = 0 \\;\u2192\\; y = 0^2 + 5 = 5 \\;\u2192\\; \\text{y-intercept: } (0, 5)\\)"
      },
      {
        "explanation": "Finally, we analyze the x-intercepts by setting the function value to zero. Since squaring a real number cannot yield a negative output, we determine there are no real roots, meaning no intersection with the horizontal axis.",
        "workingOut": "Set \\(y = 0 \\;\u2192\\; x^2 + 5 = 0 \\;\u2192\\; x^2 = -5 \\;\u2192\\; \\text{No real solutions}\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-5c": {
    "type": "multiple_choice",
    "question": "Identify the key features of the parabola \\(y = (x - 3)^2\\), including its turning point and intercepts.",
    "opts": [
      "Turning point at \\((3, 0)\\), y-intercept at \\((0, 9)\\), x-intercept at \\((3, 0)\\)",
      "Turning point at \\((-3, 0)\\), y-intercept at \\((0, 9)\\), x-intercept at \\((-3, 0)\\)",
      "Turning point at \\((3, 0)\\), y-intercept at \\((0, 3)\\), x-intercept at \\((3, 0)\\)",
      "Turning point at \\((0, 9)\\), y-intercept at \\((0, 9)\\), x-intercepts at \\((3, 0)\\)"
    ],
    "options": [
      "Turning point at \\((3, 0)\\), y-intercept at \\((0, 9)\\), x-intercept at \\((3, 0)\\)",
      "Turning point at \\((-3, 0)\\), y-intercept at \\((0, 9)\\), x-intercept at \\((-3, 0)\\)",
      "Turning point at \\((3, 0)\\), y-intercept at \\((0, 3)\\), x-intercept at \\((3, 0)\\)",
      "Turning point at \\((0, 9)\\), y-intercept at \\((0, 9)\\), x-intercepts at \\((3, 0)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structure of the quadratic function in vertex form. The equation represents a basic parabola shifted horizontally. We plan to extract the vertex coordinates directly.",
        "workingOut": "Given: \\(y = (x - 3)^2\\)"
      },
      {
        "explanation": "Next, we find the vertical axis intercept by evaluating the function where the horizontal coordinate is zero. A common mistake is squaring the translation parameter without maintaining its positive sign.",
        "workingOut": "Set \\(x = 0 \\;\u2192\\; y = (0 - 3)^2 = 9 \\;\u2192\\; \\text{y-intercept: } (0, 9)\\)"
      },
      {
        "explanation": "Finally, we find the horizontal axis intercept by setting the function value to zero. This identifies the intersection points on the horizontal axis.",
        "workingOut": "Set \\(y = 0 \\;\u2192\\; (x - 3)^2 = 0 \\;\u2192\\; x = 3 \\;\u2192\\; \\text{x-intercept: } (3, 0)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-5d": {
    "type": "multiple_choice",
    "question": "Identify the key features of the parabola \\(y = (x + 2)^2\\), including its turning point and intercepts.",
    "opts": [
      "Turning point at \\((-2, 0)\\), y-intercept at \\((0, 4)\\), x-intercept at \\((-2, 0)\\)",
      "Turning point at \\((2, 0)\\), y-intercept at \\((0, 4)\\), x-intercept at \\((2, 0)\\)",
      "Turning point at \\((-2, 0)\\), y-intercept at \\((0, 2)\\), x-intercept at \\((-2, 0)\\)",
      "Turning point at \\((0, 4)\\), y-intercept at \\((0, 4)\\), x-intercepts at \\((-2, 0)\\)"
    ],
    "options": [
      "Turning point at \\((-2, 0)\\), y-intercept at \\((0, 4)\\), x-intercept at \\((-2, 0)\\)",
      "Turning point at \\((2, 0)\\), y-intercept at \\((0, 4)\\), x-intercept at \\((2, 0)\\)",
      "Turning point at \\((-2, 0)\\), y-intercept at \\((0, 2)\\), x-intercept at \\((-2, 0)\\)",
      "Turning point at \\((0, 4)\\), y-intercept at \\((0, 4)\\), x-intercepts at \\((-2, 0)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structure of the quadratic function in vertex form. The equation represents a basic parabola shifted horizontally. We plan to extract the vertex coordinates directly.",
        "workingOut": "Given: \\(y = (x + 2)^2\\)"
      },
      {
        "explanation": "Next, we find the vertical axis intercept by evaluating the function where the horizontal coordinate is zero. A common mistake is squaring the translation parameter without maintaining its positive sign.",
        "workingOut": "Set \\(x = 0 \\;\u2192\\; y = (0 + 2)^2 = 4 \\;\u2192\\; \\text{y-intercept: } (0, 4)\\)"
      },
      {
        "explanation": "Finally, we find the horizontal axis intercept by setting the function value to zero. This identifies the intersection points on the horizontal axis.",
        "workingOut": "Set \\(y = 0 \\;\u2192\\; (x + 2)^2 = 0 \\;\u2192\\; x = -2 \\;\u2192\\; \\text{x-intercept: } (-2, 0)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-7a": {
    "type": "multiple_choice",
    "question": "Find the key features of the circle \\((x - 4)^2 + y^2 = 16\\), including its centre, radius, and all intercepts with the axes.",
    "opts": [
      "Centre \\((4, 0)\\), radius \\(4\\), intercepts at \\((0,0)\\) and \\((8,0)\\)",
      "Centre \\((-4, 0)\\), radius \\(4\\), intercepts at \\((0,0)\\) and \\((-8,0)\\)",
      "Centre \\((4, 0)\\), radius \\(16\\), intercepts at \\((0,0)\\) and \\((8,0)\\)",
      "Centre \\((0, 4)\\), radius \\(4\\), intercepts at \\((0,0)\\) and \\((0,8)\\)"
    ],
    "options": [
      "Centre \\((4, 0)\\), radius \\(4\\), intercepts at \\((0,0)\\) and \\((8,0)\\)",
      "Centre \\((-4, 0)\\), radius \\(4\\), intercepts at \\((0,0)\\) and \\((-8,0)\\)",
      "Centre \\((4, 0)\\), radius \\(16\\), intercepts at \\((0,0)\\) and \\((8,0)\\)",
      "Centre \\((0, 4)\\), radius \\(4\\), intercepts at \\((0,0)\\) and \\((0,8)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the center and radius of the circle using the standard circle equation form. The constant on the right is the squared radius.",
        "workingOut": "Given: \\((x - 4)^2 + y^2 = 16 \\;\u2192\\; \\text{Centre: } (4, 0), \\; \\text{Radius: } r = \\sqrt{16} = 4\\)"
      },
      {
        "explanation": "Next, we find the vertical axis intercepts by setting the horizontal coordinate value to zero and solving for the vertical coordinate. A common mistake is neglecting the double sign when taking square roots.",
        "workingOut": "Set \\(x = 0 \\;\u2192\\; (0-4)^2 + y^2 = 16 \\;\u2192\\; 16 + y^2 = 16 \\;\u2192\\; y^2 = 0 \\;\u2192\\; y = 0 \\;\u2192\\; (0,0)\\)"
      },
      {
        "explanation": "Finally, we find the horizontal axis intercepts by setting the vertical coordinate to zero and solving for the horizontal coordinate.",
        "workingOut": "Set \\(y = 0 \\;\u2192\\; (x-4)^2 = 16 \\;\u2192\\; x-4 = \\pm 4 \\;\u2192\\; x = 0 \\text{ or } 8 \\;\u2192\\; (0,0), (8,0)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-7b": {
    "type": "multiple_choice",
    "question": "Find the key features of the circle \\(x^2 + (y - 3)^2 = 9\\), including its centre, radius, and all intercepts with the axes.",
    "opts": [
      "Centre \\((0, 3)\\), radius \\(3\\), intercepts at \\((0,0)\\) and \\((0,6)\\)",
      "Centre \\((0, -3)\\), radius \\(3\\), intercepts at \\((0,0)\\) and \\((0,-6)\\)",
      "Centre \\((3, 0)\\), radius \\(3\\), intercepts at \\((0,0)\\) and \\((6,0)\\)",
      "Centre \\((0, 3)\\), radius \\(9\\), intercepts at \\((0,0)\\) and \\((0,6)\\)"
    ],
    "options": [
      "Centre \\((0, 3)\\), radius \\(3\\), intercepts at \\((0,0)\\) and \\((0,6)\\)",
      "Centre \\((0, -3)\\), radius \\(3\\), intercepts at \\((0,0)\\) and \\((0,-6)\\)",
      "Centre \\((3, 0)\\), radius \\(3\\), intercepts at \\((0,0)\\) and \\((6,0)\\)",
      "Centre \\((0, 3)\\), radius \\(9\\), intercepts at \\((0,0)\\) and \\((0,6)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the center and radius of the circle using the standard circle equation form. The constant on the right is the squared radius.",
        "workingOut": "Given: \\(x^2 + (y - 3)^2 = 9 \\;\u2192\\; \\text{Centre: } (0, 3), \\; \\text{Radius: } r = \\sqrt{9} = 3\\)"
      },
      {
        "explanation": "Next, we find the horizontal axis intercepts by setting the vertical coordinate value to zero and solving for the horizontal coordinate. A common mistake is neglecting the double sign when taking square roots.",
        "workingOut": "Set \\(y = 0 \\;\u2192\\; x^2 + (0-3)^2 = 9 \\;\u2192\\; x^2 + 9 = 9 \\;\u2192\\; x^2 = 0 \\;\u2192\\; x = 0 \\;\u2192\\; (0,0)\\)"
      },
      {
        "explanation": "Finally, we find the vertical axis intercepts by setting the horizontal coordinate to zero and solving for the vertical coordinate.",
        "workingOut": "Set \\(x = 0 \\;\u2192\\; (y-3)^2 = 9 \\;\u2192\\; y-3 = \\pm 3 \\;\u2192\\; y = 0 \\text{ or } 6 \\;\u2192\\; (0,0), (0,6)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-7c": {
    "type": "multiple_choice",
    "question": "Find the key features of the circle \\(x^2 + (y + 5)^2 = 25\\), including its centre, radius, and all intercepts with the axes.",
    "opts": [
      "Centre \\((0, -5)\\), radius \\(5\\), intercepts at \\((0,0)\\) and \\((0,-10)\\)",
      "Centre \\((0, 5)\\), radius \\(5\\), intercepts at \\((0,0)\\) and \\((0,10)\\)",
      "Centre \\((-5, 0)\\), radius \\(5\\), intercepts at \\((0,0)\\) and \\((-10,0)\\)",
      "Centre \\((0, -5)\\), radius \\(25\\), intercepts at \\((0,0)\\) and \\((0,-10)\\)"
    ],
    "options": [
      "Centre \\((0, -5)\\), radius \\(5\\), intercepts at \\((0,0)\\) and \\((0,-10)\\)",
      "Centre \\((0, 5)\\), radius \\(5\\), intercepts at \\((0,0)\\) and \\((0,10)\\)",
      "Centre \\((-5, 0)\\), radius \\(5\\), intercepts at \\((0,0)\\) and \\((-10,0)\\)",
      "Centre \\((0, -5)\\), radius \\(25\\), intercepts at \\((0,0)\\) and \\((0,-10)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the center and radius of the circle using the standard circle equation form. The constant on the right is the squared radius.",
        "workingOut": "Given: \\(x^2 + (y + 5)^2 = 25 \\;\u2192\\; \\text{Centre: } (0, -5), \\; \\text{Radius: } r = \\sqrt{25} = 5\\)"
      },
      {
        "explanation": "Next, we find the horizontal axis intercepts by setting the vertical coordinate value to zero and solving for the horizontal coordinate. A common mistake is neglecting the double sign when taking square roots.",
        "workingOut": "Set \\(y = 0 \\;\u2192\\; x^2 + (0+5)^2 = 25 \\;\u2192\\; x^2 + 25 = 25 \\;\u2192\\; x^2 = 0 \\;\u2192\\; x = 0 \\;\u2192\\; (0,0)\\)"
      },
      {
        "explanation": "Finally, we find the vertical axis intercepts by setting the horizontal coordinate to zero and solving for the vertical coordinate.",
        "workingOut": "Set \\(x = 0 \\;\u2192\\; (y+5)^2 = 25 \\;\u2192\\; y+5 = \\pm 5 \\;\u2192\\; y = 0 \\text{ or } -10 \\;\u2192\\; (0,0), (0,-10)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-7d": {
    "type": "multiple_choice",
    "question": "Find the key features of the circle \\((x + 2)^2 + y^2 = 4\\), including its centre, radius, and all intercepts with the axes.",
    "opts": [
      "Centre \\((-2, 0)\\), radius \\(2\\), intercepts at \\((0,0)\\) and \\((-4,0)\\)",
      "Centre \\((2, 0)\\), radius \\(2\\), intercepts at \\((0,0)\\) and \\((4,0)\\)",
      "Centre \\((-2, 0)\\), radius \\(4\\), intercepts at \\((0,0)\\) and \\((-4,0)\\)",
      "Centre \\((0, -2)\\), radius \\(2\\), intercepts at \\((0,0)\\) and \\((0,-4)\\)"
    ],
    "options": [
      "Centre \\((-2, 0)\\), radius \\(2\\), intercepts at \\((0,0)\\) and \\((-4,0)\\)",
      "Centre \\((2, 0)\\), radius \\(2\\), intercepts at \\((0,0)\\) and \\((4,0)\\)",
      "Centre \\((-2, 0)\\), radius \\(4\\), intercepts at \\((0,0)\\) and \\((-4,0)\\)",
      "Centre \\((0, -2)\\), radius \\(2\\), intercepts at \\((0,0)\\) and \\((0,-4)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the center and radius of the circle using the standard circle equation form. The constant on the right is the squared radius.",
        "workingOut": "Given: \\((x + 2)^2 + y^2 = 4 \\;\u2192\\; \\text{Centre: } (-2, 0), \\; \\text{Radius: } r = \\sqrt{4} = 2\\)"
      },
      {
        "explanation": "Next, we find the vertical axis intercepts by setting the horizontal coordinate value to zero and solving for the vertical coordinate. A common mistake is neglecting the double sign when taking square roots.",
        "workingOut": "Set \\(x = 0 \\;\u2192\\; (0+2)^2 + y^2 = 4 \\;\u2192\\; 4 + y^2 = 4 \\;\u2192\\; y^2 = 0 \\;\u2192\\; y = 0 \\;\u2192\\; (0,0)\\)"
      },
      {
        "explanation": "Finally, we find the horizontal axis intercepts by setting the vertical coordinate to zero and solving for the horizontal coordinate.",
        "workingOut": "Set \\(y = 0 \\;\u2192\\; (x+2)^2 = 4 \\;\u2192\\; x+2 = \\pm 2 \\;\u2192\\; x = 0 \\text{ or } -4 \\;\u2192\\; (0,0), (-4,0)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-8a": {
    "type": "multiple_choice",
    "question": "A function \\(y = x^2\\) is translated right by 3 units. Write down the new equation.",
    "opts": ["\\(y = (x - 3)^2\\)", "\\(y = (x + 3)^2\\)", "\\(y = x^2 - 3\\)", "\\(y = x^2 + 3\\)"],
    "options": ["\\(y = (x - 3)^2\\)", "\\(y = (x + 3)^2\\)", "\\(y = x^2 - 3\\)", "\\(y = x^2 + 3\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial function equation. The objective is to translate the path horizontally. We identify the horizontal parameter within the function argument.",
        "workingOut": "Given: \\(y = x^2\\) and shift: 3 units right"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting right requires subtracting the translation constant from the variable. A common mistake is performing addition.",
        "workingOut": "\\(x \\;\u2192\\; (x - 3) \\;\\Rightarrow\\; y = (x - 3)^2\\)"
      },
      {
        "explanation": "Finally, we state the final transformed equation matching our options.",
        "workingOut": "\\(y = (x - 3)^2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-8b": {
    "type": "multiple_choice",
    "question": "A function \\(y = 3^x\\) is translated down by 4 units. Write down the new equation.",
    "opts": ["\\(y = 3^x - 4\\)", "\\(y = 3^{x - 4}\\)", "\\(y = 3^x + 4\\)", "\\(y = 3^{x + 4}\\)"],
    "options": ["\\(y = 3^x - 4\\)", "\\(y = 3^{x - 4}\\)", "\\(y = 3^x + 4\\)", "\\(y = 3^{x + 4}\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the reference exponential function and the translation parameter. The shift is vertical and downward.",
        "workingOut": "Given: \\(y = 3^x\\) and shift: 4 units down"
      },
      {
        "explanation": "Next, we subtract the translation parameter from the output of the function. A common mistake is modifying the exponent variable instead of subtracting from the entire term.",
        "workingOut": "\\(y_{\\text{new}} = 3^x - 4\\)"
      },
      {
        "explanation": "Finally, we state the completed translated exponential model equation.",
        "workingOut": "\\(y = 3^x - 4\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-8c": {
    "type": "multiple_choice",
    "question": "A function \\(y = x^3\\) is translated left by 2 units. Write down the new equation.",
    "opts": ["\\(y = (x + 2)^3\\)", "\\(y = (x - 2)^3\\)", "\\(y = x^3 - 2\\)", "\\(y = x^3 + 2\\)"],
    "options": ["\\(y = (x + 2)^3\\)", "\\(y = (x - 2)^3\\)", "\\(y = x^3 - 2\\)", "\\(y = x^3 + 2\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the reference cubic function and the translation vector. The shift is horizontal and to the left.",
        "workingOut": "Given: \\(y = x^3\\) and shift: 2 units left"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting left requires adding the constant to the variable argument. A common mistake is subtracting the constant inside the binomial cubed term.",
        "workingOut": "\\(x \\;\u2192\\; (x + 2) \\;\\Rightarrow\\; y = (x + 2)^3\\)"
      },
      {
        "explanation": "Finally, we state the completed translated cubic model equation.",
        "workingOut": "\\(y = (x + 2)^3\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-8d": {
    "type": "multiple_choice",
    "question": "A function \\(y = \\frac{1}{x}\\) is translated right by 1 unit. Write down the new equation.",
    "opts": ["\\(y = \\frac{1}{x - 1}\\)", "\\(y = \\frac{1}{x + 1}\\)", "\\(y = \\frac{1}{x} - 1\\)", "\\(y = \\frac{1}{x} + 1\\)"],
    "options": ["\\(y = \\frac{1}{x - 1}\\)", "\\(y = \\frac{1}{x + 1}\\)", "\\(y = \\frac{1}{x} - 1\\)", "\\(y = \\frac{1}{x} + 1\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the reference reciprocal function and the translation vector. The shift is horizontal and to the right.",
        "workingOut": "Given: \\(y = \\frac{1}{x}\\) and shift: 1 unit right"
      },
      {
        "explanation": "Next, we replace the independent variable in the denominator. Shifting right requires subtracting the constant from the variable. A common mistake is adding the constant.",
        "workingOut": "\\(x \\;\u2192\\; (x - 1) \\;\\Rightarrow\\; y = \\frac{1}{x - 1}\\)"
      },
      {
        "explanation": "Finally, we state the completed translated reciprocal model equation.",
        "workingOut": "\\(y = \\frac{1}{x - 1}\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-8e": {
    "type": "multiple_choice",
    "question": "A relation \\(x^2 + y^2 = 16\\) is translated up by 3 units. Write down the new equation.",
    "opts": [
      "\\(x^2 + (y - 3)^2 = 16\\)",
      "\\(x^2 + (y + 3)^2 = 16\\)",
      "\\((x - 3)^2 + y^2 = 16\\)",
      "\\((x + 3)^2 + y^2 = 16\\)"
    ],
    "options": [
      "\\(x^2 + (y - 3)^2 = 16\\)",
      "\\(x^2 + (y + 3)^2 = 16\\)",
      "\\((x - 3)^2 + y^2 = 16\\)",
      "\\((x + 3)^2 + y^2 = 16\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial circle equation and identifying the translation direction. A vertical shift upwards requires translating the vertical coordinate.",
        "workingOut": "Given: \\(x^2 + y^2 = 16\\) and shift: 3 units up"
      },
      {
        "explanation": "Next, we apply the vertical coordinate translation by replacing the variable. Shifting upward in vertex form requires subtracting the constant from the coordinate variable. A common mistake is adding the constant.",
        "workingOut": "\\(y \\;\u2192\\; (y - 3) \\;\\Rightarrow\\; x^2 + (y - 3)^2 = 16\\)"
      },
      {
        "explanation": "Finally, we state the final translated circle equation matching our options.",
        "workingOut": "\\(x^2 + (y - 3)^2 = 16\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-8f": {
    "type": "multiple_choice",
    "question": "A function \\(y = x^2 - 5\\) is translated left by 4 units. Write down the new equation.",
    "opts": ["\\(y = (x + 4)^2 - 5\\)", "\\(y = (x - 4)^2 - 5\\)", "\\(y = x^2 - 9\\)", "\\(y = x^2 - 1\\)"],
    "options": ["\\(y = (x + 4)^2 - 5\\)", "\\(y = (x - 4)^2 - 5\\)", "\\(y = x^2 - 9\\)", "\\(y = x^2 - 1\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the reference quadratic function and the translation vector. The shift is horizontal and to the left.",
        "workingOut": "Given: \\(y = x^2 - 5\\) and shift: 4 units left"
      },
      {
        "explanation": "Next, we replace the independent variable. Shifting left requires adding the constant to the variable argument. A common mistake is subtracting the constant inside the binomial squared expression.",
        "workingOut": "\\(x \\;\u2192\\; (x + 4) \\;\\Rightarrow\\; y = (x + 4)^2 - 5\\)"
      },
      {
        "explanation": "Finally, we state the completed translated quadratic model equation.",
        "workingOut": "\\(y = (x + 4)^2 - 5\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-9a-i": {
    "type": "multiple_choice",
    "question": "A function \\(y = f(x)\\) has roots at \\(x=-3, 0, 3\\) and a local maximum at \\((-1.5, 2)\\). Find the new local maximum coordinates after the graph is translated to \\(y = f(x - 4)\\).",
    "opts": ["\\((2.5, 2)\\)", "\\((-5.5, 2)\\)", "\\((-1.5, 6)\\)", "\\((-1.5, -2)\\)"],
    "options": ["\\((2.5, 2)\\)", "\\((-5.5, 2)\\)", "\\((-1.5, 6)\\)", "\\((-1.5, -2)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the transformation represented by the equation. A modification to the input variable represents a horizontal shift of the graph.",
        "workingOut": "Given: \\(y = f(x - 4)\\) where horizontal shift parameter is \\(h = +4\\) (right)"
      },
      {
        "explanation": "Next, we apply this horizontal translation to the coordinates of the local maximum. Shifting right by four units adds four to the horizontal coordinate while maintaining the vertical coordinate. A common mistake is subtracting from the horizontal coordinate.",
        "workingOut": "Original max: \\((-1.5, 2) \\;\u2192\\; (-1.5 + 4, 2)\\)"
      },
      {
        "explanation": "Finally, we compute the addition to find the exact coordinates of the shifted local maximum.",
        "workingOut": "New local maximum: \\((2.5, 2)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-9a-ii": {
    "type": "multiple_choice",
    "question": "A function \\(y = f(x)\\) has roots at \\(x=-3, 0, 3\\) and a local maximum at \\((-1.5, 2)\\). Find the new local maximum coordinates after the graph is translated to \\(y = f(x + 2)\\).",
    "opts": ["\\((-3.5, 2)\\)", "\\((0.5, 2)\\)", "\\((-1.5, 4)\\)", "\\((-1.5, 0)\\)"],
    "options": ["\\((-3.5, 2)\\)", "\\((0.5, 2)\\)", "\\((-1.5, 4)\\)", "\\((-1.5, 0)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the transformation represented by the equation. A modification to the input variable represents a horizontal shift of the graph.",
        "workingOut": "Given: \\(y = f(x + 2)\\) where horizontal shift parameter is \\(h = -2\\) (left)"
      },
      {
        "explanation": "Next, we apply this horizontal translation to the coordinates of the local maximum. Shifting left by two units subtracts two from the horizontal coordinate while maintaining the vertical coordinate. A common mistake is adding to the horizontal coordinate.",
        "workingOut": "Original max: \\((-1.5, 2) \\;\u2192\\; (-1.5 - 2, 2)\\)"
      },
      {
        "explanation": "Finally, we compute the subtraction to find the exact coordinates of the shifted local maximum.",
        "workingOut": "New local maximum: \\((-3.5, 2)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-9b-i": {
    "type": "multiple_choice",
    "question": "A function \\(y = P(x)\\) has roots at \\(x=-4, 2\\) and a local maximum at \\((-1, 4)\\). Find the new local maximum coordinates after the graph is translated to \\(y = P(x + 3)\\).",
    "opts": ["\\((-4, 4)\\)", "\\((2, 4)\\)", "\\((-1, 7)\\)", "\\((-1, 1)\\)"],
    "options": ["\\((-4, 4)\\)", "\\((2, 4)\\)", "\\((-1, 7)\\)", "\\((-1, 1)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the transformation represented by the equation. A modification to the input variable represents a horizontal shift of the graph.",
        "workingOut": "Given: \\(y = P(x + 3)\\) where horizontal shift parameter is \\(h = -3\\) (left)"
      },
      {
        "explanation": "Next, we apply this horizontal translation to the coordinates of the local maximum. Shifting left by three units subtracts three from the horizontal coordinate while maintaining the vertical coordinate. A common mistake is adding to the horizontal coordinate.",
        "workingOut": "Original max: \\((-1, 4) \\;\u2192\\; (-1 - 3, 4)\\)"
      },
      {
        "explanation": "Finally, we compute the subtraction to find the exact coordinates of the shifted local maximum.",
        "workingOut": "New local maximum: \\((-4, 4)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-9b-ii": {
    "type": "multiple_choice",
    "question": "A function \\(y = P(x)\\) has roots at \\(x=-4, 2\\) and a local maximum at \\((-1, 4)\\). Find the new local maximum coordinates after the graph is translated to \\(y = P(x) + 2\\).",
    "opts": ["\\((-1, 6)\\)", "\\((-1, 2)\\)", "\\((1, 4)\\)", "\\((-3, 4)\\)"],
    "options": ["\\((-1, 6)\\)", "\\((-1, 2)\\)", "\\((1, 4)\\)", "\\((-3, 4)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the transformation represented by the equation. A constant added to the entire function represents a vertical shift of the graph.",
        "workingOut": "Given: \\(y = P(x) + 2\\) where vertical shift parameter is \\(k = +2\\) (upward)"
      },
      {
        "explanation": "Next, we apply this vertical translation to the coordinates of the local maximum. Shifting upward by two units adds two to the vertical coordinate while maintaining the horizontal coordinate. A common mistake is adding to the horizontal coordinate instead.",
        "workingOut": "Original max: \\((-1, 4) \\;\u2192\\; (-1, 4 + 2)\\)"
      },
      {
        "explanation": "Finally, we compute the addition to find the exact coordinates of the shifted local maximum.",
        "workingOut": "New local maximum: \\((-1, 6)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-9c-i": {
    "type": "multiple_choice",
    "question": "A function \\(y = h(x)\\) is a parabola with its vertex at \\((2, -3)\\). Find the new vertex coordinates after the graph is translated to \\(y - 4 = h(x)\\).",
    "opts": ["\\((2, 1)\\)", "\\((2, -7)\\)", "\\((-2, -3)\\)", "\\((6, -3)\\)"],
    "options": ["\\((2, 1)\\)", "\\((2, -7)\\)", "\\((-2, -3)\\)", "\\((6, -3)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by rearranging the translation equation to express it in terms of the vertical output. Adding four to both sides isolates the vertical variable.",
        "workingOut": "Given: \\(y - 4 = h(x) \\;\\Rightarrow\\; y = h(x) + 4\\)"
      },
      {
        "explanation": "Next, we identify the type of translation. Since the constant is added externally to the function, it represents an upward vertical translation by four units. A common mistake is subtracting four from the vertical coordinate due to the negative sign in the original expression.",
        "workingOut": "Vertical shift: \\(k = +4\\) \\(\\Rightarrow\\; \\text{Original vertex: } (2, -3) \\;\u2192\\; (2, -3 + 4)\\)"
      },
      {
        "explanation": "Finally, we evaluate the addition to find the exact coordinates of the translated vertex.",
        "workingOut": "New vertex: \\((2, 1)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-9c-ii": {
    "type": "multiple_choice",
    "question": "A function \\(y = h(x)\\) is a parabola with its vertex at \\((2, -3)\\). Find the new vertex coordinates after the graph is translated to \\(y = h(x) - 2\\).",
    "opts": ["\\((2, -5)\\)", "\\((2, -1)\\)", "\\((0, -3)\\)", "\\((4, -3)\\)"],
    "options": ["\\((2, -5)\\)", "\\((2, -1)\\)", "\\((0, -3)\\)", "\\((4, -3)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the transformation represented by the equation. A constant subtracted from the entire function represents a vertical shift of the graph.",
        "workingOut": "Given: \\(y = h(x) - 2\\) where vertical shift parameter is \\(k = -2\\) (downward)"
      },
      {
        "explanation": "Next, we apply this vertical translation to the coordinates of the vertex. Shifting downward by two units subtracts two from the vertical coordinate while maintaining the horizontal coordinate. A common mistake is adding to the horizontal coordinate instead.",
        "workingOut": "Original vertex: \\((2, -3) \\;\u2192\\; (2, -3 - 2)\\)"
      },
      {
        "explanation": "Finally, we compute the subtraction to find the exact coordinates of the shifted vertex.",
        "workingOut": "New vertex: \\((2, -5)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-9d-i": {
    "type": "multiple_choice",
    "question": "A function \\(y = g(x)\\) is a semi-circle centred at \\((0,0)\\) with radius \\(3\\). Find the new centre coordinates after the graph is translated to \\(y - 2 = g(x)\\).",
    "opts": ["\\((0, 2)\\)", "\\((0, -2)\\)", "\\((2, 0)\\)", "\\((-2, 0)\\)"],
    "options": ["\\((0, 2)\\)", "\\((0, -2)\\)", "\\((2, 0)\\)", "\\((-2, 0)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by rearranging the translation equation to express it in terms of the vertical output. Adding two to both sides isolates the vertical variable.",
        "workingOut": "Given: \\(y - 2 = g(x) \\;\\Rightarrow\\; y = g(x) + 2\\)"
      },
      {
        "explanation": "Next, we identify the type of translation. Since the constant is added externally to the function, it represents an upward vertical translation by two units. A common mistake is subtracting two from the vertical coordinate due to the negative sign in the original expression.",
        "workingOut": "Vertical shift: \\(k = +2\\) \\(\\Rightarrow\\; \\text{Original centre: } (0, 0) \\;\u2192\\; (0, 0 + 2)\\)"
      },
      {
        "explanation": "Finally, we evaluate the addition to find the exact coordinates of the translated centre.",
        "workingOut": "New centre: \\((0, 2)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-9d-ii": {
    "type": "multiple_choice",
    "question": "A function \\(y = g(x)\\) is a semi-circle centred at \\((0,0)\\) with radius \\(3\\). Find the new centre coordinates after the graph is translated to \\(y = g(x - 5)\\).",
    "opts": ["\\((5, 0)\\)", "\\((-5, 0)\\)", "\\((0, 5)\\)", "\\((0, -5)\\)"],
    "options": ["\\((5, 0)\\)", "\\((-5, 0)\\)", "\\((0, 5)\\)", "\\((0, -5)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We start by identifying the transformation represented by the equation. A modification to the input variable represents a horizontal shift of the graph.",
        "workingOut": "Given: \\(y = g(x - 5)\\) where horizontal shift parameter is \\(h = +5\\) (right)"
      },
      {
        "explanation": "Next, we apply this horizontal translation to the coordinates of the centre. Shifting right by five units adds five to the horizontal coordinate while maintaining the vertical coordinate. A common mistake is subtracting from the horizontal coordinate.",
        "workingOut": "Original centre: \\((0, 0) \\;\u2192\\; (0 + 5, 0)\\)"
      },
      {
        "explanation": "Finally, we compute the addition to find the exact coordinates of the shifted centre.",
        "workingOut": "New centre: \\((5, 0)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-14a-i": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = \\frac{1}{2}x^3\\) has a point of inflection at \\((0,0)\\). Find the new point of inflection for the graph of \\(y = \\frac{1}{2}x^3 - 4\\).",
    "opts": ["\\((0, -4)\\)", "\\((0, 4)\\)", "\\((4, 0)\\)", "\\((-4, 0)\\)"],
    "options": ["\\((0, -4)\\)", "\\((0, 4)\\)", "\\((4, 0)\\)", "\\((-4, 0)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structure of the transformed cubic function. The constant term is subtracted from the entire function expression, indicating a vertical transformation.",
        "workingOut": "Given: \\(y = \\frac{1}{2}x^3 - 4\\) and base inflection point: \\((0, 0)\\)"
      },
      {
        "explanation": "Next, we apply the vertical translation value to the vertical coordinate of the point of inflection. A common mistake is changing the horizontal coordinate instead.",
        "workingOut": "Vertical shift: \\(k = -4\\) \\(\\Rightarrow\\; \\text{Inflection point: } (0, 0) \\;\u2192\\; (0, 0 - 4)\\)"
      },
      {
        "explanation": "Finally, we evaluate the subtraction to write down the coordinates of the new point of inflection.",
        "workingOut": "New point of inflection: \\((0, -4)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-14a-ii": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = \\frac{1}{2}x^3\\) has a point of inflection at \\((0,0)\\). Find the new point of inflection for the graph of \\(y = \\frac{1}{2}(x-3)^3\\).",
    "opts": ["\\((3, 0)\\)", "\\((-3, 0)\\)", "\\((0, 3)\\)", "\\((0, -3)\\)"],
    "options": ["\\((3, 0)\\)", "\\((-3, 0)\\)", "\\((0, 3)\\)", "\\((0, -3)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structure of the transformed cubic function. The variable is replaced inside the parenthesis, indicating a horizontal transformation.",
        "workingOut": "Given: \\(y = \\frac{1}{2}(x - 3)^3\\) and base inflection point: \\((0, 0)\\)"
      },
      {
        "explanation": "Next, we apply the horizontal translation value to the horizontal coordinate of the point of inflection. A common mistake is shifting the point in the opposite direction due to the subtraction sign.",
        "workingOut": "Horizontal shift: \\(h = +3\\) \\(\\Rightarrow\\; \\text{Inflection point: } (0, 0) \\;\u2192\\; (0 + 3, 0)\\)"
      },
      {
        "explanation": "Finally, we evaluate the addition to write down the coordinates of the new point of inflection.",
        "workingOut": "New point of inflection: \\((3, 0)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-14a-iii": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = \\frac{1}{2}x^3\\) has a point of inflection at \\((0,0)\\). Find the new point of inflection for the graph of \\(y = \\frac{1}{2}(x+1)^3 + 2\\).",
    "opts": ["\\((-1, 2)\\)", "\\((1, 2)\\)", "\\((-1, -2)\\)", "\\((1, -2)\\)"],
    "options": ["\\((-1, 2)\\)", "\\((1, 2)\\)", "\\((-1, -2)\\)", "\\((1, -2)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structure of the transformed cubic function. We identify both horizontal and vertical translation parameters.",
        "workingOut": "Given: \\(y = \\frac{1}{2}(x + 1)^3 + 2\\) and base inflection point: \\((0, 0)\\)"
      },
      {
        "explanation": "Next, we apply both translation values to the coordinates of the point of inflection. A common mistake is reversing the signs of both parameters during substitution.",
        "workingOut": "Translations: \\(h = -1\\) (left) and \\(k = +2\\) (up) \\(\\Rightarrow\\; (0, 0) \\;\u2192\\; (0 - 1, 0 + 2)\\)"
      },
      {
        "explanation": "Finally, we evaluate the addition and subtraction to write down the coordinates of the new point of inflection.",
        "workingOut": "New point of inflection: \\((-1, 2)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-14b-i": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = -3x^3\\) has a point of inflection at \\((0,0)\\). Find the new point of inflection for the graph of \\(y = 5 - 3x^3\\).",
    "opts": ["\\((0, 5)\\)", "\\((0, -5)\\)", "\\((5, 0)\\)", "\\((-5, 0)\\)"],
    "options": ["\\((0, 5)\\)", "\\((0, -5)\\)", "\\((5, 0)\\)", "\\((-5, 0)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structure of the transformed cubic function. The constant term is added to the entire function expression, indicating a vertical transformation.",
        "workingOut": "Given: \\(y = 5 - 3x^3\\) and base inflection point: \\((0, 0)\\)"
      },
      {
        "explanation": "Next, we apply the vertical translation value to the vertical coordinate of the point of inflection. A common mistake is changing the horizontal coordinate instead.",
        "workingOut": "Vertical shift: \\(k = +5\\) \\(\\Rightarrow\\; \\text{Inflection point: } (0, 0) \\;\u2192\\; (0, 0 + 5)\\)"
      },
      {
        "explanation": "Finally, we evaluate the addition to write down the coordinates of the new point of inflection.",
        "workingOut": "New point of inflection: \\((0, 5)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-14b-ii": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = -3x^3\\) has a point of inflection at \\((0,0)\\). Find the new point of inflection for the graph of \\(y = -3(x+2)^3\\).",
    "opts": ["\\((-2, 0)\\)", "\\((2, 0)\\)", "\\((0, -2)\\)", "\\((0, 2)\\)"],
    "options": ["\\((-2, 0)\\)", "\\((2, 0)\\)", "\\((0, -2)\\)", "\\((0, 2)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structure of the transformed cubic function. The variable is replaced inside the parenthesis, indicating a horizontal transformation.",
        "workingOut": "Given: \\(y = -3(x + 2)^3\\) and base inflection point: \\((0, 0)\\)"
      },
      {
        "explanation": "Next, we apply the horizontal translation value to the horizontal coordinate of the point of inflection. A common mistake is shifting the point in the opposite direction due to the addition sign.",
        "workingOut": "Horizontal shift: \\(h = -2\\) \\(\\Rightarrow\\; \\text{Inflection point: } (0, 0) \\;\u2192\\; (0 - 2, 0)\\)"
      },
      {
        "explanation": "Finally, we evaluate the subtraction to write down the coordinates of the new point of inflection.",
        "workingOut": "New point of inflection: \\((-2, 0)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-14b-iii": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = -3x^3\\) has a point of inflection at \\((0,0)\\). Find the new point of inflection for the graph of \\(y = -3(x-4)^3 - 1\\).",
    "opts": ["\\((4, -1)\\)", "\\((-4, -1)\\)", "\\((4, 1)\\)", "\\((-4, 1)\\)"],
    "options": ["\\((4, -1)\\)", "\\((-4, -1)\\)", "\\((4, 1)\\)", "\\((-4, 1)\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the structure of the transformed cubic function. We identify both horizontal and vertical translation parameters.",
        "workingOut": "Given: \\(y = -3(x - 4)^3 - 1\\) and base inflection point: \\((0, 0)\\)"
      },
      {
        "explanation": "Next, we apply both translation values to the coordinates of the point of inflection. A common mistake is reversing the signs of both parameters during substitution.",
        "workingOut": "Translations: \\(h = +4\\) (right) and \\(k = -1\\) (down) \\(\\Rightarrow\\; (0, 0) \\;\u2192\\; (0 + 4, 0 - 1)\\)"
      },
      {
        "explanation": "Finally, we evaluate the addition and subtraction to write down the coordinates of the new point of inflection.",
        "workingOut": "New point of inflection: \\((4, -1)\\)"
      }
    ],
    "isNew": true
  }
};

async function run() {
  console.log('Transforming second batch of new- series to MCQ...');
  for (const [id, updateData] of Object.entries(updates)) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      await docRef.update(updateData);
      console.log(`Updated ${id} successfully.`);
    } else {
      console.error(`${id} does not exist!`);
    }
  }
}

run().catch(console.error);
