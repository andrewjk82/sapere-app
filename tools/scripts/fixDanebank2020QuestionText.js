import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Extracted from the PDF - MCQ section (Q1-Q10)
const MCQuestions = [
  { num: 1, q: 'What is the gradient of the line $\\frac{x}{3} + \\frac{y}{2} = 1$?' },
  { num: 2, q: 'What is the expression for $\\frac{dy}{dx}$ if $y = \\frac{1}{x^2}$?' },
  { num: 3, q: 'What is the value of $c$ for which the circle $(x-3)^2 + (y-2)^2 = c$ touches the $x$ axis?' },
  { num: 4, q: 'What is the domain of the function $f(x) = \\sqrt{x} + \\frac{1}{\\sqrt{2-x}}$?' },
  { num: 5, q: 'The 7th term of an arithmetic sequence is 45 and the 11th term is 77. Find the first term $(a)$ and the common difference $(d)$.' },
  { num: 6, q: 'The graph of $y = f(x)$ is shown below. $x = A$ and $x = C$ are stationary points, and $x = B$ is a point of inflection. For $A < x < B$, which statement is true?' },
  { num: 7, q: 'Which one of the following is the set of all solutions to $2x^2 - 5x + 2 \\geq 0$?' },
  { num: 8, q: 'What is the change in amplitude and period when the function $f(x) = \\frac{1}{2}\\sin 4x$ is transformed into $g(x) = \\sin 2x$?' },
  { num: 9, q: 'Which statement is true for an ungrouped data set with no outliers?' },
  { num: 10, q: 'What is the value of $\\int_1^2 2^{-x} dx$?' },
];

