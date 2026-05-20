import { db } from '../firebase/config.js';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

export const questions12A = [
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Write down the set of even positive integers less than $12$ by listing its elements.",
    "options": [
      { "text": "$\\{2, 4, 6, 8, 10\\}$", "imageUrl": "" },
      { "text": "$\\{2, 4, 6, 8, 10, 12\\}$", "imageUrl": "" },
      { "text": "$\\{0, 2, 4, 6, 8, 10\\}$", "imageUrl": "" },
      { "text": "$\\{1, 3, 5, 7, 9, 11\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Remember: positive means greater than 0, and less than 12 means 12 is not included.",
    "solution": "The set is $\\{2, 4, 6, 8, 10\\}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the three conditions that must be satisfied.",
        "workingOut": "\\text{(i) Even: divisible by } 2 \\\\ \\text{(ii) Positive: } > 0 \\text{ (exclude } 0\\text{)} \\\\ \\text{(iii) Less than } 12 \\text{ (exclude } 12\\text{)}"
      },
      {
        "explanation": "List the even positive integers one by one, stopping before 12.",
        "workingOut": "2,\\ 4,\\ 6,\\ 8,\\ 10 \\quad \\text{(next would be } 12 \\text{, excluded)}"
      },
      {
        "explanation": "Write the result in set notation using curly braces.",
        "workingOut": "\\{2,\\ 4,\\ 6,\\ 8,\\ 10\\}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Write down the set representing the first five positive multiples of $8$ by listing its elements.",
    "options": [
      { "text": "$\\{8, 16, 24, 32, 40\\}$", "imageUrl": "" },
      { "text": "$\\{0, 8, 16, 24, 32\\}$", "imageUrl": "" },
      { "text": "$\\{8, 16, 24, 32, 40, 48\\}$", "imageUrl": "" },
      { "text": "$\\{1, 8, 16, 24, 32\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Positive multiples of 8 start at $8 \\times 1$, not $8 \\times 0$.",
    "solution": "The set is $\\{8, 16, 24, 32, 40\\}$.",
    "solutionSteps": [
      {
        "explanation": "A positive multiple of 8 is $8 \\times n$ where $n = 1, 2, 3, \\ldots$",
        "workingOut": "8 \\times 1 = 8 \\\\ 8 \\times 2 = 16 \\\\ 8 \\times 3 = 24 \\\\ 8 \\times 4 = 32 \\\\ 8 \\times 5 = 40"
      },
      {
        "explanation": "Collect the five values in set notation.",
        "workingOut": "\\{8,\\ 16,\\ 24,\\ 32,\\ 40\\}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Write down the set of possible numbers on a fair $8$-sided die (octahedral die) by listing its elements.",
    "options": [
      { "text": "$\\{1, 2, 3, 4, 5, 6, 7, 8\\}$", "imageUrl": "" },
      { "text": "$\\{0, 1, 2, 3, 4, 5, 6, 7\\}$", "imageUrl": "" },
      { "text": "$\\{1, 2, 3, 4, 5, 6\\}$", "imageUrl": "" },
      { "text": "$\\{2, 4, 6, 8\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "An 8-sided die has faces numbered from 1 to 8, not 0 to 7.",
    "solution": "The set is $\\{1, 2, 3, 4, 5, 6, 7, 8\\}$.",
    "solutionSteps": [
      {
        "explanation": "A fair 8-sided die has faces numbered sequentially from 1 to 8.",
        "workingOut": "\\text{Faces: } 1,\\ 2,\\ 3,\\ 4,\\ 5,\\ 6,\\ 7,\\ 8"
      },
      {
        "explanation": "Write all possible outcomes in set notation.",
        "workingOut": "\\{1,\\ 2,\\ 3,\\ 4,\\ 5,\\ 6,\\ 7,\\ 8\\}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Write down the set of positive factors of $18$ by listing its elements.",
    "options": [
      { "text": "$\\{1, 2, 3, 6, 9, 18\\}$", "imageUrl": "" },
      { "text": "$\\{2, 3, 6, 9\\}$", "imageUrl": "" },
      { "text": "$\\{1, 2, 3, 6, 9, 12, 18\\}$", "imageUrl": "" },
      { "text": "$\\{1, 18\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Find all factor pairs: $1 \\times 18$, $2 \\times 9$, $3 \\times 6$.",
    "solution": "The set is $\\{1, 2, 3, 6, 9, 18\\}$.",
    "solutionSteps": [
      {
        "explanation": "A factor of 18 divides 18 exactly (no remainder). Find all factor pairs.",
        "workingOut": "1 \\times 18 = 18 \\Rightarrow 1,\\ 18 \\\\ 2 \\times 9 = 18 \\Rightarrow 2,\\ 9 \\\\ 3 \\times 6 = 18 \\Rightarrow 3,\\ 6 \\\\ 4 \\nmid 18,\\ 5 \\nmid 18"
      },
      {
        "explanation": "Arrange all factors in ascending order and write in set notation.",
        "workingOut": "\\{1,\\ 2,\\ 3,\\ 6,\\ 9,\\ 18\\}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Given the sets $A = \\{2, 4, 6\\}$ and $B = \\{4, 6, 8\\}$, find $A \\cup B$ and $A \\cap B$.",
    "options": [
      { "text": "$A \\cup B = \\{2, 4, 6, 8\\}$ and $A \\cap B = \\{4, 6\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{4, 6\\}$ and $A \\cap B = \\{2, 4, 6, 8\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{2, 4, 6, 8\\}$ and $A \\cap B = \\emptyset$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{2, 8\\}$ and $A \\cap B = \\{4, 6\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Union ($\\cup$) = all elements from either set; Intersection ($\\cap$) = only shared elements.",
    "solution": "$A \\cup B = \\{2,4,6,8\\}$ and $A \\cap B = \\{4,6\\}$.",
    "solutionSteps": [
      {
        "explanation": "The union $A \\cup B$ includes every element from either set (no duplicates).",
        "workingOut": "A = \\{2, 4, 6\\},\\quad B = \\{4, 6, 8\\} \\\\ A \\cup B = \\{2,\\ 4,\\ 6,\\ 8\\}"
      },
      {
        "explanation": "The intersection $A \\cap B$ contains only elements that appear in BOTH sets.",
        "workingOut": "4 \\in A \\text{ and } 4 \\in B \\checkmark \\\\ 6 \\in A \\text{ and } 6 \\in B \\checkmark \\\\ A \\cap B = \\{4,\\ 6\\}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Given the sets $A = \\{1, 2, 5, 7, 8\\}$ and $B = \\{3, 5, 6, 7, 8, 9\\}$, find $A \\cup B$ and $A \\cap B$.",
    "options": [
      { "text": "$A \\cup B = \\{1, 2, 3, 5, 6, 7, 8, 9\\}$ and $A \\cap B = \\{5, 7, 8\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{5, 7, 8\\}$ and $A \\cap B = \\{1, 2, 3, 5, 6, 7, 8, 9\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{1, 2, 3, 5, 6, 7, 8, 9\\}$ and $A \\cap B = \\{5, 7\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{1, 2, 3, 6, 9\\}$ and $A \\cap B = \\{5, 7, 8\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Check which numbers appear in both sets for the intersection.",
    "solution": "$A \\cup B = \\{1,2,3,5,6,7,8,9\\}$ and $A \\cap B = \\{5,7,8\\}$.",
    "solutionSteps": [
      {
        "explanation": "Find the union by combining all unique elements from both sets in ascending order.",
        "workingOut": "A = \\{1, 2, 5, 7, 8\\},\\quad B = \\{3, 5, 6, 7, 8, 9\\} \\\\ A \\cup B = \\{1,\\ 2,\\ 3,\\ 5,\\ 6,\\ 7,\\ 8,\\ 9\\}"
      },
      {
        "explanation": "Find the intersection by identifying elements common to BOTH sets.",
        "workingOut": "5 \\in A \\text{ and } B,\\ 7 \\in A \\text{ and } B,\\ 8 \\in A \\text{ and } B \\\\ A \\cap B = \\{5,\\ 7,\\ 8\\}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Given the sets $A = \\{\\text{s, y, d, n, e}\\}$ and $B = \\{\\text{m, e, l, b, o, u, r, n}\\}$, find $A \\cup B$ and $A \\cap B$.",
    "options": [
      { "text": "$A \\cup B = \\{\\text{b, d, e, l, m, n, o, r, s, u, y}\\}$ and $A \\cap B = \\{\\text{e, n}\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{\\text{e, n}\\}$ and $A \\cap B = \\{\\text{b, d, e, l, m, n, o, r, s, u, y}\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{\\text{b, d, e, l, m, n, o, r, s, u, y}\\}$ and $A \\cap B = \\{\\text{d, e, n}\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{\\text{b, l, m, o, r, s, u, y}\\}$ and $A \\cap B = \\{\\text{e, n}\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "These sets are the letters of 'sydney' and 'melbourne'. Which letters appear in both words?",
    "solution": "$A \\cup B = \\{\\text{b,d,e,l,m,n,o,r,s,u,y}\\}$ and $A \\cap B = \\{\\text{e,n}\\}$.",
    "solutionSteps": [
      {
        "explanation": "Find the intersection first: letters that appear in BOTH sets.",
        "workingOut": "A = \\{\\text{s, y, d, n, e}\\},\\quad B = \\{\\text{m, e, l, b, o, u, r, n}\\} \\\\ \\text{e} \\in A \\text{ and } B,\\quad \\text{n} \\in A \\text{ and } B \\\\ A \\cap B = \\{\\text{e, n}\\}"
      },
      {
        "explanation": "Find the union: all distinct letters from both sets, sorted alphabetically.",
        "workingOut": "A \\cup B = \\{\\text{b, d, e, l, m, n, o, r, s, u, y}\\}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Given the sets $A = \\{\\text{r, y, a, n}\\}$ and $B = \\{\\text{l, u, c, y}\\}$, find $A \\cup B$ and $A \\cap B$.",
    "options": [
      { "text": "$A \\cup B = \\{\\text{a, c, l, n, r, u, y}\\}$ and $A \\cap B = \\{\\text{y}\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{\\text{y}\\}$ and $A \\cap B = \\{\\text{a, c, l, n, r, u, y}\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{\\text{a, c, l, n, r, u, y}\\}$ and $A \\cap B = \\emptyset$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{\\text{a, c, l, n, r, u}\\}$ and $A \\cap B = \\{\\text{y}\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "These are the letters of the names 'ryan' and 'lucy'. Look for a shared letter.",
    "solution": "$A \\cup B = \\{\\text{a,c,l,n,r,u,y}\\}$ and $A \\cap B = \\{\\text{y}\\}$.",
    "solutionSteps": [
      {
        "explanation": "Find the intersection: check which letter(s) appear in BOTH sets.",
        "workingOut": "A = \\{\\text{r, y, a, n}\\},\\quad B = \\{\\text{l, u, c, y}\\} \\\\ \\text{Only } \\text{y} \\text{ is in both sets.} \\\\ A \\cap B = \\{\\text{y}\\}"
      },
      {
        "explanation": "Find the union: combine all letters, remove duplicates, list alphabetically.",
        "workingOut": "A \\cup B = \\{\\text{a, c, l, n, r, u, y}\\}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "medium",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Let $A = \\{\\text{positive prime numbers less than } 12\\}$ and $B = \\{\\text{positive even numbers less than } 12\\}$. Find $A \\cup B$ and $A \\cap B$.",
    "options": [
      { "text": "$A \\cup B = \\{2, 3, 4, 5, 6, 7, 8, 10, 11\\}$ and $A \\cap B = \\{2\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{2, 3, 4, 5, 6, 7, 8, 10, 11\\}$ and $A \\cap B = \\emptyset$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{2\\}$ and $A \\cap B = \\{2, 3, 4, 5, 6, 7, 8, 10, 11\\}$", "imageUrl": "" },
      { "text": "$A \\cup B = \\{3, 4, 5, 6, 7, 8, 10, 11\\}$ and $A \\cap B = \\{2\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Write out both sets first. The number 2 is the only even prime — it will be in both sets.",
    "solution": "$A \\cup B = \\{2,3,4,5,6,7,8,10,11\\}$ and $A \\cap B = \\{2\\}$.",
    "solutionSteps": [
      {
        "explanation": "List the elements of each set explicitly.",
        "workingOut": "A = \\{2,\\ 3,\\ 5,\\ 7,\\ 11\\} \\quad (\\text{primes} < 12) \\\\ B = \\{2,\\ 4,\\ 6,\\ 8,\\ 10\\} \\quad (\\text{positive evens} < 12)"
      },
      {
        "explanation": "Find the union: all elements from either set.",
        "workingOut": "A \\cup B = \\{2,\\ 3,\\ 4,\\ 5,\\ 6,\\ 7,\\ 8,\\ 10,\\ 11\\}"
      },
      {
        "explanation": "Find the intersection: 2 is the only even prime, so it is the only element in both sets.",
        "workingOut": "A \\cap B = \\{2\\}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "medium",
    "type": "short_answer",
    "isActive": true,
    "question": "If $A = \\{2, 3, 5, 8\\}$ and $B = \\{2, 3, 4, 5, 7\\}$, determine whether each of the following statements is True or False.",
    "answer": "I: False, II: True, III: False, IV: False, V: True, VI: True",
    "hint": "For I, check if both sets contain exactly the same elements. For IV, check whether every element of A is also in B.",
    "solution": "I: False, II: True, III: False, IV: False, V: True, VI: True",
    "solutionSteps": [
      {
        "explanation": "Establish the two sets clearly before evaluating each statement.",
        "workingOut": "A = \\{2, 3, 5, 8\\},\\quad B = \\{2, 3, 4, 5, 7\\} \\\\ |A| = 4,\\quad |B| = 5"
      },
      {
        "explanation": "Evaluate Statements I–IV one by one.",
        "workingOut": "\\text{I. } A = B? \\quad 8 \\in A \\text{ but } 8 \\notin B \\Rightarrow \\textbf{False} \\\\ \\text{II. } |A|=4? \\quad A \\text{ has } 4 \\text{ elements} \\Rightarrow \\textbf{True} \\\\ \\text{III. } |B|=6? \\quad B \\text{ has } 5 \\text{ elements} \\Rightarrow \\textbf{False} \\\\ \\text{IV. } A \\subset B? \\quad 8 \\in A \\text{ but } 8 \\notin B \\Rightarrow \\textbf{False}"
      },
      {
        "explanation": "Evaluate Statements V–VI.",
        "workingOut": "\\text{V. } A \\cup B = \\{2,3,4,5,7,8\\}? \\\\ A \\cup B = \\{2,3,4,5,7,8\\} \\Rightarrow \\textbf{True} \\\\ \\text{VI. } A \\cap B = \\{2,3,5\\}? \\\\ \\text{Common elements: } 2, 3, 5 \\Rightarrow \\textbf{True}"
      }
    ],
    "subQuestions": [
      {
        "id": "sq-10a",
        "question": "I. Is $A = B$?",
        "type": "multiple_choice",
        "options": [
          { "text": "False — $8 \\in A$ but $8 \\notin B$, and $4, 7 \\in B$ but $4, 7 \\notin A$", "imageUrl": "" },
          { "text": "True — both sets share elements 2, 3 and 5", "imageUrl": "" },
          { "text": "True — both sets have the same number of elements", "imageUrl": "" },
          { "text": "False — A has fewer elements than B", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "False — $8 \\in A$ but $8 \\notin B$, and $4, 7 \\in B$ but $4, 7 \\notin A$",
        "solution": "Two sets are equal only if they contain exactly the same elements. Since $8 \\in A$ but $8 \\notin B$, the sets are not equal. **False.**"
      },
      {
        "id": "sq-10b",
        "question": "II. Is $|A| = 4$?",
        "type": "multiple_choice",
        "options": [
          { "text": "True — $A = \\{2,3,5,8\\}$ has 4 elements", "imageUrl": "" },
          { "text": "False — $|A| = 5$", "imageUrl": "" },
          { "text": "False — $|A| = 3$", "imageUrl": "" },
          { "text": "True — $|A| = 4$ because the largest element is 8", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "True — $A = \\{2,3,5,8\\}$ has 4 elements",
        "solution": "$|A|$ counts the number of distinct elements. $A = \\{2, 3, 5, 8\\}$ has exactly 4 elements, so $|A| = 4$. **True.**"
      },
      {
        "id": "sq-10c",
        "question": "III. Is $|B| = 6$?",
        "type": "multiple_choice",
        "options": [
          { "text": "False — $B = \\{2,3,4,5,7\\}$ has 5 elements, so $|B| = 5$", "imageUrl": "" },
          { "text": "True — $|B| = 6$", "imageUrl": "" },
          { "text": "False — $|B| = 4$", "imageUrl": "" },
          { "text": "True — the largest element in B is 7, so $|B| = 7$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "False — $B = \\{2,3,4,5,7\\}$ has 5 elements, so $|B| = 5$",
        "solution": "$B = \\{2, 3, 4, 5, 7\\}$. Counting: $2, 3, 4, 5, 7$ — that is 5 elements. So $|B| = 5 \\neq 6$. **False.**"
      },
      {
        "id": "sq-10d",
        "question": "IV. Is $A \\subset B$?",
        "type": "multiple_choice",
        "options": [
          { "text": "False — $8 \\in A$ but $8 \\notin B$", "imageUrl": "" },
          { "text": "True — $A$ and $B$ share elements 2, 3, 5", "imageUrl": "" },
          { "text": "True — $A$ has fewer elements than $B$", "imageUrl": "" },
          { "text": "False — $B$ has more elements than $A$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "False — $8 \\in A$ but $8 \\notin B$",
        "solution": "$A \\subset B$ requires every element of $A$ to also be in $B$. Checking: $2\\in B$✓, $3\\in B$✓, $5\\in B$✓, but $8 \\notin B$✗. So $A \\not\\subset B$. **False.**"
      },
      {
        "id": "sq-10e",
        "question": "V. Is $A \\cup B = \\{2, 3, 4, 5, 7, 8\\}$?",
        "type": "multiple_choice",
        "options": [
          { "text": "True — $A \\cup B = \\{2, 3, 4, 5, 7, 8\\}$", "imageUrl": "" },
          { "text": "False — $A \\cup B = \\{2, 3, 5\\}$", "imageUrl": "" },
          { "text": "False — $A \\cup B = \\{2, 3, 4, 5, 7, 8, 9\\}$", "imageUrl": "" },
          { "text": "True — $A \\cup B = \\{4, 7, 8\\}$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "True — $A \\cup B = \\{2, 3, 4, 5, 7, 8\\}$",
        "solution": "The union combines all elements from $A = \\{2,3,5,8\\}$ and $B = \\{2,3,4,5,7\\}$: $A \\cup B = \\{2, 3, 4, 5, 7, 8\\}$. This matches the statement. **True.**"
      },
      {
        "id": "sq-10f",
        "question": "VI. Is $A \\cap B = \\{2, 3, 5\\}$?",
        "type": "multiple_choice",
        "options": [
          { "text": "True — $A \\cap B = \\{2, 3, 5\\}$", "imageUrl": "" },
          { "text": "False — $A \\cap B = \\{2, 5\\}$", "imageUrl": "" },
          { "text": "False — $A \\cap B = \\{2, 3, 4, 5\\}$", "imageUrl": "" },
          { "text": "False — $A \\cap B = \\emptyset$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "True — $A \\cap B = \\{2, 3, 5\\}$",
        "solution": "The intersection contains elements in both $A = \\{2,3,5,8\\}$ and $B = \\{2,3,4,5,7\\}$. Common elements are 2, 3, 5. So $A \\cap B = \\{2, 3, 5\\}$. **True.**"
      }
    ]
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "medium",
    "type": "short_answer",
    "isActive": true,
    "question": "If $A = \\{1, 2, 4\\}$, $B = \\{2, 5\\}$ and the universal set is $E = \\{1, 2, 3, 4, 5, 6\\}$, find the values of each part.",
    "answer": "|A|=3, |B|=2, A∪B={1,2,4,5}, |A∪B|=4, A∩B={2}, |A∩B|=1, Ā={3,5,6}, B̄={1,3,4,6}",
    "hint": "For the complement, remove the elements of the set from the universal set $E$.",
    "solution": "|A|=3, |B|=2, A∪B={1,2,4,5}, |A∪B|=4, A∩B={2}, |A∩B|=1, Ā={3,5,6}, B̄={1,3,4,6}",
    "solutionSteps": [
      {
        "explanation": "Establish the sets: $A = \\{1,2,4\\}$, $B = \\{2,5\\}$, $E = \\{1,2,3,4,5,6\\}$.",
        "workingOut": "A = \\{1, 2, 4\\} \\\\ B = \\{2, 5\\} \\\\ E = \\{1, 2, 3, 4, 5, 6\\}"
      },
      {
        "explanation": "Find cardinalities, union, and intersection.",
        "workingOut": "|A| = 3,\\quad |B| = 2 \\\\ A \\cup B = \\{1, 2, 4, 5\\},\\quad |A \\cup B| = 4 \\\\ A \\cap B = \\{2\\},\\quad |A \\cap B| = 1"
      },
      {
        "explanation": "Find the complements by removing each set's elements from the universal set $E$.",
        "workingOut": "\\overline{A} = E \\setminus A = \\{1,2,3,4,5,6\\} \\setminus \\{1,2,4\\} = \\{3, 5, 6\\} \\\\ \\overline{B} = E \\setminus B = \\{1,2,3,4,5,6\\} \\setminus \\{2,5\\} = \\{1, 3, 4, 6\\}"
      }
    ],
    "subQuestions": [
      {
        "id": "sq-11a",
        "question": "a. Find $|A|$",
        "type": "multiple_choice",
        "options": [
          { "text": "$|A| = 3$", "imageUrl": "" },
          { "text": "$|A| = 2$", "imageUrl": "" },
          { "text": "$|A| = 4$", "imageUrl": "" },
          { "text": "$|A| = 1$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "3",
        "solution": "$|A|$ is the number of elements in $A = \\{1, 2, 4\\}$. Counting: $1, 2, 4$ → $|A| = 3$."
      },
      {
        "id": "sq-11b",
        "question": "b. Find $|B|$",
        "type": "multiple_choice",
        "options": [
          { "text": "$|B| = 2$", "imageUrl": "" },
          { "text": "$|B| = 5$", "imageUrl": "" },
          { "text": "$|B| = 3$", "imageUrl": "" },
          { "text": "$|B| = 1$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "2",
        "solution": "$|B|$ is the number of elements in $B = \\{2, 5\\}$. Counting: $2, 5$ → $|B| = 2$."
      },
      {
        "id": "sq-11c",
        "question": "c. Find $A \\cup B$",
        "type": "multiple_choice",
        "options": [
          { "text": "$\\{1, 2, 4, 5\\}$", "imageUrl": "" },
          { "text": "$\\{1, 2, 5\\}$", "imageUrl": "" },
          { "text": "$\\{2\\}$", "imageUrl": "" },
          { "text": "$\\{1, 2, 3, 4, 5\\}$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "{1, 2, 4, 5}",
        "solution": "The union $A \\cup B$ combines all elements from $A = \\{1,2,4\\}$ and $B = \\{2,5\\}$, listing each only once: $A \\cup B = \\{1, 2, 4, 5\\}$."
      },
      {
        "id": "sq-11d",
        "question": "d. Find $|A \\cup B|$",
        "type": "multiple_choice",
        "options": [
          { "text": "$4$", "imageUrl": "" },
          { "text": "$3$", "imageUrl": "" },
          { "text": "$5$", "imageUrl": "" },
          { "text": "$2$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "4",
        "solution": "$A \\cup B = \\{1, 2, 4, 5\\}$ has 4 elements, so $|A \\cup B| = 4$."
      },
      {
        "id": "sq-11e",
        "question": "e. Find $A \\cap B$",
        "type": "multiple_choice",
        "options": [
          { "text": "$\\{2\\}$", "imageUrl": "" },
          { "text": "$\\{1, 2, 4\\}$", "imageUrl": "" },
          { "text": "$\\{2, 5\\}$", "imageUrl": "" },
          { "text": "$\\emptyset$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "{2}",
        "solution": "The intersection $A \\cap B$ contains only elements in BOTH sets. Checking $A = \\{1,2,4\\}$ against $B = \\{2,5\\}$: only $2$ is in both. So $A \\cap B = \\{2\\}$."
      },
      {
        "id": "sq-11f",
        "question": "f. Find $|A \\cap B|$",
        "type": "multiple_choice",
        "options": [
          { "text": "$1$", "imageUrl": "" },
          { "text": "$2$", "imageUrl": "" },
          { "text": "$0$", "imageUrl": "" },
          { "text": "$3$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "1",
        "solution": "$A \\cap B = \\{2\\}$ contains exactly 1 element, so $|A \\cap B| = 1$."
      },
      {
        "id": "sq-11g",
        "question": "g. Find $\\overline{A}$ (complement of $A$)",
        "type": "multiple_choice",
        "options": [
          { "text": "$\\{3, 5, 6\\}$", "imageUrl": "" },
          { "text": "$\\{3, 5\\}$", "imageUrl": "" },
          { "text": "$\\{1, 3, 5, 6\\}$", "imageUrl": "" },
          { "text": "$\\{2, 3, 5\\}$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "{3, 5, 6}",
        "solution": "$\\overline{A}$ contains all elements in $E = \\{1,2,3,4,5,6\\}$ that are NOT in $A = \\{1,2,4\\}$. Remove $1, 2, 4$: $\\overline{A} = \\{3, 5, 6\\}$."
      },
      {
        "id": "sq-11h",
        "question": "h. Find $\\overline{B}$ (complement of $B$)",
        "type": "multiple_choice",
        "options": [
          { "text": "$\\{1, 3, 4, 6\\}$", "imageUrl": "" },
          { "text": "$\\{1, 3, 4\\}$", "imageUrl": "" },
          { "text": "$\\{2, 4, 6\\}$", "imageUrl": "" },
          { "text": "$\\{1, 3, 6\\}$", "imageUrl": "" }
        ],
        "answerIdx": 0,
        "answer": "{1, 3, 4, 6}",
        "solution": "$\\overline{B}$ contains all elements in $E = \\{1,2,3,4,5,6\\}$ that are NOT in $B = \\{2,5\\}$. Remove $2, 5$: $\\overline{B} = \\{1, 3, 4, 6\\}$."
      }
    ]
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "If $A = \\{\\text{students who play tennis}\\}$ and $B = \\{\\text{students who play basketball}\\}$, which of the following correctly describes $A \\cap B$ and $A \\cup B$?",
    "options": [
      { "text": "$A \\cap B$: students who play both tennis and basketball; $A \\cup B$: students who play tennis or basketball (or both)", "imageUrl": "" },
      { "text": "$A \\cap B$: students who play tennis or basketball; $A \\cup B$: students who play both sports", "imageUrl": "" },
      { "text": "$A \\cap B$: students who play tennis but not basketball; $A \\cup B$: students who play basketball but not tennis", "imageUrl": "" },
      { "text": "$A \\cap B$: students who play neither sport; $A \\cup B$: all students in the school", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Think: $\\cap$ means AND (overlap); $\\cup$ means OR (at least one).",
    "solution": "$A \\cap B$ = both sports (AND); $A \\cup B$ = at least one sport (OR).",
    "solutionSteps": [
      {
        "explanation": "The intersection symbol $\\cap$ represents logical AND — elements must be in BOTH sets.",
        "workingOut": "A \\cap B = \\text{students who play tennis } \\textbf{AND} \\text{ basketball}"
      },
      {
        "explanation": "The union symbol $\\cup$ represents logical OR — elements are in at least one set.",
        "workingOut": "A \\cup B = \\text{students who play tennis } \\textbf{OR} \\text{ basketball (or both)}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "medium",
    "type": "multiple_choice",
    "isActive": true,
    "question": "If $A = \\{\\text{students who play violin}\\}$ and $B = \\{\\text{students who sing in the choir}\\}$ with the universal set $E = \\{\\text{all students at Oakridge Academy}\\}$, which option correctly describes $\\overline{A}$, $\\overline{B}$, $A \\cup B$, and $A \\cap B$?",
    "options": [
      { "text": "$\\overline{A}$: students who do not play violin; $\\overline{B}$: students who do not sing in the choir; $A \\cup B$: students who play violin or sing in the choir (or both); $A \\cap B$: students who play violin and sing in the choir", "imageUrl": "" },
      { "text": "$\\overline{A}$: students who play violin; $\\overline{B}$: students who sing in the choir; $A \\cup B$: students who do neither; $A \\cap B$: students who do both", "imageUrl": "" },
      { "text": "$\\overline{A}$: students who do not play violin; $\\overline{B}$: students who do not sing in the choir; $A \\cup B$: students who play violin AND sing in the choir; $A \\cap B$: students who play violin OR sing in the choir", "imageUrl": "" },
      { "text": "$\\overline{A}$: students at another school; $\\overline{B}$: all students at Oakridge; $A \\cup B$: all students; $A \\cap B$: no students", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "The complement $\\overline{A}$ consists of everyone in $E$ who is NOT in $A$.",
    "solution": "Option 1 correctly describes all four set operations.",
    "solutionSteps": [
      {
        "explanation": "The complement $\\overline{A}$ contains everyone in $E$ who is NOT in $A$, and similarly for $\\overline{B}$.",
        "workingOut": "\\overline{A} = \\text{Oakridge students who do } \\textbf{not} \\text{ play violin} \\\\ \\overline{B} = \\text{Oakridge students who do } \\textbf{not} \\text{ sing in the choir}"
      },
      {
        "explanation": "The union uses OR; the intersection uses AND.",
        "workingOut": "A \\cup B = \\text{play violin } \\textbf{OR} \\text{ sing in choir (or both)} \\\\ A \\cap B = \\text{play violin } \\textbf{AND} \\text{ sing in choir}"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "medium",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Which of the following correctly lists all the subsets for each set: (a) $\\{x\\}$, (b) $\\{x, y\\}$, (c) $\\{x, y, z\\}$, and (d) $\\emptyset$?",
    "options": [
      { "text": "(a) $\\emptyset, \\{x\\}$; (b) $\\emptyset, \\{x\\}, \\{y\\}, \\{x, y\\}$; (c) $\\emptyset, \\{x\\}, \\{y\\}, \\{z\\}, \\{x, y\\}, \\{x, z\\}, \\{y, z\\}, \\{x, y, z\\}$; (d) $\\emptyset$", "imageUrl": "" },
      { "text": "(a) $\\{x\\}$; (b) $\\{x\\}, \\{y\\}, \\{x, y\\}$; (c) $\\{x\\}, \\{y\\}, \\{z\\}, \\{x, y\\}, \\{x, z\\}, \\{y, z\\}, \\{x, y, z\\}$; (d) $\\{0\\}$", "imageUrl": "" },
      { "text": "(a) $\\emptyset, \\{x\\}$; (b) $\\emptyset, \\{x, y\\}$; (c) $\\emptyset, \\{x, y, z\\}$; (d) $\\emptyset$", "imageUrl": "" },
      { "text": "(a) $\\{x\\}, \\{-x\\}$; (b) $\\{x\\}, \\{y\\}, \\{x, y\\}, \\{y, x\\}$; (c) $\\emptyset, \\{x\\}, \\{y\\}, \\{z\\}, \\{x, y, z\\}$; (d) $\\{\\emptyset\\}$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "A set with $n$ elements has exactly $2^n$ subsets. The empty set $\\emptyset$ is always a subset.",
    "solution": "A set with $n$ elements has $2^n$ subsets, always including $\\emptyset$ and itself.",
    "solutionSteps": [
      {
        "explanation": "Key rule: a set with $n$ elements has exactly $2^n$ subsets. The empty set $\\emptyset$ is a subset of every set.",
        "workingOut": "n=1 \\Rightarrow 2^1=2 \\text{ subsets} \\\\ n=2 \\Rightarrow 2^2=4 \\text{ subsets} \\\\ n=3 \\Rightarrow 2^3=8 \\text{ subsets} \\\\ n=0 \\Rightarrow 2^0=1 \\text{ subset}"
      },
      {
        "explanation": "List all subsets for each set systematically.",
        "workingOut": "\\text{(a) }\\{x\\}: \\quad \\emptyset,\\ \\{x\\} \\\\ \\text{(b) }\\{x,y\\}: \\quad \\emptyset,\\ \\{x\\},\\ \\{y\\},\\ \\{x,y\\} \\\\ \\text{(c) }\\{x,y,z\\}: \\quad \\emptyset,\\ \\{x\\},\\ \\{y\\},\\ \\{z\\},\\ \\{x,y\\},\\ \\{x,z\\},\\ \\{y,z\\},\\ \\{x,y,z\\} \\\\ \\text{(d) }\\emptyset: \\quad \\emptyset"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Determine whether $A \\subset B$ for the sets $A = \\{3, 5, 7\\}$ and $B = \\{1, 2, 3, 4, 5, 6, 7, 8, 10\\}$.",
    "options": [
      { "text": "Yes, $A \\subset B$", "imageUrl": "" },
      { "text": "No, $A \\not\\subset B$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Check every element of $A$ one by one — is it in $B$?",
    "solution": "Yes, $A \\subset B$ because every element of $A$ is in $B$.",
    "solutionSteps": [
      {
        "explanation": "$A \\subset B$ holds if EVERY element of $A$ is also in $B$. Check each element.",
        "workingOut": "A = \\{3, 5, 7\\},\\quad B = \\{1, 2, 3, 4, 5, 6, 7, 8, 10\\} \\\\ 3 \\in B?\\text{ Yes}\\checkmark \\\\ 5 \\in B?\\text{ Yes}\\checkmark \\\\ 7 \\in B?\\text{ Yes}\\checkmark"
      },
      {
        "explanation": "All elements of $A$ are in $B$, so $A$ is a subset of $B$.",
        "workingOut": "A \\subset B \\quad (\\textbf{True})"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Determine whether $A \\subset B$ for the sets $A = \\{2, 4, 6, 8\\}$ and $B = \\{2, 3, 6, 7, 9\\}$.",
    "options": [
      { "text": "No, $A \\not\\subset B$ because $4 \\notin B$ and $8 \\notin B$", "imageUrl": "" },
      { "text": "Yes, $A \\subset B$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Check every element of $A$ — you only need one counter-example to disprove $A \\subset B$.",
    "solution": "No, $A \\not\\subset B$ because $4$ and $8$ are in $A$ but not in $B$.",
    "solutionSteps": [
      {
        "explanation": "Check each element of $A$ in $B$.",
        "workingOut": "A = \\{2, 4, 6, 8\\},\\quad B = \\{2, 3, 6, 7, 9\\} \\\\ 2 \\in B?\\text{ Yes}\\checkmark \\\\ 4 \\in B?\\text{ No}\\times \\\\ 6 \\in B?\\text{ Yes}\\checkmark \\\\ 8 \\in B?\\text{ No}\\times"
      },
      {
        "explanation": "Since $4$ and $8$ are in $A$ but not in $B$, the subset condition fails.",
        "workingOut": "A \\not\\subset B \\quad (\\textbf{False})"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Determine whether $A \\subset B$ for the sets $A = \\{\\text{g, r, a, c, e}\\}$ and $B = \\{\\text{c, a, t, e, g, o, r, y}\\}$.",
    "options": [
      { "text": "Yes, $A \\subset B$ — all letters in 'grace' are in 'category'", "imageUrl": "" },
      { "text": "No, $A \\not\\subset B$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "The letters of 'grace' are g, r, a, c, e. Check if each appears in 'category'.",
    "solution": "Yes, $A \\subset B$. All letters of 'grace' appear in 'category'.",
    "solutionSteps": [
      {
        "explanation": "Check every letter of $A$ against the letters of $B$.",
        "workingOut": "A = \\{\\text{g, r, a, c, e}\\},\\quad B = \\{\\text{c, a, t, e, g, o, r, y}\\} \\\\ \\text{g} \\in B?\\text{ Yes}\\checkmark \\\\ \\text{r} \\in B?\\text{ Yes}\\checkmark \\\\ \\text{a} \\in B?\\text{ Yes}\\checkmark \\\\ \\text{c} \\in B?\\text{ Yes}\\checkmark \\\\ \\text{e} \\in B?\\text{ Yes}\\checkmark"
      },
      {
        "explanation": "Every element of $A$ is in $B$, so $A \\subset B$.",
        "workingOut": "A \\subset B \\quad (\\textbf{True})"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Determine whether $A \\subset B$ for the sets $A = \\{\\text{t, o, n, y}\\}$ and $B = \\{\\text{s, t, o, n, e}\\}$.",
    "options": [
      { "text": "No, $A \\not\\subset B$ because $\\text{y} \\notin B$", "imageUrl": "" },
      { "text": "Yes, $A \\subset B$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "Check every letter of 'tony' against 'stone'.",
    "solution": "No, $A \\not\\subset B$ because $\\text{y} \\in A$ but $\\text{y} \\notin B$.",
    "solutionSteps": [
      {
        "explanation": "Check each letter of $A$ against $B$.",
        "workingOut": "A = \\{\\text{t, o, n, y}\\},\\quad B = \\{\\text{s, t, o, n, e}\\} \\\\ \\text{t} \\in B?\\text{ Yes}\\checkmark \\\\ \\text{o} \\in B?\\text{ Yes}\\checkmark \\\\ \\text{n} \\in B?\\text{ Yes}\\checkmark \\\\ \\text{y} \\in B?\\text{ No}\\times"
      },
      {
        "explanation": "Since $\\text{y}$ is in $A$ but not in $B$, $A$ is not a subset of $B$.",
        "workingOut": "A \\not\\subset B \\quad (\\textbf{True})"
      }
    ],
    "subQuestions": []
  },
  {
    "chapterId": "y11a-12",
    "chapterTitle": "Chapter 12: Probability",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-12A",
    "topicCode": "12A",
    "topicTitle": "Sets and Venn diagrams",
    "difficulty": "easy",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Determine whether $A \\subset B$ for $A = \\emptyset$ and $B = \\{10, 11, 12, 13\\}$.",
    "options": [
      { "text": "Yes, $A \\subset B$ — the empty set is a subset of every set", "imageUrl": "" },
      { "text": "No, $A \\not\\subset B$", "imageUrl": "" }
    ],
    "answer": "0",
    "hint": "By definition, the empty set has no elements, so it cannot have any element outside $B$.",
    "solution": "Yes. $\\emptyset$ is a subset of every set by definition.",
    "solutionSteps": [
      {
        "explanation": "$A \\subset B$ means there is no element of $A$ that is absent from $B$. Since $\\emptyset$ contains no elements at all, this condition is vacuously satisfied.",
        "workingOut": "\\emptyset \\text{ has no elements} \\\\ \\Rightarrow \\text{no element of } \\emptyset \\text{ is outside } B \\\\ \\Rightarrow \\emptyset \\subset B \\text{ for any set } B"
      },
      {
        "explanation": "This is a universal rule: the empty set is a subset of every set.",
        "workingOut": "\\emptyset \\subset S \\quad \\text{for any set } S"
      }
    ],
    "subQuestions": []
  }
];

export const importYear11AdvCh12A = async (forceReset = false) => {
  console.log(`Starting sync of Y11 Adv Ch12A (Total ${questions12A.length})...` + '\n' + `Chapter: Probability - Sets and Venn diagrams`);
  try {
    const qRef = collection(db, 'questions');
    const qSnap = await getDocs(query(qRef, 
      where('chapterId', '==', 'y11a-12'),
      where('topicCode', '==', '12A')
    ));
    
    // We only clean up questions belonging to y11a-12 and topicCode 12A
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(`Cleared ${qSnap.size} old questions under chapter y11a-12, topicCode 12A.`);

    let count = 0;
    for (const q of questions12A) {
        await addDoc(collection(db, 'questions'), { 
          ...q, 
          createdAt: serverTimestamp(), 
          updatedAt: serverTimestamp(), 
          isActive: true 
        });
        count++;
    }
    console.log(`Successfully imported ${count} questions under Chapter 12A.`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
