const fs = require('fs');

const questions = [];
const addQ = (id, type, difficulty, timeLimit, q, a, steps, solution = null) => {
  questions.push({
    id: 'y11-1a-' + id,
    type,
    difficulty,
    timeLimit,
    question: q,
    a,
    solution: solution || steps.map(s => s.workingOut).join('\n'),
    t: 'Algebra review',
    hint: 'Apply expansion rules carefully.',
    solutionSteps: steps,
    graphData: null
  });
};

// Q1 Expand (changed numbers and vars)
addQ('q1a', 'short_answer', 'easy', 30, 'Expand:\n\n$4(y - 3)$', '4y - 12', [{explanation:'Multiply each term inside by 4', workingOut:'4y - 12'}]);
addQ('q1b', 'short_answer', 'easy', 30, 'Expand:\n\n$3(z - 5)$', '3z - 15', [{explanation:'Multiply each term inside by 3', workingOut:'3z - 15'}]);
addQ('q1c', 'short_answer', 'easy', 30, 'Expand:\n\n$-4(w - 3)$', '-4w + 12', [{explanation:'Multiply each term by -4, note the sign change', workingOut:'-4w + 12'}]);
addQ('q1d', 'short_answer', 'easy', 30, 'Expand:\n\n$-3(p - 4)$', '-3p + 12', [{explanation:'Multiply each term by -3', workingOut:'-3p + 12'}]);
addQ('q1e', 'short_answer', 'easy', 30, 'Expand:\n\n$-4(m + 5)$', '-4m - 20', [{explanation:'Multiply each term by -4', workingOut:'-4m - 20'}]);
addQ('q1f', 'short_answer', 'easy', 30, 'Expand:\n\n$-5(n + 2)$', '-5n - 10', [{explanation:'Multiply each term by -5', workingOut:'-5n - 10'}]);
addQ('q1g', 'short_answer', 'easy', 30, 'Expand:\n\n$-(y - 5)$', '-y + 5', [{explanation:'Distribute the negative sign', workingOut:'-y + 5'}]);
addQ('q1h', 'short_answer', 'easy', 30, 'Expand:\n\n$-(4 - k)$', '-4 + k', [{explanation:'Distribute the negative sign', workingOut:'-4 + k'}]);
addQ('q1i', 'short_answer', 'easy', 30, 'Expand:\n\n$-(t + 6)$', '-t - 6', [{explanation:'Distribute the negative sign', workingOut:'-t - 6'}]);

// Q2 Expand
addQ('q2a', 'short_answer', 'easy', 30, 'Expand:\n\n$4(u + v)$', '4u + 4v', [{explanation:'Distribute 4', workingOut:'4u + 4v'}]);
addQ('q2b', 'short_answer', 'easy', 30, 'Expand:\n\n$-3(m - n)$', '-3m + 3n', [{explanation:'Distribute -3', workingOut:'-3m + 3n'}]);
addQ('q2c', 'short_answer', 'easy', 30, 'Expand:\n\n$5(x + 3y)$', '5x + 15y', [{explanation:'Distribute 5', workingOut:'5x + 15y'}]);
addQ('q2d', 'short_answer', 'easy', 30, 'Expand:\n\n$p(p - 6)$', 'p^2 - 6p', [{explanation:'Distribute p', workingOut:'p^2 - 6p'}]);
addQ('q2e', 'short_answer', 'easy', 30, 'Expand:\n\n$-y(y - 5)$', '-y^2 + 5y', [{explanation:'Distribute -y', workingOut:'-y^2 + 5y'}]);
addQ('q2f', 'short_answer', 'easy', 30, 'Expand:\n\n$-k(k + 3)$', '-k^2 - 3k', [{explanation:'Distribute -k', workingOut:'-k^2 - 3k'}]);
addQ('q2g', 'short_answer', 'easy', 30, 'Expand:\n\n$4(x + 2y - 3z)$', '4x + 8y - 12z', [{explanation:'Distribute 4 across all terms', workingOut:'4x + 8y - 12z'}]);
addQ('q2h', 'short_answer', 'easy', 30, 'Expand:\n\n$-2(3u - 4v + 2w)$', '-6u + 8v - 4w', [{explanation:'Distribute -2', workingOut:'-6u + 8v - 4w'}]);
addQ('q2i', 'short_answer', 'easy', 30, 'Expand:\n\n$pq(3p - 2q)$', '3p^2q - 2pq^2', [{explanation:'Distribute pq', workingOut:'3p^2q - 2pq^2'}]);

