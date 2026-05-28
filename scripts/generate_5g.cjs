const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch5GQuestions.js');

const questions = [];

// Helper to push a question
function addQuestion(id, type, question, a, opts, solution, hint, steps, graphData = null) {
  questions.push({
    id,
    type,
    difficulty: "easy",
    timeLimit: 30,
    question,
    a,
    opts,
    solution,
    t: "Inequalities",
    hint,
    solutionSteps: steps,
    graphData
  });
}

// Q1: MCQ for > or <
const q1List = [
  { sub: 'a', val1: '8', val2: '3', ans: '>', opts: ['<', '>'], hint: 'Determine which number is greater.' },
  { sub: 'b', val1: '2', val2: '-5', ans: '>', opts: ['<', '>'], hint: 'Any positive number is greater than a negative number.' },
  { sub: 'c', val1: '-6', val2: '-3', ans: '<', opts: ['<', '>'], hint: 'A number further to the left on the number line is smaller.' },
  { sub: 'd', val1: '-72', val2: '-600', ans: '>', opts: ['<', '>'], hint: '-72 is closer to zero than -600.' },
  { sub: 'e', val1: '-8', val2: '0', ans: '<', opts: ['<', '>'], hint: 'All negative numbers are less than zero.' },
  { sub: 'f', val1: '-15', val2: '-38', ans: '>', opts: ['<', '>'], hint: '-15 is greater than -38.' },
  { sub: 'g', val1: '24', val2: '35', ans: '<', opts: ['<', '>'], hint: 'Compare the positive values.' },
  { sub: 'h', val1: '-3', val2: '6', ans: '<', opts: ['<', '>'], hint: 'Negative numbers are always less than positive numbers.' },
  { sub: 'i', val1: '85', val2: '-90', ans: '>', opts: ['<', '>'], hint: 'A positive number is greater than a negative number.' }
];

q1List.forEach(q => {
  addQuestion(
    `y9-5g-q1${q.sub}`,
    "multiple_choice",
    `Choose the correct symbol to make the statement true:\n\\(${q.val1} \\dots ${q.val2}\\)`,
    q.ans,
    q.opts,
    `Since \\(${q.val1}\\) is ${q.ans === '>' ? 'greater' : 'less'} than \\(${q.val2}\\), the correct statement is \\(${q.val1} ${q.ans} ${q.val2}\\).`,
    q.hint,
    [{ explanation: "Compare the locations of the two numbers on a number line.", workingOut: `${q.val1} ${q.ans} ${q.val2}` }]
  );
});

// Q2: MCQ for <= or >=
const q2List = [
  { sub: 'a', val1: '-8', val2: '-3', ans: '\\le', opts: ['\\le', '\\ge'], hint: 'Compare the negative numbers.' },
  { sub: 'b', val1: '6', val2: '-5', ans: '\\ge', opts: ['\\le', '\\ge'], hint: 'Positive is greater than or equal to negative.' },
  { sub: 'c', val1: '-4', val2: '-4', ans: '\\le', opts: ['\\le', '\\ge'], hint: 'A number is equal to itself.' },
  { sub: 'd', val1: '-15', val2: '-40', ans: '\\ge', opts: ['\\le', '\\ge'], hint: '-15 is further right than -40.' },
  { sub: 'e', val1: '1', val2: '1', ans: '\\le', opts: ['\\le', '\\ge'], hint: 'Equal values satisfy both inequalities.' },
  { sub: 'f', val1: '-18', val2: '-35', ans: '\\ge', opts: ['\\le', '\\ge'], hint: '-18 is greater than -35.' },
  { sub: 'g', val1: '14', val2: '28', ans: '\\le', opts: ['\\le', '\\ge'], hint: 'Compare the values.' },
  { sub: 'h', val1: '8', val2: '8', ans: '\\ge', opts: ['\\le', '\\ge'], hint: 'A number is equal to itself.' },
  { sub: 'i', val1: '95', val2: '85', ans: '\\ge', opts: ['\\le', '\\ge'], hint: '95 is greater than 85.' }
];

