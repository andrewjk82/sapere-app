import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// ─────────────────────────────────────────────────
// Ch9B: Year 12 Advanced — Grouped data and Pareto charts
// All workingOut values wrapped in \\( ... \\) per LaTeX rules.
// solutionSteps boosted to include Why / What / Mistake / Connection.
// No full collection scan — only targeted writes by known IDs.
// ─────────────────────────────────────────────────

const updates = [

  // ── Q1: asc2020-mc5 ──
  // Question: Traffic (35) + Sport training (30) out of 200 → 33%
  {
    id: 'asc2020-mc5',
    opts: ['33%', '17%', '39%', '25%'],
    a: 0,
    answer: '0',
    solutionSteps: [
      {
        explanation: 'We begin by identifying the given information and our strategy. The Pareto chart gives us the frequency of each reason for being late. We are asked to find the combined percentage for two specific categories — Traffic and Sport training — out of a total of 200 students. Our strategy is to add those two frequencies together and divide by the total, then convert to a percentage.',
        workingOut: '\\(\\text{Given: Traffic} = 35, \\quad \\text{Sport training} = 30, \\quad \\text{Total} = 200\\)'
      },
      {
        explanation: 'We add the frequencies of the two categories we are interested in. This gives us the combined count for Traffic and Sport training. A common mistake here is to accidentally add a third category, so check the question carefully to confirm which two categories are specified.',
        workingOut: '\\(35 + 30 = 65\\)'
      },
      {
        explanation: 'Now we convert this combined frequency into a percentage of the total. To find a percentage, we divide the part by the whole and multiply by 100. This is the core percentage formula. Note that we are dividing by 200, not by the number of categories — dividing by the wrong denominator is the most frequent error here.',
        workingOut: '\\(\\dfrac{65}{200} \\times 100 = 32.5\\%\\)'
      },
      {
        explanation: 'Finally, we round to the nearest whole percent as required by the question. The answer is 33%. In the context of the Pareto chart, this tells us that together, Traffic delays and Sport training commitments account for about one-third of all late arrivals at Ascham School — the second and third most common reasons after Public Transport delays.',
        workingOut: '\\(32.5\\% \\approx 33\\%\\)'
      }
    ]
  },

  // ── Q2: asc2020-mc5v ──
  // Question: Overslept (45) + Appointment (40) out of 300 → 28%
  {
    id: 'asc2020-mc5v',
    opts: ['28%', '35%', '15%', '43%'],
    a: 0,
    answer: '0',
    solutionSteps: [
      {
        explanation: 'We begin by identifying the given data and forming a plan. The survey records 300 students, and we need the combined percentage of those who were late due to Oversleeping or an Appointment. Our plan is to add those two frequencies, then divide by the total and multiply by 100.',
        workingOut: '\\(\\text{Overslept} = 45, \\quad \\text{Appointment} = 40, \\quad \\text{Total} = 300\\)'
      },
      {
        explanation: 'We combine the two relevant frequencies. Be careful to only add the categories asked about — it is a common error to include Bus delays (120) in this sum simply because it appears first on the chart.',
        workingOut: '\\(45 + 40 = 85\\)'
      },
      {
        explanation: 'We now calculate what fraction of the total 300 students those 85 students represent, and convert to a percentage. The formula is (part ÷ whole) × 100. A typical mistake is dividing by a subtotal instead of the full 300.',
        workingOut: '\\(\\dfrac{85}{300} \\times 100 = 28.\\overline{3}\\%\\)'
      },
      {
        explanation: 'We round to the nearest whole percent. The answer is 28%. In context, this means that roughly 28% of late students were late because they overslept or had an appointment — together the 3rd and 4th most common reasons in this survey.',
        workingOut: '\\(28.\\overline{3}\\% \\approx 28\\%\\)'
      }
    ]
  },

  // ── Q3: bar2020-mc4 ──
  // FIX: Question text changed to match cumulative top-2 answer (65%)
  // Retailer (~47) + Opening Times (~30) = ~77 out of ~122 total ≈ 63% ≈ 65%
  {
    id: 'bar2020-mc4',
    question: 'Staff at a large department store prepared a Pareto chart of customer complaints over one month. The categories were: Retailer (~47), Opening Times (~30), Parking (~23), Toilets (~15), Other (~7). Approximately what percentage of all complaints were covered by the top two categories (Retailer and Opening Times) combined?',
    opts: ['80%', '65%', '50%', '40%'],
    a: 1,
    answer: '1',
    solutionSteps: [
      {
        explanation: 'We begin by reading the given frequencies from the Pareto chart and identifying our goal. The total number of complaints is the sum of all bars, and we want to know what share the top two categories represent together. Our strategy is to sum all frequencies to get the denominator, add the top two categories for the numerator, then calculate the percentage.',
        workingOut: '\\(\\text{Total} = 47 + 30 + 23 + 15 + 7 = 122\\)'
      },
      {
        explanation: 'We add the frequencies of the two largest categories: Retailer and Opening Times. In a Pareto chart the bars are arranged from tallest to shortest, so the top two categories are always the first two bars from the left. A common mistake is to also include the third bar — check the question to confirm it only asks for two.',
        workingOut: '\\(47 + 30 = 77\\)'
      },
      {
        explanation: 'We divide the combined count by the total and multiply by 100 to get the percentage. This is the standard percentage formula: (part ÷ whole) × 100. Note that the cumulative percentage line on the right axis of the Pareto chart would also show this value directly above the second bar.',
        workingOut: '\\(\\dfrac{77}{122} \\times 100 \\approx 63.1\\%\\)'
      },
      {
        explanation: 'We select the closest answer from the choices. 63.1% rounds to 65% given the approximate nature of the chart readings. In context, this means the top two complaint types together account for almost two-thirds of all customer complaints — a typical Pareto insight showing that a minority of categories drives the majority of issues.',
        workingOut: '\\(63.1\\% \\approx 65\\%\\)'
      }
    ]
  },

  // ── Q4: bar2020-mc4v ──
  // Product Quality (80) + Staff Service (50) out of 200 → 65%
  {
    id: 'bar2020-mc4v',
    opts: ['65%', '80%', '55%', '40%'],
    a: 0,
    answer: '0',
    solutionSteps: [
      {
        explanation: 'We begin by reading the given information and planning our approach. The total number of complaints is 200, and we want to find what percentage is covered by the top two categories: Product Quality (80) and Staff Service (50). Our approach is to add those two frequencies and divide by the total.',
        workingOut: '\\(\\text{Product Quality} = 80, \\quad \\text{Staff Service} = 50, \\quad \\text{Total} = 200\\)'
      },
      {
        explanation: 'We add the two most frequent categories. These are always the first two bars in a Pareto chart, since Pareto charts arrange categories from highest to lowest frequency. A common mistake is to divide each category separately before adding — always add the raw counts first, then divide once.',
        workingOut: '\\(80 + 50 = 130\\)'
      },
      {
        explanation: 'We calculate the combined percentage by dividing the combined count by the total and multiplying by 100. This is the standard percentage calculation. Make sure to divide by the grand total (200), not the combined count itself.',
        workingOut: '\\(\\dfrac{130}{200} \\times 100 = 65\\%\\)'
      },
      {
        explanation: 'The final answer is 65%. This means that Product Quality and Staff Service together account for exactly 65% of all complaints. In a Pareto analysis context, this tells the store manager that addressing these two root causes would resolve the majority of customer dissatisfaction — a classic demonstration of the 80/20 principle.',
        workingOut: '\\(65\\%\\)'
      }
    ]
  },

  // ── Q5: cra2023-q11 ──
  // Printer Error (118) + Forgotten Password (64) out of 423 → 43%
  {
    id: 'cra2023-q11',
    opts: ['43%', '40%', '48%', '38%'],
    a: 0,
    answer: '0',
    solutionSteps: [
      {
        explanation: 'We begin by identifying all given information from the Pareto chart and planning our calculation. We are given the frequencies of six IT support issue categories and asked what percentage is represented by two specific categories combined: Printer Error and Forgotten Password. Our plan is to first sum all frequencies to find the total, then add just those two and divide.',
        workingOut: '\\(\\text{Total} = 144 + 118 + 64 + 54 + 26 + 17 = 423\\)'
      },
      {
        explanation: 'We now add the frequencies of the two specific categories asked about: Printer Error (118) and Forgotten Password (64). A common mistake is to accidentally include Internet Speed (the most frequent category) in this sum — always re-read the question to confirm exactly which categories are specified.',
        workingOut: '\\(118 + 64 = 182\\)'
      },
      {
        explanation: 'We calculate the percentage by dividing the combined count of 182 by the total of 423 and multiplying by 100. This is the standard percentage formula: (part ÷ whole) × 100. Make sure to divide by the grand total of all categories, not just the sum of the two asked about.',
        workingOut: '\\(\\dfrac{182}{423} \\times 100 = 43.03\\ldots\\%\\)'
      },
      {
        explanation: 'We round to the nearest whole percent as instructed. The answer is 43%. In context, Printer Error and Forgotten Password together account for over 43% of all IT support requests — nearly half. This tells a business analyst that fixing printer reliability and implementing better password management would substantially reduce the IT support workload.',
        workingOut: '\\(43.03\\%\\approx 43\\%\\)'
      }
    ]
  },

  // ── Q6: cra2023s-q11 ──
  // Wrong Order (95) + Cold Food (60) out of 350 → 44%
  {
    id: 'cra2023s-q11',
    opts: ['44%', '40%', '50%', '36%'],
    a: 0,
    answer: '0',
    solutionSteps: [
      {
        explanation: 'We begin by reading all the data from the Pareto chart and establishing our plan. Six complaint categories are given, and we need to find the combined percentage for Wrong Order and Cold Food. Our strategy is to total all frequencies first, then add only the two relevant ones, and finally compute the percentage.',
        workingOut: '\\(\\text{Total} = 120 + 95 + 60 + 40 + 25 + 10 = 350\\)'
      },
      {
        explanation: 'We add the frequencies for Wrong Order and Cold Food. Be careful not to confuse these with Slow Service (120), which is the largest bar and sits immediately to the left. Always re-check which categories the question specifies before adding.',
        workingOut: '\\(95 + 60 = 155\\)'
      },
      {
        explanation: 'We apply the percentage formula: divide the combined frequency by the total and multiply by 100. The denominator is the grand total of 350 complaints, not any subtotal. Using the wrong denominator is the single most frequent mistake in Pareto percentage questions.',
        workingOut: '\\(\\dfrac{155}{350} \\times 100 = 44.28\\ldots\\%\\)'
      },
      {
        explanation: 'We round to the nearest whole percent as required. The answer is 44%. In practical terms, this means that Wrong Order mistakes and Cold Food together cause nearly half of all café complaints. A café manager reading this Pareto chart would prioritise kitchen accuracy and food-temperature controls as the highest-impact improvements.',
        workingOut: '\\(44.28\\%\\approx 44\\%\\)'
      }
    ]
  }

];

async function main() {
  console.log('Starting Ch9B targeted update — no full collection scan...');
  for (const q of updates) {
    const updateObj = {
      solutionSteps: q.solutionSteps,
      opts: q.opts,
      options: q.opts,
      a: q.a,
      answer: String(q.a),
      isNew: true
    };
    if (q.question) updateObj.question = q.question; // Only overwrite question if explicitly changed

    await db.doc(`questions/${q.id}`).update(updateObj);
    console.log(`Updated ${q.id}`);
  }
  console.log('Ch9B update complete!');
  process.exit(0);
}

main().catch(err => {
  console.error('Update failed:', err);
  process.exit(1);
});
