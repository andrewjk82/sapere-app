import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Using the place values of the digits, write the decimal number $482.7306$ as a sum of hundreds, tens, units, tenths, hundredths, thousandths and ten-thousandths.",
    "options": [
      "$400 + 80 + 2 + \\frac{7}{10} + \\frac{3}{100} + \\frac{0}{1000} + \\frac{6}{10000}$",
      "$400 + 80 + 2 + \\frac{7}{100} + \\frac{3}{1000} + \\frac{6}{100000}$",
      "$4 + 8 + 2 + 0.7 + 0.03 + 0.006$",
      "$400 + 80 + 2 + \\frac{7}{10} + \\frac{3}{100} + \\frac{6}{1000}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>Let's break down the decimal number $482.7306$ into its place values:</p>\n    <ul>\n      <li>$4$ is in the hundreds place: $400$</li>\n      <li>$8$ is in the tens place: $80$</li>\n      <li>$2$ is in the units (ones) place: $2$</li>\n      <li>$7$ is in the tenths place: $\\frac{7}{10}$</li>\n      <li>$3$ is in the hundredths place: $\\frac{3}{100}$</li>\n      <li>$0$ is in the thousandths place: $\\frac{0}{1000}$</li>\n      <li>$6$ is in the ten-thousandths place: $\\frac{6}{10000}$</li>\n    </ul>\n    <p>Adding these together gives: $400 + 80 + 2 + \\frac{7}{10} + \\frac{3}{100} + \\frac{0}{1000} + \\frac{6}{10000}$.</p>\n  </div>",
    "createdAt": "2026-05-17T02:13:53.584Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write $3.719$ as a fraction whose denominator is a power of 10.",
    "options": [
      "$\\frac{3719}{1000}$",
      "$\\frac{3719}{100}$",
      "$\\frac{3719}{10000}$",
      "$3\\frac{719}{100}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>The decimal $3.719$ has three decimal places (tenths, hundredths, thousandths).</p>\n    <p>To convert this into a fraction, we write the entire number without the decimal point as the numerator, and $10^3$ ($1000$) as the denominator:</p>\n    <p>$$3.719 = \\frac{3719}{1000}$$</p>\n  </div>",
    "createdAt": "2026-05-17T02:13:53.585Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": false,
    "isActive": true,
    "question": "Write $\\frac{63}{1000}$ as a decimal.",
    "options": [],
    "answer": "0.063",
    "solution": "<div style=\"text-align: left;\">\n    <p>Dividing by $1000$ shifts the decimal point of $63.0$ three places to the left:</p>\n    <ul>\n      <li>1 shift left: $6.3$</li>\n      <li>2 shifts left: $0.63$</li>\n      <li>3 shifts left: $0.063$</li>\n    </ul>\n    <p>Therefore, $\\frac{63}{1000} = 0.063$.</p>\n  </div>",
    "createdAt": "2026-05-17T02:13:53.585Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write down the place value of the digit $7$ in the decimal number $47.39$.",
    "options": [
      "$tens$",
      "$units$",
      "$tenths$",
      "$hundredths$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's map out the positions in $47.39$ relative to the decimal point:</p>\n      <p>In $47.39$, the digit $7$ sits in the <strong>units</strong> column.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.585Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write down the place value of the digit $8$ in the decimal number $5.68$.",
    "options": [
      "$tenths$",
      "$hundredths$",
      "$thousandths$",
      "$units$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's map out the positions in $5.68$ relative to the decimal point:</p>\n      <p>In $5.68$, the digit $8$ sits in the <strong>hundredths</strong> column.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.585Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write down the place value of the digit $4$ in the decimal number $0.43$.",
    "options": [
      "$units$",
      "$tenths$",
      "$hundredths$",
      "$thousandths$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's map out the positions in $0.43$ relative to the decimal point:</p>\n      <p>In $0.43$, the digit $4$ sits in the <strong>tenths</strong> column.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.585Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write down the place value of the digit $9$ in the decimal number $91.82$.",
    "options": [
      "$hundreds$",
      "$tens$",
      "$units$",
      "$tenths$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's map out the positions in $91.82$ relative to the decimal point:</p>\n      <p>In $91.82$, the digit $9$ sits in the <strong>tens</strong> column.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.585Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write down the place value of the digit $5$ in the decimal number $0.005$.",
    "options": [
      "$tenths$",
      "$hundredths$",
      "$thousandths$",
      "$ten-thousandths$"
    ],
    "answer": 2,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's map out the positions in $0.005$ relative to the decimal point:</p>\n      <p>In $0.005$, the digit $5$ sits in the <strong>thousandths</strong> column.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.585Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Write down the place value of the digit $3$ in the decimal number $12.45638$.",
    "options": [
      "$thousandths$",
      "$ten-thousandths$",
      "$hundred-thousandths$",
      "$millionths$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's map out the positions in $12.45638$ relative to the decimal point:</p>\n      <p>In $12.45638$, the digit $3$ sits in the <strong>ten-thousandths</strong> column.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.585Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "What is the largest possible decimal number less than 100 that can be formed using each of the digits $2, 4, 6, 8$ and a decimal point exactly once?",
    "options": [
      "$86.42$",
      "$864.2$",
      "$8.642$",
      "$68.42$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p>To make the largest possible decimal number <strong>less than 100</strong>, we must maximize the place values starting from the tens place (since it must be less than 100, we can have at most 2 digits before the decimal point):</p>\n    <p>1. Arrange digits in descending order to place the largest digit in the highest place value: $8, 6, 4, 2$.</p>\n    <p>2. Put the decimal point after the tens digit to make it less than 100: $86.42$.</p>\n  </div>",
    "createdAt": "2026-05-17T02:13:53.585Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": false,
    "isActive": true,
    "question": "Find the whole number closest to the decimal $4.07$.",
    "options": [],
    "answer": "4",
    "solution": "<div style=\"text-align: left;\">\n      <p>To find the closest whole number, look at the tenths digit (the first digit to the right of the decimal point):</p>\n      <p>In $4.07$, the tenths value indicates that $0.07$ is less than $0.5$, so we round down to $4$.</p>\n      <p>Therefore, the closest whole number is <strong>$4$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": false,
    "isActive": true,
    "question": "Find the whole number closest to the decimal $5.8$.",
    "options": [],
    "answer": "6",
    "solution": "<div style=\"text-align: left;\">\n      <p>To find the closest whole number, look at the tenths digit (the first digit to the right of the decimal point):</p>\n      <p>In $5.8$, the tenths value indicates that $0.8$ is greater than $0.5$, so we round up to $6$.</p>\n      <p>Therefore, the closest whole number is <strong>$6$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": false,
    "isActive": true,
    "question": "Find the whole number closest to the decimal $2.31758$.",
    "options": [],
    "answer": "2",
    "solution": "<div style=\"text-align: left;\">\n      <p>To find the closest whole number, look at the tenths digit (the first digit to the right of the decimal point):</p>\n      <p>In $2.31758$, the tenths value indicates that $0.317...$ is less than $0.5$, so we round down to $2$.</p>\n      <p>Therefore, the closest whole number is <strong>$2$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": false,
    "isActive": true,
    "question": "Find the whole number closest to the decimal $6.800002$.",
    "options": [],
    "answer": "7",
    "solution": "<div style=\"text-align: left;\">\n      <p>To find the closest whole number, look at the tenths digit (the first digit to the right of the decimal point):</p>\n      <p>In $6.800002$, the tenths value indicates that $0.800...$ is greater than $0.5$, so we round up to $7$.</p>\n      <p>Therefore, the closest whole number is <strong>$7$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": false,
    "isActive": true,
    "question": "Find the whole number closest to the decimal $5.498$.",
    "options": [],
    "answer": "5",
    "solution": "<div style=\"text-align: left;\">\n      <p>To find the closest whole number, look at the tenths digit (the first digit to the right of the decimal point):</p>\n      <p>In $5.498$, the tenths value indicates that $0.498$ is less than $0.5$, so we round down to $5$.</p>\n      <p>Therefore, the closest whole number is <strong>$5$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "easy",
    "isManual": false,
    "isActive": true,
    "question": "Find the whole number closest to the decimal $8.08888$.",
    "options": [],
    "answer": "8",
    "solution": "<div style=\"text-align: left;\">\n      <p>To find the closest whole number, look at the tenths digit (the first digit to the right of the decimal point):</p>\n      <p>In $8.08888$, the tenths value indicates that $0.088...$ is less than $0.5$, so we round down to $8$.</p>\n      <p>Therefore, the closest whole number is <strong>$8$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $0.6$ or $0.47$.",
    "options": [
      "$0.6$",
      "$0.47$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $0.6$ and $0.47$, we find that $0.6$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $2.7$ or $2.84$.",
    "options": [
      "$2.7$",
      "$2.84$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $2.7$ and $2.84$, we find that $2.84$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $7.9$ or $7.09$.",
    "options": [
      "$7.9$",
      "$7.09$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $7.9$ and $7.09$, we find that $7.9$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $4.72$ or $4.073$.",
    "options": [
      "$4.72$",
      "$4.073$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $4.72$ and $4.073$, we find that $4.72$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $6.25$ or $6.2519$.",
    "options": [
      "$6.25$",
      "$6.2519$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $6.25$ and $6.2519$, we find that $6.2519$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $3.002$ or $3.2$.",
    "options": [
      "$3.002$",
      "$3.2$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $3.002$ and $3.2$, we find that $3.2$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $9.99967$ or $9.453$.",
    "options": [
      "$9.99967$",
      "$9.453$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $9.99967$ and $9.453$, we find that $9.99967$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $4.58$ or $4.3$.",
    "options": [
      "$4.58$",
      "$4.3$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $4.58$ and $4.3$, we find that $4.58$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $186.3472$ or $186.34$.",
    "options": [
      "$186.3472$",
      "$186.34$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $186.3472$ and $186.34$, we find that $186.3472$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $12.4$ or $1.24$.",
    "options": [
      "$12.4$",
      "$1.24$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $12.4$ and $1.24$, we find that $12.4$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $325.78958$ or $325.71189$.",
    "options": [
      "$325.78958$",
      "$325.71189$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $325.78958$ and $325.71189$, we find that $325.78958$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Identify the larger number between these two values: $4.67$ or $4.59999$.",
    "options": [
      "$4.67$",
      "$4.59999$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Compare the numbers place value by place value from left to right:</p>\n      <ul>\n        <li>First compare the whole number part.</li>\n        <li>If they are the same, compare the tenths, then hundredths, and so on.</li>\n      </ul>\n      <p>Comparing $4.67$ and $4.59999$, we find that $4.67$ is larger.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists correctly orders these numbers from smallest to largest: $3.4, 0.3, 9.264, 8.3, 5.09$?",
    "options": [
      "$0.3, 3.4, 5.09, 8.3, 9.264$",
      "$9.264, 8.3, 5.09, 3.4, 0.3$",
      "$3.4, 0.3, 8.3, 5.09, 9.264$",
      "$0.3, 5.09, 3.4, 8.3, 9.264$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's line up the decimals by their place value to compare them:</p>\n      <ol>\n        <li>$0.3$</li><li>$3.4$</li><li>$5.09$</li><li>$8.3$</li><li>$9.264$</li>\n      </ol>\n      <p>Ordering them from smallest to largest gives: <strong>$0.3, 3.4, 5.09, 8.3, 9.264$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists correctly orders these numbers from smallest to largest: $2.08, 2.82, 2.28, 2.8, 2.20$?",
    "options": [
      "$2.08, 2.20, 2.28, 2.8, 2.82$",
      "$2.82, 2.8, 2.28, 2.20, 2.08$",
      "$2.20, 2.08, 2.8, 2.28, 2.82$",
      "$2.08, 2.28, 2.20, 2.8, 2.82$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's line up the decimals by their place value to compare them:</p>\n      <ol>\n        <li>$2.08$</li><li>$2.20$</li><li>$2.28$</li><li>$2.8$</li><li>$2.82$</li>\n      </ol>\n      <p>Ordering them from smallest to largest gives: <strong>$2.08, 2.20, 2.28, 2.8, 2.82$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists correctly orders these numbers from smallest to largest: $8.000034, 8.340000, 8.99, 8.5208643, 8.0859$?",
    "options": [
      "$8.000034, 8.0859, 8.340000, 8.5208643, 8.99$",
      "$8.99, 8.5208643, 8.340000, 8.0859, 8.000034$",
      "$8.0859, 8.000034, 8.5208643, 8.340000, 8.99$",
      "$8.000034, 8.340000, 8.0859, 8.5208643, 8.99$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's line up the decimals by their place value to compare them:</p>\n      <ol>\n        <li>$8.000034$</li><li>$8.0859$</li><li>$8.340000$</li><li>$8.5208643$</li><li>$8.99$</li>\n      </ol>\n      <p>Ordering them from smallest to largest gives: <strong>$8.000034, 8.0859, 8.340000, 8.5208643, 8.99$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isManual": true,
    "isActive": true,
    "question": "Which of the following lists correctly orders these numbers from smallest to largest: $5.55, 5.3, 5.8345, 5.777, 5.89685$?",
    "options": [
      "$5.3, 5.55, 5.777, 5.8345, 5.89685$",
      "$5.89685, 5.8345, 5.777, 5.55, 5.3$",
      "$5.55, 5.3, 5.8345, 5.777, 5.89685$",
      "$5.3, 5.777, 5.55, 5.8345, 5.89685$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's line up the decimals by their place value to compare them:</p>\n      <ol>\n        <li>$5.3$</li><li>$5.55$</li><li>$5.777$</li><li>$5.8345$</li><li>$5.89685$</li>\n      </ol>\n      <p>Ordering them from smallest to largest gives: <strong>$5.3, 5.55, 5.777, 5.8345, 5.89685$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.103645$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.103645$ is less than $7.5$, it is closer to <strong>$7$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.98$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.98$ is greater than $7.5$, it is closer to <strong>$8$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.7$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.7$ is greater than $7.5$, it is closer to <strong>$8$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.53$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.53$ is greater than $7.5$, it is closer to <strong>$8$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.02$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.02$ is less than $7.5$, it is closer to <strong>$7$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.08968453$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.08968453$ is less than $7.5$, it is closer to <strong>$7$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.48$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.48$ is less than $7.5$, it is closer to <strong>$7$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.00004$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.00004$ is less than $7.5$, it is closer to <strong>$7$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.499978$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.499978$ is less than $7.5$, it is closer to <strong>$7$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.48484$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.48484$ is less than $7.5$, it is closer to <strong>$7$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.84223$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.84223$ is greater than $7.5$, it is closer to <strong>$8$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isManual": true,
    "isActive": true,
    "question": "Is the number $7.13108$ closer to $7$ or closer to $8$?",
    "options": [
      "$7$",
      "$8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p>Find the midpoint between $7$ and $8$, which is $7.5$.</p>\n      <ul>\n        <li>If the number is less than $7.5$, it is closer to $7$.</li>\n        <li>If the number is greater than $7.5$, it is closer to $8$.</li>\n      </ul>\n      <p>Since $7.13108$ is less than $7.5$, it is closer to <strong>$7$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $8 tenths = \\dots thousandths$.",
    "options": [],
    "answer": "800",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the place values step-by-step:</p>\n      <p>8 tenths $= \\frac{8}{10} = \\frac{800}{1000} = 800$ thousandths.</p>\n      <p>Therefore, the blank should be filled with <strong>$800$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $5 tenths = \\dots hundredths$.",
    "options": [],
    "answer": "50",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the place values step-by-step:</p>\n      <p>5 tenths $= \\frac{5}{10} = \\frac{50}{100} = 50$ hundredths.</p>\n      <p>Therefore, the blank should be filled with <strong>$50$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $9 tenths = \\dots units$.",
    "options": [],
    "answer": "0.9",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the place values step-by-step:</p>\n      <p>9 tenths $= \\frac{9}{10} = 0.9$ units.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.9$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $8 tenths = \\dots tens$.",
    "options": [],
    "answer": "0.08",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the place values step-by-step:</p>\n      <p>8 tenths $= \\frac{8}{10} = 0.8$ units $= \\frac{0.8}{10} = 0.08$ tens.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.08$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $7 tenths = \\dots hundreds$.",
    "options": [],
    "answer": "0.007",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the place values step-by-step:</p>\n      <p>7 tenths $= \\frac{7}{10} = 0.7$ units $= \\frac{0.7}{100} = 0.007$ hundreds.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.007$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $9 tenths = \\dots thousands$.",
    "options": [],
    "answer": "0.0009",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the place values step-by-step:</p>\n      <p>9 tenths $= \\frac{9}{10} = 0.7$ units $= \\frac{0.9}{1000} = 0.0009$ thousands.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.0009$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $74 hundredths = \\dots thousandths$.",
    "options": [],
    "answer": "740",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the hundredths place to the target place value:</p>\n      <p>74 hundredths $= \\frac{74}{100} = \\frac{740}{1000} = 740$ thousandths.</p>\n      <p>Therefore, the blank should be filled with <strong>$740$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $74 hundredths = \\dots tenths$.",
    "options": [],
    "answer": "7.4",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the hundredths place to the target place value:</p>\n      <p>74 hundredths $= \\frac{74}{100} = \\frac{7.4}{10} = 7.4$ tenths.</p>\n      <p>Therefore, the blank should be filled with <strong>$7.4$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $68 hundredths = \\dots units$.",
    "options": [],
    "answer": "0.68",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the hundredths place to the target place value:</p>\n      <p>68 hundredths $= \\frac{68}{100} = 0.68$ units.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.68$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $53 hundredths = \\dots tens$.",
    "options": [],
    "answer": "0.053",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the hundredths place to the target place value:</p>\n      <p>53 hundredths $= \\frac{53}{100} = 0.53$ units $= \\frac{0.53}{10} = 0.053$ tens.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.053$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $42 hundredths = \\dots hundreds$.",
    "options": [],
    "answer": "0.0042",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the hundredths place to the target place value:</p>\n      <p>42 hundredths $= \\frac{42}{100} = 0.42$ units $= \\frac{0.42}{100} = 0.0042$ hundreds.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.0042$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "medium",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $35 hundredths = \\dots thousands$.",
    "options": [],
    "answer": "0.00035",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the hundredths place to the target place value:</p>\n      <p>35 hundredths $= \\frac{35}{100} = 0.35$ units $= \\frac{0.35}{1000} = 0.00035$ thousands.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.00035$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $815 thousandths = \\dots hundredths$.",
    "options": [],
    "answer": "81.5",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the thousandths place to the target place value:</p>\n      <p>815 thousandths $= \\frac{815}{1000} = \\frac{81.5}{100} = 81.5$ hundredths.</p>\n      <p>Therefore, the blank should be filled with <strong>$81.5$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $815 thousandths = \\dots tenths$.",
    "options": [],
    "answer": "8.15",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the thousandths place to the target place value:</p>\n      <p>815 thousandths $= \\frac{815}{1000} = \\frac{8.15}{10} = 8.15$ tenths.</p>\n      <p>Therefore, the blank should be filled with <strong>$8.15$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $642 thousandths = \\dots units$.",
    "options": [],
    "answer": "0.642",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the thousandths place to the target place value:</p>\n      <p>642 thousandths $= \\frac{642}{1000} = 0.642$ units.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.642$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $519 thousandths = \\dots tens$.",
    "options": [],
    "answer": "0.0519",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the thousandths place to the target place value:</p>\n      <p>519 thousandths $= \\frac{519}{1000} = 0.519$ units $= \\frac{0.519}{10} = 0.0519$ tens.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.0519$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $428 thousandths = \\dots hundreds$.",
    "options": [],
    "answer": "0.00428",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the thousandths place to the target place value:</p>\n      <p>428 thousandths $= \\frac{428}{1000} = 0.428$ units $= \\frac{0.428}{100} = 0.00428$ hundreds.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.00428$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  },
  {
    "chapterId": "y7-8",
    "topicId": "y7-8a",
    "topicCode": "8A",
    "topicTitle": "Decimals and Place Value",
    "year": "Year 7",
    "type": "short_answer",
    "difficulty": "hard",
    "isManual": false,
    "isActive": true,
    "question": "Complete the statement to make it mathematically true: $317 thousandths = \\dots thousands$.",
    "options": [],
    "answer": "0.000317",
    "solution": "<div style=\"text-align: left;\">\n      <p>Let's convert the thousandths place to the target place value:</p>\n      <p>317 thousandths $= \\frac{317}{1000} = 0.317$ units $= \\frac{0.317}{1000} = 0.000317$ thousands.</p>\n      <p>Therefore, the blank should be filled with <strong>$0.000317$</strong>.</p>\n    </div>",
    "createdAt": "2026-05-17T02:13:53.586Z"
  }
];

export const importYear7Ch8A = async (forceReset = false) => {
  console.log('[Ch8A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch8A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-8a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log(`Deleted ${existingSnap.size} existing questions.`);
    }

    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-8a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log(`[Ch8A Year 7 Import] SUCCESS! ${importedCount} new questions imported.`);
    return importedCount;
  } catch (error) {
    console.error('[Ch8A Year 7 Import] ERROR:', error);
    return 0;
  }
};
