const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ================= q7a =================
  // 8:30 am → 11:15 am
  // 8:30 → 9:00 = 30 min
  // 9:00 → 11:00 = 2 h
  // 11:00 → 11:15 = 15 min
  // Total = 2 h 45 min

  const timelineSvg7a = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100" width="500" height="100" style="font-family:sans-serif;">
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#2563eb"/></marker>
  </defs>
  <!-- Timeline base line -->
  <line x1="40" y1="50" x2="460" y2="50" stroke="#94a3b8" stroke-width="2"/>
  <!-- Arrow at end -->
  <line x1="455" y1="50" x2="465" y2="50" stroke="#2563eb" stroke-width="2" marker-end="url(#arr)"/>

  <!-- Points -->
  <!-- 8:30 at x=40 -->
  <circle cx="60" cy="50" r="5" fill="#2563eb"/>
  <text x="60" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">8:30 am</text>

  <!-- 9:00 at x=145 -->
  <circle cx="170" cy="50" r="5" fill="#2563eb"/>
  <text x="170" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">9:00 am</text>

  <!-- 11:00 at x=330 -->
  <circle cx="340" cy="50" r="5" fill="#2563eb"/>
  <text x="340" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">11:00 am</text>

  <!-- 11:15 at x=420 -->
  <circle cx="430" cy="50" r="5" fill="#16a34a"/>
  <text x="430" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">11:15 am</text>

  <!-- Arcs / brackets above line -->
  <!-- 8:30 → 9:00 = 30 min -->
  <path d="M 60,48 Q 115,15 170,48" fill="none" stroke="#f97316" stroke-width="2"/>
  <text x="115" y="22" text-anchor="middle" font-size="12" fill="#ea580c" font-weight="bold">30 min</text>

  <!-- 9:00 → 11:00 = 2 h -->
  <path d="M 170,48 Q 255,10 340,48" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="255" y="16" text-anchor="middle" font-size="12" fill="#1d4ed8" font-weight="bold">2 hours</text>

  <!-- 11:00 → 11:15 = 15 min -->
  <path d="M 340,48 Q 385,20 430,48" fill="none" stroke="#f97316" stroke-width="2"/>
  <text x="385" y="24" text-anchor="middle" font-size="12" fill="#ea580c" font-weight="bold">15 min</text>
</svg>
</div>`;

  const q7a_text = `Use a timeline to find the time difference between 8:30 am and 11:15 am.

