const fs = require('fs');

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function formatTerm(coeff, variable, power) {
    if (coeff === 0) return '';
    let res = '';
    if (coeff < 0) res += '-';
    else res += '+';
    
    let absCoeff = Math.abs(coeff);
    if (absCoeff !== 1 || power === 0) {
        res += absCoeff;
    }
    
    if (power > 0) {
        res += variable;
        if (power > 1) {
            res += '^' + power;
        }
    }
    return res;
}

function formatPolynomial(coeffs, variable) {
    // coeffs from highest power to lowest
    let res = '';
    let power = coeffs.length - 1;
    for (let c of coeffs) {
        if (c !== 0) {
            let term = formatTerm(c, variable, power);
            if (res === '' && term.startsWith('+')) {
                res += term.substring(1);
            } else if (res === '' && term.startsWith('-')) {
                res += term;
            } else {
                res += ' ' + term[0] + ' ' + term.substring(1);
            }
        }
        power--;
    }
    if (res === '') return '0';
    return res;
}

function generateFactored(qId, type, varName, multiplier, a, b, c, d) {
    // Equation: multiplier * (a*x + b) * (c*x + d) = 0
    // Roots: x = -b/a, x = -d/c
    
    let leftSide = '';
    if (multiplier !== 1) leftSide += multiplier;
    
    let factor1 = '';
    if (a !== 0) {
        if (b === 0) {
            factor1 = (a === 1 ? '' : a) + varName;
        } else {
            let sign = b > 0 ? '+' : '-';
            factor1 = `(${(a === 1 ? '' : (a === -1 ? '-' : a))}${varName} ${sign} ${Math.abs(b)})`;
        }
    } else {
        factor1 = `${b}`;
    }
    
    let factor2 = '';
    if (c !== 0) {
        if (d === 0) {
            factor2 = (c === 1 ? '' : c) + varName;
        } else {
            let sign = d > 0 ? '+' : '-';
            factor2 = `(${(c === 1 ? '' : (c === -1 ? '-' : c))}${varName} ${sign} ${Math.abs(d)})`;
        }
    } else {
        factor2 = `${d}`;
    }

    // if factor1 is just varName, no parens needed
    if (a !== 0 && b === 0) {
        leftSide += factor1 + factor2;
    } else if (c !== 0 && d === 0) {
        leftSide += factor2 + factor1;
    } else {
        leftSide += factor1 + factor2;
    }
    
    let root1Str = b === 0 ? '0' : (a === 1 ? `${-b}` : (b/a < 0 ? `-\\frac{${Math.abs(b)}}{${Math.abs(a)}}` : `\\frac{${Math.abs(b)}}{${Math.abs(a)}}`));
    let root2Str = d === 0 ? '0' : (c === 1 ? `${-d}` : (d/c < 0 ? `-\\frac{${Math.abs(d)}}{${Math.abs(c)}}` : `\\frac{${Math.abs(d)}}{${Math.abs(c)}}`));

    // Simplify fractions for roots
    function simplifyFrac(num, den) {
        let g = gcd(num, den);
        num /= g;
        den /= g;
        if (den === 1) return `${num}`;
        if (num < 0 && den < 0) { num = -num; den = -den; }
        else if (den < 0) { num = -num; den = -den; }
        if (num < 0) return `-\\frac{${Math.abs(num)}}{${den}}`;
        return `\\frac{${num}}{${den}}`;
    }
    
    if (a !== 0) root1Str = simplifyFrac(-b, a);
    if (c !== 0) root2Str = simplifyFrac(-d, c);

    let ans = '';
    if (root1Str === root2Str) ans = `${varName} = ${root1Str}`;
    else ans = `${varName} = ${root1Str}, ${varName} = ${root2Str}`;
    
    let qText = `Solve the equation:\\n\\n$$${leftSide} = 0$$`;
    
    let steps = [];
    steps.push({
        explanation: "By the null factor law, at least one of the factors must be zero.",
        workingOut: b === 0 && a !== 0 ? `${varName} = 0 \\quad \\text{or} \\quad ${c}${varName} + ${d} = 0` : 
                    d === 0 && c !== 0 ? `${a}${varName} + ${b} = 0 \\quad \\text{or} \\quad ${varName} = 0` :
                    `${a === 1 ? '' : a}${varName} ${b > 0 ? '+' : '-'} ${Math.abs(b)} = 0 \\quad \\text{or} \\quad ${c === 1 ? '' : c}${varName} ${d > 0 ? '+' : '-'} ${Math.abs(d)} = 0`
    });
    steps.push({
        explanation: "Solve each linear equation.",
        workingOut: ans
    });
    
    return {
        id: qId,
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: qText,
        a: ans,
        t: "Solution of quadratic equations",
        hint: "Use the null factor law: if $AB = 0$, then $A = 0$ or $B = 0$.",
        solutionSteps: steps,
        graphData: null
    };
}

