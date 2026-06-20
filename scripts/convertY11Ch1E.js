import { readFileSync, writeFileSync } from 'fs';

const baseFile = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch1EQuestions.js';

// We will read and parse the existing file content.
const rawText = readFileSync(baseFile, 'utf8');

// Use temp script to export the array to JSON
const tempRunner = `
import { Y11_CH1E_QUESTIONS } from '${baseFile}';
import { writeFileSync } from 'fs';
writeFileSync('/tmp/y11_ch1e_parsed.json', JSON.stringify(Y11_CH1E_QUESTIONS, null, 2), 'utf8');
`;
writeFileSync('/tmp/parse_y11ch1e.js', tempRunner, 'utf8');

import { execSync } from 'child_process';
execSync('node /tmp/parse_y11ch1e.js');

const originalQuestions = JSON.parse(readFileSync('/tmp/y11_ch1e_parsed.json', 'utf8'));

function generateOptionsForAnswer(answer) {
  // Parse x = 2, y = -3
  let m = answer.match(/x\s*=\s*(-?\d+)\s*,\s*y\s*=\s*(-?\d+)/i);
  if (m) {
    const xVal = parseInt(m[1]);
    const yVal = parseInt(m[2]);
    const candidates = [
      {x: xVal, y: yVal},
      {x: -xVal, y: yVal},
      {x: xVal, y: -yVal},
      {x: -xVal, y: -yVal},
      {x: yVal, y: xVal},
      {x: xVal + 1, y: yVal - 1},
      {x: xVal - 1, y: yVal + 1}
    ];
    const unique = [];
    const seen = new Set();
    for (let c of candidates) {
      const str = `\\\\( x = ${c.x}, \\\\; y = ${c.y} \\\\)`;
      if (!seen.has(str)) {
        seen.add(str);
        unique.push(str);
      }
    }
    return unique.slice(0, 4).sort().map(t => ({ text: t, imageUrl: "" }));
  }

  // Parse y = 5, -7 or y = 5, y = -7
  let m2 = answer.match(/y\s*=\s*(-?\d+)\s*,\s*(-?\d+)/i);
  if (m2) {
    const y1 = parseInt(m2[1]);
    const y2 = parseInt(m2[2]);
    const unique = [
      `\\\\( y = ${y1}, \\\\; ${y2} \\\\)`,
      `\\\\( y = ${-y1}, \\\\; ${y2} \\\\)`,
      `\\\\( y = ${y1}, \\\\; ${-y2} \\\\)`,
      `\\\\( y = ${-y1}, \\\\; ${-y2} \\\\)`
    ];
    const seen = new Set(unique);
    return Array.from(seen).slice(0, 4).sort().map(t => ({ text: t, imageUrl: "" }));
  }

  // Parse x = 2, y = 4 and x = 6, y = -4
  let m3 = answer.match(/x\s*=\s*(-?\d+)\s*,\s*y\s*=\s*(-?\d+)\s+and\s+x\s*=\s*(-?\d+)\s*,\s*y\s*=\s*(-?\d+)/i);
  if (m3) {
    const x1 = parseInt(m3[1]);
    const y1 = parseInt(m3[2]);
    const x2 = parseInt(m3[3]);
    const y2 = parseInt(m3[4]);
    const unique = [
      `\\\\( x = ${x1}, \\\\; y = ${y1} \\\text{ and } x = ${x2}, \\\\; y = ${y2} \\\\)`,
      `\\\\( x = ${-x1}, \\\\; y = ${y1} \\\text{ and } x = ${-x2}, \\\\; y = ${y2} \\\\)`,
      `\\\\( x = ${x1}, \\\\; y = ${-y1} \\\text{ and } x = ${x2}, \\\\; y = ${-y2} \\\\)`,
      `\\\\( x = ${y1}, \\\\; y = ${x1} \\\text{ and } x = ${y2}, \\\\; y = ${x2} \\\\)`
    ];
    return unique.sort().map(t => ({ text: t, imageUrl: "" }));
  }

  // Parse b = 3
  let m4 = answer.match(/([a-zA-Z])\s*=\s*(-?\d+)/i);
  if (m4) {
    const letter = m4[1];
    const val = parseInt(m4[2]);
    const unique = [
      `\\\\( ${letter} = ${val} \\\\)`,
      `\\\\( ${letter} = ${-val} \\\\)`,
      `\\\\( ${letter} = ${val + 2} \\\\)`,
      `\\\\( ${letter} = ${val - 2} \\\\)`
    ];
    return unique.sort().map(t => ({ text: t, imageUrl: "" }));
  }

  // Parse 9 and 6
  let m5 = answer.match(/(-?\d+)\s+and\s+(-?\d+)/i);
  if (m5) {
    const n1 = parseInt(m5[1]);
    const n2 = parseInt(m5[2]);
    const unique = [
      `\\\\( ${n1} \\\text{ and } ${n2} \\\\)`,
      `\\\\( ${-n1} \\\text{ and } ${n2} \\\\)`,
      `\\\\( ${n1 + 1} \\\text{ and } ${n2 - 1} \\\\)`,
      `\\\\( ${n1 - 1} \\\text{ and } ${n2 + 1} \\\\)`
    ];
    return unique.sort().map(t => ({ text: t, imageUrl: "" }));
  }

  // Fallback distractor generation
  const cleanAns = answer.replace(/\\\\\(|\\\\\)|\\\(|\\\)/g, '').trim();
  const replaced1 = cleanAns.replace(/-?\d+/g, (m) => String(-parseInt(m)));
  const replaced2 = cleanAns.replace(/-?\d+/g, (m) => String(parseInt(m) + 1));
  const replaced3 = cleanAns.replace(/-?\d+/g, (m) => String(parseInt(m) - 2));

  const unique = [
    `\\\\( ${cleanAns} \\\\)`,
    `\\\\( ${replaced1} \\\\)`,
    `\\\\( ${replaced2} \\\\)`,
    `\\\\( ${replaced3} \\\\)`
  ];
  return Array.from(new Set(unique)).slice(0, 4).sort().map(t => ({ text: t, imageUrl: "" }));
}

