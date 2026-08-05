const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const questionsToUpdate = [
    'y9-11h-q1a', 'y9-11h-q1b', 'y9-11h-q1c', 
    'y9-11h-q1d', 'y9-11h-q1e', 'y9-11h-q1f', 
    'y9-11h-q1g', 'y9-11h-q1h', 'y9-11h-q1i'
  ];

  for (const qId of questionsToUpdate) {
    const docRef = db.collection('questions').doc(qId);
    const doc = await docRef.get();
    
    if (!doc.exists) {
      console.log(`Missing ${qId}, skipping.`);
      continue;
    }

    const data = doc.data();
    
    // Parse coordinates and r^2 from the question text
    // "question": "Test whether or not the point with the coordinates \\((5, 0)\\) lies on the circle \\(x^2 + y^2 = 25\\). Enter 'Yes' or 'No'."
    const pointMatch = data.question.match(/coordinates\s*\\\\\(\(([^,]+),\s*([^)]+)\)\\\\\)/) || 
                       data.question.match(/coordinates\s*\\\(\(([^,]+),\s*([^)]+)\)\\\)/) ||
                       data.question.match(/coordinates\s*\(\(([^,]+),\s*([^)]+)\)\)/);
                       
    const eqMatch = data.question.match(/x\^2 \+ y\^2 = (\d+)/);

    if (!pointMatch || !eqMatch) {
      console.log(`Could not parse ${qId}: ${data.question}`);
      continue;
    }

    const xStr = pointMatch[1];
    const yStr = pointMatch[2];
    const rSq = parseInt(eqMatch[1], 10);
    const r = Math.sqrt(rSq);

    // Evaluate the point mathematically. To do this, we need to parse fractions and surds.
    // e.g., 5\sqrt{2} -> 5 * sqrt(2)
    // \frac{5\sqrt{2}}{2} -> (5 * sqrt(2)) / 2
    const parseMath = (str) => {
      let s = str.replace(/\\frac{([^}]+)}{([^}]+)}/g, '($1)/($2)');
      s = s.replace(/\\sqrt{([^}]+)}/g, 'Math.sqrt($1)');
      // If there's a number directly before Math.sqrt, add a multiplication sign
      s = s.replace(/(\d)Math\.sqrt/g, '$1*Math.sqrt');
      // If there's a minus sign at the front, handle it
      return eval(s);
    };

    let px, py;
    try {
      px = parseMath(xStr);
      py = parseMath(yStr);
    } catch (e) {
      console.log(`Failed to evaluate math for ${qId}: x=${xStr}, y=${yStr}`);
      continue;
    }

    // Determine if it lies on the circle
    // Allow small floating point error
    const isYes = Math.abs((px * px + py * py) - rSq) < 0.001;
    const answerStr = isYes ? "Yes" : "No";

    // SVG Generation
    // viewBox based on radius, give some padding. Let's say padding = 2
    const bound = Math.ceil(Math.max(r, Math.abs(px), Math.abs(py))) + 2;
    const viewBox = `-${bound} -${bound} ${bound*2} ${bound*2}`;
    
    // Grid lines for SVG
    let gridLines = '';
    for (let i = -bound; i <= bound; i++) {
      gridLines += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05" />`;
      gridLines += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05" />`;
    }

    // We flip Y for math coords
    const svgContent = `
<div style="display: flex; justify-content: center; align-items: center; margin: 10px 0;">
<svg width="300" height="300" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1, -1)">
    ${gridLines}
    <!-- Axes -->
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.1" />
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.1" />
    
    <!-- Circle -->
    <circle cx="0" cy="0" r="${r}" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.08" />
    
    <!-- Point P -->
    <circle cx="${px}" cy="${py}" r="0.15" fill="#ef4444" />
  </g>
  
  <text x="${px + 0.3}" y="${-py - 0.3}" font-size="0.6" font-family="sans-serif" fill="#ef4444">(${xStr}, ${yStr})</text>
  <text x="0.3" y="${-r + 0.5}" font-size="0.6" fill="#4f46e5" font-family="sans-serif">x² + y² = ${rSq}</text>
</svg>
</div>
`;

    // Solution steps
    // Step 1: Substitute
    let step1X = xStr;
    let step1Y = yStr;
    if (xStr.includes('-') && !xStr.startsWith('\\frac')) step1X = `(${xStr})`;
    if (yStr.includes('-') && !yStr.startsWith('\\frac')) step1Y = `(${yStr})`;
    
    const steps = [
      {
        "explanation": `Substitute the coordinates \\(x = ${xStr}\\) and \\(y = ${yStr}\\) into the left-hand side of the circle's equation, \\(x^2 + y^2\\).`,
        "workingOut": `\\(x^2 + y^2 = ${step1X}^2 + ${step1Y}^2\\)`
      },
      {
        "explanation": "Calculate the squares.",
        "workingOut": `\\(= ${(px*px).toPrecision(4).replace(/\\.0+$/,'')} + ${(py*py).toPrecision(4).replace(/\\.0+$/,'')}\\)`
      },
      {
        "explanation": "Add the values together and compare the sum to the radius squared from the equation (which is " + rSq + ").",
        "workingOut": `\\(= ${(px*px + py*py).toPrecision(4).replace(/\\.0+$/,'')} \\quad ${isYes ? '=' : '\\neq'} \\quad ${rSq}\\)`
      },
      {
        "explanation": isYes 
          ? `Since the result equals ${rSq}, the point DOES lie on the circle.` 
          : `Since the result does not equal ${rSq}, the point DOES NOT lie on the circle.`,
        "workingOut": `\\text{Answer: } ${answerStr}`
      }
    ];

    await docRef.update({
      opts: ["Yes", "No"],
      answer: answerStr,
      solution: "", // clear old dummy solution
      solutionSteps: steps,
      graphData: { html: svgContent },
      updatedAt: FieldValue.serverTimestamp()
    });
    
    console.log(`Updated ${qId} -> ${answerStr}`);
  }

  console.log("Batch update completed.");
  process.exit(0);
}

run().catch(console.error);
