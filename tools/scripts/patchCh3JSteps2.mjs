#!/usr/bin/env node
/**
 * Fix all remaining bad solutionSteps in Ch3J seed file.
 * Covers: DOTS with common factor, monic quadratics (q16), 
 * non-monic quadratics (q17-q20) that were missed or mis-mapped.
 */
import fs from 'fs';

const FILE = './src/constants/seedYear10Ch3JQuestions.js';

const FIXED_STEPS = {
  // ── DOTS with common factor (q15 series that got wrong ids) ──────────────────
  // q16b = 4x² - 20x  (common factor, NOT DOTS)
  'y10-3j-q16b': [
    { explanation: "First look for a common factor in \\\\(4x^2 - 20x\\\\). Both terms share \\\\(4x\\\\).", workingOut: "\\\\(4x(x - 5)\\\\)", graphData: null },
    { explanation: "Check: \\\\(4x \\cdot x = 4x^2\\\\) and \\\\(4x \\cdot (-5) = -20x\\\\). The expression factorises completely.", workingOut: "\\\\(4x(x-5)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\(4x(x-5)\\\\).", workingOut: "\\\\(4x(x-5)\\\\)", graphData: null }
  ],
  // q16c = 12b² - 75  (common factor then DOTS)
  'y10-3j-q16c': [
    { explanation: "Factor out the common factor: \\\\(12b^2 - 75 = 3(4b^2 - 25)\\\\).", workingOut: "\\\\(3(4b^2 - 25)\\\\)", graphData: null },
    { explanation: "Recognise \\\\(4b^2 - 25 = (2b)^2 - 5^2\\\\) — difference of two squares. Apply \\\\((a+b)(a-b)=a^2-b^2\\\\).", workingOut: "\\\\(3(2b+5)(2b-5)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\(3(2b+5)(2b-5)\\\\).", workingOut: "\\\\(3(2b+5)(2b-5)\\\\)", graphData: null }
  ],
  // q16d = 18b² - 32  (common factor then DOTS)
  'y10-3j-q16d': [
    { explanation: "Factor out the common factor: \\\\(18b^2 - 32 = 2(9b^2 - 16)\\\\).", workingOut: "\\\\(2(9b^2 - 16)\\\\)", graphData: null },
    { explanation: "Recognise \\\\(9b^2 - 16 = (3b)^2 - 4^2\\\\) — difference of two squares.", workingOut: "\\\\(2(3b+4)(3b-4)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\(2(3b+4)(3b-4)\\\\).", workingOut: "\\\\(2(3b+4)(3b-4)\\\\)", graphData: null }
  ],
  // q16e = 20x² - 45y²  (common factor then DOTS)
  'y10-3j-q16e': [
    { explanation: "Factor out the common factor 5: \\\\(20x^2 - 45y^2 = 5(4x^2 - 9y^2)\\\\).", workingOut: "\\\\(5(4x^2 - 9y^2)\\\\)", graphData: null },
    { explanation: "Recognise \\\\(4x^2 - 9y^2 = (2x)^2 - (3y)^2\\\\) — difference of two squares. Apply \\\\((a+b)(a-b) = a^2-b^2\\\\).", workingOut: "\\\\(5(2x+3y)(2x-3y)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\(5(2x+3y)(2x-3y)\\\\).", workingOut: "\\\\(5(2x+3y)(2x-3y)\\\\)", graphData: null }
  ],
  // q16f = 24a² - 54b²  (common factor then DOTS)
  'y10-3j-q16f': [
    { explanation: "Factor out the common factor 6: \\\\(24a^2 - 54b^2 = 6(4a^2 - 9b^2)\\\\).", workingOut: "\\\\(6(4a^2 - 9b^2)\\\\)", graphData: null },
    { explanation: "Recognise \\\\(4a^2 - 9b^2 = (2a)^2 - (3b)^2\\\\) — apply DOTS formula.", workingOut: "\\\\(6(2a+3b)(2a-3b)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\(6(2a+3b)(2a-3b)\\\\).", workingOut: "\\\\(6(2a+3b)(2a-3b)\\\\)", graphData: null }
  ],
  // q16g = (1/9)x² - y²  (DOTS with fractions)
  'y10-3j-q16g': [
    { explanation: "Write as a difference of two squares: \\\\(\\frac{1}{9}x^2 - y^2 = \\left(\\frac{x}{3}\\right)^2 - y^2\\\\).", workingOut: "\\\\(\\left(\\frac{x}{3}\\right)^2 - y^2\\\\)", graphData: null },
    { explanation: "Apply \\\\((a+b)(a-b)=a^2-b^2\\\\) with \\\\(a=\\frac{x}{3}\\\\) and \\\\(b=y\\\\).", workingOut: "\\\\(\\left(\\frac{x}{3}+y\\right)\\left(\\frac{x}{3}-y\\right)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\(\\left(\\frac{x}{3}+y\\right)\\left(\\frac{x}{3}-y\\right)\\\\).", workingOut: "\\\\(\\left(\\frac{x}{3}+y\\right)\\left(\\frac{x}{3}-y\\right)\\\\)", graphData: null }
  ],
  // q16h = (2/9)x² - (8/25)y²  (DOTS with fractions, common factor first)
  'y10-3j-q16h': [
    { explanation: "Factor out \\\\(\\frac{2}{1}\\\\) (or note \\\\(\\frac{2}{9}x^2 - \\frac{8}{25}y^2 = 2(\\frac{x^2}{9} - \\frac{4y^2}{25})\\\\)).", workingOut: "\\\\(2\\left(\\frac{x^2}{9} - \\frac{4y^2}{25}\\right)\\\\)", graphData: null },
    { explanation: "Recognise \\\\(\\frac{x^2}{9} - \\frac{4y^2}{25} = \\left(\\frac{x}{3}\\right)^2 - \\left(\\frac{2y}{5}\\right)^2\\\\) — DOTS.", workingOut: "\\\\(2\\left(\\frac{x}{3}+\\frac{2y}{5}\\right)\\left(\\frac{x}{3}-\\frac{2y}{5}\\right)\\\\)", graphData: null },
    { explanation: "Final: \\\\(2\\left(\\frac{x}{3}+\\frac{2y}{5}\\right)\\left(\\frac{x}{3}-\\frac{2y}{5}\\right)\\\\).", workingOut: "\\\\(2\\left(\\frac{x}{3}+\\frac{2y}{5}\\right)\\left(\\frac{x}{3}-\\frac{2y}{5}\\right)\\\\)", graphData: null }
  ],

  // ── MONIC QUADRATICS that had wrong id mapping (q17 series actual questions) ─
  // q17a = x² + 7x + 12  (was mapped to 2x²+7x+3 steps!)
  'y10-3j-q17a': [
    { explanation: "To factorise \\\\(x^2+7x+12\\\\), find two numbers that multiply to \\\\(12\\\\) and add to \\\\(7\\\\).", workingOut: "\\\\(3 \\times 4 = 12, \\quad 3+4=7\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+3)(x+4)\\\\).", workingOut: "\\\\((x+3)(x+4)\\\\)", graphData: null },
    { explanation: "Check: \\\\((x+3)(x+4) = x^2+7x+12\\\\) ✓", workingOut: "\\\\((x+3)(x+4)\\\\)", graphData: null }
  ],
  // q17g = x² - 2x - 15
  'y10-3j-q17g': [
    { explanation: "Find two numbers that multiply to \\\\(-15\\\\) and add to \\\\(-2\\\\): try \\\\(3\\\\) and \\\\(-5\\\\).", workingOut: "\\\\(3 \\times (-5)=-15, \\quad 3+(-5)=-2\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+3)(x-5)\\\\).", workingOut: "\\\\((x+3)(x-5)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(x-5)\\\\).", workingOut: "\\\\((x+3)(x-5)\\\\)", graphData: null }
  ],
  // q17h = x² - 5x - 14
  'y10-3j-q17h': [
    { explanation: "Find two numbers multiplying to \\\\(-14\\\\) adding to \\\\(-5\\\\): \\\\(2\\\\) and \\\\(-7\\\\).", workingOut: "\\\\(2 \\times (-7)=-14, \\quad 2+(-7)=-5\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+2)(x-7)\\\\).", workingOut: "\\\\((x+2)(x-7)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+2)(x-7)\\\\).", workingOut: "\\\\((x+2)(x-7)\\\\)", graphData: null }
  ],
  // q17i = x² - 6x - 16
  'y10-3j-q17i': [
    { explanation: "Find two numbers multiplying to \\\\(-16\\\\) adding to \\\\(-6\\\\): \\\\(2\\\\) and \\\\(-8\\\\).", workingOut: "\\\\(2 \\times (-8)=-16, \\quad 2+(-8)=-6\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+2)(x-8)\\\\).", workingOut: "\\\\((x+2)(x-8)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+2)(x-8)\\\\).", workingOut: "\\\\((x+2)(x-8)\\\\)", graphData: null }
  ],

  // ── NON-MONIC using ac-method (q18 series actual questions) ──────────────────
  // q18g = 4x² - 5x - 6
  'y10-3j-q18g': [
    { explanation: "Non-monic: \\\\(a=4, c=-6\\\\), so \\\\(ac=-24\\\\). Find two numbers multiplying to \\\\(-24\\\\) adding to \\\\(-5\\\\): \\\\(3\\\\) and \\\\(-8\\\\).", workingOut: "\\\\(4x^2 + 3x - 8x - 6\\\\)", graphData: null },
    { explanation: "Group and factorise: \\\\(x(4x+3) - 2(4x+3) = (x-2)(4x+3)\\\\).", workingOut: "\\\\((x-2)(4x+3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x-2)(4x+3)\\\\).", workingOut: "\\\\((x-2)(4x+3)\\\\)", graphData: null }
  ],
  // q18h = 3x² - 4x - 15
  'y10-3j-q18h': [
    { explanation: "\\\\(ac = 3 \\times (-15) = -45\\\\). Find two numbers multiplying to \\\\(-45\\\\) adding to \\\\(-4\\\\): \\\\(5\\\\) and \\\\(-9\\\\).", workingOut: "\\\\(3x^2 + 5x - 9x - 15\\\\)", graphData: null },
    { explanation: "Group: \\\\(x(3x+5) - 3(3x+5) = (x-3)(3x+5)\\\\).", workingOut: "\\\\((x-3)(3x+5)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x-3)(3x+5)\\\\).", workingOut: "\\\\((x-3)(3x+5)\\\\)", graphData: null }
  ],
  // q18i = 5x² - 13x - 6
  'y10-3j-q18i': [
    { explanation: "\\\\(ac = 5 \\times (-6) = -30\\\\). Find two numbers multiplying to \\\\(-30\\\\) adding to \\\\(-13\\\\): \\\\(2\\\\) and \\\\(-15\\\\).", workingOut: "\\\\(5x^2 + 2x - 15x - 6\\\\)", graphData: null },
    { explanation: "Group: \\\\(x(5x+2) - 3(5x+2) = (x-3)(5x+2)\\\\).", workingOut: "\\\\((x-3)(5x+2)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x-3)(5x+2)\\\\).", workingOut: "\\\\((x-3)(5x+2)\\\\)", graphData: null }
  ],

  // ── NON-MONIC harder (q19 series) ────────────────────────────────────────────
  // q19e = 8x² - 26x + 15
  'y10-3j-q19e': [
    { explanation: "\\\\(ac = 8 \\times 15 = 120\\\\). Find two numbers multiplying to \\\\(120\\\\) adding to \\\\(-26\\\\): \\\\(-6\\\\) and \\\\(-20\\\\).", workingOut: "\\\\(8x^2 - 6x - 20x + 15\\\\)", graphData: null },
    { explanation: "Group: \\\\(2x(4x-3) - 5(4x-3) = (2x-5)(4x-3)\\\\).", workingOut: "\\\\((2x-5)(4x-3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x-5)(4x-3)\\\\).", workingOut: "\\\\((2x-5)(4x-3)\\\\)", graphData: null }
  ],
  // q19f = 15x² - 34x + 15
  'y10-3j-q19f': [
    { explanation: "\\\\(ac = 15 \\times 15 = 225\\\\). Find two numbers multiplying to \\\\(225\\\\) adding to \\\\(-34\\\\): \\\\(-9\\\\) and \\\\(-25\\\\).", workingOut: "\\\\(15x^2 - 9x - 25x + 15\\\\)", graphData: null },
    { explanation: "Group: \\\\(3x(5x-3) - 5(5x-3) = (3x-5)(5x-3)\\\\).", workingOut: "\\\\((3x-5)(5x-3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((3x-5)(5x-3)\\\\).", workingOut: "\\\\((3x-5)(5x-3)\\\\)", graphData: null }
  ],
  // q19g = 6x² - x - 15
  'y10-3j-q19g': [
    { explanation: "\\\\(ac = 6 \\times (-15) = -90\\\\). Find two numbers multiplying to \\\\(-90\\\\) adding to \\\\(-1\\\\): \\\\(9\\\\) and \\\\(-10\\\\).", workingOut: "\\\\(6x^2 + 9x - 10x - 15\\\\)", graphData: null },
    { explanation: "Group: \\\\(3x(2x+3) - 5(2x+3) = (3x-5)(2x+3)\\\\).", workingOut: "\\\\((3x-5)(2x+3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((3x-5)(2x+3)\\\\).", workingOut: "\\\\((3x-5)(2x+3)\\\\)", graphData: null }
  ],
  // q19h = 8x² - 10x - 3
  'y10-3j-q19h': [
    { explanation: "\\\\(ac = 8 \\times (-3) = -24\\\\). Find two numbers multiplying to \\\\(-24\\\\) adding to \\\\(-10\\\\): \\\\(2\\\\) and \\\\(-12\\\\).", workingOut: "\\\\(8x^2 + 2x - 12x - 3\\\\)", graphData: null },
    { explanation: "Group: \\\\(2x(4x+1) - 3(4x+1) = (2x-3)(4x+1)\\\\).", workingOut: "\\\\((2x-3)(4x+1)\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x-3)(4x+1)\\\\).", workingOut: "\\\\((2x-3)(4x+1)\\\\)", graphData: null }
  ],
  // q19i = 10x² - x - 21
  'y10-3j-q19i': [
    { explanation: "\\\\(ac = 10 \\times (-21) = -210\\\\). Find two numbers multiplying to \\\\(-210\\\\) adding to \\\\(-1\\\\): \\\\(14\\\\) and \\\\(-15\\\\).", workingOut: "\\\\(10x^2 + 14x - 15x - 21\\\\)", graphData: null },
    { explanation: "Group: \\\\(2x(5x+7) - 3(5x+7) = (2x-3)(5x+7)\\\\).", workingOut: "\\\\((2x-3)(5x+7)\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x-3)(5x+7)\\\\).", workingOut: "\\\\((2x-3)(5x+7)\\\\)", graphData: null }
  ],

  // ── NON-MONIC with common factor first (q20 series) ──────────────────────────
  // q20e = 8x² + 12x - 20
  'y10-3j-q20e': [
    { explanation: "Factor out 4 first: \\\\(8x^2+12x-20 = 4(2x^2+3x-5)\\\\). Now factorise the bracket: \\\\(ac=2\\times(-5)=-10\\\\). Numbers: \\\\(5\\\\) and \\\\(-2\\\\).", workingOut: "\\\\(4(2x^2+5x-2x-5)\\\\)", graphData: null },
    { explanation: "Group: \\\\(4[x(2x+5)-1(2x+5)] = 4(x-1)(2x+5)\\\\).", workingOut: "\\\\(4(x-1)(2x+5)\\\\)", graphData: null },
    { explanation: "Final: \\\\(4(x-1)(2x+5)\\\\).", workingOut: "\\\\(4(x-1)(2x+5)\\\\)", graphData: null }
  ],
  // q20f = 10x² + 25x + 10
  'y10-3j-q20f': [
    { explanation: "Factor out 5 first: \\\\(10x^2+25x+10 = 5(2x^2+5x+2)\\\\). Now factorise: \\\\(ac=4\\\\). Numbers adding to 5: \\\\(1\\\\) and \\\\(4\\\\).", workingOut: "\\\\(5(2x^2+x+4x+2)\\\\)", graphData: null },
    { explanation: "Group: \\\\(5[x(2x+1)+2(2x+1)] = 5(x+2)(2x+1)\\\\).", workingOut: "\\\\(5(x+2)(2x+1)\\\\)", graphData: null },
    { explanation: "Final: \\\\(5(x+2)(2x+1)\\\\).", workingOut: "\\\\(5(x+2)(2x+1)\\\\)", graphData: null }
  ],
  // q20g = 15x² - 50x - 40
  'y10-3j-q20g': [
    { explanation: "Factor out 5: \\\\(15x^2-50x-40 = 5(3x^2-10x-8)\\\\). \\\\(ac=-24\\\\). Numbers: \\\\(2\\\\) and \\\\(-12\\\\).", workingOut: "\\\\(5(3x^2+2x-12x-8)\\\\)", graphData: null },
    { explanation: "Group: \\\\(5[x(3x+2)-4(3x+2)] = 5(x-4)(3x+2)\\\\).", workingOut: "\\\\(5(x-4)(3x+2)\\\\)", graphData: null },
    { explanation: "Final: \\\\(5(x-4)(3x+2)\\\\).", workingOut: "\\\\(5(x-4)(3x+2)\\\\)", graphData: null }
  ],
  // q20h = -x² + 8x - 15
  'y10-3j-q20h': [
    { explanation: "Factor out \\\\(-1\\\\) first: \\\\(-x^2+8x-15 = -(x^2-8x+15)\\\\). Numbers multiplying to \\\\(15\\\\) adding to \\\\(-8\\\\): \\\\(-3\\\\) and \\\\(-5\\\\).", workingOut: "\\\\(-(x^2-8x+15)\\\\)", graphData: null },
    { explanation: "Factorise inside: \\\\(-(x-3)(x-5)\\\\).", workingOut: "\\\\(-(x-3)(x-5)\\\\)", graphData: null },
    { explanation: "Final: \\\\(-(x-3)(x-5)\\\\).", workingOut: "\\\\(-(x-3)(x-5)\\\\)", graphData: null }
  ],
  // q20i = -4x² - 10x - 6
  'y10-3j-q20i': [
    { explanation: "Factor out \\\\(-2\\\\): \\\\(-4x^2-10x-6 = -2(2x^2+5x+3)\\\\). \\\\(ac=6\\\\). Numbers adding to 5: \\\\(2\\\\) and \\\\(3\\\\).", workingOut: "\\\\(-2(2x^2+2x+3x+3)\\\\)", graphData: null },
    { explanation: "Group: \\\\(-2[2x(x+1)+3(x+1)] = -2(2x+3)(x+1)\\\\).", workingOut: "\\\\(-2(2x+3)(x+1)\\\\)", graphData: null },
    { explanation: "Final: \\\\(-2(2x+3)(x+1)\\\\).", workingOut: "\\\\(-2(2x+3)(x+1)\\\\)", graphData: null }
  ],
};

