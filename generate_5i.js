import { writeFileSync } from 'fs';

const questions = [];
const addQ = (q) => questions.push(q);
const t = "Integration giving logarithms";

// Q1
const q1_orig = [
  { q: "\\int \\frac{3}{x} dx", a: "3 \\log_e |x| + C", hint: "Take out the constant factor." },
  { q: "\\int \\frac{7}{x} dx", a: "7 \\log_e |x| + C", hint: "Take out the constant factor." },
  { q: "\\int \\frac{1}{3x} dx", a: "\\frac{1}{3} \\log_e |x| + C", hint: "Rewrite as 1/3 * 1/x." },
  { q: "\\int \\frac{1}{5x} dx", a: "\\frac{1}{5} \\log_e |x| + C", hint: "Rewrite as 1/5 * 1/x." },
  { q: "\\int \\frac{3}{4x} dx", a: "\\frac{3}{4} \\log_e |x| + C", hint: "Rewrite as 3/4 * 1/x." },
  { q: "\\int \\frac{5}{3x} dx", a: "\\frac{5}{3} \\log_e |x| + C", hint: "Rewrite as 5/3 * 1/x." }
];

q1_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q1${letter}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 90,
    question: `First rewrite the integral using the result $\\int \\frac{k}{x} dx = k \\int \\frac{1}{x} dx$. Then find the indefinite integral:\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: item.hint,
    solutionSteps: [
      { explanation: "Rewrite the integral.", workingOut: `\\text{Let } I = ${item.q}` },
      { explanation: "Integrate using standard form.", workingOut: `I = ${item.a}` }
    ],
    graphData: null
  });
});

// Q2
const q2_orig = [
  { q: "\\int \\frac{1}{3x + 2} dx", a: "\\frac{1}{3} \\log_e |3x + 2| + C" },
  { q: "\\int \\frac{1}{4x - 1} dx", a: "\\frac{1}{4} \\log_e |4x - 1| + C" },
  { q: "\\int \\frac{5}{2x + 3} dx", a: "\\frac{5}{2} \\log_e |2x + 3| + C" },
  { q: "\\int \\frac{14}{7x + 2} dx", a: "2 \\log_e |7x + 2| + C" },
  { q: "\\int \\frac{3}{5x + 2} dx", a: "\\frac{3}{5} \\log_e |5x + 2| + C" },
  { q: "\\int \\frac{dx}{4 - x}", a: "- \\log_e |4 - x| + C" },
  { q: "\\int \\frac{dx}{5 - 3x}", a: "-\\frac{1}{3} \\log_e |5 - 3x| + C" },
  { q: "\\int \\frac{3 dx}{2x - 5}", a: "\\frac{3}{2} \\log_e |2x - 5| + C" },
  { q: "\\int \\frac{10 dx}{1 - 2x}", a: "-5 \\log_e |1 - 2x| + C" }
];

q2_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q2${letter}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 90,
    question: `Use the standard form $\\int \\frac{1}{ax + b} dx = \\frac{1}{a} \\log_e |ax + b| + C$ to find the indefinite integral:\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: "Identify a and b in ax + b.",
    solutionSteps: [
      { explanation: "Apply the standard integration form.", workingOut: `I = ${item.a}` }
    ],
    graphData: null
  });
});

// Q3
const q3_orig = [
  { q: "\\int_1^4 \\frac{1}{x} dx", a: "\\log_e 4" },
  { q: "\\int_1^5 \\frac{1}{x} dx", a: "\\log_e 5" },
  { q: "\\int_{-4}^{-2} \\frac{1}{x} dx", a: "\\log_e 2" },
  { q: "\\int_{-6}^{-2} \\frac{1}{x} dx", a: "-\\log_e 3" },
  { q: "\\int_1^3 \\frac{dx}{4x}", a: "\\frac{1}{4} \\log_e 3" },
  { q: "\\int_{-10}^{-2} \\frac{dx}{3x}", a: "-\\frac{1}{3} \\log_e 5" }
];

