const fs = require('fs');

const questions = [];

// Helper: make solutionSteps array
const makeSteps = (solution, graphData) => {
  const steps = [{ explanation: "Substitute and simplify.", workingOut: solution, graphData: null }];
  if (graphData) {
    steps.push({ explanation: "The sketched graph is shown below.", workingOut: '', graphData: graphData });
  }
  return steps;
};

const makeJsxGraph = (fn, asymX, asymY, xMin, xMax) => {
  const eps = 0.1;
  let script = `board.suspendUpdate();`;
  if (asymX !== null) script += `\nboard.create('line', [[${asymX}, -10], [${asymX}, 10]], {strokeColor: 'red', dash: 2, strokeWidth: 1});`;
  if (asymY !== null) script += `\nboard.create('line', [[-10, ${asymY}], [10, ${asymY}]], {strokeColor: 'red', dash: 2, strokeWidth: 1});`;
  script += `\nboard.create('functiongraph', [function(x){return ${fn};}, ${xMin}, ${asymX - eps}], {strokeColor: 'blue', strokeWidth: 2});`;
  script += `\nboard.create('functiongraph', [function(x){return ${fn};}, ${asymX + eps}, ${xMax}], {strokeColor: 'blue', strokeWidth: 2});`;
  script += `\nboard.unsuspendUpdate();`;
  return { jsxGraph: { width: 300, height: 300, boundingbox: [xMin, 6, xMax, -6], boardOptions: { axis: true, grid: true, keepaspectratio: true }, script } };
};

const addQ = (id, q, answer, solution, hint, type, graphFn, asymX, asymY, xMin, xMax) => {
  const isSketch = /sketch/i.test(q);
  const qType = (type || (isSketch ? 'teacher_review' : 'short_answer'));
  const graphData = (graphFn && asymX !== null) ? makeJsxGraph(graphFn, asymX, asymY, xMin, xMax) : null;
  questions.push({
    id,
    type: qType,
    difficulty: 'medium',
    timeLimit: 90,
    question: q,
    a: answer,
    hint,
    solution: solution,
    solutionSteps: makeSteps(solution, graphData),
    graphData: null,   // NEVER put answer graph on top level
    t: "The rectangular hyperbola",
    c: "11B"
  });
};

// Q1: y = 1/x
addQ('y10-11b-1a', 'Given that $y = \\frac{1}{x}$, find $y$ when $x = 2$.', '$y = \\frac{1}{2}$', 'y = 1/2', 'Substitute x = 2 into the equation.');
addQ('y10-11b-1b', 'Given that $y = \\frac{1}{x}$, find $y$ when $x = -2$.', '$y = -\\frac{1}{2}$', 'y = 1/(-2) = -1/2', 'Substitute x = -2.');
addQ('y10-11b-1c', 'Given that $y = \\frac{1}{x}$, find $y$ when $x = \\frac{1}{2}$.', '$y = 2$', 'y = 1/(1/2) = 2', 'Flip the fraction.');
addQ('y10-11b-1d', 'Given that $y = \\frac{1}{x}$, find $y$ when $x = \\frac{3}{2}$.', '$y = \\frac{2}{3}$', 'y = 1/(3/2) = 2/3', 'Flip the fraction.');
addQ('y10-11b-1e', 'Given that $y = \\frac{1}{x}$, find $y$ when $x = -\\frac{2}{3}$.', '$y = -\\frac{3}{2}$', 'y = 1/(-2/3) = -3/2', 'Flip the fraction; keep the negative sign.');

// Q2: y = 12/x
addQ('y10-11b-2a', 'Given that $y = \\frac{12}{x}$, find $y$ when $x = 3$.', '$y = 4$', 'y = 12/3 = 4', 'Substitute x = 3.');
addQ('y10-11b-2b', 'Given that $y = \\frac{12}{x}$, find $y$ when $x = 4$.', '$y = 3$', 'y = 12/4 = 3', 'Substitute x = 4.');
addQ('y10-11b-2c', 'Given that $y = \\frac{12}{x}$, find $y$ when $x = -\\frac{1}{2}$.', '$y = -24$', 'y = 12/(-1/2) = 12 × (-2) = -24', 'Multiply by the reciprocal.');
addQ('y10-11b-2d', 'Given that $y = \\frac{12}{x}$, find $y$ when $x = -\\frac{3}{2}$.', '$y = -8$', 'y = 12/(-3/2) = 12 × (-2/3) = -8', 'Multiply by the reciprocal.');
addQ('y10-11b-2e', 'Given that $y = \\frac{12}{x}$, find $y$ when $x = \\frac{3}{4}$.', '$y = 16$', 'y = 12/(3/4) = 12 × (4/3) = 16', 'Multiply by the reciprocal.');

