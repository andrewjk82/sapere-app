import { db } from '../firebase/config.js';
import { collection, getDocs, query, where, doc, writeBatch } from 'firebase/firestore';
import { allQuestions as questions3A } from './importYear7Ch3A.js';

export const allQuestions = [
  ...questions3A,
  
  // ==========================================
  // Q1: Write algebraically (Topic: 3A)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write an algebraic expression for: The product of $8$ and $w$.`,
    options: ["$8w$", "$8 + w$", "$w - 8$", "$\\frac{w}{8}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify the operation</strong><br>"Product" indicates multiplication.</p><p><strong>Step 2: Apply algebraic notation</strong><br>In algebra, we omit the multiplication sign when multiplying a number and a variable: $8 \\times w = 8w$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write an algebraic expression for the product of the variables $p$ and $q$.`,
    options: ["$pq$", "$p + q$", "$p - q$", "$\\frac{p}{q}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand variable multiplication</strong><br>The product of two variables is written by placing them side-by-side without a multiplication sign.</p><p><strong>Step 2: Write the expression</strong><br>The product of $p$ and $q$ is written as $pq$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write an algebraic expression for the difference of $y$ and $12$ (where $y$ is greater than $12$).`,
    options: ["$y - 12$", "$12 - y$", "$y + 12$", "$12y$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify the operation</strong><br>"Difference" indicates subtraction.</p><p><strong>Step 2: Set the order</strong><br>Since $y$ is greater than $12$, the larger value comes first to keep the difference positive: $y - 12$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Write an algebraic expression for: $k$ is multiplied by $7$, and $4$ is added to the result.`,
    options: ["$7k + 4$", "$7(k + 4)$", "$4k + 7$", "$k + 28$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Perform the first operation</strong><br>Multiply $k$ by $7$ to get $7w$ or $7k$.</p><p><strong>Step 2: Perform the second operation</strong><br>Add $4$ to that product: $7k + 4$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q2: Chocolates removed (Topic: 3A)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `A bag of marbles contains $m$ marbles. How many marbles are left in the bag if $8$ are removed?`,
    options: ["$m - 8$", "$8 - m$", "$m + 8$", "$\\frac{m}{8}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Analyze the word problem</strong><br>We start with a total of $m$ items. Removing items represents subtraction.</p><p><strong>Step 2: Construct the expression</strong><br>If $8$ marbles are taken away from $m$, the remaining marbles are $m - 8$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q3: Boxes and Mice (Topic: 3A)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `There are $8$ jars, each containing $y$ jellybeans. How many jellybeans are there in total?`,
    options: ["$8y$", "$8 + y$", "$y - 8$", "$\\frac{y}{8}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the operation</strong><br>When you have a fixed number of containers with an equal number of items in each, you multiply to find the total: $\\text{Total} = \\text{number of jars} \\times \\text{jellybeans per jar}$.</p><p><strong>Step 2: Write the expression</strong><br>$8 \\times y = 8y$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q4: Remove multiplication signs (Topic: 3B)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Write the product $5 \\times a \\times 8 \\times a$ in standard algebraic notation without multiplication signs.`,
    options: ["$40a^2$", "$13a^2$", "$40a$", "$5a8a$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Group coefficients</strong><br>Multiply the numeric coefficients: $5 \\times 8 = 40$.</p><p><strong>Step 2: Group variables</strong><br>Multiply the matching variables: $a \\times a = a^2$.</p><p><strong>Step 3: Combine them</strong><br>Combine the parts together: $40a^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Write the product $6 \\times y \\times 9 \\times y$ in standard algebraic notation without multiplication signs.`,
    options: ["$54y^2$", "$15y^2$", "$54y$", "$6y9y$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numeric coefficients</strong><br>$6 \\times 9 = 54$.</p><p><strong>Step 2: Multiply variables</strong><br>$y \\times y = y^2$.</p><p><strong>Step 3: Combine the results</strong><br>We get $54y^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Write the product $5 \\times p \\times p \\times q \\times q \\times q$ without multiplication signs.`,
    options: ["$5p^2q^3$", "$5pq^5$", "$5p^3q^2$", "$5 + p^2 + q^3$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify variables and powers</strong><br>- The numeric coefficient is $5$.<br>- The variable $p$ appears twice: $p \\times p = p^2$.<br>- The variable $q$ appears three times: $q \\times q \\times q = q^3$.</p><p><strong>Step 2: Combine them</strong><br>Write them sequentially: $5p^2q^3$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q5: Quotients as fraction notation (Topic: 3B)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Rewrite the quotient $3a \\div b$ using fraction notation.`,
    options: ["$\\frac{3a}{b}$", "$\\frac{b}{3a}$", "$3ab$", "$3a - b$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand fraction notation</strong><br>Division $A \\div B$ is written as a fraction $\\frac{A}{B}$ in algebra.</p><p><strong>Step 2: Apply to the terms</strong><br>$3a \\div b = \\frac{3a}{b}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Rewrite the quotient $5x \\div 4y$ using fraction notation.`,
    options: ["$\\frac{5x}{4y}$", "$\\frac{4y}{5x}$", "$20xy$", "$5x - 4y$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert to division bar</strong><br>The term being divided ($5x$) goes in the numerator, and the divisor ($4y$) goes in the denominator.</p><p><strong>Step 2: Form the fraction</strong><br>We obtain $\\frac{5x}{4y}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Rewrite the quotient $7m \\div n$ using fraction notation.`,
    options: ["$\\frac{7m}{n}$", "$\\frac{n}{7m}$", "$7mn$", "$7m - n$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Apply division rules</strong><br>The dividend is $7m$ and the divisor is $n$.</p><p><strong>Step 2: Write as fraction</strong><br>$\\frac{7m}{n}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Rewrite the quotient $p \\div 5q$ using fraction notation.`,
    options: ["$\\frac{p}{5q}$", "$\\frac{5q}{p}$", "$5pq$", "$p - 5q$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify numerator and denominator</strong><br>The numerator is $p$ and the denominator is the entire divisor $5q$.</p><p><strong>Step 2: Write the fraction</strong><br>$\\frac{p}{5q}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q6: Standard algebraic notation (Topic: 3B)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write the statement in standard algebraic notation: 'The product of variable $w$ with itself'.`,
    options: ["$w^2$", "$2w$", "$w + w$", "$w \\times w$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Translate the description</strong><br>The product of $w$ with itself is $w \\times w$.</p><p><strong>Step 2: Write using index notation</strong><br>Multiplying a variable by itself is represented as a square: $w^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write the statement in standard algebraic notation: 'The product of $6x$ and $y$'.`,
    options: ["$6xy$", "$6x + y$", "$\\frac{6x}{y}$", "$6x^y$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Omit multiplication symbols</strong><br>In algebra, a product of variables and constants is written side-by-side.</p><p><strong>Step 2: Combine</strong><br>$6x \\times y = 6xy$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Write the statement in standard algebraic notation: 'The product of $5m$ and $4m$'.`,
    options: ["$20m^2$", "$20m$", "$9m^2$", "$5m4m$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply coefficients</strong><br>$5 \\times 4 = 20$.</p><p><strong>Step 2: Multiply variables</strong><br>$m \\times m = m^2$.</p><p><strong>Step 3: Combine</strong><br>We obtain $20m^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write the statement in standard algebraic notation: 'The quotient of $y$ divided by $9$'.`,
    options: ["$\\frac{y}{9}$", "$9y$", "$y - 9$", "$y + 9$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand standard quotient notation</strong><br>Quotients are written as fractions in standard algebra.</p><p><strong>Step 2: Form the fraction</strong><br>The variable $y$ is divided by $9$, which is written as $\\frac{y}{9}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3b',
    topicCode: '3B',
    topicTitle: 'Algebraic notation',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write the statement in standard algebraic notation: 'The quotient of $3m$ divided by $n$'.`,
    options: ["$\\frac{3m}{n}$", "$\\frac{n}{3m}$", "$3mn$", "$3m - n$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify numerator and denominator</strong><br>Numerator is $3m$, denominator is $n$.</p><p><strong>Step 2: Combine</strong><br>$\\frac{3m}{n}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q7: Substitution Evaluation (Topic: 3C)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3c',
    topicCode: '3C',
    topicTitle: 'Substitution',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate the expression $3y + 8$ if $y = 4$.`,
    options: ["$20$", "$15$", "$12$", "$24$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Substitute the value</strong><br>Replace $y$ with $4$ in the expression: $3(4) + 8$.</p><p><strong>Step 2: Solve step-by-step</strong><br>Multiply: $3 \\times 4 = 12$.<br>Add: $12 + 8 = 20$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3c',
    topicCode: '3C',
    topicTitle: 'Substitution',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate the expression $12 - k$ if $k = 7$.`,
    options: ["$5$", "$19$", "$-5$", "$84$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Substitute the value</strong><br>Replace $k$ with $7$: $12 - 7$.</p><p><strong>Step 2: Subtract</strong><br>$12 - 7 = 5$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3c',
    topicCode: '3C',
    topicTitle: 'Substitution',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Evaluate the expression $3m^2 + 5$ if $m = 4$.`,
    options: ["$53$", "$149$", "$41$", "$48$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Substitute the value</strong><br>Replace $m$ with $4$: $3(4)^2 + 5$.</p><p><strong>Step 2: Apply order of operations (BODMAS)</strong><br>- First, compute the index (power): $4^2 = 16$.<br>- Next, multiply by $3$: $3 \\times 16 = 48$.<br>- Finally, add $5$: $48 + 5 = 53$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3c',
    topicCode: '3C',
    topicTitle: 'Substitution',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate the expression $30 - 3p$ if $p = 6$.`,
    options: ["$12$", "$18$", "$21$", "$15$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Substitute the value</strong><br>Replace $p$ with $6$: $30 - 3(6)$.</p><p><strong>Step 2: Multiply before subtracting</strong><br>Multiply: $3 \\times 6 = 18$.<br>Subtract: $30 - 18 = 12$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3c',
    topicCode: '3C',
    topicTitle: 'Substitution',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Evaluate the expression $8(q - 4)$ if $q = 9$.`,
    options: ["$40$", "$72$", "$36$", "$48$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Substitute the value</strong><br>Replace $q$ with $9$: $8(9 - 4)$.</p><p><strong>Step 2: Resolve brackets first</strong><br>$9 - 4 = 5$.</p><p><strong>Step 3: Multiply</strong><br>$8 \\times 5 = 40$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q8: Tickets substitution word problem (Topic: 3C)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3c',
    topicCode: '3C',
    topicTitle: 'Substitution',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `The cost of buying $x$ tickets to a theme park is $15x$ dollars. What is the total cost if $60$ tickets are purchased?`,
    options: ["$900$ dollars", "$750$ dollars", "$600$ dollars", "$1000$ dollars"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify the expression and variable value</strong><br>Cost expression $= 15x$. We are given $x = 60$.</p><p><strong>Step 2: Substitute and solve</strong><br>Substitute $x = 60$: $15 \\times 60 = 900$ dollars.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q9: Simplifying like terms (Topic: 3D)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3d',
    topicCode: '3D',
    topicTitle: 'Addition and subtraction of like terms',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Simplify the algebraic expression: $4y + 8y - y$.`,
    options: ["$11y$", "$12y$", "$13y$", "$11$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify like terms</strong><br>All three terms contain the exact same variable part ($y$), so they are like terms.</p><p><strong>Step 2: Combine coefficients</strong><br>Combine coefficients: $4 + 8 - 1 = 11$.<br>Thus, $4y + 8y - y = 11y$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3d',
    topicCode: '3D',
    topicTitle: 'Addition and subtraction of like terms',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Simplify the algebraic expression: $5b + 4b - b$.`,
    options: ["$8b$", "$9b$", "$10b$", "$8$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Combine coefficients of like terms</strong><br>All terms share the variable $b$: $(5 + 4 - 1)b = 8b$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3d',
    topicCode: '3D',
    topicTitle: 'Addition and subtraction of like terms',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Simplify the algebraic expression: $8ab - 5ab + 3ab$.`,
    options: ["$6ab$", "$8ab$", "$10ab$", "$6$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Confirm like terms</strong><br>All terms contain $ab$, so they can be added or subtracted directly.</p><p><strong>Step 2: Simplify coefficients</strong><br>$(8 - 5 + 3)ab = 6ab$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3d',
    topicCode: '3D',
    topicTitle: 'Addition and subtraction of like terms',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Simplify the algebraic expression: $12pq + 4pq - 3qp$.`,
    options: ["$13pq$", "$16pq - 3qp$", "$9pq$", "$13$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand term order equivalence</strong><br>$qp$ is mathematically identical to $pq$ because multiplication is commutative ($p \\times q = q \\times p$). Therefore, all three are like terms.</p><p><strong>Step 2: Combine terms</strong><br>$(12 + 4 - 3)pq = 13pq$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q10: Algebra translation word problems (Topic: 3A)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `A number, $y$, is multiplied by $8$, and $5$ is subtracted from the result. Which algebraic expression represents this statement?`,
    options: ["$8y - 5$", "$5 - 8y$", "$8(y - 5)$", "$\\frac{y}{8} - 5$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Apply first operation</strong><br>A number $y$ multiplied by $8$ gives $8y$.</p><p><strong>Step 2: Apply second operation</strong><br>Subtracting $5$ from that result gives $8y - 5$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `$6$ is subtracted from a number, $w$, and the result is multiplied by $7$. Which algebraic expression represents this statement?`,
    options: ["$7(w - 6)$", "$7w - 6$", "$7 - 6w$", "$6 - 7w$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Read the order carefully</strong><br>"$6$ is subtracted from $w$" happens first: $(w - 6)$. We wrap this in parentheses to guarantee it is computed first.</p><p><strong>Step 2: Multiply the result</strong><br>Multiplying the entire result by $7$ is written as $7(w - 6)$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q11: Squares and multiplication statements (Topic: 3A)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `A number, $x$, is squared, and the result is multiplied by $5$. Which algebraic expression represents this statement?`,
    options: ["$5x^2$", "$(5x)^2$", "$5 + x^2$", "$x^2 \\times 5x$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Square the number</strong><br>"$x$ is squared" is written as $x^2$.</p><p><strong>Step 2: Multiply by 5</strong><br>Multiplying $x^2$ by $5$ gives $5x^2$. Note that only $x$ is squared, not $5$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3a',
    topicCode: '3A',
    topicTitle: 'Using algebra',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `A number, $x$, is multiplied by $5$, and the result is squared. Which algebraic expression represents this statement?`,
    options: ["$(5x)^2$", "$5x^2$", "$25x$", "$5 + x^2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Perform multiplication first</strong><br>"$x$ is multiplied by $5$" gives $5x$.</p><p><strong>Step 2: Square the entire result</strong><br>To square the entire result of the multiplication, we must wrap $5x$ in brackets before adding the square power: $(5x)^2$. This simplifies to $25x^2$, which is different from $5x^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q12: Removing brackets (Topic: 3E)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3e',
    topicCode: '3E',
    topicTitle: 'Brackets',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Rewrite the expression $(4a)^2$ without brackets.`,
    options: ["$16a^2$", "$4a^2$", "$16a$", "$8a^2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Apply index law to products</strong><br>Recall the algebraic law: $(xy)^n = x^n y^n$. Every factor inside the brackets is raised to the power.</p><p><strong>Step 2: Expand terms</strong><br>$(4a)^2 = 4^2 \\times a^2 = 16a^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3e',
    topicCode: '3E',
    topicTitle: 'Brackets',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Rewrite the expression $(5y)^2$ without brackets.`,
    options: ["$25y^2$", "$5y^2$", "$25y$", "$10y^2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Distribute exponent</strong><br>$(5y)^2 = 5^2 \\times y^2 = 25y^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3e',
    topicCode: '3E',
    topicTitle: 'Brackets',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Rewrite the expression $(12w)^2$ without brackets.`,
    options: ["$144w^2$", "$12w^2$", "$144w$", "$24w^2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Square both factors</strong><br>$(12w)^2 = 12^2 \\times w^2 = 144w^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3e',
    topicCode: '3E',
    topicTitle: 'Brackets',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Rewrite the expression $(9b)^2$ without brackets.`,
    options: ["$81b^2$", "$9b^2$", "$81b$", "$18b^2$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Square both factors</strong><br>$(9b)^2 = 9^2 \\times b^2 = 81b^2$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q13: Multiples patterns (Topic: 3G)
  // ==========================================
  {
    chapterId: 'y7-3',
    chapterTitle: 'Chapter 3: An introduction to algebra',
    topicId: 'y7-3g',
    topicCode: '3G',
    topicTitle: 'Describing arrays, areas and number patterns',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Assuming that $k$ is a multiple of $8$, what are the next two multiples of $8$?`,
    options: ["$k + 8$ and $k + 16$", "$k + 1$ and $k + 2$", "$8k$ and $16k$", "$k + 8$ and $k + 12$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand multiples progression</strong><br>Consecutive multiples of a number $N$ increase by $N$ at each step (e.g., multiples of 8 are $8, 16, 24 \\dots$ which increase by 8).</p><p><strong>Step 2: Construct subsequent terms</strong><br>- First subsequent multiple: $k + 8$<br>- Second subsequent multiple: $(k + 8) + 8 = k + 16$.</p></div>`,
    createdAt: new Date().toISOString()
  }
];

export const importYear7Ch3 = async (forceReset = false) => {
  console.log('[Ch3 Year 7 Import] Starting physical migration via writeBatch...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('[Ch3 Year 7 Import] forceReset is TRUE. Deleting existing questions for chapter y7-3...');
      const oldSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-3')));
      
      if (!oldSnap.empty) {
        const deleteBatch = writeBatch(db);
        oldSnap.docs.forEach((d) => {
          deleteBatch.delete(d.ref);
        });
        await deleteBatch.commit();
        console.log(`[Ch3 Year 7 Import] Deleted ${oldSnap.docs.length} old questions successfully.`);
      }
    }

    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-3')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    const insertBatch = writeBatch(db);
    let needCommit = false;
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        const newDocRef = doc(collection(db, 'questions'));
        insertBatch.set(newDocRef, q);
        importedCount++;
        needCommit = true;
      }
    }
    
    if (needCommit) {
      await insertBatch.commit();
      console.log(`[Ch3 Year 7 Import] Batch write successful. Inserted ${importedCount} questions.`);
    } else {
      console.log('[Ch3 Year 7 Import] All questions are already up to date.');
    }
  } catch (error) {
    console.error('[Ch3 Year 7 Import] ERROR DURING BATCH SYNC:', error);
    throw error;
  }
  
  return importedCount;
};