q3_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q3${letter}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 90,
    question: `Evaluate the definite integral. Simplify your answer where possible.\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: "Use the definite integral formula $[\\log_e |x|]_a^b$.",
    solutionSteps: [
      { explanation: "Integrate.", workingOut: `\\text{Primitive is related to } \\log_e |x|` },
      { explanation: "Evaluate at limits.", workingOut: `\\text{Answer is } ${item.a}` }
    ],
    graphData: null
  });
});

// Q4
const q4_orig = [
  { q: "\\int_0^2 \\frac{dx}{x + 2}", a: "0.6931" },
  { q: "\\int_{-6}^{-4} \\frac{dx}{x + 3}", a: "-1.0986" },
  { q: "\\int_5^{10} \\frac{dx}{x - 3}", a: "1.2528" }
];
q4_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q4${letter}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 90,
    question: `Evaluate the definite integral, then use your calculator to approximate it correct to four significant figures.\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: "Evaluate exactly first, then use a calculator.",
    solutionSteps: [],
    graphData: null
  });
});

// Q5
const q5_orig = [
  { q: "\\int_1^{e^2} \\frac{dx}{x}", a: "2" },
  { q: "\\int_1^{e^3} \\frac{dx}{x}", a: "3" },
  { q: "\\int_1^{e^5} \\frac{dx}{x}", a: "5" },
  { q: "\\int_{\\sqrt{e}}^{e^2} \\frac{dx}{x}", a: "\\frac{3}{2}" }
];
q5_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q5${letter}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 90,
    question: `Evaluate the definite integral. Simplify your answer where possible.\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: "Recall that $\\log_e (e^k) = k$.",
    solutionSteps: [],
    graphData: null
  });
});

// Q6
const q6_orig = [
  { q: "\\frac{x + 2}{x}", a: "x + 2 \\log_e |x|" },
  { q: "\\frac{x + 4}{3x}", a: "\\frac{1}{3} x + \\frac{4}{3} \\log_e |x|" },
  { q: "\\frac{3 - x}{4x}", a: "\\frac{3}{4} \\log_e |x| - \\frac{1}{4} x" },
  { q: "\\frac{1 - 6x}{5x}", a: "\\frac{1}{5} \\log_e |x| - \\frac{6}{5} x" },
  { q: "\\frac{4x^2 - 3x}{x^2}", a: "4x - 3 \\log_e |x|" },
  { q: "\\frac{3x^2 + x - 5}{x}", a: "\\frac{3}{2} x^2 + x - 5 \\log_e |x|" }
];
q6_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q6${letter}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 90,
    question: `Find a primitive of this function by first writing it as separate fractions. (Exclude + C)\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: "Divide each term in the numerator by the denominator.",
    solutionSteps: [],
    graphData: null
  });
});

// Q7
const q7_orig = [
  { q: "\\int \\frac{2x}{x^2 - 4} dx", a: "\\log_e |x^2 - 4| + C" },
  { q: "\\int \\frac{4x + 1}{2x^2 + x} dx", a: "\\log_e |2x^2 + x| + C" },
  { q: "\\int \\frac{2x + 3}{x^2 + 3x - 2} dx", a: "\\log_e |x^2 + 3x - 2| + C" },
  { q: "\\int \\frac{4 - 2x}{4x - x^2} dx", a: "\\log_e |4x - x^2| + C" },
  { q: "\\int \\frac{2x + 4}{x^2 + 4x - 5} dx", a: "\\log_e |x^2 + 4x - 5| + C" },
  { q: "\\int \\frac{8 - 2x}{8x - x^2} dx", a: "\\log_e |8x - x^2| + C" },
  { q: "\\int \\frac{e^{2x}}{1 + e^{2x}} dx", a: "\\frac{1}{2} \\log_e (1 + e^{2x}) + C" },
  { q: "\\int \\frac{e^{-2x}}{1 + e^{-2x}} dx", a: "-\\frac{1}{2} \\log_e (1 + e^{-2x}) + C" },
  { q: "\\int \\frac{e^x - e^{-x}}{e^x + e^{-x}} dx", a: "\\log_e (e^x + e^{-x}) + C" }
];
q7_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q7${letter}`,
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 120,
    question: `Use the result $\\int \\frac{f'(x)}{f(x)} dx = \\log_e |f(x)| + C$ to integrate the expression:\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: "Check if the numerator is a multiple of the derivative of the denominator.",
    solutionSteps: [],
    graphData: null
  });
});