// Q3: y = -1/x
addQ('y10-11b-3a', 'Given that $y = -\\frac{1}{x}$, find $y$ when $x = -1$.', '$y = 1$', 'y = -1/(-1) = 1', 'Two negatives make a positive.');
addQ('y10-11b-3b', 'Given that $y = -\\frac{1}{x}$, find $y$ when $x = -2$.', '$y = \\frac{1}{2}$', 'y = -1/(-2) = 1/2', 'Two negatives make a positive.');
addQ('y10-11b-3c', 'Given that $y = -\\frac{1}{x}$, find $y$ when $x = -\\frac{1}{2}$.', '$y = 2$', 'y = -1/(-1/2) = 2', 'Flip and cancel negatives.');
addQ('y10-11b-3d', 'Given that $y = -\\frac{1}{x}$, find $y$ when $x = \\frac{3}{2}$.', '$y = -\\frac{2}{3}$', 'y = -1/(3/2) = -2/3', 'Multiply by reciprocal; keep negative.');
addQ('y10-11b-3e', 'Given that $y = -\\frac{1}{x}$, find $y$ when $x = -\\frac{3}{2}$.', '$y = \\frac{2}{3}$', 'y = -1/(-3/2) = 2/3', 'Two negatives cancel.');

// Q4: y = 1/(x-3)
addQ('y10-11b-4a', 'Given that $y = \\frac{1}{x - 3}$, find $y$ when $x = 4$.', '$y = 1$', 'y = 1/(4-3) = 1/1 = 1', 'Substitute x = 4.');
addQ('y10-11b-4b', 'Given that $y = \\frac{1}{x - 3}$, find $y$ when $x = 2$.', '$y = -1$', 'y = 1/(2-3) = 1/(-1) = -1', 'Substitute x = 2.');
addQ('y10-11b-4c', 'Given that $y = \\frac{1}{x - 3}$, find $y$ when $x = 5$.', '$y = \\frac{1}{2}$', 'y = 1/(5-3) = 1/2', 'Substitute x = 5.');
addQ('y10-11b-4d', 'Given that $y = \\frac{1}{x - 3}$, find $y$ when $x = 3\\frac{1}{2}$.', '$y = 2$', 'y = 1/(3.5 - 3) = 1/0.5 = 2', 'Substitute x = 3.5.');
addQ('y10-11b-4e', 'Given that $y = \\frac{1}{x - 3}$, find $y$ when $x = 2\\frac{3}{4}$.', '$y = -4$', 'y = 1/(2.75 - 3) = 1/(-0.25) = -4', 'Substitute x = 2.75.');

// Q5: Sketch y = 4/x
addQ('y10-11b-5a', 'Sketch the graph of $y = \\frac{4}{x}$.', 'Vertical asymptote: x = 0; horizontal asymptote: y = 0. No intercepts.', 'Vertical asymptote x=0, horizontal asymptote y=0. The graph is a rectangular hyperbola in quadrants 1 and 3.', 'Identify the asymptotes first, then plot points in each quadrant.', 'teacher_review', '4/x', 0, 0, -6, 6);
addQ('y10-11b-5b', 'Find the values of $y$ when $x = -4, -2, -1, 1, 2$ and $4$ for $y = \\frac{4}{x}$, and plot the corresponding points on the graph.', '$y = -1, -2, -4, 4, 2, 1$ respectively', '4/(-4)=-1; 4/(-2)=-2; 4/(-1)=-4; 4/1=4; 4/2=2; 4/4=1', 'Substitute each x value into the equation.');

