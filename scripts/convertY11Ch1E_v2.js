import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const baseFile = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch1EQuestions.js';

// Load clean original questions
const tempRunner = `
import { Y11_CH1E_QUESTIONS } from '${baseFile}';
import { writeFileSync } from 'fs';
writeFileSync('/tmp/y11_ch1e_parsed_clean.json', JSON.stringify(Y11_CH1E_QUESTIONS, null, 2), 'utf8');
`;
writeFileSync('/tmp/parse_y11ch1e_clean.js', tempRunner, 'utf8');
execSync('node /tmp/parse_y11ch1e_clean.js');

const originalQuestions = JSON.parse(readFileSync('/tmp/y11_ch1e_parsed_clean.json', 'utf8'));

// Helper to escape LaTeX properly for JSON/JS output
function cleanAndDoubleEscape(latex) {
  if (!latex) return "";
  return latex
    .replace(/\\\\\(/g, '(')
    .replace(/\\\\\)/g, ')')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
    .replace(/\(([^)]+)\)/g, '\\\\( $1 \\\\)')
    .replace(/\\text\{/g, '\\\\text{')
    .replace(/\\quad/g, '\\\\quad')
    .replace(/\\Rightarrow/g, '\\\\Rightarrow')
    .replace(/\\implies/g, '\\\\implies')
    .replace(/\\times/g, '\\\\times')
    .replace(/\\frac/g, '\\\\frac')
    .replace(/\\sqrt/g, '\\\\sqrt');
}

function generateOptionsForAnswer(answer) {
  let unique = [];
  
  // Case 1: x = A, y = B
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
    const seen = new Set();
    for (let c of candidates) {
      const str = `\\\\( x = ${c.x}, \\\\; y = ${c.y} \\\\)`;
      if (!seen.has(str)) {
        seen.add(str);
        unique.push(str);
      }
    }
  }

  // Case 2: y = A, -B
  if (unique.length === 0) {
    let m2 = answer.match(/y\s*=\s*(-?\d+)\s*,\s*(-?\d+)/i);
    if (m2) {
      const y1 = parseInt(m2[1]);
      const y2 = parseInt(m2[2]);
      unique = [
        `\\\\( y = ${y1}, \\\\; ${y2} \\\\)`,
        `\\\\( y = ${-y1}, \\\\; ${y2} \\\\)`,
        `\\\\( y = ${y1}, \\\\; ${-y2} \\\\)`,
        `\\\\( y = ${-y1}, \\\\; ${-y2} \\\\)`
      ];
    }
  }

  // Case 3: x = A, y = B and x = C, y = D
  if (unique.length === 0) {
    let m3 = answer.match(/x\s*=\s*(-?\d+)\s*,\s*y\s*=\s*(-?\d+)\s+and\s+x\s*=\s*(-?\d+)\s*,\s*y\s*=\s*(-?\d+)/i);
    if (m3) {
      const x1 = parseInt(m3[1]);
      const y1 = parseInt(m3[2]);
      const x2 = parseInt(m3[3]);
      const y2 = parseInt(m3[4]);
      unique = [
        `\\\\( x = ${x1}, \\\\; y = ${y1} \\\\text{ and } x = ${x2}, \\\\; y = ${y2} \\\\)`,
        `\\\\( x = ${-x1}, \\\\; y = ${y1} \\\\text{ and } x = ${-x2}, \\\\; y = ${y2} \\\\)`,
        `\\\\( x = ${x1}, \\\\; y = ${-y1} \\\\text{ and } x = ${x2}, \\\\; y = ${-y2} \\\\)`,
        `\\\\( x = ${y1}, \\\\; y = ${x1} \\\\text{ and } x = ${y2}, \\\\; y = ${x2} \\\\)`
      ];
    }
  }

  // Case 4: letter = value
  if (unique.length === 0) {
    let m4 = answer.match(/([a-zA-Z])\s*=\s*(-?\d+)/i);
    if (m4) {
      const letter = m4[1];
      const val = parseInt(m4[2]);
      unique = [
        `\\\\( ${letter} = ${val} \\\\)`,
        `\\\\( ${letter} = ${-val} \\\\)`,
        `\\\\( ${letter} = ${val + 2} \\\\)`,
        `\\\\( ${letter} = ${val - 2} \\\\)`
      ];
    }
  }

  // Case 5: A and B
  if (unique.length === 0) {
    let m5 = answer.match(/(-?\d+)\s+and\s+(-?\d+)/i);
    if (m5) {
      const n1 = parseInt(m5[1]);
      const n2 = parseInt(m5[2]);
      unique = [
        `\\\\( ${n1} \\\\text{ and } ${n2} \\\\)`,
        `\\\\( ${-n1} \\\\text{ and } ${n2} \\\\)`,
        `\\\\( ${n1 + 1} \\\\text{ and } ${n2 - 1} \\\\)`,
        `\\\\( ${n1 - 1} \\\\text{ and } ${n2 + 1} \\\\)`
      ];
    }
  }

  // Fallback
  if (unique.length < 4) {
    const cleanAns = answer.replace(/\\\\\(|\\\\\)|\\\(|\\\)/g, '').trim();
    const replaced1 = cleanAns.replace(/-?\d+/g, (m) => String(-parseInt(m)));
    const replaced2 = cleanAns.replace(/-?\d+/g, (m) => String(parseInt(m) + 1));
    const replaced3 = cleanAns.replace(/-?\d+/g, (m) => String(parseInt(m) - 2));

    unique = [
      `\\\\( ${cleanAns} \\\\)`,
      `\\\\( ${replaced1} \\\\)`,
      `\\\\( ${replaced2} \\\\)`,
      `\\\\( ${replaced3} \\\\)`
    ];
  }

  return Array.from(new Set(unique)).slice(0, 4).sort();
}

