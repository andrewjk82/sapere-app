/**
 * Rewrite ALL y10-9a solutionSteps with real index-law working
 * (replaces generic template explanations + "State the rule" placeholders).
 *
 * Usage: node tools/scripts/rewriteY10Ch9ASolutionSteps.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.resolve(__dirname, '../../src/constants/seedYear10Ch9Questions.js');

const step = (explanation, workingOut) => ({
  explanation,
  workingOut,
  graphData: null,
});

/** @type {Record<string, Array<{explanation:string, workingOut:string, graphData:null}>>} */
const STEPS = {};

// ─── Q1 Evaluate positive powers ───────────────────────────────────────────
STEPS['y10-9a-q1a'] = [
  step('A positive integer power means repeated multiplication of the base. Here the base is 3 and the index is 3, so write three factors of 3.', '\\(3^3 = 3 \\times 3 \\times 3\\)'),
  step('Multiply step by step. First \\(3 \\times 3 = 9\\), then multiply by the remaining factor.', '\\(3 \\times 3 \\times 3 = 9 \\times 3\\)'),
  step('Finish the product to evaluate the power.', '\\(9 \\times 3 = 27\\)'),
  step('So \\(3^3 = 27\\). This matches the option \\(27\\).', '\\(3^3 = 27\\)'),
];
STEPS['y10-9a-q1b'] = [
  step('Write \\(4^3\\) as three factors of 4, because a positive integer index means repeated multiplication.', '\\(4^3 = 4 \\times 4 \\times 4\\)'),
  step('First multiply two factors: \\(4 \\times 4 = 16\\).', '\\(4 \\times 4 = 16\\)'),
  step('Multiply by the last factor: \\(16 \\times 4 = 64\\).', '\\(16 \\times 4 = 64\\)'),
  step('Therefore \\(4^3 = 64\\).', '\\(4^3 = 64\\)'),
];
STEPS['y10-9a-q1c'] = [
  step('The index 4 means multiply the base 3 by itself four times.', '\\(3^4 = 3 \\times 3 \\times 3 \\times 3\\)'),
  step('Pair the multiplications: \\(3 \\times 3 = 9\\) and another \\(3 \\times 3 = 9\\).', '\\(3^4 = 9 \\times 9\\)'),
  step('Now multiply the pairs together.', '\\(9 \\times 9 = 81\\)'),
  step('So \\(3^4 = 81\\).', '\\(3^4 = 81\\)'),
];
STEPS['y10-9a-q1d'] = [
  step('Write out the five factors of 2 indicated by the index 5.', '\\(2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2\\)'),
  step('Build powers of 2 sequentially: \\(2^2 = 4\\), \\(2^3 = 8\\), \\(2^4 = 16\\).', '\\(2^2 = 4,\\; 2^3 = 8,\\; 2^4 = 16\\)'),
  step('One more doubling gives \\(2^5\\).', '\\(2^5 = 16 \\times 2 = 32\\)'),
  step('Therefore \\(2^5 = 32\\).', '\\(2^5 = 32\\)'),
];
STEPS['y10-9a-q1e'] = [
  step('A power of 10 is 1 followed by as many zeros as the index. Here the index is 5.', '\\(10^5 = 10 \\times 10 \\times 10 \\times 10 \\times 10\\)'),
  step('Each factor of 10 adds one zero after 1.', '\\(10^1 = 10,\\; 10^2 = 100,\\; 10^3 = 1000\\)'),
  step('Continue to five zeros after 1.', '\\(10^4 = 10000,\\; 10^5 = 100000\\)'),
  step('So \\(10^5 = 100000\\).', '\\(10^5 = 100000\\)'),
];
STEPS['y10-9a-q1f'] = [
  step('Square means multiply the number by itself once: base 7, index 2.', '\\(7^2 = 7 \\times 7\\)'),
  step('Carry out the multiplication.', '\\(7 \\times 7 = 49\\)'),
  step('Therefore \\(7^2 = 49\\).', '\\(7^2 = 49\\)'),
];

// ─── Q2 Prime index form ───────────────────────────────────────────────────
STEPS['y10-9a-q2a'] = [
  step('We need a prime base raised to a positive integer. Factor 16 into primes by repeated division by 2.', '\\(16 = 2 \\times 8 = 2 \\times 2 \\times 4\\)'),
  step('Continue until every factor is prime.', '\\(16 = 2 \\times 2 \\times 2 \\times 2\\)'),
  step('Count the factors of 2: there are 4, so write as a single power.', '\\(16 = 2^4\\)'),
  step('Index form with prime base: \\(2^4\\).', '\\(2^4\\)'),
];
STEPS['y10-9a-q2b'] = [
  step('Factor 27 using the prime 3.', '\\(27 = 3 \\times 9 = 3 \\times 3 \\times 3\\)'),
  step('Three factors of 3 give index 3.', '\\(27 = 3^3\\)'),
  step('Prime-base index form is \\(3^3\\).', '\\(3^3\\)'),
];
STEPS['y10-9a-q2c'] = [
  step('Factor 125 by dividing by the prime 5.', '\\(125 = 5 \\times 25 = 5 \\times 5 \\times 5\\)'),
  step('Three factors of 5 give \\(5^3\\).', '\\(125 = 5^3\\)'),
  step('So the index form is \\(5^3\\).', '\\(5^3\\)'),
];
STEPS['y10-9a-q2d'] = [
  step('Factor 243 with prime 3: \\(3^5 = 243\\) because successive powers of 3 are 3, 9, 27, 81, 243.', '\\(3^1 = 3,\\; 3^2 = 9,\\; 3^3 = 27\\)'),
  step('Continue: \\(3^4 = 81\\) and \\(3^5 = 243\\).', '\\(3^4 = 81,\\; 3^5 = 243\\)'),
  step('Hence \\(243 = 3^5\\).', '\\(243 = 3^5\\)'),
];
STEPS['y10-9a-q2e'] = [
  step('Recognise 343 as a power of 7: \\(7^2 = 49\\).', '\\(7^2 = 49\\)'),
  step('Multiply by another 7: \\(7^3 = 49 \\times 7 = 343\\).', '\\(7^3 = 343\\)'),
  step('So in prime-base index form, \\(343 = 7^3\\).', '\\(343 = 7^3\\)'),
];
STEPS['y10-9a-q2f'] = [
  step('Factor 128 by repeated division by 2 (it is a pure power of 2).', '\\(128 = 2 \\times 64 = 2^2 \\times 32 = 2^3 \\times 16\\)'),
  step('Continue: \\(2^4 \\times 8 = 2^5 \\times 4 = 2^6 \\times 2 = 2^7\\).', '\\(128 = 2^7\\)'),
  step('Prime-base index form: \\(2^7\\).', '\\(2^7\\)'),
];