// Q6: Sketch y = 1/(x+2)
addQ('y10-11b-6a', 'Sketch the graph of $y = \\frac{1}{x + 2}$.', 'Vertical asymptote: x = -2; horizontal asymptote: y = 0. y-intercept: (0, 1/2).', 'Vertical asymptote x=-2, horizontal asymptote y=0. y-intercept: set x=0: y=1/(0+2)=1/2.', 'Shift 1/x left by 2 units.', 'teacher_review', '1/(x+2)', -2, 0, -8, 4);
addQ('y10-11b-6b', 'Find the values of $y$ when $x = -4, -3, 2\\frac{1}{2}, 1\\frac{1}{2}, -1$ and $0$ for $y = \\frac{1}{x+2}$.', '$y = -\\frac{1}{2}, -1, \\frac{2}{9}, \\frac{2}{7}, 1, \\frac{1}{2}$ respectively', '1/(-4+2)=-1/2; 1/(-3+2)=-1; 1/(2.5+2)=2/9; 1/(1.5+2)=2/7; 1/(-1+2)=1; 1/(0+2)=1/2', 'Substitute each x into y = 1/(x+2).');

// Q7: y = 12/x
addQ('y10-11b-7a', 'On the hyperbola $y = \\frac{12}{x}$, find the value of $y$ when $x = -0.001$.', '$y = -12000$', 'y = 12/(-0.001) = -12000', 'Divide 12 by the small negative x.');
addQ('y10-11b-7b', 'On the hyperbola $y = \\frac{12}{x}$, find the value of $y$ when $x = -0.2$.', '$y = -60$', 'y = 12/(-0.2) = -60', 'Divide 12 by -0.2.');
addQ('y10-11b-7c', 'On the hyperbola $y = \\frac{12}{x}$, find the value of $y$ when $x = 3$.', '$y = 4$', 'y = 12/3 = 4', 'Divide 12 by 3.');
addQ('y10-11b-7d', 'On the hyperbola $y = \\frac{12}{x}$, find the value of $y$ when $x = 24$.', '$y = \\frac{1}{2}$', 'y = 12/24 = 1/2', 'Simplify 12/24.');
addQ('y10-11b-7e', 'On the hyperbola $y = \\frac{12}{x}$, find the value of $y$ when $x = 144$.', '$y = \\frac{1}{12}$', 'y = 12/144 = 1/12', 'Simplify 12/144.');

// Q8: y = 6/(x-3)
addQ('y10-11b-8a', 'On the hyperbola $y = \\frac{6}{x - 3}$, find the value of $y$ when $x = 0$.', '$y = -2$', 'y = 6/(0-3) = 6/(-3) = -2', 'Substitute x = 0.');
addQ('y10-11b-8b', 'On the hyperbola $y = \\frac{6}{x - 3}$, find the value of $y$ when $x = 1$.', '$y = -3$', 'y = 6/(1-3) = 6/(-2) = -3', 'Substitute x = 1.');
addQ('y10-11b-8c', 'On the hyperbola $y = \\frac{6}{x - 3}$, find the value of $y$ when $x = 2.99$.', '$y = -600$', 'y = 6/(2.99-3) = 6/(-0.01) = -600', 'Denominator is very small and negative.');
addQ('y10-11b-8d', 'On the hyperbola $y = \\frac{6}{x - 3}$, find the value of $y$ when $x = 3.01$.', '$y = 600$', 'y = 6/(3.01-3) = 6/0.01 = 600', 'Denominator is very small and positive.');
addQ('y10-11b-8e', 'On the hyperbola $y = \\frac{6}{x - 3}$, find the value of $y$ when $x = 1000$.', '$y = \\frac{6}{997}$', 'y = 6/(1000-3) = 6/997', 'Substitute x = 1000.');

