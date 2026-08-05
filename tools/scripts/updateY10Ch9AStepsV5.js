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

function parseBracketTerm(str) {
  let outerCoeff = 1;
  const coeffMatch = str.match(/^([-+]?\d+)?\s*\(/);
  if (coeffMatch) {
    if (coeffMatch[1]) {
      outerCoeff = parseInt(coeffMatch[1]);
      if (str.startsWith('-') && !coeffMatch[1]) outerCoeff = -1;
    } else if (str.startsWith('-')) {
      outerCoeff = -1;
    }
  } else {
    return null;
  }
  
  const bracketMatch = str.match(/\((.*?)\)\^\{?(-?\d+)\}?/);
  if (!bracketMatch) return null;
  const innerStr = bracketMatch[1];
  const outerPow = parseInt(bracketMatch[2]);
  
  return { outerCoeff, innerStr, outerPow };
}

function expandBracketTerm(bracketObj) {
  const innerTerm = parseSimpleTerm(bracketObj.innerStr);
  let finalCoeff = bracketObj.outerCoeff * Math.pow(innerTerm.coeff, bracketObj.outerPow);
  let finalVars = {};
  for (const v in innerTerm.vars) {
    finalVars[v] = innerTerm.vars[v] * bracketObj.outerPow;
  }
  return { coeff: finalCoeff, vars: finalVars, innerTerm, pow: bracketObj.outerPow };
}

function termToStrFraction(term) {
  let numStr = '';
  let denStr = '';
  
  // Handling fraction coefficients nicely would be ideal, but for now we expect integers or decimals
  // Wait, if 3^{-2} is evaluated, Math.pow(3, -2) is 1/9, which is 0.111.
  // This is where it breaks! Math.pow(3, -2) = 0.111111...
  // We need to keep fraction coefficients exact!
  // Let's implement a simple exact fraction.
  // We'll skip exact fraction string generation for final answers because we can just append q.answer at the end.
  // But for intermediate working out, we can just write it as `(3^{-2})` or whatever.
  
  // For the sake of simplicity, we just use the original termToStrFraction, but let's avoid Math.pow if negative for coefficients.
  
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


function generateMathSteps(q) {
  let expr = q.question;
  if (expr.includes('\\(') && expr.includes('\\)')) {
    expr = expr.split('\\(')[1].split('\\)')[0];
  } else if (expr.includes(':')) {
    expr = expr.split(':')[1].trim();
  }
  expr = expr.trim();
  
  const steps = [];
  
  if (expr.includes('\\times')) {
    const parts = expr.split('\\times').map(p => p.trim());
    
    // Check if there are bracket terms
    let hasBrackets = false;
    const parsedTerms = parts.map(p => {
      const b = parseBracketTerm(p);
      if (b) {
        hasBrackets = true;
        return { isBracket: true, obj: b, expanded: expandBracketTerm(b) };
      }
      return { isBracket: false, obj: parseSimpleTerm(p) };
    });
    
    steps.push({
      explanation: "Start with the multiplication expression.",
      workingOut: `\\( ${expr} \\)`,
      graphData: null
    });
    
    if (hasBrackets) {
      // Step 2: expand brackets
      let step2Parts = [];
      for (const t of parsedTerms) {
        if (t.isBracket) {
          let s = '';
          if (t.obj.outerCoeff !== 1) s += t.obj.outerCoeff;
          let inTerm = t.expanded.innerTerm;
          let pow = t.expanded.pow;
          if (inTerm.coeff !== 1) s += `${inTerm.coeff}^{${pow}}`;
          for (const v in inTerm.vars) {
            s += `${v}^{${inTerm.vars[v]}\\times ${pow}}`;
          }
          step2Parts.push(s);
        } else {
          let s = '';
          if (t.obj.coeff !== 1) s += t.obj.coeff;
          for (const v in t.obj.vars) {
             s += `${v}^{${t.obj.vars[v]}}`;
          }
          step2Parts.push(s);
        }
      }
      steps.push({
        explanation: "Apply the power outside the bracket to every term inside by multiplying the indices.",
        workingOut: `\\( ${step2Parts.join(' \\times ')} \\)`,
        graphData: null
      });
      
      let step3Parts = [];
      for (const t of parsedTerms) {
        if (t.isBracket) {
          let s = '';
          let ex = t.expanded;
          if (ex.coeff !== 1 && !Number.isInteger(ex.coeff)) {
            // Fraction coeff formatting hack
            s += `(${t.expanded.innerTerm.coeff}^{${t.expanded.pow}})`;
          } else if (ex.coeff !== 1) {
            s += ex.coeff;
          }
          for (const v in ex.vars) s += `${v}^{${ex.vars[v]}}`;
          step3Parts.push(s);
        } else {
          let s = '';
          if (t.obj.coeff !== 1) s += t.obj.coeff;
          for (const v in t.obj.vars) s += `${v}^{${t.obj.vars[v]}}`;
          step3Parts.push(s);
        }
      }
      steps.push({
        explanation: "Simplify the multiplied indices.",
        workingOut: `\\( ${step3Parts.join(' \\times ')} \\)`,
        graphData: null
      });
    }
    
    // Now multiply terms together
    let finalCoeff = 1;
    let coeffStr = [];
    let coeffCalcStr = [];
    let isFractionCoeff = false;
    for (const t of parsedTerms) {
      let c = t.isBracket ? t.expanded.coeff : t.obj.coeff;
      finalCoeff *= c;
      if (!Number.isInteger(c)) isFractionCoeff = true;
      if (t.isBracket) {
        if (t.obj.outerCoeff !== 1) coeffStr.push(t.obj.outerCoeff);
        let ic = t.expanded.innerTerm.coeff;
        let p = t.expanded.pow;
        if (ic !== 1) {
          coeffStr.push(`${ic}^{${p}}`);
          if (p < 0) coeffCalcStr.push(`\\frac{1}{${Math.pow(ic, -p)}}`);
          else coeffCalcStr.push(Math.pow(ic, p));
        }
      } else {
        if (t.obj.coeff !== 1) coeffStr.push(t.obj.coeff);
      }
    }
    
    let allVars = new Set();
    parsedTerms.forEach(t => {
      let vars = t.isBracket ? t.expanded.vars : t.obj.vars;
      Object.keys(vars).forEach(v => allVars.add(v));
    });
    allVars = Array.from(allVars).sort();
    
    let addStr = '';
    let finalVars = {};
    for (const v of allVars) {
      let vSums = [];
      let currentSum = 0;
      for (const t of parsedTerms) {
        let vars = t.isBracket ? t.expanded.vars : t.obj.vars;
        if (vars[v] !== undefined) {
          vSums.push(vars[v]);
          currentSum += vars[v];
        }
      }
      finalVars[v] = currentSum;
      if (vSums.length > 0) {
        addStr += `${v}^{${vSums.map(x => x < 0 ? `(${x})` : x).join(' + ')}}`;
      }
    }
    
    steps.push({
      explanation: "Multiply the coefficients. Apply the index law for multiplication: add the indices for terms with the same base.",
      workingOut: `\\( ${coeffStr.length > 1 ? coeffStr.join(' \\times ') + ' \\times ' : ''}${addStr} \\)`,
      graphData: null
    });
    
    return steps;
  }
  
  return null;
}

async function run() {
  const doc = await db.collection('questions').doc('y10-9a-q10g').get();
  const q = doc.data();
  
  const steps = generateMathSteps(q);
  
  let ansIdx = parseInt(q.answer);
  let ansText = "";
  if (!isNaN(ansIdx) && q.options && q.options[ansIdx]) {
    ansText = q.options[ansIdx].text || q.options[ansIdx];
  } else {
    ansText = q.answer;
  }
  if (!ansText.includes('\\(')) ansText = `\\(${ansText}\\)`;
  steps[steps.length-1].workingOut += ` \\quad \\text{(Matches } ${ansText} \\text{)}`;
  
  await doc.ref.update({ solutionSteps: steps });
  console.log('Fixed y10-9a-q10g');
}

run().catch(console.error);