function generateQ1() {
    let qs = [];
    // 1a: x(x+3)=0 -> y(y+4)=0
    qs.push(generateFactored("y10-5a-q1a", 1, "y", 1, 1, 0, 1, 4));
    // 1b: x(x-7)=0 -> m(m-5)=0
    qs.push(generateFactored("y10-5a-q1b", 1, "m", 1, 1, 0, 1, -5));
    // 1c: 3x(x+5)=0 -> 2p(p+6)=0
    qs.push(generateFactored("y10-5a-q1c", 1, "p", 2, 1, 0, 1, 6));
    // 1d: (x-3)(x+6)=0 -> (y-2)(y+7)=0
    qs.push(generateFactored("y10-5a-q1d", 1, "y", 1, 1, -2, 1, 7));
    // 1e: (x+7)(x+9)=0 -> (k+5)(k+8)=0
    qs.push(generateFactored("y10-5a-q1e", 1, "k", 1, 1, 5, 1, 8));
    // 1f: (x-10)(x-7)=0 -> (n-8)(n-3)=0
    qs.push(generateFactored("y10-5a-q1f", 1, "n", 1, 1, -8, 1, -3));
    // 1g: 4x(5x+4)=0 -> 3m(2m+5)=0
    qs.push(generateFactored("y10-5a-q1g", 1, "m", 3, 1, 0, 2, 5));
    // 1h: (4x+3)(3x-2)=0 -> (5y+2)(2y-3)=0
    qs.push(generateFactored("y10-5a-q1h", 1, "y", 1, 5, 2, 2, -3));
    // 1i: (2x+7)(x+4)=0 -> (3x+5)(x+2)=0
    qs.push(generateFactored("y10-5a-q1i", 1, "x", 1, 3, 5, 1, 2));
    // 1j: (2x-3)(3x+4)=0 -> (3k-4)(2k+5)=0
    qs.push(generateFactored("y10-5a-q1j", 1, "k", 1, 3, -4, 2, 5));
    // 1k: 3(2x-5)(x+4)=0 -> 4(3y-2)(y+5)=0
    qs.push(generateFactored("y10-5a-q1k", 1, "y", 4, 3, -2, 1, 5));
    // 1l: 7(2-3x)(4-3x)=0 -> 5(3-2m)(5-2m)=0
    let q1l = generateFactored("y10-5a-q1l", 1, "m", 5, -2, 3, -2, 5);
    qs.push(q1l);
    return qs;
}

