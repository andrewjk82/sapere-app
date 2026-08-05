import fs from 'fs';
import path from 'path';

async function processFile(filename, moduleExportName) {
  const p = path.resolve(filename);
  if (!fs.existsSync(p)) return;

  const content = fs.readFileSync(p, 'utf8');
  let match = content.match(new RegExp(`export const ${moduleExportName} = (\\[[\\s\\S]*\\])`));
  if (!match) return;

  let questions = eval(match[1]);
  let updatedCount = 0;

  for (let q of questions) {
    if (q.type === 'multiple_choice' && q.isManual === true) {
      q.isManual = false;
      updatedCount++;
    }
    if (q.subQuestions && q.subQuestions.length > 0) {
      for (let sq of q.subQuestions) {
        if (sq.type === 'multiple_choice' && sq.isManual === true) {
          sq.isManual = false;
          updatedCount++;
        }
      }
    }
  }

  if (updatedCount > 0) {
    const newFileContent = `export const ${moduleExportName} = ` + JSON.stringify(questions, null, 2) + ";\n";
    fs.writeFileSync(p, newFileContent, 'utf8');
    console.log(`Updated ${updatedCount} questions in ${filename}`);
  }
}

async function run() {
  await processFile('src/constants/seedYear10Ch11AQuestions.js', 'Y10_CH11A_QUESTIONS');
  await processFile('src/constants/seedYear10Ch11BQuestions.js', 'Y10_CH11B_QUESTIONS');
  await processFile('src/constants/seedYear10Ch11CQuestions.js', 'Y10_CH11C_QUESTIONS');
  await processFile('src/constants/seedYear10Ch11DQuestions.js', 'Y10_CH11D_QUESTIONS');
  await processFile('src/constants/seedYear10Ch11EQuestions.js', 'Y10_CH11E_QUESTIONS');
  await processFile('src/constants/seedYear10Ch11Questions.js', 'Y10_CH11_QUESTIONS');
  
  console.log("Local seeds updated.");
}

run().catch(console.error);
