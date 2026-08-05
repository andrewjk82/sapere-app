import fs from 'fs';
import path from 'path';

// Define the mathematical facts for each question to generate dynamic, high-quality steps and distractors
const data = {
  'y8-16a-q1': { total: 4, fav: 1, step1: 'The word HOPE has 4 letters.', step2: 'There is exactly 1 letter E.', ans: '1/4', d: ['1/3', '1/5', '3/4'] },
  'y8-16a-q2': { total: 8, fav: 3, step1: 'The numbers are 11, 12, 13, 14, 15, 16, 17, 18. There are 8 numbers in total.', step2: 'The prime numbers in this list are 11, 13, and 17. (Note: 15 is divisible by 3 and 5, so it is not prime). There are 3 prime numbers.', ans: '3/8', d: ['4/8', '2/8', '5/8'] },
  'y8-16a-q3': { total: 8, fav: 1, step1: 'There are 8 differently priced laptops in total.', step2: 'There is exactly 1 most expensive laptop.', ans: '1/8', d: ['1/7', '1/9', '7/8'] },
  'y8-16a-q4': { total: 10, fav: 3, step1: 'The set has 10 numbers (from 4 to 13 inclusive).', step2: 'The numbers divisible by 3 are 6, 9, and 12. There are 3 such numbers.', ans: '3/10', d: ['4/10', '2/10', '3/9'] },
  'y8-16a-q5': { total: 250, fav: 1, step1: 'There are 250 tickets sold in total.', step2: 'You have bought 1 ticket, which is the only favourable outcome.', ans: '1/250', d: ['1/249', '249/250', '10/250'] },
  'y8-16a-q6': { total: 52, fav: 1, step1: 'A standard deck of playing cards contains 52 cards.', step2: 'There is exactly 1 Queen of Spades in the deck.', ans: '1/52', d: ['4/52', '13/52', '1/13'] },
  'y8-16a-q7': { total: 25, fav: 2, step1: 'The first 25 positive whole numbers mean the numbers from 1 to 25. There are 25 numbers.', step2: 'A number exactly divisible by both 2 and 5 must be divisible by their lowest common multiple, which is 10. The numbers are 10 and 20. There are 2 such numbers.', ans: '2/25', d: ['5/25', '12/25', '3/25'] },
  
  'y8-16a-q8a': { total: 52, fav: 4, step1: 'A standard deck has 52 cards.', step2: 'There are 4 Kings in a deck (one for each suit).', ans: '4/52', simp: '1/13', d: ['1/52', '12/52', '4/48'] },
  'y8-16a-q8b': { total: 52, fav: 26, step1: 'A standard deck has 52 cards.', step2: 'Half of the deck is black (Clubs and Spades). There are 26 black cards.', ans: '26/52', simp: '1/2', d: ['13/52', '2/52', '1/4'] },
  'y8-16a-q8c': { total: 52, fav: 13, step1: 'A standard deck has 52 cards.', step2: 'There are 4 suits, and each suit has 13 cards. There are 13 Clubs.', ans: '13/52', simp: '1/4', d: ['1/52', '4/52', '13/39'] },
  'y8-16a-q8d': { total: 52, fav: 12, step1: 'A standard deck has 52 cards.', step2: 'The face cards are Jack, Queen, and King. There are 3 face cards per suit, and 4 suits, so 3 * 4 = 12 face cards.', ans: '12/52', simp: '3/13', d: ['4/52', '16/52', '3/52'] },
  
  'y8-16a-q9': { total: 160, fav: 24, step1: 'There are 160 pages in total.', step2: 'There are 24 pages with a picture.', ans: '24/160', simp: '3/20', d: ['24/136', '3/10', '1/24'] },
  
  'y8-16a-q10a': { total: 28, fav: 14, step1: 'Total marbles = 14 (blue) + 6 (green) + 8 (purple) = 28 marbles.', step2: 'There are 14 blue marbles.', ans: '14/28', simp: '1/2', d: ['14/14', '1/3', '14/20'] },
  'y8-16a-q10b': { total: 28, fav: 6, step1: 'Total marbles = 28.', step2: 'There are 6 green marbles.', ans: '6/28', simp: '3/14', d: ['6/22', '3/7', '1/6'] },
  'y8-16a-q10c': { total: 28, fav: 14, step1: 'Total marbles = 28. To find "not blue", we can subtract the probability of "blue" from 1, or count the non-blue marbles.', step2: 'Non-blue marbles = 6 (green) + 8 (purple) = 14.', ans: '14/28', simp: '1/2', d: ['1/3', '3/14', '4/7'] },
  
  'y8-16a-q11': { total: 360, fav: 8, step1: 'There are 360 tickets in total.', step2: 'You bought 8 tickets, which are your favourable outcomes.', ans: '8/360', simp: '1/45', d: ['1/360', '8/352', '1/8'] },
  
  'y8-16a-q12a': { total: 25, fav: 13, step1: 'The numbers go from 0 to 24 inclusive, which means there are 25 numbers in total (don\'t forget the 0!).', step2: 'The even numbers are 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24. There are 13 even numbers.', ans: '13/25', d: ['12/25', '12/24', '13/24'] },
  'y8-16a-q12b': { total: 25, fav: 12, step1: 'There are 25 numbers in total (0 to 24).', step2: 'The odd numbers are 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23. There are 12 odd numbers.', ans: '12/25', d: ['13/25', '12/24', '1/2'] },
  'y8-16a-q12c': { total: 25, fav: 7, step1: 'There are 25 numbers in total (0 to 24).', step2: 'The numbers less than 8 excluding zero are 1, 2, 3, 4, 5, 6, 7. There are 7 such numbers.', ans: '7/25', d: ['8/25', '7/24', '8/24'] },
  
  'y8-16a-q13': { total: 16, fav: 10, step1: 'There are 16 numbers in total (1 to 16).', step2: 'The prime numbers are 2, 3, 5, 7, 11, 13 (6 numbers). The non-prime numbers are the rest: 1, 4, 6, 8, 9, 10, 12, 14, 15, 16 (10 numbers). Note: 1 is NOT a prime number.', ans: '10/16', simp: '5/8', d: ['3/8', '6/16', '1/2'] },
  'y8-16a-q14': { total: 52, fav: 40, step1: 'A standard deck has 52 cards.', step2: 'There are 12 face cards (3 per suit * 4 suits). Therefore, there are 52 - 12 = 40 cards that are not face cards.', ans: '40/52', simp: '10/13', d: ['3/13', '40/48', '1/4'] },
  'y8-16a-q15': { total: 26, fav: 22, step1: 'There are 26 letters in the alphabet.', step2: 'The word SPIN has 4 distinct letters. Therefore, there are 26 - 4 = 22 letters that are not in the word SPIN.', ans: '22/26', simp: '11/13', d: ['2/13', '22/24', '4/26'] },
  'y8-16a-q16': { total: 80, fav: 64, step1: 'There are 80 pens in total.', step2: 'There are 16 blue pens. The number of not blue pens is 80 - 16 = 64.', ans: '64/80', simp: '4/5', d: ['1/5', '16/80', '64/64'] },
  'y8-16a-q17': { total: 15, fav: 12, step1: 'There are 15 numbers in total (1 to 15).', step2: 'The numbers exactly divisible by 5 are 5, 10, 15 (3 numbers). The number of non-divisible numbers is 15 - 3 = 12.', ans: '12/15', simp: '4/5', d: ['1/5', '3/15', '4/15'] },
  'y8-16a-q18': { total: 7, fav: 5, step1: 'The word STUDENT has 7 letters.', step2: 'The vowels are U, E (2 letters). The letters that are not vowels are S, T, D, N, T (5 letters).', ans: '5/7', d: ['2/7', '5/5', '1/7'] },
  'y8-16a-q19': { total: 300, fav: 285, step1: 'There are 300 tickets in total.', step2: 'You bought 15 tickets. The tickets that will not win first prize for you are the remaining 300 - 15 = 285 tickets.', ans: '285/300', simp: '19/20', d: ['1/20', '15/300', '19/21'] },
  'y8-16a-q20': { total: 6, fav: 2, step1: 'A die has 6 faces: 1, 2, 3, 4, 5, 6.', step2: 'The scores of 3 or more are 3, 4, 5, 6 (4 outcomes). The scores NOT 3 or more are 1, 2 (2 outcomes).', ans: '2/6', simp: '1/3', d: ['2/3', '4/6', '1/6'] },
  'y8-16a-q21': { total: 150, fav: 144, step1: 'There are 150 envelopes in total.', step2: '6 contain a voucher. The envelopes that do NOT contain a voucher are 150 - 6 = 144 envelopes.', ans: '144/150', simp: '24/25', d: ['1/25', '6/150', '24/24'] },
  'y8-16a-q22': { total: 52, fav: 16, step1: 'A standard deck has 52 cards.', step2: 'Number cards from 2 to 10 inclusive means 9 cards per suit. With 4 suits, there are 36 number cards. The remaining cards (Aces, Jacks, Queens, Kings) total 52 - 36 = 16 cards.', ans: '16/52', simp: '4/13', d: ['9/13', '36/52', '1/13'] },
  
  'y8-16a-q23a': { total: 10, fav: 1, step1: 'The word PERCENTAGE has 10 letters.', step2: 'There is exactly 1 P.', ans: '1/10', d: ['2/10', '1/9', '9/10'] },
  'y8-16a-q23b': { total: 10, fav: 3, step1: 'The word PERCENTAGE has 10 letters.', step2: 'There are 3 E\'s.', ans: '3/10', d: ['2/10', '1/10', '7/10'] },
  'y8-16a-q23c': { total: 10, fav: 4, step1: 'The word PERCENTAGE has 10 letters.', step2: 'The vowels in the word are E, E, A, E (4 vowels).', ans: '4/10', simp: '2/5', d: ['3/5', '4/10', '1/5'] },
  'y8-16a-q23d': { total: 10, fav: 7, step1: 'The word PERCENTAGE has 10 letters.', step2: 'There are 3 E\'s, so there are 10 - 3 = 7 letters that are not E.', ans: '7/10', d: ['3/10', '1/10', '7/9'] },
  
  'y8-16a-q24a': { total: 52, fav: 4, step1: 'A standard deck has 52 cards.', step2: 'There are 4 Queens.', ans: '4/52', simp: '1/13', d: ['12/52', '1/52', '3/13'] },
  'y8-16a-q24b': { total: 52, fav: 13, step1: 'A standard deck has 52 cards.', step2: 'There are 13 Diamonds in a deck.', ans: '13/52', simp: '1/4', d: ['1/52', '4/52', '3/4'] },
  'y8-16a-q24c': { total: 52, fav: 39, step1: 'A standard deck has 52 cards.', step2: 'There are 13 Hearts. The number of non-Heart cards is 52 - 13 = 39.', ans: '39/52', simp: '3/4', d: ['1/4', '13/52', '39/40'] },
  'y8-16a-q24d': { total: 52, fav: 44, step1: 'A standard deck has 52 cards.', step2: 'There are four 9s and four 10s (8 cards in total). The number of cards that are neither is 52 - 8 = 44.', ans: '44/52', simp: '11/13', d: ['2/13', '8/52', '44/48'] },
  
  'y8-16a-q25a': { total: 18, fav: 12, step1: 'Total marbles = 12 (green) + 1 (red) + 1 (yellow) + 1 (blue) + 1 (orange) + 1 (purple) + 1 (white) = 18 marbles.', step2: 'There are 12 green marbles.', ans: '12/18', simp: '2/3', d: ['1/3', '12/19', '1/18'] },
  'y8-16a-q25b': { total: 18, fav: 6, step1: 'Total marbles = 18.', step2: 'There are 18 - 12 = 6 marbles that are not green.', ans: '6/18', simp: '1/3', d: ['2/3', '6/12', '1/18'] },
  'y8-16a-q25c': { total: 18, fav: 1, step1: 'Total marbles = 18.', step2: 'There is exactly 1 white marble.', ans: '1/18', d: ['1/17', '1/6', '2/18'] },
  'y8-16a-q25d': { total: 18, fav: 5, step1: 'Total marbles = 18.', step2: 'There are 12 green and 1 red (13 marbles). The remaining marbles are 18 - 13 = 5.', ans: '5/18', d: ['13/18', '5/13', '1/18'] },
  
  'y8-16a-q26a': { total: 80, fav: 36, step1: 'There are 80 fruits in total.', step2: 'There are 36 bananas.', ans: '36/80', simp: '9/20', d: ['11/20', '36/44', '9/10'] },
  'y8-16a-q26b': { total: 80, fav: 48, step1: 'There are 80 fruits in total.', step2: 'There are 32 apples, so there are 80 - 32 = 48 fruits that are not apples.', ans: '48/80', simp: '3/5', d: ['2/5', '32/80', '48/32'] },
  'y8-16a-q26c': { total: 80, fav: 12, step1: 'There are 80 fruits in total.', step2: 'Number of oranges = 80 - 32 (apples) - 36 (bananas) = 12 oranges.', ans: '12/80', simp: '3/20', d: ['17/20', '12/68', '3/10'] },
  'y8-16a-q26d': { total: 80, fav: 0, step1: 'There are 80 fruits in total.', step2: 'There are no pears in the basket. This is an impossible event.', ans: '0/80', simp: '0', d: ['1/80', '80/80', '1/4'] },
  
  'y8-16a-q27a': { total: 50, fav: 10, step1: 'There are 50 numbers in total (1 to 50).', step2: 'Numbers divisible by 5 are 5, 10, 15, ..., 50. There are 50 / 5 = 10 such numbers.', ans: '10/50', simp: '1/5', d: ['4/5', '10/40', '1/50'] },
  'y8-16a-q27b': { total: 50, fav: 3, step1: 'There are 50 numbers in total.', step2: 'Numbers divisible by both 5 and 3 must be divisible by their lowest common multiple, 15. The numbers are 15, 30, 45. (3 numbers).', ans: '3/50', d: ['13/50', '3/47', '5/50'] },
  'y8-16a-q27c': { total: 50, fav: 7, step1: 'There are 50 numbers in total.', step2: 'We know there are 10 numbers divisible by 5. Of these, 3 are also divisible by 3 (15, 30, 45). So the numbers divisible by 5 but NOT 3 are 10 - 3 = 7 numbers.', ans: '7/50', d: ['10/50', '3/50', '7/43'] },
  'y8-16a-q27d': { total: 50, fav: 5, step1: 'There are 50 numbers in total.', step2: 'Numbers that are even AND divisible by 5 must be divisible by 10. The numbers are 10, 20, 30, 40, 50. (5 numbers).', ans: '5/50', simp: '1/10', d: ['1/5', '9/10', '5/45'] }
};