// ─── Q3 Reciprocals as negative indices ────────────────────────────────────
STEPS['y10-9a-q3a'] = [
  step('By definition, a negative index means the reciprocal of the positive power: \\(a^{-n} = \\frac{1}{a^n}\\).', '\\(a^{-1} = \\frac{1}{a}\\)'),
  step('Here the base is the prime 7 and the numerator is 1, so the index is \\(-1\\).', '\\(\\frac{1}{7} = 7^{-1}\\)'),
  step('Index form with prime base: \\(7^{-1}\\).', '\\(7^{-1}\\)'),
];
STEPS['y10-9a-q3b'] = [
  step('First write the denominator as a prime power: \\(25 = 5^2\\).', '\\(25 = 5^2\\)'),
  step('So the fraction is the reciprocal of \\(5^2\\).', '\\(\\frac{1}{25} = \\frac{1}{5^2}\\)'),
  step('Apply the negative-index definition.', '\\(\\frac{1}{5^2} = 5^{-2}\\)'),
  step('Prime-base index form: \\(5^{-2}\\).', '\\(5^{-2}\\)'),
];
STEPS['y10-9a-q3c'] = [
  step('The denominator is already a prime power \\(11^3\\).', '\\(\\frac{1}{11^3}\\)'),
  step('The reciprocal of a positive power is the same base with a negative index.', '\\(\\frac{1}{11^3} = 11^{-3}\\)'),
  step('Answer: \\(11^{-3}\\).', '\\(11^{-3}\\)'),
];
STEPS['y10-9a-q3d'] = [
  step('Write 512 as a power of 2: \\(2^9 = 512\\) (since \\(2^8 = 256\\) and \\(2^9 = 512\\)).', '\\(512 = 2^9\\)'),
  step('Form the reciprocal.', '\\(\\frac{1}{512} = \\frac{1}{2^9}\\)'),
  step('Convert to a negative index.', '\\(\\frac{1}{2^9} = 2^{-9}\\)'),
  step('Prime-base index form: \\(2^{-9}\\).', '\\(2^{-9}\\)'),
];
STEPS['y10-9a-q3e'] = [
  step('Simplify the fraction first by dividing numerator and denominator by 8.', '\\(\\frac{8}{128} = \\frac{1}{16}\\)'),
  step('Write 16 as a prime power: \\(16 = 2^4\\).', '\\(\\frac{1}{16} = \\frac{1}{2^4}\\)'),
  step('Apply the negative-index law.', '\\(\\frac{1}{2^4} = 2^{-4}\\)'),
  step('So \\(\\frac{8}{128} = 2^{-4}\\).', '\\(2^{-4}\\)'),
];
STEPS['y10-9a-q3f'] = [
  step('First rewrite the composite base 169 as a prime square: \\(169 = 13^2\\).', '\\(169 = 13^2\\)'),
  step('Substitute into the given power.', '\\((169)^{-4} = (13^2)^{-4}\\)'),
  step('Use the power-of-a-power law: multiply the indices \\((a^m)^n = a^{mn}\\).', '\\((13^2)^{-4} = 13^{2 \\times (-4)} = 13^{-8}\\)'),
  step('Prime-base index form: \\(13^{-8}\\).', '\\(13^{-8}\\)'),
];

// ─── Q4 Product law ────────────────────────────────────────────────────────
const productSimple = (id, given, sumExpr, result, detail) => {
  STEPS[id] = [
    step('When multiplying powers with the same base, add the indices: \\(a^m \\times a^n = a^{m+n}\\). Write the given product.', given),
    step('Add the indices as required by the product law.', sumExpr),
    step(detail, result),
    step('Simplified form:', result),
  ];
};
productSimple('y10-9a-q4a', '\\(x^3 \\times x^5 \\times x^4\\)', '\\(x^{3+5+4}\\)', '\\(x^{12}\\)', 'Compute the sum of indices: \\(3+5+4 = 12\\).');
productSimple('y10-9a-q4b', '\\(y^6 \\times y^4 \\times y\\)', '\\(y^{6+4+1}\\)', '\\(y^{11}\\)', 'Note that \\(y = y^1\\). Sum: \\(6+4+1 = 11\\).');
productSimple('y10-9a-q4c', '\\(p^5 \\times p^2 \\times p^7\\)', '\\(p^{5+2+7}\\)', '\\(p^{14}\\)', 'Sum of indices: \\(5+2+7 = 14\\).');
productSimple('y10-9a-q4d', '\\(k^3 \\times k^6 \\times k^4\\)', '\\(k^{3+6+4}\\)', '\\(k^{13}\\)', 'Sum of indices: \\(3+6+4 = 13\\).');

STEPS['y10-9a-q4e'] = [
  step('Multiply powers by adding indices for each base separately. Bases are \\(x\\) and \\(y\\).', '\\(x^3 y^2 \\times x^5 y^4\\)'),
  step('Group like bases: \\(x\\)-powers together and \\(y\\)-powers together.', '\\(x^3 \\times x^5 \\times y^2 \\times y^4\\)'),
  step('Add indices: for \\(x\\), \\(3+5=8\\); for \\(y\\), \\(2+4=6\\).', '\\(x^{3+5} y^{2+4} = x^8 y^6\\)'),
  step('Simplified expression: \\(x^8 y^6\\).', '\\(x^8 y^6\\)'),
];
STEPS['y10-9a-q4f'] = [
  step('Same-base product law for \\(u\\) and \\(v\\) separately.', '\\(u^3 v^4 \\times u^2 v^5\\)'),
  step('Add indices for each base.', '\\(u^{3+2} v^{4+5}\\)'),
  step('Evaluate the sums.', '\\(u^5 v^9\\)'),
  step('Answer: \\(u^5 v^9\\).', '\\(u^5 v^9\\)'),
];
STEPS['y10-9a-q4g'] = [
  step('Multiply coefficients and add indices for matching bases.', '\\(3x^5 y^2 \\times 5x y^4\\)'),
  step('Coefficients: \\(3 \\times 5 = 15\\). Note \\(x = x^1\\).', '\\(15 \\cdot x^{5+1} y^{2+4}\\)'),
  step('Add the indices.', '\\(15 x^6 y^6\\)'),
  step('Simplified form: \\(15x^6 y^6\\).', '\\(15x^6 y^6\\)'),
];
STEPS['y10-9a-q4h'] = [
  step('Multiply numerical coefficients, then combine powers of \\(a\\) and of \\(b\\).', '\\(4a^2 b \\times 6a^4 b^3\\)'),
  step('Coefficients: \\(4 \\times 6 = 24\\). Indices: \\(a^{2+4}\\), \\(b^{1+3}\\).', '\\(24 a^{2+4} b^{1+3}\\)'),
  step('Complete the sums.', '\\(24 a^6 b^4\\)'),
  step('Answer: \\(24a^6 b^4\\).', '\\(24a^6 b^4\\)'),
];
STEPS['y10-9a-q4i'] = [
  step('Multiply coefficients and add indices for \\(m\\) and \\(n\\).', '\\(2m^4 n^5 \\times 7m^3 n^3\\)'),
  step('Coefficients: \\(2 \\times 7 = 14\\).', '\\(14 m^{4+3} n^{5+3}\\)'),
  step('Sum the indices.', '\\(14 m^7 n^8\\)'),
  step('Simplified: \\(14m^7 n^8\\).', '\\(14m^7 n^8\\)'),
];

