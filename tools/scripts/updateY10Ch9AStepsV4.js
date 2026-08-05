import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function parseSimpleTerm(str) {
  str = str.replace(/\\/g, '').replace(/\s+/g, '');
  let coeff = 1;
  let vars = {};
  
  const coeffMatch = str.match(/^[-+]?\d+/);
  if (coeffMatch) {
    coeff = parseInt(coeffMatch[0]);
    str = str.slice(coeffMatch[0].length);
  } else if (str.startsWith('-')) {
    coeff = -1;
    str = str.slice(1);
  }
  
  const varRegex = /([a-zA-Z])(?:\^\{?(-?\d+)\}?)?/g;
  let match;
  while ((match = varRegex.exec(str)) !== null) {
    const v = match[1];
    const exp = match[2] ? parseInt(match[2]) : 1;
    vars[v] = (vars[v] || 0) + exp;
  }
  return { coeff, vars };
}

function termToStr(term) {
  let s = '';
  if (term.coeff !== 1 && term.coeff !== -1) s += term.coeff;
  if (term.coeff === -1) s += '-';
  
  let hasVars = false;
  let sortedVars = Object.keys(term.vars).sort();
  for (const v of sortedVars) {
    const e = term.vars[v];
    if (e === 0) continue;
    hasVars = true;
    if (e === 1) s += v;
    else s += `${v}^{${e}}`;
  }
  if (!hasVars) {
    if (term.coeff === 1) return '1';
    if (term.coeff === -1) return '-1';
    return term.coeff.toString();
  }
  if (s === '-') return '-1';
  return s;
}

function termToStrFraction(term) {
  let numStr = '';
  let denStr = '';
  
  if (term.coeff !== 1 && term.coeff !== -1) numStr += term.coeff;
  if (term.coeff === -1) numStr += '-';
  
  let hasNumVars = false;
  let sortedVars = Object.keys(term.vars).sort();
  for (const v of sortedVars) {
    const e = term.vars[v];
    if (e > 0) {
      hasNumVars = true;
      if (e === 1) numStr += v;
      else numStr += `${v}^{${e}}`;
    } else if (e < 0) {
      if (-e === 1) denStr += v;
      else denStr += `${v}^{${-e}}`;
    }
  }
  
  if (!hasNumVars && numStr === '') numStr = '1';
  if (!hasNumVars && numStr === '-') numStr = '-1';
  
  if (denStr === '') return numStr;
  return `\\frac{${numStr}}{${denStr}}`;
}

