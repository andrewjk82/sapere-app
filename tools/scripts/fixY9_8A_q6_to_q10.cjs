const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function getQ6(text) {
    const match = text.match(/\\\((.*?)\\\)/);
    if (!match) return null;
    const expr = match[1].replace(/\\times/g, '*').replace(/\s/g, '');
    const termRegex = /(?:(\d+)?([a-zA-Z])\^\{?(\d+)\}?([a-zA-Z])\^\{?(\d+)\}?|(\d+)?([a-zA-Z])\^\{?(\d+)\}?([a-zA-Z])\^\{?(\d+)\}?)/g;
    
    // Simpler regex for terms like 3a^4b^2
    const extractTerm = (str) => {
       const m = str.match(/(\d+)?([a-zA-Z])\^?\{?(\d+)?\}?([a-zA-Z])\^?\{?(\d+)?\}?/);
       if (!m) return null;
       return {
         c: parseInt(m[1] || 1),
         v1: m[2], p1: parseInt(m[3] || 1),
         v2: m[4], p2: parseInt(m[5] || 1)
       };
    };

    const parts = expr.split('*');
    const t1 = extractTerm(parts[0]);
    const t2 = extractTerm(parts[1]);
    
    if (!t1 || !t2) return null;

    const coeff = t1.c * t2.c;
    const p1 = t1.p1 + t2.p1;
    const p2 = t1.p2 + t2.p2;
    const correct = `\\(${coeff === 1 ? '' : coeff}${t1.v1}^{${p1}}${t1.v2}^{${p2}}\\)`;

    let rawOpts = [
      { text: correct, isCorrect: true },
      { text: `\\(${coeff === 1 ? '' : coeff}${t1.v1}^{${t1.p1 * t2.p1}}${t1.v2}^{${t1.p2 * t2.p2}}\\)`, isCorrect: false },
      { text: `\\(${t1.c + t2.c === 1 ? '' : t1.c + t2.c}${t1.v1}^{${p1}}${t1.v2}^{${p2}}\\)`, isCorrect: false },
      { text: `\\(${coeff === 1 ? '' : coeff}${t1.v1}^{${t1.p1}}${t1.v2}^{${t1.p2 + t2.p2}}\\)`, isCorrect: false }
    ];
    
    const seen = new Set(); let opts = [];
    for (let o of rawOpts) { if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); } }
    while(opts.length < 4) opts.push({ text: `\\(2${t1.v1}^{10}${t1.v2}^{10}\\)`, isCorrect: false });

    return {
      opts,
      steps: [
        { explanation: 'When multiplying terms, we multiply the coefficients (numbers) together, and we multiply the matching variables together.', workingOut: '', graphData: null },
        { explanation: 'For the variables, remember the index law: \\( x^m \\times x^n = x^{m+n} \\). We ADD the indices for the same base.', workingOut: `Multiply numbers: \\( ${t1.c} \\times ${t2.c} = ${coeff} \\)\nAdd ${t1.v1}'s powers: \\( ${t1.p1} + ${t2.p1} = ${p1} \\)\nAdd ${t1.v2}'s powers: \\( ${t1.p2} + ${t2.p2} = ${p2} \\)`, graphData: null },
        { explanation: 'Combine them all to get the final simplified term.', workingOut: correct, graphData: null }
      ]
    };
  }

  function getQ7(text) {
    const match = text.match(/\\\((.*?)\\\)/);
    if (!match) return null;
    let expr = match[1].replace(/\s/g, '');
    let t1, t2;
    if (expr.includes('\\frac')) {
       const fracMatch = expr.match(/\\frac\{(.*?)\}\{(.*?)\}/);
       t1 = fracMatch[1]; t2 = fracMatch[2];
    } else {
       const divMatch = expr.split('\\div');
       t1 = divMatch[0]; t2 = divMatch[1];
    }

    const extractTerm = (str) => {
       const m = str.match(/([\d\.]+)?([a-zA-Z])\^?\{?(\d+)?\}?/);
       if (!m) return null;
       return { c: parseFloat(m[1] || 1), v: m[2], p: parseInt(m[3] || 1) };
    };

    const num = extractTerm(t1);
    const den = extractTerm(t2);
    if (!num || !den) return null;

    const coeff = num.c / den.c;
    const p = num.p - den.p;
    
    const formatCoeff = (c) => c === 1 ? '' : c;
    const formatPower = (v, p) => p === 1 ? v : (p === 0 ? '1' : `${v}^{${p}}`);
    const correct = `\\(${formatCoeff(coeff)}${formatPower(num.v, p)}\\)`;

    let rawOpts = [
      { text: correct, isCorrect: true },
      { text: `\\(${formatCoeff(coeff)}${num.v}^{${num.p + den.p}}\\)`, isCorrect: false },
      { text: `\\(${formatCoeff(coeff)}${num.v}^{${num.p * den.p}}\\)`, isCorrect: false },
      { text: `\\(${formatCoeff(num.c - den.c)}${formatPower(num.v, p)}\\)`, isCorrect: false }
    ];
    
    const seen = new Set(); let opts = [];
    for (let o of rawOpts) { if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); } }
    while(opts.length < 4) opts.push({ text: `\\(${num.v}^{100}\\)`, isCorrect: false });

    return {
      opts,
      steps: [
        { explanation: 'When dividing terms, divide the coefficients (numbers) and use the index law for division for the variables.', workingOut: '', graphData: null },
        { explanation: 'The index law for division is \\( x^m \\div x^n = x^{m-n} \\). We SUBTRACT the indices.', workingOut: `Numbers: \\( ${num.c} \\div ${den.c} = ${coeff} \\)\nPowers of ${num.v}: \\( ${num.p} - ${den.p} = ${p} \\)`, graphData: null },
        { explanation: 'Combine them for the final answer.', workingOut: correct, graphData: null }
      ]
    };
  }

  function getQ8(text) {
    const match = text.match(/\\frac\{(.*?)\}\{(.*?)\}/);
    if (!match) return null;
    const extractTerm = (str) => {
       const m = str.match(/(\d+)?([a-zA-Z])\^?\{?(\d+)?\}?([a-zA-Z])\^?\{?(\d+)?\}?/);
       return { c: parseInt(m[1] || 1), v1: m[2], p1: parseInt(m[3] || 1), v2: m[4], p2: parseInt(m[5] || 1) };
    };
    const num = extractTerm(match[1]);
    const den = extractTerm(match[2]);

    const coeff = num.c / den.c;
    const p1 = num.p1 - den.p1;
    const p2 = num.p2 - den.p2;
    const correct = `\\(${coeff === 1 ? '' : coeff}${num.v1}^{${p1}}${num.v2}^{${p2}}\\)`;

    let rawOpts = [
      { text: correct, isCorrect: true },
      { text: `\\(${coeff === 1 ? '' : coeff}${num.v1}^{${num.p1 + den.p1}}${num.v2}^{${num.p2 + den.p2}}\\)`, isCorrect: false },
      { text: `\\(${num.c - den.c === 1 ? '' : num.c - den.c}${num.v1}^{${p1}}${num.v2}^{${p2}}\\)`, isCorrect: false },
      { text: `\\(${coeff === 1 ? '' : coeff}${num.v1}^{${p1}}${num.v2}^{${num.p2 + den.p2}}\\)`, isCorrect: false }
    ];
    
    const seen = new Set(); let opts = [];
    for (let o of rawOpts) { if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); } }
    while(opts.length < 4) opts.push({ text: `\\(2${num.v1}^{10}${num.v2}^{10}\\)`, isCorrect: false });

    return {
      opts,
      steps: [
        { explanation: 'For a fraction with variables, divide the numbers first, then apply the division index law (subtract the powers) for each matching variable.', workingOut: '', graphData: null },
        { explanation: `Divide the numbers: ${num.c} ÷ ${den.c}. Subtract the powers for ${num.v1} and ${num.v2}.`, workingOut: `\\( ${num.c} / ${den.c} = ${coeff} \\)\n\\( ${num.p1} - ${den.p1} = ${p1} \\)\n\\( ${num.p2} - ${den.p2} = ${p2} \\)`, graphData: null },
        { explanation: 'Write out the final term.', workingOut: correct, graphData: null }
      ]
    };
  }

  function getQ9(text) {
    // Simplify: \(\frac{x^{4}y^{3}}{xy} \times \frac{x^{3}y^{2}}{x^{2}}\)
    // Actually we can just hardcode a generic regex to pull all powers of x and y in num and den
    const match = text.match(/\\\((.*?)\\\)/);
    const expr = match[1];
    
    let xNum = 0, yNum = 0, xDen = 0, yDen = 0;
    
    const parts = expr.split('\\times');
    parts.forEach(part => {
      const fMatch = part.match(/\\frac\{(.*?)\}\{(.*?)\}/);
      if (fMatch) {
         // numerator
         let nx = fMatch[1].match(/x\^?\{?(\d+)\}?/); xNum += nx ? parseInt(nx[1]) : (fMatch[1].includes('x') ? 1 : 0);
         let ny = fMatch[1].match(/y\^?\{?(\d+)\}?/); yNum += ny ? parseInt(ny[1]) : (fMatch[1].includes('y') ? 1 : 0);
         // denominator
         let dx = fMatch[2].match(/x\^?\{?(\d+)\}?/); xDen += dx ? parseInt(dx[1]) : (fMatch[2].includes('x') ? 1 : 0);
         let dy = fMatch[2].match(/y\^?\{?(\d+)\}?/); yDen += dy ? parseInt(dy[1]) : (fMatch[2].includes('y') ? 1 : 0);
      }
    });

    const xp = xNum - xDen;
    const yp = yNum - yDen;
    const formatPower = (v, p) => p === 1 ? v : (p === 0 ? '' : `${v}^{${p}}`);
    const correct = `\\(${formatPower('x', xp)}${formatPower('y', yp)}\\)`;

    let rawOpts = [
      { text: correct, isCorrect: true },
      { text: `\\(${formatPower('x', xp + 2)}${formatPower('y', yp + 2)}\\)`, isCorrect: false },
      { text: `\\(${formatPower('x', xNum + xDen)}${formatPower('y', yNum + yDen)}\\)`, isCorrect: false },
      { text: `\\(${formatPower('x', xp)}${formatPower('y', yp + 1)}\\)`, isCorrect: false }
    ];
    
    const seen = new Set(); let opts = [];
    for (let o of rawOpts) { if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); } }
    while(opts.length < 4) opts.push({ text: `\\(x^{10}y^{10}\\)`, isCorrect: false });

    return {
      opts,
      steps: [
        { explanation: 'When multiplying fractions, you can multiply all the numerators together and all the denominators together.', workingOut: `Total powers in numerator: x adds to ${xNum}, y adds to ${yNum}.\nTotal powers in denominator: x adds to ${xDen}, y adds to ${yDen}.`, graphData: null },
        { explanation: 'Now, use the division index law by subtracting the total denominator powers from the numerator powers.', workingOut: `For x: ${xNum} - ${xDen} = ${xp}\nFor y: ${yNum} - ${yDen} = ${yp}`, graphData: null },
        { explanation: 'Write the final simplified answer.', workingOut: correct, graphData: null }
      ]
    };
  }

  function getQ10(text) {
    // Complete the equation: \(y^{4} \times ... = y^{9}\)
    // or \(y^{6} \div ... = y^{2}\)
    const match = text.match(/\\\((.*?)\\\)/);
    const expr = match[1].replace(/\s/g, '');
    let isMult = expr.includes('\\times');
    let isDiv = expr.includes('\\div');
    
    let parts = isMult ? expr.split('\\times...') : expr.split('\\div...');
    const p1Match = parts[0].match(/([a-zA-Z])\^?\{?(\d+)\}?/);
    const p2Match = parts[1].replace('=', '').match(/([a-zA-Z])\^?\{?(\d+)\}?/);
    
    const v = p1Match[1];
    const p1 = parseInt(p1Match[2] || 1);
    const p2 = parseInt(p2Match[2] || 1);
    
    let pAns = isMult ? (p2 - p1) : (p1 - p2);
    const correct = `\\(${v}^{${pAns}}\\)`;

    let rawOpts = [
      { text: correct, isCorrect: true },
      { text: `\\(${v}^{${p1 + p2}}\\)`, isCorrect: false },
      { text: `\\(${v}^{${isMult ? p1 * p2 : p1 / p2}}\\)`, isCorrect: false },
      { text: `\\(${v}^{${pAns + 2}}\\)`, isCorrect: false }
    ];
    
    const seen = new Set(); let opts = [];
    for (let o of rawOpts) { if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); } }
    while(opts.length < 4) opts.push({ text: `\\(${v}^{100}\\)`, isCorrect: false });

    return {
      opts,
      steps: [
        { explanation: `In this equation, the base is \\(${v}\\). Let the missing power be \\(x\\).`, workingOut: '', graphData: null },
        { explanation: isMult ? `Because we are multiplying, we ADD the indices: \\( ${p1} + x = ${p2} \\).` : `Because we are dividing, we SUBTRACT the indices: \\( ${p1} - x = ${p2} \\).`, workingOut: '', graphData: null },
        { explanation: `Solve for the missing index.`, workingOut: isMult ? `\\( x = ${p2} - ${p1} = ${pAns} \\)` : `\\( x = ${p1} - ${p2} = ${pAns} \\)`, graphData: null },
        { explanation: `So the missing term is \\(${v}^{${pAns}}\\).`, workingOut: correct, graphData: null }
      ]
    };
  }

  const generators = {
    '6': getQ6, '7': getQ7, '8': getQ8, '9': getQ9, '10': getQ10
  };

  const idsToProcess = [];
  for (let i = 6; i <= 10; i++) {
    const letters = i === 7 ? 'abcdefghijkl' : (i === 10 ? 'abcdefghijkl' : (i===8||i===9 ? 'abcdefgh' : 'abcdef'));
    for (const char of letters) idsToProcess.push({ id: 'y9-8a-' + i + char, qNum: String(i) });
  }

  let updateCount = 0;
  for (const item of idsToProcess) {
    const docRef = db.collection('questions').doc(item.id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const generator = generators[item.qNum];
      if (generator) {
        try {
          const result = generator(data.question);
          if (result) {
            const shuffledOpts = shuffle([...result.opts]);
            let answerIdx = 0;
            const mappedOpts = shuffledOpts.map((o, idx) => {
              if (o.isCorrect) answerIdx = idx;
              return { text: o.text, imageUrl: '' };
            });

            await docRef.update({
              type: 'multiple_choice',
              options: mappedOpts,
              answer: String(answerIdx),
              solutionSteps: result.steps,
              requiresManualGrading: FieldValue.delete(),
              updatedAt: FieldValue.serverTimestamp()
            });
            updateCount++;
          }
        } catch (err) {
          console.log("Error parsing", item.id, err.message);
        }
      }
    }
  }
  
  for (let i = 6; i <= 10; i++) {
    const pRef = db.collection('questions').doc('y9-8a-' + i);
    const pSnap = await pRef.get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        if (cSnap.exists) {
          return {
            ...sq,
            type: cSnap.data().type,
            options: cSnap.data().options || sq.options,
            answer: cSnap.data().answer || sq.answer,
            solutionSteps: cSnap.data().solutionSteps || sq.solutionSteps
          };
        }
        return sq;
      }));
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('Updated', updateCount, 'subquestions for q6 to q10');
  process.exit(0);
}

run().catch(console.error);
