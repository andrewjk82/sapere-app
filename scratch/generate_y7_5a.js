const fs = require('fs');

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function simplify(n, d) {
  const g = gcd(n, d);
  return [n / g, d / g];
}

function formatFraction(n, d) {
  if (d === 1) return `${n}`;
  if (n === 0) return `0`;
  return `\\frac{${n}}{${d}}`;
}

function generateOptions(correctN, correctD) {
  const options = [
    formatFraction(correctN, correctD),
    formatFraction(correctN + 1, correctD),
    formatFraction(correctN, correctD + 1 === 0 ? 2 : correctD + 1),
    formatFraction(correctD, correctN === 0 ? 1 : correctN)
  ];
  
  // Ensure unique options
  const uniqueOptions = [...new Set(options)];
  while (uniqueOptions.length < 4) {
    const randN = correctN + Math.floor(Math.random() * 5) - 2;
    const randD = correctD + Math.floor(Math.random() * 5) + 1;
    const opt = formatFraction(Math.abs(randN), Math.abs(randD) || 1);
    if (!uniqueOptions.includes(opt)) {
      uniqueOptions.push(opt);
    }
  }
  
  // Shuffle
  for (let i = uniqueOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueOptions[i], uniqueOptions[j]] = [uniqueOptions[j], uniqueOptions[i]];
  }
  
  return {
    options: uniqueOptions,
    answer: uniqueOptions.indexOf(formatFraction(correctN, correctD))
  };
}

const questions = [];

// Helper to add a 2-fraction multiplication question
function addQ2(n1, d1, n2, d2, type, diff) {
  const [ansN, ansD] = simplify(n1 * n2, d1 * d2);
  const { options, answer } = generateOptions(ansN, ansD);
  
  let qText = '';
  if (type === 'eval') qText = `Evaluate the product, simplifying where possible: $${formatFraction(n1, d1)} \\times ${formatFraction(n2, d2)}$`;
  else if (type === 'find') qText = `Find: $${formatFraction(n1, d1)} \\times ${formatFraction(n2, d2)}$`;
  else if (type === 'of') qText = `Find: $${formatFraction(n1, d1)}$ of $${formatFraction(n2, d2)}$`;
  
  let solution = `<div style="text-align: left;">`;
  if (type === 'of') {
    solution += `<p><strong>Step 1: Convert "of" to multiplication</strong><br>The word "of" means multiply: $${formatFraction(n1, d1)} \\times ${formatFraction(n2, d2)}$.</p>`;
  }
  
  solution += `<p><strong>Step ${type === 'of' ? 2 : 1}: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{${n1} \\times ${n2}}{${d1} \\times ${d2}} = \\frac{${n1 * n2}}{${d1 * d2}}$</p>`;
  
  if (ansN !== n1 * n2 || ansD !== d1 * d2) {
    const g = gcd(n1 * n2, d1 * d2);
    solution += `<p><strong>Step ${type === 'of' ? 3 : 2}: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($${g}$):<br>$\\frac{${n1 * n2} \\div ${g}}{${d1 * d2} \\div ${g}} = ${formatFraction(ansN, ansD)}$</p>`;
  } else {
    solution += `<p><strong>Step ${type === 'of' ? 3 : 2}: Check for simplification</strong><br>The fraction $\\frac{${ansN}}{${ansD}}$ is already in its simplest form.</p>`;
  }
  
  solution += `</div>`;
  
  questions.push({
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: diff,
    isManual: true,
    isActive: true,
    question: qText,
    options,
    answer,
    solution
  });
}

// Helper to add a 3-fraction multiplication question
function addQ3(n1, d1, n2, d2, n3, d3, diff) {
  const [ansN, ansD] = simplify(n1 * n2 * n3, d1 * d2 * d3);
  const { options, answer } = generateOptions(ansN, ansD);
  
  const qText = `Complete the multiplication, simplifying where possible: $${formatFraction(n1, d1)} \\times ${formatFraction(n2, d2)} \\times ${formatFraction(n3, d3)}$`;
  
  let solution = `<div style="text-align: left;">`;
  solution += `<p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{${n1} \\times ${n2} \\times ${n3}}{${d1} \\times ${d2} \\times ${d3}} = \\frac{${n1 * n2 * n3}}{${d1 * d2 * d3}}$</p>`;
  
  if (ansN !== n1 * n2 * n3 || ansD !== d1 * d2 * d3) {
    const g = gcd(n1 * n2 * n3, d1 * d2 * d3);
    solution += `<p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($${g}$):<br>$\\frac{${n1 * n2 * n3} \\div ${g}}{${d1 * d2 * d3} \\div ${g}} = ${formatFraction(ansN, ansD)}$</p>`;
  } else {
    solution += `<p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{${ansN}}{${ansD}}$ is already in its simplest form.</p>`;
  }
  
  solution += `</div>`;
  
  questions.push({
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: diff,
    isManual: true,
    isActive: true,
    question: qText,
    options,
    answer,
    solution
  });
}

