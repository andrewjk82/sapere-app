const fs = require('fs');

const questions = [];

const generateSolutions = (qNum, qText, answer, solutions, hint) => {
  questions.push({
    id: qNum,
    q: qText,
    a: answer,
    opts: [answer],
    h: hint,
    s: solutions,
    t: "Simultaneous equations",
    c: "11C"
  });
};

// 1
generateSolutions('1a', 'Find the coordinates of the points of intersection of $y = x^2$ and $y = 4$', '$(2, 4), (-2, 4)$', '$x^2 = 4 \\Rightarrow x = \\pm 2$. Sub into $y=4$ gives $(2, 4)$ and $(-2, 4)$.', 'Equate the two expressions for y.');
generateSolutions('1b', 'Find the coordinates of the points of intersection of $y = x^2$ and $y = 1$', '$(1, 1), (-1, 1)$', '$x^2 = 1 \\Rightarrow x = \\pm 1$. Sub into $y=1$ gives $(1, 1)$ and $(-1, 1)$.', 'Equate the two expressions for y.');
generateSolutions('1c', 'Find the coordinates of the points of intersection of $y = (x - 1)^2$ and $y = 2x - 3$', '$(2, 1)$', '$(x-1)^2 = 2x-3 \\Rightarrow x^2-2x+1 = 2x-3 \\Rightarrow x^2-4x+4 = 0 \\Rightarrow (x-2)^2 = 0 \\Rightarrow x=2$. $y = 2(2)-3 = 1$.', 'Expand $(x-1)^2$ and solve the resulting quadratic.');
generateSolutions('1d', 'Find the coordinates of the points of intersection of $y = x^2$ and $y = 7x - 12$', '$(3, 9), (4, 16)$', '$x^2 = 7x-12 \\Rightarrow x^2-7x+12 = 0 \\Rightarrow (x-3)(x-4) = 0 \\Rightarrow x=3, x=4$. $y(3)=9, y(4)=16$.', 'Bring all terms to one side and factorise.');

// 2
generateSolutions('2a', 'Find the coordinates of the points of intersection of $y = x^2 + 3x + 3$ and $y = x + 2$', '$(-1, 1)$', '$x^2+3x+3 = x+2 \\Rightarrow x^2+2x+1=0 \\Rightarrow (x+1)^2=0 \\Rightarrow x=-1$. $y = -1+2 = 1$.', 'Equate the y expressions.');
generateSolutions('2b', 'Find the coordinates of the points of intersection of $y = x^2 + 5x + 2$ and $y = x + 7$', '$(1, 8), (-5, 2)$', '$x^2+5x+2 = x+7 \\Rightarrow x^2+4x-5=0 \\Rightarrow (x+5)(x-1)=0 \\Rightarrow x=1, -5$.', 'Equate the y expressions.');
generateSolutions('2c', 'Find the coordinates of the points of intersection of $y = x^2 + 2x + 4$ and $y = x + 6$', '$(1, 7), (-2, 4)$', '$x^2+2x+4 = x+6 \\Rightarrow x^2+x-2=0 \\Rightarrow (x+2)(x-1)=0 \\Rightarrow x=1, -2$.', 'Equate the y expressions.');
generateSolutions('2d', 'Find the coordinates of the points of intersection of $y = 2x^2 + 3x + 1$ and $y = 2x + 1$', '$(0, 1), (-\\frac{1}{2}, 0)$', '$2x^2+3x+1 = 2x+1 \\Rightarrow 2x^2+x=0 \\Rightarrow x(2x+1)=0 \\Rightarrow x=0, -1/2$.', 'Equate the y expressions.');
generateSolutions('2e', 'Find the coordinates of the points of intersection of $y = 3x^2 + x + 2$ and $y = 3x + 3$', '$(1, 6), (-\\frac{1}{3}, 2)$', '$3x^2+x+2 = 3x+3 \\Rightarrow 3x^2-2x-1=0 \\Rightarrow (3x+1)(x-1)=0 \\Rightarrow x=1, -1/3$.', 'Equate the y expressions.');
generateSolutions('2f', 'Find the coordinates of the points of intersection of $y = 6x^2 + 9x + 5$ and $y = 2x + 3$', '$(-\\frac{1}{2}, 2), (-\\frac{2}{3}, \\frac{5}{3})$', '$6x^2+9x+5 = 2x+3 \\Rightarrow 6x^2+7x+2=0 \\Rightarrow (2x+1)(3x+2)=0 \\Rightarrow x=-1/2, -2/3$.', 'Equate the y expressions.');

