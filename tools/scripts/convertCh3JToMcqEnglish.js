#!/usr/bin/env node
import fs from 'fs';

const FILE = './src/constants/seedYear10Ch3JQuestions.js';
const IMPORT_PATH = '../../src/constants/seedYear10Ch3JQuestions.js';

const escapeMath = (str) => {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
};

const forceLaTeXWrapping = (str) => {
  if (typeof str !== 'string') return str;
  let cleaned = str.trim();
  if (cleaned.startsWith('$$') && cleaned.endsWith('$$')) {
    cleaned = cleaned.slice(2, -2).trim();
  } else if (cleaned.startsWith('$') && cleaned.endsWith('$')) {
    cleaned = cleaned.slice(1, -1).trim();
  }
  cleaned = cleaned.replace(/\\\\\(|\\\\\)/g, '').replace(/\\\(|\\\)/g, '').trim();
  return `\\\\(${cleaned}\\\\)`;
};

const convertDollarToLaTeX = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/\$([^$]+)\$/g, (_, math) => {
    let cleanedMath = math.replace(/\\\\\(|\\\\\)/g, '').replace(/\\\(|\\\)/g, '').trim();
    return `\\\\(${cleanedMath}\\\\)`;
  });
};

const generateDistractors = (answerStr) => {
  let cleaned = answerStr.trim().replace(/\$/g, '').replace(/\\\(|\\\)/g, '');
  if (/^-?\d+(\.\d+)?$/.test(cleaned)) {
    const val = Number(cleaned);
    return [`${val + 2}`, `${val - 2}`, `${-val}`];
  }
  let alt1 = cleaned.replace(/\+/g, '-');
  let alt2 = cleaned.replace(/2/g, '3').replace(/3/g, '4');
  let alt3 = cleaned.replace(/x/g, 'y').replace(/y/g, 'z');
  if (alt1 === cleaned) alt1 = cleaned + " + 1";
  if (alt2 === cleaned) alt2 = cleaned + " - 2";
  return [alt1, alt2, alt3];
};

// Generate highly detailed custom steps for the DOTS Factorise questions (q15a-d)
// to show exactly how (Ax)^2 - (By)^2 leads to (Ax+By)(Ax-By) in a detailed 3-step format.
const getDetailedDotsFactoriseSteps = (id, qText, correctVal) => {
  let term = qText.replace('Factorise: ', '').replace(/\$/g, '').replace(/\\\(|\\\)/g, '').trim();
  let ans = correctVal.replace(/\$/g, '').replace(/\\\(|\\\)/g, '').trim();

  // Custom breakdowns
  if (id === 'y10-3j-q15a') { // x^2 - 25
    return [
      { explanation: "Identify the terms as perfect squares: \\\\(x^2\\\\) is the square of \\\\(x\\\\), and \\\\(25\\\\) is the square of \\\\(5\\\\).", workingOut: "\\\\(x^2 - 25 = x^2 - 5^2\\\\)" },
      { explanation: "Apply the Difference of Two Squares (DOTS) identity: \\\\(a^2 - b^2 = (a+b)(a-b)\\\\) where \\\\(a=x\\\\) and \\\\(b=5\\\\).", workingOut: "\\\\((x)^2 - (5)^2 = (x+5)(x-5)\\\\)" },
      { explanation: "The final factorised expression is:", workingOut: "\\\\((x+5)(x-5)\\\\)" }
    ];
  }
  if (id === 'y10-3j-q15b') { // a^2 - 49
    return [
      { explanation: "Identify the terms as perfect squares: \\\\(a^2\\\\) is the square of \\\\(a\\\\), and \\\\(49\\\\) is the square of \\\\(7\\\\).", workingOut: "\\\\(a^2 - 49 = a^2 - 7^2\\\\)" },
      { explanation: "Apply the Difference of Two Squares (DOTS) identity: \\\\(a^2 - b^2 = (a+b)(a-b)\\\\) where \\\\(a=a\\\\) and \\\\(b=7\\\\).", workingOut: "\\\\((a)^2 - (7)^2 = (a+7)(a-7)\\\\)" },
      { explanation: "The final factorised expression is:", workingOut: "\\\\((a+7)(a-7)\\\\)" }
    ];
  }
  if (id === 'y10-3j-q15c') { // 64b^2 - 1
    return [
      { explanation: "Write each term as a perfect square: \\\\(64b^2 = (8b)^2\\\\) and \\\\(1 = 1^2\\\\).", workingOut: "\\\\(64b^2 - 1 = (8b)^2 - 1^2\\\\)" },
      { explanation: "Apply the Difference of Two Squares (DOTS) identity: \\\\(a^2 - b^2 = (a+b)(a-b)\\\\) where \\\\(a=8b\\\\) and \\\\(b=1\\\\).", workingOut: "\\\\((8b)^2 - (1)^2 = (8b+1)(8b-1)\\\\)" },
      { explanation: "The final factorised expression is:", workingOut: "\\\\((8b+1)(8b-1)\\\\)" }
    ];
  }
  if (id === 'y10-3j-q15d') { // 16x^2 - 9y^2
    return [
      { explanation: "Write each term as a perfect square: \\\\(16x^2 = (4x)^2\\\\) and \\\\(9y^2 = (3y)^2\\\\).", workingOut: "\\\\(16x^2 - 9y^2 = (4x)^2 - (3y)^2\\\\)" },
      { explanation: "Apply the Difference of Two Squares (DOTS) identity: \\\\(a^2 - b^2 = (a+b)(a-b)\\\\) where \\\\(a=4x\\\\) and \\\\(b=3y\\\\).", workingOut: "\\\\((4x)^2 - (3y)^2 = (4x+3y)(4x-3y)\\\\)" },
      { explanation: "The final factorised expression is:", workingOut: "\\\\((4x+3y)(4x-3y)\\\\)" }
    ];
  }

  // Fallback DOTS
  return [
    { explanation: "Write the expression as a difference of two squares: \\\\(A^2 - B^2\\\\).", workingOut: `\\\\(${term} = A^2 - B^2\\\\)` },
    { explanation: "Apply the Difference of Two Squares (DOTS) identity: \\\\(A^2 - B^2 = (A+B)(A-B)\\\\).", workingOut: `\\\\(${ans}\\\\)` },
    { explanation: "State the final factorised form.", workingOut: `\\\\(${ans}\\\\)` }
  ];
};

