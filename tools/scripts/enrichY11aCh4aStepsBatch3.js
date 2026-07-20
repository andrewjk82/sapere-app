import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

function wrapMath(str) {
  if (!str) return '';
  if (str.includes('\\(') || str.includes('$$') || str.includes('$')) {
    return str;
  }
  return `\\(${str}\\)`;
}

// Map the remaining 17 questions to highly detailed step-by-step solutions
function getStepsForQuestion(id, qText) {
  const steps = [];

  // 1. Choose the correct graph for: 1 < x < 4
  if (qText.includes('1 < x < 4') && qText.includes('Choose')) {
    steps.push({
      explanation: "Start by analyzing the boundaries of the double inequality: \\(1 < x < 4\\).",
      workingOut: ""
    });
    steps.push({
      explanation: "Look at the left boundary \\(x > 1\\). Since the operator is strictly greater than (<), it is exclusive. Place an open circle at 1.",
      workingOut: ""
    });
    steps.push({
      explanation: "Look at the right boundary \\(x < 4\\). Since the operator is strictly less than (<), it is also exclusive. Place an open circle at 4.",
      workingOut: ""
    });
    steps.push({
      explanation: "Since x is bounded between 1 and 4, draw a horizontal line segment connecting the two open circles.",
      workingOut: ""
    });
  }

  // 2. Choose the correct graph for: x > 3
  else if (qText.includes('x > 3') && qText.includes('Choose')) {
    steps.push({
      explanation: "Examine the given inequality: \\(x > 3\\).",
      workingOut: ""
    });
    steps.push({
      explanation: "Since it is strictly greater than (>), the boundary value 3 is excluded. Place an open circle at 3 on the number line.",
      workingOut: ""
    });
    steps.push({
      explanation: "The values of x are larger than 3, so draw an arrow pointing to the right to represent all numbers greater than 3.",
      workingOut: ""
    });
  }

  // 3. Describe the graph of the combined inequality: -1 < x < 4
  else if (qText.includes('-1 < x < 4') && qText.includes('Describe')) {
    steps.push({
      explanation: "Observe the boundary conditions of the inequality: \\(-1 < x < 4\\).",
      workingOut: ""
    });
    steps.push({
      explanation: "At -1, the inequality is exclusive (<), so we place an open circle at -1.",
      workingOut: ""
    });
    steps.push({
      explanation: "At 4, the inequality is also exclusive (<), so we place an open circle at 4.",
      workingOut: ""
    });
    steps.push({
      explanation: "Since the variable x lies between -1 and 4, we draw a straight line segment connecting the two open circles.",
      workingOut: ""
    });
  }

  // 4. Choose the correct graph for: -3 < a <= 2
  else if (qText.includes('-3 < a \\le 2') || qText.includes('-3 < a <= 2')) {
    steps.push({
      explanation: "Look at the left boundary condition: \\(a > -3\\). Because the sign is strictly greater than, place an open circle at -3.",
      workingOut: ""
    });
    steps.push({
      explanation: "Look at the right boundary condition: \\(a \\le 2\\). Because the inequality includes equality, place a solid (closed) circle at 2.",
      workingOut: ""
    });
    steps.push({
      explanation: "Connect the open circle at -3 and the closed circle at 2 with a horizontal line segment to represent the bounded range.",
      workingOut: ""
    });
  }

  // 5. Solve the double inequation: 4 < x + 3 < 9
  else if (qText.includes('4 < x + 3 < 9') || qText.includes('4 < x + 3 < 9')) {
    steps.push({
      explanation: "Start with the given double inequation.",
      workingOut: wrapMath("4 < x + 3 < 9")
    });
    steps.push({
      explanation: "Subtract 3 from all parts of the inequality to isolate x.",
      workingOut: wrapMath("4 - 3 < x < 9 - 3")
    });
    steps.push({
      explanation: "Simplify the values to get the final solution range.",
      workingOut: wrapMath("1 < x < 6")
    });
  }

  // 6. Solve and express in interval notation: -8 <= 7 - 5x < 2
  else if (qText.includes('-8 \\le 7 - 5x < 2') || qText.includes('-8 <= 7 - 5x < 2')) {
    steps.push({
      explanation: "Start with the compound inequality.",
      workingOut: wrapMath("-8 \\le 7 - 5x < 2")
    });
    steps.push({
      explanation: "Subtract 7 from all parts of the inequality to isolate the term with x.",
      workingOut: wrapMath("-8 - 7 \\le -5x < 2 - 7 \\implies -15 \\le -5x < -5")
    });
    steps.push({
      explanation: "Divide all parts by -5. Since you are dividing by a negative number, you must reverse the direction of both inequality signs.",
      workingOut: wrapMath("\\frac{-15}{-5} \\ge x > \\frac{-5}{-5} \\implies 3 \\ge x > 1")
    });
    steps.push({
      explanation: "Rewrite the inequality with the smaller value on the left.",
      workingOut: wrapMath("1 < x \\le 3")
    });
    steps.push({
      explanation: "Write the solution range in interval notation. We use parenthesis `(` for exclusive and square bracket `]` for inclusive.",
      workingOut: wrapMath("(1, 3]")
    });
  }

  // 7. Solve the double inequation: -6 < y - 4 <= 5
  else if (qText.includes('-6 < y - 4 \\le 5') || qText.includes('-6 < y - 4 <= 5')) {
    steps.push({
      explanation: "Start with the double inequation.",
      workingOut: wrapMath("-6 < y - 4 \\le 5")
    });
    steps.push({
      explanation: "Add 4 to all parts of the inequality to isolate y.",
      workingOut: wrapMath("-6 + 4 < y \\le 5 + 4")
    });
    steps.push({
      explanation: "Simplify the addition results.",
      workingOut: wrapMath("-2 < y \\le 9")
    });
  }

  // 8. Solve: -2x >= -10
  else if (qText.includes('-2x \\ge -10') || qText.includes('-2x >= -10')) {
    steps.push({
      explanation: "Start with the given inequality.",
      workingOut: wrapMath("-2x \\ge -10")
    });
    steps.push({
      explanation: "Divide both sides by -2 to isolate x. Since you are dividing by a negative number, you must reverse the inequality sign from \\(\\ge\\) to \\(\\le\\).",
      workingOut: wrapMath("x \\le \\frac{-10}{-2}")
    });
    steps.push({
      explanation: "Simplify the division on the right side.",
      workingOut: wrapMath("x \\le 5")
    });
  }

  // 9. Part (b): For y = 3x - 2 and y = 4 - x, (i) find the intersection and (ii) solve 3x - 2 < 4 - x
  else if (qText.includes('y = 3x - 2') && qText.includes('y = 4 - x')) {
    steps.push({
      explanation: "To find the point of intersection, set the two equations equal to each other.",
      workingOut: wrapMath("3x - 2 = 4 - x")
    });
    steps.push({
      explanation: "Add x to both sides and add 2 to both sides to group terms.",
      workingOut: wrapMath("4x = 6 \\implies x = 1.5")
    });
    steps.push({
      explanation: "Substitute x = 1.5 into either equation to find the corresponding y value.",
      workingOut: wrapMath("y = 4 - 1.5 = 2.5 \\implies (1.5, 2.5)")
    });
    steps.push({
      explanation: "To solve the inequality \\(3x - 2 < 4 - x\\), follow the same steps to group the variable.",
      workingOut: wrapMath("4x < 6 \\implies x < 1.5")
    });
  }

  // 10. For y = 8 - 4x, for what values of x is 8 - 4x > 0?
  else if (qText.includes('8 - 4x > 0')) {
    steps.push({
      explanation: "Start with the inequality.",
      workingOut: wrapMath("8 - 4x > 0")
    });
    steps.push({
      explanation: "Add 4x to both sides to make the coefficient of x positive.",
      workingOut: wrapMath("8 > 4x")
    });
    steps.push({
      explanation: "Divide both sides by 4.",
      workingOut: wrapMath("2 > x \\implies x < 2")
    });
  }

  // 11. Solve: -2 <= 3k <= 4
  else if (qText.includes('-2 \\le 3k \\le 4') || qText.includes('-2 <= 3k <= 4')) {
    steps.push({
      explanation: "Start with the inequality.",
      workingOut: wrapMath("-2 \\le 3k \\le 4")
    });
    steps.push({
      explanation: "Divide all parts of the inequality by 3 to isolate k.",
      workingOut: wrapMath("-\\frac{2}{3} \\le k \\le \\frac{4}{3}")
    });
  }

  // 12. Solve for a: -a <= 4
  else if (qText.includes('-a \\le 4') || qText.includes('-a <= 4')) {
    steps.push({
      explanation: "Start with the inequality.",
      workingOut: wrapMath("-a \\le 4")
    });
    steps.push({
      explanation: "Multiply both sides by -1 to solve for a. Since you are multiplying by a negative number, the inequality sign must be reversed.",
      workingOut: wrapMath("a \\ge -4")
    });
  }

  // 13. Describe the graph of: -4 <= x <= 2
  else if (qText.includes('-4 \\le x \\le 2') || qText.includes('-4 <= x <= 2')) {
    steps.push({
      explanation: "Look at the left boundary: \\(x \\ge -4\\) (inclusive). Place a solid circle at -4.",
      workingOut: ""
    });
    steps.push({
      explanation: "Look at the right boundary: \\(x \\le 2\\) (inclusive). Place a solid circle at 2.",
      workingOut: ""
    });
    steps.push({
      explanation: "Connect the two solid circles with a straight line segment to represent the range.",
      workingOut: ""
    });
  }

  return steps;
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  console.log('Enriching final batch of questions in Chapter 4A with detailed step-by-step solutions...');
  let updatedCount = 0;
  const batch = db.batch();

  snap.forEach(d => {
    const data = d.data();
    const qText = data.question || '';
    const existingSteps = data.solutionSteps || [];

    if (existingSteps.length <= 1) {
      const generated = getStepsForQuestion(d.id, qText);
      if (generated.length > 0) {
        console.log(`Enriching steps for ${d.id}: "${qText.slice(0, 55)}..."`);
        batch.update(d.ref, {
          solutionSteps: generated
        });
        updatedCount++;
      }
    }
  });

  if (updatedCount > 0) {
    const questionsMetaRef = db.doc('sync_meta/questions');
    const now = Date.now();
    batch.update(questionsMetaRef, {
      version: now,
      membershipVersion: now,
      updatedAt: FieldValue.serverTimestamp()
    });

    await batch.commit();
    console.log(`Successfully completed step enrichment for all remaining ${updatedCount} questions!`);
  } else {
    console.log('No remaining empty questions found.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
