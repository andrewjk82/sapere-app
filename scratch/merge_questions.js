import fs from 'fs';

console.log('Starting merge of 63 new Index questions...');

const filePath = 'src/scripts/importYear11AdvCh8.js';
if (!fs.existsSync(filePath)) {
  console.error(`Error: ${filePath} not found!`);
  process.exit(1);
}

// Read existing content
const originalContent = fs.readFileSync(filePath, 'utf8');

// Define the 63 new questions (numbered 12 to 18)
const newQuestions = [
  // --- QUESTION 12 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A huge desert rock is entirely made up of coarse grains of sandstone, each about $2\\text{ mm}^3$ in size. The rock is very roughly a rectangular block $4\\text{ km}$ long, $3\\text{ km}$ wide, and $250\\text{ m}$ high. Find the approximate volume of the rock in cubic kilometres ($\\text{km}^3$).",
    "options": [
      { "text": "$3\\text{ km}^3$", "imageUrl": "" },
      { "text": "$30\\text{ km}^3$", "imageUrl": "" },
      { "text": "$12\\text{ km}^3$", "imageUrl": "" },
      { "text": "$1.2\\text{ km}^3$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert all dimensions to kilometres**\n- Length $= 4\\text{ km}$\n- Width $= 3\\text{ km}$\n- Height $= 250\\text{ m} = \\frac{250}{1000}\\text{ km} = 0.25\\text{ km}$\n\n**Step 2: Calculate the volume using the rectangular prism formula**\n$$V = \\text{Length} \\times \\text{Width} \\times \\text{Height}$$\n$$V = 4 \\times 3 \\times 0.25$$\n$$V = 12 \\times 0.25 = 3\\text{ km}^3$$\n\nThus, the approximate volume of the rock is **$3\\text{ km}^3$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "How many cubic millimetres ($\\text{mm}^3$) are in a cubic kilometre ($\\text{km}^3$)? Express your answer in index notation.",
    "options": [
      { "text": "$10^{18}\\text{ mm}^3$", "imageUrl": "" },
      { "text": "$10^{9}\\text{ mm}^3$", "imageUrl": "" },
      { "text": "$10^{12}\\text{ mm}^3$", "imageUrl": "" },
      { "text": "$10^{15}\\text{ mm}^3$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the conversion factor from kilometres to millimetres**\n$$1\\text{ km} = 1000\\text{ m} = 10^3\\text{ m}$$\n$$1\\text{ m} = 1000\\text{ mm} = 10^3\\text{ mm}$$\nTherefore:\n$$1\\text{ km} = 10^3 \\times 10^3\\text{ mm} = 10^6\\text{ mm}$$\n\n**Step 2: Cube both sides to find the cubic conversion**\n$$1\\text{ km}^3 = (10^6\\text{ mm})^3$$\nApply the index law $(a^m)^n = a^{m \\times n}$:\n$$1\\text{ km}^3 = 10^{6 \\times 3}\\text{ mm}^3 = 10^{18}\\text{ mm}^3$$\n\nThus, there are **$10^{18}\\text{ mm}^3$** in a cubic kilometre."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A huge desert rock has an approximate volume of $3\\text{ km}^3$. It is entirely made up of coarse grains of sandstone, each about $2\\text{ mm}^3$ in size. Find the approximate number of grains of sandstone in the rock. Express your answer in scientific notation.",
    "options": [
      { "text": "$1.5 \\times 10^{18}$", "imageUrl": "" },
      { "text": "$1.5 \\times 10^{15}$", "imageUrl": "" },
      { "text": "$6 \\times 10^{18}$", "imageUrl": "" },
      { "text": "$3 \\times 10^{18}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Recall the volume of the rock in $\\text{mm}^3$**\nFrom our conversion, $1\\text{ km}^3 = 10^{18}\\text{ mm}^3$. Therefore:\n$$\\text{Volume of the rock} = 3\\text{ km}^3 = 3 \\times 10^{18}\\text{ mm}^3$$\n\n**Step 2: Calculate the number of grains**\nDivide the total volume of the rock by the volume of a single grain ($2\\text{ mm}^3$):\n$$\\text{Number of grains} = \\frac{3 \\times 10^{18}\\text{ mm}^3}{2\\text{ mm}^3}$$\n$$\\text{Number of grains} = 1.5 \\times 10^{18}$$\n\nThus, the approximate number of sandstone grains is **$1.5 \\times 10^{18}$**."
  },

  // --- QUESTION 13 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $12^{-1}$",
    "options": [
      { "text": "$\\frac{1}{12}$", "imageUrl": "" },
      { "text": "$12$", "imageUrl": "" },
      { "text": "$-12$", "imageUrl": "" },
      { "text": "$-\\frac{1}{12}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Recall the negative index law**\nFor any non-zero number $a$:\n$$a^{-n} = \\frac{1}{a^n}$$\n\n**Step 2: Apply the law to the expression**\n$$12^{-1} = \\frac{1}{12^1} = \\frac{1}{12}$$\n\nThus, the simplified expression is **$\\frac{1}{12}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $y^{-1}$",
    "options": [
      { "text": "$\\frac{1}{y}$", "imageUrl": "" },
      { "text": "$y$", "imageUrl": "" },
      { "text": "$-y$", "imageUrl": "" },
      { "text": "$-\\frac{1}{y}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Recall the negative index law**\nFor any non-zero variable $y$:\n$$y^{-n} = \\frac{1}{y^n}$$\n\n**Step 2: Apply the law to the expression**\n$$y^{-1} = \\frac{1}{y^1} = \\frac{1}{y}$$\n\nThus, the simplified expression is **$\\frac{1}{y}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $c^{-3}$",
    "options": [
      { "text": "$\\frac{1}{c^3}$", "imageUrl": "" },
      { "text": "$c^3$", "imageUrl": "" },
      { "text": "$-c^3$", "imageUrl": "" },
      { "text": "$-\\frac{1}{c^3}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Recall the negative index law**\nFor any non-zero variable $c$:\n$$c^{-n} = \\frac{1}{c^n}$$\n\n**Step 2: Apply the law to the expression**\n$$c^{-3} = \\frac{1}{c^3}$$\n\nThus, the simplified expression is **$\\frac{1}{c^3}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $-b^{-5}$",
    "options": [
      { "text": "$-\\frac{1}{b^5}$", "imageUrl": "" },
      { "text": "$\\frac{1}{b^5}$", "imageUrl": "" },
      { "text": "$b^5$", "imageUrl": "" },
      { "text": "$-b^5$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand the position of the negative sign**\nThe negative sign is a coefficient of $-1$ and is not affected by the exponent:\n$$-b^{-5} = -1 \\times b^{-5}$$\n\n**Step 2: Apply the negative index law to $b^{-5}$**\n$$b^{-5} = \\frac{1}{b^5}$$\nTherefore:\n$$-b^{-5} = -\\frac{1}{b^5}$$\n\nThus, the simplified expression is **$-\\frac{1}{b^5}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $(5y)^{-1}$",
    "options": [
      { "text": "$\\frac{1}{5y}$", "imageUrl": "" },
      { "text": "$\\frac{5}{y}$", "imageUrl": "" },
      { "text": "$5y$", "imageUrl": "" },
      { "text": "$-\\frac{1}{5y}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Identify the base of the negative exponent**\nBecause the base is inside brackets, the entire term $5y$ is raised to the power of $-1$:\n$$(5y)^{-1} = \\frac{1}{(5y)^1}$$\n\n**Step 2: Simplify the denominator**\n$$\\frac{1}{(5y)^1} = \\frac{1}{5y}$$\n\nThus, the simplified expression is **$\\frac{1}{5y}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $8z^{-1}$",
    "options": [
      { "text": "$\\frac{8}{z}$", "imageUrl": "" },
      { "text": "$\\frac{1}{8z}$", "imageUrl": "" },
      { "text": "$8z$", "imageUrl": "" },
      { "text": "$-\\frac{8}{z}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Identify the base of the negative exponent**\nOnly the variable $z$ is raised to the power of $-1$. The coefficient $8$ is not affected:\n$$8z^{-1} = 8 \\times z^{-1}$$\n\n**Step 2: Apply the negative index law**\n$$z^{-1} = \\frac{1}{z}$$\nTherefore:\n$$8z^{-1} = 8 \\times \\frac{1}{z} = \\frac{8}{z}$$\n\nThus, the simplified expression is **$\\frac{8}{z}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $-6w^{-1}$",
    "options": [
      { "text": "$-\\frac{6}{w}$", "imageUrl": "" },
      { "text": "$-\\frac{1}{6w}$", "imageUrl": "" },
      { "text": "$\\frac{6}{w}$", "imageUrl": "" },
      { "text": "$-6w$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Identify the base of the negative exponent**\nOnly the variable $w$ is raised to the power of $-1$. The coefficient $-6$ remains unchanged:\n$$-6w^{-1} = -6 \\times w^{-1}$$\n\n**Step 2: Apply the negative index law**\n$$w^{-1} = \\frac{1}{w}$$\nTherefore:\n$$-6w^{-1} = -6 \\times \\frac{1}{w} = -\\frac{6}{w}$$\n\nThus, the simplified expression is **$-\\frac{6}{w}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $(4b)^{-2}$",
    "options": [
      { "text": "$\\frac{1}{16b^2}$", "imageUrl": "" },
      { "text": "$\\frac{1}{4b^2}$", "imageUrl": "" },
      { "text": "$\\frac{4}{b^2}$", "imageUrl": "" },
      { "text": "$16b^2$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Identify the base of the negative exponent**\nThe entire term $4b$ inside the brackets is raised to the power of $-2$:\n$$(4b)^{-2} = \\frac{1}{(4b)^2}$$\n\n**Step 2: Expand the denominator**\nApply the power index law $(xy)^n = x^n y^n$:\n$$(4b)^2 = 4^2 \\times b^2 = 16b^2$$\nTherefore:\n$$(4b)^{-2} = \\frac{1}{16b^2}$$\n\nThus, the simplified expression is **$\\frac{1}{16b^2}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $5c^{-2}$",
    "options": [
      { "text": "$\\frac{5}{c^2}$", "imageUrl": "" },
      { "text": "$\\frac{1}{25c^2}$", "imageUrl": "" },
      { "text": "$\\frac{1}{5c^2}$", "imageUrl": "" },
      { "text": "$5c^2$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Identify the base of the negative exponent**\nOnly the variable $c$ is raised to the power of $-2$. The coefficient $5$ is unaffected:\n$$5c^{-2} = 5 \\times c^{-2}$$\n\n**Step 2: Apply the negative index law**\n$$c^{-2} = \\frac{1}{c^2}$$\nTherefore:\n$$5c^{-2} = \\frac{5}{c^2}$$\n\nThus, the simplified expression is **$\\frac{5}{c^2}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the expression as a fraction without negative indices or brackets: $6y^{-4}$",
    "options": [
      { "text": "$\\frac{6}{y^4}$", "imageUrl": "" },
      { "text": "$\\frac{1}{6y^4}$", "imageUrl": "" },
      { "text": "$6y^4$", "imageUrl": "" },
      { "text": "$-\\frac{6}{y^4}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Identify the base of the negative exponent**\nOnly the variable $y$ is raised to the power of $-4$. The coefficient $6$ is unaffected:\n$$6y^{-4} = 6 \\times y^{-4}$$\n\n**Step 2: Apply the negative index law**\n$$y^{-4} = \\frac{1}{y^4}$$\nTherefore:\n$$6y^{-4} = \\frac{6}{y^4}$$\n\nThus, the simplified expression is **$\\frac{6}{y^4}$**."
  },

  // --- QUESTION 14 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $\\frac{1}{y}$",
    "options": [
      { "text": "$y^{-1}$", "imageUrl": "" },
      { "text": "$y^1$", "imageUrl": "" },
      { "text": "$-y$", "imageUrl": "" },
      { "text": "$y^{-2}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Recall the negative index law**\nFor any base $a$:\n$$\\frac{1}{a^n} = a^{-n}$$\n\n**Step 2: Apply the law to the fraction**\n$$\\frac{1}{y} = \\frac{1}{y^1} = y^{-1}$$\n\nThus, the expression in index form is **$y^{-1}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $-\\frac{1}{a^3}$",
    "options": [
      { "text": "$-a^{-3}$", "imageUrl": "" },
      { "text": "$a^{-3}$", "imageUrl": "" },
      { "text": "$-a^3$", "imageUrl": "" },
      { "text": "$a^3$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Separate the negative sign**\n$$-\\frac{1}{a^3} = -1 \\times \\frac{1}{a^3}$$\n\n**Step 2: Apply the negative index law**\n$$\\frac{1}{a^3} = a^{-3}$$\nTherefore:\n$$-\\frac{1}{a^3} = -a^{-3}$$\n\nThus, the expression in index form is **$-a^{-3}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $-\\frac{8}{b}$",
    "options": [
      { "text": "$-8b^{-1}$", "imageUrl": "" },
      { "text": "$8b^{-1}$", "imageUrl": "" },
      { "text": "$-8b$", "imageUrl": "" },
      { "text": "$-\\frac{1}{8}b^{-1}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Separate the coefficient**\n$$-\\frac{8}{b} = -8 \\times \\frac{1}{b}$$\n\n**Step 2: Convert the fraction using the negative index law**\n$$\\frac{1}{b} = b^{-1}$$\nTherefore:\n$$-\\frac{8}{b} = -8b^{-1}$$\n\nThus, the expression in index form is **$-8b^{-1}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $\\frac{15}{c^2}$",
    "options": [
      { "text": "$15c^{-2}$", "imageUrl": "" },
      { "text": "$\\frac{1}{15}c^{-2}$", "imageUrl": "" },
      { "text": "$15c^2$", "imageUrl": "" },
      { "text": "$-15c^{-2}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Separate the coefficient**\n$$\\frac{15}{c^2} = 15 \\times \\frac{1}{c^2}$$\n\n**Step 2: Convert using the negative index law**\n$$\\frac{1}{c^2} = c^{-2}$$\nTherefore:\n$$\\frac{15}{c^2} = 15c^{-2}$$\n\nThus, the expression in index form is **$15c^{-2}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $-\\frac{1}{z^4}$",
    "options": [
      { "text": "$-z^{-4}$", "imageUrl": "" },
      { "text": "$z^{-4}$", "imageUrl": "" },
      { "text": "$-z^4$", "imageUrl": "" },
      { "text": "$z^4$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Separate the negative sign**\n$$-\\frac{1}{z^4} = -1 \\times \\frac{1}{z^4}$$\n\n**Step 2: Apply the negative index law**\n$$\\frac{1}{z^4} = z^{-4}$$\nTherefore:\n$$-\\frac{1}{z^4} = -z^{-4}$$\n\nThus, the expression in index form is **$-z^{-4}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $\\frac{10}{w^6}$",
    "options": [
      { "text": "$10w^{-6}$", "imageUrl": "" },
      { "text": "$10w^6$", "imageUrl": "" },
      { "text": "$\\frac{1}{10}w^{-6}$", "imageUrl": "" },
      { "text": "$-10w^{-6}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Separate the coefficient**\n$$\\frac{10}{w^6} = 10 \\times \\frac{1}{w^6}$$\n\n**Step 2: Convert using the negative index law**\n$$\\frac{1}{w^6} = w^{-6}$$\nTherefore:\n$$\\frac{10}{w^6} = 10w^{-6}$$\n\nThus, the expression in index form is **$10w^{-6}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $\\frac{9}{u^3}$",
    "options": [
      { "text": "$9u^{-3}$", "imageUrl": "" },
      { "text": "$\\frac{1}{9}u^{-3}$", "imageUrl": "" },
      { "text": "$9u^3$", "imageUrl": "" },
      { "text": "$-9u^{-3}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Separate the coefficient**\n$$\\frac{9}{u^3} = 9 \\times \\frac{1}{u^3}$$\n\n**Step 2: Convert using the negative index law**\n$$\\frac{1}{u^3} = u^{-3}$$\nTherefore:\n$$\\frac{9}{u^3} = 9u^{-3}$$\n\nThus, the expression in index form is **$9u^{-3}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $-\\frac{11}{v}$",
    "options": [
      { "text": "$-11v^{-1}$", "imageUrl": "" },
      { "text": "$11v^{-1}$", "imageUrl": "" },
      { "text": "$-11v$", "imageUrl": "" },
      { "text": "$-\\frac{1}{11}v^{-1}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Separate the coefficient**\n$$-\\frac{11}{v} = -11 \\times \\frac{1}{v}$$\n\n**Step 2: Convert using the negative index law**\n$$\\frac{1}{v} = v^{-1}$$\nTherefore:\n$$-\\frac{11}{v} = -11v^{-1}$$\n\nThus, the expression in index form is **$-11v^{-1}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $-\\frac{1}{8y}$",
    "options": [
      { "text": "$-\\frac{1}{8}y^{-1}$", "imageUrl": "" },
      { "text": "$-8y^{-1}$", "imageUrl": "" },
      { "text": "$-\\frac{1}{8}y$", "imageUrl": "" },
      { "text": "$\\frac{1}{8}y^{-1}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Separate the fraction factor**\n$$-\\frac{1}{8y} = -\\frac{1}{8} \\times \\frac{1}{y}$$\n\n**Step 2: Apply the negative index law to $\\frac{1}{y}$**\n$$\\frac{1}{y} = y^{-1}$$\nTherefore:\n$$-\\frac{1}{8y} = -\\frac{1}{8}y^{-1}$$\n\nThus, the expression in index form is **$-\\frac{1}{8}y^{-1}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Write the fraction in index form: $-\\frac{1}{9z^3}$",
    "options": [
      { "text": "$-\\frac{1}{9}z^{-3}$", "imageUrl": "" },
      { "text": "$-9z^{-3}$", "imageUrl": "" },
      { "text": "$-\\frac{1}{9}z^3$", "imageUrl": "" },
      { "text": "$-\\frac{z^{-3}}{3}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Separate the fraction factor**\n$$-\\frac{1}{9z^3} = -\\frac{1}{9} \\times \\frac{1}{z^3}$$\n\n**Step 2: Apply the negative index law to $\\frac{1}{z^3}$**\n$$\\frac{1}{z^3} = z^{-3}$$\nTherefore:\n$$-\\frac{1}{9z^3} = -\\frac{1}{9}z^{-3}$$\n\nThus, the expression in index form is **$-\\frac{1}{9}z^{-3}$**."
  },

  // --- QUESTION 15 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the mixed numeral to an improper fraction, then simplify the expression: $\\left(1\\frac{1}{3}\\right)^{-1}$",
    "options": [
      { "text": "$\\frac{3}{4}$", "imageUrl": "" },
      { "text": "$\\frac{4}{3}$", "imageUrl": "" },
      { "text": "$-\\frac{4}{3}$", "imageUrl": "" },
      { "text": "$-\\frac{3}{4}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the mixed numeral to an improper fraction**\n$$1\\frac{1}{3} = \\frac{1 \\times 3 + 1}{3} = \\frac{4}{3}$$\n\n**Step 2: Apply the negative index exponent $-1$ (reciprocal)**\n$$\\left(1\\frac{1}{3}\\right)^{-1} = \\left(\\frac{4}{3}\\right)^{-1} = \\frac{3}{4}$$\n\nThus, the simplified value is **$\\frac{3}{4}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the mixed numeral to an improper fraction, then simplify the expression: $\\left(1\\frac{2}{5}\\right)^{-1}$",
    "options": [
      { "text": "$\\frac{5}{7}$", "imageUrl": "" },
      { "text": "$\\frac{7}{5}$", "imageUrl": "" },
      { "text": "$-\\frac{7}{5}$", "imageUrl": "" },
      { "text": "$-\\frac{5}{7}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the mixed numeral to an improper fraction**\n$$1\\frac{2}{5} = \\frac{1 \\times 5 + 2}{5} = \\frac{7}{5}$$\n\n**Step 2: Apply the negative index exponent $-1$ (reciprocal)**\n$$\\left(1\\frac{2}{5}\\right)^{-1} = \\left(\\frac{7}{5}\\right)^{-1} = \\frac{5}{7}$$\n\nThus, the simplified value is **$\\frac{5}{7}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the mixed numeral to an improper fraction, then simplify the expression: $\\left(3\\frac{1}{2}\\right)^{-1}$",
    "options": [
      { "text": "$\\frac{2}{7}$", "imageUrl": "" },
      { "text": "$\\frac{7}{2}$", "imageUrl": "" },
      { "text": "$-\\frac{7}{2}$", "imageUrl": "" },
      { "text": "$-\\frac{2}{7}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the mixed numeral to an improper fraction**\n$$3\\frac{1}{2} = \\frac{3 \\times 2 + 1}{2} = \\frac{7}{2}$$\n\n**Step 2: Apply the negative index exponent $-1$ (reciprocal)**\n$$\\left(3\\frac{1}{2}\\right)^{-1} = \\left(\\frac{7}{2}\\right)^{-1} = \\frac{2}{7}$$\n\nThus, the simplified value is **$\\frac{2}{7}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the mixed numeral to an improper fraction, then simplify the expression: $\\left(1\\frac{1}{2}\\right)^{-2}$",
    "options": [
      { "text": "$\\frac{4}{9}$", "imageUrl": "" },
      { "text": "$\\frac{9}{4}$", "imageUrl": "" },
      { "text": "$\\frac{2}{3}$", "imageUrl": "" },
      { "text": "$-\\frac{4}{9}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the mixed numeral to an improper fraction**\n$$1\\frac{1}{2} = \\frac{1 \\times 2 + 1}{2} = \\frac{3}{2}$$\n\n**Step 2: Apply the negative exponent law for fractions**\n$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$\n$$\\left(\\frac{3}{2}\right)^{-2} = \\left(\\frac{2}{3}\\right)^2 = \\frac{2^2}{3^2} = \\frac{4}{9}$$\n\nThus, the simplified value is **$\\frac{4}{9}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the mixed numeral to an improper fraction, then simplify the expression: $\\left(1\\frac{1}{2}\\right)^{-3}$",
    "options": [
      { "text": "$\\frac{8}{27}$", "imageUrl": "" },
      { "text": "$\\frac{27}{8}$", "imageUrl": "" },
      { "text": "$\\frac{4}{9}$", "imageUrl": "" },
      { "text": "$-\\frac{8}{27}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the mixed numeral to an improper fraction**\n$$1\\frac{1}{2} = \\frac{1 \\times 2 + 1}{2} = \\frac{3}{2}$$\n\n**Step 2: Apply the negative exponent law for fractions**\n$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$\n$$\\left(\\frac{3}{2}\right)^{-3} = \\left(\\frac{2}{3}\\right)^3 = \\frac{2^3}{3^3} = \\frac{8}{27}$$\n\nThus, the simplified value is **$\\frac{8}{27}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the mixed numeral to an improper fraction, then simplify the expression: $\\left(1\\frac{1}{4}\\right)^{-2}$",
    "options": [
      { "text": "$\\frac{16}{25}$", "imageUrl": "" },
      { "text": "$\\frac{25}{16}$", "imageUrl": "" },
      { "text": "$\\frac{4}{5}$", "imageUrl": "" },
      { "text": "$-\\frac{16}{25}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the mixed numeral to an improper fraction**\n$$1\\frac{1}{4} = \\frac{1 \\times 4 + 1}{4} = \\frac{5}{4}$$\n\n**Step 2: Apply the negative exponent law for fractions**\n$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$\n$$\\left(\\frac{5}{4}\right)^{-2} = \\left(\\frac{4}{5}\\right)^2 = \\frac{4^2}{5^2} = \\frac{16}{25}$$\n\nThus, the simplified value is **$\\frac{16}{25}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the decimal to a fraction, then simplify the expression: $0.125^{-1}$",
    "options": [
      { "text": "$8$", "imageUrl": "" },
      { "text": "$\\frac{1}{8}$", "imageUrl": "" },
      { "text": "$-8$", "imageUrl": "" },
      { "text": "$4$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the decimal to a simplified fraction**\n$$0.125 = \\frac{125}{1000} = \\frac{1}{8}$$\n\n**Step 2: Apply the negative index exponent $-1$ (reciprocal)**\n$$0.125^{-1} = \\left(\\frac{1}{8}\\right)^{-1} = 8$$\n\nThus, the simplified value is **$8$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the decimal to a fraction, then simplify the expression: $1.6^{-1}$",
    "options": [
      { "text": "$\\frac{5}{8}$", "imageUrl": "" },
      { "text": "$\\frac{8}{5}$", "imageUrl": "" },
      { "text": "$-\\frac{5}{8}$", "imageUrl": "" },
      { "text": "$1.6$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the decimal to a simplified fraction**\n$$1.6 = \\frac{16}{10} = \\frac{8}{5}$$\n\n**Step 2: Apply the negative index exponent $-1$ (reciprocal)**\n$$1.6^{-1} = \\left(\\frac{8}{5}\\right)^{-1} = \\frac{5}{8}$$\n\nThus, the simplified value is **$\\frac{5}{8}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the decimal to a fraction, then simplify the expression: $1.25^{-1}$",
    "options": [
      { "text": "$\\frac{4}{5}$", "imageUrl": "" },
      { "text": "$\\frac{5}{4}$", "imageUrl": "" },
      { "text": "$-\\frac{4}{5}$", "imageUrl": "" },
      { "text": "$0.85$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the decimal to a simplified fraction**\n$$1.25 = \\frac{125}{100} = \\frac{5}{4}$$\n\n**Step 2: Apply the negative index exponent $-1$ (reciprocal)**\n$$1.25^{-1} = \\left(\\frac{5}{4}\\right)^{-1} = \\frac{4}{5}$$\n\nThus, the simplified value is **$\\frac{4}{5}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the decimal to a fraction, then simplify the expression: $1.5^{-2}$",
    "options": [
      { "text": "$\\frac{4}{9}$", "imageUrl": "" },
      { "text": "$\\frac{9}{4}$", "imageUrl": "" },
      { "text": "$\\frac{2}{3}$", "imageUrl": "" },
      { "text": "$-\\frac{4}{9}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the decimal to a simplified fraction**\n$$1.5 = \\frac{15}{10} = \\frac{3}{2}$$\n\n**Step 2: Apply the negative exponent law for fractions**\n$$\\left(\\frac{3}{2}\\right)^{-2} = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$$\n\nThus, the simplified value is **$\\frac{4}{9}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the decimal to a fraction, then simplify the expression: $1.5^{-3}$",
    "options": [
      { "text": "$\\frac{8}{27}$", "imageUrl": "" },
      { "text": "$\\frac{27}{8}$", "imageUrl": "" },
      { "text": "$\\frac{4}{9}$", "imageUrl": "" },
      { "text": "$-\\frac{8}{27}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the decimal to a simplified fraction**\n$$1.5 = \\frac{15}{10} = \\frac{3}{2}$$\n\n**Step 2: Apply the negative exponent law for fractions**\n$$\\left(\\frac{3}{2}\\right)^{-3} = \\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$$\n\nThus, the simplified value is **$\\frac{8}{27}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "First change the decimal to a fraction, then simplify the expression: $0.04^{-2}$",
    "options": [
      { "text": "$625$", "imageUrl": "" },
      { "text": "$25$", "imageUrl": "" },
      { "text": "$\\frac{1}{625}$", "imageUrl": "" },
      { "text": "$-625$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert the decimal to a simplified fraction**\n$$0.04 = \\frac{4}{100} = \\frac{1}{25}$$\n\n**Step 2: Apply the negative exponent law for fractions**\n$$0.04^{-2} = \\left(\\frac{1}{25}\\right)^{-2} = (25)^2 = 625$$\n\nThus, the simplified value is **$625$**."
  },

  // --- QUESTION 16 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Solve the index equation for $x$: $\\left(\\frac{4}{9}\\right)^x = \\frac{16}{81}$",
    "options": [
      { "text": "$x = 2$", "imageUrl": "" },
      { "text": "$x = -2$", "imageUrl": "" },
      { "text": "$x = 4$", "imageUrl": "" },
      { "text": "$x = \\frac{1}{2}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express the right-hand side using the base $\\frac{4}{9}$**\nObserve that:\n$$16 = 4^2 \\quad \\text{and} \\quad 81 = 9^2$$\nTherefore:\n$$\\frac{16}{81} = \\frac{4^2}{9^2} = \\left(\\frac{4}{9}\\right)^2$$\n\n**Step 2: Equate the powers**\n$$\\left(\\frac{4}{9}\\right)^x = \\left(\\frac{4}{9}\\right)^2$$\nBy comparing exponents, we get:\n$$x = 2$$\n\nThus, the solution is **$x = 2$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Solve the index equation for $x$: $\\left(\\frac{6}{7}\\right)^x = \\frac{7}{6}$",
    "options": [
      { "text": "$x = -1$", "imageUrl": "" },
      { "text": "$x = 1$", "imageUrl": "" },
      { "text": "$x = 0$", "imageUrl": "" },
      { "text": "$x = -2$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express the right-hand side using the base $\\frac{6}{7}$**\nObserve that $\\frac{7}{6}$ is the reciprocal of $\\frac{6}{7}$:\n$$\\frac{7}{6} = \\left(\\frac{6}{7}\\right)^{-1}$$\n\n**Step 2: Equate the powers**\n$$\\left(\\frac{6}{7}\\right)^x = \\left(\\frac{6}{7}\\right)^{-1}$$\nBy comparing exponents, we get:\n$$x = -1$$\n\nThus, the solution is **$x = -1$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Solve the index equation for $x$: $\\left(\\frac{2}{7}\\right)^x = \\frac{49}{4}$",
    "options": [
      { "text": "$x = -2$", "imageUrl": "" },
      { "text": "$x = 2$", "imageUrl": "" },
      { "text": "$x = -4$", "imageUrl": "" },
      { "text": "$x = -\\frac{1}{2}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express the right-hand side using the base $\\frac{2}{7}$**\nObserve that:\n$$\\frac{49}{4} = \\frac{7^2}{2^2} = \\left(\\frac{7}{2}\\right)^2$$\nSince $\\frac{7}{2}$ is the reciprocal of $\\frac{2}{7}$:\n$$\\left(\\frac{7}{2}\\right)^2 = \\left(\\left(\\frac{2}{7}\right)^{-1}\\right)^2 = \\left(\\frac{2}{7}\\right)^{-2}$$\n\n**Step 2: Equate the powers**\n$$\\left(\\frac{2}{7}\\right)^x = \\left(\\frac{2}{7}\\right)^{-2}$$\nBy comparing exponents, we get:\n$$x = -2$$\n\nThus, the solution is **$x = -2$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Solve the index equation for $x$: $\\left(\\frac{4}{3}\\right)^x = \\frac{27}{64}$",
    "options": [
      { "text": "$x = -3$", "imageUrl": "" },
      { "text": "$x = 3$", "imageUrl": "" },
      { "text": "$x = -2$", "imageUrl": "" },
      { "text": "$x = -\\frac{1}{3}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express the right-hand side using the base $\\frac{4}{3}$**\nObserve that:\n$$\\frac{27}{64} = \\frac{3^3}{4^3} = \\left(\\frac{3}{4}\\right)^3$$\nSince $\\frac{3}{4}$ is the reciprocal of $\\frac{4}{3}$:\n$$\\left(\\frac{3}{4}\\right)^3 = \\left(\\left(\\frac{4}{3}\right)^{-1}\\right)^3 = \\left(\\frac{4}{3}\right)^{-3}$$\n\n**Step 2: Equate the powers**\n$$\\left(\\frac{4}{3}\\right)^x = \\left(\\frac{4}{3}\\right)^{-3}$$\nBy comparing exponents, we get:\n$$x = -3$$\n\nThus, the solution is **$x = -3$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Solve the index equation for the positive solution of $x$: $x^2 = \\frac{49}{144}$",
    "options": [
      { "text": "$x = \\frac{7}{12}$", "imageUrl": "" },
      { "text": "$x = \\frac{12}{7}$", "imageUrl": "" },
      { "text": "$x = \\frac{49}{144}$", "imageUrl": "" },
      { "text": "$x = -\\frac{7}{12}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Take the square root of both sides**\n$$x^2 = \\frac{49}{144}$$\n$$x = \\pm \\sqrt{\\frac{49}{144}}$$\n\n**Step 2: Calculate the square root**\n$$x = \\pm \\frac{\\sqrt{49}}{\\sqrt{144}} = \\pm \\frac{7}{12}$$\n\n**Step 3: Select the positive solution**\nSince the question asks for the positive solution, we have:\n$$x = \\frac{7}{12}$$\n\nThus, the positive solution is **$x = \\frac{7}{12}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Solve the index equation for the positive solution of $x$: $x^{-2} = \\frac{1}{9}$",
    "options": [
      { "text": "$x = 3$", "imageUrl": "" },
      { "text": "$x = 9$", "imageUrl": "" },
      { "text": "$x = \\frac{1}{3}$", "imageUrl": "" },
      { "text": "$x = -3$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the negative index law**\n$$x^{-2} = \\frac{1}{x^2}$$\nTherefore:\n$$\\frac{1}{x^2} = \\frac{1}{9}$$\n\n**Step 2: Take the reciprocal of both sides**\n$$x^2 = 9$$\n\n**Step 3: Solve for $x$**\n$$x = \\pm \\sqrt{9} = \\pm 3$$\n\n**Step 4: Select the positive solution**\n$$x = 3$$\n\nThus, the positive solution is **$x = 3$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Solve the index equation for $x$: $x^{-3} = 64$",
    "options": [
      { "text": "$x = \\frac{1}{4}$", "imageUrl": "" },
      { "text": "$x = 4$", "imageUrl": "" },
      { "text": "$x = -4$", "imageUrl": "" },
      { "text": "$x = \\frac{1}{64}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the negative index law**\n$$x^{-3} = \\frac{1}{x^3}$$\nTherefore:\n$$\\frac{1}{x^3} = 64$$\n\n**Step 2: Take the reciprocal of both sides**\n$$x^3 = \\frac{1}{64}$$\n\n**Step 3: Solve for $x$ using cube root**\n$$x = \\sqrt[3]{\\frac{1}{64}} = \\frac{\\sqrt[3]{1}}{\\sqrt[3]{64}} = \\frac{1}{4}$$\n\nThus, the solution is **$x = \\frac{1}{4}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Solve the index equation for the positive solution of $x$: $x^{-2} = \\frac{25}{36}$",
    "options": [
      { "text": "$x = \\frac{6}{5}$", "imageUrl": "" },
      { "text": "$x = \\frac{5}{6}$", "imageUrl": "" },
      { "text": "$x = \\frac{36}{25}$", "imageUrl": "" },
      { "text": "$x = -\\frac{6}{5}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the negative index law**\n$$x^{-2} = \\frac{1}{x^2}$$\nTherefore:\n$$\\frac{1}{x^2} = \\frac{25}{36}$$\n\n**Step 2: Take the reciprocal of both sides**\n$$x^2 = \\frac{36}{25}$$\n\n**Step 3: Solve for $x$ by taking the square root**\n$$x = \\pm \\sqrt{\\frac{36}{25}} = \\pm \\frac{6}{5}$$\n\n**Step 4: Select the positive solution**\n$$x = \\frac{6}{5}$$\n\nThus, the positive solution is **$x = \\frac{6}{5}$**."
  },

  // --- QUESTION 17 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer in index form: $5^y \\times 5^4$",
    "options": [
      { "text": "$5^{y+4}$", "imageUrl": "" },
      { "text": "$5^{4y}$", "imageUrl": "" },
      { "text": "$25^{y+4}$", "imageUrl": "" },
      { "text": "$5^{y-4}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the index law for multiplication**\nWhen multiplying terms with the same base, add their exponents:\n$$a^m \\times a^n = a^{m+n}$$\n\n**Step 2: Apply the law to the expression**\n$$5^y \\times 5^4 = 5^{y+4}$$\n\nThus, the simplified form is **$5^{y+4}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer in index form: $6^z \\times 6$",
    "options": [
      { "text": "$6^{z+1}$", "imageUrl": "" },
      { "text": "$6^z$", "imageUrl": "" },
      { "text": "$6^{6z}$", "imageUrl": "" },
      { "text": "$36^{z+1}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Identify the exponent of the second term**\nAny term without a visible exponent has an implicit exponent of $1$:\n$$6 = 6^1$$\nTherefore:\n$$6^z \\times 6 = 6^z \\times 6^1$$\n\n**Step 2: Apply the multiplication index law**\n$$6^z \\times 6^1 = 6^{z+1}$$\n\nThus, the simplified form is **$6^{z+1}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $8^{3a} \\times 8^{-5a}$",
    "options": [
      { "text": "$\\frac{1}{8^{2a}}$", "imageUrl": "" },
      { "text": "$8^{2a}$", "imageUrl": "" },
      { "text": "$8^{-2a}$", "imageUrl": "" },
      { "text": "$\\frac{1}{8^{-2a}}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the multiplication index law**\nAdd the exponents:\n$$8^{3a} \\times 8^{-5a} = 8^{3a + (-5a)} = 8^{-2a}$$\n\n**Step 2: Rewrite the expression without negative indices**\n$$8^{-2a} = \\frac{1}{8^{2a}}$$\n\nThus, the simplified form is **$\\frac{1}{8^{2a}}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, leaving your answer in index form: $4^{3b} \\div 4^5$",
    "options": [
      { "text": "$4^{3b-5}$", "imageUrl": "" },
      { "text": "$4^{3b+5}$", "imageUrl": "" },
      { "text": "$4^{5-3b}$", "imageUrl": "" },
      { "text": "$1^{3b-5}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the division index law**\nWhen dividing terms with the same base, subtract their exponents:\n$$a^m \\div a^n = a^{m-n}$$\n\n**Step 2: Apply the law to the expression**\n$$4^{3b} \\div 4^5 = 4^{3b-5}$$\n\nThus, the simplified form is **$4^{3b-5}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression: $(7^{3y})^4$",
    "options": [
      { "text": "$7^{12y}$", "imageUrl": "" },
      { "text": "$7^{3y+4}$", "imageUrl": "" },
      { "text": "$7^{7y}$", "imageUrl": "" },
      { "text": "$28^{3y}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the power of a power index law**\nWhen raising an index term to another power, multiply their exponents:\n$$(a^m)^n = a^{m \\times n}$$\n\n**Step 2: Apply the law to the expression**\n$$(7^{3y})^4 = 7^{3y \\times 4} = 7^{12y}$$\n\nThus, the simplified form is **$7^{12y}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $(3^{2z})^{-4}$",
    "options": [
      { "text": "$\\frac{1}{3^{8z}}$", "imageUrl": "" },
      { "text": "$3^{-8z}$", "imageUrl": "" },
      { "text": "$3^{8z}$", "imageUrl": "" },
      { "text": "$\\frac{1}{3^{-8z}}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the power of a power index law**\nMultiply the exponents:\n$$(3^{2z})^{-4} = 3^{2z \\times (-4)} = 3^{-8z}$$\n\n**Step 2: Rewrite the expression without negative indices**\n$$3^{-8z} = \\frac{1}{3^{8z}}$$\n\nThus, the simplified form is **$\\frac{1}{3^{8z}}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression: $(4^a)^3 \\times (4^{3a})^2$",
    "options": [
      { "text": "$4^{9a}$", "imageUrl": "" },
      { "text": "$4^{6a}$", "imageUrl": "" },
      { "text": "$16^{9a}$", "imageUrl": "" },
      { "text": "$4^{5a}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Simplify each term using the power of a power law**\n- $(4^a)^3 = 4^{a \\times 3} = 4^{3a}$\n- $(4^{3a})^2 = 4^{3a \\times 2} = 4^{6a}$\n\n**Step 2: Multiply the simplified terms using the multiplication law**\nAdd the exponents:\n$$4^{3a} \\times 4^{6a} = 4^{3a + 6a} = 4^{9a}$$\n\nThus, the simplified form is **$4^{9a}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression: $(5^b)^4 \\div 5^6$",
    "options": [
      { "text": "$5^{4b-6}$", "imageUrl": "" },
      { "text": "$5^{4b+6}$", "imageUrl": "" },
      { "text": "$5^{6-4b}$", "imageUrl": "" },
      { "text": "$1^{4b-6}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Simplify the first term using the power of a power law**\n$$(5^b)^4 = 5^{b \\times 4} = 5^{4b}$$\n\n**Step 2: Divide terms using the division law**\nSubtract the exponents:\n$$5^{4b} \\div 5^6 = 5^{4b-6}$$\n\nThus, the simplified form is **$5^{4b-6}$**."
  },

  // --- QUESTION 18 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $a^3b^2 \\times a^5b^4$",
    "options": [
      { "text": "$a^8b^6$", "imageUrl": "" },
      { "text": "$a^{15}b^8$", "imageUrl": "" },
      { "text": "$a^2b^2$", "imageUrl": "" },
      { "text": "$a^8 + b^6$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Group like bases together**\n$$a^3b^2 \\times a^5b^4 = (a^3 \\times a^5) \\times (b^2 \\times b^4)$$\n\n**Step 2: Apply the multiplication index law to each base**\nAdd the exponents:\n- For base $a$: $a^{3+5} = a^8$\n- For base $b$: $b^{2+4} = b^6$\n\nTherefore:\n$$a^8b^6$$\n\nThus, the simplified expression is **$a^8b^6$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $p^{-6}q^4 \\times p^2q^{-1}$",
    "options": [
      { "text": "$\\frac{q^3}{p^4}$", "imageUrl": "" },
      { "text": "$p^{-4}q^3$", "imageUrl": "" },
      { "text": "$\\frac{p^4}{q^3}$", "imageUrl": "" },
      { "text": "$\\frac{q^5}{p^8}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Group like bases together**\n$$p^{-6}q^4 \\times p^2q^{-1} = (p^{-6} \\times p^2) \\times (q^4 \\times q^{-1})$$\n\n**Step 2: Apply the multiplication law**\nAdd exponents:\n- For base $p$: $p^{-6 + 2} = p^{-4}$\n- For base $q$: $q^{4 + (-1)} = q^3$\n\n**Step 3: Express without negative indices**\n$$p^{-4}q^3 = \\frac{q^3}{p^4}$$\n\nThus, the simplified expression is **$\\frac{q^3}{p^4}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $4my^{-3} \\times 6m^3y^2$",
    "options": [
      { "text": "$\\frac{24m^4}{y}$", "imageUrl": "" },
      { "text": "$24m^4y$", "imageUrl": "" },
      { "text": "$24m^3y^{-1}$", "imageUrl": "" },
      { "text": "$\\frac{10m^4}{y}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Multiply the numeric coefficients**\n$$4 \\times 6 = 24$$\n\n**Step 2: Group and simplify variable bases**\n- For base $m$: $m^1 \\times m^3 = m^{1+3} = m^4$\n- For base $y$: $y^{-3} \\times y^2 = y^{-3+2} = y^{-1}$\n\n**Step 3: Combine and rewrite without negative indices**\n$$24 \\times m^4 \\times y^{-1} = 24m^4y^{-1} = \\frac{24m^4}{y}$$\n\nThus, the simplified expression is **$\\frac{24m^4}{y}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $\\frac{1}{24}u^{-3}v^4 \\times 8uv^{-6}$",
    "options": [
      { "text": "$\\frac{1}{3u^2v^2}$", "imageUrl": "" },
      { "text": "$\\frac{1}{3}u^{-2}v^{-2}$", "imageUrl": "" },
      { "text": "$\\frac{3}{u^2v^2}$", "imageUrl": "" },
      { "text": "$\\frac{u^2}{3v^2}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Multiply numeric coefficients**\n$$\\frac{1}{24} \\times 8 = \\frac{8}{24} = \\frac{1}{3}$$\n\n**Step 2: Multiply variable bases using the multiplication law**\n- For base $u$: $u^{-3} \\times u^1 = u^{-3+1} = u^{-2}$\n- For base $v$: $v^4 \\times v^{-6} = v^{4 + (-6)} = v^{-2}$\n\n**Step 3: Combine and express without negative indices**\n$$\\frac{1}{3} \\times u^{-2} \\times v^{-2} = \\frac{1}{3u^2v^2}$$\n\nThus, the simplified expression is **$\\frac{1}{3u^2v^2}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $45p^3q^5 \\div 9pq^7$",
    "options": [
      { "text": "$\\frac{5p^2}{q^2}$", "imageUrl": "" },
      { "text": "$5p^2q^2$", "imageUrl": "" },
      { "text": "$5p^2q^{-2}$", "imageUrl": "" },
      { "text": "$\\frac{5p^3}{q^2}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Divide the numeric coefficients**\n$$\\frac{45}{9} = 5$$\n\n**Step 2: Divide variable bases using the division law (subtract exponents)**\n- For base $p$: $p^3 \\div p^1 = p^{3-1} = p^2$\n- For base $q$: $q^5 \\div q^7 = q^{5-7} = q^{-2}$\n\n**Step 3: Combine and rewrite without negative indices**\n$$5 \\times p^2 \\times q^{-2} = 5p^2q^{-2} = \\frac{5p^2}{q^2}$$\n\nThus, the simplified expression is **$\\frac{5p^2}{q^2}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $27x^{-3}y^5 \\div 18x^2y^{-4}$",
    "options": [
      { "text": "$\\frac{3y^9}{2x^5}$", "imageUrl": "" },
      { "text": "$\\frac{3y}{2x}$", "imageUrl": "" },
      { "text": "$\\frac{3}{2}x^{-5}y^9$", "imageUrl": "" },
      { "text": "$1.5x^5y^9$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Simplify the numeric coefficient fraction**\n$$\\frac{27}{18} = \\frac{3}{2}$$\n\n**Step 2: Divide variable bases by subtracting exponents**\n- For base $x$: $x^{-3} \\div x^2 = x^{-3-2} = x^{-5}$\n- For base $y$: $y^5 \\div y^{-4} = y^{5 - (-4)} = y^{5+4} = y^9$\n\n**Step 3: Combine and rewrite without negative indices**\n$$\\frac{3}{2} \\times x^{-5} \\times y^9 = \\frac{3y^9}{2x^5}$$\n\nThus, the simplified expression is **$\\frac{3y^9}{2x^5}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $(u^3v^{-4})^4$",
    "options": [
      { "text": "$\\frac{u^{12}}{v^{16}}$", "imageUrl": "" },
      { "text": "$u^{12}v^{-16}$", "imageUrl": "" },
      { "text": "$\\frac{u^7}{v^8}$", "imageUrl": "" },
      { "text": "$u^7v^{-8}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the power of a product index law**\n$$(ab)^n = a^n b^n$$\nApply to each base inside the brackets:\n$$(u^3v^{-4})^4 = (u^3)^4 \\times (v^{-4})^4$$\n\n**Step 2: Multiply the exponents**\n- For base $u$: $u^{3 \\times 4} = u^{12}$\n- For base $v$: $v^{-4 \\times 4} = v^{-16}$\n\n**Step 3: Rewrite without negative indices**\n$$u^{12}v^{-16} = \\frac{u^{12}}{v^{16}}$$\n\nThus, the simplified expression is **$\\frac{u^{12}}{v^{16}}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $(4x^{-3}y^2)^{-1}$",
    "options": [
      { "text": "$\\frac{x^3}{4y^2}$", "imageUrl": "" },
      { "text": "$\\frac{4x^3}{y^2}$", "imageUrl": "" },
      { "text": "$4^{-1}x^3y^{-2}$", "imageUrl": "" },
      { "text": "$\\frac{x^3}{2y^2}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the negative exponent law to each component**\n$$(4x^{-3}y^2)^{-1} = 4^{-1} \\times (x^{-3})^{-1} \\times (y^2)^{-1}$$\n\n**Step 2: Simplify exponents by multiplying**\n- For coefficient: $4^{-1} = \\frac{1}{4}$\n- For base $x$: $x^{-3 \\times (-1)} = x^3$\n- For base $y$: $y^{2 \\times (-1)} = y^{-2}$\n\n**Step 3: Combine and write without negative indices**\n$$\\frac{1}{4} \\times x^3 \\times y^{-2} = \\frac{x^3}{4y^2}$$\n\nThus, the simplified expression is **$\\frac{x^3}{4y^2}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $(2a^3b^2)^4 \\times (ab^3)^3$",
    "options": [
      { "text": "$16a^{15}b^{17}$", "imageUrl": "" },
      { "text": "$8a^{15}b^{17}$", "imageUrl": "" },
      { "text": "$16a^7b^5$", "imageUrl": "" },
      { "text": "$2a^{15}b^{17}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Expand the first bracketed term**\n$$(2a^3b^2)^4 = 2^4 \\times (a^3)^4 \\times (b^2)^4 = 16a^{12}b^8$$\n\n**Step 2: Expand the second bracketed term**\n$$(ab^3)^3 = a^3 \\times (b^3)^3 = a^3b^9$$\n\n**Step 3: Multiply the two expanded terms**\n$$16a^{12}b^8 \\times a^3b^9 = 16 \\times (a^{12} \\times a^3) \\times (b^8 \\times b^9)$$\nAdd exponents for like bases:\n- For base $a$: $12 + 3 = 15$\n- For base $b$: $8 + 9 = 17$\nTherefore:\n$$16a^{15}b^{17}$$\n\nThus, the simplified expression is **$16a^{15}b^{17}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $(3p^{-3}q^2)^{-2} \\times (3pq^{-2})^3$",
    "options": [
      { "text": "$\\frac{3p^9}{q^{10}}$", "imageUrl": "" },
      { "text": "$3p^9q^{-10}$", "imageUrl": "" },
      { "text": "$\\frac{3p^6}{q^4}$", "imageUrl": "" },
      { "text": "$\\frac{p^9}{3q^{10}}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Expand the first term**\n$$(3p^{-3}q^2)^{-2} = 3^{-2} \\times (p^{-3})^{-2} \\times (q^2)^{-2} = \\frac{1}{9}p^6q^{-4}$$\n\n**Step 2: Expand the second term**\n$$(3pq^{-2})^3 = 3^3 \\times p^3 \\times (q^{-2})^3 = 27p^3q^{-6}$$\n\n**Step 3: Multiply the expanded terms**\n$$\\left(\\frac{1}{9}p^6q^{-4}\\right) \\times (27p^3q^{-6}) = \\left(\\frac{1}{9} \\times 27\\right) \\times (p^6 \\times p^3) \\times (q^{-4} \\times q^{-6})$$\n$$= 3 \\times p^{6+3} \\times q^{-4-6}$$\n$$= 3p^9q^{-10}$$\n\n**Step 4: Rewrite without negative indices**\n$$3p^9q^{-10} = \\frac{3p^9}{q^{10}}$$\n\nThus, the simplified expression is **$\\frac{3p^9}{q^{10}}$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression: $(3xy^3)^4 \\div (3x^{-2}y^2)^2$",
    "options": [
      { "text": "$9x^8y^8$", "imageUrl": "" },
      { "text": "$9x^2y^8$", "imageUrl": "" },
      { "text": "$9x^8y^{10}$", "imageUrl": "" },
      { "text": "$27x^8y^8$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Expand the first term**\n$$(3xy^3)^4 = 3^4 \\times x^4 \\times (y^3)^4 = 81x^4y^{12}$$\n\n**Step 2: Expand the second term**\n$$(3x^{-2}y^2)^2 = 3^2 \\times (x^{-2})^2 \\times (y^2)^2 = 9x^{-4}y^4$$\n\n**Step 3: Divide the expanded terms (subtract exponents)**\n$$\\frac{81x^4y^{12}}{9x^{-4}y^4} = \\left(\\frac{81}{9}\\right) \\times x^{4 - (-4)} \\times y^{12 - 4}$$\n$$= 9 \\times x^{4+4} \\times y^8$$\n$$= 9x^8y^8$$\n\nThus, the simplified expression is **$9x^8y^8$**."
  },
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Simplify the expression, giving the answer without negative indices: $(6a^3b^{-3})^3 \\div (3a^{-2}b^2)^2$",
    "options": [
      { "text": "$\\frac{24a^{13}}{b^{13}}$", "imageUrl": "" },
      { "text": "$24a^{13}b^{-13}$", "imageUrl": "" },
      { "text": "$\\frac{24a^5}{b^5}$", "imageUrl": "" },
      { "text": "$\\frac{8a^{13}}{b^{13}}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Expand the first term**\n$$(6a^3b^{-3})^3 = 6^3 \\times (a^3)^3 \\times (b^{-3})^3 = 216a^9b^{-9}$$\n\n**Step 2: Expand the second term**\n$$(3a^{-2}b^2)^2 = 3^2 \\times (a^{-2})^2 \\times (b^2)^2 = 9a^{-4}b^4$$\n\n**Step 3: Divide the expanded terms (subtract exponents)**\n$$\\frac{216a^9b^{-9}}{9a^{-4}b^4} = \\left(\\frac{216}{9}\\right) \\times a^{9 - (-4)} \\times b^{-9 - 4}$$\n$$= 24 \\times a^{9+4} \\times b^{-13}$$\n$$= 24a^{13}b^{-13}$$\n\n**Step 4: Rewrite without negative indices**\n$$24a^{13}b^{-13} = \\frac{24a^{13}}{b^{13}}$$\n\nThus, the simplified expression is **$\\frac{24a^{13}}{b^{13}}$**."
  }
];

// Combine existing questions and the new ones
// The existing file contains "export const questions8A = [" on lines 12+
const parts = originalContent.split('export const questions8A = [');
if (parts.length < 2) {
  console.error('Error: Could not parse questions8A array from importYear11AdvCh8.js.');
  process.exit(1);
}

const prefix = parts[0] + 'export const questions8A = [\n';
const rest = parts[1];

// Find the matching closing bracket for questions8A
// The file ends questions8A with "];\n\nexport const importYear11AdvCh8 ="
const subparts = rest.split('];\n\nexport const importYear11AdvCh8 =');
if (subparts.length < 2) {
  console.error('Error: Could not find closing of questions8A array in importYear11AdvCh8.js.');
  process.exit(1);
}

const existingQuestionsStr = subparts[0].trim();
const suffix = '];\n\nexport const importYear11AdvCh8 =' + subparts[1];

// Format the new questions into JS code string
const newQuestionsStr = newQuestions.map(q => {
  return `  {\n` +
         `    "chapterId": "${q.chapterId}",\n` +
         `    "chapterTitle": "${q.chapterTitle}",\n` +
         `    "year": "${q.year}",\n` +
         `    "course": "${q.course}",\n` +
         `    "isManual": ${q.isManual},\n` +
         `    "topicId": "${q.topicId}",\n` +
         `    "topicCode": "${q.topicCode}",\n` +
         `    "topicTitle": "${q.topicTitle}",\n` +
         `    "difficulty": "${q.difficulty}",\n` +
         `    "type": "${q.type}",\n` +
         `    "question": ${JSON.stringify(q.question)},\n` +
         `    "options": [\n` +
         q.options.map(opt => `      { "text": ${JSON.stringify(opt.text)}, "imageUrl": "" }`).join(',\n') + '\n' +
         `    ],\n` +
         `    "answer": "${q.answer}",\n` +
         `    "solution": ${JSON.stringify(q.solution)}\n` +
         `  }`;
}).join(',\n');

// Build the final complete content
// Ensure correct trailing commas if there are existing questions
const delimiter = existingQuestionsStr.endsWith(',') ? '\n' : ',\n';
const finalContent = prefix + existingQuestionsStr + delimiter + newQuestionsStr + '\n' + suffix;

// Save back to the file
fs.writeFileSync(filePath, finalContent, 'utf8');
console.log('🎉 SUCCESS: 63 new questions successfully merged into importYear11AdvCh8.js!');
console.log(`Updated file total size: ${fs.statSync(filePath).size} bytes.`);
process.exit(0);
