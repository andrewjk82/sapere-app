import { readFileSync, writeFileSync } from 'fs';

// Helper to calculate distractors for multiplication
function getMultiplicationDistractors(correctValue, val1, val2) {
  const v = parseInt(correctValue);
  const v1 = parseInt(val1);
  const v2 = parseInt(val2);
  
  if (isNaN(v)) return [correctValue + " (est)", correctValue + " (nom)", correctValue + " (val)"];
  
  const d1 = v + 10;
  const d2 = v - 10;
  const d3 = (v1 + 1) * v2;
  const d4 = v1 * (v2 + 1);
  const d5 = (v1 - 1) * v2;
  const d6 = v1 * (v2 - 1);

  const raw = [v, d1, d2, d3, d4, d5, d6].filter(val => val > 0);
  const unique = Array.from(new Set(raw)).sort((a, b) => a - b);
  
  // Return 4 options including the correct one
  let selected = [v];
  for (let x of unique) {
    if (!selected.includes(x)) selected.push(x);
    if (selected.length === 4) break;
  }
  
  if (selected.length < 4) {
    selected = [v, v + 10, v + 100, v + 50].filter(val => val > 0).slice(0, 4);
  }
  
  return selected.sort((a, b) => a - b).map(val => `\\\\( ${val} \\\\)`);
}

const baseFile = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear7Ch1EQuestions.js';

// Let's parse base questions programmatically
const tempRunner = `
import { Y7_CH1E_QUESTIONS } from '${baseFile}';
import { writeFileSync } from 'fs';
writeFileSync('/tmp/y7_ch1e_parsed.json', JSON.stringify(Y7_CH1E_QUESTIONS, null, 2), 'utf8');
`;
writeFileSync('/tmp/parse_y7ch1e.js', tempRunner, 'utf8');

import { execSync } from 'child_process';
execSync('node /tmp/parse_y7ch1e.js');

const originalQuestions = JSON.parse(readFileSync('/tmp/y7_ch1e_parsed.json', 'utf8'));

// Now process the original base questions:
const processedBaseQuestions = originalQuestions.map(q => {
  let qText = q.question.replace(/\\\\\(/g, '(').replace(/\\\\\)/g, ')').replace(/\\\(/g, '(').replace(/\\\)/g, ')');
  qText = qText.replace(/\(([^)]+)\)/g, '\\\\( $1 \\\\)');
  qText = qText.replace(/\n/g, '\\n');

  // Extract val1 and val2 if possible
  const match = qText.match(/\\\\\(?\s*(\d+)\s*\\times\s*(\d+)\s*\\\\\(?/);
  const val1 = match ? match[1] : 10;
  const val2 = match ? match[2] : q.a;

  const opts = getMultiplicationDistractors(q.a, val1, val2);
  const correctOpt = opts.find(o => o.includes(q.a)) || `\\\\( ${q.a} \\\\)`;

  const steps = (q.solutionSteps || []).map(s => {
    let exp = s.explanation.replace(/\\\\\(/g, '(').replace(/\\\\\)/g, ')').replace(/\\\(/g, '(').replace(/\\\)/g, ')');
    exp = exp.replace(/\(([^)]+)\)/g, '\\\\( $1 \\\\)');

    let work = s.workingOut.replace(/\\\\\(/g, '(').replace(/\\\\\)/g, ')').replace(/\\\(/g, '(').replace(/\\\)/g, ')');
    if (work && !work.includes('\\\\(')) {
      work = `\\\\( ${work} \\\\)`;
    }

    return {
      explanation: exp,
      workingOut: work,
      graphData: null
    };
  });

  return {
    id: q.id,
    type: "multiple_choice",
    difficulty: q.difficulty || "easy",
    timeLimit: q.timeLimit || 60,
    t: q.t || "Multiplication",
    question: qText,
    a: correctOpt,
    options: opts,
    solutionSteps: steps
  };
});

