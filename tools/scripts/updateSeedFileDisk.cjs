const fs = require('fs');
const path = require('path');

const seedFilePath = path.join(__dirname, '../../src/constants/seedYear9Ch11HQuestions.js');
let content = fs.readFileSync(seedFilePath, 'utf8');

const graphScript = `board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.025, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); var pO = board.create('point', [0,0], {name:'O', size:3, color:'#64748b', fixed:true}); var pA = board.create('point', [8, -6], {name:'A(8, -6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, -15]}}); var pB = board.create('point', [6, 8], {name:'B(6, 8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, 10]}}); var pC = board.create('point', [-8, 6], {name:'C(-8, 6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-65, 10]}}); var pD = board.create('point', [-6, -8], {name:'D(-6, -8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-70, -10]}}); board.create('circle', [pO, pB], {strokeColor:'#4f46e5', strokeWidth:3, fillColor:'#6366f1', fillOpacity:0.08}); board.create('text', [5.2, 7.8, 'x² + y² = 100'], {fontSize:13, color:'#4f46e5', fontWeight:'bold'}); board.create('segment', [pA, pB], {strokeColor: '#1e293b', strokeWidth: 2}); board.create('segment', [pB, pC], {strokeColor: '#1e293b', strokeWidth: 2}); board.create('segment', [pC, pD], {strokeColor: '#1e293b', strokeWidth: 2}); board.create('segment', [pD, pA], {strokeColor: '#1e293b', strokeWidth: 2}); board.unsuspendUpdate();`;

// Replace script strings inside q10a, q10b, q10c, q10d solutionSteps
const oldScriptRegex = /board\.suspendUpdate\(\);\s*board\.create\('arrow'[\s\S]*?board\.unsuspendUpdate\(\);/g;

// Replace all occurrences of the old script in seed file for q10
let occurrences = 0;
content = content.replace(oldScriptRegex, (match) => {
  occurrences++;
  return graphScript;
});

fs.writeFileSync(seedFilePath, content, 'utf8');
console.log(`Updated ${occurrences} graph scripts in seedYear9Ch11HQuestions.js disk file.`);
