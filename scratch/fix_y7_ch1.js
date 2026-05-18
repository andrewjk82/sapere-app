const fs = require('fs');
let content = fs.readFileSync('src/scripts/importYear7Ch1.js', 'utf8');

// Replace all topicId: 'y7-1a' with topicId: 'y7-1l'
// And topicCode: '1A' with topicCode: '1L'
content = content.replace(/topicId:\s*'y7-1a'/g, "topicId: 'y7-1l'");
content = content.replace(/topicCode:\s*'1A'/g, "topicCode: '1L'");

fs.writeFileSync('src/scripts/importYear7Ch1.js', content);
console.log('Fixed importYear7Ch1.js');
