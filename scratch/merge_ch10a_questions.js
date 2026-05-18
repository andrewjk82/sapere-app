import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

console.log('Starting ESM-safe merge and deduplication...');

const parseQuestionsFromFile = (filePath) => {
  const content = readFileSync(filePath, 'utf8');
  // Find where allQuestions starts
  const startMatch = content.match(/export\s+const\s+allQuestions\s*=\s*\[/);
  if (!startMatch) {
    throw new Error(`Could not find allQuestions array in ${filePath}`);
  }
  const startIndex = startMatch.index + startMatch[0].length - 1; // index of '['

  // We find the matching closing bracket ']' by scanning
  let bracketCount = 0;
  let endIndex = -1;
  let inString = false;
  let escapeChar = false;
  let quoteChar = null;

  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];
    if (inString) {
      if (escapeChar) {
        escapeChar = false;
      } else if (char === '\\') {
        escapeChar = true;
      } else if (char === quoteChar) {
        inString = false;
        quoteChar = null;
      }
    } else {
      if (char === '"' || char === "'") {
        inString = true;
        quoteChar = char;
      } else if (char === '[') {
        bracketCount++;
      } else if (char === ']') {
        bracketCount--;
        if (bracketCount === 0) {
          endIndex = i;
          break;
        }
      }
    }
  }

  if (endIndex === -1) {
    throw new Error(`Could not find matching closing bracket for allQuestions in ${filePath}`);
  }

  const arrayString = content.substring(startIndex, endIndex + 1);
  
  // Since it might contain trailing commas or comments, we can evaluate it safely using Function
  // to return the array without executing any imports or external code.
  try {
    const getArray = new Function(`return ${arrayString};`);
    return getArray();
  } catch (err) {
    console.error(`Failed to parse array from ${filePath} using Function:`, err);
    // Fallback to JSON.parse if clean
    return JSON.parse(arrayString);
  }
};

const oldQuestionsPath = './scratch/old_importYear7Ch10A.js';
const newQuestionsPath = './src/scripts/importYear7Ch10A.js';

const oldQuestions = parseQuestionsFromFile(oldQuestionsPath);
const newQuestions = parseQuestionsFromFile(newQuestionsPath);

console.log(`Loaded ${oldQuestions.length} old questions successfully.`);
console.log(`Loaded ${newQuestions.length} new premium questions successfully.`);

// Helper to normalize question text for exact/fuzzy duplicate matching
const normalizeText = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[\s\r\n\t]+/g, ' ') // Normalize all whitespace
    .replace(/[$.:,;?'"()\-–—]/g, '')  // Strip math mode, punctuation, and hyphens
    .replace(/\\;/g, '') // Strip LaTeX spacing
    .replace(/ Reykjavik /i, ' reykjavik ') // Normalize any spelling variances
    .trim();
};

const mergedQuestions = [];
const seenNormalized = new Set();

// 1. Add all the new premium questions first to prioritize them
for (const q of newQuestions) {
  const norm = normalizeText(q.question);
  seenNormalized.add(norm);
  q.chapterTitle = "Chapter 10: Integers";
  q.topicId = "y7-10a";
  mergedQuestions.push(q);
}

// 2. Add old questions if they aren't duplicate
let duplicatesCount = 0;
for (const q of oldQuestions) {
  const norm = normalizeText(q.question);
  if (seenNormalized.has(norm)) {
    duplicatesCount++;
    console.log(`Duplicate found (skipping old version): "${q.question.substring(0, 60)}..."`);
  } else {
    seenNormalized.add(norm);
    q.chapterTitle = "Chapter 10: Integers";
    q.topicId = "y7-10a";
    if (!q.createdAt) {
      q.createdAt = new Date().toISOString();
    }
    mergedQuestions.push(q);
  }
}

console.log(`\nMerge Summary:`);
console.log(`- New premium questions added: ${newQuestions.length}`);
console.log(`- Old unique questions added: ${oldQuestions.length - duplicatesCount}`);
console.log(`- Old duplicate questions skipped: ${duplicatesCount}`);
console.log(`- Total merged unique questions: ${mergedQuestions.length}`);

// Let's write the mergedQuestions list back to src/scripts/importYear7Ch10A.js
const fileHeader = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = `;

const fileFooter = `;

export const importYear7Ch10A = async (forceReset = false) => {
  console.log('[Ch10A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch10A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-10a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log('Deleted existing Ch10A topic questions.');
    }

    const existingQuestions = new Set();
    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-10a')));
    existingSnap.docs.forEach(doc => {
      existingQuestions.add(doc.data().question.trim());
    });
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch10A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch10A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

const fileContent = fileHeader + JSON.stringify(mergedQuestions, null, 2) + fileFooter;
writeFileSync(newQuestionsPath, fileContent, 'utf8');
console.log(`Successfully wrote merged questions to src/scripts/importYear7Ch10A.js!`);
