import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "id": "4C66jfdjbVhFLqw6jCCS",
    "chapterId": "y7-18",
    "chapterTitle": "Chapter 18: Statistics and Graphs",
    "topicId": "y7-18a",
    "topicCode": "18A",
    "topicTitle": "Reading tables",
    "year": "Year 7",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T07:27:18.231Z",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 702000000
    },
    "isNew": false,
    "solutionSteps": [],
    "answer": "",
    "question": "Data has been collected on the nationalities of some of the visitors to certain island resorts. The table below gives the available data. In the table, (A) indicates that the country is in Asia, (E) indicates that the country is in Europe and (O) indicates that the country is neither in Asia nor in Europe. Note that the numbers are in <strong>tens of thousands per year</strong>.\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 420px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #3b82f6; color: white;\">\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Nationality of visitor</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Number of visitors<br/><span style=\"font-size: 11px; font-weight: normal; opacity: 0.9;\">(tens of thousands per year)</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Australia (O)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">0.5</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Britain (E)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">6</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">France (E)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">3.5</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Belgium (E)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">14</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Japan (A)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">23</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Singapore (A)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">5</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">USA (O)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">1</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Italy (E)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">45</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Germany (E)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">23</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Korea (A)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">5</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Russia (E)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">12</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">New Zealand (O)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">0.25</td></tr>\n    </tbody>\n  </table>\n</div>",
    "solution": "",
    "hint": "Calculate step-by-step using the values in the table. Remember the numbers are in tens of thousands.",
    "options": [],
    "subQuestions": [
      {
        "id": "4C66jfdjbVhFLqw6jCCS_a",
        "type": "multiple_choice",
        "question": "a) What is the total number of visitors from Japan?",
        "options": [
          {
            "text": "\\(23,000\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(230,000\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(2,300\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(2,300,000\\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "solutionSteps": [
          {
            "explanation": "Locate Japan (A) in the table.",
            "workingOut": "Japan corresponds to 23 ten-thousands."
          },
          {
            "explanation": "Multiply by 10,000 to convert to single visitors.",
            "workingOut": "\\(23 \\times 10,000 = 230,000\\) visitors per year."
          }
        ]
      },
      {
        "id": "4C66jfdjbVhFLqw6jCCS_b",
        "type": "multiple_choice",
        "question": "b) What is the total number of visitors from Asia?",
        "options": [
          {
            "text": "\\(300,000\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(33,000\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(280,000\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(330,000\\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "solutionSteps": [
          {
            "explanation": "Identify all Asian countries (marked with A) in the table.",
            "workingOut": "Japan (23), Singapore (5), and Korea (5)."
          },
          {
            "explanation": "Add these numbers together and multiply by 10,000.",
            "workingOut": "Sum = \\(23 + 5 + 5 = 33\\) ten-thousands. \\(33 \\times 10,000 = 330,000\\) visitors from Asia."
          }
        ]
      },
      {
        "id": "4C66jfdjbVhFLqw6jCCS_c",
        "type": "multiple_choice",
        "question": "c) What percentage of the total number of visitors came from Europe? Give your answer to the nearest per cent.",
        "options": [
          {
            "text": "65%",
            "imageUrl": ""
          },
          {
            "text": "70%",
            "imageUrl": ""
          },
          {
            "text": "75%",
            "imageUrl": ""
          },
          {
            "text": "80%",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "solutionSteps": [
          {
            "explanation": "Calculate the total visitors from all countries.",
            "workingOut": "Total = \\(0.5 + 6 + 3.5 + 14 + 23 + 5 + 1 + 45 + 23 + 5 + 12 + 0.25 = 138.25\\) ten-thousands."
          },
          {
            "explanation": "Calculate the sum for European countries (E).",
            "workingOut": "Europe Sum = Britain (6) + France (3.5) + Belgium (14) + Italy (45) + Germany (23) + Russia (12) = 103.5 ten-thousands."
          },
          {
            "explanation": "Find the percentage.",
            "workingOut": "Europe Percentage = \\(\\frac{103.5}{138.25} \\times 100 \\approx 74.86\\% \\approx 75\\%\\)."
          }
        ]
      }
    ],
    "type": "multipart",
    "timeLimit": 240
  },
  {
    "id": "EOE2CtMLywrbj3Gndq46",
    "chapterId": "y7-18",
    "chapterTitle": "Chapter 18: Statistics and Graphs",
    "topicId": "y7-18a",
    "topicCode": "18A",
    "topicTitle": "Reading tables",
    "year": "Year 7",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T07:27:18.231Z",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 702000000
    },
    "isNew": false,
    "solutionSteps": [],
    "answer": "",
    "question": "The first table below gives the results of a tennis tournament between Rishi, Bryce, Gerald and John. Complete the second table (the summary table) and answer parts (a) to (c):\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 550px; border-collapse: collapse; font-family: inherit; font-size: 13px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #8b5cf6; color: white;\">\n        <th rowspan=\"2\" style=\"padding: 12px; font-weight: 600; border: 1px solid #cbd5e1; vertical-align: middle;\">Match</th>\n        <th colspan=\"4\" style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1;\">Sets won</th>\n      </tr>\n      <tr style=\"background: #7c3aed; color: white;\">\n        <th style=\"padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 20%;\">Rishi</th>\n        <th style=\"padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 20%;\">Bryce</th>\n        <th style=\"padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 20%;\">Gerald</th>\n        <th style=\"padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 20%;\">John</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Rishi vs Bryce</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">0</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">3</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Rishi vs Gerald</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">3</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">2</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Rishi vs John</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">3</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">2</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Bryce vs Gerald</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">3</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">1</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Bryce vs John</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">3</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">0</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Gerald vs John</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;\"></td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">3</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">2</td></tr>\n    </tbody>\n  </table>\n</div>\n\nComplete the following summary table using the information given above.\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 550px; border-collapse: collapse; font-family: inherit; font-size: 13px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #3b82f6; color: white;\">\n        <th rowspan=\"2\" style=\"padding: 12px; font-weight: 600; border: 1px solid #cbd5e1; vertical-align: middle; text-align: left;\">Player</th>\n        <th colspan=\"2\" style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1;\">Matches</th>\n        <th colspan=\"2\" style=\"padding: 6px; font-weight: 600; border: 1px solid #cbd5e1;\">Sets</th>\n      </tr>\n      <tr style=\"background: #2563eb; color: white;\">\n        <th style=\"padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;\">Won</th>\n        <th style=\"padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;\">Lost</th>\n        <th style=\"padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;\">Won</th>\n        <th style=\"padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;\">Lost</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left;\">Rishi</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left;\">Bryce</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left;\">Gerald</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left;\">John</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;\">(To complete)</td></tr>\n    </tbody>\n  </table>\n</div>",
    "solution": "",
    "hint": "Analyze each match in the first table to complete the summary table, then answer each question.",
    "options": [],
    "subQuestions": [
      {
        "id": "EOE2CtMLywrbj3Gndq46_a",
        "type": "multiple_choice",
        "question": "a) Who won the most matches?",
        "options": [
          {
            "text": "Gerald",
            "imageUrl": ""
          },
          {
            "text": "Rishi",
            "imageUrl": ""
          },
          {
            "text": "John",
            "imageUrl": ""
          },
          {
            "text": "Bryce",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "solutionSteps": [
          {
            "explanation": "Determine the number of wins for each player from the matches.",
            "workingOut": "Rishi vs Bryce: Bryce won (0-3)\nRishi vs Gerald: Rishi won (3-2)\nRishi vs John: Rishi won (3-2)\nBryce vs Gerald: Bryce won (3-1)\nBryce vs John: Bryce won (3-0)\nGerald vs John: Gerald won (3-2)."
          },
          {
            "explanation": "Count the wins: Rishi (2), Bryce (3), Gerald (1), John (0).",
            "workingOut": "Bryce won the most matches (3 wins)."
          }
        ]
      },
      {
        "id": "EOE2CtMLywrbj3Gndq46_b",
        "type": "multiple_choice",
        "question": "b) Who played the most sets?",
        "options": [
          {
            "text": "Bryce",
            "imageUrl": ""
          },
          {
            "text": "John",
            "imageUrl": ""
          },
          {
            "text": "Gerald",
            "imageUrl": ""
          },
          {
            "text": "Rishi",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "solutionSteps": [
          {
            "explanation": "Sum the sets won and lost for each player.",
            "workingOut": "Rishi: 6 won, 7 lost (13 total)\nBryce: 9 won, 1 lost (10 total)\nGerald: 6 won, 8 lost (14 total)\nJohn: 4 won, 9 lost (13 total)."
          },
          {
            "explanation": "Compare the total sets played.",
            "workingOut": "Gerald played the most sets (14 sets)."
          }
        ]
      },
      {
        "id": "EOE2CtMLywrbj3Gndq46_c",
        "type": "multiple_choice",
        "question": "c) What percentage of the matches Gerald played did he win?",
        "options": [
          {
            "text": "33%",
            "imageUrl": ""
          },
          {
            "text": "25%",
            "imageUrl": ""
          },
          {
            "text": "50%",
            "imageUrl": ""
          },
          {
            "text": "67%",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Determine Gerald's matches played and matches won.",
            "workingOut": "Gerald played 3 matches (vs Rishi, vs Bryce, vs John) and won exactly 1 match (vs John)."
          },
          {
            "explanation": "Calculate the percentage.",
            "workingOut": "\\(\\frac{1}{3} \\times 100 \\approx 33.33\\% \\approx 33\\%\\)."
          }
        ]
      }
    ],
    "type": "multipart",
    "timeLimit": 240
  },
  {
    "id": "aqYal1bkIVWNQ9nwQbnL",
    "chapterId": "y7-18",
    "chapterTitle": "Chapter 18: Statistics and Graphs",
    "topicId": "y7-18a",
    "topicCode": "18A",
    "topicTitle": "Reading tables",
    "year": "Year 7",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T07:27:18.231Z",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 702000000
    },
    "isNew": false,
    "solutionSteps": [],
    "answer": "",
    "question": "A small country has a number of island resorts. The following information was collected for five of these resorts.\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 550px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #10b981; color: white;\">\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Name of resort</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Capacity<br/><span style=\"font-size: 11px; font-weight: normal; opacity: 0.9;\">(maximum guests at one time)</span></th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Number of staff<br/><span style=\"font-size: 11px; font-weight: normal; opacity: 0.9;\">(recreation for guests)</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Belle de Mer</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">115</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">5</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Dream Island</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">243</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">20</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Hibiscus Garden</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">146</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">13</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Thalassa</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">76</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">5</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;\">Tropic Isle</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">400</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">22</td></tr>\n    </tbody>\n  </table>\n</div>",
    "solution": "",
    "hint": "Read values directly from the table, summing or creating ratios where required.",
    "options": [],
    "subQuestions": [
      {
        "id": "aqYal1bkIVWNQ9nwQbnL_a",
        "type": "multiple_choice",
        "question": "a) What is the maximum number of guests who can stay at the Hibiscus Garden resort?",
        "options": [
          {
            "text": "243",
            "imageUrl": ""
          },
          {
            "text": "115",
            "imageUrl": ""
          },
          {
            "text": "400",
            "imageUrl": ""
          },
          {
            "text": "146",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "solutionSteps": [
          {
            "explanation": "Locate Hibiscus Garden in the table.",
            "workingOut": "Look at the 'Capacity' column for Hibiscus Garden: 146 guests."
          }
        ]
      },
      {
        "id": "aqYal1bkIVWNQ9nwQbnL_b",
        "type": "multiple_choice",
        "question": "b) How many staff are involved in recreation for guests at Tropic Isle?",
        "options": [
          {
            "text": "5",
            "imageUrl": ""
          },
          {
            "text": "20",
            "imageUrl": ""
          },
          {
            "text": "13",
            "imageUrl": ""
          },
          {
            "text": "22",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "solutionSteps": [
          {
            "explanation": "Locate Tropic Isle in the table.",
            "workingOut": "Look at the 'Number of staff' column for Tropic Isle: 22 staff."
          }
        ]
      },
      {
        "id": "aqYal1bkIVWNQ9nwQbnL_c",
        "type": "multiple_choice",
        "question": "c) What is the total capacity of the five resorts in the table?",
        "options": [
          {
            "text": "950",
            "imageUrl": ""
          },
          {
            "text": "980",
            "imageUrl": ""
          },
          {
            "text": "880",
            "imageUrl": ""
          },
          {
            "text": "1,020",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "solutionSteps": [
          {
            "explanation": "Sum the capacities of all 5 resorts.",
            "workingOut": "Total Capacity = \\(115 + 243 + 146 + 76 + 400 = 980\\) guests."
          }
        ]
      },
      {
        "id": "aqYal1bkIVWNQ9nwQbnL_d",
        "type": "multiple_choice",
        "question": "d) What is the ratio of staff to guests at the Hibiscus Garden?",
        "options": [
          {
            "text": "\\(5 : 76\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(146 : 13\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(13 : 146\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(13 : 115\\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "solutionSteps": [
          {
            "explanation": "Retrieve staff and capacity values for Hibiscus Garden.",
            "workingOut": "Staff = 13, Guests = 146."
          },
          {
            "explanation": "State the ratio in simplest form.",
            "workingOut": "Ratio of staff to guests = \\(13 : 146\\)."
          }
        ]
      }
    ],
    "type": "multipart",
    "timeLimit": 240
  },
  {
    "id": "vIuMtUyprlQulGcnQv4O",
    "chapterId": "y7-18",
    "chapterTitle": "Chapter 18: Statistics and Graphs",
    "topicId": "y7-18a",
    "topicCode": "18A",
    "topicTitle": "Reading tables",
    "year": "Year 7",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "createdAt": "2026-05-18T07:27:18.225Z",
    "requiresManualGrading": false,
    "updatedAt": {
      "_seconds": 1784357705,
      "_nanoseconds": 702000000
    },
    "solutionSteps": [],
    "answer": "",
    "question": "Data on the ages of male inhabitants of the Maldives in 2001 are presented in the table below. The total number of males is 226,634.\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n  <table style=\"width: 100%; max-width: 320px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\">\n    <thead>\n      <tr style=\"background: #6366f1; color: white;\">\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Age group (years)</th>\n        <th style=\"padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;\">Number of males</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">6–9</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">30 813</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">10–14</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">41 089</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">15–19</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">33 266</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">20–24</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">23 514</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">25–29</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">20 090</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">30–34</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">18 161</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">35–39</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">15 699</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">40–44</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">12 402</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">45–49</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">7 461</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">50–54</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">5 967</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">55–59</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">5 996</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">60–64</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">6 312</td></tr>\n      <tr style=\"background: #f8fafc;\"><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">65–69</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">4 611</td></tr>\n      <tr><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;\">&gt; 69</td><td style=\"padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;\">1 253</td></tr>\n    </tbody>\n  </table>\n</div>",
    "solution": "",
    "hint": "Recall percentage formulas and look closely at the age groups in the table.",
    "options": [],
    "subQuestions": [
      {
        "id": "vIuMtUyprlQulGcnQv4O_a",
        "type": "multiple_choice",
        "question": "a) How many male inhabitants of the Maldives are aged between 10 and 14?",
        "options": [
          {
            "text": "23,514",
            "imageUrl": ""
          },
          {
            "text": "33,266",
            "imageUrl": ""
          },
          {
            "text": "30,813",
            "imageUrl": ""
          },
          {
            "text": "41,089",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "solutionSteps": [
          {
            "explanation": "Locate age group 10–14 in the table.",
            "workingOut": "The number of males is exactly 41,089."
          }
        ]
      },
      {
        "id": "vIuMtUyprlQulGcnQv4O_b",
        "type": "multiple_choice",
        "question": "b) What percentage of males are aged under 25? Give your answer to the nearest per cent.",
        "options": [
          {
            "text": "57%",
            "imageUrl": ""
          },
          {
            "text": "45%",
            "imageUrl": ""
          },
          {
            "text": "50%",
            "imageUrl": ""
          },
          {
            "text": "60%",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Sum the counts for age groups 6–9, 10–14, 15–19, and 20–24.",
            "workingOut": "Sum = \\(30,813 + 41,089 + 33,266 + 23,514 = 128,682\\)."
          },
          {
            "explanation": "Calculate the percentage of the total (226,634).",
            "workingOut": "\\(\\frac{128,682}{226,634} \\times 100 \\approx 56.78\\% \\approx 57\\%\\)."
          }
        ]
      },
      {
        "id": "vIuMtUyprlQulGcnQv4O_c",
        "type": "multiple_choice",
        "question": "c) What percentage of males are aged between 15 and 24? Give your answer to the nearest per cent.",
        "options": [
          {
            "text": "15%",
            "imageUrl": ""
          },
          {
            "text": "20%",
            "imageUrl": ""
          },
          {
            "text": "30%",
            "imageUrl": ""
          },
          {
            "text": "25%",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "solutionSteps": [
          {
            "explanation": "Sum the counts for age groups 15–19 and 20–24.",
            "workingOut": "Sum = \\(33,266 + 23,514 = 56,780\\)."
          },
          {
            "explanation": "Calculate the percentage of the total (226,634).",
            "workingOut": "\\(\\frac{56,780}{226,634} \\times 100 \\approx 25.05\\% \\approx 25\\%\\)."
          }
        ]
      },
      {
        "id": "vIuMtUyprlQulGcnQv4O_d",
        "type": "multiple_choice",
        "question": "d) What is wrong with the given data?",
        "options": [
          {
            "text": "There are too many female categories included.",
            "imageUrl": ""
          },
          {
            "text": "The values do not sum to 100%.",
            "imageUrl": ""
          },
          {
            "text": "Males aged 0–5 are missing from the dataset.",
            "imageUrl": ""
          },
          {
            "text": "The categories overlap each other.",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "solutionSteps": [
          {
            "explanation": "Look at the starting age group in the table.",
            "workingOut": "The table starts at age 6. Young children aged 0–5 are completely missing."
          }
        ]
      }
    ],
    "type": "multipart",
    "isNew": false,
    "timeLimit": 240
  }
];

export const importYear7Ch18A = async (forceReset = false) => {
  console.log('[Ch18A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch18 (18a) questions...');
      const topicsToDelete = ['y7-18a'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch17 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-18a'];
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
    console.log('[Ch18A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch18A Year 7 Import] ERROR:', error);
    return 0;
  }
};
