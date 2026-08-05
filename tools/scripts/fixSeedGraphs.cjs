const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Find blocks like:
  //     solutionSteps: [ ... ],
  //     graphData: { svg: '<svg ... </svg>' }
  // We want to move graphData into the last step of solutionSteps.
  
  // A regex to match the last step and the graphData that follows it.
  // Last step ends with: }
  //     ],
  //     graphData: {
  //       svg: '...'
  //     }
  const regex = /(\s*}\n\s*)\]\,\n\s*graphData:\s*\{\n\s*svg:\s*'(<svg.*?<\/svg>)'\n\s*\}/g;
  
  content = content.replace(regex, (match, p1, p2) => {
    // p1 is the spaces and `}` of the last step, e.g., `\n      }`
    // p2 is the svg string
    return `,\n        graphData: {\n          svg: '${p2}'\n        }${p1}]`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${filePath}`);
}

fixFile('/Users/andrewkim/Desktop/sapere1/tools/seeds/girraween/seedGirraween2020Questions_PART2.js');
fixFile('/Users/andrewkim/Desktop/sapere1/tools/seeds/girraween/seedGirraween2020SimilarQuestions_PART2.js');