// ─── Q5 Quotient law ───────────────────────────────────────────────────────
STEPS['y10-9a-q5a'] = [
  step('For a quotient of powers with the same base, subtract indices: \\(\\frac{a^m}{a^n} = a^{m-n}\\). Start with the given fraction.', '\\(\\frac{a^3 b^2}{a^2 b^5}\\)'),
  step('Apply the quotient law to each base.', '\\(a^{3-2} b^{2-5} = a^1 b^{-3}\\)'),
  step('Rewrite any negative index as a positive index in the denominator: \\(b^{-3} = \\frac{1}{b^3}\\).', '\\(a b^{-3} = \\frac{a}{b^3}\\)'),
  step('Final simplified form with positive indices: \\(\\frac{a}{b^3}\\).', '\\(\\frac{a}{b^3}\\)'),
];
STEPS['y10-9a-q5b'] = [
  step('Simplify the numerical coefficient and the powers separately.', '\\(\\frac{40 m^3 n^5}{15 m n^2}\\)'),
  step('Coefficients: \\(\\frac{40}{15} = \\frac{8}{3}\\). Powers: \\(m^{3-1}\\), \\(n^{5-2}\\).', '\\(\\frac{8}{3} m^{2} n^{3}\\)'),
  step('Write as a single fraction.', '\\(\\frac{8 m^2 n^3}{3}\\)'),
  step('Answer with positive indices: \\(\\frac{8m^2 n^3}{3}\\).', '\\(\\frac{8m^2 n^3}{3}\\)'),
];
STEPS['y10-9a-q5c'] = [
  step('Subtract indices for each base in the quotient.', '\\(\\frac{p^7 q^5}{p^3 q}\\)'),
  step('Note \\(q = q^1\\). Compute \\(p^{7-3}\\) and \\(q^{5-1}\\).', '\\(p^{4} q^{4}\\)'),
  step('Both indices are already positive.', '\\(p^4 q^4\\)'),
  step('Simplified form: \\(p^4 q^4\\).', '\\(p^4 q^4\\)'),
];
STEPS['y10-9a-q5d'] = [
  step('Divide coefficients and subtract indices for \\(u\\) and \\(v\\).', '\\(\\frac{35 u^5 v^7}{14 u^2 v^4}\\)'),
  step('Coefficients: \\(\\frac{35}{14} = \\frac{5}{2}\\). Indices: \\(u^{5-2}\\), \\(v^{7-4}\\).', '\\(\\frac{5}{2} u^3 v^3\\)'),
  step('Write as one fraction.', '\\(\\frac{5 u^3 v^3}{2}\\)'),
  step('Answer: \\(\\frac{5u^3 v^3}{2}\\).', '\\(\\frac{5u^3 v^3}{2}\\)'),
];
STEPS['y10-9a-q5e'] = [
  step('Simplify coefficient and each base using the quotient law.', '\\(\\frac{15 x^2 y^4 z^5}{25 x^2 y^6 z^2}\\)'),
  step('Coefficient \\(\\frac{15}{25} = \\frac{3}{5}\\). Indices: \\(x^{2-2}=x^0\\), \\(y^{4-6}=y^{-2}\\), \\(z^{5-2}=z^3\\).', '\\(\\frac{3}{5} x^0 y^{-2} z^3\\)'),
  step('Use \\(x^0 = 1\\) and move \\(y^{-2}\\) to the denominator.', '\\(\\frac{3}{5} \\cdot 1 \\cdot \\frac{z^3}{y^2} = \\frac{3 z^3}{5 y^2}\\)'),
  step('Final answer with positive indices: \\(\\frac{3z^3}{5y^2}\\).', '\\(\\frac{3z^3}{5y^2}\\)'),
];
STEPS['y10-9a-q5f'] = [
  step('Apply the quotient law to coefficients and to each letter.', '\\(\\frac{24 a^4 b^5 c^7}{8 b^8 c^7}\\)'),
  step('Coefficient \\(\\frac{24}{8} = 3\\). Indices: \\(a^4\\) stays, \\(b^{5-8}=b^{-3}\\), \\(c^{7-7}=c^0=1\\).', '\\(3 a^4 b^{-3}\\)'),
  step('Rewrite the negative index with a positive denominator.', '\\(3 a^4 b^{-3} = \\frac{3 a^4}{b^3}\\)'),
  step('Simplified form: \\(\\frac{3a^4}{b^3}\\).', '\\(\\frac{3a^4}{b^3}\\)'),
];

// ─── Q6 Power of a product ─────────────────────────────────────────────────
STEPS['y10-9a-q6a'] = [
  step('Power of a product: raise every factor inside the brackets to the outer index: \\((ab)^n = a^n b^n\\). Also \\((a^m)^n = a^{mn}\\).', '\\((x^3 y^2)^4\\)'),
  step('Multiply each inner index by 4.', '\\(x^{3 \\times 4} y^{2 \\times 4}\\)'),
  step('Evaluate the products of indices.', '\\(x^{12} y^{8}\\)'),
  step('Simplified: \\(x^{12} y^8\\).', '\\(x^{12} y^8\\)'),
];
STEPS['y10-9a-q6b'] = [
  step('Raise each factor inside to the power 5.', '\\((m^4 n^3)^5\\)'),
  step('Multiply indices by 5.', '\\(m^{4 \\times 5} n^{3 \\times 5}\\)'),
  step('Compute.', '\\(m^{20} n^{15}\\)'),
  step('Answer: \\(m^{20} n^{15}\\).', '\\(m^{20} n^{15}\\)'),
];
STEPS['y10-9a-q6c'] = [
  step('Distribute the outer index 2 to every base inside the brackets.', '\\((p^2 q^3 r^4 s^5)^2\\)'),
  step('Multiply each index by 2.', '\\(p^{4} q^{6} r^{8} s^{10}\\)'),
  step('Write the expanded product of powers.', '\\(p^4 q^6 r^8 s^{10}\\)'),
  step('Simplified form: \\(p^4 q^6 r^8 s^{10}\\).', '\\(p^4 q^6 r^8 s^{10}\\)'),
];
STEPS['y10-9a-q6d'] = [
  step('The outer power applies to the coefficient as well as the pronumerals.', '\\((3 x^4 y)^3\\)'),
  step('Compute \\(3^3\\) and multiply each letter index by 3. Note \\(y = y^1\\).', '\\(3^3 \\cdot x^{4 \\times 3} y^{1 \\times 3}\\)'),
  step('Evaluate: \\(3^3 = 27\\), \\(x^{12}\\), \\(y^3\\).', '\\(27 x^{12} y^3\\)'),
  step('Answer: \\(27x^{12} y^3\\).', '\\(27x^{12} y^3\\)'),
];
STEPS['y10-9a-q6e'] = [
  step('Raise the coefficient and each variable to the outer index 2.', '\\((4 m^3 n^5)^2\\)'),
  step('Use \\(4^2\\) and multiply indices by 2.', '\\(4^2 m^{3 \\times 2} n^{5 \\times 2}\\)'),
  step('Evaluate.', '\\(16 m^6 n^{10}\\)'),
  step('Simplified: \\(16m^6 n^{10}\\).', '\\(16m^6 n^{10}\\)'),
];
STEPS['y10-9a-q6f'] = [
  step('Distribute the outer power 4 to 2, \\(u^5\\) and \\(v^3\\).', '\\((2 u^5 v^3)^4\\)'),
  step('Compute each part: \\(2^4\\), \\(u^{20}\\), \\(v^{12}\\).', '\\(2^4 u^{5 \\times 4} v^{3 \\times 4}\\)'),
  step('Evaluate the coefficient.', '\\(16 u^{20} v^{12}\\)'),
  step('Answer: \\(16u^{20} v^{12}\\).', '\\(16u^{20} v^{12}\\)'),
];

