import fs from 'fs';
import path from 'path';

const filePath = path.resolve('content/chapters/y12a-7.json');
const content = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(content);

// Clean stem SVG for the parent question
const parentStemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif"><rect x="1" y="1" width="598" height="348" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/><defs><pattern id="stem_grid" width="27.5" height="22" patternUnits="userSpaceOnUse"><path d="M 27.5 0 L 0 0 0 22" fill="none" stroke="#f1f5f9" stroke-width="1"/></pattern></defs><rect x="50" y="30" width="510" height="290" fill="url(#stem_grid)" /><line x1="200" y1="92" x2="200" y2="180" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="90" y1="92" x2="200" y2="92" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="365" y1="180" x2="365" y2="290" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="90" y1="290" x2="365" y2="290" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="60" y1="180" x2="550" y2="180" stroke="#475569" stroke-width="2"/><polygon points="550,176 558,180 550,184" fill="#475569"/><line x1="90" y1="320" x2="90" y2="40" stroke="#475569" stroke-width="2"/><polygon points="86,40 90,32 94,40" fill="#475569"/><text x="545" y="202" fill="#1e293b" font-size="13" font-weight="bold">t (s)</text><text x="98" y="48" fill="#1e293b" font-size="13" font-weight="bold">v (m/s)</text><line x1="90" y1="176" x2="90" y2="184" stroke="#475569" stroke-width="1.5"/><text x="80" y="196" fill="#64748b" font-size="12" text-anchor="end">0</text><line x1="145" y1="177" x2="145" y2="183" stroke="#94a3b8" stroke-width="1"/><text x="145" y="198" fill="#64748b" font-size="12" text-anchor="middle">1</text><line x1="200" y1="176" x2="200" y2="184" stroke="#475569" stroke-width="1.5"/><text x="200" y="198" fill="#64748b" font-size="12" text-anchor="middle" font-weight="bold">2</text><line x1="255" y1="177" x2="255" y2="183" stroke="#94a3b8" stroke-width="1"/><text x="255" y="198" fill="#64748b" font-size="12" text-anchor="middle">3</text><line x1="310" y1="176" x2="310" y2="184" stroke="#475569" stroke-width="1.5"/><text x="310" y="198" fill="#64748b" font-size="12" text-anchor="middle" font-weight="bold">4</text><line x1="365" y1="176" x2="365" y2="184" stroke="#475569" stroke-width="1.5"/><text x="365" y="198" fill="#64748b" font-size="12" text-anchor="middle" font-weight="bold">5</text><line x1="420" y1="177" x2="420" y2="183" stroke="#94a3b8" stroke-width="1"/><text x="420" y="198" fill="#64748b" font-size="12" text-anchor="middle">6</text><line x1="475" y1="177" x2="475" y2="183" stroke="#94a3b8" stroke-width="1"/><text x="475" y="198" fill="#64748b" font-size="12" text-anchor="middle">7</text><line x1="86" y1="92" x2="94" y2="92" stroke="#475569" stroke-width="1.5"/><text x="80" y="96" fill="#64748b" font-size="12" text-anchor="end" font-weight="bold">4</text><line x1="86" y1="290" x2="94" y2="290" stroke="#475569" stroke-width="1.5"/><text x="80" y="294" fill="#64748b" font-size="12" text-anchor="end" font-weight="bold">-5</text><path d="M 90 180 Q 200 4 310 180 Q 337.5 224 365 290" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/><line x1="365" y1="290" x2="520" y2="290" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/><circle cx="200" cy="92" r="4.5" fill="#2563eb"/><text x="200" y="78" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">(2, 4)</text><circle cx="310" cy="180" r="4.5" fill="#2563eb"/><text x="318" y="170" fill="#1d4ed8" font-size="12" font-weight="bold">(4, 0)</text><circle cx="365" cy="290" r="4.5" fill="#2563eb"/><text x="375" y="306" fill="#1d4ed8" font-size="12" font-weight="bold">(5, -5)</text><rect x="180" y="105" width="105" height="24" rx="4" fill="#ffffff" fill-opacity="0.85"/><text x="185" y="122" fill="#2563eb" font-size="13" font-weight="bold">v = 4t - t²</text><rect x="420" y="260" width="85" height="24" rx="4" fill="#ffffff" fill-opacity="0.85"/><text x="425" y="277" fill="#2563eb" font-size="13" font-weight="bold">v = -5</text></svg>`;

