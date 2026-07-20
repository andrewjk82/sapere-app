export const Y12A_CH5E_QUESTIONS = [
  {
    "id": "y12a-5e-q1ai",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Evaluate the definite integral exactly.\n\\(\\int_{0}^{1} e^{x}\\,dx\\)",
    "opts": [
      "\\(e+1\\)",
      "\\(1-e\\)",
      "\\(e\\)",
      "\\(e-1\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Antiderivative of \\(e^{x}\\) is \\(e^{x}\\). Evaluate upper minus lower.",
    "solution": "The exact answer is \\(e-1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: we must evaluate the definite integral of the natural exponential on the interval from \\(0\\) to \\(1\\). Strategy: use the fact that the antiderivative of \\(e^{x}\\) is \\(e^{x}\\) itself (chain-rule coefficient 1), then apply the Fundamental Theorem of Calculus (FTC). This turns the area/signed integral into a simple two-point evaluation.",
        "workingOut": "\\(\\int_{0}^{1} e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why find the antiderivative first? The FTC says that if \\(F'=f\\), then \\(\\int_{a}^{b}f=F(b)-F(a)\\). What we use: \\(\\frac{d}{dx}e^{x}=e^{x}\\), so \\(F(x)=e^{x}\\). Common mistake: inventing an extra factor such as \\(\\frac{1}{x}\\) or treating the integral like a power rule. This antiderivative is the input to the next evaluation step.",
        "workingOut": "\\(F(x)=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now apply the FTC by substituting the upper limit, then subtracting the value at the lower limit. Why upper-minus-lower? That is the definition of the definite integral; reversing the order flips the sign. A frequent error is swapping the limits when the lower limit is negative. Here upper contributes \\(e\\) and lower contributes \\(1\\).",
        "workingOut": "\\([e^{x}]_{0}^{1}=e^{1}-e^{0}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers of \\(e\\). Using \\(e^{0}=1\\) where it applies gives a clean exact form: \\(e^{1}-e^{0}\\) becomes \\(e-1\\). Why stay exact? Multiple-choice options are written with symbols like \\(e\\) and \\(e^{-1}\\), not decimals. Do not switch to a decimal unless the question asks for one. A common slip is reversing upper and lower after simplification.",
        "workingOut": "\\(e^{1}-e^{0}=e-1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e-1\\). This is the exact value of the definite integral (and, since \\(e^{x}>0\\) everywhere, also the geometric area under the curve on this interval). Checking: the expression matches option evaluation of upper minus lower after simplification.",
        "workingOut": "\\(e-1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q1aii",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Evaluate the definite integral exactly.\n\\(\\int_{-1}^{0} e^{x}\\,dx\\)",
    "opts": [
      "\\(e^{-1}-1\\)",
      "\\(1-e\\)",
      "\\(1-e^{-1}\\)",
      "\\(e-1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Antiderivative of \\(e^{x}\\) is \\(e^{x}\\). Evaluate upper minus lower.",
    "solution": "The exact answer is \\(1-e^{-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: we must evaluate the definite integral of the natural exponential on the interval from \\(-1\\) to \\(0\\). Strategy: use the fact that the antiderivative of \\(e^{x}\\) is \\(e^{x}\\) itself (chain-rule coefficient 1), then apply the Fundamental Theorem of Calculus (FTC). This turns the area/signed integral into a simple two-point evaluation.",
        "workingOut": "\\(\\int_{-1}^{0} e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why find the antiderivative first? The FTC says that if \\(F'=f\\), then \\(\\int_{a}^{b}f=F(b)-F(a)\\). What we use: \\(\\frac{d}{dx}e^{x}=e^{x}\\), so \\(F(x)=e^{x}\\). Common mistake: inventing an extra factor such as \\(\\frac{1}{x}\\) or treating the integral like a power rule. This antiderivative is the input to the next evaluation step.",
        "workingOut": "\\(F(x)=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now apply the FTC by substituting the upper limit, then subtracting the value at the lower limit. Why upper-minus-lower? That is the definition of the definite integral; reversing the order flips the sign. A frequent error is swapping the limits when the lower limit is negative. Here upper contributes \\(1\\) and lower contributes \\(e^{-1}\\).",
        "workingOut": "\\([e^{x}]_{-1}^{0}=e^{0}-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers of \\(e\\). Using \\(e^{0}=1\\) where it applies gives a clean exact form: \\(e^{0}-e^{-1}\\) becomes \\(1-e^{-1}\\). Why stay exact? Multiple-choice options are written with symbols like \\(e\\) and \\(e^{-1}\\), not decimals. Do not switch to a decimal unless the question asks for one. A common slip is reversing upper and lower after simplification.",
        "workingOut": "\\(e^{0}-e^{-1}=1-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1-e^{-1}\\). This is the exact value of the definite integral (and, since \\(e^{x}>0\\) everywhere, also the geometric area under the curve on this interval). Checking: the expression matches option evaluation of upper minus lower after simplification.",
        "workingOut": "\\(1-e^{-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q1aiii",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Evaluate the definite integral exactly.\n\\(\\int_{-2}^{0} e^{x}\\,dx\\)",
    "opts": [
      "\\(e^{-2}-1\\)",
      "\\(1-e^{-1}\\)",
      "\\(e^{2}-1\\)",
      "\\(1-e^{-2}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Antiderivative of \\(e^{x}\\) is \\(e^{x}\\). Evaluate upper minus lower.",
    "solution": "The exact answer is \\(1-e^{-2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: we must evaluate the definite integral of the natural exponential on the interval from \\(-2\\) to \\(0\\). Strategy: use the fact that the antiderivative of \\(e^{x}\\) is \\(e^{x}\\) itself (chain-rule coefficient 1), then apply the Fundamental Theorem of Calculus (FTC). This turns the area/signed integral into a simple two-point evaluation.",
        "workingOut": "\\(\\int_{-2}^{0} e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why find the antiderivative first? The FTC says that if \\(F'=f\\), then \\(\\int_{a}^{b}f=F(b)-F(a)\\). What we use: \\(\\frac{d}{dx}e^{x}=e^{x}\\), so \\(F(x)=e^{x}\\). Common mistake: inventing an extra factor such as \\(\\frac{1}{x}\\) or treating the integral like a power rule. This antiderivative is the input to the next evaluation step.",
        "workingOut": "\\(F(x)=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now apply the FTC by substituting the upper limit, then subtracting the value at the lower limit. Why upper-minus-lower? That is the definition of the definite integral; reversing the order flips the sign. A frequent error is swapping the limits when the lower limit is negative. Here upper contributes \\(1\\) and lower contributes \\(e^{-2}\\).",
        "workingOut": "\\([e^{x}]_{-2}^{0}=e^{0}-e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers of \\(e\\). Using \\(e^{0}=1\\) where it applies gives a clean exact form: \\(e^{0}-e^{-2}\\) becomes \\(1-e^{-2}\\). Why stay exact? Multiple-choice options are written with symbols like \\(e\\) and \\(e^{-1}\\), not decimals. Do not switch to a decimal unless the question asks for one. A common slip is reversing upper and lower after simplification.",
        "workingOut": "\\(e^{0}-e^{-2}=1-e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1-e^{-2}\\). This is the exact value of the definite integral (and, since \\(e^{x}>0\\) everywhere, also the geometric area under the curve on this interval). Checking: the expression matches option evaluation of upper minus lower after simplification.",
        "workingOut": "\\(1-e^{-2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q1aiv",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Evaluate the definite integral exactly.\n\\(\\int_{-3}^{0} e^{x}\\,dx\\)",
    "opts": [
      "\\(e^{-3}-1\\)",
      "\\(1-e^{-2}\\)",
      "\\(e^{3}-1\\)",
      "\\(1-e^{-3}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Antiderivative of \\(e^{x}\\) is \\(e^{x}\\). Evaluate upper minus lower.",
    "solution": "The exact answer is \\(1-e^{-3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: we must evaluate the definite integral of the natural exponential on the interval from \\(-3\\) to \\(0\\). Strategy: use the fact that the antiderivative of \\(e^{x}\\) is \\(e^{x}\\) itself (chain-rule coefficient 1), then apply the Fundamental Theorem of Calculus (FTC). This turns the area/signed integral into a simple two-point evaluation.",
        "workingOut": "\\(\\int_{-3}^{0} e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why find the antiderivative first? The FTC says that if \\(F'=f\\), then \\(\\int_{a}^{b}f=F(b)-F(a)\\). What we use: \\(\\frac{d}{dx}e^{x}=e^{x}\\), so \\(F(x)=e^{x}\\). Common mistake: inventing an extra factor such as \\(\\frac{1}{x}\\) or treating the integral like a power rule. This antiderivative is the input to the next evaluation step.",
        "workingOut": "\\(F(x)=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now apply the FTC by substituting the upper limit, then subtracting the value at the lower limit. Why upper-minus-lower? That is the definition of the definite integral; reversing the order flips the sign. A frequent error is swapping the limits when the lower limit is negative. Here upper contributes \\(1\\) and lower contributes \\(e^{-3}\\).",
        "workingOut": "\\([e^{x}]_{-3}^{0}=e^{0}-e^{-3}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers of \\(e\\). Using \\(e^{0}=1\\) where it applies gives a clean exact form: \\(e^{0}-e^{-3}\\) becomes \\(1-e^{-3}\\). Why stay exact? Multiple-choice options are written with symbols like \\(e\\) and \\(e^{-1}\\), not decimals. Do not switch to a decimal unless the question asks for one. A common slip is reversing upper and lower after simplification.",
        "workingOut": "\\(e^{0}-e^{-3}=1-e^{-3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1-e^{-3}\\). This is the exact value of the definite integral (and, since \\(e^{x}>0\\) everywhere, also the geometric area under the curve on this interval). Checking: the expression matches option evaluation of upper minus lower after simplification.",
        "workingOut": "\\(1-e^{-3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q1b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The area under \\(y=e^{x}\\) from \\(x=-5\\) to \\(x=1\\) equals which exact value?",
    "opts": [
      "\\(e+e^{-5}\\)",
      "\\(e-e^{-1}\\)",
      "\\(1-e^{-5}\\)",
      "\\(e-e^{-5}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(e-e^{-5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: we want the exact area under \\(y=e^{x}\\) from \\(x=-5\\) to \\(x=1\\). Strategy: because \\(e^{x}>0\\) for every real \\(x\\), area equals the definite integral \\(\\int_{-5}^{1}e^{x}\\,dx\\). We will antiderive, evaluate, and simplify — square-counting would only give a rough decimal check, not the exact value asked here.",
        "workingOut": "\\(\\text{Area}=\\int_{-5}^{1}e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why the antiderivative \\(e^{x}\\)? Differentiating \\(e^{x}\\) recovers the integrand exactly (no extra chain-rule factor). What: set \\(F(x)=e^{x}\\). Common mistake: using a power-rule style antiderivative such as \\(\\frac{e^{x+1}}{x+1}\\). This \\(F\\) is what the FTC needs next.",
        "workingOut": "\\(F(x)=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the FTC: upper limit minus lower limit. Why this order? Reversing it would negate the area. Substituting carefully gives \\(e^{1}-e^{-5}\\).",
        "workingOut": "\\([e^{x}]_{-5}^{1}=e^{1}-e^{-5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(e-e^{-5}\\). Geometrically this is the total area of the region between the curve and the \\(x\\)-axis over that six-unit-wide window. Counting little squares could approximate it, but the integral is exact and preferred.",
        "workingOut": "\\(e-e^{-5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q1ci",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The exact value of \\(\\int_{-1}^{0}e^{x}\\,dx\\) (which a square-count would approximate) is:",
    "opts": [
      "\\(e^{-1}\\)",
      "\\(1-e^{-1}\\)",
      "\\(e-1\\)",
      "\\(1-e\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(1-e^{-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: we must evaluate the definite integral of the natural exponential on the interval from \\(-1\\) to \\(0\\). Strategy: use the fact that the antiderivative of \\(e^{x}\\) is \\(e^{x}\\) itself (chain-rule coefficient 1), then apply the Fundamental Theorem of Calculus (FTC). This turns the area/signed integral into a simple two-point evaluation.",
        "workingOut": "\\(\\int_{-1}^{0} e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why find the antiderivative first? The FTC says that if \\(F'=f\\), then \\(\\int_{a}^{b}f=F(b)-F(a)\\). What we use: \\(\\frac{d}{dx}e^{x}=e^{x}\\), so \\(F(x)=e^{x}\\). Common mistake: inventing an extra factor such as \\(\\frac{1}{x}\\) or treating the integral like a power rule. This antiderivative is the input to the next evaluation step.",
        "workingOut": "\\(F(x)=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now apply the FTC by substituting the upper limit, then subtracting the value at the lower limit. Why upper-minus-lower? That is the definition of the definite integral; reversing the order flips the sign. A frequent error is swapping the limits when the lower limit is negative. Here upper contributes \\(1\\) and lower contributes \\(e^{-1}\\).",
        "workingOut": "\\([e^{x}]_{-1}^{0}=e^{0}-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers of \\(e\\). Using \\(e^{0}=1\\) where it applies gives a clean exact form: \\(e^{0}-e^{-1}\\) becomes \\(1-e^{-1}\\). Why stay exact? Multiple-choice options are written with symbols like \\(e\\) and \\(e^{-1}\\), not decimals. Do not switch to a decimal unless the question asks for one. A common slip is reversing upper and lower after simplification.",
        "workingOut": "\\(e^{0}-e^{-1}=1-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1-e^{-1}\\). This is the exact value of the definite integral (and, since \\(e^{x}>0\\) everywhere, also the geometric area under the curve on this interval). Checking: the expression matches option evaluation of upper minus lower after simplification.",
        "workingOut": "\\(1-e^{-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q1cii",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The exact value of \\(\\int_{-2}^{0}e^{x}\\,dx\\) (which a square-count would approximate) is:",
    "opts": [
      "\\(1-e^{-2}\\)",
      "\\(e^{-2}\\)",
      "\\(1-e^{-1}\\)",
      "\\(e^{2}-1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(1-e^{-2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: we must evaluate the definite integral of the natural exponential on the interval from \\(-2\\) to \\(0\\). Strategy: use the fact that the antiderivative of \\(e^{x}\\) is \\(e^{x}\\) itself (chain-rule coefficient 1), then apply the Fundamental Theorem of Calculus (FTC). This turns the area/signed integral into a simple two-point evaluation.",
        "workingOut": "\\(\\int_{-2}^{0} e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why find the antiderivative first? The FTC says that if \\(F'=f\\), then \\(\\int_{a}^{b}f=F(b)-F(a)\\). What we use: \\(\\frac{d}{dx}e^{x}=e^{x}\\), so \\(F(x)=e^{x}\\). Common mistake: inventing an extra factor such as \\(\\frac{1}{x}\\) or treating the integral like a power rule. This antiderivative is the input to the next evaluation step.",
        "workingOut": "\\(F(x)=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now apply the FTC by substituting the upper limit, then subtracting the value at the lower limit. Why upper-minus-lower? That is the definition of the definite integral; reversing the order flips the sign. A frequent error is swapping the limits when the lower limit is negative. Here upper contributes \\(1\\) and lower contributes \\(e^{-2}\\).",
        "workingOut": "\\([e^{x}]_{-2}^{0}=e^{0}-e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers of \\(e\\). Using \\(e^{0}=1\\) where it applies gives a clean exact form: \\(e^{0}-e^{-2}\\) becomes \\(1-e^{-2}\\). Why stay exact? Multiple-choice options are written with symbols like \\(e\\) and \\(e^{-1}\\), not decimals. Do not switch to a decimal unless the question asks for one. A common slip is reversing upper and lower after simplification.",
        "workingOut": "\\(e^{0}-e^{-2}=1-e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1-e^{-2}\\). This is the exact value of the definite integral (and, since \\(e^{x}>0\\) everywhere, also the geometric area under the curve on this interval). Checking: the expression matches option evaluation of upper minus lower after simplification.",
        "workingOut": "\\(1-e^{-2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q1ciii",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The exact value of \\(\\int_{-3}^{0}e^{x}\\,dx\\) (which a square-count would approximate) is:",
    "opts": [
      "\\(e^{-3}\\)",
      "\\(1-e^{-3}\\)",
      "\\(1-e^{-2}\\)",
      "\\(e^{3}-1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(1-e^{-3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: we must evaluate the definite integral of the natural exponential on the interval from \\(-3\\) to \\(0\\). Strategy: use the fact that the antiderivative of \\(e^{x}\\) is \\(e^{x}\\) itself (chain-rule coefficient 1), then apply the Fundamental Theorem of Calculus (FTC). This turns the area/signed integral into a simple two-point evaluation.",
        "workingOut": "\\(\\int_{-3}^{0} e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why find the antiderivative first? The FTC says that if \\(F'=f\\), then \\(\\int_{a}^{b}f=F(b)-F(a)\\). What we use: \\(\\frac{d}{dx}e^{x}=e^{x}\\), so \\(F(x)=e^{x}\\). Common mistake: inventing an extra factor such as \\(\\frac{1}{x}\\) or treating the integral like a power rule. This antiderivative is the input to the next evaluation step.",
        "workingOut": "\\(F(x)=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Now apply the FTC by substituting the upper limit, then subtracting the value at the lower limit. Why upper-minus-lower? That is the definition of the definite integral; reversing the order flips the sign. A frequent error is swapping the limits when the lower limit is negative. Here upper contributes \\(1\\) and lower contributes \\(e^{-3}\\).",
        "workingOut": "\\([e^{x}]_{-3}^{0}=e^{0}-e^{-3}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers of \\(e\\). Using \\(e^{0}=1\\) where it applies gives a clean exact form: \\(e^{0}-e^{-3}\\) becomes \\(1-e^{-3}\\). Why stay exact? Multiple-choice options are written with symbols like \\(e\\) and \\(e^{-1}\\), not decimals. Do not switch to a decimal unless the question asks for one. A common slip is reversing upper and lower after simplification.",
        "workingOut": "\\(e^{0}-e^{-3}=1-e^{-3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1-e^{-3}\\). This is the exact value of the definite integral (and, since \\(e^{x}>0\\) everywhere, also the geometric area under the curve on this interval). Checking: the expression matches option evaluation of upper minus lower after simplification.",
        "workingOut": "\\(1-e^{-3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q1d",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "As the left endpoint \\(a\\to -\\infty\\), the improper integral \\(\\displaystyle\\int_{a}^{0}e^{x}\\,dx\\) approaches:",
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(e\\)",
      "\\(\\infty\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the improper integral obtained by letting the left endpoint \\(a\\) of \\(\\int_{a}^{0}e^{x}\\,dx\\) tend to \\(-\\infty\\). Strategy: first evaluate the ordinary definite integral for finite \\(a<0\\), then take the limit. This is how improper integrals with an infinite bound are defined.",
        "workingOut": "\\(\\int_{a}^{0}e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why compute the finite case first? The improper integral is defined as a limit of proper ones. What: antiderivative \\(e^{x}\\) gives \\([e^{x}]_{a}^{0}=e^{0}-e^{a}=1-e^{a}\\). Common mistake: claiming the integral diverges just because the interval is infinite — for \\(e^{x}\\) the left tail is thin enough to converge.",
        "workingOut": "\\(1-e^{a}\\)",
        "graphData": null
      },
      {
        "explanation": "Now take the limit. As \\(a\\to -\\infty\\), the exponential \\(e^{a}\\) decays to 0 (because the exponent goes to \\(-\\infty\\)). Therefore \\(1-e^{a}\\to 1-0=1\\). A frequent error is writing \\(e^{-\\infty}=\\infty\\) or confusing growth with decay.",
        "workingOut": "\\(\\lim_{a\\to-\\infty}(1-e^{a})=1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: the improper integral approaches \\(1\\). Meaning: the total geometric area under \\(y=e^{x}\\) to the left of the \\(y\\)-axis is exactly 1 square unit — a classic exponential-decay tail result.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q2a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(-1\\le x\\le 0\\).",
    "opts": [
      "\\(e^{-1}-1\\)",
      "\\(1-e^{-1}\\)",
      "\\(e-1\\)",
      "\\(1-e\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(1-e^{-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area between \\(y=e^{x}\\) and the \\(x\\)-axis on \\([-1,0]\\). Strategy: since \\(e^{x}>0\\) everywhere, area equals \\(\\int_{-1}^{0}e^{x}\\,dx\\). Antiderive, evaluate, simplify exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{-1}^{0}e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What: antiderivative is \\(e^{x}\\). Why? Derivative of \\(e^{x}\\) is \\(e^{x}\\). Common mistake at negative limits: writing \\(e^{-1}-e^{0}\\) instead of upper-minus-lower \\(e^{0}-e^{-1}\\).",
        "workingOut": "\\([e^{x}]_{-1}^{0}=e^{0}-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify using \\(e^{0}=1\\): the difference is \\(1-e^{-1}\\). Do not rewrite as a negative number; geometric area is always positive. A common slip is reporting \\(e^{-1}-1\\) from reversing the limits.",
        "workingOut": "\\(1-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1-e^{-1}\\). This is the exact area of the strip under the exponential between \\(x=-1\\) and the \\(y\\)-axis. Keep it exact rather than converting to a decimal.",
        "workingOut": "\\(1-e^{-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q2b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(1\\le x\\le 3\\).",
    "opts": [
      "\\(e^{3}+e\\)",
      "\\(e^{3}-1\\)",
      "\\(e^{3}-e\\)",
      "\\(e-e^{3}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(e^{3}-e\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area between \\(y=e^{x}\\) and the \\(x\\)-axis on \\([1,3]\\). Strategy: positive integrand implies area \\(=\\int_{1}^{3}e^{x}\\,dx\\). Use FTC with \\(F(x)=e^{x}\\).",
        "workingOut": "\\(\\text{Area}=\\int_{1}^{3}e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate upper minus lower: \\(e^{3}-e^{1}=e^{3}-e\\). Why keep both exponential terms? Both limits contribute exact powers of \\(e\\). Common mistake: writing \\(e^{3}-1\\) by treating the lower limit as 0, or \\(e^{3}+e\\) by adding instead of subtracting.",
        "workingOut": "\\(e^{3}-e\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(e^{3}-e\\). You may factor as \\(e(e^{2}-1)\\) if useful, but the standard option form is \\(e^{3}-e\\). This is the area under the steep part of the exponential between 1 and 3.",
        "workingOut": "\\(e^{3}-e\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q2c",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(-1\\le x\\le 1\\).",
    "opts": [
      "\\(e+e^{-1}\\)",
      "\\(e-1\\)",
      "\\(1-e^{-1}\\)",
      "\\(e-e^{-1}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(e-e^{-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=e^{x}\\) on the symmetric-looking interval \\([-1,1]\\). Strategy: integrate \\(e^{x}\\) from \\(-1\\) to \\(1\\) in one go (no need to split, though you could).",
        "workingOut": "\\(\\text{Area}=\\int_{-1}^{1}e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative is \\(e^{x}\\). Apply the FTC: \\(e^{1}-e^{-1}=e-e^{-1}\\). Common mistake: writing \\(e+e^{-1}\\) by adding the endpoint values, or thinking symmetry of limits forces area 0 (that would require an odd integrand, not the always-positive exponential).",
        "workingOut": "\\(e-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e-e^{-1}\\). This is larger than the area on \\([0,1]\\) alone because the left half also contributes a positive amount under the curve.",
        "workingOut": "\\(e-e^{-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q2d",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(-2\\le x\\le 1\\).",
    "opts": [
      "\\(e-e^{-2}\\)",
      "\\(e+e^{-2}\\)",
      "\\(e-e^{-1}\\)",
      "\\(1-e^{-2}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(e-e^{-2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=e^{x}\\) for \\(-2\\le x\\le 1\\). Strategy: definite integral of the positive function \\(e^{x}\\) over that interval.",
        "workingOut": "\\(\\text{Area}=\\int_{-2}^{1}e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the FTC with \\(F(x)=e^{x}\\): \\(e^{1}-e^{-2}=e-e^{-2}\\). Watch the lower limit carefully — students often write \\(e^{-2}-e\\) by reversing upper and lower, which makes the area look negative.",
        "workingOut": "\\(e-e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(e-e^{-2}\\). The thin left tail value \\(e^{-2}\\) is subtracted from the height contribution at the right endpoint \\(x=1\\).",
        "workingOut": "\\(e-e^{-2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q3ai",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{2x}\\) and the \\(x\\)-axis from \\(x=0\\) to \\(x=3\\).",
    "opts": [
      "\\(\\dfrac{1}{2}(e^{6}+1)\\)",
      "\\(\\dfrac{1}{2}(e^{6}-1)\\)",
      "\\(e^{6}-1\\)",
      "\\(2(e^{6}-1)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(\\dfrac{1}{2}(e^{6}-1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{2x}\\) (always positive) between \\(x=0\\) and \\(x=3\\). Strategy: write area as a definite integral, find the antiderivative using the chain rule (divide by the coefficient of \\(x\\)), then evaluate. Note that at \\(x=3\\) the exponent is \\(2\\cdot 3=6\\).",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{3} e^{2x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why the factor \\(\\frac{1}{k}\\)? If \\(u=kx\\), then \\(\\frac{d}{dx}e^{u}=ke^{u}\\), so integrating reverses that: multiply by \\(\\frac{1}{k}\\). What: for \\(k=2\\), the antiderivative is \\(\\dfrac{1}{2}e^{2x}\\). Common mistake: forgetting the \\(\\frac{1}{k}\\) factor (or multiplying by \\(k\\) instead of dividing). This antiderivative is what we plug the limits into next.",
        "workingOut": "\\(\\int e^{2x}\\,dx=\\dfrac{1}{2}e^{2x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate at the upper limit \\(x=3\\) and at the lower limit \\(x=0\\). Careful with negative exponents and with \\(e^{0}=1\\).",
        "workingOut": "\\([\\dfrac{1}{2}e^{2x}]_{0}^{3}=(\\dfrac{1}{2}e^{6})-(\\dfrac{1}{2}e^{0}=\\dfrac{1}{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract and factor common coefficients to simplify. A common slip is dropping a minus sign when the lower evaluation is larger, or adding instead of subtracting.",
        "workingOut": "\\(\\dfrac{1}{2}e^{6}-\\dfrac{1}{2}=\\dfrac{1}{2}(e^{6}-1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(\\dfrac{1}{2}(e^{6}-1)\\). Because the exponential is positive on the whole real line, this signed integral equals the geometric area between the curve and the \\(x\\)-axis on \\([0,3]\\).",
        "workingOut": "\\(\\dfrac{1}{2}(e^{6}-1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q3aii",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{2x}\\) and the \\(x\\)-axis from \\(x=-3\\) to \\(x=0\\).",
    "opts": [
      "\\(\\dfrac{1}{2}(1-e^{-6})\\)",
      "\\(\\dfrac{1}{2}(1+e^{-6})\\)",
      "\\(\\dfrac{1}{2}(e^{6}-1)\\)",
      "\\(1-e^{-6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(\\dfrac{1}{2}(1-e^{-6})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{2x}\\) (always positive) between \\(x=-3\\) and \\(x=0\\). Strategy: write area as a definite integral, find the antiderivative using the chain rule (divide by the coefficient of \\(x\\)), then evaluate. ",
        "workingOut": "\\(\\text{Area}=\\int_{-3}^{0} e^{2x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why the factor \\(\\frac{1}{k}\\)? If \\(u=kx\\), then \\(\\frac{d}{dx}e^{u}=ke^{u}\\), so integrating reverses that: multiply by \\(\\frac{1}{k}\\). What: for \\(k=2\\), the antiderivative is \\(\\dfrac{1}{2}e^{2x}\\). Common mistake: forgetting the \\(\\frac{1}{k}\\) factor (or multiplying by \\(k\\) instead of dividing). This antiderivative is what we plug the limits into next.",
        "workingOut": "\\(\\int e^{2x}\\,dx=\\dfrac{1}{2}e^{2x}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate at the upper limit \\(x=0\\) and at the lower limit \\(x=-3\\). Careful with negative exponents and with \\(e^{0}=1\\).",
        "workingOut": "\\([\\dfrac{1}{2}e^{2x}]_{-3}^{0}=(\\dfrac{1}{2})-(\\dfrac{1}{2}e^{-6})\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract and factor common coefficients to simplify. A common slip is dropping a minus sign when the lower evaluation is larger, or adding instead of subtracting.",
        "workingOut": "\\(\\dfrac{1}{2}-\\dfrac{1}{2}e^{-6}=\\dfrac{1}{2}(1-e^{-6})\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(\\dfrac{1}{2}(1-e^{-6})\\). Because the exponential is positive on the whole real line, this signed integral equals the geometric area between the curve and the \\(x\\)-axis on \\([-3,0]\\).",
        "workingOut": "\\(\\dfrac{1}{2}(1-e^{-6})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q3bi",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{-x}\\) and the \\(x\\)-axis from \\(x=0\\) to \\(x=1\\).",
    "opts": [
      "\\(1-e^{-1}\\)",
      "\\(e^{-1}-1\\)",
      "\\(e-1\\)",
      "\\(1-e\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(1-e^{-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=e^{-x}\\) from \\(x=0\\) to \\(x=1\\). Strategy: integrate the decaying exponential. The chain-rule coefficient of the exponent is \\(-1\\), so the antiderivative carries a minus sign.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{1}e^{-x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What: \\(\\int e^{-x}\\,dx=-e^{-x}+C\\). Why the minus? Differentiating \\(-e^{-x}\\) multiplies by \\(-1\\) twice and recovers \\(e^{-x}\\). Common mistake: writing antiderivative \\(+e^{-x}\\) or \\(-\\frac{1}{x}e^{-x}\\).",
        "workingOut": "\\(F(x)=-e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\([-e^{-x}]_{0}^{1}=-e^{-1}-(-e^{0})=-e^{-1}+1\\). The double negative at the lower limit is the classic place students drop a sign.",
        "workingOut": "\\(1-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(1-e^{-1}\\). This matches the area under the decaying curve on the unit interval starting at the \\(y\\)-axis.",
        "workingOut": "\\(1-e^{-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q3bii",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{-x}\\) and the \\(x\\)-axis from \\(x=-1\\) to \\(x=0\\).",
    "opts": [
      "\\(1-e\\)",
      "\\(e-1\\)",
      "\\(e^{-1}-1\\)",
      "\\(1-e^{-1}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(e-1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=e^{-x}\\) from \\(x=-1\\) to \\(x=0\\). Strategy: same antiderivative \\(-e^{-x}\\), careful evaluation at a negative lower limit where the function is larger than 1.",
        "workingOut": "\\(\\text{Area}=\\int_{-1}^{0}e^{-x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the FTC: \\([-e^{-x}]_{-1}^{0}=-e^{0}-(-e^{-(-1)})=-1-(-e^{1})=-1+e\\). Why is \\(e^{-(-1)}=e\\)? The two minuses in the exponent cancel. Common mistake: writing \\(e^{-1}\\) at the lower limit instead of \\(e\\).",
        "workingOut": "\\(e-1\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(e-1\\). On this left interval the curve sits higher than on \\([0,1]\\), so the area is larger — a useful sanity check against the options.",
        "workingOut": "\\(e-1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q3ci",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{\\frac{1}{3}x}\\) and the \\(x\\)-axis from \\(x=0\\) to \\(x=3\\).",
    "opts": [
      "\\(3(e+1)\\)",
      "\\(e-1\\)",
      "\\(\\dfrac{1}{3}(e-1)\\)",
      "\\(3(e-1)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(3(e-1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{\\frac{1}{3}x}\\) (always positive) between \\(x=0\\) and \\(x=3\\). Strategy: write area as a definite integral, find the antiderivative using the chain rule (divide by the coefficient of \\(x\\)), then evaluate. Dividing by \\(\\frac{1}{3}\\) multiplies by 3.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{3} e^{\\frac{1}{3}x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why the factor \\(\\frac{1}{k}\\)? If \\(u=kx\\), then \\(\\frac{d}{dx}e^{u}=ke^{u}\\), so integrating reverses that: multiply by \\(\\frac{1}{k}\\). What: for \\(k=\\frac{1}{3}\\), the antiderivative is \\(3e^{\\frac{x}{3}}\\). Common mistake: forgetting the \\(\\frac{1}{k}\\) factor (or multiplying by \\(k\\) instead of dividing). This antiderivative is what we plug the limits into next.",
        "workingOut": "\\(\\int e^{\\frac{1}{3}x}\\,dx=3e^{\\frac{x}{3}}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate at the upper limit \\(x=3\\) and at the lower limit \\(x=0\\). Careful with negative exponents and with \\(e^{0}=1\\).",
        "workingOut": "\\([3e^{\\frac{x}{3}}]_{0}^{3}=(3e^{1}=3e)-(3e^{0}=3)\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract and factor common coefficients to simplify. A common slip is dropping a minus sign when the lower evaluation is larger, or adding instead of subtracting.",
        "workingOut": "\\(3e-3=3(e-1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(3(e-1)\\). Because the exponential is positive on the whole real line, this signed integral equals the geometric area between the curve and the \\(x\\)-axis on \\([0,3]\\).",
        "workingOut": "\\(3(e-1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q3cii",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between \\(y=e^{\\frac{1}{3}x}\\) and the \\(x\\)-axis from \\(x=-3\\) to \\(x=0\\).",
    "opts": [
      "\\(3(1+e^{-1})\\)",
      "\\(3(e-1)\\)",
      "\\(3(1-e^{-1})\\)",
      "\\(1-e^{-1}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(3(1-e^{-1})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{\\frac{1}{3}x}\\) (always positive) between \\(x=-3\\) and \\(x=0\\). Strategy: write area as a definite integral, find the antiderivative using the chain rule (divide by the coefficient of \\(x\\)), then evaluate. ",
        "workingOut": "\\(\\text{Area}=\\int_{-3}^{0} e^{\\frac{1}{3}x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why the factor \\(\\frac{1}{k}\\)? If \\(u=kx\\), then \\(\\frac{d}{dx}e^{u}=ke^{u}\\), so integrating reverses that: multiply by \\(\\frac{1}{k}\\). What: for \\(k=\\frac{1}{3}\\), the antiderivative is \\(3e^{\\frac{x}{3}}\\). Common mistake: forgetting the \\(\\frac{1}{k}\\) factor (or multiplying by \\(k\\) instead of dividing). This antiderivative is what we plug the limits into next.",
        "workingOut": "\\(\\int e^{\\frac{1}{3}x}\\,dx=3e^{\\frac{x}{3}}+C\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate at the upper limit \\(x=0\\) and at the lower limit \\(x=-3\\). Careful with negative exponents and with \\(e^{0}=1\\).",
        "workingOut": "\\([3e^{\\frac{x}{3}}]_{-3}^{0}=(3)-(3e^{-1})\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract and factor common coefficients to simplify. A common slip is dropping a minus sign when the lower evaluation is larger, or adding instead of subtracting.",
        "workingOut": "\\(3-3e^{-1}=3(1-e^{-1})\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(3(1-e^{-1})\\). Because the exponential is positive on the whole real line, this signed integral equals the geometric area between the curve and the \\(x\\)-axis on \\([-3,0]\\).",
        "workingOut": "\\(3(1-e^{-1})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q4a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area between the \\(x\\)-axis and the given curve between the given \\(x\\)-values:\n\\(y = e^{x+1}\\), for \\(0 \\le x \\le 2\\).",
    "opts": [
      "\\(e^{3}+e\\)",
      "\\(e^{3}-1\\)",
      "\\(e-e^{3}\\)",
      "\\(e^{3}-e\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(e^{3}-e\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{x+1}\\) from \\(x=0\\) to \\(x=2\\). Strategy: confirm the curve stays above the \\(x\\)-axis on this interval (exponentials are always positive), set up \\(\\int_{0}^{2} e^{x+1}\\,dx\\), find the antiderivative by dividing by the coefficient of \\(x\\) in the exponent, then evaluate exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{2} e^{x+1}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule? For \\(\\int e^{mx+c}\\,dx\\), write the exponent as a linear function and divide by its slope \\(m\\). Here the coefficient of \\(x\\) is \\(1\\), so the antiderivative is \\(e^{x+1}\\). Why this works: chain rule differentiation multiplies by \\(1\\), so integration undoes that. Common mistake: treating the constant in the exponent as if it needs its own integral term, or using \\(m\\) instead of \\(\\frac{1}{m}\\).",
        "workingOut": "\\(F(x)=e^{x+1}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply FTC: substitute \\(x=2\\) then subtract the value at \\(x=0\\). Watch arithmetic with powers of \\(e\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(F(2)-F(0)=(e^{3})-(e^{1}=e)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the exact expression carefully. At \\(x=2\\), the exponent is \\(3\\); at \\(x=0\\) it is \\(1\\). Why simplify? Multiple-choice options are written in a canonical exact form, so an unsimplified intermediate will not match even when the value is correct. A common slip is changing a minus into a plus when rearranging.",
        "workingOut": "\\(e^{3}-e\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{3}-e\\). This is the exact area between the curve and the \\(x\\)-axis on the stated interval. Match this exact form to the multiple-choice option (do not convert to a decimal unless asked). Because the exponential is always positive, the signed integral equals the geometric area here.",
        "workingOut": "\\(e^{3}-e\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q4b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area between the \\(x\\)-axis and the given curve between the given \\(x\\)-values:\n\\(y = e^{x+3}\\), for \\(-2 \\le x \\le 0\\).",
    "opts": [
      "\\(e^{3}-e\\)",
      "\\(e^{3}+e\\)",
      "\\(e^{2}-e\\)",
      "\\(e^{3}-e^{2}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(e^{3}-e\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{x+3}\\) from \\(x=-2\\) to \\(x=0\\). Strategy: confirm the curve stays above the \\(x\\)-axis on this interval (exponentials are always positive), set up \\(\\int_{-2}^{0} e^{x+3}\\,dx\\), find the antiderivative by dividing by the coefficient of \\(x\\) in the exponent, then evaluate exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{-2}^{0} e^{x+3}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule? For \\(\\int e^{mx+c}\\,dx\\), write the exponent as a linear function and divide by its slope \\(m\\). Here the coefficient of \\(x\\) is \\(1\\), so the antiderivative is \\(e^{x+3}\\). Why this works: chain rule differentiation multiplies by \\(1\\), so integration undoes that. Common mistake: treating the constant in the exponent as if it needs its own integral term, or using \\(m\\) instead of \\(\\frac{1}{m}\\).",
        "workingOut": "\\(F(x)=e^{x+3}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply FTC: substitute \\(x=0\\) then subtract the value at \\(x=-2\\). Watch arithmetic with powers of \\(e\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(F(0)-F(-2)=(e^{3})-(e^{1}=e)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the exact expression carefully. At \\(x=-2\\), exponent is \\(1\\); at \\(x=0\\), exponent is \\(3\\). Why simplify? Multiple-choice options are written in a canonical exact form, so an unsimplified intermediate will not match even when the value is correct. A common slip is changing a minus into a plus when rearranging.",
        "workingOut": "\\(e^{3}-e\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{3}-e\\). This is the exact area between the curve and the \\(x\\)-axis on the stated interval. Match this exact form to the multiple-choice option (do not convert to a decimal unless asked). Because the exponential is always positive, the signed integral equals the geometric area here.",
        "workingOut": "\\(e^{3}-e\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q4c",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area between the \\(x\\)-axis and the given curve between the given \\(x\\)-values:\n\\(y = e^{2x-1}\\), for \\(0 \\le x \\le 1\\).",
    "opts": [
      "\\(\\dfrac{1}{2}(e+e^{-1})\\)",
      "\\(\\dfrac{1}{2}(e-e^{-1})\\)",
      "\\(e-e^{-1}\\)",
      "\\(2(e-e^{-1})\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(\\dfrac{1}{2}(e-e^{-1})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{2x-1}\\) from \\(x=0\\) to \\(x=1\\). Strategy: confirm the curve stays above the \\(x\\)-axis on this interval (exponentials are always positive), set up \\(\\int_{0}^{1} e^{2x-1}\\,dx\\), find the antiderivative by dividing by the coefficient of \\(x\\) in the exponent, then evaluate exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{1} e^{2x-1}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule? For \\(\\int e^{mx+c}\\,dx\\), write the exponent as a linear function and divide by its slope \\(m\\). Here the coefficient of \\(x\\) is \\(2\\), so the antiderivative is \\(\\dfrac{1}{2}e^{2x-1}\\). Why this works: chain rule differentiation multiplies by \\(2\\), so integration undoes that. Common mistake: treating the constant in the exponent as if it needs its own integral term, or using \\(m\\) instead of \\(\\frac{1}{m}\\).",
        "workingOut": "\\(F(x)=\\dfrac{1}{2}e^{2x-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply FTC: substitute \\(x=1\\) then subtract the value at \\(x=0\\). Watch arithmetic with powers of \\(e\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(F(1)-F(0)=(\\dfrac{1}{2}e^{1}=\\dfrac{1}{2}e)-(\\dfrac{1}{2}e^{-1})\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the exact expression carefully. Factor out \\(\\dfrac{1}{2}\\): \\(\\dfrac{1}{2}e-\\dfrac{1}{2}e^{-1}\\). Why simplify? Multiple-choice options are written in a canonical exact form, so an unsimplified intermediate will not match even when the value is correct. A common slip is changing a minus into a plus when rearranging.",
        "workingOut": "\\(\\dfrac{1}{2}(e-e^{-1})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{2}(e-e^{-1})\\). This is the exact area between the curve and the \\(x\\)-axis on the stated interval. Match this exact form to the multiple-choice option (do not convert to a decimal unless asked). Because the exponential is always positive, the signed integral equals the geometric area here.",
        "workingOut": "\\(\\dfrac{1}{2}(e-e^{-1})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q4d",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area between the \\(x\\)-axis and the given curve between the given \\(x\\)-values:\n\\(y = e^{3x-5}\\), for \\(1 \\le x \\le 2\\).",
    "opts": [
      "\\(\\dfrac{1}{3}(e+e^{-2})\\)",
      "\\(e-e^{-2}\\)",
      "\\(\\dfrac{1}{3}(e-e^{-2})\\)",
      "\\(3(e-e^{-2})\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(\\dfrac{1}{3}(e-e^{-2})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{3x-5}\\) from \\(x=1\\) to \\(x=2\\). Strategy: confirm the curve stays above the \\(x\\)-axis on this interval (exponentials are always positive), set up \\(\\int_{1}^{2} e^{3x-5}\\,dx\\), find the antiderivative by dividing by the coefficient of \\(x\\) in the exponent, then evaluate exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{1}^{2} e^{3x-5}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule? For \\(\\int e^{mx+c}\\,dx\\), write the exponent as a linear function and divide by its slope \\(m\\). Here the coefficient of \\(x\\) is \\(3\\), so the antiderivative is \\(\\dfrac{1}{3}e^{3x-5}\\). Why this works: chain rule differentiation multiplies by \\(3\\), so integration undoes that. Common mistake: treating the constant in the exponent as if it needs its own integral term, or using \\(m\\) instead of \\(\\frac{1}{m}\\).",
        "workingOut": "\\(F(x)=\\dfrac{1}{3}e^{3x-5}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply FTC: substitute \\(x=2\\) then subtract the value at \\(x=1\\). Watch arithmetic with powers of \\(e\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(F(2)-F(1)=(\\dfrac{1}{3}e^{1}=\\dfrac{1}{3}e)-(\\dfrac{1}{3}e^{-2})\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the exact expression carefully. At \\(x=2\\): exponent \\(1\\); at \\(x=1\\): exponent \\(-2\\). Why simplify? Multiple-choice options are written in a canonical exact form, so an unsimplified intermediate will not match even when the value is correct. A common slip is changing a minus into a plus when rearranging.",
        "workingOut": "\\(\\dfrac{1}{3}(e-e^{-2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{3}(e-e^{-2})\\). This is the exact area between the curve and the \\(x\\)-axis on the stated interval. Match this exact form to the multiple-choice option (do not convert to a decimal unless asked). Because the exponential is always positive, the signed integral equals the geometric area here.",
        "workingOut": "\\(\\dfrac{1}{3}(e-e^{-2})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q4e",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area between the \\(x\\)-axis and the given curve between the given \\(x\\)-values:\n\\(y = e^{-x+1}\\), for \\(-1 \\le x \\le 1\\).",
    "opts": [
      "\\(e^{2}+1\\)",
      "\\(e^{2}-e\\)",
      "\\(1-e^{2}\\)",
      "\\(e^{2}-1\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(e^{2}-1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{-x+1}\\) from \\(x=-1\\) to \\(x=1\\). Strategy: confirm the curve stays above the \\(x\\)-axis on this interval (exponentials are always positive), set up \\(\\int_{-1}^{1} e^{-x+1}\\,dx\\), find the antiderivative by dividing by the coefficient of \\(x\\) in the exponent, then evaluate exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{-1}^{1} e^{-x+1}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule? For \\(\\int e^{mx+c}\\,dx\\), write the exponent as a linear function and divide by its slope \\(m\\). Here the coefficient of \\(x\\) is \\(-1\\), so the antiderivative is \\(-e^{-x+1}\\). Why this works: chain rule differentiation multiplies by \\(-1\\), so integration undoes that. Common mistake: treating the constant in the exponent as if it needs its own integral term, or using \\(m\\) instead of \\(\\frac{1}{m}\\).",
        "workingOut": "\\(F(x)=-e^{-x+1}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply FTC: substitute \\(x=1\\) then subtract the value at \\(x=-1\\). Watch arithmetic with powers of \\(e\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(F(1)-F(-1)=(-e^{0}=-1)-(-e^{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the exact expression carefully. Difference: \\(-1-(-e^{2})=-1+e^{2}=e^{2}-1\\). Why simplify? Multiple-choice options are written in a canonical exact form, so an unsimplified intermediate will not match even when the value is correct. A common slip is changing a minus into a plus when rearranging.",
        "workingOut": "\\(e^{2}-1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{2}-1\\). This is the exact area between the curve and the \\(x\\)-axis on the stated interval. Match this exact form to the multiple-choice option (do not convert to a decimal unless asked). Because the exponential is always positive, the signed integral equals the geometric area here.",
        "workingOut": "\\(e^{2}-1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q4f",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area between the \\(x\\)-axis and the given curve between the given \\(x\\)-values:\n\\(y = e^{-2x-1}\\), for \\(-2 \\le x \\le -1\\).",
    "opts": [
      "\\(\\dfrac{1}{2}(e^{3}-e)\\)",
      "\\(\\dfrac{1}{2}(e^{3}+e)\\)",
      "\\(e^{3}-e\\)",
      "\\(2(e^{3}-e)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(\\dfrac{1}{2}(e^{3}-e)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{-2x-1}\\) from \\(x=-2\\) to \\(x=-1\\). Strategy: confirm the curve stays above the \\(x\\)-axis on this interval (exponentials are always positive), set up \\(\\int_{-2}^{-1} e^{-2x-1}\\,dx\\), find the antiderivative by dividing by the coefficient of \\(x\\) in the exponent, then evaluate exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{-2}^{-1} e^{-2x-1}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule? For \\(\\int e^{mx+c}\\,dx\\), write the exponent as a linear function and divide by its slope \\(m\\). Here the coefficient of \\(x\\) is \\(-2\\), so the antiderivative is \\(-\\dfrac{1}{2}e^{-2x-1}\\). Why this works: chain rule differentiation multiplies by \\(-2\\), so integration undoes that. Common mistake: treating the constant in the exponent as if it needs its own integral term, or using \\(m\\) instead of \\(\\frac{1}{m}\\).",
        "workingOut": "\\(F(x)=-\\dfrac{1}{2}e^{-2x-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply FTC: substitute \\(x=-1\\) then subtract the value at \\(x=-2\\). Watch arithmetic with powers of \\(e\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(F(-1)-F(-2)=(-\\dfrac{1}{2}e^{1}=-\\dfrac{1}{2}e)-(-\\dfrac{1}{2}e^{3})\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the exact expression carefully. Difference: \\(-\\frac{1}{2}e-(-\\frac{1}{2}e^{3})=\\frac{1}{2}(e^{3}-e)\\). Why simplify? Multiple-choice options are written in a canonical exact form, so an unsimplified intermediate will not match even when the value is correct. A common slip is changing a minus into a plus when rearranging.",
        "workingOut": "\\(\\dfrac{1}{2}(e^{3}-e)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{2}(e^{3}-e)\\). This is the exact area between the curve and the \\(x\\)-axis on the stated interval. Match this exact form to the multiple-choice option (do not convert to a decimal unless asked). Because the exponential is always positive, the signed integral equals the geometric area here.",
        "workingOut": "\\(\\dfrac{1}{2}(e^{3}-e)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q4g",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area between the \\(x\\)-axis and the given curve between the given \\(x\\)-values:\n\\(y = e^{\\frac{1}{2}x+2}\\), for \\(0 \\le x \\le 3\\).",
    "opts": [
      "\\(2(e^{\\frac{7}{2}}+e^{2})\\)",
      "\\(2(e^{\\frac{7}{2}}-e^{2})\\)",
      "\\(e^{\\frac{7}{2}}-e^{2}\\)",
      "\\(\\dfrac{1}{2}(e^{\\frac{7}{2}}-e^{2})\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(2(e^{\\frac{7}{2}}-e^{2})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{\\frac{1}{2}x+2}\\) from \\(x=0\\) to \\(x=3\\). Strategy: confirm the curve stays above the \\(x\\)-axis on this interval (exponentials are always positive), set up \\(\\int_{0}^{3} e^{\\frac{1}{2}x+2}\\,dx\\), find the antiderivative by dividing by the coefficient of \\(x\\) in the exponent, then evaluate exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{3} e^{\\frac{1}{2}x+2}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule? For \\(\\int e^{mx+c}\\,dx\\), write the exponent as a linear function and divide by its slope \\(m\\). Here the coefficient of \\(x\\) is \\(\\frac{1}{2}\\), so the antiderivative is \\(2e^{\\frac{1}{2}x+2}\\). Why this works: chain rule differentiation multiplies by \\(\\frac{1}{2}\\), so integration undoes that. Common mistake: treating the constant in the exponent as if it needs its own integral term, or using \\(m\\) instead of \\(\\frac{1}{m}\\).",
        "workingOut": "\\(F(x)=2e^{\\frac{1}{2}x+2}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply FTC: substitute \\(x=3\\) then subtract the value at \\(x=0\\). Watch arithmetic with powers of \\(e\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(F(3)-F(0)=(2e^{\\frac{7}{2}})-(2e^{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the exact expression carefully. Factor 2 after subtracting. Why simplify? Multiple-choice options are written in a canonical exact form, so an unsimplified intermediate will not match even when the value is correct. A common slip is changing a minus into a plus when rearranging.",
        "workingOut": "\\(2(e^{\\frac{7}{2}}-e^{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2(e^{\\frac{7}{2}}-e^{2})\\). This is the exact area between the curve and the \\(x\\)-axis on the stated interval. Match this exact form to the multiple-choice option (do not convert to a decimal unless asked). Because the exponential is always positive, the signed integral equals the geometric area here.",
        "workingOut": "\\(2(e^{\\frac{7}{2}}-e^{2})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q4h",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area between the \\(x\\)-axis and the given curve between the given \\(x\\)-values:\n\\(y = e^{\\frac{1}{2}x-1}\\), for \\(-2 \\le x \\le 2\\).",
    "opts": [
      "\\(2(1+e^{-2})\\)",
      "\\(1-e^{-2}\\)",
      "\\(2(1-e^{-2})\\)",
      "\\(2(e^{-2}-1)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(2(1-e^{-2})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{\\frac{1}{2}x-1}\\) from \\(x=-2\\) to \\(x=2\\). Strategy: confirm the curve stays above the \\(x\\)-axis on this interval (exponentials are always positive), set up \\(\\int_{-2}^{2} e^{\\frac{1}{2}x-1}\\,dx\\), find the antiderivative by dividing by the coefficient of \\(x\\) in the exponent, then evaluate exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{-2}^{2} e^{\\frac{1}{2}x-1}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule? For \\(\\int e^{mx+c}\\,dx\\), write the exponent as a linear function and divide by its slope \\(m\\). Here the coefficient of \\(x\\) is \\(\\frac{1}{2}\\), so the antiderivative is \\(2e^{\\frac{1}{2}x-1}\\). Why this works: chain rule differentiation multiplies by \\(\\frac{1}{2}\\), so integration undoes that. Common mistake: treating the constant in the exponent as if it needs its own integral term, or using \\(m\\) instead of \\(\\frac{1}{m}\\).",
        "workingOut": "\\(F(x)=2e^{\\frac{1}{2}x-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply FTC: substitute \\(x=2\\) then subtract the value at \\(x=-2\\). Watch arithmetic with powers of \\(e\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(F(2)-F(-2)=(2e^{0}=2)-(2e^{-2})\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the exact expression carefully. Difference: \\(2-2e^{-2}=2(1-e^{-2})\\). Why simplify? Multiple-choice options are written in a canonical exact form, so an unsimplified intermediate will not match even when the value is correct. A common slip is changing a minus into a plus when rearranging.",
        "workingOut": "\\(2(1-e^{-2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2(1-e^{-2})\\). This is the exact area between the curve and the \\(x\\)-axis on the stated interval. Match this exact form to the multiple-choice option (do not convert to a decimal unless asked). Because the exponential is always positive, the signed integral equals the geometric area here.",
        "workingOut": "\\(2(1-e^{-2})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q5a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area of the region bounded by the curve \\(y = e^x\\), the \\(x\\)-axis, the \\(y\\)-axis and the line \\(x = 2\\).",
    "opts": [
      "\\(e^{2}+1\\)",
      "\\(e^{2}-e\\)",
      "\\(e^{2}-1\\)",
      "\\(e-1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(e^{2}-1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: region bounded by \\(y=e^{x}\\), the \\(x\\)-axis, the \\(y\\)-axis (\\(x=0\\)), and \\(x=2\\). Strategy: identify the vertical strip from \\(x=0\\) to \\(x=2\\) under the exponential, write one definite integral, evaluate exactly.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{2}e^{x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Why these limits? The \\(y\\)-axis is \\(x=0\\) and the vertical line is \\(x=2\\); the curve is above the \\(x\\)-axis throughout. Antiderivative: \\(e^{x}\\). Common mistake: integrating from 1 to 2 or forgetting the left bound at 0.",
        "workingOut": "\\(F(x)=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the FTC: upper minus lower gives \\(e^{2}-e^{0}=e^{2}-1\\). Why simplify \\(e^{0}\\)? Leaving it as \\(e^{0}\\) is not wrong mathematically but options use 1. Common mistake: writing \\(e^{2}-e\\) as if the lower limit were 1.",
        "workingOut": "\\(e^{2}-1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{2}-1\\). This is the exact area of the finite region trapped by those four boundaries. It matches the option with the difference of the exponential at 2 and the unit height at the axis.",
        "workingOut": "\\(e^{2}-1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q5b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area of the region bounded by the curve \\(y = e^{\\frac{1}{2}x}\\), the \\(x\\)-axis, and the lines \\(x = -1\\) and \\(x = 2\\).",
    "opts": [
      "\\(2(e+e^{-\\frac{1}{2}})\\)",
      "\\(e-e^{-\\frac{1}{2}}\\)",
      "\\(2(e-1)\\)",
      "\\(2(e-e^{-\\frac{1}{2}})\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(2(e-e^{-\\frac{1}{2}})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=e^{\\frac{1}{2}x}\\) from \\(x=-1\\) to \\(x=2\\). Strategy: integrate with chain-rule factor 2 (reciprocal of \\(\\frac{1}{2}\\)).",
        "workingOut": "\\(\\text{Area}=\\int_{-1}^{2}e^{\\frac{1}{2}x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(2e^{\\frac{1}{2}x}\\). Why 2? Differentiating \\(2e^{x/2}\\) multiplies by \\(\\frac{1}{2}\\) and cancels the 2. Common mistake: using antiderivative \\(\\frac{1}{2}e^{x/2}\\) instead.",
        "workingOut": "\\(F(x)=2e^{\\frac{x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(2e^{1}-2e^{-\\frac{1}{2}}=2(e-e^{-\\frac{1}{2}})\\). At the upper limit, \\(\\frac{1}{2}\\cdot 2=1\\) so \\(e^{1}=e\\).",
        "workingOut": "\\(2(e-e^{-\\frac{1}{2}})\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(2(e-e^{-\\frac{1}{2}})\\). Keep the half-exponent exact rather than writing a nested radical unless asked.",
        "workingOut": "\\(2(e-e^{-\\frac{1}{2}})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q5c",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area of the region bounded by the curve \\(y = e^{-x}\\), the \\(x\\)-axis, the \\(y\\)-axis and the line \\(x = 1\\).",
    "opts": [
      "\\(1-e^{-1}\\)",
      "\\(e^{-1}-1\\)",
      "\\(e-1\\)",
      "\\(1-e\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(1-e^{-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: region under \\(y=e^{-x}\\) from the \\(y\\)-axis to \\(x=1\\). Strategy: definite integral of the decaying exponential on \\([0,1]\\).",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{1}e^{-x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative is \\(-e^{-x}\\). Evaluate carefully: \\(-e^{-1}-(-e^{0})=-e^{-1}+1=1-e^{-1}\\). Why the double negative? Subtracting a negative value at the lower limit flips the sign. This is the most common arithmetic slip on decaying exponentials.",
        "workingOut": "\\(1-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1-e^{-1}\\). Same numerical form as several other unit-interval exponential areas, but here the integrand is specifically the decaying curve \\(e^{-x}\\) from the axis out to \\(x=1\\).",
        "workingOut": "\\(1-e^{-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q5d",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area of the region bounded by the curve \\(y = e^{-\\frac{1}{2}x}\\), the \\(x\\)-axis, and the lines \\(x = -1\\) and \\(x = 2\\).",
    "opts": [
      "\\(2(e^{\\frac{1}{2}}+e^{-1})\\)",
      "\\(2(e^{\\frac{1}{2}}-e^{-1})\\)",
      "\\(e^{\\frac{1}{2}}-e^{-1}\\)",
      "\\(2(e-e^{-1})\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(2(e^{\\frac{1}{2}}-e^{-1})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=e^{-\\frac{1}{2}x}\\) from \\(x=-1\\) to \\(x=2\\). Strategy: chain-rule coefficient is \\(-\\frac{1}{2}\\), so the antiderivative multiplies by \\(-2\\).",
        "workingOut": "\\(\\text{Area}=\\int_{-1}^{2}e^{-\\frac{1}{2}x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(-2e^{-\\frac{1}{2}x}\\). Check by differentiating: chain rule multiplies by \\(-\\frac{1}{2}\\), and \\((-2)\\cdot(-\\frac{1}{2})=1\\). Common mistake: using \\(+2\\) without the minus.",
        "workingOut": "\\(F(x)=-2e^{-\\frac{x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\((-2e^{-1})-(-2e^{\\frac{1}{2}})=-2e^{-1}+2e^{\\frac{1}{2}}=2(e^{\\frac{1}{2}}-e^{-1})\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2(e^{\\frac{1}{2}}-e^{-1})\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(2(e^{\\frac{1}{2}}-e^{-1})\\). Both endpoint contributions stay positive after simplification. Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2(e^{\\frac{1}{2}}-e^{-1})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q6a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between the curve \\(y = e^{-x} + 1\\) and the \\(x\\)-axis, from \\(x = 0\\) to \\(x = 2\\).",
    "opts": [
      "\\(3+e^{-2}\\)",
      "\\(3-e^{-2}\\)",
      "\\(2-e^{-2}\\)",
      "\\(e^{-2}-3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(3-e^{-2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=e^{-x}+1\\) from \\(x=0\\) to \\(x=2\\). Strategy: the curve is always above 1, so integrate the sum term by term. Split into exponential plus constant.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{2}(e^{-x}+1)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(-e^{-x}+x\\). Why? Integral of \\(e^{-x}\\) is \\(-e^{-x}\\); integral of 1 is \\(x\\). Common mistake: writing \\(+e^{-x}\\) for the first term or forgetting to integrate the constant 1.",
        "workingOut": "\\(F(x)=-e^{-x}+x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(2)-F(0)=(-e^{-2}+2)-(-e^{0}+0)=2-e^{-2}-(-1)=2-e^{-2}+1=3-e^{-2}\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(3-e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3-e^{-2}\\). Interpretation: roughly 3 units of rectangular area from the +1, reduced slightly by the decaying exponential contribution.",
        "workingOut": "\\(3-e^{-2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q6b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between the curve \\(y = 1 - e^x\\) and the \\(x\\)-axis, from \\(x = -1\\) to \\(x = 0\\).",
    "opts": [
      "\\(1-e^{-1}\\)",
      "\\(e\\)",
      "\\(e^{-1}\\)",
      "\\(1-e\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(e^{-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area between \\(y=1-e^{x}\\) and the \\(x\\)-axis on \\([-1,0]\\). Strategy: check the sign of the function on the interval first — on \\([-1,0]\\), \\(e^{x}\\le 1\\), so \\(1-e^{x}\\ge 0\\) and area is just the integral (no absolute value needed).",
        "workingOut": "\\(\\text{Area}=\\int_{-1}^{0}(1-e^{x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(x-e^{x}\\). Common mistake: integrating \\(1-e^{x}\\) as \\(x+e^{x}\\) (sign error on the exponential).",
        "workingOut": "\\(F(x)=x-e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(0)-F(-1)=(0-1)-(-1-e^{-1})=-1+1+e^{-1}=e^{-1}\\). The lower-limit algebra is the usual trap. Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{-1}\\). The region is a thin wedge above the axis just left of the origin under the curve \\(1-e^{x}\\).",
        "workingOut": "\\(e^{-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q6c",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between the curve \\(y = e^x + e^{-x}\\) and the \\(x\\)-axis, from \\(x = -2\\) to \\(x = 2\\).",
    "opts": [
      "\\(2(e^{2}+e^{-2})\\)",
      "\\(e^{2}-e^{-2}\\)",
      "\\(2(e^{2}-1)\\)",
      "\\(2(e^{2}-e^{-2})\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(2(e^{2}-e^{-2})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=e^{x}+e^{-x}\\) (which is always at least 2) from \\(x=-2\\) to \\(x=2\\). Strategy: integrate term by term; the antiderivative of \\(e^{-x}\\) is \\(-e^{-x}\\).",
        "workingOut": "\\(\\text{Area}=\\int_{-2}^{2}(e^{x}+e^{-x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(e^{x}-e^{-x}\\). Why the minus on the second term? Because \\(\\frac{d}{dx}(-e^{-x})=e^{-x}\\). Common mistake: writing \\(e^{x}+e^{-x}\\) as its own antiderivative.",
        "workingOut": "\\(F(x)=e^{x}-e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(2)-F(-2)=(e^{2}-e^{-2})-(e^{-2}-e^{2})=e^{2}-e^{-2}-e^{-2}+e^{2}=2e^{2}-2e^{-2}=2(e^{2}-e^{-2})\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2(e^{2}-e^{-2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2(e^{2}-e^{-2})\\). Note this is twice \\(\\sinh 2\\) in hyperbolic notation, but leave it in exponential form for the options.",
        "workingOut": "\\(2(e^{2}-e^{-2})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q6d",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between the curve \\(y = x^2 + e^x\\) and the \\(x\\)-axis, from \\(x = -3\\) to \\(x = 3\\).",
    "opts": [
      "\\(18+e^{3}-e^{-3}\\)",
      "\\(18+e^{3}+e^{-3}\\)",
      "\\(18+e^{3}\\)",
      "\\(e^{3}-e^{-3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(18+e^{3}-e^{-3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=x^{2}+e^{x}\\) from \\(x=-3\\) to \\(x=3\\). Strategy: both summands are positive on parts of the interval (\\(x^{2}\\ge 0\\) always; \\(e^{x}>0\\) always), so integrate term by term over the full symmetric window.",
        "workingOut": "\\(\\text{Area}=\\int_{-3}^{3}(x^{2}+e^{x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\dfrac{x^{3}}{3}+e^{x}\\). Power rule on \\(x^{2}\\) and standard exponential on \\(e^{x}\\). Common mistake: writing \\(\\frac{x^{2}}{2}\\) for the cubic term or forgetting one of the two pieces.",
        "workingOut": "\\(F(x)=\\dfrac{x^{3}}{3}+e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(3)-F(-3)=\\big(9+e^{3}\\big)-\\big(-9+e^{-3}\\big)=9+e^{3}+9-e^{-3}=18+e^{3}-e^{-3}\\). The cubic part doubles because it is odd in a helpful way when subtracted.",
        "workingOut": "\\(18+e^{3}-e^{-3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(18+e^{3}-e^{-3}\\). The 18 comes purely from the parabola; the exponential contributes the asymmetric tail difference \\(e^{3}-e^{-3}\\).",
        "workingOut": "\\(18+e^{3}-e^{-3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q7a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area of the region bounded by the curve \\(y = e^{-x}\\) and the lines \\(x = 2\\) and \\(y = 1\\).",
    "opts": [
      "\\(1+e^{-2}\\)",
      "\\(1-e^{-2}\\)",
      "\\(e^{-2}\\)",
      "\\(2+e^{-2}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(1+e^{-2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the curve \\(y=e^{-x}\\) and the lines \\(x=2\\) and \\(y=1\\). Strategy: find where the curve meets \\(y=1\\), decide which function is on top, then integrate the difference. Intersection: \\(e^{-x}=1\\Rightarrow x=0\\). For \\(x>0\\), \\(e^{-x}<1\\), so the region between the horizontal line and the curve from \\(x=0\\) to \\(x=2\\) is the one bounded by all three conditions.",
        "workingOut": "\\(e^{-x}=1\\;\\Rightarrow\\;x=0\\)",
        "graphData": null
      },
      {
        "explanation": "Why upper minus lower? Area between curves is \\(\\int(y_{\\text{top}}-y_{\\text{bottom}})\\,dx\\). Here top is \\(y=1\\) and bottom is \\(y=e^{-x}\\) on \\([0,2]\\). Common mistake: integrating only \\(e^{-x}\\) or only the rectangle of height 1.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{2}(1-e^{-x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(x+e^{-x}\\). Evaluate: \\((2+e^{-2})-(0+1)=1+e^{-2}\\). Watch: integral of \\(-e^{-x}\\) is \\(+e^{-x}\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\([x+e^{-x}]_{0}^{2}=1+e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1+e^{-2}\\). Geometrically this is a unit-height strip from 0 to 2 with a curved bite taken out underneath by \\(e^{-x}\\), leaving a little extra \\(e^{-2}\\) compared with a pure area of 1.",
        "workingOut": "\\(1+e^{-2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q7b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area of the region in the first quadrant bounded by the coordinate axes and the curve \\(y = e - e^x\\).",
    "opts": [
      "\\(e-1\\)",
      "\\(1\\)",
      "\\(e\\)",
      "\\(0\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: first-quadrant region bounded by the axes and \\(y=e-e^{x}\\). Strategy: find intercepts, then integrate. \\(x\\)-intercept: \\(e-e^{x}=0\\Rightarrow x=1\\). \\(y\\)-intercept: \\(y=e-1\\) at \\(x=0\\). The curve sits above the \\(x\\)-axis on \\([0,1]\\).",
        "workingOut": "\\(e-e^{x}=0\\;\\Rightarrow\\;x=1\\)",
        "graphData": null
      },
      {
        "explanation": "Set up area as \\(\\int_{0}^{1}(e-e^{x})\\,dx\\). Why from 0 to 1? Those are the axis intercepts that close the region in the first quadrant. Common mistake: integrating past \\(x=1\\) where the curve goes negative.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{1}(e-e^{x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(ex-e^{x}\\). Evaluate: \\((e-e)-(0-1)=0-(-1)=1\\). The \\(e\\) terms cancel; the lower limit contributes the +1.",
        "workingOut": "\\([ex-e^{x}]_{0}^{1}=1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1\\). A neat exact unit area for this exponential-minus-constant wedge against the axes. Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q7c",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area between the \\(x\\)-axis, the curve \\(y = e^x - 1\\) and the line \\(x = -1\\).",
    "opts": [
      "\\(1-e^{-1}\\)",
      "\\(e-1\\)",
      "\\(e^{-1}\\)",
      "\\(1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(e^{-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: region between the \\(x\\)-axis, \\(y=e^{x}-1\\), and \\(x=-1\\). Strategy: the curve meets the axis where \\(e^{x}-1=0\\Rightarrow x=0\\). On \\([-1,0]\\) we have \\(e^{x}-1\\le 0\\), so the curve is below the axis; geometric area uses the absolute value, i.e. integrate \\(1-e^{x}\\).",
        "workingOut": "\\(e^{x}-1=0\\;\\Rightarrow\\;x=0\\)",
        "graphData": null
      },
      {
        "explanation": "Area = \\(\\int_{-1}^{0}|e^{x}-1|\\,dx=\\int_{-1}^{0}(1-e^{x})\\,dx\\). Common mistake: integrating the signed function and reporting a negative area, or integrating from 0 to 1 instead of the left interval.",
        "workingOut": "\\(\\int_{-1}^{0}(1-e^{x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative \\(x-e^{x}\\). Evaluate: \\((0-1)-(-1-e^{-1})=-1+1+e^{-1}=e^{-1}\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{-1}\\). This is the geometric area of the region to the left of the origin under the axis and above the curve down to \\(x=-1\\).",
        "workingOut": "\\(e^{-1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q7d",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "What is the area bounded by \\(x = 2\\), \\(y = e^{-x} - 2\\), the \\(x\\)-axis and the \\(y\\)-axis?",
    "opts": [
      "\\(3-e^{-2}\\)",
      "\\(2+e^{-2}\\)",
      "\\(e^{-2}\\)",
      "\\(3+e^{-2}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(3+e^{-2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: bounds \\(x=2\\), \\(y=e^{-x}-2\\), the \\(x\\)-axis and the \\(y\\)-axis. Strategy: note \\(e^{-x}-2\\le -1<0\\) for all real \\(x\\), so the curve lies below the \\(x\\)-axis. The closed region from \\(x=0\\) to \\(x=2\\) between the curve and the axis has area \\(\\int_{0}^{2}(2-e^{-x})\\,dx\\).",
        "workingOut": "\\(y=e^{-x}-2<0\\)",
        "graphData": null
      },
      {
        "explanation": "Why flip to \\(2-e^{-x}\\)? Geometric area is the absolute value of the signed integral. Common mistake: integrating \\(e^{-x}-2\\) and keeping the negative sign as the answer.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{2}(2-e^{-x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(2x+e^{-x}\\). Evaluate: \\((4+e^{-2})-(0+1)=3+e^{-2}\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(3+e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3+e^{-2}\\). Roughly a 2-by-2 rectangle of area 4, reduced by the integral of \\(e^{-x}\\) on \\([0,2]\\) which equals \\(1-e^{-2}\\), giving \\(4-(1-e^{-2})=3+e^{-2}\\).",
        "workingOut": "\\(3+e^{-2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q7e",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area of the region bounded by the curve \\(y = e^{-x} - e\\) and the coordinate axes.",
    "opts": [
      "\\(1\\)",
      "\\(e-1\\)",
      "\\(e\\)",
      "\\(0\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: region bounded by \\(y=e^{-x}-e\\) and the coordinate axes. Strategy: find intercepts. Axis zeros: \\(e^{-x}-e=0\\Rightarrow e^{-x}=e\\Rightarrow x=-1\\). At \\(x=0\\), \\(y=1-e<0\\). So the region runs from \\(x=-1\\) to the \\(y\\)-axis under the axis (curve below).",
        "workingOut": "\\(e^{-x}=e\\;\\Rightarrow\\;x=-1\\)",
        "graphData": null
      },
      {
        "explanation": "Geometric area: \\(\\int_{-1}^{0}|e^{-x}-e|\\,dx=\\int_{-1}^{0}(e-e^{-x})\\,dx\\). Common mistake: integrating only from 0 to something positive where the curve is even more negative and not closed by both axes in the same way.",
        "workingOut": "\\(\\int_{-1}^{0}(e-e^{-x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(ex+e^{-x}\\). Evaluate: \\((0+1)-(-e+e^{1})=1-(-e+e)=1\\). The \\(\\pm e\\) terms cancel. Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1\\). Another clean unit area, this time for the exponential shifted down by \\(e\\) against the axes. Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q7f",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area of the region bounded by the curve \\(y = 3 - e^{-x}\\), the \\(x\\)-axis, and the lines \\(x = -1\\) and \\(x = 2\\).",
    "opts": [
      "\\(9-e-e^{-2}\\)",
      "\\(9-e+e^{-2}\\)",
      "\\(9+e-e^{-2}\\)",
      "\\(9-e\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(9-e+e^{-2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=3-e^{-x}\\) from \\(x=-1\\) to \\(x=2\\). Strategy: check positivity — since \\(e^{-x}>0\\), we have \\(3-e^{-x}<3\\), and the minimum of \\(e^{-x}\\) on a finite interval is positive but less than 3 for these bounds, so the curve stays above the axis. Integrate directly.",
        "workingOut": "\\(\\text{Area}=\\int_{-1}^{2}(3-e^{-x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(3x+e^{-x}\\). Integral of 3 is \\(3x\\); integral of \\(-e^{-x}\\) is \\(+e^{-x}\\). Common sign error: writing \\(-e^{-x}\\) in the antiderivative.",
        "workingOut": "\\(F(x)=3x+e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(2)-F(-1)=(6+e^{-2})-(-3+e^{1})=6+e^{-2}+3-e=9-e+e^{-2}\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(9-e+e^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(9-e+e^{-2}\\). The 9 is from the constant 3 over a width of 3; the exponential corrections at the two ends give \\(-e+e^{-2}\\).",
        "workingOut": "\\(9-e+e^{-2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q8a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the curves \\(y = e^x\\) and \\(y = x + 1\\), and shade the region between them, from \\(x = 0\\) to \\(x = 1\\). Then write down the area of this region as an integral and evaluate it.",
    "opts": [
      "\\(e-\\dfrac{3}{2}\\)",
      "\\(e-\\dfrac{1}{2}\\)",
      "\\(\\dfrac{5}{2}-e\\)",
      "\\(e-\\dfrac{5}{2}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(e-\\dfrac{5}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: curves \\(y=e^{x}\\) and \\(y=x+1\\) from \\(x=0\\) to \\(x=1\\). Strategy: decide which is above, set up the difference integral, evaluate. At \\(x=0\\) both equal 1; for \\(x\\in(0,1]\\), \\(e^{x}>x+1\\) (exponential grows faster than the tangent line at 0 — actually the line \\(y=x+1\\) is the tangent to \\(e^{x}\\) at 0, so the curve is above its tangent).",
        "workingOut": "\\(e^{x}\\ge x+1\\text{ on }[0,1]\\)",
        "graphData": null
      },
      {
        "explanation": "Why upper minus lower? Area between graphs is \\(\\int(y_{\\text{upper}}-y_{\\text{lower}})\\,dx\\). Here: \\(\\int_{0}^{1}(e^{x}-(x+1))\\,dx\\). Common mistake: integrating \\(e^{x}+x+1\\) or using the wrong top curve.",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{1}(e^{x}-x-1)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(e^{x}-\\dfrac{x^{2}}{2}-x\\). Evaluate from 0 to 1: \\(\\big(e-\\frac{1}{2}-1\\big)-\\big(1-0-0\\big)=e-\\frac{3}{2}-1=e-\\frac{5}{2}\\).",
        "workingOut": "\\(e-\\dfrac{5}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e-\\dfrac{5}{2}\\). Since \\(e\\approx 2.718>2.5\\), the area is a small positive number, as expected for a thin lens between a curve and its tangent on a unit interval.",
        "workingOut": "\\(e-\\dfrac{5}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q8b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the curves \\(y = e^x\\) and \\(y = 1 - x\\), and shade the region between them, from \\(x = 0\\) to \\(x = 1\\). Then write down the area of this region as an integral and evaluate it.",
    "opts": [
      "\\(e-\\dfrac{3}{2}\\)",
      "\\(e-\\dfrac{5}{2}\\)",
      "\\(e-\\dfrac{1}{2}\\)",
      "\\(\\dfrac{3}{2}-e\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(e-\\dfrac{3}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: curves \\(y=e^{x}\\) and \\(y=1-x\\) from \\(x=0\\) to \\(x=1\\). Strategy: compare heights. At 0 both are 1; at 1, \\(e>0=1-1\\), and \\(e^{x}\\) stays above the decreasing line on \\([0,1]\\).",
        "workingOut": "\\(e^{x}\\ge 1-x\\text{ on }[0,1]\\)",
        "graphData": null
      },
      {
        "explanation": "Area = \\(\\int_{0}^{1}\\big(e^{x}-(1-x)\\big)\\,dx=\\int_{0}^{1}(e^{x}-1+x)\\,dx\\). Common mistake: writing \\(1-x-e^{x}\\) (wrong order) which would make the integral negative.",
        "workingOut": "\\(\\int_{0}^{1}(e^{x}-1+x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(e^{x}-x+\\dfrac{x^{2}}{2}\\). At 1: \\(e-1+\\frac{1}{2}\\). At 0: 1. Difference: \\(e-\\frac{1}{2}-1=e-\\frac{3}{2}\\).",
        "workingOut": "\\(e-\\dfrac{3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e-\\dfrac{3}{2}\\). Larger than the previous tangent-line gap because the line \\(1-x\\) falls away from the exponential instead of hugging it.",
        "workingOut": "\\(e-\\dfrac{3}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q14",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the region between the graphs of \\(y = e^x\\) and \\(y = x\\), between the \\(y\\)-axis and \\(x = 2\\), then find its area.",
    "opts": [
      "\\(e^{2}+3\\)",
      "\\(e^{2}-3\\)",
      "\\(e^{2}-2\\)",
      "\\(3-e^{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area under \\(y=e^{kx}\\) is a definite integral; use \\(\\int e^{kx}\\,dx=\\frac1k e^{kx}\\).",
    "solution": "The exact answer is \\(e^{2}-3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: region between \\(y=e^{x}\\) and \\(y=x\\) from the \\(y\\)-axis (\\(x=0\\)) to \\(x=2\\). Strategy: on \\([0,2]\\), \\(e^{x}\\ge x\\) (equality only at 0), so integrate the difference \\(e^{x}-x\\).",
        "workingOut": "\\(\\text{Area}=\\int_{0}^{2}(e^{x}-x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(e^{x}-\\dfrac{x^{2}}{2}\\). Why? Standard exponential plus power rule. Common mistake: subtracting \\(\\frac{x^{2}}{2}\\) with the wrong sign or integrating \\(x\\) as \\(x^{2}\\).",
        "workingOut": "\\(F(x)=e^{x}-\\dfrac{x^{2}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(2)-F(0)=\\big(e^{2}-2\\big)-\\big(1-0\\big)=e^{2}-3\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(e^{2}-3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{2}-3\\). Positive because \\(e^{2}\\approx 7.39>3\\). This is the area of the curved triangular region between the exponential and the diagonal line up to \\(x=2\\).",
        "workingOut": "\\(e^{2}-3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q9a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "The diagram shows the region above the \\(x\\)-axis, below both \\(y=e^{x}\\) and \\(y=e^{-x}\\).\n\nWhy may the area be written as \\(2\\int_{0}^{1}e^{-x}\\,dx\\)?",
    "opts": [
      "The region is symmetric about the x-axis",
      "The integrand is an odd function",
      "The region is symmetric about the y-axis",
      "The curves do not meet the axes"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is The region is symmetric about the y-axis.",
    "solutionSteps": [
      {
        "explanation": "Given: the region above the \\(x\\)-axis and below both \\(y=e^{x}\\) and \\(y=e^{-x}\\). That means we are under the lower envelope of the two curves. Strategy: identify where each curve is lower, then use symmetry.",
        "workingOut": "\\(\\text{lower envelope of }e^{x},\\,e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "What is the lower envelope? For \\(x\\ge 0\\), \\(e^{-x}\\le e^{x}\\), so the lower curve is \\(e^{-x}\\). For \\(x\\le 0\\), the lower curve is \\(e^{x}\\). The two halves are mirror images across the \\(y\\)-axis because replacing \\(x\\) by \\(-x\\) swaps the curves. Common mistake: claiming symmetry about the \\(x\\)-axis (these graphs are not reflections through the \\(x\\)-axis in a way that helps the area factor of 2).",
        "workingOut": "\\(e^{-x}\\le e^{x}\\text{ for }x\\ge 0\\)",
        "graphData": null
      },
      {
        "explanation": "Why the factor 2? Total area = left half + right half, and by \\(y\\)-axis symmetry those halves are equal. The right half is exactly \\(\\int_{0}^{1}e^{-x}\\,dx\\) (the curves meet the lower envelope junction at \\(x=0\\) where both equal 1, and the diagram region ends where relevant at the unit scale used in the book). Hence area \\(=2\\int_{0}^{1}e^{-x}\\,dx\\).",
        "workingOut": "\\(2\\int_{0}^{1}e^{-x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Final conclusion: the area may be written as \\(2\\int_{0}^{1}e^{-x}\\,dx\\) because the region is symmetric about the \\(y\\)-axis. That is the correct conceptual reason among the options.",
        "workingOut": "\\(\\text{symmetric about the }y\\text{-axis}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -1.6,
          2.4,
          1.6,
          -0.35
        ],
        "showAxisLabels": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-1.55,0],[1.55,0]], {strokeColor:'black', strokeWidth:1.4}); board.create('arrow', [[0,-0.3],[0,2.3]], {strokeColor:'black', strokeWidth:1.4}); board.create('text', [1.42, -0.18, 'x'], {fontSize:13}); board.create('text', [0.08, 2.15, 'y'], {fontSize:13}); var shade = []; for (var i = 0; i <= 50; i++) { var x = -1 + 2 * i / 50; var y = Math.exp(-Math.abs(x)); shade.push([x, y]); } shade.push([1, 0]); shade.push([-1, 0]); board.create('polygon', shade, {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0}); board.create('functiongraph', [function(x){ return Math.exp(x); }, -1.5, 1.2], {strokeColor:'#2563eb', strokeWidth:2.4}); board.create('functiongraph', [function(x){ return Math.exp(-x); }, -1.2, 1.5], {strokeColor:'#dc2626', strokeWidth:2.4}); board.create('text', [0.55, 1.85, 'y = eˣ'], {fontSize:12, color:'#2563eb'}); board.create('text', [-1.15, 1.85, 'y = e⁻ˣ'], {fontSize:12, color:'#dc2626'}); board.create('text', [0.15, 0.45, 'R'], {fontSize:14, color:'#1d4ed8', fontWeight:700}); board.create('text', [1, -0.2, '1'], {fontSize:11}); board.create('text', [-1, -0.2, '-1'], {fontSize:11}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q9b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "The diagram shows the region above the \\(x\\)-axis, below both \\(y=e^{x}\\) and \\(y=e^{-x}\\).\n\nHence find the area of this region.",
    "opts": [
      "\\(2(1+e^{-1})\\)",
      "\\(1-e^{-1}\\)",
      "\\(2(e-1)\\)",
      "\\(2(1-e^{-1})\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(2(1-e^{-1})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: from the previous part, area \\(=2\\int_{0}^{1}e^{-x}\\,dx\\). Strategy: evaluate the integral, then double. This is a direct FTC computation.",
        "workingOut": "\\(2\\int_{0}^{1}e^{-x}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Inner integral: antiderivative \\(-e^{-x}\\). Evaluate \\([-e^{-x}]_{0}^{1}=-e^{-1}-(-1)=1-e^{-1}\\). Common sign error at the lower limit.",
        "workingOut": "\\(1-e^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by 2: \\(2(1-e^{-1})\\). Why multiply after integrating the half-interval? Because the factor 2 was a symmetry argument outside the integral, representing the matching left-hand half of the region.",
        "workingOut": "\\(2(1-e^{-1})\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(2(1-e^{-1})\\). This is the total area under the lower envelope of \\(e^{x}\\) and \\(e^{-x}\\) as described in the diagram. Leave it exact; do not expand to a decimal unless asked.",
        "workingOut": "\\(2(1-e^{-1})\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -1.6,
          2.4,
          1.6,
          -0.35
        ],
        "showAxisLabels": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-1.55,0],[1.55,0]], {strokeColor:'black', strokeWidth:1.4}); board.create('arrow', [[0,-0.3],[0,2.3]], {strokeColor:'black', strokeWidth:1.4}); board.create('text', [1.42, -0.18, 'x'], {fontSize:13}); board.create('text', [0.08, 2.15, 'y'], {fontSize:13}); var shade = []; for (var i = 0; i <= 50; i++) { var x = -1 + 2 * i / 50; var y = Math.exp(-Math.abs(x)); shade.push([x, y]); } shade.push([1, 0]); shade.push([-1, 0]); board.create('polygon', shade, {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0}); board.create('functiongraph', [function(x){ return Math.exp(x); }, -1.5, 1.2], {strokeColor:'#2563eb', strokeWidth:2.4}); board.create('functiongraph', [function(x){ return Math.exp(-x); }, -1.2, 1.5], {strokeColor:'#dc2626', strokeWidth:2.4}); board.create('text', [0.55, 1.85, 'y = eˣ'], {fontSize:12, color:'#2563eb'}); board.create('text', [-1.15, 1.85, 'y = e⁻ˣ'], {fontSize:12, color:'#dc2626'}); board.create('text', [0.15, 0.45, 'R'], {fontSize:14, color:'#1d4ed8', fontWeight:700}); board.create('text', [1, -0.2, '1'], {fontSize:11}); board.create('text', [-1, -0.2, '-1'], {fontSize:11}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q10a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "The diagram shows the region above the \\(x\\)-axis, below both \\(y=e-e^{-x}\\) and \\(y=e-e^{x}\\).\n\nWhy may the area be written as \\(2\\int_{0}^{1}(e-e^{x})\\,dx\\)?",
    "opts": [
      "The region is symmetric about the y-axis",
      "The region is symmetric about the line y = x",
      "Both curves are odd functions",
      "The area to the left of the y-axis is zero"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is The region is symmetric about the y-axis.",
    "solutionSteps": [
      {
        "explanation": "Given: region above the \\(x\\)-axis and below both \\(y=e-e^{-x}\\) and \\(y=e-e^{x}\\). Strategy: understand the lower envelope and symmetry under \\(x\\mapsto -x\\).",
        "workingOut": "\\(y=e-e^{\\pm x}\\)",
        "graphData": null
      },
      {
        "explanation": "Replacing \\(x\\) by \\(-x\\) swaps \\(e-e^{x}\\) with \\(e-e^{-x}\\), so the region is symmetric about the \\(y\\)-axis. For \\(x\\ge 0\\), compare: \\(e^{x}\\ge e^{-x}\\) implies \\(e-e^{x}\\le e-e^{-x}\\), so the lower upper-boundary is \\(e-e^{x}\\). Common mistake: saying the region is symmetric about \\(y=x\\) (that would be inverse-function symmetry, not this).",
        "workingOut": "\\(e-e^{x}\\le e-e^{-x}\\text{ for }x\\ge 0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore total area equals twice the right-hand half-area: \\(2\\int_{0}^{1}(e-e^{x})\\,dx\\). The factor 2 is justified by \\(y\\)-axis symmetry, not by any claim that left area is zero.",
        "workingOut": "\\(2\\int_{0}^{1}(e-e^{x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Final conclusion: the correct reason is that the region is symmetric about the \\(y\\)-axis. Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{symmetric about the }y\\text{-axis}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -1.5,
          3.2,
          1.5,
          -0.4
        ],
        "showAxisLabels": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-1.45,0],[1.45,0]], {strokeColor:'black', strokeWidth:1.4}); board.create('arrow', [[0,-0.35],[0,3.05]], {strokeColor:'black', strokeWidth:1.4}); board.create('text', [1.32, -0.2, 'x'], {fontSize:13}); board.create('text', [0.08, 2.9, 'y'], {fontSize:13}); var shade = []; for (var i = 0; i <= 50; i++) { var x = -1 + 2 * i / 50; var y = (x >= 0) ? (Math.E - Math.exp(x)) : (Math.E - Math.exp(-x)); if (y < 0) y = 0; shade.push([x, y]); } shade.push([1, 0]); shade.push([-1, 0]); board.create('polygon', shade, {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0}); board.create('functiongraph', [function(x){ return Math.E - Math.exp(-x); }, -1.4, 1.4], {strokeColor:'#2563eb', strokeWidth:2.4}); board.create('functiongraph', [function(x){ return Math.E - Math.exp(x); }, -1.4, 1.4], {strokeColor:'#dc2626', strokeWidth:2.4}); board.create('text', [0.25, 2.55, 'y = e − e⁻ˣ'], {fontSize:11, color:'#2563eb'}); board.create('text', [-1.35, 2.55, 'y = e − eˣ'], {fontSize:11, color:'#dc2626'}); board.create('text', [0.12, 0.7, 'R'], {fontSize:14, color:'#1d4ed8', fontWeight:700}); board.create('text', [1, -0.22, '1'], {fontSize:11}); board.create('text', [-1, -0.22, '-1'], {fontSize:11}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q10b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "The diagram shows the region above the \\(x\\)-axis, below both \\(y=e-e^{-x}\\) and \\(y=e-e^{x}\\).\n\nHence find the area of this region.",
    "opts": [
      "\\(e-1\\)",
      "\\(2\\)",
      "\\(2e\\)",
      "\\(1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area \\(=2\\int_{0}^{1}(e-e^{x})\\,dx\\). Strategy: antiderive the integrand, evaluate on \\([0,1]\\), then multiply by 2.",
        "workingOut": "\\(2\\int_{0}^{1}(e-e^{x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative of \\(e-e^{x}\\) is \\(ex-e^{x}\\). Evaluate: \\([ex-e^{x}]_{0}^{1}=(e-e)-(0-1)=1\\). Common mistake: forgetting the lower limit contribution \\(-(-1)\\).",
        "workingOut": "\\([ex-e^{x}]_{0}^{1}=1\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply by the symmetry factor of 2 that came from reflecting the right-hand half across the \\(y\\)-axis: area \\(=2\\cdot 1=2\\). Do not forget this outer factor after evaluating the integral.",
        "workingOut": "\\(2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\). A surprisingly simple exact area for this pair of reflected exponential caps above the axis. Sanity check: the inner half-area was 1, so doubling must give 2.",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -1.5,
          3.2,
          1.5,
          -0.4
        ],
        "showAxisLabels": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-1.45,0],[1.45,0]], {strokeColor:'black', strokeWidth:1.4}); board.create('arrow', [[0,-0.35],[0,3.05]], {strokeColor:'black', strokeWidth:1.4}); board.create('text', [1.32, -0.2, 'x'], {fontSize:13}); board.create('text', [0.08, 2.9, 'y'], {fontSize:13}); var shade = []; for (var i = 0; i <= 50; i++) { var x = -1 + 2 * i / 50; var y = (x >= 0) ? (Math.E - Math.exp(x)) : (Math.E - Math.exp(-x)); if (y < 0) y = 0; shade.push([x, y]); } shade.push([1, 0]); shade.push([-1, 0]); board.create('polygon', shade, {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0}); board.create('functiongraph', [function(x){ return Math.E - Math.exp(-x); }, -1.4, 1.4], {strokeColor:'#2563eb', strokeWidth:2.4}); board.create('functiongraph', [function(x){ return Math.E - Math.exp(x); }, -1.4, 1.4], {strokeColor:'#dc2626', strokeWidth:2.4}); board.create('text', [0.25, 2.55, 'y = e − e⁻ˣ'], {fontSize:11, color:'#2563eb'}); board.create('text', [-1.35, 2.55, 'y = e − eˣ'], {fontSize:11, color:'#dc2626'}); board.create('text', [0.12, 0.7, 'R'], {fontSize:14, color:'#1d4ed8', fontWeight:700}); board.create('text', [1, -0.22, '1'], {fontSize:11}); board.create('text', [-1, -0.22, '-1'], {fontSize:11}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q11a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Consider the curve \\(y=e^{x}-e^{-x}\\) and the lines \\(x=-3\\), \\(x=3\\).\n\nWhich calculation shows that \\(f(x)=e^{x}-e^{-x}\\) is odd?",
    "opts": [
      "\\(f(-x)=e^{-x}-e^{x}=e^{x}-e^{-x}=f(x)\\)",
      "\\(f(-x)=e^{x}-e^{-x}=f(x)\\)",
      "\\(f(-x)=-e^{-x}+e^{x}=f(x)\\)",
      "\\(f(-x)=e^{-x}-e^{x}=-(e^{x}-e^{-x})=-f(x)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(f(-x)=e^{-x}-e^{x}=-(e^{x}-e^{-x})=-f(x)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(f(x)=e^{x}-e^{-x}\\). Strategy: test the odd-function definition \\(f(-x)=-f(x)\\) by direct substitution. This algebraic check is what the multiple choice is asking for.",
        "workingOut": "\\(f(x)=e^{x}-e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(-x\\): \\(f(-x)=e^{-x}-e^{-(-x)}=e^{-x}-e^{x}\\). Why rewrite next? We want to compare with \\(-f(x)\\). Common mistake: rearranging until it looks even (\\(f(-x)=f(x)\\)) by flipping signs carelessly.",
        "workingOut": "\\(f(-x)=e^{-x}-e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out a minus: \\(e^{-x}-e^{x}=-(e^{x}-e^{-x})=-f(x)\\). This is exactly the odd-function identity. Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(f(-x)=-f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Final conclusion: the correct calculation is \\(f(-x)=e^{-x}-e^{x}=-(e^{x}-e^{-x})=-f(x)\\). So \\(f\\) is odd (a multiple of \\(\\sinh x\\)).",
        "workingOut": "\\(f\\text{ is odd}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 260,
        "boundingbox": [
          -3.6,
          12,
          3.6,
          -12
        ],
        "showAxisLabels": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'black', strokeWidth:1.4}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'black', strokeWidth:1.4}); board.create('text', [3.25, -0.9, 'x'], {fontSize:13}); board.create('text', [0.15, 10.8, 'y'], {fontSize:13}); var up = [], dn = []; for (var i = 0; i <= 40; i++) { var x = 0 + 3 * i / 40; var y = Math.exp(x) - Math.exp(-x); up.push([x, y]); } up.push([3, 0]); up.push([0, 0]); board.create('polygon', up, {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0}); for (var j = 0; j <= 40; j++) { var x2 = -3 + 3 * j / 40; var y2 = Math.exp(x2) - Math.exp(-x2); dn.push([x2, y2]); } dn.push([0, 0]); dn.push([-3, 0]); board.create('polygon', dn, {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0}); board.create('functiongraph', [function(x){ return Math.exp(x) - Math.exp(-x); }, -3.2, 3.2], {strokeColor:'#7c3aed', strokeWidth:2.5}); board.create('line', [[-3,-12],[-3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2}); board.create('line', [[3,-12],[3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2}); board.create('text', [1.2, 8, 'y = eˣ − e⁻ˣ'], {fontSize:12, color:'#7c3aed'}); board.create('text', [3, -1.2, '3'], {fontSize:11}); board.create('text', [-3, -1.2, '-3'], {fontSize:11}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q11b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Consider the curve \\(y=e^{x}-e^{-x}\\) and the lines \\(x=-3\\), \\(x=3\\).\n\nHence \\(\\displaystyle\\int_{-3}^{3}(e^{x}-e^{-x})\\,dx\\) equals:",
    "opts": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(e^{3}-e^{-3}\\)",
      "\\(2(e^{3}-e^{-3})\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: we already know \\(f(x)=e^{x}-e^{-x}\\) is odd. Strategy: use the theorem that an odd integrable function integrated over a symmetric interval \\([-a,a]\\) has signed integral zero.",
        "workingOut": "\\(\\int_{-a}^{a}f=0\\text{ if }f\\text{ odd}\\)",
        "graphData": null
      },
      {
        "explanation": "Here \\(a=3\\). Why does the theorem apply? The interval \\([-3,3]\\) is symmetric about 0 and \\(f\\) is continuous (hence integrable). Common mistake: reporting the geometric area (twice the right half) instead of the signed integral the question asks for.",
        "workingOut": "\\(\\int_{-3}^{3}(e^{x}-e^{-x})\\,dx=0\\)",
        "graphData": null
      },
      {
        "explanation": "You can also check by antiderivative: \\([e^{x}+e^{-x}]_{-3}^{3}=(e^{3}+e^{-3})-(e^{-3}+e^{3})=0\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(0\\). Important distinction: signed area cancels (positive right, negative left), but the geometric area of the shaded lobes is not zero — that comes in the next parts.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 260,
        "boundingbox": [
          -3.6,
          12,
          3.6,
          -12
        ],
        "showAxisLabels": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'black', strokeWidth:1.4}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'black', strokeWidth:1.4}); board.create('text', [3.25, -0.9, 'x'], {fontSize:13}); board.create('text', [0.15, 10.8, 'y'], {fontSize:13}); var up = [], dn = []; for (var i = 0; i <= 40; i++) { var x = 0 + 3 * i / 40; var y = Math.exp(x) - Math.exp(-x); up.push([x, y]); } up.push([3, 0]); up.push([0, 0]); board.create('polygon', up, {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0}); for (var j = 0; j <= 40; j++) { var x2 = -3 + 3 * j / 40; var y2 = Math.exp(x2) - Math.exp(-x2); dn.push([x2, y2]); } dn.push([0, 0]); dn.push([-3, 0]); board.create('polygon', dn, {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0}); board.create('functiongraph', [function(x){ return Math.exp(x) - Math.exp(-x); }, -3.2, 3.2], {strokeColor:'#7c3aed', strokeWidth:2.5}); board.create('line', [[-3,-12],[-3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2}); board.create('line', [[3,-12],[3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2}); board.create('text', [1.2, 8, 'y = eˣ − e⁻ˣ'], {fontSize:12, color:'#7c3aed'}); board.create('text', [3, -1.2, '3'], {fontSize:11}); board.create('text', [-3, -1.2, '-3'], {fontSize:11}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q11c",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Consider the curve \\(y=e^{x}-e^{-x}\\) and the lines \\(x=-3\\), \\(x=3\\).\n\nWhy is the geometric area equal to \\(2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\)?",
    "opts": [
      "The graph is even, so the areas are equal",
      "The graph is odd, so the areas left and right of the y-axis are equal",
      "The function is always negative on [-3, 0]",
      "The integral from -3 to 3 is already the area"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is The graph is odd, so the areas left and right of the y-axis are equal.",
    "solutionSteps": [
      {
        "explanation": "Given: same odd curve on \\([-3,3]\\). Strategy: convert signed-area cancellation into a geometric-area formula by using absolute values / symmetry of magnitudes.",
        "workingOut": "\\(\\text{geometric area vs signed integral}\\)",
        "graphData": null
      },
      {
        "explanation": "Because \\(f\\) is odd, the graph has 180° rotational symmetry about the origin, so the absolute area left of the \\(y\\)-axis equals the absolute area right of it. On \\([0,3]\\), \\(e^{x}-e^{-x}\\ge 0\\), so that half-area is simply \\(\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\). Common mistake: thinking an odd graph is symmetric about the \\(y\\)-axis like an even function (even would reflect; odd rotates).",
        "workingOut": "\\(\\text{equal absolute areas left and right}\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore total geometric area = \\(2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\). The factor 2 doubles the right-hand positive lobe.",
        "workingOut": "\\(2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Final conclusion: the geometric area equals that doubled integral because the graph is odd, so the areas left and right of the \\(y\\)-axis are equal in magnitude.",
        "workingOut": "\\(\\text{odd }\\Rightarrow\\text{ equal side areas}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 260,
        "boundingbox": [
          -3.6,
          12,
          3.6,
          -12
        ],
        "showAxisLabels": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'black', strokeWidth:1.4}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'black', strokeWidth:1.4}); board.create('text', [3.25, -0.9, 'x'], {fontSize:13}); board.create('text', [0.15, 10.8, 'y'], {fontSize:13}); var up = [], dn = []; for (var i = 0; i <= 40; i++) { var x = 0 + 3 * i / 40; var y = Math.exp(x) - Math.exp(-x); up.push([x, y]); } up.push([3, 0]); up.push([0, 0]); board.create('polygon', up, {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0}); for (var j = 0; j <= 40; j++) { var x2 = -3 + 3 * j / 40; var y2 = Math.exp(x2) - Math.exp(-x2); dn.push([x2, y2]); } dn.push([0, 0]); dn.push([-3, 0]); board.create('polygon', dn, {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0}); board.create('functiongraph', [function(x){ return Math.exp(x) - Math.exp(-x); }, -3.2, 3.2], {strokeColor:'#7c3aed', strokeWidth:2.5}); board.create('line', [[-3,-12],[-3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2}); board.create('line', [[3,-12],[3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2}); board.create('text', [1.2, 8, 'y = eˣ − e⁻ˣ'], {fontSize:12, color:'#7c3aed'}); board.create('text', [3, -1.2, '3'], {fontSize:11}); board.create('text', [-3, -1.2, '-3'], {fontSize:11}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q11d",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Consider the curve \\(y=e^{x}-e^{-x}\\) and the lines \\(x=-3\\), \\(x=3\\).\n\nHence find the area of this region.",
    "opts": [
      "\\(2(e^{3}-e^{-3}-2)\\)",
      "\\(e^{3}+e^{-3}-2\\)",
      "\\(2(e^{3}+e^{-3}-2)\\)",
      "\\(2(e^{3}+e^{-3})\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(2(e^{3}+e^{-3}-2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: geometric area \\(=2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\). Strategy: find the antiderivative, evaluate on \\([0,3]\\), then double.",
        "workingOut": "\\(2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative of \\(e^{x}-e^{-x}\\) is \\(e^{x}+e^{-x}\\). Why the plus on the second term? Differentiating \\(e^{-x}\\) produces \\(-e^{-x}\\), so integrating \\(-e^{-x}\\) recovers \\(+e^{-x}\\). Evaluate: \\([e^{x}+e^{-x}]_{0}^{3}=(e^{3}+e^{-3})-(1+1)=e^{3}+e^{-3}-2\\). Common mistake: writing \\(e^{3}-e^{-3}\\) from the wrong antiderivative.",
        "workingOut": "\\(e^{3}+e^{-3}-2\\)",
        "graphData": null
      },
      {
        "explanation": "Double for both sides of the \\(y\\)-axis: \\(2(e^{3}+e^{-3}-2)\\). The factor 2 is required because we only integrated the right-hand positive lobe so far.",
        "workingOut": "\\(2(e^{3}+e^{-3}-2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact geometric area: \\(2(e^{3}+e^{-3}-2)\\). This counts both the upper-right and lower-left lobes as positive area, unlike the signed integral which cancelled to zero.",
        "workingOut": "\\(2(e^{3}+e^{-3}-2)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 260,
        "boundingbox": [
          -3.6,
          12,
          3.6,
          -12
        ],
        "showAxisLabels": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'black', strokeWidth:1.4}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'black', strokeWidth:1.4}); board.create('text', [3.25, -0.9, 'x'], {fontSize:13}); board.create('text', [0.15, 10.8, 'y'], {fontSize:13}); var up = [], dn = []; for (var i = 0; i <= 40; i++) { var x = 0 + 3 * i / 40; var y = Math.exp(x) - Math.exp(-x); up.push([x, y]); } up.push([3, 0]); up.push([0, 0]); board.create('polygon', up, {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0}); for (var j = 0; j <= 40; j++) { var x2 = -3 + 3 * j / 40; var y2 = Math.exp(x2) - Math.exp(-x2); dn.push([x2, y2]); } dn.push([0, 0]); dn.push([-3, 0]); board.create('polygon', dn, {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0}); board.create('functiongraph', [function(x){ return Math.exp(x) - Math.exp(-x); }, -3.2, 3.2], {strokeColor:'#7c3aed', strokeWidth:2.5}); board.create('line', [[-3,-12],[-3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2}); board.create('line', [[3,-12],[3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2}); board.create('text', [1.2, 8, 'y = eˣ − e⁻ˣ'], {fontSize:12, color:'#7c3aed'}); board.create('text', [3, -1.2, '3'], {fontSize:11}); board.create('text', [-3, -1.2, '-3'], {fontSize:11}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q12a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Consider the curves \\(y=x^{2}\\) and \\(y=e^{x+1}\\).\n\nWhich calculation shows the curves meet at \\(x=-1\\)?",
    "opts": [
      "\\((-1)^{2}=-1 and e^{0}=1\\)",
      "\\((-1)^{2}=1 and e^{-1}=1\\)",
      "\\((-1)^{2}=1 and e^{-1+1}=e^{0}=1\\)",
      "\\(1^{2}=1 and e^{1+1}=e^{2}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\((-1)^{2}=1 and e^{-1+1}=e^{0}=1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: curves \\(y=x^{2}\\) and \\(y=e^{x+1}\\). Strategy: to show they meet at a claimed \\(x\\)-value, substitute that value into both formulas and check the \\(y\\)-coordinates match.",
        "workingOut": "\\(x=-1\\text{ candidate}\\)",
        "graphData": null
      },
      {
        "explanation": "Parabola at \\(x=-1\\): \\(y=(-1)^{2}=1\\). Exponential at \\(x=-1\\): \\(y=e^{-1+1}=e^{0}=1\\). Same point. Common mistake: computing \\((-1)^{2}\\) as \\(-1\\), or writing \\(e^{-1}\\) instead of \\(e^{0}\\).",
        "workingOut": "\\((-1)^{2}=1,\\quad e^{0}=1\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore both curves pass through the same point \\((-1,1)\\), so they meet at \\(x=-1\\). The correct multiple-choice option is precisely the calculation that shows both sides equal 1 at that abscissa.",
        "workingOut": "\\((-1,1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q12b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Consider the curves \\(y=x^{2}\\) and \\(y=e^{x+1}\\).\n\nIn the second quadrant between the curves and the \\(y\\)-axis, which is true?",
    "opts": [
      "On [-1, 0], the parabola is above the exponential",
      "The curves do not meet the y-axis",
      "The region has zero area",
      "\\(\\text{For }-1\\le x\\le 0,\\; e^{x+1}\\ge x^{2}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(\\text{For }-1\\le x\\le 0,\\; e^{x+1}\\ge x^{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: second-quadrant region between the curves and the \\(y\\)-axis. Strategy: on \\([-1,0]\\), decide which curve is above. Endpoints: at \\(x=-1\\) both give 1; at \\(x=0\\), parabola gives 0 while exponential gives \\(e^{1}=e>0\\).",
        "workingOut": "\\(compare\\,x^{2}\\text{ and }e^{x+1}\\text{ on }[-1,0]\\)",
        "graphData": null
      },
      {
        "explanation": "Between the endpoints the exponential stays above the parabola (you can check a midpoint, e.g. \\(x=-0.5\\): \\(e^{0.5}\\approx 1.65>0.25\\)). So \\(e^{x+1}\\ge x^{2}\\) on \\([-1,0]\\). Common mistake: reversing the inequality because the parabola \"looks higher\" near zero in some rough sketches.",
        "workingOut": "\\(e^{x+1}\\ge x^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "This comparison is exactly what is needed to set up the next area integral as upper minus lower: \\(\\int_{-1}^{0}(e^{x+1}-x^{2})\\,dx\\). Final choice: for \\(-1\\le x\\le 0\\), \\(e^{x+1}\\ge x^{2}\\). Reversing the inequality would reverse the sign of the area.",
        "workingOut": "\\(\\int_{-1}^{0}(e^{x+1}-x^{2})\\,dx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q12c",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Consider the curves \\(y=x^{2}\\) and \\(y=e^{x+1}\\).\n\nFind the area of the region in the second quadrant between the curves and the \\(y\\)-axis.",
    "opts": [
      "\\(e-\\dfrac{4}{3}\\)",
      "\\(e-\\dfrac{2}{3}\\)",
      "\\(e+\\dfrac{4}{3}\\)",
      "\\(\\dfrac{4}{3}-e\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(e-\\dfrac{4}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: second-quadrant area between \\(y=e^{x+1}\\) (upper), \\(y=x^{2}\\) (lower), and the \\(y\\)-axis. Strategy: integrate the difference from \\(x=-1\\) to \\(x=0\\).",
        "workingOut": "\\(\\text{Area}=\\int_{-1}^{0}(e^{x+1}-x^{2})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(e^{x+1}-\\dfrac{x^{3}}{3}\\). Why \\(e^{x+1}\\) without an extra factor? The coefficient of \\(x\\) in the exponent is 1. Common mistake: dividing by something or integrating \\(x^{2}\\) as \\(\\frac{x^{2}}{2}\\).",
        "workingOut": "\\(F(x)=e^{x+1}-\\dfrac{x^{3}}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(0)=e-0=e\\). \\(F(-1)=e^{0}-\\dfrac{(-1)^{3}}{3}=1-\\big(-\\dfrac{1}{3}\\big)=1+\\dfrac{1}{3}=\\dfrac{4}{3}\\). Difference: \\(e-\\dfrac{4}{3}\\). Note carefully: \\((-1)^{3}=-1\\), so minus a negative becomes plus.",
        "workingOut": "\\(e-\\dfrac{4}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final exact area: \\(e-\\dfrac{4}{3}\\). Positive because \\(e>1.333\\). This is the area of the second-quadrant pocket between the exponential and the parabola up to the \\(y\\)-axis.",
        "workingOut": "\\(e-\\dfrac{4}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q13a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Consider \\(y=e^{x}\\) and the line \\(y=(e-1)x+1\\).\n\nThe curves meet at which pair of points?",
    "opts": [
      "\\(A(0,0) and B(1,e)\\)",
      "\\(A(0,1) and B(1,e)\\)",
      "\\(A(0,1) and B(1,1)\\)",
      "\\(A(1,0) and B(e,1)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(A(0,1) and B(1,e)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(y=e^{x}\\) and the line \\(y=(e-1)x+1\\). Strategy: test the convenient integer \\(x\\)-values 0 and 1 that typically close such textbook regions.",
        "workingOut": "\\(test\\,x=0\\text{ and }x=1\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=0\\): exponential gives \\(e^{0}=1\\); line gives \\((e-1)\\cdot 0+1=1\\). Point \\(A(0,1)\\). At \\(x=1\\): exponential gives \\(e\\); line gives \\((e-1)+1=e\\). Point \\(B(1,e)\\). Common mistake: writing \\(B(1,1)\\) by forgetting to add 1 on the line.",
        "workingOut": "\\(A(0,1),\\;B(1,e)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: the curves meet at the pair of points \\(A(0,1)\\) and \\(B(1,e)\\). These two points become the endpoints of the definite integral when you find the area between the line and the curve in the next part.",
        "workingOut": "\\(A(0,1)\\text{ and }B(1,e)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q13b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Consider \\(y=e^{x}\\) and the line \\(y=(e-1)x+1\\).\n\nFind the area between the line and the curve from \\(x=0\\) to \\(x=1\\).",
    "opts": [
      "\\(\\dfrac{e}{2}-\\dfrac{3}{2}\\)",
      "\\(\\dfrac{3}{2}+\\dfrac{e}{2}\\)",
      "\\(\\dfrac{3}{2}-\\dfrac{e}{2}\\)",
      "\\(e-\\dfrac{3}{2}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(\\dfrac{3}{2}-\\dfrac{e}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area between the line \\(y=(e-1)x+1\\) and the curve \\(y=e^{x}\\) from \\(x=0\\) to \\(x=1\\). Strategy: on this interval the chord/line lies above the exponential (they meet at the endpoints; between them the exponential is convex so it sits below its chords).",
        "workingOut": "\\(line\\ge e^{x}\\text{ on }[0,1]\\)",
        "graphData": null
      },
      {
        "explanation": "Area = \\(\\int_{0}^{1}\\big((e-1)x+1-e^{x}\\big)\\,dx\\). Common mistake: putting the exponential on top, which would negate the answer.",
        "workingOut": "\\(\\int_{0}^{1}((e-1)x+1-e^{x})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\dfrac{e-1}{2}x^{2}+x-e^{x}\\). At 1: \\(\\dfrac{e-1}{2}+1-e\\). At 0: \\(-1\\). Difference: \\(\\dfrac{e-1}{2}+1-e-(-1)=\\dfrac{e-1}{2}+2-e\\).",
        "workingOut": "\\(\\dfrac{e-1}{2}+2-e\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify over a common denominator: \\(\\dfrac{e-1+4-2e}{2}=\\dfrac{3-e}{2}=\\dfrac{3}{2}-\\dfrac{e}{2}\\). Final answer: \\(\\dfrac{3}{2}-\\dfrac{e}{2}\\). Positive because \\(e<3\\).",
        "workingOut": "\\(\\dfrac{3}{2}-\\dfrac{e}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q15a",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Give approximations correct to four decimal places where needed.\n\nThe area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(0\\le x\\le 1\\), to 4 d.p., is:",
    "opts": [
      "\\(1.7182\\)",
      "\\(1.7283\\)",
      "\\(2.7183\\)",
      "\\(1.7183\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(1.7183\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y=e^{x}\\) on \\([0,1]\\), required to 4 decimal places. Strategy: first get the exact integral, then convert using a known value of \\(e\\).",
        "workingOut": "\\(\\int_{0}^{1}e^{x}\\,dx=e-1\\)",
        "graphData": null
      },
      {
        "explanation": "Why exact first? Rounding intermediate junk early causes off-by-one errors in the last decimal place. What: use \\(e\\approx 2.718281828\\ldots\\). Common mistake: rounding \\(e\\) to 2.718 and getting 1.7180 instead of checking the next digits.",
        "workingOut": "\\(e-1\\approx 1.718281828\\)",
        "graphData": null
      },
      {
        "explanation": "Round to four decimal places using standard half-up rules. Digits after the decimal: 71828… The fourth decimal digit is 2 and the next digit is 8 (at least 5), so round the 2 up to 3. Result: 1.7183. Common mistake: truncating to 1.7182 without rounding.",
        "workingOut": "\\(1.7183\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1.7183\\) (4 d.p.). This is the standard rounded value of \\(e-1\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(1.7183\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q15b",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Give approximations correct to four decimal places where needed.\n\nTrapezoidal rule with two subintervals for the same area (to 4 d.p.):",
    "opts": [
      "\\(1.7539\\)",
      "\\(1.7183\\)",
      "\\(1.8591\\)",
      "\\(1.5431\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is \\(1.7539\\).",
    "solutionSteps": [
      {
        "explanation": "Given: trapezoidal rule with two subintervals for \\(\\int_{0}^{1}e^{x}\\,dx\\). Strategy: width \\(h=\\frac{1-0}{2}=0.5\\); nodes \\(x=0,0.5,1\\); compute function values; apply the composite trapezoidal formula.",
        "workingOut": "\\(h=0.5,\\;x=0,0.5,1\\)",
        "graphData": null
      },
      {
        "explanation": "Function values: \\(y_0=e^{0}=1\\), \\(y_1=e^{0.5}\\approx 1.648721\\) (use 1.6487 to 4 d.p. for tabulated work), \\(y_2=e^{1}\\approx 2.718282\\approx 2.7183\\). Common mistake: using three equal weights instead of the trapezoidal pattern 1,2,1.",
        "workingOut": "\\(y_0=1,\\;y_1\\approx 1.6487,\\;y_2\\approx 2.7183\\)",
        "graphData": null
      },
      {
        "explanation": "Formula: \\(T=\\dfrac{h}{2}(y_0+2y_1+y_2)=\\dfrac{0.5}{2}(1+2\\cdot 1.6487+2.7183)=0.25(1+3.2974+2.7183)=0.25\\times 7.0157\\).",
        "workingOut": "\\(0.25\\times 7.0157\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(0.25\\times 7.0157=1.753925\\approx 1.7539\\) to 4 d.p. Final trapezoidal estimate: \\(1.7539\\). Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(1.7539\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5e-q15c",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Give approximations correct to four decimal places where needed.\n\nCompared with the exact value, the trapezoidal estimate is:",
    "opts": [
      "Less, because y = e^x is concave up",
      "Greater, because y = e^x is concave up (trapezoids sit above the curve)",
      "Greater, because y = e^x is concave down",
      "Exactly equal to the true area"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.",
    "solution": "The exact answer is Greater, because y = e^x is concave up (trapezoids sit above the curve).",
    "solutionSteps": [
      {
        "explanation": "Given: compare trapezoidal estimate 1.7539 with exact 1.7183. Strategy: use the concavity of \\(y=e^{x}\\) to explain the systematic error of the trapezoidal rule.",
        "workingOut": "\\(T=1.7539,\\;\\int=1.7183\\)",
        "graphData": null
      },
      {
        "explanation": "What is concavity? Second derivative \\(y''=e^{x}>0\\) for all \\(x\\), so the graph is concave up (convex function). Common mistake: confusing concave up with concave down from the everyday word \"concave\".",
        "workingOut": "\\(y''=e^{x}>0\\)",
        "graphData": null
      },
      {
        "explanation": "Why does concave up make trapezoids overestimate? The straight chord between two points on a concave-up curve lies above the curve, so each trapezoid includes a little extra area. Therefore \\(T>\\int\\).",
        "workingOut": "\\(T>\\int\\)",
        "graphData": null
      },
      {
        "explanation": "Final conclusion: the trapezoidal estimate is greater than the exact value because \\(y=e^{x}\\) is concave up (trapezoid tops sit above the curve). Numerically, 1.7539 > 1.7183 confirms this.",
        "workingOut": "\\(1.7539>1.7183\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
