export const Y9_CH14_QUESTIONS = [
  {
    "id": "y9-14a-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Determine by substitution whether \\( (2, 3) \\) is a solution of the simultaneous equations \\( x + y = 5 \\) and \\( y = x + 1 \\). (Answer Yes or No)",
    "a": "Yes",
    "solution": "Substituting \\( x = 2 \\) and \\( y = 3 \\) into both equations: \n\\( 2 + 3 = 5 \\) (True)\n\\( 3 = 2 + 1 \\) (True).\nSince both are true, the point is a solution.",
    "solutionSteps": [
      {
        "explanation": "Substitute into the first equation: \\( x + y = 5 \\)",
        "workingOut": "2 + 3 = 5 \\quad \\text{(True)}"
      },
      {
        "explanation": "Substitute into the second equation: \\( y = x + 1 \\)",
        "workingOut": "3 = 2 + 1 \\quad \\text{(True)}"
      },
      {
        "explanation": "Since the coordinates satisfy both equations, it is a solution.",
        "workingOut": "\\text{Yes}"
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Substitute x = 2 and y = 3 into both equations to see if they hold true.",
    "graphData": null
  },
  {
    "id": "y9-14a-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Determine by substitution whether \\( (-2, 5) \\) is a solution of the simultaneous equations \\( x + y = 4 \\) and \\( y = x + 7 \\). (Answer Yes or No)",
    "a": "No",
    "solution": "Substituting \\( x = -2 \\) and \\( y = 5 \\) into the equations: \n\\( -2 + 5 = 3 \\neq 4 \\) (False).\nSince the first equation is not satisfied, the point is not a solution.",
    "solutionSteps": [
      {
        "explanation": "Substitute into the first equation: \\( x + y = 4 \\)",
        "workingOut": "-2 + 5 = 3 \\neq 4 \\quad \\text{(False)}"
      },
      {
        "explanation": "Since the first equation is not satisfied, it is not a solution.",
        "workingOut": "\\text{No}"
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Substitute x = -2 and y = 5 into the equations and verify if they are true.",
    "graphData": null
  },
  {
    "id": "y9-14a-q2ai",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line: \\( y = x \\).",
    "a": "Graph drawn correctly",
    "solution": "The line passes through the origin \\( (0, 0) \\) and has a gradient of 1.",
    "solutionSteps": [
      {
        "explanation": "Identify two points on the line, such as (0, 0) and (2, 2). Draw a straight line through them.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -5,
              5,
              5,
              -5
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,0],[1,1]],{strokeColor:'#2563eb',strokeWidth:2.5,straightFirst:true,straightLast:true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Plot the points (0, 0) and (1, 1), then draw a straight line through them.",
    "graphData": null
  },
  {
    "id": "y9-14a-q2aii",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line: \\( y = 3x - 4 \\).",
    "a": "Graph drawn correctly",
    "solution": "The line has a y-intercept of -4 and an x-intercept of \\( \\frac{4}{3} \\). Another point on the line is \\( (2, 2) \\).",
    "solutionSteps": [
      {
        "explanation": "Find two points on the line, e.g. y-intercept \\( (0, -4) \\) and \\( (2, 2) \\). Draw a straight line through them.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -3,
              7,
              7,
              -6
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,-4],[2,2]],{strokeColor:'#10b981',strokeWidth:2.5,straightFirst:true,straightLast:true});\nboard.create('point',[0,-4],{name:'(0, -4)',size:3,color:'#10b981',fixed:true, label: {offset: [0, 10]}});\nboard.create('point',[2,2],{name:'(2, 2)',size:3,color:'#10b981',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Identify the y-intercept at (0, -4) and calculate a second point such as (2, 2) to plot.",
    "graphData": null
  },
  {
    "id": "y9-14a-q2aiii",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line: \\( x + y = 8 \\).",
    "a": "Graph drawn correctly",
    "solution": "The line has an x-intercept of 8 and a y-intercept of 8.",
    "solutionSteps": [
      {
        "explanation": "Find the intercepts: \\( (8, 0) \\) and \\( (0, 8) \\). Draw a straight line connecting them.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              10,
              10,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[8,0],[0,8]],{strokeColor:'#f59e0b',strokeWidth:2.5,straightFirst:true,straightLast:true});\nboard.create('point',[8,0],{name:'(8, 0)',size:3,color:'#f59e0b',fixed:true, label: {offset: [0, 10]}});\nboard.create('point',[0,8],{name:'(0, 8)',size:3,color:'#f59e0b',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Find where the line crosses the x-axis (y = 0) and y-axis (x = 0), and connect them.",
    "graphData": null
  },
  {
    "id": "y9-14a-q2bi",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Use graphs to solve the pair of equations simultaneously for \\( x \\) and \\( y \\):\n\\( y = x \\)\n\\( y = 3x - 4 \\)\nFormat: x=_, y=_",
    "a": "x=2, y=2",
    "solution": "The intersection of the lines \\( y = x \\) and \\( y = 3x - 4 \\) is the point \\( (2, 2) \\).",
    "solutionSteps": [
      {
        "explanation": "Find the point where both lines intersect.",
        "workingOut": "x = 3x - 4 \\implies 2x = 4 \\implies x = 2"
      },
      {
        "explanation": "Substitute back to find y.",
        "workingOut": "y = 2"
      },
      {
        "explanation": "The solution is the intersection coordinate.",
        "workingOut": "x=2, y=2",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -3,
              7,
              7,
              -5
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,0],[1,1]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,-4],[2,2]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[2,2],{name:'Intersection (2, 2)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Find the x and y coordinates of the intersection point of the two lines.",
    "graphData": null
  },
  {
    "id": "y9-14a-q2bii",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Use graphs to solve the pair of equations simultaneously for \\( x \\) and \\( y \\):\n\\( y = x \\)\n\\( x + y = 8 \\)\nFormat: x=_, y=_",
    "a": "x=4, y=4",
    "solution": "The intersection of the lines \\( y = x \\) and \\( x + y = 8 \\) is the point \\( (4, 4) \\).",
    "solutionSteps": [
      {
        "explanation": "Find the point where both lines intersect.",
        "workingOut": "x + x = 8 \\implies 2x = 8 \\implies x = 4"
      },
      {
        "explanation": "Substitute back to find y.",
        "workingOut": "y = 4"
      },
      {
        "explanation": "The solution is the intersection coordinate.",
        "workingOut": "x=4, y=4",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              10,
              10,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,0],[1,1]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[8,0],[0,8]],{strokeColor:'#f59e0b',strokeWidth:2});\nboard.create('point',[4,4],{name:'Intersection (4, 4)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Find the intersection point of the two graphs on your sketch.",
    "graphData": null
  },
  {
    "id": "y9-14a-q2biii",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Use graphs to solve the pair of equations simultaneously for \\( x \\) and \\( y \\):\n\\( y = 3x - 4 \\)\n\\( x + y = 8 \\)\nFormat: x=_, y=_",
    "a": "x=3, y=5",
    "solution": "The intersection of the lines \\( y = 3x - 4 \\) and \\( x + y = 8 \\) is the point \\( (3, 5) \\).",
    "solutionSteps": [
      {
        "explanation": "Find the point where both lines intersect.",
        "workingOut": "x + (3x - 4) = 8 \\implies 4x - 4 = 8 \\implies 4x = 12 \\implies x = 3"
      },
      {
        "explanation": "Substitute back to find y.",
        "workingOut": "y = 3(3) - 4 = 5"
      },
      {
        "explanation": "The solution is the intersection coordinate.",
        "workingOut": "x=3, y=5",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              10,
              10,
              -5
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,-4],[2,2]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('line',[[8,0],[0,8]],{strokeColor:'#f59e0b',strokeWidth:2});\nboard.create('point',[3,5],{name:'Intersection (3, 5)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Identify the intersection coordinates from your plotted lines.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x + 3 \\)\n\\( y = 2x + 5 \\)\nFormat: x=_, y=_",
    "a": "x=-2, y=1",
    "solution": "The lines intersect at \\( (-2, 1) \\). Let's verify by substitution:\n\\( 1 = -2 + 3 \\) (True)\n\\( 1 = 2(-2) + 5 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate the equations to find x.",
        "workingOut": "x + 3 = 2x + 5"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "x = -2"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = -2 + 3 = 1"
      },
      {
        "explanation": "The solution is \\( (-2, 1) \\).",
        "workingOut": "x=-2, y=1",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -6,
              8,
              4,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,3],[1,4]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,5],[1,7]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[-2,1],{name:'(-2, 1)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Plot both straight lines and find their point of intersection.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 2x - 1 \\)\n\\( y = 3x - 3 \\)\nFormat: x=_, y=_",
    "a": "x=2, y=3",
    "solution": "The lines intersect at \\( (2, 3) \\). Let's verify by substitution:\n\\( 3 = 2(2) - 1 \\) (True)\n\\( 3 = 3(2) - 3 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate the equations to find x.",
        "workingOut": "2x - 1 = 3x - 3"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "x = 2"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 2(2) - 1 = 3"
      },
      {
        "explanation": "The solution is \\( (2, 3) \\).",
        "workingOut": "x=2, y=3",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              7,
              6,
              -3
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,-1],[1,1]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,-3],[1,0]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[2,3],{name:'(2, 3)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Graph the two lines using intercepts and find their intersection.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x + 1 \\)\n\\( y = 7 - x \\)\nFormat: x=_, y=_",
    "a": "x=3, y=4",
    "solution": "The lines intersect at \\( (3, 4) \\). Let's verify by substitution:\n\\( 4 = 3 + 1 \\) (True)\n\\( 4 = 7 - 3 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate the equations to find x.",
        "workingOut": "x + 1 = 7 - x"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "2x = 6 \\implies x = 3"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 3 + 1 = 4"
      },
      {
        "explanation": "The solution is \\( (3, 4) \\).",
        "workingOut": "x=3, y=4",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              10,
              10,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,1],[1,2]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,7],[7,0]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[3,4],{name:'(3, 4)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Plot the line with positive slope and the line with negative slope, then identify the intersection.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 2x + 2 \\)\n\\( y = 8 - x \\)\nFormat: x=_, y=_",
    "a": "x=2, y=6",
    "solution": "The lines intersect at \\( (2, 6) \\). Let's verify by substitution:\n\\( 6 = 2(2) + 2 \\) (True)\n\\( 6 = 8 - 2 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate the equations to find x.",
        "workingOut": "2x + 2 = 8 - x"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "3x = 6 \\implies x = 2"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 8 - 2 = 6"
      },
      {
        "explanation": "The solution is \\( (2, 6) \\).",
        "workingOut": "x=2, y=6",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              10,
              10,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,2],[1,4]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,8],[8,0]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[2,6],{name:'(2, 6)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Graph the two equations and find where they cross.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x + y = 5 \\)\n\\( 2x + y = 7 \\)\nFormat: x=_, y=_",
    "a": "x=2, y=3",
    "solution": "The lines intersect at \\( (2, 3) \\). Let's verify by substitution:\n\\( 2 + 3 = 5 \\) (True)\n\\( 2(2) + 3 = 7 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Rearrange both equations to make y the subject.",
        "workingOut": "y = 5 - x \\quad \\text{and} \\quad y = 7 - 2x"
      },
      {
        "explanation": "Equate the equations to find x.",
        "workingOut": "5 - x = 7 - 2x \\implies x = 2"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 5 - 2 = 3"
      },
      {
        "explanation": "The solution is \\( (2, 3) \\).",
        "workingOut": "x=2, y=3",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              9,
              9,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[5,0],[0,5]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[3.5,0],[0,7]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[2,3],{name:'(2, 3)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Use x-intercepts and y-intercepts to sketch both lines on the same axes.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x - y = 2 \\)\n\\( 3x + y = 6 \\)\nFormat: x=_, y=_",
    "a": "x=2, y=0",
    "solution": "The lines intersect at \\( (2, 0) \\). Let's verify by substitution:\n\\( 2 - 0 = 2 \\) (True)\n\\( 3(2) + 0 = 6 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Rearrange equations.",
        "workingOut": "y = x - 2 \\quad \\text{and} \\quad y = 6 - 3x"
      },
      {
        "explanation": "Equate to solve for x.",
        "workingOut": "x - 2 = 6 - 3x \\implies 4x = 8 \\implies x = 2"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 2 - 2 = 0"
      },
      {
        "explanation": "The solution is \\( (2, 0) \\).",
        "workingOut": "x=2, y=0",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              8,
              8,
              -4
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[2,0],[0,-2]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[2,0],[0,6]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[2,0],{name:'(2, 0)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Identify the coordinates where the lines cross.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3g",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x - 2 \\)\n\\( y = 3x - 8 \\)\nFormat: x=_, y=_",
    "a": "x=3, y=1",
    "solution": "The lines intersect at \\( (3, 1) \\). Let's verify by substitution:\n\\( 1 = 3 - 2 \\) (True)\n\\( 1 = 3(3) - 8 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate the equations to find x.",
        "workingOut": "x - 2 = 3x - 8"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "2x = 6 \\implies x = 3"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 3 - 2 = 1"
      },
      {
        "explanation": "The solution is \\( (3, 1) \\).",
        "workingOut": "x=3, y=1",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              6,
              8,
              -9
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[2,0],[0,-2]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,-8],[2.67,0]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[3,1],{name:'(3, 1)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Graph the two lines using slope-intercept form and find the intersection.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3h",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = -3x + 4 \\)\n\\( y = x \\)\nFormat: x=_, y=_",
    "a": "x=1, y=1",
    "solution": "The lines intersect at \\( (1, 1) \\). Let's verify by substitution:\n\\( 1 = -3(1) + 4 \\) (True)\n\\( 1 = 1 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate the equations to find x.",
        "workingOut": "-3x + 4 = x"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "4x = 4 \\implies x = 1"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 1"
      },
      {
        "explanation": "The solution is \\( (1, 1) \\).",
        "workingOut": "x=1, y=1",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -3,
              6,
              6,
              -3
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,4],[1,1]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,0],[1,1]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[1,1],{name:'(1, 1)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Graph the line y = x and the line with negative slope, then note the intersection point.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3i",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 2x - 1 \\)\n\\( y = 5 - x \\)\nFormat: x=_, y=_",
    "a": "x=2, y=3",
    "solution": "The lines intersect at \\( (2, 3) \\). Let's verify by substitution:\n\\( 3 = 2(2) - 1 \\) (True)\n\\( 3 = 5 - 2 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate the equations to find x.",
        "workingOut": "2x - 1 = 5 - x"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "3x = 6 \\implies x = 2"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 5 - 2 = 3"
      },
      {
        "explanation": "The solution is \\( (2, 3) \\).",
        "workingOut": "x=2, y=3",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              8,
              8,
              -3
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,-1],[1,1]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,5],[5,0]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[2,3],{name:'(2, 3)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Draw both straight lines and locate where they cross.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3j",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 3x - 2 \\)\n\\( y = 10 - x \\)\nFormat: x=_, y=_",
    "a": "x=3, y=7",
    "solution": "The lines intersect at \\( (3, 7) \\). Let's verify by substitution:\n\\( 7 = 3(3) - 2 \\) (True)\n\\( 7 = 10 - 3 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate the equations to find x.",
        "workingOut": "3x - 2 = 10 - x"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "4x = 12 \\implies x = 3"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 10 - 3 = 7"
      },
      {
        "explanation": "The solution is \\( (3, 7) \\).",
        "workingOut": "x=3, y=7",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              12,
              12,
              -4
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,-2],[1,1]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,10],[10,0]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[3,7],{name:'(3, 7)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Identify where the line with gradient 3 meets the line with gradient -1.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3k",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x - y = 3 \\)\n\\( x = 2y - 2 \\)\nFormat: x=_, y=_",
    "a": "x=8, y=5",
    "solution": "The lines intersect at \\( (8, 5) \\). Let's verify by substitution:\n\\( 8 - 5 = 3 \\) (True)\n\\( 8 = 2(5) - 2 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Substitute the second equation into the first equation.",
        "workingOut": "(2y - 2) - y = 3"
      },
      {
        "explanation": "Solve for y.",
        "workingOut": "y = 5"
      },
      {
        "explanation": "Substitute to find x.",
        "workingOut": "x = 2(5) - 2 = 8"
      },
      {
        "explanation": "The solution is \\( (8, 5) \\).",
        "workingOut": "x=8, y=5",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              12,
              12,
              -4
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[3,0],[0,-3]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[-2,0],[0,1]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[8,5],{name:'(8, 5)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Rearrange both equations to standard straight line format (e.g. y = mx + c) and plot.",
    "graphData": null
  },
  {
    "id": "y9-14a-q3l",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x + 3y = 7 \\)\n\\( 2x - y = -7 \\)\nFormat: x=_, y=_",
    "a": "x=-2, y=3",
    "solution": "The lines intersect at \\( (-2, 3) \\). Let's verify by substitution:\n\\( -2 + 3(3) = 7 \\) (True)\n\\( 2(-2) - 3 = -7 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Rearrange equations to make y the subject.",
        "workingOut": "y = -\\frac{1}{3}x + \\frac{7}{3} \\quad \\text{and} \\quad y = 2x + 7"
      },
      {
        "explanation": "Equate to solve for x.",
        "workingOut": "2x + 7 = -\\frac{1}{3}x + \\frac{7}{3}"
      },
      {
        "explanation": "Multiply by 3 and solve.",
        "workingOut": "6x + 21 = -x + 7 \\implies 7x = -14 \\implies x = -2"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 2(-2) + 7 = 3"
      },
      {
        "explanation": "The solution is \\( (-2, 3) \\).",
        "workingOut": "x=-2, y=3",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -6,
              9,
              4,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[7,0],[1,2]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,7],[-3.5,0]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[-2,3],{name:'(-2, 3)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Identify the coordinates where both lines cross.",
    "graphData": null
  },
  {
    "id": "y9-14a-q4a",
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
    "a": "They are parallel lines",
    "solution": "Both lines have the same gradient \\( m = 3 \\) but different y-intercepts (1 and 4). Thus, they are parallel.",
    "solutionSteps": [
      {
        "explanation": "Identify gradient of the first line \\( y = 3x + 1 \\)",
        "workingOut": "m = 3"
      },
      {
        "explanation": "Identify gradient of the second line \\( y = 3x + 4 \\)",
        "workingOut": "m = 3"
      },
      {
        "explanation": "Since the gradients are equal and y-intercepts are different, they are parallel.",
        "workingOut": "\\text{They are parallel}"
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Compare the gradients (slopes) of both linear equations.",
    "graphData": null
  },
  {
    "id": "y9-14a-q4b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "How many solutions do the simultaneous equations \\( y = 3x + 1 \\) and \\( y = 3x + 4 \\) have?",
    "a": "0",
    "solution": "Since the two lines are parallel, they never intersect. Therefore, there are no solutions (0 solutions).",
    "solutionSteps": [
      {
        "explanation": "Since the lines are parallel, they have no points of intersection.",
        "workingOut": "\\text{Number of solutions} = 0"
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Parallel lines do not intersect. How many common points do they share?",
    "graphData": null
  },
  {
    "id": "y9-14a-q5a",
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
    "a": "They are the exact same line (coincident)",
    "solution": "Dividing both sides of the second equation \\( 2x + 2y = 8 \\) by 2 gives \\( x + y = 4 \\), which is identical to the first equation.",
    "solutionSteps": [
      {
        "explanation": "Simplify the second equation \\( 2x + 2y = 8 \\) by dividing by 2.",
        "workingOut": "x + y = 4"
      },
      {
        "explanation": "Compare it with the first equation \\( x + y = 4 \\). They are identical.",
        "workingOut": "\\text{Same line}"
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Try to simplify the second equation by dividing all terms by 2.",
    "graphData": null
  },
  {
    "id": "y9-14a-q5b",
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
    "a": "Infinitely many solutions",
    "solution": "Since the two equations represent the exact same line, every point on the line is a solution. Thus, there are infinitely many solutions.",
    "solutionSteps": [
      {
        "explanation": "Coincident lines overlap at every point.",
        "workingOut": "\\text{Infinitely many solutions}"
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Think about how many points two overlapping lines share.",
    "graphData": null
  },
  {
    "id": "y9-14a-q6",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "How many solutions do the simultaneous equations \\( y = 3x + 2 \\) and \\( 3x - y = 5 \\) have?",
    "a": "0",
    "solution": "Rearranging the second equation \\( 3x - y = 5 \\) gives \\( y = 3x - 5 \\). Both equations have a gradient of 3, so they are parallel. Therefore, they have 0 solutions.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the second equation to slope-intercept form.",
        "workingOut": "y = 3x - 5"
      },
      {
        "explanation": "Compare gradients: both have gradient 3.",
        "workingOut": "m_1 = 3, \\; m_2 = 3"
      },
      {
        "explanation": "Since they are parallel and have different y-intercepts, they do not intersect.",
        "workingOut": "0"
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Rearrange the second equation into y = mx + c form and compare the gradients.",
    "graphData": null
  },
  {
    "id": "y9-14a-q7ai",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x + 3 \\)\n\\( y = 3x + 1 \\)\nFormat: x=_, y=_",
    "a": "x=1, y=4",
    "solution": "The lines intersect at \\( (1, 4) \\). Verify by substitution:\n\\( 4 = 1 + 3 \\) (True)\n\\( 4 = 3(1) + 1 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate equations.",
        "workingOut": "x + 3 = 3x + 1"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "2x = 2 \\implies x = 1"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 1 + 3 = 4"
      },
      {
        "explanation": "The solution is \\( (1, 4) \\).",
        "workingOut": "x=1, y=4",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              8,
              8,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,3],[1,4]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,1],[1,4]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[1,4],{name:'(1, 4)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Graph the two lines and find their point of intersection.",
    "graphData": null
  },
  {
    "id": "y9-14a-q7aii",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 4x - 2 \\)\n\\( y = x + 4 \\)\nFormat: x=_, y=_",
    "a": "x=2, y=6",
    "solution": "The lines intersect at \\( (2, 6) \\). Verify by substitution:\n\\( 6 = 4(2) - 2 \\) (True)\n\\( 6 = 2 + 4 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Equate equations.",
        "workingOut": "4x - 2 = x + 4"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "3x = 6 \\implies x = 2"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 2 + 4 = 6"
      },
      {
        "explanation": "The solution is \\( (2, 6) \\).",
        "workingOut": "x=2, y=6",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              10,
              10,
              -4
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[0,-2],[1,2]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,4],[1,5]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[2,6],{name:'(2, 6)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Plot both lines and look for their intersection on the coordinate plane.",
    "graphData": null
  },
  {
    "id": "y9-14a-q7aiii",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( 3x + 2y = 12 \\)\n\\( 2x - y = 1 \\)\nFormat: x=_, y=_",
    "a": "x=2, y=3",
    "solution": "The lines intersect at \\( (2, 3) \\). Verify by substitution:\n\\( 3(2) + 2(3) = 12 \\) (True)\n\\( 2(2) - 3 = 1 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Rearrange both equations to make y the subject.",
        "workingOut": "y = -\\frac{3}{2}x + 6 \\quad \\text{and} \\quad y = 2x - 1"
      },
      {
        "explanation": "Equate to solve for x.",
        "workingOut": "2x - 1 = -\\frac{3}{2}x + 6"
      },
      {
        "explanation": "Multiply by 2 and solve.",
        "workingOut": "4x - 2 = -3x + 12 \\implies 7x = 14 \\implies x = 2"
      },
      {
        "explanation": "Substitute to find y.",
        "workingOut": "y = 2(2) - 1 = 3"
      },
      {
        "explanation": "The solution is \\( (2, 3) \\).",
        "workingOut": "x=2, y=3",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              8,
              8,
              -3
            ],
            "script": "board.suspendUpdate();\nboard.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});\nboard.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});\nboard.create('line',[[4,0],[0,6]],{strokeColor:'#2563eb',strokeWidth:2});\nboard.create('line',[[0,-1],[1,1]],{strokeColor:'#10b981',strokeWidth:2});\nboard.create('point',[2,3],{name:'(2, 3)',size:4,color:'#dc2626',fixed:true, label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Convert both linear equations into slope-intercept form and find their intersection.",
    "graphData": null
  },
  {
    "id": "y9-14a-q7b",
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
    "a": "It can be difficult to read non-integer (fractional or decimal) coordinates accurately",
    "solution": "If the intersection point involves fractional values (e.g., x = 1.34, y = 2.57), it is nearly impossible to read this exactly from a hand-drawn graph.",
    "solutionSteps": [
      {
        "explanation": "Hand-drawn scales have precision limits.",
        "workingOut": "\\text{Accuracy is limited for fractional/decimal values.}"
      }
    ],
    "t": "Solving simultaneous equations by drawing graphs",
    "hint": "Consider what happens when the intersection point is a decimal value like (1.43, 2.19).",
    "graphData": null
  }
];
