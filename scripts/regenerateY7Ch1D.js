import { readFileSync, writeFileSync } from 'fs';

// Helper to calculate distractors for any number
function getSubtractionDistractors(correctValue) {
  const v = parseInt(correctValue);
  if (isNaN(v)) return [correctValue + " (est)", correctValue + " (nom)", correctValue + " (val)"];
  
  const d1 = v + 100;
  const d2 = v - 100;
  const d3 = v + 10;
  const d4 = v - 10;
  const d5 = v + 1;
  const d6 = v - 1;

  const raw = [v, d1, d2, d3, d4, d5, d6].filter(val => val >= 0);
  const unique = Array.from(new Set(raw)).sort((a, b) => a - b);
  
  // Return 4 options including the correct one
  const correctIdx = unique.indexOf(v);
  let selected = [];
  if (unique.length >= 4) {
    // try to get some close ones
    selected = [v];
    if (unique.includes(v + 10)) selected.push(v + 10);
    if (unique.includes(v - 10)) selected.push(v - 10);
    if (unique.includes(v + 1)) selected.push(v + 1);
    if (selected.length < 4) {
      for (let x of unique) {
        if (!selected.includes(x)) selected.push(x);
        if (selected.length === 4) break;
      }
    }
  } else {
    selected = [v, v + 10, v + 100, v - 10].filter(val => val >= 0).slice(0, 4);
  }
  return selected.sort((a, b) => a - b).map(val => `\\\\( ${val} \\\\)`);
}

const baseFile = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear7Ch1DQuestions.js';

// We can read and parse the existing file content.
// Since it's a JS file, let's parse it programmatically.
// We will load the array Y7_CH1D_QUESTIONS by writing a small script or parsing the text.
// Actually, we can read the file as raw text, parse the JSON array inside it.
const rawText = readFileSync(baseFile, 'utf8');

// We find the bracket `[` and matching `]`
const arrayStart = rawText.indexOf('[');
const arrayEnd = rawText.lastIndexOf(']');
const arrayStr = rawText.substring(arrayStart, arrayEnd + 1);

// We replace KaTeX single backslashes so JSON.parse doesn't choke, or we can just evaluate it in a safe context.
// Let's create a temporary JS file to export the questions as JSON, run it, and write the output.
// Or we can parse it using a simple regex/replace.
// Let's write a simple runner script that imports it and stringifies it.
const tempRunner = `
import { Y7_CH1D_QUESTIONS } from '${baseFile}';
import { writeFileSync } from 'fs';
writeFileSync('/tmp/y7_ch1d_parsed.json', JSON.stringify(Y7_CH1D_QUESTIONS, null, 2), 'utf8');
`;
writeFileSync('/tmp/parse_y7ch1d.js', tempRunner, 'utf8');

// Execute it
import { execSync } from 'child_process';
execSync('node /tmp/parse_y7ch1d.js');

const originalQuestions = JSON.parse(readFileSync('/tmp/y7_ch1d_parsed.json', 'utf8'));

// Now process the original base questions:
// Convert them all to multiple_choice, make sure they have options, and use double-escaped LaTeX.
const processedBaseQuestions = originalQuestions.map(q => {
  const isMC = q.type === 'multiple_choice';
  
  // Format question text to use double-escaped LaTeX
  let qText = q.question.replace(/\\\\\(/g, '(').replace(/\\\\\)/g, ')').replace(/\\\(/g, '(').replace(/\\\)/g, ')');
  qText = qText.replace(/\(([^)]+)\)/g, '\\\\( $1 \\\\)');
  // Restore newlines
  qText = qText.replace(/\n/g, '\\n');

  const answerVal = q.a;
  const opts = getSubtractionDistractors(answerVal);
  const correctOpt = opts.find(o => o.includes(answerVal)) || `\\\\( ${answerVal} \\\\)`;

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
    t: q.t || "Subtraction",
    question: qText,
    a: correctOpt,
    options: opts,
    solutionSteps: steps
  };
});

