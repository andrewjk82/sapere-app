import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

const createGridHtml = (cols, shadedCount, rows = 1) => {
  const totalCells = cols * rows;
  let cellsHtml = '';
  for (let i = 0; i < totalCells; i++) {
    const isShaded = i < shadedCount;
    const bg = isShaded ? '#93c5fd' : '#ffffff';
    cellsHtml += `<div style="background: ${bg}; width: 14px; height: 14px;"></div>`;
  }
  return `<div style="display: inline-grid; grid-template-columns: repeat(${cols}, 14px); grid-template-rows: repeat(${rows}, 14px); gap: 1px; background: #94a3b8; border: 1px solid #94a3b8; padding: 1px; vertical-align: middle;">${cellsHtml}</div>`;
};

export const allQuestions = [
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Where are the points $A = \\frac{3}{5}$, $B = \\frac{9}{5}$, and $C = \\frac{15}{5}$ located on a number line?`,
    options: ["$A$ is between $0$ and $1$; $B$ is between $1$ and $2$; $C$ is exactly at $3$.","$A$ is exactly at $1$; $B$ is between $1$ and $2$; $C$ is between $2$ and $3$.","$A$ is between $0$ and $1$; $B$ is exactly at $2$; $C$ is between $3$ and $4$.","$A$ is between $1$ and $2$; $B$ is between $2$ and $3$; $C$ is exactly at $5$."],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert to mixed numbers</strong><br>$A = \\frac{3}{5} = 0 \\frac{3}{5}$ (between $0$ and $1$).<br>$B = \\frac{9}{5} = 1 \\frac{4}{5}$ (between $1$ and $2$).<br>$C = \\frac{15}{5} = 3$ (exactly on the integer $3$).</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Which list correctly identifies the integers that the fractions $\\frac{2}{7}$, $\\frac{11}{7}$, and $\\frac{20}{7}$ lie between?`,
    options: ["Between $0$ and $1$, between $1$ and $2$, between $2$ and $3$","Between $0$ and $1$, between $1$ and $2$, between $3$ and $4$","Between $1$ and $2$, between $2$ and $3$, between $3$ and $4$","Between $0$ and $1$, between $2$ and $3$, between $3$ and $4$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide by 7</strong><br>$\\frac{2}{7}$ is less than $1$ (between $0$ and $1$).<br>$\\frac{11}{7} = 1 \\frac{4}{7}$ (between $1$ and $2$).<br>$\\frac{20}{7} = 2 \\frac{6}{7}$ (between $2$ and $3$).</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Consider the fractions $\\frac{5}{9}$, $\\frac{8}{9}$, and $\\frac{13}{9}$. Which of these fractions is greater than $1$?`,
    options: ["Only $\\frac{13}{9}$","$\\frac{8}{9}$ and $\\frac{13}{9}$","All of them","None of them"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand proper vs improper fractions</strong><br>A fraction is greater than $1$ if its numerator is strictly greater than its denominator.</p><p><strong>Step 2: Compare</strong><br>$5 < 9$ and $8 < 9$, so they are less than $1$. However, $13 > 9$, so $\\frac{13}{9}$ is greater than $1$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `A number line is marked with whole numbers ($0, 1, 2, \\dots$). The space between each whole number is divided into $4$ equal parts. A star is placed on the $3$rd tick mark after the number $5$. What fraction represents the star?`,
    options: ["$\\frac{23}{4}$","$\\frac{15}{4}$","$\\frac{21}{4}$","$\\frac{53}{4}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify the denominator</strong><br>Since the space is divided into $4$ parts, we are working with quarters (fourths).</p><p><strong>Step 2: Determine the whole number and fraction</strong><br>The star is past $5$, specifically at $5 \\frac{3}{4}$.</p><p><strong>Step 3: Convert to an improper fraction</strong><br>$5 \\times 4 + 3 = 23$. The fraction is $\\frac{23}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `A number line is divided into thirds (3 equal spaces between each whole number). A triangle is placed on the $1$st tick mark after the number $8$. What fraction represents the triangle?`,
    options: ["$\\frac{25}{3}$","$\\frac{8}{3}$","$\\frac{11}{3}$","$\\frac{23}{3}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Determine the mixed number</strong><br>The triangle is $1$ third past the number $8$, which is $8 \\frac{1}{3}$.</p><p><strong>Step 2: Convert</strong><br>$8 \\times 3 + 1 = 25$. The fraction is $\\frac{25}{3}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'interactive_grid',
    gridConfig: {"type":"rect","rows":4,"cols":4},
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `The square below is divided into 16 regions of equal area. Tap the panels to shade exactly $\\frac{1}{4}$ of the total area.`,
    answer: 4,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the total</strong><br>There are $16$ squares in total.</p><p><strong>Step 2: Calculate the required amount</strong><br>To shade $\\frac{1}{4}$ of the area, you need to shade $\\frac{1}{4} \\times 16 = 4$ squares.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'interactive_grid',
    gridConfig: {"type":"rect","rows":4,"cols":4},
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Tap the panels to shade exactly $\\frac{3}{8}$ of the $4 \\times 4$ grid.`,
    answer: 6,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find equivalent fraction</strong><br>The grid has $16$ cells. We need an equivalent fraction for $\\frac{3}{8}$ with a denominator of $16$.</p><p><strong>Step 2: Calculate</strong><br>$\\frac{3 \\times 2}{8 \\times 2} = \\frac{6}{16}$. You must shade $6$ panels.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'interactive_grid',
    gridConfig: {"type":"rect","rows":4,"cols":4},
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Tap the panels to shade exactly $\\frac{5}{16}$ of the grid.`,
    answer: 5,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Count total cells</strong><br>The grid is $4 \\times 4 = 16$ cells.</p><p><strong>Step 2: Shade</strong><br>Since the denominator is $16$, the numerator tells us directly to shade $5$ panels.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'interactive_grid',
    gridConfig: {"type":"triangle_split","rows":2,"cols":2},
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `This $2 \\times 2$ grid has each square split diagonally into $2$ triangles. Tap the panels to shade exactly $\\frac{5}{8}$ of the whole area.`,
    answer: 5,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Count total sections</strong><br>There are $4$ squares, each split into $2$ triangles, giving $8$ triangles in total.</p><p><strong>Step 2: Shade</strong><br>To shade $\\frac{5}{8}$, simply tap and shade exactly $5$ triangles.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'interactive_grid',
    gridConfig: {"type":"triangle_split","rows":2,"cols":2},
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Tap the panels to shade exactly $\\frac{1}{2}$ of the whole area.`,
    answer: 4,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Count total sections</strong><br>There are $8$ triangles in the grid.</p><p><strong>Step 2: Calculate half</strong><br>Half of $8$ is $4$. You need to shade any $4$ triangles.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `A $4 \\times 4$ square grid has $10$ of its small squares shaded. What fraction of the large square is shaded, in its simplest form?`,
    options: ["$\\frac{5}{8}$","$\\frac{10}{16}$","$\\frac{5}{16}$","$\\frac{3}{4}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the fraction</strong><br>Total squares = $16$. Shaded = $10$. Fraction = $\\frac{10}{16}$.</p><p><strong>Step 2: Simplify</strong><br>Divide numerator and denominator by $2$: $\\frac{10 \\div 2}{16 \\div 2} = \\frac{5}{8}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `A rectangular wall is painted with $3$ equally sized vertical stripes. If $2$ of the stripes are painted blue, what fraction of the wall is blue?`,
    options: ["$\\frac{2}{3}$","$\\frac{1}{3}$","$\\frac{3}{2}$","$\\frac{1}{2}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify parts</strong><br>Total equal parts = $3$. Parts painted blue = $2$.</p><p><strong>Step 2: Write fraction</strong><br>The fraction is $\\frac{2}{3}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: $7$ errors on a $25$-question spelling test`,
    options: ["$\\frac{7}{25}$","$\\frac{25}{7}$","$\\frac{18}{25}$","$\\frac{7}{18}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{7}{25}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: $1$ leg of a rectangular table is broken (the table has $4$ legs)`,
    options: ["$\\frac{1}{4}$","$\\frac{1}{3}$","$\\frac{3}{4}$","$\\frac{4}{1}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{1}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: $5$ days out of $1$ week`,
    options: ["$\\frac{5}{7}$","$\\frac{5}{10}$","$\\frac{2}{7}$","$\\frac{7}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{5}{7}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: $2$ tyres need replacing on a car`,
    options: ["$\\frac{1}{2}$","$\\frac{1}{2}$","$\\frac{2}{5}$","$\\frac{4}{2}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{1}{2}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: A $12$-day holiday in November`,
    options: ["$\\frac{2}{5}$","$\\frac{12}{31}$","$\\frac{18}{30}$","$\\frac{30}{12}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{2}{5}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: $5$ broken eggs in a dozen`,
    options: ["$\\frac{5}{12}$","$\\frac{5}{10}$","$\\frac{7}{12}$","$\\frac{12}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{5}{12}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: $37$ minutes taken to complete an exam for which $1$ hour was allocated`,
    options: ["$\\frac{37}{60}$","$\\frac{37}{100}$","$\\frac{23}{60}$","$\\frac{60}{37}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{37}{60}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: $4$ players injured out of a soccer team of $11$`,
    options: ["$\\frac{4}{11}$","$\\frac{4}{10}$","$\\frac{7}{11}$","$\\frac{11}{4}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{4}{11}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: $1$ digit in a $10$-digit phone number is incorrect`,
    options: ["$\\frac{1}{10}$","$\\frac{1}{9}$","$\\frac{9}{10}$","$\\frac{10}{1}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{1}{10}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write the fraction, in its simplest form, that describes the following: Out of $28$ competitors, $21$ finish the race`,
    options: ["$\\frac{3}{4}$","$\\frac{7}{28}$","$\\frac{28}{21}$","$\\frac{21}{100}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>The numerator is the part mentioned, and the denominator is the total whole.</p><p><strong>Step 2: Simplify if necessary</strong><br>Find the greatest common divisor and divide both top and bottom to get $\\frac{3}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Choose the diagram that correctly shows $\\frac{8}{7}$ if the whole is shown below:`,
    graphData: { html: createGridHtml(7, 0) },
    options: [
      createGridHtml(6, 6),
      `<div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start;">${createGridHtml(7, 7)}${createGridHtml(7, 1)}</div>`,
      createGridHtml(8, 7),
      createGridHtml(7, 7)
    ],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the whole</strong><br>The whole is represented by a grid of $7$ blocks. This means $1$ whole = $\\frac{7}{7}$.</p><p><strong>Step 2: Determine what $\\frac{8}{7}$ means</strong><br>$\\frac{8}{7} = \\frac{7}{7} + \\frac{1}{7} = 1 \\frac{1}{7}$.</p><p><strong>Step 3: Select the correct visual</strong><br>You need one full whole ($7$ blocks shaded) plus an additional $\\frac{1}{7}$ ($1$ block shaded in a second whole). The diagram with two $7$-block grids where $8$ blocks are shaded in total is the correct one.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Choose the diagram that correctly shows $\\frac{1}{4}$ if the whole is shown below:`,
    graphData: { html: createGridHtml(1, 0) },
    options: [
      `<div style="display: inline-grid; grid-template-columns: repeat(2, 14px); grid-template-rows: repeat(2, 14px); gap: 1px; background: #94a3b8; border: 1px solid #94a3b8; padding: 1px; vertical-align: middle;"><div style="background: #93c5fd; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div><div style="background: #ffffff; width: 14px; height: 14px;"></div></div>`,
      `<div style="display: flex; gap: 4px;">${createGridHtml(1, 1)}${createGridHtml(1, 1)}${createGridHtml(1, 1)}${createGridHtml(1, 1)}</div>`,
      createGridHtml(1, 1),
      createGridHtml(3, 1)
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the whole</strong><br>The whole is a single square block.</p><p><strong>Step 2: Understand the fraction</strong><br>To show $\\frac{1}{4}$, the whole must be divided into $4$ equal parts, and $1$ of those parts must be shaded.</p><p><strong>Step 3: Match the diagram</strong><br>The diagram showing a square divided into four smaller squares with one shaded correctly represents $\\frac{1}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `What fraction does the shaded area represent, given that the area of the large square is 1?`,
    graphData: {
      html: `<svg width="100" height="100" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
  <rect width="80" height="80" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
  <rect x="0" y="0" width="60" height="80" fill="#93c5fd" />
  <line x1="20" y1="0" x2="20" y2="80" stroke="#94a3b8" stroke-width="1"/>
  <line x1="40" y1="0" x2="40" y2="80" stroke="#94a3b8" stroke-width="1"/>
  <line x1="60" y1="0" x2="60" y2="80" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="20" x2="80" y2="20" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="40" x2="80" y2="40" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="60" x2="80" y2="60" stroke="#94a3b8" stroke-width="1"/>
</svg>`
    },
    options: [
      `$\\frac{3}{4}$`,
      `$\\frac{12}{14}$`,
      `$\\frac{1}{4}$`,
      `$\\frac{4}{3}$`
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Count the total number of equal parts</strong><br>The large square is divided into a $4 \\times 4$ grid, meaning there are $16$ equal parts in total.</p><p><strong>Step 2: Count the shaded parts</strong><br>There are $3$ columns shaded, and each column has $4$ squares. So, $3 \\times 4 = 12$ parts are shaded.</p><p><strong>Step 3: Write and simplify the fraction</strong><br>The fraction is $\\frac{12}{16}$. Dividing the numerator and denominator by $4$, we get $\\frac{3}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `What fraction does the shaded area represent, given that the area of the large square is 1?`,
    graphData: {
      html: `<div style="display: flex; gap: 16px; justify-content: center; align-items: center;">
<svg width="80" height="80" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
  <rect x="0" y="20" width="60" height="20" fill="#93c5fd" />
  <line x1="20" y1="0" x2="20" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="40" y1="0" x2="40" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="20" x2="60" y2="20" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="40" x2="60" y2="40" stroke="#94a3b8" stroke-width="1"/>
</svg>
<svg width="80" height="80" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" fill="#93c5fd" stroke="#94a3b8" stroke-width="1"/>
  <line x1="20" y1="0" x2="20" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="40" y1="0" x2="40" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="20" x2="60" y2="20" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="40" x2="60" y2="40" stroke="#94a3b8" stroke-width="1"/>
</svg>
</div>`
    },
    options: [
      `$\\frac{4}{3}$`,
      `$\\frac{12}{18}$`,
      `$\\frac{2}{3}$`,
      `$\\frac{5}{3}$`
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the whole</strong><br>We are told that the area of ONE large square is $1$. Each large square is divided into $9$ equal parts, so $1$ whole = $\\frac{9}{9}$.</p><p><strong>Step 2: Count the shaded parts</strong><br>The first square has $3$ shaded parts. The second square is fully shaded with $9$ parts. Total shaded parts = $3 + 9 = 12$.</p><p><strong>Step 3: Write and simplify the fraction</strong><br>The fraction is $\\frac{12}{9}$. Dividing numerator and denominator by $3$, we get $\\frac{4}{3}$ (which is also $1 \\frac{1}{3}$).</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `What fraction does the shaded area represent, given that the area of the large square is 1?`,
    graphData: {
      html: `<div style="display: flex; gap: 16px; justify-content: center; align-items: center;">
<svg width="80" height="80" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
  <polygon points="0,0 0,30 30,30" fill="#93c5fd" />
  <polygon points="30,0 30,30 60,30" fill="#93c5fd" />
  <polygon points="0,30 0,60 30,60" fill="#93c5fd" />
  <polygon points="30,30 30,60 60,60" fill="#93c5fd" />
  <line x1="30" y1="0" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="30" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="0" x2="30" y2="30" stroke="#94a3b8" stroke-width="1"/>
  <line x1="30" y1="0" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="30" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="30" y1="30" x2="60" y2="60" stroke="#94a3b8" stroke-width="1"/>
</svg>
<svg width="80" height="80" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
  <polygon points="0,0 0,30 30,30" fill="#93c5fd" />
  <polygon points="30,0 30,30 60,30" fill="#93c5fd" />
  <polygon points="0,30 0,60 30,60" fill="#93c5fd" />
  <polygon points="30,30 30,60 60,60" fill="#93c5fd" />
  <line x1="30" y1="0" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="30" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="0" x2="30" y2="30" stroke="#94a3b8" stroke-width="1"/>
  <line x1="30" y1="0" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>
  <line x1="0" y1="30" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="30" y1="30" x2="60" y2="60" stroke="#94a3b8" stroke-width="1"/>
</svg>
</div>`
    },
    options: [
      `$1$`,
      `$\\frac{1}{2}$`,
      `$\\frac{8}{16}$`,
      `$\\frac{1}{4}$`
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the whole</strong><br>One large square is the whole ($1$). It is divided into $8$ equal triangles.</p><p><strong>Step 2: Determine the shaded amount per square</strong><br>In each large square, there are $4$ shaded triangles. This means $\\frac{4}{8}$ or $\\frac{1}{2}$ of each square is shaded.</p><p><strong>Step 3: Combine the parts</strong><br>Since we have two squares, each with $\\frac{1}{2}$ shaded, the total shaded area is $\\frac{1}{2} + \\frac{1}{2} = 1$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `What fraction does the shaded area represent, given that the area of the large square is 1?`,
    graphData: {
      html: `<svg width="120" height="120" viewBox="0 0 85 85" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
  <g transform="translate(42.5, 42.5) rotate(45) translate(-30, -30)">
    <rect width="60" height="60" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
    <polygon points="30,30 0,0 30,0" fill="#93c5fd" />
    <polygon points="30,30 60,0 60,30" fill="#93c5fd" />
    <polygon points="30,30 60,60 30,60" fill="#93c5fd" />
    <polygon points="30,30 0,60 0,30" fill="#93c5fd" />
    <line x1="0" y1="0" x2="60" y2="60" stroke="#94a3b8" stroke-width="1"/>
    <line x1="0" y1="60" x2="60" y2="0" stroke="#94a3b8" stroke-width="1"/>
    <line x1="30" y1="0" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>
    <line x1="0" y1="30" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>
  </g>
</svg>`
    },
    options: [
      `$\\frac{1}{2}$`,
      `$\\frac{1}{4}$`,
      `$\\frac{3}{8}$`,
      `$\\frac{4}{6}$`
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Count the total number of equal parts</strong><br>The large square is divided into $8$ equal triangles.</p><p><strong>Step 2: Count the shaded parts</strong><br>There are $4$ shaded triangles forming a pinwheel pattern.</p><p><strong>Step 3: Write and simplify the fraction</strong><br>The fraction is $\\frac{4}{8}$. Dividing the numerator and denominator by $4$, we get $\\frac{1}{2}$.</p></div>`,
    createdAt: new Date().toISOString()
  }
];

export const importYear7Ch4A = async (forceReset = false) => {
  console.log('[Ch4A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    if (forceReset) {
      const oldSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-4a')));
      for (const d of oldSnap.docs) { await deleteDoc(d.ref); }
    }
    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-4a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
  } catch (error) { 
    console.error(error); 
    throw error; 
  }
  return importedCount;
};
