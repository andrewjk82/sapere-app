export const Y10_CH15D_QUESTIONS = [
  // Q1
  {
    "id": "y10-15d-q1",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "200 people were surveyed about their attitudes to the use of headgear in professional boxing and classified according to sex. The results are shown in the table below.\n\nSurvey question: Should the use of headgear be mandatory in professional boxing?\n\n\\(\\begin{array}{l|cc|c} & \\mathrm{Male} & \\mathrm{Female} & \\mathrm{Total} \\\\ \\hline \\mathrm{Yes} & 35 & 45 & 80 \\\\ \\mathrm{No} & 65 & 55 & 120 \\\\ \\hline \\mathrm{Total} & 100 & 100 & 200 \\end{array}\\)\n\nIs attitude to the use of headgear in professional boxing independent of sex?",
    "a": "No. P(Yes and Male) = 7/40 but P(Yes) x P(Male) = 8/40. Since these are not equal, attitude is not independent of sex.",
    "solution": "For independence, we require P(A \\cap B) = P(A) \\times P(B). Here, P(Yes \\cap Male) = 35/200 = 7/40. P(Yes) = 80/200 = 2/5, and P(Male) = 100/200 = 1/2. P(Yes) \\times P(Male) = 2/5 \\times 1/2 = 1/5 = 8/40. Since 7/40 \\neq 8/40, attitude to headgear is not independent of sex.",
    "solutionSteps": [
      {
        "explanation": "For two events to be independent, the condition \\(P(A \\cap B) = P(A) \\times P(B)\\) must hold. We will test whether the events 'answering Yes' and 'being Male' are independent.",
        "workingOut": ""
      },
      {
        "explanation": "Calculate \\(P(\\mathrm{Yes})\\) from the table totals.",
        "workingOut": "P(\\mathrm{Yes}) = \\frac{80}{200} = \\frac{2}{5}"
      },
      {
        "explanation": "Calculate \\(P(\\mathrm{Male})\\) from the table totals.",
        "workingOut": "P(\\mathrm{Male}) = \\frac{100}{200} = \\frac{1}{2}"
      },
      {
        "explanation": "Find \\(P(\\mathrm{Yes} \\cap \\mathrm{Male})\\) directly from the table cell.",
        "workingOut": "P(\\mathrm{Yes} \\cap \\mathrm{Male}) = \\frac{35}{200} = \\frac{7}{40}"
      },
      {
        "explanation": "Calculate \\(P(\\mathrm{Yes}) \\times P(\\mathrm{Male})\\) and compare with \\(P(\\mathrm{Yes} \\cap \\mathrm{Male})\\).",
        "workingOut": "P(\\mathrm{Yes}) \\times P(\\mathrm{Male}) = \\frac{2}{5} \\times \\frac{1}{2} = \\frac{1}{5} = \\frac{8}{40}"
      },
      {
        "explanation": "Since \\(\\frac{7}{40} \\neq \\frac{8}{40}\\), the condition for independence is not satisfied. Therefore, attitude to headgear is not independent of sex.",
        "workingOut": "\\frac{7}{40} \\neq \\frac{8}{40}"
      }
    ],
    "t": "Independent events"
  },
  // Q2
  {
    "id": "y10-15d-q2",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "90 adults were surveyed about whether they play video games more than once a week and their age category was recorded ('under 25' and '25 years or older'). The results are shown below.\n\n\\(\\begin{array}{l|cc|c} & < 25 & \\geq 25 & \\mathrm{Total} \\\\ \\hline \\mathrm{Yes} & 40 & 20 & 60 \\\\ \\mathrm{No} & 10 & 20 & 30 \\\\ \\hline \\mathrm{Total} & 50 & 40 & 90 \\end{array}\\)\n\nIs playing video games multiple times a week independent of age category?",
    "a": "No. P(Yes and Under 25) = 4/9, but P(Yes) x P(Under 25) = 10/27. Since 12/27 does not equal 10/27, playing video games is not independent of age category.",
    "solution": "For independence, we need P(A \\cap B) = P(A) \\times P(B). P(Yes) = 60/90 = 2/3. P(Under 25) = 50/90 = 5/9. P(Yes \\cap Under 25) = 40/90 = 4/9 = 12/27. P(Yes) \\times P(Under 25) = 2/3 \\times 5/9 = 10/27. Since 12/27 \\neq 10/27, playing video games is not independent of age category.",
    "solutionSteps": [
      {
        "explanation": "For independence, we need \\(P(A \\cap B) = P(A) \\times P(B)\\). We will test the events 'plays video games (Yes)' and 'under 25'.",
        "workingOut": ""
      },
      {
        "explanation": "Calculate \\(P(\\mathrm{Yes})\\) from the table totals.",
        "workingOut": "P(\\mathrm{Yes}) = \\frac{60}{90} = \\frac{2}{3}"
      },
      {
        "explanation": "Calculate \\(P(< 25)\\) from the table totals.",
        "workingOut": "P(< 25) = \\frac{50}{90} = \\frac{5}{9}"
      },
      {
        "explanation": "Find \\(P(\\mathrm{Yes} \\cap < 25)\\) from the table cell.",
        "workingOut": "P(\\mathrm{Yes} \\cap {<}25) = \\frac{40}{90} = \\frac{4}{9}"
      },
      {
        "explanation": "Calculate \\(P(\\mathrm{Yes}) \\times P(< 25)\\) and compare.",
        "workingOut": "P(\\mathrm{Yes}) \\times P({<}25) = \\frac{2}{3} \\times \\frac{5}{9} = \\frac{10}{27}"
      },
      {
        "explanation": "Convert \\(\\frac{4}{9}\\) to the same denominator for comparison: \\(\\frac{4}{9} = \\frac{12}{27}\\). Since \\(\\frac{12}{27} \\neq \\frac{10}{27}\\), the events are not independent. Therefore, playing video games is not independent of age category.",
        "workingOut": "\\frac{4}{9} = \\frac{12}{27} \\neq \\frac{10}{27}"
      }
    ],
    "t": "Independent events"
  },
  // Q3
  {
    "id": "y10-15d-q3",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "250 road accidents recorded by the Traffic Authority were studied in terms of vehicle speed at the time of collision, relative to the local speed limit, and the accident severity. The results are shown below.\n\n\\(\\begin{array}{l|ccc|c} & (1) & (2) & (3) & \\mathrm{Total} \\\\ \\hline \\mathrm{Minor} & 52 & 105 & 23 & 180 \\\\ \\mathrm{Major} & 3 & 40 & 27 & 70 \\\\ \\hline \\mathrm{Total} & 55 & 145 & 50 & 250 \\end{array}\\)\n\nWhere: (1) = Not speeding, (2) = Up to 10 km/h over the limit, (3) = More than 10 km/h over the limit.",
    "a": "7/25",
    "t": "Independent events",
    "subQuestions": [
      {
        "id": "y10-15d-q3a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Find the probability that a randomly selected accident in the study is classed as 'major'.",
        "a": "7/25",
        "solutionSteps": [
          {
            "explanation": "Identify the total number of 'major' accidents from the table.",
            "workingOut": "n(\\mathrm{Major}) = 70"
          },
          {
            "explanation": "The total number of accidents in the study is 250.",
            "workingOut": "n(S) = 250"
          },
          {
            "explanation": "Calculate the probability and simplify.",
            "workingOut": "P(\\mathrm{Major}) = \\frac{70}{250} = \\frac{7}{25}"
          }
        ],
        "t": "Independent events"
      },
      {
        "id": "y10-15d-q3b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Find the probability that an accident was classed as major given that it collided at a speed greater than 10 km/h over the local speed limit.",
        "a": "27/50",
        "solutionSteps": [
          {
            "explanation": "Identify the conditional event: the accident collided at more than 10 km/h over the limit. The total number of such accidents is found from column (3).",
            "workingOut": "n({>}10\\;\\mathrm{over}) = 50"
          },
          {
            "explanation": "Of these 50 accidents, find the number that were classed as major.",
            "workingOut": "n(\\mathrm{Major} \\cap {>}10\\;\\mathrm{over}) = 27"
          },
          {
            "explanation": "Calculate the conditional probability.",
            "workingOut": "P(\\mathrm{Major} \\mid {>}10\\;\\mathrm{over}) = \\frac{27}{50}"
          }
        ],
        "t": "Independent events"
      },
      {
        "id": "y10-15d-q3c",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Hence, explain why accidents in this study classed as 'major' are not independent of the event that they were travelling at a speed greater than 10 km/h over the limit.",
        "a": "P(Major) = 7/25 = 14/50, but P(Major | > 10 over) = 27/50. Since 14/50 does not equal 27/50, the events are not independent.",
        "solution": "If the events were independent, then P(Major | > 10 over) would equal P(Major). From part (a), P(Major) = 7/25 = 14/50. From part (b), P(Major | > 10 over) = 27/50. Since 14/50 is not equal to 27/50, the probability of a major accident depends on whether the vehicle was travelling more than 10 km/h over the limit. Therefore, the events are not independent.",
        "solutionSteps": [
          {
            "explanation": "For independence, we require \\(P(\\mathrm{Major} \\mid {>}10\\;\\mathrm{over}) = P(\\mathrm{Major})\\).",
            "workingOut": ""
          },
          {
            "explanation": "From part (a), \\(P(\\mathrm{Major}) = \\frac{7}{25}\\). Convert to a denominator of 50 for comparison.",
            "workingOut": "P(\\mathrm{Major}) = \\frac{7}{25} = \\frac{14}{50}"
          },
          {
            "explanation": "From part (b), \\(P(\\mathrm{Major} \\mid {>}10\\;\\mathrm{over}) = \\frac{27}{50}\\).",
            "workingOut": "P(\\mathrm{Major} \\mid {>}10\\;\\mathrm{over}) = \\frac{27}{50}"
          },
          {
            "explanation": "Since \\(\\frac{14}{50} \\neq \\frac{27}{50}\\), the condition for independence fails. This means the severity of an accident is not independent of whether the vehicle was travelling more than 10 km/h over the speed limit.",
            "workingOut": "\\frac{14}{50} \\neq \\frac{27}{50}"
          }
        ],
        "t": "Independent events"
      },
      {
        "id": "y10-15d-q3d",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "By focussing on the events, 'Minor' accident and 'Not speeding', conduct an alternative test to that used in part c to show that they are also not independent events.",
        "a": "P(Minor and Not speeding) = 26/125, P(Minor) x P(Not speeding) = 99/625 = 130/625 vs 99/625. Not equal, so not independent.",
        "solution": "P(Minor) = 180/250 = 18/25. P(Not speeding) = 55/250 = 11/50. P(Minor \\cap Not speeding) = 52/250 = 26/125 = 130/625. P(Minor) \\times P(Not speeding) = 18/25 \\times 11/50 = 198/1250 = 99/625. Since 130/625 \\neq 99/625, these events are not independent.",
        "solutionSteps": [
          {
            "explanation": "For independence, we need \\(P(\\mathrm{Minor} \\cap \\mathrm{Not\\;speeding}) = P(\\mathrm{Minor}) \\times P(\\mathrm{Not\\;speeding})\\).",
            "workingOut": ""
          },
          {
            "explanation": "Calculate \\(P(\\mathrm{Minor})\\) and \\(P(\\mathrm{Not\\;speeding})\\) from the table totals.",
            "workingOut": "P(\\mathrm{Minor}) = \\frac{180}{250} = \\frac{18}{25}, \\quad P(\\mathrm{Not\\;speeding}) = \\frac{55}{250} = \\frac{11}{50}"
          },
          {
            "explanation": "Find \\(P(\\mathrm{Minor} \\cap \\mathrm{Not\\;speeding})\\) from the table cell.",
            "workingOut": "P(\\mathrm{Minor} \\cap \\mathrm{Not\\;speeding}) = \\frac{52}{250} = \\frac{26}{125}"
          },
          {
            "explanation": "Calculate \\(P(\\mathrm{Minor}) \\times P(\\mathrm{Not\\;speeding})\\).",
            "workingOut": "P(\\mathrm{Minor}) \\times P(\\mathrm{Not\\;speeding}) = \\frac{18}{25} \\times \\frac{11}{50} = \\frac{198}{1250} = \\frac{99}{625}"
          },
          {
            "explanation": "Convert \\(\\frac{26}{125}\\) to the same denominator: \\(\\frac{26}{125} = \\frac{130}{625}\\). Since \\(\\frac{130}{625} \\neq \\frac{99}{625}\\), the events 'Minor' and 'Not speeding' are not independent.",
            "workingOut": "\\frac{26}{125} = \\frac{130}{625} \\neq \\frac{99}{625}"
          }
        ],
        "t": "Independent events"
      }
    ]
  },
  // Q4
  {
    "id": "y10-15d-q4",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The probability that a person cycles to work is \\(\\frac{2}{5}\\), and the probability that a person owns a pet is \\(\\frac{1}{4}\\). If these events are independent, find the following probabilities.",
    "a": "1/10",
    "t": "Independent events",
    "subQuestions": [
      {
        "id": "y10-15d-q4a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "A person cycles to work and owns a pet.",
        "a": "1/10",
        "solutionSteps": [
          {
            "explanation": "Since the events are independent, \\(P(C \\cap P) = P(C) \\times P(P)\\).",
            "workingOut": "P(C \\cap P) = P(C) \\times P(P)"
          },
          {
            "explanation": "Substitute the given probability values.",
            "workingOut": "= \\frac{2}{5} \\times \\frac{1}{4}"
          },
          {
            "explanation": "Multiply the fractions to obtain the final answer.",
            "workingOut": "= \\frac{2}{20} = \\frac{1}{10}"
          }
        ],
        "t": "Independent events"
      },
      {
        "id": "y10-15d-q4b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "A person does not own a pet but cycles to work.",
        "a": "3/10",
        "solutionSteps": [
          {
            "explanation": "The probability of not owning a pet is \\(P(P') = 1 - P(P)\\).",
            "workingOut": "P(P') = 1 - \\frac{1}{4} = \\frac{3}{4}"
          },
          {
            "explanation": "Since the events are independent, \\(P(C \\cap P') = P(C) \\times P(P')\\).",
            "workingOut": "P(C \\cap P') = \\frac{2}{5} \\times \\frac{3}{4}"
          },
          {
            "explanation": "Multiply the fractions.",
            "workingOut": "= \\frac{6}{20} = \\frac{3}{10}"
          }
        ],
        "t": "Independent events"
      },
      {
        "id": "y10-15d-q4c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "A person does not own a pet and does not cycle to work.",
        "a": "9/20",
        "solutionSteps": [
          {
            "explanation": "The probability of not cycling is \\(P(C') = 1 - P(C)\\).",
            "workingOut": "P(C') = 1 - \\frac{2}{5} = \\frac{3}{5}"
          },
          {
            "explanation": "Since the events are independent, their complements are also independent: \\(P(C' \\cap P') = P(C') \\times P(P')\\).",
            "workingOut": "P(C' \\cap P') = \\frac{3}{5} \\times \\frac{3}{4}"
          },
          {
            "explanation": "Multiply the fractions.",
            "workingOut": "= \\frac{9}{20}"
          }
        ],
        "t": "Independent events"
      },
      {
        "id": "y10-15d-q4d",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "A person cycles to work or owns a pet.",
        "a": "11/20",
        "solutionSteps": [
          {
            "explanation": "Use the addition rule for probability: \\(P(C \\cup P) = P(C) + P(P) - P(C \\cap P)\\).",
            "workingOut": "P(C \\cup P) = P(C) + P(P) - P(C \\cap P)"
          },
          {
            "explanation": "Substitute the known values. From part (a), \\(P(C \\cap P) = \\frac{1}{10}\\).",
            "workingOut": "= \\frac{2}{5} + \\frac{1}{4} - \\frac{1}{10}"
          },
          {
            "explanation": "Find a common denominator of 20 and add the fractions.",
            "workingOut": "= \\frac{8}{20} + \\frac{5}{20} - \\frac{2}{20}"
          },
          {
            "explanation": "Simplify to obtain the final answer.",
            "workingOut": "= \\frac{11}{20}"
          }
        ],
        "t": "Independent events"
      }
    ]
  },
  // Q5
  {
    "id": "y10-15d-q5",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Events \\(A\\) and \\(B\\) are shown in the Venn diagram. Show that \\(A\\) and \\(B\\) are independent.",
    "a": "P(A) = 2/5, P(B) = 3/10, P(A \\cap B) = 3/25. P(A) x P(B) = 2/5 x 3/10 = 6/50 = 3/25 = P(A \\cap B). Therefore A and B are independent.",
    "solution": "Total = 14 + 6 + 9 + 21 = 50. P(A) = 20/50 = 2/5. P(B) = 15/50 = 3/10. P(A \\cap B) = 6/50 = 3/25. P(A) \\times P(B) = 2/5 \\times 3/10 = 6/50 = 3/25 = P(A \\cap B). Since P(A \\cap B) = P(A) \\times P(B), A and B are independent.",
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 260,
        "boundingbox": [-0.5, 6.5, 11.5, -0.5],
        "boardOptions": { "keepaspectratio": false },
        "elements": [
          { "type": "point", "id": "r1", "coords": [0, 0], "name": "", "size": 0 },
          { "type": "point", "id": "r2", "coords": [11, 0], "name": "", "size": 0 },
          { "type": "point", "id": "r3", "coords": [11, 6], "name": "", "size": 0 },
          { "type": "point", "id": "r4", "coords": [0, 6], "name": "", "size": 0 },
          { "type": "segment", "from": "r1", "to": "r2", "color": "black", "strokeWidth": 1.5 },
          { "type": "segment", "from": "r2", "to": "r3", "color": "black", "strokeWidth": 1.5 },
          { "type": "segment", "from": "r3", "to": "r4", "color": "black", "strokeWidth": 1.5 },
          { "type": "segment", "from": "r4", "to": "r1", "color": "black", "strokeWidth": 1.5 },
          { "type": "circle", "id": "cA", "center": [4, 3], "radius": 2.3, "color": "blue", "strokeWidth": 1.5 },
          { "type": "circle", "id": "cB", "center": [7, 3], "radius": 2.3, "color": "blue", "strokeWidth": 1.5 },
          { "type": "text", "coords": [2.8, 5.2], "content": "A", "fontSize": 16 },
          { "type": "text", "coords": [8.2, 5.2], "content": "B", "fontSize": 16 },
          { "type": "text", "coords": [3, 3], "content": "14", "fontSize": 14 },
          { "type": "text", "coords": [5.5, 3], "content": "6", "fontSize": 14 },
          { "type": "text", "coords": [8, 3], "content": "9", "fontSize": 14 },
          { "type": "text", "coords": [9.5, 1], "content": "21", "fontSize": 14 }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "First, find the total number of outcomes in the sample space by adding all regions of the Venn diagram.",
        "workingOut": "n(S) = 14 + 6 + 9 + 21 = 50"
      },
      {
        "explanation": "Calculate \\(P(A)\\). Event \\(A\\) includes both the 'A only' region and the intersection.",
        "workingOut": "P(A) = \\frac{14 + 6}{50} = \\frac{20}{50} = \\frac{2}{5}"
      },
      {
        "explanation": "Calculate \\(P(B)\\). Event \\(B\\) includes both the 'B only' region and the intersection.",
        "workingOut": "P(B) = \\frac{6 + 9}{50} = \\frac{15}{50} = \\frac{3}{10}"
      },
      {
        "explanation": "Calculate \\(P(A \\cap B)\\), which is the intersection region.",
        "workingOut": "P(A \\cap B) = \\frac{6}{50} = \\frac{3}{25}"
      },
      {
        "explanation": "Calculate \\(P(A) \\times P(B)\\) and verify it equals \\(P(A \\cap B)\\).",
        "workingOut": "P(A) \\times P(B) = \\frac{2}{5} \\times \\frac{3}{10} = \\frac{6}{50} = \\frac{3}{25}"
      },
      {
        "explanation": "Since \\(P(A \\cap B) = \\frac{3}{25} = P(A) \\times P(B)\\), the condition for independence is satisfied. Therefore, events \\(A\\) and \\(B\\) are independent.",
        "workingOut": "P(A \\cap B) = P(A) \\times P(B) = \\frac{3}{25}"
      }
    ],
    "t": "Independent events"
  },
  // Q6
  {
    "id": "y10-15d-q6",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Consider rolling a die on two separate occasions. Define event \\(A\\) as 'rolling a 3 on the first throw' and event \\(B\\) as 'rolling at least 9 as the sum of the two numbers shown'.",
    "a": "See sub-questions.",
    "t": "Independent events",
    "subQuestions": [
      {
        "id": "y10-15d-q6a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Create a table (array) showing the sample space of a die rolled twice.",
        "a": "A 6 by 6 table showing all 36 possible outcomes and their sums, ranging from 2 to 12.",
        "solution": "The sample space consists of 36 equally likely outcomes. Each cell shows the sum of the first die (row) and the second die (column).",
        "solutionSteps": [
          {
            "explanation": "List all possible outcomes by creating a 6 by 6 grid. Each row represents the first die value (1 to 6) and each column represents the second die value (1 to 6). The cell value shows the sum.",
            "workingOut": "\\begin{array}{c|cccccc} + & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ 3 & 4 & 5 & 6 & 7 & 8 & 9 \\\\ 4 & 5 & 6 & 7 & 8 & 9 & 10 \\\\ 5 & 6 & 7 & 8 & 9 & 10 & 11 \\\\ 6 & 7 & 8 & 9 & 10 & 11 & 12 \\end{array}"
          },
          {
            "explanation": "The sample space has \\(6 \\times 6 = 36\\) equally likely outcomes.",
            "workingOut": "n(S) = 36"
          }
        ],
        "t": "Independent events"
      },
      {
        "id": "y10-15d-q6b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Determine whether events \\(A\\) and \\(B\\) are independent.",
        "a": "Not independent. P(A \\cap B) = 1/36 = 3/108, but P(A) x P(B) = 1/6 x 5/18 = 5/108. Since 3/108 is not equal to 5/108, A and B are not independent.",
        "solution": "P(A) = 1/6. B = {(3,6), (4,5), (4,6), (5,4), (5,5), (5,6), (6,3), (6,4), (6,5), (6,6)}, so P(B) = 10/36 = 5/18. A \\cap B = {(3,6)}, so P(A \\cap B) = 1/36. P(A) \\times P(B) = 1/6 \\times 5/18 = 5/108. Since 1/36 = 3/108 \\neq 5/108, A and B are not independent.",
        "solutionSteps": [
          {
            "explanation": "Calculate \\(P(A)\\). Event \\(A\\) is rolling a 3 on the first throw. There are 6 outcomes where the first die is 3.",
            "workingOut": "P(A) = \\frac{6}{36} = \\frac{1}{6}"
          },
          {
            "explanation": "List all outcomes where the sum is at least 9 (event \\(B\\)): (3,6), (4,5), (4,6), (5,4), (5,5), (5,6), (6,3), (6,4), (6,5), (6,6).",
            "workingOut": "n(B) = 10"
          },
          {
            "explanation": "Calculate \\(P(B)\\).",
            "workingOut": "P(B) = \\frac{10}{36} = \\frac{5}{18}"
          },
          {
            "explanation": "Find \\(P(A \\cap B)\\): outcomes where the first die is 3 AND the sum is at least 9. Only the outcome (3, 6) satisfies both conditions, since \\(3 + 6 = 9\\).",
            "workingOut": "A \\cap B = {(3, 6)}, \\quad P(A \\cap B) = \\frac{1}{36}"
          },
          {
            "explanation": "Calculate \\(P(A) \\times P(B)\\) and compare with \\(P(A \\cap B)\\).",
            "workingOut": "P(A) \\times P(B) = \\frac{1}{6} \\times \\frac{5}{18} = \\frac{5}{108}"
          },
          {
            "explanation": "Convert \\(\\frac{1}{36}\\) to the same denominator: \\(\\frac{1}{36} = \\frac{3}{108}\\). Since \\(\\frac{3}{108} \\neq \\frac{5}{108}\\), events \\(A\\) and \\(B\\) are not independent.",
            "workingOut": "\\frac{1}{36} = \\frac{3}{108} \\neq \\frac{5}{108}"
          }
        ],
        "t": "Independent events"
      },
      {
        "id": "y10-15d-q6c",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Determine whether events \\(A\\) and \\(B\\) are mutually exclusive.",
        "a": "Not mutually exclusive. The outcome (3, 6) belongs to both A and B, so A and B can occur simultaneously.",
        "solution": "Two events are mutually exclusive if they cannot occur at the same time, meaning A \\cap B = empty set. Since (3, 6) has a first die of 3 (event A) and a sum of 9 (event B), A \\cap B is not empty. Therefore A and B are not mutually exclusive.",
        "solutionSteps": [
          {
            "explanation": "Two events are mutually exclusive if they cannot occur at the same time, i.e., \\(A \\cap B = \\emptyset\\).",
            "workingOut": ""
          },
          {
            "explanation": "Check if there is any outcome that belongs to both \\(A\\) and \\(B\\). Event \\(A\\) requires the first die to be 3. Event \\(B\\) requires the sum to be at least 9. The outcome (3, 6) has a first die of 3 and a sum of \\(3 + 6 = 9 \\geq 9\\).",
            "workingOut": "A \\cap B = {(3, 6)}"
          },
          {
            "explanation": "Since \\(A \\cap B = {(3, 6)} \\neq \\emptyset\\), the events can occur at the same time. Therefore, events \\(A\\) and \\(B\\) are not mutually exclusive.",
            "workingOut": "A \\cap B \\neq \\emptyset"
          }
        ],
        "t": "Independent events"
      }
    ]
  }
];