q2List.forEach(q => {
  addQuestion(
    `y9-5g-q2${q.sub}`,
    "multiple_choice",
    `Choose the correct symbol to make the statement true:\n\\(${q.val1} \\dots ${q.val2}\\)`,
    q.ans,
    q.opts,
    `Since \\(${q.val1}\\) is ${q.ans === '\\ge' ? 'greater than or equal to' : 'less than or equal to'} \\(${q.val2}\\), the correct statement is \\(${q.val1} ${q.ans} ${q.val2}\\).`,
    q.hint,
    [{ explanation: "Compare the values. If they are equal, either symbol holds but choose the matching option.", workingOut: `${q.val1} ${q.ans} ${q.val2}` }]
  );
});

// Q3: Graphing (teacher_review, 30s)
const q3List = [
  { sub: 'a', set: '{x: x > 6}', desc: "An open circle at 6 with an arrow pointing to the right.", x: 6, open: true, dir: 'right', min: 0, max: 12 },
  { sub: 'b', set: '{x: x \\le 1}', desc: "A closed circle at 1 with an arrow pointing to the left.", x: 1, open: false, dir: 'left', min: -5, max: 7 },
  { sub: 'c', set: '{x: x < -3}', desc: "An open circle at -3 with an arrow pointing to the left.", x: -3, open: true, dir: 'left', min: -9, max: 3 },
  { sub: 'd', set: '{x: x > -2}', desc: "An open circle at -2 with an arrow pointing to the right.", x: -2, open: true, dir: 'right', min: -8, max: 4 },
  { sub: 'e', set: '{x: x \\le -1}', desc: "A closed circle at -1 with an arrow pointing to the left.", x: -1, open: false, dir: 'left', min: -7, max: 5 },
  { sub: 'f', set: '{x: x \\ge -3}', desc: "A closed circle at -3 with an arrow pointing to the right.", x: -3, open: false, dir: 'right', min: -9, max: 3 },
  { sub: 'g', set: '{x: x < 1.5}', desc: "An open circle at 1.5 with an arrow pointing to the left.", x: 1.5, open: true, dir: 'left', min: -4, max: 8 },
  { sub: 'h', set: '{x: x \\ge -2.5}', desc: "A closed circle at -2.5 with an arrow pointing to the right.", x: -2.5, open: false, dir: 'right', min: -8, max: 4 },
  { sub: 'i', set: '{x: x \\le -0.5}', desc: "A closed circle at -0.5 with an arrow pointing to the left.", x: -0.5, open: false, dir: 'left', min: -6, max: 6 }
];

q3List.forEach(q => {
  const fill = q.open ? 'white' : 'red';
  const arrowEnd = q.dir === 'right' ? q.max - 1 : q.min + 1;
  const script = `board.suspendUpdate();\n` +
    `var axis = board.create('axis', [[${q.min},0], [${q.max},0]], {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}});\n` +
    `board.create('point', [${q.x}, 0], {size: 3, color: 'red', fillColor: '${fill}', name: '', fixed: true, withLabel: false});\n` +
    `board.create('arrow', [[${q.x}, 0], [${arrowEnd}, 0]], {strokeColor: 'blue', strokeWidth: 3});\n` +
    `board.unsuspendUpdate();`;

  questions.push({
    id: `y9-5g-q3${q.sub}`,
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 30,
    question: `Sketch the set \\(${q.set}\\) on a number line.`,
    a: q.desc,
    solution: `To represent \\(${q.set}\\):\n` +
      `- Draw a number line.\n` +
      `- Place ${q.open ? 'an open circle' : 'a solid (closed) circle'} at \\(${q.x}\\).\n` +
      `- Draw an arrow pointing to the ${q.dir} to indicate all values ${q.dir === 'right' ? 'greater than' : 'less than'} \\(${q.x}\\).`,
    t: "Inequalities",
    hint: `${q.open ? 'Open circle' : 'Closed circle'} at ${q.x}, arrow pointing ${q.dir}.`,
    solutionSteps: [
      { explanation: "Identify whether the boundary point is included.", workingOut: q.open ? "\\text{Strict inequality } \\implies \\text{Open circle}" : "\\text{Inclusive inequality } \\implies \\text{Closed circle}" },
      { explanation: "Determine direction of the arrow.", workingOut: q.dir === 'right' ? "x > \\text{value} \\implies \\text{Arrow points right}" : "x \\le \\text{value} \\implies \\text{Arrow points left}" }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 80,
        boundingbox: [q.min - 1, 1, q.max + 1, -1],
        script: script
      }
    }
  });
});