// ─── Q7 Mixed product/quotient with brackets ───────────────────────────────
STEPS['y10-9a-q7a'] = [
  step('First expand the power of a product: \\((2x^4)^3 = 2^3 x^{12} = 8x^{12}\\).', '\\((2x^4)^3 \\times 3x^5 = 8x^{12} \\times 3x^5\\)'),
  step('Multiply coefficients and add the indices of \\(x\\).', '\\((8 \\times 3) x^{12+5}\\)'),
  step('Compute.', '\\(24 x^{17}\\)'),
  step('Simplified form with positive index: \\(24x^{17}\\).', '\\(24x^{17}\\)'),
];
STEPS['y10-9a-q7b'] = [
  step('Expand the bracket first: \\((3y^4)^2 = 9 y^8\\).', '\\((3y^4)^2 \\div (9y^5) = 9y^8 \\div 9y^5\\)'),
  step('Write as a fraction and cancel coefficients.', '\\(\\frac{9 y^8}{9 y^5} = \\frac{y^8}{y^5}\\)'),
  step('Subtract indices: \\(y^{8-5} = y^3\\).', '\\(y^{8-5} = y^3\\)'),
  step('Answer: \\(y^3\\).', '\\(y^3\\)'),
];
STEPS['y10-9a-q7c'] = [
  step('Expand the squared bracket in the first numerator: \\((x^3 y)^2 = x^6 y^2\\).', '\\(\\frac{x^6 y^2}{x y^3} \\times \\frac{x^4 y^6}{x y}\\)'),
  step('Simplify each fraction using the quotient law.', '\\(x^{6-1} y^{2-3} \\times x^{4-1} y^{6-1} = x^5 y^{-1} \\times x^3 y^5\\)'),
  step('Multiply: add indices for \\(x\\) and for \\(y\\).', '\\(x^{5+3} y^{-1+5} = x^8 y^4\\)'),
  step('Final answer with positive indices: \\(x^8 y^4\\).', '\\(x^8 y^4\\)'),
];
STEPS['y10-9a-q7d'] = [
  step('Division of fractions means multiply by the reciprocal. First expand \\((ab^3)^2 = a^2 b^6\\).', '\\(\\frac{a^5 b^3}{a b^4} \\div \\frac{a^2 b^6}{a^4 b^7} = \\frac{a^5 b^3}{a b^4} \\times \\frac{a^4 b^7}{a^2 b^6}\\)'),
  step('Simplify the first fraction: \\(a^{5-1} b^{3-4} = a^4 b^{-1}\\). Second: \\(a^{4-2} b^{7-6} = a^2 b\\).', '\\(a^4 b^{-1} \\times a^2 b^{1}\\)'),
  step('Multiply: \\(a^{4+2} b^{-1+1} = a^6 b^0 = a^6\\).', '\\(a^6\\)'),
  step('Simplified form: \\(a^6\\).', '\\(a^6\\)'),
];
STEPS['y10-9a-q7e'] = [
  step('Expand the bracket: \\((x y^3)^2 = x^2 y^6\\).', '\\(\\frac{x^5 y^7}{x^2 y^6} \\times \\frac{x^4 y^2}{x^3 y}\\)'),
  step('Simplify each quotient: first gives \\(x^{3} y^{1}\\); second gives \\(x^{1} y^{1}\\).', '\\(x^3 y \\times x y\\)'),
  step('Multiply the results.', '\\(x^{3+1} y^{1+1} = x^4 y^2\\)'),
  step('Answer: \\(x^4 y^2\\).', '\\(x^4 y^2\\)'),
];
STEPS['y10-9a-q7f'] = [
  step('Expand both squared brackets: \\((m^3 n)^2 = m^6 n^2\\). Division becomes multiplication by the reciprocal.', '\\(\\frac{m^6 n^2}{m n^4} \\div \\frac{m n}{m^6 n^2} = \\frac{m^6 n^2}{m n^4} \\times \\frac{m^6 n^2}{m n}\\)'),
  step('Simplify each part: first \\(m^{5} n^{-2}\\); second \\(m^{5} n^{1}\\).', '\\(m^5 n^{-2} \\times m^5 n\\)'),
  step('Add indices: \\(m^{10} n^{-1}\\).', '\\(m^{10} n^{-1} = \\frac{m^{10}}{n}\\)'),
  step('Final form with positive indices: \\(\\frac{m^{10}}{n}\\).', '\\(\\frac{m^{10}}{n}\\)'),
];

// ─── Q8 Negative indices and zero index ────────────────────────────────────
STEPS['y10-9a-q8a'] = [
  step('By definition, a negative index is the reciprocal of the positive power: \\(a^{-n} = \\frac{1}{a^n}\\).', '\\(3^{-1} = \\frac{1}{3^1}\\)'),
  step('Since \\(3^1 = 3\\), the value is the reciprocal of 3.', '\\(\\frac{1}{3}\\)'),
  step('Evaluated value: \\(\\frac{1}{3}\\).', '\\(\\frac{1}{3}\\)'),
];
STEPS['y10-9a-q8b'] = [
  step('Write the negative power as a reciprocal of a positive power.', '\\(4^{-2} = \\frac{1}{4^2}\\)'),
  step('Evaluate the denominator: \\(4^2 = 16\\).', '\\(\\frac{1}{16}\\)'),
  step('So \\(4^{-2} = \\frac{1}{16}\\).', '\\(\\frac{1}{16}\\)'),
];
STEPS['y10-9a-q8c'] = [
  step('Apply the negative-index definition.', '\\(5^{-1} = \\frac{1}{5}\\)'),
  step('The value is the reciprocal of 5.', '\\(\\frac{1}{5}\\)'),
  step('Answer: \\(\\frac{1}{5}\\).', '\\(\\frac{1}{5}\\)'),
];
STEPS['y10-9a-q8d'] = [
  step('Convert the negative index to a reciprocal.', '\\(5^{-2} = \\frac{1}{5^2}\\)'),
  step('Square the base: \\(5^2 = 25\\).', '\\(\\frac{1}{25}\\)'),
  step('Therefore \\(5^{-2} = \\frac{1}{25}\\).', '\\(\\frac{1}{25}\\)'),
];
STEPS['y10-9a-q8e'] = [
  step('Write as a reciprocal of a positive power of 10.', '\\(10^{-4} = \\frac{1}{10^4}\\)'),
  step('A power of 10 is 1 followed by that many zeros: \\(10^4 = 10000\\).', '\\(\\frac{1}{10000}\\)'),
  step('Answer: \\(\\frac{1}{10000}\\).', '\\(\\frac{1}{10000}\\)'),
];
STEPS['y10-9a-q8f'] = [
  step('A fraction to the power \\(-1\\) is simply its reciprocal: \\(\\left(\\frac{a}{b}\\right)^{-1} = \\frac{b}{a}\\).', '\\(\\left(\\frac{5}{6}\\right)^{-1} = \\frac{6}{5}\\)'),
  step('No further simplification is needed.', '\\(\\frac{6}{5}\\)'),
  step('Evaluated value: \\(\\frac{6}{5}\\).', '\\(\\frac{6}{5}\\)'),
];
STEPS['y10-9a-q8g'] = [
  step('Flip the fraction for the index \\(-1\\).', '\\(\\left(\\frac{12}{11}\\right)^{-1} = \\frac{11}{12}\\)'),
  step('The reciprocal is already in simplest form.', '\\(\\frac{11}{12}\\)'),
  step('Answer: \\(\\frac{11}{12}\\).', '\\(\\frac{11}{12}\\)'),
];
STEPS['y10-9a-q8h'] = [
  step('For a negative outer index, take the reciprocal of the fraction first, then raise to the positive power: \\(\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^{n}\\).', '\\(\\left(\\frac{2}{3}\\right)^{-3} = \\left(\\frac{3}{2}\\right)^{3}\\)'),
  step('Raise numerator and denominator to the power 3.', '\\(\\frac{3^3}{2^3} = \\frac{27}{8}\\)'),
  step('Evaluated value: \\(\\frac{27}{8}\\).', '\\(\\frac{27}{8}\\)'),
];
STEPS['y10-9a-q8i'] = [
  step('Flip the fraction and change the index to positive 2.', '\\(\\left(\\frac{3}{4}\\right)^{-2} = \\left(\\frac{4}{3}\\right)^{2}\\)'),
  step('Square numerator and denominator.', '\\(\\frac{4^2}{3^2} = \\frac{16}{9}\\)'),
  step('Answer: \\(\\frac{16}{9}\\).', '\\(\\frac{16}{9}\\)'),
];
STEPS['y10-9a-q8j'] = [
  step('Reciprocal then positive power.', '\\(\\left(\\frac{2}{5}\\right)^{-4} = \\left(\\frac{5}{2}\\right)^{4}\\)'),
  step('Raise each part to the 4th power: \\(5^4 = 625\\), \\(2^4 = 16\\).', '\\(\\frac{5^4}{2^4} = \\frac{625}{16}\\)'),
  step('Evaluated value: \\(\\frac{625}{16}\\).', '\\(\\frac{625}{16}\\)'),
];
STEPS['y10-9a-q8k'] = [
  step('Negative index means reciprocal of a positive power.', '\\(2^{-5} = \\frac{1}{2^5}\\)'),
  step('Compute \\(2^5 = 32\\).', '\\(\\frac{1}{32}\\)'),
  step('So \\(2^{-5} = \\frac{1}{32}\\).', '\\(\\frac{1}{32}\\)'),
];
STEPS['y10-9a-q8l'] = [
  step('Any non-zero number to the power 0 equals 1: \\(x^0 = 1\\) when \\(x \\neq 0\\).', '\\(x^0 = 1\\)'),
  step('Substitute into the expression.', '\\(7 + x^0 = 7 + 1\\)'),
  step('Add.', '\\(8\\)'),
  step('Value: \\(8\\).', '\\(8\\)'),
];
STEPS['y10-9a-q8m'] = [
  step('Zero-index law: any non-zero base to the power 0 is 1. So \\(x^0 = 1\\) and \\((7y)^0 = 1\\).', '\\(x^0 = 1,\\; (7y)^0 = 1\\)'),
  step('Substitute into the fraction.', '\\(\\frac{6 x^0}{(7y)^0} = \\frac{6 \\cdot 1}{1}\\)'),
  step('Simplify.', '\\(6\\)'),
  step('Value: \\(6\\).', '\\(6\\)'),
];
STEPS['y10-9a-q8n'] = [
  step('The zero-index law says that any non-zero quantity raised to the power 0 equals 1.\n', '\\((3 + x)^0\\)'),
  step('The condition \\(x \\neq -3\\) ensures the base is not zero, so the law applies.\n', '\\(3 + x \\neq 0\\)'),
  step('Therefore the expression evaluates to 1.\n', '\\((3 + x)^0 = 1\\)'),
];
STEPS['y10-9a-q8o'] = [
  step('Any non-zero number raised to the power 0 is 1. Here the base is \\(5^4\\), which is not zero.\n', '\\((5^4)^0\\)'),
  step('Apply the zero-index law directly (or note \\((a^m)^0 = a^0 = 1\\)).\n', '\\((5^4)^0 = 1\\)'),
  step('Final value: 1.\n', '\\(1\\)'),
];

