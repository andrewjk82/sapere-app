import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  // ==========================================
  // ORIGINAL QUESTIONS (1 to 21)
  // ==========================================
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write this division as an algebraic fraction: A number, $y$, is divided by 7.",
    "options": [
      "$\\frac{y}{7}$",
      "$\\frac{7}{y}$",
      "$7y$",
      "$y - 7$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>To write any division expression $a \\div b$ as a fraction, we place the first quantity (the dividend, $a$) in the numerator and the second quantity (the divisor, $b$) in the denominator.</p>\n    <p>Following this rule, dividing a number $y$ by $7$ gives:</p>\n    <p>$$\\frac{y}{7}$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.308Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write this division as an algebraic fraction: A number, $a$, is divided by 6, and 5 is added to the result.",
    "options": [
      "$\\frac{a}{6} + 5$",
      "$\\frac{a+5}{6}$",
      "$\\frac{6}{a} + 5$",
      "$6a + 5$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's construct the algebraic expression step-by-step:</p>\n    <p>1. \"A number, $a$, is divided by 6\" becomes: $\\frac{a}{6}$</p>\n    <p>2. \"and 5 is added to the result\" means we add 5 to the term we just wrote: $\\frac{a}{6} + 5$</p>\n    <p>Therefore, the complete expression is $\\frac{a}{6} + 5$.</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write this division as an algebraic fraction: 9 is added to a number, $x$, and the result is divided by 4.",
    "options": [
      "$\\frac{x+9}{4}$",
      "$\\frac{x}{4} + 9$",
      "$\\frac{4}{x+9}$",
      "$\\frac{x-9}{4}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's follow the mathematical order of operations described in the word problem:</p>\n    <p>1. \"9 is added to a number, $x$\" forms the complete quantity: $x + 9$</p>\n    <p>2. \"and the result is divided by 4\" means we must divide the <em>entire</em> sum $(x + 9)$ by 4. Written as a fraction, we draw a fraction bar under $(x + 9)$ and place 4 in the denominator: $\\frac{x+9}{4}$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write this division as an algebraic fraction: 8 is subtracted from a number, $k$, and the result is divided by 5.",
    "options": [
      "$\\frac{k-8}{5}$",
      "$\\frac{k}{5} - 8$",
      "$\\frac{8-k}{5}$",
      "$\\frac{5}{k-8}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's construct the algebraic term based on the sequence of operations:</p>\n    <p>1. \"8 is subtracted from a number, $k$\" gives the initial difference: $k - 8$</p>\n    <p>2. \"and the result is divided by 5\" means the <em>whole</em> difference $(k - 8)$ is divided by 5: $\\frac{k-8}{5}$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Write this division as an algebraic fraction: A number, $z$, is divided by 9, 4 is subtracted from the result, and this final result is multiplied by 5.",
    "options": [
      "$5\\left(\\frac{z}{9} - 4\\right)$",
      "$\\frac{5z}{9} - 4$",
      "$\\frac{5(z-4)}{9}$",
      "$\\frac{z-4}{9} \\times 5$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's build the expression step-by-step:</p>\n    <p>1. \"A number, $z$, is divided by 9\" $\\rightarrow \\frac{z}{9}$</p>\n    <p>2. \"4 is subtracted from the result\" $\\rightarrow \\frac{z}{9} - 4$</p>\n    <p>3. \"and this final result is multiplied by 5\" $\\rightarrow$ We must wrap the entire expression in parentheses before multiplying by 5: $5\\left(\\frac{z}{9} - 4\\right)$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write this division as an algebraic fraction: $(a + 5) \\div 5$",
    "options": [
      "$\\frac{a+5}{5}$",
      "$\\frac{a}{5} + 5$",
      "$\\frac{5}{a+5}$",
      "$a + 1$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>To convert $(a + 5) \\div 5$ into a fraction, we divide the entire grouped term in parentheses, $(a + 5)$, by $5$:</p>\n    <p>$$\\frac{a+5}{5}$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write this division as an algebraic fraction: $(y - 7) \\div 6$",
    "options": [
      "$\\frac{y-7}{6}$",
      "$\\frac{y}{6} - 7$",
      "$\\frac{6}{y-7}$",
      "$y - \\frac{7}{6}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Dividing the entire term $(y - 7)$ by $6$ translates directly to a fraction where $(y - 7)$ is the numerator and $6$ is the denominator:</p>\n    <p>$$\\frac{y-7}{6}$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write this division as an algebraic fraction: $(m + 13) \\div 8$",
    "options": [
      "$\\frac{m+13}{8}$",
      "$\\frac{m}{8} + 13$",
      "$\\frac{8}{m+13}$",
      "$m + \\frac{13}{8}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>The brackets indicate that the sum $(m + 13)$ is treated as a single unified quantity. Dividing it by 8 gives:</p>\n    <p>$$\\frac{m+13}{8}$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write this division as an algebraic fraction: $(31 - z) \\div 9$",
    "options": [
      "$\\frac{31-z}{9}$",
      "$\\frac{z-31}{9}$",
      "$\\frac{9}{31-z}$",
      "$31 - \\frac{z}{9}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>The quantity $(31 - z)$ is the dividend, and $9$ is the divisor. Written as a fraction, this is:</p>\n    <p>$$\\frac{31-z}{9}$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": false,
    "isActive": true,
    "question": "Evaluate this algebraic expression for $y = 24$: $\\frac{y}{3}$",
    "options": [],
    "answer": "8",
    "solution": "<div style=\"text-align: left;\">\n    <p>Substitute $y = 24$ directly into the algebraic expression:</p>\n    <p>$$\\frac{y}{3} = \\frac{24}{3} = 8$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": false,
    "isActive": true,
    "question": "Evaluate this algebraic expression for $y = 24$: $\\frac{y}{6} + 9$",
    "options": [],
    "answer": "13",
    "solution": "<div style=\"text-align: left;\">\n    <p>Substitute $y = 24$ directly into the expression:</p>\n    <p>$$\\frac{y}{6} + 9 = \\frac{24}{6} + 9$$</p>\n    <p>Evaluate the division first:</p>\n    <p>$$4 + 9 = 13$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Evaluate this algebraic expression for $y = 24$: $\\frac{y+12}{9}$",
    "options": [],
    "answer": "4",
    "solution": "<div style=\"text-align: left;\">\n    <p>Substitute $y = 24$ into the numerator of the fraction:</p>\n    <p>$$\\frac{24+12}{9}$$</p>\n    <p>Simplify the numerator first:</p>\n    <p>$$\\frac{36}{9} = 4$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Evaluate this algebraic expression for $y = 24$: $\\frac{50-y}{13}$",
    "options": [],
    "answer": "2",
    "solution": "<div style=\"text-align: left;\">\n    <p>Substitute $y = 24$ directly into the expression:</p>\n    <p>$$\\frac{50-24}{13}$$</p>\n    <p>Evaluate the subtraction inside the numerator first:</p>\n    <p>$$\\frac{26}{13} = 2$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate this algebraic expression for $a = 6$ and $b = 8$: $\\frac{a}{b}$",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Substitute $a = 6$ and $b = 8$ directly into the fraction:</p>\n    <p>$$\\frac{a}{b} = \\frac{6}{8}$$</p>\n    <p>Simplify the fraction by dividing both numerator and denominator by their greatest common divisor, which is 2:</p>\n    <p>$$\\frac{6 \\div 2}{8 \\div 2} = \\frac{3}{4}$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate this algebraic expression for $a = 6$ and $b = 8$: $\\frac{b-a}{4}$",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$2$",
      "$1$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Substitute $a = 6$ and $b = 8$ directly into the expression:</p>\n    <p>$$\\frac{b-a}{4} = \\frac{8-6}{4}$$</p>\n    <p>Simplify the subtraction in the numerator:</p>\n    <p>$$\\frac{2}{4}$$</p>\n    <p>Reduce the fraction to its simplest form by dividing both parts by 2:</p>\n    <p>$$\\frac{2 \\div 2}{4 \\div 2} = \\frac{1}{2}$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Evaluate this algebraic expression for $a = 6$ and $b = 8$: $\\frac{24}{a} + 5$",
    "options": [],
    "answer": "9",
    "solution": "<div style=\"text-align: left;\">\n    <p>Substitute $a = 6$ directly into the expression:</p>\n    <p>$$\\frac{24}{6} + 5$$</p>\n    <p>Evaluate the fraction first:</p>\n    <p>$$4 + 5 = 9$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": false,
    "isActive": true,
    "question": "Evaluate this algebraic expression for $a = 6$ and $b = 8$: $\\frac{5a-b}{b-a}$",
    "options": [],
    "answer": "11",
    "solution": "<div style=\"text-align: left;\">\n    <p>Substitute $a = 6$ and $b = 8$ into the expression:</p>\n    <p>$$\\frac{5a-b}{b-a} = \\frac{5(6) - 8}{8-6}$$</p>\n    <p>Simplify the numerator and the denominator separately:</p>\n    <p>$$\\text{Numerator: } 30 - 8 = 22$$</p>\n    <p>$$\\text{Denominator: } 8 - 6 = 2$$</p>\n    <p>Now perform the final division:</p>\n    <p>$$\\frac{22}{2} = 11$$</p>\n  </div>",
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "A basket containing $x$ peaches is divided into 6 equal bags. Answer the following questions.",
    "options": [],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Part (a): Peaches in each bag</strong><br>Since a total of $x$ peaches is shared equally among 6 bags, the quantity in each bag is obtained by division: $\\frac{x}{6}$.</p>\n    <p><strong>Part (b): Adding peaches to each bag</strong><br>If we add 4 peaches to each individual bag, we add 4 directly to the algebraic expression representing one bag: $\\frac{x}{6} + 4$.</p>\n  </div>",
    "subQuestions": [
      {
        "id": "q5a",
        "question": "How many peaches are there in each bag?",
        "type": "multiple_choice",
        "isManual": true,
        "options": [
          "$\\frac{x}{6}$",
          "$6x$",
          "$x - 6$",
          "$\\frac{6}{x}$"
        ],
        "answer": 0
      },
      {
        "id": "q5b",
        "question": "Four peaches are added to each bag. How many peaches are there in each bag now?",
        "type": "multiple_choice",
        "isManual": true,
        "options": [
          "$\\frac{x}{6} + 4$",
          "$\\frac{x+4}{6}$",
          "$6x + 4$",
          "$\\frac{x}{10}$"
        ],
        "answer": 0
      }
    ],
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "$p$ tonnes of iron ore are stored in a warehouse. An extra 2000 tonnes are then added. Answer the questions below.",
    "options": [],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Part (a): Total iron ore in the warehouse</strong><br>The original storage was $p$ tonnes. Adding 2000 tonnes means the total quantity is now: $p + 2000$ tonnes.</p>\n    <p><strong>Part (b): Dividing into equal loads</strong><br>The total iron ore $(p + 2000)$ is split equally into 8 loads. Thus, we divide the entire quantity by 8: $\\frac{p+2000}{8}$ tonnes.</p>\n  </div>",
    "subQuestions": [
      {
        "id": "q6a",
        "question": "How many tonnes of iron ore are there in the warehouse now?",
        "type": "multiple_choice",
        "isManual": true,
        "options": [
          "$p + 2000$",
          "$p - 2000$",
          "$2000p$",
          "$\\frac{p}{2000}$"
        ],
        "answer": 0
      },
      {
        "id": "q6b",
        "question": "It is decided to ship the entire amount of iron ore in 8 equal loads. How many tonnes of iron ore are there in each load?",
        "type": "multiple_choice",
        "isManual": true,
        "options": [
          "$\\frac{p+2000}{8}$",
          "$\\frac{p}{8} + 2000$",
          "$\\frac{p-2000}{8}$",
          "$8(p+2000)$"
        ],
        "answer": 0
      }
    ],
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "On a competitive science exam paper, there are $w$ questions. Before the test starts, it is announced that the last 3 questions are misprinted and should be completely ignored.",
    "options": [],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Part (a): Questions to complete</strong><br>There were $w$ questions originally. Since the last 3 questions are ignored, the valid number of questions to complete is: $w - 3$.</p>\n    <p><strong>Part (b): Average time per question</strong><br>The total time given is exactly one hour, which is $60$ minutes. To find the average time spent per question, we divide the total time ($60$) by the number of valid questions $(w - 3)$: $\\frac{60}{w-3}$ minutes.</p>\n  </div>",
    "subQuestions": [
      {
        "id": "q7a",
        "question": "How many questions must the students complete now?",
        "type": "multiple_choice",
        "isManual": true,
        "options": [
          "$w - 3$",
          "$w + 3$",
          "$\\frac{w}{3}$",
          "$3w$"
        ],
        "answer": 0
      },
      {
        "id": "q7b",
        "question": "The students are given exactly one hour (60 minutes) to complete the exam. How many minutes should they spend on each question, on average?",
        "type": "multiple_choice",
        "isManual": true,
        "options": [
          "$\\frac{60}{w-3}$",
          "$\\frac{w-3}{60}$",
          "$\\frac{60}{w}$",
          "$60(w-3)$"
        ],
        "answer": 0
      }
    ],
    "createdAt": "2026-05-17T01:29:07.309Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Sophia joined four of her friends for lunch. They decided to share the total food bill of \\$z equally.",
    "options": [],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Part (a): Sophia's payment share</strong><br>Sophia and her four friends make a total of $1 + 4 = 5$ people. Splitting the bill of \\$z equally means Sophia pays: $\\frac{z}{5}$ dollars.</p>\n    <p><strong>Part (b): Remaining change</strong><br>Sophia pays with a \\$100 note. The amount of money she has left is the change, which is the original value minus her split meal cost: $100 - \\frac{z}{5}$ dollars.</p>\n  </div>",
    "subQuestions": [
      {
        "id": "q8a",
        "question": "How much did Sophia have to pay?",
        "type": "multiple_choice",
        "isManual": true,
        "options": [
          "$\\frac{z}{5}$",
          "$\\frac{z}{4}$",
          "$5z$",
          "$z - 5$"
        ],
        "answer": 0
      },
      {
        "id": "q8b",
        "question": "Sophia had a 100-dollar note in her purse. How much change did she have left after paying for her share of the meal?",
        "type": "multiple_choice",
        "isManual": true,
        "options": [
          "$100 - \\frac{z}{5}$",
          "$100 - \\frac{z}{4}$",
          "$\\frac{100-z}{5}$",
          "$\\frac{z}{5} - 100$"
        ],
        "answer": 0
      }
    ],
    "createdAt": "2026-05-17T01:29:07.309Z"
  },

  // ==========================================
  // BRAND-NEW HIGH QUALITY STANDALONE QUESTIONS (Q1 to Q8)
  // ==========================================

  // --- QUESTION 1 PARTS (a to i) ---
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write the following mathematical phrase using algebraic notation: A number, $x$, is divided by 7, and 8 is added to the result.",
    "options": [
      "$\\frac{x}{7} + 8$",
      "$\\frac{x+8}{7}$",
      "$\\frac{7}{x} + 8$",
      "$7x + 8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's construct the algebraic expression step-by-step:</p>\n    <p><strong>Step 1:</strong> Translate the division portion. \"A number, $x$, is divided by 7\" is written as:</p>\n    <p>$$\\frac{x}{7}$$</p>\n    <p><strong>Step 2:</strong> Add 8 to that entire result. This yields:</p>\n    <p>$$\\frac{x}{7} + 8$$</p>\n    <p>Therefore, the correct choice is <strong>$\\frac{x}{7} + 8$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.000Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following mathematical phrase using algebraic notation: Six is added to a number, $x$, and the result is divided by 5.",
    "options": [
      "$\\frac{x+6}{5}$",
      "$\\frac{x}{5} + 6$",
      "$\\frac{5}{x+6}$",
      "$5(x + 6)$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's construct the algebraic expression step-by-step:</p>\n    <p><strong>Step 1:</strong> First, \"Six is added to a number, $x$\". This represents a single combined quantity:</p>\n    <p>$$(x + 6)$$</p>\n    <p><strong>Step 2:</strong> Next, \"the result is divided by 5\". This means the entire sum we formed is divided by 5:</p>\n    <p>$$\\frac{x+6}{5}$$</p>\n    <p>Therefore, the correct choice is <strong>$\\frac{x+6}{5}$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.001Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write the following mathematical phrase using algebraic notation: A number, $x$, is divided by 9, and 7 is subtracted from the result.",
    "options": [
      "$\\frac{x}{9} - 7$",
      "$\\frac{x-7}{9}$",
      "$\\frac{9}{x} - 7$",
      "$9x - 7$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's convert this phrase into algebra step-by-step:</p>\n    <p><strong>Step 1:</strong> \"A number, $x$, is divided by 9\" becomes:</p>\n    <p>$$\\frac{x}{9}$$</p>\n    <p><strong>Step 2:</strong> Subtract 7 from this term:</p>\n    <p>$$\\frac{x}{9} - 7$$</p>\n    <p>Therefore, the correct expression is <strong>$\\frac{x}{9} - 7$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.002Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following mathematical phrase using algebraic notation: Eight is added to a number, $x$, and the result is divided by 13.",
    "options": [
      "$\\frac{x+8}{13}$",
      "$\\frac{x}{13} + 8$",
      "$\\frac{13}{x+8}$",
      "$13(x + 8)$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's follow the sequence of instructions:</p>\n    <p><strong>Step 1:</strong> \"Eight is added to a number, $x$\" gives the sum:</p>\n    <p>$$(x + 8)$$</p>\n    <p><strong>Step 2:</strong> \"the result is divided by 13\" means we divide the entire sum by 13:</p>\n    <p>$$\\frac{x+8}{13}$$</p>\n    <p>Therefore, the correct expression is <strong>$\\frac{x+8}{13}$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.003Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following mathematical phrase using algebraic notation: Ten is subtracted from a number, $x$, and the result is divided by 15.",
    "options": [
      "$\\frac{x-10}{15}$",
      "$\\frac{x}{15} - 10$",
      "$\\frac{10-x}{15}$",
      "$\\frac{15}{x-10}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's construct this mathematical term carefully:</p>\n    <p><strong>Step 1:</strong> \"Ten is subtracted from a number, $x$\" means we start with $x$ and subtract 10:</p>\n    <p>$$(x - 10)$$</p>\n    <p><strong>Step 2:</strong> \"the result is divided by 15\" means the entire difference is divided by 15:</p>\n    <p>$$\\frac{x-10}{15}$$</p>\n    <p>Therefore, the correct expression is <strong>$\\frac{x-10}{15}$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.004Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Write the following mathematical phrase using algebraic notation: A number, $x$, is divided by 8, 3 is subtracted from the result, and this final result is multiplied by 6.",
    "options": [
      "$6\\left(\\frac{x}{8} - 3\\right)$",
      "$\\frac{6x}{8} - 3$",
      "$\\frac{6(x-3)}{8}$",
      "$\\frac{x-3}{8} \\times 6$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's build the algebraic formula step-by-step:</p>\n    <p><strong>Step 1:</strong> \"A number, $x$, is divided by 8\" becomes:</p>\n    <p>$$\\frac{x}{8}$$</p>\n    <p><strong>Step 2:</strong> \"3 is subtracted from the result\" becomes:</p>\n    <p>$$\\frac{x}{8} - 3$$</p>\n    <p><strong>Step 3:</strong> \"and this final result is multiplied by 6\" means we multiply the entire expression from Step 2 by 6. To do this, we must wrap it in parentheses:</p>\n    <p>$$6\\left(\\frac{x}{8} - 3\\right)$$</p>\n    <p>Therefore, the correct option is <strong>$6\\left(\\frac{x}{8} - 3\\right)$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.005Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following mathematical phrase using algebraic notation: Nine is added to $\\frac{4}{7}$ of a number, $x$.",
    "options": [
      "$\\frac{4x}{7} + 9$",
      "$\\frac{4(x+9)}{7}$",
      "$\\frac{x}{7} + 9$",
      "$\\frac{4}{7x} + 9$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's map this step-by-step:</p>\n    <p><strong>Step 1:</strong> \"$\\frac{4}{7}$ of a number, $x$\" means we multiply $x$ by the fraction $\\frac{4}{7}$:</p>\n    <p>$$\\frac{4}{7}x = \\frac{4x}{7}$$</p>\n    <p><strong>Step 2:</strong> \"Nine is added\" to this quantity:</p>\n    <p>$$\\frac{4x}{7} + 9$$</p>\n    <p>Therefore, the correct expression is <strong>$\\frac{4x}{7} + 9$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.006Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following mathematical phrase using algebraic notation: Fifteen is added to a number, $x$, multiplied by $\\frac{5}{9}$.",
    "options": [
      "$\\frac{5x}{9} + 15$",
      "$\\frac{5(x+15)}{9}$",
      "$\\frac{x+15}{9}$",
      "$5x + 15$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's follow the phrase sequence:</p>\n    <p><strong>Step 1:</strong> \"a number, $x$, multiplied by $\\frac{5}{9}$\" yields the term:</p>\n    <p>$$\\frac{5}{9}x = \\frac{5x}{9}$$</p>\n    <p><strong>Step 2:</strong> \"Fifteen is added\" to that term:</p>\n    <p>$$\\frac{5x}{9} + 15$$</p>\n    <p>Therefore, the correct expression is <strong>$\\frac{5x}{9} + 15$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.007Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Write the following mathematical phrase using algebraic notation: A number, $x$, is divided by 11, then 6 is subtracted from the result, then the result of this is multiplied by 8.",
    "options": [
      "$8\\left(\\frac{x}{11} - 6\\right)$",
      "$\\frac{8x}{11} - 6$",
      "$\\frac{8(x-6)}{11}$",
      "$\\frac{x-6}{11} \\times 8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's build up the operations step-by-step:</p>\n    <p><strong>Step 1:</strong> \"A number, $x$, is divided by 11\" $\\rightarrow \\frac{x}{11}$</p>\n    <p><strong>Step 2:</strong> \"6 is subtracted from the result\" $\\rightarrow \\frac{x}{11} - 6$</p>\n    <p><strong>Step 3:</strong> \"the result of this is multiplied by 8\" $\\rightarrow$ We multiply the entire term by 8 by wrapping it in parentheses:</p>\n    <p>$$8\\left(\\frac{x}{11} - 6\\right)$$</p>\n    <p>Therefore, the correct option is <strong>$8\\left(\\frac{x}{11} - 6\\right)$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.008Z"
  },

  // --- QUESTION 2 PARTS (a to i) ---
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "For $x = 24$, find the value of the algebraic expression: $\\frac{x}{3}$",
    "options": [
      "$8$",
      "$12$",
      "$6$",
      "$3$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute the given value into the expression:</p>\n    <p><strong>Step 1:</strong> Replace the pronumeral $x$ with $24$:</p>\n    <p>$$\\frac{x}{3} = \\frac{24}{3}$$</p>\n    <p><strong>Step 2:</strong> Perform the division:</p>\n    <p>$$24 \\div 3 = 8$$</p>\n    <p>Therefore, the evaluated value is <strong>$8$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.009Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "For $x = 25$, find the value of the algebraic expression: $\\frac{x}{5} + 4$",
    "options": [
      "$9$",
      "$5$",
      "$10$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x = 25$ directly into the expression:</p>\n    <p><strong>Step 1:</strong> Replace $x$ with $25$ in the fraction:</p>\n    <p>$$\\frac{25}{5} + 4$$</p>\n    <p><strong>Step 2:</strong> Calculate the fraction division first (according to the order of operations):</p>\n    <p>$$25 \\div 5 = 5$$</p>\n    <p><strong>Step 3:</strong> Add 4 to the result:</p>\n    <p>$$5 + 4 = 9$$</p>\n    <p>Therefore, the evaluated value is <strong>$9$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.010Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "For $x = 22$, find the value of the algebraic expression: $\\frac{x+2}{4}$",
    "options": [
      "$6$",
      "$8$",
      "$5$",
      "$7$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x = 22$ step-by-step:</p>\n    <p><strong>Step 1:</strong> Substitute $22$ for $x$ in the numerator:</p>\n    <p>$$\\frac{22+2}{4}$$</p>\n    <p><strong>Step 2:</strong> Simplify the numerator addition first (since the fraction bar acts as a grouping symbol):</p>\n    <p>$$22 + 2 = 24$$</p>\n    <p>This gives:</p>\n    <p>$$\\frac{24}{4}$$</p>\n    <p><strong>Step 3:</strong> Perform the division:</p>\n    <p>$$24 \\div 4 = 6$$</p>\n    <p>Therefore, the final value is <strong>$6$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.011Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "For $x = 26$, find the value of the algebraic expression: $\\frac{x-2}{6}$",
    "options": [
      "$4$",
      "$6$",
      "$5$",
      "$3$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x = 26$ to find the value:</p>\n    <p><strong>Step 1:</strong> Replace $x$ with $26$ in the numerator:</p>\n    <p>$$\\frac{26-2}{6}$$</p>\n    <p><strong>Step 2:</strong> Simplify the subtraction in the numerator:</p>\n    <p>$$26 - 2 = 24$$</p>\n    <p>This gives:</p>\n    <p>$$\\frac{24}{6}$$</p>\n    <p><strong>Step 3:</strong> Perform the division:</p>\n    <p>$$24 \\div 6 = 4$$</p>\n    <p>Therefore, the evaluated result is <strong>$4$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.012Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "For $x = 30$, find the value of the algebraic expression: $\\frac{4(x+40)}{7}$",
    "options": [
      "$40$",
      "$35$",
      "$45$",
      "$50$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x = 30$ and solve step-by-step:</p>\n    <p><strong>Step 1:</strong> Replace $x$ with $30$:</p>\n    <p>$$\\frac{4(30+40)}{7}$$</p>\n    <p><strong>Step 2:</strong> Simplify inside the parentheses first:</p>\n    <p>$$30 + 40 = 70$$</p>\n    <p>This gives:</p>\n    <p>$$\\frac{4(70)}{7}$$</p>\n    <p><strong>Step 3:</strong> We can divide $70$ by $7$ first to simplify multiplication:</p>\n    <p>$$\\frac{70}{7} = 10$$</p>\n    <p>So, we evaluate:</p>\n    <p>$$4 \\times 10 = 40$$</p>\n    <p>Therefore, the final result is <strong>$40$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.013Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "For $x = 30$, find the value of the algebraic expression: $\\frac{4x}{15} + 12$",
    "options": [
      "$20$",
      "$18$",
      "$22$",
      "$16$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x = 30$ directly:</p>\n    <p><strong>Step 1:</strong> Substitute $30$ for $x$ in the term:</p>\n    <p>$$\\frac{4(30)}{15} + 12$$</p>\n    <p><strong>Step 2:</strong> Perform the multiplication in the numerator:</p>\n    <p>$$4 \\times 30 = 120$$</p>\n    <p>This gives:</p>\n    <p>$$\\frac{120}{15} + 12$$</p>\n    <p><strong>Step 3:</strong> Perform the division:</p>\n    <p>$$120 \\div 15 = 8$$</p>\n    <p><strong>Step 4:</strong> Add 12 to the result:</p>\n    <p>$$8 + 12 = 20$$</p>\n    <p>Therefore, the correct answer is <strong>$20$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.014Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "For $x = 35$, find the value of the algebraic expression: $4\\left(\\frac{x-15}{10}\\right)$",
    "options": [
      "$8$",
      "$10$",
      "$6$",
      "$12$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x = 35$ and follow the order of operations:</p>\n    <p><strong>Step 1:</strong> Substitute $35$ into the expression:</p>\n    <p>$$4\\left(\\frac{35-15}{10}\\right)$$</p>\n    <p><strong>Step 2:</strong> Simplify the subtraction inside the numerator:</p>\n    <p>$$35 - 15 = 20$$</p>\n    <p>This gives:</p>\n    <p>$$4\\left(\\frac{20}{10}\\right)$$</p>\n    <p><strong>Step 3:</strong> Perform the fraction division:</p>\n    <p>$$\\frac{20}{10} = 2$$</p>\n    <p><strong>Step 4:</strong> Multiply by 4:</p>\n    <p>$$4 \\times 2 = 8$$</p>\n    <p>Therefore, the evaluated value is <strong>$8$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.015Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "For $x = 40$, find the value of the algebraic expression: $50 - \\frac{4x}{5}$",
    "options": [
      "$18$",
      "$20$",
      "$16$",
      "$22$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x = 40$ step-by-step:</p>\n    <p><strong>Step 1:</strong> Replace $x$ with $40$ in the expression:</p>\n    <p>$$50 - \\frac{4(40)}{5}$$</p>\n    <p><strong>Step 2:</strong> Simplify the fraction multiplication/division:</p>\n    <p>$$4 \\times 40 = 160 \\implies \\frac{160}{5}$$</p>\n    <p>Perform the division:</p>\n    <p>$$160 \\div 5 = 32$$</p>\n    <p><strong>Step 3:</strong> Subtract the result from 50:</p>\n    <p>$$50 - 32 = 18$$</p>\n    <p>Therefore, the final answer is <strong>$18$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.016Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "For $x = 30$, find the value of the algebraic expression: $25 - \\frac{300}{x}$",
    "options": [
      "$15$",
      "$10$",
      "$20$",
      "$5$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x = 30$ and evaluate:</p>\n    <p><strong>Step 1:</strong> Replace $x$ with $30$ in the fraction:</p>\n    <p>$$25 - \\frac{300}{30}$$</p>\n    <p><strong>Step 2:</strong> Simplify the fraction division:</p>\n    <p>$$300 \\div 30 = 10$$</p>\n    <p><strong>Step 3:</strong> Subtract 10 from 25:</p>\n    <p>$$25 - 10 = 15$$</p>\n    <p>Therefore, the evaluated value is <strong>$15$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.017Z"
  },

  // --- QUESTION 3 PARTS (a to b) ---
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "A water tank contains $p$ litres of water. If 90 litres of water are added to the tank, how many litres of water are there now in the tank?",
    "options": [
      "$p + 90$",
      "$p - 90$",
      "$90p$",
      "$\\frac{p}{90}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's translate this word problem into algebra:</p>\n    <p><strong>Step 1:</strong> Identify the starting amount of water: $p$ litres.</p>\n    <p><strong>Step 2:</strong> Identify the amount added: 90 litres.</p>\n    <p><strong>Step 3:</strong> \"Added to\" means addition. Therefore, the total volume of water is the starting amount plus the added amount:</p>\n    <p>$$p + 90\\text{ litres}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.018Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "A water tank contains $p + 90$ litres of water. If this water is divided equally among 120 smaller containers, how much water is in each container (in litres)?",
    "options": [
      "$\\frac{p+90}{120}$",
      "$\\frac{p}{120} + 90$",
      "$\\frac{p-90}{120}$",
      "$120(p + 90)$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's formulate the division as an algebraic fraction:</p>\n    <p><strong>Step 1:</strong> The total amount of water to be divided is: $(p + 90)$ litres.</p>\n    <p><strong>Step 2:</strong> It is divided equally into $120$ containers. Dividing a total $A$ into $B$ parts is written as $\\frac{A}{B}$.</p>\n    <p><strong>Step 3:</strong> Applying this to our quantities gives:</p>\n    <p>$$\\frac{p+90}{120}\\text{ litres}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.019Z"
  },

  // --- QUESTION 4 PARTS (a to d) ---
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write the following expression using algebraic notation: A number, $y$, is divided by 15, and 6 is subtracted from the result.",
    "options": [
      "$\\frac{y}{15} - 6$",
      "$\\frac{y-6}{15}$",
      "$\\frac{15}{y} - 6$",
      "$15y - 6$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's build this expression step-by-step:</p>\n    <p><strong>Step 1:</strong> \"A number, $y$, is divided by 15\" translates to:</p>\n    <p>$$\\frac{y}{15}$$</p>\n    <p><strong>Step 2:</strong> \"6 is subtracted from the result\" means we subtract 6 from that first term:</p>\n    <p>$$\\frac{y}{15} - 6$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.020Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following expression using algebraic notation: Nine is added to a number, $p$, and the result is divided by $\\frac{1}{3}$.",
    "options": [
      "$\\frac{p+9}{\\frac{1}{3}}$",
      "$\\frac{p}{\\frac{1}{3}} + 9$",
      "$\\frac{1}{3}(p + 9)$",
      "$\\frac{\\frac{1}{3}}{p+9}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's convert this step-by-step:</p>\n    <p><strong>Step 1:</strong> \"Nine is added to a number, $p$\" forms the grouped sum:</p>\n    <p>$$(p + 9)$$</p>\n    <p><strong>Step 2:</strong> \"and the result is divided by $\\frac{1}{3}$\" means the entire sum is divided by the fraction:</p>\n    <p>$$\\frac{p+9}{\\frac{1}{3}}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.021Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following expression using algebraic notation: Thirteen is subtracted from a number, $k$, and the result is divided by 6.",
    "options": [
      "$\\frac{k-13}{6}$",
      "$\\frac{k}{6} - 13$",
      "$\\frac{13-k}{6}$",
      "$\\frac{6}{k-13}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's build this mathematical expression:</p>\n    <p><strong>Step 1:</strong> \"Thirteen is subtracted from a number, $k$\" yields the grouped term:</p>\n    <p>$$(k - 13)$$</p>\n    <p><strong>Step 2:</strong> \"and the result is divided by 6\" means we divide that grouped difference by 6:</p>\n    <p>$$\\frac{k-13}{6}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.022Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following expression using algebraic notation: A number, $z$, is subtracted from 12, and the result is divided by 20.",
    "options": [
      "$\\frac{12-z}{20}$",
      "$\\frac{z-12}{20}$",
      "$\\frac{12}{20} - z$",
      "$12 - \\frac{z}{20}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's follow the wording carefully:</p>\n    <p><strong>Step 1:</strong> \"A number, $z$, is subtracted from 12\" means we start with 12 and subtract $z$:</p>\n    <p>$$(12 - z)$$</p>\n    <p><strong>Step 2:</strong> \"and the result is divided by 20\" means we divide the entire grouped subtraction by 20:</p>\n    <p>$$\\frac{12-z}{20}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.023Z"
  },

  // --- QUESTION 5 PARTS (a to h) ---
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Substitute $m = 12$ and $n = 24$ to evaluate: $\\frac{m}{n}$",
    "options": [
      "$\\frac{1}{2}$",
      "$2$",
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute the values directly:</p>\n    <p>$$\\frac{m}{n} = \\frac{12}{24}$$</p>\n    <p>Simplify the fraction by dividing both the numerator and the denominator by their greatest common divisor ($12$):</p>\n    <p>$$\\frac{12 \\div 12}{24 \\div 12} = \\frac{1}{2}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.024Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Substitute $m = 12$ and $n = 24$ to evaluate: $\\frac{n}{m}$",
    "options": [
      "$2$",
      "$\\frac{1}{2}$",
      "$3$",
      "$1.5$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $m=12$ and $n=24$ directly:</p>\n    <p>$$\\frac{n}{m} = \\frac{24}{12}$$</p>\n    <p>Perform the division:</p>\n    <p>$$24 \\div 12 = 2$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.025Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Substitute $m = 12$ and $n = 24$ to evaluate: $\\frac{m+n}{6}$",
    "options": [
      "$6$",
      "$8$",
      "$5$",
      "$4$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute and evaluate step-by-step:</p>\n    <p><strong>Step 1:</strong> Replace $m$ with $12$ and $n$ with $24$ in the expression:</p>\n    <p>$$\\frac{12+24}{6}$$</p>\n    <p><strong>Step 2:</strong> Simplify the numerator first:</p>\n    <p>$$12 + 24 = 36$$</p>\n    <p><strong>Step 3:</strong> Perform the division:</p>\n    <p>$$\\frac{36}{6} = 6$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.026Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Substitute $m = 12$ and $n = 24$ to evaluate: $\\frac{n-m}{4}$",
    "options": [
      "$3$",
      "$4$",
      "$2$",
      "$5$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $m = 12$ and $n = 24$:</p>\n    <p><strong>Step 1:</strong> Write out the substituted expression:</p>\n    <p>$$\\frac{24 - 12}{4}$$</p>\n    <p><strong>Step 2:</strong> Evaluate the numerator subtraction:</p>\n    <p>$$24 - 12 = 12$$</p>\n    <p><strong>Step 3:</strong> Perform the final division:</p>\n    <p>$$\\frac{12}{4} = 3$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.027Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Substitute $m = 12$ and $n = 24$ to evaluate: $\\frac{m}{3} + 8$",
    "options": [
      "$12$",
      "$10$",
      "$14$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $m = 12$ directly:</p>\n    <p><strong>Step 1:</strong> Substitute $12$ for $m$ in the expression:</p>\n    <p>$$\\frac{12}{3} + 8$$</p>\n    <p><strong>Step 2:</strong> Perform division first:</p>\n    <p>$$12 \\div 3 = 4$$</p>\n    <p><strong>Step 3:</strong> Add 8 to the result:</p>\n    <p>$$4 + 8 = 12$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.028Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Substitute $m = 12$ and $n = 24$ to evaluate: $\\frac{36}{m} + 5$",
    "options": [
      "$8$",
      "$6$",
      "$7$",
      "$9$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $m = 12$ directly:</p>\n    <p><strong>Step 1:</strong> Substitute $12$ for $m$ in the denominator:</p>\n    <p>$$\\frac{36}{12} + 5$$</p>\n    <p><strong>Step 2:</strong> Evaluate the division portion:</p>\n    <p>$$36 \\div 12 = 3$$</p>\n    <p><strong>Step 3:</strong> Add 5 to the result:</p>\n    <p>$$3 + 5 = 8$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.029Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Substitute $m = 12$ and $n = 24$ to evaluate: $\\frac{m+n}{9}$",
    "options": [
      "$4$",
      "$3$",
      "$5$",
      "$6$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's solve this step-by-step:</p>\n    <p><strong>Step 1:</strong> Replace $m$ with $12$ and $n$ with $24$ in the expression:</p>\n    <p>$$\\frac{12+24}{9}$$</p>\n    <p><strong>Step 2:</strong> Add the terms in the numerator:</p>\n    <p>$$12 + 24 = 36$$</p>\n    <p><strong>Step 3:</strong> Divide by 9:</p>\n    <p>$$\\frac{36}{9} = 4$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.030Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Substitute $m = 12$ and $n = 24$ to evaluate: $\\frac{180}{m+n}$",
    "options": [
      "$5$",
      "$6$",
      "$4$",
      "$10$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's evaluate the expression step-by-step:</p>\n    <p><strong>Step 1:</strong> Substitute the values in the denominator:</p>\n    <p>$$\\frac{180}{12+24}$$</p>\n    <p><strong>Step 2:</strong> Simplify the denominator addition first:</p>\n    <p>$$12 + 24 = 36$$</p>\n    <p>This gives:</p>\n    <p>$$\\frac{180}{36}$$</p>\n    <p><strong>Step 3:</strong> Perform the division:</p>\n    <p>$$180 \\div 36 = 5$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.031Z"
  },

  // --- QUESTION 6 PARTS (a to e) ---
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write the following expression using algebraic notation: A number, $x$, is multiplied by 8 and divided by 3.",
    "options": [
      "$\\frac{8x}{3}$",
      "$\\frac{3x}{8}$",
      "$8x - 3$",
      "$8x \\times 3$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's build this algebraic representation:</p>\n    <p><strong>Step 1:</strong> \"A number, $x$, is multiplied by 8\" is written simply as:</p>\n    <p>$$8x$$</p>\n    <p><strong>Step 2:</strong> \"divided by 3\" is written by putting $8x$ in the numerator and $3$ in the denominator:</p>\n    <p>$$\\frac{8x}{3}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.032Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write the following expression using algebraic notation: A number, $x$, is multiplied by 13 and divided by 5.",
    "options": [
      "$\\frac{13x}{5}$",
      "$\\frac{5x}{13}$",
      "$13x - 5$",
      "$13x \\times 5$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's map the phrase directly into algebra:</p>\n    <p><strong>Step 1:</strong> \"A number, $x$, is multiplied by 13\" is written as:</p>\n    <p>$$13x$$</p>\n    <p><strong>Step 2:</strong> \"divided by 5\" is represented as a fraction with 5 as the denominator:</p>\n    <p>$$\\frac{13x}{5}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.033Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following expression using algebraic notation: $\\frac{1}{6}$ of $y$.",
    "options": [
      "$\\frac{y}{6}$",
      "$6y$",
      "$y - 6$",
      "$\\frac{6}{y}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's evaluate the fraction statement:</p>\n    <p><strong>Step 1:</strong> \"$\\frac{1}{6}$ of $y$\" means multiplying $y$ by $\\frac{1}{6}$:</p>\n    <p>$$\\frac{1}{6} \\times y = \\frac{1 \\times y}{6} = \\frac{y}{6}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.034Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write the following expression using algebraic notation: A number, $w$, is multiplied by $\\frac{4}{5}$.",
    "options": [
      "$\\frac{4w}{5}$",
      "$\\frac{5w}{4}$",
      "$\\frac{w}{20}$",
      "$\\frac{4}{5w}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's represent the multiplication using algebra:</p>\n    <p><strong>Step 1:</strong> Multiplying a number $w$ by a fraction $\\frac{4}{5}$ is written as:</p>\n    <p>$$\\frac{4}{5} \\times w = \\frac{4w}{5}$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.035Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Write the following expression using algebraic notation: A number, $z$, is divided by 6, 8 is added to the result, and this final result is multiplied by 11.",
    "options": [
      "$11\\left(\\frac{z}{6} + 8\\right)$",
      "$\\frac{11z}{6} + 8$",
      "$\\frac{11(z+8)}{6}$",
      "$\\frac{z+8}{6} \\times 11$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's construct the algebraic expression step-by-step:</p>\n    <p><strong>Step 1:</strong> \"A number, $z$, is divided by 6\" translates to:</p>\n    <p>$$\\frac{z}{6}$$</p>\n    <p><strong>Step 2:</strong> \"8 is added to the result\" becomes:</p>\n    <p>$$\\frac{z}{6} + 8$$</p>\n    <p><strong>Step 3:</strong> \"and this final result is multiplied by 11\" means we multiply the entire expression by 11. We must enclose it in parentheses to apply the multiplication to the whole term:</p>\n    <p>$$11\\left(\\frac{z}{6} + 8\\right)$$</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.036Z"
  },

  // --- QUESTION 7 PARTS (a to c) ---
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate the following algebraic expression for $x = 28$: $\\frac{3x}{4}$",
    "options": [
      "$21$",
      "$24$",
      "$18$",
      "$28$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x=28$ step-by-step:</p>\n    <p><strong>Step 1:</strong> Substitute $28$ into the expression:</p>\n    <p>$$\\frac{3(28)}{4}$$</p>\n    <p><strong>Step 2:</strong> To make calculations easier, divide $28$ by $4$ first:</p>\n    <p>$$28 \\div 4 = 7$$</p>\n    <p><strong>Step 3:</strong> Multiply by 3:</p>\n    <p>$$3 \\times 7 = 21$$</p>\n    <p>Therefore, the evaluated result is <strong>$21$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.037Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate the following algebraic expression for $x = 28$: $\\frac{5x}{7}$",
    "options": [
      "$20$",
      "$25$",
      "$15$",
      "$35$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's evaluate by substituting $x=28$:</p>\n    <p><strong>Step 1:</strong> Replace $x$ with $28$:</p>\n    <p>$$\\frac{5(28)}{7}$$</p>\n    <p><strong>Step 2:</strong> Divide $28$ by $7$ first to simplify:</p>\n    <p>$$28 \\div 7 = 4$$</p>\n    <p><strong>Step 3:</strong> Multiply the result by 5:</p>\n    <p>$$5 \\times 4 = 20$$</p>\n    <p>Therefore, the evaluated value is <strong>$20$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.038Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate the following algebraic expression for $x = 28$: $\\frac{3(x+7)}{5}$",
    "options": [
      "$21$",
      "$25$",
      "$15$",
      "$18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's substitute $x=28$ step-by-step:</p>\n    <p><strong>Step 1:</strong> Replace $x$ with $28$ inside the parentheses:</p>\n    <p>$$\\frac{3(28+7)}{5}$$</p>\n    <p><strong>Step 2:</strong> Simplify the addition inside parentheses:</p>\n    <p>$$28 + 7 = 35$$</p>\n    <p>This gives:</p>\n    <p>$$\\frac{3(35)}{5}$$</p>\n    <p><strong>Step 3:</strong> Divide $35$ by $5$ first:</p>\n    <p>$$35 \\div 5 = 7$$</p>\n    <p><strong>Step 4:</strong> Multiply by 3:</p>\n    <p>$$3 \\times 7 = 21$$</p>\n    <p>Therefore, the final value is <strong>$21$</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.039Z"
  },

  // --- QUESTION 8 PARTS (a to b iii) ---
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "A piece of string is $w$ metres in length. If it is divided into 8 equal parts, find the length of each part in terms of $w$.",
    "options": [
      "$\\frac{w}{8}$",
      "$8w$",
      "$w - 8$",
      "$\\frac{8}{w}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's write this expression:</p>\n    <p><strong>Step 1:</strong> Identify the total length of the string: $w$ metres.</p>\n    <p><strong>Step 2:</strong> It is divided into 8 equal parts. Splitting a value $A$ into $B$ equal parts translates directly to division, written as a fraction:</p>\n    <p>$$\\frac{w}{8}$$</p>\n    <p>Therefore, the length of each part is <strong>$\\frac{w}{8}$</strong> metres.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.040Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "A piece of string of length $w$ is divided into 8 equal parts. Find the length of each part when $w = 24$.",
    "options": [
      "$3$ metres",
      "$4$ metres",
      "$2$ metres",
      "$6$ metres"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's calculate the length of each part:</p>\n    <p><strong>Step 1:</strong> The algebraic expression for each part is $\\frac{w}{8}$.</p>\n    <p><strong>Step 2:</strong> Substitute the given value $w = 24$:</p>\n    <p>$$\\frac{24}{8}$$</p>\n    <p><strong>Step 3:</strong> Perform the division:</p>\n    <p>$$24 \\div 8 = 3\\text{ metres}$$</p>\n    <p>Therefore, the length of each part is <strong>$3$ metres</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.041Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "A piece of string of length $w$ is divided into 8 equal parts. Find the length of each part when $w = 56$.",
    "options": [
      "$7$ metres",
      "$8$ metres",
      "$6$ metres",
      "$9$ metres"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's calculate the length of each part:</p>\n    <p><strong>Step 1:</strong> The algebraic expression for each part is $\\frac{w}{8}$.</p>\n    <p><strong>Step 2:</strong> Substitute $w = 56$:</p>\n    <p>$$\\frac{56}{8}$$</p>\n    <p><strong>Step 3:</strong> Perform the division:</p>\n    <p>$$56 \\div 8 = 7\\text{ metres}$$</p>\n    <p>Therefore, the length of each part is <strong>$7$ metres</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.042Z"
  },
  {
    "chapterId": "y7-6",
    "topicId": "y7-6a",
    "topicCode": "6A",
    "topicTitle": "Algebraic Fractions & Expressions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "A piece of string of length $w$ is divided into 8 equal parts. Find the length of each part when $w = 100$.",
    "options": [
      "$12.5$ metres",
      "$12$ metres",
      "$13$ metres",
      "$10.5$ metres"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's calculate the length of each part:</p>\n    <p><strong>Step 1:</strong> The algebraic expression for each part is $\\frac{w}{8}$.</p>\n    <p><strong>Step 2:</strong> Substitute $w = 100$:</p>\n    <p>$$\\frac{100}{8}$$</p>\n    <p><strong>Step 3:</strong> Perform the division (either by dividing by 4 twice or by long division):</p>\n    <p>$$100 \\div 8 = 12.5\\text{ metres}$$</p>\n    <p>Therefore, the length of each part is <strong>$12.5$ metres</strong>.</p>\n  </div>",
    "createdAt": "2026-05-17T18:49:46.043Z"
  }
];

export const importYear7Ch6A = async (forceReset = false) => {
  console.log('[Ch6A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch6A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-6a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log(`Deleted ${existingSnap.size} existing questions.`);
    }

    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-6a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log(`[Ch6A Year 7 Import] SUCCESS! ${importedCount} new questions imported.`);
    return importedCount;
  } catch (error) {
    console.error('[Ch6A Year 7 Import] ERROR:', error);
    return 0;
  }
};
