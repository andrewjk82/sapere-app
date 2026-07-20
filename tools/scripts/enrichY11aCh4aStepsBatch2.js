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

// Map specific question IDs to detailed step-by-step solutions
function getStepsForQuestion(id, qText) {
  const steps = [];

  // Question 1: Solve for k: 15 - 8k > -3k - 10
  if (qText.includes('15 - 8k > -3k - 10')) {
    steps.push({
      explanation: "Start with the given linear inequality.",
      workingOut: wrapMath("15 - 8k > -3k - 10")
    });
    steps.push({
      explanation: "Add 8k to both sides of the inequality to group the variable terms on the right.",
      workingOut: wrapMath("15 > -3k + 8k - 10 \\implies 15 > 5k - 10")
    });
    steps.push({
      explanation: "Add 10 to both sides to isolate the variable term.",
      workingOut: wrapMath("15 + 10 > 5k \\implies 25 > 5k")
    });
    steps.push({
      explanation: "Divide both sides by 5 to solve for k.",
      workingOut: wrapMath("5 > k \\implies k < 5")
    });
  }

  // Question 2: Solve and write in interval notation: (2x-1)/3 >= (x+1)/4 - 1
  else if (qText.includes('2x-1') && qText.includes('x+1')) {
    steps.push({
      explanation: "Start with the fraction inequality.",
      workingOut: wrapMath("\\frac{2x-1}{3} \\ge \\frac{x+1}{4} - 1")
    });
    steps.push({
      explanation: "Multiply all terms on both sides of the inequality by the common denominator 12 to clear the fractions.",
      workingOut: wrapMath("4(2x - 1) \\ge 3(x + 1) - 12")
    });
    steps.push({
      explanation: "Expand both sides.",
      workingOut: wrapMath("8x - 4 \\ge 3x + 3 - 12 \\implies 8x - 4 \\ge 3x - 9")
    });
    steps.push({
      explanation: "Subtract 3x from both sides.",
      workingOut: wrapMath("8x - 3x - 4 \\ge -9 \\implies 5x - 4 \\ge -9")
    });
    steps.push({
      explanation: "Add 4 to both sides.",
      workingOut: wrapMath("5x \\ge -9 + 4 \\implies 5x \\ge -5")
    });
    steps.push({
      explanation: "Divide both sides by 5.",
      workingOut: wrapMath("x \\ge -1")
    });
    steps.push({
      explanation: "Write the solution in interval notation. Since the boundary is inclusive, we use a square bracket at -1.",
      workingOut: wrapMath("[-1, \\infty)")
    });
  }

  // Question 3: Solve for m: 12 - 4m < 4
  else if (qText.includes('12 - 4m < 4')) {
    steps.push({
      explanation: "Subtract 12 from both sides of the inequality.",
      workingOut: wrapMath("-4m < 4 - 12 \\implies -4m < -8")
    });
    steps.push({
      explanation: "Divide both sides by -4. Since we are dividing by a negative number, we must reverse the inequality direction from less than (<) to greater than (>).",
      workingOut: wrapMath("m > \\frac{-8}{-4}")
    });
    steps.push({
      explanation: "Simplify the division to find the final range.",
      workingOut: wrapMath("m > 2")
    });
  }

  // Question 4: Part (a): Consider y = 3x - 6. (i) Find the x-intercept. (ii) Solve 3x - 6 >= 0.
  else if (qText.includes('y = 3x - 6')) {
    steps.push({
      explanation: "To find the x-intercept, set y = 0 and solve for x.",
      workingOut: wrapMath("0 = 3x - 6 \\implies 3x = 6 \\implies x = 2")
    });
    steps.push({
      explanation: "To solve the inequality \\(3x - 6 \\ge 0\\), add 6 to both sides.",
      workingOut: wrapMath("3x \\ge 6")
    });
    steps.push({
      explanation: "Divide both sides by 3 to get the final solution.",
      workingOut: wrapMath("x \\ge 2")
    });
  }

  // Question 5: Describe the graph of: 2 <= x < 6
  else if (qText.includes('2 \\leq x < 6') || qText.includes('2 <= x < 6')) {
    steps.push({
      explanation: "Examine the left boundary point \\(x \\ge 2\\). Since this is inclusive, we place a solid (closed) circle at 2.",
      workingOut: ""
    });
    steps.push({
      explanation: "Examine the right boundary point \\(x < 6\\). Since this is exclusive, we place an open circle at 6.",
      workingOut: ""
    });
    steps.push({
      explanation: "Since x is between 2 and 6, we draw a horizontal line segment connecting the two circles.",
      workingOut: ""
    });
  }

  // Question 6: Which of the following describes the graph of x > 3 on a number line?
  else if (qText.includes('x > 3') && qText.includes('describes')) {
    steps.push({
      explanation: "An exclusive inequality like \\(x > 3\\) is represented by an open circle at 3 on the number line.",
      workingOut: ""
    });
    steps.push({
      explanation: "Because x is greater than 3, the arrow points to the right to include all numbers larger than 3.",
      workingOut: ""
    });
  }

  // Question 7: Which of the following describes the graph of x <= -2?
  else if (qText.includes('x \\leq -2') || qText.includes('x <= -2') && qText.includes('describes')) {
    steps.push({
      explanation: "An inclusive inequality like \\(x \\le -2\\) is represented by a solid (closed) circle at -2 on the number line.",
      workingOut: ""
    });
    steps.push({
      explanation: "Because x is less than or equal to -2, the arrow points to the left to include all numbers smaller than or equal to -2.",
      workingOut: ""
    });
  }

  // Question 8: Which of the following describes the graph of x >= 5?
  else if (qText.includes('x \\geq 5') || qText.includes('x >= 5') && qText.includes('describes')) {
    steps.push({
      explanation: "An inclusive inequality like \\(x \\ge 5\\) is represented by a solid (closed) circle at 5.",
      workingOut: ""
    });
    steps.push({
      explanation: "Because x is greater than or equal to 5, the arrow points to the right.",
      workingOut: ""
    });
  }

  // Question 9: Choose the correct graph for: y <= 5
  else if (qText.includes('y \\le 5') || qText.includes('y <= 5')) {
    steps.push({
      explanation: "Start by looking at the boundary condition: \\(y \\le 5\\).",
      workingOut: ""
    });
    steps.push({
      explanation: "The boundary is inclusive, which means we place a solid (closed) circle at 5.",
      workingOut: ""
    });
    steps.push({
      explanation: "The values are less than or equal to 5, so we draw an arrow pointing to the left.",
      workingOut: ""
    });
  }

  // Question 10: Choose the correct graph for: k >= -2
  else if (qText.includes('k \\ge -2') || qText.includes('k >= -2')) {
    steps.push({
      explanation: "Look at the boundary condition: \\(k \\ge -2\\).",
      workingOut: ""
    });
    steps.push({
      explanation: "Since the inequality is inclusive, we place a solid (closed) circle at -2.",
      workingOut: ""
    });
    steps.push({
      explanation: "The values are greater than or equal to -2, so we draw an arrow pointing to the right.",
      workingOut: ""
    });
  }

  return steps;
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  console.log('Enriching 10 additional questions with detailed step-by-step solutions...');
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
    console.log(`Successfully completed step enrichment for ${updatedCount} additional questions!`);
  } else {
    console.log('No matching empty questions found for enrichment.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