// ─── Q9 Negative outer powers ──────────────────────────────────────────────
STEPS['y10-9a-q9a'] = [
  step('A power of \\(-1\\) means take the reciprocal of everything inside the brackets.', '\\((3 a^3 b)^{-1} = \\frac{1}{3 a^3 b}\\)'),
  step('All indices in the denominator are already positive.', '\\(\\frac{1}{3 a^3 b}\\)'),
  step('Simplified form: \\(\\frac{1}{3a^3 b}\\).', '\\(\\frac{1}{3a^3 b}\\)'),
];
STEPS['y10-9a-q9b'] = [
  step('Raise each factor to the power \\(-2\\): multiply each index by \\(-2\\).', '\\((2 m^3 n^4)^{-2} = 2^{-2} m^{-6} n^{-8}\\)'),
  step('Rewrite negative indices as positive powers in the denominator.', '\\(\\frac{1}{2^2 m^6 n^8} = \\frac{1}{4 m^6 n^8}\\)'),
  step('Answer with positive indices: \\(\\frac{1}{4m^6 n^8}\\).', '\\(\\frac{1}{4m^6 n^8}\\)'),
];
STEPS['y10-9a-q9c'] = [
  step('Multiply every index inside by the outer index \\(-3\\).', '\\((5 p^2 q^{-1})^{-3} = 5^{-3} p^{-6} q^{3}\\)'),
  step('Write positive powers in the denominator for negative indices.', '\\(\\frac{q^3}{5^3 p^6}\\)'),
  step('Evaluate \\(5^3 = 125\\).', '\\(\\frac{q^3}{125 p^6}\\)'),
  step('Final form: \\(\\frac{q^3}{125p^6}\\).', '\\(\\frac{q^3}{125p^6}\\)'),
];
STEPS['y10-9a-q9d'] = [
  step('Multiply each inner index by \\(-2\\).', '\\((3 u^4 v^{-3})^{-2} = 3^{-2} u^{-8} v^{6}\\)'),
  step('Move terms with negative indices to the denominator.', '\\(\\frac{v^6}{3^2 u^8} = \\frac{v^6}{9 u^8}\\)'),
  step('Answer: \\(\\frac{v^6}{9u^8}\\).', '\\(\\frac{v^6}{9u^8}\\)'),
];
STEPS['y10-9a-q9e'] = [
  step('Multiply each index by the outer power \\(-4\\).', '\\((2 x^{-3} y^{-4})^{-4} = 2^{-4} x^{12} y^{16}\\)'),
  step('Only the coefficient has a negative index; write it in the denominator.', '\\(\\frac{x^{12} y^{16}}{2^4} = \\frac{x^{12} y^{16}}{16}\\)'),
  step('Simplified form: \\(\\frac{x^{12} y^{16}}{16}\\).', '\\(\\frac{x^{12} y^{16}}{16}\\)'),
];
STEPS['y10-9a-q9f'] = [
  step('Raise the coefficient and each variable to the power 2.', '\\((4 a^3 b^6)^2 = 4^2 a^{6} b^{12}\\)'),
  step('Evaluate \\(4^2 = 16\\).', '\\(16 a^6 b^{12}\\)'),
  step('Answer: \\(16a^6 b^{12}\\).', '\\(16a^6 b^{12}\\)'),
];