// 3
generateSolutions('3a', 'Find the coordinates of the points of intersection of $x^2 + y^2 = 4$ and $x = 2$', '$(2, 0)$', '$2^2+y^2=4 \\Rightarrow y^2=0 \\Rightarrow y=0$.', 'Substitute $x=2$ into the circle equation.');
generateSolutions('3b', 'Find the coordinates of the points of intersection of $x^2 + y^2 = 9$ and $y = 0$', '$(3, 0), (-3, 0)$', '$x^2+0^2=9 \\Rightarrow x^2=9 \\Rightarrow x=\\pm 3$.', 'Substitute $y=0$ into the circle equation.');
generateSolutions('3c', 'Find the coordinates of the points of intersection of $x^2 + y^2 = 32$ and $y = x$', '$(4, 4), (-4, -4)$', '$x^2+x^2=32 \\Rightarrow 2x^2=32 \\Rightarrow x^2=16 \\Rightarrow x=\\pm 4$. $y=x \\Rightarrow y=\\pm 4$.', 'Substitute $y=x$ into the circle equation.');
generateSolutions('3d', 'Find the coordinates of the points of intersection of $x^2 + y^2 = 81$ and $y = 2\\sqrt{2}x$', '$(3, 6\\sqrt{2}), (-3, -6\\sqrt{2})$', '$x^2+(2\\sqrt{2}x)^2=81 \\Rightarrow x^2+8x^2=81 \\Rightarrow 9x^2=81 \\Rightarrow x^2=9 \\Rightarrow x=\\pm 3$. $y=2\\sqrt{2}(\\pm 3)=\\pm 6\\sqrt{2}$.', 'Substitute $y=2\\sqrt{2}x$ into the circle equation.');

// 4
generateSolutions('4a', 'Find the points of intersection of $x^2 + y^2 = 10$ and $y = x + 2$', '$(1, 3), (-3, -1)$', '$x^2+(x+2)^2=10 \\Rightarrow 2x^2+4x-6=0 \\Rightarrow x^2+2x-3=0 \\Rightarrow (x+3)(x-1)=0 \\Rightarrow x=1, -3$. $y=3, -1$.', 'Substitute $y=x+2$ into the first equation.');
generateSolutions('4b', 'Find the points of intersection of $x^2 + y^2 = 17$ and $y = 3 - x$', '$(4, -1), (-1, 4)$', '$x^2+(3-x)^2=17 \\Rightarrow 2x^2-6x-8=0 \\Rightarrow x^2-3x-4=0 \\Rightarrow (x-4)(x+1)=0 \\Rightarrow x=4, -1$. $y=-1, 4$.', 'Substitute $y=3-x$ into the first equation.');
generateSolutions('4c', 'Find the points of intersection of $x^2 + y^2 = 26$ and $x + y = 4$', '$(5, -1), (-1, 5)$', '$y=4-x \\Rightarrow x^2+(4-x)^2=26 \\Rightarrow 2x^2-8x-10=0 \\Rightarrow x^2-4x-5=0 \\Rightarrow x=5, -1$.', 'Substitute $y=4-x$.');
generateSolutions('4d', 'Find the points of intersection of $x^2 + y^2 = 20$ and $y = 2x$', '$(2, 4), (-2, -4)$', '$x^2+(2x)^2=20 \\Rightarrow 5x^2=20 \\Rightarrow x^2=4 \\Rightarrow x=\\pm 2$.', 'Substitute $y=2x$.');
generateSolutions('4e', 'Find the points of intersection of $x^2 + y^2 = 5$ and $y = 2x - 3$', '$(2, 1), (\\frac{2}{5}, -\\frac{11}{5})$', '$x^2+(2x-3)^2=5 \\Rightarrow x^2+4x^2-12x+9=5 \\Rightarrow 5x^2-12x+4=0 \\Rightarrow (5x-2)(x-2)=0 \\Rightarrow x=2, 2/5$.', 'Substitute $y=2x-3$.');
generateSolutions('4f', 'Find the points of intersection of $x^2 + y^2 = 8$ and $y = x + 4$', '$(-2, 2)$', '$x^2+(x+4)^2=8 \\Rightarrow 2x^2+8x+8=0 \\Rightarrow x^2+4x+4=0 \\Rightarrow (x+2)^2=0 \\Rightarrow x=-2$.', 'Substitute $y=x+4$.');
generateSolutions('4g', 'Find the points of intersection of $x^2 + y^2 = 18$ and $x + y = 6$', '$(3, 3)$', '$y=6-x \\Rightarrow x^2+(6-x)^2=18 \\Rightarrow 2x^2-12x+18=0 \\Rightarrow x^2-6x+9=0 \\Rightarrow (x-3)^2=0 \\Rightarrow x=3$.', 'Substitute $y=6-x$.');
generateSolutions('4h', 'Find the points of intersection of $x^2 + y^2 = 25$ and $3x + 4y = 25$', '$(3, 4)$', '$4y=25-3x \\Rightarrow 16x^2+16y^2=400 \\Rightarrow 16x^2+(25-3x)^2=400 \\Rightarrow 25x^2-150x+225=0 \\Rightarrow x^2-6x+9=0 \\Rightarrow x=3$. $y=4$.', 'Substitute for y or x.');
generateSolutions('4i', 'Find the points of intersection of $x^2 + y^2 = 4$ and $x + y = 6$', 'No points of intersection', '$x^2+(6-x)^2=4 \\Rightarrow 2x^2-12x+32=0 \\Rightarrow x^2-6x+16=0$. $\\Delta = 36-64 < 0$, no real solutions.', 'Check the discriminant.');
generateSolutions('4j', 'Find the points of intersection of $x^2 + y^2 = 9$ and $y = 2x + 8$', 'No points of intersection', '$x^2+(2x+8)^2=9 \\Rightarrow 5x^2+32x+55=0$. $\\Delta = 1024-1100 < 0$, no real solutions.', 'Check the discriminant.');

