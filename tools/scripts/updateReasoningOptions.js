import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.join(__dirname, '../../backup_seeds/seedYear9Ch7Questions.js');
const seedContent = fs.readFileSync(seedPath, 'utf8');
const jsonStr = seedContent.replace(/export\s+const\s+\w+\s*=\s*/, '').replace(/;\s*$/, '');
const seedData = JSON.parse(jsonStr);

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const reasonMap = {
  'Angles at a point add to $360^\\circ$.': 'Angles at a point',
  'Vertically opposite angles are equal.': 'Vertically opposite angles',
  'Angles on a straight line add to $180^\\circ$.': 'Angles on a straight line',
  'Vertically opposite angles and angles on a straight line.': 'Opposite & straight line angles',
  'Vertically opposite angles are equal, and angles at a point add to $360^\\circ$.': 'Opposite & angles at a point',
  'The three angles form a right angle ($90^\\circ$).': 'Right angle sum',
  'Co-interior angles are supplementary ($180^\\circ$).': 'Co-interior angles',
  'Corresponding angles are equal, and co-interior angles add to $180^\\circ$.': 'Corresponding & co-interior angles',
  'Corresponding angles are equal.': 'Corresponding angles',
  'Opposite angles of a parallelogram are equal.': 'Parallelogram opposite angles',
  'Co-interior angles of a parallelogram add to $180^\\circ$.': 'Parallelogram co-interior angles',
  'Alternate interior angles are equal.': 'Alternate interior angles',
  'Teacher to review reasoning.': 'Geometric reasoning',
  'Angle sum of a triangle is $180^\\circ$.': 'Angle sum of a triangle',
  'Angle sum of a quadrilateral is $360^\\circ$.': 'Angle sum of a quadrilateral',
  'Exterior angle of a triangle.': 'Exterior angle of a triangle',
  'Angles in a right triangle and straight line angles.': 'Right triangle & straight line',
  'Base angles of an isosceles triangle are equal.': 'Isosceles base angles',
  'Since the base angles are equal, the triangle is isosceles.': 'Isosceles triangle properties',
  'Equilateral and isosceles triangle properties.': 'Equilateral & isosceles properties',
  'The triangle is equilateral because all three sides are equal.': 'Equilateral triangle properties',
  'All angles are equal, so the triangle is equilateral.': 'Equilateral triangle properties',
  'Isosceles triangle properties.': 'Isosceles triangle properties'
};

const commonDistractors = [
  'Angles on a straight line', 
  'Vertically opposite angles', 
  'Alternate interior angles', 
  'Co-interior angles', 
  'Corresponding angles', 
  'Angles at a point', 
  'Angle sum of a triangle'
];

function getReasonTag(solution) {
  if (!solution) return 'Geometric reasoning';
  for (const key in reasonMap) {
    if (solution.includes(key) || key.includes(solution)) {
      return reasonMap[key];
    }
  }
  return solution.replace(/\\.$/, '');
}

function getRandomDistractors(correctReason, count) {
  const available = commonDistractors.filter(d => !correctReason.includes(d) && !d.includes(correctReason));
  const picked = [];
  while (picked.length < count && available.length > 0) {
    const idx = Math.floor(Math.random() * available.length);
    picked.push(available[idx]);
    available.splice(idx, 1);
  }
  return picked;
}

async function run() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y9-7a').get();
  let count = 0;
  const batch = db.batch();
  
  snapshot.forEach(doc => {
    const data = doc.data();
    if (!data.question.includes('giving reasons')) return;
    
    const originalQ = seedData.find(q => q.id === doc.id);
    if (!originalQ) return;
    
    const correctReason = getReasonTag(originalQ.solution);
    const distractors = getRandomDistractors(correctReason, 2);
    
    // Parse current numeric options
    let oldOptions = data.options;
    if (!oldOptions || oldOptions.length < 4) return;
    let oldAnsIdx = parseInt(data.answer);
    if (isNaN(oldAnsIdx)) oldAnsIdx = 0;
    
    const numCorr = oldOptions[oldAnsIdx].text;
    
    // get wrong numbers
    const wrongNums = oldOptions.filter((o, idx) => idx !== oldAnsIdx).map(o => o.text);
    
    const numW1 = wrongNums[0] || '\\\\(0^\\circ\\\\)';
    const numW2 = wrongNums[1] || '\\\\(0^\\circ\\\\)';
    
    const newOptionsTexts = [
      `${numCorr} (${correctReason})`,
      `${numW1} (${correctReason})`,
      `${numCorr} (${distractors[0] || 'Alternate reasoning'})`,
      `${numW2} (${distractors[1] || 'Alternative property'})`
    ];
    
    // Sort them by the number value inside to look neat, or just randomly shuffle them
    // Actually, sorting alphabetically works well to randomize but keep it deterministic
    newOptionsTexts.sort();
    
    const newOptions = newOptionsTexts.map(t => ({ text: t }));
    const newAnsIdx = newOptionsTexts.findIndex(t => t === `${numCorr} (${correctReason})`);
    
    batch.update(doc.ref, {
      options: newOptions,
      answer: newAnsIdx.toString()
    });
    count++;
  });
  
  console.log(`Prepared ${count} questions for rich reasoning options.`);
  if (count > 0) {
    await batch.commit();
    console.log('Batch commit successful!');
  }
}

run().catch(console.error);
