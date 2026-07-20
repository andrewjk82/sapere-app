export const Y12_CH8_QUESTIONS = [
  {
    "id": "y12a-8a-q1a",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Show that the sequence \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\) is an arithmetic sequence.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "An arithmetic sequence has a constant difference between consecutive terms.\nCompute successive differences:\n\\(13 - 7 = 6\\)\n\\(19 - 13 = 6\\)\n\\(25 - 19 = 6\\)\nSince each difference equals the same constant \\(d = 6\\), the sequence is arithmetic.",
    "solutionSteps": [
      {
        "explanation": "Given: the sequence \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\). Why check differences? By definition an arithmetic sequence (AP) has a constant common difference \\(d\\) between successive terms. Strategy: subtract each term from the next and verify the results are identical. A common slip is comparing non-consecutive terms or mixing ratios (which test for a GP) with differences.",
        "workingOut": "\\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "What we compute: first-order differences. \\(13 - 7 = 6\\), \\(19 - 13 = 6\\), \\(25 - 19 = 6\\). Why three pairs? You need enough consecutive pairs to see the pattern is constant, not a one-off coincidence. These equal differences will be used as the common difference \\(d\\) in later parts.",
        "workingOut": "\\(13-7=6,\\quad 19-13=6,\\quad 25-19=6\\)",
        "graphData": null
      },
      {
        "explanation": "Conclusion: every computed difference is \\(6\\), so the common difference is constant. Therefore the sequence is an arithmetic progression with \\(d = 6\\). The first term is \\(a = 7\\), which later parts use with the AP formulas for \\(T_n\\) and \\(S_n\\).",
        "workingOut": "\\(d = 6\\ \\text{(constant)}\\ \\Rightarrow\\ \\text{AP}\\)",
        "graphData": null
      },
      {
        "explanation": "Final model answer: the successive differences are all \\(6\\), so the sequence is arithmetic with common difference \\(d = 6\\). This is the required \"show that\" verification for an AP.",
        "workingOut": "\\text{AP with } d=6",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true,
    "answer": "An arithmetic sequence has a constant difference between consecutive terms.\nCompute successive differences:\n\\(13 - 7 = 6\\)\n\\(19 - 13 = 6\\)\n\\(25 - 19 = 6\\)\nSince each difference equals the same constant \\(d = 6\\), the sequence is arithmetic."
  },
  {
    "id": "y12a-8a-q1bi",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The sequence \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\) is an arithmetic sequence. State the first term \\(a\\).",
    "hint": "The first term is the first number listed in the sequence.",
    "solution": "The correct answer is \\(7\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the arithmetic sequence starts \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\). Why identify \\(a\\) first? Every AP formula (\\(T_n\\), \\(S_n\\)) needs the first term as a parameter. What is the first term? By definition, \\(a\\) is the term in position \\(n = 1\\), which is the leftmost listed value. A common slip is taking the common difference as \\(a\\), or taking the second term.",
        "workingOut": "\\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Read the first entry of the sequence: it is \\(7\\). That is \\(T_1\\), so \\(a = 7\\). This value will be substituted into \\(T_n = a + (n-1)d\\) and into sum formulas in later questions on the same sequence.",
        "workingOut": "\\(a = T_1 = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(a = 7\\). Check against the list: the sequence really begins at 7, not at 13 or at the difference 6.",
        "workingOut": "\\(7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)",
      "\\(8\\)"
    ],
    "a": 2,
    "answer": "2",
    "options": [
      {
        "text": "\\(5\\)",
        "imageUrl": null
      },
      {
        "text": "\\(6\\)",
        "imageUrl": null
      },
      {
        "text": "\\(7\\)",
        "imageUrl": null
      },
      {
        "text": "\\(8\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q1bii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The sequence \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\) is an arithmetic sequence. State the common difference \\(d\\).",
    "hint": "Subtract consecutive terms: second minus first.",
    "solution": "The correct answer is \\(6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: AP \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\). Why find \\(d\\)? The common difference is the constant added to get from one term to the next, and it appears in every AP formula. What: compute any successive difference, e.g. second minus first. A common slip is dividing terms (GP ratio) or using \\(T_3 - T_1\\) without dividing by 2.",
        "workingOut": "\\(d = T_2 - T_1\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate: \\(13 - 7 = 6\\). Verify with the next pair: \\(19 - 13 = 6\\). The match confirms constancy. We now have \\(a = 7\\) and \\(d = 6\\) ready for term and sum calculations.",
        "workingOut": "\\(d = 13 - 7 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(d = 6\\). Sign check: terms are increasing, so \\(d\\) is positive (not \\(-6\\)).",
        "workingOut": "\\(6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    "a": 2,
    "answer": "2",
    "options": [
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(5\\)",
        "imageUrl": null
      },
      {
        "text": "\\(6\\)",
        "imageUrl": null
      },
      {
        "text": "\\(7\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q1c",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 100,
    "question": "The arithmetic sequence has first term \\(a = 7\\) and common difference \\(d = 6\\). Use \\(T_n = a + (n-1)d\\) to find the 41st term \\(T_{41}\\).",
    "hint": "Use \\(T_n = a+(n-1)d\\) with \\(n=41\\). Watch the off-by-one: factor is \\((n-1)\\).",
    "solution": "The correct answer is \\(247\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(a = 7\\), \\(d = 6\\), find \\(T_{41}\\). Why the general term formula? An AP is linear in the index \\(n\\), so \\(T_n = a + (n-1)d\\) jumps from the first term by \\((n-1)\\) steps of size \\(d\\). Strategy: substitute \\(n = 41\\) carefully — note the factor is \\((n-1)\\), not \\(n\\). A common slip is using \\(a + nd\\) (off-by-one).",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "What we substitute: \\(n = 41\\), so there are \\(40\\) steps of size \\(6\\) after the first term.\\[T_{41} = 7 + (41-1)\\times 6 = 7 + 40\\times 6.\\]This intermediate product is the total increase from term 1 to term 41.",
        "workingOut": "\\(T_{41} = 7 + 40\\times 6\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(40\\times 6 = 240\\), then \\(7 + 240 = 247\\). Why add, not multiply, the first term? Because \\(a\\) is a starting value and the rest is pure accumulation of differences.",
        "workingOut": "\\(T_{41} = 7 + 240 = 247\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(T_{41} = 247\\). Quick check: \\(T_2 = 7+6 = 13\\) matches the known second term, so the formula was applied correctly.",
        "workingOut": "\\(247\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(241\\)",
      "\\(246\\)",
      "\\(247\\)",
      "\\(253\\)"
    ],
    "a": 2,
    "answer": "2",
    "options": [
      {
        "text": "\\(241\\)",
        "imageUrl": null
      },
      {
        "text": "\\(246\\)",
        "imageUrl": null
      },
      {
        "text": "\\(247\\)",
        "imageUrl": null
      },
      {
        "text": "\\(253\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q1d",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The arithmetic sequence has first term \\(a = 7\\) and common difference \\(d = 6\\). Use \\(S_n = \\dfrac{1}{2}n\\bigl(2a+(n-1)d\\bigr)\\) to find the sum \\(S_{30}\\) of the first 30 terms.",
    "hint": "Substitute into \\(S_n=\\frac12 n(2a+(n-1)d)\\) with \\(n=30\\).",
    "solution": "The correct answer is \\(2820\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(a = 7\\), \\(d = 6\\), \\(n = 30\\). Why a sum formula? Adding thirty terms by hand is inefficient; the AP sum formula collapses the arithmetic series into one evaluation. Strategy: use \\(S_n = \\dfrac{1}{2}n\\bigl(2a+(n-1)d\\bigr)\\). A common slip is forgetting the outer factor \\(\\dfrac{1}{2}n\\) or using \\(n-1\\) incorrectly.",
        "workingOut": "\\(S_n = \\dfrac{1}{2}n\\bigl(2a+(n-1)d\\bigr)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the known values:\\[S_{30} = \\dfrac{1}{2}\\times 30\\bigl(2\\times 7 + (30-1)\\times 6\\bigr) = 15\\bigl(14 + 29\\times 6\\bigr).\\]Simplifying the bracket first keeps arithmetic clean for the next step.",
        "workingOut": "\\(S_{30} = 15\\bigl(14 + 29\\times 6\\bigr)\\)",
        "graphData": null
      },
      {
        "explanation": "Inside: \\(29\\times 6 = 174\\), so \\(14 + 174 = 188\\). Then \\(S_{30} = 15\\times 188\\). Why 15? Because \\(\\dfrac{1}{2}\\times 30 = 15\\). A common slip multiplies by 30 instead of 15.",
        "workingOut": "\\(S_{30} = 15\\times 188\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(15\\times 188 = 15\\times 200 - 15\\times 12 = 3000 - 180 = 2820\\). Final answer: \\(S_{30} = 2820\\). Context: this is the total of the first thirty terms of the AP starting at 7 with difference 6.",
        "workingOut": "\\(2820\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2730\\)",
      "\\(2820\\)",
      "\\(2910\\)",
      "\\(3000\\)"
    ],
    "a": 1,
    "answer": "1",
    "options": [
      {
        "text": "\\(2730\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2820\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2910\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3000\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q3a",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Show that \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\) is a geometric sequence.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "A geometric sequence has a constant ratio between consecutive terms.\nCompute successive ratios:\n\\(\\dfrac{12}{4} = 3\\)\n\\(\\dfrac{36}{12} = 3\\)\n\\(\\dfrac{108}{36} = 3\\)\nSince each ratio equals the same constant \\(r = 3\\), the sequence is geometric.",
    "solutionSteps": [
      {
        "explanation": "Given: the sequence \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\). Why ratios, not differences? A geometric sequence (GP) multiplies by a constant common ratio \\(r\\) each step. Strategy: divide each term by the previous term and check constancy. A common slip is subtracting (AP test) instead of dividing.",
        "workingOut": "\\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "What we compute: \\(\\dfrac{12}{4} = 3\\), \\(\\dfrac{36}{12} = 3\\), \\(\\dfrac{108}{36} = 3\\). Three equal ratios are strong evidence of a constant \\(r\\). These establish \\(r = 3\\) for later term and sum work.",
        "workingOut": "\\(\\dfrac{12}{4}=\\dfrac{36}{12}=\\dfrac{108}{36}=3\\)",
        "graphData": null
      },
      {
        "explanation": "Conclusion: the common ratio is constant at \\(r = 3\\), so the sequence is geometric with first term \\(a = 4\\).",
        "workingOut": "\\(r = 3\\ \\text{(constant)}\\ \\Rightarrow\\ \\text{GP}\\)",
        "graphData": null
      },
      {
        "explanation": "Final model answer: successive ratios equal 3, hence the sequence is a GP with \\(r = 3\\).",
        "workingOut": "\\text{GP with } r=3",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true,
    "answer": "A geometric sequence has a constant ratio between consecutive terms.\nCompute successive ratios:\n\\(\\dfrac{12}{4} = 3\\)\n\\(\\dfrac{36}{12} = 3\\)\n\\(\\dfrac{108}{36} = 3\\)\nSince each ratio equals the same constant \\(r = 3\\), the sequence is geometric."
  },
  {
    "id": "y12a-8a-q3bi",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The sequence \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\) is a geometric sequence. State the first term \\(a\\).",
    "hint": "The first term is the first number in the list.",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: GP starting \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\). Why identify \\(a\\)? Geometric formulas \\(T_n = ar^{n-1}\\) and \\(S_n\\) both need the first term. What: read the first listed term. A common slip is taking the common ratio 3 as \\(a\\), or the second term 12.",
        "workingOut": "\\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "The first term is 4, so \\(a = 4\\). This pairs with \\(r = 3\\) found from the ratios.",
        "workingOut": "\\(a = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(a = 4\\).",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(12\\)"
    ],
    "a": 2,
    "answer": "2",
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(12\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q3bii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The sequence \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\) is a geometric sequence. State the common ratio \\(r\\).",
    "hint": "Divide the second term by the first term.",
    "solution": "The correct answer is \\(3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: GP \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\). Why find \\(r\\)? Each term is the previous term times \\(r\\), so \\(r\\) drives growth in \\(T_n\\) and \\(S_n\\). What: divide the second term by the first. A common slip is subtracting (getting 8) or dividing the wrong way around (\\(4/12\\)).",
        "workingOut": "\\(r = \\dfrac{T_2}{T_1}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(\\dfrac{12}{4} = 3\\). Check: \\(\\dfrac{36}{12} = 3\\). So the common ratio is \\(r = 3\\).",
        "workingOut": "\\(r = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(r = 3\\). Positive and greater than 1 matches the rapidly increasing sequence.",
        "workingOut": "\\(3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(12\\)"
    ],
    "a": 1,
    "answer": "1",
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(12\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q3c",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A geometric sequence has first term \\(a = 4\\) and common ratio \\(r = 3\\). Use \\(T_n = ar^{n-1}\\) to find the sixth term \\(T_6\\).",
    "hint": "Use \\(T_n=ar^{n-1}\\) with \\(n=6\\). Exponent is \\(n-1=5\\).",
    "solution": "The correct answer is \\(972\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(a = 4\\), \\(r = 3\\), find \\(T_6\\). Why \\(T_n = ar^{n-1}\\)? In a GP you multiply by \\(r\\) once for each step after the first term, so there are \\((n-1)\\) factors of \\(r\\). Strategy: substitute \\(n = 6\\). A common slip is using \\(ar^n\\) (one power too many) or \\(a + (n-1)r\\) (AP formula).",
        "workingOut": "\\(T_n = ar^{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute: \\(T_6 = 4\\times 3^{5}\\). Why exponent 5? Because \\(n-1 = 5\\). Compute the power before multiplying by 4.",
        "workingOut": "\\(T_6 = 4\\times 3^{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Powers of 3: \\(3^{2} = 9\\), \\(3^{3} = 27\\), \\(3^{4} = 81\\), \\(3^{5} = 243\\). Then \\(4\\times 243 = 972\\).",
        "workingOut": "\\(T_6 = 4\\times 243 = 972\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(T_6 = 972\\). Spot-check: \\(T_1=4\\), \\(T_2=12\\), \\(T_3=36\\), \\(T_4=108\\), \\(T_5=324\\), \\(T_6=972\\).",
        "workingOut": "\\(972\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(324\\)",
      "\\(972\\)",
      "\\(2916\\)",
      "\\(8748\\)"
    ],
    "a": 1,
    "answer": "1",
    "options": [
      {
        "text": "\\(324\\)",
        "imageUrl": null
      },
      {
        "text": "\\(972\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2916\\)",
        "imageUrl": null
      },
      {
        "text": "\\(8748\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q3d",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A geometric sequence has first term \\(a = 4\\) and common ratio \\(r = 3\\). Use \\(S_n = \\dfrac{a(r^n-1)}{r-1}\\) to find the sum \\(S_6\\) of the first six terms.",
    "hint": "Use \\(S_n=\\frac{a(r^n-1)}{r-1}\\) with \\(n=6\\).",
    "solution": "The correct answer is \\(1456\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(a = 4\\), \\(r = 3\\), \\(n = 6\\). Why this sum formula? For a finite GP with \\(r \\ne 1\\), the closed form \\(S_n = \\dfrac{a(r^n-1)}{r-1}\\) avoids adding six growing terms by hand. Strategy: evaluate \\(r^n\\) first. A common slip is using the infinite-sum formula or the version for \\(|r|<1\\) with \\(1-r^n\\) without adjusting the denominator.",
        "workingOut": "\\(S_n = \\dfrac{a(r^n-1)}{r-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute: \\(S_6 = \\dfrac{4(3^{6}-1)}{3-1}\\). Compute \\(3^{6} = 729\\) (since \\(3^{5}=243\\) and \\(3^{6}=729\\)).",
        "workingOut": "\\(S_6 = \\dfrac{4(729-1)}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(729-1 = 728\\), so \\(\\dfrac{4\\times 728}{2} = 2\\times 728 = 1456\\). Why divide by 2? Because \\(r-1 = 2\\).",
        "workingOut": "\\(S_6 = 1456\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(S_6 = 1456\\). Check: sum \\(4+12+36+108+324+972 = 1456\\).",
        "workingOut": "\\(1456\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(728\\)",
      "\\(1456\\)",
      "\\(2184\\)",
      "\\(2916\\)"
    ],
    "a": 1,
    "answer": "1",
    "options": [
      {
        "text": "\\(728\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1456\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2184\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2916\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q4a",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Show that the sequence \\(162,\\ 54,\\ 18,\\ \\dots\\) is a geometric progression.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Compute successive ratios:\n\\(\\dfrac{54}{162} = \\dfrac{1}{3}\\)\n\\(\\dfrac{18}{54} = \\dfrac{1}{3}\\)\nThe ratio is constant, so the sequence is a GP with first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(162,\\ 54,\\ 18,\\ \\dots\\). Why ratios? A GP is defined by a constant multiplicative ratio. Strategy: divide consecutive terms. A common slip is subtracting and concluding it is an AP (the differences \\(-108\\), \\(-36\\) are not constant).",
        "workingOut": "\\(162,\\ 54,\\ 18,\\ \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "What we compute: \\(\\dfrac{54}{162} = \\dfrac{1}{3}\\) and \\(\\dfrac{18}{54} = \\dfrac{1}{3}\\). Equal ratios confirm a GP with \\(r = \\dfrac{1}{3}\\). Because \\(|r|<1\\), this series will later have a finite limiting sum.",
        "workingOut": "\\(\\dfrac{54}{162}=\\dfrac{18}{54}=\\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Conclusion: constant ratio \\(r = \\dfrac{1}{3}\\) means the sequence is geometric with \\(a = 162\\).",
        "workingOut": "\\text{GP with } a=162,\\ r=\\dfrac{1}{3}",
        "graphData": null
      },
      {
        "explanation": "Final model answer: successive ratios equal \\(\\dfrac{1}{3}\\), so the sequence is a GP.",
        "workingOut": "\\text{GP: } r=\\dfrac{1}{3}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true,
    "answer": "Compute successive ratios:\n\\(\\dfrac{54}{162} = \\dfrac{1}{3}\\)\n\\(\\dfrac{18}{54} = \\dfrac{1}{3}\\)\nThe ratio is constant, so the sequence is a GP with first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\)."
  },
  {
    "id": "y12a-8a-q4bi",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The sequence \\(162,\\ 54,\\ 18,\\ \\dots\\) is a geometric progression. Write down the first term \\(a\\).",
    "hint": "Read the first number in the sequence.",
    "solution": "The correct answer is \\(162\\).",
    "solutionSteps": [
      {
        "explanation": "Given: GP \\(162,\\ 54,\\ 18,\\ \\dots\\). Why state \\(a\\)? All GP formulas start from the first term. What: the first listed value. A common slip is reading the second term 54, or computing a product.",
        "workingOut": "\\(162,\\ 54,\\ 18,\\ \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "The first term is 162, so \\(a = 162\\).",
        "workingOut": "\\(a = 162\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(a = 162\\).",
        "workingOut": "\\(162\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(18\\)",
      "\\(54\\)",
      "\\(162\\)",
      "\\(486\\)"
    ],
    "a": 2,
    "answer": "2",
    "options": [
      {
        "text": "\\(18\\)",
        "imageUrl": null
      },
      {
        "text": "\\(54\\)",
        "imageUrl": null
      },
      {
        "text": "\\(162\\)",
        "imageUrl": null
      },
      {
        "text": "\\(486\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q4bii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The sequence \\(162,\\ 54,\\ 18,\\ \\dots\\) is a geometric progression. Write down the common ratio \\(r\\).",
    "hint": "Divide the second term by the first and simplify the fraction.",
    "solution": "The correct answer is \\(\\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: GP \\(162,\\ 54,\\ 18,\\ \\dots\\). Why find \\(r\\) as a fraction? Exact form avoids decimal rounding and is required for clean powers later. What: divide second by first and simplify. A common slip is writing \\(3\\) (the reciprocal) because the sequence is decreasing — decreasing means \\(0 < r < 1\\), not \\(r > 1\\).",
        "workingOut": "\\(r = \\dfrac{T_2}{T_1}\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(\\dfrac{54}{162} = \\dfrac{54\\div 54}{162\\div 54} = \\dfrac{1}{3}\\). Check: \\(\\dfrac{18}{54} = \\dfrac{1}{3}\\).",
        "workingOut": "\\(r = \\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(r = \\dfrac{1}{3}\\). Because \\(|r| < 1\\), a limiting sum will exist for this series.",
        "workingOut": "\\(\\dfrac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{9}\\)",
      "\\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(3\\)"
    ],
    "a": 1,
    "answer": "1",
    "options": [
      {
        "text": "\\(\\dfrac{1}{9}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q4c",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A geometric progression has first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\). Use \\(T_n = ar^{n-1}\\) to find the sixth term \\(T_6\\).",
    "hint": "Compute \\(162\\times(1/3)^{5}\\) and simplify the fraction.",
    "solution": "The correct answer is \\(\\dfrac{2}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(a = 162\\), \\(r = \\dfrac{1}{3}\\), find \\(T_6\\). Why powers of the ratio? Each step multiplies by \\(\\dfrac{1}{3}\\), so after five steps the first term is scaled by \\(\\left(\\dfrac{1}{3}\\right)^{5}\\). Strategy: write \\(T_6 = 162\\times\\left(\\dfrac{1}{3}\\right)^{5}\\) and simplify. A common slip is exponent 6 instead of 5, or multiplying by 3 repeatedly.",
        "workingOut": "\\(T_6 = 162\\left(\\dfrac{1}{3}\\right)^{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What we evaluate: \\(\\left(\\dfrac{1}{3}\\right)^{5} = \\dfrac{1}{243}\\), so \\(T_6 = \\dfrac{162}{243}\\). Simplify by dividing numerator and denominator by 81: \\(162\\div 81 = 2\\) and \\(243\\div 81 = 3\\).",
        "workingOut": "\\(T_6 = \\dfrac{162}{243} = \\dfrac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(T_6 = \\dfrac{2}{3}\\). Spot-check the chain: \\(162,\\ 54,\\ 18,\\ 6,\\ 2,\\ \\dfrac{2}{3}\\).",
        "workingOut": "\\(\\dfrac{2}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{2}{9}\\)",
      "\\(\\dfrac{2}{3}\\)",
      "\\(2\\)",
      "\\(6\\)"
    ],
    "a": 1,
    "answer": "1",
    "options": [
      {
        "text": "\\(\\dfrac{2}{9}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{2}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(6\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q4d",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "A geometric progression has first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\). Use \\(S_n = \\dfrac{a(1-r^n)}{1-r}\\) to find the sum \\(S_6\\) of the first six terms.",
    "hint": "Use \\(S_n=\\frac{a(1-r^n)}{1-r}\\) with \\(r=\\frac13\\) and \\(n=6\\).",
    "solution": "The correct answer is \\(\\dfrac{728}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(a = 162\\), \\(r = \\dfrac{1}{3}\\), \\(n = 6\\). Why the form with \\(1-r^n\\)? When \\(0 < r < 1\\) the standard finite-sum formula is often written \\(S_n = \\dfrac{a(1-r^n)}{1-r}\\) (equivalent to \\(\\dfrac{a(r^n-1)}{r-1}\\)). Strategy: compute \\(r^6\\) first. A common slip is using the infinite sum too early or forgetting to raise \\(r\\) to the power \\(n\\).",
        "workingOut": "\\(S_6 = \\dfrac{162\\bigl(1-(\\frac{1}{3})^{6}\\bigr)}{1-\\frac{1}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "First, \\(\\left(\\dfrac{1}{3}\\right)^{6} = \\dfrac{1}{729}\\) and \\(1-\\dfrac{1}{3} = \\dfrac{2}{3}\\). So\\[S_6 = \\dfrac{162\\left(1-\\dfrac{1}{729}\\right)}{\\dfrac{2}{3}} = 162\\times\\dfrac{728}{729}\\times\\dfrac{3}{2}.\\]",
        "workingOut": "\\(S_6 = 162\\times\\dfrac{728}{729}\\times\\dfrac{3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(162\\times\\dfrac{3}{2} = 243\\), so \\(S_6 = 243\\times\\dfrac{728}{729}\\). Since \\(243 = \\dfrac{729}{3}\\), we get \\(S_6 = \\dfrac{728}{3}\\).",
        "workingOut": "\\(S_6 = \\dfrac{728}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(S_6 = \\dfrac{728}{3}\\). Note this is less than the limiting sum 243, as expected for a partial sum of a convergent series.",
        "workingOut": "\\(\\dfrac{728}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{242}{3}\\)",
      "\\(\\dfrac{728}{3}\\)",
      "\\(243\\)",
      "\\(728\\)"
    ],
    "a": 1,
    "answer": "1",
    "options": [
      {
        "text": "\\(\\dfrac{242}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{728}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(243\\)",
        "imageUrl": null
      },
      {
        "text": "\\(728\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q4ei",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The geometric series has first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\). Why does this series have a limiting sum?",
    "hint": "An infinite GP converges precisely when the absolute value of the common ratio is less than 1.",
    "solution": "The correct answer is Because \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: a geometric series with \\(r = \\dfrac{1}{3}\\). Why ask about a limiting sum? Infinite GPs only converge under a strict condition on \\(r\\). What is the theorem? The infinite geometric series \\(\\sum ar^{k}\\) converges if and only if \\(|r| < 1\\). A common slip is thinking any decreasing sequence of positive terms automatically converges (counterexamples exist when \\(r\\) is not constant or when \\(|r|\\ge 1\\)).",
        "workingOut": "\\text{Need } |r| < 1",
        "graphData": null
      },
      {
        "explanation": "Check the condition: \\(|r| = \\left|\\dfrac{1}{3}\\right| = \\dfrac{1}{3} < 1\\). Therefore a finite limiting sum \\(S_{\\infty}\\) exists. The positivity of \\(a\\) affects the sign of the sum, not existence.",
        "workingOut": "\\(\\left|\\dfrac{1}{3}\\right| = \\dfrac{1}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: because \\(|r| < 1\\). This justifies using \\(S_{\\infty} = \\dfrac{a}{1-r}\\) in the next part.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Because \\(|r| > 1\\)",
      "Because \\(r = 1\\)",
      "Because \\(|r| < 1\\)",
      "Because the first term is positive"
    ],
    "a": 2,
    "answer": "2",
    "options": [
      {
        "text": "Because \\(|r| > 1\\)",
        "imageUrl": null
      },
      {
        "text": "Because \\(r = 1\\)",
        "imageUrl": null
      },
      {
        "text": "Because \\(|r| < 1\\)",
        "imageUrl": null
      },
      {
        "text": "Because the first term is positive",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q4eii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 100,
    "question": "A geometric series has first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\). Use \\(S_{\\infty} = \\dfrac{a}{1-r}\\) to find the limiting sum.",
    "hint": "Substitute into \\(S_\\infty=\\frac{a}{1-r}\\).",
    "solution": "The correct answer is \\(243\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(a = 162\\), \\(r = \\dfrac{1}{3}\\), and we already know \\(|r| < 1\\). Why the infinite-sum formula? As \\(n\\to\\infty\\), the finite sum approaches \\(\\dfrac{a}{1-r}\\) when the series converges. Strategy: substitute carefully into the denominator. A common slip is writing \\(1+r\\) or using \\(a(1-r)\\) in the numerator only.",
        "workingOut": "\\(S_{\\infty} = \\dfrac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Denominator: \\(1 - \\dfrac{1}{3} = \\dfrac{2}{3}\\). So \\(S_{\\infty} = \\dfrac{162}{\\dfrac{2}{3}} = 162\\times\\dfrac{3}{2}\\).",
        "workingOut": "\\(S_{\\infty} = 162\\times\\dfrac{3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(162\\times\\dfrac{3}{2} = 81\\times 3 = 243\\). Final answer: \\(S_{\\infty} = 243\\). Context: every partial sum is less than 243 and approaches 243 from below.",
        "workingOut": "\\(243\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(81\\)",
      "\\(162\\)",
      "\\(243\\)",
      "\\(324\\)"
    ],
    "a": 2,
    "answer": "2",
    "options": [
      {
        "text": "\\(81\\)",
        "imageUrl": null
      },
      {
        "text": "\\(162\\)",
        "imageUrl": null
      },
      {
        "text": "\\(243\\)",
        "imageUrl": null
      },
      {
        "text": "\\(324\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-8a-q5ai",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\na) i) Consider the series \\( 43 + 49 + 55 + \\dots + 115 \\). Show that it is an arithmetic progression.",
    "answer": "Consecutive differences are constant: \\( 49 - 43 = 6 \\) and \\( 55 - 49 = 6 \\).\nThus it is an AP with \\( a = 43 \\) and \\( d = 6 \\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Consecutive differences are constant: \\( 49 - 43 = 6 \\) and \\( 55 - 49 = 6 \\).\nThus it is an AP with \\( a = 43 \\) and \\( d = 6 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(49 - 43 = 6, \\quad 55 - 49 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Consecutive differences are constant: \\( 49 - 43 = 6 \\) and \\( 55 - 49 = 6 \\).\nThus it is an AP with \\( a = 43 \\) and \\( d = 6 \\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Consecutive differences are constant: \\( 49 - 43 = 6 \\) and \\( 55 - 49 = 6 \\).\nThus it is an AP with \\( a = 43 \\) and \\( d = 6 \\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Consecutive differences are constant: \\( 49 - 43 = 6 \\) and \\( 55 - 49 = 6 \\).\nThus it is an AP with \\( a = 43 \\) and \\( d = 6 \\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q5aii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\na) ii) State the first term \\( a \\) of the series.",
    "opts": [
      "\\(-43\\)",
      "\\(42\\)",
      "\\(43\\)",
      "\\(44\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(43\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a = 43\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(43\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 43. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(43\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q5aiii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\na) iii) State the common difference \\( d \\) of the series.",
    "opts": [
      "\\(-6\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(d = 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
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
    "id": "y12a-8a-q5aiv",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\na) iv) How many terms are there in this series?",
    "opts": [
      "\\(-13\\)",
      "\\(12\\)",
      "\\(13\\)",
      "\\(14\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(13\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_n = 43 + (n-1) \\times 6 = 115\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(6(n-1) = 72 \\implies n - 1 = 12 \\implies n = 13\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(13\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 13. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(13\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q5av",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\na) v) Find the sum of the series.",
    "opts": [
      "\\(-1027\\)",
      "\\(1026\\)",
      "\\(1027\\)",
      "\\(1028\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(1027\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_{13} = \\frac{13}{2} (43 + 115)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_{13} = \\frac{13}{2} \\times 158 = 13 \\times 79 = 1027\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1027\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1027. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1027\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q5bi",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\nb) i) In a particular arithmetic series, the first term is 20 and the 41st term is -20. What is the sum of all the terms?",
    "answer": "0",
    "hint": "",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(n = 41, \\quad a = 20, \\quad l = -20\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_{41} = \\frac{41}{2} (20 + (-20))\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S_{41} = \\frac{41}{2} \\times 0 = 0\\)",
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
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q5bii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\nb) ii) What is the common difference?",
    "opts": [
      "\\(-1\\)",
      "\\(-2\\)",
      "\\(0\\)",
      "\\(1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_{41} = a + 40d = -20\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(20 + 40d = -20\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(40d = -40 \\implies d = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q5ci",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\nc) i) Consider the series \\( 80 + 76 + 72 + \\dots \\). Show that the series is an AP.",
    "answer": "The differences are constant: \\( 76 - 80 = -4 \\) and \\( 72 - 76 = -4 \\).\nThus it is an AP with \\( a = 80 \\) and \\( d = -4 \\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The differences are constant: \\( 76 - 80 = -4 \\) and \\( 72 - 76 = -4 \\).\nThus it is an AP with \\( a = 80 \\) and \\( d = -4 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(76 - 80 = -4, \\quad 72 - 76 = -4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The differences are constant: \\( 76 - 80 = -4 \\) and \\( 72 - 76 = -4 \\).\nThus it is an AP with \\( a = 80 \\) and \\( d = -4 \\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: The differences are constant: \\( 76 - 80 = -4 \\) and \\( 72 - 76 = -4 \\).\nThus it is an AP with \\( a = 80 \\) and \\( d = -4 \\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The differences are constant: \\( 76 - 80 = -4 \\) and \\( 72 - 76 = -4 \\).\nThus it is an AP with \\( a = 80 \\) and \\( d = -4 \\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q5cii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\nc) ii) Find the common difference \\( d \\) of this series.",
    "opts": [
      "\\(-3\\)",
      "\\(-4\\)",
      "\\(-5\\)",
      "\\(4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(-4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(d = -4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q5ciii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\nc) iii) Show that the \\( n \\)th term is \\( T_n = 84 - 4n \\).",
    "answer": "Using the formula \\( T_n = a + (n-1)d \\) with \\( a = 80 \\) and \\( d = -4 \\):\n\\( T_n = 80 + (n-1)(-4) = 80 - 4n + 4 = 84 - 4n \\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Using the formula \\( T_n = a + (n-1)d \\) with \\( a = 80 \\) and \\( d = -4 \\):\n\\( T_n = 80 + (n-1)(-4) = 80 - 4n + 4 = 84 - 4n \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_n = 80 + (n-1)(-4)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(T_n = 80 - 4n + 4 = 84 - 4n\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Using the formula \\( T_n = a + (n-1)d \\) with \\( a = 80 \\) and \\( d = -4 \\):\n\\( T_n = 80 + (n-1)(-4) = 80 - 4n + 4 = 84 - 4n \\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Using the formula \\( T_n = a + (n-1)d \\) with \\( a = 80 \\) and \\( d = -4 \\):\n\\( T_n = 80 + (n-1)(-4) = 80 - 4n + 4 = 84 - 4n \\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Using the formula \\( T_n = a + (n-1)d \\) with \\( a = 80 \\) and \\( d = -4 \\):\n\\( T_n = 80 + (n-1)(-4) = 80 - 4n + 4 = 84 - 4n \\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q5civ",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\nc) iv) Find the value of the first negative term of this series.",
    "opts": [
      "\\(-3\\)",
      "\\(-4\\)",
      "\\(-5\\)",
      "\\(4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(-4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "84 - 4n < 0",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(4n > 84 \\implies n > 21\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(T_{22} = 84 - 4 \\times 22 = 84 - 88 = -4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q5cv",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\nc) v) Find an expression for the sum \\( S_n \\) of the first \\( n \\) terms of the series.",
    "opts": [
      "\\(-82n - 2n^2\\)",
      "\\(82n - 2n^2\\)",
      "\\(82n - 2n^2 + 1\\)",
      "\\(84n - 4n^4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(82n - 2n^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_n = \\frac{n}{2} \\left(2 \\times 80 + (n-1) \\times (-4)\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_n = \\frac{n}{2} \\left(160 - 4n + 4\\right) = \\frac{n}{2} \\left(164 - 4n\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S_n = n(82 - 2n) = 82n - 2n^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 82n - 2n^2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(82n - 2n^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q5cvi",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:\nc) vi) Show that 42 is the minimum number of terms for which \\( S_n \\) is negative.",
    "answer": "Set \\( S_n < 0 \\):\n\\( 82n - 2n^2 < 0 \\implies n(82 - 2n) < 0 \\)\nSince \\( n > 0 \\), we require \\( 82 - 2n < 0 \\implies 2n > 82 \\implies n > 41 \\).\nThe smallest integer value of \\( n \\) satisfying this is \\( n = 42 \\).\nThus, 42 is the minimum number of terms.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Set \\( S_n < 0 \\):\n\\( 82n - 2n^2 < 0 \\implies n(82 - 2n) < 0 \\)\nSince \\( n > 0 \\), we require \\( 82 - 2n < 0 \\implies 2n > 82 \\implies n > 41 \\).\nThe smallest integer value of \\( n \\) satisfying this is \\( n = 42 \\).\nThus, 42 is the minimum number of terms.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "n(82 - 2n) < 0",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(82 - 2n < 0 \\implies 2n > 82 \\implies n > 41\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n_{\\text{min}} = 42\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Set \\( S_n < 0 \\):\n\\( 82n - 2n^2 < 0 \\implies n(82 - 2n) < 0 \\)\nSince \\( n > 0 \\), we require \\( 82 - 2n < 0 \\implies 2n > 82 \\implies n > 41 \\).\nThe smallest integer value of \\( n \\) satisfying this is \\( n = 42 \\).\nThus, 42 is the minimum number of terms.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Set \\( S_n < 0 \\):\n\\( 82n - 2n^2 < 0 \\implies n(82 - 2n) < 0 \\)\nSince \\( n > 0 \\), we require \\( 82 - 2n < 0 \\implies 2n > 82 \\implies n > 41 \\).\nThe smallest integer value of \\( n \\) satisfying this is \\( n = 42 \\).\nThus, 42 is the minimum number of terms.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q6ai",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\na) i) Consider the sequence 200, 204, 208.08, \\dots. Show that it is a geometric sequence.",
    "answer": "The ratios of consecutive terms are constant:\n\\( \\frac{204}{200} = 1.02 \\)\n\\( \\frac{208.08}{204} = 1.02 \\)\nSince the common ratio is constant at \\( r = 1.02 \\), it is a geometric sequence.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The ratios of consecutive terms are constant:\n\\( \\frac{204}{200} = 1.02 \\)\n\\( \\frac{208.08}{204} = 1.02 \\)\nSince the common ratio is constant at \\( r = 1.02 \\), it is a geometric sequence.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{204}{200} = 1.02, \\quad \\frac{208.08}{204} = 1.02\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The ratios of consecutive terms are constant:\n\\( \\frac{204}{200} = 1.02 \\)\n\\( \\frac{208.08}{204} = 1.02 \\)\nSince the common ratio is constant at \\( r = 1.02 \\), it is a geometric sequence.",
        "graphData": null
      },
      {
        "explanation": "Final answer: The ratios of consecutive terms are constant:\n\\( \\frac{204}{200} = 1.02 \\)\n\\( \\frac{208.08}{204} = 1.02 \\)\nSince the common ratio is constant at \\( r = 1.02 \\), it is a geometric sequence.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The ratios of consecutive terms are constant:\n\\( \\frac{204}{200} = 1.02 \\)\n\\( \\frac{208.08}{204} = 1.02 \\)\nSince the common ratio is constant at \\( r = 1.02 \\), it is a geometric sequence.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q6aii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\na) ii) Find the common ratio of the sequence.",
    "opts": [
      "\\(-1.02\\)",
      "\\(0.020000000000000018\\)",
      "\\(1.02\\)",
      "\\(2.02\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(1.02\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(r = 1.02\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1.02\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1.02. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1.02\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q6aiiii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\na) iii) Find the 15th term, correct to two decimal places.",
    "opts": [
      "\\(-263.9\\)",
      "\\(262.9\\)",
      "\\(263.90\\)",
      "\\(264.9\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(263.90\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_{15} = 200 \\times 1.02^{14}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(T_{15} \\approx 200 \\times 1.31947879 = 263.8957 \\approx 263.90\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(263.90\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 263.90. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(263.90\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q6aiv",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\na) iv) Find the sum of the first 15 terms, correct to two decimal places.",
    "opts": [
      "\\(-3458.69\\)",
      "\\(3457.69\\)",
      "\\(3458.69\\)",
      "\\(3459.69\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(3458.69\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_{15} = \\frac{200(1.02^{15} - 1)}{1.02 - 1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_{15} = \\frac{200(1.34586897 - 1)}{0.02} = 10000 \\times 0.34586897 = 3458.6897\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(3458.69\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3458.69. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(3458.69\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q6bi",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\nb) i) The first few terms of a particular series are 1000 + 1200 + 1440 + \\dots. Show that it is a geometric series.",
    "answer": "The ratios of consecutive terms are constant:\n\\( \\frac{1200}{1000} = 1.2 \\)\n\\( \\frac{1440}{1200} = 1.2 \\)\nHence, it is a geometric series with common ratio \\( r = 1.2 \\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The ratios of consecutive terms are constant:\n\\( \\frac{1200}{1000} = 1.2 \\)\n\\( \\frac{1440}{1200} = 1.2 \\)\nHence, it is a geometric series with common ratio \\( r = 1.2 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{1200}{1000} = 1.2, \\quad \\frac{1440}{1200} = 1.2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The ratios of consecutive terms are constant:\n\\( \\frac{1200}{1000} = 1.2 \\)\n\\( \\frac{1440}{1200} = 1.2 \\)\nHence, it is a geometric series with common ratio \\( r = 1.2 \\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: The ratios of consecutive terms are constant:\n\\( \\frac{1200}{1000} = 1.2 \\)\n\\( \\frac{1440}{1200} = 1.2 \\)\nHence, it is a geometric series with common ratio \\( r = 1.2 \\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The ratios of consecutive terms are constant:\n\\( \\frac{1200}{1000} = 1.2 \\)\n\\( \\frac{1440}{1200} = 1.2 \\)\nHence, it is a geometric series with common ratio \\( r = 1.2 \\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q6bii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\nb) ii) Find the common ratio.",
    "opts": [
      "\\(-1.2\\)",
      "\\(0.19999999999999996\\)",
      "\\(1.2\\)",
      "\\(2.2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(1.2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(r = 1.2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1.2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1.2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1.2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q6biii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\nb) iii) What is the sum of the first five terms?",
    "opts": [
      "\\(-7441.6\\)",
      "\\(7440.6\\)",
      "\\(7441.6\\)",
      "\\(7442.6\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(7441.6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_5 = \\frac{1000(1.2^5 - 1)}{1.2 - 1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_5 = \\frac{1000(2.48832 - 1)}{0.2} = 5000 \\times 1.48832 = 7441.6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(7441.6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 7441.6. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(7441.6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q6biv",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\nb) iv) Explain why the series does not have a limiting sum.",
    "answer": "A geometric series has a limiting sum if and only if the absolute value of the common ratio is strictly less than 1.\nSince \\( r = 1.2 > 1 \\), the terms increase in magnitude, and the series diverges, meaning it has no limiting sum.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "A geometric series has a limiting sum if and only if the absolute value of the common ratio is strictly less than 1.\nSince \\( r = 1.2 > 1 \\), the terms increase in magnitude, and the series diverges, meaning it has no limiting sum.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(|r| < 1 \\text{ required for limiting sum}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1.2 > 1 \\implies \\text{no limiting sum}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "A geometric series has a limiting sum if and only if the absolute value of the common ratio is strictly less than 1.\nSince \\( r = 1.2 > 1 \\), the terms increase in magnitude, and the series diverges, meaning it has no limiting sum.",
        "graphData": null
      },
      {
        "explanation": "Final answer: A geometric series has a limiting sum if and only if the absolute value of the common ratio is strictly less than 1.\nSince \\( r = 1.2 > 1 \\), the terms increase in magnitude, and the series diverges, meaning it has no limiting sum.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "A geometric series has a limiting sum if and only if the absolute value of the common ratio is strictly less than 1.\nSince \\( r = 1.2 > 1 \\), the terms increase in magnitude, and the series diverges, meaning it has no limiting sum.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q6ci",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\nc) i) Consider the series 36 + 12 + 4 + \\dots. Show that it is a geometric series.",
    "answer": "The ratios of consecutive terms are constant:\n\\( \\frac{12}{36} = \\frac{1}{3} \\)\n\\( \\frac{4}{12} = \\frac{1}{3} \\)\nThus, it is a geometric series with common ratio \\( r = \\frac{1}{3} \\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The ratios of consecutive terms are constant:\n\\( \\frac{12}{36} = \\frac{1}{3} \\)\n\\( \\frac{4}{12} = \\frac{1}{3} \\)\nThus, it is a geometric series with common ratio \\( r = \\frac{1}{3} \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{12}{36} = \\frac{1}{3}, \\quad \\frac{4}{12} = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The ratios of consecutive terms are constant:\n\\( \\frac{12}{36} = \\frac{1}{3} \\)\n\\( \\frac{4}{12} = \\frac{1}{3} \\)\nThus, it is a geometric series with common ratio \\( r = \\frac{1}{3} \\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: The ratios of consecutive terms are constant:\n\\( \\frac{12}{36} = \\frac{1}{3} \\)\n\\( \\frac{4}{12} = \\frac{1}{3} \\)\nThus, it is a geometric series with common ratio \\( r = \\frac{1}{3} \\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The ratios of consecutive terms are constant:\n\\( \\frac{12}{36} = \\frac{1}{3} \\)\n\\( \\frac{4}{12} = \\frac{1}{3} \\)\nThus, it is a geometric series with common ratio \\( r = \\frac{1}{3} \\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q6cii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\nc) ii) Find the common ratio.",
    "opts": [
      "\\(-0.3333333333333333\\)",
      "\\(-0.6666666666666667\\)",
      "\\(1/3\\)",
      "\\(1.3333333333333333\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(1/3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(r = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1/3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1/3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q6ciii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\nc) iii) Explain why this geometric series has a limiting sum, and find its value.",
    "answer": "Since \\( |r| = \\left|\\frac{1}{3}\\right| = \\frac{1}{3} < 1 \\), the series converges and has a limiting sum.\nIts value is \\( S_{\\infty} = \\frac{a}{1-r} = \\frac{36}{1 - \\frac{1}{3}} = \\frac{36}{\\frac{2}{3}} = 54 \\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Since \\( |r| = \\left|\\frac{1}{3}\\right| = \\frac{1}{3} < 1 \\), the series converges and has a limiting sum.\nIts value is \\( S_{\\infty} = \\frac{a}{1-r} = \\frac{36}{1 - \\frac{1}{3}} = \\frac{36}{\\frac{2}{3}} = 54 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(|r| = \\frac{1}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_{\\infty} = \\frac{36}{1 - \\frac{1}{3}} = 54\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Since \\( |r| = \\left|\\frac{1}{3}\\right| = \\frac{1}{3} < 1 \\), the series converges and has a limiting sum.\nIts value is \\( S_{\\infty} = \\frac{a}{1-r} = \\frac{36}{1 - \\frac{1}{3}} = \\frac{36}{\\frac{2}{3}} = 54 \\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Since \\( |r| = \\left|\\frac{1}{3}\\right| = \\frac{1}{3} < 1 \\), the series converges and has a limiting sum.\nIts value is \\( S_{\\infty} = \\frac{a}{1-r} = \\frac{36}{1 - \\frac{1}{3}} = \\frac{36}{\\frac{2}{3}} = 54 \\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Since \\( |r| = \\left|\\frac{1}{3}\\right| = \\frac{1}{3} < 1 \\), the series converges and has a limiting sum.\nIts value is \\( S_{\\infty} = \\frac{a}{1-r} = \\frac{36}{1 - \\frac{1}{3}} = \\frac{36}{\\frac{2}{3}} = 54 \\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q6civ",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\nc) iv) Find the sum of the first ten terms, correct to three decimal places.",
    "opts": [
      "\\(-53.999\\)",
      "\\(52.999\\)",
      "\\(53.999\\)",
      "\\(54.999\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(53.999\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_{10} = \\frac{36(1 - (1/3)^{10})}{1 - 1/3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_{10} = 54 \\left(1 - \\frac{1}{59049}\\right) = 54 - \\frac{54}{59049} \\approx 53.99908\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(53.999\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 53.999. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(53.999\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q6cv",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:\nc) v) Explain why the sum of the first ten terms and the limiting sum are approximately equal.",
    "answer": "The sum of the first ten terms is \\( 53.999 \\) (correct to 3 decimal places) and the limiting sum is \\( 54 \\).\nThe difference is only \\( 54 \\times (1/3)^{10} \\approx 0.0009 \\), which is negligible.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The sum of the first ten terms is \\( 53.999 \\) (correct to 3 decimal places) and the limiting sum is \\( 54 \\).\nThe difference is only \\( 54 \\times (1/3)^{10} \\approx 0.0009 \\), which is negligible.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_{\\infty} - S_{10} = 54 \\times \\left(\\frac{1}{3}\\right)^{10} \\approx 0.000915\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(53.999 \\approx 54.000\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The sum of the first ten terms is \\( 53.999 \\) (correct to 3 decimal places) and the limiting sum is \\( 54 \\).\nThe difference is only \\( 54 \\times (1/3)^{10} \\approx 0.0009 \\), which is negligible.",
        "graphData": null
      },
      {
        "explanation": "Final answer: The sum of the first ten terms is \\( 53.999 \\) (correct to 3 decimal places) and the limiting sum is \\( 54 \\).\nThe difference is only \\( 54 \\times (1/3)^{10} \\approx 0.0009 \\), which is negligible.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The sum of the first ten terms is \\( 53.999 \\) (correct to 3 decimal places) and the limiting sum is \\( 54 \\).\nThe difference is only \\( 54 \\times (1/3)^{10} \\approx 0.0009 \\), which is negligible.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q7a",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problem about arithmetic salary growth:\na) A graphic designer starts on an annual salary of \\(65,000, with annual increments of \\)4,500. Find his annual salary in the 8th year.",
    "opts": [
      "\\(-96500\\)",
      "\\(96499\\)",
      "\\(96500\\)",
      "\\(96501\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(96500\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a = 65000, \\quad d = 4500, \\quad n = 8\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(T_8 = 65000 + 7 \\times 4500\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(T_8 = 65000 + 31500 = 96500\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 96500. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(96500\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q7b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problem about arithmetic salary growth:\nb) Find his total earnings at the end of 8 years.",
    "opts": [
      "\\(-646000\\)",
      "\\(645999\\)",
      "\\(646000\\)",
      "\\(646001\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(646000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_8 = \\frac{8}{2}(a + T_8)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_8 = 4(65000 + 96500)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S_8 = 4 \\times 161500 = 646000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 646000. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(646000\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q7c",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problem about arithmetic salary growth:\nc) In which year will his salary first reach 101,000? State the year as an integer (e.g. 9).",
    "opts": [
      "\\(-9\\)",
      "\\(10\\)",
      "\\(8\\)",
      "\\(9\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(9\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_n = 65000 + (n-1) \\times 4500 = 101000\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(4500(n-1) = 36000 \\implies n-1 = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 9. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q8a",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problem about compound interest salary growth:\na) A software engineer receives an annual salary of 90,000, with 6% increments each year. Show that her annual salary forms a GP.",
    "answer": "Each year, the salary is multiplied by a factor of \\( 1 + 0.06 = 1.06 \\).\nSince the multiplier is constant, the salary sequence is geometric: \\( 90000, 95400, 101124, \\dots \\) with common ratio \\( r = 1.06 \\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Each year, the salary is multiplied by a factor of \\( 1 + 0.06 = 1.06 \\).\nSince the multiplier is constant, the salary sequence is geometric: \\( 90000, 95400, 101124, \\dots \\) with common ratio \\( r = 1.06 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_{n+1} = T_n \\times 1.06 \\implies \\frac{T_{n+1}}{T_n} = 1.06\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{GP with ratio } 1.06\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Each year, the salary is multiplied by a factor of \\( 1 + 0.06 = 1.06 \\).\nSince the multiplier is constant, the salary sequence is geometric: \\( 90000, 95400, 101124, \\dots \\) with common ratio \\( r = 1.06 \\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Each year, the salary is multiplied by a factor of \\( 1 + 0.06 = 1.06 \\).\nSince the multiplier is constant, the salary sequence is geometric: \\( 90000, 95400, 101124, \\dots \\) with common ratio \\( r = 1.06 \\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Each year, the salary is multiplied by a factor of \\( 1 + 0.06 = 1.06 \\).\nSince the multiplier is constant, the salary sequence is geometric: \\( 90000, 95400, 101124, \\dots \\) with common ratio \\( r = 1.06 \\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q8b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problem about compound interest salary growth:\nb) State the common ratio of the geometric progression.",
    "opts": [
      "\\(-1.06\\)",
      "\\(0.06000000000000005\\)",
      "\\(1.06\\)",
      "\\(2.06\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(1.06\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(r = 1.06\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1.06\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1.06. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1.06\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q8c",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problem about compound interest salary growth:\nc) Find her annual salary in the 8th year, correct to the nearest dollar.",
    "opts": [
      "\\(-135327\\)",
      "\\(135326\\)",
      "\\(135327\\)",
      "\\(135328\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(135327\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a = 90000, \\quad r = 1.06, \\quad n = 8\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(T_8 = 90000 \\times 1.06^7\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(T_8 \\approx 90000 \\times 1.503630 = 135326.72 \\approx 135327\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 135327. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(135327\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q8d",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problem about compound interest salary growth:\nd) Find her total earnings at the end of 8 years, correct to the nearest dollar.",
    "opts": [
      "\\(-890772\\)",
      "\\(890771\\)",
      "\\(890772\\)",
      "\\(890773\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(890772\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_8 = \\frac{90000(1.06^8 - 1)}{1.06 - 1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_8 = \\frac{90000(1.5938481 - 1)}{0.06}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S_8 = 1500000 \\times 0.5938481 \\approx 890772.15 \\approx 890772\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 890772. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(890772\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-8a-q9ai",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Answer the following theoretical questions about APs and GPs:\na) i) What can be said about the terms of an AP in which the common difference is zero?",
    "answer": "All terms in the sequence are identical (it is a constant sequence: \\( a, a, a, \\dots \\)).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "All terms in the sequence are identical (it is a constant sequence: \\( a, a, a, \\dots \\)).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_n = a + (n-1)(0) = a\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "All terms in the sequence are identical (it is a constant sequence: \\( a, a, a, \\dots \\)).",
        "graphData": null
      },
      {
        "explanation": "Final answer: All terms in the sequence are identical (it is a constant sequence: \\( a, a, a, \\dots \\)).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "All terms in the sequence are identical (it is a constant sequence: \\( a, a, a, \\dots \\)).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q9aii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Answer the following theoretical questions about APs and GPs:\na) ii) What can be said about the terms of an AP in which the common difference is negative?",
    "answer": "The terms decrease in value as \\( n \\) increases.\nThe sequence is strictly decreasing.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The terms decrease in value as \\( n \\) increases.\nThe sequence is strictly decreasing.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_{n+1} - T_n = d < 0 \\implies T_{n+1} < T_n\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The terms decrease in value as \\( n \\) increases.\nThe sequence is strictly decreasing.",
        "graphData": null
      },
      {
        "explanation": "Final answer: The terms decrease in value as \\( n \\) increases.\nThe sequence is strictly decreasing.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The terms decrease in value as \\( n \\) increases.\nThe sequence is strictly decreasing.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q9b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Answer the following theoretical questions about APs and GPs:\nb) Why can't the common ratio of a GP be zero?",
    "answer": "If the common ratio were zero, every term after the first term would be zero (e.g.\n\\( a, 0, 0, 0, \\dots \\)).\nBy definition, a geometric sequence consists of non-zero terms so that the ratio of consecutive terms \\( \\frac{T_{n+1}}{T_n} \\) is defined.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "If the common ratio were zero, every term after the first term would be zero (e.g.\n\\( a, 0, 0, 0, \\dots \\)).\nBy definition, a geometric sequence consists of non-zero terms so that the ratio of consecutive terms \\( \\frac{T_{n+1}}{T_n} \\) is defined.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_n = a \\times 0^{n-1} = 0 \\text{ for } n > 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Ratio } \\frac{T_{n+1}}{T_n} = \\frac{0}{0} \\text{ is undefined}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "If the common ratio were zero, every term after the first term would be zero (e.g.\n\\( a, 0, 0, 0, \\dots \\)).\nBy definition, a geometric sequence consists of non-zero terms so that the ratio of consecutive terms \\( \\frac{T_{n+1}}{T_n} \\) is defined.",
        "graphData": null
      },
      {
        "explanation": "Final answer: If the common ratio were zero, every term after the first term would be zero (e.g.\n\\( a, 0, 0, 0, \\dots \\)).\nBy definition, a geometric sequence consists of non-zero terms so that the ratio of consecutive terms \\( \\frac{T_{n+1}}{T_n} \\) is defined.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "If the common ratio were zero, every term after the first term would be zero (e.g.\n\\( a, 0, 0, 0, \\dots \\)).\nBy definition, a geometric sequence consists of non-zero terms so that the ratio of consecutive terms \\( \\frac{T_{n+1}}{T_n} \\) is defined.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q9ci",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Answer the following theoretical questions about APs and GPs:\nc) i) What can be said about the terms of a GP with common ratio \\( r \\) in which \\( r < 0 \\)?",
    "answer": "The signs of the terms alternate between positive and negative (e.g.\n\\( a, -ar, ar^2, -ar^3, \\dots \\)).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The signs of the terms alternate between positive and negative (e.g.\n\\( a, -ar, ar^2, -ar^3, \\dots \\)).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Sign}(T_{n+1}) = -\\text{Sign}(T_n)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The signs of the terms alternate between positive and negative (e.g.\n\\( a, -ar, ar^2, -ar^3, \\dots \\)).",
        "graphData": null
      },
      {
        "explanation": "Final answer: The signs of the terms alternate between positive and negative (e.g.\n\\( a, -ar, ar^2, -ar^3, \\dots \\)).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The signs of the terms alternate between positive and negative (e.g.\n\\( a, -ar, ar^2, -ar^3, \\dots \\)).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q9cii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Answer the following theoretical questions about APs and GPs:\nc) ii) What can be said about the terms of a GP with common ratio \\( r \\) in which \\( r = 1 \\)?",
    "answer": "All terms in the sequence are identical to the first term (it is a constant sequence: \\( a, a, a, \\dots \\)).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "All terms in the sequence are identical to the first term (it is a constant sequence: \\( a, a, a, \\dots \\)).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_n = a \\times 1^{n-1} = a\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "All terms in the sequence are identical to the first term (it is a constant sequence: \\( a, a, a, \\dots \\)).",
        "graphData": null
      },
      {
        "explanation": "Final answer: All terms in the sequence are identical to the first term (it is a constant sequence: \\( a, a, a, \\dots \\)).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "All terms in the sequence are identical to the first term (it is a constant sequence: \\( a, a, a, \\dots \\)).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q9ciii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Answer the following theoretical questions about APs and GPs:\nc) iii) What can be said about the terms of a GP with common ratio \\( r \\) in which \\( r = -1 \\)?",
    "answer": "The terms alternate in sign but remain constant in absolute value (e.g.\n\\( a, -a, a, -a, \\dots \\)).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The terms alternate in sign but remain constant in absolute value (e.g.\n\\( a, -a, a, -a, \\dots \\)).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_n = a \\times (-1)^{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The terms alternate in sign but remain constant in absolute value (e.g.\n\\( a, -a, a, -a, \\dots \\)).",
        "graphData": null
      },
      {
        "explanation": "Final answer: The terms alternate in sign but remain constant in absolute value (e.g.\n\\( a, -a, a, -a, \\dots \\)).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The terms alternate in sign but remain constant in absolute value (e.g.\n\\( a, -a, a, -a, \\dots \\)).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q9civ",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Answer the following theoretical questions about APs and GPs:\nc) iv) What can be said about the terms of a GP with common ratio \\( r \\) in which \\( 0 < |r| < 1 \\)?",
    "answer": "The absolute value of the terms decreases, and the sequence converges towards zero.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The absolute value of the terms decreases, and the sequence converges towards zero.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of APs and GPs: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\lim_{n \\to \\infty} |T_n| = \\lim_{n \\to \\infty} |a| |r|^{n-1} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The absolute value of the terms decreases, and the sequence converges towards zero.",
        "graphData": null
      },
      {
        "explanation": "Final answer: The absolute value of the terms decreases, and the sequence converges towards zero.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The absolute value of the terms decreases, and the sequence converges towards zero.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-8a-q10a1",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\( \\$55000 \\) per annum, with annual increases of \\( \\$6000 \\). Sophia starts at \\( \\$45000 \\) per annum, with annual increases of \\( 12\\% \\).\n\nFind Oliver's wages in Year 1.",
    "hint": "Year 1 is Oliver's starting salary — the first term of his arithmetic sequence. Do not add an increase yet.",
    "solution": "The correct answer is \\( \\$55000 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: Oliver's starting salary is \\( \\$55000 \\) per year, and each year after that his salary increases by a fixed amount of \\( \\$6000 \\). Sophia's details are not needed for this part. Why start by naming Year 1 carefully? In salary AP problems, \"Year 1\" means the first year of employment, before any annual increase has been applied. Strategy: identify the first term \\( a \\) of Oliver's arithmetic sequence of annual wages. A common slip is adding one \\( \\$6000 \\) increase already in Year 1 (that value is Year 2).",
        "workingOut": "\\( a = 55000,\\quad d = 6000 \\)",
        "graphData": null
      },
      {
        "explanation": "What is Year 1? By definition of an arithmetic sequence of annual wages,\\[T_n = a + (n-1)d.\\]For \\( n = 1 \\):\\[T_1 = a + (1-1)d = a = 55000.\\]So Oliver's wages in Year 1 are exactly the stated starting salary. The common difference \\( d \\) does not appear until Year 2.",
        "workingOut": "\\( T_1 = 55000 + (1-1)\\times 6000 = 55000 \\)",
        "graphData": null
      },
      {
        "explanation": "Check against the stem: the problem says Oliver \"starts at \\( \\$55000 \\) per annum\". That sentence is precisely the Year 1 wage. No calculation beyond reading the given value is required, but the AP formula confirms the same number. This first term will be reused when finding later years and when comparing with Sophia.",
        "workingOut": "\\( T_1 = 55000 \\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\( \\$55000 \\). Context: this is Oliver's annual wage in his first year of work, and the first term of his arithmetic wage sequence with common difference \\( \\$6000 \\).",
        "workingOut": "\\( \\$55000 \\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\( \\$49000 \\)",
      "\\( \\$52000 \\)",
      "\\( \\$55000 \\)",
      "\\( \\$61000 \\)"
    ],
    "options": [
      {
        "text": "\\( \\$49000 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$52000 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$55000 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$61000 \\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q10a2",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).\nFind Oliver's wages in Year 2.",
    "hint": "Add one annual increment of \\(\\$6000\\) to Year 1.",
    "solution": "The correct answer is \\(\\$61\\,000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: Oliver's wages form an AP with \\(a = 55\\,000\\) and common difference \\(d = 6\\,000\\). Why Year 2 is one step of the AP: after one full year he receives exactly one increment. Strategy: use \\(T_2 = a + d\\), or simply add 6000 to Year 1. A common slip is multiplying by 1.06 (confusing with Sophia's percentage growth).",
        "workingOut": "\\(T_2^{\\text{O}} = a + d\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(T_2 = 55\\,000 + 6\\,000 = 61\\,000\\). Equivalently \\(T_n = 55\\,000 + 6\\,000(n-1)\\) at \\(n = 2\\) gives the same result.",
        "workingOut": "\\(T_2^{\\text{O}} = 55\\,000 + 6\\,000 = 61\\,000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\$61\\,000\\). This sits between Year 1 (55 000) and Year 3 (67 000), which is a useful sanity check.",
        "workingOut": "\\(\\$61\\,000\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\$55\\,000\\)",
      "\\(\\$58\\,000\\)",
      "\\(\\$61\\,000\\)",
      "\\(\\$67\\,000\\)"
    ],
    "options": [
      {
        "text": "\\(\\$55\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$58\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$61\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$67\\,000\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q10a3",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).\nFind Oliver's wages in Year 3.",
    "hint": "Use \\(T_n=a+(n-1)d\\) with \\(n=3\\).",
    "solution": "The correct answer is \\(\\$67\\,000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: Oliver AP with \\(a = 55\\,000\\), \\(d = 6\\,000\\). Why the general term? Year 3 is two increments after Year 1, so \\(T_3 = a + 2d\\). Strategy: substitute into \\(T_n = a + (n-1)d\\) with \\(n = 3\\). A common slip is using \\(n\\) increments instead of \\((n-1)\\).",
        "workingOut": "\\(T_3^{\\text{O}} = 55\\,000 + (3-1)\\times 6\\,000\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(55\\,000 + 2\\times 6\\,000 = 55\\,000 + 12\\,000 = 67\\,000\\). Chain check: Year 2 was 61 000, plus another 6000 gives 67 000.",
        "workingOut": "\\(T_3^{\\text{O}} = 67\\,000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\$67\\,000\\). Context: Oliver's third-year annual wage under constant dollar increments.",
        "workingOut": "\\(\\$67\\,000\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\$61\\,000\\)",
      "\\(\\$64\\,000\\)",
      "\\(\\$67\\,000\\)",
      "\\(\\$73\\,000\\)"
    ],
    "options": [
      {
        "text": "\\(\\$61\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$64\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$67\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$73\\,000\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q10a4",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).\nWhy do Oliver's wages form an arithmetic sequence?",
    "hint": "Arithmetic means a constant difference between consecutive terms.",
    "solution": "The correct answer is Each year the wage increases by a constant amount of \\(\\$6\\,000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: Oliver starts at 55 000 and receives annual increases of 6 000 dollars. Why classify the sequence type? AP versus GP is decided by whether successive terms differ by a constant or by a constant ratio. Strategy: look at the yearly change, not the starting amount. A common slip is calling any increasing salary a GP because \"it grows every year\".",
        "workingOut": "\\(T_{n+1}^{\\text{O}} - T_n^{\\text{O}} = ?\\)",
        "graphData": null
      },
      {
        "explanation": "What the problem states: each year Oliver receives a fixed dollar increase of 6000. So\\[T_{n+1}^{\\text{O}} - T_n^{\\text{O}} = 6\\,000\\]is constant for every \\(n\\). By definition, a sequence with constant successive difference is an arithmetic sequence (AP).",
        "workingOut": "\\(T_{n+1}^{\\text{O}} - T_n^{\\text{O}} = 6\\,000\\ \\text{(constant)}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: each year the wage increases by a constant amount of \\(\\$6\\,000\\). That constant difference is the common difference \\(d\\) of the AP. (Sophia's 12% growth is the GP case, handled separately.)",
        "workingOut": "\\text{constant difference } d=6000\\ \\Rightarrow\\ \\text{AP}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Each year the wage is multiplied by a constant factor 1.06",
      "Each year the wage increases by a constant amount of \\(\\$6\\,000\\)",
      "The wage doubles every year",
      "The wage decreases by 6% each year"
    ],
    "options": [
      {
        "text": "Each year the wage is multiplied by a constant factor 1.06",
        "imageUrl": null
      },
      {
        "text": "Each year the wage increases by a constant amount of \\(\\$6\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "The wage doubles every year",
        "imageUrl": null
      },
      {
        "text": "The wage decreases by 6% each year",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q10b1",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).\nFind Sophia's wages in Year 1.",
    "hint": "Year 1 is Sophia's stated starting salary.",
    "solution": "The correct answer is \\(\\$45\\,000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: Sophia starts at \\(\\$45\\,000\\) with 12% annual increases. Why Year 1 equals the stated start? Percentage growth is applied after each completed year, so Year 1 is still the opening salary. Strategy: read the first term of the GP as \\(a = 45\\,000\\). A common slip is already applying one 12% increase for Year 1.",
        "workingOut": "\\(T_1^{\\text{S}} = 45\\,000\\)",
        "graphData": null
      },
      {
        "explanation": "Sophia's Year 1 wages are therefore \\(\\$45\\,000\\). This is the first term used in \\(T_n = ar^{n-1}\\) with \\(r = 1.12\\).",
        "workingOut": "\\(T_1^{\\text{S}} = 45\\,000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\$45\\,000\\).",
        "workingOut": "\\(\\$45\\,000\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\$40\\,000\\)",
      "\\(\\$45\\,000\\)",
      "\\(\\$50\\,400\\)",
      "\\(\\$55\\,000\\)"
    ],
    "options": [
      {
        "text": "\\(\\$40\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$45\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$50\\,400\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$55\\,000\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q10b2",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).\nFind Sophia's wages in Year 2.",
    "hint": "Multiply Year 1 by 1.12.",
    "solution": "The correct answer is \\(\\$50\\,400\\).",
    "solutionSteps": [
      {
        "explanation": "Given: Sophia GP with \\(a = 45\\,000\\) and 12% growth, so common ratio \\(r = 1 + 0.12 = 1.12\\). Why multiply? A percentage increase multiplies the previous year's wage by 1.12. Strategy: \\(T_2 = a r\\). A common slip is adding 12% of 45 000 incorrectly as 5400 but then forgetting to add to the base, or using 0.12 alone.",
        "workingOut": "\\(T_2^{\\text{S}} = 45\\,000\\times 1.12\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(45\\,000\\times 1.12 = 50\\,400\\). So Year 2 wages are \\(\\$50\\,400\\).",
        "workingOut": "\\(T_2^{\\text{S}} = 50\\,400\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\$50\\,400\\). Check: 12% of 45 000 is 5400, and \\(45\\,000 + 5\\,400 = 50\\,400\\).",
        "workingOut": "\\(\\$50\\,400\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\$45\\,000\\)",
      "\\(\\$50\\,400\\)",
      "\\(\\$54\\,000\\)",
      "\\(\\$56\\,448\\)"
    ],
    "options": [
      {
        "text": "\\(\\$45\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$50\\,400\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$54\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$56\\,448\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q10b3",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 100,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).\nFind Sophia's wages in Year 3, correct to the nearest dollar.",
    "hint": "Use \\(T_3=ar^{2}\\) or multiply Year 2 by 1.12.",
    "solution": "The correct answer is \\(\\$56\\,448\\).",
    "solutionSteps": [
      {
        "explanation": "Given: Sophia GP with \\(a = 45\\,000\\), \\(r = 1.12\\). Why two multiplications for Year 3? From Year 1 to Year 3 there are two growth steps, so \\(T_3 = ar^{2}\\). Strategy: either multiply Year 2 by 1.12 again, or use the general term. A common slip is using exponent 3 instead of 2.",
        "workingOut": "\\(T_3^{\\text{S}} = 45\\,000\\times (1.12)^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "From Year 2: \\(T_3 = 50\\,400\\times 1.12\\). Compute \\(50\\,400\\times 1.12 = 50\\,400\\times 1 + 50\\,400\\times 0.12 = 50\\,400 + 6\\,048 = 56\\,448\\). This is already a whole number of dollars, so no further rounding is needed.",
        "workingOut": "\\(T_3^{\\text{S}} = 56\\,448\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\$56\\,448\\). Context: Sophia's third-year wage after two successive 12% increases.",
        "workingOut": "\\(\\$56\\,448\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\$50\\,400\\)",
      "\\(\\$55\\,000\\)",
      "\\(\\$56\\,448\\)",
      "\\(\\$60\\,480\\)"
    ],
    "options": [
      {
        "text": "\\(\\$50\\,400\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$55\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$56\\,448\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$60\\,480\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q10b4",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).\nWhy do Sophia's wages form a geometric sequence?",
    "hint": "Geometric means a constant ratio between consecutive terms.",
    "solution": "The correct answer is Each year the wage is multiplied by the constant factor 1.12.",
    "solutionSteps": [
      {
        "explanation": "Given: Sophia receives a 12% increase each year. Why GP rather than AP? Geometric sequences multiply by a constant ratio; arithmetic sequences add a constant difference. Strategy: express the yearly change as a multiplicative factor. A common slip is saying the increase is \"\\$5400 each year\" — that is only true for the first increase; later 12% increases grow with the salary.",
        "workingOut": "\\(\\dfrac{T_{n+1}^{\\text{S}}}{T_n^{\\text{S}}} = ?\\)",
        "graphData": null
      },
      {
        "explanation": "A 12% increase means the new wage is 112% of the old wage, so\\[\\dfrac{T_{n+1}^{\\text{S}}}{T_n^{\\text{S}}} = 1.12\\]for every year. A constant successive ratio is the definition of a geometric sequence with common ratio \\(r = 1.12\\).",
        "workingOut": "\\(r = 1.12\\ \\text{(constant)}\\ \\Rightarrow\\ \\text{GP}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: each year the wage is multiplied by the constant factor 1.12. That is why Sophia's wages form a GP (while Oliver's form an AP).",
        "workingOut": "\\text{constant ratio } r=1.12\\ \\Rightarrow\\ \\text{GP}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Each year the wage increases by a constant amount of \\(\\$6\\,000\\)",
      "Each year the wage is multiplied by the constant factor 1.12",
      "The wage increases by \\(\\$5\\,400\\) every year",
      "The wage is halved every year"
    ],
    "options": [
      {
        "text": "Each year the wage increases by a constant amount of \\(\\$6\\,000\\)",
        "imageUrl": null
      },
      {
        "text": "Each year the wage is multiplied by the constant factor 1.12",
        "imageUrl": null
      },
      {
        "text": "The wage increases by \\(\\$5\\,400\\) every year",
        "imageUrl": null
      },
      {
        "text": "The wage is halved every year",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q10c",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).\nFind the first year in which Sophia's annual wage is greater than Oliver's. State the year number as an integer.",
    "hint": "Compare \\(55000+6000(n-1)\\) with \\(45000\\times 1.12^{n-1}\\) at n=7 and n=8.",
    "solution": "The correct answer is \\(8\\).",
    "solutionSteps": [
      {
        "explanation": "Given: Oliver \\(T_n^{\\text{O}} = 55\\,000 + 6\\,000(n-1)\\) (AP) and Sophia \\(T_n^{\\text{S}} = 45\\,000\\times(1.12)^{n-1}\\) (GP). Why compare year by year? The GP grows multiplicatively and will eventually overtake the linear AP; we need the smallest integer \\(n\\) with \\(T_n^{\\text{S}} > T_n^{\\text{O}}\\). Strategy: evaluate both at nearby years until the inequality flips. A common slip is solving continuous inequalities without checking the integer boundary carefully.",
        "workingOut": "\\(T_n^{\\text{O}} = 55\\,000 + 6\\,000(n-1),\\quad T_n^{\\text{S}} = 45\\,000(1.12)^{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Try \\(n = 7\\):\\[T_7^{\\text{O}} = 55\\,000 + 6\\,000\\times 6 = 91\\,000,\\]\\[T_7^{\\text{S}} = 45\\,000\\times(1.12)^{6} \\approx 45\\,000\\times 1.9738 \\approx 88\\,822.\\]Still \\(T_7^{\\text{S}} < T_7^{\\text{O}}\\), so Year 7 is not yet the crossover.",
        "workingOut": "\\(T_7^{\\text{S}} \\approx 88\\,822 < 91\\,000 = T_7^{\\text{O}}\\)",
        "graphData": null
      },
      {
        "explanation": "Try \\(n = 8\\):\\[T_8^{\\text{O}} = 55\\,000 + 6\\,000\\times 7 = 97\\,000,\\]\\[T_8^{\\text{S}} = 45\\,000\\times(1.12)^{7} \\approx 45\\,000\\times 2.2107 \\approx 99\\,481.\\]Now \\(T_8^{\\text{S}} > T_8^{\\text{O}}\\). Since Year 7 failed and Year 8 succeeds, Year 8 is the first such year.",
        "workingOut": "\\(T_8^{\\text{S}} \\approx 99\\,481 > 97\\,000 = T_8^{\\text{O}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Year 8. Context: Sophia first earns more annually than Oliver in their eighth year of work.",
        "workingOut": "\\(8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(6\\)",
      "\\(7\\)",
      "\\(8\\)",
      "\\(9\\)"
    ],
    "options": [
      {
        "text": "\\(6\\)",
        "imageUrl": null
      },
      {
        "text": "\\(7\\)",
        "imageUrl": null
      },
      {
        "text": "\\(8\\)",
        "imageUrl": null
      },
      {
        "text": "\\(9\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q10d",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).\nIn the first year that Sophia earns more than Oliver (Year 8), find the difference in their wages, correct to the nearest dollar.",
    "hint": "Compute both Year-8 wages, subtract, and round to the nearest dollar.",
    "solution": "The correct answer is \\(\\$2\\,481\\).",
    "solutionSteps": [
      {
        "explanation": "Given: from the previous part, the first crossover year is Year 8. Why compute both wages again? The difference needs accurate Year-8 figures, then absolute difference rounded to the nearest dollar. Strategy: evaluate Oliver exactly and Sophia with the GP formula, subtract, then round. A common slip is rounding intermediate powers too early, which can shift the final dollar.",
        "workingOut": "\\(\\text{Diff} = \\bigl|T_8^{\\text{S}} - T_8^{\\text{O}}\\bigr|\\)",
        "graphData": null
      },
      {
        "explanation": "Oliver Year 8: \\(T_8^{\\text{O}} = 55\\,000 + 6\\,000\\times 7 = 97\\,000\\) exactly. Sophia Year 8: \\(T_8^{\\text{S}} = 45\\,000\\times(1.12)^{7}\\). Using \\((1.12)^{7} \\approx 2.210681407\\),\\[T_8^{\\text{S}} \\approx 45\\,000\\times 2.210681407 = 99\\,480.663.\\]",
        "workingOut": "\\(T_8^{\\text{O}} = 97\\,000,\\quad T_8^{\\text{S}} \\approx 99\\,480.66\\)",
        "graphData": null
      },
      {
        "explanation": "Difference: \\(99\\,480.66 - 97\\,000 = 2\\,480.66\\). Rounding to the nearest dollar: 2 480.66 rounds to 2 481 because the decimal part 0.66 is at least 0.5.",
        "workingOut": "\\(2\\,480.66 \\rightarrow 2\\,481\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\$2\\,481\\). Context: in Year 8 Sophia earns about two and a half thousand dollars more than Oliver that year.",
        "workingOut": "\\(\\$2\\,481\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\$1\\,481\\)",
      "\\(\\$2\\,480\\)",
      "\\(\\$2\\,481\\)",
      "\\(\\$2\\,981\\)"
    ],
    "options": [
      {
        "text": "\\(\\$1\\,481\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$2\\,480\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$2\\,481\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\$2\\,981\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q11ai",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "An initial salary of \\( \\$60000 \\) increases by \\( \\$4000 \\) each year. Find a simplified formula for \\(T_n\\), the salary in the \\(n\\)th year.",
    "hint": "Use \\(T_n = a+(n-1)d\\) with \\(a=60000\\) and \\(d=4000\\), then simplify.",
    "solution": "The correct answer is \\(T_n = 4000n + 56000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: starting salary \\( \\$60000 \\) and a fixed annual increase of \\( \\$4000 \\). Why is this an arithmetic sequence? Each year a constant amount is added, so the common difference is constant. Strategy: use the AP general-term formula \\(T_n = a + (n-1)d\\) with \\(a = 60000\\) and \\(d = 4000\\), then expand and simplify. A common slip is writing \\(T_n = a + nd\\) (using \\(n\\) steps instead of \\(n-1\\)).",
        "workingOut": "\\(a = 60000,\\quad d = 4000\\)",
        "graphData": null
      },
      {
        "explanation": "What formula? The \\(n\\)th term of an AP is\\[T_n = a + (n-1)d.\\]Substitute the known values:\\[T_n = 60000 + (n-1)\\times 4000.\\]Why keep \\((n-1)\\) visible first? Expanding too early is how the off-by-one error creeps in. This expression is expanded next.",
        "workingOut": "\\(T_n = 60000 + (n-1)\\times 4000\\)",
        "graphData": null
      },
      {
        "explanation": "Expand: \\((n-1)\\times 4000 = 4000n - 4000\\). So\\[T_n = 60000 + 4000n - 4000 = 4000n + 56000.\\]Check at \\(n = 1\\): \\(T_1 = 4000 + 56000 = 60000\\), which matches the starting salary. A common wrong form is \\(60000 + 4000n\\), which gives \\(64000\\) already in Year 1.",
        "workingOut": "\\(T_n = 4000n + 56000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(T_n = 4000n + 56000\\). Context: this linear formula gives Oliver-style arithmetic wage growth year by year, and is used in the next part to find when the salary doubles.",
        "workingOut": "\\(T_n = 4000n + 56000\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(T_n = 4000n + 52000\\)",
      "\\(T_n = 4000n + 56000\\)",
      "\\(T_n = 60000 + 4000n\\)",
      "\\(T_n = 60000n + 4000\\)"
    ],
    "options": [
      {
        "text": "\\(T_n = 4000n + 52000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(T_n = 4000n + 56000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(T_n = 60000 + 4000n\\)",
        "imageUrl": null
      },
      {
        "text": "\\(T_n = 60000n + 4000\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q11aii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "An initial salary of \\( \\$60000 \\) increases by \\( \\$4000 \\) each year, so \\(T_n = 4000n + 56000\\). In which year will the salary first be at least twice the original salary? State the year as an integer.",
    "hint": "Solve \\(4000n+56000 \\ge 120000\\) and check n=15 and n=16.",
    "solution": "The correct answer is \\(16\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(T_n = 4000n + 56000\\) and original salary \\( \\$60000 \\). Twice the original is \\( \\$120000 \\). Why an inequality? We need the first year when the wage is at least double, so solve \\(T_n \\ge 120000\\) for the smallest integer \\(n\\). Strategy: substitute the formula, solve, then check the boundary year. A common slip is solving equality only and forgetting to confirm the previous year is still below the target.",
        "workingOut": "\\(T_n \\ge 2\\times 60000 = 120000\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute:\\[4000n + 56000 \\ge 120000.\\]Subtract 56000 from both sides:\\[4000n \\ge 64000.\\]Divide by 4000:\\[n \\ge 16.\\]So any year number from 16 onwards works; the first is 16. Why divide carefully? Dividing an inequality by a positive number keeps the direction of the inequality.",
        "workingOut": "\\(4000n \\ge 64000 \\;\\Rightarrow\\; n \\ge 16\\)",
        "graphData": null
      },
      {
        "explanation": "Boundary check: Year 15 gives\\[T_{15} = 4000\\times 15 + 56000 = 60000 + 56000 = 116000 < 120000.\\]Year 16 gives\\[T_{16} = 4000\\times 16 + 56000 = 64000 + 56000 = 120000,\\]which meets the target exactly. So 16 is the first such year.",
        "workingOut": "\\(T_{15} = 116000 < 120000,\\quad T_{16} = 120000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Year 16. Context: after 15 years of \\( \\$4000 \\) raises the salary is still under double, and it first reaches exactly double in Year 16.",
        "workingOut": "\\(16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(15\\)",
      "\\(16\\)",
      "\\(17\\)",
      "\\(20\\)"
    ],
    "options": [
      {
        "text": "\\(15\\)",
        "imageUrl": null
      },
      {
        "text": "\\(16\\)",
        "imageUrl": null
      },
      {
        "text": "\\(17\\)",
        "imageUrl": null
      },
      {
        "text": "\\(20\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q11b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "An initial salary of \\( \\$60000 \\) increases by \\(5\\%\\) each year. What will the salary be in the tenth year, correct to the nearest dollar?",
    "hint": "Use \\(T_n=ar^{n-1}\\) with \\(r=1.05\\) and \\(n=10\\). Exponent is 9.",
    "solution": "The correct answer is \\( \\$93080 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: starting salary \\(a = 60000\\) and a 5% increase each year. Why a geometric sequence? Each year the wage is multiplied by the constant factor \\(1.05\\), so the common ratio is \\(r = 1.05\\). Strategy: use the GP term formula \\(T_n = ar^{n-1}\\) with \\(n = 10\\), then round to the nearest dollar. A common slip is using exponent 10 instead of 9 (that would be after ten increases, i.e. Year 11 if Year 1 is the start).",
        "workingOut": "\\(a = 60000,\\quad r = 1.05,\\quad n = 10\\)",
        "graphData": null
      },
      {
        "explanation": "What formula? For a GP,\\[T_n = ar^{n-1}.\\]For the tenth year there are nine growth steps after Year 1:\\[T_{10} = 60000 \\times (1.05)^{9}.\\]Why 9? Year 1 is the starting amount; Years 2 through 10 each apply one more factor of 1.05.",
        "workingOut": "\\(T_{10} = 60000 \\times (1.05)^{9}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the power: \\((1.05)^{9} \\approx 1.5513282\\). Then\\[T_{10} \\approx 60000 \\times 1.5513282 = 93079.69.\\]Round to the nearest dollar: 0.69 is at least 0.5, so round up to 93080. A common slip is truncating to 93079 instead of rounding.",
        "workingOut": "\\(T_{10} \\approx 93079.69 \\rightarrow 93080\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\( \\$93080 \\). Context: this is the tenth-year salary under 5% compound growth. (For comparison, the linear \\( \\$4000 \\) model gives \\(T_{10} = 96000\\) at these particular numbers, so the better growth model depends on the rate and the year considered.)",
        "workingOut": "\\( \\$93080 \\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\( \\$90000 \\)",
      "\\( \\$93080 \\)",
      "\\( \\$97734 \\)",
      "\\( \\$100000 \\)"
    ],
    "options": [
      {
        "text": "\\( \\$90000 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$93080 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$97734 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$100000 \\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q12ai",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A farmhand fills a row of feed troughs from a silo. The distance from the silo to the first trough is \\(8\\) m, and adjacent troughs are \\(4\\) m apart. He carries enough grain for one trough at a time and returns to the silo after each trough.\nHow far does he walk to fill the 1st trough and return to the silo?",
    "hint": "Round trip: twice the distance from silo to T1.",
    "solution": "The correct answer is \\(16\\ \\text{m}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: silo to first trough is \\(8\\) m; he returns to the silo after filling. Why a round trip? He walks out with grain and back empty (or for the next load), so the distance for one trough is twice the one-way distance. Strategy: compute one-way to T1, then double it. A common slip is reporting only the one-way distance \\(8\\) m.",
        "workingOut": "\\(\\text{one-way to T1} = 8\\ \\text{m}\\)",
        "graphData": null
      },
      {
        "explanation": "What we compute: round-trip distance\\[D_1 = 2 \\times 8 = 16\\ \\text{m}.\\]The diagram shows the silo-to-T1 segment labelled \\(8\\) m; both legs of the journey use that same path.",
        "workingOut": "\\(D_1 = 2 \\times 8 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(16\\) m. Context: this is the walking distance for filling trough 1 only, and it will be the first term of the arithmetic sequence of round-trip distances.",
        "workingOut": "\\(16\\ \\text{m}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(8\\ \\text{m}\\)",
      "\\(12\\ \\text{m}\\)",
      "\\(16\\ \\text{m}\\)",
      "\\(20\\ \\text{m}\\)"
    ],
    "options": [
      {
        "text": "\\(8\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(12\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(16\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(20\\ \\text{m}\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "questionImage": "data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20520%20220%22%20width%3D%22520%22%20height%3D%22220%22%20role%3D%22img%22%20aria-label%3D%22Silo%20and%20feed%20troughs%20diagram%22%3E%0A%20%20%3Crect%20width%3D%22520%22%20height%3D%22220%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20ground%20line%20--%3E%0A%20%20%3Cline%20x1%3D%2240%22%20y1%3D%22150%22%20x2%3D%22480%22%20y2%3D%22150%22%20stroke%3D%22%231e293b%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3C!--%20SILO%20--%3E%0A%20%20%3Crect%20x%3D%2250%22%20y%3D%2255%22%20width%3D%2244%22%20height%3D%2295%22%20fill%3D%22%23f1f5f9%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Ctext%20x%3D%2272%22%20y%3D%2248%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2214%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ESILO%3C%2Ftext%3E%0A%20%20%3C!--%20trough%20helper%3A%20V%20shape%20--%3E%0A%20%20%3C!--%20T1%20--%3E%0A%20%20%3Cpath%20d%3D%22M198%20150%20L210%20128%20L222%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22210%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET1%3C%2Ftext%3E%0A%20%20%3C!--%20T2%20--%3E%0A%20%20%3Cpath%20d%3D%22M298%20150%20L310%20128%20L322%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22310%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET2%3C%2Ftext%3E%0A%20%20%3C!--%20T3%20--%3E%0A%20%20%3Cpath%20d%3D%22M398%20150%20L410%20128%20L422%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22410%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET3%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20silo%20right%20edge%20(94)%20to%20T1%20(210)%20%3D%208%20m%20--%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22188%22%20x2%3D%22210%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22182%22%20x2%3D%2294%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22182%22%20x2%3D%22210%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22152%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E8%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T1%20to%20T2%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22188%22%20x2%3D%22310%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22182%22%20x2%3D%22310%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22260%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T2%20to%20T3%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22188%22%20x2%3D%22410%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22410%22%20y1%3D%22182%22%20x2%3D%22410%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22360%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "y12a-8a-q12aii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "A farmhand fills a row of feed troughs from a silo. The distance from the silo to the first trough is \\(8\\) m, and adjacent troughs are \\(4\\) m apart. He carries enough grain for one trough at a time and returns to the silo after each trough.\nHow far does he walk to fill the 2nd trough and return to the silo?",
    "hint": "One-way is \\(8+4=12\\) m; double for return.",
    "solution": "The correct answer is \\(24\\ \\text{m}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: silo to T1 is \\(8\\) m and troughs are \\(4\\) m apart. Why add one more gap for T2? To reach the second trough he walks past T1 and on another \\(4\\) m. Strategy: one-way distance to T2, then double for the return. A common slip is using \\(8 + 4 + 4\\) (as if going to T3) or forgetting to double.",
        "workingOut": "\\(\\text{one-way to T2} = 8 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "One-way: \\(8 + 4 = 12\\) m. Round trip:\\[D_2 = 2 \\times 12 = 24\\ \\text{m}.\\]Check the pattern: \\(D_1 = 16\\), \\(D_2 = 24\\), so the round trips increase by \\(8\\) m each time (twice the trough spacing).",
        "workingOut": "\\(D_2 = 2 \\times 12 = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(24\\) m. Context: walking out to T2 and back to the silo once.",
        "workingOut": "\\(24\\ \\text{m}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(16\\ \\text{m}\\)",
      "\\(20\\ \\text{m}\\)",
      "\\(24\\ \\text{m}\\)",
      "\\(28\\ \\text{m}\\)"
    ],
    "options": [
      {
        "text": "\\(16\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(20\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(24\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(28\\ \\text{m}\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "questionImage": "data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20520%20220%22%20width%3D%22520%22%20height%3D%22220%22%20role%3D%22img%22%20aria-label%3D%22Silo%20and%20feed%20troughs%20diagram%22%3E%0A%20%20%3Crect%20width%3D%22520%22%20height%3D%22220%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20ground%20line%20--%3E%0A%20%20%3Cline%20x1%3D%2240%22%20y1%3D%22150%22%20x2%3D%22480%22%20y2%3D%22150%22%20stroke%3D%22%231e293b%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3C!--%20SILO%20--%3E%0A%20%20%3Crect%20x%3D%2250%22%20y%3D%2255%22%20width%3D%2244%22%20height%3D%2295%22%20fill%3D%22%23f1f5f9%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Ctext%20x%3D%2272%22%20y%3D%2248%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2214%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ESILO%3C%2Ftext%3E%0A%20%20%3C!--%20trough%20helper%3A%20V%20shape%20--%3E%0A%20%20%3C!--%20T1%20--%3E%0A%20%20%3Cpath%20d%3D%22M198%20150%20L210%20128%20L222%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22210%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET1%3C%2Ftext%3E%0A%20%20%3C!--%20T2%20--%3E%0A%20%20%3Cpath%20d%3D%22M298%20150%20L310%20128%20L322%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22310%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET2%3C%2Ftext%3E%0A%20%20%3C!--%20T3%20--%3E%0A%20%20%3Cpath%20d%3D%22M398%20150%20L410%20128%20L422%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22410%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET3%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20silo%20right%20edge%20(94)%20to%20T1%20(210)%20%3D%208%20m%20--%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22188%22%20x2%3D%22210%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22182%22%20x2%3D%2294%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22182%22%20x2%3D%22210%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22152%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E8%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T1%20to%20T2%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22188%22%20x2%3D%22310%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22182%22%20x2%3D%22310%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22260%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T2%20to%20T3%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22188%22%20x2%3D%22410%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22410%22%20y1%3D%22182%22%20x2%3D%22410%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22360%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "y12a-8a-q12aiii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "A farmhand fills a row of feed troughs from a silo. The distance from the silo to the first trough is \\(8\\) m, and adjacent troughs are \\(4\\) m apart. He carries enough grain for one trough at a time and returns to the silo after each trough.\nHow far does he walk to fill the 3rd trough and return to the silo?",
    "hint": "One-way is \\(8+4+4=16\\) m; double for return.",
    "solution": "The correct answer is \\(32\\ \\text{m}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: silo–T1 is \\(8\\) m and each further trough adds \\(4\\) m. For T3 there are two gaps after T1. Strategy: one-way \\(= 8 + 4 + 4\\), then double. A common slip is counting only one gap after T1.",
        "workingOut": "\\(\\text{one-way to T3} = 8 + 4 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "One-way: \\(8 + 4 + 4 = 16\\) m. Round trip:\\[D_3 = 2 \\times 16 = 32\\ \\text{m}.\\]Sequence so far: \\(16,\\ 24,\\ 32\\) — an AP with common difference \\(8\\).",
        "workingOut": "\\(D_3 = 2 \\times 16 = 32\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(32\\) m. Context: one complete silo–T3–silo journey.",
        "workingOut": "\\(32\\ \\text{m}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(24\\ \\text{m}\\)",
      "\\(28\\ \\text{m}\\)",
      "\\(32\\ \\text{m}\\)",
      "\\(36\\ \\text{m}\\)"
    ],
    "options": [
      {
        "text": "\\(24\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(28\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(32\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(36\\ \\text{m}\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "questionImage": "data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20520%20220%22%20width%3D%22520%22%20height%3D%22220%22%20role%3D%22img%22%20aria-label%3D%22Silo%20and%20feed%20troughs%20diagram%22%3E%0A%20%20%3Crect%20width%3D%22520%22%20height%3D%22220%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20ground%20line%20--%3E%0A%20%20%3Cline%20x1%3D%2240%22%20y1%3D%22150%22%20x2%3D%22480%22%20y2%3D%22150%22%20stroke%3D%22%231e293b%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3C!--%20SILO%20--%3E%0A%20%20%3Crect%20x%3D%2250%22%20y%3D%2255%22%20width%3D%2244%22%20height%3D%2295%22%20fill%3D%22%23f1f5f9%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Ctext%20x%3D%2272%22%20y%3D%2248%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2214%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ESILO%3C%2Ftext%3E%0A%20%20%3C!--%20trough%20helper%3A%20V%20shape%20--%3E%0A%20%20%3C!--%20T1%20--%3E%0A%20%20%3Cpath%20d%3D%22M198%20150%20L210%20128%20L222%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22210%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET1%3C%2Ftext%3E%0A%20%20%3C!--%20T2%20--%3E%0A%20%20%3Cpath%20d%3D%22M298%20150%20L310%20128%20L322%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22310%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET2%3C%2Ftext%3E%0A%20%20%3C!--%20T3%20--%3E%0A%20%20%3Cpath%20d%3D%22M398%20150%20L410%20128%20L422%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22410%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET3%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20silo%20right%20edge%20(94)%20to%20T1%20(210)%20%3D%208%20m%20--%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22188%22%20x2%3D%22210%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22182%22%20x2%3D%2294%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22182%22%20x2%3D%22210%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22152%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E8%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T1%20to%20T2%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22188%22%20x2%3D%22310%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22182%22%20x2%3D%22310%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22260%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T2%20to%20T3%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22188%22%20x2%3D%22410%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22410%22%20y1%3D%22182%22%20x2%3D%22410%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22360%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "y12a-8a-q12b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "A farmhand fills a row of feed troughs from a silo. The distance from the silo to the first trough is \\(8\\) m, and adjacent troughs are \\(4\\) m apart. He carries enough grain for one trough at a time and returns to the silo after each trough.\nHow far will the farmhand walk to fill the \\(n\\)th trough and return to the silo? Give a simplified expression in terms of \\(n\\).",
    "hint": "One-way: \\(8+4(n-1)\\). Round trip: multiply by 2.",
    "solution": "The correct answer is \\(8n + 8\\).",
    "solutionSteps": [
      {
        "explanation": "Given: silo to T1 is \\(8\\) m; adjacent troughs are \\(4\\) m apart; each fill is a round trip. Why a formula in \\(n\\)? Parts (a) suggest the distances form a pattern; generalising gives every trough at once. Strategy: write one-way distance to the \\(n\\)th trough as an AP term, then double. A common slip is forgetting the factor of 2 for the return trip (that yields \\(4n+4\\), a frequent wrong option).",
        "workingOut": "\\(\\text{one-way to trough } n = 8 + 4(n-1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the one-way distance:\\[8 + 4(n-1) = 8 + 4n - 4 = 4n + 4.\\]This is the AP with first term 8 and common difference 4. It matches \\(n=1 \\rightarrow 8\\), \\(n=2 \\rightarrow 12\\), \\(n=3 \\rightarrow 16\\).",
        "workingOut": "\\(\\text{one-way} = 4n + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Round trip doubles the one-way path:\\[D_n = 2(4n + 4) = 8n + 8.\\]Check: \\(n=1 \\rightarrow 16\\), \\(n=2 \\rightarrow 24\\), \\(n=3 \\rightarrow 32\\), matching part (a).",
        "workingOut": "\\(D_n = 8n + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(8n + 8\\) (metres). Context: walking distance for a single silo–\\(n\\)th trough–silo trip. Equivalent form \\(8(n+1)\\) is the same value, but the options use \\(8n+8\\).",
        "workingOut": "\\(8n + 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(4n + 4\\)",
      "\\(8n + 8\\)",
      "\\(8n - 8\\)",
      "\\(4n + 8\\)"
    ],
    "options": [
      {
        "text": "\\(4n + 4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(8n + 8\\)",
        "imageUrl": null
      },
      {
        "text": "\\(8n - 8\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4n + 8\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1",
    "questionImage": "data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20520%20220%22%20width%3D%22520%22%20height%3D%22220%22%20role%3D%22img%22%20aria-label%3D%22Silo%20and%20feed%20troughs%20diagram%22%3E%0A%20%20%3Crect%20width%3D%22520%22%20height%3D%22220%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20ground%20line%20--%3E%0A%20%20%3Cline%20x1%3D%2240%22%20y1%3D%22150%22%20x2%3D%22480%22%20y2%3D%22150%22%20stroke%3D%22%231e293b%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3C!--%20SILO%20--%3E%0A%20%20%3Crect%20x%3D%2250%22%20y%3D%2255%22%20width%3D%2244%22%20height%3D%2295%22%20fill%3D%22%23f1f5f9%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Ctext%20x%3D%2272%22%20y%3D%2248%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2214%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ESILO%3C%2Ftext%3E%0A%20%20%3C!--%20trough%20helper%3A%20V%20shape%20--%3E%0A%20%20%3C!--%20T1%20--%3E%0A%20%20%3Cpath%20d%3D%22M198%20150%20L210%20128%20L222%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22210%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET1%3C%2Ftext%3E%0A%20%20%3C!--%20T2%20--%3E%0A%20%20%3Cpath%20d%3D%22M298%20150%20L310%20128%20L322%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22310%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET2%3C%2Ftext%3E%0A%20%20%3C!--%20T3%20--%3E%0A%20%20%3Cpath%20d%3D%22M398%20150%20L410%20128%20L422%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22410%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET3%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20silo%20right%20edge%20(94)%20to%20T1%20(210)%20%3D%208%20m%20--%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22188%22%20x2%3D%22210%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22182%22%20x2%3D%2294%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22182%22%20x2%3D%22210%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22152%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E8%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T1%20to%20T2%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22188%22%20x2%3D%22310%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22182%22%20x2%3D%22310%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22260%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T2%20to%20T3%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22188%22%20x2%3D%22410%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22410%22%20y1%3D%22182%22%20x2%3D%22410%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22360%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "y12a-8a-q12ci",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A farmhand fills a row of feed troughs from a silo. The distance from the silo to the first trough is \\(8\\) m, and adjacent troughs are \\(4\\) m apart. He carries enough grain for one trough at a time and returns to the silo after each trough.\nThe round-trip distance to fill the furthest trough is \\(72\\) m. Using \\(D_n = 8n + 8\\), how many feed troughs are there?",
    "hint": "Solve \\(8n+8=72\\) for \\(n\\).",
    "solution": "The correct answer is \\(8\\).",
    "solutionSteps": [
      {
        "explanation": "Given: furthest trough has round-trip distance \\(72\\) m, and from part (b) \\(D_n = 8n + 8\\). Why set equal to 72? The furthest trough is trough number \\(n\\) (total number of troughs), so its round trip is the last term of the sequence. Strategy: solve \\(8n + 8 = 72\\) for positive integer \\(n\\). A common slip is solving \\(8n = 72\\) and getting \\(n = 9\\) (forgetting the \\(+8\\)).",
        "workingOut": "\\(8n + 8 = 72\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract 8: \\(8n = 64\\). Divide by 8: \\(n = 8\\). So there are 8 troughs. Check: \\(D_8 = 8\\times 8 + 8 = 64 + 8 = 72\\) m, as required.",
        "workingOut": "\\(8n = 64 \\;\\Rightarrow\\; n = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(8\\) troughs. Context: the row has eight feed troughs if the longest single round trip is 72 m.",
        "workingOut": "\\(8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(6\\)",
      "\\(7\\)",
      "\\(8\\)",
      "\\(9\\)"
    ],
    "options": [
      {
        "text": "\\(6\\)",
        "imageUrl": null
      },
      {
        "text": "\\(7\\)",
        "imageUrl": null
      },
      {
        "text": "\\(8\\)",
        "imageUrl": null
      },
      {
        "text": "\\(9\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "questionImage": "data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20520%20220%22%20width%3D%22520%22%20height%3D%22220%22%20role%3D%22img%22%20aria-label%3D%22Silo%20and%20feed%20troughs%20diagram%22%3E%0A%20%20%3Crect%20width%3D%22520%22%20height%3D%22220%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20ground%20line%20--%3E%0A%20%20%3Cline%20x1%3D%2240%22%20y1%3D%22150%22%20x2%3D%22480%22%20y2%3D%22150%22%20stroke%3D%22%231e293b%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3C!--%20SILO%20--%3E%0A%20%20%3Crect%20x%3D%2250%22%20y%3D%2255%22%20width%3D%2244%22%20height%3D%2295%22%20fill%3D%22%23f1f5f9%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Ctext%20x%3D%2272%22%20y%3D%2248%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2214%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ESILO%3C%2Ftext%3E%0A%20%20%3C!--%20trough%20helper%3A%20V%20shape%20--%3E%0A%20%20%3C!--%20T1%20--%3E%0A%20%20%3Cpath%20d%3D%22M198%20150%20L210%20128%20L222%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22210%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET1%3C%2Ftext%3E%0A%20%20%3C!--%20T2%20--%3E%0A%20%20%3Cpath%20d%3D%22M298%20150%20L310%20128%20L322%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22310%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET2%3C%2Ftext%3E%0A%20%20%3C!--%20T3%20--%3E%0A%20%20%3Cpath%20d%3D%22M398%20150%20L410%20128%20L422%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22410%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET3%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20silo%20right%20edge%20(94)%20to%20T1%20(210)%20%3D%208%20m%20--%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22188%22%20x2%3D%22210%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22182%22%20x2%3D%2294%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22182%22%20x2%3D%22210%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22152%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E8%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T1%20to%20T2%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22188%22%20x2%3D%22310%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22182%22%20x2%3D%22310%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22260%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T2%20to%20T3%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22188%22%20x2%3D%22410%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22410%22%20y1%3D%22182%22%20x2%3D%22410%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22360%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "y12a-8a-q12cii",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "A farmhand fills a row of feed troughs from a silo. The distance from the silo to the first trough is \\(8\\) m, and adjacent troughs are \\(4\\) m apart. He carries enough grain for one trough at a time and returns to the silo after each trough.\nThere are \\(8\\) troughs and the round-trip distances form the AP \\(16,\\ 24,\\ 32,\\ \\dots,\\ 72\\). What is the total distance he walks to fill all the troughs?",
    "hint": "Use \\(S_n=\\frac12 n(a+l)\\) with a=16, l=72, n=8.",
    "solution": "The correct answer is \\(352\\ \\text{m}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: eight round trips forming an AP with first term \\(a = 16\\), last term \\(l = 72\\), and \\(n = 8\\) terms. Why a sum? Total walking distance is the sum of every individual trough trip (he fills each trough once and returns each time). Strategy: use the AP sum formula \\(S_n = \\dfrac{1}{2}n(a+l)\\). A common slip is multiplying only the last trip by 8, or summing one-way distances instead of round trips.",
        "workingOut": "\\(a = 16,\\quad l = 72,\\quad n = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum formula:\\[S_8 = \\dfrac{1}{2}\\times 8\\times(16 + 72) = 4 \\times 88.\\]Why this form? When first and last terms are known, \\(\\dfrac{1}{2}n(a+l)\\) is the quickest exact sum.",
        "workingOut": "\\(S_8 = 4 \\times 88\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(4 \\times 88 = 352\\). Alternative check: sum of \\(D_k = 8k + 8\\) for \\(k = 1\\) to \\(8\\):\\[S_8 = 8\\sum_{k=1}^{8} k + 8\\times 8 = 8\\times\\dfrac{8\\times 9}{2} + 64 = 8\\times 36 + 64 = 288 + 64 = 352.\\]",
        "workingOut": "\\(S_8 = 352\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(352\\) m. Context: total distance walked to fill all eight troughs, one load at a time with returns to the silo.",
        "workingOut": "\\(352\\ \\text{m}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(288\\ \\text{m}\\)",
      "\\(320\\ \\text{m}\\)",
      "\\(352\\ \\text{m}\\)",
      "\\(400\\ \\text{m}\\)"
    ],
    "options": [
      {
        "text": "\\(288\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(320\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(352\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(400\\ \\text{m}\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "questionImage": "data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20520%20220%22%20width%3D%22520%22%20height%3D%22220%22%20role%3D%22img%22%20aria-label%3D%22Silo%20and%20feed%20troughs%20diagram%22%3E%0A%20%20%3Crect%20width%3D%22520%22%20height%3D%22220%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20ground%20line%20--%3E%0A%20%20%3Cline%20x1%3D%2240%22%20y1%3D%22150%22%20x2%3D%22480%22%20y2%3D%22150%22%20stroke%3D%22%231e293b%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3C!--%20SILO%20--%3E%0A%20%20%3Crect%20x%3D%2250%22%20y%3D%2255%22%20width%3D%2244%22%20height%3D%2295%22%20fill%3D%22%23f1f5f9%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Ctext%20x%3D%2272%22%20y%3D%2248%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2214%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ESILO%3C%2Ftext%3E%0A%20%20%3C!--%20trough%20helper%3A%20V%20shape%20--%3E%0A%20%20%3C!--%20T1%20--%3E%0A%20%20%3Cpath%20d%3D%22M198%20150%20L210%20128%20L222%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22210%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET1%3C%2Ftext%3E%0A%20%20%3C!--%20T2%20--%3E%0A%20%20%3Cpath%20d%3D%22M298%20150%20L310%20128%20L322%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22310%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET2%3C%2Ftext%3E%0A%20%20%3C!--%20T3%20--%3E%0A%20%20%3Cpath%20d%3D%22M398%20150%20L410%20128%20L422%20150%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22410%22%20y%3D%22172%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2213%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3ET3%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20silo%20right%20edge%20(94)%20to%20T1%20(210)%20%3D%208%20m%20--%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22188%22%20x2%3D%22210%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%2294%22%20y1%3D%22182%22%20x2%3D%2294%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22182%22%20x2%3D%22210%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22152%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E8%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T1%20to%20T2%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22210%22%20y1%3D%22188%22%20x2%3D%22310%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22182%22%20x2%3D%22310%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22260%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%20%20%3C!--%20dimension%3A%20T2%20to%20T3%20%3D%204%20m%20--%3E%0A%20%20%3Cline%20x1%3D%22310%22%20y1%3D%22188%22%20x2%3D%22410%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22410%22%20y1%3D%22182%22%20x2%3D%22410%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22360%22%20y%3D%22206%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3E4%20m%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "y12a-8a-q13a",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "One Sunday, 150 days before Christmas, a store publishes an advertisement saying \"150 shopping days until Christmas\". Similar advertisements are then published every Sunday until Christmas.\n\nHow many times does the store advertise?",
    "hint": "The numbers on the ads form an AP: first term 150, common difference -7. Find the last term, then find n.",
    "solution": "The correct answer is \\(22\\).",
    "solutionSteps": [
      {
        "explanation": "This is an applications-of-APs problem. The store prints a countdown number each Sunday. The first number is 150, and every week that countdown drops by exactly 7 days. So the sequence of printed numbers is an arithmetic progression (AP) with first term \\(a = 150\\) and common difference \\(d = -7\\):\n\\[150,\\ 143,\\ 136,\\ 129,\\ \\dots\\]\nWhy start here? Once we know \\(a\\) and \\(d\\), the AP term formula gives every later ad, and counting the terms answers \"how many advertisements\". A common slip is treating this as a GP (multiplying by a ratio) — the change each week is a fixed subtraction of 7, not a percentage, so it is an AP, not a GP.",
        "workingOut": "\\(a = 150,\\quad d = -7\\)",
        "graphData": null
      },
      {
        "explanation": "Write the general term of the AP using the standard formula\\[T_n = a + (n-1)d.\\]Substitute \\(a = 150\\) and \\(d = -7\\):\\[T_n = 150 + (n-1)(-7) = 150 - 7(n-1).\\]Why this formula? \\(T_n\\) is the number printed on the \\(n\\)th Sunday advertisement. The next step is to find which value of \\(T_n\\) belongs to the final Sunday before Christmas.",
        "workingOut": "\\(T_n = 150 - 7(n-1)\\)",
        "graphData": null
      },
      {
        "explanation": "Find the last term. Christmas is 150 days after the first Sunday ad. Divide by the weekly step of 7:\\[150 = 21\\times 7 + 3.\\]So after 21 full weeks the next Sunday is still 3 days before Christmas. That Sunday still gets an advertisement reading \"3 shopping days until Christmas\". Therefore the last term of the AP is\\[l = T_n = 3.\\]A common slip is taking the last term as 0 or 7, or assuming Christmas itself is a Sunday (it is not, because the remainder is 3, not 0).",
        "workingOut": "\\(l = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the number of terms \\(n\\) by setting the general term equal to the last term:\\[150 - 7(n-1) = 3.\\]Rearrange:\\[7(n-1) = 147 \\quad\\Rightarrow\\quad n-1 = 21 \\quad\\Rightarrow\\quad n = 22.\\]So there are 22 terms in the AP, meaning the store advertises on 22 Sundays. Check: the number of 7-day steps between first and last ad is 21, so the number of ads is one more than the number of steps: \\(21 + 1 = 22\\). A common wrong answer is 21 (counting only the intervals between ads).",
        "workingOut": "\\(150 - 7(n-1) = 3 \\;\\Rightarrow\\; n = 22\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(22\\) advertisements. Context: this is the number of terms of the arithmetic sequence of weekly shopping-day countdowns from 150 down to 3. (This is AP work only — no geometric growth is involved in part (a).)",
        "workingOut": "\\(22\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(20\\)",
      "\\(21\\)",
      "\\(22\\)",
      "\\(23\\)"
    ],
    "options": [
      {
        "text": "\\(20\\)",
        "imageUrl": null
      },
      {
        "text": "\\(21\\)",
        "imageUrl": null
      },
      {
        "text": "\\(22\\)",
        "imageUrl": null
      },
      {
        "text": "\\(23\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q13b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "One Sunday, 150 days before Christmas, a store publishes an advertisement saying \"150 shopping days until Christmas\". The store then publishes similar advertisements every Sunday until Christmas.\nThe published numbers form the AP \\(150,\\ 143,\\ \\dots,\\ 3\\) with 22 terms. Find the sum of the numbers of days published in all the advertisements.",
    "hint": "Use \\(S_n=\\frac12 n(a+l)\\) with n=22, a=150, l=3.",
    "solution": "The correct answer is \\(1683\\).",
    "solutionSteps": [
      {
        "explanation": "Given: from part (a), there are \\(n = 22\\) advertisements, first term \\(a = 150\\), last term \\(l = 3\\). Why a sum? The question asks for the total of all the numbers that appeared in the ads (150 + 143 + … + 3). Strategy: use the AP sum formula \\(S_n = \\dfrac{1}{2}n(a+l)\\). A common slip is using only the first term, or averaging incorrectly as \\(\\dfrac{a+l}{2}\\) without multiplying by \\(n\\).",
        "workingOut": "\\(n = 22,\\quad a = 150,\\quad l = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the sum formula:\\[S_{22} = \\dfrac{1}{2}\\times 22\\times(150 + 3) = 11\\times 153.\\]Why this form? First and last terms are known, so the average of the ends times the number of terms is exact for an AP.",
        "workingOut": "\\(S_{22} = 11\\times 153\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(11\\times 153 = 11\\times 150 + 11\\times 3 = 1650 + 33 = 1683\\).",
        "workingOut": "\\(S_{22} = 1683\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1683\\). Context: the sum of all the \"shopping days\" figures printed across the 22 Sunday advertisements.",
        "workingOut": "\\(1683\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(1530\\)",
      "\\(1650\\)",
      "\\(1683\\)",
      "\\(1716\\)"
    ],
    "options": [
      {
        "text": "\\(1530\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1650\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1683\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1716\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q13c",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "One Sunday, 150 days before Christmas, a store publishes an advertisement saying \"150 shopping days until Christmas\". Similar advertisements are then published every Sunday until Christmas.\n\nThe numbers printed form the arithmetic progression \\(150,\\ 143,\\ 136,\\ \\dots\\) with common difference \\(d = -7\\). The last term of this AP is \\(3\\) (the last Sunday ad reads \"3 shopping days until Christmas\").\n\nOn which day of the week is Christmas?",
    "hint": "The last ad is on a Sunday and equals the last term l = 3 of the AP. Count 3 days forward from that Sunday.",
    "solution": "The correct answer is Wednesday.",
    "solutionSteps": [
      {
        "explanation": "This part continues the AP model from the weekly advertisements. Recall the applications-of-APs setup: the printed shopping-day counts form an arithmetic progression with first term \\(a = 150\\) and common difference \\(d = -7\\) (one week between Sunday ads). From earlier work the last term is\\[l = 3,\\]so the final advertisement is published on a Sunday and reads \"3 shopping days until Christmas\". Why start from that last AP term? The last term tells us exactly how many days remain from that final Sunday until Christmas — it is the bridge from the sequence to the calendar. A common slip is forgetting that this last term sits on a Sunday (every term of the AP is a Sunday ad).",
        "workingOut": "\\(a = 150,\\quad d = -7,\\quad l = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Connect the AP last term to the calendar. The last term \\(l = 3\\) means: on that final advertising Sunday there are exactly 3 days left until Christmas. So Christmas is 3 calendar days after that Sunday. Why not use a GP here? The weekly change is a fixed difference of \\(-7\\) days, not a constant ratio, so the model is an AP throughout — part (c) only interprets the last AP term on the week-day calendar. A common slip is counting Sunday as day 1 of the three days (that would land on Tuesday).",
        "workingOut": "\\(l = 3 \\;\\Rightarrow\\; \\text{Sunday is 3 days before Christmas}\\)",
        "graphData": null
      },
      {
        "explanation": "Count three days forward from Sunday using the week-day order:\\[\\begin{align*}\\text{Sunday} + 1 &= \\text{Monday},\\\\ \\text{Sunday} + 2 &= \\text{Tuesday},\\\\ \\text{Sunday} + 3 &= \\text{Wednesday}.\\end{align*}\\]Therefore Christmas falls on Wednesday. Equivalent AP check: the total span from the first Sunday ad to Christmas is 150 days, and\\[150 = 21\\times 7 + 3,\\]so after an integer number of full weeks (which preserve the day of the week) the remaining 3 days shift Sunday by three places to Wednesday. That remainder 3 is exactly the last term of the AP.",
        "workingOut": "\\(\\text{Sunday} + 3\\ \\text{days} = \\text{Wednesday}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Wednesday. Context: in this AP application, the last term \\(l = 3\\) is not only the final printed number — it is also the number of days from the last Sunday advertisement to Christmas, which fixes the day of the week as Wednesday.",
        "workingOut": "\\text{Wednesday}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "options": [
      {
        "text": "Monday",
        "imageUrl": null
      },
      {
        "text": "Tuesday",
        "imageUrl": null
      },
      {
        "text": "Wednesday",
        "imageUrl": null
      },
      {
        "text": "Thursday",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q14a",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The number of active users on a platform rose from \\(20000\\) on 1 January to \\(180000\\) on 1 March. If the number of active users increased by a constant difference each month, what was the number of active users on 1 February?",
    "hint": "Constant difference ⇒ AP. Middle term is the arithmetic mean: (T1+T3)/2.",
    "solution": "The correct answer is \\(100000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: users on 1 January = \\(20000\\), users on 1 March = \\(180000\\), and the monthly increase is a constant difference. Why is this an arithmetic progression (AP)? A constant difference each month means consecutive terms differ by a fixed common difference \\(d\\). Label the months as terms of an AP:\\[T_1 = 20000 \\quad (\\text{1 January}),\\quad T_2 = ? \\quad (\\text{1 February}),\\quad T_3 = 180000 \\quad (\\text{1 March}).\\]Strategy: use the AP relationship between three consecutive terms. A common slip is treating this as a GP (constant ratio) and taking a geometric mean instead.",
        "workingOut": "\\(T_1 = 20000,\\quad T_3 = 180000\\)",
        "graphData": null
      },
      {
        "explanation": "What property of an AP do we use? In an AP the middle term of three consecutive terms is the arithmetic mean of the other two:\\[T_2 = \\dfrac{T_1 + T_3}{2}.\\]Why? Because \\(T_2 - T_1 = T_3 - T_2 = d\\), so \\(2T_2 = T_1 + T_3\\). This is the standard AP middle-term rule and is the fastest path to February's figure.",
        "workingOut": "\\(T_2 = \\dfrac{T_1 + T_3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the known values:\\[T_2 = \\dfrac{20000 + 180000}{2} = \\dfrac{200000}{2} = 100000.\\]Check with the common difference: \\(d = T_2 - T_1 = 100000 - 20000 = 80000\\), and \\(T_3 = T_2 + d = 100000 + 80000 = 180000\\), which matches March. A common slip is adding only half the total growth from January to March incorrectly, or using the geometric mean \\(\\sqrt{T_1 T_3} = 60000\\) (that is the GP case in part (b)).",
        "workingOut": "\\(T_2 = 100000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(100000\\) active users on 1 February. Context: under linear (arithmetic) monthly growth, February sits exactly halfway in value between January and March.",
        "workingOut": "\\(100000\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(60000\\)",
      "\\(80000\\)",
      "\\(100000\\)",
      "\\(120000\\)"
    ],
    "options": [
      {
        "text": "\\(60000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(80000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(100000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(120000\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q14b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "The number of active users on a platform rose from \\(20000\\) on 1 January to \\(180000\\) on 1 March. If the number of active users increased by a constant ratio each month, what was the number of active users on 1 February?",
    "hint": "Constant ratio ⇒ GP. Middle term is the geometric mean: √(T1×T3).",
    "solution": "The correct answer is \\(60000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the same endpoints \\(T_1 = 20000\\) (1 January) and \\(T_3 = 180000\\) (1 March), but now the monthly increase is a constant ratio. Why is this a geometric progression (GP)? A constant ratio means each month multiplies the previous total by the same common ratio \\(r\\). Strategy: find the middle term of three consecutive GP terms. A common slip is reusing the arithmetic mean from part (a) and answering \\(100000\\).",
        "workingOut": "\\(T_1 = 20000,\\quad T_3 = 180000\\)",
        "graphData": null
      },
      {
        "explanation": "What property of a GP do we use? For three consecutive terms of a GP, the middle term is the geometric mean of the other two:\\[T_2 = \\sqrt{T_1 \\times T_3}\\](taking the positive root, since a user count is positive). Why? Because \\(T_2 / T_1 = T_3 / T_2 = r\\), so \\(T_2^{2} = T_1 T_3\\). Alternatively, find \\(r\\) from \\(T_3 = T_1 r^{2}\\).",
        "workingOut": "\\(T_2 = \\sqrt{T_1 \\times T_3}\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the product and square root:\\[T_1 \\times T_3 = 20000 \\times 180000 = 3600000000,\\]\\[T_2 = \\sqrt{3600000000} = 60000.\\]Check via the common ratio: \\(r^{2} = T_3 / T_1 = 180000 / 20000 = 9\\), so \\(r = 3\\) (positive). Then \\(T_2 = T_1 r = 20000 \\times 3 = 60000\\), which matches. A common slip is taking \\(r = 9\\) or using the arithmetic mean \\(100000\\).",
        "workingOut": "\\(T_2 = 60000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(60000\\) active users on 1 February. Context: under geometric monthly growth the February figure is the geometric mean of January and March — lower than the linear AP value of \\(100000\\) from part (a), which illustrates how AP and GP models differ for the same endpoints.",
        "workingOut": "\\(60000\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(40000\\)",
      "\\(60000\\)",
      "\\(90000\\)",
      "\\(100000\\)"
    ],
    "options": [
      {
        "text": "\\(40000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(60000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(90000\\)",
        "imageUrl": null
      },
      {
        "text": "\\(100000\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q15a",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Daniel earns \\( \\$70000 \\) in his first year of work, and his salary increases each year by a fixed amount \\( \\$D \\). His annual salaries therefore form an arithmetic progression with first term \\(a = 70000\\) and common difference \\(d = D\\).\nFind \\(D\\) if his salary in his tenth year is \\( \\$115000 \\).",
    "hint": "Use \\(T_{10}=a+9D=115000\\) and solve for \\(D\\).",
    "solution": "The correct answer is \\( \\$5000 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: first-year salary \\(a = 70000\\) and a fixed annual increase \\(D\\). Why an AP? A fixed dollar increase each year is a constant common difference, so the yearly salaries form an arithmetic progression with \\(T_n = a + (n-1)d\\) and \\(d = D\\). Strategy: write the tenth-year term, set it equal to 115000, and solve for \\(D\\). A common slip is using 10 steps instead of 9 (that is, writing \\(a + 10D\\) for Year 10).",
        "workingOut": "\\(T_n = 70000 + (n-1)D\\)",
        "graphData": null
      },
      {
        "explanation": "For Year 10, substitute \\(n = 10\\):\\[T_{10} = 70000 + 9D.\\]Set this equal to the given tenth-year salary:\\[70000 + 9D = 115000.\\]Why 9 increments? From Year 1 to Year 10 there are nine annual raises.",
        "workingOut": "\\(70000 + 9D = 115000\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract 70000: \\(9D = 45000\\). Divide by 9: \\(D = 5000\\). Check: \\(T_{10} = 70000 + 9\\times 5000 = 70000 + 45000 = 115000\\). A common slip is dividing 45000 by 10 and getting 4500.",
        "workingOut": "\\(D = 5000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(D = \\$5000\\). Context: each year Daniel's salary rises by five thousand dollars under this arithmetic salary model.",
        "workingOut": "\\( \\$5000 \\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\( \\$4000 \\)",
      "\\( \\$4500 \\)",
      "\\( \\$5000 \\)",
      "\\( \\$5500 \\)"
    ],
    "options": [
      {
        "text": "\\( \\$4000 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$4500 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$5000 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$5500 \\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q15b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Daniel earns \\( \\$70000 \\) in his first year of work, and his salary increases each year by a fixed amount \\( \\$D \\). His annual salaries therefore form an arithmetic progression with first term \\(a = 70000\\) and common difference \\(d = D\\).\nFind \\(D\\) if his total earnings over the first ten years are \\( \\$970000 \\).",
    "hint": "Use \\(S_{10}=\\frac{10}{2}(2a+9D)=970000\\).",
    "solution": "The correct answer is \\( \\$6000 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: the same AP of annual salaries with \\(a = 70000\\) and \\(d = D\\), but now the total over ten years is 970000. Why a sum formula? Total earnings means the sum of the first 10 terms of the AP, not a single term. Strategy: use\\[S_n = \\dfrac{n}{2}\\bigl(2a + (n-1)d\\bigr)\\]with \\(n = 10\\), set \\(S_{10} = 970000\\), and solve for \\(D\\). A common slip is using the term formula \\(T_{10}\\) instead of the sum.",
        "workingOut": "\\(S_n = \\dfrac{n}{2}\\bigl(2a + (n-1)D\\bigr)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(n = 10\\) and \\(a = 70000\\):\\[S_{10} = \\dfrac{10}{2}\\bigl(2\\times 70000 + 9D\\bigr) = 5(140000 + 9D).\\]Set equal to total earnings:\\[5(140000 + 9D) = 970000.\\]",
        "workingOut": "\\(5(140000 + 9D) = 970000\\)",
        "graphData": null
      },
      {
        "explanation": "Divide both sides by 5: \\(140000 + 9D = 194000\\). Subtract 140000: \\(9D = 54000\\). Divide by 9: \\(D = 6000\\). Check: \\(S_{10} = 5(140000 + 54000) = 5\\times 194000 = 970000\\). Note this \\(D\\) differs from part (a) — different given conditions produce different annual increments.",
        "workingOut": "\\(D = 6000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(D = \\$6000\\). Context: if the ten-year total is 970000, the constant annual raise in this AP salary model is six thousand dollars.",
        "workingOut": "\\( \\$6000 \\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\( \\$5000 \\)",
      "\\( \\$5500 \\)",
      "\\( \\$6000 \\)",
      "\\( \\$6500 \\)"
    ],
    "options": [
      {
        "text": "\\( \\$5000 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$5500 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$6000 \\)",
        "imageUrl": null
      },
      {
        "text": "\\( \\$6500 \\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q15c",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Daniel earns \\( \\$70000 \\) in his first year of work, and his salary increases each year by a fixed amount \\( \\$D \\). His annual salaries therefore form an arithmetic progression with first term \\(a = 70000\\) and common difference \\(d = D\\).\nIf \\(D = 5000\\), in which year will his salary first exceed \\( \\$130000 \\)?",
    "hint": "Solve \\(70000+5000(n-1)>130000\\). Check n=13 and n=14.",
    "solution": "The correct answer is \\(14\\).",
    "solutionSteps": [
      {
        "explanation": "Given: AP salaries with \\(a = 70000\\) and \\(d = 5000\\). We need the smallest integer year \\(n\\) such that the annual salary exceeds 130000. Why an inequality? \"First exceed\" means strictly greater than 130000, then take the least integer \\(n\\). Strategy: solve\\[T_n = 70000 + (n-1)\\times 5000 > 130000\\]and check the boundary years. A common slip is using \\(\\ge\\) and accepting Year 13 when \\(T_{13} = 130000\\) exactly (that does not exceed).",
        "workingOut": "\\(T_n = 70000 + 5000(n-1) > 130000\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract 70000: \\(5000(n-1) > 60000\\). Divide by 5000: \\(n-1 > 12\\), so \\(n > 13\\). The smallest integer year is therefore \\(n = 14\\).",
        "workingOut": "\\(n-1 > 12 \\;\\Rightarrow\\; n > 13\\)",
        "graphData": null
      },
      {
        "explanation": "Boundary check: Year 13 gives\\[T_{13} = 70000 + 12\\times 5000 = 70000 + 60000 = 130000,\\]which does not exceed 130000. Year 14 gives\\[T_{14} = 70000 + 13\\times 5000 = 70000 + 65000 = 135000 > 130000.\\]So 14 is the first year the salary exceeds 130000.",
        "workingOut": "\\(T_{13} = 130000,\\quad T_{14} = 135000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Year 14. Context: under a \\( \\$5000 \\) annual raise, Daniel's yearly pay first goes above 130000 in his fourteenth year of work.",
        "workingOut": "\\(14\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(12\\)",
      "\\(13\\)",
      "\\(14\\)",
      "\\(15\\)"
    ],
    "options": [
      {
        "text": "\\(12\\)",
        "imageUrl": null
      },
      {
        "text": "\\(13\\)",
        "imageUrl": null
      },
      {
        "text": "\\(14\\)",
        "imageUrl": null
      },
      {
        "text": "\\(15\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q15d",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Daniel earns \\( \\$70000 \\) in his first year of work, and his salary increases each year by a fixed amount \\( \\$D \\). His annual salaries therefore form an arithmetic progression with first term \\(a = 70000\\) and common difference \\(d = D\\).\nIf \\(D = 4000\\), during which year do his total earnings first exceed \\( \\$1300000 \\)?",
    "hint": "Form S_n, then show S_13 < 1300000 < S_14.",
    "solution": "The correct answer is \\(14\\).",
    "solutionSteps": [
      {
        "explanation": "Given: AP salaries with \\(a = 70000\\) and \\(d = 4000\\). Total earnings after \\(n\\) years means the AP sum \\(S_n\\). Why compare consecutive sums? \"First exceed during the 14th year\" means \\(S_{13} \\le 1300000 < S_{14}\\) (or strictly \\(S_{13} < 1300000 < S_{14}\\)). Strategy: form \\(S_n\\), evaluate at \\(n = 13\\) and \\(n = 14\\). A common slip is checking the annual salary \\(T_n\\) instead of the cumulative total \\(S_n\\).",
        "workingOut": "\\(S_n = \\dfrac{n}{2}\\bigl(2\\times 70000 + (n-1)\\times 4000\\bigr)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the sum formula:\\[S_n = \\dfrac{n}{2}\\bigl(140000 + 4000n - 4000\\bigr) = \\dfrac{n}{2}(136000 + 4000n) = n(68000 + 2000n) = 2000n^{2} + 68000n.\\]This quadratic in \\(n\\) is the closed form for total earnings under the \\( \\$4000 \\) annual raise.",
        "workingOut": "\\(S_n = 2000n^{2} + 68000n\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate Year 13 total:\\[S_{13} = 2000(13)^{2} + 68000(13) = 2000\\times 169 + 68000\\times 13 = 338000 + 884000 = 1222000.\\]Since \\(1222000 < 1300000\\), after 13 years he has not yet exceeded 1.3 million.",
        "workingOut": "\\(S_{13} = 1222000 < 1300000\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate Year 14 total:\\[S_{14} = 2000(14)^{2} + 68000(14) = 2000\\times 196 + 68000\\times 14 = 392000 + 952000 = 1344000.\\]Now \\(1344000 > 1300000\\). Combined with \\(S_{13} < 1300000\\), the cumulative total first crosses 1.3 million during the 14th year (when the 14th year's salary is added).",
        "workingOut": "\\(S_{14} = 1344000 > 1300000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Year 14. Context: with a \\( \\$4000 \\) annual raise, Daniel's lifetime earnings first pass \\( \\$1300000 \\) in the course of his fourteenth working year.",
        "workingOut": "\\(14\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(12\\)",
      "\\(13\\)",
      "\\(14\\)",
      "\\(15\\)"
    ],
    "options": [
      {
        "text": "\\(12\\)",
        "imageUrl": null
      },
      {
        "text": "\\(13\\)",
        "imageUrl": null
      },
      {
        "text": "\\(14\\)",
        "imageUrl": null
      },
      {
        "text": "\\(15\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q16a1",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "A line of cones is used in a fitness test. John starts at the first cone, runs \\(32\\) m to the last cone and back, then runs \\(16\\) m to the third cone and back, then runs \\(8\\) m to the second cone and back. Each listed distance is the one-way leg; the distance travelled on a run is the round trip (out and back).\nWrite down the distances (in metres) that John travels on each of the three runs, in order.",
    "hint": "Each run is a round trip: double 32, 16 and 8.",
    "solution": "The correct answer is \\(64,\\ 32,\\ 16\\).",
    "solutionSteps": [
      {
        "explanation": "Given: three one-way legs of \\(32\\) m, \\(16\\) m and \\(8\\) m, and each run is out and back. Why double each leg? The distance travelled on a run is the round-trip distance. Strategy: multiply each one-way distance by 2 to get the sequence of run lengths. A common slip is listing the one-way legs \\(32,\\ 16,\\ 8\\) without doubling.",
        "workingOut": "\\(\\text{run distance} = 2 \\times (\\text{one-way})\\)",
        "graphData": null
      },
      {
        "explanation": "Compute each run:\\[d_1 = 2\\times 32 = 64,\\quad d_2 = 2\\times 16 = 32,\\quad d_3 = 2\\times 8 = 16.\\]So the distances John travels are \\(64,\\ 32,\\ 16\\) metres. These three numbers will be treated as terms of a sequence in the next parts.",
        "workingOut": "\\(d_1 = 64,\\quad d_2 = 32,\\quad d_3 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(64,\\ 32,\\ 16\\). Context: three successive fitness runs, each a round trip, forming a geometric pattern of total distances.",
        "workingOut": "\\(64,\\ 32,\\ 16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(32,\\ 16,\\ 8\\)",
      "\\(64,\\ 32,\\ 16\\)",
      "\\(32,\\ 48,\\ 56\\)",
      "\\(64,\\ 48,\\ 40\\)"
    ],
    "options": [
      {
        "text": "\\(32,\\ 16,\\ 8\\)",
        "imageUrl": null
      },
      {
        "text": "\\(64,\\ 32,\\ 16\\)",
        "imageUrl": null
      },
      {
        "text": "\\(32,\\ 48,\\ 56\\)",
        "imageUrl": null
      },
      {
        "text": "\\(64,\\ 48,\\ 40\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q16a2",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A line of cones is used in a fitness test. John starts at the first cone, runs \\(32\\) m to the last cone and back, then runs \\(16\\) m to the third cone and back, then runs \\(8\\) m to the second cone and back. Each listed distance is the one-way leg; the distance travelled on a run is the round trip (out and back).\nThe run distances are \\(64,\\ 32,\\ 16\\). Which calculation correctly shows that these distances form a geometric progression, and what is the common ratio?",
    "hint": "Divide consecutive terms: 32/64 and 16/32.",
    "solution": "The correct answer is \\(\\dfrac{32}{64} = \\dfrac{1}{2}\\) and \\(\\dfrac{16}{32} = \\dfrac{1}{2}\\), so \\(r = \\dfrac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: the sequence of run distances \\(64,\\ 32,\\ 16\\). Why test ratios? A geometric progression (GP) is defined by a constant common ratio between consecutive terms, whereas an AP uses a constant difference. Strategy: compute \\(\\dfrac{T_2}{T_1}\\) and \\(\\dfrac{T_3}{T_2}\\) and check they are equal. A common slip is subtracting consecutive terms and claiming an AP (the differences \\(-32\\) and \\(-16\\) are not constant).",
        "workingOut": "\\(T_1 = 64,\\quad T_2 = 32,\\quad T_3 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Compute successive ratios:\\[\\dfrac{T_2}{T_1} = \\dfrac{32}{64} = \\dfrac{1}{2},\\qquad \\dfrac{T_3}{T_2} = \\dfrac{16}{32} = \\dfrac{1}{2}.\\]The ratios are equal and constant, so the sequence is a GP with common ratio \\(r = \\dfrac{1}{2}\\). Why not \\(r = 2\\)? That would be the reciprocal direction (growing, not shrinking).",
        "workingOut": "\\(r = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: consecutive ratios both equal \\(\\dfrac{1}{2}\\), so the distances form a GP with \\(r = \\dfrac{1}{2}\\). Context: each run is half the distance of the previous run under this fitness pattern.",
        "workingOut": "\\(r = \\dfrac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{32}{64} = 2\\) and \\(\\dfrac{16}{32} = 2\\), so \\(r = 2\\)",
      "\\(\\dfrac{32}{64} = \\dfrac{1}{2}\\) and \\(\\dfrac{16}{32} = \\dfrac{1}{2}\\), so \\(r = \\dfrac{1}{2}\\)",
      "\\(32 - 64 = -32\\) and \\(16 - 32 = -16\\), so it is an AP with \\(d = -32\\)",
      "\\(\\dfrac{32}{64} = \\dfrac{1}{2}\\) but \\(\\dfrac{16}{32} = 2\\), so it is not a GP"
    ],
    "options": [
      {
        "text": "\\(\\dfrac{32}{64} = 2\\) and \\(\\dfrac{16}{32} = 2\\), so \\(r = 2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{32}{64} = \\dfrac{1}{2}\\) and \\(\\dfrac{16}{32} = \\dfrac{1}{2}\\), so \\(r = \\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(32 - 64 = -32\\) and \\(16 - 32 = -16\\), so it is an AP with \\(d = -32\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{32}{64} = \\dfrac{1}{2}\\) but \\(\\dfrac{16}{32} = 2\\), so it is not a GP",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q16a3",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "A line of cones is used in a fitness test. John starts at the first cone, runs \\(32\\) m to the last cone and back, then runs \\(16\\) m to the third cone and back, then runs \\(8\\) m to the second cone and back. Each listed length is one way; the distance travelled on a run is the round trip.\n\nThe distances travelled on successive runs form a geometric progression (GP). Write down the first term \\(a\\) of this GP.",
    "hint": "First find the distance of the first run (round trip), then that value is a of the GP.",
    "solution": "The correct answer is \\(64\\).",
    "solutionSteps": [
      {
        "explanation": "This is an applications-of-GPs problem. The fitness runs produce a sequence of total distances (each run is a round trip). Why start by finding the first run distance carefully? In a GP the first term \\(a\\) is the scale of the whole sequence: every later term is \\(a r^{n-1}\\), and the limiting sum (if it exists) is \\(\\dfrac{a}{1-r}\\). Strategy: compute the distance of the first run from the stem, then identify that value as \\(a\\). A common slip is taking the one-way leg \\(32\\) m as \\(a\\) instead of the round trip.",
        "workingOut": "\\(\\text{one-way first leg} = 32\\ \\text{m}\\)",
        "graphData": null
      },
      {
        "explanation": "What is the first term of the sequence of run distances? The first run is out and back over the \\(32\\) m leg, so\\[T_1 = 2\\times 32 = 64.\\]By definition of a GP, the first term is\\[a = T_1 = 64.\\](The later runs give \\(T_2 = 2\\times 16 = 32\\) and \\(T_3 = 2\\times 8 = 16\\), which confirm the sequence \\(64,\\ 32,\\ 16,\\ \\dots\\) used in other parts.)",
        "workingOut": "\\(a = T_1 = 2\\times 32 = 64\\)",
        "graphData": null
      },
      {
        "explanation": "Why is this a GP application rather than an AP? Consecutive run distances are multiplied by a constant ratio (halved each time), not increased by a constant difference. So we label parameters as for a GP: first term \\(a\\) and common ratio \\(r\\) (found separately as \\(r = \\dfrac{1}{2}\\)). Taking \\(a = 32\\) would be confusing the one-way distance with the term of the distance GP.",
        "workingOut": "\\(a = 64,\\quad (r = \\dfrac{1}{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(a = 64\\). Context: in this geometric model of successive fitness runs, the first term is 64 metres — the total distance of John's first out-and-back run. Later parts use this \\(a\\) in \\(T_n = ar^{n-1}\\) and in \\(S_{\\infty} = \\dfrac{a}{1-r}\\).",
        "workingOut": "\\(64\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(16\\)",
      "\\(32\\)",
      "\\(64\\)",
      "\\(128\\)"
    ],
    "options": [
      {
        "text": "\\(16\\)",
        "imageUrl": null
      },
      {
        "text": "\\(32\\)",
        "imageUrl": null
      },
      {
        "text": "\\(64\\)",
        "imageUrl": null
      },
      {
        "text": "\\(128\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q16a4",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A line of cones is used in a fitness test. John starts at the first cone, runs \\(32\\) m to the last cone and back, then runs \\(16\\) m to the third cone and back, then runs \\(8\\) m to the second cone and back. Each listed distance is the one-way leg; the distance travelled on a run is the round trip (out and back).\nThe run distances form the GP \\(64,\\ 32,\\ 16,\\ \\dots\\). Write down the common ratio \\(r\\).",
    "hint": "Divide the second term by the first: 32/64.",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: GP \\(64,\\ 32,\\ 16,\\ \\dots\\). Why find \\(r\\)? The common ratio controls every later term and decides whether an infinite total distance converges. Strategy: divide the second term by the first. A common slip is writing \\(r = 2\\) (the reciprocal) because the sequence is decreasing — decreasing means \\(0 < r < 1\\).",
        "workingOut": "\\(r = \\dfrac{T_2}{T_1}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(\\dfrac{32}{64} = \\dfrac{1}{2}\\). Check: \\(\\dfrac{16}{32} = \\dfrac{1}{2}\\). So \\(r = \\dfrac{1}{2}\\). Because \\(|r| < 1\\), a finite limiting sum will exist if the pattern continues forever.",
        "workingOut": "\\(r = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(r = \\dfrac{1}{2}\\). Context: each successive run is half as long as the previous one.",
        "workingOut": "\\(\\dfrac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(-\\dfrac{1}{2}\\)",
      "\\(1\\)"
    ],
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(-\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q16b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A line of cones is used in a fitness test. John starts at the first cone, runs \\(32\\) m to the last cone and back, then runs \\(16\\) m to the third cone and back, then runs \\(8\\) m to the second cone and back. Each listed distance is the one-way leg; the distance travelled on a run is the round trip (out and back).\nThe run distances form an infinite GP with first term \\(a = 64\\) and common ratio \\(r = \\dfrac{1}{2}\\). If more and more cones are added so the pattern continues forever, what total distance will John eventually travel?",
    "hint": "Use \\(S_\\infty=\\frac{a}{1-r}\\) with a=64 and r=1/2.",
    "solution": "The correct answer is \\(128\\ \\text{m}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: infinite GP of run distances with \\(a = 64\\) and \\(r = \\dfrac{1}{2}\\). Why a limiting sum? \"Eventually\" with infinitely many smaller runs means the sum of the infinite series \\(64 + 32 + 16 + \\cdots\\). Strategy: check the convergence condition \\(|r| < 1\\), then use\\[S_{\\infty} = \\dfrac{a}{1-r}.\\]A common slip is using the finite sum formula, or writing \\(1+r\\) in the denominator.",
        "workingOut": "\\(a = 64,\\quad r = \\dfrac{1}{2},\\quad |r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the infinite GP sum formula:\\[S_{\\infty} = \\dfrac{a}{1-r} = \\dfrac{64}{1 - \\dfrac{1}{2}} = \\dfrac{64}{\\dfrac{1}{2}} = 64\\times 2 = 128.\\]Why does this work? Because each remaining tail of the series is half the previous tail, the infinite total settles at a finite limit.",
        "workingOut": "\\(S_{\\infty} = 128\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(128\\) m. Context: even if the cone pattern continues forever, John's total running distance approaches 128 metres and never exceeds it.",
        "workingOut": "\\(128\\ \\text{m}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(96\\ \\text{m}\\)",
      "\\(112\\ \\text{m}\\)",
      "\\(128\\ \\text{m}\\)",
      "\\(256\\ \\text{m}\\)"
    ],
    "options": [
      {
        "text": "\\(96\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(112\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(128\\ \\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(256\\ \\text{m}\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q16c",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "A line of cones is used in a fitness test. John starts at the first cone, runs \\(32\\) m to the last cone and back, then runs \\(16\\) m to the third cone and back, then runs \\(8\\) m to the second cone and back. Each listed distance is the one-way leg; the distance travelled on a run is the round trip (out and back).\nStewart runs the original course in reverse, so his run distances form the sequence \\(16,\\ 32,\\ 64,\\ \\dots\\). Why does Stewart not want more and more cones to be added to continue his pattern forever?",
    "hint": "Reverse GP has r=2. Limiting sums need |r|<1.",
    "solution": "The correct answer is The reverse sequence is a GP with \\(r = 2\\) and \\(|r| \\ge 1\\), so there is no limiting sum (total distance would grow without bound).",
    "solutionSteps": [
      {
        "explanation": "Given: reverse order of the original runs gives distances \\(16,\\ 32,\\ 64,\\ \\dots\\). Why classify this sequence? Whether Stewart can keep adding cones forever depends on whether the infinite series of run distances converges. Strategy: find the common ratio and apply the GP convergence condition \\(|r| < 1\\). A common slip is reusing \\(r = \\dfrac{1}{2}\\) from John's original direction.",
        "workingOut": "\\(16,\\ 32,\\ 64,\\ \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the common ratio:\\[r = \\dfrac{32}{16} = 2,\\qquad \\dfrac{64}{32} = 2.\\]So the reverse distances form a GP with \\(r = 2\\). For an infinite GP to have a finite limiting sum we need \\(|r| < 1\\). Here \\(|r| = 2 \\ge 1\\), so the series diverges: partial sums grow without bound. There is no finite \"eventual total distance\".",
        "workingOut": "\\(r = 2,\\quad |r| \\ge 1 \\;\\Rightarrow\\; \\text{no } S_{\\infty}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: reverse runs form a GP with \\(r = 2\\), which has no limiting sum, so adding more cones would force Stewart toward an unbounded total distance. Context: same three starting runs as John, but the opposite direction turns a convergent fitness series into a divergent one.",
        "workingOut": "\\(r = 2\\ \\text{(diverges)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "The reverse sequence is an AP with \\(d = 16\\), so the total is finite",
      "The reverse sequence is a GP with \\(r = \\dfrac{1}{2}\\), so the limiting sum is only \\(32\\) m",
      "The reverse sequence is a GP with \\(r = 2\\) and \\(|r| \\ge 1\\), so there is no limiting sum (total distance would grow without bound)",
      "The reverse sequence is not a GP, so no series formula applies"
    ],
    "options": [
      {
        "text": "The reverse sequence is an AP with \\(d = 16\\), so the total is finite",
        "imageUrl": null
      },
      {
        "text": "The reverse sequence is a GP with \\(r = \\dfrac{1}{2}\\), so the limiting sum is only \\(32\\) m",
        "imageUrl": null
      },
      {
        "text": "The reverse sequence is a GP with \\(r = 2\\) and \\(|r| \\ge 1\\), so there is no limiting sum (total distance would grow without bound)",
        "imageUrl": null
      },
      {
        "text": "The reverse sequence is not a GP, so no series formula applies",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q17a",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "Sophia opens a boutique. Annual sales in successive years form a geometric progression (GP). Sales in the sixth year are two-thirds of the sales in the first year. Let the first year's sales be \\(S\\) dollars.\nFind, in exact form, the common ratio \\(r\\) of the GP.",
    "hint": "Use \\(T_6=Sr^{5}=\\frac{2}{3}S\\). Exponent is n-1=5.",
    "solution": "The correct answer is \\(\\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: yearly sales form a GP, first-year sales \\(a = S\\), and sixth-year sales are \\(\\dfrac{2}{3}\\) of the first year. Why a GP model? \"Successive years form a GP\" means each year multiplies the previous year's sales by a constant common ratio \\(r\\). This is geometric growth/decay of revenue, not an AP (which would add a fixed dollar amount each year). Strategy: write the sixth term using \\(T_n = ar^{n-1}\\), set it equal to \\(\\dfrac{2}{3}S\\), and solve for \\(r\\). A common slip is using exponent 6 instead of 5 in \\(T_6 = ar^{5}\\).",
        "workingOut": "\\(a = S,\\quad T_6 = \\dfrac{2}{3}S\\)",
        "graphData": null
      },
      {
        "explanation": "What formula? The general term of a GP is\\[T_n = ar^{n-1}.\\]For the sixth year, \\(n = 6\\), so there are five multiplications by \\(r\\) after Year 1:\\[T_6 = S\\, r^{5}.\\]Set this equal to the given sixth-year sales:\\[S\\, r^{5} = \\dfrac{2}{3}S.\\]Why cancel \\(S\\)? First-year sales are positive, so divide both sides by \\(S\\) without changing the equation.",
        "workingOut": "\\(S r^{5} = \\dfrac{2}{3}S\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by \\(S\\):\\[r^{5} = \\dfrac{2}{3}.\\]Take the real fifth root (sales ratios are positive, so we take the positive root):\\[r = \\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}.\\]Check the size: since \\(\\dfrac{2}{3} < 1\\), we have \\(0 < r < 1\\), so sales are decreasing geometrically each year — consistent with Year 6 being only two-thirds of Year 1. A common wrong answer is \\(\\left(\\dfrac{2}{3}\\right)^{1/6}\\) (off-by-one on the exponent) or simply \\(\\dfrac{2}{3}\\) (confusing \\(r\\) with \\(r^{5}\\)).",
        "workingOut": "\\(r = \\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(r = \\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}\\). Context: this exact common ratio is the geometric decay factor for annual boutique sales under the GP model, and it is needed next for the infinite total sales.",
        "workingOut": "\\(\\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\left(\\dfrac{2}{3}\\right)^{\\frac{1}{6}}\\)",
      "\\(\\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}\\)",
      "\\(\\dfrac{2}{3}\\)",
      "\\(\\left(\\dfrac{2}{3}\\right)^{5}\\)"
    ],
    "options": [
      {
        "text": "\\(\\left(\\dfrac{2}{3}\\right)^{\\frac{1}{6}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{2}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\left(\\dfrac{2}{3}\\right)^{5}\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-8a-q17b",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Sophia opens a boutique. Annual sales in successive years form a geometric progression (GP). Sales in the sixth year are two-thirds of the sales in the first year. Let the first year's sales be \\(S\\) dollars.\nThe common ratio is \\(r = \\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}\\). Find the total sales of the company as time goes on (the limiting sum of the GP), as a multiple of the first year's sales \\(S\\), correct to two decimal places.",
    "hint": "Compute 1/(1-r) with r=(2/3)^{1/5} ≈ 0.92211, then round to 2 d.p.",
    "solution": "The correct answer is \\(12.84\\).",
    "solutionSteps": [
      {
        "explanation": "Given: infinite sequence of annual sales forming a GP with first term \\(a = S\\) and common ratio\\[r = \\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}.\\]Why a limiting sum? \"Total sales as time goes on\" means the sum of all future yearly sales forever: \\(S + Sr + Sr^{2} + \\cdots\\). Strategy: check \\(|r| < 1\\) so the infinite GP converges, then use\\[S_{\\infty} = \\dfrac{a}{1-r}.\\]A common slip is using the finite sum formula, or forgetting that we want the answer as a multiple of \\(S\\) (i.e. compute \\(\\dfrac{S_{\\infty}}{S}\\)).",
        "workingOut": "\\(S_{\\infty} = \\dfrac{S}{1-r},\\quad |r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Because \\(0 < r < 1\\), a finite limiting sum exists. The multiple of first-year sales is\\[\\dfrac{S_{\\infty}}{S} = \\dfrac{1}{1-r} = \\dfrac{1}{1 - \\left(\\dfrac{2}{3}\\right)^{\\frac{1}{5}}}.\\]Evaluate the fifth root numerically:\\[r = \\left(\\dfrac{2}{3}\\right)^{0.2} \\approx 0.92211.\\]",
        "workingOut": "\\(r \\approx 0.92211\\)",
        "graphData": null
      },
      {
        "explanation": "Then\\[1 - r \\approx 1 - 0.92211 = 0.07789,\\]\\[\\dfrac{1}{1-r} \\approx \\dfrac{1}{0.07789} \\approx 12.838.\\]Round to two decimal places: 12.838 rounds to 12.84 (the third decimal is 8, so round the second decimal up from 3 to 4). A common slip is truncating to 12.83 or mis-rounding to 12.83/12.84 incorrectly.",
        "workingOut": "\\(\\dfrac{S_{\\infty}}{S} \\approx 12.84\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(12.84\\). Context: over all future years the boutique's total sales approach about 12.84 times the first year's sales under this geometric decay model. (An AP model would not apply here — sales change by a constant ratio each year, not a constant dollar difference.)",
        "workingOut": "\\(12.84\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(11.84\\)",
      "\\(12.34\\)",
      "\\(12.84\\)",
      "\\(13.34\\)"
    ],
    "options": [
      {
        "text": "\\(11.84\\)",
        "imageUrl": null
      },
      {
        "text": "\\(12.34\\)",
        "imageUrl": null
      },
      {
        "text": "\\(12.84\\)",
        "imageUrl": null
      },
      {
        "text": "\\(13.34\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-8a-q18",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 600,
    "question": "Limiting sums of trigonometric series (geometric progressions). Answer each part below.",
    "hint": "Each series is a GP. Use |r|<1 for convergence and S_∞ = a/(1-r).",
    "solution": "",
    "solutionSteps": [],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "subQuestions": [
      {
        "id": "y12a-8a-q18ai",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Consider the infinite series \\(1 + \\cos^{2} x + \\cos^{4} x + \\cos^{6} x + \\dots\\). Which statement correctly identifies this series as a geometric progression and gives its common ratio?",
        "hint": "Divide consecutive terms: cos²x / 1 = cos²x.",
        "opts": [
          "\\(\\text{GP with } r = \\cos x\\)",
          "\\(\\text{GP with } r = \\cos^{2} x\\)",
          "\\(\\text{AP with } d = \\cos^{2} x\\)",
          "\\(\\text{GP with } r = \\sin^{2} x\\)"
        ],
        "a": 1,
        "answer": "1",
        "solution": "The correct answer is \\(\\text{GP with } r = \\cos^{2} x\\).",
        "solutionSteps": [
          {
            "explanation": "Given: the series \\(1 + \\cos^{2} x + \\cos^{4} x + \\cos^{6} x + \\dots\\). Why test for a GP? Successive powers of the same trig expression suggest a constant multiplicative ratio, not a constant difference (so not an AP). Strategy: write the general term and compute the ratio of consecutive terms. A common slip is taking \\(r = \\cos x\\) instead of \\(\\cos^{2} x\\).",
            "workingOut": "\\(T_{1} = 1,\\quad T_{2} = \\cos^{2} x,\\quad T_{3} = \\cos^{4} x,\\quad \\dots\\)",
            "graphData": null
          },
          {
            "explanation": "The general term is \\(T_{n} = (\\cos^{2} x)^{n-1} = \\cos^{2(n-1)} x\\). The common ratio of a GP is\\[r = \\dfrac{T_{n+1}}{T_{n}} = \\dfrac{\\cos^{2n} x}{\\cos^{2(n-1)} x} = \\cos^{2} x,\\]provided the terms are defined. Check the first ratio: \\(\\dfrac{T_{2}}{T_{1}} = \\cos^{2} x\\). The ratio does not depend on \\(n\\), so it is constant.",
            "workingOut": "\\(r = \\cos^{2} x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: the series is a GP with first term \\(a = 1\\) and common ratio \\(r = \\cos^{2} x\\). Context: this is the standard GP setup used for infinite geometric series of powers of a fixed quantity.",
            "workingOut": "\\(a = 1,\\quad r = \\cos^{2} x\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q18aii",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "For the GP \\(1 + \\cos^{2} x + \\cos^{4} x + \\dots\\) with \\(r = \\cos^{2} x\\), for which angles in the domain \\(0 \\le x \\le 2\\pi\\) does the series not converge?",
        "hint": "Series fails when |r|≥1 i.e. cos²x = 1.",
        "opts": [
          "\\(\\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}\\)",
          "\\(0,\\ \\pi,\\ 2\\pi\\)",
          "\\(0,\\ \\dfrac{\\pi}{2},\\ \\pi\\)",
          "\\(\\pi,\\ 2\\pi\\)"
        ],
        "a": 1,
        "answer": "1",
        "solution": "The correct answer is \\(0,\\ \\pi,\\ 2\\pi\\).",
        "solutionSteps": [
          {
            "explanation": "Given: infinite GP with first term \\(a = 1\\) and common ratio \\(r = \\cos^{2} x\\). Why the condition \\(|r| < 1\\)? An infinite geometric series converges if and only if the absolute value of the common ratio is strictly less than 1. Strategy: find where \\(|\\cos^{2} x| \\ge 1\\) on \\([0, 2\\pi]\\). Since \\(0 \\le \\cos^{2} x \\le 1\\) always, the only failure is \\(\\cos^{2} x = 1\\).",
            "workingOut": "\\text{Need } |r| < 1 \\;\\Rightarrow\\; \\cos^{2} x < 1",
            "graphData": null
          },
          {
            "explanation": "Solve \\(\\cos^{2} x = 1\\): \\(\\cos x = \\pm 1\\). On \\([0, 2\\pi]\\):\\[x = 0,\\quad x = \\pi,\\quad x = 2\\pi.\\]At these angles \\(r = 1\\), so the series becomes \\(1 + 1 + 1 + \\dots\\), which diverges. A common slip is listing where \\(\\cos x = 0\\) (that is where the series collapses to 1, which still converges).",
            "workingOut": "\\(x = 0,\\ \\pi,\\ 2\\pi\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(0,\\ \\pi,\\ 2\\pi\\). Context: these are the only points in the given domain where the GP of cosine powers fails to have a limiting sum.",
            "workingOut": "\\(0,\\ \\pi,\\ 2\\pi\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q18aiii",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "For the GP \\(1 + \\cos^{2} x + \\cos^{4} x + \\dots\\) with \\(a = 1\\) and \\(r = \\cos^{2} x\\), when the series converges, which expression equals the limiting sum \\(S_{\\infty}\\)?",
        "hint": "S_∞ = 1/(1-cos²x) = 1/sin²x.",
        "opts": [
          "\\(\\sec^{2} x\\)",
          "\\(\\operatorname{cosec}^{2} x\\)",
          "\\(\\cot^{2} x\\)",
          "\\(\\dfrac{1}{1 + \\cos^{2} x}\\)"
        ],
        "a": 1,
        "answer": "1",
        "solution": "The correct answer is \\(\\operatorname{cosec}^{2} x\\).",
        "solutionSteps": [
          {
            "explanation": "Given: convergent infinite GP with \\(a = 1\\) and \\(r = \\cos^{2} x\\) (so \\(\\cos^{2} x < 1\\)). Why the limiting-sum formula? For a GP with \\(|r| < 1\\),\\[S_{\\infty} = \\dfrac{a}{1-r}.\\]Strategy: substitute \\(a\\) and \\(r\\), then simplify with a Pythagorean identity. A common slip is writing \\(1+r\\) in the denominator, or stopping before recognising cosec.",
            "workingOut": "\\(S_{\\infty} = \\dfrac{a}{1-r} = \\dfrac{1}{1 - \\cos^{2} x}\\)",
            "graphData": null
          },
          {
            "explanation": "Use the identity \\(1 - \\cos^{2} x = \\sin^{2} x\\):\\[S_{\\infty} = \\dfrac{1}{\\sin^{2} x} = \\operatorname{cosec}^{2} x.\\]This holds for all angles in the domain where the series converges (\\(\\sin x \\ne 0\\) is automatic when \\(\\cos^{2} x < 1\\) fails only at cos = ±1; when cos = 0 we have sin = ±1 and cosec² = 1, handled in the next part).",
            "workingOut": "\\(S_{\\infty} = \\operatorname{cosec}^{2} x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(\\operatorname{cosec}^{2} x\\). Context: the infinite sum of successive even powers of cosine collapses to cosec squared via the GP limiting-sum formula.",
            "workingOut": "\\(\\operatorname{cosec}^{2} x\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q18aiv",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "For the series \\(1 + \\cos^{2} x + \\cos^{4} x + \\dots\\), what happens when \\(\\cos x = 0\\)?",
        "hint": "If cos x = 0 then r = 0 and the series is 1+0+0+…",
        "opts": [
          "The series diverges",
          "The series sums to \\(1\\), and \\(\\operatorname{cosec}^{2} x = 1\\) also",
          "The series sums to \\(0\\)",
          "The common ratio becomes \\(1\\) so there is no limiting sum"
        ],
        "a": 1,
        "answer": "1",
        "solution": "The correct answer is The series sums to \\(1\\), and \\(\\operatorname{cosec}^{2} x = 1\\) also.",
        "solutionSteps": [
          {
            "explanation": "Given: \\(\\cos x = 0\\). Why a special case? Substituting into the series and into the limiting-sum formula checks consistency of the GP model at a boundary of the trig range. Strategy: write the series term-by-term, then evaluate \\(\\operatorname{cosec}^{2} x\\).",
            "workingOut": "\\(\\cos x = 0 \\;\\Rightarrow\\; r = \\cos^{2} x = 0\\)",
            "graphData": null
          },
          {
            "explanation": "With \\(r = 0\\) the series is\\[1 + 0 + 0 + 0 + \\dots = 1.\\]Also \\(\\sin x = \\pm 1\\), so\\[\\operatorname{cosec}^{2} x = \\dfrac{1}{\\sin^{2} x} = 1.\\]The direct sum and the GP formula agree. Note \\(|r| = 0 < 1\\), so the series does converge (unlike when \\(r = 1\\)).",
            "workingOut": "\\(1 + 0 + 0 + \\dots = 1 = \\operatorname{cosec}^{2} x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: the series sums to 1, matching \\(\\operatorname{cosec}^{2} x = 1\\). Context: a zero common ratio is a valid (and convergent) GP case.",
            "workingOut": "\\(S = 1\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q18bi",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Consider the infinite series \\(1 + \\sin^{2} x + \\sin^{4} x + \\sin^{6} x + \\dots\\). Which statement correctly identifies this series as a geometric progression and gives its common ratio?",
        "hint": "Divide consecutive terms: sin²x / 1 = sin²x.",
        "opts": [
          "\\(\\text{GP with } r = \\sin x\\)",
          "\\(\\text{GP with } r = \\sin^{2} x\\)",
          "\\(\\text{AP with } d = \\sin^{2} x\\)",
          "\\(\\text{GP with } r = \\cos^{2} x\\)"
        ],
        "a": 1,
        "answer": "1",
        "solution": "The correct answer is \\(\\text{GP with } r = \\sin^{2} x\\).",
        "solutionSteps": [
          {
            "explanation": "Given: \\(1 + \\sin^{2} x + \\sin^{4} x + \\sin^{6} x + \\dots\\). Why a GP? Each term is the previous term multiplied by \\(\\sin^{2} x\\). Strategy: form the ratio of consecutive terms. A common slip is writing \\(r = \\sin x\\) or confusing this with the cosine series from part (a).",
            "workingOut": "\\(T_{1} = 1,\\quad T_{2} = \\sin^{2} x,\\quad T_{3} = \\sin^{4} x,\\quad \\dots\\)",
            "graphData": null
          },
          {
            "explanation": "General term \\(T_{n} = (\\sin^{2} x)^{n-1}\\). Common ratio:\\[r = \\dfrac{T_{n+1}}{T_{n}} = \\sin^{2} x.\\]First ratio check: \\(\\dfrac{T_{2}}{T_{1}} = \\sin^{2} x\\). The ratio is independent of \\(n\\), so the series is a GP with \\(a = 1\\) and \\(r = \\sin^{2} x\\).",
            "workingOut": "\\(r = \\sin^{2} x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: GP with common ratio \\(r = \\sin^{2} x\\). Context: this mirrors part (a) with sine replacing cosine.",
            "workingOut": "\\(a = 1,\\quad r = \\sin^{2} x\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q18bii",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "For the GP \\(1 + \\sin^{2} x + \\sin^{4} x + \\dots\\) with \\(r = \\sin^{2} x\\), for which angles in the domain \\(0 \\le x \\le 2\\pi\\) does the series not converge?",
        "hint": "Fails when sin²x = 1.",
        "opts": [
          "\\(0,\\ \\pi,\\ 2\\pi\\)",
          "\\(\\dfrac{\\pi}{4},\\ \\dfrac{5\\pi}{4}\\)",
          "\\(\\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}\\)",
          "\\(0,\\ \\dfrac{\\pi}{2}\\)"
        ],
        "a": 2,
        "answer": "2",
        "solution": "The correct answer is \\(\\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}\\).",
        "solutionSteps": [
          {
            "explanation": "Given: infinite GP with \\(a = 1\\) and \\(r = \\sin^{2} x\\). Convergence requires \\(|r| < 1\\), i.e. \\(\\sin^{2} x < 1\\). Failure occurs when \\(\\sin^{2} x = 1\\).",
            "workingOut": "\\text{Need } \\sin^{2} x < 1",
            "graphData": null
          },
          {
            "explanation": "Solve \\(\\sin^{2} x = 1\\): \\(\\sin x = \\pm 1\\). On \\([0, 2\\pi]\\):\\[x = \\dfrac{\\pi}{2},\\quad x = \\dfrac{3\\pi}{2}.\\]There \\(r = 1\\) and the series becomes \\(1 + 1 + 1 + \\dots\\), which diverges. A common slip is listing the cosine non-convergence points \\(0,\\pi,2\\pi\\) from part (a).",
            "workingOut": "\\(x = \\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(\\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}\\). Context: at these angles sine has magnitude 1, so the geometric ratio is 1 and there is no finite limiting sum.",
            "workingOut": "\\(\\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q18biii",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "For the GP \\(1 + \\sin^{2} x + \\sin^{4} x + \\dots\\) with \\(a = 1\\) and \\(r = \\sin^{2} x\\), when the series converges, which expression equals the limiting sum \\(S_{\\infty}\\)?",
        "hint": "S_∞ = 1/(1-sin²x) = 1/cos²x.",
        "opts": [
          "\\(\\operatorname{cosec}^{2} x\\)",
          "\\(\\tan^{2} x\\)",
          "\\(\\sec^{2} x\\)",
          "\\(\\dfrac{1}{1 + \\sin^{2} x}\\)"
        ],
        "a": 2,
        "answer": "2",
        "solution": "The correct answer is \\(\\sec^{2} x\\).",
        "solutionSteps": [
          {
            "explanation": "Given: convergent GP with \\(a = 1\\) and \\(r = \\sin^{2} x\\) (so \\(\\sin^{2} x < 1\\)). Use the infinite GP sum formula\\[S_{\\infty} = \\dfrac{a}{1-r} = \\dfrac{1}{1 - \\sin^{2} x}.\\]",
            "workingOut": "\\(S_{\\infty} = \\dfrac{1}{1 - \\sin^{2} x}\\)",
            "graphData": null
          },
          {
            "explanation": "Identity \\(1 - \\sin^{2} x = \\cos^{2} x\\) gives\\[S_{\\infty} = \\dfrac{1}{\\cos^{2} x} = \\sec^{2} x.\\]A common slip is writing cosec (that was the cosine series in part (a)).",
            "workingOut": "\\(S_{\\infty} = \\sec^{2} x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(\\sec^{2} x\\). Context: the infinite sum of even powers of sine is sec squared when the GP converges.",
            "workingOut": "\\(\\sec^{2} x\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q18biv",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "For the series \\(1 + \\sin^{2} x + \\sin^{4} x + \\dots\\), what happens when \\(\\sin x = 0\\)?",
        "hint": "If sin x = 0 then r = 0 and the series is 1+0+0+…",
        "opts": [
          "The series diverges",
          "The series sums to \\(0\\)",
          "The series sums to \\(1\\), and \\(\\sec^{2} x = 1\\) also",
          "The common ratio becomes \\(1\\) so there is no limiting sum"
        ],
        "a": 2,
        "answer": "2",
        "solution": "The correct answer is The series sums to \\(1\\), and \\(\\sec^{2} x = 1\\) also.",
        "solutionSteps": [
          {
            "explanation": "Given: \\(\\sin x = 0\\). Then \\(r = \\sin^{2} x = 0\\). The series becomes\\[1 + 0 + 0 + \\dots = 1.\\]",
            "workingOut": "\\(r = 0 \\;\\Rightarrow\\; 1 + 0 + 0 + \\dots = 1\\)",
            "graphData": null
          },
          {
            "explanation": "Also \\(\\cos x = \\pm 1\\), so\\[\\sec^{2} x = \\dfrac{1}{\\cos^{2} x} = 1.\\]The GP formula \\(S_{\\infty} = \\sec^{2} x\\) agrees with the direct sum. Since \\(|r| = 0 < 1\\), the series converges.",
            "workingOut": "\\(S = 1 = \\sec^{2} x\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: the series sums to 1, matching \\(\\sec^{2} x = 1\\). Context: zero common ratio is a valid convergent GP case, parallel to \\(\\cos x = 0\\) in part (a).",
            "workingOut": "\\(S = 1\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      }
    ]
  },
  {
    "id": "y12a-8a-q19",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 480,
    "question": "Refer to the diagram of the two bulldozers and the bee. Answer each part below.",
    "hint": "Use closing speeds for each leg; total bee distance = 3V × total time.",
    "solution": "",
    "solutionSteps": [],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "questionImage": "data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20240%22%20width%3D%22560%22%20height%3D%22240%22%20role%3D%22img%22%20aria-label%3D%22Two%20bulldozers%20and%20a%20bee%20on%20a%20number%20line%22%3E%0A%20%20%3Crect%20width%3D%22560%22%20height%3D%22240%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20title%20--%3E%0A%20%20%3Ctext%20x%3D%22280%22%20y%3D%2228%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2213%22%20fill%3D%22%2364748b%22%3EConstruction%20site%20(side%20view)%3C%2Ftext%3E%0A%0A%20%20%3C!--%20ground%20--%3E%0A%20%20%3Cline%20x1%3D%2240%22%20y1%3D%22150%22%20x2%3D%22520%22%20y2%3D%22150%22%20stroke%3D%22%231e293b%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3C!--%20tick%20marks%20at%20A%20and%20B%20--%3E%0A%20%20%3Cline%20x1%3D%2280%22%20y1%3D%22145%22%20x2%3D%2280%22%20y2%3D%22155%22%20stroke%3D%22%231e293b%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Cline%20x1%3D%22480%22%20y1%3D%22145%22%20x2%3D%22480%22%20y2%3D%22155%22%20stroke%3D%22%231e293b%22%20stroke-width%3D%222%22%2F%3E%0A%0A%20%20%3C!--%20x%20labels%20under%20ground%20--%3E%0A%20%20%3Ctext%20x%3D%2280%22%20y%3D%22210%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3Ex%20%3D%200%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22480%22%20y%3D%22210%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2213%22%20fill%3D%22%230f172a%22%3Ex%20%3D%2048%3C%2Ftext%3E%0A%0A%20%20%3C!--%20dimension%2048%20m%20--%3E%0A%20%20%3Cline%20x1%3D%2280%22%20y1%3D%22188%22%20x2%3D%22480%22%20y2%3D%22188%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.3%22%2F%3E%0A%20%20%3Cline%20x1%3D%2280%22%20y1%3D%22182%22%20x2%3D%2280%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.3%22%2F%3E%0A%20%20%3Cline%20x1%3D%22480%22%20y1%3D%22182%22%20x2%3D%22480%22%20y2%3D%22194%22%20stroke%3D%22%23334155%22%20stroke-width%3D%221.3%22%2F%3E%0A%20%20%3Ctext%20x%3D%22280%22%20y%3D%22182%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2214%22%20font-weight%3D%22600%22%20fill%3D%22%230f172a%22%3E48%20m%3C%2Ftext%3E%0A%0A%20%20%3C!--%20%3D%3D%3D%3D%3D%20Bulldozer%20A%20(left%2C%20facing%20right)%20%3D%3D%3D%3D%3D%20--%3E%0A%20%20%3C!--%20body%20--%3E%0A%20%20%3Crect%20x%3D%2248%22%20y%3D%22100%22%20width%3D%2252%22%20height%3D%2236%22%20rx%3D%223%22%20fill%3D%22%23e2e8f0%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3C!--%20cabin%20--%3E%0A%20%20%3Crect%20x%3D%2254%22%20y%3D%2282%22%20width%3D%2228%22%20height%3D%2220%22%20rx%3D%222%22%20fill%3D%22%23cbd5e1%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.5%22%2F%3E%0A%20%20%3C!--%20scoop%20%2F%20blade%20pointing%20right%20toward%20B%20--%3E%0A%20%20%3Cpath%20d%3D%22M100%20108%20L118%20100%20L118%20136%20L100%20128%20Z%22%20fill%3D%22%2394a3b8%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.5%22%2F%3E%0A%20%20%3C!--%20tracks%20--%3E%0A%20%20%3Cellipse%20cx%3D%2262%22%20cy%3D%22142%22%20rx%3D%2212%22%20ry%3D%227%22%20fill%3D%22%2364748b%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cellipse%20cx%3D%2288%22%20cy%3D%22142%22%20rx%3D%2212%22%20ry%3D%227%22%20fill%3D%22%2364748b%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3C!--%20label%20A%20--%3E%0A%20%20%3Ctext%20x%3D%2274%22%20y%3D%2274%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2216%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3EA%3C%2Ftext%3E%0A%20%20%3C!--%20velocity%20arrow%20for%20A%20(rightward)%20--%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3Cmarker%20id%3D%22arrowR%22%20markerWidth%3D%228%22%20markerHeight%3D%228%22%20refX%3D%226%22%20refY%3D%223%22%20orient%3D%22auto%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C0%20L6%2C3%20L0%2C6%20Z%22%20fill%3D%22%232563eb%22%2F%3E%0A%20%20%20%20%3C%2Fmarker%3E%0A%20%20%20%20%3Cmarker%20id%3D%22arrowL%22%20markerWidth%3D%228%22%20markerHeight%3D%228%22%20refX%3D%220%22%20refY%3D%223%22%20orient%3D%22auto%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M6%2C0%20L0%2C3%20L6%2C6%20Z%22%20fill%3D%22%232563eb%22%2F%3E%0A%20%20%20%20%3C%2Fmarker%3E%0A%20%20%20%20%3Cmarker%20id%3D%22arrowBee%22%20markerWidth%3D%228%22%20markerHeight%3D%228%22%20refX%3D%226%22%20refY%3D%223%22%20orient%3D%22auto%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C0%20L6%2C3%20L0%2C6%20Z%22%20fill%3D%22%23ca8a04%22%2F%3E%0A%20%20%20%20%3C%2Fmarker%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Cline%20x1%3D%22120%22%20y1%3D%22118%22%20x2%3D%22165%22%20y2%3D%22118%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%222%22%20marker-end%3D%22url(%23arrowR)%22%2F%3E%0A%20%20%3Ctext%20x%3D%22142%22%20y%3D%22110%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2212%22%20fill%3D%22%232563eb%22%20font-weight%3D%22600%22%3EV%3C%2Ftext%3E%0A%0A%20%20%3C!--%20%3D%3D%3D%3D%3D%20Bulldozer%20B%20(right%2C%20facing%20left)%20%3D%3D%3D%3D%3D%20--%3E%0A%20%20%3Crect%20x%3D%22460%22%20y%3D%22100%22%20width%3D%2252%22%20height%3D%2236%22%20rx%3D%223%22%20fill%3D%22%23e2e8f0%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Crect%20x%3D%22478%22%20y%3D%2282%22%20width%3D%2228%22%20height%3D%2220%22%20rx%3D%222%22%20fill%3D%22%23cbd5e1%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.5%22%2F%3E%0A%20%20%3C!--%20scoop%20pointing%20left%20toward%20A%20--%3E%0A%20%20%3Cpath%20d%3D%22M460%20108%20L442%20100%20L442%20136%20L460%20128%20Z%22%20fill%3D%22%2394a3b8%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.5%22%2F%3E%0A%20%20%3Cellipse%20cx%3D%22472%22%20cy%3D%22142%22%20rx%3D%2212%22%20ry%3D%227%22%20fill%3D%22%2364748b%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cellipse%20cx%3D%22498%22%20cy%3D%22142%22%20rx%3D%2212%22%20ry%3D%227%22%20fill%3D%22%2364748b%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22486%22%20y%3D%2274%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2216%22%20font-weight%3D%22700%22%20fill%3D%22%230f172a%22%3EB%3C%2Ftext%3E%0A%20%20%3C!--%20velocity%20arrow%20for%20B%20(leftward)%20--%3E%0A%20%20%3Cline%20x1%3D%22438%22%20y1%3D%22118%22%20x2%3D%22393%22%20y2%3D%22118%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%222%22%20marker-end%3D%22url(%23arrowL)%22%2F%3E%0A%20%20%3Ctext%20x%3D%22416%22%20y%3D%22110%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2212%22%20fill%3D%22%232563eb%22%20font-weight%3D%22600%22%3EV%3C%2Ftext%3E%0A%0A%20%20%3C!--%20%3D%3D%3D%3D%3D%20Bee%20on%20scoop%20of%20A%20%3D%3D%3D%3D%3D%20--%3E%0A%20%20%3C!--%20body%20--%3E%0A%20%20%3Cellipse%20cx%3D%22118%22%20cy%3D%2288%22%20rx%3D%2210%22%20ry%3D%227%22%20fill%3D%22%23facc15%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22126%22%20cy%3D%2286%22%20r%3D%224.5%22%20fill%3D%22%23fde047%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221%22%2F%3E%0A%20%20%3C!--%20wings%20--%3E%0A%20%20%3Cellipse%20cx%3D%22114%22%20cy%3D%2278%22%20rx%3D%226%22%20ry%3D%223.5%22%20fill%3D%22%23e0f2fe%22%20stroke%3D%22%2338bdf8%22%20stroke-width%3D%221%22%20opacity%3D%220.9%22%2F%3E%0A%20%20%3Cellipse%20cx%3D%22122%22%20cy%3D%2276%22%20rx%3D%225%22%20ry%3D%223%22%20fill%3D%22%23e0f2fe%22%20stroke%3D%22%2338bdf8%22%20stroke-width%3D%221%22%20opacity%3D%220.9%22%2F%3E%0A%20%20%3C!--%20stripes%20--%3E%0A%20%20%3Cline%20x1%3D%22112%22%20y1%3D%2288%22%20x2%3D%22112%22%20y2%3D%2292%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Cline%20x1%3D%22117%22%20y1%3D%2287%22%20x2%3D%22117%22%20y2%3D%2293%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%221.2%22%2F%3E%0A%20%20%3Ctext%20x%3D%22118%22%20y%3D%2264%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22700%22%20fill%3D%22%23a16207%22%3Ebee%3C%2Ftext%3E%0A%20%20%3C!--%20bee%20flight%20arrow%20toward%20B%20--%3E%0A%20%20%3Cpath%20d%3D%22M140%2080%20Q220%2050%20300%2070%22%20fill%3D%22none%22%20stroke%3D%22%23ca8a04%22%20stroke-width%3D%221.8%22%20stroke-dasharray%3D%224%203%22%20marker-end%3D%22url(%23arrowBee)%22%2F%3E%0A%20%20%3Ctext%20x%3D%22220%22%20y%3D%2248%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2212%22%20fill%3D%22%23a16207%22%20font-weight%3D%22600%22%3E3V%20(back%20and%20forth)%3C%2Ftext%3E%0A%0A%20%20%3C!--%20legend%20note%20--%3E%0A%20%20%3Ctext%20x%3D%22280%22%20y%3D%22230%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2211%22%20fill%3D%22%2364748b%22%3EBoth%20bulldozers%20move%20toward%20each%20other%20at%20speed%20V%3B%20the%20bee%20flies%20at%20speed%203V%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "subQuestions": [
      {
        "id": "y12a-8a-q19a",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "Two bulldozers face each other on a straight track. Bulldozer A starts at \\(x = 0\\) and bulldozer B starts at \\(x = 48\\) (metres). At 7:00 am both start moving toward each other at speed \\(V\\) m/s. A bee on A flies back and forth between the bulldozers at speed \\(3V\\) m/s.\nWhen the bee first reaches bulldozer B, what is the position of B on the number line?",
        "hint": "Closing speed bee–B is 4V. Time = 48/(4V). Then x_B = 48 - Vt.",
        "opts": [
          "\\(x = 36\\)",
          "\\(x = 30\\)",
          "\\(x = 32\\)",
          "\\(x = 40\\)"
        ],
        "a": 0,
        "answer": "0",
        "solution": "The correct answer is \\(x = 36\\).",
        "solutionSteps": [
          {
            "explanation": "Given: A starts at 0 and moves right at speed \\(V\\); B starts at 48 and moves left at speed \\(V\\); the bee starts on A and flies right at speed \\(3V\\). Why relative speed? Until the bee first meets B, the bee and B close the initial 48 m gap. Strategy: find the closing speed, the time to first meeting, then substitute into B's position formula. A common slip is using only the bee's speed and forgetting that B is also moving.",
            "workingOut": "\\(x_{A}(t) = Vt,\\quad x_{B}(t) = 48 - Vt,\\quad x_{\\text{bee}}(t) = 3Vt\\)",
            "graphData": null
          },
          {
            "explanation": "Closing speed of bee toward B: bee flies right at \\(3V\\) while B moves left at \\(V\\), so the gap shrinks at\\[3V + V = 4V.\\]Time to first meeting:\\[t_{1} = \\dfrac{48}{4V} = \\dfrac{12}{V}.\\]This time is the first term of the (infinite) sequence of flight-leg times in the classic bee problem — here we only need the first leg.",
            "workingOut": "\\(t_{1} = \\dfrac{12}{V}\\)",
            "graphData": null
          },
          {
            "explanation": "Position of B at time \\(t_{1}\\):\\[x_{B}\\!\\left(\\dfrac{12}{V}\\right) = 48 - V\\cdot\\dfrac{12}{V} = 48 - 12 = 36.\\]Check with the bee: \\(x_{\\text{bee}} = 3V\\cdot\\dfrac{12}{V} = 36\\), so they meet at \\(x = 36\\). (A is then at \\(x = 12\\).)",
            "workingOut": "\\(x_{B} = 36\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(x = 36\\). Context: the first flight of the bee ends when B has moved 12 m left from 48, landing at 36.",
            "workingOut": "\\(x = 36\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q19b",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "Two bulldozers face each other on a straight track. Bulldozer A starts at \\(x = 0\\) and bulldozer B starts at \\(x = 48\\) (metres). At 7:00 am both start moving toward each other at speed \\(V\\) m/s. A bee on A flies back and forth between the bulldozers at speed \\(3V\\) m/s.\nWhen the bee first reaches B it is at \\(x = 36\\) and A is at \\(x = 12\\). The bee immediately turns and flies back toward A. Where is bulldozer A when the bee meets A again?",
        "hint": "From gap 24 m and closing speed 4V, find t2, then x_A = 12 + Vt2.",
        "opts": [
          "\\(x = 12\\)",
          "\\(x = 18\\)",
          "\\(x = 16\\)",
          "\\(x = 20\\)"
        ],
        "a": 1,
        "answer": "1",
        "solution": "The correct answer is \\(x = 18\\).",
        "solutionSteps": [
          {
            "explanation": "Given: at the start of the return leg, bee is at 36 flying left at \\(3V\\), A is at 12 flying right at \\(V\\). Why another closing-speed calculation? The second flight is again a geometric-style leg of the infinite zig-zag path. Strategy: gap, closing speed, time, then A's new position. A common slip is assuming A stays at 12.",
            "workingOut": "\\(\\text{gap} = 36 - 12 = 24\\)",
            "graphData": null
          },
          {
            "explanation": "Closing speed: bee left at \\(3V\\), A right at \\(V\\) gives\\[3V + V = 4V.\\]Time for the return leg:\\[t_{2} = \\dfrac{24}{4V} = \\dfrac{6}{V}.\\]Notice \\(t_{2} = \\dfrac{1}{2}t_{1}\\): each successive leg takes half the time of the previous one — a geometric sequence of times with ratio \\(\\dfrac{1}{2}\\).",
            "workingOut": "\\(t_{2} = \\dfrac{6}{V}\\)",
            "graphData": null
          },
          {
            "explanation": "A's position when they meet again:\\[x_{A} = 12 + V\\cdot\\dfrac{6}{V} = 12 + 6 = 18.\\]Check with the bee starting at 36 and flying left: \\(36 - 3V\\cdot\\dfrac{6}{V} = 36 - 18 = 18\\). Match confirmed.",
            "workingOut": "\\(x_{A} = 18\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(x = 18\\). Context: after the second GP-style flight leg, A has advanced to 18 m.",
            "workingOut": "\\(x = 18\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q19ci",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 150,
        "question": "Two bulldozers face each other on a straight track. Bulldozer A starts at \\(x = 0\\) and bulldozer B starts at \\(x = 48\\) (metres). At 7:00 am both start moving toward each other at speed \\(V\\) m/s. A bee on A flies back and forth between the bulldozers at speed \\(3V\\) m/s.\nThe bulldozers keep moving toward each other and the bee keeps flying back and forth forever. Where do they all eventually meet?",
        "hint": "Bulldozers meet after 48/(2V). Position = 24.",
        "opts": [
          "\\(x = 18\\)",
          "\\(x = 20\\)",
          "\\(x = 36\\)",
          "\\(x = 24\\)"
        ],
        "a": 3,
        "answer": "3",
        "solution": "The correct answer is \\(x = 24\\).",
        "solutionSteps": [
          {
            "explanation": "Given: A and B close at relative speed \\(2V\\) from an initial separation of 48 m; the bee zig-zags between them indefinitely. Why not sum infinitely many bee legs for the meeting point? The bee is always between A and B, so when A and B collide, the bee must be at that same point. Strategy: find when and where the bulldozers meet. A common slip is averaging first-meeting positions or guessing 36.",
            "workingOut": "\\text{closing speed of A and B} = 2V",
            "graphData": null
          },
          {
            "explanation": "Time until A and B meet:\\[T = \\dfrac{48}{2V} = \\dfrac{24}{V}.\\]Position of A (or B) at that time:\\[x = 0 + V\\cdot\\dfrac{24}{V} = 24.\\](Equivalently \\(x_{B} = 48 - 24 = 24\\).) This is the unique eventual meeting point of all three.",
            "workingOut": "\\(x = 24\\)",
            "graphData": null
          },
          {
            "explanation": "Connection to the geometric series of flight legs: the leg times form a GP\\[t_{1} = \\dfrac{12}{V},\\quad t_{2} = \\dfrac{6}{V},\\quad t_{3} = \\dfrac{3}{V},\\quad \\dots\\]with first term \\(\\dfrac{12}{V}\\) and ratio \\(\\dfrac{1}{2}\\). The total flight time is the infinite sum\\[S_{\\infty} = \\dfrac{12/V}{1 - 1/2} = \\dfrac{24}{V},\\]exactly the bulldozer collision time — confirming consistency.",
            "workingOut": "\\(T = S_{\\infty}^{\\text{(times)}} = \\dfrac{24}{V}\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(x = 24\\). Context: everything meets at the midpoint of the original 48 m gap.",
            "workingOut": "\\(x = 24\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q19cii",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Two bulldozers face each other on a straight track. Bulldozer A starts at \\(x = 0\\) and bulldozer B starts at \\(x = 48\\) (metres). At 7:00 am both start moving toward each other at speed \\(V\\) m/s. A bee on A flies back and forth between the bulldozers at speed \\(3V\\) m/s.\nThe bulldozers meet after total time \\(\\dfrac{24}{V}\\). How far does the bee fly in total (in metres)?",
        "hint": "Bee distance = 3V × (24/V) = 72. Or sum GP 36+18+9+…",
        "opts": [
          "\\(48\\)",
          "\\(60\\)",
          "\\(72\\)",
          "\\(96\\)"
        ],
        "a": 2,
        "answer": "2",
        "solution": "The correct answer is \\(72\\).",
        "solutionSteps": [
          {
            "explanation": "Given: the bee flies continuously at constant speed \\(3V\\) until the bulldozers meet at time \\(T = \\dfrac{24}{V}\\). Why not sum the infinite zig-zag path lengths term by term? That works but is harder: the path lengths form a GP, and its sum equals speed times total time. Strategy: use\\[\\text{distance} = \\text{speed} \\times \\text{time}.\\]A common slip is reporting only the first leg 36, or the initial gap 48.",
            "workingOut": "\\(T = \\dfrac{24}{V},\\quad v_{\\text{bee}} = 3V\\)",
            "graphData": null
          },
          {
            "explanation": "Total distance flown:\\[d = 3V \\cdot \\dfrac{24}{V} = 72.\\]Optional GP check: successive path lengths are\\[36,\\ 18,\\ 9,\\ \\dots\\](each leg is half the previous length, since times form a GP with ratio \\(\\dfrac{1}{2}\\) and speed is constant). Infinite sum\\[S_{\\infty} = \\dfrac{36}{1 - 1/2} = 72,\\]matching the time method.",
            "workingOut": "\\(d = 72\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(72\\) m. Context: the elegant way to total an infinite geometric flight path is to multiply constant bee speed by the finite lifetime of the motion until the bulldozers collide.",
            "workingOut": "\\(72\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      }
    ]
  },
  {
    "id": "y12a-8a-q2",
    "topicId": "y12a-8A",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 360,
    "question": "Consider the sum of the first 400 even numbers: \\(2 + 4 + 6 + \\dots + 800\\).\nAnswer each part below.",
    "hint": "The terms form an AP. Find a, d, n, then use S_n = (1/2)n(a+l).",
    "solution": "",
    "solutionSteps": [],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "subQuestions": [
      {
        "id": "y12a-8a-q2ai",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "Which statement correctly shows that the terms form an arithmetic progression, and states the common difference?",
        "hint": "Subtract consecutive terms; check the difference is constant.",
        "opts": [
          "Consecutive differences are constant: \\(4-2=2\\) and \\(6-4=2\\), so it is an AP with \\(d = 2\\)",
          "Consecutive ratios are constant: \\(\\dfrac{4}{2}=2\\), so it is a GP with \\(r = 2\\)",
          "The last term is 800, so it must be an AP",
          "Even numbers always form a GP with ratio 2"
        ],
        "a": 0,
        "answer": "0",
        "solution": "The correct answer is Consecutive differences are constant: \\(4-2=2\\) and \\(6-4=2\\), so it is an AP with \\(d = 2\\).",
        "solutionSteps": [
          {
            "explanation": "Given: the series of positive even numbers \\(2 + 4 + 6 + \\dots + 800\\). Why check differences? An arithmetic progression (AP) has a constant common difference between successive terms. A geometric progression (GP) would need a constant ratio instead. Strategy: compute consecutive differences and verify they are equal. A common slip is dividing terms and treating the sequence as a GP (the ratio 2 is constant for even numbers starting at 2, but the problem asks for an AP model of this sum).",
            "workingOut": "\\(2,\\ 4,\\ 6,\\ \\dots,\\ 800\\)",
            "graphData": null
          },
          {
            "explanation": "Compute successive differences:\\[4 - 2 = 2,\\qquad 6 - 4 = 2.\\]The difference is constant at 2. By definition of even numbers, each term is 2 more than the previous, so the common difference is\\[d = 2\\]throughout. Therefore the terms form an AP with first term \\(a = 2\\) and common difference \\(d = 2\\).",
            "workingOut": "\\(d = 2\\ \\text{(constant)}\\ \\Rightarrow\\ \\text{AP}\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: consecutive differences equal 2, so the series is an AP with \\(d = 2\\). Context: this AP setup is used next to find \\(a\\), \\(n\\), and the sum of the first 400 even numbers.",
            "workingOut": "\\text{AP with } d=2",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q2aii",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "State the first term \\(a\\) of this arithmetic progression.",
        "hint": "Read the first number in the series.",
        "opts": [
          "\\(0\\)",
          "\\(2\\)",
          "\\(4\\)",
          "\\(8\\)"
        ],
        "a": 1,
        "answer": "1",
        "solution": "The correct answer is \\(2\\).",
        "solutionSteps": [
          {
            "explanation": "Given: the AP of even numbers begins at 2 and ends at 800. Why identify \\(a\\)? The AP term and sum formulas both need the first term. Strategy: read the first number written in the series. A common slip is taking \\(a = 0\\) or the common difference 2 as if it were the first term.",
            "workingOut": "\\(2 + 4 + 6 + \\dots + 800\\)",
            "graphData": null
          },
          {
            "explanation": "The first term of the series is 2, so\\[a = T_1 = 2.\\]This is the first positive even number in the sum described.",
            "workingOut": "\\(a = 2\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(a = 2\\). Context: first term of the AP of the first 400 even numbers.",
            "workingOut": "\\(2\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q2aiii",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "State the common difference \\(d\\) of this arithmetic progression.",
        "hint": "Consecutive even integers differ by 2.",
        "opts": [
          "\\(1\\)",
          "\\(4\\)",
          "\\(8\\)",
          "\\(2\\)"
        ],
        "a": 3,
        "answer": "3",
        "solution": "The correct answer is \\(2\\).",
        "solutionSteps": [
          {
            "explanation": "Given: consecutive even numbers in an AP. Why find \\(d\\)? The common difference is the constant step used in \\(T_n = a + (n-1)d\\) and in sum formulas. Strategy: subtract the first term from the second. A common slip is using 4 (skipping one even number) or 1 (odd-number spacing).",
            "workingOut": "\\(d = T_2 - T_1\\)",
            "graphData": null
          },
          {
            "explanation": "Calculate \\(4 - 2 = 2\\). Consecutive even integers always differ by 2, confirming\\[d = 2.\\]",
            "workingOut": "\\(d = 2\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(d = 2\\). Context: positive common difference because the terms are increasing.",
            "workingOut": "\\(2\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q2aiv",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 100,
        "question": "This arithmetic progression has first term \\(a = 2\\), common difference \\(d = 2\\), and last term \\(l = 800\\). Find the number of terms \\(n\\).",
        "hint": "Solve a+(n-1)d = 800 for n.",
        "opts": [
          "\\(200\\)",
          "\\(399\\)",
          "\\(400\\)",
          "\\(401\\)"
        ],
        "a": 2,
        "answer": "2",
        "solution": "The correct answer is \\(400\\).",
        "solutionSteps": [
          {
            "explanation": "Given: AP with \\(a = 2\\), \\(d = 2\\), last term \\(l = 800\\). Why solve for \\(n\\)? The sum formula needs the count of terms. Strategy: set the general term equal to the last term and solve. A common slip is using \\(2n = 800\\) carelessly without the \\((n-1)\\) structure.",
            "workingOut": "\\(T_n = a + (n-1)d = 800\\)",
            "graphData": null
          },
          {
            "explanation": "Substitute:\\[2 + (n-1)\\times 2 = 800.\\]Simplify: \\(2(n-1) = 798\\), so \\(n-1 = 399\\), hence\\[n = 400.\\]Equivalently, the first 400 positive even numbers end at \\(2\\times 400 = 800\\).",
            "workingOut": "\\(n = 400\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(n = 400\\). Context: there are exactly 400 terms in the sum of the first 400 even numbers.",
            "workingOut": "\\(400\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      },
      {
        "id": "y12a-8a-q2b",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "With \\(a = 2\\), last term \\(l = 800\\) and \\(n = 400\\), use \\(S_n = \\dfrac{1}{2}n(a+l)\\) to find the sum.",
        "hint": "S_n = (1/2)n(a+l) with n=400, a=2, l=800.",
        "opts": [
          "\\(80000\\)",
          "\\(160400\\)",
          "\\(160000\\)",
          "\\(160800\\)"
        ],
        "a": 1,
        "answer": "1",
        "solution": "The correct answer is \\(160400\\).",
        "solutionSteps": [
          {
            "explanation": "Given: AP sum of the first 400 even numbers with known ends \\(a = 2\\), \\(l = 800\\) and \\(n = 400\\). Why this sum formula? When both ends of an AP are known,\\[S_n = \\dfrac{1}{2}n(a+l)\\]is the quickest exact total (average of first and last, times the number of terms). Strategy: substitute carefully. A common slip is forgetting the factor \\(\\dfrac{1}{2}\\) or using only one endpoint.",
            "workingOut": "\\(S_n = \\dfrac{1}{2}n(a+l)\\)",
            "graphData": null
          },
          {
            "explanation": "Substitute:\\[S_{400} = \\dfrac{1}{2}\\times 400\\times(2+800) = 200\\times 802.\\]Why 200? Half of 400. The sum of the ends is 802.",
            "workingOut": "\\(S_{400} = 200\\times 802\\)",
            "graphData": null
          },
          {
            "explanation": "Compute \\(200\\times 802 = 200\\times 800 + 200\\times 2 = 160000 + 400 = 160400\\). Check: sum of first 400 positives is \\(\\dfrac{400\\times 401}{2} = 80200\\); times 2 for even numbers gives 160400.",
            "workingOut": "\\(S_{400} = 160400\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(160400\\). Context: total of the first 400 positive even numbers.",
            "workingOut": "\\(160400\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      }
    ]
  }
];
