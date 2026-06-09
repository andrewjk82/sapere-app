export const Y10_CH14C_QUESTIONS = [
  {
      "id": "y10-14c-q1a",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Use the graph of \\(y = 3^x\\) to draw the graph of \\(y = \\log_3 x\\).",
      "a": "Check graph",
      "solution": "The graph of \\(y = \\log_3 x\\) is the reflection of \\(y = 3^x\\) across the line \\(y = x\\).",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Reflect the points of \\(y = 3^x\\) across the line \\(y = x\\).",
      "solutionSteps": [
          {
              "explanation": "Sketch the graph of the exponential function \\(y = 3^x\\), which passes through \\((0, 1)\\) and \\((1, 3)\\).",
              "workingOut": ""
          },
          {
              "explanation": "Draw the line \\(y = x\\) as a dashed mirror line.",
              "workingOut": ""
          },
          {
              "explanation": "Reflect the exponential curve across \\(y = x\\) to obtain \\(y = \\log_3 x\\), which passes through \\((1, 0)\\) and \\((3, 1)\\).",
              "workingOut": "",
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
                      "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.pow(3, x); }, -5, 5], {strokeColor:'blue',strokeWidth:2, name:'y=3^x', withLabel:true});\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(3); }, 0.001, 5], {strokeColor:'red',strokeWidth:2, name:'y=log_3 x', withLabel:true});\nboard.create('line', [[0,0],[1,1]], {strokeColor:'gray', dash:2, name:'y=x'});\nboard.unsuspendUpdate();"
                  }
              }
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14c-q1b",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Use the graph of \\(y = 2^x\\) to draw the graph of \\(y = \\log_2 x\\).",
      "a": "Check graph",
      "solution": "The graph of \\(y = \\log_2 x\\) is the reflection of \\(y = 2^x\\) across the line \\(y = x\\).",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Reflect the points of \\(y = 2^x\\) across the line \\(y = x\\).",
      "solutionSteps": [
          {
              "explanation": "Sketch the graph of \\(y = 2^x\\), showing the y-intercept at \\(1\\) and passing through \\((1, 2)\\).",
              "workingOut": ""
          },
          {
              "explanation": "The inverse function, \\(y = \\log_2 x\\), is found by swapping the x and y coordinates.",
              "workingOut": ""
          },
          {
              "explanation": "Draw the reflected curve passing through \\((1, 0)\\) and \\((2, 1)\\), with a vertical asymptote at \\(x = 0\\).",
              "workingOut": "",
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
      "graphData": null
  },
  {
      "id": "y10-14c-q2a",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "For the following logarithm function, produce a table of values for \\((x, y)\\), using the \\(y\\)-values: \\(-2, -1, 0, 1, 2\\). Use the table to draw the graph of the function.<br><br>\\(y = \\log_5 x\\)",
      "a": "Check table and graph",
      "solution": "When \\(y = -2, -1, 0, 1, 2\\), the corresponding \\(x\\) values (since \\(x = 5^y\\)) are \\(1/25, 1/5, 1, 5, 25\\). Plot these points to draw the curve.",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Rewrite the equation in exponential form: \\(x = 5^y\\).",
      "solutionSteps": [
          {
              "explanation": "Rewrite the logarithmic equation in exponential form to easily find \\(x\\) for given \\(y\\) values.",
              "workingOut": "x = 5^y"
          },
          {
              "explanation": "Calculate \\(x\\) when \\(y = -2\\).",
              "workingOut": "x = 5^{-2} = \\frac{1}{25}"
          },
          {
              "explanation": "Calculate \\(x\\) when \\(y = -1\\).",
              "workingOut": "x = 5^{-1} = \\frac{1}{5}"
          },
          {
              "explanation": "Calculate \\(x\\) when \\(y = 0\\).",
              "workingOut": "x = 5^0 = 1"
          },
          {
              "explanation": "Calculate \\(x\\) when \\(y = 1\\) and \\(y = 2\\).",
              "workingOut": "x = 5^1 = 5, \\quad x = 5^2 = 25"
          },
          {
              "explanation": "Plot the points \\((1/25, -2)\\), \\((1/5, -1)\\), \\((1, 0)\\), \\((5, 1)\\), and \\((25, 2)\\) and join them with a smooth curve.",
              "workingOut": "",
              "graphData": {
                  "jsxGraph": {
                      "width": 400,
                      "height": 300,
                      "boundingbox": [
                          -2,
                          30,
                          4,
                          -4
                      ],
                      "boardOptions": {
                          "keepaspectratio": false
                      },
                      "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(5); }, 0.001, 30], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [1/25, -2], {name:'(1/25, -2)', size:2, color:'red'});\nboard.create('point', [1/5, -1], {name:'(1/5, -1)', size:2, color:'red'});\nboard.create('point', [1, 0], {name:'(1, 0)', size:2, color:'red'});\nboard.create('point', [5, 1], {name:'(5, 1)', size:2, color:'red'});\nboard.create('point', [25, 2], {name:'(25, 2)', size:2, color:'red'});\nboard.unsuspendUpdate();"
                  }
              }
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14c-q2b",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "For the following logarithm function, produce a table of values for \\((x, y)\\), using the \\(y\\)-values: \\(-2, -1, 0, 1, 2\\). Use the table to draw the graph of the function.<br><br>\\(y = \\log_4 x\\)",
      "a": "Check table and graph",
      "solution": "When \\(y = -2, -1, 0, 1, 2\\), the corresponding \\(x\\) values are \\(1/16, 1/4, 1, 4, 16\\). Plot these points to draw the curve.",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Rewrite the equation in exponential form: \\(x = 4^y\\).",
      "solutionSteps": [
          {
              "explanation": "Rewrite the logarithmic equation in exponential form.",
              "workingOut": "x = 4^y"
          },
          {
              "explanation": "Evaluate \\(x\\) for each given \\(y\\) value.",
              "workingOut": "\\begin{array}{r} y=-2 \\implies x=\\frac{1}{16} \\\\ y=-1 \\implies x=\\frac{1}{4} \\\\ y=0 \\implies x=1 \\\\ y=1 \\implies x=4 \\\\ y=2 \\implies x=16 \\end{array}"
          },
          {
              "explanation": "Plot the points and connect them with a smooth curve. Note the vertical asymptote at \\(x = 0\\).",
              "workingOut": "",
              "graphData": {
                  "jsxGraph": {
                      "width": 400,
                      "height": 300,
                      "boundingbox": [
                          -2,
                          20,
                          4,
                          -4
                      ],
                      "boardOptions": {
                          "keepaspectratio": false
                      },
                      "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(4); }, 0.001, 20], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [1/16, -2], {name:'(1/16, -2)', size:2, color:'red'});\nboard.create('point', [1/4, -1], {name:'(1/4, -1)', size:2, color:'red'});\nboard.create('point', [1, 0], {name:'(1, 0)', size:2, color:'red'});\nboard.create('point', [4, 1], {name:'(4, 1)', size:2, color:'red'});\nboard.create('point', [16, 2], {name:'(16, 2)', size:2, color:'red'});\nboard.unsuspendUpdate();"
                  }
              }
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14c-q3a",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Draw each set of graphs on the same axes:<br><br>\\(y = 2^x\\), \\quad \\(y = 2^x + 2\\), \\quad \\(y = 2^x - 3\\)",
      "a": "Check graph",
      "solution": "These graphs are vertical translations of \\(y = 2^x\\). Move it up 2 units and down 3 units respectively. The asymptotes move to \\(y = 2\\) and \\(y = -3\\).",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Consider the horizontal asymptote and the \\(y\\)-intercept for each graph.",
      "solutionSteps": [
          {
              "explanation": "First, sketch \\(y = 2^x\\), which has a \\(y\\)-intercept at \\(y = 1\\) and a horizontal asymptote at \\(y = 0\\).",
              "workingOut": ""
          },
          {
              "explanation": "For \\(y = 2^x + 2\\), translate the graph of \\(y = 2^x\\) vertically upwards by 2 units. The new \\(y\\)-intercept is \\(1 + 2 = 3\\) and the horizontal asymptote is \\(y = 2\\).",
              "workingOut": ""
          },
          {
              "explanation": "For \\(y = 2^x - 3\\), translate the graph of \\(y = 2^x\\) vertically downwards by 3 units. The new \\(y\\)-intercept is \\(1 - 3 = -2\\) and the horizontal asymptote is \\(y = -3\\).",
              "workingOut": "",
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
      "graphData": null
  },
  {
      "id": "y10-14c-q3b",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Draw each set of graphs on the same axes:<br><br>\\(y = 3^x\\), \\quad \\(y = 2 \\times 3^x\\), \\quad \\(y = \\frac{1}{2} \\times 3^x\\)",
      "a": "Check graph",
      "solution": "These graphs are vertical dilations of \\(y = 3^x\\). The \\(y\\)-intercepts are 1, 2, and 0.5 respectively. The horizontal asymptote is \\(y = 0\\) for all.",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Determine the \\(y\\)-intercepts by setting \\(x = 0\\). The horizontal asymptote remains \\(y = 0\\).",
      "solutionSteps": [
          {
              "explanation": "The base graph is \\(y = 3^x\\), with a \\(y\\)-intercept of \\(1\\).",
              "workingOut": ""
          },
          {
              "explanation": "For \\(y = 2 \\times 3^x\\), every \\(y\\)-value is multiplied by 2. This causes a vertical stretch. The new \\(y\\)-intercept is \\(2\\).",
              "workingOut": ""
          },
          {
              "explanation": "For \\(y = \\frac{1}{2} \\times 3^x\\), every \\(y\\)-value is halved. This causes a vertical compression. The new \\(y\\)-intercept is \\(0.5\\).",
              "workingOut": ""
          },
          {
              "explanation": "All three graphs share the same horizontal asymptote \\(y = 0\\). Sketch them passing through their respective \\(y\\)-intercepts.",
              "workingOut": "",
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
      "graphData": null
  },
  {
      "id": "y10-14c-q3c",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Draw each set of graphs on the same axes:<br><br>\\(y = 4^x\\), \\quad \\(y = 4^{-x}\\)",
      "a": "Check graph",
      "solution": "\\(y = 4^{-x}\\) is the reflection of \\(y = 4^x\\) across the \\(y\\)-axis.",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Replacing \\(x\\) with \\(-x\\) reflects the graph across the \\(y\\)-axis.",
      "solutionSteps": [
          {
              "explanation": "Sketch the exponential growth curve \\(y = 4^x\\), crossing the \\(y\\)-axis at \\(1\\) and growing rapidly for \\(x > 0\\).",
              "workingOut": ""
          },
          {
              "explanation": "The function \\(y = 4^{-x}\\) can be written as \\(y = \\left(\\frac{1}{4}\\right)^x\\). This represents exponential decay.",
              "workingOut": ""
          },
          {
              "explanation": "Geometrically, substituting \\(-x\\) for \\(x\\) causes a reflection across the \\(y\\)-axis. Sketch the reflected curve.",
              "workingOut": "",
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
      "graphData": null
  },
  {
      "id": "y10-14c-q4",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Consider logarithmic functions with different bases.",
      "a": "Check review",
      "solution": "Completed in parts.",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "The base determines the steepness of the curve.",
      "subQuestions": [
          {
              "id": "y10-14c-q4a",
              "type": "teacher_review",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "Sketch the graphs of \\(y = \\log_3 x\\) and \\(y = \\log_5 x\\) on the same set of axes, for \\(y\\) values between \\(-3\\) and \\(3\\).",
              "a": "Check graph",
              "solution": "Draw both curves passing through \\((1,0)\\). For \\(x > 1\\), \\(y = \\log_5 x\\) lies below \\(y = \\log_3 x\\).",
              "hint": "Find the \\(x\\) values for \\(y = 1\\) for both functions to see which curve is lower.",
              "solutionSteps": [
                  {
                      "explanation": "Identify the key points. For \\(y = \\log_3 x\\), when \\(y = 1\\), \\(x = 3\\). For \\(y = \\log_5 x\\), when \\(y = 1\\), \\(x = 5\\).",
                      "workingOut": ""
                  },
                  {
                      "explanation": "Both pass through the \\(x\\)-intercept \\((1, 0)\\) and share the vertical asymptote \\(x = 0\\).",
                      "workingOut": ""
                  },
                  {
                      "explanation": "Since \\(5 > 3\\), the graph of \\(\\log_5 x\\) rises more slowly than \\(\\log_3 x\\) for \\(x > 1\\), and falls more slowly for \\(0 < x < 1\\).",
                      "workingOut": "",
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
              "graphData": null
          },
          {
              "id": "y10-14c-q4b",
              "type": "teacher_review",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "In what ways are the graphs similar?",
              "a": "Both have x-intercept at (1,0) and a vertical asymptote at x=0.",
              "solution": "They both have an x-intercept at \\(x = 1\\), a vertical asymptote at \\(x = 0\\), and an increasing shape over their domain \\(x > 0\\).",
              "hint": "Look at the intercepts and asymptotes.",
              "solutionSteps": [
                  {
                      "explanation": "Identify common features.",
                      "workingOut": "\\text{Domain: } x > 0 \\\\ \\text{Range: All real } y"
                  },
                  {
                      "explanation": "Identify intercepts and asymptotes.",
                      "workingOut": "\\text{x-intercept at } x = 1 \\\\ \\text{Vertical asymptote at } x = 0"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14c-q4c",
              "type": "teacher_review",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "How do the graphs differ?",
              "a": "The steepness differs. y=log_5 x rises slower than y=log_3 x for x > 1.",
              "solution": "The larger the base, the slower the graph rises for \\(x > 1\\), and the closer it is to the x-axis.",
              "hint": "Look at the position of the curves for \\(x > 1\\) and \\(0 < x < 1\\).",
              "solutionSteps": [
                  {
                      "explanation": "Observe the steepness of the curves.",
                      "workingOut": ""
                  },
                  {
                      "explanation": "For \\(x > 1\\), \\(\\log_5 x\\) is closer to the x-axis than \\(\\log_3 x\\) because a larger base means it takes a larger \\(x\\) to reach the same \\(y\\)-value.",
                      "workingOut": ""
                  },
                  {
                      "explanation": "For \\(0 < x < 1\\), \\(\\log_5 x\\) is also closer to the y-axis than \\(\\log_3 x\\).",
                      "workingOut": ""
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14c-q4d",
              "type": "teacher_review",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "Without using a table of values, sketch the graph of \\(y = \\log_6 x\\) on the same set of axes used in part a.",
              "a": "Check graph",
              "solution": "Since 6 > 5, the curve for \\(y = \\log_6 x\\) should lie below \\(y = \\log_5 x\\) for \\(x > 1\\).",
              "hint": "Consider the effect of increasing the base from 5 to 6.",
              "solutionSteps": [
                  {
                      "explanation": "We know that for logarithmic functions, a larger base results in a graph that is closer to the x-axis for \\(x > 1\\).",
                      "workingOut": ""
                  },
                  {
                      "explanation": "Since \\(6 > 5\\), the graph of \\(y = \\log_6 x\\) will pass through \\((1,0)\\) but will rise even slower than \\(y = \\log_5 x\\).",
                      "workingOut": ""
                  },
                  {
                      "explanation": "Sketch the curve so that for \\(x > 1\\), it is below the \\(\\log_5 x\\) curve.",
                      "workingOut": "",
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
                              "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(3); }, 0.001, 15], {strokeColor:'blue',strokeWidth:1, dash:2});\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(5); }, 0.001, 15], {strokeColor:'red',strokeWidth:1, dash:2});\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(6); }, 0.001, 15], {strokeColor:'green',strokeWidth:2, name:'y=log_6 x', withLabel:true});\nboard.unsuspendUpdate();"
                          }
                      }
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14c-q5a",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Sketch the following graph:<br><br>\\(y = \\log_2 x\\), \\(x > 0\\)",
      "a": "Check graph",
      "solution": "Standard log base 2 graph passing through \\((1, 0)\\) and \\((2, 1)\\).",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Identify the x-intercept and the vertical asymptote.",
      "solutionSteps": [
          {
              "explanation": "Identify the vertical asymptote where the argument of the log is zero.",
              "workingOut": "x = 0"
          },
          {
              "explanation": "Find the x-intercept by setting \\(y = 0\\).",
              "workingOut": "\\log_2 x = 0 \\implies x = 2^0 = 1"
          },
          {
              "explanation": "Find another key point by setting \\(x = 2\\).",
              "workingOut": "y = \\log_2 2 = 1"
          },
          {
              "explanation": "Plot these points and the asymptote, and draw a smooth curve.",
              "workingOut": "",
              "graphData": {
                  "jsxGraph": {
                      "width": 400,
                      "height": 300,
                      "boundingbox": [
                          -2,
                          5,
                          8,
                          -5
                      ],
                      "boardOptions": {
                          "keepaspectratio": false
                      },
                      "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(2); }, 0.001, 8], {strokeColor:'blue',strokeWidth:2});\nboard.create('line', [[0,0],[0,1]], {strokeColor:'black', dash:2});\nboard.create('point', [1, 0], {name:'(1,0)', size:2, color:'red'});\nboard.create('point', [2, 1], {name:'(2,1)', size:2, color:'red'});\nboard.unsuspendUpdate();"
                  }
              }
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14c-q5b",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Sketch the following graph:<br><br>\\(y = \\log_2 (x - 1)\\), \\(x > 1\\)",
      "a": "Check graph",
      "solution": "The graph of \\(y = \\log_2 x\\) shifted right by 1 unit. Asymptote at \\(x = 1\\), intercept at \\(x = 2\\).",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Find the new vertical asymptote by setting the argument inside the log to 0.",
      "solutionSteps": [
          {
              "explanation": "The graph is a horizontal translation of \\(y = \\log_2 x\\) to the right by 1 unit.",
              "workingOut": ""
          },
          {
              "explanation": "Find the new vertical asymptote by setting the argument to zero.",
              "workingOut": "x - 1 = 0 \\implies x = 1"
          },
          {
              "explanation": "Find the x-intercept by setting \\(y = 0\\).",
              "workingOut": "\\log_2(x-1) = 0 \\implies x-1 = 1 \\implies x = 2"
          },
          {
              "explanation": "Find the point where \\(y = 1\\).",
              "workingOut": "\\log_2(x-1) = 1 \\implies x-1 = 2 \\implies x = 3"
          },
          {
              "explanation": "Sketch the curve.",
              "workingOut": "",
              "graphData": {
                  "jsxGraph": {
                      "width": 400,
                      "height": 300,
                      "boundingbox": [
                          -2,
                          5,
                          8,
                          -5
                      ],
                      "boardOptions": {
                          "keepaspectratio": false
                      },
                      "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.log(x-1)/Math.log(2); }, 1.001, 8], {strokeColor:'blue',strokeWidth:2});\nboard.create('line', [[1,0],[1,1]], {strokeColor:'red', dash:2, name:'x=1'});\nboard.create('point', [2, 0], {name:'(2,0)', size:2, color:'red'});\nboard.create('point', [3, 1], {name:'(3,1)', size:2, color:'red'});\nboard.unsuspendUpdate();"
                  }
              }
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14c-q5c",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Sketch the following graph:<br><br>\\(y = \\log_2 (x + 3)\\), \\(x > -3\\)",
      "a": "Check graph",
      "solution": "The graph of \\(y = \\log_2 x\\) shifted left by 3 units. Asymptote at \\(x = -3\\), intercept at \\(x = -2\\).",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "A horizontal shift occurs when you add/subtract a number directly to \\(x\\) inside the logarithm.",
      "solutionSteps": [
          {
              "explanation": "The graph is a horizontal translation of \\(y = \\log_2 x\\) to the left by 3 units.",
              "workingOut": ""
          },
          {
              "explanation": "Find the new vertical asymptote.",
              "workingOut": "x + 3 = 0 \\implies x = -3"
          },
          {
              "explanation": "Find the x-intercept by setting \\(y = 0\\).",
              "workingOut": "\\log_2(x+3) = 0 \\implies x+3 = 1 \\implies x = -2"
          },
          {
              "explanation": "Find the y-intercept by setting \\(x = 0\\).",
              "workingOut": "y = \\log_2(0+3) = \\log_2 3 \\approx 1.58"
          },
          {
              "explanation": "Sketch the curve.",
              "workingOut": "",
              "graphData": {
                  "jsxGraph": {
                      "width": 400,
                      "height": 300,
                      "boundingbox": [
                          -5,
                          5,
                          5,
                          -5
                      ],
                      "boardOptions": {
                          "keepaspectratio": false
                      },
                      "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.log(x+3)/Math.log(2); }, -2.999, 5], {strokeColor:'blue',strokeWidth:2});\nboard.create('line', [[-3,0],[-3,1]], {strokeColor:'red', dash:2, name:'x=-3'});\nboard.create('point', [-2, 0], {name:'(-2,0)', size:2, color:'red'});\nboard.create('point', [1, 2], {name:'(1,2)', size:2, color:'red'});\nboard.unsuspendUpdate();"
                  }
              }
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14c-q5d",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Sketch the following graph:<br><br>\\(y = 3\\log_2 x\\), \\(x > 0\\)",
      "a": "Check graph",
      "solution": "A vertical dilation of \\(y = \\log_2 x\\) by a factor of 3. Passes through \\((1,0)\\) and \\((2,3)\\).",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Every y-value of the standard graph \\(y = \\log_2 x\\) is multiplied by 3.",
      "solutionSteps": [
          {
              "explanation": "This graph is a vertical stretch of \\(y = \\log_2 x\\) by a factor of 3.",
              "workingOut": ""
          },
          {
              "explanation": "The vertical asymptote remains the same.",
              "workingOut": "x = 0"
          },
          {
              "explanation": "The x-intercept remains the same since \\(3(0) = 0\\).",
              "workingOut": "x = 1"
          },
          {
              "explanation": "Find the y-value when \\(x = 2\\).",
              "workingOut": "y = 3\\log_2 2 = 3(1) = 3"
          },
          {
              "explanation": "Plot \\((1,0)\\) and \\((2,3)\\) to sketch the stretched curve.",
              "workingOut": "",
              "graphData": {
                  "jsxGraph": {
                      "width": 400,
                      "height": 300,
                      "boundingbox": [
                          -2,
                          5,
                          8,
                          -5
                      ],
                      "boardOptions": {
                          "keepaspectratio": false
                      },
                      "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return 3 * Math.log(x)/Math.log(2); }, 0.001, 8], {strokeColor:'blue',strokeWidth:2});\nboard.create('line', [[0,0],[0,1]], {strokeColor:'black', dash:2});\nboard.create('point', [1, 0], {name:'(1,0)', size:2, color:'red'});\nboard.create('point', [2, 3], {name:'(2,3)', size:2, color:'red'});\nboard.unsuspendUpdate();"
                  }
              }
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14c-q5e",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Sketch the following graph:<br><br>\\(y = \\log_2 x + 3\\), \\(x > 0\\)",
      "a": "Check graph",
      "solution": "A vertical translation of \\(y = \\log_2 x\\) upwards by 3 units. The point \\((1,0)\\) moves to \\((1,3)\\).",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "The \\(+3\\) shifts the entire graph upwards by 3 units.",
      "solutionSteps": [
          {
              "explanation": "This graph represents a vertical shift of \\(y = \\log_2 x\\) upwards by 3 units.",
              "workingOut": ""
          },
          {
              "explanation": "The vertical asymptote is unchanged.",
              "workingOut": "x = 0"
          },
          {
              "explanation": "Find the x-intercept by setting \\(y = 0\\).",
              "workingOut": "\\log_2 x + 3 = 0 \\implies \\log_2 x = -3 \\implies x = 2^{-3} = \\frac{1}{8}"
          },
          {
              "explanation": "Find the y-value when \\(x = 1\\).",
              "workingOut": "y = \\log_2 1 + 3 = 0 + 3 = 3"
          },
          {
              "explanation": "Sketch the shifted curve passing through \\((1/8, 0)\\) and \\((1, 3)\\).",
              "workingOut": "",
              "graphData": {
                  "jsxGraph": {
                      "width": 400,
                      "height": 300,
                      "boundingbox": [
                          -2,
                          5,
                          8,
                          -5
                      ],
                      "boardOptions": {
                          "keepaspectratio": false
                      },
                      "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return Math.log(x)/Math.log(2) + 3; }, 0.001, 8], {strokeColor:'blue',strokeWidth:2});\nboard.create('line', [[0,0],[0,1]], {strokeColor:'black', dash:2});\nboard.create('point', [0.125, 0], {name:'(1/8, 0)', size:2, color:'red'});\nboard.create('point', [1, 3], {name:'(1, 3)', size:2, color:'red'});\nboard.unsuspendUpdate();"
                  }
              }
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14c-q6",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Sketch \\(y = 3^x\\), \\(y = 5^x\\), \\(y = \\log_3 x\\), and \\(y = \\log_5 x\\) on the one set of axes.",
      "a": "Check graph",
      "solution": "The exponential graphs pass through \\((0,1)\\), with \\(5^x\\) steeper for \\(x>0\\). The logarithmic graphs are their reflections across \\(y=x\\), passing through \\((1,0)\\), with \\(\\log_5 x\\) closer to the x-axis for \\(x>1\\).",
      "t": "Graphs of exponential and logarithm functions",
      "hint": "Recall that logarithmic functions and exponential functions with the same base are reflections of each other across \\(y = x\\).",
      "solutionSteps": [
          {
              "explanation": "Sketch the exponential curves \\(y = 3^x\\) and \\(y = 5^x\\). Both pass through \\((0, 1)\\). For \\(x > 0\\), \\(5^x\\) is above \\(3^x\\).",
              "workingOut": ""
          },
          {
              "explanation": "Draw the reflection line \\(y = x\\).",
              "workingOut": ""
          },
          {
              "explanation": "Sketch the inverse logarithmic curves \\(y = \\log_3 x\\) and \\(y = \\log_5 x\\). Both pass through \\((1, 0)\\).",
              "workingOut": ""
          },
          {
              "explanation": "For \\(x > 1\\), \\(\\log_5 x\\) is closer to the x-axis than \\(\\log_3 x\\), since it is the reflection of the steeper \\(5^x\\) curve.",
              "workingOut": "",
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
      "graphData": null
  },
];
