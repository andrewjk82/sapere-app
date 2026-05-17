const fs = require('fs');

const questions = [];

// ========================================================
// Helper to generate a 10x10 shaded grid SVG
// ========================================================
function make10x10GridSVG(shadedCount) {
  let cells = '';
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const isShaded = (r * 10 + c) < shadedCount;
      const fill = isShaded ? '#3b82f6' : '#ffffff';
      cells += `<rect x="${c * 15}" y="${r * 15}" width="15" height="15" fill="${fill}" stroke="#94a3b8" stroke-width="1" />\n`;
    }
  }
  return `<div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="0 0 150 150" width="150" height="150" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid #475569; border-radius: 4px;">
      ${cells}
    </svg>
  </div>`;
}

// ========================================================
// Helper to generate vertical strips SVG
// ========================================================
function makeVerticalStripsSVG(shadedStrips, totalStrips = 10) {
  let cells = '';
  const stripWidth = 15;
  const height = 150;
  for (let i = 0; i < totalStrips; i++) {
    const isShaded = shadedStrips.includes(i);
    const fill = isShaded ? '#3b82f6' : '#ffffff';
    cells += `<rect x="${i * stripWidth}" y="0" width="${stripWidth}" height="${height}" fill="${fill}" stroke="#94a3b8" stroke-width="1" />\n`;
  }
  return `<div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="0 0 ${totalStrips * stripWidth} ${height}" width="${totalStrips * stripWidth}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid #475569; border-radius: 4px;">
      ${cells}
    </svg>
  </div>`;
}

// ========================================================
// Helper to generate triangles SVG (Q1e equivalent)
// ========================================================
function makeTriangleGridSVG(shadedTriangles) {
  const points = [
    { p: '100,100 100,0 0,0', idx: 0 },
    { p: '100,100 0,0 0,100', idx: 1 },
    { p: '100,100 0,100 0,200', idx: 2 },
    { p: '100,100 0,200 100,200', idx: 3 },
    { p: '100,100 100,200 200,200', idx: 4 },
    { p: '100,100 200,200 200,100', idx: 5 },
    { p: '100,100 200,100 200,0', idx: 6 },
    { p: '100,100 200,0 100,0', idx: 7 }
  ];
  let polys = '';
  points.forEach(pt => {
    const isShaded = shadedTriangles.includes(pt.idx);
    const fill = isShaded ? '#3b82f6' : '#ffffff';
    polys += `<polygon points="${pt.p}" fill="${fill}" stroke="#94a3b8" stroke-width="1.5" />\n`;
  });
  return `<div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="0 0 200 200" width="150" height="150" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid #475569; border-radius: 4px;">
      ${polys}
    </svg>
  </div>`;
}

