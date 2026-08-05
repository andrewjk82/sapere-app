import admin from 'firebase-admin';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const seedFile = 'src/constants/seedYear9Ch14Questions.js';

let content = readFileSync(seedFile, 'utf8');
const match = content.match(/export const Y9_CH14_QUESTIONS = (\[[\s\S]*\]);/);
if (!match) {
    console.error('Could not parse seed file.');
    process.exit(1);
}

let questions = eval(match[1]);
let updatedCount = 0;
const batch = db.batch();

for (let i = 0; i < questions.length; i++) {
    let q = questions[i];
    if (q.c === '14A') {
        let changed = false;
        
        // 1. Clean question text
        if (q.question.includes('Format: x=_, y=_')) {
            q.question = q.question.replace(/\s*Format: x=_, y=_\s*/g, '');
            changed = true;
        }
        
        // 2. Clean distractors
        if (q.opts) {
            for (let j = 0; j < q.opts.length; j++) {
                let opt = q.opts[j];
                let newOpt = opt;
                
                // Fix Yes + 1 / No + 1
                newOpt = newOpt.replace(/Yes \+ 1/g, 'No');
                newOpt = newOpt.replace(/No \+ 1/g, 'Yes');
                // Wait, if options become duplicate, it's fine for distractors
                if (newOpt === '\\(Yes\\)' && q.answer !== j.toString()) {
                     newOpt = '\\(Maybe\\)'; // ensure no duplicate
                }
                
                // Fix -x=2 to x=-2
                newOpt = newOpt.replace(/\\?\(-x=([0-9]+)/g, '\\(x=-$1');
                newOpt = newOpt.replace(/\\?\(-x=-([0-9]+)/g, '\\(x=$1');
                
                // Fix y=2 + 1 to y=3
                const additionMatch = newOpt.match(/y=([0-9-]+)\s*\+\s*([0-9]+)/);
                if (additionMatch) {
                    const sum = parseInt(additionMatch[1]) + parseInt(additionMatch[2]);
                    newOpt = newOpt.replace(/y=[0-9-]+\s*\+\s*[0-9]+/, `y=${sum}`);
                }
                
                if (newOpt !== opt) {
                    q.opts[j] = newOpt;
                    changed = true;
                }
            }
        }
        
        // 3. Clean solutionSteps
        if (q.solutionSteps) {
            for (let step of q.solutionSteps) {
                if (step.explanation && step.explanation.includes('Given: read the full stem carefully')) {
                    step.explanation = 'Determine the equations to solve.';
                    changed = true;
                }
                if (step.explanation && step.explanation.includes('What rule or formula applies?')) {
                    step.explanation = 'Set up the equations.';
                    changed = true;
                }
                if (step.explanation && step.explanation.includes('Carry out the algebra carefully')) {
                    step.explanation = 'Solve the equations simultaneously.';
                    changed = true;
                }
                if (step.explanation && step.explanation.includes('Final answer:')) {
                    step.explanation = 'State the final answer.';
                    changed = true;
                }
                if (step.workingOut && typeof step.workingOut === 'string' && step.workingOut.includes('We are asked to evaluate')) {
                    step.workingOut = 'Solve by graphing or substitution.';
                    changed = true;
                }
            }
        }
        
        if (changed) {
            updatedCount++;
            const docRef = db.collection('questions').doc(q.id);
            batch.update(docRef, q);
        }
    }
}

console.log(`Prepared ${updatedCount} updates for 14A questions.`);

const newContent = 'export const Y9_CH14_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';\n';
writeFileSync(seedFile, newContent);
console.log('Seed file updated successfully.');

const run = async () => {
    await batch.commit();
    console.log('Firestore updated successfully.');
    process.exit(0);
};

run();