// Q8
const q8_orig = [
  { q: "f'(x) = 1 + \\frac{3}{x} \\text{ and } f(1) = 2", a: "f(x) = x + 3 \\log_e |x| + 1" },
  { q: "f'(x) = 4x + \\frac{1}{2x} \\text{ and } f(1) = 3", a: "f(x) = 2x^2 + \\frac{1}{2} \\log_e |x| + 1" },
  { q: "f'(x) = 4 + \\frac{3}{3x - 1} \\text{ and } f(1) = 0", a: "f(x) = 4x + \\log_e |3x - 1| - 4" },
  { q: "f'(x) = 3x^2 + \\frac{8}{2x + 1} \\text{ and } f(1) = 2 \\ln 3", a: "f(x) = x^3 + 4 \\log_e |2x + 1| - 1 - 2 \\ln 3" }
];
q8_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q8${letter}`,
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 120,
    question: `Find $f(x)$, given that:\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: "Integrate $f'(x)$ and use the initial condition to find C.",
    solutionSteps: [],
    graphData: null
  });
});

// Q9
addQ({
  id: `y12a-5i-q9a`,
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 120,
  question: `a) Find $y$ as a function of $x$ if $y' = \\frac{1}{2x}$ and $y = 2$ when $x = e^4$.`,
  a: "y = \\frac{1}{2} \\log_e x",
  t,
  hint: "Integrate to find y, then substitute the point to find C.",
  solutionSteps: [],
  graphData: null
});
addQ({
  id: `y12a-5i-q9b`,
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 120,
  question: `b) The gradient of a curve is given by $y' = \\frac{3}{x + 2}$, and the curve passes through the point $(0, 2)$. What is the equation of this curve?`,
  a: "y = 3 \\log_e(x + 2) + 2 - 3 \\log_e 2",
  t,
  hint: "Integrate the gradient function to find the curve's equation.",
  solutionSteps: [],
  graphData: null
});
addQ({
  id: `y12a-5i-q9c`,
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 120,
  question: `c) Find $y(x)$, given that $y' = \\frac{2x + 4}{x^2 + 4x + 3}$ and $y = 1$ when $x = 1$. Hence evaluate $y(0)$.`,
  a: "y(0) = 1 - \\log_e(8/3)",
  t,
  hint: "Use the $f'(x)/f(x)$ rule.",
  solutionSteps: [],
  graphData: null
});

// Q10
const q10_orig = [
  { q: "\\int \\frac{1}{3x + b} dx", a: "\\frac{1}{3} \\log_e |3x + b| + C" },
  { q: "\\int \\frac{1}{4x - k} dx", a: "\\frac{1}{4} \\log_e |4x - k| + C" },
  { q: "\\int \\frac{1}{bx + 4} dx", a: "\\frac{1}{b} \\log_e |bx + 4| + C" },
  { q: "\\int \\frac{1}{nx - 3} dx", a: "\\frac{1}{n} \\log_e |nx - 3| + C" }
];
q10_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q10${letter}`,
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 120,
    question: `Use the standard form $\\int \\frac{1}{ax + b} dx = \\frac{1}{a} \\log_e |ax + b| + C$ to find these integrals:\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: "Identify 'a' and 'b' in the denominator.",
    solutionSteps: [],
    graphData: null
  });
});

// Q11
const q11_orig = [
  { q: "\\int \\frac{4x^3}{x^4 - 2} dx", a: "\\log_e |x^4 - 2| + C" },
  { q: "\\int \\frac{5x^4 + 2}{x^5 + 2x - 3} dx", a: "\\log_e |x^5 + 2x - 3| + C" },
  { q: "\\int \\frac{x^2 - 4x}{x^3 - 6x^2} dx", a: "\\frac{1}{3} \\log_e |x^3 - 6x^2| + C" }
];
q11_orig.forEach((item, i) => {
  const letter = String.fromCharCode(97 + i);
  addQ({
    id: `y12a-5i-q11${letter}`,
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 120,
    question: `Use one of the log forms to find:\n\n${letter}) ${item.q}`,
    a: item.a,
    t,
    hint: "Check the derivative of the denominator.",
    solutionSteps: [],
    graphData: null
  });
});

