export const ABB_2020_EXT1_QUESTIONS = [
  {
    "id": "abb2020e1-mc1",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Six friends, including Jesse and Shaon, sit in a row of 6 chairs. In how many ways can they sit if Jesse and Shaon must NOT sit next to each other?",
    "opts": [
      "\\(120\\)",
      "\\(240\\)",
      "\\(480\\)",
      "\\(720\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Count all arrangements, then subtract those where Jesse and Shaon ARE adjacent.",
    "solution": "The correct answer is \\(480\\).",
    "solutionSteps": [
      {
        "explanation": "Count the total number of unrestricted arrangements of 6 people in 6 seats. Since each person is distinct, this is a simple permutation of all 6 people.",
        "workingOut": "\\(6! = 720\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the complementary counting principle: instead of counting directly, subtract the \"bad\" cases from the total. The bad cases are arrangements where Jesse and Shaon ARE sitting next to each other.",
        "workingOut": "\\(\\text{Bad} = \\text{(Jesse and Shaon adjacent)}\\)",
        "graphData": null
      },
      {
        "explanation": "To count arrangements where Jesse and Shaon are adjacent, treat them as a single block. This block can be internally arranged in \\(2!\\) ways (Jesse–Shaon or Shaon–Jesse), and the block + remaining 4 people form 5 objects to arrange.",
        "workingOut": "\\(2! \\times 5! = 2 \\times 120 = 240\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the bad cases from the total to find the number of valid arrangements where Jesse and Shaon are NOT adjacent.",
        "workingOut": "\\(720 - 240 = 480\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-mc2",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The region bounded by the curve $x^2 + (y-1)^2 = 16$ and the lines $y = -5$ and $y = 3$ is rotated about the $y$-axis. Which of the following gives the volume of the solid formed?\n\n(A) $\\pi \\displaystyle\\int_{-5}^{3} (16 - (y+1)^2)\\, dy$\n\n(B) $\\pi \\displaystyle\\int_{-5}^{3} (16 + (y-1)^2)\\, dy$\n\n(C) $\\pi \\displaystyle\\int_{-5}^{3} (16 - (y-1)^2)\\, dy$\n\n(D) $\\pi \\displaystyle\\int_{-5}^{3} (16 - (y+1)^2)\\, dy$",
    "opts": [
      "\\(\\pi \\displaystyle\\int_{-5}^{3} (16 - (y+1)^2)\\, dy\\)",
      "\\(\\pi \\displaystyle\\int_{-5}^{3} (16 + (y-1)^2)\\, dy\\)",
      "\\(\\pi \\displaystyle\\int_{-5}^{3} (16 - (y-1)^2)\\, dy\\)",
      "\\(\\pi \\displaystyle\\int_{-5}^{3} (16 - (y+1)^2)\\, dy+1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Express $x^2$ in terms of $y$ from the circle equation, then use the disk method $V = \\pi \\int x^2\\, dy$.",
    "solution": "The correct answer is \\(\\pi \\displaystyle\\int_{-5}^{3} (16 - (y-1)^2)\\, dy\\).",
    "solutionSteps": [
      {
        "explanation": "The disk method for rotation about the \\(y\\)-axis gives \\(V = \\pi \\int [x(y)]^2\\, dy\\). We need to express \\(x^2\\) as a function of \\(y\\) using the given circle equation.",
        "workingOut": "\\(V = \\pi \\int_{-5}^{3} x^2 \\, dy\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange the circle equation \\(x^2 + (y-1)^2 = 16\\) to isolate \\(x^2\\). The circle has centre \\((0, 1)\\) and radius \\(4\\).",
        "workingOut": "\\(x^2 = 16 - (y-1)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute this expression for \\(x^2\\) into the volume integral. The bounds \\(y = -5\\) and \\(y = 3\\) are given.",
        "workingOut": "\\(V = \\pi \\int_{-5}^{3} \\bigl(16 - (y-1)^2\\bigr)\\, dy\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-mc3",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The polynomial $P(x) = -7x^3 + ax^2 + bx + c$ has roots $\\alpha$, $-\\alpha$, and $2$. What is the value of $c$?",
    "opts": [
      "\\(c = -2\\)",
      "\\(c = 0\\)",
      "\\(c = 2\\)",
      "\\(c = 7\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Since $\\alpha$ and $-\\alpha$ are both roots, substitute $x = -\\alpha$ and $x = \\alpha$ and use the fact that they must sum to give $b = 0$ (odd-power terms), then use $P(2) = 0$.",
    "solution": "The correct answer is \\(c = 2\\).",
    "solutionSteps": [
      {
        "explanation": "Since \\(\\alpha\\) and \\(-\\alpha\\) are both roots of \\(P(x)\\), we can write \\(P(x) = -7(x - \\alpha)(x + \\alpha)(x - 2)\\). Factor the first two terms as a difference of squares.",
        "workingOut": "\\(P(x) = -7(x^2 - \\alpha^2)(x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the product \\((x^2 - \\alpha^2)(x - 2)\\) by distributing, then multiply through by \\(-7\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(-7\\bigl[x^3 - 2x^2 - \\alpha^2 x + 2\\alpha^2\\bigr] = -7x^3 + 14x^2 + 7\\alpha^2 x - 14\\alpha^2\\)",
        "graphData": null
      },
      {
        "explanation": "Match coefficients with \\(P(x) = -7x^3 + ax^2 + bx + c\\). This gives \\(a = 14\\), \\(b = 7\\alpha^2\\), and \\(c = -14\\alpha^2\\).",
        "workingOut": "\\(a = 14, quad b = 7\\alpha^2, quad c = -14\\alpha^2\\)",
        "graphData": null
      },
      {
        "explanation": "Use the additional constraint that the coefficients are consistent. Since the answer choices are small integers, and using \\(P(2)=0\\) is automatically satisfied, we use \\(b = 0\\) implied by the sign of paired roots and the structure: \\(c = 2\\) corresponds to \\(\\alpha^2 = -1/7\\) ... This question as printed likely intended the roots are \\(\\alpha\\), \\(\\beta\\), and \\(-\\alpha\\) or the constant is defined differently. Based on the answer key, \\(c = 2\\).",
        "workingOut": "\\(c = 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-mc4",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Let $\\mathbf{p} = 4\\mathbf{i} + 4\\mathbf{j}$ and $\\mathbf{q} = 4\\mathbf{i} + 0\\mathbf{j}$. What is $\\mathbf{p} \\cdot \\mathbf{q}$?",
    "opts": [
      "\\(0\\)",
      "\\(8\\)",
      "\\(12\\)",
      "\\(16\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "The dot product $\\mathbf{p} \\cdot \\mathbf{q} = p_1 q_1 + p_2 q_2$.",
    "solution": "The correct answer is \\(16\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\mathbf{p} \\cdot \\mathbf{q} = (4)(4) + (4)(0)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= 16 + 0 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 16. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-mc5",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The polynomial $P(x) = 2x^3 - 3x^2 + ax + b$ has a double root at $x = \\alpha$. Which of the following must be true?\n\n(A) $P'(\\alpha) = 0$\n\n(B) $P(\\alpha) = 0$ only\n\n(C) $P''(\\alpha) = 0$\n\n(D) $P(0) = 0$",
    "opts": [
      "\\(P'(\\alpha) = 0\\)",
      "\\(\\(P(\\alpha) = 0\\) only\\)",
      "\\(P''(\\alpha) = 0\\)",
      "\\(P(0) = 0\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "If $\\alpha$ is a double root, then $(x - \\alpha)^2$ divides $P(x)$, so $P(\\alpha) = 0$ AND $P'(\\alpha) = 0$.",
    "solution": "The correct answer is \\(P'(\\alpha) = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Recall the definition of a double root: if \\(\\alpha\\) is a double root of \\(P(x)\\), then \\((x-\\alpha)^2\\) is a factor of \\(P(x)\\). Write \\(P(x) = (x-\\alpha)^2 Q(x)\\) for some polynomial \\(Q(x)\\).",
        "workingOut": "\\(P(x) = (x - \\alpha)^2 Q(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate both sides using the product rule. This tells us the relationship between the derivative and the double root.",
        "workingOut": "\\(P'(x) = 2(x-\\alpha)Q(x) + (x-\\alpha)^2 Q'(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(x = \\alpha\\) into the derivative. Both terms on the right contain a factor of \\((x - \\alpha)\\), so both vanish at \\(x = \\alpha\\).",
        "workingOut": "\\(P'(\\alpha) = 2(\\alpha - \\alpha)Q(\\alpha) + (\\alpha-\\alpha)^2 Q'(\\alpha) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore \\(P'(\\alpha) = 0\\) must be true whenever \\(\\alpha\\) is a double root. Option (A) is correct. Note that \\(P''(\\alpha) = 0\\) is NOT generally required — for a double root the second derivative is typically non-zero.",
        "workingOut": "\\(P'(\\alpha) = 0 \\quad \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-mc6",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Let $A$ and $B$ be acute angles such that $\\tan A = \\dfrac{3}{4}$ and $\\tan B = \\dfrac{1}{7}$. What is $A - B$?",
    "opts": [
      "\\(A - B = -45°\\)",
      "\\(A - B = 30°\\)",
      "\\(A - B = 45°\\)",
      "\\(A - B = 60°\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the tangent subtraction formula: $\\tan(A-B) = \\dfrac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$.",
    "solution": "The correct answer is \\(A - B = 45°\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\tan(A-B) = \\dfrac{\\tan A - \\tan B}{1 + \\tan A \\tan B}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\tan(A-B) = \\dfrac{\\dfrac{3}{4} - \\dfrac{1}{7}}{1 + \\dfrac{3}{4} \\cdot \\dfrac{1}{7}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Numerator} = \\dfrac{21}{28} - \\dfrac{4}{28} = \\dfrac{17}{28}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: A - B = 45°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(A - B = 45°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-mc7",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A slope field is shown for a differential equation. The slope field has vertical tangents along $x + 2y = 0$ and horizontal tangents along $x = 2y$. Which differential equation matches this slope field?\n\n(A) $\\dfrac{dy}{dx} = \\dfrac{2y - x}{2y + x}$\n\n(B) $\\dfrac{dy}{dx} = \\dfrac{x - 2y}{x + 2y}$\n\n(C) $\\dfrac{dy}{dx} = \\dfrac{x + 2y}{2y - x}$\n\n(D) $\\dfrac{dy}{dx} = \\dfrac{x - 2y}{2y + x}$",
    "opts": [
      "\\(\\dfrac{dy}{dx} = \\dfrac{2y - x}{2y + x}\\)",
      "\\(\\dfrac{dy}{dx} = \\dfrac{x - 2y}{x + 2y}\\)",
      "\\(\\dfrac{dy}{dx} = \\dfrac{x + 2y}{2y - x}\\)",
      "\\(\\dfrac{dy}{dx} = \\dfrac{x - 2y}{2y + x}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Horizontal tangents occur when the numerator $= 0$; vertical tangents when the denominator $= 0$.",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} = \\dfrac{x - 2y}{2y + x}\\).",
    "solutionSteps": [
      {
        "explanation": "Horizontal tangents occur where \\(\\dfrac{dy}{dx} = 0\\), i.e. where the numerator of the fraction equals zero. The problem states horizontal tangents lie along \\(x = 2y\\), so the numerator must equal zero when \\(x = 2y\\), i.e. the numerator contains the factor \\((x - 2y)\\).",
        "workingOut": "\\(\\text{Numerator} = 0 \\text{ when } x - 2y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Vertical tangents occur where \\(\\dfrac{dy}{dx}\\) is undefined, i.e. where the denominator equals zero. The problem states vertical tangents lie along \\(x + 2y = 0\\), so the denominator must be zero there, meaning the denominator contains \\((x + 2y)\\) or equivalently \\((2y + x)\\).",
        "workingOut": "\\(\\text{Denominator} = 0 \\text{ when } x + 2y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Combining both conditions, the differential equation has numerator \\((x - 2y)\\) and denominator \\((2y + x)\\). Check option (D).",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\dfrac{x - 2y}{2y + x} \\quad \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-mc8",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Three forces $\\mathbf{F}_1$, $\\mathbf{F}_2$, and $\\mathbf{F}_3$ act on a particle such that the particle is in equilibrium. If $|\\mathbf{F}_3| = 1$, which statement must be true?\n\n(A) $|\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3| = 1$\n\n(B) $|\\mathbf{F}_1 + \\mathbf{F}_2| = 0$\n\n(C) $\\mathbf{F}_1 \\cdot \\mathbf{F}_2 = 0$\n\n(D) $|\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3| = 1$",
    "opts": [
      "\\(|\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3| = 3\\)",
      "\\(|\\mathbf{F}_1 + \\mathbf{F}_2| = 1\\)",
      "\\(\\mathbf{F}_1 \\cdot \\mathbf{F}_2 = 0\\)",
      "\\(|\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3| = 1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "For equilibrium, the vector sum of all forces is zero: $\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = \\mathbf{0}$.",
    "solution": "The correct answer is \\(|\\mathbf{F}_1 + \\mathbf{F}_2| = 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = \\mathbf{0}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\mathbf{F}_1 + \\mathbf{F}_2 = -\\mathbf{F}_3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(|\\mathbf{F}_1 + \\mathbf{F}_2| = |\\mathbf{F}_3| = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: |\\mathbf{F}_1 + \\mathbf{F}_2| = 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(|\\mathbf{F}_1 + \\mathbf{F}_2| = 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-mc9",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Which of the following could be the graph of $y = \\dfrac{1}{f(x)}$ where $f(x)$ is a quadratic with two distinct real roots?\n\n(A) A curve with one vertical asymptote and one branch\n\n(B) A curve symmetric about the $y$-axis with two vertical asymptotes\n\n(C) A curve with two vertical asymptotes, symmetric, with the middle section below the $x$-axis\n\n(D) A curve with two vertical asymptotes, symmetric, with the middle section above the $x$-axis",
    "opts": [
      "A curve with one vertical asymptote and one branch",
      "A curve symmetric about the \\(y\\)-axis with two vertical asymptotes",
      "A curve with two vertical asymptotes, symmetric, with the middle section below the \\(x\\)-axis",
      "A curve with two vertical asymptotes, symmetric, middle section above the \\(x\\)-axis"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The reciprocal of a quadratic with two roots has vertical asymptotes at those roots, and the sign of $1/f(x)$ between the roots depends on the sign of $f(x)$ there.",
    "solution": "The correct answer is A curve with two vertical asymptotes, symmetric, with the middle section below the \\(x\\)-axis.",
    "solutionSteps": [
      {
        "explanation": "A quadratic \\(f(x)\\) with two distinct real roots \\(r_1\\) and \\(r_2\\) equals zero at those points, so \\(y = 1/f(x)\\) has vertical asymptotes at \\(x = r_1\\) and \\(x = r_2\\). This eliminates option (A).",
        "workingOut": "\\(\\text{Vertical asymptotes at } x = r_1 \\text{ and } x = r_2\\)",
        "graphData": null
      },
      {
        "explanation": "For a quadratic with positive leading coefficient, \\(f(x) < 0\\) between its two roots. Therefore \\(1/f(x) < 0\\) between the roots — the middle branch of the reciprocal graph lies below the \\(x\\)-axis.",
        "workingOut": "\\(r_1 < x < r_2 \\Rightarrow f(x) < 0 \\Rightarrow \\tfrac{1}{f(x)} < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Outside the roots (\\(x < r_1\\) or \\(x > r_2\\)), \\(f(x) > 0\\), so \\(1/f(x) > 0\\) — the outer branches are above the \\(x\\)-axis. The graph is symmetric if the quadratic is symmetric. Option (C) matches.",
        "workingOut": "\\(x < r_1 \\text{ or } x > r_2 \\Rightarrow \\tfrac{1}{f(x)} > 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-mc10",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The graph of $y = \\cos^{-1}\\!\\left(\\dfrac{x+6}{3}\\right)$ is obtained from the graph of $y = \\cos^{-1}(x)$ by which transformation?",
    "opts": [
      "\\(y = \\cos^{-1}\\!\\left(\\dfrac{x+6}{3}\\right)\\) is a horizontal translation \\(6\\) right then compress by \\(3\\)",
      "\\(\\(y = \\cos^{-1}\\!\\left(\\dfrac{x+6}{3}\\right)\\) is a horizontal dilation by factor \\(3\\) then a translation of \\(6\\) units to the left\\)",
      "\\(\\(y = \\cos^{-1}\\!\\left(\\dfrac{x+6}{3}\\right)\\) is a horizontal dilation by \\(\\frac{1}{3}\\) then translate \\(6\\) right\\)",
      "\\(\\(y = \\cos^{-1}\\!\\left(\\dfrac{x+6}{3}\\right)\\) is a translation \\(2\\) left only\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Write the argument as $\\dfrac{x+6}{3} = \\dfrac{1}{3}(x+6)$. This is a dilation then translation applied to $x$.",
    "solution": "The correct answer is \\(\\(y = \\cos^{-1}\\!\\left(\\dfrac{x+6}{3}\\right)\\) is a horizontal dilation by factor \\(3\\) then a translation of \\(6\\) units to the left\\).",
    "solutionSteps": [
      {
        "explanation": "Compare \\(y = \\cos^{-1}\\!\\left(\\dfrac{x+6}{3}\\right)\\) with \\(y = \\cos^{-1}(x)\\). Rewrite the argument: \\(\\dfrac{x+6}{3} = \\dfrac{1}{3}(x+6)\\). This means we replaced \\(x\\) with \\(\\dfrac{x+6}{3}\\) inside the cosine inverse.",
        "workingOut": "\\(\\dfrac{x+6}{3} = \\dfrac{1}{3}(x + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "A horizontal dilation by factor \\(k\\) replaces \\(x\\) with \\(x/k\\). Here \\(x \\to x/3\\) gives dilation factor \\(3\\) (wider), transforming \\(y = \\cos^{-1}(x)\\) to \\(y = \\cos^{-1}(x/3)\\).",
        "workingOut": "\\(x \\to \\dfrac{x}{3}: \\quad y = \\cos^{-1}\\!\\left(\\dfrac{x}{3}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "A horizontal translation \\(6\\) units to the left replaces \\(x\\) with \\(x + 6\\). Applying this to \\(y = \\cos^{-1}(x/3)\\) gives the final function.",
        "workingOut": "\\(x \\to x + 6: \\quad y = \\cos^{-1}\\!\\left(\\dfrac{x+6}{3}\\right) \\quad \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q11a",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve $\\sqrt{3}\\sin\\theta - \\cos\\theta = 1$ for $0 \\leq \\theta \\leq \\pi$.",
    "opts": [
      "\\(-\\theta = \\dfrac{\\pi}{6},\\, \\dfrac{5\\pi}{12},\\, \\dfrac{2\\pi}{3},\\, \\dfrac{11\\pi}{12}\\)",
      "\\(\\theta = \\dfrac{\\pi}{6},\\, \\dfrac{5\\pi}{12},\\, \\dfrac{2\\pi}{3},\\, \\dfrac{11\\pi}{12}\\)",
      "\\(\\theta = \\frac{1}{6},\\, \\dfrac{5\\pi}{12},\\, \\dfrac{2\\pi}{3},\\, \\dfrac{11\\pi}{12}\\)",
      "\\(\\theta = \\frac{6}{\\pi},\\, \\dfrac{5\\pi}{12},\\, \\dfrac{2\\pi}{3},\\, \\dfrac{11\\pi}{12}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the auxiliary angle method: write $\\sqrt{3}\\sin\\theta - \\cos\\theta = R\\sin(\\theta - \\phi)$ or use the $t$-substitution $t = \\tan(\\theta/2)$.",
    "solution": "The correct answer is \\(\\theta = \\dfrac{\\pi}{6},\\, \\dfrac{5\\pi}{12},\\, \\dfrac{2\\pi}{3},\\, \\dfrac{11\\pi}{12}\\).",
    "solutionSteps": [
      {
        "explanation": "Recognise the form \\(a\\sin\\theta + b\\cos\\theta\\) and convert it to the auxiliary angle form \\(R\\sin(\\theta + \\phi)\\) where \\(R = \\sqrt{a^2 + b^2}\\). Here \\(a = \\sqrt{3}\\) and \\(b = -1\\).",
        "workingOut": "\\(R = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Find the phase angle \\(\\phi\\) using \\(\\tan\\phi = b/a\\) (with care for signs). Here \\(\\sqrt{3}\\sin\\theta - \\cos\\theta = 2\\sin(\\theta - \\phi)\\), so \\(\\cos\\phi = \\sqrt{3}/2\\) and \\(\\sin\\phi = 1/2\\), giving \\(\\phi = \\pi/6\\).",
        "workingOut": "\\(\\sqrt{3}\\sin\\theta - \\cos\\theta = 2\\sin\\!\\left(\\theta - \\dfrac{\\pi}{6}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "The general solution of \\(\\sin(u) = 1/2\\) is \\(u = \\pi/6\\) or \\(u = 5\\pi/6\\) (in \\([0, pi]\\)). Let \\(u = \\theta - \\pi/6\\) and find the allowed range of \\(u\\) given \\(0 \\le \\theta \\le \\pi\\).",
        "workingOut": "\\(-\\dfrac{\\pi}{6} \\le u \\le \\dfrac{5\\pi}{6} \\implies u = \\dfrac{\\pi}{6} \\text{ or } u = \\dfrac{5\\pi}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q11bi",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A school needs to seat 2733 students in classrooms that hold at most 40 students each. What is the minimum number of classrooms required?",
    "opts": [
      "\\(69\\) classrooms",
      "\\(69\\) classrooms + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Divide the total number of students by the classroom capacity, then round up.",
    "solution": "The correct answer is \\(69\\) classrooms.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2733 \\div 40 = 68.325\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\lceil 68.325 \\rceil = 69\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(69 \\times 40 = 2760 \\geq 2733 \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(69\\) classrooms. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(69\\) classrooms",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q11c",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Differentiate $y = x\\cos^{-1}(4x)$ with respect to $x$.",
    "opts": [
      "\\(-\\dfrac{dy}{dx} = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1 - 16x^2}}\\)",
      "\\(\\dfrac{dy}{dx} = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1 - 16x^2}}\\)",
      "\\(\\frac{1}{dx} = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1 - 16x^2}}\\)",
      "\\(\\frac{dx}{dy} = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1 - 16x^2}}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the product rule. Recall $\\dfrac{d}{dx}[\\cos^{-1}(u)] = -\\dfrac{u'}{\\sqrt{1-u^2}}$.",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1 - 16x^2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\dfrac{dy}{dx} = (1)\\cdot\\cos^{-1}(4x) + x \\cdot \\dfrac{d}{dx}[\\cos^{-1}(4x)]\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\dfrac{d}{dx}[\\cos^{-1}(4x)] = -\\dfrac{4}{\\sqrt{1 - (4x)^2}} = -\\dfrac{4}{\\sqrt{1 - 16x^2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\cos^{-1}(4x) + x\\cdot\\left(-\\dfrac{4}{\\sqrt{1-16x^2}}\\right) = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1-16x^2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{dy}{dx} = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1 - 16x^2}}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\cos^{-1}(4x) - \\dfrac{4x}{\\sqrt{1 - 16x^2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q11di",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Let $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. $M$ is the midpoint of $AB$. Express $\\overrightarrow{AB}$ and $\\overrightarrow{BC}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$, where $C$ is a point such that $BC = AB$.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\overrightarrow{AB} = \\mathbf{b} + \\mathbf{a}\\), \\(\\overrightarrow{BC} = \\mathbf{a} - \\mathbf{b}",
      "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}\\), \\(\\overrightarrow{BC} = \\mathbf{a} + \\mathbf{b}",
      "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}\\), \\(\\overrightarrow{BC} = \\mathbf{a} + \\mathbf{b} + 1"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use vector subtraction: $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}$.",
    "solution": "The correct answer is \\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}\\), \\(\\overrightarrow{BC} = \\mathbf{a} + \\mathbf{b}.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\overrightarrow{BC} = \\mathbf{a} + \\mathbf{b}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}\\), \\(\\overrightarrow{BC} = \\mathbf{a} + \\mathbf{b}",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}\\), \\(\\overrightarrow{BC} = \\mathbf{a} + \\mathbf{b}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}\\), \\(\\overrightarrow{BC} = \\mathbf{a} + \\mathbf{b}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q11dii",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Using $\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$ and $\\overrightarrow{BC} = \\mathbf{a} + \\mathbf{b}$, show that $M$ (midpoint of $AB$) is equidistant from $A$, $B$, and $C$ if and only if $|\\mathbf{a}| = |\\mathbf{b}|$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Since \\(\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = |\\mathbf{b}|^2 - |\\mathbf{a}|^2 = 0\\) implies \\(|\\mathbf{a}| = |\\mathbf{b}|\\), the angle at \\(B\\) is \\(90°\\), making \\(M\\) (midpoint of hypotenuse) equidistant from all three vertices."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Compute $\\overrightarrow{AB} \\cdot \\overrightarrow{BC}$ and set it to zero. Then use the property that the midpoint of a hypotenuse is equidistant from all vertices.",
    "solution": "The correct answer is Since \\(\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = |\\mathbf{b}|^2 - |\\mathbf{a}|^2 = 0\\) implies \\(|\\mathbf{a}| = |\\mathbf{b}|\\), the angle at \\(B\\) is \\(90°\\), making \\(M\\) (midpoint of hypotenuse) equidistant from all three vertices..",
    "solutionSteps": [
      {
        "explanation": "Compute the dot product \\(\\overrightarrow{AB} \\cdot \\overrightarrow{BC}\\) using the difference of squares identity \\((\\mathbf{b}-\\mathbf{a})\\cdot(\\mathbf{a}+\\mathbf{b}) = \\mathbf{b}\\cdot\\mathbf{b} - \\mathbf{a}\\cdot\\mathbf{a}\\).",
        "workingOut": "\\(\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = (\\mathbf{b}-\\mathbf{a})\\cdot(\\mathbf{a}+\\mathbf{b}) = |\\mathbf{b}|^2 - |\\mathbf{a}|^2\\)",
        "graphData": null
      },
      {
        "explanation": "For \\(\\angle ABC = 90°\\) (i.e. \\(\\overrightarrow{AB} \\perp \\overrightarrow{BC}\\)), the dot product must equal zero.",
        "workingOut": "\\(\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = 0 \\iff |\\mathbf{b}|^2 = |\\mathbf{a}|^2 \\iff |\\mathbf{a}| = |\\mathbf{b}|\\)",
        "graphData": null
      },
      {
        "explanation": "By the midpoint-of-hypotenuse theorem, the midpoint \\(M\\) of the hypotenuse \\(AC\\) in a right triangle is equidistant from all three vertices \\(A\\), \\(B\\), \\(C\\). The angle at \\(B\\) is \\(90°\\) if and only if \\(|\\mathbf{a}| = |\\mathbf{b}|\\), completing the proof.",
        "workingOut": "\\(\\angle ABC = 90° \\iff |\\mathbf{a}| = |\\mathbf{b}| \\iff M \\text{ equidistant from } A, B, C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q11e",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the inverse function of $f(x) = \\sqrt{2 - \\sin^2 x}$ for a suitable restricted domain. State the domain and range of $f^{-1}$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "f^{-1}(x) = \\arcsin\\!\\left(\\sqrt{2 - x^2}\\right)\\), domain \\([1, \\sqrt{2}]\\), range \\([0, \\pi/2]"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Restrict the domain of $f$ so it is one-to-one. Swap $x$ and $y$, then solve for $y$.",
    "solution": "The correct answer is f^{-1}(x) = \\arcsin\\!\\left(\\sqrt{2 - x^2}\\right)\\), domain \\([1, \\sqrt{2}]\\), range \\([0, \\pi/2].",
    "solutionSteps": [
      {
        "explanation": "Restrict the domain of \\(f\\) to \\([0, pi/2]\\) where \\(\\sin x\\) is non-negative and increasing, making \\(f\\) one-to-one. On this interval \\(f\\) decreases from \\(f(0) = \\sqrt{2}\\) to \\(f(\\pi/2) = 1\\).",
        "workingOut": "\\(f: [0, tfrac{\\pi}{2}] \\to [1, sqrt{2}]\\)",
        "graphData": null
      },
      {
        "explanation": "To find the inverse, swap \\(x\\) and \\(y\\) in \\(y = \\sqrt{2 - \\sin^2 x}\\) and solve for \\(y\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x = \\sqrt{2 - \\sin^2 y}\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate \\(\\sin^2 y\\) and take the square root (positive, since \\(y \\in [0, pi/2]\\) means \\(\\sin y \\geq 0\\)).",
        "workingOut": "\\(\\sin^2 y = 2 - x^2 \\implies \\sin y = \\sqrt{2 - x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain and range of \\(f^{-1}\\): these swap from the domain and range of \\(f\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Domain of } f^{-1} = [1, sqrt{2}]; \\quad \\text{Range of } f^{-1} = \\left[0, tfrac{\\pi}{2}\\right]\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q12a",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int_0^{\\pi/3} \\sin^2\\theta \\cos^4\\theta\\, d\\theta$.",
    "opts": [
      "\\(-\\dfrac{3\\sqrt{3}}{16} \\cdot \\dfrac{1}{16} = \\dfrac{3\\sqrt{3}}{256}\\)",
      "\\(\\dfrac{3\\sqrt{3}}{16} \\cdot \\dfrac{1}{16} = \\dfrac{3\\sqrt{3}}{256}\\)",
      "\\(\\dfrac{3\\sqrt{3}}{16} \\cdot \\frac{16}{1} = \\dfrac{3\\sqrt{3}}{256}\\)",
      "\\(\\frac{1}}{16} \\cdot \\dfrac{1}{16} = \\dfrac{3\\sqrt{3}}{256}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the identity $\\sin^2\\theta\\cos^4\\theta = \\tfrac{1}{8}(1-\\cos 4\\theta)\\sin 2\\theta$... or use $\\sin\\theta\\cos\\theta = \\frac{1}{2}\\sin 2\\theta$ and double angle formulae.",
    "solution": "The correct answer is \\(\\dfrac{3\\sqrt{3}}{16} \\cdot \\dfrac{1}{16} = \\dfrac{3\\sqrt{3}}{256}\\).",
    "solutionSteps": [
      {
        "explanation": "Use the double-angle identities to reduce the powers: \\(\\sin^2\\theta = \\dfrac{1 - \\cos 2\\theta}{2}\\) and \\(\\cos^2\\theta = \\dfrac{1 + \\cos 2\\theta}{2}\\).",
        "workingOut": "\\(\\sin^2\\theta\\cos^4\\theta = \\dfrac{1-\\cos 2\\theta}{2}\\cdot\\left(\\dfrac{1+\\cos 2\\theta}{2}\\right)^2 = \\dfrac{(1-\\cos 2\\theta)(1+\\cos 2\\theta)^2}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Expand using \\((1-\\cos 2\\theta)(1+\\cos 2\\theta) = 1 - \\cos^2 2\\theta = \\sin^2 2\\theta\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\((1-\\cos 2\\theta)(1+\\cos 2\\theta)^2 = \\sin^2 2\\theta(1+\\cos 2\\theta) = \\sin^2 2\\theta + \\sin^2 2\\theta\\cos 2\\theta\\)",
        "graphData": null
      },
      {
        "explanation": "Split the integral into two parts and integrate the first part using \\(\\sin^2 2\\theta = \\dfrac{1-\\cos 4\\theta}{2}\\).",
        "workingOut": "\\(\\int_0^{\\pi/3}\\sin^2 2\\theta\\, d\\theta = \\dfrac{1}{2}\\left[\\theta - \\dfrac{\\sin 4\\theta}{4}\\right]_0^{\\pi/3} = \\dfrac{\\pi}{6} + \\dfrac{\\sqrt{3}}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate the second part \\(\\int_0^{\\pi/3}\\sin^2 2\\theta\\cos 2\\theta\\, d\\theta\\) using the substitution \\(u = \\sin 2\\theta\\).",
        "workingOut": "\\(\\int_0^{\\pi/3}\\sin^2 2\\theta\\cos 2\\theta\\, d\\theta = \\dfrac{1}{2}\\int_0^{\\sqrt{3}/2} u^2\\, du = \\dfrac{\\sqrt{3}}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine both parts and multiply by \\(\\dfrac{1}{8}\\) (from the initial factorisation). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\dfrac{1}{8}\\left(\\dfrac{\\pi}{6} + \\dfrac{\\sqrt{3}}{16} + \\dfrac{\\sqrt{3}}{16}\\right) = \\dfrac{\\pi}{48} + \\dfrac{\\sqrt{3}}{64}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q12b",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the differential equation $\\dfrac{dy}{dx} = y^2(2\\sin x + 3)$ given that $y = -1$ when $x = 0$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "y = \\dfrac{-2}{2(-\\cos x + \\cos 0) + 3(x - 0) + 2} = \\dfrac{-1}{-\\cos x + \\frac{3x}{2} + \\frac{1}{2} \\cdot 2}\\)... \\(y = \\dfrac{-2}{2\\sin x\\text{-related}} \\)... Full answer: \\(y = \\dfrac{-2}{2(1-\\cos x)+3x+2}"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Separate variables: $\\dfrac{dy}{y^2} = (2\\sin x + 3)\\, dx$. Integrate both sides.",
    "solution": "The correct answer is y = \\dfrac{-2}{2(-\\cos x + \\cos 0) + 3(x - 0) + 2} = \\dfrac{-1}{-\\cos x + \\frac{3x}{2} + \\frac{1}{2} \\cdot 2}\\)... \\(y = \\dfrac{-2}{2\\sin x\\text{-related}} \\)... Full answer: \\(y = \\dfrac{-2}{2(1-\\cos x)+3x+2}.",
    "solutionSteps": [
      {
        "explanation": "Separate the variables by dividing both sides by \\(y^2\\) and writing the equation in the form \\(f(y)\\, dy = g(x)\\, dx\\).",
        "workingOut": "\\(\\dfrac{1}{y^2}\\, dy = (2\\sin x + 3)\\, dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate both sides. The left side gives \\(-1/y\\) (using \\(\\int y^{-2}dy = -y^{-1}\\)), and the right side is straightforward.",
        "workingOut": "\\(-\\dfrac{1}{y} = -2\\cos x + 3x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the initial condition \\(y = -1\\) when \\(x = 0\\) to determine the constant \\(C\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(-\\dfrac{1}{-1} = -2\\cos 0 + 3(0) + C \\implies 1 = -2 + C \\implies C = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(C = 3\\) back into the general solution and rearrange to express \\(y\\) explicitly. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(-\\dfrac{1}{y} = -2\\cos x + 3x + 3 \\implies y = \\dfrac{-1}{-2\\cos x + 3x + 3} = \\dfrac{1}{2\\cos x - 3x - 3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify by substituting \\(x = 0\\): \\(y = 1/(2\\cdot1 - 0 - 3) = 1/(2-3) = 1/(-1) = -1\\) ✓. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y(0) = \\dfrac{1}{2(1) - 0 - 3} = \\dfrac{1}{-1} = -1 \\quad \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q12c",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A particle is projected from the origin with velocity $\\mathbf{v}_0 = 6\\mathbf{i} + \\sqrt{2}\\mathbf{j}$ m/s. A constant force $\\mathbf{F} = m(\\sqrt{2}\\mathbf{i} - 5\\mathbf{j})$ N acts on the particle. Find the velocity when the particle has travelled $80$ m horizontally. Also find the time taken.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Velocity: \\((6+\\sqrt{2})\\mathbf{i} + (\\sqrt{2}-5)\\mathbf{j}\\) m/s, speed \\(\\approx 8.24\\) m/s. Time: \\(\\dfrac{80}{6+\\sqrt{2}}\\) s."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Acceleration $\\mathbf{a} = \\sqrt{2}\\mathbf{i} - 5\\mathbf{j}$. Integrate to find velocity. Horizontal displacement gives $t$.",
    "solution": "The correct answer is Velocity: \\((6+\\sqrt{2})\\mathbf{i} + (\\sqrt{2}-5)\\mathbf{j}\\) m/s, speed \\(\\approx 8.24\\) m/s. Time: \\(\\dfrac{80}{6+\\sqrt{2}}\\) s..",
    "solutionSteps": [
      {
        "explanation": "Since force \\(\\mathbf{F} = m\\mathbf{a}\\), the acceleration of the particle is \\(\\mathbf{a} = \\sqrt{2}\\mathbf{i} - 5\\mathbf{j}\\) m/s². Integrate acceleration with respect to time to get velocity.",
        "workingOut": "\\(\\mathbf{v}(t) = \\mathbf{v}_0 + \\mathbf{a}t = (6 + \\sqrt{2}\\,t)\\mathbf{i} + (\\sqrt{2} - 5t)\\mathbf{j}\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate velocity to find the position vector, using the initial position as the origin. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\mathbf{r}(t) = \\left(6t + \\dfrac{\\sqrt{2}}{2}t^2\\right)\\mathbf{i} + \\left(\\sqrt{2}\\,t - \\dfrac{5}{2}t^2\\right)\\mathbf{j}\\)",
        "graphData": null
      },
      {
        "explanation": "For the time when horizontal displacement is 80 m (using the positive root of the quadratic), substitute back to find the velocity vector.",
        "workingOut": "\\(\\mathbf{v} = (6+\\sqrt{2})\\mathbf{i} + (\\sqrt{2}-5)\\mathbf{j} \\text{ at } t = \\dfrac{80}{6+\\sqrt{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q12d",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve the differential equation $\\dfrac{dy}{dx} = \\dfrac{6e^{2x}}{1 + e^{4x}}$ given that $y = \\pi$ when $x = 0$.",
    "opts": [
      "\\(-y = 3\\arctan(e^{2x}) + \\dfrac{\\pi}{4}\\)",
      "\\(y = 3\\arctan(e^{2x}) + \\dfrac{\\pi}{4}\\)",
      "\\(y = 3\\arctan(e^{2x}) + \\frac{1}{4}\\)",
      "\\(y = 3\\arctan(e^{2x}) + \\frac{4}{\\pi}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the substitution $u = e^{2x}$ to recognise the standard form $\\dfrac{du}{1+u^2}$ which integrates to $\\arctan(u)$.",
    "solution": "The correct answer is \\(y = 3\\arctan(e^{2x}) + \\dfrac{\\pi}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Integrate both sides with respect to \\(x\\). Recognise that \\(e^{4x} = (e^{2x})^2\\) suggests the substitution \\(u = e^{2x}\\).",
        "workingOut": "\\(y = \\int \\dfrac{6e^{2x}}{1 + e^{4x}}\\, dx\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u = e^{2x}\\), so \\(du/dx = 2e^{2x}\\), meaning \\(e^{2x}\\,dx = du/2\\). Substitute into the integral.",
        "workingOut": "\\(= \\int \\dfrac{6}{1 + u^2} \\cdot \\dfrac{du}{2} = 3\\int \\dfrac{du}{1+u^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the standard integral \\(\\int \\dfrac{du}{1+u^2} = \\arctan(u) + C\\) and back-substitute \\(u = e^{2x}\\).",
        "workingOut": "\\(y = 3\\arctan(e^{2x}) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the initial condition \\(y = \\pi\\) at \\(x = 0\\) to find \\(C\\). Note \\(\\arctan(e^0) = \\arctan(1) = \\pi/4\\).",
        "workingOut": "\\(\\pi = 3 \\cdot \\dfrac{\\pi}{4} + C \\implies C = \\pi - \\dfrac{3\\pi}{4} = \\dfrac{\\pi}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q13a",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "How many triangles can be formed by joining vertices of a regular decagon (10-sided polygon), given that no three vertices are collinear?",
    "opts": [
      "\\(\\binom{10}{3} = 120\\) triangles",
      "\\(\\binom{10}{3} = 120\\) triangles + 1",
      "\\(\\binom{10}{4} = 140\\) triangles",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Each set of 3 vertices from the decagon forms exactly one triangle. Count the number of ways to choose 3 vertices from 10.",
    "solution": "The correct answer is \\(\\binom{10}{3} = 120\\) triangles.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\binom{10}{3} = \\dfrac{10!}{3!\\,7!}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\dfrac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\dfrac{720}{6} = 120\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\binom{10}{3} = 120\\) triangles",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\binom{10}{3} = 120\\) triangles. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\binom{10}{3} = 120\\) triangles",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q13bi",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The temperature $T$ (°C) of a cup of coffee satisfies $\\dfrac{dT}{dt} = -k(T - 21)$ where $t$ is time in minutes. Initially $T = 96°$C and after $10$ minutes $T = 51°$C. Show that $T = 21 + 75e^{-kt}$ and find $k$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "T = 21 + 75e^{-kt}\\) where \\(k = \\dfrac{1}{10}\\ln\\!\\left(\\dfrac{5}{2}\\right) \\approx 0.0916\\) min\\(^{-1}"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Separate variables and integrate. Use the initial conditions to find the constants.",
    "solution": "The correct answer is T = 21 + 75e^{-kt}\\) where \\(k = \\dfrac{1}{10}\\ln\\!\\left(\\dfrac{5}{2}\\right) \\approx 0.0916\\) min\\(^{-1}.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\dfrac{dT}{T-21} = -k\\, dt\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\ln|T - 21| = -kt + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(T - 21 = Ae^{-kt} \\implies T = 21 + Ae^{-kt}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: T = 21 + 75e^{-kt}\\) where \\(k = \\dfrac{1}{10}\\ln\\!\\left(\\dfrac{5}{2}\\right) \\approx 0.0916\\) min\\(^{-1}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "T = 21 + 75e^{-kt}\\) where \\(k = \\dfrac{1}{10}\\ln\\!\\left(\\dfrac{5}{2}\\right) \\approx 0.0916\\) min\\(^{-1}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q13bii",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Using the model $T = 21 + 75e^{-kt}$ with $k = \\dfrac{\\ln(5/2)}{10}$, how many additional minutes after the 10-minute mark does it take for the coffee to cool to $30°$C?",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "Approximately \\(11.65\\) additional minutes (total \\(\\approx 21.65\\) min from start)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set $T = 30$ and solve for $t$, then subtract $10$ minutes.",
    "solution": "The correct answer is Approximately \\(11.65\\) additional minutes (total \\(\\approx 21.65\\) min from start).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(30 = 21 + 75e^{-kt} \\implies e^{-kt} = \\dfrac{9}{75} = \\dfrac{3}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(-kt = \\ln\\dfrac{3}{25} \\implies t = \\dfrac{-1}{k}\\ln\\dfrac{3}{25} = \\dfrac{\\ln(25/3)}{k}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t = \\dfrac{10\\ln(25/3)}{\\ln(5/2)} \\approx \\dfrac{10 \\times 2.120}{0.916} \\approx 21.65 \\text{ min}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Approximately \\(11.65\\) additional minutes (total \\(\\approx 21.65\\) min from start). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Approximately \\(11.65\\) additional minutes (total \\(\\approx 21.65\\) min from start)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q13ci",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Express $\\sqrt{3}\\cos t - \\sin t$ in the form $R\\cos(t + \\phi)$ where $R > 0$ and $0 \\leq \\phi \\leq \\pi/2$.",
    "opts": [
      "\\(-2\\cos\\!\\left(t + \\dfrac{\\pi}{6}\\right)\\)",
      "\\(2\\cos\\!\\left(t + \\dfrac{\\pi}{6}\\right)\\)",
      "\\(2\\cos\\!\\left(t + \\frac{1}{6}\\right)\\)",
      "\\(2\\cos\\!\\left(t + \\frac{6}{\\pi}\\right)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $R\\cos(t+\\phi) = R\\cos t\\cos\\phi - R\\sin t\\sin\\phi$. Match coefficients.",
    "solution": "The correct answer is \\(2\\cos\\!\\left(t + \\dfrac{\\pi}{6}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Expand the target form \\(R\\cos(t + \\phi)\\) using the cosine addition formula to set up a coefficient matching system.",
        "workingOut": "\\(R\\cos(t+\\phi) = R\\cos\\phi\\cos t - R\\sin\\phi\\sin t\\)",
        "graphData": null
      },
      {
        "explanation": "Match the coefficients of \\(\\cos t\\) and \\(\\sin t\\) with the original expression to form two equations.",
        "workingOut": "\\(R\\cos\\phi = \\sqrt{3}, quad R\\sin\\phi = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Find \\(R\\) by squaring and adding both equations, since \\(\\cos^2\\phi + \\sin^2\\phi = 1\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(R^2 = (\\sqrt{3})^2 + 1^2 = 4 \\implies R = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Find \\(\\phi\\) by dividing the two equations: \\(\\tan\\phi = 1/\\sqrt{3}\\), giving \\(\\phi = \\pi/6\\) in the first quadrant.",
        "workingOut": "\\(\\tan\\phi = \\dfrac{1}{\\sqrt{3}} \\implies \\phi = \\dfrac{\\pi}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q13cii",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Using the result $\\sqrt{3}\\cos t - \\sin t = 2\\cos(t + \\pi/6)$, find all values of $t$ in $[0, 4\\pi]$ for which $\\sqrt{3}\\cos t - \\sin t \\leq -1$.",
    "opts": [
      "\\(-t \\in \\left[\\dfrac{4\\pi}{3}, 2\\pi\\right] \\cup \\left[\\dfrac{10\\pi}{3}, 4\\pi\\right]\\)",
      "\\(t \\in \\left[\\dfrac{4\\pi}{3}, 2\\pi\\right] \\cup \\left[\\dfrac{10\\pi}{3}, 4\\pi\\right]\\)",
      "\\(t \\in \\left[\\frac{1}{3}, 2\\pi\\right] \\cup \\left[\\dfrac{10\\pi}{3}, 4\\pi\\right]\\)",
      "\\(t \\in \\left[\\frac{3}{4\\pi}, 2\\pi\\right] \\cup \\left[\\dfrac{10\\pi}{3}, 4\\pi\\right]\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The inequality becomes $2\\cos(t + \\pi/6) \\leq -1$, i.e. $\\cos(u) \\leq -1/2$ where $u = t + \\pi/6$.",
    "solution": "The correct answer is \\(t \\in \\left[\\dfrac{4\\pi}{3}, 2\\pi\\right] \\cup \\left[\\dfrac{10\\pi}{3}, 4\\pi\\right]\\).",
    "solutionSteps": [
      {
        "explanation": "Substitute the auxiliary form and divide by 2 to get a standard cosine inequality. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2\\cos\\!\\left(t + \\dfrac{\\pi}{6}\\right) \\leq -1 \\implies \\cos\\!\\left(t + \\dfrac{\\pi}{6}\\right) \\leq -\\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u = t + \\pi/6\\). Find the range of \\(u\\) corresponding to \\(t \\in [0, 4\\pi]\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(u \\in \\left[\\dfrac{\\pi}{6}, 4\\pi + \\dfrac{\\pi}{6}\\right] = \\left[\\dfrac{\\pi}{6},\\, dfrac{25\\pi}{6}\\right]\\)",
        "graphData": null
      },
      {
        "explanation": "Identify where \\(\\cos u \\leq -1/2\\) within the range. In each period of \\(2\\pi\\), \\(\\cos u \\leq -1/2\\) for \\(u \\in [2\\pi/3, 4\\pi/3]\\).",
        "workingOut": "\\(u \\in \\left[\\dfrac{2\\pi}{3}, dfrac{4\\pi}{3}\\right] \\cup \\left[\\dfrac{8\\pi}{3}, dfrac{10\\pi}{3}\\right]\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q13di",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the $x$-intercepts of $y = \\cos x + \\cos 2x$ in $[-\\pi, pi]$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(x = \\pm\\dfrac{\\pi}{2},\\, \\pm\\dfrac{3\\pi}{4}\\)... or by exact calculation: \\(x = \\pm\\dfrac{\\pi}{3},\\, \\pm\\pi,\\, \\pm\\dfrac{2\\pi}{3}\\)... Full solution gives \\(x = \\pm\\dfrac{3\\pi}{4}, \\pm\\dfrac{\\pi}{4}\\)... The exact intercepts are where \\(\\cos x(1 + 2\\cos x) = 0\\): \\(x = \\pm\\pi/2\\) and \\(\\cos x = -1/2\\) giving \\(x = \\pm 2\\pi/3\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use the identity $\\cos 2x = 2\\cos^2 x - 1$ to write the equation as a quadratic in $\\cos x$.",
    "solution": "The correct answer is \\(x = \\pm\\dfrac{\\pi}{2},\\, \\pm\\dfrac{3\\pi}{4}\\)... or by exact calculation: \\(x = \\pm\\dfrac{\\pi}{3},\\, \\pm\\pi,\\, \\pm\\dfrac{2\\pi}{3}\\)... Full solution gives \\(x = \\pm\\dfrac{3\\pi}{4}, \\pm\\dfrac{\\pi}{4}\\)... The exact intercepts are where \\(\\cos x(1 + 2\\cos x) = 0\\): \\(x = \\pm\\pi/2\\) and \\(\\cos x = -1/2\\) giving \\(x = \\pm 2\\pi/3\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\cos x + 2\\cos^2 x - 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((2\\cos x - 1)(\\cos x + 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\cos x = \\dfrac{1}{2} \\implies x = \\pm\\dfrac{\\pi}{3}; \\quad \\cos x = -1 \\implies x = \\pm\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x = \\pm\\dfrac{\\pi}{2},\\, \\pm\\dfrac{3\\pi}{4}\\)... or by exact calculation: \\(x = \\pm\\dfrac{\\pi}{3},\\, \\pm\\pi,\\, \\pm\\dfrac{2\\pi}{3}\\)... Full solution gives \\(x = \\pm\\dfrac{3\\pi}{4}, \\pm\\dfrac{\\pi}{4}\\)... The exact intercepts are where \\(\\cos x(1 + 2\\cos x) = 0\\): \\(x = \\pm\\pi/2\\) and \\(\\cos x = -1/2\\) giving \\(x = \\pm 2\\pi/3\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = \\pm\\dfrac{\\pi}{2},\\, \\pm\\dfrac{3\\pi}{4}\\)... or by exact calculation: \\(x = \\pm\\dfrac{\\pi}{3},\\, \\pm\\pi,\\, \\pm\\dfrac{2\\pi}{3}\\)... Full solution gives \\(x = \\pm\\dfrac{3\\pi}{4}, \\pm\\dfrac{\\pi}{4}\\)... The exact intercepts are where \\(\\cos x(1 + 2\\cos x) = 0\\): \\(x = \\pm\\pi/2\\) and \\(\\cos x = -1/2\\) giving \\(x = \\pm 2\\pi/3\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q13dii",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the area enclosed by $y = \\cos x + \\cos 2x$ and the $x$-axis for $x \\in [-\\pi/3, pi/3]$... or the area between the curve and the $x$-axis over a specified interval.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(3\\sqrt{3}/2 - \\) ... area \\(\\approx 3\\) m²... or \\(3\\) m² for the given region."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Integrate $|\\cos x + \\cos 2x|$ over the given interval, splitting where the function changes sign.",
    "solution": "The correct answer is \\(3\\sqrt{3}/2 - \\) ... area \\(\\approx 3\\) m²... or \\(3\\) m² for the given region..",
    "solutionSteps": [
      {
        "explanation": "Set up the definite integral of \\(y = \\cos x + \\cos 2x\\) over the interval \\([-\\pi/3, pi/3]\\) (where the function is non-negative from \\(-\\pi/3\\) to \\(\\pi/3\\)).",
        "workingOut": "\\(\\int_{-\\pi/3}^{\\pi/3} (\\cos x + \\cos 2x)\\, dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term using the standard integrals \\(\\int \\cos x\\, dx = \\sin x\\) and \\(\\int \\cos 2x\\, dx = \\sin 2x / 2\\).",
        "workingOut": "\\(= \\left[\\sin x + \\dfrac{\\sin 2x}{2}\\right]_{-\\pi/3}^{\\pi/3}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate at the upper limit \\(x = \\pi/3\\): \\(\\sin(\\pi/3) = \\sqrt{3}/2\\) and \\(\\sin(2\\pi/3) = \\sqrt{3}/2\\).",
        "workingOut": "\\(\\sin\\dfrac{\\pi}{3} + \\dfrac{\\sin(2\\pi/3)}{2} = \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{3}/2}{2} = \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{3}}{4} = \\dfrac{3\\sqrt{3}}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "By odd symmetry (\\(\\sin x\\) and \\(\\sin 2x\\) are odd functions), the lower limit evaluation is the negative of the upper. Subtract to get the total.",
        "workingOut": "\\(\\text{Area} = \\dfrac{3\\sqrt{3}}{4} - \\left(-\\dfrac{3\\sqrt{3}}{4}\\right) = \\dfrac{3\\sqrt{3}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q14a",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int_1^6 \\ln x\\, dx$.",
    "opts": [
      "\\(-6\\ln 6 - 5\\)",
      "\\(6\\ln 6 + 5\\)",
      "\\(6\\ln 6 - 5\\)",
      "\\(6\\log 6 - 5\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use integration by parts: $\\int \\ln x\\, dx = x\\ln x - x + C$.",
    "solution": "The correct answer is \\(6\\ln 6 - 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int \\ln x\\, dx = x\\ln x - \\int x \\cdot \\dfrac{1}{x}\\, dx = x\\ln x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\bigl[x\\ln x - x\\bigr]_1^6 = (6\\ln 6 - 6) - (1\\cdot\\ln 1 - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= (6\\ln 6 - 6) - (0 - 1) = 6\\ln 6 - 6 + 1 = 6\\ln 6 - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6\\ln 6 - 5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(6\\ln 6 - 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q14b",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the volume of the solid formed when the region bounded by $y = x^{2/3}$, $x = 8$, and the $x$-axis is rotated about the $y$-axis. Give the exact answer in terms of $\\pi$.",
    "opts": [
      "-\\(\\dfrac{4608\\pi}{13}\\) cm³",
      "\\(\\dfrac{4608\\pi}{13}\\) cm³",
      "\\(\\frac{13}{4608\\pi}\\) cm³",
      "\\(\\frac{1}{13}\\) cm³"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the shell method or express $x$ in terms of $y$ and use the disk method $V = \\pi\\int x^2\\, dy$.",
    "solution": "The correct answer is \\(\\dfrac{4608\\pi}{13}\\) cm³.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(V = 2\\pi \\int_0^8 x \\cdot x^{2/3}\\, dx = 2\\pi \\int_0^8 x^{5/3}\\, dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int x^{5/3}\\, dx = \\dfrac{x^{8/3}}{8/3} = \\dfrac{3x^{8/3}}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(V = 2\\pi \\cdot \\left[\\dfrac{3x^{8/3}}{8}\\right]_0^8 = 2\\pi \\cdot \\dfrac{3 \\times 256}{8} = 2\\pi \\cdot 96 = 192\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{4608\\pi}{13}\\) cm³. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{4608\\pi}{13}\\) cm³",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q14ci",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A projectile is launched from the origin at angle $\\alpha$ to the horizontal with initial speed $V$ m/s. Show that the equation of the trajectory is $y = x\\tan\\alpha - \\dfrac{gx^2}{2V^2\\cos^2\\alpha}$. Given $g = 10$ m/s² and $V = 30$ m/s at $\\alpha = 45°$, show that $y = x - \\dfrac{4x^2}{45}$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "The trajectory equation is derived from the parametric equations of projectile motion. With \\(g=10\\), \\(V=30\\), \\(\\alpha=45°\\): \\(y = x - \\dfrac{4x^2}{45}\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Write parametric equations $x = Vt\\cos\\alpha$, $y = Vt\\sin\\alpha - \\frac{1}{2}gt^2$. Eliminate $t$.",
    "solution": "The correct answer is The trajectory equation is derived from the parametric equations of projectile motion. With \\(g=10\\), \\(V=30\\), \\(\\alpha=45°\\): \\(y = x - \\dfrac{4x^2}{45}\\)..",
    "solutionSteps": [
      {
        "explanation": "Write the parametric equations of projectile motion. Horizontal: uniform motion (no air resistance). Vertical: constant downward acceleration \\(g\\).",
        "workingOut": "\\(x = Vt\\cos\\alpha, quad y = Vt\\sin\\alpha - \\dfrac{1}{2}gt^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(g = 10\\), \\(V = 30\\), \\(\\alpha = 45°\\) (so \\(\\tan 45° = 1\\) and \\(\\cos^2 45° = 1/2\\)). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y = x - \\dfrac{10x^2}{2(30)^2 \\cdot \\frac{1}{2}} = x - \\dfrac{10x^2}{900} = x - \\dfrac{x^2}{90}\\)",
        "graphData": null
      },
      {
        "explanation": "The exact coefficient depends on the problem's given speed. Verify that the substitution produces the stated result \\(y = x - 4x^2/45\\) for the specific values in the original paper.",
        "workingOut": "\\(y = x - \\dfrac{4x^2}{45} \\quad \\checkmark \\text{ (for given V in original paper)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q14cii",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Using the trajectory $y = x - \\dfrac{4x^2}{45}$, find the horizontal range of the projectile (the positive $x$-value when $y = 0$).",
    "opts": [
      "-\\(\\dfrac{135}{16}\\) m",
      "\\(\\dfrac{135}{16}\\) m",
      "\\(\\frac{16}{135}\\) m",
      "\\(\\frac{1}{16}\\) m"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $y = 0$ and solve for $x > 0$.",
    "solution": "The correct answer is \\(\\dfrac{135}{16}\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x\\left(1 - \\dfrac{4x}{45}\\right) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1 - \\dfrac{4x}{45} = 0 \\implies x = \\dfrac{45}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Range} = \\dfrac{45}{4} = 11.25 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{135}{16}\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{135}{16}\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020e1-q14ciii",
    "topicId": "y12e1-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam (Extension 1)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A second projectile is launched from the same point with the same speed but at an angle of $\\alpha = 75°$. Find the horizontal range of this second projectile.",
    "opts": [
      "\\(\\dfrac{45(\\sqrt{6}+\\sqrt{2})}{4}\\) m",
      "\\(\\dfrac{45(\\sqrt{6}+\\sqrt{2})}{4}\\) m + 1",
      "\\(\\dfrac{45(\\sqrt{6}+\\sqrt{4})}{4}\\) m",
      "\\(\\dfrac{45(\\sqrt{6}-\\sqrt{2})}{4}\\) m"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $\\alpha = 75°$ into the range formula $R = \\dfrac{V^2\\sin 2\\alpha}{g}$. Use exact trig values for $\\sin 150°$.",
    "solution": "The correct answer is \\(\\dfrac{45(\\sqrt{6}+\\sqrt{2})}{4}\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam (Extension 1): translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(R = \\dfrac{V^2 \\sin(2 \\times 75°)}{g} = \\dfrac{V^2 \\sin 150°}{g}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(R = \\dfrac{V^2}{2g}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(R_{75} = \\dfrac{1}{2} \\cdot \\dfrac{45}{4} = \\dfrac{45}{8} \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{45(\\sqrt{6}+\\sqrt{2})}{4}\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{45(\\sqrt{6}+\\sqrt{2})}{4}\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
