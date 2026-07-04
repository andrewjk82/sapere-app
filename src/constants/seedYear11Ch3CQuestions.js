const CH = {
  chapterId: 'y11a-3',
  chapterTitle: 'Chapter 3: Functions and graphs',
  topicId: 'y11a-3C',
  topicCode: '3C',
  topicTitle: 'Review of linear graphs',
  year: 'Year 11',
  isManual: true,
};

export const Y11_CH3C_QUESTIONS = [
  {
    ...CH,
    id: 'y11a-3c-q1a',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the linear function \\( y = 3x - 3 \\), find the \\( y \\)-intercept by putting \\( x = 0 \\).",
    options: [
      { text: "\\(-3\\)", imageUrl: '' },
      { text: "\\(3\\)", imageUrl: '' },
      { text: "\\(0\\)", imageUrl: '' },
      { text: "\\(1\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "The \\(y\\)-intercept is where the line crosses the \\(y\\)-axis — this always happens at \\(x = 0\\). Substitute \\(x = 0\\) into the equation."
      },
      {
        explanation: "Simplify the right-hand side.",
        workingOut: "y = 3(0) - 3 = 0 - 3 = -3"
      },
      {
        explanation: "So the \\(y\\)-intercept is \\(-3\\), meaning the line crosses the \\(y\\)-axis at the point \\((0, -3)\\). Watch the trap: the answer is \\(-3\\), not \\(3\\) — do not drop the negative sign."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q1b',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the linear function \\( y = 3x - 3 \\), find the \\( x \\)-intercept by putting \\( y = 0 \\).",
    options: [
      { text: "\\(1\\)", imageUrl: '' },
      { text: "\\(-1\\)", imageUrl: '' },
      { text: "\\(3\\)", imageUrl: '' },
      { text: "\\(-3\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "The \\(x\\)-intercept is where the line crosses the \\(x\\)-axis — this always happens at \\(y = 0\\). Substitute \\(y = 0\\) into the equation.",
        workingOut: "0 = 3x - 3"
      },
      {
        explanation: "Add \\(3\\) to both sides, then divide by \\(3\\) to isolate \\(x\\).",
        workingOut: "3x = 3 \\implies x = 1"
      },
      {
        explanation: "So the \\(x\\)-intercept is \\(1\\), meaning the line crosses the \\(x\\)-axis at \\((1, 0)\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q1c',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "Plot the intercepts \\( (0, -3) \\) and \\( (1, 0) \\) and sketch the line representing \\( y = 3x - 3 \\).",
    options: [],
    answer: 'Straight line passing through (0, -3) and (1, 0).',
    solutionSteps: [
      {
        explanation: "Mark the two intercepts on the coordinate axes: the \\(y\\)-intercept \\((0, -3)\\) sits \\(3\\) units below the origin on the \\(y\\)-axis, and the \\(x\\)-intercept \\((1, 0)\\) sits \\(1\\) unit to the right of the origin on the \\(x\\)-axis.",
        workingOut: "\\text{y-intercept: } (0, -3), \\quad \\text{x-intercept: } (1, 0)"
      },
      {
        explanation: "Since the equation is linear (no \\(x^2\\), no other powers), its graph must be a perfectly straight line — so just line up a ruler with both points and draw through them."
      },
      {
        explanation: "Extend the line in both directions past the two points, since the line continues infinitely."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q2a',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the straight line \\( 2x + 3y - 6 = 0 \\), find the \\( y \\)-intercept by putting \\( x = 0 \\).",
    options: [
      { text: "\\(2\\)", imageUrl: '' },
      { text: "\\(6\\)", imageUrl: '' },
      { text: "\\(3\\)", imageUrl: '' },
      { text: "\\(-2\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "This equation is in general form (\\(Ax + By + C = 0\\)), not \\(y = mx + b\\) form — but the same rule applies: set \\(x = 0\\) to find the \\(y\\)-intercept.",
        workingOut: "2(0) + 3y - 6 = 0"
      },
      {
        explanation: "Simplify, then solve for \\(y\\).",
        workingOut: "3y - 6 = 0 \\implies 3y = 6 \\implies y = 2"
      },
      {
        explanation: "So the \\(y\\)-intercept is \\(2\\), giving the point \\((0, 2)\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q2b',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the straight line \\( 2x + 3y - 6 = 0 \\), find the \\( x \\)-intercept by putting \\( y = 0 \\).",
    options: [
      { text: "\\(3\\)", imageUrl: '' },
      { text: "\\(2\\)", imageUrl: '' },
      { text: "\\(6\\)", imageUrl: '' },
      { text: "\\(-3\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Set \\(y = 0\\) to find where the line crosses the \\(x\\)-axis.",
        workingOut: "2x + 3(0) - 6 = 0"
      },
      {
        explanation: "Simplify, then solve for \\(x\\).",
        workingOut: "2x - 6 = 0 \\implies 2x = 6 \\implies x = 3"
      },
      {
        explanation: "So the \\(x\\)-intercept is \\(3\\), giving the point \\((3, 0)\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q2c',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "Plot the intercepts \\( (0, 2) \\) and \\( (3, 0) \\) and sketch the line representing \\( 2x + 3y - 6 = 0 \\).",
    options: [],
    answer: 'Straight line passing through (0, 2) and (3, 0).',
    solutionSteps: [
      {
        explanation: "Mark the two intercepts: \\((0, 2)\\) is \\(2\\) units up the \\(y\\)-axis, and \\((3, 0)\\) is \\(3\\) units along the \\(x\\)-axis.",
        workingOut: "\\text{y-intercept: } (0, 2), \\quad \\text{x-intercept: } (3, 0)"
      },
      {
        explanation: "Draw a straight line through both points using a ruler, and extend it beyond each point in both directions."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q3a',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Find the intercepts and sketch the line for the equation \\( y = x + 2 \\).",
    options: [],
    answer: 'x-intercept: (-2, 0), y-intercept: (0, 2).',
    solutionSteps: [
      {
        explanation: "Find the \\(y\\)-intercept first by substituting \\(x = 0\\).",
        workingOut: "y = 0 + 2 = 2 \\implies (0, 2)"
      },
      {
        explanation: "Find the \\(x\\)-intercept by substituting \\(y = 0\\) and solving for \\(x\\).",
        workingOut: "0 = x + 2 \\implies x = -2 \\implies (-2, 0)"
      },
      {
        explanation: "Plot \\((0, 2)\\) and \\((-2, 0)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q3b',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Find the intercepts and sketch the line for the equation \\( y = 6 - 3x \\).",
    options: [],
    answer: 'x-intercept: (2, 0), y-intercept: (0, 6).',
    solutionSteps: [
      {
        explanation: "Find the \\(y\\)-intercept by substituting \\(x = 0\\).",
        workingOut: "y = 6 - 3(0) = 6 \\implies (0, 6)"
      },
      {
        explanation: "Find the \\(x\\)-intercept by substituting \\(y = 0\\) and solving for \\(x\\).",
        workingOut: "0 = 6 - 3x \\implies 3x = 6 \\implies x = 2 \\implies (2, 0)"
      },
      {
        explanation: "Plot \\((0, 6)\\) and \\((2, 0)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q3c',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Find the intercepts and sketch the line for the equation \\( y = \\frac{1}{2}x - 2 \\).",
    options: [],
    answer: 'x-intercept: (4, 0), y-intercept: (0, -2).',
    solutionSteps: [
      {
        explanation: "Find the \\(y\\)-intercept by substituting \\(x = 0\\).",
        workingOut: "y = \\frac{1}{2}(0) - 2 = -2 \\implies (0, -2)"
      },
      {
        explanation: "Find the \\(x\\)-intercept by substituting \\(y = 0\\) and solving for \\(x\\). Multiply both sides by \\(2\\) to clear the fraction.",
        workingOut: "0 = \\frac{1}{2}x - 2 \\implies \\frac{1}{2}x = 2 \\implies x = 4 \\implies (4, 0)"
      },
      {
        explanation: "Plot \\((0, -2)\\) and \\((4, 0)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q3d',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Find the intercepts and sketch the line for the equation \\( x + y - 2 = 0 \\).",
    options: [],
    answer: 'x-intercept: (2, 0), y-intercept: (0, 2).',
    solutionSteps: [
      {
        explanation: "Substitute \\(x = 0\\) to find the \\(y\\)-intercept.",
        workingOut: "0 + y - 2 = 0 \\implies y = 2 \\implies (0, 2)"
      },
      {
        explanation: "Substitute \\(y = 0\\) to find the \\(x\\)-intercept.",
        workingOut: "x + 0 - 2 = 0 \\implies x = 2 \\implies (2, 0)"
      },
      {
        explanation: "Plot \\((0, 2)\\) and \\((2, 0)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q3e',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Find the intercepts and sketch the line for the equation \\( 3x - y + 3 = 0 \\).",
    options: [],
    answer: 'x-intercept: (-1, 0), y-intercept: (0, 3).',
    solutionSteps: [
      {
        explanation: "Find the \\(y\\)-intercept by substituting \\(x = 0\\).",
        workingOut: "3(0) - y + 3 = 0 \\implies -y + 3 = 0 \\implies y = 3 \\implies (0, 3)"
      },
      {
        explanation: "Find the \\(x\\)-intercept by substituting \\(y = 0\\).",
        workingOut: "3x - 0 + 3 = 0 \\implies 3x = -3 \\implies x = -1 \\implies (-1, 0)"
      },
      {
        explanation: "Plot \\((0, 3)\\) and \\((-1, 0)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q3f',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Find the intercepts and sketch the line for the equation \\( x - 2y - 4 = 0 \\).",
    options: [],
    answer: 'x-intercept: (4, 0), y-intercept: (0, -2).',
    solutionSteps: [
      {
        explanation: "Substitute \\(x = 0\\) to find the \\(y\\)-intercept.",
        workingOut: "0 - 2y - 4 = 0 \\implies -2y = 4 \\implies y = -2 \\implies (0, -2)"
      },
      {
        explanation: "Substitute \\(y = 0\\) to find the \\(x\\)-intercept.",
        workingOut: "x - 2(0) - 4 = 0 \\implies x = 4 \\implies (4, 0)"
      },
      {
        explanation: "Plot \\((0, -2)\\) and \\((4, 0)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q3g',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Find the intercepts and sketch the line for the equation \\( 3x - 2y - 12 = 0 \\).",
    options: [],
    answer: 'x-intercept: (4, 0), y-intercept: (0, -6).',
    solutionSteps: [
      {
        explanation: "Substitute \\(x = 0\\) to find the \\(y\\)-intercept.",
        workingOut: "3(0) - 2y - 12 = 0 \\implies -2y = 12 \\implies y = -6 \\implies (0, -6)"
      },
      {
        explanation: "Substitute \\(y = 0\\) to find the \\(x\\)-intercept.",
        workingOut: "3x - 2(0) - 12 = 0 \\implies 3x = 12 \\implies x = 4 \\implies (4, 0)"
      },
      {
        explanation: "Plot \\((0, -6)\\) and \\((4, 0)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q3h',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Find the intercepts and sketch the line for the equation \\( x + 3y + 6 = 0 \\).",
    options: [],
    answer: 'x-intercept: (-6, 0), y-intercept: (0, -2).',
    solutionSteps: [
      {
        explanation: "Substitute \\(x = 0\\) to find the \\(y\\)-intercept.",
        workingOut: "0 + 3y + 6 = 0 \\implies 3y = -6 \\implies y = -2 \\implies (0, -2)"
      },
      {
        explanation: "Substitute \\(y = 0\\) to find the \\(x\\)-intercept.",
        workingOut: "x + 3(0) + 6 = 0 \\implies x = -6 \\implies (-6, 0)"
      },
      {
        explanation: "Plot \\((0, -2)\\) and \\((-6, 0)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q3i',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Find the intercepts and sketch the line for the equation \\( 4x + 3y - 12 = 0 \\).",
    options: [],
    answer: 'x-intercept: (3, 0), y-intercept: (0, 4).',
    solutionSteps: [
      {
        explanation: "Substitute \\(x = 0\\) to find the \\(y\\)-intercept.",
        workingOut: "4(0) + 3y - 12 = 0 \\implies 3y = 12 \\implies y = 4 \\implies (0, 4)"
      },
      {
        explanation: "Substitute \\(y =0\\) to find the \\(x\\)-intercept.",
        workingOut: "4x + 3(0) - 12 = 0 \\implies 4x = 12 \\implies x = 3 \\implies (3, 0)"
      },
      {
        explanation: "Plot \\((0, 4)\\) and \\((3, 0)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q4a',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "A linear function has the equation \\( y = -3x \\). Show that the \\( x \\)-intercept and the \\( y \\)-intercept are both zero.",
    options: [],
    answer: 'Putting x = 0 gives y = 0. Putting y = 0 gives -3x = 0 => x = 0. Thus, both intercepts are (0, 0).',
    solutionSteps: [
      {
        explanation: "There is no constant term added or subtracted in \\(y = -3x\\) — it is purely a multiple of \\(x\\). This is the signal that the line will pass through the origin."
      },
      {
        explanation: "Find the \\(y\\)-intercept by substituting \\(x = 0\\).",
        workingOut: "y = -3(0) = 0 \\implies (0, 0)"
      },
      {
        explanation: "Find the \\(x\\)-intercept by substituting \\(y = 0\\) and solving for \\(x\\).",
        workingOut: "0 = -3x \\implies x = 0 \\implies (0, 0)"
      },
      {
        explanation: "Both intercepts land on the same point, \\((0, 0)\\) — this always happens for equations of the form \\(y = mx\\), because there is nothing left over when \\(x = 0\\) or \\(y = 0\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q4b',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "For the line \\( y = -3x \\), substitute \\( x = 1 \\) to find a second point on the line, then sketch the line.",
    options: [],
    answer: 'Second point: (1, -3). The line passes through (0, 0) and (1, -3).',
    solutionSteps: [
      {
        explanation: "Since both intercepts are \\((0, 0)\\) (from the previous question), one point alone is not enough to draw a line — we need a SECOND point."
      },
      {
        explanation: "Substitute \\(x = 1\\) into the equation to generate a second point.",
        workingOut: "y = -3(1) = -3 \\implies \\text{point: } (1, -3)"
      },
      {
        explanation: "Plot the origin \\((0, 0)\\) and the point \\((1, -3)\\), then draw a straight line through both."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q5a',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Sketch the graph of the line \\( y = 2x \\). Indicate the origin and another point on the line.",
    options: [],
    answer: 'Line passing through (0, 0) and (1, 2).',
    solutionSteps: [
      {
        explanation: "There is no constant term, so the line passes through the origin.",
        workingOut: "y = 2(0) = 0 \\implies (0, 0)"
      },
      {
        explanation: "Find a second point by letting \\(x = 1\\) — this is usually the easiest choice.",
        workingOut: "y = 2(1) = 2 \\implies (1, 2)"
      },
      {
        explanation: "Plot \\((0, 0)\\) and \\((1, 2)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q5b',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Sketch the graph of the line \\( y = 4x \\). Indicate the origin and another point on the line.",
    options: [],
    answer: 'Line passing through (0, 0) and (1, 4).',
    solutionSteps: [
      {
        explanation: "There is no constant term, so the \\(y\\)-intercept is \\(0\\).",
        workingOut: "y = 4(0) = 0 \\implies (0, 0)"
      },
      {
        explanation: "Evaluate the function at \\(x = 1\\) to get a second point.",
        workingOut: "y = 4(1) = 4 \\implies (1, 4)"
      },
      {
        explanation: "Plot \\((0, 0)\\) and \\((1, 4)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q5c',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Sketch the graph of the line \\( y = -5x \\). Indicate the origin and another point on the line.",
    options: [],
    answer: 'Line passing through (0, 0) and (1, -5).',
    solutionSteps: [
      {
        explanation: "There is no constant term, so the line passes through the origin.",
        workingOut: "(0, 0)"
      },
      {
        explanation: "Evaluate at \\(x = 1\\) to get the second point. Since the gradient is negative, the line slopes downward as \\(x\\) increases.",
        workingOut: "y = -5(1) = -5 \\implies (1, -5)"
      },
      {
        explanation: "Plot \\((0, 0)\\) and \\((1, -5)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q5d',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Sketch the graph of the line \\( x + 2y = 0 \\). Indicate the origin and another point on the line.",
    options: [],
    answer: 'Line passing through (0, 0) and (2, -1).',
    solutionSteps: [
      {
        explanation: "Rearrange the equation to make \\(y\\) the subject, so it is easier to substitute values.",
        workingOut: "2y = -x \\implies y = -\\frac{1}{2}x"
      },
      {
        explanation: "Since there is no constant term, the line passes through the origin \\((0, 0)\\)."
      },
      {
        explanation: "Let \\(x = 2\\) so the fraction cancels neatly, giving whole-number coordinates.",
        workingOut: "y = -\\frac{1}{2}(2) = -1 \\implies (2, -1)"
      },
      {
        explanation: "Plot \\((0, 0)\\) and \\((2, -1)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q5e',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Sketch the graph of the line \\( x - 3y = 0 \\). Indicate the origin and another point on the line.",
    options: [],
    answer: 'Line passing through (0, 0) and (3, 1).',
    solutionSteps: [
      {
        explanation: "Rearrange to make \\(y\\) the subject.",
        workingOut: "3y = x \\implies y = \\frac{1}{3}x"
      },
      {
        explanation: "Since there is no constant term, the line passes through the origin \\((0, 0)\\)."
      },
      {
        explanation: "Let \\(x = 3\\) so the fraction cancels neatly, giving whole-number coordinates.",
        workingOut: "y = \\frac{1}{3}(3) = 1 \\implies (3, 1)"
      },
      {
        explanation: "Plot \\((0, 0)\\) and \\((3, 1)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q5f',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Sketch the graph of the line \\( 2x + 3y = 0 \\). Indicate the origin and another point on the line.",
    options: [],
    answer: 'Line passing through (0, 0) and (3, -2).',
    solutionSteps: [
      {
        explanation: "Rearrange the equation to make \\(y\\) the subject.",
        workingOut: "3y = -2x \\implies y = -\\frac{2}{3}x"
      },
      {
        explanation: "Since there is no constant term, the line passes through the origin \\((0, 0)\\)."
      },
      {
        explanation: "Let \\(x = 3\\) so the fraction \\(\\frac{2}{3} \\times 3\\) cancels neatly.",
        workingOut: "y = -\\frac{2}{3}(3) = -2 \\implies (3, -2)"
      },
      {
        explanation: "Plot \\((0, 0)\\) and \\((3, -2)\\) and draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q6a',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Graph the function \\( y = f(x) \\) where \\( f(x) = -2x - 4 \\). Show the intercepts with the axes.",
    options: [],
    answer: 'Line with y-intercept (0, -4) and x-intercept (-2, 0).',
    solutionSteps: [
      {
        explanation: "Find the \\(y\\)-intercept by putting \\(x = 0\\) — this is the same as evaluating \\(f(0)\\).",
        workingOut: "f(0) = -2(0) - 4 = -4 \\implies (0, -4)"
      },
      {
        explanation: "Find the \\(x\\)-intercept by setting \\(f(x) = 0\\) and solving for \\(x\\).",
        workingOut: "-2x - 4 = 0 \\implies -2x = 4 \\implies x = -2 \\implies (-2, 0)"
      },
      {
        explanation: "Plot \\((0, -4)\\) and \\((-2, 0)\\), then draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q6b',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Graph the function \\( y = f(x) \\) where \\( f(x) = \\frac{1}{3}x - 1 \\). Show the intercepts with the axes.",
    options: [],
    answer: 'Line with y-intercept (0, -1) and x-intercept (3, 0).',
    solutionSteps: [
      {
        explanation: "Find the \\(y\\)-intercept by evaluating \\(f(0)\\).",
        workingOut: "f(0) = \\frac{1}{3}(0) - 1 = -1 \\implies (0, -1)"
      },
      {
        explanation: "Find the \\(x\\)-intercept by setting \\(f(x) = 0\\) and solving for \\(x\\).",
        workingOut: "\\frac{1}{3}x - 1 = 0 \\implies \\frac{1}{3}x = 1 \\implies x = 3 \\implies (3, 0)"
      },
      {
        explanation: "Plot \\((0, -1)\\) and \\((3, 0)\\), then draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q6c',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Graph the function \\( y = f(x) \\) where \\( f(x) = -\\frac{1}{3}x \\). Indicate the origin and another point on the line.",
    options: [],
    answer: 'Line passing through (0, 0) and (3, -1).',
    solutionSteps: [
      {
        explanation: "Since there is no constant term, the line passes through the origin.",
        workingOut: "f(0) = -\\frac{1}{3}(0) = 0 \\implies (0, 0)"
      },
      {
        explanation: "Choose \\(x = 3\\) to find a second point with whole-number coordinates, since \\(3\\) cancels the denominator.",
        workingOut: "f(3) = -\\frac{1}{3}(3) = -1 \\implies (3, -1)"
      },
      {
        explanation: "Plot \\((0, 0)\\) and \\((3, -1)\\), then draw a straight line through them."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q7a',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "Sketch the vertical line \\( x = 2 \\).",
    options: [],
    answer: 'Vertical line passing through (2, 0).',
    solutionSteps: [
      {
        explanation: "The equation \\(x = 2\\) does not involve \\(y\\) at all — it means EVERY point with \\(x\\)-coordinate \\(2\\) satisfies it, no matter what \\(y\\) is.",
        workingOut: "\\text{Points on the line: } (2, -5), (2, 0), (2, 5), \\dots"
      },
      {
        explanation: "Draw a vertical line straight up and down through \\(x = 2\\) on the \\(x\\)-axis. This is the classic exception: it is NOT of the form \\(y = mx + b\\), and it is NOT a function of \\(x\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q7b',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "Sketch the horizontal line \\( y = 3 \\).",
    options: [],
    answer: 'Horizontal line passing through (0, 3).',
    solutionSteps: [
      {
        explanation: "The equation \\(y = 3\\) does not involve \\(x\\) at all — EVERY point with \\(y\\)-coordinate \\(3\\) satisfies it, no matter what \\(x\\) is.",
        workingOut: "\\text{Points on the line: } (-5, 3), (0, 3), (5, 3), \\dots"
      },
      {
        explanation: "Draw a horizontal line straight across through \\(y = 3\\) on the \\(y\\)-axis."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q7c',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "Sketch the vertical line \\( x = -3 \\).",
    options: [],
    answer: 'Vertical line passing through (-3, 0).',
    solutionSteps: [
      {
        explanation: "The equation \\(x = -3\\) means every point with \\(x\\)-coordinate \\(-3\\) satisfies it, for any \\(y\\)-value.",
        workingOut: "\\text{Points on the line: } (-3, -5), (-3, 0), (-3, 5), \\dots"
      },
      {
        explanation: "Draw a vertical line straight up and down through \\(x = -3\\), which is \\(3\\) units to the LEFT of the origin."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q7d',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "Sketch the horizontal line \\( y = -2 \\).",
    options: [],
    answer: 'Horizontal line passing through (0, -2).',
    solutionSteps: [
      {
        explanation: "The equation \\(y = -2\\) means every point with \\(y\\)-coordinate \\(-2\\) satisfies it, for any \\(x\\)-value.",
        workingOut: "\\text{Points on the line: } (-5, -2), (0, -2), (5, -2), \\dots"
      },
      {
        explanation: "Draw a horizontal line straight across through \\(y = -2\\), which is \\(2\\) units BELOW the origin."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q7e',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "Sketch the horizontal line \\( 2y = -5 \\).",
    options: [],
    answer: 'Horizontal line y = -2.5.',
    solutionSteps: [
      {
        explanation: "This is not yet in the simple form \\(y = k\\) — divide both sides by \\(2\\) to solve for \\(y\\).",
        workingOut: "y = -\\frac{5}{2} = -2.5"
      },
      {
        explanation: "Since only \\(y\\) appears (no \\(x\\)), this is a horizontal line passing through every point with \\(y\\)-coordinate \\(-2.5\\), i.e. through \\((0, -2.5)\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q7f',
    difficulty: 'easy',
    type: 'teacher_review',
    question: "Sketch the vertical line \\( 3x = 4 \\).",
    options: [],
    answer: 'Vertical line x = 4/3.',
    solutionSteps: [
      {
        explanation: "This is not yet in the simple form \\(x = k\\) — divide both sides by \\(3\\) to solve for \\(x\\).",
        workingOut: "x = \\frac{4}{3} \\approx 1.33"
      },
      {
        explanation: "Since only \\(x\\) appears (no \\(y\\)), this is a vertical line passing through every point with \\(x\\)-coordinate \\(\\frac{4}{3}\\), i.e. through \\(\\left(\\frac{4}{3}, 0\\right)\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q8',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Consider the six lines sketched in the previous question: \\( x = 2 \\), \\( y = 3 \\), \\( x = -3 \\), \\( y = -2 \\), \\( y = -2.5 \\) and \\( x = \\frac{4}{3} \\). Which group of these lines does NOT represent a function of \\( x \\) (that is, fails the vertical line test)?",
    options: [
      { text: "The vertical lines: \\(x=2\\), \\(x=-3\\), \\(x=\\frac{4}{3}\\)", imageUrl: '' },
      { text: "The horizontal lines: \\(y=3\\), \\(y=-2\\), \\(y=-2.5\\)", imageUrl: '' },
      { text: "All six lines", imageUrl: '' },
      { text: "None of the six lines", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "The vertical line test says: a graph represents a function of \\(x\\) only if every vertical line crosses it at most once. So test what happens when we draw a vertical line ON TOP of each of these lines."
      },
      {
        explanation: "For a vertical line like \\(x = 2\\), drawing another vertical line over it does not cross it once — it lies exactly ON TOP of it, touching at infinitely many points, at every possible \\(y\\)-value.",
        workingOut: "\\text{On } x = 2 \\text{: both } (2, 1) \\text{ and } (2, 5) \\text{ are on the line}"
      },
      {
        explanation: "A single \\(x\\)-value (\\(x=2\\)) would need to map to infinitely many different \\(y\\)-values to be \"on\" this line — but a function can only output ONE \\(y\\)-value per \\(x\\)-value. So vertical lines fail the test and are NOT functions of \\(x\\)."
      },
      {
        explanation: "For a horizontal line like \\(y = 3\\), every vertical line you draw (at any \\(x\\)-value) crosses it exactly once, at \\(y = 3\\). So horizontal lines PASS the test and ARE functions of \\(x\\) (in fact, constant functions)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q9a',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Solve the equation \\( x + y - 2 = 0 \\) for \\( y \\) and write it in function notation.",
    options: [
      { text: "\\(f(x) = -x + 2\\)", imageUrl: '' },
      { text: "\\(f(x) = x + 2\\)", imageUrl: '' },
      { text: "\\(f(x) = -x - 2\\)", imageUrl: '' },
      { text: "\\(f(x) = 2x\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Isolate \\(y\\) on the left-hand side by moving the other terms across.",
        workingOut: "x + y - 2 = 0 \\implies y = -x + 2"
      },
      {
        explanation: "Function notation just means replacing \\(y\\) with \\(f(x)\\) — they mean the same thing here.",
        workingOut: "f(x) = -x + 2"
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q9b',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Solve the equation \\( 3x - y + 3 = 0 \\) for \\( y \\) and write it in function notation.",
    options: [
      { text: "\\(f(x) = 3x + 3\\)", imageUrl: '' },
      { text: "\\(f(x) = -3x + 3\\)", imageUrl: '' },
      { text: "\\(f(x) = 3x - 3\\)", imageUrl: '' },
      { text: "\\(f(x) = -3x - 3\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Add \\(y\\) to both sides to move it onto its own, then flip the equation around so \\(y\\) is on the left.",
        workingOut: "3x - y + 3 = 0 \\implies 3x + 3 = y \\implies y = 3x + 3"
      },
      {
        explanation: "Write the result in function notation.",
        workingOut: "f(x) = 3x + 3"
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q9c',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Solve the equation \\( x - 2y - 4 = 0 \\) for \\( y \\) and write it in function notation.",
    options: [
      { text: "\\(f(x) = 0.5x - 2\\)", imageUrl: '' },
      { text: "\\(f(x) = 0.5x + 2\\)", imageUrl: '' },
      { text: "\\(f(x) = 2x - 4\\)", imageUrl: '' },
      { text: "\\(f(x) = -0.5x - 2\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Isolate the \\(2y\\) term by moving everything else across.",
        workingOut: "x - 2y - 4 = 0 \\implies 2y = x - 4"
      },
      {
        explanation: "Divide every term by \\(2\\) to solve for \\(y\\) on its own.",
        workingOut: "y = \\frac{1}{2}x - 2 = 0.5x - 2"
      },
      {
        explanation: "Convert to function notation.",
        workingOut: "f(x) = 0.5x - 2"
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q9d',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Solve the equation \\( 3x - 2y - 12 = 0 \\) for \\( y \\) and write it in function notation.",
    options: [
      { text: "\\(f(x) = 1.5x - 6\\)", imageUrl: '' },
      { text: "\\(f(x) = 1.5x + 6\\)", imageUrl: '' },
      { text: "\\(f(x) = 3x - 6\\)", imageUrl: '' },
      { text: "\\(f(x) = -1.5x - 6\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Isolate the \\(2y\\) term.",
        workingOut: "3x - 2y - 12 = 0 \\implies 2y = 3x - 12"
      },
      {
        explanation: "Divide every term by \\(2\\) to solve for \\(y\\).",
        workingOut: "y = \\frac{3}{2}x - 6 = 1.5x - 6"
      },
      {
        explanation: "Write in function notation.",
        workingOut: "f(x) = 1.5x - 6"
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q9e',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Solve the equation \\( x + 3y + 6 = 0 \\) for \\( y \\) and write it in function notation.",
    options: [
      { text: "\\(f(x) = -\\frac{1}{3}x - 2\\)", imageUrl: '' },
      { text: "\\(f(x) = \\frac{1}{3}x - 2\\)", imageUrl: '' },
      { text: "\\(f(x) = -\\frac{1}{3}x + 2\\)", imageUrl: '' },
      { text: "\\(f(x) = -3x - 2\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Isolate the \\(3y\\) term.",
        workingOut: "x + 3y + 6 = 0 \\implies 3y = -x - 6"
      },
      {
        explanation: "Divide every term by \\(3\\) to solve for \\(y\\).",
        workingOut: "y = -\\frac{1}{3}x - 2"
      },
      {
        explanation: "Write in function notation.",
        workingOut: "f(x) = -\\frac{1}{3}x - 2"
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q9f',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Solve the equation \\( 4x + 3y - 12 = 0 \\) for \\( y \\) and write it in function notation.",
    options: [
      { text: "\\(f(x) = -\\frac{4}{3}x + 4\\)", imageUrl: '' },
      { text: "\\(f(x) = \\frac{4}{3}x + 4\\)", imageUrl: '' },
      { text: "\\(f(x) = -\\frac{4}{3}x - 4\\)", imageUrl: '' },
      { text: "\\(f(x) = -4x + 4\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Isolate the \\(3y\\) term.",
        workingOut: "4x + 3y - 12 = 0 \\implies 3y = -4x + 12"
      },
      {
        explanation: "Divide every term by \\(3\\) to solve for \\(y\\).",
        workingOut: "y = -\\frac{4}{3}x + 4"
      },
      {
        explanation: "Write in function notation.",
        workingOut: "f(x) = -\\frac{4}{3}x + 4"
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q10a',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Determine whether the point \\( (4, 2) \\) lies on the line \\( y = x - 2 \\).",
    options: [
      { text: "Yes", imageUrl: '' },
      { text: "No", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "A point lies on a line only if substituting its coordinates makes both sides of the equation equal. Substitute \\(x = 4\\) and \\(y = 2\\).",
        workingOut: "\\text{LHS} = y = 2, \\quad \\text{RHS} = x - 2 = 4 - 2 = 2"
      },
      {
        explanation: "Since LHS \\(=\\) RHS (\\(2 = 2\\)), the equation holds true for this point — so it DOES lie on the line."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q10b',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Determine whether the point \\( (6, 7) \\) lies on the line \\( y = 17 - 2x \\).",
    options: [
      { text: "No", imageUrl: '' },
      { text: "Yes", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Substitute \\(x = 6\\) and \\(y = 7\\) into both sides of the equation and compare.",
        workingOut: "\\text{LHS} = y = 7, \\quad \\text{RHS} = 17 - 2(6) = 17 - 12 = 5"
      },
      {
        explanation: "Since LHS \\(\\neq\\) RHS (\\(7 \\neq 5\\)), the point does NOT satisfy the equation — so it does NOT lie on the line. Only the point \\((6, 5)\\) would work."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q10c',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Determine whether the point \\( (2, -3) \\) lies on the line \\( y = -4x + 5 \\).",
    options: [
      { text: "Yes", imageUrl: '' },
      { text: "No", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Substitute \\(x = 2\\) and \\(y = -3\\) into both sides.",
        workingOut: "\\text{LHS} = y = -3, \\quad \\text{RHS} = -4(2) + 5 = -8 + 5 = -3"
      },
      {
        explanation: "Since LHS \\(=\\) RHS (\\(-3 = -3\\)), the point DOES lie on the line."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q10d',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Determine whether the point \\( (-4, 3) \\) lies on the line \\( 3x + 4y + 4 = 0 \\).",
    options: [
      { text: "No", imageUrl: '' },
      { text: "Yes", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "This equation is in general form (\\(= 0\\), not \\(y = \\dots\\)), so substitute both coordinates directly and check if the LEFT side comes out to \\(0\\).",
        workingOut: "\\text{LHS} = 3(-4) + 4(3) + 4 = -12 + 12 + 4 = 4"
      },
      {
        explanation: "Since LHS \\(= 4\\), not \\(0\\), the point does NOT satisfy the equation — so it does NOT lie on the line. Only \\((-4, 2)\\) would give LHS \\(= 0\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q10e',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Determine whether the point \\( (-2, -5) \\) lies on the line \\( 2x - 3y - 11 = 0 \\).",
    options: [
      { text: "Yes", imageUrl: '' },
      { text: "No", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Substitute \\(x = -2\\) and \\(y = -5\\) into the left-hand side and check if it equals \\(0\\).",
        workingOut: "\\text{LHS} = 2(-2) - 3(-5) - 11 = -4 + 15 - 11 = 0"
      },
      {
        explanation: "Since LHS \\(= 0\\), matching the right-hand side, the point DOES lie on the line."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q10f',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Determine whether the point \\( (-5, -2) \\) lies on the line \\( 3x - 5y = 0 \\).",
    options: [
      { text: "No", imageUrl: '' },
      { text: "Yes", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Substitute \\(x = -5\\) and \\(y = -2\\) into the left-hand side and check if it equals \\(0\\).",
        workingOut: "\\text{LHS} = 3(-5) - 5(-2) = -15 + 10 = -5"
      },
      {
        explanation: "Since LHS \\(= -5\\), not \\(0\\), the coordinates do NOT satisfy the equation — so the point does NOT lie on the line. Only \\((-5, -3)\\) would give LHS \\(= 0\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q11a',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "On a single set of coordinate axes, graph the two lines \\( x + y = 6 \\) and \\( x - y = 2 \\).",
    options: [],
    answer: 'Two straight lines intersecting at (4, 2).',
    solutionSteps: [
      {
        explanation: "Find the intercepts of the first line, \\(x + y = 6\\): put \\(x=0\\) to get \\(y=6\\), and put \\(y=0\\) to get \\(x=6\\).",
        workingOut: "\\text{Intercepts: } (0, 6) \\text{ and } (6, 0)"
      },
      {
        explanation: "Find the intercepts of the second line, \\(x - y = 2\\): put \\(x=0\\) to get \\(-y=2 \\implies y=-2\\), and put \\(y=0\\) to get \\(x=2\\).",
        workingOut: "\\text{Intercepts: } (0, -2) \\text{ and } (2, 0)"
      },
      {
        explanation: "Plot both lines on the same axes using their intercepts. They should cross at a single point — this crossing point is the SIMULTANEOUS solution to both equations."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q11b',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Using the graph of \\( x + y = 6 \\) and \\( x - y = 2 \\) that you sketched, which of the following gives their point of intersection?",
    options: [
      { text: "\\((4, 2)\\)", imageUrl: '' },
      { text: "\\((2, 4)\\)", imageUrl: '' },
      { text: "\\((3, 3)\\)", imageUrl: '' },
      { text: "\\((6, 0)\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "On the graph, the point of intersection is the single point where both lines cross — read its coordinates directly off the axes."
      },
      {
        explanation: "Sanity-check the reading by testing whether \\((4, 2)\\) fits BOTH equations.",
        workingOut: "4 + 2 = 6 \\checkmark \\qquad 4 - 2 = 2 \\checkmark"
      },
      {
        explanation: "Both equations hold true, confirming \\((4, 2)\\) is the intersection point. This kind of visual check is useful, but algebra (next question) gives an exact answer even when the point is hard to read precisely from a graph."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q11c',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Solve the simultaneous equations \\( x + y = 6 \\) and \\( x - y = 2 \\) algebraically to confirm the point of intersection.",
    options: [
      { text: "\\((4, 2)\\)", imageUrl: '' },
      { text: "\\((2, 4)\\)", imageUrl: '' },
      { text: "\\((5, 1)\\)", imageUrl: '' },
      { text: "\\((1, 5)\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Notice the \\(y\\)-terms have opposite signs (\\(+y\\) and \\(-y\\)) — this means we can ADD the two equations directly to eliminate \\(y\\) completely."
      },
      {
        explanation: "Add the equations together, left side to left side, right side to right side.",
        workingOut: "(x + y) + (x - y) = 6 + 2 \\implies 2x = 8 \\implies x = 4"
      },
      {
        explanation: "Substitute \\(x = 4\\) back into either original equation to find \\(y\\) — the first equation is simplest.",
        workingOut: "4 + y = 6 \\implies y = 2"
      },
      {
        explanation: "So the algebraic solution is \\((4, 2)\\), which matches the graphical reading from the previous question — a good way to double-check your work."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q12a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Solve the simultaneous equations \\( x + y = 3 \\) and \\( x - y = -5 \\) by elimination. What is their point of intersection?",
    options: [
      { text: "\\((-1, 4)\\)", imageUrl: '' },
      { text: "\\((1, -4)\\)", imageUrl: '' },
      { text: "\\((-1, -4)\\)", imageUrl: '' },
      { text: "\\((4, -1)\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "The \\(y\\)-terms have opposite signs (\\(+y\\) and \\(-y\\)), so adding the two equations will eliminate \\(y\\)."
      },
      {
        explanation: "Add the equations.",
        workingOut: "(x + y) + (x - y) = 3 + (-5) \\implies 2x = -2 \\implies x = -1"
      },
      {
        explanation: "Substitute \\(x = -1\\) into the first equation to find \\(y\\).",
        workingOut: "-1 + y = 3 \\implies y = 4"
      },
      {
        explanation: "So the point of intersection is \\((-1, 4)\\). Watch the trap: it is easy to mix up the order and write \\((4, -1)\\) — always double check which coordinate is \\(x\\) and which is \\(y\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q12b',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Solve the simultaneous equations \\( x - y = 4 \\) and \\( 3x + y = 0 \\) by elimination. What is their point of intersection?",
    options: [
      { text: "\\((1, -3)\\)", imageUrl: '' },
      { text: "\\((-1, 3)\\)", imageUrl: '' },
      { text: "\\((1, 3)\\)", imageUrl: '' },
      { text: "\\((3, -1)\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "The \\(y\\)-terms have opposite signs (\\(-y\\) and \\(+y\\)), so adding the two equations will eliminate \\(y\\)."
      },
      {
        explanation: "Add the equations.",
        workingOut: "(x - y) + (3x + y) = 4 + 0 \\implies 4x = 4 \\implies x = 1"
      },
      {
        explanation: "Substitute \\(x = 1\\) into the first equation to find \\(y\\).",
        workingOut: "1 - y = 4 \\implies y = -3"
      },
      {
        explanation: "So the point of intersection is \\((1, -3)\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q12c',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Solve the simultaneous equations \\( x + 3y = -5 \\) and \\( 3x - y = -5 \\) by elimination. What is their point of intersection?",
    options: [
      { text: "\\((-2, -1)\\)", imageUrl: '' },
      { text: "\\((-1, -2)\\)", imageUrl: '' },
      { text: "\\((2, -1)\\)", imageUrl: '' },
      { text: "\\((-2, 1)\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Unlike the last two questions, neither the \\(x\\)- nor \\(y\\)-coefficients are already opposite — so first multiply one equation to line them up. Multiply the second equation by \\(3\\) so its \\(y\\)-coefficient becomes \\(-3\\), matching the \\(+3y\\) in the first equation.",
        workingOut: "3(3x - y) = 3(-5) \\implies 9x - 3y = -15"
      },
      {
        explanation: "Now add this to the first equation — the \\(y\\)-terms cancel.",
        workingOut: "(x + 3y) + (9x - 3y) = -5 + (-15) \\implies 10x = -20 \\implies x = -2"
      },
      {
        explanation: "Substitute \\(x = -2\\) into the first equation to find \\(y\\).",
        workingOut: "-2 + 3y = -5 \\implies 3y = -3 \\implies y = -1"
      },
      {
        explanation: "So the point of intersection is \\((-2, -1)\\)."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q13a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "A custom shirt company charges \\( \\$70 \\) for the first shirt and \\( \\$55 \\) for each additional shirt. Which rule gives the total cost \\( C(n) \\), in dollars, of buying \\( n \\) shirts?",
    options: [
      { text: "\\(C(n) = 55n + 15\\)", imageUrl: '' },
      { text: "\\(C(n) = 55n + 70\\)", imageUrl: '' },
      { text: "\\(C(n) = 70n - 15\\)", imageUrl: '' },
      { text: "\\(C(n) = 125n\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Split the cost into two parts: the FIRST shirt costs \\(\\$70\\) on its own, and the REMAINING \\((n-1)\\) shirts cost \\(\\$55\\) each."
      },
      {
        explanation: "Write this as an expression and expand the brackets.",
        workingOut: "C(n) = 70 + 55(n-1) = 70 + 55n - 55"
      },
      {
        explanation: "Combine the constant terms \\(70\\) and \\(-55\\).",
        workingOut: "C(n) = 55n + 15"
      },
      {
        explanation: "Watch the trap: it is tempting to just write \\(70 + 55n\\) forgetting that the FIRST shirt is already included in \\(70\\), not an extra \\(n\\)th shirt — that mistake gives the wrong constant."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q13b',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "The shirt company also charges \\( \\$12 \\) delivery for the first shirt and \\( \\$3 \\) for each additional shirt delivered. Which rule gives the delivery cost \\( D(n) \\), in dollars, for \\( n \\) shirts?",
    options: [
      { text: "\\(D(n) = 3n + 9\\)", imageUrl: '' },
      { text: "\\(D(n) = 3n + 12\\)", imageUrl: '' },
      { text: "\\(D(n) = 12n\\)", imageUrl: '' },
      { text: "\\(D(n) = 15n\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Use the same structure as the cost rule: the first shirt's delivery is \\(\\$12\\), and the remaining \\((n-1)\\) shirts cost \\(\\$3\\) each to deliver."
      },
      {
        explanation: "Write this as an expression and expand.",
        workingOut: "D(n) = 12 + 3(n-1) = 12 + 3n - 3"
      },
      {
        explanation: "Combine the constants.",
        workingOut: "D(n) = 3n + 9"
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q13c',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Using \\( C(n) = 55n + 15 \\) for the shirts and \\( D(n) = 3n + 9 \\) for delivery, which rule gives the total cost \\( T(n) \\) of ordering and delivering \\( n \\) shirts?",
    options: [
      { text: "\\(T(n) = 58n + 24\\)", imageUrl: '' },
      { text: "\\(T(n) = 58n + 9\\)", imageUrl: '' },
      { text: "\\(T(n) = 61n + 24\\)", imageUrl: '' },
      { text: "\\(T(n) = 55n + 12\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "The total cost is just the shirt cost PLUS the delivery cost — add the two rules together.",
        workingOut: "T(n) = C(n) + D(n) = (55n + 15) + (3n + 9)"
      },
      {
        explanation: "Collect the \\(n\\)-terms together, and the constant terms together.",
        workingOut: "T(n) = (55n + 3n) + (15 + 9) = 58n + 24"
      },
      {
        explanation: "Watch the trap: it is easy to add only one of the two constants (\\(15\\) or \\(9\\)) by mistake — make sure both are included."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q14a',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Consider the family of linear equations \\( y = \\frac{1}{3}x + c \\). Sketch, on a single set of axes, the four lines corresponding to \\( c = -3, -1, 1, 3 \\).",
    options: [],
    answer: 'Four parallel lines, each with gradient 1/3 and y-intercepts -3, -1, 1 and 3.',
    solutionSteps: [
      {
        explanation: "Every line in this family has the exact same gradient, \\(\\frac{1}{3}\\) — only the constant \\(c\\) (the \\(y\\)-intercept) changes between them."
      },
      {
        explanation: "List the \\(y\\)-intercept for each value of \\(c\\): these are simply the points \\((0, c)\\).",
        workingOut: "(0, -3), \\quad (0, -1), \\quad (0, 1), \\quad (0, 3)"
      },
      {
        explanation: "For each line, use the gradient \\(\\frac{1}{3}\\) to find a second point: move \\(3\\) units right and \\(1\\) unit up from the \\(y\\)-intercept.",
        workingOut: "(3, -2), \\quad (3, 0), \\quad (3, 2), \\quad (3, 4)"
      },
      {
        explanation: "Draw all four lines on the same axes — they should look evenly spaced and tilted at the same angle, never touching each other."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q14b',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "What geometric relationship do the four lines \\( y = \\frac{1}{3}x + c \\) (for \\( c = -3, -1, 1, 3 \\)) share?",
    options: [
      { text: "They are all parallel to each other", imageUrl: '' },
      { text: "They all pass through a single common point", imageUrl: '' },
      { text: "They are all perpendicular to each other", imageUrl: '' },
      { text: "They are all the same line", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "Recall the key fact about gradients: two lines are PARALLEL exactly when they have the same gradient (slope), no matter what their \\(y\\)-intercepts are."
      },
      {
        explanation: "Compare the gradients of all four lines: every single one has gradient \\(\\frac{1}{3}\\), only the \\(y\\)-intercept \\(c\\) differs.",
        workingOut: "m = \\frac{1}{3} \\text{ for all four lines}"
      },
      {
        explanation: "Since the gradients are identical but the \\(y\\)-intercepts are different, the lines never cross — they run alongside each other forever, which is the definition of PARALLEL lines."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q15a',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Consider the equation \\( y - 3 = m(x - 2) \\). Sketch on a single coordinate plane the four lines corresponding to: \\( m = 1 \\), \\( m = 2 \\), \\( m = -\\frac{1}{2} \\), \\( m = 0 \\).",
    options: [],
    answer: 'Four lines with different slopes (1, 2, -1/2, 0) all passing through the point (2, 3).',
    solutionSteps: [
      {
        explanation: "Rearrange the equation into \\(y = \\dots\\) form for each value of \\(m\\), one at a time, to make plotting easier.",
        workingOut: "m=1: \\ y - 3 = x - 2 \\implies y = x + 1"
      },
      {
        explanation: "Repeat for \\(m = 2\\).",
        workingOut: "m=2: \\ y - 3 = 2(x-2) = 2x - 4 \\implies y = 2x - 1"
      },
      {
        explanation: "Repeat for \\(m = -\\frac{1}{2}\\).",
        workingOut: "m=-\\frac{1}{2}: \\ y - 3 = -\\frac{1}{2}(x-2) = -\\frac{1}{2}x + 1 \\implies y = -\\frac{1}{2}x + 4"
      },
      {
        explanation: "Repeat for \\(m = 0\\) — this special case gives a horizontal line.",
        workingOut: "m=0: \\ y - 3 = 0 \\implies y = 3"
      },
      {
        explanation: "Plot all four lines on the same axes. Notice they all pass through \\((2, 3)\\) despite having completely different slopes — that point never changes because it is built into the equation's form."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q15b',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Identify the single point on the coordinate plane through which all four lines from \\( y - 3 = m(x - 2) \\) pass, no matter the value of \\( m \\).",
    options: [
      { text: "\\((2, 3)\\)", imageUrl: '' },
      { text: "\\((3, 2)\\)", imageUrl: '' },
      { text: "\\((-2, 3)\\)", imageUrl: '' },
      { text: "\\((2, -3)\\)", imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: "This equation is written in point-slope form, \\(y - y_1 = m(x - x_1)\\), which is specifically built to pass through a chosen fixed point \\((x_1, y_1)\\) no matter what gradient \\(m\\) is used."
      },
      {
        explanation: "Match the given equation against this general form to read off \\(x_1\\) and \\(y_1\\).",
        workingOut: "y - 3 = m(x - 2) \\ \\implies \\ x_1 = 2, \\quad y_1 = 3"
      },
      {
        explanation: "So every line in this family passes through \\((2, 3)\\), which matches what you should see in your sketch from the previous question."
      }
    ]
  },
  {
    ...CH,
    id: 'y11a-3c-q15c',
    difficulty: 'medium',
    type: 'teacher_review',
    question: "Prove mathematically that the line \\( y - 3 = m(x - 2) \\) must pass through the point \\( (2, 3) \\), regardless of the value of \\( m \\).",
    options: [],
    answer: 'Substitute x = 2 and y = 3 into the equation. LHS: 3 - 3 = 0. RHS: m(2 - 2) = m(0) = 0. Since LHS = RHS = 0 for any m, the equation is satisfied for every real value of m.',
    solutionSteps: [
      {
        explanation: "To prove a point lies on a line for EVERY value of \\(m\\), substitute the point's coordinates into the equation and show both sides come out equal no matter what \\(m\\) is."
      },
      {
        explanation: "Substitute \\(x = 2\\) and \\(y = 3\\) into the left-hand side.",
        workingOut: "\\text{LHS} = y - 3 = 3 - 3 = 0"
      },
      {
        explanation: "Substitute the same values into the right-hand side.",
        workingOut: "\\text{RHS} = m(x - 2) = m(2 - 2) = m \\times 0 = 0"
      },
      {
        explanation: "The key insight: the right-hand side is \\(m\\) MULTIPLIED by zero — and any number multiplied by zero is zero, regardless of what \\(m\\) actually is."
      },
      {
        explanation: "Since LHS \\(=\\) RHS \\(= 0\\) is true no matter what value \\(m\\) takes, the point \\((2, 3)\\) satisfies the equation for every \\(m\\) — proving it always lies on the line."
      }
    ]
  },
];
