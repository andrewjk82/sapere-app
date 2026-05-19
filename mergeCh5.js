import fs from 'fs';
import { allQuestions as fractionsQuestions } from './src/scripts/check_3f89af5.js';
import { allQuestions as geometryQuestions } from './src/scripts/importYear7Ch5A.js';

console.log('Fractions questions count:', fractionsQuestions.length);
console.log('Geometry questions count:', geometryQuestions.length);

const mergedQuestions = [...fractionsQuestions, ...geometryQuestions];
console.log('Total merged questions:', mergedQuestions.length);

if (mergedQuestions.length !== 86) {
  console.error('Error: Expected exactly 86 questions, but got:', mergedQuestions.length);
  process.exit(1);
}

// Generate the new file content dynamically to preserve all structures cleanly
let out = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
`;

mergedQuestions.forEach((q, idx) => {
  out += "  {\n";
  out += `    chapterId: '${q.chapterId}',\n`;
  out += `    topicId: '${q.topicId}',\n`;
  out += `    topicCode: '${q.topicCode}',\n`;
  out += `    topicTitle: \`${q.topicTitle.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,\n`;
  out += `    year: '${q.year}',\n`;
  out += `    type: '${q.type}',\n`;
  out += `    difficulty: '${q.difficulty}',\n`;
  out += `    isManual: ${q.isManual},\n`;
  out += `    isActive: ${q.isActive},\n`;
  
  // Cleanly stringify question, options, solution, graphData etc.
  const questionEscaped = q.question.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');
  out += `    question: \`${questionEscaped}\`,\n`;
  
  if (q.graphData) {
    const htmlEscaped = q.graphData.html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');
    out += `    graphData: { html: \`${htmlEscaped}\` },\n`;
  }
  
  const optsStr = q.options.map(o => `\`${o.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')}\``).join(', ');
  out += `    options: [${optsStr}],\n`;
  out += `    answer: ${JSON.stringify(q.answer)},\n`;
  
  if (q.subQuestions) {
    out += `    subQuestions: [\n`;
    q.subQuestions.forEach((sub, subIdx) => {
      out += `      {\n`;
      out += `        id: '${sub.id}',\n`;
      out += `        question: \`${sub.question.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,\n`;
      out += `        type: '${sub.type}',\n`;
      out += `        isManual: ${sub.isManual},\n`;
      
      const subOptsStr = sub.options.map(o => `\`${o.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')}\``).join(', ');
      out += `        options: [${subOptsStr}],\n`;
      out += `        answer: ${JSON.stringify(sub.answer)}\n`;
      out += `      }${subIdx === q.subQuestions.length - 1 ? '' : ','}\n`;
    });
    out += `    ],\n`;
  }
  
  const solutionEscaped = q.solution.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');
  out += `    solution: \`${solutionEscaped}\`,\n`;
  out += `    createdAt: new Date().toISOString()\n`;
  out += "  }" + (idx === mergedQuestions.length - 1 ? "" : ",") + "\n";
});

out += `];

export const importYear7Ch5A = async (forceReset = false) => {
  console.log('[Ch5 Year 7 Geometry/Fractions Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch5 questions...');
      const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-5')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log(\`Deleted \${existingSnap.size} existing questions.\`);
    }

    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-5')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log(\`[Ch5 Year 7 Geometry/Fractions Import] SUCCESS! \${importedCount} new questions imported.\`);
    return importedCount;
  } catch (error) {
    console.error('[Ch5 Year 7 Geometry/Fractions Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('./src/scripts/importYear7Ch5A.js', out, 'utf8');
console.log('Successfully wrote merged 86 questions to ./src/scripts/importYear7Ch5A.js');
process.exit(0);