function generateExpanded(qId, varName, eqType, A, B, C, a, b, c, d, multiplier) {
    // A x^2 + B x + C = RHS
    // Usually RHS is 0. 
    // Roots are from multiplier * (ax+b)(cx+d) = 0
    // multiplier * (ac x^2 + (ad+bc)x + bd) = 0
    
    function simplifyFrac(num, den) {
        let g = gcd(num, den);
        num /= g;
        den /= g;
        if (den === 1) return `${num}`;
        if (num < 0 && den < 0) { num = -num; den = -den; }
        else if (den < 0) { num = -num; den = -den; }
        if (num < 0) return `-\\frac{${Math.abs(num)}}{${den}}`;
        return `\\frac{${num}}{${den}}`;
    }
    
    let r1 = simplifyFrac(-b, a);
    let r2 = simplifyFrac(-d, c);
    let ans = r1 === r2 ? `${varName} = ${r1}` : `${varName} = ${r1}, ${varName} = ${r2}`;
    
    let qText = '';
    let steps = [];
    
    if (eqType === 'standard') {
        qText = `Solve the quadratic equation by factorising:\\n\\n$$${formatPolynomial([A, B, C], varName)} = 0$$`;
        
        // Factor out multiplier if > 1
        if (multiplier !== 1) {
            steps.push({
                explanation: "Divide both sides by the common factor.",
                workingOut: `${formatPolynomial([A/multiplier, B/multiplier, C/multiplier], varName)} = 0`
            });
        }
        
        let fac1 = a === 1 && b === 0 ? varName : `(${(a === 1 ? '' : (a === -1 ? '-' : a))}${varName} ${b > 0 ? '+' : '-'} ${Math.abs(b)})`;
        let fac2 = c === 1 && d === 0 ? varName : `(${(c === 1 ? '' : (c === -1 ? '-' : c))}${varName} ${d > 0 ? '+' : '-'} ${Math.abs(d)})`;
        if (a === 1 && b === 0) fac1 = varName;
        
        let factoredForm = fac1 + fac2;
        if (a !== 0 && b === 0) factoredForm = fac1 + fac2; // y(y+...)
        else if (c !== 0 && d === 0) factoredForm = fac2 + fac1;
        
        steps.push({
            explanation: "Factorise the quadratic expression.",
            workingOut: `${factoredForm} = 0`
        });
        steps.push({
            explanation: "Apply the null factor law.",
            workingOut: ans
        });
    } else if (eqType === 'shifted_x') {
        // e.g. x^2 = 8x
        qText = `Solve the equation:\\n\\n$$${formatPolynomial([A, 0, C], varName)} = ${formatPolynomial([-B], varName)}$$`;
        steps.push({
            explanation: "Rearrange the equation so one side is zero.",
            workingOut: `${formatPolynomial([A, B, C], varName)} = 0`
        });
        let factoredForm = `${varName}(${(a === 1 ? '' : a)}${varName} ${d > 0 ? '+' : '-'} ${Math.abs(d)})`; // Assuming form x(x-8)=0
        steps.push({
            explanation: "Factorise.",
            workingOut: `${factoredForm} = 0`
        });
        steps.push({
            explanation: "Apply the null factor law.",
            workingOut: ans
        });
    } else if (eqType === 'shifted_constant') {
        // e.g. x^2 + 8x = -16
        qText = `Solve the equation:\\n\\n$$${formatPolynomial([A, B, 0], varName)} = ${-C}$$`;
        steps.push({
            explanation: "Rearrange the equation so one side is zero.",
            workingOut: `${formatPolynomial([A, B, C], varName)} = 0`
        });
        let fac1 = `(${(a === 1 ? '' : a)}${varName} ${b > 0 ? '+' : '-'} ${Math.abs(b)})`;
        let fac2 = `(${(c === 1 ? '' : c)}${varName} ${d > 0 ? '+' : '-'} ${Math.abs(d)})`;
        steps.push({
            explanation: "Factorise.",
            workingOut: `${fac1}${fac2} = 0`
        });
        steps.push({
            explanation: "Solve.",
            workingOut: ans
        });
    } else if (eqType === 'mixed_shift') {
        // e.g. 15 = 8x - x^2 -> x^2 - 8x + 15 = 0
        qText = `Solve the equation:\\n\\n$$${-C} = ${formatPolynomial([-A, -B, 0], varName)}$$`;
        steps.push({
            explanation: "Rearrange the equation to the standard form $ax^2 + bx + c = 0$.",
            workingOut: `${formatPolynomial([A, B, C], varName)} = 0`
        });
        let fac1 = `(${(a === 1 ? '' : a)}${varName} ${b > 0 ? '+' : '-'} ${Math.abs(b)})`;
        let fac2 = `(${(c === 1 ? '' : c)}${varName} ${d > 0 ? '+' : '-'} ${Math.abs(d)})`;
        steps.push({
            explanation: "Factorise.",
            workingOut: `${fac1}${fac2} = 0`
        });
        steps.push({
            explanation: "Solve.",
            workingOut: ans
        });
    } else if (eqType === 'fraction_shift') {
        // e.g. x^2 = 1/2 x
        qText = `Solve the equation:\\n\\n$$${varName}^2 = \\frac{1}{${-B}}${varName}$$`;
        steps.push({
            explanation: "Multiply by the denominator to clear fractions.",
            workingOut: `${-B}${varName}^2 = ${varName}`
        });
        steps.push({
            explanation: "Rearrange to equal zero.",
            workingOut: `${-B}${varName}^2 - ${varName} = 0`
        });
        steps.push({
            explanation: "Factorise.",
            workingOut: `${varName}(${-B}${varName} - 1) = 0`
        });
        steps.push({
            explanation: "Solve.",
            workingOut: ans
        });
    }

    return {
        id: qId,
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: qText,
        a: ans,
        t: "Solution of quadratic equations",
        hint: "Rearrange the equation so that one side is zero, then factorise.",
        solutionSteps: steps,
        graphData: null
    };
}