// Extracted from PDF - Free response section (Q11-Q39)
const FRQuestions = [
  { num: 11, q: 'Use two applications of the trapezoidal rule to find an approximation to the area of the figure below.' },
  { num: 12, q: 'Tim was told that sector $OAB$ has an area of $\\frac{25\\pi}{6}$ square units. The arc $AB$ is $\\frac{5\\pi}{3}$ units long. He was asked to find the exact values of $r$ and $\\theta$.' },
  { num: 13, q: 'In the diagram, $ABC$ is a triangular airfield with $AB = BC = 6.4$ km. The bearing of $B$ from $A$ is $140^\\circ$ and the bearing of $C$ from $B$ is $032^\\circ$.' },
  { num: 14, q: 'The diagram shows the curves $y = 2 - \\frac{3}{x}$ and $y = x - 2$ for $x \\geq 0$.' },
  { num: 15, q: 'Solve the equation $|2\\cos x - 1| = 1$ for $0 \\leq x \\leq \\pi$.' },
  { num: 16, q: '$A(-1, 16)$, $B(-3, -2)$ and $C(5, -2)$ are three points. $D$ is the midpoint of $AB$ and $E$ is the midpoint of $AC$. Show that $DE$ is parallel to $BC$.' },
  { num: 17, q: '200 people took part in a new lie detector test with the following results.' },
  { num: 18, q: 'Find in general form the equation of the normal to the curve $y = \\sqrt{x}$ at the point where $x = 4$.' },
  { num: 19, q: 'Show that $\\log_z 2 = \\frac{1}{\\log_2 x}$ and solve the equation $\\log_3 x = 4 \\log_2 2$.' },
  { num: 20, q: 'If $f\'(x) = 6x^2 + 5x - 1$ and $f(-1) = 5$, find an expression for $f(x)$.' },
  { num: 21, q: 'Consider the function $f(x) = 4x^3 - x^4$.' },
  { num: 22, q: 'The discrete random variable X has a probability distribution shown below and a mean of 2.' },
  { num: 23, q: 'If $y = x \\sin 2x$ find $\\frac{dy}{dx}$.' },
  { num: 24, q: 'Consider the functions $f(x) = e^x$ and $g(x) = \\ln(x-2)$.' },
  { num: 25, q: 'The table below shows the English marks $(x)$ and the Mathematics marks $(y)$ for a class of 12 students (A-L). Only the English mark is available for student L.' },
  { num: 26, q: 'If $y = \\frac{e^x}{x+1}$ find $\\frac{dy}{dx}$.' },
  { num: 27, q: 'Find $\\int \\cos 4x - \\sin x \\, dx$.' },
  { num: 28, q: 'Find in simplest form the limiting sum of the series $\\sin^2 x + \\sin^4 x + \\sin^6 x + \\ldots$ for $0 < x < \\frac{\\pi}{2}$.' },
  { num: 29, q: 'A metal crate of fixed volume $9$ m³ is to be made in the shape of a rectangular prism with length $2x$ metres, width $x$ metres and height $h$ metres.' },
  { num: 30, q: 'The function $f(x) = x^2$ is transformed into a new function whose graph is shown in the diagram below.' },
  { num: 31, q: 'Solve $2 \\sin(3\\theta) = 1$ for $0 \\leq \\theta \\leq \\pi$.' },
  { num: 32, q: 'On the same diagram draw the graphs of $y = \\cos nx$ and $y = 1 - |x|$ for $-3 \\leq x \\leq 3$.' },
  { num: 33, q: 'The graph of the function $y = f(x)$ drawn above, consists of a quarter circle $AB$, a straight line segment $BC$, a horizontal line segment $CD$ and a quarter circle $DE$.' },
  { num: 34, q: 'The table below shows the future values of an annuity, for different rates of interest and for different numbers of compounding periods, where contributions of $1 are made at the end of each compounding period.' },
  { num: 35, q: 'If $y = \\tan^2 x$ find the values of the constants $a$ and $b$ such that $\\frac{d^2y}{dx^2} = ay^2 + by + 2$.' },
  { num: 36, q: 'At time $t$ years after it was purchased the value $\\$V$ of a car is given by $V = 25\\,000 e^{-0.5t}$.' },
  { num: 37, q: 'Ozzie retires with a savings fund of $600\\,000. The fund earns interest at a rate of 3% p.a. compounded monthly. At the end of each month Ozzie withdraws $4000 from the fund. The amount $A_n$ left in the fund after the $n^{th}$ withdrawal is given by $A_n = 600\\,000(1.0025)^n - 4000\\left[1 + 1.0025 + (1.0025)^2 + \\ldots + (1.0025)^{n-1}\\right]$.' },
  { num: 38, q: 'A particle is moving in a straight line. At time $t$ seconds it has displacement $x$ metres from a fixed point $O$ on the line, velocity $v$ ms⁻¹, and acceleration $a$ ms⁻² given by $a = 6t - 12$. Initially the particle is at rest at $O$.' },
  { num: 39, q: 'The diagram shows the graph of the curve $y = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$.' },
];

const allQuestions = [...MCQuestions, ...FRQuestions];

(async () => {
  try {
    const snap = await db.collection('questions').where('topicId', '==', 'y12a-exam-dane').get();
    console.log(`Found ${snap.size} docs in Danebank topic. Processing...`);

    const sourceMap = {};
    snap.docs.forEach((doc) => {
      const d = doc.data();
      if (d.source) {
        // Extract question number from source like "Danebank 2020 Trial Q1"
        const match = d.source.match(/Q(\d+)/);
        if (match) {
          const qNum = parseInt(match[1]);
          sourceMap[qNum] = doc.id;
        }
      }
    });

    console.log(`\nSourceMap found ${Object.keys(sourceMap).length} questions by Q number:`);
    Object.entries(sourceMap).sort((a, b) => a[0] - b[0]).forEach(([qNum, id]) => {
      console.log(`  Q${qNum} => ${id}`);
    });

    let updated = 0;
    let notFound = 0;
    for (const q of allQuestions) {
      const docId = sourceMap[q.num];
      if (docId) {
        await db.collection('questions').doc(docId).update({ question: q.q });
        updated++;
      } else {
        console.log(`⚠️  Q${q.num}: No doc found by source matching`);
        notFound++;
      }
    }

    console.log(`\n✅ Updated ${updated} questions`);
    console.log(`⚠️  Not found ${notFound} questions`);
    process.exit(notFound > 0 ? 1 : 0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