const filepath = path.resolve('src/constants/seedYear8Ch16Questions.js');
let content = fs.readFileSync(filepath, 'utf8');

const exportMatch = content.match(/export const (Y8_CH16A_QUESTIONS) = /);
const prefix = 'export const ' + exportMatch[1] + ' = ';
const startIndex = content.indexOf(prefix);
let arrayContent = content.substring(startIndex + prefix.length).trim();
if (arrayContent.endsWith(';')) arrayContent = arrayContent.substring(0, arrayContent.length - 1);

const questions = eval('(' + arrayContent + ')');

function getFracLatex(fracStr) {
  if (fracStr === '0') return '0';
  if (fracStr === '1') return '1';
  const parts = fracStr.split('/');
  if (parts.length === 1) return fracStr;
  return '\\\\frac{' + parts[0] + '}{' + parts[1] + '}';
}

function buildOpts(correct, distractors) {
  const opts = [
    '\\\\(' + getFracLatex(correct) + '\\\\)',
    '\\\\(' + getFracLatex(distractors[0]) + '\\\\)',
    '\\\\(' + getFracLatex(distractors[1]) + '\\\\)',
    '\\\\(' + getFracLatex(distractors[2]) + '\\\\)'
  ];
  return opts;
}

for (const q of questions) {
  const d = data[q.id];
  if (!d) continue; 
  
  const correctFrac = d.simp ? d.simp : d.ans;
  
  q.opts = buildOpts(correctFrac, d.d);
  
  const originalOpts = [...q.opts];
  const hash = q.id.charCodeAt(q.id.length - 1) % 4;
  
  const newOpts = [];
  for (let i = 0; i < 4; i++) {
    newOpts.push(originalOpts[(i + hash) % 4]);
  }
  q.opts = newOpts;
  q.a = q.opts.indexOf('\\\\(' + getFracLatex(correctFrac) + '\\\\)');
  q.answer = q.a.toString();
  
  q.solutionSteps = [
    {
      explanation: "Identify the total number of possible outcomes (the sample space).",
      workingOut: '\\\\text{Total outcomes} = ' + d.total + ' \\\\text{ (' + d.step1 + ')}',
      graphData: null
    },
    {
      explanation: "Identify the number of favourable outcomes for the given event.",
      workingOut: '\\\\text{Favourable outcomes} = ' + d.fav + ' \\\\text{ (' + d.step2 + ')}',
      graphData: null
    },
    {
      explanation: "Calculate the probability using the formula: \\\\( P(\\\\text{Event}) = \\\\frac{\\\\text{Favourable}}{\\\\text{Total}} \\\\)",
      workingOut: '\\\\text{Probability} = \\\\frac{' + d.fav + '}{' + d.total + '}',
      graphData: null
    }
  ];
  
  if (d.simp) {
    q.solutionSteps.push({
      explanation: "Simplify the fraction to its lowest terms to find the final answer.",
      workingOut: '\\\\text{Final answer: } \\\\frac{' + d.simp.split('/')[0] + '}{' + d.simp.split('/')[1] + '}',
      graphData: null
    });
  } else {
    q.solutionSteps[2].workingOut = '\\\\text{Probability} = \\\\frac{' + d.fav + '}{' + d.total + '} \\\\text{ (Final answer)}';
  }
}

