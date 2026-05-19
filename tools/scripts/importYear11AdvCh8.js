import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-8',
  chapterTitle: 'Chapter 8: Exponential and logarithmic functions',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

export const questions8A = [
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
    "question": "The town of Silverlake had a small population in 1970, but the population has been increasing by a factor of $2$ every decade since then. By what factor had the population increased from its 1970 value in 1980, 1990, 2000, 2010, and 2020 respectively?",
    "options": [
      {
        "text": "$2, 4, 8, 16, 32$",
        "imageUrl": ""
      },
      {
        "text": "$2, 3, 4, 5, 6$",
        "imageUrl": ""
      },
      {
        "text": "$1, 2, 4, 8, 16$",
        "imageUrl": ""
      },
      {
        "text": "$2, 4, 16, 256, 65536$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand the decade intervals**\nThe years correspond to the following number of decades passed since 1970 ($d$):\n- **1980**: $1$ decade passed\n- **1990**: $2$ decades passed\n- **2000**: $3$ decades passed\n- **2010**: $4$ decades passed\n- **2020**: $5$ decades passed\n\n**Step 2: State the population scaling formula**\nSince the population increases by a factor of $2$ every decade, the increase factor after $d$ decades is:\n$$\\text{Factor} = 2^d$$\n\n**Step 3: Calculate the factors for each decade**\n- **1980 ($d=1$)**: $2^1 = 2$\n- **1990 ($d=2$)**: $2^2 = 4$\n- **2000 ($d=3$)**: $2^3 = 8$\n- **2010 ($d=4$)**: $2^4 = 16$\n- **2020 ($d=5$)**: $2^5 = 32$\n\n**Step 4: Combine the results**\nThe population increase factors are:\n$$2, \\ 4, \\ 8, \\ 16, \\ 32$$"
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
    "question": "The population of Silverlake was $5000$ in 1970 and has been doubling every decade. In which decade did the population first pass $1,000,000$?",
    "options": [
      {
        "text": "$\\\text{2040 to 2050}$",
        "imageUrl": ""
      },
      {
        "text": "$\\\text{2020 to 2030}$",
        "imageUrl": ""
      },
      {
        "text": "$\\\text{2050 to 2060}$",
        "imageUrl": ""
      },
      {
        "text": "$\\\text{2030 to 2040}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Formulate the population model**\nLet $d$ be the number of decades since 1970. The population after $d$ decades is given by:\n$$P(d) = 5000 \\times 2^d$$\n\n**Step 2: Set up the inequality**\nWe want to find when the population exceeds $1,000,000$:\n$$5000 \\times 2^d > 1,000,000$$\n\n**Step 3: Simplify the inequality**\nDivide both sides by $5000$:\n$$2^d > \\frac{1,000,000}{5000}$$\n$$2^d > 200$$\n\n**Step 4: Determine the smallest integer $d$**\nLet's calculate powers of $2$:\n- $2^6 = 64$\n- $2^7 = 128$\n- $2^8 = 256$ (This is the first power of $2$ greater than $200$)\n\nThus, $d = 8$ decades.\n\n**Step 5: Convert decades to calendar years**\n$8$ decades after 1970 corresponds to:\n$$1970 + 80 = 2050$$\n\nSo, the population exceeds $1,000,000$ at the end of the 8th decade, which means it first passes $1,000,000$ during the decade **2040 to 2050**."
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
    "question": "Which of the following represents the correct sequence of powers of $3$ from $3^0$ to $3^5$?",
    "options": [
      {
        "text": "$1, 3, 9, 27, 81, 243$",
        "imageUrl": ""
      },
      {
        "text": "$3, 9, 27, 81, 243, 729$",
        "imageUrl": ""
      },
      {
        "text": "$0, 3, 9, 27, 81, 243$",
        "imageUrl": ""
      },
      {
        "text": "$1, 3, 6, 9, 12, 15$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Calculate each power of 3**\n- $3^0 = 1$ (Any non-zero number to power $0$ is $1$)\n- $3^1 = 3$\n- $3^2 = 3 \\times 3 = 9$\n- $3^3 = 3 \\times 3 \\times 3 = 27$\n- $3^4 = 27 \\times 3 = 81$\n- $3^5 = 81 \\times 3 = 243$\n\n**Step 2: Arrange the list**\nThe correct sequence is:\n$$1, \\ 3, \\ 9, \\ 27, \\ 81, \\ 243$$"
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
    "question": "Express $16^3$ as a power of base $2$.",
    "options": [
      {
        "text": "$2^{12}$",
        "imageUrl": ""
      },
      {
        "text": "$2^7$",
        "imageUrl": ""
      },
      {
        "text": "$2^8$",
        "imageUrl": ""
      },
      {
        "text": "$2^{64}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express $16$ as a power of $2$**\n$$16 = 2^4$$\n\n**Step 2: Substitute this into the expression**\n$$16^3 = (2^4)^3$$\n\n**Step 3: Apply the index law for power of a power**\nMultiply the indices: $(a^m)^n = a^{m \\times n}$\n$$16^3 = 2^{4 \\times 3} = 2^{12}$$"
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
    "question": "Simplify: $3^4$",
    "options": [
      {
        "text": "$81$",
        "imageUrl": ""
      },
      {
        "text": "$12$",
        "imageUrl": ""
      },
      {
        "text": "$27$",
        "imageUrl": ""
      },
      {
        "text": "$64$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Expand the expression**\n$$3^4 = 3 \\times 3 \\times 3 \\times 3$$\n\n**Step 2: State the final value**\n$$81$$"
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
    "question": "Simplify: $5^3$",
    "options": [
      {
        "text": "$125$",
        "imageUrl": ""
      },
      {
        "text": "$15$",
        "imageUrl": ""
      },
      {
        "text": "$25$",
        "imageUrl": ""
      },
      {
        "text": "$75$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Expand the expression**\n$$5^3 = 5 \\times 5 \\times 5$$\n\n**Step 2: State the final value**\n$$125$$"
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
    "question": "Simplify: $\\left(\\frac{3}{4}\\right)^3$",
    "options": [
      {
        "text": "$\\frac{27}{64}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{9}{12}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{9}{64}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{27}{16}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Expand the expression**\n$$\\left(\\frac{3}{4}\\right)^3 = \\frac{3^3}{4^3} = \\frac{27}{64}$$\n\n**Step 2: State the final value**\n$$\\frac{27}{64}$$"
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
    "question": "Simplify: $\\left(\\frac{2}{5}\\right)^4$",
    "options": [
      {
        "text": "$\\frac{16}{625}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{8}{20}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{16}{125}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{8}{625}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Expand the expression**\n$$\\left(\\frac{2}{5}\\right)^4 = \\frac{2^4}{5^4} = \\frac{16}{625}$$\n\n**Step 2: State the final value**\n$$\\frac{16}{625}$$"
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
    "question": "Simplify: $8^0$",
    "options": [
      {
        "text": "$1$",
        "imageUrl": ""
      },
      {
        "text": "$0$",
        "imageUrl": ""
      },
      {
        "text": "$8$",
        "imageUrl": ""
      },
      {
        "text": "$80$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand negative / zero index rules**\n- Zero index: $a^0 = 1$\n- Negative index: $a^{-n} = \\frac{1}{a^n}$\n\n**Step 2: Evaluate the expression**\n$$8^0 = \\text{Any non-zero base raised to the power of } 0 \\text{ is } 1.$$\n\n**Step 3: State final value**\n$$1$$"
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
    "question": "Simplify: $4^{-2}$",
    "options": [
      {
        "text": "$\\frac{1}{16}$",
        "imageUrl": ""
      },
      {
        "text": "$-8$",
        "imageUrl": ""
      },
      {
        "text": "$-16$",
        "imageUrl": ""
      },
      {
        "text": "$16$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand negative / zero index rules**\n- Zero index: $a^0 = 1$\n- Negative index: $a^{-n} = \\frac{1}{a^n}$\n\n**Step 2: Evaluate the expression**\n$$4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$$\n\n**Step 3: State final value**\n$$\\frac{1}{16}$$"
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
    "question": "Simplify: $2^{-4}$",
    "options": [
      {
        "text": "$\\frac{1}{16}$",
        "imageUrl": ""
      },
      {
        "text": "$-8$",
        "imageUrl": ""
      },
      {
        "text": "$-16$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{1}{8}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand negative / zero index rules**\n- Zero index: $a^0 = 1$\n- Negative index: $a^{-n} = \\frac{1}{a^n}$\n\n**Step 2: Evaluate the expression**\n$$2^{-4} = \\frac{1}{2^4} = \\frac{1}{16}$$\n\n**Step 3: State final value**\n$$\\frac{1}{16}$$"
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
    "question": "Simplify: $10^{-3}$",
    "options": [
      {
        "text": "$0.001$",
        "imageUrl": ""
      },
      {
        "text": "$-30$",
        "imageUrl": ""
      },
      {
        "text": "$0.01$",
        "imageUrl": ""
      },
      {
        "text": "$-1000$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand negative / zero index rules**\n- Zero index: $a^0 = 1$\n- Negative index: $a^{-n} = \\frac{1}{a^n}$\n\n**Step 2: Evaluate the expression**\n$$10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000} = 0.001$$\n\n**Step 3: State final value**\n$$0.001$$"
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
    "question": "Simplify: $\\left(\\frac{1}{6}\\right)^{-1}$",
    "options": [
      {
        "text": "$6$",
        "imageUrl": ""
      },
      {
        "text": "$-6$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{1}{6}$",
        "imageUrl": ""
      },
      {
        "text": "$1$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the reciprocal index rule**\nA negative exponent of $-1$ represents taking the reciprocal of the fraction:\n$$\\left(\\frac{a}{b}\\right)^{-1} = \\frac{b}{a}$$\n\n**Step 2: Convert decimal base if applicable**\n$$0.25 = \\frac{1}{4}$$\n\n**Step 3: Calculate the reciprocal**\n$$\\text{Reciprocal of } \\frac{1}{6} \\text{ is } 6$$"
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
    "question": "Simplify: $\\left(\\frac{3}{5}\\right)^{-1}$",
    "options": [
      {
        "text": "$\\frac{5}{3}$",
        "imageUrl": ""
      },
      {
        "text": "$-\\frac{3}{5}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{3}{5}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{25}{9}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the reciprocal index rule**\nA negative exponent of $-1$ represents taking the reciprocal of the fraction:\n$$\\left(\\frac{a}{b}\\right)^{-1} = \\frac{b}{a}$$\n\n**Step 2: Convert decimal base if applicable**\n$$0.25 = \\frac{1}{4}$$\n\n**Step 3: Calculate the reciprocal**\n$$\\text{Reciprocal of } \\frac{3}{5} \\text{ is } \\frac{5}{3}$$"
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
    "question": "Simplify: $\\left(\\frac{8}{15}\\right)^{-1}$",
    "options": [
      {
        "text": "$\\frac{15}{8}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{8}{15}$",
        "imageUrl": ""
      },
      {
        "text": "$-\\frac{8}{15}$",
        "imageUrl": ""
      },
      {
        "text": "$1$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the reciprocal index rule**\nA negative exponent of $-1$ represents taking the reciprocal of the fraction:\n$$\\left(\\frac{a}{b}\\right)^{-1} = \\frac{b}{a}$$\n\n**Step 2: Convert decimal base if applicable**\n$$0.25 = \\frac{1}{4}$$\n\n**Step 3: Calculate the reciprocal**\n$$\\text{Reciprocal of } \\frac{8}{15} \\text{ is } \\frac{15}{8}$$"
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
    "question": "Simplify: $(0.25)^{-1}$",
    "options": [
      {
        "text": "$4$",
        "imageUrl": ""
      },
      {
        "text": "$0.25$",
        "imageUrl": ""
      },
      {
        "text": "$-4$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{1}{4}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the reciprocal index rule**\nA negative exponent of $-1$ represents taking the reciprocal of the fraction:\n$$\\left(\\frac{a}{b}\\right)^{-1} = \\frac{b}{a}$$\n\n**Step 2: Convert decimal base if applicable**\n$$0.25 = \\frac{1}{4}$$\n\n**Step 3: Calculate the reciprocal**\n$$\\text{Reciprocal of } \\frac{1}{4} \\text{ is } 4$$"
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
    "question": "Simplify: $\\left(\\frac{1}{3}\\right)^{-2}$",
    "options": [
      {
        "text": "$9$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{1}{9}$",
        "imageUrl": ""
      },
      {
        "text": "$-9$",
        "imageUrl": ""
      },
      {
        "text": "$6$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the negative exponent law for fractions**\n$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$\n\n**Step 2: Evaluate the positive power**\nFor $\\left(\\frac{1}{3}\\right)^{-2}$:\n$$= \\text{Reciprocal squared/cubed} = 9$$\n\n**Step 3: State final value**\n$$9$$"
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
    "question": "Simplify: $\\left(\\frac{3}{4}\\right)^{-2}$",
    "options": [
      {
        "text": "$\\frac{16}{9}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{9}{16}$",
        "imageUrl": ""
      },
      {
        "text": "$-\\frac{9}{16}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{8}{6}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the negative exponent law for fractions**\n$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$\n\n**Step 2: Evaluate the positive power**\nFor $\\left(\\frac{3}{4}\\right)^{-2}$:\n$$= \\text{Reciprocal squared/cubed} = \\frac{16}{9}$$\n\n**Step 3: State final value**\n$$\\frac{16}{9}$$"
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
    "question": "Simplify: $\\left(\\frac{2}{3}\\right)^{-3}$",
    "options": [
      {
        "text": "$\\frac{27}{8}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{8}{27}$",
        "imageUrl": ""
      },
      {
        "text": "$-\\frac{8}{27}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{9}{6}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the negative exponent law for fractions**\n$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$\n\n**Step 2: Evaluate the positive power**\nFor $\\left(\\frac{2}{3}\\right)^{-3}$:\n$$= \\text{Reciprocal squared/cubed} = \\frac{27}{8}$$\n\n**Step 3: State final value**\n$$\\frac{27}{8}$$"
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
    "question": "Simplify: $\\left(\\frac{4}{9}\\right)^0$",
    "options": [
      {
        "text": "$1$",
        "imageUrl": ""
      },
      {
        "text": "$0$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{4}{9}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{9}{4}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the negative exponent law for fractions**\n$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$\n\n**Step 2: Evaluate the positive power**\nFor $\\left(\\frac{4}{9}\\right)^0$:\n$$\\text{Any non-zero base to the power of } 0 \\text{ is } 1$$\n\n**Step 3: State final value**\n$$1$$"
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
    "question": "Simplify, leaving your answer in index form: $b^9 \\times b^6$",
    "options": [
      {
        "text": "$b^{15}$",
        "imageUrl": ""
      },
      {
        "text": "$b^{54}$",
        "imageUrl": ""
      },
      {
        "text": "$b^3$",
        "imageUrl": ""
      },
      {
        "text": "$9b^6$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the multiplication index law**\nWhen multiplying terms with the same base, add their indices:\n$$a^m \\times a^n = a^{m + n}$$\n\n**Step 2: Add indices**\nFor $b^9 \\times b^6$:\n$$b^{9+6} = b^{15}$$\n\n**Step 3: State final form**\n$$b^{15}$$"
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
    "question": "Simplify, leaving your answer in index form: $5^3 \\times 5^{-8}$",
    "options": [
      {
        "text": "$5^{-5}$",
        "imageUrl": ""
      },
      {
        "text": "$5^{11}$",
        "imageUrl": ""
      },
      {
        "text": "$5^{-24}$",
        "imageUrl": ""
      },
      {
        "text": "$25^{-5}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the multiplication index law**\nWhen multiplying terms with the same base, add their indices:\n$$a^m \\times a^n = a^{m + n}$$\n\n**Step 2: Add indices**\nFor $5^3 \\times 5^{-8}$:\n$$5^{3 + (-8)} = 5^{-5}$$\n\n**Step 3: State final form**\n$$5^{-5}$$"
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
    "question": "Simplify, leaving your answer in index form: $y^{12} \\times y^{-8}$",
    "options": [
      {
        "text": "$y^4$",
        "imageUrl": ""
      },
      {
        "text": "$y^{20}$",
        "imageUrl": ""
      },
      {
        "text": "$y^{-96}$",
        "imageUrl": ""
      },
      {
        "text": "$y^8$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the multiplication index law**\nWhen multiplying terms with the same base, add their indices:\n$$a^m \\times a^n = a^{m + n}$$\n\n**Step 2: Add indices**\nFor $y^{12} \\times y^{-8}$:\n$$y^{12 + (-8)} = y^4$$\n\n**Step 3: State final form**\n$$y^4$$"
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
    "question": "Simplify, leaving your answer in index form: $6^5 \\times 6 \\times 6^{-5}$",
    "options": [
      {
        "text": "$6$",
        "imageUrl": ""
      },
      {
        "text": "$6^{11}$",
        "imageUrl": ""
      },
      {
        "text": "$1$",
        "imageUrl": ""
      },
      {
        "text": "$6^{-25}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the multiplication index law**\nWhen multiplying terms with the same base, add their indices:\n$$a^m \\times a^n = a^{m + n}$$\n\n**Step 2: Add indices**\nFor $6^5 \\times 6 \\times 6^{-5}$:\n$$6^{5 + 1 - 5} = 6^1 = 6$$\n\n**Step 3: State final form**\n$$6$$"
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
    "question": "Simplify, leaving your answer in index form: $5^9 \\div 5^4$",
    "options": [
      {
        "text": "$5^5$",
        "imageUrl": ""
      },
      {
        "text": "$5^{13}$",
        "imageUrl": ""
      },
      {
        "text": "$5^{36}$",
        "imageUrl": ""
      },
      {
        "text": "$1^5$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the division index law**\nWhen dividing terms with the same base, subtract their indices:\n$$a^m \\div a^n = a^{m - n}$$\n\n**Step 2: Subtract indices**\nFor $5^9 \\div 5^4$:\n$$5^{9 - 4} = 5^5$$\n\n**Step 3: State final form**\n$$5^5$$"
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
    "question": "Simplify, leaving your answer in index form: $y^{12} \\div y^{-3}$",
    "options": [
      {
        "text": "$y^{15}$",
        "imageUrl": ""
      },
      {
        "text": "$y^9$",
        "imageUrl": ""
      },
      {
        "text": "$y^{-4}$",
        "imageUrl": ""
      },
      {
        "text": "$y^{-36}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the division index law**\nWhen dividing terms with the same base, subtract their indices:\n$$a^m \\div a^n = a^{m - n}$$\n\n**Step 2: Subtract indices**\nFor $y^{12} \\div y^{-3}$:\n$$y^{12 - (-3)} = y^{12 + 3} = y^{15}$$\n\n**Step 3: State final form**\n$$y^{15}$$"
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
    "question": "Simplify, leaving your answer in index form: $3^6 \\div 3^{-6}$",
    "options": [
      {
        "text": "$3^{12}$",
        "imageUrl": ""
      },
      {
        "text": "$3^0$",
        "imageUrl": ""
      },
      {
        "text": "$1$",
        "imageUrl": ""
      },
      {
        "text": "$3^{-36}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the division index law**\nWhen dividing terms with the same base, subtract their indices:\n$$a^m \\div a^n = a^{m - n}$$\n\n**Step 2: Subtract indices**\nFor $3^6 \\div 3^{-6}$:\n$$3^{6 - (-6)} = 3^{6 + 6} = 3^{12}$$\n\n**Step 3: State final form**\n$$3^{12}$$"
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
    "question": "Simplify, leaving your answer in index form: $z \\div z^{15}$",
    "options": [
      {
        "text": "$z^{-14}$",
        "imageUrl": ""
      },
      {
        "text": "$z^{14}$",
        "imageUrl": ""
      },
      {
        "text": "$z^{15}$",
        "imageUrl": ""
      },
      {
        "text": "$z^{-15}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the division index law**\nWhen dividing terms with the same base, subtract their indices:\n$$a^m \\div a^n = a^{m - n}$$\n\n**Step 2: Subtract indices**\nFor $z \\div z^{15}$:\n$$z^{1 - 15} = z^{-14}$$\n\n**Step 3: State final form**\n$$z^{-14}$$"
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
    "question": "Simplify, leaving your answer in index form: $(y^6)^4$",
    "options": [
      {
        "text": "$y^{24}$",
        "imageUrl": ""
      },
      {
        "text": "$y^{10}$",
        "imageUrl": ""
      },
      {
        "text": "$y^2$",
        "imageUrl": ""
      },
      {
        "text": "$4y^6$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply index laws**\n- Power of a Power: $(a^m)^n = a^{m \\times n}$\n- Product: $a^m \\times a^n = a^{m+n}$\n\n**Step 2: Evaluate**\nFor $(y^6)^4$:\n$$y^{6 \\times 4} = y^{24}$$\n\n**Step 3: State final form**\n$$y^{24}$$"
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
    "question": "Simplify, leaving your answer in index form: $b^{-3} \\times b^{-3} \\times b^{-3}$",
    "options": [
      {
        "text": "$b^{-9}$",
        "imageUrl": ""
      },
      {
        "text": "$b^{-27}$",
        "imageUrl": ""
      },
      {
        "text": "$b^9$",
        "imageUrl": ""
      },
      {
        "text": "$b^{-6}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply index laws**\n- Power of a Power: $(a^m)^n = a^{m \\times n}$\n- Product: $a^m \\times a^n = a^{m+n}$\n\n**Step 2: Evaluate**\nFor $b^{-3} \\times b^{-3} \\times b^{-3}$:\n$$b^{-3 + (-3) + (-3)} = b^{-9}$$\n\n**Step 3: State final form**\n$$b^{-9}$$"
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
    "question": "Simplify, leaving your answer in index form: $(c^{-3})^4$",
    "options": [
      {
        "text": "$c^{-12}$",
        "imageUrl": ""
      },
      {
        "text": "$c^{-7}$",
        "imageUrl": ""
      },
      {
        "text": "$c^{12}$",
        "imageUrl": ""
      },
      {
        "text": "$c^{-1}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply index laws**\n- Power of a Power: $(a^m)^n = a^{m \\times n}$\n- Product: $a^m \\times a^n = a^{m+n}$\n\n**Step 2: Evaluate**\nFor $(c^{-3})^4$:\n$$c^{-3 \\times 4} = c^{-12}$$\n\n**Step 3: State final form**\n$$c^{-12}$$"
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
    "question": "Simplify, leaving your answer in index form: $(x^{-3})^{-4}$",
    "options": [
      {
        "text": "$x^{12}$",
        "imageUrl": ""
      },
      {
        "text": "$x^{-12}$",
        "imageUrl": ""
      },
      {
        "text": "$x^7$",
        "imageUrl": ""
      },
      {
        "text": "$x^{-7}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply index laws**\n- Power of a Power: $(a^m)^n = a^{m \\times n}$\n- Product: $a^m \\times a^n = a^{m+n}$\n\n**Step 2: Evaluate**\nFor $(x^{-3})^{-4}$:\n$$x^{-3 \\times (-4)} = x^{12}$$\n\n**Step 3: State final form**\n$$x^{12}$$"
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
    "question": "Solve the index equation: $4^x = 64$",
    "options": [
      {
        "text": "$x = 3$",
        "imageUrl": ""
      },
      {
        "text": "$x = 4$",
        "imageUrl": ""
      },
      {
        "text": "$x = 16$",
        "imageUrl": ""
      },
      {
        "text": "$x = 2$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides with the same base**\nFor $4^x = 64$:\n$$4^3 = 64$$\n\n**Step 2: Equate indices**\nBy matching exponents:\n$$x = 3$$"
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
    "question": "Solve the index equation: $3^x = 243$",
    "options": [
      {
        "text": "$x = 5$",
        "imageUrl": ""
      },
      {
        "text": "$x = 4$",
        "imageUrl": ""
      },
      {
        "text": "$x = 6$",
        "imageUrl": ""
      },
      {
        "text": "$x = 3$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides with the same base**\nFor $3^x = 243$:\n$$3^5 = 243$$\n\n**Step 2: Equate indices**\nBy matching exponents:\n$$x = 5$$"
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
    "question": "Solve the index equation: $5^x = \\frac{1}{5}$",
    "options": [
      {
        "text": "$x = -1$",
        "imageUrl": ""
      },
      {
        "text": "$x = 1$",
        "imageUrl": ""
      },
      {
        "text": "$x = 5$",
        "imageUrl": ""
      },
      {
        "text": "$x = 0$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides with the same base**\nFor $5^x = \\frac{1}{5}$:\n$$5^{-1} = \\frac{1}{5}$$\n\n**Step 2: Equate indices**\nBy matching exponents:\n$$x = -1$$"
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
    "question": "Solve the index equation: $4^x = \\frac{1}{64}$",
    "options": [
      {
        "text": "$x = -3$",
        "imageUrl": ""
      },
      {
        "text": "$x = 3$",
        "imageUrl": ""
      },
      {
        "text": "$x = -4$",
        "imageUrl": ""
      },
      {
        "text": "$x = \\frac{1}{3}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides with the same base**\nFor $4^x = \\frac{1}{64}$:\n$$4^{-3} = \\frac{1}{64}$$\n\n**Step 2: Equate indices**\nBy matching exponents:\n$$x = -3$$"
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
    "question": "Solve the index equation: $\\left(\\frac{1}{5}\\right)^x = 25$",
    "options": [
      {
        "text": "$x = -2$",
        "imageUrl": ""
      },
      {
        "text": "$x = 2$",
        "imageUrl": ""
      },
      {
        "text": "$x = -5$",
        "imageUrl": ""
      },
      {
        "text": "$x = 5$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides with the same base**\nFor $\\left(\\frac{1}{5}\\right)^x = 25$:\n$$5^{-x} = 5^2$$\n\n**Step 2: Equate indices**\nBy matching exponents:\n$$x = -2$$"
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
    "question": "Solve the index equation: $15^x = 1$",
    "options": [
      {
        "text": "$x = 0$",
        "imageUrl": ""
      },
      {
        "text": "$x = 1$",
        "imageUrl": ""
      },
      {
        "text": "$x = 15$",
        "imageUrl": ""
      },
      {
        "text": "$x = -1$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Express both sides with the same base**\nFor $15^x = 1$:\n$$15^0 = 1$$\n\n**Step 2: Equate indices**\nBy matching exponents:\n$$x = 0$$"
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
    "question": "Expand the brackets: $(4x)^2$",
    "options": [
      {
        "text": "$16x^2$",
        "imageUrl": ""
      },
      {
        "text": "$4x^2$",
        "imageUrl": ""
      },
      {
        "text": "$8x^2$",
        "imageUrl": ""
      },
      {
        "text": "$16x$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State bracket expansion law**\n- Product raised to a power: $(ab)^n = a^n b^n$\n- Quotient raised to a power: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$\n\n**Step 2: Expand each component**\nFor $(4x)^2$:\n$$= 16x^2$$"
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
    "question": "Expand the brackets: $(2st)^5$",
    "options": [
      {
        "text": "$32s^5t^5$",
        "imageUrl": ""
      },
      {
        "text": "$10s^5t^5$",
        "imageUrl": ""
      },
      {
        "text": "$2s^5t^5$",
        "imageUrl": ""
      },
      {
        "text": "$32st$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State bracket expansion law**\n- Product raised to a power: $(ab)^n = a^n b^n$\n- Quotient raised to a power: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$\n\n**Step 2: Expand each component**\nFor $(2st)^5$:\n$$= 32s^5t^5$$"
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
    "question": "Expand the brackets: $(5xyz)^3$",
    "options": [
      {
        "text": "$125x^3y^3z^3$",
        "imageUrl": ""
      },
      {
        "text": "$15x^3y^3z^3$",
        "imageUrl": ""
      },
      {
        "text": "$5x^3y^3z^3$",
        "imageUrl": ""
      },
      {
        "text": "$125xyz$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State bracket expansion law**\n- Product raised to a power: $(ab)^n = a^n b^n$\n- Quotient raised to a power: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$\n\n**Step 2: Expand each component**\nFor $(5xyz)^3$:\n$$= 125x^3y^3z^3$$"
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
    "question": "Expand the brackets: $\\left(\\frac{2}{y}\\right)^4$",
    "options": [
      {
        "text": "$\\frac{16}{y^4}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{8}{y^4}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{16}{y}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{2}{y^4}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State bracket expansion law**\n- Product raised to a power: $(ab)^n = a^n b^n$\n- Quotient raised to a power: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$\n\n**Step 2: Expand each component**\nFor $\\left(\\frac{2}{y}\\right)^4$:\n$$= \\frac{16}{y^4}$$"
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
    "question": "Expand the brackets: $\\left(\\frac{5a}{3}\\right)^3$",
    "options": [
      {
        "text": "$\\frac{125a^3}{27}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{15a^3}{9}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{125a}{27}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{5a^3}{3}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State bracket expansion law**\n- Product raised to a power: $(ab)^n = a^n b^n$\n- Quotient raised to a power: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$\n\n**Step 2: Expand each component**\nFor $\\left(\\frac{5a}{3}\\right)^3$:\n$$= \\frac{125a^3}{27}$$"
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
    "question": "Expand the brackets: $\\left(\\frac{4x}{3y}\\right)^3$",
    "options": [
      {
        "text": "$\\frac{64x^3}{27y^3}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{12x^3}{9y^3}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{64x}{27y}$",
        "imageUrl": ""
      },
      {
        "text": "$\\frac{64x^3}{3y^3}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State bracket expansion law**\n- Product raised to a power: $(ab)^n = a^n b^n$\n- Quotient raised to a power: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$\n\n**Step 2: Expand each component**\nFor $\\left(\\frac{4x}{3y}\\right)^3$:\n$$= \\frac{64x^3}{27y^3}$$"
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

export const importYear11AdvCh8 = async (forceReset = false) => {
  console.log(`Starting sync of Y11 Adv Ch8A (Total ${questions8A.length})...` + '\n' + `Chapter: Exponential and logarithmic functions`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), 
      where('chapterId', '==', 'y11a-8'),
      where('topicCode', '==', '8A')
    ));
    
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(`Cleared ${qSnap.size} old questions under chapter y11a-8, topicCode 8A.`);

    let count = 0;
    for (const q of questions8A) {
        await addDoc(collection(db, 'questions'), { 
          ...q, 
          createdAt: serverTimestamp(), 
          updatedAt: serverTimestamp(), 
          isActive: true 
        });
        count++;
    }
    console.log(`Successfully imported ${count} questions.`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
