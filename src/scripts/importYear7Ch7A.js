import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Using the place values of the digits, write the decimal number $354.1809$ as a sum of hundreds, tens, units, tenths, hundredths, thousandths and ten-thousandths.",
    "options": [
      "$300 + 50 + 4 + \\frac{1}{10} + \\frac{8}{100} + \\frac{0}{1000} + \\frac{9}{10000}$",
      "$300 + 50 + 4 + \\frac{1}{100} + \\frac{8}{1000} + \\frac{9}{10000}$",
      "$3 + 5 + 4 + 0.1 + 0.08 + 0.009$",
      "$300 + 50 + 4 + \\frac{1}{10} + \\frac{8}{100} + \\frac{9}{1000}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <ul>\n      <li>The digit <strong>$3$</strong> is in the hundreds place: $3 \\times 100 = 300$</li>\n      <li>The digit <strong>$5$</strong> is in the tens place: $5 \\times 10 = 50$</li>\n      <li>The digit <strong>$4$</strong> is in the units place: $4 \\times 1 = 4$</li>\n      <li>The digit <strong>$1$</strong> is in the tenths place: $\\frac{1}{10}$</li>\n      <li>The digit <strong>$8$</strong> is in the hundredths place: $\\frac{8}{100}$</li>\n      <li>The digit <strong>$0$</strong> is in the thousandths place: $\\frac{0}{1000}$</li>\n      <li>The digit <strong>$9$</strong> is in the ten-thousandths place: $\\frac{9}{10000}$</li>\n    </ul>\n    <p>Combining these, we get: $300 + 50 + 4 + \\frac{1}{10} + \\frac{8}{100} + \\frac{0}{1000} + \\frac{9}{10000}$</p>\n  </div>",
    "createdAt": "2026-05-17T12:13:26.495Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write $6.148$ as a fraction whose denominator is a power of $10$.",
    "options": [
      "\\frac{6148}{1000}",
      "\\frac{6148}{100}",
      "\\frac{6148}{10000}",
      "\\frac{6148}{10}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Count the number of decimal places in $6.148$. There are 3 digits after the decimal point ($1, 4, 8$).</p>\n    <p><strong>Step 2:</strong> A decimal with 3 decimal places has a denominator of $10^3 = 1000$ when written as a fraction.</p>\n    <p><strong>Step 3:</strong> Place the entire number (without the decimal point) in the numerator: $\\frac{6148}{1000}$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write $\\frac{69}{1000}$ as a decimal.",
    "options": [
      "0.069",
      "0.69",
      "0.0069",
      "6.9"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> The denominator is $1000$, which has 3 zeros.</p>\n    <p><strong>Step 2:</strong> Dividing by $1000$ shifts the decimal point of the numerator ($69.0$) 3 places to the left:</p>\n    <ul>\n      <li>Shift 1: $6.9$</li>\n      <li>Shift 2: $0.69$</li>\n      <li>Shift 3: $0.069$</li>\n    </ul>\n    <p>Therefore, $\\frac{69}{1000} = 0.069$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write down the place value of the digit $4$ in the decimal $54.73$.",
    "options": [
      "Units",
      "Tenths",
      "Hundredths",
      "Thousandths"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The digit 4 is directly to the left of the decimal point, representing the units (ones) place ($4 \\times 1$).</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write down the place value of the digit $4$ in the decimal $3.84$.",
    "options": [
      "Hundredths",
      "Tenths",
      "Units",
      "Thousandths"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The digit 4 is the second digit to the right of the decimal point, representing the hundredths place ($\\frac{4}{100}$).</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write down the place value of the digit $4$ in the decimal $0.41$.",
    "options": [
      "Tenths",
      "Hundredths",
      "Units",
      "Thousandths"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The digit 4 is the first digit to the right of the decimal point, representing the tenths place ($\\frac{4}{10}$).</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write down the place value of the digit $4$ in the decimal $47.09$.",
    "options": [
      "Tens",
      "Tenths",
      "Hundredths",
      "Units"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The digit 4 is in the tens place ($4 \\times 10 = 40$), representing four tens.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Write down the place value of the digit $4$ in the decimal $0.004$.",
    "options": [
      "Thousandths",
      "Tenths",
      "Hundredths",
      "Units"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The digit 4 is the third digit to the right of the decimal point, representing the thousandths place ($\\frac{4}{1000}$).</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Write down the place value of the digit $4$ in the decimal $67.951842$.",
    "options": [
      "Hundred-thousandths",
      "Tenths",
      "Hundredths",
      "Units"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Counting the places to the right of the decimal: tenths (9), hundredths (5), thousandths (1), ten-thousandths (8), hundred-thousandths (4). Thus, it represents $\\frac{4}{100000}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following decimals can be formed using the digits $1, 3, 5, 7$ and a decimal point exactly once?",
    "options": [
      "$13.57$",
      "$133.57$",
      "$1.35$",
      "$1.3577$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p>To form a valid decimal using the digits $1, 3, 5, 7$ and a decimal point exactly once, the number must contain exactly all four digits and one decimal point.</p>\n    <ul>\n      <li>$13.57$ uses $1, 3, 5, 7$ exactly once. (Valid!)</li>\n      <li>$133.57$ repeats the digit 3. (Invalid!)</li>\n      <li>$1.35$ is missing the digit 7. (Invalid!)</li>\n      <li>$1.3577$ repeats the digit 7. (Invalid!)</li>\n    </ul>\n  </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following is NOT a valid decimal that can be formed using the digits $2, 4, 6, 8$ and a decimal point exactly once?",
    "options": [
      "$2.46$",
      "$2.468$",
      "$246.8$",
      "$24.68$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p>A valid number must contain all four digits $2, 4, 6, 8$ exactly once along with the decimal point.</p>\n    <ul>\n      <li>$2.46$ is missing the digit 8, making it invalid. (Correct Answer)</li>\n      <li>$2.468$, $246.8$, and $24.68$ each contain exactly $2, 4, 6, 8$ once, which makes them valid.</li>\n    </ul>\n  </div>",
    "createdAt": "2026-05-17T12:13:26.496Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the whole number closest to the decimal $4.09$.",
    "options": [
      "4",
      "5",
      "3",
      "4.090"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since the tenths digit is 0 (which is less than 5), we round down to the nearest whole number, which is $4$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the whole number closest to the decimal $4.8$.",
    "options": [
      "5",
      "6",
      "4",
      "4.80"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since the tenths digit is 8 (which is 5 or greater), we round up to the nearest whole number, which is $5$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the whole number closest to the decimal $2.17984$.",
    "options": [
      "2",
      "3",
      "1",
      "2.179840"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since the tenths digit is 1 (less than 5), we round down to the nearest whole number, which is $2$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the whole number closest to the decimal $6.800002$.",
    "options": [
      "7",
      "8",
      "6",
      "6.8000020"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since the tenths digit is 8 (5 or greater), we round up to the nearest whole number, which is $7$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the whole number closest to the decimal $5.499$.",
    "options": [
      "5",
      "6",
      "4",
      "5.4990"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>To find the closest whole number, look at the tenths place: it is 4 (less than 5). Thus we round down to $5$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the whole number closest to the decimal $7.09999$.",
    "options": [
      "7",
      "8",
      "6",
      "7.099990"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Looking at the tenths place: it is 0 (less than 5). Thus we round down to $7$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $0.5$ or $0.42$?",
    "options": [
      "$0.5$",
      "$0.42$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place: 5 tenths is greater than 4 tenths. Thus $0.5 > 0.42$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $2.7$ or $2.83$?",
    "options": [
      "$2.83$",
      "$2.7$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place: 8 tenths is greater than 7 tenths. Thus $2.83 > 2.7$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $7.9$ or $7.09$?",
    "options": [
      "$7.9$",
      "$7.09$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place: 9 tenths is greater than 0 tenths. Thus $7.9 > 7.09$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $4.82$ or $4.083$?",
    "options": [
      "$4.82$",
      "$4.083$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place: 8 tenths is greater than 0 tenths. Thus $4.82 > 4.083$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $8.56$ or $8.5613$?",
    "options": [
      "$8.5613$",
      "$8.56$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $8.56 = 8.5600$, we compare the thousandths place: 1 thousandth is greater than 0. Thus $8.5613 > 8.56$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $6.002$ or $6.2$?",
    "options": [
      "$6.2$",
      "$6.002$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place: 2 tenths is greater than 0 tenths. Thus $6.2 > 6.002$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $9.88867$ or $9.453$?",
    "options": [
      "$9.88867$",
      "$9.453$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place: 8 tenths is greater than 4 tenths. Thus $9.88867 > 9.453$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $4.58$ or $4.4$?",
    "options": [
      "$4.58$",
      "$4.4$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place: 5 tenths is greater than 4 tenths. Thus $4.58 > 4.4$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $185.3468$ or $185.34$?",
    "options": [
      "$185.3468$",
      "$185.34$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $185.34 = 185.3400$, we compare thousandths place: 6 thousandths is greater than 0. Thus $185.3468 > 185.34$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $12.4$ or $1.24$?",
    "options": [
      "$12.4$",
      "$1.24$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare whole number parts: 12 is greater than 1. Thus $12.4 > 1.24$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $323.78658$ or $323.71189$?",
    "options": [
      "$323.78658$",
      "$323.71189$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place (both are 7), then hundredths place: 8 hundredths is greater than 1 hundredth. Thus $323.78658 > 323.71189$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Which of the following numbers is the larger one: $4.67$ or $4.59999$?",
    "options": [
      "$4.67$",
      "$4.59999$",
      "They are equal",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place: 6 tenths is greater than 5 tenths. Thus $4.67 > 4.59999$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Order these numbers from smallest to largest: $3.4, 0.3, 9.264, 8.3, 5.09$.",
    "options": [
      "$0.3, 3.4, 5.09, 8.3, 9.264$",
      "$0.3, 3.4, 8.3, 5.09, 9.264$",
      "$3.4, 0.3, 5.09, 8.3, 9.264$",
      "$0.3, 5.09, 3.4, 8.3, 9.264$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the whole numbers: 0 is smallest, then 3, then 5, then 8, then 9. This instantly gives us: $0.3 < 3.4 < 5.09 < 8.3 < 9.264$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Order these numbers from smallest to largest: $2.08, 2.84, 2.48, 2.8, 2.40$.",
    "options": [
      "$2.08, 2.40, 2.48, 2.8, 2.84$",
      "$2.08, 2.48, 2.40, 2.8, 2.84$",
      "$2.08, 2.40, 2.48, 2.84, 2.8$",
      "$2.40, 2.08, 2.48, 2.8, 2.84$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>All whole numbers are 2. Compare the decimal parts: 08 hundredths is smallest. Then 40 hundredths ($2.40$), then 48 hundredths ($2.48$), then 80 hundredths ($2.8$), then 84 hundredths ($2.84$).</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Order these numbers from smallest to largest: $6.000034, 6.340000, 6.99, 6.5208673, 6.0859$.",
    "options": [
      "$6.000034, 6.0859, 6.340000, 6.5208673, 6.99$",
      "$6.000034, 6.340000, 6.0859, 6.5208673, 6.99$",
      "$6.000034, 6.0859, 6.340000, 6.99, 6.5208673$",
      "$6.0859, 6.000034, 6.340000, 6.5208673, 6.99$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths: 6.0... are smallest. Comparing 6.000034 and 6.0859: 6.000034 has 0 hundredths, while 6.0859 has 8 hundredths. So $6.000034 < 6.0859$. Next is 6.34, then 6.52, then 6.99.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Order these numbers from smallest to largest: $5.55, 5.3, 5.8143, 5.777, 5.89463$.",
    "options": [
      "$5.3, 5.55, 5.777, 5.8143, 5.89463$",
      "$5.3, 5.55, 5.8143, 5.777, 5.89463$",
      "$5.55, 5.3, 5.777, 5.8143, 5.89463$",
      "$5.3, 5.55, 5.777, 5.89463, 5.8143$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare tenths place: 3 tenths ($5.3$) < 5 tenths ($5.55$) < 7 tenths ($5.777$) < 8 tenths. Compare 5.8143 and 5.89463: 1 hundredth is less than 9 hundredths. So $5.8143 < 5.89463$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.102534$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $6$",
      "Closer to $7$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.102534$: tenths digit is 1 (less than 5), so it is closer to 6.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.99$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $7$",
      "Closer to $6$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.99$: tenths digit is 9 (5 or greater), so it is closer to 7.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.6$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $7$",
      "Closer to $6$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.6$: tenths digit is 6 (5 or greater), so it is closer to 7.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.52$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $7$",
      "Closer to $6$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.52$: tenths digit is 5 (5 or greater), so it is closer to 7.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.01$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $6$",
      "Closer to $7$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.01$: tenths digit is 0 (less than 5), so it is closer to 6.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.09879562$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $6$",
      "Closer to $7$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.09879562$: tenths digit is 0 (less than 5), so it is closer to 6.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.49$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $6$",
      "Closer to $7$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.49$: tenths digit is 4 (less than 5), so it is closer to 6.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.00003$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $6$",
      "Closer to $7$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.00003$: tenths digit is 0 (less than 5), so it is closer to 6.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.499989$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $6$",
      "Closer to $7$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.499989$: tenths digit is 4 (less than 5), so it is closer to 6.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.49494$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $6$",
      "Closer to $7$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.49494$: tenths digit is 4 (less than 5), so it is closer to 6.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.83112$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $7$",
      "Closer to $6$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.83112$: tenths digit is 8 (5 or greater), so it is closer to 7.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "State whether the decimal $6.12109$ is closer to $6$ or closer to $7$.",
    "options": [
      "Closer to $6$",
      "Closer to $7$",
      "Exactly halfway between $6$ and $7$",
      "None of these"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Compare the tenths place of $6.12109$: tenths digit is 1 (less than 5), so it is closer to 6.</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $8$ tenths = ____ thousandths.",
    "options": [
      "$800$",
      "$8000$",
      "$80$",
      "$80000$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>8 tenths = 800 thousandths. (multiply by 100)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $8$ tenths = ____ hundredths.",
    "options": [
      "$80$",
      "$800$",
      "$8$",
      "$8000$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>8 tenths = 80 hundredths. (multiply by 10)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $8$ tenths = ____ units.",
    "options": [
      "$0.8$",
      "$8$",
      "$0.08$",
      "$80$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>8 tenths = 0.8 units. (divide by 10)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $8$ tenths = ____ tens.",
    "options": [
      "$0.08$",
      "$0.8$",
      "$0.008$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>8 tenths = 0.08 tens. (divide by 100)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $8$ tenths = ____ hundreds.",
    "options": [
      "$0.008$",
      "$0.08$",
      "$0.0008$",
      "$0.8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>8 tenths = 0.008 hundreds. (divide by 1000)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $8$ tenths = ____ thousands.",
    "options": [
      "$0.0008$",
      "$0.008$",
      "$0.00008$",
      "$0.08$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>8 tenths = 0.0008 thousands. (divide by 10000)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $45$ hundredths = ____ thousandths.",
    "options": [
      "$450$",
      "$4500$",
      "$45$",
      "$45000$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>45 hundredths = 450 thousandths. (multiply by 10)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $45$ hundredths = ____ tenths.",
    "options": [
      "$4.5$",
      "$45$",
      "$0.45$",
      "$450$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>45 hundredths = 4.5 tenths. (divide by 10)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $45$ hundredths = ____ units.",
    "options": [
      "$0.45$",
      "$4.5$",
      "$0.045$",
      "$45$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>45 hundredths = 0.45 units. (divide by 100)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $45$ hundredths = ____ tens.",
    "options": [
      "$0.045$",
      "$0.44999999999999996$",
      "$0.0045$",
      "$4.5$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>45 hundredths = 0.045 tens. (divide by 1000)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $45$ hundredths = ____ hundreds.",
    "options": [
      "$0.0045$",
      "$0.045$",
      "$0.00045$",
      "$0.44999999999999996$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>45 hundredths = 0.0045 hundreds. (divide by 10000)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $45$ hundredths = ____ thousands.",
    "options": [
      "$0.00045$",
      "$0.0045$",
      "$0.000044999999999999996$",
      "$0.045$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>45 hundredths = 0.00045 thousands. (divide by 100000)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $618$ thousandths = ____ hundredths.",
    "options": [
      "$61.8$",
      "$618$",
      "$6.18$",
      "$6180$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>618 thousandths = 61.8 hundredths. (divide by 10)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $618$ thousandths = ____ tenths.",
    "options": [
      "$6.18$",
      "$61.8$",
      "$0.618$",
      "$618$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>618 thousandths = 6.18 tenths. (divide by 100)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $618$ thousandths = ____ units.",
    "options": [
      "$0.618$",
      "$6.18$",
      "$0.0618$",
      "$61.8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>618 thousandths = 0.618 units. (divide by 1000)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $618$ thousandths = ____ tens.",
    "options": [
      "$0.0618$",
      "$0.618$",
      "$0.00618$",
      "$6.18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>618 thousandths = 0.0618 tens. (divide by 10000)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $618$ thousandths = ____ hundreds.",
    "options": [
      "$0.00618$",
      "$0.061799999999999994$",
      "$0.000618$",
      "$0.618$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>618 thousandths = 0.00618 hundreds. (divide by 100000)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  },
  {
    "chapterId": "y7-7",
    "chapterTitle": "Chapter 7: Decimals",
    "topicId": "y7-7a",
    "topicCode": "7A",
    "topicTitle": "Place value and comparison of decimals",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Complete the statement: $618$ thousandths = ____ thousands.",
    "options": [
      "$0.000618$",
      "$0.00618$",
      "$0.0000618$",
      "$0.061799999999999994$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>618 thousandths = 0.000618 thousands. (divide by 1000000)</p>\n    </div>",
    "createdAt": "2026-05-17T12:13:26.497Z"
  }
];

export const importYear7Ch7A = async (forceReset = false) => {
  console.log('[Ch7A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch7A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-7a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log('Deleted ' + existingSnap.size + ' existing questions.');
    }

    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-7a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch7A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch7A Year 7 Import] ERROR:', error);
    return 0;
  }
};
