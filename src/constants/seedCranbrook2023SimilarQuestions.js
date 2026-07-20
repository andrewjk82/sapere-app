export const CRANBROOK_2023_SIMILAR_QUESTIONS = [
  {
    "id": "cra2023s-mc1",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\((2,1), (2,3), (3,4), (4,5)\\)",
      "\\((2,1), (3,1), (4,2), (5,3)\\)",
      "\\((2,2), (3,3), (4,4), (5,5)\\)",
      "\\((2,1), (2,3), (3,4), (4,4)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((2,1), (2,3), (3,4), (4,5)\\).",
    "solutionSteps": [
      {
        "explanation": "Recall the definition of a one-to-many relation: at least one \\(x\\)-value pairs with more than one \\(y\\)-value, but each \\(y\\)-value pairs with only one \\(x\\)-value. Both directions must be checked.",
        "workingOut": "\\(\\text{one-to-many: one } x \\to \\text{many } y, text{ each } y \\leftarrow \\text{one } x\\)",
        "graphData": null
      },
      {
        "explanation": "Check option (A): \\(x = 2\\) maps to both \\(y = 1\\) and \\(y = 3\\), and the \\(y\\)-values \\(1, 3, 4, 5\\) are all distinct, so no \\(y\\) is repeated.",
        "workingOut": "\\(x=2 \\to y=1, 3 \\quad \\checkmark \\qquad y\\text{-values all distinct} \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Eliminate the others: (D) has \\(y=4\\) coming from two \\(x\\)-values, so it is many-to-many; (B) is many-to-one; (C) is one-to-one.",
        "workingOut": "\\((D): y=4 \\leftarrow x=3, 4 \\implies \\text{many-to-many} \\; \\times\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-mc2",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "Athlete P is taller and weighs more than Athlete Q.",
      "Athlete P is taller and weighs less than Athlete Q.",
      "Athlete P is shorter and weighs more than Athlete Q.",
      "Athlete P is shorter and weighs less than Athlete Q."
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is Athlete P is shorter and weighs more than Athlete Q..",
    "solutionSteps": [
      {
        "explanation": "Identify the axes: vertical is height (cm), horizontal is weight (kg). Comparing two plotted points means comparing vertical positions for height and horizontal positions for weight.",
        "workingOut": "\\(\\text{vertical} = \\text{height}, quad \\text{horizontal} = \\text{weight}\\)",
        "graphData": null
      },
      {
        "explanation": "Athlete P is plotted below Athlete Q, so P has the smaller vertical coordinate: P is shorter. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(P \\text{ below } Q \\implies \\text{height}_P < \\text{height}_Q\\)",
        "graphData": null
      },
      {
        "explanation": "Athlete P is plotted to the right of Athlete Q, so P has the larger horizontal coordinate: P weighs more.",
        "workingOut": "\\(P \\text{ right of } Q \\implies \\text{weight}_P > \\text{weight}_Q\\)",
        "graphData": null
      },
      {
        "explanation": "Combine both observations: P is shorter and weighs more than Q, which is option (C). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Answer: (C)}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 320,
        "boundingbox": [
          -1,
          11,
          12,
          -1.5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[12,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,0],[0,11]], {strokeColor:'black'});\nvar pts = [[1.5,2],[2.5,8],[4.5,7],[4.5,9],[5,6.5],[5,5],[6.5,4.5],[5.5,3],[9,9.5],[9,8.5],[11,6]];\nfor (var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:'', size:3, color:'#475569', fixed:true}); }\nboard.create('point', [4,6.5], {name:'Q', size:3, color:'#475569', fixed:true, label:{offset:[-14,2], fontSize:15}});\nboard.create('point', [7,4.5], {name:'P', size:3, color:'#475569', fixed:true, label:{offset:[10,2], fontSize:15}});\nboard.create('text', [4.5, -1.1, 'weight (kg)'], {fontSize:13});\nboard.create('text', [0.2, 10.6, 'height (cm)'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-mc3",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "Lowest mark \\(= 40\\), Median \\(= 70\\)",
      "Lowest mark \\(= 40\\), Median \\(= 65\\)",
      "Lowest mark \\(= 45\\), Median \\(= 70\\)",
      "Lowest mark \\(= 45\\), Median \\(= 65\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is Lowest mark \\(= 40\\), Median \\(= 70\\).",
    "solutionSteps": [
      {
        "explanation": "Translate the percentages into quartiles: 25% below 50 means \\(Q_1 = 50\\); 75% below 90 means \\(Q_3 = 90\\).",
        "workingOut": "\\(Q_1 = 50, quad Q_3 = 90, quad \\text{max} = 100\\)",
        "graphData": null
      },
      {
        "explanation": "For a symmetrical distribution the median is halfway between the quartiles, so average them. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Median} = \\dfrac{50 + 90}{2} = 70\\)",
        "graphData": null
      },
      {
        "explanation": "Symmetry means the extremes are equidistant from the median. The maximum is \\(100 - 70 = 30\\) above, so the minimum is 30 below.",
        "workingOut": "\\(\\text{Lowest mark} = 70 - 30 = 40\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-mc4",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(40\\)",
      "\\(56\\)",
      "\\(60\\)",
      "\\(64\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(60\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_3 = 3a + 3d = 24 \\implies a + d = 8\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_4 = 4a + 6d = 40 \\implies 2a + 3d = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(2(8 - d) + 3d = 20 \\implies 16 + d = 20 \\implies d = 4, \\; a = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 60. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(60\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-mc5",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(Domain: \\([-2, 2]\\), Range \\((-\\infty, infty)\\)\\)",
      "\\(Domain: \\((0, infty)\\), Range \\((-\\infty, 0) \\cup (0, infty)\\)\\)",
      "Domain: \\([0, infty)\\), Range \\((0, infty)\\)",
      "Domain: \\((2, infty)\\), Range \\((0, infty)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is Domain: \\((2, infty)\\), Range \\((0, infty)\\).",
    "solutionSteps": [
      {
        "explanation": "Form \\(f(g(x)) = \\sqrt{\\dfrac{1}{x-2}}\\). The square root needs a non-negative argument and the fraction cannot equal zero, so \\(\\dfrac{1}{x-2} > 0\\), which requires \\(x > 2\\).",
        "workingOut": "\\(f(g(x)) = \\sqrt{\\dfrac{1}{x-2}}, quad \\text{domain: } (2, infty)\\)",
        "graphData": null
      },
      {
        "explanation": "As \\(x\\) ranges over \\((2, infty)\\), the inner value \\(\\dfrac{1}{x-2}\\) covers \\((0, infty)\\), and so does its square root.",
        "workingOut": "\\(\\text{range of } f(g(x)) = (0, infty)\\)",
        "graphData": null
      },
      {
        "explanation": "Form \\(g(f(x)) = \\dfrac{1}{\\sqrt{x}-2}\\), which requires \\(x \\geq 0\\) and \\(\\sqrt{x} \\neq 2\\), i.e. \\(x \\neq 4\\). Its range: \\(\\sqrt{x} - 2\\) covers \\([-2, infty)\\setminus{0}\\), so the reciprocal covers \\((-\\infty, -\\tfrac{1}{2}] \\cup (0, infty)\\).",
        "workingOut": "\\(g(f(x)) = \\dfrac{1}{\\sqrt{x}-2}, quad \\text{domain: } [0, infty)\\setminus{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Intersect the two domains and the two ranges to find what is valid for both composites. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Domain: } (2, infty), quad \\text{Range: } (0, infty) \\implies \\text{(D)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-mc6",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(1.50\\)",
      "\\(1.25\\)",
      "\\(0.50\\)",
      "\\(0.25\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(0.50\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\dfrac{S_3}{S_\\infty} = 1 - r^3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1 - r^3 = 2 \\times \\dfrac{7}{16} = \\dfrac{7}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(r^3 = \\dfrac{1}{8} \\implies r = \\dfrac{1}{2} = 0.50\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0.50. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0.50\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-mc7",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(n^2 + n + 132 = 0\\)",
      "\\(n^2 - n - 132 = 0\\)",
      "\\(n^2 + n - 132 = 0\\)",
      "\\(n^2 - n + 132 = 0\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(n^2 - n - 132 = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\text{both blue}) = \\dfrac{5}{n} \\times \\dfrac{4}{n-1} = \\dfrac{20}{n(n-1)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\dfrac{20}{n(n-1)} = \\dfrac{5}{33}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n(n-1) = 132\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: n^2 - n - 132 = 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(n^2 - n - 132 = 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-mc8",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(a = 2, b = -\\dfrac{\\pi}{3}, k = -1\\)",
      "\\(a = 4, b = \\dfrac{2\\pi}{3}, k = -1\\)",
      "\\(a = 4, b = -\\dfrac{\\pi}{3}, k = 1\\)",
      "\\(a = 4, b = -\\dfrac{\\pi}{3}, k = -1\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(a = 4, b = -\\dfrac{\\pi}{3}, k = -1\\).",
    "solutionSteps": [
      {
        "explanation": "The velocity \\(\\dot{x} = -ka\\sin(at+b)\\) vanishes every half-period, i.e. at intervals of \\(\\dfrac{\\pi}{a}\\). Use the spacing of the stationary times.",
        "workingOut": "\\(\\dfrac{4\\pi}{12} - \\dfrac{\\pi}{12} = \\dfrac{\\pi}{4} = \\dfrac{\\pi}{a} \\implies a = 4\\)",
        "graphData": null
      },
      {
        "explanation": "This eliminates option (A). Differentiate twice for the acceleration and apply the initial condition.",
        "workingOut": "\\(\\ddot{x}(0) = -ka^2\\cos b = -16k\\cos b = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Test option (D) with \\(b = -\\dfrac{\\pi}{3}\\), \\(k = -1\\), using \\(\\cos\\!\\left(-\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}\\).",
        "workingOut": "\\(-16(-1) \\times \\dfrac{1}{2} = 8 \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Check a stationary time fits: \\(\\dot{x} = 0\\) requires \\(4t + b = n\\pi\\); with \\(b = -\\dfrac{\\pi}{3}\\) and \\(n = 0\\): \\(t = \\dfrac{\\pi}{12}\\) ✓. Option (C) gives \\(\\ddot{x}(0) = -8\\) (wrong sign) and (B) gives \\(-8\\) as well. The answer is (D).",
        "workingOut": "\\(4t - \\dfrac{\\pi}{3} = 0 \\implies t = \\dfrac{\\pi}{12} \\quad \\checkmark \\implies \\text{(D)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-mc9",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(4\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(3\\).",
    "solutionSteps": [
      {
        "explanation": "Solve \\(\\sin\\theta = \\dfrac{1}{2}\\) on \\([0, pi]\\): sine is positive in the first and second quadrants with related angle \\(\\dfrac{\\pi}{6}\\).",
        "workingOut": "\\(\\theta = \\dfrac{\\pi}{6}, \\; \\dfrac{5\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve \\(\\tan\\theta = 1\\) on \\([0, pi]\\): the first-quadrant solution is \\(\\dfrac{\\pi}{4}\\); the next, \\(\\dfrac{5\\pi}{4}\\), lies outside the interval, and tangent is negative in the second quadrant.",
        "workingOut": "\\(\\theta = \\dfrac{\\pi}{4} \\text{ only}\\)",
        "graphData": null
      },
      {
        "explanation": "Count the distinct solutions: \\(\\dfrac{\\pi}{6}, dfrac{\\pi}{4}, dfrac{5\\pi}{6}\\) — three in total, option (B).",
        "workingOut": "\\(3 \\text{ solutions} \\implies \\text{(B)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-mc10",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(P + Q + R\\)",
      "\\(P - Q + R\\)",
      "\\(-P + Q - R\\)",
      "\\(-P - Q - R\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(-P - Q - R\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_1^3 f\\,dx = -P\\)",
        "graphData": {
          "jsxGraph": {
            "width": 420,
            "height": 320,
            "boundingbox": [
              -5,
              4.5,
              5,
              -4.5
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'black'});\nvar f = function(x){ return 0.12*Math.pow(x,4) - 1.2*x*x + 1.4; };\nvar g = function(x){ return -0.09*Math.pow(x,3) + 0.7*x; };\nboard.create('functiongraph', [f, -4.2, 4.2], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [g, -4.4, 4.4], {strokeColor:'#15803d',strokeWidth:2});\nfor (var k=1;k<=3;k++){ board.create('text',[k,0.15,''+k],{fontSize:11}); board.create('text',[-k,0.15,'-'+k],{fontSize:11}); }\nboard.create('text', [-2.3, -1.1, 'P'], {fontSize:15});\nboard.create('text', [-0.7, 0.7, 'Q'], {fontSize:15});\nboard.create('text', [2.1, -1.4, 'R'], {fontSize:15});\nboard.create('text', [3.9, 3.2, 'y = f(x)'], {fontSize:12});\nboard.create('text', [3.6, -2.6, 'y = g(x)'], {fontSize:12});\nboard.create('text', [0.25, 4.1, 'y'], {fontSize:13});\nboard.create('text', [4.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int_0^1 g\\,dx = -Q\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\int_1^3 g\\,dx = -P - R\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -P - Q - R. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-P - Q - R\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -5,
          4.5,
          5,
          -4.5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'black'});\nvar f = function(x){ return 0.12*Math.pow(x,4) - 1.2*x*x + 1.4; };\nvar g = function(x){ return -0.09*Math.pow(x,3) + 0.7*x; };\nboard.create('functiongraph', [f, -4.2, 4.2], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [g, -4.4, 4.4], {strokeColor:'#15803d',strokeWidth:2});\nfor (var k=1;k<=3;k++){ board.create('text',[k,0.15,''+k],{fontSize:11}); board.create('text',[-k,0.15,'-'+k],{fontSize:11}); }\nboard.create('text', [-2.3, -1.1, 'P'], {fontSize:15});\nboard.create('text', [-0.7, 0.7, 'Q'], {fontSize:15});\nboard.create('text', [2.1, -1.4, 'R'], {fontSize:15});\nboard.create('text', [3.9, 3.2, 'y = f(x)'], {fontSize:12});\nboard.create('text', [3.6, -2.6, 'y = g(x)'], {fontSize:12});\nboard.create('text', [0.25, 4.1, 'y'], {fontSize:13});\nboard.create('text', [4.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q11",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(43\\%\\)",
      "\\(44\\\\)",
      "\\(44\\%\\)",
      "\\(45\\%\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(44\\%\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(120 + 95 + 60 + 40 + 25 + 10 = 350\\)",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 320,
            "boundingbox": [
              -0.6,
              145,
              7,
              -40
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[7,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,0],[0,135]], {strokeColor:'black'});\nboard.create('arrow', [[6.6,0],[6.6,135]], {strokeColor:'black'});\nvar freq = [120,95,60,40,25,10];\nvar labels = ['Slow Svc','Wrong','Cold','Rude','Billing','Other'];\nfor (var i=0;i<freq.length;i++){ var xc=i+0.6; board.create('polygon', [[xc-0.32,0],[xc+0.32,0],[xc+0.32,freq[i]],[xc-0.32,freq[i]]], {fillColor:'#94a3b8', fillOpacity:0.7, borders:{strokeColor:'#475569'}, vertices:{visible:false}, fixed:true}); board.create('text', [xc-0.3, -11, labels[i]], {fontSize:9}); }\nvar cum=0, total=350, prev=null;\nfor (var j=0;j<freq.length;j++){ cum+=freq[j]; var y=(cum/total)*130; var xp=j+0.6; var p=board.create('point',[xp,y],{name:'',size:2,color:'#1e293b',fixed:true}); if(prev){ board.create('segment',[prev,p],{strokeColor:'#1e293b',strokeWidth:1.5}); } prev=p; }\nfor (var t=0;t<=100;t+=20){ board.create('text',[6.7,(t/100)*130-3,t+'%'],{fontSize:9}); }\nboard.create('text', [-0.5, 134, 'Frequency'], {fontSize:11});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(95 + 60 = 155\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{155}{350} \\times 100\\% = 44.28\\ldots\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 44\\%. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(44\\%\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 320,
        "boundingbox": [
          -0.6,
          145,
          7,
          -40
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[7,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,0],[0,135]], {strokeColor:'black'});\nboard.create('arrow', [[6.6,0],[6.6,135]], {strokeColor:'black'});\nvar freq = [120,95,60,40,25,10];\nvar labels = ['Slow Svc','Wrong','Cold','Rude','Billing','Other'];\nfor (var i=0;i<freq.length;i++){ var xc=i+0.6; board.create('polygon', [[xc-0.32,0],[xc+0.32,0],[xc+0.32,freq[i]],[xc-0.32,freq[i]]], {fillColor:'#94a3b8', fillOpacity:0.7, borders:{strokeColor:'#475569'}, vertices:{visible:false}, fixed:true}); board.create('text', [xc-0.3, -11, labels[i]], {fontSize:9}); }\nvar cum=0, total=350, prev=null;\nfor (var j=0;j<freq.length;j++){ cum+=freq[j]; var y=(cum/total)*130; var xp=j+0.6; var p=board.create('point',[xp,y],{name:'',size:2,color:'#1e293b',fixed:true}); if(prev){ board.create('segment',[prev,p],{strokeColor:'#1e293b',strokeWidth:1.5}); } prev=p; }\nfor (var t=0;t<=100;t+=20){ board.create('text',[6.7,(t/100)*130-3,t+'%'],{fontSize:9}); }\nboard.create('text', [-0.5, 134, 'Frequency'], {fontSize:11});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q12",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(y = \\dfrac{9 - x}{4}\\) (equivalently \\(x + 4y - 9 = 0\\))"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(y = \\dfrac{9 - x}{4}\\) (equivalently \\(x + 4y - 9 = 0\\)).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\dfrac{dy}{dx} = 3x^2 + 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(m_{\\text{tangent}} = 3(1)^2 + 1 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(m_{\\text{normal}} = -\\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(y = \\dfrac{9 - x}{4}\\) (equivalently \\(x + 4y - 9 = 0\\)). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = \\dfrac{9 - x}{4}\\) (equivalently \\(x + 4y - 9 = 0\\))",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q13",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(15\\) hours",
      "\\(15\\) hours + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(15\\) hours.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(t = \\dfrac{k}{n}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(10 = \\dfrac{k}{6} \\implies k = 60\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t = \\dfrac{60}{4} = 15 \\text{ hours}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(15\\) hours. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(15\\) hours",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q14a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-\\dfrac{dy}{dx} = \\dfrac{3(\\ln x)^2}{x}\\)",
      "\\(\\dfrac{dy}{dx} = \\dfrac{3(\\ln x)^2}{x}\\)",
      "\\(\\frac{1}{dx} = \\dfrac{3(\\ln x)^2}{x}\\)",
      "\\(\\frac{dx}{dy} = \\dfrac{3(\\ln x)^2}{x}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} = \\dfrac{3(\\ln x)^2}{x}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = u^3, quad u = \\ln x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\dfrac{dy}{du} = 3u^2, quad \\dfrac{du}{dx} = \\dfrac{1}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\dfrac{3(\\ln x)^2}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{dy}{dx} = \\dfrac{3(\\ln x)^2}{x}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\dfrac{3(\\ln x)^2}{x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q14b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-0.3333333333333333\\)",
      "\\(-0.6666666666666667\\)",
      "\\(\\dfrac{1}{3}\\)",
      "\\(1.3333333333333333\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Simplify the integrand using the logarithm power law \\(\\ln(x^3) = 3\\ln x\\), so the square gives \\(9(\\ln x)^2\\), cancelling the 9 in the denominator.",
        "workingOut": "\\(\\dfrac{(\\ln x^3)^2}{9x} = \\dfrac{9(\\ln x)^2}{9x} = \\dfrac{(\\ln x)^2}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use part (a) in reverse: since \\(\\dfrac{d}{dx}(\\ln x)^3 = \\dfrac{3(\\ln x)^2}{x}\\), dividing by 3 gives an antiderivative of the integrand.",
        "workingOut": "\\(\\int \\dfrac{(\\ln x)^2}{x}\\,dx = \\dfrac{(\\ln x)^3}{3} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the fundamental theorem of calculus at the limits \\(x = e\\) and \\(x = 1\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\left[\\dfrac{(\\ln x)^3}{3}\\right]_1^e = \\dfrac{1^3}{3} - \\dfrac{0^3}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q15",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-F(x) = \\tan x - x + \\dfrac{\\pi}{4} - 1\\)",
      "\\(F(x) = \\tan x - x + \\dfrac{\\pi}{4} - 1\\)",
      "\\(F(x) = \\tan x - x + \\frac{1}{4} - 1\\)",
      "\\(F(x) = \\tan x - x + \\frac{4}{\\pi} - 1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(F(x) = \\tan x - x + \\dfrac{\\pi}{4} - 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\tan^2 x = \\sec^2 x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(F(x) = \\tan x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1 - \\dfrac{\\pi}{4} + C = 0 \\implies C = \\dfrac{\\pi}{4} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: F(x) = \\tan x - x + \\dfrac{\\pi}{4} - 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(F(x) = \\tan x - x + \\dfrac{\\pi}{4} - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q16a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(Even\\)",
      "\\(Odd\\)",
      "\\(Neither\\)",
      "Not enough information"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(Even\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(x) = -\\sin\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{2}\\right) = \\sin\\dfrac{x}{2}(0) + \\cos\\dfrac{x}{2}(1) = \\cos\\dfrac{x}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f(x) = -\\cos\\dfrac{x}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Even. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Even\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q16b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(4\\) square units",
      "\\(4\\) square units + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(4\\) square units.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(x) = -\\cos\\dfrac{x}{2} \\leq 0 \\text{ on } [-\\pi, pi]\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Area} = \\int_{-\\pi}^{\\pi} \\cos\\dfrac{x}{2}\\,dx = 2\\int_0^{\\pi} \\cos\\dfrac{x}{2}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= 2\\left[2\\sin\\dfrac{x}{2}\\right]_0^{\\pi} = 4\\left(\\sin\\dfrac{\\pi}{2} - 0\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\) square units. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(4\\) square units",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q17a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(m = 0.2674\\)",
      "\\(m = 0.2674 + 1\\)",
      "\\(m = 0.4674\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(m = 0.2674\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(0.7 + m + 0.03 + 0.002 + 0.0005 + 0.0001 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(0.7 + 0.03 + 0.002 + 0.0005 + 0.0001 = 0.7326\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(m = 1 - 0.7326 = 0.2674\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: m = 0.2674. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(m = 0.2674\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q17b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(E(X) = 15.185\\), so expected loss \\(= 25 - 15.185 = 9.815 \\approx \\\\)9.82"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(E(X) = 15.185\\), so expected loss \\(= 25 - 15.185 = 9.815 \\approx \\\\)9.82.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(E(X) = \\sum x\\,P(X = x)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(E(X) = 0(0.7) + 25(0.2674) + 100(0.03) + 500(0.002) + 5000(0.0005) + 20000(0.0001)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= 0 + 6.685 + 3 + 1 + 2.5 + 2 = 15.185\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(E(X) = 15.185\\), so expected loss \\(= 25 - 15.185 = 9.815 \\approx \\\\)9.82. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(E(X) = 15.185\\), so expected loss \\(= 25 - 15.185 = 9.815 \\approx \\\\)9.82",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q17c",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(\\text{Var}(X) \\approx 53236.54\\)",
      "\\(\\text{Var}(X) \\approx 53236.54 + 1\\)",
      "\\(\\text{Var}(X) \\approx 54446.54\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(\\text{Var}(X) \\approx 53236.54\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(E(X^2) = \\sum x^2\\,P(X = x)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(E(X^2) = 25^2(0.2674) + 100^2(0.03) + 500^2(0.002) + 5000^2(0.0005) + 20000^2(0.0001)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= 167.125 + 300 + 500 + 12500 + 40000 = 53467.125\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\text{Var}(X) \\approx 53236.54. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\text{Var}(X) \\approx 53236.54\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q18a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(30°\\)C",
      "\\(30°\\)C + 1",
      "\\(40°\\)C",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(30°\\)C.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T = 190 - 160 \\times (0.85)^{0}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(T = 190 - 160 = 30\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(T_{\\text{initial}} = 30\\,°\\text{C}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(30°\\)C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(30°\\)C",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q18b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\approx 1.43\\) °C per minute",
      "\\(\\approx 1.43\\) °C per minute + 1",
      "\\(\\approx 1.44\\) °C per minute",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\approx 1.43\\) °C per minute.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Average rate} = \\dfrac{T(60) - T(20)}{60 - 20}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(T(20) = 190 - 160(0.85)^5 = 190 - 160(0.44371) = 119.0072\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(T(60) = 190 - 160(0.85)^{15} = 190 - 160(0.08735) = 176.0233\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\approx 1.43\\) °C per minute. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\approx 1.43\\) °C per minute",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q18c",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-10:02 am (about 47 minutes after switch-on)\\)",
      "\\(10:02 am (about 47 minutes after switch-on)\\)",
      "\\(10:02 am (about 47 minutes after switch-on) + 1\\)",
      "\\(10:04 am (about 47 minutes after switch-on)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(10:02 am (about 47 minutes after switch-on)\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the model using \\(\\dfrac{d}{dt}a^{kt} = k\\ln a \\cdot a^{kt}\\) with \\(a = 0.85\\) and \\(k = 0.25\\).",
        "workingOut": "\\(\\dfrac{dT}{dt} = -40\\ln(0.85)\\,(0.85)^{0.25t}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the constant: \\(\\ln(0.85) \\approx -0.16252\\), so \\(-40\\ln(0.85) \\approx 6.5008 > 0\\) — the oven heats continuously but ever more slowly.",
        "workingOut": "\\(\\dfrac{dT}{dt} \\approx 6.5008\\,(0.85)^{0.25t}\\)",
        "graphData": null
      },
      {
        "explanation": "Take natural logarithms; dividing by the negative \\(\\ln(0.85)\\) reverses the inequality. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(0.25t \\geq \\dfrac{\\ln(0.15383)}{\\ln(0.85)} = \\dfrac{-1.8719}{-0.16252} = 11.518\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q19",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-\\dfrac{48}{120} = \\dfrac{2}{5}\\)",
      "\\(\\dfrac{48}{120} = \\dfrac{2}{5}\\)",
      "\\(\\frac{120}{48} = \\dfrac{2}{5}\\)",
      "\\(\\frac{1}{120} = \\dfrac{2}{5}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{48}{120} = \\dfrac{2}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\text{Guitar} \\mid \\text{Piano}) = \\dfrac{B}{B + 16} = 0.75\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(B = 0.75B + 12 \\implies 0.25B = 12 \\implies B = 48\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(48 + 16 + 22 + 34 = 120\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{48}{120} = \\dfrac{2}{5}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{48}{120} = \\dfrac{2}{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q20",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-\\dfrac{N}{N_0} = 10^{0.6} \\approx 3.98 \\approx 4\\)",
      "\\(\\dfrac{N}{N_0} = 10^{0.6} \\approx 3.98 \\approx 4\\)",
      "\\(\\frac{1}{N_0} = 10^{0.6} \\approx 3.98 \\approx 4\\)",
      "\\(\\frac{N_0}{N} = 10^{0.6} \\approx 3.98 \\approx 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{N}{N_0} = 10^{0.6} \\approx 3.98 \\approx 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(12 = 20\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right) = 0.6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{N}{N_0} = 10^{0.6}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{N}{N_0} = 10^{0.6} \\approx 3.98 \\approx 4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{N}{N_0} = 10^{0.6} \\approx 3.98 \\approx 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q21",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "Income \\(= 80n + 60\\); Expenses \\(= 30n + 220\\)",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is Income \\(= 80n + 60\\); Expenses \\(= 30n + 220\\).",
    "solutionSteps": [
      {
        "explanation": "Find the intercept using the mean point \\((\\bar{n}, bar{y})\\), which always lies on the regression line.",
        "workingOut": "\\(a = 300 - 80(3) = 60 \\implies \\text{Income} = 80n + 60\\)",
        "graphData": null
      },
      {
        "explanation": "Model the expenses: \\\\(250 in week 1, increasing \\\\)30 each week — a linear rule with gradient 30 through \\((1, 250)\\).",
        "workingOut": "\\(E = 250 + 30(n-1) = 30n + 220\\)",
        "graphData": null
      },
      {
        "explanation": "Draw both lines neatly over Leo's five income data points \\((1,150), (2,250), (3,250), (4,350), (5,500)\\). The income regression line (blue) passes through the mean point \\((3, 300)\\); the expenses line (green) starts at \\((1, 250)\\) and rises \\(30 each week.\\).",
        "workingOut": "Income \\(= 80n + 60\\); Expenses \\(= 30n + 220\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 320,
            "boundingbox": [
              -0.5,
              580,
              6,
              -60
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-60],[0,580]], {strokeColor:'black'});\nvar pts = [[1,150],[2,250],[3,250],[4,350],[5,500]];\nfor (var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:'', size:2.5, color:'#64748b', fixed:true}); }\nboard.create('functiongraph', [function(x){ return 80*x+60; }, 0, 5.5], {strokeColor:'blue',strokeWidth:2,name:'Income',withLabel:true});\nboard.create('functiongraph', [function(x){ return 30*x+220; }, 0, 5.5], {strokeColor:'green',strokeWidth:2,name:'Expenses',withLabel:true});\nboard.create('text', [5.4, 40, 'n (weeks)'], {fontSize:13});\nboard.create('text', [0.2, 560, 'Amount ($)'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q22a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\approx 9.6\\) units³",
      "\\(\\approx 9.6\\) units³ + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\approx 9.6\\) units³.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Volume} = \\int_0^3 V\\,dt, quad h = 1\\)",
        "graphData": {
          "jsxGraph": {
            "width": 380,
            "height": 300,
            "boundingbox": [
              -0.5,
              9,
              4,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1],[0,9]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return 8*Math.exp(-Math.sqrt(t)); }, 0.0001, 3.6], {strokeColor:'blue',strokeWidth:2});\nvar pts=[[0,8],[1,2.94],[2,1.95],[3,1.42]];\nvar nm=['(0, 8)','(1, 2.94)','(2, 1.95)','(3, 1.42)'];\nvar off=[[8,8],[10,8],[10,8],[10,4]];\nfor(var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:nm[i], size:2.5, color:'red', fixed:true, label:{offset:off[i], fontSize:11}}); }\nboard.create('text', [3.6, 0.35, 't'], {fontSize:14});\nboard.create('text', [0.25, 8.6, 'V'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int_0^3 V\\,dt \\approx \\dfrac{1}{2}\\bigl[f_0 + 2f_1 + 2f_2 + f_3\\bigr]\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\approx \\dfrac{1}{2}\\bigl[8 + 2(2.94) + 2(1.95) + 1.42\\bigr] = \\dfrac{1}{2}(19.2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\approx 9.6\\) units³. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\approx 9.6\\) units³",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 300,
        "boundingbox": [
          -0.5,
          9,
          4,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1],[0,9]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return 8*Math.exp(-Math.sqrt(t)); }, 0.0001, 3.6], {strokeColor:'blue',strokeWidth:2});\nvar pts=[[0,8],[1,2.94],[2,1.95],[3,1.42]];\nvar nm=['(0, 8)','(1, 2.94)','(2, 1.95)','(3, 1.42)'];\nvar off=[[8,8],[10,8],[10,8],[10,4]];\nfor(var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:nm[i], size:2.5, color:'red', fixed:true, label:{offset:off[i], fontSize:11}}); }\nboard.create('text', [3.6, 0.35, 't'], {fontSize:14});\nboard.create('text', [0.25, 8.6, 'V'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q22b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "Because the curve is concave up, each trapezium lies above the curve, so the rule overestimates the true volume. An overestimate triggers the safety valve early — before the true maximum volume is reached — so the balloon will not burst.",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is Because the curve is concave up, each trapezium lies above the curve, so the rule overestimates the true volume. An overestimate triggers the safety valve early — before the true maximum volume is reached — so the balloon will not burst..",
    "solutionSteps": [
      {
        "explanation": "Identify the concavity: the flow-rate curve decreases steeply then flattens, so it is concave up. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(V = 8e^{-\\sqrt{t}} \\text{ is concave up}\\)",
        "graphData": null
      },
      {
        "explanation": "For a concave-up curve, every chord lies above the curve, so each trapezium overestimates the area beneath.",
        "workingOut": "\\(\\text{trapezoidal estimate} > \\text{true volume}\\)",
        "graphData": null
      },
      {
        "explanation": "Interpret in context: acting on an overestimate, the valve shuts off before the true maximum volume is reached — the safe direction — so the method is valid.",
        "workingOut": "\\(\\text{overestimate} \\implies \\text{valve activates early} \\implies \\text{no burst} \\quad \\blacksquare\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 300,
        "boundingbox": [
          -0.5,
          9,
          4,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1],[0,9]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return 8*Math.exp(-Math.sqrt(t)); }, 0.0001, 3.6], {strokeColor:'blue',strokeWidth:2});\nvar pts=[[0,8],[1,2.94],[2,1.95],[3,1.42]];\nvar nm=['(0, 8)','(1, 2.94)','(2, 1.95)','(3, 1.42)'];\nvar off=[[8,8],[10,8],[10,8],[10,4]];\nfor(var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:nm[i], size:2.5, color:'red', fixed:true, label:{offset:off[i], fontSize:11}}); }\nboard.create('text', [3.6, 0.35, 't'], {fontSize:14});\nboard.create('text', [0.25, 8.6, 'V'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q23a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(A = 2\\pi r^2 + 2\\pi rh\\); substituting \\(h = \\dfrac{V}{\\pi r^2}\\) gives \\(A = 2\\pi r^2 + \\dfrac{2V}{r}\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(A = 2\\pi r^2 + 2\\pi rh\\); substituting \\(h = \\dfrac{V}{\\pi r^2}\\) gives \\(A = 2\\pi r^2 + \\dfrac{2V}{r}\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{ends: } 2\\pi r^2, quad \\text{curved: } 2\\pi r h\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A = 2\\pi r^2 + 2\\pi rh\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(h = \\dfrac{V}{\\pi r^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(A = 2\\pi r^2 + 2\\pi rh\\); substituting \\(h = \\dfrac{V}{\\pi r^2}\\) gives \\(A = 2\\pi r^2 + \\dfrac{2V}{r}\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(A = 2\\pi r^2 + 2\\pi rh\\); substituting \\(h = \\dfrac{V}{\\pi r^2}\\) gives \\(A = 2\\pi r^2 + \\dfrac{2V}{r}\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q23b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Setting \\(\\dfrac{dA}{dr} = 0\\) gives \\(r^3 = \\dfrac{V}{2\\pi}\\), and \\(\\dfrac{d^2A}{dr^2} > 0\\) confirms a minimum."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is Setting \\(\\dfrac{dA}{dr} = 0\\) gives \\(r^3 = \\dfrac{V}{2\\pi}\\), and \\(\\dfrac{d^2A}{dr^2} > 0\\) confirms a minimum..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A(r) = 2\\pi r^2 + 2V r^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\dfrac{dA}{dr} = 4\\pi r - 2V r^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(4\\pi r = \\dfrac{2V}{r^2} \\implies 4\\pi r^3 = 2V \\implies r^3 = \\dfrac{V}{2\\pi}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Setting \\(\\dfrac{dA}{dr} = 0\\) gives \\(r^3 = \\dfrac{V}{2\\pi}\\), and \\(\\dfrac{d^2A}{dr^2} > 0\\) confirms a minimum.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Setting \\(\\dfrac{dA}{dr} = 0\\) gives \\(r^3 = \\dfrac{V}{2\\pi}\\), and \\(\\dfrac{d^2A}{dr^2} > 0\\) confirms a minimum.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q23c",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(h \\approx 2.34\\) m",
      "\\(h \\approx 2.34\\) m + 1",
      "\\(h \\approx 4.44\\) m",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(h \\approx 2.34\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(r = \\sqrt[3]{\\dfrac{10}{2\\pi}} = \\sqrt[3]{1.59155} \\approx 1.16755 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(h = \\dfrac{10}{\\pi (1.16755)^2} = \\dfrac{10}{4.28227}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(h \\approx 2.34 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(h \\approx 2.34\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(h \\approx 2.34\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q24a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(MB = 200\\) m",
      "\\(MB = 200\\) m + 1",
      "\\(MB = 400\\) m",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(MB = 200\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\angle AMB = 130° - 50° = 80°\\)",
        "graphData": {
          "geometry": {
            "width": 280,
            "points": {
              "T": [
                0,
                4.2
              ],
              "M": [
                0,
                0
              ],
              "A": [
                3,
                2
              ],
              "B": [
                3.5,
                -2.4
              ]
            },
            "segments": [
              {
                "from": "M",
                "to": "T"
              },
              {
                "from": "M",
                "to": "A"
              },
              {
                "from": "M",
                "to": "B"
              },
              {
                "from": "T",
                "to": "A"
              },
              {
                "from": "T",
                "to": "B"
              }
            ],
            "sideLabels": [
              {
                "between": [
                  "M",
                  "A"
                ],
                "text": "A (050°)"
              },
              {
                "between": [
                  "M",
                  "B"
                ],
                "text": "B (130°)"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(11818 = \\dfrac{1}{2} \\times 120 \\times MB \\times \\sin 80°\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(MB = \\dfrac{2 \\times 11818}{120\\sin 80°} = \\dfrac{23636}{118.18}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(MB = 200\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(MB = 200\\) m",
        "graphData": null
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "T": [
            0,
            4.2
          ],
          "M": [
            0,
            0
          ],
          "A": [
            3,
            2
          ],
          "B": [
            3.5,
            -2.4
          ]
        },
        "segments": [
          {
            "from": "M",
            "to": "T"
          },
          {
            "from": "M",
            "to": "A"
          },
          {
            "from": "M",
            "to": "B"
          },
          {
            "from": "T",
            "to": "A"
          },
          {
            "from": "T",
            "to": "B"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "M",
              "A"
            ],
            "text": "A (050°)"
          },
          {
            "between": [
              "M",
              "B"
            ],
            "text": "B (130°)"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q24b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(x \\approx 69\\) m",
      "\\(x \\approx 69\\) m + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(x \\approx 69\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(TA = \\sqrt{x^2 + 120^2}, qquad TB = \\sqrt{x^2 + 200^2}\\)",
        "graphData": {
          "geometry": {
            "width": 280,
            "points": {
              "T": [
                0,
                4.2
              ],
              "M": [
                0,
                0
              ],
              "A": [
                3,
                2
              ],
              "B": [
                3.5,
                -2.4
              ]
            },
            "segments": [
              {
                "from": "M",
                "to": "T"
              },
              {
                "from": "M",
                "to": "A"
              },
              {
                "from": "M",
                "to": "B"
              },
              {
                "from": "T",
                "to": "A"
              },
              {
                "from": "T",
                "to": "B"
              }
            ],
            "sideLabels": [
              {
                "between": [
                  "M",
                  "A"
                ],
                "text": "A (050°)"
              },
              {
                "between": [
                  "M",
                  "B"
                ],
                "text": "B (130°)"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u + v = 350\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(v^2 - u^2 = 40000 - 14400 = 25600 = (v-u)(350)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x \\approx 69\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x \\approx 69\\) m",
        "graphData": null
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "T": [
            0,
            4.2
          ],
          "M": [
            0,
            0
          ],
          "A": [
            3,
            2
          ],
          "B": [
            3.5,
            -2.4
          ]
        },
        "segments": [
          {
            "from": "M",
            "to": "T"
          },
          {
            "from": "M",
            "to": "A"
          },
          {
            "from": "M",
            "to": "B"
          },
          {
            "from": "T",
            "to": "A"
          },
          {
            "from": "T",
            "to": "B"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "M",
              "A"
            ],
            "text": "A (050°)"
          },
          {
            "between": [
              "M",
              "B"
            ],
            "text": "B (130°)"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q25",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "answer": "\\(y = 2 - \\dfrac{2}{9}(x-6)^2\\); vertex \\((6, 2)\\); \\(x\\)-intercepts \\((3, 0)\\) and \\((9, 0)\\); \\(y\\)-intercept \\((0, -6)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(y = 2 - \\dfrac{2}{9}(x-6)^2\\); vertex \\((6, 2)\\); \\(x\\)-intercepts \\((3, 0)\\) and \\((9, 0)\\); \\(y\\)-intercept \\((0, -6)\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the horizontal dilation by factor \\(\\dfrac{3}{2}\\) by replacing \\(x\\) with \\(\\dfrac{2x}{3}\\), then factor the bracket.",
        "workingOut": "\\(y = \\left(\\dfrac{2x}{3} - 4\\right)^2 = \\dfrac{4}{9}(x-6)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Find the intercepts: set \\(y = 0\\) for the \\(x\\)-intercepts and \\(x = 0\\) for the \\(y\\)-intercept. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\((x-6)^2 = 9 \\implies x = 3, 9; \\quad x = 0 \\implies y = 2 - \\dfrac{2}{9}(36) = -6\\)",
        "graphData": null
      },
      {
        "explanation": "Sketch the concave-down parabola \\(y = 2 - \\dfrac{2}{9}(x-6)^2\\) with maximum vertex \\((6, 2)\\), \\(x\\)-intercepts \\((3, 0)\\) and \\((9, 0)\\), and \\(y\\)-intercept \\((0, -6)\\).",
        "workingOut": "\\(\\(y = 2 - \\dfrac{2}{9}(x-6)^2\\); vertex \\((6, 2)\\); \\(x\\)-intercepts \\((3, 0)\\) and \\((9, 0)\\); \\(y\\)-intercept \\((0, -6)\\).\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 300,
            "boundingbox": [
              -1,
              3.5,
              10,
              -7
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[10,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-7],[0,3.5]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 2 - (2/9)*Math.pow(x-6,2); }, -1, 10], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [6,2], {name:'(6, 2)', size:3, color:'red', label:{offset:[8,10]}});\nboard.create('point', [3,0], {name:'(3, 0)', size:3, color:'red', label:{offset:[-10,12]}});\nboard.create('point', [9,0], {name:'(9, 0)', size:3, color:'red', label:{offset:[10,12]}});\nboard.create('point', [0,-6], {name:'(0, -6)', size:3, color:'red', label:{offset:[8,-6]}});\nboard.create('text', [9.5, 0.4, 'x'], {fontSize:14});\nboard.create('text', [0.3, 3.2, 'y'], {fontSize:14});\nboard.create('text', [-0.4, -0.5, 'O'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cra2023s-q26a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(t = 2\\) s and \\(t = 4\\) s",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(t = 2\\) s and \\(t = 4\\) s.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(v = \\dfrac{6t}{t^2+8} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(v = \\dfrac{6t - t^2 - 8}{t^2+8} = \\dfrac{-(t^2 - 6t + 8)}{t^2+8}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(v = \\dfrac{-(t-2)(t-4)}{t^2+8}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(t = 2\\) s and \\(t = 4\\) s. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(t = 2\\) s and \\(t = 4\\) s",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q26b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "-Distance \\(= 2 - \\ln\\!\\left(\\dfrac{27}{8}\\right) \\approx 0.78\\) m",
      "Distance \\(= 2 - \\ln\\!\\left(\\dfrac{27}{8}\\right) \\approx 0.78\\) m",
      "Distance \\(= 2 - \\ln\\!\\left(\\frac{1}{8}\\right) \\approx 0.78\\) m",
      "Distance \\(= 2 - \\ln\\!\\left(\\frac{8}{27}\\right) \\approx 0.78\\) m"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is Distance \\(= 2 - \\ln\\!\\left(\\dfrac{27}{8}\\right) \\approx 0.78\\) m.",
    "solutionSteps": [
      {
        "explanation": "Check for a change of direction on \\((0, 2)\\): in \\(v = \\dfrac{-(t-2)(t-4)}{t^2+8}\\) both brackets are negative there, so \\(v < 0\\) throughout — the motion is one-directional.",
        "workingOut": "\\(0 < t < 2: \\; v < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Since there is no turn-around, the distance equals \\(|x(2) - x(0)|\\). Evaluate both positions. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x(0) = 3\\ln 8, qquad x(2) = 3\\ln 12 - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the displacement, combining logs with \\(3\\ln\\frac{3}{2} = \\ln\\frac{27}{8}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x(2) - x(0) = 3\\ln\\dfrac{12}{8} - 2 = \\ln\\dfrac{27}{8} - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(\\ln\\dfrac{27}{8} \\approx 1.216 < 2\\), the displacement is negative; take the absolute value for the distance.",
        "workingOut": "\\(\\text{Distance} = 2 - \\ln\\dfrac{27}{8} \\approx 0.78 \\text{ m}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q26c",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "v_{\\max} = \\dfrac{3\\sqrt{2}}{4} + 1 \\approx 0.06\\) m/s, at \\(t = 2\\sqrt{2}",
      "v_{\\max} = \\dfrac{3\\sqrt{2}}{4} - 1 \\approx 0.06\\) m/s, at \\(t = 2\\sqrt{2}",
      "v_{\\max} = \\dfrac{3\\sqrt{2}}{4} - 1 \\approx 0.06\\) m/s, at \\(t = 2\\sqrt{2} + 1",
      "v_{\\max} = \\dfrac{4\\sqrt{4}}{4} - 1 \\approx 0.06\\) m/s, at \\(t = 4\\sqrt{4}"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is v_{\\max} = \\dfrac{3\\sqrt{2}}{4} - 1 \\approx 0.06\\) m/s, at \\(t = 2\\sqrt{2}.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a = \\dfrac{6(t^2+8) - 6t(2t)}{(t^2+8)^2} = \\dfrac{6(8 - t^2)}{(t^2+8)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(8 - t^2 = 0 \\implies t = 2\\sqrt{2} \\;\\; (t \\geq 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{velocity increases then decreases} \\implies \\text{maximum at } t = 2\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: v_{\\max} = \\dfrac{3\\sqrt{2}}{4} - 1 \\approx 0.06\\) m/s, at \\(t = 2\\sqrt{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "v_{\\max} = \\dfrac{3\\sqrt{2}}{4} - 1 \\approx 0.06\\) m/s, at \\(t = 2\\sqrt{2}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q27a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Local maximum at \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\); horizontal point of inflection at \\((3, 1)\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is Local maximum at \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\); horizontal point of inflection at \\((3, 1)\\)..",
    "solutionSteps": [
      {
        "explanation": "Differentiate with the product rule: \\(u = 2x\\), \\(v = \\left(1-\\dfrac{x}{3}\\right)^3\\), where the chain rule gives \\(v' = 3\\left(1-\\dfrac{x}{3}\\right)^2\\left(-\\dfrac{1}{3}\\right)\\).",
        "workingOut": "\\(g'(x) = 2\\left(1-\\dfrac{x}{3}\\right)^3 - 2x\\left(1-\\dfrac{x}{3}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common \\(2\\left(1-\\dfrac{x}{3}\\right)^2\\) and simplify the remaining bracket. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(g'(x) = 2\\left(1-\\dfrac{x}{3}\\right)^2\\left[1 - \\dfrac{x}{3} - x\\right] = 2\\left(1-\\dfrac{x}{3}\\right)^2\\left(1 - \\dfrac{4x}{3}\\right) \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(g'(x) = 0\\): the squared factor gives \\(x = 3\\) (a repeated zero), and the linear factor gives \\(x = \\dfrac{3}{4}\\).",
        "workingOut": "\\(x = 3 \\;(\\text{double}) \\quad \\text{or} \\quad x = \\dfrac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Classify \\(x = \\dfrac{3}{4}\\) with a sign test: the sign of \\(g'\\) follows \\(\\left(1 - \\dfrac{4x}{3}\\right)\\), which is positive before and negative after — a local maximum. Evaluate \\(g\\left(\\dfrac{3}{4}\\right)\\).",
        "workingOut": "\\(g\\left(\\dfrac{3}{4}\\right) = \\dfrac{3}{2}\\left(\\dfrac{3}{4}\\right)^3 + 1 = \\dfrac{81}{128} + 1 = \\dfrac{209}{128}\\)",
        "graphData": null
      },
      {
        "explanation": "Classify \\(x = 3\\): the squared factor means \\(g'\\) does not change sign (\\(g' < 0\\) on both sides), so it is a horizontal point of inflection at \\((3, 1)\\).",
        "workingOut": "\\(g(3) = 2(3)(0)^3 + 1 = 1 \\implies \\text{horizontal POI } (3, 1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q27b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(g(4) = \\dfrac{19}{27} > 0\\) and \\(g(5) = -\\dfrac{53}{27} < 0\\); since \\(g\\) is continuous and changes sign, it must cross the \\(x\\)-axis between \\(x=4\\) and \\(x=5\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(g(4) = \\dfrac{19}{27} > 0\\) and \\(g(5) = -\\dfrac{53}{27} < 0\\); since \\(g\\) is continuous and changes sign, it must cross the \\(x\\)-axis between \\(x=4\\) and \\(x=5\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(g(4) = 8\\left(-\\dfrac{1}{3}\\right)^3 + 1 = \\dfrac{19}{27} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(g(5) = 10\\left(-\\dfrac{2}{3}\\right)^3 + 1 = -\\dfrac{53}{27} < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(g \\text{ continuous}, \\; g(4) > 0, \\; g(5) < 0 \\implies \\exists\\, c \\in (4,5): g(c) = 0 \\quad \\blacksquare\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(g(4) = \\dfrac{19}{27} > 0\\) and \\(g(5) = -\\dfrac{53}{27} < 0\\); since \\(g\\) is continuous and changes sign, it must cross the \\(x\\)-axis between \\(x=4\\) and \\(x=5\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(g(4) = \\dfrac{19}{27} > 0\\) and \\(g(5) = -\\dfrac{53}{27} < 0\\); since \\(g\\) is continuous and changes sign, it must cross the \\(x\\)-axis between \\(x=4\\) and \\(x=5\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q27c",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "answer": "Curve starts at \\((0, 1)\\), rises to the local maximum \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\), falls through the horizontal point of inflection \\((3, 1)\\), continues falling and crosses the \\(x\\)-axis between \\(x = 4\\) and \\(x = 5\\), ending at \\(\\left(5, -\\dfrac{53}{27}\\right)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Curve starts at \\((0, 1)\\), rises to the local maximum \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\), falls through the horizontal point of inflection \\((3, 1)\\), continues falling and crosses the \\(x\\)-axis between \\(x = 4\\) and \\(x = 5\\), ending at \\(\\left(5, -\\dfrac{53}{27}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Mark the stationary points from part (a): local maximum \\(\\left(\\dfrac{3}{4}, dfrac{209}{128}\\right) \\approx (0.75, 1.63)\\) and the horizontal point of inflection \\((3, 1)\\).",
        "workingOut": "\\(\\left(\\tfrac{3}{4}, tfrac{209}{128}\\right) \\text{ max}, quad (3, 1) \\text{ horizontal POI}\\)",
        "graphData": null
      },
      {
        "explanation": "Mark the approximate \\(x\\)-intercept between 4 and 5 (part (b)) and the endpoint \\(g(5) \\approx -1.96\\).",
        "workingOut": "\\(x\\text{-intercept} \\in (4, 5), quad g(5) = -\\tfrac{53}{27}\\)",
        "graphData": null
      },
      {
        "explanation": "Join smoothly: rising on \\(\\left(0, dfrac{3}{4}\\right)\\), falling on \\(\\left(\\dfrac{3}{4}, 3\\right)\\), flattening at \\((3,1)\\), then falling through the axis to \\((5, -1.96)\\).",
        "workingOut": "\\((0,1) \\nearrow (0.75, 1.63) \\searrow (3,1) \\searrow (5, -1.96)\\)",
        "graphData": null
      },
      {
        "explanation": "Sketch \\(y = 2x\\left(1 - \\dfrac{x}{3}\\right)^3 + 1\\) on \\([0, 5]\\): start at \\((0,1)\\), rise to the local maximum \\(\\left(\\tfrac{3}{4}, tfrac{209}{128}\\right)\\), fall through the horizontal point of inflection \\((3, 1)\\), then cross the \\(x\\)-axis between \\(4\\) and \\(5\\), ending near \\((5, -1.96)\\).",
        "workingOut": "\\(Curve starts at \\((0, 1)\\), rises to the local maximum \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\), falls through the horizontal point of inflection \\((3, 1)\\), continues falling and crosses the \\(x\\)-axis between \\(x = 4\\) and \\(x = 5\\), ending at \\(\\left(5, -\\dfrac{53}{27}\\right)\\).\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 300,
            "boundingbox": [
              -0.6,
              2.5,
              5.6,
              -2.6
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.6,0],[5.6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,2.5]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 2*x*Math.pow(1 - x/3, 3) + 1; }, 0, 5], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [0,1], {name:'(0, 1)', size:3, color:'red', label:{offset:[-14,8]}});\nboard.create('point', [0.75,1.633], {name:'(3/4, 209/128)', size:3, color:'red', label:{offset:[6,10]}});\nboard.create('point', [3,1], {name:'(3, 1)', size:3, color:'red', label:{offset:[8,12]}});\nboard.create('point', [5,-1.963], {name:'(5, -53/27)', size:3, color:'red', label:{offset:[6,-8]}});\nboard.create('text', [5.45, 0.35, 'x'], {fontSize:14});\nboard.create('text', [0.25, 2.3, 'y'], {fontSize:14});\nboard.create('text', [-0.32, -0.35, 'O'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cra2023s-q28a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(f(x) \\geq 0\\) everywhere, and \\(\\displaystyle\\int_0^{\\ln(27/8)} e^{-x/3}\\,dx = 1\\), so \\(f\\) is a valid pdf."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(f(x) \\geq 0\\) everywhere, and \\(\\displaystyle\\int_0^{\\ln(27/8)} e^{-x/3}\\,dx = 1\\), so \\(f\\) is a valid pdf..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(x) \\geq 0 \\;\\; \\text{and} \\;\\; \\int_0^{\\ln(27/8)} f(x)\\,dx = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(e^{-x/3} > 0 \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\int_0^{\\ln(27/8)} e^{-x/3}\\,dx = \\left[-3e^{-x/3}\\right]_0^{\\ln(27/8)}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(f(x) \\geq 0\\) everywhere, and \\(\\displaystyle\\int_0^{\\ln(27/8)} e^{-x/3}\\,dx = 1\\), so \\(f\\) is a valid pdf.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(f(x) \\geq 0\\) everywhere, and \\(\\displaystyle\\int_0^{\\ln(27/8)} e^{-x/3}\\,dx = 1\\), so \\(f\\) is a valid pdf.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q28b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(F(x) = 0\\) for \\(x < 0\\); \\(F(x) = 3 - 3e^{-x/3}\\) for \\(0 \\leq x \\leq \\ln(27/8)\\); \\(F(x) = 1\\) for \\(x > \\ln(27/8)\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(F(x) = 0\\) for \\(x < 0\\); \\(F(x) = 3 - 3e^{-x/3}\\) for \\(0 \\leq x \\leq \\ln(27/8)\\); \\(F(x) = 1\\) for \\(x > \\ln(27/8)\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(F(x) = 0 \\text{ for } x < 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(F(x) = \\int_0^x e^{-t/3}\\,dt = 3 - 3e^{-x/3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(F(x) = 1 \\text{ for } x > \\ln(27/8)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(F(x) = 0\\) for \\(x < 0\\); \\(F(x) = 3 - 3e^{-x/3}\\) for \\(0 \\leq x \\leq \\ln(27/8)\\); \\(F(x) = 1\\) for \\(x > \\ln(27/8)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(F(x) = 0\\) for \\(x < 0\\); \\(F(x) = 3 - 3e^{-x/3}\\) for \\(0 \\leq x \\leq \\ln(27/8)\\); \\(F(x) = 1\\) for \\(x > \\ln(27/8)\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q28c",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-m = 3\\ln\\!\\left(\\dfrac{6}{5}\\right) = \\ln\\!\\left(\\dfrac{216}{125}\\right)\\)",
      "\\(m = 3\\ln\\!\\left(\\dfrac{6}{5}\\right) = \\ln\\!\\left(\\dfrac{216}{125}\\right)\\)",
      "\\(m = 3\\ln\\!\\left(\\frac{1}{5}\\right) = \\ln\\!\\left(\\dfrac{216}{125}\\right)\\)",
      "\\(m = 3\\ln\\!\\left(\\frac{5}{6}\\right) = \\ln\\!\\left(\\dfrac{216}{125}\\right)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(m = 3\\ln\\!\\left(\\dfrac{6}{5}\\right) = \\ln\\!\\left(\\dfrac{216}{125}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(3 - 3e^{-m/3} = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(3e^{-m/3} = \\dfrac{5}{2} \\implies e^{-m/3} = \\dfrac{5}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(m = 3\\ln\\dfrac{6}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: m = 3\\ln\\!\\left(\\dfrac{6}{5}\\right) = \\ln\\!\\left(\\dfrac{216}{125}\\right). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(m = 3\\ln\\!\\left(\\dfrac{6}{5}\\right) = \\ln\\!\\left(\\dfrac{216}{125}\\right)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q29a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Period of \\(2\\sin x\\) is \\(2\\pi\\); period of \\(\\tan x\\) is \\(\\pi\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is Period of \\(2\\sin x\\) is \\(2\\pi\\); period of \\(\\tan x\\) is \\(\\pi\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Period of } 2\\sin x = 2\\pi\\)",
        "graphData": {
          "jsxGraph": {
            "width": 420,
            "height": 320,
            "boundingbox": [
              -0.5,
              2.8,
              6.9,
              -2.8
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.8],[0,2.8]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.sin(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar tan=function(x){ return Math.tan(x); };\nboard.create('functiongraph', [tan, 0, PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, PI/2+0.08, 3*PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, 3*PI/2+0.08, 2*PI], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.4,marks[i][1]],{fontSize:11}); }\nboard.create('text', [1.7, 2.5, 'y = 2sin x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.5, 'y = tan x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.6, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Period of } \\tan x = \\pi\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Period of \\(2\\sin x\\) is \\(2\\pi\\); period of \\(\\tan x\\) is \\(\\pi\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Period of \\(2\\sin x\\) is \\(2\\pi\\); period of \\(\\tan x\\) is \\(\\pi\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Period of \\(2\\sin x\\) is \\(2\\pi\\); period of \\(\\tan x\\) is \\(\\pi\\).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -0.5,
          2.8,
          6.9,
          -2.8
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.8],[0,2.8]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.sin(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar tan=function(x){ return Math.tan(x); };\nboard.create('functiongraph', [tan, 0, PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, PI/2+0.08, 3*PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, 3*PI/2+0.08, 2*PI], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.4,marks[i][1]],{fontSize:11}); }\nboard.create('text', [1.7, 2.5, 'y = 2sin x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.5, 'y = tan x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.6, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q29b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-x = 0, \\dfrac{\\pi}{3}, \\pi, \\dfrac{5\\pi}{3}, 2\\pi\\)",
      "\\(x = 0, \\dfrac{\\pi}{3}, \\pi, \\dfrac{5\\pi}{3}, 2\\pi\\)",
      "\\(x = 0, \\frac{1}{3}, \\pi, \\dfrac{5\\pi}{3}, 2\\pi\\)",
      "\\(x = 0, \\frac{3}{\\pi}, \\pi, \\dfrac{5\\pi}{3}, 2\\pi\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(x = 0, \\dfrac{\\pi}{3}, \\pi, \\dfrac{5\\pi}{3}, 2\\pi\\).",
    "solutionSteps": [
      {
        "explanation": "Equate the two functions at an intersection and write tangent as sine over cosine. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2\\sin x = \\dfrac{\\sin x}{\\cos x}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply both sides by \\(\\cos x\\) (where \\(\\tan x\\) is defined, \\(\\cos x \\neq 0\\), so no solutions are lost).",
        "workingOut": "\\(2\\sin x\\cos x = \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Bring to one side and factor out \\(\\sin x\\) — do not divide by \\(\\sin x\\), which would lose solutions.",
        "workingOut": "\\(\\sin x\\,(2\\cos x - 1) = 0 \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Solve \\(\\cos x = \\dfrac{1}{2}\\) on \\([0, 2\\pi]\\): cosine is positive in the first and fourth quadrants.",
        "workingOut": "\\(x = \\dfrac{\\pi}{3},\\ \\dfrac{5\\pi}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -0.5,
          2.8,
          6.9,
          -2.8
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.8],[0,2.8]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.sin(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar tan=function(x){ return Math.tan(x); };\nboard.create('functiongraph', [tan, 0, PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, PI/2+0.08, 3*PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, 3*PI/2+0.08, 2*PI], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.4,marks[i][1]],{fontSize:11}); }\nboard.create('text', [1.7, 2.5, 'y = 2sin x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.5, 'y = tan x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.6, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q29c",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(1 + \\ln 2\\) square units",
      "\\(1 - \\ln 2\\) square units",
      "\\(1 - \\ln 4\\) square units",
      "\\(1 - \\log 2\\) square units"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(1 - \\ln 2\\) square units.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\left(0, tfrac{\\pi}{3}\\right): 2\\sin x \\text{ on top}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 420,
            "height": 320,
            "boundingbox": [
              -0.5,
              2.8,
              6.9,
              -2.8
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.8],[0,2.8]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.sin(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar tan=function(x){ return Math.tan(x); };\nboard.create('functiongraph', [tan, 0, PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, PI/2+0.08, 3*PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, 3*PI/2+0.08, 2*PI], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.4,marks[i][1]],{fontSize:11}); }\nboard.create('text', [1.7, 2.5, 'y = 2sin x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.5, 'y = tan x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.6, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A = \\int_0^{\\pi/3} (2\\sin x - \\tan x)\\,dx = \\Bigl[-2\\cos x + \\ln|\\cos x|\\Bigr]_0^{\\pi/3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-2 \\times \\dfrac{1}{2} + \\ln\\dfrac{1}{2} = -1 - \\ln 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1 - \\ln 2\\) square units. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1 - \\ln 2\\) square units",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -0.5,
          2.8,
          6.9,
          -2.8
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.8],[0,2.8]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.sin(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar tan=function(x){ return Math.tan(x); };\nboard.create('functiongraph', [tan, 0, PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, PI/2+0.08, 3*PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, 3*PI/2+0.08, 2*PI], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.4,marks[i][1]],{fontSize:11}); }\nboard.create('text', [1.7, 2.5, 'y = 2sin x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.5, 'y = tan x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.6, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q30a",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1\\) gives \\(k = \\dfrac{3}{4}\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1\\) gives \\(k = \\dfrac{3}{4}\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_2^3 k(t-2)^2\\,dt + \\int_3^5 k\\left(\\dfrac{5}{2} - \\dfrac{t}{2}\\right)dt = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(k\\left[\\dfrac{(t-2)^3}{3}\\right]_2^3 = \\dfrac{k}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(k\\left[\\dfrac{5t}{2} - \\dfrac{t^2}{4}\\right]_3^5 = k\\left(\\dfrac{25}{4} - \\dfrac{21}{4}\\right) = k\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1\\) gives \\(k = \\dfrac{3}{4}\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1\\) gives \\(k = \\dfrac{3}{4}\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q30b",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(t = 4.2\\) minutes",
      "\\(t = 4.2\\) minutes + 1",
      "\\(t = 4.4\\) minutes",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(t = 4.2\\) minutes.",
    "solutionSteps": [
      {
        "explanation": "Check which piece contains the 88th percentile: \\(F(3) = \\dfrac{k}{3} = \\dfrac{1}{4} = 0.25 < 0.88\\), so it lies in \\(3 \\leq t \\leq 5\\). Build the CDF there.",
        "workingOut": "\\(F(t) = \\dfrac{1}{4} + \\int_3^t \\dfrac{3}{4}\\left(\\dfrac{5}{2} - \\dfrac{s}{2}\\right)ds\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(F(t) = 0.88\\) and clear fractions (multiply by \\(\\dfrac{16}{3}\\)) to obtain a standard quadratic.",
        "workingOut": "\\(t^2 - 10t + 24.36 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve with the quadratic formula: discriminant \\(= 100 - 97.44 = 2.56\\), \\(\\sqrt{2.56} = 1.6\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(t = \\dfrac{10 \\pm 1.6}{2} = 5.8 \\text{ or } 4.2\\)",
        "graphData": null
      },
      {
        "explanation": "Reject \\(t = 5.8\\) (outside the support \\([3, 5]\\)) and verify: \\(F(4.2) = 7.875 - 3.3075 - 3.6875 = 0.88\\) ✓.",
        "workingOut": "\\(t = 4.2 \\text{ minutes}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q31",
    "topicId": "y12a-exam-cra",
    "c": "EXAM",
    "t": "Cranbrook 2023 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(180\\) watts per second",
      "\\(180\\) watts per second + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(180\\) watts per second.",
    "solutionSteps": [
      {
        "explanation": "Compose the functions: the socket outputs \\(x = g(t)\\) and the heat is \\(h(x) = (f(x))^3\\), so the heat as a function of time is \\(H(t) = \\bigl(f(g(t))\\bigr)^3\\).",
        "workingOut": "\\(H(t) = \\bigl(f(g(t))\\bigr)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate with the chain rule twice: the outer cube brings down a 3, then the inner composite differentiates by the given fact.",
        "workingOut": "\\(H'(t) = 3\\bigl(f(g(t))\\bigr)^2 \\times f'(g(t)) \\times g'(t)\\)",
        "graphData": null
      },
      {
        "explanation": "Collect the values at \\(t = 2\\): \\(g(2) = 4\\) watts, \\(g'(2) = 5\\) watts/second, \\(f(4) = 2\\), \\(f'(4) = 3\\).",
        "workingOut": "g(2) = 4, quad g'(2) = 5, quad f(4) = 2, quad f'(4) = 3",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
