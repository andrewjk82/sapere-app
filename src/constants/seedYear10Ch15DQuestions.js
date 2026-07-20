export const Y10_CH15D_QUESTIONS = [
  {
    "id": "y10-15d-q1",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "200 people were surveyed about their attitudes to the use of headgear in professional boxing and classified according to sex. The results are shown in the table below.\n\nSurvey question: Should the use of headgear be mandatory in professional boxing?\n\n\\(\\begin{array}{l|cc|c} & \\mathrm{Male} & \\mathrm{Female} & \\mathrm{Total} \\\\ \\hline \\mathrm{Yes} & 35 & 45 & 80 \\\\ \\mathrm{No} & 65 & 55 & 120 \\\\ \\hline \\mathrm{Total} & 100 & 100 & 200 \\end{array}\\)\n\nIs attitude to the use of headgear in professional boxing independent of sex?",
    "answer": "No.\nP(Yes and Male) = 7/40 but P(Yes) x P(Male) = 8/40.\nSince these are not equal, attitude is not independent of sex.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "No.\nP(Yes and Male) = 7/40 but P(Yes) x P(Male) = 8/40.\nSince these are not equal, attitude is not independent of sex.",
    "solutionSteps": [
      {
        "explanation": "For two events to be independent, the condition \\(P(A \\cap B) = P(A) \\times P(B)\\) must hold. We will test whether the events 'answering Yes' and 'being Male' are independent.",
        "workingOut": "No.\nP(Yes and Male) = 7/40 but P(Yes) x P(Male) = 8/40.\nSince these are not equal, attitude is not independent of sex.",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(P(\\mathrm{Yes}) \\times P(\\mathrm{Male})\\) and compare with \\(P(\\mathrm{Yes} \\cap \\mathrm{Male})\\).",
        "workingOut": "\\(P(\\mathrm{Yes}) \\times P(\\mathrm{Male}) = \\frac{2}{5} \\times \\frac{1}{2} = \\frac{1}{5} = \\frac{8}{40}\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(\\frac{7}{40} \\neq \\frac{8}{40}\\), the condition for independence is not satisfied. Therefore, attitude to headgear is not independent of sex.",
        "workingOut": "\\(\\frac{7}{40} \\neq \\frac{8}{40}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-15d-q2",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "90 adults were surveyed about whether they play video games more than once a week and their age category was recorded ('under 25' and '25 years or older'). The results are shown below.\n\n\\(\\begin{array}{l|cc|c} & < 25 & \\geq 25 & \\mathrm{Total} \\\\ \\hline \\mathrm{Yes} & 40 & 20 & 60 \\\\ \\mathrm{No} & 10 & 20 & 30 \\\\ \\hline \\mathrm{Total} & 50 & 40 & 90 \\end{array}\\)\n\nIs playing video games multiple times a week independent of age category?",
    "answer": "No.\nP(Yes and Under 25) = 4/9, but P(Yes) x P(Under 25) = 10/27.\nSince 12/27 does not equal 10/27, playing video games is not independent of age category.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "No.\nP(Yes and Under 25) = 4/9, but P(Yes) x P(Under 25) = 10/27.\nSince 12/27 does not equal 10/27, playing video games is not independent of age category.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Independent events: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{Yes}) = \\frac{60}{90} = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(< 25) = \\frac{50}{90} = \\frac{5}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{Yes} \\cap {<}25) = \\frac{40}{90} = \\frac{4}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: No.\nP(Yes and Under 25) = 4/9, but P(Yes) x P(Under 25) = 10/27.\nSince 12/27 does not equal 10/27, playing video games is not independent of age category.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "No.\nP(Yes and Under 25) = 4/9, but P(Yes) x P(Under 25) = 10/27.\nSince 12/27 does not equal 10/27, playing video games is not independent of age category.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-15d-q3a",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "250 road accidents recorded by the Traffic Authority were studied in terms of vehicle speed at the time of collision, relative to the local speed limit, and the accident severity. The results are shown below.\n\n\\(\\begin{array}{l|ccc|c} & (1) & (2) & (3) & \\mathrm{Total} \\\\ \\hline \\mathrm{Minor} & 52 & 105 & 23 & 180 \\\\ \\mathrm{Major} & 3 & 40 & 27 & 70 \\\\ \\hline \\mathrm{Total} & 55 & 145 & 50 & 250 \\end{array}\\)\n\nWhere: (1) = Not speeding, (2) = Up to 10 km/h over the limit, (3) = More than 10 km/h over the limit.\nFind the probability that a randomly selected accident in the study is classed as 'major'.",
    "opts": [
      "\\(-0.28\\)",
      "\\(-0.72\\)",
      "\\(7/25\\)",
      "\\(1.28\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(7/25\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Independent events: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(n(\\mathrm{Major}) = 70\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(n(S) = 250\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{Major}) = \\frac{70}{250} = \\frac{7}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 7/25. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(7/25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15d-q3b",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "250 road accidents recorded by the Traffic Authority were studied in terms of vehicle speed at the time of collision, relative to the local speed limit, and the accident severity. The results are shown below.\n\n\\(\\begin{array}{l|ccc|c} & (1) & (2) & (3) & \\mathrm{Total} \\\\ \\hline \\mathrm{Minor} & 52 & 105 & 23 & 180 \\\\ \\mathrm{Major} & 3 & 40 & 27 & 70 \\\\ \\hline \\mathrm{Total} & 55 & 145 & 50 & 250 \\end{array}\\)\n\nWhere: (1) = Not speeding, (2) = Up to 10 km/h over the limit, (3) = More than 10 km/h over the limit.\nFind the probability that an accident was classed as major given that it collided at a speed greater than 10 km/h over the local speed limit.",
    "opts": [
      "\\(-0.45999999999999996\\)",
      "\\(-0.54\\)",
      "\\(27/50\\)",
      "\\(1.54\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(27/50\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Independent events: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(n({>}10\\;\\mathrm{over}) = 50\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(n(\\mathrm{Major} \\cap {>}10\\;\\mathrm{over}) = 27\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{Major} \\mid {>}10\\;\\mathrm{over}) = \\frac{27}{50}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 27/50. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(27/50\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15d-q3c",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "250 road accidents recorded by the Traffic Authority were studied in terms of vehicle speed at the time of collision, relative to the local speed limit, and the accident severity. The results are shown below.\n\n\\(\\begin{array}{l|ccc|c} & (1) & (2) & (3) & \\mathrm{Total} \\\\ \\hline \\mathrm{Minor} & 52 & 105 & 23 & 180 \\\\ \\mathrm{Major} & 3 & 40 & 27 & 70 \\\\ \\hline \\mathrm{Total} & 55 & 145 & 50 & 250 \\end{array}\\)\n\nWhere: (1) = Not speeding, (2) = Up to 10 km/h over the limit, (3) = More than 10 km/h over the limit.\nHence, explain why accidents in this study classed as 'major' are not independent of the event that they were travelling at a speed greater than 10 km/h over the limit.",
    "answer": "P(Major) = 7/25 = 14/50, but P(Major | > 10 over) = 27/50.\nSince 14/50 does not equal 27/50, the events are not independent.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "P(Major) = 7/25 = 14/50, but P(Major | > 10 over) = 27/50.\nSince 14/50 does not equal 27/50, the events are not independent.",
    "solutionSteps": [
      {
        "explanation": "For independence, we require \\(P(\\mathrm{Major} \\mid {>}10\\;\\mathrm{over}) = P(\\mathrm{Major})\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "P(Major) = 7/25 = 14/50, but P(Major | > 10 over) = 27/50.\nSince 14/50 does not equal 27/50, the events are not independent.",
        "graphData": null
      },
      {
        "explanation": "From part (a), \\(P(\\mathrm{Major}) = \\frac{7}{25}\\). Convert to a denominator of 50 for comparison. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(P(\\mathrm{Major}) = \\frac{7}{25} = \\frac{14}{50}\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(\\frac{14}{50} \\neq \\frac{27}{50}\\), the condition for independence fails. This means the severity of an accident is not independent of whether the vehicle was travelling more than 10 km/h over the speed limit.",
        "workingOut": "\\(\\frac{14}{50} \\neq \\frac{27}{50}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-15d-q3d",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "250 road accidents recorded by the Traffic Authority were studied in terms of vehicle speed at the time of collision, relative to the local speed limit, and the accident severity. The results are shown below.\n\n\\(\\begin{array}{l|ccc|c} & (1) & (2) & (3) & \\mathrm{Total} \\\\ \\hline \\mathrm{Minor} & 52 & 105 & 23 & 180 \\\\ \\mathrm{Major} & 3 & 40 & 27 & 70 \\\\ \\hline \\mathrm{Total} & 55 & 145 & 50 & 250 \\end{array}\\)\n\nWhere: (1) = Not speeding, (2) = Up to 10 km/h over the limit, (3) = More than 10 km/h over the limit.\nBy focussing on the events, 'Minor' accident and 'Not speeding', conduct an alternative test to that used in part c to show that they are also not independent events.",
    "answer": "P(Minor and Not speeding) = 26/125, P(Minor) x P(Not speeding) = 99/625 = 130/625 vs 99/625.\nNot equal, so not independent.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "P(Minor and Not speeding) = 26/125, P(Minor) x P(Not speeding) = 99/625 = 130/625 vs 99/625.\nNot equal, so not independent.",
    "solutionSteps": [
      {
        "explanation": "For independence, we need \\(P(\\mathrm{Minor} \\cap \\mathrm{Not\\;speeding}) = P(\\mathrm{Minor}) \\times P(\\mathrm{Not\\;speeding})\\).",
        "workingOut": "P(Minor and Not speeding) = 26/125, P(Minor) x P(Not speeding) = 99/625 = 130/625 vs 99/625.\nNot equal, so not independent.",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(P(\\mathrm{Minor})\\) and \\(P(\\mathrm{Not\\;speeding})\\) from the table totals. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(P(\\mathrm{Minor}) = \\frac{180}{250} = \\frac{18}{25}, \\quad P(\\mathrm{Not\\;speeding}) = \\frac{55}{250} = \\frac{11}{50}\\)",
        "graphData": null
      },
      {
        "explanation": "Convert \\(\\frac{26}{125}\\) to the same denominator: \\(\\frac{26}{125} = \\frac{130}{625}\\). Since \\(\\frac{130}{625} \\neq \\frac{99}{625}\\), the events 'Minor' and 'Not speeding' are not independent.",
        "workingOut": "\\(\\frac{26}{125} = \\frac{130}{625} \\neq \\frac{99}{625}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-15d-q4a",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The probability that a person cycles to work is \\(\\frac{2}{5}\\), and the probability that a person owns a pet is \\(\\frac{1}{4}\\). If these events are independent, find the following probabilities.\nA person cycles to work and owns a pet.",
    "opts": [
      "\\(-0.1\\)",
      "\\(-0.9\\)",
      "\\(1/10\\)",
      "\\(1.1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(1/10\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Independent events: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(C \\cap P) = P(C) \\times P(P)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(= \\frac{2}{5} \\times \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{2}{20} = \\frac{1}{10}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/10. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15d-q4b",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The probability that a person cycles to work is \\(\\frac{2}{5}\\), and the probability that a person owns a pet is \\(\\frac{1}{4}\\). If these events are independent, find the following probabilities.\nA person does not own a pet but cycles to work.",
    "opts": [
      "\\(-0.3\\)",
      "\\(-0.7\\)",
      "\\(3/10\\)",
      "\\(1.3\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(3/10\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Independent events: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(P') = 1 - \\frac{1}{4} = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(C \\cap P') = \\frac{2}{5} \\times \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{6}{20} = \\frac{3}{10}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3/10. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(3/10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15d-q4c",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The probability that a person cycles to work is \\(\\frac{2}{5}\\), and the probability that a person owns a pet is \\(\\frac{1}{4}\\). If these events are independent, find the following probabilities.\nA person does not own a pet and does not cycle to work.",
    "opts": [
      "\\(-0.45\\)",
      "\\(-0.55\\)",
      "\\(9/20\\)",
      "\\(1.45\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(9/20\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Independent events: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(C') = 1 - \\frac{2}{5} = \\frac{3}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(C' \\cap P') = \\frac{3}{5} \\times \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{9}{20}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 9/20. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(9/20\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15d-q4d",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The probability that a person cycles to work is \\(\\frac{2}{5}\\), and the probability that a person owns a pet is \\(\\frac{1}{4}\\). If these events are independent, find the following probabilities.\nA person cycles to work or owns a pet.",
    "opts": [
      "\\(-0.44999999999999996\\)",
      "\\(-0.55\\)",
      "\\(11/20\\)",
      "\\(1.55\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(11/20\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Independent events: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(C \\cup P) = P(C) + P(P) - P(C \\cap P)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(= \\frac{2}{5} + \\frac{1}{4} - \\frac{1}{10}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{8}{20} + \\frac{5}{20} - \\frac{2}{20}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 11/20. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(11/20\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15d-q5",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Events \\(A\\) and \\(B\\) are shown in the Venn diagram. Show that \\(A\\) and \\(B\\) are independent.",
    "answer": "P(A) = 2/5, P(B) = 3/10, P(A \\cap B) = 3/25.\nP(A) x P(B) = 2/5 x 3/10 = 6/50 = 3/25 = P(A \\cap B).\nTherefore A and B are independent.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "P(A) = 2/5, P(B) = 3/10, P(A \\cap B) = 3/25.\nP(A) x P(B) = 2/5 x 3/10 = 6/50 = 3/25 = P(A \\cap B).\nTherefore A and B are independent.",
    "solutionSteps": [
      {
        "explanation": "First, find the total number of outcomes in the sample space by adding all regions of the Venn diagram.",
        "workingOut": "\\(n(S) = 14 + 6 + 9 + 21 = 50\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(P(A)\\). Event \\(A\\) includes both the 'A only' region and the intersection. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(P(A) = \\frac{14 + 6}{50} = \\frac{20}{50} = \\frac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(P(B)\\). Event \\(B\\) includes both the 'B only' region and the intersection. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(P(B) = \\frac{6 + 9}{50} = \\frac{15}{50} = \\frac{3}{10}\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(P(A \\cap B) = \\frac{3}{25} = P(A) \\times P(B)\\), the condition for independence is satisfied. Therefore, events \\(A\\) and \\(B\\) are independent.",
        "workingOut": "\\(P(A \\cap B) = P(A) \\times P(B) = \\frac{3}{25}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 260,
        "boundingbox": [
          -0.5,
          6.5,
          11.5,
          -0.5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "elements": [
          {
            "type": "point",
            "id": "r1",
            "coords": [
              0,
              0
            ],
            "name": "",
            "size": 0
          },
          {
            "type": "point",
            "id": "r2",
            "coords": [
              11,
              0
            ],
            "name": "",
            "size": 0
          },
          {
            "type": "point",
            "id": "r3",
            "coords": [
              11,
              6
            ],
            "name": "",
            "size": 0
          },
          {
            "type": "point",
            "id": "r4",
            "coords": [
              0,
              6
            ],
            "name": "",
            "size": 0
          },
          {
            "type": "segment",
            "from": "r1",
            "to": "r2",
            "color": "black",
            "strokeWidth": 1.5
          },
          {
            "type": "segment",
            "from": "r2",
            "to": "r3",
            "color": "black",
            "strokeWidth": 1.5
          },
          {
            "type": "segment",
            "from": "r3",
            "to": "r4",
            "color": "black",
            "strokeWidth": 1.5
          },
          {
            "type": "segment",
            "from": "r4",
            "to": "r1",
            "color": "black",
            "strokeWidth": 1.5
          },
          {
            "type": "circle",
            "id": "cA",
            "center": [
              4,
              3
            ],
            "radius": 2.3,
            "color": "blue",
            "strokeWidth": 1.5
          },
          {
            "type": "circle",
            "id": "cB",
            "center": [
              7,
              3
            ],
            "radius": 2.3,
            "color": "blue",
            "strokeWidth": 1.5
          },
          {
            "type": "text",
            "coords": [
              2.8,
              5.2
            ],
            "content": "A",
            "fontSize": 16
          },
          {
            "type": "text",
            "coords": [
              8.2,
              5.2
            ],
            "content": "B",
            "fontSize": 16
          },
          {
            "type": "text",
            "coords": [
              3,
              3
            ],
            "content": "14",
            "fontSize": 14
          },
          {
            "type": "text",
            "coords": [
              5.5,
              3
            ],
            "content": "6",
            "fontSize": 14
          },
          {
            "type": "text",
            "coords": [
              8,
              3
            ],
            "content": "9",
            "fontSize": 14
          },
          {
            "type": "text",
            "coords": [
              9.5,
              1
            ],
            "content": "21",
            "fontSize": 14
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-15d-q6a",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Consider rolling a die on two separate occasions. Define event \\(A\\) as 'rolling a 3 on the first throw' and event \\(B\\) as 'rolling at least 9 as the sum of the two numbers shown'.\nCreate a table (array) showing the sample space of a die rolled twice.",
    "answer": "A 6 by 6 table showing all 36 possible outcomes and their sums, ranging from 2 to 12.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "A 6 by 6 table showing all 36 possible outcomes and their sums, ranging from 2 to 12.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Independent events: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\begin{array}{c|cccccc} + & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ 3 & 4 & 5 & 6 & 7 & 8 & 9 \\\\ 4 & 5 & 6 & 7 & 8 & 9 & 10 \\\\ 5 & 6 & 7 & 8 & 9 & 10 & 11 \\\\ 6 & 7 & 8 & 9 & 10 & 11 & 12 \\end{array}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(n(S) = 36\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "A 6 by 6 table showing all 36 possible outcomes and their sums, ranging from 2 to 12.",
        "graphData": null
      },
      {
        "explanation": "Final answer: A 6 by 6 table showing all 36 possible outcomes and their sums, ranging from 2 to 12.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "A 6 by 6 table showing all 36 possible outcomes and their sums, ranging from 2 to 12.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-15d-q6b",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Consider rolling a die on two separate occasions. Define event \\(A\\) as 'rolling a 3 on the first throw' and event \\(B\\) as 'rolling at least 9 as the sum of the two numbers shown'.\nDetermine whether events \\(A\\) and \\(B\\) are independent.",
    "answer": "Not independent.\nP(A \\cap B) = 1/36 = 3/108, but P(A) x P(B) = 1/6 x 5/18 = 5/108.\nSince 3/108 is not equal to 5/108, A and B are not independent.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Not independent.\nP(A \\cap B) = 1/36 = 3/108, but P(A) x P(B) = 1/6 x 5/18 = 5/108.\nSince 3/108 is not equal to 5/108, A and B are not independent.",
    "solutionSteps": [
      {
        "explanation": "Calculate \\(P(A)\\). Event \\(A\\) is rolling a 3 on the first throw. There are 6 outcomes where the first die is 3.",
        "workingOut": "\\(P(A) = \\frac{6}{36} = \\frac{1}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "List all outcomes where the sum is at least 9 (event \\(B\\)): (3,6), (4,5), (4,6), (5,4), (5,5), (5,6), (6,3), (6,4), (6,5), (6,6).",
        "workingOut": "\\(n(B) = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Find \\(P(A \\cap B)\\): outcomes where the first die is 3 AND the sum is at least 9. Only the outcome (3, 6) satisfies both conditions, since \\(3 + 6 = 9\\).",
        "workingOut": "\\(A \\cap B = {(3, 6)}, \\quad P(A \\cap B) = \\frac{1}{36}\\)",
        "graphData": null
      },
      {
        "explanation": "Convert \\(\\frac{1}{36}\\) to the same denominator: \\(\\frac{1}{36} = \\frac{3}{108}\\). Since \\(\\frac{3}{108} \\neq \\frac{5}{108}\\), events \\(A\\) and \\(B\\) are not independent.",
        "workingOut": "\\(\\frac{1}{36} = \\frac{3}{108} \\neq \\frac{5}{108}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-15d-q6c",
    "topicId": "y10-15d",
    "c": "15D",
    "t": "Independent events",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Consider rolling a die on two separate occasions. Define event \\(A\\) as 'rolling a 3 on the first throw' and event \\(B\\) as 'rolling at least 9 as the sum of the two numbers shown'.\nDetermine whether events \\(A\\) and \\(B\\) are mutually exclusive.",
    "answer": "Not mutually exclusive.\nThe outcome (3, 6) belongs to both A and B, so A and B can occur simultaneously.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Not mutually exclusive.\nThe outcome (3, 6) belongs to both A and B, so A and B can occur simultaneously.",
    "solutionSteps": [
      {
        "explanation": "Two events are mutually exclusive if they cannot occur at the same time, i.e., \\(A \\cap B = \\emptyset\\).",
        "workingOut": "Not mutually exclusive.\nThe outcome (3, 6) belongs to both A and B, so A and B can occur simultaneously.",
        "graphData": null
      },
      {
        "explanation": "Check if there is any outcome that belongs to both \\(A\\) and \\(B\\). Event \\(A\\) requires the first die to be 3. Event \\(B\\) requires the sum to be at least 9. The outcome (3, 6) has a first die of 3 and a sum of \\(3 + 6 = 9 \\geq 9\\).",
        "workingOut": "\\(A \\cap B = {(3, 6)}\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(A \\cap B = {(3, 6)} \\neq \\emptyset\\), the events can occur at the same time. Therefore, events \\(A\\) and \\(B\\) are not mutually exclusive.",
        "workingOut": "\\(A \\cap B \\neq \\emptyset\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  }
];