// Q9: y = 12/(x+3)
addQ('y10-11b-9a', 'On the hyperbola $y = \\frac{12}{x + 3}$, find the value of $y$ when $x = 0$.', '$y = 4$', 'y = 12/(0+3) = 12/3 = 4', 'Substitute x = 0.');
addQ('y10-11b-9b', 'On the hyperbola $y = \\frac{12}{x + 3}$, find the value of $y$ when $x = -2.9$.', '$y = 120$', 'y = 12/(-2.9+3) = 12/0.1 = 120', 'Denominator is 0.1.');
addQ('y10-11b-9c', 'On the hyperbola $y = \\frac{12}{x + 3}$, find the value of $y$ when $x = -2.99$.', '$y = 1200$', 'y = 12/(-2.99+3) = 12/0.01 = 1200', 'Denominator is 0.01.');
addQ('y10-11b-9d', 'On the hyperbola $y = \\frac{12}{x + 3}$, find the value of $y$ when $x = -3.01$.', '$y = -1200$', 'y = 12/(-3.01+3) = 12/(-0.01) = -1200', 'Denominator is -0.01.');
addQ('y10-11b-9e', 'On the hyperbola $y = \\frac{12}{x + 3}$, find the value of $y$ when $x = -3.001$.', '$y = -12000$', 'y = 12/(-3.001+3) = 12/(-0.001) = -12000', 'Denominator is -0.001.');

// Q10: Sketch each graph, indicate two points
addQ('y10-11b-10a', 'Sketch the graph of $y = \\frac{3}{x}$, and indicate two points on the graph.', 'Asymptotes: x=0, y=0. Two points: (1, 3) and (3, 1).', 'Asymptotes x=0, y=0. When x=1, y=3; when x=3, y=1.', 'Substitute simple values to find two points.', 'teacher_review', '3/x', 0, 0, -6, 6);
addQ('y10-11b-10b', 'Sketch the graph of $y = \\frac{3}{2x}$, and indicate two points on the graph.', 'Asymptotes: x=0, y=0. Two points: (1, 3/2) and (-1, -3/2).', 'Asymptotes x=0, y=0. When x=1, y=3/2; when x=-1, y=-3/2.', 'Substitute simple values.', 'teacher_review', '3/(2*x)', 0, 0, -6, 6);
addQ('y10-11b-10c', 'Sketch the graph of $y = -\\frac{1}{x}$, and indicate two points on the graph.', 'Asymptotes: x=0, y=0. Two points: (1, -1) and (-1, 1).', 'Asymptotes x=0, y=0. When x=1, y=-1; when x=-1, y=1.', 'Reflected hyperbola — in quadrants 2 and 4.', 'teacher_review', '-1/x', 0, 0, -6, 6);
addQ('y10-11b-10d', 'Sketch the graph of $y = -\\frac{3}{x}$, and indicate two points on the graph.', 'Asymptotes: x=0, y=0. Two points: (1, -3) and (-1, 3).', 'Asymptotes x=0, y=0. When x=1, y=-3; when x=-1, y=3.', 'Reflected hyperbola — in quadrants 2 and 4.', 'teacher_review', '-3/x', 0, 0, -6, 6);

// Q11: Sketch showing asymptotes and intercepts
addQ('y10-11b-11a', 'Sketch the graph of $y = \\frac{1}{x - 4}$, showing the asymptotes and any intercepts.', 'Asymptotes: x=4, y=0. y-intercept: (0, -1/4). No x-intercept.', 'Vertical asymptote: x=4. Horizontal asymptote: y=0. y-intercept: x=0 ⇒ y=1/(0-4)=-1/4.', 'Find asymptotes then intercepts.', 'teacher_review', '1/(x-4)', 4, 0, -2, 10);
addQ('y10-11b-11b', 'Sketch the graph of $y = \\frac{1}{x - 2}$, showing the asymptotes and any intercepts.', 'Asymptotes: x=2, y=0. y-intercept: (0, -1/2). No x-intercept.', 'Vertical asymptote: x=2. Horizontal asymptote: y=0. y-intercept: x=0 ⇒ y=1/(0-2)=-1/2.', 'Find asymptotes then intercepts.', 'teacher_review', '1/(x-2)', 2, 0, -4, 8);
addQ('y10-11b-11c', 'Sketch the graph of $y = \\frac{1}{x + 3}$, showing the asymptotes and any intercepts.', 'Asymptotes: x=-3, y=0. y-intercept: (0, 1/3). No x-intercept.', 'Vertical asymptote: x=-3. Horizontal asymptote: y=0. y-intercept: x=0 ⇒ y=1/(0+3)=1/3.', 'Find asymptotes then intercepts.', 'teacher_review', '1/(x+3)', -3, 0, -9, 3);
addQ('y10-11b-11d', 'Sketch the graph of $y = \\frac{-1}{x + 1}$, showing the asymptotes and any intercepts.', 'Asymptotes: x=-1, y=0. y-intercept: (0, -1). No x-intercept.', 'Vertical asymptote: x=-1. Horizontal asymptote: y=0. y-intercept: x=0 ⇒ y=-1/(0+1)=-1.', 'Find asymptotes then intercepts.', 'teacher_review', '-1/(x+1)', -1, 0, -7, 5);

