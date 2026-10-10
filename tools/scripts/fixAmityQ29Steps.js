import fs from 'fs';
const file = 'content/chapters/y12a-2.json';
const raw = fs.readFileSync(file, 'utf8');
const j = JSON.parse(raw);
let ok = false;

const step1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif">
  <rect x="1" y="1" width="598" height="338" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="65" y1="270" x2="545" y2="270" stroke="#64748b" stroke-width="2" stroke-linecap="round" />
  <line x1="125" y1="310" x2="125" y2="42" stroke="#64748b" stroke-width="2" stroke-linecap="round" />
  <line x1="125" y1="266" x2="125" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="125" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">-3</text>
  <line x1="230" y1="266" x2="230" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="230" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">0</text>
  <line x1="335" y1="266" x2="335" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="335" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">3</text>
  <line x1="440" y1="266" x2="440" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="440" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">6</text>
  <line x1="545" y1="266" x2="545" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="545" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">9</text>

  <line x1="121" y1="270" x2="545" y2="270" stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-dasharray="4 4"/>
  <text x="111" y="274" fill="#64748b" font-family="Arial,sans-serif" font-size="12" text-anchor="end" font-weight="normal">1</text>
  <line x1="121" y1="170" x2="545" y2="170" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 4"/>
  <text x="111" y="174" fill="#f43f5e" font-family="Arial,sans-serif" font-size="12" text-anchor="end" font-weight="bold">3</text>
  <line x1="121" y1="70" x2="545" y2="70" stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-dasharray="4 4"/>
  <text x="111" y="74" fill="#64748b" font-family="Arial,sans-serif" font-size="12" text-anchor="end" font-weight="normal">5</text>
  
  <text x="450" y="160" fill="#f43f5e" font-family="Arial,sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Midline y = c = 3</text>

  <line x1="335" y1="170" x2="335" y2="70" stroke="#f43f5e" stroke-width="2"/>
  <line x1="330" y1="70" x2="340" y2="70" stroke="#f43f5e" stroke-width="2"/>
  <line x1="330" y1="170" x2="340" y2="170" stroke="#f43f5e" stroke-width="2"/>
  <text x="345" y="125" fill="#f43f5e" font-family="Arial,sans-serif" font-size="13" font-weight="bold" text-anchor="start">|a| = 2</text>

  <path d="M65 108 C91 91 108 70 125 70 C164 70 192 170 230 170 C268 170 297 270 335 270 C373 270 402 170 440 170 C478 170 506 70 545 70" fill="none" stroke="#4f46e5" stroke-width="4"/>
  <circle cx="125" cy="70" r="4" fill="#10b981" stroke="none" stroke-width="1"/>
  <text x="133" y="60" fill="#10b981" font-family="Arial,sans-serif" font-size="12" text-anchor="start" font-weight="bold">max 5</text>
  <circle cx="335" cy="270" r="4" fill="#f59e0b" stroke="none" stroke-width="1"/>
  <text x="343" y="288" fill="#f59e0b" font-family="Arial,sans-serif" font-size="12" text-anchor="start" font-weight="bold">min 1</text>