// ── Patch the file ────────────────────────────────────────────
let content = fs.readFileSync(FILE, 'utf8');
let fixedCount = 0;

for (const [id, steps] of Object.entries(FIXED_STEPS)) {
  const idStr = `"id": "${id}"`;
  const idIdx = content.indexOf(idStr);
  if (idIdx === -1) {
    console.log(`WARNING: id "${id}" not found`);
    continue;
  }

  const stepsStart = content.indexOf('"solutionSteps":', idIdx);
  if (stepsStart === -1) { console.log(`WARNING: no solutionSteps for "${id}"`); continue; }

  const arrStart = content.indexOf('[', stepsStart);
  let depth = 0, arrEnd = -1;
  for (let i = arrStart; i < content.length; i++) {
    if (content[i] === '[') depth++;
    else if (content[i] === ']') { depth--; if (depth === 0) { arrEnd = i; break; } }
  }
  if (arrEnd === -1) { console.log(`WARNING: no array end for "${id}"`); continue; }

  const stepsForJs = steps.map(step => {
    const expEscaped = step.explanation.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const woEscaped = step.workingOut ? step.workingOut.replace(/\\/g, '\\\\').replace(/"/g, '\\"') : null;
    return `      {\n        "explanation": "${expEscaped}",\n        "workingOut": ${woEscaped ? '"' + woEscaped + '"' : 'null'},\n        "graphData": null\n      }`;
  }).join(',\n');

  const replacement = `[\n${stepsForJs}\n    ]`;
  content = content.substring(0, arrStart) + replacement + content.substring(arrEnd + 1);
  fixedCount++;
  console.log(`Patched: ${id}`);
}

fs.writeFileSync(FILE, content);
console.log(`\nDone! Patched ${fixedCount} questions.`);