// Q12
addQ({
  id: `y12a-5i-q12a`,
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 120,
  question: `a) Given that the derivative of $f(x)$ is $\\frac{x^2 + 2x + 2}{x}$ and $f(1) = 2$, find $f(x)$.`,
  a: "f(x) = \\frac{1}{2} x^2 + 2x + 2 \\log_e |x| - \\frac{1}{2}",
  t,
  hint: "Divide the numerator by x first.",
  solutionSteps: [],
  graphData: null
});

// Q13
addQ({
  id: `y12a-5i-q13`,
  type: "short_answer",
  difficulty: "hard",
  timeLimit: 180,
  question: `Find $\\int_1^e \\left(x + \\frac{2}{x}\\right)^2 dx$.`,
  a: "\\frac{1}{3} e^3 + 4 - \\frac{4}{e} - \\frac{1}{3}",
  t,
  hint: "Expand the bracket first.",
  solutionSteps: [],
  graphData: null
});

// Q14 (With subQuestions)
addQ({
  id: `y12a-5i-q14`,
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 180,
  question: `a) Differentiate $y = 2x \\log_e x - 2x$.\nb) Hence find $\\int \\log_e x dx$.`,
  a: "b) x \\log_e x - x + C",
  t,
  hint: "Use the product rule for part a).",
  solutionSteps: [],
  graphData: null,
  subQuestions: [
    {
      id: `y12a-5i-q14a`,
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 180,
      question: "a) Differentiate $y = 2x \\log_e x - 2x$.",
      a: "2 \\log_e x",
      t,
      hint: "Use the product rule.",
      solutionSteps: [],
      graphData: null
    },
    {
      id: `y12a-5i-q14b`,
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 180,
      question: "b) Hence find $\\int \\log_e x dx$.",
      a: "x \\log_e x - x + C",
      t,
      hint: "Reverse the differentiation result.",
      solutionSteps: [],
      graphData: null
    }
  ]
});

// Q15 (With subQuestions)
addQ({
  id: `y12a-5i-q15`,
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 180,
  question: `a) Show that the derivative of $y = 3x^2 \\log_e x - 1.5x^2$ is $y' = 6x \\log_e x$.\nb) Hence write down a primitive of $x \\log_e x$.\nc) Use this result to evaluate $\\int_e^{e^2} x \\log_e x dx$.`,
  a: "c) \\frac{1}{4} e^4 (2 \\log_e (e^2) - 1) - \\frac{1}{4} e^2",
  t,
  hint: "Apply the fundamental theorem of calculus.",
  solutionSteps: [],
  graphData: null,
  subQuestions: [
    {
      id: `y12a-5i-q15b`,
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 180,
      question: "b) Write down a primitive of $x \\log_e x$.",
      a: "\\frac{1}{2} x^2 \\log_e x - \\frac{1}{4} x^2",
      t,
      hint: "Use the result from part a).",
      solutionSteps: [],
      graphData: null
    },
    {
      id: `y12a-5i-q15c`,
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 180,
      question: "c) Use this result to evaluate $\\int_e^{e^2} x \\log_e x dx$.",
      a: "\\frac{3}{4} e^4 - \\frac{1}{4} e^2",
      t,
      hint: "Substitute the limits into the primitive.",
      solutionSteps: [],
      graphData: null
    }
  ]
});

// Q16 (With subQuestions)
addQ({
  id: `y12a-5i-q16`,
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 180,
  question: `a) Differentiate $(\\log_e x)^3$ using the chain rule.\nb) Hence determine $\\int \\frac{(\\log_e x)^2}{x} dx$.`,
  a: "b) \\frac{1}{3} (\\log_e x)^3 + C",
  t,
  hint: "Reverse the chain rule result.",
  solutionSteps: [],
  graphData: null,
  subQuestions: [
    {
      id: `y12a-5i-q16a`,
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 180,
      question: "a) Differentiate $(\\log_e x)^3$ using the chain rule.",
      a: "\\frac{3(\\log_e x)^2}{x}",
      t,
      hint: "Let $u = \\log_e x$.",
      solutionSteps: [],
      graphData: null
    },
    {
      id: `y12a-5i-q16b`,
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 180,
      question: "b) Hence determine $\\int \\frac{(\\log_e x)^2}{x} dx$.",
      a: "\\frac{1}{3} (\\log_e x)^3 + C",
      t,
      hint: "Adjust the constant factor.",
      solutionSteps: [],
      graphData: null
    }
  ]
});

