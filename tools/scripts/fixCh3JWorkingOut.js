#!/usr/bin/env node
/**
 * Fix Ch3J workingOut field issues:
 * 1. "and collect like terms: ..." sentence fragments → extract the expression only
 * 2. Long prose word problem text in workingOut → replace with the key formula/setup
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDV4CjHNMGk2Aj4TdG53Rj5lOnHRFYi8TI",
  authDomain: "sapere-app-5d9ff.firebaseapp.com",
  projectId: "sapere-app-5d9ff",
  storageBucket: "sapere-app-5d9ff.appspot.com",
  messagingSenderId: "440895013413",
  appId: "1:440895013413:web:3f2c58c9ee6fd3bdc6cd5f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Word-problem specific fixes for q7, q8, q10
const WORD_PROBLEM_FIXES = {
  'y10-3j-q7': {
    step0workingOut: '\\\\(\\\\text{Let } v = \\\\text{walking speed (km/min)}, \\\\quad \\\\text{running speed} = 3v\\\\)',
    step0explanation: 'Define variables for the unknown quantities. Let v represent the walking speed in km/min. Since running speed is 3 times faster, the running speed = 3v. The total distance equation is: distance walked + distance run = 4 km.',
    step1workingOut: '\\\\(12v + 6(3v) = 4 \\\\implies 30v = 4 \\\\implies v = \\\\frac{2}{15} \\\\text{ km/min}\\\\)',
    step1explanation: 'Set up the equation using distance = speed × time. Walking: 12 × v km, Running: 6 × 3v km. Combine: 12v + 18v = 4, so 30v = 4, giving v = 2/15 km/min.',
    step2workingOut: '\\\\(\\\\text{Running speed} = 3v = 3 \\\\times \\\\frac{2}{15} = \\\\frac{6}{15} = 0.4 \\\\text{ km/min} = 24 \\\\text{ km/h}\\\\)',
    step2explanation: 'Convert the running speed to km/h by multiplying by 60. Running speed = 3v = 3 × (2/15) = 6/15 km/min = 0.4 km/min × 60 = 24 km/h.',
  },
  'y10-3j-q8': {
    step0workingOut: '\\\\(\\\\text{Let } x = \\\\text{litres drained. Antifreeze remaining} = 0.5(10 - x) + x\\\\)',
    step0explanation: 'Define the variable: let x = litres drained and replaced with pure antifreeze. After draining x litres of 50% antifreeze, the remaining antifreeze = 0.5(10 - x). Adding back x litres of pure antifreeze gives total antifreeze = 0.5(10 - x) + x.',
    step1workingOut: '\\\\(0.5(10 - x) + x = 0.8 \\\\times 10 \\\\implies 5 - 0.5x + x = 8 \\\\implies 0.5x = 3\\\\)',
    step1explanation: 'Set up the equation: the new mixture must be 80% antifreeze in 10 L total, so total antifreeze = 8 L. Expand and simplify: 5 - 0.5x + x = 8, which gives 0.5x = 3.',
    step2workingOut: '\\\\(x = \\\\frac{3}{0.5} = 6 \\\\text{ litres}\\\\)',
    step2explanation: 'Solve for x: x = 3 ÷ 0.5 = 6 litres. Therefore, 6 litres must be drained from the radiator and replaced with pure antifreeze to achieve the 80% antifreeze mixture.',
  },
  'y10-3j-q10': {
    step0workingOut: '\\\\(P = I^2 R, \\\\quad I = 5.0 \\\\times 10^3, \\\\quad R = 3.2 \\\\times 10^{-1}\\\\)',
    step0explanation: 'Identify the formula and substitute the given values. The power formula is P = I²R. Here I = 5.0 × 10³ amps and R = 3.2 × 10⁻¹ ohms. Substituting these values gives P = (5.0 × 10³)² × (3.2 × 10⁻¹).',
    step1workingOut: '\\\\(P = (5.0)^2 \\\\times (10^3)^2 \\\\times 3.2 \\\\times 10^{-1} = 25 \\\\times 10^6 \\\\times 3.2 \\\\times 10^{-1}\\\\)',
    step1explanation: 'Square the current: (5.0 × 10³)² = 5.0² × (10³)² = 25 × 10⁶. Then multiply by the resistance: 25 × 10⁶ × 3.2 × 10⁻¹. Combine the powers of 10 using the index law aᵐ × aⁿ = aᵐ⁺ⁿ.',
    step2workingOut: '\\\\(P = 25 \\\\times 3.2 \\\\times 10^{6-1} = 80 \\\\times 10^5 = 8.0 \\\\times 10^6 \\\\text{ W}\\\\)',
    step2explanation: 'Calculate: 25 × 3.2 = 80. Then 80 × 10⁵ in standard form = 8.0 × 10⁶ watts. This is the power consumed by the furnace.',
  }
};

async function fixWorkingOut() {
  console.log('Fetching y10-3j questions from Firestore...');
  const topicRef = collection(db, 'topics', 'y10-3j', 'questions');
  const snapshot = await getDocs(topicRef);
  
  let fixedCount = 0;
  const updates = [];

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const id = data.id || docSnap.id;
    let changed = false;
    let steps = data.solutionSteps ? [...data.solutionSteps] : null;

    // Handle word problem fixes
    if (WORD_PROBLEM_FIXES[id] && steps) {
      const fix = WORD_PROBLEM_FIXES[id];
      steps[0] = { ...steps[0], workingOut: fix.step0workingOut, explanation: fix.step0explanation };
      steps[1] = { ...steps[1], workingOut: fix.step1workingOut, explanation: fix.step1explanation };
      steps[2] = { ...steps[2], workingOut: fix.step2workingOut, explanation: fix.step2explanation };
      changed = true;
      console.log(`Fixed word problem: ${id}`);
    }

    // Handle "and collect like terms:" garbage prefix in workingOut
    if (steps) {
      steps = steps.map((step, i) => {
        if (step.workingOut && step.workingOut.includes('and collect like terms:')) {
          // Extract just the expression after the prefix
          const match = step.workingOut.match(/and collect like terms:\s*(.+?)\\\\\\)/);
          if (match) {
            const expr = match[1].trim();
            const newWorkingOut = `\\\\(${expr}\\\\)`;
            changed = true;
            console.log(`Fixed "and collect like terms" in ${id} step ${i+1}: ${newWorkingOut.substring(0, 60)}`);
            return { ...step, workingOut: newWorkingOut };
          }
        }
        return step;
      });
    }

    if (changed && steps) {
      updates.push({ ref: docSnap.ref, steps });
      fixedCount++;
    }
  });

  // Also check sub-questions in documents that have them
  // (subQuestions are stored as arrays in the parent doc - handled above)

  console.log(`\nApplying ${updates.length} updates to Firestore...`);
  for (const update of updates) {
    await updateDoc(update.ref, { solutionSteps: update.steps });
  }

  console.log(`\nDone! Fixed ${fixedCount} documents.`);
  process.exit(0);
}

fixWorkingOut().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
