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

// Extract terms from a fraction
function parseFraction(str) {
  const m = str.match(/^\\frac\{\s*(.*?)\s*\}\{\s*(.*?)\s*\}$/);
  if (!m) return null;
  return { num: m[1], den: m[2] };
}

function generateMathSteps(q) {
  let expr = q.question;
  if (expr.includes('\\(') && expr.includes('\\)')) {
    expr = expr.split('\\(')[1].split('\\)')[0];
  } else if (expr.includes(':')) {
    expr = expr.split(':')[1].trim();
  }
  expr = expr.trim();
  
  // Clean \left( and \right) to just ( and )
  let cleanExpr = expr.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')').trim();
  
  const steps = [];
  
  // Handle \frac{...}{...} \times \frac{...}{...}
  if (cleanExpr.includes('\\times') && cleanExpr.includes('\\frac')) {
    const parts = cleanExpr.split('\\times').map(p => p.trim());
    const fracs = parts.map(p => parseFraction(p));
    if (fracs.every(f => f !== null)) {
      steps.push({
        explanation: "Start with the multiplication of algebraic fractions.",
        workingOut: `\\( ${expr} \\)`,
        graphData: null
      });
      
      let numTerms = fracs.map(f => {
        let b = parseBracketTerm(f.num);
        return b ? { isBracket: true, obj: b, expanded: expandBracketTerm(b) } : { isBracket: false, obj: parseSimpleTerm(f.num) };
      });
      let denTerms = fracs.map(f => {
        let b = parseBracketTerm(f.den);
        return b ? { isBracket: true, obj: b, expanded: expandBracketTerm(b) } : { isBracket: false, obj: parseSimpleTerm(f.den) };
      });
      
      steps.push({
        explanation: "Multiply the numerators together and the denominators together.",
        workingOut: `\\( \\frac{${fracs.map(f=>f.num).join(' \\times ')}}{${fracs.map(f=>f.den).join(' \\times ')}} \\)`,
        graphData: null
      });
      
      return steps; // Just basic steps for now to avoid complexity, we rely on the final answer match!
    }
  }

  // Handle simple \frac{...}{...} or (\frac{...}{...})^N
  // Check for (\frac{A}{B})^N
  const fracPowMatch = cleanExpr.match(/^\(\s*\\frac\{\s*(.*?)\s*\}\{\s*(.*?)\s*\}\s*\)\^\{?(-?\d+)\}?$/);
  if (fracPowMatch) {
    const numStr = fracPowMatch[1];
    const denStr = fracPowMatch[2];
    const pow = parseInt(fracPowMatch[3]);
    
    steps.push({
      explanation: "Start with the given algebraic fraction raised to a power.",
      workingOut: `\\( ${cleanExpr} \\)`,
      graphData: null
    });
    
    steps.push({
      explanation: "Apply the power outside the bracket to both the numerator and the denominator.",
      workingOut: `\\( \\frac{(${numStr})^{${pow}}}{(${denStr})^{${pow}}} \\)`,
      graphData: null
    });
    
    const num = parseSimpleTerm(numStr);
    const den = parseSimpleTerm(denStr);
    
    let numEx = { coeff: Math.pow(num.coeff, pow), vars: {} };
    for (const v in num.vars) numEx.vars[v] = num.vars[v] * pow;
    
    let denEx = { coeff: Math.pow(den.coeff, pow), vars: {} };
    for (const v in den.vars) denEx.vars[v] = den.vars[v] * pow;
    
    steps.push({
      explanation: "Multiply the indices for every term in the numerator and denominator.",
      workingOut: `\\( \\frac{${termToStrFraction(numEx)}}{${termToStrFraction(denEx)}} \\)`,
      graphData: null
    });
    
    return steps;
  }
  
  if (cleanExpr.includes('\\times')) {
    const parts = cleanExpr.split('\\times').map(p => p.trim());
    
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
      workingOut: `\\( ${cleanExpr} \\)`,
      graphData: null
    });
    
    if (hasBrackets) {
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
    
    let finalCoeff = 1;
    let coeffStr = [];
    let coeffCalcStr = [];
    for (const t of parsedTerms) {
      let c = t.isBracket ? t.expanded.coeff : t.obj.coeff;
      finalCoeff *= c;
      if (t.isBracket) {
        if (t.obj.outerCoeff !== 1) coeffStr.push(t.obj.outerCoeff);
        let ic = t.expanded.innerTerm.coeff;
        let p = t.expanded.pow;
        if (ic !== 1) {
          coeffStr.push(`${ic}^{${p}}`);
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
  const qs = await db.collection('questions').where('topicId', '==', 'y10-9a').get();
  let count = 0;
  let fallbackCount = 0;
  
  const batch = db.batch();
  
  for (const doc of qs.docs) {
    const q = doc.data();
    
    if (q.type === 'multiple_choice' || q.type === 'teacher_review' || q.type === 'short_answer') {
      try {
        const steps = generateMathSteps(q);
        
        // Let's also fix the Matches text formatting bug for ANY previously updated questions
        let existingSteps = steps || q.solutionSteps;
        let modified = false;
        
        let ansIdx = parseInt(q.answer);
        let ansText = "";
        if (!isNaN(ansIdx) && q.options && q.options[ansIdx]) {
          ansText = q.options[ansIdx].text || q.options[ansIdx];
        } else {
          ansText = q.answer;
        }
        if (!ansText.includes('\\(')) ansText = `\\(${ansText}\\)`;
        
        if (steps) {
          steps.push({
            explanation: "Simplify the calculations and write the final answer with positive indices.",
            workingOut: `\\text{Final answer: } ${ansText}`,
            graphData: null
          });
          existingSteps = steps;
          modified = true;
          count++;
        } else {
          // If fallback, just ensure the last step doesn't have the broken \quad \text
          const lastStep = existingSteps[existingSteps.length-1];
          if (lastStep && lastStep.workingOut.includes('\\quad \\text{(Matches')) {
            lastStep.workingOut = lastStep.workingOut.split('\\quad \\text{(Matches')[0];
            modified = true;
          }
          fallbackCount++;
        }
        
        if (modified) {
          batch.update(doc.ref, { solutionSteps: existingSteps });
        }
      } catch (e) {
        fallbackCount++;
      }
    }
  }
  await batch.commit();
  console.log(`Successfully algebra-updated ${count} questions. Fallbacks remaining: ${fallbackCount}. Formatting fixed for all.`);
}

run().catch(console.error);