// Diagram for Part (b): Zero acceleration points
const q30bStepSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif"><rect x="1" y="1" width="598" height="348" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/><defs><pattern id="q30b_grid" width="27.5" height="22" patternUnits="userSpaceOnUse"><path d="M 27.5 0 L 0 0 0 22" fill="none" stroke="#f1f5f9" stroke-width="1"/></pattern></defs><rect x="50" y="30" width="510" height="290" fill="url(#q30b_grid)" /><line x1="60" y1="180" x2="550" y2="180" stroke="#475569" stroke-width="2"/><polygon points="550,176 558,180 550,184" fill="#475569"/><line x1="90" y1="320" x2="90" y2="40" stroke="#475569" stroke-width="2"/><polygon points="86,40 90,32 94,40" fill="#475569"/><text x="545" y="202" fill="#1e293b" font-size="13" font-weight="bold">t (s)</text><text x="98" y="48" fill="#1e293b" font-size="13" font-weight="bold">v (m/s)</text><text x="80" y="196" fill="#64748b" font-size="12" text-anchor="end">0</text><line x1="200" y1="176" x2="200" y2="184" stroke="#475569" stroke-width="1.5"/><text x="200" y="198" fill="#64748b" font-size="12" text-anchor="middle" font-weight="bold">2</text><line x1="310" y1="176" x2="310" y2="184" stroke="#475569" stroke-width="1.5"/><text x="310" y="198" fill="#64748b" font-size="12" text-anchor="middle" font-weight="bold">4</text><line x1="365" y1="176" x2="365" y2="184" stroke="#475569" stroke-width="1.5"/><text x="365" y="198" fill="#64748b" font-size="12" text-anchor="middle" font-weight="bold">5</text><text x="80" y="96" fill="#64748b" font-size="12" text-anchor="end" font-weight="bold">4</text><text x="80" y="294" fill="#64748b" font-size="12" text-anchor="end" font-weight="bold">-5</text><path d="M 90 180 Q 200 4 310 180 Q 337.5 224 365 290" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/><line x1="140" y1="92" x2="260" y2="92" stroke="#16a34a" stroke-width="3.5" stroke-linecap="round"/><circle cx="200" cy="92" r="5" fill="#16a34a"/><rect x="130" y="55" width="140" height="26" rx="4" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/><text x="200" y="72" fill="#15803d" font-size="11.5" font-weight="bold" text-anchor="middle">Horizontal Tangent: a = 0</text><line x1="365" y1="290" x2="530" y2="290" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/><rect x="400" y="255" width="130" height="26" rx="4" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/><text x="465" y="272" fill="#15803d" font-size="11.5" font-weight="bold" text-anchor="middle">Flat Line (v = -5): a = 0</text><circle cx="365" cy="290" r="5" fill="#ef4444"/><rect x="290" y="306" width="170" height="26" rx="4" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/><text x="375" y="323" fill="#b91c1c" font-size="11.5" font-weight="bold" text-anchor="middle">Corner at t = 5: a undefined</text><rect x="360" y="105" width="180" height="46" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="450" y="125" fill="#1e293b" font-size="12" font-weight="bold" text-anchor="middle">Acceleration is zero when:</text><text x="450" y="142" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">t = 2  or  t &gt; 5</text></svg>`;

let originalQ30a = null;
let originalQ30b = null;

// Find existing questions
for (const topic of data.topics) {
  for (const q of topic.questions) {
    if (q.id === 'amity2020-ma-q30a') originalQ30a = q;
    if (q.id === 'amity2020-ma-q30b') originalQ30b = q;
  }
}

if (!originalQ30a || !originalQ30b) {
  throw new Error('Could not find original q30a or q30b');
}

// Remove q30b from wherever it was
for (const topic of data.topics) {
  topic.questions = topic.questions.filter((q) => q.id !== 'amity2020-ma-q30b');
}