const processedQuestions = originalQuestions.map(q => {
  const isSA = q.type === 'short_answer';
  if (!isSA) return q;

  const opts = generateOptionsForAnswer(q.answer);
  // Find correct option string
  const clean = (s) => String(s).replace(/\\\\\(|\\\\\)/g, '').replace(/\\\(|\\\)/g, '').trim();
  const targetClean = clean(q.answer);
  const correctOptObj = opts.find(o => clean(o.text) === targetClean) || opts[0];
  const correctOptText = correctOptObj.text;

  return {
    ...q,
    type: "multiple_choice",
    options: opts,
    a: correctOptText // Curriculum mapping will automatically convert this to correctIndex during seeder mapping
  };
});

const finalString = 'export const Y11_CH1E_QUESTIONS = [\n' + processedQuestions.map(q => {
  return `  {\n    "id": "${q.id}",\n    "type": "${q.type}",\n    "difficulty": "${q.difficulty}",\n    "timeLimit": ${q.timeLimit},\n    "question": ${JSON.stringify(q.question)},\n    "options": [\n${q.options.map(o => `      {\n        "text": "${o.text}",\n        "imageUrl": ""\n      }`).join(',\n')}\n    ],\n    "a": "${q.a || q.answer}",\n    "blanks": [],\n    "hint": ${JSON.stringify(q.hint || '')},\n    "solutionSteps": [\n${(q.solutionSteps || []).map(s => `      {\n        "explanation": ${JSON.stringify(s.explanation)},\n        "workingOut": "${s.workingOut}",\n        "graphData": null\n      }`).join(',\n')}\n    ],\n    "graphData": null,\n    "requiresManualGrading": false\n  }`;
}).join(',\n') + '\n];\n';

writeFileSync(baseFile, finalString, 'utf8');
console.log("Successfully converted Year 11 Chapter 1E questions to multiple choice!");
