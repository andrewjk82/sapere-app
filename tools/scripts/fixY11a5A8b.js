import fs from 'fs';
import path from 'path';

const filePath = path.resolve('content/chapters/y11a-5.json');
const content = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(content);

const graphSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif"><rect x="1" y="1" width="598" height="418" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/><defs><pattern id="grid_8b" width="30" height="25" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 25" fill="none" stroke="#f1f5f9" stroke-width="1"/></pattern><marker id="downArrow_8b" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#ef4444"/></marker></defs><rect x="40" y="25" width="520" height="370" fill="url(#grid_8b)" /><line x1="50" y1="350" x2="550" y2="350" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4"/><rect x="60" y="358" width="180" height="24" rx="4" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/><text x="150" y="374" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="middle">Horizontal Asymptote: y = -4</text><path d="M 60 249 Q 180 247 240 235 T 260 225 T 300 190 T 320 175 T 350 120 T 375 40" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,4"/><text x="350" y="55" fill="#64748b" font-size="12" font-style="italic">y = 3ˣ (original)</text><line x1="260" y1="225" x2="260" y2="320" stroke="#ef4444" stroke-width="1.8" marker-end="url(#downArrow_8b)"/><text x="272" y="275" fill="#ef4444" font-size="11" font-weight="bold">-4</text><line x1="320" y1="175" x2="320" y2="270" stroke="#ef4444" stroke-width="1.8" marker-end="url(#downArrow_8b)"/><text x="332" y="225" fill="#ef4444" font-size="11" font-weight="bold">-4</text><line x1="50" y1="250" x2="540" y2="250" stroke="#334155" stroke-width="2"/><polygon points="540,246 548,250 540,254" fill="#334155"/><line x1="260" y1="395" x2="260" y2="35" stroke="#334155" stroke-width="2"/><polygon points="256,35 260,27 264,35" fill="#334155"/><text x="540" y="270" fill="#1e293b" font-size="13" font-weight="bold">x</text><text x="272" y="42" fill="#1e293b" font-size="13" font-weight="bold">y</text><text x="248" y="268" fill="#64748b" font-size="12">0</text><line x1="200" y1="246" x2="200" y2="254" stroke="#64748b" stroke-width="1.5"/><text x="200" y="268" fill="#64748b" font-size="12" text-anchor="middle">-1</text><line x1="140" y1="246" x2="140" y2="254" stroke="#64748b" stroke-width="1.5"/><text x="140" y="268" fill="#64748b" font-size="12" text-anchor="middle">-2</text><line x1="320" y1="246" x2="320" y2="254" stroke="#64748b" stroke-width="1.5"/><text x="320" y="268" fill="#64748b" font-size="12" text-anchor="middle">1</text><line x1="380" y1="246" x2="380" y2="254" stroke="#64748b" stroke-width="1.5"/><text x="380" y="268" fill="#64748b" font-size="12" text-anchor="middle">2</text><line x1="256" y1="225" x2="264" y2="225" stroke="#64748b" stroke-width="1"/><text x="250" y="229" fill="#94a3b8" font-size="11" text-anchor="end">1</text><line x1="256" y1="275" x2="264" y2="275" stroke="#64748b" stroke-width="1"/><text x="250" y="279" fill="#64748b" font-size="11" text-anchor="end">-1</text><line x1="256" y1="325" x2="264" y2="325" stroke="#64748b" stroke-width="1.5"/><text x="250" y="329" fill="#64748b" font-size="12" text-anchor="end" font-weight="bold">-3</text><line x1="256" y1="350" x2="264" y2="350" stroke="#ef4444" stroke-width="2"/><text x="250" y="354" fill="#b91c1c" font-size="12" text-anchor="end" font-weight="bold">-4</text><line x1="256" y1="125" x2="264" y2="125" stroke="#64748b" stroke-width="1.5"/><text x="250" y="129" fill="#64748b" font-size="12" text-anchor="end">5</text><path d="M 60 349.5 C 130 349 180 345 220 337 C 240 332 250 329 260 325 C 285 313 305 297 320 275 C 340 242 360 190 380 125 C 390 90 398 65 402 45" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/><circle cx="260" cy="325" r="5" fill="#2563eb"/><rect x="150" y="313" width="95" height="24" rx="4" fill="#ffffff" stroke="#93c5fd" stroke-width="1"/><text x="197" y="329" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">(0, -3)</text><circle cx="335.7" cy="250" r="5" fill="#2563eb"/><rect x="335" y="218" width="135" height="24" rx="4" fill="#ffffff" stroke="#93c5fd" stroke-width="1"/><text x="402" y="234" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">(log₃ 4, 0) ≈ (1.26, 0)</text><circle cx="320" cy="275" r="4.5" fill="#2563eb"/><line x1="320" y1="275" x2="320" y2="250" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><line x1="320" y1="275" x2="260" y2="275" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="345" y="285" fill="#1e40af" font-size="11" font-weight="bold">(1, -1)</text><circle cx="380" cy="125" r="4.5" fill="#2563eb"/><line x1="380" y1="125" x2="380" y2="250" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><line x1="380" y1="125" x2="260" y2="125" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="390" y="125" fill="#1e40af" font-size="12" font-weight="bold">(2, 5)</text><rect x="385" y="65" width="125" height="30" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/><text x="447" y="85" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">y = 3ˣ - 4</text></svg>`;

