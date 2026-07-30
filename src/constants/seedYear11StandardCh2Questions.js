// Generated candidates for HSC Standard "Measurement: Applications" (y11s-2)
// — Area, Surface Area and Volume. Written from scratch (no existing corpus
// reference was available for this topic — see QUESTION_BANK_EXPANSION.md).
// Pending review: ingest with --source=generated, then approve in the local
// corpus viewer's New Questions tab before ever deploying.
export const Y11S_CH2_QUESTIONS = [
  // ── Area of composite shapes (y11s-2a) ──────────────────────────────────
  {
    id: 'y11s-2a-gen-1',
    chapterId: 'y11s-2',
    topicId: 'y11s-2a',
    topicCode: '2A',
    t: 'Area of composite shapes',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 120,
    question: 'A garden bed is a rectangle 8 m long and 5 m wide, with a semicircular section of diameter 5 m attached to one end. Find the total area, correct to two decimal places.',
    options: ['\\( 49.82 \\text{ m}^2 \\)', '\\( 59.63 \\text{ m}^2 \\)', '\\( 40.00 \\text{ m}^2 \\)', '\\( 45.00 \\text{ m}^2 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 260 170" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M40,40 L160,40 L160,115 L40,115 Z" fill="#dbeafe" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M160,40 A37.5,37.5 0 0 1 160,115 Z" fill="#fef3c7" fill-opacity="0.65" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <text x="100" y="132" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle">8 m</text>
        <text x="24" y="81" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" transform="rotate(-90 24 81)">5 m</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Find the area of the rectangle.', workingOut: '\\( A_{rect} = 8 \\times 5 = 40 \\text{ m}^2 \\)' },
      { explanation: 'Find the area of the semicircle (radius = 2.5 m, half of the diameter).', workingOut: '\\( A_{semi} = \\dfrac{1}{2}\\pi (2.5)^2 = 9.82 \\text{ m}^2 \\)' },
      { explanation: 'Add the two areas together.', workingOut: '\\( A = 40 + 9.82 = 49.82 \\text{ m}^2 \\)' },
    ],
  },
  {
    id: 'y11s-2a-gen-2',
    chapterId: 'y11s-2',
    topicId: 'y11s-2a',
    topicCode: '2A',
    t: 'Area of composite shapes',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 150,
    question: 'A block of land is a trapezium with parallel sides 12 m and 18 m, and the perpendicular distance between them is 9 m. A triangular section with base 6 m and height 9 m is removed from one corner for a driveway. Find the remaining area.',
    options: ['\\( 108 \\text{ m}^2 \\)', '\\( 135 \\text{ m}^2 \\)', '\\( 27 \\text{ m}^2 \\)', '\\( 162 \\text{ m}^2 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 200 190" width="100%" height="auto" style="max-width:360px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M68,130 L164,130 L116,50 L20,50 Z" fill="#dbeafe" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M20,130 L68,130 L20,50 Z" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <line x1="20" y1="148" x2="164" y2="148" stroke="#64748b" stroke-width="1.2"/>
        <line x1="20" y1="142" x2="20" y2="154" stroke="#64748b" stroke-width="1.2"/>
        <line x1="164" y1="142" x2="164" y2="154" stroke="#64748b" stroke-width="1.2"/>
        <text x="92" y="163" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle">18 m</text>
        <text x="68" y="40" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle">12 m</text>
        <text x="9" y="92" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" transform="rotate(-90 9 92)">9 m</text>
        <text x="44" y="127" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">6 m</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Find the area of the trapezium.', workingOut: '\\( A_{trap} = \\dfrac{1}{2}(12+18)(9) = 135 \\text{ m}^2 \\)' },
      { explanation: 'Find the area of the triangular section removed.', workingOut: '\\( A_{tri} = \\dfrac{1}{2}(6)(9) = 27 \\text{ m}^2 \\)' },
      { explanation: 'Subtract the triangle from the trapezium.', workingOut: '\\( A = 135 - 27 = 108 \\text{ m}^2 \\)' },
    ],
  },
  {
    id: 'y11s-2a-gen-3',
    chapterId: 'y11s-2',
    topicId: 'y11s-2a',
    topicCode: '2A',
    t: 'Area of composite shapes',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 150,
    question: 'A rectangle measuring 10 m by 6 m has a quarter-circle of radius 6 m cut from one corner. Find the remaining area, correct to one decimal place.',
    options: ['\\( 31.7 \\text{ m}^2 \\)', '\\( 28.3 \\text{ m}^2 \\)', '\\( 60.0 \\text{ m}^2 \\)', '\\( 88.3 \\text{ m}^2 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 180 120" width="100%" height="auto" style="max-width:360px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,15 L140,15 A72,72 0 0 1 68,87 L20,87 Z" fill="#dbeafe" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M140,15 L140,87 L68,87 A72,72 0 0 0 140,15 Z" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <text x="80" y="102" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle">10 m</text>
        <text x="9" y="52" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" transform="rotate(-90 9 52)">6 m</text>
        <text x="150" y="55" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" transform="rotate(-90 150 55)">6 m</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Find the area of the rectangle.', workingOut: '\\( A_{rect} = 10 \\times 6 = 60 \\text{ m}^2 \\)' },
      { explanation: 'Find the area of the quarter circle removed.', workingOut: '\\( A_{quarter} = \\dfrac{1}{4}\\pi (6)^2 = 28.3 \\text{ m}^2 \\)' },
      { explanation: 'Subtract the quarter circle from the rectangle.', workingOut: '\\( A = 60 - 28.3 = 31.7 \\text{ m}^2 \\)' },
    ],
  },

  // ── Surface area (y11s-2b) ───────────────────────────────────────────────
  {
    id: 'y11s-2b-gen-1',
    chapterId: 'y11s-2',
    topicId: 'y11s-2b',
    topicCode: '2B',
    t: 'Surface area of solids',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 120,
    question: 'Find the surface area of a closed rectangular prism with length 8 cm, width 5 cm and height 4 cm.',
    options: ['\\( 184 \\text{ cm}^2 \\)', '\\( 92 \\text{ cm}^2 \\)', '\\( 160 \\text{ cm}^2 \\)', '\\( 320 \\text{ cm}^2 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 200 170" width="100%" height="auto" style="max-width:340px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M60,140 L140,140 L140,100 L60,100 Z" fill="#dbeafe" fill-opacity="0.65" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M60,100 L140,100 L165,82 L85,82 Z" fill="#fef3c7" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M140,140 L140,100 L165,82 L165,122 Z" fill="#e0e7ff" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M85,122 L85,82" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M85,122 L165,122" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M85,122 L60,140" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <text x="100" y="155" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle">8 cm</text>
        <text x="46" y="123" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" transform="rotate(-90 46 123)">4 cm</text>
        <text x="118" y="87" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">5 cm</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Use the surface area formula for a rectangular prism.', workingOut: '\\( SA = 2(lw + lh + wh) \\)' },
      { explanation: 'Substitute the dimensions and evaluate.', workingOut: '\\( SA = 2(8\\times5 + 8\\times4 + 5\\times4) = 2(92) = 184 \\text{ cm}^2 \\)' },
    ],
  },
  {
    id: 'y11s-2b-gen-2',
    chapterId: 'y11s-2',
    topicId: 'y11s-2b',
    topicCode: '2B',
    t: 'Surface area of solids',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 150,
    question: 'A cylindrical can, closed at both ends, has a radius of 3.5 cm and a height of 12 cm. Find its surface area, correct to the nearest whole number.',
    options: ['\\( 341 \\text{ cm}^2 \\)', '\\( 264 \\text{ cm}^2 \\)', '\\( 302 \\text{ cm}^2 \\)', '\\( 836 \\text{ cm}^2 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 160 200" width="100%" height="auto" style="max-width:280px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M38,40 L38,168" stroke="#475569" stroke-width="2"/>
        <path d="M122,40 L122,168" stroke="#475569" stroke-width="2"/>
        <path d="M38,168 A42,14 0 0 0 122,168" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M38,168 A42,14 0 0 1 122,168" fill="none" stroke="#475569" stroke-width="2"/>
        <ellipse cx="80" cy="40" rx="42" ry="14" fill="#dbeafe" fill-opacity="0.65" stroke="#475569" stroke-width="2"/>
        <path d="M38,40 L38,168 L122,168 L122,40" fill="#dbeafe" fill-opacity="0.25" stroke="none"/>
        <line x1="80" y1="40" x2="122" y2="40" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 2"/>
        <text x="101" y="34" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">r = 3.5 cm</text>
        <text x="18" y="108" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" transform="rotate(-90 18 108)">h = 12 cm</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Use the total surface area formula for a closed cylinder.', workingOut: '\\( SA = 2\\pi r^2 + 2\\pi rh \\)' },
      { explanation: 'Substitute \\( r = 3.5 \\) and \\( h = 12 \\), then evaluate.', workingOut: '\\( SA = 2\\pi(3.5)^2 + 2\\pi(3.5)(12) = 76.97 + 263.89 = 340.86 \\approx 341 \\text{ cm}^2 \\)' },
    ],
  },
  {
    id: 'y11s-2b-gen-3',
    chapterId: 'y11s-2',
    topicId: 'y11s-2b',
    topicCode: '2B',
    t: 'Surface area of solids',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 180,
    question: 'A cone with a closed circular base has a base radius of 6 cm and a slant height of 10 cm. Find its total surface area, correct to one decimal place.',
    options: ['\\( 301.6 \\text{ cm}^2 \\)', '\\( 188.5 \\text{ cm}^2 \\)', '\\( 113.1 \\text{ cm}^2 \\)', '\\( 226.2 \\text{ cm}^2 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 180 190" width="100%" height="auto" style="max-width:300px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M90,30 L30,150" stroke="#475569" stroke-width="2"/>
        <path d="M90,30 L150,150" stroke="#475569" stroke-width="2"/>
        <path d="M30,150 A60,16 0 0 0 150,150" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M30,150 A60,16 0 0 1 150,150" fill="none" stroke="#475569" stroke-width="2"/>
        <path d="M90,30 L30,150 A60,16 0 0 1 150,150 Z" fill="#dbeafe" fill-opacity="0.35" stroke="none"/>
        <line x1="90" y1="150" x2="150" y2="150" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 2"/>
        <text x="120" y="167" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">r = 6 cm</text>
        <text x="130" y="85" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" transform="rotate(48 130 85)">l = 10 cm</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Use the total surface area formula for a closed cone.', workingOut: '\\( SA = \\pi r^2 + \\pi rl \\)' },
      { explanation: 'Substitute \\( r = 6 \\) and \\( l = 10 \\), then evaluate.', workingOut: '\\( SA = \\pi(6)^2 + \\pi(6)(10) = 113.10 + 188.50 = 301.6 \\text{ cm}^2 \\)' },
    ],
  },

  // ── Volume (y11s-2c) ─────────────────────────────────────────────────────
  {
    id: 'y11s-2c-gen-1',
    chapterId: 'y11s-2',
    topicId: 'y11s-2c',
    topicCode: '2C',
    t: 'Volume of solids',
    type: 'multiple_choice',
    difficulty: 'easy',
    timeLimit: 120,
    question: 'Find the volume of a rectangular prism with dimensions 7 cm, 4 cm and 5 cm.',
    options: ['\\( 140 \\text{ cm}^3 \\)', '\\( 16 \\text{ cm}^3 \\)', '\\( 35 \\text{ cm}^3 \\)', '\\( 70 \\text{ cm}^3 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 200 170" width="100%" height="auto" style="max-width:340px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M60,140 L140,140 L140,100 L60,100 Z" fill="#dbeafe" fill-opacity="0.65" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M60,100 L140,100 L165,82 L85,82 Z" fill="#fef3c7" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M140,140 L140,100 L165,82 L165,122 Z" fill="#e0e7ff" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M85,122 L85,82" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M85,122 L165,122" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M85,122 L60,140" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <text x="100" y="155" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle">7 cm</text>
        <text x="46" y="123" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" transform="rotate(-90 46 123)">4 cm</text>
        <text x="118" y="87" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">5 cm</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Multiply the three dimensions together.', workingOut: '\\( V = 7 \\times 4 \\times 5 = 140 \\text{ cm}^3 \\)' },
    ],
  },
  {
    id: 'y11s-2c-gen-2',
    chapterId: 'y11s-2',
    topicId: 'y11s-2c',
    topicCode: '2C',
    t: 'Volume of solids',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 150,
    question: 'A cylindrical water tank has a radius of 1.5 m and a height of 2.8 m. Find its volume, correct to two decimal places.',
    options: ['\\( 19.79 \\text{ m}^3 \\)', '\\( 13.19 \\text{ m}^3 \\)', '\\( 26.39 \\text{ m}^3 \\)', '\\( 79.17 \\text{ m}^3 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 160 200" width="100%" height="auto" style="max-width:280px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M38,40 L38,168" stroke="#475569" stroke-width="2"/>
        <path d="M122,40 L122,168" stroke="#475569" stroke-width="2"/>
        <path d="M38,168 A42,14 0 0 0 122,168" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M38,168 A42,14 0 0 1 122,168" fill="none" stroke="#475569" stroke-width="2"/>
        <ellipse cx="80" cy="40" rx="42" ry="14" fill="#dbeafe" fill-opacity="0.65" stroke="#475569" stroke-width="2"/>
        <path d="M38,40 L38,168 L122,168 L122,40" fill="#dbeafe" fill-opacity="0.25" stroke="none"/>
        <line x1="80" y1="40" x2="122" y2="40" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 2"/>
        <text x="101" y="34" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">r = 1.5 m</text>
        <text x="18" y="108" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" transform="rotate(-90 18 108)">h = 2.8 m</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Use the volume formula for a cylinder.', workingOut: '\\( V = \\pi r^2 h \\)' },
      { explanation: 'Substitute \\( r = 1.5 \\) and \\( h = 2.8 \\), then evaluate.', workingOut: '\\( V = \\pi (1.5)^2 (2.8) = 19.79 \\text{ m}^3 \\)' },
    ],
  },
  {
    id: 'y11s-2c-gen-3',
    chapterId: 'y11s-2',
    topicId: 'y11s-2c',
    topicCode: '2C',
    t: 'Volume of solids',
    type: 'multiple_choice',
    difficulty: 'medium',
    timeLimit: 150,
    question: 'A square pyramid has a base side length of 8 cm and a perpendicular height of 9 cm. Find its volume.',
    options: ['\\( 192 \\text{ cm}^3 \\)', '\\( 576 \\text{ cm}^3 \\)', '\\( 64 \\text{ cm}^3 \\)', '\\( 288 \\text{ cm}^3 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 180 180" width="100%" height="auto" style="max-width:300px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M90,150 L165,132 L90,40 Z" fill="#dbeafe" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M90,150 L15,132 L90,40 Z" fill="#fef3c7" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
        <path d="M15,132 L90,114 L165,132" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M90,114 L90,40" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M90,150 L90,40" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 2"/>
        <path d="M84,150 L84,144 L90,144" fill="none" stroke="#64748b" stroke-width="1.2"/>
        <text x="128" y="148" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle">8 cm</text>
        <text x="72" y="92" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle">9 cm</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Use the volume formula for a pyramid.', workingOut: '\\( V = \\dfrac{1}{3} \\times \\text{base area} \\times \\text{height} \\)' },
      { explanation: 'Substitute the base area \\( (8\\times8=64) \\) and height, then evaluate.', workingOut: '\\( V = \\dfrac{1}{3}(64)(9) = 192 \\text{ cm}^3 \\)' },
    ],
  },
  {
    id: 'y11s-2c-gen-4',
    chapterId: 'y11s-2',
    topicId: 'y11s-2c',
    topicCode: '2C',
    t: 'Volume of solids',
    type: 'multiple_choice',
    difficulty: 'hard',
    timeLimit: 180,
    question: 'A solid consists of a hemisphere of radius 4 cm sitting on top of a cylinder of radius 4 cm and height 10 cm. Find the total volume of the solid, correct to one decimal place.',
    options: ['\\( 636.7 \\text{ cm}^3 \\)', '\\( 502.7 \\text{ cm}^3 \\)', '\\( 770.7 \\text{ cm}^3 \\)', '\\( 268.1 \\text{ cm}^3 \\)'],
    answer: '0',
    graphData: {
      svg: `<svg viewBox="0 0 180 220" width="100%" height="auto" style="max-width:300px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg">
        <path d="M45,90 A45,58 0 0 1 135,90" fill="#fef3c7" fill-opacity="0.6" stroke="#475569" stroke-width="2"/>
        <path d="M45,90 L45,190" stroke="#475569" stroke-width="2"/>
        <path d="M135,90 L135,190" stroke="#475569" stroke-width="2"/>
        <ellipse cx="90" cy="90" rx="45" ry="13" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 2"/>
        <path d="M45,190 A45,13 0 0 0 135,190" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M45,190 A45,13 0 0 1 135,190" fill="none" stroke="#475569" stroke-width="2"/>
        <path d="M45,90 L45,190 L135,190 L135,90" fill="#dbeafe" fill-opacity="0.25" stroke="none"/>
        <line x1="90" y1="90" x2="135" y2="90" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 2"/>
        <text x="112" y="82" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">r = 4 cm</text>
        <text x="25" y="142" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" transform="rotate(-90 25 142)">h = 10 cm</text>
      </svg>`,
    },
    solutionSteps: [
      { explanation: 'Find the volume of the cylinder.', workingOut: '\\( V_{cyl} = \\pi (4)^2 (10) = 502.65 \\text{ cm}^3 \\)' },
      { explanation: 'Find the volume of the hemisphere (half of a sphere).', workingOut: '\\( V_{hemi} = \\dfrac{2}{3}\\pi (4)^3 = 134.04 \\text{ cm}^3 \\)' },
      { explanation: 'Add the two volumes together.', workingOut: '\\( V = 502.65 + 134.04 = 636.7 \\text{ cm}^3 \\)' },
    ],
  },
];
