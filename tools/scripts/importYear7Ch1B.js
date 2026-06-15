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
    "chapterId": "y7-1",
    "topicId": "y7-1b",
    "topicCode": "1B",
    "topicTitle": "Addition",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental addition strategies: \\(34 + 57 + 26\\)",
    "answer": "117",
    "solution": "Step 1: Group friendly numbers.\nLook for numbers whose units digits add up to \\(10\\). Here, \\(34\\) and \\(26\\) are a great pair because \\(4 + 6 = 10\\).\nStep 2: Add the paired numbers.\n\\[34 + 26 = 60\\]\nStep 3: Add the remaining number.\n\\[60 + 57 = 117\\]\nTherefore, the total sum is \\(117\\).",
    "createdAt": "2026-06-15T14:14:06.008Z",
    "solutionSteps": [
      {
        "explanation": "Group friendly numbers.",
        "workingOut": "Look for numbers whose units digits add up to \\(10\\). Here, \\(34\\) and \\(26\\) are a great pair because \\(4 + 6 = 10\\).",
        "graphData": null
      },
      {
        "explanation": "Add the paired numbers.",
        "workingOut": "<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  3 4\n+ 2 6\n-----\n  6 0</pre>",
        "graphData": null
      },
      {
        "explanation": "Add the remaining number.\nTherefore, the total sum is \\(117\\).",
        "workingOut": "<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">    6 0\n+   5 7\n-------\n  1 1 7</pre>",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1b",
    "topicCode": "1B",
    "topicTitle": "Addition",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental addition strategies: \\(32 + 19 + 18\\)",
    "answer": "69",
    "solution": "Step 1: Group friendly numbers.\nCombine \\(32\\) and \\(18\\) first, as \\(2 + 8 = 10\\), which makes addition much easier.\nStep 2: Add the paired numbers.\n\\[32 + 18 = 50\\]\nStep 3: Add the remaining number.\n\\[50 + 19 = 69\\]\nTherefore, the sum is \\(69\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Group friendly numbers.",
        "workingOut": "Combine \\(32\\) and \\(18\\) first, as \\(2 + 8 = 10\\), which makes addition much easier.",
        "graphData": null
      },
      {
        "explanation": "Add the paired numbers.",
        "workingOut": "<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  3 2\n+ 1 8\n-----\n  5 0</pre>",
        "graphData": null
      },
      {
        "explanation": "Add the remaining number.\nTherefore, the sum is \\(69\\).",
        "workingOut": "<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  5 0\n+ 1 9\n-----\n  6 9</pre>",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1b",
    "topicCode": "1B",
    "topicTitle": "Addition",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental addition strategies: \\(43 + 34 + 66\\)",
    "answer": "143",
    "solution": "Step 1: Group friendly numbers.\nIdentify the pair that forms a multiple of \\(100\\). Here, \\(34 + 66 = 100\\).\nStep 2: Add the paired numbers.\n\\[34 + 66 = 100\\]\nStep 3: Add the remaining number.\n\\[100 + 43 = 143\\]\nTherefore, the sum is \\(143\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Group friendly numbers.",
        "workingOut": "Identify the pair that forms a multiple of \\(100\\). Here, \\(34 + 66 = 100\\).",
        "graphData": null
      },
      {
        "explanation": "Add the paired numbers.",
        "workingOut": "<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">    3 4\n+   6 6\n-------\n  1 0 0</pre>",
        "graphData": null
      },
      {
        "explanation": "Add the remaining number.\nTherefore, the sum is \\(143\\).",
        "workingOut": "<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  1 0 0\n+   4 3\n-------\n  1 4 3</pre>",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1b",
    "topicCode": "1B",
    "topicTitle": "Addition",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental addition strategies: \\(48 + 13 + 27 + 12\\)",
    "answer": "100",
    "solution": "Step 1: Group friendly numbers into pairs.\nPair numbers that add up to multiples of \\(10\\):\n• Pair 1: \\((48 + 12)\\) because \\(8 + 2 = 10\\)\n• Pair 2: \\((13 + 27)\\) because \\(3 + 7 = 10\\)\nStep 2: Add the pairs.\n\\[48 + 12 = 60\\]\n\\[13 + 27 = 40\\]\nStep 3: Find the total sum.\n\\[60 + 40 = 100\\]\nTherefore, the sum is \\(100\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Group friendly numbers into pairs.",
        "workingOut": "Pair numbers that add up to multiples of \\(10\\):\n• Pair 1: \\((48 + 12)\\) because \\(8 + 2 = 10\\)\n• Pair 2: \\((13 + 27)\\) because \\(3 + 7 = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Add the pairs.",
        "workingOut": "<div style=\"display: flex; gap: 40px; flex-wrap: wrap;\">\n<div>\n  <div style=\"font-size: 0.8rem; color: #7c3aed; font-weight: 700; margin-bottom: 4px;\">Pair 1:</div>\n  <pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  4 8\n+ 1 2\n-----\n  6 0</pre>\n</div>\n<div>\n  <div style=\"font-size: 0.8rem; color: #7c3aed; font-weight: 700; margin-bottom: 4px;\">Pair 2:</div>\n  <pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  1 3\n+ 2 7\n-----\n  4 0</pre>\n</div>\n</div>",
        "graphData": null
      },
      {
        "explanation": "Find the total sum.\nTherefore, the sum is \\(100\\).",
        "workingOut": "<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">    6 0\n+   4 0\n-------\n  1 0 0</pre>",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1b",
    "topicCode": "1B",
    "topicTitle": "Addition",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental addition strategies: \\(47 + 18 + 82 + 23\\)",
    "answer": "170",
    "solution": "Step 1: Group friendly numbers into pairs.\nGroup numbers that naturally sum to round numbers:\n• Pair 1: \\((47 + 23) = 70\\)\n• Pair 2: \\((18 + 82) = 100\\)\nStep 2: Add the results of the two pairs.\n\\[70 + 100 = 170\\]\nTherefore, the sum is \\(170\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Group friendly numbers into pairs.",
        "workingOut": "Group numbers that naturally sum to round numbers:\n• Pair 1: \\((47 + 23) = 70\\)\n• Pair 2: \\((18 + 82) = 100\\)",
        "graphData": null
      },
      {
        "explanation": "Add the results of the two pairs.\nTherefore, the sum is \\(170\\).",
        "workingOut": "<div style=\"display: flex; gap: 40px; flex-wrap: wrap;\">\n<div>\n  <div style=\"font-size: 0.8rem; color: #7c3aed; font-weight: 700; margin-bottom: 4px;\">Pair 1:</div>\n  <pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  4 7\n+ 2 3\n-----\n  7 0</pre>\n</div>\n<div>\n  <div style=\"font-size: 0.8rem; color: #7c3aed; font-weight: 700; margin-bottom: 4px;\">Pair 2:</div>\n  <pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">    1 8\n+   8 2\n-------\n  1 0 0</pre>\n</div>\n</div>\n<div style=\"margin-top: 15px;\">\n  <div style=\"font-size: 0.8rem; color: #7c3aed; font-weight: 700; margin-bottom: 4px;\">Total:</div>\n  <pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">    7 0\n+ 1 0 0\n-------\n  1 7 0</pre>\n</div>",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1b",
    "topicCode": "1B",
    "topicTitle": "Addition",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental addition strategies: \\(98 + 36 + 12 + 44\\)",
    "answer": "190",
    "solution": "Step 1: Group friendly numbers into pairs.\nFind pairs that form clean tens values:\n• Pair 1: \\((98 + 12)\\) because \\(8 + 2 = 10\\)\n• Pair 2: \\((36 + 44)\\) because \\(6 + 4 = 10\\)\nStep 2: Add the pairs.\n\\[98 + 12 = 110\\]\n\\[36 + 44 = 80\\]\nStep 3: Add the two partial sums.\n\\[110 + 80 = 190\\]\nTherefore, the sum is \\(190\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Group friendly numbers into pairs.",
        "workingOut": "Find pairs that form clean tens values:\n• Pair 1: \\((98 + 12)\\) because \\(8 + 2 = 10\\)\n• Pair 2: \\((36 + 44)\\) because \\(6 + 4 = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Add the pairs.",
        "workingOut": "<div style=\"display: flex; gap: 40px; flex-wrap: wrap;\">\n<div>\n  <div style=\"font-size: 0.8rem; color: #7c3aed; font-weight: 700; margin-bottom: 4px;\">Pair 1:</div>\n  <pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">    9 8\n+   1 2\n-------\n  1 1 0</pre>\n</div>\n<div>\n  <div style=\"font-size: 0.8rem; color: #7c3aed; font-weight: 700; margin-bottom: 4px;\">Pair 2:</div>\n  <pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  3 6\n+ 4 4\n-----\n  8 0</pre>\n</div>\n</div>",
        "graphData": null
      },
      {
        "explanation": "Add the two partial sums.\nTherefore, the sum is \\(190\\).",
        "workingOut": "<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  1 1 0\n+   8 0\n-------\n  1 9 0</pre>",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using the addition algorithm: \\(784 + 158\\)",
    "answer": "942",
    "solution": "Step 1: Set up the column addition.\nAlign the numbers by their place values (Units, Tens, Hundreds):\n<pre style=\"font-family: monospace; line-height: 1.2;\">  7 8 4\n+ 1 5 8\n-------</pre>Step 2: Add the Units column.\n\\[4 + 8 = 12\\]\nWrite down \\(2\\) in the Units place and carry over \\(1\\) to the Tens column.\nStep 3: Add the Tens column (including the carry-over).\n\\[8 + 5 + 1\\text{ (carry)} = 14\\]\nWrite down \\(4\\) in the Tens place and carry over \\(1\\) to the Hundreds column.\nStep 4: Add the Hundreds column (including the carry-over).\n\\[7 + 1 + 1\\text{ (carry)} = 9\\]\nWrite down \\(9\\) in the Hundreds place.\n<pre style=\"font-family: monospace; line-height: 1.2;\">  7 8 4\n+ 1 5 8\n-------\n  9 4 2</pre>Therefore, the sum is \\(942\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up the column addition.",
        "workingOut": "Align the numbers by their place values (Units, Tens, Hundreds):",
        "graphData": null
      },
      {
        "explanation": "Add the Units column.",
        "workingOut": "\\[4 + 8 = 12\\]\nWrite down \\(2\\) in the Units place and carry over \\(1\\) to the Tens column.",
        "graphData": null
      },
      {
        "explanation": "Add the Tens column (including the carry-over).",
        "workingOut": "\\[8 + 5 + 1\\text{ (carry)} = 14\\]\nWrite down \\(4\\) in the Tens place and carry over \\(1\\) to the Hundreds column.",
        "graphData": null
      },
      {
        "explanation": "Add the Hundreds column (including the carry-over).\nTherefore, the sum is \\(942\\).",
        "workingOut": "\\[7 + 1 + 1\\text{ (carry)} = 9\\]\nWrite down \\(9\\) in the Hundreds place.",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using the addition algorithm: \\(4857 + 4736\\)",
    "answer": "9593",
    "solution": "Step 1: Set up vertical column addition.\nAlign by place value:\n<pre style=\"font-family: monospace; line-height: 1.2;\">  4 8 5 7\n+ 4 7 3 6\n---------</pre>Step 2: Add column by column from right to left.\n• Units: \\(7 + 6 = 13 \\rightarrow\\) Write \\(3\\), carry \\(1\\).\n• Tens: \\(5 + 3 + 1\\text{ (carry)} = 9 \\rightarrow\\) Write \\(9\\).\n• Hundreds: \\(8 + 7 = 15 \\rightarrow\\) Write \\(5\\), carry \\(1\\).\n• Thousands: \\(4 + 4 + 1\\text{ (carry)} = 9 \\rightarrow\\) Write \\(9\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">  4 8 5 7\n+ 4 7 3 6\n---------\n  9 5 9 3</pre>Therefore, the sum is \\(9593\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up vertical column addition.",
        "workingOut": "Align by place value:",
        "graphData": null
      },
      {
        "explanation": "Add column by column from right to left.\nTherefore, the sum is \\(9593\\).",
        "workingOut": "• <strong>Units</strong>: \\(7 + 6 = 13 \\rightarrow\\) Write \\(3\\), carry \\(1\\).\n• <strong>Tens</strong>: \\(5 + 3 + 1\\text{ (carry)} = 9 \\rightarrow\\) Write \\(9\\).\n• <strong>Hundreds</strong>: \\(8 + 7 = 15 \\rightarrow\\) Write \\(5\\), carry \\(1\\).\n• <strong>Thousands</strong>: \\(4 + 4 + 1\\text{ (carry)} = 9 \\rightarrow\\) Write \\(9\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using the addition algorithm: \\(2088 + 3047 + 5679\\)",
    "answer": "10814",
    "solution": "Step 1: Set up the addition of three numbers.\nAlign by place value:\n<pre style=\"font-family: monospace; line-height: 1.2;\">  2 0 8 8\n  3 0 4 7\n+ 5 6 7 9\n---------</pre>Step 2: Add from right to left.\n• Units: \\(8 + 7 + 9 = 24 \\rightarrow\\) Write \\(4\\), carry \\(2\\).\n• Tens: \\(8 + 4 + 7 + 2\\text{ (carry)} = 21 \\rightarrow\\) Write \\(1\\), carry \\(2\\).\n• Hundreds: \\(0 + 0 + 6 + 2\\text{ (carry)} = 8 \\rightarrow\\) Write \\(8\\).\n• Thousands: \\(2 + 3 + 5 = 10 \\rightarrow\\) Write \\(10\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">  2 0 8 8\n  3 0 4 7\n+ 5 6 7 9\n---------\n 10 8 1 4</pre>Therefore, the sum is \\(10814\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up the addition of three numbers.",
        "workingOut": "Align by place value:",
        "graphData": null
      },
      {
        "explanation": "Add from right to left.\nTherefore, the sum is \\(10814\\).",
        "workingOut": "• <strong>Units</strong>: \\(8 + 7 + 9 = 24 \\rightarrow\\) Write \\(4\\), carry \\(2\\).\n• <strong>Tens</strong>: \\(8 + 4 + 7 + 2\\text{ (carry)} = 21 \\rightarrow\\) Write \\(1\\), carry \\(2\\).\n• <strong>Hundreds</strong>: \\(0 + 0 + 6 + 2\\text{ (carry)} = 8 \\rightarrow\\) Write \\(8\\).\n• <strong>Thousands</strong>: \\(2 + 3 + 5 = 10 \\rightarrow\\) Write \\(10\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using the addition algorithm: \\(48 + 730 + 95\\)",
    "answer": "873",
    "solution": "Step 1: Arrange vertically.\nAlign Units under Units, Tens under Tens, etc.:\n<pre style=\"font-family: monospace; line-height: 1.2;\">    4 8\n  7 3 0\n+   9 5\n-------</pre>Step 2: Add columns from right to left.\n• Units: \\(8 + 0 + 5 = 13 \\rightarrow\\) Write \\(3\\), carry \\(1\\).\n• Tens: \\(4 + 3 + 9 + 1\\text{ (carry)} = 17 \\rightarrow\\) Write \\(7\\), carry \\(1\\).\n• Hundreds: \\(7 + 1\\text{ (carry)} = 8 \\rightarrow\\) Write \\(8\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">    4 8\n  7 3 0\n+   9 5\n-------\n  8 7 3</pre>Therefore, the sum is \\(873\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Arrange vertically.",
        "workingOut": "Align Units under Units, Tens under Tens, etc.:",
        "graphData": null
      },
      {
        "explanation": "Add columns from right to left.\nTherefore, the sum is \\(873\\).",
        "workingOut": "• <strong>Units</strong>: \\(8 + 0 + 5 = 13 \\rightarrow\\) Write \\(3\\), carry \\(1\\).\n• <strong>Tens</strong>: \\(4 + 3 + 9 + 1\\text{ (carry)} = 17 \\rightarrow\\) Write \\(7\\), carry \\(1\\).\n• <strong>Hundreds</strong>: \\(7 + 1\\text{ (carry)} = 8 \\rightarrow\\) Write \\(8\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using the addition algorithm: \\(207 + 58 + 39965\\)",
    "answer": "40230",
    "solution": "Step 1: Set up the vertical addition.\nMake sure the place values are aligned correctly:\n<pre style=\"font-family: monospace; line-height: 1.2;\">      2 0 7\n        5 8\n+ 3 9 9 6 5\n-----------</pre>Step 2: Add the columns.\n• Units: \\(7 + 8 + 5 = 20 \\rightarrow\\) Write \\(0\\), carry \\(2\\).\n• Tens: \\(0 + 5 + 6 + 2\\text{ (carry)} = 13 \\rightarrow\\) Write \\(3\\), carry \\(1\\).\n• Hundreds: \\(2 + 9 + 1\\text{ (carry)} = 12 \\rightarrow\\) Write \\(2\\), carry \\(1\\).\n• Thousands: \\(9 + 1\\text{ (carry)} = 10 \\rightarrow\\) Write \\(0\\), carry \\(1\\).\n• Ten Thousands: \\(3 + 1\\text{ (carry)} = 4 \\rightarrow\\) Write \\(4\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">      2 0 7\n        5 8\n+ 3 9 9 6 5\n-----------\n  4 0 2 3 0</pre>Therefore, the sum is \\(40230\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up the vertical addition.",
        "workingOut": "Make sure the place values are aligned correctly:",
        "graphData": null
      },
      {
        "explanation": "Add the columns.\nTherefore, the sum is \\(40230\\).",
        "workingOut": "• <strong>Units</strong>: \\(7 + 8 + 5 = 20 \\rightarrow\\) Write \\(0\\), carry \\(2\\).\n• <strong>Tens</strong>: \\(0 + 5 + 6 + 2\\text{ (carry)} = 13 \\rightarrow\\) Write \\(3\\), carry \\(1\\).\n• <strong>Hundreds</strong>: \\(2 + 9 + 1\\text{ (carry)} = 12 \\rightarrow\\) Write \\(2\\), carry \\(1\\).\n• <strong>Thousands</strong>: \\(9 + 1\\text{ (carry)} = 10 \\rightarrow\\) Write \\(0\\), carry \\(1\\).\n• <strong>Ten Thousands</strong>: \\(3 + 1\\text{ (carry)} = 4 \\rightarrow\\) Write \\(4\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using standard addition algorithm: \\(546 + 999 + 2045\\)",
    "answer": "3590",
    "solution": "Step 1: Set up vertical column addition.\nAlign by place value:\n<pre style=\"font-family: monospace; line-height: 1.2;\">    5 4 6\n    9 9 9\n+ 2 0 4 5\n---------</pre>Step 2: Add column by column from right to left.\n• Units: \\(6 + 9 + 5 = 20 \\rightarrow\\) Write \\(0\\), carry \\(2\\).\n• Tens: \\(4 + 9 + 4 + 2\\text{ (carry)} = 19 \\rightarrow\\) Write \\(9\\), carry \\(1\\).\n• Hundreds: \\(5 + 9 + 0 + 1\\text{ (carry)} = 15 \\rightarrow\\) Write \\(5\\), carry \\(1\\).\n• Thousands: \\(2 + 1\\text{ (carry)} = 3 \\rightarrow\\) Write \\(3\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">    5 4 6\n    9 9 9\n+ 2 0 4 5\n---------\n  3 5 9 0</pre>Therefore, the sum is \\(3590\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up vertical column addition.",
        "workingOut": "Align by place value:",
        "graphData": null
      },
      {
        "explanation": "Add column by column from right to left.\nTherefore, the sum is \\(3590\\).",
        "workingOut": "• <strong>Units</strong>: \\(6 + 9 + 5 = 20 \\rightarrow\\) Write \\(0\\), carry \\(2\\).\n• <strong>Tens</strong>: \\(4 + 9 + 4 + 2\\text{ (carry)} = 19 \\rightarrow\\) Write \\(9\\), carry \\(1\\).\n• <strong>Hundreds</strong>: \\(5 + 9 + 0 + 1\\text{ (carry)} = 15 \\rightarrow\\) Write \\(5\\), carry \\(1\\).\n• <strong>Thousands</strong>: \\(2 + 1\\text{ (carry)} = 3 \\rightarrow\\) Write \\(3\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the missing digits (★) to make the addition correct:\n<pre style=\"font-family: monospace; line-height: 1.2;\">  6 ★ 8\n+ ★ 3 9\n-------\n  9 9 7</pre>Choose the correct missing digits in order from top to bottom.",
    "options": [
      "\\(5, 3\\)",
      "\\(5, 4\\)",
      "\\(4, 3\\)",
      "\\(3, 5\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Units column\nAdding Units: \\(8 + 9 = 17\\). Write down \\(7\\), carry \\(1\\) to the Tens column.\nStep 2: Tens column\nAdding Tens: \\(1\\text{ (carry)} + \\star + 3 = 9 \\rightarrow \\star + 4 = 9 \\rightarrow \\star = 5\\).\nStep 3: Hundreds column\nAdding Hundreds: \\(6 + \\star = 9 \\rightarrow \\star = 3\\).\nThus, the missing digits from top to bottom are \\(5\\) and \\(3\\).",
    "createdAt": "2026-06-15T14:18:32.096Z",
    "solutionSteps": [
      {
        "explanation": "Add the Units column.",
        "workingOut": "\\(8 + 9 = 17\\).\nWrite down \\(7\\) in the Units column and carry over \\(1\\) to the Tens column.",
        "graphData": null
      },
      {
        "explanation": "Determine the missing digit in the Tens column.",
        "workingOut": "\\(1\\text{ (carry)} + \\star + 3 = 9\\)\n\\(\\star + 4 = 9 \\rightarrow \\star = 5\\).",
        "graphData": null
      },
      {
        "explanation": "Determine the missing digit in the Hundreds column.",
        "workingOut": "\\(6 + \\star = 9 \\rightarrow \\star = 3\\).\nTherefore, the missing digits from top to bottom are \\(5\\) and \\(3\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the missing digits (★) to make the addition correct:\n<pre style=\"font-family: monospace; line-height: 1.2;\">  8 ★ 4\n+ ★ 9 ★\n-------\n  ★ 0 3</pre>Choose the correct missing digits in order: (top ★, bottom-left ★, bottom-right ★, sum ★).",
    "options": [
      "\\(0, 1, 9, 1\\)",
      "\\(1, 0, 9, 1\\)",
      "\\(0, 2, 9, 2\\)",
      "\\(9, 1, 0, 1\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Units column\nAdding Units: \\(4 + \\star = 13 \\rightarrow \\star = 9\\). Write down \\(3\\), carry \\(1\\) to the Tens column.\nStep 2: Tens column\nAdding Tens: \\(1\\text{ (carry)} + \\star + 9 = 10 \\rightarrow \\star + 10 = 10 \\rightarrow \\star = 0\\). Write down \\(0\\), carry \\(1\\) to the Hundreds column.\nStep 3: Hundreds column\nAdding Hundreds: \\(1\\text{ (carry)} + 8 + \\star = \\text{sum } \\star\\). Since sum \\(\\star\\) must be the same digit as bottom-left \\(\\star\\):\nLet bottom-left \\(\\star = 1\\). Then \\(1 + 8 + 1 = 10\\). This matches the sum \\(\\star = 1\\) (representing the thousands place carry) and write \\(0\\) in hundreds place.\nThus, top \\(\\star = 0\\), bottom-left \\(\\star = 1\\), bottom-right \\(\\star = 9\\), sum \\(\\star = 1\\).",
    "createdAt": "2026-06-15T14:18:32.098Z",
    "solutionSteps": [
      {
        "explanation": "Add the Units column to find the bottom-right missing digit.",
        "workingOut": "\\(4 + \\star = 13 \\rightarrow \\star = 9\\).\nWrite down \\(3\\) in the Units column and carry over \\(1\\) to the Tens column.",
        "graphData": null
      },
      {
        "explanation": "Determine the Tens column missing digit.",
        "workingOut": "\\(1\\text{ (carry)} + \\star + 9 = 10 \\rightarrow \\star + 10 = 10 \\rightarrow \\star = 0\\).\nWrite down \\(0\\) in the Tens column and carry over \\(1\\) to the Hundreds column.",
        "graphData": null
      },
      {
        "explanation": "Determine the Hundreds and Thousands column missing digits.",
        "workingOut": "\\(1\\text{ (carry)} + 8 + \\star_{bottom\\_left} = 10 \\rightarrow \\star_{bottom\\_left} = 1\\).\nThis results in the sum being \\(1003\\), so the sum thousands digit is also \\(1\\).\nThus, the digits are: top \\(\\star = 0\\), bottom-left \\(\\star = 1\\), bottom-right \\(\\star = 9\\), sum \\(\\star = 1\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the missing digits (★) to make the addition correct:\n<pre style=\"font-family: monospace; line-height: 1.2;\">  9 1 9\n+ 8 9 ★\n-------\n1 ★ 1 8</pre>Choose the correct missing digits in order from top to bottom.",
    "options": [
      "\\(9, 8\\)",
      "\\(9, 7\\)",
      "\\(8, 9\\)",
      "\\(7, 8\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Units column\nAdding Units: \\(9 + \\star = 18 \\rightarrow \\star = 9\\). Write down \\(8\\), carry \\(1\\) to the Tens column.\nStep 2: Tens column\nAdding Tens: \\(1\\text{ (carry)} + 1 + 9 = 11\\). Write down \\(1\\), carry \\(1\\) to the Hundreds column.\nStep 3: Hundreds column\nAdding Hundreds: \\(1\\text{ (carry)} + 9 + 8 = 18\\). Write down \\(8\\) in the Hundreds place and carry \\(1\\) to the Thousands place.\nThus, bottom-right \\(\\star = 9\\) and sum hundreds \\(\\star = 8\\).",
    "createdAt": "2026-06-15T14:18:32.098Z",
    "solutionSteps": [
      {
        "explanation": "Add the Units column.",
        "workingOut": "\\(9 + \\star = 18 \\rightarrow \\star = 9\\).\nWrite down \\(8\\) in the Units column and carry over \\(1\\) to the Tens column.",
        "graphData": null
      },
      {
        "explanation": "Verify the Tens column.",
        "workingOut": "\\(1\\text{ (carry)} + 1 + 9 = 11\\).\nWrite down \\(1\\) in the Tens column and carry over \\(1\\) to the Hundreds column.",
        "graphData": null
      },
      {
        "explanation": "Determine the Hundreds column missing digit.",
        "workingOut": "\\(1\\text{ (carry)} + 9 + 8 = 18\\).\nWrite down \\(8\\) in the Hundreds place and carry \\(1\\) to the Thousands place.\nTherefore, the missing digits from top to bottom are \\(9\\) and \\(8\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Find the missing digits (★) to make the addition correct:\n<pre style=\"font-family: monospace; line-height: 1.2;\">  6 ★ 3\n+ ★ 8 9\n-------\n1 2 6 2</pre>Choose the correct missing digits in order from top to bottom.",
    "options": [
      "\\(7, 5\\)",
      "\\(6, 6\\)",
      "\\(7, 6\\)",
      "\\(5, 7\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Units column\nAdding Units: \\(3 + 9 = 12\\). Write down \\(2\\), carry \\(1\\) to the Tens column.\nStep 2: Tens column\nAdding Tens: \\(1\\text{ (carry)} + \\star + 8 = 16 \\rightarrow \\star + 9 = 16 \\rightarrow \\star = 7\\). Write down \\(6\\), carry \\(1\\) to the Hundreds column.\nStep 3: Hundreds column\nAdding Hundreds: \\(1\\text{ (carry)} + 6 + \\star = 12 \\rightarrow 7 + \\star = 12 \\rightarrow \\star = 5\\). Write down \\(12\\).\nThus, the missing digits from top to bottom are \\(7\\) and \\(5\\).",
    "createdAt": "2026-06-15T14:18:32.098Z",
    "solutionSteps": [
      {
        "explanation": "Add the Units column.",
        "workingOut": "\\(3 + 9 = 12\\).\nWrite down \\(2\\) in the Units column and carry over \\(1\\) to the Tens column.",
        "graphData": null
      },
      {
        "explanation": "Determine the Tens column missing digit.",
        "workingOut": "\\(1\\text{ (carry)} + \\star + 8 = 16 \\rightarrow \\star + 9 = 16 \\rightarrow \\star = 7\\).\nWrite down \\(6\\) in the Tens column and carry over \\(1\\) to the Hundreds column.",
        "graphData": null
      },
      {
        "explanation": "Determine the Hundreds column missing digit.",
        "workingOut": "\\(1\\text{ (carry)} + 6 + \\star = 12 \\rightarrow 7 + \\star = 12 \\rightarrow \\star = 5\\).\nTherefore, the missing digits from top to bottom are \\(7\\) and \\(5\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the missing digits (★) to make the addition correct:\n<pre style=\"font-family: monospace; line-height: 1.2;\">  7 ★ 1\n+ ★ 9 7\n-------\n1 0 9 ★</pre>Choose the correct missing digits in order: (top ★, bottom ★, sum ★).",
    "options": [
      "\\(0, 3, 8\\)",
      "\\(1, 2, 8\\)",
      "\\(0, 4, 8\\)",
      "\\(9, 3, 8\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Units column\nAdding Units: \\(1 + 7 = 8 \\rightarrow \\star = 8\\). No carry.\nStep 2: Tens column\nAdding Tens: \\( \\star + 9 = 9 \\rightarrow \\star = 0\\). No carry.\nStep 3: Hundreds column\nAdding Hundreds: \\(7 + \\star = 10 \\rightarrow \\star = 3\\).\nThus, the missing digits are: top \\(\\star = 0\\), bottom \\(\\star = 3\\), sum \\(\\star = 8\\).",
    "createdAt": "2026-06-15T14:18:32.098Z",
    "solutionSteps": [
      {
        "explanation": "Add the Units column.",
        "workingOut": "\\(1 + 7 = 8\\).\nSo the sum units place missing digit \\(\\star = 8\\). No carry.",
        "graphData": null
      },
      {
        "explanation": "Determine the Tens column missing digit.",
        "workingOut": "\\(\\star + 9 = 9 \\rightarrow \\star = 0\\).\nNo carry.",
        "graphData": null
      },
      {
        "explanation": "Determine the Hundreds column missing digit.",
        "workingOut": "\\(7 + \\star = 10 \\rightarrow \\star = 3\\).\nTherefore, the missing digits are: top \\(\\star = 0\\), bottom \\(\\star = 3\\), sum \\(\\star = 8\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1c",
    "topicCode": "1C",
    "topicTitle": "The standard addition algorithm",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Find the missing digits (★) to make the addition correct:\n<pre style=\"font-family: monospace; line-height: 1.2;\">  3 ★ 3\n+ 7 7 ★\n-------\n★ 1 1 0</pre>Choose the correct missing digits in order: (top ★, bottom ★, sum ★).",
    "options": [
      "\\(3, 7, 1\\)",
      "\\(3, 7, 2\\)",
      "\\(4, 6, 1\\)",
      "\\(2, 8, 1\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Units column\nAdding Units: \\(3 + \\star = 10 \\rightarrow \\star = 7\\). Write down \\(0\\), carry \\(1\\) to the Tens column.\nStep 2: Tens column\nAdding Tens: \\(1\\text{ (carry)} + \\star + 7 = 11 \\rightarrow \\star + 8 = 11 \\rightarrow \\star = 3\\). Write down \\(1\\), carry \\(1\\) to the Hundreds column.\nStep 3: Hundreds column\nAdding Hundreds: \\(1\\text{ (carry)} + 3 + 7 = 11\\). Write down \\(1\\), carry \\(1\\) to the Thousands place. This makes the sum thousands place \\(\\star = 1\\).\nThus, the missing digits are: top \\(\\star = 3\\), bottom \\(\\star = 7\\), sum \\(\\star = 1\\).",
    "createdAt": "2026-06-15T14:18:32.098Z",
    "solutionSteps": [
      {
        "explanation": "Add the Units column to find the bottom missing digit.",
        "workingOut": "\\(3 + \\star = 10 \\rightarrow \\star = 7\\).\nWrite down \\(0\\) and carry over \\(1\\) to the Tens column.",
        "graphData": null
      },
      {
        "explanation": "Determine the Tens column missing digit.",
        "workingOut": "\\(1\\text{ (carry)} + \\star + 7 = 11 \\rightarrow \\star + 8 = 11 \\rightarrow \\star = 3\\).\nWrite down \\(1\\) and carry over \\(1\\) to the Hundreds column.",
        "graphData": null
      },
      {
        "explanation": "Determine the Hundreds and Thousands column missing digits.",
        "workingOut": "\\(1\\text{ (carry)} + 3 + 7 = 11\\).\nWrite down \\(1\\) in the Hundreds place and carry \\(1\\) to the Thousands place, making the sum thousands place \\(\\star = 1\\).\nTherefore, the missing digits are: top \\(\\star = 3\\), bottom \\(\\star = 7\\), sum \\(\\star = 1\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(967 - 403\\)",
    "answer": "564",
    "solution": "Step 1: Align column subtraction.\n\n<pre style=\"font-family: monospace; line-height: 1.2;\">  9 6 7\n- 4 0 3\n-------</pre>Step 2: Subtract columns from right to left.\n• Units: \\(7 - 3 = 4\\)\n• Tens: \\(6 - 0 = 6\\)\n• Hundreds: \\(9 - 4 = 5\\)\n<pre style=\"font-family: monospace; line-height: 1.2;\">  9 6 7\n- 4 0 3\n-------\n  5 6 4</pre>Therefore, the difference is \\(564\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Align column subtraction.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Subtract columns from right to left.\nTherefore, the difference is \\(564\\).",
        "workingOut": "• <strong>Units</strong>: \\(7 - 3 = 4\\)\n• <strong>Tens</strong>: \\(6 - 0 = 6\\)\n• <strong>Hundreds</strong>: \\(9 - 4 = 5\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(12986 - 11444\\)",
    "answer": "1542",
    "solution": "Step 1: Set up vertical subtraction.\n\n<pre style=\"font-family: monospace; line-height: 1.2;\">  1 2 9 8 6\n- 1 1 4 4 4\n-----------</pre>Step 2: Subtract from right to left.\n• Units: \\(6 - 4 = 2\\)\n• Tens: \\(8 - 4 = 4\\)\n• Hundreds: \\(9 - 4 = 5\\)\n• Thousands: \\(2 - 1 = 1\\)\n• Ten Thousands: \\(1 - 1 = 0\\)\n<pre style=\"font-family: monospace; line-height: 1.2;\">  1 2 9 8 6\n- 1 1 4 4 4\n-----------\n    1 5 4 2</pre>Therefore, the difference is \\(1542\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up vertical subtraction.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Subtract from right to left.\nTherefore, the difference is \\(1542\\).",
        "workingOut": "• <strong>Units</strong>: \\(6 - 4 = 2\\)\n• <strong>Tens</strong>: \\(8 - 4 = 4\\)\n• <strong>Hundreds</strong>: \\(9 - 4 = 5\\)\n• <strong>Thousands</strong>: \\(2 - 1 = 1\\)\n• <strong>Ten Thousands</strong>: \\(1 - 1 = 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(587 - 485\\)",
    "answer": "102",
    "solution": "Step 1: Arrange vertically.\n\n<pre style=\"font-family: monospace; line-height: 1.2;\">  5 8 7\n- 4 8 5\n-------</pre>Step 2: Subtract columns.\n• Units: \\(7 - 5 = 2\\)\n• Tens: \\(8 - 8 = 0\\)\n• Hundreds: \\(5 - 4 = 1\\)\n<pre style=\"font-family: monospace; line-height: 1.2;\">  5 8 7\n- 4 8 5\n-------\n  1 0 2</pre>Therefore, the difference is \\(102\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Arrange vertically.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Subtract columns.\nTherefore, the difference is \\(102\\).",
        "workingOut": "• <strong>Units</strong>: \\(7 - 5 = 2\\)\n• <strong>Tens</strong>: \\(8 - 8 = 0\\)\n• <strong>Hundreds</strong>: \\(5 - 4 = 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(345 - 297\\)",
    "answer": "48",
    "solution": "Step 1: Arrange vertically.\nNote that borrowing is required:\n<pre style=\"font-family: monospace; line-height: 1.2;\">  3 4 5\n- 2 9 7\n-------</pre>Step 2: Subtract columns with borrowing.\n• Units: \\(5 < 7\\). Borrow \\(1\\) from the Tens column (\\(4 \\rightarrow 3\\), making the Units digit \\(15\\)). Now, \\(15 - 7 = 8\\).\n• Tens: We now have \\(3\\) in the Tens column, and \\(3 < 9\\). Borrow \\(1\\) from Hundreds (\\(3 \\rightarrow 2\\), making Tens digit \\(13\\)). Now, \\(13 - 9 = 4\\).\n• Hundreds: \\(2 - 2 = 0\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">  3 4 5\n- 2 9 7\n-------\n    4 8</pre>Therefore, the difference is \\(48\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Arrange vertically.",
        "workingOut": "Note that borrowing is required:",
        "graphData": null
      },
      {
        "explanation": "Subtract columns with borrowing.\nTherefore, the difference is \\(48\\).",
        "workingOut": "• <strong>Units</strong>: \\(5 < 7\\). Borrow \\(1\\) from the Tens column (\\(4 \\rightarrow 3\\), making the Units digit \\(15\\)). Now, \\(15 - 7 = 8\\).\n• <strong>Tens</strong>: We now have \\(3\\) in the Tens column, and \\(3 < 9\\). Borrow \\(1\\) from Hundreds (\\(3 \\rightarrow 2\\), making Tens digit \\(13\\)). Now, \\(13 - 9 = 4\\).\n• <strong>Hundreds</strong>: \\(2 - 2 = 0\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(1504 - 1476\\)",
    "answer": "28",
    "solution": "Step 1: Arrange vertically.\n\n<pre style=\"font-family: monospace; line-height: 1.2;\">  1 5 0 4\n- 1 4 7 6\n---------</pre>Step 2: Subtract columns (borrowing required).\n• Units: \\(4 < 6\\). Borrow \\(1\\) from Tens. Since Tens is \\(0\\), we must first borrow \\(1\\) from Hundreds (\\(5 \\rightarrow 4\\), making Tens \\(10\\)). Now borrow \\(1\\) from Tens (\\(10 \\rightarrow 9\\), making Units \\(14\\)).\n• Units subtraction: \\(14 - 6 = 8\\).\n• Tens subtraction: \\(9 - 7 = 2\\).\n• Hundreds subtraction: \\(4 - 4 = 0\\).\n• Thousands subtraction: \\(1 - 1 = 0\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">  1 5 0 4\n- 1 4 7 6\n---------\n      2 8</pre>Therefore, the difference is \\(28\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Arrange vertically.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Subtract columns (borrowing required).\nTherefore, the difference is \\(28\\).",
        "workingOut": "• <strong>Units</strong>: \\(4 < 6\\). Borrow \\(1\\) from Tens. Since Tens is \\(0\\), we must first borrow \\(1\\) from Hundreds (\\(5 \\rightarrow 4\\), making Tens \\(10\\)). Now borrow \\(1\\) from Tens (\\(10 \\rightarrow 9\\), making Units \\(14\\)).\n• <strong>Units subtraction</strong>: \\(14 - 6 = 8\\).\n• <strong>Tens subtraction</strong>: \\(9 - 7 = 2\\).\n• <strong>Hundreds subtraction</strong>: \\(4 - 4 = 0\\).\n• <strong>Thousands subtraction</strong>: \\(1 - 1 = 0\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(19554 - 9867\\)",
    "answer": "9687",
    "solution": "Step 1: Arrange vertically.\n\n<pre style=\"font-family: monospace; line-height: 1.2;\">  1 9 5 5 4\n-   9 8 6 7\n-----------</pre>Step 2: Subtract with borrowing.\n• Units: \\(4 < 7\\). Borrow \\(1\\) from Tens (\\(5 \\rightarrow 4\\)), making Units \\(14\\). \\(14 - 7 = 7\\).\n• Tens: We now have \\(4 < 6\\). Borrow \\(1\\) from Hundreds (\\(5 \\rightarrow 4\\)), making Tens \\(14\\). \\(14 - 6 = 8\\).\n• Hundreds: We now have \\(4 < 8\\). Borrow \\(1\\) from Thousands (\\(9 \\rightarrow 8\\)), making Hundreds \\(14\\). \\(14 - 8 = 6\\).\n• Thousands: We now have \\(8 < 9\\). Borrow \\(1\\) from Ten Thousands (\\(1 \\rightarrow 0\\)), making Thousands \\(18\\). \\(18 - 9 = 9\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">  1 9 5 5 4\n-   9 8 6 7\n-----------\n    9 6 8 7</pre>Therefore, the difference is \\(9687\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Arrange vertically.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Subtract with borrowing.\nTherefore, the difference is \\(9687\\).",
        "workingOut": "• <strong>Units</strong>: \\(4 < 7\\). Borrow \\(1\\) from Tens (\\(5 \\rightarrow 4\\)), making Units \\(14\\). \\(14 - 7 = 7\\).\n• <strong>Tens</strong>: We now have \\(4 < 6\\). Borrow \\(1\\) from Hundreds (\\(5 \\rightarrow 4\\)), making Tens \\(14\\). \\(14 - 6 = 8\\).\n• <strong>Hundreds</strong>: We now have \\(4 < 8\\). Borrow \\(1\\) from Thousands (\\(9 \\rightarrow 8\\)), making Hundreds \\(14\\). \\(14 - 8 = 6\\).\n• <strong>Thousands</strong>: We now have \\(8 < 9\\). Borrow \\(1\\) from Ten Thousands (\\(1 \\rightarrow 0\\)), making Thousands \\(18\\). \\(18 - 9 = 9\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(1000 - 386\\)",
    "answer": "614",
    "solution": "Step 1: Arrange vertically.\n\n<pre style=\"font-family: monospace; line-height: 1.2;\">  1 0 0 0\n-   3 8 6\n---------</pre>Step 2: Perform across-zero borrowing.\nBorrow \\(1\\) all the way from the Thousands column (\\(1 \\rightarrow 0\\)), which propagates to make the Hundreds \\(9\\), Tens \\(9\\), and Units \\(10\\).\n• Units: \\(10 - 6 = 4\\)\n• Tens: \\(9 - 8 = 1\\)\n• Hundreds: \\(9 - 3 = 6\\)\n<pre style=\"font-family: monospace; line-height: 1.2;\">  1 0 0 0\n-   3 8 6\n---------\n    6 1 4</pre>Therefore, the difference is \\(614\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Arrange vertically.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Perform across-zero borrowing.\nTherefore, the difference is \\(614\\).",
        "workingOut": "Borrow \\(1\\) all the way from the Thousands column (\\(1 \\rightarrow 0\\)), which propagates to make the Hundreds \\(9\\), Tens \\(9\\), and Units \\(10\\).\n• <strong>Units</strong>: \\(10 - 6 = 4\\)\n• <strong>Tens</strong>: \\(9 - 8 = 1\\)\n• <strong>Hundreds</strong>: \\(9 - 3 = 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(20015 - 19999\\)",
    "answer": "16",
    "solution": "Step 1: Arrange vertically.\n\n<pre style=\"font-family: monospace; line-height: 1.2;\">  2 0 0 1 5\n- 1 9 9 9 9\n-----------</pre>Step 2: Subtract with borrowing.\n• Units: \\(5 < 9\\). Borrow \\(1\\) from Tens (\\(1 \\rightarrow 0\\)), making Units \\(15\\). \\(15 - 9 = 6\\).\n• Tens: We now have \\(0 < 9\\). Borrow \\(1\\) across the Hundreds and Thousands from the Thousands (\\(200 \\rightarrow 199\\)), making Tens \\(10\\). \\(10 - 9 = 1\\).\n• Hundreds: \\(9 - 9 = 0\\).\n• Thousands: \\(9 - 9 = 0\\).\n• Ten Thousands: \\(1 - 1 = 0\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">  2 0 0 1 5\n- 1 9 9 9 9\n-----------\n          1 6</pre>Alternatively, notice that \\(20015\\) is exactly \\(16\\) greater than \\(19999\\) since \\(19999 + 1 = 20000\\) and \\(20000 + 15 = 20015\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Arrange vertically.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Subtract with borrowing.\nAlternatively, notice that \\(20015\\) is exactly \\(16\\) greater than \\(19999\\) since \\(19999 + 1 = 20000\\) and \\(20000 + 15 = 20015\\).",
        "workingOut": "• <strong>Units</strong>: \\(5 < 9\\). Borrow \\(1\\) from Tens (\\(1 \\rightarrow 0\\)), making Units \\(15\\). \\(15 - 9 = 6\\).\n• <strong>Tens</strong>: We now have \\(0 < 9\\). Borrow \\(1\\) across the Hundreds and Thousands from the Thousands (\\(200 \\rightarrow 199\\)), making Tens \\(10\\). \\(10 - 9 = 1\\).\n• <strong>Hundreds</strong>: \\(9 - 9 = 0\\).\n• <strong>Thousands</strong>: \\(9 - 9 = 0\\).\n• <strong>Ten Thousands</strong>: \\(1 - 1 = 0\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(20202 - 18306\\)",
    "answer": "1896",
    "solution": "Step 1: Arrange vertically.\n\n<pre style=\"font-family: monospace; line-height: 1.2;\">  2 0 2 0 2\n- 1 8 3 0 6\n-----------</pre>Step 2: Perform column subtraction.\n• Units: \\(2 < 6\\). Borrow \\(1\\) from Tens. Since Tens is \\(0\\), borrow from Hundreds (\\(2 \\rightarrow 1\\), Tens becomes \\(10\\), then borrow to make Tens \\(9\\) and Units \\(12\\)). \\(12 - 6 = 6\\).\n• Tens: \\(9 - 0 = 9\\).\n• Hundreds: We now have \\(1 < 3\\). Borrow \\(1\\) from Thousands. Since Thousands is \\(0\\), borrow from Ten Thousands (\\(2 \\rightarrow 1\\), Thousands becomes \\(10\\), then borrow to make Thousands \\(9\\) and Hundreds \\(11\\)). \\(11 - 3 = 8\\).\n• Thousands: \\(9 - 8 = 1\\).\n• Ten Thousands: \\(1 - 1 = 0\\).\n<pre style=\"font-family: monospace; line-height: 1.2;\">  2 0 2 0 2\n- 1 8 3 0 6\n-----------\n    1 8 9 6</pre>Therefore, the difference is \\(1896\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Arrange vertically.",
        "workingOut": null,
        "graphData": null
      },
      {
        "explanation": "Perform column subtraction.\nTherefore, the difference is \\(1896\\).",
        "workingOut": "• <strong>Units</strong>: \\(2 < 6\\). Borrow \\(1\\) from Tens. Since Tens is \\(0\\), borrow from Hundreds (\\(2 \\rightarrow 1\\), Tens becomes \\(10\\), then borrow to make Tens \\(9\\) and Units \\(12\\)). \\(12 - 6 = 6\\).\n• <strong>Tens</strong>: \\(9 - 0 = 9\\).\n• <strong>Hundreds</strong>: We now have \\(1 < 3\\). Borrow \\(1\\) from Thousands. Since Thousands is \\(0\\), borrow from Ten Thousands (\\(2 \\rightarrow 1\\), Thousands becomes \\(10\\), then borrow to make Thousands \\(9\\) and Hundreds \\(11\\)). \\(11 - 3 = 8\\).\n• <strong>Thousands</strong>: \\(9 - 8 = 1\\).\n• <strong>Ten Thousands</strong>: \\(1 - 1 = 0\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1b",
    "topicCode": "1B",
    "topicTitle": "Addition",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Liam earned \\(\\\\)138\\(, \\)\\\\(246\\), \\(\\\\)162\\(, and \\)\\\\(175\\) over four Saturdays mowing lawns. How much did he earn in total?",
    "answer": "721",
    "solution": "Step 1: Set up the sum of earnings.\nWe need to add: \\(\\\\)138 + \\\\(246 + \\\\)162 + \\\\(175\\).\nStep 2: Group friendly numbers to add mentally.\nNotice that the Units digits of \\(138\\) and \\(162\\) add up to \\(10\\) (\\(8 + 2 = 10\\)). Let's pair them:\n\\[138 + 162 = 300\\]\nStep 3: Add the remaining values.\nNow add \\(246\\) and \\(175\\):\n\\[246 + 175 = 421\\]\nStep 4: Combine the sums.\n\\[300 + 421 = 721\\]\nLiam earned a total of \\(\\\\)721$.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up the sum of earnings.",
        "workingOut": "We need to add: \\(\\\\)138 + \\\\(246 + \\\\)162 + \\\\(175\\).",
        "graphData": null
      },
      {
        "explanation": "Group friendly numbers to add mentally.",
        "workingOut": "Notice that the Units digits of \\(138\\) and \\(162\\) add up to \\(10\\) (\\(8 + 2 = 10\\)). Let's pair them:\n<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  1 3 8\n+ 1 6 2\n-------\n  3 0 0</pre>",
        "graphData": null
      },
      {
        "explanation": "Add the remaining values.",
        "workingOut": "Now add \\(246\\) and \\(175\\):\n<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  2 4 6\n+ 1 7 5\n-------\n  4 2 1</pre>",
        "graphData": null
      },
      {
        "explanation": "Combine the sums.\nLiam earned a total of \\(\\\\)721\\).",
        "workingOut": "<pre style=\"font-family: monospace; line-height: 1.2; font-size: 1.1rem; margin: 10px 0; letter-spacing: 0.05em;\">  3 0 0\n+ 4 2 1\n-------\n  7 2 1</pre>",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1b",
    "topicCode": "1B",
    "topicTitle": "Addition",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "The lengths of fabric required for five new curtains were \\(14\\text{ m}\\), \\(36\\text{ m}\\), \\(86\\text{ m}\\), \\(19\\text{ m}\\), and \\(81\\text{ m}\\). What total length of fabric was required for all the curtains?",
    "answer": "236",
    "solution": "Step 1: Set up the addition of all lengths.\nTotal length = \\(14 + 36 + 86 + 19 + 81\\)\nStep 2: Identify pairs that sum to multiples of 100.\n• Pair 1: \\(14\\text{ m}\\) and \\(86\\text{ m} \\rightarrow 14 + 86 = 100\\text{ m}\\)\n• Pair 2: \\(19\\text{ m}\\) and \\(81\\text{ m} \\rightarrow 19 + 81 = 100\\text{ m}\\)\nStep 3: Combine all sums.\n\\[100 + 100 + 36 = 236\\text{ m}\\]\nThe total length of fabric required is \\(236\\text{ m}\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up the addition of all lengths.",
        "workingOut": "Total length = \\(14 + 36 + 86 + 19 + 81\\)",
        "graphData": null
      },
      {
        "explanation": "Identify pairs that sum to multiples of 100.",
        "workingOut": "• Pair 1: \\(14\\text{ m}\\) and \\(86\\text{ m} \\rightarrow 14 + 86 = 100\\text{ m}\\)\n• Pair 2: \\(19\\text{ m}\\) and \\(81\\text{ m} \\rightarrow 19 + 81 = 100\\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine all sums.\nThe total length of fabric required is \\(236\\text{ m}\\).",
        "workingOut": "\\[100 + 100 + 36 = 236\\text{ m}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "The distance from Town A to Town B is \\(1680\\text{ km}\\), and the distance from Town A to Town C via Town B is \\(3120\\text{ km}\\). What is the distance between Town B and Town C?",
    "answer": "1440",
    "solution": "Step 1: Understand the route layout.\nThe journey goes from Town A \\(\\rightarrow\\) Town B \\(\\rightarrow\\) Town C.\n• Distance \\(A \\rightarrow B = 1680\\text{ km}\\)\n• Total distance \\(A \\rightarrow B \\rightarrow C = 3120\\text{ km}\\)\nStep 2: Formulate the subtraction.\nTo find the distance between Town B and Town C, subtract the distance of the first leg from the total distance:\n\\[\\text{Distance } B \\rightarrow C = 3120 - 1680\\]\nStep 3: Calculate the difference.\nUsing column subtraction:\n\\[3120 - 1680 = 1440\\text{ km}\\]\nThe distance between Town B and Town C is \\(1440\\text{ km}\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Understand the route layout.",
        "workingOut": "The journey goes from Town A \\(\\rightarrow\\) Town B \\(\\rightarrow\\) Town C.\n• Distance \\(A \\rightarrow B = 1680\\text{ km}\\)\n• Total distance \\(A \\rightarrow B \\rightarrow C = 3120\\text{ km}\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate the subtraction.",
        "workingOut": "To find the distance between Town B and Town C, subtract the distance of the first leg from the total distance:\n\\[\\text{Distance } B \\rightarrow C = 3120 - 1680\\]",
        "graphData": null
      },
      {
        "explanation": "Calculate the difference.\nThe distance between Town B and Town C is \\(1440\\text{ km}\\).",
        "workingOut": "Using column subtraction:\n\\[3120 - 1680 = 1440\\text{ km}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Jacqui is \\(186\\text{ cm}\\) tall and David is \\(154\\text{ cm}\\) tall. How much taller is Jacqui than David?",
    "answer": "32",
    "solution": "Step 1: Compare heights.\nWe need to find the difference between Jacqui's height (\\(186\\text{ cm}\\)) and David's height (\\(154\\text{ cm}\\)).\nStep 2: Subtract the heights.\n\\[186 - 154 = 32\\text{ cm}\\]\nJacqui is \\(32\\text{ cm}\\) taller than David.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Compare heights.",
        "workingOut": "We need to find the difference between Jacqui's height (\\(186\\text{ cm}\\)) and David's height (\\(154\\text{ cm}\\)).",
        "graphData": null
      },
      {
        "explanation": "Subtract the heights.\nJacqui is \\(32\\text{ cm}\\) taller than David.",
        "workingOut": "\\[186 - 154 = 32\\text{ cm}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Jacqui is \\(186\\text{ cm}\\) tall and Adrian is \\(149\\text{ cm}\\) tall. How much taller is Jacqui than Adrian?",
    "answer": "37",
    "solution": "Step 1: Compare heights.\nWe need to find the difference between Jacqui's height (\\(186\\text{ cm}\\)) and Adrian's height (\\(149\\text{ cm}\\)).\nStep 2: Subtract the heights (with borrowing).\n\\[186 - 149 = 37\\text{ cm}\\]\nJacqui is \\(37\\text{ cm}\\) taller than Adrian.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Compare heights.",
        "workingOut": "We need to find the difference between Jacqui's height (\\(186\\text{ cm}\\)) and Adrian's height (\\(149\\text{ cm}\\)).",
        "graphData": null
      },
      {
        "explanation": "Subtract the heights (with borrowing).\nJacqui is \\(37\\text{ cm}\\) taller than Adrian.",
        "workingOut": "\\[186 - 149 = 37\\text{ cm}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Choose the correct symbol to make the statement true: \\(54 + 8 \\quad \\square \\quad 31 + 31\\)",
    "options": [
      "\\(<\\)",
      "\\(>\\)",
      "\\(=\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Calculate the value on the left-hand side (LHS).\n\\[LHS = 54 + 8 = 62\\]\nStep 2: Calculate the value on the right-hand side (RHS).\n\\[RHS = 31 + 31 = 62\\]\nStep 3: Compare LHS and RHS.\nSince \\(62 = 62\\), the correct symbol is **\\(=\\)**.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Calculate the value on the left-hand side (LHS).",
        "workingOut": "\\[LHS = 54 + 8 = 62\\]",
        "graphData": null
      },
      {
        "explanation": "Calculate the value on the right-hand side (RHS).",
        "workingOut": "\\[RHS = 31 + 31 = 62\\]",
        "graphData": null
      },
      {
        "explanation": "Compare LHS and RHS.",
        "workingOut": "Since \\(62 = 62\\), the correct symbol is **\\(=\\)**.",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Choose the correct symbol to make the statement true: \\(74 - 18 \\quad \\square \\quad 27 + 28\\)",
    "options": [
      "\\(<\\)",
      "\\(>\\)",
      "\\(=\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Calculate the Left-Hand Side (LHS).\n\\[LHS = 74 - 18 = 56\\]\nStep 2: Calculate the Right-Hand Side (RHS).\n\\[RHS = 27 + 28 = 55\\]\nStep 3: Compare the values.\nSince \\(56 > 55\\), the correct symbol is **\\(>\\)**.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Calculate the Left-Hand Side (LHS).",
        "workingOut": "\\[LHS = 74 - 18 = 56\\]",
        "graphData": null
      },
      {
        "explanation": "Calculate the Right-Hand Side (RHS).",
        "workingOut": "\\[RHS = 27 + 28 = 55\\]",
        "graphData": null
      },
      {
        "explanation": "Compare the values.",
        "workingOut": "Since \\(56 > 55\\), the correct symbol is **\\(>\\)**.",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Choose the correct symbol to make the statement true: \\(24 + 24 + 24 \\quad \\square \\quad 23 + 24 + 25\\)",
    "options": [
      "\\(<\\)",
      "\\(>\\)",
      "\\(=\\)"
    ],
    "answer": 2,
    "solution": "Step 1: Evaluate the Left-Hand Side (LHS).\n\\[LHS = 24 + 24 + 24 = 24 \\times 3 = 72\\]\nStep 2: Evaluate the Right-Hand Side (RHS).\n\\[RHS = 23 + 24 + 25 = 72\\]\n*(Notice that \\(23\\) is \\(1\\) less than \\(24\\), and \\(25\\) is \\(1\\) more than \\(24\\), balancing out to exactly \\(24 \\times 3\\)).*\nStep 3: Compare LHS and RHS.\nSince \\(72 = 72\\), the correct symbol is **\\(=\\)**.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Evaluate the Left-Hand Side (LHS).",
        "workingOut": "\\[LHS = 24 + 24 + 24 = 24 \\times 3 = 72\\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the Right-Hand Side (RHS).",
        "workingOut": "\\[RHS = 23 + 24 + 25 = 72\\]\n*(Notice that \\(23\\) is \\(1\\) less than \\(24\\), and \\(25\\) is \\(1\\) more than \\(24\\), balancing out to exactly \\(24 \\times 3\\)).*",
        "graphData": null
      },
      {
        "explanation": "Compare LHS and RHS.",
        "workingOut": "Since \\(72 = 72\\), the correct symbol is **\\(=\\)**.",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1d",
    "topicCode": "1D",
    "topicTitle": "Subtraction",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Choose the correct symbol to make the statement true: \\(397 + 452 \\quad \\square \\quad 1000 - 152\\)",
    "options": [
      "\\(<\\)",
      "\\(>\\)",
      "\\(=\\)"
    ],
    "answer": 1,
    "solution": "Step 1: Calculate the Left-Hand Side (LHS).\n\\[397 + 452 = 849\\]\nStep 2: Calculate the Right-Hand Side (RHS).\n\\[1000 - 152 = 848\\]\nStep 3: Compare LHS and RHS.\nSince \\(849 > 848\\), the correct symbol is **\\(>\\)**.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Calculate the Left-Hand Side (LHS).",
        "workingOut": "\\[397 + 452 = 849\\]",
        "graphData": null
      },
      {
        "explanation": "Calculate the Right-Hand Side (RHS).",
        "workingOut": "\\[1000 - 152 = 848\\]",
        "graphData": null
      },
      {
        "explanation": "Compare LHS and RHS.",
        "workingOut": "Since \\(849 > 848\\), the correct symbol is **\\(>\\)**.",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1e",
    "topicCode": "1E",
    "topicTitle": "Multiplication",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental strategies: \\(38 \\times 6 + 38 \\times 94\\)",
    "answer": "3800",
    "solution": "Step 1: Apply the distributive law.\nNotice that both terms share a factor of \\(38\\). We can factor it out:\n\\[38 \\times 6 + 38 \\times 94 = 38 \\times (6 + 94)\\]\nStep 2: Simplify inside the parentheses.\n\\[6 + 94 = 100\\]\nStep 3: Perform the final multiplication.\n\\[38 \\times 100 = 3800\\]\nThe value of the expression is \\(3800\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Apply the distributive law.",
        "workingOut": "Notice that both terms share a factor of \\(38\\). We can factor it out:\n\\[38 \\times 6 + 38 \\times 94 = 38 \\times (6 + 94)\\]",
        "graphData": null
      },
      {
        "explanation": "Simplify inside the parentheses.",
        "workingOut": "\\[6 + 94 = 100\\]",
        "graphData": null
      },
      {
        "explanation": "Perform the final multiplication.\nThe value of the expression is \\(3800\\).",
        "workingOut": "\\[38 \\times 100 = 3800\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1e",
    "topicCode": "1E",
    "topicTitle": "Multiplication",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental strategies: \\(5 \\times 76 \\times 2\\)",
    "answer": "760",
    "solution": "Step 1: Use the commutative property of multiplication.\nReorder the factors to group numbers that multiply to a multiple of \\(10\\):\n\\[5 \\times 76 \\times 2 = (5 \\times 2) \\times 76\\]\nStep 2: Multiply the friendly numbers.\n\\[5 \\times 2 = 10\\]\nStep 3: Multiply by the remaining factor.\n\\[10 \\times 76 = 760\\]\nThe value is \\(760\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Use the commutative property of multiplication.",
        "workingOut": "Reorder the factors to group numbers that multiply to a multiple of \\(10\\):\n\\[5 \\times 76 \\times 2 = (5 \\times 2) \\times 76\\]",
        "graphData": null
      },
      {
        "explanation": "Multiply the friendly numbers.",
        "workingOut": "\\[5 \\times 2 = 10\\]",
        "graphData": null
      },
      {
        "explanation": "Multiply by the remaining factor.\nThe value is \\(760\\).",
        "workingOut": "\\[10 \\times 76 = 760\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1e",
    "topicCode": "1E",
    "topicTitle": "Multiplication",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental strategies: \\(4 \\times 59 \\times 25\\)",
    "answer": "5900",
    "solution": "Step 1: Reorder factors.\nReorder the factors to make a power of \\(100\\):\n\\[4 \\times 25 \\times 59 = (4 \\times 25) \\times 59\\]\nStep 2: Perform the first multiplication.\n\\[4 \\times 25 = 100\\]\nStep 3: Multiply by 59.\n\\[100 \\times 59 = 5900\\]\nThe value is \\(5900\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Reorder factors.",
        "workingOut": "Reorder the factors to make a power of \\(100\\):\n\\[4 \\times 25 \\times 59 = (4 \\times 25) \\times 59\\]",
        "graphData": null
      },
      {
        "explanation": "Perform the first multiplication.",
        "workingOut": "\\[4 \\times 25 = 100\\]",
        "graphData": null
      },
      {
        "explanation": "Multiply by 59.\nThe value is \\(5900\\).",
        "workingOut": "\\[100 \\times 59 = 5900\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1e",
    "topicCode": "1E",
    "topicTitle": "Multiplication",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental strategies: \\(125 \\times 14\\)",
    "answer": "1750",
    "solution": "Step 1: Decompose the multiplication.\nBreak down \\(14\\) into \\(2 \\times 7\\) to exploit the properties of \\(125\\):\n\\[125 \\times 14 = 125 \\times 2 \\times 7\\]\nStep 2: Multiply 125 by 2.\n\\[125 \\times 2 = 250\\]\nStep 3: Multiply 250 by 7.\n\\[250 \\times 7 = (200 \\times 7) + (50 \\times 7) = 1400 + 350 = 1750\\]\nThe value is \\(1750\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Decompose the multiplication.",
        "workingOut": "Break down \\(14\\) into \\(2 \\times 7\\) to exploit the properties of \\(125\\):\n\\[125 \\times 14 = 125 \\times 2 \\times 7\\]",
        "graphData": null
      },
      {
        "explanation": "Multiply 125 by 2.",
        "workingOut": "\\[125 \\times 2 = 250\\]",
        "graphData": null
      },
      {
        "explanation": "Multiply 250 by 7.\nThe value is \\(1750\\).",
        "workingOut": "\\[250 \\times 7 = (200 \\times 7) + (50 \\times 7) = 1400 + 350 = 1750\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1e",
    "topicCode": "1E",
    "topicTitle": "Multiplication",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental strategies: \\(247 \\times 6\\)",
    "answer": "1482",
    "solution": "Step 1: Rewrite using subtraction.\nWrite \\(247\\) as \\((250 - 3)\\) to use friendlier numbers:\n\\[247 \\times 6 = (250 - 3) \\times 6\\]\nStep 2: Apply the distributive law.\n\\[250 \\times 6 - 3 \\times 6\\]\nStep 3: Simplify the terms.\n• \\(250 \\times 6 = 1500\\)\n• \\(3 \\times 6 = 18\\)\nStep 4: Subtract to find the final result.\n\\[1500 - 18 = 1482\\]\nThe value is \\(1482\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Rewrite using subtraction.",
        "workingOut": "Write \\(247\\) as \\((250 - 3)\\) to use friendlier numbers:\n\\[247 \\times 6 = (250 - 3) \\times 6\\]",
        "graphData": null
      },
      {
        "explanation": "Apply the distributive law.",
        "workingOut": "\\[250 \\times 6 - 3 \\times 6\\]",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "• \\(250 \\times 6 = 1500\\)\n• \\(3 \\times 6 = 18\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract to find the final result.\nThe value is \\(1482\\).",
        "workingOut": "\\[1500 - 18 = 1482\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1e",
    "topicCode": "1E",
    "topicTitle": "Multiplication",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using mental strategies: \\(142 \\times 15\\)",
    "answer": "2130",
    "solution": "Step 1: Break down 15.\nWrite \\(15\\) as \\((10 + 5)\\) or utilize the halving and doubling method:\n\\[\\text{Double } 15 \\rightarrow 30 \\quad \\text{and} \\quad \\text{Halve } 142 \\rightarrow 71\\]\n\\[142 \\times 15 = 71 \\times 30\\]\nStep 2: Perform the simplified multiplication.\n\\[71 \\times 3 = 213\\]\n\\[71 \\times 30 = 2130\\]\nThe value is \\(2130\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Break down 15.",
        "workingOut": "Write \\(15\\) as \\((10 + 5)\\) or utilize the halving and doubling method:\n\\[\\text{Double } 15 \\rightarrow 30 \\quad \\text{and} \\quad \\text{Halve } 142 \\rightarrow 71\\]\n\\[142 \\times 15 = 71 \\times 30\\]",
        "graphData": null
      },
      {
        "explanation": "Perform the simplified multiplication.\nThe value is \\(2130\\).",
        "workingOut": "\\[71 \\times 3 = 213\\]\n\\[71 \\times 30 = 2130\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(36 \\times 8\\)",
    "answer": "288",
    "solution": "Step 1: Set up short multiplication.\nMultiply \\(36\\) by \\(8\\) column by column:\n• \\(6 \\times 8 = 48 \\rightarrow\\) Write \\(8\\), carry \\(4\\).\n• \\(3 \\times 8 + 4\\text{ (carry)} = 24 + 4 = 28 \\rightarrow\\) Write \\(28\\).\nTherefore, the product is \\(288\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up short multiplication.\nTherefore, the product is \\(288\\).",
        "workingOut": "Multiply \\(36\\) by \\(8\\) column by column:\n• \\(6 \\times 8 = 48 \\rightarrow\\) Write \\(8\\), carry \\(4\\).\n• \\(3 \\times 8 + 4\\text{ (carry)} = 24 + 4 = 28 \\rightarrow\\) Write \\(28\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(76 \\times 9\\)",
    "answer": "684",
    "solution": "Step 1: Set up column multiplication.\nMultiply column by column:\n• \\(6 \\times 9 = 54 \\rightarrow\\) Write \\(4\\), carry \\(5\\).\n• \\(7 \\times 9 + 5\\text{ (carry)} = 63 + 5 = 68 \\rightarrow\\) Write \\(68\\).\nThe product is \\(684\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up column multiplication.\nThe product is \\(684\\).",
        "workingOut": "Multiply column by column:\n• \\(6 \\times 9 = 54 \\rightarrow\\) Write \\(4\\), carry \\(5\\).\n• \\(7 \\times 9 + 5\\text{ (carry)} = 63 + 5 = 68 \\rightarrow\\) Write \\(68\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(54 \\times 7\\)",
    "answer": "378",
    "solution": "Step 1: Multiply step-by-step.\n• \\(4 \\times 7 = 28 \\rightarrow\\) Write \\(8\\), carry \\(2\\).\n• \\(5 \\times 7 + 2\\text{ (carry)} = 35 + 2 = 37 \\rightarrow\\) Write \\(37\\).\nThe product is \\(378\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Multiply step-by-step.\nThe product is \\(378\\).",
        "workingOut": "• \\(4 \\times 7 = 28 \\rightarrow\\) Write \\(8\\), carry \\(2\\).\n• \\(5 \\times 7 + 2\\text{ (carry)} = 35 + 2 = 37 \\rightarrow\\) Write \\(37\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(297 \\times 6\\)",
    "answer": "1782",
    "solution": "Step 1: Perform vertical multiplication.\nMultiply each digit of \\(297\\) by \\(6\\):\n• \\(7 \\times 6 = 42 \\rightarrow\\) Write \\(2\\), carry \\(4\\).\n• \\(9 \\times 6 + 4\\text{ (carry)} = 54 + 4 = 58 \\rightarrow\\) Write \\(8\\), carry \\(5\\).\n• \\(2 \\times 6 + 5\\text{ (carry)} = 12 + 5 = 17 \\rightarrow\\) Write \\(17\\).\nThe product is \\(1782\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform vertical multiplication.\nThe product is \\(1782\\).",
        "workingOut": "Multiply each digit of \\(297\\) by \\(6\\):\n• \\(7 \\times 6 = 42 \\rightarrow\\) Write \\(2\\), carry \\(4\\).\n• \\(9 \\times 6 + 4\\text{ (carry)} = 54 + 4 = 58 \\rightarrow\\) Write \\(8\\), carry \\(5\\).\n• \\(2 \\times 6 + 5\\text{ (carry)} = 12 + 5 = 17 \\rightarrow\\) Write \\(17\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(2045 \\times 8\\)",
    "answer": "16360",
    "solution": "Step 1: Perform vertical multiplication.\n• \\(5 \\times 8 = 40 \\rightarrow\\) Write \\(0\\), carry \\(4\\).\n• \\(4 \\times 8 + 4 = 36 \\rightarrow\\) Write \\(6\\), carry \\(3\\).\n• \\(0 \\times 8 + 3 = 3 \\rightarrow\\) Write \\(3\\).\n• \\(2 \\times 8 = 16 \\rightarrow\\) Write \\(16\\).\nThe product is \\(16360\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform vertical multiplication.\nThe product is \\(16360\\).",
        "workingOut": "• \\(5 \\times 8 = 40 \\rightarrow\\) Write \\(0\\), carry \\(4\\).\n• \\(4 \\times 8 + 4 = 36 \\rightarrow\\) Write \\(6\\), carry \\(3\\).\n• \\(0 \\times 8 + 3 = 3 \\rightarrow\\) Write \\(3\\).\n• \\(2 \\times 8 = 16 \\rightarrow\\) Write \\(16\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(34568 \\times 4\\)",
    "answer": "138272",
    "solution": "Step 1: Perform the multiplication columns.\n• \\(8 \\times 4 = 32 \\rightarrow\\) Write \\(2\\), carry \\(3\\).\n• \\(6 \\times 4 + 3 = 27 \\rightarrow\\) Write \\(7\\), carry \\(2\\).\n• \\(5 \\times 4 + 2 = 22 \\rightarrow\\) Write \\(2\\), carry \\(2\\).\n• \\(4 \\times 4 + 2 = 18 \\rightarrow\\) Write \\(8\\), carry \\(1\\).\n• \\(3 \\times 4 + 1 = 13 \\rightarrow\\) Write \\(13\\).\nThe product is \\(138272\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform the multiplication columns.\nThe product is \\(138272\\).",
        "workingOut": "• \\(8 \\times 4 = 32 \\rightarrow\\) Write \\(2\\), carry \\(3\\).\n• \\(6 \\times 4 + 3 = 27 \\rightarrow\\) Write \\(7\\), carry \\(2\\).\n• \\(5 \\times 4 + 2 = 22 \\rightarrow\\) Write \\(2\\), carry \\(2\\).\n• \\(4 \\times 4 + 2 = 18 \\rightarrow\\) Write \\(8\\), carry \\(1\\).\n• \\(3 \\times 4 + 1 = 13 \\rightarrow\\) Write \\(13\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(444 \\times 22\\)",
    "answer": "9768",
    "solution": "Step 1: Set up long multiplication.\n\\[\\begin{array}{c@{\\quad}r} & 444 \\\\ \\times & 22 \\\\ \\hline & 888 \\quad (444 \\times 2) \\\\ + & 8880 \\quad (444 \\times 20) \\\\ \\hline & 9768 \\end{array}\\]\nThe product is \\(9768\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up long multiplication.\nThe product is \\(9768\\).",
        "workingOut": "\\[\\begin{array}{c@{\\quad}r} & 444 \\\\ \\times & 22 \\\\ \\hline & 888 \\quad (444 \\times 2) \\\\ + & 8880 \\quad (444 \\times 20) \\\\ \\hline & 9768 \\end{array}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(5343 \\times 12\\)",
    "answer": "64116",
    "solution": "Step 1: Use long multiplication.\n\\[\\begin{array}{c@{\\quad}r} & 5343 \\\\ \\times & 12 \\\\ \\hline & 10686 \\quad (5343 \\times 2) \\\\ + & 53430 \\quad (5343 \\times 10) \\\\ \\hline & 64116 \\end{array}\\]\nThe product is \\(64116\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Use long multiplication.\nThe product is \\(64116\\).",
        "workingOut": "\\[\\begin{array}{c@{\\quad}r} & 5343 \\\\ \\times & 12 \\\\ \\hline & 10686 \\quad (5343 \\times 2) \\\\ + & 53430 \\quad (5343 \\times 10) \\\\ \\hline & 64116 \\end{array}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(312 \\times 24\\)",
    "answer": "7488",
    "solution": "Step 1: Perform vertical multiplication.\n\\[\\begin{array}{c@{\\quad}r} & 312 \\\\ \\times & 24 \\\\ \\hline & 1248 \\quad (312 \\times 4) \\\\ + & 6240 \\quad (312 \\times 20) \\\\ \\hline & 7488 \\end{array}\\]\nThe product is \\(7488\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform vertical multiplication.\nThe product is \\(7488\\).",
        "workingOut": "\\[\\begin{array}{c@{\\quad}r} & 312 \\\\ \\times & 24 \\\\ \\hline & 1248 \\quad (312 \\times 4) \\\\ + & 6240 \\quad (312 \\times 20) \\\\ \\hline & 7488 \\end{array}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(825 \\times 36\\)",
    "answer": "29700",
    "solution": "Step 1: Set up long multiplication.\n\\[\\begin{array}{c@{\\quad}r} & 825 \\\\ \\times & 36 \\\\ \\hline & 4950 \\quad (825 \\times 6) \\\\ + & 24750 \\quad (825 \\times 30) \\\\ \\hline & 29700 \\end{array}\\]\nThe product is \\(29700\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up long multiplication.\nThe product is \\(29700\\).",
        "workingOut": "\\[\\begin{array}{c@{\\quad}r} & 825 \\\\ \\times & 36 \\\\ \\hline & 4950 \\quad (825 \\times 6) \\\\ + & 24750 \\quad (825 \\times 30) \\\\ \\hline & 29700 \\end{array}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(64328 \\times 34\\)",
    "answer": "2187152",
    "solution": "Step 1: Perform multi-digit multiplication.\n\\[\\begin{array}{c@{\\quad}r} & 64328 \\\\ \\times & 34 \\\\ \\hline & 257312 \\quad (64328 \\times 4) \\\\ + & 1929840 \\quad (64328 \\times 30) \\\\ \\hline & 2187152 \\end{array}\\]\nThe product is \\(2187152\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform multi-digit multiplication.\nThe product is \\(2187152\\).",
        "workingOut": "\\[\\begin{array}{c@{\\quad}r} & 64328 \\\\ \\times & 34 \\\\ \\hline & 257312 \\quad (64328 \\times 4) \\\\ + & 1929840 \\quad (64328 \\times 30) \\\\ \\hline & 2187152 \\end{array}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(40835 \\times 28\\)",
    "answer": "1143380",
    "solution": "Step 1: Set up vertical multiplication.\n\\[\\begin{array}{c@{\\quad}r} & 40835 \\\\ \\times & 28 \\\\ \\hline & 326680 \\quad (40835 \\times 8) \\\\ + & 816700 \\quad (40835 \\times 20) \\\\ \\hline & 1143380 \\end{array}\\]\nThe product is \\(1143380\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up vertical multiplication.\nThe product is \\(1143380\\).",
        "workingOut": "\\[\\begin{array}{c@{\\quad}r} & 40835 \\\\ \\times & 28 \\\\ \\hline & 326680 \\quad (40835 \\times 8) \\\\ + & 816700 \\quad (40835 \\times 20) \\\\ \\hline & 1143380 \\end{array}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(840 \\times 275\\)",
    "answer": "231000",
    "solution": "Step 1: Multiply 3-digit by 3-digit.\n\\[\\begin{array}{c@{\\quad}r} & 840 \\\\ \\times & 275 \\\\ \\hline & 4200 \\quad (840 \\times 5) \\\\ & 58800 \\quad (840 \\times 70) \\\\ + & 168000 \\quad (840 \\times 200) \\\\ \\hline & 231000 \\end{array}\\]\nThe product is \\(231000\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Multiply 3-digit by 3-digit.\nThe product is \\(231000\\).",
        "workingOut": "\\[\\begin{array}{c@{\\quad}r} & 840 \\\\ \\times & 275 \\\\ \\hline & 4200 \\quad (840 \\times 5) \\\\ & 58800 \\quad (840 \\times 70) \\\\ + & 168000 \\quad (840 \\times 200) \\\\ \\hline & 231000 \\end{array}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(382 \\times 194\\)",
    "answer": "74108",
    "solution": "Step 1: Perform the column multiplication.\n\\[\\begin{array}{c@{\\quad}r} & 382 \\\\ \\times & 194 \\\\ \\hline & 1528 \\quad (382 \\times 4) \\\\ & 34380 \\quad (382 \\times 90) \\\\ + & 38200 \\quad (382 \\times 100) \\\\ \\hline & 74108 \\end{array}\\]\nThe product is \\(74108\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform the column multiplication.\nThe product is \\(74108\\).",
        "workingOut": "\\[\\begin{array}{c@{\\quad}r} & 382 \\\\ \\times & 194 \\\\ \\hline & 1528 \\quad (382 \\times 4) \\\\ & 34380 \\quad (382 \\times 90) \\\\ + & 38200 \\quad (382 \\times 100) \\\\ \\hline & 74108 \\end{array}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Calculate: \\(6473 \\times 3814\\)",
    "answer": "24687922",
    "solution": "Step 1: Perform long multiplication.\n\\[\\begin{array}{c@{\\quad}r} & 6473 \\\\ \\times & 3814 \\\\ \\hline & 25892 \\quad (6473 \\times 4) \\\\ & 64730 \\quad (6473 \\times 10) \\\\ & 5178400 \\quad (6473 \\times 800) \\\\ + & 19419000 \\quad (6473 \\times 3000) \\\\ \\hline & 24687922 \\end{array}\\]\nThe product is \\(24687922\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform long multiplication.\nThe product is \\(24687922\\).",
        "workingOut": "\\[\\begin{array}{c@{\\quad}r} & 6473 \\\\ \\times & 3814 \\\\ \\hline & 25892 \\quad (6473 \\times 4) \\\\ & 64730 \\quad (6473 \\times 10) \\\\ & 5178400 \\quad (6473 \\times 800) \\\\ + & 19419000 \\quad (6473 \\times 3000) \\\\ \\hline & 24687922 \\end{array}\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1e",
    "topicCode": "1E",
    "topicTitle": "Multiplication",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "All of the \\(36\\) rows of seats are filled for the school assembly. If there are \\(18\\) seats in each row, how many people attend the assembly?",
    "answer": "648",
    "solution": "Step 1: Set up the multiplication.\nWe need to multiply the number of rows (\\(36\\)) by the number of seats per row (\\(18\\)):\n\\[\\text{Total attendance} = 36 \\times 18\\]\nStep 2: Calculate the product.\n\\[36 \\times 18 = 36 \\times (20 - 2) = 720 - 72 = 648\\]\nA total of \\(648\\) people attend the assembly.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up the multiplication.",
        "workingOut": "We need to multiply the number of rows (\\(36\\)) by the number of seats per row (\\(18\\)):\n\\[\\text{Total attendance} = 36 \\times 18\\]",
        "graphData": null
      },
      {
        "explanation": "Calculate the product.\nA total of \\(648\\) people attend the assembly.",
        "workingOut": "\\[36 \\times 18 = 36 \\times (20 - 2) = 720 - 72 = 648\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1e",
    "topicCode": "1E",
    "topicTitle": "Multiplication",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Each of \\(42\\) rabbit burrows has \\(15\\) rabbits in it. What is the total number of rabbits?",
    "answer": "630",
    "solution": "Step 1: Identify key values.\nNumber of burrows = \\(42\\)\nRabbits per burrow = \\(15\\)\nStep 2: Multiply the values.\n\\[\\text{Total rabbits} = 42 \\times 15\\]\nStep 3: Simplify mentally.\n\\[42 \\times 15 = 42 \\times 10 + 42 \\times 5 = 420 + 210 = 630\\]\nThere are \\(630\\) rabbits in total.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Identify key values.",
        "workingOut": "Number of burrows = \\(42\\)\nRabbits per burrow = \\(15\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the values.",
        "workingOut": "\\[\\text{Total rabbits} = 42 \\times 15\\]",
        "graphData": null
      },
      {
        "explanation": "Simplify mentally.\nThere are \\(630\\) rabbits in total.",
        "workingOut": "\\[42 \\times 15 = 42 \\times 10 + 42 \\times 5 = 420 + 210 = 630\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Candies come in packets of \\(12\\). There are \\(35\\) packets in a box, and \\(24\\) boxes in a carton. How many candies are there in each carton?",
    "answer": "10080",
    "solution": "Step 1: Formulate the equation.\nTo find the total number of candies, multiply the quantities together:\n\\[\\text{Total candies} = 12 \\text{ per packet} \\times 35 \\text{ packets} \\times 24 \\text{ boxes}\\]\nStep 2: Multiply step-by-step.\n• First: \\(12 \\times 35\\)\n\\[12 \\times 35 = 6 \\times 70 = 420\\]\n• Second: \\(420 \\times 24\\)\n\\[420 \\times 24 = 420 \\times (20 + 4) = 8400 + 1680 = 10080\\]\nThere are \\(10080\\) candies in each carton.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Formulate the equation.",
        "workingOut": "To find the total number of candies, multiply the quantities together:\n\\[\\text{Total candies} = 12 \\text{ per packet} \\times 35 \\text{ packets} \\times 24 \\text{ boxes}\\]",
        "graphData": null
      },
      {
        "explanation": "Multiply step-by-step.\nThere are \\(10080\\) candies in each carton.",
        "workingOut": "• First: \\(12 \\times 35\\)\n\\[12 \\times 35 = 6 \\times 70 = 420\\]\n• Second: \\(420 \\times 24\\)\n\\[420 \\times 24 = 420 \\times (20 + 4) = 8400 + 1680 = 10080\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1h",
    "topicCode": "1H",
    "topicTitle": "The standard multiplication algorithms",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "A hotel has \\(18\\) rooms on each floor. If the hotel consists of \\(4\\) buildings, each with \\(25\\) floors, how many rooms are there in total?",
    "answer": "1800",
    "solution": "Step 1: Set up the product.\n\\[\\text{Total rooms} = 18 \\text{ rooms/floor} \\times 4 \\text{ buildings} \\times 25 \\text{ floors}\\]\nStep 2: Rearrange to multiply friendly numbers first.\nUsing associative and commutative properties:\n\\[\\text{Total rooms} = 18 \\times (4 \\times 25)\\]\nStep 3: Simplify inside parentheses.\n\\[4 \\times 25 = 100\\]\nStep 4: Multiply by 18.\n\\[18 \\times 100 = 1800\\]\nThe hotel has \\(1800\\) rooms in total.",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up the product.",
        "workingOut": "\\[\\text{Total rooms} = 18 \\text{ rooms/floor} \\times 4 \\text{ buildings} \\times 25 \\text{ floors}\\]",
        "graphData": null
      },
      {
        "explanation": "Rearrange to multiply friendly numbers first.",
        "workingOut": "Using associative and commutative properties:\n\\[\\text{Total rooms} = 18 \\times (4 \\times 25)\\]",
        "graphData": null
      },
      {
        "explanation": "Simplify inside parentheses.",
        "workingOut": "\\[4 \\times 25 = 100\\]",
        "graphData": null
      },
      {
        "explanation": "Multiply by 18.\nThe hotel has \\(1800\\) rooms in total.",
        "workingOut": "\\[18 \\times 100 = 1800\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(886 \\div 2\\)",
    "answer": "443",
    "solution": "Step 1: Divide each digit by 2.\n• Hundreds: \\(8 \\div 2 = 4\\)\n• Tens: \\(8 \\div 2 = 4\\)\n• Units: \\(6 \\div 2 = 3\\)\nCombining these, \\(886 \\div 2 = 443\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Divide each digit by 2.\nCombining these, \\(886 \\div 2 = 443\\).",
        "workingOut": "• Hundreds: \\(8 \\div 2 = 4\\)\n• Tens: \\(8 \\div 2 = 4\\)\n• Units: \\(6 \\div 2 = 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(848 \\div 4\\)",
    "answer": "212",
    "solution": "Step 1: Divide each digit by 4.\n• Hundreds: \\(8 \\div 4 = 2\\)\n• Tens: \\(4 \\div 4 = 1\\)\n• Units: \\(8 \\div 4 = 2\\)\nThus, \\(848 \\div 4 = 212\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Divide each digit by 4.\nThus, \\(848 \\div 4 = 212\\).",
        "workingOut": "• Hundreds: \\(8 \\div 4 = 2\\)\n• Tens: \\(4 \\div 4 = 1\\)\n• Units: \\(8 \\div 4 = 2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(936 \\div 3\\)",
    "answer": "312",
    "solution": "Step 1: Divide digit-by-digit.\n• Hundreds: \\(9 \\div 3 = 3\\)\n• Tens: \\(3 \\div 3 = 1\\)\n• Units: \\(6 \\div 3 = 2\\)\nTherefore, \\(936 \\div 3 = 312\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Divide digit-by-digit.\nTherefore, \\(936 \\div 3 = 312\\).",
        "workingOut": "• Hundreds: \\(9 \\div 3 = 3\\)\n• Tens: \\(3 \\div 3 = 1\\)\n• Units: \\(6 \\div 3 = 2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(357 \\div 7\\)",
    "answer": "51",
    "solution": "Step 1: Use short division.\n• Divide \\(35\\) by \\(7\\): \\(35 \\div 7 = 5\\).\n• Divide \\(7\\) by \\(7\\): \\(7 \\div 7 = 1\\).\nTherefore, \\(357 \\div 7 = 51\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Use short division.\nTherefore, \\(357 \\div 7 = 51\\).",
        "workingOut": "• Divide \\(35\\) by \\(7\\): \\(35 \\div 7 = 5\\).\n• Divide \\(7\\) by \\(7\\): \\(7 \\div 7 = 1\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(328 \\div 8\\)",
    "answer": "41",
    "solution": "Step 1: Use short division.\n• Divide \\(32\\) by \\(8\\): \\(32 \\div 8 = 4\\).\n• Divide \\(8\\) by \\(8\\): \\(8 \\div 8 = 1\\).\nTherefore, \\(328 \\div 8 = 41\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Use short division.\nTherefore, \\(328 \\div 8 = 41\\).",
        "workingOut": "• Divide \\(32\\) by \\(8\\): \\(32 \\div 8 = 4\\).\n• Divide \\(8\\) by \\(8\\): \\(8 \\div 8 = 1\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(639 \\div 9\\)",
    "answer": "71",
    "solution": "Step 1: Use short division.\n• Divide \\(63\\) by \\(9\\): \\(63 \\div 9 = 7\\).\n• Divide \\(9\\) by \\(9\\): \\(9 \\div 9 = 1\\).\nTherefore, \\(639 \\div 9 = 71\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Use short division.\nTherefore, \\(639 \\div 9 = 71\\).",
        "workingOut": "• Divide \\(63\\) by \\(9\\): \\(63 \\div 9 = 7\\).\n• Divide \\(9\\) by \\(9\\): \\(9 \\div 9 = 1\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(258 \\div 3\\)",
    "answer": "86",
    "solution": "Step 1: Perform short division.\n• \\(25 \\div 3 = 8\\) with a remainder of \\(1\\) (carry \\(1\\) to units to make \\(18\\)).\n• \\(18 \\div 3 = 6\\).\nTherefore, \\(258 \\div 3 = 86\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, \\(258 \\div 3 = 86\\).",
        "workingOut": "• \\(25 \\div 3 = 8\\) with a remainder of \\(1\\) (carry \\(1\\) to units to make \\(18\\)).\n• \\(18 \\div 3 = 6\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(184 \\div 8\\)",
    "answer": "23",
    "solution": "Step 1: Perform short division.\n• \\(18 \\div 8 = 2\\) with a remainder of \\(2\\) (carry \\(2\\) to units to make \\(24\\)).\n• \\(24 \\div 8 = 3\\).\nTherefore, \\(184 \\div 8 = 23\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, \\(184 \\div 8 = 23\\).",
        "workingOut": "• \\(18 \\div 8 = 2\\) with a remainder of \\(2\\) (carry \\(2\\) to units to make \\(24\\)).\n• \\(24 \\div 8 = 3\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(477 \\div 9\\)",
    "answer": "53",
    "solution": "Step 1: Perform short division.\n• \\(47 \\div 9 = 5\\) with a remainder of \\(2\\) (carry \\(2\\) to units to make \\(27\\)).\n• \\(27 \\div 9 = 3\\).\nTherefore, \\(477 \\div 9 = 53\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, \\(477 \\div 9 = 53\\).",
        "workingOut": "• \\(47 \\div 9 = 5\\) with a remainder of \\(2\\) (carry \\(2\\) to units to make \\(27\\)).\n• \\(27 \\div 9 = 3\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(3224 \\div 8\\)",
    "answer": "403",
    "solution": "Step 1: Use short division.\n• \\(32 \\div 8 = 4\\).\n• \\(2 \\div 8 = 0\\) remainder \\(2\\) (carry \\(2\\) to make \\(24\\)).\n• \\(24 \\div 8 = 3\\).\nTherefore, \\(3224 \\div 8 = 403\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Use short division.\nTherefore, \\(3224 \\div 8 = 403\\).",
        "workingOut": "• \\(32 \\div 8 = 4\\).\n• \\(2 \\div 8 = 0\\) remainder \\(2\\) (carry \\(2\\) to make \\(24\\)).\n• \\(24 \\div 8 = 3\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(2305 \\div 5\\)",
    "answer": "461",
    "solution": "Step 1: Perform short division.\n• \\(23 \\div 5 = 4\\) remainder \\(3\\) (carry \\(3\\) to make \\(30\\)).\n• \\(30 \\div 5 = 6\\).\n• \\(5 \\div 5 = 1\\).\nTherefore, \\(2305 \\div 5 = 461\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, \\(2305 \\div 5 = 461\\).",
        "workingOut": "• \\(23 \\div 5 = 4\\) remainder \\(3\\) (carry \\(3\\) to make \\(30\\)).\n• \\(30 \\div 5 = 6\\).\n• \\(5 \\div 5 = 1\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(3456 \\div 6\\)",
    "answer": "576",
    "solution": "Step 1: Perform short division.\n• \\(34 \\div 6 = 5\\) remainder \\(4\\) (carry \\(4\\) to make \\(45\\)).\n• \\(45 \\div 6 = 7\\) remainder \\(3\\) (carry \\(3\\) to make \\(36\\)).\n• \\(36 \\div 6 = 6\\).\nTherefore, \\(3456 \\div 6 = 576\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, \\(3456 \\div 6 = 576\\).",
        "workingOut": "• \\(34 \\div 6 = 5\\) remainder \\(4\\) (carry \\(4\\) to make \\(45\\)).\n• \\(45 \\div 6 = 7\\) remainder \\(3\\) (carry \\(3\\) to make \\(36\\)).\n• \\(36 \\div 6 = 6\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(832 \\div 8\\)",
    "answer": "104",
    "solution": "Step 1: Perform short division.\n• \\(8 \\div 8 = 1\\).\n• \\(3 \\div 8 = 0\\) remainder \\(3\\) (carry \\(3\\) to make \\(32\\)).\n• \\(32 \\div 8 = 4\\).\nTherefore, \\(832 \\div 8 = 104\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, \\(832 \\div 8 = 104\\).",
        "workingOut": "• \\(8 \\div 8 = 1\\).\n• \\(3 \\div 8 = 0\\) remainder \\(3\\) (carry \\(3\\) to make \\(32\\)).\n• \\(32 \\div 8 = 4\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(960 \\div 8\\)",
    "answer": "120",
    "solution": "Step 1: Perform short division.\n• \\(9 \\div 8 = 1\\) remainder \\(1\\) (carry \\(1\\) to make \\(16\\)).\n• \\(16 \\div 8 = 2\\).\n• \\(0 \\div 8 = 0\\).\nTherefore, \\(960 \\div 8 = 120\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, \\(960 \\div 8 = 120\\).",
        "workingOut": "• \\(9 \\div 8 = 1\\) remainder \\(1\\) (carry \\(1\\) to make \\(16\\)).\n• \\(16 \\div 8 = 2\\).\n• \\(0 \\div 8 = 0\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1i",
    "topicCode": "1I",
    "topicTitle": "Division",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate: \\(728 \\div 7\\)",
    "answer": "104",
    "solution": "Step 1: Perform short division.\n• \\(7 \\div 7 = 1\\).\n• \\(2 \\div 7 = 0\\) remainder \\(2\\) (carry \\(2\\) to make \\(28\\)).\n• \\(28 \\div 7 = 4\\).\nTherefore, \\(728 \\div 7 = 104\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, \\(728 \\div 7 = 104\\).",
        "workingOut": "• \\(7 \\div 7 = 1\\).\n• \\(2 \\div 7 = 0\\) remainder \\(2\\) (carry \\(2\\) to make \\(28\\)).\n• \\(28 \\div 7 = 4\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1j",
    "topicCode": "1J",
    "topicTitle": "The short division algorithm",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using short division: \\(7849 \\div 5\\)",
    "options": [
      "\\(1569\\text{ remainder }4\\)",
      "\\(1569\\text{ remainder }2\\)",
      "\\(1568\\text{ remainder }4\\)",
      "\\(1570\\text{ remainder }1\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Set up short division.\n• \\(7 \\div 5 = 1\\) remainder \\(2\\) (carry \\(2\\) to make \\(28\\)).\n• \\(28 \\div 5 = 5\\) remainder \\(3\\) (carry \\(3\\) to make \\(34\\)).\n• \\(34 \\div 5 = 6\\) remainder \\(4\\) (carry \\(4\\) to make \\(49\\)).\n• \\(49 \\div 5 = 9\\) remainder \\(4\\).\nTherefore, the result is \\(1569\\) with a remainder of \\(4\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Set up short division.\nTherefore, the result is \\(1569\\) with a remainder of \\(4\\).",
        "workingOut": "• \\(7 \\div 5 = 1\\) remainder \\(2\\) (carry \\(2\\) to make \\(28\\)).\n• \\(28 \\div 5 = 5\\) remainder \\(3\\) (carry \\(3\\) to make \\(34\\)).\n• \\(34 \\div 5 = 6\\) remainder \\(4\\) (carry \\(4\\) to make \\(49\\)).\n• \\(49 \\div 5 = 9\\) remainder \\(4\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1j",
    "topicCode": "1J",
    "topicTitle": "The short division algorithm",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using short division: \\(39572 \\div 7\\)",
    "options": [
      "\\(5653\\text{ remainder }1\\)",
      "\\(5653\\text{ remainder }3\\)",
      "\\(5652\\text{ remainder }1\\)",
      "\\(5654\\text{ remainder }2\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Perform short division.\n• \\(39 \\div 7 = 5\\) remainder \\(4\\) (carry \\(4\\) to make \\(45\\)).\n• \\(45 \\div 7 = 6\\) remainder \\(3\\) (carry \\(3\\) to make \\(37\\)).\n• \\(37 \\div 7 = 5\\) remainder \\(2\\) (carry \\(2\\) to make \\(22\\)).\n• \\(22 \\div 7 = 3\\) remainder \\(1\\).\nTherefore, the quotient is \\(5653\\) and the remainder is \\(1\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, the quotient is \\(5653\\) and the remainder is \\(1\\).",
        "workingOut": "• \\(39 \\div 7 = 5\\) remainder \\(4\\) (carry \\(4\\) to make \\(45\\)).\n• \\(45 \\div 7 = 6\\) remainder \\(3\\) (carry \\(3\\) to make \\(37\\)).\n• \\(37 \\div 7 = 5\\) remainder \\(2\\) (carry \\(2\\) to make \\(22\\)).\n• \\(22 \\div 7 = 3\\) remainder \\(1\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1j",
    "topicCode": "1J",
    "topicTitle": "The short division algorithm",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using short division: \\(48398 \\div 5\\)",
    "options": [
      "\\(9679\\text{ remainder }3\\)",
      "\\(9679\\text{ remainder }1\\)",
      "\\(9678\\text{ remainder }3\\)",
      "\\(9680\\text{ remainder }2\\)"
    ],
    "answer": 0,
    "solution": "Step 1: Perform short division.\n• \\(48 \\div 5 = 9\\) remainder \\(3\\) (carry \\(3\\) to make \\(33\\)).\n• \\(33 \\div 5 = 6\\) remainder \\(3\\) (carry \\(3\\) to make \\(39\\)).\n• \\(39 \\div 5 = 7\\) remainder \\(4\\) (carry \\(4\\) to make \\(48\\)).\n• \\(48 \\div 5 = 9\\) remainder \\(3\\).\nTherefore, the result is \\(9679\\) with a remainder of \\(3\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Perform short division.\nTherefore, the result is \\(9679\\) with a remainder of \\(3\\).",
        "workingOut": "• \\(48 \\div 5 = 9\\) remainder \\(3\\) (carry \\(3\\) to make \\(33\\)).\n• \\(33 \\div 5 = 6\\) remainder \\(3\\) (carry \\(3\\) to make \\(39\\)).\n• \\(39 \\div 5 = 7\\) remainder \\(4\\) (carry \\(4\\) to make \\(48\\)).\n• \\(48 \\div 5 = 9\\) remainder \\(3\\).",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1l",
    "topicCode": "1L",
    "topicTitle": "Order of operations",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using the order of operations: \\(6 \\times 3 + 8 \\div 2 - 2\\)",
    "answer": "20",
    "solution": "Step 1: Recall the order of operations (BODMAS).\nWe must perform Multiplication and Division from left to right, followed by Addition and Subtraction from left to right.\nStep 2: Perform Multiplication and Division.\n• \\(6 \\times 3 = 18\\)\n• \\(8 \\div 2 = 4\\)\nThe expression becomes:\n\\[18 + 4 - 2\\]\nStep 3: Perform Addition and Subtraction from left to right.\n• \\(18 + 4 = 22\\)\n• \\(22 - 2 = 20\\)\nTherefore, the final value is \\(20\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Recall the order of operations (BODMAS).",
        "workingOut": "We must perform Multiplication and Division from left to right, followed by Addition and Subtraction from left to right.",
        "graphData": null
      },
      {
        "explanation": "Perform Multiplication and Division.",
        "workingOut": "• \\(6 \\times 3 = 18\\)\n• \\(8 \\div 2 = 4\\)\nThe expression becomes:\n\\[18 + 4 - 2\\]",
        "graphData": null
      },
      {
        "explanation": "Perform Addition and Subtraction from left to right.\nTherefore, the final value is \\(20\\).",
        "workingOut": "• \\(18 + 4 = 22\\)\n• \\(22 - 2 = 20\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1l",
    "topicCode": "1L",
    "topicTitle": "Order of operations",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using the order of operations: \\(4 \\times (5 + 7) \\div 3 - 2\\)",
    "answer": "14",
    "solution": "Step 1: Solve inside the Brackets first.\n\\[5 + 7 = 12\\]\nThe expression becomes:\n\\[4 \\times 12 \\div 3 - 2\\]\nStep 2: Perform Multiplication and Division from left to right.\n• \\(4 \\times 12 = 48\\)\n• \\(48 \\div 3 = 16\\)\nThe expression becomes:\n\\[16 - 2\\]\nStep 3: Perform subtraction.\n\\[16 - 2 = 14\\]\nTherefore, the final value is \\(14\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Solve inside the Brackets first.",
        "workingOut": "\\[5 + 7 = 12\\]\nThe expression becomes:\n\\[4 \\times 12 \\div 3 - 2\\]",
        "graphData": null
      },
      {
        "explanation": "Perform Multiplication and Division from left to right.",
        "workingOut": "• \\(4 \\times 12 = 48\\)\n• \\(48 \\div 3 = 16\\)\nThe expression becomes:\n\\[16 - 2\\]",
        "graphData": null
      },
      {
        "explanation": "Perform subtraction.\nTherefore, the final value is \\(14\\).",
        "workingOut": "\\[16 - 2 = 14\\]",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y7-1",
    "topicId": "y7-1l",
    "topicCode": "1L",
    "topicTitle": "Order of operations",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Evaluate using the order of operations: \\(6 \\times 4 + (12 \\div 3 - 2)\\)",
    "answer": "26",
    "solution": "Step 1: Simplify inside the brackets first.\nInside the brackets \\((12 \\div 3 - 2)\\), division comes first:\n• \\(12 \\div 3 = 4\\)\nNow subtract:\n• \\(4 - 2 = 2\\)\nThe expression becomes:\n\\[6 \\times 4 + 2\\]\nStep 2: Perform multiplication.\n\\[6 \\times 4 = 24\\]\nThe expression becomes:\n\\[24 + 2\\]\nStep 3: Perform addition.\n\\[24 + 2 = 26\\]\nTherefore, the final value is \\(26\\).",
    "createdAt": "2026-06-15T14:14:06.009Z",
    "solutionSteps": [
      {
        "explanation": "Simplify inside the brackets first.",
        "workingOut": "Inside the brackets \\((12 \\div 3 - 2)\\), division comes first:\n• \\(12 \\div 3 = 4\\)\nNow subtract:\n• \\(4 - 2 = 2\\)\nThe expression becomes:\n\\[6 \\times 4 + 2\\]",
        "graphData": null
      },
      {
        "explanation": "Perform multiplication.",
        "workingOut": "\\[6 \\times 4 = 24\\]\nThe expression becomes:\n\\[24 + 2\\]",
        "graphData": null
      },
      {
        "explanation": "Perform addition.\nTherefore, the final value is \\(26\\).",
        "workingOut": "\\[24 + 2 = 26\\]",
        "graphData": null
      }
    ]
  }
];

export const importYear7Ch1B = async (forceReset = false) => {
  console.log('[Ch1B Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const targetTopics = ['y7-1b', 'y7-1c', 'y7-1d', 'y7-1e', 'y7-1h', 'y7-1i', 'y7-1j', 'y7-1l'];

    if (forceReset) {
      console.log('[Ch1B Year 7 Import] Force Reset requested. Wiping affected topics...');
      for (const topicId of targetTopics) {
        const oldSnap = await db.collection('questions').where('topicId', '==', topicId).get();
        for (const d of oldSnap.docs) { 
          await d.ref.delete(); 
        }
      }
      console.log('[Ch1B Year 7 Import] Deleted old questions successfully.');
    }
    
    // Check existing questions to prevent duplicates
    const existingQuestions = new Set();
    if (!forceReset) {
      for (const topicId of targetTopics) {
        const snap = await db.collection('questions').where('topicId', '==', topicId).get();
        snap.docs.forEach(doc => existingQuestions.add(doc.data().question.trim()));
      }
    }
    
    // Batch write in chunks of 400 to avoid Firestore limits
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
        console.log(`[Ch1B Year 7 Import] Committed batch of ${batchCount} questions.`);
      }
    }
  } catch (error) { 
    console.error(error); 
    throw error; 
  }
  return importedCount;
};
