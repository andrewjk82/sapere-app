const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgContent = `
<div style="display: flex; justify-content: center; align-items: center; margin: 10px 0;">
<svg width="350" height="350" viewBox="-8 -8 16 16" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1, -1)">
    <!-- Axes -->
    <line x1="-8" y1="0" x2="8" y2="0" stroke="#94a3b8" stroke-width="0.05" />
    <line x1="0" y1="-8" x2="0" y2="8" stroke="#94a3b8" stroke-width="0.05" />
    
    <!-- Circle -->
    <circle cx="0" cy="0" r="6" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.08" />
    
    <!-- Triangle ABC -->
    <polygon points="0,6 5.196,-3 -5.196,-3" fill="#bfdbfe" fill-opacity="0.2" stroke="black" stroke-width="0.08" />
    
    <!-- Vertices -->
    <circle cx="0" cy="6" r="0.12" fill="black" />
    <circle cx="5.196" cy="-3" r="0.12" fill="black" />
    <circle cx="-5.196" cy="-3" r="0.12" fill="black" />
  </g>
  
  <text x="1.5" y="-6.2" font-size="0.7" fill="#4f46e5" font-family="sans-serif">x² + y² = 36</text>
  
  <text x="0.3" y="-5.7" font-size="0.6" font-family="sans-serif" fill="black">A(0, 6)</text>
  <text x="5.4" y="3.3" font-size="0.6" font-family="sans-serif" fill="black">B(a, -3)</text>
  <text x="-7.4" y="3.3" font-size="0.6" font-family="sans-serif" fill="black">C(-a, -3)</text>
</svg>
</div>
`;

  const subQuestions = [
    {
      "id": "y9-11h-q11a",
      "type": "multiple_choice",
      "question": "a) Find the value of \\(a\\).",
      "options": ["\\(3\\sqrt{3}\\)", "\\(3\\sqrt{2}\\)", "\\(6\\)", "\\(9\\)"],
      "answer": "\\(3\\sqrt{3}\\)",
      "solutionSteps": [
        {
          "explanation": "Since point \\(B(a, -3)\\) lies on the circle \\(x^2 + y^2 = 36\\), we can substitute \\(x = a\\) and \\(y = -3\\) into the equation.",
          "workingOut": "\\(a^2 + (-3)^2 = 36\\)"
        },
        {
          "explanation": "Simplify the equation.",
          "workingOut": "\\(a^2 + 9 = 36\\)"
        },
        {
          "explanation": "Solve for \\(a^2\\).",
          "workingOut": "\\(a^2 = 27\\)"
        },
        {
          "explanation": "Take the square root of both sides. Since the problem states \\(a > 0\\), we take the positive root.",
          "workingOut": "\\(a = \\sqrt{27} = 3\\sqrt{3}\\)"
        }
      ],
      "graphData": null
    },
    {
      "id": "y9-11h-q11b",
      "type": "multiple_choice",
      "question": "b) Find the distance \\(AB\\).",
      "options": ["\\(6\\sqrt{3}\\)", "\\(6\\sqrt{2}\\)", "\\(9\\)", "\\(12\\)"],
      "answer": "\\(6\\sqrt{3}\\)",
      "solutionSteps": [
        {
          "explanation": "We need to find the distance between \\(A(0, 6)\\) and \\(B(3\\sqrt{3}, -3)\\). Use the distance formula: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
          "workingOut": "\\(AB = \\sqrt{(3\\sqrt{3} - 0)^2 + (-3 - 6)^2}\\)"
        },
        {
          "explanation": "Simplify the terms inside the square root.",
          "workingOut": "\\(AB = \\sqrt{(3\\sqrt{3})^2 + (-9)^2}\\)"
        },
        {
          "explanation": "Calculate the squares.",
          "workingOut": "\\(AB = \\sqrt{27 + 81}\\)"
        },
        {
          "explanation": "Add and simplify the surd.",
          "workingOut": "\\(AB = \\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}\\)"
        }
      ],
      "graphData": null
    },
    {
      "id": "y9-11h-q11c",
      "type": "multiple_choice",
      "question": "c) Find the distance \\(BC\\).",
      "options": ["\\(6\\sqrt{3}\\)", "\\(6\\sqrt{2}\\)", "\\(3\\sqrt{3}\\)", "\\(9\\)"],
      "answer": "\\(6\\sqrt{3}\\)",
      "solutionSteps": [
        {
          "explanation": "We need to find the distance between \\(B(3\\sqrt{3}, -3)\\) and \\(C(-3\\sqrt{3}, -3)\\). Since they have the same y-coordinate, the line is horizontal.",
          "workingOut": "\\(BC = |x_2 - x_1|\\)"
        },
        {
          "explanation": "Subtract the x-coordinates.",
          "workingOut": "\\(BC = 3\\sqrt{3} - (-3\\sqrt{3})\\)"
        },
        {
          "explanation": "Simplify the result.",
          "workingOut": "\\(BC = 3\\sqrt{3} + 3\\sqrt{3} = 6\\sqrt{3}\\)"
        }
      ],
      "graphData": null
    },
    {
      "id": "y9-11h-q11d",
      "type": "multiple_choice",
      "question": "d) What type of triangle is \\(\\Delta ABC\\)?",
      "options": ["Equilateral", "Right Isosceles", "Scalene", "Obtuse Isosceles"],
      "answer": "Equilateral",
      "solutionSteps": [
        {
          "explanation": "From the previous parts, we know that \\(AB = 6\\sqrt{3}\\) and \\(BC = 6\\sqrt{3}\\). Due to the symmetry of the coordinates of A, B, and C around the y-axis, \\(AC\\) will be equal to \\(AB\\).",
          "workingOut": "\\(AC = AB = 6\\sqrt{3}\\)"
        },
        {
          "explanation": "Since all three sides of \\(\\Delta ABC\\) are equal, it is an equilateral triangle.",
          "workingOut": "\\(AB = BC = AC = 6\\sqrt{3} \\implies \\text{Equilateral}\\)"
        }
      ],
      "graphData": null
    }
  ];

  await db.collection('questions').doc('y9-11h-q11').update({
    graphData: { html: svgContent },
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11h-q11 successfully.");
  process.exit(0);
}

run().catch(console.error);
