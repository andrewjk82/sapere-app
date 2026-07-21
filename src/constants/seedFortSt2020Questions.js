export const FORTST_2020_QUESTIONS = [
  {
    "id": "fortst2020-mc1",
    "topicId": "y12a-exam-fortst",
    "c": "1B",
    "t": "Arithmetic sequences",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The fourth term of an arithmetic series is $27$ and the seventh term is $12$. What is the common difference?",
    "opts": [
      "\\(-5\\)",
      "\\(5\\)",
      "\\(13\\)",
      "\\(42\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Write $T_4$ and $T_7$ using $T_n = a + (n-1)d$ and subtract.",
    "solution": "The correct answer is \\(-5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_4 = a + 3d = 27\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(T_7 = a + 6d = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((a + 6d) - (a + 3d) = 12 - 27 \\Rightarrow 3d = -15\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-mc2",
    "topicId": "y12a-exam-fortst",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The graph of $f(x) = 3x^{5/2}$ is reflected in the $x$-axis, then translated $3$ units right and $4$ units down. The equation of the transformed function is:",
    "opts": [
      "\\(y = 3(-x-3)^{5/2} - 4\\)",
      "\\(y = -3(x-3)^{5/2} - 4\\)",
      "\\(y = -3(x+3)^{5/2} - 4\\)",
      "\\(y = 3(-x+3)^{5/2} - 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the transformations one at a time: reflect ($y \\to -y$), then replace $x \\to x-3$, then subtract $4$.",
    "solution": "The correct answer is \\(y = -3(x-3)^{5/2} - 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = -3x^{5/2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = -3(x-3)^{5/2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = -3(x-3)^{5/2} - 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -3(x-3)^{5/2} - 4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -3(x-3)^{5/2} - 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-mc3",
    "topicId": "y12a-exam-fortst",
    "c": "11B",
    "t": "Solving trigonometric equations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "What is the solution to the equation $\\cos 2x = \\dfrac{1}{2}$ in the domain $[-\\pi, pi]$?",
    "opts": [
      "\\(x = \\dfrac{\\pi}{6}, dfrac{5\\pi}{6}, dfrac{-5\\pi}{6}, dfrac{-\\pi}{6}\\)",
      "\\(x = \\dfrac{\\pi}{12}, dfrac{11\\pi}{12}, dfrac{-11\\pi}{12}, dfrac{-\\pi}{12}\\)",
      "\\(x = \\dfrac{\\pi}{6}, dfrac{5\\pi}{6}, dfrac{7\\pi}{6}, dfrac{11\\pi}{6}\\)",
      "\\(x = \\dfrac{\\pi}{12}, dfrac{11\\pi}{12}, dfrac{13\\pi}{12}, dfrac{23\\pi}{12}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Expand the domain: if $-\\pi \\le x \\le \\pi$ then $-2\\pi \\le 2x \\le 2\\pi$. Solve for $2x$ first.",
    "solution": "The correct answer is \\(x = \\dfrac{\\pi}{6}, dfrac{5\\pi}{6}, dfrac{-5\\pi}{6}, dfrac{-\\pi}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(-\\pi \\le x \\le \\pi \\Rightarrow -2\\pi \\le u \\le 2\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u = \\pm\\frac{\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(u = \\frac{\\pi}{3}, -\\frac{\\pi}{3}, frac{5\\pi}{3}, -\\frac{5\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = \\dfrac{\\pi}{6}, dfrac{5\\pi}{6}, dfrac{-5\\pi}{6}, dfrac{-\\pi}{6}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = \\dfrac{\\pi}{6}, dfrac{5\\pi}{6}, dfrac{-5\\pi}{6}, dfrac{-\\pi}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-mc4",
    "topicId": "y12a-exam-fortst",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A native garden has vertical heights (in metres) $2, 4.5, 5.1, 3.6$ and $0$ at points spaced $5$ m apart. What is the approximate area using the trapezoidal rule with $4$ intervals?",
    "opts": [
      "\\(31 \\text{ m}^2\\)",
      "\\(62 \\text{ m}^2\\)",
      "\\(71 \\text{ m}^2\\)",
      "\\(74 \\text{ m}^2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use $A \\approx \\frac{h}{2}[y_1 + y_5 + 2(y_2 + y_3 + y_4)]$ with $h = 5$.",
    "solution": "The correct answer is \\(71 \\text{ m}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A \\approx \\frac{h}{2}[y_1 + y_5 + 2(y_2 + y_3 + y_4)]\\)",
        "graphData": {
          "jsxGraph": {
            "width": 420,
            "height": 300,
            "boundingbox": [
              -3,
              7,
              23,
              -1.5
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('segment', [[0,0],[20,0]], {strokeColor:'black'});\nvar ord=[[0,2],[5,4.5],[10,5.1],[15,3.6]];\nfor(var i=0;i<ord.length;i++){ board.create('segment', [[ord[i][0],0],ord[i]], {strokeColor:'black', dash: i===0?0:2}); }\nboard.create('functiongraph', [function(x){ var pts=[[0,2],[5,4.5],[10,5.1],[15,3.6],[20,0]]; for(var j=0;j<pts.length-1;j++){ if(x>=pts[j][0]&&x<=pts[j+1][0]){ var t=(x-pts[j][0])/(pts[j+1][0]-pts[j][0]); return pts[j][1]+t*(pts[j+1][1]-pts[j][1]); } } return 0; }, 0, 20], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar labs=[[2,'2'],[5,'4.5'],[10,'5.1'],[15,'3.6']];\nboard.create('text',[-1.5,1,'2'],{fontSize:11});\nboard.create('text',[5.3,2.3,'4.5'],{fontSize:11});\nboard.create('text',[10.3,2.6,'5.1'],{fontSize:11});\nboard.create('text',[15.3,1.9,'3.6'],{fontSize:11});\nboard.create('text',[2.2,-1,'5'],{fontSize:11});board.create('text',[7.2,-1,'5'],{fontSize:11});board.create('text',[12.2,-1,'5'],{fontSize:11});board.create('text',[17.2,-1,'5'],{fontSize:11});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A \\approx \\frac{5}{2}[2 + 0 + 2(4.5 + 5.1 + 3.6)]\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{5}{2}[2 + 2(13.2)]\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 71 \\text{ m}^2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(71 \\text{ m}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 300,
        "boundingbox": [
          -3,
          7,
          23,
          -1.5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('segment', [[0,0],[20,0]], {strokeColor:'black'});\nvar ord=[[0,2],[5,4.5],[10,5.1],[15,3.6]];\nfor(var i=0;i<ord.length;i++){ board.create('segment', [[ord[i][0],0],ord[i]], {strokeColor:'black', dash: i===0?0:2}); }\nboard.create('functiongraph', [function(x){ var pts=[[0,2],[5,4.5],[10,5.1],[15,3.6],[20,0]]; for(var j=0;j<pts.length-1;j++){ if(x>=pts[j][0]&&x<=pts[j+1][0]){ var t=(x-pts[j][0])/(pts[j+1][0]-pts[j][0]); return pts[j][1]+t*(pts[j+1][1]-pts[j][1]); } } return 0; }, 0, 20], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar labs=[[2,'2'],[5,'4.5'],[10,'5.1'],[15,'3.6']];\nboard.create('text',[-1.5,1,'2'],{fontSize:11});\nboard.create('text',[5.3,2.3,'4.5'],{fontSize:11});\nboard.create('text',[10.3,2.6,'5.1'],{fontSize:11});\nboard.create('text',[15.3,1.9,'3.6'],{fontSize:11});\nboard.create('text',[2.2,-1,'5'],{fontSize:11});board.create('text',[7.2,-1,'5'],{fontSize:11});board.create('text',[12.2,-1,'5'],{fontSize:11});board.create('text',[17.2,-1,'5'],{fontSize:11});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-mc5",
    "topicId": "y12a-exam-fortst",
    "c": "3H",
    "t": "Two graphs that have asymptotes",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "What is the domain and range of the function $y = \\dfrac{1}{\\sqrt{x - 9}}$?",
    "opts": [
      "Domain: \\([9, infty)\\), Range: \\((0, infty)\\)",
      "Domain: \\((9, infty)\\), Range: \\((0, infty)\\)",
      "\\(Domain: \\([-\\infty, infty]\\), Range: \\([-\\infty, infty]\\)\\)",
      "\\(Domain: \\([-3, 3]\\), Range: \\((-\\infty, 0)\\)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The square root needs a non-negative argument; the denominator cannot be zero, so $x - 9 > 0$ strictly.",
    "solution": "The correct answer is Domain: \\((9, infty)\\), Range: \\((0, infty)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x - 9 > 0 \\Rightarrow x > 9\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Domain} = (9, infty)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Range} = (0, infty)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Domain: \\((9, infty)\\), Range: \\((0, infty)\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Domain: \\((9, infty)\\), Range: \\((0, infty)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-mc6",
    "topicId": "y12a-exam-fortst",
    "c": "7B",
    "t": "Gradients",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "At what angle is the line $y = -\\sqrt{3}\\,x$ inclined to the positive side of the $x$-axis?",
    "opts": [
      "\\(30°\\)",
      "\\(60°\\)",
      "\\(120°\\)",
      "\\(150°\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The angle of inclination $\\theta$ satisfies $\\tan\\theta = m$; a negative gradient gives an obtuse angle.",
    "solution": "The correct answer is \\(120°\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\tan\\theta = -\\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{reference angle} = 60°\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta = 180° - 60° = 120°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 120°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(120°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-mc7",
    "topicId": "y12a-exam-fortst",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The diagram shows a sketch of the gradient function $y = f'(x)$. Which statement about $y = f(x)$ is true?",
    "opts": [
      "A minimum turning point at \\(x = -4\\)",
      "A horizontal point of inflexion at \\(x = 2\\)",
      "A horizontal point of inflexion at \\(x = -4\\)",
      "A minimum turning point at \\(x = 2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "A double root of $f'$ (where it touches the axis) gives a horizontal point of inflexion of $f$; a simple root (cross) gives a turning point.",
    "solution": "The correct answer is A horizontal point of inflexion at \\(x = -4\\).",
    "solutionSteps": [
      {
        "explanation": "Stationary points of \\(f\\) occur where \\(f'(x) = 0\\), i.e. at \\(x = -4\\) and \\(x = 2\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(f'(x) = 0 \\text{ at } x = -4, \\; 2\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = -4\\) the gradient function touches the \\(x\\)-axis (a double root), so \\(f'\\) does not change sign. A stationary point where \\(f'\\) keeps the same sign is a horizontal point of inflexion.",
        "workingOut": "\\(x = -4: \\text{ touch} \\Rightarrow \\text{horizontal inflexion}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = 2\\) the gradient function crosses the axis, so \\(f'\\) changes sign — this is a turning point (not an inflexion).",
        "workingOut": "\\(x = 2: \\text{ cross} \\Rightarrow \\text{turning point}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 300,
        "boundingbox": [
          -6.5,
          9,
          4.5,
          -6
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0],[4.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-6],[0,9]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return -0.22*Math.pow(x+4,2)*(x-2); }, -6, 3.2], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [-4,0], {name:'', size:2, color:'#475569', fixed:true});\nboard.create('point', [2,0], {name:'', size:2, color:'#475569', fixed:true});\nboard.create('text', [-4.3, -0.9, '-4'], {fontSize:11});\nboard.create('text', [1.8, -0.9, '2'], {fontSize:11});\nboard.create('text', [3.9, 0.5, 'x'], {fontSize:13});\nboard.create('text', [0.25, 8.3, 'y'], {fontSize:13});\nboard.create('text', [2.6, 6, \"y = f'(x)\"], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-mc8",
    "topicId": "y12a-exam-fortst",
    "c": "11C",
    "t": "Arcs and sectors",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "$AOB$ is a sector of a circle, centre $O$ and radius $5$ cm, with area $10\\pi \\text{ cm}^2$. What is the arc length of the sector, in centimetres?",
    "opts": [
      "\\(2\\pi\\)",
      "\\(4\\pi\\)",
      "\\(6\\pi\\)",
      "\\(10\\pi\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find $\\theta$ from the area formula $A = \\frac{1}{2}r^2\\theta$, then use $\\ell = r\\theta$.",
    "solution": "The correct answer is \\(4\\pi\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A = \\frac{1}{2}r^2\\theta \\Rightarrow 10\\pi = \\frac{1}{2}(5)^2\\theta\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 300,
            "boundingbox": [
              -5.5,
              5,
              6,
              -2
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nvar O=[0,0];\nvar B=[5,0];\nvar A=[5*Math.cos(144*Math.PI/180), 5*Math.sin(144*Math.PI/180)];\nboard.create('sector', [O, B, A], {fillColor:'#cbd5e1', fillOpacity:0.35, strokeColor:'#475569', strokeWidth:1.5});\nboard.create('segment', [O, B], {strokeColor:'black'});\nboard.create('segment', [O, A], {strokeColor:'black'});\nboard.create('point', O, {name:'O', size:2, color:'black', fixed:true, label:{offset:[-6,-10]}});\nboard.create('point', A, {name:'A', size:2, color:'black', fixed:true, label:{offset:[-12,2]}});\nboard.create('point', B, {name:'B', size:2, color:'black', fixed:true, label:{offset:[8,-2]}});\nboard.create('text', [2.4, -0.5, '5 cm'], {fontSize:12});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\theta = \\frac{10\\pi}{12.5} = \\frac{4\\pi}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\ell = 5 \\times \\frac{4\\pi}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 4\\pi. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(4\\pi\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 300,
        "boundingbox": [
          -5.5,
          5,
          6,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nvar O=[0,0];\nvar B=[5,0];\nvar A=[5*Math.cos(144*Math.PI/180), 5*Math.sin(144*Math.PI/180)];\nboard.create('sector', [O, B, A], {fillColor:'#cbd5e1', fillOpacity:0.35, strokeColor:'#475569', strokeWidth:1.5});\nboard.create('segment', [O, B], {strokeColor:'black'});\nboard.create('segment', [O, A], {strokeColor:'black'});\nboard.create('point', O, {name:'O', size:2, color:'black', fixed:true, label:{offset:[-6,-10]}});\nboard.create('point', A, {name:'A', size:2, color:'black', fixed:true, label:{offset:[-12,2]}});\nboard.create('point', B, {name:'B', size:2, color:'black', fixed:true, label:{offset:[8,-2]}});\nboard.create('text', [2.4, -0.5, '5 cm'], {fontSize:12});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-mc9",
    "topicId": "y12a-exam-fortst",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A discrete random variable $X$ has $P(X{=}0)=a$, $P(X{=}1)=3a$, $P(X{=}2)=5a$, $P(X{=}3)=7a$. The expected value of $X$ is:",
    "opts": [
      "\\(\\dfrac{1}{16}\\)",
      "\\(2\\)",
      "\\(\\dfrac{35}{16}\\)",
      "\\(\\dfrac{17}{8}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "First find $a$ from the fact that the probabilities sum to $1$, then compute $E(X) = \\sum x\\,P(x)$.",
    "solution": "The correct answer is \\(\\dfrac{17}{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a + 3a + 5a + 7a = 16a = 1 \\Rightarrow a = \\frac{1}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(E(X) = 0(a) + 1(3a) + 2(5a) + 3(7a)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= 3a + 10a + 21a = 34a\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{17}{8}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{17}{8}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-mc10",
    "topicId": "y12a-exam-fortst",
    "c": "3H",
    "t": "Primitive functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If $f'(x) = 3x^2 - 4$, which of the following graphs could represent $y = f(x)$? (Option B is a cubic with a maximum then minimum, crossing the $x$-axis three times near $x = -2, 0, 2$.)",
    "opts": [
      "An upward parabola (Option A)",
      "A positive cubic with a max then a min (Option B)",
      "A straight line (Option C)",
      "A monotonic increasing cubic with no turning points (Option D)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate $f'(x)$: $f(x) = x^3 - 4x + C$, a cubic. Its turning points are where $f'(x) = 0$.",
    "solution": "The correct answer is A positive cubic with a max then a min (Option B).",
    "solutionSteps": [
      {
        "explanation": "Find \\(f(x)\\) by integrating \\(f'(x)\\); the constant \\(C\\) shifts the graph vertically. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(f(x) = \\int (3x^2 - 4)\\,dx = x^3 - 4x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Factor to see the basic shape: a positive cubic with roots near \\(-2, 0, 2\\) (before the vertical shift).",
        "workingOut": "\\(f(x) = x(x-2)(x+2) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Since the leading coefficient is positive, the cubic rises, has a local maximum, then a local minimum, then rises again — this matches Option B.",
        "workingOut": "\\(\\text{positive cubic with max then min (Option B)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q1a",
    "topicId": "y12a-exam-fortst",
    "c": "6J",
    "t": "Problems with general triangles",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "From a starting point $A$, Roy rows $1500$ m on a bearing of $068°30'$ to $B$, then turns onto a bearing of $145°30'$ for $2$ km to $C$, then returns to $A$. What is the size of $\\angle ABC$?",
    "opts": [
      "\\(\\angle ABC = 103°\\)",
      "\\(\\angle ABC = 103° + 1\\)",
      "\\(\\angle ABC = 104°\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "The reverse bearing of $A$ from $B$ is $68°30' + 180°$. Subtract the bearing of $C$ from $B$.",
    "solution": "The correct answer is \\(\\angle ABC = 103°\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{bearing of } A \\text{ from } B = 68°30' + 180° = 248°30'\\)",
        "graphData": {
          "geometry": {
            "width": 300,
            "points": {
              "A": [
                0,
                0
              ],
              "B": [
                2.6,
                2.2
              ],
              "C": [
                5.2,
                -2.4
              ]
            },
            "segments": [
              {
                "from": "A",
                "to": "B"
              },
              {
                "from": "B",
                "to": "C"
              },
              {
                "from": "C",
                "to": "A"
              }
            ],
            "sideLabels": [
              {
                "between": [
                  "A",
                  "B"
                ],
                "text": "1500 m"
              },
              {
                "between": [
                  "B",
                  "C"
                ],
                "text": "2 km"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\angle ABC = 248°30' - 145°30'\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\angle ABC = 103°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\angle ABC = 103°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\angle ABC = 103°\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            2.6,
            2.2
          ],
          "C": [
            5.2,
            -2.4
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "A"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "1500 m"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "2 km"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q1b",
    "topicId": "y12a-exam-fortst",
    "c": "6I",
    "t": "The cosine rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Calculate $AC$, the distance Roy rows back to his starting point ($AB = 1500$ m, $BC = 2000$ m, $\\angle ABC = 103°$). Answer to the nearest metre.",
    "opts": [
      "\\(AC \\approx 2757\\) m",
      "\\(AC \\approx 2757\\) m + 1",
      "\\(AC \\approx 4757\\) m",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Apply the cosine rule $AC^2 = AB^2 + BC^2 - 2\\,AB\\cdot BC\\cos(\\angle ABC)$.",
    "solution": "The correct answer is \\(AC \\approx 2757\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(AC^2 = AB^2 + BC^2 - 2\\,AB\\cdot BC\\cos(\\angle ABC)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(AC^2 = 1500^2 + 2000^2 - 2(1500)(2000)\\cos 103°\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(AC^2 = 7\\,599\\,706.3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(AC \\approx 2757\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(AC \\approx 2757\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q2a",
    "topicId": "y12a-exam-fortst",
    "c": "5B",
    "t": "Differentiation of e^x",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate \\(\\dfrac{e^{3x}}{x-1}\\), simplifying your answer.",
    "opts": [
      "\\(\\dfrac{3e^{3x}}{(x-1)^{2}}\\)",
      "\\(\\dfrac{e^{3x}(3x-4)}{(x-1)^{2}}\\)",
      "\\(\\dfrac{e^{3x}(3x-3)}{(x-1)^{2}}\\)",
      "\\(\\dfrac{3e^{3x}(x-1)-e^{3x}}{x-1}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Quotient \\(y=\\dfrac{e^{3x}}{x-1}\\). Use \\(\\dfrac{vu'-uv'}{v^{2}}\\) with \\(u=e^{3x}\\), \\(v=x-1\\).",
    "solution": "Quotient \\(y=\\dfrac{e^{3x}}{x-1}\\). Use \\(\\dfrac{vu'-uv'}{v^{2}}\\) with \\(u=e^{3x}\\), \\(v=x-1\\). \\(u'=3e^{3x}\\), \\(v'=1\\). \\(\\dfrac{3e^{3x}(x-1)-e^{3x}}{(x-1)^{2}}\\). Factor \\(e^{3x}\\): \\(e^{3x}\\bigl(3(x-1)-1\\bigr)=e^{3x}(3x-3-1)=e^{3x}(3x-4)\\). Simplified derivative: \\(\\dfrac{e^{3x}(3x-4)}{(x-1)^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u=e^{3x},\\quad v=x-1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u'=3e^{3x},\\quad v'=1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{3e^{3x}(x-1)-e^{3x}}{(x-1)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{e^{3x}(3x-4)}{(x-1)^{2}}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{e^{3x}(3x-4)}{(x-1)^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q2b",
    "topicId": "y12a-exam-fortst",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate $\\tan x\\cos x$, simplifying your answer.",
    "opts": [
      "\\(-\\cos x\\)",
      "\\(\\cos x\\)",
      "\\(\\cos x + 1\\)",
      "\\(\\sin x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Simplify first: $\\tan x\\cos x = \\dfrac{\\sin x}{\\cos x}\\cdot\\cos x = \\sin x$.",
    "solution": "The correct answer is \\(\\cos x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\tan x\\cos x = \\frac{\\sin x}{\\cos x}\\cdot\\cos x = \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{d}{dx}(\\sin x) = \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\cos x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\cos x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q2c",
    "topicId": "y12a-exam-fortst",
    "c": "5K",
    "t": "Calculus with other bases",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate $\\log_4(x^2 + 3)$.",
    "opts": [
      "\\(-\\dfrac{x}{(\\ln 2)(x^2 + 3)}\\)",
      "\\(\\dfrac{x}{(\\ln 2)(x^2 + 3)}\\)",
      "\\(\\frac{(\\ln 2)(x^2 + 3)}{x}\\)",
      "\\(\\frac{1}{(\\ln 2)(x^2 + 3)}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $\\frac{d}{dx}\\log_a u = \\frac{u'}{(\\ln a)\\,u}$ with $a = 4$, $u = x^2 + 3$.",
    "solution": "The correct answer is \\(\\dfrac{x}{(\\ln 2)(x^2 + 3)}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{dy}{dx} = \\frac{2x}{(\\ln 4)(x^2 + 3)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\frac{2x}{2\\ln 2\\,(x^2 + 3)} = \\frac{x}{(\\ln 2)(x^2 + 3)}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{x}{(\\ln 2)(x^2 + 3)}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{x}{(\\ln 2)(x^2 + 3)}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{x}{(\\ln 2)(x^2 + 3)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q3a",
    "topicId": "y12a-exam-fortst",
    "c": "6D",
    "t": "Integrating the trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find $\\displaystyle\\int \\sin\\!\\left(\\dfrac{x}{3}\\right) dx$.",
    "opts": [
      "\\(--3\\cos\\!\\left(\\dfrac{x}{3}\\right) + C\\)",
      "\\(-3\\cos\\!\\left(\\dfrac{x}{3}\\right) + C\\)",
      "\\(-3\\cos\\!\\left(\\frac{1}{3}\\right) + C\\)",
      "\\(-3\\cos\\!\\left(\\frac{3}{x}\\right) + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The primitive of $\\sin(ax)$ is $-\\frac{1}{a}\\cos(ax)$, with $a = \\frac{1}{3}$.",
    "solution": "The correct answer is \\(-3\\cos\\!\\left(\\dfrac{x}{3}\\right) + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int \\sin\\!\\left(\\frac{x}{3}\\right) dx = -3\\cos\\!\\left(\\frac{x}{3}\\right) + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-3\\cos\\!\\left(\\dfrac{x}{3}\\right) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -3\\cos\\!\\left(\\dfrac{x}{3}\\right) + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-3\\cos\\!\\left(\\dfrac{x}{3}\\right) + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q3b",
    "topicId": "y12a-exam-fortst",
    "c": "4E",
    "t": "The indefinite integral",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find $\\displaystyle\\int x^4(x^5 - 2)^3\\,dx$.",
    "opts": [
      "\\(-\\dfrac{1}{20}(x^5 - 2)^4 + C\\)",
      "\\(\\dfrac{1}{20}(x^5 - 2)^4 + C\\)",
      "\\(\\frac{1}{20}(x^5 - 2)^4 + C\\)",
      "\\(\\frac{20}{1}(x^5 - 2)^4 + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the reverse chain rule: the derivative of $x^5 - 2$ is $5x^4$, which (up to a constant) matches the $x^4$ factor.",
    "solution": "The correct answer is \\(\\dfrac{1}{20}(x^5 - 2)^4 + C\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the inner function \\(u = x^5 - 2\\) whose derivative \\(5x^4\\) is proportional to the \\(x^4\\) factor outside.",
        "workingOut": "\\(\\frac{d}{dx}(x^5 - 2) = 5x^4\\)",
        "graphData": null
      },
      {
        "explanation": "Adjust by a constant so the integrand contains \\(5x^4\\), factoring out \\(\\frac{1}{20}\\) (since the power increases to \\(4\\)).",
        "workingOut": "\\(\\int x^4(x^5-2)^3 dx = \\frac{1}{20}\\int 5x^4(x^5-2)^3 dx\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the reverse chain rule: raise the power by \\(1\\) and divide by the new power. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(= \\frac{1}{20}(x^5 - 2)^4 + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q4",
    "topicId": "y12a-exam-fortst",
    "c": "5J",
    "t": "Applications of integration of the logarithmic function",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate exactly $\\displaystyle\\int_0^1 \\dfrac{x-1}{x^2 - 2x + 4}\\,dx$, simplifying your answer fully.",
    "opts": [
      "\\(-\\ln\\!\\left(\\dfrac{\\sqrt{3}}{2}\\right)\\)",
      "\\(\\ln\\!\\left(\\dfrac{\\sqrt{3}}{2}\\right)\\)",
      "\\(\\ln\\!\\left(\\dfrac{\\sqrt{4}}{4}\\right)\\)",
      "\\(\\log\\!\\left(\\dfrac{\\sqrt{3}}{2}\\right)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The derivative of the denominator is $2x - 2 = 2(x-1)$, so rewrite the numerator to use $\\int\\frac{f'}{f} = \\ln f$.",
    "solution": "The correct answer is \\(\\ln\\!\\left(\\dfrac{\\sqrt{3}}{2}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_0^1 \\frac{x-1}{x^2-2x+4}dx = \\frac{1}{2}\\int_0^1 \\frac{2x-2}{x^2-2x+4}dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\frac{1}{2}\\big[\\ln(x^2 - 2x + 4)\\big]_0^1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{1}{2}(\\ln 3 - \\ln 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\ln\\!\\left(\\dfrac{\\sqrt{3}}{2}\\right). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\ln\\!\\left(\\dfrac{\\sqrt{3}}{2}\\right)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q5",
    "topicId": "y12a-exam-fortst",
    "c": "1D",
    "t": "Solving quadratic equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For what values of $k$ does the quadratic equation $5x^2 - 2x + (8k - 15) = 0$ have real roots?",
    "opts": [
      "\\(-k \\leq \\dfrac{19}{10}\\)",
      "\\(k \\leq \\dfrac{19}{10}\\)",
      "\\(k \\leq \\frac{10}{19}\\)",
      "\\(k \\leq \\frac{1}{10}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Real roots require the discriminant $\\Delta = b^2 - 4ac \\geq 0$.",
    "solution": "The correct answer is \\(k \\leq \\dfrac{19}{10}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\Delta = b^2 - 4ac \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((-2)^2 - 4(5)(8k - 15) \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(4 - 160k + 300 \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: k \\leq \\dfrac{19}{10}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(k \\leq \\dfrac{19}{10}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q6",
    "topicId": "y12a-exam-fortst",
    "c": "3H",
    "t": "Two graphs that have asymptotes",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Sketch the graph of $y = 2 - \\dfrac{4}{x+1}$, showing all intercepts with the coordinate axes and all asymptotes.",
    "answer": "Hyperbola with vertical asymptote \\(x = -1\\), horizontal asymptote \\(y = 2\\), \\(x\\)-intercept \\((1, 0)\\) and \\(y\\)-intercept \\((0, -2)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Hyperbola with vertical asymptote \\(x = -1\\), horizontal asymptote \\(y = 2\\), \\(x\\)-intercept \\((1, 0)\\) and \\(y\\)-intercept \\((0, -2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x + 1 = 0 \\Rightarrow x = -1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(2 - \\frac{4}{x+1} = 0 \\Rightarrow x + 1 = 2 \\Rightarrow x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Hyperbola with vertical asymptote \\(x = -1\\), horizontal asymptote \\(y = 2\\), \\(x\\)-intercept \\((1, 0)\\) and \\(y\\)-intercept \\((0, -2)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Hyperbola with vertical asymptote \\(x = -1\\), horizontal asymptote \\(y = 2\\), \\(x\\)-intercept \\((1, 0)\\) and \\(y\\)-intercept \\((0, -2)\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "fortst2020-q7",
    "topicId": "y12a-exam-fortst",
    "c": "9A",
    "t": "The language of statistics",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Two box-and-whisker plots show tree heights (m): Central Park (median $\\approx 7.5$, symmetric, range $\\approx 6$) and East Park (median $\\approx 4$, positively skewed, range $\\approx 16$). Compare and contrast the two data sets by shape/skewness, location and spread.",
    "opts": [
      "\\(\\dfrac{7}{3}\\)",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "Central Park is symmetric with a higher median (\\(\\approx 7.5\\) vs \\(\\approx 4\\)) and smaller range/spread; East Park is positively skewed with a much larger range, so its heights are more spread out and less consistent."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Comment on shape/skew, then medians (location), then range/IQR (spread), and interpret in context.",
    "solution": "The correct answer is Central Park is symmetric with a higher median (\\(\\approx 7.5\\) vs \\(\\approx 4\\)) and smaller range/spread; East Park is positively skewed with a much larger range, so its heights are more spread out and less consistent..",
    "solutionSteps": [
      {
        "explanation": "Compare the shape and skewness. Central Park's box and whiskers are balanced about the median (symmetric); East Park has a long right whisker (positively skewed).",
        "workingOut": "\\(\\text{Central: symmetric}; \\quad \\text{East: positively skewed}\\)",
        "graphData": null
      },
      {
        "explanation": "Compare location using the medians. Central Park's median is about \\(7.5\\) m, East Park's about \\(4\\) m, so Central Park's trees are typically taller.",
        "workingOut": "\\(\\text{median}_C \\approx 7.5 > \\text{median}_E \\approx 4\\)",
        "graphData": null
      },
      {
        "explanation": "Interpret in context: East Park's heights are more spread out and less consistent; half of East Park's trees are shorter than the shortest tree in Central Park.",
        "workingOut": "\\(\\text{East Park: more variable, generally shorter trees}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 460,
        "height": 280,
        "boundingbox": [
          -3,
          6,
          23,
          -3
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]], {ticks:{insertTicks:false, ticksDistance:2, minorTicks:0, drawZero:true}, strokeColor:'black'});\nfunction box(y,mn,q1,med,q3,mx,label){ board.create('segment',[[q1,y-0.6],[q3,y-0.6]],{visible:false}); board.create('polygon',[[q1,y-0.5],[q3,y-0.5],[q3,y+0.5],[q1,y+0.5]],{fillColor:'#cbd5e1',fillOpacity:0.4,borders:{strokeColor:'#475569'},vertices:{visible:false},fixed:true}); board.create('segment',[[med,y-0.5],[med,y+0.5]],{strokeColor:'#1d4ed8',strokeWidth:2}); board.create('segment',[[mn,y],[q1,y]],{strokeColor:'#475569'}); board.create('segment',[[q3,y],[mx,y]],{strokeColor:'#475569'}); board.create('segment',[[mn,y-0.25],[mn,y+0.25]],{strokeColor:'#475569'}); board.create('segment',[[mx,y-0.25],[mx,y+0.25]],{strokeColor:'#475569'}); board.create('text',[mn-2.6,y-0.2,label],{fontSize:10}); }\nbox(3.5, 4, 5.5, 7.5, 9, 10, 'Central');\nbox(1.2, 2, 3, 4, 8, 18, 'East');\nfor(var t=0;t<=22;t+=2){ board.create('text',[t-0.2,-1.4,''+t],{fontSize:9}); }\nboard.create('text',[8, -2.4, 'Tree height (metres)'],{fontSize:11});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q8",
    "topicId": "y12a-exam-fortst",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the equation of the normal to the curve $y = \\ln\\!\\left(\\dfrac{2x-1}{x+1}\\right)$ at the point where $x = 2$.",
    "opts": [
      "\\(y = +3x - 6\\)",
      "\\(y = -3x + 6\\)",
      "\\(y = -3x + 6 + 1\\)",
      "\\(y = -4x + 6\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use log laws: $y = \\ln(2x-1) - \\ln(x+1)$, differentiate, evaluate at $x = 2$, then take the negative reciprocal for the normal.",
    "solution": "The correct answer is \\(y = -3x + 6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\ln(2x-1) - \\ln(x+1)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{dy}{dx} = \\frac{2}{2x-1} - \\frac{1}{x+1}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -3x + 6. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -3x + 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q9",
    "topicId": "y12a-exam-fortst",
    "c": "3G",
    "t": "Powers, cubics, and circles",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A circle is given by $x^2 + y^2 + 4x - 10y = -16$. Find the centre and radius of this circle.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Centre \\((-2, 5)\\), radius \\(\\sqrt{13}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Complete the square in both $x$ and $y$.",
    "solution": "The correct answer is Centre \\((-2, 5)\\), radius \\(\\sqrt{13}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((x^2 + 4x) + (y^2 - 10y) = -16\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((x^2 + 4x + 4) + (y^2 - 10y + 25) = -16 + 4 + 25\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((x + 2)^2 + (y - 5)^2 = 13\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Centre \\((-2, 5)\\), radius \\(\\sqrt{13}\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Centre \\((-2, 5)\\), radius \\(\\sqrt{13}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q10a",
    "topicId": "y12a-exam-fortst",
    "c": "3D",
    "t": "Quadratic functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Let $f(x) = (x+2)(x-2)^3$. Find the $x$- and $y$-intercepts of $y = f(x)$.",
    "opts": [
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x.",
      "x\\)-intercepts \\((-2, 0)\\) and \\((2, 0)\\); \\(y\\)-intercept \\((0, -16)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For $x$-intercepts set $y = 0$; for the $y$-intercept set $x = 0$.",
    "solution": "The correct answer is x\\)-intercepts \\((-2, 0)\\) and \\((2, 0)\\); \\(y\\)-intercept \\((0, -16).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((x+2)(x-2)^3 = 0 \\Rightarrow x = -2, \\; 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f(0) = (2)(-2)^3 = -16\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((-2, 0), \\; (2, 0), \\; (0, -16)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x\\)-intercepts \\((-2, 0)\\) and \\((2, 0)\\); \\(y\\)-intercept \\((0, -16). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "x\\)-intercepts \\((-2, 0)\\) and \\((2, 0)\\); \\(y\\)-intercept \\((0, -16)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q10b",
    "topicId": "y12a-exam-fortst",
    "c": "3C",
    "t": "Second and higher derivatives",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $f(x) = (x+2)(x-2)^3$, show that $f'(x) = 4(x-2)^2(x+1)$ and $f''(x) = 12x(x-2)$.",
    "opts": [
      "f'(x) = 4(x-2)^2(x+1)\\) and \\(f''(x) = 12x(x-2)",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the product rule, then factor out the common $(x-2)^2$. Differentiate again for $f''$.",
    "solution": "The correct answer is f'(x) = 4(x-2)^2(x+1)\\) and \\(f''(x) = 12x(x-2).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f'(x) = (x-2)^3(1) + (x+2)\\cdot 3(x-2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= (x-2)^2[(x-2) + 3(x+2)]\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= (x-2)^2(4x + 4) = 4(x-2)^2(x+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: f'(x) = 4(x-2)^2(x+1)\\) and \\(f''(x) = 12x(x-2). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "f'(x) = 4(x-2)^2(x+1)\\) and \\(f''(x) = 12x(x-2)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q10c",
    "topicId": "y12a-exam-fortst",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For $f(x) = (x+2)(x-2)^3$ (with $f'(x) = 4(x-2)^2(x+1)$, $f''(x) = 12x(x-2)$), find the coordinates of the stationary points and determine their nature, justifying fully.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\((-1, -27)\\) is a minimum turning point; \\((2, 0)\\) is a horizontal point of inflexion."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Solve $f'(x) = 0$, then test each point with $f''$ (and a sign table where $f'' = 0$).",
    "solution": "The correct answer is \\((-1, -27)\\) is a minimum turning point; \\((2, 0)\\) is a horizontal point of inflexion..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(4(x-2)^2(x+1) = 0 \\Rightarrow x = -1, \\; 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f(-1) = (1)(-3)^3 = -27; \\quad f(2) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f''(-1) = 12(-1)(-3) = 36 > 0 \\Rightarrow \\text{minimum}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\((-1, -27)\\) is a minimum turning point; \\((2, 0)\\) is a horizontal point of inflexion.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\((-1, -27)\\) is a minimum turning point; \\((2, 0)\\) is a horizontal point of inflexion.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q10d",
    "topicId": "y12a-exam-fortst",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $f(x) = (x+2)(x-2)^3$ (with $f''(x) = 12x(x-2)$), find the coordinates of all points of inflection of $y = f(x)$.",
    "opts": [
      "Points of inflection at \\((0, -16)\\) and \\((2, 0)\\)",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set $f''(x) = 0$ and confirm a change in concavity at each candidate.",
    "solution": "The correct answer is Points of inflection at \\((0, -16)\\) and \\((2, 0)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f''(x) = 12x(x-2) = 0 \\Rightarrow x = 0, \\; 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "f''(-0.5) = 15 > 0, quad f''(0.5) = -9 < 0",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f(0) = -16 \\Rightarrow (0, -16)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Points of inflection at \\((0, -16)\\) and \\((2, 0)\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Points of inflection at \\((0, -16)\\) and \\((2, 0)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q10e",
    "topicId": "y12a-exam-fortst",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Sketch the graph of $y = f(x) = (x+2)(x-2)^3$, showing the intercepts, the minimum turning point and the points of inflection.",
    "answer": "Quartic through \\((-2,0)\\) and \\((2,0)\\), \\(y\\)-intercept \\((0,-16)\\), minimum at \\((-1,-27)\\), points of inflection \\((0,-16)\\) and a horizontal one at \\((2,0)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Quartic through \\((-2,0)\\) and \\((2,0)\\), \\(y\\)-intercept \\((0,-16)\\), minimum at \\((-1,-27)\\), points of inflection \\((0,-16)\\) and a horizontal one at \\((2,0)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((-2,0),(2,0),(0,-16),(-1,-27)\\text{ min},(2,0)\\text{ horiz. POI}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x \\to \\pm\\infty \\Rightarrow f(x) \\to +\\infty\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Quartic through \\((-2,0)\\) and \\((2,0)\\), \\(y\\)-intercept \\((0,-16)\\), minimum at \\((-1,-27)\\), points of inflection \\((0,-16)\\) and a horizontal one at \\((2,0)\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Quartic through \\((-2,0)\\) and \\((2,0)\\), \\(y\\)-intercept \\((0,-16)\\), minimum at \\((-1,-27)\\), points of inflection \\((0,-16)\\) and a horizontal one at \\((2,0)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Quartic through \\((-2,0)\\) and \\((2,0)\\), \\(y\\)-intercept \\((0,-16)\\), minimum at \\((-1,-27)\\), points of inflection \\((0,-16)\\) and a horizontal one at \\((2,0)\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "fortst2020-q10f",
    "topicId": "y12a-exam-fortst",
    "c": "2H",
    "t": "Combinations of transformations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "State, in the correct order, the transformations required to obtain the graph of $y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)$ from $y = f(x)$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Horizontal dilation by a factor of \\(\\dfrac{1}{2}\\), then horizontal translation \\(\\dfrac{1}{4}\\) unit to the right."
    ],
    "a": 3,
    "answer": "3",
    "hint": "The \"$2$\" inside is a horizontal dilation; the \"$-\\frac{1}{4}$\" is a horizontal translation. Apply the dilation first because it is written closest to $x$.",
    "solution": "The correct answer is Horizontal dilation by a factor of \\(\\dfrac{1}{2}\\), then horizontal translation \\(\\dfrac{1}{4}\\) unit to the right..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{horizontal dilation, factor } \\tfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{horizontal translation } \\tfrac{1}{4} \\text{ unit right}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{dilate } \\tfrac{1}{2} \\text{ THEN translate right } \\tfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Horizontal dilation by a factor of \\(\\dfrac{1}{2}\\), then horizontal translation \\(\\dfrac{1}{4}\\) unit to the right.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Horizontal dilation by a factor of \\(\\dfrac{1}{2}\\), then horizontal translation \\(\\dfrac{1}{4}\\) unit to the right.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q10g",
    "topicId": "y12a-exam-fortst",
    "c": "2H",
    "t": "Combinations of transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Sketch the graph of $y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)$, showing the coordinates of $x$-intercepts, stationary points and inflection points.",
    "answer": "The graph of part (e) dilated horizontally by \\(\\frac{1}{2}\\) and shifted \\(\\frac{1}{4}\\) right: \\(x\\)-intercepts \\(\\left(-\\frac{3}{4},0\\right)\\) and \\(\\left(\\frac{5}{4},0\\right)\\), minimum \\(\\left(-\\frac{1}{4},-27\\right)\\), inflections \\(\\left(\\frac{1}{4},-16\\right)\\) and \\(\\left(\\frac{5}{4},0\\right)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The graph of part (e) dilated horizontally by \\(\\frac{1}{2}\\) and shifted \\(\\frac{1}{4}\\) right: \\(x\\)-intercepts \\(\\left(-\\frac{3}{4},0\\right)\\) and \\(\\left(\\frac{5}{4},0\\right)\\), minimum \\(\\left(-\\frac{1}{4},-27\\right)\\), inflections \\(\\left(\\frac{1}{4},-16\\right)\\) and \\(\\left(\\frac{5}{4},0\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((x_0, y_0) \\mapsto \\left(\\tfrac{x_0}{2} + \\tfrac{1}{4}, \\; y_0\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((-2,0)\\to(-\\tfrac{3}{4},0); \\quad (2,0)\\to(\\tfrac{5}{4},0)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((-1,-27)\\to(-\\tfrac{1}{4},-27); \\quad (0,-16)\\to(\\tfrac{1}{4},-16)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: The graph of part (e) dilated horizontally by \\(\\frac{1}{2}\\) and shifted \\(\\frac{1}{4}\\) right: \\(x\\)-intercepts \\(\\left(-\\frac{3}{4},0\\right)\\) and \\(\\left(\\frac{5}{4},0\\right)\\), minimum \\(\\left(-\\frac{1}{4},-27\\right)\\), inflections \\(\\left(\\frac{1}{4},-16\\right)\\) and \\(\\left(\\frac{5}{4},0\\right)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(The graph of part (e) dilated horizontally by \\(\\frac{1}{2}\\) and shifted \\(\\frac{1}{4}\\) right: \\(x\\)-intercepts \\(\\left(-\\frac{3}{4},0\\right)\\) and \\(\\left(\\frac{5}{4},0\\right)\\), minimum \\(\\left(-\\frac{1}{4},-27\\right)\\), inflections \\(\\left(\\frac{1}{4},-16\\right)\\) and \\(\\left(\\frac{5}{4},0\\right)\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "fortst2020-q11a",
    "topicId": "y12a-exam-fortst",
    "c": "1C",
    "t": "Geometric sequences",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Tom planted a silky oak ($80$ cm tall). In the first year it grew $50$ cm, and each year's growth is $90\\%$ of the previous year's. What was the total growth of the silky oak after $3$ years?",
    "opts": [
      "\\(135.5\\) cm",
      "\\(135.5\\) cm + 1",
      "\\(145.5\\) cm",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "The yearly growths form a GP: $50, 50(0.9), 50(0.9)^2$. Add the first three terms.",
    "solution": "The correct answer is \\(135.5\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(50, \\; 50(0.9), \\; 50(0.9)^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(50 + 45 + 40.5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= 135.5 \\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(135.5\\) cm. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(135.5\\) cm",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q11b",
    "topicId": "y12a-exam-fortst",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Assuming the silky oak ($80$ cm at planting, growths $50, 50(0.9), dots$) maintains this growth pattern, explain why the tree will never reach a height of $6$ metres.",
    "opts": [
      "The limiting growth is \\(500\\) cm, so the maximum height is \\(80 + 500 = 580\\) cm \\(< 600\\) cm.",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find the limiting sum of the growth GP, then add the initial height.",
    "solution": "The correct answer is The limiting growth is \\(500\\) cm, so the maximum height is \\(80 + 500 = 580\\) cm \\(< 600\\) cm..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_\\infty = \\frac{a}{1 - r} = \\frac{50}{1 - 0.9}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_\\infty = 500 \\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(80 + 500 = 580 \\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: The limiting growth is \\(500\\) cm, so the maximum height is \\(80 + 500 = 580\\) cm \\(< 600\\) cm.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The limiting growth is \\(500\\) cm, so the maximum height is \\(80 + 500 = 580\\) cm \\(< 600\\) cm.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q11c",
    "topicId": "y12a-exam-fortst",
    "c": "1G",
    "t": "Summing a geometric series",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In which year will the silky oak ($80$ cm at planting, growths $50, 50(0.9), dots$) reach a height of $5$ metres?",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "During the \\(18^{\\text{th}}\\) year",
      "During the \\(18^{\\text{th}}\\) year + 1"
    ],
    "a": 2,
    "answer": "2",
    "hint": "It needs to grow $500 - 80 = 420$ cm. Set $S_n = 420$ using the GP sum formula and solve for $n$.",
    "solution": "The correct answer is During the \\(18^{\\text{th}}\\) year.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{growth needed} = 420 \\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{50(1 - 0.9^n)}{1 - 0.9} = 420\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(500(1 - 0.9^n) = 420 \\Rightarrow 0.9^n = 0.16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: During the \\(18^{\\text{th}}\\) year. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "During the \\(18^{\\text{th}}\\) year",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q12a",
    "topicId": "y12a-exam-fortst",
    "c": "8G",
    "t": "Applications of exponential and logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A chemical concentration is $C = C_0 e^{-kt}$ (in kL/ha, $t$ in years). It is $6$ kL/ha at $t = 0$ and $2.4$ kL/ha at $t = 1$. Show that $C_0 = 6$ and $k = -\\ln\\!\\left(\\dfrac{2}{5}\\right)$.",
    "opts": [
      "-C_0 = 6\\) and \\(k = -\\ln\\!\\left(\\dfrac{2}{5}\\right)",
      "C_0 = 6\\) and \\(k = -\\ln\\!\\left(\\dfrac{2}{5}\\right)",
      "C_0 = 6\\) and \\(k = -\\ln\\!\\left(\\frac{1}{5}\\right)",
      "C_0 = 6\\) and \\(k = -\\ln\\!\\left(\\frac{5}{2}\\right)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Substitute $t = 0$ to find $C_0$, then $t = 1$ to find $k$.",
    "solution": "The correct answer is C_0 = 6\\) and \\(k = -\\ln\\!\\left(\\dfrac{2}{5}\\right).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(C = C_0 e^{0} = C_0 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2.4 = 6e^{-k}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(e^{-k} = \\frac{2.4}{6} = 0.4 = \\frac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: C_0 = 6\\) and \\(k = -\\ln\\!\\left(\\dfrac{2}{5}\\right). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "C_0 = 6\\) and \\(k = -\\ln\\!\\left(\\dfrac{2}{5}\\right)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q12b",
    "topicId": "y12a-exam-fortst",
    "c": "8E",
    "t": "Equations involving logarithms and indices",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The paddock is safe to use once the concentration falls below $0.2$ kL/ha, where $C = 6e^{-kt}$ and $k = -\\ln\\!\\left(\\dfrac{2}{5}\\right)$. How long, to the nearest month, must the farmer wait?",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(\\approx 3\\) years \\(9\\) months",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set $C = 0.2$, solve for $t$ using $t = \\dfrac{\\ln(1/30)}{\\ln(2/5)}$.",
    "solution": "The correct answer is \\(\\approx 3\\) years \\(9\\) months.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(0.2 = 6e^{-kt}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(e^{-kt} = \\frac{0.2}{6} = \\frac{1}{30}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\ln\\tfrac{1}{30} = \\ln\\tfrac{2}{5}\\cdot t \\Rightarrow t = \\frac{\\ln(1/30)}{\\ln(2/5)}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\approx 3\\) years \\(9\\) months. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\approx 3\\) years \\(9\\) months",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q13a",
    "topicId": "y12a-exam-fortst",
    "c": "12F",
    "t": "Probability tree diagrams",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Alice and Raoul take turns throwing darts; first to hit the bullseye wins. Alice (first) hits with probability $\\frac{1}{30}$, Raoul with probability $\\frac{1}{40}$. Draw a tree diagram for the first four throws (Alice, Raoul, Alice, Raoul), noting the game stops once a bullseye is hit.",
    "answer": "A tree where each throw branches into Win (W) and Lose (W'); the game continues only along the \"lose\" branches: Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\), Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "A tree where each throw branches into Win (W) and Lose (W'); the game continues only along the \"lose\" branches: Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\), Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\text{W}) \\text{ or } P(\\text{W}')\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A: \\tfrac{1}{30}, tfrac{29}{30}; \\;\\; R: \\tfrac{1}{40}, tfrac{39}{40}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(A tree where each throw branches into Win (W) and Lose (W'); the game continues only along the \"lose\" branches: Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\), Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: A tree where each throw branches into Win (W) and Lose (W'); the game continues only along the \"lose\" branches: Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\), Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(A tree where each throw branches into Win (W) and Lose (W'); the game continues only along the \"lose\" branches: Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\), Alice \\(\\frac{1}{30}\\), Raoul \\(\\frac{1}{40}\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "fortst2020-q13b",
    "topicId": "y12a-exam-fortst",
    "c": "12E",
    "t": "Multi-stage experiments",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Alice (first, $P = \\frac{1}{30}$) and Raoul ($P = \\frac{1}{40}$) throw in turn. What is the probability that Alice wins on her first or second throw?",
    "opts": [
      "\\(-0.06475\\)",
      "\\(-0.93525\\)",
      "\\(\\dfrac{259}{4000}\\)",
      "\\(1.06475\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Alice wins on her 1st throw with $\\frac{1}{30}$; on her 2nd throw both she and Raoul must first miss, then Alice hits.",
    "solution": "The correct answer is \\(\\dfrac{259}{4000}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P_1 = \\frac{1}{30}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P_2 = \\frac{29}{30}\\cdot\\frac{39}{40}\\cdot\\frac{1}{30}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P = \\frac{1}{30} + \\frac{1131}{36000}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{259}{4000}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{259}{4000}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q13c",
    "topicId": "y12a-exam-fortst",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Alice (first, $P = \\frac{1}{30}$) and Raoul ($P = \\frac{1}{40}$) throw in turn until someone hits. What is the probability that Alice eventually wins the game?",
    "opts": [
      "\\(-0.42028985507246375\\)",
      "\\(-0.5797101449275363\\)",
      "\\(\\dfrac{40}{69}\\)",
      "\\(1.5797101449275361\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Alice can win on throw $1, 2, 3, dots$; these form a geometric series with ratio $r = \\frac{29}{30}\\cdot\\frac{39}{40}$.",
    "solution": "The correct answer is \\(\\dfrac{40}{69}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P = \\frac{1}{30} + \\frac{29}{30}\\cdot\\frac{39}{40}\\cdot\\frac{1}{30} + \\cdots\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(a = \\frac{1}{30}, quad r = \\frac{29}{30}\\cdot\\frac{39}{40} = \\frac{1131}{1200}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S_\\infty = \\frac{1/30}{1 - \\frac{1131}{1200}} = \\frac{1/30}{\\frac{69}{1200}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{40}{69}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{40}{69}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q14a",
    "topicId": "y12a-exam-fortst",
    "c": "8E",
    "t": "Equations involving logarithms and indices",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The diagram shows $y = 4e^{-x}$ and $y = e^x - 3$. Show that the curves intersect when $e^{2x} - 3e^x - 4 = 0$.",
    "opts": [
      "\\(e^{-(2x)} - 3e^x - 4 = 0\\)",
      "\\(e^{2x+1} - 3e^x - 4 = 0\\)",
      "\\(e^{2x} + 3e^x + 4 = 0\\)",
      "\\(e^{2x} - 3e^x - 4 = 0\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set the two expressions equal and multiply through by $e^x$.",
    "solution": "The correct answer is \\(e^{2x} - 3e^x - 4 = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(4e^{-x} = e^x - 3\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 340,
            "boundingbox": [
              -2.5,
              6,
              2.5,
              -5
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0],[2.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-5],[0,6]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 4*Math.exp(-x); }, -2.5, 1.8], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return Math.exp(x) - 3; }, -2.5, 2.2], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('point', [Math.log(4), 1], {name:'P', size:2.5, color:'red', fixed:true, label:{offset:[8,6]}});\nboard.create('text', [-1.7, 4.3, 'y = 4e^{-x}'], {fontSize:11, strokeColor:'#1d4ed8'});\nboard.create('text', [1.1, 3.2, 'y = e^x - 3'], {fontSize:11, strokeColor:'#15803d'});\nboard.create('text', [2.2, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 5.4, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(4 = e^{2x} - 3e^x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(e^{2x} - 3e^x - 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: e^{2x} - 3e^x - 4 = 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(e^{2x} - 3e^x - 4 = 0\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 340,
        "boundingbox": [
          -2.5,
          6,
          2.5,
          -5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0],[2.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-5],[0,6]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 4*Math.exp(-x); }, -2.5, 1.8], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return Math.exp(x) - 3; }, -2.5, 2.2], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('point', [Math.log(4), 1], {name:'P', size:2.5, color:'red', fixed:true, label:{offset:[8,6]}});\nboard.create('text', [-1.7, 4.3, 'y = 4e^{-x}'], {fontSize:11, strokeColor:'#1d4ed8'});\nboard.create('text', [1.1, 3.2, 'y = e^x - 3'], {fontSize:11, strokeColor:'#15803d'});\nboard.create('text', [2.2, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 5.4, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q14b",
    "topicId": "y12a-exam-fortst",
    "c": "8E",
    "t": "Equations involving logarithms and indices",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Hence show that the $x$-coordinate of the point $P$ is $x = \\ln 4$ (using $e^{2x} - 3e^x - 4 = 0$).",
    "opts": [
      "\\(-x = \\ln 4\\)",
      "\\(x = \\ln 4\\)",
      "\\(x = \\ln 4 + 1\\)",
      "\\(x = \\log 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Let $u = e^x$ to get a quadratic; reject the negative root since $e^x > 0$.",
    "solution": "The correct answer is \\(x = \\ln 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u^2 - 3u - 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((u - 4)(u + 1) = 0 \\Rightarrow u = 4 \\text{ or } u = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(e^x = 4 \\quad (e^x \\neq -1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = \\ln 4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = \\ln 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q14c",
    "topicId": "y12a-exam-fortst",
    "c": "5E",
    "t": "Applications of integration of e^x",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the exact shaded area between the curves \\(y = 4e^{-x}\\) and \\(y = e^{x} - 3\\), from \\(x = 0\\) to \\(x = \\ln 4\\).",
    "opts": [
      "\\(2\\ln 4\\)",
      "\\(3\\ln 4 - 5\\)",
      "\\(3\\ln 4\\)",
      "\\(4\\ln 4\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Integrate (upper minus lower): \\(4e^{-x}-(e^{x}-3)\\) from \\(0\\) to \\(\\ln 4\\).",
    "solution": "\\(A=\\int_{0}^{\\ln 4}(4e^{-x}-e^{x}+3)\\,dx=[-4e^{-x}-e^{x}+3x]_{0}^{\\ln 4}=3\\ln 4\\).",
    "solutionSteps": [
      {
        "explanation": "On \\([0,\\ln 4]\\) the upper curve is \\(y=4e^{-x}\\) and the lower is \\(y=e^{x}-3\\). The shaded area is the definite integral of upper minus lower.",
        "workingOut": "\\(A=\\int_{0}^{\\ln 4}\\big(4e^{-x}-(e^{x}-3)\\big)\\,dx=\\int_{0}^{\\ln 4}(4e^{-x}-e^{x}+3)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term: \\(\\int 4e^{-x}\\,dx=-4e^{-x}\\), \\(\\int e^{x}\\,dx=e^{x}\\), and \\(\\int 3\\,dx=3x\\).",
        "workingOut": "\\(A=\\big[-4e^{-x}-e^{x}+3x\\big]_{0}^{\\ln 4}\\)",
        "graphData": null
      },
      {
        "explanation": "At the upper limit \\(x=\\ln 4\\), use \\(e^{-\\ln 4}=\\dfrac{1}{4}\\) and \\(e^{\\ln 4}=4\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(-4e^{-\\ln 4}-e^{\\ln 4}+3\\ln 4=-4\\cdot\\dfrac{1}{4}-4+3\\ln 4=-1-4+3\\ln 4=-5+3\\ln 4\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract lower from upper: \\((-5+3\\ln 4)-(-5)=3\\ln 4\\). The exact shaded area is \\(3\\ln 4\\) square units.",
        "workingOut": "\\(A=3\\ln 4\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.exp(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = eˣ'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q15a",
    "topicId": "y12a-exam-fortst",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The diagram shows the velocity–time graph for a particle ($0 \\le t \\le 8$). State the times at which the acceleration is zero.",
    "opts": [
      "t = 3\\) and \\(t = 7",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Acceleration is the gradient of the velocity–time graph; it is zero at the turning points (max/min of $v$).",
    "solution": "The correct answer is t = 3\\) and \\(t = 7.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a = \\frac{dv}{dt}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 280,
            "boundingbox": [
              -1,
              1.6,
              9.5,
              -1.6
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[9.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.6],[0,1.6]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return Math.sin(Math.PI*(t-1)/4); }, 0, 8.5], {strokeColor:'#1d4ed8',strokeWidth:2});\nfor(var t=1;t<=9;t++){ board.create('text',[t-0.1,-0.25,''+t],{fontSize:9}); }\nboard.create('text',[-0.4,1,'1'],{fontSize:9});board.create('text',[-0.5,-1,'-1'],{fontSize:9});\nboard.create('text', [9.1, 0.25, 't'], {fontSize:13});\nboard.create('text', [0.25, 1.45, 'v'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(t = 3 \\text{ (max)}, quad t = 7 \\text{ (min)}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "t = 3\\) and \\(t = 7",
        "graphData": null
      },
      {
        "explanation": "Final answer: t = 3\\) and \\(t = 7. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "t = 3\\) and \\(t = 7",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 280,
        "boundingbox": [
          -1,
          1.6,
          9.5,
          -1.6
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[9.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.6],[0,1.6]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return Math.sin(Math.PI*(t-1)/4); }, 0, 8.5], {strokeColor:'#1d4ed8',strokeWidth:2});\nfor(var t=1;t<=9;t++){ board.create('text',[t-0.1,-0.25,''+t],{fontSize:9}); }\nboard.create('text',[-0.4,1,'1'],{fontSize:9});board.create('text',[-0.5,-1,'-1'],{fontSize:9});\nboard.create('text', [9.1, 0.25, 't'], {fontSize:13});\nboard.create('text', [0.25, 1.45, 'v'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q15b",
    "topicId": "y12a-exam-fortst",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For the same velocity–time graph, state the times ($0 \\le t \\le 8$) at which the speed is increasing.",
    "opts": [
      "-1 < t < 3\\) and \\(5 < t < 7",
      "1 < t < 3\\) and \\(5 < t < 7",
      "1 < t < 3\\) and \\(5 < t < 7 + 1",
      "1 < t < 4\\) and \\(5 < t < 7"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Speed (the magnitude of velocity) increases when $v$ and $a$ have the same sign.",
    "solution": "The correct answer is 1 < t < 3\\) and \\(5 < t < 7.",
    "solutionSteps": [
      {
        "explanation": "Speed is \\(|v|\\). It increases when the particle accelerates in its direction of motion — i.e. when \\(v\\) and \\(a\\) share the same sign.",
        "workingOut": "\\(\\text{speed} \\uparrow \\iff v, a \\text{ same sign}\\)",
        "graphData": null
      },
      {
        "explanation": "On \\(1 < t < 3\\) the velocity is positive and rising (so \\(a > 0\\)) — same sign. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(1 < t < 3: \\; v > 0, \\; a > 0\\)",
        "graphData": null
      },
      {
        "explanation": "On \\(5 < t < 7\\) the velocity is negative and becoming more negative (so \\(a < 0\\)) — same sign. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(5 < t < 7: \\; v < 0, \\; a < 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q16a",
    "topicId": "y12a-exam-fortst",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A particle has velocity $v = \\dfrac{2}{1+t} - t$ m/s ($t \\ge 0$). Find the acceleration of the particle when $t = 0$.",
    "opts": [
      "\\(-3 \\text{ m/s}^2\\)",
      "\\(-3 \\text{ m/s}^2 + 1\\)",
      "\\(-4 \\text{ m/s}^4\\)",
      "\\(3 \\text{ m/s}^2\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Acceleration $a = \\dfrac{dv}{dt}$; differentiate $\\dfrac{2}{1+t} = 2(1+t)^{-1}$, then substitute $t = 0$.",
    "solution": "The correct answer is \\(-3 \\text{ m/s}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(v = 2(1+t)^{-1} - t \\Rightarrow a = -2(1+t)^{-2} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(a = -\\frac{2}{(1)^2} - 1 = -3 \\text{ m/s}^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-3 \\text{ m/s}^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -3 \\text{ m/s}^2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-3 \\text{ m/s}^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q16b",
    "topicId": "y12a-exam-fortst",
    "c": "7C",
    "t": "Integrating with respect to time",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $v = \\dfrac{2}{1+t} - t$, if the particle is initially at the origin, find the displacement $x$ as a function of $t$.",
    "opts": [
      "\\(-x = 2\\ln(1+t) - \\dfrac{t^2}{2}\\)",
      "\\(x = 2\\ln(1+t) - \\dfrac{t^2}{2}\\)",
      "\\(x = 2\\ln(1+t) - \\frac{1}{2}\\)",
      "\\(x = 2\\ln(1+t) - \\frac{2}{t^2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate $v$ with respect to $t$, using $\\int\\frac{2}{1+t}dt = 2\\ln(1+t)$, then apply $x = 0$ at $t = 0$.",
    "solution": "The correct answer is \\(x = 2\\ln(1+t) - \\dfrac{t^2}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x = \\int\\left(\\frac{2}{1+t} - t\\right)dt = 2\\ln(1+t) - \\frac{t^2}{2} + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(0 = 2\\ln 1 - 0 + C \\Rightarrow C = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 2\\ln(1+t) - \\frac{t^2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = 2\\ln(1+t) - \\dfrac{t^2}{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = 2\\ln(1+t) - \\dfrac{t^2}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q16c",
    "topicId": "y12a-exam-fortst",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $v = \\dfrac{2}{1+t} - t$ ($t \\ge 0$), when is the particle stationary?",
    "opts": [
      "\\(t = 1\\) second",
      "\\(t = 1\\) second + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Stationary when $v = 0$; multiply through by $(1+t)$ to form a quadratic and reject negative $t$.",
    "solution": "The correct answer is \\(t = 1\\) second.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{2}{1+t} - t = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2 - t(1+t) = 0 \\Rightarrow t^2 + t - 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((t + 2)(t - 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(t = 1\\) second. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(t = 1\\) second",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q16d",
    "topicId": "y12a-exam-fortst",
    "c": "7C",
    "t": "Integrating with respect to time",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For $x = 2\\ln(1+t) - \\dfrac{t^2}{2}$ (stationary at $t = 1$), how far does the particle travel in the first $2$ seconds? Give your answer to three significant figures.",
    "opts": [
      "\\(\\approx 1.58\\) m",
      "\\(\\approx 1.58\\) m + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "The particle changes direction at $t = 1$. Find $x(0), x(1), x(2)$ and add the distances of each leg.",
    "solution": "The correct answer is \\(\\approx 1.58\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x(0) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x(1) = 2\\ln 2 - \\tfrac{1}{2} \\approx 0.886\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x(2) = 2\\ln 3 - 2 \\approx 0.197\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\approx 1.58\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\approx 1.58\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q17a",
    "topicId": "y12a-exam-fortst",
    "c": "3A",
    "t": "Functions and function notation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A tank holds water $V = 3600\\left(1 - \\dfrac{t}{60}\\right)^2$ litres ($0 \\le t \\le 60$). What volume remains after $10$ minutes?",
    "opts": [
      "\\(\\(2500\\) litres\\)",
      "\\(\\(3000\\) litres\\)",
      "\\(\\(2000\\) litres\\)",
      "\\(\\(1600\\) litres\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $t = 10$ into the model.",
    "solution": "The correct answer is \\(\\(2500\\) litres\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(V = 3600\\left(1 - \\frac{10}{60}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= 3600\\left(\\frac{5}{6}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= 3600\\cdot\\frac{25}{36} = 2500 \\text{ litres}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2500\\) litres. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(2500\\) litres\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q17b",
    "topicId": "y12a-exam-fortst",
    "c": "1D",
    "t": "Solving quadratic equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $V = 3600\\left(1 - \\dfrac{t}{60}\\right)^2$ ($0 \\le t \\le 60$), how long will it take for the tank to become half full (to the nearest minute)?",
    "opts": [
      "\\(\\dfrac{7}{3}\\)",
      "\\(\\approx 18\\) minutes (\\(t \\approx 17.6\\))",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $V = 1800$, take square roots (both signs), and reject the root outside $0 \\le t \\le 60$.",
    "solution": "The correct answer is \\(\\approx 18\\) minutes (\\(t \\approx 17.6\\)).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(3600\\left(1 - \\frac{t}{60}\\right)^2 = 1800\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\left(1 - \\frac{t}{60}\\right)^2 = \\frac{1}{2} \\Rightarrow 1 - \\frac{t}{60} = \\pm\\frac{1}{\\sqrt2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t = 60\\left(1 - \\tfrac{1}{\\sqrt2}\\right) \\approx 17.6 \\;\\text{ or }\\; t = 60\\left(1 + \\tfrac{1}{\\sqrt2}\\right) \\approx 102.4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\approx 18\\) minutes (\\(t \\approx 17.6\\)). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\approx 18\\) minutes (\\(t \\approx 17.6\\))",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q17c",
    "topicId": "y12a-exam-fortst",
    "c": "9J",
    "t": "Rates of change",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $V = 3600\\left(1 - \\dfrac{t}{60}\\right)^2$, at what rate does the model predict the water drains after $20$ minutes?",
    "opts": [
      "\\(80\\) L/min (draining)",
      "\\(80\\) L/min (draining) + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Differentiate $V$ using the chain rule, then substitute $t = 20$.",
    "solution": "The correct answer is \\(80\\) L/min (draining).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{dV}{dt} = 2\\cdot 3600\\left(1 - \\frac{t}{60}\\right)\\left(-\\frac{1}{60}\\right) = -120\\left(1 - \\frac{t}{60}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{dV}{dt} = -120\\left(1 - \\frac{20}{60}\\right) = -120\\cdot\\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= -80 \\Rightarrow 80 \\text{ L/min draining}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(80\\) L/min (draining). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(80\\) L/min (draining)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q17d",
    "topicId": "y12a-exam-fortst",
    "c": "9J",
    "t": "Rates of change",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $V = 3600\\left(1 - \\dfrac{t}{60}\\right)^2$ ($0 \\le t \\le 60$), at what time does the model predict the water drains at its fastest rate?",
    "opts": [
      "At \\(t = 0\\) (rate \\(120\\) L/min)",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "The drain rate is $\\left|\\frac{dV}{dt}\\right| = 120\\left(1 - \\frac{t}{60}\\right)$, which is largest at the smallest $t$.",
    "solution": "The correct answer is At \\(t = 0\\) (rate \\(120\\) L/min).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\left|\\frac{dV}{dt}\\right| = 120\\left(1 - \\frac{t}{60}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{largest at } t = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\left.\\frac{dV}{dt}\\right|_{t=0} = -120 \\Rightarrow 120 \\text{ L/min}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: At \\(t = 0\\) (rate \\(120\\) L/min). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "At \\(t = 0\\) (rate \\(120\\) L/min)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q18a",
    "topicId": "y12a-exam-fortst",
    "c": "11D",
    "t": "Trigonometric graphs in radians",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The average monthly temperature is $T = 7\\sin(nx + 1.5) + 13$. According to the model, what are the maximum and minimum average monthly temperatures?",
    "opts": [
      "Maximum \\(20°\\), minimum \\(6°\\)",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Since $-1 \\le \\sin(\\cdot) \\le 1$, the maximum uses $\\sin = 1$ and the minimum uses $\\sin = -1$.",
    "solution": "The correct answer is Maximum \\(20°\\), minimum \\(6°\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(-1 \\le \\sin(nx + 1.5) \\le 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(T_{\\max} = 7(1) + 13 = 20°\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(T_{\\min} = 7(-1) + 13 = 6°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Maximum \\(20°\\), minimum \\(6°\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Maximum \\(20°\\), minimum \\(6°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q18b",
    "topicId": "y12a-exam-fortst",
    "c": "11D",
    "t": "Trigonometric graphs in radians",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $T = 7\\sin(nx + 1.5) + 13$, the period of the function is $12$. Determine the value of $n$ correct to $2$ decimal places.",
    "opts": [
      "\\(-n = \\dfrac{\\pi}{6} \\approx 0.52\\)",
      "\\(n = \\dfrac{\\pi}{6} \\approx 0.52\\)",
      "\\(n = \\frac{1}{6} \\approx 0.52\\)",
      "\\(n = \\frac{6}{\\pi} \\approx 0.52\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The period of $\\sin(nx + \\dots)$ is $\\dfrac{2\\pi}{n}$. Set it equal to $12$.",
    "solution": "The correct answer is \\(n = \\dfrac{\\pi}{6} \\approx 0.52\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{2\\pi}{n} = 12\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(n = \\frac{2\\pi}{12} = \\frac{\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n \\approx 0.52\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: n = \\dfrac{\\pi}{6} \\approx 0.52. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(n = \\dfrac{\\pi}{6} \\approx 0.52\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q18c",
    "topicId": "y12a-exam-fortst",
    "c": "11B",
    "t": "Solving trigonometric equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $T = 7\\sin\\!\\left(\\dfrac{\\pi}{6}x + 1.5\\right) + 13$ ($x =$ month number), which month has the lowest average monthly temperature?",
    "opts": [
      "June (month \\(6\\))",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "The minimum occurs when $\\sin = -1$, i.e. when the argument equals $\\frac{3\\pi}{2}$.",
    "solution": "The correct answer is June (month \\(6\\)).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\pi}{6}x + 1.5 = \\frac{3\\pi}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{\\frac{3\\pi}{2} - 1.5}{\\frac{\\pi}{6}} \\approx 6.1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 6 \\Rightarrow \\text{June}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: June (month \\(6\\)). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "June (month \\(6\\))",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q18d",
    "topicId": "y12a-exam-fortst",
    "c": "2I",
    "t": "Trigonometric graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Graph the function $T = 7\\sin\\!\\left(\\dfrac{\\pi}{6}x + 1.5\\right) + 13$ for $1 \\le x \\le 12$.",
    "answer": "A sine curve over one period, starting near \\((1, 20)\\), falling to a minimum \\(\\approx (6.1, 6)\\), and rising back to \\(\\approx (12, 20)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "A sine curve over one period, starting near \\((1, 20)\\), falling to a minimum \\(\\approx (6.1, 6)\\), and rising back to \\(\\approx (12, 20)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Fort Street 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T \\in [6, 20], text{ period } 12\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((1, approx 20), (6, 6), (12, approx 20)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(A sine curve over one period, starting near \\((1, 20)\\), falling to a minimum \\(\\approx (6.1, 6)\\), and rising back to \\(\\approx (12, 20)\\).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: A sine curve over one period, starting near \\((1, 20)\\), falling to a minimum \\(\\approx (6.1, 6)\\), and rising back to \\(\\approx (12, 20)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(A sine curve over one period, starting near \\((1, 20)\\), falling to a minimum \\(\\approx (6.1, 6)\\), and rising back to \\(\\approx (12, 20)\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "fortst2020-q19a",
    "topicId": "y12a-exam-fortst",
    "c": "6A",
    "t": "Trigonometry with right-angled triangles",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A boy travels home $H$ to school $S$ ($6$ km apart) via $H \\to B \\to C \\to S$: walks $HB$, skates $BC$, walks $CS$. The canal is $1$ km below the $HS$ line; $\\angle AHB = \\angle DSC = \\theta$. Walking speed $4$ km/h, skating $12$ km/h. Show the time is $T = \\dfrac{1}{2\\cos\\theta} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}$.",
    "opts": [
      "\\(-T = \\dfrac{1}{2\\cos\\theta} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}\\)",
      "\\(T = \\dfrac{1}{2\\cos\\theta} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}\\)",
      "\\(T = \\frac{1}{2\\cos\\theta} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}\\)",
      "\\(T = \\frac{2\\cos\\theta}{1} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "In right triangle $AHB$, $HB = \\frac{1}{\\cos\\theta}$ and $AB = \\tan\\theta$. Distance walked $= 2HB$, skated $= 6 - 2\\tan\\theta$; time $= \\frac{\\text{distance}}{\\text{speed}}$.",
    "solution": "The correct answer is \\(T = \\dfrac{1}{2\\cos\\theta} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "In right triangle \\(AHB\\) (vertical side \\(AH = 1\\) km, angle \\(\\theta\\) at \\(H\\)), use cosine and tangent to find the walked side \\(HB\\) and horizontal offset \\(AB\\).",
        "workingOut": "\\(HB = \\frac{1}{\\cos\\theta}, quad AB = \\tan\\theta\\)",
        "graphData": null
      },
      {
        "explanation": "By symmetry the other walk \\(CS\\) and offset \\(DC\\) are equal. Total distance walked is \\(2HB\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{walked} = 2HB = \\frac{2}{\\cos\\theta}\\)",
        "graphData": null
      },
      {
        "explanation": "The skated distance \\(BC\\) is the \\(6\\) km span minus the two horizontal offsets \\(2\\tan\\theta\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(BC = 6 - 2\\tan\\theta\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 460,
        "height": 260,
        "boundingbox": [
          -1,
          4,
          8,
          -1.8
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nvar H=[0,3],S=[6,3],A=[0,0],B=[1.2,0],C=[4.8,0],D=[6,0];\nboard.create('polygon',[[ -0.3,0],[6.3,0],[6.3,-0.6],[-0.3,-0.6]],{fillColor:'#e2e8f0',fillOpacity:0.6,borders:{visible:false},vertices:{visible:false},fixed:true});\nboard.create('segment',[H,S],{strokeColor:'black'});\nboard.create('segment',[H,A],{strokeColor:'#475569',dash:2});\nboard.create('segment',[S,D],{strokeColor:'#475569',dash:2});\nboard.create('segment',[H,B],{strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('segment',[B,C],{strokeColor:'#15803d',strokeWidth:2});\nboard.create('segment',[C,S],{strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('text',[2.8,3.2,'6 km'],{fontSize:12});\nboard.create('text',[-0.8,1.5,'1km'],{fontSize:11});\nboard.create('text',[6.15,1.5,'1km'],{fontSize:11});\nboard.create('text',[0.35,2.5,'\\u03b8'],{fontSize:12});\nboard.create('text',[5.45,2.5,'\\u03b8'],{fontSize:12});\nboard.create('text',[2.9,-0.35,'CANAL'],{fontSize:10});\nboard.create('text',[-0.2,0.18,'A'],{fontSize:11});board.create('text',[1.2,0.2,'B'],{fontSize:11});board.create('text',[4.7,0.2,'C'],{fontSize:11});board.create('text',[6,0.2,'D'],{fontSize:11});\nboard.create('text',[-0.25,3.25,'H'],{fontSize:12});board.create('text',[6.05,3.25,'S'],{fontSize:12});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "fortst2020-q19b",
    "topicId": "y12a-exam-fortst",
    "c": "6C",
    "t": "Applications of differentiation of trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For $T = \\dfrac{1}{2\\cos\\theta} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}$, find, to the nearest minute, the value of $\\theta$ that minimises the travel time.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(\\theta \\approx 19°28'\\)",
      "\\(\\theta \\approx 19°28' + 1\\)",
      "\\(\\theta \\approx 19°48'\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Differentiate $T$ with respect to $\\theta$, set $\\frac{dT}{d\\theta} = 0$, and solve $\\sin\\theta = \\frac{1}{3}$.",
    "solution": "The correct answer is \\(\\theta \\approx 19°28'\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(T\\). Write \\(\\frac{1}{2\\cos\\theta} = \\frac{1}{2}(\\cos\\theta)^{-1}\\) and \\(\\frac{\\tan\\theta}{6}\\), applying the chain rule.",
        "workingOut": "\\(\\frac{dT}{d\\theta} = \\frac{\\sin\\theta}{2\\cos^2\\theta} - \\frac{\\sec^2\\theta}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(\\frac{dT}{d\\theta} = 0\\); since \\(\\frac{1}{\\cos^2\\theta} \\neq 0\\), the bracket must be zero. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\frac{\\sin\\theta}{2} - \\frac{1}{6} = 0 \\Rightarrow \\sin\\theta = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm it is a minimum using a table of slopes (gradient changes from negative to positive). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{slope: } - \\;0\\; + \\Rightarrow \\text{minimum at } \\theta \\approx 19°28'\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
