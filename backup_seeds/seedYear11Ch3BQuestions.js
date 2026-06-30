export const Y11_CH3B_QUESTIONS = [
  // ── QUESTION 1 (teacher_review — draw vertical line test) ──
  {
    "id": "y11a-3b-q1a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the graph of the circle below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line that intersects the circle at two points (e.g. at \\( x = 2 \\)). Since one input \\( x \\) maps to two different output values of \\( y \\), it fails the vertical line test and is not a function.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 원의 방정식 \\(x^2 + y^2 = 16\\)을 분석합니다. 함수의 정의는 '모든 입력값 x에 대해 정확히 하나의 출력값 y가 존재해야 한다'는 것입니다. 수직선 검사(Vertical Line Test)를 적용할 것입니다.",
        "workingOut": "\\(x^2 + y^2 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "수직선 검사 적용: x = 2에서 수직선을 그립니다. 이 수직선과 원의 교점의 y좌표를 구합니다.",
        "workingOut": "\\(2^2 + y^2 = 16 \\implies y^2 = 12 \\implies y = \\pm\\sqrt{12}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 하나의 입력값 x = 2가 두 개의 출력값 \\(y = \\sqrt{12}\\)와 \\(y = -\\sqrt{12}\\)에 대응됩니다. 함수의 정의에 위배되므로, 이 원은 함수가 아닙니다.",
        "workingOut": "\\(x = 2 \\implies y = \\sqrt{12} \\text{ 또는 } y = -\\sqrt{12}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-6, 6, 6, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.6, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.6, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 4], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 4.2, '4'], {fontSize: 12});\nboard.create('text', [0.2, -4.2, '-4'], {fontSize: 12});\nboard.create('text', [4.2, 0.2, '4'], {fontSize: 12});\nboard.create('text', [-4.7, 0.2, '-4'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the graph of the semicircle below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line (e.g. at \\( x = 1.5 \\)) which intersects the semicircle at two points. Because a vertical line intersects the curve more than once, it is a relation and not a function.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 반원의 방정식을 분석합니다. 수직선 검사를 통해 함수 여부를 판단할 것입니다.",
        "workingOut": "\\(x = \\sqrt{9 - y^2}\\) (y-축 오른쪽 반원)",
        "graphData": null
      },
      {
        "explanation": "수직선 검사: x = 1.5에서 수직선을 그리면 반원과 두 점에서 교차합니다.",
        "workingOut": "\\(1.5^2 + y^2 = 9 \\implies y^2 = 6.75 \\implies y = \\pm\\sqrt{6.75} \\approx \\pm 2.6\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 하나의 x값에 두 개의 y값이 대응되므로, 이 반원은 함수가 아닙니다.",
        "workingOut": "\\(x = 1.5 \\implies y \\approx 2.6 \\text{ 또는 } y \\approx -2.6\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.8, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [0,3], [0,-3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.create('text', [3.1, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the sideways S-curve shown below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line through the loop (e.g. \\( x = 1 \\) or \\( x = -1 \\)). This vertical line will intersect the curve at three distinct points, indicating it is not a function.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 관계식 \\(x = y^3 - 4y\\)의 S자 곡선을 분석합니다.",
        "workingOut": "\\(x = y^3 - 4y\\)",
        "graphData": null
      },
      {
        "explanation": "수직선 검사: x = 1 근처에 수직선을 그리면, 곡선이 다시 휘어지기 때문에 세 번 교차합니다.",
        "workingOut": "\\(y^3 - 4y = 1 \\implies \\text{세 개의 실수 해가 존재}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 하나의 x값이 세 개의 y값에 대응되므로 이 관계는 함수가 아닙니다.",
        "workingOut": "\\(x = 1 \\implies y_1, y_2, y_3 \\text{ (세 개의 해)}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t*t - 4*t; }, function(t){ return t; }, -2.5, 2.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1d",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the sideways parabola opening to the left below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line (e.g. \\( x = 1 \\)). It cuts the parabola at two points (one above the x-axis, one below). Therefore, it fails the vertical line test and is not a function.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 가로 방향 포물선 \\(x = 3 - \\frac{y^2}{2}\\)을 분석합니다.",
        "workingOut": "\\(x = 3 - \\frac{y^2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "x = 1에서 수직선을 그려 대응되는 y값을 구합니다.",
        "workingOut": "\\(1 = 3 - \\frac{y^2}{2} \\implies y^2 = 4 \\implies y = \\pm 2\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = 1이 y = 2와 y = -2에 동시에 대응되므로 함수가 아닙니다.",
        "workingOut": "\\(x = 1 \\implies y = 2 \\text{ 또는 } y = -2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return 3 - t*t/2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [3.1, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1e",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the hyperbola shown below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line (e.g. \\( x = 1 \\)). It intersects the upper branch at \\( (1, \\sqrt{5}) \\) and the lower branch at \\( (1, -\\sqrt{5}) \\). Since a vertical line intersects the curve twice, the relation is not a function.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 수직 쌍곡선 \\(y^2 - x^2 = 4\\)를 분석합니다.",
        "workingOut": "\\(y^2 - x^2 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "x = 1에서 수직선을 그려 교점의 y값을 구합니다.",
        "workingOut": "\\(y^2 - 1 = 4 \\implies y^2 = 5 \\implies y = \\pm\\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 하나의 x값에 두 개의 y값이 대응되므로 쌍곡선은 함수가 아닙니다.",
        "workingOut": "\\(x = 1 \\implies y = \\sqrt{5} \\text{ 또는 } y = -\\sqrt{5}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 6, 5, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.sqrt(4 + x*x); }, -5, 5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return -Math.sqrt(4 + x*x); }, -5, 5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 2.2, '2'], {fontSize: 12});\nboard.create('text', [0.2, -2.2, '-2'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1f",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the looped curve shown below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line (e.g. \\( x = -0.5 \\)). The vertical line cuts the loop at two points (above and below the x-axis). Thus it fails the vertical line test and is not a function.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 매개변수 곡선 \\(x = t^2 - 1, y = t^3 - t\\)로 정의된 루프 곡선을 분석합니다.",
        "workingOut": "\\(x = t^2 - 1, \\quad y = t^3 - t\\)",
        "graphData": null
      },
      {
        "explanation": "루프 구간 내의 x값(예: x = -0.5)에 수직선을 그립니다.",
        "workingOut": "\\(t^2 - 1 = -0.5 \\implies t = \\pm\\frac{1}{\\sqrt{2}} \\implies y = \\pm\\frac{1}{2\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 하나의 x입력에 여러 y출력이 대응되므로 이 관계는 함수가 아닙니다.",
        "workingOut": "\\(x = -0.5 \\implies y = \\frac{1}{2\\sqrt{2}} \\text{ 또는 } y = -\\frac{1}{2\\sqrt{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2.5, 2, 2.5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.8, -0.2, 'x'], {fontSize: 14});\nboard.create('text', [-0.2, 1.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 1; }, function(t){ return t*t*t - t; }, -1.5, 1.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 2 (vertical line test — Yes/No → MC) ──
  {
    "id": "y11a-3b-q2a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the upward-opening parabola \\( y = x^2 - 4x + 2 \\) below represents a function.",
    "opts": [
      "Yes — every vertical line intersects the parabola at most once.",
      "No — a vertical line can intersect the parabola at two points.",
      "Yes — parabolas always pass the vertical line test.",
      "No — the parabola has two x-intercepts."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 위로 볼록한 포물선 \\(y = x^2 - 4x + 2\\)에 대해 수직선 검사를 적용합니다. 수직선 검사란: 어떤 수직선도 그래프와 최대 한 번만 교차하면 함수입니다.",
        "workingOut": "\\(y = x^2 - 4x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "위로 볼록한 포물선(y = f(x) 형태)은 x에 대해 풀렸으므로, 임의의 수직선 x = a를 그리면 y = a² - 4a + 2라는 단 하나의 y값만 존재합니다.",
        "workingOut": "\\(x = a \\implies y = a^2 - 4a + 2 \\text{ (정확히 하나의 값)}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 모든 수직선이 포물선과 정확히 한 번 교차하므로, 수직선 검사를 통과하고 함수입니다.",
        "workingOut": "\\(\\forall a \\in \\mathbb{R}, \\text{ 수직선 } x = a \\text{는 그래프와 정확히 1번 교차}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 6, 6, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 2; }, -1.5, 5.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the circular arc with open endpoints below represents a function.",
    "opts": [
      "No — a vertical line at \\(x = 0\\) intersects the arc at two points.",
      "Yes — the arc passes the vertical line test.",
      "No — the endpoints are open, so it cannot be a function.",
      "Yes — circular arcs are always functions."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 반원 호(arc)에 대해 수직선 검사를 적용합니다.",
        "workingOut": "\\(x^2 + y^2 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "x = 0에 수직선을 그립니다. 이 원호는 위아래 두 부분을 모두 포함하므로 x = 0은 두 점에서 교차합니다.",
        "workingOut": "\\(0^2 + y^2 = 25 \\implies y = \\pm 5\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 수직선이 두 점에서 교차하므로, 이 원호는 함수가 아닙니다.",
        "workingOut": "\\(x = 0 \\implies y = 5 \\text{ 또는 } y = -5\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-7, 7, 7, -7],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [-4,3], [4,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the straight line \\( y = 3 - x \\) below represents a function.",
    "opts": [
      "Yes — every vertical line intersects a straight line exactly once.",
      "No — the line has a negative gradient.",
      "Yes — straight lines never fail the vertical line test.",
      "No — the line extends infinitely."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 직선 \\(y = 3 - x\\)에 수직선 검사를 적용합니다.",
        "workingOut": "\\(y = 3 - x\\)",
        "graphData": null
      },
      {
        "explanation": "임의의 수직선 x = a에 대해, y = 3 - a는 단 하나의 값을 갖습니다.",
        "workingOut": "\\(x = a \\implies y = 3 - a \\text{ (하나의 값)}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 수직으로 세워진 직선(x = 상수)이 아닌 모든 직선은 함수입니다. 수직선 검사를 통과합니다.",
        "workingOut": "\\(y = 3 - x \\implies \\text{기울기} = -1 \\neq \\text{undefined} \\implies \\text{함수}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 5, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3 - x; }, -1.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the sideways parabola \\( x = y^2 - 2 \\) below represents a function.",
    "opts": [
      "No — a vertical line for \\(x > -2\\) intersects the parabola at two distinct points.",
      "Yes — parabolas always represent functions.",
      "No — it has no x-intercepts.",
      "Yes — the vertex is at \\(x = -2\\), so it is a function."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 가로 방향 포물선 \\(x = y^2 - 2\\)에 수직선 검사를 적용합니다. 꼭짓점은 \\((-2, 0)\\)입니다.",
        "workingOut": "\\(x = y^2 - 2 \\implies \\text{꼭짓점: } (-2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "x = 0에서 수직선을 그립니다.",
        "workingOut": "\\(0 = y^2 - 2 \\implies y^2 = 2 \\implies y = \\pm\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 꼭짓점 오른쪽의 모든 수직선이 두 점에서 교차하므로, 수직선 검사에 실패하고 함수가 아닙니다.",
        "workingOut": "\\(x > -2 \\implies \\text{두 개의 } y \\text{ 값 존재} \\implies \\text{함수 아님}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the vertical sinusoidal wave \\( x = 2\\sin(y) \\) below represents a function.",
    "opts": [
      "No — a vertical line at \\(x = 1\\) intersects the curve infinitely many times.",
      "Yes — sinusoidal curves always represent functions.",
      "No — the amplitude is 2, so it cannot be a function.",
      "Yes — it passes through the origin, so it is a function."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 수직 방향 사인 곡선 \\(x = 2\\sin(y)\\)에 수직선 검사를 적용합니다.",
        "workingOut": "\\(x = 2\\sin(y)\\)",
        "graphData": null
      },
      {
        "explanation": "x = 1에서 수직선을 그립니다. \\(2\\sin(y) = 1\\)의 해는 \\(y = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}, \\ldots\\)로 무한히 많습니다.",
        "workingOut": "\\(2\\sin(y) = 1 \\implies \\sin(y) = 0.5 \\implies y = \\frac{\\pi}{6} + 2k\\pi \\text{ 또는 } \\frac{5\\pi}{6} + 2k\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 하나의 x값에 무한히 많은 y값이 대응되므로, 수직선 검사에 실패하고 함수가 아닙니다.",
        "workingOut": "\\(x = 1 \\implies y \\text{가 무한히 많음} \\implies \\text{함수 아님}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 5, 4, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return 2*Math.sin(t); }, function(t){ return t; }, -4.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the cubic curve \\( y = -x^3 + 3x \\) below represents a function.",
    "opts": [
      "Yes — every vertical line intersects this cubic exactly once.",
      "No — cubic curves can have multiple y-values.",
      "Yes — it has a maximum, so it must be a function.",
      "No — the curve has two turning points."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 3차 함수 \\(y = -x^3 + 3x\\)에 수직선 검사를 적용합니다. 이 함수는 \\(y = f(x)\\) 형태로 x에 대해 풀려 있습니다.",
        "workingOut": "\\(y = -x^3 + 3x\\)",
        "graphData": null
      },
      {
        "explanation": "임의의 수직선 x = a에 대해, \\(y = -a^3 + 3a\\)는 단 하나의 값을 갖습니다. f(x) 형태의 모든 함수는 수직선 검사를 통과합니다.",
        "workingOut": "\\(x = a \\implies y = -a^3 + 3a \\text{ (하나의 유일한 값)}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: y = f(x) 형태로 표현된 3차 함수는 수직선 검사를 통과하고, 함수입니다.",
        "workingOut": "\\(y = f(x) \\implies \\text{수직선 검사 통과} \\implies \\text{함수}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 6, 4, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*x*x + 3*x; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the left semicircle (y-axis left side, radius 3) below represents a function.",
    "opts": [
      "No — for any \\(-3 < x < 0\\), a vertical line crosses the semicircle twice.",
      "Yes — it is only a half circle, so it must be a function.",
      "No — the endpoints are at \\((0, 3)\\) and \\((0, -3)\\).",
      "Yes — it passes through the origin."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: y축 왼쪽의 반원(반지름 3)에 수직선 검사를 적용합니다. 이 반원은 \\((0, 3)\\)과 \\((0, -3)\\)을 끝점으로 합니다.",
        "workingOut": "\\(x^2 + y^2 = 9, \\quad x \\leq 0\\)",
        "graphData": null
      },
      {
        "explanation": "x = -1.5에서 수직선을 그립니다.",
        "workingOut": "\\((-1.5)^2 + y^2 = 9 \\implies y^2 = 6.75 \\implies y = \\pm\\sqrt{6.75}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: \\(-3 < x < 0\\) 구간에서 수직선이 두 점에서 교차하므로, 수직선 검사에 실패하고 함수가 아닙니다.",
        "workingOut": "\\(-3 < x < 0 \\implies y = \\pm\\sqrt{9 - x^2} \\implies \\text{함수 아님}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 2, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [0,-3], [0,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, 0.2, '-3'], {fontSize: 12});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2h",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the upper semicircle (above x-axis, radius 3) below represents a function.",
    "opts": [
      "Yes — every vertical line intersects this upper semicircle at most once.",
      "No — a semicircle always fails the vertical line test.",
      "Yes — it has endpoints at \\((-3, 0)\\) and \\((3, 0)\\).",
      "No — because \\(y = \\sqrt{9 - x^2}\\) is not defined for all x."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: x축 위쪽 반원(반지름 3)에 수직선 검사를 적용합니다. 방정식: \\(y = \\sqrt{9 - x^2}\\), \\(-3 \\leq x \\leq 3\\).",
        "workingOut": "\\(y = \\sqrt{9 - x^2}, \\quad -3 \\leq x \\leq 3\\)",
        "graphData": null
      },
      {
        "explanation": "이 반원은 y = f(x) 형태로, \\(y \\geq 0\\)인 주값(principal value)만 취합니다. 따라서 임의의 수직선 x = a에 대해 정확히 하나의 y값만 존재합니다.",
        "workingOut": "\\(x = a \\implies y = \\sqrt{9 - a^2} \\text{ (하나의 비음수 값)}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 모든 수직선이 상반원과 최대 한 번만 교차하므로, 수직선 검사를 통과하고 함수입니다.",
        "workingOut": "\\(y = \\sqrt{9 - x^2} \\implies \\text{수직선 검사 통과} \\implies \\text{함수}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [3,0], [-3,0]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, -0.4, '-3'], {fontSize: 12});\nboard.create('text', [3.1, -0.4, '3'], {fontSize: 12});\nboard.create('text', [-0.4, 3.1, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 3 (domain and range — MC) ──
  {
    "id": "y11a-3b-q3a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the upward parabola \\( y = x^2 - 4x + 2 \\) with vertex at \\( (2, -2) \\).",
    "opts": [
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: } y \\geq -2\\)",
      "\\(\\text{Domain: } x \\geq -2, \\quad \\text{Range: all real } y\\)",
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: } y \\leq -2\\)",
      "\\(\\text{Domain: } x \\geq 0, \\quad \\text{Range: } y \\geq -2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 포물선 \\(y = x^2 - 4x + 2\\)의 꼭짓점은 \\((2, -2)\\)이며 위로 볼록합니다. 정의역(Domain)은 x가 취할 수 있는 값의 범위이고, 치역(Range)은 y가 취할 수 있는 값의 범위입니다.",
        "workingOut": "\\(y = (x-2)^2 - 2, \\quad \\text{꼭짓점: } (2, -2)\\)",
        "graphData": null
      },
      {
        "explanation": "정의역 결정: 이 포물선은 좌우로 무한히 뻗어 있으므로, 모든 실수 x에 대해 정의됩니다.",
        "workingOut": "\\(\\text{Domain: all real } x \\text{ (제한 없음)}\\)",
        "graphData": null
      },
      {
        "explanation": "치역 결정: 꼭짓점에서 최솟값 y = -2를 가지며, 포물선이 위로 열려 있으므로 y는 -2 이상의 모든 값을 가집니다.",
        "workingOut": "\\(\\text{Range: } y \\geq -2\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 정의역은 모든 실수, 치역은 \\(y \\geq -2\\)입니다. 꼭짓점의 y좌표가 치역의 하한(minimum)을 결정합니다.",
        "workingOut": "\\(\\text{Domain: all real } x, \\quad \\text{Range: } y \\geq -2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 6, 6, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 2; }, -1.5, 5.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the circular arc (radius 5) with open endpoints at \\( (-4, 3) \\) and \\( (4, 3) \\), and the arc going below through \\( (0, -5) \\).",
    "opts": [
      "\\(\\text{Domain: } -5 < x < 5, \\quad \\text{Range: } -5 \\leq y < 3\\)",
      "\\(\\text{Domain: } -4 \\leq x \\leq 4, \\quad \\text{Range: } -5 \\leq y \\leq 3\\)",
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: } -5 \\leq y \\leq 5\\)",
      "\\(\\text{Domain: } -5 \\leq x \\leq 5, \\quad \\text{Range: } -5 < y < 3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 반지름 5인 원호에서 끝점은 \\((-4, 3)\\)과 \\((4, 3)\\)이며(열린 점), 아래로 돌아 \\((0, -5)\\)를 지납니다.",
        "workingOut": "\\(x^2 + y^2 = 25, \\text{ 열린 끝점: } (\\pm 4, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "정의역 결정: 원의 방정식에서 x의 범위는 \\(-5 \\leq x \\leq 5\\)이지만, 끝점 \\(x = \\pm 4\\)가 열려 있어도 원은 \\(x = \\pm 5\\)까지 뻗어 있습니다. 그러나 끝점이 \\(x = \\pm 4\\)에서 제외되므로 Domain은 열린 구간: \\(-5 < x < 5\\).",
        "workingOut": "\\(\\text{Domain: } -5 < x < 5 \\text{ (끝점 \\(\\pm 4\\)에서의 x 범위: 원은 \\(\\pm 5\\)까지 뻗음)}\\)",
        "graphData": null
      },
      {
        "explanation": "치역 결정: 가장 낮은 점 \\((0, -5)\\)는 포함(닫힘), 가장 높은 점 \\(y = 3\\)은 끝점이 열려 있으므로 제외.",
        "workingOut": "\\(\\text{Range: } -5 \\leq y < 3\\)",
        "graphData": null
      },
      {
        "explanation": "결론: Domain은 \\(-5 < x < 5\\), Range는 \\(-5 \\leq y < 3\\)입니다.",
        "workingOut": "\\(\\text{Domain: } -5 < x < 5, \\quad \\text{Range: } -5 \\leq y < 3\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-7, 7, 7, -7],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [-4,3], [4,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the straight line \\( y = 3 - x \\).",
    "opts": [
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: all real } y\\)",
      "\\(\\text{Domain: } x \\geq 0, \\quad \\text{Range: } y \\leq 3\\)",
      "\\(\\text{Domain: } -3 \\leq x \\leq 3, \\quad \\text{Range: } 0 \\leq y \\leq 6\\)",
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: } y \\geq 0\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 직선 \\(y = 3 - x\\)는 제한 없이 양방향으로 뻗는 선형 함수입니다.",
        "workingOut": "\\(y = 3 - x \\text{ (선형 함수, 제한 없음)}\\)",
        "graphData": null
      },
      {
        "explanation": "정의역: 직선에는 분수식이나 루트가 없으므로 모든 실수 x를 입력할 수 있습니다.",
        "workingOut": "\\(\\text{Domain: all real } x\\)",
        "graphData": null
      },
      {
        "explanation": "치역: 직선은 양의 무한대와 음의 무한대로 뻗으므로 모든 실수 y를 취합니다.",
        "workingOut": "\\(\\text{Range: all real } y\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q3d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the sideways parabola \\( x = y^2 - 2 \\) with vertex at \\( (-2, 0) \\).",
    "opts": [
      "\\(\\text{Domain: } x \\geq -2, \\quad \\text{Range: all real } y\\)",
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: } y \\geq -2\\)",
      "\\(\\text{Domain: } x \\leq -2, \\quad \\text{Range: all real } y\\)",
      "\\(\\text{Domain: } x \\geq 0, \\quad \\text{Range: } y \\geq 0\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 가로 방향 포물선 \\(x = y^2 - 2\\)의 꼭짓점은 \\((-2, 0)\\)이며 오른쪽으로 열려 있습니다.",
        "workingOut": "\\(x = y^2 - 2, \\quad \\text{꼭짓점: } (-2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "정의역 결정: \\(y^2 \\geq 0\\)이므로 \\(x = y^2 - 2 \\geq -2\\). 따라서 x의 최솟값은 -2입니다.",
        "workingOut": "\\(y^2 \\geq 0 \\implies x = y^2 - 2 \\geq -2 \\implies \\text{Domain: } x \\geq -2\\)",
        "graphData": null
      },
      {
        "explanation": "치역 결정: y는 임의의 실수값을 취할 수 있으므로 치역은 모든 실수입니다.",
        "workingOut": "\\(y \\in \\mathbb{R} \\implies \\text{Range: all real } y\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the vertical sinusoidal curve \\( x = 2\\sin(y) \\).",
    "opts": [
      "\\(\\text{Domain: } -2 \\leq x \\leq 2, \\quad \\text{Range: all real } y\\)",
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: } -2 \\leq y \\leq 2\\)",
      "\\(\\text{Domain: } -\\pi \\leq x \\leq \\pi, \\quad \\text{Range: } -2 \\leq y \\leq 2\\)",
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: all real } y\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 수직 사인 곡선 \\(x = 2\\sin(y)\\)에서 정의역과 치역을 구합니다.",
        "workingOut": "\\(x = 2\\sin(y)\\)",
        "graphData": null
      },
      {
        "explanation": "정의역 결정: \\(\\sin(y)\\)의 범위는 \\(-1 \\leq \\sin(y) \\leq 1\\)이므로, \\(x = 2\\sin(y)\\)의 범위는 \\(-2 \\leq x \\leq 2\\)입니다.",
        "workingOut": "\\(-1 \\leq \\sin(y) \\leq 1 \\implies -2 \\leq 2\\sin(y) \\leq 2 \\implies \\text{Domain: } -2 \\leq x \\leq 2\\)",
        "graphData": null
      },
      {
        "explanation": "치역 결정: y는 임의의 실수를 취할 수 있으므로, Range는 모든 실수입니다.",
        "workingOut": "\\(y \\in \\mathbb{R} \\implies \\text{Range: all real } y\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 5, 4, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return 2*Math.sin(t); }, function(t){ return t; }, -4.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the cubic function \\( y = -x^3 + 3x \\).",
    "opts": [
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: all real } y\\)",
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: } -2 \\leq y \\leq 2\\)",
      "\\(\\text{Domain: } -2 \\leq x \\leq 2, \\quad \\text{Range: all real } y\\)",
      "\\(\\text{Domain: } x \\geq 0, \\quad \\text{Range: } y \\geq 0\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 3차 함수 \\(y = -x^3 + 3x\\)의 정의역과 치역을 구합니다.",
        "workingOut": "\\(y = -x^3 + 3x \\text{ (3차 다항식)}\\)",
        "graphData": null
      },
      {
        "explanation": "정의역: 3차 다항식은 모든 실수 x에 대해 정의됩니다 (분수나 루트 없음).",
        "workingOut": "\\(\\text{Domain: all real } x\\)",
        "graphData": null
      },
      {
        "explanation": "치역: 3차 함수는 \\(x \\to \\infty\\)일 때 \\(y \\to -\\infty\\), \\(x \\to -\\infty\\)일 때 \\(y \\to +\\infty\\)이므로, 모든 실수 y값을 가집니다.",
        "workingOut": "\\(\\lim_{x\\to\\infty}(-x^3+3x) = -\\infty, \\quad \\lim_{x\\to-\\infty}(-x^3+3x) = +\\infty \\implies \\text{Range: all real } y\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 6, 4, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*x*x + 3*x; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3g",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the left semicircle (y-axis left side) with radius 3, including both endpoints.",
    "opts": [
      "\\(\\text{Domain: } -3 \\leq x \\leq 0, \\quad \\text{Range: } -3 \\leq y \\leq 3\\)",
      "\\(\\text{Domain: } -3 \\leq x \\leq 3, \\quad \\text{Range: } -3 \\leq y \\leq 3\\)",
      "\\(\\text{Domain: } 0 \\leq x \\leq 3, \\quad \\text{Range: } -3 \\leq y \\leq 3\\)",
      "\\(\\text{Domain: } -3 \\leq x \\leq 0, \\quad \\text{Range: } 0 \\leq y \\leq 3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 반지름 3인 y축 왼쪽 반원. 방정식: \\(x^2 + y^2 = 9\\), \\(x \\leq 0\\).",
        "workingOut": "\\(x^2 + y^2 = 9, \\quad x \\leq 0\\)",
        "graphData": null
      },
      {
        "explanation": "정의역 결정: x좌표는 꼭짓점 \\((-3, 0)\\)에서 y축 \\(x = 0\\)까지 뻗어 있습니다.",
        "workingOut": "\\(-3 \\leq x \\leq 0\\)",
        "graphData": null
      },
      {
        "explanation": "치역 결정: y좌표는 아래 끝점 \\(-3\\)부터 위 끝점 \\(3\\)까지 뻗어 있습니다.",
        "workingOut": "\\(-3 \\leq y \\leq 3\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 2, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [0,-3], [0,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, 0.2, '-3'], {fontSize: 12});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3h",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the upper semicircle with radius 3 (above the x-axis), including both endpoints.",
    "opts": [
      "\\(\\text{Domain: } -3 \\leq x \\leq 3, \\quad \\text{Range: } 0 \\leq y \\leq 3\\)",
      "\\(\\text{Domain: } -3 \\leq x \\leq 3, \\quad \\text{Range: } -3 \\leq y \\leq 3\\)",
      "\\(\\text{Domain: } 0 \\leq x \\leq 3, \\quad \\text{Range: } 0 \\leq y \\leq 3\\)",
      "\\(\\text{Domain: all real } x, \\quad \\text{Range: } 0 \\leq y \\leq 3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: x축 위쪽 반원(반지름 3). 방정식: \\(y = \\sqrt{9 - x^2}\\), \\(-3 \\leq x \\leq 3\\).",
        "workingOut": "\\(y = \\sqrt{9 - x^2}, \\quad -3 \\leq x \\leq 3\\)",
        "graphData": null
      },
      {
        "explanation": "정의역: x는 \\(-3\\)부터 \\(3\\)까지입니다.",
        "workingOut": "\\(-3 \\leq x \\leq 3\\)",
        "graphData": null
      },
      {
        "explanation": "치역: 최솟값은 \\(y = 0\\) (양 끝점에서), 최댓값은 \\(y = 3\\) (꼭대기에서).",
        "workingOut": "\\(y = \\sqrt{9 - x^2} \\implies 0 \\leq y \\leq 3\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [3,0], [-3,0]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, -0.4, '-3'], {fontSize: 12});\nboard.create('text', [3.1, -0.4, '3'], {fontSize: 12});\nboard.create('text', [-0.4, 3.1, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 4 (teacher_review — sketch) ──
  {
    "id": "y11a-3b-q4a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the linear function \\( y = -3x + 2 \\):\n\n(i) Copy and complete the table of values for \\( x = 0, 1, 2 \\).\n(ii) Plot the points and sketch the function.\n(iii) Write down the domain and range.",
    "a": "(i) Table of values: (0, 2), (1, -1), (2, -4).\n(ii) Line passing through these points.\n(iii) Domain: all real x, Range: all real y.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 선형 함수 \\(y = -3x + 2\\)에 \\(x = 0, 1, 2\\)를 대입하여 y값을 구합니다.",
        "workingOut": "\\(x=0 \\implies y = -3(0)+2 = 2\\)",
        "graphData": null
      },
      {
        "explanation": "x = 1, 2에 대해 y값을 계산합니다.",
        "workingOut": "\\(x=1 \\implies y = -3(1)+2 = -1, \\quad x=2 \\implies y = -3(2)+2 = -4\\)",
        "graphData": null
      },
      {
        "explanation": "점 \\((0, 2), (1, -1), (2, -4)\\)를 좌표 평면에 표시하고 직선으로 연결합니다.",
        "workingOut": "\\(\\text{점: } (0,2), (1,-1), (2,-4)\\)",
        "graphData": null
      },
      {
        "explanation": "선형 함수는 제한이 없으므로 정의역과 치역 모두 모든 실수입니다.",
        "workingOut": "\\(\\text{Domain: all real } x, \\quad \\text{Range: all real } y\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q4b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the quadratic function \\( y = x^2 - 2x + 3 \\):\n\n(i) Copy and complete the table of values for \\( x = -1, 0, 1, 2, 3 \\).\n(ii) Plot the points and sketch the parabola.\n(iii) Write down the domain and range.",
    "a": "(i) Table of values: (-1, 6), (0, 3), (1, 2), (2, 3), (3, 6).\n(ii) Parabola opening upwards with vertex at (1, 2).\n(iii) Domain: all real x, Range: y >= 2.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: \\(y = x^2 - 2x + 3\\)에 각 x값을 대입합니다.",
        "workingOut": "\\(x=-1 \\implies y = 1+2+3 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "나머지 x값들에 대해 계산합니다.",
        "workingOut": "\\(x=0 \\implies y=3, \\quad x=1 \\implies y=2, \\quad x=2 \\implies y=3, \\quad x=3 \\implies y=6\\)",
        "graphData": null
      },
      {
        "explanation": "꼭짓점이 \\((1, 2)\\)이고 위로 볼록하는 포물선을 그립니다.",
        "workingOut": "\\(\\text{꼭짓점: } (1, 2), \\text{ y-절편: } (0, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "정의역과 치역을 결정합니다. 꼭짓점의 y좌표가 치역의 최솟값입니다.",
        "workingOut": "\\(\\text{Domain: all real } x, \\quad \\text{Range: } y \\geq 2\\)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 5 (natural domain fraction — MC) ──
  {
    "id": "y11a-3b-q5a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{2}{x} \\).",
    "opts": [
      "\\(x \\neq 0\\)",
      "\\(x > 0\\)",
      "\\(x \\geq 0\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: \\(f(x) = \\frac{2}{x}\\)의 자연 정의역을 구합니다. 자연 정의역이란 함수를 제한 없이 정의할 수 있는 가장 넓은 실수 집합입니다.",
        "workingOut": "\\(f(x) = \\frac{2}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "분모가 0이 되는 경우를 찾습니다. 0으로 나누기는 정의되지 않으므로 제외해야 합니다.",
        "workingOut": "\\(x = 0 \\implies f(0) = \\frac{2}{0} \\text{ (정의 안됨)}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = 0을 제외한 모든 실수가 정의역입니다.",
        "workingOut": "\\(\\text{Domain: } x \\neq 0 \\text{ (즉, 모든 실수에서 0을 제외)}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q5b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{1}{x - 4} \\).",
    "opts": [
      "\\(x \\neq 4\\)",
      "\\(x > 4\\)",
      "\\(x \\neq -4\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: \\(f(x) = \\frac{1}{x-4}\\)에서 분모가 0이 되는 x를 찾아 제외합니다.",
        "workingOut": "\\(f(x) = \\frac{1}{x-4}\\)",
        "graphData": null
      },
      {
        "explanation": "분모를 0으로 설정하고 풀면 제외해야 할 x값을 구할 수 있습니다.",
        "workingOut": "\\(x - 4 = 0 \\implies x = 4\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = 4를 제외한 모든 실수가 정의역입니다.",
        "workingOut": "\\(\\text{Domain: } x \\neq 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q5c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{3}{x + 2} \\).",
    "opts": [
      "\\(x \\neq -2\\)",
      "\\(x > -2\\)",
      "\\(x \\neq 2\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: \\(f(x) = \\frac{3}{x+2}\\)에서 분모를 0으로 설정하여 제외할 x를 구합니다.",
        "workingOut": "\\(f(x) = \\frac{3}{x+2}\\)",
        "graphData": null
      },
      {
        "explanation": "분모를 0으로 설정합니다.",
        "workingOut": "\\(x + 2 = 0 \\implies x = -2\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = -2를 제외한 모든 실수가 정의역입니다.",
        "workingOut": "\\(\\text{Domain: } x \\neq -2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q5d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{1}{3 + x} \\).",
    "opts": [
      "\\(x \\neq -3\\)",
      "\\(x > -3\\)",
      "\\(x \\neq 3\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: \\(f(x) = \\frac{1}{3+x}\\)의 자연 정의역을 구합니다.",
        "workingOut": "\\(f(x) = \\frac{1}{3+x}\\)",
        "graphData": null
      },
      {
        "explanation": "분모가 0이 되는 경우를 찾습니다.",
        "workingOut": "\\(3 + x = 0 \\implies x = -3\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = -3을 제외한 모든 실수가 정의역입니다.",
        "workingOut": "\\(\\text{Domain: } x \\neq -3\\)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 6 (natural domain sqrt — MC) ──
  {
    "id": "y11a-3b-q6a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{2x} \\).",
    "opts": [
      "\\(x \\geq 0\\)",
      "\\(x > 0\\)",
      "\\(x \\leq 0\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: \\(f(x) = \\sqrt{2x}\\)에서 루트 안의 식이 0 이상이어야 합니다. (음수의 제곱근은 실수가 아닙니다.)",
        "workingOut": "\\(f(x) = \\sqrt{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "루트 안의 식 ≥ 0 조건을 설정합니다.",
        "workingOut": "\\(2x \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "양변을 2로 나누어 x의 범위를 구합니다.",
        "workingOut": "\\(x \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = 0일 때 f(0) = 0으로 정의되므로, 정의역은 \\(x \\geq 0\\) (0 포함)입니다.",
        "workingOut": "\\(\\text{Domain: } x \\geq 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q6b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x - 4} \\).",
    "opts": [
      "\\(x \\geq 4\\)",
      "\\(x > 4\\)",
      "\\(x \\leq 4\\)",
      "\\(x \\geq -4\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: \\(f(x) = \\sqrt{x-4}\\)에서 루트 안의 식이 0 이상이어야 합니다.",
        "workingOut": "\\(f(x) = \\sqrt{x-4}\\)",
        "graphData": null
      },
      {
        "explanation": "루트 안의 조건 설정: \\(x - 4 \\geq 0\\).",
        "workingOut": "\\(x - 4 \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "양변에 4를 더합니다.",
        "workingOut": "\\(x \\geq 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q6c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x + 5} \\).",
    "opts": [
      "\\(x \\geq -5\\)",
      "\\(x > -5\\)",
      "\\(x \\geq 5\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\sqrt{x+5}\\)에서 루트 안의 식이 0 이상이어야 합니다.",
        "workingOut": "\\(x + 5 \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "양변에서 5를 빼면:",
        "workingOut": "\\(x \\geq -5\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = -5일 때 f(-5) = 0으로 정의되므로, 정의역은 \\(x \\geq -5\\) (-5 포함)입니다.",
        "workingOut": "\\(\\text{Domain: } x \\geq -5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q6d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{3 + x} \\).",
    "opts": [
      "\\(x \\geq -3\\)",
      "\\(x > -3\\)",
      "\\(x \\geq 3\\)",
      "\\(x \\leq -3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\sqrt{3+x}\\)에서 루트 안의 식이 0 이상이어야 합니다.",
        "workingOut": "\\(3 + x \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "양변에서 3을 빼면:",
        "workingOut": "\\(x \\geq -3\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 정의역은 \\(x \\geq -3\\)입니다.",
        "workingOut": "\\(\\text{Domain: } x \\geq -3\\)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 7 (already MC — keep, fix answer index) ──
  {
    "id": "y11a-3b-q7a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A mapping diagram shows domain elements \\(\\{-3, 3, -2, 2, 0\\}\\) mapping to range elements \\(\\{9, 4, 0\\}\\) as follows:\n\n- \\(-3 \\rightarrow 9\\)\n- \\(3 \\rightarrow 9\\)\n- \\(-2 \\rightarrow 4\\)\n- \\(2 \\rightarrow 4\\)\n- \\(0 \\rightarrow 0\\)\n\nIs this relation also a function? Explain why.",
    "opts": [
      "Yes, because each element in the domain maps to exactly one element in the range.",
      "No, because two different domain elements map to the same range element.",
      "Yes, because it is a one-to-many mapping.",
      "No, because 0 maps to 0."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 함수의 정의는 '각 입력값(domain)이 정확히 하나의 출력값(range)에 대응'해야 합니다. 여러 입력이 같은 출력에 대응되는 것(many-to-one)은 허용됩니다.",
        "workingOut": "\\(-3 \\to 9, \\quad 3 \\to 9, \\quad -2 \\to 4, \\quad 2 \\to 4, \\quad 0 \\to 0\\)",
        "graphData": null
      },
      {
        "explanation": "각 입력값이 오직 하나의 출력값에만 대응되는지 확인합니다.",
        "workingOut": "\\(-3 \\to 9 \\text{ (하나)}, \\quad 3 \\to 9 \\text{ (하나)}, \\quad -2 \\to 4 \\text{ (하나)}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 모든 입력이 정확히 하나의 출력에 대응되므로, 이것은 함수입니다 (many-to-one 함수).",
        "workingOut": "\\(\\text{각 입력 } \\to \\text{ 정확히 하나의 출력} \\implies \\text{함수}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q7b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A relation is described by a diagram where domain elements \\(\\{9, 4, 0\\}\\) map to range elements \\(\\{-3, 3, -2, 2, 0\\}\\) as follows:\n\n- \\(9 \\rightarrow -3\\) and \\(9 \\rightarrow 3\\)\n- \\(4 \\rightarrow -2\\) and \\(4 \\rightarrow 2\\)\n- \\(0 \\rightarrow 0\\)\n\nIs this relation a function? Explain why.",
    "opts": [
      "No, because the inputs 9 and 4 map to more than one output value.",
      "Yes, because every element in the domain has an output.",
      "No, because it is a many-to-one relation.",
      "Yes, because it represents a vertical line."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 함수가 되려면 각 입력이 정확히 하나의 출력에만 대응되어야 합니다. 입력 9가 -3과 3에 동시에 대응됩니다.",
        "workingOut": "\\(9 \\to -3 \\text{ and } 9 \\to 3 \\text{ (두 개의 출력!)}\\)",
        "graphData": null
      },
      {
        "explanation": "마찬가지로 입력 4도 -2와 2에 동시에 대응됩니다.",
        "workingOut": "\\(4 \\to -2 \\text{ and } 4 \\to 2 \\text{ (두 개의 출력!)}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 하나의 입력이 여러 출력에 대응되는 one-to-many 관계이므로 함수가 아닙니다.",
        "workingOut": "\\(\\text{one-to-many} \\implies \\text{함수 아님}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q7c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A relation maps \\(\\{-1, 1, 2\\}\\) to \\(\\{3, 5, 8\\}\\) as follows:\n\n- \\(-1 \\rightarrow 3\\)\n- \\(1 \\rightarrow 5\\)\n- \\(2 \\rightarrow 8\\)\n\nIs this relation a function?",
    "opts": [
      "Yes, it is a one-to-one function.",
      "No, it is not a function.",
      "Yes, but it is not a relation.",
      "No, because the inputs are not symmetrical."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 각 입력값이 대응되는 출력값을 확인합니다.",
        "workingOut": "\\(-1 \\to 3, \\quad 1 \\to 5, \\quad 2 \\to 8\\)",
        "graphData": null
      },
      {
        "explanation": "모든 입력이 정확히 하나의 출력에만 대응됩니다. 또한 각 출력값도 고유하므로 일대일(one-to-one) 함수입니다.",
        "workingOut": "\\(\\text{각 입력 → 고유한 출력} \\implies \\text{일대일 함수}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 이 관계는 일대일 함수(bijection)입니다.",
        "workingOut": "\\(\\text{one-to-one function} \\checkmark\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q7d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A mapping diagram contains domain elements \\(\\{-2, 2, 0\\}\\) and range elements \\(\\{-3, 3, -4, 4\\}\\) as follows:\n\n- \\(-2 \\rightarrow -3\\)\n- \\(2 \\rightarrow 3\\)\n- \\(0 \\rightarrow -4\\) and \\(0 \\rightarrow 4\\)\n\nIs this relation a function?",
    "opts": [
      "No, because the domain element 0 maps to two range elements.",
      "Yes, because every element in the range has a preimage.",
      "Yes, it is a function.",
      "No, because the number of elements in the domain is less than the range."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 입력값 0이 대응하는 출력값을 확인합니다.",
        "workingOut": "\\(0 \\to -4 \\text{ and } 0 \\to 4 \\text{ (두 개의 출력!)}\\)",
        "graphData": null
      },
      {
        "explanation": "입력 0이 -4와 4에 동시에 대응되므로 one-to-many 관계입니다.",
        "workingOut": "\\(0 \\to \\text{두 개의 출력} \\implies \\text{함수 정의에 위배}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 입력 0에 대해 유일한 출력이 없으므로 함수가 아닙니다.",
        "workingOut": "\\(\\text{함수 아님} \\times\\)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 8 (subQuestions — keep teacher_review, fix MC) ──
  {
    "id": "y11a-3b-q8",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Answer the following questions about sets of coordinates and dice coordinates.",
    "subQuestions": [
      {
        "id": "y11a-3b-q8a",
        "type": "multiple_choice",
        "question": "a) Consider the set of points \\(\\{(1, 3), (2, 4), (3, 1), (5, 3)\\}\\). Is this a function or a relation?",
        "opts": [
          "It is a function.",
          "It is a relation but not a function."
        ],
        "a": 0
      },
      {
        "id": "y11a-3b-q8b",
        "type": "teacher_review",
        "question": "b) Two coloured dice are rolled. The value on the red die is the \\( x \\)-coordinate and the green die is the \\( y \\)-coordinate.\n\n(i) List the set of points possible if the numbers either add or multiply to give 4.\n(ii) Is this set a relation or a function?",
        "a": "(i) Points: {(1, 3), (3, 1), (2, 2), (1, 4), (4, 1)}.\n(ii) It is a relation and not a function, because the x-coordinate 1 maps to both y = 3 and y = 4."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Part a: x좌표 \\(\\{1, 2, 3, 5\\}\\)에서 반복이 없으므로 각 입력이 정확히 하나의 출력에 대응됩니다.",
        "workingOut": "\\(\\text{x-좌표: } 1, 2, 3, 5 \\text{ (반복 없음)} \\implies \\text{함수}\\)",
        "graphData": null
      },
      {
        "explanation": "Part b(i): 두 주사위의 합이 4이거나 곱이 4인 경우를 모두 구합니다.",
        "workingOut": "\\(\\text{합이 4: } (1,3),(2,2),(3,1) \\quad \\text{곱이 4: } (1,4),(2,2),(4,1)\\)",
        "graphData": null
      },
      {
        "explanation": "합집합 (중복 제거): 점의 집합을 구합니다.",
        "workingOut": "\\(\\{(1,3),(1,4),(2,2),(3,1),(4,1)\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Part b(ii): x = 1이 y = 3과 y = 4에 동시에 대응되므로 함수가 아닙니다.",
        "workingOut": "\\(x=1 \\to y=3 \\text{ and } y=4 \\implies \\text{관계(relation), 함수 아님}\\)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 9 (MC — two points same x) ──
  {
    "id": "y11a-3b-q9a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The circle \\( x^2 + y^2 = 16 \\) (radius 4) is not a function. Which pair of points on this graph share the same x-coordinate?",
    "opts": [
      "\\((0, 4)\\) and \\((0, -4)\\)",
      "\\((4, 0)\\) and \\((-4, 0)\\)",
      "\\((2, 0)\\) and \\((-2, 0)\\)",
      "\\((0, 0)\\) and \\((4, 4)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 원 \\(x^2 + y^2 = 16\\)에서 같은 x좌표를 가진 두 점을 찾습니다.",
        "workingOut": "\\(x^2 + y^2 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "x = 0을 대입하여 y값을 구합니다.",
        "workingOut": "\\(0^2 + y^2 = 16 \\implies y^2 = 16 \\implies y = \\pm 4\\)",
        "graphData": null
      },
      {
        "explanation": "결론: \\((0, 4)\\)와 \\((0, -4)\\)는 같은 x좌표 0을 가집니다. 이것이 원이 함수가 아닌 이유입니다.",
        "workingOut": "\\((0, 4) \\text{ 과 } (0, -4) \\text{ 모두 } x = 0\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-6, 6, 6, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.6, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.6, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 4], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 4.2, '4'], {fontSize: 12});\nboard.create('text', [0.2, -4.2, '-4'], {fontSize: 12});\nboard.create('text', [4.2, 0.2, '4'], {fontSize: 12});\nboard.create('text', [-4.7, 0.2, '-4'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q9b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The sideways parabola \\( x = y^2 - 4 \\) is not a function. Which pair of points on this graph share the same x-coordinate at \\( x = 0 \\)?",
    "opts": [
      "\\((0, 2)\\) and \\((0, -2)\\)",
      "\\((4, 0)\\) and \\((-4, 0)\\)",
      "\\((0, 4)\\) and \\((0, -4)\\)",
      "\\((0, 1)\\) and \\((0, -1)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 포물선 \\(x = y^2 - 4\\)에서 x = 0일 때 대응하는 y값을 구합니다.",
        "workingOut": "\\(x = y^2 - 4\\)",
        "graphData": null
      },
      {
        "explanation": "x = 0을 대입합니다.",
        "workingOut": "\\(0 = y^2 - 4 \\implies y^2 = 4 \\implies y = \\pm 2\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = 0에서 y = 2와 y = -2 두 개의 점이 있습니다.",
        "workingOut": "\\((0, 2) \\text{ 과 } (0, -2)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 3, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 4; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-4.2, 0.2, '-4'], {fontSize: 12});\nboard.create('text', [0.2, 2.1, '2'], {fontSize: 12});\nboard.create('text', [0.2, -2.1, '-2'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q9c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The circle \\( (x-3)^2 + (y-2)^2 = 9 \\) centred at \\( (3, 2) \\) with radius \\( 3 \\) is not a function. Which pair of points have the same x-coordinate at \\( x = 3 \\)?",
    "opts": [
      "\\((3, 5)\\) and \\((3, -1)\\)",
      "\\((3, 3)\\) and \\((3, -3)\\)",
      "\\((0, 2)\\) and \\((6, 2)\\)",
      "\\((3, 2)\\) and \\((3, 0)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 원 \\((x-3)^2 + (y-2)^2 = 9\\)에서 x = 3일 때의 y값을 구합니다.",
        "workingOut": "\\((x-3)^2 + (y-2)^2 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "x = 3을 대입하면:",
        "workingOut": "\\((3-3)^2 + (y-2)^2 = 9 \\implies (y-2)^2 = 9 \\implies y-2 = \\pm 3\\)",
        "graphData": null
      },
      {
        "explanation": "y값을 계산합니다.",
        "workingOut": "\\(y = 2 + 3 = 5 \\text{ 또는 } y = 2 - 3 = -1\\)",
        "graphData": null
      },
      {
        "explanation": "결론: \\((3, 5)\\)와 \\((3, -1)\\)이 같은 x좌표 3을 가집니다.",
        "workingOut": "\\((3, 5) \\text{ 과 } (3, -1)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-1, 7, 8, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [7.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('circle', [[3,2], 3], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [3,2], {name: '(3,2)', size: 2, color: 'black', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q9d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The vertical line \\( x = 3 \\) is not a function. Which of the following is a correct pair of points on this graph that share the same x-coordinate?",
    "opts": [
      "\\((3, 1)\\) and \\((3, 2)\\)",
      "\\((1, 3)\\) and \\((2, 3)\\)",
      "\\((3, 3)\\) only",
      "\\((0, 3)\\) and \\((3, 0)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 수직선 x = 3은 방정식이 x = k 형태인 수직선입니다. 모든 점이 x좌표 = 3을 갖습니다.",
        "workingOut": "\\(x = 3 \\implies \\text{모든 점의 x좌표는 3}\\)",
        "graphData": null
      },
      {
        "explanation": "y좌표는 임의의 값이 될 수 있으므로 \\((3, 1)\\)과 \\((3, 2)\\) 모두 이 선 위의 점입니다.",
        "workingOut": "\\((3, 1) \\text{ 과 } (3, 2) \\text{ 모두 } x = 3 \\text{ 위에 있음}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = 3에서 y값이 무한히 많이 존재하므로 수직선은 함수가 아닙니다.",
        "workingOut": "\\(x = 3 \\implies y \\text{ 는 임의의 실수} \\implies \\text{함수 아님}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-1, 5, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('line', [[3,-2], [3,5]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [3.2, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 10 (natural domain — MC) ──
  {
    "id": "y11a-3b-q10a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = 5x \\).",
    "opts": [
      "All real \\(x\\)",
      "\\(x \\geq 0\\)",
      "\\(x \\neq 0\\)",
      "\\(x > 0\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = 5x\\)는 선형 다항식입니다. 분수식이나 루트가 없으므로 제한이 없습니다.",
        "workingOut": "\\(f(x) = 5x \\text{ (선형 다항식, 제한 없음)}\\)",
        "graphData": null
      },
      {
        "explanation": "다항식은 모든 실수 x에 대해 정의됩니다.",
        "workingOut": "\\(\\text{Domain: all real } x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = 8 - 2x \\).",
    "opts": [
      "All real \\(x\\)",
      "\\(x \\leq 4\\)",
      "\\(x \\geq 0\\)",
      "\\(0 \\leq x \\leq 8\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = 8 - 2x\\)는 선형 다항식입니다.",
        "workingOut": "\\(f(x) = 8 - 2x \\text{ (선형, 제한 없음)}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 분수식이나 루트가 없으므로 모든 실수 x에 대해 정의됩니다.",
        "workingOut": "\\(\\text{Domain: all real } x\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{1}{5 - x} \\).",
    "opts": [
      "\\(x \\neq 5\\)",
      "\\(x < 5\\)",
      "\\(x \\neq -5\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{1}{5-x}\\)에서 분모가 0이 되는 경우를 제외합니다.",
        "workingOut": "\\(5 - x = 0 \\implies x = 5\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = 5를 제외한 모든 실수가 정의역입니다.",
        "workingOut": "\\(\\text{Domain: } x \\neq 5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{4}{3x - 2} \\).",
    "opts": [
      "\\(x \\neq \\dfrac{2}{3}\\)",
      "\\(x \\neq 2\\)",
      "\\(x > \\dfrac{2}{3}\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{4}{3x-2}\\)에서 분모가 0이 되는 x를 찾습니다.",
        "workingOut": "\\(3x - 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "x에 대해 풀면:",
        "workingOut": "\\(3x = 2 \\implies x = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: \\(x = \\frac{2}{3}\\)을 제외한 모든 실수가 정의역입니다.",
        "workingOut": "\\(\\text{Domain: } x \\neq \\frac{2}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x + 6} \\).",
    "opts": [
      "\\(x \\geq -6\\)",
      "\\(x > -6\\)",
      "\\(x \\geq 6\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\sqrt{x+6}\\)에서 루트 안의 식이 0 이상이어야 합니다.",
        "workingOut": "\\(x + 6 \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "양변에서 6을 빼면:",
        "workingOut": "\\(x \\geq -6\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{3x + 2} \\).",
    "opts": [
      "\\(x \\geq -\\dfrac{2}{3}\\)",
      "\\(x \\geq \\dfrac{2}{3}\\)",
      "\\(x > -\\dfrac{2}{3}\\)",
      "\\(x \\geq -2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\sqrt{3x+2}\\)에서 루트 안의 식이 0 이상이어야 합니다.",
        "workingOut": "\\(3x + 2 \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "양변에서 2를 빼면:",
        "workingOut": "\\(3x \\geq -2\\)",
        "graphData": null
      },
      {
        "explanation": "양변을 3으로 나누면:",
        "workingOut": "\\(x \\geq -\\frac{2}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{6 - x} \\).",
    "opts": [
      "\\(x \\leq 6\\)",
      "\\(x \\geq 6\\)",
      "\\(x < 6\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\sqrt{6-x}\\)에서 루트 안의 식이 0 이상이어야 합니다.",
        "workingOut": "\\(6 - x \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "부등식을 풀면:",
        "workingOut": "\\(6 \\geq x \\implies x \\leq 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10h",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{9 - 3x} \\).",
    "opts": [
      "\\(x \\leq 3\\)",
      "\\(x \\geq 3\\)",
      "\\(x \\leq -3\\)",
      "\\(x < 3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\sqrt{9-3x}\\)에서 루트 안의 식 ≥ 0 조건을 설정합니다.",
        "workingOut": "\\(9 - 3x \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "양변에서 9를 빼면:",
        "workingOut": "\\(-3x \\geq -9\\)",
        "graphData": null
      },
      {
        "explanation": "양변을 -3으로 나눕니다 (부등호 방향이 바뀝니다).",
        "workingOut": "\\(x \\leq 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10i",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{2}{\\sqrt{x}} \\).",
    "opts": [
      "\\(x > 0\\)",
      "\\(x \\geq 0\\)",
      "\\(x \\neq 0\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{2}{\\sqrt{x}}\\)에서 분모의 루트 안이 양수여야 합니다(루트가 분모에 있으므로 0도 안 됨).",
        "workingOut": "\\(\\sqrt{x} \\neq 0 \\text{ 이고 } x \\geq 0 \\implies x > 0\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = 0이면 분모가 0이 되고, x < 0이면 루트가 실수가 아닙니다. 따라서 x > 0이어야 합니다.",
        "workingOut": "\\(\\text{Domain: } x > 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10j",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{1}{\\sqrt{x + 3}} \\).",
    "opts": [
      "\\(x > -3\\)",
      "\\(x \\geq -3\\)",
      "\\(x \\neq -3\\)",
      "\\(x > 3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{1}{\\sqrt{x+3}}\\)에서 분모의 루트 안이 양수여야 합니다.",
        "workingOut": "\\(x + 3 > 0\\)",
        "graphData": null
      },
      {
        "explanation": "부등식을 풀면:",
        "workingOut": "\\(x > -3\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x = -3이면 분모가 0, x < -3이면 루트가 실수가 아닙니다. 따라서 x > -3.",
        "workingOut": "\\(\\text{Domain: } x > -3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10k",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{3}{\\sqrt{2 - x}} \\).",
    "opts": [
      "\\(x < 2\\)",
      "\\(x \\leq 2\\)",
      "\\(x > 2\\)",
      "\\(x \\neq 2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{3}{\\sqrt{2-x}}\\)에서 분모의 루트 안이 양수여야 합니다.",
        "workingOut": "\\(2 - x > 0\\)",
        "graphData": null
      },
      {
        "explanation": "부등식을 풀면:",
        "workingOut": "\\(2 > x \\implies x < 2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q10l",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{1}{\\sqrt{3x - 4}} \\).",
    "opts": [
      "\\(x > \\dfrac{4}{3}\\)",
      "\\(x \\geq \\dfrac{4}{3}\\)",
      "\\(x < \\dfrac{4}{3}\\)",
      "\\(x \\neq \\dfrac{4}{3}\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{1}{\\sqrt{3x-4}}\\)에서 분모의 루트 안이 양수여야 합니다.",
        "workingOut": "\\(3x - 4 > 0\\)",
        "graphData": null
      },
      {
        "explanation": "양변에 4를 더하면:",
        "workingOut": "\\(3x > 4\\)",
        "graphData": null
      },
      {
        "explanation": "양변을 3으로 나누면:",
        "workingOut": "\\(x > \\frac{4}{3}\\)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 11 (teacher_review — exponential table) ──
  {
    "id": "y11a-3b-q11a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the exponential function \\( y = 3^x \\):\n\n(i) Copy and complete the table of values for \\( x = -2, -1, 0, 1, 2 \\).\n(ii) Plot the points and sketch the function.\n(iii) Write down the domain and range.",
    "a": "(i) Table of values: (-2, 1/9), (-1, 1/3), (0, 1), (1, 3), (2, 9).\n(ii) Exponential curve rising from left to right, asymptotic to the negative x-axis.\n(iii) Domain: all real x, Range: y > 0.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: \\(y = 3^x\\)에 각 x값을 대입합니다.",
        "workingOut": "\\(x=-2 \\implies y = 3^{-2} = \\frac{1}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "나머지 x값들에 대해 계산합니다.",
        "workingOut": "\\(x=-1 \\implies y = \\frac{1}{3}, \\quad x=0 \\implies y=1, \\quad x=1 \\implies y=3, \\quad x=2 \\implies y=9\\)",
        "graphData": null
      },
      {
        "explanation": "점들을 표시하고 매끄러운 곡선으로 연결합니다. y = 0이 수평 점근선입니다.",
        "workingOut": "\\(\\text{수평 점근선: } y = 0 \\text{ (x축)}\\)",
        "graphData": null
      },
      {
        "explanation": "정의역과 치역을 결정합니다. 지수 함수는 항상 양수입니다.",
        "workingOut": "\\(\\text{Domain: all real } x, \\quad \\text{Range: } y > 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q11b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "For the cubic function \\( y = \\frac{1}{4}(3x - x^3) \\):\n\n(i) Copy and complete the table of values for \\( x = -3, -2, -1, 0, 1, 2, 3 \\).\n(ii) Plot the points and sketch the function.\n(iii) State the domain and range of this function.",
    "a": "(i) Table of values: (-3, 4.5), (-2, 0.5), (-1, -0.5), (0, 0), (1, 0.5), (2, -0.5), (3, -4.5).\n(ii) S-shaped curve passing through these points.\n(iii) Domain: all real x, Range: all real y.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(y = \\frac{1}{4}(3x - x^3)\\)에 각 x값을 대입합니다.",
        "workingOut": "\\(x=-3 \\implies y = 0.25(3(-3) - (-3)^3) = 0.25(-9+27) = 4.5\\)",
        "graphData": null
      },
      {
        "explanation": "나머지 x값들에 대해 계산합니다.",
        "workingOut": "\\(x=-2: 0.5, \\quad x=-1: -0.5, \\quad x=0: 0, \\quad x=1: 0.5, \\quad x=2: -0.5, \\quad x=3: -4.5\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 3차 다항식이므로 정의역과 치역 모두 모든 실수입니다.",
        "workingOut": "\\(\\text{Domain: all real } x, \\quad \\text{Range: all real } y\\)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 12 (subQuestions — mix) ──
  {
    "id": "y11a-3b-q12",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Consider the function \\( R(x) = \\sqrt{2x} \\).",
    "subQuestions": [
      {
        "id": "y11a-3b-q12a",
        "type": "multiple_choice",
        "question": "a) What is the natural domain of \\( R(x) \\)?",
        "opts": [
          "\\(x \\geq 0\\)",
          "\\(x > 0\\)",
          "All real \\(x\\)",
          "\\(x \\neq 0\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3b-q12b",
        "type": "teacher_review",
        "question": "b) Copy and complete the table of values (round to 1 decimal place where necessary) for \\( x = 0, 0.5, 1, 2, 3, 4.5, 8 \\).",
        "a": "Table of values: (0, 0), (0.5, 1), (1, 1.4), (2, 2), (3, 2.4), (4.5, 3), (8, 4)."
      },
      {
        "id": "y11a-3b-q12c",
        "type": "teacher_review",
        "question": "c) Plot these points and join them with a smooth curve starting at the origin. What type of curve is this?",
        "a": "The curve is the upper half of a parabola opening to the right (specifically, \\( y^2 = 2x \\) for \\( y \\ge 0 \\))."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(R(x) = \\sqrt{2x}\\)의 자연 정의역을 구합니다.",
        "workingOut": "\\(2x \\geq 0 \\implies x \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "각 x값에서 \\(R(x)\\)를 계산합니다.",
        "workingOut": "\\(R(0) = 0, \\quad R(0.5) = 1, \\quad R(1) \\approx 1.4, \\quad R(2) = 2, \\quad R(4.5) = 3, \\quad R(8) = 4\\)",
        "graphData": null
      },
      {
        "explanation": "\\(y = \\sqrt{2x}\\)를 제곱하면 \\(y^2 = 2x\\)가 되어 오른쪽으로 열린 포물선의 위쪽 절반입니다.",
        "workingOut": "\\(y = \\sqrt{2x} \\implies y^2 = 2x \\quad (y \\geq 0)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [-1, 5, 9, -1],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [8.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [8.3, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.3, 4.3, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.sqrt(2*x); }, 0, 8.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false});\nboard.create('point', [0.5, 1], {size: 2, color: 'black'});\nboard.create('point', [2, 2], {size: 2, color: 'black'});\nboard.create('point', [4.5, 3], {size: 2, color: 'black'});\nboard.create('point', [8, 4], {size: 2, color: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 13 (subQuestions — mix) ──
  {
    "id": "y11a-3b-q13",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Consider the reciprocal function \\( h(x) = \\frac{3}{x} \\).",
    "subQuestions": [
      {
        "id": "y11a-3b-q13a",
        "type": "multiple_choice",
        "question": "a) What is the natural domain of \\( h(x) \\)?",
        "opts": [
          "\\(x \\neq 0\\)",
          "\\(x > 0\\)",
          "All real \\(x\\)",
          "\\(x \\geq 0\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3b-q13b",
        "type": "teacher_review",
        "question": "b) Copy and complete the table of values (use '*' or 'undefined' for \\( x = 0 \\)) for \\( x = -6, -3, -1.5, -1, 0, 1, 1.5, 3, 6 \\). Explain why \\( x = 0 \\) is undefined.",
        "a": "Table of values: (-6, -0.5), (-3, -1), (-1.5, -2), (-1, -3), (0, undefined), (1, 3), (1.5, 2), (3, 1), (6, 0.5).\nAt x = 0, division by zero is undefined, so the function value does not exist."
      },
      {
        "id": "y11a-3b-q13c",
        "type": "teacher_review",
        "question": "c) Plot these points and join them with a smooth curve in two parts. What is the name of this type of curve?",
        "a": "The curve is a rectangular hyperbola with asymptotes along the x-axis and y-axis."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(h(x) = \\frac{3}{x}\\)에서 분모가 0이 되는 x를 찾습니다.",
        "workingOut": "\\(x \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "각 x값에서 \\(h(x)\\)를 계산합니다.",
        "workingOut": "\\(h(-6) = -0.5, h(-3) = -1, h(-1) = -3, h(1) = 3, h(3) = 1, h(6) = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "x = 0에서 분모가 0이 되어 정의되지 않습니다. 곡선은 두 개의 분리된 가지(branch)로 이루어진 직각 쌍곡선입니다.",
        "workingOut": "\\(\\text{점근선: } x = 0 \\text{ (수직)}, y = 0 \\text{ (수평)}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [-7, 4, 7, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.3, 3.3, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3/x; }, 0.1, 6.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return 3/x; }, -6.5, -0.1], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 14 (subQuestions — wire rectangle) ──
  {
    "id": "y11a-3b-q14",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Jordan has a \\( 24 \\text{ cm} \\) piece of wire, which he bends into the shape of a rectangle. Let \\( x \\) be the length of one side of the rectangle.",
    "subQuestions": [
      {
        "id": "y11a-3b-q14a",
        "type": "multiple_choice",
        "question": "a) What is the length of the opposite side?",
        "opts": [
          "\\(x\\) (opposite sides of a rectangle are equal)",
          "\\(24 - x\\)",
          "\\(12 - x\\)",
          "\\(24 - 2x\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3b-q14b",
        "type": "multiple_choice",
        "question": "b) What is the length of each of the remaining two sides in terms of \\( x \\)?",
        "opts": [
          "\\(12 - x\\)",
          "\\(24 - x\\)",
          "\\(x - 12\\)",
          "\\(24 - 2x\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3b-q14c",
        "type": "multiple_choice",
        "question": "c) Which expression correctly gives the area \\( A \\) of the rectangle as a function of \\( x \\)?",
        "opts": [
          "\\(A(x) = x(12 - x)\\)",
          "\\(A(x) = 12x - 24\\)",
          "\\(A(x) = x(24 - x)\\)",
          "\\(A(x) = 2x + 2(12 - x)\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3b-q14d",
        "type": "multiple_choice",
        "question": "d) Using the fact that physical lengths must be positive, what is the domain of \\( A \\)?",
        "opts": [
          "\\(0 < x < 12\\)",
          "\\(0 \\leq x \\leq 12\\)",
          "\\(0 < x < 24\\)",
          "\\(x > 0\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3b-q14e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of the area function \\( A(x) \\) over the domain found in part d.",
        "a": "Parabola opening downwards with x-intercepts at (0, 0) and (12, 0), and vertex (maximum area) at (6, 36)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "주어진 조건 정리: 철사 24cm를 직사각형으로 구부립니다. 한 변의 길이를 x라 하면, 대변의 길이도 x입니다.",
        "workingOut": "\\(\\text{대변} = x\\)",
        "graphData": null
      },
      {
        "explanation": "둘레 24cm에서 두 변 x를 제외한 나머지 두 변의 합은 24 - 2x입니다. 각 변의 길이는 \\(\\frac{24-2x}{2} = 12 - x\\)입니다.",
        "workingOut": "\\(\\text{나머지 두 변} = \\frac{24 - 2x}{2} = 12 - x\\)",
        "graphData": null
      },
      {
        "explanation": "넓이 A = 길이 × 너비를 구합니다.",
        "workingOut": "\\(A(x) = x(12 - x) = 12x - x^2\\)",
        "graphData": null
      },
      {
        "explanation": "물리적 길이는 양수여야 하므로: \\(x > 0\\)이고 \\(12 - x > 0\\)이어야 합니다.",
        "workingOut": "\\(x > 0 \\text{ and } 12 - x > 0 \\implies 0 < x < 12\\)",
        "graphData": null
      },
      {
        "explanation": "\\(A(x) = 12x - x^2\\)는 아래로 볼록한 포물선이며, x = 6일 때 최댓값 A = 36을 가집니다.",
        "workingOut": "\\(A(6) = 6(12-6) = 36\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [-2, 45, 14, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0], [13,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,42]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [12.8, -1, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 40, 'A'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 12*x - x*x; }, 0, 12], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [6, 36], {name: '(6,36)', size: 3, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 0], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [12, 0], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 15 (teacher_review — explain function) ──
  {
    "id": "y11a-3b-q15a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( 3x - y + 4 = 0 \\) for \\( y \\) and hence explain why it represents a function.",
    "a": "y = 3x + 4. It represents a function because for every input x, there is exactly one corresponding value of y.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(3x - y + 4 = 0\\)을 y에 대해 풉니다.",
        "workingOut": "\\(3x - y + 4 = 0 \\implies y = 3x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "결과를 분석합니다. 임의의 실수 x에 대해 3x + 4는 단 하나의 고유한 실수를 줍니다.",
        "workingOut": "\\(y = 3x + 4 \\implies \\text{임의의 } x \\to \\text{정확히 하나의 } y\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 각 입력이 정확히 하나의 출력에 대응되므로 함수입니다.",
        "workingOut": "\\(\\text{함수} \\checkmark\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q15b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( xy = 6 \\) for \\( y \\) and explain why it represents a function.",
    "a": "y = 6/x. It represents a function because for every input x (except x = 0), there is exactly one value of y.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(xy = 6\\)을 y에 대해 풉니다.",
        "workingOut": "\\(y = \\frac{6}{x} \\quad (x \\neq 0)\\)",
        "graphData": null
      },
      {
        "explanation": "분석: x ≠ 0인 모든 실수에 대해 \\(\\frac{6}{x}\\)는 단 하나의 고유한 실수 y를 생성합니다.",
        "workingOut": "\\(x \\neq 0 \\implies y = \\frac{6}{x} \\text{ (하나의 고유한 값)}\\)",
        "graphData": null
      },
      {
        "explanation": "결론: 정의역(x ≠ 0)의 각 값이 정확히 하나의 치역 값에 대응되므로 함수입니다.",
        "workingOut": "\\(\\text{함수} \\checkmark\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q15c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( xy - 3y = 4 \\) for \\( y \\) and explain why it represents a function.",
    "a": "y = 4/(x - 3). It represents a function because for any input x (except x = 3), there is exactly one value of y.",
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(xy - 3y = 4\\)에서 y를 묶어냅니다.",
        "workingOut": "\\(y(x - 3) = 4\\)",
        "graphData": null
      },
      {
        "explanation": "(x - 3)으로 나누어 y를 구합니다.",
        "workingOut": "\\(y = \\frac{4}{x - 3} \\quad (x \\neq 3)\\)",
        "graphData": null
      },
      {
        "explanation": "결론: x ≠ 3인 모든 값에 대해 정확히 하나의 y값이 존재하므로 함수입니다.",
        "workingOut": "\\(\\text{함수} \\checkmark\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q15d",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( y + 3 = \\sqrt{16 - x^2} \\) for \\( y \\) and explain why it represents a function.",
    "a": "y = \\sqrt{16 - x^2} - 3. It represents a function because the positive square root sign specifies a single principal output value of y for each input x in the domain [-4, 4].",
    "solutionSteps": [
      {
        "explanation": "주어진 조건: 양변에서 3을 빼어 y를 구합니다.",
        "workingOut": "\\(y = \\sqrt{16 - x^2} - 3\\)",
        "graphData": null
      },
      {
        "explanation": "정의역 제한 조건: 루트 안의 식이 0 이상이어야 합니다.",
        "workingOut": "\\(16 - x^2 \\geq 0 \\implies x^2 \\leq 16 \\implies -4 \\leq x \\leq 4\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\sqrt{}\\) 기호는 양의 제곱근(주값)만을 나타냅니다. 따라서 정의역의 각 x에 대해 정확히 하나의 y값이 존재합니다.",
        "workingOut": "\\(\\forall x \\in [-4, 4]: y = \\sqrt{16-x^2} - 3 \\text{ (하나의 값)} \\implies \\text{함수}\\)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 16 (harder natural domain — MC) ──
  {
    "id": "y11a-3b-q16a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{x}{\\sqrt{x + 3}} \\).",
    "opts": [
      "\\(x > -3\\)",
      "\\(x \\geq -3\\)",
      "\\(x \\neq -3\\)",
      "\\(x > 3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{x}{\\sqrt{x+3}}\\)에서 분모의 루트 안이 양수여야 합니다 (루트가 분모에 있으므로 0이 되어서도 안 됨).",
        "workingOut": "\\(\\text{루트 안: } x + 3 \\geq 0 \\implies x \\geq -3\\)",
        "graphData": null
      },
      {
        "explanation": "분모가 0이 아니어야 합니다:",
        "workingOut": "\\(\\sqrt{x+3} \\neq 0 \\implies x + 3 \\neq 0 \\implies x \\neq -3\\)",
        "graphData": null
      },
      {
        "explanation": "두 조건을 결합합니다: \\(x \\geq -3\\) 이면서 \\(x \\neq -3\\)이므로 \\(x > -3\\).",
        "workingOut": "\\(x \\geq -3 \\text{ and } x \\neq -3 \\implies x > -3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q16b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{3}{x^2 - 9} \\).",
    "opts": [
      "\\(x \\neq 3 \\text{ and } x \\neq -3\\)",
      "\\(x > 3\\)",
      "\\(x \\neq 9\\)",
      "\\(x \\neq 0\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{3}{x^2 - 9}\\)에서 분모가 0이 되는 x를 찾습니다.",
        "workingOut": "\\(x^2 - 9 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "분모를 인수분해합니다.",
        "workingOut": "\\((x-3)(x+3) \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "각 인수를 0으로 설정하여 제외값을 구합니다.",
        "workingOut": "\\(x \\neq 3 \\text{ and } x \\neq -3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q16c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{1}{x^2 + 2x} \\).",
    "opts": [
      "\\(x \\neq 0 \\text{ and } x \\neq -2\\)",
      "\\(x > 0\\)",
      "\\(x \\neq 2\\)",
      "All real \\(x\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{1}{x^2 + 2x}\\)에서 분모를 0으로 설정합니다.",
        "workingOut": "\\(x^2 + 2x \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "분모를 인수분해합니다.",
        "workingOut": "\\(x(x+2) \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "각 인수로부터 제외할 값을 구합니다.",
        "workingOut": "\\(x \\neq 0 \\text{ and } x \\neq -2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q16d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{1}{x^2 - 6x + 8} \\).",
    "opts": [
      "\\(x \\neq 2 \\text{ and } x \\neq 4\\)",
      "\\(x > 4\\)",
      "\\(x \\neq 6\\)",
      "\\(x \\neq 8\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{1}{x^2 - 6x + 8}\\)에서 분모를 인수분해합니다.",
        "workingOut": "\\(x^2 - 6x + 8 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "두 수의 합이 -6이고 곱이 8인 쌍을 찾아 인수분해합니다: -2와 -4.",
        "workingOut": "\\((x-2)(x-4) \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "제외값을 구합니다.",
        "workingOut": "\\(x \\neq 2 \\text{ and } x \\neq 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q16e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x^2 - 9} \\).",
    "opts": [
      "\\(x \\leq -3 \\text{ or } x \\geq 3\\)",
      "\\(-3 \\leq x \\leq 3\\)",
      "\\(x \\geq 3\\)",
      "\\(x \\leq -3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\sqrt{x^2 - 9}\\)에서 루트 안의 식이 0 이상이어야 합니다.",
        "workingOut": "\\(x^2 - 9 \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "차의 제곱 형태로 인수분해합니다.",
        "workingOut": "\\((x-3)(x+3) \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "부등식의 해를 구합니다. 두 인수가 같은 부호여야 곱이 양수입니다: 두 인수 모두 양수이거나 모두 음수인 경우.",
        "workingOut": "\\(x \\leq -3 \\text{ or } x \\geq 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q16f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\dfrac{1}{\\sqrt{4 - x^2}} \\).",
    "opts": [
      "\\(-2 < x < 2\\)",
      "\\(-2 \\leq x \\leq 2\\)",
      "\\(x \\leq -2 \\text{ or } x \\geq 2\\)",
      "\\(x \\neq \\pm 2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(f(x) = \\frac{1}{\\sqrt{4-x^2}}\\)에서 분모의 루트 안이 양수여야 합니다 (분모이므로 0도 제외).",
        "workingOut": "\\(4 - x^2 > 0\\)",
        "graphData": null
      },
      {
        "explanation": "부등식을 인수분해합니다.",
        "workingOut": "\\((2-x)(2+x) > 0 \\implies (2-x)(2+x) > 0\\)",
        "graphData": null
      },
      {
        "explanation": "두 인수가 모두 양수인 경우: \\(2 - x > 0\\) 이고 \\(2 + x > 0\\) 이면 \\(-2 < x < 2\\)입니다.",
        "workingOut": "\\(-2 < x < 2\\)",
        "graphData": null
      }
    ]
  }
];
