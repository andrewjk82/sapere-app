import { readFileSync, writeFileSync } from 'fs';

const baseFile = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch1CQuestions.js';
const fileContent = readFileSync(baseFile, 'utf8');

// We need 100 unique percentage repeated change questions.
// Let's generate them programmatically with highly varied scenarios.
const companies = ["AeroSpaceX", "BioPharma", "CyberNet", "DeepDive", "EcoSystems", "FutureAI", "GigaVolt", "HyperLoop", "InnovaTech", "JoulePower", "KiloByte", "LogiTech", "MegaCorp", "NanoTech", "OmniCorp", "PicoCell", "QuantumCorp", "RoboTech", "SolaRise", "TerraForm", "UltraNet", "VeloCity", "WaveFront", "XenonLab", "YottaByte", "ZenithCorp"];
const assets = ["industrial laser cutter", "hospital MRI scanner", "automated packaging line", "data server rack", "HVAC cooling unit", "robotic assembly arm", "solar panel array", "hydroelectric generator", "chemical mixing vat", "high-speed centrifuge", "3D printing system", "heavy haul truck", "backup power generator", "water purification unit", "optical fiber routing hub"];
const cities = ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Hobart", "Darwin", "Canberra", "Newcastle", "Wollongong", "Geelong", "Townsville", "Cairns", "Toowoomba", "Ballarat", "Bendigo"];
const collectibles = ["rare vintage wristwatch", "antique oak cabinet", "first-edition comic book", "limited-issue silver coin", "autographed sports jersey", "original oil painting", "vintage acoustic guitar", "retro arcade cabinet", "rare postage stamp", "historic pocket watch"];

const y10Scenarios = [];

// Type 1: Consecutive Depreciation (20 questions)
for (let i = 0; i < 20; i++) {
  const comp = companies[i % companies.length];
  const asset = assets[i % assets.length];
  const rate = 8 + (i * 3) % 15; // 8% to 22%
  const years = 3 + (i % 3); // 3 to 5 years
  
  const mult = 1 - rate / 100;
  const resMult = Math.pow(mult, years);
  const netDecrease = ((1 - resMult) * 100).toFixed(2);
  const correctOpt = `\\\\(${netDecrease}\\\\%\\\\)`;

  const opts = [
    `\\\\(${netDecrease}\\\\%\\\\)`,
    `\\\\(${(parseFloat(netDecrease) - 3.5).toFixed(2)}\\\\%\\\\)`,
    `\\\\(${(parseFloat(netDecrease) + 2.8).toFixed(2)}\\\\%\\\\)`,
    `\\\\(${(rate * years).toFixed(2)}\\\\%\\\\)`
  ].sort();

  y10Scenarios.push({
    id: `y10-1c-high-q${i + 1}`,
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Repeated increases and decreases",
    question: `A local branch of ${comp} purchases a ${asset} for their regional office. If the equipment depreciates at a rate of \\\\(${rate}\\\\%\\\\) per annum compounded annually under the reducing balance method, find the total accumulated percentage decrease in the asset's value after \\\\(${years}\\\\) years. Correct to two decimal places.`,
    a: correctOpt,
    options: opts,
    solutionSteps: [
      {
        explanation: `Find the annual depreciation multiplier.`,
        workingOut: `\\\\(M = 1 - \\\\frac{${rate}}{100} = ${(mult).toFixed(2)}\\\\)`,
        graphData: null
      },
      {
        explanation: `Calculate the residual value multiplier after \\\\(${years}\\\\) years.`,
        workingOut: `\\\\(M_{\\\\text{residual}} = (${(mult).toFixed(2)})^${years} \\\\approx ${resMult.toFixed(4)}\\\\)`,
        graphData: null
      },
      {
        explanation: `Subtract the residual multiplier from 1 to find the net percentage decrease.`,
        workingOut: `\\\\(\\\\text{Decrease} = (1 - ${resMult.toFixed(4)}) \\\\times 100\\\\% \\\\approx ${netDecrease}\\\\%\\\\)`,
        graphData: null
      }
    ]
  });
}