// Q12: Sketch with asymptotes and intercepts (vertical shift)
addQ('y10-11b-12a', 'Sketch the graph of $y = \\frac{1}{x} + 1$, showing the asymptotes and any intercepts.', 'Asymptotes: x=0, y=1. x-intercept: (-1, 0).', 'Vertical asymptote: x=0. Horizontal asymptote: y=1. x-intercept: set y=0 ⇒ 0=1/x+1 ⇒ x=-1.', 'Find where the graph crosses the x-axis.', 'teacher_review', '1/x + 1', 0, 1, -6, 6);
addQ('y10-11b-12b', 'Sketch the graph of $y = \\frac{1}{x} - 3$, showing the asymptotes and any intercepts.', 'Asymptotes: x=0, y=-3. x-intercept: (1/3, 0).', 'Vertical asymptote: x=0. Horizontal asymptote: y=-3. x-intercept: set y=0 ⇒ 0=1/x-3 ⇒ x=1/3.', 'Find where the graph crosses the x-axis.', 'teacher_review', '1/x - 3', 0, -3, -6, 6);
addQ('y10-11b-12c', 'Sketch the graph of $y = -\\frac{1}{x} + 4$, showing the asymptotes and any intercepts.', 'Asymptotes: x=0, y=4. x-intercept: (1/4, 0).', 'Vertical asymptote: x=0. Horizontal asymptote: y=4. x-intercept: set y=0 ⇒ 0=-1/x+4 ⇒ x=1/4.', 'Find where the graph crosses the x-axis.', 'teacher_review', '-1/x + 4', 0, 4, -6, 6);
addQ('y10-11b-12d', 'Sketch the graph of $y = \\frac{1}{x} - 1$, showing the asymptotes and any intercepts.', 'Asymptotes: x=0, y=-1. x-intercept: (1, 0).', 'Vertical asymptote: x=0. Horizontal asymptote: y=-1. x-intercept: set y=0 ⇒ 0=1/x-1 ⇒ x=1.', 'Find where the graph crosses the x-axis.', 'teacher_review', '1/x - 1', 0, -1, -6, 6);