const newContent = prefix + JSON.stringify(questions, null, 2) + ';\n';
fs.writeFileSync(filepath, newContent, 'utf8');
console.log('Successfully rewrote 16A questions locally.');

const adminCode = "import { initializeApp, cert } from 'firebase-admin/app';\\n" +
"import { getFirestore, FieldValue } from 'firebase-admin/firestore';\\n" +
"import fs from 'fs';\\n\\n" +
"async function runPush() {\\n" +
"  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));\\n" +
"  initializeApp({ credential: cert(serviceAccount) });\\n" +
"  const db = getFirestore();\\n\\n" +
"  const { Y8_CH16A_QUESTIONS } = await import('../../../src/constants/seedYear8Ch16Questions.js');\\n" +
"  let count = 0;\\n" +
"  for (const q of Y8_CH16A_QUESTIONS) {\\n" +
"    await db.collection('questions').doc(q.id).set({\\n" +
"      opts: q.opts,\\n" +
"      a: q.a,\\n" +
"      answer: q.answer,\\n" +
"      solutionSteps: q.solutionSteps\\n" +
"    }, { merge: true });\\n" +
"    count++;\\n" +
"  }\\n" +
"  console.log(`Updated ${count} questions in Firestore.`);\\n" +
"}\\nrunPush().catch(console.error);\\n";
fs.writeFileSync(path.resolve('tools/scripts/pushY8Ch16A.mjs'), adminCode, 'utf8');
console.log('Created push script tools/scripts/pushY8Ch16A.mjs');