// --- Ex 1: Evaluate product (Basic) ---
addQ2(1, 3, 2, 5, 'eval', 'easy');
addQ2(2, 5, 3, 7, 'eval', 'easy');
addQ2(1, 3, 1, 5, 'eval', 'easy');
addQ2(1, 4, 3, 5, 'eval', 'easy');
addQ2(4, 3, 2, 5, 'eval', 'medium');
addQ2(4, 9, 2, 7, 'eval', 'medium');
addQ2(5, 3, 5, 4, 'eval', 'medium');
addQ2(5, 2, 3, 8, 'eval', 'medium');
addQ2(5, 4, 3, 5, 'eval', 'medium');

// --- Ex 2: Integer * fraction ---
addQ2(3, 1, 2, 5, 'find', 'easy');
addQ2(5, 1, 2, 9, 'find', 'easy');
addQ2(3, 10, 7, 1, 'find', 'easy');
addQ2(7, 1, 3, 4, 'find', 'medium');
addQ2(2, 5, 6, 1, 'find', 'medium');
addQ2(5, 12, 5, 1, 'find', 'medium');

// --- Ex 3: "of" operator ---
addQ2(1, 4, 1, 3, 'of', 'easy');
addQ2(1, 5, 3, 4, 'of', 'easy');
addQ2(3, 7, 5, 6, 'of', 'medium');
addQ2(3, 4, 4, 3, 'of', 'medium');
addQ2(7, 5, 2, 7, 'of', 'medium');
addQ2(3, 8, 5, 2, 'of', 'medium');
addQ2(3, 5, 7, 1, 'of', 'medium');
addQ2(2, 7, 11, 1, 'of', 'medium');

// --- Ex 4: Cross-simplification ---
addQ2(3, 2, 8, 9, 'find', 'hard');
addQ2(4, 15, 5, 7, 'find', 'hard');
addQ2(9, 16, 8, 15, 'find', 'hard');
addQ2(6, 25, 5, 18, 'find', 'hard');
addQ2(13, 14, 7, 26, 'find', 'hard');
addQ2(15, 8, 32, 45, 'find', 'hard');
addQ2(35, 18, 27, 49, 'find', 'hard');
addQ2(24, 45, 35, 56, 'find', 'hard');

// --- Ex 5: Three fractions ---
addQ3(1, 2, 1, 4, 1, 5, 'hard');
addQ3(2, 3, 4, 5, 5, 8, 'hard');
addQ3(1, 3, 2, 5, 5, 8, 'hard');
addQ3(2, 5, 3, 4, 5, 9, 'hard');
addQ3(5, 14, 7, 10, 8, 9, 'hard');
addQ3(3, 4, 6, 7, 14, 27, 'hard');
addQ3(4, 9, 7, 12, 9, 14, 'hard');
addQ3(18, 5, 10, 21, 7, 12, 'hard');
addQ3(7, 12, 8, 21, 9, 14, 'hard');
addQ3(4, 15, 7, 8, 10, 21, 'hard');
addQ3(15, 16, 24, 35, 7, 9, 'hard');
addQ3(9, 14, 28, 33, 11, 18, 'hard');

// Construct the target JS file text manually to avoid nesting quote errors
let out = '';
out += "import { db } from '../firebase/config.js';\n";
out += "import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';\n\n";
out += "export const allQuestions = [\n";

questions.forEach((q, idx) => {
  out += "  {\n";
  out += `    chapterId: '${q.chapterId}',\n`;
  out += `    topicId: '${q.topicId}',\n`;
  out += `    topicCode: '${q.topicCode}',\n`;
  out += `    topicTitle: '${q.topicTitle}',\n`;
  out += `    year: '${q.year}',\n`;
  out += `    type: '${q.type}',\n`;
  out += `    difficulty: '${q.difficulty}',\n`;
  out += `    isManual: ${q.isManual},\n`;
  out += `    isActive: ${q.isActive},\n`;
  
  // Double escape backslashes in LaTex strings
  const questionEscaped = q.question.replace(/\\/g, '\\\\');
  const solutionEscaped = q.solution.replace(/\\/g, '\\\\');
  
  out += `    question: \`${questionEscaped}\`,\n`;
  
  const optsStr = q.options.map(o => `\`${o.replace(/\\/g, '\\\\')}\``).join(', ');
  out += `    options: [${optsStr}],\n`;
  out += `    answer: ${q.answer},\n`;
  out += `    solution: \`${solutionEscaped}\`,\n`;
  out += `    createdAt: new Date().toISOString()\n`;
  out += "  }" + (idx === questions.length - 1 ? "" : ",") + "\n";
});

out += "];\n\n";

out += `export const importYear7Ch5A = async (forceReset = false) => {
  console.log('[Ch5A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch5A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-5a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log(\`Deleted \${existingSnap.size} existing questions.\`);
    }

    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-5a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log(\`[Ch5A Year 7 Import] SUCCESS! \${importedCount} new questions imported.\`);
  } catch (error) {
    console.error('[Ch5A Year 7 Import] ERROR:', error);
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch5A.js', out);
console.log('Successfully generated src/scripts/importYear7Ch5A.js with ' + questions.length + ' questions.');
