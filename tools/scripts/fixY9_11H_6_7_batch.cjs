const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─────────────────────────────────────────────────────────────────
  // Q6 type: "Find the equation of circle passing through point (x, y)"
  // Strategy: substitute the point directly → r² = x² + y²
  // ─────────────────────────────────────────────────────────────────
  const q6Ids = [
    'y9-11h-q6a', 'y9-11h-q6b', 'y9-11h-q6c', 'y9-11h-q6d',
    'y9-11h-q6e', 'y9-11h-q6f', 'y9-11h-q6g', 'y9-11h-q6h',
    'y9-11h-q6i', 'y9-11h-q6j', 'y9-11h-q6k', 'y9-11h-q6l'
  ];

  for (const qId of q6Ids) {
    const docRef = db.collection('questions').doc(qId);
    const doc = await docRef.get();
    if (!doc.exists) { console.log(`Missing ${qId}`); continue; }
    const data = doc.data();

    // Extract point (x, y) — Firestore stores single-backslash: \((x, y)\)
    const pointMatch = data.question.match(/through the point\s*\\\(\(([^,]+),\s*([^)]+)\)\\\)/);
    if (!pointMatch) { console.log(`No point match for ${qId}: ${data.question}`); continue; }

    const rawX = pointMatch[1].trim(); // e.g. "2", "-3", "3\\sqrt{2}"
    const rawY = pointMatch[2].trim();

    // Compute numeric values for r²
    const evalMath = (s) => {
      let r = s.replace(/\\\\/g, '').replace(/\\sqrt\{(\d+)\}/g, (_, n) => `Math.sqrt(${n})`);
      r = r.replace(/(\d)Math\.sqrt/, '$1*Math.sqrt');
      // eslint-disable-next-line no-eval
      return eval(r);
    };

    let xVal, yVal;
    try { xVal = evalMath(rawX); yVal = evalMath(rawY); }
    catch (e) { console.log(`Eval failed for ${qId}: ${rawX}, ${rawY}`); continue; }

    const rSq = Math.round(xVal * xVal + yVal * yVal);

    // Build xStr and yStr for display — clean up latex for rendering
    const displayX = rawX.replace(/\\\\/g, '\\');
    const displayY = rawY.replace(/\\\\/g, '\\');

    // Format x² and y² calculations (showing negative squared)
    const xNeg = rawX.includes('-');
    const yNeg = rawY.includes('-');
    const xPart = xNeg ? `(${displayX})^2 = ${Math.round(xVal*xVal)}` : `(${displayX})^2 = ${Math.round(xVal*xVal)}`;
    const yPart = yNeg ? `(${displayY})^2 = ${Math.round(yVal*yVal)}` : `(${displayY})^2 = ${Math.round(yVal*yVal)}`;

    const steps = [
      {
        explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\), where \\(r\\) is the radius.",
        workingOut: "\\(x^2 + y^2 = r^2\\)"
      },
      {
        explanation: `Since the circle passes through the point \\((${displayX}, ${displayY})\\), the distance from the origin to this point equals the radius \\(r\\). We can find \\(r^2\\) by substituting the coordinates into the left-hand side of the equation.`,
        workingOut: `\\(r^2 = x^2 + y^2 = (${displayX})^2 + (${displayY})^2\\)`
      },
      {
        explanation: "Calculate each term. (Remember: squaring a negative number gives a positive result.)",
        workingOut: `\\(r^2 = ${xPart.split('=')[1].trim()} + ${yPart.split('=')[1].trim()} = ${rSq}\\)`
      },
      {
        explanation: "Substitute \\(r^2\\) into the standard equation to state the final answer.",
        workingOut: `\\(x^2 + y^2 = ${rSq}\\)`
      }
    ];

    // Fix answer field: convert index "1" to text value
    const opts = data.opts || data.options || [];
    let answerText = `\\(x^2 + y^2 = ${rSq}\\)`;

    await docRef.update({
      solution: "",
      solutionSteps: steps,
      answer: answerText,
      options: [`\\(x^2 + y^2 = ${rSq}\\)`, `\\(-x^2 + y^2 = ${rSq}\\)`, `\\(x^2 + y^2 = ${rSq + 1}\\)`, `\\(x^3 + y^3 = ${rSq + 10}\\)`],
      opts: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });

    console.log(`Updated ${qId} → r² = ${rSq}`);
  }

  // ─────────────────────────────────────────────────────────────────
  // Q7 type: "Find the equation of circle with diameter d"
  // Strategy: r = d/2, then r² = (d/2)²
  // ─────────────────────────────────────────────────────────────────
  const q7Ids = [
    'y9-11h-q7a', 'y9-11h-q7b', 'y9-11h-q7c', 'y9-11h-q7d', 'y9-11h-q7e'
  ];

  for (const qId of q7Ids) {
    const docRef = db.collection('questions').doc(qId);
    const doc = await docRef.get();
    if (!doc.exists) { console.log(`Missing ${qId}`); continue; }
    const data = doc.data();

    const dMatch = data.question.match(/diameter\s*\\\(([^)]+)\\\)/);
    if (!dMatch) { console.log(`No diameter match for ${qId}: ${data.question}`); continue; }

    const d = parseInt(dMatch[1], 10);
    const r = d / 2;
    const rSq = r * r;

    const steps = [
      {
        explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\), where \\(r\\) is the **radius**. The question gives us the **diameter** \\(d\\), so we must first find the radius.",
        workingOut: "\\(x^2 + y^2 = r^2\\)"
      },
      {
        explanation: "The radius is always half the diameter. Divide the diameter by 2.",
        workingOut: `\\(r = \\dfrac{d}{2} = \\dfrac{${d}}{2} = ${r}\\)`
      },
      {
        explanation: "Now square the radius to find \\(r^2\\).",
        workingOut: `\\(r^2 = (${r})^2 = ${rSq}\\)`
      },
      {
        explanation: "Substitute \\(r^2\\) into the standard equation to state the final answer.",
        workingOut: `\\(x^2 + y^2 = ${rSq}\\)`
      }
    ];

    await docRef.update({
      solution: "",
      solutionSteps: steps,
      answer: `\\(x^2 + y^2 = ${rSq}\\)`,
      options: [`\\(x^2 + y^2 = ${rSq}\\)`, `\\(-x^2 + y^2 = ${rSq}\\)`, `\\(x^2 + y^2 = ${rSq + 1}\\)`, `\\(x^3 + y^3 = ${rSq}\\)`],
      opts: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });

    console.log(`Updated ${qId} → d=${d}, r=${r}, r²=${rSq}`);
  }

  console.log("All done.");
  process.exit(0);
}

run().catch(console.error);
