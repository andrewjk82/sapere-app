import { readFileSync, writeFileSync } from 'fs';

const file = 'src/constants/seedYear7Ch2JQuestions.js';
let content = readFileSync(file, 'utf8');

// We will parse the array using regular expressions or replace blocks.
// Let's replace the specific blocks manually by matching "id": "..." and substituting type: "multiple_choice", adding opts, setting answer, removing requiresManualGrading.

const replacements = [
  {
    id: "y7-2j-q4a",
    oldBlock: `    "id": "y7-2j-q4a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 875.",
    "a": "101, 103, 671",
    "hint": "Ensure all three numbers are three-digit numbers (100 to 999), are odd, and add up to 875.",
    "solutionSteps": [
      {
        "explanation": "Choose two simple odd three-digit numbers.",
        "workingOut": "101 \\\\text{ and } 103"
      },
      {
        "explanation": "Find the third number by subtracting the first two from the target sum.",
        "workingOut": "875 - 101 - 103 = 671"
      },
      {
        "explanation": "Verify that 671 is a three-digit odd number.",
        "workingOut": "671 \\\\text{ is odd and three-digit}"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q4a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 875.",
    "opts": [
      { "text": "\\\\(100, 103, 672\\\\)", "imageUrl": "" },
      { "text": "\\\\(101, 101, 673\\\\)", "imageUrl": "" },
      { "text": "\\\\(99, 105, 671\\\\)", "imageUrl": "" },
      { "text": "\\\\(101, 103, 671\\\\)", "imageUrl": "" }
    ],
    "answer": 3,
    "hint": "Ensure all three numbers are three-digit numbers (100 to 999), are odd, and add up to 875.",
    "solutionSteps": [
      {
        "explanation": "Choose two simple odd three-digit numbers.",
        "workingOut": "101 \\\\text{ and } 103"
      },
      {
        "explanation": "Find the third number by subtracting the first two from the target sum.",
        "workingOut": "875 - 101 - 103 = 671"
      },
      {
        "explanation": "Verify that 671 is a three-digit odd number.",
        "workingOut": "671 \\\\text{ is odd and three-digit}"
      }
    ]`
  },
  {
    id: "y7-2j-q4b",
    oldBlock: `    "id": "y7-2j-q4b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 905.",
    "a": "101, 103, 701",
    "hint": "Choose three distinct odd numbers between 100 and 900 that sum to 905.",
    "solutionSteps": [
      {
        "explanation": "Select two distinct odd three-digit numbers.",
        "workingOut": "101 \\\\text{ and } 103"
      },
      {
        "explanation": "Calculate the remaining value to reach 905.",
        "workingOut": "905 - 101 - 103 = 701"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q4b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 905.",
    "opts": [
      { "text": "\\\\(101, 103, 701\\\\)", "imageUrl": "" },
      { "text": "\\\\(101, 103, 700\\\\)", "imageUrl": "" },
      { "text": "\\\\(101, 101, 703\\\\)", "imageUrl": "" },
      { "text": "\\\\(99, 105, 701\\\\)", "imageUrl": "" }
    ],
    "answer": 0,
    "hint": "Choose three distinct odd numbers between 100 and 900 that sum to 905.",
    "solutionSteps": [
      {
        "explanation": "Select two distinct odd three-digit numbers.",
        "workingOut": "101 \\\\text{ and } 103"
      },
      {
        "explanation": "Calculate the remaining value to reach 905.",
        "workingOut": "905 - 101 - 103 = 701"
      }
    ]`
  },
  {
    id: "y7-2j-q4c",
    oldBlock: `    "id": "y7-2j-q4c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 481.",
    "a": "101, 103, 277",
    "hint": "Ensure all numbers are between 100 and 999, odd, and sum to 481.",
    "solutionSteps": [
      {
        "explanation": "Pick two odd three-digit numbers.",
        "workingOut": "101, 103"
      },
      {
        "explanation": "Subtract their sum from 481 to find the third number.",
        "workingOut": "481 - (101 + 103) = 277"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q4c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 481.",
    "opts": [
      { "text": "\\\\(101, 103, 276\\\\)", "imageUrl": "" },
      { "text": "\\\\(101, 103, 277\\\\)", "imageUrl": "" },
      { "text": "\\\\(101, 101, 279\\\\)", "imageUrl": "" },
      { "text": "\\\\(99, 105, 277\\\\)", "imageUrl": "" }
    ],
    "answer": 1,
    "hint": "Ensure all numbers are between 100 and 999, odd, and sum to 481.",
    "solutionSteps": [
      {
        "explanation": "Pick two odd three-digit numbers.",
        "workingOut": "101, 103"
      },
      {
        "explanation": "Subtract their sum from 481 to find the third number.",
        "workingOut": "481 - (101 + 103) = 277"
      }
    ]`
  },
  {
    id: "y7-2j-q4d",
    oldBlock: `    "id": "y7-2j-q4d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 349.",
    "a": "101, 103, 145",
    "hint": "Choose three distinct three-digit odd numbers that total 349.",
    "solutionSteps": [
      {
        "explanation": "Pick 101 and 103.",
        "workingOut": "101 + 103 = 204"
      },
      {
        "explanation": "Calculate the third number.",
        "workingOut": "349 - 204 = 145"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q4d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 349.",
    "opts": [
      { "text": "\\\\(101, 103, 144\\\\)", "imageUrl": "" },
      { "text": "\\\\(101, 101, 147\\\\)", "imageUrl": "" },
      { "text": "\\\\(101, 103, 145\\\\)", "imageUrl": "" },
      { "text": "\\\\(99, 105, 145\\\\)", "imageUrl": "" }
    ],
    "answer": 2,
    "hint": "Choose three distinct three-digit odd numbers that total 349.",
    "solutionSteps": [
      {
        "explanation": "Pick 101 and 103.",
        "workingOut": "101 + 103 = 204"
      },
      {
        "explanation": "Calculate the third number.",
        "workingOut": "349 - 204 = 145"
      }
    ]`
  },
  {
    id: "y7-2j-q4e",
    oldBlock: `    "id": "y7-2j-q4e",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 1837.",
    "a": "501, 503, 833",
    "hint": "Ensure each number has three digits, is odd, and they sum to 1837.",
    "solutionSteps": [
      {
        "explanation": "Pick two odd three-digit numbers.",
        "workingOut": "501, 503"
      },
      {
        "explanation": "Calculate the third number.",
        "workingOut": "1837 - (501 + 503) = 833"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q4e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 1837.",
    "opts": [
      { "text": "\\\\(501, 503, 832\\\\)", "imageUrl": "" },
      { "text": "\\\\(501, 501, 835\\\\)", "imageUrl": "" },
      { "text": "\\\\(501, 503, 833\\\\)", "imageUrl": "" },
      { "text": "\\\\(99, 905, 833\\\\)", "imageUrl": "" }
    ],
    "answer": 2,
    "hint": "Ensure each number has three digits, is odd, and they sum to 1837.",
    "solutionSteps": [
      {
        "explanation": "Pick two odd three-digit numbers.",
        "workingOut": "501, 503"
      },
      {
        "explanation": "Calculate the third number.",
        "workingOut": "1837 - (501 + 503) = 833"
      }
    ]`
  },
  {
    id: "y7-2j-q4f",
    oldBlock: `    "id": "y7-2j-q4f",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 2853.",
    "a": "901, 903, 1049",
    "hint": "Wait, the target sum is 2853. Since the maximum possible sum of three three-digit numbers is 999 + 997 + 995 = 2991, 2853 is possible with three-digit numbers.",
    "solutionSteps": [
      {
        "explanation": "Pick two large odd three-digit numbers.",
        "workingOut": "951, 953"
      },
      {
        "explanation": "Subtract their sum from 2853 to find the third three-digit number.",
        "workingOut": "2853 - (951 + 953) = 949"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q4f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write three different three-digit numbers that are odd and sum to 2853.",
    "opts": [
      { "text": "\\\\(951, 953, 948\\\\)", "imageUrl": "" },
      { "text": "\\\\(951, 951, 951\\\\)", "imageUrl": "" },
      { "text": "\\\\(951, 953, 949\\\\)", "imageUrl": "" },
      { "text": "\\\\(951, 953, 1049\\\\)", "imageUrl": "" }
    ],
    "answer": 2,
    "hint": "Wait, the target sum is 2853. Since the maximum possible sum of three three-digit numbers is 999 + 997 + 995 = 2991, 2853 is possible with three-digit numbers.",
    "solutionSteps": [
      {
        "explanation": "Pick two large odd three-digit numbers.",
        "workingOut": "951, 953"
      },
      {
        "explanation": "Subtract their sum from 2853 to find the third three-digit number.",
        "workingOut": "2853 - (951 + 953) = 949"
      }
    ]`
  },
  {
    id: "y7-2j-q25a",
    oldBlock: `    "id": "y7-2j-q25a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 18 as a sum of no more than 4 cubes.",
    "a": "2^3 + 2^3 + 1^3 + 1^3",
    "hint": "Use cubes like 1, 8, 27. Try to sum up to 4 of them to get 18.",
    "solutionSteps": [
      {
        "explanation": "List the available cubes: 1, 8.",
        "workingOut": "1, 8"
      },
      {
        "explanation": "Combine cubes to get 18.",
        "workingOut": "8 + 8 + 1 + 1 = 18"
      },
      {
        "explanation": "Express as powers.",
        "workingOut": "2^3 + 2^3 + 1^3 + 1^3"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q25a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 18 as a sum of no more than 4 cubes.",
    "opts": [
      { "text": "\\\\(2^3 + 2^3 + 1^3 + 1^3\\\\)", "imageUrl": "" },
      { "text": "\\\\(2^3 + 2^3 + 2^3\\\\)", "imageUrl": "" },
      { "text": "\\\\(2^3 + 1^3 + 1^3\\\\)", "imageUrl": "" },
      { "text": "\\\\(2^3 + 2^3 + 2^3 + 1^3\\\\)", "imageUrl": "" }
    ],
    "answer": 0,
    "hint": "Use cubes like 1, 8, 27. Try to sum up to 4 of them to get 18.",
    "solutionSteps": [
      {
        "explanation": "List the available cubes: 1, 8.",
        "workingOut": "1, 8"
      },
      {
        "explanation": "Combine cubes to get 18.",
        "workingOut": "8 + 8 + 1 + 1 = 18"
      },
      {
        "explanation": "Express as powers.",
        "workingOut": "2^3 + 2^3 + 1^3 + 1^3"
      }
    ]`
  },
  {
    id: "y7-2j-q25b",
    oldBlock: `    "id": "y7-2j-q25b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 1730 as a sum of no more than 4 cubes.",
    "a": "10^3 + 9^3 + 1^3",
    "hint": "1000 and 729 are large cubes close to 1730.",
    "solutionSteps": [
      {
        "explanation": "Identify cubes close to 1730.",
        "workingOut": "10^3 = 1000, quad 9^3 = 729"
      },
      {
        "explanation": "Add the remaining values.",
        "workingOut": "1000 + 729 + 1 = 1730"
      },
      {
        "explanation": "Express in index form.",
        "workingOut": "10^3 + 9^3 + 1^3"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q25b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 1730 as a sum of no more than 4 cubes.",
    "opts": [
      { "text": "\\\\(10^3 + 9^3 + 2^3\\\\)", "imageUrl": "" },
      { "text": "\\\\(10^3 + 9^3 + 1^3\\\\)", "imageUrl": "" },
      { "text": "\\\\(10^3 + 8^3 + 1^3\\\\)", "imageUrl": "" },
      { "text": "\\\\(9^3 + 9^3 + 9^3 + 1^3\\\\)", "imageUrl": "" }
    ],
    "answer": 1,
    "hint": "1000 and 729 are large cubes close to 1730.",
    "solutionSteps": [
      {
        "explanation": "Identify cubes close to 1730.",
        "workingOut": "10^3 = 1000, quad 9^3 = 729"
      },
      {
        "explanation": "Add the remaining values.",
        "workingOut": "1000 + 729 + 1 = 1730"
      },
      {
        "explanation": "Express in index form.",
        "workingOut": "10^3 + 9^3 + 1^3"
      }
    ]`
  },
  {
    id: "y7-2j-q25c",
    oldBlock: `    "id": "y7-2j-q25c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 38 as a sum of no more than 4 cubes.",
    "a": "3^3 + 2^3 + 1^3 + 1^3 or 3^3 + 2^3 + 2^3 (Wait, 3^3+2^3+2^3 = 27+8+8=43, no. 3^3+2^3+1^3+1^3 = 27+8+1+1 = 37. Wait, 38 is 27+8+1+1+1 (5 cubes). Can we do it in 4? Let's check: 3^3+2^3+2^3 = 43. 3^3 + 11 = 27+8+1+1+1 (5). Wait, what about 2^3+2^3+2^3+2^3+2^3+2^3? No. Is 38 possible in 4 cubes? Wait, 38 = 27 + 8 + 1 + 1 + 1 (5 cubes). Wait! Is 38 equal to any sum of 4 cubes? Cubes: 1, 8, 27. Max 4 cubes: 27+8+1+1 = 37. 27+8+8 = 43. 8+8+8+8 = 32. 27+27 = 54. So 38 is NOT representable as the sum of 4 or fewer cubes! Let's change the number to 37.",
    "hint": "Evaluate 27 + 8 + 1 + 1.",
    "solutionSteps": [
      {
        "explanation": "Identify cubes: 27, 8, 1.",
        "workingOut": "27 + 8 + 1 + 1 = 37"
      },
      {
        "explanation": "Express in powers.",
        "workingOut": "3^3 + 2^3 + 1^3 + 1^3"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q25c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 37 as a sum of no more than 4 cubes.",
    "opts": [
      { "text": "\\\\(3^3 + 2^3 + 2^3\\\\)", "imageUrl": "" },
      { "text": "\\\\(3^3 + 2^3 + 1^3\\\\)", "imageUrl": "" },
      { "text": "\\\\(3^3 + 2^3 + 1^3 + 1^3\\\\)", "imageUrl": "" },
      { "text": "\\\\(2^3 + 2^3 + 2^3 + 2^3\\\\)", "imageUrl": "" }
    ],
    "answer": 2,
    "hint": "Evaluate 27 + 8 + 1 + 1.",
    "solutionSteps": [
      {
        "explanation": "Identify cubes: 27, 8, 1.",
        "workingOut": "27 + 8 + 1 + 1 = 37"
      },
      {
        "explanation": "Express in powers.",
        "workingOut": "3^3 + 2^3 + 1^3 + 1^3"
      }
    ]`
  },
  {
    id: "y7-2j-q31a",
    oldBlock: `    "id": "y7-2j-q31a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 28 as the sum of 4 squares.",
    "a": "5^2 + 1^2 + 1^2 + 1^2 or 4^2 + 2^2 + 2^2 + 2^2",
    "hint": "Try combining squares: 1, 4, 9, 16, 25.",
    "solutionSteps": [
      {
        "explanation": "Evaluate a combination of squares.",
        "workingOut": "25 + 1 + 1 + 1 = 28 \\\\implies 5^2 + 1^2 + 1^2 + 1^2"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q31a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 28 as the sum of 4 squares.",
    "opts": [
      { "text": "\\\\(5^2 + 2^2 + 1^2\\\\)", "imageUrl": "" },
      { "text": "\\\\(4^2 + 3^2 + 2^2 + 1^2\\\\)", "imageUrl": "" },
      { "text": "\\\\(5^2 + 1^2 + 1^2 + 1^2\\\\)", "imageUrl": "" },
      { "text": "\\\\(4^2 + 2^2 + 2^2 + 1^2\\\\)", "imageUrl": "" }
    ],
    "answer": 2,
    "hint": "Try combining squares: 1, 4, 9, 16, 25.",
    "solutionSteps": [
      {
        "explanation": "Evaluate a combination of squares.",
        "workingOut": "25 + 1 + 1 + 1 = 28 \\\\implies 5^2 + 1^2 + 1^2 + 1^2"
      }
    ]`
  },
  {
    id: "y7-2j-q31b",
    oldBlock: `    "id": "y7-2j-q31b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 75 as the sum of 4 squares.",
    "a": "8^2 + 3^2 + 1^2 + 1^2",
    "hint": "Use squares: 64, 9, 1, 1.",
    "solutionSteps": [
      {
        "explanation": "Combine squares to total 75.",
        "workingOut": "64 + 9 + 1 + 1 = 75 \\\\implies 8^2 + 3^2 + 1^2 + 1^2"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q31b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 75 as the sum of 4 squares.",
    "opts": [
      { "text": "\\\\(8^2 + 3^2 + 1^2 + 1^2\\\\)", "imageUrl": "" },
      { "text": "\\\\(8^2 + 3^2 + 2^2\\\\)", "imageUrl": "" },
      { "text": "\\\\(7^2 + 5^2 + 1^2\\\\)", "imageUrl": "" },
      { "text": "\\\\(8^2 + 4^2 + 1^2 + 1^2\\\\)", "imageUrl": "" }
    ],
    "answer": 0,
    "hint": "Use squares: 64, 9, 1, 1.",
    "solutionSteps": [
      {
        "explanation": "Combine squares to total 75.",
        "workingOut": "64 + 9 + 1 + 1 = 75 \\\\implies 8^2 + 3^2 + 1^2 + 1^2"
      }
    ]`
  },
  {
    id: "y7-2j-q31c",
    oldBlock: `    "id": "y7-2j-q31c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 140 as the sum of 4 squares.",
    "a": "10^2 + 6^2 + 2^2 + 0^2",
    "hint": "Use squares: 100, 36, 4, 0.",
    "solutionSteps": [
      {
        "explanation": "Combine squares.",
        "workingOut": "100 + 36 + 4 + 0 = 140 \\\\implies 10^2 + 6^2 + 2^2 + 0^2"
      }
    ],
    "requiresManualGrading": true`,
    newBlock: `    "id": "y7-2j-q31c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Write 140 as the sum of 4 squares.",
    "opts": [
      { "text": "\\\\(10^2 + 5^2 + 5^2 + 2^2\\\\)", "imageUrl": "" },
      { "text": "\\\\(10^2 + 6^2 + 2^2 + 0^2\\\\)", "imageUrl": "" },
      { "text": "\\\\(11^2 + 4^2 + 2^2 + 1^2\\\\)", "imageUrl": "" },
      { "text": "\\\\(9^2 + 7^2 + 3^2 + 1^2\\\\)", "imageUrl": "" }
    ],
    "answer": 1,
    "hint": "Use squares: 100, 36, 4, 0.",
    "solutionSteps": [
      {
        "explanation": "Combine squares.",
        "workingOut": "100 + 36 + 4 + 0 = 140 \\\\implies 10^2 + 6^2 + 2^2 + 0^2"
      }
    ]`
  }
];

for (const r of replacements) {
  if (content.includes(r.oldBlock)) {
    content = content.replace(r.oldBlock, r.newBlock);
    console.log(`✅ Local seed ${r.id} replaced successfully`);
  } else {
    console.log(`❌ Local seed ${r.id} NOT matched!`);
  }
}

writeFileSync(file, content);