// Type 2: Consecutive Discount/Markup (20 questions)
for (let i = 0; i < 20; i++) {
  const item = collectibles[i % collectibles.length];
  const orig = 250 + (i * 35) % 800; // $250 to $1050
  const rate1 = 10 + (i * 2) % 15; // 10% to 24%
  const rate2 = 5 + (i * 3) % 12; // 5% to 16%
  const isUp1 = (i % 2 === 0); // Alternate markup/discount
  const isUp2 = (i % 3 === 0);

  const m1 = isUp1 ? (1 + rate1/100) : (1 - rate1/100);
  const m2 = isUp2 ? (1 + rate2/100) : (1 - rate2/100);
  const finalVal = (orig * m1 * m2).toFixed(2);

  const correctOpt = `\\\\(\\\\$${finalVal}\\\\)`;
  const dist1 = (orig * m1).toFixed(2);
  const dist2 = (orig * (isUp1 ? 1 + (rate1 + rate2)/100 : 1 - (rate1 + rate2)/100)).toFixed(2);
  const dist3 = (orig * 0.9).toFixed(2);

  const opts = [
    correctOpt,
    `\\\\(\\\\$${dist1}\\\\)`,
    `\\\\(\\\\$${dist2}\\\\)`,
    `\\\\(\\\\$${dist3}\\\\)`
  ].sort();

  const change1Str = isUp1 ? `increased by \\\\(${rate1}\\\\%\\\\)` : `discounted by \\\\(${rate1}\\\\%\\\\)`;
  const change2Str = isUp2 ? `increased by \\\\(${rate2}\\\\%\\\\)` : `decreased by \\\\(${rate2}\\\\%\\\\)`;

  y10Scenarios.push({
    id: `y10-1c-high-q${i + 21}`,
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Repeated increases and decreases",
    question: `A collector buys a ${item} valued at \\\\(\\\\$${orig}\\\\). Over the next two years, the value is first ${change1Str} in the first year, and then ${change2Str} in the second year. Calculate the final value of the ${item} at the end of the second year, correct to two decimal places.`,
    a: correctOpt,
    options: opts,
    solutionSteps: [
      {
        explanation: `Calculate the multiplier for the first year fluctuation.`,
        workingOut: `\\\\(M_1 = 1 ${isUp1 ? '+' : '-'} \\\\frac{${rate1}}{100} = ${m1.toFixed(2)}\\\\)`,
        graphData: null
      },
      {
        explanation: `Calculate the multiplier for the second year fluctuation.`,
        workingOut: `\\\\(M_2 = 1 ${isUp2 ? '+' : '-'} \\\\frac{${rate2}}{100} = ${m2.toFixed(2)}\\\\)`,
        graphData: null
      },
      {
        explanation: `Apply the consecutive multipliers to the original value.`,
        workingOut: `\\\\(\\\\text{Final Value} = \\\\$${orig} \\\\times ${m1.toFixed(2)} \\\\times ${m2.toFixed(2)} \\\\approx \\\\$${finalVal}\\\\)`,
        graphData: null
      }
    ]
  });
}

