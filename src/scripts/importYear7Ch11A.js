import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $3x$ for $x = -3$.",
    "options": [
      "$-9$",
      "$9$",
      "$-6$",
      "$6$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Replace the variable $x$ with the integer value $-3$ inside the expression:</p>\n    <p>$$3x = 3 \\times (-3)$$</p>\n    <p><strong>Step 2:</strong> Multiply a positive integer by a negative integer to get a negative product:</p>\n    <p>$$3 \\times (-3) = -9$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.200Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-x$ for $x = -5$.",
    "options": [
      "$5$",
      "$-5$",
      "$0$",
      "$1$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -5$ into the expression:</p>\n    <p>$$-x = -(-5)$$</p>\n    <p><strong>Step 2:</strong> The negative of a negative number is positive:</p>\n    <p>$$-(-5) = 5$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $x + 4$ for $x = -3$.",
    "options": [
      "$1$",
      "$-7$",
      "$-1$",
      "$7$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>\n    <p>$$x + 4 = -3 + 4$$</p>\n    <p><strong>Step 2:</strong> Add $-3$ and $4$:</p>\n    <p>$$-3 + 4 = 1$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $x - 5$ for $x = -4$.",
    "options": [
      "$-9$",
      "$1$",
      "$-1$",
      "$9$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -4$ into the expression:</p>\n    <p>$$x - 5 = -4 - 5$$</p>\n    <p><strong>Step 2:</strong> Subtracting $5$ from $-4$ yields:</p>\n    <p>$$-4 - 5 = -9$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $3x + 5$ for $x = -2$.",
    "options": [
      "$-1$",
      "$11$",
      "$1$",
      "$-11$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -2$ into the expression:</p>\n    <p>$$3x + 5 = 3 \\times (-2) + 5$$</p>\n    <p><strong>Step 2:</strong> Apply the order of operations (multiplication first):</p>\n    <p>$$3 \\times (-2) = -6$$</p>\n    <p><strong>Step 3:</strong> Perform the addition:</p>\n    <p>$$-6 + 5 = -1$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $x^3$ for $x = -4$.",
    "options": [
      "$-64$",
      "$64$",
      "$-12$",
      "$16$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -4$ into the expression:</p>\n    <p>$$x^3 = (-4)^3$$</p>\n    <p><strong>Step 2:</strong> Cube the negative number by multiplying it by itself three times:</p>\n    <p>$$(-4) \\times (-4) \\times (-4) = 16 \\times (-4) = -64$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-x^3$ for $x = -3$.",
    "options": [
      "$27$",
      "$-27$",
      "$9$",
      "$-9$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>\n    <p>$$-x^3 = -(-3)^3$$</p>\n    <p><strong>Step 2:</strong> Cube the negative number first:</p>\n    <p>$$(-3)^3 = (-3) \\times (-3) \\times (-3) = -27$$</p>\n    <p><strong>Step 3:</strong> Apply the negative sign outside the brackets:</p>\n    <p>$$-(-27) = 27$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-x)^2$ for $x = -4$.",
    "options": [
      "$16$",
      "$-16$",
      "$8$",
      "$-8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -4$ into the expression:</p>\n    <p>$$(-x)^2 = (-(-4))^2$$</p>\n    <p><strong>Step 2:</strong> Simplify the inner double negative:</p>\n    <p>$$-(-4) = 4$$</p>\n    <p><strong>Step 3:</strong> Square the positive result:</p>\n    <p>$$4^2 = 16$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $5 - x$ for $x = -3$.",
    "options": [
      "$8$",
      "$2$",
      "$-8$",
      "$-2$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>\n    <p>$$5 - x = 5 - (-3)$$</p>\n    <p><strong>Step 2:</strong> Convert the subtraction of a negative into addition:</p>\n    <p>$$5 + 3 = 8$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $4 - 3x$ for $x = -2$.",
    "options": [
      "$10$",
      "$-2$",
      "$2$",
      "$-10$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -2$ into the expression:</p>\n    <p>$$4 - 3x = 4 - 3 \\times (-2)$$</p>\n    <p><strong>Step 2:</strong> Multiply $-3$ by $-2$ first:</p>\n    <p>$$-3 \\times (-2) = +6$$</p>\n    <p><strong>Step 3:</strong> Perform the final addition:</p>\n    <p>$$4 + 6 = 10$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $7 + 3x$ for $x = -3$.",
    "options": [
      "$-2$",
      "$16$",
      "$2$",
      "$-16$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>\n    <p>$$7 + 3x = 7 + 3 \\times (-3)$$</p>\n    <p><strong>Step 2:</strong> Multiply first:</p>\n    <p>$$3 \\times (-3) = -9$$</p>\n    <p><strong>Step 3:</strong> Add the negative product to $7$:</p>\n    <p>$$7 + (-9) = 7 - 9 = -2$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $3 - 4x$ for $x = -3$.",
    "options": [
      "$15$",
      "$-9$",
      "$9$",
      "$-15$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -3$ into the expression:</p>\n    <p>$$3 - 4x = 3 - 4 \\times (-3)$$</p>\n    <p><strong>Step 2:</strong> Multiply $-4$ by $-3$ first (negative times negative is positive):</p>\n    <p>$$-4 \\times (-3) = +12$$</p>\n    <p><strong>Step 3:</strong> Perform the final addition:</p>\n    <p>$$3 + 12 = 15$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $3x + 7$ for $x = -20$.",
    "options": [
      "$-53$",
      "$67$",
      "$-67$",
      "$53$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -20$ into the expression:</p>\n    <p>$$3x + 7 = 3 \\times (-20) + 7$$</p>\n    <p><strong>Step 2:</strong> Multiply:</p>\n    <p>$$3 \\times (-20) = -60$$</p>\n    <p><strong>Step 3:</strong> Add $7$:</p>\n    <p>$$-60 + 7 = -53$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-x + 12$ for $x = -40$.",
    "options": [
      "$52$",
      "$-28$",
      "$28$",
      "$-52$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -40$ into the expression:</p>\n    <p>$$-x + 12 = -(-40) + 12$$</p>\n    <p><strong>Step 2:</strong> Simplify the double negative:</p>\n    <p>$$40 + 12 = 52$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $4x - 9$ for $x = -15$.",
    "options": [
      "$-69$",
      "$-51$",
      "$69$",
      "$51$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -15$ into the expression:</p>\n    <p>$$4x - 9 = 4 \\times (-15) - 9$$</p>\n    <p><strong>Step 2:</strong> Multiply:</p>\n    <p>$$4 \\times (-15) = -60$$</p>\n    <p><strong>Step 3:</strong> Subtract $9$:</p>\n    <p>$$-60 - 9 = -69$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $15 - x$ for $x = -25$.",
    "options": [
      "$40$",
      "$-10$",
      "$10$",
      "$-40$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -25$ into the expression:</p>\n    <p>$$15 - x = 15 - (-25)$$</p>\n    <p><strong>Step 2:</strong> Simplify subtraction of a negative:</p>\n    <p>$$15 + 25 = 40$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $8 - 3x$ for $x = -12$.",
    "options": [
      "$44$",
      "$-28$",
      "$28$",
      "$-44$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -12$ into the expression:</p>\n    <p>$$8 - 3x = 8 - 3 \\times (-12)$$</p>\n    <p><strong>Step 2:</strong> Multiply $-3$ by $-12$ (negative times negative is positive):</p>\n    <p>$$-3 \\times (-12) = +36$$</p>\n    <p><strong>Step 3:</strong> Add to $8$:</p>\n    <p>$$8 + 36 = 44$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $7 - 5x$ for $x = -10$.",
    "options": [
      "$57$",
      "$-43$",
      "$43$",
      "$-57$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -10$ into the expression:</p>\n    <p>$$7 - 5x = 7 - 5 \\times (-10)$$</p>\n    <p><strong>Step 2:</strong> Multiply $-5$ by $-10$:</p>\n    <p>$$-5 \\times (-10) = +50$$</p>\n    <p><strong>Step 3:</strong> Perform final addition:</p>\n    <p>$$7 + 50 = 57$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $\\frac{x}{3}$ for $x = -45$.",
    "options": [
      "$-15$",
      "$15$",
      "$-135$",
      "$135$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -45$ into the fraction:</p>\n    <p>$$\\frac{x}{3} = \\frac{-45}{3}$$</p>\n    <p><strong>Step 2:</strong> Divide a negative number by a positive number to yield a negative quotient:</p>\n    <p>$$\\frac{-45}{3} = -15$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $\\frac{x - 5}{3}$ for $x = -25$.",
    "options": [
      "$-10$",
      "$-6$",
      "$10$",
      "$6$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $x = -25$ into the expression:</p>\n    <p>$$\\frac{x - 5}{3} = \\frac{-25 - 5}{3}$$</p>\n    <p><strong>Step 2:</strong> Simplify the numerator first:</p>\n    <p>$$-25 - 5 = -30$$</p>\n    <p><strong>Step 3:</strong> Perform the division:</p>\n    <p>$$\\frac{-30}{3} = -10$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -3$, $n = 5$ and $p = -60$ to evaluate the expression: $m + n$.",
    "options": [
      "$2$",
      "$-8$",
      "$-2$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $m = -3$ and $n = 5$ into the expression:</p>\n    <p>$$m + n = -3 + 5$$</p>\n    <p><strong>Step 2:</strong> Add the integers:</p>\n    <p>$$-3 + 5 = 2$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -3$, $n = 5$ and $p = -60$ to evaluate the expression: $m + p$.",
    "options": [
      "$-63$",
      "$-57$",
      "$63$",
      "$57$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $m = -3$ and $p = -60$ into the expression:</p>\n    <p>$$m + p = -3 + (-60)$$</p>\n    <p><strong>Step 2:</strong> Add the two negative numbers:</p>\n    <p>$$-3 - 60 = -63$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -3$, $n = 5$ and $p = -60$ to evaluate the expression: $m - p$.",
    "options": [
      "$57$",
      "$-63$",
      "$-57$",
      "$63$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $m = -3$ and $p = -60$ into the expression:</p>\n    <p>$$m - p = -3 - (-60)$$</p>\n    <p><strong>Step 2:</strong> Simplify subtraction of negative number:</p>\n    <p>$$-3 + 60 = 57$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -3$, $n = 5$ and $p = -60$ to evaluate the expression: $mp$.",
    "options": [
      "$180$",
      "$-180$",
      "$63$",
      "$-63$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $m = -3$ and $p = -60$ into the multiplication:</p>\n    <p>$$mp = (-3) \\times (-60)$$</p>\n    <p><strong>Step 2:</strong> Two negative factors multiplied result in a positive product:</p>\n    <p>$$(-3) \\times (-60) = 180$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -3$, $n = 5$ and $p = -60$ to evaluate the expression: $np$.",
    "options": [
      "$-300$",
      "$300$",
      "$-12$",
      "$12$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $n = 5$ and $p = -60$:</p>\n    <p>$$np = 5 \\times (-60)$$</p>\n    <p><strong>Step 2:</strong> Multiply positive by negative to get a negative product:</p>\n    <p>$$5 \\times (-60) = -300$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -3$, $n = 5$ and $p = -60$ to evaluate the expression: $\\frac{p}{m}$.",
    "options": [
      "$20$",
      "$-20$",
      "$180$",
      "$-180$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $p = -60$ and $m = -3$ into the fraction:</p>\n    <p>$$\\frac{p}{m} = \\frac{-60}{-3}$$</p>\n    <p><strong>Step 2:</strong> Negative divided by negative is positive:</p>\n    <p>$$\\frac{-60}{-3} = 20$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -3$, $n = 5$ and $p = -60$ to evaluate the expression: $mnp$.",
    "options": [
      "$900$",
      "$-900$",
      "$180$",
      "$-180$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $m = -3$, $n = 5$, and $p = -60$ into the expression:</p>\n    <p>$$mnp = (-3) \\times 5 \\times (-60)$$</p>\n    <p><strong>Step 2:</strong> Multiply from left to right:</p>\n    <p>$$(-3) \\times 5 = -15$$</p>\n    <p><strong>Step 3:</strong> Multiply the result by $-60$:</p>\n    <p>$$(-15) \\times (-60) = 900$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -3$, $n = 5$ and $p = -60$ to evaluate the expression: $\\frac{p}{n}$.",
    "options": [
      "$-12$",
      "$12$",
      "$-300$",
      "$300$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $p = -60$ and $n = 5$ into the fraction:</p>\n    <p>$$\\frac{p}{n} = \\frac{-60}{5}$$</p>\n    <p><strong>Step 2:</strong> Divide to find the quotient:</p>\n    <p>$$\\frac{-60}{5} = -12$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $4x + 6$ for $x = -3$.",
    "options": [
      "$-6$",
      "$18$",
      "$-18$",
      "$6$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p>$$4x + 6 = 4 \\times (-3) + 6$$</p>\n    <p>$$= -12 + 6$$</p>\n    <p>$$= -6$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-3x + 8$ for $x = -3$.",
    "options": [
      "$17$",
      "$-1$",
      "$1$",
      "$-17$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p>$$-3x + 8 = -3 \\times (-3) + 8$$</p>\n    <p>$$= 9 + 8$$</p>\n    <p>$$= 17$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $6(x + 5)$ for $x = -3$.",
    "options": [
      "$12$",
      "$-13$",
      "$48$",
      "$-48$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p>$$6(x + 5) = 6(-3 + 5)$$</p>\n    <p>$$= 6(2)$$</p>\n    <p>$$= 12$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-4(x + 7)$ for $x = -3$.",
    "options": [
      "$-16$",
      "$16$",
      "$-40$",
      "$40$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p>$$-4(x + 7) = -4(-3 + 7)$$</p>\n    <p>$$= -4(4)$$</p>\n    <p>$$= -16$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-3x^2$ for $x = -3$.",
    "options": [
      "$-27$",
      "$27$",
      "$-81$",
      "$81$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Square the integer first according to order of operations:</p>\n    <p>$$x^2 = (-3)^2 = 9$$</p>\n    <p><strong>Step 2:</strong> Multiply by the coefficient $-3$:</p>\n    <p>$$-3 \\times 9 = -27$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-2x)^2$ for $x = -3$.",
    "options": [
      "$36$",
      "$-36$",
      "$12$",
      "$-12$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Calculate the expression inside the brackets first:</p>\n    <p>$$-2x = -2 \\times (-3) = 6$$</p>\n    <p><strong>Step 2:</strong> Square the result:</p>\n    <p>$$6^2 = 36$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $6 + 3a$ for $a = -2$.",
    "options": [
      "$0$",
      "$12$",
      "$-12$",
      "$18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$6 + 3a = 6 + 3(-2)$$</p>\n    <p>$$= 6 - 6 = 0$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $8 - 4a$ for $a = -2$.",
    "options": [
      "$16$",
      "$0$",
      "$-16$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$8 - 4a = 8 - 4(-2)$$</p>\n    <p>$$= 8 + 8 = 16$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $5a + 12$ for $a = -2$.",
    "options": [
      "$2$",
      "$-2$",
      "$22$",
      "$-22$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$5a + 12 = 5(-2) + 12$$</p>\n    <p>$$= -10 + 12 = 2$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $9 - a$ for $a = -2$.",
    "options": [
      "$11$",
      "$7$",
      "$-11$",
      "$-7$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$9 - a = 9 - (-2)$$</p>\n    <p>$$= 9 + 2 = 11$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-a)^3$ for $a = -2$.",
    "options": [
      "$8$",
      "$-8$",
      "$6$",
      "$-6$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$(-a)^3 = (-(-2))^3$$</p>\n    <p>$$= (2)^3 = 8$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-a^3$ for $a = -2$.",
    "options": [
      "$8$",
      "$-8$",
      "$6$",
      "$-6$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$-a^3 = -(-2)^3$$</p>\n    <p>$$= -(-8) = 8$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-3a)^2$ for $a = -2$.",
    "options": [
      "$36$",
      "$-36$",
      "$12$",
      "$-12$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$(-3a)^2 = (-3(-2))^2$$</p>\n    <p>$$= (6)^2 = 36$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-3a)^3$ for $a = -2$.",
    "options": [
      "$216$",
      "$-216$",
      "$18$",
      "$-18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$(-3a)^3 = (-3(-2))^3$$</p>\n    <p>$$= (6)^3 = 216$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $a^3 + 5$ for $a = -2$.",
    "options": [
      "$-3$",
      "$13$",
      "$-1$",
      "$11$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$a^3 + 5 = (-2)^3 + 5$$</p>\n    <p>$$= -8 + 5 = -3$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-5z$ for $z = -4$.",
    "options": [
      "$20$",
      "$-20$",
      "$9$",
      "$-9$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$-5z = -5 \\times (-4) = 20$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $z^4$ for $z = -4$.",
    "options": [
      "$256$",
      "$-256$",
      "$64$",
      "$-64$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$z^4 = (-4)^4$$</p>\n    <p>$$= (-4) \\times (-4) \\times (-4) \\times (-4) = 256$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $7 - 3z$ for $z = -4$.",
    "options": [
      "$19$",
      "$-5$",
      "$5$",
      "$-19$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$7 - 3z = 7 - 3 \\times (-4)$$</p>\n    <p>$$= 7 + 12 = 19$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(2z)^3$ for $z = -3$.",
    "options": [
      "$-216$",
      "$216$",
      "$-18$",
      "$18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$(2z)^3 = (2 \\times (-3))^3$$</p>\n    <p>$$= (-6)^3 = -216$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-z)^3$ for $z = -4$.",
    "options": [
      "$64$",
      "$-64$",
      "$12$",
      "$-12$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$(-z)^3 = (-(-4))^3$$</p>\n    <p>$$= (4)^3 = 64$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-3z^2$ for $z = -4$.",
    "options": [
      "$-48$",
      "$48$",
      "$-144$",
      "$144$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$-3z^2 = -3 \\times (-4)^2$$</p>\n    <p>$$= -3 \\times 16 = -48$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -30$, $n = -15$ and $p = 90$ to evaluate: $m + n$.",
    "options": [
      "$-45$",
      "$-15$",
      "$45$",
      "$15$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$m + n = -30 + (-15) = -45$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -30$, $n = -15$ and $p = 90$ to evaluate: $p + m$.",
    "options": [
      "$60$",
      "$-60$",
      "$120$",
      "$-120$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$p + m = 90 + (-30) = 60$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -30$, $n = -15$ and $p = 90$ to evaluate: $n - p$.",
    "options": [
      "$-105$",
      "$75$",
      "$-75$",
      "$105$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$n - p = -15 - 90 = -105$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -30$, $n = -15$ and $p = 90$ to evaluate: $mn$.",
    "options": [
      "$450$",
      "$-450$",
      "$45$",
      "$-45$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$mn = (-30) \\times (-15) = 450$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -30$, $n = -15$ and $p = 90$ to evaluate: $mp$.",
    "options": [
      "$-2700$",
      "$2700$",
      "$-120$",
      "$120$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$mp = (-30) \\times 90 = -2700$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -30$, $n = -15$ and $p = 90$ to evaluate: $\\frac{m}{p}$.",
    "options": [
      "$-\\frac{1}{3}$",
      "$\\frac{1}{3}$",
      "$-3$",
      "$3$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$\\frac{m}{p} = \\frac{-30}{90} = -\\frac{30}{90} = -\\frac{1}{3}$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -30$, $n = -15$ and $p = 90$ to evaluate: $\\frac{p}{m}$.",
    "options": [
      "$-3$",
      "$3$",
      "$2700$",
      "$-2700$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$\\frac{p}{m} = \\frac{90}{-30} = -3$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Substitute $m = -30$, $n = -15$ and $p = 90$ to evaluate: $mnp$.",
    "options": [
      "$40500$",
      "$-40500$",
      "$27000$",
      "$-27000$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$mnp = (-30) \\times (-15) \\times 90$$</p>\n    <p>$$= 450 \\times 90 = 40500$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-25w$ for $w = 5$.",
    "options": [
      "$-125$",
      "$125$",
      "$-20$",
      "$20$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$-25w = -25 \\times 5 = -125$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-w^4$ for $w = 5$.",
    "options": [
      "$-625$",
      "$625$",
      "$-20$",
      "$20$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$-w^4 = -(5^4) = -625$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $15 - 4w$ for $w = 5$.",
    "options": [
      "$-5$",
      "$5$",
      "$-35$",
      "$35$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$15 - 4w = 15 - 4(5)$$</p>\n    <p>$$= 15 - 20 = -5$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-3w)^3$ for $w = 5$.",
    "options": [
      "$-3375$",
      "$3375$",
      "$-45$",
      "$45$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$(-3w)^3 = (-3 \\times 5)^3$$</p>\n    <p>$$= (-15)^3 = -3375$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-w)^3 + w^2$ for $w = 5$.",
    "options": [
      "$-100$",
      "$-150$",
      "$100$",
      "$150$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$(-w)^3 + w^2 = (-5)^3 + 5^2$$</p>\n    <p>$$= -125 + 25 = -100$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $w^3 - 8w^2$ for $w = 5$.",
    "options": [
      "$-75$",
      "$75$",
      "$-175$",
      "$175$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$w^3 - 8w^2 = 5^3 - 8 \\times 5^2$$</p>\n    <p>$$= 125 - 8(25)$$</p>\n    <p>$$= 125 - 200 = -75$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-15w$ for $w = -3$.",
    "options": [
      "$45$",
      "$-45$",
      "$18$",
      "$-18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$-15w = -15 \\times (-3) = 45$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $-w^4$ for $w = -3$.",
    "options": [
      "$-81$",
      "$81$",
      "$-12$",
      "$12$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$-w^4 = -((-3)^4)$$</p>\n    <p>$$= -(81) = -81$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $12 - 5w$ for $w = -3$.",
    "options": [
      "$27$",
      "$-3$",
      "$3$",
      "$-27$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$12 - 5w = 12 - 5(-3)$$</p>\n    <p>$$= 12 + 15 = 27$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-2w)^3$ for $w = -3$.",
    "options": [
      "$216$",
      "$-216$",
      "$18$",
      "$-18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$(-2w)^3 = (-2 \\times (-3))^3$$</p>\n    <p>$$= (6)^3 = 216$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $(-w)^3 + w^2$ for $w = -3$.",
    "options": [
      "$36$",
      "$18$",
      "$-36$",
      "$-18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$(-w)^3 + w^2 = (-(-3))^3 + (-3)^2$$</p>\n    <p>$$= 3^3 + 9$$</p>\n    <p>$$= 27 + 9 = 36$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression $w^3 - 5w^2$ for $w = -3$.",
    "options": [
      "$-72$",
      "$72$",
      "$-18$",
      "$18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>$$w^3 - 5w^2 = (-3)^3 - 5 \\times (-3)^2$$</p>\n    <p>$$= -27 - 5(9)$$</p>\n    <p>$$= -27 - 45 = -72$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Buffy has $\\$1500$ in a bank account. She takes $\\$y$ from the bank account every day. Write an expression for the amount of money she has in the account after $1$ day.",
    "options": [
      "$1500 - y$",
      "$1500 + y$",
      "$1500 - 2y$",
      "$1500y$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p>Buffy starts with $\\$1500$. After $1$ day, she has withdrawn $\\$y$ once. <br>\n    The remaining balance is: <br>\n    $$1500 - y$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Buffy has $\\$1500$ in a bank account. She takes $\\$y$ from the bank account every day. Write an expression for the amount of money she has in the account after $8$ days.",
    "options": [
      "$1500 - 8y$",
      "$1500 + 8y$",
      "$1500 - y$",
      "$8(1500 - y)$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p>Buffy withdraws $\\$y$ every day. After $8$ days, the total amount withdrawn is:<br>\n    $$8 \\times y = 8y$$</p>\n    <p>Subtract this total withdrawal from the initial balance:<br>\n    $$1500 - 8y$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Buffy has $\\$1500$ in a bank account and takes $\\$y$ from it every day. Find the value of her bank account after $8$ days if $y = 80$.",
    "options": [
      "$\\$860$",
      "$\\$940$",
      "$\\$1420$",
      "$\\$1340$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Use the 8-day balance expression:<br>\n    $$\\text{Balance} = 1500 - 8y$$</p>\n    <p><strong>Step 2:</strong> Substitute $y = 80$ into the expression:<br>\n    $$\\text{Balance} = 1500 - 8(80)$$</p>\n    <p><strong>Step 3:</strong> Calculate the values:<br>\n    $$8 \\times 80 = 640$$<br>\n    $$1500 - 640 = 860$$</p>\n    <p>Buffy has $\\$860$ remaining.</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Buffy has $\\$1500$ in a bank account and takes $\\$y$ from it every day. Find the value of her bank account after $8$ days if $y = 120$.",
    "options": [
      "$\\$540$",
      "$\\$960$",
      "$\\$640$",
      "$\\$480$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $y = 120$ into the 8-day balance expression:<br>\n    $$\\text{Balance} = 1500 - 8(120)$$</p>\n    <p><strong>Step 2:</strong> Multiply and subtract:<br>\n    $$8 \\times 120 = 960$$<br>\n    $$1500 - 960 = 540$$</p>\n    <p>Buffy has $\\$540$ remaining.</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Buffy has $\\$1500$ in a bank account and takes $\\$y$ from it every day. Find the value of her bank account after $8$ days if $y = 150$.",
    "options": [
      "$\\$300$",
      "$\\$1200$",
      "$\\$450$",
      "$\\$0$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Substitute $y = 150$ into the 8-day balance expression:<br>\n    $$\\text{Balance} = 1500 - 8(150)$$</p>\n    <p><strong>Step 2:</strong> Calculate:<br>\n    $$8 \\times 150 = 1200$$<br>\n    $$1500 - 1200 = 300$$</p>\n    <p>Buffy has $\\$300$ remaining.</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "The temperature in a room drops by $t^\\circ\\text{C}$ every hour. The temperature in the room at $12\\text{ p.m.}$ is $28^\\circ\\text{C}$. Write an expression for the temperature at $2\\text{ p.m.}$",
    "options": [
      "$28 - 2t$",
      "$28 + 2t$",
      "$28 - t$",
      "$28 - 14t$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Determine the elapsed time from $12\\text{ p.m.}$ to $2\\text{ p.m.}$:<br>\n    $$\\text{Time} = 2\\text{ hours}$$</p>\n    <p><strong>Step 2:</strong> In $2$ hours, the total temperature drop is:<br>\n    $$2 \\times t = 2t^\\circ\\text{C}$$</p>\n    <p><strong>Step 3:</strong> Subtract the drop from the initial temperature:<br>\n    $$28 - 2t$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "The temperature in a room drops by $t^\\circ\\text{C}$ every hour. The temperature in the room at $12\\text{ p.m.}$ is $28^\\circ\\text{C}$. Write an expression for the temperature at $8\\text{ p.m.}$",
    "options": [
      "$28 - 8t$",
      "$28 + 8t$",
      "$28 - t$",
      "$8(28 - t)$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Determine elapsed time from $12\\text{ p.m.}$ to $8\\text{ p.m.}$:<br>\n    $$\\text{Time} = 8\\text{ hours}$$</p>\n    <p><strong>Step 2:</strong> Write the expression for the total drop:<br>\n    $$8t^\\circ\\text{C}$$</p>\n    <p><strong>Step 3:</strong> The resulting temperature expression is:<br>\n    $$28 - 8t$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  },
  {
    "chapterId": "y7-11",
    "chapterTitle": "Chapter 11: Linear equations",
    "topicId": "y7-11a",
    "topicCode": "11A",
    "topicTitle": "Substitution with integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "The temperature in a room drops by $t^\\circ\\text{C}$ every hour. The temperature in the room at $12\\text{ p.m.}$ is $28^\\circ\\text{C}$. If $t = 3$, what will the temperature be at $6\\text{ p.m.}$?",
    "options": [
      "$10^\\circ\\text{C}$",
      "$18^\\circ\\text{C}$",
      "$46^\\circ\\text{C}$",
      "$22^\\circ\\text{C}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> The time elapsed from $12\\text{ p.m.}$ to $6\\text{ p.m.}$ is $6\\text{ hours}$.</p>\n    <p><strong>Step 2:</strong> Use the general drop expression for $6\\text{ hours}$:<br>\n    $$\\text{Temperature} = 28 - 6t$$</p>\n    <p><strong>Step 3:</strong> Substitute $t = 3$ into the equation:<br>\n    $$\\text{Temperature} = 28 - 6(3)$$</p>\n    <p><strong>Step 4:</strong> Calculate:<br>\n    $$6 \\times 3 = 18$$<br>\n    $$28 - 18 = 10^\\circ\\text{C}$$</p>\n  </div>",
    "createdAt": "2026-05-17T12:59:28.201Z"
  }
];

export const importYear7Ch11A = async (forceReset = false) => {
  console.log('[Ch11A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch11 (11a to 11d) questions...');
      const topicsToDelete = ['y7-11a', 'y7-11b', 'y7-11c', 'y7-11d'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch11 topic questions.');
    }

    // To prevent duplicates, query all existing questions in Ch11 topics
    const existingQuestions = new Set();
    const topicsToCheck = ['y7-11a', 'y7-11b', 'y7-11c', 'y7-11d'];
    for (const tId of topicsToCheck) {
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
      existingSnap.docs.forEach(doc => {
        existingQuestions.add(doc.data().question.trim());
      });
    }
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch11A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch11A Year 7 Import] ERROR:', error);
    return 0;
  }
};
