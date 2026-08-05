import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "id": "y7-23a-q1a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Sum means addition.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "1",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "To find the sum of two terms, we add them together.",
        "workingOut": "4x + 5y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4x + 5y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4x + 5y\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-4x + 5y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x + 5y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x - 5y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x + 5y\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write an expression for the following.\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "isNew": false,
    "question": "Write an expression for the following.<br /><br />The sum of \\(4x\\) and \\(5y\\)"
  },
  {
    "id": "y7-23a-q1b",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "Write an expression for the following.\\n...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "solutionSteps": [
      {
        "explanation": "Start with the term \\(3m\\) and subtract \\(7\\) from it.",
        "workingOut": "3m - 7",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3m - 7\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3m - 7\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Less than means subtraction. Be careful with the order.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "isNew": false,
    "question": "Write an expression for the following.<br /><br />\\(7\\) less than \\(3m\\)",
    "options": [
      {
        "text": "\\(-3m - 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4m - 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3m - 7\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q1c",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "Write an expression for the following.\\n...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Double means to multiply by \\(2\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply the term \\(4k\\) by \\(2\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8k\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8k\\)",
        "graphData": null
      }
    ],
    "question": "Write an expression for the following.<br /><br />The double of \\(4k\\)",
    "isNew": false,
    "options": [
      {
        "text": "\\(-8k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q1d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Difference means subtraction.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "0",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Subtract the second variable from the first.",
        "workingOut": "p - q",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p - q\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p - q\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write an expression for the following.\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write an expression for the following.<br /><br />The difference between \\(p\\) and \\(q\\)",
    "isNew": false,
    "options": [
      {
        "text": "\\(p - q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-p - q\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q1e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "1",
    "hint": "Multiply \\(w\\) by the fraction \\(\\frac{3}{4}\\).",
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write an expression for the following.\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply the variable by the fraction.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{3w}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{3w}{4}\\)",
        "graphData": null
      }
    ],
    "question": "Write an expression for the following.<br /><br />Three quarters of \\(w\\)",
    "isNew": false,
    "options": [
      {
        "text": "\\(-\\frac{3w}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3w}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{4w}{4}\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q2a",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "Write an algebraic expression for the fo...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "solutionSteps": [
      {
        "explanation": "First, write eight times \\(k\\).",
        "workingOut": "8k",
        "graphData": null
      },
      {
        "explanation": "Then, subtract 5 from that result.",
        "workingOut": "8k - 5",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8k - 5\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply \\(k\\) by \\(8\\), then subtract \\(5\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write an algebraic expression for the following.<br /><br />Eight times the number \\(k\\) minus \\(5\\)",
    "isNew": false,
    "options": [
      {
        "text": "\\(8k - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8k - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9k - 5\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q2b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Use addition for 'sum'.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "1",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Add the two terms together.",
        "workingOut": "7y + 42",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7y + 42\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7y + 42\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-7y + 42\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7y + 42\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7y - 42\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8y + 42\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write an algebraic expression for the fo...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write an algebraic expression for the following.<br /><br />The sum of \\(7y\\) and \\(42\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q2c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Add all three terms together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "2",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Use the addition symbol between all the terms.",
        "workingOut": "4a + 6b + 2c",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4a + 6b + 2c\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4a + 6b + 2c\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-4a + 6b + 2c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a - 6b - 2c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a + 6b + 2c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5a + 6b + 2c\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write an algebraic expression for the fo...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write an algebraic expression for the following.<br /><br />The sum of \\(4a\\), \\(6b\\) and \\(2c\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q2d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Product means multiplication.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "3",
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write an algebraic expression for the fo...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply the coefficients and the variables.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(20pq\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(20pq\\)",
        "graphData": null
      }
    ],
    "question": "Write an algebraic expression for the following.<br /><br />The product of \\(5p\\) and \\(4q\\)",
    "isNew": false,
    "options": [
      {
        "text": "\\(-20pq\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21pq\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20pq\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q2e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "0",
    "hint": "Add them and divide by \\(2\\).",
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write an algebraic expression for the fo...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Find the sum of the two terms.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Divide the sum by 2 to find the average.",
        "workingOut": "\\(\\frac{16m}{2} = 8m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8m\\)",
        "graphData": null
      }
    ],
    "question": "Write an algebraic expression for the following.<br /><br />The average of \\(6m\\) and \\(10m\\)",
    "isNew": false,
    "options": [
      {
        "text": "\\(8m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q3a",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "If y represents any number, write an alg...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "solutionSteps": [
      {
        "explanation": "Multiply the number \\(y\\) by \\(7\\).",
        "workingOut": "7y",
        "graphData": null
      },
      {
        "explanation": "Add \\(8\\) to the result. Simplify carefully and match the option.",
        "workingOut": "7y + 8",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7y + 8\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Translate 'times' to multiplication and 'plus' to addition.",
    "options": [
      {
        "text": "\\(-7y + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7y - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8y + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7y + 8\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(y\\) represents any number, write an algebraic expression for the following.<br /><br />Seven times the number plus \\(8\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q3b",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "If y represents any number, write an alg...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Divide \\(y\\) by \\(4\\), then subtract \\(3\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Find one quarter of the number \\(y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Subtract \\(3\\) from that.",
        "workingOut": "\\(\\frac{y}{4} - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{y}{4} - 3\\)",
        "graphData": null
      }
    ],
    "question": "If \\(y\\) represents any number, write an algebraic expression for the following.<br /><br />One quarter of the number minus three",
    "isNew": false,
    "options": [
      {
        "text": "\\(\\frac{y}{4} - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{y}{4} - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{y}{5} - 3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q3c",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "If y represents any number, write an alg...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "solutionSteps": [
      {
        "explanation": "Add \\(20\\) to the variable \\(y\\).",
        "workingOut": "y + 20",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y + 20\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y + 20\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Sum implies addition.",
    "options": [
      {
        "text": "\\(-y + 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y + 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y - 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y + 21\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(y\\) represents any number, write an algebraic expression for the following.<br /><br />The sum of the number and \\(20\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q3d",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "If y represents any number, write an alg...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "solutionSteps": [
      {
        "explanation": "Subtract \\(12\\) from the variable \\(y\\).",
        "workingOut": "y - 12",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y - 12\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y - 12\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Difference implies subtraction.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(y\\) represents any number, write an algebraic expression for the following.<br /><br />The difference between the number and \\(12\\)",
    "isNew": false,
    "options": [
      {
        "text": "\\(-y - 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y - 12\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q3e",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "If y represents any number, write an alg...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "solutionSteps": [
      {
        "explanation": "Add \\(6\\) to the variable \\(y\\).",
        "workingOut": "y + 6",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y + 6\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "'More than' implies addition.",
    "options": [
      {
        "text": "\\(-y + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y + 6\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(y\\) represents any number, write an algebraic expression for the following.<br /><br />Six more than the number",
    "isNew": false
  },
  {
    "id": "y7-23a-q4a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Sum means to add the terms together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "2",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Combine the terms using an addition sign.",
        "workingOut": "24 + m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(24 + m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(24 + m\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-24 + m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24 - m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24 + m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25 + m\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Show the sum of each of the following.\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Show the sum of each of the following.<br /><br />\\(24\\) and \\(m\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q4b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Sum means to add the terms together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "3",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Combine the terms using an addition sign.",
        "workingOut": "7p + 4q",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7p + 4q\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7p + 4q\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-7p + 4q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7p - 4q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8p + 4q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7p + 4q\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Show the sum of each of the following.\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Show the sum of each of the following.<br /><br />\\(7p\\) and \\(4q\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q4c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Sum means to add all the terms together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "0",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Place addition signs between all terms.",
        "workingOut": "4a + 2b + 6c",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4a + 2b + 6c\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4a + 2b + 6c\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(4a + 2b + 6c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4a + 2b + 6c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a - 2b - 6c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5a + 2b + 6c\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Show the sum of each of the following.\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Show the sum of each of the following.<br /><br />\\(4a\\), \\(2b\\) and \\(6c\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q4d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Sum means to add all the terms together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "1",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Place addition signs between all terms.",
        "workingOut": "9x + 3y + 8z",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9x + 3y + 8z\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9x + 3y + 8z\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-9x + 3y + 8z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x + 3y + 8z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x - 3y - 8z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10x + 3y + 8z\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Show the sum of each of the following.\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Show the sum of each of the following.<br /><br />\\(9x\\), \\(3y\\) and \\(8z\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q4e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Sum means to add all the terms together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "2",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Place addition signs between all terms.",
        "workingOut": "10p + 14q + 5r",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(10p + 14q + 5r\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(10p + 14q + 5r\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-10p + 14q + 5r\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10p - 14q - 5r\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10p + 14q + 5r\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11p + 14q + 5r\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Show the sum of each of the following.\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Show the sum of each of the following.<br /><br />\\(10p\\), \\(14q\\) and \\(5r\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q5a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "1",
    "hint": "First find the sum of \\(6a\\) and \\(4b\\), then add \\(7c\\).",
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the sum of the first two terms.",
        "workingOut": "6a + 4b",
        "graphData": null
      },
      {
        "explanation": "Add the third term to the result.",
        "workingOut": "6a + 4b + 7c",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6a + 4b + 7c\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-6a + 4b + 7c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6a + 4b + 7c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6a - 4b - 7c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7a + 4b + 7c\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write algebraic expressions for the foll...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write algebraic expressions for the following.<br /><br />To the sum of \\(6a\\) and \\(4b\\), add \\(7c\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q5b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23a",
    "topicCode": "23A",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Find the product first, then subtract.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "answer": "2",
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write algebraic expressions for the foll...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply the two terms to find the product.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Subtract 8 from the product.",
        "workingOut": "20xy - 8",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(20xy - 8\\)",
        "graphData": null
      }
    ],
    "question": "Write algebraic expressions for the following.<br /><br />From the product of \\(4x\\) and \\(5y\\), take away \\(8\\)",
    "isNew": false,
    "options": [
      {
        "text": "\\(-20xy - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21xy - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20xy - 8\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q5c",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "Write algebraic expressions for the foll...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Write the division as a fraction, then subtract.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Write the division of \\(5p\\) by \\(2q\\) as a fraction.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Subtract \\(12\\) from the fraction.",
        "workingOut": "\\(\\frac{5p}{2q} - 12\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{5p}{2q} - 12\\)",
        "graphData": null
      }
    ],
    "question": "Write algebraic expressions for the following.<br /><br />Divide \\(5p\\) by \\(2q\\) and then take away \\(12\\)",
    "isNew": false,
    "options": [
      {
        "text": "\\(-\\frac{5p}{2q} - 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{6p}{2q} - 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{5p}{2q} - 12\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23a-q5d",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "Write algebraic expressions for the foll...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "solutionSteps": [
      {
        "explanation": "Write the sum of the terms.",
        "workingOut": "a + b",
        "graphData": null
      },
      {
        "explanation": "Divide the entire expression by \\(15\\).",
        "workingOut": "\\(\\frac{a + b}{15}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{a + b}{15}\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Use a fraction bar to divide the entire sum.",
    "options": [
      {
        "text": "\\(\\frac{a + b}{15}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{a + b}{15}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{a - b}{15}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{a + b}{16}\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write algebraic expressions for the following.<br /><br />Divide the sum of \\(a\\) and \\(b\\) by \\(15\\)",
    "isNew": false
  },
  {
    "id": "y7-23a-q5e",
    "topicTitle": "Algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 361000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23A",
    "title": "Write algebraic expressions for the foll...",
    "type": "multiple_choice",
    "topicId": "y7-23a",
    "solutionSteps": [
      {
        "explanation": "Write the sum of the terms.",
        "workingOut": "25 + m",
        "graphData": null
      },
      {
        "explanation": "Divide the entire expression by \\(8\\).",
        "workingOut": "\\(\\frac{25 + m}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{25 + m}{8}\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Use a fraction bar to represent dividing the entire sum.",
    "options": [
      {
        "text": "\\(-\\frac{25 + m}{8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{25 + m}{8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{25 - m}{8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{26 + m}{8}\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write algebraic expressions for the following.<br /><br />\\(25\\) plus \\(m\\), all divided by \\(8\\)",
    "isNew": false
  },
  {
    "id": "y7-23b-q1a",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "title": "Complete the following.\\n\\nTerms such as...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "chapterId": "y7-23",
    "hint": "Terms with exactly the same variable(s) are called...",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "All these terms have the exact same variable part, which is '\\(y\\)'.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Therefore, they are called like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(like\\)",
        "graphData": null
      }
    ],
    "question": "Complete the following.<br /><br />Terms such as \\(4y, 7y, 2y, -3y, y\\) are called ________ terms.",
    "isNew": false,
    "options": [
      {
        "text": "like",
        "imageUrl": ""
      },
      {
        "text": "unlike",
        "imageUrl": ""
      }
    ],
    "correctAnswer": "like",
    "answer": "0"
  },
  {
    "id": "y7-23b-q1b",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "title": "Complete the following.\\n\\nTerms such as...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "chapterId": "y7-23",
    "hint": "If the variables are different, the terms are...",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The terms have different variable parts (\\(a\\) and \\(b\\)).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Therefore, they are called unlike terms.",
        "workingOut": "\\(\\text{unlike}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(unlike\\)",
        "graphData": null
      }
    ],
    "question": "Complete the following.<br /><br />Terms such as \\(5a, 7b\\) are called ________ terms.",
    "isNew": false,
    "options": [
      {
        "text": "like",
        "imageUrl": ""
      },
      {
        "text": "unlike",
        "imageUrl": ""
      }
    ],
    "correctAnswer": "unlike",
    "answer": "1"
  },
  {
    "id": "y7-23b-q1c",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "title": "Complete the following.\\n\\n7m, 2m, 5m ar...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Look at the variables attached to each number.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "All three terms have the same variable, '\\(m\\)'.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Since their variables are the same, they are like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(like\\)",
        "graphData": null
      }
    ],
    "question": "Complete the following.<br /><br />\\(7m, 2m, 5m\\) are ________ terms.",
    "isNew": false,
    "options": [
      {
        "text": "like",
        "imageUrl": ""
      },
      {
        "text": "unlike",
        "imageUrl": ""
      }
    ],
    "correctAnswer": "like"
  },
  {
    "id": "y7-23b-q1d",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "title": "Complete the following.\\n\\n4p, 3q, 2r ar...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Do the terms share the same variable?",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Each term has a completely different variable (\\(p\\), \\(q\\), and \\(r\\)).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Therefore, they cannot be combined and are unlike terms.",
        "workingOut": "\\(\\text{unlike}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(unlike\\)",
        "graphData": null
      }
    ],
    "question": "Complete the following.<br /><br />\\(4p, 3q, 2r\\) are ________ terms.",
    "isNew": false,
    "options": [
      {
        "text": "like",
        "imageUrl": ""
      },
      {
        "text": "unlike",
        "imageUrl": ""
      }
    ],
    "correctAnswer": "unlike"
  },
  {
    "id": "y7-23b-q1e",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "title": "Complete the following.\\n\\n4x^2, 7x^2, 9...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "chapterId": "y7-23",
    "hint": "Check both the variable and its exponent.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "All terms have the exact same variable part, which is '\\(x^2\\)'.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Therefore, they are like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(like\\)",
        "graphData": null
      }
    ],
    "question": "Complete the following.<br /><br />\\(4x^2, 7x^2, 9x^2\\) are ________ terms.",
    "isNew": false,
    "options": [
      {
        "text": "like",
        "imageUrl": ""
      },
      {
        "text": "unlike",
        "imageUrl": ""
      }
    ],
    "correctAnswer": "like",
    "answer": "0"
  },
  {
    "id": "y7-23b-q1f",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "title": "Complete the following.\\n\\n3pq, pq, 8pq ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "chapterId": "y7-23",
    "hint": "Do they have the exact same combination of variables?",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variable part for each term is '\\(pq\\)'.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Because the variables are identical, they are like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(like\\)",
        "graphData": null
      }
    ],
    "question": "Complete the following.<br /><br />\\(3pq, pq, 8pq\\) are ________ terms.",
    "isNew": false,
    "options": [
      {
        "text": "like",
        "imageUrl": ""
      },
      {
        "text": "unlike",
        "imageUrl": ""
      }
    ],
    "correctAnswer": "like",
    "answer": "0"
  },
  {
    "id": "y7-23b-q1g",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "title": "Complete the following.\\n\\n5n, 6n^2 are ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "chapterId": "y7-23",
    "hint": "Does a different power make them unlike?",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "One term has the variable '\\(n\\)', while the other has '\\(n^2\\)'.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Since the powers are different, they are unlike terms.",
        "workingOut": "\\(\\text{unlike}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(unlike\\)",
        "graphData": null
      }
    ],
    "question": "Complete the following.<br /><br />\\(5n, 6n^2\\) are ________ terms.",
    "isNew": false,
    "options": [
      {
        "text": "like",
        "imageUrl": ""
      },
      {
        "text": "unlike",
        "imageUrl": ""
      }
    ],
    "correctAnswer": "unlike",
    "answer": "1"
  },
  {
    "id": "y7-23b-q1h",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "isNew": true,
    "title": "Complete the following.\\n\\nab and ac are...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Compare the letters in each term.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The first term has variables \\(a\\) and \\(b\\), while the second has \\(a\\) and \\(c\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Since they do not share the exact same variables, they are unlike terms.",
        "workingOut": "\\(\\text{unlike}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(unlike\\)",
        "graphData": null
      }
    ],
    "question": "Complete the following.<br /><br />\\(ab\\) and \\(ac\\) are ________ terms.",
    "options": [
      {
        "text": "like",
        "imageUrl": ""
      },
      {
        "text": "unlike",
        "imageUrl": ""
      }
    ],
    "correctAnswer": "unlike"
  },
  {
    "id": "y7-23b-q2a",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Which of the following describes the pair of terms: \\(3y, 8y\\)?",
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "topicTitle": "Like terms and unlike terms",
    "topicId": "y7-23b",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Do they have the same variable part?",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-0\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Both terms have '\\(y\\)' as their variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Thus, they are like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2b",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Which of the following describes the pair of terms: \\(5m, 11m\\)?",
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "topicTitle": "Like terms and unlike terms",
    "topicId": "y7-23b",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Do they have the same variable part?",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-0\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Both terms share the exact same variable '\\(m\\)'.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Thus, they are like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2c",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Which of the following describes the pair of terms: \\(12p, 12\\)?",
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "topicTitle": "Like terms and unlike terms",
    "topicId": "y7-23b",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "One has a variable, the other is just a number.",
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The first term has a variable '\\(p\\)', but the second term is a constant with no variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Because they do not have the same variables, they are unlike.",
        "workingOut": "\\(\\text{unlike}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2d",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "answer": "0",
    "topicCode": "23B",
    "topicId": "y7-23b",
    "question": "Which of the following describes the pair of terms: \\(7b^2, 14b\\)?",
    "chapterId": "y7-23",
    "hint": "Check the powers of the variables.",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Like terms and unlike terms",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The first term has \\(b\\) squared (\\(b^2\\)), while the second term just has \\(b\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Terms must have the same variables with the same powers to be like terms.",
        "workingOut": "\\(\\text{unlike}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2e",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Which of the following describes the pair of terms: \\(4x, 13x\\)?",
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "topicTitle": "Like terms and unlike terms",
    "topicId": "y7-23b",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Do they share the same letter?",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-0\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Both terms have '\\(x\\)' as their variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "They are like terms. Simplify carefully and match the option.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2f",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Which of the following describes the pair of terms: \\(2m^2, 9m^2\\)?",
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "topicTitle": "Like terms and unlike terms",
    "topicId": "y7-23b",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Check if the variable and its power are identical.",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-0\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Both terms have the variable part '\\(m^2\\)'.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Thus, they are like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2g",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Which of the following describes the pair of terms: \\(10xy, 4yx\\)?",
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "topicTitle": "Like terms and unlike terms",
    "topicId": "y7-23b",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Does the order of variables matter in multiplication?",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variables \\(xy\\) and \\(yx\\) represent the same product because multiplication is commutative.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Since they contain the exact same variables, they are like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2h",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "answer": "0",
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "topicId": "y7-23b",
    "question": "Which of the following describes the pair of terms: \\(k, 8k\\)?",
    "chapterId": "y7-23",
    "hint": "A term without a visible number has a coefficient of 1.",
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-0\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Like terms and unlike terms",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The first term is '\\(1k\\)' and the second is '\\(8k\\)'. Both have the same variable '\\(k\\)'.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Therefore, they are like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2i",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Which of the following describes the pair of terms: \\(5mn, 8mp\\)?",
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "topicTitle": "Like terms and unlike terms",
    "topicId": "y7-23b",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Are all the letters exactly the same in both terms?",
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The first term contains \\(m\\) and \\(n\\), while the second contains \\(m\\) and \\(p\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Because the variables are not exactly the same, they are unlike terms.",
        "workingOut": "\\(\\text{unlike}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2j",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Which of the following describes the pair of terms: \\(4pq, 7pq\\)?",
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "topicTitle": "Like terms and unlike terms",
    "topicId": "y7-23b",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Look at the variables attached to each number.",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-0\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Both terms have '\\(pq\\)' as their variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Thus, they are like terms.",
        "workingOut": "\\(\\text{like}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2k",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Which of the following describes the pair of terms: \\(3y, 4y^2\\)?",
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "topicTitle": "Like terms and unlike terms",
    "topicId": "y7-23b",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Look at the exponent of the variable.",
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The first term has \\(y\\) to the power of 1, and the second has \\(y\\) to the power of 2.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Since the powers are different, they are unlike terms.",
        "workingOut": "\\(\\text{unlike}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q2l",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "answer": "0",
    "topicCode": "23B",
    "topicId": "y7-23b",
    "question": "Which of the following describes the pair of terms: \\(6n, 12n^2\\)?",
    "chapterId": "y7-23",
    "hint": "Compare the powers of the variables.",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "title": "Which of the following describes the pai...",
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Like terms and unlike terms",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "One term contains '\\(n\\)' while the other contains '\\(n^2\\)'.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Because their powers are not the same, they are unlike terms.",
        "workingOut": "\\(\\text{unlike}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q3a",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "In the expression \\(4m^3 + 3p^2 - 6m + 7q - 5\\), how many terms are there?",
    "isNew": true,
    "title": "In the expression 4m^3 + 3p^2 - 6m + 7q ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Count the separate parts separated by plus or minus signs.",
    "options": [
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Terms are separated by addition and subtraction signs.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms are \\(4m^3\\), \\(3p^2\\), \\(-6m\\), \\(7q\\), and \\(-5\\). Counting them gives 5 terms.",
        "workingOut": "5",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q3b",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "In the expression \\(4m^3 + 3p^2 - 6m + 7q - 5\\), write the fourth term.",
    "isNew": true,
    "title": "In the expression 4m^3 + 3p^2 - 6m + 7q ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Count from left to right, starting with the first term.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "List the terms in order: 1st is \\(4m^3\\), 2nd is \\(3p^2\\), 3rd is \\(-6m\\), 4th is \\(7q\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7q\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7q\\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\(-7q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8q\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23b-q3c",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "In the expression \\(4m^3 + 3p^2 - 6m + 7q - 5\\), write the coefficient of the first term.",
    "isNew": true,
    "title": "In the expression 4m^3 + 3p^2 - 6m + 7q ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "The coefficient is the number part of the term.",
    "options": [
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The first term is \\(4m^3\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The number in front of the variable is the coefficient.",
        "workingOut": "4",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q3d",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "In the expression \\(4m^3 + 3p^2 - 6m + 7q - 5\\), which term is the constant term?",
    "isNew": true,
    "title": "In the expression 4m^3 + 3p^2 - 6m + 7q ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "A constant term is a number on its own, without any variables.",
    "options": [
      {
        "text": "\\(-4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Look for the term that has no letters attached to it.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The only term without a variable is \\(-5\\). Be sure to include the negative sign.",
        "workingOut": "-5",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(-5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q4a",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Choose the like terms in the following set, separating them with a comma: \\(y^2\\), \\(3yz\\), \\(cd\\), \\(4y^2\\)",
    "isNew": true,
    "title": "Choose the like terms in the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Which two terms have exactly the same variable and exponent?",
    "options": [
      {
        "text": "\\(-y^2, 4y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3, 4y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2, 4y^2\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Inspect the variables: \\(y^2\\), \\(yz\\), \\(cd\\), and \\(y^2\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(y^2\\) and \\(4y^2\\) share the exact same variable part.",
        "workingOut": "\\(y^2, 4y^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y^2, 4y^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q4b",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Choose the like terms in the following set, separating them with a comma: \\(7m\\), \\(5q\\), \\(4m\\), \\(m^2\\)",
    "isNew": true,
    "title": "Choose the like terms in the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Which terms have exactly the same variable?",
    "options": [
      {
        "text": "\\(7m, 4m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7m, 4m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8m, 4m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7m\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Inspect the variables: \\(m\\), \\(q\\), \\(m\\), and \\(m^2\\). Remember \\(m^2\\) is different from \\(m\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(7m\\) and \\(4m\\) share the exact same variable part.",
        "workingOut": "7m, 4m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7m, 4m\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q4c",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Choose the like terms in the following set, separating them with a comma: \\(6p\\), \\(4n\\), \\(9p\\), \\(8c\\)",
    "isNew": true,
    "title": "Choose the like terms in the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Look for terms with identical letters.",
    "options": [
      {
        "text": "\\(-6p, 9p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6p, 9p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7p, 9p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6p\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Inspect the variables: \\(p\\), \\(n\\), \\(p\\), and \\(c\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(6p\\) and \\(9p\\) share the exact same variable part.",
        "workingOut": "6p, 9p",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6p, 9p\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q4d",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Choose the like terms in the following set, separating them with a comma: \\(5z\\), \\(8b\\), \\(4w\\), \\(9z\\)",
    "isNew": true,
    "title": "Choose the like terms in the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Look for terms with identical letters.",
    "options": [
      {
        "text": "\\(-5z, 9z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6z, 9z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5z, 9z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5z\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Inspect the variables: \\(z\\), \\(b\\), \\(w\\), and \\(z\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(5z\\) and \\(9z\\) share the exact same variable part.",
        "workingOut": "5z, 9z",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5z, 9z\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q4e",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Choose the like terms in the following set, separating them with commas: \\(3mn\\), \\(4y^2\\), \\(6mn\\), \\(9mn\\)",
    "isNew": true,
    "title": "Choose the like terms in the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "There might be more than two like terms.",
    "options": [
      {
        "text": "\\(-3mn, 6mn, 9mn\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4mn, 6mn, 9mn\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3mn, 6mn\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3mn, 6mn, 9mn\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Inspect the variables: \\(mn\\), \\(y^2\\), \\(mn\\), and \\(mn\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(3mn\\), \\(6mn\\), and \\(9mn\\) all share the exact same variable part.",
        "workingOut": "3mn, 6mn, 9mn",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3mn, 6mn, 9mn\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q4f",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Choose the like terms in the following set, separating them with a comma: \\(4pq\\), \\(7m\\), \\(8mn\\), \\(5qp\\)",
    "isNew": true,
    "title": "Choose the like terms in the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Does the order of variables matter in multiplication?",
    "options": [
      {
        "text": "\\(4pq, 5qp\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4pq, 5qp\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5pq, 5qp\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4pq\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variables \\(pq\\) and \\(qp\\) represent the same product because multiplication is commutative.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(4pq\\) and \\(5qp\\) share the exact same variables.",
        "workingOut": "4pq, 5qp",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4pq, 5qp\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q4g",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Choose the like terms in the following set, separating them with a comma: \\(4a\\), \\(6b\\), \\(5k\\), \\(7b\\)",
    "isNew": true,
    "title": "Choose the like terms in the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Look for terms with identical letters.",
    "options": [
      {
        "text": "\\(-6b, 7b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6b, 7b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7b, 7b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6b\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Inspect the variables: \\(a\\), \\(b\\), \\(k\\), and \\(b\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(6b\\) and \\(7b\\) share the exact same variable part.",
        "workingOut": "6b, 7b",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6b, 7b\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q4h",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Choose the like terms in the following set, separating them with a comma: \\(4m\\), \\(7n\\), \\(2mn\\), \\(9y\\), \\(5nm\\)",
    "isNew": true,
    "title": "Choose the like terms in the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Remember that \\(mn\\) and \\(nm\\) are the same.",
    "options": [
      {
        "text": "\\(-2mn, 5nm\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3mn, 5nm\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2mn, 5nm\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2mn\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variables \\(mn\\) and \\(nm\\) represent the same product.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(2mn\\) and \\(5nm\\) share the exact same variables.",
        "workingOut": "2mn, 5nm",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2mn, 5nm\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q5a",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Find the like terms in this expression, separating them with commas: \\(7b\\), \\(4z\\), \\(2w\\), \\(3b\\), \\(5n\\), \\(6b\\)",
    "isNew": true,
    "title": "Find the like terms in this expression, ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Which terms have the exact same variable?",
    "options": [
      {
        "text": "\\(-7b, 3b, 6b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8b, 3b, 6b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7b, 3b, 6b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7b, 3b\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Scan the terms looking for matching variables. The variable '\\(b\\)' appears multiple times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(7b\\), \\(3b\\), and \\(6b\\) all have '\\(b\\)' as their variable.",
        "workingOut": "7b, 3b, 6b",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7b, 3b, 6b\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q5b",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Find the like terms in this expression, separating them with commas: \\(4y^2\\), \\(y^2\\), \\(9p\\), \\(7y^2\\), \\(6y\\), \\(8z\\)",
    "isNew": true,
    "title": "Find the like terms in this expression, ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Watch out for exponents. \\(y^2\\) is not a like term with \\(y\\).",
    "options": [
      {
        "text": "\\(-4y^2, y^2, 7y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5y^2, y^2, 7y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4y^2, y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4y^2, y^2, 7y^2\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Identify terms with identical variable bases and exponents.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(4y^2\\), \\(y^2\\), and \\(7y^2\\) all share '\\(y^2\\)'.",
        "workingOut": "\\(4y^2, y^2, 7y^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4y^2, y^2, 7y^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q5c",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Find the like terms in this expression, separating them with commas: \\(6\\), \\(3m\\), \\(7\\), \\(4n\\), \\(8\\), \\(5x\\), \\(11\\)",
    "isNew": true,
    "title": "Find the like terms in this expression, ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Are numbers without variables like terms?",
    "options": [
      {
        "text": "\\(6, 7, 8, 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6, 7, 8, 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7, 7, 8, 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6, 7, 8\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Numbers without variables are called constants. All constant terms are like terms.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The constant terms are \\(6, 7, 8, 11\\).",
        "workingOut": "6, 7, 8, 11",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6, 7, 8, 11\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q5d",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Find the like terms in this expression, separating them with commas: \\(4p\\), \\(6pq\\), \\(9p\\), \\(8q\\), \\(7p\\)",
    "isNew": true,
    "title": "Find the like terms in this expression, ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Which terms have exactly the same variable?",
    "options": [
      {
        "text": "\\(-4p, 9p, 7p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4p, 9p, 7p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5p, 9p, 7p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4p, 9p\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Scan the terms looking for matching variables. The variable '\\(p\\)' appears multiple times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(4p\\), \\(9p\\), and \\(7p\\) all have '\\(p\\)' as their variable.",
        "workingOut": "4p, 9p, 7p",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4p, 9p, 7p\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23b-q5e",
    "topicTitle": "Like terms and unlike terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830280,
      "_nanoseconds": 745000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23B",
    "question": "Find the like terms in this expression, separating them with commas: \\(11a\\), \\(4b^2\\), \\(b^2\\), \\(8b\\), \\(15b^2\\), \\(4ab\\)",
    "isNew": true,
    "title": "Find the like terms in this expression, ...",
    "type": "multiple_choice",
    "topicId": "y7-23b",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Terms must have identical variables and powers.",
    "options": [
      {
        "text": "\\(-4b^2, b^2, 15b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5b^2, b^2, 15b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4b^2, b^2, 15b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4b^2, b^2\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Identify terms with identical variable bases and exponents.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(4b^2\\), \\(b^2\\), and \\(15b^2\\) all share '\\(b^2\\)'.",
        "workingOut": "\\(4b^2, b^2, 15b^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4b^2, b^2, 15b^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23c-q1a",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "The coefficient is the number part of the term.",
    "options": [
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The term is \\(7m\\). The number multiplying the variable is the coefficient.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7\\)",
        "graphData": null
      }
    ],
    "isNew": false,
    "question": "Write down the coefficient for the following term.<br /><br />\\(7m\\)"
  },
  {
    "id": "y7-23c-q1b",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Identify the numerical multiplier in front of the letter.",
    "options": [
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(4p\\), the number \\(4\\) is multiplying \\(p\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(4p\\)"
  },
  {
    "id": "y7-23c-q1c",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "The coefficient is the number part of the term.",
    "options": [
      {
        "text": "\\(16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-15\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(15k\\), the number \\(15\\) is multiplying \\(k\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(15k\\)"
  },
  {
    "id": "y7-23c-q1d",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Identify the numerical multiplier.",
    "options": [
      {
        "text": "\\(63\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(61\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(62\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-62\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(62y\\), the number \\(62\\) is multiplying \\(y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(62\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(62\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(62y\\)"
  },
  {
    "id": "y7-23c-q1e",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "The coefficient is the number part of the term.",
    "options": [
      {
        "text": "\\(42\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(40\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-41\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(41\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(41z\\), the number \\(41\\) is multiplying \\(z\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(41\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(41\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(41z\\)"
  },
  {
    "id": "y7-23c-q1f",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Identify the numerical multiplier.",
    "options": [
      {
        "text": "\\(28\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(29\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-28\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(28n\\), the number \\(28\\) is multiplying \\(n\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(28\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(28\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(28n\\)"
  },
  {
    "id": "y7-23c-q1g",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "The coefficient is the number part of the term.",
    "options": [
      {
        "text": "\\(76\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(75\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(74\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-75\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(75d\\), the number \\(75\\) is multiplying \\(d\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(75\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(75\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(75d\\)"
  },
  {
    "id": "y7-23c-q1h",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Identify the numerical multiplier.",
    "options": [
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(8x\\), the number \\(8\\) is multiplying \\(x\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(8x\\)"
  },
  {
    "id": "y7-23c-q1i",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "The coefficient is the number part of the term.",
    "options": [
      {
        "text": "\\(20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-19\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(19w\\), the number \\(19\\) is multiplying \\(w\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(19\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(19\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(19w\\)"
  },
  {
    "id": "y7-23c-q1j",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Identify the numerical multiplier.",
    "options": [
      {
        "text": "\\(37\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(38\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-37\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(37b\\), the number \\(37\\) is multiplying \\(b\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(37\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(37\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(37b\\)"
  },
  {
    "id": "y7-23c-q1k",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "The coefficient is the number part of the term.",
    "options": [
      {
        "text": "\\(22\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-21\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(21c\\), the number \\(21\\) is multiplying \\(c\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(21\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(21\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(21c\\)"
  },
  {
    "id": "y7-23c-q1l",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write down the coefficient for the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Identify the numerical multiplier.",
    "options": [
      {
        "text": "\\(45\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(43\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(44\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-44\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "In the term \\(44p\\), the number \\(44\\) is multiplying \\(p\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(44\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(44\\)",
        "graphData": null
      }
    ],
    "question": "Write down the coefficient for the following term.<br /><br />\\(44p\\)"
  },
  {
    "id": "y7-23c-q2a",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "List the like terms from the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Like terms must have exactly the same variable(s).",
    "options": [
      {
        "text": "\\(-7n, 8n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8n, 8n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7n, 8n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7n\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Look at the variables for each term: \\(m, n, n\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(7n\\) and \\(8n\\) both have the variable \\(n\\), so they are like terms.",
        "workingOut": "7n, 8n",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7n, 8n\\)",
        "graphData": null
      }
    ],
    "question": "List the like terms from the following set, separated by a comma.<br /><br />\\(4m, 7n, 8n\\)"
  },
  {
    "id": "y7-23c-q2b",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "List the like terms from the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Which terms have the exact same letter?",
    "options": [
      {
        "text": "\\(-3p, 5p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4p, 5p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3p, 5p\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Look at the variables for each term: \\(p, q, p\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(3p\\) and \\(5p\\) both have the variable \\(p\\).",
        "workingOut": "3p, 5p",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3p, 5p\\)",
        "graphData": null
      }
    ],
    "question": "List the like terms from the following set, separated by a comma.<br /><br />\\(3p, 8q, 5p\\)"
  },
  {
    "id": "y7-23c-q2c",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "List the like terms from the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Like terms must have exactly the same variable(s).",
    "options": [
      {
        "text": "\\(8y, 4y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8y, 4y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9y, 4y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8y\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variables are \\(y, b, y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(8y\\) and \\(4y\\) both have the variable \\(y\\).",
        "workingOut": "8y, 4y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8y, 4y\\)",
        "graphData": null
      }
    ],
    "question": "List the like terms from the following set, separated by a comma.<br /><br />\\(8y, 2b, 4y\\)"
  },
  {
    "id": "y7-23c-q2d",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "List the like terms from the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Which terms have the exact same letter?",
    "options": [
      {
        "text": "\\(-7k, 2k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7k, 2k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8k, 2k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7k\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variables are \\(k, m, k\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(7k\\) and \\(2k\\) both have the variable \\(k\\).",
        "workingOut": "7k, 2k",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7k, 2k\\)",
        "graphData": null
      }
    ],
    "question": "List the like terms from the following set, separated by a comma.<br /><br />\\(7k, 5m, 2k\\)"
  },
  {
    "id": "y7-23c-q2e",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "List the like terms from the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Like terms must have exactly the same variable(s).",
    "options": [
      {
        "text": "\\(-6w, 2w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7w, 2w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6w, 2w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6w\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variables are \\(w, c, w\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(6w\\) and \\(2w\\) both have the variable \\(w\\).",
        "workingOut": "6w, 2w",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6w, 2w\\)",
        "graphData": null
      }
    ],
    "question": "List the like terms from the following set, separated by a comma.<br /><br />\\(6w, 4c, 2w\\)"
  },
  {
    "id": "y7-23c-q2f",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "List the like terms from the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Which terms have the exact same letter?",
    "options": [
      {
        "text": "\\(-4x, 2x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x, 2x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x, 2x\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variables are \\(x, y, x\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(4x\\) and \\(2x\\) both have the variable \\(x\\).",
        "workingOut": "4x, 2x",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4x, 2x\\)",
        "graphData": null
      }
    ],
    "question": "List the like terms from the following set, separated by a comma.<br /><br />\\(4x, 7y, 2x\\)"
  },
  {
    "id": "y7-23c-q2g",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "List the like terms from the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Like terms must have exactly the same variable(s).",
    "options": [
      {
        "text": "\\(3q, 8q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3q, 8q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4q, 8q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3q\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variables are \\(p, q, q\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(3q\\) and \\(8q\\) both have the variable \\(q\\).",
        "workingOut": "3q, 8q",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3q, 8q\\)",
        "graphData": null
      }
    ],
    "question": "List the like terms from the following set, separated by a comma.<br /><br />\\(6p, 3q, 8q\\)"
  },
  {
    "id": "y7-23c-q2h",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "List the like terms from the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Numbers without variables are constants. Which terms have the same variable?",
    "options": [
      {
        "text": "\\(-4y, 9y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4y, 9y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5y, 9y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4y\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The first term is a constant, while the others have the variable \\(y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(4y\\) and \\(9y\\) both have the variable \\(y\\).",
        "workingOut": "4y, 9y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4y, 9y\\)",
        "graphData": null
      }
    ],
    "question": "List the like terms from the following set, separated by a comma.<br /><br />\\(7, 4y, 9y\\)"
  },
  {
    "id": "y7-23c-q2i",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "List the like terms from the following s...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Like terms must have exactly the same variable(s).",
    "options": [
      {
        "text": "\\(-8m, m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9m, m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8m, m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8m\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variables are \\(m, m, n\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "The terms \\(8m\\) and \\(m\\) both have the variable \\(m\\).",
        "workingOut": "8m, m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8m, m\\)",
        "graphData": null
      }
    ],
    "question": "List the like terms from the following set, separated by a comma.<br /><br />\\(8m, m, n\\)"
  },
  {
    "id": "y7-23c-q3a",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Simplify the following.\\n\\n4y + 5y...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Add the coefficients of the like terms.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Both are like terms since they have the variable \\(y\\). Add their coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9y\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(4y + 5y\\)",
    "options": [
      {
        "text": "\\(-9y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q3b",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Simplify the following.\\n\\nm + m + m...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Each \\(m\\) has an invisible coefficient of 1.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Add the coefficients: \\(1 + 1 + 1\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3m\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(m + m + m\\)",
    "options": [
      {
        "text": "\\(-3m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q3c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "3",
    "hint": "Count how many times \\(p\\) is being added.",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\np + p + p + p...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "There are 5 terms, each with a coefficient of 1.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5p\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5p\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(p + p + p + p + p\\)",
    "options": [
      {
        "text": "\\(-5p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5p\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q3d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "hint": "Count how many times \\(k\\) is being added.",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\nk + k + k + k...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "There are 6 terms, each with a coefficient of 1.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6k\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6k\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(k + k + k + k + k + k\\)",
    "options": [
      {
        "text": "\\(6k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q3e",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Simplify the following.\\n\\nx + x + x + x...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Each \\(x\\) has an invisible coefficient of 1.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Add the coefficients: \\(1 + 1 + 1 + 1\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4x\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4x\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(x + x + x + x\\)",
    "options": [
      {
        "text": "\\(-4x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q3f",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "2",
    "hint": "Count how many times \\(w\\) is being added.",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\nw + w + w...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "There are 3 terms, each with a coefficient of 1.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3w\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3w\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(w + w + w\\)",
    "options": [
      {
        "text": "\\(-3w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3w\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q3g",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Simplify the following.\\n\\n5n + 8n...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Add the coefficients of the like terms.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Both are like terms since they have the variable \\(n\\). Add their coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(13n\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(13n\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(5n + 8n\\)",
    "options": [
      {
        "text": "\\(-13n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13n\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q3h",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Add all the coefficients together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n6a + 4a + 5a...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "All three terms are like terms. Add their coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15a\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15a\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(6a + 4a + 5a\\)",
    "options": [
      {
        "text": "\\(15a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-15a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16a\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q3i",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Add the coefficients of the like terms.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n7b + 12b...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Both are like terms. Add their coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(19b\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(19b\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(7b + 12b\\)",
    "options": [
      {
        "text": "\\(-19b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20b\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q4a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Subtract the coefficients of the like terms.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following expression.\\n\\n18...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Since they are like terms, subtract the coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(13y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(13y\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following expression.<br /><br />\\(18y - 5y\\)",
    "options": [
      {
        "text": "\\(13y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-13y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q4b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Subtract the coefficients of the like terms.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following expression.\\n\\n32...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Since they are like terms, subtract the coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(17c\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(17c\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following expression.<br /><br />\\(32c - 15c\\)",
    "options": [
      {
        "text": "\\(-17c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(17c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(18c\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q4c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Subtract the coefficients of the like terms.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "2",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following expression.\\n\\n25...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Since they are like terms, subtract the coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(13m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(13m\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following expression.<br /><br />\\(25m - 12m\\)",
    "options": [
      {
        "text": "\\(-13m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q4d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Subtract the coefficients of the like terms.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following expression.\\n\\n21...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Since they are like terms, subtract the coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14p\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14p\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following expression.<br /><br />\\(21p - 7p\\)",
    "options": [
      {
        "text": "\\(-14p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14p\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q4e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Subtract the coefficients of the like terms.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following expression.\\n\\n19...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Since they are like terms, subtract the coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(11k\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(11k\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following expression.<br /><br />\\(19k - 8k\\)",
    "options": [
      {
        "text": "\\(11k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-11k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q4f",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Subtract the coefficients of the like terms.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following expression.\\n\\n16...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Since they are like terms, subtract the coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7n\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7n\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following expression.<br /><br />\\(16n - 9n\\)",
    "options": [
      {
        "text": "\\(-7n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8n\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q4g",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Subtract the coefficients of the like terms.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "2",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following expression.\\n\\n14...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Since they are like terms, subtract the coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8w\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8w\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following expression.<br /><br />\\(14w - 6w\\)",
    "options": [
      {
        "text": "\\(-8w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8w\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q4h",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Subtract the coefficients of the like terms.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following expression.\\n\\n17...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Since they are like terms, subtract the coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9x\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9x\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following expression.<br /><br />\\(17x - 8x\\)",
    "options": [
      {
        "text": "\\(-9x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q4i",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "hint": "Remember that \\(z\\) is the same as \\(1z\\).",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following expression.\\n\\n24...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Since they are like terms, subtract the coefficients. The second term has a coefficient of 1.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(23z\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(23z\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following expression.<br /><br />\\(24z - z\\)",
    "options": [
      {
        "text": "\\(23z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-23z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24z\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q5a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "In algebra, we leave out the multiplication sign between a number and a variable.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the number followed immediately by the variable.",
        "workingOut": "7m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7m\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n7 \\times m...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(7 \\times m\\)",
    "options": [
      {
        "text": "\\(-7m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q5b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Leave out the multiplication signs and write the letters together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the number followed immediately by the variables.",
        "workingOut": "5pq",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5pq\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5pq\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n5 \\times p \\t...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(5 \\times p \\times q\\)",
    "options": [
      {
        "text": "\\(5pq\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5pq\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6pq\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q5c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Leave out the multiplication signs between variables.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the variables together without multiplication signs.",
        "workingOut": "abc",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(abc\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(abc\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\na \\times b \\t...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(a \\times b \\times c\\)",
    "options": [
      {
        "text": "\\(-abc\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(abc\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q5d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Leave out the multiplication signs and write the letters together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "2",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the number followed immediately by the variables.",
        "workingOut": "6mn",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6mn\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6mn\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n6 \\times m \\t...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(6 \\times m \\times n\\)",
    "options": [
      {
        "text": "\\(-6mn\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7mn\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6mn\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q5e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Leave out all multiplication signs.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the number followed by the variables together.",
        "workingOut": "32xyz",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(32xyz\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(32xyz\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n32 \\times x \\...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(32 \\times x \\times y \\times z\\)",
    "options": [
      {
        "text": "\\(-32xyz\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(33xyz\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(32xyz\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q5f",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Leave out the multiplication signs and write the letters together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the number followed by the variables.",
        "workingOut": "8jk",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8jk\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8jk\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n8 \\times j \\t...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(8 \\times j \\times k\\)",
    "options": [
      {
        "text": "\\(8jk\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8jk\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9jk\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q5g",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "The number (coefficient) always goes first in an algebraic term.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the number first, followed by the variables without multiplication signs.",
        "workingOut": "12pq",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12pq\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12pq\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\np \\times q \\t...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(p \\times q \\times 12\\)",
    "options": [
      {
        "text": "\\(-12pq\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12pq\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13pq\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q5h",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Simplify the following.\\n\\n7 \\times 3 \\t...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "solutionSteps": [
      {
        "explanation": "First, multiply the constant numbers: \\(7 \\times 3 = 21\\).",
        "workingOut": "21",
        "graphData": null
      },
      {
        "explanation": "Then append the variables without multiplication signs.",
        "workingOut": "21ab",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(21ab\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers together first.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(7 \\times 3 \\times a \\times b\\)",
    "options": [
      {
        "text": "\\(-21ab\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(22ab\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21ab\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q5i",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Leave out the multiplication signs.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the number followed by the variables together.",
        "workingOut": "11xyw",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(11xyw\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(11xyw\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n11 \\times x \\...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(11 \\times x \\times y \\times w\\)",
    "options": [
      {
        "text": "\\(-11xyw\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12xyw\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11xyw\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Put the multiplication signs back in.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "2",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression in expand...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert multiplication signs between the number and each variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12 \\times a \\times b\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12 \\times a \\times b\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(12ab\\)",
    "options": [
      {
        "text": "\\(-12 \\times a \\times b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13 \\times a \\times b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12 \\times a \\times b\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Put the multiplication signs back in.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression in expand...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert multiplication signs between the number and each variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8 \\times x \\times y \\times z\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8 \\times x \\times y \\times z\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(8xyz\\)",
    "options": [
      {
        "text": "\\(-8 \\times x \\times y \\times z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 \\times x \\times y \\times z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\times x \\times y \\times z\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Put the multiplication signs back in.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression in expand...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert multiplication signs between the number and each variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7 \\times m \\times n\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7 \\times m \\times n\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(7mn\\)",
    "options": [
      {
        "text": "\\(7 \\times m \\times n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7 \\times m \\times n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\times m \\times n\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Put the multiplication signs back in.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression in expand...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert multiplication signs between the number and each variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15 \\times p \\times q \\times r\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15 \\times p \\times q \\times r\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(15pqr\\)",
    "options": [
      {
        "text": "\\(-15 \\times p \\times q \\times r\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15 \\times p \\times q \\times r\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16 \\times p \\times q \\times r\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Put the multiplication signs back in.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "2",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression in expand...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert multiplication signs between the number and each variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6 \\times a \\times b \\times c\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6 \\times a \\times b \\times c\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(6abc\\)",
    "options": [
      {
        "text": "\\(-6 \\times a \\times b \\times c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 \\times a \\times b \\times c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\times a \\times b \\times c\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6f",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write the following expression in expand...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Expand the power (\\(y^2 = y \\times y\\)) as well.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The term \\(y^2\\) means \\(y \\times y\\). Insert multiplication signs between all parts.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(30 \\times x \\times y \\times y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(30 \\times x \\times y \\times y\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(30xy^2\\)",
    "options": [
      {
        "text": "\\(-30 \\times x \\times y \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(31 \\times x \\times y \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(30 \\times x \\times y \\times y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6g",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Put the multiplication signs back in.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression in expand...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert multiplication signs between the number and each variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5 \\times j \\times k \\times l\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5 \\times j \\times k \\times l\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(5jkl\\)",
    "options": [
      {
        "text": "\\(5 \\times j \\times k \\times l\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 \\times j \\times k \\times l\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\times j \\times k \\times l\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6h",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write the following expression in expand...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Expand the power (\\(m^2 = m \\times m\\)) as well.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The term \\(m^2\\) means \\(m \\times m\\). Insert multiplication signs between all parts.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4 \\times m \\times m \\times n\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4 \\times m \\times m \\times n\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(4m^2n\\)",
    "options": [
      {
        "text": "\\(-4 \\times m \\times m \\times n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\times m \\times m \\times n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5 \\times m \\times m \\times n\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6i",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Put the multiplication signs back in.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "2",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression in expand...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert multiplication signs between the number and each variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9 \\times p \\times q \\times r\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9 \\times p \\times q \\times r\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(9pqr\\)",
    "options": [
      {
        "text": "\\(-9 \\times p \\times q \\times r\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 \\times p \\times q \\times r\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 \\times p \\times q \\times r\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6j",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write the following expression in expand...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Expand the power (\\(x^3\\)).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The term \\(x^3\\) means \\(x\\) multiplied by itself three times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7 \\times x \\times x \\times x\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7 \\times x \\times x \\times x\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(7x^3\\)",
    "options": [
      {
        "text": "\\(-7 \\times x \\times x \\times x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\times x \\times x \\times x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 \\times x \\times x \\times x\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6k",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Put the multiplication signs back in.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression in expand...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert multiplication signs between the number and each variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14 \\times x \\times y \\times z\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14 \\times x \\times y \\times z\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(14xyz\\)",
    "options": [
      {
        "text": "\\(14 \\times x \\times y \\times z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-14 \\times x \\times y \\times z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15 \\times x \\times y \\times z\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6l",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write the following expression in expand...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Expand all powers: \\(m^2\\) and \\(n^2\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The term \\(m^2\\) means \\(m \\times m\\), and \\(n^2\\) means \\(n \\times n\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(10 \\times m \\times m \\times n \\times n\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(10 \\times m \\times m \\times n \\times n\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(10m^2n^2\\)",
    "options": [
      {
        "text": "\\(-10 \\times m \\times m \\times n \\times n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 \\times m \\times m \\times n \\times n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11 \\times m \\times m \\times n \\times n\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6m",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23c",
    "topicCode": "23C",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Put the multiplication sign back in.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "answer": "2",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression in expand...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert a multiplication sign between the number and the variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8 \\times p\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8 \\times p\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(8p\\)",
    "options": [
      {
        "text": "\\(-8 \\times p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 \\times p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\times p\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23c-q6n",
    "topicTitle": "Simplifying algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 193000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23C",
    "isNew": true,
    "title": "Write the following expression in expand...",
    "type": "multiple_choice",
    "topicId": "y7-23c",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Expand the powers: \\(a^2\\) means \\(a \\times a\\) and \\(b^3\\) means \\(b \\times b \\times b\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Write out the factors for \\(a^2\\) and \\(b^3\\), separated by multiplication signs.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15 \\times a \\times a \\times b \\times b \\times b\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15 \\times a \\times a \\times b \\times b \\times b\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression in expanded form.<br /><br />\\(15a^2b^3\\)",
    "options": [
      {
        "text": "\\(-15 \\times a \\times a \\times b \\times b \\times b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16 \\times a \\times a \\times b \\times b \\times b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15 \\times a \\times a \\times b \\times b \\times b\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q1a",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms to simplify the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "There are two \\(p\\)'s and three \\(q\\)'s.",
        "workingOut": "(p + p) + (q + q + q)",
        "graphData": null
      },
      {
        "explanation": "Write the sum using coefficients.",
        "workingOut": "2p + 3q",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2p + 3q\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Count how many of each variable there are.",
    "options": [
      {
        "text": "\\(2p + 3q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2p + 3q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2p - 3q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3p + 3q\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Collect like terms to simplify the following.<br /><br />\\(p + p + q + q + q\\)"
  },
  {
    "id": "y7-23d-q1b",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms to simplify the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Combine the three \\(a\\)'s and the two \\(b\\)'s.",
        "workingOut": "3a + 2b",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3a + 2b\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3a + 2b\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Group the \\(a\\)'s and group the \\(b\\)'s.",
    "options": [
      {
        "text": "\\(-3a + 2b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3a + 2b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3a - 2b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a + 2b\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Collect like terms to simplify the following.<br /><br />\\(a + a + a + b + b\\)"
  },
  {
    "id": "y7-23d-q1c",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms to simplify the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "There are four \\(x\\)'s added together, plus one \\(y\\).",
        "workingOut": "4x + y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4x + y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4x + y\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Count the number of \\(x\\)'s. The \\(y\\) is on its own.",
    "options": [
      {
        "text": "\\(-4x + y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x - y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x + y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x + y\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Collect like terms to simplify the following.<br /><br />\\(x + x + x + x + y\\)"
  },
  {
    "id": "y7-23d-q1d",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms to simplify the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Combine the two \\(u\\)'s and the three \\(v\\)'s.",
        "workingOut": "2u + 3v",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2u + 3v\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2u + 3v\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Group the same letters together.",
    "options": [
      {
        "text": "\\(-2u + 3v\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2u - 3v\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3u + 3v\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2u + 3v\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Collect like terms to simplify the following.<br /><br />\\(u + u + v + v + v\\)"
  },
  {
    "id": "y7-23d-q1e",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms to simplify the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Combine the three \\(c\\)'s and the two \\(d\\)'s.",
        "workingOut": "3c + 2d",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3c + 2d\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3c + 2d\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Group the \\(c\\)'s and the \\(d\\)'s.",
    "options": [
      {
        "text": "\\(3c + 2d\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3c + 2d\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3c - 2d\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4c + 2d\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Collect like terms to simplify the following.<br /><br />\\(c + c + c + d + d\\)"
  },
  {
    "id": "y7-23d-q1f",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms to simplify the follo...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "There are two \\(m\\)'s and four \\(n\\)'s.",
        "workingOut": "2m + 4n",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2m + 4n\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2m + 4n\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Count how many of each variable there are.",
    "options": [
      {
        "text": "\\(-2m + 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2m + 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2m - 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3m + 4n\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Collect like terms to simplify the following.<br /><br />\\(m + m + n + n + n + n\\)"
  },
  {
    "id": "y7-23d-q2a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "3",
    "hint": "Group the terms with \\(y\\) and group the constant numbers.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Group the like terms together.",
        "workingOut": "(6y + 3y) + (8 + 12)",
        "graphData": null
      },
      {
        "explanation": "Add the coefficients and constants.",
        "workingOut": "9y + 20",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9y + 20\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-9y + 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9y - 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10y + 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9y + 20\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Simplify the following by collecting lik...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following by collecting like terms.<br /><br />\\(6y + 8 + 3y + 12\\)"
  },
  {
    "id": "y7-23d-q2b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "0",
    "hint": "Add the \\(m\\) terms together and the numbers together.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Group the like terms. Simplify carefully and match the option.",
        "workingOut": "(7m + 5m) + (14 + 10)",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "12m + 24",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12m + 24\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(12m + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12m + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12m - 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13m + 24\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Simplify the following by collecting lik...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following by collecting like terms.<br /><br />\\(7m + 14 + 5m + 10\\)"
  },
  {
    "id": "y7-23d-q2c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "1",
    "hint": "Group the \\(p\\) terms together and the \\(q\\) terms together.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Rearrange to group like terms.",
        "workingOut": "(5p + 7p) + (4q + 3q)",
        "graphData": null
      },
      {
        "explanation": "Add the coefficients. Simplify carefully and match the option.",
        "workingOut": "12p + 7q",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12p + 7q\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-12p + 7q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12p + 7q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12p - 7q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13p + 7q\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Simplify the following by collecting lik...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following by collecting like terms.<br /><br />\\(5p + 4q + 7p + 3q\\)"
  },
  {
    "id": "y7-23d-q2d",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following by collecting lik...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Group the \\(a\\) terms. Simplify carefully and match the option.",
        "workingOut": "(9a + 5a) + 4b",
        "graphData": null
      },
      {
        "explanation": "Simplify the \\(a\\) terms. The \\(b\\) term stays the same.",
        "workingOut": "14a + 4b",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14a + 4b\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Only add terms that have the same variable.",
    "options": [
      {
        "text": "\\(-14a + 4b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14a - 4b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14a + 4b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15a + 4b\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following by collecting like terms.<br /><br />\\(9a + 4b + 5a\\)"
  },
  {
    "id": "y7-23d-q2e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "3",
    "hint": "Add the \\(x\\) terms together, and add the \\(y\\) terms together.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Group the like terms. Simplify carefully and match the option.",
        "workingOut": "(4x + 7x) + (6y + 2y)",
        "graphData": null
      },
      {
        "explanation": "Simplify. Simplify carefully and match the option.",
        "workingOut": "11x + 8y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(11x + 8y\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-11x + 8y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11x - 8y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12x + 8y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11x + 8y\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Simplify the following by collecting lik...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following by collecting like terms.<br /><br />\\(4x + 6y + 7x + 2y\\)"
  },
  {
    "id": "y7-23d-q2f",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "0",
    "hint": "Group the \\(k\\) terms and the \\(m\\) terms.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Rearrange the expression to bring like terms together.",
        "workingOut": "(3k + 8k) + (5m + 12m)",
        "graphData": null
      },
      {
        "explanation": "Add the coefficients. Simplify carefully and match the option.",
        "workingOut": "11k + 17m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(11k + 17m\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(11k + 17m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-11k + 17m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11k - 17m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12k + 17m\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Simplify the following by collecting lik...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following by collecting like terms.<br /><br />\\(3k + 5m + 8k + 12m\\)"
  },
  {
    "id": "y7-23d-q3a",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n15m - 6m - 3m...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Group the \\(m\\) terms and calculate \\(15 - 6 - 3\\).",
        "workingOut": "(15 - 6 - 3)m + 4n",
        "graphData": null
      },
      {
        "explanation": "Simplify. Simplify carefully and match the option.",
        "workingOut": "6m + 4n",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6m + 4n\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Perform the operations on the \\(m\\) terms from left to right.",
    "options": [
      {
        "text": "\\(-6m + 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6m - 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6m + 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7m + 4n\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(15m - 6m - 3m + 4n\\)"
  },
  {
    "id": "y7-23d-q3b",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n8a + 5b - 4a ...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Group the \\(a\\) terms and the \\(b\\) terms.",
        "workingOut": "(8a - 4a) + (5b + 11b)",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "4a + 16b",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4a + 16b\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Keep the signs with the terms that follow them.",
    "options": [
      {
        "text": "\\(-4a + 16b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a - 16b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5a + 16b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a + 16b\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(8a + 5b - 4a + 11b\\)"
  },
  {
    "id": "y7-23d-q3c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "0",
    "hint": "Combine the \\(x\\) terms, then combine the \\(y\\) terms.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Group like terms together.",
        "workingOut": "(7x + 5x) + (8y - 2y)",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "12x + 6y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12x + 6y\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(12x + 6y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12x + 6y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12x - 6y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13x + 6y\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Simplify the following.\\n\\n7x + 8y + 5x ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(7x + 8y + 5x - 2y\\)"
  },
  {
    "id": "y7-23d-q3d",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n9c - 4c + 12d...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Group the \\(c\\) terms and \\(d\\) terms.",
        "workingOut": "(9c - 4c) + (12d - 5d)",
        "graphData": null
      },
      {
        "explanation": "Perform the subtraction. Simplify carefully and match the option.",
        "workingOut": "5c + 7d",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5c + 7d\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Subtract the coefficients of the like terms.",
    "options": [
      {
        "text": "\\(-5c + 7d\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5c + 7d\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5c - 7d\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6c + 7d\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(9c - 4c + 12d - 5d\\)"
  },
  {
    "id": "y7-23d-q3e",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n14y + 35y + 2...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Combine the two \\(y\\) terms.",
        "workingOut": "(14y + 35y) + 20",
        "graphData": null
      },
      {
        "explanation": "Simplify. Simplify carefully and match the option.",
        "workingOut": "49y + 20",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(49y + 20\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Add the terms with \\(y\\). The number stays the same.",
    "options": [
      {
        "text": "\\(-49y + 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(49y - 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(49y + 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(50y + 20\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(14y + 35y + 20\\)"
  },
  {
    "id": "y7-23d-q3f",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n18xyz - 11xyz...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "These are like terms, so just subtract the coefficients.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Subtract the numbers and keep the variable part \\(xyz\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7xyz\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7xyz\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(18xyz - 11xyz\\)",
    "options": [
      {
        "text": "\\(-7xyz\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8xyz\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7xyz\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q3g",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "0",
    "hint": "Combine the \\(p\\) terms, then combine the \\(q\\) terms.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Group the like terms. Simplify carefully and match the option.",
        "workingOut": "(15p - 5p) + (7q + 18q - 4q)",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "10p + 21q",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(10p + 21q\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(10p + 21q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-10p + 21q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10p - 21q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11p + 21q\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Simplify the following.\\n\\n15p - 5p + 7q...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(15p - 5p + 7q + 18q - 4q\\)"
  },
  {
    "id": "y7-23d-q3h",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n9a + 6b + 12a...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Rearrange to group like terms.",
        "workingOut": "(9a + 12a) + (6b - 3b - 2b)",
        "graphData": null
      },
      {
        "explanation": "Simplify the \\(a\\) terms and the \\(b\\) terms.",
        "workingOut": "\\(21a + 1b = 21a + b\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(21a + b\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Group the \\(a\\) terms and \\(b\\) terms before adding or subtracting.",
    "options": [
      {
        "text": "\\(-21a + b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21a + b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21a - b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(22a + b\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(9a + 6b + 12a - 3b - 2b\\)"
  },
  {
    "id": "y7-23d-q4a",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n9y - y - 4y...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Rewrite the expression showing the invisible \\(1\\).",
        "workingOut": "9y - 1y - 4y",
        "graphData": null
      },
      {
        "explanation": "Subtract the coefficients from left to right: \\(9 - 1 - 4\\).",
        "workingOut": "4y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4y\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Remember that \\(y\\) has an invisible coefficient of \\(1\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(9y - y - 4y\\)",
    "options": [
      {
        "text": "\\(-4y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q4b",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n7w - 3w + 8w...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Subtract \\(3w\\) from \\(7w\\), then add \\(8w\\).",
        "workingOut": "(7 - 3 + 8)w",
        "graphData": null
      },
      {
        "explanation": "Calculate the result. Simplify carefully and match the option.",
        "workingOut": "12w",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12w\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Work from left to right.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(7w - 3w + 8w\\)",
    "options": [
      {
        "text": "\\(-12w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12w\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q4c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "3",
    "hint": "All the terms have the same variable \\(m^2\\), so combine their coefficients.",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n6m^2 + 9m^2 -...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Add and subtract the coefficients.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate the result. Simplify carefully and match the option.",
        "workingOut": "\\(11m^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(11m^2\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(6m^2 + 9m^2 - 4m^2\\)",
    "options": [
      {
        "text": "\\(-11m^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12m^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11m^2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q4d",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n8p - 5p - 2p...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Subtract the coefficients: \\(8 - 5 - 2\\).",
        "workingOut": "1p",
        "graphData": null
      },
      {
        "explanation": "Write \\(1p\\) simply as \\(p\\).",
        "workingOut": "p",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Work from left to right. What happens if the coefficient is \\(1\\)?",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(8p - 5p - 2p\\)",
    "options": [
      {
        "text": "\\(p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-p\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q4e",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n4x - 5y - 6x ...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Group the \\(x\\) terms and \\(y\\) terms. Keep the signs attached to the terms.",
        "workingOut": "(4x - 6x) + (-5y - y)",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "-2x - 6y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(-2x - 6y\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Be careful with negative signs when grouping.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(4x - 5y - 6x - y\\)",
    "options": [
      {
        "text": "\\(2x - 6y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2x - 6y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3x - 6y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q4f",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\ny + 6y - 9y...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Combine the coefficients: \\(1 + 6 - 9\\).",
        "workingOut": "(1 + 6 - 9)y",
        "graphData": null
      },
      {
        "explanation": "Calculate the result. Simplify carefully and match the option.",
        "workingOut": "-2y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(-2y\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Remember \\(y\\) is \\(1y\\). The result can be negative.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(y + 6y - 9y\\)",
    "options": [
      {
        "text": "\\(2y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q4g",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n7m + 8m - m...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Combine the coefficients: \\(7 + 8 - 1\\).",
        "workingOut": "(7 + 8 - 1)m",
        "graphData": null
      },
      {
        "explanation": "Calculate the result. Simplify carefully and match the option.",
        "workingOut": "14m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14m\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Remember that \\(- m\\) means subtract \\(1m\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(7m + 8m - m\\)",
    "options": [
      {
        "text": "\\(-14m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q4h",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n8k - k - 5k -...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Combine the coefficients: \\(8 - 1 - 5 - 3\\).",
        "workingOut": "(8 - 1 - 5 - 3)k",
        "graphData": null
      },
      {
        "explanation": "Calculate the result. Simplify carefully and match the option.",
        "workingOut": "\\(-1k = -k\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(-k\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Subtract the coefficients one by one.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(8k - k - 5k - 3k\\)",
    "options": [
      {
        "text": "\\(-k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q5a",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n7c - c - 4c...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Subtract the coefficients: \\(7 - 1 - 4\\).",
        "workingOut": "(7 - 1 - 4)c",
        "graphData": null
      },
      {
        "explanation": "Calculate the result. Simplify carefully and match the option.",
        "workingOut": "2c",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2c\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Remember that \\(- c\\) is the same as \\(- 1c\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(7c - c - 4c\\)",
    "options": [
      {
        "text": "\\(2c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3c\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q5b",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\nx^2 - 5x - x ...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "\\(x^2\\) and \\(x\\) are not like terms. Only combine the \\(x\\) terms.",
    "options": [
      {
        "text": "\\(-x^2 - 6x + 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 6x + 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 6x - 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 6x + 10\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Group the like terms (the \\(x\\) terms).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify. Simplify carefully and match the option.",
        "workingOut": "\\(x^2 - 6x + 10\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x^2 - 6x + 10\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(x^2 - 5x - x + 10\\)"
  },
  {
    "id": "y7-23d-q5c",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\n9p - 5q - q...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Group the \\(q\\) terms: \\(-5q\\) and \\(-1q\\).",
        "workingOut": "9p + (-5q - 1q)",
        "graphData": null
      },
      {
        "explanation": "Simplify the \\(q\\) terms.",
        "workingOut": "9p - 6q",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9p - 6q\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Combine the \\(q\\) terms. Keep their signs.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(9p - 5q - q\\)",
    "options": [
      {
        "text": "\\(-9p - 6q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10p - 6q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9p - 6q\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q5d",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\nk^2 - 3k + 8k...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Combine only the terms with \\(k\\).",
    "options": [
      {
        "text": "\\(-k^2 + 5k - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k^2 - 5k - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k^3 + 5k - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k^2 + 5k - 5\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Group the \\(k\\) terms. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify the middle terms.",
        "workingOut": "\\(k^2 + 5k - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(k^2 + 5k - 5\\)",
        "graphData": null
      }
    ],
    "question": "Simplify the following.<br /><br />\\(k^2 - 3k + 8k - 5\\)"
  },
  {
    "id": "y7-23d-q5e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "0",
    "hint": "Group the \\(m\\) terms and group the \\(n\\) terms.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Group like terms together.",
        "workingOut": "(8m - 7m) + (n - 5n)",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "\\(1m - 4n = m - 4n\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m - 4n\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n8m + n - 5n -...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(8m + n - 5n - 7m\\)",
    "options": [
      {
        "text": "\\(m - 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-m - 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m - 5n\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q5f",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "1",
    "hint": "Group the \\(a\\) terms and group the \\(b\\) terms.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Group like terms together.",
        "workingOut": "(5a + 4a) + (7b - 2b)",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "9a + 5b",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9a + 5b\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-9a + 5b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9a + 5b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9a - 5b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10a + 5b\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Simplify the following.\\n\\n5a + 7b + 4a ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(5a + 7b + 4a - 2b\\)"
  },
  {
    "id": "y7-23d-q5g",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Simplify the following.\\n\\nmn + 6n + 5mn...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Group the \\(mn\\) terms. Simplify carefully and match the option.",
        "workingOut": "(1mn + 5mn) + 6n",
        "graphData": null
      },
      {
        "explanation": "Simplify the \\(mn\\) terms.",
        "workingOut": "6mn + 6n",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6mn + 6n\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Combine the \\(mn\\) terms. The \\(n\\) term is different.",
    "options": [
      {
        "text": "\\(-6mn + 6n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6mn - 6n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6mn + 6n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7mn + 6n\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(mn + 6n + 5mn\\)"
  },
  {
    "id": "y7-23d-q5h",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "3",
    "hint": "Group the \\(xy\\) terms and group the \\(y\\) terms.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Group like terms together.",
        "workingOut": "(1xy - 5xy) + (4y + 8y)",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "-4xy + 12y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(-4xy + 12y\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(4xy + 12y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4xy - 12y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5xy + 12y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4xy + 12y\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Simplify the following.\\n\\nxy + 4y - 5xy...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(xy + 4y - 5xy + 8y\\)"
  },
  {
    "id": "y7-23d-q6a",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms and simplify.\\n\\nxy +...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Group the like terms together.",
        "workingOut": "(xy - xy) + (yz - yz) + xz",
        "graphData": null
      },
      {
        "explanation": "The \\(xy\\) and \\(yz\\) terms cancel out.",
        "workingOut": "\\(0 + 0 + xz = xz\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(xz\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Look for terms that cancel each other out.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Collect like terms and simplify.<br /><br />\\(xy + yz - xy - yz + xz\\)",
    "options": [
      {
        "text": "\\(-xz\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(xz\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q6b",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms and simplify.\\n\\n8m^2...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Be careful! \\(m^2n\\) is different from \\(mn^2\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Group the \\(m^2n\\) terms and the \\(mn^2\\) terms.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "\\(11m^2n - 6mn^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(11m^2n - 6mn^2\\)",
        "graphData": null
      }
    ],
    "question": "Collect like terms and simplify.<br /><br />\\(8m^2n - 4mn^2 - 2mn^2 + 3m^2n\\)",
    "options": [
      {
        "text": "\\(11m^2n - 6mn^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-11m^2n - 6mn^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12m^2n - 6mn^2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q6c",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms and simplify.\\n\\n7p^2...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "All terms have \\(p^2\\), so combine their coefficients.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Combine the coefficients: \\(7 + 11 - 4\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate the result. Simplify carefully and match the option.",
        "workingOut": "\\(14p^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14p^2\\)",
        "graphData": null
      }
    ],
    "question": "Collect like terms and simplify.<br /><br />\\(7p^2 + 11p^2 - 4p^2\\)",
    "options": [
      {
        "text": "\\(-14p^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14p^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15p^2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q6d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "2",
    "hint": "Group the \\(abc\\) terms and the \\(b\\) terms.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Group like terms together.",
        "workingOut": "(16abc + 5abc) + (8b - 3b)",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "21abc + 5b",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(21abc + 5b\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-21abc + 5b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21abc - 5b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21abc + 5b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(22abc + 5b\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Collect like terms and simplify.\\n\\n16ab...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Collect like terms and simplify.<br /><br />\\(16abc + 8b + 5abc - 3b\\)"
  },
  {
    "id": "y7-23d-q6e",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms and simplify.\\n\\n14pq...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "solutionSteps": [
      {
        "explanation": "Group the \\(pqr\\) terms. Simplify carefully and match the option.",
        "workingOut": "(14pqr + 12pqr) - 5pq",
        "graphData": null
      },
      {
        "explanation": "Simplify the \\(pqr\\) terms.",
        "workingOut": "26pqr - 5pq",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(26pqr - 5pq\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Only combine the \\(pqr\\) terms. The \\(pq\\) term is different.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Collect like terms and simplify.<br /><br />\\(14pqr + 12pqr - 5pq\\)",
    "options": [
      {
        "text": "\\(-26pqr - 5pq\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27pqr - 5pq\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(26pqr - 5pq\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23d-q6f",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23D",
    "isNew": true,
    "title": "Collect like terms and simplify.\\n\\n32x^...",
    "type": "multiple_choice",
    "topicId": "y7-23d",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Combine the \\(x^2\\) terms.",
    "options": [
      {
        "text": "\\(20x^2 + 18y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-20x^2 + 18y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20x^2 - 18y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21x^2 + 18y^2\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Group the \\(x^2\\) terms. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify the \\(x^2\\) terms.",
        "workingOut": "\\(20x^2 + 18y^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(20x^2 + 18y^2\\)",
        "graphData": null
      }
    ],
    "question": "Collect like terms and simplify.<br /><br />\\(32x^2 + 18y^2 - 12x^2\\)"
  },
  {
    "id": "y7-23d-q6g",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "1",
    "hint": "Group the \\(m^2n^2\\) terms and the \\(m\\) terms.",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-12m^2n^2 + 12m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12m^2n^2 + 12m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12m^2n^2 - 12m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13m^2n^2 + 12m\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Collect like terms and simplify.\\n\\n7m^2...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Group like terms together.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "\\(12m^2n^2 + 12m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12m^2n^2 + 12m\\)",
        "graphData": null
      }
    ],
    "question": "Collect like terms and simplify.<br /><br />\\(7m^2n^2 + 8m + 5m^2n^2 + 4m\\)"
  },
  {
    "id": "y7-23d-q6h",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23d",
    "topicCode": "23D",
    "topicTitle": "Collecting like terms",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830281,
      "_nanoseconds": 810000000
    },
    "answer": "2",
    "hint": "Group the \\(x^3\\) terms and the \\(y^3\\) terms.",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-15x^3 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15x^3 - y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15x^3 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16x^3 + y^3\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Collect like terms and simplify.\\n\\n8x^3...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Group like terms together.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify each group. Simplify carefully and match the option.",
        "workingOut": "\\(15x^3 + 1y^3 = 15x^3 + y^3\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15x^3 + y^3\\)",
        "graphData": null
      }
    ],
    "question": "Collect like terms and simplify.<br /><br />\\(8x^3 + 7x^3 - 4y^3 + 5y^3\\)"
  },
  {
    "id": "y7-23e-q1a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "In algebra, we don't write the multiplication sign between a number and a letter.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Remove the multiplication sign.",
        "workingOut": "15m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15m\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following in a shorter way.\\n\\...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shorter way.<br /><br />\\(15 \\times m\\)",
    "options": [
      {
        "text": "\\(-15m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q1b",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shorter way.\\n\\...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "First, multiply the numbers: \\(4 \\times 7 = 28\\).",
        "workingOut": "28",
        "graphData": null
      },
      {
        "explanation": "Then remove the multiplication sign before the letter.",
        "workingOut": "28k",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(28k\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers first, then attach the letter.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shorter way.<br /><br />\\(4 \\times 7 \\times k\\)",
    "options": [
      {
        "text": "\\(-28k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(29k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(28k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q1c",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in another way.\\n\\n6...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Use indices (powers) for repeated multiplication of the same variable.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variable \\(p\\) is multiplied by itself 3 times, which can be written as \\(p^3\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Combine it with the number without the multiplication sign.",
        "workingOut": "\\(6p^3\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6p^3\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in another way.<br /><br />\\(6 \\times p \\times p \\times p\\)",
    "options": [
      {
        "text": "\\(-6p^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7p^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6p^3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q1d",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following, showing all multipl...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Insert a multiplication sign between every number and variable.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "\\(5xy\\) means 5 multiplied by \\(x\\), and then multiplied by \\(y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5 \\times x \\times y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5 \\times x \\times y\\)",
        "graphData": null
      }
    ],
    "question": "Write the following, showing all multiplication signs.<br /><br />\\(5xy\\)",
    "options": [
      {
        "text": "\\(5 \\times x \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 \\times x \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\times x \\times y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2a",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "Multiply \\(6\\) and \\(3\\).",
        "workingOut": "18",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication sign before \\(m\\).",
        "workingOut": "18m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(18m\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers together first.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(6 \\times 3 \\times m\\)",
    "options": [
      {
        "text": "\\(18m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-18m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2b",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "The order of multiplication doesn't matter. Multiply the numbers first.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Rearrange the expression: \\(4 \\times 9 \\times y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication sign.",
        "workingOut": "36y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(36y\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(4 \\times y \\times 9\\)",
    "options": [
      {
        "text": "\\(-36y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(36y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(37y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2c",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "Write \\(7 \\times q\\) as \\(7q\\). The addition sign must stay.",
        "workingOut": "p + 7q",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p + 7q\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p + 7q\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "The multiplication sign between 7 and \\(q\\) can be removed.",
    "options": [
      {
        "text": "\\(-p + 7q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p - 7q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p + 7q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p + 8q\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(p + 7 \\times q\\)"
  },
  {
    "id": "y7-23e-q2d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "We don't need a multiplication sign in front of a bracket.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Remove the multiplication sign between the number 5 and the opening bracket.",
        "workingOut": "5(3m + 4)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5(3m + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5(3m + 4)\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-5(3m + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5(3m - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6(3m + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5(3m + 4)\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write the following expression without m...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(5 \\times (3m + 4)\\)"
  },
  {
    "id": "y7-23e-q2e",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Use a fraction bar for division.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The first part (\\(4x\\)) goes on the top (numerator), and the second part (\\(5\\)) goes on the bottom (denominator).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{4x}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{4x}{5}\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(4x \\div 5\\)",
    "options": [
      {
        "text": "\\(\\frac{4x}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{4x}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{5x}{5}\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2f",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Simply remove all the multiplication signs between letters.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the letters next to each other.",
        "workingOut": "abc",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(abc\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(abc\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression without m...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(a \\times b \\times c\\)",
    "options": [
      {
        "text": "\\(-abc\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(abc\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2g",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "Rearrange to multiply the numbers: \\(8 \\times 2 = 16\\).",
        "workingOut": "16",
        "graphData": null
      },
      {
        "explanation": "Write the variable after the number.",
        "workingOut": "16k",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(16k\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers first.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(8 \\times k \\times 2\\)",
    "options": [
      {
        "text": "\\(-16k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(17k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2h",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Use a power (index) for \\(n \\times n\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "\\(n \\times n\\) becomes \\(n^2\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication sign.",
        "workingOut": "\\(5mn^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5mn^2\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(5m \\times n \\times n\\)",
    "options": [
      {
        "text": "\\(-5mn^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6mn^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5mn^2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2i",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "Multiply the numbers: \\(4 \\times 7 = 28\\).",
        "workingOut": "28",
        "graphData": null
      },
      {
        "explanation": "Remove multiplication signs between variables.",
        "workingOut": "28xy",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(28xy\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers together, then write the letters next to each other.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(4 \\times x \\times 7 \\times y\\)",
    "options": [
      {
        "text": "\\(28xy\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-28xy\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(29xy\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2j",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "Write \\(8 \\times p\\) as \\(8p\\).",
        "workingOut": "8p - 5",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8p - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8p - 5\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Remove the multiplication sign. Keep the subtraction sign.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(8 \\times p - 5\\)",
    "options": [
      {
        "text": "\\(-8p - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8p - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9p - 5\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2k",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "Write \\(9 \\times y\\) as \\(9y\\).",
        "workingOut": "7 + 9y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7 + 9y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7 + 9y\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Remove the multiplication sign. Keep the addition sign.",
    "options": [
      {
        "text": "\\(-7 + 9y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 - 9y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 + 9y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 + 9y\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(7 + 9 \\times y\\)"
  },
  {
    "id": "y7-23e-q2l",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "Write \\(6 \\times m\\) as \\(6m\\) and \\(4 \\times n\\) as \\(4n\\).",
        "workingOut": "6m + 4n",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6m + 4n\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6m + 4n\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Remove both multiplication signs.",
    "options": [
      {
        "text": "\\(-6m + 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6m - 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7m + 4n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6m + 4n\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(6 \\times m + 4 \\times n\\)"
  },
  {
    "id": "y7-23e-q2m",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Use a fraction bar for division.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression without m...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The number before the division sign is the numerator, the variable after is the denominator.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{21}{y}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{21}{y}\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(21 \\div y\\)",
    "options": [
      {
        "text": "\\(\\frac{21}{y}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{21}{y}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{22}{y}\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2n",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Use a fraction bar.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Place \\(8p\\) on top and \\(13\\) on the bottom.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{8p}{13}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{8p}{13}\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(8p \\div 13\\)",
    "options": [
      {
        "text": "\\(-\\frac{8p}{13}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{8p}{13}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{9p}{13}\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2o",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Use a fraction bar.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Place \\(m\\) on top and \\(11\\) on the bottom.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{m}{11}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{m}{11}\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(m \\div 11\\)",
    "options": [
      {
        "text": "\\(-\\frac{m}{11}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{m}{12}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{m}{11}\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q2p",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "The entire bracket goes on top of the fraction.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-\\frac{x + y}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - y}{5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + y}{6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x + y}{5}\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write the following expression without m...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Place the contents of the bracket in the numerator. You don't need the brackets anymore since the fraction bar groups them.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{x + y}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{x + y}{5}\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\((x + y) \\div 5\\)"
  },
  {
    "id": "y7-23e-q2q",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "The entire bracket goes on the bottom of the fraction.",
    "options": [
      {
        "text": "\\(\\frac{7m}{4m + 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{7m}{4m + 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{7m}{4m - 5}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{8m}{4m + 5}\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Place \\(7m\\) on top and the expression \\(4m+5\\) on the bottom.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{7m}{4m + 5}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{7m}{4m + 5}\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\(7m \\div (4m + 5)\\)"
  },
  {
    "id": "y7-23e-q2r",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression without m...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "The bracket goes on top.",
    "options": [
      {
        "text": "\\(-\\frac{8x + 3}{5x}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{8x + 3}{5x}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{8x - 3}{5x}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{9x + 3}{5x}\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Place \\(8x+3\\) on top and \\(5x\\) on the bottom.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{8x + 3}{5x}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{8x + 3}{5x}\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression without multiplication or division signs.<br /><br />\\((8x + 3) \\div 5x\\)"
  },
  {
    "id": "y7-23e-q3a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "What operation is hidden between the number and letter?",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression by showin...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert a multiplication sign between the number and the variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9 \\times k\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9 \\times k\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(9k\\)",
    "options": [
      {
        "text": "\\(-9 \\times k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 \\times k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 \\times k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q3b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "What operation is hidden between the number and letter?",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression by showin...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert a multiplication sign between the number and the variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12 \\times p\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12 \\times p\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(12p\\)",
    "options": [
      {
        "text": "\\(12 \\times p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12 \\times p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13 \\times p\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q3c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "What operation is hidden between the number and letter?",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression by showin...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert a multiplication sign between the number and the variable.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15 \\times m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(15 \\times m\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(15m\\)",
    "options": [
      {
        "text": "\\(-15 \\times m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15 \\times m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16 \\times m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q3d",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression by showin...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Only expand the term with a variable.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert a multiplication sign in the term \\(6y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6 \\times y - 7\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6 \\times y - 7\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(6y - 7\\)",
    "options": [
      {
        "text": "\\(-6 \\times y - 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 \\times y - 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\times y - 7\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q3e",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression by showin...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Only expand the term with a variable.",
    "options": [
      {
        "text": "\\(-8 \\times p + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\times p - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 \\times p + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\times p + 5\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert a multiplication sign in the term \\(8p\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8 \\times p + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8 \\times p + 5\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(8p + 5\\)"
  },
  {
    "id": "y7-23e-q3f",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression by showin...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Expand the term \\(4x\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert a multiplication sign in the term \\(4x\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(24 - 4 \\times x\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(24 - 4 \\times x\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(24 - 4x\\)",
    "options": [
      {
        "text": "\\(24 - 4 \\times x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-24 - 4 \\times x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25 - 4 \\times x\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q3g",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression by showin...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "What operation is between the two letters?",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert a multiplication sign between the variables \\(m\\) and \\(n\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m \\times n - 8\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m \\times n - 8\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(mn - 8\\)",
    "options": [
      {
        "text": "\\(-m \\times n - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m \\times n - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m \\times n - 9\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q3h",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression by showin...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Expand both terms.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Insert multiplication signs into both \\(5a\\) and \\(7b\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5 \\times a - 7 \\times b\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5 \\times a - 7 \\times b\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(5a - 7b\\)",
    "options": [
      {
        "text": "\\(-5 \\times a - 7 \\times b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\times a - 7 \\times b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5 \\times a - 7 \\times b\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q3i",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression by showin...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Expand the power \\(p^2\\) into \\(p \\times p\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Write \\(p^2\\) as \\(p \\times p\\), then add multiplication signs before \\(q\\) and \\(r\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p \\times p \\times q \\times r\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p \\times p \\times q \\times r\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(p^2qr\\)",
    "options": [
      {
        "text": "\\(-p \\times p \\times q \\times r\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p \\times p \\times q \\times r\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q3j",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Insert a multiplication sign between every number and letter.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following expression by showin...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Add multiplication signs everywhere an operation is implied.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(18 \\times a \\times b \\times c\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(18 \\times a \\times b \\times c\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(18abc\\)",
    "options": [
      {
        "text": "\\(18 \\times a \\times b \\times c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-18 \\times a \\times b \\times c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19 \\times a \\times b \\times c\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q3k",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression by showin...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Expand \\(x^2\\) into \\(x \\times x\\).",
    "options": [
      {
        "text": "\\(-9 \\times x \\times x + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 \\times x \\times x + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 \\times x \\times x - 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 \\times x \\times x + 4\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Write \\(9x^2\\) as \\(9 \\times x \\times x\\). The \\(+ 4\\) part stays as is.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9 \\times x \\times x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9 \\times x \\times x + 4\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(9x^2 + 4\\)"
  },
  {
    "id": "y7-23e-q3l",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following expression by showin...",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Expand the powers \\(x^3\\) and \\(y^3\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Write \\(x^3\\) as \\(x \\times x \\times x\\) and \\(y^3\\) as \\(y \\times y \\times y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x \\times x \\times x - y \\times y \\times y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x \\times x \\times x - y \\times y \\times y\\)",
        "graphData": null
      }
    ],
    "question": "Write the following expression by showing all multiplication or division signs.<br /><br />\\(x^3 - y^3\\)",
    "options": [
      {
        "text": "\\(-x \\times x \\times x - y \\times y \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x \\times x \\times x - y \\times y \\times y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4a",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Use indices for \\(y \\times y\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The \\(y \\times y\\) becomes \\(y^2\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove all multiplication signs.",
        "workingOut": "\\(5xy^2z\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5xy^2z\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\(5 \\times x \\times y \\times y \\times z\\)",
    "options": [
      {
        "text": "\\(-5xy^2z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6xy^2z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5xy^2z\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4b",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Use indices for \\(p \\times p\\) and \\(q \\times q\\).",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Write \\(p \\times p\\) as \\(p^2\\) and \\(q \\times q\\) as \\(q^2\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication signs.",
        "workingOut": "\\(6p^2q^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6p^2q^2\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\(6 \\times p \\times p \\times q \\times q\\)",
    "options": [
      {
        "text": "\\(-6p^2q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7p^2q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6p^2q^2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Remove the multiplication sign in front of the bracket.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "We don't need a multiplication sign between a number and a bracket.",
        "workingOut": "8(m + 5)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8(m + 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8(m + 5)\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(8(m + 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8(m + 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8(m - 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9(m + 5)\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write the following in a shortened form....",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shortened form.<br /><br />\\(8 \\times (m + 5)\\)"
  },
  {
    "id": "y7-23e-q4d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Remove the multiplication sign in front of the bracket.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "We don't need a multiplication sign between a number and a bracket.",
        "workingOut": "7(y - 2)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7(y - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7(y - 2)\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following in a shortened form....",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shortened form.<br /><br />\\(7 \\times (y - 2)\\)",
    "options": [
      {
        "text": "\\(-7(y - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7(y - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8(y - 2)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4e",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "Write \\(4 \\times m\\) as \\(4m\\), and place it directly in front of the bracket.",
        "workingOut": "4m(n + 6)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4m(n + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4m(n + 6)\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Remove all multiplication signs outside the bracket.",
    "options": [
      {
        "text": "\\(-4m(n + 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4m(n - 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4m(n + 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5m(n + 6)\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shortened form.<br /><br />\\(4 \\times m \\times (n + 6)\\)"
  },
  {
    "id": "y7-23e-q4f",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers first.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "First, multiply \\(2 \\times 5 = 10\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication sign before the bracket.",
        "workingOut": "10(k - 4)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(10(k - 4)\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\(2 \\times 5 \\times (k - 4)\\)",
    "options": [
      {
        "text": "\\(-10(k - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11(k - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10(k - 4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4g",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "solutionSteps": [
      {
        "explanation": "Write \\(x \\times y\\) as \\(xy\\), and place it directly in front of the bracket.",
        "workingOut": "xy(z + 3)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(xy(z + 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(xy(z + 3)\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Remove all multiplication signs outside the bracket.",
    "options": [
      {
        "text": "\\(xy(z + 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-xy(z + 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(xy(z - 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(xy(z + 4)\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shortened form.<br /><br />\\(x \\times y \\times (z + 3)\\)"
  },
  {
    "id": "y7-23e-q4h",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Remove the multiplication sign outside and inside the bracket.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Inside the bracket, \\(7 \\times p\\) becomes \\(7p\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication sign before the bracket.",
        "workingOut": "6(7p - 4)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6(7p - 4)\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\(6 \\times (7 \\times p - 4)\\)",
    "options": [
      {
        "text": "\\(-6(7p - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6(7p - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7(7p - 4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4i",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Simplify inside the bracket first.",
    "options": [
      {
        "text": "\\(-8 + (20 + 4m)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 - (20 - 4m)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 + (20 + 4m)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 + (20 + 4m)\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Calculate \\(4 \\times 5 = 20\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Write \\(4 \\times m\\) as \\(4m\\).",
        "workingOut": "8 + (20 + 4m)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8 + (20 + 4m)\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\(8 + (4 \\times 5 + 4 \\times m)\\)"
  },
  {
    "id": "y7-23e-q4j",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Remove all multiplication signs.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Inside the bracket, \\(6 \\times k\\) becomes \\(6k\\) and \\(2 \\times j\\) becomes \\(2j\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication sign before the bracket.",
        "workingOut": "5(6k - 2j)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5(6k - 2j)\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\(5 \\times (6 \\times k - 2 \\times j)\\)",
    "options": [
      {
        "text": "\\(-5(6k - 2j)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6(6k - 2j)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5(6k - 2j)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4k",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "We don't need a multiplication sign between two brackets.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "0",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Simply write the two brackets next to each other.",
        "workingOut": "(3y + 2)(y + 4)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\((3y + 2)(y + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\((3y + 2)(y + 4)\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\((3y + 2)(y + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-(3y + 2)(y + 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3y - 2)(y - 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4y + 2)(y + 4)\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write the following in a shortened form....",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shortened form.<br /><br />\\((3y + 2) \\times (y + 4)\\)"
  },
  {
    "id": "y7-23e-q4l",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "We don't need a multiplication sign between two brackets.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Simply write the two brackets next to each other.",
        "workingOut": "(4m + 3)(4m - 5)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\((4m + 3)(4m - 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\((4m + 3)(4m - 5)\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-(4m + 3)(4m - 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4m + 3)(4m - 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4m - 3)(4m - 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5m + 3)(4m - 5)\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write the following in a shortened form....",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shortened form.<br /><br />\\((4m + 3) \\times (4m - 5)\\)"
  },
  {
    "id": "y7-23e-q4m",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Count how many \\(x\\)'s there are.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Rearrange the expression: \\(6 \\times x \\times x \\times x\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication sign.",
        "workingOut": "\\(6x^3\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6x^3\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\(x \\times 6 \\times x \\times x\\)",
    "options": [
      {
        "text": "\\(-6x^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7x^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6x^3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4n",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers together first.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Rearrange to multiply the numbers: \\(8 \\times 4 = 32\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Use indices for \\(y \\times y \\times y\\), which is \\(y^3\\).",
        "workingOut": "\\(32y^3\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(32y^3\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\(8 \\times y \\times y \\times y \\times 4\\)",
    "options": [
      {
        "text": "\\(-32y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(33y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(32y^3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4o",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Use indices for the repeated variables.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "There are four \\(m\\)'s and two \\(n\\)'s multiplied together.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication sign.",
        "workingOut": "\\(m^4n^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m^4n^2\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\(m \\times m \\times m \\times m \\times n \\times n\\)",
    "options": [
      {
        "text": "\\(m^4n^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-m^4n^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^5n^2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23e-q4p",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23E",
    "isNew": true,
    "title": "Write the following in a shortened form....",
    "type": "multiple_choice",
    "topicId": "y7-23e",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Remove multiplication signs inside and between the brackets.",
    "options": [
      {
        "text": "\\(-(4y + 3)(5y - 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4y + 3)(5y - 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4y - 3)(5y - 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5y + 3)(5y - 1)\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Inside the brackets, \\(4 \\times y\\) is \\(4y\\) and \\(5 \\times y\\) is \\(5y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Remove the multiplication sign between the two brackets.",
        "workingOut": "(4y + 3)(5y - 1)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\((4y + 3)(5y - 1)\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in a shortened form.<br /><br />\\((4 \\times y + 3) \\times (5 \\times y - 1)\\)"
  },
  {
    "id": "y7-23e-q4q",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Remove the multiplication sign between the brackets.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "2",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the two brackets next to each other.",
        "workingOut": "(k + 4)(3k + 2)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\((k + 4)(3k + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\((k + 4)(3k + 2)\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-(k + 4)(3k + 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((k - 4)(3k - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((k + 4)(3k + 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((k + 5)(3k + 2)\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Write the following in a shortened form....",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shortened form.<br /><br />\\((k + 4) \\times (3k + 2)\\)"
  },
  {
    "id": "y7-23e-q4r",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23e",
    "topicCode": "23E",
    "topicTitle": "Writing algebraic expressions",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Remove the multiplication sign between the brackets.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 277000000
    },
    "answer": "3",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the two brackets next to each other.",
        "workingOut": "(p - 6)(2p - 7)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\((p - 6)(2p - 7)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\((p - 6)(2p - 7)\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Write the following in a shortened form....",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in a shortened form.<br /><br />\\((p - 6) \\times (2p - 7)\\)",
    "options": [
      {
        "text": "\\(-(p - 6)(2p - 7)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((p - 7)(2p - 7)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((p - 6)(2p - 7)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23f-q1a",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Replace \\(x\\) with \\(4\\) and calculate.",
    "options": [
      {
        "text": "\\(25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(23\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-24\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\) into the expression.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate the result. Simplify carefully and match the option.",
        "workingOut": "24",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(24\\)",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\(6x\\)"
  },
  {
    "id": "y7-23f-q1b",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Remember the order of operations (multiply before adding).",
    "options": [
      {
        "text": "\\(36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(34\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-35\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(35\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply first. Simplify carefully and match the option.",
        "workingOut": "32 + 3",
        "graphData": null
      },
      {
        "explanation": "Add the numbers. Simplify carefully and match the option.",
        "workingOut": "35",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\(8x + 3\\)"
  },
  {
    "id": "y7-23f-q1c",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply first, then subtract.",
    "options": [
      {
        "text": "\\(29\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(30\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(28\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-29\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "32 - 3",
        "graphData": null
      },
      {
        "explanation": "Subtract. Simplify carefully and match the option.",
        "workingOut": "29",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\(8x - 3\\)"
  },
  {
    "id": "y7-23f-q1d",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "\\(x^2\\) means \\(x\\) multiplied by itself.",
    "options": [
      {
        "text": "\\(17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-16\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(4 \\times 4\\).",
        "workingOut": "16",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(16\\)",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\(x^2\\)"
  },
  {
    "id": "y7-23f-q1e",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Calculate the power first, then multiply by \\(3\\).",
    "options": [
      {
        "text": "\\(49\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(47\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(48\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-48\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(4^2\\). Simplify carefully and match the option.",
        "workingOut": "\\(3 \\times 16\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 3. Simplify carefully and match the option.",
        "workingOut": "48",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\(3x^2\\)"
  },
  {
    "id": "y7-23f-q1f",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\) into both brackets.",
        "workingOut": "(4 + 2)(4 - 2)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the brackets. Simplify carefully and match the option.",
        "workingOut": "(6)(2)",
        "graphData": null
      },
      {
        "explanation": "Multiply the results. Simplify carefully and match the option.",
        "workingOut": "12",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Calculate the value inside each bracket first.",
    "options": [
      {
        "text": "\\(13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\((x + 2)(x - 2)\\)"
  },
  {
    "id": "y7-23f-q1g",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "\\(x^3\\) means \\(x \\times x \\times x\\).",
    "options": [
      {
        "text": "\\(64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(65\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(63\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-64\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(4 \\times 4 \\times 4\\).",
        "workingOut": "64",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(64\\)",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\(x^3\\)"
  },
  {
    "id": "y7-23f-q1h",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Calculate \\(x^2\\) and \\(3x\\) separately, then subtract.",
    "options": [
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate each part. Simplify carefully and match the option.",
        "workingOut": "16 - 12",
        "graphData": null
      },
      {
        "explanation": "Subtract. Simplify carefully and match the option.",
        "workingOut": "4",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\(x^2 - 3x\\)"
  },
  {
    "id": "y7-23f-q1i",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Calculate the value in the bracket first, then multiply.",
    "options": [
      {
        "text": "\\(137\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(135\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(136\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-136\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the bracket and the term outside.",
        "workingOut": "\\((12 + 5) \\times 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the bracket. Simplify carefully and match the option.",
        "workingOut": "\\(17 \\times 8\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "136",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\((3x + 5) \\times 2x\\)"
  },
  {
    "id": "y7-23f-q1j",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "5(4) - 7",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "20 - 7",
        "graphData": null
      },
      {
        "explanation": "Subtract. Simplify carefully and match the option.",
        "workingOut": "13",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Multiply first, then subtract.",
    "options": [
      {
        "text": "\\(14\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\(5x - 7\\)"
  },
  {
    "id": "y7-23f-q1k",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Calculate \\(5x\\) first, then divide \\(120\\) by the result.",
    "options": [
      {
        "text": "\\(6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate the divisor. Simplify carefully and match the option.",
        "workingOut": "\\(120 \\div 20\\)",
        "graphData": null
      },
      {
        "explanation": "Divide. Simplify carefully and match the option.",
        "workingOut": "6",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\(120 \\div 5x\\)"
  },
  {
    "id": "y7-23f-q1l",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "answer": "1",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "topicId": "y7-23f",
    "chapterId": "y7-23",
    "hint": "Calculate the bracket first.",
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "title": "If x = 4, find the value of the followin...",
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 4\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the bracket. Simplify carefully and match the option.",
        "workingOut": "\\(3 \\div 3\\)",
        "graphData": null
      },
      {
        "explanation": "Divide. Simplify carefully and match the option.",
        "workingOut": "1",
        "graphData": null
      }
    ],
    "question": "If \\(x = 4\\), find the value of the following expression.<br /><br />\\((x - 1) \\div 3\\)"
  },
  {
    "id": "y7-23f-q2a",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "isNew": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "solutionSteps": [
      {
        "explanation": "Replace \\(p\\) with \\(2\\) and \\(q\\) with \\(4\\).",
        "workingOut": "2 + 4",
        "graphData": null
      },
      {
        "explanation": "Add the numbers. Simplify carefully and match the option.",
        "workingOut": "6",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Substitute the given values.",
    "options": [
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(p + q\\)"
  },
  {
    "id": "y7-23f-q2b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Add all four values together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "2",
    "options": [
      {
        "text": "\\(25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(23\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-24\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "2 + 4 + 6 + 12",
        "graphData": null
      },
      {
        "explanation": "Add the numbers. Simplify carefully and match the option.",
        "workingOut": "24",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(24\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(p + q + r + s\\)"
  },
  {
    "id": "y7-23f-q2c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "3",
    "hint": "Calculate \\(p \\times q \\times r\\) and subtract \\(s^2\\).",
    "options": [
      {
        "text": "\\(-95\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-97\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(96\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-96\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate the multiplication and the power.",
        "workingOut": "48 - 144",
        "graphData": null
      },
      {
        "explanation": "Subtract. Simplify carefully and match the option.",
        "workingOut": "-96",
        "graphData": null
      }
    ],
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(pqr - s^2\\)"
  },
  {
    "id": "y7-23f-q2d",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "0",
    "hint": "Multiply \\(p, q\\), and \\(r\\) together.",
    "options": [
      {
        "text": "\\(48\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(49\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(47\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-48\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "48",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(48\\)",
        "graphData": null
      }
    ],
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(pqr\\)"
  },
  {
    "id": "y7-23f-q2e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Multiply each variable by its coefficient, then add.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "1",
    "options": [
      {
        "text": "\\(45\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(44\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(43\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-44\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "3(2) + 2(4) + 5(6)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "6 + 8 + 30",
        "graphData": null
      },
      {
        "explanation": "Add the numbers. Simplify carefully and match the option.",
        "workingOut": "44",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(3p + 2q + 5r\\)"
  },
  {
    "id": "y7-23f-q2f",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Substitute and follow order of operations.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "2",
    "options": [
      {
        "text": "\\(23\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(22\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-22\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "4(4) + 3(6) - 12",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "16 + 18 - 12",
        "graphData": null
      },
      {
        "explanation": "Add and subtract from left to right.",
        "workingOut": "\\(34 - 12 = 22\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(4q + 3r - s\\)"
  },
  {
    "id": "y7-23f-q2g",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "3",
    "hint": "Multiply \\(10\\), \\(q\\), and \\(r\\).",
    "options": [
      {
        "text": "\\(241\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(239\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-240\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(240\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "240",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(240\\)",
        "graphData": null
      }
    ],
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(10qr\\)"
  },
  {
    "id": "y7-23f-q2h",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "0",
    "hint": "Calculate \\(5r\\), then subtract \\(s\\).",
    "options": [
      {
        "text": "\\(18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-18\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "5(6) - 12",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "30 - 12",
        "graphData": null
      },
      {
        "explanation": "Subtract. Simplify carefully and match the option.",
        "workingOut": "18",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(5r - s\\)"
  },
  {
    "id": "y7-23f-q2i",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "1",
    "hint": "Calculate \\(6s\\) first, then divide by \\(q\\).",
    "options": [
      {
        "text": "\\(19\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-18\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "\\(72 \\div 4\\)",
        "graphData": null
      },
      {
        "explanation": "Divide. Simplify carefully and match the option.",
        "workingOut": "18",
        "graphData": null
      }
    ],
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(6s \\div q\\)"
  },
  {
    "id": "y7-23f-q2j",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "2",
    "hint": "Calculate \\(7p\\) and \\(p^2\\), then subtract.",
    "options": [
      {
        "text": "\\(11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-10\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate each part. Simplify carefully and match the option.",
        "workingOut": "14 - 4",
        "graphData": null
      },
      {
        "explanation": "Subtract. Simplify carefully and match the option.",
        "workingOut": "10",
        "graphData": null
      }
    ],
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(7p - p^2\\)"
  },
  {
    "id": "y7-23f-q2k",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Evaluate the bracket and the power first.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "3",
    "options": [
      {
        "text": "\\(15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-14\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate bracket and power.",
        "workingOut": "18 - 4",
        "graphData": null
      },
      {
        "explanation": "Subtract. Simplify carefully and match the option.",
        "workingOut": "14",
        "graphData": null
      }
    ],
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\((r + s) - p^2\\)"
  },
  {
    "id": "y7-23f-q2l",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23f",
    "topicCode": "23F",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Calculate the powers and the multiplication before adding and subtracting.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "answer": "0",
    "options": [
      {
        "text": "\\(112\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(113\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(111\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-112\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If p = 2, q = 4, r = 6 and s = 12, find ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the powers and multiplication.",
        "workingOut": "16 + 144 - 48",
        "graphData": null
      },
      {
        "explanation": "Add and subtract from left to right.",
        "workingOut": "\\(160 - 48 = 112\\)",
        "graphData": null
      }
    ],
    "question": "If \\(p = 2\\), \\(q = 4\\), \\(r = 6\\) and \\(s = 12\\), find the value of the following expression.<br /><br />\\(q^2 + s^2 - pqr\\)"
  },
  {
    "id": "y7-23f-q3a_0",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 3x + 2\\), find the value of \\(y\\) when \\(x = 0\\).",
    "isNew": true,
    "title": "For the equation y = 3x + 2, find the va...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 0\\) into the equation.",
    "options": [
      {
        "text": "\\(3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(0\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply and add. Simplify carefully and match the option.",
        "workingOut": "\\(y = 0 + 2 = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3a_1",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 3x + 2\\), find the value of \\(y\\) when \\(x = 1\\).",
    "isNew": true,
    "title": "For the equation y = 3x + 2, find the va...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 1\\) into the equation.",
    "options": [
      {
        "text": "\\(6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(1\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply and add. Simplify carefully and match the option.",
        "workingOut": "\\(y = 3 + 2 = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3a_2",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 3x + 2\\), find the value of \\(y\\) when \\(x = 2\\).",
    "isNew": true,
    "title": "For the equation y = 3x + 2, find the va...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 2\\) into the equation.",
    "options": [
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(2\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply and add. Simplify carefully and match the option.",
        "workingOut": "\\(y = 6 + 2 = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3b_1",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 4x - 3\\), find the value of \\(y\\) when \\(x = 1\\).",
    "isNew": true,
    "title": "For the equation y = 4x - 3, find the va...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 1\\) into the equation.",
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(1\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply and subtract. Simplify carefully and match the option.",
        "workingOut": "\\(y = 4 - 3 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3b_3",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 4x - 3\\), find the value of \\(y\\) when \\(x = 3\\).",
    "isNew": true,
    "title": "For the equation y = 4x - 3, find the va...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 3\\) into the equation.",
    "options": [
      {
        "text": "\\(10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-9\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(3\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply and subtract. Simplify carefully and match the option.",
        "workingOut": "\\(y = 12 - 3 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3c_2",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 20 - 3x\\), find the value of \\(y\\) when \\(x = 2\\).",
    "isNew": true,
    "title": "For the equation y = 20 - 3x, find the v...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 2\\) into the equation.",
    "options": [
      {
        "text": "\\(15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-14\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(2\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply, then subtract. Simplify carefully and match the option.",
        "workingOut": "\\(y = 20 - 6 = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3c_4",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 20 - 3x\\), find the value of \\(y\\) when \\(x = 4\\).",
    "isNew": true,
    "title": "For the equation y = 20 - 3x, find the v...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 4\\) into the equation.",
    "options": [
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(4\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply, then subtract. Simplify carefully and match the option.",
        "workingOut": "\\(y = 20 - 12 = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3d_3",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 5x - 1\\), find the value of \\(y\\) when \\(x = 3\\).",
    "isNew": true,
    "title": "For the equation y = 5x - 1, find the va...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 3\\) into the equation.",
    "options": [
      {
        "text": "\\(15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-14\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(3\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply and subtract. Simplify carefully and match the option.",
        "workingOut": "\\(y = 15 - 1 = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3d_5",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 5x - 1\\), find the value of \\(y\\) when \\(x = 5\\).",
    "isNew": true,
    "title": "For the equation y = 5x - 1, find the va...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 5\\) into the equation.",
    "options": [
      {
        "text": "\\(25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(23\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-24\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(5\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply and subtract. Simplify carefully and match the option.",
        "workingOut": "\\(y = 25 - 1 = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(24\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3e_4",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 6x + 5\\), find the value of \\(y\\) when \\(x = 4\\).",
    "isNew": true,
    "title": "For the equation y = 6x + 5, find the va...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 4\\) into the equation.",
    "options": [
      {
        "text": "\\(30\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(29\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(28\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-29\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(4\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply and add. Simplify carefully and match the option.",
        "workingOut": "\\(y = 24 + 5 = 29\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(29\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q3f_6",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "For the equation \\(y = 40 - 6x\\), find the value of \\(y\\) when \\(x = 6\\).",
    "isNew": true,
    "title": "For the equation y = 40 - 6x, find the v...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Substitute \\(x = 6\\) into the equation.",
    "options": [
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Replace \\(x\\) with \\(6\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply and subtract. Simplify carefully and match the option.",
        "workingOut": "\\(y = 40 - 36 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q4a",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 4\\) and \\(y = 3\\), find the value of \\(x + y\\).",
    "isNew": true,
    "title": "If x = 4 and y = 3, find the value of x ...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(4\\) for \\(x\\) and \\(3\\) for \\(y\\).",
        "workingOut": "4 + 3",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "7",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Add the values of \\(x\\) and \\(y\\).",
    "options": [
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23f-q4b",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 4\\) and \\(y = 3\\), find the value of \\(x - y\\).",
    "isNew": true,
    "title": "If x = 4 and y = 3, find the value of x ...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(4\\) for \\(x\\) and \\(3\\) for \\(y\\).",
        "workingOut": "4 - 3",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "1",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Subtract the value of \\(y\\) from \\(x\\).",
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23f-q4c",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 4\\) and \\(y = 3\\), find the value of \\(xy\\).",
    "isNew": true,
    "title": "If x = 4 and y = 3, find the value of xy...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "\\(xy\\) means \\(x\\) multiplied by \\(y\\).",
    "options": [
      {
        "text": "\\(13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(4\\) for \\(x\\) and \\(3\\) for \\(y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "12",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q4d",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 4\\) and \\(y = 3\\), find the value of \\(x^2\\).",
    "isNew": true,
    "title": "If x = 4 and y = 3, find the value of x^...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "\\(x^2\\) means \\(x\\) multiplied by itself.",
    "options": [
      {
        "text": "\\(17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-16\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(4\\) for \\(x\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "16",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(16\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q4e",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 4\\) and \\(y = 3\\), find the value of \\(y^2\\).",
    "isNew": true,
    "title": "If x = 4 and y = 3, find the value of y^...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "\\(y^2\\) means \\(y\\) multiplied by itself.",
    "options": [
      {
        "text": "\\(10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(3\\) for \\(y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "9",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q4f",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 4\\) and \\(y = 3\\), find the value of \\(3x + 4y\\).",
    "isNew": true,
    "title": "If x = 4 and y = 3, find the value of 3x...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(4\\) for \\(x\\) and \\(3\\) for \\(y\\).",
        "workingOut": "3(4) + 4(3)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "12 + 12",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "24",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply first, then add the results.",
    "options": [
      {
        "text": "\\(24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(23\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-24\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23f-q4g",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 7\\) and \\(y = 2\\), find the value of \\(xy\\).",
    "isNew": true,
    "title": "If x = 7 and y = 2, find the value of xy...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "\\(xy\\) means \\(x\\) multiplied by \\(y\\).",
    "options": [
      {
        "text": "\\(15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-14\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(7\\) for \\(x\\) and \\(2\\) for \\(y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "14",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23f-q4h",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 7\\) and \\(y = 2\\), find the value of \\(x - y\\).",
    "isNew": true,
    "title": "If x = 7 and y = 2, find the value of x ...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(7\\) for \\(x\\) and \\(2\\) for \\(y\\).",
        "workingOut": "7 - 2",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "5",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Subtract \\(y\\) from \\(x\\).",
    "options": [
      {
        "text": "\\(6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23f-q4i",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 7\\) and \\(y = 2\\), find the value of \\(3x + 4y\\).",
    "isNew": true,
    "title": "If x = 7 and y = 2, find the value of 3x...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(7\\) for \\(x\\) and \\(2\\) for \\(y\\).",
        "workingOut": "3(7) + 4(2)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "21 + 8",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "29",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Multiply first, then add the results.",
    "options": [
      {
        "text": "\\(30\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(28\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-29\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(29\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23f-q4j",
    "topicTitle": "Substitution",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830282,
      "_nanoseconds": 877000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23F",
    "question": "If \\(x = 5\\) and \\(y = 4\\), find the value of \\(x^2 + y^2\\).",
    "isNew": true,
    "title": "If x = 5 and y = 4, find the value of x^...",
    "type": "multiple_choice",
    "topicId": "y7-23f",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Square each number first, then add the results.",
    "options": [
      {
        "text": "\\(41\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(42\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(40\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-41\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(5\\) for \\(x\\) and \\(4\\) for \\(y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the powers. Simplify carefully and match the option.",
        "workingOut": "25 + 16",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "41",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23h-q1a",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index no...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Count how many times the variable is multiplied by itself.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variable \\(m\\) is multiplied by itself 4 times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m^4\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m^4\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index notation.<br /><br />\\(m \\times m \\times m \\times m\\)",
    "options": [
      {
        "text": "\\(m^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-m^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^5\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q1b",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index no...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "The number of times the variable appears becomes the power.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variable \\(k\\) appears 5 times in the multiplication.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(k^5\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(k^5\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index notation.<br /><br />\\(k \\times k \\times k \\times k \\times k\\)",
    "options": [
      {
        "text": "\\(-k^5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k^5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k^6\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q1c",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index no...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Count the number of \\(y\\)'s.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variable \\(y\\) is multiplied by itself 7 times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y^7\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y^7\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index notation.<br /><br />\\(y \\times y \\times y \\times y \\times y \\times y \\times y\\)",
    "options": [
      {
        "text": "\\(-y^7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^7\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q1d",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index no...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Group the \\(p\\)'s and the \\(q\\)'s separately.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "There are three \\(p\\)'s, so that is \\(p^3\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "There are two \\(q\\)'s, so that is \\(q^2\\).",
        "workingOut": "\\(q^2\\)",
        "graphData": null
      },
      {
        "explanation": "Combine them without multiplication signs.",
        "workingOut": "\\(p^3q^2\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index notation.<br /><br />\\(p \\times p \\times p \\times q \\times q\\)",
    "options": [
      {
        "text": "\\(-p^3q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^3q^2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q1e",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index no...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Count how many \\(n\\)'s are multiplied.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variable \\(n\\) is multiplied by itself 4 times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(n^4\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(n^4\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index notation.<br /><br />\\(n \\times n \\times n \\times n\\)",
    "options": [
      {
        "text": "\\(n^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-n^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(n^5\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q1f",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index no...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Write each letter with its own power.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "There are two \\(x\\)'s (\\(x^2\\)) and four \\(y\\)'s (\\(y^4\\)).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x^2y^4\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x^2y^4\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index notation.<br /><br />\\(x \\times x \\times y \\times y \\times y \\times y\\)",
    "options": [
      {
        "text": "\\(-x^2y^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2y^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3y^4\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q1g",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index no...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Count the number of \\(b\\)'s.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The variable \\(b\\) is multiplied by itself 6 times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(b^6\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(b^6\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index notation.<br /><br />\\(b \\times b \\times b \\times b \\times b \\times b\\)",
    "options": [
      {
        "text": "\\(-b^6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b^7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(b^6\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q1h",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index no...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Count the \\(m\\)'s and count the \\(n\\)'s.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "There are three \\(m\\)'s (\\(m^3\\)) and four \\(n\\)'s (\\(n^4\\)).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m^3n^4\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m^3n^4\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index notation.<br /><br />\\(m \\times m \\times m \\times n \\times n \\times n \\times n\\)",
    "options": [
      {
        "text": "\\(-m^3n^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4n^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^3n^4\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q2a",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in expanded form.\\n\\...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Write \\(a\\) multiplied by itself \\(4\\) times.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The index is \\(4\\), which means \\(a\\) is written \\(4\\) times with multiplication signs.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(a \\times a \\times a \\times a\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(a \\times a \\times a \\times a\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in expanded form.<br /><br />\\(a^4\\)",
    "options": [
      {
        "text": "\\(-a \\times a \\times a \\times a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a \\times a \\times a \\times a\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q2b",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in expanded form.\\n\\...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Write \\(p\\) multiplied by itself \\(5\\) times.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The index is \\(5\\), which means \\(p\\) is written \\(5\\) times with multiplication signs.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p \\times p \\times p \\times p \\times p\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p \\times p \\times p \\times p \\times p\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in expanded form.<br /><br />\\(p^5\\)",
    "options": [
      {
        "text": "\\(p \\times p \\times p \\times p \\times p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-p \\times p \\times p \\times p \\times p\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q2c",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in expanded form.\\n\\...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Write \\(y\\) multiplied by itself \\(6\\) times.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The index is \\(6\\), so write \\(y\\) six times separated by multiplication signs.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y \\times y \\times y \\times y \\times y \\times y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y \\times y \\times y \\times y \\times y \\times y\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in expanded form.<br /><br />\\(y^6\\)",
    "options": [
      {
        "text": "\\(-y \\times y \\times y \\times y \\times y \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y \\times y \\times y \\times y \\times y \\times y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q2d",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in expanded form.\\n\\...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Write \\(k\\) multiplied by itself \\(4\\) times.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The index is \\(4\\), so write \\(k\\) four times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(k \\times k \\times k \\times k\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(k \\times k \\times k \\times k\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in expanded form.<br /><br />\\(k^4\\)",
    "options": [
      {
        "text": "\\(-k \\times k \\times k \\times k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k \\times k \\times k \\times k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q2e",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in expanded form.\\n\\...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Write \\(w\\) multiplied by itself \\(5\\) times.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The index is \\(5\\), so write \\(w\\) five times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(w \\times w \\times w \\times w \\times w\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(w \\times w \\times w \\times w \\times w\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in expanded form.<br /><br />\\(w^5\\)",
    "options": [
      {
        "text": "\\(-w \\times w \\times w \\times w \\times w\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(w \\times w \\times w \\times w \\times w\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q2f",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in expanded form.\\n\\...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Write \\(x\\) multiplied by itself \\(7\\) times.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The index is \\(7\\), so write \\(x\\) seven times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x \\times x \\times x \\times x \\times x \\times x \\times x\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x \\times x \\times x \\times x \\times x \\times x \\times x\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in expanded form.<br /><br />\\(x^7\\)",
    "options": [
      {
        "text": "\\(x \\times x \\times x \\times x \\times x \\times x \\times x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-x \\times x \\times x \\times x \\times x \\times x \\times x\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q2g",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in expanded form.\\n\\...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Write \\(m\\) multiplied by itself \\(3\\) times.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The index is \\(3\\), so write \\(m\\) three times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m \\times m \\times m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(m \\times m \\times m\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in expanded form.<br /><br />\\(m^3\\)",
    "options": [
      {
        "text": "\\(-m \\times m \\times m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m \\times m \\times m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q2h",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in expanded form.\\n\\...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Write \\(c\\) multiplied by itself \\(5\\) times.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The index is \\(5\\), so write \\(c\\) five times.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(c \\times c \\times c \\times c \\times c\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(c \\times c \\times c \\times c \\times c\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in expanded form.<br /><br />\\(c^5\\)",
    "options": [
      {
        "text": "\\(-c \\times c \\times c \\times c \\times c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(c \\times c \\times c \\times c \\times c\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q3a",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Find the value of the following when p =...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Substitute \\(p = 2\\) into the expression.",
    "options": [
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(2\\) for \\(p\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(2 \\times 2 \\times 2\\).",
        "workingOut": "8",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8\\)",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(p^3\\)"
  },
  {
    "id": "y7-23h-q3b",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Find the value of the following when p =...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Substitute \\(p = 2\\) and multiply \\(2\\) by itself \\(5\\) times.",
    "options": [
      {
        "text": "\\(33\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(31\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-32\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(32\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(2\\) for \\(p\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(2 \\times 2 \\times 2 \\times 2 \\times 2\\).",
        "workingOut": "32",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(32\\)",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(p^5\\)"
  },
  {
    "id": "y7-23h-q3c",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Find the value of the following when p =...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Evaluate the power first before multiplying by \\(p\\).",
    "options": [
      {
        "text": "\\(18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-18\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(p = 2\\) and \\(q = 3\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(3^2\\). Simplify carefully and match the option.",
        "workingOut": "\\(2 \\times 9\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "18",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(pq^2\\)"
  },
  {
    "id": "y7-23h-q3d",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Find the value of the following when p =...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Multiply \\(2\\) by itself \\(4\\) times.",
    "options": [
      {
        "text": "\\(17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-16\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(p = 2\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(2 \\times 2 \\times 2 \\times 2\\).",
        "workingOut": "16",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(16\\)",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(p^4\\)"
  },
  {
    "id": "y7-23h-q3e",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Find the value of the following when p =...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Multiply \\(3\\) by itself \\(3\\) times.",
    "options": [
      {
        "text": "\\(28\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(26\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-27\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(q = 3\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(3 \\times 3 \\times 3\\).",
        "workingOut": "27",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(27\\)",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(q^3\\)"
  },
  {
    "id": "y7-23h-q3f",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23h",
    "topicCode": "23H",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Calculate both powers before multiplying them together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "answer": "3",
    "options": [
      {
        "text": "\\(73\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(71\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-72\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(72\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Find the value of the following when p =...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the powers. Simplify carefully and match the option.",
        "workingOut": "\\(8 \\times 9\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "72",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(p^3q^2\\)"
  },
  {
    "id": "y7-23h-q3g",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Find the value of the following when p =...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply \\(3\\) by itself \\(4\\) times.",
    "options": [
      {
        "text": "\\(81\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(82\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(80\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-81\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(q = 3\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(3 \\times 3 \\times 3 \\times 3\\).",
        "workingOut": "81",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(81\\)",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(q^4\\)"
  },
  {
    "id": "y7-23h-q3h",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Find the value of the following when p =...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Multiply \\(2\\) by itself \\(6\\) times.",
    "options": [
      {
        "text": "\\(65\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(63\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-64\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(p = 2\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2\\).",
        "workingOut": "64",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(64\\)",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(p^6\\)"
  },
  {
    "id": "y7-23h-q3i",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23h",
    "topicCode": "23H",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Multiply all the numbers together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "answer": "2",
    "options": [
      {
        "text": "\\(25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(23\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-24\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Find the value of the following when p =...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "24",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(24\\)",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(4pq\\)"
  },
  {
    "id": "y7-23h-q3j",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Find the value of the following when p =...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Multiply \\(3\\) by itself.",
    "options": [
      {
        "text": "\\(10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(q = 3\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(3 \\times 3\\).",
        "workingOut": "9",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9\\)",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(q^2\\)"
  },
  {
    "id": "y7-23h-q3k",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23h",
    "topicCode": "23H",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Calculate both powers before multiplying.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "answer": "0",
    "options": [
      {
        "text": "\\(36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(37\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(35\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-36\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Find the value of the following when p =...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the powers. Simplify carefully and match the option.",
        "workingOut": "\\(4 \\times 9\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "36",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(p^2q^2\\)"
  },
  {
    "id": "y7-23h-q3l",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Find the value of the following when p =...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Evaluate \\(p^2\\) first, then multiply.",
    "options": [
      {
        "text": "\\(61\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(60\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(59\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-60\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate \\(2^2\\). Simplify carefully and match the option.",
        "workingOut": "\\(5 \\times 4 \\times 3\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "60",
        "graphData": null
      }
    ],
    "question": "Find the value of the following when \\(p = 2\\) and \\(q = 3\\).<br /><br />\\(5p^2q\\)"
  },
  {
    "id": "y7-23h-q4a",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index fo...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Group the \\(x\\)'s into a power.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "There are three \\(x\\)'s multiplied together.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Write the number in front without a multiplication sign.",
        "workingOut": "\\(12x^3\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12x^3\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index form.<br /><br />\\(12 \\times x \\times x \\times x\\)",
    "options": [
      {
        "text": "\\(-12x^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12x^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13x^3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q4b",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index fo...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "solutionSteps": [
      {
        "explanation": "The number 8 goes at the front.",
        "workingOut": "8",
        "graphData": null
      },
      {
        "explanation": "There are a total of 5 \\(m\\)'s multiplied together.",
        "workingOut": "\\(m^5\\)",
        "graphData": null
      },
      {
        "explanation": "Combine them. Simplify carefully and match the option.",
        "workingOut": "\\(8m^5\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Count the total number of \\(m\\)'s.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in simplest index form.<br /><br />\\(m \\times m \\times 8 \\times m \\times m \\times m\\)",
    "options": [
      {
        "text": "\\(-8m^5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9m^5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8m^5\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q4c",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index fo...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "solutionSteps": [
      {
        "explanation": "The number 9 goes at the front.",
        "workingOut": "9",
        "graphData": null
      },
      {
        "explanation": "There are 4 \\(y\\)'s multiplied together.",
        "workingOut": "\\(y^4\\)",
        "graphData": null
      },
      {
        "explanation": "Combine them. Simplify carefully and match the option.",
        "workingOut": "\\(9y^4\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "The number goes first. Count the total \\(y\\)'s.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in simplest index form.<br /><br />\\(y \\times y \\times y \\times 9 \\times y\\)",
    "options": [
      {
        "text": "\\(-9y^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10y^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9y^4\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q4d",
    "topicTitle": "Multiplying, dividing and expanding",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index fo...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "solutionSteps": [
      {
        "explanation": "Multiply the numbers: \\(4 \\times 3 = 12\\).",
        "workingOut": "12",
        "graphData": null
      },
      {
        "explanation": "Count the \\(x\\)'s: there are 3.",
        "workingOut": "\\(x^3\\)",
        "graphData": null
      },
      {
        "explanation": "Combine them. Simplify carefully and match the option.",
        "workingOut": "\\(12x^3\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers together first.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in simplest index form.<br /><br />\\(4 \\times x \\times x \\times 3 \\times x\\)",
    "options": [
      {
        "text": "\\(12x^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12x^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13x^3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q4e",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index fo...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Write the number followed by the variable as a power.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The number 14 is in front. There are 4 \\(p\\)'s.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14p^4\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(14p^4\\)",
        "graphData": null
      }
    ],
    "question": "Write the following in simplest index form.<br /><br />\\(14 \\times p \\times p \\times p \\times p\\)",
    "options": [
      {
        "text": "\\(-14p^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14p^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15p^4\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q4f",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index fo...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "solutionSteps": [
      {
        "explanation": "Multiply the numbers: \\(4 \\times 2 = 8\\).",
        "workingOut": "8",
        "graphData": null
      },
      {
        "explanation": "There are 4 \\(k\\)'s multiplied together.",
        "workingOut": "\\(k^4\\)",
        "graphData": null
      },
      {
        "explanation": "Combine them. Simplify carefully and match the option.",
        "workingOut": "\\(8k^4\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers together, and count the total \\(k\\)'s.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in simplest index form.<br /><br />\\(k \\times 4 \\times k \\times 2 \\times k \\times k\\)",
    "options": [
      {
        "text": "\\(-8k^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9k^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8k^4\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q4g",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index fo...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "solutionSteps": [
      {
        "explanation": "Multiply the numbers: \\(5 \\times 6 = 30\\).",
        "workingOut": "30",
        "graphData": null
      },
      {
        "explanation": "There are 3 \\(a\\)'s multiplied together.",
        "workingOut": "\\(a^3\\)",
        "graphData": null
      },
      {
        "explanation": "Combine them. Simplify carefully and match the option.",
        "workingOut": "\\(30a^3\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers together first.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in simplest index form.<br /><br />\\(5 \\times a \\times 6 \\times a \\times a\\)",
    "options": [
      {
        "text": "\\(-30a^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(31a^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(30a^3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q4h",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Write the following in simplest index fo...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "solutionSteps": [
      {
        "explanation": "Multiply the numbers: \\(7 \\times 3 = 21\\).",
        "workingOut": "21",
        "graphData": null
      },
      {
        "explanation": "There are 3 \\(m\\)'s. Simplify carefully and match the option.",
        "workingOut": "\\(m^3\\)",
        "graphData": null
      },
      {
        "explanation": "Combine them. Simplify carefully and match the option.",
        "workingOut": "\\(21m^3\\)",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers, and use an index for the \\(m\\)'s.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write the following in simplest index form.<br /><br />\\(7 \\times m \\times 3 \\times m \\times m\\)",
    "options": [
      {
        "text": "\\(21m^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-21m^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(22m^3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q5a",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "title": "Expand the following.\\n\\n5x^3...",
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "topicId": "y7-23h",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Write all multiplication signs.",
    "isNew": true,
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The number 5 is multiplied by \\(x^3\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Expand \\(x^3\\) into \\(x \\times x \\times x\\).",
        "workingOut": "\\(5 \\times x \\times x \\times x\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5 \\times x \\times x \\times x\\)",
        "graphData": null
      }
    ],
    "question": "Expand the following.<br /><br />\\(5x^3\\)",
    "options": [
      {
        "text": "\\(5 \\times x \\times x \\times x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 \\times x \\times x \\times x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 \\times x \\times x \\times x\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q5b",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "title": "Expand the following.\\n\\n7m^4...",
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Write all multiplication signs.",
    "isNew": true,
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Expand \\(m^4\\) into \\(4\\) \\(m\\)'s.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7 \\times m \\times m \\times m \\times m\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7 \\times m \\times m \\times m \\times m\\)",
        "graphData": null
      }
    ],
    "question": "Expand the following.<br /><br />\\(7m^4\\)",
    "options": [
      {
        "text": "\\(-7 \\times m \\times m \\times m \\times m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 \\times m \\times m \\times m \\times m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\times m \\times m \\times m \\times m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q5c",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "title": "Expand the following.\\n\\n4p^2...",
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "topicId": "y7-23h",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Write all multiplication signs.",
    "isNew": true,
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Expand \\(p^2\\) into \\(p \\times p\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4 \\times p \\times p\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4 \\times p \\times p\\)",
        "graphData": null
      }
    ],
    "question": "Expand the following.<br /><br />\\(4p^2\\)",
    "options": [
      {
        "text": "\\(-4 \\times p \\times p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5 \\times p \\times p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\times p \\times p\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q5d",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "title": "Expand the following.\\n\\n3y^5...",
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "topicId": "y7-23h",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Write all multiplication signs.",
    "isNew": true,
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Expand \\(y^5\\) into \\(5\\) \\(y\\)'s.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3 \\times y \\times y \\times y \\times y \\times y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(3 \\times y \\times y \\times y \\times y \\times y\\)",
        "graphData": null
      }
    ],
    "question": "Expand the following.<br /><br />\\(3y^5\\)",
    "options": [
      {
        "text": "\\(-3 \\times y \\times y \\times y \\times y \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\times y \\times y \\times y \\times y \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3 \\times y \\times y \\times y \\times y \\times y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q5e",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "title": "Expand the following.\\n\\n12a^4...",
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "topicId": "y7-23h",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Write all multiplication signs.",
    "isNew": true,
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Expand \\(a^4\\) into \\(4\\) \\(a\\)'s.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12 \\times a \\times a \\times a \\times a\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(12 \\times a \\times a \\times a \\times a\\)",
        "graphData": null
      }
    ],
    "question": "Expand the following.<br /><br />\\(12a^4\\)",
    "options": [
      {
        "text": "\\(12 \\times a \\times a \\times a \\times a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12 \\times a \\times a \\times a \\times a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13 \\times a \\times a \\times a \\times a\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q5f",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "title": "Expand the following.\\n\\n10k^3...",
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "topicId": "y7-23h",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Write all multiplication signs.",
    "isNew": true,
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Expand \\(k^3\\) into \\(3\\) \\(k\\)'s.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(10 \\times k \\times k \\times k\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(10 \\times k \\times k \\times k\\)",
        "graphData": null
      }
    ],
    "question": "Expand the following.<br /><br />\\(10k^3\\)",
    "options": [
      {
        "text": "\\(-10 \\times k \\times k \\times k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10 \\times k \\times k \\times k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11 \\times k \\times k \\times k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q5g",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "title": "Expand the following.\\n\\n8c^5...",
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "topicId": "y7-23h",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Write all multiplication signs.",
    "isNew": true,
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Expand \\(c^5\\) into \\(5\\) \\(c\\)'s.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8 \\times c \\times c \\times c \\times c \\times c\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8 \\times c \\times c \\times c \\times c \\times c\\)",
        "graphData": null
      }
    ],
    "question": "Expand the following.<br /><br />\\(8c^5\\)",
    "options": [
      {
        "text": "\\(-8 \\times c \\times c \\times c \\times c \\times c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 \\times c \\times c \\times c \\times c \\times c\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8 \\times c \\times c \\times c \\times c \\times c\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q5h",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Expand the following.\\n\\n2x^3y^2...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Expand both variables.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Expand \\(x^3\\) and \\(y^2\\) with multiplication signs between everything.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2 \\times x \\times x \\times x \\times y \\times y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2 \\times x \\times x \\times x \\times y \\times y\\)",
        "graphData": null
      }
    ],
    "question": "Expand the following.<br /><br />\\(2x^3y^2\\)",
    "options": [
      {
        "text": "\\(-2 \\times x \\times x \\times x \\times y \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3 \\times x \\times x \\times x \\times y \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2 \\times x \\times x \\times x \\times y \\times y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23h-q6a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23h",
    "topicCode": "23H",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Calculate the power first.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "answer": "3",
    "options": [
      {
        "text": "\\(22\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-21\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Evaluate the following when x = 4 and y ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the power. Simplify carefully and match the option.",
        "workingOut": "16 + 5",
        "graphData": null
      },
      {
        "explanation": "Add. Simplify carefully and match the option.",
        "workingOut": "21",
        "graphData": null
      }
    ],
    "question": "Evaluate the following when \\(x = 4\\) and \\(y = 5\\).<br /><br />\\(x^2 + y\\)"
  },
  {
    "id": "y7-23h-q6b",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Evaluate the following when x = 4 and y ...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Calculate the power before multiplying.",
    "options": [
      {
        "text": "\\(80\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(81\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(79\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-80\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate \\(4^2\\). Simplify carefully and match the option.",
        "workingOut": "\\(16 \\times 5\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "80",
        "graphData": null
      }
    ],
    "question": "Evaluate the following when \\(x = 4\\) and \\(y = 5\\).<br /><br />\\(x^2y\\)"
  },
  {
    "id": "y7-23h-q6c",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23h",
    "topicCode": "23H",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Calculate both powers first, then add.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "answer": "1",
    "options": [
      {
        "text": "\\(42\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(41\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(40\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-41\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Evaluate the following when x = 4 and y ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the powers. Simplify carefully and match the option.",
        "workingOut": "16 + 25",
        "graphData": null
      },
      {
        "explanation": "Add. Simplify carefully and match the option.",
        "workingOut": "41",
        "graphData": null
      }
    ],
    "question": "Evaluate the following when \\(x = 4\\) and \\(y = 5\\).<br /><br />\\(x^2 + y^2\\)"
  },
  {
    "id": "y7-23h-q6d",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23H",
    "isNew": true,
    "title": "Evaluate the following when x = 4 and y ...",
    "type": "multiple_choice",
    "topicId": "y7-23h",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Calculate \\(y^2\\) first, then multiply by \\(x\\).",
    "options": [
      {
        "text": "\\(101\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(99\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-100\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate \\(5^2\\). Simplify carefully and match the option.",
        "workingOut": "\\(4 \\times 25\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "100",
        "graphData": null
      }
    ],
    "question": "Evaluate the following when \\(x = 4\\) and \\(y = 5\\).<br /><br />\\(xy^2\\)"
  },
  {
    "id": "y7-23h-q6e",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23h",
    "topicCode": "23H",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Calculate both powers first, then add.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "answer": "3",
    "options": [
      {
        "text": "\\(90\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(88\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-89\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(89\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Evaluate the following when x = 4 and y ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the powers. Simplify carefully and match the option.",
        "workingOut": "64 + 25",
        "graphData": null
      },
      {
        "explanation": "Add. Simplify carefully and match the option.",
        "workingOut": "89",
        "graphData": null
      }
    ],
    "question": "Evaluate the following when \\(x = 4\\) and \\(y = 5\\).<br /><br />\\(x^3 + y^2\\)"
  },
  {
    "id": "y7-23h-q6f",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23h",
    "topicCode": "23H",
    "topicTitle": "Index notation",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Calculate both powers before multiplying.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 286000000
    },
    "answer": "0",
    "options": [
      {
        "text": "\\(400\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(401\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(399\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-400\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Evaluate the following when x = 4 and y ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Evaluate the powers. Simplify carefully and match the option.",
        "workingOut": "\\(16 \\times 25\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "400",
        "graphData": null
      }
    ],
    "question": "Evaluate the following when \\(x = 4\\) and \\(y = 5\\).<br /><br />\\(x^2y^2\\)"
  },
  {
    "id": "y7-23i-q10",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "question": "The product of a number and \\(14\\) is \\(126\\). What is the number?",
    "isNew": true,
    "title": "The product of a number and 14 is 126. W...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Product means multiplication. Use division to find the unknown number.",
    "options": [
      {
        "text": "\\(9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-9\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Let the number be \\(n\\). Then \\(14n = 126\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Divide \\(126\\) by \\(14\\).",
        "workingOut": "\\(n = 126 \\div 14\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "9",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23i-q11",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "question": "Emma is \\(5\\) years older than Sarah and the sum of their ages is \\(29\\). How old is Emma?",
    "isNew": true,
    "title": "Emma is 5 years older than Sarah and the...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Let Sarah's age be \\(x\\). Emma's age is \\(x + 5\\).",
    "options": [
      {
        "text": "\\(18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-17\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Set up an equation for the sum of their ages.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Combine the \\(x\\)'s. Simplify carefully and match the option.",
        "workingOut": "\\(2x + 5 = 29\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract \\(5\\) from \\(29\\).",
        "workingOut": "\\(2x = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by \\(2\\) to find Sarah's age.",
        "workingOut": "\\(x = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Add \\(5\\) to find Emma's age.",
        "workingOut": "\\(12 + 5 = 17\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23i-q12",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23i",
    "topicCode": "23I",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Total means you need to add the numbers together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "answer": "2",
    "question": "If there are \\(x\\) men and \\(y\\) women in a room, find the total number of people in the room.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Add the number of men and women.",
        "workingOut": "x + y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x + y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x + y\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "If there are x men and y women in a room...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "options": [
      {
        "text": "\\(-x + y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q13",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "question": "If a car travels at \\(60\\) km/h, how far will it travel in \\(t\\) number of hours?",
    "isNew": true,
    "title": "If a car travels at 60 km/h, how far wil...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Distance is speed multiplied by time.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply the speed (\\(60\\)) by the time (\\(t\\)).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify algebraically. Simplify carefully and match the option.",
        "workingOut": "60t",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(60t\\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\(-60t\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(61t\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(60t\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q14",
    "topicTitle": "Word problems",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "question": "If a shirt costs \\(s\\) dollars and pants cost \\(p\\) dollars, what is the cost of \\(4\\) shirts and \\(2\\) pants?",
    "isNew": true,
    "title": "If a shirt costs s dollars and pants cos...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "solutionSteps": [
      {
        "explanation": "Cost of \\(4\\) shirts is \\(4s\\).",
        "workingOut": "4s",
        "graphData": null
      },
      {
        "explanation": "Cost of \\(2\\) pants is \\(2p\\).",
        "workingOut": "2p",
        "graphData": null
      },
      {
        "explanation": "Add the costs together. Simplify carefully and match the option.",
        "workingOut": "4s + 2p",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Find the cost of the shirts and the cost of the pants, then add them together.",
    "options": [
      {
        "text": "\\(4s + 2p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4s + 2p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4s - 2p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5s + 2p\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23i-q15",
    "topicTitle": "Word problems",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "question": "A box has \\(5m\\) balls. How many balls are in \\(7\\) similar boxes?",
    "isNew": true,
    "title": "A box has 5m balls. How many balls are i...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Multiply the number of boxes by the number of balls in one box.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply \\(7\\) by \\(5m\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply the numbers. Simplify carefully and match the option.",
        "workingOut": "35m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(35m\\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\(-35m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(35m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(36m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q1a",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "isNew": true,
    "title": "The perimeter of a rectangle is given by...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(10\\) for \\(l\\) and \\(6\\) for \\(b\\).",
        "workingOut": "2(10) + 2(6)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "20 + 12",
        "graphData": null
      },
      {
        "explanation": "Add the results. Simplify carefully and match the option.",
        "workingOut": "32",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Substitute the values of \\(l\\) and \\(b\\) into the given expression.",
    "options": [
      {
        "text": "\\(33\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(32\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(31\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-32\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "The perimeter of a rectangle is given by the expression \\(2l + 2b\\) where \\(l\\) is the length and \\(b\\) is the breadth.<br /><br />Find the perimeter of a rectangle if \\(l = 10\\) cm and \\(b = 6\\) cm."
  },
  {
    "id": "y7-23i-q1b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23i",
    "topicCode": "23I",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "answer": "2",
    "hint": "Substitute \\(l = 15\\) and \\(b = 11\\).",
    "options": [
      {
        "text": "\\(53\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(51\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(52\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-52\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Substitute the values. Simplify carefully and match the option.",
        "workingOut": "2(15) + 2(11)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "30 + 22",
        "graphData": null
      },
      {
        "explanation": "Add the results. Simplify carefully and match the option.",
        "workingOut": "52",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "The perimeter of a rectangle is given by...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "The perimeter of a rectangle is given by the expression \\(2l + 2b\\) where \\(l\\) is the length and \\(b\\) is the breadth.<br /><br />Find the perimeter of a rectangle with length \\(15\\) cm and breadth \\(11\\) cm."
  },
  {
    "id": "y7-23i-q2",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "question": "If notebooks cost \\(4 each, find the cost of \\)k number of notebooks.",
    "isNew": true,
    "title": "If notebooks cost 4 each, find the cost ...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Multiply the cost of one notebook by the number of notebooks.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Cost is \\(4 multiplied by \\)k\\(.\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Write it algebraically without the multiplication sign.",
        "workingOut": "4k",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4k\\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\(-4k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q3a",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "isNew": true,
    "title": "If markers cost m dollars each, find the...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Multiply the number of markers by the cost of each.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply \\(5\\) by \\(m\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify. Simplify carefully and match the option.",
        "workingOut": "5m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5m\\)",
        "graphData": null
      }
    ],
    "question": "If markers cost \\(m\\) dollars each, find the cost of:<br /><br />\\(5\\) markers",
    "options": [
      {
        "text": "\\(-5m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q3b",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "isNew": true,
    "title": "If markers cost m dollars each, find the...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply the number of markers by the cost of each.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply \\(y\\) by \\(m\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify. Simplify carefully and match the option.",
        "workingOut": "my",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(my\\)",
        "graphData": null
      }
    ],
    "question": "If markers cost \\(m\\) dollars each, find the cost of:<br /><br />\\(y\\) markers",
    "options": [
      {
        "text": "\\(my\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-my\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q4",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23i",
    "topicCode": "23I",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "The perimeter is the sum of all three sides.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "answer": "3",
    "question": "A triangle has side lengths \\(y + 2\\) cm, \\(y + 5\\) cm and \\(9\\) cm. Find the perimeter of the triangle.",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Add the three side lengths together.",
        "workingOut": "(y + 2) + (y + 5) + 9",
        "graphData": null
      },
      {
        "explanation": "Group the like terms. Simplify carefully and match the option.",
        "workingOut": "(y + y) + (2 + 5 + 9)",
        "graphData": null
      },
      {
        "explanation": "Simplify. Simplify carefully and match the option.",
        "workingOut": "2y + 16",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-2y + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2y - 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3y + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2y + 16\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "A triangle has side lengths y + 2 cm, y ...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23i-q5a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23i",
    "topicCode": "23I",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "A square has four equal sides.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "The perimeter is the sum of all four sides.",
        "workingOut": "p + p + p + p",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression. Simplify carefully and match the option.",
        "workingOut": "4p",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4p\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "A square has side length p cm. Find:\\n\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "A square has side length \\(p\\) cm. Find:<br /><br />its perimeter",
    "options": [
      {
        "text": "\\(-4p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4p\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5p\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q5b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23i",
    "topicCode": "23I",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "The area of a square is its side length multiplied by itself.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "answer": "2",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "A square has side length p cm. Find:\\n\\n...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply the side length by itself.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Write it in index notation.",
        "workingOut": "\\(p^2\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(p^2\\)",
        "graphData": null
      }
    ],
    "question": "A square has side length \\(p\\) cm. Find:<br /><br />its area",
    "options": [
      {
        "text": "\\(-p^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q6",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23i",
    "topicCode": "23I",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Total means you need to add all their amounts together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "answer": "1",
    "question": "Alice has \\(x\\) dollars, Bob has \\(y\\) dollars and Charlie has \\(z\\) dollars. How much do they have in total?",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Add Alice's, Bob's, and Charlie's money.",
        "workingOut": "x + y + z",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x + y + z\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(x + y + z\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Alice has x dollars, Bob has y dollars a...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "options": [
      {
        "text": "\\(-x + y + z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + y + z\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - y - z\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q7",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "question": "If there are \\(m\\) number of laptops in one box. Six boxes are bought for the students in a class. How many laptops are there altogether?",
    "isNew": true,
    "title": "If there are m number of laptops in one ...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Multiply the number of boxes by the number of laptops in each box.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply \\(6\\) by \\(m\\). Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Simplify. Simplify carefully and match the option.",
        "workingOut": "6m",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(6m\\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\(-6m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6m\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q8",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "question": "The sum of two whole numbers is \\(42\\). If one of the numbers is \\(x\\), what is the other number?",
    "isNew": true,
    "title": "The sum of two whole numbers is 42. If o...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "solutionSteps": [
      {
        "explanation": "Total sum is \\(42\\). Simplify carefully and match the option.",
        "workingOut": "42",
        "graphData": null
      },
      {
        "explanation": "Subtract the first number, \\(x\\), from the total.",
        "workingOut": "42 - x",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(42 - x\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "If the total is 42, subtract the known number to find the other.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "options": [
      {
        "text": "\\(-42 - x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(43 - x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(42 - x\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23i-q9",
    "topicTitle": "Applying algebra",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 605000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23I",
    "question": "The sum of a number, \\(15\\) and \\(18\\) is \\(61\\). What is the number?",
    "isNew": true,
    "title": "The sum of a number, 15 and 18 is 61. Wh...",
    "type": "multiple_choice",
    "topicId": "y7-23i",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Subtract the known numbers from the total.",
    "options": [
      {
        "text": "\\(28\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(29\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-28\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Let the unknown number be \\(n\\). Then \\(n + 15 + 18 = 61\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Subtract \\(33\\) from \\(61\\).",
        "workingOut": "\\(n = 61 - 33\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate. Simplify carefully and match the option.",
        "workingOut": "28",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23j-q1",
    "year": "Year 7",
    "isManual": true,
    "title": "4y + 5y equals...",
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Both terms have the same variable, \\(y\\).",
        "workingOut": "4y + 5y",
        "graphData": null
      },
      {
        "explanation": "Add their coefficients: \\(4 + 5 = 9\\).",
        "workingOut": "9y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(9y\\)",
        "graphData": null
      }
    ],
    "question": "\\(4y + 5y\\) equals",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Combine like terms by adding the coefficients.",
    "options": [
      {
        "text": "\\(9y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20y\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23j-q10",
    "year": "Year 7",
    "isManual": true,
    "title": "4(y + 3) - y =...",
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Expand \\(4(y + 3)\\). Simplify carefully and match the option.",
        "workingOut": "4y + 12",
        "graphData": null
      },
      {
        "explanation": "Include the \\(- y\\) term.",
        "workingOut": "4y + 12 - y",
        "graphData": null
      },
      {
        "explanation": "Combine like terms (\\(4y - y = 3y\\)).",
        "workingOut": "3y + 12",
        "graphData": null
      }
    ],
    "question": "\\(4(y + 3) - y =\\)",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Expand the brackets first, then combine like terms.",
    "options": [
      {
        "text": "\\(12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3y + 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3y + 3\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23j-q11a",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Simplify.\\n\\n4 \\times x \\times 7 \\times ...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Multiply the numbers \\(4\\) and \\(7\\).",
        "workingOut": "28",
        "graphData": null
      },
      {
        "explanation": "Multiply the variables \\(x\\) and \\(y\\).",
        "workingOut": "xy",
        "graphData": null
      },
      {
        "explanation": "Combine them without multiplication signs.",
        "workingOut": "28xy",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers and write the letters next to each other.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify.<br /><br />\\(4 \\times x \\times 7 \\times y\\)",
    "options": [
      {
        "text": "\\(-28xy\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(29xy\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(28xy\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23j-q11b",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Simplify.\\n\\n15a + 8b - 4a - 2b...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Group the \\(a\\) terms: \\(15a - 4a\\).",
        "workingOut": "11a",
        "graphData": null
      },
      {
        "explanation": "Group the \\(b\\) terms: \\(8b - 2b\\).",
        "workingOut": "6b",
        "graphData": null
      },
      {
        "explanation": "Combine them. Simplify carefully and match the option.",
        "workingOut": "11a + 6b",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Group the \\(a\\) terms together and the \\(b\\) terms together.",
    "options": [
      {
        "text": "\\(11a + 6b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-11a + 6b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11a - 6b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12a + 6b\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify.<br /><br />\\(15a + 8b - 4a - 2b\\)"
  },
  {
    "id": "y7-23j-q11c",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Write in a shorter way.\\n\\n6 \\times 4(3 ...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Multiply \\(6\\) and \\(4\\).",
        "workingOut": "24",
        "graphData": null
      },
      {
        "explanation": "Simplify \\(3 \\times b\\) inside the bracket.",
        "workingOut": "3b",
        "graphData": null
      },
      {
        "explanation": "Write the final expression.",
        "workingOut": "24(3b - 2)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers outside the bracket and remove unnecessary multiplication signs inside.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write in a shorter way.<br /><br />\\(6 \\times 4(3 \\times b - 2)\\)",
    "options": [
      {
        "text": "\\(-24(3b - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24(3b - 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25(3b - 2)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23j-q11d",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "title": "If m = 5, find 4m^2...",
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "question": "If \\(m = 5\\), find \\(4m^2\\)",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Substitute \\(m = 5\\), calculate the square, then multiply by \\(4\\).",
    "options": [
      {
        "text": "\\(101\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(99\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-100\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(5\\) for \\(m\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate the square. Simplify carefully and match the option.",
        "workingOut": "\\(4 \\times 25\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "100",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23j-q11e",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "question": "If \\(p = 4\\) and \\(q = 6\\), find \\(3p + 8q\\)",
    "isNew": true,
    "title": "If p = 4 and q = 6, find 3p + 8q...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(p = 4\\) and \\(q = 6\\).",
        "workingOut": "3(4) + 8(6)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "12 + 48",
        "graphData": null
      },
      {
        "explanation": "Add the results. Simplify carefully and match the option.",
        "workingOut": "60",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Substitute the values for \\(p\\) and \\(q\\) and evaluate.",
    "options": [
      {
        "text": "\\(61\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(59\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-60\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(60\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23j-q12a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23j",
    "topicCode": "23J",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Sum means to add the expressions together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "answer": "2",
    "question": "Find the sum of \\(7m + 4n\\) and \\(32\\).",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the addition of the two parts.",
        "workingOut": "(7m + 4n) + 32",
        "graphData": null
      },
      {
        "explanation": "Remove brackets as there are no like terms to combine.",
        "workingOut": "7m + 4n + 32",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(7m + 4n + 32\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "options": [
      {
        "text": "\\(-7m + 4n + 32\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7m - 4n - 32\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7m + 4n + 32\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8m + 4n + 32\\)",
        "imageUrl": ""
      }
    ],
    "isActive": true,
    "title": "Find the sum of 7m + 4n and 32....",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23j-q12b",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "question": "Add \\(5b\\) to the sum of \\(8a\\) and \\(2b\\).",
    "isNew": true,
    "title": "Add 5b to the sum of 8a and 2b....",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Sum of \\(8a\\) and \\(2b\\).",
        "workingOut": "8a + 2b",
        "graphData": null
      },
      {
        "explanation": "Add \\(5b\\) to this sum. Simplify carefully and match the option.",
        "workingOut": "8a + 2b + 5b",
        "graphData": null
      },
      {
        "explanation": "Combine the like terms for \\(b\\).",
        "workingOut": "8a + 7b",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "First find the sum of \\(8a\\) and \\(2b\\), then add \\(5b\\) and simplify.",
    "options": [
      {
        "text": "\\(-8a + 7b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a - 7b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9a + 7b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a + 7b\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23j-q12c",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "question": "Divide \\(7x\\) by \\(4y\\) and then add \\(8\\).",
    "isNew": true,
    "title": "Divide 7x by 4y and then add 8....",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Write division as a fraction.",
    "options": [
      {
        "text": "\\(\\frac{7x}{4y} + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-\\frac{7x}{4y} + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{7x}{4y} - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{8x}{4y} + 8\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Write \\(7x\\) divided by \\(4y\\) as a fraction.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Add \\(8\\) to the fraction.",
        "workingOut": "\\(\\frac{7x}{4y} + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{7x}{4y} + 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23j-q12d",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Write in a shorter way:\\n\\n15 plus k all...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Write \\(15\\) plus \\(k\\). Simplify carefully and match the option.",
        "workingOut": "15 + k",
        "graphData": null
      },
      {
        "explanation": "Divide the entire expression by \\(7\\).",
        "workingOut": "\\(\\frac{15 + k}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(\\frac{15 + k}{7}\\)",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Use a fraction bar to represent 'all divided by'.",
    "options": [
      {
        "text": "\\(-\\frac{15 + k}{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{15 + k}{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{15 - k}{7}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{16 + k}{7}\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Write in a shorter way:<br /><br />\\(15\\) plus \\(k\\) all divided by \\(7\\)"
  },
  {
    "id": "y7-23j-q12e",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "question": "Divide the difference of \\(x\\) and \\(y\\) by the sum of \\(x\\) and \\(y\\).",
    "isNew": true,
    "title": "Divide the difference of x and y by the ...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "The difference of \\(x\\) and \\(y\\).",
        "workingOut": "x - y",
        "graphData": null
      },
      {
        "explanation": "The sum of \\(x\\) and \\(y\\).",
        "workingOut": "x + y",
        "graphData": null
      },
      {
        "explanation": "Divide the first by the second.",
        "workingOut": "\\(\\frac{x - y}{x + y}\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Difference means subtract, sum means add. Use a fraction for division.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "options": [
      {
        "text": "\\(-\\frac{x - y}{x + y}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - y}{x - y}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{x - y}{x + y}\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23j-q13a",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23j",
    "topicCode": "23J",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Product means multiply them all together.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "answer": "1",
    "question": "What is the product of \\(4, y\\) and \\(7\\)?",
    "isNew": true,
    "type": "multiple_choice",
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "What is the product of 4, y and 7?...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Multiply the values. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Multiply the numbers and append the variable.",
        "workingOut": "28y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(28y\\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\(-28y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(28y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(29y\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23j-q13b",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "question": "What is \\(5x\\) subtracted from the product of \\(4x\\) and \\(2y\\)?",
    "isNew": true,
    "title": "What is 5x subtracted from the product o...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Find the product first, then subtract \\(5x\\) from it.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Find the product of \\(4x\\) and \\(2y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Subtract \\(5x\\) from this product.",
        "workingOut": "8xy - 5x",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(8xy - 5x\\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\(-8xy - 5x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9xy - 5x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8xy - 5x\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23j-q13c",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Simplify.\\n\\n6y \\times 3y \\times 4y...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Multiply the numbers: \\(6 \\times 3 \\times 4\\).",
        "workingOut": "72",
        "graphData": null
      },
      {
        "explanation": "Multiply the variables: \\(y \\times y \\times y\\).",
        "workingOut": "\\(y^3\\)",
        "graphData": null
      },
      {
        "explanation": "Combine. Simplify carefully and match the option.",
        "workingOut": "\\(72y^3\\)",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Multiply all the numbers, then multiply all the variables.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify.<br /><br />\\(6y \\times 3y \\times 4y\\)",
    "options": [
      {
        "text": "\\(-72y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(73y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(72y^3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23j-q13d",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "title": "Expand.\\n\\n4(3m + 5)...",
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Multiply \\(4\\) by \\(3m\\).",
        "workingOut": "12m",
        "graphData": null
      },
      {
        "explanation": "Multiply \\(4\\) by \\(5\\). Simplify carefully and match the option.",
        "workingOut": "20",
        "graphData": null
      },
      {
        "explanation": "Combine. Simplify carefully and match the option.",
        "workingOut": "12m + 20",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Multiply the term outside the bracket by each term inside.",
    "options": [
      {
        "text": "\\(12m + 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12m + 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12m - 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13m + 20\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "type": "multiple_choice",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Expand.<br /><br />\\(4(3m + 5)\\)"
  },
  {
    "id": "y7-23j-q13e",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Expand and simplify.\\n\\n7(4y - 10) - 25...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Expand the bracket. Simplify carefully and match the option.",
        "workingOut": "28y - 70",
        "graphData": null
      },
      {
        "explanation": "Include the \\(- 25\\). Simplify carefully and match the option.",
        "workingOut": "28y - 70 - 25",
        "graphData": null
      },
      {
        "explanation": "Combine \\(-70 - 25\\). Simplify carefully and match the option.",
        "workingOut": "28y - 95",
        "graphData": null
      }
    ],
    "answer": "1",
    "chapterId": "y7-23",
    "hint": "Expand the bracket first, then combine the number terms.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Expand and simplify.<br /><br />\\(7(4y - 10) - 25\\)",
    "options": [
      {
        "text": "\\(-28y - 95\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(28y - 95\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(29y - 95\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23j-q14a",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Simplify the following.\\n\\n6x + 12 + 14x...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Group \\(x\\) terms: \\(6x + 14x\\).",
        "workingOut": "20x",
        "graphData": null
      },
      {
        "explanation": "Group numbers: \\(12 - 5\\).",
        "workingOut": "7",
        "graphData": null
      },
      {
        "explanation": "Combine. Simplify carefully and match the option.",
        "workingOut": "20x + 7",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Group the \\(x\\) terms and the number terms.",
    "options": [
      {
        "text": "\\(20x + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-20x + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20x - 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21x + 7\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(6x + 12 + 14x - 5\\)"
  },
  {
    "id": "y7-23j-q14b",
    "chapterId": "y7-23",
    "chapterTitle": "Chapter 23: Algebra",
    "topicId": "y7-23j",
    "topicCode": "23J",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "hint": "Remove the multiplication signs.",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "answer": "1",
    "isNew": true,
    "type": "multiple_choice",
    "solutionSteps": [
      {
        "explanation": "Write the number and variables next to each other.",
        "workingOut": "18mn",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(18mn\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(18mn\\)",
        "graphData": null
      }
    ],
    "solution": "",
    "origin": "seed",
    "isActive": true,
    "title": "Simplify the following.\\n\\n18 \\times m \\...",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(18 \\times m \\times n\\)",
    "options": [
      {
        "text": "\\(-18mn\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(18mn\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19mn\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23j-q14c",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Simplify the following.\\n\\n12k - 4k - 2k...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Subtract coefficients: \\(12 - 4 - 2 - 1\\).",
        "workingOut": "5",
        "graphData": null
      },
      {
        "explanation": "Attach the variable. Simplify carefully and match the option.",
        "workingOut": "5k",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(5k\\)",
        "graphData": null
      }
    ],
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "These are all like terms. Subtract their coefficients in order.",
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(12k - 4k - 2k - k\\)",
    "options": [
      {
        "text": "\\(-5k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6k\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5k\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y7-23j-q14d",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Simplify the following.\\n\\n14p + 8q - 6p...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Group \\(p\\) terms: \\(14p - 6p\\).",
        "workingOut": "8p",
        "graphData": null
      },
      {
        "explanation": "Group \\(q\\) terms: \\(8q + 5q\\).",
        "workingOut": "13q",
        "graphData": null
      },
      {
        "explanation": "Combine. Simplify carefully and match the option.",
        "workingOut": "8p + 13q",
        "graphData": null
      }
    ],
    "answer": "3",
    "chapterId": "y7-23",
    "hint": "Group the \\(p\\) terms and the \\(q\\) terms.",
    "options": [
      {
        "text": "\\(-8p + 13q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8p - 13q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9p + 13q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8p + 13q\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(14p + 8q - 6p + 5q\\)"
  },
  {
    "id": "y7-23j-q14e",
    "topicTitle": "Chapter review",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "requiresManualGrading": false,
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "solution": "",
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "isNew": true,
    "title": "Simplify the following.\\n\\nxy + 6x + 4xy...",
    "type": "multiple_choice",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Group \\(xy\\) terms: \\(1xy + 4xy + 7xy\\).",
        "workingOut": "12xy",
        "graphData": null
      },
      {
        "explanation": "Group \\(x\\) terms: \\(6x - 3x\\).",
        "workingOut": "3x",
        "graphData": null
      },
      {
        "explanation": "Combine. Simplify carefully and match the option.",
        "workingOut": "12xy + 3x",
        "graphData": null
      }
    ],
    "answer": "0",
    "chapterId": "y7-23",
    "hint": "Group the \\(xy\\) terms and the \\(x\\) terms.",
    "options": [
      {
        "text": "\\(12xy + 3x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12xy + 3x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12xy - 3x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13xy + 3x\\)",
        "imageUrl": ""
      }
    ],
    "chapterTitle": "Chapter 23: Algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "question": "Simplify the following.<br /><br />\\(xy + 6x + 4xy - 3x + 7xy\\)"
  },
  {
    "id": "y7-23j-q2",
    "year": "Year 7",
    "isManual": true,
    "title": "12xy \\div 12x =...",
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "question": "\\(12xy \\div 12x =\\)",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Write the division as a fraction and cancel common factors.",
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12y\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Write as a fraction. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Cancel out the common factors \\(12\\) and \\(x\\).",
        "workingOut": "y",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(y\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23j-q3",
    "year": "Year 7",
    "isManual": true,
    "title": "5 \\times m + 2 \\times n equals...",
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "\\(5 \\times m = 5m\\) Simplify carefully and match the option.",
        "workingOut": "5m",
        "graphData": null
      },
      {
        "explanation": "\\(2 \\times n = 2n\\) Simplify carefully and match the option.",
        "workingOut": "2n",
        "graphData": null
      },
      {
        "explanation": "Combine them. Simplify carefully and match the option.",
        "workingOut": "5m + 2n",
        "graphData": null
      }
    ],
    "question": "\\(5 \\times m + 2 \\times n\\) equals",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Remove the multiplication signs between numbers and variables.",
    "options": [
      {
        "text": "\\(m^5 + n^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10mn\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5m + 2n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7mn\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23j-q4",
    "year": "Year 7",
    "isManual": true,
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "answer": "0",
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "question": "If \\(b = 3\\) and \\(k = 4\\) then \\(\\frac{1}{2}bk^2\\) equals",
    "chapterId": "y7-23",
    "hint": "Substitute the values and follow the order of operations (calculate the power first).",
    "options": [
      {
        "text": "\\(24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(48\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(72\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "title": "If b = 3 and k = 4 then \\frac{1}{2}bk^2 ...",
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(b = 3\\) and \\(k = 4\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate the power. Simplify carefully and match the option.",
        "workingOut": "\\(\\frac{1}{2} \\times 3 \\times 16\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "24",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23j-q5",
    "year": "Year 7",
    "isManual": true,
    "title": "m^4 + m^4 equals...",
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "question": "\\(m^4 + m^4\\) equals",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "These are like terms. Add their coefficients.",
    "options": [
      {
        "text": "\\(m^8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^{16}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2m^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2m^8\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "The terms \\(m^4\\) and \\(m^4\\) are identical.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Add the coefficients (\\(1 + 1 = 2\\)).",
        "workingOut": "\\(2m^4\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(2m^4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23j-q6",
    "year": "Year 7",
    "isManual": true,
    "title": "2x^2 - 4x + 7x + 5x^2 equals...",
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "answer": "0",
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "question": "\\(2x^2 - 4x + 7x + 5x^2\\) equals",
    "chapterId": "y7-23",
    "hint": "Group the \\(x^2\\) terms together and the \\(x\\) terms together.",
    "options": [
      {
        "text": "\\(7x^2 + 3x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7x^2 - 3x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7x^3 + 3x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7x^4 - 3x\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Identify like terms. Simplify carefully and match the option.",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Add coefficients for \\(x^2\\).",
        "workingOut": "\\(7x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Add coefficients for \\(x\\).",
        "workingOut": "+ 3x",
        "graphData": null
      },
      {
        "explanation": "Combine. Simplify carefully and match the option.",
        "workingOut": "\\(7x^2 + 3x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23j-q7",
    "year": "Year 7",
    "isManual": true,
    "title": "4xy^2 equals...",
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "answer": "0",
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "question": "\\(4xy^2\\) equals",
    "chapterId": "y7-23",
    "hint": "Expand the index notation. Only \\(y\\) is squared.",
    "options": [
      {
        "text": "\\(4 \\times x \\times y \\times y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\times x \\times y \\times 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4 \\times xy \\times xy\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4xy \\times 4xy\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "\\(y^2\\) means \\(y \\times y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Insert multiplication signs everywhere.",
        "workingOut": "\\(4 \\times x \\times y \\times y\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the final answer.",
        "workingOut": "\\(4 \\times x \\times y \\times y\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y7-23j-q8",
    "year": "Year 7",
    "isManual": true,
    "title": "5p^4 \\times (-3p^2) equals...",
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "solutionSteps": [
      {
        "explanation": "Multiply the coefficients: \\(5 \\times -3\\).",
        "workingOut": "-15",
        "graphData": null
      },
      {
        "explanation": "Multiply the variables: \\(p^4 \\times p^2\\). Add the indices.",
        "workingOut": "\\(p^{4+2} = p^6\\)",
        "graphData": null
      },
      {
        "explanation": "Combine. Simplify carefully and match the option.",
        "workingOut": "\\(-15p^6\\)",
        "graphData": null
      }
    ],
    "question": "\\(5p^4 \\times (-3p^2)\\) equals",
    "answer": "2",
    "chapterId": "y7-23",
    "hint": "Multiply the numbers, then multiply the powers by adding their indices.",
    "options": [
      {
        "text": "\\(15p^6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15p^8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-15p^6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-15p^8\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    }
  },
  {
    "id": "y7-23j-q9",
    "year": "Year 7",
    "isManual": true,
    "title": "If y = 4 find 3y^2...",
    "difficulty": "easy",
    "timeLimit": 30,
    "type": "multiple_choice",
    "requiresManualGrading": false,
    "answer": "0",
    "solution": "",
    "questionImage": "",
    "subQuestions": [],
    "blanks": [],
    "graphData": null,
    "examPaper": "",
    "createdAt": {
      "_seconds": 1782830283,
      "_nanoseconds": 918000000
    },
    "origin": "seed",
    "source": "",
    "isActive": true,
    "topicCode": "23J",
    "topicId": "y7-23j",
    "question": "If \\(y = 4\\) find \\(3y^2\\)",
    "chapterId": "y7-23",
    "hint": "Substitute \\(y = 4\\), square it first, then multiply by \\(3\\).",
    "options": [
      {
        "text": "\\(48\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(144\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(36\\)",
        "imageUrl": ""
      }
    ],
    "isNew": true,
    "chapterTitle": "Chapter 23: Algebra",
    "topicTitle": "Problem solving with algebra",
    "updatedAt": {
      "_seconds": 1784357781,
      "_nanoseconds": 852000000
    },
    "solutionSteps": [
      {
        "explanation": "Substitute \\(4\\) for \\(y\\).",
        "workingOut": "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        "graphData": null
      },
      {
        "explanation": "Calculate the square. Simplify carefully and match the option.",
        "workingOut": "\\(3 \\times 16\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply. Simplify carefully and match the option.",
        "workingOut": "48",
        "graphData": null
      }
    ]
  }
];

export const importYear7Ch23A = async (forceReset = false) => {
  console.log('[Ch23A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch23 questions...');
      const topicsToDelete = ['y7-23a', 'y7-23b', 'y7-23c', 'y7-23d', 'y7-23e', 'y7-23f'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch23 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-23a', 'y7-23b', 'y7-23c', 'y7-23d', 'y7-23e', 'y7-23f'];
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
    console.log('[Ch23A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch23A Year 7 Import] ERROR:', error);
    return 0;
  }
};
