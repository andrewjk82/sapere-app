import fs from 'fs';
import path from 'path';

const dir = './src/constants';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let changed = false;
  
  const original = content;
  content = content.replace(/r@\{\\\\quad\}l/g, 'r l');
  content = content.replace(/r@\{\\\\quad\}c@\{\\\\quad\}c@\{\\\\quad\}c@\{\\\\quad\}c/g, 'r c c c c');
  content = content.replace(/r@\{\\\\quad\}c@\{\\\\quad\}c@\{\\\\quad\}c/g, 'r c c c');
  content = content.replace(/r@\{\\\\quad\}c@\{\\\\quad\}c/g, 'r c c');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
}
