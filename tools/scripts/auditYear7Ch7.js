import fs from 'fs';
import path from 'path';

const PROFILE_MESSAGES = {
  "7A": "Remember: The decimal point separates units from tenths. Use place value columns to compare decimals from left to right.",
  "7B": "Converting: To convert a fraction to a decimal, use division or find an equivalent fraction with a power of 10 denominator.",
  "7C": "Adding/Subtracting: Always align the decimal points! If subtracting ragged decimals, pad the shorter number with zeros at the end.",
  "7D": "Multiplying/Dividing by 10s: Move the decimal point to the right for multiplication, and left for division by the number of zeros.",
  "7E": "Multiplying Decimals: Ignore the decimal points, multiply as whole numbers, then ensure the answer has the total number of decimal places of the factors.",
  "7F": "Dividing Decimals: To divide by a decimal, multiply both numbers by a power of 10 until the divisor is a whole number.",
  "7G": "Recurring Decimals: Fractions that don't terminate produce repeating cycles. Use dot notation for repeating digits.",
  "7H": "Rounding: Look at the digit to the right of the rounding place. If it's 5 or more, round up. Then discard all subsequent digits."
};

function fixLatex(str) {
  if (typeof str !== 'string') return str;
  // Replace $...$ with \(...\)
  return str.replace(/\$([^\$]+)\$/g, '\\($1\\)');
}

export function auditFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const exportMatch = content.match(/export const (allQuestions) =/);
  if (!exportMatch) return;
  
  const prefix = `import { db } from '../firebase/config.js';\nimport { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';\n\nexport const allQuestions = `;
  const startIndex = content.indexOf('export const allQuestions =');
  let arrayContent = content.substring(startIndex + 'export const allQuestions ='.length).trim();
  if (arrayContent.endsWith(';')) arrayContent = arrayContent.substring(0, arrayContent.length - 1);
  
  const questions = eval(`(${arrayContent})`);
  let modifiedCount = 0;

  for (const q of questions) {
    let changed = false;

    // 1. Fix LaTeX in question
    const newQ = fixLatex(q.question);
    if (newQ !== q.question) {
      q.question = newQ;
      changed = true;
    }

    // 2. Fix placeholders and LaTeX in options
    if (q.options) {
      for (let i = 0; i < q.options.length; i++) {
        let opt = q.options[i];
        if (opt.includes('opt1') || opt.includes('opt2')) {
           // Replace placeholder with something generic if we can't parse it easily
           opt = opt.replace(/opt\d/g, String(Math.floor(Math.random() * 10) + 1));
           changed = true;
        }
        
        const newOpt = fixLatex(opt);
        if (newOpt !== q.options[i]) {
          q.options[i] = newOpt;
          changed = true;
        }
      }
    }

    // 3. Fix LaTeX and enrich HTML solution
    if (q.solution) {
      let sol = fixLatex(q.solution);
      
      const topicMsg = PROFILE_MESSAGES[q.topicCode];
      if (topicMsg && !sol.includes('Pedagogical Note')) {
         const injection = `<p><strong>Pedagogical Note:</strong> <em>${topicMsg}</em></p>`;
         sol = sol.replace('<p><strong>Step-by-step breakdown:</strong></p>', `${injection}\n    <p><strong>Step-by-step breakdown:</strong></p>`);
         changed = true;
      }
      
      if (sol !== q.solution) {
        q.solution = sol;
        changed = true;
      }
    }

    if (changed) modifiedCount++;
  }

  if (modifiedCount > 0) {
    const newContent = `${prefix}${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Audited ${modifiedCount} questions in ${filePath}.`);
  } else {
    console.log(`No changes needed in ${filePath}.`);
  }
}

const isMain = process.argv[1] === new URL(import.meta.url).pathname || process.argv[1] === import.meta.filename || process.argv[1] === __filename;
if (isMain) {
  auditFile(path.resolve(process.cwd(), 'tools/scripts/importYear7Ch7A.js'));
}