${timelineSvg7a}`;

  const steps7a = [
    {
      explanation: 'Start at 8:30 am. Jump forward to the nearest whole hour: 9:00 am.',
      workingOut: '\\(8\\text{:}30\\text{ am} \\rightarrow 9\\text{:}00\\text{ am} = 30\\text{ minutes}\\)',
      graphData: null
    },
    {
      explanation: 'From 9:00 am, count the full hours up to the hour before the end time: 11:00 am.',
      workingOut: '\\(9\\text{:}00\\text{ am} \\rightarrow 11\\text{:}00\\text{ am} = 2\\text{ hours}\\)',
      graphData: null
    },
    {
      explanation: 'From 11:00 am, count the remaining minutes to reach 11:15 am.',
      workingOut: '\\(11\\text{:}00\\text{ am} \\rightarrow 11\\text{:}15\\text{ am} = 15\\text{ minutes}\\)',
      graphData: null
    },
    {
      explanation: 'Add all the jumps together to get the total time difference.',
      workingOut: [
        '\\(30\\text{ min} + 2\\text{ h} + 15\\text{ min}\\)',
        '\\(= 2\\text{ hours } 45\\text{ minutes}\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const opts7a = [
    { text: '2 hours 15 minutes', imageUrl: '' },
    { text: '3 hours 15 minutes', imageUrl: '' },
    { text: '2 hours 45 minutes', imageUrl: '' }, // Correct -> C
    { text: '2 hours 30 minutes', imageUrl: '' }
  ];

  // ================= q7b =================
  // 10:40 am → 2:20 pm
  // 10:40 → 11:00 = 20 min
  // 11:00 → 2:00 pm = 3 h
  // 2:00 → 2:20 pm = 20 min
  // Total = 3 h 40 min

  const timelineSvg7b = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 110" width="520" height="110" style="font-family:sans-serif;">
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#2563eb"/></marker>
  </defs>
  <!-- Timeline base line -->
  <line x1="40" y1="55" x2="490" y2="55" stroke="#94a3b8" stroke-width="2"/>
  <line x1="485" y1="55" x2="495" y2="55" stroke="#2563eb" stroke-width="2" marker-end="url(#arr)"/>

  <!-- 10:40 am at x=60 -->
  <circle cx="60" cy="55" r="5" fill="#2563eb"/>
  <text x="60" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">10:40 am</text>

  <!-- 11:00 am at x=150 -->
  <circle cx="150" cy="55" r="5" fill="#2563eb"/>
  <text x="150" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">11:00 am</text>

  <!-- 2:00 pm at x=380 -->
  <circle cx="370" cy="55" r="5" fill="#2563eb"/>
  <text x="370" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">2:00 pm</text>

  <!-- 2:20 pm at x=460 -->
  <circle cx="460" cy="55" r="5" fill="#16a34a"/>
  <text x="460" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">2:20 pm</text>

  <!-- 10:40 → 11:00 = 20 min -->
  <path d="M 60,53 Q 105,20 150,53" fill="none" stroke="#f97316" stroke-width="2"/>
  <text x="105" y="25" text-anchor="middle" font-size="12" fill="#ea580c" font-weight="bold">20 min</text>

  <!-- 11:00 → 2:00 = 3 h -->
  <path d="M 150,53 Q 260,10 370,53" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="260" y="15" text-anchor="middle" font-size="12" fill="#1d4ed8" font-weight="bold">3 hours</text>

  <!-- 2:00 → 2:20 = 20 min -->
  <path d="M 370,53 Q 415,22 460,53" fill="none" stroke="#f97316" stroke-width="2"/>
  <text x="415" y="26" text-anchor="middle" font-size="12" fill="#ea580c" font-weight="bold">20 min</text>
</svg>
</div>`;

  const q7b_text = `Use a timeline to find the time difference between 10:40 am and 2:20 pm.

${timelineSvg7b}`;

  const steps7b = [
    {
      explanation: 'Start at 10:40 am. Jump forward to the nearest whole hour: 11:00 am.',
      workingOut: '\\(10\\text{:}40\\text{ am} \\rightarrow 11\\text{:}00\\text{ am} = 20\\text{ minutes}\\)',
      graphData: null
    },
    {
      explanation: 'From 11:00 am, count the full hours across midday up to 2:00 pm. Remember that 12:00 pm (noon) is when am changes to pm.',
      workingOut: '\\(11\\text{:}00\\text{ am} \\rightarrow 2\\text{:}00\\text{ pm} = 3\\text{ hours}\\)',
      graphData: null
    },
    {
      explanation: 'From 2:00 pm, count the remaining minutes to reach 2:20 pm.',
      workingOut: '\\(2\\text{:}00\\text{ pm} \\rightarrow 2\\text{:}20\\text{ pm} = 20\\text{ minutes}\\)',
      graphData: null
    },
    {
      explanation: 'Add all the jumps together to get the total time difference.',
      workingOut: [
        '\\(20\\text{ min} + 3\\text{ h} + 20\\text{ min}\\)',
        '\\(= 3\\text{ hours } 40\\text{ minutes}\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const opts7b = [
    { text: '3 hours 20 minutes', imageUrl: '' },
    { text: '4 hours 20 minutes', imageUrl: '' },
    { text: '4 hours 40 minutes', imageUrl: '' },
    { text: '3 hours 40 minutes', imageUrl: '' } // Correct -> D
  ];

  const updates = [
    { id: 'y8-15i-q7a', opts: opts7a, answer: '2', steps: steps7a, question: q7a_text },
    { id: 'y8-15i-q7b', opts: opts7b, answer: '3', steps: steps7b, question: q7b_text }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      question: u.question,
      type: 'multiple_choice',
      options: u.opts,
      answer: u.answer,
      solutionSteps: u.steps,
      graphData: null,
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  const pRef = db.collection('questions').doc('y8-15i-q7');
  const pSnap = await pRef.get();
  if (pSnap.exists) {
    const pData = pSnap.data();
    if (pData.subQuestions) {
      const newSubQs = pData.subQuestions.map(sq => {
        const u = updates.find(x => x.id === sq.id);
        if (u) {
          return {
            ...sq,
            question: u.question,
            type: 'multiple_choice',
            options: u.opts,
            answer: u.answer,
            solutionSteps: u.steps,
            graphData: null,
            requiresManualGrading: FieldValue.delete()
          };
        }
        return sq;
      });
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated q7a, q7b");
  process.exit(0);
}

run().catch(console.error);
