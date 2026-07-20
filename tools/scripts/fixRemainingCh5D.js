import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

const updates = {
  "y11a-5D-new-10": {
    "type": "multiple_choice",
    "question": "Answer the following questions about the cubic \\(y = x^3 - 3x^2\\), which can be factored as \\(y = x^2(x - 3)\\). Notice that the curve has local turning points (where it is momentarily horizontal) at \\((0, 0)\\) and \\((2, -4)\\).",
    "q": "Answer the following questions about the cubic \\(y = x^3 - 3x^2\\), which can be factored as \\(y = x^2(x - 3)\\). Notice that the curve has local turning points (where it is momentarily horizontal) at \\((0, 0)\\) and \\((2, -4)\\).",
    "opts": [],
    "options": [],
    "a": null,
    "answer": null,
    "subQuestions": [
      {
        "id": "y11a-5D-new-10a",
        "type": "teacher_review",
        "requiresManualGrading": true,
        "question": "Graph this cubic function \\(y = x^3 - 3x^2\\) on the number plane, indicating all intercepts and turning points.",
        "opts": [],
        "options": [],
        "a": null,
        "answer": null,
        "hint": "Plot the intercepts at \\(x = 0, 3\\) and turning points at \\((0, 0), (2, -4)\\) before drawing the curve.",
        "solution": "The graph is a smooth cubic curve. It has x-intercepts at \\(x = 0\\) (a double root where the curve is tangent to the axis) and \\(x = 3\\). The turning points are a local maximum at \\((0, 0)\\) and a local minimum at \\((2, -4)\\).",
        "graphData": null,
        "solutionSteps": [
          {
            "explanation": "We are given the cubic equation \\(y = x^3 - 3x^2\\) which factors as \\(y = x^2(x - 3)\\). Our strategy is to identify the key features of the graph, including the horizontal axis intercepts and the local turning points. This establishes the structural blueprint for sketching.",
            "workingOut": "\\text{Key features: Intercepts and turning points}",
            "graphData": null
          },
          {
            "explanation": "We find the x-intercepts by setting the function equal to zero. The factor \\(x^2\\) implies a double root at \\(x = 0\\) where the graph touches the axis, while \\(x - 3 = 0\\) gives a single root at \\(x = 3\\). A common mistake is treating the origin as a simple crossing point rather than a tangent point. This identifies the horizontal axis crossings.",
            "workingOut": "\\(x^2(x - 3) = 0 \\implies x = 0 \\text{ (double root) and } x = 3\\)",
            "graphData": null
          },
          {
            "explanation": "We locate the local turning points at \\((0, 0)\\) and \\((2, -4)\\) as given. We draw a smooth, continuous cubic curve that starts in the third quadrant, reaches a local maximum at the origin, dips to a local minimum at \\((2, -4)\\), and then rises into the first quadrant. This confirms the graphical shape of the function.",
            "workingOut": "\\text{Turning points: } (0, 0) \\text{ (max), } (2, -4) \\text{ (min)}",
            "graphData": {
              "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\" width=\"300\" height=\"240\" style=\"display: block; margin: 0 auto; background: #fafafa; border: 1px solid #e2e8f0; border-radius: 8px;\">\n  <!-- Grid Lines -->\n  <path d=\"M 0,20 H 300 M 0,40 H 300 M 0,60 H 300 M 0,80 H 300 M 0,120 H 300 M 0,140 H 300 M 0,160 H 300 M 0,180 H 300 M 0,200 H 300 M 0,220 H 300\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n  <path d=\"M 20,0 V 240 M 40,0 V 240 M 60,0 V 240 M 80,0 V 240 M 120,0 V 240 M 140,0 V 240 M 160,0 V 240 M 180,0 V 240 M 200,0 V 240 M 220,0 V 240 M 240,0 V 240 M 260,0 V 240 M 280,0 V 240\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n  <!-- Axes -->\n  <line x1=\"10\" y1=\"100\" x2=\"290\" y2=\"100\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n  <line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n  <!-- Axes Labels -->\n  <text x=\"285\" y=\"115\" font-size=\"12\" fill=\"#64748b\" font-weight=\"bold\">x</text>\n  <text x=\"85\" y=\"15\" font-size=\"12\" fill=\"#64748b\" font-weight=\"bold\">y</text>\n  <!-- Curve y = x^3 - 3x^2 -->\n  <path d=\"M 40,220 C 70,160 85,100 100,100 C 115,100 150,180 180,180 C 200,180 210,140 230,20\" fill=\"none\" stroke=\"#6366f1\" stroke-width=\"2.5\" />\n  <!-- Key points -->\n  <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#ef4444\" />\n  <text x=\"80\" y=\"95\" font-size=\"11\" fill=\"#ef4444\" font-weight=\"bold\">(0,0)</text>\n  <circle cx=\"180\" cy=\"180\" r=\"4\" fill=\"#ef4444\" />\n  <text x=\"185\" y=\"195\" font-size=\"11\" fill=\"#ef4444\" font-weight=\"bold\">(2,-4)</text>\n  <circle cx=\"220\" cy=\"100\" r=\"4\" fill=\"#ef4444\" />\n  <text x=\"220\" y=\"90\" font-size=\"11\" fill=\"#ef4444\" font-weight=\"bold\">3</text>\n</svg>"
            }
          }
        ]
      },
      {
        "id": "y11a-5D-new-10b-1",
        "type": "multiple_choice",
        "question": "The cubic is dilated vertically by a factor of 3. Write down the equation of this new cubic.",
        "opts": [
          "\\(y = x^3 - 3x^2 + 3\\)",
          "\\(y = 3x^3 - 3x^2\\)",
          "\\(y = 3x^3 - 9x^2\\)",
          "\\(y = \\dfrac{1}{3}x^3 - x^2\\)"
        ],
        "options": [
          "\\(y = x^3 - 3x^2 + 3\\)",
          "\\(y = 3x^3 - 3x^2\\)",
          "\\(y = 3x^3 - 9x^2\\)",
          "\\(y = \\dfrac{1}{3}x^3 - x^2\\)"
        ],
        "a": 2,
        "answer": 2,
        "hint": "Multiply the entire function formula by the vertical dilation factor.",
        "solution": "Vertically dilating a function \\(y = f(x)\\) by a factor of \\(k\\) yields \\(y = k \\cdot f(x)\\). Here, \\(y = 3(x^3 - 3x^2) = 3x^3 - 9x^2\\).",
        "solutionSteps": [
          {
            "explanation": "We are given the function \\(f(x) = x^3 - 3x^2\\) and told it is dilated vertically by a factor of 3. Our strategy is to multiply the entire output formula by the dilation factor. This corresponds to the vertical stretching transformation.",
            "workingOut": "\\(y_{new} = 3 \\cdot f(x)\\)",
            "graphData": null
          },
          {
            "explanation": "We substitute the algebraic expression for \\(f(x)\\) into the product. We expand the expression by distributing the factor of 3 to both terms. A common mistake is only multiplying the leading term by 3 and neglecting the quadratic term. This step gives us the expanded polynomial form.",
            "workingOut": "\\(y = 3(x^3 - 3x^2) \\;\\Rightarrow\\; y = 3x^3 - 9x^2\\)",
            "graphData": null
          },
          {
            "explanation": "We confirm that every vertical coordinate is scaled by a factor of 3, corresponding to a vertical stretch. The final answer is \\(y = 3x^3 - 9x^2\\), which represents the equation of the transformed cubic curve. This completes the derivation by verifying the vertical scale change.",
            "workingOut": "\\(y = 3x^3 - 9x^2\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-5D-new-10b-2",
        "type": "multiple_choice",
        "question": "Where are the turning points of this vertically dilated curve? Have the \\(x\\)-coordinates of the turning points changed?",
        "opts": [
          "Turning points are \\((0, 0)\\) and \\((6, -4)\\); \\(x\\)-coordinates have changed.",
          "Turning points are \\((0, 0)\\) and \\((2, -12)\\); \\(x\\)-coordinates have not changed.",
          "Turning points are \\((0, 0)\\) and \\((2, -1.33)\\); \\(x\\)-coordinates have not changed.",
          "Turning points are \\((0, 0)\\) and \\((2, -4)\\); \\(x\\)-coordinates have not changed."
        ],
        "options": [
          "Turning points are \\((0, 0)\\) and \\((6, -4)\\); \\(x\\)-coordinates have changed.",
          "Turning points are \\((0, 0)\\) and \\((2, -12)\\); \\(x\\)-coordinates have not changed.",
          "Turning points are \\((0, 0)\\) and \\((2, -1.33)\\); \\(x\\)-coordinates have not changed.",
          "Turning points are \\((0, 0)\\) and \\((2, -4)\\); \\(x\\)-coordinates have not changed."
        ],
        "a": 1,
        "answer": 1,
        "hint": "Vertical stretch changes only the vertical coordinates by the dilation factor.",
        "solution": "Turning points are scaled vertically: \\((x, y) \\to (x, 3y)\\). Thus, \\((0, 0)\\) stays \\((0, 0)\\), and \\((2, -4)\\) becomes \\((2, -12)\\). The \\(x\\)-coordinates remain unchanged.",
        "solutionSteps": [
          {
            "explanation": "We are given turning points at \\((0, 0)\\) and \\((2, -4)\\) on the base graph, which is dilated vertically by 3. Our strategy is to multiply each turning point's vertical coordinate by the factor of 3 while leaving the horizontal coordinates constant. This applies the vertical coordinate scaling rule.",
            "workingOut": "\\((x, y) \\;→\\; (x, 3y)\\)",
            "graphData": null
          },
          {
            "explanation": "We calculate the coordinates for each point individually. For the origin, the product remains zero. For the second point, we multiply the vertical coordinate \\(-4\\) by 3. A common mistake is multiplying the horizontal coordinate instead, which represents a horizontal transformation. This yields the new coordinate pairs.",
            "workingOut": "\\((0, 0) \\;→\\; (0, 3 \\times 0) = (0, 0) \\quad \\text{and} \\quad (2, -4) \\;→\\; (2, 3 \\times -4) = (2, -12)\\)",
            "graphData": null
          },
          {
            "explanation": "We conclude that the horizontal coordinates are unchanged, while the vertical coordinates are stretched downward. Therefore, the final answer is that the turning points are \\((0, 0)\\) and \\((2, -12)\\), and the horizontal coordinates have not changed. This verifies the new locations of the turning points geometrically.",
            "workingOut": "\\text{Turning points: } (0, 0), (2, -12) \\quad (x\\text{-coordinates unchanged})",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-5D-new-10c-1",
        "type": "multiple_choice",
        "question": "The original cubic is dilated horizontally by a factor of 2. Write down the equation of this third cubic.",
        "opts": [
          "\\(y = 8x^3 - 12x^2\\)",
          "\\(y = 2x^3 - 6x^2\\)",
          "\\(y = \\dfrac{x^3}{2} - \\dfrac{3x^2}{2}\\)",
          "\\(y = \\dfrac{x^3}{8} - \\dfrac{3x^2}{4}\\)"
        ],
        "options": [
          "\\(y = 8x^3 - 12x^2\\)",
          "\\(y = 2x^3 - 6x^2\\)",
          "\\(y = \\dfrac{x^3}{2} - \\dfrac{3x^2}{2}\\)",
          "\\(y = \\dfrac{x^3}{8} - \\dfrac{3x^2}{4}\\)"
        ],
        "a": 3,
        "answer": 3,
        "hint": "Replace every x in the equation with (x/2).",
        "solution": "Replacing \\(x\\) with \\(\\frac{x}{2}\\) gives: \\(y = (\\frac{x}{2})^3 - 3(\\frac{x}{2})^2 = \\frac{x^3}{8} - \\frac{3x^2}{4}\\).",
        "solutionSteps": [
          {
            "explanation": "We are given the function \\(f(x) = x^3 - 3x^2\\) and told it is dilated horizontally by a factor of 2. Our strategy is to replace each variable \\(x\\) with \\(\\dfrac{x}{2}\\). This horizontal scaling method represents stretching by 2.",
            "workingOut": "\\(y = f\\left(\\dfrac{x}{2}\\right)\\)",
            "graphData": null
          },
          {
            "explanation": "We perform the algebraic replacement in both terms. We simplify by raising both components of the fraction to the power, evaluating \\(2^3 = 8\\) and \\(2^2 = 4\\). A common mistake is multiplying the variable by 2 as \\(f(2x)\\), which would compress rather than stretch the graph. This gives us the factored fractional terms.",
            "workingOut": "\\(y = \\left(\\dfrac{x}{2}\\right)^3 - 3\\left(\\dfrac{x}{2}\\right)^2 \\;\\Rightarrow\\; y = \\dfrac{x^3}{8} - 3\\left(\\dfrac{x^2}{4}\\right)\\)",
            "graphData": null
          },
          {
            "explanation": "We simplify the terms to write the final expanded formula. This represents the equation of the horizontally stretched cubic function. The final answer is \\(y = \\dfrac{x^3}{8} - \\dfrac{3x^2}{4}\\). This completes the horizontal scale transformation validation.",
            "workingOut": "\\(y = \\dfrac{x^3}{8} - \\dfrac{3x^2}{4}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-5D-new-10c-2",
        "type": "multiple_choice",
        "question": "Where are the turning points of this horizontally dilated curve? Have the \\(y\\)-coordinates of the turning points changed?",
        "opts": [
          "Turning points are \\((0, 0)\\) and \\((4, -4)\\); \\(y\\)-coordinates have not changed.",
          "Turning points are \\((0, 0)\\) and \\((2, -8)\\); \\(y\\)-coordinates have changed.",
          "Turning points are \\((0, 0)\\) and \\((1, -4)\\); \\(y\\)-coordinates have not changed.",
          "Turning points are \\((0, 0)\\) and \\((4, -8)\\); \\(y\\)-coordinates have changed."
        ],
        "options": [
          "Turning points are \\((0, 0)\\) and \\((4, -4)\\); \\(y\\)-coordinates have not changed.",
          "Turning points are \\((0, 0)\\) and \\((2, -8)\\); \\(y\\)-coordinates have changed.",
          "Turning points are \\((0, 0)\\) and \\((1, -4)\\); \\(y\\)-coordinates have not changed.",
          "Turning points are \\((0, 0)\\) and \\((4, -8)\\); \\(y\\)-coordinates have changed."
        ],
        "a": 0,
        "answer": 0,
        "hint": "Horizontal dilation scales only the horizontal coordinates by the dilation factor.",
        "solution": "Turning points are scaled horizontally: \\((x, y) \\to (2x, y)\\). Thus, \\((0, 0)\\) stays \\((0, 0)\\), and \\((2, -4)\\) becomes \\((4, -4)\\). The \\(y\\)-coordinates remain unchanged.",
        "solutionSteps": [
          {
            "explanation": "We are given turning points at \\((0, 0)\\) and \\((2, -4)\\) on the base graph, which is dilated horizontally by 2. Our strategy is to multiply each turning point's horizontal coordinate by the factor of 2 while leaving the vertical coordinates constant. This applies the horizontal coordinate scaling rule.",
            "workingOut": "\\((x, y) \\;→\\; (2x, y)\\)",
            "graphData": null
          },
          {
            "explanation": "We calculate the coordinates for each point individually. For the origin, the product remains zero. For the second point, we multiply the horizontal coordinate \\(2\\) by 2. A common mistake is multiplying the vertical coordinate instead, which represents a vertical transformation. This yields the new coordinate pairs.",
            "workingOut": "\\((0, 0) \\;→\\; (2 \\times 0, 0) = (0, 0) \\quad \\text{and} \\quad (2, -4) \\;→\\; (2 \\times 2, -4) = (4, -4)\\)",
            "graphData": null
          },
          {
            "explanation": "We conclude that the vertical coordinates are unchanged, while the horizontal coordinates are stretched outward. Therefore, the final answer is that the turning points are \\((0, 0)\\) and \\((4, -4)\\), and the vertical coordinates have not changed. This confirms the coordinates of the turning points after horizontal dilation.",
            "workingOut": "\\text{Turning points: } (0, 0), (4, -4) \\quad (y\\text{-coordinates unchanged})",
            "graphData": null
          }
        ]
      }
    ],
    "isNew": true
  },
  "y11a-5D-new-11a": {
    "type": "multiple_choice",
    "question": "The cubic \\(y = x^3\\) is transformed to obtain \\(y = \\dfrac{1}{64}x^3\\).",
    "q": "The cubic \\(y = x^3\\) is transformed to obtain \\(y = \\dfrac{1}{64}x^3\\).",
    "opts": [],
    "options": [],
    "a": null,
    "answer": null,
    "subQuestions": [
      {
        "id": "y11a-5D-new-11a-1",
        "type": "multiple_choice",
        "question": "Explain the transformation as a horizontal dilation.",
        "opts": [
          "Horizontal dilation by a factor of 64",
          "Horizontal dilation by a factor of 4",
          "Horizontal dilation by a factor of \\(\\frac{1}{4}\\)",
          "Horizontal dilation by a factor of 16"
        ],
        "options": [
          "Horizontal dilation by a factor of 64",
          "Horizontal dilation by a factor of 4",
          "Horizontal dilation by a factor of \\(\\frac{1}{4}\\)",
          "Horizontal dilation by a factor of 16"
        ],
        "a": 1,
        "answer": 1,
        "hint": "Rewrite the transformed equation in the form y = (x/k)^3.",
        "solution": "We can rewrite the equation as \\(y = \\frac{1}{64}x^3 = (\\frac{x}{4})^3 = (\\frac{x}{k})^3\\) where \\(k=4\\). This is a horizontal dilation by a factor of 4.",
        "solutionSteps": [
          {
            "explanation": "We are given the transformed equation \\(y = \\dfrac{1}{64}x^3\\). To interpret it as a horizontal dilation, our strategy is to rewrite the expression so that the horizontal variable is grouped inside the cube power. This is of the form \\(y = \\left(\\dfrac{x}{k}\\right)^3\\).",
            "workingOut": "\\(y = \\left(\\dfrac{x}{k}\\right)^3\\)",
            "graphData": null
          },
          {
            "explanation": "We take the cube root of the coefficient \\(\\dfrac{1}{64}\\) to bring it inside the power, which is \\(\\dfrac{1}{4}\\) since \\(4^3 = 64\\). We write the expression as \\(y = \\left(\\dfrac{x}{4}\\right)^3\\). A common mistake is interpreting the divisor as the factor directly without taking the power root. This step gives us the horizontal dilation form.",
            "workingOut": "\\(y = \\dfrac{1}{64}x^3 = \\left(\\dfrac{1}{4}\\right)^3 x^3 = \\left(\\dfrac{x}{4}\\right)^3\\)",
            "graphData": null
          },
          {
            "explanation": "We match this with the standard horizontal dilation form. Since \\(x\\) is divided by 4, this corresponds to a horizontal stretch by a factor of 4. Therefore, the final answer is that it represents a horizontal dilation by a factor of 4.",
            "workingOut": "\\text{Dilation factor: } k = 4 \\implies \\text{Horizontal dilation by 4}",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-5D-new-11a-2",
        "type": "multiple_choice",
        "question": "Explain the transformation as a vertical dilation.",
        "opts": [
          "Vertical dilation by a factor of 64",
          "Vertical dilation by a factor of 4",
          "Vertical dilation by a factor of \\(\\frac{1}{64}\\)",
          "Vertical dilation by a factor of \\(\\frac{1}{4}\\)"
        ],
        "options": [
          "Vertical dilation by a factor of 64",
          "Vertical dilation by a factor of 4",
          "Vertical dilation by a factor of \\(\\frac{1}{64}\\)",
          "Vertical dilation by a factor of \\(\\frac{1}{4}\\)"
        ],
        "a": 2,
        "answer": 2,
        "hint": "Express the equation in the form y = c * f(x) where f(x) = x^3.",
        "solution": "We can write \\(y = \\frac{1}{64}(x^3) = c \\cdot f(x)\\) where \\(c = \\frac{1}{64}\\). This is a vertical dilation by a factor of \\(\\frac{1}{64}\\) (a vertical compression).",
        "solutionSteps": [
          {
            "explanation": "We are given the transformed equation \\(y = \\dfrac{1}{64}x^3\\). To interpret it as a vertical dilation, our strategy is to isolate the scaling factor outside the base function \\(f(x) = x^3\\). This is of the form \\(y = c \\cdot f(x)\\).",
            "workingOut": "\\(y = c \\cdot x^3\\)",
            "graphData": null
          },
          {
            "explanation": "We identify the constant scaling factor directly from the equation, which is \\(c = \\dfrac{1}{64}\\). A common mistake is confusing this with the horizontal root factor \\(\\frac{1}{4}\\). This step gives the vertical dilation factor.",
            "workingOut": "\\(c = \\dfrac{1}{64}\\)",
            "graphData": null
          },
          {
            "explanation": "We match this with the standard vertical dilation definition. Since the factor is \\(\\dfrac{1}{64}\\), it represents a vertical compression by this factor. Thus, the final answer is that it represents a vertical dilation by a factor of \\(\\dfrac{1}{64}\\).",
            "workingOut": "\\text{Vertical dilation by } \\dfrac{1}{64}",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-5D-new-11a-3",
        "type": "teacher_review",
        "requiresManualGrading": true,
        "question": "Graph both functions \\(y = x^3\\) and \\(y = \\dfrac{1}{64}x^3\\) on the same set of coordinate axes.",
        "opts": [],
        "options": [],
        "a": null,
        "answer": null,
        "hint": "Draw \\(y = x^3\\) passing through \\((1, 1)\\) and \\((2, 8)\\), and show \\(y = \\frac{1}{64}x^3\\) much closer to the horizontal axis.",
        "solution": "The graph displays two cubic curves intersecting at the origin \\((0,0)\\). The standard cubic \\(y = x^3\\) rises steeply, passing through \\((2, 8)\\) and \\((-2, -8)\\). The transformed curve \\(y = \\frac{1}{64}x^3\\) is vertically compressed, passing through \\((4, 1)\\) and \\((-4, -1)\\), presenting a wider shape.",
        "graphData": null,
        "solutionSteps": [
          {
            "explanation": "We are given two cubic functions to graph on the same axes: the base curve \\(y = x^3\\) and the dilated curve \\(y = \\dfrac{1}{64}x^3\\). Our strategy is to determine key coordinates for both curves to show their relative steepness and shape. This establishes the graphing reference points.",
            "workingOut": "\\text{Functions: } y = x^3 \\text{ and } y = \\dfrac{1}{64}x^3",
            "graphData": null
          },
          {
            "explanation": "We evaluate coordinates for both functions. For \\(y = x^3\\), we use \\((0, 0)\\), \\((2, 8)\\), and \\((-2, -8)\\). For \\(y = \\dfrac{1}{64}x^3\\), we evaluate the coordinates to find nice integer pairs like \\((4, 1)\\) and \\((-4, -1)\\). A common mistake is sketching both curves with the same slope, ignoring the scaling difference. This identifies the key coordinate pairs.",
            "workingOut": "\\text{Curve 1: } (2, 8), (0, 0), (-2, -8) \\quad \\text{Curve 2: } (4, 1), (0, 0), (-4, -1)",
            "graphData": null
          },
          {
            "explanation": "We sketch both cubic curves through the origin. The curve \\(y = x^3\\) rises steeply, while the curve \\(y = \\dfrac{1}{64}x^3\\) is compressed towards the horizontal axis, appearing wider. This confirms the graphical comparison of the two cubics on the plane.",
            "workingOut": "\\text{Sketch both curves intersecting at } (0, 0)",
            "graphData": {
              "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\" width=\"300\" height=\"240\" style=\"display: block; margin: 0 auto; background: #fafafa; border: 1px solid #e2e8f0; border-radius: 8px;\">\n  <!-- Grid Lines -->\n  <path d=\"M 0,20 H 300 M 0,40 H 300 M 0,60 H 300 M 0,80 H 300 M 0,100 H 300 M 0,140 H 300 M 0,160 H 300 M 0,180 H 300 M 0,200 H 300 M 0,220 H 300\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n  <path d=\"M 20,0 V 240 M 40,0 V 240 M 60,0 V 240 M 80,0 V 240 M 100,0 V 240 M 120,0 V 240 M 160,0 V 240 M 180,0 V 240 M 200,0 V 240 M 220,0 V 240 M 240,0 V 240 M 260,0 V 240 M 280,0 V 240\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n  <!-- Axes -->\n  <line x1=\"10\" y1=\"120\" x2=\"290\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n  <line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n  <!-- Axes Labels -->\n  <text x=\"285\" y=\"135\" font-size=\"12\" fill=\"#64748b\" font-weight=\"bold\">x</text>\n  <text x=\"125\" y=\"15\" font-size=\"12\" fill=\"#64748b\" font-weight=\"bold\">y</text>\n  <!-- Curve y = x^3 (Steep) -->\n  <path d=\"M 100,220 C 120,180 130,120 140,120 C 150,120 160,60 180,20\" fill=\"none\" stroke=\"#6366f1\" stroke-width=\"2\" />\n  <text x=\"185\" y=\"25\" font-size=\"10\" fill=\"#6366f1\" font-weight=\"bold\">y = x³</text>\n  <!-- Curve y = 1/64 x^3 (Compressed) -->\n  <path d=\"M 30,210 C 90,180 120,120 140,120 C 160,120 190,60 250,30\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <text x=\"220\" y=\"45\" font-size=\"10\" fill=\"#10b981\" font-weight=\"bold\">y = x³/64</text>\n</svg>"
            }
          }
        ]
      }
    ],
    "isNew": true
  },
  "y11a-5D-new-11b": {
    "type": "multiple_choice",
    "question": "The cubic \\(y = x^3\\) is transformed to obtain \\(y = -x^3\\).",
    "q": "The cubic \\(y = x^3\\) is transformed to obtain \\(y = -x^3\\).",
    "opts": [],
    "options": [],
    "a": null,
    "answer": null,
    "subQuestions": [
      {
        "id": "y11a-5D-new-11b-1",
        "type": "multiple_choice",
        "question": "Explain the transformation as a horizontal transformation (reflection).",
        "opts": [
          "Reflection across the \\(x\\)-axis (vertical reflection)",
          "Horizontal dilation by a factor of 2",
          "Horizontal shift to the left by 1 unit",
          "Reflection across the \\(y\\)-axis (horizontal reflection)"
        ],
        "options": [
          "Reflection across the \\(x\\)-axis (vertical reflection)",
          "Horizontal dilation by a factor of 2",
          "Horizontal shift to the left by 1 unit",
          "Reflection across the \\(y\\)-axis (horizontal reflection)"
        ],
        "a": 3,
        "answer": 3,
        "hint": "Substitute -x into the base function y = x^3 and evaluate.",
        "solution": "Replacing \\(x\\) with \\(-x\\) gives \\(y = (-x)^3 = -x^3\\). Thus, the transformation can be viewed as a reflection across the \\(y\\)-axis.",
        "solutionSteps": [
          {
            "explanation": "We are given the transformed equation \\(y = -x^3\\). To interpret this horizontally, our strategy is to check if replacing the variable \\(x\\) with \\(-x\\) yields the same algebraic formula. This tests for horizontal reflection symmetry.",
            "workingOut": "\\(y = f(-x) = (-x)^3\\)",
            "graphData": null
          },
          {
            "explanation": "We evaluate the cube of the negative variable, noting that \\((-x)^3 = -x^3\\). A common mistake is assuming that horizontal reflection must yield a different graph shape, ignoring that odd functions relate horizontal and vertical reflections. This identity links the two forms.",
            "workingOut": "\\(y = (-x)^3 = -x^3\\)",
            "graphData": null
          },
          {
            "explanation": "We conclude that because \\((-x)^3 = -x^3\\), the transformation is algebraically equivalent to replacing \\(x\\) with \\(-x\\), which is a reflection across the vertical \\(y\\)-axis. Therefore, the final answer is a reflection across the \\(y\\)-axis. This confirms the horizontal transformation matches origin reflection behavior.",
            "workingOut": "\\text{Reflection across the } y\\text{-axis}",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-5D-new-11b-2",
        "type": "multiple_choice",
        "question": "Explain the transformation as a vertical transformation (reflection).",
        "opts": [
          "Reflection across the \\(x\\)-axis (vertical reflection)",
          "Reflection across the \\(y\\)-axis (horizontal reflection)",
          "Vertical dilation by a factor of 2",
          "Vertical shift downwards by 1 unit"
        ],
        "options": [
          "Reflection across the \\(x\\)-axis (vertical reflection)",
          "Reflection across the \\(y\\)-axis (horizontal reflection)",
          "Vertical dilation by a factor of 2",
          "Vertical shift downwards by 1 unit"
        ],
        "a": 0,
        "answer": 0,
        "hint": "Express the transformation in the form y = -f(x) where f(x) = x^3.",
        "solution": "The equation is of the form \\(y = -f(x)\\) where \\(f(x) = x^3\\). This is a reflection across the \\(x\\)-axis.",
        "solutionSteps": [
          {
            "explanation": "We are given the transformed equation \\(y = -x^3\\). To interpret it vertically, our strategy is to check if the entire output of the base function \\(f(x) = x^3\\) has been multiplied by \\(-1\\). This represents vertical reflection.",
            "workingOut": "\\(y = -f(x)\\)",
            "graphData": null
          },
          {
            "explanation": "We identify that the negative sign is positioned outside the cube function, making it \\(y = -(x^3)\\). A common mistake is confusing this with horizontal reflection, which is only identical because the function is odd. This step confirms the negative scaling factor.",
            "workingOut": "\\(y = -(x^3)\\)",
            "graphData": null
          },
          {
            "explanation": "We conclude that multiplying the entire function output by \\(-1\\) is a reflection across the horizontal \\(x\\)-axis. Therefore, the final answer is a reflection across the \\(x\\)-axis. This geometric interpretation verifies the vertical reflection behavior.",
            "workingOut": "\\text{Reflection across the } x\\text{-axis}",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-5D-new-11b-3",
        "type": "teacher_review",
        "requiresManualGrading": true,
        "question": "Graph both functions \\(y = x^3\\) and \\(y = -x^3\\) on the same set of coordinate axes.",
        "opts": [],
        "options": [],
        "a": null,
        "answer": null,
        "hint": "Graph \\(y = x^3\\) rising from quadrant 3 to quadrant 1, and graph \\(y = -x^3\\) falling from quadrant 2 to quadrant 4.",
        "solution": "The graph shows two cubic curves intersecting at the origin \\((0,0)\\). The standard cubic \\(y = x^3\\) goes from the bottom-left to the top-right, passing through \\((2, 8)\\). The reflected cubic \\(y = -x^3\\) goes from the top-left to the bottom-right, passing through \\((2, -8)\\).",
        "graphData": null,
        "solutionSteps": [
          {
            "explanation": "We are given two cubic functions to graph on the same axes: the base curve \\(y = x^3\\) and the reflected curve \\(y = -x^3\\). Our strategy is to determine key coordinates for both curves to show their reflectional relationship. This establishes the graphing reference points.",
            "workingOut": "\\text{Functions: } y = x^3 \\text{ and } y = -x^3",
            "graphData": null
          },
          {
            "explanation": "We evaluate coordinates for both functions. For \\(y = x^3\\), we use \\((0, 0)\\), \\((1, 1)\\), and \\((-1, -1)\\). For \\(y = -x^3\\), the coordinates are reflected, yielding \\((1, -1)\\) and \\((-1, 1)\\). A common mistake is drawing the reflected curve in the wrong quadrants. This identifies the key coordinate pairs.",
            "workingOut": "\\text{Curve 1: } (1, 1), (0, 0), (-1, -1) \\quad \\text{Curve 2: } (1, -1), (0, 0), (-1, 1)",
            "graphData": null
          },
          {
            "explanation": "We sketch both cubic curves through the origin. The curve \\(y = x^3\\) rises from the third quadrant to the first quadrant, while \\(y = -x^3\\) falls from the second quadrant to the fourth quadrant. This confirms the graphical reflection of the two curves.",
            "workingOut": "\\text{Sketch both curves intersecting at } (0, 0)",
            "graphData": {
              "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\" width=\"300\" height=\"240\" style=\"display: block; margin: 0 auto; background: #fafafa; border: 1px solid #e2e8f0; border-radius: 8px;\">\n  <!-- Grid Lines -->\n  <path d=\"M 0,20 H 300 M 0,40 H 300 M 0,60 H 300 M 0,80 H 300 M 0,100 H 300 M 0,140 H 300 M 0,160 H 300 M 0,180 H 300 M 0,200 H 300 M 0,220 H 300\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n  <path d=\"M 20,0 V 240 M 40,0 V 240 M 60,0 V 240 M 80,0 V 240 M 100,0 V 240 M 120,0 V 240 M 160,0 V 240 M 180,0 V 240 M 200,0 V 240 M 220,0 V 240 M 240,0 V 240 M 260,0 V 240 M 280,0 V 240\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n  <!-- Axes -->\n  <line x1=\"10\" y1=\"120\" x2=\"290\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n  <line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n  <!-- Axes Labels -->\n  <text x=\"285\" y=\"135\" font-size=\"12\" fill=\"#64748b\" font-weight=\"bold\">x</text>\n  <text x=\"125\" y=\"15\" font-size=\"12\" fill=\"#64748b\" font-weight=\"bold\">y</text>\n  <!-- Curve y = x^3 -->\n  <path d=\"M 100,220 C 120,180 130,120 140,120 C 150,120 160,60 180,20\" fill=\"none\" stroke=\"#6366f1\" stroke-width=\"2\" />\n  <text x=\"185\" y=\"25\" font-size=\"10\" fill=\"#6366f1\" font-weight=\"bold\">y = x³</text>\n  <!-- Curve y = -x^3 -->\n  <path d=\"M 100,20 C 120,60 130,120 140,120 C 150,120 160,180 180,220\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4\" />\n  <text x=\"185\" y=\"215\" font-size=\"10\" fill=\"#ef4444\" font-weight=\"bold\">y = -x³</text>\n</svg>"
            }
          }
        ]
      }
    ],
    "isNew": true
  }
};

async function run() {
  console.log('Transforming 5D questions to MCQ subQuestions (preserving graphing parts as teacher_review with SVGs)...');
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