// Q3 Expand and simplify
addQ('q3a', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$3(y + 2) - y$', '2y + 6', [{explanation:'Expand', workingOut:'3y + 6 - y'}, {explanation:'Simplify', workingOut:'2y + 6'}]);
addQ('q3b', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$2x + 4 + 3(x - 5)$', '5x - 11', [{explanation:'Expand', workingOut:'2x + 4 + 3x - 15'}, {explanation:'Simplify', workingOut:'5x - 11'}]);
addQ('q3c', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$4 + 3(z - 2)$', '3z - 2', [{explanation:'Expand', workingOut:'4 + 3z - 6'}, {explanation:'Simplify', workingOut:'3z - 2'}]);
addQ('q3d', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$-2(p + 3) + 8$', '-2p + 2', [{explanation:'Expand', workingOut:'-2p - 6 + 8'}, {explanation:'Simplify', workingOut:'-2p + 2'}]);
addQ('q3e', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$5 - (w + 2)$', '-w + 3', [{explanation:'Expand', workingOut:'5 - w - 2'}, {explanation:'Simplify', workingOut:'-w + 3'}]);
addQ('q3f', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$u + v - (u - v)$', '2v', [{explanation:'Expand', workingOut:'u + v - u + v'}, {explanation:'Simplify', workingOut:'2v'}]);
addQ('q3g', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(3p - 2q) - (2p - 3q)$', 'p + q', [{explanation:'Expand', workingOut:'3p - 2q - 2p + 3q'}, {explanation:'Simplify', workingOut:'p + q'}]);
addQ('q3h', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$4(y - 3) - 3(y - 4)$', 'y', [{explanation:'Expand', workingOut:'4y - 12 - 3y + 12'}, {explanation:'Simplify', workingOut:'y'}]);
addQ('q3i', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$5(3x - 2y) - 2(x + 3y)$', '13x - 16y', [{explanation:'Expand', workingOut:'15x - 10y - 2x - 6y'}, {explanation:'Simplify', workingOut:'13x - 16y'}]);
addQ('q3j', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$3(m - n) - 4(m + n)$', '-m - 7n', [{explanation:'Expand', workingOut:'3m - 3n - 4m - 4n'}, {explanation:'Simplify', workingOut:'-m - 7n'}]);
addQ('q3k', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$3y(y + 4z) - y(y - 2z)$', '2y^2 + 14yz', [{explanation:'Expand', workingOut:'3y^2 + 12yz - y^2 + 2yz'}, {explanation:'Simplify', workingOut:'2y^2 + 14yz'}]);
addQ('q3l', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$4(3p - 2q) - 5(-p - 3q)$', '17p + 7q', [{explanation:'Expand', workingOut:'12p - 8q + 5p + 15q'}, {explanation:'Simplify', workingOut:'17p + 7q'}]);

// Q4 Expand and simplify
addQ('q4a', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(y + 4)(y + 5)$', 'y^2 + 9y + 20', [{explanation:'Use FOIL', workingOut:'y^2 + 5y + 4y + 20'}, {explanation:'Simplify', workingOut:'y^2 + 9y + 20'}]);
addQ('q4b', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(z + 2)(z + 8)$', 'z^2 + 10z + 16', [{explanation:'Use FOIL', workingOut:'z^2 + 8z + 2z + 16'}, {explanation:'Simplify', workingOut:'z^2 + 10z + 16'}]);
addQ('q4c', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(w + 5)(w - 2)$', 'w^2 + 3w - 10', [{explanation:'Use FOIL', workingOut:'w^2 - 2w + 5w - 10'}, {explanation:'Simplify', workingOut:'w^2 + 3w - 10'}]);
addQ('q4d', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(p - 5)(p + 3)$', 'p^2 - 2p - 15', [{explanation:'Use FOIL', workingOut:'p^2 + 3p - 5p - 15'}, {explanation:'Simplify', workingOut:'p^2 - 2p - 15'}]);
addQ('q4e', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(m - 2)(m - 4)$', 'm^2 - 6m + 8', [{explanation:'Use FOIL', workingOut:'m^2 - 4m - 2m + 8'}, {explanation:'Simplify', workingOut:'m^2 - 6m + 8'}]);
addQ('q4f', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(3x + 2)(x + 4)$', '3x^2 + 14x + 8', [{explanation:'Use FOIL', workingOut:'3x^2 + 12x + 2x + 8'}, {explanation:'Simplify', workingOut:'3x^2 + 14x + 8'}]);
addQ('q4g', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(v - 3)(4v + 5)$', '4v^2 - 7v - 15', [{explanation:'Use FOIL', workingOut:'4v^2 + 5v - 12v - 15'}, {explanation:'Simplify', workingOut:'4v^2 - 7v - 15'}]);
addQ('q4h', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(5q + 2)(3q - 4)$', '15q^2 - 14q - 8', [{explanation:'Use FOIL', workingOut:'15q^2 - 20q + 6q - 8'}, {explanation:'Simplify', workingOut:'15q^2 - 14q - 8'}]);
addQ('q4i', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(3c - 5)(c - 4)$', '3c^2 - 17c + 20', [{explanation:'Use FOIL', workingOut:'3c^2 - 12c - 5c + 20'}, {explanation:'Simplify', workingOut:'3c^2 - 17c + 20'}]);
addQ('q4j', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(4b - 3)(2b + 5)$', '8b^2 + 14b - 15', [{explanation:'Use FOIL', workingOut:'8b^2 + 20b - 6b - 15'}, {explanation:'Simplify', workingOut:'8b^2 + 14b - 15'}]);
addQ('q4k', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(7 - k)(k - 2)$', '-k^2 + 9k - 14', [{explanation:'Use FOIL', workingOut:'7k - 14 - k^2 + 2k'}, {explanation:'Simplify', workingOut:'-k^2 + 9k - 14'}]);
addQ('q4l', 'short_answer', 'easy', 30, 'Expand and simplify:\n\n$(3h - 2)(5 + h)$', '3h^2 + 13h - 10', [{explanation:'Use FOIL', workingOut:'15h + 3h^2 - 10 - 2h'}, {explanation:'Simplify', workingOut:'3h^2 + 13h - 10'}]);

// Q5
addQ('q5a', 'teacher_review', 'medium', 90, 'By expanding $(X + Y)(X + Y)$, prove the special expansion $(X + Y)^2 = X^2 + 2XY + Y^2$.', 'Proof completed', [{explanation:'Expand', workingOut:'(X+Y)(X+Y) = X^2 + XY + YX + Y^2'}, {explanation:'Simplify', workingOut:'X^2 + 2XY + Y^2'}]);
addQ('q5bi', 'teacher_review', 'medium', 90, 'Similarly, prove the special expansion:\n\n$(X - Y)^2 = X^2 - 2XY + Y^2$', 'Proof completed', [{explanation:'Expand', workingOut:'(X-Y)(X-Y) = X^2 - XY - YX + Y^2'}, {explanation:'Simplify', workingOut:'X^2 - 2XY + Y^2'}]);
addQ('q5bii', 'teacher_review', 'medium', 90, 'Similarly, prove the special expansion:\n\n$(X - Y)(X + Y) = X^2 - Y^2$', 'Proof completed', [{explanation:'Expand', workingOut:'(X-Y)(X+Y) = X^2 + XY - YX - Y^2'}, {explanation:'Simplify', workingOut:'X^2 - Y^2'}]);

// Q6 Use the special expansions
let q6Data = [
  ['p + q', '(p + q)^2', 'p^2 + 2pq + q^2'],
  ['p - q', '(p - q)^2', 'p^2 - 2pq + q^2'],
  ['p - q, p + q', '(p - q)(p + q)', 'p^2 - q^2'],
  ['b + 4', '(b + 4)^2', 'b^2 + 8b + 16'],
  ['c - 5', '(c - 5)^2', 'c^2 - 10c + 25'],
  ['d + 6', '(d + 6)^2', 'd^2 + 12d + 36'],
  ['e - 7, e + 7', '(e - 7)(e + 7)', 'e^2 - 49'],
  ['8 + k', '(8 + k)(8 - k)', '64 - k^2'],
  ['9 + m', '(9 + m)^2', '81 + 18m + m^2'],
  ['10 - n', '(10 - n)^2', '100 - 20n + n^2'],
  ['v + 12', '(v + 12)(v - 12)', 'v^2 - 144'],
  ['w + 13', '(w + 13)^2', 'w^2 + 26w + 169'],
  ['3x + 2', '(3x + 2)^2', '9x^2 + 12x + 4'],
  ['4y - 5', '(4y - 5)^2', '16y^2 - 40y + 25'],
  ['5z + 3', '(5z + 3)^2', '25z^2 + 30z + 9'],
  ['3p + 4q', '(3p + 4q)^2', '9p^2 + 24pq + 16q^2'],
  ['4u + 5v', '(4u + 5v)(4u - 5v)', '16u^2 - 25v^2'],
  ['5m - 3n', '(5m - 3n)(5m + 3n)', '25m^2 - 9n^2'],
  ['6k + 5', '(6k + 5)^2', '36k^2 + 60k + 25'],
  ['5h - 6j', '(5h - 6j)^2', '25h^2 - 60hj + 36j^2'],
  ['5 + 6w', '(5 + 6w)(5 - 6w)', '25 - 36w^2'],
  ['6 - 5u', '(6 - 5u)^2', '36 - 60u + 25u^2'],
  ['8x + 5y', '(8x + 5y)^2', '64x^2 + 80xy + 25y^2'],
  ['9 - 4z', '(9 - 4z)^2', '81 - 72z + 16z^2']
];
q6Data.forEach((d, i) => {
  let letter = String.fromCharCode(97 + i);
  addQ('q6' + letter, 'short_answer', 'medium', 90, 'Use the special expansions to expand:\n\n$' + d[1] + '$', d[2], [{explanation:'Apply expansion rule', workingOut:d[2]}]);
});

// Q7 Expand and simplify
addQ('q7a', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$\\left(u + \\frac{1}{u}\\right)^2$', 'u^2 + 2 + \\frac{1}{u^2}', [{explanation:'Expand', workingOut:'u^2 + 2(u)(\\frac{1}{u}) + (\\frac{1}{u})^2 = u^2 + 2 + \\frac{1}{u^2}'}]);
addQ('q7b', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$\\left(u - \\frac{1}{u}\\right)^2$', 'u^2 - 2 + \\frac{1}{u^2}', [{explanation:'Expand', workingOut:'u^2 - 2(u)(\\frac{1}{u}) + (\\frac{1}{u})^2 = u^2 - 2 + \\frac{1}{u^2}'}]);
addQ('q7c', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$\\left(u + \\frac{1}{u}\\right)\\left(u - \\frac{1}{u}\\right)$', 'u^2 - \\frac{1}{u^2}', [{explanation:'Expand as difference of squares', workingOut:'u^2 - (\\frac{1}{u})^2 = u^2 - \\frac{1}{u^2}'}]);

// Q8
addQ('q8a', 'short_answer', 'medium', 90, 'By writing $103$ as $(100 + 3)$, use the special expansions to find (without using a calculator) the value of:\n\n$103^2$', '10609', [{explanation:'Expand', workingOut:'(100+3)^2 = 100^2 + 2(100)(3) + 3^2'}, {explanation:'Calculate', workingOut:'10000 + 600 + 9 = 10609'}]);
addQ('q8b', 'short_answer', 'medium', 90, 'Use the special expansions to find (without using a calculator) the value of:\n\n$998^2$', '996004', [{explanation:'Write as (1000-2)^2', workingOut:'(1000-2)^2 = 1000^2 - 2(1000)(2) + 2^2'}, {explanation:'Calculate', workingOut:'1000000 - 4000 + 4 = 996004'}]);
addQ('q8c', 'short_answer', 'medium', 90, 'Use the special expansions to find (without using a calculator) the value of:\n\n$304 \\times 296$', '89984', [{explanation:'Write as (300+4)(300-4)', workingOut:'300^2 - 4^2'}, {explanation:'Calculate', workingOut:'90000 - 16 = 89984'}]);

// Q9 Expand and simplify
addQ('q9a', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(x - y)(x^2 + xy + y^2)$', 'x^3 - y^3', [{explanation:'Expand', workingOut:'x^3 + x^2y + xy^2 - yx^2 - xy^2 - y^3'}, {explanation:'Simplify', workingOut:'x^3 - y^3'}]);
addQ('q9b', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(p + 3)^2 - (p + 2)^2$', '2p + 5', [{explanation:'Expand', workingOut:'(p^2 + 6p + 9) - (p^2 + 4p + 4)'}, {explanation:'Simplify', workingOut:'2p + 5'}]);
addQ('q9c', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(m - 4)^2 - (m - 4)(m + 4)$', '-8m + 32', [{explanation:'Expand', workingOut:'(m^2 - 8m + 16) - (m^2 - 16)'}, {explanation:'Simplify', workingOut:'-8m + 32'}]);
addQ('q9d', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(3y + 2)(y - 1) - (y - 3)(y + 1)$', '2y^2 - y + 1', [{explanation:'Expand', workingOut:'(3y^2 - y - 2) - (y^2 - 2y - 3)'}, {explanation:'Simplify', workingOut:'2y^2 + y + 1'}]);
addQ('q9e', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(y - 3)^3$', 'y^3 - 9y^2 + 27y - 27', [{explanation:'Expand', workingOut:'y^3 - 3y^2(3) + 3y(3^2) - 3^3'}, {explanation:'Simplify', workingOut:'y^3 - 9y^2 + 27y - 27'}]);
addQ('q9f', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(u + v + w)^2 - 2(uv + vw + wu)$', 'u^2 + v^2 + w^2', [{explanation:'Expand', workingOut:'u^2 + v^2 + w^2 + 2uv + 2vw + 2wu - 2uv - 2vw - 2wu'}, {explanation:'Simplify', workingOut:'u^2 + v^2 + w^2'}]);

// Q10
addQ('q10a', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(m + 5)^3$', 'm^3 + 15m^2 + 75m + 125', [{explanation:'Expand using binomial theorem', workingOut:'m^3 + 3m^2(5) + 3m(5^2) + 5^3 = m^3 + 15m^2 + 75m + 125'}]);
addQ('q10b', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(a + b + c)^2 - 2(ab + bc + ca)$', 'a^2 + b^2 + c^2', [{explanation:'Expand', workingOut:'a^2 + b^2 + c^2 + 2ab + 2bc + 2ca - 2ab - 2bc - 2ca'}, {explanation:'Simplify', workingOut:'a^2 + b^2 + c^2'}]);
addQ('q10c', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(p + q - r)(p - q + r)$', 'p^2 - q^2 + 2qr - r^2', [{explanation:'Group terms', workingOut:'(p + (q - r))(p - (q - r)) = p^2 - (q - r)^2'}, {explanation:'Expand', workingOut:'p^2 - (q^2 - 2qr + r^2) = p^2 - q^2 + 2qr - r^2'}]);
addQ('q10d', 'short_answer', 'medium', 90, 'Expand and simplify:\n\n$(x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)$', 'x^3 + y^3 + z^3 - 3xyz', [{explanation:'Expand', workingOut:'x^3+xy^2+xz^2-x^2y-xyz-zx^2 + x^2y+y^3+yz^2-xy^2-y^2z-xyz + x^2z+y^2z+z^3-xyz-yz^2-xz^2'}, {explanation:'Simplify', workingOut:'x^3 + y^3 + z^3 - 3xyz'}]);

// Q11
addQ('q11a', 'short_answer', 'medium', 90, 'Subtract $x(y + z - x)$ from the sum of $y(z + x - y)$ and $z(x + y - z)$.', 'x^2 - y^2 - z^2 + 2yz', [{explanation:'Sum is', workingOut:'yz + xy - y^2 + zx + zy - z^2 = xy + 2yz + zx - y^2 - z^2'}, {explanation:'Subtract', workingOut:'xy + 2yz + zx - y^2 - z^2 - (xy + xz - x^2)'}, {explanation:'Simplify', workingOut:'x^2 - y^2 - z^2 + 2yz'}]);
addQ('q11b', 'short_answer', 'medium', 90, 'Subtract the sum of $3p^2 - 2(p - 1)$ and $3p + 2(p^2 - 3)$ from the sum of $4p^2 - (p - 3)$ and $p^2 - 3(p + 1)$.', '0', [{explanation:'Sum 1', workingOut:'3p^2 - 2p + 2 + 3p + 2p^2 - 6 = 5p^2 + p - 4'}, {explanation:'Sum 2', workingOut:'4p^2 - p + 3 + p^2 - 3p - 3 = 5p^2 - 4p'}, {explanation:'Subtract', workingOut:'(5p^2 - 4p) - (5p^2 + p - 4) = -5p + 4'}]);
addQ('q11c', 'short_answer', 'medium', 90, 'If $U = y - b$ and $V = 3y + b$, find the product of $V - U$ and $U + 2V$ in terms of $y$ and $b$.', '14y^2 + 19yb + 6b^2', [{explanation:'V - U', workingOut:'(3y + b) - (y - b) = 2y + 2b'}, {explanation:'U + 2V', workingOut:'(y - b) + 2(3y + b) = 7y + b'}, {explanation:'Product', workingOut:'(2y + 2b)(7y + b) = 14y^2 + 2yb + 14yb + 2b^2 = 14y^2 + 16yb + 2b^2'}]);

// Q12
addQ('q12', 'short_answer', 'hard', 120, 'Suppose that $y + \\frac{1}{y} = 4$. Find the value of $y^2 + \\frac{1}{y^2}$ without solving for $y$.', '14', [{explanation:'Square both sides', workingOut:'(y + \\frac{1}{y})^2 = 4^2'}, {explanation:'Expand', workingOut:'y^2 + 2 + \\frac{1}{y^2} = 16'}, {explanation:'Solve', workingOut:'y^2 + \\frac{1}{y^2} = 14'}]);

// Q13
addQ('q13a', 'teacher_review', 'hard', 120, 'Prove the identity:\n\n$(x + y + z)(xy + yz + zx) - xyz = (x + y)(y + z)(z + x)$', 'Proof completed', [{explanation:'Expand LHS', workingOut:'x^2y+xyz+zx^2+xy^2+y^2z+xyz+xyz+yz^2+z^2x-xyz'}, {explanation:'Factorise RHS', workingOut:'(x+y)(y+z)(z+x) = (xy+xz+y^2+yz)(z+x) = xyz+x^2y+xz^2+x^2z+y^2z+xy^2+yz^2+xyz'}, {explanation:'Match', workingOut:'Both equal x^2y + x^2z + y^2x + y^2z + z^2x + z^2y + 2xyz'}]);
addQ('q13b', 'teacher_review', 'hard', 120, 'Prove the identity:\n\n$(pu + qv)^2 + (pv - qu)^2 + r^2(u^2 + v^2) = (u^2 + v^2)(p^2 + q^2 + r^2)$', 'Proof completed', [{explanation:'Expand LHS', workingOut:'p^2u^2 + 2puqv + q^2v^2 + p^2v^2 - 2pvqu + q^2u^2 + r^2u^2 + r^2v^2'}, {explanation:'Simplify', workingOut:'p^2(u^2+v^2) + q^2(u^2+v^2) + r^2(u^2+v^2)'}, {explanation:'Factorise', workingOut:'(u^2+v^2)(p^2+q^2+r^2) = RHS'}]);

// Q14
addQ('q14', 'teacher_review', 'hard', 120, 'If $(w + x)^2 + (x + y)^2 + (y + z)^2 = 4(wx + xy + yz)$, prove that $w = x = y = z$.', 'Proof completed', [{explanation:'Expand', workingOut:'w^2+2wx+x^2 + x^2+2xy+y^2 + y^2+2yz+z^2 - 4wx - 4xy - 4yz = 0'}, {explanation:'Simplify', workingOut:'w^2-2wx+x^2 + x^2-2xy+y^2 + y^2-2yz+z^2 = 0'}, {explanation:'Factorise', workingOut:'(w-x)^2 + (x-y)^2 + (y-z)^2 = 0'}, {explanation:'Conclude', workingOut:'Sum of squares is 0 implies w=x, x=y, y=z. Thus w=x=y=z.'}]);

const content = `export const Y11_EXT1_CH1A_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync('src/constants/seedYear11Ext1Ch1AQuestions.js', content);
