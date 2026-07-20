import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { Y7_CH6B_QUESTIONS } from '../../src/constants/seedYear7Ch6BQuestions.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle options array and return new array with correct answer index
function shuffleOptions(options, correctValue) {
  const arr = [...options];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const correctIdx = arr.findIndex(opt => {
    const val = typeof opt === 'object' ? opt.text : opt;
    return val === correctValue;
  });
  return { options: arr, answer: String(correctIdx) };
}

function makeOptions(correctVal, wrong1, wrong2, wrong3) {
  return [correctVal, wrong1, wrong2, wrong3];
}

// Generate options for math expressions
function genOptionsForExpression(ans) {
  let raw = ans.replace(/\s+/g, '');
  
  if (raw === '5x/4') {
    return makeOptions('\\frac{5x}{4}', '5x + 4', '\\frac{4x}{5}', '5(x+4)');
  } else if (raw === '2x/5') {
    return makeOptions('\\frac{2x}{5}', '\\frac{5x}{2}', '2x + 5', '\\frac{x}{10}');
  } else if (raw === '4x/3+7') {
    return makeOptions('\\frac{4x}{3} + 7', '\\frac{4x+7}{3}', '4x + 21', '\\frac{3x}{4} + 7');
  } else if (raw === '(3x-4)/7') {
    return makeOptions('\\frac{3x-4}{7}', '\\frac{3x}{7} - 4', '7(3x-4)', '\\frac{4-3x}{7}');
  } else if (raw === '3x/5+4') {
    return makeOptions('\\frac{3x}{5} + 4', '\\frac{3x+4}{5}', '15x + 4', '\\frac{5x}{3} + 4');
  } else if (raw === '2x/7+5') {
    return makeOptions('\\frac{2x}{7} + 5', '\\frac{2x+5}{7}', '14x + 5', '\\frac{7x}{2} + 5');
  } else if (raw === '3*(x/5+4)') {
    return makeOptions('3\\left(\\frac{x}{5} + 4\\right)', '3\\left(\\frac{x+4}{5}\\right)', '\\frac{3x}{5} + 4', '3\\left(\\frac{5}{x} + 4\\right)');
  } else if (raw === '5*(x/6-2)') {
    return makeOptions('5\\left(\\frac{x}{6} - 2\\right)', '5\\left(\\frac{x-2}{6}\\right)', '\\frac{5x}{6} - 2', '5\\left(\\frac{6}{x} - 2\\right)');
  } else if (raw === '5*(3x/8-7)') {
    return makeOptions('5\\left(\\frac{3x}{8} - 7\\right)', '5\\left(\\frac{3x-7}{8}\\right)', '15x - 35', '5\\left(\\frac{8x}{3} - 7\\right)');
  } else if (raw === '4/9*(18-2x/5)') {
    return makeOptions('\\frac{4}{9}\\left(18 - \\frac{2x}{5}\\right)', '\\frac{4}{9}\\left(18 - \\frac{5x}{2}\\right)', '\\frac{4}{9}(18 - 2x)', '\\frac{9}{4}\\left(18 - \\frac{2x}{5}\\right)');
  } else if (raw === '3/11*(4/5-3x/7)') {
    return makeOptions('\\frac{3}{11}\\left(\\frac{4}{5} - \\frac{3x}{7}\\right)', '\\frac{3}{11}\\left(\\frac{4}{5} - \\frac{7x}{3}\\right)', '\\frac{3}{11}\\left(\\frac{3x}{7} - \\frac{4}{5}\\right)', '\\frac{11}{3}\\left(\\frac{4}{5} - \\frac{3x}{7}\\right)');
  } else if (raw === '3x^2/5') {
    return makeOptions('\\frac{3x^2}{5}', '\\frac{9x^2}{5}', '\\frac{3x}{5}', '\\frac{5x^2}{3}');
  } else if (raw === '15/y') {
    return makeOptions('\\frac{15}{y}', '15y', '\\frac{y}{15}', '15 - y');
  } else if (raw === '80/w') {
    return makeOptions('\\frac{80}{w}', '80w', '\\frac{w}{80}', '80 - w');
  } else if (raw === '2y^2') {
    return makeOptions('2y^2', '4y^2', '2y', '8y^2');
  } else if (raw === '12z^2/5') {
    return makeOptions('\\frac{12z^2}{5}', '\\frac{12z}{5}', '60z^2', '\\frac{5z^2}{12}');
  } else if (raw === 'a-b') {
    return makeOptions('a - b', 'b - a', 'ab', '\\frac{a}{b}');
  } else if (raw === '3a') {
    return makeOptions('3a', 'a^3', '3b', '\\frac{a}{3}');
  } else if (raw === '2a+3b') {
    return makeOptions('2a + 3b', '3a + 2b', '5ab', '2a - 3b');
  } else if (raw === '4a-b') {
    return makeOptions('4a - b', '4b - a', '4ab', '\\frac{4a}{b}');
  } else if (raw === 'ab') {
    return makeOptions('ab', 'a+b', '\\frac{a}{b}', 'a^b');
  } else if (raw === 'a\\divb' || raw === 'a/b') {
    return makeOptions('\\frac{a}{b}', '\\frac{b}{a}', 'ab', 'a - b');
  } else if (raw === 'b\\diva' || raw === 'b/a') {
    return makeOptions('\\frac{b}{a}', '\\frac{a}{b}', 'ab', 'b - a');
  } else if (raw === '3y/5') {
    return makeOptions('\\frac{3y}{5}', '\\frac{5y}{3}', '3y', '\\frac{3}{5y}');
  } else if (raw === '7y/3') {
    return makeOptions('\\frac{7y}{3}', '\\frac{3y}{7}', '7y', '2\\frac{1}{3} + y');
  } else if (raw === '3w/2') {
    return makeOptions('\\frac{3w}{2}', '\\frac{2w}{3}', '12w', '\\frac{3}{2w}');
  } else if (raw === 'y/4') {
    return makeOptions('\\frac{y}{4}', '4y', '\\frac{4}{y}', 'y - 4');
  } else if (raw === 'z/6') {
    return makeOptions('\\frac{z}{6}', '6z', '\\frac{6}{z}', 'z - 6');
  } else if (raw === '3y/6') {
    return makeOptions('\\frac{3y}{6}', '\\frac{y}{2}', '\\frac{6y}{3}', '3y - 6');
  } else if (raw === '3x/5-4') {
    return makeOptions('\\frac{3x}{5} - 4', '\\frac{3x-4}{5}', '15x - 4', '\\frac{5x}{3} - 4');
  } else if (raw === '8z/k') {
    return makeOptions('\\frac{8z}{k}', '8zk', '\\frac{k}{8z}', '8z - k');
  } else if (raw === '100-w/6') {
    return makeOptions('100 - \\frac{w}{6}', '\\frac{100-w}{6}', '100 - 6w', '\\frac{w}{6} - 100');
  }

  const val = parseFloat(ans);
  if (!isNaN(val)) {
    if (Number.isInteger(val)) {
      return makeOptions(String(val), String(val + 3), String(val - 3), String(val * 2));
    } else {
      return makeOptions(String(val), String(val + 1), String(val - 1), String(val * 2));
    }
  }

  if (ans.includes('/')) {
    const parts = ans.split('/');
    const n = parseInt(parts[0]);
    const d = parseInt(parts[1]);
    return makeOptions(
      `\\frac{${n}}{${d}}`,
      `\\frac{${d}}{${n}}`,
      `\\frac{${n + 1}}{${d}}`,
      `\\frac{${n}}{${d + 1}}`
    );
  }

  return makeOptions(ans, ans + 'x', ans + ' + 2', '2' + ans);
}

