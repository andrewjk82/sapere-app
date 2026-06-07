const fs = require('fs');

const questions = [];

// Helper
const addQ = (q) => questions.push(q);

const generateFindY = (qNum, equation, formulaStr, xVals, solutions) => {
  xVals.forEach((x, i) => {
    const letter = String.fromCharCode(97 + i);
    addQ({
      id: `y10-11b-q${qNum}${letter}`,
      type: 'teacher_review',
      difficulty: 'easy',
      timeLimit: 60,
      t: 'Evaluating Hyperbolas',
      question: `Given that \\(${equation}\\), find \\(y\\) when \\(x = ${x.tex}\\).`,
      a: `\\(y = ${solutions[i]}\\)`,
      hint: `Substitute \\(x = ${x.tex}\\) into the equation \\(${equation}\\).`,
      solutionSteps: [
        {
          explanation: `Substitute the value of \\(x\\) into the equation.`,
          workingOut: `y = ${formulaStr.replace('x', x.tex.includes('-') ? `(${x.tex})` : x.tex)}`
        },
        {
          explanation: `Evaluate the expression to find \\(y\\).`,
          workingOut: `y = ${solutions[i]}`
        }
      ]
    });
  });
};

// 1. y = 1/x
generateFindY(1, 'y = \\frac{1}{x}', '\\frac{1}{x}', 
  [{tex: '2'}, {tex: '-2'}, {tex: '\\frac{1}{2}'}, {tex: '\\frac{3}{2}'}, {tex: '-\\frac{2}{3}'}],
  ['\\frac{1}{2}', '-\\frac{1}{2}', '2', '\\frac{2}{3}', '-\\frac{3}{2}']
);

// 2. y = 12/x
generateFindY(2, 'y = \\frac{12}{x}', '\\frac{12}{x}', 
  [{tex: '3'}, {tex: '4'}, {tex: '\\frac{1}{2}'}, {tex: '-\\frac{3}{2}'}, {tex: '\\frac{3}{4}'}],
  ['4', '3', '24', '-8', '16']
);

// 3. y = -1/x
generateFindY(3, 'y = -\\frac{1}{x}', '-\\frac{1}{x}', 
  [{tex: '-1'}, {tex: '-2'}, {tex: '-\\frac{1}{2}'}, {tex: '\\frac{3}{2}'}, {tex: '-\\frac{3}{2}'}],
  ['1', '\\frac{1}{2}', '2', '-\\frac{2}{3}', '\\frac{2}{3}']
);

// 4. y = 1/(x-3)
generateFindY(4, 'y = \\frac{1}{x-3}', '\\frac{1}{x-3}', 
  [{tex: '4'}, {tex: '2'}, {tex: '5'}, {tex: '3\\frac{1}{2}'}, {tex: '2\\frac{3}{4}'}],
  ['1', '-1', '\\frac{1}{2}', '2', '-4']
);

// 7. y = 12/x
generateFindY(7, 'y = \\frac{12}{x}', '\\frac{12}{x}', 
  [{tex: '-0.001'}, {tex: '-0.2'}, {tex: '3'}, {tex: '24'}, {tex: '144'}],
  ['-12000', '-60', '4', '0.5', '\\frac{1}{12}']
);

// 8. y = 6/(x-3)
generateFindY(8, 'y = \\frac{6}{x-3}', '\\frac{6}{x-3}', 
  [{tex: '0'}, {tex: '1'}, {tex: '2.99'}, {tex: '3.01'}, {tex: '1000'}],
  ['-2', '-3', '-600', '600', '\\frac{6}{997}']
);

// 9. y = 12/(x+3)
generateFindY(9, 'y = \\frac{12}{x+3}', '\\frac{12}{x+3}', 
  [{tex: '0'}, {tex: '-2.9'}, {tex: '-2.99'}, {tex: '-3.01'}, {tex: '-3.001'}],
  ['4', '120', '1200', '-1200', '-12000']
);

const graphQ = (qNum, eq, asymptotes, xInt, yInt, boardScript) => {
  addQ({
    id: `y10-11b-q${qNum}`,
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 60,
    t: 'Sketching Hyperbolas',
    question: `Sketch the graph of \\(${eq}\\), showing the asymptotes and any intercepts.`,
    a: `Asymptotes at ${asymptotes}. Intercepts at ${xInt ? xInt : 'none'} (x) and ${yInt ? yInt : 'none'} (y).`,
    hint: `Identify the vertical and horizontal asymptotes first, then find any axes intercepts.`,
    solutionSteps: [
      {
        explanation: 'Identify the vertical asymptote by setting the denominator to zero.',
        workingOut: `\\text{Vertical Asymptote}`
      },
      {
        explanation: 'Identify the horizontal asymptote.',
        workingOut: `\\text{Horizontal Asymptote}`
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-6, 6, 6, -6],
        boardOptions: { axis: true, grid: true, keepaspectratio: true },
        script: boardScript
      }
    }
  });
};

graphQ('11a', 'y = \\frac{1}{x-4}', 'x=4, y=0', 'None', '(0, -1/4)', `board.suspendUpdate();
board.create('line', [[4, -6], [4, 6]], {strokeColor: 'red', dash: 2, strokeWidth: 1});
board.create('functiongraph', [function(x){return 1/(x-4);}, -6, 3.9], {strokeColor: 'blue', strokeWidth: 2});
board.create('functiongraph', [function(x){return 1/(x-4);}, 4.1, 6], {strokeColor: 'blue', strokeWidth: 2});
board.unsuspendUpdate();`);

const code = `export const Y10_CH11B_QUESTIONS = ${JSON.stringify(questions, null, 2)};`;
fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11BQuestions.js', code);
console.log('File created successfully.');