import(IMPORT_PATH).then((module) => {
  const questions = module.Y10_CH3J_QUESTIONS;
  const newQuestions = [];

  for (const q of questions) {
    const isShowThat = q.question.toLowerCase().includes('show that') || q.question.toLowerCase().includes('prove') || q.question.toLowerCase().includes('sketch');
    
    let type = "multiple_choice";
    let opts = q.opts || [];
    let aIndex = q.a;
    let correctVal = "";

    const cleanedQText = convertDollarToLaTeX(q.question);

    if (isShowThat) {
      type = "short_answer";
      correctVal = String(q.a);
      aIndex = forceLaTeXWrapping(correctVal);
    } else {
      if (typeof q.a === 'string') {
        correctVal = q.a;
        const rawOpts = [correctVal, ...generateDistractors(correctVal)];
        const shuffled = rawOpts
          .map((o) => ({ text: forceLaTeXWrapping(o), raw: o.trim().replace(/\$/g, '').replace(/\\\(|\\\)/g, '') }))
          .sort(() => Math.random() - 0.5);
        
        opts = shuffled.map((x) => x.text);
        aIndex = shuffled.findIndex((x) => x.raw === correctVal.trim().replace(/\$/g, '').replace(/\\\(|\\\)/g, ''));
        if (aIndex === -1) aIndex = 0;
      } else {
        correctVal = opts[q.a] || "";
        opts = opts.map(forceLaTeXWrapping);
      }
    }

    // Try to parse original explanation array
    let steps = [];
    if (q.id.includes('-q15')) {
      steps = getDetailedDotsFactoriseSteps(q.id, q.question, correctVal);
    } else if (q.solutionSteps && q.solutionSteps[0] && Array.isArray(q.solutionSteps[0].explanation)) {
      // General parser
      const rawExpl = q.solutionSteps[0].explanation;
      for (const pair of rawExpl) {
        if (Array.isArray(pair) && pair.length >= 2) {
          let translated = pair[0].trim();
          if (translated === "동류항끼리 모으기" || translated === "동류항 모으기" || translated === "Group like terms") {
            translated = "Group the like terms together";
          } else if (translated === "동류항 정리" || translated === "동류항 계산" || translated === "Simplify") {
            translated = "Simplify the like terms";
          } else if (translated === "식 정리" || translated === "Simplify the expression") {
            translated = "Simplify the expression";
          } else if (translated === "약분하기" || translated === "약분 및 정리") {
            translated = "Simplify by cancelling common factors";
          } else if (translated === "괄호 전개" || translated === "괄호 풀기" || translated === "Expand brackets") {
            translated = "Expand the brackets systematically";
          } else if (translated === "FOIL 전개" || translated === "FOIL expand") {
            translated = "Apply the FOIL method (First, Outer, Inner, Last)";
          } else if (translated === "합차공식 적용" || translated === "Apply DOTS") {
            translated = "Apply the Difference of Two Squares (DOTS) identity: \\\\((a+b)(a-b) = a^2 - b^2\\\\)";
          } else if (translated === "공통인수 묶기" || translated === "공통인수 추출" || translated === "Factor common factor") {
            translated = "Factorise out the highest common factor";
          } else if (translated === "이차식 인수분해" || translated === "대각선 곱셈" || translated === "Factor quadratic") {
            translated = "Factorise the quadratic trinomial using the Cross Method";
          } else if (translated === "통분하기" || translated === "Common denominator") {
            translated = "Write the terms over a common denominator";
          } else if (translated === "이항하기" || translated === "Isolate x") {
            translated = "Isolate the variable term by transposing terms";
          } else if (translated === "양변 나누기" || translated === "Solve for x") {
            translated = "Divide both sides to solve for the variable";
          } else if (translated === "역수 곱하기") {
            translated = "Multiply by the reciprocal of the divisor fraction";
          }

          if (q.id.includes('-q14') || q.id.includes('-q16')) {
            if (translated.toLowerCase().includes('dots') || translated.toLowerCase().includes('squares') || translated.includes('합차')) {
              translated = "Apply the Difference of Two Squares (DOTS) identity: \\\\((a+b)(a-b) = a^2 - b^2\\\\).";
            }
          }

          steps.push({
            explanation: convertDollarToLaTeX(translated),
            workingOut: forceLaTeXWrapping(pair[1]),
            graphData: null
          });
        }
      }
    }

    if (!steps || steps.length === 0) {
      steps = [
        { explanation: "Read the question carefully and determine the appropriate mathematical rules to apply.", workingOut: forceLaTeXWrapping(correctVal) },
        { explanation: "Perform the intermediate algebraic steps systematically.", workingOut: forceLaTeXWrapping(correctVal) },
        { explanation: "Check your calculations and state the final result.", workingOut: forceLaTeXWrapping(correctVal) }
      ];
    }

    let hint = q.hint || undefined;
    if (q.id.includes('-q14') || q.id.includes('-q15') || q.id.includes('-q16')) {
      hint = "Use the Difference of Two Squares identity: \\\\((a+b)(a-b) = a^2 - b^2\\\\).";
    }

    const newQ = {
      id: q.id,
      type: type,
      difficulty: q.difficulty || "medium",
      timeLimit: q.timeLimit || 90,
      t: q.t || "Revision",
      question: cleanedQText,
      opts: type === "multiple_choice" ? opts : undefined,
      a: aIndex,
      hint: hint,
      solutionSteps: steps,
      graphData: q.graphData || null
    };

    if (q.subQuestions) {
      newQ.subQuestions = q.subQuestions.map(sq => {
        let sqType = "multiple_choice";
        let sqOpts = sq.opts || [];
        let sqAIndex = sq.a;
        let sqCorrectVal = "";

        if (typeof sq.a === 'string') {
          sqCorrectVal = sq.a;
          const sqRawOpts = [sqCorrectVal, ...generateDistractors(sqCorrectVal)];
          const sqShuffled = sqRawOpts
            .map((o) => ({ text: forceLaTeXWrapping(o), raw: o.trim().replace(/\$/g, '').replace(/\\\(|\\\)/g, '') }))
            .sort(() => Math.random() - 0.5);
          
          sqOpts = sqShuffled.map((x) => x.text);
          sqAIndex = sqShuffled.findIndex((x) => x.raw === sqCorrectVal.trim().replace(/\$/g, '').replace(/\\\(|\\\)/g, ''));
          if (sqAIndex === -1) sqAIndex = 0;
        } else {
          sqCorrectVal = sqOpts[sq.a] || "";
          sqOpts = sqOpts.map(forceLaTeXWrapping);
        }

        let sqSteps = [];
        if (sq.solutionSteps && sq.solutionSteps[0] && Array.isArray(sq.solutionSteps[0].explanation)) {
          // General parser
          const rawExpl = sq.solutionSteps[0].explanation;
          for (const pair of rawExpl) {
            if (Array.isArray(pair) && pair.length >= 2) {
              sqSteps.push({
                explanation: convertDollarToLaTeX(pair[0]),
                workingOut: forceLaTeXWrapping(pair[1]),
                graphData: null
              });
            }
          }
        }
        if (!sqSteps || sqSteps.length === 0) {
          sqSteps = [
            { explanation: "Analyze the sub-question and set up the corresponding calculation.", workingOut: forceLaTeXWrapping(sqCorrectVal) },
            { explanation: "Perform the intermediate steps to simplify the equation.", workingOut: forceLaTeXWrapping(sqCorrectVal) },
            { explanation: "Confirm the final answer.", workingOut: forceLaTeXWrapping(sqCorrectVal) }
          ];
        }

        let sqHint = sq.hint || undefined;
        if (sq.id.includes('-q14') || sq.id.includes('-q15') || sq.id.includes('-q16')) {
          sqHint = "Use the Difference of Two Squares identity: \\\\((a+b)(a-b) = a^2 - b^2\\\\).";
        }

        return {
          id: sq.id,
          type: sqType,
          difficulty: sq.difficulty || "medium",
          timeLimit: sq.timeLimit || 90,
          t: sq.t || "Revision",
          question: convertDollarToLaTeX(sq.question),
          opts: sqOpts,
          a: sqAIndex,
          hint: sqHint,
          solutionSteps: sqSteps,
          graphData: sq.graphData || null
        };
      });
    }

    newQuestions.push(newQ);
  }

  const newContent = `export const Y10_CH3J_QUESTIONS = ${JSON.stringify(newQuestions, null, 2)};\n`;
  fs.writeFileSync(FILE, newContent);
  console.log(`Successfully rewrote ${newQuestions.length} questions.`);
  process.exit(0);
}).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