// 5
generateSolutions('5a', 'Find the points of intersection of $y = x - 2$ and $y = \\frac{3}{x}$', '$(3, 1), (-1, -3)$', '$x-2=3/x \\Rightarrow x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0 \\Rightarrow x=3, -1$.', 'Multiply by x.');
generateSolutions('5b', 'Find the points of intersection of $y = 2x - 1$ and $y = \\frac{1}{x}$', '$(1, 1), (-\\frac{1}{2}, -2)$', '$2x-1=1/x \\Rightarrow 2x^2-x-1=0 \\Rightarrow (2x+1)(x-1)=0 \\Rightarrow x=1, -1/2$.', 'Multiply by x.');
generateSolutions('5c', 'Find the points of intersection of $y = 3x - 1$ and $y = \\frac{2}{x}$', '$(1, 2), (-\\frac{2}{3}, -3)$', '$3x-1=2/x \\Rightarrow 3x^2-x-2=0 \\Rightarrow (3x+2)(x-1)=0 \\Rightarrow x=1, -2/3$.', 'Multiply by x.');
generateSolutions('5d', 'Find the points of intersection of $y = -\\frac{1}{x}$ and $y = -x$', '$(1, -1), (-1, 1)$', '$-1/x = -x \\Rightarrow x^2=1 \\Rightarrow x=\\pm 1$.', 'Multiply by x.');

// 6
generateSolutions('6a', 'The circle $x^2 + y^2 = 1$, the parabola $y = x^2$ and the line $y = x$ are drawn on the same axes. Let A and B be the points of intersection of $y = x$ with the circle and parabola (in the first quadrant), respectively. Find the coordinates of A and B.', '$A(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}), B(1, 1)$', 'For A: $x^2+x^2=1 \\Rightarrow 2x^2=1 \\Rightarrow x=1/\\sqrt{2}$. For B: $x=x^2 \\Rightarrow x^2-x=0 \\Rightarrow x(x-1)=0 \\Rightarrow x=1$ (since B is not origin).', 'Find intersections with $y=x$.');
generateSolutions('6b', 'Using the points A and B from the previous part, where XA and YB are perpendicular to the x-axis, find the area of triangles OAX and OBY.', '$OAX = \\frac{1}{4}, OBY = \\frac{1}{2}$', 'Area OAX = $\\frac{1}{2} \\times \\frac{1}{\\sqrt{2}} \\times \\frac{1}{\\sqrt{2}} = \\frac{1}{4}$. Area OBY = $\\frac{1}{2} \\times 1 \\times 1 = \\frac{1}{2}$.', 'Area = $\\frac{1}{2}bh$.');

