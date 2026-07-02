export const Y10_CH11A_QUESTIONS = [
  {
    "id": "y10-11a-q1a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\(x^2 + y^2 = 16\\), marking any intercepts.",
    "a": "Circle centered at (0, 0) with radius 4. Intercepts at (4, 0), (-4, 0), (0, 4), and (0, -4).",
    "hint": "Identify the radius, then plot intercepts at (±r, 0) and (0, ±r) before sketching the circle.",
    "solutionSteps": [
      {
        "explanation": "Find the radius of the circle by taking the square root of the constant on the right-hand side.",
        "workingOut": "r = \\sqrt{16} = 4"
      },
      {
        "explanation": "Determine the coordinate intercepts of the circle centered at the origin.",
        "workingOut": "x\\text{-intercepts}: (\\pm 4, 0), quad y\\text{-intercepts}: (0, pm 4)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 4], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [4, 0], {size: 3, color: '#4f46e5', name: '(4, 0)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-4, 0], {size: 3, color: '#4f46e5', name: '(-4, 0)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 4], {size: 3, color: '#4f46e5', name: '(0, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -4], {size: 3, color: '#4f46e5', name: '(0, -4)', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q1b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\(x^2 + y^2 = 4\\), marking any intercepts.",
    "a": "Circle centered at (0, 0) with radius 2. Intercepts at (2, 0), (-2, 0), (0, 2), and (0, -2).",
    "hint": "The radius of the circle is the square root of 4.",
    "solutionSteps": [
      {
        "explanation": "Find the radius of the circle.",
        "workingOut": "r = \\sqrt{4} = 2"
      },
      {
        "explanation": "Determine the coordinate intercepts.",
        "workingOut": "x\\text{-intercepts}: (\\pm 2, 0), quad y\\text{-intercepts}: (0, pm 2)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -3,
          3,
          3,
          -3
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2, 0], {size: 3, color: '#4f46e5', name: '(2, 0)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2, 0], {size: 3, color: '#4f46e5', name: '(-2, 0)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2], {size: 3, color: '#4f46e5', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2], {size: 3, color: '#4f46e5', name: '(0, -2)', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q1c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\(x^2 + y^2 = 7\\), marking any intercepts.",
    "a": "Circle centered at (0, 0) with radius \\sqrt{7}. Intercepts at (\\sqrt{7}, 0), (-\\sqrt{7}, 0), (0, \\sqrt{7}), and (0, -\\sqrt{7}).",
    "hint": "The radius of the circle is the square root of 7.",
    "solutionSteps": [
      {
        "explanation": "Find the radius of the circle.",
        "workingOut": "r = \\sqrt{7}"
      },
      {
        "explanation": "Determine the coordinate intercepts.",
        "workingOut": "x\\text{-intercepts}: (\\pm \\sqrt{7}, 0), quad y\\text{-intercepts}: (0, pm \\sqrt{7})"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.64575], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.64575, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{7}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.64575, 0], {size: 3, color: '#4f46e5', name: '$(-\\sqrt{7}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.64575], {size: 3, color: '#4f46e5', name: '$(0, \\sqrt{7})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.64575], {size: 3, color: '#4f46e5', name: '$(0, -\\sqrt{7})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q1d",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\(x^2 + y^2 = 5\\), marking any intercepts.",
    "a": "Circle centered at (0, 0) with radius \\sqrt{5}. Intercepts at (\\sqrt{5}, 0), (-\\sqrt{5}, 0), (0, \\sqrt{5}), and (0, -\\sqrt{5}).",
    "hint": "The radius of the circle is the square root of 5.",
    "solutionSteps": [
      {
        "explanation": "Find the radius of the circle.",
        "workingOut": "r = \\sqrt{5}"
      },
      {
        "explanation": "Determine the coordinate intercepts.",
        "workingOut": "x\\text{-intercepts}: (\\pm \\sqrt{5}, 0), quad y\\text{-intercepts}: (0, pm \\sqrt{5})"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -3.5,
          3.5,
          3.5,
          -3.5
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.236], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.236, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{5}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.236, 0], {size: 3, color: '#4f46e5', name: '$(-\\sqrt{5}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.236], {size: 3, color: '#4f46e5', name: '$(0, \\sqrt{5})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.236], {size: 3, color: '#4f46e5', name: '$(0, -\\sqrt{5})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q2a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\(y^2 = 9 - x^2\\), marking any intercepts.",
    "a": "Circle centered at (0, 0) with radius 3. Intercepts at (3, 0), (-3, 0), (0, 3), and (0, -3).",
    "hint": "Rearrange the equation into the form \\(x^2 + y^2 = r^2\\).",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation by adding \\(x^2\\) to both sides.",
        "workingOut": "x^2 + y^2 = 9"
      },
      {
        "explanation": "Determine the radius \\(r\\).",
        "workingOut": "r = \\sqrt{9} = 3"
      },
      {
        "explanation": "Find the intercepts.",
        "workingOut": "x\\text{-intercepts}: (\\pm 3, 0), quad y\\text{-intercepts}: (0, pm 3)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 3], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [3, 0], {size: 3, color: '#4f46e5', name: '(3, 0)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-3, 0], {size: 3, color: '#4f46e5', name: '(-3, 0)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 3], {size: 3, color: '#4f46e5', name: '(0, 3)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -3], {size: 3, color: '#4f46e5', name: '(0, -3)', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q2b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\(y^2 = -x^2 + 8\\), marking any intercepts.",
    "a": "Circle centered at (0, 0) with radius 2\\sqrt{2}. Intercepts at (2\\sqrt{2}, 0), (-2\\sqrt{2}, 0), (0, 2\\sqrt{2}), and (0, -2\\sqrt{2}).",
    "hint": "Rearrange to \\(x^2 + y^2 = r^2\\).",
    "solutionSteps": [
      {
        "explanation": "Add \\(x^2\\) to both sides to get the standard form.",
        "workingOut": "x^2 + y^2 = 8"
      },
      {
        "explanation": "Determine the radius.",
        "workingOut": "r = \\sqrt{8} = 2\\sqrt{2}"
      },
      {
        "explanation": "Find the intercepts.",
        "workingOut": "x\\text{-intercepts}: (\\pm 2\\sqrt{2}, 0), quad y\\text{-intercepts}: (0, pm 2\\sqrt{2})"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.8284], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.8284, 0], {size: 3, color: '#4f46e5', name: '$(2\\sqrt{2}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.8284, 0], {size: 3, color: '#4f46e5', name: '$(-2\\sqrt{2}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.8284], {size: 3, color: '#4f46e5', name: '$(0, 2\\sqrt{2})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.8284], {size: 3, color: '#4f46e5', name: '$(0, -2\\sqrt{2})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q2c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\(x^2 = 6 - y^2\\), marking any intercepts.",
    "a": "Circle centered at (0, 0) with radius \\sqrt{6}. Intercepts at (\\sqrt{6}, 0), (-\\sqrt{6}, 0), (0, \\sqrt{6}), and (0, -\\sqrt{6}).",
    "hint": "Add \\(y^2\\) to both sides to find standard form.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation.",
        "workingOut": "x^2 + y^2 = 6"
      },
      {
        "explanation": "Identify the radius.",
        "workingOut": "r = \\sqrt{6}"
      },
      {
        "explanation": "Find the intercepts.",
        "workingOut": "x\\text{-intercepts}: (\\pm \\sqrt{6}, 0), quad y\\text{-intercepts}: (0, pm \\sqrt{6})"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.449], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.449, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{6}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.449, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{6}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.449], {size: 3, color: '#4f46e5', name: '$(0, \\sqrt{6})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.449], {size: 3, color: '#4f46e5', name: '$(0, -\\sqrt{6})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q2d",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\(x^2 = -y^2 + 12\\), marking any intercepts.",
    "a": "Circle centered at (0, 0) with radius 2\\sqrt{3}. Intercepts at (2\\sqrt{3}, 0), (-2\\sqrt{3}, 0), (0, 2\\sqrt{3}), and (0, -2\\sqrt{3}).",
    "hint": "Convert the equation to standard circle form.",
    "solutionSteps": [
      {
        "explanation": "Rearrange to the standard form.",
        "workingOut": "x^2 + y^2 = 12"
      },
      {
        "explanation": "Determine the radius.",
        "workingOut": "r = \\sqrt{12} = 2\\sqrt{3}"
      },
      {
        "explanation": "Determine coordinate intercepts.",
        "workingOut": "x\\text{-intercepts}: (\\pm 2\\sqrt{3}, 0), quad y\\text{-intercepts}: (0, pm 2\\sqrt{3})"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 3.464], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [3.464, 0], {size: 3, color: '#4f46e5', name: '$(2\\sqrt{3}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-3.464, 0], {size: 3, color: '#4f46e5', name: '$(-2\\sqrt{3}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 3.464], {size: 3, color: '#4f46e5', name: '$(0, 2\\sqrt{3})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -3.464], {size: 3, color: '#4f46e5', name: '$(0, -2\\sqrt{3})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((5, 5)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "a": "Yes",
    "hint": "Substitute the x and y values into the left-hand side of the circle equation.",
    "solutionSteps": [
      {
        "explanation": "Substitute the point (5, 5) into the equation \\(x^2 + y^2\\).",
        "workingOut": "5^2 + 5^2 = 25 + 25 = 50"
      },
      {
        "explanation": "Since the sum equals 50, the point lies on the circle.",
        "workingOut": "50 = 50"
      }
    ]
  },
  {
    "id": "y10-11a-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((7, 1)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "a": "Yes",
    "hint": "Substitute 7 for x and 1 for y.",
    "solutionSteps": [
      {
        "explanation": "Substitute the coordinates into the expression \\(x^2 + y^2\\).",
        "workingOut": "7^2 + 1^2 = 49 + 1 = 50"
      },
      {
        "explanation": "The equation holds true.",
        "workingOut": "50 = 50"
      }
    ]
  },
  {
    "id": "y10-11a-q3c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((6, 4)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "a": "No",
    "hint": "Substitute the point into the expression.",
    "solutionSteps": [
      {
        "explanation": "Substitute x = 6 and y = 4 into \\(x^2 + y^2\\).",
        "workingOut": "6^2 + 4^2 = 36 + 16 = 52"
      },
      {
        "explanation": "Compare the sum to the constant term 50.",
        "workingOut": "52 \\neq 50"
      }
    ]
  },
  {
    "id": "y10-11a-q3d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((-1, 7)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "a": "Yes",
    "hint": "Pay attention to the sign when squaring the negative number.",
    "solutionSteps": [
      {
        "explanation": "Substitute (-1, 7) into \\(x^2 + y^2\\).",
        "workingOut": "(-1)^2 + 7^2 = 1 + 49 = 50"
      },
      {
        "explanation": "The point satisfies the equation.",
        "workingOut": "50 = 50"
      }
    ]
  },
  {
    "id": "y10-11a-q3e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((5\\sqrt{2}, 0)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "a": "Yes",
    "hint": "Squaring \\(5\\sqrt{2}\\) gives \\(25 \\times 2 = 50\\).",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 5\\sqrt{2}\\) and \\(y = 0\\) into \\(x^2 + y^2\\).",
        "workingOut": "(5\\sqrt{2})^2 + 0^2 = 50 + 0 = 50"
      },
      {
        "explanation": "The equation matches.",
        "workingOut": "50 = 50"
      }
    ]
  },
  {
    "id": "y10-11a-q3f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((5, 4)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "a": "No",
    "hint": "Substitute the values of the point and calculate the sum.",
    "solutionSteps": [
      {
        "explanation": "Substitute x = 5 and y = 4.",
        "workingOut": "5^2 + 4^2 = 25 + 16 = 41"
      },
      {
        "explanation": "Check equality.",
        "workingOut": "41 \\neq 50"
      }
    ]
  },
  {
    "id": "y10-11a-q4a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((6, 8)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "a": "Yes",
    "hint": "Substitute 6 and 8 into the equation.",
    "solutionSteps": [
      {
        "explanation": "Substitute coordinates.",
        "workingOut": "6^2 + 8^2 = 36 + 64 = 100"
      },
      {
        "explanation": "Compare the result.",
        "workingOut": "100 = 100"
      }
    ]
  },
  {
    "id": "y10-11a-q4b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((8, -6)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "a": "Yes",
    "hint": "Substitute 8 for x and -6 for y.",
    "solutionSteps": [
      {
        "explanation": "Substitute the values.",
        "workingOut": "8^2 + (-6)^2 = 64 + 36 = 100"
      },
      {
        "explanation": "Check the equation.",
        "workingOut": "100 = 100"
      }
    ]
  },
  {
    "id": "y10-11a-q4c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((-5, -5)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "a": "No",
    "hint": "Substitute the negative values.",
    "solutionSteps": [
      {
        "explanation": "Substitute coordinates.",
        "workingOut": "(-5)^2 + (-5)^2 = 25 + 25 = 50"
      },
      {
        "explanation": "Check if the sum equals 100.",
        "workingOut": "50 \\neq 100"
      }
    ]
  },
  {
    "id": "y10-11a-q4d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((0, -10)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "a": "Yes",
    "hint": "Squaring -10 yields 100.",
    "solutionSteps": [
      {
        "explanation": "Substitute (0, -10).",
        "workingOut": "0^2 + (-10)^2 = 0 + 100 = 100"
      },
      {
        "explanation": "Compare the values.",
        "workingOut": "100 = 100"
      }
    ]
  },
  {
    "id": "y10-11a-q4e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((5\\sqrt{2}, 5\\sqrt{2})\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "a": "Yes",
    "hint": "Determine the square of \\(5\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Substitute coordinates.",
        "workingOut": "(5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 + 50 = 100"
      },
      {
        "explanation": "Verify the result.",
        "workingOut": "100 = 100"
      }
    ]
  },
  {
    "id": "y10-11a-q4f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Cartesian equation of a circle",
    "question": "Check whether or not the point \\((9, 4)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "a": "No",
    "hint": "Substitute coordinates and simplify.",
    "solutionSteps": [
      {
        "explanation": "Substitute the point.",
        "workingOut": "9^2 + 4^2 = 81 + 16 = 97"
      },
      {
        "explanation": "Check the inequality.",
        "workingOut": "97 \\neq 100"
      }
    ]
  },
  {
    "id": "y10-11a-q5a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\((x - 2)^2 + (y - 1)^2 = 4\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Circle centered at (2, 1) with radius 2. Intercepts at (2 + \\sqrt{3}, 0), (2 - \\sqrt{3}, 0), and (0, 1).",
    "hint": "Identify the centre (h, k) and radius r, then solve for x = 0 and y = 0 to find the intercepts.",
    "solutionSteps": [
      {
        "explanation": "Identify the center \\((h, k)\\) and radius \\(r\\).",
        "workingOut": "\\text{Centre}: (2, 1), quad r = \\sqrt{4} = 2"
      },
      {
        "explanation": "Find \\(y\\)-intercepts by setting \\(x = 0\\).",
        "workingOut": "(0 - 2)^2 + (y - 1)^2 = 4 \\implies 4 + (y - 1)^2 = 4 \\implies (y - 1)^2 = 0 \\implies y = 1"
      },
      {
        "explanation": "Find \\(x\\)-intercepts by setting \\(y = 0\\).",
        "workingOut": "(x - 2)^2 + (0 - 1)^2 = 4 \\implies (x - 2)^2 + 1 = 4 \\implies (x - 2)^2 = 3 \\implies x = 2 \\pm \\sqrt{3}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          4,
          5,
          -2
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[2, 1], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 1], {size: 3, color: '#64748b', name: '$(0, 1)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3.732, 0], {size: 3, color: '#64748b', name: '$(2+\\sqrt{3}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0.268, 0], {size: 3, color: '#64748b', name: '$(2-\\sqrt{3}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2, 1], {size: 2, color: 'black', name: 'Centre (2,1)', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q5b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\((x - 4)^2 + (y - 3)^2 = 25\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Circle centered at (4, 3) with radius 5. Intercepts at (8, 0), (0, 0), and (0, 6).",
    "hint": "The center is (4, 3) and radius is 5.",
    "solutionSteps": [
      {
        "explanation": "Determine center and radius.",
        "workingOut": "\\text{Centre}: (4, 3), quad r = 5"
      },
      {
        "explanation": "Find \\(y\\)-intercepts (set \\(x = 0\\)).",
        "workingOut": "(0-4)^2 + (y-3)^2 = 25 \\implies 16 + (y-3)^2 = 25 \\implies (y-3)^2 = 9 \\implies y = 0 \\text{ or } 6"
      },
      {
        "explanation": "Find \\(x\\)-intercepts (set \\(y = 0\\)).",
        "workingOut": "(x-4)^2 + (0-3)^2 = 25 \\implies (x-4)^2 + 9 = 25 \\implies (x-4)^2 = 16 \\implies x = 0 \\text{ or } 8"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          9,
          10,
          -3
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[4, 3], 5], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 0], {size: 3, color: '#64748b', name: '$(0, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [8, 0], {size: 3, color: '#64748b', name: '$(8, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 6], {size: 3, color: '#64748b', name: '$(0, 6)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q5c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\((x - 3)^2 + (y - 2)^2 = 9\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Circle centered at (3, 2) with radius 3. Intercepts at (3 + \\sqrt{5}, 0), (3 - \\sqrt{5}, 0), and (0, 2).",
    "hint": "Identify center (3, 2) and radius 3.",
    "solutionSteps": [
      {
        "explanation": "Determine center and radius.",
        "workingOut": "\\text{Centre}: (3, 2), quad r = 3"
      },
      {
        "explanation": "Find \\(y\\)-intercepts by setting \\(x = 0\\).",
        "workingOut": "(0-3)^2 + (y-2)^2 = 9 \\implies 9 + (y-2)^2 = 9 \\implies y = 2"
      },
      {
        "explanation": "Find \\(x\\)-intercepts by setting \\(y = 0\\).",
        "workingOut": "(x-3)^2 + (0-2)^2 = 9 \\implies (x-3)^2 = 5 \\implies x = 3 \\pm \\sqrt{5}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          6,
          7,
          -2
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[3, 2], 3], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 2], {size: 3, color: '#64748b', name: '$(0, 2)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [5.236, 0], {size: 3, color: '#64748b', name: '$(3+\\sqrt{5}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0.764, 0], {size: 3, color: '#64748b', name: '$(3-\\sqrt{5}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q5d",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\((x - 1)^2 + (y - 3)^2 = 16\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Circle centered at (1, 3) with radius 4. Intercepts at (1 + \\sqrt{7}, 0), (1 - \\sqrt{7}, 0), (0, 3 + \\sqrt{15}), and (0, 3 - \\sqrt{15}).",
    "hint": "Identify the centre (1, 3) and radius 4.",
    "solutionSteps": [
      {
        "explanation": "Identify parameters.",
        "workingOut": "\\text{Centre}: (1, 3), quad r = 4"
      },
      {
        "explanation": "Find \\(y\\)-intercepts.",
        "workingOut": "(0-1)^2 + (y-3)^2 = 16 \\implies 1 + (y-3)^2 = 16 \\implies y = 3 \\pm \\sqrt{15}"
      },
      {
        "explanation": "Find \\(x\\)-intercepts.",
        "workingOut": "(x-1)^2 + (0-3)^2 = 16 \\implies (x-1)^2 + 9 = 16 \\implies x = 1 \\pm \\sqrt{7}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          8,
          6,
          -2
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[1, 3], 4], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 6.873], {size: 3, color: '#64748b', name: '$(0, 3+\\sqrt{15})$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -0.873], {size: 3, color: '#64748b', name: '$(0, 3-\\sqrt{15})$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3.646, 0], {size: 3, color: '#64748b', name: '$(1+\\sqrt{7}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1.646, 0], {size: 3, color: '#64748b', name: '$(1-\\sqrt{7}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q5e",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\((x - 2)^2 + y^2 = 4\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Circle centered at (2, 0) with radius 2. Intercepts at (0, 0) and (4, 0).",
    "hint": "Identify parameters: centre (2, 0) and radius 2.",
    "solutionSteps": [
      {
        "explanation": "Establish properties.",
        "workingOut": "\\text{Centre}: (2, 0), quad r = 2"
      },
      {
        "explanation": "Find intercepts.",
        "workingOut": "\\text{For } y = 0: (x-2)^2 = 4 \\implies x = 0, 4. \\quad \\text{For } x = 0: (-2)^2 + y^2 = 4 \\implies y = 0."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          3,
          5,
          -3
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[2, 0], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 0], {size: 3, color: '#64748b', name: '(0, 0)', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {size: 3, color: '#64748b', name: '(4, 0)', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q5f",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Cartesian equation of a circle",
    "question": "Sketch the graph of the circle \\(x^2 + (y - 3)^2 = 9\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Circle centered at (0, 3) with radius 3. Intercepts at (0, 0) and (0, 6).",
    "hint": "Centre is (0, 3) and radius is 3.",
    "solutionSteps": [
      {
        "explanation": "Establish parameters.",
        "workingOut": "\\text{Centre}: (0, 3), quad r = 3"
      },
      {
        "explanation": "Find intercepts.",
        "workingOut": "\\text{For } x = 0: (y-3)^2 = 9 \\implies y = 0, 6. \\quad \\text{For } y = 0: x^2 + (-3)^2 = 9 \\implies x = 0."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          7,
          4,
          -1
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 3], 3], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 0], {size: 3, color: '#64748b', name: '(0, 0)', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 6], {size: 3, color: '#64748b', name: '(0, 6)', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-11a-q6a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 + 6x + y^2 + 8y + 9 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "a": "Centre: (-3, -4), Radius: 4",
    "hint": "Group the x and y terms, then complete the square for both variables.",
    "solutionSteps": [
      {
        "explanation": "Group the x and y terms, and move the constant term to the other side.",
        "workingOut": "(x^2 + 6x) + (y^2 + 8y) = -9"
      },
      {
        "explanation": "Complete the square for both groups: add \\((6/2)^2 = 9\\) and \\((8/2)^2 = 16\\) to both sides.",
        "workingOut": "(x^2 + 6x + 9) + (y^2 + 8y + 16) = -9 + 9 + 16"
      },
      {
        "explanation": "Write the equation in standard form.",
        "workingOut": "(x + 3)^2 + (y + 4)^2 = 16"
      },
      {
        "explanation": "Determine the coordinates of the centre and the radius.",
        "workingOut": "\\text{Centre}: (-3, -4), quad \\text{Radius} = \\sqrt{16} = 4"
      }
    ]
  },
  {
    "id": "y10-11a-q6b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 4x + y^2 + 10y + 13 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "a": "Centre: (2, -5), Radius: 4",
    "hint": "Complete the square for x and y separately.",
    "solutionSteps": [
      {
        "explanation": "Group the terms and move the constant.",
        "workingOut": "(x^2 - 4x) + (y^2 + 10y) = -13"
      },
      {
        "explanation": "Add the squaring constants \\((-4/2)^2 = 4\\) and \\((10/2)^2 = 25\\) to both sides.",
        "workingOut": "(x^2 - 4x + 4) + (y^2 + 10y + 25) = -13 + 4 + 25"
      },
      {
        "explanation": "Factor into standard circle form.",
        "workingOut": "(x - 2)^2 + (y + 5)^2 = 16"
      },
      {
        "explanation": "Identify properties.",
        "workingOut": "\\text{Centre}: (2, -5), quad \\text{Radius} = \\sqrt{16} = 4"
      }
    ]
  },
  {
    "id": "y10-11a-q6c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 8x + y^2 - 6y = 11\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "a": "Centre: (4, 3), Radius: 6",
    "hint": "The constant is already on the right-hand side. Complete the squares on the left.",
    "solutionSteps": [
      {
        "explanation": "Group the terms.",
        "workingOut": "(x^2 - 8x) + (y^2 - 6y) = 11"
      },
      {
        "explanation": "Add \\(16\\) and \\(9\\) to both sides.",
        "workingOut": "(x^2 - 8x + 16) + (y^2 - 6y + 9) = 11 + 16 + 9"
      },
      {
        "explanation": "Write in standard form.",
        "workingOut": "(x - 4)^2 + (y - 3)^2 = 36"
      },
      {
        "explanation": "Identify parameter values.",
        "workingOut": "\\text{Centre}: (4, 3), quad \\text{Radius} = \\sqrt{36} = 6"
      }
    ]
  },
  {
    "id": "y10-11a-q6d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 12x + y^2 - 4y + 15 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "a": "Centre: (6, 2), Radius: 5",
    "hint": "Identify the halves of the linear coefficients, square them, and add to both sides.",
    "solutionSteps": [
      {
        "explanation": "Group variables and isolate the constant.",
        "workingOut": "(x^2 - 12x) + (y^2 - 4y) = -15"
      },
      {
        "explanation": "Add \\(36\\) and \\(4\\) to complete the squares.",
        "workingOut": "(x^2 - 12x + 36) + (y^2 - 4y + 4) = -15 + 36 + 4"
      },
      {
        "explanation": "Simplify to standard form.",
        "workingOut": "(x - 6)^2 + (y - 2)^2 = 25"
      },
      {
        "explanation": "Determine outputs.",
        "workingOut": "\\text{Centre}: (6, 2), quad \\text{Radius} = \\sqrt{25} = 5"
      }
    ]
  },
  {
    "id": "y10-11a-q6e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 6x + y^2 - 10y + 9 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "a": "Centre: (3, 5), Radius: 5",
    "hint": "Find the standard equation format.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation terms.",
        "workingOut": "(x^2 - 6x) + (y^2 - 10y) = -9"
      },
      {
        "explanation": "Add \\(9\\) and \\(25\\) to complete the squares.",
        "workingOut": "(x^2 - 6x + 9) + (y^2 - 10y + 25) = -9 + 9 + 25"
      },
      {
        "explanation": "Express standard form.",
        "workingOut": "(x - 3)^2 + (y - 5)^2 = 25"
      },
      {
        "explanation": "Read values.",
        "workingOut": "\\text{Centre}: (3, 5), quad \\text{Radius} = \\sqrt{25} = 5"
      }
    ]
  },
  {
    "id": "y10-11a-q6f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 10x + y^2 - 6y + 18 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "a": "Centre: (5, 3), Radius: 4",
    "hint": "Add 25 and 9 to complete the squares after isolating the constant.",
    "solutionSteps": [
      {
        "explanation": "Group and isolate.",
        "workingOut": "(x^2 - 10x) + (y^2 - 6y) = -18"
      },
      {
        "explanation": "Add completions.",
        "workingOut": "(x^2 - 10x + 25) + (y^2 - 6y + 9) = -18 + 25 + 9"
      },
      {
        "explanation": "Factor terms.",
        "workingOut": "(x - 5)^2 + (y - 3)^2 = 16"
      },
      {
        "explanation": "Read properties.",
        "workingOut": "\\text{Centre}: (5, 3), quad \\text{Radius} = \\sqrt{16} = 4"
      }
    ]
  },
  {
    "id": "y10-11a-q7a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Write down the equation of the circle with centre \\((2, 4)\\) and radius 4.",
    "a": "(x-2)^2 + (y-4)^2 = 16",
    "hint": "Use the standard form equation: \\((x - h)^2 + (y - k)^2 = r^2\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the centre values \\(h = 2\\), \\(k = 4\\) and radius \\(r = 4\\).",
        "workingOut": "h = 2, quad k = 4, quad r = 4"
      },
      {
        "explanation": "Substitute these values into the standard equation.",
        "workingOut": "(x - 2)^2 + (y - 4)^2 = 4^2"
      },
      {
        "explanation": "Simplify the radius squared.",
        "workingOut": "(x - 2)^2 + (y - 4)^2 = 16"
      }
    ]
  },
  {
    "id": "y10-11a-q7b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Write down the equation of the circle with centre \\((-3, 2)\\) and radius 5.",
    "a": "(x+3)^2 + (y-2)^2 = 25",
    "hint": "Subtracting a negative value inside the bracket gives a plus sign.",
    "solutionSteps": [
      {
        "explanation": "Identify properties \\(h = -3\\), \\(k = 2\\) and \\(r = 5\\).",
        "workingOut": "h = -3, quad k = 2, quad r = 5"
      },
      {
        "explanation": "Substitute values.",
        "workingOut": "(x - (-3))^2 + (y - 2)^2 = 5^2"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "(x + 3)^2 + (y - 2)^2 = 25"
      }
    ]
  },
  {
    "id": "y10-11a-q7c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Write down the equation of the circle with centre \\((5, -2)\\) and radius 2.",
    "a": "(x-5)^2 + (y+2)^2 = 4",
    "hint": "Recall standard circle properties.",
    "solutionSteps": [
      {
        "explanation": "Identify centre parameters.",
        "workingOut": "h = 5, quad k = -2, quad r = 2"
      },
      {
        "explanation": "Substitute properties.",
        "workingOut": "(x - 5)^2 + (y - (-2))^2 = 2^2"
      },
      {
        "explanation": "Simplify values.",
        "workingOut": "(x - 5)^2 + (y + 2)^2 = 4"
      }
    ]
  },
  {
    "id": "y10-11a-q7d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Write down the equation of the circle with centre \\((3, 0)\\) and radius 3.",
    "a": "(x-3)^2 + y^2 = 9",
    "hint": "Since k = 0, the y-term simplifies to just y^2.",
    "solutionSteps": [
      {
        "explanation": "Identify properties.",
        "workingOut": "h = 3, quad k = 0, quad r = 3"
      },
      {
        "explanation": "Substitute properties.",
        "workingOut": "(x - 3)^2 + (y - 0)^2 = 3^2"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "(x - 3)^2 + y^2 = 9"
      }
    ]
  },
  {
    "id": "y10-11a-q8a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Show that the point \\((15, 15)\\) lies on the circle with centre \\((3, 10)\\) and radius 13.",
    "a": "Proof showing (15 - 3)^2 + (15 - 10)^2 = 169 = 13^2.",
    "hint": "Substitute the coordinates of the point into the left side of the circle equation and check if it equals the radius squared.",
    "solutionSteps": [
      {
        "explanation": "Find the distance from the centre (3, 10) to the point (15, 15).",
        "workingOut": "\\text{Distance}^2 = (15 - 3)^2 + (15 - 10)^2"
      },
      {
        "explanation": "Evaluate the squared differences.",
        "workingOut": "12^2 + 5^2 = 144 + 25 = 169"
      },
      {
        "explanation": "Verify that this distance squared is equal to the radius squared (13^2).",
        "workingOut": "169 = 13^2"
      }
    ]
  },
  {
    "id": "y10-11a-q8b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Find the equation of the circle with centre \\((3, 10)\\) and radius 13.",
    "a": "(x-3)^2 + (y-10)^2 = 169",
    "hint": "Substitute the center and radius into standard circle form.",
    "solutionSteps": [
      {
        "explanation": "Identify centre \\(h = 3\\), \\(k = 10\\) and radius \\(r = 13\\).",
        "workingOut": "h = 3, quad k = 10, quad r = 13"
      },
      {
        "explanation": "Substitute into the standard circle formula.",
        "workingOut": "(x - 3)^2 + (y - 10)^2 = 13^2"
      },
      {
        "explanation": "Simplify the constant term.",
        "workingOut": "(x - 3)^2 + (y - 10)^2 = 169"
      }
    ]
  },
  {
    "id": "y10-11a-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "Find the equation of the circle with centre \\((5, -12)\\) passing through the origin.",
    "a": "(x-5)^2 + (y+12)^2 = 169",
    "hint": "The distance from the centre to the origin (0, 0) is the radius of the circle.",
    "solutionSteps": [
      {
        "explanation": "Calculate the radius of the circle as the distance from the centre (5, -12) to the origin (0, 0).",
        "workingOut": "r = \\sqrt{(5 - 0)^2 + (-12 - 0)^2}"
      },
      {
        "explanation": "Simplify inside the square root to determine the radius.",
        "workingOut": "r = \\sqrt{25 + 144} = \\sqrt{169} = 13"
      },
      {
        "explanation": "Write the equation using the centre (5, -12) and radius 13.",
        "workingOut": "(x - 5)^2 + (y - (-12))^2 = 13^2"
      },
      {
        "explanation": "Simplify standard form.",
        "workingOut": "(x - 5)^2 + (y + 12)^2 = 169"
      }
    ]
  },
  {
    "id": "y10-11a-q10",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "For a circle with centre \\((5, 8)\\):",
    "subQuestions": [
      {
        "id": "y10-11a-q10a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "a) Find the equation of the circle if it touches the \\(y\\)-axis.",
        "a": "(x-5)^2 + (y-8)^2 = 25",
        "solutionSteps": [
          {
            "explanation": "Identify the radius: since the circle touches the y-axis, the radius is the absolute value of the x-coordinate of the centre.",
            "workingOut": "r = |5| = 5"
          },
          {
            "explanation": "Substitute the centre (5, 8) and radius 5 into standard circle equation.",
            "workingOut": "(x - 5)^2 + (y - 8)^2 = 5^2"
          },
          {
            "explanation": "Simplify.",
            "workingOut": "(x - 5)^2 + (y - 8)^2 = 25"
          }
        ]
      },
      {
        "id": "y10-11a-q10b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "b) Find the equation of the circle if it touches the \\(x\\)-axis.",
        "a": "(x-5)^2 + (y-8)^2 = 64",
        "solutionSteps": [
          {
            "explanation": "Identify the radius: since the circle touches the x-axis, the radius is the absolute value of the y-coordinate of the centre.",
            "workingOut": "r = |8| = 8"
          },
          {
            "explanation": "Substitute the centre (5, 8) and radius 8.",
            "workingOut": "(x - 5)^2 + (y - 8)^2 = 8^2"
          },
          {
            "explanation": "Simplify.",
            "workingOut": "(x - 5)^2 + (y - 8)^2 = 64"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-11a-q11",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "The interval \\(AB\\) joins the points \\(A(3, 8)\\) and \\(B(9, 8)\\). Find:",
    "subQuestions": [
      {
        "id": "y10-11a-q11a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "a) The distance \\(AB\\).",
        "a": "6",
        "solutionSteps": [
          {
            "explanation": "Use the coordinate distance formula.",
            "workingOut": "d = \\sqrt{(9 - 3)^2 + (8 - 8)^2}"
          },
          {
            "explanation": "Evaluate the differences.",
            "workingOut": "d = \\sqrt{6^2 + 0^2} = 6"
          }
        ]
      },
      {
        "id": "y10-11a-q11b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "b) The midpoint of \\(AB\\).",
        "a": "(6,8)",
        "solutionSteps": [
          {
            "explanation": "Use the midpoint formula: \\(M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)\\).",
            "workingOut": "M = \\left( \\frac{3 + 9}{2}, \\frac{8 + 8}{2} \\right)"
          },
          {
            "explanation": "Evaluate the coordinates.",
            "workingOut": "M = (6, 8)"
          }
        ]
      },
      {
        "id": "y10-11a-q11c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "c) The equation of the circle with diameter \\(AB\\).",
        "a": "(x-6)^2 + (y-8)^2 = 9",
        "solutionSteps": [
          {
            "explanation": "Identify the centre of the circle: it is the midpoint of the diameter AB.",
            "workingOut": "\\text{Centre} = (6, 8)"
          },
          {
            "explanation": "Identify the radius: it is half of the distance AB.",
            "workingOut": "r = \\frac{6}{2} = 3"
          },
          {
            "explanation": "Write standard circle equation using centre and radius.",
            "workingOut": "(x - 6)^2 + (y - 8)^2 = 3^2"
          },
          {
            "explanation": "Simplify constant term.",
            "workingOut": "(x - 6)^2 + (y - 8)^2 = 9"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-11a-q12",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Cartesian equation of a circle",
    "question": "The interval \\(AB\\) joins the points \\(A(1, 5)\\) and \\(B(7, -3)\\). Find:",
    "subQuestions": [
      {
        "id": "y10-11a-q12a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "a) The distance \\(AB\\).",
        "a": "10",
        "solutionSteps": [
          {
            "explanation": "Apply the distance formula to coordinates.",
            "workingOut": "d = \\sqrt{(7 - 1)^2 + (-3 - 5)^2}"
          },
          {
            "explanation": "Evaluate differences inside the root.",
            "workingOut": "d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10"
          }
        ]
      },
      {
        "id": "y10-11a-q12b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "b) The midpoint of \\(AB\\).",
        "a": "(4,1)",
        "solutionSteps": [
          {
            "explanation": "Apply the midpoint formula.",
            "workingOut": "M = \\left( \\frac{1 + 7}{2}, \\frac{5 + (-3)}{2} \\right)"
          },
          {
            "explanation": "Evaluate coordinates.",
            "workingOut": "M = \\left( \\frac{8}{2}, \\frac{2}{2} \\right) = (4, 1)"
          }
        ]
      },
      {
        "id": "y10-11a-q12c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "c) The equation of the circle with diameter \\(AB\\).",
        "a": "(x-4)^2 + (y-1)^2 = 25",
        "solutionSteps": [
          {
            "explanation": "The centre is the midpoint of AB.",
            "workingOut": "\\text{Centre} = (4, 1)"
          },
          {
            "explanation": "The radius is half the length of diameter AB.",
            "workingOut": "r = \\frac{10}{2} = 5"
          },
          {
            "explanation": "Write down the circle equation using standard format.",
            "workingOut": "(x - 4)^2 + (y - 1)^2 = 5^2"
          },
          {
            "explanation": "Simplify the constant term.",
            "workingOut": "(x - 4)^2 + (y - 1)^2 = 25"
          }
        ]
      }
    ]
  }
];
