import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const fractionQuestions = [
  { id: 'y7-4f-q1a', val: '0.3', a: '\\frac{3}{10}' },
  { id: 'y7-4f-q1b', val: '0.9', a: '\\frac{9}{10}' },
  { id: 'y7-4f-q1c', val: '0.01', a: '\\frac{1}{100}' },
  { id: 'y7-4f-q1d', val: '0.07', a: '\\frac{7}{100}' },
  { id: 'y7-4f-q1e', val: '0.4', a: '\\frac{2}{5}' },
  { id: 'y7-4f-q1f', val: '0.8', a: '\\frac{4}{5}' },
  { id: 'y7-4f-q1g', val: '0.15', a: '\\frac{3}{20}' },
  { id: 'y7-4f-q1h', val: '0.04', a: '\\frac{1}{25}' },
  { id: 'y7-4f-q1i', val: '0.125', a: '\\frac{1}{8}' },
  { id: 'y7-4f-q1j', val: '0.625', a: '\\frac{5}{8}' }
];

const mixedQuestions = [
  { id: 'y7-4f-q2a', val: '3.9', a: '3\\frac{9}{10}' },
  { id: 'y7-4f-q2b', val: '5.3', a: '5\\frac{3}{10}' },
  { id: 'y7-4f-q2c', val: '1.5', a: '1\\frac{1}{2}' },
  { id: 'y7-4f-q2d', val: '2.8', a: '2\\frac{4}{5}' },
  { id: 'y7-4f-q2e', val: '12.01', a: '12\\frac{1}{100}' },
  { id: 'y7-4f-q2f', val: '9.09', a: '9\\frac{9}{100}' },
  { id: 'y7-4f-q2g', val: '7.14', a: '7\\frac{7}{50}' },
  { id: 'y7-4f-q2h', val: '13.25', a: '13\\frac{1}{4}' },
  { id: 'y7-4f-q2i', val: '234.34', a: '234\\frac{17}{50}' },
  { id: 'y7-4f-q2j', val: '8.016', a: '8\\frac{2}{125}' }
];

function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}

function createFractionDoc(item) {
  const parts = item.val.split('.');
  const dec = parts[1];
  let placeValue = Math.pow(10, dec.length);
  let placeName = 'tenths';
  if (placeValue === 100) placeName = 'hundredths';
  if (placeValue === 1000) placeName = 'thousandths';
  
  let numerator = parseInt(dec, 10);
  let denominator = placeValue;
  
  let steps = [];
  steps.push({
    explanation: `The decimal ends in the ${placeName} place, so we place the number over ${denominator}.`,
    workingOut: `\\(${item.val} = \\frac{${numerator}}{${denominator}}\\)`,
    graphData: null
  });
  
  let gcd = getGCD(numerator, denominator);
  if (gcd > 1) {
    steps.push({
      explanation: `Simplify the fraction by dividing the numerator and denominator by their highest common factor (${gcd}).`,
      workingOut: `\\(\\frac{${numerator}}{${denominator}} = \\frac{${numerator} \\div ${gcd}}{${denominator} \\div ${gcd}} = \\frac{${numerator/gcd}}{${denominator/gcd}}\\)`,
      graphData: null
    });
  }

  return {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4f',
    topicCode: '4F',
    topicTitle: 'Decimals to fractions',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write \\(${item.val}\\) as a fraction in simplest form.`,
    answer: item.a,
    solutionSteps: steps,
    isNew: true
  };
}

function createMixedDoc(item) {
  const parts = item.val.split('.');
  const whole = parts[0];
  const dec = parts[1];
  let placeValue = Math.pow(10, dec.length);
  let placeName = 'tenths';
  if (placeValue === 100) placeName = 'hundredths';
  if (placeValue === 1000) placeName = 'thousandths';
  
  let numerator = parseInt(dec, 10);
  let denominator = placeValue;
  
  let steps = [];
  steps.push({
    explanation: `Separate the whole number and the decimal part.`,
    workingOut: `\\(${item.val} = ${whole} + 0.${dec}\\)`,
    graphData: null
  });
  
  steps.push({
    explanation: `The decimal part ends in the ${placeName} place, so we place the number over ${denominator}.`,
    workingOut: `\\(${whole} + \\frac{${numerator}}{${denominator}}\\)`,
    graphData: null
  });
  
  let gcd = getGCD(numerator, denominator);
  if (gcd > 1) {
    steps.push({
      explanation: `Simplify the fraction by dividing the numerator and denominator by their highest common factor (${gcd}).`,
      workingOut: `\\(${whole} + \\frac{${numerator} \\div ${gcd}}{${denominator} \\div ${gcd}} = ${whole}\\frac{${numerator/gcd}}{${denominator/gcd}}\\)`,
      graphData: null
    });
  } else {
    steps.push({
      explanation: `Combine the whole number and the fraction.`,
      workingOut: `\\(${whole}\\frac{${numerator}}{${denominator}}\\)`,
      graphData: null
    });
  }

  return {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4f',
    topicCode: '4F',
    topicTitle: 'Decimals to fractions',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write \\(${item.val}\\) as a mixed numeral in simplest form.`,
    answer: item.a,
    solutionSteps: steps,
    isNew: true
  };
}

async function run() {
  let count = 0;
  for (const item of fractionQuestions) {
    const docData = createFractionDoc(item);
    await db.collection('questions').doc(item.id).set(docData);
    count++;
  }
  for (const item of mixedQuestions) {
    const docData = createMixedDoc(item);
    await db.collection('questions').doc(item.id).set(docData);
    count++;
  }
  console.log(`Successfully restored ${count} questions to y7-4f.`);
}

run().catch(console.error);
