import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "List the integers that are less than $4$ and greater than $-4$.",
    "options": [
      "$-3, -2, -1, 0, 1, 2, 3$",
      "$-4, -3, -2, -1, 0, 1, 2, 3, 4$",
      "$-3, -2, -1, 1, 2, 3$",
      "$-3, -2, -1, 0, 1, 2$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Understand the inequality range. We are looking for integers $x$ such that:<br>\n      $-4 < x < 4$\n    </p>\n    <p><strong>Step 2:</strong> List all whole numbers strictly between $-4$ and $4$:</p>\n    <ul>\n      <li>Integers greater than $-4$: $-3, -2, -1, 0, 1, 2, 3...$</li>\n      <li>Integers less than $4$: $...0, 1, 2, 3$</li>\n    </ul>\n    <p><strong>Step 3:</strong> Combine these lists to get: $-3, -2, -1, 0, 1, 2, 3$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.979Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "List the integers that are greater than $-7$ and less than $-2$.",
    "options": [
      "$-6, -5, -4, -3$",
      "$-7, -6, -5, -4, -3, -2$",
      "$-6, -5, -4$",
      "$-5, -4, -3$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Write the condition as an inequality:<br>\n      $-7 < x < -2$\n    </p>\n    <p><strong>Step 2:</strong> List the whole numbers strictly between $-7$ and $-2$ on the number line:</p>\n    <ul>\n      <li>Integers greater than $-7$ are: $-6, -5, -4, -3...$</li>\n      <li>Integers less than $-2$ are: $... -5, -4, -3$</li>\n    </ul>\n    <p><strong>Step 3:</strong> The matching integers are: $-6, -5, -4, -3$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "List the integers that are less than $-2$ and greater than $-8$.",
    "options": [
      "$-7, -6, -5, -4, -3$",
      "$-8, -7, -6, -5, -4, -3, -2$",
      "$-7, -6, -5, -4$",
      "$-6, -5, -4, -3$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Write the condition as a compound inequality:<br>\n      $-8 < x < -2$\n    </p>\n    <p><strong>Step 2:</strong> Identify the whole numbers strictly between $-8$ and $-2$:</p>\n    <ul>\n      <li>Moving right from $-8$: $-7, -6, -5, -4, -3$</li>\n      <li>We stop before reaching $-2$.</li>\n    </ul>\n    <p><strong>Step 3:</strong> The integers are $-7, -6, -5, -4, -3$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "List the integers that are greater than $-156$ and less than $-149$.",
    "options": [
      "$-155, -154, -155, -152, -151, -150$",
      "$-155, -154, -153, -152, -151, -150$",
      "$-156, -155, -154, -153, -152, -151, -150, -149$",
      "$-154, -153, -152, -151, -150$"
    ],
    "answer": 1,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> The inequality is:<br>\n      $-156 < x < -149$\n    </p>\n    <p><strong>Step 2:</strong> List all integers starting from $-155$ and going up to $-150$:<br>\n      $-155, -154, -153, -152, -151, -150$.\n    </p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Arrange the following integers in increasing order (from smallest to largest):<br>$-15, 15, 0, 150, -150, -8, -1500, 7$.",
    "options": [
      "$-1500, -150, -15, -8, 0, 7, 15, 150$",
      "$-1500, -150, -8, -15, 0, 7, 15, 150$",
      "$-15, -150, -1500, -8, 0, 7, 15, 150$",
      "$-1500, -150, -15, -8, 0, 15, 7, 150$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Separate the negative integers, zero, and positive integers:</p>\n    <ul>\n      <li>Negative integers: $-15, -150, -8, -1500$</li>\n      <li>Zero: $0$</li>\n      <li>Positive integers: $15, 150, 7$</li>\n    </ul>\n    <p><strong>Step 2:</strong> Sort the negative numbers. The further to the left on a number line, the smaller the number:<br>\n      $-1500 < -150 < -15 < -8$\n    </p>\n    <p><strong>Step 3:</strong> Sort the positive numbers:<br>\n      $7 < 15 < 150$\n    </p>\n    <p><strong>Step 4:</strong> Combine all parts in order: <br>\n      $-1500, -150, -15, -8, 0, 7, 15, 150$.\n    </p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Arrange the following integers in decreasing order (from largest to smallest):<br>$-40, 50, -50, -600, -41, 35, -35, 60$.",
    "options": [
      "$60, 50, 35, -35, -40, -41, -50, -600$",
      "$60, 50, 35, -35, -41, -40, -50, -600$",
      "$60, 50, 35, -600, -50, -41, -40, -35$",
      "$-600, -50, -41, -40, -35, 35, 50, 60$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Group into positive and negative integers:</p>\n    <ul>\n      <li>Positive integers: $60, 50, 35$</li>\n      <li>Negative integers: $-40, -50, -600, -41, -35$</li>\n    </ul>\n    <p><strong>Step 2:</strong> Sort the positive integers from largest to smallest:<br>\n      $60, 50, 35$\n    </p>\n    <p><strong>Step 3:</strong> Sort the negative integers from largest (closest to 0) to smallest:<br>\n      $-35, -40, -41, -50, -600$\n    </p>\n    <p><strong>Step 4:</strong> Combine the sorted lists:<br>\n      $60, 50, 35, -35, -40, -41, -50, -600$.\n    </p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Identify which number line correctly plots the numbers $-3$, $-5$, $-7$ and $-9$.",
    "options": [
      "Option A:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"44\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"72\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"128\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option B:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"58\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"128\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option C:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"58\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"114\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option D:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"212\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"240\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"268\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"296\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Locate the position of each number on the number line starting from $0$ and moving left:</p>\n    <ul>\n      <li>$-3$ is $3$ units to the left of $0$.</li>\n      <li>$-5$ is $5$ units to the left of $0$.</li>\n      <li>$-7$ is $7$ units to the left of $0$.</li>\n      <li>$-9$ is $9$ units to the left of $0$.</li>\n    </ul>\n    <p><strong>Step 2:</strong> Option A has red markers plotted exactly at $-3, -5, -7, -9$, which is correct.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Identify which number line correctly plots the numbers $-2$, $-4$, $-6$ and $-8$.",
    "options": [
      "Option A:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"58\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"114\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option B:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"72\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"128\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option C:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"44\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option D:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"198\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"226\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"254\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"282\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Check each number's position to the left of $0$:</p>\n    <ul>\n      <li>$-2$: $2$ units left</li>\n      <li>$-4$: $4$ units left</li>\n      <li>$-6$: $6$ units left</li>\n      <li>$-8$: $8$ units left</li>\n    </ul>\n    <p><strong>Step 2:</strong> Option A correctly highlights these even negative integers.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which number line shows all integers that are less than $0$ and greater than $-6$?",
    "options": [
      "Option A:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"100\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"114\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"128\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option B:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"86\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"114\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"128\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"170\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option C:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"100\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"114\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"128\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option D:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"184\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"198\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"212\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"226\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"240\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> The range is: $-6 < x < 0$.</p>\n    <p><strong>Step 2:</strong> The integers strictly between $-6$ and $0$ are: $-5, -4, -3, -2, -1$.</p>\n    <p><strong>Step 3:</strong> Look for the number line that has markers at $-5, -4, -3, -2, -1$. This is Option A.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which number line shows all integers that are less than $4$ and greater than $-4$?",
    "options": [
      "Option A:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"128\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"170\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"184\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"198\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"212\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option B:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"114\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"128\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"170\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"184\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"198\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"212\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"226\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option C:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"128\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"184\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"198\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"212\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>",
      "Option D:<br><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Main line -->\n    <line x1=\"20\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <!-- Left Arrow -->\n    <path d=\"M 20 45 L 28 41 L 28 49 Z\" fill=\"#1e293b\"/>\n    <!-- Right Arrow -->\n    <path d=\"M 320 45 L 312 41 L 312 49 Z\" fill=\"#1e293b\"/>\n    <line x1=\"30\" y1=\"40\" x2=\"30\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"30\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-10</text><line x1=\"44\" y1=\"40\" x2=\"44\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"58\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-8</text><line x1=\"72\" y1=\"40\" x2=\"72\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"86\" y1=\"40\" x2=\"86\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"86\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"114\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-4</text><line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"142\" y1=\"40\" x2=\"142\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"142\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">-2</text><line x1=\"156\" y1=\"40\" x2=\"156\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">0</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"198\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">2</text><line x1=\"212\" y1=\"40\" x2=\"212\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"226\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"254\" y1=\"40\" x2=\"254\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"254\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">6</text><line x1=\"268\" y1=\"40\" x2=\"268\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"282\" y1=\"40\" x2=\"282\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"282\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">8</text><line x1=\"296\" y1=\"40\" x2=\"296\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"65\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"10\" font-weight=\"600\" font-family=\"'Outfit'\">10</text>\n    <circle cx=\"142\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"170\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"184\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><circle cx=\"198\" cy=\"45\" r=\"5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n  </svg>"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> We are looking for integers satisfying: $-4 < x < 4$.</p>\n    <p><strong>Step 2:</strong> This includes: $-3, -2, -1, 0, 1, 2, 3$.</p>\n    <p><strong>Step 3:</strong> Option A has dots on all these integers, including zero. Option C is incorrect because it misses zero.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "The sequence $-18, -16, -14, \\dots$ is 'going up by twos'. Find the next three terms.",
    "options": [
      "$-12, -10, -8$",
      "$-15, -16, -17$",
      "$-12, -10, -9$",
      "$-13, -11, -9$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Identify the pattern. Each term is found by adding $2$ to the previous term:<br>\n      $-18 + 2 = -16$<br>\n      $-16 + 2 = -14$\n    </p>\n    <p><strong>Step 2:</strong> Add $2$ to the last known term ($-14$) to get the next term:<br>\n      $-14 + 2 = -12$\n    </p>\n    <p><strong>Step 3:</strong> Repeat for the next two terms:<br>\n      $-12 + 2 = -10$<br>\n      $-10 + 2 = -8$\n    </p>\n    <p>The next three terms are: $-12, -10, -8$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "The sequence $5, 2, -1, \\dots$ is 'going down by threes'. Find the next three terms.",
    "options": [
      "$-4, -7, -10$",
      "$-3, -5, -7$",
      "$-2, -5, -8$",
      "$-4, -6, -8$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Identify the pattern. Subtract $3$ from each term to get the next:<br>\n      $5 - 3 = 2$<br>\n      $2 - 3 = -1$\n    </p>\n    <p><strong>Step 2:</strong> Continue the pattern starting from $-1$:</p>\n    <ul>\n      <li>$-1 - 3 = -4$</li>\n      <li>$-4 - 3 = -7$</li>\n      <li>$-7 - 3 = -10$</li>\n    </ul>\n    <p>The next three terms are: $-4, -7, -10$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "The sequence $-60, -55, -50, \\dots$ is 'going up by fives'. Find the next three terms.",
    "options": [
      "$-45, -40, -35$",
      "$-45, -35, -25$",
      "$-55, -60, -65$",
      "$-40, -30, -20$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n    <p><strong>Step-by-step breakdown:</strong></p>\n    <p><strong>Step 1:</strong> Add $5$ to each term:<br>\n      $-60 + 5 = -55$<br>\n      $-55 + 5 = -50$\n    </p>\n    <p><strong>Step 2:</strong> Calculate the next three terms starting from $-50$:</p>\n    <ul>\n      <li>$-50 + 5 = -45$</li>\n      <li>$-45 + 5 = -40$</li>\n      <li>$-40 + 5 = -35$</li>\n    </ul>\n    <p>The next three terms are: $-45, -40, -35$.</p>\n  </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the opposite of the integer $8$.",
    "options": [
      "$-8$",
      "$8$",
      "$0$",
      "$-80$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The opposite of an integer is its negative, which lies on the exact opposite side of $0$ on the number line at the same distance.</p>\n      <p>Algebraically, the opposite of $a$ is $-a$.</p>\n      <p>Therefore, the opposite of $8$ is: <br>\n        $-(8) = -8$.\n      </p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the opposite of the integer $-6$.",
    "options": [
      "$6$",
      "$-6$",
      "$0$",
      "$-60$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The opposite of an integer is its negative, which lies on the exact opposite side of $0$ on the number line at the same distance.</p>\n      <p>Algebraically, the opposite of $a$ is $-a$.</p>\n      <p>Therefore, the opposite of $-6$ is: <br>\n        $-(-6) = 6$.\n      </p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the opposite of the integer $-15$.",
    "options": [
      "$15$",
      "$-15$",
      "$0$",
      "$-150$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The opposite of an integer is its negative, which lies on the exact opposite side of $0$ on the number line at the same distance.</p>\n      <p>Algebraically, the opposite of $a$ is $-a$.</p>\n      <p>Therefore, the opposite of $-15$ is: <br>\n        $-(-15) = 15$.\n      </p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the opposite of the integer $-19$.",
    "options": [
      "$19$",
      "$-19$",
      "$0$",
      "$-190$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The opposite of an integer is its negative, which lies on the exact opposite side of $0$ on the number line at the same distance.</p>\n      <p>Algebraically, the opposite of $a$ is $-a$.</p>\n      <p>Therefore, the opposite of $-19$ is: <br>\n        $-(-19) = 19$.\n      </p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the opposite of the integer $11$.",
    "options": [
      "$-11$",
      "$11$",
      "$0$",
      "$-110$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The opposite of an integer is its negative, which lies on the exact opposite side of $0$ on the number line at the same distance.</p>\n      <p>Algebraically, the opposite of $a$ is $-a$.</p>\n      <p>Therefore, the opposite of $11$ is: <br>\n        $-(11) = -11$.\n      </p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the opposite of the integer $-14$.",
    "options": [
      "$14$",
      "$-14$",
      "$0$",
      "$-140$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The opposite of an integer is its negative, which lies on the exact opposite side of $0$ on the number line at the same distance.</p>\n      <p>Algebraically, the opposite of $a$ is $-a$.</p>\n      <p>Therefore, the opposite of $-14$ is: <br>\n        $-(-14) = 14$.\n      </p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the opposite of the integer $-9$.",
    "options": [
      "$9$",
      "$-9$",
      "$0$",
      "$-90$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The opposite of an integer is its negative, which lies on the exact opposite side of $0$ on the number line at the same distance.</p>\n      <p>Algebraically, the opposite of $a$ is $-a$.</p>\n      <p>Therefore, the opposite of $-9$ is: <br>\n        $-(-9) = 9$.\n      </p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Find the opposite of the integer $-5$.",
    "options": [
      "$5$",
      "$-5$",
      "$0$",
      "$-50$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The opposite of an integer is its negative, which lies on the exact opposite side of $0$ on the number line at the same distance.</p>\n      <p>Algebraically, the opposite of $a$ is $-a$.</p>\n      <p>Therefore, the opposite of $-5$ is: <br>\n        $-(-5) = 5$.\n      </p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Simplify the expression: $-(-5)$.",
    "options": [
      "$5$",
      "$-5$",
      "$0$",
      "$10$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The negative of a negative integer is a positive integer: $-(-a) = a$. Therefore, $-(-5) = 5$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Simplify the expression: $-(-9)$.",
    "options": [
      "$9$",
      "$-9$",
      "$0$",
      "$18$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>$-(-a) = a$. Therefore, $-(-9) = 9$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Simplify the expression: $-(-35)$.",
    "options": [
      "$35$",
      "$-35$",
      "$0$",
      "$70$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>$-(-a) = a$. Therefore, $-(-35) = 35$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Simplify the expression: $-(-(-15))$.",
    "options": [
      "$-15$",
      "$15$",
      "$0$",
      "$-30$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>First simplify the inner double negative: $-(-15) = 15$. Next, apply the outer negative: $-(15) = -15$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Simplify the expression: $-(-(-45))$.",
    "options": [
      "$-45$",
      "$45$",
      "$0$",
      "$-90$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Three negative signs multiply to a negative: $-(-(-a)) = -a$. Thus, $-(-(-45)) = -45$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Simplify the expression: $-(-(-(-50)))$.",
    "options": [
      "$50$",
      "$-50$",
      "$0$",
      "$100$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Four negative signs multiply to a positive: $-(-(-(-a))) = a$. Thus, $-(-(-(-50))) = 50$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Insert the correct symbol ($>$ or $<$) in the box to make a true statement:<br>$4 \\; \\Box \\; 7$",
    "options": [
      "$<$",
      "$>$",
      "$=$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Since $4$ lies to the left of $7$ on the number line, $4$ is less than $7$. Thus, $4 < 7$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Insert the correct symbol ($>$ or $<$) in the box to make a true statement:<br>$5 \\; \\Box \\; -6$",
    "options": [
      "$>$",
      "$<$",
      "$=$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Every positive integer is strictly greater than any negative integer. Thus, $5 > -6$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Insert the correct symbol ($>$ or $<$) in the box to make a true statement:<br>$-9 \\; \\Box \\; -5$",
    "options": [
      "$<$",
      "$>$",
      "$=$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>On a number line, $-9$ lies to the left of $-5$. The further to the left a number is, the smaller it is. Thus, $-9 < -5$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Insert the correct symbol ($>$ or $<$) in the box to make a true statement:<br>$3 \\; \\Box \\; -(-4)$",
    "options": [
      "$<$",
      "$>$",
      "$=$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>First simplify the right-hand side: $-(-4) = 4$. Now compare: $3$ is less than $4$. Thus, $3 < -(-4)$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.981Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Read the temperature shown on the thermometer below in degrees Celsius (°C).<br><svg width=\"220\" height=\"160\" viewBox=\"0 0 220 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Outer glass body -->\n    <rect x=\"135\" y=\"15\" width=\"20\" height=\"115\" rx=\"10\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <circle cx=\"145\" cy=\"138\" r=\"14\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <!-- Red Liquid column and bulb -->\n    <circle cx=\"145\" cy=\"138\" r=\"11\" fill=\"#ef4444\"/>\n    <rect x=\"142\" y=\"109.292\" width=\"6\" height=\"28.708\" fill=\"#ef4444\"/>\n    <line x1=\"158\" y1=\"125\" x2=\"168\" y2=\"125\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"128.5\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">-40</text><line x1=\"158\" y1=\"110.72\" x2=\"168\" y2=\"110.72\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"114.22\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">-20</text><line x1=\"158\" y1=\"96.44\" x2=\"168\" y2=\"96.44\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"99.94\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">0</text><line x1=\"158\" y1=\"82.16\" x2=\"168\" y2=\"82.16\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"85.66\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">20</text><line x1=\"158\" y1=\"67.88\" x2=\"168\" y2=\"67.88\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"71.38\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">40</text><line x1=\"158\" y1=\"53.60000000000001\" x2=\"168\" y2=\"53.60000000000001\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"57.10000000000001\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">60</text><line x1=\"158\" y1=\"39.32000000000001\" x2=\"168\" y2=\"39.32000000000001\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"42.82000000000001\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">80</text><line x1=\"158\" y1=\"25.040000000000006\" x2=\"168\" y2=\"25.040000000000006\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"28.540000000000006\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">100</text>\n    <text x=\"145\" y=\"10\" text-anchor=\"middle\" fill=\"#64748b\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">°C</text>\n  </svg>",
    "options": [
      "-18 °C",
      "-15 °C",
      "-20 °C",
      "18 °C"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p><strong>Step 1:</strong> Identify the major temperature line below the top of the red liquid column.</p>\n      <p><strong>Step 2:</strong> Count the small division ticks (representing $1^\\circ\\text{C}$ each) up or down to find the exact level.</p>\n      <p><strong>Step 3:</strong> For this thermometer, the liquid top lies exactly at $-18^\\circ\\text{C}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Read the temperature shown on the thermometer below in degrees Celsius (°C).<br><svg width=\"220\" height=\"160\" viewBox=\"0 0 220 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Outer glass body -->\n    <rect x=\"135\" y=\"15\" width=\"20\" height=\"115\" rx=\"10\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <circle cx=\"145\" cy=\"138\" r=\"14\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <!-- Red Liquid column and bulb -->\n    <circle cx=\"145\" cy=\"138\" r=\"11\" fill=\"#ef4444\"/>\n    <rect x=\"142\" y=\"121.43\" width=\"6\" height=\"16.569999999999993\" fill=\"#ef4444\"/>\n    <line x1=\"158\" y1=\"125\" x2=\"168\" y2=\"125\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"128.5\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">-40</text><line x1=\"158\" y1=\"110.72\" x2=\"168\" y2=\"110.72\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"114.22\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">-20</text><line x1=\"158\" y1=\"96.44\" x2=\"168\" y2=\"96.44\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"99.94\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">0</text><line x1=\"158\" y1=\"82.16\" x2=\"168\" y2=\"82.16\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"85.66\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">20</text><line x1=\"158\" y1=\"67.88\" x2=\"168\" y2=\"67.88\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"71.38\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">40</text><line x1=\"158\" y1=\"53.60000000000001\" x2=\"168\" y2=\"53.60000000000001\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"57.10000000000001\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">60</text><line x1=\"158\" y1=\"39.32000000000001\" x2=\"168\" y2=\"39.32000000000001\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"42.82000000000001\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">80</text><line x1=\"158\" y1=\"25.040000000000006\" x2=\"168\" y2=\"25.040000000000006\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"28.540000000000006\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">100</text>\n    <text x=\"145\" y=\"10\" text-anchor=\"middle\" fill=\"#64748b\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">°C</text>\n  </svg>",
    "options": [
      "-35 °C",
      "-30 °C",
      "-40 °C",
      "35 °C"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p><strong>Step 1:</strong> Identify the major temperature line below the top of the red liquid column.</p>\n      <p><strong>Step 2:</strong> Count the small division ticks (representing $1^\\circ\\text{C}$ each) up or down to find the exact level.</p>\n      <p><strong>Step 3:</strong> For this thermometer, the liquid top lies exactly at $-35^\\circ\\text{C}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Read the temperature shown on the thermometer below in degrees Celsius (°C).<br><svg width=\"220\" height=\"160\" viewBox=\"0 0 220 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Outer glass body -->\n    <rect x=\"135\" y=\"15\" width=\"20\" height=\"115\" rx=\"10\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <circle cx=\"145\" cy=\"138\" r=\"14\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <!-- Red Liquid column and bulb -->\n    <circle cx=\"145\" cy=\"138\" r=\"11\" fill=\"#ef4444\"/>\n    <rect x=\"142\" y=\"112.148\" width=\"6\" height=\"25.852000000000004\" fill=\"#ef4444\"/>\n    <line x1=\"158\" y1=\"125\" x2=\"168\" y2=\"125\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"128.5\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">-40</text><line x1=\"158\" y1=\"110.72\" x2=\"168\" y2=\"110.72\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"114.22\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">-20</text><line x1=\"158\" y1=\"96.44\" x2=\"168\" y2=\"96.44\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"99.94\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">0</text><line x1=\"158\" y1=\"82.16\" x2=\"168\" y2=\"82.16\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"85.66\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">20</text><line x1=\"158\" y1=\"67.88\" x2=\"168\" y2=\"67.88\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"71.38\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">40</text><line x1=\"158\" y1=\"53.60000000000001\" x2=\"168\" y2=\"53.60000000000001\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"57.10000000000001\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">60</text><line x1=\"158\" y1=\"39.32000000000001\" x2=\"168\" y2=\"39.32000000000001\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"42.82000000000001\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">80</text><line x1=\"158\" y1=\"25.040000000000006\" x2=\"168\" y2=\"25.040000000000006\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"28.540000000000006\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">100</text>\n    <text x=\"145\" y=\"10\" text-anchor=\"middle\" fill=\"#64748b\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">°C</text>\n  </svg>",
    "options": [
      "-22 °C",
      "-20 °C",
      "-25 °C",
      "22 °C"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p><strong>Step 1:</strong> Identify the major temperature line below the top of the red liquid column.</p>\n      <p><strong>Step 2:</strong> Count the small division ticks (representing $1^\\circ\\text{C}$ each) up or down to find the exact level.</p>\n      <p><strong>Step 3:</strong> For this thermometer, the liquid top lies exactly at $-22^\\circ\\text{C}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Read the temperature shown on the thermometer below in degrees Celsius (°C).<br><svg width=\"220\" height=\"160\" viewBox=\"0 0 220 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;\">\n    <!-- Outer glass body -->\n    <rect x=\"135\" y=\"15\" width=\"20\" height=\"115\" rx=\"10\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <circle cx=\"145\" cy=\"138\" r=\"14\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <!-- Red Liquid column and bulb -->\n    <circle cx=\"145\" cy=\"138\" r=\"11\" fill=\"#ef4444\"/>\n    <rect x=\"142\" y=\"123.572\" width=\"6\" height=\"14.427999999999997\" fill=\"#ef4444\"/>\n    <line x1=\"158\" y1=\"125\" x2=\"168\" y2=\"125\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"128.5\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">-40</text><line x1=\"158\" y1=\"110.72\" x2=\"168\" y2=\"110.72\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"114.22\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">-20</text><line x1=\"158\" y1=\"96.44\" x2=\"168\" y2=\"96.44\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"99.94\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">0</text><line x1=\"158\" y1=\"82.16\" x2=\"168\" y2=\"82.16\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"85.66\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">20</text><line x1=\"158\" y1=\"67.88\" x2=\"168\" y2=\"67.88\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"71.38\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">40</text><line x1=\"158\" y1=\"53.60000000000001\" x2=\"168\" y2=\"53.60000000000001\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"57.10000000000001\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">60</text><line x1=\"158\" y1=\"39.32000000000001\" x2=\"168\" y2=\"39.32000000000001\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"42.82000000000001\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">80</text><line x1=\"158\" y1=\"25.040000000000006\" x2=\"168\" y2=\"25.040000000000006\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"175\" y=\"28.540000000000006\" fill=\"#475569\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">100</text>\n    <text x=\"145\" y=\"10\" text-anchor=\"middle\" fill=\"#64748b\" font-size=\"9\" font-weight=\"bold\" font-family=\"'Outfit'\">°C</text>\n  </svg>",
    "options": [
      "-38 °C",
      "-35 °C",
      "-42 °C",
      "38 °C"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p><strong>Step 1:</strong> Identify the major temperature line below the top of the red liquid column.</p>\n      <p><strong>Step 2:</strong> Count the small division ticks (representing $1^\\circ\\text{C}$ each) up or down to find the exact level.</p>\n      <p><strong>Step 3:</strong> For this thermometer, the liquid top lies exactly at $-38^\\circ\\text{C}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A diver dives to a depth of $28\\text{ m}$ below sea level. How can we express this position as an integer relative to sea level?",
    "options": [
      "-28",
      "28",
      "0",
      "-280"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Sea level is represented by the integer $0$. Since \"below sea level\" denotes a negative direction, a depth of $28\\text{ m}$ is written as $-28$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "An elevator in a hotel starts on the ground floor ($0$) and goes down $3$ floors to the basement parking. What is its new floor represented as an integer?",
    "options": [
      "-3",
      "3",
      "-2",
      "-4"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Going down represents a negative change. Starting at $0$ and going down $3$ floors brings the elevator to $0 - 3 = -3$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Chloe's bank balance is overdrawn by $\\$45$. What is her bank balance represented as an integer?",
    "options": [
      "-45",
      "45",
      "-450",
      "0"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>An overdrawn balance means she owes money, which is a negative cash position. Therefore, the balance is represented as $-45$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "The temperature in Mount Kosciuszko is $7$ degrees below freezing ($0^\\circ\\text{C}$). Express this temperature as an integer.",
    "options": [
      "-7",
      "7",
      "0",
      "-14"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Freezing temperature is $0^\\circ\\text{C}$. \"Below freezing\" represents a negative number. Thus, $7$ degrees below freezing is $-7$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A hiker is at an altitude of $150\\text{ m}$ above sea level, while a submarine is directly below at $120\\text{ m}$ below sea level. What is the vertical distance between them?",
    "options": [
      "270 m",
      "30 m",
      "150 m",
      "120 m"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The altitude of the hiker is $+150\\text{ m}$. The depth of the submarine is $-120\\text{ m}$. <br>The vertical distance is the difference between these altitudes:<br>$150 - (-120) = 150 + 120 = 270\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A business made a loss of $\\$1200$ in its first month and a profit of $\\$1800$ in its second month. What is the total net position represented as an integer?",
    "options": [
      "600",
      "-600",
      "3000",
      "-3000"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>A loss is negative: $-\\$1200$. A profit is positive: $+\\$1800$. <br>The net position is:<br>$-1200 + 1800 = +600$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A golfer plays a round of golf and finishes with a score of $4$ under par. What is their score represented as an integer relative to par?",
    "options": [
      "-4",
      "4",
      "0",
      "-40"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Par is represented as $0$. \"Under par\" represents a negative integer score. Thus, $4$ under par is $-4$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "An airplane climbs to an altitude of $4500\\text{ m}$ above sea level and then descends $800\\text{ m}$. What is its final altitude relative to sea level?",
    "options": [
      "3700 m",
      "5300 m",
      "4500 m",
      "800 m"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Climbing to $4500\\text{ m}$ represents $+4500$. Descending $800\\text{ m}$ is a negative change of $-800$. <br>The final altitude is:<br>$4500 - 800 = 3700\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Which integer is greater: $-12$ or $-15$?",
    "options": [
      "-12",
      "-15",
      "They are equal",
      "Cannot be determined"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>On a number line, $-12$ lies to the right of $-15$. Numbers to the right are always greater than numbers to the left. Thus, $-12 > -15$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A freezer temperature is lowered by $6^\\circ\\text{C}$ from its current temperature of $-12^\\circ\\text{C}$. What is the new temperature?",
    "options": [
      "-18 °C",
      "-6 °C",
      "18 °C",
      "-12 °C"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Lowering the temperature means subtracting:<br>$-12 - 6 = -18^\\circ\\text{C}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "On a winter day, the temperature in Seoul is $-5^\\circ\\text{C}$ and in Tokyo it is $4^\\circ\\text{C}$. What is the difference in temperature between the two cities?",
    "options": [
      "9 °C",
      "1 °C",
      "-9 °C",
      "5 °C"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The difference is the higher temperature minus the lower temperature:<br>$4 - (-5) = 4 + 5 = 9^\\circ\\text{C}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A metal rod is heated from $-15^\\circ\\text{C}$ to $35^\\circ\\text{C}$. By how many degrees did the temperature of the rod increase?",
    "options": [
      "50 °C",
      "20 °C",
      "-50 °C",
      "35 °C"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The increase in temperature is the final temperature minus the initial temperature:<br>$35 - (-15) = 35 + 15 = 50^\\circ\\text{C}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "The Dead Sea shores are at $430\\text{ m}$ below sea level, while Mount Everest stands at $8848\\text{ m}$ above sea level. What is the vertical difference in altitude between the peak of Mount Everest and the Dead Sea shores?",
    "options": [
      "9278 m",
      "8418 m",
      "8848 m",
      "430 m"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Peak altitude $= +8848\\text{ m}$. Dead sea altitude $= -430\\text{ m}$. <br>Vertical difference is:<br>$8848 - (-430) = 8848 + 430 = 9278\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "A stock price drops by $\\$8$ on Monday, rises by $\\$12$ on Tuesday, and drops by $\\$5$ on Wednesday. What is the overall net change in the stock price over the three days?",
    "options": [
      "-$1",
      "+$1",
      "+$9",
      "-$9"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>Represent changes as integers: $-8$ (drop), $+12$ (rise), $-5$ (drop). <br>Net change $= -8 + 12 - 5 = 4 - 5 = -1$. <br>The stock price dropped by $\\$1$ overall.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
  },
  {
    "chapterId": "y7-10",
    "chapterTitle": "Chapter 10: Negative integers",
    "topicId": "y7-10a",
    "topicCode": "10A",
    "topicTitle": "Negative integers",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "If the total depth of a lake is $42\\text{ m}$, and a fish is swimming at a depth of $15\\text{ m}$ below the surface, how many metres is the fish above the bottom of the lake?",
    "options": [
      "27 m",
      "15 m",
      "42 m",
      "57 m"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\">\n      <p><strong>Step-by-step breakdown:</strong></p>\n      <p>The fish is $15\\text{ m}$ below the surface. The bottom is $42\\text{ m}$ below the surface. <br>The distance from the fish to the bottom is:<br>$42 - 15 = 27\\text{ m}$.</p>\n    </div>",
    "createdAt": "2026-05-17T12:54:14.982Z"
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

    // To prevent duplicates, query all existing questions in Ch10 topics
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
