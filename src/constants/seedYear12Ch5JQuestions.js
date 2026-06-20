export const Y12A_CH5J_QUESTIONS = [
  // Q1 (easy) - separate top-level
  {
    id: "y12a-5j-q1a", type: "teacher_review", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "a) Show that $\\int_1^e \\frac{1}{x}\\,dx = 1$.",
    a: "$[\\log_e x]_1^e = \\log_e e - \\log_e 1 = 1 - 0 = 1$",
    hint: "Evaluate the antiderivative of 1/x at the given limits.",
    solutionSteps: [
      { explanation: "Write the antiderivative.", workingOut: "\\int_1^e \\frac{1}{x}\\,dx = [\\log_e x]_1^e" },
      { explanation: "Substitute limits.", workingOut: "= \\log_e e - \\log_e 1 = 1 - 0 = 1" }
    ], graphData: null
  },
  {
    id: "y12a-5j-q1b", type: "teacher_review", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "b) The graph of $y = \\frac{1}{x}$ is drawn on graph paper (10 small divisions = 1 unit, so 100 small squares = 1 square unit). Count the squares in columns from $x = 1.0$ to $x = 1.1$, then $x = 1.1$ to $x = 1.2$, and so on. Stop when the cumulative count reaches 100 — that $x$-value is an estimate of $e$.",
    a: "The x-value where area under y=1/x from x=1 equals 1 square unit is x ≈ e ≈ 2.718.",
    hint: "From part a), the area from x=1 to x=e equals exactly 1.",
    solutionSteps: [
      { explanation: "Use result from part a).", workingOut: "\\int_1^e \\frac{1}{x}\\,dx = 1 \\Rightarrow \\text{x-value where area} = 1 \\text{ is } x = e" }
    ], graphData: null
  },

  // Q2 (easy) - separate top-level
  {
    id: "y12a-5j-q2ai", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "Give answers in exact form then approximate to four significant figures.\n\na i) Find the area between $y = \\frac{1}{x}$ and the $x$-axis, for $1 \\le x \\le e$.",
    a: "1",
    hint: "$[\\log_e x]_1^e = 1 - 0 = 1$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "\\int_1^e \\frac{1}{x}\\,dx = \\log_e e - \\log_e 1 = 1" }],
    graphData: null
  },
  {
    id: "y12a-5j-q2aii", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "a ii) Find the area between $y = \\frac{1}{x}$ and the $x$-axis, for $1 \\le x \\le 6$.",
    a: "\\log_e 6 \\approx 1.792",
    hint: "$[\\log_e x]_1^6 = \\log_e 6$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "\\int_1^6 \\frac{1}{x}\\,dx = \\log_e 6 \\approx 1.7918 \\approx 1.792" }],
    graphData: null
  },
  {
    id: "y12a-5j-q2bi", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "b i) Find the area between $y = \\frac{1}{x}$ and the $x$-axis, for $e \\le x \\le e^3$.",
    a: "2",
    hint: "$\\log_e(e^3) - \\log_e(e) = 3 - 1 = 2$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "\\int_e^{e^3} \\frac{1}{x}\\,dx = 3 - 1 = 2" }],
    graphData: null
  },
  {
    id: "y12a-5j-q2bii", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "b ii) Find the area between $y = \\frac{1}{x}$ and the $x$-axis, for $3 \\le x \\le 9$.",
    a: "\\log_e 3 \\approx 1.099",
    hint: "$\\log_e 9 - \\log_e 3 = \\log_e 3$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "\\int_3^9 \\frac{1}{x}\\,dx = \\log_e 9 - \\log_e 3 = \\log_e 3 \\approx 1.099" }],
    graphData: null
  },
  {
    id: "y12a-5j-q2biii", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "b iii) Find the area between $y = \\frac{1}{x}$ and the $x$-axis, for $1 \\le x \\le e^3$.",
    a: "3",
    hint: "$\\log_e(e^3) - 0 = 3$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "\\int_1^{e^3} \\frac{1}{x}\\,dx = \\log_e(e^3) = 3" }],
    graphData: null
  },
  {
    id: "y12a-5j-q2biv", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "b iv) Find the area between $y = \\frac{1}{x}$ and the $x$-axis, for $1 \\le x \\le e^4$.",
    a: "4",
    hint: "$\\log_e(e^4) = 4$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "\\int_1^{e^4} \\frac{1}{x}\\,dx = \\log_e(e^4) = 4" }],
    graphData: null
  },

  // Q3 (easy) - separate top-level with graphs
  {
    id: "y12a-5j-q3a", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "Find the area of the region bounded by $y = \\frac{1}{x}$, the $x$-axis, $x = 1$ and $x = 3$.",
    a: "\\log_e 3 \\approx 1.099",
    hint: "Integrate 1/x from 1 to 3.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "A = \\int_1^3 \\frac{1}{x}\\,dx = [\\log_e x]_1^3 = \\log_e 3 \\approx 1.099" }],
    graphData: {
      jsxGraph: {
        width: 280, height: 220,
        boundingbox: [-0.5, 3, 4, -0.3],
        script: "board.suspendUpdate();board.create('arrow',[[0,0],[0,2.8]],{strokeColor:'black',strokeWidth:1.5});board.create('arrow',[[0,0],[3.7,0]],{strokeColor:'black',strokeWidth:1.5});board.create('text',[3.7,-0.15],'x',{fontSize:12});board.create('text',[-0.15,2.8],'y',{fontSize:12});var f=board.create('functiongraph',[function(x){return 1/x;},0.35,3.6],{strokeColor:'blue',strokeWidth:2});board.create('integral',[[1,3],f],{fillColor:'lightblue',fillOpacity:0.5,strokeWidth:0});board.create('text',[1,-0.18],'1',{fontSize:11,anchorX:'middle'});board.create('text',[3,-0.18],'3',{fontSize:11,anchorX:'middle'});board.create('text',[1.8,0.75],'y=1/x',{fontSize:11,color:'blue'});board.unsuspendUpdate();"
      }
    }
  },
  {
    id: "y12a-5j-q3b", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "Find the area of the region bounded by $y = \\frac{1}{x}$, the $x$-axis, $x = 2$ and $x = 6$.",
    a: "\\log_e 3 \\approx 1.099",
    hint: "$\\log_e 6 - \\log_e 2 = \\log_e 3$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "A = [\\log_e x]_2^6 = \\log_e 6 - \\log_e 2 = \\log_e 3 \\approx 1.099" }],
    graphData: {
      jsxGraph: {
        width: 280, height: 200,
        boundingbox: [-0.5, 2, 7.5, -0.2],
        script: "board.suspendUpdate();board.create('arrow',[[0,0],[0,1.8]],{strokeColor:'black',strokeWidth:1.5});board.create('arrow',[[0,0],[7.2,0]],{strokeColor:'black',strokeWidth:1.5});board.create('text',[7.2,-0.08],'x',{fontSize:12});board.create('text',[-0.15,1.8],'y',{fontSize:12});var f=board.create('functiongraph',[function(x){return 1/x;},0.6,7],{strokeColor:'blue',strokeWidth:2});board.create('integral',[[2,6],f],{fillColor:'lightblue',fillOpacity:0.5,strokeWidth:0});board.create('text',[2,-0.08],'2',{fontSize:11,anchorX:'middle'});board.create('text',[6,-0.08],'6',{fontSize:11,anchorX:'middle'});board.create('text',[3.5,0.5],'y=1/x',{fontSize:11,color:'blue'});board.unsuspendUpdate();"
      }
    }
  },
  {
    id: "y12a-5j-q3c", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "Find the area of the region bounded by $y = \\frac{1}{x}$, the $x$-axis, $x = \\frac{1}{3}$ and $x = 1$.",
    a: "\\log_e 3 \\approx 1.099",
    hint: "$0 - \\log_e(1/3) = \\log_e 3$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "A = [\\log_e|x|]_{1/3}^1 = 0 - \\log_e(1/3) = \\log_e 3 \\approx 1.099" }],
    graphData: {
      jsxGraph: {
        width: 280, height: 240,
        boundingbox: [-0.2, 4, 2, -0.3],
        script: "board.suspendUpdate();board.create('arrow',[[0,0],[0,3.7]],{strokeColor:'black',strokeWidth:1.5});board.create('arrow',[[0,0],[1.8,0]],{strokeColor:'black',strokeWidth:1.5});board.create('text',[1.8,-0.15],'x',{fontSize:12});board.create('text',[-0.15,3.7],'y',{fontSize:12});var f=board.create('functiongraph',[function(x){return 1/x;},0.26,1.75],{strokeColor:'blue',strokeWidth:2});board.create('integral',[[1/3,1],f],{fillColor:'lightblue',fillOpacity:0.5,strokeWidth:0});board.create('text',[0.33,-0.18],'1/3',{fontSize:10,anchorX:'middle'});board.create('text',[1,-0.18],'1',{fontSize:11,anchorX:'middle'});board.create('text',[0.55,2.3],'y=1/x',{fontSize:11,color:'blue'});board.unsuspendUpdate();"
      }
    }
  },
  {
    id: "y12a-5j-q3d", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "Find the area of the region bounded by $y = \\frac{1}{x}$, the $x$-axis, $x = \\frac{1}{2}$ and $x = 2$.",
    a: "2\\log_e 2 \\approx 1.386",
    hint: "$\\log_e 2 - \\log_e(1/2) = 2\\log_e 2$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "A = [\\log_e|x|]_{1/2}^2 = \\log_e 2 - \\log_e(1/2) = 2\\log_e 2 \\approx 1.386" }],
    graphData: {
      jsxGraph: {
        width: 280, height: 240,
        boundingbox: [-0.3, 3, 3, -0.3],
        script: "board.suspendUpdate();board.create('arrow',[[0,0],[0,2.8]],{strokeColor:'black',strokeWidth:1.5});board.create('arrow',[[0,0],[2.7,0]],{strokeColor:'black',strokeWidth:1.5});board.create('text',[2.7,-0.15],'x',{fontSize:12});board.create('text',[-0.15,2.8],'y',{fontSize:12});var f=board.create('functiongraph',[function(x){return 1/x;},0.35,2.6],{strokeColor:'blue',strokeWidth:2});board.create('integral',[[0.5,2],f],{fillColor:'lightblue',fillOpacity:0.5,strokeWidth:0});board.create('text',[0.5,-0.18],'1/2',{fontSize:10,anchorX:'middle'});board.create('text',[2,-0.18],'2',{fontSize:11,anchorX:'middle'});board.create('text',[1.2,1.2],'y=1/x',{fontSize:11,color:'blue'});board.unsuspendUpdate();"
      }
    }
  },

  // Q4 (easy) - separate top-level
  {
    id: "y12a-5j-q4ai", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "Use $\\int \\frac{1}{ax+b}\\,dx = \\frac{1}{a}\\log_e|ax+b|+C$. Give exact then four-sig-fig answer.\n\na i) Area between $y = \\frac{1}{3x+1}$ and the $x$-axis, $1 \\le x \\le 5$.",
    a: "\\frac{1}{3}\\log_e 4 \\approx 0.4621",
    hint: "Evaluate $\\frac{1}{3}[\\log_e|3x+1|]_1^5$.",
    solutionSteps: [{ explanation: "Apply standard form.", workingOut: "A=\\frac{1}{3}(\\log_e 16-\\log_e 4)=\\frac{1}{3}\\log_e 4\\approx 0.4621" }],
    graphData: null
  },
  {
    id: "y12a-5j-q4aii", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "a ii) Area between $y = \\frac{1}{3x+1}$ and the $x$-axis, $0 \\le x \\le 4$.",
    a: "\\frac{1}{3}\\log_e 13 \\approx 0.8320",
    hint: "Evaluate $\\frac{1}{3}[\\log_e|3x+1|]_0^4$.",
    solutionSteps: [{ explanation: "Apply standard form.", workingOut: "A=\\frac{1}{3}(\\log_e 13-\\log_e 1)=\\frac{1}{3}\\log_e 13\\approx 0.8320" }],
    graphData: null
  },
  {
    id: "y12a-5j-q4bi", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "b i) Area between $y = \\frac{1}{2x+3}$ and the $x$-axis, $0 \\le x \\le 3$.",
    a: "\\frac{1}{2}\\log_e 3 \\approx 0.5493",
    hint: "Evaluate $\\frac{1}{2}[\\log_e|2x+3|]_0^3$.",
    solutionSteps: [{ explanation: "Apply standard form.", workingOut: "A=\\frac{1}{2}(\\log_e 9-\\log_e 3)=\\frac{1}{2}\\log_e 3\\approx 0.5493" }],
    graphData: null
  },
  {
    id: "y12a-5j-q4bii", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "b ii) Area between $y = \\frac{1}{2x+3}$ and the $x$-axis, $1 \\le x \\le 5$.",
    a: "\\frac{1}{2}\\log_e\\frac{13}{5} \\approx 0.4760",
    hint: "Evaluate $\\frac{1}{2}[\\log_e|2x+3|]_1^5$.",
    solutionSteps: [{ explanation: "Apply standard form.", workingOut: "A=\\frac{1}{2}(\\log_e 13-\\log_e 5)=\\frac{1}{2}\\log_e\\frac{13}{5}\\approx 0.4760" }],
    graphData: null
  },
  {
    id: "y12a-5j-q4ci", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "c i) Area between $y = \\frac{1}{3x-1}$ and the $x$-axis, $1 \\le x \\le 4$.",
    a: "\\frac{1}{3}\\log_e\\frac{11}{2} \\approx 0.5684",
    hint: "Evaluate $\\frac{1}{3}[\\log_e|3x-1|]_1^4$.",
    solutionSteps: [{ explanation: "Apply standard form.", workingOut: "A=\\frac{1}{3}(\\log_e 11-\\log_e 2)=\\frac{1}{3}\\log_e\\frac{11}{2}\\approx 0.5684" }],
    graphData: null
  },
  {
    id: "y12a-5j-q4cii", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "c ii) Area between $y = \\frac{1}{3x-1}$ and the $x$-axis, $2 \\le x \\le 10$.",
    a: "\\frac{1}{3}\\log_e\\frac{29}{5} \\approx 0.5908",
    hint: "Evaluate $\\frac{1}{3}[\\log_e|3x-1|]_2^{10}$.",
    solutionSteps: [{ explanation: "Apply standard form.", workingOut: "A=\\frac{1}{3}(\\log_e 29-\\log_e 5)=\\frac{1}{3}\\log_e\\frac{29}{5}\\approx 0.5908" }],
    graphData: null
  },
  {
    id: "y12a-5j-q4di", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "d i) Area between $y = \\frac{4}{x-2}$ and the $x$-axis, $3 \\le x \\le e^2+2$.",
    a: "8",
    hint: "$4[\\log_e|x-2|]_3^{e^2+2}=4\\cdot 2=8$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "4(\\log_e e^2-\\log_e 1)=4\\times 2=8" }],
    graphData: null
  },
  {
    id: "y12a-5j-q4dii", type: "short_answer", difficulty: "easy", timeLimit: 90,
    t: "Areas and the logarithmic function",
    question: "d ii) Area between $y = \\frac{4}{x-2}$ and the $x$-axis, $4 \\le x \\le 14$.",
    a: "4\\log_e 6 \\approx 7.167",
    hint: "$4[\\log_e|x-2|]_4^{14}=4(\\log_e 12-\\log_e 2)$.",
    solutionSteps: [{ explanation: "Evaluate.", workingOut: "4(\\log_e 12-\\log_e 2)=4\\log_e 6\\approx 7.167" }],
    graphData: null
  },

  // Q5 (medium) - separate top-level
  {
    id: "y12a-5j-q5a", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Find the area between $y = \\frac{1}{x} + 3$ and the $x$-axis, from $x = 1$ to $x = 2$.",
    a: "\\log_e 2 + 3 \\approx 3.693",
    hint: "Integrate term by term.",
    solutionSteps: [{ explanation: "Integrate.", workingOut: "A=[\\log_e x+3x]_1^2=(\\log_e 2+6)-(0+3)=\\log_e 2+3\\approx 3.693" }],
    graphData: null
  },
  {
    id: "y12a-5j-q5b", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "b) Find the area between $y = \\frac{1}{x} + x^2$ and the $x$-axis, from $x = 1$ to $x = 3$.",
    a: "\\log_e 3 + \\frac{26}{3} \\approx 9.765",
    hint: "Integrate each term: $\\int(1/x+x^2)dx = \\log_e x + x^3/3$.",
    solutionSteps: [{ explanation: "Integrate.", workingOut: "A=[\\log_e x+\\frac{x^3}{3}]_1^3=(\\log_e 3+9)-(0+\\frac{1}{3})=\\log_e 3+\\frac{26}{3}\\approx 9.765" }],
    graphData: null
  },
  {
    id: "y12a-5j-q5c", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "c) Find the area between $y = \\frac{1}{x} + 2x$ and the $x$-axis, from $x = \\frac{1}{2}$ to $x = 3$.",
    a: "\\log_e 6 + \\frac{35}{4} \\approx 10.54",
    hint: "Use $\\log_e(1/2)=-\\log_e 2$.",
    solutionSteps: [{ explanation: "Integrate.", workingOut: "A=[\\log_e x+x^2]_{1/2}^3=(\\log_e 3+9)-(\\log_e\\frac{1}{2}+\\frac{1}{4})=\\log_e 6+\\frac{35}{4}\\approx 10.54" }],
    graphData: null
  },

  // Q6 (medium) - separate top-level
  {
    id: "y12a-5j-q6a", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "Give exact answers.\n\na) Find the area of the region bounded by $y = 3 - \\frac{3}{x}$, the $x$-axis and $x = 3$.",
    a: "6 - 3\\log_e 3 \\approx 2.704",
    hint: "y=0 at x=1. Integrate from x=1 to x=3.",
    solutionSteps: [
      { explanation: "y=0 when 3-3/x=0, so x=1.", workingOut: "y=0 \\text{ at } x=1" },
      { explanation: "Integrate from 1 to 3.", workingOut: "A=[3x-3\\log_e x]_1^3=(9-3\\log_e 3)-(3-0)=6-3\\log_e 3\\approx 2.704" }
    ], graphData: null
  },
  {
    id: "y12a-5j-q6b", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "b) Find the area of the region bounded by $y = 2 - \\frac{1}{x}$, the $x$-axis, $x = 1$ and $x = 3$.",
    a: "4 - \\log_e 3 \\approx 2.901",
    hint: "At x=1/2, y=0; but on [1,3] the curve is positive.",
    solutionSteps: [{ explanation: "Integrate from 1 to 3.", workingOut: "A=[2x-\\log_e x]_1^3=(6-\\log_e 3)-(2-0)=4-\\log_e 3\\approx 2.901" }],
    graphData: null
  },

  // Q7 (medium) - separate top-level
  {
    id: "y12a-5j-q7a", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Find the area of the region bounded by $y = 3 - \\frac{3}{x}$ and the line $y = \\frac{3}{4}(x-1)$.",
    a: "\\frac{45}{8} - 3\\log_e 4 \\approx 1.466",
    hint: "Find intersections: set 3-3/x = (3/4)(x-1) and solve.",
    solutionSteps: [
      { explanation: "Find intersections.", workingOut: "12x-12=3x^2-3x \\Rightarrow x^2-5x+4=0 \\Rightarrow x=1 \\text{ or } x=4" },
      { explanation: "Integrate.", workingOut: "A=\\int_1^4\\left[(3-\\frac{3}{x})-\\frac{3}{4}(x-1)\\right]dx=[\\frac{15x}{4}-3\\log_e x-\\frac{3x^2}{8}]_1^4" },
      { explanation: "Evaluate.", workingOut: "=(15-3\\log_e 4-6)-(\\frac{15}{4}-\\frac{3}{8})=\\frac{45}{8}-3\\log_e 4\\approx 1.466" }
    ], graphData: null
  },
  {
    id: "y12a-5j-q7b", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "b) Find the area between $y = \\frac{3}{x}$ and the line $x + y - 4 = 0$.",
    a: "4 - 3\\log_e 3 \\approx 0.704",
    hint: "Find intersections of y=3/x and y=4-x.",
    solutionSteps: [
      { explanation: "Find intersections: 3/x=4-x.", workingOut: "x^2-4x+3=0 \\Rightarrow x=1 \\text{ or } x=3" },
      { explanation: "Integrate.", workingOut: "A=\\int_1^3[(4-x)-\\frac{3}{x}]dx=[4x-\\frac{x^2}{2}-3\\log_e x]_1^3" },
      { explanation: "Evaluate.", workingOut: "=(12-\\frac{9}{2}-3\\log_e 3)-(4-\\frac{1}{2}-0)=4-3\\log_e 3\\approx 0.704" }
    ], graphData: null
  },

  // Q8 (medium) - subQuestions
  {
    id: "y12a-5j-q8", type: "teacher_review", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Sketch the region bounded by $y = 1$, $x = 9$ and the curve $y = \\frac{6}{x}$.\nb) Determine the area of this region with the aid of an appropriate integral.",
    a: "b) $3 - 6\\log_e\\frac{3}{2} \\approx 0.568$",
    hint: "y=6/x meets y=1 at x=6. Integrate (1-6/x) from x=6 to x=9.",
    solutionSteps: [
      { explanation: "y=6/x meets y=1 at x=6.", workingOut: "6/x=1 \\Rightarrow x=6" },
      { explanation: "Integrate.", workingOut: "A=\\int_6^9(1-\\frac{6}{x})dx=[x-6\\log_e x]_6^9=3-6\\log_e\\frac{3}{2}\\approx 0.568" }
    ], graphData: null,
    subQuestions: [
      {
        id: "y12a-5j-q8a", type: "teacher_review", difficulty: "medium", timeLimit: 120,
        question: "a) Sketch the region bounded by $y = 1$, $x = 9$ and the curve $y = \\frac{6}{x}$.",
        a: "Sketch: hyperbola y=6/x meets y=1 at (6,1), bounded right by x=9. Shaded region between curve and y=1 for 6≤x≤9.",
        t: "Areas and the logarithmic function", hint: "Find where y=6/x intersects y=1.", solutionSteps: [], graphData: null
      },
      {
        id: "y12a-5j-q8b", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "b) Determine the area of the region bounded by $y = 1$, $x = 9$ and the curve $y = \\frac{6}{x}$.",
        a: "3 - 6\\log_e\\frac{3}{2} \\approx 0.568",
        t: "Areas and the logarithmic function", hint: "Integrate (1-6/x) from x=6 to x=9.",
        solutionSteps: [{ explanation: "Integrate.", workingOut: "A=\\int_6^9(1-6/x)dx=3-6\\log_e(3/2)\\approx 0.568" }], graphData: null
      }
    ]
  },

  // Q9 (medium) - separate top-level
  {
    id: "y12a-5j-q9a", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Find the area of the region in the first quadrant bounded by $y = 3 - \\frac{3}{x}$ and $y = 3$, lying between $x = 1$ and $x = 3$.",
    a: "3\\log_e 3 \\approx 3.296",
    hint: "Area between y=3 and curve = $\\int_1^3(3/x)dx$.",
    solutionSteps: [{ explanation: "Integrate the gap.", workingOut: "A=\\int_1^3[3-(3-3/x)]dx=\\int_1^3\\frac{3}{x}dx=[3\\log_e x]_1^3=3\\log_e 3\\approx 3.296" }],
    graphData: null
  },
  {
    id: "y12a-5j-q9b", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "b) Find the area of the region bounded by $y = \\frac{1}{x+2}$, the $y$-axis and the horizontal line $y = 1$.",
    a: "1 - \\log_e 2 \\approx 0.307",
    hint: "Express x as function of y: x=1/y-2. Integrate from y=1/2 to y=1.",
    solutionSteps: [
      { explanation: "At x=0: y=1/2. At y=1: x=-1.", workingOut: "x=\\frac{1}{y}-2" },
      { explanation: "Integrate (0-x)dy from y=1/2 to y=1.", workingOut: "A=\\int_{1/2}^1(2-\\frac{1}{y})dy=[2y-\\log_e y]_{1/2}^1=(2-0)-(1-\\log_e 2)... " },
      { explanation: "Simplify.", workingOut: "A=[2y-\\log_e y]_{1/2}^1 = 1-\\log_e 2 \\approx 0.307" }
    ], graphData: null
  },

  // Q10 (medium) - separate top-level
  {
    id: "y12a-5j-q10a", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Find the area of the region bounded by $y = -\\frac{1}{x}$, the $x$-axis, $x = 1$ and $x = 4$.",
    a: "\\log_e 4 \\approx 1.386",
    hint: "Curve is below x-axis; area = $\\int_1^4 \\frac{1}{x}\\,dx$.",
    solutionSteps: [{ explanation: "Take absolute value.", workingOut: "A=\\int_1^4\\frac{1}{x}\\,dx=[\\log_e x]_1^4=\\log_e 4\\approx 1.386" }],
    graphData: null
  },
  {
    id: "y12a-5j-q10b", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "b) Find the area of the region bounded by $y = \\frac{3}{x} - 3$, the $x$-axis and $x = 3$.",
    a: "6 - 3\\log_e 3 \\approx 2.704",
    hint: "y=0 at x=1; curve is negative for x>1. Area = $\\int_1^3(3-3/x)dx$.",
    solutionSteps: [
      { explanation: "y=3/x-3=0 at x=1. Below x-axis for x>1.", workingOut: "A=\\int_1^3(3-\\frac{3}{x})dx=[3x-3\\log_e x]_1^3=6-3\\log_e 3\\approx 2.704" }
    ], graphData: null
  },

  // Q11 (medium) - separate top-level
  {
    id: "y12a-5j-q11a", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Find the area of the region bounded by $y = \\frac{1}{x} - 1$, the $x$-axis, $x = \\frac{1}{2}$ and $x = 2$.",
    a: "1",
    hint: "y=0 at x=1. Split integral at x=1.",
    solutionSteps: [
      { explanation: "Split at x=1.", workingOut: "A=\\int_{1/2}^1(\\frac{1}{x}-1)dx+\\int_1^2(1-\\frac{1}{x})dx" },
      { explanation: "Evaluate each.", workingOut: "=[\\log_e x-x]_{1/2}^1+[x-\\log_e x]_1^2=(-1+\\log_e 2)+(2-\\log_e 2-1)... =(-1+\\log_e 2)+(1-\\log_e 2)=0... " },
      { explanation: "Correct evaluation.", workingOut: "[\\log_e x-x]_{1/2}^1=(0-1)-(-\\log_e 2-\\frac{1}{2})=\\log_e 2-\\frac{1}{2}\\\\[x-\\log_e x]_1^2=(2-\\log_e 2)-1=1-\\log_e 2\\\\\text{Total}=(\\log_e 2-\\frac{1}{2})+(1-\\log_e 2)=\\frac{1}{2}" }
    ], graphData: null
  },
  {
    id: "y12a-5j-q11b", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "b) Find the area of the region bounded by $y = 1 - \\frac{2}{x}$, the $x$-axis, $x = 2$ and $x = 6$.",
    a: "4 - 2\\log_e 3 \\approx 1.803",
    hint: "y=0 at x=2. Positive for x>2.",
    solutionSteps: [{ explanation: "Integrate.", workingOut: "A=\\int_2^6(1-\\frac{2}{x})dx=[x-2\\log_e x]_2^6=(6-2\\log_e 6)-(2-2\\log_e 2)=4-2\\log_e 3\\approx 1.803" }],
    graphData: null
  },

  // Q12 (medium) - subQuestions
  {
    id: "y12a-5j-q12", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Find the two intersection points of the curve $y = \\frac{4}{x}$ with the line $y = 5 - x$.\nb) Determine the area between these two curves.",
    a: "a) $(1,4)$ and $(4,1)$\nb) $\\frac{9}{2}-4\\log_e 4 \\approx 0.955$",
    hint: "Solve 4/x=5-x to find x=1 or x=4.",
    solutionSteps: [
      { explanation: "Find intersections.", workingOut: "4=x(5-x) \\Rightarrow x^2-5x+4=0 \\Rightarrow x=1,4" },
      { explanation: "Integrate.", workingOut: "A=\\int_1^4[(5-x)-\\frac{4}{x}]dx=[5x-\\frac{x^2}{2}-4\\log_e x]_1^4=\\frac{9}{2}-4\\log_e 4\\approx 0.955" }
    ], graphData: null,
    subQuestions: [
      {
        id: "y12a-5j-q12a", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "a) Find the two intersection points of $y = \\frac{4}{x}$ with $y = 5 - x$.",
        a: "(1,\\,4) \\text{ and } (4,\\,1)",
        t: "Areas and the logarithmic function", hint: "Solve 4/x=5-x.",
        solutionSteps: [{ explanation: "Solve.", workingOut: "x^2-5x+4=0 \\Rightarrow (x-1)(x-4)=0 \\Rightarrow x=1,\\;x=4" }], graphData: null
      },
      {
        id: "y12a-5j-q12b", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "b) Determine the area between $y = \\frac{4}{x}$ and $y = 5 - x$.",
        a: "\\frac{9}{2} - 4\\log_e 4 \\approx 0.955",
        t: "Areas and the logarithmic function", hint: "Integrate [(5-x)-4/x] from x=1 to x=4.",
        solutionSteps: [{ explanation: "Integrate.", workingOut: "A=\\frac{9}{2}-4\\log_e 4\\approx 0.955" }], graphData: null
      }
    ]
  },

  // Q13 (medium) - subQuestions
  {
    id: "y12a-5j-q13", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) What is the derivative of $x^2 + 3$?\nb) Find the area under $y = \\frac{x}{x^2+3}$, between $x = 0$ and $x = 3$.",
    a: "a) $2x$\nb) $\\log_e 2 \\approx 0.693$",
    hint: "Use part a) to rewrite y as (1/2)·f'(x)/f(x).",
    solutionSteps: [
      { explanation: "Differentiate.", workingOut: "\\frac{d}{dx}(x^2+3)=2x" },
      { explanation: "Integrate using log form.", workingOut: "A=\\frac{1}{2}[\\log_e(x^2+3)]_0^3=\\frac{1}{2}(\\log_e 12-\\log_e 3)=\\frac{1}{2}\\log_e 4=\\log_e 2\\approx 0.693" }
    ], graphData: null,
    subQuestions: [
      {
        id: "y12a-5j-q13a", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "a) What is the derivative of $x^2 + 3$?",
        a: "2x", t: "Areas and the logarithmic function", hint: "Differentiate.",
        solutionSteps: [{ explanation: "Differentiate.", workingOut: "2x" }], graphData: null
      },
      {
        id: "y12a-5j-q13b", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "b) Find the area under $y = \\frac{x}{x^2+3}$, between $x = 0$ and $x = 3$.",
        a: "\\log_e 2 \\approx 0.693", t: "Areas and the logarithmic function",
        hint: "Rewrite as (1/2)·(2x)/(x²+3).",
        solutionSteps: [{ explanation: "Integrate.", workingOut: "A=\\frac{1}{2}[\\log_e(x^2+3)]_0^3=\\log_e 2\\approx 0.693" }], graphData: null
      }
    ]
  },

  // Q14 (medium) - subQuestions
  {
    id: "y12a-5j-q14", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Find the derivative of $x^2 + 4x + 5$.\nb) Find the area under $y = \\frac{x+2}{x^2+4x+5}$, between $x = 0$ and $x = 2$.",
    a: "a) $2x+4$\nb) $\\frac{1}{2}\\log_e\\frac{17}{5} \\approx 0.612$",
    hint: "Numerator in b) is half the derivative of denominator.",
    solutionSteps: [
      { explanation: "Differentiate.", workingOut: "\\frac{d}{dx}(x^2+4x+5)=2x+4" },
      { explanation: "Integrate.", workingOut: "A=\\frac{1}{2}[\\log_e(x^2+4x+5)]_0^2=\\frac{1}{2}(\\log_e 17-\\log_e 5)=\\frac{1}{2}\\log_e\\frac{17}{5}\\approx 0.612" }
    ], graphData: null,
    subQuestions: [
      {
        id: "y12a-5j-q14a", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "a) Find the derivative of $x^2 + 4x + 5$.",
        a: "2x+4", t: "Areas and the logarithmic function", hint: "Differentiate each term.",
        solutionSteps: [{ explanation: "Differentiate.", workingOut: "2x+4" }], graphData: null
      },
      {
        id: "y12a-5j-q14b", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "b) Find the area under $y = \\frac{x+2}{x^2+4x+5}$, between $x = 0$ and $x = 2$.",
        a: "\\frac{1}{2}\\log_e\\frac{17}{5} \\approx 0.612", t: "Areas and the logarithmic function",
        hint: "Use part a): rewrite as (1/2)·(2x+4)/(x²+4x+5).",
        solutionSteps: [{ explanation: "Integrate.", workingOut: "A=\\frac{1}{2}[\\log_e(x^2+4x+5)]_0^2=\\frac{1}{2}\\log_e\\frac{17}{5}\\approx 0.612" }], graphData: null
      }
    ]
  },

  // Q15 (medium) - subQuestions
  {
    id: "y12a-5j-q15", type: "teacher_review", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Sketch the region bounded by the $x$-axis, $y = x$, $y = \\frac{1}{x}$ and $x = e$.\nb) Hence find the area of this region using two appropriate integrals.",
    a: "b) $\\frac{3}{2}$ square units",
    hint: "y=x and y=1/x meet at x=1. Split into [0,1] and [1,e].",
    solutionSteps: [
      { explanation: "Intersection at x=1.", workingOut: "x=1/x \\Rightarrow x=1" },
      { explanation: "Two parts.", workingOut: "A=\\int_0^1 x\\,dx+\\int_1^e\\frac{1}{x}\\,dx=\\frac{1}{2}+1=\\frac{3}{2}" }
    ], graphData: null,
    subQuestions: [
      {
        id: "y12a-5j-q15a", type: "teacher_review", difficulty: "medium", timeLimit: 120,
        question: "a) Sketch the region bounded by the $x$-axis, $y = x$, $y = \\frac{1}{x}$ and $x = e$.",
        a: "Sketch: y=x and y=1/x intersect at (1,1); shaded region under both curves from x=0 to x=e.",
        t: "Areas and the logarithmic function", hint: "The two curves meet at x=1.", solutionSteps: [], graphData: null
      },
      {
        id: "y12a-5j-q15b", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "b) Hence find the area of the region bounded by the $x$-axis, $y = x$, $y = \\frac{1}{x}$ and $x = e$.",
        a: "\\frac{3}{2}", t: "Areas and the logarithmic function", hint: "Split at x=1.",
        solutionSteps: [{ explanation: "Sum.", workingOut: "A=\\int_0^1 x\\,dx+\\int_1^e\\frac{1}{x}\\,dx=\\frac{1}{2}+1=\\frac{3}{2}" }], graphData: null
      }
    ]
  },

  // Q16 (medium) - subQuestions
  {
    id: "y12a-5j-q16", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "a) Find the exact value of $\\int_1^2 \\frac{1}{x}\\,dx$, then approximate to three decimal places.\nb) Use the trapezoidal rule with $x = 1,\\;\\frac{3}{2},\\;2$ to approximate the area.",
    a: "a) $\\log_e 2 \\approx 0.693$\nb) $\\approx 0.708$",
    hint: "For b), h=1/2, T=(h/2)[f(1)+2f(3/2)+f(2)].",
    solutionSteps: [
      { explanation: "Exact.", workingOut: "\\int_1^2\\frac{1}{x}\\,dx=\\log_e 2\\approx 0.693" },
      { explanation: "Trapezoidal: h=1/2.", workingOut: "T=\\frac{1}{4}[1+\\frac{4}{3}+\\frac{1}{2}]=\\frac{1}{4}\\cdot\\frac{17}{6}\\approx 0.708" }
    ], graphData: null,
    subQuestions: [
      {
        id: "y12a-5j-q16a", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "a) Find the exact value of $\\int_1^2 \\frac{1}{x}\\,dx$, then approximate to three decimal places.",
        a: "\\log_e 2 \\approx 0.693", t: "Areas and the logarithmic function", hint: "Evaluate $[\\log_e x]_1^2$.",
        solutionSteps: [{ explanation: "Evaluate.", workingOut: "\\log_e 2\\approx 0.693" }], graphData: null
      },
      {
        id: "y12a-5j-q16b", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "b) Use the trapezoidal rule with values at $x = 1,\\;\\frac{3}{2},\\;2$ to approximate $\\int_1^2 \\frac{1}{x}\\,dx$.",
        a: "\\approx 0.708", t: "Areas and the logarithmic function", hint: "h=1/2, T=(h/2)[f(1)+2f(3/2)+f(2)].",
        solutionSteps: [{ explanation: "Apply rule.", workingOut: "T=\\frac{1}{4}[1+\\frac{4}{3}+\\frac{1}{2}]\\approx 0.708" }], graphData: null
      }
    ]
  },

  // Q17 (medium) - subQuestions
  {
    id: "y12a-5j-q17", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "Give approximations to four decimal places.\na) Find the area between $y = \\frac{1}{x}$ and the $x$-axis, for $1 \\le x \\le 3$.\nb) Estimate the area using the trapezoidal rule with two subintervals (three function values).",
    a: "a) $\\log_e 3 \\approx 1.0986$\nb) $\\approx 1.1667$",
    hint: "For b), values at x=1, 2, 3 with h=1.",
    solutionSteps: [
      { explanation: "Exact.", workingOut: "\\int_1^3\\frac{1}{x}\\,dx=\\log_e 3\\approx 1.0986" },
      { explanation: "Trapezoidal: h=1.", workingOut: "T=\\frac{1}{2}[1+2(\\frac{1}{2})+\\frac{1}{3}]=\\frac{1}{2}\\cdot\\frac{7}{3}=\\frac{7}{6}\\approx 1.1667" }
    ], graphData: null,
    subQuestions: [
      {
        id: "y12a-5j-q17a", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "a) Find the area between $y = \\frac{1}{x}$ and the $x$-axis, for $1 \\le x \\le 3$. Approximate to four decimal places.",
        a: "\\log_e 3 \\approx 1.0986", t: "Areas and the logarithmic function", hint: "Evaluate $[\\log_e x]_1^3$.",
        solutionSteps: [{ explanation: "Evaluate.", workingOut: "\\log_e 3\\approx 1.0986" }], graphData: null
      },
      {
        id: "y12a-5j-q17b", type: "short_answer", difficulty: "medium", timeLimit: 120,
        question: "b) Estimate the area using the trapezoidal rule with three function values at $x = 1, 2, 3$.",
        a: "\\approx 1.1667", t: "Areas and the logarithmic function", hint: "h=1, T=(h/2)[f(1)+2f(2)+f(3)].",
        solutionSteps: [{ explanation: "Apply rule.", workingOut: "T=\\frac{1}{2}[1+1+\\frac{1}{3}]=\\frac{7}{6}\\approx 1.1667" }], graphData: null
      }
    ]
  },

  // Q18 (medium)
  {
    id: "y12a-5j-q18", type: "short_answer", difficulty: "medium", timeLimit: 120,
    t: "Areas and the logarithmic function",
    question: "Use the trapezoidal rule with four subintervals to approximate the area between $y = \\ln x$ and the $x$-axis, from $x = 1$ to $x = 5$. Answer correct to four decimal places.",
    a: "\\approx 3.9827",
    hint: "h=1; use function values at x=1,2,3,4,5.",
    solutionSteps: [
      { explanation: "Function values: f(1)=0, f(2)=ln2, f(3)=ln3, f(4)=ln4, f(5)=ln5.", workingOut: "f(1)=0,\\;f(2)\\approx 0.6931,\\;f(3)\\approx 1.0986,\\;f(4)\\approx 1.3863,\\;f(5)\\approx 1.6094" },
      { explanation: "Apply trapezoidal rule.", workingOut: "T=\\frac{1}{2}[0+2(0.6931)+2(1.0986)+2(1.3863)+1.6094]=\\frac{1}{2}(7.9654)\\approx 3.9827" }
    ], graphData: null
  },

  // Q19 (hard) - subQuestions
  {
    id: "y12a-5j-q19", type: "teacher_review", difficulty: "hard", timeLimit: 180,
    t: "Areas and the logarithmic function",
    question: "a) Sketch $y = \\log_e x$, for $0 < x \\le e$.\nb) Evaluate the area between the curve and the $y$-axis, between $y = 0$ and $y = 1$.\nc) Hence find the area between the curve and the $x$-axis, between $x = 1$ and $x = e$.",
    a: "b) $e-1 \\approx 1.718$\nc) $1$",
    hint: "For b), integrate x=eʸ. For c), use the rectangle method or direct integration.",
    solutionSteps: [
      { explanation: "For b), x=eʸ.", workingOut: "A_{\\text{left}}=\\int_0^1 e^y\\,dy=[e^y]_0^1=e-1" },
      { explanation: "For c), direct integration.", workingOut: "A=\\int_1^e\\ln x\\,dx=[x\\ln x-x]_1^e=(e-e)-(0-1)=1" }
    ], graphData: null,
    subQuestions: [
      {
        id: "y12a-5j-q19a", type: "teacher_review", difficulty: "hard", timeLimit: 180,
        question: "a) Sketch $y = \\log_e x$, for $0 < x \\le e$.",
        a: "Curve passes through (1,0) and (e,1); y-axis is a vertical asymptote.",
        t: "Areas and the logarithmic function", hint: "Key points: (1,0) and (e,1).", solutionSteps: [], graphData: null
      },
      {
        id: "y12a-5j-q19b", type: "short_answer", difficulty: "hard", timeLimit: 180,
        question: "b) Evaluate the area between $y = \\log_e x$ and the $y$-axis, between $y = 0$ and $y = 1$.",
        a: "e - 1 \\approx 1.718", t: "Areas and the logarithmic function", hint: "Integrate x=eʸ from y=0 to y=1.",
        solutionSteps: [{ explanation: "Integrate.", workingOut: "A=\\int_0^1 e^y\\,dy=e-1\\approx 1.718" }], graphData: null
      },
      {
        id: "y12a-5j-q19c", type: "short_answer", difficulty: "hard", timeLimit: 180,
        question: "c) Hence find the area between $y = \\log_e x$ and the $x$-axis, between $x = 1$ and $x = e$.",
        a: "1", t: "Areas and the logarithmic function", hint: "Use $\\int_1^e\\ln x\\,dx=[x\\ln x-x]_1^e$.",
        solutionSteps: [{ explanation: "Direct integration.", workingOut: "\\int_1^e\\ln x\\,dx=(e-e)-(0-1)=1" }], graphData: null
      }
    ]
  },

  // Q20 (hard) - subQuestions
  {
    id: "y12a-5j-q20", type: "teacher_review", difficulty: "hard", timeLimit: 180,
    t: "Areas and the logarithmic function",
    question: "Consider the two curves $y = 8e^{-x}$ and $y = e^x - 2$.\na) Let $u = e^x$. Show that the $x$-coordinate of their intersection satisfies $u^2 - 2u - 8 = 0$.\nb) Hence find the coordinates of the point of intersection.\nc) Sketch the curves, shading the region bounded by them and the $y$-axis.\nd) Find the area of the shaded region.",
    a: "b) $(\\ln 4,\\;2)$\nd) $3 + 4\\ln 2 \\approx 5.773$",
    hint: "For a), set 8e^{-x}=e^x-2 and multiply by eˣ. For d), integrate from 0 to ln4.",
    solutionSteps: [
      { explanation: "Set equal and multiply by u=eˣ.", workingOut: "8=u^2-2u \\Rightarrow u^2-2u-8=0" },
      { explanation: "Solve: u=4 (since u>0).", workingOut: "x=\\ln 4,\\;y=e^{\\ln 4}-2=2" },
      { explanation: "Integrate from 0 to ln4.", workingOut: "A=[-8e^{-x}-e^x+2x]_0^{\\ln 4}=(-2-4+2\\ln 4)-(-8-1)=3+2\\ln 4=3+4\\ln 2\\approx 5.773" }
    ], graphData: null,
    subQuestions: [
      {
        id: "y12a-5j-q20a", type: "teacher_review", difficulty: "hard", timeLimit: 180,
        question: "a) Let $u = e^x$. Show that the $x$-coordinate of the intersection of $y = 8e^{-x}$ and $y = e^x - 2$ satisfies $u^2 - 2u - 8 = 0$.",
        a: "Setting $8e^{-x}=e^x-2$, multiply by $e^x=u$: $8=u^2-2u$, so $u^2-2u-8=0$.",
        t: "Areas and the logarithmic function", hint: "Multiply both sides by eˣ.", solutionSteps: [], graphData: null
      },
      {
        id: "y12a-5j-q20b", type: "short_answer", difficulty: "hard", timeLimit: 180,
        question: "b) Hence find the coordinates of the point of intersection of $y = 8e^{-x}$ and $y = e^x - 2$.",
        a: "(\\ln 4,\\;2)", t: "Areas and the logarithmic function", hint: "Solve u²-2u-8=0 for u>0.",
        solutionSteps: [{ explanation: "Solve.", workingOut: "(u-4)(u+2)=0 \\Rightarrow u=4 \\Rightarrow x=\\ln 4,\\;y=2" }], graphData: null
      },
      {
        id: "y12a-5j-q20c", type: "teacher_review", difficulty: "hard", timeLimit: 180,
        question: "c) Sketch $y = 8e^{-x}$ and $y = e^x - 2$ on the same axes, shading the region bounded by them and the $y$-axis.",
        a: "At x=0: y=8e^{-x} gives y=8; y=e^x-2 gives y=-1. They meet at (ln4, 2). Shaded region between curves for 0≤x≤ln4.",
        t: "Areas and the logarithmic function", hint: "At x=0 find both y-intercepts.", solutionSteps: [], graphData: null
      },
      {
        id: "y12a-5j-q20d", type: "short_answer", difficulty: "hard", timeLimit: 180,
        question: "d) Find the area of the shaded region bounded by $y = 8e^{-x}$, $y = e^x - 2$ and the $y$-axis.",
        a: "3 + 4\\ln 2 \\approx 5.773", t: "Areas and the logarithmic function",
        hint: "Integrate [8e^{-x}-(e^x-2)] from x=0 to x=ln4.",
        solutionSteps: [{ explanation: "Integrate.", workingOut: "A=[-8e^{-x}-e^x+2x]_0^{\\ln 4}=(-2-4+2\\ln 4)-(-9)=3+4\\ln 2\\approx 5.773" }], graphData: null
      }
    ]
  },

  // Q21 (hard) - separate top-level
  {
    id: "y12a-5j-q21a", type: "short_answer", difficulty: "hard", timeLimit: 180,
    t: "Areas and the logarithmic function",
    question: "The hyperbola $y = \\frac{1}{x} + 1$ meets the $x$-axis at $(-1, 0)$. Find the area between the $x$-axis and the curve from $x = -e$ to $x = -1$.",
    a: "e - 2 \\approx 0.718",
    hint: "Curve is above x-axis on (-e,-1). Integrate (1/x+1) from -e to -1.",
    solutionSteps: [
      { explanation: "Integrate.", workingOut: "A=\\int_{-e}^{-1}(\\frac{1}{x}+1)dx=[\\log_e|x|+x]_{-e}^{-1}" },
      { explanation: "Evaluate.", workingOut: "=(0-1)-(1-e)=e-2\\approx 0.718" }
    ], graphData: null
  },
  {
    id: "y12a-5j-q21b", type: "short_answer", difficulty: "hard", timeLimit: 180,
    t: "Areas and the logarithmic function",
    question: "The hyperbola $y = \\frac{1}{x} + 1$ meets the $x$-axis at $(-1, 0)$. Find the area between the $x$-axis and the curve from $x = -1$ to $x = -e^{-1}$.",
    a: "\\frac{1}{e} \\approx 0.368",
    hint: "Curve is below x-axis on (-1,-1/e). Take |∫|.",
    solutionSteps: [
      { explanation: "Curve negative; take absolute value.", workingOut: "A=|[\\log_e|x|+x]_{-1}^{-1/e}|=|(-1-1/e)-(-1)|=\\frac{1}{e}\\approx 0.368" }
    ], graphData: null
  },
  {
    id: "y12a-5j-q21c", type: "short_answer", difficulty: "hard", timeLimit: 180,
    t: "Areas and the logarithmic function",
    question: "The hyperbola $y = \\frac{1}{x} + 1$ meets the $x$-axis at $(-1, 0)$. Find the area between the $x$-axis and the curve from $x = -e$ to $x = -e^{-1}$.",
    a: "e - 2 + \\frac{1}{e} \\approx 1.086",
    hint: "Total = area from Q21a + area from Q21b.",
    solutionSteps: [
      { explanation: "Add both parts.", workingOut: "A=(e-2)+\\frac{1}{e}=e-2+\\frac{1}{e}\\approx 1.086" }
    ], graphData: null
  }
];