// Q13
addQ('y10-11b-13ai',  'Sketch the graph of $y = \\frac{6}{x}$, showing the asymptotes and any intercepts.',     'Asymptotes: x=0, y=0. No intercepts.',           'Basic rectangular hyperbola. Vertical asymptote x=0, horizontal asymptote y=0. No intercepts.',                  'Standard form of the rectangular hyperbola.',                  'teacher_review', '6/x',    0,  0, -6, 6);
addQ('y10-11b-13aii', 'Sketch the graph of $y = \\frac{6}{x - 3}$, showing the asymptotes and any intercepts.', 'Asymptotes: x=3, y=0. y-intercept: (0, -2).',    'Vertical asymptote x=3, horizontal asymptote y=0. y-intercept: x=0 ⇒ y=6/(0-3)=-2.',                            'Shift the graph of y=6/x right by 3 units.',                   'teacher_review', '6/(x-3)', 3, 0, -3, 9);
addQ('y10-11b-13bi',  'Sketch the graph of $y = \\frac{10}{x}$, showing the asymptotes and any intercepts.',    'Asymptotes: x=0, y=0. No intercepts.',           'Basic rectangular hyperbola. Vertical asymptote x=0, horizontal asymptote y=0. No intercepts.',                  'Standard form of the rectangular hyperbola.',                  'teacher_review', '10/x',   0,  0, -6, 6);
addQ('y10-11b-13bii', 'Sketch the graph of $y = \\frac{10}{x - 5}$, showing the asymptotes and any intercepts.','Asymptotes: x=5, y=0. y-intercept: (0, -2).',    'Vertical asymptote x=5, horizontal asymptote y=0. y-intercept: x=0 ⇒ y=10/(0-5)=-2.',                            'Shift the graph of y=10/x right by 5 units.',                  'teacher_review', '10/(x-5)', 5, 0, -1, 11);
addQ('y10-11b-13ci',  'Sketch the graph of $y = \\frac{4}{x}$, showing the asymptotes and any intercepts.',     'Asymptotes: x=0, y=0. No intercepts.',           'Basic rectangular hyperbola. Vertical asymptote x=0, horizontal asymptote y=0. No intercepts.',                  'Standard form of the rectangular hyperbola.',                  'teacher_review', '4/x',    0,  0, -6, 6);
addQ('y10-11b-13cii', 'Sketch the graph of $y = \\frac{4}{x + 2}$, showing the asymptotes and any intercepts.', 'Asymptotes: x=-2, y=0. y-intercept: (0, 2).',    'Vertical asymptote x=-2, horizontal asymptote y=0. y-intercept: x=0 ⇒ y=4/(0+2)=2.',                             'Shift the graph of y=4/x left by 2 units.',                    'teacher_review', '4/(x+2)', -2, 0, -8, 4);
addQ('y10-11b-13di',  'Sketch the graph of $y = \\frac{-3}{x}$, showing the asymptotes and any intercepts.',    'Asymptotes: x=0, y=0. No intercepts.',           'Reflected hyperbola. Vertical asymptote x=0, horizontal asymptote y=0. Graph is in quadrants 2 and 4.',           'The negative sign reflects the graph.',                        'teacher_review', '-3/x',   0,  0, -6, 6);
addQ('y10-11b-13dii', 'Sketch the graph of $y = \\frac{-3}{x + 1}$, showing the asymptotes and any intercepts.','Asymptotes: x=-1, y=0. y-intercept: (0, -3).',   'Vertical asymptote x=-1, horizontal asymptote y=0. y-intercept: x=0 ⇒ y=-3/(0+1)=-3.',                           'Shift the reflected graph left by 1 unit.',                    'teacher_review', '-3/(x+1)', -1, 0, -7, 5);

// Q14
addQ('y10-11b-14a', 'Sketch the graph of $y = \\frac{2}{x} + 1$, showing the asymptotes and any intercepts.', 'Asymptotes: x=0, y=1. x-intercept: (-2, 0).', 'Vertical asymptote x=0, horizontal asymptote y=1. x-intercept: 0=2/x+1 ⇒ x=-2.', 'Find where the graph crosses the x-axis.', 'teacher_review', '2/x + 1', 0, 1, -6, 6);
addQ('y10-11b-14b', 'Sketch the graph of $y = \\frac{4}{x} - 3$, showing the asymptotes and any intercepts.', 'Asymptotes: x=0, y=-3. x-intercept: (4/3, 0).', 'Vertical asymptote x=0, horizontal asymptote y=-3. x-intercept: 0=4/x-3 ⇒ x=4/3.', 'Find where the graph crosses the x-axis.', 'teacher_review', '4/x - 3', 0, -3, -6, 6);
addQ('y10-11b-14c', 'Sketch the graph of $y = -\\frac{12}{x} + 4$, showing the asymptotes and any intercepts.', 'Asymptotes: x=0, y=4. x-intercept: (3, 0).', 'Vertical asymptote x=0, horizontal asymptote y=4. x-intercept: 0=-12/x+4 ⇒ x=3.', 'Find where the graph crosses the x-axis.', 'teacher_review', '-12/x + 4', 0, 4, -6, 6);
addQ('y10-11b-14d', 'Sketch the graph of $y = \\frac{2}{x} - 1$, showing the asymptotes and any intercepts.', 'Asymptotes: x=0, y=-1. x-intercept: (2, 0).', 'Vertical asymptote x=0, horizontal asymptote y=-1. x-intercept: 0=2/x-1 ⇒ x=2.', 'Find where the graph crosses the x-axis.', 'teacher_review', '2/x - 1', 0, -1, -6, 6);

fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11BQuestions.js', `export const Y10_CH11B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Written ${questions.length} questions.`);
