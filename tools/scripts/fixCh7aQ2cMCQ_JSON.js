import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.join(__dirname, '../../backup_seeds/seedYear9Ch7Questions.js');
let seedContent = fs.readFileSync(seedPath, 'utf8');

// Use regex to match the object exactly. 
// "id": "y9-7a-q2c",
const regex = /"id":\s*"y9-7a-q2c"[\s\S]*?"type":\s*"short_answer"/;

const match = seedContent.match(regex);
if (match) {
  let matchedStr = match[0];
  // Remove the giving reasons text
  matchedStr = matchedStr.replace(/,\s*giving reasons[^.]*\./g, '.');
  
  // Replace the type
  matchedStr = matchedStr.replace(/"type":\s*"short_answer"/, 
    `"type": "multiple_choice",
    "options": [
      { "text": "\\\\(12.5^\\\\circ\\\\)" },
      { "text": "\\\\(22.5^\\\\circ\\\\)" },
      { "text": "\\\\(30^\\\\circ\\\\)" },
      { "text": "\\\\(45^\\\\circ\\\\)" }
    ],
    "answer": 1`);
    
  seedContent = seedContent.replace(regex, matchedStr);
  fs.writeFileSync(seedPath, seedContent, 'utf8');
  console.log('Successfully updated seed file for y9-7a-q2c using JSON double quotes');
} else {
  console.log('Could not match JSON format in seed file.');
}
