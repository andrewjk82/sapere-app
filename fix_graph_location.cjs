const fs = require('fs');

let content = fs.readFileSync('generate_ch7h.cjs', 'utf-8');

// Update createTopQ
content = content.replace(
  '    solutionSteps: steps || [],\n    hint: "",\n    t: "Revision",\n    graphData\n  });',
  `    solutionSteps: steps || [],
    hint: "",
    t: "Revision",
    graphData: type === 'teacher_review' ? null : graphData
  });
  if (type === 'teacher_review' && graphData) {
    questions[questions.length - 1].solutionSteps.push({
      explanation: "Here is the sketch of the graph:",
      workingOut: "",
      graphData: graphData
    });
  }`
);

// Update createSubQ
content = content.replace(
  '      solutionSteps: sq.steps || [],\n      graphData: sq.graphData || null\n    }))\n  });',
  `      solutionSteps: (sq.type === 'teacher_review' && sq.graphData) ? [...(sq.steps || []), { explanation: "Here is the sketch of the graph:", workingOut: "", graphData: sq.graphData }] : (sq.steps || []),
      graphData: (sq.type === 'teacher_review') ? null : (sq.graphData || null)
    }))
  });`
);

fs.writeFileSync('generate_ch7h.cjs', content);