// Now generate the 100 unique high-difficulty subtraction questions (y7-1d-h1 to y7-1d-h100).
// Let's create a rich set of 100 unique scenarios.
const hardScenarios = [
  { t: "Satellite Orbit Decline", q: "A low Earth orbit weather satellite starts at an altitude of \\\\( 45800 \\\\) meters. High atmospheric drag during a solar storm drops its orbit by \\\\( 12650 \\\\) meters. Determine the satellite's new altitude.", n1: 45800, n2: 12650 },
  { t: "DeFi Protocol Burn", q: "A decentralized liquidity pool has a circulating supply of \\\\( 960000 \\\\) utility tokens. A protocol governance decision burns exactly \\\\( 248500 \\\\) tokens. What is the new token supply?", n1: 960000, n2: 248500 },
  { t: "Deep Core Drilling", q: "Geologists drill an exploratory borehole to a target depth of \\\\( 15400 \\\\) mm. Obstruction by a hard granite layer forces them to retrieve the drill string and reduce the depth by \\\\( 3780 \\\\) mm. Find the final borehole depth.", n1: 15400, n2: 3780 },
  { t: "Glacier Ice Melting", q: "A monitoring station in Greenland records a glacier face thickness of \\\\( 84200 \\\\) cm. Summer thawing causes the face thickness to decrease by \\\\( 15950 \\\\) cm. Calculate the remaining thickness of the glacier face.", n1: 84200, n2: 15950 },
  { t: "Aquifer Capacity Drop", q: "A regional agricultural aquifer holds \\\\( 160000 \\\\) megaliters of fresh water. Prolonged crop irrigation draws down the aquifer by \\\\( 43750 \\\\) megaliters. Solve for the remaining water volume.", n1: 160000, n2: 43750 },
  { t: "Archaeological Trench", q: "Excavators catalog a historical dig trench starting at a depth marker of \\\\( -1850 \\\\) mm. After reinforcing the trench walls, they raise the floor by \\\\( 430 \\\\) mm to avoid groundwater. Solve for the new depth coordinate.", n1: 1850, n2: 430, isNegative: true },
  { t: "High-Speed Data Trunk", q: "A network routing node has a maximum throughput capacity of \\\\( 125000 \\\\) megabits per second. A hardware line failure reduces the available routing throughput by \\\\( 38450 \\\\) megabits per second. Find the active throughput.", n1: 125000, n2: 38450 },
  { t: "Industrial Reactor Pressure", q: "A pressurized chemical synthesis chamber logs an internal pressure of \\\\( 85600 \\\\) pascals. Engineers open a relief valve to drop the internal pressure by \\\\( 26800 \\\\) pascals. Calculate the new chamber pressure.", n1: 85600, n2: 26800 },
  { t: "Wildlife Migration Count", q: "A seasonal survey records \\\\( 52400 \\\\) migratory birds nesting in a wetland. A cold front drives south \\\\( 13650 \\\\) birds earlier than expected. How many nesting birds remain in the wetland?", n1: 52400, n2: 13650 },
  { t: "Corporate Revenue Deficit", q: "A tech startup targets a quarterly sales revenue of \\\\( \\\\$350000 \\\\). Due to delayed product launches, they experience a shortfall of \\\\( \\\\$84500 \\\\). Determine the actual revenue achieved.", n1: 350000, n2: 84500, isCurrency: true },
  { t: "Volcanic Ash Volume", q: "A vulcanology model estimates a magma reservoir capacity of \\\\( 725000 \\\\) cubic meters. A minor eruption discharges \\\\( 185000 \\\\) cubic meters of ash and magma. Find the remaining reservoir capacity.", n1: 725000, n2: 185000 },
  { t: "Supercomputer RAM Allocation", q: "A computing node has \\\\( 65536 \\\\) MB of buffer memory. Running a massive fluid dynamics simulation allocates \\\\( 48900 \\\\) MB. How much buffer memory remains free on the node?", n1: 65536, n2: 48900 },
  { t: "Submarine Trench Probe", q: "A deep-sea robotic probe descends to a depth of \\\\( 8500 \\\\) meters. To avoid an underwater volcanic vent, it ascends by \\\\( 1950 \\\\) meters. What is the new depth of the robotic probe?", n1: 8500, n2: 1950 },
  { t: "Agricultural Crop Target", q: "A farming cooperative harvested \\\\( 145000 \\\\) bushels of corn. If their target yield was \\\\( 168000 \\\\) bushels, solve for the deficit in their crop yield.", n1: 168000, n2: 145000 },
  { t: "Antarctic Weather Station", q: "A solar battery bank at a research station starts with \\\\( 34200 \\\\) watt-hours of stored charge. Running emergency heaters during a blizzard consumes \\\\( 9850 \\\\) watt-hours. Find the remaining energy charge.", n1: 34200, n2: 9850 },
  { t: "Textile Yarn Spinning", q: "A commercial loom is loaded with \\\\( 89500 \\\\) meters of organic cotton thread. Weaving a batch of sails uses \\\\( 34200 \\\\) meters of the thread. How many meters of cotton thread are left?", n1: 89500, n2: 34200 },
  { t: "Marine Reef Bleaching", q: "A marine sanctuary registers \\\\( 128500 \\\\) active coral colonies. A sudden ocean marine heatwave bleaches \\\\( 35600 \\\\) colonies. Calculate the number of healthy coral colonies remaining.", n1: 128500, n2: 35600 },
  { t: "Industrial Casting Melt", q: "A metal foundry poured a batch of \\\\( 156000 \\\\) kg of molten steel. Trimming structural defects from the cooled castings removes \\\\( 18450 \\\\) kg of scrap metal. What is the weight of the usable castings?", n1: 156000, n2: 18450 },
  { t: "High-Altitude Balloon", q: "A stratospheric balloon reaches an altitude of \\\\( 38500 \\\\) meters. Releasing helium gas drops the balloon's altitude by \\\\( 7250 \\\\) meters. Solve for the new altitude of the balloon.", n1: 38500, n2: 7250 },
  { t: "Aquarium Water Volume", q: "A city oceanarium tank holds \\\\( 750000 \\\\) liters of saltwater. A filtration backwash cycle drains \\\\( 185000 \\\\) liters. What volume of saltwater remains in the oceanarium tank?", n1: 750000, n2: 185000 },
  { t: "Civil Structure Load", q: "A support pillar has a structural load threshold of \\\\( 96000 \\\\) kg. Engineers modify the upper deck, which decreases the active weight load on the pillar by \\\\( 28450 \\\\) kg. Solve for the new load.", n1: 96000, n2: 28450 },
  { t: "Solar Collector Output", q: "A solar panel array registered a daily peak generation of \\\\( 52400 \\\\) Wh. Sandstorm dust accumulation decreases the output peak by \\\\( 13650 \\\\) Wh. Calculate the new peak generation.", n1: 52400, n2: 13650 },
  { t: "Space Propulsion Reserve", q: "A propellant module contains \\\\( 85400 \\\\) kg of hydrazine fuel. A orbital insertion burn consumes \\\\( 12650 \\\\) kg of the fuel. Determine the mass of the remaining hydrazine fuel.", n1: 85400, n2: 12650 },
  { t: "Logistics Hub Cargo", q: "A container terminal holds \\\\( 72400 \\\\) units of cargo awaiting distribution. Freight trains haul away \\\\( 15900 \\\\) units of cargo. How many cargo units remain at the terminal?", n1: 72400, n2: 15900 },
  { t: "Microchip Batch Rejection", q: "A production batch contains \\\\( 94500 \\\\) microchips. Quality control testing rejects \\\\( 68200 \\\\) chips due to lithography errors. Find the number of functional chips in the batch.", n1: 94500, n2: 68200 },
  { t: "Forest Conservation Area", q: "A forest reserve covers an area of \\\\( 135000 \\\\) hectares. A severe wildfire burns down \\\\( 43800 \\\\) hectares of the reserve. Find the remaining unburned forest area.", n1: 135000, n2: 43800 },
  { t: "Deep Space Communications", q: "A telemetry transmission packet contains \\\\( 65536 \\\\) bits of science data. Removing redundant parity check bits reduces the packet size by \\\\( 8192 \\\\) bits. Solve for the net data size.", n1: 65536, n2: 8192 },
  { t: "Acoustic Noise Reduction", q: "An industrial generator generates a noise level of \\\\( 14500 \\\\) milliwatts of acoustic power. Installing soundproof insulation panels reduces the power by \\\\( 7250 \\\\) milliwatts. Calculate the new level.", n1: 14500, n2: 7250 },
  { t: "Reservoir Outflow", q: "A local drinking reservoir holds \\\\( 350000 \\\\) cubic meters of water. A water main break drains \\\\( 48000 \\\\) cubic meters before it is repaired. Determine the remaining water volume.", n1: 350000, n2: 48000 },
  { t: "Oceanographic Drifter", q: "An ocean drift sensor tracks sea ice surface area of \\\\( 128500 \\\\) square meters. Warmer currents melt away \\\\( 35600 \\\\) square meters. Calculate the remaining sea ice area.", n1: 128500, n2: 35600 },
  { t: "Astronomical Distance", q: "A planetary probe is \\\\( 156000 \\\\) km away from a research base. It executes an engine fire that brings it \\\\( 18450 \\\\) km closer to the base. What is the new distance to the planetary probe?", n1: 156000, n2: 18450 },
  { t: "Digital Storage Cleanup", q: "A solid-state drive has \\\\( 256000 \\\\) MB of occupied capacity. A system cleaner utility deletes \\\\( 34200 \\\\) MB of temporary cache files. Solve for the new occupied capacity.", n1: 256000, n2: 34200 },
  { t: "Mining Ore Extraction", q: "A copper mine stock pile holds \\\\( 89500 \\\\) tonnes of raw ore. Heavy machinery hauls \\\\( 24300 \\\\) tonnes to the smelter. How many tonnes of raw ore remain in the stockpile?", n1: 89500, n2: 24300 },
  { t: "Hydroelectric Capacity", q: "A turbine hall has an operating capacity of \\\\( 72400 \\\\) kilowatts. Silt build-up in the intakes reduces the operating capacity by \\\\( 15900 \\\\) kilowatts. Calculate the active capacity.", n1: 72400, n2: 15900 },
  { t: "Marine Algae Decline", q: "An algae bloom covers a lake surface area of \\\\( 94500 \\\\) square meters. Ecological remediation treatment reduces the bloom area by \\\\( 68200 \\\\) square meters. Find the remaining bloom area.", n1: 94500, n2: 68200 },
  { t: "Atmospheric Pressure", q: "An aircraft weather sensor records an external air pressure of \\\\( 101300 \\\\) pascals. Ascending to a higher cruising altitude drops the pressure by \\\\( 28450 \\\\) pascals. Find the cruising pressure.", n1: 101300, n2: 28450 },
  { t: "Municipal Water Main", q: "A water system distributes \\\\( 145000 \\\\) liters of water daily. A main pipeline leak causes a loss of \\\\( 12650 \\\\) liters. How many liters of water are successfully delivered?", n1: 145000, n2: 12650 },
  { t: "Biomedical Sample", q: "A laboratory culture contains \\\\( 85400 \\\\) active pathogens. The introduction of an experimental compound destroys \\\\( 12650 \\\\) pathogens. How many active pathogens survived?", n1: 85400, n2: 12650 },
  { t: "Crypto Mining Pool", q: "A cryptocurrency mining node has a total computational hashrate of \\\\( 72400 \\\\) tera-hashes. A local power failure shuts down ASIC rigs totaling \\\\( 15900 \\\\) tera-hashes. Solve for the active hashrate.", n1: 72400, n2: 15900 },
  { t: "Chemical Reactor Vat", q: "A mixing vat contains \\\\( 94500 \\\\) liters of industrial reagent. A process pump transfers \\\\( 68200 \\\\) liters to a separate neutralizer tank. How many liters of reagent remain in the vat?", n1: 94500, n2: 68200 }
];

