const fs = require('fs');

const qs = JSON.parse(fs.readFileSync('y10_9a_questions.json', 'utf8'));

// A simplified generic step generator based on the expression type
function generateSteps(q) {
  let exprMatch = q.question.match(/\\((.*?)\\)/);
  if (!exprMatch) exprMatch = q.question.match(/:\s*(.*)/);
  let expr = exprMatch ? exprMatch[1].trim() : q.question;
  
  // Clean up any double backslashes for analysis
  const str = expr.replace(/\\\\/g, '\\');
  
  const steps = [];
  
  if (str.includes('\\frac')) {
    steps.push({
      explanation: "Start with the given algebraic fraction.",
      workingOut: `\\(${expr}\\)`
    });
    steps.push({
      explanation: "Separate the coefficients (numbers) from the pronumerals (variables). For the variables, match up the terms with the same base in the numerator and denominator.",
      workingOut: "\\text{Group terms with the same base together.}"
    });
    steps.push({
      explanation: "Apply the index law for division: subtract the index in the denominator from the index in the numerator for each base.",
      workingOut: "\\text{Using } \\frac{a^m}{a^n} = a^{m-n}"
    });
    steps.push({
      explanation: "Simplify the coefficients and the new indices. Finally, ensure all indices in the answer are positive by moving any terms with negative indices to the denominator.",
      workingOut: `\\text{Final answer: } \\(${q.answer}\\)`
    });
  } else if (str.includes('\\times')) {
    steps.push({
      explanation: "Start with the multiplication expression.",
      workingOut: `\\(${expr}\\)`
    });
    steps.push({
      explanation: "Group the coefficients together and group the pronumerals with the same base together.",
      workingOut: "\\text{Commutative law allows us to reorder the terms.}"
    });
    steps.push({
      explanation: "Multiply the coefficients. Then, apply the index law for multiplication: add the indices for terms with the same base.",
      workingOut: "\\text{Using } a^m \\times a^n = a^{m+n}"
    });
    steps.push({
      explanation: "Calculate the sums of the indices. If any resulting indices are negative, write them with a positive index by taking the reciprocal.",
      workingOut: `\\text{Final answer: } \\(${q.answer}\\)`
    });
  } else if (str.includes('^') && str.includes('(')) {
    steps.push({
      explanation: "Start with the power of a power expression.",
      workingOut: `\\(${expr}\\)`
    });
    steps.push({
      explanation: "Apply the power outside the bracket to the coefficient and to every term inside the bracket.",
      workingOut: "\\text{Using } (ab)^n = a^n b^n"
    });
    steps.push({
      explanation: "Apply the index law for a power of a power: multiply the inner index by the outer index.",
      workingOut: "\\text{Using } (a^m)^n = a^{m \\times n}"
    });
    steps.push({
      explanation: "Evaluate the coefficient and simplify the indices. Write any negative indices as positive.",
      workingOut: `\\text{Final answer: } \\(${q.answer}\\)`
    });
  } else {
    // Generic fallback for addition/subtraction of negative indices or simple terms
    steps.push({
      explanation: "Start with the given expression.",
      workingOut: `\\(${expr}\\)`
    });
    steps.push({
      explanation: "Identify any terms with negative indices or zero indices.",
      workingOut: "\\text{Recall that } x^{-n} = \\frac{1}{x^n} \\text{ and } x^0 = 1"
    });
    steps.push({
      explanation: "Rewrite these terms using positive indices. If there are fractions to add or subtract, find a common denominator.",
      workingOut: "\\text{Apply the rules of arithmetic for fractions.}"
    });
    steps.push({
      explanation: "Simplify fully to reach the final answer.",
      workingOut: `\\text{Final answer: } \\(${q.answer}\\)`
    });
  }
  
  // If the answer in the DB is just a number like "1" representing option 1, we shouldn't show it!
  // Oh wait, `q.answer` for multiple choice is the index! We need the actual option text.
  
  return steps;
}

// Wait, I need the options array to get the correct answer text.
// Let me rewrite the script to load from firestore directly.