// ─── Q10 Mixed negative indices ────────────────────────────────────────────
STEPS['y10-9a-q10a'] = [
  step('Product law: add the indices of the same base \\(x\\).', '\\(x^7 \\times x^{-3} \\times x^{-6} = x^{7 + (-3) + (-6)}\\)'),
  step('Compute the sum of indices.', '\\(x^{7 - 3 - 6} = x^{-2}\\)'),
  step('Rewrite with a positive index in the denominator.', '\\(x^{-2} = \\frac{1}{x^2}\\)'),
  step('Answer: \\(\\frac{1}{x^2}\\).', '\\(\\frac{1}{x^2}\\)'),
];
STEPS['y10-9a-q10b'] = [
  step('Multiply coefficients and add indices for \\(x\\) and for \\(y\\).', '\\(3 x^{-2} y^4 \\times 5 x^{-4} y^{-7}\\)'),
  step('Coefficient \\(3 \\times 5 = 15\\). Indices: \\(x^{-2-4} = x^{-6}\\), \\(y^{4-7} = y^{-3}\\).', '\\(15 x^{-6} y^{-3}\\)'),
  step('Write negative indices as positive powers in the denominator.', '\\(\\frac{15}{x^6 y^3}\\)'),
  step('Final form: \\(\\frac{15}{x^6 y^3}\\).', '\\(\\frac{15}{x^6 y^3}\\)'),
];
STEPS['y10-9a-q10c'] = [
  step('Multiply coefficients; add indices for \\(m\\) and for \\(n\\).', '\\(4 m^3 n^{-2} \\times 6 m n^{-5}\\)'),
  step('Coefficient 24. Indices: \\(m^{3+1} = m^4\\), \\(n^{-2-5} = n^{-7}\\).', '\\(24 m^4 n^{-7}\\)'),
  step('Move \\(n^{-7}\\) to the denominator.', '\\(\\frac{24 m^4}{n^7}\\)'),
  step('Answer: \\(\\frac{24m^4}{n^7}\\).', '\\(\\frac{24m^4}{n^7}\\)'),
];
STEPS['y10-9a-q10d'] = [
  step('Divide coefficients and subtract indices (remember subtracting a negative adds).', '\\(\\frac{18 a^5 b^{-3}}{12 a^{-4} b^5}\\)'),
  step('Coefficient \\(\\frac{18}{12} = \\frac{3}{2}\\). Indices: \\(a^{5-(-4)} = a^9\\), \\(b^{-3-5} = b^{-8}\\).', '\\(\\frac{3}{2} a^9 b^{-8}\\)'),
  step('Write the negative power of \\(b\\) in the denominator.', '\\(\\frac{3 a^9}{2 b^8}\\)'),
  step('Final answer: \\(\\frac{3a^9}{2b^8}\\).', '\\(\\frac{3a^9}{2b^8}\\)'),
];
STEPS['y10-9a-q10e'] = [
  step('Simplify the coefficient and apply the quotient law to each base.', '\\(\\frac{6 u^{-3} v^{-4}}{15 u^2 v^{-2}}\\)'),
  step('Coefficient \\(\\frac{6}{15} = \\frac{2}{5}\\). Indices: \\(u^{-3-2} = u^{-5}\\), \\(v^{-4-(-2)} = v^{-2}\\).', '\\(\\frac{2}{5} u^{-5} v^{-2}\\)'),
  step('Write all negative powers in the denominator.', '\\(\\frac{2}{5 u^5 v^2}\\)'),
  step('Answer: \\(\\frac{2}{5u^5 v^2}\\).', '\\(\\frac{2}{5u^5 v^2}\\)'),
];
STEPS['y10-9a-q10f'] = [
  step('Multiply each index inside by the outer index \\(-3\\).', '\\((3 y^{-2})^{-3} = 3^{-3} y^{6}\\)'),
  step('Rewrite the coefficient with a positive index.', '\\(\\frac{y^6}{3^3} = \\frac{y^6}{27}\\)'),
  step('Simplified form: \\(\\frac{y^6}{27}\\).', '\\(\\frac{y^6}{27}\\)'),
];
STEPS['y10-9a-q10g'] = [
  step('Expand the first bracket: multiply indices by \\(-2\\). Expand the second: multiply by \\(-3\\).', '\\((3 x^{-2} y^4)^{-2} = 3^{-2} x^{4} y^{-8},\\quad 9(x y^2)^{-3} = 9 x^{-3} y^{-6}\\)'),
  step('Multiply the two results. Coefficient: \\(3^{-2} \\times 9 = \\frac{1}{9} \\times 9 = 1\\).', '\\(3^{-2} x^4 y^{-8} \\times 9 x^{-3} y^{-6} = x^{4-3} y^{-8-6}\\)'),
  step('Simplify the indices.', '\\(x^{1} y^{-14} = \\frac{x}{y^{14}}\\)'),
  step('Answer: \\(\\frac{x}{y^{14}}\\).', '\\(\\frac{x}{y^{14}}\\)'),
];
STEPS['y10-9a-q10h'] = [
  step('Expand each bracket by multiplying indices by the outer power.', '\\((p^{-3} q^2)^5 = p^{-15} q^{10},\\quad (p^{-4} q^3)^{-2} = p^{8} q^{-6}\\)'),
  step('Multiply the expanded forms: add indices for each base.', '\\(p^{-15+8} q^{10-6} = p^{-7} q^{4}\\)'),
  step('Write the negative power of \\(p\\) in the denominator.', '\\(\\frac{q^4}{p^7}\\)'),
  step('Final form: \\(\\frac{q^4}{p^7}\\).', '\\(\\frac{q^4}{p^7}\\)'),
];
STEPS['y10-9a-q10i'] = [
  step('A negative outer index means take the reciprocal and raise to the positive power, or multiply every index by \\(-3\\).', '\\(\\left(\\frac{a^3 b^{-2}}{c^5}\\right)^{-3} = \\frac{a^{-9} b^{6}}{c^{-15}}\\)'),
  step('Rewrite: a negative index in the denominator becomes a positive power in the numerator, and vice versa.', '\\(a^{-9} b^{6} c^{15} = \\frac{b^6 c^{15}}{a^9}\\)'),
  step('Answer with positive indices: \\(\\frac{b^6 c^{15}}{a^9}\\).', '\\(\\frac{b^6 c^{15}}{a^9}\\)'),
];
STEPS['y10-9a-q10j'] = [
  step('Multiply every index in the fraction by the outer index \\(-4\\).', '\\(\\left(\\frac{x^{-2} y^3}{z^{-3}}\\right)^{-4} = \\frac{x^{8} y^{-12}}{z^{12}}\\)'),
  step('Note: \\((z^{-3})^{-4} = z^{12}\\) in the denominator. Rewrite negative powers of \\(y\\).', '\\(\\frac{x^8}{y^{12} z^{12}}\\)'),
  step('Final form: \\(\\frac{x^8}{y^{12} z^{12}}\\).', '\\(\\frac{x^8}{y^{12} z^{12}}\\)'),
];
STEPS['y10-9a-q10k'] = [
  step('Simplify the first fraction: coefficients stay, subtract indices.', '\\(\\frac{3 x^{-2} y^3}{x^4 y^{-3}} = 3 x^{-2-4} y^{3-(-3)} = 3 x^{-6} y^{6}\\)'),
  step('Simplify the second fraction: coefficient \\(\\frac{5}{10} = \\frac{1}{2}\\).', '\\(\\frac{5 x^5 y^{-2}}{10 x y^{-4}} = \\frac{1}{2} x^{5-1} y^{-2-(-4)} = \\frac{1}{2} x^{4} y^{2}\\)'),
  step('Multiply the two simplified results.', '\\(3 x^{-6} y^{6} \\times \\frac{1}{2} x^{4} y^{2} = \\frac{3}{2} x^{-2} y^{8}\\)'),
  step('Write with positive indices: \\(\\frac{3 y^8}{2 x^2}\\).', '\\(\\frac{3 y^8}{2 x^2}\\)'),
];
STEPS['y10-9a-q10l'] = [
  step('Expand \\((ab^3)^{-2} = a^{-2} b^{-6}\\). Write the full product.', '\\(\\frac{a^3 b^{-4}}{a^5 b^3} \\times \\frac{a^{-2} b^{-6}}{a^3 b^5}\\)'),
  step('Simplify the first fraction: \\(a^{3-5} b^{-4-3} = a^{-2} b^{-7}\\). Second: \\(a^{-2-3} b^{-6-5} = a^{-5} b^{-11}\\).', '\\(a^{-2} b^{-7} \\times a^{-5} b^{-11}\\)'),
  step('Add indices: \\(a^{-7} b^{-18}\\).', '\\(a^{-7} b^{-18} = \\frac{1}{a^7 b^{18}}\\)'),
  step('Answer: \\(\\frac{1}{a^7 b^{18}}\\).', '\\(\\frac{1}{a^7 b^{18}}\\)'),
];
STEPS['y10-9a-q10m'] = [
  step('Expand the brackets with negative outer powers: \\((a^3 b)^{-2} = a^{-6} b^{-2}\\) and \\((ab)^{-3} = a^{-3} b^{-3}\\).', '\\(\\frac{a^5 b^{-2}}{a^{-6} b^{-2}} \\div \\frac{a^2 b^3}{a^{-3} b^{-3}}\\)'),
  step('First fraction: \\(a^{5-(-6)} b^{-2-(-2)} = a^{11} b^{0} = a^{11}\\). Second: \\(a^{2-(-3)} b^{3-(-3)} = a^{5} b^{6}\\).', '\\(a^{11} \\div (a^5 b^6)\\)'),
  step('Division: subtract indices.', '\\(a^{11-5} b^{0-6} = a^6 b^{-6} = \\frac{a^6}{b^6}\\)'),
  step('Final form: \\(\\frac{a^6}{b^6}\\).', '\\(\\frac{a^6}{b^6}\\)'),
];
STEPS['y10-9a-q10n'] = [
  step('Expand \\((x y^2)^{-4} = x^{-4} y^{-8}\\) and \\((xy)^{-2} = x^{-2} y^{-2}\\).', '\\(\\frac{x^{-5} y^3}{x^{-4} y^{-8}} \\div \\frac{x^{-2} y^{-2}}{x^2 y^4}\\)'),
  step('First fraction: \\(x^{-5-(-4)} y^{3-(-8)} = x^{-1} y^{11}\\). Second: \\(x^{-2-2} y^{-2-4} = x^{-4} y^{-6}\\) wait — correct second simplification: \\(\\frac{x^{-2} y^{-2}}{x^2 y^4} = x^{-2-2} y^{-2-4} = x^{-4} y^{-6}\\).', '\\(x^{-1} y^{11} \\div (x^{-4} y^{-6})\\)'),
  step('Division: subtract indices (subtracting negatives adds).', '\\(x^{-1-(-4)} y^{11-(-6)} = x^{3} y^{17}\\)'),
  step('Answer: \\(x^3 y^{17}\\).', '\\(x^3 y^{17}\\)'),
];
// Fix the awkward middle step for 10n - rewrite cleaner
STEPS['y10-9a-q10n'] = [
  step('Expand the powered brackets: \\((xy^2)^{-4} = x^{-4} y^{-8}\\) and \\((xy)^{-2} = x^{-2} y^{-2}\\).', '\\(\\frac{x^{-5} y^3}{x^{-4} y^{-8}} \\div \\frac{x^{-2} y^{-2}}{x^2 y^4}\\)'),
  step('Simplify the first fraction using the quotient law.', '\\(x^{-5-(-4)} y^{3-(-8)} = x^{-1} y^{11}\\)'),
  step('Simplify the second fraction, then divide (multiply by reciprocal).', '\\(\\frac{x^{-2} y^{-2}}{x^2 y^4} = x^{-4} y^{-6},\\quad x^{-1} y^{11} \\times x^{4} y^{6}\\)'),
  step('Add indices: \\(x^{-1+4} y^{11+6} = x^3 y^{17}\\).', '\\(x^3 y^{17}\\)'),
];
STEPS['y10-9a-q10o'] = [
  step('Expand the first bracket: \\((3 x^3 y^{-4})^2 = 9 x^6 y^{-8}\\). Expand the second: \\((3^2 x^{-2} y^3)^{-1} = 9^{-1} x^{2} y^{-3}\\).', '\\(\\frac{9 x^6 y^{-8}}{z^3} \\times \\frac{9^{-1} x^{2} y^{-3}}{z^2}\\)'),
  step('Multiply coefficients: \\(9 \\times 9^{-1} = 1\\). Add indices for \\(x\\), \\(y\\) and \\(z\\).', '\\(\\frac{1 \\cdot x^{6+2} y^{-8-3}}{z^{3+2}} = \\frac{x^8 y^{-11}}{z^5}\\)'),
  step('Rewrite the negative power of \\(y\\) in the denominator.', '\\(\\frac{x^8}{y^{11} z^5}\\)'),
  step('Answer: \\(\\frac{x^8}{y^{11} z^5}\\).', '\\(\\frac{x^8}{y^{11} z^5}\\)'),
];
STEPS['y10-9a-q10p'] = [
  step('Expand the first part: \\((a^3 b^2)^3 = a^9 b^6\\), and \\(\\frac{1}{c^{-4}} = c^4\\). Expand the second: \\((a^2 b c^{-3})^{-2} = a^{-4} b^{-2} c^{6}\\).', '\\(a^9 b^6 c^4 \\times a^{-4} b^{-2} c^{6}\\)'),
  step('Add indices for each base.', '\\(a^{9-4} b^{6-2} c^{4+6} = a^5 b^4 c^{10}\\)'),
  step('All indices are positive already.', '\\(a^5 b^4 c^{10}\\)'),
  step('Answer: \\(a^5 b^4 c^{10}\\).', '\\(a^5 b^4 c^{10}\\)'),
];
STEPS['y10-9a-q10q'] = [
  step('Simplify the first part: \\((x^3)^4 = x^{12}\\), so the first fraction is \\(\\frac{x^{12}}{y^4}\\). Expand the second: \\(\\left(\\frac{x^2}{y^3}\\right)^{-3} = \\frac{x^{-6}}{y^{-9}}\\).', '\\(\\frac{x^{12}}{y^4} \\div \\frac{x^{-6}}{y^{-9}}\\)'),
  step('Division: multiply by the reciprocal.', '\\(\\frac{x^{12}}{y^4} \\times \\frac{y^{-9}}{x^{-6}} = \\frac{x^{12}}{y^4} \\times x^{6} y^{-9}\\)'),
  step('Combine: \\(x^{12+6} y^{-4-9} = x^{18} y^{-13}\\).', '\\(x^{18} y^{-13} = \\frac{x^{18}}{y^{13}}\\)'),
  step('Final form: \\(\\frac{x^{18}}{y^{13}}\\).', '\\(\\frac{x^{18}}{y^{13}}\\)'),
];
STEPS['y10-9a-q10r'] = [
  step('Expand the first numerator: \\((3x^5)^3 = 27 x^{15}\\). Second: \\((x^3)^{-2} = x^{-6}\\).', '\\(\\frac{27 x^{15}}{y^8} \\div \\frac{x^{-6}}{3 y^2}\\)'),
  step('Multiply by the reciprocal of the second fraction.', '\\(\\frac{27 x^{15}}{y^8} \\times \\frac{3 y^2}{x^{-6}}\\)'),
  step('Multiply: coefficient \\(27 \\times 3 = 81\\); indices \\(x^{15-(-6)} = x^{21}\\), \\(y^{2-8} = y^{-6}\\).', '\\(81 x^{21} y^{-6} = \\frac{81 x^{21}}{y^6}\\)'),
  step('Answer: \\(\\frac{81x^{21}}{y^6}\\).', '\\(\\frac{81x^{21}}{y^6}\\)'),
];