// ========================================================
// Q1: What percentage of each square is shaded? (a to e)
// ========================================================
questions.push({
  chapterId: 'y7-14',
  chapterTitle: 'Chapter 14: Percentages and Ratios',
  topicId: 'y7-14a',
  topicCode: '14A',
  topicTitle: 'Percentages, fractions and decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'What percentage of the square grid below is shaded?\n\n' + make10x10GridSVG(76),
  options: ['76%', '24%', '7.6%', '84%'],
  answer: 0,
  solution: `<div style="text-align: left;"><p>A standard square grid contains 10 rows by 10 columns, which equals 100 small squares in total.</p><p>By counting, exactly 76 small squares are shaded.</p><p>Percentage = $$\\frac{76}{100} \\times 100\\% = 76\\%$$</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-14',
  chapterTitle: 'Chapter 14: Percentages and Ratios',
  topicId: 'y7-14a',
  topicCode: '14A',
  topicTitle: 'Percentages, fractions and decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'What percentage of the square grid below is shaded?\n\n' + make10x10GridSVG(64),
  options: ['64%', '36%', '6.4%', '74%'],
  answer: 0,
  solution: `<div style="text-align: left;"><p>The grid has 100 small squares. The blue shaded portion contains 6 full rows of 10 plus 4 extra squares, making exactly 64 squares.</p><p>Percentage = $$\\frac{64}{100} \\times 100\\% = 64\\%$$</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-14',
  chapterTitle: 'Chapter 14: Percentages and Ratios',
  topicId: 'y7-14a',
  topicCode: '14A',
  topicTitle: 'Percentages, fractions and decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'What percentage of the rectangular strip grid below is shaded?\n\n' + makeVerticalStripsSVG([0, 1, 2, 3]),
  options: ['40%', '60%', '4%', '44%'],
  answer: 0,
  solution: `<div style="text-align: left;"><p>The grid is divided into 10 equal vertical strips.</p><p>Exactly 4 strips are shaded blue.</p><p>Percentage = $$\\frac{4}{10} = \\frac{40}{100} = 40\\%$$</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-14',
  chapterTitle: 'Chapter 14: Percentages and Ratios',
  topicId: 'y7-14a',
  topicCode: '14A',
  topicTitle: 'Percentages, fractions and decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'What percentage of the rectangular strip grid below is shaded?\n\n' + makeVerticalStripsSVG([0, 1, 3, 4, 6, 7]),
  options: ['60%', '40%', '6%', '50%'],
  answer: 0,
  solution: `<div style="text-align: left;"><p>The grid is divided into 10 equal vertical strips.</p><p>Exactly 6 strips are shaded blue.</p><p>Percentage = $$\\frac{6}{10} = \\frac{60}{100} = 60\\%$$</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-14',
  chapterTitle: 'Chapter 14: Percentages and Ratios',
  topicId: 'y7-14a',
  topicCode: '14A',
  topicTitle: 'Percentages, fractions and decimals',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'What percentage of the square below is shaded?\n\n' + makeTriangleGridSVG([0, 2, 3, 5, 7]),
  options: ['62.5%', '37.5%', '50%', '75%'],
  answer: 0,
  solution: `<div style="text-align: left;"><p>The square is divided into 8 equal triangles.</p><p>Exactly 5 triangles are shaded blue.</p><p>Fraction shaded = $$\\frac{5}{8}$$</p><p>To convert this fraction into a percentage:</p><p>$$\\frac{5}{8} \\times 100\\% = 0.625 \\times 100\\% = 62.5\\%$$</p></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q2: Convert percentages to simplified fractions (a to l)
// ========================================================
const q2Params = [
  { p: '6%', ans: '\\frac{3}{50}', o: ['\\frac{3}{50}', '\\frac{6}{50}', '\\frac{3}{25}', '\\frac{1}{20}'], step: '$$6\\% = \\frac{6}{100} = \\frac{3}{50}$$' },
  { p: '18%', ans: '\\frac{9}{50}', o: ['\\frac{9}{50}', '\\frac{18}{50}', '\\frac{9}{25}', '\\frac{2}{25}'], step: '$$18\\% = \\frac{18}{100} = \\frac{9}{50}$$' },
  { p: '85%', ans: '\\frac{17}{20}', o: ['\\frac{17}{20}', '\\frac{85}{100}', '\\frac{17}{25}', '\\frac{4}{5}'], step: '$$85\\% = \\frac{85}{100} = \\frac{17}{20}$$' },
  { p: '45%', ans: '\\frac{9}{20}', o: ['\\frac{9}{20}', '\\frac{45}{100}', '\\frac{9}{25}', '\\frac{3}{10}'], step: '$$45\\% = \\frac{45}{100} = \\frac{9}{20}$$' },
  { p: '35%', ans: '\\frac{7}{20}', o: ['\\frac{7}{20}', '\\frac{35}{100}', '\\frac{7}{25}', '\\frac{3}{20}'], step: '$$35\\% = \\frac{35}{100} = \\frac{7}{20}$$' },
  { p: '95%', ans: '\\frac{19}{20}', o: ['\\frac{19}{20}', '\\frac{95}{100}', '\\frac{19}{25}', '\\frac{9}{10}'], step: '$$95\\% = \\frac{95}{100} = \\frac{19}{20}$$' },
  { p: '140%', ans: '1\\frac{2}{5}', o: ['1\\frac{2}{5}', '1\\frac{4}{5}', '1\\frac{2}{25}', '2\\frac{1}{5}'], step: '$$140\\% = \\frac{140}{100} = \\frac{7}{5} = 1\\frac{2}{5}$$' },
  { p: '175%', ans: '1\\frac{3}{4}', o: ['1\\frac{3}{4}', '1\\frac{3}{5}', '1\\frac{1}{4}', '2\\frac{3}{4}'], step: '$$175\\% = \\frac{175}{100} = \\frac{7}{4} = 1\\frac{3}{4}$$' },
  { p: '240%', ans: '2\\frac{2}{5}', o: ['2\\frac{2}{5}', '2\\frac{4}{5}', '2\\frac{1}{5}', '1\\frac{2}{5}'], step: '$$240\\% = \\frac{240}{100} = \\frac{12}{5} = 2\\frac{2}{5}$$' },
  { p: '350%', ans: '3\\frac{1}{2}', o: ['3\\frac{1}{2}', '3\\frac{1}{4}', '3\\frac{3}{4}', '2\\frac{1}{2}'], step: '$$350\\% = \\frac{350}{100} = \\frac{7}{2} = 3\\frac{1}{2}$$' },
  { p: '225%', ans: '2\\frac{1}{4}', o: ['2\\frac{1}{4}', '2\\frac{3}{4}', '2\\frac{1}{2}', '1\\frac{1}{4}'], step: '$$225\\% = \\frac{225}{100} = \\frac{9}{4} = 2\\frac{1}{4}$$' },
  { p: '376%', ans: '3\\frac{19}{25}', o: ['3\\frac{19}{25}', '3\\frac{38}{50}', '3\\frac{9}{25}', '3\\frac{19}{50}'], step: '$$376\\% = \\frac{376}{100} = 3\\frac{76}{100} = 3\\frac{19}{25}$$' }
];

q2Params.forEach((param, i) => {
  questions.push({
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and Ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Convert the percentage $$${param.p}$$ to a simplified fraction or mixed numeral.`,
    options: param.o.map(x => `$$${x}$$`),
    answer: 0,
    solution: `<div style="text-align: left;"><p>To convert a percentage to a fraction, divide by 100 and then simplify the fraction by finding the greatest common divisor (GCD) of the numerator and the denominator:</p><p>${param.step}</p></div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q3: Convert percentages to decimals (a to l)
// ========================================================
const q3Params = [
  { p: '9%', ans: '0.09', o: ['0.09', '0.9', '0.009', '9.0'] },
  { p: '24%', ans: '0.24', o: ['0.24', '2.4', '0.024', '0.25'] },
  { p: '85%', ans: '0.85', o: ['0.85', '8.5', '0.085', '0.8'] },
  { p: '48%', ans: '0.48', o: ['0.48', '4.8', '0.048', '0.04'] },
  { p: '80%', ans: '0.8', o: ['0.8', '0.08', '8.0', '0.88'] },
  { p: '136%', ans: '1.36', o: ['1.36', '13.6', '0.136', '1.036'] },
  { p: '320%', ans: '3.2', o: ['3.2', '0.32', '32.0', '0.032'] },
  { p: '540%', ans: '5.4', o: ['5.4', '0.54', '54.0', '0.054'] },
  { p: '190%', ans: '1.9', o: ['1.9', '0.19', '19.0', '0.019'] },
  { p: '14.5%', ans: '0.145', o: ['0.145', '1.45', '0.0145', '14.5'] },
  { p: '7.8%', ans: '0.078', o: ['0.078', '0.78', '0.0078', '7.8'] },
  { p: '42.5%', ans: '0.425', o: ['0.425', '4.25', '0.0425', '0.45'] }
];

q3Params.forEach((param, i) => {
  questions.push({
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and Ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Convert the percentage $$${param.p}$$ to a decimal.`,
    options: param.o.map(x => `$$${x}$$`),
    answer: 0,
    solution: `<div style="text-align: left;"><p>To convert a percentage to a decimal, divide by 100 (which is equivalent to shifting the decimal point two places to the left):</p><p>$$${param.p} = \\frac{${param.p.replace('%','')}}{100} = ${param.ans}$$</p></div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q4: Express fraction as percentage (a to h)
// ========================================================
const q4Params = [
  { f: '\\frac{31}{100}', ans: '31%', o: ['31%', '3.1%', '0.31%', '310%'], step: '$$\\frac{31}{100} = 31\\%$$' },
  { f: '\\frac{89}{100}', ans: '89%', o: ['89%', '8.9%', '0.89%', '890%'], step: '$$\\frac{89}{100} = 89\\%$$' },
  { f: '\\frac{17}{100}', ans: '17%', o: ['17%', '1.7%', '0.17%', '170%'], step: '$$\\frac{17}{100} = 17\\%$$' },
  { f: '\\frac{243}{100}', ans: '243%', o: ['243%', '24.3%', '2.43%', '2430%'], step: '$$\\frac{243}{100} = 243\\%$$' },
  { f: '\\frac{3}{10}', ans: '30%', o: ['30%', '3%', '0.3%', '300%'], step: '$$\\frac{3}{10} = \\frac{30}{100} = 30\\%$$' },
  { f: '\\frac{7}{10}', ans: '70%', o: ['70%', '7%', '0.7%', '700%'], step: '$$\\frac{7}{10} = \\frac{70}{100} = 70\\%$$' },
  { f: '\\frac{9}{1000}', ans: '0.9%', o: ['0.9%', '9%', '0.09%', '90%'], step: '$$\\frac{9}{1000} = \\frac{0.9}{100} = 0.9\\%$$' },
  { f: '\\frac{643}{1000}', ans: '64.3%', o: ['64.3%', '6.43%', '0.643%', '643%'], step: '$$\\frac{643}{1000} = \\frac{64.3}{100} = 64.3\\%$$' }
];

q4Params.forEach((param, i) => {
  questions.push({
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and Ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Express the following fraction as a percentage: $$${param.f}$$`,
    options: param.o,
    answer: 0,
    solution: `<div style="text-align: left;"><p>To write a fraction as a percentage, we convert it to an equivalent fraction with a denominator of 100:</p><p>${param.step}</p></div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q5: Express fraction as percentage - other denominators (a to l)
// ========================================================
const q5Params = [
  { f: '\\frac{4}{5}', ans: '80%', o: ['80%', '40%', '20%', '8%'], step: '$$\\frac{4}{5} = \\frac{4 \\times 20}{5 \\times 20} = \\frac{80}{100} = 80\\%$$' },
  { f: '\\frac{13}{20}', ans: '65%', o: ['65%', '13%', '35%', '60%'], step: '$$\\frac{13}{20} = \\frac{13 \\times 5}{20 \\times 5} = \\frac{65}{100} = 65\\%$$' },
  { f: '\\frac{18}{25}', ans: '72%', o: ['72%', '18%', '36%', '75%'], step: '$$\\frac{18}{25} = \\frac{18 \\times 4}{25 \\times 4} = \\frac{72}{100} = 72\\%$$' },
  { f: '\\frac{27}{50}', ans: '54%', o: ['54%', '27%', '50%', '46%'], step: '$$\\frac{27}{50} = \\frac{27 \\times 2}{50 \\times 2} = \\frac{54}{100} = 54\\%$$' },
  { f: '\\frac{21}{25}', ans: '84%', o: ['84%', '42%', '21%', '80%'], step: '$$\\frac{21}{25} = \\frac{21 \\times 4}{25 \\times 4} = \\frac{84}{100} = 84\\%$$' },
  { f: '\\frac{11}{20}', ans: '55%', o: ['55%', '11%', '22%', '50%'], step: '$$\\frac{11}{20} = \\frac{11 \\times 5}{20 \\times 5} = \\frac{55}{100} = 55\\%$$' },
  { f: '\\frac{57}{50}', ans: '114%', o: ['114%', '57%', '228%', '120%'], step: '$$\\frac{57}{50} = \\frac{57 \\times 2}{50 \\times 2} = \\frac{114}{100} = 114\\%$$' },
  { f: '\\frac{37}{25}', ans: '148%', o: ['148%', '74%', '37%', '140%'], step: '$$\\frac{37}{25} = \\frac{37 \\times 4}{25 \\times 4} = \\frac{148}{100} = 148\\%$$' },
  { f: '\\frac{63}{20}', ans: '315%', o: ['315%', '63%', '126%', '305%'], step: '$$\\frac{63}{20} = \\frac{63 \\times 5}{20 \\times 5} = \\frac{315}{100} = 315\\%$$' },
  { f: '\\frac{9}{40}', ans: '22.5%', o: ['22.5%', '2.25%', '9%', '45%'], step: '$$\\frac{9}{40} = \\frac{9 \\times 2.5}{40 \\times 2.5} = \\frac{22.5}{100} = 22.5\\%$$' },
  { f: '\\frac{11}{40}', ans: '27.5%', o: ['27.5%', '2.75%', '11%', '55%'], step: '$$\\frac{11}{40} = \\frac{11 \\times 2.5}{40 \\times 2.5} = \\frac{27.5}{100} = 27.5\\%$$' },
  { f: '\\frac{23}{40}', ans: '57.5%', o: ['57.5%', '5.75%', '23%', '72.5%'], step: '$$\\frac{23}{40} = \\frac{23 \\times 2.5}{40 \\times 2.5} = \\frac{57.5}{100} = 57.5\\%$$' }
];

q5Params.forEach((param, i) => {
  questions.push({
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and Ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Express the following fraction as a percentage: $$${param.f}$$`,
    options: param.o,
    answer: 0,
    solution: `<div style="text-align: left;"><p>To convert a fraction to a percentage, find an equivalent fraction with a denominator of 100, or multiply by 100%:</p><p>${param.step}</p></div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q6: Write decimal as percentage (a to h)
// ========================================================
const q6Params = [
  { d: '0.45', ans: '45%', o: ['45%', '4.5%', '0.45%', '450%'] },
  { d: '0.38', ans: '38%', o: ['38%', '3.8%', '0.38%', '380%'] },
  { d: '0.81', ans: '81%', o: ['81%', '8.1%', '0.81%', '810%'] },
  { d: '2.4', ans: '240%', o: ['240%', '24%', '2.4%', '0.24%'] },
  { d: '4.8', ans: '480%', o: ['480%', '48%', '4.8%', '0.48%'] },
  { d: '1.67', ans: '167%', o: ['167%', '16.7%', '1.67%', '1670%'] },
  { d: '0.235', ans: '23.5%', o: ['23.5%', '2.35%', '0.235%', '235%'] },
  { d: '0.625', ans: '62.5%', o: ['62.5%', '6.25%', '0.625%', '625%'] }
];

q6Params.forEach((param, i) => {
  questions.push({
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and Ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write the following decimal as a percentage: $$${param.d}$$`,
    options: param.o,
    answer: 0,
    solution: `<div style="text-align: left;"><p>To write a decimal as a percentage, multiply by 100 (which is equivalent to shifting the decimal point two places to the right):</p><p>$$${param.d} \\times 100\\% = ${param.ans}$$</p></div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q7: Write fractional percentages as fractions (a to d)
// ========================================================
const q7Params = [
  { p: '1\\frac{1}{2}\\%', ans: '\\frac{3}{200}', o: ['\\frac{3}{200}', '\\frac{1}{200}', '\\frac{3}{100}', '\\frac{3}{50}'], step: '$$1\\frac{1}{2}\\% = \\frac{3}{2}\\% = \\frac{3}{2} \\div 100 = \\frac{3}{2 \\times 100} = \\frac{3}{200}$$' },
  { p: '3\\frac{1}{2}\\%', ans: '\\frac{7}{200}', o: ['\\frac{7}{200}', '\\frac{3}{200}', '\\frac{7}{100}', '\\frac{7}{50}'], step: '$$3\\frac{1}{2}\\% = \\frac{7}{2}\\% = \\frac{7}{2} \\div 100 = \\frac{7}{2 \\times 100} = \\frac{7}{200}$$' },
  { p: '8\\frac{3}{4}\\%', ans: '\\frac{7}{80}', o: ['\\frac{7}{80}', '\\frac{35}{400}', '\\frac{7}{40}', '\\frac{35}{100}'], step: '$$8\\frac{3}{4}\\% = \\frac{35}{4}\\% = \\frac{35}{4} \\div 100 = \\frac{35}{400} = \\frac{7}{80}$$' },
  { p: '62\\frac{1}{2}\\%', ans: '\\frac{5}{8}', o: ['\\frac{5}{8}', '\\frac{125}{200}', '\\frac{5}{4}', '\\frac{3}{8}'], step: '$$62\\frac{1}{2}\\% = \\frac{125}{2}\\% = \\frac{125}{2} \\div 100 = \\frac{125}{200} = \\frac{5}{8}$$' }
];

q7Params.forEach((param, i) => {
  questions.push({
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and Ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Write the following percentage as a simplified fraction: $$${param.p}$$`,
    options: param.o.map(x => `$$${x}$$`),
    answer: 0,
    solution: `<div style="text-align: left;"><p>To convert a percentage containing a fraction to a simplified fraction:</p><ul><li>Convert the mixed number to an improper fraction.</li><li>Divide by 100 (multiply the denominator by 100).</li><li>Simplify the fraction.</li></ul><p>${param.step}</p></div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q8: Table completion questions (1 to 9)
// ========================================================
const q8Params = [
  { val: '0.6', desc: 'decimal representation of 0.6', ans: '\\frac{3}{5} \\text{ and } 60\\%', o: ['\\frac{3}{5} \\text{ and } 60\\%', '\\frac{3}{5} \\text{ and } 6\\%', '\\frac{3}{10} \\text{ and } 60\\%', '\\frac{2}{3} \\text{ and } 60\\%'], step: '$$0.6 = \\frac{6}{10} = \\frac{3}{5}$$ and $$0.6 \\times 100\\% = 60\\%$$' },
  { val: '\\frac{3}{8}', desc: 'fraction representation of \\frac{3}{8}', ans: '0.375 \\text{ and } 37.5\\%', o: ['0.375 \\text{ and } 37.5\\%', '0.375 \\text{ and } 3.75\\%', '0.125 \\text{ and } 12.5\\%', '0.625 \\text{ and } 62.5\\%'], step: '$$\\frac{3}{8} = 3 \\div 8 = 0.375$$ and $$0.375 \\times 100\\% = 37.5\\%$$' },
  { val: '85\\%', desc: 'percentage representation of 85\\%', ans: '0.85 \\text{ and } \\frac{17}{20}', o: ['0.85 \\text{ and } \\frac{17}{20}', '8.5 \\text{ and } \\frac{17}{20}', '0.85 \\text{ and } \\frac{85}{100}', '0.85 \\text{ and } \\frac{4}{5}'], step: '$$85\\% = \\frac{85}{100} = 0.85$$ and $$\\frac{85}{100} = \\frac{17}{20}$$' },
  { val: '0.8', desc: 'decimal representation of 0.8', ans: '\\frac{4}{5} \\text{ and } 80\\%', o: ['\\frac{4}{5} \\text{ and } 80\\%', '\\frac{4}{5} \\text{ and } 8\\%', '\\frac{8}{10} \\text{ and } 8\\%', '\\frac{3}{4} \\text{ and } 80\\%'], step: '$$0.8 = \\frac{8}{10} = \\frac{4}{5}$$ and $$0.8 \\times 100\\% = 80\\%$$' },
  { val: '150\\%', desc: 'percentage representation of 150\\%', ans: '1.5 \\text{ and } 1\\frac{1}{2}', o: ['1.5 \\text{ and } 1\\frac{1}{2}', '15.0 \\text{ and } 1\\frac{1}{2}', '1.5 \\text{ and } \\frac{3}{4}', '0.15 \\text{ and } 1\\frac{1}{2}'], step: '$$150\\% = \\frac{150}{100} = 1.5$$ and $$\\frac{150}{100} = \\frac{3}{2} = 1\\frac{1}{2}$$' },
  { val: '0.563', desc: 'decimal representation of 0.563', ans: '\\frac{563}{1000} \\text{ and } 56.3\\%', o: ['\\frac{563}{1000} \\text{ and } 56.3\\%', '\\frac{563}{100} \\text{ and } 56.3\\%', '\\frac{563}{1000} \\text{ and } 5.63\\%', '\\frac{563}{1000} \\text{ and } 563\\%'], step: '$$0.563 = \\frac{563}{1000}$$ and $$0.563 \\times 100\\% = 56.3\\%$$' },
  { val: '\\frac{17}{100}', desc: 'fraction representation of \\frac{17}{100}', ans: '0.17 \\text{ and } 17\\%', o: ['0.17 \\text{ and } 17\\%', '1.7 \\text{ and } 17\\%', '0.17 \\text{ and } 1.7\\%', '0.017 \\text{ and } 1.7\\%'], step: '$$\\frac{17}{100} = 0.17$$ and $$\\frac{17}{100} \\times 100\\% = 17\\%$$' },
  { val: '0.307', desc: 'decimal representation of 0.307', ans: '\\frac{307}{1000} \\text{ and } 30.7\\%', o: ['\\frac{307}{1000} \\text{ and } 30.7\\%', '\\frac{307}{100} \\text{ and } 3.07\\%', '\\frac{307}{1000} \\text{ and } 3.07\\%', '\\frac{307}{1000} \\text{ and } 307\\%'], step: '$$0.307 = \\frac{307}{1000}$$ and $$0.307 \\times 100\\% = 30.7\\%$$' },
  { val: '\\frac{7}{8}', desc: 'fraction representation of \\frac{7}{8}', ans: '0.875 \\text{ and } 87.5\\%', o: ['0.875 \\text{ and } 87.5\\%', '0.875 \\text{ and } 8.75\\%', '0.785 \\text{ and } 78.5\\%', '0.625 \\text{ and } 62.5\\%'], step: '$$\\frac{7}{8} = 7 \\div 8 = 0.875$$ and $$0.875 \\times 100\\% = 87.5\\%$$' }
];

q8Params.forEach((param, i) => {
  questions.push({
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and Ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `A quantity has a ${param.desc}. What are its equivalent representations?`,
    options: param.o.map(x => `$$${x}$$`),
    answer: 0,
    solution: `<div style="text-align: left;"><p>Converting the value step-by-step:</p><p>${param.step}</p></div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q9: Convert fractions with recurring or unusual denominators to percentages (a to j)
// ========================================================
const q9Params = [
  { f: '\\frac{5}{6}', ans: '83\\frac{1}{3}\\%', o: ['83\\frac{1}{3}\\%', '83.3\\%', '83\\frac{2}{3}\\%', '80%'], step: '$$\\frac{5}{6} \\times 100\\% = \\frac{500}{6}\\% = \\frac{250}{3}\\% = 83\\frac{1}{3}\\%$$' },
  { f: '\\frac{3}{8}', ans: '37.5\\%', o: ['37.5\\%', '37\\frac{1}{4}\\%', '35.5\\%', '37.8\\%'], step: '$$\\frac{3}{8} \\times 100\\% = \\frac{300}{8}\\% = \\frac{75}{2}\\% = 37.5\\%$$' },
  { f: '\\frac{5}{8}', ans: '62.5\\%', o: ['62.5\\%', '62\\frac{1}{4}\\%', '65.5\\%', '60%'], step: '$$\\frac{5}{8} \\times 100\\% = \\frac{500}{8}\\% = \\frac{125}{2}\\% = 62.5\\%$$' },
  { f: '\\frac{3}{7}', ans: '42\\frac{6}{7}\\%', o: ['42\\frac{6}{7}\\%', '42.8\\%', '42\\frac{3}{7}\\%', '43\\%'], step: '$$\\frac{3}{7} \\times 100\\% = \\frac{300}{7}\\% = 42\\frac{6}{7}\\%$$' },
  { f: '\\frac{1}{6}', ans: '16\\frac{2}{3}\\%', o: ['16\\frac{2}{3}\\%', '16.6\\%', '16\\frac{1}{3}\\%', '15%'], step: '$$\\frac{1}{6} \\times 100\\% = \\frac{100}{6}\\% = \\frac{50}{3}\\% = 16\\frac{2}{3}\\%$$' },
  { f: '\\frac{4}{9}', ans: '44\\frac{4}{9}\\%', o: ['44\\frac{4}{9}\\%', '44.4\\%', '44\\frac{1}{9}\\%', '40%'], step: '$$\\frac{4}{9} \\times 100\\% = \\frac{400}{9}\\% = 44\\frac{4}{9}\\%$$' },
  { f: '\\frac{6}{11}', ans: '54\\frac{6}{11}\\%', o: ['54\\frac{6}{11}\\%', '54.5\\%', '54\\frac{5}{11}\\%', '50%'], step: '$$\\frac{6}{11} \\times 100\\% = \\frac{600}{11}\\% = 54\\frac{6}{11}\\%$$' },
  { f: '\\frac{5}{12}', ans: '41\\frac{2}{3}\\%', o: ['41\\frac{2}{3}\\%', '41.6\\%', '41\\frac{1}{3}\\%', '40%'], step: '$$\\frac{5}{12} \\times 100\\% = \\frac{500}{12}\\% = \\frac{125}{3}\\% = 41\\frac{2}{3}\\%$$' },
  { f: '\\frac{6}{7}', ans: '85\\frac{5}{7}\\%', o: ['85\\frac{5}{7}\\%', '85.7\\%', '85\\frac{3}{7}\\%', '86%'], step: '$$\\frac{6}{7} \\times 100\\% = \\frac{600}{7}\\% = 85\\frac{5}{7}\\%$$' },
  { f: '\\frac{7}{12}', ans: '58\\frac{1}{3}\\%', o: ['58\\frac{1}{3}\\%', '58.3\\%', '58\\frac{2}{3}\\%', '60%'], step: '$$\\frac{7}{12} \\times 100\\% = \\frac{700}{12}\\% = \\frac{175}{3}\\% = 58\\frac{1}{3}\\%$$' }
];

q9Params.forEach((param, i) => {
  questions.push({
    chapterId: 'y7-14',
    chapterTitle: 'Chapter 14: Percentages and Ratios',
    topicId: 'y7-14a',
    topicCode: '14A',
    topicTitle: 'Percentages, fractions and decimals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Write the following fraction as a percentage: $$${param.f}$$`,
    options: param.o,
    answer: 0,
    solution: `<div style="text-align: left;"><p>To write a fraction as a percentage, multiply by 100%:</p><p>${param.step}</p></div>`,
    createdAt: new Date().toISOString()
  });
});

console.log('Total Chapter 14A questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch14A = async (forceReset = false) => {
  console.log('[Ch14A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch14 (14a to 14f) questions...');
      const topicsToDelete = ['y7-14a', 'y7-14b', 'y7-14c', 'y7-14d', 'y7-14e', 'y7-14f'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch14 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-14a', 'y7-14b', 'y7-14c', 'y7-14d', 'y7-14e', 'y7-14f'];
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
    console.log('[Ch14A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch14A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch14A.js', output);
console.log('Done!');
