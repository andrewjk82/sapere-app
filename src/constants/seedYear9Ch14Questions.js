export const Y9_CH14_QUESTIONS = [
  {
    "id": "y9-14a-q1a",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Determine by substitution whether \\( (2, 3) \\) is a solution of the simultaneous equations \\( x + y = 5 \\) and \\( y = x + 1 \\). (Answer Yes or No)",
    "opts": [
      "\\(Yes\\)",
      "\\(No\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute x = 2 and y = 3 into both equations to see if they hold true.",
    "solution": "Substituting \\( x = 2 \\) and \\( y = 3 \\) into both equations: \n\\( 2 + 3 = 5 \\) (True)\n\\( 3 = 2 + 1 \\) (True).\nSince both are true, the point is a solution.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = 2 \\) and \\( y = 3 \\) into the first equation.",
        "workingOut": "\\( 2 + 3 = 5 \\) (True)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\( x = 2 \\) and \\( y = 3 \\) into the second equation.",
        "workingOut": "\\( 3 = 2 + 1 \\) (True)",
        "graphData": null
      },
      {
        "explanation": "Since both equations are satisfied, the point is a valid solution.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q1b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Determine by substitution whether \\( (-2, 5) \\) is a solution of the simultaneous equations \\( x + y = 4 \\) and \\( y = x + 7 \\). (Answer Yes or No)",
    "opts": [
      "\\(Yes\\)",
      "\\(No\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Substitute x = -2 and y = 5 into the equations and verify if they are true.",
    "solution": "Substituting \\( x = -2 \\) and \\( y = 5 \\) into the equations: \n\\( -2 + 5 = 3 \neq 4 \\) (False).\nSince the first equation is not satisfied, the point is not a solution.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = -2 \\) and \\( y = 5 \\) into the first equation.",
        "workingOut": "\\( -2 + 5 = 3 \\neq 4 \\) (False)",
        "graphData": null
      },
      {
        "explanation": "Since the first equation is not satisfied, there is no need to check the second. The point is not a solution.",
        "workingOut": "\\(No\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q2ai",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line: \\( y = x \\).",
    "answer": "Graph drawn correctly",
    "hint": "Plot the points (0, 0) and (1, 1), then draw a straight line through them.",
    "solution": "Graph drawn correctly",
    "solutionSteps": [
      {
        "explanation": "Determine the equations to solve.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('point', [0, 0], {name:'(0, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Set up the equations.",
        "workingOut": "State the rule",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('point', [0, 0], {name:'(0, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [2, 2], {name:'(2, 2)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Solve the equations simultaneously.",
        "workingOut": "Graph drawn correctly",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 0], {name:'(0, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [2, 2], {name:'(2, 2)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "State the final answer.",
        "workingOut": "Graph drawn correctly",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('line', [[0, 0], [2, 2]], {strokeColor:'#6366f1', strokeWidth:2.6, straightFirst:true, straightLast:true}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q2aii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line: \\( y = 3x - 4 \\).",
    "answer": "Graph drawn correctly",
    "hint": "Identify the y-intercept at (0, -4) and calculate a second point such as (2, 2) to plot.",
    "solution": "Graph drawn correctly",
    "solutionSteps": [
      {
        "explanation": "Determine the equations to solve.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('point', [0, -4], {name:'(0, -4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Set up the equations.",
        "workingOut": "State the rule",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('point', [0, -4], {name:'(0, -4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1.3333333333333333, 0], {name:'(4/3, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Solve the equations simultaneously.",
        "workingOut": "Graph drawn correctly",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (-4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, -4], {name:'(0, -4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1.3333333333333333, 0], {name:'(4/3, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "State the final answer.",
        "workingOut": "Graph drawn correctly",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('line', [[0, -4], [1.3333333333333333, 0]], {strokeColor:'#6366f1', strokeWidth:2.6, straightFirst:true, straightLast:true}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q2aiii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line: \\( x + y = 8 \\).",
    "answer": "Graph drawn correctly",
    "hint": "Find where the line crosses the x-axis (y = 0) and y-axis (x = 0), and connect them.",
    "solution": "Graph drawn correctly",
    "solutionSteps": [
      {
        "explanation": "Determine the equations to solve.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              10,
              10,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('point', [0, 8], {name:'(0, 8)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Set up the equations.",
        "workingOut": "State the rule",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              10,
              10,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('point', [0, 8], {name:'(0, 8)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [8, 0], {name:'(8, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Solve the equations simultaneously.",
        "workingOut": "Graph drawn correctly",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              10,
              10,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 8], {name:'(0, 8)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [8, 0], {name:'(8, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "State the final answer.",
        "workingOut": "Graph drawn correctly",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              10,
              10,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('line', [[0, 8], [8, 0]], {strokeColor:'#6366f1', strokeWidth:2.6, straightFirst:true, straightLast:true}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q2bi",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Use graphs to solve the pair of equations simultaneously for \\( x \\) and \\( y \\):\n\\( y = x \\)\n\\( y = 3x - 4 \\)",
    "opts": [
      "\\\\(x=0, y=-4\\\\)",
      "\\\\(x=-2, y=-2\\\\)",
      "\\\\(x=2, y=2\\\\)",
      "\\\\(x=1, y=1\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the x and y coordinates of the intersection point of the two lines.",
    "solution": "The intersection of the lines \\( y = x \\) and \\( y = 3x - 4 \\) is the point \\( (2, 2) \\).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = x \\\\)",
        "workingOut": "Substitute \\\\( x = 0 \\\\) to get \\\\( y = 0 \\\\). Substitute \\\\( x = 2 \\\\) to get \\\\( y = 2 \\\\). Plot \\\\( (0,0) \\\\) and \\\\( (2,2) \\\\) to draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = 3x - 4 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = -4 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 3x - 4 \\\\implies x = \\\\dfrac{4}{3} \\\\). Plot \\\\( (0,-4) \\\\) and \\\\( (\\\\dfrac{4}{3},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (-4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (2, 2) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (-4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 2], {name:'(2, 2)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = x \\\\): \\\\( 2 = 2 \\\\) (True).  For \\\\( y = 3x - 4 \\\\): \\\\( 2 = 3(2) - 4 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (-4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 2], {name:'(2, 2)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q2bii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Use graphs to solve the pair of equations simultaneously for \\( x \\) and \\( y \\):\n\\( y = x \\)\n\\( x + y = 8 \\)",
    "opts": [
      "\\\\(x=0, y=8\\\\)",
      "\\\\(x=-4, y=-4\\\\)",
      "\\\\(x=4, y=4\\\\)",
      "\\\\(x=8, y=0\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the intersection point of the two graphs on your sketch.",
    "solution": "The intersection of the lines \\( y = x \\) and \\( x + y = 8 \\) is the point \\( (4, 4) \\).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = x \\\\)",
        "workingOut": "Substitute \\\\( x = 0 \\\\) to get \\\\( y = 0 \\\\). Substitute \\\\( x = 2 \\\\) to get \\\\( y = 2 \\\\). Plot \\\\( (0,0) \\\\) and \\\\( (2,2) \\\\) to draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( x + y = 8 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 8 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( x = 8 \\\\). Plot \\\\( (0,8) \\\\) and \\\\( (8,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (4, 4) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [4, 4], {name:'(4, 4)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = x \\\\): \\\\( 4 = 4 \\\\) (True).  For \\\\( x + y = 8 \\\\): \\\\( 4 + 4 = 8 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [4, 4], {name:'(4, 4)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q2biii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Use graphs to solve the pair of equations simultaneously for \\( x \\) and \\( y \\):\n\\( y = 3x - 4 \\)\n\\( x + y = 8 \\)",
    "opts": [
      "\\\\(x=5, y=3\\\\)",
      "\\\\(x=-3, y=5\\\\)",
      "\\\\(x=3, y=5\\\\)",
      "\\\\(x=0, y=8\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Identify the intersection coordinates from your plotted lines.",
    "solution": "The intersection of the lines \\( y = 3x - 4 \\) and \\( x + y = 8 \\) is the point \\( (3, 5) \\).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = 3x - 4 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = -4 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 3x - 4 \\\\implies x = \\\\dfrac{4}{3} \\\\). Plot \\\\( (0,-4) \\\\) and \\\\( (\\\\dfrac{4}{3},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (-4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( x + y = 8 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 8 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( x = 8 \\\\). Plot \\\\( (0,8) \\\\) and \\\\( (8,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (-4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (3, 5) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (-4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [3, 5], {name:'(3, 5)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = 3x - 4 \\\\): \\\\( 5 = 3(3) - 4 \\\\) (True).  For \\\\( x + y = 8 \\\\): \\\\( 3 + 5 = 8 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (-4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [3, 5], {name:'(3, 5)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3a",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x + 3 \\)\n\\( y = 2x + 5 \\)",
    "opts": [
      "\\\\(x=2, y=1\\\\)",
      "\\\\(x=-2, y=-1\\\\)",
      "\\\\(x=-2, y=1\\\\)",
      "\\\\(x=0, y=3\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Plot both straight lines and find their point of intersection.",
    "solution": "The lines intersect at \\( (-2, 1) \\). Let's verify by substitution:\n\\( 1 = -2 + 3 \\) (True)\n\\( 1 = 2(-2) + 5 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = x + 3 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 3 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = x + 3 \\\\implies x = -3 \\\\). Plot \\\\( (0,3) \\\\) and \\\\( (-3,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = 2x + 5 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 5 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 2x + 5 \\\\implies x = -\\\\dfrac{5}{2} \\\\). Plot \\\\( (0,5) \\\\) and \\\\( (-\\\\dfrac{5}{2},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 2*x + (5); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (-2, 1) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 2*x + (5); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [-2, 1], {name:'(-2, 1)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = x + 3 \\\\): \\\\( 1 = -2 + 3 \\\\) (True).  For \\\\( y = 2x + 5 \\\\): \\\\( 1 = 2(-2) + 5 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 2*x + (5); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [-2, 1], {name:'(-2, 1)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 2x - 1 \\)\n\\( y = 3x - 3 \\)",
    "opts": [
      "\\\\(x=-2, y=3\\\\)",
      "\\\\(x=3, y=2\\\\)",
      "\\\\(x=2, y=3\\\\)",
      "\\\\(x=0, y=-1\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Graph the two lines using intercepts and find their intersection.",
    "solution": "The lines intersect at \\( (2, 3) \\). Let's verify by substitution:\n\\( 3 = 2(2) - 1 \\) (True)\n\\( 3 = 3(2) - 3 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = 2x - 1 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = -1 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 2x - 1 \\\\implies x = \\\\dfrac{1}{2} \\\\). Plot \\\\( (0,-1) \\\\) and \\\\( (\\\\dfrac{1}{2},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = 3x - 3 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = -3 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 3x - 3 \\\\implies x = 1 \\\\). Plot \\\\( (0,-3) \\\\) and \\\\( (1,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (-3); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (2, 3) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (-3); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 3], {name:'(2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = 2x - 1 \\\\): \\\\( 3 = 2(2) - 1 \\\\) (True).  For \\\\( y = 3x - 3 \\\\): \\\\( 3 = 3(2) - 3 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (-3); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 3], {name:'(2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3c",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x + 1 \\)\n\\( y = 7 - x \\)",
    "opts": [
      "\\\\(x=4, y=3\\\\)",
      "\\\\(x=-3, y=4\\\\)",
      "\\\\(x=3, y=4\\\\)",
      "\\\\(x=0, y=7\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Plot the line with positive slope and the line with negative slope, then identify the intersection.",
    "solution": "The lines intersect at \\( (3, 4) \\). Let's verify by substitution:\n\\( 4 = 3 + 1 \\) (True)\n\\( 4 = 7 - 3 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = x + 1 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 1 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = x + 1 \\\\implies x = -1 \\\\). Plot \\\\( (0,1) \\\\) and \\\\( (-1,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = 7 - x \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 7 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 7 - x \\\\implies x = 7 \\\\). Plot \\\\( (0,7) \\\\) and \\\\( (7,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (7); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (3, 4) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (7); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [3, 4], {name:'(3, 4)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = x + 1 \\\\): \\\\( 4 = 3 + 1 \\\\) (True).  For \\\\( y = 7 - x \\\\): \\\\( 4 = 7 - 3 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (7); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [3, 4], {name:'(3, 4)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3d",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 2x + 2 \\)\n\\( y = 8 - x \\)",
    "opts": [
      "\\\\(x=-2, y=6\\\\)",
      "\\\\(x=6, y=2\\\\)",
      "\\\\(x=2, y=6\\\\)",
      "\\\\(x=0, y=8\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Graph the two equations and find where they cross.",
    "solution": "The lines intersect at \\( (2, 6) \\). Let's verify by substitution:\n\\( 6 = 2(2) + 2 \\) (True)\n\\( 6 = 8 - 2 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = 2x + 2 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 2 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 2x + 2 \\\\implies x = -1 \\\\). Plot \\\\( (0,2) \\\\) and \\\\( (-1,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = 8 - x \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 8 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 8 - x \\\\implies x = 8 \\\\). Plot \\\\( (0,8) \\\\) and \\\\( (8,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (2, 6) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 6], {name:'(2, 6)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = 2x + 2 \\\\): \\\\( 6 = 2(2) + 2 \\\\) (True).  For \\\\( y = 8 - x \\\\): \\\\( 6 = 8 - 2 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 6], {name:'(2, 6)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3e",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x + y = 5 \\)\n\\( 2x + y = 7 \\)",
    "opts": [
      "\\\\(x=3, y=2\\\\)",
      "\\\\(x=-2, y=3\\\\)",
      "\\\\(x=2, y=3\\\\)",
      "\\\\(x=0, y=5\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use x-intercepts and y-intercepts to sketch both lines on the same axes.",
    "solution": "The lines intersect at \\( (2, 3) \\). Let's verify by substitution:\n\\( 2 + 3 = 5 \\) (True)\n\\( 2(2) + 3 = 7 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( x + y = 5 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 5 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( x = 5 \\\\). Plot \\\\( (0,5) \\\\) and \\\\( (5,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (5); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( 2x + y = 7 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 7 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 2x = 7 \\\\implies x = \\\\dfrac{7}{2} \\\\). Plot \\\\( (0,7) \\\\) and \\\\( (\\\\dfrac{7}{2},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (5); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -2*x + (7); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (2, 3) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (5); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -2*x + (7); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 3], {name:'(2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( x + y = 5 \\\\): \\\\( 2 + 3 = 5 \\\\) (True).  For \\\\( 2x + y = 7 \\\\): \\\\( 2(2) + 3 = 7 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (5); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -2*x + (7); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 3], {name:'(2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3f",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x - y = 2 \\)\n\\( 3x + y = 6 \\)",
    "opts": [
      "\\\\(x=0, y=2\\\\)",
      "\\\\(x=-2, y=0\\\\)",
      "\\\\(x=2, y=0\\\\)",
      "\\\\(x=0, y=-2\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Identify the coordinates where the lines cross.",
    "solution": "The lines intersect at \\( (2, 0) \\). Let's verify by substitution:\n\\( 2 - 0 = 2 \\) (True)\n\\( 3(2) + 0 = 6 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( x - y = 2 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( -y = 2 \\\\implies y = -2 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( x = 2 \\\\). Plot \\\\( (0,-2) \\\\) and \\\\( (2,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( 3x + y = 6 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 6 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 3x = 6 \\\\implies x = 2 \\\\). Plot \\\\( (0,6) \\\\) and \\\\( (2,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -3*x + (6); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (2, 0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -3*x + (6); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 0], {name:'(2, 0)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( x - y = 2 \\\\): \\\\( 2 - 0 = 2 \\\\) (True).  For \\\\( 3x + y = 6 \\\\): \\\\( 3(2) + 0 = 6 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -3*x + (6); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 0], {name:'(2, 0)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3g",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x - 2 \\)\n\\( y = 3x - 8 \\)",
    "opts": [
      "\\\\(x=1, y=3\\\\)",
      "\\\\(x=-3, y=1\\\\)",
      "\\\\(x=3, y=1\\\\)",
      "\\\\(x=0, y=-2\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Graph the two lines using slope-intercept form and find the intersection.",
    "solution": "The lines intersect at \\( (3, 1) \\). Let's verify by substitution:\n\\( 1 = 3 - 2 \\) (True)\n\\( 1 = 3(3) - 8 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = x - 2 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = -2 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = x - 2 \\\\implies x = 2 \\\\). Plot \\\\( (0,-2) \\\\) and \\\\( (2,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              8,
              -10
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = 3x - 8 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = -8 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 3x - 8 \\\\implies x = \\\\dfrac{8}{3} \\\\). Plot \\\\( (0,-8) \\\\) and \\\\( (\\\\dfrac{8}{3},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              8,
              -10
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (-8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (3, 1) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              8,
              -10
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (-8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [3, 1], {name:'(3, 1)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = x - 2 \\\\): \\\\( 1 = 3 - 2 \\\\) (True).  For \\\\( y = 3x - 8 \\\\): \\\\( 1 = 3(3) - 8 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              8,
              -10
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (-8); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [3, 1], {name:'(3, 1)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3h",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = -3x + 4 \\)\n\\( y = x \\)",
    "opts": [
      "\\\\(x=-1, y=1\\\\)",
      "\\\\(x=0, y=0\\\\)",
      "\\\\(x=1, y=1\\\\)",
      "\\\\(x=1, y=-1\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Graph the line y = x and the line with negative slope, then note the intersection point.",
    "solution": "The lines intersect at \\( (1, 1) \\). Let's verify by substitution:\n\\( 1 = -3(1) + 4 \\) (True)\n\\( 1 = 1 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = -3x + 4 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 4 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = -3x + 4 \\\\implies x = \\\\dfrac{4}{3} \\\\). Plot \\\\( (0,4) \\\\) and \\\\( (\\\\dfrac{4}{3},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -3*x + (4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = x \\\\)",
        "workingOut": "Substitute \\\\( x = 0 \\\\) to get \\\\( y = 0 \\\\). Substitute \\\\( x = 2 \\\\) to get \\\\( y = 2 \\\\). Plot \\\\( (0,0) \\\\) and \\\\( (2,2) \\\\) to draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -3*x + (4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (1, 1) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -3*x + (4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [1, 1], {name:'(1, 1)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = -3x + 4 \\\\): \\\\( 1 = -3(1) + 4 \\\\) (True).  For \\\\( y = x \\\\): \\\\( 1 = 1 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -3*x + (4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 1*x + (0); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [1, 1], {name:'(1, 1)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3i",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 2x - 1 \\)\n\\( y = 5 - x \\)",
    "opts": [
      "\\\\(x=3, y=2\\\\)",
      "\\\\(x=-2, y=3\\\\)",
      "\\\\(x=2, y=3\\\\)",
      "\\\\(x=0, y=5\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Draw both straight lines and locate where they cross.",
    "solution": "The lines intersect at \\( (2, 3) \\). Let's verify by substitution:\n\\( 3 = 2(2) - 1 \\) (True)\n\\( 3 = 5 - 2 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = 2x - 1 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = -1 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 2x - 1 \\\\implies x = \\\\dfrac{1}{2} \\\\). Plot \\\\( (0,-1) \\\\) and \\\\( (\\\\dfrac{1}{2},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = 5 - x \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 5 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 5 - x \\\\implies x = 5 \\\\). Plot \\\\( (0,5) \\\\) and \\\\( (5,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (5); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (2, 3) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (5); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 3], {name:'(2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = 2x - 1 \\\\): \\\\( 3 = 2(2) - 1 \\\\) (True).  For \\\\( y = 5 - x \\\\): \\\\( 3 = 5 - 2 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (5); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 3], {name:'(2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3j",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 3x - 2 \\)\n\\( y = 10 - x \\)",
    "opts": [
      "\\\\(x=7, y=3\\\\)",
      "\\\\(x=-3, y=7\\\\)",
      "\\\\(x=3, y=7\\\\)",
      "\\\\(x=0, y=10\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Identify where the line with gradient 3 meets the line with gradient -1.",
    "solution": "The lines intersect at \\( (3, 7) \\). Let's verify by substitution:\n\\( 7 = 3(3) - 2 \\) (True)\n\\( 7 = 10 - 3 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = 3x - 2 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = -2 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 3x - 2 \\\\implies x = \\\\dfrac{2}{3} \\\\). Plot \\\\( (0,-2) \\\\) and \\\\( (\\\\dfrac{2}{3},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              12,
              12,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = 10 - x \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 10 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 10 - x \\\\implies x = 10 \\\\). Plot \\\\( (0,10) \\\\) and \\\\( (10,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              12,
              12,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (10); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (3, 7) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              12,
              12,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (10); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [3, 7], {name:'(3, 7)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = 3x - 2 \\\\): \\\\( 7 = 3(3) - 2 \\\\) (True).  For \\\\( y = 10 - x \\\\): \\\\( 7 = 10 - 3 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              12,
              12,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return -1*x + (10); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [3, 7], {name:'(3, 7)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3k",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x - y = 3 \\)\n\\( x = 2y - 2 \\)",
    "opts": [
      "\\\\(x=5, y=8\\\\)",
      "\\\\(x=-8, y=5\\\\)",
      "\\\\(x=8, y=5\\\\)",
      "\\\\(x=0, y=-3\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Rearrange both equations to standard straight line format (e.g. y = mx + c) and plot.",
    "solution": "The lines intersect at \\( (8, 5) \\). Let's verify by substitution:\n\\( 8 - 5 = 3 \\) (True)\n\\( 8 = 2(5) - 2 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( x - y = 3 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( -y = 3 \\\\implies y = -3 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( x = 3 \\\\). Plot \\\\( (0,-3) \\\\) and \\\\( (3,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              12,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( x = 2y - 2 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( 0 = 2y - 2 \\\\implies y = 1 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( x = -2 \\\\). Plot \\\\( (0,1) \\\\) and \\\\( (-2,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              12,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 0.5*x + (1); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (8, 5) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              12,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 0.5*x + (1); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [8, 5], {name:'(8, 5)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( x - y = 3 \\\\): \\\\( 8 - 5 = 3 \\\\) (True).  For \\\\( x = 2y - 2 \\\\): \\\\( 8 = 2(5) - 2 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              10,
              12,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (-3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 0.5*x + (1); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [8, 5], {name:'(8, 5)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3l",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x + 3y = 7 \\)\n\\( 2x - y = -7 \\)",
    "opts": [
      "\\\\(x=2, y=3\\\\)",
      "\\\\(x=3, y=-2\\\\)",
      "\\\\(x=-2, y=3\\\\)",
      "\\\\(x=0, y=7\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Identify the coordinates where both lines cross.",
    "solution": "The lines intersect at \\( (-2, 3) \\). Let's verify by substitution:\n\\( -2 + 3(3) = 7 \\) (True)\n\\( 2(-2) - 3 = -7 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( x + 3y = 7 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( 3y = 7 \\\\implies y = \\\\dfrac{7}{3} \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( x = 7 \\\\). Plot \\\\( (0,\\\\dfrac{7}{3}) \\\\) and \\\\( (7,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -0.33333333333333337*x + (2.3333333333333335); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( 2x - y = -7 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( -y = -7 \\\\implies y = 7 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 2x = -7 \\\\implies x = -\\\\dfrac{7}{2} \\\\). Plot \\\\( (0,7) \\\\) and \\\\( (-\\\\dfrac{7}{2},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -0.33333333333333337*x + (2.3333333333333335); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 2*x + (7); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (-2, 3) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -0.33333333333333337*x + (2.3333333333333335); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 2*x + (7); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [-2, 3], {name:'(-2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( x + 3y = 7 \\\\): \\\\( -2 + 3(3) = 7 \\\\) (True).  For \\\\( 2x - y = -7 \\\\): \\\\( 2(-2) - 3 = -7 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -0.33333333333333337*x + (2.3333333333333335); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 2*x + (7); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [-2, 3], {name:'(-2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q4a",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Suppose you plot the lines \\( y = 3x + 1 \\) and \\( y = 3x + 4 \\) on the same set of axes. What do you notice about these two lines?",
    "opts": [
      "They are parallel lines",
      "They are perpendicular lines",
      "They are the exact same line",
      "They intersect at the origin"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Compare the gradients (slopes) of both linear equations.",
    "solution": "Both lines have the same gradient \\( m = 3 \\) but different y-intercepts (1 and 4). Thus, they are parallel.",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation \\(y = 3x + 1\\). Substitute \\(x=0\\) and \\(x=1\\) to find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = 3(0) + 1 = 1\\) \n Point 1: \\((0, 1)\\)\n\nLet \\(x = 1\\): \\(y = 3(1) + 1 = 4\\) \n Point 2: \\((1, 4)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 1], {name:'(0, 1)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1, 4], {name:'(1, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation \\(y = 3x + 4\\) on the same axes. Substitute \\(x=0\\) and \\(x=-1\\) to find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = 3(0) + 4 = 4\\) \n Point 1: \\((0, 4)\\)\n\nLet \\(x = -1\\): \\(y = 3(-1) + 4 = 1\\) \n Point 2: \\((-1, 1)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 1], {name:'(0, 1)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1, 4], {name:'(1, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return 3*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [-1, 1], {name:'(-1, 1)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Observe the two lines on the graph.",
        "workingOut": "The two lines have the same gradient (\\(m=3\\)) but different y-intercepts.\nThis means they are parallel lines.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 1], {name:'(0, 1)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1, 4], {name:'(1, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return 3*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [-1, 1], {name:'(-1, 1)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q4b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "How many solutions do the simultaneous equations \\( y = 3x + 1 \\) and \\( y = 3x + 4 \\) have?",
    "answer": "0",
    "hint": "Parallel lines do not intersect. How many common points do they share?",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation \\(y = 3x + 1\\). Substitute \\(x=0\\) and \\(x=1\\) to find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = 3(0) + 1 = 1\\) \n Point 1: \\((0, 1)\\)\n\nLet \\(x = 1\\): \\(y = 3(1) + 1 = 4\\) \n Point 2: \\((1, 4)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 1], {name:'(0, 1)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1, 4], {name:'(1, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation \\(y = 3x + 4\\) on the same axes. Substitute \\(x=0\\) and \\(x=-1\\) to find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = 3(0) + 4 = 4\\) \n Point 1: \\((0, 4)\\)\n\nLet \\(x = -1\\): \\(y = 3(-1) + 4 = 1\\) \n Point 2: \\((-1, 1)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 1], {name:'(0, 1)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1, 4], {name:'(1, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return 3*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [-1, 1], {name:'(-1, 1)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Determine the number of solutions based on intersection.",
        "workingOut": "Parallel lines never intersect. Since they share no common points, the simultaneous equations have exactly 0 solutions.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (1); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 1], {name:'(0, 1)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1, 4], {name:'(1, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return 3*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [-1, 1], {name:'(-1, 1)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q5a",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Suppose you plot the lines \\( x + y = 4 \\) and \\( 2x + 2y = 8 \\) on the same set of axes. What do you notice about these two lines?",
    "opts": [
      "They are the exact same line (coincident)",
      "They are parallel lines",
      "They are perpendicular lines",
      "They intersect at the coordinate (4, 4)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Try to simplify the second equation by dividing all terms by 2.",
    "solution": "Dividing both sides of the second equation \\( 2x + 2y = 8 \\) by 2 gives \\( x + y = 4 \\), which is identical to the first equation.",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation \\(x + y = 4\\). Rearrange to \\(y = -x + 4\\) and find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = -0 + 4 = 4\\) \n Point 1: \\((0, 4)\\)\n\nLet \\(x = 4\\): \\(y = -4 + 4 = 0\\) \n Point 2: \\((4, 0)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              6,
              6,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation \\(2x + 2y = 8\\) on the same axes. Rearrange to \\(y = -x + 4\\) and find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = -0 + 4 = 4\\) \n Point 1: \\((0, 4)\\)\n\nLet \\(x = 4\\): \\(y = -4 + 4 = 0\\) \n Point 2: \\((4, 0)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              6,
              6,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#6366f1', strokeWidth:3.6, dash:0}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2, dash:1}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Observe the two lines on the graph.",
        "workingOut": "The two sets of points are identical, meaning the lines lie exactly on top of each other. They are coincident lines.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              6,
              6,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#6366f1', strokeWidth:3.6, dash:0}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2, dash:1}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q5b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "How many solutions do the simultaneous equations \\( x + y = 4 \\) and \\( 2x + 2y = 8 \\) have?",
    "opts": [
      "Infinitely many solutions",
      "Zero solutions",
      "Exactly one solution",
      "Exactly two solutions"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Think about how many points two overlapping lines share.",
    "solution": "Since the two equations represent the exact same line, every point on the line is a solution. Thus, there are infinitely many solutions.",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation \\(x + y = 4\\). Rearrange to \\(y = -x + 4\\) and find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = -0 + 4 = 4\\) \n Point 1: \\((0, 4)\\)\n\nLet \\(x = 4\\): \\(y = -4 + 4 = 0\\) \n Point 2: \\((4, 0)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              6,
              6,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation \\(2x + 2y = 8\\) on the same axes. Rearrange to \\(y = -x + 4\\) and find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = -0 + 4 = 4\\) \n Point 1: \\((0, 4)\\)\n\nLet \\(x = 4\\): \\(y = -4 + 4 = 0\\) \n Point 2: \\((4, 0)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              6,
              6,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#6366f1', strokeWidth:3.6, dash:0}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2, dash:1}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Determine the number of solutions based on intersection.",
        "workingOut": "Since the lines are perfectly coincident, they intersect at every single point along the line. Therefore, there are infinitely many solutions.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -2,
              6,
              6,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#6366f1', strokeWidth:3.6, dash:0}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return -1*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2, dash:1}); board.create('point', [0, 4], {name:'(0, 4)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [4, 0], {name:'(4, 0)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q6",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "How many solutions do the simultaneous equations \\( y = 3x + 2 \\) and \\( 3x - y = 5 \\) have?",
    "answer": "0",
    "hint": "Rearrange the second equation into y = mx + c form and compare the gradients.",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation \\(y = 3x + 2\\). Substitute \\(x=0\\) and \\(x=1\\) to find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = 3(0) + 2 = 2\\) \n Point 1: \\((0, 2)\\)\n\nLet \\(x = 1\\): \\(y = 3(1) + 2 = 5\\) \n Point 2: \\((1, 5)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              6,
              -8
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 2], {name:'(0, 2)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1, 5], {name:'(1, 5)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation \\(3x - y = 5\\) on the same axes. Rearrange to \\(y = 3x - 5\\) and find two points.",
        "workingOut": "Let \\(x = 0\\): \\(y = 3(0) - 5 = -5\\) \n Point 1: \\((0, -5)\\)\n\nLet \\(x = 1\\): \\(y = 3(1) - 5 = -2\\) \n Point 2: \\((1, -2)\\)\n\nPlot the points and draw the line.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              6,
              -8
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 2], {name:'(0, 2)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1, 5], {name:'(1, 5)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return 3*x + (-5); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [0, -5], {name:'(0, -5)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [1, -2], {name:'(1, -2)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Determine the number of solutions based on intersection.",
        "workingOut": "The lines have the same gradient (\\(m=3\\)) but different y-intercepts. They are parallel lines. Parallel lines never intersect, so there are exactly 0 solutions.",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              6,
              -8
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 3*x + (2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('point', [0, 2], {name:'(0, 2)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('point', [1, 5], {name:'(1, 5)', fillColor:'#6366f1', strokeColor:'#6366f1', size:2, label:{offset:[10, 10], color:'#6366f1'}}); board.create('functiongraph', [function(x){ return 3*x + (-5); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [0, -5], {name:'(0, -5)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.create('point', [1, -2], {name:'(1, -2)', fillColor:'#ec4899', strokeColor:'#ec4899', size:2, label:{offset:[10, 10], color:'#ec4899'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q7ai",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x + 3 \\)\n\\( y = 3x + 1 \\)",
    "opts": [
      "\\\\(x=4, y=1\\\\)",
      "\\\\(x=-1, y=4\\\\)",
      "\\\\(x=1, y=4\\\\)",
      "\\\\(x=0, y=3\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Graph the two lines and find their point of intersection.",
    "solution": "The lines intersect at \\( (1, 4) \\). Verify by substitution:\n\\( 4 = 1 + 3 \\) (True)\n\\( 4 = 3(1) + 1 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = x + 3 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 3 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = x + 3 \\\\implies x = -3 \\\\). Plot \\\\( (0,3) \\\\) and \\\\( (-3,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = 3x + 1 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 1 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 3x + 1 \\\\implies x = -\\\\dfrac{1}{3} \\\\). Plot \\\\( (0,1) \\\\) and \\\\( (-\\\\dfrac{1}{3},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (1); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (1, 4) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (1); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [1, 4], {name:'(1, 4)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = x + 3 \\\\): \\\\( 4 = 1 + 3 \\\\) (True).  For \\\\( y = 3x + 1 \\\\): \\\\( 4 = 3(1) + 1 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              6,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 1*x + (3); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 3*x + (1); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [1, 4], {name:'(1, 4)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q7aii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 4x - 2 \\)\n\\( y = x + 4 \\)",
    "opts": [
      "\\\\(x=6, y=2\\\\)",
      "\\\\(x=-2, y=6\\\\)",
      "\\\\(x=2, y=6\\\\)",
      "\\\\(x=0, y=4\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Plot both lines and look for their intersection on the coordinate plane.",
    "solution": "The lines intersect at \\( (2, 6) \\). Verify by substitution:\n\\( 6 = 4(2) - 2 \\) (True)\n\\( 6 = 2 + 4 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( y = 4x - 2 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = -2 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = 4x - 2 \\\\implies x = \\\\dfrac{1}{2} \\\\). Plot \\\\( (0,-2) \\\\) and \\\\( (\\\\dfrac{1}{2},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              8,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 4*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( y = x + 4 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( y = 4 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 0 = x + 4 \\\\implies x = -4 \\\\). Plot \\\\( (0,4) \\\\) and \\\\( (-4,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              8,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 4*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 1*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (2, 6) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              8,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 4*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 1*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 6], {name:'(2, 6)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( y = 4x - 2 \\\\): \\\\( 6 = 4(2) - 2 \\\\) (True).  For \\\\( y = x + 4 \\\\): \\\\( 6 = 2 + 4 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              8,
              6,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return 4*x + (-2); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 1*x + (4); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 6], {name:'(2, 6)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q7aiii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( 3x + 2y = 12 \\)\n\\( 2x - y = 1 \\)",
    "opts": [
      "\\\\(x=3, y=2\\\\)",
      "\\\\(x=-2, y=3\\\\)",
      "\\\\(x=2, y=3\\\\)",
      "\\\\(x=0, y=-1\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Convert both linear equations into slope-intercept form and find their intersection.",
    "solution": "The lines intersect at \\( (2, 3) \\). Verify by substitution:\n\\( 3(2) + 2(3) = 12 \\) (True)\n\\( 2(2) - 3 = 1 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Draw the graph of the first equation: \\\\( 3x + 2y = 12 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( 2y = 12 \\\\implies y = 6 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 3x = 12 \\\\implies x = 4 \\\\). Plot \\\\( (0,6) \\\\) and \\\\( (4,0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1.5*x + (6); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Draw the graph of the second equation: \\\\( 2x - y = 1 \\\\)",
        "workingOut": "Find y-intercept (\\\\( x = 0 \\\\)): \\\\( -y = 1 \\\\implies y = -1 \\\\). Find x-intercept (\\\\( y = 0 \\\\)): \\\\( 2x = 1 \\\\implies x = \\\\dfrac{1}{2} \\\\). Plot \\\\( (0,-1) \\\\) and \\\\( (\\\\dfrac{1}{2},0) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1.5*x + (6); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Identify the point of intersection from the graph.",
        "workingOut": "The two lines intersect at \\\\( (2, 3) \\\\).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1.5*x + (6); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 3], {name:'(2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Check the solution by substituting into both equations.",
        "workingOut": "For \\\\( 3x + 2y = 12 \\\\): \\\\( 3(2) + 2(3) = 12 \\\\) (True).  For \\\\( 2x - y = 1 \\\\): \\\\( 2(2) - 3 = 1 \\\\) (True).",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -4,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('axis', [[0,0], [1,0]], {ticks: {drawLabels: true, label: {offset: [-5, -15]}}}); board.create('axis', [[0,0], [0,1]], {ticks: {drawLabels: true, label: {offset: [15, 0]}}}); board.create('functiongraph', [function(x){ return -1.5*x + (6); }], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('functiongraph', [function(x){ return 2*x + (-1); }], {strokeColor:'#ec4899', strokeWidth:2.6}); board.create('point', [2, 3], {name:'(2, 3)', fillColor:'#ef4444', strokeColor:'#ef4444', size:3, label:{offset:[10, -15], color:'#ef4444'}}); board.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q7b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "What is a main limitation of using graphs to solve a pair of simultaneous equations?",
    "opts": [
      "It can be difficult to read non-integer (fractional or decimal) coordinates accurately",
      "Graphs can only show parallel lines",
      "Linear equations cannot be represented on a Cartesian plane",
      "It is only valid for positive numbers"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Consider what happens when the intersection point is a decimal value like (1.43, 2.19).",
    "solution": "If the intersection point involves fractional values (e.g., x = 1.34, y = 2.57), it is nearly impossible to read this exactly from a hand-drawn graph.",
    "solutionSteps": [
      {
        "explanation": "Solving simultaneous equations graphically relies on finding the exact point of intersection visually.",
        "workingOut": "If the intersection point involves non-integer values (e.g., fractional or decimal coordinates like \\(x = 1.34, y = 2.57\\)), it is extremely difficult to read the exact values from a hand-drawn grid. Algebraic methods are required for exact precision in such cases.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
