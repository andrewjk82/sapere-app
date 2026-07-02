export const Y10_CH16C_QUESTIONS = [
  {
    "id": "y10-16c-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "If \\(a \\propto bc\\), write down the formula relating the variables and complete the following table.\n\n| \\(a\\) | 12 | 24 | | 48 | 72 |\n|---|---|---|---|---|---|\n| \\(b\\) | 1 | | 2 | | 2 |\n| \\(c\\) | 1 | 2 | 1 | 2 | |",
    "a": "a = 12bc. Missing values: b=1, a=24, b=2, c=3.",
    "t": "Proportionality in several variables",
    "hint": "Find the constant \\(k\\) using the first column where \\(a=12, b=1, c=1\\).",
    "solution": "1. \\(a = kbc\\). Substitute \\(a=12, b=1, c=1\\):\n\\(12 = k(1)(1) \\implies k = 12\\).\nFormula: \\(a = 12bc\\).\n2. Second column: \\(a=24, c=2 \\implies 24 = 12(b)(2) = 24b \\implies b=1\\).\n3. Third column: \\(b=2, c=1 \\implies a = 12(2)(1) = 24\\).\n4. Fourth column: \\(a=48, c=2 \\implies 48 = 12(b)(2) = 24b \\implies b=2\\).\n5. Fifth column: \\(a=72, b=2 \\implies 72 = 12(2)(c) = 24c \\implies c=3\\).",
    "solutionSteps": [
      {
        "explanation": "Write the general formula for joint variation.",
        "workingOut": "a = kbc"
      },
      {
        "explanation": "Use the first column to find \\(k\\).",
        "workingOut": "12 = k(1)(1) \\implies k = 12"
      },
      {
        "explanation": "Write the specific formula.",
        "workingOut": "a = 12bc"
      },
      {
        "explanation": "Find \\(b\\) in the second column.",
        "workingOut": "24 = 12(b)(2) \\implies 24 = 24b \\implies b = 1"
      },
      {
        "explanation": "Find \\(a\\) in the third column.",
        "workingOut": "a = 12(2)(1) = 24"
      },
      {
        "explanation": "Find \\(b\\) in the fourth column.",
        "workingOut": "48 = 12(b)(2) \\implies 48 = 24b \\implies b = 2"
      },
      {
        "explanation": "Find \\(c\\) in the fifth column.",
        "workingOut": "72 = 12(2)(c) \\implies 72 = 24c \\implies c = 3"
      }
    ]
  },
  {
    "id": "y10-16c-q2",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "If \\(r \\propto \\frac{s}{t}\\), write down the formula relating the variables and complete the following table.\n\n| \\(r\\) | 24 | 12 | | 48 | 4 |\n|---|---|---|---|---|---|\n| \\(s\\) | 1 | | 2 | | 2 |\n| \\(t\\) | 1 | 2 | 2 | 1 | |",
    "a": "r = 24s/t. Missing values: s=1, r=24, s=2, t=12.",
    "t": "Proportionality in several variables",
    "hint": "Find the constant \\(k\\) using the first column where \\(r=24, s=1, t=1\\).",
    "solution": "1. \\(r = \\frac{ks}{t}\\). Substitute \\(r=24, s=1, t=1\\):\n\\(24 = \\frac{k(1)}{1} \\implies k = 24\\).\nFormula: \\(r = \\frac{24s}{t}\\).\n2. Second column: \\(r=12, t=2 \\implies 12 = \\frac{24s}{2} = 12s \\implies s=1\\).\n3. Third column: \\(s=2, t=2 \\implies r = \\frac{24(2)}{2} = 24\\).\n4. Fourth column: \\(r=48, t=1 \\implies 48 = \\frac{24s}{1} = 24s \\implies s=2\\).\n5. Fifth column: \\(r=4, s=2 \\implies 4 = \\frac{24(2)}{t} = \\frac{48}{t} \\implies 4t = 48 \\implies t=12\\).",
    "solutionSteps": [
      {
        "explanation": "Write the general formula for combined variation.",
        "workingOut": "r = \\frac{ks}{t}"
      },
      {
        "explanation": "Use the first column to find \\(k\\).",
        "workingOut": "24 = \\frac{k(1)}{1} \\implies k = 24"
      },
      {
        "explanation": "Write the specific formula.",
        "workingOut": "r = \\frac{24s}{t}"
      },
      {
        "explanation": "Find \\(s\\) in the second column.",
        "workingOut": "12 = \\frac{24s}{2} \\implies 12 = 12s \\implies s = 1"
      },
      {
        "explanation": "Find \\(r\\) in the third column.",
        "workingOut": "r = \\frac{24(2)}{2} = 24"
      },
      {
        "explanation": "Find \\(s\\) in the fourth column.",
        "workingOut": "48 = \\frac{24s}{1} \\implies s = 2"
      },
      {
        "explanation": "Find \\(t\\) in the fifth column.",
        "workingOut": "4 = \\frac{24(2)}{t} \\implies 4t = 48 \\implies t = 12"
      }
    ]
  },
  {
    "id": "y10-16c-q3",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Suppose that \\(y\\) is directly proportional to \\(x\\) and inversely proportional to \\(w\\). If \\(y = 2\\) when \\(x = 7\\) and \\(w = 14\\), find \\(y\\) when \\(x = 10\\) and \\(w = 8\\).",
    "a": "5",
    "t": "Proportionality in several variables",
    "hint": "Set up the equation \\(y = \\frac{kx}{w}\\) and solve for \\(k\\).",
    "solution": "y = kx/w\n2 = k(7)/14\n2 = k/2\nk = 4\ny = 4x/w\nWhen x = 10 and w = 8:\ny = 4(10)/8 = 40/8 = 5",
    "solutionSteps": [
      {
        "explanation": "Write the combined variation equation.",
        "workingOut": "y = \\frac{kx}{w}"
      },
      {
        "explanation": "Substitute the known values to find \\(k\\).",
        "workingOut": "2 = \\frac{k(7)}{14}"
      },
      {
        "explanation": "Simplify and solve for \\(k\\).",
        "workingOut": "2 = \\frac{k}{2} \\implies k = 4"
      },
      {
        "explanation": "Write the specific formula.",
        "workingOut": "y = \\frac{4x}{w}"
      },
      {
        "explanation": "Substitute \\(x = 10\\) and \\(w = 8\\) to find \\(y\\).",
        "workingOut": "y = \\frac{4(10)}{8} = 5"
      }
    ]
  },
  {
    "id": "y10-16c-q4a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Assume that \\(y\\) is directly proportional to the square of \\(x\\) and inversely proportional to the square root of \\(z\\). If \\(y = 6\\) when \\(x = 2\\) and \\(z = 4\\), find a formula for \\(y\\) in terms of \\(x\\) and \\(z\\). (Enter only the right-hand side of \\(y = \\ldots\\) without spaces, e.g., \\(3x^2/\\sqrt{z}\\) )",
    "a": "3x^2/\\sqrt{z}",
    "t": "Proportionality in several variables",
    "hint": "The relation is \\(y = \\frac{k x^2}{\\sqrt{z}}\\). Find \\(k\\).",
    "solution": "y = kx^2/\\sqrt{z}\n6 = k(2^2)/\\sqrt{4}\n6 = k(4)/2 = 2k\nk = 3\ny = 3x^2/\\sqrt{z}",
    "solutionSteps": [
      {
        "explanation": "Write the combined variation equation.",
        "workingOut": "y = \\frac{k x^2}{\\sqrt{z}}"
      },
      {
        "explanation": "Substitute \\(y = 6\\), \\(x = 2\\), and \\(z = 4\\).",
        "workingOut": "6 = \\frac{k(2^2)}{\\sqrt{4}}"
      },
      {
        "explanation": "Simplify to find \\(k\\).",
        "workingOut": "6 = \\frac{k(4)}{2} = 2k \\implies k = 3"
      },
      {
        "explanation": "Write the specific formula.",
        "workingOut": "y = \\frac{3x^2}{\\sqrt{z}}"
      }
    ]
  },
  {
    "id": "y10-16c-q4b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Assume that \\(y\\) is directly proportional to the square of \\(x\\) and inversely proportional to the square root of \\(z\\). If \\(y = 6\\) when \\(x = 2\\) and \\(z = 4\\), find \\(y\\) when \\(x = 3\\) and \\(z = 16\\). (Write as a decimal or exact fraction)",
    "a": "6.75",
    "t": "Proportionality in several variables",
    "hint": "Use the formula \\(y = \\frac{3x^2}{\\sqrt{z}}\\) from part a.",
    "solution": "y = 3x^2/\\sqrt{z}\nWhen x = 3 and z = 16:\ny = 3(3^2)/\\sqrt{16} = 3(9)/4 = 27/4 = 6.75",
    "solutionSteps": [
      {
        "explanation": "Use the specific formula found previously.",
        "workingOut": "y = \\frac{3x^2}{\\sqrt{z}}"
      },
      {
        "explanation": "Substitute \\(x = 3\\) and \\(z = 16\\).",
        "workingOut": "y = \\frac{3(3^2)}{\\sqrt{16}}"
      },
      {
        "explanation": "Calculate the result.",
        "workingOut": "y = \\frac{3(9)}{4} = \\frac{27}{4} = 6.75"
      }
    ]
  },
  {
    "id": "y10-16c-q5a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Suppose that \\(a\\) is directly proportional to \\(b\\) and the cube of \\(c\\). If \\(a = 96\\) when \\(b = 3\\) and \\(c = 2\\), write a formula for \\(a\\) in terms of \\(b\\) and \\(c\\). (Enter only the right-hand side without spaces, e.g., \\(4bc^3\\) )",
    "a": "4bc^3",
    "t": "Proportionality in several variables",
    "hint": "The relation is \\(a = k b c^3\\).",
    "solution": "a = k b c^3\n96 = k(3)(2^3) = k(3)(8) = 24k\nk = 4\na = 4bc^3",
    "solutionSteps": [
      {
        "explanation": "Write the variation equation.",
        "workingOut": "a = k b c^3"
      },
      {
        "explanation": "Substitute the given values \\(a = 96, b = 3, c = 2\\).",
        "workingOut": "96 = k(3)(2^3)"
      },
      {
        "explanation": "Simplify and solve for \\(k\\).",
        "workingOut": "96 = k(3)(8) = 24k \\implies k = 4"
      },
      {
        "explanation": "Write the specific formula.",
        "workingOut": "a = 4bc^3"
      }
    ]
  },
  {
    "id": "y10-16c-q5b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Suppose that \\(a\\) is directly proportional to \\(b\\) and the cube of \\(c\\). If \\(a = 96\\) when \\(b = 3\\) and \\(c = 2\\), find \\(b\\) when \\(a = 16\\) and \\(c = \\frac{1}{2}\\).",
    "a": "32",
    "t": "Proportionality in several variables",
    "hint": "Use the formula \\(a = 4bc^3\\) and substitute the new values.",
    "solution": "a = 4bc^3\n16 = 4b(1/2)^3 = 4b(1/8) = b/2\nb = 32",
    "solutionSteps": [
      {
        "explanation": "Use the specific formula found previously.",
        "workingOut": "a = 4bc^3"
      },
      {
        "explanation": "Substitute \\(a = 16\\) and \\(c = \\frac{1}{2}\\).",
        "workingOut": "16 = 4b\\left(\\frac{1}{2}\\right)^3"
      },
      {
        "explanation": "Simplify the cube.",
        "workingOut": "16 = 4b\\left(\\frac{1}{8}\\right) = \\frac{1}{2}b"
      },
      {
        "explanation": "Solve for \\(b\\).",
        "workingOut": "b = 16 \\times 2 = 32"
      }
    ]
  },
  {
    "id": "y10-16c-q6a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The amount of heat, \\(H\\) units, produced by an electric heater element is directly proportional to the square of the current, \\(i\\) amperes, flowing through the element, to the electrical resistance, \\(R\\) ohms, and to the time, \\(t\\) seconds, for which the current has been flowing. If 256 units of heat are produced by a current of 2 amp through a resistance of 40 ohms for 10 seconds, write down the formula for \\(H\\) in terms of \\(i, R\\) and \\(t\\). (Enter right-hand side without spaces, e.g., \\(0.16i^2Rt\\))",
    "a": "0.16i^2Rt",
    "t": "Proportionality in several variables",
    "hint": "Set up \\(H = k i^2 R t\\) and find \\(k\\).",
    "solution": "H = k i^2 R t\n256 = k(2^2)(40)(10)\n256 = k(4)(400) = 1600k\nk = 256 / 1600 = 16 / 100 = 0.16\nH = 0.16 i^2 R t",
    "solutionSteps": [
      {
        "explanation": "Write the combined variation equation.",
        "workingOut": "H = k i^2 R t"
      },
      {
        "explanation": "Substitute \\(H = 256, i = 2, R = 40, t = 10\\).",
        "workingOut": "256 = k(2^2)(40)(10)"
      },
      {
        "explanation": "Simplify and solve for \\(k\\).",
        "workingOut": "256 = 1600k \\implies k = 0.16"
      },
      {
        "explanation": "Write the specific formula.",
        "workingOut": "H = 0.16 i^2 R t"
      }
    ]
  },
  {
    "id": "y10-16c-q6b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Following the previous question, how much heat is produced by a current of 4.5 amp through a resistance of 60 ohms for 15 seconds?",
    "a": "2916",
    "t": "Proportionality in several variables",
    "hint": "Use \\(H = 0.16 i^2 R t\\) with the new values.",
    "solution": "H = 0.16 i^2 R t\nH = 0.16(4.5^2)(60)(15)\nH = 0.16(20.25)(900) = 144 * 20.25 = 2916 units",
    "solutionSteps": [
      {
        "explanation": "Use the specific formula.",
        "workingOut": "H = 0.16 i^2 R t"
      },
      {
        "explanation": "Substitute \\(i = 4.5, R = 60, t = 15\\).",
        "workingOut": "H = 0.16(4.5^2)(60)(15)"
      },
      {
        "explanation": "Calculate the result.",
        "workingOut": "H = 0.16(20.25)(900) = 2916"
      }
    ]
  },
  {
    "id": "y10-16c-q7",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A model aeroplane attached to one end of a string moves in a horizontal circle. The tension, \\(T\\) N, in the string is directly proportional to the square of the speed, \\(v\\) m/s, and inversely proportional to the radius, \\(r\\) m, of the circle. If the radius is 10 m and the speed is 20 m/s, the tension is 60 N. Find the tension if the radius is 15 m and the speed is 30 m/s.",
    "a": "90",
    "t": "Proportionality in several variables",
    "hint": "Set up \\(T = \\frac{k v^2}{r}\\) and find \\(k\\) first.",
    "solution": "T = k v^2 / r\n60 = k(20^2) / 10\n60 = 400k / 10 = 40k\nk = 1.5\nT = 1.5 v^2 / r\nWhen r = 15, v = 30:\nT = 1.5(30^2) / 15 = 1.5(900) / 15 = 1350 / 15 = 90 N",
    "solutionSteps": [
      {
        "explanation": "Write the variation equation.",
        "workingOut": "T = \\frac{k v^2}{r}"
      },
      {
        "explanation": "Substitute \\(T = 60, r = 10, v = 20\\) to find \\(k\\).",
        "workingOut": "60 = \\frac{k(20^2)}{10}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "60 = \\frac{400k}{10} = 40k \\implies k = 1.5"
      },
      {
        "explanation": "Write the specific formula.",
        "workingOut": "T = \\frac{1.5 v^2}{r}"
      },
      {
        "explanation": "Substitute \\(r = 15, v = 30\\) to find the new tension.",
        "workingOut": "T = \\frac{1.5(30^2)}{15} = \\frac{1350}{15} = 90"
      }
    ]
  },
  {
    "id": "y10-16c-q8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The frequency \\(n\\) of a piano string varies directly as the square root of the tension, \\(T\\) N, and inversely as the length, \\(\\ell\\) cm. A string 30 cm long under a tension 25 N has a frequency of 256 vibrations per second. If the tension is changed to 30 N, to what must the length be changed, correct to two decimal places, for the string to emit the same note (i.e. same frequency)?",
    "a": "32.86",
    "t": "Proportionality in several variables",
    "hint": "Set up \\(n = \\frac{k \\sqrt{T}}{\\ell}\\), find \\(k\\), then solve for the new \\(\\ell\\).",
    "solution": "n = k\\sqrt{T} / \\ell\n256 = k\\sqrt{25} / 30 = 5k / 30 = k / 6\nk = 256 * 6 = 1536\nn = 1536\\sqrt{T} / \\ell\nFor the same note, n = 256. T = 30.\n256 = 1536\\sqrt{30} / \\ell\n\\ell = 1536\\sqrt{30} / 256 = 6\\sqrt{30} ≈ 32.86 cm",
    "solutionSteps": [
      {
        "explanation": "Write the variation equation.",
        "workingOut": "n = \\frac{k \\sqrt{T}}{\\ell}"
      },
      {
        "explanation": "Substitute \\(n = 256, ell = 30, T = 25\\) to find \\(k\\).",
        "workingOut": "256 = \\frac{k \\sqrt{25}}{30}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "256 = \\frac{5k}{30} = \\frac{k}{6} \\implies k = 1536"
      },
      {
        "explanation": "Write the specific formula.",
        "workingOut": "n = \\frac{1536 \\sqrt{T}}{\\ell}"
      },
      {
        "explanation": "Set \\(n = 256\\) and \\(T = 30\\) to find the new length.",
        "workingOut": "256 = \\frac{1536 \\sqrt{30}}{\\ell}"
      },
      {
        "explanation": "Solve for \\(\\ell\\).",
        "workingOut": "\\ell = \\frac{1536 \\sqrt{30}}{256} = 6\\sqrt{30} \\approx 32.86"
      }
    ]
  },
  {
    "id": "y10-16c-q9a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The quantity \\(t\\) is directly proportional to \\(m\\) and \\(n\\), and is inversely proportional to the square of \\(r\\). If \\(t = \\frac{45}{4}\\) when \\(m = 3\\), \\(n = 5\\) and \\(r = 4\\), find \\(r\\) when \\(t = 6\\), \\(m = 9\\) and \\(n = 8\\). (Assume \\(r > 0\\))",
    "a": "12",
    "t": "Proportionality in several variables",
    "hint": "Set up \\(t = \\frac{k m n}{r^2}\\) and find \\(k\\) first.",
    "solution": "t = k m n / r^2\n45/4 = k(3)(5) / 4^2 = 15k / 16\n45 * 16 = 60k  => 720 = 60k => k = 12\nt = 12 m n / r^2\n6 = 12(9)(8) / r^2\n6 = 864 / r^2\nr^2 = 864 / 6 = 144\nr = 12",
    "solutionSteps": [
      {
        "explanation": "Write the variation equation.",
        "workingOut": "t = \\frac{k m n}{r^2}"
      },
      {
        "explanation": "Substitute \\(t = \\frac{45}{4}, m = 3, n = 5, r = 4\\).",
        "workingOut": "\\frac{45}{4} = \\frac{k(3)(5)}{4^2}"
      },
      {
        "explanation": "Simplify to find \\(k\\).",
        "workingOut": "\\frac{45}{4} = \\frac{15k}{16} \\implies 15k = 180 \\implies k = 12"
      },
      {
        "explanation": "Write the specific formula.",
        "workingOut": "t = \\frac{12 m n}{r^2}"
      },
      {
        "explanation": "Substitute \\(t = 6, m = 9, n = 8\\).",
        "workingOut": "6 = \\frac{12(9)(8)}{r^2}"
      },
      {
        "explanation": "Solve for \\(r^2\\) and then \\(r\\).",
        "workingOut": "r^2 = \\frac{864}{6} = 144 \\implies r = 12"
      }
    ]
  },
  {
    "id": "y10-16c-q9b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The quantity \\(t\\) is directly proportional to \\(m\\) and \\(n\\), and is inversely proportional to the square of \\(r\\). If \\(t = \\frac{45}{4}\\) when \\(m = 3\\), \\(n = 5\\) and \\(r = 4\\), find \\(n\\) when \\(t = 8\\), \\(r = 12\\) and \\(m = 4\\).",
    "a": "24",
    "t": "Proportionality in several variables",
    "hint": "Use the formula \\(t = \\frac{12 m n}{r^2}\\).",
    "solution": "t = 12 m n / r^2\n8 = 12(4)n / 12^2\n8 = 48n / 144\n8 = n / 3\nn = 24",
    "solutionSteps": [
      {
        "explanation": "Use the specific formula found previously.",
        "workingOut": "t = \\frac{12 m n}{r^2}"
      },
      {
        "explanation": "Substitute \\(t = 8, r = 12, m = 4\\).",
        "workingOut": "8 = \\frac{12(4)n}{12^2}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "8 = \\frac{48n}{144} = \\frac{n}{3}"
      },
      {
        "explanation": "Solve for \\(n\\).",
        "workingOut": "n = 24"
      }
    ]
  },
  {
    "id": "y10-16c-q10a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(y\\) is directly proportional to the cube of \\(x\\) and inversely proportional to the square of \\(z\\), what is the effect on \\(y\\) if both \\(x\\) and \\(z\\) are doubled?",
    "a": "0",
    "opts": [
      "It is multiplied by 2",
      "It is multiplied by 4",
      "It is divided by 2",
      "It remains the same"
    ],
    "t": "Proportionality in several variables",
    "hint": "Substitute \\(2x\\) and \\(2z\\) into \\(y = \\frac{k x^3}{z^2}\\).",
    "solution": "y = kx^3 / z^2\ny' = k(2x)^3 / (2z)^2 = k(8x^3) / 4z^2 = 2 * (kx^3 / z^2) = 2y. It is multiplied by 2.",
    "solutionSteps": [
      {
        "explanation": "Write the variation equation.",
        "workingOut": "y = \\frac{k x^3}{z^2}"
      },
      {
        "explanation": "Substitute \\(2x\\) for \\(x\\) and \\(2z\\) for \\(z\\).",
        "workingOut": "y' = \\frac{k(2x)^3}{(2z)^2}"
      },
      {
        "explanation": "Simplify the powers.",
        "workingOut": "y' = \\frac{k(8x^3)}{4z^2} = 2 \\left(\\frac{k x^3}{z^2}\\right)"
      },
      {
        "explanation": "Compare to the original.",
        "workingOut": "y' = 2y"
      }
    ]
  },
  {
    "id": "y10-16c-q10b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(y\\) is directly proportional to the cube of \\(x\\) and inversely proportional to the square of \\(z\\), what is the effect on \\(y\\) if \\(x\\) is increased in the ratio \\(3:2\\) and \\(z\\) is decreased in the ratio \\(1:2\\)?",
    "a": "0",
    "opts": [
      "It is multiplied by 13.5",
      "It is multiplied by 6.75",
      "It is multiplied by 27",
      "It is divided by 13.5"
    ],
    "t": "Proportionality in several variables",
    "hint": "Increasing in the ratio \\(3:2\\) means multiplying by \\(1.5\\). Decreasing in the ratio \\(1:2\\) means multiplying by \\(0.5\\).",
    "solution": "y = kx^3 / z^2\nx becomes 1.5x, z becomes 0.5z\ny' = k(1.5x)^3 / (0.5z)^2 = k(3.375x^3) / 0.25z^2 = (3.375 / 0.25)y = 13.5y. It is multiplied by 13.5.",
    "solutionSteps": [
      {
        "explanation": "Write the new values for \\(x\\) and \\(z\\).",
        "workingOut": "x' = \\frac{3}{2}x = 1.5x, quad z' = \\frac{1}{2}z = 0.5z"
      },
      {
        "explanation": "Substitute into the variation equation.",
        "workingOut": "y' = \\frac{k(1.5x)^3}{(0.5z)^2}"
      },
      {
        "explanation": "Simplify the constants.",
        "workingOut": "y' = \\frac{3.375 k x^3}{0.25 z^2}"
      },
      {
        "explanation": "Calculate the factor.",
        "workingOut": "y' = 13.5 \\left(\\frac{k x^3}{z^2}\\right) = 13.5y"
      }
    ]
  },
  {
    "id": "y10-16c-q11a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(y\\) is directly proportional to the square of \\(x\\) and inversely proportional to the square root of \\(z\\), what is the percentage increase in \\(y\\) (correct to two decimal places) if \\(x\\) and \\(z\\) are both increased by 10%?",
    "a": "15.37",
    "t": "Proportionality in several variables",
    "hint": "Substitute \\(1.1x\\) and \\(1.1z\\) into \\(y = \\frac{k x^2}{\\sqrt{z}}\\).",
    "solution": "y = kx^2 / \\sqrt{z}\nx becomes 1.1x, z becomes 1.1z\ny' = k(1.1x)^2 / \\sqrt{1.1z} = 1.21 / \\sqrt{1.1} * y\n1.21 / \\sqrt{1.1} = 1.21 / 1.0488... ≈ 1.15369\nPercentage increase = (1.15369 - 1) * 100 ≈ 15.37%",
    "solutionSteps": [
      {
        "explanation": "Write the new values for \\(x\\) and \\(z\\) after a 10% increase.",
        "workingOut": "x' = 1.1x, quad z' = 1.1z"
      },
      {
        "explanation": "Substitute into the variation equation.",
        "workingOut": "y' = \\frac{k(1.1x)^2}{\\sqrt{1.1z}}"
      },
      {
        "explanation": "Separate the constants.",
        "workingOut": "y' = \\frac{1.21}{\\sqrt{1.1}} \\left(\\frac{k x^2}{\\sqrt{z}}\\right)"
      },
      {
        "explanation": "Calculate the multiplier.",
        "workingOut": "\\frac{1.21}{\\sqrt{1.1}} \\approx 1.15369"
      },
      {
        "explanation": "Find the percentage increase.",
        "workingOut": "(1.15369 - 1) \\times 100 \\approx 15.37\\%"
      }
    ]
  },
  {
    "id": "y10-16c-q11b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(y\\) is directly proportional to the square of \\(x\\) and inversely proportional to the square root of \\(z\\), what is the percentage increase in \\(y\\) (correct to two decimal places) if \\(x\\) is increased by 20% and \\(z\\) is decreased by 15%?",
    "a": "56.19",
    "t": "Proportionality in several variables",
    "hint": "Substitute \\(1.2x\\) and \\(0.85z\\) into \\(y = \\frac{k x^2}{\\sqrt{z}}\\).",
    "solution": "y = kx^2 / \\sqrt{z}\nx becomes 1.2x, z becomes 0.85z\ny' = k(1.2x)^2 / \\sqrt{0.85z} = 1.44 / \\sqrt{0.85} * y\n1.44 / \\sqrt{0.85} ≈ 1.44 / 0.92195... ≈ 1.5619\nPercentage increase = (1.5619 - 1) * 100 ≈ 56.19%",
    "solutionSteps": [
      {
        "explanation": "Write the new values for \\(x\\) and \\(z\\).",
        "workingOut": "x' = 1.2x, quad z' = 0.85z"
      },
      {
        "explanation": "Substitute into the variation equation.",
        "workingOut": "y' = \\frac{k(1.2x)^2}{\\sqrt{0.85z}}"
      },
      {
        "explanation": "Separate the constants.",
        "workingOut": "y' = \\frac{1.44}{\\sqrt{0.85}} \\left(\\frac{k x^2}{\\sqrt{z}}\\right)"
      },
      {
        "explanation": "Calculate the multiplier.",
        "workingOut": "\\frac{1.44}{\\sqrt{0.85}} \\approx 1.5619"
      },
      {
        "explanation": "Find the percentage increase.",
        "workingOut": "(1.5619 - 1) \\times 100 \\approx 56.19\\%"
      }
    ]
  },
  {
    "id": "y10-16c-q12a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The force of attraction \\(F\\) between two particles of masses \\(m_1\\) and \\(m_2\\) that are distance \\(d\\) apart varies directly as the product of the masses, and inversely as the square of the distance between them. What is the effect on \\(F\\) if the distance between the two masses is doubled?",
    "a": "0",
    "opts": [
      "It is divided by 4",
      "It is divided by 2",
      "It is multiplied by 2",
      "It is multiplied by 4"
    ],
    "t": "Proportionality in several variables",
    "hint": "Substitute \\(2d\\) into \\(F = \\frac{k m_1 m_2}{d^2}\\).",
    "solution": "F = k m_1 m_2 / d^2\nIf d is doubled (d' = 2d):\nF' = k m_1 m_2 / (2d)^2 = k m_1 m_2 / 4d^2 = F / 4. It is divided by 4.",
    "solutionSteps": [
      {
        "explanation": "Write the variation equation for the force of attraction.",
        "workingOut": "F = \\frac{k m_1 m_2}{d^2}"
      },
      {
        "explanation": "Substitute \\(2d\\) for the distance.",
        "workingOut": "F' = \\frac{k m_1 m_2}{(2d)^2}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "F' = \\frac{k m_1 m_2}{4d^2} = \\frac{1}{4} F"
      },
      {
        "explanation": "The force is divided by 4.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y10-16c-q12b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The force of attraction \\(F\\) between two particles of masses \\(m_1\\) and \\(m_2\\) that are distance \\(d\\) apart varies directly as the product of the masses, and inversely as the square of the distance between them. What is the effect on the force if the distance between the two particles is halved and the mass of one particle is trebled?",
    "a": "0",
    "opts": [
      "It is multiplied by 12",
      "It is multiplied by 6",
      "It is multiplied by 3",
      "It is multiplied by 1.5"
    ],
    "t": "Proportionality in several variables",
    "hint": "Substitute \\(d/2\\) and \\(3m_1\\) into \\(F = \\frac{k m_1 m_2}{d^2}\\).",
    "solution": "F = k m_1 m_2 / d^2\nIf d becomes d/2 and m_1 becomes 3m_1:\nF' = k (3m_1) m_2 / (d/2)^2 = 3 k m_1 m_2 / (d^2 / 4) = 12 * (k m_1 m_2 / d^2) = 12F. It is multiplied by 12.",
    "solutionSteps": [
      {
        "explanation": "Write the new values for distance and mass.",
        "workingOut": "d' = \\frac{d}{2}, quad m_1' = 3m_1"
      },
      {
        "explanation": "Substitute into the variation equation.",
        "workingOut": "F' = \\frac{k (3m_1) m_2}{\\left(\\frac{d}{2}\\right)^2}"
      },
      {
        "explanation": "Simplify the denominator.",
        "workingOut": "F' = \\frac{3 k m_1 m_2}{\\frac{d^2}{4}}"
      },
      {
        "explanation": "Calculate the factor.",
        "workingOut": "F' = 3 \\times 4 \\left(\\frac{k m_1 m_2}{d^2}\\right) = 12F"
      }
    ]
  },
  {
    "id": "y10-16c-q13",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The value of \\(g\\), the acceleration due to gravity on the surface of a planet or moon, varies directly as the planet or moon's mass and inversely as the square of the radius of the planet. The mass of the Moon is \\(\\frac{1}{80}\\) of the mass of the Earth, and the radius of the moon is \\(\\frac{3}{11}\\) the radius of the earth. Given that the value of \\(g\\) on the surface of the earth is 9.8 m/s\\(^2\\), find the value of \\(g\\), correct to two decimal places, on the surface of the moon.",
    "a": "1.65",
    "t": "Proportionality in several variables",
    "hint": "Set up \\(g_E = \\frac{k M_E}{R_E^2} = 9.8\\), then express \\(g_M\\) in terms of \\(M_E\\) and \\(R_E\\).",
    "solution": "g = kM / R^2\nEarth: g_E = kM_E / R_E^2 = 9.8\nMoon: M_M = (1/80)M_E, R_M = (3/11)R_E\ng_M = k(1/80 M_E) / (3/11 R_E)^2\ng_M = (1/80) / (9/121) * (kM_E / R_E^2)\ng_M = (121 / 720) * 9.8\ng_M = 1185.8 / 720 ≈ 1.6469... ≈ 1.65 m/s^2",
    "solutionSteps": [
      {
        "explanation": "Write the variation equation for gravity.",
        "workingOut": "g = \\frac{kM}{R^2}"
      },
      {
        "explanation": "Write the equation for Earth.",
        "workingOut": "g_E = \\frac{kM_E}{R_E^2} = 9.8"
      },
      {
        "explanation": "Write the equation for the Moon using Earth's mass and radius.",
        "workingOut": "g_M = \\frac{k\\left(\\frac{1}{80}M_E\\right)}{\\left(\\frac{3}{11}R_E\\right)^2}"
      },
      {
        "explanation": "Separate the constants.",
        "workingOut": "g_M = \\frac{\\frac{1}{80}}{\\frac{9}{121}} \\left(\\frac{kM_E}{R_E^2}\\right) = \\frac{121}{720} g_E"
      },
      {
        "explanation": "Substitute \\(g_E = 9.8\\) and calculate.",
        "workingOut": "g_M = \\frac{121}{720} \\times 9.8 \\approx 1.6469 \\dots \\approx 1.65"
      }
    ]
  }
];
