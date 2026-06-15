import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

export const allQuestions = [
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(8\\)?",
    "options": [
      "\\(\\{1, 2, 4, 8\\}\\)",
      "\\(\\{2, 4, 8\\}\\)",
      "\\(\\{1, 2, 3, 4, 8\\}\\)",
      "\\(\\{1, 2, 4\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(8\\), the pairs of factors are what multiply to give \\(8\\). Listing them out gives \\(\\{1, 2, 4, 8\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(8\\), the pairs of factors are what multiply to give \\(8\\). Listing them out gives \\(\\{1, 2, 4, 8\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(18\\)?",
    "options": [
      "\\(\\{2, 3, 6, 9\\}\\)",
      "\\(\\{1, 2, 4, 6, 9, 18\\}\\)",
      "\\(\\{1, 2, 3, 6, 9, 18\\}\\)",
      "\\(\\{1, 2, 3, 9, 18\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(18\\), the pairs of factors are what multiply to give \\(18\\). Listing them out gives \\(\\{1, 2, 3, 6, 9, 18\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(18\\), the pairs of factors are what multiply to give \\(18\\). Listing them out gives \\(\\{1, 2, 3, 6, 9, 18\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(21\\)?",
    "options": [
      "\\(\\{1, 2, 3, 7, 21\\}\\)",
      "\\(\\{1, 3, 7, 21\\}\\)",
      "\\(\\{1, 3, 21\\}\\)",
      "\\(\\{3, 7, 21\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(21\\), the pairs of factors are what multiply to give \\(21\\). Listing them out gives \\(\\{1, 3, 7, 21\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(21\\), the pairs of factors are what multiply to give \\(21\\). Listing them out gives \\(\\{1, 3, 7, 21\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(20\\)?",
    "options": [
      "\\(\\{1, 2, 4, 10, 20\\}\\)",
      "\\(\\{1, 2, 5, 10, 20\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 10, 20\\}\\)",
      "\\(\\{1, 2, 4, 5, 10, 20\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(20\\), the pairs of factors are what multiply to give \\(20\\). Listing them out gives \\(\\{1, 2, 4, 5, 10, 20\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(20\\), the pairs of factors are what multiply to give \\(20\\). Listing them out gives \\(\\{1, 2, 4, 5, 10, 20\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(13\\)?",
    "options": [
      "\\(\\{13\\}\\)",
      "\\(\\{0, 1, 13\\}\\)",
      "\\(\\{1, 3, 13\\}\\)",
      "\\(\\{1, 13\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(13\\), the pairs of factors are what multiply to give \\(13\\). Listing them out gives \\(\\{1, 13\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(13\\), the pairs of factors are what multiply to give \\(13\\). Listing them out gives \\(\\{1, 13\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(10\\)?",
    "options": [
      "\\(\\{2, 5\\}\\)",
      "\\(\\{1, 5, 10\\}\\)",
      "\\(\\{1, 2, 10\\}\\)",
      "\\(\\{1, 2, 5, 10\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(10\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 5, 10\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 5, 10\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(16\\)?",
    "options": [
      "\\(\\{1, 2, 8, 16\\}\\)",
      "\\(\\{1, 2, 4, 8, 16\\}\\)",
      "\\(\\{1, 2, 4, 6, 8, 16\\}\\)",
      "\\(\\{2, 4, 8\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(16\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 8, 16\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(16\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 8, 16\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(17\\)?",
    "options": [
      "\\(\\{1, 17\\}\\)",
      "\\(\\{17\\}\\)",
      "\\(\\{1, 3, 17\\}\\)",
      "\\(\\{1, 7, 17\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(17\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 17\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(17\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 17\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(24\\)?",
    "options": [
      "\\(\\{1, 2, 3, 6, 8, 12, 24\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 12, 24\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\)",
      "\\(\\{1, 2, 4, 6, 8, 12, 24\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(24\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(24\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(36\\)?",
    "options": [
      "\\(\\{1, 2, 3, 4, 6, 8, 9, 12, 18, 36\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 12, 18, 36\\}\\)",
      "\\(\\{1, 2, 3, 4, 9, 12, 18, 36\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(36\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(36\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(15\\)?",
    "options": [
      "\\(\\{3, 5\\}\\)",
      "\\(\\{1, 3, 5, 15\\}\\)",
      "\\(\\{1, 3, 15\\}\\)",
      "\\(\\{1, 5, 15\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(15\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 3, 5, 15\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(15\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 3, 5, 15\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(28\\)?",
    "options": [
      "\\(\\{1, 2, 4, 7, 8, 14, 28\\}\\)",
      "\\(\\{1, 2, 4, 7, 14, 28\\}\\)",
      "\\(\\{1, 2, 7, 14, 28\\}\\)",
      "\\(\\{1, 2, 4, 14, 28\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(28\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 7, 14, 28\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(28\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 7, 14, 28\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(19\\)?",
    "options": [
      "\\(\\{1, 9, 19\\}\\)",
      "\\(\\{19\\}\\)",
      "\\(\\{1, 19\\}\\)",
      "\\(\\{1, 3, 19\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(19\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 19\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(19\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 19\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(27\\)?",
    "options": [
      "\\(\\{1, 3, 7, 9, 27\\}\\)",
      "\\(\\{1, 3, 9, 27\\}\\)",
      "\\(\\{1, 3, 27\\}\\)",
      "\\(\\{1, 9, 27\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(27\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 3, 9, 27\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(27\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 3, 9, 27\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(64\\)?",
    "options": [
      "\\(\\{1, 2, 4, 8, 16, 32, 64\\}\\)",
      "\\(\\{1, 2, 4, 8, 12, 16, 32, 64\\}\\)",
      "\\(\\{1, 2, 4, 8, 32, 64\\}\\)",
      "\\(\\{1, 2, 8, 16, 32, 64\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(64\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 8, 16, 32, 64\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(64\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 8, 16, 32, 64\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(40\\)?",
    "options": [
      "\\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 12, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 10, 20, 40\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(40\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(40\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(50\\)?",
    "options": [
      "\\(\\{1, 2, 5, 25, 50\\}\\)",
      "\\(\\{1, 2, 10, 25, 50\\}\\)",
      "\\(\\{1, 2, 4, 5, 10, 25, 50\\}\\)",
      "\\(\\{1, 2, 5, 10, 25, 50\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(50\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 5, 10, 25, 50\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(50\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 5, 10, 25, 50\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "From the list \\(\\{8, 12, 14, 25, 30, 41, 48, 55, 60\\}\\), which numbers have \\(4\\) as a factor?",
    "options": [
      "\\(\\{8, 12, 30, 48, 60\\}\\)",
      "\\(\\{12, 48, 60\\}\\)",
      "\\(\\{8, 12, 48, 60\\}\\)",
      "\\(\\{8, 12, 14, 48\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Check divisibility by 4 A number has \\(4\\) as a factor if it can be divided evenly by \\(4\\). Step 2: Test each number \\(8 \\div 4 = 2\\) \\(12 \\div 4 = 3\\) \\(48 \\div 4 = 12\\) \\(60 \\div 4 = 15\\) The others (\\(14, 25, 30, 41, 55\\)) leave a remainder.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check divisibility by 4. A number has \\(4\\) as a factor if it can be divided evenly by \\(4\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test each number. \\(8 \\div 4 = 2\\)\\(12 \\div 4 = 3\\)\\(48 \\div 4 = 12\\)\\(60 \\div 4 = 15\\)The others (\\(14, 25, 30, 41, 55\\)) leave a remainder.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "From the list \\(\\{45, 135, 160, 210, 225, 250, 300\\}\\), which numbers have \\(15\\) as a factor?",
    "options": [
      "\\(\\{45, 135, 160, 225, 300\\}\\)",
      "\\(\\{45, 135, 210, 225, 300\\}\\)",
      "\\(\\{45, 210, 225, 300\\}\\)",
      "\\(\\{135, 210, 225, 250, 300\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Divide by 15 Test each number. Also note that numbers divisible by \\(15\\) must be divisible by both \\(3\\) and \\(5\\). Step 2: Filter the list \\(45, 135, 210, 225, 300\\) are all multiples of \\(15\\). \\(160\\) and \\(250\\) are not divisible by \\(3\\), so they are not multiples of \\(15\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 15. Test each number. Also note that numbers divisible by \\(15\\) must be divisible by both \\(3\\) and \\(5\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Filter the list. \\(45, 135, 210, 225, 300\\) are all multiples of \\(15\\). \\(160\\) and \\(250\\) are not divisible by \\(3\\), so they are not multiples of \\(15\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(7\\)?",
    "options": [
      "\\(1, 7, 14, 21, 28\\)",
      "\\(14, 21, 28, 35, 42\\)",
      "\\(7, 14, 21, 28, 36\\)",
      "\\(7, 14, 21, 28, 35\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(7 \\times 1 = 7\\) \\(7 \\times 2 = 14\\) \\(7 \\times 3 = 21\\) \\(7 \\times 4 = 28\\) \\(7 \\times 5 = 35\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(7 \\times 1 = 7\\)\\(7 \\times 2 = 14\\)\\(7 \\times 3 = 21\\)\\(7 \\times 4 = 28\\)\\(7 \\times 5 = 35\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(9\\)?",
    "options": [
      "\\(9, 18, 28, 36, 45\\)",
      "\\(18, 27, 36, 45, 54\\)",
      "\\(9, 18, 27, 36, 45\\)",
      "\\(1, 9, 18, 27, 36\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(9 \\times 1 = 9\\) \\(9 \\times 2 = 18\\) \\(9 \\times 3 = 27\\) \\(9 \\times 4 = 36\\) \\(9 \\times 5 = 45\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(9 \\times 1 = 9\\)\\(9 \\times 2 = 18\\)\\(9 \\times 3 = 27\\)\\(9 \\times 4 = 36\\)\\(9 \\times 5 = 45\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(12\\)?",
    "options": [
      "\\(1, 12, 24, 36, 48\\)",
      "\\(12, 24, 38, 48, 60\\)",
      "\\(24, 36, 48, 60, 72\\)",
      "\\(12, 24, 36, 48, 60\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(12 \\times 1 = 12\\) \\(12 \\times 2 = 24\\) \\(12 \\times 3 = 36\\) \\(12 \\times 4 = 48\\) \\(12 \\times 5 = 60\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(12 \\times 1 = 12\\)\\(12 \\times 2 = 24\\)\\(12 \\times 3 = 36\\)\\(12 \\times 4 = 48\\)\\(12 \\times 5 = 60\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(14\\)?",
    "options": [
      "\\(14, 28, 44, 56, 70\\)",
      "\\(14, 28, 42, 56, 70\\)",
      "\\(28, 42, 56, 70, 84\\)",
      "\\(14, 24, 34, 44, 54\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(14 \\times 1 = 14\\) \\(14 \\times 2 = 28\\) \\(14 \\times 3 = 42\\) \\(14 \\times 4 = 56\\) \\(14 \\times 5 = 70\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(14 \\times 1 = 14\\)\\(14 \\times 2 = 28\\)\\(14 \\times 3 = 42\\)\\(14 \\times 4 = 56\\)\\(14 \\times 5 = 70\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(16\\)?",
    "options": [
      "\\(16, 32, 46, 64, 80\\)",
      "\\(16, 32, 48, 64, 80\\)",
      "\\(32, 48, 64, 80, 96\\)",
      "\\(1, 16, 32, 48, 64\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(16 \\times 1 = 16\\) \\(16 \\times 2 = 32\\) \\(16 \\times 3 = 48\\) \\(16 \\times 4 = 64\\) \\(16 \\times 5 = 80\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(16 \\times 1 = 16\\)\\(16 \\times 2 = 32\\)\\(16 \\times 3 = 48\\)\\(16 \\times 4 = 64\\)\\(16 \\times 5 = 80\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(21\\)?",
    "options": [
      "\\(42, 63, 84, 105, 126\\)",
      "\\(21, 42, 61, 84, 105\\)",
      "\\(21, 42, 63, 84, 105\\)",
      "\\(21, 41, 61, 81, 101\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(21 \\times 1 = 21\\) \\(21 \\times 2 = 42\\) \\(21 \\times 3 = 63\\) \\(21 \\times 4 = 84\\) \\(21 \\times 5 = 105\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(21 \\times 1 = 21\\)\\(21 \\times 2 = 42\\)\\(21 \\times 3 = 63\\)\\(21 \\times 4 = 84\\)\\(21 \\times 5 = 105\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following numbers are multiples of \\(13\\)? (\\(\\dots 39, 52, 70, 91, 115, 130 \\dots\\))",
    "options": [
      "\\(\\{39, 52, 91, 130\\}\\)",
      "\\(\\{52, 91, 115, 130\\}\\)",
      "\\(\\{39, 70, 91, 130\\}\\)",
      "\\(\\{39, 52, 70, 91\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check divisibility by 13 \\(39 \\div 13 = 3\\) \\(52 \\div 13 = 4\\) \\(91 \\div 13 = 7\\) \\(130 \\div 13 = 10\\) \\(70\\) and \\(115\\) do not divide evenly by \\(13\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check divisibility by 13. \\(39 \\div 13 = 3\\)\\(52 \\div 13 = 4\\)\\(91 \\div 13 = 7\\)\\(130 \\div 13 = 10\\)\\(70\\) and \\(115\\) do not divide evenly by \\(13\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of these numbers have \\(60\\) as a multiple? (\\(\\dots 4, 5, 7, 8, 10, 12, 14, 15, 18, 20, 24, 30 \\dots\\))",
    "options": [
      "\\(\\{4, 5, 8, 10, 12, 15, 20, 30\\}\\)",
      "\\(\\{4, 5, 10, 12, 14, 15, 20, 30\\}\\)",
      "\\(\\{4, 5, 10, 12, 15, 20, 30\\}\\)",
      "\\(\\{5, 10, 15, 20, 24, 30\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Reword the question Asking which numbers have \\(60\\) as a multiple is the same as asking which numbers are factors of \\(60\\). Step 2: Identify factors of 60 From the given list, \\(4, 5, 10, 12, 15, 20\\), and \\(30\\) divide evenly into \\(60\\). Numbers like \\(7, 8, 14, 18, 24\\) do not.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Reword the question. Asking which numbers have \\(60\\) as a multiple is the same as asking which numbers are factors of \\(60\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Identify factors of 60. From the given list, \\(4, 5, 10, 12, 15, 20\\), and \\(30\\) divide evenly into \\(60\\). Numbers like \\(7, 8, 14, 18, 24\\) do not.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(288\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(6 \\times 48\\)",
      "\\(9 \\times 32\\)",
      "\\(12 \\times 24\\)",
      "\\(8 \\times 36\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Check the conditions The product must equal \\(288\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(12 \\times 24\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(288\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(12 \\times 24\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(450\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(10 \\times 45\\)",
      "\\(5 \\times 90\\)",
      "\\(9 \\times 50\\)",
      "\\(15 \\times 30\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Check the conditions The product must equal \\(450\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(15 \\times 30\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(450\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(15 \\times 30\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(169\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(16 \\times 9\\)",
      "\\(13 \\times 13\\)",
      "\\(1 \\times 169\\)",
      "\\(169 \\times 1\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Check the conditions The product must equal \\(169\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(13 \\times 13\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(169\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(13 \\times 13\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(600\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(8 \\times 75\\)",
      "\\(15 \\times 40\\)",
      "\\(10 \\times 60\\)",
      "\\(6 \\times 100\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Check the conditions The product must equal \\(600\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(15 \\times 40\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(600\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(15 \\times 40\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(289\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(1 \\times 289\\)",
      "\\(13 \\times 23\\)",
      "\\(17 \\times 17\\)",
      "\\(19 \\times 19\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Check the conditions The product must equal \\(289\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(17 \\times 17\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(289\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(17 \\times 17\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(360\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(8 \\times 45\\)",
      "\\(9 \\times 40\\)",
      "\\(10 \\times 36\\)",
      "\\(12 \\times 30\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Check the conditions The product must equal \\(360\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(12 \\times 30\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(360\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(12 \\times 30\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "What are the common factors of \\(16\\) and \\(24\\)?",
    "options": [
      "\\(\\{1, 2, 3, 4, 8\\}\\)",
      "\\(\\{1, 2, 4, 8\\}\\)",
      "\\(\\{1, 2, 4, 8, 16\\}\\)",
      "\\(\\{1, 2, 4, 6, 8\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: List factors of 16 \\(\\{1, 2, 4, 8, 16\\}\\) Step 2: List factors of 24 \\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\) Step 3: Find common numbers The numbers present in both lists are \\(\\{1, 2, 4, 8\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "List factors of 16. \\(\\{1, 2, 4, 8, 16\\}\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "List factors of 24. \\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find common numbers. The numbers present in both lists are \\(\\{1, 2, 4, 8\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists the common multiples of \\(4\\) and \\(6\\) that are strictly less than \\(40\\)?",
    "options": [
      "\\(\\{24, 36\\}\\)",
      "\\(\\{12, 24, 36\\}\\)",
      "\\(\\{12, 24, 30, 36\\}\\)",
      "\\(\\{12, 18, 24, 36\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Find the Lowest Common Multiple (LCM) The multiples of \\(4\\) are \\(4, 8, 12, 16 \\dots\\) The multiples of \\(6\\) are \\(6, 12, 18 \\dots\\) The LCM is \\(12\\). Step 2: List multiples of the LCM The common multiples will be all multiples of \\(12\\): \\(12, 24, 36, 48 \\dots\\) Those less than \\(40\\) are \\(\\{12, 24, 36\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find the Lowest Common Multiple (LCM). The multiples of \\(4\\) are \\(4, 8, 12, 16 \\dots\\)The multiples of \\(6\\) are \\(6, 12, 18 \\dots\\)The LCM is \\(12\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "List multiples of the LCM. The common multiples will be all multiples of \\(12\\): \\(12, 24, 36, 48 \\dots\\)Those less than \\(40\\) are \\(\\{12, 24, 36\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the multiple of \\(8\\) that is closest to \\(50\\).",
    "options": [
      "\\(42\\)",
      "\\(50\\)",
      "\\(48\\)",
      "\\(56\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Divide by 8 to find bounds \\(50 \\div 8\\) gives a number between two integers. Step 2: Test the multiples The nearest multiples of \\(8\\) are \\(48\\) and \\(56\\). Distance to \\(48\\) is \\(|50 - 48|\\). Distance to \\(56\\) is \\(|50 - 56|\\). \\(48\\) is closer.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 8 to find bounds. \\(50 \\div 8\\) gives a number between two integers.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the multiples. The nearest multiples of \\(8\\) are \\(48\\) and \\(56\\).Distance to \\(48\\) is \\(|50 - 48|\\).Distance to \\(56\\) is \\(|50 - 56|\\).\\(48\\) is closer.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the multiple of \\(8\\) that is closest to \\(110\\).",
    "options": [
      "\\(120\\)",
      "\\(104\\)",
      "\\(112\\)",
      "\\(108\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Divide by 8 to find bounds \\(110 \\div 8\\) gives a number between two integers. Step 2: Test the multiples The nearest multiples of \\(8\\) are \\(112\\) and \\(104\\). Distance to \\(112\\) is \\(|110 - 112|\\). Distance to \\(104\\) is \\(|110 - 104|\\). \\(112\\) is closer.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 8 to find bounds. \\(110 \\div 8\\) gives a number between two integers.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the multiples. The nearest multiples of \\(8\\) are \\(112\\) and \\(104\\).Distance to \\(112\\) is \\(|110 - 112|\\).Distance to \\(104\\) is \\(|110 - 104|\\).\\(112\\) is closer.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the multiple of \\(8\\) that is closest to \\(210\\).",
    "options": [
      "\\(208\\)",
      "\\(216\\)",
      "\\(200\\)",
      "\\(210\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Divide by 8 to find bounds \\(210 \\div 8\\) gives a number between two integers. Step 2: Test the multiples The nearest multiples of \\(8\\) are \\(208\\) and \\(216\\). Distance to \\(208\\) is \\(|210 - 208|\\). Distance to \\(216\\) is \\(|210 - 216|\\). \\(208\\) is closer.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 8 to find bounds. \\(210 \\div 8\\) gives a number between two integers.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the multiples. The nearest multiples of \\(8\\) are \\(208\\) and \\(216\\).Distance to \\(208\\) is \\(|210 - 208|\\).Distance to \\(216\\) is \\(|210 - 216|\\).\\(208\\) is closer.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the multiple of \\(8\\) that is closest to \\(315\\).",
    "options": [
      "\\(318\\)",
      "\\(312\\)",
      "\\(320\\)",
      "\\(304\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Divide by 8 to find bounds \\(315 \\div 8\\) gives a number between two integers. Step 2: Test the multiples The nearest multiples of \\(8\\) are \\(312\\) and \\(320\\). Distance to \\(312\\) is \\(|315 - 312|\\). Distance to \\(320\\) is \\(|315 - 320|\\). \\(312\\) is closer.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 8 to find bounds. \\(315 \\div 8\\) gives a number between two integers.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the multiples. The nearest multiples of \\(8\\) are \\(312\\) and \\(320\\).Distance to \\(312\\) is \\(|315 - 312|\\).Distance to \\(320\\) is \\(|315 - 320|\\).\\(312\\) is closer.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(80\\).",
    "options": [
      "\\(96\\)",
      "\\(72\\)",
      "\\(84\\)",
      "\\(80\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(80\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(84\\) and \\(72\\). The absolute difference between \\(84\\) and \\(80\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(80\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(84\\) and \\(72\\). The absolute difference between \\(84\\) and \\(80\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(160\\).",
    "options": [
      "\\(156\\)",
      "\\(168\\)",
      "\\(144\\)",
      "\\(162\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(160\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(156\\) and \\(168\\). The absolute difference between \\(156\\) and \\(160\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(160\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(156\\) and \\(168\\). The absolute difference between \\(156\\) and \\(160\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(130\\).",
    "options": [
      "\\(144\\)",
      "\\(132\\)",
      "\\(120\\)",
      "\\(128\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(130\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(132\\) and \\(120\\). The absolute difference between \\(132\\) and \\(130\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(130\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(132\\) and \\(120\\). The absolute difference between \\(132\\) and \\(130\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(70\\).",
    "options": [
      "\\(60\\)",
      "\\(84\\)",
      "\\(72\\)",
      "\\(68\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(70\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(72\\) and \\(60\\). The absolute difference between \\(72\\) and \\(70\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(70\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(72\\) and \\(60\\). The absolute difference between \\(72\\) and \\(70\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(400\\).",
    "options": [
      "\\(396\\)",
      "\\(408\\)",
      "\\(384\\)",
      "\\(402\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(400\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(396\\) and \\(408\\). The absolute difference between \\(396\\) and \\(400\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(400\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(396\\) and \\(408\\). The absolute difference between \\(396\\) and \\(400\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(800\\).",
    "options": [
      "\\(804\\)",
      "\\(792\\)",
      "\\(816\\)",
      "\\(800\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(800\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(804\\) and \\(792\\). The absolute difference between \\(804\\) and \\(800\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(800\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(804\\) and \\(792\\). The absolute difference between \\(804\\) and \\(800\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "When \\(40\\) is divided by each of the whole numbers from \\(1\\) to \\(5\\), which of these divisors leaves a remainder of \\(0\\)?",
    "options": [
      "\\(\\{1, 2, 4, 5\\}\\)",
      "\\(\\{1, 2, 3, 4, 5\\}\\)",
      "\\(\\{1, 2, 5\\}\\)",
      "\\(\\{2, 4, 5\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check each division \\(40 \\div 1 = 40\\) (R0) \\(40 \\div 2 = 20\\) (R0) \\(40 \\div 3 = 13\\) (R1) \\(40 \\div 4 = 10\\) (R0) \\(40 \\div 5 = 8\\) (R0) Step 2: Conclusion The divisors leaving remainder \\(0\\) are \\(1, 2, 4, 5\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check each division. \\(40 \\div 1 = 40\\) (R0)\\(40 \\div 2 = 20\\) (R0)\\(40 \\div 3 = 13\\) (R1)\\(40 \\div 4 = 10\\) (R0)\\(40 \\div 5 = 8\\) (R0)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Conclusion. The divisors leaving remainder \\(0\\) are \\(1, 2, 4, 5\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write down all the factors of \\(40\\).",
    "options": [
      "\\(\\{1, 2, 4, 5, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 5, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 8, 10, 20, 40\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Pair the factors \\(1 \\times 40 = 40\\) \\(2 \\times 20 = 40\\) \\(4 \\times 10 = 40\\) \\(5 \\times 8 = 40\\) Step 2: Combine in order \\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Pair the factors. \\(1 \\times 40 = 40\\)\\(2 \\times 20 = 40\\)\\(4 \\times 10 = 40\\)\\(5 \\times 8 = 40\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Combine in order. \\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "When \\(45\\) is divided by each of the whole numbers from \\(1\\) to \\(6\\), which of these divisors leaves a remainder of \\(0\\)?",
    "options": [
      "\\(\\{1, 3, 5\\}\\)",
      "\\(\\{3, 5\\}\\)",
      "\\(\\{1, 3, 5, 6\\}\\)",
      "\\(\\{1, 5\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check division \\(45\\) is divisible by \\(1\\). It is not divisible by \\(2\\) (odd number). \\(4+5=9\\), so it is divisible by \\(3\\). It ends in \\(5\\), so it is divisible by \\(5\\). It is not divisible by \\(4\\) or \\(6\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check division. \\(45\\) is divisible by \\(1\\). It is not divisible by \\(2\\) (odd number). \\(4+5=9\\), so it is divisible by \\(3\\). It ends in \\(5\\), so it is divisible by \\(5\\). It is not divisible by \\(4\\) or \\(6\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write down all the factors of \\(45\\).",
    "options": [
      "\\(\\{1, 5, 9, 15, 45\\}\\)",
      "\\(\\{1, 3, 5, 9, 15, 45\\}\\)",
      "\\(\\{1, 3, 5, 15, 45\\}\\)",
      "\\(\\{1, 3, 9, 15, 45\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Pair the factors \\(1 \\times 45 = 45\\) \\(3 \\times 15 = 45\\) \\(5 \\times 9 = 45\\) Step 2: Combine in order \\(\\{1, 3, 5, 9, 15, 45\\}\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Pair the factors. \\(1 \\times 45 = 45\\)\\(3 \\times 15 = 45\\)\\(5 \\times 9 = 45\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Combine in order. \\(\\{1, 3, 5, 9, 15, 45\\}\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following best explains why the number \\(1\\) is a factor of every whole number \\(N\\)?",
    "options": [
      "Because \\(1\\) is an odd number, and odd numbers divide everything.",
      "Because dividing any whole number \\(N\\) by \\(1\\) results in \\(N\\) with a remainder of zero (\\(N = 1 \\times N\\)).",
      "Because any number multiplied by \\(1\\) becomes \\(1\\).",
      "Because \\(1\\) is the smallest whole number, so it fits inside all other numbers."
    ],
    "answer": 1,
    "solution": "Step 1: Definition of a factor A factor divides exactly into another number with no remainder. Step 2: Apply to 1 \\(N \\div 1 = N\\) exactly, meaning \\(1\\) is always a factor of \\(N\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Definition of a factor. A factor divides exactly into another number with no remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Apply to 1. \\(N \\div 1 = N\\) exactly, meaning \\(1\\) is always a factor of \\(N\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following best explains why any non-zero whole number \\(N\\) is a factor of \\(0\\)?",
    "options": [
      "Because all non-zero numbers are multiples of \\(0\\).",
      "Because dividing by \\(0\\) is always zero.",
      "Because \\(0\\) is the smallest whole number.",
      "Because \\(0\\) can be written as \\(N \\times 0\\), leaving no remainder when divided by \\(N\\)."
    ],
    "answer": 3,
    "solution": "Step 1: Definition of a factor If \\(A\\) is a factor of \\(B\\), then \\(A \\times k = B\\) for some whole number \\(k\\). Step 2: Apply to zero \\(N \\times 0 = 0\\). This means \\(N\\) divides exactly into \\(0\\) with a quotient of \\(0\\) and no remainder.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Definition of a factor. If \\(A\\) is a factor of \\(B\\), then \\(A \\times k = B\\) for some whole number \\(k\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Apply to zero. \\(N \\times 0 = 0\\). This means \\(N\\) divides exactly into \\(0\\) with a quotient of \\(0\\) and no remainder.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "What are all the factors of \\(1\\)?",
    "options": [
      "\\(\\{1\\}\\)",
      "None",
      "\\(\\{1, 2\\}\\)",
      "\\(\\{0, 1\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Find numbers that multiply to 1 The only whole numbers that multiply to \\(1\\) are \\(1 \\times 1\\). Step 2: Compile the list The only factor is \\(1\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find numbers that multiply to 1. The only whole numbers that multiply to \\(1\\) are \\(1 \\times 1\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. The only factor is \\(1\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following best explains why zero is a multiple of every whole number \\(N\\)?",
    "options": [
      "Because you cannot divide by zero.",
      "Because zero is less than \\(N\\).",
      "Because zero is an even number.",
      "Because any whole number \\(N\\) multiplied by \\(0\\) yields \\(0\\)."
    ],
    "answer": 3,
    "solution": "Step 1: Definition of a multiple A multiple of \\(N\\) is formed by multiplying \\(N\\) by any whole number. Step 2: Apply to zero Since \\(N \\times 0 = 0\\), \\(0\\) fits the definition of being a multiple of \\(N\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Definition of a multiple. A multiple of \\(N\\) is formed by multiplying \\(N\\) by any whole number.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Apply to zero. Since \\(N \\times 0 = 0\\), \\(0\\) fits the definition of being a multiple of \\(N\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "A \"perfect number\" is a number that equals the sum of its own factors (excluding itself). The first perfect number is \\(6\\) (since \\(1+2+3=6\\)). The second perfect number is \\(28\\). Which of the following correctly shows that \\(28\\) is a perfect number?",
    "options": [
      "The multiples of \\(28\\) are \\(1, 2, 4, 7,\\) and \\(14\\).",
      "The factors of \\(28\\) (excluding \\(28\\)) are \\(1, 2, 4, 14,\\) and \\(28\\), and their sum is \\(49\\).",
      "The prime factors of \\(28\\) are \\(2\\) and \\(7\\), and \\(2 \\times 14 = 28\\).",
      "The factors of \\(28\\) (excluding \\(28\\)) are \\(1, 2, 4, 7,\\) and \\(14\\), and their sum is \\(28\\)."
    ],
    "answer": 3,
    "solution": "Step 1: List the factors of 28 \\(\\{1, 2, 4, 7, 14, 28\\}\\). Step 2: Exclude the number itself The \"proper factors\" are \\(1, 2, 4, 7, 14\\). Step 3: Sum them up \\(1 + 2 + 4 + 7 + 14 = 28\\). Because the sum equals the number, \\(28\\) is a perfect number.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "List the factors of 28. \\(\\{1, 2, 4, 7, 14, 28\\}\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Exclude the number itself. The \"proper factors\" are \\(1, 2, 4, 7, 14\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Sum them up. \\(1 + 2 + 4 + 7 + 14 = 28\\). Because the sum equals the number, \\(28\\) is a perfect number.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "The next perfect number after \\(28\\) is \\(496\\). Which of the following represents the sum of the proper factors (factors excluding the number itself) of \\(496\\)?",
    "options": [
      "\\(1 + 3 + 9 + 27 + 81 + 124 + 251 = 496\\)",
      "\\(1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496\\)",
      "\\(2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 495\\)",
      "\\(1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + 256 = 496\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Find factors of 496 Dividing by \\(2\\): \\(248\\). Dividing by \\(2\\): \\(124\\). By \\(2\\): \\(62\\). By \\(2\\): \\(31\\) (prime). Step 2: List all proper factors \\(1, 2, 4, 8, 16, 31, 62, 124, 248\\). Step 3: Verify the sum \\(1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find factors of 496. Dividing by \\(2\\): \\(248\\). Dividing by \\(2\\): \\(124\\). By \\(2\\): \\(62\\). By \\(2\\): \\(31\\) (prime).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "List all proper factors. \\(1, 2, 4, 8, 16, 31, 62, 124, 248\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Verify the sum. \\(1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Why does the number \\(36\\) have an odd number of factors?",
    "options": [
      "Because its digits (\\(3+6\\)) add up to \\(9\\), which is an odd number.",
      "Because it has only prime factors.",
      "Because it is an even number, and all even numbers have an odd number of factors.",
      "Because it is a perfect square, so one of its factor pairs consists of a number multiplied by itself (\\(6 \\times 6\\)), which is counted only once."
    ],
    "answer": 3,
    "solution": "Step 1: List the factors of 36 \\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\). There are \\(9\\) factors (an odd amount). Step 2: Analyze the pairs \\(1 \\times 36\\) \\(2 \\times 18\\) \\(3 \\times 12\\) \\(4 \\times 9\\) \\(6 \\times 6\\) Because \\(6\\) is paired with itself, it does not contribute two distinct factors, leaving the total count odd.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "List the factors of 36. \\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\). There are \\(9\\) factors (an odd amount).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Analyze the pairs. \\(1 \\times 36\\)\\(2 \\times 18\\)\\(3 \\times 12\\)\\(4 \\times 9\\)\\(6 \\times 6\\)Because \\(6\\) is paired with itself, it does not contribute two distinct factors, leaving the total count odd.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "What is the next whole number after \\(36\\) to have an odd number of factors?",
    "options": [
      "\\(49\\)",
      "\\(40\\)",
      "\\(64\\)",
      "\\(38\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Understand the rule Only perfect squares have an odd number of factors. Step 2: Find the next perfect square \\(36\\) is \\(6 \\times 6\\). The next whole number squared is \\(7 \\times 7 = 49\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand the rule. Only perfect squares have an odd number of factors.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find the next perfect square. \\(36\\) is \\(6 \\times 6\\). The next whole number squared is \\(7 \\times 7 = 49\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "What is the largest two-digit number with an odd number of factors?",
    "options": [
      "\\(99\\)",
      "\\(96\\)",
      "\\(81\\)",
      "\\(100\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Apply the rule Numbers with an odd number of factors are perfect squares. Step 2: Find the largest two-digit perfect square \\(9^2 = 81\\). \\(10^2 = 100\\) (which has \\(3\\) digits). Therefore, \\(81\\) is the largest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Apply the rule. Numbers with an odd number of factors are perfect squares.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find the largest two-digit perfect square. \\(9^2 = 81\\).\\(10^2 = 100\\) (which has \\(3\\) digits).Therefore, \\(81\\) is the largest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(8\\)?",
    "options": [
      "\\(\\{2, 4, 8\\}\\)",
      "\\(\\{1, 2, 4\\}\\)",
      "\\(\\{1, 2, 4, 8\\}\\)",
      "\\(\\{1, 2, 3, 4, 8\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(8\\), the pairs of factors are what multiply to give \\(8\\). Listing them out gives \\(\\{1, 2, 4, 8\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(8\\), the pairs of factors are what multiply to give \\(8\\). Listing them out gives \\(\\{1, 2, 4, 8\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(18\\)?",
    "options": [
      "\\(\\{1, 2, 3, 9, 18\\}\\)",
      "\\(\\{1, 2, 4, 6, 9, 18\\}\\)",
      "\\(\\{2, 3, 6, 9\\}\\)",
      "\\(\\{1, 2, 3, 6, 9, 18\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(18\\), the pairs of factors are what multiply to give \\(18\\). Listing them out gives \\(\\{1, 2, 3, 6, 9, 18\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(18\\), the pairs of factors are what multiply to give \\(18\\). Listing them out gives \\(\\{1, 2, 3, 6, 9, 18\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(21\\)?",
    "options": [
      "\\(\\{3, 7, 21\\}\\)",
      "\\(\\{1, 2, 3, 7, 21\\}\\)",
      "\\(\\{1, 3, 21\\}\\)",
      "\\(\\{1, 3, 7, 21\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(21\\), the pairs of factors are what multiply to give \\(21\\). Listing them out gives \\(\\{1, 3, 7, 21\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(21\\), the pairs of factors are what multiply to give \\(21\\). Listing them out gives \\(\\{1, 3, 7, 21\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(20\\)?",
    "options": [
      "\\(\\{1, 2, 4, 10, 20\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 10, 20\\}\\)",
      "\\(\\{1, 2, 5, 10, 20\\}\\)",
      "\\(\\{1, 2, 4, 5, 10, 20\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(20\\), the pairs of factors are what multiply to give \\(20\\). Listing them out gives \\(\\{1, 2, 4, 5, 10, 20\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(20\\), the pairs of factors are what multiply to give \\(20\\). Listing them out gives \\(\\{1, 2, 4, 5, 10, 20\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists all the factors of \\(13\\)?",
    "options": [
      "\\(\\{1, 3, 13\\}\\)",
      "\\(\\{0, 1, 13\\}\\)",
      "\\(\\{13\\}\\)",
      "\\(\\{1, 13\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Understand factors A factor is a whole number that divides exactly into another number without leaving a remainder. Step 2: Find factor pairs For \\(13\\), the pairs of factors are what multiply to give \\(13\\). Listing them out gives \\(\\{1, 13\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand factors. A factor is a whole number that divides exactly into another number without leaving a remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find factor pairs. For \\(13\\), the pairs of factors are what multiply to give \\(13\\). Listing them out gives \\(\\{1, 13\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(10\\)?",
    "options": [
      "\\(\\{1, 5, 10\\}\\)",
      "\\(\\{1, 2, 5, 10\\}\\)",
      "\\(\\{2, 5\\}\\)",
      "\\(\\{1, 2, 10\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(10\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 5, 10\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 5, 10\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(16\\)?",
    "options": [
      "\\(\\{1, 2, 8, 16\\}\\)",
      "\\(\\{2, 4, 8\\}\\)",
      "\\(\\{1, 2, 4, 8, 16\\}\\)",
      "\\(\\{1, 2, 4, 6, 8, 16\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(16\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 8, 16\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(16\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 8, 16\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(17\\)?",
    "options": [
      "\\(\\{1, 17\\}\\)",
      "\\(\\{17\\}\\)",
      "\\(\\{1, 3, 17\\}\\)",
      "\\(\\{1, 7, 17\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(17\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 17\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(17\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 17\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(24\\)?",
    "options": [
      "\\(\\{1, 2, 4, 6, 8, 12, 24\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 12, 24\\}\\)",
      "\\(\\{1, 2, 3, 6, 8, 12, 24\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(24\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(24\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(36\\)?",
    "options": [
      "\\(\\{1, 2, 3, 4, 9, 12, 18, 36\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 8, 9, 12, 18, 36\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 12, 18, 36\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(36\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(36\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(15\\)?",
    "options": [
      "\\(\\{1, 5, 15\\}\\)",
      "\\(\\{3, 5\\}\\)",
      "\\(\\{1, 3, 5, 15\\}\\)",
      "\\(\\{1, 3, 15\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(15\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 3, 5, 15\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(15\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 3, 5, 15\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(28\\)?",
    "options": [
      "\\(\\{1, 2, 4, 7, 14, 28\\}\\)",
      "\\(\\{1, 2, 4, 14, 28\\}\\)",
      "\\(\\{1, 2, 7, 14, 28\\}\\)",
      "\\(\\{1, 2, 4, 7, 8, 14, 28\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(28\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 7, 14, 28\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(28\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 7, 14, 28\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(19\\)?",
    "options": [
      "\\(\\{1, 3, 19\\}\\)",
      "\\(\\{1, 9, 19\\}\\)",
      "\\(\\{1, 19\\}\\)",
      "\\(\\{19\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(19\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 19\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(19\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 19\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(27\\)?",
    "options": [
      "\\(\\{1, 3, 27\\}\\)",
      "\\(\\{1, 9, 27\\}\\)",
      "\\(\\{1, 3, 7, 9, 27\\}\\)",
      "\\(\\{1, 3, 9, 27\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(27\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 3, 9, 27\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(27\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 3, 9, 27\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(64\\)?",
    "options": [
      "\\(\\{1, 2, 4, 8, 16, 32, 64\\}\\)",
      "\\(\\{1, 2, 4, 8, 32, 64\\}\\)",
      "\\(\\{1, 2, 4, 8, 12, 16, 32, 64\\}\\)",
      "\\(\\{1, 2, 8, 16, 32, 64\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(64\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 8, 16, 32, 64\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(64\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 8, 16, 32, 64\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(40\\)?",
    "options": [
      "\\(\\{1, 2, 4, 5, 8, 12, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 10, 20, 40\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(40\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(40\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which list correctly identifies all the factors of \\(50\\)?",
    "options": [
      "\\(\\{1, 2, 4, 5, 10, 25, 50\\}\\)",
      "\\(\\{1, 2, 5, 25, 50\\}\\)",
      "\\(\\{1, 2, 10, 25, 50\\}\\)",
      "\\(\\{1, 2, 5, 10, 25, 50\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Use factor pairing Write pairs of numbers that multiply to \\(50\\). Step 2: Compile the list Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 5, 10, 25, 50\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Use factor pairing. Write pairs of numbers that multiply to \\(50\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. Combining all unique numbers from those pairs in ascending order gives \\(\\{1, 2, 5, 10, 25, 50\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "From the list \\(\\{8, 12, 14, 25, 30, 41, 48, 55, 60\\}\\), which numbers have \\(4\\) as a factor?",
    "options": [
      "\\(\\{8, 12, 30, 48, 60\\}\\)",
      "\\(\\{12, 48, 60\\}\\)",
      "\\(\\{8, 12, 48, 60\\}\\)",
      "\\(\\{8, 12, 14, 48\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Check divisibility by 4 A number has \\(4\\) as a factor if it can be divided evenly by \\(4\\). Step 2: Test each number \\(8 \\div 4 = 2\\) \\(12 \\div 4 = 3\\) \\(48 \\div 4 = 12\\) \\(60 \\div 4 = 15\\) The others (\\(14, 25, 30, 41, 55\\)) leave a remainder.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check divisibility by 4. A number has \\(4\\) as a factor if it can be divided evenly by \\(4\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test each number. \\(8 \\div 4 = 2\\)\\(12 \\div 4 = 3\\)\\(48 \\div 4 = 12\\)\\(60 \\div 4 = 15\\)The others (\\(14, 25, 30, 41, 55\\)) leave a remainder.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "From the list \\(\\{45, 135, 160, 210, 225, 250, 300\\}\\), which numbers have \\(15\\) as a factor?",
    "options": [
      "\\(\\{45, 210, 225, 300\\}\\)",
      "\\(\\{45, 135, 210, 225, 300\\}\\)",
      "\\(\\{45, 135, 160, 225, 300\\}\\)",
      "\\(\\{135, 210, 225, 250, 300\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Divide by 15 Test each number. Also note that numbers divisible by \\(15\\) must be divisible by both \\(3\\) and \\(5\\). Step 2: Filter the list \\(45, 135, 210, 225, 300\\) are all multiples of \\(15\\). \\(160\\) and \\(250\\) are not divisible by \\(3\\), so they are not multiples of \\(15\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 15. Test each number. Also note that numbers divisible by \\(15\\) must be divisible by both \\(3\\) and \\(5\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Filter the list. \\(45, 135, 210, 225, 300\\) are all multiples of \\(15\\). \\(160\\) and \\(250\\) are not divisible by \\(3\\), so they are not multiples of \\(15\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(7\\)?",
    "options": [
      "\\(7, 14, 21, 28, 36\\)",
      "\\(7, 14, 21, 28, 35\\)",
      "\\(1, 7, 14, 21, 28\\)",
      "\\(14, 21, 28, 35, 42\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(7 \\times 1 = 7\\) \\(7 \\times 2 = 14\\) \\(7 \\times 3 = 21\\) \\(7 \\times 4 = 28\\) \\(7 \\times 5 = 35\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(7 \\times 1 = 7\\)\\(7 \\times 2 = 14\\)\\(7 \\times 3 = 21\\)\\(7 \\times 4 = 28\\)\\(7 \\times 5 = 35\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(9\\)?",
    "options": [
      "\\(18, 27, 36, 45, 54\\)",
      "\\(1, 9, 18, 27, 36\\)",
      "\\(9, 18, 27, 36, 45\\)",
      "\\(9, 18, 28, 36, 45\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(9 \\times 1 = 9\\) \\(9 \\times 2 = 18\\) \\(9 \\times 3 = 27\\) \\(9 \\times 4 = 36\\) \\(9 \\times 5 = 45\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(9 \\times 1 = 9\\)\\(9 \\times 2 = 18\\)\\(9 \\times 3 = 27\\)\\(9 \\times 4 = 36\\)\\(9 \\times 5 = 45\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(12\\)?",
    "options": [
      "\\(1, 12, 24, 36, 48\\)",
      "\\(12, 24, 38, 48, 60\\)",
      "\\(12, 24, 36, 48, 60\\)",
      "\\(24, 36, 48, 60, 72\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(12 \\times 1 = 12\\) \\(12 \\times 2 = 24\\) \\(12 \\times 3 = 36\\) \\(12 \\times 4 = 48\\) \\(12 \\times 5 = 60\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(12 \\times 1 = 12\\)\\(12 \\times 2 = 24\\)\\(12 \\times 3 = 36\\)\\(12 \\times 4 = 48\\)\\(12 \\times 5 = 60\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(14\\)?",
    "options": [
      "\\(14, 28, 42, 56, 70\\)",
      "\\(14, 28, 44, 56, 70\\)",
      "\\(28, 42, 56, 70, 84\\)",
      "\\(14, 24, 34, 44, 54\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(14 \\times 1 = 14\\) \\(14 \\times 2 = 28\\) \\(14 \\times 3 = 42\\) \\(14 \\times 4 = 56\\) \\(14 \\times 5 = 70\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(14 \\times 1 = 14\\)\\(14 \\times 2 = 28\\)\\(14 \\times 3 = 42\\)\\(14 \\times 4 = 56\\)\\(14 \\times 5 = 70\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(16\\)?",
    "options": [
      "\\(1, 16, 32, 48, 64\\)",
      "\\(16, 32, 48, 64, 80\\)",
      "\\(32, 48, 64, 80, 96\\)",
      "\\(16, 32, 46, 64, 80\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(16 \\times 1 = 16\\) \\(16 \\times 2 = 32\\) \\(16 \\times 3 = 48\\) \\(16 \\times 4 = 64\\) \\(16 \\times 5 = 80\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(16 \\times 1 = 16\\)\\(16 \\times 2 = 32\\)\\(16 \\times 3 = 48\\)\\(16 \\times 4 = 64\\)\\(16 \\times 5 = 80\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following represents the first \\(5\\) non-zero multiples of \\(21\\)?",
    "options": [
      "\\(21, 42, 63, 84, 105\\)",
      "\\(21, 41, 61, 81, 101\\)",
      "\\(21, 42, 61, 84, 105\\)",
      "\\(42, 63, 84, 105, 126\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Understand multiples Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)). Step 2: Calculate the first 5 \\(21 \\times 1 = 21\\) \\(21 \\times 2 = 42\\) \\(21 \\times 3 = 63\\) \\(21 \\times 4 = 84\\) \\(21 \\times 5 = 105\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand multiples. Multiples of a number are found by multiplying it by integers (\\(1, 2, 3, \\dots\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the first 5. \\(21 \\times 1 = 21\\)\\(21 \\times 2 = 42\\)\\(21 \\times 3 = 63\\)\\(21 \\times 4 = 84\\)\\(21 \\times 5 = 105\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following numbers are multiples of \\(13\\)? (\\(\\dots 39, 52, 70, 91, 115, 130 \\dots\\))",
    "options": [
      "\\(\\{39, 52, 91, 130\\}\\)",
      "\\(\\{39, 52, 70, 91\\}\\)",
      "\\(\\{52, 91, 115, 130\\}\\)",
      "\\(\\{39, 70, 91, 130\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check divisibility by 13 \\(39 \\div 13 = 3\\) \\(52 \\div 13 = 4\\) \\(91 \\div 13 = 7\\) \\(130 \\div 13 = 10\\) \\(70\\) and \\(115\\) do not divide evenly by \\(13\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check divisibility by 13. \\(39 \\div 13 = 3\\)\\(52 \\div 13 = 4\\)\\(91 \\div 13 = 7\\)\\(130 \\div 13 = 10\\)\\(70\\) and \\(115\\) do not divide evenly by \\(13\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of these numbers have \\(60\\) as a multiple? (\\(\\dots 4, 5, 7, 8, 10, 12, 14, 15, 18, 20, 24, 30 \\dots\\))",
    "options": [
      "\\(\\{5, 10, 15, 20, 24, 30\\}\\)",
      "\\(\\{4, 5, 10, 12, 15, 20, 30\\}\\)",
      "\\(\\{4, 5, 8, 10, 12, 15, 20, 30\\}\\)",
      "\\(\\{4, 5, 10, 12, 14, 15, 20, 30\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Reword the question Asking which numbers have \\(60\\) as a multiple is the same as asking which numbers are factors of \\(60\\). Step 2: Identify factors of 60 From the given list, \\(4, 5, 10, 12, 15, 20\\), and \\(30\\) divide evenly into \\(60\\). Numbers like \\(7, 8, 14, 18, 24\\) do not.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Reword the question. Asking which numbers have \\(60\\) as a multiple is the same as asking which numbers are factors of \\(60\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Identify factors of 60. From the given list, \\(4, 5, 10, 12, 15, 20\\), and \\(30\\) divide evenly into \\(60\\). Numbers like \\(7, 8, 14, 18, 24\\) do not.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(288\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(12 \\times 24\\)",
      "\\(8 \\times 36\\)",
      "\\(9 \\times 32\\)",
      "\\(6 \\times 48\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check the conditions The product must equal \\(288\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(12 \\times 24\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(288\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(12 \\times 24\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(450\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(10 \\times 45\\)",
      "\\(15 \\times 30\\)",
      "\\(9 \\times 50\\)",
      "\\(5 \\times 90\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Check the conditions The product must equal \\(450\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(15 \\times 30\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(450\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(15 \\times 30\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(169\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(13 \\times 13\\)",
      "\\(1 \\times 169\\)",
      "\\(169 \\times 1\\)",
      "\\(16 \\times 9\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check the conditions The product must equal \\(169\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(13 \\times 13\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(169\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(13 \\times 13\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(600\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(8 \\times 75\\)",
      "\\(6 \\times 100\\)",
      "\\(15 \\times 40\\)",
      "\\(10 \\times 60\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Check the conditions The product must equal \\(600\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(15 \\times 40\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(600\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(15 \\times 40\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(289\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(19 \\times 19\\)",
      "\\(1 \\times 289\\)",
      "\\(17 \\times 17\\)",
      "\\(13 \\times 23\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Check the conditions The product must equal \\(289\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(17 \\times 17\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(289\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(17 \\times 17\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following is a correct expression of \\(360\\) as a product of two factors, both of which are strictly greater than \\(10\\)?",
    "options": [
      "\\(12 \\times 30\\)",
      "\\(9 \\times 40\\)",
      "\\(10 \\times 36\\)",
      "\\(8 \\times 45\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check the conditions The product must equal \\(360\\) and BOTH factors must be \\(> 10\\). Step 2: Evaluate options In \\(12 \\times 30\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check the conditions. The product must equal \\(360\\) and BOTH factors must be \\(> 10\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Evaluate options. In \\(12 \\times 30\\), both numbers are greater than \\(10\\). In the incorrect options, at least one factor is \\(10\\) or smaller (or the math is incorrect).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "What are the common factors of \\(16\\) and \\(24\\)?",
    "options": [
      "\\(\\{1, 2, 4, 6, 8\\}\\)",
      "\\(\\{1, 2, 3, 4, 8\\}\\)",
      "\\(\\{1, 2, 4, 8\\}\\)",
      "\\(\\{1, 2, 4, 8, 16\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: List factors of 16 \\(\\{1, 2, 4, 8, 16\\}\\) Step 2: List factors of 24 \\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\) Step 3: Find common numbers The numbers present in both lists are \\(\\{1, 2, 4, 8\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "List factors of 16. \\(\\{1, 2, 4, 8, 16\\}\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "List factors of 24. \\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find common numbers. The numbers present in both lists are \\(\\{1, 2, 4, 8\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists the common multiples of \\(4\\) and \\(6\\) that are strictly less than \\(40\\)?",
    "options": [
      "\\(\\{12, 24, 30, 36\\}\\)",
      "\\(\\{24, 36\\}\\)",
      "\\(\\{12, 18, 24, 36\\}\\)",
      "\\(\\{12, 24, 36\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Find the Lowest Common Multiple (LCM) The multiples of \\(4\\) are \\(4, 8, 12, 16 \\dots\\) The multiples of \\(6\\) are \\(6, 12, 18 \\dots\\) The LCM is \\(12\\). Step 2: List multiples of the LCM The common multiples will be all multiples of \\(12\\): \\(12, 24, 36, 48 \\dots\\) Those less than \\(40\\) are \\(\\{12, 24, 36\\}\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find the Lowest Common Multiple (LCM). The multiples of \\(4\\) are \\(4, 8, 12, 16 \\dots\\)The multiples of \\(6\\) are \\(6, 12, 18 \\dots\\)The LCM is \\(12\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "List multiples of the LCM. The common multiples will be all multiples of \\(12\\): \\(12, 24, 36, 48 \\dots\\)Those less than \\(40\\) are \\(\\{12, 24, 36\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the multiple of \\(8\\) that is closest to \\(50\\).",
    "options": [
      "\\(48\\)",
      "\\(42\\)",
      "\\(56\\)",
      "\\(50\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Divide by 8 to find bounds \\(50 \\div 8\\) gives a number between two integers. Step 2: Test the multiples The nearest multiples of \\(8\\) are \\(48\\) and \\(56\\). Distance to \\(48\\) is \\(|50 - 48|\\). Distance to \\(56\\) is \\(|50 - 56|\\). \\(48\\) is closer.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 8 to find bounds. \\(50 \\div 8\\) gives a number between two integers.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the multiples. The nearest multiples of \\(8\\) are \\(48\\) and \\(56\\).Distance to \\(48\\) is \\(|50 - 48|\\).Distance to \\(56\\) is \\(|50 - 56|\\).\\(48\\) is closer.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the multiple of \\(8\\) that is closest to \\(110\\).",
    "options": [
      "\\(112\\)",
      "\\(108\\)",
      "\\(104\\)",
      "\\(120\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Divide by 8 to find bounds \\(110 \\div 8\\) gives a number between two integers. Step 2: Test the multiples The nearest multiples of \\(8\\) are \\(112\\) and \\(104\\). Distance to \\(112\\) is \\(|110 - 112|\\). Distance to \\(104\\) is \\(|110 - 104|\\). \\(112\\) is closer.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 8 to find bounds. \\(110 \\div 8\\) gives a number between two integers.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the multiples. The nearest multiples of \\(8\\) are \\(112\\) and \\(104\\).Distance to \\(112\\) is \\(|110 - 112|\\).Distance to \\(104\\) is \\(|110 - 104|\\).\\(112\\) is closer.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the multiple of \\(8\\) that is closest to \\(210\\).",
    "options": [
      "\\(200\\)",
      "\\(208\\)",
      "\\(210\\)",
      "\\(216\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Divide by 8 to find bounds \\(210 \\div 8\\) gives a number between two integers. Step 2: Test the multiples The nearest multiples of \\(8\\) are \\(208\\) and \\(216\\). Distance to \\(208\\) is \\(|210 - 208|\\). Distance to \\(216\\) is \\(|210 - 216|\\). \\(208\\) is closer.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 8 to find bounds. \\(210 \\div 8\\) gives a number between two integers.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the multiples. The nearest multiples of \\(8\\) are \\(208\\) and \\(216\\).Distance to \\(208\\) is \\(|210 - 208|\\).Distance to \\(216\\) is \\(|210 - 216|\\).\\(208\\) is closer.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the multiple of \\(8\\) that is closest to \\(315\\).",
    "options": [
      "\\(304\\)",
      "\\(318\\)",
      "\\(320\\)",
      "\\(312\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Divide by 8 to find bounds \\(315 \\div 8\\) gives a number between two integers. Step 2: Test the multiples The nearest multiples of \\(8\\) are \\(312\\) and \\(320\\). Distance to \\(312\\) is \\(|315 - 312|\\). Distance to \\(320\\) is \\(|315 - 320|\\). \\(312\\) is closer.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Divide by 8 to find bounds. \\(315 \\div 8\\) gives a number between two integers.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the multiples. The nearest multiples of \\(8\\) are \\(312\\) and \\(320\\).Distance to \\(312\\) is \\(|315 - 312|\\).Distance to \\(320\\) is \\(|315 - 320|\\).\\(312\\) is closer.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(80\\).",
    "options": [
      "\\(80\\)",
      "\\(72\\)",
      "\\(84\\)",
      "\\(96\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(80\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(84\\) and \\(72\\). The absolute difference between \\(84\\) and \\(80\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(80\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(84\\) and \\(72\\). The absolute difference between \\(84\\) and \\(80\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(160\\).",
    "options": [
      "\\(156\\)",
      "\\(162\\)",
      "\\(144\\)",
      "\\(168\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(160\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(156\\) and \\(168\\). The absolute difference between \\(156\\) and \\(160\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(160\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(156\\) and \\(168\\). The absolute difference between \\(156\\) and \\(160\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(130\\).",
    "options": [
      "\\(128\\)",
      "\\(144\\)",
      "\\(120\\)",
      "\\(132\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(130\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(132\\) and \\(120\\). The absolute difference between \\(132\\) and \\(130\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(130\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(132\\) and \\(120\\). The absolute difference between \\(132\\) and \\(130\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(70\\).",
    "options": [
      "\\(60\\)",
      "\\(84\\)",
      "\\(68\\)",
      "\\(72\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(70\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(72\\) and \\(60\\). The absolute difference between \\(72\\) and \\(70\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(70\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(72\\) and \\(60\\). The absolute difference between \\(72\\) and \\(70\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(400\\).",
    "options": [
      "\\(408\\)",
      "\\(384\\)",
      "\\(396\\)",
      "\\(402\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(400\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(396\\) and \\(408\\). The absolute difference between \\(396\\) and \\(400\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(400\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(396\\) and \\(408\\). The absolute difference between \\(396\\) and \\(400\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the number that is divisible by \\(12\\) and closest to \\(800\\).",
    "options": [
      "\\(792\\)",
      "\\(816\\)",
      "\\(800\\)",
      "\\(804\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Find surrounding multiples of 12 Divide \\(800\\) by \\(12\\) to locate the nearest multiples. Step 2: Calculate distances The closest multiples are \\(804\\) and \\(792\\). The absolute difference between \\(804\\) and \\(800\\) is the smallest.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find surrounding multiples of 12. Divide \\(800\\) by \\(12\\) to locate the nearest multiples.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate distances. The closest multiples are \\(804\\) and \\(792\\). The absolute difference between \\(804\\) and \\(800\\) is the smallest.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "When \\(40\\) is divided by each of the whole numbers from \\(1\\) to \\(5\\), which of these divisors leaves a remainder of \\(0\\)?",
    "options": [
      "\\(\\{1, 2, 4, 5\\}\\)",
      "\\(\\{2, 4, 5\\}\\)",
      "\\(\\{1, 2, 5\\}\\)",
      "\\(\\{1, 2, 3, 4, 5\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check each division \\(40 \\div 1 = 40\\) (R0) \\(40 \\div 2 = 20\\) (R0) \\(40 \\div 3 = 13\\) (R1) \\(40 \\div 4 = 10\\) (R0) \\(40 \\div 5 = 8\\) (R0) Step 2: Conclusion The divisors leaving remainder \\(0\\) are \\(1, 2, 4, 5\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check each division. \\(40 \\div 1 = 40\\) (R0)\\(40 \\div 2 = 20\\) (R0)\\(40 \\div 3 = 13\\) (R1)\\(40 \\div 4 = 10\\) (R0)\\(40 \\div 5 = 8\\) (R0)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Conclusion. The divisors leaving remainder \\(0\\) are \\(1, 2, 4, 5\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write down all the factors of \\(40\\).",
    "options": [
      "\\(\\{1, 2, 4, 5, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 5, 8, 10, 20, 40\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Pair the factors \\(1 \\times 40 = 40\\) \\(2 \\times 20 = 40\\) \\(4 \\times 10 = 40\\) \\(5 \\times 8 = 40\\) Step 2: Combine in order \\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Pair the factors. \\(1 \\times 40 = 40\\)\\(2 \\times 20 = 40\\)\\(4 \\times 10 = 40\\)\\(5 \\times 8 = 40\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Combine in order. \\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "When \\(45\\) is divided by each of the whole numbers from \\(1\\) to \\(6\\), which of these divisors leaves a remainder of \\(0\\)?",
    "options": [
      "\\(\\{3, 5\\}\\)",
      "\\(\\{1, 3, 5\\}\\)",
      "\\(\\{1, 5\\}\\)",
      "\\(\\{1, 3, 5, 6\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Check division \\(45\\) is divisible by \\(1\\). It is not divisible by \\(2\\) (odd number). \\(4+5=9\\), so it is divisible by \\(3\\). It ends in \\(5\\), so it is divisible by \\(5\\). It is not divisible by \\(4\\) or \\(6\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Check division. \\(45\\) is divisible by \\(1\\). It is not divisible by \\(2\\) (odd number). \\(4+5=9\\), so it is divisible by \\(3\\). It ends in \\(5\\), so it is divisible by \\(5\\). It is not divisible by \\(4\\) or \\(6\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Write down all the factors of \\(45\\).",
    "options": [
      "\\(\\{1, 3, 5, 15, 45\\}\\)",
      "\\(\\{1, 5, 9, 15, 45\\}\\)",
      "\\(\\{1, 3, 5, 9, 15, 45\\}\\)",
      "\\(\\{1, 3, 9, 15, 45\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Pair the factors \\(1 \\times 45 = 45\\) \\(3 \\times 15 = 45\\) \\(5 \\times 9 = 45\\) Step 2: Combine in order \\(\\{1, 3, 5, 9, 15, 45\\}\\)",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Pair the factors. \\(1 \\times 45 = 45\\)\\(3 \\times 15 = 45\\)\\(5 \\times 9 = 45\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Combine in order. \\(\\{1, 3, 5, 9, 15, 45\\}\\)",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following best explains why the number \\(1\\) is a factor of every whole number \\(N\\)?",
    "options": [
      "Because \\(1\\) is an odd number, and odd numbers divide everything.",
      "Because \\(1\\) is the smallest whole number, so it fits inside all other numbers.",
      "Because any number multiplied by \\(1\\) becomes \\(1\\).",
      "Because dividing any whole number \\(N\\) by \\(1\\) results in \\(N\\) with a remainder of zero (\\(N = 1 \\times N\\))."
    ],
    "answer": 3,
    "solution": "Step 1: Definition of a factor A factor divides exactly into another number with no remainder. Step 2: Apply to 1 \\(N \\div 1 = N\\) exactly, meaning \\(1\\) is always a factor of \\(N\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Definition of a factor. A factor divides exactly into another number with no remainder.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Apply to 1. \\(N \\div 1 = N\\) exactly, meaning \\(1\\) is always a factor of \\(N\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following best explains why any non-zero whole number \\(N\\) is a factor of \\(0\\)?",
    "options": [
      "Because \\(0\\) can be written as \\(N \\times 0\\), leaving no remainder when divided by \\(N\\).",
      "Because all non-zero numbers are multiples of \\(0\\).",
      "Because \\(0\\) is the smallest whole number.",
      "Because dividing by \\(0\\) is always zero."
    ],
    "answer": 0,
    "solution": "Step 1: Definition of a factor If \\(A\\) is a factor of \\(B\\), then \\(A \\times k = B\\) for some whole number \\(k\\). Step 2: Apply to zero \\(N \\times 0 = 0\\). This means \\(N\\) divides exactly into \\(0\\) with a quotient of \\(0\\) and no remainder.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Definition of a factor. If \\(A\\) is a factor of \\(B\\), then \\(A \\times k = B\\) for some whole number \\(k\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Apply to zero. \\(N \\times 0 = 0\\). This means \\(N\\) divides exactly into \\(0\\) with a quotient of \\(0\\) and no remainder.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "What are all the factors of \\(1\\)?",
    "options": [
      "\\(\\{0, 1\\}\\)",
      "None",
      "\\(\\{1\\}\\)",
      "\\(\\{1, 2\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Find numbers that multiply to 1 The only whole numbers that multiply to \\(1\\) are \\(1 \\times 1\\). Step 2: Compile the list The only factor is \\(1\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find numbers that multiply to 1. The only whole numbers that multiply to \\(1\\) are \\(1 \\times 1\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Compile the list. The only factor is \\(1\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following best explains why zero is a multiple of every whole number \\(N\\)?",
    "options": [
      "Because you cannot divide by zero.",
      "Because zero is less than \\(N\\).",
      "Because zero is an even number.",
      "Because any whole number \\(N\\) multiplied by \\(0\\) yields \\(0\\)."
    ],
    "answer": 3,
    "solution": "Step 1: Definition of a multiple A multiple of \\(N\\) is formed by multiplying \\(N\\) by any whole number. Step 2: Apply to zero Since \\(N \\times 0 = 0\\), \\(0\\) fits the definition of being a multiple of \\(N\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Definition of a multiple. A multiple of \\(N\\) is formed by multiplying \\(N\\) by any whole number.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Apply to zero. Since \\(N \\times 0 = 0\\), \\(0\\) fits the definition of being a multiple of \\(N\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "A \"perfect number\" is a number that equals the sum of its own factors (excluding itself). The first perfect number is \\(6\\) (since \\(1+2+3=6\\)). The second perfect number is \\(28\\). Which of the following correctly shows that \\(28\\) is a perfect number?",
    "options": [
      "The multiples of \\(28\\) are \\(1, 2, 4, 7,\\) and \\(14\\).",
      "The factors of \\(28\\) (excluding \\(28\\)) are \\(1, 2, 4, 14,\\) and \\(28\\), and their sum is \\(49\\).",
      "The factors of \\(28\\) (excluding \\(28\\)) are \\(1, 2, 4, 7,\\) and \\(14\\), and their sum is \\(28\\).",
      "The prime factors of \\(28\\) are \\(2\\) and \\(7\\), and \\(2 \\times 14 = 28\\)."
    ],
    "answer": 2,
    "solution": "Step 1: List the factors of 28 \\(\\{1, 2, 4, 7, 14, 28\\}\\). Step 2: Exclude the number itself The \"proper factors\" are \\(1, 2, 4, 7, 14\\). Step 3: Sum them up \\(1 + 2 + 4 + 7 + 14 = 28\\). Because the sum equals the number, \\(28\\) is a perfect number.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "List the factors of 28. \\(\\{1, 2, 4, 7, 14, 28\\}\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Exclude the number itself. The \"proper factors\" are \\(1, 2, 4, 7, 14\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Sum them up. \\(1 + 2 + 4 + 7 + 14 = 28\\). Because the sum equals the number, \\(28\\) is a perfect number.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "The next perfect number after \\(28\\) is \\(496\\). Which of the following represents the sum of the proper factors (factors excluding the number itself) of \\(496\\)?",
    "options": [
      "\\(1 + 3 + 9 + 27 + 81 + 124 + 251 = 496\\)",
      "\\(1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + 256 = 496\\)",
      "\\(2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 495\\)",
      "\\(1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Find factors of 496 Dividing by \\(2\\): \\(248\\). Dividing by \\(2\\): \\(124\\). By \\(2\\): \\(62\\). By \\(2\\): \\(31\\) (prime). Step 2: List all proper factors \\(1, 2, 4, 8, 16, 31, 62, 124, 248\\). Step 3: Verify the sum \\(1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Find factors of 496. Dividing by \\(2\\): \\(248\\). Dividing by \\(2\\): \\(124\\). By \\(2\\): \\(62\\). By \\(2\\): \\(31\\) (prime).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "List all proper factors. \\(1, 2, 4, 8, 16, 31, 62, 124, 248\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Verify the sum. \\(1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Why does the number \\(36\\) have an odd number of factors?",
    "options": [
      "Because it is a perfect square, so one of its factor pairs consists of a number multiplied by itself (\\(6 \\times 6\\)), which is counted only once.",
      "Because it is an even number, and all even numbers have an odd number of factors.",
      "Because its digits (\\(3+6\\)) add up to \\(9\\), which is an odd number.",
      "Because it has only prime factors."
    ],
    "answer": 0,
    "solution": "Step 1: List the factors of 36 \\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\). There are \\(9\\) factors (an odd amount). Step 2: Analyze the pairs \\(1 \\times 36\\) \\(2 \\times 18\\) \\(3 \\times 12\\) \\(4 \\times 9\\) \\(6 \\times 6\\) Because \\(6\\) is paired with itself, it does not contribute two distinct factors, leaving the total count odd.",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "List the factors of 36. \\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\). There are \\(9\\) factors (an odd amount).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Analyze the pairs. \\(1 \\times 36\\)\\(2 \\times 18\\)\\(3 \\times 12\\)\\(4 \\times 9\\)\\(6 \\times 6\\)Because \\(6\\) is paired with itself, it does not contribute two distinct factors, leaving the total count odd.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "What is the next whole number after \\(36\\) to have an odd number of factors?",
    "options": [
      "\\(38\\)",
      "\\(49\\)",
      "\\(64\\)",
      "\\(40\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Understand the rule Only perfect squares have an odd number of factors. Step 2: Find the next perfect square \\(36\\) is \\(6 \\times 6\\). The next whole number squared is \\(7 \\times 7 = 49\\).",
    "createdAt": "2026-06-15T13:52:19.940Z",
    "solutionSteps": [
      {
        "explanation": "Understand the rule. Only perfect squares have an odd number of factors.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find the next perfect square. \\(36\\) is \\(6 \\times 6\\). The next whole number squared is \\(7 \\times 7 = 49\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find all the factors of \\(42\\).",
    "options": [
      "\\(\\{1, 2, 3, 4, 6, 7, 14, 21, 42\\}\\)",
      "\\(\\{2, 3, 6, 7, 14, 21\\}\\)",
      "\\(\\{1, 2, 3, 6, 7, 14, 21, 42\\}\\)",
      "\\(\\{1, 2, 6, 7, 14, 42\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Write down factor pairs Find pairs of whole numbers that multiply to \\(42\\): \\(1 \\times 42 = 42\\) \\(2 \\times 21 = 42\\) \\(3 \\times 14 = 42\\) \\(6 \\times 7 = 42\\) Step 2: List the factors in order Combining these gives the complete set: \\(\\{1, 2, 3, 6, 7, 14, 21, 42\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Write down factor pairs. Find pairs of whole numbers that multiply to \\(42\\):",
        "workingOut": "\\(1 \\times 42 = 42\\) \\\\ \\(2 \\times 21 = 42\\) \\\\ \\(3 \\times 14 = 42\\) \\\\ \\(6 \\times 7 = 42\\)",
        "graphData": null
      },
      {
        "explanation": "List the factors in order. Combining these gives the complete set: \\(\\{1, 2, 3, 6, 7, 14, 21, 42\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find all the factors of \\(54\\).",
    "options": [
      "\\(\\{2, 3, 6, 9, 18, 27\\}\\)",
      "\\(\\{1, 2, 3, 18, 27, 54\\}\\)",
      "\\(\\{1, 2, 3, 6, 9, 18, 27, 54\\}\\)",
      "\\(\\{1, 2, 3, 6, 9, 12, 18, 27, 54\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Write down factor pairs Find pairs of whole numbers that multiply to \\(54\\): \\(1 \\times 54 = 54\\) \\(2 \\times 27 = 54\\) \\(3 \\times 18 = 54\\) \\(6 \\times 9 = 54\\) Step 2: List the factors in order Combining these gives the complete set: \\(\\{1, 2, 3, 6, 9, 18, 27, 54\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Write down factor pairs. Find pairs of whole numbers that multiply to \\(54\\):",
        "workingOut": "\\(1 \\times 54 = 54\\) \\\\ \\(2 \\times 27 = 54\\) \\\\ \\(3 \\times 18 = 54\\) \\\\ \\(6 \\times 9 = 54\\)",
        "graphData": null
      },
      {
        "explanation": "List the factors in order. Combining these gives the complete set: \\(\\{1, 2, 3, 6, 9, 18, 27, 54\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find all the factors of \\(150\\).",
    "options": [
      "\\(\\{1, 2, 3, 5, 6, 10, 15, 25, 50, 75, 150\\}\\)",
      "\\(\\{1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150\\}\\)",
      "\\(\\{2, 3, 5, 6, 10, 15, 25, 30, 50, 75\\}\\)",
      "\\(\\{1, 2, 3, 5, 10, 15, 30, 50, 150\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Find pairs that multiply to 150 List all factor pairs: \\(1 \\times 150 = 150\\) \\(2 \\times 75 = 150\\) \\(3 \\times 50 = 150\\) \\(5 \\times 30 = 150\\) \\(6 \\times 25 = 150\\) \\(10 \\times 15 = 150\\) Step 2: Combine in ascending order The factors of \\(150\\) are: \\(\\{1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Find pairs that multiply to 150. List all factor pairs:",
        "workingOut": "\\(1 \\times 150 = 150\\) \\\\ \\(2 \\times 75 = 150\\) \\\\ \\(3 \\times 50 = 150\\) \\\\ \\(5 \\times 30 = 150\\) \\\\ \\(6 \\times 25 = 150\\) \\\\ \\(10 \\times 15 = 150\\)",
        "graphData": null
      },
      {
        "explanation": "Combine in ascending order. The factors of \\(150\\) are: \\(\\{1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "How many distinct factors does the number \\(360\\) have?",
    "options": [
      "20",
      "28",
      "18",
      "24"
    ],
    "answer": 3,
    "solution": "Step 1: Prime factorization Let's find the prime factorization of \\(360\\): \\(360 = 2^3 \\times 3^2 \\times 5^1\\). Step 2: Apply the factor formula Add \\(1\\) to each exponent and multiply the results: \\((3+1) \\times (2+1) \\times (1+1) = 4 \\times 3 \\times 2 = 24\\). So \\(360\\) has exactly \\(24\\) distinct factors.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Prime factorization. Let's find the prime factorization of \\(360\\):\\(360 = 2^3 \\times 3^2 \\times 5^1\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Apply the factor formula. Add \\(1\\) to each exponent and multiply the results:\\((3+1) \\times (2+1) \\times (1+1) = 4 \\times 3 \\times 2 = 24\\).So \\(360\\) has exactly \\(24\\) distinct factors.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following represents all factors of \\(1050\\) that are multiples of \\(25\\)?",
    "options": [
      "\\(\\{25, 50, 75, 150, 175, 350, 525, 1050\\}\\)",
      "\\(\\{25, 50, 75, 125, 250, 500, 1000\\}\\)",
      "\\(\\{25, 50, 75, 150, 350, 525, 1050\\}\\)",
      "\\(\\{25, 50, 100, 150, 350, 1050\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: List multiples of 25 that divide 1050 We test multiples of \\(25\\) (\\(25, 50, 75, 100, 125, 150, 175, 200, 225, 250, \\dots\\)): \\(1050 \\div 25 = 42\\) (Yes) \\(1050 \\div 50 = 21\\) (Yes) \\(1050 \\div 75 = 14\\) (Yes) \\(1050 \\div 150 = 7\\) (Yes) \\(1050 \\div 175 = 6\\) (Yes) \\(1050 \\div 350 = 3\\) (Yes) \\(1050 \\div 525 = 2\\) (Yes) \\(1050 \\div 1050 = 1\\) (Yes) Step 2: Conclusion The factors of \\(1050\\) that are multiples of \\(25\\) are \\(\\{25, 50, 75, 150, 175, 350, 525, 1050\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "List multiples of 25 that divide 1050. We test multiples of \\(25\\) (\\(25, 50, 75, 100, 125, 150, 175, 200, 225, 250, \\dots\\)):",
        "workingOut": "\\(1050 \\div 25 = 42\\) (Yes) \\\\ \\(1050 \\div 50 = 21\\) (Yes) \\\\ \\(1050 \\div 75 = 14\\) (Yes) \\\\ \\(1050 \\div 150 = 7\\) (Yes) \\\\ \\(1050 \\div 175 = 6\\) (Yes) \\\\ \\(1050 \\div 350 = 3\\) (Yes) \\\\ \\(1050 \\div 525 = 2\\) (Yes) \\\\ \\(1050 \\div 1050 = 1\\) (Yes)",
        "graphData": null
      },
      {
        "explanation": "Conclusion. The factors of \\(1050\\) that are multiples of \\(25\\) are \\(\\{25, 50, 75, 150, 175, 350, 525, 1050\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Find all the factors of \\(1600\\) that are perfect squares.",
    "options": [
      "\\(\\{1, 2, 4, 8, 16, 25, 64, 100, 400, 1600\\}\\)",
      "\\(\\{1, 4, 9, 16, 25, 36, 64, 100, 400, 1600\\}\\)",
      "\\(\\{1, 4, 16, 25, 64, 100, 400, 1600\\}\\)",
      "\\(\\{4, 16, 64, 400, 1600\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Express 1600 as prime factorization \\(1600 = 16 \\times 100 = 2^4 \\times (2^2 \\times 5^2) = 2^6 \\times 5^2\\). Step 2: Identify perfect square factors Any factor that is a perfect square must have even exponents in its prime factorization: Exponents for \\(2\\) can be \\(2^0, 2^2, 2^4, 2^6\\) (corresponding to \\(1, 4, 16, 64\\)). Exponents for \\(5\\) can be \\(5^0, 5^2\\) (corresponding to \\(1, 25\\)). Combining these gives the set: \\(\\{1, 4, 16, 25, 64, 100, 400, 1600\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Express 1600 as prime factorization. \\(1600 = 16 \\times 100 = 2^4 \\times (2^2 \\times 5^2) = 2^6 \\times 5^2\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Identify perfect square factors. Any factor that is a perfect square must have even exponents in its prime factorization:Exponents for \\(2\\) can be \\(2^0, 2^2, 2^4, 2^6\\) (corresponding to \\(1, 4, 16, 64\\)).Exponents for \\(5\\) can be \\(5^0, 5^2\\) (corresponding to \\(1, 25\\)).Combining these gives the set: \\(\\{1, 4, 16, 25, 64, 100, 400, 1600\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers from the list have \\(6\\) as a factor?<br>$\\(\\{12, 18, 22, 28, 96, 114, 130, 204\\}\\)$",
    "options": [
      "\\(\\{18, 96, 114, 130, 204\\}\\)",
      "\\(\\{12, 18, 96, 204\\}\\)",
      "\\(\\{12, 18, 28, 96, 114, 204\\}\\)",
      "\\(\\{12, 18, 96, 114, 204\\}\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Test each number for divisibility by 6 A number is divisible by \\(6\\) if it is even and its digits add up to a multiple of \\(3\\): \\(12 \\div 6 = 2\\) (Yes) \\(18 \\div 6 = 3\\) (Yes) \\(22 \\div 6 = 3.66\\) (No) \\(28 \\div 6 = 4.66\\) (No) \\(96 \\div 6 = 16\\) (Yes) \\(114 \\div 6 = 19\\) (Yes) \\(130 \\div 6 = 21.66\\) (No) \\(204 \\div 6 = 34\\) (Yes) Step 2: Compile results The numbers with \\(6\\) as a factor are: \\(\\{12, 18, 96, 114, 204\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Test each number for divisibility by 6. A number is divisible by \\(6\\) if it is even and its digits add up to a multiple of \\(3\\):",
        "workingOut": "\\(12 \\div 6 = 2\\) (Yes) \\\\ \\(18 \\div 6 = 3\\) (Yes) \\\\ \\(22 \\div 6 = 3.66\\) (No) \\\\ \\(28 \\div 6 = 4.66\\) (No) \\\\ \\(96 \\div 6 = 16\\) (Yes) \\\\ \\(114 \\div 6 = 19\\) (Yes) \\\\ \\(130 \\div 6 = 21.66\\) (No) \\\\ \\(204 \\div 6 = 34\\) (Yes)",
        "graphData": null
      },
      {
        "explanation": "Compile results. The numbers with \\(6\\) as a factor are: \\(\\{12, 18, 96, 114, 204\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers have \\(12\\) as a factor?<br>$\\(\\{18, 24, 48, 60, 78, 108, 132, 150\\}\\)$",
    "options": [
      "\\(\\{24, 48, 60, 108, 132\\}\\)",
      "\\(\\{24, 48, 60, 78, 108, 132\\}\\)",
      "\\(\\{24, 48, 60, 132\\}\\)",
      "\\(\\{18, 24, 48, 60, 108, 132\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Test each number for divisibility by 12 A number is divisible by \\(12\\) if it is divisible by both \\(3\\) and \\(4\\): \\(24 \\div 12 = 2\\) (Yes) \\(48 \\div 12 = 4\\) (Yes) \\(60 \\div 12 = 5\\) (Yes) \\(108 \\div 12 = 9\\) (Yes) \\(132 \\div 12 = 11\\) (Yes) The others (\\(18, 78, 150\\)) leave remainders. Step 2: Conclusion The correct list is: \\(\\{24, 48, 60, 108, 132\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Test each number for divisibility by 12. A number is divisible by \\(12\\) if it is divisible by both \\(3\\) and \\(4\\):",
        "workingOut": "\\(24 \\div 12 = 2\\) (Yes) \\\\ \\(48 \\div 12 = 4\\) (Yes) \\\\ \\(60 \\div 12 = 5\\) (Yes) \\\\ \\(108 \\div 12 = 9\\) (Yes) \\\\ \\(132 \\div 12 = 11\\) (Yes) \\\\ The others (\\(18, 78, 150\\)) leave remainders.",
        "graphData": null
      },
      {
        "explanation": "Conclusion. The correct list is: \\(\\{24, 48, 60, 108, 132\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers are multiples of \\(17\\)?<br>$\\(\\{34, 45, 51, 68, 80, 85, 102, 110\\}\\)$",
    "options": [
      "\\(\\{34, 51, 68, 85, 102\\}\\)",
      "\\(\\{34, 51, 80, 85, 102\\}\\)",
      "\\(\\{34, 51, 68, 85\\}\\)",
      "\\(\\{51, 68, 85, 102\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Calculate multiples of 17 List multiples of \\(17\\): \\(17, 34, 51, 68, 85, 102, 119, \\dots\\) Step 2: Check matching numbers in the list The matching numbers are: \\(\\{34, 51, 68, 85, 102\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Calculate multiples of 17. List multiples of \\(17\\): \\(17, 34, 51, 68, 85, 102, 119, \\dots\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Check matching numbers in the list. The matching numbers are: \\(\\{34, 51, 68, 85, 102\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers are multiples of \\(23\\)?<br>$\\(\\{46, 69, 75, 92, 115, 120, 138, 161\\}\\)$",
    "options": [
      "\\(\\{46, 69, 92, 115, 138\\}\\)",
      "\\(\\{69, 92, 115, 138, 161\\}\\)",
      "\\(\\{46, 69, 92, 115, 138, 161\\}\\)",
      "\\(\\{46, 69, 115, 138, 161\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Find multiples of 23 List multiples: \\(23, 46, 69, 92, 115, 138, 161, 184, \\dots\\) Step 2: Find matches in the set The matching numbers are \\(\\{46, 69, 92, 115, 138, 161\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Find multiples of 23. List multiples: \\(23, 46, 69, 92, 115, 138, 161, 184, \\dots\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find matches in the set. The matching numbers are \\(\\{46, 69, 92, 115, 138, 161\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers have \\(220\\) as a multiple?<br>$\\(\\{2, 4, 5, 8, 10, 11, 20, 22, 44, 50, 110\\}\\)$",
    "options": [
      "\\(\\{4, 5, 10, 11, 20, 22, 44, 110\\}\\)",
      "\\(\\{2, 4, 5, 8, 10, 11, 20, 22, 44, 110\\}\\)",
      "\\(\\{2, 4, 5, 10, 11, 20, 22, 44, 110\\}\\)",
      "\\(\\{2, 4, 5, 10, 20, 22, 44, 50, 110\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Understand the phrasing \"Have \\(220\\) as a multiple\" means the number is a factor of \\(220\\) (i.e. divides \\(220\\) exactly). Step 2: Test the numbers Divide \\(220\\) by each number: \\(220 \\div 2 = 110\\) (Yes) \\(220 \\div 4 = 55\\) (Yes) \\(220 \\div 5 = 44\\) (Yes) \\(220 \\div 8 = 27.5\\) (No) \\(220 \\div 10 = 22\\) (Yes) \\(220 \\div 11 = 20\\) (Yes) \\(220 \\div 20 = 11\\) (Yes) \\(220 \\div 22 = 10\\) (Yes) \\(220 \\div 44 = 5\\) (Yes) \\(220 \\div 50 = 4.4\\) (No) \\(220 \\div 110 = 2\\) (Yes) Step 3: Conclusion The factors of \\(220\\) from the list are: \\(\\{2, 4, 5, 10, 11, 20, 22, 44, 110\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Understand the phrasing. \"Have \\(220\\) as a multiple\" means the number is a factor of \\(220\\) (i.e. divides \\(220\\) exactly).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the numbers. Divide \\(220\\) by each number:",
        "workingOut": "\\(220 \\div 2 = 110\\) (Yes) \\\\ \\(220 \\div 4 = 55\\) (Yes) \\\\ \\(220 \\div 5 = 44\\) (Yes) \\\\ \\(220 \\div 8 = 27.5\\) (No) \\\\ \\(220 \\div 10 = 22\\) (Yes) \\\\ \\(220 \\div 11 = 20\\) (Yes) \\\\ \\(220 \\div 20 = 11\\) (Yes) \\\\ \\(220 \\div 22 = 10\\) (Yes) \\\\ \\(220 \\div 44 = 5\\) (Yes) \\\\ \\(220 \\div 50 = 4.4\\) (No) \\\\ \\(220 \\div 110 = 2\\) (Yes)",
        "graphData": null
      },
      {
        "explanation": "Conclusion. The factors of \\(220\\) from the list are: \\(\\{2, 4, 5, 10, 11, 20, 22, 44, 110\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers have \\(315\\) as a multiple?<br>$\\(\\{3, 5, 7, 9, 15, 21, 35, 45, 63, 105\\}\\)$",
    "options": [
      "\\(\\{3, 5, 9, 15, 45, 105\\}\\)",
      "\\(\\{3, 5, 7, 9, 15, 21, 35\\}\\)",
      "All of them are correct",
      "\\(\\{3, 5, 7, 9, 15, 21, 35, 45, 105\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Check if all numbers divide 315 Let's divide \\(315\\) by each number: \\(315 \\div 3 = 105\\), \\(315 \\div 5 = 63\\), \\(315 \\div 7 = 45\\) \\(315 \\div 9 = 35\\), \\(315 \\div 15 = 21\\), \\(315 \\div 21 = 15\\) \\(315 \\div 35 = 9\\), \\(315 \\div 45 = 7\\), \\(315 \\div 63 = 5\\), \\(315 \\div 105 = 3\\) Step 2: Conclusion Every single number in the given list is a factor of \\(315\\), which means they all have \\(315\\) as a multiple!",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Check if all numbers divide 315. Let's divide \\(315\\) by each number:",
        "workingOut": "\\(315 \\div 3 = 105\\), \\(315 \\div 5 = 63\\), \\(315 \\div 7 = 45\\) \\\\ \\(315 \\div 9 = 35\\), \\(315 \\div 15 = 21\\), \\(315 \\div 21 = 15\\) \\\\ \\(315 \\div 35 = 9\\), \\(315 \\div 45 = 7\\), \\(315 \\div 63 = 5\\), \\(315 \\div 105 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Conclusion. Every single number in the given list is a factor of \\(315\\), which means they all have \\(315\\) as a multiple!",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2c",
    "topicCode": "2C",
    "topicTitle": "Prime and composite numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following lists all the prime numbers between \\(50\\) and \\(100\\)?",
    "options": [
      "\\(\\{51, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97\\}\\)",
      "\\(\\{53, 59, 61, 67, 71, 73, 79, 83, 89, 97\\}\\)",
      "\\(\\{53, 59, 61, 63, 67, 71, 73, 79, 83, 89, 97\\}\\)",
      "\\(\\{53, 59, 61, 67, 71, 73, 79, 83, 87, 89, 97\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Understand prime numbers A prime number has exactly two factors: \\(1\\) and itself. Step 2: Test numbers between 50 and 100 Eliminate even numbers, multiples of \\(3\\) (\\(51, 57, 63, 69, 75, 81, 87, 93, 99\\)), multiples of \\(5\\) (\\(55, 65, 75, 85, 95\\)), and multiples of \\(7\\) (\\(77, 91\\)). The remaining prime numbers are: \\(\\{53, 59, 61, 67, 71, 73, 79, 83, 89, 97\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Understand prime numbers. A prime number has exactly two factors: \\(1\\) and itself.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test numbers between 50 and 100. Eliminate even numbers, multiples of \\(3\\) (\\(51, 57, 63, 69, 75, 81, 87, 93, 99\\)), multiples of \\(5\\) (\\(55, 65, 75, 85, 95\\)), and multiples of \\(7\\) (\\(77, 91\\)).The remaining prime numbers are: \\(\\{53, 59, 61, 67, 71, 73, 79, 83, 89, 97\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2c",
    "topicCode": "2C",
    "topicTitle": "Prime and composite numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Identify all the prime numbers between \\(100\\) and \\(130\\).",
    "options": [
      "\\(\\{101, 103, 107, 109, 113, 117, 127\\}\\)",
      "\\(\\{103, 107, 109, 113, 127\\}\\)",
      "\\(\\{101, 103, 107, 109, 113, 127\\}\\)",
      "\\(\\{101, 103, 107, 109, 113, 121, 127\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Test numbers in range for divisibility Eliminate composite numbers: \\(111\\) (divisible by \\(3\\): \\(1+1+1=3\\)) \\(117\\) (divisible by \\(9\\): \\(1+1+7=9\\)) \\(119 = 7 \\times 17\\) \\(121 = 11 \\times 11\\) \\(123\\) (divisible by \\(3\\): \\(1+2+3=6\\)) \\(129\\) (divisible by \\(3\\): \\(1+2+9=12\\)) Step 2: Compile prime list The primes are: \\(\\{101, 103, 107, 109, 113, 127\\}\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Test numbers in range for divisibility. Eliminate composite numbers:",
        "workingOut": "\\(111\\) (divisible by \\(3\\): \\(1+1+1=3\\)) \\\\ \\(117\\) (divisible by \\(9\\): \\(1+1+7=9\\)) \\\\ \\(119 = 7 \\times 17\\) \\\\ \\(121 = 11 \\times 11\\) \\\\ \\(123\\) (divisible by \\(3\\): \\(1+2+3=6\\)) \\\\ \\(129\\) (divisible by \\(3\\): \\(1+2+9=12\\))",
        "graphData": null
      },
      {
        "explanation": "Compile prime list. The primes are: \\(\\{101, 103, 107, 109, 113, 127\\}\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2c",
    "topicCode": "2C",
    "topicTitle": "Prime and composite numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Identify a pair of prime numbers that add up to exactly \\(50\\).",
    "options": [
      "\\(\\{7, 43\\}\\)",
      "All of the options are correct pairs of primes",
      "\\(\\{13, 37\\}\\)",
      "\\(\\{3, 47\\}\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Check each pair for sum All pairs add up to \\(50\\): \\(3 + 47 = 50\\) \\(7 + 43 = 50\\) \\(13 + 37 = 50\\) Step 2: Verify both numbers are prime All numbers (\\(3, 7, 13, 37, 43, 47\\)) are indeed prime numbers. Therefore, all options represent correct pairs.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Check each pair for sum. All pairs add up to \\(50\\):",
        "workingOut": "\\(3 + 47 = 50\\) \\\\ \\(7 + 43 = 50\\) \\\\ \\(13 + 37 = 50\\)",
        "graphData": null
      },
      {
        "explanation": "Verify both numbers are prime. All numbers (\\(3, 7, 13, 37, 43, 47\\)) are indeed prime numbers. Therefore, all options represent correct pairs.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2c",
    "topicCode": "2C",
    "topicTitle": "Prime and composite numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find two prime numbers that sum to \\(90\\). Which of the following is a valid pair?",
    "options": [
      "Both \\{7, 83\\} and \\{17, 73\\} are correct",
      "\\(\\{9, 81\\}\\)",
      "\\(\\{17, 73\\}\\)",
      "\\(\\{7, 83\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Test each pair 1. \\(9\\) and \\(81\\) are composite, so they do not count. 2. \\(7\\) and \\(83\\) are both prime: \\(7+83=90\\). (Valid!) 3. \\(17\\) and \\(73\\) are both prime: \\(17+73=90\\). (Valid!) Step 2: Conclusion Both \\(\\{7, 83\\}\\) and \\(\\{17, 73\\}\\) are correct answers.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Test each pair. 1. \\(9\\) and \\(81\\) are composite, so they do not count.2. \\(7\\) and \\(83\\) are both prime: \\(7+83=90\\). (Valid!)3. \\(17\\) and \\(73\\) are both prime: \\(17+73=90\\). (Valid!)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Conclusion. Both \\(\\{7, 83\\}\\) and \\(\\{17, 73\\}\\) are correct answers.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2c",
    "topicCode": "2C",
    "topicTitle": "Prime and composite numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following pairs of prime numbers sum to \\(100\\)?",
    "options": [
      "\\(\\{11, 89\\}\\)",
      "\\(\\{29, 71\\}\\)",
      "\\(\\{3, 97\\}\\)",
      "All of these are correct"
    ],
    "answer": 3,
    "solution": "Step 1: Check sums \\(3+97=100\\), \\(11+89=100\\), \\(29+71=100\\). Step 2: Check primes All listed numbers (\\(3, 11, 29, 71, 89, 97\\)) are prime. Therefore, all options are correct.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Check sums. \\(3+97=100\\), \\(11+89=100\\), \\(29+71=100\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Check primes. All listed numbers (\\(3, 11, 29, 71, 89, 97\\)) are prime. Therefore, all options are correct.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2c",
    "topicCode": "2C",
    "topicTitle": "Prime and composite numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following prime pairs sum to \\(120\\)?",
    "options": [
      "All of these are correct",
      "\\(\\{23, 97\\}\\)",
      "\\(\\{13, 107\\}\\)",
      "\\(\\{17, 103\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check sums \\(13+107=120\\), \\(17+103=120\\), \\(23+97=120\\). Step 2: Check primes Each number in these pairs is prime. Thus, all pairs are correct.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Check sums. \\(13+107=120\\), \\(17+103=120\\), \\(23+97=120\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Check primes. Each number in these pairs is prime. Thus, all pairs are correct.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2c",
    "topicCode": "2C",
    "topicTitle": "Prime and composite numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following prime pairs sum to \\(200\\)?",
    "options": [
      "All of these are correct",
      "\\(\\{3, 197\\}\\)",
      "\\(\\{7, 193\\}\\)",
      "\\(\\{37, 163\\}\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Check sums \\(3+197=200\\), \\(7+193=200\\), \\(37+163=200\\). Step 2: Check primes All elements are prime, so all are correct.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Check sums. \\(3+197=200\\), \\(7+193=200\\), \\(37+163=200\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Check primes. All elements are prime, so all are correct.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2c",
    "topicCode": "2C",
    "topicTitle": "Prime and composite numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Identify a pair of prime numbers that sum to \\(250\\).",
    "options": [
      "\\(\\{17, 233\\}\\)",
      "\\(\\{19, 231\\}\\)",
      "Both \\{17, 233\\} and \\{23, 227\\} are correct",
      "\\(\\{23, 227\\}\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Verify the numbers 1. \\(\\{17, 233\\}\\): both are prime, and \\(17+233=250\\). (Yes!) 2. \\(\\{19, 231\\}\\): \\(231\\) is divisible by \\(3\\) (\\(2+3+1=6\\)), so it is composite. (No!) 3. \\(\\{23, 227\\}\\): both are prime, and \\(23+227=250\\). (Yes!) Step 2: Conclusion Both \\(\\{17, 233\\}\\) and \\(\\{23, 227\\}\\) are correct.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Verify the numbers. 1. \\(\\{17, 233\\}\\): both are prime, and \\(17+233=250\\). (Yes!)2. \\(\\{19, 231\\}\\): \\(231\\) is divisible by \\(3\\) (\\(2+3+1=6\\)), so it is composite. (No!)3. \\(\\{23, 227\\}\\): both are prime, and \\(23+227=250\\). (Yes!)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Conclusion. Both \\(\\{17, 233\\}\\) and \\(\\{23, 227\\}\\) are correct.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2d",
    "topicCode": "2D",
    "topicTitle": "Powers of numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following correctly evaluates the powers of \\(3\\) from \\(3^1\\) up to \\(3^5\\)?",
    "options": [
      "3, 6, 9, 12, 15",
      "3, 9, 27, 54, 162",
      "3, 9, 18, 27, 81",
      "3, 9, 27, 81, 243"
    ],
    "answer": 3,
    "solution": "Step 1: Calculate each power sequentially \\(3^1 = 3\\) \\(3^2 = 3 \\times 3 = 9\\) \\(3^3 = 9 \\times 3 = 27\\) \\(3^4 = 27 \\times 3 = 81\\) \\(3^5 = 81 \\times 3 = 243\\) Step 2: List the result The powers are: \\(3, 9, 27, 81, 243\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Calculate each power sequentially.",
        "workingOut": "\\(3^1 = 3\\) \\\\ \\(3^2 = 3 \\times 3 = 9\\) \\\\ \\(3^3 = 9 \\times 3 = 27\\) \\\\ \\(3^4 = 27 \\times 3 = 81\\) \\\\ \\(3^5 = 81 \\times 3 = 243\\)",
        "graphData": null
      },
      {
        "explanation": "List the result. The powers are: \\(3, 9, 27, 81, 243\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2d",
    "topicCode": "2D",
    "topicTitle": "Powers of numbers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the powers of \\(10\\) from \\(10^1\\) up to \\(10^6\\). Which list is correct?",
    "options": [
      "10, 20, 30, 40, 50, 60",
      "1, 10, 100, 1000, 10000, 100000",
      "10, 100, 1000, 10000, 100000, 1000000",
      "10, 100, 1000, 100000, 1000000, 10000000"
    ],
    "answer": 2,
    "solution": "Step 1: Understand powers of 10 \\(10^n\\) is represented by a \\(1\\) followed by \\(n\\) zeros. \\(10^1 = 10\\) \\(10^2 = 100\\) \\(10^3 = 1000\\) \\(10^4 = 10000\\) \\(10^5 = 100000\\) \\(10^6 = 1000000\\)",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Understand powers of 10. \\(10^n\\) is represented by a \\(1\\) followed by \\(n\\) zeros.",
        "workingOut": "\\(10^1 = 10\\) \\\\ \\(10^2 = 100\\) \\\\ \\(10^3 = 1000\\) \\\\ \\(10^4 = 10000\\) \\\\ \\(10^5 = 100000\\) \\\\ \\(10^6 = 1000000\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2f",
    "topicCode": "2F",
    "topicTitle": "Using powers in factorisation",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(72\\) as a product of its prime factors in index notation.",
    "options": [
      "\\(2^4 \\times 3^1\\)",
      "\\(2^3 \\times 3^2\\)",
      "\\(2^3 \\times 9^1\\)",
      "\\(2^2 \\times 3^3\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Find factors using division \\(72 \\div 2 = 36\\) \\(36 \\div 2 = 18\\) \\(18 \\div 2 = 9\\) \\(9 \\div 3 = 3\\) \\(3 \\div 3 = 1\\) Step 2: Write in index notation We used three \\(2\\)s and two \\(3\\)s: \\(72 = 2 \\times 2 \\times 2 \\times 3 \\times 3 = 2^3 \\times 3^2\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Find factors using division.",
        "workingOut": "\\(72 \\div 2 = 36\\) \\\\ \\(36 \\div 2 = 18\\) \\\\ \\(18 \\div 2 = 9\\) \\\\ \\(9 \\div 3 = 3\\) \\\\ \\(3 \\div 3 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Write in index notation. We used three \\(2\\)s and two \\(3\\)s:\\(72 = 2 \\times 2 \\times 2 \\times 3 \\times 3 = 2^3 \\times 3^2\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2f",
    "topicCode": "2F",
    "topicTitle": "Using powers in factorisation",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(120\\) as a product of its prime factors in index notation.",
    "options": [
      "\\(2^3 \\times 15\\)",
      "\\(2^4 \\times 5\\)",
      "\\(2^3 \\times 3 \\times 5\\)",
      "\\(2^2 \\times 3^2 \\times 5\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Factor tree/division method \\(120 = 12 \\times 10 = (2^2 \\times 3) \\times (2 \\times 5)\\). Step 2: Collect terms \\(120 = 2^3 \\times 3 \\times 5\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Factor tree/division method. \\(120 = 12 \\times 10 = (2^2 \\times 3) \\times (2 \\times 5)\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Collect terms. \\(120 = 2^3 \\times 3 \\times 5\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2f",
    "topicCode": "2F",
    "topicTitle": "Using powers in factorisation",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(180\\) as a product of its prime factors in index notation.",
    "options": [
      "\\(2^2 \\times 3 \\times 5^2\\)",
      "\\(2^2 \\times 3^2 \\times 5\\)",
      "\\(2^3 \\times 3 \\times 5\\)",
      "\\(2^2 \\times 9 \\times 5\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Factorize 180 \\(180 = 18 \\times 10 = (2 \\times 3^2) \\times (2 \\times 5)\\). Step 2: Combine base exponents \\(180 = 2^2 \\times 3^2 \\times 5\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Factorize 180. \\(180 = 18 \\times 10 = (2 \\times 3^2) \\times (2 \\times 5)\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Combine base exponents. \\(180 = 2^2 \\times 3^2 \\times 5\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2f",
    "topicCode": "2F",
    "topicTitle": "Using powers in factorisation",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(250\\) as a product of its prime factors in index notation.",
    "options": [
      "\\(2^2 \\times 5^2\\)",
      "\\(2 \\times 5^2\\)",
      "\\(2 \\times 5^3\\)",
      "\\(2^3 \\times 5^2\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Factorize 250 \\(250 = 25 \\times 10 = 5^2 \\times (2 \\times 5)\\). Step 2: Combine terms \\(250 = 2 \\times 5^3\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Factorize 250. \\(250 = 25 \\times 10 = 5^2 \\times (2 \\times 5)\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Combine terms. \\(250 = 2 \\times 5^3\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2f",
    "topicCode": "2F",
    "topicTitle": "Using powers in factorisation",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(400\\) as a product of its prime factors in index notation.",
    "options": [
      "\\(4^2 \\times 5^2\\)",
      "\\(2^3 \\times 5^3\\)",
      "\\(2^5 \\times 5^1\\)",
      "\\(2^4 \\times 5^2\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Factorize 400 \\(400 = 16 \\times 25\\). Step 2: Convert to prime bases \\(16 = 2^4\\) and \\(25 = 5^2\\). Thus, \\(400 = 2^4 \\times 5^2\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Factorize 400. \\(400 = 16 \\times 25\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Convert to prime bases. \\(16 = 2^4\\) and \\(25 = 5^2\\). Thus, \\(400 = 2^4 \\times 5^2\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2f",
    "topicCode": "2F",
    "topicTitle": "Using powers in factorisation",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(500\\) as a product of its prime factors in index notation.",
    "options": [
      "\\(2^3 \\times 5^2\\)",
      "\\(2^2 \\times 5^2\\)",
      "\\(2^1 \\times 5^4\\)",
      "\\(2^2 \\times 5^3\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Factorize 500 \\(500 = 5 \\times 100 = 5 \\times (4 \\times 25) = 5 \\times (2^2 \\times 5^2)\\). Step 2: Combine exponents \\(500 = 2^2 \\times 5^3\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Factorize 500. \\(500 = 5 \\times 100 = 5 \\times (4 \\times 25) = 5 \\times (2^2 \\times 5^2)\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Combine exponents. \\(500 = 2^2 \\times 5^3\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate \\(6^2\\).",
    "options": [
      "18",
      "64",
      "12",
      "36"
    ],
    "answer": 3,
    "solution": "Step 1: Multiply 6 by itself \\(6^2 = 6 \\times 6 = 36\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Multiply 6 by itself. \\(6^2 = 6 \\times 6 = 36\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate \\(12^2\\).",
    "options": [
      "144",
      "169",
      "24",
      "121"
    ],
    "answer": 0,
    "solution": "Step 1: Multiply 12 by itself \\(12^2 = 12 \\times 12 = 144\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Multiply 12 by itself. \\(12^2 = 12 \\times 12 = 144\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate \\(15^2\\).",
    "options": [
      "30",
      "250",
      "225",
      "200"
    ],
    "answer": 2,
    "solution": "Step 1: Multiply 15 by itself \\(15^2 = 15 \\times 15 = 225\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Multiply 15 by itself. \\(15^2 = 15 \\times 15 = 225\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate \\(30^2\\).",
    "options": [
      "300",
      "90",
      "900",
      "60"
    ],
    "answer": 2,
    "solution": "Step 1: Multiply 30 by itself \\(30^2 = 30 \\times 30 = 900\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Multiply 30 by itself. \\(30^2 = 30 \\times 30 = 900\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate \\(60^2\\).",
    "options": [
      "120",
      "600",
      "3600",
      "360"
    ],
    "answer": 2,
    "solution": "Step 1: Multiply 60 by itself \\(60^2 = 60 \\times 60 = 3600\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Multiply 60 by itself. \\(60^2 = 60 \\times 60 = 3600\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate \\(200^2\\).",
    "options": [
      "20000",
      "4000",
      "40000",
      "400"
    ],
    "answer": 2,
    "solution": "Step 1: Multiply 200 by itself \\(200^2 = 200 \\times 200 = 40000\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Multiply 200 by itself. \\(200^2 = 200 \\times 200 = 40000\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the square root of \\(49\\) (i.e. \\(\\sqrt{49}\\)).",
    "options": [
      "4.9",
      "9",
      "7",
      "14"
    ],
    "answer": 2,
    "solution": "Step 1: Determine the square root We look for a positive number that, when multiplied by itself, yields \\(49\\). Since \\(7 \\times 7 = 49\\), we have \\(\\sqrt{49} = 7\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Determine the square root. We look for a positive number that, when multiplied by itself, yields \\(49\\). Since \\(7 \\times 7 = 49\\), we have \\(\\sqrt{49} = 7\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the square root of \\(225\\) (i.e. \\(\\sqrt{225}\\)).",
    "options": [
      "12",
      "13",
      "25",
      "15"
    ],
    "answer": 3,
    "solution": "Step 1: Test base squares Since \\(15 \\times 15 = 225\\), the square root is \\(15\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Test base squares. Since \\(15 \\times 15 = 225\\), the square root is \\(15\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the square root of \\(256\\) (i.e. \\(\\sqrt{256}\\)).",
    "options": [
      "26",
      "18",
      "14",
      "16"
    ],
    "answer": 3,
    "solution": "Step 1: Test squares Since \\(16 \\times 16 = 256\\), the square root is \\(16\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Test squares. Since \\(16 \\times 16 = 256\\), the square root is \\(16\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the square root of \\(576\\) (i.e. \\(\\sqrt{576}\\)).",
    "options": [
      "22",
      "24",
      "26",
      "28"
    ],
    "answer": 1,
    "solution": "Step 1: Determine by bounds We know \\(20^2 = 400\\) and \\(30^2 = 900\\). The number ends in \\(6\\), so the square root must end in \\(4\\) or \\(6\\). Testing \\(24\\): \\(24 \\times 24 = 576\\). Thus, the square root is \\(24\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Determine by bounds. We know \\(20^2 = 400\\) and \\(30^2 = 900\\). The number ends in \\(6\\), so the square root must end in \\(4\\) or \\(6\\). Testing \\(24\\):\\(24 \\times 24 = 576\\). Thus, the square root is \\(24\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the square root of \\(900\\) (i.e. \\(\\sqrt{900}\\)).",
    "options": [
      "3",
      "30",
      "90",
      "300"
    ],
    "answer": 1,
    "solution": "Step 1: Test squares Since \\(30 \\times 30 = 900\\), the square root is \\(30\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Test squares. Since \\(30 \\times 30 = 900\\), the square root is \\(30\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the square root of \\(4000000\\) (i.e. \\(\\sqrt{4000000}\\)).",
    "options": [
      "200",
      "2000",
      "4000",
      "20000"
    ],
    "answer": 1,
    "solution": "Step 1: Split into factors We can write \\(4000000 = 4 \\times 1000000\\). Step 2: Find the square root of each part \\(\\sqrt{4} = 2\\) \\(\\sqrt{1000000} = 1000\\) Combined: \\(2 \\times 1000 = 2000\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Split into factors. We can write \\(4000000 = 4 \\times 1000000\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find the square root of each part. \\(\\sqrt{4} = 2\\)\\(\\sqrt{1000000} = 1000\\)Combined: \\(2 \\times 1000 = 2000\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(33\\) as the sum of three perfect squares.",
    "options": [
      "\\(5^2 + 3^2 + 1^2\\)",
      "\\(4^2 + 4^2 + 1^2\\)",
      "\\(3^2 + 3^2 + 3^2\\)",
      "\\(5^2 + 2^2 + 2^2\\)"
    ],
    "answer": 3,
    "solution": "Step 1: List perfect squares smaller than 33 Squares: \\(1, 4, 9, 16, 25\\). Step 2: Test combinations of three squares Let's try using \\(25\\) (\\(5^2\\)): \\(33 - 25 = 8\\). Can \\(8\\) be written as the sum of two squares? Yes, \\(4 + 4 = 2^2 + 2^2\\). So, \\(33 = 5^2 + 2^2 + 2^2\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "List perfect squares smaller than 33. Squares: \\(1, 4, 9, 16, 25\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test combinations of three squares. Let's try using \\(25\\) (\\(5^2\\)):\\(33 - 25 = 8\\).Can \\(8\\) be written as the sum of two squares?Yes, \\(4 + 4 = 2^2 + 2^2\\).So, \\(33 = 5^2 + 2^2 + 2^2\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(54\\) as the sum of three perfect squares.",
    "options": [
      "\\(5^2 + 5^2 + 2^2\\)",
      "\\(7^2 + 2^2 + 1^2\\)",
      "\\(6^2 + 3^2 + 3^2\\)",
      "Both \\(5^2 + 5^2 + 2^2\\) and \\(7^2 + 2^2 + 1^2\\) are correct"
    ],
    "answer": 3,
    "solution": "Step 1: Verify the options Option 1: \\(5^2 + 5^2 + 2^2 = 25 + 25 + 4 = 54\\). (Correct!) Option 2: \\(7^2 + 2^2 + 1^2 = 49 + 4 + 1 = 54\\). (Correct!) Step 2: Conclusion Both options represent valid sums of three squares.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Verify the options.",
        "workingOut": "Option 1: \\(5^2 + 5^2 + 2^2 = 25 + 25 + 4 = 54\\). (Correct!) \\\\ Option 2: \\(7^2 + 2^2 + 1^2 = 49 + 4 + 1 = 54\\). (Correct!)",
        "graphData": null
      },
      {
        "explanation": "Conclusion. Both options represent valid sums of three squares.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(83\\) as the sum of three or four perfect squares. Which of the following is correct?",
    "options": [
      "\\(9^2 + 1^2 + 1^2\\) (Sum of three squares)",
      "\\(7^2 + 5^2 + 3^2\\) (Sum of three squares)",
      "\\(8^2 + 3^2 + 3^2 + 1^2\\) (Sum of four squares)",
      "Both \\(9^2 + 1^2 + 1^2\\) and \\(8^2 + 3^2 + 3^2 + 1^2\\) are correct"
    ],
    "answer": 3,
    "solution": "Step 1: Verify both combinations Combination 1: \\(9^2 + 1^2 + 1^2 = 81 + 1 + 1 = 83\\) (3 squares). Combination 2: \\(8^2 + 3^2 + 3^2 + 1^2 = 64 + 9 + 9 + 1 = 83\\) (4 squares). Step 2: Conclusion Both are mathematically correct representations.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Verify both combinations.",
        "workingOut": "Combination 1: \\(9^2 + 1^2 + 1^2 = 81 + 1 + 1 = 83\\) (3 squares). \\\\ Combination 2: \\(8^2 + 3^2 + 3^2 + 1^2 = 64 + 9 + 9 + 1 = 83\\) (4 squares).",
        "graphData": null
      },
      {
        "explanation": "Conclusion. Both are mathematically correct representations.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Express \\(115\\) as the sum of four perfect squares.",
    "options": [
      "\\(9^2 + 4^2 + 4^2 + 2^2\\)",
      "\\(7^2 + 7^2 + 4^2 + 1^2\\)",
      "\\(8^2 + 5^2 + 5^2 + 1^2\\)",
      "\\(10^2 + 3^2 + 2^2 + 1^2\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Sum the squares in the first option \\(8^2 + 5^2 + 5^2 + 1^2 = 64 + 25 + 25 + 1 = 115\\). Step 2: Verify all numbers are squares All numbers in the sum (\\(64, 25, 25, 1\\)) are perfect squares (\\(8^2, 5^2, 5^2, 1^2\\)). Thus, \\(115 = 8^2 + 5^2 + 5^2 + 1^2\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Sum the squares in the first option. \\(8^2 + 5^2 + 5^2 + 1^2 = 64 + 25 + 25 + 1 = 115\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Verify all numbers are squares. All numbers in the sum (\\(64, 25, 25, 1\\)) are perfect squares (\\(8^2, 5^2, 5^2, 1^2\\)). Thus, \\(115 = 8^2 + 5^2 + 5^2 + 1^2\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2g",
    "topicCode": "2G",
    "topicTitle": "Squares and square roots",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Besides \\(9\\) (where \\(9^2 = 81\\) and \\(9^3 = 729\\) share no digits), which other positive integer less than \\(20\\) has a square that shares **none** of the same digits as its cube?",
    "options": [
      "\\(15\\)",
      "\\(14\\)",
      "\\(10\\)",
      "\\(12\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Understand the condition We need to find a number \\(n\\) such that the set of digits in \\(n^2\\) and the set of digits in \\(n^3\\) have an empty intersection. Step 2: Test the number 14 \\(14^2 = 196\\) (digits: \\(\\{1, 6, 9\\}\\)) \\(14^3 = 2744\\) (digits: \\(\\{2, 4, 7\\}\\)) These two sets of digits share absolutely no digits in common! Therefore, \\(14\\) is a correct answer. Step 3: Show why others are incorrect For \\(10\\): \\(10^2 = 100\\), \\(10^3 = 1000\\) (both share \\(0\\) and \\(1\\)). For \\(12\\): \\(12^2 = 144\\), \\(12^3 = 1728\\) (both share \\(1\\)). For \\(15\\): \\(15^2 = 225\\), \\(15^3 = 3375\\) (both share \\(5\\)).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Understand the condition. We need to find a number \\(n\\) such that the set of digits in \\(n^2\\) and the set of digits in \\(n^3\\) have an empty intersection.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the number 14. \\(14^2 = 196\\) (digits: \\(\\{1, 6, 9\\}\\))\\(14^3 = 2744\\) (digits: \\(\\{2, 4, 7\\}\\))These two sets of digits share absolutely no digits in common! Therefore, \\(14\\) is a correct answer.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Show why others are incorrect. For \\(10\\): \\(10^2 = 100\\), \\(10^3 = 1000\\) (both share \\(0\\) and \\(1\\)).For \\(12\\): \\(12^2 = 144\\), \\(12^3 = 1728\\) (both share \\(1\\)).For \\(15\\): \\(15^2 = 225\\), \\(15^3 = 3375\\) (both share \\(5\\)).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the highest common factor (HCF) of \\(18\\) and \\(30\\).",
    "options": [
      "12",
      "3",
      "9",
      "6"
    ],
    "answer": 3,
    "solution": "Step 1: List all factors Factors of \\(18\\): \\(\\{1, 2, 3, 6, 9, 18\\}\\) Factors of \\(30\\): \\(\\{1, 2, 3, 5, 6, 10, 15, 30\\}\\) Step 2: Find common factors and choose the largest Common factors: \\(\\{1, 2, 3, 6\\}\\). The highest common factor is \\(6\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "List all factors.",
        "workingOut": "Factors of \\(18\\): \\(\\{1, 2, 3, 6, 9, 18\\}\\) \\\\ Factors of \\(30\\): \\(\\{1, 2, 3, 5, 6, 10, 15, 30\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Find common factors and choose the largest. Common factors: \\(\\{1, 2, 3, 6\\}\\). The highest common factor is \\(6\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the highest common factor (HCF) of \\(28\\) and \\(42\\).",
    "options": [
      "28",
      "14",
      "4",
      "7"
    ],
    "answer": 1,
    "solution": "Step 1: List factors Factors of \\(28\\): \\(\\{1, 2, 4, 7, 14, 28\\}\\). Factors of \\(42\\): \\(\\{1, 2, 3, 6, 7, 14, 21, 42\\}\\). Step 2: Identify HCF Common factors: \\(\\{1, 2, 7, 14\\}\\). The highest is \\(14\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "List factors. Factors of \\(28\\): \\(\\{1, 2, 4, 7, 14, 28\\}\\). Factors of \\(42\\): \\(\\{1, 2, 3, 6, 7, 14, 21, 42\\}\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Identify HCF. Common factors: \\(\\{1, 2, 7, 14\\}\\). The highest is \\(14\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the highest common factor (HCF) of \\(60\\) and \\(72\\).",
    "options": [
      "18",
      "12",
      "24",
      "6"
    ],
    "answer": 1,
    "solution": "Step 1: Find prime factorizations \\(60 = 2^2 \\times 3 \\times 5\\) \\(72 = 2^3 \\times 3^2\\) Step 2: Calculate HCF Take the lowest power of common prime bases: HCF \\(= 2^2 \\times 3 = 4 \\times 3 = 12\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Find prime factorizations. \\(60 = 2^2 \\times 3 \\times 5\\)\\(72 = 2^3 \\times 3^2\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate HCF. Take the lowest power of common prime bases:HCF \\(= 2^2 \\times 3 = 4 \\times 3 = 12\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the highest common factor (HCF) of \\(75\\) and \\(105\\).",
    "options": [
      "5",
      "25",
      "15",
      "35"
    ],
    "answer": 2,
    "solution": "Step 1: Express as prime factors \\(75 = 3 \\times 5^2\\) \\(105 = 3 \\times 5 \\times 7\\) Step 2: Collect common bases The common prime factors are \\(3\\) and \\(5\\). HCF \\(= 3^1 \\times 5^1 = 15\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Express as prime factors. \\(75 = 3 \\times 5^2\\)\\(105 = 3 \\times 5 \\times 7\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Collect common bases. The common prime factors are \\(3\\) and \\(5\\).HCF \\(= 3^1 \\times 5^1 = 15\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the highest common factor (HCF) of \\(144\\) and \\(96\\).",
    "options": [
      "48",
      "12",
      "24",
      "16"
    ],
    "answer": 0,
    "solution": "Step 1: Factorize prime components \\(144 = 2^4 \\times 3^2\\) \\(96 = 2^5 \\times 3^1\\) Step 2: Find HCF HCF \\(= 2^4 \\times 3^1 = 16 \\times 3 = 48\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Factorize prime components. \\(144 = 2^4 \\times 3^2\\)\\(96 = 2^5 \\times 3^1\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Find HCF. HCF \\(= 2^4 \\times 3^1 = 16 \\times 3 = 48\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the highest common factor (HCF) of \\(250\\) and \\(150\\).",
    "options": [
      "25",
      "10",
      "100",
      "50"
    ],
    "answer": 3,
    "solution": "Step 1: Factorize numbers \\(250 = 50 \\times 5\\) \\(150 = 50 \\times 3\\) Step 2: Identify HCF The largest integer dividing both is \\(50\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Factorize numbers. \\(250 = 50 \\times 5\\)\\(150 = 50 \\times 3\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Identify HCF. The largest integer dividing both is \\(50\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the lowest common multiple (LCM) of \\(9\\) and \\(6\\).",
    "options": [
      "36",
      "18",
      "54",
      "3"
    ],
    "answer": 1,
    "solution": "Step 1: List multiples Multiples of \\(9\\): \\(9, 18, 27, 36, \\dots\\) Multiples of \\(6\\): \\(6, 12, 18, 24, \\dots\\) Step 2: Find the smallest shared multiple The first multiple in both lists is \\(18\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "List multiples.",
        "workingOut": "Multiples of \\(9\\): \\(9, 18, 27, 36, \\dots\\) \\\\ Multiples of \\(6\\): \\(6, 12, 18, 24, \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest shared multiple. The first multiple in both lists is \\(18\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the lowest common multiple (LCM) of \\(8\\) and \\(12\\).",
    "options": [
      "48",
      "4",
      "24",
      "96"
    ],
    "answer": 2,
    "solution": "Step 1: List multiples Multiples of \\(8\\): \\(8, 16, 24, 32 \\dots\\) Multiples of \\(12\\): \\(12, 24, 36 \\dots\\) Step 2: Identify LCM The smallest common multiple is \\(24\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "List multiples. Multiples of \\(8\\): \\(8, 16, 24, 32 \\dots\\)Multiples of \\(12\\): \\(12, 24, 36 \\dots\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Identify LCM. The smallest common multiple is \\(24\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the lowest common multiple (LCM) of \\(10\\) and \\(15\\).",
    "options": [
      "60",
      "30",
      "5",
      "150"
    ],
    "answer": 1,
    "solution": "Step 1: Compare multiples Multiples of \\(10\\) are \\(10, 20, 30, \\dots\\) Multiples of \\(15\\) are \\(15, 30, \\dots\\) Smallest common multiple is \\(30\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Compare multiples. Multiples of \\(10\\) are \\(10, 20, 30, \\dots\\)Multiples of \\(15\\) are \\(15, 30, \\dots\\)Smallest common multiple is \\(30\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the lowest common multiple (LCM) of \\(14\\) and \\(21\\).",
    "options": [
      "42",
      "84",
      "63",
      "7"
    ],
    "answer": 0,
    "solution": "Step 1: Prime factorizations \\(14 = 2 \\times 7\\) \\(21 = 3 \\times 7\\) Step 2: Calculate LCM Multiply highest powers of all prime factors: LCM \\(= 2^1 \\times 3^1 \\times 7^1 = 42\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Prime factorizations. \\(14 = 2 \\times 7\\)\\(21 = 3 \\times 7\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate LCM. Multiply highest powers of all prime factors:LCM \\(= 2^1 \\times 3^1 \\times 7^1 = 42\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the lowest common multiple (LCM) of \\(16\\) and \\(24\\).",
    "options": [
      "48",
      "8",
      "96",
      "72"
    ],
    "answer": 0,
    "solution": "Step 1: Prime factorizations \\(16 = 2^4\\) \\(24 = 2^3 \\times 3^1\\) Step 2: Calculate LCM LCM \\(= 2^4 \\times 3^1 = 16 \\times 3 = 48\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Prime factorizations. \\(16 = 2^4\\)\\(24 = 2^3 \\times 3^1\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate LCM. LCM \\(= 2^4 \\times 3^1 = 16 \\times 3 = 48\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2h",
    "topicCode": "2H",
    "topicTitle": "Lowest common multiple and highest common factor",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Find the lowest common multiple (LCM) of \\(30\\) and \\(45\\).",
    "options": [
      "90",
      "135",
      "15",
      "180"
    ],
    "answer": 0,
    "solution": "Step 1: Prime factorizations \\(30 = 2^1 \\times 3^1 \\times 5^1\\) \\(45 = 3^2 \\times 5^1\\) Step 2: Calculate LCM LCM \\(= 2^1 \\times 3^2 \\times 5^1 = 2 \\times 9 \\times 5 = 90\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Prime factorizations. \\(30 = 2^1 \\times 3^1 \\times 5^1\\)\\(45 = 3^2 \\times 5^1\\)",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate LCM. LCM \\(= 2^1 \\times 3^2 \\times 5^1 = 2 \\times 9 \\times 5 = 90\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2i",
    "topicCode": "2I",
    "topicTitle": "Divisibility tests",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "In the 6-digit number \\(3\\_5\\_2\\_\\), what digit must be in the units place to guarantee it is divisible by \\(2\\)?",
    "options": [
      "Only \\(2\\) or \\(4\\)",
      "Any odd digit",
      "Any even digit: \\(0, 2, 4, 6, 8\\)",
      "Only \\(0\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Recall the divisibility rule for 2 A number is divisible by \\(2\\) if and only if its units digit is even (\\(0, 2, 4, 6, or 8\\)). The other blanks can be filled with any digits.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Recall the divisibility rule for 2. A number is divisible by \\(2\\) if and only if its units digit is even (\\(0, 2, 4, 6, or 8\\)). The other blanks can be filled with any digits.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2i",
    "topicCode": "2I",
    "topicTitle": "Divisibility tests",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "To make the 6-digit number \\(3\\_5\\_2\\_\\) divisible by \\(10\\), what must the units digit be?",
    "options": [
      "\\(5\\)",
      "Either \\(0\\) or \\(5\\)",
      "\\(2\\)",
      "\\(0\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Divisibility by 10 rule A whole number is divisible by \\(10\\) if and only if its last digit is \\(0\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Divisibility by 10 rule. A whole number is divisible by \\(10\\) if and only if its last digit is \\(0\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2i",
    "topicCode": "2I",
    "topicTitle": "Divisibility tests",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "For the 6-digit number \\(3\\_5\\_2\\_\\), let the blanks be \\(a, b,\\) and \\(c\\) such that the number is \\(3a5b2c\\). If \\(a=1, b=4,\\) and the units digit is \\(c\\), which digit \\(c\\) makes the number divisible by \\(3\\)?",
    "options": [
      "\\(1, 4,\\) or \\(7\\)",
      "\\(0, 3, 6,\\) or \\(9\\)",
      "\\(2, 5,\\) or \\(8\\)",
      "Only \\(3\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Use divisibility rule for 3 A number is divisible by \\(3\\) if the sum of its digits is divisible by \\(3\\). Step 2: Calculate the sum of the digits Sum \\(= 3 + 1 + 5 + 4 + 2 + c = 15 + c\\). Step 3: Test values for c For \\(15+c\\) to be a multiple of \\(3\\), \\(c\\) can be \\(0\\) (\\(15\\)), \\(3\\) (\\(18\\)), \\(6\\) (\\(21\\)), or \\(9\\) (\\(24\\)).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Use divisibility rule for 3. A number is divisible by \\(3\\) if the sum of its digits is divisible by \\(3\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Calculate the sum of the digits. Sum \\(= 3 + 1 + 5 + 4 + 2 + c = 15 + c\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test values for c. For \\(15+c\\) to be a multiple of \\(3\\), \\(c\\) can be \\(0\\) (\\(15\\)), \\(3\\) (\\(18\\)), \\(6\\) (\\(21\\)), or \\(9\\) (\\(24\\)).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2i",
    "topicCode": "2I",
    "topicTitle": "Divisibility tests",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "To make the 6-digit number \\(3\\_5\\_2\\_\\) divisible by both \\(2\\) and \\(5\\), what must the units digit be?",
    "options": [
      "\\(5\\)",
      "Any even digit",
      "\\(0\\)",
      "Either \\(0\\) or \\(5\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Check conditions A number is divisible by both \\(2\\) and \\(5\\) if it is divisible by \\(10\\). Therefore, the units digit must be \\(0\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Check conditions. A number is divisible by both \\(2\\) and \\(5\\) if it is divisible by \\(10\\). Therefore, the units digit must be \\(0\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2i",
    "topicCode": "2I",
    "topicTitle": "Divisibility tests",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "For the number \\(3\\_5\\_2\\_\\) (written as \\(3a5b2c\\)), what is a combination of digits \\(b\\) and \\(c\\) that makes the number divisible by \\(8\\)? (Divisibility by \\(8\\) depends only on the last 3 digits, i.e., \\(b2c\\)).",
    "options": [
      "\\(b=2, c=4\\)",
      "\\(b=1, c=2\\)",
      "\\(b=1, c=8\\)",
      "\\(b=3, c=6\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Divisibility by 8 rule A number is divisible by \\(8\\) if the last three digits (\\(b2c\\)) form a multiple of \\(8\\). Step 2: Test the options Let's check \\(b=1, c=8\\): the last three digits form \\(128\\). \\(128 \\div 8 = 16\\) (with no remainder!). So \\(b=1, c=8\\) is correct.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Divisibility by 8 rule. A number is divisible by \\(8\\) if the last three digits (\\(b2c\\)) form a multiple of \\(8\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Test the options. Let's check \\(b=1, c=8\\): the last three digits form \\(128\\).\\(128 \\div 8 = 16\\) (with no remainder!). So \\(b=1, c=8\\) is correct.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2i",
    "topicCode": "2I",
    "topicTitle": "Divisibility tests",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following conditions on the units digit \\(c\\) of the 6-digit number \\(3a5b2c\\) ensures that the number is divisible by both \\(4\\) and \\(6\\), if the sum of all digits is already a multiple of \\(3\\)?",
    "options": [
      "The units digit \\(c\\) must be \\(2, 6,\\) or \\(8\\)",
      "The units digit \\(c\\) must be \\(0, 2, 4, 6,\\) or \\(8\\)",
      "The units digit \\(c\\) must be either \\(0, 4,\\) or \\(8\\)",
      "The units digit \\(c\\) must be \\(4\\) or \\(8\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Analyze divisibility by 4 A number is divisible by \\(4\\) if the last two digits (\\(2c\\)) are a multiple of \\(4\\). The multiples of \\(4\\) in the \\(20\\)s are \\(20, 24,\\) and \\(28\\). Thus, \\(c\\) must be \\(0, 4,\\) or \\(8\\). Step 2: Analyze divisibility by 6 A number is divisible by \\(6\\) if it is divisible by both \\(2\\) and \\(3\\). Since the sum of the digits is already a multiple of \\(3\\), and \\(c \\in \\{0, 4, 8\\}\\) are all even (making the number divisible by \\(2\\)), the number will automatically be divisible by both, hence by \\(6\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Analyze divisibility by 4. A number is divisible by \\(4\\) if the last two digits (\\(2c\\)) are a multiple of \\(4\\). The multiples of \\(4\\) in the \\(20\\)s are \\(20, 24,\\) and \\(28\\). Thus, \\(c\\) must be \\(0, 4,\\) or \\(8\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Analyze divisibility by 6. A number is divisible by \\(6\\) if it is divisible by both \\(2\\) and \\(3\\). Since the sum of the digits is already a multiple of \\(3\\), and \\(c \\in \\{0, 4, 8\\}\\) are all even (making the number divisible by \\(2\\)), the number will automatically be divisible by both, hence by \\(6\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2i",
    "topicCode": "2I",
    "topicTitle": "Divisibility tests",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "For the 6-digit number \\(3\\_5\\_2\\_\\) (written as \\(3a5b2c\\)), what condition must digit \\(a\\) and \\(b\\) satisfy to make the number divisible by both \\(3\\) and \\(10\\)?",
    "options": [
      "\\(c = 0\\), and \\(a+b\\) must be an even number.",
      "\\(c = 0\\), and the sum \\(a + b\\) must be such that \\((10 + a + b)\\) is a multiple of \\(3\\).",
      "\\(c = 0\\), and \\(a+b\\) must equal \\(9\\).",
      "\\(c = 5\\), and \\(a+b\\) is any value."
    ],
    "answer": 1,
    "solution": "Step 1: Divisibility by 10 condition To be divisible by \\(10\\), the units digit must be \\(c = 0\\). Step 2: Divisibility by 3 condition The sum of the digits must be a multiple of \\(3\\). Sum \\(= 3 + a + 5 + b + 2 + 0 = 10 + a + b\\). So \\((10 + a + b)\\) must be a multiple of \\(3\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Divisibility by 10 condition. To be divisible by \\(10\\), the units digit must be \\(c = 0\\).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Divisibility by 3 condition. The sum of the digits must be a multiple of \\(3\\).Sum \\(= 3 + a + 5 + b + 2 + 0 = 10 + a + b\\).So \\((10 + a + b)\\) must be a multiple of \\(3\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2i",
    "topicCode": "2I",
    "topicTitle": "Divisibility tests",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "To make the 6-digit number \\(3\\_5\\_2\\_\\) divisible by \\(5\\) but NOT by \\(10\\), what must the units digit be?",
    "options": [
      "Any odd digit",
      "\\(0\\)",
      "Either \\(0\\) or \\(5\\)",
      "\\(5\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Apply rules for 5 and 10 A number is divisible by \\(5\\) if its units digit is \\(0\\) or \\(5\\). If it cannot be divisible by \\(10\\), it cannot end in \\(0\\). Thus, the units digit must be exactly \\(5\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Apply rules for 5 and 10. A number is divisible by \\(5\\) if its units digit is \\(0\\) or \\(5\\). If it cannot be divisible by \\(10\\), it cannot end in \\(0\\). Thus, the units digit must be exactly \\(5\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2i",
    "topicCode": "2I",
    "topicTitle": "Divisibility tests",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "To make the 6-digit number \\(3a5b2c\\) divisible by \\(2\\) but NOT by \\(4\\), what are the possible values for the units digit \\(c\\)?",
    "options": [
      "Only \\(2\\)",
      "\\(2, 4,\\) or \\(6\\)",
      "\\(0, 4,\\) or \\(8\\)",
      "\\(2\\) or \\(6\\)"
    ],
    "answer": 3,
    "solution": "Step 1: Condition for divisibility by 2 The units digit \\(c\\) must be even (\\(0, 2, 4, 6, 8\\)). Step 2: Condition for non-divisibility by 4 The last two digits (\\(2c\\)) must NOT be a multiple of \\(4\\). The multiples of \\(4\\) in the \\(20\\)s are \\(20, 24, 28\\). So \\(c\\) cannot be \\(0, 4,\\) or \\(8\\). Therefore, the only possible values for \\(c\\) are \\(2\\) or \\(6\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Condition for divisibility by 2. The units digit \\(c\\) must be even (\\(0, 2, 4, 6, 8\\)).",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Condition for non-divisibility by 4. The last two digits (\\(2c\\)) must NOT be a multiple of \\(4\\). The multiples of \\(4\\) in the \\(20\\)s are \\(20, 24, 28\\).So \\(c\\) cannot be \\(0, 4,\\) or \\(8\\).Therefore, the only possible values for \\(c\\) are \\(2\\) or \\(6\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Two factors of \\(252\\), namely \\(12\\) and \\(21\\), can each be written by reversing the digits of the other. Which of the following is another number that has a pair of factors with this same digit-reversal property?",
    "options": [
      "\\(380\\) (with factor pair \\(14\\) and \\(41\\))",
      "\\(480\\) (with factor pair \\(13\\) and \\(31\\))",
      "\\(620\\) (with factor pair \\(15\\) and \\(51\\))",
      "\\(504\\) (with factor pair \\(12\\) and \\(21\\))"
    ],
    "answer": 3,
    "solution": "Step 1: Check the factor pair 12 and 21 for the number 504 \\(504 \\div 12 = 42\\) (No remainder) \\(504 \\div 21 = 24\\) (No remainder) So both \\(12\\) and \\(21\\) are factors of \\(504\\). Since \\(12\\) is the digit reversal of \\(21\\), this satisfies the property. Step 2: Verify incorrect options For \\(480\\), \\(13\\) and \\(31\\) do not divide it exactly (\\(480 \\div 13 = 36.92\\)). Therefore, \\(504\\) is the correct answer.",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Check the factor pair 12 and 21 for the number 504. \\(504 \\div 12 = 42\\) (No remainder)\\(504 \\div 21 = 24\\) (No remainder)So both \\(12\\) and \\(21\\) are factors of \\(504\\). Since \\(12\\) is the digit reversal of \\(21\\), this satisfies the property.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Verify incorrect options. For \\(480\\), \\(13\\) and \\(31\\) do not divide it exactly (\\(480 \\div 13 = 36.92\\)). Therefore, \\(504\\) is the correct answer.",
        "workingOut": null,
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-2",
    "chapterTitle": "Chapter 2: Factors, multiples, primes and divisibility",
    "topicId": "y7-2a",
    "topicCode": "2A",
    "topicTitle": "Factors and multiples",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Find a number other than \\(403\\) that is a multiple of both \\(13\\) and \\(31\\), so that \\(13\\) and \\(31\\) (which are digit reversals of each other) are both factors of this number.",
    "options": [
      "\\(806\\)",
      "\\(700\\)",
      "\\(600\\)",
      "\\(500\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Find multiples of 13 and 31 Any multiple of \\(13 \\times 31 = 403\\) will have both \\(13\\) and \\(31\\) as factors. \\(806\\) is \\(403 \\times 2\\), so it is divisible by both \\(13\\) and \\(31\\).",
    "createdAt": "2026-06-15T13:52:20.620Z",
    "solutionSteps": [
      {
        "explanation": "Find multiples of 13 and 31. Any multiple of \\(13 \\times 31 = 403\\) will have both \\(13\\) and \\(31\\) as factors. \\(806\\) is \\(403 \\times 2\\), so it is divisible by both \\(13\\) and \\(31\\).",
        "workingOut": null,
        "graphData": null
      }
    ]
  }
];


export const importYear7Ch2 = async (forceReset = false) => {
  console.log('[importYear7Ch2] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    if (forceReset) {
      console.log('[importYear7Ch2] Force Reset requested. Wiping all questions for chapter y7-2...');
      const oldSnap = await db.collection('questions').where('chapterId', '==', 'y7-2').get();
      if (!oldSnap.empty) {
        const batchSize = 400;
        let batch = db.batch();
        let count = 0;
        for (const doc of oldSnap.docs) {
          batch.delete(doc.ref);
          count++;
          if (count === batchSize) {
            await batch.commit();
            batch = db.batch();
            count = 0;
          }
        }
        if (count > 0) {
          await batch.commit();
        }
        console.log('[importYear7Ch2] Deleted old questions successfully.');
      }
    }
    
    const existingSnap = await db.collection('questions').where('chapterId', '==', 'y7-2').get();
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    const chunkSize = 400;
    for (let i = 0; i < allQuestions.length; i += chunkSize) {
      const chunk = allQuestions.slice(i, i + chunkSize);
      const batch = db.batch();
      let batchCount = 0;
      
      for (const q of chunk) {
        if (forceReset || !existingQuestions.has(q.question.trim())) {
          const docRef = db.collection('questions').doc();
          batch.set(docRef, q);
          importedCount++;
          batchCount++;
        }
      }
      
      if (batchCount > 0) {
        await batch.commit();
        console.log(`[${importedCount} questions synced]`);
      }
    }
  } catch (error) { 
    console.error(error); 
    throw error; 
  }
  return importedCount;
};

