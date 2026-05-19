import fs from 'fs';

console.log('Starting merge of 22 new Hard questions...');

const filePath = 'src/scripts/importYear11AdvCh8.js';
if (!fs.existsSync(filePath)) {
  console.error(`Error: ${filePath} not found!`);
  process.exit(1);
}

// Read existing content
const originalContent = fs.readFileSync(filePath, 'utf8');

// Define the 22 new Hard questions (numbered 19 to 22)
const newQuestions = [
  // --- QUESTION 19 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Expand and simplify, answering without using negative indices: $(y + y^{-1})^2$",
    "options": [
      { "text": "$y^2 + 2 + \\frac{1}{y^2}$", "imageUrl": "" },
      { "text": "$y^2 + \\frac{1}{y^2}$", "imageUrl": "" },
      { "text": "$y^2 + 2y + \\frac{1}{y^2}$", "imageUrl": "" },
      { "text": "$y^2 + y^{-2}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the perfect square expansion formula**\nRecall that:\n$$(a + b)^2 = a^2 + 2ab + b^2$$\n\n**Step 2: Substitute $a = y$ and $b = y^{-1}$ into the formula**\n$$(y + y^{-1})^2 = y^2 + 2(y)(y^{-1}) + (y^{-1})^2$$\n\n**Step 3: Simplify the terms using index laws**\n- For the middle term: $2(y^1 \\times y^{-1}) = 2(y^{1-1}) = 2(y^0) = 2(1) = 2$\n- For the third term: $(y^{-1})^2 = y^{-2} = \\frac{1}{y^2}$\n\nTherefore, the expanded expression is:\n$$y^2 + 2 + \\frac{1}{y^2}$$\n\nThus, the simplified expression is **$y^2 + 2 + \\frac{1}{y^2}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Expand and simplify, answering without using negative indices: $(z - z^{-1})^2$",
    "options": [
      { "text": "$z^2 - 2 + \\frac{1}{z^2}$", "imageUrl": "" },
      { "text": "$z^2 + \\frac{1}{z^2}$", "imageUrl": "" },
      { "text": "$z^2 - 2z + \\frac{1}{z^2}$", "imageUrl": "" },
      { "text": "$z^2 - z^{-2}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the perfect square expansion formula**\nRecall that:\n$$(a - b)^2 = a^2 - 2ab + b^2$$\n\n**Step 2: Substitute $a = z$ and $b = z^{-1}$ into the formula**\n$$(z - z^{-1})^2 = z^2 - 2(z)(z^{-1}) + (z^{-1})^2$$\n\n**Step 3: Simplify the terms using index laws**\n- For the middle term: $-2(z^1 \\times z^{-1}) = -2(z^0) = -2$\n- For the third term: $(z^{-1})^2 = z^{-2} = \\frac{1}{z^2}$\n\nTherefore, the expanded expression is:\n$$z^2 - 2 + \\frac{1}{z^2}$$\n\nThus, the simplified expression is **$z^2 - 2 + \\frac{1}{z^2}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Expand and simplify, answering without using negative indices: $(x^3 - x^{-3})^2$",
    "options": [
      { "text": "$x^6 - 2 + \\frac{1}{x^6}$", "imageUrl": "" },
      { "text": "$x^6 + \\frac{1}{x^6}$", "imageUrl": "" },
      { "text": "$x^6 - 2x^3 + \\frac{1}{x^6}$", "imageUrl": "" },
      { "text": "$x^9 - 2 + \\frac{1}{x^9}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the perfect square expansion formula**\nRecall that:\n$$(a - b)^2 = a^2 - 2ab + b^2$$\n\n**Step 2: Substitute $a = x^3$ and $b = x^{-3}$ into the formula**\n$$(x^3 - x^{-3})^2 = (x^3)^2 - 2(x^3)(x^{-3}) + (x^{-3})^2$$\n\n**Step 3: Simplify the terms using index laws**\n- For the first term: $(x^3)^2 = x^{3 \\times 2} = x^6$\n- For the middle term: $-2(x^3 \\times x^{-3}) = -2(x^{3-3}) = -2(x^0) = -2$\n- For the third term: $(x^{-3})^2 = x^{-6} = \\frac{1}{x^6}$\n\nTherefore, the expanded expression is:\n$$x^6 - 2 + \\frac{1}{x^6}$$\n\nThus, the simplified expression is **$x^6 - 2 + \\frac{1}{x^6}$**."
  },

  // --- QUESTION 20 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $5 \\times 5^y$",
    "options": [
      { "text": "$5^{y+1}$", "imageUrl": "" },
      { "text": "$5^y$", "imageUrl": "" },
      { "text": "$25^y$", "imageUrl": "" },
      { "text": "$5^{y-1}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express the first term with a visible exponent**\n$$5 = 5^1$$\nTherefore, the expression is:\n$$5^1 \\times 5^y$$\n\n**Step 2: Apply the multiplication index law**\nAdd the exponents of like bases:\n$$5^1 \\times 5^y = 5^{1+y} = 5^{y+1}$$\n\nThus, the single power representation is **$5^{y+1}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $2^y + 2^y$",
    "options": [
      { "text": "$2^{y+1}$", "imageUrl": "" },
      { "text": "$2^{2y}$", "imageUrl": "" },
      { "text": "$4^{y}$", "imageUrl": "" },
      { "text": "$4^{2y}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Factor out the common term $2^y$**\nObserve that there are two identical terms being added together:\n$$2^y + 2^y = 2 \\times 2^y$$\n\n**Step 2: Apply the multiplication index law**\nRewrite $2$ as $2^1$:\n$$2^1 \\times 2^y = 2^{1+y} = 2^{y+1}$$\n\nThus, the single power representation is **$2^{y+1}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $7 \\times 7^z$",
    "options": [
      { "text": "$7^{z+1}$", "imageUrl": "" },
      { "text": "$7^z$", "imageUrl": "" },
      { "text": "$49^z$", "imageUrl": "" },
      { "text": "$7^{z-1}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express the first term with a visible exponent**\n$$7 = 7^1$$\nTherefore, the expression is:\n$$7^1 \\times 7^z$$\n\n**Step 2: Apply the multiplication index law**\nAdd the exponents of like bases:\n$$7^1 \\times 7^z = 7^{z+1}$$\n\nThus, the single power representation is **$7^{z+1}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $3^y + 3^y + 3^y$",
    "options": [
      { "text": "$3^{y+1}$", "imageUrl": "" },
      { "text": "$3^{3y}$", "imageUrl": "" },
      { "text": "$9^y$", "imageUrl": "" },
      { "text": "$9^{3y}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Convert addition into multiplication**\nObserve that there are three identical terms being added together:\n$$3^y + 3^y + 3^y = 3 \\times 3^y$$\n\n**Step 2: Apply the multiplication index law**\nRewrite $3$ as $3^1$:\n$$3^1 \\times 3^y = 3^{y+1}$$\n\nThus, the single power representation is **$3^{y+1}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $9 \\times 3^y$",
    "options": [
      { "text": "$3^{y+2}$", "imageUrl": "" },
      { "text": "$3^{2y}$", "imageUrl": "" },
      { "text": "$9^y$", "imageUrl": "" },
      { "text": "$3^{y+3}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express $9$ as a power of base $3$**\n$$9 = 3^2$$\nTherefore, the expression is:\n$$3^2 \\times 3^y$$\n\n**Step 2: Apply the multiplication index law**\nAdd the exponents of like bases:\n$$3^2 \\times 3^y = 3^{y+2}$$\n\nThus, the single power representation is **$3^{y+2}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $81 \\times 3^z$",
    "options": [
      { "text": "$3^{z+4}$", "imageUrl": "" },
      { "text": "$3^{4z}$", "imageUrl": "" },
      { "text": "$81^z$", "imageUrl": "" },
      { "text": "$243^z$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express $81$ as a power of base $3$**\nObserve that:\n$$81 = 3 \\times 3 \\times 3 \\times 3 = 3^4$$\nTherefore, the expression is:\n$$3^4 \\times 3^z$$\n\n**Step 2: Apply the multiplication index law**\nAdd the exponents of like bases:\n$$3^4 \\times 3^z = 3^{z+4}$$\n\nThus, the single power representation is **$3^{z+4}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $64 \\times 2^w$",
    "options": [
      { "text": "$2^{w+6}$", "imageUrl": "" },
      { "text": "$2^{6w}$", "imageUrl": "" },
      { "text": "$64^w$", "imageUrl": "" },
      { "text": "$128^w$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express $64$ as a power of base $2$**\nObserve that:\n$$64 = 2^6$$\nTherefore, the expression is:\n$$2^6 \\times 2^w$$\n\n**Step 2: Apply the multiplication index law**\nAdd the exponents of like bases:\n$$2^6 \\times 2^w = 2^{w+6}$$\n\nThus, the single power representation is **$2^{w+6}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $625 \\times 5^y$",
    "options": [
      { "text": "$5^{y+4}$", "imageUrl": "" },
      { "text": "$5^{4y}$", "imageUrl": "" },
      { "text": "$625^y$", "imageUrl": "" },
      { "text": "$3125^y$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express $625$ as a power of base $5$**\nObserve that:\n$$625 = 5^4$$\nTherefore, the expression is:\n$$5^4 \\times 5^y$$\n\n**Step 2: Apply the multiplication index law**\nAdd the exponents of like bases:\n$$5^4 \\times 5^y = 5^{y+4}$$\n\nThus, the single power representation is **$5^{y+4}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $\\frac{1}{5} \\times 5^z$",
    "options": [
      { "text": "$5^{z-1}$", "imageUrl": "" },
      { "text": "$5^{-z}$", "imageUrl": "" },
      { "text": "$5^{\\frac{z}{5}}$", "imageUrl": "" },
      { "text": "$\\frac{1}{5^z}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express the fraction as a power with a negative index**\nRecall that:\n$$\\frac{1}{a} = a^{-1}$$\nTherefore:\n$$\\frac{1}{5} = 5^{-1}$$\n\nThe expression becomes:\n$$5^{-1} \\times 5^z$$\n\n**Step 2: Apply the multiplication index law**\nAdd the exponents of like bases:\n$$5^{-1} \\times 5^z = 5^{-1+z} = 5^{z-1}$$\n\nThus, the single power representation is **$5^{z-1}$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Write the expression as a single power: $\\frac{1}{16} \\times 2^w$",
    "options": [
      { "text": "$2^{w-4}$", "imageUrl": "" },
      { "text": "$2^{-4w}$", "imageUrl": "" },
      { "text": "$2^{\\frac{w}{16}}$", "imageUrl": "" },
      { "text": "$\\frac{1}{16^w}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express the fraction coefficient as a power of base $2$**\nObserve that:\n$$16 = 2^4 \\implies \\frac{1}{16} = \\frac{1}{2^4} = 2^{-4}$$\n\nThe expression becomes:\n$$2^{-4} \\times 2^w$$\n\n**Step 2: Apply the multiplication index law**\nAdd the exponents of like bases:\n$$2^{-4} \\times 2^w = 2^{-4+w} = 2^{w-4}$$\n\nThus, the single power representation is **$2^{w-4}$**."
  },

  // --- QUESTION 21 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Solve the index equation: $6^{y+4} = 36$",
    "options": [
      { "text": "$y = -2$", "imageUrl": "" },
      { "text": "$y = 2$", "imageUrl": "" },
      { "text": "$y = -6$", "imageUrl": "" },
      { "text": "$y = 0$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides of the equation in terms of the same base**\nObserve that the left-hand base is $6$. We can write $36$ as a power of $6$:\n$$36 = 6^2$$\n\n**Step 2: Equate the powers**\n$$6^{y+4} = 6^2$$\nSince the bases are identical, their exponents must be equal:\n$$y + 4 = 2$$\n\n**Step 3: Solve for $y$**\n$$y = 2 - 4$$\n$$y = -2$$\n\nThus, the solution is **$y = -2$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Solve the index equation: $2^{3z-5} = 128$",
    "options": [
      { "text": "$z = 4$", "imageUrl": "" },
      { "text": "$z = -4$", "imageUrl": "" },
      { "text": "$z = 2$", "imageUrl": "" },
      { "text": "$z = 6$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides of the equation in terms of the same base**\nObserve that the left-hand base is $2$. We can write $128$ as a power of $2$:\n$$128 = 2^7$$\n\n**Step 2: Equate the powers**\n$$2^{3z-5} = 2^7$$\nSince the bases are identical, their exponents must be equal:\n$$3z - 5 = 7$$\n\n**Step 3: Solve for $z$**\n$$3z = 7 + 5$$\n$$3z = 12$$\n$$z = \\frac{12}{3} = 4$$\n\nThus, the solution is **$z = 4$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Solve the index equation: $5^{6-w} = \\frac{1}{5}$",
    "options": [
      { "text": "$w = 7$", "imageUrl": "" },
      { "text": "$w = -7$", "imageUrl": "" },
      { "text": "$w = 5$", "imageUrl": "" },
      { "text": "$w = 6$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides of the equation in terms of the same base**\nThe left-hand base is $5$. Rewrite the right-hand side using the negative index law:\n$$\\frac{1}{5} = 5^{-1}$$\n\n**Step 2: Equate the powers**\n$$5^{6-w} = 5^{-1}$$\nSince the bases are identical, their exponents must be equal:\n$$6 - w = -1$$\n\n**Step 3: Solve for $w$**\n$$-w = -1 - 6$$\n$$-w = -7$$\n$$w = 7$$\n\nThus, the solution is **$w = 7$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Solve the index equation: $3^{3u+1} = \\frac{1}{243}$",
    "options": [
      { "text": "$u = -2$", "imageUrl": "" },
      { "text": "$u = 2$", "imageUrl": "" },
      { "text": "$u = -3$", "imageUrl": "" },
      { "text": "$u = -1$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides of the equation in terms of the same base**\nObserve that the left-hand base is $3$. We can express $243$ as a power of $3$:\n$$243 = 3^5 \\implies \\frac{1}{243} = 3^{-5}$$\n\n**Step 2: Equate the powers**\n$$3^{3u+1} = 3^{-5}$$\nSince the bases are identical, their exponents must be equal:\n$$3u + 1 = -5$$\n\n**Step 3: Solve for $u$**\n$$3u = -5 - 1$$\n$$3u = -6$$\n$$u = \\frac{-6}{3} = -2$$\n\nThus, the solution is **$u = -2$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Solve the index equation: $\\left(\\frac{1}{4}\\right)^{v+2} = 64$",
    "options": [
      { "text": "$v = -5$", "imageUrl": "" },
      { "text": "$v = 5$", "imageUrl": "" },
      { "text": "$v = -1$", "imageUrl": "" },
      { "text": "$v = -3$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides of the equation in terms of base $4$**\n- For the left-hand side: $\\frac{1}{4} = 4^{-1} \\implies \\left(\\frac{1}{4}\\right)^{v+2} = (4^{-1})^{v+2} = 4^{-(v+2)} = 4^{-v-2}$\n- For the right-hand side: $64 = 4^3$\n\n**Step 2: Equate the powers**\n$$4^{-v-2} = 4^3$$\nSince the bases are identical, their exponents must be equal:\n$$-v - 2 = 3$$\n\n**Step 3: Solve for $v$**\n$$-v = 3 + 2$$\n$$-v = 5$$\n$$v = -5$$\n\nThus, the solution is **$v = -5$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Solve the index equation: $\\left(\\frac{1}{3}\\right)^{y+2} = \\left(\\frac{1}{81}\\right)^{y-1}$",
    "options": [
      { "text": "$y = 2$", "imageUrl": "" },
      { "text": "$y = -2$", "imageUrl": "" },
      { "text": "$y = 4$", "imageUrl": "" },
      { "text": "$y = 0$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides of the equation in terms of base $3$**\n- For the left-hand side:\n$$\\frac{1}{3} = 3^{-1} \\implies \\left(\\frac{1}{3}\\right)^{y+2} = (3^{-1})^{y+2} = 3^{-y-2}$$\n- For the right-hand side:\n$$\\frac{1}{81} = \\frac{1}{3^4} = 3^{-4} \\implies \\left(\\frac{1}{81}\\right)^{y-1} = (3^{-4})^{y-1} = 3^{-4(y-1)} = 3^{-4y+4}$$\n\n**Step 2: Equate the powers**\n$$3^{-y-2} = 3^{-4y+4}$$\nSince the bases are identical, their exponents must be equal:\n$$-y - 2 = -4y + 4$$\n\n**Step 3: Solve for $y$**\nAdd $4y$ to both sides:\n$$-y + 4y - 2 = 4$$\n$$3y - 2 = 4$$\n$$3y = 4 + 2$$\n$$3y = 6$$\n$$y = 2$$\n\nThus, the solution is **$y = 2$**."
  },

  // --- QUESTION 22 ---
  {
    "chapterId": "y11a-8",
    "chapterTitle": "Chapter 8: Exponential and logarithmic functions",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-8A",
    "topicCode": "8A",
    "topicTitle": "Indices",
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "The mass of a hypothetical baryon is about $2.5 \\times 10^{-27}\\text{ kg}$. About how many of these baryons are there in $1\\text{ kg}$ of baryons? Answer in scientific notation.",
    "options": [
      { "text": "$4 \\times 10^{26}$", "imageUrl": "" },
      { "text": "$4 \\times 10^{27}$", "imageUrl": "" },
      { "text": "$2.5 \\times 10^{26}$", "imageUrl": "" },
      { "text": "$4 \\times 10^{25}$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Set up the formula for the number of particles**\n$$\\text{Number of particles} = \\frac{\\text{Total mass}}{\\text{Mass of one particle}}$$\n\n**Step 2: Substitute the given values**\n$$\\text{Number of particles} = \\frac{1\\text{ kg}}{2.5 \\times 10^{-27}\\text{ kg}}$$\n\n**Step 3: Calculate the division in scientific notation**\n$$\\text{Number of particles} = \\frac{1}{2.5} \\times \\frac{1}{10^{-27}}$$\nObserve that:\n$$\\frac{1}{2.5} = 0.4$$\n$$\\frac{1}{10^{-27}} = 10^{27}$$\nTherefore:\n$$\\text{Number of particles} = 0.4 \\times 10^{27}$$\n\n**Step 4: Convert to proper scientific notation**\n$$0.4 \\times 10^{27} = 4 \\times 10^{-1} \\times 10^{27} = 4 \\times 10^{26}$$\n\nThus, there are approximately **$4 \\times 10^{26}$** baryons in $1\\text{ kg}$."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "The radius of a hypothetical baryon is about $1.5 \\times 10^{-15}\\text{ m}$. Use the formula for the volume of a sphere $V = \\frac{4}{3}\\pi r^3$ to find its approximate volume in cubic metres ($\\text{m}^3$). Answer in scientific notation (to 2 decimal places).",
    "options": [
      { "text": "$1.41 \\times 10^{-44}\\text{ m}^3$", "imageUrl": "" },
      { "text": "$1.41 \\times 10^{-45}\\text{ m}^3$", "imageUrl": "" },
      { "text": "$4.50 \\times 10^{-44}\\text{ m}^3$", "imageUrl": "" },
      { "text": "$1.41 \\times 10^{-43}\\text{ m}^3$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Write down the volume formula and variables**\n$$V = \\frac{4}{3}\\pi r^3$$\n$$r = 1.5 \\times 10^{-15}\\text{ m}$$\n\n**Step 2: Cube the radius value**\n$$r^3 = (1.5 \\times 10^{-15})^3 = (1.5)^3 \\times (10^{-15})^3$$\n$$(1.5)^3 = 3.375$$\n$$(10^{-15})^3 = 10^{-45}$$\nTherefore:\n$$r^3 = 3.375 \\times 10^{-45}\\text{ m}^3$$\n\n**Step 3: Calculate the volume $V$**\n$$V = \\frac{4}{3} \\times \\pi \\times 3.375 \\times 10^{-45}$$\n$$V = \\left(\\frac{4 \\times 3.375}{3}\\right) \\times \\pi \\times 10^{-45}$$\n$$V = \\left(\\frac{13.5}{3}\\right) \\times \\pi \\times 10^{-45}$$\n$$V = 4.5\\pi \\times 10^{-45}\\text{ m}^3$$\n\n**Step 4: Convert to decimal and proper scientific notation**\nUsing $\\pi \\approx 3.14159$:\n$$V \\approx 4.5 \\times 3.14159265 \\times 10^{-45}$$\n$$V \\approx 14.137 \\times 10^{-45}$$\n$$V \\approx 1.4137 \\times 10^1 \\times 10^{-45} = 1.41 \\times 10^{-44}\\text{ m}^3$$\n\nThus, the approximate volume is **$1.41 \\times 10^{-44}\\text{ m}^3$**."
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
    "difficulty": "hard",
    "type": "multiple_choice",
    "question": "Use the formula $\\text{density} = \\frac{\\text{mass}}{\\text{volume}}$ to find the approximate density of a hypothetical baryon in $\\text{kg/m}^3$ if its mass is $2.5 \\times 10^{-27}\\text{ kg}$ and its volume is $1.4137 \\times 10^{-44}\\text{ m}^3$. Answer in scientific notation (to 2 decimal places).",
    "options": [
      { "text": "$1.77 \\times 10^{17}\\text{ kg/m}^3$", "imageUrl": "" },
      { "text": "$1.77 \\times 10^{16}\\text{ kg/m}^3$", "imageUrl": "" },
      { "text": "$3.53 \\times 10^{17}\\text{ kg/m}^3$", "imageUrl": "" },
      { "text": "$1.77 \\times 10^{18}\\text{ kg/m}^3$", "imageUrl": "" }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Write down the density formula and variables**\n$$\\text{Density} = \\frac{\\text{mass}}{\\text{volume}}$$\n$$\\text{Mass} = 2.5 \\times 10^{-27}\\text{ kg}$$\n$$\\text{Volume} = 1.4137 \\times 10^{-44}\\text{ m}^3$$\n\n**Step 2: Calculate the division in scientific notation**\n$$\\text{Density} = \\frac{2.5 \\times 10^{-27}}{1.4137 \\times 10^{-44}}$$\n$$\\text{Density} = \\left(\\frac{2.5}{1.4137}\\right) \\times 10^{-27 - (-44)}$$\nObserve that:\n$$\\frac{2.5}{1.4137} \\approx 1.7684$$\n$$10^{-27 + 44} = 10^{17}$$\nTherefore:\n$$\\text{Density} \\approx 1.7684 \\times 10^{17}\\text{ kg/m}^3$$\n\n**Step 3: Round to 2 decimal places**\n$$\\text{Density} \\approx 1.77 \\times 10^{17}\\text{ kg/m}^3$$\n\nThus, the approximate density is **$1.77 \\times 10^{17}\\text{ kg/m}^3$**."
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
console.log('🎉 SUCCESS: 22 new Hard questions successfully merged into importYear11AdvCh8.js!');
console.log(`Updated file total size: ${fs.statSync(filePath).size} bytes.`);
process.exit(0);
