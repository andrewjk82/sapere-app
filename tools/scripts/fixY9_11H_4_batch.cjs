const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const questionsToUpdate = [
    'y9-11h-q4a', 'y9-11h-q4b', 'y9-11h-q4c', 
    'y9-11h-q4d', 'y9-11h-q4e', 'y9-11h-q4f', 
    'y9-11h-q4g', 'y9-11h-q4h', 'y9-11h-q4i'
  ];

  function formatSurd(n) {
    for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
      if (n % (i * i) === 0) {
        const remainder = n / (i * i);
        if (remainder === 1) return i.toString(); // Perfect square
        return `${i}√${remainder}`;
      }
    }
    return `√${n}`;
  }

  function formatSurdLatex(n) {
    for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
      if (n % (i * i) === 0) {
        const remainder = n / (i * i);
        if (remainder === 1) return i.toString(); // Perfect square
        return `${i}\\sqrt{${remainder}}`;
      }
    }
    return `\\sqrt{${n}}`;
  }

  for (const qId of questionsToUpdate) {
    const docRef = db.collection('questions').doc(qId);
    const doc = await docRef.get();
    
    if (!doc.exists) {
      console.log(`Missing ${qId}, skipping.`);
      continue;
    }

    const data = doc.data();
    
    let eqMatch = data.question.match(/\\\((.*?)\\\)/);
    if (!eqMatch) continue;
    let eq = eqMatch[1].trim();

    let rSq = null;
    let rearrangeStep = null;
    if (eq.includes('x^2 + y^2 =')) {
      rSq = parseInt(eq.split('=')[1].trim());
    } else if (eq.includes('- x^2')) {
      rSq = parseInt(eq.split('=')[1].split('-')[0].trim());
      rearrangeStep = `y^2 = ${rSq} - x^2 \\implies x^2 + y^2 = ${rSq}`;
    } else if (eq.includes('- y^2')) {
      rSq = parseInt(eq.split('=')[1].split('-')[0].trim());
      rearrangeStep = `x^2 = ${rSq} - y^2 \\implies x^2 + y^2 = ${rSq}`;
    }

    if (!rSq) {
      console.log(`Could not parse rSq for ${qId}: ${eq}`);
      continue;
    }

    const labelLatex = formatSurdLatex(rSq);
    const labelPlain = formatSurd(rSq);

    const steps = [];

    if (rearrangeStep) {
      steps.push({
        "explanation": "First, rearrange the equation into the standard form of a circle, \\(x^2 + y^2 = r^2\\).",
        "workingOut": `\\(${rearrangeStep}\\)`
      });
    }

    steps.push({
      "explanation": "Identify the radius squared (\\(r^2\\)) and compute the radius (\\(r\\)) by taking the square root.",
      "workingOut": `\\(r^2 = ${rSq} \\implies r = ${labelLatex}\\)`
    });

    steps.push({
      "explanation": "Since the circle is centered at the origin \\((0,0)\\), the intercepts are simply at a distance of \\(r\\) along the axes.",
      "workingOut": `\\text{x-intercepts: } (\\pm ${labelLatex}, 0) \\quad \\text{y-intercepts: } (0, \\pm ${labelLatex})`
    });

    steps.push({
      "explanation": "Sketch the circle passing through these four intercepts.",
      "workingOut": "\\text{See the completed sketch below:}"
    });

    // SVG Drawing (drawn at abstract scale r=5, bound=8)
    const bound = 8;
    const rSvg = 5;
    let gridLines = '';
    for (let i = -bound; i <= bound; i++) {
      gridLines += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05" />`;
      gridLines += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05" />`;
    }

    const svgContent = `
<div style="display: flex; justify-content: center; align-items: center; margin: 10px 0;">
<svg width="350" height="350" viewBox="${-bound} ${-bound} ${bound*2} ${bound*2}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1, -1)">
    ${gridLines}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.1" />
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.1" />
    
    <circle cx="0" cy="0" r="${rSvg}" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.1" />
    
    <!-- Intercept Points -->
    <circle cx="${rSvg}" cy="0" r="0.15" fill="#ef4444" />
    <circle cx="${-rSvg}" cy="0" r="0.15" fill="#ef4444" />
    <circle cx="0" cy="${rSvg}" r="0.15" fill="#ef4444" />
    <circle cx="0" cy="${-rSvg}" r="0.15" fill="#ef4444" />
  </g>
  
  <text x="${rSvg + 0.3}" y="-0.3" font-size="0.6" font-family="sans-serif" fill="#ef4444">(${labelPlain}, 0)</text>
  <text x="${-rSvg - 2.5}" y="-0.3" font-size="0.6" font-family="sans-serif" fill="#ef4444">(-${labelPlain}, 0)</text>
  <text x="0.3" y="${-rSvg - 0.3}" font-size="0.6" font-family="sans-serif" fill="#ef4444">(0, ${labelPlain})</text>
  <text x="0.3" y="${rSvg + 0.6}" font-size="0.6" font-family="sans-serif" fill="#ef4444">(0, -${labelPlain})</text>
  
  <text x="-7" y="-7" font-size="0.8" fill="#4f46e5" font-family="sans-serif">x² + y² = ${rSq}</text>
</svg>
</div>
`;

    steps[steps.length - 1].graphData = { html: svgContent };

    await docRef.update({
      solution: "",
      solutionSteps: steps,
      graphData: null, // Remove from main question
      updatedAt: FieldValue.serverTimestamp()
    });
    
    console.log(`Updated ${qId}`);
  }

  console.log("Batch update completed.");
  process.exit(0);
}

run().catch(console.error);