function generateQ2() {
    let qs = [];
    // 2a: x^2 - 5x = 0 -> y^2 - 6y = 0  (A=1, B=-6, C=0, a=1,b=0, c=1,d=-6)
    qs.push(generateExpanded("y10-5a-q2a", "y", "standard", 1, -6, 0, 1, 0, 1, -6, 1));
    // 2b: x^2 + 7x = 0 -> m^2 + 8m = 0
    qs.push(generateExpanded("y10-5a-q2b", "m", "standard", 1, 8, 0, 1, 0, 1, 8, 1));
    // 2c: x^2 + 8x = 0 -> k^2 + 9k = 0
    qs.push(generateExpanded("y10-5a-q2c", "k", "standard", 1, 9, 0, 1, 0, 1, 9, 1));
    // 2d: x^2 - 25x = 0 -> p^2 - 16p = 0
    qs.push(generateExpanded("y10-5a-q2d", "p", "standard", 1, -16, 0, 1, 0, 1, -16, 1));
    // 2e: x^2 = -18x -> y^2 = -12y  (x^2+12x=0 -> x(x+12)=0)
    qs.push(generateExpanded("y10-5a-q2e", "y", "shifted_x", 1, 12, 0, 1, 0, 1, 12, 1));
    // 2f: x^2 = 1/2 x -> n^2 = 1/3 n (B=-1/3 conceptually, but we handle via fraction_shift: A=3, B=-1 -> 3n^2 - n = 0, roots 0, 1/3)
    qs.push(generateExpanded("y10-5a-q2f", "n", "fraction_shift", 3, -1, 0, 1, 0, 3, -1, 1));
    return qs;
}

function genEq(id, varName, a, b, c, d, eqType='standard') {
    let A = a * c;
    let B = a * d + b * c;
    let C = b * d;
    return generateExpanded(id, varName, eqType, A, B, C, a, b, c, d, 1);
}

function generateQ3() {
    let qs = [];
    qs.push(genEq("y10-5a-q3a", "y", 1, 2, 1, 7)); // y^2 + 9y + 14 = 0
    qs.push(genEq("y10-5a-q3b", "m", 1, 3, 1, 5)); // m^2 + 8m + 15 = 0
    qs.push(genEq("y10-5a-q3c", "p", 1, 4, 1, 8)); // p^2 + 12p + 32 = 0
    qs.push(genEq("y10-5a-q3d", "y", 1, 5, 1, 5)); // y^2 + 10y + 25 = 0
    qs.push(genEq("y10-5a-q3e", "n", 1, -2, 1, -4)); // n^2 - 6n + 8 = 0 -> -3, -5
    qs.push(genEq("y10-5a-q3f", "x", 1, -2, 1, 4)); // x^2 + 2x - 8 = 0
    qs.push(genEq("y10-5a-q3g", "m", 1, -4, 1, 5)); // m^2 + m - 20 = 0
    qs.push(genEq("y10-5a-q3h", "y", 1, -5, 1, 6)); // y^2 + y - 30 = 0
    qs.push(genEq("y10-5a-q3i", "k", 1, -5, 1, 10)); // k^2 + 5k - 50 = 0
    qs.push(genEq("y10-5a-q3j", "p", 1, -2, 1, -6)); // p^2 - 8p + 12 = 0
    qs.push(genEq("y10-5a-q3k", "x", 1, -3, 1, -5)); // x^2 - 8x + 15 = 0
    qs.push(genEq("y10-5a-q3l", "m", 1, -6, 1, -6)); // m^2 - 12m + 36 = 0
    qs.push(genEq("y10-5a-q3m", "y", 1, -4, 1, -8)); // y^2 - 12y + 32 = 0
    qs.push(genEq("y10-5a-q3n", "k", 1, -8, 1, 3)); // k^2 - 5k - 24 = 0
    qs.push(genEq("y10-5a-q3o", "p", 1, -12, 1, -12)); // p^2 - 24p + 144 = 0
    return qs;
}