// Now generate the 100 unique high-difficulty multiplication questions (y7-1e-h1 to y7-1e-h100).
const hardScenarios = [
  { t: "Satellite Telemetry Transmission", q: "An Earth observations satellite transmits telemetry packets at a rate of \\\\( 450 \\\\) packets per orbit. If it completes \\\\( 12 \\\\) orbits daily, calculate the total packets transmitted.", val1: 450, val2: 12 },
  { t: "DeFi Contract Batch", q: "A smart contract distributes standard gas allowances of \\\\( 850 \\\\) units to each decentralized wallet. Find the total gas distributed to a batch of \\\\( 15 \\\\) wallets.", val1: 850, val2: 15 },
  { t: "Solar Collector Array", q: "A regional solar installation arranges photovoltaic panels in \\\\( 35 \\\\) rows with \\\\( 25 \\\\) panels in each row. How many panels are installed in total?", val1: 35, val2: 25 },
  { t: "Core Memory Buffer", q: "A high-performance cluster allocates a server memory buffer divided into \\\\( 16 \\\\) logical sectors, each holding \\\\( 2048 \\\\) megabytes. Solve for the total buffer size.", val1: 16, val2: 2048 },
  { t: "Deep Trench Survey", q: "Oceanographers log a seafloor survey grid consisting of \\\\( 18 \\\\) survey lanes. Each lane spans exactly \\\\( 1450 \\\\) meters. Determine the total length of the lanes.", val1: 18, val2: 1450 },
  { t: "Industrial Mixing Vats", q: "A chemical production line operates \\\\( 14 \\\\) vats of processing reagent. If each vat holds \\\\( 3250 \\\\) liters, find the total volume of reagent.", val1: 14, val2: 3250 },
  { t: "Agricultural Row Crops", q: "A tree orchard is configured with \\\\( 28 \\\\) rows of organic apple saplings. If each row contains \\\\( 125 \\\\) saplings, calculate the total sapling count.", val1: 28, val2: 125 },
  { t: "Launch Cargo Payloads", q: "A heavy-lift transport rocket hosts \\\\( 8 \\\\) scientific cargo modules. If each module weighs exactly \\\\( 1850 \\\\) kg, calculate the total payload weight.", val1: 8, val2: 1850 },
  { t: "Aquifer Filtration Wells", q: "A district filtration system runs \\\\( 24 \\\\) sub-wells, each pumping fresh water at a rate of \\\\( 3800 \\\\) liters per hour. Find the total water pumped in one hour.", val1: 24, val2: 3800 },
  { t: "Crypto Token Burn Cycle", q: "A token protocol performs a monthly burn phase, destroying \\\\( 15000 \\\\) coins on each of \\\\( 6 \\\\) fault-tolerant nodes. Calculate the total burned coins.", val1: 15000, val2: 6 },
  { t: "Marine Reef Survey", q: "Ecologists cataloging coral health log fish populations across \\\\( 40 \\\\) test sectors. If each sector holds \\\\( 280 \\— fish, find the total fish count.", val1: 40, val2: 280 },
  { t: "Supercomputer CPU Core", q: "A supercomputing rack runs \\\\( 32 \\\\) processing nodes. If each node contains \\\\( 64 \\\\) cores, solve for the total core count.", val1: 32, val2: 64 },
  { t: "Acoustic Insulation Panel", q: "A recording studio seals wall panels using a grid of \\\\( 15 \\\\) rows by \\\\( 12 \\\\) acoustical panels. Calculate the total panels installed.", val1: 15, val2: 12 },
  { t: "Forest Sapling Seedlings", q: "A municipal reforestation depot packs pine seedlings in crates. If they ship \\\\( 120 \\\\) crates with \\\\( 75 \\\\) seedlings each, find the total seedlings.", val1: 120, val2: 75 },
  { t: "Sports Arena Gate", q: "A multi-day tournament monitors gate entries. If \\\\( 8 \\\\) ticketing turnstiles pass exactly \\\\( 1240 \\\\) spectators each, determine the total entries.", val1: 8, val2: 1240 },
  { t: "Rare Archives Scanning", q: "A digital history project scans old files. If they complete \\\\( 16 \\\\) volumes, each containing \\\\( 450 \\\\) pages, find the total pages scanned.", val1: 16, val2: 450 },
  { t: "Hospital Vaccine Shipments", q: "A healthcare depot delivers vaccine packages. If they distribute \\\\( 35 \\\\) boxes with \\\\( 250 \\\\) vials each, calculate the total vials distributed.", val1: 35, val2: 250 },
  { t: "Wind Farm Grid Peak", q: "An offshore wind facility runs \\\\( 18 \\\\) turbines. If each turbine peak yield is \\\\( 1450 \\\\) kilowatts, determine the total facility peak output.", val1: 18, val2: 1450 },
  { t: "Launch Vehicle Propellant", q: "A launcher fuel system uses \\\\( 6 \\\\) secondary booster tanks, each loaded with \\\\( 9800 \\\\) kg of propellant. Find the total propellant mass.", val1: 6, val2: 9800 },
  { t: "Urban Housing Density", q: "A residential development builds \\\\( 14 \\\\) block towers. If each tower contains \\\\( 125 \\\\) apartments, solve for the total apartment count.", val1: 14, val2: 125 }
];

