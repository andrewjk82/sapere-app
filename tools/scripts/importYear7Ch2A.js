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
      "\\(\\{1, 2, 3, 4, 8\\}\\)",
      "\\(\\{1, 2, 4\\}\\)",
      "\\(\\{1, 2, 4, 8\\}\\)",
      "\\(\\{2, 4, 8\\}\\)"
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
      "\\(\\{2, 3, 6, 9\\}\\)",
      "\\(\\{1, 2, 3, 6, 9, 18\\}\\)",
      "\\(\\{1, 2, 4, 6, 9, 18\\}\\)"
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
      "\\(\\{1, 3, 21\\}\\)",
      "\\(\\{1, 2, 3, 7, 21\\}\\)",
      "\\(\\{1, 3, 7, 21\\}\\)",
      "\\(\\{3, 7, 21\\}\\)"
    ],
    "answer": 2,
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
      "\\(\\{1, 2, 4, 5, 10, 20\\}\\)",
      "\\(\\{1, 2, 5, 10, 20\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 10, 20\\}\\)"
    ],
    "answer": 1,
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
      "\\(\\{0, 1, 13\\}\\)",
      "\\(\\{1, 3, 13\\}\\)",
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
      "\\(\\{2, 5\\}\\)",
      "\\(\\{1, 5, 10\\}\\)",
      "\\(\\{1, 2, 5, 10\\}\\)",
      "\\(\\{1, 2, 10\\}\\)"
    ],
    "answer": 2,
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
      "\\(\\{1, 2, 4, 8, 16\\}\\)",
      "\\(\\{1, 2, 8, 16\\}\\)",
      "\\(\\{1, 2, 4, 6, 8, 16\\}\\)",
      "\\(\\{2, 4, 8\\}\\)"
    ],
    "answer": 0,
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
      "\\(\\{1, 3, 17\\}\\)",
      "\\(\\{1, 17\\}\\)",
      "\\(\\{17\\}\\)",
      "\\(\\{1, 7, 17\\}\\)"
    ],
    "answer": 1,
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
      "\\(\\{1, 2, 3, 4, 6, 12, 24\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 8, 12, 24\\}\\)",
      "\\(\\{1, 2, 4, 6, 8, 12, 24\\}\\)",
      "\\(\\{1, 2, 3, 6, 8, 12, 24\\}\\)"
    ],
    "answer": 1,
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
      "\\(\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 8, 9, 12, 18, 36\\}\\)",
      "\\(\\{1, 2, 3, 4, 9, 12, 18, 36\\}\\)",
      "\\(\\{1, 2, 3, 4, 6, 12, 18, 36\\}\\)"
    ],
    "answer": 0,
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
      "\\(\\{1, 3, 15\\}\\)",
      "\\(\\{1, 3, 5, 15\\}\\)",
      "\\(\\{3, 5\\}\\)"
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
      "\\(\\{1, 2, 7, 14, 28\\}\\)",
      "\\(\\{1, 2, 4, 7, 14, 28\\}\\)",
      "\\(\\{1, 2, 4, 14, 28\\}\\)",
      "\\(\\{1, 2, 4, 7, 8, 14, 28\\}\\)"
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
      "\\(\\{1, 3, 9, 27\\}\\)",
      "\\(\\{1, 9, 27\\}\\)",
      "\\(\\{1, 3, 27\\}\\)",
      "\\(\\{1, 3, 7, 9, 27\\}\\)"
    ],
    "answer": 0,
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
      "\\(\\{1, 2, 8, 16, 32, 64\\}\\)",
      "\\(\\{1, 2, 4, 8, 32, 64\\}\\)"
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
      "\\(\\{1, 2, 4, 5, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 12, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)"
    ],
    "answer": 3,
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
      "\\(\\{1, 2, 5, 10, 25, 50\\}\\)",
      "\\(\\{1, 2, 4, 5, 10, 25, 50\\}\\)",
      "\\(\\{1, 2, 5, 25, 50\\}\\)",
      "\\(\\{1, 2, 10, 25, 50\\}\\)"
    ],
    "answer": 0,
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
      "\\(\\{8, 12, 14, 48\\}\\)",
      "\\(\\{12, 48, 60\\}\\)",
      "\\(\\{8, 12, 30, 48, 60\\}\\)",
      "\\(\\{8, 12, 48, 60\\}\\)"
    ],
    "answer": 3,
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
      "\\(\\{45, 135, 210, 225, 300\\}\\)",
      "\\(\\{45, 135, 160, 225, 300\\}\\)",
      "\\(\\{45, 210, 225, 300\\}\\)",
      "\\(\\{135, 210, 225, 250, 300\\}\\)"
    ],
    "answer": 0,
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
      "\\(7, 14, 21, 28, 35\\)",
      "\\(1, 7, 14, 21, 28\\)",
      "\\(7, 14, 21, 28, 36\\)",
      "\\(14, 21, 28, 35, 42\\)"
    ],
    "answer": 0,
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
      "\\(1, 9, 18, 27, 36\\)",
      "\\(18, 27, 36, 45, 54\\)",
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
      "\\(24, 36, 48, 60, 72\\)",
      "\\(12, 24, 38, 48, 60\\)",
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
      "\\(28, 42, 56, 70, 84\\)",
      "\\(14, 24, 34, 44, 54\\)",
      "\\(14, 28, 42, 56, 70\\)",
      "\\(14, 28, 44, 56, 70\\)"
    ],
    "answer": 2,
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
      "\\(32, 48, 64, 80, 96\\)",
      "\\(16, 32, 48, 64, 80\\)",
      "\\(1, 16, 32, 48, 64\\)"
    ],
    "answer": 2,
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
      "\\(21, 41, 61, 81, 101\\)",
      "\\(21, 42, 61, 84, 105\\)",
      "\\(21, 42, 63, 84, 105\\)",
      "\\(42, 63, 84, 105, 126\\)"
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
      "\\(\\{39, 52, 70, 91\\}\\)",
      "\\(\\{52, 91, 115, 130\\}\\)",
      "\\(\\{39, 70, 91, 130\\}\\)",
      "\\(\\{39, 52, 91, 130\\}\\)"
    ],
    "answer": 3,
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
      "\\(\\{4, 5, 10, 12, 14, 15, 20, 30\\}\\)",
      "\\(\\{4, 5, 10, 12, 15, 20, 30\\}\\)",
      "\\(\\{4, 5, 8, 10, 12, 15, 20, 30\\}\\)",
      "\\(\\{5, 10, 15, 20, 24, 30\\}\\)"
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
      "\\(8 \\times 36\\)",
      "\\(9 \\times 32\\)",
      "\\(12 \\times 24\\)",
      "\\(6 \\times 48\\)"
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
      "\\(9 \\times 50\\)",
      "\\(5 \\times 90\\)",
      "\\(15 \\times 30\\)",
      "\\(10 \\times 45\\)"
    ],
    "answer": 2,
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
      "\\(169 \\times 1\\)",
      "\\(1 \\times 169\\)",
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
      "\\(10 \\times 60\\)",
      "\\(6 \\times 100\\)",
      "\\(15 \\times 40\\)"
    ],
    "answer": 3,
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
      "\\(17 \\times 17\\)",
      "\\(13 \\times 23\\)",
      "\\(19 \\times 19\\)"
    ],
    "answer": 1,
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
      "\\(8 \\times 45\\)",
      "\\(9 \\times 40\\)",
      "\\(10 \\times 36\\)"
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
      "\\(\\{1, 2, 4, 8\\}\\)",
      "\\(\\{1, 2, 3, 4, 8\\}\\)",
      "\\(\\{1, 2, 4, 8, 16\\}\\)",
      "\\(\\{1, 2, 4, 6, 8\\}\\)"
    ],
    "answer": 0,
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
      "\\(\\{12, 24, 36\\}\\)",
      "\\(\\{12, 24, 30, 36\\}\\)",
      "\\(\\{24, 36\\}\\)",
      "\\(\\{12, 18, 24, 36\\}\\)"
    ],
    "answer": 0,
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
      "\\(56\\)",
      "\\(42\\)",
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
      "\\(108\\)",
      "\\(112\\)",
      "\\(104\\)",
      "\\(120\\)"
    ],
    "answer": 1,
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
      "\\(216\\)",
      "\\(208\\)",
      "\\(210\\)"
    ],
    "answer": 2,
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
      "\\(312\\)",
      "\\(320\\)",
      "\\(318\\)",
      "\\(304\\)"
    ],
    "answer": 0,
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
      "\\(84\\)",
      "\\(96\\)",
      "\\(72\\)",
      "\\(80\\)"
    ],
    "answer": 0,
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
      "\\(144\\)",
      "\\(162\\)",
      "\\(156\\)",
      "\\(168\\)"
    ],
    "answer": 2,
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
      "\\(128\\)",
      "\\(120\\)"
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
      "\\(72\\)",
      "\\(68\\)",
      "\\(84\\)",
      "\\(60\\)"
    ],
    "answer": 0,
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
      "\\(384\\)",
      "\\(396\\)",
      "\\(402\\)",
      "\\(408\\)"
    ],
    "answer": 1,
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
      "\\(804\\)",
      "\\(816\\)",
      "\\(800\\)"
    ],
    "answer": 1,
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
      "\\(\\{1, 2, 4, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 5, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 8, 10, 20, 40\\}\\)",
      "\\(\\{1, 2, 4, 5, 10, 20, 40\\}\\)"
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
      "\\(\\{1, 5\\}\\)",
      "\\(\\{1, 3, 5\\}\\)",
      "\\(\\{1, 3, 5, 6\\}\\)",
      "\\(\\{3, 5\\}\\)"
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
      "\\(\\{1, 3, 9, 15, 45\\}\\)",
      "\\(\\{1, 3, 5, 9, 15, 45\\}\\)",
      "\\(\\{1, 5, 9, 15, 45\\}\\)"
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
      "Because any number multiplied by \\(1\\) becomes \\(1\\).",
      "Because \\(1\\) is the smallest whole number, so it fits inside all other numbers.",
      "Because dividing any whole number \\(N\\) by \\(1\\) results in \\(N\\) with a remainder of zero (\\(N = 1 \\times N\\)).",
      "Because \\(1\\) is an odd number, and odd numbers divide everything."
    ],
    "answer": 2,
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
      "Because dividing by \\(0\\) is always zero.",
      "Because \\(0\\) can be written as \\(N \\times 0\\), leaving no remainder when divided by \\(N\\).",
      "Because \\(0\\) is the smallest whole number.",
      "Because all non-zero numbers are multiples of \\(0\\)."
    ],
    "answer": 1,
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
      "\\(\\{1, 2\\}\\)",
      "None",
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
      "Because any whole number \\(N\\) multiplied by \\(0\\) yields \\(0\\).",
      "Because zero is an even number.",
      "Because you cannot divide by zero.",
      "Because zero is less than \\(N\\)."
    ],
    "answer": 0,
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
      "The factors of \\(28\\) (excluding \\(28\\)) are \\(1, 2, 4, 14,\\) and \\(28\\), and their sum is \\(49\\).",
      "The multiples of \\(28\\) are \\(1, 2, 4, 7,\\) and \\(14\\).",
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
      "\\(1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 496\\)",
      "\\(2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 = 495\\)",
      "\\(1 + 3 + 9 + 27 + 81 + 124 + 251 = 496\\)",
      "\\(1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + 256 = 496\\)"
    ],
    "answer": 0,
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
      "Because it is a perfect square, so one of its factor pairs consists of a number multiplied by itself (\\(6 \\times 6\\)), which is counted only once.",
      "Because it is an even number, and all even numbers have an odd number of factors."
    ],
    "answer": 2,
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
      "\\(64\\)",
      "\\(40\\)",
      "\\(49\\)"
    ],
    "answer": 3,
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
      "\\(100\\)",
      "\\(96\\)",
      "\\(81\\)",
      "\\(99\\)"
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
  }
];


export const importYear7Ch2A = async (forceReset = false) => {
  console.log('[importYear7Ch2A] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const targetTopics = ['y7-2a'];

    if (forceReset) {
      console.log('[importYear7Ch2A] Force Reset requested. Wiping affected topics...');
      for (const topicId of targetTopics) {
        const oldSnap = await db.collection('questions').where('topicId', '==', topicId).get();
        for (const d of oldSnap.docs) { 
          await d.ref.delete(); 
        }
      }
      console.log('[importYear7Ch2A] Deleted old questions successfully.');
    }
    
    const existingQuestions = new Set();
    if (!forceReset) {
      for (const topicId of targetTopics) {
        const snap = await db.collection('questions').where('topicId', '==', topicId).get();
        snap.docs.forEach(doc => existingQuestions.add(doc.data().question.trim()));
      }
    }
    
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

