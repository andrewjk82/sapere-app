import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}

function generateSteps(questionText) {
  let steps = [];
  
  if (questionText.includes('mixed numeral')) {
    let match = questionText.match(/Write \\\(([\d.]+)\\\) as a mixed numeral/);
    if (match) {
      const numStr = match[1];
      const parts = numStr.split('.');
      const whole = parts[0];
      const dec = parts[1];
      
      steps.push({
        explanation: 'Separate the whole number and the decimal part.',
        workingOut: `\\(${numStr} = ${whole} + 0.${dec}\\)`,
        graphData: null
      });
      
      let placeValue = Math.pow(10, dec.length);
      let placeName = 'tenths';
      if (placeValue === 100) placeName = 'hundredths';
      if (placeValue === 1000) placeName = 'thousandths';
      
      let numerator = parseInt(dec, 10);
      let denominator = placeValue;
      
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
    }
  } else {
    let match = questionText.match(/Write \\\(([\d.]+)\\\) as a fraction/);
    if (match) {
      const numStr = match[1];
      const parts = numStr.split('.');
      const dec = parts[1];
      
      let placeValue = Math.pow(10, dec.length);
      let placeName = 'tenths';
      if (placeValue === 100) placeName = 'hundredths';
      if (placeValue === 1000) placeName = 'thousandths';
      
      let numerator = parseInt(dec, 10);
      let denominator = placeValue;
      
      steps.push({
        explanation: `The decimal ends in the ${placeName} place, so we place the number over ${denominator}.`,
        workingOut: `\\(${numStr} = \\frac{${numerator}}{${denominator}}\\)`,
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
    }
  }
  return steps;
}

const customSteps = {
  'KM8RnHjwRzdGjHDaoE1X': [
    { explanation: 'Convert the fractions to a common denominator.', workingOut: '\\(\\frac{11}{12} - \\frac{1}{4} = \\frac{11}{12} - \\frac{3}{12}\\)', graphData: null },
    { explanation: 'Subtract the numerators.', workingOut: '\\(\\frac{11 - 3}{12} = \\frac{8}{12}\\)', graphData: null },
    { explanation: 'Simplify the fraction.', workingOut: '\\(\\frac{8}{12} = \\frac{2}{3}\\)', graphData: null }
  ],
  'RkkzKW8QOXw2cMv1O6Sk': [
    { explanation: 'Find a common denominator for the options, which is 12.', workingOut: '\\(\\frac{1}{2} = \\frac{6}{12}\\)', graphData: null },
    { explanation: 'Convert the fractions in the correct option to the common denominator.', workingOut: '\\(\\frac{1}{6} + \\frac{1}{4} + \\frac{1}{12} = \\frac{2}{12} + \\frac{3}{12} + \\frac{1}{12}\\)', graphData: null },
    { explanation: 'Add the numerators.', workingOut: '\\(\\frac{2 + 3 + 1}{12} = \\frac{6}{12}\\)', graphData: null },
    { explanation: 'Simplify to confirm.', workingOut: '\\(\\frac{6}{12} = \\frac{1}{2}\\)', graphData: null }
  ],
  'bWfqpcDdWZr3eYp6BQrD': [
    { explanation: 'Convert the correct option fractions to a common denominator of 8.', workingOut: '\\(\\frac{1}{2} = \\frac{4}{8}\\) and \\(\\frac{1}{4} = \\frac{2}{8}\\)', graphData: null },
    { explanation: 'Add the fractions.', workingOut: '\\(\\frac{4}{8} + \\frac{2}{8} + \\frac{1}{8}\\)', graphData: null },
    { explanation: 'Add the numerators.', workingOut: '\\(\\frac{4 + 2 + 1}{8} = \\frac{7}{8}\\)', graphData: null }
  ],
  'c7bdCzuNdy4b11rYdTIv': [
    { explanation: 'Test the options. Find the difference for the correct option.', workingOut: '\\(\\frac{11}{12} - \\frac{1}{3} = \\frac{11}{12} - \\frac{4}{12}\\)', graphData: null },
    { explanation: 'Subtract the numerators.', workingOut: '\\(\\frac{11 - 4}{12} = \\frac{7}{12}\\)', graphData: null },
    { explanation: 'Compare with \\(\\frac{1}{2}\\).', workingOut: '\\(\\frac{1}{2} = \\frac{6}{12}\\)', graphData: null },
    { explanation: 'Since \\(\\frac{7}{12} > \\frac{6}{12}\\), it is strictly a little more.', workingOut: '\\(\\frac{7}{12} > \\frac{1}{2}\\)', graphData: null }
  ],
  'kaEQiZzZfQd4dxQ3xZfc': [
    { explanation: 'Write down the sum of the fractions.', workingOut: '\\(\\frac{3}{4} + 1\\frac{1}{2} + \\frac{1}{8}\\)', graphData: null },
    { explanation: 'Convert the mixed numeral to an improper fraction.', workingOut: ' \\(1\\frac{1}{2} = \\frac{3}{2}\\)', graphData: null },
    { explanation: 'Find a common denominator, which is 8.', workingOut: '\\(\\frac{6}{8} + \\frac{12}{8} + \\frac{1}{8}\\)', graphData: null },
    { explanation: 'Add the numerators.', workingOut: '\\(\\frac{6 + 12 + 1}{8} = \\frac{19}{8}\\)', graphData: null },
    { explanation: 'Convert back to a mixed numeral.', workingOut: '\\(\\frac{19}{8} = 2\\frac{3}{8}\\)', graphData: null }
  ]
};

async function run() {
  const snap = await db.collection('questions').get();
  let updatedCount = 0;
  
  for (const doc of snap.docs) {
    const data = doc.data();
    const tId = data.topicId || data.TopicId;
    if (tId === 'y7-4f' || tId === 'y7-04f') {
      let steps = [];
      if (customSteps[doc.id]) {
        steps = customSteps[doc.id];
      } else {
        steps = generateSteps(data.question);
      }
      
      if (steps.length > 0) {
        await db.collection('questions').doc(doc.id).update({
          solutionSteps: steps
        });
        console.log('Fixed steps for Q ID:', doc.id);
        updatedCount++;
      }
    }
  }
  
  console.log('Updated ' + updatedCount + ' questions.');
}
run().catch(console.error);