// Build the consolidated multipart question
const multipartQuestion = {
  id: 'amity2020-ma-q30',
  type: 'multipart',
  difficulty: 'hard',
  stem: "A particle starts at the origin with velocity \\(v(t) = 4t - t^2\\) for \\(0 \\le t \\le 5\\), and \\(v(t) = -5\\) for \\(t \\gt 5\\). The velocity–time graph is shown below.",
  figure: {
    svg: parentStemSvg
  },
  meta: {
    source: "Amity 2020 Mathematics Advanced HSC Trial",
    school: "Amity",
    sourceYear: 2020
  },
  alsoIn: ["y12a-7B"],
  parts: [
    {
      id: 'amity2020-ma-q30a',
      type: 'mc',
      stem: "(a) When does the particle first return to the origin?",
      options: [
        "\\(\\dfrac{5}{3}\\text{ s}\\)",
        "\\(5\\text{ s}\\)",
        "\\(\\dfrac{20}{3}\\text{ s}\\)",
        "\\(\\dfrac{25}{3}\\text{ s}\\)"
      ],
      answer: 2,
      hint: "The displacement from the origin is the total signed area under the velocity graph, \\(x(T) = \\int_0^T v(t)\\,dt\\). The particle returns to the origin when its net displacement equals zero.",
      keyPoints: [
        {
          text: "return to the origin",
          note: "Returning to the origin means total displacement \\(x(T) = 0\\). The positive area (forward motion) must equal the negative area (backward motion)."
        }
      ],
      steps: originalQ30a.steps,
      xp: 2
    },
    {
      id: 'amity2020-ma-q30b',
      type: 'mc',
      stem: "(b) When is the acceleration of the particle zero?",
      options: [
        "\\(t = 2\\text{ only}\\)",
        "\\(t = 2\\text{ or }t \\gt 5\\)",
        "\\(t = 4\\text{ or }t = 5\\)",
        "\\(t \\lt 2\\)"
      ],
      answer: 1,
      hint: "Acceleration is the gradient of the velocity–time graph, \\(a(t) = v'(t)\\). Find where the slope of the velocity graph is zero on each interval.",
      keyPoints: [
        {
          text: "acceleration of the particle zero",
          note: "Acceleration is the gradient of the velocity graph. For a parabola it is zero at the vertex; for a horizontal line it is zero everywhere."
        }
      ],
      steps: [
        {
          explain: "Acceleration is the derivative (gradient) of velocity: \\(a(t) = v'(t)\\).\n\nFor \\(0 \\le t \\lt 5\\), the velocity is quadratic. Differentiating with respect to time gives:\n\\[a(t) = \\dfrac{d}{dt}(4t - t^2) = 4 - 2t\\]\nSet this equal to zero to find when acceleration is zero:\n\\[4 - 2t = 0 \\implies 2t = 4 \\implies t = 2\\text{ s}\\]\nThis corresponds to the vertex (horizontal tangent) of the parabola at \\((2, 4)\\).",
          work: "\\(a(t) = 4 - 2t = 0 \\implies t = 2\\text{ s}\\)"
        },
        {
          explain: "For \\(t \\gt 5\\), the velocity is constant: \\(v(t) = -5\\).\n\nThe derivative of any constant function is zero:\n\\[a(t) = \\dfrac{d}{dt}(-5) = 0\\quad \\text{for all } t \\gt 5\\]\nOn the graph, this corresponds to the horizontal line segment where the gradient is zero.",
          work: "\\(a(t) = 0\\quad \\text{for } t \\gt 5\\)"
        },
        {
          explain: "Examine the transition point at \\(t = 5\\):\n- Left-hand gradient: \\(\\lim_{t \\to 5^-} v'(t) = 4 - 2(5) = -6\\)\n- Right-hand gradient: \\(\\lim_{t \\to 5^+} v'(t) = 0\\)\n\nBecause the left and right gradients differ, the graph has a sharp corner at \\(t = 5\\), so the acceleration is undefined at \\(t = 5\\).\n\nCombining the valid intervals, the acceleration is zero when:\n\\[\\boxed{t = 2\\text{ or }t \\gt 5}\\]",
          work: "\\(\\boxed{t = 2\\text{ or }t \\gt 5}\\)",
          figure: {
            svg: q30bStepSvg
          }
        }
      ],
      xp: 2
    }
  ]
};

// Replace q30a with the parent multipartQuestion in y12a-7C
let replaced = false;
for (const topic of data.topics) {
  const idx = topic.questions.findIndex((q) => q.id === 'amity2020-ma-q30a');
  if (idx !== -1) {
    topic.questions[idx] = multipartQuestion;
    replaced = true;
    break;
  }
}

if (!replaced) {
  throw new Error('Could not replace q30a with multipartQuestion');
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Successfully consolidated amity2020-ma-q30 into multipart question with parts a and b!');
