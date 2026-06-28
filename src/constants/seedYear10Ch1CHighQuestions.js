export const Y10_CH1C_HIGH_QUESTIONS = [
{
  "id": "y10-1c-high-q1",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$276.43\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(11\\%\\) and \\(13\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(375\\)",
  "\\(321\\)",
  "\\(393\\)",
  "\\(357\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{11}{100} = 0.89,\\ M_2 = 1 - \\frac{13}{100} = 0.87\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.89 \\times 0.87 = 0.7743\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{276.43}{0.7743} \\approx \\$357\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q2",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "QuantumCorp buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(29.500%\\)",
  "\\(32.450%\\)",
  "\\(30.975%\\)",
  "\\(26.550%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q3",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to BioSphere's annual report, A shipping port's cargo throughput volume increases by \\(13\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(19.78\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(6\\)",
  "\\(8\\)",
  "\\(7\\)",
  "\\(5\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{19.78}{100} = 1.1978\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{13}{100}) \\times (1 + \\frac{x}{100}) = 1.1978 \\implies 1.13 \\times (1 + \\frac{x}{100}) = 1.1978\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1978}{1.13} = 1.06 \\implies x = 6\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q4",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(22972\\) units. In the subsequent year, it increases by \\(3\\%\\), followed by a decrease of \\(5\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(22478\\)",
  "\\(20230\\)",
  "\\(23602\\)",
  "\\(24726\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 22972 \\times (1 + \\frac{3}{100}) = 22972 \\times 1.03 = 23661\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 23661 \\times (1 - \\frac{5}{100}) = 23661 \\times 0.95 \\approx 22478\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q5",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$415\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(7\\%\\) in the second quarter, and a final increase of \\(16\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(531.87\\)",
  "\\(483.52\\)",
  "\\(507.70\\)",
  "\\(435.17\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{7}{100} = 0.93,\\ M_3 = 1 + \\frac{16}{100} = 1.16\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.93 \\times 1.16 = 1.1651\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$415 \\times 1.1651 \\approx \\$483.52\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q6",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$500.89\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(6\\%\\) and \\(17\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(674\\)",
  "\\(642\\)",
  "\\(578\\)",
  "\\(706\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{6}{100} = 0.94,\\ M_2 = 1 - \\frac{17}{100} = 0.83\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.94 \\times 0.83 = 0.7802\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{500.89}{0.7802} \\approx \\$642\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q7",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "AeroLogistics buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(29.500%\\)",
  "\\(32.450%\\)",
  "\\(26.550%\\)",
  "\\(30.975%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q8",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to ApexGroup's annual report, A digital game studio's concurrent player base rises by \\(4\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(18.56\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(14\\)",
  "\\(17\\)",
  "\\(15\\)",
  "\\(13\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{18.56}{100} = 1.1856\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{4}{100}) \\times (1 + \\frac{x}{100}) = 1.1856 \\implies 1.04 \\times (1 + \\frac{x}{100}) = 1.1856\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1856}{1.04} = 1.14 \\implies x = 14\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q9",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(24187\\) units. In the subsequent year, it increases by \\(5\\%\\), followed by a decrease of \\(2\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(24888\\)",
  "\\(26132\\)",
  "\\(27377\\)",
  "\\(22399\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 24187 \\times (1 + \\frac{5}{100}) = 24187 \\times 1.05 = 25396\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 25396 \\times (1 - \\frac{2}{100}) = 25396 \\times 0.98 \\approx 24888\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q10",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$630\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(10\\%\\) in the second quarter, and a final increase of \\(11\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(611.75\\)",
  "\\(679.72\\)",
  "\\(747.69\\)",
  "\\(713.71\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{10}{100} = 0.90,\\ M_3 = 1 + \\frac{11}{100} = 1.11\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.90 \\times 1.11 = 1.0789\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$630 \\times 1.0789 \\approx \\$679.72\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q11",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$615.16\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(16\\%\\) and \\(21\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(927\\)",
  "\\(1020\\)",
  "\\(834\\)",
  "\\(973\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{16}{100} = 0.84,\\ M_2 = 1 - \\frac{21}{100} = 0.79\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.84 \\times 0.79 = 0.6636\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{615.16}{0.6636} \\approx \\$927\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q12",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "TerraFarms buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(32.450%\\)",
  "\\(30.975%\\)",
  "\\(29.500%\\)",
  "\\(26.550%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q13",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to ZenithMedia's annual report, A shipping port's cargo throughput volume increases by \\(7\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(17.70\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(10\\)",
  "\\(11\\)",
  "\\(9\\)",
  "\\(12\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{17.70}{100} = 1.1770\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{7}{100}) \\times (1 + \\frac{x}{100}) = 1.1770 \\implies 1.07 \\times (1 + \\frac{x}{100}) = 1.1770\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1770}{1.07} = 1.10 \\implies x = 10\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q14",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(25402\\) units. In the subsequent year, it increases by \\(7\\%\\), followed by a decrease of \\(8\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(22505\\)",
  "\\(27507\\)",
  "\\(26256\\)",
  "\\(25006\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 25402 \\times (1 + \\frac{7}{100}) = 25402 \\times 1.07 = 27180\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 27180 \\times (1 - \\frac{8}{100}) = 27180 \\times 0.92 \\approx 25006\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q15",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$845\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(13\\%\\) in the second quarter, and a final increase of \\(6\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(883.68\\)",
  "\\(757.44\\)",
  "\\(925.76\\)",
  "\\(841.60\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{13}{100} = 0.87,\\ M_3 = 1 + \\frac{6}{100} = 1.06\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.87 \\times 1.06 = 0.9960\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$845 \\times 0.9960 \\approx \\$841.60\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q16",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$981.60\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(11\\%\\) and \\(9\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(1273\\)",
  "\\(1091\\)",
  "\\(1333\\)",
  "\\(1212\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{11}{100} = 0.89,\\ M_2 = 1 - \\frac{9}{100} = 0.91\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.89 \\times 0.91 = 0.8099\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{981.60}{0.8099} \\approx \\$1212\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q17",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "StellarLabs buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(29.500%\\)",
  "\\(32.450%\\)",
  "\\(26.550%\\)",
  "\\(30.975%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q18",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to QuantumCorp's annual report, A digital game studio's concurrent player base rises by \\(10\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(16.60\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(6\\)",
  "\\(7\\)",
  "\\(5\\)",
  "\\(8\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{16.60}{100} = 1.1660\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{10}{100}) \\times (1 + \\frac{x}{100}) = 1.1660 \\implies 1.10 \\times (1 + \\frac{x}{100}) = 1.1660\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1660}{1.10} = 1.06 \\implies x = 6\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q19",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(26617\\) units. In the subsequent year, it increases by \\(9\\%\\), followed by a decrease of \\(5\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(24806\\)",
  "\\(28940\\)",
  "\\(30318\\)",
  "\\(27562\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 26617 \\times (1 + \\frac{9}{100}) = 26617 \\times 1.09 = 29013\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 29013 \\times (1 - \\frac{5}{100}) = 29013 \\times 0.95 \\approx 27562\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q20",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$1060\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(4\\%\\) in the second quarter, and a final increase of \\(16\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(1338.59\\)",
  "\\(1274.85\\)",
  "\\(1402.34\\)",
  "\\(1147.37\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{4}{100} = 0.96,\\ M_3 = 1 + \\frac{16}{100} = 1.16\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.96 \\times 1.16 = 1.2027\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$1060 \\times 1.2027 \\approx \\$1274.85\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q21",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$1224.25\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(6\\%\\) and \\(13\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(1497\\)",
  "\\(1647\\)",
  "\\(1347\\)",
  "\\(1572\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{6}{100} = 0.94,\\ M_2 = 1 - \\frac{13}{100} = 0.87\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.94 \\times 0.87 = 0.8178\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{1224.25}{0.8178} \\approx \\$1497\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q22",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "NovaTech buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(29.500%\\)",
  "\\(32.450%\\)",
  "\\(30.975%\\)",
  "\\(26.550%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q23",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to AeroLogistics's annual report, A shipping port's cargo throughput volume increases by \\(13\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(28.82\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(14\\)",
  "\\(13\\)",
  "\\(15\\)",
  "\\(17\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{28.82}{100} = 1.2882\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{13}{100}) \\times (1 + \\frac{x}{100}) = 1.2882 \\implies 1.13 \\times (1 + \\frac{x}{100}) = 1.2882\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.2882}{1.13} = 1.14 \\implies x = 14\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q24",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(27832\\) units. In the subsequent year, it increases by \\(3\\%\\), followed by a decrease of \\(2\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(28094\\)",
  "\\(30903\\)",
  "\\(25285\\)",
  "\\(29499\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 27832 \\times (1 + \\frac{3}{100}) = 27832 \\times 1.03 = 28667\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 28667 \\times (1 - \\frac{2}{100}) = 28667 \\times 0.98 \\approx 28094\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q25",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$375\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(7\\%\\) in the second quarter, and a final increase of \\(11\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(438.98\\)",
  "\\(376.27\\)",
  "\\(459.89\\)",
  "\\(418.08\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{7}{100} = 0.93,\\ M_3 = 1 + \\frac{11}{100} = 1.11\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.93 \\times 1.11 = 1.1149\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$375 \\times 1.1149 \\approx \\$418.08\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q26",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$405.77\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(16\\%\\) and \\(17\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(611\\)",
  "\\(582\\)",
  "\\(640\\)",
  "\\(524\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{16}{100} = 0.84,\\ M_2 = 1 - \\frac{17}{100} = 0.83\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.84 \\times 0.83 = 0.6972\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{405.77}{0.6972} \\approx \\$582\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q27",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "BioSphere buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(26.550%\\)",
  "\\(30.975%\\)",
  "\\(32.450%\\)",
  "\\(29.500%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q28",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to TerraFarms's annual report, A digital game studio's concurrent player base rises by \\(4\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(14.40\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(9\\)",
  "\\(10\\)",
  "\\(12\\)",
  "\\(11\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{14.40}{100} = 1.1440\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{4}{100}) \\times (1 + \\frac{x}{100}) = 1.1440 \\implies 1.04 \\times (1 + \\frac{x}{100}) = 1.1440\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1440}{1.04} = 1.10 \\implies x = 10\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q29",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(29047\\) units. In the subsequent year, it increases by \\(5\\%\\), followed by a decrease of \\(8\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(30865\\)",
  "\\(28059\\)",
  "\\(29462\\)",
  "\\(25253\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 29047 \\times (1 + \\frac{5}{100}) = 29047 \\times 1.05 = 30499\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 30499 \\times (1 - \\frac{8}{100}) = 30499 \\times 0.92 \\approx 28059\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q30",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$590\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(10\\%\\) in the second quarter, and a final increase of \\(6\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(668.68\\)",
  "\\(607.89\\)",
  "\\(547.10\\)",
  "\\(638.28\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{10}{100} = 0.90,\\ M_3 = 1 + \\frac{6}{100} = 1.06\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.90 \\times 1.06 = 1.0303\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$590 \\times 1.0303 \\approx \\$607.89\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q31",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$609.59\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(11\\%\\) and \\(21\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(910\\)",
  "\\(954\\)",
  "\\(867\\)",
  "\\(780\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{11}{100} = 0.89,\\ M_2 = 1 - \\frac{21}{100} = 0.79\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.89 \\times 0.79 = 0.7031\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{609.59}{0.7031} \\approx \\$867\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q32",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "ApexGroup buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(32.450%\\)",
  "\\(29.500%\\)",
  "\\(30.975%\\)",
  "\\(26.550%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q33",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to StellarLabs's annual report, A shipping port's cargo throughput volume increases by \\(7\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(13.42\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(6\\)",
  "\\(8\\)",
  "\\(7\\)",
  "\\(5\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{13.42}{100} = 1.1342\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{7}{100}) \\times (1 + \\frac{x}{100}) = 1.1342 \\implies 1.07 \\times (1 + \\frac{x}{100}) = 1.1342\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1342}{1.07} = 1.06 \\implies x = 6\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q34",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(22262\\) units. In the subsequent year, it increases by \\(7\\%\\), followed by a decrease of \\(5\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(22629\\)",
  "\\(24892\\)",
  "\\(20366\\)",
  "\\(23760\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 22262 \\times (1 + \\frac{7}{100}) = 22262 \\times 1.07 = 23820\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 23820 \\times (1 - \\frac{5}{100}) = 23820 \\times 0.95 \\approx 22629\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q35",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$805\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(13\\%\\) in the second quarter, and a final increase of \\(16\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(789.66\\)",
  "\\(921.27\\)",
  "\\(965.14\\)",
  "\\(877.40\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{13}{100} = 0.87,\\ M_3 = 1 + \\frac{16}{100} = 1.16\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.87 \\times 1.16 = 1.0899\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$805 \\times 1.0899 \\approx \\$877.40\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q36",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$985.42\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(6\\%\\) and \\(9\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(1152\\)",
  "\\(1267\\)",
  "\\(1037\\)",
  "\\(1210\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{6}{100} = 0.94,\\ M_2 = 1 - \\frac{9}{100} = 0.91\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.94 \\times 0.91 = 0.8554\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{985.42}{0.8554} \\approx \\$1152\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q37",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "ZenithMedia buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(29.500%\\)",
  "\\(30.975%\\)",
  "\\(32.450%\\)",
  "\\(26.550%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q38",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to NovaTech's annual report, A digital game studio's concurrent player base rises by \\(10\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(25.40\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(17\\)",
  "\\(15\\)",
  "\\(14\\)",
  "\\(13\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{25.40}{100} = 1.2540\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{10}{100}) \\times (1 + \\frac{x}{100}) = 1.2540 \\implies 1.10 \\times (1 + \\frac{x}{100}) = 1.2540\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.2540}{1.10} = 1.14 \\implies x = 14\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q39",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(23477\\) units. In the subsequent year, it increases by \\(9\\%\\), followed by a decrease of \\(2\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(26332\\)",
  "\\(25078\\)",
  "\\(27586\\)",
  "\\(22570\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 23477 \\times (1 + \\frac{9}{100}) = 23477 \\times 1.09 = 25590\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 25590 \\times (1 - \\frac{2}{100}) = 25590 \\times 0.98 \\approx 25078\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q40",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$1020\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(4\\%\\) in the second quarter, and a final increase of \\(11\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(1291.25\\)",
  "\\(1173.86\\)",
  "\\(1232.55\\)",
  "\\(1056.47\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{4}{100} = 0.96,\\ M_3 = 1 + \\frac{11}{100} = 1.11\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.96 \\times 1.11 = 1.1508\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$1020 \\times 1.1508 \\approx \\$1173.86\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q41",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$1050.16\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(16\\%\\) and \\(13\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(1581\\)",
  "\\(1437\\)",
  "\\(1293\\)",
  "\\(1509\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{16}{100} = 0.84,\\ M_2 = 1 - \\frac{13}{100} = 0.87\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.84 \\times 0.87 = 0.7308\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{1050.16}{0.7308} \\approx \\$1437\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q42",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "QuantumCorp buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(30.975%\\)",
  "\\(26.550%\\)",
  "\\(32.450%\\)",
  "\\(29.500%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q43",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to BioSphere's annual report, A shipping port's cargo throughput volume increases by \\(13\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(24.30\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(10\\)",
  "\\(12\\)",
  "\\(11\\)",
  "\\(9\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{24.30}{100} = 1.2430\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{13}{100}) \\times (1 + \\frac{x}{100}) = 1.2430 \\implies 1.13 \\times (1 + \\frac{x}{100}) = 1.2430\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.2430}{1.13} = 1.10 \\implies x = 10\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q44",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(24692\\) units. In the subsequent year, it increases by \\(3\\%\\), followed by a decrease of \\(8\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(24568\\)",
  "\\(23398\\)",
  "\\(21058\\)",
  "\\(25738\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 24692 \\times (1 + \\frac{3}{100}) = 24692 \\times 1.03 = 25433\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 25433 \\times (1 - \\frac{8}{100}) = 25433 \\times 0.92 \\approx 23398\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q45",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$335\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(7\\%\\) in the second quarter, and a final increase of \\(6\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(356.66\\)",
  "\\(374.49\\)",
  "\\(392.33\\)",
  "\\(320.99\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{7}{100} = 0.93,\\ M_3 = 1 + \\frac{6}{100} = 1.06\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.93 \\times 1.06 = 1.0647\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$335 \\times 1.0647 \\approx \\$356.66\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q46",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$385.60\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(11\\%\\) and \\(17\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(548\\)",
  "\\(470\\)",
  "\\(522\\)",
  "\\(574\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{11}{100} = 0.89,\\ M_2 = 1 - \\frac{17}{100} = 0.83\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.89 \\times 0.83 = 0.7387\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{385.60}{0.7387} \\approx \\$522\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q47",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "AeroLogistics buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(30.975%\\)",
  "\\(29.500%\\)",
  "\\(26.550%\\)",
  "\\(32.450%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q48",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to ApexGroup's annual report, A digital game studio's concurrent player base rises by \\(4\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(10.24\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(8\\)",
  "\\(5\\)",
  "\\(7\\)",
  "\\(6\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{10.24}{100} = 1.1024\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{4}{100}) \\times (1 + \\frac{x}{100}) = 1.1024 \\implies 1.04 \\times (1 + \\frac{x}{100}) = 1.1024\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1024}{1.04} = 1.06 \\implies x = 6\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q49",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(25907\\) units. In the subsequent year, it increases by \\(5\\%\\), followed by a decrease of \\(5\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(25842\\)",
  "\\(28426\\)",
  "\\(23258\\)",
  "\\(27134\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 25907 \\times (1 + \\frac{5}{100}) = 25907 \\times 1.05 = 27202\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 27202 \\times (1 - \\frac{5}{100}) = 27202 \\times 0.95 \\approx 25842\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q50",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$550\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(10\\%\\) in the second quarter, and a final increase of \\(16\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(558.13\\)",
  "\\(651.15\\)",
  "\\(620.14\\)",
  "\\(682.15\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{10}{100} = 0.90,\\ M_3 = 1 + \\frac{16}{100} = 1.16\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.90 \\times 1.16 = 1.1275\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$550 \\times 1.1275 \\approx \\$620.14\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q51",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$599.28\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(6\\%\\) and \\(21\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(888\\)",
  "\\(847\\)",
  "\\(807\\)",
  "\\(726\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{6}{100} = 0.94,\\ M_2 = 1 - \\frac{21}{100} = 0.79\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.94 \\times 0.79 = 0.7426\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{599.28}{0.7426} \\approx \\$807\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q52",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "TerraFarms buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(29.500%\\)",
  "\\(32.450%\\)",
  "\\(26.550%\\)",
  "\\(30.975%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q53",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to ZenithMedia's annual report, A shipping port's cargo throughput volume increases by \\(7\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(21.98\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(14\\)",
  "\\(15\\)",
  "\\(13\\)",
  "\\(17\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{21.98}{100} = 1.2198\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{7}{100}) \\times (1 + \\frac{x}{100}) = 1.2198 \\implies 1.07 \\times (1 + \\frac{x}{100}) = 1.2198\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.2198}{1.07} = 1.14 \\implies x = 14\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q54",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(27122\\) units. In the subsequent year, it increases by \\(7\\%\\), followed by a decrease of \\(2\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(28440\\)",
  "\\(31284\\)",
  "\\(25596\\)",
  "\\(29862\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 27122 \\times (1 + \\frac{7}{100}) = 27122 \\times 1.07 = 29021\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 29021 \\times (1 - \\frac{2}{100}) = 29021 \\times 0.98 \\approx 28440\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q55",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$765\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(13\\%\\) in the second quarter, and a final increase of \\(11\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(837.75\\)",
  "\\(718.07\\)",
  "\\(877.65\\)",
  "\\(797.86\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{13}{100} = 0.87,\\ M_3 = 1 + \\frac{11}{100} = 1.11\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.87 \\times 1.11 = 1.0430\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$765 \\times 1.0430 \\approx \\$797.86\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q56",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$834.72\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(16\\%\\) and \\(9\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(1092\\)",
  "\\(1201\\)",
  "\\(1147\\)",
  "\\(983\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{16}{100} = 0.84,\\ M_2 = 1 - \\frac{9}{100} = 0.91\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.84 \\times 0.91 = 0.7644\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{834.72}{0.7644} \\approx \\$1092\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q57",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "StellarLabs buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(32.450%\\)",
  "\\(26.550%\\)",
  "\\(30.975%\\)",
  "\\(29.500%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q58",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to QuantumCorp's annual report, A digital game studio's concurrent player base rises by \\(10\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(21.00\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(11\\)",
  "\\(12\\)",
  "\\(10\\)",
  "\\(9\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{21.00}{100} = 1.2100\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{10}{100}) \\times (1 + \\frac{x}{100}) = 1.2100 \\implies 1.10 \\times (1 + \\frac{x}{100}) = 1.2100\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.2100}{1.10} = 1.10 \\implies x = 10\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q59",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(28337\\) units. In the subsequent year, it increases by \\(9\\%\\), followed by a decrease of \\(8\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(31258\\)",
  "\\(29837\\)",
  "\\(28416\\)",
  "\\(25574\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 28337 \\times (1 + \\frac{9}{100}) = 28337 \\times 1.09 = 30887\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 30887 \\times (1 - \\frac{8}{100}) = 30887 \\times 0.92 \\approx 28416\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q60",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$980\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(4\\%\\) in the second quarter, and a final increase of \\(6\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(1184.73\\)",
  "\\(1077.03\\)",
  "\\(1130.88\\)",
  "\\(969.33\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{4}{100} = 0.96,\\ M_3 = 1 + \\frac{6}{100} = 1.06\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.96 \\times 1.06 = 1.0990\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$980 \\times 1.0990 \\approx \\$1077.03\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q61",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$1066.21\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(11\\%\\) and \\(13\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(1446\\)",
  "\\(1239\\)",
  "\\(1515\\)",
  "\\(1377\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{11}{100} = 0.89,\\ M_2 = 1 - \\frac{13}{100} = 0.87\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.89 \\times 0.87 = 0.7743\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{1066.21}{0.7743} \\approx \\$1377\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q62",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "NovaTech buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(26.550%\\)",
  "\\(30.975%\\)",
  "\\(32.450%\\)",
  "\\(29.500%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q63",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to AeroLogistics's annual report, A shipping port's cargo throughput volume increases by \\(13\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(19.78\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(6\\)",
  "\\(7\\)",
  "\\(5\\)",
  "\\(8\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{19.78}{100} = 1.1978\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{13}{100}) \\times (1 + \\frac{x}{100}) = 1.1978 \\implies 1.13 \\times (1 + \\frac{x}{100}) = 1.1978\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1978}{1.13} = 1.06 \\implies x = 6\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q64",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(29552\\) units. In the subsequent year, it increases by \\(3\\%\\), followed by a decrease of \\(5\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(30363\\)",
  "\\(26025\\)",
  "\\(31809\\)",
  "\\(28917\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 29552 \\times (1 + \\frac{3}{100}) = 29552 \\times 1.03 = 30439\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 30439 \\times (1 - \\frac{5}{100}) = 30439 \\times 0.95 \\approx 28917\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q65",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$295\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(7\\%\\) in the second quarter, and a final increase of \\(16\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(343.71\\)",
  "\\(378.08\\)",
  "\\(309.34\\)",
  "\\(360.90\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{7}{100} = 0.93,\\ M_3 = 1 + \\frac{16}{100} = 1.16\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.93 \\times 1.16 = 1.1651\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$295 \\times 1.1651 \\approx \\$343.71\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q66",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$360.45\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(6\\%\\) and \\(17\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(416\\)",
  "\\(508\\)",
  "\\(485\\)",
  "\\(462\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{6}{100} = 0.94,\\ M_2 = 1 - \\frac{17}{100} = 0.83\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.94 \\times 0.83 = 0.7802\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{360.45}{0.7802} \\approx \\$462\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q67",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "BioSphere buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(26.550%\\)",
  "\\(32.450%\\)",
  "\\(30.975%\\)",
  "\\(29.500%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q68",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to TerraFarms's annual report, A digital game studio's concurrent player base rises by \\(4\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(18.56\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(14\\)",
  "\\(15\\)",
  "\\(13\\)",
  "\\(17\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{18.56}{100} = 1.1856\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{4}{100}) \\times (1 + \\frac{x}{100}) = 1.1856 \\implies 1.04 \\times (1 + \\frac{x}{100}) = 1.1856\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1856}{1.04} = 1.14 \\implies x = 14\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q69",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(22767\\) units. In the subsequent year, it increases by \\(5\\%\\), followed by a decrease of \\(2\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(23427\\)",
  "\\(24598\\)",
  "\\(25770\\)",
  "\\(21084\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 22767 \\times (1 + \\frac{5}{100}) = 22767 \\times 1.05 = 23905\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 23905 \\times (1 - \\frac{2}{100}) = 23905 \\times 0.98 \\approx 23427\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q70",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$510\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(10\\%\\) in the second quarter, and a final increase of \\(11\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(577.76\\)",
  "\\(495.23\\)",
  "\\(605.28\\)",
  "\\(550.25\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{10}{100} = 0.90,\\ M_3 = 1 + \\frac{11}{100} = 1.11\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.90 \\times 1.11 = 1.0789\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$510 \\times 1.0789 \\approx \\$550.25\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q71",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$495.71\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(16\\%\\) and \\(21\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(784\\)",
  "\\(672\\)",
  "\\(822\\)",
  "\\(747\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{16}{100} = 0.84,\\ M_2 = 1 - \\frac{21}{100} = 0.79\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.84 \\times 0.79 = 0.6636\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{495.71}{0.6636} \\approx \\$747\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q72",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "ApexGroup buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(30.975%\\)",
  "\\(26.550%\\)",
  "\\(32.450%\\)",
  "\\(29.500%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q73",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to StellarLabs's annual report, A shipping port's cargo throughput volume increases by \\(7\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(17.70\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(12\\)",
  "\\(10\\)",
  "\\(11\\)",
  "\\(9\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{17.70}{100} = 1.1770\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{7}{100}) \\times (1 + \\frac{x}{100}) = 1.1770 \\implies 1.07 \\times (1 + \\frac{x}{100}) = 1.1770\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1770}{1.07} = 1.10 \\implies x = 10\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q74",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(23982\\) units. In the subsequent year, it increases by \\(7\\%\\), followed by a decrease of \\(8\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(23608\\)",
  "\\(25969\\)",
  "\\(21247\\)",
  "\\(24788\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 23982 \\times (1 + \\frac{7}{100}) = 23982 \\times 1.07 = 25661\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 25661 \\times (1 - \\frac{8}{100}) = 25661 \\times 0.92 \\approx 23608\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q75",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$725\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(13\\%\\) in the second quarter, and a final increase of \\(6\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(649.87\\)",
  "\\(758.18\\)",
  "\\(794.29\\)",
  "\\(722.08\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{13}{100} = 0.87,\\ M_3 = 1 + \\frac{6}{100} = 1.06\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.87 \\times 1.06 = 0.9960\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$725 \\times 0.9960 \\approx \\$722.08\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q76",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$835.82\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(11\\%\\) and \\(9\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(1084\\)",
  "\\(929\\)",
  "\\(1032\\)",
  "\\(1135\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{11}{100} = 0.89,\\ M_2 = 1 - \\frac{9}{100} = 0.91\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.89 \\times 0.91 = 0.8099\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{835.82}{0.8099} \\approx \\$1032\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q77",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "ZenithMedia buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(29.500%\\)",
  "\\(32.450%\\)",
  "\\(30.975%\\)",
  "\\(26.550%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q78",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to NovaTech's annual report, A digital game studio's concurrent player base rises by \\(10\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(16.60\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(8\\)",
  "\\(5\\)",
  "\\(7\\)",
  "\\(6\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{16.60}{100} = 1.1660\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{10}{100}) \\times (1 + \\frac{x}{100}) = 1.1660 \\implies 1.10 \\times (1 + \\frac{x}{100}) = 1.1660\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1660}{1.10} = 1.06 \\implies x = 6\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q79",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(25197\\) units. In the subsequent year, it increases by \\(9\\%\\), followed by a decrease of \\(5\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(26091\\)",
  "\\(28700\\)",
  "\\(23482\\)",
  "\\(27396\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 25197 \\times (1 + \\frac{9}{100}) = 25197 \\times 1.09 = 27465\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 27465 \\times (1 - \\frac{5}{100}) = 27465 \\times 0.95 \\approx 26091\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q80",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$940\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(4\\%\\) in the second quarter, and a final increase of \\(16\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(1130.53\\)",
  "\\(1243.58\\)",
  "\\(1017.48\\)",
  "\\(1187.06\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{4}{100} = 0.96,\\ M_3 = 1 + \\frac{16}{100} = 1.16\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.96 \\times 1.16 = 1.2027\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$940 \\times 1.2027 \\approx \\$1130.53\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q81",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$1077.04\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(6\\%\\) and \\(13\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(1317\\)",
  "\\(1449\\)",
  "\\(1185\\)",
  "\\(1383\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{6}{100} = 0.94,\\ M_2 = 1 - \\frac{13}{100} = 0.87\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.94 \\times 0.87 = 0.8178\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{1077.04}{0.8178} \\approx \\$1317\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q82",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "QuantumCorp buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(30.975%\\)",
  "\\(26.550%\\)",
  "\\(32.450%\\)",
  "\\(29.500%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q83",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to BioSphere's annual report, A shipping port's cargo throughput volume increases by \\(13\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(28.82\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(13\\)",
  "\\(17\\)",
  "\\(15\\)",
  "\\(14\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{28.82}{100} = 1.2882\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{13}{100}) \\times (1 + \\frac{x}{100}) = 1.2882 \\implies 1.13 \\times (1 + \\frac{x}{100}) = 1.2882\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.2882}{1.13} = 1.14 \\implies x = 14\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q84",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(26412\\) units. In the subsequent year, it increases by \\(3\\%\\), followed by a decrease of \\(2\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(23994\\)",
  "\\(27993\\)",
  "\\(29326\\)",
  "\\(26660\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 26412 \\times (1 + \\frac{3}{100}) = 26412 \\times 1.03 = 27204\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 27204 \\times (1 - \\frac{2}{100}) = 27204 \\times 0.98 \\approx 26660\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q85",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$255\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(7\\%\\) in the second quarter, and a final increase of \\(11\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(255.87\\)",
  "\\(312.73\\)",
  "\\(298.52\\)",
  "\\(284.30\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{7}{100} = 0.93,\\ M_3 = 1 + \\frac{11}{100} = 1.11\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.93 \\times 1.11 = 1.1149\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$255 \\times 1.1149 \\approx \\$284.30\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q86",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$280.27\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(16\\%\\) and \\(17\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(422\\)",
  "\\(362\\)",
  "\\(442\\)",
  "\\(402\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{16}{100} = 0.84,\\ M_2 = 1 - \\frac{17}{100} = 0.83\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.84 \\times 0.83 = 0.6972\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{280.27}{0.6972} \\approx \\$402\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q87",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "AeroLogistics buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(26.550%\\)",
  "\\(29.500%\\)",
  "\\(32.450%\\)",
  "\\(30.975%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q88",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to ApexGroup's annual report, A digital game studio's concurrent player base rises by \\(4\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(14.40\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(10\\)",
  "\\(11\\)",
  "\\(9\\)",
  "\\(12\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{14.40}{100} = 1.1440\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{4}{100}) \\times (1 + \\frac{x}{100}) = 1.1440 \\implies 1.04 \\times (1 + \\frac{x}{100}) = 1.1440\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1440}{1.04} = 1.10 \\implies x = 10\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q89",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(27627\\) units. In the subsequent year, it increases by \\(5\\%\\), followed by a decrease of \\(8\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(29357\\)",
  "\\(28022\\)",
  "\\(26688\\)",
  "\\(24019\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 27627 \\times (1 + \\frac{5}{100}) = 27627 \\times 1.05 = 29008\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 29008 \\times (1 - \\frac{8}{100}) = 29008 \\times 0.92 \\approx 26688\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q90",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$470\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(10\\%\\) in the second quarter, and a final increase of \\(6\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(508.46\\)",
  "\\(484.25\\)",
  "\\(532.68\\)",
  "\\(435.82\\)"],

  "a": "1",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{10}{100} = 0.90,\\ M_3 = 1 + \\frac{6}{100} = 1.06\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.90 \\times 1.06 = 1.0303\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$470 \\times 1.0303 \\approx \\$484.25\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q91",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$483.03\\) for a new smart home security system suite. This price was calculated after applying consecutive discounts of \\(11\\%\\) and \\(21\\%\\) to the original marked price. Determine the original marked price of the smart home security system suite, correct to the nearest dollar.",
  "opts": [
  "\\(721\\)",
  "\\(618\\)",
  "\\(756\\)",
  "\\(687\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{11}{100} = 0.89,\\ M_2 = 1 - \\frac{21}{100} = 0.79\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.89 \\times 0.79 = 0.7031\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{483.03}{0.7031} \\approx \\$687\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q92",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "TerraFarms buys a specialized automated commercial packaging line for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(30.975%\\)",
  "\\(26.550%\\)",
  "\\(32.450%\\)",
  "\\(29.500%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q93",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to ZenithMedia's annual report, A shipping port's cargo throughput volume increases by \\(7\\%\\) in the first half of the year, and then increases by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(13.42\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(5\\)",
  "\\(7\\)",
  "\\(8\\)",
  "\\(6\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{13.42}{100} = 1.1342\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{7}{100}) \\times (1 + \\frac{x}{100}) = 1.1342 \\implies 1.07 \\times (1 + \\frac{x}{100}) = 1.1342\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.1342}{1.07} = 1.06 \\implies x = 6\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q94",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(28842\\) units. In the subsequent year, it increases by \\(7\\%\\), followed by a decrease of \\(5\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(29318\\)",
  "\\(32250\\)",
  "\\(26386\\)",
  "\\(30784\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 28842 \\times (1 + \\frac{7}{100}) = 28842 \\times 1.07 = 30861\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 30861 \\times (1 - \\frac{5}{100}) = 30861 \\times 0.95 \\approx 29318\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q95",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The retail price of fine leather exports starts at \\(\\$685\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(13\\%\\) in the second quarter, and a final increase of \\(16\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(746.61\\)",
  "\\(821.27\\)",
  "\\(783.94\\)",
  "\\(671.95\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{13}{100} = 0.87,\\ M_3 = 1 + \\frac{16}{100} = 1.16\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.87 \\times 1.16 = 1.0899\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$685 \\times 1.0899 \\approx \\$746.61\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q96",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A customer pays a final promotional checkout price of \\(\\$831.45\\) for a new designer leather backpack. This price was calculated after applying consecutive discounts of \\(6\\%\\) and \\(9\\%\\) to the original marked price. Determine the original marked price of the designer leather backpack, correct to the nearest dollar.",
  "opts": [
  "\\(875\\)",
  "\\(1069\\)",
  "\\(972\\)",
  "\\(1021\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Calculate the multipliers representing the consecutive discounts.",
    "workingOut": "\\(M_1 = 1 - \\frac{6}{100} = 0.94,\\ M_2 = 1 - \\frac{9}{100} = 0.91\\)",
    "graphData": null
  },
  {
    "explanation": "Obtain the combined net discount multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 0.94 \\times 0.91 = 0.8554\\)",
    "graphData": null
  },
  {
    "explanation": "Divide the checkout price by the combined multiplier to recover the original price.",
    "workingOut": "\\(\\text{Original Price} = \\frac{831.45}{0.8554} \\approx \\$972\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q97",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "StellarLabs buys a specialized hospital MRI coolant system for industrial operations. If the asset depreciates at a constant rate of \\(11\\%\\) per annum compounded annually using the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\(3\\) years. Correct to two decimal places.",
  "opts": [
  "\\(26.550%\\)",
  "\\(29.500%\\)",
  "\\(32.450%\\)",
  "\\(30.975%\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Determine the annual depreciation multiplier.",
    "workingOut": "\\(M = 1 - \\frac{11}{100} = 0.89\\)",
    "graphData": null
  },
  {
    "explanation": "Calculate the residual value multiplier after 3 years.",
    "workingOut": "\\(M_{\\text{3 years}} = (0.89)^3 = 0.7050\\)",
    "graphData": null
  },
  {
    "explanation": "Subtract the multiplier from 1 and multiply by 100 to get the net percentage drop.",
    "workingOut": "\\(\\text{Net Decrease} = (1 - 0.7050) \\times 100\\% = 29.50\\%\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q98",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "According to QuantumCorp's annual report, A digital game studio's concurrent player base rises by \\(10\\%\\) in the first half of the year, and then rises by an unknown percentage \\(x\\%\\) in the second half. If the net expansion over the entire year is exactly \\(25.40\\%\\), calculate the value of \\(x\\), correct to the nearest whole integer.",
  "opts": [
  "\\(14\\)",
  "\\(17\\)",
  "\\(15\\)",
  "\\(13\\)"],

  "a": "0",
  "solutionSteps": [
  {
    "explanation": "Represent the overall year-end change as a combined multiplier.",
    "workingOut": "\\(M_{\\text{net}} = 1 + \\frac{25.40}{100} = 1.2540\\)",
    "graphData": null
  },
  {
    "explanation": "Write the equation expressing the product of the two half-year multipliers.",
    "workingOut": "\\((1 + \\frac{10}{100}) \\times (1 + \\frac{x}{100}) = 1.2540 \\implies 1.10 \\times (1 + \\frac{x}{100}) = 1.2540\\)",
    "graphData": null
  },
  {
    "explanation": "Solve for the unknown rate x by dividing by the first half multiplier.",
    "workingOut": "\\(1 + \\frac{x}{100} = \\frac{1.2540}{1.10} = 1.14 \\implies x = 14\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q99",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The estimated number of mature pines in a commercial plantation stands at \\(22057\\) units. In the subsequent year, it increases by \\(9\\%\\), followed by a decrease of \\(2\\%\\) in the year after due to rapid replanting followed by selected logging cycles. Calculate the final population count at the end of the second year, rounded to the nearest whole integer.",
  "opts": [
  "\\(21205\\)",
  "\\(25917\\)",
  "\\(23561\\)",
  "\\(24739\\)"],

  "a": "2",
  "solutionSteps": [
  {
    "explanation": "Calculate the population at the end of the first year.",
    "workingOut": "\\(P_1 = 22057 \\times (1 + \\frac{9}{100}) = 22057 \\times 1.09 = 24042\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the second year's percentage decrease to find the final count.",
    "workingOut": "\\(P_2 = 24042 \\times (1 - \\frac{2}{100}) = 24042 \\times 0.98 \\approx 23561\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
},
{
  "id": "y10-1c-high-q100",
  "type": "multiple_choice",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "The share value of a biotech startup starts at \\(\\$900\\). Over the next three consecutive quarters, it undergoes successive value fluctuations: an increase of \\(8\\%\\) in the first quarter, a decrease of \\(4\\%\\) in the second quarter, and a final increase of \\(11\\%\\) in the third quarter. Find the final price at the end of the third quarter, correct to two decimal places.",
  "opts": [
  "\\(1087.55\\)",
  "\\(932.18\\)",
  "\\(1139.34\\)",
  "\\(1035.76\\)"],

  "a": "3",
  "solutionSteps": [
  {
    "explanation": "Identify the multipliers for each of the three successive changes.",
    "workingOut": "\\(M_1 = 1 + \\frac{8}{100} = 1.08,\\ M_2 = 1 - \\frac{4}{100} = 0.96,\\ M_3 = 1 + \\frac{11}{100} = 1.11\\)",
    "graphData": null
  },
  {
    "explanation": "Multiply the individual multipliers to determine the combined net factor.",
    "workingOut": "\\(M_{\\text{net}} = 1.08 \\times 0.96 \\times 1.11 = 1.1508\\)",
    "graphData": null
  },
  {
    "explanation": "Apply the net factor to the original value to find the final price.",
    "workingOut": "\\(\\text{Final Price} = \\$900 \\times 1.1508 \\approx \\$1035.76\\)",
    "graphData": null
  }],

  "t": "Repeated increases and decreases"
}];