// Q4: Describe interval from graph (short_answer, 30s)
const q4List = [
  { sub: 'a', x: -3, open: true, dir: 'right', ans: '{x:x>-3}', min: -6, max: 2, label: 'x > -3' },
  { sub: 'b', x: 3, open: false, dir: 'left', ans: '{x:x<=3}', min: -1, max: 7, label: 'x \\le 3' },
  { sub: 'c', x: -1, open: true, dir: 'left', ans: '{x:x<-1}', min: -5, max: 3, label: 'x < -1' },
  { sub: 'd', x: 2, open: false, dir: 'right', ans: '{x:x>=2}', min: -2, max: 6, label: 'x \\ge 2' },
  { sub: 'e', x: -1.5, open: false, dir: 'left', ans: '{x:x<=-1.5}', min: -5, max: 3, label: 'x \\le -1.5' },
  { sub: 'f', x: -0.5, open: false, dir: 'right', ans: '{x:x>=-0.5}', min: -4, max: 4, label: 'x \\ge -0.5' },
  { sub: 'g', x: 2.5, open: true, dir: 'left', ans: '{x:x<2.5}', min: -1, max: 7, label: 'x < 2.5' },
  { sub: 'h', x: 0.5, open: true, dir: 'right', ans: '{x:x>0.5}', min: -3, max: 5, label: 'x > 0.5' },
  { sub: 'i', x: -1.5, open: true, dir: 'right', ans: '{x:x>-1.5}', min: -5, max: 3, label: 'x > -1.5' }
];

q4List.forEach(q => {
  const fill = q.open ? 'white' : 'blue';
  const arrowEnd = q.dir === 'right' ? q.max - 0.5 : q.min + 0.5;
  const script = `board.suspendUpdate();\n` +
    `var axis = board.create('axis', [[${q.min},0], [${q.max},0]], {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}});\n` +
    `board.create('point', [${q.x}, 0], {size: 3, color: 'blue', fillColor: '${fill}', name: '', fixed: true, withLabel: false});\n` +
    `board.create('arrow', [[${q.x}, 0], [${arrowEnd}, 0]], {strokeColor: 'blue', strokeWidth: 3});\n` +
    `board.unsuspendUpdate();`;

  addQuestion(
    `y9-5g-q4${q.sub}`,
    "short_answer",
    `Use set notation to describe the interval graphed on the number line below. (Write your answer in the format \\({x: x > c}\\), \\({x: x \\le c}\\), etc. without spaces)`,
    q.ans,
    null,
    `The graph shows ${q.open ? 'an open' : 'a closed'} circle at \\(${q.x}\\) with an arrow pointing to the ${q.dir}.\n` +
      `This corresponds to the inequality \\(${q.label}\\), which in set notation is written as \\(${q.ans}\\).`,
    `Identify the boundary point and the direction of the arrow.`,
    [
      { explanation: "Identify the boundary value and whether it is included.", workingOut: `\\text{Boundary} = ${q.x}, \\text{Included} = ${!q.open}` },
      { explanation: "Construct the inequality based on arrow direction.", workingOut: `${q.label}` }
    ],
    {
      jsxGraph: {
        width: 350,
        height: 80,
        boundingbox: [q.min - 1, 1, q.max + 1, -1],
        script: script
      }
    }
  );
});

// Write to file
const fileContent = `export const Y9_CH5G_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch5GQuestions.js!");
