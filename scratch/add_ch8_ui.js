import fs from 'fs';

console.log('Inserting Chapter 8 sync buttons markup into src/components/Curriculum.jsx using Regex...');

const filePath = 'src/components/Curriculum.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Regex matching the Coordinate Geometry (Ch7) sync card block
const regex = /\{\/\*\s*Year\s*11\s*Advanced\s*Chapter\s*7\s*\*\/\}[\s\S]*?<div\s*className="sync-card">[\s\S]*?<span\s*className="sync-card-badge\s*y11">Y11\s*ADV\s*CH7<\/span>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/;

const match = content.match(regex);
if (match) {
  const ch7Block = match[0];
  console.log('Found Chapter 7 block!');
  
  const ch8Block = ch7Block
    .replace(/Chapter 7/g, 'Chapter 8')
    .replace(/Y11 ADV CH7/g, 'Y11 ADV CH8')
    .replace(/Coordinate Geometry \(Ch7\)/g, 'Indices (Ch8)')
    .replace(/handleSyncY11AdvCh7/g, 'handleSyncY11AdvCh8');
    
  const newContent = content.replace(ch7Block, ch7Block + '\n\n' + ch8Block);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('🎉 SUCCESS: Chapter 8 sync buttons UI markup successfully inserted!');
  process.exit(0);
} else {
  console.error('❌ ERROR: Could not find Chapter 7 sync card block in src/components/Curriculum.jsx using Regex.');
  process.exit(1);
}
