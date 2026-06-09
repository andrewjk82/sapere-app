export const Y8_CH19A_QUESTIONS = [
  // --- Question 1a (Split) ---
  {
    "id": "y8-19a-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The mean of the following data set is 60. Determine the median of this data set:\n\n`25, 58, 38, 31, 62, 146`",
    "a": "48",
    "solution": "1. To find the median, first sort the data set in ascending order:\n   `25, 31, 38, 58, 62, 146`\n2. Since there are 6 data points (an even number), the median is the average of the two middle values (3rd and 4th values):\n   $$\\text{Median} = \\frac{38 + 58}{2} = \\frac{96}{2} = 48$$",
    "t": "Comparing means and medians",
    "hint": "Sort the numbers in ascending order, then find the average of the two middle numbers.",
    "solutionSteps": [
      {
        "explanation": "Sort the data set in ascending order.",
        "workingOut": "25, 31, 38, 58, 62, 146"
      },
      {
        "explanation": "Identify the two middle numbers (38 and 58) and calculate their average.",
        "workingOut": "\\text{Median} = \\frac{38 + 58}{2} = 48"
      }
    ],
    "graphData": null
  },
  // --- Question 1b (Split) ---
  {
    "id": "y8-19a-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The mean of the following data set is 45. Determine the median of this data set:\n\n`43, 44, 45, 45, 46, 47`",
    "a": "45",
    "solution": "1. The data set is already sorted in ascending order:\n   `43, 44, 45, 45, 46, 47`\n2. Since there are 6 data points, the median is the average of the 3rd and 4th values:\n   $$\\text{Median} = \\frac{45 + 45}{2} = 45$$",
    "t": "Comparing means and medians",
    "hint": "The data is already sorted. Find the average of the two middle numbers.",
    "solutionSteps": [
      {
        "explanation": "Identify the two middle numbers (45 and 45) in the sorted set.",
        "workingOut": "\\text{Middle numbers} = 45, 45"
      },
      {
        "explanation": "Calculate their average.",
        "workingOut": "\\text{Median} = \\frac{45 + 45}{2} = 45"
      }
    ],
    "graphData": null
  },
  // --- Question 1c (Split) ---
  {
    "id": "y8-19a-q1c",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The mean of the following data set is 70. Determine the median of this data set:\n\n`0, 144, 82, 94, 98, 2`",
    "a": "88",
    "solution": "1. First, sort the data set in ascending order:\n   `0, 2, 82, 94, 98, 144`\n2. Since there are 6 data points, the median is the average of the 3rd and 4th values:\n   $$\\text{Median} = \\frac{82 + 94}{2} = \\frac{176}{2} = 88$$",
    "t": "Comparing means and medians",
    "hint": "Sort the numbers from smallest to largest, then find the middle point between the 3rd and 4th values.",
    "solutionSteps": [
      {
        "explanation": "Sort the data set.",
        "workingOut": "0, 2, 82, 94, 98, 144"
      },
      {
        "explanation": "Average the middle two values (82 and 94).",
        "workingOut": "\\text{Median} = \\frac{82 + 94}{2} = 88"
      }
    ],
    "graphData": null
  },
  // --- Question 2 (Grouped) ---
  {
    "id": "y8-19a-q2",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "The weights of a group of students, in kilograms, are given below:\n\n`53, 52, 51, 52, 48, 47, 51, 47, 55, 52, 48, 49`\n\nAnswer the questions below.",
    "a": "See sub-questions for individual answers.",
    "solution": "a) First, sort the 12 weights in ascending order:\n   `47, 47, 48, 48, 49, 51, 51, 52, 52, 52, 53, 55`\n   Since there are 12 values, the median is the average of the 6th (51) and 7th (51) values: $\\text{Median} = 51$.\nb) Sum of the data = $47\\times2 + 48\\times2 + 49 + 51\\times2 + 52\\times3 + 53 + 55 = 605$.\n   Mean = $\\frac{605}{12} = 50.4166\\dots \\approx 50.42$.",
    "t": "Comparing means and medians",
    "hint": "Sort the weights first to find the median, and sum all values and divide by 12 to find the mean.",
    "solutionSteps": [
      {
        "explanation": "Sort the data set.",
        "workingOut": "47, 47, 48, 48, 49, 51, 51, 52, 52, 52, 53, 55"
      },
      {
        "explanation": "Determine the median by averaging the 6th and 7th values.",
        "workingOut": "\\text{Median} = \\frac{51 + 51}{2} = 51"
      },
      {
        "explanation": "Calculate the sum of all weights and divide by 12.",
        "workingOut": "\\text{Mean} = \\frac{605}{12} \\approx 50.42"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y8-19a-q2a",
        "type": "short_answer",
        "question": "a) What is the median?",
        "a": "51"
      },
      {
        "id": "y8-19a-q2b",
        "type": "short_answer",
        "question": "b) Calculate the mean, correct to two decimal places.",
        "a": "50.42"
      }
    ]
  },
  // --- Question 3 ---
  {
    "id": "y8-19a-q3",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The mean price of bags of apples at different supermarkets was $\$6.40$. The sum of the data was $\$96.00$. How many bags of apples were included in the survey?",
    "a": "15",
    "solution": "1. The formula relating the mean, sum, and count $n$ is:\n   $$\\text{Mean} = \\frac{\\text{Sum}}{n}$$\n2. Substitute the given values into the formula:\n   $$6.40 = \\frac{96.00}{n}$$\n3. Solve for $n$:\n   $$n = \\frac{96.00}{6.40} = 15$$",
    "t": "Comparing means and medians",
    "hint": "Divide the total sum by the mean to find the number of entries.",
    "solutionSteps": [
      {
        "explanation": "Set up the formula relating mean, sum, and count.",
        "workingOut": "6.40 = \\frac{96.00}{n}"
      },
      {
        "explanation": "Solve for $n$.",
        "workingOut": "n = \\frac{96.00}{6.40} = 15"
      }
    ],
    "graphData": null
  },
  // --- Question 4 (Grouped) ---
  {
    "id": "y8-19a-q4",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Sue spent the following amounts on her lunch each day over the course of two working weeks:\n\n`$16, $8, $13, $49.50, $9.50, $13.50, $9, $11, $9.50, $10.50`\n\nAnswer the questions below.",
    "a": "See sub-questions for individual answers.",
    "solution": "a) Sort the 10 lunch costs in ascending order:\n   `8, 9, 9.50, 9.50, 10.50, 11, 13, 13.50, 16, 49.50`\n   The median is the average of the 5th (10.50) and 6th (11) values: $\\text{Median} = \\frac{10.50 + 11}{2} = 10.75$.\nb) Sum of the lunch costs = $8 + 9 + 9.50 + 9.50 + 10.50 + 11 + 13 + 13.50 + 16 + 49.50 = 149.50$.\n   Mean = $\\frac{149.50}{10} = 14.95$.\nc) The median ($10.75) is a better indicator of Sue's typical daily lunch spending. The mean ($14.95) is skewed upwards significantly by the outlier of $49.50, which is much higher than what she usually spends on any other day.",
    "t": "Comparing means and medians",
    "hint": "Sort the data to find the median, sum the values to compute the mean, and look for outliers to explain which measure is better.",
    "solutionSteps": [
      {
        "explanation": "Sort the data set.",
        "workingOut": "8, 9, 9.50, 9.50, 10.50, 11, 13, 13.50, 16, 49.50"
      },
      {
        "explanation": "Find the median by averaging the 5th and 6th values.",
        "workingOut": "\\text{Median} = \\frac{10.50 + 11}{2} = 10.75"
      },
      {
        "explanation": "Calculate the mean by dividing the sum of $149.50$ by $10$.",
        "workingOut": "\\text{Mean} = \\frac{149.50}{10} = 14.95"
      },
      {
        "explanation": "Identify the outlier ($49.50$) to justify why the median is the better indicator.",
        "workingOut": "\\text{Outlier} = 49.50 \\implies \\text{Median is less affected}"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y8-19a-q4a",
        "type": "short_answer",
        "question": "a) Calculate the median for these data (in dollars).",
        "a": "10.75"
      },
      {
        "id": "y8-19a-q4b",
        "type": "short_answer",
        "question": "b) Calculate the mean for these data (in dollars).",
        "a": "14.95"
      },
      {
        "id": "y8-19a-q4c",
        "type": "teacher_review",
        "question": "c) Compare the median and mean and comment on which is the better indicator of how much Sue usually spent on her daily lunch.",
        "a": "The median ($10.75) is a better indicator of Sue's usual spending. The mean ($14.95) is skewed upwards by the outlier of $49.50, which is much higher than her other daily lunch costs."
      }
    ]
  },
  // --- Question 5a (Split) ---
  {
    "id": "y8-19a-q5a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "question": "A list of data has 10 entries. Each entry is 2, 3 or 4. What must the list be if the average (mean) is 2?",
    "a": "All ten entries must be 2",
    "opts": [
      "All ten entries must be 2",
      "Five entries are 2, five entries are 3",
      "Nine entries are 2, one entry is 4",
      "Eight entries are 2, two entries are 3"
    ],
    "solution": "1. The minimum possible value for any entry in this list is 2.\n2. If the average (mean) of the 10 entries is equal to the minimum value (2), then no entry can be greater than 2.\n3. Therefore, all ten entries must be 2.",
    "t": "Comparing means and medians",
    "hint": "If the average is equal to the minimum possible value of the entries, think about what values the individual entries can take.",
    "solutionSteps": [
      {
        "explanation": "Identify the minimum possible value of the data entries.",
        "workingOut": "\\text{Minimum value} = 2"
      },
      {
        "explanation": "Relate the minimum value to the given average.",
        "workingOut": "\\text{Average} = 2 \\implies \\text{All entries must equal the minimum}"
      }
    ],
    "graphData": null
  },
  // --- Question 5b (Split) ---
  {
    "id": "y8-19a-q5b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "question": "A list of data has 10 entries. Each entry is 2, 3 or 4. What must the list be if the average (mean) is 3?",
    "a": "The number of 2s must equal the number of 4s",
    "opts": [
      "The number of 2s must equal the number of 4s",
      "All ten entries must be 3",
      "The number of 2s must equal the number of 3s",
      "The number of 3s must equal the number of 4s"
    ],
    "solution": "1. Let $x$ be the number of 2s, $y$ be the number of 3s, and $z$ be the number of 4s. The total number of entries is $x + y + z = 10$.\n2. The sum of the entries must be $10 \\times 3 = 30$, so:\n   $$2x + 3y + 4z = 30$$\n3. Substitute $y = 10 - x - z$ into the sum equation:\n   $$2x + 3(10 - x - z) + 4z = 30$$\n   $$2x + 30 - 3x - 3z + 4z = 30$$\n   $$30 - x + z = 30 \\implies x = z$$\n4. Therefore, the number of 2s ($x$) must equal the number of 4s ($z$).",
    "t": "Comparing means and medians",
    "hint": "Set up an equation for the sum of the entries. How do the numbers of values below the mean (2) and above the mean (4) balance out?",
    "solutionSteps": [
      {
        "explanation": "State the sum equation based on the average.",
        "workingOut": "\\text{Sum} = 10 \\times 3 = 30"
      },
      {
        "explanation": "Model the variables and solve.",
        "workingOut": "2x + 3y + 4z = 30 \\implies 2x + 3(10 - x - z) + 4z = 30 \\implies x = z"
      }
    ],
    "graphData": null
  },
  // --- Question 5c (Split) ---
  {
    "id": "y8-19a-q5c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "question": "A list of data has 10 entries. Each entry is 2, 3 or 4. What must the list be if the average (mean) is 4?",
    "a": "All ten entries must be 4",
    "opts": [
      "All ten entries must be 4",
      "Five entries are 3, five entries are 4",
      "Nine entries are 4, one entry is 2",
      "The number of 2s must equal the number of 4s"
    ],
    "solution": "1. The maximum possible value for any entry in this list is 4.\n2. If the average (mean) of the 10 entries is equal to this maximum value (4), then no entry can be less than 4.\n3. Therefore, all ten entries must be 4.",
    "t": "Comparing means and medians",
    "hint": "If the average is equal to the maximum possible value of the entries, think about what values the individual entries can take.",
    "solutionSteps": [
      {
        "explanation": "Identify the maximum possible value of the data entries.",
        "workingOut": "\\text{Maximum value} = 4"
      },
      {
        "explanation": "Relate the maximum value to the given average.",
        "workingOut": "\\text{Average} = 4 \\implies \\text{All entries must equal the maximum}"
      }
    ],
    "graphData": null
  },
  // --- Question 6 (Grouped) ---
  {
    "id": "y8-19a-q6",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "For the stem-and-leaf plot shown below, find the median and the mean of the data set.\n\n```\n1 | 2 2 4 6 8\n2 | 2 5\n3 | 1 1 2 2 3 4 6\n4 | 0 2 3 5 5 7\n```",
    "a": "See sub-questions for individual answers.",
    "solution": "1. List the 20 values represented in the plot:\n   `12, 12, 14, 16, 18, 22, 25, 31, 31, 32, 32, 33, 34, 36, 40, 42, 43, 45, 45, 47`\n2. Find the median (average of 10th and 11th values):\n   $$\\text{Median} = \\frac{32 + 32}{2} = 32$$\n3. Find the mean by summing all 20 values and dividing by 20:\n   $$\\text{Sum} = 600 \\implies \\text{Mean} = \\frac{600}{20} = 30$$",
    "t": "Comparing means and medians",
    "hint": "List all 20 values. The median is the average of the 10th and 11th numbers. Sum all values and divide by 20 to find the mean.",
    "solutionSteps": [
      {
        "explanation": "List all 20 data points in order.",
        "workingOut": "12, 12, 14, 16, 18, 22, 25, 31, 31, 32, 32, 33, 34, 36, 40, 42, 43, 45, 45, 47"
      },
      {
        "explanation": "Calculate the median (average of 10th and 11th values).",
        "workingOut": "\\text{Median} = \\frac{32 + 32}{2} = 32"
      },
      {
        "explanation": "Calculate the mean by dividing the sum (600) by the number of elements (20).",
        "workingOut": "\\text{Mean} = \\frac{600}{20} = 30"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y8-19a-q6a",
        "type": "short_answer",
        "question": "a) Find the median.",
        "a": "32"
      },
      {
        "id": "y8-19a-q6b",
        "type": "short_answer",
        "question": "b) Calculate the mean.",
        "a": "30"
      }
    ]
  },
  // --- Question 7 (Grouped) ---
  {
    "id": "y8-19a-q7",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "The chest measurement in centimetres of 23 people is taken. The results are recorded in the stem-and-leaf plot shown below.\n\n```\n8 | 6 7\n9 | 1 1 1 2 3 4 5 7 7\n10 | 0 2 3 4 5 7 7 8 8\n11 | 2 2 8\n```\n\nAnswer the questions below.",
    "a": "See sub-questions for individual answers.",
    "solution": "a) There are 23 measurements. The median is the 12th value, which is 100 cm.\nb) Sum of the 23 values = 2300. Mean = $\\frac{2300}{23} = 100$ cm.\nc) Exclude values less than 90 (86, 87) and greater than 110 (112, 112, 118). There are 18 remaining values.\n   - Sorted remaining values: `91, 91, 91, 92, 93, 94, 95, 97, 97, 100, 102, 103, 104, 105, 107, 107, 108, 108`\n   - New median (average of 9th and 10th values): $\\frac{97 + 100}{2} = 98.5$ cm.\n   - Sum of remaining values = $2300 - 515 = 1785$.\n   - New mean = $\\frac{1785}{18} = 99.1666\\dots \\approx 99.17$ cm.",
    "t": "Comparing means and medians",
    "hint": "For a, find the 12th value. For b, sum and divide by 23. For c/d, remove the 5 extreme values, then recalculate.",
    "solutionSteps": [
      {
        "explanation": "List all 23 values in order.",
        "workingOut": "86, 87, 91, 91, 91, 92, 93, 94, 95, 97, 97, 100, 102, 103, 104, 105, 107, 107, 108, 108, 112, 112, 118"
      },
      {
        "explanation": "Find the median (12th value).",
        "workingOut": "\\text{Median} = 100"
      },
      {
        "explanation": "Calculate the mean of the 23 values.",
        "workingOut": "\\text{Mean} = \\frac{2300}{23} = 100"
      },
      {
        "explanation": "Filter out values $< 90$ and $> 110$. Find the new median of the 18 remaining values.",
        "workingOut": "\\text{New Median} = \\frac{97 + 100}{2} = 98.5"
      },
      {
        "explanation": "Calculate the new mean of the remaining 18 values.",
        "workingOut": "\\text{New Mean} = \\frac{1785}{18} \\approx 99.17"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y8-19a-q7a",
        "type": "short_answer",
        "question": "a) Find the median chest measurement.",
        "a": "100"
      },
      {
        "id": "y8-19a-q7b",
        "type": "short_answer",
        "question": "b) Find the mean chest measurement.",
        "a": "100"
      },
      {
        "id": "y8-19a-q7c",
        "type": "short_answer",
        "question": "c) Find the new median chest measurement if readings less than 90 and greater than 110 are not included.",
        "a": "98.5"
      },
      {
        "id": "y8-19a-q7d",
        "type": "short_answer",
        "question": "d) Find the new mean chest measurement if readings less than 90 and greater than 110 are not included (correct to two decimal places).",
        "a": "99.17"
      }
    ]
  },
  // --- Question 8 (Grouped) ---
  {
    "id": "y8-19a-q8",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "The following list gives the area in hectares of each of the suburbs of a city:\n\n`8.5, 3.2, 6.2, 20.2, 3.4, 42.3, 12.3, 28.6, 10.0, 3.3, 29.4, 4.2, 4.6`\n\nAnswer the questions below.",
    "a": "See sub-questions for individual answers.",
    "solution": "a) Sort the 13 areas in ascending order:\n   `3.2, 3.3, 3.4, 4.2, 4.6, 6.2, 8.5, 10.0, 12.3, 20.2, 28.6, 29.4, 42.3`\n   - Median is the 7th value: $8.5$ hectares.\n   - Sum of the areas = $166.2$.\n   - Mean = $\\frac{166.2}{13} \\approx 12.78$ hectares.\nb) The median ($8.5$ hectares) is a better measure of centre for this data set. The mean ($12.78$ hectares) is pulled upwards by a few very large suburbs (such as 42.3, 29.4, and 28.6 hectares) which skew the distribution.",
    "t": "Comparing means and medians",
    "hint": "Sort the data to identify the median, sum and divide by 13 to calculate the mean, and evaluate how extreme values affect the mean.",
    "solutionSteps": [
      {
        "explanation": "Sort the areas.",
        "workingOut": "3.2, 3.3, 3.4, 4.2, 4.6, 6.2, 8.5, 10.0, 12.3, 20.2, 28.6, 29.4, 42.3"
      },
      {
        "explanation": "Identify the median (7th value).",
        "workingOut": "\\text{Median} = 8.5"
      },
      {
        "explanation": "Calculate the mean of the data set.",
        "workingOut": "\\text{Mean} = \\frac{166.2}{13} \\approx 12.78"
      },
      {
        "explanation": "Determine which measure of centre is better.",
        "workingOut": "\\text{The outliers pull the mean up, so median is better.}"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y8-19a-q8a",
        "type": "short_answer",
        "question": "a) Find the median area in hectares.",
        "a": "8.5"
      },
      {
        "id": "y8-19a-q8b",
        "type": "short_answer",
        "question": "b) Find the mean area in hectares (correct to two decimal places).",
        "a": "12.78"
      },
      {
        "id": "y8-19a-q8c",
        "type": "teacher_review",
        "question": "c) Which is a better measure of centre for this data set? Explain your answer.",
        "a": "The median (8.5) is a better measure of centre. The mean (12.78) is skewed upwards by the few very large suburbs (such as 42.3 and 29.4 hectares) which act as outliers."
      }
    ]
  },
  // --- Question 9a (Split) ---
  {
    "id": "y8-19a-q9a",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find the median and mean of the data represented in the stem-and-leaf plot below:\n\n```\n6 | 4 7\n7 | 1 2 3 4 7\n8 | 5 5 6 6 7\n9 | 2 2 2 4 4 5 5 5 6 6 8 8\n```",
    "a": "Median = 89.5, Mean = 86",
    "solution": "1. List the 24 values in order:\n   `64, 67, 71, 72, 73, 74, 77, 85, 85, 86, 86, 87, 92, 92, 92, 94, 94, 95, 95, 95, 96, 96, 98, 98`\n2. Find the median (average of 12th and 13th values):\n   $$\\text{Median} = \\frac{87 + 92}{2} = 89.5$$\n3. Find the mean by summing all values and dividing by 24:\n   $$\\text{Sum} = 2064 \\implies \\text{Mean} = \\frac{2064}{24} = 86$$",
    "t": "Comparing means and medians",
    "hint": "List all 24 numbers in order. Calculate the median using the 12th and 13th numbers, and the mean by dividing the total sum by 24.",
    "solutionSteps": [
      {
        "explanation": "List all 24 data points.",
        "workingOut": "64, 67, 71, 72, 73, 74, 77, 85, 85, 86, 86, 87, 92, 92, 92, 94, 94, 95, 95, 95, 96, 96, 98, 98"
      },
      {
        "explanation": "Find the median by averaging 87 and 92.",
        "workingOut": "\\text{Median} = \\frac{87 + 92}{2} = 89.5"
      },
      {
        "explanation": "Calculate the mean by dividing the sum 2064 by 24.",
        "workingOut": "\\text{Mean} = \\frac{2064}{24} = 86"
      }
    ],
    "graphData": null
  },
  // --- Question 9b (Split) ---
  {
    "id": "y8-19a-q9b",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find the median and mean of the data represented in the stem-and-leaf plot below:\n\n```\n6 | 6\n7 | 6 8\n8 | 1 1 3 3 4 4 4 5 5 6 7 7 7 8\n9 | 0 0 1 1 2 8 8\n```",
    "a": "Median = 85, Mean = 85.17",
    "solution": "1. List the 24 values in order:\n   `66, 76, 78, 81, 81, 83, 83, 84, 84, 84, 85, 85, 85, 86, 87, 87, 87, 88, 90, 90, 91, 91, 92, 98, 98`\n2. Find the median (average of 12th and 13th values):\n   $$\\text{Median} = \\frac{85 + 85}{2} = 85$$\n3. Find the mean by summing all values and dividing by 24:\n   $$\\text{Sum} = 2044 \\implies \\text{Mean} = \\frac{2044}{24} = 85.1666\\dots \\approx 85.17$$",
    "t": "Comparing means and medians",
    "hint": "List all 24 numbers in order. Calculate the median using the 12th and 13th numbers, and the mean by dividing the total sum by 24.",
    "solutionSteps": [
      {
        "explanation": "List all 24 data points.",
        "workingOut": "66, 76, 78, 81, 81, 83, 83, 84, 84, 84, 85, 85, 85, 86, 87, 87, 87, 88, 90, 90, 91, 91, 92, 98, 98"
      },
      {
        "explanation": "Find the median by averaging the 12th and 13th values.",
        "workingOut": "\\text{Median} = \\frac{85 + 85}{2} = 85"
      },
      {
        "explanation": "Calculate the mean by dividing the sum 2044 by 24.",
        "workingOut": "\\text{Mean} = \\frac{2044}{24} \\approx 85.17"
      }
    ],
    "graphData": null
  },
  // --- Question 10 (Grouped) ---
  {
    "id": "y8-19a-q10",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "The birth weights, in kilograms, of the first 20 babies born at a hospital in a selected month are as follows:\n\n`3.1, 2.9, 3.7, 2.9, 3.7, 3.8, 3.3, 4.0, 3.7, 4.3`\n`3.8, 2.8, 3.2, 3.1, 2.6, 2.7, 3.7, 2.5, 3.0, 3.3`\n\nAnswer the questions below.",
    "a": "See sub-questions for individual answers.",
    "solution": "a) Stem-and-leaf plot:\n   ```\n   2 | 5 6 7 8 9 9\n   3 | 0 1 1 2 3 3 7 7 7 7 8 8\n   4 | 0 3\n   ```\nb) Sort the 20 values in ascending order:\n   `2.5, 2.6, 2.7, 2.8, 2.9, 2.9, 3.0, 3.1, 3.1, 3.2, 3.3, 3.3, 3.7, 3.7, 3.7, 3.7, 3.8, 3.8, 4.0, 4.3`\n   The median is the average of the 10th (3.2) and 11th (3.3) values: $\\text{Median} = \\frac{3.2 + 3.3}{2} = 3.25$ kg.\nc) Sum of the weights = $66.1$ kg. Mean = $\\frac{66.1}{20} = 3.305 \\approx 3.31$ kg.",
    "t": "Comparing means and medians",
    "hint": "Create the stem-and-leaf plot using the integer parts as stems. Sort the weights to find the median, and divide the sum by 20 to compute the mean.",
    "solutionSteps": [
      {
        "explanation": "Group the numbers by their integer part (stems 2, 3, 4) and list leaves in ascending order.",
        "workingOut": "\\text{Stems: 2, 3, 4}"
      },
      {
        "explanation": "Identify the 10th and 11th values to find the median.",
        "workingOut": "\\text{Median} = \\frac{3.2 + 3.3}{2} = 3.25"
      },
      {
        "explanation": "Find the sum of all 20 values and divide by 20.",
        "workingOut": "\\text{Mean} = \\frac{66.1}{20} = 3.305 \\approx 3.31"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y8-19a-q10a",
        "type": "teacher_review",
        "question": "a) Represent these data with a stem-and-leaf plot.",
        "a": "2 | 5 6 7 8 9 9\n3 | 0 1 1 2 3 3 7 7 7 7 8 8\n4 | 0 3"
      },
      {
        "id": "y8-19a-q10b",
        "type": "short_answer",
        "question": "b) Find the median value.",
        "a": "3.25"
      },
      {
        "id": "y8-19a-q10c",
        "type": "short_answer",
        "question": "c) Find the mean value.",
        "a": "3.31"
      }
    ]
  }
];
