import { db } from '../firebase/config.js';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-3',
  chapterTitle: 'Chapter 3: Functions and graphs',
  year: 'Year 11',
  isManual: true
};

export const allQuestions3A = [
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(f(x) = 2x + 3\\), find \\(f(1)\\).',
    options: [
      { text: '5', imageUrl: '' },
      { text: '3', imageUrl: '' },
      { text: '-1', imageUrl: '' },
      { text: '11', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the function rule: \\(f(x) = 2x + 3\\).\\nStep 2: Replace \\(x\\) with \\(1\\) in the rule.\\nStep 3: Multiply by 2: \\(2 \\times (1) = 2\\).\\nStep 4: Add 3 to the result: \\(2 + 3 = 5\\).\\n\\nTherefore, the final answer is \\(5\\).',
    solutionSteps: [
      { explanation: 'First, identify the given function rule and the input value that will replace x.', workingOut: 'f(x) = 2x + 3, \\quad x = 1', graphData: null },
      { explanation: 'Substitute the input value 1 into the function rule wherever you see x.', workingOut: 'f(1) = 2(1) + 3', graphData: null },
      { explanation: 'Perform the multiplication first: multiply 2 by the input value 1.', workingOut: '2 \\times 1 = 2', graphData: null },
      { explanation: 'Now add 3 to this result to obtain the final output value.', workingOut: 'f(1) = 2 + 3 = 5', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(f(x) = 2x + 3\\), find \\(f(0)\\).',
    options: [
      { text: '3', imageUrl: '' },
      { text: '5', imageUrl: '' },
      { text: '0', imageUrl: '' },
      { text: '-3', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the function rule: \\(f(x) = 2x + 3\\).\\nStep 2: Replace \\(x\\) with \\(0\\) in the rule.\\nStep 3: Multiply by 2: \\(2 \\times (0) = 0\\).\\nStep 4: Add 3 to the result: \\(0 + 3 = 3\\).\\n\\nTherefore, the final answer is \\(3\\).',
    solutionSteps: [
      { explanation: 'First, identify the given function rule and the input value that will replace x.', workingOut: 'f(x) = 2x + 3, \\quad x = 0', graphData: null },
      { explanation: 'Substitute the input value 0 into the function rule wherever you see x.', workingOut: 'f(0) = 2(0) + 3', graphData: null },
      { explanation: 'Perform the multiplication first: multiply 2 by the input value 0.', workingOut: '2 \\times 0 = 0', graphData: null },
      { explanation: 'Now add 3 to this result to obtain the final output value.', workingOut: 'f(0) = 0 + 3 = 3', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(f(x) = 2x + 3\\), find \\(f(-2)\\).',
    options: [
      { text: '-1', imageUrl: '' },
      { text: '1', imageUrl: '' },
      { text: '-7', imageUrl: '' },
      { text: '-4', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the function rule: \\(f(x) = 2x + 3\\).\\nStep 2: Replace \\(x\\) with \\(-2\\) in the rule.\\nStep 3: Multiply by 2: \\(2 \\times (-2) = -4\\).\\nStep 4: Add 3 to the result: \\(-4 + 3 = -1\\).\\n\\nTherefore, the final answer is \\(-1\\).',
    solutionSteps: [
      { explanation: 'First, identify the given function rule and the input value that will replace x.', workingOut: 'f(x) = 2x + 3, \\quad x = -2', graphData: null },
      { explanation: 'Substitute the input value -2 into the function rule wherever you see x.', workingOut: 'f(-2) = 2(-2) + 3', graphData: null },
      { explanation: 'Perform the multiplication first: multiply 2 by the input value -2.', workingOut: '2 \\times -2 = -4', graphData: null },
      { explanation: 'Now add 3 to this result to obtain the final output value.', workingOut: 'f(-2) = -4 + 3 = -1', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(f(x) = 2x + 3\\), find \\(f(4)\\).',
    options: [
      { text: '11', imageUrl: '' },
      { text: '8', imageUrl: '' },
      { text: '14', imageUrl: '' },
      { text: '5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the function rule: \\(f(x) = 2x + 3\\).\\nStep 2: Replace \\(x\\) with \\(4\\) in the rule.\\nStep 3: Multiply by 2: \\(2 \\times (4) = 8\\).\\nStep 4: Add 3 to the result: \\(8 + 3 = 11\\).\\n\\nTherefore, the final answer is \\(11\\).',
    solutionSteps: [
      { explanation: 'First, identify the given function rule and the input value that will replace x.', workingOut: 'f(x) = 2x + 3, \\quad x = 4', graphData: null },
      { explanation: 'Substitute the input value 4 into the function rule wherever you see x.', workingOut: 'f(4) = 2(4) + 3', graphData: null },
      { explanation: 'Perform the multiplication first: multiply 2 by the input value 4.', workingOut: '2 \\times 4 = 8', graphData: null },
      { explanation: 'Now add 3 to this result to obtain the final output value.', workingOut: 'f(4) = 8 + 3 = 11', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Let \\(p(x) = x^2 - 2x - 3\\). Find \\(p(0)\\).',
    options: [
      { text: '-3', imageUrl: '' },
      { text: '0', imageUrl: '' },
      { text: '3', imageUrl: '' },
      { text: '-5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the function rule: \\(p(x) = x^2 - 2x - 3\\).\\nStep 2: Replace \\(x\\) with \\(0\\) in the rule: \\(p(0) = (0)^2 - 2(0) - 3\\).\\nStep 3: Square the input: \\((0)^2 = 0\\).\\nStep 4: Multiply the input by -2: \\(-2 \\times (0) = 0\\).\\nStep 5: Combine all numbers: \\(0 + (0) - 3 = -3\\).',
    solutionSteps: [
      { explanation: 'Identify the function formula and the input value 0.', workingOut: 'p(x) = x^2 - 2x - 3, \\quad x = 0', graphData: null },
      { explanation: 'Substitute the input value 0 into the expression in place of every x.', workingOut: 'p(0) = (0)^2 - 2(0) - 3', graphData: null },
      { explanation: 'Calculate the square of the input and the product of the linear term.', workingOut: '(0)^2 = 0, \\quad -2(0) = 0', graphData: null },
      { explanation: 'Add and subtract all terms together to get the final function value.', workingOut: 'p(0) = 0 + (0) - 3 = -3', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Let \\(p(x) = x^2 - 2x - 3\\). Find \\(p(4)\\).',
    options: [
      { text: '5', imageUrl: '' },
      { text: '16', imageUrl: '' },
      { text: '11', imageUrl: '' },
      { text: '-3', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the function rule: \\(p(x) = x^2 - 2x - 3\\).\\nStep 2: Replace \\(x\\) with \\(4\\) in the rule: \\(p(4) = (4)^2 - 2(4) - 3\\).\\nStep 3: Square the input: \\((4)^2 = 16\\).\\nStep 4: Multiply the input by -2: \\(-2 \\times (4) = -8\\).\\nStep 5: Combine all numbers: \\(16 + (-8) - 3 = 5\\).',
    solutionSteps: [
      { explanation: 'Identify the function formula and the input value 4.', workingOut: 'p(x) = x^2 - 2x - 3, \\quad x = 4', graphData: null },
      { explanation: 'Substitute the input value 4 into the expression in place of every x.', workingOut: 'p(4) = (4)^2 - 2(4) - 3', graphData: null },
      { explanation: 'Calculate the square of the input and the product of the linear term.', workingOut: '(4)^2 = 16, \\quad -2(4) = -8', graphData: null },
      { explanation: 'Add and subtract all terms together to get the final function value.', workingOut: 'p(4) = 16 + (-8) - 3 = 5', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Let \\(p(x) = x^2 - 2x - 3\\). Find \\(p(3)\\).',
    options: [
      { text: '0', imageUrl: '' },
      { text: '9', imageUrl: '' },
      { text: '-6', imageUrl: '' },
      { text: '3', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the function rule: \\(p(x) = x^2 - 2x - 3\\).\\nStep 2: Replace \\(x\\) with \\(3\\) in the rule: \\(p(3) = (3)^2 - 2(3) - 3\\).\\nStep 3: Square the input: \\((3)^2 = 9\\).\\nStep 4: Multiply the input by -2: \\(-2 \\times (3) = -6\\).\\nStep 5: Combine all numbers: \\(9 + (-6) - 3 = 0\\).',
    solutionSteps: [
      { explanation: 'Identify the function formula and the input value 3.', workingOut: 'p(x) = x^2 - 2x - 3, \\quad x = 3', graphData: null },
      { explanation: 'Substitute the input value 3 into the expression in place of every x.', workingOut: 'p(3) = (3)^2 - 2(3) - 3', graphData: null },
      { explanation: 'Calculate the square of the input and the product of the linear term.', workingOut: '(3)^2 = 9, \\quad -2(3) = -6', graphData: null },
      { explanation: 'Add and subtract all terms together to get the final function value.', workingOut: 'p(3) = 9 + (-6) - 3 = 0', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Let \\(p(x) = x^2 - 2x - 3\\). Find \\(p(-2)\\).',
    options: [
      { text: '5', imageUrl: '' },
      { text: '-3', imageUrl: '' },
      { text: '1', imageUrl: '' },
      { text: '-5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the function rule: \\(p(x) = x^2 - 2x - 3\\).\\nStep 2: Replace \\(x\\) with \\(-2\\) in the rule: \\(p(-2) = (-2)^2 - 2(-2) - 3\\).\\nStep 3: Square the input: \\((-2)^2 = 4\\).\\nStep 4: Multiply the input by -2: \\(-2 \\times (-2) = 4\\).\\nStep 5: Combine all numbers: \\(4 + (4) - 3 = 5\\).',
    solutionSteps: [
      { explanation: 'Identify the function formula and the input value -2.', workingOut: 'p(x) = x^2 - 2x - 3, \\quad x = -2', graphData: null },
      { explanation: 'Substitute the input value -2 into the expression in place of every x.', workingOut: 'p(-2) = (-2)^2 - 2(-2) - 3', graphData: null },
      { explanation: 'Calculate the square of the input and the product of the linear term.', workingOut: '(-2)^2 = 4, \\quad -2(-2) = 4', graphData: null },
      { explanation: 'Add and subtract all terms together to get the final function value.', workingOut: 'p(-2) = 4 + (4) - 3 = 5', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Find the value of the function \\(y = 5 + 2x - x^2\\) at \\(x = 0\\).',
    options: [
      { text: '5', imageUrl: '' },
      { text: '0', imageUrl: '' },
      { text: '7', imageUrl: '' },
      { text: '3', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the equation: \\(y = 5 + 2x - x^2\\).\\nStep 2: Replace \\(x\\) with \\(0\\) in the equation: \\(y = 5 + 2(0) - (0)^2\\).\\nStep 3: Calculate the linear term: \\(2 \\times (0) = 0\\).\\nStep 4: Calculate the squared term: \\((0)^2 = 0\\).\\nStep 5: Perform the addition and subtraction: \\(5 + (0) - 0 = 5\\).',
    solutionSteps: [
      { explanation: 'Identify the equation and the input value of x.', workingOut: 'y = 5 + 2x - x^2, \\quad x = 0', graphData: null },
      { explanation: 'Substitute the input value 0 into the equation.', workingOut: 'y = 5 + 2(0) - (0)^2', graphData: null },
      { explanation: 'Evaluate the algebraic operations: multiply the input term and square the input term.', workingOut: '2(0) = 0, \\quad (0)^2 = 0', graphData: null },
      { explanation: 'Combine all numerical terms to calculate y.', workingOut: 'y = 5 + (0) - 0 = 5', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Find the value of the function \\(y = 5 + 2x - x^2\\) at \\(x = 5\\).',
    options: [
      { text: '-10', imageUrl: '' },
      { text: '10', imageUrl: '' },
      { text: '5', imageUrl: '' },
      { text: '-20', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the equation: \\(y = 5 + 2x - x^2\\).\\nStep 2: Replace \\(x\\) with \\(5\\) in the equation: \\(y = 5 + 2(5) - (5)^2\\).\\nStep 3: Calculate the linear term: \\(2 \\times (5) = 10\\).\\nStep 4: Calculate the squared term: \\((5)^2 = 25\\).\\nStep 5: Perform the addition and subtraction: \\(5 + (10) - 25 = -10\\).',
    solutionSteps: [
      { explanation: 'Identify the equation and the input value of x.', workingOut: 'y = 5 + 2x - x^2, \\quad x = 5', graphData: null },
      { explanation: 'Substitute the input value 5 into the equation.', workingOut: 'y = 5 + 2(5) - (5)^2', graphData: null },
      { explanation: 'Evaluate the algebraic operations: multiply the input term and square the input term.', workingOut: '2(5) = 10, \\quad (5)^2 = 25', graphData: null },
      { explanation: 'Combine all numerical terms to calculate y.', workingOut: 'y = 5 + (10) - 25 = -10', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Find the value of the function \\(y = 5 + 2x - x^2\\) at \\(x = -2\\).',
    options: [
      { text: '-3', imageUrl: '' },
      { text: '3', imageUrl: '' },
      { text: '-1', imageUrl: '' },
      { text: '-5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the equation: \\(y = 5 + 2x - x^2\\).\\nStep 2: Replace \\(x\\) with \\(-2\\) in the equation: \\(y = 5 + 2(-2) - (-2)^2\\).\\nStep 3: Calculate the linear term: \\(2 \\times (-2) = -4\\).\\nStep 4: Calculate the squared term: \\((-2)^2 = 4\\).\\nStep 5: Perform the addition and subtraction: \\(5 + (-4) - 4 = -3\\).',
    solutionSteps: [
      { explanation: 'Identify the equation and the input value of x.', workingOut: 'y = 5 + 2x - x^2, \\quad x = -2', graphData: null },
      { explanation: 'Substitute the input value -2 into the equation.', workingOut: 'y = 5 + 2(-2) - (-2)^2', graphData: null },
      { explanation: 'Evaluate the algebraic operations: multiply the input term and square the input term.', workingOut: '2(-2) = -4, \\quad (-2)^2 = 4', graphData: null },
      { explanation: 'Combine all numerical terms to calculate y.', workingOut: 'y = 5 + (-4) - 4 = -3', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Find the value of the function \\(y = 5 + 2x - x^2\\) at \\(x = -1\\).',
    options: [
      { text: '2', imageUrl: '' },
      { text: '4', imageUrl: '' },
      { text: '6', imageUrl: '' },
      { text: '0', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Write down the equation: \\(y = 5 + 2x - x^2\\).\\nStep 2: Replace \\(x\\) with \\(-1\\) in the equation: \\(y = 5 + 2(-1) - (-1)^2\\).\\nStep 3: Calculate the linear term: \\(2 \\times (-1) = -2\\).\\nStep 4: Calculate the squared term: \\((-1)^2 = 1\\).\\nStep 5: Perform the addition and subtraction: \\(5 + (-2) - 1 = 2\\).',
    solutionSteps: [
      { explanation: 'Identify the equation and the input value of x.', workingOut: 'y = 5 + 2x - x^2, \\quad x = -1', graphData: null },
      { explanation: 'Substitute the input value -1 into the equation.', workingOut: 'y = 5 + 2(-1) - (-1)^2', graphData: null },
      { explanation: 'Evaluate the algebraic operations: multiply the input term and square the input term.', workingOut: '2(-1) = -2, \\quad (-1)^2 = 1', graphData: null },
      { explanation: 'Combine all numerical terms to calculate y.', workingOut: 'y = 5 + (-2) - 1 = 2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = 2x + 2\\), find \\(h(-3)\\) in simplest form.',
    options: [
      { text: '-4', imageUrl: '' },
      { text: '4', imageUrl: '' },
      { text: '-8', imageUrl: '' },
      { text: '-2', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = 2x + 2\\).\\nStep 2: Understand the rule: Multiply the input by 2, then add 2.\\nStep 3: Substitute \\(x = -3\\) into the formula: \\(h(-3) = 2(-3) + 2\\).\\nStep 4: Simplify the expression: \\(h(-3) = -6 + 2 = -4\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = 2x + 2, \\quad x = -3', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(-3) = 2(-3) + 2', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(-3) = -6 + 2 = -4', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = 2x + 2\\), find \\(h(1)\\) in simplest form.',
    options: [
      { text: '4', imageUrl: '' },
      { text: '2', imageUrl: '' },
      { text: '0', imageUrl: '' },
      { text: '6', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = 2x + 2\\).\\nStep 2: Understand the rule: Multiply the input by 2, then add 2.\\nStep 3: Substitute \\(x = 1\\) into the formula: \\(h(1) = 2(1) + 2\\).\\nStep 4: Simplify the expression: \\(h(1) = 2 + 2 = 4\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = 2x + 2, \\quad x = 1', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(1) = 2(1) + 2', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(1) = 2 + 2 = 4', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = 2x + 2\\), find \\(h(5)\\) in simplest form.',
    options: [
      { text: '12', imageUrl: '' },
      { text: '10', imageUrl: '' },
      { text: '14', imageUrl: '' },
      { text: '7', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = 2x + 2\\).\\nStep 2: Understand the rule: Multiply the input by 2, then add 2.\\nStep 3: Substitute \\(x = 5\\) into the formula: \\(h(5) = 2(5) + 2\\).\\nStep 4: Simplify the expression: \\(h(5) = 10 + 2 = 12\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = 2x + 2, \\quad x = 5', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(5) = 2(5) + 2', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(5) = 10 + 2 = 12', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = \\frac{1}{x}\\), find \\(h(-3)\\) in simplest form.',
    options: [
      { text: '-\\frac{1}{3}', imageUrl: '' },
      { text: '3', imageUrl: '' },
      { text: '-3', imageUrl: '' },
      { text: '\\frac{1}{3}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = \\frac{1}{x}\\).\\nStep 2: Understand the rule: Take the reciprocal of the input.\\nStep 3: Substitute \\(x = -3\\) into the formula: \\(h(-3) = \\frac{1}{-3}\\).\\nStep 4: Simplify the expression: \\(h(-3) = -\\frac{1}{3}\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = \\frac{1}{x}, \\quad x = -3', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(-3) = \\frac{1}{-3}', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(-3) = -\\frac{1}{3}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = \\frac{1}{x}\\), find \\(h(1)\\) in simplest form.',
    options: [
      { text: '1', imageUrl: '' },
      { text: '-1', imageUrl: '' },
      { text: '0', imageUrl: '' },
      { text: '\\frac{1}{2}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = \\frac{1}{x}\\).\\nStep 2: Understand the rule: Take the reciprocal of the input.\\nStep 3: Substitute \\(x = 1\\) into the formula: \\(h(1) = \\frac{1}{1}\\).\\nStep 4: Simplify the expression: \\(h(1) = 1\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = \\frac{1}{x}, \\quad x = 1', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(1) = \\frac{1}{1}', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(1) = 1', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = \\frac{1}{x}\\), find \\(h(5)\\) in simplest form.',
    options: [
      { text: '\\frac{1}{5}', imageUrl: '' },
      { text: '5', imageUrl: '' },
      { text: '-5', imageUrl: '' },
      { text: '-\\frac{1}{5}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = \\frac{1}{x}\\).\\nStep 2: Understand the rule: Take the reciprocal of the input.\\nStep 3: Substitute \\(x = 5\\) into the formula: \\(h(5) = \\frac{1}{5}\\).\\nStep 4: Simplify the expression: \\(h(5) = \\frac{1}{5}\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = \\frac{1}{x}, \\quad x = 5', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(5) = \\frac{1}{5}', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(5) = \\frac{1}{5}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = 3x - x^2\\), find \\(h(-3)\\) in simplest form.',
    options: [
      { text: '-18', imageUrl: '' },
      { text: '0', imageUrl: '' },
      { text: '-9', imageUrl: '' },
      { text: '-12', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = 3x - x^2\\).\\nStep 2: Understand the rule: Multiply the input by 3, then subtract the square of the input.\\nStep 3: Substitute \\(x = -3\\) into the formula: \\(h(-3) = 3(-3) - (-3)^2\\).\\nStep 4: Simplify the expression: \\(h(-3) = -9 - 9 = -18\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = 3x - x^2, \\quad x = -3', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(-3) = 3(-3) - (-3)^2', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(-3) = -9 - 9 = -18', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = 3x - x^2\\), find \\(h(1)\\) in simplest form.',
    options: [
      { text: '2', imageUrl: '' },
      { text: '4', imageUrl: '' },
      { text: '3', imageUrl: '' },
      { text: '0', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = 3x - x^2\\).\\nStep 2: Understand the rule: Multiply the input by 3, then subtract the square of the input.\\nStep 3: Substitute \\(x = 1\\) into the formula: \\(h(1) = 3(1) - 1^2\\).\\nStep 4: Simplify the expression: \\(h(1) = 3 - 1 = 2\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = 3x - x^2, \\quad x = 1', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(1) = 3(1) - 1^2', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(1) = 3 - 1 = 2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = 3x - x^2\\), find \\(h(5)\\) in simplest form.',
    options: [
      { text: '-10', imageUrl: '' },
      { text: '10', imageUrl: '' },
      { text: '-20', imageUrl: '' },
      { text: '15', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = 3x - x^2\\).\\nStep 2: Understand the rule: Multiply the input by 3, then subtract the square of the input.\\nStep 3: Substitute \\(x = 5\\) into the formula: \\(h(5) = 3(5) - 5^2\\).\\nStep 4: Simplify the expression: \\(h(5) = 15 - 25 = -10\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = 3x - x^2, \\quad x = 5', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(5) = 3(5) - 5^2', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(5) = 15 - 25 = -10', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = \\sqrt{x+4}\\), find \\(h(-3)\\) in simplest form.',
    options: [
      { text: '1', imageUrl: '' },
      { text: '-1', imageUrl: '' },
      { text: '7', imageUrl: '' },
      { text: '0', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = \\sqrt{x+4}\\).\\nStep 2: Understand the rule: Add 4 to the input, then take the square root of the result.\\nStep 3: Substitute \\(x = -3\\) into the formula: \\(h(-3) = \\sqrt{-3+4}\\).\\nStep 4: Simplify the expression: \\(h(-3) = \\sqrt{1} = 1\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = \\sqrt{x+4}, \\quad x = -3', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(-3) = \\sqrt{-3+4}', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(-3) = \\sqrt{1} = 1', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = \\sqrt{x+4}\\), find \\(h(1)\\) in simplest form.',
    options: [
      { text: '2.236', imageUrl: '' },
      { text: '2.000', imageUrl: '' },
      { text: '5.000', imageUrl: '' },
      { text: '2.500', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = \\sqrt{x+4}\\).\\nStep 2: Understand the rule: Add 4 to the input, then take the square root of the result.\\nStep 3: Substitute \\(x = 1\\) into the formula: \\(h(1) = \\sqrt{1+4}\\).\\nStep 4: Simplify the expression: \\(h(1) = \\sqrt{5} \\approx 2.236\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = \\sqrt{x+4}, \\quad x = 1', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(1) = \\sqrt{1+4}', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(1) = \\sqrt{5} \\approx 2.236', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(h(x) = \\sqrt{x+4}\\), find \\(h(5)\\) in simplest form.',
    options: [
      { text: '3', imageUrl: '' },
      { text: '9', imageUrl: '' },
      { text: '2', imageUrl: '' },
      { text: '5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Identify the function: \\(h(x) = \\sqrt{x+4}\\).\\nStep 2: Understand the rule: Add 4 to the input, then take the square root of the result.\\nStep 3: Substitute \\(x = 5\\) into the formula: \\(h(5) = \\sqrt{5+4}\\).\\nStep 4: Simplify the expression: \\(h(5) = \\sqrt{9} = 3\\).',
    solutionSteps: [
      { explanation: 'Identify the given function and the input x.', workingOut: 'h(x) = \\sqrt{x+4}, \\quad x = 5', graphData: null },
      { explanation: 'Substitute the input value into the function formula in place of x.', workingOut: 'h(5) = \\sqrt{5+4}', graphData: null },
      { explanation: 'Simplify the expression to find the final function value.', workingOut: 'h(5) = \\sqrt{9} = 3', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = 3x + 1\\), write the formula for \\(g(t)\\) in simplest form.',
    options: [
      { text: '3t + 1', imageUrl: '' },
      { text: '3x + 1', imageUrl: '' },
      { text: 't + 1', imageUrl: '' },
      { text: '3t', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Understand that the letter \\(x\\) in the rule \\(g(x) = 3x + 1\\) represents the input spot.\\nStep 2: We want to find the rule when the input is a new variable \\(t\\).\\nStep 3: Carefully replace every single \\(x\\) in the formula with \\(t\\).\\nStep 4: Write down the resulting equation: \\(g(t) = 3t + 1\\).',
    solutionSteps: [
      { explanation: 'Understand variable substitution: in a function rule, x acts as a placeholder for any input.', workingOut: 'g(x) = 3x + 1', graphData: null },
      { explanation: 'Replace all occurrences of x with the new variable t in the expression.', workingOut: 'g(t) = 3t + 1', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = x^2 - 2x + 8\\), write the formula for \\(g(t)\\) in simplest form.',
    options: [
      { text: 't^2 - 2t + 8', imageUrl: '' },
      { text: 'x^2 - 2x + 8', imageUrl: '' },
      { text: 't^2 - 2x + 8', imageUrl: '' },
      { text: 't^2 + 2t + 8', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Understand that the letter \\(x\\) in the rule \\(g(x) = x^2 - 2x + 8\\) represents the input spot.\\nStep 2: We want to find the rule when the input is a new variable \\(t\\).\\nStep 3: Carefully replace every single \\(x\\) in the formula with \\(t\\).\\nStep 4: Write down the resulting equation: \\(g(t) = t^2 - 2t + 8\\).',
    solutionSteps: [
      { explanation: 'Understand variable substitution: in a function rule, x acts as a placeholder for any input.', workingOut: 'g(x) = x^2 - 2x + 8', graphData: null },
      { explanation: 'Replace all occurrences of x with the new variable t in the expression.', workingOut: 'g(t) = t^2 - 2t + 8', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = x - \\sqrt{x}\\), write the formula for \\(g(t)\\) in simplest form.',
    options: [
      { text: 't - \\sqrt{t}', imageUrl: '' },
      { text: 'x - \\sqrt{x}', imageUrl: '' },
      { text: 't - \\sqrt{x}', imageUrl: '' },
      { text: 't - t', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Understand that the letter \\(x\\) in the rule \\(g(x) = x - \\sqrt{x}\\) represents the input spot.\\nStep 2: We want to find the rule when the input is a new variable \\(t\\).\\nStep 3: Carefully replace every single \\(x\\) in the formula with \\(t\\).\\nStep 4: Write down the resulting equation: \\(g(t) = t - \\sqrt{t}\\).',
    solutionSteps: [
      { explanation: 'Understand variable substitution: in a function rule, x acts as a placeholder for any input.', workingOut: 'g(x) = x - \\sqrt{x}', graphData: null },
      { explanation: 'Replace all occurrences of x with the new variable t in the expression.', workingOut: 'g(t) = t - \\sqrt{t}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Substitute \\(x = p - 1\\) into \\(y = 2 - x\\), then expand and simplify.',
    options: [
      { text: '3 - p', imageUrl: '' },
      { text: '1 - p', imageUrl: '' },
      { text: '3 + p', imageUrl: '' },
      { text: '2 - p', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Write down the original equation: \\(y = 2 - x\\).\\nStep 2: Replace \\(x\\) with the expression \\(x = p - 1\\). Always use parentheses to avoid negative sign mistakes!\\n\\t\\(y = 2 - (p - 1)\\).\\nStep 3: Expand the brackets carefully: \\(2 - p + 1 = 3 - p\\).',
    solutionSteps: [
      { explanation: 'Substitute the expression x = p - 1 in place of x in the original equation y = 2 - x, utilizing parentheses for accuracy.', workingOut: 'y = 2 - (p - 1)', graphData: null },
      { explanation: 'Expand brackets and group like algebraic terms to simplify the expression.', workingOut: '2 - p + 1 = 3 - p', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Substitute \\(x = q + 2\\) into \\(y = 2x - 5\\), then expand and simplify.',
    options: [
      { text: '2q - 1', imageUrl: '' },
      { text: '2q + 9', imageUrl: '' },
      { text: '2q - 5', imageUrl: '' },
      { text: 'q - 1', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Write down the original equation: \\(y = 2x - 5\\).\\nStep 2: Replace \\(x\\) with the expression \\(x = q + 2\\). Always use parentheses to avoid negative sign mistakes!\\n\\t\\(y = 2(q + 2) - 5\\).\\nStep 3: Expand the brackets carefully: \\(2q + 4 - 5 = 2q - 1\\).',
    solutionSteps: [
      { explanation: 'Substitute the expression x = q + 2 in place of x in the original equation y = 2x - 5, utilizing parentheses for accuracy.', workingOut: 'y = 2(q + 2) - 5', graphData: null },
      { explanation: 'Expand brackets and group like algebraic terms to simplify the expression.', workingOut: '2q + 4 - 5 = 2q - 1', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Substitute \\(x = a + 1\\) into \\(y = x^2 - x\\), then expand and simplify.',
    options: [
      { text: 'a^2 + a', imageUrl: '' },
      { text: 'a^2 - a', imageUrl: '' },
      { text: 'a^2 + 2a', imageUrl: '' },
      { text: 'a^2 + a + 1', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Write down the original equation: \\(y = x^2 - x\\).\\nStep 2: Replace \\(x\\) with the expression \\(x = a + 1\\). Always use parentheses to avoid negative sign mistakes!\\n\\t\\(y = (a + 1)^2 - (a + 1)\\).\\nStep 3: Expand the brackets carefully: \\((a^2 + 2a + 1) - a - 1 = a^2 + a\\).',
    solutionSteps: [
      { explanation: 'Substitute the expression x = a + 1 in place of x in the original equation y = x^2 - x, utilizing parentheses for accuracy.', workingOut: 'y = (a + 1)^2 - (a + 1)', graphData: null },
      { explanation: 'Expand brackets and group like algebraic terms to simplify the expression.', workingOut: '(a^2 + 2a + 1) - a - 1 = a^2 + a', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'easy',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Substitute \\(x = b - 2\\) into \\(y = x^2 - 3x - 4\\), then expand and simplify.',
    options: [
      { text: 'b^2 - 7b + 6', imageUrl: '' },
      { text: 'b^2 - 7b - 6', imageUrl: '' },
      { text: 'b^2 - 3b - 6', imageUrl: '' },
      { text: 'b^2 - b - 6', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Write down the original equation: \\(y = x^2 - 3x - 4\\).\\nStep 2: Replace \\(x\\) with the expression \\(x = b - 2\\). Always use parentheses to avoid negative sign mistakes!\\n\\t\\(y = (b - 2)^2 - 3(b - 2) - 4\\).\\nStep 3: Expand the brackets carefully: \\((b^2 - 4b + 4) - 3b + 6 - 4 = b^2 - 7b + 6\\).',
    solutionSteps: [
      { explanation: 'Substitute the expression x = b - 2 in place of x in the original equation y = x^2 - 3x - 4, utilizing parentheses for accuracy.', workingOut: 'y = (b - 2)^2 - 3(b - 2) - 4', graphData: null },
      { explanation: 'Expand brackets and group like algebraic terms to simplify the expression.', workingOut: '(b^2 - 4b + 4) - 3b + 6 - 4 = b^2 - 7b + 6', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Complete the table of values for \\(y = 2x + 1\\) at \\(x = [-1, 0, 1]\\). What is the correct sequence of \\(y\\)-values?',
    options: [
      { text: '[-1, 1, 3]', imageUrl: '' },
      { text: '[-1, 0, 1]', imageUrl: '' },
      { text: '[1, 2, 3]', imageUrl: '' },
      { text: '[-2, 0, 2]', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate the output for each value in the domain step-by-step:\\n\\nFor x = -1: 2(-1)+1 = -1.\\nFor x = 0: 2(0)+1 = 1.\\nFor x = 1: 2(1)+1 = 3.',
    solutionSteps: [
      {
            "explanation": "Substitute x = -1 into the function rule to find the corresponding y-value.",
            "workingOut": "2(-1)+1 = -1",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 0 into the function rule to find the corresponding y-value.",
            "workingOut": "2(0)+1 = 1",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 1 into the function rule to find the corresponding y-value.",
            "workingOut": "2(1)+1 = 3",
            "graphData": null
      }
]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Complete the table of values for \\(y = x^2 - 2x\\) at \\(x = [-1, 0, 1, 2, 3]\\). What is the correct sequence of \\(y\\)-values?',
    options: [
      { text: '[3, 0, -1, 0, 3]', imageUrl: '' },
      { text: '[3, 0, 1, 4, 9]', imageUrl: '' },
      { text: '[1, 0, -1, 0, 1]', imageUrl: '' },
      { text: '[2, 0, -2, 0, 2]', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate the output for each value in the domain step-by-step:\\n\\nFor x = -1: (-1)^2-2(-1) = 3.\\nFor x = 0: 0^2-2(0) = 0.\\nFor x = 1: 1^2-2(1) = -1.\\nFor x = 2: 2^2-2(2) = 0.\\nFor x = 3: 3^2-2(3) = 3.',
    solutionSteps: [
      {
            "explanation": "Substitute x = -1 into the function rule to find the corresponding y-value.",
            "workingOut": "(-1)^2-2(-1) = 3",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 0 into the function rule to find the corresponding y-value.",
            "workingOut": "0^2-2(0) = 0",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 1 into the function rule to find the corresponding y-value.",
            "workingOut": "1^2-2(1) = -1",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 2 into the function rule to find the corresponding y-value.",
            "workingOut": "2^2-2(2) = 0",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 3 into the function rule to find the corresponding y-value.",
            "workingOut": "3^2-2(3) = 3",
            "graphData": null
      }
]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Complete the table of values for \\(f(x) = 1 - x^2\\) at \\(x = [-2, -1, 0, 1, 2]\\). What is the correct sequence of \\(y\\)-values?',
    options: [
      { text: '[-3, 0, 1, 0, -3]', imageUrl: '' },
      { text: '[5, 2, 1, 2, 5]', imageUrl: '' },
      { text: '[-3, -1, 0, -1, -3]', imageUrl: '' },
      { text: '[3, 0, 1, 0, 3]', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate the output for each value in the domain step-by-step:\\n\\nFor x = -2: 1-(-2)^2 = -3.\\nFor x = -1: 1-(-1)^2 = 0.\\nFor x = 0: 1-0^2 = 1.\\nFor x = 1: 1-1^2 = 0.\\nFor x = 2: 1-2^2 = -3.',
    solutionSteps: [
      {
            "explanation": "Substitute x = -2 into the function rule to find the corresponding y-value.",
            "workingOut": "1-(-2)^2 = -3",
            "graphData": null
      },
      {
            "explanation": "Substitute x = -1 into the function rule to find the corresponding y-value.",
            "workingOut": "1-(-1)^2 = 0",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 0 into the function rule to find the corresponding y-value.",
            "workingOut": "1-0^2 = 1",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 1 into the function rule to find the corresponding y-value.",
            "workingOut": "1-1^2 = 0",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 2 into the function rule to find the corresponding y-value.",
            "workingOut": "1-2^2 = -3",
            "graphData": null
      }
]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Complete the table of values for \\(f(x) = x^3 - 4x\\) at \\(x = [-3, -2, -1, 0, 1, 2, 3]\\). What is the correct sequence of \\(y\\)-values?',
    options: [
      { text: '[-15, 0, 3, 0, -3, 0, 15]', imageUrl: '' },
      { text: '[-15, 0, -3, 0, 3, 0, 15]', imageUrl: '' },
      { text: '[15, 0, 3, 0, -3, 0, -15]', imageUrl: '' },
      { text: '[-27, -8, -1, 0, 1, 8, 27]', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate the output for each value in the domain step-by-step:\\n\\nFor x = -3: (-3)^3-4(-3) = -15.\\nFor x = -2: (-2)^3-4(-2) = 0.\\nFor x = -1: (-1)^3-4(-1) = 3.\\nFor x = 0: 0-0 = 0.\\nFor x = 1: 1^3-4(1) = -3.\\nFor x = 2: 2^3-4(2) = 0.\\nFor x = 3: 3^3-4(3) = 15.',
    solutionSteps: [
      {
            "explanation": "Substitute x = -3 into the function rule to find the corresponding y-value.",
            "workingOut": "(-3)^3-4(-3) = -15",
            "graphData": null
      },
      {
            "explanation": "Substitute x = -2 into the function rule to find the corresponding y-value.",
            "workingOut": "(-2)^3-4(-2) = 0",
            "graphData": null
      },
      {
            "explanation": "Substitute x = -1 into the function rule to find the corresponding y-value.",
            "workingOut": "(-1)^3-4(-1) = 3",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 0 into the function rule to find the corresponding y-value.",
            "workingOut": "0-0 = 0",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 1 into the function rule to find the corresponding y-value.",
            "workingOut": "1^3-4(1) = -3",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 2 into the function rule to find the corresponding y-value.",
            "workingOut": "2^3-4(2) = 0",
            "graphData": null
      },
      {
            "explanation": "Substitute x = 3 into the function rule to find the corresponding y-value.",
            "workingOut": "3^3-4(3) = 15",
            "graphData": null
      }
]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Translate the following statement into a function rule: "I think of a number, then subtract the square of that number from 6."',
    options: [
      { text: 'f(x) = 6 - x^2', imageUrl: '' },
      { text: 'f(x) = x^2 - 6', imageUrl: '' },
      { text: 'f(x) = (6 - x)^2', imageUrl: '' },
      { text: 'f(x) = 6 - 2x', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us translate the statement word-by-word:\n\nStep 1: "I think of a number" $\\implies$ Let this number be variable \\(x\\).\nStep 2: "the square of that number" $\\implies$ \\(x^2\\).\nStep 3: "subtract ... from 6" $\\implies$ Start with 6, and subtract the term: \\(6 - x^2\\).\n\nTherefore, the function rule is \\(f(x) = 6 - x^2\\).',
    solutionSteps: [
      { explanation: 'Define the starting variable x to represent the number you think of.', workingOut: 'x', graphData: null },
      { explanation: 'Form the term representing the square of that number.', workingOut: 'x^2', graphData: null },
      { explanation: 'Subtract the squared term from 6.', workingOut: 'f(x) = 6 - x^2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Using the function rule \\(f(x) = 6 - x^2\\) (subtracting the square of a number from 6), what is the value of \\(f(-2)\\)?',
    options: [
      { text: '2', imageUrl: '' },
      { text: '10', imageUrl: '' },
      { text: '4', imageUrl: '' },
      { text: '-2', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us evaluate step-by-step:\n\nStep 1: Write down the function: \\(f(x) = 6 - x^2\\).\nStep 2: Replace \\(x\\) with \\(-2\\): \\(f(-2) = 6 - (-2)^2\\).\nStep 3: Compute the square of the negative number: \\((-2)^2 = 4\\) (since a negative times a negative is positive).\nStep 4: Subtract this from 6: \\(6 - 4 = 2\\).',
    solutionSteps: [
      { explanation: 'Substitute the input value -2 into the function formula rule.', workingOut: 'f(-2) = 6 - (-2)^2', graphData: null },
      { explanation: 'Evaluate the squared term (-2)^2. Remember that any negative number squared becomes positive.', workingOut: '(-2)^2 = 4', graphData: null },
      { explanation: 'Subtract the squared value from 6 to get the final output value.', workingOut: 'f(-2) = 6 - 4 = 2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'For the function \\(L(x) = 3x + 1\\), determine the value of \\(L(1) - 2\\).',
    options: [
      { text: '2', imageUrl: '' },
      { text: '4', imageUrl: '' },
      { text: '0', imageUrl: '' },
      { text: '-1', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Find the value of each function term first: \\(L(1) = 3(1) + 1 = 4\\).\\nStep 2: Substitute these values back and perform the final operation: \\(L(1) - 2 = 4 - 2 = 2\\).',
    solutionSteps: [
      { explanation: 'Calculate individual function values by substituting the inputs into L(x) = 3x + 1.', workingOut: 'L(1) = 3(1) + 1 = 4', graphData: null },
      { explanation: 'Substitute these values back and carry out the final mathematical operation.', workingOut: 'L(1) - 2 = 4 - 2 = 2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'For the function \\(L(x) = 3x + 1\\), determine the value of \\(3L(-1)\\).',
    options: [
      { text: '-6', imageUrl: '' },
      { text: '-9', imageUrl: '' },
      { text: '-3', imageUrl: '' },
      { text: '6', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Find the value of each function term first: \\(L(-1) = 3(-1) + 1 = -2\\).\\nStep 2: Substitute these values back and perform the final operation: \\(3L(-1) = 3 \\times (-2) = -6\\).',
    solutionSteps: [
      { explanation: 'Calculate individual function values by substituting the inputs into L(x) = 3x + 1.', workingOut: 'L(-1) = 3(-1) + 1 = -2', graphData: null },
      { explanation: 'Substitute these values back and carry out the final mathematical operation.', workingOut: '3L(-1) = 3 \\times (-2) = -6', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'For the function \\(L(x) = 3x + 1\\), determine the value of \\(L(1) + L(2)\\).',
    options: [
      { text: '11', imageUrl: '' },
      { text: '12', imageUrl: '' },
      { text: '9', imageUrl: '' },
      { text: '15', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Find the value of each function term first: \\(L(1) = 4, \\; L(2) = 3(2) + 1 = 7\\).\\nStep 2: Substitute these values back and perform the final operation: \\(L(1) + L(2) = 4 + 7 = 11\\).',
    solutionSteps: [
      { explanation: 'Calculate individual function values by substituting the inputs into L(x) = 3x + 1.', workingOut: 'L(1) = 4, \\; L(2) = 3(2) + 1 = 7', graphData: null },
      { explanation: 'Substitute these values back and carry out the final mathematical operation.', workingOut: 'L(1) + L(2) = 4 + 7 = 11', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'For the function \\(L(x) = 3x + 1\\), determine the value of \\(L(9) \\div L(2)\\).',
    options: [
      { text: '4', imageUrl: '' },
      { text: '3', imageUrl: '' },
      { text: '\\frac{28}{7}', imageUrl: '' },
      { text: '5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us calculate step-by-step:\\n\\nStep 1: Find the value of each function term first: \\(L(9) = 3(9) + 1 = 28, \\; L(2) = 7\\).\\nStep 2: Substitute these values back and perform the final operation: \\(L(9) \\div L(2) = 28 \\div 7 = 4\\).',
    solutionSteps: [
      { explanation: 'Calculate individual function values by substituting the inputs into L(x) = 3x + 1.', workingOut: 'L(9) = 3(9) + 1 = 28, \\; L(2) = 7', graphData: null },
      { explanation: 'Substitute these values back and carry out the final mathematical operation.', workingOut: 'L(9) \\div L(2) = 28 \\div 7 = 4', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Given that \\(P(x) = x^2 - 2x - 4\\), find the value of \\(P(\\sqrt{2})\\) in simplest form.',
    options: [
      { text: '-2 - 2\\sqrt{2}', imageUrl: '' },
      { text: '2 - 2\\sqrt{2}', imageUrl: '' },
      { text: '-2 + 2\\sqrt{2}', imageUrl: '' },
      { text: '-6 - 2\\sqrt{2}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Write down the function with the root input: \\(P(\\sqrt{2}) = (\\sqrt{2})^2 - 2(\\sqrt{2}) - 4\\).\\nStep 2: Calculate the square of the root: \\((\\sqrt{2})^2 = 2\\).\\nStep 3: Group the rational numbers and subtract: \\(2 - 2\\sqrt{2} - 4 = -2 - 2\\sqrt{2}\\).',
    solutionSteps: [
      { explanation: 'Substitute the surd input value \\sqrt{2} into the quadratic function.', workingOut: 'P(\\sqrt{2}) = (\\sqrt{2})^2 - 2(\\sqrt{2}) - 4', graphData: null },
      { explanation: 'Evaluate the squared surd term. Remember that squaring a square root cancels the root out.', workingOut: '(\\sqrt{2})^2 = 2', graphData: null },
      { explanation: 'Combine the rational numbers together and group the surd term to get the final simplified expression.', workingOut: '2 - 2\\sqrt{2} - 4 = -2 - 2\\sqrt{2}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Given that \\(P(x) = x^2 - 2x - 4\\), find the value of \\(P(\\sqrt{7})\\) in simplest form.',
    options: [
      { text: '3 - 2\\sqrt{7}', imageUrl: '' },
      { text: '11 - 2\\sqrt{7}', imageUrl: '' },
      { text: '3 + 2\\sqrt{7}', imageUrl: '' },
      { text: '-3 - 2\\sqrt{7}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Write down the function with the root input: \\(P(\\sqrt{7}) = (\\sqrt{7})^2 - 2(\\sqrt{7}) - 4\\).\\nStep 2: Calculate the square of the root: \\((\\sqrt{7})^2 = 7\\).\\nStep 3: Group the rational numbers and subtract: \\(7 - 2\\sqrt{7} - 4 = 3 - 2\\sqrt{7}\\).',
    solutionSteps: [
      { explanation: 'Substitute the surd input value \\sqrt{7} into the quadratic function.', workingOut: 'P(\\sqrt{7}) = (\\sqrt{7})^2 - 2(\\sqrt{7}) - 4', graphData: null },
      { explanation: 'Evaluate the squared surd term. Remember that squaring a square root cancels the root out.', workingOut: '(\\sqrt{7})^2 = 7', graphData: null },
      { explanation: 'Combine the rational numbers together and group the surd term to get the final simplified expression.', workingOut: '7 - 2\\sqrt{7} - 4 = 3 - 2\\sqrt{7}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Write \\(3x + 4y + 5 = 0\\) as a function with x.',
    options: [
      { text: 'y = -\\frac{3}{4}x - \\frac{5}{4}', imageUrl: '' },
      { text: 'y = -\\frac{4}{3}x - \\frac{5}{3}', imageUrl: '' },
      { text: 'y = \\frac{3}{4}x + \\frac{5}{4}', imageUrl: '' },
      { text: 'y = -3x - 5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us rearrange the formula step-by-step:\\n\\nStep 1: Rearrange the equation to isolate the term with y. Start by subtracting 3x and 5 from both sides.\\n\\nStep 2: Divide every term on both sides of the equation by 4 to solve for y completely.',
    solutionSteps: [
      { explanation: 'Rearrange the equation to isolate the term with y. Start by subtracting 3x and 5 from both sides.', workingOut: '4y = -3x - 5', graphData: null }, { explanation: 'Divide every term on both sides of the equation by 4 to solve for y completely.', workingOut: 'y = -\\frac{3}{4}x - \\frac{5}{4}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Write \\(3x + 4y + 5 = 0\\) as a function with y.',
    options: [
      { text: 'x = -\\frac{4}{3}y - \\frac{5}{3}', imageUrl: '' },
      { text: 'x = -\\frac{3}{4}y - \\frac{5}{4}', imageUrl: '' },
      { text: 'x = \\frac{4}{3}y + \\frac{5}{3}', imageUrl: '' },
      { text: 'x = -4y - 5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us rearrange the formula step-by-step:\\n\\nStep 1: Rearrange the equation to isolate the term with x. Start by subtracting 4y and 5 from both sides.\\n\\nStep 2: Divide every term on both sides of the equation by 3 to solve for x completely.',
    solutionSteps: [
      { explanation: 'Rearrange the equation to isolate the term with x. Start by subtracting 4y and 5 from both sides.', workingOut: '3x = -4y - 5', graphData: null }, { explanation: 'Divide every term on both sides of the equation by 3 to solve for x completely.', workingOut: 'x = -\\frac{4}{3}y - \\frac{5}{3}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Write \\(4 + xy = 0\\) as a function with y.',
    options: [
      { text: 'y = -\\frac{4}{x}', imageUrl: '' },
      { text: 'y = \\frac{4}{x}', imageUrl: '' },
      { text: 'y = -\\frac{x}{4}', imageUrl: '' },
      { text: 'y = x - 4', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us rearrange the formula step-by-step:\\n\\nStep 1: Rearrange the equation to isolate the product xy by subtracting 4 from both sides.\\n\\nStep 2: Divide both sides of the equation by x to isolate y.',
    solutionSteps: [
      { explanation: 'Rearrange the equation to isolate the product xy by subtracting 4 from both sides.', workingOut: 'xy = -4', graphData: null }, { explanation: 'Divide both sides of the equation by x to isolate y.', workingOut: 'y = -\\frac{4}{x}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Write \\(V = s^3\\) as a function with s.',
    options: [
      { text: 's = \\sqrt[3]{V}', imageUrl: '' },
      { text: 's = V^3', imageUrl: '' },
      { text: 's = \\sqrt{V}', imageUrl: '' },
      { text: 's = 3V', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us rearrange the formula step-by-step:\\n\\nStep 1: To make s the subject of the equation, apply the inverse operation of cubing, which is taking the cube root, to both sides.',
    solutionSteps: [
      { explanation: 'To make s the subject of the equation, apply the inverse operation of cubing, which is taking the cube root, to both sides.', workingOut: 's = \\sqrt[3]{V}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Write \\(A = 6s^2\\) as a function with s.',
    options: [
      { text: 's = \\sqrt{\\frac{A}{6}}', imageUrl: '' },
      { text: 's = \\frac{A}{6}', imageUrl: '' },
      { text: 's = 6\\sqrt{A}', imageUrl: '' },
      { text: 's = (\\frac{A}{6})^2', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us rearrange the formula step-by-step:\\n\\nStep 1: First, isolate the squared term s^2 by dividing both sides of the equation by 6.\\n\\nStep 2: Next, solve for s by taking the square root of both sides. Since side length s must be positive, we only keep the positive root.',
    solutionSteps: [
      { explanation: 'First, isolate the squared term s^2 by dividing both sides of the equation by 6.', workingOut: 's^2 = \\frac{A}{6}', graphData: null }, { explanation: 'Next, solve for s by taking the square root of both sides. Since side length s must be positive, we only keep the positive root.', workingOut: 's = \\sqrt{\\frac{A}{6}}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Write \\(lb = 100\\) as a function with l as dependent.',
    options: [
      { text: 'l = \\frac{100}{b}', imageUrl: '' },
      { text: 'l = \\frac{b}{100}', imageUrl: '' },
      { text: 'l = 100b', imageUrl: '' },
      { text: 'l = 100 - b', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us rearrange the formula step-by-step:\\n\\nStep 1: To express l as the dependent variable, we must make it the subject of the equation by dividing both sides by b.',
    solutionSteps: [
      { explanation: 'To express l as the dependent variable, we must make it the subject of the equation by dividing both sides by b.', workingOut: 'l = \\frac{100}{b}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Write \\(lb = 100\\) as a function with l as independent.',
    options: [
      { text: 'b = \\frac{100}{l}', imageUrl: '' },
      { text: 'b = \\frac{l}{100}', imageUrl: '' },
      { text: 'b = 100 - l', imageUrl: '' },
      { text: 'l = \\frac{100}{b}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us rearrange the formula step-by-step:\\n\\nStep 1: To make l the independent variable, the other variable b must be the subject. Solve for b by dividing both sides by l.',
    solutionSteps: [
      { explanation: 'To make l the independent variable, the other variable b must be the subject. Solve for b by dividing both sides by l.', workingOut: 'b = \\frac{100}{l}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'A restaurant offers a special deal to groups by charging a cover fee of $50, then $20 per person. Write down \\(C\\), the total cost of the meal in dollars, as a function of \\(x\\), the number of people in the group.',
    options: [
      { text: 'C = 50 + 20x', imageUrl: '' },
      { text: 'C = 20 + 50x', imageUrl: '' },
      { text: 'C = 70x', imageUrl: '' },
      { text: 'C = 50 - 20x', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us build the cost function step-by-step:\n\nStep 1: Identify the fixed cost. The cover fee is a one-off fee that does not depend on the number of people: $50.\nStep 2: Identify the variable cost. Each person costs $20. So, for \\(x\\) people, it is \\(20 \\times x = 20x\\) dollars.\nStep 3: Sum the fixed and variable costs to get the total cost \\(C\\): \\(C = 50 + 20x\\).',
    solutionSteps: [
      { explanation: 'Identify fixed cost, which is the cover fee charged regardless of group size.', workingOut: '50', graphData: null },
      { explanation: 'Determine variable cost, multiplying price per person by group size x.', workingOut: '20x', graphData: null },
      { explanation: 'Combine the fixed and variable components together to express the total cost C.', workingOut: 'C = 50 + 20x', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Why can \\(F(x) = \\sqrt{x-4}\\) not be evaluated at \\(x = 0\\)?',
    options: [
      { text: 'It results in the square root of a negative number (\\sqrt{-4}), which is undefined for real numbers.', imageUrl: '' },
      { text: 'The result is infinity.', imageUrl: '' },
      { text: 'The function values are too small.', imageUrl: '' },
      { text: 'The function is not defined for integers.', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us check the evaluation step-by-step:\\n\\nStep 1: Substitute \\(x = 0\\) into the function.\\nStep 2: Compute the expression: \\(0-4 = -4\\).\\nStep 3: Identify the mathematical rule violated: It results in the square root of a negative number (\\sqrt{-4}), which is undefined for real numbers.',
    solutionSteps: [
      { explanation: 'Substitute the value 0 into the function formula expression.', workingOut: 'F(0) = \\sqrt{0-4}', graphData: null },
      { explanation: 'Identify the arithmetic restriction: division by zero or square root of a negative number are undefined.', workingOut: 'It results in the square root of a negative number (\\sqrt{-4}), which is undefined for real numbers.', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Why can \\(H(x) = \\sqrt{1-x^2}\\) not be evaluated at \\(x = 3\\)?',
    options: [
      { text: 'It results in the square root of a negative number (\\sqrt{-8}), which is undefined for real numbers.', imageUrl: '' },
      { text: 'The result is infinity.', imageUrl: '' },
      { text: 'The function values are too small.', imageUrl: '' },
      { text: 'The function is not defined for integers.', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us check the evaluation step-by-step:\\n\\nStep 1: Substitute \\(x = 3\\) into the function.\\nStep 2: Compute the expression: \\(1-3^2 = -8\\).\\nStep 3: Identify the mathematical rule violated: It results in the square root of a negative number (\\sqrt{-8}), which is undefined for real numbers.',
    solutionSteps: [
      { explanation: 'Substitute the value 3 into the function formula expression.', workingOut: 'H(3) = \\sqrt{1-3^2}', graphData: null },
      { explanation: 'Identify the arithmetic restriction: division by zero or square root of a negative number are undefined.', workingOut: 'It results in the square root of a negative number (\\sqrt{-8}), which is undefined for real numbers.', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Why can \\(g(x) = \\frac{1}{2+x}\\) not be evaluated at \\(x = -2\\)?',
    options: [
      { text: 'It results in a denominator of zero, and division by zero is mathematically undefined.', imageUrl: '' },
      { text: 'The result is infinity.', imageUrl: '' },
      { text: 'The function values are too small.', imageUrl: '' },
      { text: 'The function is not defined for integers.', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us check the evaluation step-by-step:\\n\\nStep 1: Substitute \\(x = -2\\) into the function.\\nStep 2: Compute the expression: \\(2+(-2) = 0\\).\\nStep 3: Identify the mathematical rule violated: It results in a denominator of zero, and division by zero is mathematically undefined.',
    solutionSteps: [
      { explanation: 'Substitute the value -2 into the function formula expression.', workingOut: 'g(-2) = \\frac{1}{2+-2}', graphData: null },
      { explanation: 'Identify the arithmetic restriction: division by zero or square root of a negative number are undefined.', workingOut: 'It results in a denominator of zero, and division by zero is mathematically undefined.', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Why can \\(f(x) = \\frac{1}{x}\\) not be evaluated at \\(x = 0\\)?',
    options: [
      { text: 'It results in a denominator of zero, and division by zero is mathematically undefined.', imageUrl: '' },
      { text: 'The result is infinity.', imageUrl: '' },
      { text: 'The function values are too small.', imageUrl: '' },
      { text: 'The function is not defined for integers.', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us check the evaluation step-by-step:\\n\\nStep 1: Substitute \\(x = 0\\) into the function.\\nStep 2: Compute the expression: \\(0\\).\\nStep 3: Identify the mathematical rule violated: It results in a denominator of zero, and division by zero is mathematically undefined.',
    solutionSteps: [
      { explanation: 'Substitute the value 0 into the function formula expression.', workingOut: 'f(0) = \\frac{1}{0}', graphData: null },
      { explanation: 'Identify the arithmetic restriction: division by zero or square root of a negative number are undefined.', workingOut: 'It results in a denominator of zero, and division by zero is mathematically undefined.', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = 2x-4\\), find \\(g(a)\\) in simplest form.',
    options: [
      { text: '2a - 4', imageUrl: '' },
      { text: '-2a - 4', imageUrl: '' },
      { text: '2a - 2', imageUrl: '' },
      { text: '2a + 4', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the value a in place of x inside the function rule expression.',
    solutionSteps: [
      { explanation: 'Substitute the value a in place of x inside the function rule expression.', workingOut: 'g(a) = 2(a) - 4 = 2a - 4', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = 2x-4\\), find \\(g(-a)\\) in simplest form.',
    options: [
      { text: '-2a - 4', imageUrl: '' },
      { text: '2a - 4', imageUrl: '' },
      { text: '-2a + 4', imageUrl: '' },
      { text: '2a + 4', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the value -a in place of x inside the function rule expression.',
    solutionSteps: [
      { explanation: 'Substitute the value -a in place of x inside the function rule expression.', workingOut: 'g(-a) = 2(-a) - 4 = -2a - 4', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = 2x-4\\), find \\(g(a+1)\\) in simplest form.',
    options: [
      { text: '2a - 2', imageUrl: '' },
      { text: '2a - 4', imageUrl: '' },
      { text: '2a + 2', imageUrl: '' },
      { text: '2a - 3', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the binomial term (a+1) in place of x in the function rule expression.\\n\\nStep 2: Expand the parentheses by distributing the multiplication of 2 and collect constants to simplify.',
    solutionSteps: [
      { explanation: 'Substitute the binomial term (a+1) in place of x in the function rule expression.', workingOut: 'g(a+1) = 2(a+1) - 4', graphData: null }, { explanation: 'Expand the parentheses by distributing the multiplication of 2 and collect constants to simplify.', workingOut: 'g(a+1) = 2a + 2 - 4 = 2a - 2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = 2-x\\), find \\(g(a)\\) in simplest form.',
    options: [
      { text: '2 - a', imageUrl: '' },
      { text: '2 + a', imageUrl: '' },
      { text: 'a - 2', imageUrl: '' },
      { text: '2a', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the value a in place of x in the function rule.',
    solutionSteps: [
      { explanation: 'Substitute the value a in place of x in the function rule.', workingOut: 'g(a) = 2 - a', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = 2-x\\), find \\(g(-a)\\) in simplest form.',
    options: [
      { text: '2 + a', imageUrl: '' },
      { text: '2 - a', imageUrl: '' },
      { text: '-2 + a', imageUrl: '' },
      { text: 'a - 2', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the value -a in place of x inside the function rule, paying attention to signs.',
    solutionSteps: [
      { explanation: 'Substitute the value -a in place of x inside the function rule, paying attention to signs.', workingOut: 'g(-a) = 2 - (-a) = 2 + a', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = 2-x\\), find \\(g(a+1)\\) in simplest form.',
    options: [
      { text: '1 - a', imageUrl: '' },
      { text: '3 - a', imageUrl: '' },
      { text: '2 - a', imageUrl: '' },
      { text: '1 + a', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the binomial term (a+1) in place of x in the function rule expression.\\n\\nStep 2: Expand the parenthesis by distributing the negative sign, then simplify numerical terms.',
    solutionSteps: [
      { explanation: 'Substitute the binomial term (a+1) in place of x in the function rule expression.', workingOut: 'g(a+1) = 2 - (a+1)', graphData: null }, { explanation: 'Expand the parenthesis by distributing the negative sign, then simplify numerical terms.', workingOut: 'g(a+1) = 2 - a - 1 = 1 - a', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = x^2\\), find \\(g(a)\\) in simplest form.',
    options: [
      { text: 'a^2', imageUrl: '' },
      { text: '-a^2', imageUrl: '' },
      { text: '2a', imageUrl: '' },
      { text: 'a', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the input value a in place of x in the squaring function.',
    solutionSteps: [
      { explanation: 'Substitute the input value a in place of x in the squaring function.', workingOut: 'g(a) = (a)^2 = a^2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = x^2\\), find \\(g(-a)\\) in simplest form.',
    options: [
      { text: 'a^2', imageUrl: '' },
      { text: '-a^2', imageUrl: '' },
      { text: 'a', imageUrl: '' },
      { text: '-2a', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the value -a in place of x. Any negative term squared becomes positive.',
    solutionSteps: [
      { explanation: 'Substitute the value -a in place of x. Any negative term squared becomes positive.', workingOut: 'g(-a) = (-a)^2 = a^2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = x^2\\), find \\(g(a+1)\\) in simplest form.',
    options: [
      { text: 'a^2 + 2a + 1', imageUrl: '' },
      { text: 'a^2 + 1', imageUrl: '' },
      { text: 'a^2 + a + 1', imageUrl: '' },
      { text: 'a^2 + 2a + 2', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the binomial term (a+1) in place of x in the squaring function.\\n\\nStep 2: Expand the squared binomial using the algebraic identity (a+b)^2 = a^2 + 2ab + b^2.',
    solutionSteps: [
      { explanation: 'Substitute the binomial term (a+1) in place of x in the squaring function.', workingOut: 'g(a+1) = (a+1)^2', graphData: null }, { explanation: 'Expand the squared binomial using the algebraic identity (a+b)^2 = a^2 + 2ab + b^2.', workingOut: 'g(a+1) = a^2 + 2a + 1', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = \\frac{1}{x-1}\\), find \\(g(a)\\) in simplest form.',
    options: [
      { text: '\\frac{1}{a-1}', imageUrl: '' },
      { text: '\\frac{1}{a+1}', imageUrl: '' },
      { text: 'a-1', imageUrl: '' },
      { text: '\\frac{1}{a}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the value a in place of x in the rational function.',
    solutionSteps: [
      { explanation: 'Substitute the value a in place of x in the rational function.', workingOut: 'g(a) = \\frac{1}{a-1}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = \\frac{1}{x-1}\\), find \\(g(-a)\\) in simplest form.',
    options: [
      { text: '-\\frac{1}{a+1}', imageUrl: '' },
      { text: '\\frac{1}{-a-1}', imageUrl: '' },
      { text: '\\frac{1}{a-1}', imageUrl: '' },
      { text: '\\frac{1}{1-a}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the value -a in place of x in the denominator.\\n\\nStep 2: Factor out a negative sign from the denominator to write the fraction in simplest form.',
    solutionSteps: [
      { explanation: 'Substitute the value -a in place of x in the denominator.', workingOut: 'g(-a) = \\frac{1}{-a-1}', graphData: null }, { explanation: 'Factor out a negative sign from the denominator to write the fraction in simplest form.', workingOut: 'g(-a) = -\\frac{1}{a+1}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(g(x) = \\frac{1}{x-1}\\), find \\(g(a+1)\\) in simplest form.',
    options: [
      { text: '\\frac{1}{a}', imageUrl: '' },
      { text: '\\frac{1}{a+2}', imageUrl: '' },
      { text: 'a', imageUrl: '' },
      { text: '\\frac{1}{a-1}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the binomial term (a+1) in place of x in the denominator.\\n\\nStep 2: Simplify the terms inside the denominator to obtain the final fraction.',
    solutionSteps: [
      { explanation: 'Substitute the binomial term (a+1) in place of x in the denominator.', workingOut: 'g(a+1) = \\frac{1}{(a+1)-1}', graphData: null }, { explanation: 'Simplify the terms inside the denominator to obtain the final fraction.', workingOut: 'g(a+1) = \\frac{1}{a}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(F(x) = 5x+2\\), find \\(F(t)-2\\) in simplest form.',
    options: [
      { text: '5t', imageUrl: '' },
      { text: '5t - 2', imageUrl: '' },
      { text: '5t + 2', imageUrl: '' },
      { text: '5t - 8', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Find the expression for F(t) by substituting t into the function rule.\\n\\nStep 2: Subtract 2 from the expression for F(t).',
    solutionSteps: [
      { explanation: 'Find the expression for F(t) by substituting t into the function rule.', workingOut: 'F(t) = 5t + 2', graphData: null }, { explanation: 'Subtract 2 from the expression for F(t).', workingOut: 'F(t) - 2 = (5t + 2) - 2 = 5t', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(F(x) = 5x+2\\), find \\(F(t-2)\\) in simplest form.',
    options: [
      { text: '5t-8', imageUrl: '' },
      { text: '5t - 10', imageUrl: '' },
      { text: '5t - 2', imageUrl: '' },
      { text: '5t', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the binomial term (t-2) in place of x in the function rule.\\n\\nStep 2: Expand the parenthesis by distributing 5, then simplify the constants.',
    solutionSteps: [
      { explanation: 'Substitute the binomial term (t-2) in place of x in the function rule.', workingOut: 'F(t-2) = 5(t-2) + 2', graphData: null }, { explanation: 'Expand the parenthesis by distributing 5, then simplify the constants.', workingOut: 'F(t-2) = 5t - 10 + 2 = 5t - 8', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(F(x) = \\sqrt{x}\\), find \\(F(t)-2\\) in simplest form.',
    options: [
      { text: '\\sqrt{t}-2', imageUrl: '' },
      { text: '\\sqrt{t-2}', imageUrl: '' },
      { text: '\\sqrt{t}+2', imageUrl: '' },
      { text: 't-2', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Find the expression for F(t) by substituting t into the function rule.\\n\\nStep 2: Subtract 2 from the expression for F(t).',
    solutionSteps: [
      { explanation: 'Find the expression for F(t) by substituting t into the function rule.', workingOut: 'F(t) = \\sqrt{t}', graphData: null }, { explanation: 'Subtract 2 from the expression for F(t).', workingOut: 'F(t) - 2 = \\sqrt{t} - 2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(F(x) = \\sqrt{x}\\), find \\(F(t-2)\\) in simplest form.',
    options: [
      { text: '\\sqrt{t-2}', imageUrl: '' },
      { text: '\\sqrt{t}-2', imageUrl: '' },
      { text: 't-2', imageUrl: '' },
      { text: '\\sqrt{t}-\\sqrt{2}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the binomial term (t-2) in place of x in the square root function.',
    solutionSteps: [
      { explanation: 'Substitute the binomial term (t-2) in place of x in the square root function.', workingOut: 'F(t-2) = \\sqrt{t-2}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(F(x) = x^2+2x\\), find \\(F(t)-2\\) in simplest form.',
    options: [
      { text: 't^2+2t-2', imageUrl: '' },
      { text: 't^2+2t', imageUrl: '' },
      { text: 't^2+2t-4', imageUrl: '' },
      { text: 't^2-2t', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Find the expression for F(t) by substituting t into the function rule.\\n\\nStep 2: Subtract 2 from the expression for F(t).',
    solutionSteps: [
      { explanation: 'Find the expression for F(t) by substituting t into the function rule.', workingOut: 'F(t) = t^2 + 2t', graphData: null }, { explanation: 'Subtract 2 from the expression for F(t).', workingOut: 'F(t) - 2 = t^2 + 2t - 2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(F(x) = x^2+2x\\), find \\(F(t-2)\\) in simplest form.',
    options: [
      { text: 't^2-2t', imageUrl: '' },
      { text: 't^2+2t-8', imageUrl: '' },
      { text: 't^2-6t+8', imageUrl: '' },
      { text: 't^2-4t', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the binomial term (t-2) in place of x in the quadratic function rule.\\n\\nStep 2: Expand the squared binomial and distribute the linear factor.\\n\\nStep 3: Group and simplify variables and constants.',
    solutionSteps: [
      { explanation: 'Substitute the binomial term (t-2) in place of x in the quadratic function rule.', workingOut: 'F(t-2) = (t-2)^2 + 2(t-2)', graphData: null }, { explanation: 'Expand the squared binomial and distribute the linear factor.', workingOut: 'F(t-2) = (t^2 - 4t + 4) + (2t - 4)', graphData: null }, { explanation: 'Group and simplify variables and constants.', workingOut: 'F(t-2) = t^2 - 2t', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(F(x) = 2-x^2\\), find \\(F(t)-2\\) in simplest form.',
    options: [
      { text: '-t^2', imageUrl: '' },
      { text: '2-t^2', imageUrl: '' },
      { text: '-t^2-2', imageUrl: '' },
      { text: '-t^2+4t-2', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Find the expression for F(t) by substituting t into the function rule.\\n\\nStep 2: Subtract 2 from the expression for F(t).',
    solutionSteps: [
      { explanation: 'Find the expression for F(t) by substituting t into the function rule.', workingOut: 'F(t) = 2 - t^2', graphData: null }, { explanation: 'Subtract 2 from the expression for F(t).', workingOut: 'F(t) - 2 = (2 - t^2) - 2 = -t^2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'medium',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(F(x) = 2-x^2\\), find \\(F(t-2)\\) in simplest form.',
    options: [
      { text: '-t^2+4t-2', imageUrl: '' },
      { text: '-t^2+4t+2', imageUrl: '' },
      { text: '-t^2-4t-2', imageUrl: '' },
      { text: '-t^2-2', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Substitute the binomial term (t-2) in place of x in the function rule.\\n\\nStep 2: Expand the squared binomial first.\\n\\nStep 3: Subtract the expanded expression from 2 and simplify.',
    solutionSteps: [
      { explanation: 'Substitute the binomial term (t-2) in place of x in the function rule.', workingOut: 'F(t-2) = 2 - (t-2)^2', graphData: null }, { explanation: 'Expand the squared binomial first.', workingOut: '(t-2)^2 = t^2 - 4t + 4', graphData: null }, { explanation: 'Subtract the expanded expression from 2 and simplify.', workingOut: 'F(t-2) = 2 - (t^2 - 4t + 4) = -t^2 + 4t - 2', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'hard',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Using \\(P(x) = x^2 - 2x - 4\\), find the value of \\(P(1 + \\sqrt{5})\\) in simplest form.',
    options: [
      { text: '0', imageUrl: '' },
      { text: '4', imageUrl: '' },
      { text: '2', imageUrl: '' },
      { text: '-4', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Write down the substitution: \\(P(1+\\sqrt{5}) = (1+\\sqrt{5})^2 - 2(1+\\sqrt{5}) - 4\\).\\nStep 2: Expand the squared bracket: \\((1+\\sqrt{5})^2 = 1 + 2\\sqrt{5} + 5 = 6 + 2\\sqrt{5}\\).\\nStep 3: Expand the linear term: \\(-2(1+\\sqrt{5}) = -2 - 2\\sqrt{5}\\).\\nStep 4: Combine the components: \\((6 + 2\\sqrt{5}) + (-2 - 2\\sqrt{5}) - 4 = (6-2-4) + (2\\sqrt{5}-2\\sqrt{5}) = 0\\).',
    solutionSteps: [
      { explanation: 'Substitute the binomial surd value 1 + \\sqrt{5} in place of x in the quadratic function rule.', workingOut: 'P(1+\\sqrt{5}) = (1+\\sqrt{5})^2 - 2(1+\\sqrt{5}) - 4', graphData: null },
      { explanation: 'Expand the squared term (1+\\sqrt{5})^2 using the algebraic identity.', workingOut: '(1+\\sqrt{5})^2 = 1 + 2\\sqrt{5} + 5 = 6 + 2\\sqrt{5}', graphData: null },
      { explanation: 'Expand the linear multiplication term by distributing -2.', workingOut: '-2(1+\\sqrt{5}) = -2 - 2\\sqrt{5}', graphData: null },
      { explanation: 'Combine all numerical constant values and cancel out the matching positive/negative surd terms to find the final simplified answer.', workingOut: 'P(1+\\sqrt{5}) = (6 + 2\\sqrt{5}) + (-2 - 2\\sqrt{5}) - 4 = 0', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'hard',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'Using \\(P(x) = x^2 - 2x - 4\\), find the value of \\(P(\\sqrt{3} - 1)\\) in simplest form.',
    options: [
      { text: '2 - 4\\sqrt{3}', imageUrl: '' },
      { text: '6 - 4\\sqrt{3}', imageUrl: '' },
      { text: '2 + 4\\sqrt{3}', imageUrl: '' },
      { text: '0', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve this step-by-step:\\n\\nStep 1: Write down the substitution: \\(P(\\sqrt{3}-1) = (\\sqrt{3}-1)^2 - 2(\\sqrt{3}-1) - 4\\).\\nStep 2: Expand the squared bracket: \\((\\sqrt{3}-1)^2 = 3 - 2\\sqrt{3} + 1 = 4 - 2\\sqrt{3}\\).\\nStep 3: Expand the linear term: \\(-2(\\sqrt{3}-1) = -2\\sqrt{3} + 2\\).\\nStep 4: Combine the components: \\((4 - 2\\sqrt{3}) + (2 - 2\\sqrt{3}) - 4 = (4+2-4) + (-2\\sqrt{3}-2\\sqrt{3}) = 2 - 4\\sqrt{3}\\).',
    solutionSteps: [
      { explanation: 'Substitute the binomial surd value \\sqrt{3} - 1 in place of x in the quadratic function rule.', workingOut: 'P(\\sqrt{3}-1) = (\\sqrt{3}-1)^2 - 2(\\sqrt{3}-1) - 4', graphData: null },
      { explanation: 'Expand the squared term (\\sqrt{3}-1)^2 using the binomial identity.', workingOut: '(\\sqrt{3}-1)^2 = 3 - 2\\sqrt{3} + 1 = 4 - 2\\sqrt{3}', graphData: null },
      { explanation: 'Expand the linear term by multiplying through by -2. Watch the negative signs carefully.', workingOut: '-2(\\sqrt{3}-1) = -2\\sqrt{3} + 2', graphData: null },
      { explanation: 'Group rational constants and collect matching surd terms to simplify the final expression.', workingOut: 'P(\\sqrt{3}-1) = (4 - 2\\sqrt{3}) + (2 - 2\\sqrt{3}) - 4 = 2 - 4\\sqrt{3}', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'hard',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(f(x) = x^2 + 5x\\), find \\(\\frac{f(1+h) - f(1)}{h}\\) in simplest form (where \\(h \\neq 0\\)).',
    options: [
      { text: 'h + 7', imageUrl: '' },
      { text: 'h + 6', imageUrl: '' },
      { text: 'h + 5', imageUrl: '' },
      { text: '2h + 7', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Compute \\(f(1+h)\\):\\n\\t\\(f(1+h) = (1+h)^2 + 5(1+h)\\)\\n\\t\\(= (1 + 2h + h^2) + (5 + 5h) = h^2 + 7h + 6\\).\\nStep 2: Compute \\(f(1)\\):\\n\\t\\(f(1) = 1^2 + 5(1) = 6\\).\\nStep 3: Subtract: \\(f(1+h) - f(1) = (h^2 + 7h + 6) - 6 = h^2 + 7h\\).\\nStep 4: Divide by h: \\(\\frac{h^2 + 7h}{h} = \\frac{h(h+7)}{h} = h + 7\\).',
    solutionSteps: [
      { explanation: 'First, find the expression for f(1+h) by substituting 1+h into the function and expanding the terms.', workingOut: 'f(1+h) = (1+h)^2 + 5(1+h) = h^2 + 7h + 6', graphData: null },
      { explanation: 'Next, evaluate the function at f(1) directly.', workingOut: 'f(1) = 1^2 + 5(1) = 6', graphData: null },
      { explanation: 'Subtract the value of f(1) from the expression for f(1+h).', workingOut: 'f(1+h) - f(1) = (h^2 + 7h + 6) - 6 = h^2 + 7h', graphData: null },
      { explanation: 'Finally, divide the result by h by factoring out h in the numerator to simplify.', workingOut: '\\frac{f(1+h)-f(1)}{h} = \\frac{h(h+7)}{h} = h + 7', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'hard',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(f(x) = x^2 + 5x\\), find \\(\\frac{f(p) - f(q)}{p-q}\\) in simplest form (where \\(p \\neq q\\)).',
    options: [
      { text: 'p + q + 5', imageUrl: '' },
      { text: 'p + q', imageUrl: '' },
      { text: 'p - q + 5', imageUrl: '' },
      { text: 'p + q - 5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Write down expressions for \\(f(p)\\) and \\(f(q)\\): \\(f(p) = p^2 + 5p\\) and \\(f(q) = q^2 + 5q\\).\\nStep 2: Find the difference in the numerator: \\(f(p) - f(q) = (p^2 + 5p) - (q^2 + 5q) = (p^2 - q^2) + 5(p-q)\\).\\nStep 3: Factor the difference of squares: \\(p^2 - q^2 = (p-q)(p+q)\\).\\nStep 4: Factor out \\((p-q)\\): \\(f(p) - f(q) = (p-q)(p+q) + 5(p-q) = (p-q)(p+q+5)\\).\\nStep 5: Divide by \\(p-q\\): \\(\\frac{(p-q)(p+q+5)}{p-q} = p + q + 5\\).',
    solutionSteps: [
      { explanation: 'Find expressions for f(p) and f(q) and write out the difference in the numerator, grouping matching variables.', workingOut: 'f(p) - f(q) = (p^2-q^2) + 5(p-q)', graphData: null },
      { explanation: 'Factor the quadratic difference of squares term using standard algebraic factoring.', workingOut: 'p^2-q^2 = (p-q)(p+q)', graphData: null },
      { explanation: 'Factor out the common binomial term (p-q) from the entire numerator expression.', workingOut: 'f(p) - f(q) = (p-q)(p+q+5)', graphData: null },
      { explanation: 'Divide the numerator by the denominator (p-q) by canceling the matching binomial term.', workingOut: '\\frac{f(p)-f(q)}{p-q} = \\frac{(p-q)(p+q+5)}{p-q} = p + q + 5', graphData: null }
    ]
  },
  {
    ...chapterData,
    difficulty: 'hard',
    topicId: 'y11a-3A',
    topicCode: '3A',
    type: 'multiple_choice',
    question: 'If \\(f(x) = x^2 + 5x\\), find \\(\\frac{f(x+h) - f(x)}{h}\\) in simplest form (where \\(h \\neq 0\\)).',
    options: [
      { text: '2x + h + 5', imageUrl: '' },
      { text: '2x + 5', imageUrl: '' },
      { text: 'x + h + 5', imageUrl: '' },
      { text: '2x + h - 5', imageUrl: '' }
    ],
    answer: '0',
    solution: 'Let us solve step-by-step:\\n\\nStep 1: Compute \\(f(x+h)\\):\\n\\t\\(f(x+h) = (x+h)^2 + 5(x+h) = x^2 + 2xh + h^2 + 5x + 5h\\).\\nStep 2: Subtract \\(f(x)\\):\\n\\t\\(f(x+h) - f(x) = (x^2 + 2xh + h^2 + 5x + 5h) - (x^2 + 5x) = 2xh + h^2 + 5h\\).\\nStep 3: Divide by h by factoring: \\(\\frac{h(2x+h+5)}{h} = 2x + h + 5\\).',
    solutionSteps: [
      { explanation: 'Substitute x+h in place of x to find f(x+h), then expand the terms.', workingOut: 'f(x+h) = (x+h)^2 + 5(x+h) = x^2 + 2xh + h^2 + 5x + 5h', graphData: null },
      { explanation: 'Subtract the original function rule expression f(x) from the expanded f(x+h) expression.', workingOut: 'f(x+h) - f(x) = 2xh + h^2 + 5h', graphData: null },
      { explanation: 'Divide the resulting difference by h by factoring out h in the numerator.', workingOut: '\\frac{f(x+h)-f(x)}{h} = \\frac{h(2x+h+5)}{h} = 2x + h + 5', graphData: null }
    ]
  }
];

export const importYear11AdvCh3 = async (forceReset = false) => {
  console.log(`Starting full sync of Y11 Adv Ch3 (Total ${allQuestions3A.length})...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-3')));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    for (const q of allQuestions3A) {
        await addDoc(collection(db, 'questions'), { ...q, createdAt: serverTimestamp(), updatedAt: serverTimestamp(), isActive: true });
        count++;
    }
    console.log(`Successfully imported total ${count} questions.`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