// Q17 (With subQuestions)
addQ({
  id: `y12a-5i-q17`,
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 180,
  question: `Differentiate $\\ln(2 \\ln x)$ and hence determine the family of primitives of $\\frac{1}{x \\ln x}$.`,
  a: "\\ln|\\ln x| + C",
  t,
  hint: "Use the chain rule twice.",
  solutionSteps: [],
  graphData: null,
  subQuestions: [
    {
      id: `y12a-5i-q17a`,
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 180,
      question: "Determine the family of primitives of $\\frac{1}{x \\ln x}$.",
      a: "\\ln|\\ln x| + C",
      t,
      hint: "Integrate based on the derivative.",
      solutionSteps: [],
      graphData: null
    }
  ]
});

// Q18 (With subQuestions)
addQ({
  id: `y12a-5i-q18`,
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 180,
  question: `Stella found the primitive of $\\frac{1}{4x}$ by taking out a factor of $\\frac{1}{4}$:\n$\\int \\frac{1}{4x} dx = \\frac{1}{4} \\int \\frac{1}{x} dx = \\frac{1}{4} \\log_e |x| + C_1$\n\nMagar used the standard form:\n$\\int \\frac{1}{4x} dx = \\frac{1}{4} \\log_e |4x| + C_2$\n\nExplain what is going on. Will this affect their result when finding a definite integral?`,
  a: "C_2 = C_1 - \\frac{1}{4} \\log_e 4. No effect on definite integrals.",
  t,
  hint: "Use log laws to expand $\\log_e |4x|$.",
  solutionSteps: [],
  graphData: null,
  subQuestions: [
    {
      id: `y12a-5i-q18a`,
      type: "teacher_review",
      difficulty: "hard",
      timeLimit: 180,
      question: "Explain what is going on.",
      a: "$\\log_e |4x| = \\log_e 4 + \\log_e |x|$, so the difference is absorbed into the constant.",
      t,
      hint: "Expand the logarithm.",
      solutionSteps: [],
      graphData: null
    }
  ]
});

// Q19
addQ({
  id: `y12a-5i-q19a`,
  type: "short_answer",
  difficulty: "hard",
  timeLimit: 180,
  question: `Find the value of $a$ if $a$ is positive and $\\int_1^a \\frac{2}{x} dx = 6$.`,
  a: "e^3",
  t,
  hint: "Evaluate the integral and solve for a.",
  solutionSteps: [],
  graphData: null
});
addQ({
  id: `y12a-5i-q19b`,
  type: "short_answer",
  difficulty: "hard",
  timeLimit: 180,
  question: `Find the value of $a$ if $a$ is negative and $\\int_a^{-1} \\frac{1}{x} dx = -3$.`,
  a: "-e^3",
  t,
  hint: "Evaluate the integral and solve for a.",
  solutionSteps: [],
  graphData: null
});

// Q20
addQ({
  id: `y12a-5i-q20a`,
  type: "short_answer",
  difficulty: "hard",
  timeLimit: 180,
  question: `Although it is not required in this course, it can be shown that $\\int \\frac{1}{\\sqrt{x^2 + a^2}} dx = \\log_e(x + \\sqrt{x^2 + a^2}) + C$.\n\nUse this result to find $\\int_0^3 \\frac{1}{\\sqrt{x^2 + 16}} dx$.`,
  a: "\\log_e 2",
  t,
  hint: "Identify 'a' and substitute the limits.",
  solutionSteps: [],
  graphData: null
});
addQ({
  id: `y12a-5i-q20b`,
  type: "short_answer",
  difficulty: "hard",
  timeLimit: 180,
  question: `Use the result $\\int \\frac{1}{\\sqrt{x^2 - a^2}} dx = \\log_e|x + \\sqrt{x^2 - a^2}| + C$ to find $\\int_5^{13} \\frac{1}{\\sqrt{x^2 - 9}} dx$.`,
  a: "\\log_e 3",
  t,
  hint: "Identify 'a' and substitute the limits.",
  solutionSteps: [],
  graphData: null
});

// Write the file content
const fileContent = `export const Y12A_CH5I_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
writeFileSync('/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12Ch5IQuestions.js', fileContent);
console.log('Done');