function generateQ4() {
    let qs = [];
    qs.push(genEq("y10-5a-q4a", "x", 1, 0, 1, -6, "shifted_x")); // x^2 = 6x
    qs.push(genEq("y10-5a-q4b", "y", 1, -2, 1, -7, "shifted_constant")); // y^2 - 9y = -14 -> y^2 - 9y + 14 = 0
    qs.push(genEq("y10-5a-q4c", "m", 1, -1, 2, 1, "standard")); // 2m^2 - m - 1 = 0
    qs.push(genEq("y10-5a-q4d", "k", 1, 3, 1, 3, "shifted_constant")); // k^2 + 6k = -9
    qs.push(genEq("y10-5a-q4e", "x", 1, -2, 1, -4, "mixed_shift")); // 8 = 6x - x^2 -> x^2 - 6x + 8 = 0
    qs.push(genEq("y10-5a-q4f", "p", 1, -8, 1, 8, "shifted_constant")); // p^2 - 64 = 0
    qs.push(genEq("y10-5a-q4g", "y", 1, 0, 1, 4, "shifted_x")); // y^2 = -4y
    qs.push(genEq("y10-5a-q4h", "h", 1, -4, 1, 3, "mixed_shift")); // 12 = 7h - h^2 -> h^2 - 7h + 12 = 0 (Wait mixed_shift makes RHS C? Let's check.)
    
    // For 4h: 12 = 7h - h^2. So C = 12, A = 1, B = -7. Root: (h-3)(h-4)=0.
    let q4h = generateExpanded("y10-5a-q4h", "h", "mixed_shift", 1, -7, 12, 1, -3, 1, -4, 1);
    qs.push(q4h);
    
    // 4i: x^2 + 9 = 0 -> no solution. original was x^2 + 9 = 0.
    // The instructions say "Solve, if possible". We need to handle this.
    qs.push({
        id: "y10-5a-q4i",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve, if possible:\\n\\n$$x^2 + 16 = 0$$",
        a: "no solution",
        t: "Solution of quadratic equations",
        hint: "Can a real square be negative?",
        solutionSteps: [
            { explanation: "Rearrange the equation.", workingOut: "x^2 = -16" },
            { explanation: "The square of a real number cannot be negative.", workingOut: "\\text{No real solution}" }
        ],
        graphData: null
    });
    
    // 4j: 9a - 10 = -a^2 -> a^2 + 9a - 10 = 0 -> (a+10)(a-1) = 0
    let q4j = generateExpanded("y10-5a-q4j", "a", "mixed_shift", 1, 8, -9, 1, 9, 1, -1, 1); 
    // Wait, mixed_shift is for -C = -A x^2 - Bx. Let's just use standard and write custom for 4j.
    qs.push({
        id: "y10-5a-q4j",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve:\\n\\n$$8y - 9 = -y^2$$",
        a: "y = -9, y = 1",
        t: "Solution of quadratic equations",
        hint: "Move all terms to one side to form a quadratic equation.",
        solutionSteps: [
            { explanation: "Add $y^2$ to both sides.", workingOut: "y^2 + 8y - 9 = 0" },
            { explanation: "Factorise.", workingOut: "(y + 9)(y - 1) = 0" },
            { explanation: "Solve.", workingOut: "y = -9, y = 1" }
        ],
        graphData: null
    });

    // 4k: 8y = y^2 + 7 -> y^2 - 8y + 7 = 0
    qs.push({
        id: "y10-5a-q4k",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve:\\n\\n$$6m = m^2 + 5$$",
        a: "m = 1, m = 5",
        t: "Solution of quadratic equations",
        hint: "Rearrange into standard form $m^2 - 6m + 5 = 0$.",
        solutionSteps: [
            { explanation: "Rearrange to equal zero.", workingOut: "m^2 - 6m + 5 = 0" },
            { explanation: "Factorise.", workingOut: "(m - 1)(m - 5) = 0" },
            { explanation: "Solve.", workingOut: "m = 1, m = 5" }
        ],
        graphData: null
    });

    // 4l: a^2 - 1 = 0 -> m^2 - 4 = 0
    qs.push(genEq("y10-5a-q4l", "m", 1, -2, 1, 2));
    
    return qs;
}

function genEqMulti(id, varName, a, b, c, d, multi) {
    let A = a * c * multi;
    let B = (a * d + b * c) * multi;
    let C = b * d * multi;
    return generateExpanded(id, varName, 'standard', A, B, C, a, b, c, d, multi);
}

function generateQ5() {
    let qs = [];
    // 5a: 2x^2 + 6x + 4 = 0 -> 3y^2 + 12y + 9 = 0 (multi 3, roots -1, -3)
    qs.push(genEqMulti("y10-5a-q5a", "y", 1, 1, 1, 3, 3));
    // 5b: 3a^2 - 15a + 18 = 0 -> 2m^2 - 14m + 20 = 0 (multi 2, roots 2, 5)
    qs.push(genEqMulti("y10-5a-q5b", "m", 1, -2, 1, -5, 2));
    // 5c: 4x^2 + 8x - 140 = 0 -> 5p^2 + 15p - 50 = 0 (multi 5, roots 2, -5)
    qs.push(genEqMulti("y10-5a-q5c", "p", 1, -2, 1, 5, 5));
    return qs;
}