// Generates steps based on patterns
function generateMathSteps(q) {
  let expr = q.question;
  if (expr.includes('\\(') && expr.includes('\\)')) {
    expr = expr.split('\\(')[1].split('\\)')[0];
  } else if (expr.includes(':')) {
    expr = expr.split(':')[1].trim();
  }
  expr = expr.trim();
  
  const steps = [];
  
  // PATTERN 1: Powers of powers e.g. (p^-3q^2)^5 \times (p^-4q^3)^-2
  const powPowMatch = expr.match(/^\(\s*(.*?)\s*\)\^\{?(-?\d+)\}?\s*(?:\\times|\s*)\s*\(\s*(.*?)\s*\)\^\{?(-?\d+)\}?$/);
  if (powPowMatch) {
    const t1Str = powPowMatch[1];
    const p1 = parseInt(powPowMatch[2]);
    const t2Str = powPowMatch[3];
    const p2 = parseInt(powPowMatch[4]);
    
    const t1 = parseSimpleTerm(t1Str);
    const t2 = parseSimpleTerm(t2Str);
    
    steps.push({
      explanation: "Start with the expression.",
      workingOut: `\\( ${expr} \\)`,
      graphData: null
    });
    
    // Step 2: multiply indices
    let step2Parts = [];
    let expandedT1 = { coeff: Math.pow(t1.coeff, p1), vars: {} };
    let expandedT2 = { coeff: Math.pow(t2.coeff, p2), vars: {} };
    
    let w2_1 = '';
    if (t1.coeff !== 1) w2_1 += `${t1.coeff}^{${p1}}`;
    for (const v in t1.vars) {
      w2_1 += `${v}^{${t1.vars[v]}\\times ${p1}}`;
      expandedT1.vars[v] = t1.vars[v] * p1;
    }
    
    let w2_2 = '';
    if (t2.coeff !== 1) w2_2 += `${t2.coeff}^{${p2}}`;
    for (const v in t2.vars) {
      w2_2 += `${v}^{${t2.vars[v]}\\times ${p2}}`;
      expandedT2.vars[v] = t2.vars[v] * p2;
    }
    
    steps.push({
      explanation: "Apply the power outside the bracket to every term inside by multiplying the indices.",
      workingOut: `\\( ${w2_1} \\times ${w2_2} \\)`,
      graphData: null
    });
    
    steps.push({
      explanation: "Simplify the multiplied indices.",
      workingOut: `\\( ${termToStr(expandedT1)} \\times ${termToStr(expandedT2)} \\)`,
      graphData: null
    });
    
    // Step 4: combine
    let finalCoeff = expandedT1.coeff * expandedT2.coeff;
    let finalVars = { ...expandedT1.vars };
    let sumStepStr = '';
    for (const v in expandedT2.vars) {
      if (finalVars[v] !== undefined) {
        sumStepStr += `${v}^{${finalVars[v]} + ${expandedT2.vars[v]}}`;
        finalVars[v] += expandedT2.vars[v];
      } else {
        finalVars[v] = expandedT2.vars[v];
      }
    }
    
    // Just a generalized combine string
    let allVars = Array.from(new Set([...Object.keys(expandedT1.vars), ...Object.keys(expandedT2.vars)])).sort();
    let combineStr = finalCoeff !== 1 ? finalCoeff.toString() : '';
    for (const v of allVars) {
      const e1 = expandedT1.vars[v] || 0;
      const e2 = expandedT2.vars[v] || 0;
      if (e1 !== 0 && e2 !== 0) {
        let e2s = e2 < 0 ? `+ (${e2})` : `+ ${e2}`;
        combineStr += `${v}^{${e1} ${e2s}}`;
      } else if (e1 !== 0) {
        combineStr += `${v}^{${e1}}`;
      } else if (e2 !== 0) {
        combineStr += `${v}^{${e2}}`;
      }
    }
    
    steps.push({
      explanation: "Multiply the terms by adding the indices of the same bases.",
      workingOut: `\\( ${combineStr} \\)`,
      graphData: null
    });
    
    const finalTerm = { coeff: finalCoeff, vars: finalVars };
    steps.push({
      explanation: "Write the final answer with positive indices.",
      workingOut: `\\text{Final answer: } \\( ${termToStrFraction(finalTerm)} \\)`,
      graphData: null
    });
    
    return steps;
  }
  
  // PATTERN 2: Fractions e.g. \frac{18a^5b^-3}{12a^-4b^5}
  const fracMatch = expr.match(/^\\frac\{\s*(.*?)\s*\}\{\s*(.*?)\s*\}$/);
  if (fracMatch) {
    const num = parseSimpleTerm(fracMatch[1]);
    const den = parseSimpleTerm(fracMatch[2]);
    
    steps.push({
      explanation: "Start with the given algebraic fraction.",
      workingOut: `\\( ${expr} \\)`,
      graphData: null
    });
    
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const g = Math.abs(gcd(num.coeff, den.coeff));
    const newNumC = num.coeff / g;
    const newDenC = den.coeff / g;
    
    let subStr = '';
    if (newDenC !== 1) {
      subStr += `\\frac{${newNumC}}{${newDenC}}`;
    } else if (newNumC !== 1) {
      subStr += `${newNumC}`;
    }
    
    let finalVars = { ...num.vars };
    for (const v in den.vars) {
      if (finalVars[v] === undefined) finalVars[v] = 0;
      let e1 = finalVars[v];
      let e2 = den.vars[v];
      let e2s = e2 < 0 ? `- (${e2})` : `- ${e2}`;
      subStr += `${v}^{${e1} ${e2s}}`;
      finalVars[v] -= den.vars[v];
    }
    
    steps.push({
      explanation: "Divide the coefficients and apply the index law for division (subtract the denominator's index from the numerator's index).",
      workingOut: `\\( ${subStr} \\)`,
      graphData: null
    });
    
    const finalTerm = { coeff: newNumC/newDenC, vars: finalVars }; // Wait, if it's a fraction coefficient, my term object only holds integers...
    // Let's just output it manually.
    let numFracStr = '';
    let denFracStr = '';
    if (newNumC !== 1 && newNumC !== -1) numFracStr += newNumC;
    if (newNumC === -1) numFracStr += '-';
    
    if (newDenC !== 1) denFracStr += newDenC;
    
    let hasNum = false;
    let sortedVars = Object.keys(finalVars).sort();
    for (const v of sortedVars) {
      let e = finalVars[v];
      if (e > 0) {
        hasNum = true;
        numFracStr += (e===1) ? v : `${v}^{${e}}`;
      } else if (e < 0) {
        denFracStr += (-e===1) ? v : `${v}^{${-e}}`;
      }
    }
    
    if (!hasNum && numFracStr === '') numFracStr = '1';
    if (!hasNum && numFracStr === '-') numFracStr = '-1';
    
    let ansStr = denFracStr === '' ? numFracStr : `\\frac{${numFracStr}}{${denFracStr}}`;
    
    steps.push({
      explanation: "Simplify the indices. Ensure all indices are positive by moving any terms with negative indices to the denominator.",
      workingOut: `\\text{Final answer: } \\( ${ansStr} \\)`,
      graphData: null
    });
    
    return steps;
  }
  
  // PATTERN 3: Multiplication of multiple terms e.g. x^7 \times x^-3 \times x^-6
  if (expr.includes('\\times')) {
    const parts = expr.split('\\times').map(p => p.trim());
    const terms = parts.map(p => parseSimpleTerm(p));
    
    steps.push({
      explanation: "Start with the multiplication expression.",
      workingOut: `\\( ${expr} \\)`,
      graphData: null
    });
    
    let finalCoeff = 1;
    let coeffStr = '';
    for (const t of terms) {
      finalCoeff *= t.coeff;
      if (t.coeff !== 1) coeffStr += `${t.coeff} \\times `;
    }
    
    let allVars = new Set();
    terms.forEach(t => Object.keys(t.vars).forEach(v => allVars.add(v)));
    allVars = Array.from(allVars).sort();
    
    let addStr = '';
    let finalVars = {};
    for (const v of allVars) {
      let vSums = [];
      let currentSum = 0;
      for (const t of terms) {
        if (t.vars[v] !== undefined) {
          vSums.push(t.vars[v]);
          currentSum += t.vars[v];
        }
      }
      finalVars[v] = currentSum;
      if (vSums.length > 0) {
        addStr += `${v}^{${vSums.map(x => x < 0 ? `(${x})` : x).join(' + ')}}`;
      }
    }
    
    if (coeffStr !== '') {
      coeffStr = coeffStr.slice(0, -8); // remove last \times
      steps.push({
        explanation: "Group the coefficients together.",
        workingOut: `\\( ${coeffStr} \\times ${addStr} \\)`,
        graphData: null
      });
    }
    
    steps.push({
      explanation: "Multiply the coefficients. Apply the index law for multiplication: add the indices for terms with the same base.",
      workingOut: `\\( ${finalCoeff !== 1 ? finalCoeff : ''}${addStr} \\)`,
      graphData: null
    });
    
    const finalTerm = { coeff: finalCoeff, vars: finalVars };
    steps.push({
      explanation: "Simplify the sums of the indices and write the final answer with positive indices.",
      workingOut: `\\text{Final answer: } \\( ${termToStrFraction(finalTerm)} \\)`,
      graphData: null
    });
    
    return steps;
  }
  
  return null; // Fallback
}