// ─── Q11 Numerical mixed negative/positive powers ──────────────────────────
STEPS['y10-9a-q11a'] = [
  step('Rewrite every negative power as a reciprocal, and evaluate the positive powers in the denominator.', '\\(\\frac{2^{-1} + 2^{-2}}{2 + 2^2} = \\frac{\\frac{1}{2} + \\frac{1}{4}}{2 + 4}\\)'),
  step('Add the fractions in the numerator using a common denominator of 4. Simplify the denominator.', '\\(\\frac{\\frac{2}{4} + \\frac{1}{4}}{6} = \\frac{\\frac{3}{4}}{6}\\)'),
  step('Dividing by 6 is the same as multiplying by \\(\\frac{1}{6}\\).', '\\(\\frac{3}{4} \\times \\frac{1}{6} = \\frac{3}{24}\\)'),
  step('Cancel a common factor of 3.', '\\(\\frac{3}{24} = \\frac{1}{8}\\)'),
  step('Final value: \\(\\frac{1}{8}\\).', '\\(\\frac{1}{8}\\)'),
];
STEPS['y10-9a-q11b'] = [
  step('Convert negative powers to unit fractions and evaluate the positive powers.', '\\(\\frac{3^{-1} + 3^{-3}}{3^1 + 3^3} = \\frac{\\frac{1}{3} + \\frac{1}{27}}{3 + 27}\\)'),
  step('Numerator: common denominator 27 gives \\(\\frac{9}{27} + \\frac{1}{27} = \\frac{10}{27}\\). Denominator: \\(3 + 27 = 30\\).', '\\(\\frac{\\frac{10}{27}}{30}\\)'),
  step('Rewrite the complex fraction as a product.', '\\(\\frac{10}{27} \\times \\frac{1}{30} = \\frac{10}{810}\\)'),
  step('Simplify by dividing numerator and denominator by 10.', '\\(\\frac{10}{810} = \\frac{1}{81}\\)'),
  step('Final value: \\(\\frac{1}{81}\\).', '\\(\\frac{1}{81}\\)'),
];
STEPS['y10-9a-q11c'] = [
  step('Rewrite negative powers as fractions and evaluate positive powers.', '\\(\\frac{3^{-1} - 3^{-3}}{3^1 - 3^3} = \\frac{\\frac{1}{3} - \\frac{1}{27}}{3 - 27}\\)'),
  step('Numerator: \\(\\frac{9}{27} - \\frac{1}{27} = \\frac{8}{27}\\). Denominator: \\(3 - 27 = -24\\).', '\\(\\frac{\\frac{8}{27}}{-24}\\)'),
  step('Multiply by the reciprocal of the denominator.', '\\(\\frac{8}{27} \\times \\frac{1}{-24} = \\frac{8}{-648}\\)'),
  step('Simplify by dividing numerator and denominator by 8.', '\\(\\frac{8}{-648} = -\\frac{1}{81}\\)'),
  step('Final value: \\(-\\frac{1}{81}\\).', '\\(-\\frac{1}{81}\\)'),
];

// ─── Q12 ───────────────────────────────────────────────────────────────────
STEPS['y10-9a-q12'] = [
  step('Convert each negative power in the numerator to a unit fraction, and expand the positive powers in the denominator.', '\\(\\frac{3^{-1} + 3^{-2} + 3^{-3}}{3 + 3^2 + 3^3} = \\frac{\\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27}}{3 + 9 + 27}\\)'),
  step('Numerator with common denominator 27: \\(\\frac{9 + 3 + 1}{27} = \\frac{13}{27}\\). Denominator: \\(3 + 9 + 27 = 39\\).', '\\(\\frac{\\frac{13}{27}}{39}\\)'),
  step('Rewrite as a single fraction product.', '\\(\\frac{13}{27} \\times \\frac{1}{39} = \\frac{13}{27 \\times 39}\\)'),
  step('Note that \\(27 \\times 39 = 27 \\times 3 \\times 13 = 81 \\times 13\\), so the factor 13 cancels.', '\\(\\frac{13}{81 \\times 13} = \\frac{1}{81}\\)'),
  step('Final value: \\(\\frac{1}{81}\\).', '\\(\\frac{1}{81}\\)'),
];