// Generate highly detailed step-by-step solution explanations for student learning
function generateDetailedSteps(q) {
  const steps = [];
  const id = q.id;

  const matchNum = id.match(/^y7-6b-q(\d+)/);
  if (!matchNum) {
    steps.push({
      explanation: "Evaluate the given expression.",
      workingOut: `\\(${q.answer || q.a}\\)`
    });
    return steps;
  }

  const num = parseInt(matchNum[1]);

  if (num === 1) {
    // Algebraic expressions writing (q1a - q1m)
    const desc = q.question.replace('Write this expression using algebraic notation: ', '').replace(' Use the pronumeral \\(x\\).', '');
    steps.push({
      explanation: `Read the verbal description and identify the algebraic operations required: "${desc}"`,
      workingOut: ""
    });
    
    if (id === 'y7-6b-q1a') {
      steps.push({
        explanation: "First, express the multiplication of the variable x by 5. In algebra, we write this simply as 5x.",
        workingOut: "x \\times 5 = 5x"
      });
      steps.push({
        explanation: "Next, divide the result by 4. Division is written in fractional form.",
        workingOut: "5x \\div 4 = \\frac{5x}{4}"
      });
    } else if (id === 'y7-6b-q1b') {
      steps.push({
        explanation: "First, divide the variable x by 5. This is written as a fraction.",
        workingOut: "x \\div 5 = \\frac{x}{5}"
      });
      steps.push({
        explanation: "Next, multiply the entire fractional result by 2.",
        workingOut: "2 \\times \\frac{x}{5} = \\frac{2x}{5}"
      });
    } else if (id === 'y7-6b-q1c') {
      steps.push({
        explanation: "First, multiply the variable x by 4 and divide by 3.",
        workingOut: "\\frac{4x}{3}"
      });
      steps.push({
        explanation: "Next, add 7 to this result to obtain the final algebraic expression.",
        workingOut: "\\frac{4x}{3} + 7"
      });
    } else if (id === 'y7-6b-q1d') {
      steps.push({
        explanation: "First, multiply the variable x by 3.",
        workingOut: "3x"
      });
      steps.push({
        explanation: "Subtract 4 from this result.",
        workingOut: "3x - 4"
      });
      steps.push({
        explanation: "Divide the entire result by 7. We place the expression over 7 to show the entire numerator is divided.",
        workingOut: "\\frac{3x - 4}{7}"
      });
    } else if (id === 'y7-6b-q1e') {
      steps.push({
        explanation: "'2/5 of a number' means multiplying the fraction 2/5 by the variable x.",
        workingOut: "\\frac{2}{5} \\times x = \\frac{2x}{5}"
      });
    } else if (id === 'y7-6b-q1f') {
      steps.push({
        explanation: "First, represent '3/5 of a number' using multiplication.",
        workingOut: "\\frac{3}{5} \\times x = \\frac{3x}{5}"
      });
      steps.push({
        explanation: "Next, add 4 to this result.",
        workingOut: "\\frac{3x}{5} + 4"
      });
    } else if (id === 'y7-6b-q1g') {
      steps.push({
        explanation: "First, write the term 'a number multiplied by 2/7'.",
        workingOut: "\\frac{2}{7} \\times x = \\frac{2x}{7}"
      });
      steps.push({
        explanation: "Next, add 5 to this expression.",
        workingOut: "\\frac{2x}{7} + 5"
      });
    } else if (id === 'y7-6b-q1h') {
      steps.push({
        explanation: "First, divide the variable x by 5.",
        workingOut: "\\frac{x}{5}"
      });
      steps.push({
        explanation: "Next, add 4 to this result.",
        workingOut: "\\frac{x}{5} + 4"
      });
      steps.push({
        explanation: "Finally, multiply the entire sum by 3. We must wrap the previous sum in parentheses to ensure the multiplication applies to both terms.",
        workingOut: "3\\left(\\frac{x}{5} + 4\\right)"
      });
    } else if (id === 'y7-6b-q1i') {
      steps.push({
        explanation: "First, divide the variable x by 6.",
        workingOut: "\\frac{x}{6}"
      });
      steps.push({
        explanation: "Next, subtract 2 from the result.",
        workingOut: "\\frac{x}{6} - 2"
      });
      steps.push({
        explanation: "Finally, multiply the entire expression by 5. Parentheses are used to group the expression.",
        workingOut: "5\\left(\\frac{x}{6} - 2\\right)"
      });
    } else if (id === 'y7-6b-q1j') {
      steps.push({
        explanation: "First, represent '3/8 of a number' as an algebraic term.",
        workingOut: "\\frac{3x}{8}"
      });
      steps.push({
        explanation: "Subtract 7 from this term.",
        workingOut: "\\frac{3x}{8} - 7"
      });
      steps.push({
        explanation: "Finally, multiply the entire result by 5. We use parentheses to group the expression.",
        workingOut: "5\\left(\\frac{3x}{8} - 7\\right)"
      });
    } else if (id === 'y7-6b-q1k') {
      steps.push({
        explanation: "First, write the term '2/5 of a number'.",
        workingOut: "\\frac{2x}{5}"
      });
      steps.push({
        explanation: "Subtract this term from 18.",
        workingOut: "18 - \\frac{2x}{5}"
      });
      steps.push({
        explanation: "Multiply the entire grouped expression by 4/9.",
        workingOut: "\\frac{4}{9}\\left(18 - \\frac{2x}{5}\\right)"
      });
    } else if (id === 'y7-6b-q1l') {
      steps.push({
        explanation: "First, write the two fractional algebraic terms: '3/7 of a number' and '4/5'.",
        workingOut: "\\frac{3x}{7} \\quad \\text{and} \\quad \\frac{4}{5}"
      });
      steps.push({
        explanation: "Subtract 3x/7 from 4/5.",
        workingOut: "\\frac{4}{5} - \\frac{3x}{7}"
      });
      steps.push({
        explanation: "Multiply the entire grouped expression by 3/11.",
        workingOut: "\\frac{3}{11}\\left(\\frac{4}{5} - \\frac{3x}{7}\\right)"
      });
    } else if (id === 'y7-6b-q1m') {
      steps.push({
        explanation: "First, multiply the variable x by itself.",
        workingOut: "x \\times x = x^2"
      });
      steps.push({
        explanation: "Next, multiply this result by 3/5.",
        workingOut: "\\frac{3}{5} \\times x^2 = \\frac{3x^2}{5}"
      });
    }
  } else if (num === 2 || num === 3 || num === 4) {
    // Substitution evaluations (q2, q3, q4)
    const m = q.question.match(/for \\\(x = (\d+)\\\)/);
    const xval = m ? m[1] : "9";
    let cleanExpr = q.question.replace('Evaluate ', '').split(' for ')[0];
    cleanExpr = cleanExpr.replace(/^\\\(|\\\)$/g, ''); // Strip outer math delimiters

    steps.push({
      explanation: `Substitute the value of x = ${xval} into the algebraic expression.`,
      workingOut: `\\text{Expression: } ${cleanExpr} \\quad (x = ${xval})`
    });

    if (id === 'y7-6b-q2a') {
      steps.push({
        explanation: "Substitute 9 into the numerator.",
        workingOut: "\\frac{5(9)}{3} = \\frac{45}{3}"
      });
      steps.push({
        explanation: "Perform the division to find the value.",
        workingOut: "45 \\div 3 = 15"
      });
    } else if (id === 'y7-6b-q2b') {
      steps.push({
        explanation: "Evaluate the substitution in the fraction first.",
        workingOut: "\\frac{5(9)}{3} - 7 = 15 - 7"
      });
      steps.push({
        explanation: "Subtract 7 from the result.",
        workingOut: "8"
      });
    } else if (id === 'y7-6b-q2c') {
      steps.push({
        explanation: "Substitute 9 into the parenthesis first.",
        workingOut: "\\frac{4(9+3)}{8} = \\frac{4(12)}{8}"
      });
      steps.push({
        explanation: "Calculate the numerator multiplication.",
        workingOut: "\\frac{48}{8}"
      });
      steps.push({
        explanation: "Divide to find the final value.",
        workingOut: "48 \\div 8 = 6"
      });
    } else if (id === 'y7-6b-q3a') {
      steps.push({
        explanation: "Substitute 3 for x and evaluate the parenthesis first.",
        workingOut: "\\frac{3(3+7)}{5} = \\frac{3(10)}{5}"
      });
      steps.push({
        explanation: "Perform the multiplication in the numerator.",
        workingOut: "\\frac{30}{5}"
      });
      steps.push({
        explanation: "Divide to find the final answer.",
        workingOut: "30 \\div 5 = 6"
      });
    } else if (id === 'y7-6b-q3b') {
      steps.push({
        explanation: "Substitute 6 for x.",
        workingOut: "\\frac{4(6)}{8} + 12"
      });
      steps.push({
        explanation: "Perform division first.",
        workingOut: "\\frac{24}{8} + 12 = 3 + 12"
      });
      steps.push({
        explanation: "Add to find the final value.",
        workingOut: "15"
      });
    } else if (id === 'y7-6b-q3c') {
      steps.push({
        explanation: "Substitute 8 for x inside the fraction.",
        workingOut: "8\\left(\\frac{8-2}{6}\\right) = 8\\left(\\frac{6}{6}\\right)"
      });
      steps.push({
        explanation: "Simplify the fraction inside the parentheses.",
        workingOut: "8(1) = 8"
      });
    } else if (id === 'y7-6b-q3d') {
      steps.push({
        explanation: "Substitute 6 for x.",
        workingOut: "10 - \\frac{4(6)}{3} = 10 - \\frac{24}{3}"
      });
      steps.push({
        explanation: "Evaluate the division part.",
        workingOut: "10 - 8 = 2"
      });
    } else if (id === 'y7-6b-q4a') {
      steps.push({
        explanation: "Substitute 60 for x and simplify the numerator.",
        workingOut: "\\frac{3(60+40)}{5} = \\frac{3(100)}{5}"
      });
      steps.push({
        explanation: "Divide 100 by 5 first to make calculation easier.",
        workingOut: "3 \\times 20 = 60"
      });
    } else if (id === 'y7-6b-q4b') {
      steps.push({
        explanation: "Substitute 80 for x.",
        workingOut: "\\frac{3(80)}{20} + 15 = \\frac{240}{20} + 15"
      });
      steps.push({
        explanation: "Perform the division.",
        workingOut: "12 + 15 = 27"
      });
    } else if (id === 'y7-6b-q4c') {
      steps.push({
        explanation: "Substitute 90 for x.",
        workingOut: "4\\left(\\frac{90-30}{6}\\right) = 4\\left(\\frac{60}{6}\\right)"
      });
      steps.push({
        explanation: "Evaluate the division inside the parentheses.",
        workingOut: "4(10) = 40"
      });
    } else if (id === 'y7-6b-q4d') {
      steps.push({
        explanation: "Substitute 50 for x.",
        workingOut: "50 - \\frac{4(50)}{5} = 50 - \\frac{200}{5}"
      });
      steps.push({
        explanation: "Evaluate the division.",
        workingOut: "50 - 40 = 10"
      });
    } else if (id === 'y7-6b-q4e') {
      steps.push({
        explanation: "Substitute 25 for x in the denominator.",
        workingOut: "8 - \\frac{400}{2(25)} = 8 - \\frac{400}{50}"
      });
      steps.push({
        explanation: "Evaluate the division.",
        workingOut: "8 - 8 = 0"
      });
    } else if (id === 'y7-6b-q4f') {
      steps.push({
        explanation: "Substitute 35 for x.",
        workingOut: "\\frac{3(35)+45}{15} + 8"
      });
      steps.push({
        explanation: "Simplify the numerator.",
        workingOut: "\\frac{105+45}{15} + 8 = \\frac{150}{15} + 8"
      });
      steps.push({
        explanation: "Divide and add.",
        workingOut: "10 + 8 = 18"
      });
    } else if (id === 'y7-6b-q4g') {
      steps.push({
        explanation: "Substitute 50 for x inside the parenthesis.",
        workingOut: "\\frac{4(150-2(50))}{5} = \\frac{4(150-100)}{5}"
      });
      steps.push({
        explanation: "Simplify the numerator.",
        workingOut: "\\frac{4(50)}{5} = \\frac{200}{5}"
      });
      steps.push({
        explanation: "Divide to find the final value.",
        workingOut: "200 \\div 5 = 40"
      });
    } else if (id === 'y7-6b-q4h') {
      steps.push({
        explanation: "Substitute 30 for x inside the parentheses.",
        workingOut: "2\\left(\\frac{210-3(30)}{8} - 5\\right)"
      });
      steps.push({
        explanation: "Simplify the numerator of the fraction.",
        workingOut: "2\\left(\\frac{210-90}{8} - 5\\right) = 2\\left(\\frac{120}{8} - 5\\right)"
      });
      steps.push({
        explanation: "Evaluate the division and subtraction inside the parentheses.",
        workingOut: "2(15 - 5) = 2(10)"
      });
      steps.push({
        explanation: "Multiply to find the final value.",
        workingOut: "20"
      });
    }
  } else if (num === 5 || num === 10 || num === 16) {
    // Multi-variable evaluations (q5, q10, q16)
    const mMatch = q.question.match(/for \\\(m = ([0-9/.]+)\\\) and \\\(n = ([0-9/.]+)\\\)/);
    const abMatch = q.question.match(/for \\\(a = ([0-9/.]+)\\\) and \\\(b = ([0-9/.]+)\\\)/);

    let v1Name = 'm', v2Name = 'n';
    let v1Val = '6', v2Val = '1/3';
    if (mMatch) {
      v1Val = mMatch[1];
      v2Val = mMatch[2];
    } else if (abMatch) {
      v1Name = 'a'; v2Name = 'b';
      v1Val = abMatch[1];
      v2Val = abMatch[2];
    }

    let cleanExpr = q.question.replace('Evaluate ', '').split(' for ')[0];
    cleanExpr = cleanExpr.replace(/^\\\(|\\\)$/g, ''); // Strip outer math delimiters

    // Clean up variables to make sure we don't nest delimiters
    const cleanV1Val = v1Val.replace(/^\\\(|\\\)$/g, '');
    const cleanV2Val = v2Val.replace(/^\\\(|\\\)$/g, '');

    steps.push({
      explanation: `Substitute the values of ${v1Name} = ${v1Val} and ${v2Name} = ${v2Val} into the algebraic expression.`,
      workingOut: `\\text{Expression: } ${cleanExpr} \\quad (${v1Name} = ${cleanV1Val}, \\; ${v2Name} = ${cleanV2Val})`
    });

    if (id === 'y7-6b-q5a') {
      steps.push({
        explanation: "Substitute the values to add the whole number and the fraction.",
        workingOut: "6 + \\frac{1}{3}"
      });
      steps.push({
        explanation: "Convert the integer 6 to a fraction with a denominator of 3.",
        workingOut: "6 = \\frac{18}{3} \\implies \\frac{18}{3} + \\frac{1}{3} = \\frac{19}{3}"
      });
    } else if (id === 'y7-6b-q5b') {
      steps.push({
        explanation: "Evaluate the multiplication first.",
        workingOut: "3(4) + \\frac{1}{5} = 12 + \\frac{1}{5}"
      });
      steps.push({
        explanation: "Convert 12 to a fraction with denominator 5.",
        workingOut: "\\frac{60}{5} + \\frac{1}{5} = \\frac{61}{5}"
      });
    } else if (id === 'y7-6b-q5c') {
      steps.push({
        explanation: "Substitute the values.",
        workingOut: "2(5) - 4\\left(\\frac{1}{2}\\right)"
      });
      steps.push({
        explanation: "Perform the multiplications.",
        workingOut: "10 - 2 = 8"
      });
    } else if (id === 'y7-6b-q5d') {
      steps.push({
        explanation: "Substitute m = 4. Note that n is not used in this expression.",
        workingOut: "\\frac{4}{6}"
      });
      steps.push({
        explanation: "Simplify the fraction by dividing the numerator and denominator by 2.",
        workingOut: "\\frac{2}{3}"
      });
    } else if (id === 'y7-6b-q5e') {
      steps.push({
        explanation: "Substitute n = 1/3.",
        workingOut: "\\frac{1}{3} \\div 6"
      });
      steps.push({
        explanation: "Dividing by a number is equivalent to multiplying by its reciprocal.",
        workingOut: "\\frac{1}{3} \\times \\frac{1}{6} = \\frac{1}{18}"
      });
    } else if (id === 'y7-6b-q5f') {
      steps.push({
        explanation: "Substitute the values to multiply.",
        workingOut: "9 \\times \\frac{1}{3}"
      });
      steps.push({
        explanation: "Simplify the multiplication.",
        workingOut: "\\frac{9}{3} = 3"
      });
    } else if (id === 'y7-6b-q5g') {
      steps.push({
        explanation: "Substitute the values.",
        workingOut: "\\frac{1}{2} \\div 8"
      });
      steps.push({
        explanation: "Multiply by the reciprocal.",
        workingOut: "\\frac{1}{2} \\times \\frac{1}{8} = \\frac{1}{16}"
      });
    } else if (id === 'y7-6b-q5h') {
      steps.push({
        explanation: "Substitute the values into the numerator.",
        workingOut: "\\frac{8 + 1/3}{5}"
      });
      steps.push({
        explanation: "Simplify the numerator first.",
        workingOut: "8 + \\frac{1}{3} = \\frac{25}{3}"
      });
      steps.push({
        explanation: "Divide the fraction by 5.",
        workingOut: "\\frac{25}{3} \\div 5 = \\frac{25}{3} \\times \\frac{1}{5} = \\frac{5}{3}"
      });
    } else if (id === 'y7-6b-q10a') {
      steps.push({
        explanation: "Substitute the values. Solve the denominator fraction division in the term m/n.",
        workingOut: "\\frac{4}{1/3} = 4 \\times 3 = 12"
      });
      steps.push({
        explanation: "Substitute 12 back into the expression.",
        workingOut: "2(12 + 6) = 2(18)"
      });
      steps.push({
        explanation: "Multiply to find the final value.",
        workingOut: "36"
      });
    } else if (id === 'y7-6b-q10b') {
      steps.push({
        explanation: "Substitute the values.",
        workingOut: "\\frac{1}{2}\\left(\\frac{25-5}{4}\\right)"
      });
      steps.push({
        explanation: "Simplify the fraction inside the parentheses.",
        workingOut: "\\frac{1}{2}\\left(\\frac{20}{4}\\right) = \\frac{1}{2}(5)"
      });
      steps.push({
        explanation: "Multiply to find the final value.",
        workingOut: "\\frac{5}{2}"
      });
    } else if (id === 'y7-6b-q10c') {
      steps.push({
        explanation: "Substitute the values into the fraction part.",
        workingOut: "\\frac{3(6) - 9(1/3)}{5} = \\frac{18 - 3}{5}"
      });
      steps.push({
        explanation: "Simplify the fraction.",
        workingOut: "\\frac{15}{5} = 3"
      });
      steps.push({
        explanation: "Add this result to the value of m.",
        workingOut: "m + 3 = 6 + 3 = 9"
      });
    } else if (id === 'y7-6b-q10d') {
      steps.push({
        explanation: "Substitute the values into the fraction part first.",
        workingOut: "\\frac{3+17}{1/4} = \\frac{20}{1/4} = 20 \\times 4 = 80"
      });
      steps.push({
        explanation: "Evaluate the subtraction part: 5m.",
        workingOut: "5(3) = 15"
      });
      steps.push({
        explanation: "Subtract to find the final value.",
        workingOut: "80 - 15 = 65"
      });
    } else if (id === 'y7-6b-q16a') {
      steps.push({
        explanation: "Substitute the values.",
        workingOut: "\\frac{3}{4} - \\frac{2}{5}"
      });
      steps.push({
        explanation: "Find the common denominator (LCM of 4 and 5 is 20) and subtract.",
        workingOut: "\\frac{15}{20} - \\frac{8}{20} = \\frac{7}{20}"
      });
    } else if (id === 'y7-6b-q16b') {
      steps.push({
        explanation: "Substitute the value of a.",
        workingOut: "3 \\times \\frac{3}{4}"
      });
      steps.push({
        explanation: "Multiply.",
        workingOut: "\\frac{9}{4}"
      });
    } else if (id === 'y7-6b-q16c') {
      steps.push({
        explanation: "Substitute the values.",
        workingOut: "2\\left(\\frac{3}{4}\\right) + 3\\left(\\frac{2}{5}\\right)"
      });
      steps.push({
        explanation: "Simplify the multiplications.",
        workingOut: "\\frac{3}{2} + \\frac{6}{5}"
      });
      steps.push({
        explanation: "Find a common denominator of 10 and add.",
        workingOut: "\\frac{15}{10} + \\frac{12}{10} = \\frac{27}{10}"
      });
    } else if (id === 'y7-6b-q16d') {
      steps.push({
        explanation: "Substitute the values.",
        workingOut: "4\\left(\\frac{3}{4}\\right) - \\frac{2}{5}"
      });
      steps.push({
        explanation: "Simplify the multiplication first.",
        workingOut: "3 - \\frac{2}{5}"
      });
      steps.push({
        explanation: "Convert 3 to a fraction and subtract.",
        workingOut: "\\frac{15}{5} - \\frac{2}{5} = \\frac{13}{5}"
      });
    } else if (id === 'y7-6b-q16e') {
      steps.push({
        explanation: "Substitute the values to multiply.",
        workingOut: "\\frac{3}{4} \\times \\frac{2}{5}"
      });
      steps.push({
        explanation: "Multiply the numerators and denominators.",
        workingOut: "\\frac{6}{20} = \\frac{3}{10}"
      });
    } else if (id === 'y7-6b-q16f') {
      steps.push({
        explanation: "Substitute the values.",
        workingOut: "\\frac{3}{4} \\div \\frac{2}{5}"
      });
      steps.push({
        explanation: "Multiply by the reciprocal of the divisor.",
        workingOut: "\\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8}"
      });
    } else if (id === 'y7-6b-q16g') {
      steps.push({
        explanation: "Substitute the values.",
        workingOut: "\\frac{2}{5} \\div \\frac{3}{4}"
      });
      steps.push({
        explanation: "Multiply by the reciprocal of the divisor.",
        workingOut: "\\frac{2}{5} \\times \\frac{4}{3} = \\frac{8}{15}"
      });
    }
  } else if (id === 'y7-6b-q11') {
    steps.push({
      explanation: "Find the cost of 16 kg of potatoes using the given charge formula.",
      workingOut: "\\text{Potatoes Cost} = \\frac{16}{4} = 4\\text{ dollars}"
    });
    steps.push({
      explanation: "Find the cost of 15 kg of oranges using the given charge formula.",
      workingOut: "\\text{Oranges Cost} = \\frac{15}{3} = 5\\text{ dollars}"
    });
    steps.push({
      explanation: "Sum the costs to find the total cost.",
      workingOut: "4 + 5 = 9\\text{ dollars}"
    });
  } else if (num === 12 || num === 14 || num === 15 || num === 20) {
    if (id === 'y7-6b-q12a') {
      steps.push({
        explanation: "Divide the total length of the ribbon (15 m) by the number of parts (y).",
        workingOut: "\\frac{15}{y}"
      });
    } else if (id === 'y7-6b-q12b') {
      steps.push({
        explanation: "Substitute y = 6 into the expression 15/y.",
        workingOut: "\\frac{15}{6}"
      });
      steps.push({
        explanation: "Simplify the fraction to a decimal.",
        workingOut: "15 \\div 6 = 2.5\\text{ m}"
      });
    } else if (id === 'y7-6b-q14a') {
      steps.push({
        explanation: "Recall the formula for the area of a rectangle: Area = Length * Width.",
        workingOut: "8y^2 = \\text{Length} \\times 4"
      });
      steps.push({
        explanation: "Divide the area by the width to solve for length.",
        workingOut: "\\text{Length} = \\frac{8y^2}{4} = 2y^2"
      });
    } else if (id === 'y7-6b-q14b') {
      steps.push({
        explanation: "Substitute y = 3 into the length expression 2y^2.",
        workingOut: "2(3)^2"
      });
      steps.push({
        explanation: "Perform the exponentiation first, then multiply.",
        workingOut: "2 \\times 9 = 18\\text{ cm}"
      });
    } else if (id === 'y7-6b-q15a') {
      steps.push({
        explanation: "Recall the rectangle area formula: Area = Length * Width.",
        workingOut: "12z^2 = \\text{Length} \\times 5"
      });
      steps.push({
        explanation: "Divide by the width to express the length in terms of z.",
        workingOut: "\\text{Length} = \\frac{12z^2}{5}"
      });
    } else if (id === 'y7-6b-q15b') {
      steps.push({
        explanation: "Substitute z = 5 into the length expression.",
        workingOut: "\\frac{12(5)^2}{5}"
      });
      steps.push({
        explanation: "Evaluate the exponent and simplify.",
        workingOut: "12 \\times 5 = 60\\text{ cm}"
      });
    } else if (id === 'y7-6b-q20a') {
      steps.push({
        explanation: "Divide the total packages (8z) by the number of couriers (k).",
        workingOut: "\\frac{8z}{k}"
      });
    } else if (id === 'y7-6b-q20b') {
      steps.push({
        explanation: "Substitute z = 15 and k = 6 into the package expression.",
        workingOut: "\\frac{8(15)}{6}"
      });
      steps.push({
        explanation: "Simplify the calculation.",
        workingOut: "\\frac{120}{6} = 20"
      });
    }
  } else if (num === 6 || num === 7 || num === 8 || num === 9) {
    if (id === 'y7-6b-q6a') {
      steps.push({
        explanation: "A square has 4 equal sides. The perimeter is 4 times the side length.",
        workingOut: "\\text{Side} = \\frac{y}{4}"
      });
    } else if (id === 'y7-6b-q6b') {
      steps.push({
        explanation: "Substitute y = 30 into the side expression y/4.",
        workingOut: "\\frac{30}{4}"
      });
      steps.push({
        explanation: "Simplify to a decimal.",
        workingOut: "30 \\div 4 = 7.5\\text{ cm}"
      });
    } else if (id === 'y7-6b-q7a') {
      steps.push({
        explanation: "Divide the total length of the wire z by the 6 equal parts.",
        workingOut: "\\frac{z}{6}"
      });
    } else if (id === 'y7-6b-q7bi') {
      steps.push({
        explanation: "Substitute z = 24 into the expression z/6.",
        workingOut: "\\frac{24}{6} = 4\\text{ m}"
      });
    } else if (id === 'y7-6b-q7bii') {
      steps.push({
        explanation: "Substitute z = 45 into the expression z/6.",
        workingOut: "\\frac{45}{6}"
      });
      steps.push({
        explanation: "Simplify the fraction to a decimal.",
        workingOut: "45 \\div 6 = 7.5\\text{ m}"
      });
    } else if (id === 'y7-6b-q7biii') {
      steps.push({
        explanation: "Substitute z = 80 into the expression z/6.",
        workingOut: "\\frac{80}{6}"
      });
      steps.push({
        explanation: "Simplify the fraction.",
        workingOut: "\\frac{40}{3}\\text{ m}"
      });
    } else if (id === 'y7-6b-q8a') {
      steps.push({
        explanation: "First, triple the number y. This is written as 3y.",
        workingOut: "3 \\times y = 3y"
      });
      steps.push({
        explanation: "Next, divide this result by 6.",
        workingOut: "\\frac{3y}{6}"
      });
    } else if (id === 'y7-6b-q8b') {
      steps.push({
        explanation: "Substitute y = 8 into the expression 3y/6.",
        workingOut: "\\frac{3(8)}{6}"
      });
      steps.push({
        explanation: "Simplify the expression.",
        workingOut: "\\frac{24}{6} = 4"
      });
    } else if (id === 'y7-6b-q9a') {
      steps.push({
        explanation: "First, multiply the number x by 3/5.",
        workingOut: "\\frac{3}{5} \\times x = \\frac{3x}{5}"
      });
      steps.push({
        explanation: "Subtract 4 from this result.",
        workingOut: "\\frac{3x}{5} - 4"
      });
    } else if (id === 'y7-6b-q9b') {
      steps.push({
        explanation: "Substitute x = 15 into the expression.",
        workingOut: "\\frac{3(15)}{5} - 4"
      });
      steps.push({
        explanation: "Simplify the multiplication and division first.",
        workingOut: "\\frac{45}{5} - 4 = 9 - 4"
      });
      steps.push({
        explanation: "Subtract to find the final value.",
        workingOut: "5"
      });
    }
  } else if (id === 'y7-6b-q13') {
    steps.push({
      explanation: "Divide the total cost of 80 dollars by the total weight of w kg.",
      workingOut: "\\frac{80}{w}"
    });
  } else if (id === 'y7-6b-q17') {
    steps.push({
      explanation: "Multiply the monthly income y by the rent fraction 3/5.",
      workingOut: "y \\times \\frac{3}{5} = \\frac{3y}{5}"
    });
  } else if (id === 'y7-6b-q18') {
    steps.push({
      explanation: "Convert the mixed number 2 1/3 metres to an improper fraction.",
      workingOut: "2\\frac{1}{3} = \\frac{7}{3}"
    });
    steps.push({
      explanation: "Multiply the length (7/3) by the cost per metre (y).",
      workingOut: "\\frac{7y}{3}"
    });
  } else if (id === 'y7-6b-q19') {
    steps.push({
      explanation: "Calculate the total cost of the 12 concert tickets where each ticket is w dollars.",
      workingOut: "12w"
    });
    steps.push({
      explanation: "Divide this total cost equally among the 8 people sharing the cost.",
      workingOut: "\\frac{12w}{8}"
    });
    steps.push({
      explanation: "Simplify the fraction by dividing the numerator and denominator by 4.",
      workingOut: "\\frac{3w}{2}"
    });
  }

  if (steps.length === 0) {
    steps.push({
      explanation: "Evaluate the given expression.",
      workingOut: `\\(${q.answer || q.a}\\)`
    });
  }

  return steps;
}

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  console.log(`Starting Year 7 Chapter 6B direct MCQ conversion for ${Y7_CH6B_QUESTIONS.length} questions...`);

  for (const q of Y7_CH6B_QUESTIONS) {
    const docRef = questionsCol.doc(q.id);

    // Generate option choices
    const rawOptions = genOptionsForExpression(q.a);
    const { options, answer } = shuffleOptions(rawOptions, rawOptions[0]);

    // Generate detailed step-by-step solutions
    const steps = generateDetailedSteps(q);

    // Enforce math delimiters wrapping on all workingOut steps
    const wrappedSteps = steps.map(step => {
      let wo = step.workingOut || "";
      if (wo.trim() && !wo.startsWith('\\(') && !wo.startsWith('$$') && !wo.startsWith('$')) {
        wo = `\\(${wo}\\)`;
      }
      return {
        ...step,
        workingOut: wo
      };
    });

    console.log(`Directly converting and updating ${q.id} on Firestore...`);
    batch.update(docRef, {
      type: 'multiple_choice',
      options,
      answer,
      solutionSteps: wrappedSteps,
      requiresManualGrading: false
    });
  }

  // Bump sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed Chapter 6B direct database updates!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
