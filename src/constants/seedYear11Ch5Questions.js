export const CH5_QUESTIONS_Y11A = [
  // ==========================================
  // TOPIC 5A: Translations of known graphs
  // ==========================================
  {
    "id": "y11a-5-q1",
    "c": "5A",
    "t": "Translations of known graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "How is the graph of $y = x^2$ shifted to obtain the graph of $y = x^2 + 7$?",
    "a": "Translated $7$ units upwards",
    "opts": [
      "Translated $7$ units upwards",
      "Translated $7$ units downwards",
      "Translated $7$ units to the right",
      "Translated $7$ units to the left"
    ],
    "h": "Consider the effect of adding a constant to the entire function.",
    "s": "Adding $7$ to $x^2$ increases every $y$-value by $7$. Therefore, the graph is shifted vertically upwards by $7$ units.",
    "solutionSteps": [
      {
        "explanation": "Compare the new function $y = x^2 + 7$ with the base function $f(x) = x^2$.",
        "workingOut": "y = f(x) + 7"
      },
      {
        "explanation": "A transformation of the form $y = f(x) + c$ represents a vertical translation by $c$ units.",
        "workingOut": "\\text{Vertical shift of } +7"
      }
    ]
  },
  {
    "id": "y11a-5-q2",
    "c": "5A",
    "t": "Translations of known graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "How is the graph of $y = x^2$ shifted to obtain the graph of $y = (x - 4)^2$?",
    "a": "Translated $4$ units to the right",
    "opts": [
      "Translated $4$ units to the right",
      "Translated $4$ units to the left",
      "Translated $4$ units upwards",
      "Translated $4$ units downwards"
    ],
    "h": "Consider the effect of subtracting a constant from $x$ before squaring.",
    "s": "Replacing $x$ with $(x - 4)$ means that for the function to have the same output, the input $x$ must be $4$ units larger. Therefore, the graph is translated $4$ units to the right.",
    "solutionSteps": [
      {
        "explanation": "Compare the new function with the base function $f(x) = x^2$.",
        "workingOut": "y = f(x - 4)"
      },
      {
        "explanation": "A transformation of the form $y = f(x - c)$ represents a horizontal translation by $c$ units. If $c > 0$, it is to the right.",
        "workingOut": "\\text{Horizontal shift of } +4 \\text{ (right)}"
      }
    ]
  },
  {
    "id": "y11a-5-q3",
    "c": "5A",
    "t": "Translations of known graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the centre and radius of the circle given by the equation $(x - 3)^2 + (y + 5)^2 = 16$?",
    "a": "Centre $(3, -5)$, radius $4$",
    "opts": [
      "Centre $(3, -5)$, radius $4$",
      "Centre $(-3, 5)$, radius $4$",
      "Centre $(3, -5)$, radius $16$",
      "Centre $(-3, 5)$, radius $16$"
    ],
    "h": "Compare the equation to the standard form $(x - h)^2 + (y - k)^2 = r^2$.",
    "s": "The standard form is $(x - h)^2 + (y - k)^2 = r^2$. Here, $h = 3$, $k = -5$, and $r^2 = 16$. Thus, the centre is $(3, -5)$ and the radius is $\\sqrt{16} = 4$.",
    "solutionSteps": [
      {
        "explanation": "Identify $h$ and $k$ from the terms $(x - h)^2$ and $(y - k)^2$.",
        "workingOut": "\\begin{aligned} x - h &= x - 3 \\implies h = 3 \\\\ y - k &= y + 5 \\implies k = -5 \\end{aligned}"
      },
      {
        "explanation": "Identify $r^2$ and solve for $r$.",
        "workingOut": "r^2 = 16 \\implies r = 4"
      }
    ]
  },
  {
    "id": "y11a-5-q4",
    "c": "5A",
    "t": "Translations of known graphs",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "By completing the square, find the centre and radius of the circle: $x^2 - 6x + y^2 + 8y = 0$",
    "a": "Centre $(3, -4)$, radius $5$",
    "opts": [
      "Centre $(3, -4)$, radius $5$",
      "Centre $(-3, 4)$, radius $5$",
      "Centre $(3, -4)$, radius $25$",
      "Centre $(-3, 4)$, radius $25$"
    ],
    "h": "Group the $x$ terms and $y$ terms, then add the square of half the coefficient to both sides.",
    "s": "Group terms: $(x^2 - 6x) + (y^2 + 8y) = 0$. Complete the square for $x$: add $(-6/2)^2 = 9$. Complete the square for $y$: add $(8/2)^2 = 16$. Equation becomes $(x^2 - 6x + 9) + (y^2 + 8y + 16) = 25$, which simplifies to $(x - 3)^2 + (y + 4)^2 = 5^2$. Thus, the centre is $(3, -4)$ and radius is $5$.",
    "solutionSteps": [
      {
        "explanation": "Group the $x$ and $y$ variables together.",
        "workingOut": "(x^2 - 6x) + (y^2 + 8y) = 0"
      },
      {
        "explanation": "Complete the square for $x$ by adding $(\\frac{-6}{2})^2 = 9$ to both sides.",
        "workingOut": "(x^2 - 6x + 9) + (y^2 + 8y) = 9"
      },
      {
        "explanation": "Complete the square for $y$ by adding $(\\frac{8}{2})^2 = 16$ to both sides.",
        "workingOut": "(x^2 - 6x + 9) + (y^2 + 8y + 16) = 9 + 16"
      },
      {
        "explanation": "Factor the perfect square trinomials and simplify.",
        "workingOut": "(x - 3)^2 + (y + 4)^2 = 25"
      },
      {
        "explanation": "Identify the centre $(h, k)$ and radius $r = \\sqrt{25}$.",
        "workingOut": "\\text{Centre} = (3, -4), \\text{Radius} = 5"
      }
    ]
  },

  // ==========================================
  // TOPIC 5B: Reflection in the y-axis and x-axis
  // ==========================================
  {
    "id": "y11a-5-q5",
    "c": "5B",
    "t": "Reflection in the axes",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the function obtained when $y = x^3 - 4x + 2$ is reflected in the $y$-axis.",
    "a": "$y = -x^3 + 4x + 2$",
    "opts": [
      "$y = -x^3 + 4x + 2$",
      "$y = -x^3 + 4x - 2$",
      "$y = x^3 - 4x - 2$",
      "$y = -x^3 - 4x + 2$"
    ],
    "h": "To reflect a function in the $y$-axis, replace every $x$ with $-x$.",
    "s": "Substitute $-x$ into the function: $y = (-x)^3 - 4(-x) + 2$. Since $(-x)^3 = -x^3$, this simplifies to $y = -x^3 + 4x + 2$.",
    "solutionSteps": [
      {
        "explanation": "A reflection in the $y$-axis transforms $f(x)$ into $f(-x)$.",
        "workingOut": "y = f(-x)"
      },
      {
        "explanation": "Substitute $-x$ for every $x$ in the equation.",
        "workingOut": "y = (-x)^3 - 4(-x) + 2"
      },
      {
        "explanation": "Expand and simplify.",
        "workingOut": "y = -x^3 + 4x + 2"
      }
    ]
  },
  {
    "id": "y11a-5-q6",
    "c": "5B",
    "t": "Reflection in the axes",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the function obtained when $y = x^2 - 5x + 7$ is reflected in the $x$-axis.",
    "a": "$y = -x^2 + 5x - 7$",
    "opts": [
      "$y = -x^2 + 5x - 7$",
      "$y = -x^2 - 5x + 7$",
      "$y = x^2 + 5x + 7$",
      "$y = -x^2 + 5x + 7$"
    ],
    "h": "To reflect a function in the $x$-axis, multiply the entire function by $-1$ (i.e., replace $y$ with $-y$).",
    "s": "Reflecting in the $x$-axis means we find $-f(x)$. Thus, $y = -(x^2 - 5x + 7) = -x^2 + 5x - 7$.",
    "solutionSteps": [
      {
        "explanation": "A reflection in the $x$-axis transforms $f(x)$ into $-f(x)$.",
        "workingOut": "y = -f(x)"
      },
      {
        "explanation": "Multiply the entire expression by $-1$.",
        "workingOut": "y = -(x^2 - 5x + 7)"
      },
      {
        "explanation": "Distribute the negative sign.",
        "workingOut": "y = -x^2 + 5x - 7"
      }
    ]
  },
  {
    "id": "y11a-5-q7",
    "c": "5B",
    "t": "Rotation about the origin",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Find the function obtained when $y = 3^x - x$ is rotated $180^{\\circ}$ about the origin.",
    "a": "$y = -3^{-x} - x$",
    "opts": [
      "$y = -3^{-x} - x$",
      "$y = -3^{-x} + x$",
      "$y = 3^{-x} + x$",
      "$y = -3^x + x$"
    ],
    "h": "A rotation of $180^{\\circ}$ about the origin is equivalent to reflecting in the $y$-axis and then the $x$-axis, meaning $y = -f(-x)$.",
    "s": "First, reflect in the $y$-axis by replacing $x$ with $-x$: $y = 3^{-x} - (-x) = 3^{-x} + x$. Next, reflect in the $x$-axis by multiplying the entire function by $-1$: $y = -(3^{-x} + x) = -3^{-x} - x$.",
    "solutionSteps": [
      {
        "explanation": "A $180^{\\circ}$ rotation about the origin transforms $f(x)$ to $-f(-x)$.",
        "workingOut": "y = -f(-x)"
      },
      {
        "explanation": "First, substitute $-x$ for $x$.",
        "workingOut": "f(-x) = 3^{-x} - (-x) = 3^{-x} + x"
      },
      {
        "explanation": "Then, multiply the result by $-1$.",
        "workingOut": "-f(-x) = -(3^{-x} + x) = -3^{-x} - x"
      }
    ]
  },

  // ==========================================
  // TOPIC 5C: Even and odd symmetry
  // ==========================================
  {
    "id": "y11a-5-q8",
    "c": "5C",
    "t": "Even and odd symmetry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Classify the function $f(x) = x^4 - 3x^2 + 1$ as odd, even, or neither.",
    "a": "Even",
    "opts": [
      "Even",
      "Odd",
      "Neither",
      "Both"
    ],
    "h": "Find $f(-x)$. If $f(-x) = f(x)$, it's even. If $f(-x) = -f(x)$, it's odd.",
    "s": "Substitute $-x$ into the function: $f(-x) = (-x)^4 - 3(-x)^2 + 1 = x^4 - 3x^2 + 1$. Since $f(-x) = f(x)$, the function is even.",
    "solutionSteps": [
      {
        "explanation": "Evaluate $f(-x)$ by replacing every $x$ with $-x$.",
        "workingOut": "f(-x) = (-x)^4 - 3(-x)^2 + 1"
      },
      {
        "explanation": "Simplify the expression using the properties of even exponents.",
        "workingOut": "f(-x) = x^4 - 3x^2 + 1"
      },
      {
        "explanation": "Compare the simplified $f(-x)$ with the original $f(x)$.",
        "workingOut": "f(-x) = f(x)"
      },
      {
        "explanation": "Conclude the symmetry type based on the relationship.",
        "workingOut": "\\text{Therefore, } f(x) \\text{ is even.}"
      }
    ]
  },
  {
    "id": "y11a-5-q9",
    "c": "5C",
    "t": "Even and odd symmetry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Classify the function $f(x) = x^3 - 4x$ as odd, even, or neither.",
    "a": "Odd",
    "opts": [
      "Even",
      "Odd",
      "Neither",
      "Both"
    ],
    "h": "Find $f(-x)$. If $f(-x) = f(x)$, it's even. If $f(-x) = -f(x)$, it's odd.",
    "s": "Substitute $-x$: $f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x$. Factoring out $-1$ gives $-(x^3 - 4x) = -f(x)$. Since $f(-x) = -f(x)$, the function is odd.",
    "solutionSteps": [
      {
        "explanation": "Evaluate $f(-x)$ by replacing every $x$ with $-x$.",
        "workingOut": "f(-x) = (-x)^3 - 4(-x)"
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "f(-x) = -x^3 + 4x"
      },
      {
        "explanation": "Factor out $-1$ to compare with the original function.",
        "workingOut": "f(-x) = -(x^3 - 4x) = -f(x)"
      },
      {
        "explanation": "Conclude the symmetry type.",
        "workingOut": "\\text{Therefore, } f(x) \\text{ is odd.}"
      }
    ]
  },
  {
    "id": "y11a-5-q10",
    "c": "5C",
    "t": "Even and odd symmetry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Classify the function $f(x) = \\frac{x}{x^2 + 4}$ as odd, even, or neither.",
    "a": "Odd",
    "opts": [
      "Even",
      "Odd",
      "Neither",
      "Both"
    ],
    "h": "Substitute $-x$ for $x$ and simplify.",
    "s": "$f(-x) = \\frac{-x}{(-x)^2 + 4} = \\frac{-x}{x^2 + 4} = -\\frac{x}{x^2 + 4} = -f(x)$. Because $f(-x) = -f(x)$, it is an odd function.",
    "solutionSteps": [
      {
        "explanation": "Substitute $-x$ into the function.",
        "workingOut": "f(-x) = \\frac{-x}{(-x)^2 + 4}"
      },
      {
        "explanation": "Simplify the denominator.",
        "workingOut": "f(-x) = \\frac{-x}{x^2 + 4}"
      },
      {
        "explanation": "Factor out the negative sign.",
        "workingOut": "f(-x) = -\\left(\\frac{x}{x^2 + 4}\\right) = -f(x)"
      },
      {
        "explanation": "Conclude the symmetry.",
        "workingOut": "\\text{The function is odd.}"
      }
    ]
  },

  // ==========================================
  // TOPIC 5D: Horizontal and vertical dilations
  // ==========================================
  {
    "id": "y11a-5-q11",
    "c": "5D",
    "t": "Dilations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Identify how the graph of $y = \\frac{1}{9}x^2 - x$ can be obtained from $y = x^2 - 3x$ by a single dilation.",
    "a": "A horizontal dilation by a factor of 3",
    "opts": [
      "A horizontal dilation by a factor of 3",
      "A horizontal dilation by a factor of 1/3",
      "A vertical dilation by a factor of 1/9",
      "A vertical dilation by a factor of 9"
    ],
    "h": "Compare $f(x)$ with $f(kx)$ or $k f(x)$. Try substituting $x$ with $cx$ to see if it matches the new function.",
    "s": "Let $f(x) = x^2 - 3x$. If we apply a horizontal dilation by substituting $x$ with $\\frac{x}{3}$, we get $f(\\frac{x}{3}) = (\\frac{x}{3})^2 - 3(\\frac{x}{3}) = \\frac{x^2}{9} - x$. This perfectly matches the second equation. Replacing $x$ with $x/k$ represents a horizontal stretch by a factor of $k$. Here $k = 3$.",
    "solutionSteps": [
      {
        "explanation": "Let the original function be $f(x) = x^2 - 3x$. We are looking for a transformation $y = f(kx)$ or $y = A f(x)$.",
        "workingOut": "y = x^2 - 3x"
      },
      {
        "explanation": "Notice that the new function is $\\frac{1}{9}x^2 - x$. Let's test $f(cx)$.",
        "workingOut": "f(cx) = (cx)^2 - 3(cx) = c^2x^2 - 3cx"
      },
      {
        "explanation": "Equate the coefficients: $c^2 = \\frac{1}{9}$ and $3c = 1$. Both give $c = \\frac{1}{3}$.",
        "workingOut": "c = \\frac{1}{3}"
      },
      {
        "explanation": "The transformation is $y = f(\\frac{x}{3})$, which corresponds to replacing $x$ with $\\frac{x}{k}$ where $k=3$. This is a horizontal dilation by a factor of $3$.",
        "workingOut": "\\text{Horizontal dilation factor } k=3"
      }
    ]
  },

  // ==========================================
  // TOPIC 5E: The absolute value function
  // ==========================================
  {
    "id": "y11a-5-q12",
    "c": "5E",
    "t": "Evaluating absolute values",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Evaluate: $|-4| - |-9|$",
    "a": "-5",
    "opts": [],
    "h": "The absolute value of a number is its distance from zero. Make all numbers positive before subtracting.",
    "s": "$|-4| = 4$ and $|-9| = 9$. Thus, $4 - 9 = -5$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the absolute values separately.",
        "workingOut": "\\begin{aligned} |-4| &= 4 \\\\ |-9| &= 9 \\end{aligned}"
      },
      {
        "explanation": "Perform the subtraction.",
        "workingOut": "4 - 9 = -5"
      }
    ]
  },
  {
    "id": "y11a-5-q13",
    "c": "5E",
    "t": "Absolute value equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Solve for $x$: $|4x| = 20$",
    "a": "$x = 5$ or $x = -5$",
    "opts": [
      "$x = 5$ or $x = -5$",
      "$x = 5$ only",
      "$x = -5$ only",
      "No solution"
    ],
    "h": "The expression inside the absolute value can be either positive or negative.",
    "s": "If $|4x| = 20$, then $4x = 20$ or $4x = -20$. Dividing by $4$ gives $x = 5$ or $x = -5$.",
    "solutionSteps": [
      {
        "explanation": "Set up two equations to account for the absolute value.",
        "workingOut": "4x = 20 \\quad \\text{or} \\quad 4x = -20"
      },
      {
        "explanation": "Solve each equation for $x$.",
        "workingOut": "\\begin{aligned} x &= \\frac{20}{4} = 5 \\\\ x &= \\frac{-20}{4} = -5 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y11a-5-q14",
    "c": "5E",
    "t": "Absolute value equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Solve for $x$: $|2x - 5| = 7$",
    "a": "$x = 6$ or $x = -1$",
    "opts": [
      "$x = 6$ or $x = -1$",
      "$x = 6$ or $x = 1$",
      "$x = -6$ or $x = 1$",
      "$x = 1$ or $x = -1$"
    ],
    "h": "Set $2x - 5$ to $7$ and $-7$, then solve both equations.",
    "s": "$2x - 5 = 7 \\implies 2x = 12 \\implies x = 6$. Alternatively, $2x - 5 = -7 \\implies 2x = -2 \\implies x = -1$.",
    "solutionSteps": [
      {
        "explanation": "Remove the absolute value by creating two equations.",
        "workingOut": "2x - 5 = 7 \\quad \\text{or} \\quad 2x - 5 = -7"
      },
      {
        "explanation": "Solve the first equation.",
        "workingOut": "2x = 12 \\implies x = 6"
      },
      {
        "explanation": "Solve the second equation.",
        "workingOut": "2x = -2 \\implies x = -1"
      }
    ]
  },
  {
    "id": "y11a-5-q15",
    "c": "5E",
    "t": "Absolute value equations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Solve for $x$: $|x + 6| = -3$",
    "a": "No solution",
    "opts": [
      "No solution",
      "$x = -3$ or $x = -9$",
      "$x = 3$ or $x = -3$",
      "$x = 9$ or $x = -9$"
    ],
    "h": "Can an absolute value ever equal a negative number?",
    "s": "The absolute value of any real expression must be greater than or equal to zero. Therefore, $|x + 6|$ can never equal $-3$, so there is no real solution.",
    "solutionSteps": [
      {
        "explanation": "Analyze the properties of the absolute value function.",
        "workingOut": "|y| \\ge 0 \\text{ for all real } y"
      },
      {
        "explanation": "Compare with the given equation.",
        "workingOut": "|x + 6| = -3 \\text{ is impossible.}"
      }
    ]
  },

  // ==========================================
  // TOPIC 5F: Composite functions
  // ==========================================
  {
    "id": "y11a-5-q16",
    "c": "5F",
    "t": "Composite functions",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Given that $f(x) = 4x - 1$ and $g(x) = x^2 + 2$, find the value of $f(g(3))$.",
    "a": "43",
    "opts": [],
    "h": "First calculate $g(3)$, then substitute that result into $f(x)$.",
    "s": "First find $g(3)$: $g(3) = (3)^2 + 2 = 9 + 2 = 11$. Then find $f(11)$: $f(11) = 4(11) - 1 = 44 - 1 = 43$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the inner function $g(x)$ at $x = 3$.",
        "workingOut": "g(3) = 3^2 + 2 = 9 + 2 = 11"
      },
      {
        "explanation": "Substitute this result into the outer function $f(x)$.",
        "workingOut": "f(11) = 4(11) - 1"
      },
      {
        "explanation": "Calculate the final value.",
        "workingOut": "44 - 1 = 43"
      }
    ]
  },
  {
    "id": "y11a-5-q17",
    "c": "5F",
    "t": "Composite functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Given that $f(x) = 4x - 1$ and $g(x) = x^2 + 2$, find an expression for $g(f(x))$.",
    "a": "$16x^2 - 8x + 3$",
    "opts": [
      "$16x^2 - 8x + 3$",
      "$16x^2 - 8x - 1$",
      "$4x^2 + 7$",
      "$4x^2 + 1$"
    ],
    "h": "Substitute the entire expression for $f(x)$ into $g(x)$ in place of $x$.",
    "s": "$g(f(x)) = g(4x - 1)$. We substitute $(4x - 1)$ into $g$: $(4x - 1)^2 + 2$. Expanding the square gives $16x^2 - 8x + 1 + 2 = 16x^2 - 8x + 3$.",
    "solutionSteps": [
      {
        "explanation": "Substitute $f(x)$ into $g(x)$.",
        "workingOut": "g(f(x)) = (f(x))^2 + 2 = (4x - 1)^2 + 2"
      },
      {
        "explanation": "Expand the squared binomial.",
        "workingOut": "(4x - 1)^2 = 16x^2 - 8x + 1"
      },
      {
        "explanation": "Add $2$ and simplify.",
        "workingOut": "16x^2 - 8x + 1 + 2 = 16x^2 - 8x + 3"
      }
    ]
  },
  {
    "id": "y11a-5-q18",
    "c": "5F",
    "t": "Domain and range of composite functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Find the domain of the composite function $f(g(x))$ given that $f(x) = x - 2$ and $g(x) = \\sqrt{x - 3}$.",
    "a": "$x \\ge 3$",
    "opts": [
      "$x \\ge 3$",
      "$x \\ge 0$",
      "$x \\ge 2$",
      "All real $x$"
    ],
    "h": "The domain of $f(g(x))$ requires $x$ to be in the domain of $g(x)$, and $g(x)$ to be in the domain of $f(x)$.",
    "s": "For $g(x) = \\sqrt{x - 3}$ to be defined, $x - 3 \\ge 0$, so $x \\ge 3$. $f(x)$ accepts any real number, so there are no further restrictions on $g(x)$. Thus, the domain is $x \\ge 3$.",
    "solutionSteps": [
      {
        "explanation": "Identify the domain of the inner function $g(x)$.",
        "workingOut": "x - 3 \\ge 0 \\implies x \\ge 3"
      },
      {
        "explanation": "Identify the domain of the outer function $f(x)$.",
        "workingOut": "f(u) = u - 2 \\text{ is defined for all real } u."
      },
      {
        "explanation": "Combine the conditions. $g(x)$ must produce real outputs that $f(x)$ can accept. Since $f$ accepts anything, the restriction comes entirely from $g$.",
        "workingOut": "\\text{Domain: } x \\ge 3"
      }
    ]
  },

  // ==========================================
  // TOPIC 5G: Combining transformations
  // ==========================================
  {
    "id": "y11a-5-q19",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Write down the equation for $y = x^2$ after it is translated $3$ units to the right and $4$ units down.",
    "a": "$y = (x - 3)^2 - 4$",
    "opts": [
      "$y = (x - 3)^2 - 4$",
      "$y = (x + 3)^2 - 4$",
      "$y = (x - 3)^2 + 4$",
      "$y = (x + 3)^2 + 4$"
    ],
    "h": "A translation to the right by $h$ replaces $x$ with $x - h$. A translation down by $k$ subtracts $k$ from the function.",
    "s": "Shifting $3$ units to the right transforms $x^2$ into $(x - 3)^2$. Shifting $4$ units down subtracts $4$ from the result, giving $y = (x - 3)^2 - 4$.",
    "solutionSteps": [
      {
        "explanation": "Apply the horizontal shift. Right by 3 means replace $x$ with $(x - 3)$.",
        "workingOut": "y_1 = (x - 3)^2"
      },
      {
        "explanation": "Apply the vertical shift. Down by 4 means subtract 4.",
        "workingOut": "y = (x - 3)^2 - 4"
      }
    ]
  },
  {
    "id": "y11a-5-q20",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Which of the following pairs of transformations commute (i.e., the order of application does not matter)?",
    "a": "Horizontal translation and vertical translation",
    "opts": [
      "Horizontal translation and vertical translation",
      "Horizontal translation and horizontal dilation",
      "Vertical translation and vertical dilation",
      "Reflection in the y-axis and horizontal translation"
    ],
    "h": "Think about whether applying one transformation affects the reference point or axis of the other.",
    "s": "Horizontal and vertical translations operate on orthogonal axes, so shifting horizontally then vertically is identical to shifting vertically then horizontally. Conversely, a horizontal dilation scales the horizontal axis, which will alter the effect of a subsequent horizontal translation.",
    "solutionSteps": [
      {
        "explanation": "Analyze 'Horizontal translation and horizontal dilation'.",
        "workingOut": "f(k(x - c)) \\neq f(kx - c) \\text{, so they do not commute.}"
      },
      {
        "explanation": "Analyze 'Vertical translation and vertical dilation'.",
        "workingOut": "k(f(x) + c) = k f(x) + kc \\neq k f(x) + c \\text{, so they do not commute.}"
      },
      {
        "explanation": "Analyze 'Horizontal translation and vertical translation'.",
        "workingOut": "f(x - c) + d = f(x - c) + d \\text{, these operate independently.}"
      }
    ]
  },

  // ==========================================
  // TOPIC 5H: Continuity and piecewise-defined functions
  // ==========================================
  {
    "id": "y11a-5-q21",
    "c": "5H",
    "t": "Continuity",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Let $f(x) = \\begin{cases} x^2, & \\text{for } x \\le 1 \\\\ x + 1, & \\text{for } x > 1 \\end{cases}$. Is the curve continuous at $x = 1$?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Cannot be determined",
      "It is continuous everywhere"
    ],
    "h": "Check if the limits from the left and right approach the same value at $x = 1$.",
    "s": "From the left, as $x \\to 1$, $f(x) = x^2 \\to 1^2 = 1$. From the right, as $x \\to 1$, $f(x) = x + 1 \\to 1 + 1 = 2$. Since $1 \\neq 2$, the graph has a \"jump\" and is not continuous at $x = 1$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the function as it approaches $x = 1$ from the left ($x \\le 1$).",
        "workingOut": "f(1) = 1^2 = 1"
      },
      {
        "explanation": "Evaluate the limit as it approaches $x = 1$ from the right ($x > 1$).",
        "workingOut": "\\lim_{x \\to 1^+} (x + 1) = 1 + 1 = 2"
      },
      {
        "explanation": "Compare the left and right limits.",
        "workingOut": "1 \\neq 2 \\implies \\text{Not continuous at } x = 1."
      }
    ]
  },
  {
    "id": "y11a-5-q22",
    "c": "5H",
    "t": "Piecewise functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Let $f(x) = \\begin{cases} x^2 - 4, & \\text{for } x < 2 \\\\ x - 2, & \\text{for } x \\ge 2 \\end{cases}$. Is the curve continuous at $x = 2$?",
    "a": "Yes",
    "opts": [
      "Yes",
      "No",
      "Cannot be determined",
      "It is only continuous for x > 2"
    ],
    "h": "Check the value of both parts at the boundary $x = 2$.",
    "s": "From the left, limit as $x \\to 2$ of $x^2 - 4$ is $2^2 - 4 = 0$. From the right, $f(2) = 2 - 2 = 0$. Because the limits match and equal the function's value, it is continuous at $x = 2$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the limit from the left ($x < 2$).",
        "workingOut": "\\lim_{x \\to 2^-} (x^2 - 4) = 2^2 - 4 = 0"
      },
      {
        "explanation": "Evaluate the function value and limit from the right ($x \\ge 2$).",
        "workingOut": "f(2) = 2 - 2 = 0"
      },
      {
        "explanation": "Compare the results.",
        "workingOut": "0 = 0 \\implies \\text{Continuous at } x = 2."
      }
    ]
  }
];