// Type 3: Find original value after consecutive changes (20 questions)
for (let i = 0; i < 20; i++) {
  const city = cities[i % cities.length];
  const targetOrig = 45000 + (i * 1250) % 25000; // 45000 to 70000
  const rate1 = 4 + (i % 5); // 4% to 8%
  const rate2 = 3 + (i % 4); // 3% to 6%
  const m1 = 1 - rate1 / 100; // population decrease
  const m2 = 1 + rate2 / 100; // population increase
  
  const finalVal = Math.round(targetOrig * m1 * m2);
  const actualOrig = Math.round(finalVal / (m1 * m2));

  const correctOpt = `\\\\(${actualOrig}\\\\)`;
  const dist1 = Math.round(finalVal * 1.05);
  const dist2 = Math.round(finalVal * 0.95);
  const dist3 = Math.round(targetOrig * 1.1);

  const opts = [
    correctOpt,
    `\\\\(${dist1}\\\\)`,
    `\\\\(${dist2}\\\\)`,
    `\\\\(${dist3}\\\\)`
  ].sort();

  y10Scenarios.push({
    id: `y10-1c-high-q${i + 41}`,
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Repeated increases and decreases",
    question: `Following a demographic shift, the population of ${city} decreases by \\\\(${rate1}\\\\%\\\\) in 2024, and then increases by \\\\(${rate2}\\\\%\\\\) in 2025. If the census records the final population at the end of 2025 as \\\\(${finalVal}\\\\), find the initial population at the beginning of 2024. Correct to the nearest whole integer.`,
    a: correctOpt,
    options: opts,
    solutionSteps: [
      {
        explanation: `Identify the multipliers for the consecutive changes.`,
        workingOut: `\\\\(M_1 = 0.9${10-rate1},\\\\ M_2 = 1.0${rate2}\\\\)`,
        graphData: null
      },
      {
        explanation: `Set up the population equation.`,
        workingOut: `\\\\(P_{\\\\text{initial}} \\\\times M_1 \\\\times M_2 = ${finalVal}\\\\)`,
        graphData: null
      },
      {
        explanation: `Divide the final population by the combined multipliers to solve for the initial population.`,
        workingOut: `\\\\(P_{\\\\text{initial}} = \\\\frac{${finalVal}}{0.9${10-rate1} \\\\times 1.0${rate2}} \\\\approx ${actualOrig}\\\\)`,
        graphData: null
      }
    ]
  });
}

// Type 4: Find the unknown second percentage rate (20 questions)
for (let i = 0; i < 20; i++) {
  const comp = companies[(i + 5) % companies.length];
  const rate1 = 5 + (i * 2) % 10; // 5% to 23%
  const rate2 = 6 + (i * 3) % 12; // 6% to 18% (target x)
  const isUp1 = (i % 2 === 0);
  const isUp2 = true; // Find positive growth x%

  const m1 = isUp1 ? (1 + rate1/100) : (1 - rate1/100);
  const m2 = 1 + rate2/100;
  const netMult = m1 * m2;
  const netChangePercent = ((netMult - 1) * 100).toFixed(2);

  const correctOpt = `\\\\(${rate2}\\\\)`;
  const dist1 = (rate2 + 2);
  const dist2 = Math.max(1, rate2 - 2);
  const dist3 = Math.round(parseFloat(netChangePercent));

  const opts = [
    correctOpt,
    `\\\\(${dist1}\\\\)`,
    `\\\\(${dist2}\\\\)`,
    `\\\\(${dist3}\\\\)`
  ].sort();

  const change1Str = isUp1 ? `increases by \\\\(${rate1}\\\\%\\\\)` : `decreases by \\\\(${rate1}\\\\%\\\\)`;

  y10Scenarios.push({
    id: `y10-1c-high-q${i + 61}`,
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Repeated increases and decreases",
    question: `In a financial report, ${comp}'s annual revenue ${change1Str} in the first half of the fiscal year, and then increases by \\\\(x\\\\%\\\\) in the second half. If the net change in revenue across the entire year is exactly \\\\(${netChangePercent}\\\\%\\\\), find the value of \\\\(x\\\\). Correct to the nearest whole integer.`,
    a: correctOpt,
    options: opts,
    solutionSteps: [
      {
        explanation: `Express the net year-end change as a combined multiplier.`,
        workingOut: `\\\\(M_{\\\\text{net}} = 1 + \\\\frac{${netChangePercent}}{100} = ${netMult.toFixed(4)}\\\\)`,
        graphData: null
      },
      {
        explanation: `Set up the multiplication equation using the first half multiplier.`,
        workingOut: `\\\\(${m1.toFixed(2)} \\\\times (1 + \\\\frac{x}{100}) = ${netMult.toFixed(4)}\\\\)`,
        graphData: null
      },
      {
        explanation: `Solve for the unknown rate x by dividing and converting to a percentage.`,
        workingOut: `\\\\(1 + \\\\frac{x}{100} = \\\\frac{${netMult.toFixed(4)}}{${m1.toFixed(2)}} = ${m2.toFixed(2)} \\\\implies x = ${rate2}\\\\)`,
        graphData: null
      }
    ]
  });
}

