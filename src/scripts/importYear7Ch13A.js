import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Arrange the following set of numbers in increasing order: $$-3, \\frac{1}{3}, -1, -\\frac{8}{5}, \\frac{1}{2}, 2$$",
    "options": [
      "$$-3, -\\frac{8}{5}, -1, \\frac{1}{3}, \\frac{1}{2}, 2$$",
      "$$-3, -1, -\\frac{8}{5}, \\frac{1}{3}, \\frac{1}{2}, 2$$",
      "$$-1, -3, -\\frac{8}{5}, \\frac{1}{2}, \\frac{1}{3}, 2$$",
      "$$-3, -\\frac{8}{5}, -1, \\frac{1}{2}, \\frac{1}{3}, 2$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>To arrange the numbers in increasing order, let's first convert them to decimal representations to compare their sizes easily:</p><ul><li>$$-3 = -3.0$$</li><li>$$-\\frac{8}{5} = -1.6$$</li><li>$$-1 = -1.0$$</li><li>$$\\frac{1}{3} \\approx 0.333$$</li><li>$$\\frac{1}{2} = 0.5$$</li><li>$$2 = 2.0$$</li></ul><p>Comparing these decimal values, from most negative (smallest) to most positive (largest):</p><p>$$-3.0 < -1.6 < -1.0 < 0.333 < 0.5 < 2.0$$</p><p>Therefore, the numbers in increasing order are:</p><p>$$-3, -\\frac{8}{5}, -1, \\frac{1}{3}, \\frac{1}{2}, 2$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.608Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Arrange the following set of numbers in increasing order: $$-\\frac{5}{4}, -\\frac{12}{5}, \\frac{1}{3}, \\frac{5}{2}$$",
    "options": [
      "$$-\\frac{12}{5}, -\\frac{5}{4}, \\frac{1}{3}, \\frac{5}{2}$$",
      "$$-\\frac{5}{4}, -\\frac{12}{5}, \\frac{1}{3}, \\frac{5}{2}$$",
      "$$-\\frac{12}{5}, -\\frac{5}{4}, \\frac{5}{2}, \\frac{1}{3}$$",
      "$$\\frac{1}{3}, \\frac{5}{2}, -\\frac{5}{4}, -\\frac{12}{5}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's convert each number to a decimal:</p><ul><li>$$-\\frac{12}{5} = -2.4$$</li><li>$$-\\frac{5}{4} = -1.25$$</li><li>$$\\frac{1}{3} \\approx 0.333$$</li><li>$$\\frac{5}{2} = 2.5$$</li></ul><p>Comparing the values:</p><p>$$-2.4 < -1.25 < 0.333 < 2.5$$</p><p>Hence, the increasing order is:</p><p>$$-\\frac{12}{5}, -\\frac{5}{4}, \\frac{1}{3}, \\frac{5}{2}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Arrange the following set of numbers in increasing order: $$-\\frac{3}{4}, -\\frac{5}{6}, -\\frac{9}{10}, \\frac{10}{11}$$",
    "options": [
      "$$-\\frac{9}{10}, -\\frac{5}{6}, -\\frac{3}{4}, \\frac{10}{11}$$",
      "$$-\\frac{3}{4}, -\\frac{5}{6}, -\\frac{9}{10}, \\frac{10}{11}$$",
      "$$-\\frac{5}{6}, -\\frac{9}{10}, -\\frac{3}{4}, \\frac{10}{11}$$",
      "$$\\frac{10}{11}, -\\frac{3}{4}, -\\frac{5}{6}, -\\frac{9}{10}$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's convert each number to a decimal to compare their sizes:</p><ul><li>$$-\\frac{9}{10} = -0.900$$</li><li>$$-\\frac{5}{6} \\approx -0.833$$</li><li>$$-\\frac{3}{4} = -0.750$$</li><li>$$\\frac{10}{11} \\approx 0.909$$</li></ul><p>Comparing the values:</p><p>$$-0.900 < -0.833 < -0.750 < 0.909$$</p><p>Hence, the increasing order is:</p><p>$$-\\frac{9}{10}, -\\frac{5}{6}, -\\frac{3}{4}, \\frac{10}{11}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Arrange the following set of numbers in increasing order: $$-1\\frac{7}{9}, -\\frac{11}{9}, -2, -1$$",
    "options": [
      "$$-2, -1\\frac{7}{9}, -\\frac{11}{9}, -1$$",
      "$$-1\\frac{7}{9}, -2, -\\frac{11}{9}, -1$$",
      "$$-2, -\\frac{11}{9}, -1\\frac{7}{9}, -1$$",
      "$$-1, -\\frac{11}{9}, -1\\frac{7}{9}, -2$$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Let's convert each number to a decimal:</p><ul><li>$$-2 = -2.00$$</li><li>$$-1\\frac{7}{9} = -\\frac{16}{9} \\approx -1.78$$</li><li>$$-\\frac{11}{9} \\approx -1.22$$</li><li>$$-1 = -1.00$$</li></ul><p>Comparing the values:</p><p>$$-2.00 < -1.78 < -1.22 < -1.00$$</p><p>Hence, the increasing order is:</p><p>$$-2, -1\\frac{7}{9}, -\\frac{11}{9}, -1$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Identify the correct set of coordinates represented on the number line below:\n\n<div style=\"display: flex; justify-content: center; margin: 16px 0;\">\n      <svg viewBox=\"0 0 400 60\" width=\"100%\" style=\"max-width: 320px;\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"20\" y1=\"30\" x2=\"380\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2.5\" />\n        <path d=\"M 380 30 L 370 25 M 380 30 L 370 35 M 20 30 L 30 25 M 20 30 L 30 35\" stroke=\"#1e293b\" stroke-width=\"2\" />\n        \n        <!-- Ticks from -5 to 5 (36 pixels per unit, 0 at 200) -->\n        <line x1=\"20\" y1=\"25\" x2=\"20\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n        <line x1=\"56\" y1=\"25\" x2=\"56\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n        <line x1=\"92\" y1=\"25\" x2=\"92\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n        <line x1=\"128\" y1=\"25\" x2=\"128\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n        <line x1=\"164\" y1=\"25\" x2=\"164\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n        <line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2\" /> <!-- 0 -->\n        <line x1=\"236\" y1=\"25\" x2=\"236\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n        <line x1=\"272\" y1=\"25\" x2=\"272\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n        <line x1=\"308\" y1=\"25\" x2=\"308\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n        <line x1=\"344\" y1=\"25\" x2=\"344\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n        <line x1=\"380\" y1=\"25\" x2=\"380\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.5\" />\n\n        <text x=\"200\" y=\"55\" font-size=\"12\" font-family=\"Outfit\" text-anchor=\"middle\" font-weight=\"bold\">0</text>\n        <text x=\"380\" y=\"55\" font-size=\"11\" font-family=\"Outfit\" text-anchor=\"middle\">5</text>\n        <text x=\"20\" y=\"55\" font-size=\"11\" font-family=\"Outfit\" text-anchor=\"middle\">-5</text>\n\n        <!-- Plotted points -->\n        <!-- -3 1/2: x = 200 - 3.5*36 = 74 -->\n        <circle cx=\"74\" cy=\"30\" r=\"5\" fill=\"#ef4444\" />\n        <text x=\"74\" y=\"15\" font-size=\"10\" font-family=\"Outfit\" fill=\"#ef4444\" text-anchor=\"middle\" font-weight=\"bold\">-3½</text>\n\n        <!-- -4 3/4: x = 200 - 4.75*36 = 29 -->\n        <circle cx=\"29\" cy=\"30\" r=\"5\" fill=\"#ef4444\" />\n        <text x=\"29\" y=\"15\" font-size=\"10\" font-family=\"Outfit\" fill=\"#ef4444\" text-anchor=\"middle\" font-weight=\"bold\">-4¾</text>\n\n        <!-- -1 1/2: x = 200 - 1.5*36 = 146 -->\n        <circle cx=\"146\" cy=\"30\" r=\"5\" fill=\"#ef4444\" />\n        <text x=\"146\" y=\"15\" font-size=\"10\" font-family=\"Outfit\" fill=\"#ef4444\" text-anchor=\"middle\" font-weight=\"bold\">-1½</text>\n\n        <!-- 1 1/2: x = 200 + 1.5*36 = 254 -->\n        <circle cx=\"254\" cy=\"30\" r=\"5\" fill=\"#ef4444\" />\n        <text x=\"254\" y=\"15\" font-size=\"10\" font-family=\"Outfit\" fill=\"#ef4444\" text-anchor=\"middle\" font-weight=\"bold\">1½</text>\n      </svg>\n    </div>",
    "options": [
      "$$\\{-4\\frac{3}{4}, -3\\frac{1}{2}, -1\\frac{1}{2}, 1\\frac{1}{2}\\}$",
      "$$\\{-4\\frac{1}{4}, -3\\frac{1}{2}, -1\\frac{1}{2}, 1\\frac{1}{2}\\}$",
      "$$\\{-4\\frac{3}{4}, -3\\frac{1}{4}, -1\\frac{1}{2}, 2\\frac{1}{2}\\}$",
      "$$\\{-3\\frac{3}{4}, -2\\frac{1}{2}, -1\\frac{1}{2}, 1\\frac{1}{2}\\}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>By carefully reading each marked position on the scale from $$-5$$ to $$5$$:</p><ul><li>The point between $$-5$$ and $$-4$$ is at $$-4\\frac{3}{4}$$.</li><li>The point exactly halfway between $$-4$$ and $$-3$$ is at $$-3\\frac{1}{2}$$.</li><li>The point exactly halfway between $$-2$$ and $$-1$$ is at $$-1\\frac{1}{2}$$.</li><li>The point exactly halfway between $$1$$ and $$2$$ is at $$1\\frac{1}{2}$$.</li></ul></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition: $$-\\frac{1}{3} + 1$$",
    "options": [
      "$\\frac{2}{3}$",
      "$-\\frac{2}{3}$",
      "$\\frac{4}{3}$",
      "$0$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the addition step-by-step:</p><p>$$-\\frac{1}{3} + 1 = 1 - \\frac{1}{3} = \\frac{3}{3} - \\frac{1}{3} = \\frac{2}{3}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition: $$-3\\frac{1}{2} + 6$$",
    "options": [
      "$2\\frac{1}{2}$",
      "$3\\frac{1}{2}$",
      "$-2\\frac{1}{2}$",
      "$3$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the addition step-by-step:</p><p>$$-3\\frac{1}{2} + 6 = 6 - 3.5 = 2.5 = 2\\frac{1}{2}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition: $$-\\frac{3}{5} + \\frac{2}{5}$$",
    "options": [
      "-\\frac{1}{5}",
      "\\frac{1}{5}",
      "-\\frac{5}{5}",
      "0"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the addition step-by-step:</p><p>$$-\\frac{3}{5} + \\frac{2}{5} = \\frac{-3 + 2}{5} = -\\frac{1}{5}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition: $$-\\frac{3}{8} + \\frac{7}{8}$$",
    "options": [
      "\\frac{1}{2}",
      "-\\frac{1}{2}",
      "\\frac{5}{8}",
      "\\frac{3}{4}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the addition step-by-step:</p><p>$$-\\frac{3}{8} + \\frac{7}{8} = \\frac{-3 + 7}{8} = \\frac{4}{8} = \\frac{1}{2}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition: $$-2 + \\frac{2}{3}$$",
    "options": [
      "-\\frac{4}{3}",
      "-\\frac{2}{3}",
      "-\\frac{8}{3}",
      "-\\frac{1}{3}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the addition step-by-step:</p><p>$$-2 + \\frac{2}{3} = -\\frac{6}{3} + \\frac{2}{3} = -\\frac{4}{3} = -1\\frac{1}{3}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition: $$-5 + 2\\frac{1}{2}$$",
    "options": [
      "-2\\frac{1}{2}",
      "-3\\frac{1}{2}",
      "-2",
      "-3$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the addition step-by-step:</p><p>$$-5 + 2\\frac{1}{2} = -5 + 2.5 = -2.5 = -2\\frac{1}{2}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition: $$-\\frac{4}{5} + \\frac{1}{5}$$",
    "options": [
      "-\\frac{3}{5}",
      "-\\frac{5}{5}",
      "-\\frac{2}{5}",
      "\\frac{3}{5}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the addition step-by-step:</p><p>$$-\\frac{4}{5} + \\frac{1}{5} = \\frac{-4 + 1}{5} = -\\frac{3}{5}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "easy",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition: $$-\\frac{3}{7} + \\frac{5}{7}$$",
    "options": [
      "\\frac{2}{7}",
      "-\\frac{2}{7}",
      "\\frac{8}{7}",
      "-\\frac{8}{7}$"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving the addition step-by-step:</p><p>$$-\\frac{3}{7} + \\frac{5}{7} = \\frac{-3 + 5}{7} = \\frac{2}{7}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$-\\frac{1}{6} + \\frac{1}{3}$$",
    "options": [
      "\\frac{1}{6}",
      "-\\frac{1}{6}",
      "\\frac{1}{3}",
      "-\\frac{1}{3}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{1}{6} + \\frac{1}{3} = -\\frac{1}{6} + \\frac{2}{6} = \\frac{1}{6}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$-\\frac{1}{3} + \\frac{4}{5}$$",
    "options": [
      "\\frac{7}{15}",
      "-\\frac{7}{15}",
      "\\frac{3}{15}",
      "-\\frac{3}{15}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{1}{3} + \\frac{4}{5} = -\\frac{5}{15} + \\frac{12}{15} = \\frac{7}{15}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$\\frac{1}{8} + \\left(-\\frac{5}{6}\\right)$$",
    "options": [
      "-\\frac{17}{24}",
      "-\\frac{13}{24}",
      "\\frac{17}{24}",
      "-\\frac{3}{4}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$\\frac{1}{8} - \\frac{5}{6} = \\frac{3}{24} - \\frac{20}{24} = -\\frac{17}{24}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$-\\frac{1}{8} + \\frac{1}{3}$$",
    "options": [
      "\\frac{5}{24}",
      "-\\frac{5}{24}",
      "\\frac{11}{24}",
      "-\\frac{11}{24}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{1}{8} + \\frac{1}{3} = -\\frac{3}{24} + \\frac{8}{24} = \\frac{5}{24}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$\\frac{1}{6} + \\left(-\\frac{1}{2}\\right)$$",
    "options": [
      "-\\frac{1}{3}",
      "-\\frac{2}{3}",
      "\\frac{1}{3}",
      "-\\frac{1}{6}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$\\frac{1}{6} - \\frac{1}{2} = \\frac{1}{6} - \\frac{3}{6} = -\\frac{2}{6} = -\\frac{1}{3}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$-\\frac{3}{4} + \\left(-\\frac{2}{5}\\right)$$",
    "options": [
      "-\\frac{23}{20}",
      "-\\frac{7}{20}",
      "-\\frac{19}{20}",
      "-\\frac{31}{20}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{3}{4} - \\frac{2}{5} = -\\frac{15}{20} - \\frac{8}{20} = -\\frac{23}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$-\\frac{3}{5} + \\frac{1}{4}$$",
    "options": [
      "-\\frac{7}{20}",
      "-\\frac{11}{20}",
      "\\frac{7}{20}",
      "-\\frac{3}{20}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{3}{5} + \\frac{1}{4} = -\\frac{12}{20} + \\frac{5}{20} = -\\frac{7}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$-\\frac{3}{5} + \\left(-\\frac{2}{7}\\right)$$",
    "options": [
      "-\\frac{31}{35}",
      "-\\frac{19}{35}",
      "-\\frac{29}{35}",
      "-\\frac{33}{35}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{3}{5} - \\frac{2}{7} = -\\frac{21}{35} - \\frac{10}{35} = -\\frac{31}{35}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$-\\frac{4}{5} + \\frac{1}{3}$$",
    "options": [
      "-\\frac{7}{15}",
      "-\\frac{11}{15}",
      "-\\frac{3}{15}",
      "\\frac{7}{15}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{4}{5} + \\frac{1}{3} = -\\frac{12}{15} + \\frac{5}{15} = -\\frac{7}{15}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.609Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$-\\frac{7}{8} + \\frac{1}{3}$$",
    "options": [
      "-\\frac{13}{24}",
      "-\\frac{17}{24}",
      "-\\frac{11}{24}",
      "-\\frac{15}{24}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{7}{8} + \\frac{1}{3} = -\\frac{21}{24} + \\frac{8}{24} = -\\frac{13}{24}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$-\\frac{1}{4} + \\frac{3}{5}$$",
    "options": [
      "\\frac{7}{20}",
      "-\\frac{7}{20}",
      "\\frac{13}{20}",
      "-\\frac{13}{20}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{1}{4} + \\frac{3}{5} = -\\frac{5}{20} + \\frac{12}{20} = \\frac{7}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the addition of these fractions: $$3\\frac{1}{4} + \\left(-\\frac{1}{3}\\right)$$",
    "options": [
      "2\\frac{11}{12}",
      "3\\frac{1}{12}",
      "2\\frac{5}{12}",
      "3\\frac{5}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$3\\frac{1}{4} - \\frac{1}{3} = \\frac{13}{4} - \\frac{1}{3} = \\frac{39}{12} - \\frac{4}{12} = \\frac{35}{12} = 2\\frac{11}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{1}{6} - \\frac{1}{3}$$",
    "options": [
      "-\\frac{1}{2}",
      "-\\frac{1}{6}",
      "-\\frac{5}{6}",
      "\\frac{1}{6}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{1}{6} - \\frac{1}{3} = -\\frac{1}{6} - \\frac{2}{6} = -\\frac{3}{6} = -\\frac{1}{2}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{1}{3} - \\frac{3}{4}$$",
    "options": [
      "-\\frac{13}{12}",
      "-\\frac{5}{12}",
      "-\\frac{7}{12}",
      "-\\frac{11}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{1}{3} - \\frac{3}{4} = -\\frac{4}{12} - \\frac{9}{12} = -\\frac{13}{12} = -1\\frac{1}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{2}{3} - \\frac{1}{4}$$",
    "options": [
      "-\\frac{11}{12}",
      "-\\frac{5}{12}",
      "-\\frac{7}{12}",
      "-\\frac{9}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{2}{3} - \\frac{1}{4} = -\\frac{8}{12} - \\frac{3}{12} = -\\frac{11}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{1}{8} - \\frac{1}{3}$$",
    "options": [
      "-\\frac{11}{24}",
      "-\\frac{5}{24}",
      "-\\frac{7}{24}",
      "-\\frac{13}{24}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{1}{8} - \\frac{1}{3} = -\\frac{3}{24} - \\frac{8}{24} = -\\frac{11}{24}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{1}{6} - \\left(-\\frac{1}{2}\\right)$$",
    "options": [
      "\\frac{1}{3}",
      "-\\frac{1}{3}",
      "-\\frac{2}{3}",
      "\\frac{2}{3}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{1}{6} + \\frac{1}{2} = -\\frac{1}{6} + \\frac{3}{6} = \\frac{2}{6} = \\frac{1}{3}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{3}{4} - \\left(-\\frac{2}{3}\\right)$$",
    "options": [
      "-\\frac{1}{12}",
      "-\\frac{5}{12}",
      "-\\frac{17}{12}",
      "\\frac{1}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{3}{4} + \\frac{2}{3} = -\\frac{9}{12} + \\frac{8}{12} = -\\frac{1}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{3}{5} - \\left(-\\frac{1}{3}\\right)$$",
    "options": [
      "-\\frac{4}{15}",
      "-\\frac{14}{15}",
      "-\\frac{2}{15}",
      "\\frac{4}{15}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{3}{5} + \\frac{1}{3} = -\\frac{9}{15} + \\frac{5}{15} = -\\frac{4}{15}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{3}{4} - \\left(-\\frac{1}{6}\\right)$$",
    "options": [
      "-\\frac{7}{12}",
      "-\\frac{11}{12}",
      "-\\frac{5}{12}",
      "-\\frac{1}{2}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{3}{4} + \\frac{1}{6} = -\\frac{9}{12} + \\frac{2}{12} = -\\frac{7}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{4}{5} - \\frac{1}{3}$$",
    "options": [
      "-\\frac{17}{15}",
      "-\\frac{7}{15}",
      "-\\frac{11}{15}",
      "-\\frac{13}{15}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{4}{5} - \\frac{1}{3} = -\\frac{12}{15} - \\frac{5}{15} = -\\frac{17}{15} = -1\\frac{2}{15}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{7}{8} - \\left(-\\frac{2}{3}\\right)$$",
    "options": [
      "-\\frac{5}{24}",
      "-\\frac{37}{24}",
      "-\\frac{13}{24}",
      "\\frac{5}{24}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{7}{8} + \\frac{2}{3} = -\\frac{21}{24} + \\frac{16}{24} = -\\frac{5}{24}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{1}{4} - \\left(-\\frac{2}{5}\\right)$$",
    "options": [
      "\\frac{3}{20}",
      "-\\frac{3}{20}",
      "-\\frac{13}{20}",
      "\\frac{13}{20}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{1}{4} + \\frac{2}{5} = -\\frac{5}{20} + \\frac{8}{20} = \\frac{3}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the subtraction: $$-\\frac{3}{5} - \\frac{1}{4}$$",
    "options": [
      "-\\frac{17}{20}",
      "-\\frac{7}{20}",
      "-\\frac{11}{20}",
      "-\\frac{13}{20}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{3}{5} - \\frac{1}{4} = -\\frac{12}{20} - \\frac{5}{20} = -\\frac{17}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-\\frac{1}{3} + 4$$",
    "options": [
      "3\\frac{2}{3}",
      "4\\frac{1}{3}",
      "-3\\frac{2}{3}",
      "3\\frac{1}{3}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{1}{3} + 4 = 4 - \\frac{1}{3} = 3\\frac{2}{3}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-2\\frac{1}{2} + 5$$",
    "options": [
      "2\\frac{1}{2}",
      "3\\frac{1}{2}",
      "-2\\frac{1}{2}",
      "3"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-2\\frac{1}{2} + 5 = 5 - 2.5 = 2.5 = 2\\frac{1}{2}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-\\frac{3}{4} - \\frac{1}{4}$$",
    "options": [
      "-1",
      "-\\frac{1}{2}",
      "-\\frac{3}{4}",
      "0"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{3}{4} - \\frac{1}{4} = -\\frac{4}{4} = -1$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-\\frac{3}{4} + \\frac{1}{4}$$",
    "options": [
      "-\\frac{1}{2}",
      "-1",
      "-\\frac{3}{4}",
      "\\frac{1}{2}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{3}{4} + \\frac{1}{4} = -\\frac{2}{4} = -\\frac{1}{2}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-\\frac{4}{5} - \\frac{4}{5}$$",
    "options": [
      "-1\\frac{3}{5}",
      "-\\frac{8}{10}",
      "0",
      "-1"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{4}{5} - \\frac{4}{5} = -\\frac{8}{5} = -1\\frac{3}{5}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-\\frac{3}{4} + \\frac{5}{6}$$",
    "options": [
      "\\frac{1}{12}",
      "-\\frac{1}{12}",
      "\\frac{2}{3}",
      "-\\frac{2}{3}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{3}{4} + \\frac{5}{6} = -\\frac{9}{12} + \\frac{10}{12} = \\frac{1}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-\\frac{5}{6} + \\frac{1}{6}$$",
    "options": [
      "-\\frac{2}{3}",
      "-1",
      "-\\frac{4}{6}",
      "\\frac{2}{3}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{5}{6} + \\frac{1}{6} = -\\frac{4}{6} = -\\frac{2}{3}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-\\frac{1}{6} - \\frac{3}{6}$$",
    "options": [
      "-\\frac{2}{3}",
      "-\\frac{4}{6}",
      "-1",
      "-\\frac{1}{3}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{1}{6} - \\frac{3}{6} = -\\frac{4}{6} = -\\frac{2}{3}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-\\frac{2}{5} + 4$$",
    "options": [
      "3\\frac{3}{5}",
      "4\\frac{2}{5}",
      "-3\\frac{3}{5}",
      "3\\frac{2}{5}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{2}{5} + 4 = 4 - \\frac{2}{5} = 3\\frac{3}{5}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-\\frac{4}{7} - 2$$",
    "options": [
      "-2\\frac{4}{7}",
      "-1\\frac{3}{7}",
      "-2",
      "-2\\frac{3}{7}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-\\frac{4}{7} - 2 = -2 - \\frac{4}{7} = -2\\frac{4}{7}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$-2\\frac{1}{2} + \\left(-\\frac{5}{8}\\right)$$",
    "options": [
      "-3\\frac{1}{8}",
      "-2\\frac{5}{8}",
      "-3\\frac{5}{8}",
      "-2\\frac{3}{8}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$-2\\frac{1}{2} - \\frac{5}{8} = -\\frac{5}{2} - \\frac{5}{8} = -\\frac{20}{8} - \\frac{5}{8} = -\\frac{25}{8} = -3\\frac{1}{8}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate: $$4\\frac{3}{8} - 2\\frac{1}{3}$$",
    "options": [
      "2\\frac{1}{24}",
      "2\\frac{5}{24}",
      "1\\frac{23}{24}",
      "2\\frac{7}{24}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step:</p><p>$$4\\frac{3}{8} - 2\\frac{1}{3} = \\frac{35}{8} - \\frac{7}{3} = \\frac{105}{24} - \\frac{56}{24} = \\frac{49}{24} = 2\\frac{1}{24}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-\\frac{2}{3} - \\left(-2\\frac{3}{10}\\right)$$",
    "options": [
      "1\\frac{19}{30}",
      "2\\frac{29}{30}",
      "-1\\frac{19}{30}",
      "1\\frac{7}{30}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-\\frac{2}{3} + 2\\frac{3}{10} = -\\frac{2}{3} + \\frac{23}{10} = -\\frac{20}{30} + \\frac{69}{30} = \\frac{49}{30} = 1\\frac{19}{30}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$3\\frac{1}{4} - \\left(-1\\frac{2}{5}\\right)$$",
    "options": [
      "4\\frac{13}{20}",
      "4\\frac{3}{20}",
      "1\\frac{17}{20}",
      "2\\frac{3}{20}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$3\\frac{1}{4} + 1\\frac{2}{5} = \\frac{13}{4} + \\frac{7}{5} = \\frac{65}{20} + \\frac{28}{20} = \\frac{93}{20} = 4\\frac{13}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-1\\frac{1}{4} - 3\\frac{2}{5}$$",
    "options": [
      "-4\\frac{13}{20}",
      "-2\\frac{3}{20}",
      "-4\\frac{3}{20}",
      "-2\\frac{13}{20}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-1\\frac{1}{4} - 3\\frac{2}{5} = -\\frac{5}{4} - \\frac{17}{5} = -\\frac{25}{20} - \\frac{68}{20} = -\\frac{93}{20} = -4\\frac{13}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-2\\frac{3}{5} - 1\\frac{4}{7}$$",
    "options": [
      "-4\\frac{6}{35}",
      "-3\\frac{6}{35}",
      "-4\\frac{17}{35}",
      "-3\\frac{17}{35}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-2\\frac{3}{5} - 1\\frac{4}{7} = -\\frac{13}{5} - \\frac{11}{7} = -\\frac{91}{35} - \\frac{55}{35} = -\\frac{146}{35} = -4\\frac{6}{35}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-3\\frac{1}{3} + 2\\frac{1}{2}$$",
    "options": [
      "-\\frac{5}{6}",
      "-1\\frac{5}{6}",
      "-\\frac{1}{6}",
      "\\frac{5}{6}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-3\\frac{1}{3} + 2\\frac{1}{2} = -\\frac{10}{3} + \\frac{5}{2} = -\\frac{20}{6} + \\frac{15}{6} = -\\frac{5}{6}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-2\\frac{1}{3} - 1\\frac{3}{4}$$",
    "options": [
      "-4\\frac{1}{12}",
      "-3\\frac{1}{12}",
      "-4\\frac{7}{12}",
      "-3\\frac{7}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-2\\frac{1}{3} - 1\\frac{3}{4} = -\\frac{7}{3} - \\frac{7}{4} = -\\frac{28}{12} - \\frac{28}{12} = -\\frac{49}{12} = -4\\frac{1}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-2\\frac{2}{3} + 3\\frac{1}{4}$$",
    "options": [
      "\\frac{7}{12}",
      "-\\frac{7}{12}",
      "1\\frac{7}{12}",
      "-\\frac{5}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-2\\frac{2}{3} + 3\\frac{1}{4} = -\\frac{8}{3} + \\frac{13}{4} = -\\frac{32}{12} + \\frac{39}{12} = \\frac{7}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-1\\frac{1}{6} - 3\\frac{1}{4}$$",
    "options": [
      "-4\\frac{5}{12}",
      "-4\\frac{7}{12}",
      "-3\\frac{5}{12}",
      "-4\\frac{1}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-1\\frac{1}{6} - 3\\frac{1}{4} = -\\frac{7}{6} - \\frac{13}{4} = -\\frac{14}{12} - \\frac{39}{12} = -\\frac{53}{12} = -4\\frac{5}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-2\\frac{1}{4} + \\left(-1\\frac{2}{3}\\right)$$",
    "options": [
      "-3\\frac{11}{12}",
      "-3\\frac{7}{12}",
      "-4\\frac{11}{12}",
      "-3\\frac{5}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-2\\frac{1}{4} - 1\\frac{2}{3} = -\\frac{9}{4} - \\frac{5}{3} = -\\frac{27}{12} - \\frac{20}{12} = -\\frac{47}{12} = -3\\frac{11}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-2\\frac{3}{4} - \\left(-4\\frac{2}{5}\\right)$$",
    "options": [
      "1\\frac{13}{20}",
      "2\\frac{13}{20}",
      "-1\\frac{13}{20}",
      "1\\frac{7}{20}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-2\\frac{3}{4} + 4\\frac{2}{5} = -\\frac{11}{4} + \\frac{22}{5} = -\\frac{55}{20} + \\frac{88}{20} = \\frac{33}{20} = 1\\frac{13}{20}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-3\\frac{3}{5} + \\left(-2\\frac{1}{3}\\right)$$",
    "options": [
      "-5\\frac{14}{15}",
      "-5\\frac{4}{15}",
      "-6\\frac{4}{15}",
      "-5\\frac{11}{15}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-3\\frac{3}{5} - 2\\frac{1}{3} = -\\frac{18}{5} - \\frac{7}{3} = -\\frac{54}{15} - \\frac{35}{15} = -\\frac{89}{15} = -5\\frac{14}{15}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Write the answer to this addition/subtraction: $$-1\\frac{1}{4} - \\left(-2\\frac{3}{7}\right)$$",
    "options": [
      "1\\frac{5}{28}",
      "1\\frac{9}{28}",
      "-1\\frac{5}{28}",
      "2\\frac{5}{28}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by converting to improper fractions and finding a common denominator:</p><p>$$-1\\frac{1}{4} + 2\\frac{3}{7} = -\\frac{5}{4} + \\frac{17}{7} = -\\frac{35}{28} + \\frac{68}{28} = \\frac{33}{28} = 1\\frac{5}{28}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression: $$\\frac{2}{3} - \\frac{1}{4} - \\frac{1}{6}$$",
    "options": [
      "\\frac{1}{4}",
      "\\frac{1}{12}",
      "-\\frac{1}{4}",
      "\\frac{5}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$\\frac{2}{3} - \\frac{1}{4} - \\frac{1}{6} = \\frac{8}{12} - \\frac{3}{12} - \\frac{2}{12} = \\frac{8 - 3 - 2}{12} = \\frac{3}{12} = \\frac{1}{4}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression: $$\\frac{2}{3} - \\left(-\\frac{1}{4}\\right) - \\frac{1}{6}$$",
    "options": [
      "\\frac{3}{4}",
      "\\frac{5}{12}",
      "-\\frac{3}{4}",
      "\\frac{11}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$\\frac{2}{3} + \\frac{1}{4} - \\frac{1}{6} = \\frac{8}{12} + \\frac{3}{12} - \\frac{2}{12} = \\frac{8 + 3 - 2}{12} = \\frac{9}{12} = \\frac{3}{4}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression: $$-\\frac{2}{3} + \\frac{1}{4} - \\frac{1}{6}$$",
    "options": [
      "-\\frac{7}{12}",
      "-\\frac{5}{12}",
      "-\\frac{9}{12}",
      "\\frac{7}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{2}{3} + \\frac{1}{4} - \\frac{1}{6} = -\\frac{8}{12} + \\frac{3}{12} - \\frac{2}{12} = \\frac{-8 + 3 - 2}{12} = -\\frac{7}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression: $$-\\frac{2}{3} - \\frac{1}{4} - \\left(-\\frac{1}{6}\\right)$$",
    "options": [
      "-\\frac{3}{4}",
      "-\\frac{5}{12}",
      "-\\frac{7}{12}",
      "-\\frac{11}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{2}{3} - \\frac{1}{4} + \\frac{1}{6} = -\\frac{8}{12} - \\frac{3}{12} + \\frac{2}{12} = \\frac{-8 - 3 + 2}{12} = -\\frac{9}{12} = -\\frac{3}{4}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression: $$\\frac{1}{3} - \\frac{3}{4} - \\frac{1}{6}$$",
    "options": [
      "-\\frac{7}{12}",
      "-\\frac{5}{12}",
      "-\\frac{11}{12}",
      "\\frac{7}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$\\frac{1}{3} - \\frac{3}{4} - \\frac{1}{6} = \\frac{4}{12} - \\frac{9}{12} - \\frac{2}{12} = \\frac{4 - 9 - 2}{12} = -\\frac{7}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  },
  {
    "chapterId": "y7-13",
    "chapterTitle": "Chapter 13: Negative fractions and decimals",
    "topicId": "y7-13a",
    "topicCode": "13A",
    "topicTitle": "Addition and subtraction of negative fractions",
    "year": "Year 7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "isActive": true,
    "isManual": true,
    "question": "Evaluate the expression: $$-\\frac{1}{3} - \\frac{3}{4} - \\frac{5}{6}$$",
    "options": [
      "-1\\frac{11}{12}",
      "-2\\frac{1}{12}",
      "-1\\frac{5}{12}",
      "-2\\frac{5}{12}"
    ],
    "answer": 0,
    "solution": "<div style=\"text-align: left;\"><p>Solving step-by-step by finding a common denominator:</p><p>$$-\\frac{1}{3} - \\frac{3}{4} - \\frac{5}{6} = -\\frac{4}{12} - \\frac{9}{12} - \\frac{10}{12} = -\\frac{23}{12} = -1\\frac{11}{12}$$</p></div>",
    "createdAt": "2026-05-17T13:25:33.610Z"
  }
];

export const importYear7Ch13A = async (forceReset = false) => {
  console.log('[Ch13A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch13 (13a to 13e) questions...');
      const topicsToDelete = ['y7-13a', 'y7-13b', 'y7-13c', 'y7-13d', 'y7-13e'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch13 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-13a', 'y7-13b', 'y7-13c', 'y7-13d', 'y7-13e'];
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
    console.log('[Ch13A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch13A Year 7 Import] ERROR:', error);
    return 0;
  }
};