let found = false;

for (const topic of data.topics) {
  for (const q of topic.questions) {
    if (q.id === 'y11a-5A-new-8b') {
      found = true;
      q.type = 'review';
      q.manual = true;
      delete q.options; // 주관식 문제로 전환: options 삭제
      q.stem = "A function \\(y = 3^x\\) is translated down by 4 units. Write down the new equation, then sketch its graph.";
      q.answer = "Sample answer:\n1. New equation: \\(y = 3^x - 4\\)\n2. Graph key features:\n   • Horizontal asymptote: \\(y = -4\\)\n   • \\(y\\)-intercept: \\((0, -3)\\)\n   • \\(x\\)-intercept: \\((\\log_3 4, 0) \\approx (1.26, 0)\\)\n   • Reference points: \\((1, -1)\\) and \\((2, 5)\\)\n   • Strictly increasing exponential curve approaching \\(y = -4\\) as \\(x \\to -\\infty\\).";
      q.solution = "1. Equation: \\(y = 3^x - 4\\)\n2. Graph key features:\n- Horizontal asymptote: \\(y = -4\\)\n- \\(y\\)-intercept: \\((0, -3)\\)\n- \\(x\\)-intercept: \\((\\log_3 4, 0) \\approx (1.26, 0)\\)\n- Curve passes through \\((1, -1)\\) and \\((2, 5)\\).";
      q.hint = "A vertical translation downwards by \\(c\\) units transforms \\(y = f(x)\\) to \\(y = f(x) - c\\). Remember to shift both the horizontal asymptote and the \\(y\\)-intercept downwards by 4 units.";
      q.keyPoints = [
        {
          text: "Vertical translation: \\(y = f(x) - c\\)",
          note: "Translating down by 4 units shifts every y-value (including the asymptote) down by 4."
        },
        {
          text: "Horizontal asymptote shifts to \\(y = -4\\)",
          note: "Since the original horizontal asymptote is \\(y = 0\\), the new asymptote is \\(y = 0 - 4 = -4\\)."
        }
      ];
      q.figure = {
        svg: graphSvg
      };
      q.steps = [
        {
          explain: "A vertical translation downwards by \\(c\\) units transforms a function \\(y = f(x)\\) into:\n\\[y = f(x) - c\\]\nGiven the original function \\(f(x) = 3^x\\) and a downward shift of \\(4\\) units, the new equation is:\n\\[y = 3^x - 4\\]",
          work: "\\(y = f(x) - 4 \\implies \\boxed{y = 3^x - 4}\\)"
        },
        {
          explain: "Determine the horizontal asymptote of the transformed curve:\n- For the basic exponential function \\(y = 3^x\\), as \\(x \\to -\\infty\\), \\(3^x \\to 0\\), which gives the horizontal asymptote \\(y = 0\\) (the \\(x\\)-axis).\n- Translating the entire curve downwards by \\(4\\) units also shifts its horizontal asymptote down by \\(4\\) units:\n\\[y = 0 - 4 = -4\\]\nAs \\(x \\to -\\infty\\), \\(3^x \\to 0 \\implies y \\to -4^+\\).",
          work: "\\(\\text{Horizontal Asymptote: } \\boxed{y = -4}\\)"
        },
        {
          explain: "Calculate the axis intercepts to establish the anchor points of the sketch:\n1. **\\(y\\)-intercept** (set \\(x = 0\\)):\n\\[y = 3^0 - 4 = 1 - 4 = -3 \\implies (0, -3)\\]\n*(The original \\(y\\)-intercept \\((0, 1)\\) has moved down by 4 units to \\((0, -3)\\).)*\n\n2. **\\(x\\)-intercept** (set \\(y = 0\\)):\n\\[3^x - 4 = 0 \\implies 3^x = 4 \\implies x = \\log_3 4 = \\dfrac{\\ln 4}{\\ln 3} \\approx 1.26 \\implies (\\log_3 4, 0)\\]",
          work: "\\(y\\text{-intercept: } (0, -3), \\quad x\\text{-intercept: } (\\log_3 4, 0) \\approx (1.26, 0)\\)"
        },
        {
          explain: "Plot additional reference points and sketch the complete exponential curve:\n- At \\(x = 1\\): \\(y = 3^1 - 4 = -1 \\implies (1, -1)\\)\n- At \\(x = 2\\): \\(y = 3^2 - 4 = 9 - 4 = 5 \\implies (2, 5)\\)\n\n**Sketching Summary:**\n• Draw the horizontal dashed line \\(y = -4\\) as the asymptote.\n• Plot the key points: \\((0, -3)\\), \\((1, -1)\\), \\((\\log_3 4, 0)\\), and \\((2, 5)\\).\n• Draw a smooth, strictly increasing exponential curve approaching \\(y = -4\\) on the left (as \\(x \\to -\\infty\\)) and rising steeply on the right.",
          work: "\\(\\text{Sketch through } (0, -3), \\; (1, -1), \\; (\\log_3 4, 0), \\; (2, 5) \\text{ with asymptote } y = -4\\)",
          figure: {
            svg: graphSvg
          }
        }
      ];
    }
  }
}

if (!found) {
  throw new Error('Question y11a-5A-new-8b not found');
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Successfully updated y11a-5A-new-8b in ' + filePath);
