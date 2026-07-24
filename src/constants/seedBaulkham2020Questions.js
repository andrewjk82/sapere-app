export const BAULKHAM_2020_QUESTIONS = [
  {
    "id": "baulko2020-mc1",
    "topicId": "y12a-exam",
    "c": "6D",
    "t": "Integrating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Which expression is equal to $\\displaystyle\\int \\tan^2 x\\, dx$?",
    "opts": [
      "\\(\\dfrac{\\tan^3 x}{3} + C\\)",
      "\\(\\tan x - x + C\\)",
      "\\(\\tan x + x + C\\)",
      "\\(\\sec^2 x + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the identity $\\tan^2 x = \\sec^2 x - 1$.",
    "solution": "The correct answer is \\(\\tan x - x + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int\\tan^2 x\\,dx = \\int(\\sec^2 x - 1)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\tan x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\tan x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\tan x - x + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\tan x - x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc1v",
    "topicId": "y12a-exam",
    "c": "6D",
    "t": "Integrating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Which expression is equal to $\\displaystyle\\int \\sec^2 x - 1\\, dx$?",
    "opts": [
      "\\(\\sec^2 x - x + C\\)",
      "\\(\\tan x - x + C\\)",
      "\\(\\tan x + x + C\\)",
      "\\(2\\sec x\\tan x - 1 + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate $\\sec^2 x$ and $1$ separately.",
    "solution": "The correct answer is \\(\\tan x - x + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int \\sec^2 x\\,dx - \\int 1\\,dx = \\tan x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\tan x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\tan x - x + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\tan x - x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc2",
    "topicId": "y12a-exam",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "$\\dfrac{d}{dx}\\log_e\\dfrac{4x^2-9}{2x-3}$ is equal to which of the following?",
    "opts": [
      "\\(\\dfrac{6}{2x-3}\\)",
      "\\(\\dfrac{2}{2x+3}\\)",
      "\\(\\dfrac{6(2x+3)}{(2x-3)^2}\\)",
      "\\(\\dfrac{6(4x+1)}{(2x-3)^2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Factorise $4x^2-9 = (2x-3)(2x+3)$ first, then simplify $\\log_e$ before differentiating.",
    "solution": "The correct answer is \\(\\dfrac{2}{2x+3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{4x^2-9}{2x-3} = 2x+3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\log_e(2x+3)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{d}{dx}\\log_e(2x+3) = \\frac{2}{2x+3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{2}{2x+3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{2}{2x+3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc2v",
    "topicId": "y12a-exam",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "$\\dfrac{d}{dx}\\log_e\\dfrac{9x^2-4}{3x-2}$ is equal to which of the following?",
    "opts": [
      "\\(\\dfrac{9}{3x-2}\\)",
      "\\(\\dfrac{3}{3x+2}\\)",
      "\\(\\dfrac{9(3x+2)}{(3x-2)^2}\\)",
      "\\(\\dfrac{18x}{9x^2-4}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Factorise $9x^2-4=(3x-2)(3x+2)$ and simplify before differentiating.",
    "solution": "The correct answer is \\(\\dfrac{3}{3x+2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{9x^2-4}{3x-2}=\\frac{(3x-2)(3x+2)}{3x-2}=3x+2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{3}{3x+2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{3}{3x+2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{3}{3x+2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{3}{3x+2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc3",
    "topicId": "y12a-exam",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Which of the following could be a primitive for $f'(x) = \\dfrac{x}{e^{x^2}-8}$?",
    "opts": [
      "\\(-\\dfrac{1}{2}(e^{x^2}-8)+8\\)",
      "\\(\\dfrac{1}{2}\\ln(e^{x^2}-8)+8\\)",
      "\\(\\ln(e^8-x^2)-8\\)",
      "\\(-\\dfrac{1}{2}(e^{8-x^2})-8\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Rewrite $\\dfrac{x}{e^{x^2}-8} = xe^{-x^2} \\cdot \\dfrac{1}{1-8e^{-x^2}}$... or note $\\dfrac{x}{e^{x^2}-8} = -\\dfrac{x}{8-e^{x^2}} = \\dfrac{1}{2}\\cdot\\dfrac{-2x}{8-e^{x^2}}$... actually write as $xe^{-(x^2)}\\cdot\\frac{1}{1-8e^{-x^2}}$. Simplest: differentiate each option and check.",
    "solution": "The correct answer is \\(-\\dfrac{1}{2}(e^{8-x^2})-8\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{d}{dx}\\left[-\\frac{1}{2}e^{8-x^2}\\right] = -\\frac{1}{2}\\cdot e^{8-x^2}\\cdot(-2x) = xe^{8-x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(xe^{8-x^2} \\propto \\frac{x}{e^{x^2}-8} \\text{ (constant multiple)} \\Rightarrow \\text{(D) is correct}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-\\dfrac{1}{2}(e^{8-x^2})-8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -\\dfrac{1}{2}(e^{8-x^2})-8. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-\\dfrac{1}{2}(e^{8-x^2})-8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc3v",
    "topicId": "y12a-exam",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Which of the following is a primitive of $f'(x) = \\dfrac{x}{x^2+3}$?",
    "opts": [
      "\\(\\ln(x^2+3) + C\\)",
      "\\(\\dfrac{1}{2}\\ln(x^2+3) + C\\)",
      "\\(\\dfrac{1}{x^2+3} + C\\)",
      "\\(-\\dfrac{x}{(x^2+3)^2} + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The numerator is half the derivative of the denominator.",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\ln(x^2+3) + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{d}{dx}(x^2+3)=2x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{1}{2}\\ln(x^2+3)+C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{1}{2}\\ln(x^2+3) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{1}{2}\\ln(x^2+3) + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{1}{2}\\ln(x^2+3) + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc4",
    "topicId": "y12a-exam",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the curve shown, which inequalities are correct?<br/>\n<div style=\"display:flex; justify-content:center; margin: 16px 0;\">\n<svg viewBox=\"0 0 300 200\" width=\"100%\" style=\"max-width:300px; background-color:white; border:1px solid #ccc; border-radius:8px;\">\n  <!-- Axes -->\n  <line x1=\"20\" y1=\"150\" x2=\"280\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\" /> <!-- x-axis -->\n  <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\" /> <!-- y-axis -->\n  \n  <!-- Labels -->\n  <text x=\"270\" y=\"140\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">x</text>\n  <text x=\"60\" y=\"30\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">y</text>\n  <text x=\"35\" y=\"165\" fill=\"#333\" font-size=\"12\" font-family=\"sans-serif\">O</text>\n\n  <!-- Curve -->\n  <polyline fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" points=\"30.0,0.8 35.0,15.0 40.0,27.9 45.0,39.5 50.0,50.0 55.0,59.5 60.0,68.1 65.0,75.9 70.0,83.0 75.0,89.3 80.0,95.1 85.0,100.3 90.0,105.1 95.0,109.3 100.0,113.2 105.0,116.7 110.0,119.9 115.0,122.7 120.0,125.3 125.0,127.7 130.0,129.8 135.0,131.7 140.0,133.5 145.0,135.0 150.0,136.5 155.0,137.8 160.0,138.9 165.0,140.0 170.0,140.9 175.0,141.8 180.0,142.6 185.0,143.3 190.0,143.9 195.0,144.5 200.0,145.0 205.0,145.5 210.0,145.9 215.0,146.3 220.0,146.7 225.0,147.0 230.0,147.3 235.0,147.5 240.0,147.8 245.0,148.0 250.0,148.2\" />\n</svg>\n</div>\n",
    "opts": [
      "\\(\\dfrac{dy}{dx} > 0\\) and \\(\\dfrac{d^2y}{dx^2} > 0\\)",
      "\\(\\dfrac{dy}{dx} > 0\\) and \\(\\dfrac{d^2y}{dx^2} < 0\\)",
      "\\(\\dfrac{dy}{dx} < 0\\) and \\(\\dfrac{d^2y}{dx^2} < 0\\)",
      "\\(\\dfrac{dy}{dx} < 0\\) and \\(\\dfrac{d^2y}{dx^2} > 0\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Decreasing curve → $dy/dx < 0$. Concave up (curve bends upward) → $d^2y/dx^2 > 0$.",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} < 0\\) and \\(\\dfrac{d^2y}{dx^2} > 0\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: First, observe the overall direction of the curve. As \\(x\\) increases (moving from left to right), the \\(y\\)-values are getting smaller. This means the function is strictly decreasing.",
        "workingOut": "$$ \\text{Decreasing function} \\implies \\frac{dy}{dx} < 0 $$"
      },
      {
        "explanation": "Step 2: Next, observe the shape (curvature) of the graph. The curve is bending upwards, similar to the shape of a cup (\\(\\cup\\)). A curve that bends upwards like this is called \"concave up\".",
        "workingOut": "$$ \\text{Concave up} \\implies \\frac{d^2y}{dx^2} > 0 $$"
      },
      {
        "explanation": "Step 3: Combine both observations. The curve must satisfy both conditions simultaneously.",
        "workingOut": "$$ \\therefore \\frac{dy}{dx} < 0 \\text{ and } \\frac{d^2y}{dx^2} > 0 $$"
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc4v",
    "topicId": "y12a-exam",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A curve is increasing and concave down. Which inequalities are correct?<br/>\n<div style=\"display:flex; justify-content:center; margin: 16px 0;\">\n<svg viewBox=\"0 0 300 200\" width=\"100%\" style=\"max-width:300px; background-color:white; border:1px solid #ccc; border-radius:8px;\">\n  <!-- Axes -->\n  <line x1=\"20\" y1=\"150\" x2=\"280\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\" /> <!-- x-axis -->\n  <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\" /> <!-- y-axis -->\n  \n  <!-- Labels -->\n  <text x=\"270\" y=\"140\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">x</text>\n  <text x=\"60\" y=\"30\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">y</text>\n  <text x=\"35\" y=\"165\" fill=\"#333\" font-size=\"12\" font-family=\"sans-serif\">O</text>\n\n  <!-- Curve -->\n  <polyline fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" points=\"50.0,150.0 55.0,140.5 60.0,131.9 65.0,124.1 70.0,117.0 75.0,110.7 80.0,104.9 85.0,99.7 90.0,94.9 95.0,90.7 100.0,86.8 105.0,83.3 110.0,80.1 115.0,77.3 120.0,74.7 125.0,72.3 130.0,70.2 135.0,68.3 140.0,66.5 145.0,65.0 150.0,63.5 155.0,62.2 160.0,61.1 165.0,60.0 170.0,59.1 175.0,58.2 180.0,57.4 185.0,56.7 190.0,56.1 195.0,55.5 200.0,55.0 205.0,54.5 210.0,54.1 215.0,53.7 220.0,53.3 225.0,53.0 230.0,52.7 235.0,52.5 240.0,52.2 245.0,52.0 250.0,51.8\" />\n</svg>\n</div>\n",
    "opts": [
      "\\(\\dfrac{dy}{dx} > 0\\) and \\(\\dfrac{d^2y}{dx^2} > 0\\)",
      "\\(\\dfrac{dy}{dx} > 0\\) and \\(\\dfrac{d^2y}{dx^2} < 0\\)",
      "\\(\\dfrac{dy}{dx} < 0\\) and \\(\\dfrac{d^2y}{dx^2} < 0\\)",
      "\\(\\dfrac{dy}{dx} < 0\\) and \\(\\dfrac{d^2y}{dx^2} > 0\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Increasing → $dy/dx > 0$. Concave down → $d^2y/dx^2 < 0$.",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} > 0\\) and \\(\\dfrac{d^2y}{dx^2} < 0\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: The problem states that the curve is increasing. This means that as \\(x\\) moves from left to right, the \\(y\\)-values go up.",
        "workingOut": "$$ \\text{Increasing function} \\implies \\frac{dy}{dx} > 0 $$"
      },
      {
        "explanation": "Step 2: The problem also states that the curve is concave down. This means the curve bends downwards, similar to the shape of an umbrella (\\(\\cap\\)).",
        "workingOut": "$$ \\text{Concave down} \\implies \\frac{d^2y}{dx^2} < 0 $$"
      },
      {
        "explanation": "Step 3: Combine both observations to find the correct pair of inequalities.",
        "workingOut": "$$ \\therefore \\frac{dy}{dx} > 0 \\text{ and } \\frac{d^2y}{dx^2} < 0 $$"
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc5",
    "topicId": "y12a-exam",
    "c": "10D",
    "t": "The standard normal distribution",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Results for a test are given as $z$-scores. Angela gained a $z$-score of 3. The test has a mean of 55 and standard deviation of 6. What was Angela's actual mark?",
    "opts": [
      "\\(58\\)",
      "\\(73\\)",
      "\\(64\\)",
      "\\(67\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $x = \\mu + z\\sigma$.",
    "solution": "The correct answer is \\(73\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x = 55 + 3 \\times 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= 55 + 18 = 73\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(73\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 73. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(73\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc5v",
    "topicId": "y12a-exam",
    "c": "10D",
    "t": "The standard normal distribution",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A student scored a $z$-score of $-2$ in a test with mean 70 and standard deviation 8. What was their actual mark?",
    "opts": [
      "\\(54\\)",
      "\\(62\\)",
      "\\(86\\)",
      "\\(72\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use $x = \\mu + z\\sigma$.",
    "solution": "The correct answer is \\(54\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x = 70 + (-2)(8) = 54\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(54\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 54. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(54\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc6",
    "topicId": "y12a-exam",
    "c": "4F",
    "t": "Finding areas by integration",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The graph $y = k(x-2)^3$ is shown for some positive constant $k$. If the area of the shaded region (from $x=2$ to $x=4$) is 34, what is the value of $k$?",
    "opts": [
      "\\(\\dfrac{136}{15}\\)",
      "\\(8\\)",
      "\\(4\\)",
      "\\(\\dfrac{34}{9}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate $k(x-2)^3$ from 2 to 4 and set equal to 34.",
    "solution": "The correct answer is \\(8\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(k\\Big[\\frac{(x-2)^4}{4}\\Big]_2^4 = 4k\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(k = \\frac{34 \\times 4}{17} = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 8. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc6v",
    "topicId": "y12a-exam",
    "c": "4F",
    "t": "Finding areas by integration",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The graph $y = k(x-1)^3$ is shown for $k > 0$. The area of the region from $x=1$ to $x=3$ is 24. What is $k$?",
    "opts": [
      "\\(3\\)",
      "\\(6\\)",
      "\\(12\\)",
      "\\(24\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate $k(x-1)^3$ from 1 to 3 and set equal to 24.",
    "solution": "The correct answer is \\(6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(k\\cdot\\frac{(3-1)^4}{4} = k\\cdot 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(4k = 24 \\Rightarrow k = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc7",
    "topicId": "y12a-exam",
    "c": "10F",
    "t": "Applications of the normal distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The time $T$ in seconds that divers can hold their breath is normally distributed with $\\mu = 120$ and $\\text{Var}(T) = 400$. In what range of time would you expect to find the middle 95%?",
    "opts": [
      "\\(100 \\leq x \\leq 140\\)",
      "\\(80 \\leq x \\leq 160\\)",
      "\\(60 \\leq x \\leq 180\\)",
      "\\(40 \\leq x \\leq 200\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$\\sigma = \\sqrt{400} = 20$. Middle 95% is within $\\mu \\pm 2\\sigma$.",
    "solution": "The correct answer is \\(80 \\leq x \\leq 160\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\sigma = 20\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(120 \\pm 2(20) = 120 \\pm 40\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(80 \\leq x \\leq 160\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 80 \\leq x \\leq 160. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(80 \\leq x \\leq 160\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc7v",
    "topicId": "y12a-exam",
    "c": "10F",
    "t": "Applications of the normal distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Heights of students are normally distributed with $\\mu = 165$ cm and $\\text{Var} = 25$. In what range would you expect the middle 68%?",
    "opts": [
      "\\(155 \\leq x \\leq 175\\)",
      "\\(160 \\leq x \\leq 170\\)",
      "\\(150 \\leq x \\leq 180\\)",
      "\\(163 \\leq x \\leq 167\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$\\sigma=5$. Middle 68% is within $\\mu \\pm 1\\sigma$.",
    "solution": "The correct answer is \\(160 \\leq x \\leq 170\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(165 \\pm 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(160 \\leq x \\leq 170\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(160 \\leq x \\leq 170\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 160 \\leq x \\leq 170. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(160 \\leq x \\leq 170\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc8",
    "topicId": "y12a-exam",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The exact value of $I = \\displaystyle\\int_1^2 \\dfrac{\\ln x}{x}\\, dx = \\dfrac{1}{2}(\\ln 2)^2$. The approximation of $I$ using the Trapezoidal Rule with 2 function values is:",
    "opts": [
      "smaller by 28%",
      "larger by 28%",
      "smaller by 72%",
      "larger by 72%"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Apply trapezoidal rule with $h=1$, $f(1)=0$, $f(2)=\\frac{\\ln 2}{2}$. Compare to exact value.",
    "solution": "The correct answer is smaller by 28%.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T = \\frac{1}{2}(0+\\frac{\\ln 2}{2}) = \\frac{\\ln 2}{4} \\approx 0.1733\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(I_{\\text{exact}} \\approx 0.2402\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{smaller by } 28\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: smaller by 28%. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "smaller by 28%",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc8v",
    "topicId": "y12a-exam",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Using the Trapezoidal Rule with 3 function values to approximate $\\displaystyle\\int_0^2 x^2\\,dx$, the approximation is:",
    "opts": [
      "exactly correct",
      "smaller by 12.5%",
      "larger by 12.5%",
      "larger by 50%"
    ],
    "a": 2,
    "answer": "2",
    "hint": "$h=1$, values at $x=0,1,2$. Trap = $\\frac{1}{2}(0+2\\cdot1+4)=3$. Exact = $\\frac{8}{3}$.",
    "solution": "The correct answer is larger by 12.5%.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T=3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(I=\\frac{8}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{larger by }12.5\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: larger by 12.5%. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "larger by 12.5%",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc9",
    "topicId": "y12a-exam",
    "c": "3B",
    "t": "Functions, relations, and graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given $f(x) = \\dfrac{x}{x^2-5}$, which of the following statements is true?",
    "opts": [
      "\\(\\(f(x)\\) is even and one-to-one\\)",
      "\\(\\(f(x)\\) is even and many-to-one\\)",
      "\\(\\(f(x)\\) is odd and one-to-one\\)",
      "\\(\\(f(x)\\) is odd and many-to-one\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Check $f(-x)$: if $f(-x)=-f(x)$ it's odd. Use horizontal line test for one-to-one vs many-to-one.",
    "solution": "The correct answer is \\(\\(f(x)\\) is odd and many-to-one\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(-x) = \\frac{-x}{x^2-5} = -f(x) \\Rightarrow \\text{odd}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\Rightarrow \\text{many-to-one}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\(f(x)\\) is odd and many-to-one\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(f(x)\\) is odd and many-to-one. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(f(x)\\) is odd and many-to-one\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc9v",
    "topicId": "y12a-exam",
    "c": "3B",
    "t": "Functions, relations, and graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given $f(x) = x^2 - 3$, which of the following statements is true?",
    "opts": [
      "\\(\\(f(x)\\) is odd and one-to-one\\)",
      "\\(\\(f(x)\\) is even and one-to-one\\)",
      "\\(\\(f(x)\\) is odd and many-to-one\\)",
      "\\(\\(f(x)\\) is even and many-to-one\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "$f(-x)=(-x)^2-3=x^2-3=f(x)$ → even. Parabola fails horizontal line test → many-to-one.",
    "solution": "The correct answer is \\(\\(f(x)\\) is even and many-to-one\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(-x)=(-x)^2-3=x^2-3=f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f(1)=f(-1)=-2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\(f(x)\\) is even and many-to-one\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(f(x)\\) is even and many-to-one. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(f(x)\\) is even and many-to-one\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc10",
    "topicId": "y12a-exam",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The amount $M$ of medicine in the blood after $t$ hours is $M = 9t^2 - t^3$ for $0 \\leq t \\leq 9$. When is the amount of medicine increasing most rapidly?",
    "opts": [
      "\\(t = 0\\)",
      "\\(t = 9\\)",
      "\\(t = 6\\)",
      "\\(t = 3\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Find when $\\dfrac{dM}{dt}$ is maximised. Differentiate $M$ to get the rate, then differentiate again and set to zero.",
    "solution": "The correct answer is \\(t = 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{dM}{dt} = 18t - 3t^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(18-6t=0 \\Rightarrow t=3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t=3 \\text{ gives maximum rate}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: t = 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(t = 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-mc10v",
    "topicId": "y12a-exam",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The population $P$ of bacteria after $t$ hours is $P = 6t^2 - t^3$ for $0 \\leq t \\leq 6$. When is the population growing most rapidly?",
    "opts": [
      "\\(t = 0\\)",
      "\\(t = 2\\)",
      "\\(t = 4\\)",
      "\\(t = 6\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find when $\\dfrac{dP}{dt}$ is maximised.",
    "solution": "The correct answer is \\(t = 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{dP}{dt}=12t-3t^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(t=2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: t = 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(t = 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11ai",
    "topicId": "y12a-exam",
    "c": "9C",
    "t": "Differentiating powers of x",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate $y = (4x-5)(4x+5)$.",
    "opts": [
      "\\(-32x\\)",
      "\\(32x\\)",
      "\\(32x + 1\\)",
      "\\(44x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Expand first: $(4x-5)(4x+5) = 16x^2 - 25$, then differentiate.",
    "solution": "The correct answer is \\(32x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y=(4x)^2-5^2=16x^2-25\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{dy}{dx}=32x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(32x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 32x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(32x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11aiv",
    "topicId": "y12a-exam",
    "c": "9C",
    "t": "Differentiating powers of x",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate $y = (3x-2)(3x+2)$.",
    "opts": [
      "\\(-18x\\)",
      "\\(18x\\)",
      "\\(18x + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Expand: $(3x-2)(3x+2) = 9x^2-4$.",
    "solution": "The correct answer is \\(18x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y=9x^2-4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{dy}{dx}=18x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(18x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 18x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(18x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11aii",
    "topicId": "y12a-exam",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate $y = \\sin^2 x$.",
    "opts": [
      "\\(-\\sin 2x\\)",
      "\\(\\sin 2x\\)",
      "\\(\\sin 2x + 1\\)",
      "\\(\\sin 4x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the chain rule: $y=(\\sin x)^2$. Or use the double angle identity first.",
    "solution": "The correct answer is \\(\\sin 2x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{dy}{dx}=2\\sin x\\cdot\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(=\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\sin 2x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\sin 2x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11aiiv",
    "topicId": "y12a-exam",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate $y = \\cos^2 x$.",
    "opts": [
      "\\(--\\sin 2x\\)",
      "\\(-\\sin 2x\\)",
      "\\(-\\sin 4x\\)",
      "\\(\\sin 2x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Chain rule: $\\dfrac{d}{dx}\\cos^2 x = 2\\cos x \\cdot (-\\sin x)$.",
    "solution": "The correct answer is \\(-\\sin 2x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(-2\\cos x\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(-\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -\\sin 2x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-\\sin 2x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11b",
    "topicId": "y12a-exam",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In an arithmetic series, the third term is 5 and the tenth term is 26. Find the sum of the first 14 terms.",
    "opts": [
      "\\(-259\\)",
      "\\(258\\)",
      "\\(259\\)",
      "\\(260\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up two equations: $T_3 = a+2d = 5$ and $T_{10} = a+9d = 26$, solve for $a$ and $d$, then use $S_n$.",
    "solution": "The correct answer is \\(259\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a+2d=5\\quad\\cdots(1);\\quad a+9d=26\\quad\\cdots(2)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(7d=21 \\Rightarrow d=3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(a=5-2(3)=-1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 259. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(259\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11bv",
    "topicId": "y12a-exam",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In an arithmetic series, the second term is 7 and the eighth term is 25. Find the sum of the first 12 terms.",
    "opts": [
      "\\(-246\\)",
      "\\(245\\)",
      "\\(246\\)",
      "\\(247\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use $T_2=a+d=7$ and $T_8=a+7d=25$. Solve, then find $S_{12}$.",
    "solution": "The correct answer is \\(246\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(6d=18\\Rightarrow d=3;\\quad a=4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(246\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(246\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 246. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(246\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11c",
    "topicId": "y12a-exam",
    "c": "4B",
    "t": "The fundamental theorem of calculus",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int_1^4 5(9x-4)^4\\, dx$.",
    "opts": [
      "\\(-\\dfrac{1}{9}(32^5 - 5^5)\\)",
      "\\(\\dfrac{1}{9}(32^5 - 5^5)\\)",
      "\\(\\frac{1}{9}(32^5 - 5^5)\\)",
      "\\(\\frac{9}{1}(32^5 - 5^5)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use reverse chain rule: $\\int(9x-4)^4 dx = \\dfrac{(9x-4)^5}{5\\times 9}$.",
    "solution": "The correct answer is \\(\\dfrac{1}{9}(32^5 - 5^5)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(5\\cdot\\frac{(9x-4)^5}{45}=\\frac{(9x-4)^5}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(32^5 = 33\\,554\\,432\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(5^5=3125\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{1}{9}(32^5 - 5^5). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{1}{9}(32^5 - 5^5)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11cv",
    "topicId": "y12a-exam",
    "c": "4B",
    "t": "The fundamental theorem of calculus",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int_0^2 3(2x+1)^3\\, dx$.",
    "opts": [
      "\\(-\\dfrac{3}{8}(5^4-1) = 234\\)",
      "\\(\\dfrac{3}{8}(5^4-1) = 234\\)",
      "\\(\\frac{1}{8}(5^4-1) = 234\\)",
      "\\(\\frac{8}{3}(5^4-1) = 234\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Antiderivative of $(2x+1)^3$ is $\\dfrac{(2x+1)^4}{8}$.",
    "solution": "The correct answer is \\(\\dfrac{3}{8}(5^4-1) = 234\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{3}{8}\\Big[(2x+1)^4\\Big]_0^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{3}{8}(625-1)=234\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{3}{8}(5^4-1) = 234\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{3}{8}(5^4-1) = 234. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{3}{8}(5^4-1) = 234\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11d",
    "topicId": "y12a-exam",
    "c": "5A",
    "t": "Review of exponential functions base e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve the equation $e^{2x} + 3e^x - 10 = 0$.",
    "opts": [
      "\\(-x = \\ln 2\\)",
      "\\(x = \\ln 2\\)",
      "\\(x = \\ln 4\\)",
      "\\(x = \\log 2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Let $m = e^x$. The equation becomes a quadratic in $m$.",
    "solution": "The correct answer is \\(x = \\ln 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(m^2+3m-10=0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((m+5)(m-2)=0 \\Rightarrow m=-5 \\text{ or } m=2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(e^x=2 \\Rightarrow x=\\ln 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = \\ln 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = \\ln 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11dv",
    "topicId": "y12a-exam",
    "c": "5A",
    "t": "Review of exponential functions base e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve $e^{2x} - 5e^x + 6 = 0$.",
    "opts": [
      "-x = \\ln 2\\) or \\(x = \\ln 3",
      "x = \\ln 2\\) or \\(x = \\ln 3",
      "x = \\ln 4\\) or \\(x = \\ln 4",
      "x = \\log 2\\) or \\(x = \\log 3"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Let $m=e^x$. Factorise the resulting quadratic.",
    "solution": "The correct answer is x = \\ln 2\\) or \\(x = \\ln 3.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((m-2)(m-3)=0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x=\\ln 2 \\text{ or } x=\\ln 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "x = \\ln 2\\) or \\(x = \\ln 3",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = \\ln 2\\) or \\(x = \\ln 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "x = \\ln 2\\) or \\(x = \\ln 3",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11ei",
    "topicId": "y12a-exam",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Show that $\\dfrac{d}{dx}(\\sec^2 x) = 2\\tan x\\sec^2 x$.",
    "answer": "\\(\\sec^2 x = (\\cos x)^{-2}\\).\n\\(\\frac{d}{dx}(\\cos x)^{-2} = -2(\\cos x)^{-3}\\cdot(-\\sin x) = \\frac{2\\sin x}{\\cos^3 x} = 2\\cdot\\frac{\\sin x}{\\cos x}\\cdot\\frac{1}{\\cos^2 x} = 2\\tan x\\sec^2 x\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(\\sec^2 x = (\\cos x)^{-2}\\).\n\\(\\frac{d}{dx}(\\cos x)^{-2} = -2(\\cos x)^{-3}\\cdot(-\\sin x) = \\frac{2\\sin x}{\\cos^3 x} = 2\\cdot\\frac{\\sin x}{\\cos x}\\cdot\\frac{1}{\\cos^2 x} = 2\\tan x\\sec^2 x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{d}{dx}(\\cos x)^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(-2(\\cos x)^{-3}\\cdot(-\\sin x) = \\frac{2\\sin x}{\\cos^3 x}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(2\\cdot\\frac{\\sin x}{\\cos x}\\cdot\\frac{1}{\\cos^2 x}=2\\tan x\\sec^2 x \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\sec^2 x = (\\cos x)^{-2}\\).\n\\(\\frac{d}{dx}(\\cos x)^{-2} = -2(\\cos x)^{-3}\\cdot(-\\sin x) = \\frac{2\\sin x}{\\cos^3 x} = 2\\cdot\\frac{\\sin x}{\\cos x}\\cdot\\frac{1}{\\cos^2 x} = 2\\tan x\\sec^2 x\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(\\sec^2 x = (\\cos x)^{-2}\\).\n\\(\\frac{d}{dx}(\\cos x)^{-2} = -2(\\cos x)^{-3}\\cdot(-\\sin x) = \\frac{2\\sin x}{\\cos^3 x} = 2\\cdot\\frac{\\sin x}{\\cos x}\\cdot\\frac{1}{\\cos^2 x} = 2\\tan x\\sec^2 x\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q11eii",
    "topicId": "y12a-exam",
    "c": "6D",
    "t": "Integrating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Hence find $\\displaystyle\\int \\tan x\\sec^2 x\\, dx$.",
    "opts": [
      "\\(-\\dfrac{1}{2}\\sec^2 x + C\\)",
      "\\(\\dfrac{1}{2}\\sec^2 x + C\\)",
      "\\(\\frac{1}{2}\\sec^2 x + C\\)",
      "\\(\\frac{2}{1}\\sec^2 x + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "From part (i): $\\frac{d}{dx}(\\sec^2 x) = 2\\tan x\\sec^2 x$, so $\\tan x\\sec^2 x = \\frac{1}{2}\\frac{d}{dx}(\\sec^2 x)$.",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\sec^2 x + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int \\tan x\\sec^2 x\\,dx = \\frac{1}{2}\\int \\frac{d}{dx}(\\sec^2 x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\frac{1}{2}\\sec^2 x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{1}{2}\\sec^2 x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{1}{2}\\sec^2 x + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{1}{2}\\sec^2 x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11eiiv",
    "topicId": "y12a-exam",
    "c": "6D",
    "t": "Integrating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given that $\\dfrac{d}{dx}(\\sin^2 x) = \\sin 2x$, find $\\displaystyle\\int \\sin 2x\\, dx$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(\\sin^2 x + C\\) (or equivalently \\(-\\dfrac{1}{2}\\cos 2x + C\\))"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Since $\\sin 2x = \\frac{d}{dx}(\\sin^2 x)$, integrate both sides.",
    "solution": "The correct answer is \\(\\sin^2 x + C\\) (or equivalently \\(-\\dfrac{1}{2}\\cos 2x + C\\)).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int \\sin 2x\\,dx = \\sin^2 x + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\sin^2 x + C\\) (or equivalently \\(-\\dfrac{1}{2}\\cos 2x + C\\))",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\sin^2 x + C\\) (or equivalently \\(-\\dfrac{1}{2}\\cos 2x + C\\)). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\sin^2 x + C\\) (or equivalently \\(-\\dfrac{1}{2}\\cos 2x + C\\))",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11fi",
    "topicId": "y12a-exam",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Given $f(x) = \\begin{cases}6x-6x^2 & 0 \\leq x \\leq 1 \\\\ 0 & \\text{otherwise}\\end{cases}$, show that $f(x)$ represents a probability density function.",
    "answer": "Need: \\(f(x)\\geq 0\\) on \\([0,1]\\) and \\(\\int_0^1 f(x)\\,dx=1\\).\n\\(f(x)=6x(1-x)\\geq 0\\) for \\(0\\leq x\\leq 1\\).\n\\(\\int_0^1(6x-6x^2)\\,dx=[3x^2-2x^3]_0^1=3-2=1\\).\n✓",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Need: \\(f(x)\\geq 0\\) on \\([0,1]\\) and \\(\\int_0^1 f(x)\\,dx=1\\).\n\\(f(x)=6x(1-x)\\geq 0\\) for \\(0\\leq x\\leq 1\\).\n\\(\\int_0^1(6x-6x^2)\\,dx=[3x^2-2x^3]_0^1=3-2=1\\).\n✓",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(x)=6x(1-x)\\geq 0\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int_0^1(6x-6x^2)\\,dx=[3x^2-2x^3]_0^1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(=3-2=1\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Need: \\(f(x)\\geq 0\\) on \\([0,1]\\) and \\(\\int_0^1 f(x)\\,dx=1\\).\n\\(f(x)=6x(1-x)\\geq 0\\) for \\(0\\leq x\\leq 1\\).\n\\(\\int_0^1(6x-6x^2)\\,dx=[3x^2-2x^3]_0^1=3-2=1\\).\n✓. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Need: \\(f(x)\\geq 0\\) on \\([0,1]\\) and \\(\\int_0^1 f(x)\\,dx=1\\).\n\\(f(x)=6x(1-x)\\geq 0\\) for \\(0\\leq x\\leq 1\\).\n\\(\\int_0^1(6x-6x^2)\\,dx=[3x^2-2x^3]_0^1=3-2=1\\).\n✓\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q11fii",
    "topicId": "y12a-exam",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the mode of the probability density function $f(x) = 6x - 6x^2$ for $0 \\leq x \\leq 1$.",
    "opts": [
      "\\(-x = \\dfrac{1}{2}\\)",
      "\\(x = \\dfrac{1}{2}\\)",
      "\\(x = \\frac{1}{2}\\)",
      "\\(x = \\frac{2}{1}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The mode is where $f(x)$ is maximum. Set $f'(x)=0$.",
    "solution": "The correct answer is \\(x = \\dfrac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f'(x)=6-12x=0 \\Rightarrow x=\\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Mode} = \\tfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = \\dfrac{1}{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = \\dfrac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q11fiiv",
    "topicId": "y12a-exam",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the mode of the probability density function $f(x) = 12x^2(1-x)$ for $0 \\leq x \\leq 1$.",
    "opts": [
      "\\(-x = \\dfrac{2}{3}\\)",
      "\\(x = \\dfrac{2}{3}\\)",
      "\\(x = \\frac{1}{3}\\)",
      "\\(x = \\frac{3}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $f'(x)=0$ and check it's a maximum.",
    "solution": "The correct answer is \\(x = \\dfrac{2}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x=0 \\text{ or } x=\\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Mode}=\\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\dfrac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = \\dfrac{2}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = \\dfrac{2}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12a",
    "topicId": "y12a-exam",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the value(s) of $b$ such that $y = 2x + b$ is a tangent to the parabola $y = 2x^2 + 6x - 5$.",
    "opts": [
      "\\(b = -11\\)",
      "\\(b = 7\\)",
      "\\(b = -7\\)",
      "\\(b = -3\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Since the line is a tangent, the gradient of the parabola equals 2 at the point of contact. Find the $x$-coordinate, then substitute.",
    "solution": "The correct answer is \\(b = -7\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: The tangent line \\(y = 2x + b\\) has a gradient of \\(2\\). Find the derivative of the parabola and set it equal to \\(2\\) to find the \\(x\\)-coordinate of the point of contact.",
        "workingOut": "$$ \\begin{aligned} y &= 2x^2 + 6x - 5 \\\\\\\\ \\frac{dy}{dx} &= 4x + 6 \\\\\\\\ 4x + 6 &= 2 \\implies 4x = -4 \\implies x = -1 \\end{aligned} $$"
      },
      {
        "explanation": "Step 2: Find the \\(y\\)-coordinate of the point of contact on the parabola by substituting \\(x = -1\\).",
        "workingOut": "$$ \\begin{aligned} y &= 2(-1)^2 + 6(-1) - 5 \\\\\\\\ &= 2(1) - 6 - 5 = -9 \\\\\\\\ &\\implies \\text{Point of contact is } (-1, -9) \\end{aligned} $$"
      },
      {
        "explanation": "Step 3: The tangent line must pass through this point of contact. Substitute \\((-1, -9)\\) into the line's equation to find \\(b\\).",
        "workingOut": "$$ \\begin{aligned} y &= 2x + b \\\\\\\\ -9 &= 2(-1) + b \\\\\\\\ -9 &= -2 + b \\implies b = -7 \\end{aligned} $$"
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12av",
    "topicId": "y12a-exam",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the value of $b$ such that $y = 4x + b$ is a tangent to $y = x^2 + 2x + 3$.",
    "opts": [
      "\\(b = -2\\)",
      "\\(b = 2\\)",
      "\\(b = 6\\)",
      "\\(b = 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set the gradient equal: $y'=2x+2=4 \\Rightarrow x=1$. Substitute back.",
    "solution": "The correct answer is \\(b = 2\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: The tangent line \\(y = 4x + b\\) has a gradient of \\(4\\). Find the derivative of the parabola and set it equal to \\(4\\) to find the \\(x\\)-coordinate of the point of contact.",
        "workingOut": "$$ \\begin{aligned} y &= x^2 + 2x + 3 \\\\\\\\ \\frac{dy}{dx} &= 2x + 2 \\\\\\\\ 2x + 2 &= 4 \\implies 2x = 2 \\implies x = 1 \\end{aligned} $$"
      },
      {
        "explanation": "Step 2: Find the \\(y\\)-coordinate of the point of contact on the parabola by substituting \\(x = 1\\).",
        "workingOut": "$$ \\begin{aligned} y &= (1)^2 + 2(1) + 3 \\\\\\\\ &= 1 + 2 + 3 = 6 \\\\\\\\ &\\implies \\text{Point of contact is } (1, 6) \\end{aligned} $$"
      },
      {
        "explanation": "Step 3: The tangent line must pass through this point of contact. Substitute \\((1, 6)\\) into the line's equation to find \\(b\\).",
        "workingOut": "$$ \\begin{aligned} y &= 4x + b \\\\\\\\ 6 &= 4(1) + b \\\\\\\\ 6 &= 4 + b \\implies b = 2 \\end{aligned} $$"
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12bi",
    "topicId": "y12a-exam",
    "c": "12F",
    "t": "Probability tree diagrams",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Angela guesses three questions in a multiple choice test with 4 options per question. Find the probability that she gets only one correct answer.",
    "opts": [
      "\\(-0.421875\\)",
      "\\(-0.578125\\)",
      "\\(\\dfrac{27}{64}\\)",
      "\\(1.421875\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "$P(\\text{correct})=\\frac{1}{4}$, $P(\\text{wrong})=\\frac{3}{4}$. Exactly one correct out of three.",
    "solution": "The correct answer is \\(\\dfrac{27}{64}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\text{1 correct}) = \\binom{3}{1}\\left(\\tfrac{1}{4}\\right)\\left(\\tfrac{3}{4}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(3\\times\\frac{1}{4}\\times\\frac{9}{16}=\\frac{27}{64}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{27}{64}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{27}{64}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{27}{64}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12bii",
    "topicId": "y12a-exam",
    "c": "12F",
    "t": "Probability tree diagrams",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Angela guesses three questions in a multiple choice test with 4 options per question. Find the probability that she gets at least one correct answer.",
    "opts": [
      "\\(-0.421875\\)",
      "\\(-0.578125\\)",
      "\\(\\dfrac{37}{64}\\)",
      "\\(1.578125\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "$P(\\text{at least one}) = 1 - P(\\text{none correct})$.",
    "solution": "The correct answer is \\(\\dfrac{37}{64}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\text{none})=\\left(\\frac{3}{4}\\right)^3=\\frac{27}{64}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1-\\frac{27}{64}=\\frac{37}{64}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{37}{64}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{37}{64}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{37}{64}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12biiv",
    "topicId": "y12a-exam",
    "c": "12F",
    "t": "Probability tree diagrams",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A student guesses 4 questions in a true/false test. Find the probability of getting at least one correct.",
    "opts": [
      "\\(-0.0625\\)",
      "\\(-0.9375\\)",
      "\\(\\dfrac{15}{16}\\)",
      "\\(1.9375\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "$P(\\text{correct})=\\frac{1}{2}$. Use complement.",
    "solution": "The correct answer is \\(\\dfrac{15}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\text{at least one})=1-\\frac{1}{16}=\\frac{15}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{15}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{15}{16}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{15}{16}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12ci",
    "topicId": "y12a-exam",
    "c": "3H",
    "t": "Two graphs that have asymptotes",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Sketch the hyperbola obtained by shifting $y = \\dfrac{1}{x-1}$ horizontally 3 units to the right and 1 unit down.",
    "answer": "New equation: \\(y=\\dfrac{1}{x-4}-1\\).\nVertical asymptote: \\(x=4\\).\nHorizontal asymptote: \\(y=-1\\).\n\\(y\\)-intercept: \\((0,-\\frac{5}{4})\\).\n\\(x\\)-intercept: \\((5,0)\\).\nSketch both branches with correct asymptotes.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "New equation: \\(y=\\dfrac{1}{x-4}-1\\).\nVertical asymptote: \\(x=4\\).\nHorizontal asymptote: \\(y=-1\\).\n\\(y\\)-intercept: \\((0,-\\frac{5}{4})\\).\n\\(x\\)-intercept: \\((5,0)\\).\nSketch both branches with correct asymptotes.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y=\\frac{1}{x-4}-1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "x=4, quad y=-1",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\text{Sketch showing asymptotes and shape}",
        "graphData": null
      },
      {
        "explanation": "Final answer: New equation: \\(y=\\dfrac{1}{x-4}-1\\).\nVertical asymptote: \\(x=4\\).\nHorizontal asymptote: \\(y=-1\\).\n\\(y\\)-intercept: \\((0,-\\frac{5}{4})\\).\n\\(x\\)-intercept: \\((5,0)\\).\nSketch both branches with correct asymptotes.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "New equation: \\(y=\\dfrac{1}{x-4}-1\\).\nVertical asymptote: \\(x=4\\).\nHorizontal asymptote: \\(y=-1\\).\n\\(y\\)-intercept: \\((0,-\\frac{5}{4})\\).\n\\(x\\)-intercept: \\((5,0)\\).\nSketch both branches with correct asymptotes.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q12cii",
    "topicId": "y12a-exam",
    "c": "3H",
    "t": "Two graphs that have asymptotes",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "State the equation of the shifted hyperbola from Q12(c)(i) ($y=\\frac{1}{x-1}$ shifted 3 right and 1 down). Find all intercepts with the axes.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "y=\\dfrac{1}{x-4}-1\\); \\(y\\)-intercept: \\(\\left(0,-\\dfrac{5}{4}\\right)\\); \\(x\\)-intercept: \\((5,0)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For $y$-int set $x=0$; for $x$-int set $y=0$.",
    "solution": "The correct answer is y=\\dfrac{1}{x-4}-1\\); \\(y\\)-intercept: \\(\\left(0,-\\dfrac{5}{4}\\right)\\); \\(x\\)-intercept: \\((5,0).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y=\\frac{1}{x-4}-1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y=\\frac{1}{0-4}-1=-\\frac{1}{4}-1=-\\frac{5}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1}{x-4}=1 \\Rightarrow x=5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y=\\dfrac{1}{x-4}-1\\); \\(y\\)-intercept: \\(\\left(0,-\\dfrac{5}{4}\\right)\\); \\(x\\)-intercept: \\((5,0). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "y=\\dfrac{1}{x-4}-1\\); \\(y\\)-intercept: \\(\\left(0,-\\dfrac{5}{4}\\right)\\); \\(x\\)-intercept: \\((5,0)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12ciiv",
    "topicId": "y12a-exam",
    "c": "3H",
    "t": "Two graphs that have asymptotes",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "$y=\\dfrac{1}{x}$ is shifted 2 units left and 3 units up. State the new equation and find all intercepts.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "y=\\dfrac{1}{x+2}+3\\); \\(y\\)-intercept: \\(\\left(0,\\dfrac{7}{2}\\right)\\); \\(x\\)-intercept: \\(\\left(-\\dfrac{7}{3},0\\right)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "New equation: $y=\\frac{1}{x+2}+3$. Set $x=0$ and $y=0$ separately.",
    "solution": "The correct answer is y=\\dfrac{1}{x+2}+3\\); \\(y\\)-intercept: \\(\\left(0,\\dfrac{7}{2}\\right)\\); \\(x\\)-intercept: \\(\\left(-\\dfrac{7}{3},0\\right).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y=\\frac{1}{x+2}+3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y=\\frac{1}{2}+3=\\frac{7}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1}{x+2}=-3\\Rightarrow x=-\\frac{7}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y=\\dfrac{1}{x+2}+3\\); \\(y\\)-intercept: \\(\\left(0,\\dfrac{7}{2}\\right)\\); \\(x\\)-intercept: \\(\\left(-\\dfrac{7}{3},0\\right). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "y=\\dfrac{1}{x+2}+3\\); \\(y\\)-intercept: \\(\\left(0,\\dfrac{7}{2}\\right)\\); \\(x\\)-intercept: \\(\\left(-\\dfrac{7}{3},0\\right)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12di",
    "topicId": "y12a-exam",
    "c": "5H",
    "t": "Continuity and piecewise-defined functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Consider $f(x) = \\begin{cases}x^2-1 & x \\leq 1\\\\ 4-x^2 & x > 1\\end{cases}$. Find $f(1)$.",
    "opts": [
      "\\(-1\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Since $x=1$ satisfies $x\\leq 1$, use the first piece.",
    "solution": "The correct answer is \\(0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(1)=1^2-1=0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12dii",
    "topicId": "y12a-exam",
    "c": "5H",
    "t": "Continuity and piecewise-defined functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $f(x) = \\begin{cases}x^2-1 & x \\leq 1\\\\ 4-x^2 & x > 1\\end{cases}$, find all $x$ such that $f(x) = 0$.",
    "opts": [
      "\\(-x = -1,\\ 1,\\ 2\\)",
      "\\(x = -1,\\ 1,\\ 2\\)",
      "\\(x = -1,\\ 1,\\ 2 + 1\\)",
      "\\(x = -1,\\ 1,\\ 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Solve $x^2-1=0$ for $x\\leq 1$, and $4-x^2=0$ for $x>1$.",
    "solution": "The correct answer is \\(x = -1,\\ 1,\\ 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x=-1 \\text{ and } x=1 \\text{ both}\\leq 1\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x=2>1\\checkmark;\\quad x=-2 \\text{ rejected}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x=-1, 1, 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = -1,\\ 1,\\ 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = -1,\\ 1,\\ 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q12diii",
    "topicId": "y12a-exam",
    "c": "5H",
    "t": "Continuity and piecewise-defined functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Sketch the piecewise function $f(x) = \\begin{cases}x^2-1 & x \\leq 1\\\\ 4-x^2 & x > 1\\end{cases}$, showing all intercepts.",
    "answer": "Left piece: parabola \\(y=x^2-1\\) for \\(x\\leq1\\); \\(x\\)-intercepts at \\(x=\\pm1\\); \\(y\\)-intercept at \\((0,-1)\\); passes through \\((1,0)\\) (filled dot).\nRight piece: inverted parabola \\(y=4-x^2\\) for \\(x>1\\); at \\(x=1^+\\): \\(y=3\\) (open dot); \\(x\\)-intercept at \\(x=2\\); decreasing for \\(x>1\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Left piece: parabola \\(y=x^2-1\\) for \\(x\\leq1\\); \\(x\\)-intercepts at \\(x=\\pm1\\); \\(y\\)-intercept at \\((0,-1)\\); passes through \\((1,0)\\) (filled dot).\nRight piece: inverted parabola \\(y=4-x^2\\) for \\(x>1\\); at \\(x=1^+\\): \\(y=3\\) (open dot); \\(x\\)-intercept at \\(x=2\\); decreasing for \\(x>1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((−1,0),\\ (0,−1),\\ (1,0)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((1,3)\\text{ open},\\ (2,0)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(Left piece: parabola \\(y=x^2-1\\) for \\(x\\leq1\\); \\(x\\)-intercepts at \\(x=\\pm1\\); \\(y\\)-intercept at \\((0,-1)\\); passes through \\((1,0)\\) (filled dot).\nRight piece: inverted parabola \\(y=4-x^2\\) for \\(x>1\\); at \\(x=1^+\\): \\(y=3\\) (open dot); \\(x\\)-intercept at \\(x=2\\); decreasing for \\(x>1\\).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Left piece: parabola \\(y=x^2-1\\) for \\(x\\leq1\\); \\(x\\)-intercepts at \\(x=\\pm1\\); \\(y\\)-intercept at \\((0,-1)\\); passes through \\((1,0)\\) (filled dot).\nRight piece: inverted parabola \\(y=4-x^2\\) for \\(x>1\\); at \\(x=1^+\\): \\(y=3\\) (open dot); \\(x\\)-intercept at \\(x=2\\); decreasing for \\(x>1\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Left piece: parabola \\(y=x^2-1\\) for \\(x\\leq1\\); \\(x\\)-intercepts at \\(x=\\pm1\\); \\(y\\)-intercept at \\((0,-1)\\); passes through \\((1,0)\\) (filled dot).\nRight piece: inverted parabola \\(y=4-x^2\\) for \\(x>1\\); at \\(x=1^+\\): \\(y=3\\) (open dot); \\(x\\)-intercept at \\(x=2\\); decreasing for \\(x>1\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q12div",
    "topicId": "y12a-exam",
    "c": "5H",
    "t": "Continuity and piecewise-defined functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $g(x) = \\begin{cases}x+2 & x < 0 \\\\ x^2+1 & x \\geq 0\\end{cases}$, find all $x$ such that $g(x) = 2$.",
    "opts": [
      "\\(-x = 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(x = 1\\)",
      "\\(x = 1 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Solve each piece subject to its domain restriction.",
    "solution": "The correct answer is \\(x = 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{no solution from piece 1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x=1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13ai",
    "topicId": "y12a-exam",
    "c": "2C",
    "t": "A curve-sketching menu",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Sketch the graphs of $f(x) = 2x - 2x^2$ and $g(x) = x - 1$ on the same number plane.",
    "answer": "\\(f(x)=2x(1-x)\\): parabola opening down, \\(x\\)-intercepts 0 and 1, vertex at \\((\\frac{1}{2},\\frac{1}{2})\\).\n\\(g(x)\\): line with gradient 1, \\(y\\)-intercept \\(-1\\).\nIntersection points at \\(x=-\\frac{1}{2}\\) and \\(x=1\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(f(x)=2x(1-x)\\): parabola opening down, \\(x\\)-intercepts 0 and 1, vertex at \\((\\frac{1}{2},\\frac{1}{2})\\).\n\\(g(x)\\): line with gradient 1, \\(y\\)-intercept \\(-1\\).\nIntersection points at \\(x=-\\frac{1}{2}\\) and \\(x=1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f: \\text{ downward parabola}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(g: \\text{ straight line}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\(f(x)=2x(1-x)\\): parabola opening down, \\(x\\)-intercepts 0 and 1, vertex at \\((\\frac{1}{2},\\frac{1}{2})\\).\n\\(g(x)\\): line with gradient 1, \\(y\\)-intercept \\(-1\\).\nIntersection points at \\(x=-\\frac{1}{2}\\) and \\(x=1\\).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(f(x)=2x(1-x)\\): parabola opening down, \\(x\\)-intercepts 0 and 1, vertex at \\((\\frac{1}{2},\\frac{1}{2})\\).\n\\(g(x)\\): line with gradient 1, \\(y\\)-intercept \\(-1\\).\nIntersection points at \\(x=-\\frac{1}{2}\\) and \\(x=1\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(f(x)=2x(1-x)\\): parabola opening down, \\(x\\)-intercepts 0 and 1, vertex at \\((\\frac{1}{2},\\frac{1}{2})\\).\n\\(g(x)\\): line with gradient 1, \\(y\\)-intercept \\(-1\\).\nIntersection points at \\(x=-\\frac{1}{2}\\) and \\(x=1\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q13aii",
    "topicId": "y12a-exam",
    "c": "2D",
    "t": "Solving inequations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve the inequality $x - 1 < 2x - 2x^2$.",
    "opts": [
      "\\(--\\dfrac{1}{2} < x < 1\\)",
      "\\(-\\dfrac{1}{2} < x < 1\\)",
      "\\(-\\frac{1}{2} < x < 1\\)",
      "\\(-\\frac{2}{1} < x < 1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Rearrange to $0 < x + 1 - 2x^2$, then find where the parabola is above the line.",
    "solution": "The correct answer is \\(-\\dfrac{1}{2} < x < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2x^2-x-1<0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "(2x+1)(x-1)<0",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-\\frac{1}{2}<x<1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -\\dfrac{1}{2} < x < 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-\\dfrac{1}{2} < x < 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13aiiv",
    "topicId": "y12a-exam",
    "c": "2D",
    "t": "Solving inequations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve $3x - 2 < 4x - x^2$.",
    "opts": [
      "\\(-1 < x < 2\\)",
      "\\(-1 < x < 2 + 1\\)",
      "\\(-1 < x < 4\\)",
      "\\(1 < x < 2\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Rearrange to a quadratic inequality.",
    "solution": "The correct answer is \\(-1 < x < 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x^2-x-2<0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "(x-2)(x+1)<0",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "-1<x<2",
        "graphData": null
      },
      {
        "explanation": "Final answer: -1 < x < 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-1 < x < 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13bi",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "Trig with right-angled triangles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A tower $OT$ of height $h$ m stands at $O$. A surveyor at point $P$ (due east of $O$) sees the top at elevation 30°. Express the length $OP$ in terms of $h$.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(OP = h\\sqrt{3}\\)",
      "\\(OP = h\\sqrt{3} + 1\\)",
      "\\(OP = h\\sqrt{4}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "In right triangle $OTP$: $\\tan 30° = \\dfrac{h}{OP}$.",
    "solution": "The correct answer is \\(OP = h\\sqrt{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\tan 30°=\\frac{h}{OP}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(OP=\\frac{h}{\\tan 30°}=h\\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(OP = h\\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: OP = h\\sqrt{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(OP = h\\sqrt{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13bii",
    "topicId": "y12a-exam",
    "c": "6I",
    "t": "The cosine rule",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "The surveyor walks 100 m from $P$ to point $B$ on bearing 150° from $O$. Angle of elevation from $B$ is 45°. Show that $(100)^2 = h^2 + \\dfrac{h^2}{\\tan^2 30°} - \\dfrac{h^2}{\\tan 30°}$.",
    "answer": "\\(OB=h/\\tan45°=h\\).\n\\(OP=h\\sqrt{3}\\).\n\\(\\angle BOP=60°\\) (from bearing 150° and \\(P\\) east of \\(O\\)).\nCosine rule: \\(BP^2=OB^2+OP^2-2\\cdot OB\\cdot OP\\cos60°=h^2+3h^2-2h\\cdot h\\sqrt{3}\\cdot\\frac{1}{2}=h^2+3h^2-h^2\\sqrt{3}=h^2(4-\\sqrt{3})\\).\nHmm that gives \\(100^2=h^2(4-\\sqrt{3})\\).\nBut question shows \\(h^2+h^2/\\tan^2 30°-h^2/\\tan30°\\).\nSince \\(1/\\tan30°=\\sqrt{3}\\): \\(h^2+h^2\\cdot3-h^2\\cdot\\sqrt{3}=h^2(1+3-\\sqrt{3})=h^2(4-\\sqrt{3})\\).\nAnd \\(h^2/\\tan^230°=h^2/\\tan30°\\cdot1/\\tan30°=h^2\\cdot3\\)...\nwait \\(1/\\tan^230°=1/(1/\\sqrt{3})^2=3\\).\nAnd \\(h^2/\\tan30°=h^2\\sqrt{3}\\).\nSo \\(h^2+3h^2-h^2\\sqrt{3}=h^2(4-\\sqrt{3})=100^2\\).\nThe expression matches.\n✓",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(OB=h/\\tan45°=h\\).\n\\(OP=h\\sqrt{3}\\).\n\\(\\angle BOP=60°\\) (from bearing 150° and \\(P\\) east of \\(O\\)).\nCosine rule: \\(BP^2=OB^2+OP^2-2\\cdot OB\\cdot OP\\cos60°=h^2+3h^2-2h\\cdot h\\sqrt{3}\\cdot\\frac{1}{2}=h^2+3h^2-h^2\\sqrt{3}=h^2(4-\\sqrt{3})\\).\nHmm that gives \\(100^2=h^2(4-\\sqrt{3})\\).\nBut question shows \\(h^2+h^2/\\tan^2 30°-h^2/\\tan30°\\).\nSince \\(1/\\tan30°=\\sqrt{3}\\): \\(h^2+h^2\\cdot3-h^2\\cdot\\sqrt{3}=h^2(1+3-\\sqrt{3})=h^2(4-\\sqrt{3})\\).\nAnd \\(h^2/\\tan^230°=h^2/\\tan30°\\cdot1/\\tan30°=h^2\\cdot3\\)...\nwait \\(1/\\tan^230°=1/(1/\\sqrt{3})^2=3\\).\nAnd \\(h^2/\\tan30°=h^2\\sqrt{3}\\).\nSo \\(h^2+3h^2-h^2\\sqrt{3}=h^2(4-\\sqrt{3})=100^2\\).\nThe expression matches.\n✓",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(OB=h\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\angle BOP=60°\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(100^2=h^2+3h^2-2h\\cdot h\\sqrt{3}\\cdot\\cos60°=h^2+3h^2-h^2\\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(OB=h/\\tan45°=h\\).\n\\(OP=h\\sqrt{3}\\).\n\\(\\angle BOP=60°\\) (from bearing 150° and \\(P\\) east of \\(O\\)).\nCosine rule: \\(BP^2=OB^2+OP^2-2\\cdot OB\\cdot OP\\cos60°=h^2+3h^2-2h\\cdot h\\sqrt{3}\\cdot\\frac{1}{2}=h^2+3h^2-h^2\\sqrt{3}=h^2(4-\\sqrt{3})\\).\nHmm that gives \\(100^2=h^2(4-\\sqrt{3})\\).\nBut question shows \\(h^2+h^2/\\tan^2 30°-h^2/\\tan30°\\).\nSince \\(1/\\tan30°=\\sqrt{3}\\): \\(h^2+h^2\\cdot3-h^2\\cdot\\sqrt{3}=h^2(1+3-\\sqrt{3})=h^2(4-\\sqrt{3})\\).\nAnd \\(h^2/\\tan^230°=h^2/\\tan30°\\cdot1/\\tan30°=h^2\\cdot3\\)...\nwait \\(1/\\tan^230°=1/(1/\\sqrt{3})^2=3\\).\nAnd \\(h^2/\\tan30°=h^2\\sqrt{3}\\).\nSo \\(h^2+3h^2-h^2\\sqrt{3}=h^2(4-\\sqrt{3})=100^2\\).\nThe expression matches.\n✓. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(OB=h/\\tan45°=h\\).\n\\(OP=h\\sqrt{3}\\).\n\\(\\angle BOP=60°\\) (from bearing 150° and \\(P\\) east of \\(O\\)).\nCosine rule: \\(BP^2=OB^2+OP^2-2\\cdot OB\\cdot OP\\cos60°=h^2+3h^2-2h\\cdot h\\sqrt{3}\\cdot\\frac{1}{2}=h^2+3h^2-h^2\\sqrt{3}=h^2(4-\\sqrt{3})\\).\nHmm that gives \\(100^2=h^2(4-\\sqrt{3})\\).\nBut question shows \\(h^2+h^2/\\tan^2 30°-h^2/\\tan30°\\).\nSince \\(1/\\tan30°=\\sqrt{3}\\): \\(h^2+h^2\\cdot3-h^2\\cdot\\sqrt{3}=h^2(1+3-\\sqrt{3})=h^2(4-\\sqrt{3})\\).\nAnd \\(h^2/\\tan^230°=h^2/\\tan30°\\cdot1/\\tan30°=h^2\\cdot3\\)...\nwait \\(1/\\tan^230°=1/(1/\\sqrt{3})^2=3\\).\nAnd \\(h^2/\\tan30°=h^2\\sqrt{3}\\).\nSo \\(h^2+3h^2-h^2\\sqrt{3}=h^2(4-\\sqrt{3})=100^2\\).\nThe expression matches.\n✓\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q13biii",
    "topicId": "y12a-exam",
    "c": "6I",
    "t": "The cosine rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Hence find the height $h$ of the tower correct to 1 decimal place.",
    "opts": [
      "\\(h \\approx 66.4\\) m",
      "\\(h \\approx 66.4\\) m + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "From $100^2 = h^2(4-\\sqrt{3})$, solve for $h$.",
    "solution": "The correct answer is \\(h \\approx 66.4\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(h^2=\\frac{10000}{4-\\sqrt{3}}\\approx4409.3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(h\\approx 66.4 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(h \\approx 66.4\\) m",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(h \\approx 66.4\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(h \\approx 66.4\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13biiiv",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "Trig with right-angled triangles",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A flagpole of height $h$ m stands at $O$. A person at $P$ sees the top at 45° elevation with $OP = 80$ m. Find $h$.",
    "opts": [
      "\\(h = 80\\) m",
      "\\(h = 80\\) m + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "$\\tan 45°=h/OP$.",
    "solution": "The correct answer is \\(h = 80\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(h=80 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(h = 80\\) m",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(h = 80\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(h = 80\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13ci",
    "topicId": "y12a-exam",
    "c": "9D",
    "t": "Bivariate data",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Waist measurements (cm): 72, 67, 85, 96, 80, 90, 98, 105. Weights (kg): 58, 50, 72, 85, 70, 79, 82, 84. Calculate the correlation coefficient $r$ correct to 3 decimal places and describe the strength of the relationship.",
    "opts": [
      "\\(r \\approx 0.959\\); strong positive correlation",
      "\\(r \\approx 0.959\\); strong positive correlation + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Enter data into calculator and use the linear regression function.",
    "solution": "The correct answer is \\(r \\approx 0.959\\); strong positive correlation.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((x,y) \\text{ pairs entered}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(r \\approx 0.959\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(|r|\\approx 1, r>0 \\Rightarrow \\text{strong positive correlation}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(r \\approx 0.959\\); strong positive correlation. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(r \\approx 0.959\\); strong positive correlation",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13cii",
    "topicId": "y12a-exam",
    "c": "9E",
    "t": "Line of best fit",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the equation of the Least-Squares Regression Line for the waist/weight data.",
    "opts": [
      "\\(y = +8.237 - 0.932x\\)",
      "\\(y = -8.237 + 0.932x\\)",
      "\\(y = -8.237 + 0.932x + 1\\)",
      "\\(y = -8.447 + 0.944x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use calculator's linear regression function with waist as $x$ and weight as $y$.",
    "solution": "The correct answer is \\(y = -8.237 + 0.932x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "A=-8.2368, quad B=0.93203",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y=-8.237+0.932x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = -8.237 + 0.932x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -8.237 + 0.932x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -8.237 + 0.932x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13ciiv",
    "topicId": "y12a-exam",
    "c": "9E",
    "t": "Line of best fit",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A regression line for shoe size ($x$) vs height in cm ($y$) is $y = 130 + 4x$. Predict the height of someone with shoe size 10.",
    "opts": [
      "\\(170\\) cm",
      "\\(170\\) cm + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $x=10$ into the regression equation.",
    "solution": "The correct answer is \\(170\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y=130+40=170 \\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(170\\) cm",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(170\\) cm. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(170\\) cm",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13di",
    "topicId": "y12a-exam",
    "c": "5F",
    "t": "Review of logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the domain of \\(f(x) = \\ln(x^{2}+1)\\).",
    "opts": [
      "\\(x > 0\\)",
      "all real \\(x\\)",
      "\\(x \\ge 0\\)",
      "\\(x > -1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "For \\(\\ln\\) to be defined the argument must be positive: check whether \\(x^{2}+1>0\\) for all real \\(x\\).",
    "solution": "Since \\(x^{2}\\ge 0\\), \\(x^{2}+1\\ge 1>0\\) for every real \\(x\\). Domain: all real \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "The natural logarithm \\(\\ln u\\) is defined only when \\(u>0\\). Here \\(u=x^{2}+1\\), so we need \\(x^{2}+1>0\\).",
        "workingOut": "\\(x^{2}+1>0\\)",
        "graphData": null
      },
      {
        "explanation": "For every real number \\(x\\), the square \\(x^{2}\\) is at least 0. Adding 1 gives a value at least 1, which is strictly positive.",
        "workingOut": "\\(x^{2}\\ge 0 \\implies x^{2}+1\\ge 1>0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the inequality holds for all real \\(x\\). The domain of \\(f\\) is the set of all real numbers.",
        "workingOut": "\\(\\operatorname{dom} f = \\mathbb{R}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13dii",
    "topicId": "y12a-exam",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find any stationary points of $f(x) = \\ln(x^2+1)$ and determine their nature.",
    "opts": [
      "Local minimum at \\((0, 0)\\)",
      "Local maximum at \\((0, 0)\\)",
      "Horizontal point of inflection at \\((0, 0)\\)",
      "Local minimum at \\((1, \\ln 2)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set $f'(x)=\\dfrac{2x}{x^2+1}=0$.",
    "solution": "The correct answer is Local minimum at \\((0, 0)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Find the first derivative \\(f'(x)\\) using the chain rule and set it equal to zero to find stationary points.",
        "workingOut": "$$ \\begin{aligned} f(x) &= \\ln(x^2+1) \\\\\\\\ f'(x) &= \\frac{1}{x^2+1} \\cdot 2x = \\frac{2x}{x^2+1} \\\\\\\\ \\frac{2x}{x^2+1} &= 0 \\implies 2x = 0 \\implies x = 0 \\end{aligned} $$"
      },
      {
        "explanation": "Step 2: Find the \\(y\\)-coordinate by substituting \\(x = 0\\) back into the original function.",
        "workingOut": "$$ f(0) = \\ln(0^2+1) = \\ln(1) = 0 \\implies \\text{Stationary point at } (0, 0) $$"
      },
      {
        "explanation": "Step 3: Determine the nature of the stationary point using the first derivative test.",
        "workingOut": "$$ \\begin{aligned} \\text{For } x < 0: &\\quad f'(x) = \\frac{2x}{x^2+1} < 0 \\quad (\\text{Decreasing}) \\\\\\\\ \\text{For } x > 0: &\\quad f'(x) = \\frac{2x}{x^2+1} > 0 \\quad (\\text{Increasing}) \\\\\\\\ \\end{aligned} $$"
      },
      {
        "explanation": "Step 4: Since the gradient changes from negative to positive, \\((0,0)\\) is a local minimum.",
        "workingOut": "$$ \\therefore \\text{Local minimum at } (0,0) $$"
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13diii",
    "topicId": "y12a-exam",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find any points of inflection of $f(x) = \\ln(x^2+1)$.",
    "opts": [
      "\\((1, \\ln 2)\\) and \\((-1, \\ln 2)\\)",
      "\\((1, \\ln 2)\\) and \\((0, 0)\\)",
      "\\((2, \\ln 5)\\) and \\((-2, \\ln 5)\\)",
      "\\((1, \\log 2)\\) and \\((-1, \\log 2)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $f''(x)=0$ and verify concavity changes.",
    "solution": "The correct answer is \\((1, \\ln 2)\\) and \\((-1, \\ln 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: To find points of inflection, we need the second derivative \\(f''(x)\\). Differentiate \\(f'(x) = \\frac{2x}{x^2+1}\\) using the quotient rule.",
        "workingOut": "$$ \\begin{aligned} f''(x) &= \\frac{v u' - u v'}{v^2} \\\\\\\\ &= \\frac{(x^2+1)(2) - (2x)(2x)}{(x^2+1)^2} \\\\\\\\ &= \\frac{2x^2 + 2 - 4x^2}{(x^2+1)^2} = \\frac{2 - 2x^2}{(x^2+1)^2} \\end{aligned} $$"
      },
      {
        "explanation": "Step 2: Set \\(f''(x) = 0\\) to find the possible points of inflection.",
        "workingOut": "$$ \\begin{aligned} \\frac{2 - 2x^2}{(x^2+1)^2} &= 0 \\\\\\\\ 2 - 2x^2 &= 0 \\implies x^2 = 1 \\implies x = \\pm 1 \\end{aligned} $$"
      },
      {
        "explanation": "Step 3: Find the corresponding \\(y\\)-coordinates by substituting \\(x = \\pm 1\\) into the original function \\(f(x)\\).",
        "workingOut": "$$ f(\\pm 1) = \\ln((\\pm 1)^2+1) = \\ln(2) \\implies (1, \\ln 2) \\text{ and } (-1, \\ln 2) $$"
      },
      {
        "explanation": "Step 4: Verify that a change in concavity occurs across \\(x = \\pm 1\\) by testing values of \\(x\\) in \\(f''(x)\\).",
        "workingOut": "$$ \\begin{aligned} \\text{Test } x = 0: &\\quad f''(0) = \\frac{2}{1} = 2 > 0 \\quad (\\text{Concave up}) \\\\\\\\ \\text{Test } x = 2: &\\quad f''(2) = \\frac{2 - 8}{(5)^2} = -\\frac{6}{25} < 0 \\quad (\\text{Concave down}) \\end{aligned} $$"
      },
      {
        "explanation": "Step 5: Since \\(f''(x)\\) changes sign, these are true points of inflection.",
        "workingOut": "$$ \\therefore \\text{Points of inflection at } (1, \\ln 2) \\text{ and } (-1, \\ln 2) $$"
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q13div",
    "topicId": "y12a-exam",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Sketch the graph of $f(x) = \\ln(x^2+1)$ showing all features from parts (ii) and (iii).",
    "answer": "Even function (symmetric about \\(y\\)-axis).\nMinimum at \\((0,0)\\).\nPoints of inflection at \\((\\pm1,\\ln2)\\).\nCurve increases for \\(x>0\\), decreases for \\(x<0\\).\nNo \\(x\\)-intercepts other than origin.\nConcave up for \\(|x|<1\\), concave down for \\(|x|>1\\).\n\\(y\\to\\infty\\) as \\(x\\to\\pm\\infty\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Even function (symmetric about \\(y\\)-axis).\nMinimum at \\((0,0)\\).\nPoints of inflection at \\((\\pm1,\\ln2)\\).\nCurve increases for \\(x>0\\), decreases for \\(x<0\\).\nNo \\(x\\)-intercepts other than origin.\nConcave up for \\(|x|<1\\), concave down for \\(|x|>1\\).\n\\(y\\to\\infty\\) as \\(x\\to\\pm\\infty\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(-x)=f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Plot key points}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Concave up }|x|<1, text{ concave down }|x|>1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Even function (symmetric about \\(y\\)-axis).\nMinimum at \\((0,0)\\).\nPoints of inflection at \\((\\pm1,\\ln2)\\).\nCurve increases for \\(x>0\\), decreases for \\(x<0\\).\nNo \\(x\\)-intercepts other than origin.\nConcave up for \\(|x|<1\\), concave down for \\(|x|>1\\).\n\\(y\\to\\infty\\) as \\(x\\to\\pm\\infty\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Even function (symmetric about \\(y\\)-axis).\nMinimum at \\((0,0)\\).\nPoints of inflection at \\((\\pm1,\\ln2)\\).\nCurve increases for \\(x>0\\), decreases for \\(x<0\\).\nNo \\(x\\)-intercepts other than origin.\nConcave up for \\(|x|<1\\), concave down for \\(|x|>1\\).\n\\(y\\to\\infty\\) as \\(x\\to\\pm\\infty\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q13divv",
    "topicId": "y12a-exam",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find any stationary points and points of inflection of $f(x) = xe^{-x}$.",
    "opts": [
      "Stationary point (maximum) at \\((1, e^{-1})\\); point of inflection at \\((2, 2e^{-2})\\)",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Differentiate using product rule: $f'=e^{-x}-xe^{-x}=e^{-x}(1-x)$.",
    "solution": "The correct answer is Stationary point (maximum) at \\((1, e^{-1})\\); point of inflection at \\((2, 2e^{-2})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Max at }(1,e^{-1})\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{POI at }(2,2e^{-2})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Stationary point (maximum) at \\((1, e^{-1})\\); point of inflection at \\((2, 2e^{-2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Stationary point (maximum) at \\((1, e^{-1})\\); point of inflection at \\((2, 2e^{-2})\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Stationary point (maximum) at \\((1, e^{-1})\\); point of inflection at \\((2, 2e^{-2})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q14ai",
    "topicId": "y12a-exam",
    "c": "6F",
    "t": "Trigonometric identities",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Prove the identity $(1+\\tan x)^2 = 2\\tan x + \\sec^2 x$.",
    "answer": "LHS \\(= 1+2\\tan x+\\tan^2 x\\).\nUse \\(1+\\tan^2 x=\\sec^2 x\\): \\(= \\sec^2 x+2\\tan x =\\) RHS.\n✓",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "LHS \\(= 1+2\\tan x+\\tan^2 x\\).\nUse \\(1+\\tan^2 x=\\sec^2 x\\): \\(= \\sec^2 x+2\\tan x =\\) RHS.\n✓",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(1+2\\tan x+\\tan^2 x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((1+\\tan^2 x)+2\\tan x=\\sec^2 x+2\\tan x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\sec^2 x+2\\tan x = 2\\tan x+\\sec^2 x\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: LHS \\(= 1+2\\tan x+\\tan^2 x\\).\nUse \\(1+\\tan^2 x=\\sec^2 x\\): \\(= \\sec^2 x+2\\tan x =\\) RHS.\n✓. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(LHS \\(= 1+2\\tan x+\\tan^2 x\\).\nUse \\(1+\\tan^2 x=\\sec^2 x\\): \\(= \\sec^2 x+2\\tan x =\\) RHS.\n✓\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q14aii",
    "topicId": "y12a-exam",
    "c": "6E",
    "t": "Applications of integration of trig",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Hence find the area bounded by $y=(1+\\tan x)^2$ and the $x$-axis between $-\\dfrac{\\pi}{4}\\leq x\\leq\\dfrac{\\pi}{4}$.",
    "opts": [
      "\\(2\\) square units",
      "\\(2\\) square units + 1",
      "\\(4\\) square units",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use part (i): $(1+\\tan x)^2=2\\tan x+\\sec^2 x$. Integrate from $-\\pi/4$ to $\\pi/4$.",
    "solution": "The correct answer is \\(2\\) square units.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_{-\\pi/4}^{\\pi/4}(2\\tan x+\\sec^2 x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\([-2\\ln|\\cos x|+\\tan x]_{-\\pi/4}^{\\pi/4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\ln 2+1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\) square units. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(2\\) square units",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q14aiiv",
    "topicId": "y12a-exam",
    "c": "6E",
    "t": "Applications of integration of trig",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find $\\displaystyle\\int_0^{\\pi/4}\\sec^2 x\\, dx$.",
    "opts": [
      "\\(-1\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Antiderivative of $\\sec^2 x$ is $\\tan x$.",
    "solution": "The correct answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\([\\tan x]_0^{\\pi/4}=1-0=1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q14bi",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "The trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "For $y = 2\\sin\\left(2x-\\dfrac{\\pi}{3}\\right)$, state the amplitude and period.",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "Amplitude \\(= 2\\); period \\(= \\pi\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Amplitude $= |A|$; period $= \\dfrac{2\\pi}{n}$ where $n$ is the coefficient of $x$.",
    "solution": "The correct answer is Amplitude \\(= 2\\); period \\(= \\pi\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Amplitude}=2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Period}=\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Amplitude \\(= 2\\); period \\(= \\pi\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Amplitude \\(= 2\\); period \\(= \\pi\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Amplitude \\(= 2\\); period \\(= \\pi\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q14bii",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "The trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact values of all intercepts of $y = 2\\sin\\left(2x-\\dfrac{\\pi}{3}\\right)$ with the axes for $0 \\leq x \\leq \\pi$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "y\\)-intercept: \\((0,-\\sqrt{3})\\); \\(x\\)-intercepts: \\(\\left(\\dfrac{\\pi}{6},0\\right)\\) and \\(\\left(\\dfrac{2\\pi}{3},0\\right)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "At $x=0$: find $y$. For $x$-ints: solve $\\sin(2x-\\pi/3)=0$.",
    "solution": "The correct answer is y\\)-intercept: \\((0,-\\sqrt{3})\\); \\(x\\)-intercepts: \\(\\left(\\dfrac{\\pi}{6},0\\right)\\) and \\(\\left(\\dfrac{2\\pi}{3},0\\right).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((0,-\\sqrt{3})\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x=\\frac{\\pi}{6}, quad x=\\frac{2\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "y\\)-intercept: \\((0,-\\sqrt{3})\\); \\(x\\)-intercepts: \\(\\left(\\dfrac{\\pi}{6},0\\right)\\) and \\(\\left(\\dfrac{2\\pi}{3},0\\right)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y\\)-intercept: \\((0,-\\sqrt{3})\\); \\(x\\)-intercepts: \\(\\left(\\dfrac{\\pi}{6},0\\right)\\) and \\(\\left(\\dfrac{2\\pi}{3},0\\right). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "y\\)-intercept: \\((0,-\\sqrt{3})\\); \\(x\\)-intercepts: \\(\\left(\\dfrac{\\pi}{6},0\\right)\\) and \\(\\left(\\dfrac{2\\pi}{3},0\\right)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q14biii",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "The trigonometric functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Sketch $y = 2\\sin\\left(2x-\\dfrac{\\pi}{3}\\right)$ for $0\\leq x\\leq\\pi$, showing intercepts, global max and min.",
    "answer": "Period \\(\\pi\\), amplitude 2.\n\\(y\\)-int \\((0,-\\sqrt{3})\\).\n\\(x\\)-ints \\((\\pi/6,0)\\) and \\((2\\pi/3,0)\\).\nGlobal max at \\((5\\pi/12,2)\\); global min at \\((11\\pi/12,-2)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Period \\(\\pi\\), amplitude 2.\n\\(y\\)-int \\((0,-\\sqrt{3})\\).\n\\(x\\)-ints \\((\\pi/6,0)\\) and \\((2\\pi/3,0)\\).\nGlobal max at \\((5\\pi/12,2)\\); global min at \\((11\\pi/12,-2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{from part (ii)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\left(\\frac{5\\pi}{12},2\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\left(\\frac{11\\pi}{12},-2\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Period \\(\\pi\\), amplitude 2.\n\\(y\\)-int \\((0,-\\sqrt{3})\\).\n\\(x\\)-ints \\((\\pi/6,0)\\) and \\((2\\pi/3,0)\\).\nGlobal max at \\((5\\pi/12,2)\\); global min at \\((11\\pi/12,-2)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Period \\(\\pi\\), amplitude 2.\n\\(y\\)-int \\((0,-\\sqrt{3})\\).\n\\(x\\)-ints \\((\\pi/6,0)\\) and \\((2\\pi/3,0)\\).\nGlobal max at \\((5\\pi/12,2)\\); global min at \\((11\\pi/12,-2)\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q14biiv",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "The trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "For $y = 3\\sin(2x)$, state the amplitude and period, and find the $x$-intercepts for $0\\leq x\\leq\\pi$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Amplitude \\(=3\\); period \\(=\\pi\\); \\(x\\)-intercepts at \\(x=0,\\dfrac{\\pi}{2},\\pi\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Amplitude $=|A|$, period $=2\\pi/n$. $x$-ints when $\\sin(2x)=0$.",
    "solution": "The correct answer is Amplitude \\(=3\\); period \\(=\\pi\\); \\(x\\)-intercepts at \\(x=0,\\dfrac{\\pi}{2},\\pi\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Amplitude}=3, quad \\text{Period}=\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x=0, frac{\\pi}{2}, pi\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Amplitude \\(=3\\); period \\(=\\pi\\); \\(x\\)-intercepts at \\(x=0,\\dfrac{\\pi}{2},\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Amplitude \\(=3\\); period \\(=\\pi\\); \\(x\\)-intercepts at \\(x=0,\\dfrac{\\pi}{2},\\pi\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Amplitude \\(=3\\); period \\(=\\pi\\); \\(x\\)-intercepts at \\(x=0,\\dfrac{\\pi}{2},\\pi\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q14ci",
    "topicId": "y12a-exam",
    "c": "10A",
    "t": "Probability distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A bag has 3 red and 4 black balls. Two balls are drawn without replacement. Let $X$ = number of black balls. Fill in the distribution table and find $E(X)$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "P(X=0)=\\dfrac{1}{7}\\), \\(P(X=1)=\\dfrac{4}{7}\\), \\(P(X=2)=\\dfrac{2}{7}\\); \\(E(X)=\\dfrac{8}{7}"
    ],
    "a": 3,
    "answer": "3",
    "hint": "$P(X=0)=\\frac{3}{7}\\cdot\\frac{2}{6}$, $P(X=1)=2\\cdot\\frac{4}{7}\\cdot\\frac{3}{6}$, $P(X=2)=\\frac{4}{7}\\cdot\\frac{3}{6}$.",
    "solution": "The correct answer is P(X=0)=\\dfrac{1}{7}\\), \\(P(X=1)=\\dfrac{4}{7}\\), \\(P(X=2)=\\dfrac{2}{7}\\); \\(E(X)=\\dfrac{8}{7}.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(0)=\\frac{1}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(1)=\\frac{4}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P(2)=\\frac{2}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: P(X=0)=\\dfrac{1}{7}\\), \\(P(X=1)=\\dfrac{4}{7}\\), \\(P(X=2)=\\dfrac{2}{7}\\); \\(E(X)=\\dfrac{8}{7}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "P(X=0)=\\dfrac{1}{7}\\), \\(P(X=1)=\\dfrac{4}{7}\\), \\(P(X=2)=\\dfrac{2}{7}\\); \\(E(X)=\\dfrac{8}{7}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q14cii",
    "topicId": "y12a-exam",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the black ball distribution ($P(X=0)=\\frac{1}{7}$, $P(X=1)=\\frac{4}{7}$, $P(X=2)=\\frac{2}{7}$, $E(X)=\\frac{8}{7}$), find $E(X^2)$, $\\text{Var}(X)$, and $\\sigma$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "E(X^2)=\\dfrac{12}{7}\\); \\(\\text{Var}(X)=\\dfrac{20}{49}\\); \\(\\sigma\\approx 0.638"
    ],
    "a": 3,
    "answer": "3",
    "hint": "$E(X^2)=\\sum x^2p(x)$; $\\text{Var}(X)=E(X^2)-[E(X)]^2$.",
    "solution": "The correct answer is E(X^2)=\\dfrac{12}{7}\\); \\(\\text{Var}(X)=\\dfrac{20}{49}\\); \\(\\sigma\\approx 0.638.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(E(X^2)=\\frac{12}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Var}(X)=\\frac{20}{49}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\sigma\\approx0.638\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: E(X^2)=\\dfrac{12}{7}\\); \\(\\text{Var}(X)=\\dfrac{20}{49}\\); \\(\\sigma\\approx 0.638. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "E(X^2)=\\dfrac{12}{7}\\); \\(\\text{Var}(X)=\\dfrac{20}{49}\\); \\(\\sigma\\approx 0.638",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q14ciiv",
    "topicId": "y12a-exam",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A bag has 2 red and 3 blue balls. Two drawn without replacement. Let $X$=blue balls drawn. Find $E(X)$ and $\\text{Var}(X)$.",
    "opts": [
      "-E(X)=\\dfrac{6}{5}\\); \\(\\text{Var}(X)=\\dfrac{9}{25}",
      "E(X)=\\dfrac{6}{5}\\); \\(\\text{Var}(X)=\\dfrac{9}{25}",
      "E(X)=\\frac{1}{5}\\); \\(\\text{Var}(X)=\\dfrac{9}{25}",
      "E(X)=\\frac{5}{6}\\); \\(\\text{Var}(X)=\\dfrac{9}{25}"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find $P(X=0,1,2)$ then compute $E(X)$ and $\\text{Var}(X)$.",
    "solution": "The correct answer is E(X)=\\dfrac{6}{5}\\); \\(\\text{Var}(X)=\\dfrac{9}{25}.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{(by combinations without replacement)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(E(X)=\\frac{6}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Var}(X)=\\frac{9}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: E(X)=\\dfrac{6}{5}\\); \\(\\text{Var}(X)=\\dfrac{9}{25}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "E(X)=\\dfrac{6}{5}\\); \\(\\text{Var}(X)=\\dfrac{9}{25}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q15ai",
    "topicId": "y12a-exam",
    "c": "7A",
    "t": "Average velocity and speed",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The velocity of a particle is $v = 5(1+e^{-t})$ m/s. Find the initial velocity.",
    "opts": [
      "\\(10\\) m/s",
      "\\(10\\) m/s + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $t=0$.",
    "solution": "The correct answer is \\(10\\) m/s.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(v(0)=5(1+1)=10\\text{ m/s}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(10\\) m/s",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(10\\) m/s. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(10\\) m/s",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q15aii",
    "topicId": "y12a-exam",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "For $v = 5(1+e^{-t})$, is the particle ever stationary? Justify your answer.",
    "opts": [
      "No. \\(v=0\\) requires \\(e^{-t}=-1\\), which has no real solution since \\(e^{-t}>0\\) always.",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set $v=0$ and check if a solution exists.",
    "solution": "The correct answer is No. \\(v=0\\) requires \\(e^{-t}=-1\\), which has no real solution since \\(e^{-t}>0\\) always..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(1+e^{-t}=0\\Rightarrow e^{-t}=-1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Particle never stationary}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "No. \\(v=0\\) requires \\(e^{-t}=-1\\), which has no real solution since \\(e^{-t}>0\\) always.",
        "graphData": null
      },
      {
        "explanation": "Final answer: No. \\(v=0\\) requires \\(e^{-t}=-1\\), which has no real solution since \\(e^{-t}>0\\) always.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "No. \\(v=0\\) requires \\(e^{-t}=-1\\), which has no real solution since \\(e^{-t}>0\\) always.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q15aiii",
    "topicId": "y12a-exam",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Sketch the graph of $v = 5(1+e^{-t})$ for $t\\geq 0$.",
    "answer": "\\(v\\)-intercept at \\((0,10)\\).\nAs \\(t\\to\\infty\\), \\(v\\to 5\\) (horizontal asymptote \\(v=5\\)).\nStrictly decreasing, always above \\(v=5\\).\nSmooth exponential decay shape.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(v\\)-intercept at \\((0,10)\\).\nAs \\(t\\to\\infty\\), \\(v\\to 5\\) (horizontal asymptote \\(v=5\\)).\nStrictly decreasing, always above \\(v=5\\).\nSmooth exponential decay shape.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((0,10)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(v=5 \\text{ (horizontal asymptote)}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\(v\\)-intercept at \\((0,10)\\).\nAs \\(t\\to\\infty\\), \\(v\\to 5\\) (horizontal asymptote \\(v=5\\)).\nStrictly decreasing, always above \\(v=5\\).\nSmooth exponential decay shape.\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(v\\)-intercept at \\((0,10)\\).\nAs \\(t\\to\\infty\\), \\(v\\to 5\\) (horizontal asymptote \\(v=5\\)).\nStrictly decreasing, always above \\(v=5\\).\nSmooth exponential decay shape.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(v\\)-intercept at \\((0,10)\\).\nAs \\(t\\to\\infty\\), \\(v\\to 5\\) (horizontal asymptote \\(v=5\\)).\nStrictly decreasing, always above \\(v=5\\).\nSmooth exponential decay shape.\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q15aiv",
    "topicId": "y12a-exam",
    "c": "7C",
    "t": "Integrating with respect to time",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the total distance travelled by the particle with $v=5(1+e^{-t})$ in the first 5 seconds.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(30-5e^{-5}\\) m \\(\\approx 29.97\\) m"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Since $v>0$ always, distance $=\\int_0^5 v\\,dt$.",
    "solution": "The correct answer is \\(30-5e^{-5}\\) m \\(\\approx 29.97\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(d=\\int_0^5 5(1+e^{-t})\\,dt\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(5[t-e^{-t}]_0^5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(5[(5-e^{-5})-(0-1)]=5(6-e^{-5})=30-5e^{-5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(30-5e^{-5}\\) m \\(\\approx 29.97\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(30-5e^{-5}\\) m \\(\\approx 29.97\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q15aivv",
    "topicId": "y12a-exam",
    "c": "7C",
    "t": "Integrating with respect to time",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A particle has velocity $v=3(1+e^{-2t})$ m/s. Find the distance travelled in the first 2 seconds.",
    "opts": [
      "-\\(6 + \\dfrac{3}{2}(1-e^{-4})\\) m",
      "\\(6 + \\dfrac{3}{2}(1-e^{-4})\\) m",
      "\\(6 + \\frac{1}{2}(1-e^{-4})\\) m",
      "\\(6 + \\frac{2}{3}(1-e^{-4})\\) m"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate $v$ from 0 to 2.",
    "solution": "The correct answer is \\(6 + \\dfrac{3}{2}(1-e^{-4})\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(3[t-\\frac{1}{2}e^{-2t}]_0^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(3(2+\\frac{1}{2}-\\frac{1}{2}e^{-4})=6+\\frac{3}{2}(1-e^{-4})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(6 + \\dfrac{3}{2}(1-e^{-4})\\) m",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(6 + \\dfrac{3}{2}(1-e^{-4})\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(6 + \\dfrac{3}{2}(1-e^{-4})\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q15bi",
    "topicId": "y12a-exam",
    "c": "5F",
    "t": "Review of logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The line \\(y=mx\\) is a tangent to the curve \\(y=\\ln(2x-1)\\) at a point \\(P\\). Which statement correctly describes the sketch of the line and the curve?",
    "opts": [
      "The curve has domain \\(x>0\\), vertical asymptote \\(x=0\\), and meets the line only at the origin",
      "The curve has domain \\(x>\\dfrac{1}{2}\\), vertical asymptote \\(x=\\dfrac{1}{2}\\), and \\(P\\) lies to the left of the asymptote",
      "The curve has domain \\(x>\\dfrac{1}{2}\\), vertical asymptote \\(x=\\dfrac{1}{2}\\), passes through \\((1,0)\\); the line through the origin is tangent at \\(P\\) with \\(x_P>\\dfrac{1}{2}\\)",
      "The curve is defined for all real \\(x\\) and the tangent line is horizontal"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Domain of \\(\\ln(2x-1)\\) needs \\(2x-1>0\\). The line \\(y=mx\\) goes through the origin; the point of contact \\(P\\) must lie on the curve (so to the right of the asymptote).",
    "solution": "Domain: \\(x>\\dfrac{1}{2}\\). Vertical asymptote \\(x=\\dfrac{1}{2}\\). At \\(x=1\\), \\(y=\\ln 1=0\\). The line \\(y=mx\\) through O is tangent at some \\(P\\) with \\(x_P>\\dfrac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "The logarithm \\(\\ln(2x-1)\\) is defined only when its argument is positive: \\(2x-1>0\\), so \\(x>\\dfrac{1}{2}\\). There is a vertical asymptote at the endpoint of the domain, \\(x=\\dfrac{1}{2}\\).",
        "workingOut": "\\(2x-1>0 \\implies x>\\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=1\\), \\(y=\\ln(2-1)=\\ln 1=0\\), so the curve crosses the \\(x\\)-axis at \\((1,0)\\). The curve is increasing on its domain because its derivative \\(\\dfrac{2}{2x-1}\\) is positive for \\(x>\\dfrac{1}{2}\\).",
        "workingOut": "\\((1,0)\\) on the curve; \\(y'>0\\)",
        "graphData": null
      },
      {
        "explanation": "The line \\(y=mx\\) always passes through the origin. For it to be a tangent to the curve, the point of contact \\(P\\) must lie on the curve, so its \\(x\\)-coordinate satisfies \\(x_P>\\dfrac{1}{2}\\) (to the right of the asymptote).",
        "workingOut": "\\(P\\) on both; \\(x_P>\\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "A correct sketch therefore shows the log curve with asymptote \\(x=\\dfrac{1}{2}\\), intercept \\((1,0)\\), the line through the origin touching the curve at a labelled point \\(P\\) with \\(x_P>\\dfrac{1}{2}\\).",
        "workingOut": "\\(\\text{domain }x>\\tfrac12;\\; P\\text{ right of asymptote}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -0.3,
          2.2,
          3.2,
          -1.6
        ],
        "showAxisLabels": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-0.2,0],[3.1,0]], {strokeColor:'black', strokeWidth:1.4}); board.create('arrow', [[0,-1.5],[0,2.1]], {strokeColor:'black', strokeWidth:1.4}); board.create('text', [2.95, -0.18, 'x'], {fontSize:13}); board.create('text', [0.08, 1.95, 'y'], {fontSize:13}); board.create('line', [[0.5,-1.5],[0.5,2.1]], {strokeColor:'#94a3b8', strokeWidth:1.2, dash:2}); board.create('functiongraph', [function(x){ return Math.log(2*x-1); }, 0.52, 3.05], {strokeColor:'#2563eb', strokeWidth:2.4}); board.create('functiongraph', [function(x){ return 0.55*x; }, -0.15, 3.05], {strokeColor:'#dc2626', strokeWidth:2}); board.create('point', [1.8, 0.99], {name:'P', size:3, strokeColor:'#7c3aed', fillColor:'#7c3aed'}); board.create('text', [1.55, 1.55, 'y = ln(2x−1)'], {fontSize:11, color:'#2563eb'}); board.create('text', [2.2, 0.85, 'y = mx'], {fontSize:11, color:'#dc2626'}); board.create('text', [0.55, -0.22, '½'], {fontSize:11}); board.create('text', [1, -0.22, '1'], {fontSize:11}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q15bii",
    "topicId": "y12a-exam",
    "c": "5H",
    "t": "Applications of differentiation of log",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that the coordinates of $P$ are $\\left(\\dfrac{2+m}{2m},\\, dfrac{2+m}{2}\\right)$.",
    "answer": "Gradient of tangent at \\(P\\): \\(y'=\\frac{2}{2x-1}=m\\) → \\(2x-1=\\frac{2}{m}\\) → \\(x=\\frac{1}{m}+\\frac{1}{2}=\\frac{2+m}{2m}\\).\n\\(y\\)-coordinate: \\(y=mx=m\\cdot\\frac{2+m}{2m}=\\frac{2+m}{2}\\).\n✓",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Gradient of tangent at \\(P\\): \\(y'=\\frac{2}{2x-1}=m\\) → \\(2x-1=\\frac{2}{m}\\) → \\(x=\\frac{1}{m}+\\frac{1}{2}=\\frac{2+m}{2m}\\).\n\\(y\\)-coordinate: \\(y=mx=m\\cdot\\frac{2+m}{2m}=\\frac{2+m}{2}\\).\n✓",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{2}{2x-1}=m\\Rightarrow x=\\frac{2+m}{2m}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y=m\\cdot\\frac{2+m}{2m}=\\frac{2+m}{2}\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(Gradient of tangent at \\(P\\): \\(y'=\\frac{2}{2x-1}=m\\) → \\(2x-1=\\frac{2}{m}\\) → \\(x=\\frac{1}{m}+\\frac{1}{2}=\\frac{2+m}{2m}\\).\n\\(y\\)-coordinate: \\(y=mx=m\\cdot\\frac{2+m}{2m}=\\frac{2+m}{2}\\).\n✓\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Gradient of tangent at \\(P\\): \\(y'=\\frac{2}{2x-1}=m\\) → \\(2x-1=\\frac{2}{m}\\) → \\(x=\\frac{1}{m}+\\frac{1}{2}=\\frac{2+m}{2m}\\).\n\\(y\\)-coordinate: \\(y=mx=m\\cdot\\frac{2+m}{2m}=\\frac{2+m}{2}\\).\n✓. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Gradient of tangent at \\(P\\): \\(y'=\\frac{2}{2x-1}=m\\) → \\(2x-1=\\frac{2}{m}\\) → \\(x=\\frac{1}{m}+\\frac{1}{2}=\\frac{2+m}{2m}\\).\n\\(y\\)-coordinate: \\(y=mx=m\\cdot\\frac{2+m}{2m}=\\frac{2+m}{2}\\).\n✓\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q15biii",
    "topicId": "y12a-exam",
    "c": "5H",
    "t": "Applications of differentiation of log",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Hence show that $2+m = \\ln\\left(\\dfrac{4}{m^2}\\right)$.",
    "answer": "\\(P\\) lies on \\(y=\\ln(2x-1)\\): \\(\\frac{2+m}{2}=\\ln\\left(2\\cdot\\frac{2+m}{2m}-1\\right)=\\ln\\left(\\frac{2+m}{m}-1\\right)=\\ln\\left(\\frac{2+m-m}{m}\\right)=\\ln\\left(\\frac{2}{m}\\right)\\).\nSo \\(\\frac{2+m}{2}=\\ln\\frac{2}{m}=\\ln2-\\ln m\\).\nThen \\(2+m=2\\ln\\frac{2}{m}=\\ln\\frac{4}{m^2}\\).\n✓",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(P\\) lies on \\(y=\\ln(2x-1)\\): \\(\\frac{2+m}{2}=\\ln\\left(2\\cdot\\frac{2+m}{2m}-1\\right)=\\ln\\left(\\frac{2+m}{m}-1\\right)=\\ln\\left(\\frac{2+m-m}{m}\\right)=\\ln\\left(\\frac{2}{m}\\right)\\).\nSo \\(\\frac{2+m}{2}=\\ln\\frac{2}{m}=\\ln2-\\ln m\\).\nThen \\(2+m=2\\ln\\frac{2}{m}=\\ln\\frac{4}{m^2}\\).\n✓",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{2+m}{2}=\\ln\\left(\\frac{2+m}{m}-1\\right)=\\ln\\frac{2}{m}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2+m=2\\ln\\frac{2}{m}=\\ln\\frac{4}{m^2}\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\(P\\) lies on \\(y=\\ln(2x-1)\\): \\(\\frac{2+m}{2}=\\ln\\left(2\\cdot\\frac{2+m}{2m}-1\\right)=\\ln\\left(\\frac{2+m}{m}-1\\right)=\\ln\\left(\\frac{2+m-m}{m}\\right)=\\ln\\left(\\frac{2}{m}\\right)\\).\nSo \\(\\frac{2+m}{2}=\\ln\\frac{2}{m}=\\ln2-\\ln m\\).\nThen \\(2+m=2\\ln\\frac{2}{m}=\\ln\\frac{4}{m^2}\\).\n✓\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(P\\) lies on \\(y=\\ln(2x-1)\\): \\(\\frac{2+m}{2}=\\ln\\left(2\\cdot\\frac{2+m}{2m}-1\\right)=\\ln\\left(\\frac{2+m}{m}-1\\right)=\\ln\\left(\\frac{2+m-m}{m}\\right)=\\ln\\left(\\frac{2}{m}\\right)\\).\nSo \\(\\frac{2+m}{2}=\\ln\\frac{2}{m}=\\ln2-\\ln m\\).\nThen \\(2+m=2\\ln\\frac{2}{m}=\\ln\\frac{4}{m^2}\\).\n✓. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(P\\) lies on \\(y=\\ln(2x-1)\\): \\(\\frac{2+m}{2}=\\ln\\left(2\\cdot\\frac{2+m}{2m}-1\\right)=\\ln\\left(\\frac{2+m}{m}-1\\right)=\\ln\\left(\\frac{2+m-m}{m}\\right)=\\ln\\left(\\frac{2}{m}\\right)\\).\nSo \\(\\frac{2+m}{2}=\\ln\\frac{2}{m}=\\ln2-\\ln m\\).\nThen \\(2+m=2\\ln\\frac{2}{m}=\\ln\\frac{4}{m^2}\\).\n✓\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q15ci",
    "topicId": "y12a-exam",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given $f(x) = \\begin{cases}2e^{-2x} & x\\geq 0\\\\ 0&\\text{otherwise}\\end{cases}$, find the cumulative distribution function $F(x)$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "F(x) = 1 - e^{-2x}\\) for \\(x\\geq 0\\); \\(F(x)=0\\) for \\(x<0"
    ],
    "a": 3,
    "answer": "3",
    "hint": "$F(x)=\\int_0^x 2e^{-2t}\\,dt$.",
    "solution": "The correct answer is F(x) = 1 - e^{-2x}\\) for \\(x\\geq 0\\); \\(F(x)=0\\) for \\(x<0.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(F(x)=\\int_0^x 2e^{-2t}\\,dt\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\([-e^{-2t}]_0^x=1-e^{-2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "F(x) = 1 - e^{-2x}\\) for \\(x\\geq 0\\); \\(F(x)=0\\) for \\(x<0",
        "graphData": null
      },
      {
        "explanation": "Final answer: F(x) = 1 - e^{-2x}\\) for \\(x\\geq 0\\); \\(F(x)=0\\) for \\(x<0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "F(x) = 1 - e^{-2x}\\) for \\(x\\geq 0\\); \\(F(x)=0\\) for \\(x<0",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q15cii",
    "topicId": "y12a-exam",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Hence find the median of the distribution with CDF $F(x)=1-e^{-2x}$.",
    "opts": [
      "\\(\\frac{1}{2}\\)",
      "\\(-\\dfrac{\\ln 2}{2}\\)",
      "\\(\\dfrac{\\ln 2}{2}\\)",
      "\\(\\frac{2}{\\ln 2}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set $F(m)=\\frac{1}{2}$ and solve for $m$.",
    "solution": "The correct answer is \\(\\dfrac{\\ln 2}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(1-e^{-2m}=\\frac{1}{2}\\Rightarrow e^{-2m}=\\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(-2m=-\\ln2\\Rightarrow m=\\frac{\\ln2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{\\ln 2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{\\ln 2}{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{\\ln 2}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q15ciiv",
    "topicId": "y12a-exam",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A continuous distribution has CDF $F(x)=1-e^{-3x}$ for $x\\geq0$. Find the median.",
    "opts": [
      "\\(\\frac{1}{3}\\)",
      "\\(-\\dfrac{\\ln 2}{3}\\)",
      "\\(\\dfrac{\\ln 2}{3}\\)",
      "\\(\\frac{3}{\\ln 2}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set $F(m)=\\frac{1}{2}$.",
    "solution": "The correct answer is \\(\\dfrac{\\ln 2}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(m=\\frac{\\ln2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{\\ln 2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{\\ln 2}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{\\ln 2}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q16ai",
    "topicId": "y12a-exam",
    "c": "8E",
    "t": "Paying off a loan",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Michelle borrows \\$450\\,000 at 6% p.a. reducible monthly (0.5% per month). Monthly repayment is \\$$M$. Show that after 2 repayments: $A_2 = 450\\,000(1.005)^2 - M(1.005) - M$.",
    "answer": "\\(A_1=450000(1.005)-M\\).\n\\(A_2=A_1(1.005)-M=450000(1.005)^2-M(1.005)-M\\).\n✓",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(A_1=450000(1.005)-M\\).\n\\(A_2=A_1(1.005)-M=450000(1.005)^2-M(1.005)-M\\).\n✓",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A_1=450000(1.005)-M\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A_2=A_1(1.005)-M=450000(1.005)^2-M(1.005)-M\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\(A_1=450000(1.005)-M\\).\n\\(A_2=A_1(1.005)-M=450000(1.005)^2-M(1.005)-M\\).\n✓\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(A_1=450000(1.005)-M\\).\n\\(A_2=A_1(1.005)-M=450000(1.005)^2-M(1.005)-M\\).\n✓. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(A_1=450000(1.005)-M\\).\n\\(A_2=A_1(1.005)-M=450000(1.005)^2-M(1.005)-M\\).\n✓\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q16aii",
    "topicId": "y12a-exam",
    "c": "8E",
    "t": "Paying off a loan",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that $A_n = 450\\,000(1.005)^n - M\\dfrac{(1.005)^n-1}{0.005}$.",
    "answer": "Pattern: \\(A_n=450000(1.005)^n-M[(1.005)^{n-1}+\\cdots+1]\\).\nGP sum \\(=\\dfrac{(1.005)^n-1}{0.005}\\).\nSo \\(A_n=450000(1.005)^n-M\\dfrac{(1.005)^n-1}{0.005}\\).\n✓",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Pattern: \\(A_n=450000(1.005)^n-M[(1.005)^{n-1}+\\cdots+1]\\).\nGP sum \\(=\\dfrac{(1.005)^n-1}{0.005}\\).\nSo \\(A_n=450000(1.005)^n-M\\dfrac{(1.005)^n-1}{0.005}\\).\n✓",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A_n=450000(1.005)^n-M\\sum_{k=0}^{n-1}(1.005)^k\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sum=\\frac{1.005^n-1}{0.005}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(A_n=450000(1.005)^n-M\\cdot\\frac{1.005^n-1}{0.005}\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Pattern: \\(A_n=450000(1.005)^n-M[(1.005)^{n-1}+\\cdots+1]\\).\nGP sum \\(=\\dfrac{(1.005)^n-1}{0.005}\\).\nSo \\(A_n=450000(1.005)^n-M\\dfrac{(1.005)^n-1}{0.005}\\).\n✓. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Pattern: \\(A_n=450000(1.005)^n-M[(1.005)^{n-1}+\\cdots+1]\\).\nGP sum \\(=\\dfrac{(1.005)^n-1}{0.005}\\).\nSo \\(A_n=450000(1.005)^n-M\\dfrac{(1.005)^n-1}{0.005}\\).\n✓\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q16aiii",
    "topicId": "y12a-exam",
    "c": "8E",
    "t": "Paying off a loan",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Calculate the amount of each monthly repayment $M$ for the \\$450\\,000 loan at 0.5% per month over 25 years (300 months).",
    "opts": [
      "\\(M \\approx \\\\)2899.36",
      "\\(M \\approx \\\\)2899.36 + 1",
      "\\(M \\approx \\\\)4899.46",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set $A_{300}=0$ in the formula and solve for $M$.",
    "solution": "The correct answer is \\(M \\approx \\\\)2899.36.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(M=\\frac{450000\\times(1.005)^{300}\\times0.005}{(1.005)^{300}-1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(M\\approx\\$2899.36\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(M \\approx \\\\)2899.36",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(M \\approx \\\\)2899.36. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(M \\approx \\\\)2899.36",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q16aiiiv",
    "topicId": "y12a-exam",
    "c": "8E",
    "t": "Paying off a loan",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A \\$300\\,000 loan is taken at 6% p.a. reducible monthly over 20 years (240 months). Find the monthly repayment $M$.",
    "opts": [
      "\\(M \\approx \\\\)2149.29",
      "\\(M \\approx \\\\)2149.29 + 1",
      "\\(M \\approx \\\\)4149.49",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "$M=\\dfrac{300000\\times(1.005)^{240}\\times0.005}{(1.005)^{240}-1}$.",
    "solution": "The correct answer is \\(M \\approx \\\\)2149.29.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(M=\\frac{300000\\times(1.005)^{240}\\times0.005}{(1.005)^{240}-1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(M\\approx2149.29\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(M \\approx \\\\)2149.29",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(M \\approx \\\\)2149.29. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(M \\approx \\\\)2149.29",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q16bi",
    "topicId": "y12a-exam",
    "c": "6C",
    "t": "Applications of differentiation of trig",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "An isosceles triangle $\\triangle ABC$ is inscribed in a unit circle centred at $O$. $M$ is the midpoint of $BC$, $\\angle BAC=\\theta$ and $\\angle BOM=\\theta$. Show that the area of $\\triangle ABC$ is $A=\\sin\\theta(1+\\cos\\theta)$.",
    "answer": "From \\(\\triangle OBM\\): \\(\\sin\\theta=BM\\) (radius=1), so \\(BC=2\\sin\\theta\\).\n\\(\\cos\\theta=OM\\).\nHeight \\(AM=AO+OM=1+\\cos\\theta\\).\nArea \\(=\\frac{1}{2}\\times BC\\times AM=\\frac{1}{2}\\times2\\sin\\theta\\times(1+\\cos\\theta)=\\sin\\theta(1+\\cos\\theta)\\).\n✓",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "From \\(\\triangle OBM\\): \\(\\sin\\theta=BM\\) (radius=1), so \\(BC=2\\sin\\theta\\).\n\\(\\cos\\theta=OM\\).\nHeight \\(AM=AO+OM=1+\\cos\\theta\\).\nArea \\(=\\frac{1}{2}\\times BC\\times AM=\\frac{1}{2}\\times2\\sin\\theta\\times(1+\\cos\\theta)=\\sin\\theta(1+\\cos\\theta)\\).\n✓",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(BC=2\\sin\\theta, quad AM=1+\\cos\\theta\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{1}{2}\\times2\\sin\\theta\\times(1+\\cos\\theta)=\\sin\\theta(1+\\cos\\theta)\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(From \\(\\triangle OBM\\): \\(\\sin\\theta=BM\\) (radius=1), so \\(BC=2\\sin\\theta\\).\n\\(\\cos\\theta=OM\\).\nHeight \\(AM=AO+OM=1+\\cos\\theta\\).\nArea \\(=\\frac{1}{2}\\times BC\\times AM=\\frac{1}{2}\\times2\\sin\\theta\\times(1+\\cos\\theta)=\\sin\\theta(1+\\cos\\theta)\\).\n✓\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: From \\(\\triangle OBM\\): \\(\\sin\\theta=BM\\) (radius=1), so \\(BC=2\\sin\\theta\\).\n\\(\\cos\\theta=OM\\).\nHeight \\(AM=AO+OM=1+\\cos\\theta\\).\nArea \\(=\\frac{1}{2}\\times BC\\times AM=\\frac{1}{2}\\times2\\sin\\theta\\times(1+\\cos\\theta)=\\sin\\theta(1+\\cos\\theta)\\).\n✓. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(From \\(\\triangle OBM\\): \\(\\sin\\theta=BM\\) (radius=1), so \\(BC=2\\sin\\theta\\).\n\\(\\cos\\theta=OM\\).\nHeight \\(AM=AO+OM=1+\\cos\\theta\\).\nArea \\(=\\frac{1}{2}\\times BC\\times AM=\\frac{1}{2}\\times2\\sin\\theta\\times(1+\\cos\\theta)=\\sin\\theta(1+\\cos\\theta)\\).\n✓\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q16bii",
    "topicId": "y12a-exam",
    "c": "6C",
    "t": "Applications of differentiation of trig",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Hence prove that the area of isosceles triangle $\\triangle ABC$ is maximum when it is equilateral.",
    "answer": "\\(A'=\\cos\\theta(1+\\cos\\theta)+\\sin\\theta(-\\sin\\theta)=\\cos\\theta+\\cos^2\\theta-\\sin^2\\theta=\\cos\\theta+\\cos2\\theta\\).\nSet \\(A'=0\\): \\(\\cos\\theta+2\\cos^2\\theta-1=0\\Rightarrow(2\\cos\\theta-1)(\\cos\\theta+1)=0\\Rightarrow\\cos\\theta=\\frac{1}{2}\\Rightarrow\\theta=\\pi/3\\).\nAt \\(\\theta=\\pi/3\\): \\(A''<0\\) (maximum).\nWhen \\(\\theta=\\pi/3\\): \\(\\angle BAC=60°\\) and since \\(AB=AC\\) (isosceles), \\(\\angle ABC=\\angle ACB=60°\\), so \\(\\triangle ABC\\) is equilateral.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(A'=\\cos\\theta(1+\\cos\\theta)+\\sin\\theta(-\\sin\\theta)=\\cos\\theta+\\cos^2\\theta-\\sin^2\\theta=\\cos\\theta+\\cos2\\theta\\).\nSet \\(A'=0\\): \\(\\cos\\theta+2\\cos^2\\theta-1=0\\Rightarrow(2\\cos\\theta-1)(\\cos\\theta+1)=0\\Rightarrow\\cos\\theta=\\frac{1}{2}\\Rightarrow\\theta=\\pi/3\\).\nAt \\(\\theta=\\pi/3\\): \\(A''<0\\) (maximum).\nWhen \\(\\theta=\\pi/3\\): \\(\\angle BAC=60°\\) and since \\(AB=AC\\) (isosceles), \\(\\angle ABC=\\angle ACB=60°\\), so \\(\\triangle ABC\\) is equilateral.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A'=\\cos\\theta+\\cos^2\\theta-\\sin^2\\theta\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\cos\\theta+\\cos2\\theta=0\\Rightarrow(2\\cos\\theta-1)(\\cos\\theta+1)=0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta=\\frac{\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(A'=\\cos\\theta(1+\\cos\\theta)+\\sin\\theta(-\\sin\\theta)=\\cos\\theta+\\cos^2\\theta-\\sin^2\\theta=\\cos\\theta+\\cos2\\theta\\).\nSet \\(A'=0\\): \\(\\cos\\theta+2\\cos^2\\theta-1=0\\Rightarrow(2\\cos\\theta-1)(\\cos\\theta+1)=0\\Rightarrow\\cos\\theta=\\frac{1}{2}\\Rightarrow\\theta=\\pi/3\\).\nAt \\(\\theta=\\pi/3\\): \\(A''<0\\) (maximum).\nWhen \\(\\theta=\\pi/3\\): \\(\\angle BAC=60°\\) and since \\(AB=AC\\) (isosceles), \\(\\angle ABC=\\angle ACB=60°\\), so \\(\\triangle ABC\\) is equilateral.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(A'=\\cos\\theta(1+\\cos\\theta)+\\sin\\theta(-\\sin\\theta)=\\cos\\theta+\\cos^2\\theta-\\sin^2\\theta=\\cos\\theta+\\cos2\\theta\\).\nSet \\(A'=0\\): \\(\\cos\\theta+2\\cos^2\\theta-1=0\\Rightarrow(2\\cos\\theta-1)(\\cos\\theta+1)=0\\Rightarrow\\cos\\theta=\\frac{1}{2}\\Rightarrow\\theta=\\pi/3\\).\nAt \\(\\theta=\\pi/3\\): \\(A''<0\\) (maximum).\nWhen \\(\\theta=\\pi/3\\): \\(\\angle BAC=60°\\) and since \\(AB=AC\\) (isosceles), \\(\\angle ABC=\\angle ACB=60°\\), so \\(\\triangle ABC\\) is equilateral.\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q16ci",
    "topicId": "y12a-exam",
    "c": "4G",
    "t": "Areas of compound regions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The graphs $f(x)=x^2e^{kx}$ and $g(x)=-\\dfrac{2xe^{kx}}{k}$ bound a region with the line $x=2$. Write a definite integral for the area $A$.",
    "opts": [
      "\\(A = \\displaystyle\\int_0^2 \\left(x^2e^{-(kx)} + \\dfrac{2xe^{kx}}{k}\\right)dx\\)",
      "\\(A = \\displaystyle\\int_0^2 \\left(x^2e^{kx+1} + \\dfrac{2xe^{kx}}{k}\\right)dx\\)",
      "\\(A = \\displaystyle\\int_0^2 \\left(x^2e^{kx} + \\dfrac{2xe^{kx}}{k}\\right)dx\\)",
      "\\(A = \\displaystyle\\int_0^2 \\left(x^2e^{kx} - \\dfrac{2xe^{kx}}{k}\\right)dx\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "From the graph, $f(x)>g(x)$ for $0<x\\leq2$. $A=\\int_0^2[f(x)-g(x)]\\,dx$.",
    "solution": "The correct answer is \\(A = \\displaystyle\\int_0^2 \\left(x^2e^{kx} + \\dfrac{2xe^{kx}}{k}\\right)dx\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A=\\int_0^2[f(x)-g(x)]\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A=\\int_0^2\\left(x^2e^{kx}+\\frac{2xe^{kx}}{k}\\right)dx\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(A = \\displaystyle\\int_0^2 \\left(x^2e^{kx} + \\dfrac{2xe^{kx}}{k}\\right)dx\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: A = \\displaystyle\\int_0^2 \\left(x^2e^{kx} + \\dfrac{2xe^{kx}}{k}\\right)dx. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(A = \\displaystyle\\int_0^2 \\left(x^2e^{kx} + \\dfrac{2xe^{kx}}{k}\\right)dx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q16cii",
    "topicId": "y12a-exam",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "For \\(f(x)=x^{2}e^{kx}\\), show that \\(f'(x)=xe^{kx}(kx+2)\\).",
    "answer": "Product rule: \\(f'=2xe^{kx}+x^{2}\\cdot ke^{kx}=xe^{kx}(2+kx)=xe^{kx}(kx+2)\\).\n✓",
    "hint": "Use the product rule with \\(u=x^{2}\\) and \\(v=e^{kx}\\). Then factor \\(xe^{kx}\\) from both terms.",
    "solution": "Product rule: \\(f'=2xe^{kx}+x^{2}\\cdot ke^{kx}=xe^{kx}(2+kx)=xe^{kx}(kx+2)\\).\n✓",
    "solutionSteps": [
      {
        "explanation": "The function is a product of two factors of \\(x\\): \\(f(x)=x^{2}\\cdot e^{kx}\\). To differentiate a product, use the product rule \\((uv)'=u'v+uv'\\). Identify the two factors carefully.",
        "workingOut": "\\(u=x^{2},\\quad v=e^{kx}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the first factor with the power rule: \\(\\dfrac{d}{dx}(x^{2})=2x\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(u'=2x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the second factor with the chain rule for exponentials: \\(\\dfrac{d}{dx}e^{kx}=e^{kx}\\cdot k=ke^{kx}\\). (The constant \\(k\\) is the derivative of the exponent \\(kx\\).).",
        "workingOut": "\\(v'=ke^{kx}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the product rule: \\(f'=u'v+uv'=(2x)\\cdot e^{kx}+(x^{2})\\cdot(ke^{kx})\\). Write this as two separate terms before factorising.",
        "workingOut": "\\(f'=2xe^{kx}+kx^{2}e^{kx}\\)",
        "graphData": null
      },
      {
        "explanation": "Both terms contain a common factor of \\(xe^{kx}\\). Factor it out: first term \\(2xe^{kx}=xe^{kx}\\cdot 2\\); second term \\(kx^{2}e^{kx}=xe^{kx}\\cdot(kx)\\).",
        "workingOut": "\\(f'=xe^{kx}\\bigl(2+kx\\bigr)\\)",
        "graphData": null
      },
      {
        "explanation": "Rewrite the bracket as \\(kx+2\\) (addition is commutative). Therefore \\(f'(x)=xe^{kx}(kx+2)\\), which is exactly what was required to show.",
        "workingOut": "\\(f'(x)=xe^{kx}(kx+2)\\quad\\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "baulko2020-q16ciii",
    "topicId": "y12a-exam",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Using the results of (i) and (ii), find the value of \\(k\\) such that \\(A=\\dfrac{16}{k}\\).",
    "opts": [
      "\\(k=2\\)",
      "\\(k=\\ln 4\\)",
      "\\(k=\\dfrac{1}{2}\\)",
      "\\(k=\\ln 2\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "From (i): $A=\\frac{1}{k}\\int_0^2 xe^{kx}(kx+2)\\,dx = \\frac{1}{k}\\int_0^2 f'(x)\\,dx = \\frac{1}{k}[f(x)]_0^2$. Set $=\\frac{16}{k}$.",
    "solution": "From (i)–(ii): \\(A=\\dfrac{1}{k}[x^{2}e^{kx}]_{0}^{2}=\\dfrac{4e^{2k}}{k}\\). Set \\(\\dfrac{4e^{2k}}{k}=\\dfrac{16}{k}\\Rightarrow 4e^{2k}=16\\Rightarrow e^{2k}=4\\Rightarrow k=\\ln 2\\).",
    "solutionSteps": [
      {
        "explanation": "From earlier parts, the integrand of \\(A\\) can be written in terms of \\(f'(x)\\) where \\(f(x)=x^{2}e^{kx}\\): \\(A=\\dfrac{1}{k}\\displaystyle\\int_{0}^{2}f'(x)\\,dx\\).",
        "workingOut": "\\(A=\\dfrac{1}{k}\\int_{0}^{2}f'(x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "By the fundamental theorem of calculus: \\(\\displaystyle\\int_{0}^{2}f'(x)\\,dx=[f(x)]_{0}^{2}=[x^{2}e^{kx}]_{0}^{2}\\).",
        "workingOut": "\\([x^{2}e^{kx}]_{0}^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: at \\(x=2\\), \\(f(2)=4e^{2k}\\); at \\(x=0\\), \\(f(0)=0\\). So \\(A=\\dfrac{4e^{2k}}{k}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(A=\\dfrac{4e^{2k}}{k}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply both sides by \\(k\\) (assuming \\(k\\neq 0\\)): \\(4e^{2k}=16\\Rightarrow e^{2k}=4\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(e^{2k}=4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q16ciiiiv",
    "topicId": "y12a-exam",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Given \\(\\displaystyle\\int_{0}^{1} xe^{kx}\\,dx=\\dfrac{e^{k}-1}{k^{2}}-\\dfrac{1}{k}\\) (by parts), find the exact value when \\(k=1\\).",
    "opts": [
      "\\(e-2\\)",
      "\\(e-1\\)",
      "\\(e\\)",
      "\\(2e-1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $k=1$ into the formula.",
    "solution": "When \\(k=1\\): \\(\\dfrac{e^{1}-1}{1^{2}}-\\dfrac{1}{1}=e-1-1=e-2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Baulkham Hills 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(k=1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\dfrac{e-1}{1}=e-1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{1}{1}=1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: e-2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(e-2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
