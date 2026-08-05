const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function getQ16(text) {
    const match = text.match(/\\\(\(([a-zA-Z])\^\{?(\d+)\}?\)\^\{\.\.\.\} = \1\^\{?(\d+)\}?\\\)/);
    if (!match) return null;
    const v = match[1];
    const inP = parseInt(match[2]);
    const totalP = parseInt(match[3]);
    const ans = totalP / inP;
    
    const correct = `\\(${ans}\\)`;
    let opts = [
      { text: correct, imageUrl: '' },
      { text: `\\(${totalP - inP}\\)`, imageUrl: '' }, // subtract
      { text: `\\(${totalP * inP}\\)`, imageUrl: '' }, // multiply
      { text: `\\(${totalP + inP}\\)`, imageUrl: '' } // add
    ];
    opts.sort(() => Math.random() - 0.5);
    const answer = String(opts.findIndex(o => o.text === correct));
    
    return {
      opts, answer,
      steps: [
        { explanation: 'According to the Power of a Power Law, \\( (a^m)^n = a^{m \\times n} \\). This means we multiply the inner index by the outer index.', workingOut: '', graphData: null },
        { explanation: `We need to find a number that, when multiplied by ${inP}, gives ${totalP}.`, workingOut: `\\( ${inP} \\times x = ${totalP} \\)`, graphData: null },
        { explanation: `Divide ${totalP} by ${inP}.`, workingOut: `\\( x = ${totalP} \\div ${inP} = ${ans} \\)`, graphData: null }
      ]
    };
  }

  function getQ17(text) {
    const match = text.match(/\\\(\(([a-zA-Z])\^\{?(\d+)\}?\)\^\{?(\d+)\}? = \(\1\^\{?(\d+)\}?\)\^\{?(\d+)\}?\\\)/);
    if (!match) return null;
    const v = match[1];
    const p1 = parseInt(match[2]), p2 = parseInt(match[3]);
    const p3 = parseInt(match[4]), p4 = parseInt(match[5]);
    
    const isTrue = (p1 * p2) === (p3 * p4);
    const correct = isTrue ? 'True' : 'False';
    
    let opts = [
      { text: 'True', imageUrl: '' },
      { text: 'False', imageUrl: '' }
    ];
    const answer = isTrue ? '0' : '1';
    
    return {
      opts, answer,
      steps: [
        { explanation: 'To check if the equation is true, simplify both sides using the Power of a Power Law \\( (a^m)^n = a^{m \\times n} \\).', workingOut: '', graphData: null },
        { explanation: 'Multiply the indices on both sides.', workingOut: `Left side: \\( (${v}^{${p1}})^{${p2}} = ${v}^{${p1 * p2}} \\)\nRight side: \\( (${v}^{${p3}})^{${p4}} = ${v}^{${p3 * p4}} \\)`, graphData: null },
        { explanation: `Compare the two sides. They are ${isTrue ? 'the same' : 'different'}.`, workingOut: `\\( ${v}^{${p1*p2}} ${isTrue ? '=' : '\\neq'} ${v}^{${p3*p4}} \\)\nTherefore, the statement is ${correct}.`, graphData: null }
      ]
    };
  }

  function getQ18(text) {
    const match = text.match(/\\\(\((\d+)([a-zA-Z])\^\{?(\d+)\}?\)\^\{?(\d+)\}?\\\)/);
    if (!match) return null;
    const c = parseInt(match[1]);
    const v = match[2];
    const p = parseInt(match[3]);
    const outP = parseInt(match[4]);
    
    const newC = Math.pow(c, outP);
    const newP = p * outP;
    const correct = `\\(${newC}${v}^{${newP}}\\)`;
    
    let opts = [
      { text: correct, imageUrl: '' },
      { text: `\\(${c * outP}${v}^{${newP}}\\)`, imageUrl: '' }, // multiply coeff instead of power
      { text: `\\(${newC}${v}^{${p + outP}}\\)`, imageUrl: '' }, // add powers
      { text: `\\(${c}${v}^{${newP}}\\)`, imageUrl: '' } // forgot to power coeff
    ];
    let seen = new Set(); let uniqueOpts = [];
    for(let o of opts) { if(!seen.has(o.text)){ seen.add(o.text); uniqueOpts.push(o); } }
    while(uniqueOpts.length < 4) uniqueOpts.push({text:`\\(${newC}${v}^{100}\\)`, imageUrl:''});
    uniqueOpts = uniqueOpts.slice(0,4).sort(() => Math.random() - 0.5);
    const answer = String(uniqueOpts.findIndex(o => o.text === correct));
    
    return {
      opts: uniqueOpts, answer,
      steps: [
        { explanation: 'When a term with a coefficient (number) and a variable is raised to a power, the power applies to **everything** inside the brackets.', workingOut: `\\( (xy)^n = x^n y^n \\)`, graphData: null },
        { explanation: `Apply the power of ${outP} to the number ${c}, and to the variable \\(${v}^{${p}}\\).`, workingOut: `Number: \\( ${c}^{${outP}} = ${newC} \\)\nVariable: \\( (${v}^{${p}})^{${outP}} = ${v}^{${p * outP}} = ${v}^{${newP}} \\)`, graphData: null },
        { explanation: 'Combine them for the final simplified answer.', workingOut: correct, graphData: null }
      ]
    };
  }

  function getQ19(text) {
    // \((2a^2b)^2 \times 3ab^3\)
    const match = text.match(/\\\(\((\d+)([a-zA-Z])\^?\{?(\d+)\}?([a-zA-Z])\^?\{?(\d+)?\}?\)\^?\{?(\d+)\}? \\times (\d+)([a-zA-Z])\^?\{?(\d+)?\}?([a-zA-Z])\^?\{?(\d+)?\}?\\\)/i);
    if (!match) return null;
    
    const c1 = parseInt(match[1]), v1 = match[2], p1_1 = parseInt(match[3]), v2 = match[4], p1_2 = parseInt(match[5]||1), outP = parseInt(match[6]);
    const c2 = parseInt(match[7]), v3 = match[8], p2_1 = parseInt(match[9]||1), v4 = match[10], p2_2 = parseInt(match[11]||1);
    
    const newC1 = Math.pow(c1, outP);
    const newP1_1 = p1_1 * outP;
    const newP1_2 = p1_2 * outP;
    
    const finalC = newC1 * c2;
    const finalP1 = newP1_1 + p2_1;
    const finalP2 = newP1_2 + p2_2;
    
    const correct = `\\(${finalC}${v1}^{${finalP1}}${v2}^{${finalP2}}\\)`;
    
    let opts = [
      { text: correct, imageUrl: '' },
      { text: `\\(${c1 * outP * c2}${v1}^{${finalP1}}${v2}^{${finalP2}}\\)`, imageUrl: '' },
      { text: `\\(${finalC}${v1}^{${newP1_1 * p2_1}}${v2}^{${newP1_2 * p2_2}}\\)`, imageUrl: '' },
      { text: `\\(${newC1 + c2}${v1}^{${finalP1}}${v2}^{${finalP2}}\\)`, imageUrl: '' }
    ];
    let seen = new Set(); let uniqueOpts = [];
    for(let o of opts) { if(!seen.has(o.text)){ seen.add(o.text); uniqueOpts.push(o); } }
    while(uniqueOpts.length < 4) uniqueOpts.push({text:`\\(100${v1}^{100}${v2}^{100}\\)`, imageUrl:''});
    uniqueOpts = uniqueOpts.slice(0,4).sort(() => Math.random() - 0.5);
    const answer = String(uniqueOpts.findIndex(o => o.text === correct));
    
    return {
      opts: uniqueOpts, answer,
      steps: [
        { explanation: 'According to the order of operations (BODMAS/PEMDAS), we must expand the brackets with powers before multiplying.', workingOut: '', graphData: null },
        { explanation: `Expand the first part by applying the power of ${outP} to everything inside the bracket.`, workingOut: `\\( (${c1}${v1}^{${p1_1}}${v2}^{${p1_2}})^{${outP}} = ${c1}^{${outP}}${v1}^{${p1_1}\\times${outP}}${v2}^{${p1_2}\\times${outP}} = ${newC1}${v1}^{${newP1_1}}${v2}^{${newP1_2}} \\)`, graphData: null },
        { explanation: 'Now, multiply this result by the second term. Multiply the numbers, and add the powers of matching variables.', workingOut: `\\( ${newC1}${v1}^{${newP1_1}}${v2}^{${newP1_2}} \\times ${c2}${v3}^{${p2_1}}${v4}^{${p2_2}} \\)\nNumbers: \\( ${newC1} \\times ${c2} = ${finalC} \\)\n${v1}: \\( ${newP1_1} + ${p2_1} = ${finalP1} \\)\n${v2}: \\( ${newP1_2} + ${p2_2} = ${finalP2} \\)`, graphData: null },
        { explanation: 'Write the final answer.', workingOut: correct, graphData: null }
      ]
    };
  }

  function getQ20(text) {
    // \(\left(\frac{x^2}{y}\right)^2 \times \left(\frac{y^2}{x}\right)^3\)
    return {
      opts: [
        { text: '\\(x y^4\\)', imageUrl: '' }, // Correct: x^4 / y^2 * y^6 / x^3 = x^1 * y^4
        { text: '\\(x^2 y^3\\)', imageUrl: '' },
        { text: '\\(\\frac{y^4}{x}\\)', imageUrl: '' },
        { text: '\\(x y^2\\)', imageUrl: '' }
      ].sort(() => Math.random() - 0.5),
      answer: '', // set below
      steps: [
        { explanation: 'First, apply the powers on the outside of the brackets to both the numerator and the denominator inside.', workingOut: `First fraction: \\( (x^2 / y)^2 = x^4 / y^2 \\)\nSecond fraction: \\( (y^2 / x)^3 = y^6 / x^3 \\)`, graphData: null },
        { explanation: 'Multiply the two fractions together. Multiply the numerators, and multiply the denominators.', workingOut: `\\( \\frac{x^4}{y^2} \\times \\frac{y^6}{x^3} = \\frac{x^4 y^6}{x^3 y^2} \\)`, graphData: null },
        { explanation: 'Use the division index law (subtract powers) to simplify.', workingOut: `For x: \\( x^4 \\div x^3 = x^{4-3} = x^1 = x \\)\nFor y: \\( y^6 \\div y^2 = y^{6-2} = y^4 \\)`, graphData: null },
        { explanation: 'Final simplified expression:', workingOut: '\\(x y^4\\)', graphData: null }
      ]
    };
  }

  function getQ21(text) {
    // \(\frac{(3x^2y^2)^2 \times (2x^2y)^3}{(6x^2y)^2}\)
    // Num: (9 x^4 y^4) * (8 x^6 y^3) = 72 x^10 y^7
    // Den: 36 x^4 y^2
    // Result: 72/36 x^(10-4) y^(7-2) = 2 x^6 y^5
    return {
      opts: [
        { text: '\\(2x^6 y^5\\)', imageUrl: '' }, // Correct
        { text: '\\(4x^6 y^5\\)', imageUrl: '' },
        { text: '\\(2x^4 y^3\\)', imageUrl: '' },
        { text: '\\(2x^5 y^4\\)', imageUrl: '' }
      ].sort(() => Math.random() - 0.5),
      answer: '',
      steps: [
        { explanation: 'First, expand all brackets by applying the outer powers to the numbers and variables inside.', workingOut: `\\( (3x^2y^2)^2 = 3^2 (x^2)^2 (y^2)^2 = 9x^4y^4 \\)\n\\( (2x^2y)^3 = 2^3 (x^2)^3 (y)^3 = 8x^6y^3 \\)\n\\( (6x^2y)^2 = 6^2 (x^2)^2 (y)^2 = 36x^4y^2 \\)`, graphData: null },
        { explanation: 'Next, multiply the terms in the numerator together.', workingOut: `\\( 9x^4y^4 \\times 8x^6y^3 = (9 \\times 8)x^{4+6}y^{4+3} = 72x^{10}y^7 \\)`, graphData: null },
        { explanation: 'Finally, divide the simplified numerator by the denominator.', workingOut: `\\( \\frac{72x^{10}y^7}{36x^4y^2} \\)\n\\( = (72 \\div 36)x^{10-4}y^{7-2} \\)\n\\( = 2x^6y^5 \\)`, graphData: null }
      ]
    };
  }

  function getQ22(text) {
    // Copy and complete: \((...)^4 = a^8 b^{12}\)
    return {
      opts: [
        { text: '\\(a^2 b^3\\)', imageUrl: '' }, // Correct
        { text: '\\(a^4 b^8\\)', imageUrl: '' },
        { text: '\\(a^2 b^4\\)', imageUrl: '' },
        { text: '\\(a^3 b^2\\)', imageUrl: '' }
      ].sort(() => Math.random() - 0.5),
      answer: '',
      steps: [
        { explanation: 'We need to find the term inside the bracket so that when it is raised to the power of 4, it equals \\( a^8 b^{12} \\).', workingOut: '', graphData: null },
        { explanation: 'According to the Power of a Power Law, \\( (x^m)^n = x^{m \\times n} \\). This means the outer power 4 was multiplied by the inner powers to get 8 and 12.', workingOut: '', graphData: null },
        { explanation: 'To work backwards, we divide the final powers by 4.', workingOut: `For a: \\( 8 \\div 4 = 2 \\) (so the inner term has \\( a^2 \\))\nFor b: \\( 12 \\div 4 = 3 \\) (so the inner term has \\( b^3 \\))`, graphData: null },
        { explanation: 'Combine these to get the missing term.', workingOut: '\\(a^2 b^3\\)', graphData: null }
      ]
    };
  }

  const generators = {
    '16': getQ16, '17': getQ17, '18': getQ18, '19': getQ19, '20': getQ20, '21': getQ21, '22': getQ22
  };

  const idsToProcess = [];
  const ranges = { 16: 9, 17: 3, 18: 8, 19: 6, 20: 4, 21: 4, 22: 12 };
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
             let answer = result.answer;
             if (item.qNum === '20' || item.qNum === '21' || item.qNum === '22') {
                const corText = result.opts.find(o => o.text.includes(item.qNum === '20' ? 'y^4' : (item.qNum === '21' ? '2x^6' : 'a^2 b^3'))).text;
                answer = String(result.opts.findIndex(o => o.text === corText));
             }
             
            await docRef.update({
              type: 'multiple_choice',
              options: result.opts,
              answer: answer,
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

  console.log('Updated', updateCount, 'subquestions for q16 to q22');
  process.exit(0);
}

run().catch(console.error);