async function run() {
  const qs = await db.collection('questions').where('topicId', '==', 'y10-9a').get();
  let count = 0;
  let fallbackCount = 0;
  
  for (const doc of qs.docs) {
    const q = doc.data();
    if (q.id === 'y10-9a-q10h') continue; // already hand-crafted
    
    if (q.type === 'multiple_choice' || q.type === 'teacher_review' || q.type === 'short_answer') {
      try {
        const steps = generateMathSteps(q);
        if (steps) {
          // If we successfully generated algebraic steps, save them!
          // We must ensure the final answer matches q.answer. Actually we'll just append it to the final step to be safe!
          let ansIdx = parseInt(q.answer);
          let ansText = "";
          if (!isNaN(ansIdx) && q.options && q.options[ansIdx]) {
            ansText = q.options[ansIdx].text || q.options[ansIdx];
          } else {
            ansText = q.answer; // fallback
          }
          if (!ansText.includes('\\(')) ansText = `\\(${ansText}\\)`;
          steps[steps.length-1].workingOut += ` \\quad \\text{(Matches } ${ansText} \\text{)}`;
          
          await doc.ref.update({ solutionSteps: steps });
          count++;
        } else {
          fallbackCount++;
        }
      } catch (e) {
        fallbackCount++;
      }
    }
  }
  console.log(`Successfully algebra-updated ${count} questions. Fallbacks remaining: ${fallbackCount}`);
}

run().catch(console.error);
