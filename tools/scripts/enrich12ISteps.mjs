import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const solutions = {
  'y10-12i-q1a': [
    { explanation: "Identify the sides relative to the angle \\(\\theta\\).", workingOut: "\\(\\text{Opposite} = PR = 6\\) and \\(\\text{Adjacent} = RQ = 10\\)", graphData: null },
    { explanation: "Select the correct trigonometric ratio.", workingOut: "\\(\\tan \\theta = \\frac{\\text{Opp}}{\\text{Adj}} = \\frac{6}{10} = 0.6\\)", graphData: null },
    { explanation: "Calculate the angle using the inverse tangent function.", workingOut: "\\(\\theta = \\tan^{-1}(0.6)\\)", graphData: null },
    { explanation: "Evaluate and round to one decimal place.", workingOut: "\\(\\theta \\approx 31.0^\\circ\\)", graphData: null }
  ],
  'y10-12i-q1b': [
    { explanation: "Identify the given sides relative to the angle \\(\\theta\\).", workingOut: "\\(\\text{Hypotenuse} = 18\\) and \\(\\text{Adjacent} = 15\\)", graphData: null },
    { explanation: "Select the correct trigonometric ratio.", workingOut: "\\(\\cos \\theta = \\frac{\\text{Adj}}{\\text{Hyp}} = \\frac{15}{18}\\)", graphData: null },
    { explanation: "Calculate the angle using the inverse cosine function.", workingOut: "\\(\\theta = \\cos^{-1}\\left(\\frac{15}{18}\\right)\\)", graphData: null },
    { explanation: "Evaluate and round to one decimal place.", workingOut: "\\(\\theta \\approx 33.6^\\circ\\)", graphData: null }
  ],
  'y10-12i-q1c': [
    { explanation: "Identify the given sides relative to the \(36^\\circ\) angle.", workingOut: "\\(\\text{Hypotenuse} = 18\\) and \\(\\text{Opposite} = x\\)", graphData: null },
    { explanation: "Select the correct trigonometric ratio.", workingOut: "\\(\\sin 36^\\circ = \\frac{\\text{Opp}}{\\text{Hyp}} = \\frac{x}{18}\\)", graphData: null },
    { explanation: "Rearrange to solve for \\(x\\).", workingOut: "\\(x = 18 \\sin 36^\\circ\\)", graphData: null },
    { explanation: "Evaluate and round to two decimal places.", workingOut: "\\(x \\approx 10.58\\)", graphData: null }
  ],
  'y10-12i-q1d': [
    { explanation: "Identify the given sides relative to the \(42^\\circ\) angle.", workingOut: "\\(\\text{Opposite} = SU = x\\) and \\(\\text{Adjacent} = ST = 8\\)", graphData: null },
    { explanation: "Select the correct trigonometric ratio.", workingOut: "\\(\\tan 42^\\circ = \\frac{\\text{Opp}}{\\text{Adj}} = \\frac{x}{8}\\)", graphData: null },
    { explanation: "Rearrange to solve for \\(x\\).", workingOut: "\\(x = 8 \\tan 42^\\circ\\)", graphData: null },
    { explanation: "Evaluate and round to two decimal places.", workingOut: "\\(x \\approx 7.20\\)", graphData: null }
  ],
  'y10-12i-q2a': [
    { explanation: "Identify the sides relative to the \(30^\\circ\) angle.", workingOut: "\\(\\text{Hypotenuse} = 20\\) and \\(\\text{Opposite} = x\\)", graphData: null },
    { explanation: "Select the sine ratio.", workingOut: "\\(\\sin 30^\\circ = \\frac{x}{20}\\)", graphData: null },
    { explanation: "Use the exact value for \\(\\sin 30^\\circ\\).", workingOut: "\\(\\frac{1}{2} = \\frac{x}{20}\\)", graphData: null },
    { explanation: "Solve for \\(x\\).", workingOut: "\\(x = 20 \\times \\frac{1}{2} = 10\\)", graphData: null }
  ],
  'y10-12i-q2b': [
    { explanation: "Identify the sides relative to the \(45^\\circ\) angle.", workingOut: "\\(\\text{Adjacent} = 36\\) and \\(\\text{Opposite} = x\\)", graphData: null },
    { explanation: "Select the tangent ratio.", workingOut: "\\(\\tan 45^\\circ = \\frac{x}{36}\\)", graphData: null },
    { explanation: "Use the exact value for \\(\\tan 45^\\circ\\).", workingOut: "\\(1 = \\frac{x}{36}\\)", graphData: null },
    { explanation: "Solve for \\(x\\).", workingOut: "\\(x = 36 \\times 1 = 36\\)", graphData: null }
  ],
  'y10-12i-q2c': [
    { explanation: "Identify the sides relative to the \(60^\\circ\) angle.", workingOut: "\\(\\text{Hypotenuse} = 50\\) and \\(\\text{Adjacent} = x\\)", graphData: null },
    { explanation: "Select the cosine ratio.", workingOut: "\\(\\cos 60^\\circ = \\frac{x}{50}\\)", graphData: null },
    { explanation: "Use the exact value for \\(\\cos 60^\\circ\\).", workingOut: "\\(\\frac{1}{2} = \\frac{x}{50}\\)", graphData: null },
    { explanation: "Solve for \\(x\\).", workingOut: "\\(x = 50 \\times \\frac{1}{2} = 25\\)", graphData: null }
  ],
  'y10-12i-q3': [
    { explanation: "Use the Cosine Rule to find \\(\\angle A\\).", workingOut: "\\(\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{12^2 + 8^2 - 6^2}{2(12)(8)}\\)", graphData: null },
    { explanation: "Calculate \\(\\angle A\\).", workingOut: "\\(\\cos A = \\frac{172}{192} \\implies A \\approx 26.4^\\circ\\)", graphData: null },
    { explanation: "Use the Cosine Rule to find \\(\\angle B\\).", workingOut: "\\(\\cos B = \\frac{a^2 + c^2 - b^2}{2ac} = \\frac{6^2 + 8^2 - 12^2}{2(6)(8)} = \\frac{-44}{96} \\implies B \\approx 117.3^\\circ\\)", graphData: null },
    { explanation: "Use the angle sum of a triangle to find \\(\\angle C\\).", workingOut: "\\(\\angle C = 180^\\circ - 26.4^\\circ - 117.3^\\circ = 36.3^\\circ\\)", graphData: null }
  ],
  'y10-12i-q4a': [
    { explanation: "Let the sides be \\(a = 42.8\\), \\(b = 56.6\\), and \\(c = 72.1\\). We want to find \\(\\angle C\\).", workingOut: "\\(\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}\\)", graphData: null },
    { explanation: "Substitute the given side lengths.", workingOut: "\\(\\cos C = \\frac{42.8^2 + 56.6^2 - 72.1^2}{2(42.8)(56.6)}\\)", graphData: null },
    { explanation: "Evaluate the fraction.", workingOut: "\\(\\cos C = \\frac{1831.84 + 3203.56 - 5198.41}{4844.96} \\approx -0.03365\\)", graphData: null },
    { explanation: "Calculate the angle using inverse cosine.", workingOut: "\\(\\angle C = \\cos^{-1}(-0.03365) \\approx 92^\\circ\\)", graphData: null }
  ],
  'y10-12i-q4b': [
    { explanation: "Use the area formula for a triangle.", workingOut: "\\(\\text{Area} = \\frac{1}{2}ab \\sin C\\)", graphData: null },
    { explanation: "Substitute the side lengths and the included angle found previously.", workingOut: "\\(\\text{Area} = \\frac{1}{2}(42.8)(56.6) \\sin(91.93^\\circ)\\)", graphData: null },
    { explanation: "Calculate the sine value.", workingOut: "\\(\\text{Area} = 1211.24 \\times 0.9994\\)", graphData: null },
    { explanation: "Evaluate and round to the nearest square metre.", workingOut: "\\(\\text{Area} \\approx 1210 \\text{ m}^2\\)", graphData: null }
  ],
  'y10-12i-q5': [
    { explanation: "Apply the Sine Rule.", workingOut: "\\(\\frac{b}{\\sin B} = \\frac{a}{\\sin A}\\)", graphData: null },
    { explanation: "Substitute the given values.", workingOut: "\\(\\frac{b}{3/4} = \\frac{8}{1/8}\\)", graphData: null },
    { explanation: "Simplify the right side.", workingOut: "\\(\\frac{b}{3/4} = 64\\)", graphData: null },
    { explanation: "Multiply to solve for \\(b\\).", workingOut: "\\(b = 64 \\times \\frac{3}{4} = 48\\)", graphData: null }
  ],
  'y10-12i-q6': [
    { explanation: "Apply the Cosine Rule.", workingOut: "\\(c^2 = a^2 + b^2 - 2ab \\cos C\\)", graphData: null },
    { explanation: "Substitute the given values.", workingOut: "\\(c^2 = 5^2 + 6^2 - 2(5)(6)\\left(\\frac{1}{5}\\right)\\)", graphData: null },
    { explanation: "Simplify the expression.", workingOut: "\\(c^2 = 25 + 36 - 12 = 49\\)", graphData: null },
    { explanation: "Take the square root to find \\(c\\).", workingOut: "\\(c = \\sqrt{49} = 7\\)", graphData: null }
  ],
  'y10-12i-q7': [
    { explanation: "Use the area formula with the included angle \\(\\angle Y\\).", workingOut: "\\(\\text{Area} = \\frac{1}{2}xz \\sin Y\\)", graphData: null },
    { explanation: "Substitute the given side lengths and angle.", workingOut: "\\(\\text{Area} = \\frac{1}{2}(8.3)(6.2) \\sin 72^\\circ\\)", graphData: null },
    { explanation: "Evaluate the product.", workingOut: "\\(\\text{Area} = 25.73 \\times \\sin 72^\\circ\\)", graphData: null },
    { explanation: "Calculate and round to two decimal places.", workingOut: "\\(\\text{Area} \\approx 24.47 \\text{ cm}^2\\)", graphData: null }
  ],
  'y10-12i-q8a': [
    { explanation: "Let \\(b = 16.2\\), \\(c = 18.6\\), and \\(\\angle C = 60^\\circ\\). Use the Sine Rule to find \\(\\angle B\\).", workingOut: "\\(\\frac{\\sin B}{b} = \\frac{\\sin C}{c}\\)", graphData: null },
    { explanation: "Substitute the given values.", workingOut: "\\(\\frac{\\sin B}{16.2} = \\frac{\\sin 60^\\circ}{18.6}\\)", graphData: null },
    { explanation: "Rearrange to solve for \\(\\sin B\\).", workingOut: "\\(\\sin B = \\frac{16.2 \\sin 60^\\circ}{18.6} \\approx 0.7543\\)", graphData: null },
    { explanation: "Calculate \\(\\angle B\\) using the inverse sine function.", workingOut: "\\(\\angle B = \\sin^{-1}(0.7543) \\approx 49.0^\\circ\\)", graphData: null }
  ],
  'y10-12i-q8b': [
    { explanation: "Use the angle sum of a triangle to find \\(\\angle A\\) (which is \\(\\angle BAC\\)).", workingOut: "\\(\\angle A + \\angle B + \\angle C = 180^\\circ\\)", graphData: null },
    { explanation: "Substitute the known angles.", workingOut: "\\(\\angle A + 49.0^\\circ + 60^\\circ = 180^\\circ\\)", graphData: null },
    { explanation: "Solve for \\(\\angle A\\).", workingOut: "\\(\\angle A = 180^\\circ - 109.0^\\circ\\)", graphData: null },
    { explanation: "Evaluate the result.", workingOut: "\\(\\angle A = 71.0^\\circ\\)", graphData: null }
  ],
  'y10-12i-q8c': [
    { explanation: "Use the Sine Rule to find the length of \\(CB\\) (which is side \\(a\\)).", workingOut: "\\(\\frac{a}{\\sin A} = \\frac{c}{\\sin C}\\)", graphData: null },
    { explanation: "Substitute the known values.", workingOut: "\\(\\frac{a}{\\sin 71.0^\\circ} = \\frac{18.6}{\\sin 60^\\circ}\\)", graphData: null },
    { explanation: "Rearrange to solve for \\(a\\).", workingOut: "\\(a = \\frac{18.6 \\sin 71.0^\\circ}{\\sin 60^\\circ}\\)", graphData: null },
    { explanation: "Evaluate and round to one decimal place.", workingOut: "\\(a \\approx 20.3 \\text{ cm}\\)", graphData: null }
  ],
  'y10-12i-q8d': [
    { explanation: "Use the area formula for a triangle.", workingOut: "\\(\\text{Area} = \\frac{1}{2}bc \\sin A\\)", graphData: null },
    { explanation: "Substitute the side lengths and the included angle.", workingOut: "\\(\\text{Area} = \\frac{1}{2}(16.2)(18.6) \\sin 71.0^\\circ\\)", graphData: null },
    { explanation: "Calculate the product.", workingOut: "\\(\\text{Area} = 150.66 \\times \\sin 71.0^\\circ\\)", graphData: null },
    { explanation: "Evaluate and round to one decimal place.", workingOut: "\\(\\text{Area} \\approx 142.4 \\text{ cm}^2\\)", graphData: null }
  ],
  'y10-12i-q9': [
    { explanation: "Set up a right-angled triangle. The angle of elevation from \(B\) to \(A\) is equal to the angle of depression.", workingOut: "\\(\\angle ABX = 10^\\circ\\)", graphData: null },
    { explanation: "Identify the given sides relative to the \(10^\\circ\) angle.", workingOut: "\\(\\text{Adjacent} = BX = 800\\) and \\(\\text{Opposite} = AX\\)", graphData: null },
    { explanation: "Select the tangent ratio.", workingOut: "\\(\\tan 10^\\circ = \\frac{AX}{800}\\)", graphData: null },
    { explanation: "Rearrange and solve for \\(AX\\), rounding to the nearest metre.", workingOut: "\\(AX = 800 \\tan 10^\\circ \\approx 141 \\text{ m}\\)", graphData: null }
  ],
  'y10-12i-q10a': [
    { explanation: "First, find \\(\\angle C\\) using the angle sum of a triangle.", workingOut: "\\(\\angle C = 180^\\circ - 51^\\circ - 38^\\circ = 91^\\circ\\)", graphData: null },
    { explanation: "Use the Sine Rule to find side \\(b\\) (which is \\(AC\\)).", workingOut: "\\(\\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\)", graphData: null },
    { explanation: "Substitute the known values.", workingOut: "\\(\\frac{b}{\\sin 38^\\circ} = \\frac{7}{\\sin 91^\\circ}\\)", graphData: null },
    { explanation: "Rearrange and solve for \\(b\\).", workingOut: "\\(b = \\frac{7 \\sin 38^\\circ}{\\sin 91^\\circ} \\approx 4.31 \\text{ cm}\\)", graphData: null }
  ],
  'y10-12i-q10b': [
    { explanation: "Use the Cosine Rule to find side \\(a\\) (which is \\(BC\\)).", workingOut: "\\(a^2 = b^2 + c^2 - 2bc \\cos A\\)", graphData: null },
    { explanation: "Substitute the given values.", workingOut: "\\(a^2 = 4^2 + 6^2 - 2(4)(6) \\cos 48^\\circ\\)", graphData: null },
    { explanation: "Simplify the expression.", workingOut: "\\(a^2 = 16 + 36 - 48 \\cos 48^\\circ = 52 - 32.118 = 19.882\\)", graphData: null },
    { explanation: "Take the square root to find \\(a\\).", workingOut: "\\(a = \\sqrt{19.882} \\approx 4.46 \\text{ cm}\\)", graphData: null }
  ],
  'y10-12i-q10c': [
    { explanation: "Use the Cosine Rule to find side \\(c\\) (which is \\(AB\\)).", workingOut: "\\(c^2 = a^2 + b^2 - 2ab \\cos C\\)", graphData: null },
    { explanation: "Substitute the given values.", workingOut: "\\(c^2 = 7^2 + 10^2 - 2(7)(10) \\cos 80^\\circ\\)", graphData: null },
    { explanation: "Simplify the expression.", workingOut: "\\(c^2 = 49 + 100 - 140 \\cos 80^\\circ = 149 - 24.31 = 124.69\\)", graphData: null },
    { explanation: "Take the square root to find \\(c\\).", workingOut: "\\(c = \\sqrt{124.69} \\approx 11.17 \\text{ cm}\\)", graphData: null }
  ],
  'y10-12i-q10d': [
    { explanation: "Use the Cosine Rule to find side \\(b\\) (which is \\(AC\\)).", workingOut: "\\(b^2 = a^2 + c^2 - 2ac \\cos B\\)", graphData: null },
    { explanation: "Substitute the given values.", workingOut: "\\(b^2 = 12^2 + 10^2 - 2(12)(10) \\cos 120^\\circ\\)", graphData: null },
    { explanation: "Simplify the expression, noting that \\(\\cos 120^\\circ = -0.5\\).", workingOut: "\\(b^2 = 144 + 100 - 240(-0.5) = 244 + 120 = 364\\)", graphData: null },
    { explanation: "Take the square root to find \\(b\\).", workingOut: "\\(b = \\sqrt{364} \\approx 19.08 \\text{ cm}\\)", graphData: null }
  ],
  'y10-12i-q10e': [
    { explanation: "Use the Sine Rule to find \\(\\angle B\\).", workingOut: "\\(\\frac{\\sin B}{15} = \\frac{\\sin 31^\\circ}{8}\\)", graphData: null },
    { explanation: "Solve for \\(\\sin B\\) and find the obtuse angle for \\(\\angle B\\).", workingOut: "\\(\\sin B \\approx 0.9657 \\implies B \\approx 74.9^\\circ \\text{ or } 105.1^\\circ. \\text{ (Use } 105.1^\\circ\\text{)}\\)", graphData: null },
    { explanation: "Use the angle sum of a triangle to find \\(\\angle C\\).", workingOut: "\\(\\angle C = 180^\\circ - 31^\\circ - 105.1^\\circ\\)", graphData: null },
    { explanation: "Calculate the final angle.", workingOut: "\\(\\angle C = 43.9^\\circ\\)", graphData: null }
  ],
  'y10-12i-q10f': [
    { explanation: "Use the Cosine Rule to find side \\(c\\) (which is \\(AB\\)).", workingOut: "\\(c^2 = a^2 + b^2 - 2ab \\cos C\\)", graphData: null },
    { explanation: "Substitute the given values.", workingOut: "\\(c^2 = 25^2 + 15^2 - 2(25)(15) \\cos 18^\\circ\\)", graphData: null },
    { explanation: "Simplify the expression.", workingOut: "\\(c^2 = 625 + 225 - 750 \\cos 18^\\circ = 850 - 713.29 = 136.71\\)", graphData: null },
    { explanation: "Take the square root to find \\(c\\).", workingOut: "\\(c = \\sqrt{136.71} \\approx 11.69 \\text{ cm}\\)", graphData: null }
  ]
};

async function fix() {
  const filepath = path.resolve('src/constants/seedYear10Ch12IQuestions.js');
  const { Y10_CH12I_QUESTIONS } = await import('../../src/constants/seedYear10Ch12IQuestions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let count = 0;
  for (let q of Y10_CH12I_QUESTIONS) {
    if (solutions[q.id]) {
      q.solutionSteps = solutions[q.id];
      await db.collection('questions').doc(q.id).update({
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      count++;
    }
  }

  const fileContent = "export const Y10_CH12I_QUESTIONS = " + JSON.stringify(Y10_CH12I_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log(`Successfully updated ${count} custom solutionSteps for 12I locally and pushed to Firestore.`);
}
fix().catch(console.error);
