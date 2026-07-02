export const Y10_CH16_QUESTIONS = [
  {
    "id": "y10-16a-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Given that \\(a \\propto b\\) and that \\(b = 4\\) when \\(a = 2\\), find the formula for \\(a\\) in terms of \\(b\\).",
    "a": "a = b/2",
    "t": "Direct proportion",
    "hint": "Since \\(a \\propto b\\), we can write \\(a = kb\\). Use the given values to find \\(k\\).",
    "solution": "a = kb, 2 = k(4), k = 1/2, so a = b/2.",
    "solutionSteps": [
      {
        "explanation": "Since \\(a\\) is directly proportional to \\(b\\), write the relationship as \\(a = kb\\) where \\(k\\) is the constant of proportionality.",
        "workingOut": "a = kb"
      },
      {
        "explanation": "Substitute the known values \\(a = 2\\) and \\(b = 4\\) to find \\(k\\).",
        "workingOut": "2 = k \\times 4"
      },
      {
        "explanation": "Divide both sides by 4 to solve for \\(k\\).",
        "workingOut": "k = \\frac{2}{4} = \\frac{1}{2}"
      },
      {
        "explanation": "Write the final formula.",
        "workingOut": "\\therefore a = \\frac{b}{2}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Given that \\(m \\propto n\\) and that \\(m = 20\\) when \\(n = 4\\), find the formula for \\(m\\) in terms of \\(n\\).",
    "a": "m = 5n",
    "t": "Direct proportion",
    "hint": "Write \\(m = kn\\) and substitute.",
    "solution": "m = kn, 20 = 4k, k = 5, so m = 5n.",
    "solutionSteps": [
      {
        "explanation": "Since \\(m \\propto n\\), write \\(m = kn\\).",
        "workingOut": "m = kn"
      },
      {
        "explanation": "Substitute \\(m = 20\\) and \\(n = 4\\).",
        "workingOut": "20 = k \\times 4"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = \\frac{20}{4} = 5"
      },
      {
        "explanation": "Write the final formula.",
        "workingOut": "\\therefore m = 5n"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q2a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the following table of values (all variables take only positive values).\n\n| \\(p\\) | 0 | 1 | 4 | 9 | 25 |\n|---|---|---|---|---|---|\n| \\(q\\) | 0 | 3 | 6 | 9 | 15 |\n\nPlot the graph of \\(q\\) against \\(p\\).",
    "a": "Curve passing through (0,0), (1,3), (4,6), (9,9), (25,15).",
    "t": "Direct proportion",
    "hint": "Plot each pair \\((p, q)\\) as a point on a Cartesian plane with \\(p\\) on the horizontal axis.",
    "solution": "The graph is a curve (not a straight line) that passes through the listed points. It is concave down, indicating a square root relationship.",
    "solutionSteps": [
      {
        "explanation": "Plot each pair \\((p, q)\\) from the table as a point on a graph.",
        "workingOut": "(0, 0),\\; (1, 3),\\; (4, 6),\\; (9, 9),\\; (25, 15)"
      },
      {
        "explanation": "Connect the points with a smooth curve. Notice that the graph is not a straight line through the origin, so \\(q\\) is not directly proportional to \\(p\\).",
        "workingOut": ""
      },
      {
        "explanation": "The shape of the curve suggests a square root relationship between \\(q\\) and \\(p\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 300,
            "boundingbox": [
              -2,
              18,
              28,
              -2
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]]);\nboard.create('axis', [[0,0],[0,1]]);\nboard.create('functiongraph', [function(x){ return 3*Math.sqrt(x); }, 0, 27], {strokeColor:'blue', strokeWidth:2});\nboard.create('point', [0,0], {name:'(0,0)', fixed:true, size:3});\nboard.create('point', [1,3], {name:'(1,3)', fixed:true, size:3});\nboard.create('point', [4,6], {name:'(4,6)', fixed:true, size:3});\nboard.create('point', [9,9], {name:'(9,9)', fixed:true, size:3});\nboard.create('point', [25,15], {name:'(25,15)', fixed:true, size:3});\nboard.create('text', [20, -1, 'p'], {fontSize:14});\nboard.create('text', [-1.5, 16, 'q'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q2b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using the table from Q2:\n\n| \\(p\\) | 0 | 1 | 4 | 9 | 25 |\n|---|---|---|---|---|---|\n| \\(q\\) | 0 | 3 | 6 | 9 | 15 |\n| \\(\\sqrt{p}\\) | | | | | |\n\nComplete the \\(\\sqrt{p}\\) row and calculate \\(\\frac{q}{\\sqrt{p}}\\) for each pair \\((q, \\sqrt{p})\\) where \\(p > 0\\).",
    "a": "sqrt(p) row: 0, 1, 2, 3, 5. q/sqrt(p) = 3 for all non-zero pairs.",
    "t": "Direct proportion",
    "hint": "Calculate \\(\\sqrt{p}\\) for each value of \\(p\\), then divide \\(q\\) by \\(\\sqrt{p}\\).",
    "solution": "sqrt(p): 0, 1, 2, 3, 5. The ratio q/sqrt(p) = 3 for all non-zero pairs, confirming q is proportional to sqrt(p).",
    "solutionSteps": [
      {
        "explanation": "Calculate \\(\\sqrt{p}\\) for each value of \\(p\\).",
        "workingOut": "\\sqrt{0}=0,\\; \\sqrt{1}=1,\\; \\sqrt{4}=2,\\; \\sqrt{9}=3,\\; \\sqrt{25}=5"
      },
      {
        "explanation": "Calculate the ratio \\(\\frac{q}{\\sqrt{p}}\\) for each non-zero pair.",
        "workingOut": "\\frac{3}{1}=3, quad \\frac{6}{2}=3, quad \\frac{9}{3}=3, quad \\frac{15}{5}=3"
      },
      {
        "explanation": "Since the ratio is constant (\\(= 3\\)), \\(q\\) is directly proportional to \\(\\sqrt{p}\\).",
        "workingOut": "\\frac{q}{\\sqrt{p}} = 3 \\implies q \\propto \\sqrt{p}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Assuming that there is a simple relationship between \\(q\\) and \\(p\\) (from the table in Q2), find a formula for \\(q\\) in terms of \\(p\\).",
    "a": "q = 3*sqrt(p)",
    "t": "Direct proportion",
    "hint": "From part b, \\(q/\\sqrt{p}\\) was constant.",
    "solution": "Since q/sqrt(p) = 3 for all pairs, q = 3*sqrt(p).",
    "solutionSteps": [
      {
        "explanation": "From part b, the ratio \\(\\frac{q}{\\sqrt{p}} = 3\\) is constant for all pairs.",
        "workingOut": ""
      },
      {
        "explanation": "Therefore, \\(q\\) is directly proportional to \\(\\sqrt{p}\\) with constant of proportionality \\(k = 3\\).",
        "workingOut": "q = 3\\sqrt{p}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q3a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Given that \\(m \\propto n^2\\) and that \\(m = 18\\) when \\(n = 3\\), find the formula for \\(m\\) in terms of \\(n\\) and the exact values below.",
    "a": "m = 2n^2",
    "t": "Direct proportion",
    "hint": "Write \\(m = kn^2\\) and use the given values to find \\(k\\).",
    "solution": "m = kn^2, 18 = 9k, k = 2, m = 2n^2.",
    "solutionSteps": [
      {
        "explanation": "Write the proportionality relationship.",
        "workingOut": "m = kn^2"
      },
      {
        "explanation": "Substitute \\(m = 18\\) and \\(n = 3\\).",
        "workingOut": "18 = k(3)^2 = 9k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = 2"
      },
      {
        "explanation": "Write the formula.",
        "workingOut": "m = 2n^2"
      }
    ],
    "subQuestions": [
      {
        "id": "y10-16a-q3a-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the value of \\(m\\) when \\(n = 4\\).",
        "a": "32",
        "hint": "Substitute \\(n = 4\\) into \\(m = 2n^2\\).",
        "solution": "m = 2(4)^2 = 2(16) = 32.",
        "solutionSteps": [
          {
            "explanation": "Substitute \\(n = 4\\) into the formula \\(m = 2n^2\\).",
            "workingOut": "m = 2(4)^2 = 2 \\times 16"
          },
          {
            "explanation": "Calculate.",
            "workingOut": "m = 32"
          }
        ],
        "graphData": null
      },
      {
        "id": "y10-16a-q3a-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the value of \\(n\\) when \\(m = 50\\).",
        "a": "5",
        "hint": "Substitute \\(m = 50\\) and solve for \\(n\\).",
        "solution": "50 = 2n^2, n^2 = 25, n = 5.",
        "solutionSteps": [
          {
            "explanation": "Substitute \\(m = 50\\) into the formula.",
            "workingOut": "50 = 2n^2"
          },
          {
            "explanation": "Divide both sides by 2.",
            "workingOut": "n^2 = 25"
          },
          {
            "explanation": "Take the positive square root (since all variables are positive).",
            "workingOut": "n = 5"
          }
        ],
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q3b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Given that \\(a \\propto \\sqrt{b}\\) and that \\(a = 20\\) when \\(b = 16\\), find the formula for \\(a\\) in terms of \\(b\\) and the exact values below.",
    "a": "a = 5*sqrt(b)",
    "t": "Direct proportion",
    "hint": "Write \\(a = k\\sqrt{b}\\) and use the given values to find \\(k\\).",
    "solution": "a = k*sqrt(b), 20 = k*4, k = 5, a = 5*sqrt(b).",
    "solutionSteps": [
      {
        "explanation": "Write the proportionality relationship.",
        "workingOut": "a = k\\sqrt{b}"
      },
      {
        "explanation": "Substitute \\(a = 20\\) and \\(b = 16\\).",
        "workingOut": "20 = k\\sqrt{16} = 4k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = 5"
      },
      {
        "explanation": "Write the formula.",
        "workingOut": "a = 5\\sqrt{b}"
      }
    ],
    "subQuestions": [
      {
        "id": "y10-16a-q3b-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the value of \\(a\\) when \\(b = 25\\).",
        "a": "25",
        "hint": "Substitute \\(b = 25\\) into \\(a = 5\\sqrt{b}\\).",
        "solution": "a = 5*sqrt(25) = 5*5 = 25.",
        "solutionSteps": [
          {
            "explanation": "Substitute \\(b = 25\\) into the formula.",
            "workingOut": "a = 5\\sqrt{25} = 5 \\times 5"
          },
          {
            "explanation": "Calculate.",
            "workingOut": "a = 25"
          }
        ],
        "graphData": null
      },
      {
        "id": "y10-16a-q3b-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the value of \\(b\\) when \\(a = 15\\).",
        "a": "9",
        "hint": "Substitute \\(a = 15\\) and solve for \\(b\\).",
        "solution": "15 = 5*sqrt(b), sqrt(b) = 3, b = 9.",
        "solutionSteps": [
          {
            "explanation": "Substitute \\(a = 15\\) into the formula.",
            "workingOut": "15 = 5\\sqrt{b}"
          },
          {
            "explanation": "Divide both sides by 5.",
            "workingOut": "\\sqrt{b} = 3"
          },
          {
            "explanation": "Square both sides.",
            "workingOut": "b = 9"
          }
        ],
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q4a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the formula connecting the pronumerals: \\(R \\propto s\\) and \\(s = 5\\) when \\(R = 35\\).",
    "a": "R = 7s",
    "t": "Direct proportion",
    "hint": "Write \\(R = ks\\) and substitute to find \\(k\\).",
    "solution": "R = ks, 35 = 5k, k = 7, R = 7s.",
    "solutionSteps": [
      {
        "explanation": "Write the proportionality relationship.",
        "workingOut": "R = ks"
      },
      {
        "explanation": "Substitute \\(R = 35\\) and \\(s = 5\\).",
        "workingOut": "35 = 5k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = 7"
      },
      {
        "explanation": "Write the formula.",
        "workingOut": "R = 7s"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q4b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the formula connecting the pronumerals: \\(P \\propto T\\) and \\(P = 15\\) when \\(T = 75\\).",
    "a": "P = T/5",
    "t": "Direct proportion",
    "hint": "Write \\(P = kT\\) and substitute.",
    "solution": "P = kT, 15 = 75k, k = 1/5, P = T/5.",
    "solutionSteps": [
      {
        "explanation": "Write the proportionality relationship.",
        "workingOut": "P = kT"
      },
      {
        "explanation": "Substitute \\(P = 15\\) and \\(T = 75\\).",
        "workingOut": "15 = 75k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = \\frac{15}{75} = \\frac{1}{5}"
      },
      {
        "explanation": "Write the formula.",
        "workingOut": "P = \\frac{T}{5}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q4c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the formula connecting the pronumerals: \\(a\\) is directly proportional to the square root of \\(b\\), and \\(a = 10\\) when \\(b = 4\\).",
    "a": "a = 5*sqrt(b)",
    "t": "Direct proportion",
    "hint": "Write \\(a = k\\sqrt{b}\\) and substitute.",
    "solution": "a = k*sqrt(b), 10 = k*2, k = 5, a = 5*sqrt(b).",
    "solutionSteps": [
      {
        "explanation": "Write the proportionality relationship.",
        "workingOut": "a = k\\sqrt{b}"
      },
      {
        "explanation": "Substitute \\(a = 10\\) and \\(b = 4\\).",
        "workingOut": "10 = k\\sqrt{4} = 2k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = 5"
      },
      {
        "explanation": "Write the formula.",
        "workingOut": "a = 5\\sqrt{b}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q4d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the formula connecting the pronumerals: \\(V\\) is directly proportional to \\(r^3\\) and \\(V = 250\\) when \\(r = 5\\).",
    "a": "V = 2r^3",
    "t": "Direct proportion",
    "hint": "Write \\(V = kr^3\\) and substitute.",
    "solution": "V = kr^3, 250 = k(125), k = 2, V = 2r^3.",
    "solutionSteps": [
      {
        "explanation": "Write the proportionality relationship.",
        "workingOut": "V = kr^3"
      },
      {
        "explanation": "Substitute \\(V = 250\\) and \\(r = 5\\).",
        "workingOut": "250 = k(5)^3 = 125k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = \\frac{250}{125} = 2"
      },
      {
        "explanation": "Write the formula.",
        "workingOut": "V = 2r^3"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q5",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In each of the following tables, \\(y \\propto x\\). Find the constant of proportionality and complete the tables.",
    "a": "Review sub-questions.",
    "t": "Direct proportion",
    "hint": "Use a known pair to find \\(k\\), then fill in the blanks.",
    "solution": "See sub-questions.",
    "subQuestions": [
      {
        "id": "y10-16a-q5a",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "\\(y \\propto x\\). Find the constant of proportionality and complete the table.\n\n| \\(x\\) | 3 | 6 | 9 | 15 |\n|---|---|---|---|---|\n| \\(y\\) | 2 | ? | ? | ? |",
        "a": "k = 2/3, y(6)=4, y(9)=6, y(15)=10",
        "hint": "Use the known pair \\((3, 2)\\) to find \\(k\\).",
        "solution": "k = 2/3. y = 2x/3. y(6)=4, y(9)=6, y(15)=10.",
        "solutionSteps": [
          {
            "explanation": "Use the known pair \\((x, y) = (3, 2)\\) to find the constant \\(k\\).",
            "workingOut": "k = \\frac{y}{x} = \\frac{2}{3}"
          },
          {
            "explanation": "Write the formula.",
            "workingOut": "y = \\frac{2}{3}x"
          },
          {
            "explanation": "Substitute to complete the table.",
            "workingOut": "y(6) = 4,\\quad y(9) = 6,\\quad y(15) = 10"
          }
        ],
        "graphData": null
      },
      {
        "id": "y10-16a-q5b",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "\\(y \\propto x\\). Find the constant of proportionality and complete the table.\n\n| \\(x\\) | ? | 4 | 10 | ? | 20 |\n|---|---|---|---|---|---|\n| \\(y\\) | 6 | ? | ? | 30 | ? |",
        "a": "k = 2. x: 3, 4, 10, 15, 20. y: 6, 8, 20, 30, 40.",
        "hint": "Find \\(k\\) using any complete pair. Notice the pair where \\(y = 6\\) gives \\(x = y/k\\).",
        "solution": "Since y = kx and we need a consistent k: from (10, 20) or (20, 40), k = 2. Fill in blanks: x(y=6)=3, y(4)=8, y(10)=20, x(y=30)=15, y(20)=40.",
        "solutionSteps": [
          {
            "explanation": "We need to find \\(k\\) such that \\(y = kx\\) is consistent. Try pairing known values.",
            "workingOut": ""
          },
          {
            "explanation": "Check if \\(k = \\frac{30}{x}\\) and \\(k = \\frac{6}{x_1}\\) can give integer/clean \\(x\\) values. Try \\(k = 2\\).",
            "workingOut": "y = 2x"
          },
          {
            "explanation": "Verify: when \\(x = 4\\), \\(y = 8\\); when \\(x = 10\\), \\(y = 20\\); when \\(x = 20\\), \\(y = 40\\). For \\(y = 6\\): \\(x = 3\\). For \\(y = 30\\): \\(x = 15\\).",
            "workingOut": ""
          },
          {
            "explanation": "Completed table:",
            "workingOut": "x: 3, 4, 10, 15, 20 \\quad y: 6, 8, 20, 30, 40"
          }
        ],
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q6",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "On a particular road map, a distance of \\(0.4\\) cm on the map represents an actual distance of \\(8\\) km. What actual distance would a distance of \\(5.6\\) cm on the map represent?",
    "a": "112",
    "t": "Direct proportion",
    "hint": "Set up a proportion: map distance is directly proportional to actual distance.",
    "solution": "k = 8/0.4 = 20 km per cm. 5.6 * 20 = 112 km.",
    "solutionSteps": [
      {
        "explanation": "The actual distance \\(d\\) is directly proportional to the map distance \\(m\\). Write the relationship.",
        "workingOut": "d = km"
      },
      {
        "explanation": "Use the known values to find the constant.",
        "workingOut": "8 = k \\times 0.4 \\implies k = \\frac{8}{0.4} = 20"
      },
      {
        "explanation": "Substitute \\(m = 5.6\\) cm.",
        "workingOut": "d = 20 \\times 5.6 = 112"
      },
      {
        "explanation": "State the answer.",
        "workingOut": "\\therefore 112 \\;\\mathrm{km}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q7",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The estimated cost \\(C\\) of building a brick veneer house on a concrete slab is directly proportional to the area \\(A\\) of floor space in square metres. If it costs \\(80\\,000\\) dollars for \\(200\\) m\\(^2\\), how much floor space would you expect for \\(120\\,000\\) dollars?",
    "a": "300",
    "t": "Direct proportion",
    "hint": "Find the cost per square metre first.",
    "solution": "C = kA, 80000 = 200k, k = 400. A = C/k = 120000/400 = 300 m^2.",
    "solutionSteps": [
      {
        "explanation": "Write the proportionality relationship.",
        "workingOut": "C = kA"
      },
      {
        "explanation": "Substitute the known values to find \\(k\\).",
        "workingOut": "80\\,000 = k \\times 200 \\implies k = 400"
      },
      {
        "explanation": "Rearrange to find \\(A\\) and substitute \\(C = 120\\,000\\).",
        "workingOut": "A = \\frac{C}{k} = \\frac{120\\,000}{400}"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "A = 300 \\;\\mathrm{m}^2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The power \\(p\\) kW needed to run a boat varies as the cube of its speed, \\(s\\) m/s. If \\(320\\) kW will run a boat at \\(4\\) m/s, what power, correct to the nearest kW, is needed to run the same boat at \\(5\\) m/s?",
    "a": "625",
    "t": "Direct proportion",
    "hint": "Write \\(p = ks^3\\) and find \\(k\\) first.",
    "solution": "p = ks^3, 320 = k(64), k = 5. p(5) = 5(125) = 625 kW.",
    "solutionSteps": [
      {
        "explanation": "Since the power varies as the cube of speed, write the relationship.",
        "workingOut": "p = ks^3"
      },
      {
        "explanation": "Substitute the known values \\(p = 320\\), \\(s = 4\\).",
        "workingOut": "320 = k(4)^3 = 64k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = \\frac{320}{64} = 5"
      },
      {
        "explanation": "Substitute \\(s = 5\\).",
        "workingOut": "p = 5(5)^3 = 5 \\times 125 = 625"
      },
      {
        "explanation": "State the answer.",
        "workingOut": "\\therefore 625 \\;\\mathrm{kW}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If air resistance is neglected, the distance \\(d\\) metres that an object falls from rest is directly proportional to the square of the time \\(t\\) seconds of the fall. An object falls \\(8\\) metres in \\(2\\) seconds. How far will the object fall in \\(5\\) seconds?",
    "a": "50",
    "t": "Direct proportion",
    "hint": "Write \\(d = kt^2\\) and find \\(k\\) first.",
    "solution": "d = kt^2, 8 = k(4), k = 2. d(5) = 2(25) = 50.",
    "solutionSteps": [
      {
        "explanation": "Write the proportionality relationship.",
        "workingOut": "d = kt^2"
      },
      {
        "explanation": "Substitute \\(d = 8\\), \\(t = 2\\).",
        "workingOut": "8 = k(2)^2 = 4k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = 2"
      },
      {
        "explanation": "Substitute \\(t = 5\\).",
        "workingOut": "d = 2(5)^2 = 2 \\times 25 = 50"
      },
      {
        "explanation": "State the answer.",
        "workingOut": "\\therefore 50 \\;\\mathrm{m}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q10a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The surface area of a sphere, \\(A\\) cm\\(^2\\), is directly proportional to the square of the radius, \\(r\\) cm. What is the effect on the surface area when the radius is tripled?",
    "a": "The surface area is multiplied by 9.",
    "t": "Direct proportion",
    "hint": "If \\(A = kr^2\\), substitute \\(r' = 3r\\) and see what happens to \\(A\\).",
    "solution": "A = kr^2. New A = k(3r)^2 = 9kr^2 = 9A. Multiplied by 9.",
    "solutionSteps": [
      {
        "explanation": "Write the proportionality relationship.",
        "workingOut": "A = kr^2"
      },
      {
        "explanation": "Replace \\(r\\) with \\(3r\\) (tripled).",
        "workingOut": "A' = k(3r)^2 = k \\times 9r^2 = 9kr^2"
      },
      {
        "explanation": "Compare with the original.",
        "workingOut": "A' = 9A"
      },
      {
        "explanation": "The surface area is multiplied by 9.",
        "workingOut": ""
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q10b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The surface area of a sphere, \\(A\\) cm\\(^2\\), is directly proportional to the square of the radius, \\(r\\) cm. What is the effect on the radius when the surface area is tripled?",
    "a": "The radius is multiplied by sqrt(3).",
    "t": "Direct proportion",
    "hint": "Set \\(A' = 3A\\) and solve for the new \\(r\\).",
    "solution": "3A = kr'^2. r'^2 = 3r^2. r' = r*sqrt(3). Multiplied by sqrt(3).",
    "solutionSteps": [
      {
        "explanation": "Write the relationship.",
        "workingOut": "A = kr^2"
      },
      {
        "explanation": "Set the new surface area to \\(3A\\) and find the new radius \\(r'\\).",
        "workingOut": "3A = k(r')^2"
      },
      {
        "explanation": "Since \\(A = kr^2\\), substitute.",
        "workingOut": "3kr^2 = k(r')^2 \\implies (r')^2 = 3r^2"
      },
      {
        "explanation": "Take the positive square root.",
        "workingOut": "r' = r\\sqrt{3}"
      },
      {
        "explanation": "The radius is multiplied by \\(\\sqrt{3}\\) (approximately 1.73).",
        "workingOut": ""
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q11a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given that \\(m \\propto n^5\\), what is the effect on \\(m\\) when \\(n\\) is doubled?",
    "a": "m is multiplied by 32.",
    "t": "Direct proportion",
    "hint": "Substitute \\(n' = 2n\\) into \\(m = kn^5\\).",
    "solution": "m' = k(2n)^5 = 32kn^5 = 32m.",
    "solutionSteps": [
      {
        "explanation": "Write the relationship.",
        "workingOut": "m = kn^5"
      },
      {
        "explanation": "Replace \\(n\\) with \\(2n\\).",
        "workingOut": "m' = k(2n)^5 = k \\times 32n^5 = 32kn^5"
      },
      {
        "explanation": "Compare with the original.",
        "workingOut": "m' = 32m"
      },
      {
        "explanation": "\\(m\\) is multiplied by 32.",
        "workingOut": ""
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q11b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given that \\(m \\propto n^5\\), what is the effect on \\(m\\) when \\(n\\) is halved?",
    "a": "m is divided by 32.",
    "t": "Direct proportion",
    "hint": "Substitute \\(n' = n/2\\) into \\(m = kn^5\\).",
    "solution": "m' = k(n/2)^5 = kn^5/32 = m/32.",
    "solutionSteps": [
      {
        "explanation": "Write the relationship.",
        "workingOut": "m = kn^5"
      },
      {
        "explanation": "Replace \\(n\\) with \\(\\frac{n}{2}\\).",
        "workingOut": "m' = k\\left(\\frac{n}{2}\\right)^5 = \\frac{kn^5}{32}"
      },
      {
        "explanation": "Compare with the original.",
        "workingOut": "m' = \\frac{m}{32}"
      },
      {
        "explanation": "\\(m\\) is divided by 32.",
        "workingOut": ""
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q11c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given that \\(m \\propto n^5\\), what is the effect on \\(n\\) when \\(m\\) is multiplied by \\(243\\)?",
    "a": "n is multiplied by 3.",
    "t": "Direct proportion",
    "hint": "Set \\(m' = 243m\\) and solve for \\(n'\\). Note that \\(243 = 3^5\\).",
    "solution": "243m = kn'^5. n'^5 = 243n^5 = 3^5 * n^5. n' = 3n.",
    "solutionSteps": [
      {
        "explanation": "Write the relationship.",
        "workingOut": "m = kn^5"
      },
      {
        "explanation": "Set \\(m' = 243m\\) and express in terms of the new \\(n'\\).",
        "workingOut": "243kn^5 = k(n')^5"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "(n')^5 = 243n^5"
      },
      {
        "explanation": "Note that \\(243 = 3^5\\) and take the fifth root.",
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
    "id": "y10-16a-q11d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given that \\(m \\propto n^5\\), what is the effect on \\(n\\) when \\(m\\) is divided by \\(1024\\)?",
    "a": "n is divided by 4.",
    "t": "Direct proportion",
    "hint": "Set \\(m' = m/1024\\) and solve for \\(n'\\). Note that \\(1024 = 4^5\\).",
    "solution": "m/1024 = kn'^5. n'^5 = n^5/1024. n' = n/4.",
    "solutionSteps": [
      {
        "explanation": "Write the relationship.",
        "workingOut": "m = kn^5"
      },
      {
        "explanation": "Set \\(m' = \\frac{m}{1024}\\) and express in terms of the new \\(n'\\).",
        "workingOut": "\\frac{kn^5}{1024} = k(n')^5"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "(n')^5 = \\frac{n^5}{1024}"
      },
      {
        "explanation": "Note that \\(1024 = 4^5\\) and take the fifth root.",
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
    "id": "y10-16a-q12a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given that \\(a \\propto \\sqrt{b}\\), what is the effect, correct to two decimal places, on \\(a\\) when \\(b\\) is increased by \\(25\\%\\)?",
    "a": "increased by 11.80%",
    "t": "Direct proportion",
    "hint": "If \\(b\\) increases by 25%, the new \\(b\\) is \\(1.25b\\). Find the new \\(a\\) and compare.",
    "solution": "a' = k*sqrt(1.25b) = a*sqrt(1.25) ~ a*1.1180. Increase of 11.80%.",
    "solutionSteps": [
      {
        "explanation": "Write the relationship.",
        "workingOut": "a = k\\sqrt{b}"
      },
      {
        "explanation": "Replace \\(b\\) with \\(1.25b\\) (increased by 25%).",
        "workingOut": "a' = k\\sqrt{1.25b} = k\\sqrt{b} \\times \\sqrt{1.25}"
      },
      {
        "explanation": "Express in terms of the original \\(a\\).",
        "workingOut": "a' = a \\times \\sqrt{1.25} \\approx a \\times 1.1180"
      },
      {
        "explanation": "The percentage increase is approximately \\(11.80\\%\\).",
        "workingOut": "\\therefore a \\;\\mathrm{increases\\;by\\;} 11.80\\%"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q12b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given that \\(a \\propto \\sqrt{b}\\), what is the effect, correct to two decimal places, on \\(a\\) when \\(b\\) is decreased by \\(8\\%\\)?",
    "a": "decreased by 4.08%",
    "t": "Direct proportion",
    "hint": "If \\(b\\) decreases by 8%, the new \\(b\\) is \\(0.92b\\).",
    "solution": "a' = k*sqrt(0.92b) = a*sqrt(0.92) ~ a*0.9592. Decrease of 4.08%.",
    "solutionSteps": [
      {
        "explanation": "Write the relationship.",
        "workingOut": "a = k\\sqrt{b}"
      },
      {
        "explanation": "Replace \\(b\\) with \\(0.92b\\) (decreased by 8%).",
        "workingOut": "a' = k\\sqrt{0.92b} = a \\times \\sqrt{0.92}"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "a' \\approx a \\times 0.9592"
      },
      {
        "explanation": "The percentage decrease is approximately \\(4.08\\%\\).",
        "workingOut": "\\therefore a \\;\\mathrm{decreases\\;by\\;} 4.08\\%"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q13a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Given that \\(p \\propto \\sqrt[3]{q}\\), what is the effect on \\(p\\) when \\(q\\) is increased by \\(20\\%\\)? Give your answer correct to two decimal places.",
    "a": "increased by 6.27%",
    "t": "Direct proportion",
    "hint": "If \\(q\\) increases by 20%, the new \\(q\\) is \\(1.2q\\). Find the new \\(p\\).",
    "solution": "p' = k*(1.2q)^(1/3) = p*1.2^(1/3) ~ p*1.0627. Increase of 6.27%.",
    "solutionSteps": [
      {
        "explanation": "Write the relationship.",
        "workingOut": "p = k\\sqrt[3]{q} = kq^{1/3}"
      },
      {
        "explanation": "Replace \\(q\\) with \\(1.2q\\).",
        "workingOut": "p' = k(1.2q)^{1/3} = k \\times q^{1/3} \\times 1.2^{1/3}"
      },
      {
        "explanation": "Express in terms of the original \\(p\\).",
        "workingOut": "p' = p \\times 1.2^{1/3} \\approx p \\times 1.0627"
      },
      {
        "explanation": "The percentage increase is approximately \\(6.27\\%\\).",
        "workingOut": "\\therefore p \\;\\mathrm{increases\\;by\\;} 6.27\\%"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q13b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Given that \\(p \\propto \\sqrt[3]{q}\\), what is the effect on \\(p\\) when \\(q\\) is decreased by \\(5\\%\\)? Give your answer correct to two decimal places.",
    "a": "decreased by 1.70%",
    "t": "Direct proportion",
    "hint": "If \\(q\\) decreases by 5%, the new \\(q\\) is \\(0.95q\\).",
    "solution": "p' = p*0.95^(1/3) ~ p*0.9830. Decrease of 1.70%.",
    "solutionSteps": [
      {
        "explanation": "Write the relationship.",
        "workingOut": "p = kq^{1/3}"
      },
      {
        "explanation": "Replace \\(q\\) with \\(0.95q\\).",
        "workingOut": "p' = k(0.95q)^{1/3} = p \\times 0.95^{1/3}"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "p' \\approx p \\times 0.9830"
      },
      {
        "explanation": "The percentage decrease is approximately \\(1.70\\%\\).",
        "workingOut": "\\therefore p \\;\\mathrm{decreases\\;by\\;} 1.70\\%"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q13c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Given that \\(p \\propto \\sqrt[3]{q}\\), what is the effect on \\(q\\) when \\(p\\) is increased by \\(10\\%\\)? Give your answer correct to two decimal places.",
    "a": "increased by 33.10%",
    "t": "Direct proportion",
    "hint": "If \\(p\\) increases by 10%, the new \\(p\\) is \\(1.1p\\). Since \\(p = kq^{1/3}\\), solve for the new \\(q\\).",
    "solution": "1.1p = kq'^(1/3). q' = (1.1)^3 * q = 1.331q. Increase of 33.10%.",
    "solutionSteps": [
      {
        "explanation": "Since \\(p = kq^{1/3}\\), we can write \\(q = (p/k)^3\\).",
        "workingOut": ""
      },
      {
        "explanation": "Replace \\(p\\) with \\(1.1p\\) and find the new \\(q\\).",
        "workingOut": "q' = \\left(\\frac{1.1p}{k}\\right)^3 = 1.1^3 \\times \\left(\\frac{p}{k}\\right)^3 = 1.1^3 \\times q"
      },
      {
        "explanation": "Calculate \\(1.1^3\\).",
        "workingOut": "1.1^3 = 1.331"
      },
      {
        "explanation": "The percentage increase in \\(q\\) is \\(33.10\\%\\).",
        "workingOut": "\\therefore q \\;\\mathrm{increases\\;by\\;} 33.10\\%"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-16a-q13d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Given that \\(p \\propto \\sqrt[3]{q}\\), what is the effect on \\(q\\) when \\(p\\) is decreased by \\(10\\%\\)? Give your answer correct to two decimal places.",
    "a": "decreased by 27.10%",
    "t": "Direct proportion",
    "hint": "If \\(p\\) decreases by 10%, the new \\(p\\) is \\(0.9p\\).",
    "solution": "q' = (0.9)^3 * q = 0.729q. Decrease of 27.10%.",
    "solutionSteps": [
      {
        "explanation": "Since \\(q = (p/k)^3\\), replace \\(p\\) with \\(0.9p\\).",
        "workingOut": "q' = \\left(\\frac{0.9p}{k}\\right)^3 = 0.9^3 \\times q"
      },
      {
        "explanation": "Calculate \\(0.9^3\\).",
        "workingOut": "0.9^3 = 0.729"
      },
      {
        "explanation": "The percentage decrease in \\(q\\) is \\(27.10\\%\\).",
        "workingOut": "\\therefore q \\;\\mathrm{decreases\\;by\\;} 27.10\\%"
      }
    ],
    "graphData": null
  }
];
