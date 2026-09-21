export const Y10_CH12I_QUESTIONS = [
  {
    id: "y10-12i-q1a",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Calculate the value of the pronumeral in the triangle. Give all angles correct to one decimal place.\n\nA right-angled triangle \\(PQR\\) with \\(\\angle R = 90°\\). The side \\(PR = 6\\) cm and \\(RQ = 10\\) cm. The angle at \\(Q\\) is \\(θ\\).",
    a: 0,
    answer: "0",
    hint: "Use the tangent ratio: \\(\\tan θ = \\frac{\\text{Opposite}}{\\text{Adjacent}}\\).",
    solution: "In \\(\\triangle PQR\\): Opposite side to \\(\\theta\\) is \\(PR = 6\\) cm, adjacent side is \\(RQ = 10\\) cm.\n\\(\\tan \\theta = \\frac{6}{10} = 0.6\\)\n\\(\\theta = \\tan^{-1}(0.6) \\approx 31.0^\\circ\\)",
    solutionSteps: [
      {
        explanation: "Label the two known sides relative to the reference angle \\(\\theta\\) at \\(Q\\): \\(PR\\) is opposite \\(\\theta\\) and \\(RQ\\) is adjacent to \\(\\theta\\). The right angle is at \\(R\\).",
        workingOut: "\\(\\text{Opposite} = PR = 6\\text{ cm}, \\quad \\text{Adjacent} = RQ = 10\\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">RQ = 10 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">PR = 6 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">θ = ?</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">R</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Q</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">P</text>\n</svg>"
        }
      },
      {
        explanation: "Since we know the opposite and adjacent sides (not the hypotenuse), the tangent ratio is the one that connects them. Pitfall: writing \\(\\frac{\\text{Adj}}{\\text{Opp}}\\) upside down is the most common error here — always double-check SOH-CAH-TOA before substituting.",
        workingOut: "\\(\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{6}{10}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">RQ = 10 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">PR = 6 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">θ</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">R</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Q</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">P</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the values and simplify the ratio, then apply the inverse tangent function to isolate \\(\\theta\\). Note: \\(\\tan^{-1}x\\) means \"the angle whose tangent is \\(x\\)\", not \\(\\frac{1}{\\tan x}\\).",
        workingOut: "\\(\\tan \\theta = 0.6\\)\n\\(\\theta = \\tan^{-1}(0.6)\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">RQ = 10 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">PR = 6 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">θ</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">R</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Q</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">P</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate on the calculator and round to one decimal place, as the question requires.",
        workingOut: "\\(\\theta \\approx 30.964^\\circ\\)\n\\(\\theta \\approx 31.0^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">RQ = 10 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">PR = 6 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">θ ≈ 31.0°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">R</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Q</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">P</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">RQ = 10 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">PR = 6 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">θ = ?</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">R</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Q</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">P</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(31.0\\)",
        imageUrl: ""
      },
      {
        text: "\\(46.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(149.0\\)",
        imageUrl: ""
      },
      {
        text: "\\(24.8\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q1b",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Calculate the value of the pronumeral in the triangle. Give all angles correct to one decimal place.\n\nA right-angled triangle with a hypotenuse of \\(18\\) cm and an adjacent side of \\(15\\) cm. The angle is \\(θ\\).",
    a: 2,
    answer: "2",
    hint: "Use the cosine ratio: \\(\\cos θ = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}\\).",
    solution: "Using the cosine ratio: \\(\\cos \\theta = \\frac{15}{18}\\), so \\(\\theta = \\cos^{-1}\\left(\\frac{15}{18}\\right) \\approx 33.6^\\circ\\).",
    solutionSteps: [
      {
        explanation: "The hypotenuse (18 cm) is the longest side, opposite the right angle. The 15 cm side is adjacent to the reference angle \\(\\theta\\).",
        workingOut: "\\(\\text{Hypotenuse} = 18\\text{ cm}, \\quad \\text{Adjacent} = 15\\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">15 cm</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">θ = ?</text>\n</svg>"
        }
      },
      {
        explanation: "We know the adjacent side and the hypotenuse, so the cosine ratio (CAH) applies. Pitfall: confusing this with SOH because \"15\" looks like it could be an opposite side — always re-check which two sides are actually known before picking the ratio.",
        workingOut: "\\(\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{15}{18}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">15 cm</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">θ</text>\n</svg>"
        }
      },
      {
        explanation: "Apply the inverse cosine function to both sides to solve for \\(\\theta\\). Remember \\(\\cos^{-1}x\\) is \"the angle whose cosine is \\(x\\)\", never \\(\\frac{1}{\\cos x}\\).",
        workingOut: "\\(\\cos \\theta = 0.8\\overline{3}\\)\n\\(\\theta = \\cos^{-1}\\left(\\frac{15}{18}\\right)\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">15 cm</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">θ</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate and round to one decimal place.",
        workingOut: "\\(\\theta \\approx 33.557^\\circ\\)\n\\(\\theta \\approx 33.6^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">15 cm</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">θ ≈ 33.6°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">15 cm</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">θ = ?</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(29.1\\)",
        imageUrl: ""
      },
      {
        text: "\\(38.8\\)",
        imageUrl: ""
      },
      {
        text: "\\(33.6\\)",
        imageUrl: ""
      },
      {
        text: "\\(37.0\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q1c",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Calculate the value of the pronumeral in the triangle. Give all side lengths correct to two decimal places.\n\nA right-angled triangle has an angle of \\(36°\\) at the top vertex, a hypotenuse of \\(18\\) cm, and a side \\(x\\) cm opposite the \\(36°\\) angle. Find \\(x\\).",
    a: 2,
    answer: "2",
    hint: "Use the sine ratio: \\(\\sin θ = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}\\).",
    solution: "The side \\(x\\) is opposite the \\(36°\\) angle and the hypotenuse is 18 cm.\n\\(\\sin 36° = \\frac{x}{18}\\)\n\\(x = 18 \\sin 36° \\approx 10.58\\) cm.",
    solutionSteps: [
      {
        explanation: "At the \\(36°\\) angle, the side \\(x\\) lies opposite it, and the longest side (18 cm) is the hypotenuse, opposite the right angle.",
        workingOut: "\\(\\text{Hypotenuse} = 18\\text{ cm}, \\quad \\text{Opposite} = x\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">36°</text>\n</svg>"
        }
      },
      {
        explanation: "We know the opposite side (unknown) and the hypotenuse, so the sine ratio (SOH) applies. Pitfall: SOH-CAH-TOA ratio inversion — do not write \\(\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}\\) here, since \\(x\\) is opposite the given angle, not adjacent to it.",
        workingOut: "\\(\\sin 36^\\circ = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{x}{18}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">36°</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange to make \\(x\\) the subject by multiplying both sides by 18.",
        workingOut: "\\(x = 18 \\times \\sin 36^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">36°</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate on the calculator and round to two decimal places, as required.",
        workingOut: "\\(x \\approx 10.580\\text{ cm}\\)\n\\(x \\approx 10.58\\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">x ≈ 10.58 cm</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">36°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">18 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">36°</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(9.2\\)",
        imageUrl: ""
      },
      {
        text: "\\(12.2\\)",
        imageUrl: ""
      },
      {
        text: "\\(10.58\\)",
        imageUrl: ""
      },
      {
        text: "\\(11.6\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q1d",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Calculate the value of the pronumeral in the triangle. Give all side lengths correct to two decimal places.\n\nA right-angled triangle \\(\\triangle STU\\) with \\(\\angle S = 90°\\). The side \\(ST = 8\\) cm and \\(SU = x\\) cm. The angle \\(\\angle STU = 42°\\).",
    a: 0,
    answer: "0",
    hint: "Use the tangent ratio: \\(\\tan θ = \\frac{\\text{Opposite}}{\\text{Adjacent}}\\).",
    solution: "In \\(\\triangle STU\\), the side opposite \\(42°\\) is \\(SU = x\\) and the adjacent side is \\(ST = 8\\).\n\\(\\tan 42° = \\frac{x}{8}\\)\n\\(x = 8 \\tan 42° \\approx 7.20\\) cm.",
    solutionSteps: [
      {
        explanation: "The right angle is at \\(S\\). Relative to the \\(42°\\) angle at \\(T\\): \\(SU = x\\) is opposite, and \\(ST = 8\\) cm is adjacent.",
        workingOut: "\\(\\text{Opposite} = SU = x, \\quad \\text{Adjacent} = ST = 8\\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">ST = 8 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">42°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">S</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">T</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">U</text>\n</svg>"
        }
      },
      {
        explanation: "We know the adjacent side and need the opposite side, so the tangent ratio (TOA) applies.",
        workingOut: "\\(\\tan 42^\\circ = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{x}{8}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">ST = 8 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">42°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">S</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">T</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">U</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange to make \\(x\\) the subject by multiplying both sides by 8. Pitfall: don't divide 8 by \\(\\tan 42^\\circ\\) — that would be the correct move only if \\(x\\) were adjacent, which it isn't here.",
        workingOut: "\\(x = 8 \\times \\tan 42^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">ST = 8 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">42°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">S</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">T</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">U</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate and round to two decimal places.",
        workingOut: "\\(x \\approx 7.203\\text{ cm}\\)\n\\(x \\approx 7.20\\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">ST = 8 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">x ≈ 7.20 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">42°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">S</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">T</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">U</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">ST = 8 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">42°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">S</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">T</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">U</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(7.20\\)",
        imageUrl: ""
      },
      {
        text: "\\(10.8\\)",
        imageUrl: ""
      },
      {
        text: "\\(172.8\\)",
        imageUrl: ""
      },
      {
        text: "\\(5.8\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q2a",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the exact value of the pronumeral in the triangle.\n\nA right-angled triangle has an angle of \\(30°\\), a hypotenuse of \\(20\\) cm, and an opposite side \\(x\\) cm.",
    a: 2,
    answer: "2",
    hint: "Use the exact value of \\(\\sin 30° = \\frac{1}{2}\\).",
    solution: "\\(\\sin 30° = \\frac{1}{2}\\)\n\\(\\frac{1}{2} = \\frac{x}{20}\\)\n\\(x = 20 \\times \\frac{1}{2} = 10\\) cm.",
    solutionSteps: [
      {
        explanation: "The hypotenuse is 20 cm, and \\(x\\) lies opposite the \\(30°\\) angle.",
        workingOut: "\\(\\text{Hypotenuse} = 20\\text{ cm}, \\quad \\text{Opposite} = x\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">20 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">30°</text>\n</svg>"
        }
      },
      {
        explanation: "We know the opposite side (unknown) and the hypotenuse, so the sine ratio (SOH) applies.",
        workingOut: "\\(\\sin 30^\\circ = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{x}{20}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">20 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">30°</text>\n</svg>"
        }
      },
      {
        explanation: "Since \\(30°\\) is an exact-value angle, substitute \\(\\sin 30^\\circ = \\frac{1}{2}\\) exactly rather than a rounded calculator value.",
        workingOut: "\\(\\frac{1}{2} = \\frac{x}{20}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">20 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">30°</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange and solve for \\(x\\) — this is an exact value, so no rounding is needed.",
        workingOut: "\\(x = 20 \\times \\frac{1}{2} = 10\\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">x = 10 cm</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">20 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">30°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">20 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">30°</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(8.7\\)",
        imageUrl: ""
      },
      {
        text: "\\(11.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(10\\)",
        imageUrl: ""
      },
      {
        text: "\\(11.0\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q2b",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the exact value of the pronumeral in the triangle.\n\nA right-angled triangle has an angle of \\(45°\\), an adjacent side of \\(36\\) cm, and an opposite side \\(x\\) cm.",
    a: 0,
    answer: "0",
    hint: "Use the exact value of \\(\\tan 45° = 1\\).",
    solution: "\\(\\tan 45° = 1\\)\n\\(\\frac{x}{36} = 1\\)\n\\(x = 36\\) cm.",
    solutionSteps: [
      {
        explanation: "The adjacent side to the \\(45°\\) angle is 36 cm, and \\(x\\) lies opposite the \\(45°\\) angle.",
        workingOut: "\\(\\text{Adjacent} = 36\\text{ cm}, \\quad \\text{Opposite} = x\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">36 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">45°</text>\n</svg>"
        }
      },
      {
        explanation: "We know the adjacent side and need the opposite side, so the tangent ratio (TOA) applies.",
        workingOut: "\\(\\tan 45^\\circ = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{x}{36}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">36 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">45°</text>\n</svg>"
        }
      },
      {
        explanation: "Since \\(45°\\) is an exact-value angle, substitute \\(\\tan 45^\\circ = 1\\) exactly.",
        workingOut: "\\(1 = \\frac{x}{36}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">36 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">45°</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange and solve for \\(x\\) — an exact value, no rounding needed. Pitfall: for a \\(45°\\) right triangle the two legs are always equal, which is a quick sanity check on this answer.",
        workingOut: "\\(x = 36 \\times 1 = 36\\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">36 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">x = 36 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">45°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">36 cm</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">45°</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(36\\)",
        imageUrl: ""
      },
      {
        text: "\\(31.2\\)",
        imageUrl: ""
      },
      {
        text: "\\(41.6\\)",
        imageUrl: ""
      },
      {
        text: "\\(39.6\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q2c",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the exact value of the pronumeral in the triangle.\n\nA right-angled triangle has an angle of \\(60°\\), a hypotenuse of \\(50\\) cm, and an adjacent side \\(x\\) cm.",
    a: 2,
    answer: "2",
    hint: "Use the exact value of \\(\\cos 60° = \\frac{1}{2}\\).",
    solution: "\\(\\text{Hypotenuse} = 50\\text{ cm}, \\quad \\text{Adjacent} = x\\text{ cm}\\)\n\\(\\cos 60^\\circ = \\dfrac{x}{50}\\)\n\\(\\dfrac{1}{2} = \\dfrac{x}{50}\\)\n\\(x = 50 \\times \\dfrac{1}{2} = 25\\)",
    solutionSteps: [
      {
        explanation: "Label the triangle relative to the given \\(60^\\circ\\) angle: the hypotenuse is \\(50\\) cm and the side adjacent to the \\(60^\\circ\\) angle is \\(x\\). Pitfall: don't mix up which side is adjacent vs. opposite — the adjacent side is next to the angle but is NOT the hypotenuse.",
        workingOut: "\\(\\text{Hypotenuse} = 50\\text{ cm}, \\quad \\text{Adjacent} = x\\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">adj = ?</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">60°</text>\n</svg>"
        }
      },
      {
        explanation: "Since we know the adjacent side and hypotenuse, use the cosine ratio: \\(\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}\\).",
        workingOut: "\\(\\cos 60^\\circ = \\dfrac{x}{50}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">adj</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">50 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">60°</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the exact value \\(\\cos 60^\\circ = \\dfrac{1}{2}\\) — this is one of the standard 30°/45°/60° exact values, no calculator decimal needed.",
        workingOut: "\\(\\dfrac{1}{2} = \\dfrac{x}{50}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">adj</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">50 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">60°</text>\n</svg>"
        }
      },
      {
        explanation: "Solve for \\(x\\) by multiplying both sides by \\(50\\). Because \\(\\cos 60^\\circ\\) is exact, the answer is exact — no rounding required.",
        workingOut: "\\(x = 50 \\times \\dfrac{1}{2} = 25\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">x = 25 cm</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">60°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">adj = ?</text>\n<text x=\"257\" y=\"126\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 cm</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">60°</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(21.7\\)",
        imageUrl: ""
      },
      {
        text: "\\(28.9\\)",
        imageUrl: ""
      },
      {
        text: "\\(25\\)",
        imageUrl: ""
      },
      {
        text: "\\(27.5\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q3",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "\\(AB = 8\\) cm, \\(BC = 6\\) cm and \\(AC = 12\\) cm. Find the magnitude of each of the angles of triangle \\(ABC\\) correct to one decimal place.\n\nEnter your answer as three numbers separated by commas: \\(\\angle A\\), \\(\\angle B\\), \\(\\angle C\\).",
    a: 3,
    answer: "3",
    hint: "Use the rearranged cosine rule for each angle: \\(\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}\\).",
    solution: "\\(\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}\\)\n\\(\\cos A = \\dfrac{12^2 + 8^2 - 6^2}{2(12)(8)} = \\dfrac{172}{192} \\approx 0.8958 \\implies A \\approx 26.4^\\circ\\)\n\\(\\cos B = \\dfrac{a^2 + c^2 - b^2}{2ac} = \\dfrac{6^2 + 8^2 - 12^2}{2(6)(8)} = \\dfrac{-44}{96} \\approx -0.4583 \\implies B \\approx 117.3^\\circ\\)\n\\(\\angle C = 180^\\circ - 26.4^\\circ - 117.3^\\circ = 36.3^\\circ\\)\n\\(\\angle A \\approx 26.4^\\circ, \\quad \\angle B \\approx 117.3^\\circ, \\quad \\angle C \\approx 36.3^\\circ\\)",
    solutionSteps: [
      {
        explanation: "All three sides are known (SSS), so no side is opposite a paired known angle — the Sine Rule cannot be used here. Use the rearranged Cosine Rule for each angle. Let \\(a = BC = 6\\), \\(b = AC = 12\\), \\(c = AB = 8\\), so that side \\(a\\) is opposite \\(\\angle A\\), etc.",
        workingOut: "\\(\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 8 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 12 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 6 cm</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the sides into the formula for \\(\\angle A\\) and evaluate.",
        workingOut: "\\(\\cos A = \\dfrac{12^2 + 8^2 - 6^2}{2(12)(8)} = \\dfrac{172}{192} \\approx 0.8958 \\implies A \\approx 26.4^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 8 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 12 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 6 cm</text>\n<text x=\"158.5\" y=\"217.0\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 26.4°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Repeat the rearranged Cosine Rule for \\(\\angle B\\), using \\(b\\) as the side opposite \\(B\\). Pitfall: keep full calculator precision for \\(A\\) here — don't re-enter the rounded \\(26.4^\\circ\\) into later steps.",
        workingOut: "\\(\\cos B = \\dfrac{a^2 + c^2 - b^2}{2ac} = \\dfrac{6^2 + 8^2 - 12^2}{2(6)(8)} = \\dfrac{-44}{96} \\approx -0.4583 \\implies B \\approx 117.3^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 8 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 12 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 6 cm</text>\n<text x=\"158.5\" y=\"217.0\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 26.4°</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 117.3°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Find \\(\\angle C\\) using the angle sum of a triangle (\\(180^\\circ\\)) rather than a third Cosine Rule calculation, since \\(A\\) and \\(B\\) are already known.",
        workingOut: "\\(\\angle C = 180^\\circ - 26.4^\\circ - 117.3^\\circ = 36.3^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 8 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 12 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 6 cm</text>\n<text x=\"158.5\" y=\"217.0\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 26.4°</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 117.3°</text>\n<text x=\"348.2\" y=\"136.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠C ≈ 36.3°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "State all three angles together, correct to one decimal place, in the order \\(\\angle A, \\angle B, \\angle C\\).",
        workingOut: "\\(\\angle A \\approx 26.4^\\circ, \\quad \\angle B \\approx 117.3^\\circ, \\quad \\angle C \\approx 36.3^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 8 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 12 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 6 cm</text>\n<text x=\"158.5\" y=\"217.0\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 26.4°</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 117.3°</text>\n<text x=\"348.2\" y=\"136.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠C ≈ 36.3°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 8 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 12 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 6 cm</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(39.6, 21.1, 119.3\\)",
        imageUrl: ""
      },
      {
        text: "\\(153.6, 13.2, 13.2\\)",
        imageUrl: ""
      },
      {
        text: "\\(21.1, 39.6, 119.3\\)",
        imageUrl: ""
      },
      {
        text: "\\(26.4, 117.3, 36.3\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q4a",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "A triangular region is enclosed by straight fences of lengths \\(42.8\\) metres, \\(56.6\\) metres and \\(72.1\\) metres.\n\nFind the angle between the \\(42.8\\) m and \\(56.6\\) m fences, correct to the nearest degree.",
    a: 2,
    answer: "2",
    hint: "Use the rearranged cosine rule. The angle is opposite the longest side.",
    solution: "\\(\\cos C = \\dfrac{a^2 + b^2 - c^2}{2ab}\\)\n\\(\\cos C = \\dfrac{42.8^2 + 56.6^2 - 72.1^2}{2(42.8)(56.6)}\\)\n\\(\\cos C = \\dfrac{1831.84 + 3203.56 - 5198.41}{4844.96} = \\dfrac{-163.01}{4844.96} \\approx -0.03365\\)\n\\(\\angle C = \\cos^{-1}(-0.03365) \\approx 91.93^\\circ \\approx 92^\\circ\\)",
    solutionSteps: [
      {
        explanation: "The angle between the \\(42.8\\) m and \\(56.6\\) m fences is the included angle between those two known sides, opposite the third fence (\\(72.1\\) m). Label \\(a = 42.8\\), \\(b = 56.6\\), \\(c = 72.1\\), and find \\(\\angle C\\) (opposite \\(c\\)) using the rearranged Cosine Rule since all three sides (SSS) are known.",
        workingOut: "\\(\\cos C = \\dfrac{a^2 + b^2 - c^2}{2ab}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">42.8 m</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">∠B = ?</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the three fence lengths.",
        workingOut: "\\(\\cos C = \\dfrac{42.8^2 + 56.6^2 - 72.1^2}{2(42.8)(56.6)}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">42.8 m</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#e11d48\">∠B</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate the numerator and denominator. Note the numerator is negative, so \\(\\angle C\\) will turn out to be obtuse (just over \\(90^\\circ\\)) — this is expected since \\(72.1\\) m is close to the sum-of-the-other-two-sides limit.",
        workingOut: "\\(\\cos C = \\dfrac{1831.84 + 3203.56 - 5198.41}{4844.96} = \\dfrac{-163.01}{4844.96} \\approx -0.03365\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">42.8 m</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#e11d48\">∠B</text>\n</svg>"
        }
      },
      {
        explanation: "Apply inverse cosine to solve for the angle, then round to the nearest degree.",
        workingOut: "\\(\\angle C = \\cos^{-1}(-0.03365) \\approx 91.93^\\circ \\approx 92^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">42.8 m</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 92°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">42.8 m</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">∠B = ?</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(79.7\\)",
        imageUrl: ""
      },
      {
        text: "\\(106.2\\)",
        imageUrl: ""
      },
      {
        text: "\\(92\\)",
        imageUrl: ""
      },
      {
        text: "\\(101.2\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q4b",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "A triangular region is enclosed by straight fences of lengths \\(42.8\\) metres, \\(56.6\\) metres and \\(72.1\\) metres.\n\nFind the area of the region, correct to the nearest square metre.",
    a: 3,
    answer: "3",
    hint: "Use the area formula: \\(\\text{Area} = \\frac{1}{2}bc \\sin A\\), using the unrounded angle.",
    solution: "\\(\\text{Area} = \\dfrac{1}{2}(42.8)(56.6)\\sin C\\)\n\\(\\text{Area} = \\dfrac{1}{2}(42.8)(56.6) \\sin(91.93^\\circ)\\)\n\\(\\text{Area} = 1211.24 \\times \\sin(91.93^\\circ) = 1211.24 \\times 0.99943 \\approx 1210.55\\text{ m}^2\\)\n\\(\\text{Area} \\approx 1211\\text{ m}^2\\)",
    solutionSteps: [
      {
        explanation: "The area of a triangle can be found from two sides and the included angle: \\(\\text{Area} = \\dfrac{1}{2}ab\\sin C\\). Use the two given fence lengths \\(42.8\\) m and \\(56.6\\) m with the included angle \\(C \\approx 91.93^\\circ\\) found in the previous part. Pitfall: use the unrounded angle (\\(91.93^\\circ\\), not \\(92^\\circ\\)) to avoid compounding rounding error.",
        workingOut: "\\(\\text{Area} = \\dfrac{1}{2}(42.8)(56.6)\\sin C\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">BC = ?</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">≈92°</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the unrounded angle \\(C \\approx 91.93^\\circ\\).",
        workingOut: "\\(\\text{Area} = \\dfrac{1}{2}(42.8)(56.6) \\sin(91.93^\\circ)\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">BC</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">≈92°</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate step by step: first the product of the two sides halved, then multiply by the sine value.",
        workingOut: "\\(\\text{Area} = 1211.24 \\times \\sin(91.93^\\circ) = 1211.24 \\times 0.99943 \\approx 1210.55\\text{ m}^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">BC</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">≈92°</text>\n</svg>"
        }
      },
      {
        explanation: "Round to the nearest square metre. Since \\(1210.55\\) is above the halfway point, it rounds up to \\(1211\\).",
        workingOut: "\\(\\text{Area} \\approx 1211\\text{ m}^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">Area ≈ 1211 m²</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">≈92°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">56.6 m</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">72.1 m</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">BC = ?</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">≈92°</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(2422.0\\)",
        imageUrl: ""
      },
      {
        text: "\\(1398.3\\)",
        imageUrl: ""
      },
      {
        text: "\\(1453.2\\)",
        imageUrl: ""
      },
      {
        text: "\\(1211\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q5",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "In a triangle \\(ABC\\), \\(\\sin A = \\frac{1}{8}\\), \\(\\sin B = \\frac{3}{4}\\) and \\(a = 8\\). Find, using the sine rule, the value of \\(b\\).",
    a: 1,
    answer: "1",
    hint: "Substitute the given values into the sine rule: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B}\\).",
    solution: "\\(\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}\\)\n\\(\\dfrac{8}{\\frac{1}{8}} = \\dfrac{b}{\\frac{3}{4}}\\)\n\\(8 \\div \\dfrac{1}{8} = 8 \\times 8 = 64 \\implies 64 = \\dfrac{b}{\\frac{3}{4}}\\)\n\\(b = 64 \\times \\dfrac{3}{4} = 48\\)",
    solutionSteps: [
      {
        explanation: "This is a direct Sine Rule substitution — the sines of \\(A\\) and \\(B\\) and the side \\(a\\) are already given, so there is no need to find either angle in degrees first. Set up the Sine Rule with \\(b\\) as the unknown.",
        workingOut: "\\(\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the given values \\(a = 8\\), \\(\\sin A = \\dfrac{1}{8}\\), \\(\\sin B = \\dfrac{3}{4}\\) directly.",
        workingOut: "\\(\\dfrac{8}{\\frac{1}{8}} = \\dfrac{b}{\\frac{3}{4}}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the left-hand side: dividing by \\(\\frac{1}{8}\\) is the same as multiplying by \\(8\\).",
        workingOut: "\\(8 \\div \\dfrac{1}{8} = 8 \\times 8 = 64 \\implies 64 = \\dfrac{b}{\\frac{3}{4}}\\)",
        graphData: null
      },
      {
        explanation: "Solve for \\(b\\) by multiplying both sides by \\(\\frac{3}{4}\\). Pitfall: don't confuse this direct substitution with a case requiring \\(\\sin^{-1}\\) — no angle in degrees is needed anywhere in this question.",
        workingOut: "\\(b = 64 \\times \\dfrac{3}{4} = 48\\)",
        graphData: null
      }
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(41.6\\)",
        imageUrl: ""
      },
      {
        text: "\\(48\\)",
        imageUrl: ""
      },
      {
        text: "\\(55.4\\)",
        imageUrl: ""
      },
      {
        text: "\\(52.8\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q6",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "In a triangle \\(ABC\\), \\(a = 5\\), \\(b = 6\\) and \\(\\cos C = \\frac{1}{5}\\). Find \\(c\\).",
    a: 0,
    answer: "0",
    hint: "Use the cosine rule: \\(c^2 = a^2 + b^2 - 2ab \\cos C\\).",
    solution: "\\(c^2 = a^2 + b^2 - 2ab\\cos C\\)\n\\(c^2 = 5^2 + 6^2 - 2(5)(6)\\left(\\dfrac{1}{5}\\right)\\)\n\\(c^2 = 61 - 12 = 49\\)\n\\(c = \\sqrt{49} = 7\\)",
    solutionSteps: [
      {
        explanation: "Two sides (\\(a = 5\\), \\(b = 6\\)) and the included angle's cosine (\\(\\cos C = \\frac{1}{5}\\)) are given directly, so use the Cosine Rule to find the third side \\(c\\). Pitfall: this is a direct substitution — there is no need to evaluate \\(\\cos^{-1}\\dfrac{1}{5}\\) to find \\(C\\) in degrees first.",
        workingOut: "\\(c^2 = a^2 + b^2 - 2ab\\cos C\\)",
        graphData: null
      },
      {
        explanation: "Substitute the given values.",
        workingOut: "\\(c^2 = 5^2 + 6^2 - 2(5)(6)\\left(\\dfrac{1}{5}\\right)\\)",
        graphData: null
      },
      {
        explanation: "Evaluate: \\(5^2 + 6^2 = 61\\), and \\(2(5)(6)\\left(\\frac{1}{5}\\right) = \\frac{60}{5} = 12\\).",
        workingOut: "\\(c^2 = 61 - 12 = 49\\)",
        graphData: null
      },
      {
        explanation: "Take the square root of both sides to find \\(c\\) (take the positive root, since \\(c\\) is a length).",
        workingOut: "\\(c = \\sqrt{49} = 7\\)",
        graphData: null
      }
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(7\\)",
        imageUrl: ""
      },
      {
        text: "\\(6.1\\)",
        imageUrl: ""
      },
      {
        text: "\\(8.1\\)",
        imageUrl: ""
      },
      {
        text: "\\(7.7\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q7",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the area of triangle \\(XYZ\\), correct to two decimal places.\n\nThe triangle has sides \\(x = 8.3\\) cm, \\(z = 6.2\\) cm and an included angle \\(\\angle Y = 72°\\).",
    a: 2,
    answer: "2",
    hint: "Use the area formula: \\(\\text{Area} = \\frac{1}{2}ac \\sin B\\).",
    solution: "Area = ½xz sin Y = ½(8.3)(6.2) sin 72° ≈ 24.47 cm² (2 d.p.)",
    solutionSteps: [
      {
        explanation: "Triangle XYZ has two known sides meeting at the known angle Y: side x = YZ = 8.3 cm and side z = XY = 6.2 cm, with the included angle \\(\\angle Y = 72°\\) between them. When the angle you know sits between the two known sides, use the area formula \\(\\text{Area} = \\frac{1}{2}xz\\sin Y\\) rather than trying to find a missing side first.",
        workingOut: "\\(\\text{Area} = \\frac{1}{2}xz \\sin Y\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AB = ?</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">z = 6.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">x = 8.3 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠Y = 72°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Z</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Y</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute \\(x = 8.3\\), \\(z = 6.2\\) and \\(Y = 72°\\) into the formula.",
        workingOut: "\\(\\text{Area} = \\frac{1}{2}(8.3)(6.2)\\sin 72°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">AB</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">z = 6.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">x = 8.3 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">∠Y = 72°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Z</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Y</text>\n</svg>"
        }
      },
      {
        explanation: "Multiply the two side lengths first, then multiply by \\(\\sin 72°\\) (keep full calculator precision — don't round \\(\\sin 72°\\) before multiplying).",
        workingOut: "\\(\\text{Area} = 25.73 \\times \\sin 72° \\approx 25.73 \\times 0.9511\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">AB</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">z = 6.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">x = 8.3 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">∠Y = 72°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Z</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Y</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate and round the final area to two decimal places, as the question asks.",
        workingOut: "\\(\\text{Area} \\approx 24.47 \\text{ cm}^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">Area ≈ 24.47 cm²</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">z = 6.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">x = 8.3 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠Y = 72°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Z</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Y</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AB = ?</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">z = 6.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">x = 8.3 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠Y = 72°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Z</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">Y</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(36.7\\)",
        imageUrl: ""
      },
      {
        text: "\\(155.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(24.47\\)",
        imageUrl: ""
      },
      {
        text: "\\(19.6\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q8a",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "For a triangle \\(ABC\\), \\(AC = 16.2\\) cm, \\(AB = 18.6\\) cm and \\(\\angle ACB = 60°\\). Find, correct to one decimal place:\n\n\\(\\angle ABC\\)",
    a: 0,
    answer: "0",
    hint: "Use the sine rule: \\(\\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\).",
    solution: "sin B = 16.2 sin60°/18.6 ≈ 0.7543 → B ≈ 48.96°. Since AB (opposite C=60°) is the longest side, C is the largest angle, so the acute solution B ≈ 49.0° is the valid one (not the obtuse 131.0°).",
    solutionSteps: [
      {
        explanation: "In triangle ABC, \\(AC = b = 16.2\\) cm (opposite \\(\\angle B\\)), \\(AB = c = 18.6\\) cm (opposite \\(\\angle C\\)), and \\(\\angle C = 60°\\) is given. Since angle C is not between the two known sides AC and AB (it is opposite AB), this is an SSA setup — use the Sine Rule, taking the reciprocal form so the unknown \\(\\sin B\\) sits on its own.",
        workingOut: "\\(\\frac{\\sin B}{b} = \\frac{\\sin C}{c}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">∠B = ?</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute \\(b = 16.2\\), \\(c = 18.6\\) and \\(C = 60°\\).",
        workingOut: "\\(\\frac{\\sin B}{16.2} = \\frac{\\sin 60°}{18.6}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 16.2 cm</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#e11d48\">∠B</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange to isolate \\(\\sin B\\), keeping full precision.",
        workingOut: "\\(\\sin B = \\frac{16.2 \\sin 60°}{18.6} \\approx 0.7543\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 16.2 cm</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#e11d48\">∠B</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "This is the ambiguous case (SSA): \\(\\sin^{-1}(0.7543)\\) gives an acute solution \\(48.96°\\) and, in general, a possible obtuse solution \\(180° - 48.96° = 131.04°\\). Decide which is geometrically valid by comparing sides: AB (\\(c = 18.6\\)) is the longest given side, so the angle opposite it, \\(\\angle C = 60°\\), must be the largest angle in the triangle. That rules out \\(B = 131.04°\\) (it would exceed \\(\\angle C\\), which is impossible since \\(B\\) is opposite the shorter side \\(b = 16.2 < c\\)). Only the acute solution is valid.",
        workingOut: "\\(\\angle B = \\sin^{-1}(0.7543) \\approx 48.96° \\Rightarrow \\angle B \\approx 49.0°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">∠B = ?</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(49.0\\)",
        imageUrl: ""
      },
      {
        text: "\\(73.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(131.0\\)",
        imageUrl: ""
      },
      {
        text: "\\(39.2\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q8b",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "For a triangle \\(ABC\\), \\(AC = 16.2\\) cm, \\(AB = 18.6\\) cm and \\(\\angle ACB = 60°\\). Find, correct to one decimal place:\n\n\\(\\angle BAC\\)",
    a: 1,
    answer: "1",
    hint: "The angles in a triangle add up to \\(180°\\).",
    solution: "A = 180° − 48.96° − 60° ≈ 71.04° ≈ 71.0° (1 d.p.)",
    solutionSteps: [
      {
        explanation: "From part (a), \\(\\angle ABC = \\angle B \\approx 49.0°\\) (unrounded \\(48.96°\\)), and \\(\\angle ACB = \\angle C = 60°\\) is given. Use the angle sum of a triangle to find \\(\\angle BAC = \\angle A\\).",
        workingOut: "\\(\\angle A + \\angle B + \\angle C = 180°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">∠A = ?</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known angles — use the unrounded value of B (\\(48.96°\\)) to avoid compounding rounding error, then round the final answer only.",
        workingOut: "\\(\\angle A + 48.96° + 60° = 180°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 16.2 cm</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#e11d48\">∠A</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Solve for \\(\\angle A\\) and round to one decimal place.",
        workingOut: "\\(\\angle A = 180° - 108.96° \\approx 71.04° \\Rightarrow \\angle A \\approx 71.0°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 71.0°</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">∠A = ?</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(106.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(71.0\\)",
        imageUrl: ""
      },
      {
        text: "\\(109.0\\)",
        imageUrl: ""
      },
      {
        text: "\\(56.8\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q8c",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "For a triangle \\(ABC\\), \\(AC = 16.2\\) cm, \\(AB = 18.6\\) cm and \\(\\angle ACB = 60°\\). Find, correct to one decimal place:\n\nThe length of \\(CB\\)",
    a: 1,
    answer: "1",
    hint: "Use the sine rule with the newly found angle \\(A\\).",
    solution: "a/sin71.04° = 18.6/sin60° → a ≈ 20.31 ≈ 20.3 cm (1 d.p.)",
    solutionSteps: [
      {
        explanation: "From parts (a) and (b), \\(\\angle A = \\angle BAC \\approx 71.04°\\) and \\(\\angle C = 60°\\). The side \\(CB = a\\) is opposite \\(\\angle A\\), and \\(AB = c = 18.6\\) cm is opposite \\(\\angle C\\), so use the Sine Rule with this angle-side pair.",
        workingOut: "\\(\\frac{a}{\\sin A} = \\frac{c}{\\sin C}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">BC = ?</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 71.0°</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute \\(A \\approx 71.04°\\), \\(c = 18.6\\) and \\(C = 60°\\).",
        workingOut: "\\(\\frac{a}{\\sin 71.04°} = \\frac{18.6}{\\sin 60°}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 16.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">BC</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 71.0°</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange to solve for \\(a\\), then round to one decimal place.",
        workingOut: "\\(a = \\frac{18.6 \\sin 71.04°}{\\sin 60°} \\approx 20.31 \\Rightarrow CB \\approx 20.3 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">CB ≈ 20.3 cm</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 71.0°</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">BC = ?</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 71.0°</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(30.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(20.3\\)",
        imageUrl: ""
      },
      {
        text: "\\(159.7\\)",
        imageUrl: ""
      },
      {
        text: "\\(16.2\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q8d",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "For a triangle \\(ABC\\), \\(AC = 16.2\\) cm, \\(AB = 18.6\\) cm and \\(\\angle ACB = 60°\\). Find, correct to one decimal place:\n\nThe area of the triangle",
    a: 2,
    answer: "2",
    hint: "Use the area formula: \\(\\text{Area} = \\frac{1}{2}bc \\sin A\\).",
    solution: "Area = ½(16.2)(20.31) sin60° ≈ 142.5 cm² (1 d.p.)",
    solutionSteps: [
      {
        explanation: "From part (c), \\(CB = a \\approx 20.31\\) cm. Together with \\(AC = b = 16.2\\) cm, these are the two sides that meet at vertex C, with the given angle \\(\\angle ACB = 60°\\) included between them — so the area formula \\(\\text{Area} = \\frac{1}{2}ab\\sin C\\) applies directly (no need to re-derive via AB and \\(\\angle A\\), though that would give the same result).",
        workingOut: "\\(\\text{Area} = \\frac{1}{2}(AC)(CB)\\sin(\\angle ACB) = \\frac{1}{2}ab\\sin C\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">BC = ?</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 71.0°</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute \\(b = AC = 16.2\\), \\(a = CB \\approx 20.31\\) and \\(C = 60°\\).",
        workingOut: "\\(\\text{Area} = \\frac{1}{2}(16.2)(20.31)\\sin 60°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 16.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">BC</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 71.0°</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate and round to one decimal place.",
        workingOut: "\\(\\text{Area} \\approx 164.51 \\times 0.8660 \\approx 142.5 \\text{ cm}^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">Area ≈ 142.5 cm²</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 71.0°</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 18.6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 16.2 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">BC = ?</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠A ≈ 71.0°</text>\n<text x=\"318\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠B ≈ 49.0°</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">∠C = 60°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(213.8\\)",
        imageUrl: ""
      },
      {
        text: "\\(37.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(142.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(114.0\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q9",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "The angle of depression from a point \\(A\\) to a ship at point \\(B\\) is \\(10°\\). If the distance \\(BX\\) from \\(B\\) to the foot of the cliff at \\(X\\) is \\(800\\) m, find the height of the cliff \\(AX\\), correct to the nearest metre.",
    a: 3,
    answer: "3",
    hint: "The angle of elevation from \\(B\\) to \\(A\\) is equal to the angle of depression (\\(10°\\)). Use the tangent ratio.",
    solution: "The angle of elevation from \\(B\\) to \\(A\\) is equal to the angle of depression from \\(A\\) to \\(B\\) (alternate angles between the two parallel horizontal lines), so \\(\\angle ABX = 10°\\).\nIn right-angled triangle \\(AXB\\) (right angle at \\(X\\)):\n\\(\\tan 10° = \\frac{AX}{BX} = \\frac{AX}{800}\\)\n\\(AX = 800 \\tan 10° \\approx 800 \\times 0.17633 \\approx 141.06\\)\n\nCorrect to the nearest metre, the height is \\(141\\) m.",
    solutionSteps: [
      {
        explanation: "The horizontal line through \\(A\\) is parallel to the horizontal ground \\(XB\\), so the angle of depression from \\(A\\) to \\(B\\) and the angle of elevation from \\(B\\) to \\(A\\) are alternate angles — they are equal. This gives us a usable angle inside right-angled triangle \\(AXB\\).",
        workingOut: "\\(\\angle ABX = 10°\\) (alternate angles, horizontal at \\(A\\) \\(\\parallel\\) horizontal at \\(X,B\\))",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BX = 800 m</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n</svg>"
        }
      },
      {
        explanation: "Triangle \\(AXB\\) is right-angled at \\(X\\) (the cliff meets the ground at a right angle). Relative to the \\(10°\\) angle at \\(B\\): \\(BX\\) is the side adjacent to it, and \\(AX\\) (the cliff height) is the side opposite it.",
        workingOut: "\\(\\text{Adjacent} = BX = 800 \\text{ m}, \\quad \\text{Opposite} = AX\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BX = 800 m</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">10°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n</svg>"
        }
      },
      {
        explanation: "Since we know the adjacent side and want the opposite side, use the tangent ratio: \\(\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}\\).",
        workingOut: "\\(\\tan 10° = \\frac{AX}{800}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BX = 800 m</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">opp</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">10°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange to make \\(AX\\) the subject and evaluate, rounding only at the very end to the nearest metre.",
        workingOut: "\\(AX = 800 \\tan 10° \\approx 800 \\times 0.17633 \\approx 141.06 \\implies AX \\approx 141 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BX = 800 m</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">AX ≈ 141 m</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 230 L 350 230 L 130 70 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"230\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"230\" x2=\"130\" y2=\"70\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"70\" x2=\"350\" y2=\"230\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 130 212 L 148 212 L 148 230\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"240\" y=\"258\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BX = 800 m</text>\n<text x=\"120\" y=\"150\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">opp = ?</text>\n<text x=\"303\" y=\"207\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10°</text>\n<text x=\"103\" y=\"256\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">X</text>\n<text x=\"367\" y=\"256\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"115\" y=\"53\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(122.1\\)",
        imageUrl: ""
      },
      {
        text: "\\(162.8\\)",
        imageUrl: ""
      },
      {
        text: "\\(155.1\\)",
        imageUrl: ""
      },
      {
        text: "\\(141\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q10a",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Calculate the length of the unknown side \\(AC\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle A = 51°\\), \\(\\angle B = 38°\\), and \\(AB = 7\\) cm.",
    a: 3,
    answer: "3",
    hint: "Find the third angle first, then use the sine rule.",
    solution: "\\(\\angle C = 180° - 51° - 38° = 91°\\)\nUsing the sine rule to find \\(AC\\) (\\(b\\)):\n\\(\\frac{b}{\\sin 38°} = \\frac{7}{\\sin 91°}\\)\n\\(b = \\frac{7 \\sin 38°}{\\sin 91°} \\approx \\frac{4.3096}{0.9998} \\approx 4.310\\)\n\nCorrect to two decimal places, \\(AC = 4.31\\) cm.",
    solutionSteps: [
      {
        explanation: "First, find \\(\\angle C\\) using the angle sum of a triangle. The diagram shows the given angles at \\(A\\) and \\(B\\), with \\(\\angle C\\) still unknown.",
        workingOut: "\\(\\angle C = 180^\\circ - 51^\\circ - 38^\\circ = 91^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 390 249\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 55 189 L 335 189 L 163.56 55 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"96.4464\" y=\"174.70666666666668\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#475569\">51°</text>\n<text x=\"286.8464\" y=\"174.70666666666668\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#475569\">38°</text>\n<text x=\"195\" y=\"215\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\">AB = 7 cm</text>\n<text x=\"170.6864\" y=\"85.37333333333333\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">∠C = ?</text>\n\n    <text x=\"35\" y=\"209\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n    <text x=\"343\" y=\"209\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n    <text x=\"157.56\" y=\"43\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Use the Sine Rule to find side \\(b\\) (which is \\(AC\\)), now that \\(\\angle C = 91^\\circ\\) is known. Each side is paired with the angle opposite it.",
        workingOut: "\\(\\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 390 249\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 55 189 L 335 189 L 163.56 55 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"96.4464\" y=\"174.70666666666668\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#475569\">51°</text>\n<text x=\"286.8464\" y=\"174.70666666666668\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#475569\">38°</text>\n<text x=\"170.2672\" y=\"83.58666666666667\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">91°</text>\n<text x=\"195\" y=\"215\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\">AB = 7 cm</text>\n<text x=\"127.92817168877514\" y=\"137.10780237711515\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"600\" fill=\"#4f46e5\">b = AC</text>\n<text x=\"234.5002626076268\" y=\"140.90924013842135\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"600\" fill=\"#4f46e5\">a = BC</text>\n\n    <text x=\"35\" y=\"209\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n    <text x=\"343\" y=\"209\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n    <text x=\"157.56\" y=\"43\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known values: side \\(c = AB = 7\\), \\(\\angle B = 38^\\circ\\) (numerator), and \\(\\angle C = 91^\\circ\\) (denominator).",
        workingOut: "\\(\\frac{b}{\\sin 38^\\circ} = \\frac{7}{\\sin 91^\\circ}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 390 249\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 55 189 L 335 189 L 163.56 55 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"55\" y1=\"189\" x2=\"163.56\" y2=\"55\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<text x=\"286.8464\" y=\"174.70666666666668\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#e11d48\">38°</text>\n<text x=\"170.2672\" y=\"83.58666666666667\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">91°</text>\n<text x=\"195\" y=\"215\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\">AB = 7 cm</text>\n<text x=\"131.03620030357098\" y=\"139.62576943996766\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#e11d48\">b (unknown)</text>\n\n    <text x=\"35\" y=\"209\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n    <text x=\"343\" y=\"209\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n    <text x=\"157.56\" y=\"43\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange and solve for \\(b\\), the length of \\(AC\\).",
        workingOut: "\\(b = \\frac{7 \\sin 38^\\circ}{\\sin 91^\\circ} \\approx 4.31 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 390 249\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 55 189 L 335 189 L 163.56 55 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"55\" y1=\"189\" x2=\"163.56\" y2=\"55\" stroke=\"#16a34a\" stroke-width=\"3.5\"/>\n<text x=\"96.4464\" y=\"174.70666666666668\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#475569\">51°</text>\n<text x=\"286.8464\" y=\"174.70666666666668\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#475569\">38°</text>\n<text x=\"170.2672\" y=\"83.58666666666667\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">91°</text>\n<text x=\"195\" y=\"215\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\">AB = 7 cm</text>\n<text x=\"132.59021461096893\" y=\"140.8847529713939\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">✓ AC = 4.31 cm</text>\n\n    <text x=\"35\" y=\"209\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n    <text x=\"343\" y=\"209\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n    <text x=\"157.56\" y=\"43\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(6.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(175.7\\)",
        imageUrl: ""
      },
      {
        text: "\\(3.4\\)",
        imageUrl: ""
      },
      {
        text: "\\(4.31\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q10b",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Calculate the length of the unknown side \\(BC\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle A = 48°\\), \\(AC = 4\\) cm, and \\(AB = 6\\) cm.",
    a: 1,
    answer: "1",
    hint: "Use the cosine rule to find the third side.",
    solution: "Triangle \\(ABC\\) has \\(\\angle A = 48°\\), included between the two known sides \\(AB = 6\\) and \\(AC = 4\\) (SAS), so use the Cosine Rule to find the side opposite \\(A\\), which is \\(a = BC\\):\n\\(a^2 = b^2 + c^2 - 2bc\\cos A = 4^2 + 6^2 - 2(4)(6)\\cos 48°\\)\n\\(a^2 = 16 + 36 - 48(0.66913) = 52 - 32.118 = 19.882\\)\n\\(a = \\sqrt{19.882} \\approx 4.4589\\)\n\nCorrect to two decimal places, \\(BC = 4.46\\) cm.",
    solutionSteps: [
      {
        explanation: "\\(\\angle A = 48°\\) is included between the two known sides \\(AB\\) and \\(AC\\) — this is the SAS case, so the Sine Rule cannot be used directly (there's no angle-side opposite pair). Use the Cosine Rule instead to find the third side \\(a = BC\\), which is opposite \\(\\angle A\\).",
        workingOut: "\\(a^2 = b^2 + c^2 - 2bc\\cos A\\), where \\(b = AC = 4\\), \\(c = AB = 6\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 4 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">BC = ?</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">48°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known side lengths and the included angle.",
        workingOut: "\\(a^2 = 4^2 + 6^2 - 2(4)(6)\\cos 48°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AB = 6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 4 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">BC</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">48°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Simplify step by step: square the sides, multiply out the cosine term, and subtract — keeping full calculator precision (not the rounded \\(0.67\\)) until the final answer.",
        workingOut: "\\(a^2 = 16 + 36 - 48\\cos 48° = 52 - 48(0.66913) = 52 - 32.118 = 19.882\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AB = 6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 4 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">BC</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">48°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Take the square root of both sides to solve for \\(a = BC\\), rounding to two decimal places as required.",
        workingOut: "\\(a = \\sqrt{19.882} \\approx 4.4589 \\implies BC \\approx 4.46 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 4 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">BC ≈ 4.46 cm</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">48°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 6 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 4 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">BC = ?</text>\n<text x=\"152\" y=\"217\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">48°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(6.7\\)",
        imageUrl: ""
      },
      {
        text: "\\(4.46\\)",
        imageUrl: ""
      },
      {
        text: "\\(175.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(3.6\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q10c",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Calculate the length of the unknown side \\(AB\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle C = 80°\\), \\(AC = 10\\) cm, and \\(BC = 7\\) cm.",
    a: 1,
    answer: "1",
    hint: "Use the cosine rule: \\(c^2 = a^2 + b^2 - 2ab \\cos C\\).",
    solution: "Triangle \\(ABC\\) has \\(\\angle C = 80°\\), included between the two known sides \\(AC = 10\\) and \\(BC = 7\\) (SAS), so use the Cosine Rule to find the side opposite \\(C\\), which is \\(c = AB\\):\n\\(c^2 = a^2 + b^2 - 2ab\\cos C = 7^2 + 10^2 - 2(7)(10)\\cos 80°\\)\n\\(c^2 = 49 + 100 - 140(0.17365) = 149 - 24.31 = 124.69\\)\n\\(c = \\sqrt{124.69} \\approx 11.166\\)\n\nCorrect to two decimal places, \\(AB = 11.17\\) cm.",
    solutionSteps: [
      {
        explanation: "\\(\\angle C = 80°\\) is included between the two known sides \\(AC\\) and \\(BC\\) — SAS, so the Cosine Rule is needed to find the third side \\(c = AB\\), which is opposite \\(\\angle C\\).",
        workingOut: "\\(c^2 = a^2 + b^2 - 2ab\\cos C\\), where \\(a = BC = 7\\), \\(b = AC = 10\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AB = ?</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 10 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 7 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">80°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known side lengths and the included angle.",
        workingOut: "\\(c^2 = 7^2 + 10^2 - 2(7)(10)\\cos 80°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">AB</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 10 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BC = 7 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">80°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Simplify: square the sides, evaluate the cosine term at full precision, and subtract.",
        workingOut: "\\(c^2 = 49 + 100 - 140\\cos 80° = 149 - 140(0.17365) = 149 - 24.31 = 124.69\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">AB</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 10 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BC = 7 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">80°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Take the square root to solve for \\(c = AB\\), rounding to two decimal places.",
        workingOut: "\\(c = \\sqrt{124.69} \\approx 11.166 \\implies AB \\approx 11.17 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">AB ≈ 11.17 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 10 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 7 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">80°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AB = ?</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 10 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 7 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">80°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(16.8\\)",
        imageUrl: ""
      },
      {
        text: "\\(11.17\\)",
        imageUrl: ""
      },
      {
        text: "\\(168.8\\)",
        imageUrl: ""
      },
      {
        text: "\\(8.9\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q10d",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Calculate the length of the unknown side \\(AC\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle B = 120°\\), \\(AB = 10\\) cm, and \\(BC = 12\\) cm.",
    a: 2,
    answer: "2",
    hint: "Use the cosine rule. Note that \\(\\cos 120° = -0.5\\).",
    solution: "Triangle \\(ABC\\) has \\(\\angle B = 120°\\), included between the two known sides \\(AB = 10\\) and \\(BC = 12\\) (SAS), so use the Cosine Rule to find the side opposite \\(B\\), which is \\(b = AC\\). Since \\(B\\) is obtuse, \\(\\cos 120° = -0.5\\) is negative, so the \\(-2ac\\cos B\\) term becomes positive — the third side ends up longer than it would for an acute angle:\n\\(b^2 = a^2 + c^2 - 2ac\\cos B = 12^2 + 10^2 - 2(12)(10)\\cos 120°\\)\n\\(b^2 = 144 + 100 - 240(-0.5) = 244 + 120 = 364\\)\n\\(b = \\sqrt{364} \\approx 19.079\\)\n\nCorrect to two decimal places, \\(AC = 19.08\\) cm. As a sanity check: \\(b^2 = 364\\) is indeed greater than \\(a^2 + c^2 = 244\\), confirming the obtuse-angle case was applied correctly (for an acute or right angle, \\(b^2 \\le a^2+c^2\\)).",
    solutionSteps: [
      {
        explanation: "\\(\\angle B = 120°\\) is included between the two known sides \\(AB\\) and \\(BC\\) — SAS, so use the Cosine Rule to find the third side \\(b = AC\\), which is opposite \\(\\angle B\\).",
        workingOut: "\\(b^2 = a^2 + c^2 - 2ac\\cos B\\), where \\(a = BC = 12\\), \\(c = AB = 10\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 10 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AC = ?</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 12 cm</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">120°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known side lengths and the included angle.",
        workingOut: "\\(b^2 = 12^2 + 10^2 - 2(12)(10)\\cos 120°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AB = 10 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">AC</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BC = 12 cm</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">120°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "\\(\\angle B\\) is obtuse, so \\(\\cos 120° = -0.5\\) is negative. Subtracting a negative term is the same as adding — this is why the resulting side is longer than a naive \\(a+c\\) comparison might suggest. Don't drop the negative sign here (a common error).",
        workingOut: "\\(b^2 = 144 + 100 - 240(-0.5) = 244 + 120 = 364\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AB = 10 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">AC</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BC = 12 cm</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">120°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Take the square root to solve for \\(b = AC\\). Sanity check: \\(364 > 244 = a^2+c^2\\), consistent with \\(\\angle B\\) being obtuse.",
        workingOut: "\\(b = \\sqrt{364} \\approx 19.079 \\implies AC \\approx 19.08 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 10 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">AC ≈ 19.08 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 12 cm</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">120°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"185\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 10 cm</text>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AC = ?</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 12 cm</text>\n<text x=\"289.0\" y=\"213.7\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">120°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(28.6\\)",
        imageUrl: ""
      },
      {
        text: "\\(160.9\\)",
        imageUrl: ""
      },
      {
        text: "\\(19.08\\)",
        imageUrl: ""
      },
      {
        text: "\\(15.3\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q10e",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Calculate the size of the unknown angle \\(\\angle C\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle A = 31°\\), \\(AC = 15\\) cm, and \\(BC = 8\\) cm. The diagram shows \\(\\angle B\\) is obtuse. Find \\(\\angle C\\).",
    a: 3,
    answer: "3",
    hint: "Use the sine rule to find \\(\\angle B\\). Since the diagram shows an obtuse angle at \\(B\\), subtract the acute answer from \\(180°\\).",
    solution: "We know \\(\\angle A = 31°\\) opposite side \\(a = BC = 8\\), and side \\(b = AC = 15\\) — this is the SSA (ambiguous case) since the given angle is not included between the two known sides.\nUsing the Sine Rule: \\(\\dfrac{\\sin B}{15} = \\dfrac{\\sin 31°}{8} \\implies \\sin B = \\dfrac{15\\sin 31°}{8} \\approx 0.9657\\).\nThis gives two candidate angles: \\(B \\approx \\sin^{-1}(0.9657) \\approx 74.95°\\) (acute) or its supplement \\(B \\approx 180° - 74.95° = 105.05°\\) (obtuse) — because \\(\\sin\\theta = \\sin(180°-\\theta)\\), both satisfy the same sine ratio and, geometrically, both are valid triangle shapes given only \\(a\\), \\(b\\), and \\(\\angle A\\).\nWe are told \\(\\angle B\\) is the obtuse one, so we must reject the acute solution and take \\(B = 105.05°\\).\nThen \\(\\angle C = 180° - \\angle A - \\angle B = 180° - 31° - 105.05° = 43.95°\\).",
    solutionSteps: [
      {
        explanation: "We know \\(\\angle A\\) and its opposite side \\(a = BC\\), plus another side \\(b = AC\\) — an angle-side opposite pair exists, so the Sine Rule applies. But this is SSA (two sides and a non-included angle), which is the classic ambiguous case: it can produce two different triangles.",
        workingOut: "\\(\\frac{\\sin B}{b} = \\frac{\\sin A}{a} \\implies \\frac{\\sin B}{15} = \\frac{\\sin 31°}{8}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 15 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 8 cm</text>\n<text x=\"158.5\" y=\"217.0\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">31°</text>\n<text x=\"348.2\" y=\"136.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">∠C = ?</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Solve for \\(\\sin B\\), then apply inverse sine. Because \\(\\sin\\theta = \\sin(180°-\\theta)\\), there are two angles with this sine value: an acute one and its obtuse supplement. Normally both would need checking — but the question tells us directly that \\(\\angle B\\) is obtuse, so we discard the acute candidate (\\(74.95°\\)) and keep the supplement.",
        workingOut: "\\(\\sin B = \\frac{15\\sin 31°}{8} \\approx 0.9657 \\implies B \\approx 74.95° \\text{ or } 180° - 74.95° = 105.05°\\). Since \\(\\angle B\\) is obtuse, \\(B = 105.05°\\).",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 15 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BC = 8 cm</text>\n<text x=\"158.5\" y=\"217.0\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">31°</text>\n<text x=\"348.2\" y=\"136.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#e11d48\">∠C</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "With \\(\\angle A\\) and the correct (obtuse) \\(\\angle B\\) now both known, use the angle sum of a triangle (\\(180°\\)) to find the remaining angle \\(\\angle C\\).",
        workingOut: "\\(\\angle C = 180° - \\angle A - \\angle B = 180° - 31° - 105.05°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 15 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BC = 8 cm</text>\n<text x=\"158.5\" y=\"217.0\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">31°</text>\n<text x=\"348.2\" y=\"136.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#e11d48\">∠C</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate to get the final answer. If we had wrongly kept the acute \\(74.95°\\) for \\(B\\) instead of using the given obtuse condition, we'd get \\(\\angle C = 180°-31°-74.95° = 74.05°\\) — a different (wrong) answer, which is why reading \"\\(\\angle B\\) is obtuse\" in the question is essential here.",
        workingOut: "\\(\\angle C = 43.95°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 15 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 8 cm</text>\n<text x=\"158.5\" y=\"217.0\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">31°</text>\n<text x=\"348.2\" y=\"136.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">∠C ≈ 43.95°</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 70 235 L 300 235 L 400 95 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"70\" y1=\"235\" x2=\"300\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"235\" x2=\"400\" y2=\"95\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"223\" y=\"137\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 15 cm</text>\n<text x=\"374\" y=\"182\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 8 cm</text>\n<text x=\"158.5\" y=\"217.0\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">31°</text>\n<text x=\"348.2\" y=\"136.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">∠C = ?</text>\n<text x=\"48\" y=\"255\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"300\" y=\"262\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"405\" y=\"70\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(65.9\\)",
        imageUrl: ""
      },
      {
        text: "\\(136.1\\)",
        imageUrl: ""
      },
      {
        text: "\\(35.2\\)",
        imageUrl: ""
      },
      {
        text: "\\(43.95\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-12i-q10f",
    topicId: "y10-12i",
    c: "12I",
    t: "Revision: Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Calculate the length of the unknown side \\(AB\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle C = 18°\\), \\(AC = 15\\) cm, and \\(BC = 25\\) cm.",
    a: 3,
    answer: "3",
    hint: "Use the cosine rule.",
    solution: "Triangle \\(ABC\\) has \\(\\angle C = 18°\\), included between the two known sides \\(AC = 15\\) and \\(BC = 25\\) (SAS), so use the Cosine Rule to find the side opposite \\(C\\), which is \\(c = AB\\):\n\\(c^2 = a^2 + b^2 - 2ab\\cos C = 25^2 + 15^2 - 2(25)(15)\\cos 18°\\)\n\\(c^2 = 625 + 225 - 750(0.95106) = 850 - 713.29 = 136.71\\)\n\\(c = \\sqrt{136.71} \\approx 11.692\\)\n\nCorrect to two decimal places, \\(AB = 11.69\\) cm.",
    solutionSteps: [
      {
        explanation: "\\(\\angle C = 18°\\) is included between the two known sides \\(AC\\) and \\(BC\\) — SAS, so use the Cosine Rule to find the third side \\(c = AB\\), which is opposite \\(\\angle C\\).",
        workingOut: "\\(c^2 = a^2 + b^2 - 2ab\\cos C\\), where \\(a = BC = 25\\), \\(b = AC = 15\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AB = ?</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 15 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 25 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">18°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known side lengths and the included angle.",
        workingOut: "\\(c^2 = 25^2 + 15^2 - 2(25)(15)\\cos 18°\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">AB</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 15 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BC = 25 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">18°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Simplify: square the sides, evaluate the cosine term at full precision, and subtract.",
        workingOut: "\\(c^2 = 625 + 225 - 750\\cos 18° = 850 - 750(0.95106) = 850 - 713.29 = 136.71\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">AB</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC = 15 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">BC = 25 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">18°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Take the square root to solve for \\(c = AB\\), rounding to two decimal places.",
        workingOut: "\\(c = \\sqrt{136.71} \\approx 11.692 \\implies AB \\approx 11.69 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.6\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">AB ≈ 11.69 cm</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 15 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 25 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">18°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 110 235 L 360 235 L 235 75 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"110\" y1=\"235\" x2=\"360\" y2=\"235\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"360\" y1=\"235\" x2=\"235\" y2=\"75\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"263\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AB = ?</text>\n<text x=\"145\" y=\"134\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AC = 15 cm</text>\n<text x=\"325\" y=\"134\" text-anchor=\"start\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">BC = 25 cm</text>\n<text x=\"235\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e293b\">18°</text>\n<text x=\"88\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">A</text>\n<text x=\"382\" y=\"252\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">B</text>\n<text x=\"235\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"600\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    isManual: false,
    options: [
      {
        text: "\\(17.5\\)",
        imageUrl: ""
      },
      {
        text: "\\(168.3\\)",
        imageUrl: ""
      },
      {
        text: "\\(9.4\\)",
        imageUrl: ""
      },
      {
        text: "\\(11.69\\)",
        imageUrl: ""
      }
    ]
  }
];