// Type 5: Multi-stage Compound Fluctuations (20 questions)
for (let i = 0; i < 20; i++) {
  const item = collectibles[(i + 3) % collectibles.length];
  const origPrice = 1200 + (i * 150) % 3000; // $1200 to $4200
  const rate1 = 12; // 12% increase
  const rate2 = 8;  // 8% decrease
  const rate3 = 15; // 15% increase
  
  const m1 = 1.12;
  const m2 = 0.92;
  const m3 = 1.15;
  const finalPrice = (origPrice * m1 * m2 * m3).toFixed(2);

  const correctOpt = `\\\\(\\\\$${finalPrice}\\\\)`;
  const dist1 = (origPrice * 1.19).toFixed(2);
  const dist2 = (origPrice * 1.12).toFixed(2);
  const dist3 = (origPrice * 1.25).toFixed(2);

  const opts = [
    correctOpt,
    `\\\\(\\\\$${dist1}\\\\)`,
    `\\\\(\\\\$${dist2}\\\\)`,
    `\\\\(\\\\$${dist3}\\\n)`
  ].sort();

  y10Scenarios.push({
    id: `y10-1c-high-q${i + 81}`,
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Repeated increases and decreases",
    question: `A vintage ${item} is initially valued at \\\\(\\\\$${origPrice}\\\\). Over three successive quarters, its value experiences the following sequential changes: an increase of \\\\(12\\\\%\\\\), a decrease of \\\\(8\\\\%\\\\), and a final increase of \\\\(15\\\\%\\\\). Find the final valuation at the end of the third quarter, correct to two decimal places.`,
    a: correctOpt,
    options: opts,
    solutionSteps: [
      {
        explanation: `Identify the three multipliers for each successive change.`,
        workingOut: `\\\\(M_1 = 1.12,\\\\ M_2 = 0.92,\\\\ M_3 = 1.15\\\\)`,
        graphData: null
      },
      {
        explanation: `Multiply the multipliers to obtain the overall combined net factor.`,
        workingOut: `\\\\(M_{\\\\text{net}} = 1.12 \\\\times 0.92 \\\\times 1.15 = 1.1850\\\\)`,
        graphData: null
      },
      {
        explanation: `Apply the combined multiplier to the original value to find the final price.`,
        workingOut: `\\\\(\\\\text{Final Valuation} = \\\\$${origPrice} \\\\times 1.1850 \\\\approx \\\\$${finalPrice}\\\\)`,
        graphData: null
      }
    ]
  });
}

// Write the file back!
const startIndex = fileContent.indexOf('  {\n    "id": "y10-1c-high-q1",');
if (startIndex === -1) {
  console.error("Could not find start index of high difficulty questions!");
  process.exit(1);
}

const basePart = fileContent.substring(0, startIndex);

const generatedString = y10Scenarios.map(q => {
  return `  {\n    "id": "${q.id}",\n    "type": "multiple_choice",\n    "difficulty": "hard",\n    "timeLimit": 120,\n    "question": "${q.question}",\n    "opts": [\n${q.options.map(o => `      "${o}"`).join(',\n')}\n    ],\n    "a": "${q.a}",\n    "solutionSteps": [\n${q.solutionSteps.map(s => `      {\n        "explanation": "${s.explanation}",\n        "workingOut": "${s.workingOut}",\n        "graphData": null\n      }`).join(',\n')}\n    ],\n    "t": "Repeated increases and decreases"\n  }`;
}).join(',\n') + '\n];\n';

const newFileContent = basePart + generatedString;
writeFileSync(baseFile, newFileContent, 'utf8');
console.log("Successfully regenerated seedYear10Ch1CQuestions.js with 100 diverse percentage repeated changes questions!");
