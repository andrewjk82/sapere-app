import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "List all the integers that are less than $5$ and greater than $-4$.",
    "options": [
      "$-3, -2, -1, 0, 1, 2, 3, 4$",
      "$-4, -3, -2, -1, 0, 1, 2, 3, 4, 5$",
      "$-3, -2, -1, 1, 2, 3, 4$",
      "$-4, -3, -2, -1, 0, 1, 2, 3, 4$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's analyze the conditions on the number line:</p><ul><li><strong>Greater than $-4$:</strong> The integers strictly to the right of $-4$ on the number line are: <br />$$-3, -2, -1, 0, 1, 2, \\dots$$</li><li><strong>Less than $5$:</strong> The integers strictly to the left of $5$ on the number line are: <br />$$\\dots, 1, 2, 3, 4$$</li></ul><p>Combining these two bounds, the integers must be strictly between $-4$ and $5$ (not including the endpoints themselves):</p><p>$$\\text{Integers} = \\{-3, -2, -1, 0, 1, 2, 3, 4\\}$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.544Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "The sequence $-48, -44, -40, \\dots$ is 'going up by fours'. Write down the next four terms of this sequence.",
    "options": [
      "$-36, -32, -28, -24$",
      "$-36, -32, -28, -20$",
      "$-44, -48, -52, -56$",
      "$-38, -34, -30, -26$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The sequence starts at $-48$ and adds $4$ at each step ('going up by fours'):</p><ul><li><strong>First term:</strong> $-48$</li><li><strong>Second term:</strong> $-48 + 4 = -44$</li><li><strong>Third term:</strong> $-44 + 4 = -40$</li></ul><p>Let's find the next four terms by repeatedly adding $4$:</p><ul><li><strong>Fourth term:</strong> $-40 + 4 = -36$</li><li><strong>Fifth term:</strong> $-36 + 4 = -32$</li><li><strong>Sixth term:</strong> $-32 + 4 = -28$</li><li><strong>Seventh term:</strong> $-28 + 4 = -24$</li></ul><p>Therefore, the next four terms are: $$-36, -32, -28, -24$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Simplify the algebraic integer expression: $$-(-18)$$",
    "options": [
      "$18$",
      "$-18$",
      "$0$",
      "$1$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>We are taking the negative (or opposite) of a negative integer:</p><p>$$\\text{Negative of a negative is positive: } -(-a) = a$$</p><p>Substituting $a = 18$:</p><p>$$-(-18) = 18$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Simplify the algebraic integer expression: $$-(-(-9))$$",
    "options": [
      "$-9$",
      "$9$",
      "$0$",
      "$-1$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's simplify the negative signs step-by-step from the inside out:</p><p>$$\\text{Step 1: Simplify the inner part } -(-9) = 9$$</p><p>$$\\text{Step 2: Apply the remaining outermost negative sign: } -(9) = -9$$</p><p>Alternatively, count the number of negative signs: an odd number of negative signs (3 signs) results in a **negative** value.</p><p>$$-(-(-9)) = -9$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of integers: $$-6 + 14$$",
    "options": [
      "$8$",
      "$-8$",
      "$20$",
      "$-20$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>We are adding a positive number to a negative number. We can rearrange the addition: </p><p>$$-6 + 14 = 14 - 6$$</p><p>Performing the subtraction:</p><p>$$14 - 6 = 8$$</p><p>On a number line, starting at $-6$ and moving $14$ units to the right lands us on $8$.</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of integers: $$8 + (-13)$$",
    "options": [
      "$-5$",
      "$5$",
      "$-21$",
      "$21$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Adding a negative number is equivalent to subtracting its positive counterpart:</p><p>$$8 + (-13) = 8 - 13$$</p><p>Since we are subtracting a larger number from a smaller number, the result will be negative. The difference between $13$ and $8$ is $5$, so:</p><p>$$8 - 13 = -5$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of integers: $$-7 + (-9)$$",
    "options": [
      "$-16$",
      "$16$",
      "$-2$",
      "$2$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>We are adding a negative number to another negative number:</p><p>$$-7 + (-9) = -7 - 9$$</p><p>Starting at $-7$ and moving $9$ units to the left on the number line lands us further in the negative direction:</p><p>$$-(7 + 9) = -16$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction of integers: $$5 - 12$$",
    "options": [
      "$-7$",
      "$7$",
      "$-17$",
      "$17$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Subtracting a larger positive integer from a smaller positive integer yields a negative result:</p><p>$$5 - 12 = -(12 - 5) = -7$$</p><p>Starting at $5$ on the number line and moving $12$ units to the left lands us on $-7$.</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction of integers: $$-9 - 14$$",
    "options": [
      "$-23$",
      "$23$",
      "$-5$",
      "$5$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>We are starting at a negative number and subtracting a positive number (moving left):</p><p>$$-9 - 14 = -(9 + 14)$$</p><p>Summing the absolute values and attaching a negative sign:</p><p>$$-(23) = -23$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction of integers: $$12 - (-5)$$",
    "options": [
      "$17$",
      "$7$",
      "$-17$",
      "$-7$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Subtracting a negative number is equivalent to adding its positive counterpart:</p><p>$$12 - (-5) = 12 + 5$$</p><p>Performing the addition:</p><p>$$12 + 5 = 17$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction of integers: $$-18 - (-6)$$",
    "options": [
      "$-12$",
      "$-24$",
      "$12$",
      "$24$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's simplify the subtraction of the negative integer first:</p><p>$$-18 - (-6) = -18 + 6$$</p><p>Now, we are adding $6$ to $-18$. On the number line, we start at $-18$ and move $6$ units to the right (towards zero):</p><p>$$-18 + 6 = -(18 - 6) = -12$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "The temperature in Reykjavik on a winter's day went from a minimum of $-18^\\circ\\text{C}$ to a maximum of $-3^\\circ\\text{C}$. By how much did the temperature rise?",
    "options": [
      "$15^\\circ\\text{C}$",
      "$-15^\\circ\\text{C}$",
      "$21^\\circ\\text{C}$",
      "$12^\\circ\\text{C}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To find the rise in temperature, we calculate the difference between the maximum temperature and the minimum temperature:</p><p>$$\\text{Rise} = \\text{Maximum} - \\text{Minimum}$$</p><p>Substitute the given values:</p><p>$$\\text{Rise} = -3^\\circ\\text{C} - (-18^\\circ\\text{C})$$</p><p>Simplify the double negative:</p><p>$$\\text{Rise} = -3 + 18 = 18 - 3 = 15^\\circ\\text{C}$$</p><p>The temperature rose by $$15^\\circ\\text{C}$$.</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the multiplication of integers: $$8 \\times (-6)$$",
    "options": [
      "$-48$",
      "$48$",
      "$-14$",
      "$14$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>When multiplying integers, we look at the signs of the factors:</p><p>$$\\text{Positive} \\times \\text{Negative} = \\text{Negative}$$</p><p>Multiply their absolute values:</p><p>$$8 \\times 6 = 48$$</p><p>Attach the negative sign:</p><p>$$8 \\times (-6) = -48$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the multiplication of integers: $$-9 \\times (-7)$$",
    "options": [
      "$63$",
      "$-63$",
      "$16$",
      "$-16$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>When multiplying two negative integers, the two negative signs cancel out to make a positive result:</p><p>$$\\text{Negative} \\times \\text{Negative} = \\text{Positive}$$</p><p>Multiply their absolute values:</p><p>$$9 \\times 7 = 63$$</p><p>Therefore:</p><p>$$-9 \\times (-7) = 63$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the integer division: $$-42 \\div 6$$",
    "options": [
      "$-7$",
      "$7$",
      "$-8$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>When dividing integers, the sign rules are identical to multiplication:</p><p>$$\\text{Negative} \\div \\text{Positive} = \\text{Negative}$$</p><p>Divide their absolute values:</p><p>$$42 \\div 6 = 7$$</p><p>Attach the negative sign:</p><p>$$-42 \\div 6 = -7$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the integer division expressed as a fraction: $$\\frac{-72}{-8}$$",
    "options": [
      "$9$",
      "$-9$",
      "$8$",
      "$-8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>The fraction line represents division:</p><p>$$\\frac{-72}{-8} = -72 \\div (-8)$$</p><p>Dividing a negative number by another negative number gives a positive result:</p><p>$$\\text{Negative} \\div \\text{Negative} = \\text{Positive}$$</p><p>Divide their absolute values:</p><p>$$72 \\div 8 = 9$$</p><p>Therefore:</p><p>$$\\frac{-72}{-8} = 9$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate and compare the values of the two index expressions:\n$$\\text{(i) } (-6)^2 \\quad \\text{and} \\quad \\text{(ii) } -6^2$$",
    "options": [
      "\\text{(i) } 36 \\quad \\text{and} \\quad \\text{(ii) } -36",
      "\\text{(i) } -36 \\quad \\text{and} \\quad \\text{(ii) } 36",
      "\\text{(i) } 36 \\quad \\text{and} \\quad \\text{(ii) } 36",
      "\\text{(i) } -36 \\quad \\text{and} \\quad \\text{(ii) } -36"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's carefully distinguish the role of parentheses in indices:</p><ul><li><strong>Expression (i) $$(-6)^2$$:</strong> The exponent $2$ applies to the entire quantity inside the brackets, including the negative sign: <br />$$(-6)^2 = (-6) \\times (-6) = 36$$</li><li><strong>Expression (ii) $$-6^2$$:</strong> The exponent $2$ applies <strong>only</strong> to the base number $6$, and the negative sign is applied afterwards (BODMAS/PEMDAS order: Indices first, then Negation/Multiplication): <br />$$-6^2 = -(6 \\times 6) = -36$$</li></ul><p>Therefore, (i) is $$36$$ and (ii) is $$-36$$.</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate using the correct order of operations (BODMAS): $$-4 \\times (-7) + 18 - 25$$",
    "options": [
      "$21$",
      "$-21$",
      "$35$",
      "$27$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>According to BODMAS, we must perform **Multiplication** before **Addition** and **Subtraction**:</p><p>$$\\text{Step 1: Multiplication } -4 \\times (-7)$$</p><p>Multiplying two negative integers yields a positive integer:</p><p>$$-4 \\times (-7) = 28$$</p><p>Substitute this back into our expression:</p><p>$$28 + 18 - 25$$</p><p>$$\\text{Step 2: Add and Subtract from left to right }$$</p><p>$$28 + 18 = 46$$</p><p>$$46 - 25 = 21$$</p><p>The final value is $$21$$.</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "In an indoor cricket match, a team has made $45$ runs and lost $7$ wickets. What is the final score of the team? (Note: A run adds $1$ to the score, and a wicket subtracts $5$.)",
    "options": [
      "$10$",
      "$38$",
      "$80$",
      "$15$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's represent the cricket score using an integer equation:</p><ul><li>Each **run** adds $1$ to the score: $45 \\text{ runs} \\rightarrow 45 \\times 1 = 45$</li><li>Each **wicket** subtracts $5$ from the score: $7 \\text{ wickets} \\rightarrow 7 \\times (-5) = -35$</li></ul><p>Now, write the final score equation:</p><p>$$\\text{Score} = 45 + 7 \\times (-5)$$</p><p>Evaluate the multiplication first:</p><p>$$7 \\times (-5) = -35$$</p><p>Perform the addition/subtraction:</p><p>$$\\text{Score} = 45 - 35 = 10$$</p><p>The team's final score is $$10$$.</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression: $$-8 \\times (5 - 9)$$",
    "options": [
      "$32$",
      "$-32$",
      "$112$",
      "$-112$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>According to BODMAS, we must evaluate the expression inside the **brackets** first:</p><p>$$\\text{Step 1: Bracket term } (5 - 9)$$</p><p>$$5 - 9 = -4$$</p><p>$$\\text{Step 2: Multiplication } -8 \\times (-4)$$</p><p>Multiplying two negative integers yields a positive integer:</p><p>$$-8 \\times (-4) = 32$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression with dual bracket sets: $$(4 - 12) \\times (9 - 17)$$",
    "options": [
      "$64$",
      "$-64$",
      "$48$",
      "$-48$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>According to BODMAS, evaluate the operations inside **both bracket sets** first:</p><p>$$\\text{Step 1: First bracket term } (4 - 12) = -8$$</p><p>$$\\text{Step 2: Second bracket term } (9 - 17) = -8$$</p><p>$$\\text{Step 3: Multiply the results } -8 \\times (-8)$$</p><p>Multiplying two negative integers cancels out to make a positive result:</p><p>$$-8 \\times (-8) = 64$$</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression involving negation of squared parenthesis: $$-(-4)^2$$",
    "options": [
      "$-16$",
      "$16$",
      "$-8$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's follow the order of operations step-by-step:</p><ul><li><strong>Step 1: Bracket term is already simplified:</strong> We have the base $(-4)$.</li><li><strong>Step 2: Evaluate the exponent (index):</strong> The exponent $2$ applies to the entire quantity inside the bracket $(-4)$: <br />$$(-4)^2 = (-4) \\times (-4) = 16$$</li><li><strong>Step 3: Apply the outer negative sign:</strong> <br />$$- (16) = -16$$</li></ul><p>The final value is $$-16$$.</p></div>",
    "createdAt": "2026-05-18T09:11:25.551Z"
  }
];

export const importYear7Ch10A = async (forceReset = false) => {
  console.log('[Ch10A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch10 (10a to 10f) questions...');
      const topicsToDelete = ['y7-10a', 'y7-10b', 'y7-10c', 'y7-10d', 'y7-10e', 'y7-10f'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch10 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-10a', 'y7-10b', 'y7-10c', 'y7-10d', 'y7-10e', 'y7-10f'];
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
    console.log('[Ch10A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch10A Year 7 Import] ERROR:', error);
    return 0;
  }
};
