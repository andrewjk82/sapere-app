const fs = require('fs');

const files = [
  'src/constants/seedYear8Ch18IQuestions.js',
  'src/constants/seedYear8Ch17EQuestions.js'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Replace all $$...$$ with $...$ EXCEPT for those containing \begin{array}
    content = content.replace(/\$\$(.*?)\$\$/gs, (match, p1) => {
      if (p1.includes('\\begin{array}')) {
        return match;
      }
      return '$' + p1.trim() + '$';
    });
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