const processedBaseQuestions = originalQuestions.map(q => {
  // If it's a show/prove/sketch question, keep it as teacher review
  const isReview = q.question.toLowerCase().includes('show') || 
                   q.question.toLowerCase().includes('prove') || 
                   q.question.toLowerCase().includes('sketch');

  if (isReview) {
    return {
      ...q,
      type: "teacher_review"
    };
  }

  const opts = generateOptionsForAnswer(q.answer);
  const correctOpt = opts.find(o => o.includes(q.answer.replace(/\\\\\(|\\\\\)|\\\(|\\\)/g, '').trim())) || opts[0];

  const steps = (q.solutionSteps || []).map(s => ({
    explanation: s.explanation,
    workingOut: cleanAndDoubleEscape(s.workingOut)
  }));

  return {
    id: q.id,
    type: "multiple_choice",
    difficulty: q.difficulty || "medium",
    timeLimit: q.timeLimit || 120,
    question: cleanAndDoubleEscape(q.question),
    a: correctOpt,
    options: opts,
    solutionSteps: steps,
    hint: q.hint || ""
  };
});

// Generate 100 unique high-difficulty simultaneous equations questions (y11a-1e-h1 to y11a-1e-h100)
const generatedHardQuestions = [];
const names = ["Aria", "Leo", "Maya", "Silas", "Elena", "Felix", "Clara", "Hugo", "Iris", "Jude", "Sofia", "Ezra", "Nova", "Otto", "Ruby", "Milo", "Luna", "Jasper", "Zara", "Otis"];
const contexts = [
  { t: "Supply Chain Distribution", q: "A logistics depot routes transport trucks and smaller delivery vans. Under superviser {name}, {v1} trucks and {v2} vans carry a total of {c1} metric tons. Another configuration of {v3} trucks and {v4} vans carries {c2} metric tons. Solve for the capacity of one truck (x) and one van (y).", x: 12, y: 5 },
  { t: "Photovoltaic Inverter Yield", q: "A solar developer test-runs monocrystalline grids and polycrystalline arrays. {v1} monocrystalline lines and {v2} polycrystalline arrays output {c1} kilowatts. Simultaneously, {v3} monocrystalline lines and {v4} polycrystalline arrays output {c2} kilowatts. Calculate the yield of one monocrystalline line (x) and one polycrystalline array (y).", x: 8, y: 6 },
  { t: "DeFi Protocol Gas Vaults", q: "A smart contract manages standard liquid pools and high-frequency vaults. {v1} standard pools and {v2} vaults burn a total of {c1} gas units. Under {name}'s audit, {v3} standard pools and {v4} vaults burn {c2} gas units. Determine the gas burned by one standard pool (x) and one vault (y).", x: 15, y: 7 },
  { t: "Biomedical Sample Assays", q: "A testing laboratory processes culture samples and diagnostic slides. {v1} culture samples and {v2} slides require a total of {c1} minutes of centrifugation. A batch of {v3} culture samples and {v4} slides requires {c2} minutes. Calculate the processing time for one culture sample (x) and one slide (y).", x: 10, y: 4 }
];