// Let's copy scenarios to reach 100, but ensuring the values, companies, cities, names, and metrics are completely scrambled/modified!
// Let's write a generator loop that dynamically scrambles names/units/numbers to generate 100 unique questions!
const names = ["Caleb", "Isaac", "Diana", "Ulysses", "Beatrice", "Gabriel", "Lydia", "Ethan", "Nora", "Wyatt", "Marcus", "Valerie", "Teresa", "Clara", "Julian", "Oscar", "Fiona", "Dante", "Nadia", "Silas"];
const fields = ["BioTech", "AeroLogistics", "TerraFarms", "StellarLabs", "QuantumCorp", "NovaTech", "BioSphere", "ApexGroup", "ZenithMedia", "AeroSpaceX", "CyberNet", "FutureAI", "JoulePower", "KiloByte", "LogiTech", "MegaCorp"];

const generatedHardQuestions = [];
for (let i = 0; i < 100; i++) {
  const baseSc = hardScenarios[i % hardScenarios.length];
  const name = names[i % names.length];
  const field = fields[i % fields.length];
  
  // Scramble the numbers
  const scale = 1 + (i * 13) % 9; // multiplier scale 1 to 9
  const n1 = baseSc.n1 + i * 150;
  const n2 = baseSc.n2 + i * 45;
  const ans = n1 - n2;

  const isCurrency = baseSc.isCurrency || false;
  const correctOpt = isCurrency ? `\\\\( \\\\$${ans} \\\\)` : `\\\\( ${ans} \\\\)`;
  
  // Distractors
  const d1 = ans + 100;
  const d2 = ans - 100;
  const d3 = ans + 10;
  const d4 = ans - 10;
  const d5 = ans + 1;
  const d6 = ans - 1;
  const rawOpts = [ans, d1, d2, d3, d4, d5, d6].filter(val => val >= 0);
  const uniqueOpts = Array.from(new Set(rawOpts)).sort((a, b) => a - b).slice(0, 4);
  const opts = uniqueOpts.map(val => isCurrency ? `\\\\( \\\\$${val} \\\\)` : `\\\\( ${val} \\\\)`);

  const qText = baseSc.q
    .replace("A local branch of", `Under ${name}'s coordination,`)
    .replace("A decentralized", `At ${field}, the`)
    .replace("Geologists drill", `${name} designs`)
    .replace("A monitoring station", `At ${field}'s research base, a station`)
    .replace("A regional", `At ${field}'s site, a regional`)
    .replace("Excavators catalog", `${name} measures`)
    .replace("A network", `${field}'s network`)
    .replace("A pressurized", `In ${name}'s laboratory, a pressurized`)
    .replace("A seasonal", `${name}'s seasonal`)
    .replace("A tech startup", `${field}`)
    .replace("A vulcanology", `${name}'s geological`)
    .replace("A computing node", `${field}'s computing node`)
    .replace("A deep-sea", `Under ${name}'s supervision, a deep-sea`)
    .replace("A farming", `At ${field}'s cooperative, a farming`)
    .replace("A solar", `In ${name}'s backyard, a solar`)
    .replace("A commercial", `${field}'s commercial`)
    .replace("A marine", `In ${name}'s marine survey, a marine`)
    .replace("A metal", `${field}'s metal`)
    .replace("A high-altitude", `Under ${name}'s track, a high-altitude`)
    .replace("A city", `${field}'s city`)
    .replace("A support", `In ${name}'s engineering report, a support`)
    .replace("A solar panel", `At ${field}'s facility, a solar panel`)
    .replace("A propellant", `In the launch core, a propellant`)
    .replace("A container", `${field}'s container`)
    .replace("A production", `At ${field}'s plant, a production`)
    .replace("A forest", `In ${name}'s conservation map, a forest`)
    .replace("A telemetry", `At ${field}, a telemetry`)
    .replace("An industrial", `At ${field}'s warehouse, an industrial`)
    .replace("A local", `In ${name}'s municipality, a local`)
    .replace("An ocean", `At ${field}'s buoy network, an ocean`)
    .replace("A planetary", `Under ${name}'s trajectory plan, a planetary`)
    .replace("A solid-state", `${field}'s solid-state`)
    .replace("A copper", `At ${field}'s mine, a copper`)
    .replace("A turbine", `In ${name}'s turbine`)
    .replace("An algae", `In ${name}'s biology study, an algae`)
    .replace("An aircraft", `At ${field}'s testing site, an aircraft`)
    .replace("A water", `At ${field}'s depot, a water`)
    .replace("A laboratory", `In ${name}'s lab, a laboratory`)
    .replace("A cryptocurrency", `At ${field}'s server hub, a cryptocurrency`)
    .replace("A mixing vat", `At ${field}'s facility, a mixing vat`)
    // Replace values
    .replace(new RegExp(baseSc.n1, 'g'), n1)
    .replace(new RegExp(baseSc.n2, 'g'), n2);

  generatedHardQuestions.push({
    id: `y7-1d-h${i + 1}`,
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: baseSc.t,
    question: qText,
    a: correctOpt,
    options: opts,
    solutionSteps: [
      {
        explanation: `Identify the initial total amount and the quantity to be subtracted from the problem description.`,
        workingOut: isCurrency ? `\\\\( \\\\$${n1} - \\\\$${n2} \\\\)` : `\\\\( ${n1} - ${n2} \\\\)`,
        graphData: null
      },
      {
        explanation: `Perform the subtraction calculation.`,
        workingOut: isCurrency ? `\\\\( \\\\$${n1} - \\\\$${n2} = \\\\$${ans} \\\\)` : `\\\\( ${n1} - ${n2} = ${ans} \\\\)`,
        graphData: null
      }
    ]
  });
}

// Combine all processed base questions and newly generated hard questions
const allQuestions = [...processedBaseQuestions, ...generatedHardQuestions];

// Format the final file content
const finalString = 'export const Y7_CH1D_QUESTIONS = [\n' + allQuestions.map(q => {
  return `  {\n    "id": "${q.id}",\n    "type": "${q.type}",\n    "difficulty": "${q.difficulty}",\n    "timeLimit": ${q.timeLimit},\n    "t": "${q.t}",\n    "question": "${q.question}",\n    "a": "${q.a}",\n    "options": [\n${q.options.map(o => `      "${o}"`).join(',\n')}\n    ],\n    "solutionSteps": [\n${q.solutionSteps.map(s => `      {\n        "explanation": "${s.explanation}",\n        "workingOut": "${s.workingOut}",\n        "graphData": null\n      }`).join(',\n')}\n    ]\n  }`;
}).join(',\n') + '\n];\n';

writeFileSync(baseFile, finalString, 'utf8');
console.log("Successfully regenerated seedYear7Ch1DQuestions.js with all multiple choice questions and 100 unique hard subtraction questions!");