// 7
generateSolutions('7', 'Where does the line $3y - x = 7$ meet the circle $(x - 3)^2 + y^2 = 10$?', '$(2, 3)$', '$x = 3y-7 \\Rightarrow (3y-10)^2+y^2=10 \\Rightarrow 9y^2-60y+100+y^2=10 \\Rightarrow 10y^2-60y+90=0 \\Rightarrow y^2-6y+9=0 \\Rightarrow (y-3)^2=0 \\Rightarrow y=3$. Then $x=3(3)-7=2$.', 'Substitute $x$ in terms of $y$.');

// 8
generateSolutions('8', 'Find the points of intersection of the line $y = 2x$ and the circle $(x - 5)^2 + y^2 = 4$.', 'No points of intersection', '$(x-5)^2+(2x)^2=4 \\Rightarrow x^2-10x+25+4x^2=4 \\Rightarrow 5x^2-10x+21=0$. $\\Delta = 100-4(5)(21) = 100-420 < 0$.', 'Check the discriminant of the resulting quadratic.');

// 9
generateSolutions('9a', 'Find the values of $a$ for which the graphs of $y = x + a$ and $x^2 + y^2 = 9$ intersect at one point.', '$a = 3\\sqrt{2}, -3\\sqrt{2}$', '$x^2+(x+a)^2=9 \\Rightarrow 2x^2+2ax+a^2-9=0$. $\\Delta = 4a^2-8(a^2-9) = 72-4a^2$. For one point, $\\Delta=0 \\Rightarrow a^2=18 \\Rightarrow a=\\pm\\sqrt{18}=\\pm3\\sqrt{2}$.', 'Set discriminant equal to 0.');
generateSolutions('9b', 'Find the values of $a$ for which the graphs of $y = x + a$ and $x^2 + y^2 = 9$ intersect at two points.', '$-3\\sqrt{2} < a < 3\\sqrt{2}$', '$\\Delta > 0 \\Rightarrow 72-4a^2 > 0 \\Rightarrow a^2 < 18 \\Rightarrow -3\\sqrt{2} < a < 3\\sqrt{2}$.', 'Set discriminant greater than 0.');
generateSolutions('9c', 'Find the values of $a$ for which the graphs of $y = x + a$ and $x^2 + y^2 = 9$ intersect at no points.', '$a < -3\\sqrt{2}$ or $a > 3\\sqrt{2}$', '$\\Delta < 0 \\Rightarrow a^2 > 18 \\Rightarrow a < -3\\sqrt{2}$ or $a > 3\\sqrt{2}$.', 'Set discriminant less than 0.');

// 10
generateSolutions('10', 'Find the points of intersection of the circles $x^2 + y^2 = 9$ and $(x - 2)^2 + y^2 = 9$.', '$(1, 2\\sqrt{2}), (1, -2\\sqrt{2})$', '$y^2=9-x^2 \\Rightarrow (x-2)^2+9-x^2=9 \\Rightarrow x^2-4x+4-x^2=0 \\Rightarrow 4x=4 \\Rightarrow x=1$. Sub into $y^2=9-x^2 \\Rightarrow y^2=8 \\Rightarrow y=\\pm2\\sqrt{2}$.', 'Substitute $y^2 = 9-x^2$ into the second circle.');

// For questions with multiple opts, I'll generate distractors for the JSON
questions.forEach(q => {
  q.opts = [
    q.a,
    q.a.replace(/\\d+/g, m => parseInt(m) + 1), // Dumb distractor
    q.a.replace(/\\-/g, ''), // Strip minus signs
    'No points of intersection'
  ];
  // Remove duplicates and ensure length is 4
  q.opts = [...new Set(q.opts)];
  while(q.opts.length < 4) {
    q.opts.push(q.a + ' + ' + q.opts.length);
  }
});

fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11CQuestions.js', `export const Y10_CH11C_QUESTIONS = ${JSON.stringify(questions, null, 2)};`);

console.log("Written file");