for (let i = 0; i < 100; i++) {
  const context = contexts[i % contexts.length];
  const name = names[i % names.length];
  
  // Vary x and y slightly to keep answers unique
  const x = context.x + (i * 3) % 7;
  const y = context.y + (i * 2) % 5;
  
  // Vary coefficients to ensure clean simultaneous equations
  const v1 = 2 + (i % 3);
  const v2 = 3 + (i % 4);
  const v3 = 3 + (i % 3);
  const v4 = 2 + (i % 4);
  
  const c1 = v1 * x + v2 * y;
  const c2 = v3 * x + v4 * y;
  
  const qText = context.q
    .replace("{name}", name)
    .replace("{v1}", v1)
    .replace("{v2}", v2)
    .replace("{v3}", v3)
    .replace("{v4}", v4)
    .replace("{c1}", c1)
    .replace("{c2}", c2);

  const answerStr = `x = ${x}, y = ${y}`;
  const opts = generateOptionsForAnswer(answerStr);
  const correctOpt = opts.find(o => o.includes(`x = ${x}`) && o.includes(`y = ${y}`)) || opts[0];

  generatedHardQuestions.push({
    id: `y11a-1e-h${i + 1}`,
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 150,
    question: qText,
    a: correctOpt,
    options: opts,
    solutionSteps: [
      {
        explanation: `Set up the simultaneous equations representing the system.`,
        workingOut: `\\\\( ${v1}x + ${v2}y = ${c1} \\\\) \\\\text{ and } \\\\( ${v3}x + ${v4}y = ${c2} \\\\)`,
        graphData: null
      },
      {
        explanation: `Multiply the equations to eliminate one variable.`,
        workingOut: `\\\\( ${v1 * v3}x + ${v2 * v3}y = ${c1 * v3} \\\\) \\\\text{ and } \\\\( ${v3 * v1}x + ${v4 * v1}y = ${c2 * v1} \\\\)`,
        graphData: null
      },
      {
        explanation: `Subtract and solve for y.`,
        workingOut: `\\\\( (${v2 * v3 - v4 * v1})y = ${c1 * v3 - c2 * v1} \\\\implies y = ${y} \\\\)`,
        graphData: null
      },
      {
        explanation: `Substitute y back to solve for x.`,
        workingOut: `\\\\( ${v1}x + ${v2}(${y}) = ${c1} \\\\implies x = ${x} \\\\)`,
        graphData: null
      }
    ],
    hint: "Represent the sentences as a system of linear equations, multiply to align coefficients, and subtract."
  });
}

const allQuestions = [...processedBaseQuestions, ...generatedHardQuestions];

const finalString = 'export const Y11_CH1E_QUESTIONS = [\n' + allQuestions.map(q => {
  return `  {\n    "id": "${q.id}",\n    "type": "${q.type}",\n    "difficulty": "${q.difficulty}",\n    "timeLimit": ${q.timeLimit},\n    "question": ${JSON.stringify(q.question)},\n    "options": [\n${q.options.map(o => `      "${o}"`).join(',\n')}\n    ],\n    "a": "${q.a}",\n    "blanks": [],\n    "hint": ${JSON.stringify(q.hint || '')},\n    "solutionSteps": [\n${(q.solutionSteps || []).map(s => `      {\n        "explanation": ${JSON.stringify(s.explanation)},\n        "workingOut": "${s.workingOut}",\n        "graphData": null\n      }`).join(',\n')}\n    ],\n    "graphData": null,\n    "requiresManualGrading": ${q.type === 'teacher_review'}\n  }`;
}).join(',\n') + '\n];\n';

writeFileSync(baseFile, finalString, 'utf8');
console.log("Successfully converted and added 100 hard questions to Year 11 Chapter 1E!");
