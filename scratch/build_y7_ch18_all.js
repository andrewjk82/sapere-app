const fs = require('fs');

const questions = [];

// ========================================================
// Q1: Male inhabitants of the Maldives in 2001
// ========================================================
const q1_table_html = `<div style="display: flex; justify-content: center; margin: 16px 0;">
  <table style="width: 100%; max-width: 320px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <thead>
      <tr style="background: #6366f1; color: white;">
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Age group (years)</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Number of males</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">6–9</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">30 813</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">10–14</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">41 089</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">15–19</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">33 266</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">20–24</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">23 514</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">25–29</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">20 090</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">30–34</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">18 161</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">35–39</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">15 699</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">40–44</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">12 402</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">45–49</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">7 461</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">50–54</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">5 967</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">55–59</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">5 996</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">60–64</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">6 312</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">65–69</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">4 611</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500;">&gt; 69</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">1 253</td></tr>
    </tbody>
  </table>
</div>`;

questions.push({
  chapterId: 'y7-18',
  chapterTitle: 'Chapter 18: Statistics and Graphs',
  topicId: 'y7-18a',
  topicCode: '18A',
  topicTitle: 'Reading tables',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Data on the ages of male inhabitants of the Maldives in 2001 are presented in the table below. The total number of males is 226,634.

${q1_table_html}

Analyze the table and select the correct set of answers for parts (a) to (d):
* **a** How many male inhabitants of the Maldives are aged between 10 and 14?
* **b** What percentage of males are aged under 25? Give your answer to the nearest per cent.
* **c** What percentage of males are aged between 15 and 24? Give your answer to the nearest per cent.
* **d** What is wrong with the given data?`,
  options: [
    '(a) 41,089 males; (b) 57%; (c) 25%; (d) Males aged 0-5 are missing from the dataset.',
    '(a) 33,266 males; (b) 50%; (c) 30%; (d) The values do not sum to 100%.',
    '(a) 41,089 males; (b) 45%; (c) 20%; (d) The categories overlap each other.',
    '(a) 23,514 males; (b) 60%; (c) 15%; (d) There are too many female categories included.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's solve each part step-by-step using the data from the table:</p><ul><li><strong>Part (a):</strong> Looking directly at the row <strong>10–14</strong> in the table, the number of males is exactly <strong>41,089</strong> inhabitants.</li><li><strong>Part (b):</strong> "Under 25" includes age groups 6–9, 10–14, 15–19, and 20–24. <br />$$\\text{Sum} = 30,813 + 41,089 + 33,266 + 23,514 = 128,682 \\text{ inhabitants}$$.<br />$$\\text{Percentage} = \\frac{128,682}{226,634} \\times 100 \\approx 56.78\\% \\approx 57\\%$$.</li><li><strong>Part (c):</strong> "Between 15 and 24" includes age groups 15–19 and 20–24. <br />$$\\text{Sum} = 33,266 + 23,514 = 56,780 \\text{ inhabitants}$$.<br />$$\\text{Percentage} = \\frac{56,780}{226,634} \\times 100 \\approx 25.05\\% \\approx 25\\%$$.</li><li><strong>Part (d):</strong> The table starts at age group <strong>6–9</strong>. There is no row for children aged <strong>0–5</strong>, which means young infants and toddlers are completely missing from the Maldives male inhabitant census records presented.</li></ul></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q2: Nationalities of visitors
// ========================================================
const q2_table_html = `<div style="display: flex; justify-content: center; margin: 16px 0;">
  <table style="width: 100%; max-width: 420px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <thead>
      <tr style="background: #3b82f6; color: white;">
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Nationality of visitor</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Number of visitors<br/><span style="font-size: 11px; font-weight: normal; opacity: 0.9;">(tens of thousands per year)</span></th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Australia (O)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">0.5</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Britain (E)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">6</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">France (E)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">3.5</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Belgium (E)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">14</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Japan (A)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">23</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Singapore (A)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">5</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">USA (O)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">1</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Italy (E)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">45</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Germany (E)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">23</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Korea (A)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">5</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Russia (E)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">12</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">New Zealand (O)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">0.25</td></tr>
    </tbody>
  </table>
</div>`;

questions.push({
  chapterId: 'y7-18',
  chapterTitle: 'Chapter 18: Statistics and Graphs',
  topicId: 'y7-18a',
  topicCode: '18A',
  topicTitle: 'Reading tables',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Data has been collected on the nationalities of some of the visitors to certain island resorts. The table below gives the available data. In the table, (A) indicates that the country is in Asia, (E) indicates that the country is in Europe and (O) indicates that the country is neither in Asia nor in Europe. Note that the numbers are in <strong>tens of thousands per year</strong>.

${q2_table_html}

Analyze the table and select the correct set of answers for parts (a) to (c):
* **a** What is the total number of visitors from Japan?
* **b** What is the total number of visitors from Asia?
* **c** What percentage of the total number of visitors came from Europe? Give your answer to the nearest per cent.`,
  options: [
    '(a) 230,000 visitors; (b) 330,000 visitors; (c) 75%',
    '(a) 23,000 visitors; (b) 33,000 visitors; (c) 65%',
    '(a) 230,000 visitors; (b) 280,000 visitors; (c) 80%',
    '(a) 230,000 visitors; (b) 330,000 visitors; (c) 70%'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's calculate each part step-by-step based on the table where values are in <strong>tens of thousands</strong> ($1 = 10,000$):</p><ul><li><strong>Part (a):</strong> Japan (A) corresponds to 23. <br />$$23 \\times 10,000 = 230,000 \\text{ visitors per year}$$.</li><li><strong>Part (b):</strong> Asian countries (A) are Japan (23), Singapore (5), and Korea (5).<br />$$\\text{Sum} = 23 + 5 + 5 = 33 \\text{ (in tens of thousands)}$$.<br />$$33 \\times 10,000 = 330,000 \\text{ visitors from Asia}$$.</li><li><strong>Part (c):</strong> Let's find the total of all visitor counts first:<br />$$\\text{Total} = 0.5 + 6 + 3.5 + 14 + 23 + 5 + 1 + 45 + 23 + 5 + 12 + 0.25 = 138.25 \\text{ ten-thousands}$$.<br />European countries (E) are Britain (6), France (3.5), Belgium (14), Italy (45), Germany (23), and Russia (12).<br />$$\\text{Europe Sum} = 6 + 3.5 + 14 + 45 + 23 + 12 = 103.5 \\text{ ten-thousands}$$.<br />$$\\text{Europe Percentage} = \\frac{103.5}{138.25} \\times 100 \\approx 74.86\\% \\approx 75\\%$$.</li></ul></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q3: Island resorts capacity and staff
// ========================================================
const q3_table_html = `<div style="display: flex; justify-content: center; margin: 16px 0;">
  <table style="width: 100%; max-width: 550px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <thead>
      <tr style="background: #10b981; color: white;">
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Name of resort</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Capacity<br/><span style="font-size: 11px; font-weight: normal; opacity: 0.9;">(maximum guests at one time)</span></th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Number of staff<br/><span style="font-size: 11px; font-weight: normal; opacity: 0.9;">(recreation for guests)</span></th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Belle de Mer</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">115</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">5</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Dream Island</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">243</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">20</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Hibiscus Garden</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">146</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">13</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Thalassa</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">76</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">5</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Tropic Isle</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">400</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">22</td></tr>
    </tbody>
  </table>
</div>`;

questions.push({
  chapterId: 'y7-18',
  chapterTitle: 'Chapter 18: Statistics and Graphs',
  topicId: 'y7-18a',
  topicCode: '18A',
  topicTitle: 'Reading tables',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `A small country has a number of island resorts. The following information was collected for five of these resorts.

${q3_table_html}

Analyze the resort capacity and recreation staff data to answer parts (a) to (d):
* **a** What is the maximum number of guests who can stay at the Hibiscus Garden resort?
* **b** How many staff are involved in recreation for guests at Tropic Isle?
* **c** What is the total capacity of the five resorts in the table?
* **d** What is the ratio of staff to guests at the Hibiscus Garden?`,
  options: [
    '(a) 146 guests; (b) 22 staff; (c) 980 guests; (d) Ratio is $13 : 146$',
    '(a) 243 guests; (b) 20 staff; (c) 980 guests; (d) Ratio is $13 : 115$',
    '(a) 146 guests; (b) 5 staff; (c) 1,020 guests; (d) Ratio is $5 : 76$',
    '(a) 146 guests; (b) 22 staff; (c) 980 guests; (d) Ratio is $146 : 13$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's retrieve and analyze the information from the resorts table:</p><ul><li><strong>Part (a):</strong> In the row for <strong>Hibiscus Garden</strong>, the capacity (maximum number of guests who can stay at one time) is exactly <strong>146 guests</strong>.</li><li><strong>Part (b):</strong> In the row for <strong>Tropic Isle</strong>, the number of staff involved in recreation for guests is exactly <strong>22 staff</strong>.</li><li><strong>Part (c):</strong> Let's calculate the sum of capacities of all 5 resorts:<br />$$\\text{Total Capacity} = 115 + 243 + 146 + 76 + 400 = 980 \\text{ guests}$$.</li><li><strong>Part (d):</strong> For <strong>Hibiscus Garden</strong>:<br />$$\\text{Number of staff} = 13$$.<br />$$\\text{Capacity (guests)} = 146$$.<br />The ratio of staff to guests is therefore exactly **$13 : 146$**.</li></ul></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q4: Tennis tournament sets won
// ========================================================
const q4_tournament_table_html = `<div style="display: flex; justify-content: center; margin: 16px 0;">
  <table style="width: 100%; max-width: 550px; border-collapse: collapse; font-family: inherit; font-size: 13px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <thead>
      <tr style="background: #8b5cf6; color: white;">
        <th rowspan="2" style="padding: 12px; font-weight: 600; border: 1px solid #cbd5e1; vertical-align: middle;">Match</th>
        <th colspan="4" style="padding: 6px; font-weight: 600; border: 1px solid #cbd5e1;">Sets won</th>
      </tr>
      <tr style="background: #7c3aed; color: white;">
        <th style="padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 20%;">Rishi</th>
        <th style="padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 20%;">Bryce</th>
        <th style="padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 20%;">Gerald</th>
        <th style="padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 20%;">John</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Rishi vs Bryce</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">0</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">3</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Rishi vs Gerald</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">3</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">2</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Rishi vs John</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">3</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">2</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Bryce vs Gerald</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">3</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">1</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Bryce vs John</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">3</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">0</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Gerald vs John</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; background: #f1f5f9;"></td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">3</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #334155;">2</td></tr>
    </tbody>
  </table>
</div>`;

const q4_summary_table_html = `<div style="display: flex; justify-content: center; margin: 16px 0;">
  <table style="width: 100%; max-width: 550px; border-collapse: collapse; font-family: inherit; font-size: 13px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <thead>
      <tr style="background: #3b82f6; color: white;">
        <th rowspan="2" style="padding: 12px; font-weight: 600; border: 1px solid #cbd5e1; vertical-align: middle; text-align: left;">Player</th>
        <th colspan="2" style="padding: 6px; font-weight: 600; border: 1px solid #cbd5e1;">Matches</th>
        <th colspan="2" style="padding: 6px; font-weight: 600; border: 1px solid #cbd5e1;">Sets</th>
      </tr>
      <tr style="background: #2563eb; color: white;">
        <th style="padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;">Won</th>
        <th style="padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;">Lost</th>
        <th style="padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;">Won</th>
        <th style="padding: 6px 12px; font-weight: 600; border: 1px solid #cbd5e1; width: 22%;">Lost</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left;">Rishi</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left;">Bryce</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left;">Gerald</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600; text-align: left;">John</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #94a3b8; font-style: italic;">(To complete)</td></tr>
    </tbody>
  </table>
</div>`;

questions.push({
  chapterId: 'y7-18',
  chapterTitle: 'Chapter 18: Statistics and Graphs',
  topicId: 'y7-18a',
  topicCode: '18A',
  topicTitle: 'Reading tables',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `The first table below gives the results of a tennis tournament between Rishi, Bryce, Gerald and John. Complete the second table (the summary table) and answer parts (a) to (c):

${q4_tournament_table_html}

Complete the following summary table using the information given above.

${q4_summary_table_html}

Analyze the tournament tables and select the correct answers for parts (a) to (c):
* **a** Who won the most matches?
* **b** Who played the most sets?
* **c** What percentage of the matches Gerald played did he win?`,
  options: [
    '(a) Bryce won the most matches (3 matches); (b) Gerald played the most sets (14 sets); (c) Gerald won 33% of the matches he played.',
    '(a) Rishi won the most matches (3 matches); (b) John played the most sets (13 sets); (c) Gerald won 50% of the matches he played.',
    '(a) Bryce won the most matches (3 matches); (b) Rishi played the most sets (13 sets); (c) Gerald won 25% of the matches he played.',
    '(a) John won the most matches (2 matches); (b) Gerald played the most sets (14 sets); (c) Gerald won 33% of the matches he played.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's complete the summary table first by listing all matches played, matches won/lost, and total sets won/lost:</p><ul><li><strong>Matches Analysis:</strong><ul><li>Rishi vs Bryce: Bryce won (Sets: Rishi 0, Bryce 3).</li><li>Rishi vs Gerald: Rishi won (Sets: Rishi 3, Gerald 2).</li><li>Rishi vs John: Rishi won (Sets: Rishi 3, John 2).</li><li>Bryce vs Gerald: Bryce won (Sets: Bryce 3, Gerald 1).</li><li>Bryce vs John: Bryce won (Sets: Bryce 3, John 0).</li><li>Gerald vs John: Gerald won (Sets: Gerald 3, John 2).</li></ul></li><li><strong>Summary Table Completion:</strong><ul><li><strong>Rishi:</strong> Won 2 matches, Lost 1. Sets Won = $0+3+3=6$, Sets Lost = $3+2+2=7$ (Total sets played = 13).</li><li><strong>Bryce:</strong> Won 3 matches, Lost 0. Sets Won = $3+3+3=9$, Sets Lost = $0+1+0=1$ (Total sets played = 10).</li><li><strong>Gerald:</strong> Won 1 match, Lost 2. Sets Won = $2+1+3=6$, Sets Lost = $3+3+2=8$ (Total sets played = 14).</li><li><strong>John:</strong> Won 0 matches, Lost 3. Sets Won = $4+0+2=6$?, no wait: John won 2 sets vs Rishi, 0 sets vs Bryce, and 2 sets vs Gerald. Total Sets Won = $2+0+2=4$, Sets Lost = $3+3+3=9$ (Total sets played = 13).</li></ul></li><li><strong>Answering Parts (a) to (c):</strong><ul><li><strong>Part (a):</strong> <strong>Bryce</strong> won the most matches (3 wins).</li><li><strong>Part (b):</strong> <strong>Gerald</strong> played the most sets ($6 \\text{ won} + 8 \\text{ lost} = 14$ sets in total).</li><li><strong>Part (c):</strong> Gerald played 3 matches in total and won exactly 1 match. <br />$$\\text{Win Percentage} = \\frac{1}{3} \\times 100 \\approx 33.33\\% \\approx 33\\%$$.</li></ul></li></ul></div>`,
  createdAt: new Date().toISOString()
});

console.log('Total Chapter 18A questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch18A = async (forceReset = false) => {
  console.log('[Ch18A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch18 (18a to 18f) questions...');
      const topicsToDelete = ['y7-18a', 'y7-18b', 'y7-18c', 'y7-18d', 'y7-18e', 'y7-18f'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch18 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-18a', 'y7-18b', 'y7-18c', 'y7-18d', 'y7-18e', 'y7-18f'];
    for (const tId of topicsToCheck) {
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
      existingSnap.docs.forEach(doc => {
        existingQuestions.add(doc.data().question.trim());
      });
    }
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch18A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch18A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch18A.js', output);
console.log('Done!');
