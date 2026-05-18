import fs from 'fs';
import path from 'path';

const ch7aPath = './src/scripts/importYear7Ch7A.js';
const ch6aOriginalPath = './src/scripts/importYear7Ch6A.js';

// 1. Read the 65-question Algebra file currently at importYear7Ch7A.js
let algebraContent = fs.readFileSync(ch7aPath, 'utf8');

// Convert Ch7 Algebra -> Ch6 Algebra
algebraContent = algebraContent
  .replace(/"chapterId":\s*"y7-7"/g, '"chapterId": "y7-6"')
  .replace(/"topicId":\s*"y7-7a"/g, '"topicId": "y7-6a"')
  .replace(/"topicCode":\s*"7A"/g, '"topicCode": "6A"')
  .replace(/"topicTitle":\s*"Algebraic Fractions & Expressions"/g, '"topicTitle": "Algebraic Fractions & Expressions"')
  .replace(/importYear7Ch7A/g, 'importYear7Ch6A')
  .replace(/Ch7A/g, 'Ch6A')
  .replace(/'y7-7a'/g, "'y7-6a'");

// 2. Read the original Points and Lines file from importYear7Ch6A.js
let pointsContent = fs.readFileSync(ch6aOriginalPath, 'utf8');

// Convert Ch6 Points -> Ch7 Points
pointsContent = pointsContent
  .replace(/chapterId:\s*'y7-6'/g, "chapterId: 'y7-7'")
  .replace(/topicId:\s*'y7-6a'/g, "topicId: 'y7-7a'")
  .replace(/topicCode:\s*'6A'/g, "topicCode: '7A'")
  .replace(/topicTitle:\s*'Points and Lines'/g, "topicTitle: 'Points and Lines'")
  .replace(/importYear7Ch6A/g, 'importYear7Ch7A')
  .replace(/Ch6A/g, 'Ch7A')
  .replace(/'y7-6a'/g, "'y7-7a'");

// 3. Write them to their correct locations
fs.writeFileSync(ch6aOriginalPath, algebraContent, 'utf8');
fs.writeFileSync(ch7aPath, pointsContent, 'utf8');

console.log('Successfully swapped Chapter 6 and Chapter 7 scripts!');