const names = ["Caleb", "Isaac", "Diana", "Ulysses", "Beatrice", "Gabriel", "Lydia", "Ethan", "Nora", "Wyatt", "Marcus", "Valerie", "Teresa", "Clara", "Julian", "Oscar", "Fiona", "Dante", "Nadia", "Silas"];
const fields = ["BioTech", "AeroLogistics", "TerraFarms", "StellarLabs", "QuantumCorp", "NovaTech", "BioSphere", "ApexGroup", "ZenithMedia", "AeroSpaceX", "CyberNet", "FutureAI", "JoulePower", "KiloByte", "LogiTech", "MegaCorp"];

const generatedHardQuestions = [];
for (let i = 0; i < 100; i++) {
  const baseSc = hardScenarios[i % hardScenarios.length];
  const name = names[i % names.length];
  const field = fields[i % fields.length];
  
  // Scramble values
  const v1 = baseSc.val1 + (i * 7) % 30;
  const v2 = baseSc.val2 + (i * 3) % 15;
  const ans = v1 * v2;

  const correctOpt = `\\\\( ${ans} \\\\)`;
  const opts = getMultiplicationDistractors(ans, v1, v2);

  const qText = baseSc.q
    .replace("An Earth observations", `At ${field}'s space base, an Earth`)
    .replace("A smart", `Under ${name}'s supervision, a smart`)
    .replace("A regional", `At ${field}'s solar site, a regional`)
    .replace("A high-performance", `${name} sets up a high-performance`)
    .replace("Oceanographers log", `During a marine voyage, ${name} logs`)
    .replace("A chemical", `In ${field}'s facility, a chemical`)
    .replace("A tree orchard", `At ${field}'s farm, a tree orchard`)
    .replace("A heavy-lift", `At ${field}'s test range, a heavy-lift`)
    .replace("A district", `Under ${name}'s engineering project, a district`)
    .replace("A token protocol", `At ${field}'s crypto node, a token protocol`)
    .replace("Ecologists cataloging", `In ${name}'s marine report, ecologists cataloging`)
    .replace("A supercomputing", `At ${field}'s server stack, a supercomputing`)
    .replace("A recording", `At ${field}'s recording`)
    .replace("A municipal", `In ${name}'s forestry project, a municipal`)
    .replace("A multi-day", `Under ${name}'s coordination, a multi-day`)
    .replace("A digital", `At ${field}'s history department, a digital`)
    .replace("A healthcare", `At ${field}'s depot, a healthcare`)
    .replace("An offshore", `At ${field}'s station, an offshore`)
    .replace("A launcher", `Under ${name}'s aerospace plan, a launcher`)
    .replace("A residential", `In ${name}'s municipal development plan, a residential`)
    .replace(new RegExp(baseSc.val1, 'g'), v1)
    .replace(new RegExp(baseSc.val2, 'g'), v2);

  generatedHardQuestions.push({
    id: `y7-1e-h${i + 1}`,
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: baseSc.t,
    question: qText,
    a: correctOpt,
    options: opts,
    solutionSteps: [
      {
        explanation: `Identify the multipliers and set up the multiplication.`,
        workingOut: `\\\\( ${v1} \\\\times ${v2} \\\\)`,
        graphData: null
      },
      {
        explanation: `Perform the multiplication calculation to find the total product.`,
        workingOut: `\\\\( ${v1} \\\\times ${v2} = ${ans} \\\\)`,
        graphData: null
      }
    ]
  });
}

const allQuestions = [...processedBaseQuestions, ...generatedHardQuestions];

const finalString = 'export const Y7_CH1E_QUESTIONS = [\n' + allQuestions.map(q => {
  return `  {\n    "id": "${q.id}",\n    "type": "${q.type}",\n    "difficulty": "${q.difficulty}",\n    "timeLimit": ${q.timeLimit},\n    "t": "${q.t}",\n    "question": "${q.question}",\n    "a": "${q.a}",\n    "options": [\n${q.options.map(o => `      "${o}"`).join(',\n')}\n    ],\n    "solutionSteps": [\n${q.solutionSteps.map(s => `      {\n        "explanation": "${s.explanation}",\n        "workingOut": "${s.workingOut}",\n        "graphData": null\n      }`).join(',\n')}\n    ]\n  }`;
}).join(',\n') + '\n];\n';

writeFileSync(baseFile, finalString, 'utf8');
console.log("Successfully regenerated seedYear7Ch1EQuestions.js with all multiple choice questions and 100 unique hard multiplication questions!");
