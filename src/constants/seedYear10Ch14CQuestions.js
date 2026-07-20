export const Y10_CH14C_QUESTIONS = [
  {
    "id": "y10-14c-q1a",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Use the graph of \\(y = 3^x\\) to draw the graph of \\(y = \\log_3 x\\).",
    "answer": "Check graph",
    "hint": "Reflect the points of \\(y = 3^x\\) across the line \\(y = x\\).",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "Final answer: Check graph. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Check graph",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q1b",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Use the graph of \\(y = 2^x\\) to draw the graph of \\(y = \\log_2 x\\).",
    "answer": "Check graph",
    "hint": "Reflect the points of \\(y = 2^x\\) across the line \\(y = x\\).",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Sketch the graph of \\(y = 2^x\\), showing the y-intercept at \\(1\\) and passing through \\((1, 2)\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "The inverse function, \\(y = \\log_2 x\\), is found by swapping the x and y coordinates. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "Draw the reflected curve passing through \\((1, 0)\\) and \\((2, 1)\\), with a vertical asymptote at \\(x = 0\\).",
        "workingOut": "Check graph",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              5,
              5,
              -2
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.pow(2, x); }, -5, 5], {strokeColor:'blue',strokeWidth:2, name:'y=2^x', withLabel:true});\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(2); }, 0.001, 5], {strokeColor:'red',strokeWidth:2, name:'y=log_2 x', withLabel:true});\nboard.create('line', [[0,0],[1,1]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q2a",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "For the following logarithm function, produce a table of values for \\((x, y)\\), using the \\(y\\)-values: \\(-2, -1, 0, 1, 2\\). Use the table to draw the graph of the function.<br><br>\\(y = \\log_5 x\\)",
    "answer": "Check table and graph",
    "hint": "Rewrite the equation in exponential form: \\(x = 5^y\\).",
    "solution": "Check table and graph",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 5^y\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 5^{-2} = \\frac{1}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = 5^{-1} = \\frac{1}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Check table and graph. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Check table and graph",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q2b",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "For the following logarithm function, produce a table of values for \\((x, y)\\), using the \\(y\\)-values: \\(-2, -1, 0, 1, 2\\). Use the table to draw the graph of the function.<br><br>\\(y = \\log_4 x\\)",
    "answer": "Check table and graph",
    "hint": "Rewrite the equation in exponential form: \\(x = 4^y\\).",
    "solution": "Check table and graph",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 4^y\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\begin{array}{r} y=-2 \\implies x=\\frac{1}{16} \\\\ y=-1 \\implies x=\\frac{1}{4} \\\\ y=0 \\implies x=1 \\\\ y=1 \\implies x=4 \\\\ y=2 \\implies x=16 \\end{array}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Check table and graph",
        "graphData": null
      },
      {
        "explanation": "Final answer: Check table and graph. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Check table and graph",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q3a",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Draw each set of graphs on the same axes:<br><br>\\(y = 2^x\\), \\quad \\(y = 2^x + 2\\), \\quad \\(y = 2^x - 3\\)",
    "answer": "Check graph",
    "hint": "Consider the horizontal asymptote and the \\(y\\)-intercept for each graph.",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "First, sketch \\(y = 2^x\\), which has a \\(y\\)-intercept at \\(y = 1\\) and a horizontal asymptote at \\(y = 0\\).",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "For \\(y = 2^x + 2\\), translate the graph of \\(y = 2^x\\) vertically upwards by 2 units. The new \\(y\\)-intercept is \\(1 + 2 = 3\\) and the horizontal asymptote is \\(y = 2\\).",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "For \\(y = 2^x - 3\\), translate the graph of \\(y = 2^x\\) vertically downwards by 3 units. The new \\(y\\)-intercept is \\(1 - 3 = -2\\) and the horizontal asymptote is \\(y = -3\\).",
        "workingOut": "Check graph",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              8,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.pow(2, x); }, -4, 4], {strokeColor:'blue',strokeWidth:2, name:'y=2^x', withLabel:true});\nboard.create('functiongraph', [function(x){ return Math.pow(2, x) + 2; }, -4, 4], {strokeColor:'red',strokeWidth:2, name:'y=2^x + 2', withLabel:true});\nboard.create('functiongraph', [function(x){ return Math.pow(2, x) - 3; }, -4, 4], {strokeColor:'green',strokeWidth:2, name:'y=2^x - 3', withLabel:true});\nboard.create('line', [[0,2],[1,2]], {strokeColor:'red', dash:2});\nboard.create('line', [[0,-3],[1,-3]], {strokeColor:'green', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q3b",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Draw each set of graphs on the same axes:<br><br>\\(y = 3^x\\), \\quad \\(y = 2 \\times 3^x\\), \\quad \\(y = \\frac{1}{2} \\times 3^x\\)",
    "answer": "Check graph",
    "hint": "Determine the \\(y\\)-intercepts by setting \\(x = 0\\). The horizontal asymptote remains \\(y = 0\\).",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "For \\(y = 2 \\times 3^x\\), every \\(y\\)-value is multiplied by 2. This causes a vertical stretch. The new \\(y\\)-intercept is \\(2\\).",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "For \\(y = \\frac{1}{2} \\times 3^x\\), every \\(y\\)-value is halved. This causes a vertical compression. The new \\(y\\)-intercept is \\(0.5\\).",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "All three graphs share the same horizontal asymptote \\(y = 0\\). Sketch them passing through their respective \\(y\\)-intercepts.",
        "workingOut": "Check graph",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              6,
              3,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.pow(3, x); }, -4, 4], {strokeColor:'blue',strokeWidth:2, name:'y=3^x', withLabel:true});\nboard.create('functiongraph', [function(x){ return 2 * Math.pow(3, x); }, -4, 4], {strokeColor:'red',strokeWidth:2, name:'y=2(3^x)', withLabel:true});\nboard.create('functiongraph', [function(x){ return 0.5 * Math.pow(3, x); }, -4, 4], {strokeColor:'green',strokeWidth:2, name:'y=0.5(3^x)', withLabel:true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q3c",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Draw each set of graphs on the same axes:<br><br>\\(y = 4^x\\), \\quad \\(y = 4^{-x}\\)",
    "answer": "Check graph",
    "hint": "Replacing \\(x\\) with \\(-x\\) reflects the graph across the \\(y\\)-axis.",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Sketch the exponential growth curve \\(y = 4^x\\), crossing the \\(y\\)-axis at \\(1\\) and growing rapidly for \\(x > 0\\).",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "The function \\(y = 4^{-x}\\) can be written as \\(y = \\left(\\frac{1}{4}\\right)^x\\). This represents exponential decay.",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "Geometrically, substituting \\(-x\\) for \\(x\\) causes a reflection across the \\(y\\)-axis. Sketch the reflected curve.",
        "workingOut": "Check graph",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 300,
            "boundingbox": [
              -3,
              6,
              3,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.pow(4, x); }, -3, 3], {strokeColor:'blue',strokeWidth:2, name:'y=4^x', withLabel:true});\nboard.create('functiongraph', [function(x){ return Math.pow(4, -x); }, -3, 3], {strokeColor:'red',strokeWidth:2, name:'y=4^{-x}', withLabel:true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q4a",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider logarithmic functions with different bases.\nSketch the graphs of \\(y = \\log_3 x\\) and \\(y = \\log_5 x\\) on the same set of axes, for \\(y\\) values between \\(-3\\) and \\(3\\).",
    "answer": "Check graph",
    "hint": "Find the \\(x\\) values for \\(y = 1\\) for both functions to see which curve is lower.",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Identify the key points. For \\(y = \\log_3 x\\), when \\(y = 1\\), \\(x = 3\\). For \\(y = \\log_5 x\\), when \\(y = 1\\), \\(x = 5\\).",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "Both pass through the \\(x\\)-intercept \\((1, 0)\\) and share the vertical asymptote \\(x = 0\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "Since \\(5 > 3\\), the graph of \\(\\log_5 x\\) rises more slowly than \\(\\log_3 x\\) for \\(x > 1\\), and falls more slowly for \\(0 < x < 1\\).",
        "workingOut": "Check graph",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 300,
            "boundingbox": [
              -2,
              4,
              15,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(3); }, 0.001, 15], {strokeColor:'blue',strokeWidth:2, name:'y=log_3 x', withLabel:true});\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(5); }, 0.001, 15], {strokeColor:'red',strokeWidth:2, name:'y=log_5 x', withLabel:true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q4b",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider logarithmic functions with different bases.\nIn what ways are the graphs similar?",
    "answer": "Both have x-intercept at (1,0) and a vertical asymptote at x=0.",
    "hint": "Look at the intercepts and asymptotes.",
    "solution": "Both have x-intercept at (1,0) and a vertical asymptote at x=0.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Domain: } x > 0 \\\\ \\text{Range: All real } y\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{x-intercept at } x = 1 \\\\ \\text{Vertical asymptote at } x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Both have x-intercept at (1,0) and a vertical asymptote at x=0.",
        "graphData": null
      },
      {
        "explanation": "Final answer: Both have x-intercept at (1,0) and a vertical asymptote at x=0.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Both have x-intercept at (1,0) and a vertical asymptote at x=0.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q4c",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider logarithmic functions with different bases.\nHow do the graphs differ?",
    "answer": "The steepness differs.\ny=log_5 x rises slower than y=log_3 x for x > 1.",
    "hint": "Look at the position of the curves for \\(x > 1\\) and \\(0 < x < 1\\).",
    "solution": "The steepness differs.\ny=log_5 x rises slower than y=log_3 x for x > 1.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "The steepness differs.\ny=log_5 x rises slower than y=log_3 x for x > 1.",
        "graphData": null
      },
      {
        "explanation": "Final answer: The steepness differs.\ny=log_5 x rises slower than y=log_3 x for x > 1.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "The steepness differs.\ny=log_5 x rises slower than y=log_3 x for x > 1.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q4d",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider logarithmic functions with different bases.\nWithout using a table of values, sketch the graph of \\(y = \\log_6 x\\) on the same set of axes used in part a.",
    "answer": "Check graph",
    "hint": "Consider the effect of increasing the base from 5 to 6.",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "Final answer: Check graph. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Check graph",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q5a",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the following graph:<br><br>\\(y = \\log_2 x\\), \\(x > 0\\)",
    "answer": "Check graph",
    "hint": "Identify the x-intercept and the vertical asymptote.",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\log_2 x = 0 \\implies x = 2^0 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = \\log_2 2 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Check graph. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Check graph",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q5b",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the following graph:<br><br>\\(y = \\log_2 (x - 1)\\), \\(x > 1\\)",
    "answer": "Check graph",
    "hint": "Find the new vertical asymptote by setting the argument inside the log to 0.",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x - 1 = 0 \\implies x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\log_2(x-1) = 0 \\implies x-1 = 1 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\log_2(x-1) = 1 \\implies x-1 = 2 \\implies x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Check graph. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Check graph",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q5c",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the following graph:<br><br>\\(y = \\log_2 (x + 3)\\), \\(x > -3\\)",
    "answer": "Check graph",
    "hint": "A horizontal shift occurs when you add/subtract a number directly to \\(x\\) inside the logarithm.",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x + 3 = 0 \\implies x = -3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\log_2(x+3) = 0 \\implies x+3 = 1 \\implies x = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = \\log_2(0+3) = \\log_2 3 \\approx 1.58\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Check graph. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Check graph",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q5d",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the following graph:<br><br>\\(y = 3\\log_2 x\\), \\(x > 0\\)",
    "answer": "Check graph",
    "hint": "Every y-value of the standard graph \\(y = \\log_2 x\\) is multiplied by 3.",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 3\\log_2 2 = 3(1) = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Check graph. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Check graph",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q5e",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the following graph:<br><br>\\(y = \\log_2 x + 3\\), \\(x > 0\\)",
    "answer": "Check graph",
    "hint": "The \\(+3\\) shifts the entire graph upwards by 3 units.",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Graphs of exponential and logarithm functions: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\log_2 x + 3 = 0 \\implies \\log_2 x = -3 \\implies x = 2^{-3} = \\frac{1}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = \\log_2 1 + 3 = 0 + 3 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Check graph. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Check graph",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-14c-q6",
    "topicId": "y10-14c",
    "c": "14C",
    "t": "Graphs of exponential and logarithm functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch \\(y = 3^x\\), \\(y = 5^x\\), \\(y = \\log_3 x\\), and \\(y = \\log_5 x\\) on the one set of axes.",
    "answer": "Check graph",
    "hint": "Recall that logarithmic functions and exponential functions with the same base are reflections of each other across \\(y = x\\).",
    "solution": "Check graph",
    "solutionSteps": [
      {
        "explanation": "Sketch the exponential curves \\(y = 3^x\\) and \\(y = 5^x\\). Both pass through \\((0, 1)\\). For \\(x > 0\\), \\(5^x\\) is above \\(3^x\\).",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "Sketch the inverse logarithmic curves \\(y = \\log_3 x\\) and \\(y = \\log_5 x\\). Both pass through \\((1, 0)\\).",
        "workingOut": "Check graph",
        "graphData": null
      },
      {
        "explanation": "For \\(x > 1\\), \\(\\log_5 x\\) is closer to the x-axis than \\(\\log_3 x\\), since it is the reflection of the steeper \\(5^x\\) curve.",
        "workingOut": "Check graph",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -5,
              8,
              8,
              -5
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.pow(3, x); }, -3, 3], {strokeColor:'blue',strokeWidth:2, name:'y=3^x', withLabel:true});\nboard.create('functiongraph', [function(x){ return Math.pow(5, x); }, -3, 3], {strokeColor:'red',strokeWidth:2, name:'y=5^x', withLabel:true});\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(3); }, 0.001, 8], {strokeColor:'green',strokeWidth:2, name:'y=log_3 x', withLabel:true});\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(5); }, 0.001, 8], {strokeColor:'orange',strokeWidth:2, name:'y=log_5 x', withLabel:true});\nboard.create('line', [[0,0],[1,1]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  }
];
