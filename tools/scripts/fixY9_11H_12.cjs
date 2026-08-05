const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgContent = `
<div style="display: flex; justify-content: center; align-items: center; margin: 10px 0;">
<svg width="350" height="350" viewBox="-8 -9 16 16" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1, -1)">
    <!-- Axes -->
    <line x1="-8" y1="0" x2="8" y2="0" stroke="#94a3b8" stroke-width="0.05" />
    <line x1="0" y1="-5" x2="0" y2="8" stroke="#94a3b8" stroke-width="0.05" />
    
    <!-- Circle -->
    <circle cx="0" cy="0" r="3.464" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.08" />
    
    <!-- Triangle ABC -->
    <polygon points="0,6.928 6,-3.464 -6,-3.464" fill="#bfdbfe" fill-opacity="0.2" stroke="black" stroke-width="0.08" />
    
    <!-- Segments OX, OY -->
    <line x1="0" y1="0" x2="3" y2="1.732" stroke="#ef4444" stroke-dasharray="0.1, 0.1" stroke-width="0.05" />
    <line x1="0" y1="0" x2="0" y2="-3.464" stroke="#ef4444" stroke-dasharray="0.1, 0.1" stroke-width="0.05" />

    <!-- Vertices -->
    <circle cx="0" cy="6.928" r="0.12" fill="black" />
    <circle cx="6" cy="-3.464" r="0.12" fill="black" />
    <circle cx="-6" cy="-3.464" r="0.12" fill="black" />
    <circle cx="3" cy="1.732" r="0.1" fill="black" />
    <circle cx="0" cy="-3.464" r="0.1" fill="black" />
    <circle cx="0" cy="0" r="0.1" fill="#ef4444" />
  </g>
  
  <text x="0.3" y="-7.2" font-size="0.6" font-family="sans-serif" fill="black">A</text>
  <text x="6.2" y="3.8" font-size="0.6" font-family="sans-serif" fill="black">B(6, -y_0)</text>
  <text x="-6.6" y="3.8" font-size="0.6" font-family="sans-serif" fill="black">C(-6, -y_0)</text>
  <text x="3.2" y="-1.9" font-size="0.6" font-family="sans-serif" fill="black">X</text>
  <text x="0.2" y="4.2" font-size="0.6" font-family="sans-serif" fill="black">Y(0, -r)</text>
  <text x="-0.8" y="-0.2" font-size="0.6" font-family="sans-serif" fill="#ef4444">O</text>
</svg>
</div>
`;

  const subQuestions = [
    {
      "id": "y9-11h-q12a",
      "type": "multiple_choice",
      "question": "a) Find \\(AY\\).",
      "options": ["\\(12\\)", "\\(6\\sqrt{3}\\)", "\\(6\\sqrt{2}\\)", "\\(3\\sqrt{3}\\)"], // B
      "answer": "\\(6\\sqrt{3}\\)",
      "solutionSteps": [
        {
          "explanation": "The base \\(BC\\) of the equilateral triangle lies on the horizontal line \\(y = -y_0\\). Its length is the difference in x-coordinates.",
          "workingOut": "BC = 6 - (-6) = 12"
        },
        {
          "explanation": "For an equilateral triangle, the height \\(h\\) can be found using the formula \\(h = \\text{side} \\times \\frac{\\sqrt{3}}{2}\\). Here, the side is 12 and the height is \\(AY\\).",
          "workingOut": "AY = 12 \\times \\frac{\\sqrt{3}}{2}"
        },
        {
          "explanation": "Simplify the expression to find the height.",
          "workingOut": "AY = 6\\sqrt{3}"
        }
      ],
      "graphData": null
    },
    {
      "id": "y9-11h-q12b",
      "type": "multiple_choice",
      "question": "b) Give reasons why \\(\\Delta AXO\\) is similar to \\(\\Delta AYB\\).",
      "options": ["SAS Similarity", "SSS Similarity", "AA Similarity", "RHS Similarity"], // C
      "answer": "AA Similarity",
      "solutionSteps": [
        {
          "explanation": "First, consider the angle at \\(X\\) and \\(Y\\). \\(OX\\) is the radius to the tangent \\(AB\\), so \\(\\angle AXO = 90^\\circ\\). \\(AY\\) is the altitude to the base \\(BC\\), so \\(\\angle AYB = 90^\\circ\\).",
          "workingOut": "\\angle AXO = \\angle AYB = 90^\\circ"
        },
        {
          "explanation": "Next, notice that both triangles share the angle at \\(A\\).",
          "workingOut": "\\angle XAO = \\angle YAB \\quad \\text{(Common angle)}"
        },
        {
          "explanation": "Since two pairs of corresponding angles are equal, the triangles are similar by the AA (Angle-Angle) Similarity criterion.",
          "workingOut": "\\Delta AXO \\sim \\Delta AYB \\quad \\text{by AA Similarity}"
        }
      ],
      "graphData": null
    },
    {
      "id": "y9-11h-q12c",
      "type": "multiple_choice",
      "question": "c) Find \\(OX\\) and hence find the equation of the circle.",
      "options": ["\\(2\\sqrt{3}, \\ x^2 + y^2 = 24\\)", "\\(4, \\ x^2 + y^2 = 16\\)", "\\(3\\sqrt{2}, \\ x^2 + y^2 = 18\\)", "\\(2\\sqrt{3}, \\ x^2 + y^2 = 12\\)"], // D
      "answer": "\\(2\\sqrt{3}, \\ x^2 + y^2 = 12\\)",
      "solutionSteps": [
        {
          "explanation": "Since \\(\\Delta AXO \\sim \\Delta AYB\\), the ratio of their corresponding sides is equal.",
          "workingOut": "\\frac{OX}{YB} = \\frac{AO}{AB}"
        },
        {
          "explanation": "Let \\(r\\) be the radius of the circle, so \\(OX = r\\). Note that \\(YB = 6\\), \\(AB = 12\\), and \\(AO = AY - OY = 6\\sqrt{3} - r\\). Substitute these values into the ratio.",
          "workingOut": "\\frac{r}{6} = \\frac{6\\sqrt{3} - r}{12}"
        },
        {
          "explanation": "Solve the equation for \\(r\\).",
          "workingOut": "12r = 6(6\\sqrt{3} - r) \\implies 2r = 6\\sqrt{3} - r \\implies 3r = 6\\sqrt{3} \\implies r = 2\\sqrt{3}"
        },
        {
          "explanation": "The radius is \\(2\\sqrt{3}\\). The equation of a circle centered at the origin is \\(x^2 + y^2 = r^2\\).",
          "workingOut": "x^2 + y^2 = (2\\sqrt{3})^2 = 12"
        }
      ],
      "graphData": null
    }
  ];

  await db.collection('questions').doc('y9-11h-q12').update({
    solution: "", // Remove redundant root solution
    graphData: { html: svgContent },
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11h-q12 successfully.");
  process.exit(0);
}

run().catch(console.error);
