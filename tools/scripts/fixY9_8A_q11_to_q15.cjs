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

  function getQ11(text) {
    const match = text.match(/\\frac\{(.*?)\}\{(.*?)\}/);
    if (!match) return null;
    const numPart = match[1]; // 5x^{3}
    const denPart = match[2]; // 2x^{2}
    
    const extract = (s) => {
       const m = s.match(/(\d+)?([a-zA-Z])\^?\{?(\d+)?\}?/);
       return { c: parseInt(m[1]||1), v: m[2], p: parseInt(m[3]||1) };
    };
    const num = extract(numPart);
    const den = extract(denPart);
    
    // usually 5/2, 11/2, 4/2
    let cText = '';
    if (num.c % den.c === 0) {
      cText = `${num.c / den.c}`;
    } else {
      cText = `\\frac{${num.c}}{${den.c}}`; // fraction format
    }
    
    const pAns = num.p - den.p;
    const vText = pAns === 1 ? num.v : (pAns === 0 ? '' : `${num.v}^{${pAns}}`);
    const correct = cText.startsWith('\\frac') 
        ? `\\(\\frac{${num.c}${vText}}{${den.c}}\\) or \\(${cText}${vText}\\)` 
        : `\\(${cText}${vText}\\)`;
        
    const simpleCorrect = `\\(${cText}${vText}\\)`.replace(' or ', '');

    let opts = [
      { text: simpleCorrect, imageUrl: '' },
      { text: `\\(${cText}${num.v}^{${num.p + den.p}}\\)`, imageUrl: '' }, // added powers
      { text: `\\(${num.c - den.c}${vText}\\)`, imageUrl: '' }, // subtracted coeff
      { text: `\\(${cText}${num.v}^{${num.p * den.p}}\\)`, imageUrl: '' } // multiplied powers
    ];
    opts.sort(() => Math.random() - 0.5);
    const answer = String(opts.findIndex(o => o.text === simpleCorrect));

    return {
      opts, answer,
      steps: [
        { explanation: 'To simplify an algebraic fraction, we handle the numbers (coefficients) and the variables separately.', workingOut: '', graphData: null },
        { explanation: `**Numbers:** Divide the numerator by the denominator. If it doesn't divide evenly, leave it as a simplified fraction. Here, we have \\( \\frac{${num.c}}{${den.c}} \\).`, workingOut: '', graphData: null },
        { explanation: `**Variables:** Use the index law for division: \\( a^m \\div a^n = a^{m-n} \\). We **subtract** the indices.`, workingOut: `\\( ${num.v}^{${num.p}} \\div ${den.v}^{${den.p}} = ${num.v}^{${num.p} - ${den.p}} = ${vText || '1'} \\)`, graphData: null },
        { explanation: 'Combine the number part and the variable part to get the final answer.', workingOut: simpleCorrect, graphData: null }
      ]
    };
  }

  function getQ12(text) {
    // \((7p)^0\) or \(2b^0\)
    const match = text.match(/\\\((.*?)\\\)/);
    const expr = match[1];
    
    let isBracket = expr.includes(')^0');
    let c = 1;
    let v = 'x';
    
    if (isBracket) {
       const m = expr.match(/\((.*?)?([a-zA-Z])\)\^0/);
       if (m) { c = parseInt(m[1]||1); v = m[2]; }
    } else {
       const m = expr.match(/(\d+)?([a-zA-Z])\^0/);
       if (m) { c = parseInt(m[1]||1); v = m[2]; }
    }
    
    const correctVal = isBracket ? 1 : c;
    const correct = `\\(${correctVal}\\)`;
    
    let opts = [
      { text: correct, imageUrl: '' },
      { text: `\\(0\\)`, imageUrl: '' },
      { text: `\\(${c}\\)`, imageUrl: '' },
      { text: `\\(${c}${v}\\)`, imageUrl: '' }
    ];
    // if c == correctVal, we need another distractor
    if (c === correctVal) opts[2].text = `\\(1\\)`;
    // ensure unique
    let seen = new Set(); let uniqueOpts = [];
    for(let o of opts) { if(!seen.has(o.text)){ seen.add(o.text); uniqueOpts.push(o); } }
    while(uniqueOpts.length < 4) uniqueOpts.push({text:`\\(${Math.floor(Math.random()*10)+5}\\)`, imageUrl:''});
    uniqueOpts = uniqueOpts.slice(0,4).sort(() => Math.random() - 0.5);
    const answer = String(uniqueOpts.findIndex(o => o.text === correct));

    const steps = [
      { explanation: '**The Zero Index Law:** Any non-zero base raised to the power of 0 is equal to 1. Mathematically, \\( a^0 = 1 \\).', workingOut: '', graphData: null },
      { explanation: isBracket 
            ? 'In this expression, the power of 0 is outside the brackets. This means the *entire* term inside the brackets is raised to the power of 0.'
            : 'In this expression, there are no brackets. The power of 0 *only* applies to the variable immediately before it, not the number in front.', 
        workingOut: isBracket ? `\\( (${c}${v})^0 = 1 \\)` : `\\( ${c}${v}^0 = ${c} \\times 1 \\)`, graphData: null },
      { explanation: 'Simplify to get the final answer.', workingOut: correct, graphData: null }
    ];
    return { opts: uniqueOpts, answer, steps };
  }

  function getQ13(text) {
    // Simplify: \(5x^0 + 5x^0\) or \(4p^0 + 5q^0\)
    const match = text.match(/\\\((.*?)\\\)/);
    const expr = match[1].replace(/\s/g, '');
    const parts = expr.split('+');
    
    const extract = (s) => {
       const m = s.match(/(\d+)?([a-zA-Z])\^0/);
       return { c: parseInt(m[1]||1), v: m[2] };
    };
    const t1 = extract(parts[0]);
    const t2 = extract(parts[1]);
    
    const correctVal = t1.c + t2.c;
    const correct = `\\(${correctVal}\\)`;
    
    let opts = [
      { text: correct, imageUrl: '' },
      { text: `\\(0\\)`, imageUrl: '' },
      { text: `\\(${t1.c + t2.c}${t1.v}\\)`, imageUrl: '' },
      { text: `\\(${t1.c * t2.c}\\)`, imageUrl: '' }
    ];
    let seen = new Set(); let uniqueOpts = [];
    for(let o of opts) { if(!seen.has(o.text)){ seen.add(o.text); uniqueOpts.push(o); } }
    while(uniqueOpts.length < 4) uniqueOpts.push({text:`\\(${Math.floor(Math.random()*10)+5}\\)`, imageUrl:''});
    uniqueOpts = uniqueOpts.slice(0,4).sort(() => Math.random() - 0.5);
    const answer = String(uniqueOpts.findIndex(o => o.text === correct));

    const steps = [
      { explanation: '**The Zero Index Law:** Any non-zero variable raised to the power of 0 is equal to 1. (i.e., \\( x^0 = 1 \\)). Note that the power of 0 only applies to the letter, not the number in front.', workingOut: '', graphData: null },
      { explanation: 'Evaluate each term separately.', workingOut: `\\( ${t1.c}${t1.v}^0 = ${t1.c} \\times 1 = ${t1.c} \\)\n\\( ${t2.c}${t2.v}^0 = ${t2.c} \\times 1 = ${t2.c} \\)`, graphData: null },
      { explanation: 'Add the resulting numbers together.', workingOut: `\\( ${t1.c} + ${t2.c} = ${correctVal} \\)`, graphData: null }
    ];
    return { opts: uniqueOpts, answer, steps };
  }

  function getQ14(text) {
    // Simplify: \((x^{4})^{5}\)
    const match = text.match(/\\\(\((.*?)\)\^\{?(\d+)\}?\\\)/);
    if (!match) return null;
    const inner = match[1]; // x^{4}
    const outP = parseInt(match[2]);
    
    const inMatch = inner.match(/([a-zA-Z])\^?\{?(\d+)\}?/);
    const v = inMatch[1];
    const inP = parseInt(inMatch[2]);
    
    const correct = `\\(${v}^{${inP * outP}}\\)`;
    
    let opts = [
      { text: correct, imageUrl: '' },
      { text: `\\(${v}^{${inP + outP}}\\)`, imageUrl: '' }, // added instead of mult
      { text: `\\(${v}^{${Math.pow(inP, outP)}}\\)`, imageUrl: '' }, // power of power
      { text: `\\(${v}^{${inP}}\\)`, imageUrl: '' }
    ];
    opts.sort(() => Math.random() - 0.5);
    const answer = String(opts.findIndex(o => o.text === correct));

    const steps = [
      { explanation: '**Power of a Power Law:** When a base raised to a power is raised to another power, like \\( (a^m)^n \\), we **multiply** the indices together to get \\( a^{m \\times n} \\).', workingOut: '', graphData: null },
      { explanation: `In this problem, the base is \\(${v}\\), the inside index is ${inP}, and the outside index is ${outP}.`, workingOut: `Multiply the indices: \\( ${inP} \\times ${outP} = ${inP * outP} \\)`, graphData: null },
      { explanation: 'Write the final answer with the new index.', workingOut: correct, graphData: null }
    ];
    return { opts, answer, steps };
  }

  function getQ15(text) {
    // \(\frac{(b^{4})^{2}}{(b^{4})^{3}}\) or \((y^{4})^{3} \times (y^{3})^{3}\)
    const match = text.match(/\\\((.*?)\\\)/);
    const expr = match[1].replace(/\s/g, '');
    let isFrac = expr.includes('\\frac');
    
    let steps = [];
    let correct = '';
    
    if (isFrac) {
       const fMatch = expr.match(/\\frac\{\((.*?)\)\^\{?(\d+)\}?\}\{\((.*?)\)\^\{?(\d+)\}?\}/);
       const numInner = fMatch[1].match(/([a-zA-Z])\^?\{?(\d+)\}?/);
       const denInner = fMatch[3].match(/([a-zA-Z])\^?\{?(\d+)\}?/);
       
       const v = numInner[1];
       const nIn = parseInt(numInner[2]), nOut = parseInt(fMatch[2]);
       const dIn = parseInt(denInner[2]), dOut = parseInt(fMatch[4]);
       
       const nTotal = nIn * nOut;
       const dTotal = dIn * dOut;
       const finalP = nTotal - dTotal;
       
       correct = `\\(${v}^{${finalP}}\\)`;
       if (finalP === 0) correct = `\\(1\\)`;
       else if (finalP === 1) correct = `\\(${v}\\)`;
       else if (finalP < 0) correct = `\\(\\frac{1}{${v}^{${-finalP}}}\\) or \\(${v}^{${finalP}}\\)`;
       
       steps = [
         { explanation: 'First, use the **Power of a Power Law** \\( (a^m)^n = a^{m \\times n} \\) to simplify the numerator and denominator separately. We do this by multiplying the inner and outer indices.', workingOut: `Numerator: \\( (${v}^{${nIn}})^{${nOut}} = ${v}^{${nIn} \\times ${nOut}} = ${v}^{${nTotal}} \\)\nDenominator: \\( (${v}^{${dIn}})^{${dOut}} = ${v}^{${dIn} \\times ${dOut}} = ${v}^{${dTotal}} \\)`, graphData: null },
         { explanation: 'Now, use the **Division Law** \\( a^m \\div a^n = a^{m-n} \\) on the resulting fraction. We do this by subtracting the bottom index from the top index.', workingOut: `\\( \\frac{${v}^{${nTotal}}}{${v}^{${dTotal}}} = ${v}^{${nTotal} - ${dTotal}} = ${v}^{${finalP}} \\)`, graphData: null }
       ];
    } else {
       const mMatch = expr.split('\\times');
       const t1Match = mMatch[0].match(/\((.*?)\)\^\{?(\d+)\}?/);
       const t2Match = mMatch[1].match(/\((.*?)\)\^\{?(\d+)\}?/);
       
       const i1Match = t1Match[1].match(/([a-zA-Z])\^?\{?(\d+)\}?/);
       const i2Match = t2Match[1].match(/([a-zA-Z])\^?\{?(\d+)\}?/);
       
       const v = i1Match[1];
       const p1 = parseInt(i1Match[2]) * parseInt(t1Match[2]);
       const p2 = parseInt(i2Match[2]) * parseInt(t2Match[2]);
       
       const finalP = p1 + p2;
       correct = `\\(${v}^{${finalP}}\\)`;
       
       steps = [
         { explanation: 'First, use the **Power of a Power Law** \\( (a^m)^n = a^{m \\times n} \\) to remove all brackets. Multiply the inside index by the outside index for each term.', workingOut: `First term: \\( ${v}^{${parseInt(i1Match[2])} \\times ${parseInt(t1Match[2])}} = ${v}^{${p1}} \\)\nSecond term: \\( ${v}^{${parseInt(i2Match[2])} \\times ${parseInt(t2Match[2])}} = ${v}^{${p2}} \\)`, graphData: null },
         { explanation: 'Next, use the **Multiplication Law** \\( a^m \\times a^n = a^{m+n} \\). Since the bases are the same, we add the new indices together.', workingOut: `\\( ${v}^{${p1}} \\times ${v}^{${p2}} = ${v}^{${p1} + ${p2}} = ${v}^{${finalP}} \\)`, graphData: null }
       ];
    }
    
    // clean up correct for opts
    const simpleCorrect = correct.split(' or ')[0];
    
    let rawOpts = [
      { text: simpleCorrect, imageUrl: '' },
      { text: `\\(${simpleCorrect.replace(/\d+/, match => parseInt(match)+2)}\\)`, imageUrl: '' },
      { text: `\\(${simpleCorrect.replace(/\d+/, match => parseInt(match)*2)}\\)`, imageUrl: '' },
      { text: `\\(1\\)`, imageUrl: '' }
    ];
    let seen = new Set(); let uniqueOpts = [];
    for(let o of rawOpts) { if(!seen.has(o.text)){ seen.add(o.text); uniqueOpts.push(o); } }
    while(uniqueOpts.length < 4) uniqueOpts.push({text:`\\(x^{100}\\)`, imageUrl:''});
    uniqueOpts = uniqueOpts.slice(0,4).sort(() => Math.random() - 0.5);
    const answer = String(uniqueOpts.findIndex(o => o.text === simpleCorrect));
    
    return { opts: uniqueOpts, answer, steps };
  }


  const generators = { '11': getQ11, '12': getQ12, '13': getQ13, '14': getQ14, '15': getQ15 };

  const idsToProcess = [];
  const ranges = { 11: 8, 12: 4, 13: 12, 14: 4, 15: 9 };
  for (const [qNum, count] of Object.entries(ranges)) {
    for (let j = 0; j < count; j++) {
      idsToProcess.push({ id: 'y9-8a-' + qNum + String.fromCharCode(97 + j), qNum });
    }
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
            await docRef.update({
              type: 'multiple_choice',
              options: result.opts,
              answer: result.answer,
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
  
  for (const qNum of Object.keys(ranges)) {
    const pRef = db.collection('questions').doc('y9-8a-' + qNum);
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

  console.log('Updated', updateCount, 'subquestions for q11 to q15');
  process.exit(0);
}

run().catch(console.error);