// ─── Q13 substitute n=2 ────────────────────────────────────────────────────
STEPS['y10-9a-q13'] = [
  step('Substitute the given value \\(n = 2\\) into every exponent.', '\\(2^n + 2^{3-n} + 2^{n-4} = 2^2 + 2^{3-2} + 2^{2-4}\\)'),
  step('Simplify the exponents: \\(3-2 = 1\\) and \\(2-4 = -2\\).', '\\(2^2 + 2^1 + 2^{-2}\\)'),
  step('Evaluate each power: \\(2^2 = 4\\), \\(2^1 = 2\\), and \\(2^{-2} = \\frac{1}{4}\\).', '\\(4 + 2 + \\frac{1}{4}\\)'),
  step('Add the integers first, then combine with the fraction using a common denominator of 4.', '\\(6 + \\frac{1}{4} = \\frac{24}{4} + \\frac{1}{4} = \\frac{25}{4}\\)'),
  step('Final value: \\(\\frac{25}{4}\\).', '\\(\\frac{25}{4}\\)'),
];

// ─── Q14 algebraic fractions with negative indices ─────────────────────────
STEPS['y10-9a-q14a'] = [
  step('Rewrite every negative index as a unit fraction so the expression is ordinary rational arithmetic.', '\\(\\frac{a - b^{-1}}{a^{-1} - b} = \\frac{a - \\frac{1}{b}}{\\frac{1}{a} - b}\\)'),
  step('Combine terms over a common denominator in the numerator and in the denominator.', '\\(\\frac{\\frac{ab - 1}{b}}{\\frac{1 - ab}{a}} = \\frac{ab - 1}{b} \\times \\frac{a}{1 - ab}\\)'),
  step('Notice that \\(1 - ab = -(ab - 1)\\), so the factors \\((ab - 1)\\) cancel with a sign change.', '\\(\\frac{ab - 1}{b} \\cdot \\frac{a}{-(ab - 1)} = -\\frac{a}{b}\\)'),
  step('Simplified form with positive indices: \\(-\\frac{a}{b}\\).', '\\(-\\frac{a}{b}\\)'),
];
STEPS['y10-9a-q14b'] = [
  step('This is a difference of squares pattern: \\((X + Y)(X - Y) = X^2 - Y^2\\) with \\(X = m^{-1}\\) and \\(Y = n^{-1}\\).', '\\((m^{-1} + n^{-1})(m^{-1} - n^{-1}) = m^{-2} - n^{-2}\\)'),
  step('Rewrite negative powers as unit fractions.', '\\(m^{-2} - n^{-2} = \\frac{1}{m^2} - \\frac{1}{n^2}\\)'),
  step('Combine over the common denominator \\(m^2 n^2\\).', '\\(\\frac{n^2 - m^2}{m^2 n^2}\\)'),
  step('Final form with positive indices: \\(\\frac{n^2 - m^2}{m^2 n^2}\\).', '\\(\\frac{n^2 - m^2}{m^2 n^2}\\)'),
];
STEPS['y10-9a-q14c'] = [
  step('Rewrite the negative indices in the denominator as unit fractions.', '\\(\\frac{4ab}{a^{-1} + b^{-1}} = \\frac{4ab}{\\frac{1}{a} + \\frac{1}{b}}\\)'),
  step('Combine the denominator over a common denominator \\(ab\\).', '\\(\\frac{1}{a} + \\frac{1}{b} = \\frac{b + a}{ab}\\)'),
  step('Dividing by a fraction means multiply by its reciprocal.', '\\(4ab \\times \\frac{ab}{a + b} = \\frac{4 a^2 b^2}{a + b}\\)'),
  step('Simplified form: \\(\\frac{4a^2 b^2}{a + b}\\).', '\\(\\frac{4a^2 b^2}{a + b}\\)'),
];
STEPS['y10-9a-q14d'] = [
  step('Rewrite every negative index as a unit fraction.', '\\(\\frac{p^{-1} + q^{-1}}{p^{-2} + q^{-2}} = \\frac{\\frac{1}{p} + \\frac{1}{q}}{\\frac{1}{p^2} + \\frac{1}{q^2}}\\)'),
  step('Combine numerator and denominator separately.', '\\(\\frac{\\frac{q + p}{pq}}{\\frac{q^2 + p^2}{p^2 q^2}} = \\frac{p + q}{pq} \\times \\frac{p^2 q^2}{p^2 + q^2}\\)'),
  step('Cancel one factor of \\(p\\) and one factor of \\(q\\).', '\\(\\frac{(p + q) \\cdot p q}{p^2 + q^2} = \\frac{pq(p + q)}{p^2 + q^2}\\)'),
  step('Final form: \\(\\frac{pq(p + q)}{p^2 + q^2}\\).', '\\(\\frac{pq(p + q)}{p^2 + q^2}\\)'),
];
STEPS['y10-9a-q14e'] = [
  step('Rewrite \\(a^{-1}\\) as a unit fraction inside the brackets.', '\\((a^{-1} + b)^{-2} = \\left(\\frac{1}{a} + b\\right)^{-2}\\)'),
  step('Combine over a common denominator.', '\\(\\left(\\frac{1 + ab}{a}\\right)^{-2}\\)'),
  step('A negative outer power means take the reciprocal and square: \\(\\left(\\frac{A}{B}\\right)^{-2} = \\left(\\frac{B}{A}\\right)^{2}\\).', '\\(\\left(\\frac{a}{1 + ab}\\right)^{2} = \\frac{a^2}{(1 + ab)^2}\\)'),
  step('Simplified form: \\(\\frac{a^2}{(1 + ab)^2}\\).', '\\(\\frac{a^2}{(1 + ab)^2}\\)'),
];
STEPS['y10-9a-q14f'] = [
  step('Rewrite each negative power as a unit fraction.', '\\((m^{-2} + n^{-3})^{-1} = \\left(\\frac{1}{m^2} + \\frac{1}{n^3}\\right)^{-1}\\)'),
  step('Combine the sum over the common denominator \\(m^2 n^3\\).', '\\(\\left(\\frac{n^3 + m^2}{m^2 n^3}\\right)^{-1}\\)'),
  step('The reciprocal of a fraction is the fraction flipped.', '\\(\\frac{m^2 n^3}{n^3 + m^2}\\)'),
  step('Final form with positive indices: \\(\\frac{m^2 n^3}{n^3 + m^2}\\).', '\\(\\frac{m^2 n^3}{n^3 + m^2}\\)'),
];

// ─── Apply to seed file ────────────────────────────────────────────────────
import { pathToFileURL } from 'url';

const mod = await import(pathToFileURL(seedPath).href);
const questions = mod.Y10_CH9_QUESTIONS;

const missing = [];
let updated = 0;
for (const q of questions) {
  if (!q.id?.startsWith('y10-9a-')) continue;
  if (!STEPS[q.id]) {
    missing.push(q.id);
    continue;
  }
  q.solutionSteps = STEPS[q.id];
  if (q.opts && q.answer != null) {
    const ansText = q.opts[Number(q.answer)];
    if (ansText) q.solution = `The correct answer is ${ansText}.`;
  } else if (q.answer != null) {
    q.solution = `The correct answer is ${q.answer}.`;
  }
  updated++;
}

if (missing.length) {
  console.error('Missing hand-authored steps for:', missing.join(', '));
  process.exit(1);
}

const header = 'export const Y10_CH9_QUESTIONS = ';
const body = JSON.stringify(questions, null, 2);
fs.writeFileSync(seedPath, header + body + ';\n', 'utf8');
console.log(`Rewrote solutionSteps for ${updated} y10-9a questions in ${seedPath}`);
console.log('IDs covered:', Object.keys(STEPS).length);
