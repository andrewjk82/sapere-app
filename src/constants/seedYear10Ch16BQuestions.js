export const Y10_CH16B_QUESTIONS = [
  {
      "id": "y10-16b-q1",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Consider the following table of values.\n\n| \\(a\\) | 1 | 2 | 3 | 4 | 6 |\n|---|---|---|---|---|---|\n| \\(b\\) | 18 | 9 | 6 | 4.5 | 3 |",
      "a": "See sub-questions.",
      "t": "Inverse proportion",
      "hint": "Try plotting \\(b\\) against \\(\\frac{1}{a}\\) and see if the points are collinear.",
      "solution": "See sub-questions.",
      "subQuestions": [
          {
              "id": "y10-16b-q1a",
              "type": "teacher_review",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "Plot the graph of \\(b\\) against \\(\\frac{1}{a}\\).",
              "a": "Straight line through the origin passing through the plotted points.",
              "hint": "Calculate \\(\\frac{1}{a}\\) for each value of \\(a\\), then plot the pairs \\(\\left(\\frac{1}{a}, b\\right)\\).",
              "solution": "The points are (1, 18), (0.5, 9), (1/3, 6), (0.25, 4.5), (1/6, 3). These lie on a straight line through the origin with gradient 18.",
              "solutionSteps": [
                  {
                      "explanation": "Calculate \\(\\frac{1}{a}\\) for each value.",
                      "workingOut": "\\frac{1}{1}=1,\\; \\frac{1}{2}=0.5,\\; \\frac{1}{3}\\approx 0.33,\\; \\frac{1}{4}=0.25,\\; \\frac{1}{6}\\approx 0.17"
                  },
                  {
                      "explanation": "Plot each pair \\(\\left(\\frac{1}{a},\\, b\\right)\\) on a graph.",
                      "workingOut": "(1, 18),\\; (0.5, 9),\\; (0.33, 6),\\; (0.25, 4.5),\\; (0.17, 3)"
                  },
                  {
                      "explanation": "The points lie on a straight line through the origin, confirming \\(b\\) is directly proportional to \\(\\frac{1}{a}\\).",
                      "workingOut": "",
                      "graphData": {
                          "jsxGraph": {
                              "width": 400,
                              "height": 300,
                              "boundingbox": [
                                  -0.1,
                                  22,
                                  1.2,
                                  -2
                              ],
                              "boardOptions": {
                                  "keepaspectratio": false
                              },
                              "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]]);\nboard.create('axis',[[0,0],[0,1]]);\nboard.create('functiongraph',[function(x){return 18*x;},0,1.1],{strokeColor:'blue',strokeWidth:2});\nboard.create('point',[1,18],{name:'(1,18)',fixed:true,size:3});\nboard.create('point',[0.5,9],{name:'(0.5,9)',fixed:true,size:3});\nboard.create('point',[1/3,6],{name:'(1/3,6)',fixed:true,size:3});\nboard.create('point',[0.25,4.5],{name:'(0.25,4.5)',fixed:true,size:3});\nboard.create('point',[1/6,3],{name:'(1/6,3)',fixed:true,size:3});\nboard.create('text',[0.9,-1,'1/a'],{fontSize:14});\nboard.create('text',[-0.08,20,'b'],{fontSize:14});\nboard.unsuspendUpdate();"
                          }
                      }
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-16b-q1b",
              "type": "short_answer",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "Assuming that there is a simple relationship between the two variables, find a formula for \\(b\\) in terms of \\(a\\).",
              "a": "b = 18/a",
              "hint": "From the graph, \\(b\\) is directly proportional to \\(\\frac{1}{a}\\). What is the constant?",
              "solution": "b = k/a. From the table, k = a*b = 1*18 = 18. So b = 18/a.",
              "solutionSteps": [
                  {
                      "explanation": "From the straight-line graph through the origin, \\(b = k \\times \\frac{1}{a}\\).",
                      "workingOut": "b = \\frac{k}{a}"
                  },
                  {
                      "explanation": "Use any pair to find \\(k\\). Using \\(a = 1, b = 18\\):",
                      "workingOut": "k = ab = 1 \\times 18 = 18"
                  },
                  {
                      "explanation": "Write the formula.",
                      "workingOut": "\\therefore b = \\frac{18}{a}"
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q2",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Consider the following table of values.\n\n| \\(x\\) | 1 | 2 | 4 | 8 |\n|---|---|---|---|---|\n| \\(y\\) | 64 | 16 | 4 | 1 |\n| \\(x^2 y\\) | 64 | | | |",
      "a": "See sub-questions.",
      "t": "Inverse proportion",
      "hint": "Calculate \\(x^2 y\\) for each column.",
      "solution": "See sub-questions.",
      "subQuestions": [
          {
              "id": "y10-16b-q2a",
              "type": "teacher_review",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "Complete the table of values for \\(x^2 y\\).",
              "a": "x\u00b2y = 64 for all columns.",
              "hint": "Multiply \\(x^2\\) by \\(y\\) for each column.",
              "solution": "x\u00b2y: 1*64=64, 4*16=64, 16*4=64, 64*1=64. All equal 64.",
              "solutionSteps": [
                  {
                      "explanation": "Calculate \\(x^2 y\\) for each column.",
                      "workingOut": "1^2 \\times 64 = 64"
                  },
                  {
                      "explanation": "Continue for the remaining columns.",
                      "workingOut": "2^2 \\times 16 = 64,\\quad 4^2 \\times 4 = 64,\\quad 8^2 \\times 1 = 64"
                  },
                  {
                      "explanation": "The product \\(x^2 y\\) is constant at 64 for all pairs.",
                      "workingOut": "x^2 y = 64"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-16b-q2b",
              "type": "short_answer",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "Assuming that there is a simple relationship between the two variables, find a formula for \\(y\\) in terms of \\(x\\).",
              "a": "y = 64/x^2",
              "hint": "Since \\(x^2 y\\) is constant, what does that tell you about the relationship?",
              "solution": "x\u00b2y = 64, so y = 64/x\u00b2.",
              "solutionSteps": [
                  {
                      "explanation": "Since \\(x^2 y = 64\\) is constant, \\(y\\) is inversely proportional to \\(x^2\\).",
                      "workingOut": "y \\propto \\frac{1}{x^2}"
                  },
                  {
                      "explanation": "Write the formula using the constant.",
                      "workingOut": "y = \\frac{64}{x^2}"
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q3",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Write each statement in symbols.",
      "a": "See sub-questions.",
      "t": "Inverse proportion",
      "hint": "Use the \\(\\propto\\) symbol for proportionality.",
      "solution": "See sub-questions.",
      "subQuestions": [
          {
              "id": "y10-16b-q3a",
              "type": "teacher_review",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "The speed \\(v\\) km/h of a car over a given distance is inversely proportional to the time \\(t\\) hours of travel.",
              "a": "v \u221d 1/t or v = k/t",
              "hint": "Inversely proportional means one variable is proportional to the reciprocal of the other.",
              "solution": "v \u221d 1/t, or equivalently v = k/t.",
              "solutionSteps": [
                  {
                      "explanation": "Inversely proportional means \\(v\\) is proportional to the reciprocal of \\(t\\).",
                      "workingOut": "v \\propto \\frac{1}{t}"
                  },
                  {
                      "explanation": "This can also be written as:",
                      "workingOut": "v = \\frac{k}{t} \\quad (k > 0)"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-16b-q3b",
              "type": "teacher_review",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "\\(m\\) is inversely proportional to the square root of \\(n\\).",
              "a": "m \u221d 1/\u221an or m = k/\u221an",
              "hint": "Write \\(m\\) proportional to \\(\\frac{1}{\\sqrt{n}}\\).",
              "solution": "m \u221d 1/\u221an.",
              "solutionSteps": [
                  {
                      "explanation": "Inversely proportional to the square root of \\(n\\) means:",
                      "workingOut": "m \\propto \\frac{1}{\\sqrt{n}}"
                  },
                  {
                      "explanation": "Or equivalently:",
                      "workingOut": "m = \\frac{k}{\\sqrt{n}} \\quad (k > 0)"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-16b-q3c",
              "type": "teacher_review",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "\\(s\\) is inversely proportional to the cube of \\(t\\).",
              "a": "s \u221d 1/t^3 or s = k/t^3",
              "hint": "Write \\(s\\) proportional to \\(\\frac{1}{t^3}\\).",
              "solution": "s \u221d 1/t\u00b3.",
              "solutionSteps": [
                  {
                      "explanation": "Inversely proportional to the cube of \\(t\\) means:",
                      "workingOut": "s \\propto \\frac{1}{t^3}"
                  },
                  {
                      "explanation": "Or equivalently:",
                      "workingOut": "s = \\frac{k}{t^3} \\quad (k > 0)"
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q4a",
      "type": "short_answer",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "\\(y\\) is inversely proportional to \\(x\\). If \\(x = 3\\) when \\(y = 4\\), find a formula relating \\(x\\) and \\(y\\), and calculate \\(y\\) when \\(x = \\frac{4}{3}\\).",
      "a": "9",
      "t": "Inverse proportion",
      "hint": "Write \\(y = k/x\\) and find \\(k\\) first.",
      "solution": "y = k/x, 4 = k/3, k = 12. y = 12/x. When x = 4/3: y = 12/(4/3) = 9.",
      "solutionSteps": [
          {
              "explanation": "Since \\(y\\) is inversely proportional to \\(x\\), write the relationship.",
              "workingOut": "y = \\frac{k}{x}"
          },
          {
              "explanation": "Substitute \\(x = 3\\) and \\(y = 4\\) to find \\(k\\).",
              "workingOut": "4 = \\frac{k}{3} \\implies k = 12"
          },
          {
              "explanation": "The formula is:",
              "workingOut": "y = \\frac{12}{x}"
          },
          {
              "explanation": "Substitute \\(x = \\frac{4}{3}\\).",
              "workingOut": "y = \\frac{12}{\\frac{4}{3}} = 12 \\times \\frac{3}{4} = 9"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q4b",
      "type": "short_answer",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "\\(y\\) is inversely proportional to \\(x\\). If \\(x = 3\\) when \\(y = 4\\), find a formula relating \\(x\\) and \\(y\\), and calculate \\(x\\) when \\(y = \\frac{3}{4}\\).",
      "a": "16",
      "t": "Inverse proportion",
      "hint": "Use the formula \\(y = 12/x\\) and solve for \\(x\\).",
      "solution": "y = 12/x. When y = 3/4: 3/4 = 12/x, x = 16.",
      "solutionSteps": [
          {
              "explanation": "From the previous result, the formula is \\(y = \\frac{12}{x}\\).",
              "workingOut": "y = \\frac{12}{x}"
          },
          {
              "explanation": "Substitute \\(y = \\frac{3}{4}\\) and solve for \\(x\\).",
              "workingOut": "\\frac{3}{4} = \\frac{12}{x}"
          },
          {
              "explanation": "Rearrange.",
              "workingOut": "x = \\frac{12}{\\frac{3}{4}} = 12 \\times \\frac{4}{3} = 16"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q5a",
      "type": "short_answer",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Given that \\(a\\) is inversely proportional to \\(b^2\\) and that \\(a = 8\\) when \\(b = 3\\), find a formula for \\(a\\) in terms of \\(b\\), and calculate \\(a\\) when \\(b = 4\\).",
      "a": "4.5",
      "t": "Inverse proportion",
      "hint": "Write \\(a = k/b^2\\) and substitute to find \\(k\\).",
      "solution": "a = k/b\u00b2, 8 = k/9, k = 72. a = 72/b\u00b2. When b=4: a = 72/16 = 4.5.",
      "solutionSteps": [
          {
              "explanation": "Since \\(a\\) is inversely proportional to \\(b^2\\), write the relationship.",
              "workingOut": "a = \\frac{k}{b^2}"
          },
          {
              "explanation": "Substitute \\(a = 8\\) and \\(b = 3\\).",
              "workingOut": "8 = \\frac{k}{9} \\implies k = 72"
          },
          {
              "explanation": "The formula is:",
              "workingOut": "a = \\frac{72}{b^2}"
          },
          {
              "explanation": "Substitute \\(b = 4\\).",
              "workingOut": "a = \\frac{72}{16} = 4.5"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q5b",
      "type": "short_answer",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "Given that \\(a\\) is inversely proportional to \\(b^2\\) and that \\(a = 8\\) when \\(b = 3\\), find the value of \\(b\\) when \\(a = 2\\).",
      "a": "6",
      "t": "Inverse proportion",
      "hint": "Substitute \\(a = 2\\) into \\(a = 72/b^2\\) and solve.",
      "solution": "2 = 72/b\u00b2, b\u00b2 = 36, b = 6.",
      "solutionSteps": [
          {
              "explanation": "Using the formula \\(a = \\frac{72}{b^2}\\), substitute \\(a = 2\\).",
              "workingOut": "2 = \\frac{72}{b^2}"
          },
          {
              "explanation": "Rearrange to solve for \\(b^2\\).",
              "workingOut": "b^2 = \\frac{72}{2} = 36"
          },
          {
              "explanation": "Take the positive square root.",
              "workingOut": "b = 6"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q6a",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Given that \\(p \\propto \\frac{1}{\\sqrt{q}}\\) and that \\(p = 6\\) when \\(q = 9\\), find a formula for \\(p\\) in terms of \\(q\\), and calculate \\(p\\) when \\(q = 16\\).",
      "a": "4.5",
      "t": "Inverse proportion",
      "hint": "Write \\(p = k/\\sqrt{q}\\) and find \\(k\\).",
      "solution": "p = k/\u221aq, 6 = k/3, k = 18. p = 18/\u221aq. When q=16: p = 18/4 = 4.5.",
      "solutionSteps": [
          {
              "explanation": "Write the relationship.",
              "workingOut": "p = \\frac{k}{\\sqrt{q}}"
          },
          {
              "explanation": "Substitute \\(p = 6\\) and \\(q = 9\\).",
              "workingOut": "6 = \\frac{k}{\\sqrt{9}} = \\frac{k}{3} \\implies k = 18"
          },
          {
              "explanation": "The formula is:",
              "workingOut": "p = \\frac{18}{\\sqrt{q}}"
          },
          {
              "explanation": "Substitute \\(q = 16\\).",
              "workingOut": "p = \\frac{18}{\\sqrt{16}} = \\frac{18}{4} = 4.5"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q6b",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Given that \\(p \\propto \\frac{1}{\\sqrt{q}}\\) and that \\(p = 6\\) when \\(q = 9\\), calculate \\(q\\) when \\(p = 3\\).",
      "a": "36",
      "t": "Inverse proportion",
      "hint": "Substitute \\(p = 3\\) into \\(p = 18/\\sqrt{q}\\).",
      "solution": "3 = 18/\u221aq, \u221aq = 6, q = 36.",
      "solutionSteps": [
          {
              "explanation": "Using the formula \\(p = \\frac{18}{\\sqrt{q}}\\), substitute \\(p = 3\\).",
              "workingOut": "3 = \\frac{18}{\\sqrt{q}}"
          },
          {
              "explanation": "Solve for \\(\\sqrt{q}\\).",
              "workingOut": "\\sqrt{q} = \\frac{18}{3} = 6"
          },
          {
              "explanation": "Square both sides.",
              "workingOut": "q = 36"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q7",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "For the data below, we assume that \\(y \\propto \\frac{1}{x}\\). Find the constant of proportionality and complete the table.\n\n| \\(x\\) | 1 | 3 | ? | 6 | ? |\n|---|---|---|---|---|---|\n| \\(y\\) | 18 | ? | 9 | ? | 36 |",
      "a": "k = 18. Missing values: y(3)=6, x(y=9)=2, y(6)=3, x(y=36)=0.5.",
      "t": "Inverse proportion",
      "hint": "Since \\(y = k/x\\), find \\(k\\) using the first pair, then fill in the blanks.",
      "solution": "k = xy = 1*18 = 18. y = 18/x.",
      "solutionSteps": [
          {
              "explanation": "Since \\(y \\propto \\frac{1}{x}\\), write \\(y = \\frac{k}{x}\\) and find \\(k\\) using the pair \\((1, 18)\\).",
              "workingOut": "k = xy = 1 \\times 18 = 18"
          },
          {
              "explanation": "Find \\(y\\) when \\(x = 3\\).",
              "workingOut": "y = \\frac{18}{3} = 6"
          },
          {
              "explanation": "Find \\(x\\) when \\(y = 9\\).",
              "workingOut": "x = \\frac{18}{9} = 2"
          },
          {
              "explanation": "Find \\(y\\) when \\(x = 6\\).",
              "workingOut": "y = \\frac{18}{6} = 3"
          },
          {
              "explanation": "Find \\(x\\) when \\(y = 36\\).",
              "workingOut": "x = \\frac{18}{36} = 0.5"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q8",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "For the data below, we assume that \\(y \\propto \\frac{1}{x^2}\\). Find the constant of proportionality and complete the table.\n\n| \\(x\\) | 2 | ? | 4 | ? | 10 |\n|---|---|---|---|---|---|\n| \\(y\\) | 18 | 8 | ? | 2 | ? |",
      "a": "k = 72. Missing: x(y=8)=3, y(4)=4.5, x(y=2)=6, y(10)=0.72.",
      "t": "Inverse proportion",
      "hint": "Since \\(y = k/x^2\\), find \\(k\\) using the first pair, then fill in the blanks.",
      "solution": "k = x\u00b2y = 4*18 = 72. y = 72/x\u00b2.",
      "solutionSteps": [
          {
              "explanation": "Since \\(y \\propto \\frac{1}{x^2}\\), write \\(y = \\frac{k}{x^2}\\) and find \\(k\\) using the pair \\((2, 18)\\).",
              "workingOut": "k = x^2 y = 4 \\times 18 = 72"
          },
          {
              "explanation": "Find \\(x\\) when \\(y = 8\\).",
              "workingOut": "x^2 = \\frac{72}{8} = 9 \\implies x = 3"
          },
          {
              "explanation": "Find \\(y\\) when \\(x = 4\\).",
              "workingOut": "y = \\frac{72}{16} = 4.5"
          },
          {
              "explanation": "Find \\(x\\) when \\(y = 2\\).",
              "workingOut": "x^2 = \\frac{72}{2} = 36 \\implies x = 6"
          },
          {
              "explanation": "Find \\(y\\) when \\(x = 10\\).",
              "workingOut": "y = \\frac{72}{100} = 0.72"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q9",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "If a car travels at an average speed of \\(80\\) km/h, it takes \\(63\\) minutes to complete a certain trip. To complete the same trip in \\(72\\) minutes, what average speed is required?",
      "a": "70",
      "t": "Inverse proportion",
      "hint": "Speed is inversely proportional to time for the same distance.",
      "solution": "v*t = k. 80*63 = 5040. v = 5040/72 = 70 km/h.",
      "solutionSteps": [
          {
              "explanation": "Since distance is constant, speed is inversely proportional to time.",
              "workingOut": "v = \\frac{k}{t}"
          },
          {
              "explanation": "Find the constant using \\(v = 80\\) and \\(t = 63\\).",
              "workingOut": "k = vt = 80 \\times 63 = 5040"
          },
          {
              "explanation": "Substitute \\(t = 72\\) to find the required speed.",
              "workingOut": "v = \\frac{5040}{72} = 70"
          },
          {
              "explanation": "State the answer.",
              "workingOut": "\\therefore 70 \\;\\mathrm{km/h}"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q10",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Timber dowelling comes in fixed lengths. If \\(36\\) pieces, each \\(4.8\\) cm long, can be cut from a fixed length, how many pieces \\(3.6\\) cm long can be cut from the same fixed length?",
      "a": "48",
      "t": "Inverse proportion",
      "hint": "The number of pieces is inversely proportional to the length of each piece.",
      "solution": "n*l = L. 36*4.8 = 172.8. n = 172.8/3.6 = 48.",
      "solutionSteps": [
          {
              "explanation": "The total length \\(L\\) is constant. The number of pieces \\(n\\) is inversely proportional to the piece length \\(l\\).",
              "workingOut": "n = \\frac{L}{l}"
          },
          {
              "explanation": "Find the total length.",
              "workingOut": "L = 36 \\times 4.8 = 172.8 \\;\\mathrm{cm}"
          },
          {
              "explanation": "Find the number of pieces of length 3.6 cm.",
              "workingOut": "n = \\frac{172.8}{3.6} = 48"
          },
          {
              "explanation": "State the answer.",
              "workingOut": "\\therefore 48 \\;\\mathrm{pieces}"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q11",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "The illumination from a light is inversely proportional to the square of the distance from the light source. If the illumination is \\(5\\) units when seen from \\(3\\) metres away, find:",
      "a": "See sub-questions.",
      "t": "Inverse proportion",
      "hint": "Write \\(I = k/d^2\\) and find \\(k\\).",
      "solution": "I = k/d\u00b2, 5 = k/9, k = 45.",
      "subQuestions": [
          {
              "id": "y10-16b-q11a",
              "type": "short_answer",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "The illumination when seen from \\(5\\) metres.",
              "a": "1.8",
              "hint": "Substitute \\(d = 5\\) into \\(I = 45/d^2\\).",
              "solution": "I = 45/25 = 1.8.",
              "solutionSteps": [
                  {
                      "explanation": "Write the relationship and find \\(k\\).",
                      "workingOut": "I = \\frac{k}{d^2},\\quad 5 = \\frac{k}{9} \\implies k = 45"
                  },
                  {
                      "explanation": "Substitute \\(d = 5\\).",
                      "workingOut": "I = \\frac{45}{25} = 1.8"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-16b-q11b",
              "type": "short_answer",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "The distance from the light source when the illumination is \\(20\\) units.",
              "a": "1.5",
              "hint": "Substitute \\(I = 20\\) into \\(I = 45/d^2\\) and solve for \\(d\\).",
              "solution": "20 = 45/d\u00b2, d\u00b2 = 45/20 = 9/4, d = 3/2 = 1.5 m.",
              "solutionSteps": [
                  {
                      "explanation": "Substitute \\(I = 20\\) into the formula.",
                      "workingOut": "20 = \\frac{45}{d^2}"
                  },
                  {
                      "explanation": "Solve for \\(d^2\\).",
                      "workingOut": "d^2 = \\frac{45}{20} = \\frac{9}{4}"
                  },
                  {
                      "explanation": "Take the positive square root.",
                      "workingOut": "d = \\frac{3}{2} = 1.5 \\;\\mathrm{m}"
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null,
      "solutionSteps": [
          {
              "explanation": "Write the relationship.",
              "workingOut": "I = \\frac{k}{d^2}"
          },
          {
              "explanation": "Find \\(k\\) using \\(I = 5, d = 3\\).",
              "workingOut": "k = I \\times d^2 = 5 \\times 9 = 45"
          }
      ]
  },
  {
      "id": "y10-16b-q12a",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Given that \\(m \\propto \\frac{1}{n^2}\\), what is the effect on \\(m\\) when \\(n\\) is doubled?",
      "a": "m is divided by 4 (or multiplied by 1/4).",
      "t": "Inverse proportion",
      "hint": "Substitute \\(n' = 2n\\) into \\(m = k/n^2\\).",
      "solution": "m' = k/(2n)\u00b2 = k/(4n\u00b2) = m/4.",
      "solutionSteps": [
          {
              "explanation": "Write the relationship.",
              "workingOut": "m = \\frac{k}{n^2}"
          },
          {
              "explanation": "Replace \\(n\\) with \\(2n\\).",
              "workingOut": "m' = \\frac{k}{(2n)^2} = \\frac{k}{4n^2}"
          },
          {
              "explanation": "Compare with the original.",
              "workingOut": "m' = \\frac{1}{4} \\times \\frac{k}{n^2} = \\frac{m}{4}"
          },
          {
              "explanation": "\\(m\\) is divided by 4.",
              "workingOut": ""
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q12b",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Given that \\(m \\propto \\frac{1}{n^2}\\), what is the effect on \\(m\\) when \\(n\\) is halved?",
      "a": "m is multiplied by 4.",
      "t": "Inverse proportion",
      "hint": "Substitute \\(n' = n/2\\).",
      "solution": "m' = k/(n/2)\u00b2 = 4k/n\u00b2 = 4m.",
      "solutionSteps": [
          {
              "explanation": "Write the relationship.",
              "workingOut": "m = \\frac{k}{n^2}"
          },
          {
              "explanation": "Replace \\(n\\) with \\(\\frac{n}{2}\\).",
              "workingOut": "m' = \\frac{k}{\\left(\\frac{n}{2}\\right)^2} = \\frac{k}{\\frac{n^2}{4}} = \\frac{4k}{n^2}"
          },
          {
              "explanation": "Compare with the original.",
              "workingOut": "m' = 4m"
          },
          {
              "explanation": "\\(m\\) is multiplied by 4.",
              "workingOut": ""
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q12c",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Given that \\(m \\propto \\frac{1}{n^2}\\), what is the effect on \\(n\\) when \\(m\\) is multiplied by \\(16\\)?",
      "a": "n is divided by 4.",
      "t": "Inverse proportion",
      "hint": "Set \\(m' = 16m\\) and solve for the new \\(n\\).",
      "solution": "16m = k/n'\u00b2. n'\u00b2 = k/(16m) = n\u00b2/16. n' = n/4.",
      "solutionSteps": [
          {
              "explanation": "From \\(m = k/n^2\\), if \\(m\\) is multiplied by 16:",
              "workingOut": "16m = \\frac{k}{(n')^2}"
          },
          {
              "explanation": "Since \\(m = k/n^2\\), substitute.",
              "workingOut": "\\frac{16k}{n^2} = \\frac{k}{(n')^2}"
          },
          {
              "explanation": "Solve for \\((n')^2\\).",
              "workingOut": "(n')^2 = \\frac{n^2}{16}"
          },
          {
              "explanation": "Take the positive square root.",
              "workingOut": "n' = \\frac{n}{4}"
          },
          {
              "explanation": "\\(n\\) is divided by 4.",
              "workingOut": ""
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q12d",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "Given that \\(m \\propto \\frac{1}{n^2}\\), what is the effect on \\(n\\) when \\(m\\) is divided by \\(9\\)?",
      "a": "n is multiplied by 3.",
      "t": "Inverse proportion",
      "hint": "Set \\(m' = m/9\\) and solve for the new \\(n\\).",
      "solution": "m/9 = k/n'\u00b2. n'\u00b2 = 9n\u00b2. n' = 3n.",
      "solutionSteps": [
          {
              "explanation": "If \\(m\\) is divided by 9:",
              "workingOut": "\\frac{m}{9} = \\frac{k}{(n')^2}"
          },
          {
              "explanation": "Substitute \\(m = k/n^2\\).",
              "workingOut": "\\frac{k}{9n^2} = \\frac{k}{(n')^2}"
          },
          {
              "explanation": "Solve for \\((n')^2\\).",
              "workingOut": "(n')^2 = 9n^2"
          },
          {
              "explanation": "Take the positive square root.",
              "workingOut": "n' = 3n"
          },
          {
              "explanation": "\\(n\\) is multiplied by 3.",
              "workingOut": ""
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q13a",
      "type": "short_answer",
      "difficulty": "hard",
      "timeLimit": 120,
      "question": "Given that \\(a \\propto \\frac{1}{b}\\), what is the effect, correct to the nearest \\(0.1\\%\\), on \\(a\\) when \\(b\\) is increased by \\(15\\%\\)?",
      "a": "decreased by 13.0%",
      "t": "Inverse proportion",
      "hint": "If \\(b\\) increases by 15%, the new \\(b\\) is \\(1.15b\\).",
      "solution": "a' = k/(1.15b) = a/1.15. Decrease of 13.0%.",
      "solutionSteps": [
          {
              "explanation": "Write the relationship.",
              "workingOut": "a = \\frac{k}{b}"
          },
          {
              "explanation": "Replace \\(b\\) with \\(1.15b\\) (increased by 15%).",
              "workingOut": "a' = \\frac{k}{1.15b} = \\frac{a}{1.15}"
          },
          {
              "explanation": "Calculate the multiplier.",
              "workingOut": "\\frac{1}{1.15} \\approx 0.8696"
          },
          {
              "explanation": "The percentage decrease is:",
              "workingOut": "(1 - 0.8696) \\times 100 \\approx 13.0\\%"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q13b",
      "type": "short_answer",
      "difficulty": "hard",
      "timeLimit": 120,
      "question": "Given that \\(a \\propto \\frac{1}{b}\\), what is the effect, correct to the nearest \\(0.1\\%\\), on \\(a\\) when \\(b\\) is decreased by \\(12\\%\\)?",
      "a": "increased by 13.6%",
      "t": "Inverse proportion",
      "hint": "If \\(b\\) decreases by 12%, the new \\(b\\) is \\(0.88b\\).",
      "solution": "a' = k/(0.88b) = a/0.88. Increase of 13.6%.",
      "solutionSteps": [
          {
              "explanation": "Write the relationship.",
              "workingOut": "a = \\frac{k}{b}"
          },
          {
              "explanation": "Replace \\(b\\) with \\(0.88b\\) (decreased by 12%).",
              "workingOut": "a' = \\frac{k}{0.88b} = \\frac{a}{0.88}"
          },
          {
              "explanation": "Calculate the multiplier.",
              "workingOut": "\\frac{1}{0.88} \\approx 1.1364"
          },
          {
              "explanation": "The percentage increase is:",
              "workingOut": "(1.1364 - 1) \\times 100 \\approx 13.6\\%"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q14a",
      "type": "short_answer",
      "difficulty": "hard",
      "timeLimit": 120,
      "question": "Given that \\(p \\propto \\frac{1}{q^3}\\), what is the effect, correct to two decimal places, on \\(p\\) when \\(q\\) is increased by \\(10\\%\\)?",
      "a": "decreased by 24.87%",
      "t": "Inverse proportion",
      "hint": "If \\(q\\) increases by 10%, the new \\(q\\) is \\(1.1q\\).",
      "solution": "p' = k/(1.1q)\u00b3 = p/1.331. Decrease of 24.87%.",
      "solutionSteps": [
          {
              "explanation": "Write the relationship.",
              "workingOut": "p = \\frac{k}{q^3}"
          },
          {
              "explanation": "Replace \\(q\\) with \\(1.1q\\).",
              "workingOut": "p' = \\frac{k}{(1.1q)^3} = \\frac{k}{1.331\\, q^3} = \\frac{p}{1.331}"
          },
          {
              "explanation": "Calculate.",
              "workingOut": "\\frac{1}{1.331} \\approx 0.7513"
          },
          {
              "explanation": "The percentage decrease is approximately \\(24.87\\%\\).",
              "workingOut": "\\therefore p \\;\\mathrm{decreases\\;by\\;} 24.87\\%"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q14b",
      "type": "short_answer",
      "difficulty": "hard",
      "timeLimit": 120,
      "question": "Given that \\(p \\propto \\frac{1}{q^3}\\), what is the effect, correct to two decimal places, on \\(p\\) when \\(q\\) is decreased by \\(10\\%\\)?",
      "a": "increased by 37.17%",
      "t": "Inverse proportion",
      "hint": "If \\(q\\) decreases by 10%, the new \\(q\\) is \\(0.9q\\).",
      "solution": "p' = k/(0.9q)\u00b3 = p/0.729. Increase of 37.17%.",
      "solutionSteps": [
          {
              "explanation": "Replace \\(q\\) with \\(0.9q\\).",
              "workingOut": "p' = \\frac{k}{(0.9q)^3} = \\frac{k}{0.729\\, q^3} = \\frac{p}{0.729}"
          },
          {
              "explanation": "Calculate.",
              "workingOut": "\\frac{1}{0.729} \\approx 1.3717"
          },
          {
              "explanation": "The percentage increase is approximately \\(37.17\\%\\).",
              "workingOut": "\\therefore p \\;\\mathrm{increases\\;by\\;} 37.17\\%"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q14c",
      "type": "short_answer",
      "difficulty": "hard",
      "timeLimit": 120,
      "question": "Given that \\(p \\propto \\frac{1}{q^3}\\), what is the effect, correct to two decimal places, on \\(q\\) when \\(p\\) is increased by \\(20\\%\\)?",
      "a": "decreased by 5.90%",
      "t": "Inverse proportion",
      "hint": "If \\(p\\) increases by 20%, express the new \\(q\\) in terms of the old \\(q\\).",
      "solution": "q' = q / 1.2^(1/3). Decrease of 5.90%.",
      "solutionSteps": [
          {
              "explanation": "Since \\(p = k/q^3\\), we can write \\(q^3 = k/p\\), so \\(q = (k/p)^{1/3}\\).",
              "workingOut": ""
          },
          {
              "explanation": "Replace \\(p\\) with \\(1.2p\\).",
              "workingOut": "q' = \\left(\\frac{k}{1.2p}\\right)^{1/3} = \\frac{q}{1.2^{1/3}}"
          },
          {
              "explanation": "Calculate \\(1.2^{1/3}\\).",
              "workingOut": "1.2^{1/3} \\approx 1.0627"
          },
          {
              "explanation": "So \\(q' \\approx 0.9410 \\times q\\). The percentage decrease is \\(5.90\\%\\).",
              "workingOut": "\\therefore q \\;\\mathrm{decreases\\;by\\;} 5.90\\%"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q14d",
      "type": "short_answer",
      "difficulty": "hard",
      "timeLimit": 120,
      "question": "Given that \\(p \\propto \\frac{1}{q^3}\\), what is the effect, correct to two decimal places, on \\(q\\) when \\(p\\) is decreased by \\(20\\%\\)?",
      "a": "increased by 7.72%",
      "t": "Inverse proportion",
      "hint": "If \\(p\\) decreases by 20%, the new \\(p\\) is \\(0.8p\\).",
      "solution": "q' = q * (1/0.8)^(1/3). Increase of 7.72%.",
      "solutionSteps": [
          {
              "explanation": "Replace \\(p\\) with \\(0.8p\\).",
              "workingOut": "q' = \\left(\\frac{k}{0.8p}\\right)^{1/3} = q \\times \\left(\\frac{1}{0.8}\\right)^{1/3}"
          },
          {
              "explanation": "Calculate \\((1/0.8)^{1/3} = 1.25^{1/3}\\).",
              "workingOut": "1.25^{1/3} \\approx 1.0772"
          },
          {
              "explanation": "The percentage increase is \\(7.72\\%\\).",
              "workingOut": "\\therefore q \\;\\mathrm{increases\\;by\\;} 7.72\\%"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-16b-q15",
      "type": "teacher_review",
      "difficulty": "hard",
      "timeLimit": 120,
      "question": "We know that a cone of height \\(h\\) and radius \\(r\\) has volume \\(V = \\frac{1}{3}\\pi r^2 h\\).\nFor cones of the same volume, height is inversely proportional to the radius squared.",
      "a": "See sub-questions.",
      "t": "Inverse proportion",
      "hint": "For a fixed volume, \\(h \\propto \\frac{1}{r^2}\\).",
      "solution": "See sub-questions.",
      "subQuestions": [
          {
              "id": "y10-16b-q15a-i",
              "type": "teacher_review",
              "difficulty": "hard",
              "timeLimit": 120,
              "question": "What is the effect on the height when the radius is doubled?",
              "a": "The height is divided by 4.",
              "hint": "Substitute \\(r' = 2r\\) into \\(h = k/r^2\\).",
              "solution": "h' = k/(2r)\u00b2 = k/(4r\u00b2) = h/4.",
              "solutionSteps": [
                  {
                      "explanation": "Since \\(h \\propto \\frac{1}{r^2}\\), write \\(h = \\frac{k}{r^2}\\).",
                      "workingOut": ""
                  },
                  {
                      "explanation": "Replace \\(r\\) with \\(2r\\).",
                      "workingOut": "h' = \\frac{k}{(2r)^2} = \\frac{k}{4r^2} = \\frac{h}{4}"
                  },
                  {
                      "explanation": "The height is divided by 4 (i.e. reduced to a quarter).",
                      "workingOut": ""
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-16b-q15a-ii",
              "type": "teacher_review",
              "difficulty": "hard",
              "timeLimit": 120,
              "question": "What is the effect on the radius when the height is multiplied by \\(9\\)?",
              "a": "The radius is divided by 3.",
              "hint": "Set \\(h' = 9h\\) and solve for the new \\(r\\).",
              "solution": "9h = k/r'\u00b2. r'\u00b2 = k/(9h) = r\u00b2/9. r' = r/3.",
              "solutionSteps": [
                  {
                      "explanation": "Set \\(h' = 9h\\) and find the new \\(r'\\).",
                      "workingOut": "9h = \\frac{k}{(r')^2}"
                  },
                  {
                      "explanation": "Since \\(h = k/r^2\\), substitute.",
                      "workingOut": "\\frac{9k}{r^2} = \\frac{k}{(r')^2}"
                  },
                  {
                      "explanation": "Solve for \\((r')^2\\).",
                      "workingOut": "(r')^2 = \\frac{r^2}{9}"
                  },
                  {
                      "explanation": "Take the positive square root.",
                      "workingOut": "r' = \\frac{r}{3}"
                  },
                  {
                      "explanation": "The radius is divided by 3.",
                      "workingOut": ""
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-16b-q15b",
              "type": "short_answer",
              "difficulty": "hard",
              "timeLimit": 120,
              "question": "For cones of volume \\(18\\pi\\) cm\\(^3\\), state the constant of proportionality in the relationship \\(h \\propto \\frac{1}{r^2}\\).",
              "a": "54",
              "hint": "Use \\(V = \\frac{1}{3}\\pi r^2 h\\) and substitute \\(V = 18\\pi\\).",
              "solution": "(1/3)\u03c0r\u00b2h = 18\u03c0 \u2192 r\u00b2h = 54. h = 54/r\u00b2. k = 54.",
              "solutionSteps": [
                  {
                      "explanation": "Substitute \\(V = 18\\pi\\) into the volume formula.",
                      "workingOut": "\\frac{1}{3}\\pi r^2 h = 18\\pi"
                  },
                  {
                      "explanation": "Divide both sides by \\(\\pi\\).",
                      "workingOut": "\\frac{1}{3} r^2 h = 18"
                  },
                  {
                      "explanation": "Multiply both sides by 3.",
                      "workingOut": "r^2 h = 54"
                  },
                  {
                      "explanation": "Rearrange to express \\(h\\) in terms of \\(r\\).",
                      "workingOut": "h = \\frac{54}{r^2}"
                  },
                  {
                      "explanation": "The constant of proportionality is \\(k = 54\\).",
                      "workingOut": ""
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null
  },
];