function generateQ6() {
    let qs = [];
    // Harder quadratics: non-monic
    // a: (2x+3)(x+4)=0 -> 2x^2+11x+12=0. Let's do (3y+2)(y+5)=0 -> 3y^2+17y+10=0
    qs.push(genEq("y10-5a-q6a", "y", 3, 2, 1, 5));
    // b: (3x+1)(x+4)=0 -> 3x^2+13x+4=0. Let's do (2m+1)(m+6)=0 -> 2m^2+13m+6=0
    qs.push(genEq("y10-5a-q6b", "m", 2, 1, 1, 6));
    // c: (2x+3)(x+2)=0 -> 2x^2+7x+6=0. Let's do (3k+4)(k+2)=0 -> 3k^2+10k+8=0
    qs.push(genEq("y10-5a-q6c", "k", 3, 4, 1, 2));
    // d: (2x+1)(x-2)=0 -> 2x^2-3x-2=0. Let's do (3p+1)(p-3)=0 -> 3p^2-8p-3=0
    qs.push(genEq("y10-5a-q6d", "p", 3, 1, 1, -3));
    // e: (2x-3)(x-3)=0 -> 2x^2-9x+9=0. Let's do (3y-2)(y-4)=0 -> 3y^2-14y+8=0
    qs.push(genEq("y10-5a-q6e", "y", 3, -2, 1, -4));
    // f: (3x-4)(x-2)=0 -> 3x^2-10x+8=0. Let's do (2m-5)(m-3)=0 -> 2m^2-11m+15=0
    qs.push(genEq("y10-5a-q6f", "m", 2, -5, 1, -3));
    // g: (5x+4)(2x+3)=0 -> 10x^2+23x+12=0. Let's do (3k+5)(2k+1)=0 -> 6k^2+13k+5=0
    qs.push(genEq("y10-5a-q6g", "k", 3, 5, 2, 1));
    // h: (3x-4)(2x-3)=0 -> 6x^2-17x+12=0. Let's do (4p-3)(2p-1)=0 -> 8p^2-10p+3=0
    qs.push(genEq("y10-5a-q6h", "p", 4, -3, 2, -1));
    // i: 8x^2 = 6x + 5 -> 8x^2 - 6x - 5 = 0 -> (4x-5)(2x+1)=0
    qs.push({
        id: "y10-5a-q6i",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve:\\n\\n$$6y^2 = 7y + 5$$",
        a: "y = -\\frac{1}{2}, y = \\frac{5}{3}",
        t: "Solution of quadratic equations",
        hint: "Rearrange to $6y^2 - 7y - 5 = 0$ before factorising.",
        solutionSteps: [
            { explanation: "Rearrange.", workingOut: "6y^2 - 7y - 5 = 0" },
            { explanation: "Factorise.", workingOut: "(2y + 1)(3y - 5) = 0" },
            { explanation: "Solve.", workingOut: "y = -\\frac{1}{2}, y = \\frac{5}{3}" }
        ],
        graphData: null
    });
    // j: 12x^2 = x + 6 -> (4x-3)(3x+2)=0
    qs.push({
        id: "y10-5a-q6j",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve:\\n\\n$$10m^2 = 3m + 4$$",
        a: "m = -\\frac{1}{2}, m = \\frac{4}{5}",
        t: "Solution of quadratic equations",
        hint: "Rearrange to $10m^2 - 3m - 4 = 0$ before factorising.",
        solutionSteps: [
            { explanation: "Rearrange.", workingOut: "10m^2 - 3m - 4 = 0" },
            { explanation: "Factorise.", workingOut: "(2m + 1)(5m - 4) = 0" },
            { explanation: "Solve.", workingOut: "m = -\\frac{1}{2}, m = \\frac{4}{5}" }
        ],
        graphData: null
    });
    // k: 12x^2 = 5x + 2 -> (4x+1)(3x-2)=0
    qs.push({
        id: "y10-5a-q6k",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve:\\n\\n$$15k^2 = 7k + 2$$",
        a: "k = -\\frac{1}{5}, k = \\frac{2}{3}",
        t: "Solution of quadratic equations",
        hint: "Rearrange to $15k^2 - 7k - 2 = 0$.",
        solutionSteps: [
            { explanation: "Rearrange.", workingOut: "15k^2 - 7k - 2 = 0" },
            { explanation: "Factorise.", workingOut: "(5k + 1)(3k - 2) = 0" },
            { explanation: "Solve.", workingOut: "k = -\\frac{1}{5}, k = \\frac{2}{3}" }
        ],
        graphData: null
    });
    // l: 6x^2 + 11x = 10 -> (3x-2)(2x+5)=0
    qs.push({
        id: "y10-5a-q6l",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve:\\n\\n$$8p^2 + 10p = 3$$",
        a: "p = -\\frac{3}{2}, p = \\frac{1}{4}",
        t: "Solution of quadratic equations",
        hint: "Rearrange to $8p^2 + 10p - 3 = 0$.",
        solutionSteps: [
            { explanation: "Rearrange.", workingOut: "8p^2 + 10p - 3 = 0" },
            { explanation: "Factorise.", workingOut: "(2p + 3)(4p - 1) = 0" },
            { explanation: "Solve.", workingOut: "p = -\\frac{3}{2}, p = \\frac{1}{4}" }
        ],
        graphData: null
    });
    // m: 3x^2 = 19x + 14 -> (3x+2)(x-7)=0
    qs.push({
        id: "y10-5a-q6m",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve:\\n\\n$$2y^2 = 11y + 21$$",
        a: "y = -\\frac{3}{2}, y = 7",
        t: "Solution of quadratic equations",
        hint: "Rearrange to $2y^2 - 11y - 21 = 0$.",
        solutionSteps: [
            { explanation: "Rearrange.", workingOut: "2y^2 - 11y - 21 = 0" },
            { explanation: "Factorise.", workingOut: "(2y + 3)(y - 7) = 0" },
            { explanation: "Solve.", workingOut: "y = -\\frac{3}{2}, y = 7" }
        ],
        graphData: null
    });
    // n: 5x^2 + 17x + 6 = 0 -> (5x+2)(x+3)=0
    qs.push(genEq("y10-5a-q6n", "m", 3, 2, 1, 4)); // (3m+2)(m+4)=0 -> 3m^2+14m+8=0
    // o: 12x^2 - 31x - 15 = 0 -> (4x+3)(3x-5)=0
    qs.push(genEq("y10-5a-q6o", "k", 5, 2, 2, -3)); // (5k+2)(2k-3)=0 -> 10k^2-11k-6=0
    // p: 15x^2 + 224x = 15 -> (15x-1)(x+15)=0
    qs.push({
        id: "y10-5a-q6p",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve:\\n\\n$$8x^2 + 63x = 8$$",
        a: "x = -8, x = \\frac{1}{8}",
        t: "Solution of quadratic equations",
        hint: "Rearrange to $8x^2 + 63x - 8 = 0$.",
        solutionSteps: [
            { explanation: "Rearrange.", workingOut: "8x^2 + 63x - 8 = 0" },
            { explanation: "Factorise.", workingOut: "(x + 8)(8x - 1) = 0" },
            { explanation: "Solve.", workingOut: "x = -8, x = \\frac{1}{8}" }
        ],
        graphData: null
    });
    // q: 72x^2 - 145x + 72 = 0 -> (9x-8)(8x-9)=0
    qs.push(genEq("y10-5a-q6q", "p", 5, -4, 4, -5)); // (5p-4)(4p-5)=0 -> 20p^2 - 41p + 20 = 0
    // r: 6 + 5x - 6x^2 = 0 -> (2+3x)(3-2x)=0 
    qs.push({
        id: "y10-5a-q6r",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve:\\n\\n$$10 + 3y - y^2 = 0$$",
        a: "y = -2, y = 5",
        t: "Solution of quadratic equations",
        hint: "Multiply by $-1$ to make the leading coefficient positive.",
        solutionSteps: [
            { explanation: "Rearrange.", workingOut: "y^2 - 3y - 10 = 0" },
            { explanation: "Factorise.", workingOut: "(y + 2)(y - 5) = 0" },
            { explanation: "Solve.", workingOut: "y = -2, y = 5" }
        ],
        graphData: null
    });

    return qs;
}

