import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const GENERIC_PATTERNS = [
    "Apply the appropriate standard form",
    "Carry out the algebra carefully",
    "Final answer:",
    "What rule or formula applies?",
    "Identify the relevant differentiation/integration",
    "read the full stem carefully and list the known quantities"
  ];

  function generateDistractors(correctAnswerStr) {
    if (correctAnswerStr === "True") return ["False"];
    if (correctAnswerStr === "False") return ["True"];
    
    // Check for "Circle centered at..."
    if (correctAnswerStr.includes("Circle centered at")) {
      return [
        correctAnswerStr.replace("radius 4", "radius 16").replace("(0, 0)", "(4, 4)"),
        correctAnswerStr.replace("radius 4", "radius 2").replace("(4, 0)", "(2, 0)"),
        correctAnswerStr.replace("centered at (0, 0)", "centered at (1, 1)")
      ];
    }
    
    // Check for coordinates like "(5, 12)"
    const coordMatch = correctAnswerStr.match(/^\(([-]?\d+),\s*([-]?\d+)\)$/);
    if (coordMatch) {
      let x = parseFloat(coordMatch[1]);
      let y = parseFloat(coordMatch[2]);
      return [
        `(${y}, ${x})`,
        `(${-x}, ${y})`,
        `(${x}, ${-y})`
      ];
    }

    // Try to parse numeric
    const cleanStr = correctAnswerStr.replace(/[^\d.-]/g, '');
    const num = parseFloat(cleanStr);
    
    if (!isNaN(num)) {
      let distractors = [
        String(Math.round((num * 10) * 100) / 100),
        String(Math.round((num / 10) * 100) / 100),
        String(Math.round((num * -1) * 100) / 100)
      ];
      if (num === 0) distractors = ["1", "10", "-1"];
      // ensure uniqueness
      distractors = [...new Set(distractors)].filter(d => d !== cleanStr);
      while(distractors.length < 3) {
        distractors.push(String(Math.floor(Math.random() * 100) + 1));
        distractors = [...new Set(distractors)];
      }
      return distractors.slice(0, 3).map(d => {
        return correctAnswerStr.replace(cleanStr, d);
      });
    }
    
    return ["A", "B", "C"]; // Fallback
  }

  async function processFile(filename, moduleExportName) {
    const p = path.resolve(filename);
    const content = fs.readFileSync(p, 'utf8');
    let match = content.match(new RegExp(`export const ${moduleExportName} = (\\[[\\s\\S]*\\])`));
    let questions = eval(match[1]);
    
    let parentUpdates = {};
    let updateCount = 0;

    for (let q of questions) {
      // 1. Strip e.g. leaks
      if (q.question) {
        q.question = q.question.replace(/\s*\([^)]*e\.g\.[^)]*\)/gi, '');
      }

      // 2. Fix opts to options
      if (q.opts) {
        if (!q.options) {
          q.options = q.opts.map(opt => ({ text: opt, imageUrl: '' }));
        }
        delete q.opts;
      }

      // 3. Fix solutionSteps
      if (q.solutionSteps) {
        for (let s of q.solutionSteps) {
          if (s.explanation && GENERIC_PATTERNS.some(p => s.explanation.includes(p))) {
            s.explanation = "Evaluate the mathematical expression and calculate the result.";
          }
          if (s.workingOut && s.workingOut.trim().length > 0) {
            let wo = s.workingOut.trim();
            if (!wo.startsWith('\\(') && !wo.startsWith('\\[') && !wo.includes('\\begin') && !wo.includes('<div') && !wo.includes('<svg')) {
              s.workingOut = '\\(' + wo + '\\)';
            }
          }
        }
      }

      // 4. Convert teacher_review to multiple_choice
      if (q.type === 'teacher_review' && q.answer) {
        q.type = 'multiple_choice';
        q.isManual = false;
        q.requiresManualGrading = false;
        
        let distractors = generateDistractors(q.answer);
        let ansText = q.answer.includes("Circle") || q.answer.includes("(") ? q.answer : '\\(' + q.answer + '\\)';
        let options = [{ text: ansText, imageUrl: '' }];
        distractors.forEach(d => {
          let dText = d.includes("Circle") || d.includes("(") ? d : '\\(' + d + '\\)';
          options.push({ text: dText, imageUrl: '' });
        });
        
        q.options = options;
        q.a = 0;
        q.answer = "0"; // Option index 0 is correct
      }

      // Record for Firestore update
      const parentId = q.id.replace(/[a-z]$/, '');
      if (parentId !== q.id) {
        if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
        parentUpdates[parentId].push(q);
      } else {
        const updateObj = {
          question: q.question,
          type: q.type,
          options: q.options || FieldValue.delete(),
          a: q.a !== undefined ? q.a : FieldValue.delete(),
          answer: q.answer,
          solutionSteps: q.solutionSteps || FieldValue.delete(),
          updatedAt: FieldValue.serverTimestamp()
        };
        if (q.isManual !== undefined) updateObj.isManual = q.isManual;
        if (q.requiresManualGrading !== undefined) updateObj.requiresManualGrading = q.requiresManualGrading;

        await db.collection('questions').doc(q.id).update(updateObj).catch(e => {});
      }
      updateCount++;
    }

    const newFileContent = `export const ${moduleExportName} = ` + JSON.stringify(questions, null, 2) + ";\n";
    fs.writeFileSync(p, newFileContent, 'utf8');

    // Update parent docs
    for (const [parentId, subQs] of Object.entries(parentUpdates)) {
      try {
        const parentRef = db.collection('questions').doc(parentId);
        const parentSnap = await parentRef.get();
        if (parentSnap.exists) {
          let parentData = parentSnap.data();
          let currentSubQs = parentData.subQuestions || [];
          for (let i = 0; i < currentSubQs.length; i++) {
            const newSq = subQs.find(s => s.id === currentSubQs[i].id);
            if (newSq) {
              currentSubQs[i] = { ...currentSubQs[i], ...newSq };
              delete currentSubQs[i].opts;
            }
          }
          await parentRef.update({
            subQuestions: currentSubQs,
            updatedAt: FieldValue.serverTimestamp()
          });
          console.log(`Successfully updated parent ${parentId} with subQuestions`);
        }
      } catch(e) {
        console.error(`Failed to update parent ${parentId}:`, e);
      }
    }
    
    console.log(`Processed ${updateCount} questions in ${filename}`);
  }

  await processFile('src/constants/seedYear10Ch11AQuestions.js', 'Y10_CH11A_QUESTIONS');
}

run().catch(console.error);