</svg>`;

const step3Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif">
  <rect x="1" y="1" width="598" height="338" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="65" y1="270" x2="545" y2="270" stroke="#64748b" stroke-width="2" stroke-linecap="round" />
  <line x1="125" y1="310" x2="125" y2="42" stroke="#64748b" stroke-width="2" stroke-linecap="round" />
  <line x1="125" y1="266" x2="125" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="125" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">-3</text>
  <line x1="230" y1="266" x2="230" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="230" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">0</text>
  <line x1="335" y1="266" x2="335" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="335" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">3</text>
  <line x1="440" y1="266" x2="440" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="440" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">6</text>
  <line x1="545" y1="266" x2="545" y2="274" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
  <text x="545" y="292" fill="#1e293b" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" font-weight="normal">9</text>

  <line x1="121" y1="270" x2="545" y2="270" stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-dasharray="4 4"/>
  <text x="111" y="274" fill="#64748b" font-family="Arial,sans-serif" font-size="12" text-anchor="end" font-weight="normal">1</text>
  <line x1="121" y1="170" x2="545" y2="170" stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-dasharray="4 4"/>
  <text x="111" y="174" fill="#64748b" font-family="Arial,sans-serif" font-size="12" text-anchor="end" font-weight="normal">3</text>
  <line x1="121" y1="70" x2="545" y2="70" stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-dasharray="4 4"/>
  <text x="111" y="74" fill="#64748b" font-family="Arial,sans-serif" font-size="12" text-anchor="end" font-weight="normal">5</text>

  <path d="M65 108 C91 91 108 70 125 70 C164 70 192 170 230 170 C268 170 297 270 335 270 C373 270 402 170 440 170 C478 170 506 70 545 70" fill="none" stroke="#4f46e5" stroke-width="4"/>
  <circle cx="125" cy="70" r="4" fill="#10b981" stroke="none" stroke-width="1"/>
  <text x="133" y="80" fill="#10b981" font-family="Arial,sans-serif" font-size="12" text-anchor="start" font-weight="bold">max 5</text>
  <circle cx="545" cy="70" r="4" fill="#10b981" stroke="none" stroke-width="1"/>
  <text x="537" y="80" fill="#10b981" font-family="Arial,sans-serif" font-size="12" text-anchor="end" font-weight="bold">max 5</text>
  
  <line x1="125" y1="45" x2="545" y2="45" stroke="#10b981" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="125" y1="45" x2="125" y2="65" stroke="#10b981" stroke-width="2"/>
  <line x1="545" y1="45" x2="545" y2="65" stroke="#10b981" stroke-width="2"/>
  <text x="335" y="35" fill="#047857" font-family="Arial,sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Period T = 12</text>
</svg>`;

const find = o => {
  if (!o || typeof o !== 'object') return;
  if (o.id === 'amity2020-ma-q29') {
    o.steps = [
      {
        "explain": "From the graph, the maximum value is \\(5\\) and the minimum value is \\(1\\).\n\nThe vertical shift \\(c\\) is the average of the maximum and minimum values (the midline):\n\\[c = \\frac{\\text{Max} + \\text{Min}}{2} = \\frac{5 + 1}{2} = 3\\]\n\nThe amplitude is half the difference between the maximum and minimum:\n\\[|a| = \\frac{\\text{Max} - \\text{Min}}{2} = \\frac{5 - 1}{2} = 2\\]",
        "figure": {
          "svg": step1Svg
        }
      },
      {
        "explain": "The general form is \\(y = a\\sin(bx) + c\\).\n\nAt \\(x=0\\), the curve passes through its midline \\(y=3\\) and is **decreasing**.\nA standard sine curve \\(y = \\sin(x)\\) is increasing as it passes through the origin. Since this curve is decreasing, it is inverted vertically, which means \\(a\\) must be negative.\n\nTherefore, \\(a = -2\\)."
      },
      {
        "explain": "The period \\(T\\) is the distance between two consecutive maxima (or minima).\n\nFrom the graph, the maxima occur at \\(x = -3\\) and \\(x = 9\\).\n\\[T = 9 - (-3) = 12\\]\n\nWe know the period of \\(y = a\\sin(bx) + c\\) is given by \\(T = \\frac{2\\pi}{b}\\).\n\\[12 = \\frac{2\\pi}{b} \\implies b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}\\]",
        "figure": {
          "svg": step3Svg
        }
      },
      {
        "explain": "Combining these parameters, the equation is \\(y = -2\\sin\\left(\\frac{\\pi}{6}x\\right) + 3\\).",
        "work": "\\(\\therefore (a,b,c) = \\left(-2, \\frac{\\pi}{6}, 3\\right)\\)"
      }
    ];

    ok = true;
  } else {
    for (const k in o) find(o[k]);
  }
};

find(j);
if (ok) {
  const nl = raw.includes('\r\n') ? '\r\n' : '\n';
  fs.writeFileSync(file, JSON.stringify(j, null, 2).replace(/\n/g, nl) + (raw.endsWith('\n') ? nl : ''));
  console.log('Modified amity2020-ma-q29 steps successfully.');
} else {
  console.log('Question not found.');
}