function generateQ7() {
    let qs = [];
    // 7a: 12x^2 - 22x + 8 = 0 -> multi 2: 6x^2 - 11x + 4 = 0 -> (3x-4)(2x-1)
    // Let's do multi 3: 3*(2x^2 - 7x + 3) -> 6x^2 - 21x + 9 = 0
    qs.push(genEqMulti("y10-5a-q7a", "y", 2, -1, 1, -3, 3));
    
    // 7b: 72x^2 - 78x - 15 = 0 -> multi 3: 24x^2 - 26x - 5 = 0 -> (6x+1)(4x-5)
    // Let's do multi 2: 2*(12x^2 - 7x - 10) -> 24x^2 - 14x - 20 = 0 -> (4x-5)(3x+2)
    qs.push(genEqMulti("y10-5a-q7b", "m", 4, -5, 3, 2, 2));

    // 7c: 12x^2 - 21x + 9 = 0 -> multi 3: 4x^2 - 7x + 3 = 0 -> (4x-3)(x-1)
    // Let's do multi 4: 4*(3k^2 - 4k + 1) -> 12k^2 - 16k + 4 = 0
    qs.push(genEqMulti("y10-5a-q7c", "k", 3, -1, 1, -1, 4));

    // 7d: 10x^2 + 5x - 30 = 0 -> multi 5: 2x^2 + x - 6 = 0 -> (2x-3)(x+2)
    qs.push(genEqMulti("y10-5a-q7d", "p", 3, -2, 1, 3, 4)); // 4*(3p^2 + 7p - 6) -> 12p^2 + 28p - 24 = 0
    
    // 7e: 72x^2 - 228x + 120 = 0 -> multi 12: 6x^2 - 19x + 10 = 0 -> (3x-2)(2x-5)
    qs.push(genEqMulti("y10-5a-q7e", "y", 4, -1, 2, -3, 5)); // 5*(8y^2 - 14y + 3) -> 40y^2 - 70y + 15 = 0

    // 7f: 90x^2 = 75x + 60 -> 15*(6x^2 - 5x - 4) = 0 -> (3x-4)(2x+1)
    // Create equivalent structure
    qs.push({
        id: "y10-5a-q7f",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve, remembering first to divide by any common factor:\\n\\n$$40m^2 = 60m + 100$$",
        a: "m = -1, m = \\frac{5}{2}",
        t: "Solution of quadratic equations",
        hint: "Divide by 20 first, then rearrange.",
        solutionSteps: [
            { explanation: "Divide by common factor 20.", workingOut: "2m^2 = 3m + 5" },
            { explanation: "Rearrange.", workingOut: "2m^2 - 3m - 5 = 0" },
            { explanation: "Factorise.", workingOut: "(2m - 5)(m + 1) = 0" },
            { explanation: "Solve.", workingOut: "m = -1, m = \\frac{5}{2}" }
        ],
        graphData: null
    });

    // 7g: 100x^2 - 290x + 100 = 0 -> 10*(10x^2 - 29x + 10) = 0 -> (5x-2)(2x-5)
    qs.push(genEqMulti("y10-5a-q7g", "k", 3, -2, 2, -3, 10)); // 10*(6k^2 - 13k + 6) -> 60k^2 - 130k + 60 = 0

    // 7h: 160x^2 + 136x + 24 = 0 -> 8*(20x^2 + 17x + 3) = 0 -> (5x+3)(4x+1)
    qs.push(genEqMulti("y10-5a-q7h", "p", 3, 2, 4, 1, 6)); // 6*(12p^2 + 11p + 2) -> 72p^2 + 66p + 12 = 0

    // 7i: 10x^2 - 25x + 10 = 0 -> 5*(2x^2 - 5x + 2) = 0 -> (2x-1)(x-2)
    qs.push(genEqMulti("y10-5a-q7i", "y", 3, -1, 1, -3, 4)); // 4*(3y^2 - 10y + 3) -> 12y^2 - 40y + 12 = 0

    // 7j: 28x^2 - 49x - 105 = 0 -> 7*(4x^2 - 7x - 15) = 0 -> (4x+5)(x-3)
    qs.push(genEqMulti("y10-5a-q7j", "m", 5, 2, 1, -4, 3)); // 3*(5m^2 - 18m - 8) -> 15m^2 - 54m - 24 = 0

    // 7k: 42m^2 - 2m - 4 = 0 -> 2*(21m^2 - m - 2) = 0 -> (7m+2)(3m-1)
    qs.push(genEqMulti("y10-5a-q7k", "k", 5, -2, 4, 1, 2)); // 2*(20k^2 - 3k - 2) -> 40k^2 - 6k - 4 = 0

    // 7l: 8x^2 + 46x - 70 = 0 -> 2*(4x^2 + 23x - 35) = 0 -> (4x-5)(x+7)
    qs.push(genEqMulti("y10-5a-q7l", "p", 3, -4, 1, 6, 2)); // 2*(3p^2 + 14p - 24) -> 6p^2 + 28p - 48 = 0

    return qs;
}

let allQs = [];
allQs = allQs.concat(generateQ1());
allQs = allQs.concat(generateQ2());
allQs = allQs.concat(generateQ3());
allQs = allQs.concat(generateQ4());
allQs = allQs.concat(generateQ5());
allQs = allQs.concat(generateQ6());
allQs = allQs.concat(generateQ7());

let jsContent = `export const Y10_CH5A_QUESTIONS = ${JSON.stringify(allQs, null, 2)};\n`;
fs.writeFileSync('src/constants/seedYear10Ch5AQuestions.js', jsContent);
console.log("Done generating " + allQs.length + " questions.");
