export const Y9_CH16_QUESTIONS = [
  // --- Q1a: Rectangle Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1a',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of the rectangle shown in the diagram:\\n\\n- Length = \\(6\\text{ cm}\\)\\n- Width = \\(4\\text{ cm}\\)',
    opts: [
      { text: '\\(24\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(20\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(10\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(12\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the rectangle area formula: Area = length \\(\\times\\) width.',
    solution: 'The area is calculated as:\\n\\\[A = 6 \\\\times 4 = 24\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1a-board',
        boundingbox: [-1, 5, 7, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [6, 0], visible: false },
          { type: 'point', id: 'C', coords: [6, 4], visible: false },
          { type: 'point', id: 'D', coords: [0, 4], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'text', coords: [3, -0.5], content: '6 cm' },
          { type: 'text', coords: [6.3, 2], content: '4 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the dimensions of the rectangle.',
        workingOut: '\\\\text{Length} = 6\\\\text{ cm}, \\\\quad \\\\text{Width} = 4\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the formula for the area of a rectangle.',
        workingOut: 'A = \\\\text{length} \\\\times \\\\text{width}',
        graphData: null
      },
      {
        explanation: 'Calculate the final area.',
        workingOut: 'A = 6 \\\\times 4 = 24\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q1b: Parallelogram Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1b',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of the parallelogram shown in the diagram:\\n\\n- Base = \\(6\\text{ cm}\\)\\n- Height = \\(8\\text{ cm}\\)',
    opts: [
      { text: '\\(48\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(24\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(14\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(28\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the parallelogram area formula: Area = base \\(\\times\\) height.',
    solution: 'The area is calculated as:\\n\\\[A = 6 \\\\times 8 = 48\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1b-board',
        boundingbox: [-1, 9, 9, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [6, 0], visible: false },
          { type: 'point', id: 'C', coords: [8, 8], visible: false },
          { type: 'point', id: 'D', coords: [2, 8], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'point', id: 'H1', coords: [2, 0], visible: false },
          { type: 'segment', from: 'D', to: 'H1', dash: 2 },
          { type: 'rightangle', points: ['D', 'H1', 'A'], size: 0.4 },
          { type: 'text', coords: [3, -0.5], content: '6 cm' },
          { type: 'text', coords: [1.2, 4], content: '8 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the base and perpendicular height of the parallelogram.',
        workingOut: '\\\\text{Base } (b) = 6\\\\text{ cm}, \\\\quad \\\\text{Height } (h) = 8\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the parallelogram area formula.',
        workingOut: 'A = b \\\\times h',
        graphData: null
      },
      {
        explanation: 'Calculate the final area.',
        workingOut: 'A = 6 \\\\times 8 = 48\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q1c: Triangle Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1c',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of the triangle shown in the diagram:\\n\\n- Base = \\(8\\text{ cm}\\)\\n- Height = \\(6\\text{ cm}\\)',
    opts: [
      { text: '\\(24\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(48\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(14\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(16\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the triangle area formula: Area = 0.5 \\(\\times\\) base \\(\\times\\) height.',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times 8 \\\\times 6 = 24\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1c-board',
        boundingbox: [-1, 7, 9, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [8, 0], visible: false },
          { type: 'point', id: 'C', coords: [3, 6], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C'], color: 'blue', fillOpacity: 0.1 },
          { type: 'point', id: 'H1', coords: [3, 0], visible: false },
          { type: 'segment', from: 'C', to: 'H1', dash: 2 },
          { type: 'rightangle', points: ['C', 'H1', 'A'], size: 0.4 },
          { type: 'text', coords: [4, -0.5], content: '8 cm' },
          { type: 'text', coords: [3.3, 3], content: '6 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the base and height of the triangle.',
        workingOut: 'b = 8\\\\text{ cm}, \\\\quad h = 6\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the triangle area formula.',
        workingOut: 'A = \\\\frac{1}{2} b h',
        graphData: null
      },
      {
        explanation: 'Calculate the final area.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times 8 \\\\times 6 = 24\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q1d: Obtuse Triangle Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1d',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of the obtuse-angled triangle shown in the diagram:\\n\\n- Base = \\(6\\text{ cm}\\)\\n- Height = \\(5\\text{ cm}\\)',
    opts: [
      { text: '\\(15\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(30\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(11\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(20\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'The height lies outside the triangle, but the formula remains Area = 0.5 \\(\\times\\) base \\(\\times\\) height.',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times 6 \\\\times 5 = 15\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1d-board',
        boundingbox: [-3, 6, 8, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [6, 0], visible: false },
          { type: 'point', id: 'C', coords: [-2, 5], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C'], color: 'blue', fillOpacity: 0.1 },
          { type: 'point', id: 'H1', coords: [-2, 0], visible: false },
          { type: 'segment', from: 'A', to: 'H1', dash: 2 },
          { type: 'segment', from: 'C', to: 'H1', dash: 2 },
          { type: 'rightangle', points: ['C', 'H1', 'B'], size: 0.4 },
          { type: 'text', coords: [3, -0.5], content: '6 cm' },
          { type: 'text', coords: [-2.8, 2.5], content: '5 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the base and external perpendicular height.',
        workingOut: 'b = 6\\\\text{ cm}, \\\\quad h = 5\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the triangle area formula.',
        workingOut: 'A = \\\\frac{1}{2} b h',
        graphData: null
      },
      {
        explanation: 'Calculate the final area.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times 6 \\\\times 5 = 15\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q1e: Trapezium Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1e',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of the trapezium shown in the diagram:\\n\\n- Parallel sides = \\(5\\text{ m}\\) and \\(9\\text{ m}\\)\\n- Height = \\(4\\text{ m}\\)',
    opts: [
      { text: '\\(28\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(14\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(56\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(36\\text{ m}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the trapezium area formula: Area = 0.5 \\(\\times (a + b) \\times\\) height.',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times (5 + 9) \\\\times 4 = 7 \\\\times 4 = 28\\\\text{ m}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1e-board',
        boundingbox: [-1, 5, 10, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [9, 0], visible: false },
          { type: 'point', id: 'C', coords: [7, 4], visible: false },
          { type: 'point', id: 'D', coords: [2, 4], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'point', id: 'H1', coords: [2, 0], visible: false },
          { type: 'segment', from: 'D', to: 'H1', dash: 2 },
          { type: 'rightangle', points: ['D', 'H1', 'B'], size: 0.4 },
          { type: 'text', coords: [4.5, -0.5], content: '9 m' },
          { type: 'text', coords: [4.5, 4.3], content: '5 m' },
          { type: 'text', coords: [2.3, 2], content: '4 m' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the parallel side lengths and perpendicular height.',
        workingOut: 'a = 5\\\\text{ m}, \\\\quad b = 9\\\\text{ m}, \\\\quad h = 4\\\\text{ m}',
        graphData: null
      },
      {
        explanation: 'Apply the trapezium area formula.',
        workingOut: 'A = \\\\frac{1}{2} (a + b) h',
        graphData: null
      },
      {
        explanation: 'Calculate the final area.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times (5 + 9) \\\\times 4 = 28\\\\text{ m}^2',
        graphData: null
      }
    ]
  },

  // --- Q1f: Right-Angled Trapezium Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1f',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of the right-angled trapezium shown in the diagram:\\n\\n- Height = \\(5\\text{ cm}\\)\\n- Parallel sides = \\(6\\text{ cm}\\) and \\(8\\text{ cm}\\)',
    opts: [
      { text: '\\(35\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(70\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(40\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(30\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the trapezium area formula: Area = 0.5 \\(\\times (a + b) \\times\\) height.',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times (6 + 8) \\\\times 5 = 7 \\\\times 5 = 35\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1f-board',
        boundingbox: [-1, 7, 9, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [8, 0], visible: false },
          { type: 'point', id: 'C', coords: [6, 5], visible: false },
          { type: 'point', id: 'D', coords: [0, 5], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'rightangle', points: ['D', 'A', 'B'], size: 0.4 },
          { type: 'rightangle', points: ['C', 'D', 'A'], size: 0.4 },
          { type: 'text', coords: [4, -0.5], content: '8 cm' },
          { type: 'text', coords: [3, 5.3], content: '6 cm' },
          { type: 'text', coords: [-0.8, 2.5], content: '5 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the parallel sides and height.',
        workingOut: 'a = 6\\\\text{ cm}, \\\\quad b = 8\\\\text{ cm}, \\\\quad h = 5\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the formula.',
        workingOut: 'A = \\\\frac{1}{2} (a + b) h',
        graphData: null
      },
      {
        explanation: 'Evaluate the final value.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times (6 + 8) \\\\times 5 = 35\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q1g: Circle Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1g',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of the circle with radius \\(5\\text{ cm}\\). Give the answer in exact form and correct to two decimal places.',
    opts: [
      { text: '\\(25\\pi\\text{ cm}^2\\) (approx. \\(78.54\\text{ cm}^2\\))', imageUrl: '' },
      { text: '\\(10\\pi\\text{ cm}^2\\) (approx. \\(31.42\\text{ cm}^2\\))', imageUrl: '' },
      { text: '\\(5\\pi\\text{ cm}^2\\) (approx. \\(15.71\\text{ cm}^2\\))', imageUrl: '' },
      { text: '\\(100\\pi\\text{ cm}^2\\) (approx. \\(314.16\\text{ cm}^2\\))', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the circle area formula: Area = \\(\\pi r^2\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\pi \\\\times 5^2 = 25\\\pi\\\\text{ cm}^2 \\\\approx 78.54\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1g-board',
        boundingbox: [-6, 6, 6, -6],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'circle', id: 'C', center: 'O', radius: 5, color: 'blue' },
          { type: 'point', id: 'R', coords: [4.33, 2.5], visible: false },
          { type: 'segment', from: 'O', to: 'R', dash: 2 },
          { type: 'text', coords: [1.5, 1.5], content: '5 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the radius of the circle.',
        workingOut: 'r = 5\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the circle area formula.',
        workingOut: 'A = \\\\pi r^2',
        graphData: null
      },
      {
        explanation: 'Calculate both exact and decimal formats.',
        workingOut: 'A = \\\\pi \\\\times 5^2 = 25\\\\pi \\\\approx 78.54\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q1h: Circle Area (Diameter Given) ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1h',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of a circle with a diameter of \\(10\\text{ cm}\\). Give the answer in exact form and correct to two decimal places.',
    opts: [
      { text: '\\(25\\pi\\text{ cm}^2\\) (approx. \\(78.54\\text{ cm}^2\\))', imageUrl: '' },
      { text: '\\(100\\pi\\text{ cm}^2\\) (approx. \\(314.16\\text{ cm}^2\\))', imageUrl: '' },
      { text: '\\(50\\pi\\text{ cm}^2\\) (approx. \\(157.08\\text{ cm}^2\\))', imageUrl: '' },
      { text: '\\(20\\pi\\text{ cm}^2\\) (approx. \\(62.83\\text{ cm}^2\\))', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Halve the diameter to find the radius, then use Area = \\(\\pi r^2\\).',
    solution: 'The radius is \\(r = 10 \\\\div 2 = 5\\text{ cm}\\).\\n\\nArea is:\\n\\\[A = \\\pi \\\\times 5^2 = 25\\\pi\\\\text{ cm}^2 \\\\approx 78.54\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1h-board',
        boundingbox: [-6, 6, 6, -6],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'circle', id: 'C', center: 'O', radius: 5, color: 'blue' },
          { type: 'point', id: 'P1', coords: [-5, 0], visible: false },
          { type: 'point', id: 'P2', coords: [5, 0], visible: false },
          { type: 'segment', from: 'P1', to: 'P2', dash: 2 },
          { type: 'text', coords: [-1, 0.5], content: '10 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Convert the diameter to a radius value.',
        workingOut: 'r = \\\\frac{d}{2} = \\\\frac{10}{2} = 5\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the circle area formula.',
        workingOut: 'A = \\\\pi r^2',
        graphData: null
      },
      {
        explanation: 'Evaluate the results.',
        workingOut: 'A = \\\\pi \\\\times 5^2 = 25\\\\pi \\\\approx 78.54\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q1i: Right Trapezium Variant ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1i',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of the right-angled trapezium shown in the diagram:\\n\\n- Height = \\(4\\text{ cm}\\)\\n- Parallel sides = \\(3\\text{ cm}\\) and \\(6\\text{ cm}\\)',
    opts: [
      { text: '\\(18\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(36\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(12\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(15\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the formula Area = 0.5 \\(\\times (a + b) \\times\\) height.',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times (3 + 6) \\\\times 4 = 9 \\\\times 2 = 18\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1i-board',
        boundingbox: [-1, 5, 8, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [6, 0], visible: false },
          { type: 'point', id: 'C', coords: [3, 4], visible: false },
          { type: 'point', id: 'D', coords: [0, 4], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'rightangle', points: ['D', 'A', 'B'], size: 0.4 },
          { type: 'rightangle', points: ['C', 'D', 'A'], size: 0.4 },
          { type: 'text', coords: [3, -0.5], content: '6 cm' },
          { type: 'text', coords: [1.5, 4.3], content: '3 cm' },
          { type: 'text', coords: [-0.8, 2], content: '4 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the dimensions from the figure.',
        workingOut: 'a = 3\\\\text{ cm}, \\\\quad b = 6\\\\text{ cm}, \\\\quad h = 4\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Use the trapezium area formula.',
        workingOut: 'A = \\\\frac{1}{2} (a + b) h',
        graphData: null
      },
      {
        explanation: 'Obtain the final calculation.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times (3 + 6) \\\\times 4 = 18\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q1j: Parallelogram Variant ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q1j',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the area of the parallelogram shown in the diagram:\\n\\n- Base = \\(5\\text{ cm}\\)\\n- Height = \\(3\\text{ cm}\\)',
    opts: [
      { text: '\\(15\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(7.5\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(8\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(10\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the parallelogram area formula: Area = base \\(\\times\\) height.',
    solution: 'The area is calculated as:\\n\\\[A = 5 \\\\times 3 = 15\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q1j-board',
        boundingbox: [-1, 4, 8, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [5, 0], visible: false },
          { type: 'point', id: 'C', coords: [6, 3], visible: false },
          { type: 'point', id: 'D', coords: [1, 3], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'point', id: 'H1', coords: [1, 0], visible: false },
          { type: 'segment', from: 'D', to: 'H1', dash: 2 },
          { type: 'rightangle', points: ['D', 'H1', 'A'], size: 0.3 },
          { type: 'text', coords: [2.5, -0.5], content: '5 cm' },
          { type: 'text', coords: [0.3, 1.5], content: '3 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the dimensions.',
        workingOut: 'b = 5\\\\text{ cm}, \\\\quad h = 3\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the area formula.',
        workingOut: 'A = b \\\\times h',
        graphData: null
      },
      {
        explanation: 'Determine the area.',
        workingOut: 'A = 5 \\\\times 3 = 15\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q2a: Rhombus Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q2a',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the rhombus with diagonals of length \\(8\\text{ cm}\\) and \\(6\\text{ cm}\\).',
    opts: [
      { text: '\\(24\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(48\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(14\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(12\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the formula: Area = 0.5 \\(\\times x \\times y\\), where x and y are the diagonal lengths.',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times 8 \\\\times 6 = 24\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q2a-board',
        boundingbox: [-5, 4, 5, -4],
        elements: [
          { type: 'point', id: 'A', coords: [-4, 0], visible: false },
          { type: 'point', id: 'B', coords: [0, 3], visible: false },
          { type: 'point', id: 'C', coords: [4, 0], visible: false },
          { type: 'point', id: 'D', coords: [0, -3], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'A', to: 'C', dash: 2, color: 'red' },
          { type: 'segment', from: 'B', to: 'D', dash: 2, color: 'red' },
          { type: 'text', coords: [-2, 0.5], content: '8 cm' },
          { type: 'text', coords: [0.2, 1.5], content: '6 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the lengths of both diagonals.',
        workingOut: 'x = 8\\\\text{ cm}, \\\\quad y = 6\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Use the formula for the area of a rhombus or kite.',
        workingOut: 'A = \\\\frac{1}{2} x y',
        graphData: null
      },
      {
        explanation: 'Solve for the area.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times 8 \\\\times 6 = 24\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q2b: Kite Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q2b',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the kite with diagonals of length \\(18\\text{ cm}\\) and \\(14\\text{ cm}\\).',
    opts: [
      { text: '\\(126\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(252\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(32\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(63\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the formula: Area = 0.5 \\(\\times x \\times y\\), where x and y are the diagonal lengths.',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times 18 \\\\times 14 = 126\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q2b-board',
        boundingbox: [-10, 8, 10, -8],
        elements: [
          { type: 'point', id: 'A', coords: [-9, 0], visible: false },
          { type: 'point', id: 'B', coords: [3, 7], visible: false },
          { type: 'point', id: 'C', coords: [9, 0], visible: false },
          { type: 'point', id: 'D', coords: [3, -7], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'A', to: 'C', dash: 2, color: 'red' },
          { type: 'segment', from: 'B', to: 'D', dash: 2, color: 'red' },
          { type: 'text', coords: [-2, 0.5], content: '18 cm' },
          { type: 'text', coords: [3.3, 3.5], content: '14 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the diagonal lengths.',
        workingOut: 'x = 18\\\\text{ cm}, \\\\quad y = 14\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the kite area formula.',
        workingOut: 'A = \\\\frac{1}{2} x y',
        graphData: null
      },
      {
        explanation: 'Calculate the final area.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times 18 \\\\times 14 = 126\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q2c: Vertical Kite Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q2c',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the kite with diagonals of length \\(4\\text{ m}\\) and \\(16\\text{ m}\\).',
    opts: [
      { text: '\\(32\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(64\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(20\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(16\\text{ m}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the diagonal area formula: Area = 0.5 \\(\\times x \\times y\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times 4 \\\\times 16 = 32\\\\text{ m}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q2c-board',
        boundingbox: [-3, 9, 3, -9],
        elements: [
          { type: 'point', id: 'A', coords: [0, 8], visible: false },
          { type: 'point', id: 'B', coords: [2, 4], visible: false },
          { type: 'point', id: 'C', coords: [0, -8], visible: false },
          { type: 'point', id: 'D', coords: [-2, 4], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'A', to: 'C', dash: 2, color: 'red' },
          { type: 'segment', from: 'D', to: 'B', dash: 2, color: 'red' },
          { type: 'text', coords: [-1, 4.3], content: '4 m' },
          { type: 'text', coords: [0.2, 0], content: '16 m' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify diagonal lengths.',
        workingOut: 'x = 4\\\\text{ m}, \\\\quad y = 16\\\\text{ m}',
        graphData: null
      },
      {
        explanation: 'Use the formula.',
        workingOut: 'A = \\\\frac{1}{2} x y',
        graphData: null
      },
      {
        explanation: 'Compute the area.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times 4 \\\\times 16 = 32\\\\text{ m}^2',
        graphData: null
      }
    ]
  },

  // --- Q2d: Rhombus Area Variant ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q2d',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the rhombus with diagonals of length \\(16\\text{ mm}\\) and \\(24\\text{ mm}\\).',
    opts: [
      { text: '\\(192\\text{ mm}^2\\)', imageUrl: '' },
      { text: '\\(384\\text{ mm}^2\\)', imageUrl: '' },
      { text: '\\(40\\text{ mm}^2\\)', imageUrl: '' },
      { text: '\\(96\\text{ mm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the diagonal area formula: Area = 0.5 \\(\\times x \\times y\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times 16 \\\\times 24 = 8 \\\\times 24 = 192\\\\text{ mm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q2d-board',
        boundingbox: [-10, 15, 10, -15],
        elements: [
          { type: 'point', id: 'A', coords: [-8, 0], visible: false },
          { type: 'point', id: 'B', coords: [0, 12], visible: false },
          { type: 'point', id: 'C', coords: [8, 0], visible: false },
          { type: 'point', id: 'D', coords: [0, -12], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'A', to: 'C', dash: 2, color: 'red' },
          { type: 'segment', from: 'B', to: 'D', dash: 2, color: 'red' },
          { type: 'text', coords: [-4, 1], content: '16 mm' },
          { type: 'text', coords: [0.5, 6], content: '24 mm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify diagonal lengths.',
        workingOut: 'x = 16\\\\text{ mm}, \\\\quad y = 24\\\\text{ mm}',
        graphData: null
      },
      {
        explanation: 'Apply the formula.',
        workingOut: 'A = \\\\frac{1}{2} x y',
        graphData: null
      },
      {
        explanation: 'Determine the area.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times 16 \\\\times 24 = 192\\\\text{ mm}^2',
        graphData: null
      }
    ]
  },

  // --- Q3a: Word Problem - Rectangle ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q3a',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Find the area of a rectangle with side lengths \\(4\\text{ m}\\) and \\(7\\text{ m}\\).',
    opts: [
      { text: '\\(28\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(22\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(11\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(14\\text{ m}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Area = length \\(\\times\\) width.',
    solution: 'The area is calculated as:\\n\\\[A = 4 \\\\times 7 = 28\\\\text{ m}^2\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Identify the dimensions.',
        workingOut: '\\\\text{Side 1} = 4\\\\text{ m}, \\\\quad \\\\text{Side 2} = 7\\\\text{ m}',
        graphData: null
      },
      {
        explanation: 'Apply the formula.',
        workingOut: 'A = 4 \\\\times 7 = 28\\\\text{ m}^2',
        graphData: null
      }
    ]
  },

  // --- Q3b: Word Problem - Square ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q3b',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Find the area of a square with side length \\(8\\text{ cm}\\).',
    opts: [
      { text: '\\(64\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(32\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(16\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(80\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Area = side \\(\\times\\) side.',
    solution: 'The area is calculated as:\\n\\\[A = 8 \\\\times 8 = 64\\\\text{ cm}^2\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Identify the side length of the square.',
        workingOut: 's = 8\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the formula.',
        workingOut: 'A = s^2 = 8^2 = 64\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q3c: Word Problem - Circle ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q3c',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Find the area of a circle with a diameter of \\(10\\text{ m}\\). (Give answer in exact form.)',
    opts: [
      { text: '\\(25\\pi\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(100\\pi\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(50\\pi\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(5\\pi\\text{ m}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'First find the radius: \\(r = d/2\\), then apply \\(A = \\pi r^2\\).',
    solution: 'The radius is \\(r = 10 \\\\div 2 = 5\\text{ m}\\).\\n\\nArea is:\\n\\\[A = \\\pi r^2 = \\\pi \\\\times 5^2 = 25\\\pi\\\\text{ m}^2\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Calculate the radius from the diameter.',
        workingOut: 'r = \\\\frac{d}{2} = \\\\frac{10}{2} = 5\\\\text{ m}',
        graphData: null
      },
      {
        explanation: 'Apply the circle area formula.',
        workingOut: 'A = \\\\pi r^2 = \\\\pi \\\\times 5^2 = 25\\\\pi\\\\text{ m}^2',
        graphData: null
      }
    ]
  },

  // --- Q3d: Word Problem - Rhombus ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q3d',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Find the area of a rhombus with diagonals \\(8\\text{ cm}\\) and \\(5\\text{ cm}\\).',
    opts: [
      { text: '\\(20\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(40\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(13\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(10\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Area = 0.5 \\(\\times x \\times y\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times 8 \\\\times 5 = 20\\\\text{ cm}^2\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Identify diagonal lengths.',
        workingOut: 'x = 8\\\\text{ cm}, \\\\quad y = 5\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the area formula.',
        workingOut: 'A = \\\\frac{1}{2} x y = \\\\frac{1}{2} \\\\times 8 \\\\times 5 = 20\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q3e: Word Problem - Kite ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q3e',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Find the area of a kite with diagonals \\(4\\text{ m}\\) and \\(3\\text{ m}\\).',
    opts: [
      { text: '\\(6\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(12\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(7\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(3.5\\text{ m}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Area = 0.5 \\(\\times x \\times y\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times 4 \\\\times 3 = 6\\\\text{ m}^2\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Identify diagonal lengths.',
        workingOut: 'x = 4\\\\text{ m}, \\\\quad y = 3\\\\text{ m}',
        graphData: null
      },
      {
        explanation: 'Apply the area formula.',
        workingOut: 'A = \\\\frac{1}{2} x y = \\\\frac{1}{2} \\\\times 4 \\\\times 3 = 6\\\\text{ m}^2',
        graphData: null
      }
    ]
  },

  // --- Q3f: Word Problem - Square from Diagonal ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q3f',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Find the area of a square with a diagonal of length \\(8\\text{ cm}\\).',
    opts: [
      { text: '\\(32\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(64\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(16\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(8\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'A square is also a rhombus with equal diagonals: Area = 0.5 \\(\\times d^2\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times d^2 = \\\\frac{1}{2} \\\\times 8^2 = \\\\frac{1}{2} \\\\times 64 = 32\\\\text{ cm}^2\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Recognize that a square is a special rhombus with both diagonals equal.',
        workingOut: 'd_1 = d_2 = 8\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the formula Area = 0.5 \\\\times d_1 \\\\times d_2.',
        workingOut: 'A = \\\\frac{1}{2} d^2',
        graphData: null
      },
      {
        explanation: 'Calculate the area.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times 8^2 = 32\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q4: Derivation - Trapezium ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q4',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'teacher_review',
    question: 'Explain how to derive the formula for the area of a trapezium \\(ABCD\\) with parallel sides \\(b_1\\) and \\(b_2\\) and height \\(h\\) by doubling the shape to form a parallelogram.',
    opts: [],
    answer: 'By duplicating the trapezium and placing the second copy upside down next to the first, we form a parallelogram with base \\(b_1 + b_2\\) and height \\(h\\). The area of this parallelogram is \\((b_1 + b_2) \\\\times h\\). Since this contains two identical trapeziums, the area of one trapezium is half of that: \\\\frac{1}{2}(b_1 + b_2)h.',
    hint: 'Think about what shape is formed when two identical trapeziums are joined.',
    solution: 'Duplicating the trapezium and joining them along their non-parallel side forms a parallelogram.\\n- Base of parallelogram = \\(b_1 + b_2\\)\\n- Height of parallelogram = \\(h\\)\\n\\nArea of parallelogram = \\((b_1 + b_2)h\\).\\n\\nSince the parallelogram is made of two identical trapeziums, the area of one trapezium is:\\n\\\[A = \\\\frac{1}{2}(b_1 + b_2)h\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q4-board',
        boundingbox: [-1, 5, 12, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [3, 4], visible: false },
          { type: 'point', id: 'C', coords: [7, 4], visible: false },
          { type: 'point', id: 'D', coords: [10, 0], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'D', color: 'red', dash: 2 },
          { type: 'text', coords: [5, 4.3], content: 'b2' },
          { type: 'text', coords: [5, -0.5], content: 'b1' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Show that combining two congruent trapeziums forms a parallelogram.',
        workingOut: '\\\\text{Area of Parallelogram} = \\\\text{base} \\\\times \\\\text{height}',
        graphData: null
      },
      {
        explanation: 'Set the base of the parallelogram as the sum of the parallel sides.',
        workingOut: '\\\\text{Base} = b_1 + b_2',
        graphData: null
      },
      {
        explanation: 'Divide the parallelogram area by 2 to get the trapezium area formula.',
        workingOut: 'A = \\\\frac{1}{2} (b_1 + b_2) h',
        graphData: null
      }
    ]
  },

  // --- Q5: Derivation - Kite ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q5',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'teacher_review',
    question: 'Explain how to derive the formula for the area of a kite \\(ABCD\\) with diagonals \\(d_1\\) and \\(d_2\\) by enclosing it in a rectangle of dimensions \\(d_1 \\\\times d_2\\).',
    opts: [],
    answer: 'Enclosing the kite in a rectangle of width \\(d_2\\) and height \\(d_1\\) divides the rectangle into 8 smaller right-angled triangles. The kite consists of 4 of these triangles, while the outer region contains the other 4 identical triangles. Thus, the area of the kite is exactly half the area of the enclosing rectangle: \\\\frac{1}{2} d_1 d_2.',
    hint: 'Compare the area of the outer triangles to the triangles forming the kite.',
    solution: 'The enclosing rectangle has area:\\n\\\[A_{\\\\text{rect}} = d_1 \\\\times d_2\\\]\\nBy observing the symmetry, the four outer right-angled triangles are congruent to the four inner right-angled triangles that make up the kite.\\n\\nTherefore, the area of the kite is exactly half of the rectangle\'s area:\\n\\\[A = \\\\frac{1}{2} d_1 d_2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q5-board',
        boundingbox: [-1, 7, 7, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 3], visible: false },
          { type: 'point', id: 'B', coords: [3, 6], visible: false },
          { type: 'point', id: 'C', coords: [6, 3], visible: false },
          { type: 'point', id: 'D', coords: [3, 0], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'point', id: 'R1', coords: [0, 0], visible: false },
          { type: 'point', id: 'R2', coords: [6, 0], visible: false },
          { type: 'point', id: 'R3', coords: [6, 6], visible: false },
          { type: 'point', id: 'R4', coords: [0, 6], visible: false },
          { type: 'polygon', points: ['R1', 'R2', 'R3', 'R4'], color: 'slate', fillOpacity: 0, dash: 2 },
          { type: 'segment', from: 'A', to: 'C', dash: 1, color: 'red' },
          { type: 'segment', from: 'B', to: 'D', dash: 1, color: 'red' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Enclose the kite inside a bounding box rectangle.',
        workingOut: '\\\\text{Rectangle Area} = d_1 d_2',
        graphData: null
      },
      {
        explanation: 'Identify that the kite occupies exactly half of the rectangular bounding box.',
        workingOut: '\\\\text{Kite Area} = \\\\frac{1}{2} \\\\times \\\\text{Rectangle Area}',
        graphData: null
      },
      {
        explanation: 'State the final formula.',
        workingOut: 'A = \\\\frac{1}{2} d_1 d_2',
        graphData: null
      }
    ]
  },

  // --- Q6a: Area of Circle Variant ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q6a',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Find the area of the circle with radius \\(6\\text{ cm}\\). Give the answer in exact form.',
    opts: [
      { text: '\\(36\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(12\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(18\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(144\\pi\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Apply Area = \\(\\pi r^2\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\pi r^2 = \\\pi \\\\times 6^2 = 36\\\pi\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q6a-board',
        boundingbox: [-7, 7, 7, -7],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'circle', id: 'C', center: 'O', radius: 6, color: 'blue' },
          { type: 'point', id: 'R', coords: [5.2, 3], visible: false },
          { type: 'segment', from: 'O', to: 'R', dash: 2 },
          { type: 'text', coords: [2, 1], content: '6 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the radius of the circle.',
        workingOut: 'r = 6\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the area formula.',
        workingOut: 'A = \\\\pi r^2 = \\\\pi \\\\times 6^2 = 36\\\\pi\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q6bi: Semicircle Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q6bi',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the semicircle with radius \\(8\\text{ cm}\\). Give the answer in exact form.',
    opts: [
      { text: '\\(32\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(64\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(16\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(8\\pi\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'A semicircle is half a circle: Area = 0.5 \\(\\times \\pi r^2\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{2} \\\\times \\\pi \\\\times 8^2 = \\\\frac{1}{2} \\\\times 64\\\pi = 32\\\pi\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q6bi-board',
        boundingbox: [-9, 9, 9, -2],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'point', id: 'P1', coords: [-8, 0], visible: false },
          { type: 'point', id: 'P2', coords: [8, 0], visible: false },
          { type: 'segment', from: 'P1', to: 'P2', color: 'blue' },
          { type: 'arc', center: 'O', from: 'P2', to: 'P1', color: 'blue' },
          { type: 'text', coords: [4, -0.6], content: '8 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the radius of the semicircle.',
        workingOut: 'r = 8\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the semicircle area formula.',
        workingOut: 'A = \\\\frac{1}{2} \\\\pi r^2',
        graphData: null
      },
      {
        explanation: 'Calculate the final area.',
        workingOut: 'A = \\\\frac{1}{2} \\\\times \\\\pi \\\\times 8^2 = 32\\\\pi\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q6bii: Quadrant Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q6bii',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the quadrant (quarter circle) with radius \\(12\\text{ cm}\\). Give the answer in exact form.',
    opts: [
      { text: '\\(36\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(144\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(72\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(18\\pi\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'A quadrant has an angle of 90 degrees: Area = 0.25 \\(\\times \\pi r^2\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{1}{4} \\\\times \\\pi \\\\times 12^2 = \\\\frac{1}{4} \\\\times 144\\\pi = 36\\\pi\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q6bii-board',
        boundingbox: [-2, 14, 14, -2],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'point', id: 'P1', coords: [12, 0], visible: false },
          { type: 'point', id: 'P2', coords: [0, 12], visible: false },
          { type: 'segment', from: 'O', to: 'P1', color: 'blue' },
          { type: 'segment', from: 'O', to: 'P2', color: 'blue' },
          { type: 'arc', center: 'O', from: 'P1', to: 'P2', color: 'blue' },
          { type: 'rightangle', points: ['P1', 'O', 'P2'], size: 0.8 },
          { type: 'text', coords: [6, -0.6], content: '12 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the radius of the quadrant.',
        workingOut: 'r = 12\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Apply the quadrant area formula.',
        workingOut: 'A = \\\\frac{1}{4} \\\\pi r^2',
        graphData: null
      },
      {
        explanation: 'Evaluate the final value.',
        workingOut: 'A = \\\\frac{1}{4} \\\\times \\\\pi \\\\times 12^2 = 36\\\\pi\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q6biii: 120 Sector Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q6biii',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the sector with radius \\(9\\text{ cm}\\) and center angle \\(120^\\circ\\). Give the answer in exact form.',
    opts: [
      { text: '\\(27\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(81\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(9\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(18\\pi\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the sector area formula: Area = \\(\\frac{\\theta}{360} \\times \\pi r^2\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{120}{360} \\\\times \\\pi \\\\times 9^2 = \\\\frac{1}{3} \\\\times 81\\\pi = 27\\\pi\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q6biii-board',
        boundingbox: [-10, 10, 10, -5],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'point', id: 'P1', coords: [9, 0], visible: false },
          { type: 'point', id: 'P2', coords: [-4.5, 7.79], visible: false },
          { type: 'segment', from: 'O', to: 'P1', color: 'blue' },
          { type: 'segment', from: 'O', to: 'P2', color: 'blue' },
          { type: 'arc', center: 'O', from: 'P1', to: 'P2', color: 'blue' },
          { type: 'text', coords: [4.5, -0.6], content: '9 cm' },
          { type: 'text', coords: [0.5, 1.5], content: '120°' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the radius and the central angle.',
        workingOut: 'r = 9\\\\text{ cm}, \\\\quad \\\\theta = 120^\\\\circ',
        graphData: null
      },
      {
        explanation: 'Use the sector area formula.',
        workingOut: 'A = \\\\frac{\\\\theta}{360} \\\\pi r^2',
        graphData: null
      },
      {
        explanation: 'Perform the final calculations.',
        workingOut: 'A = \\\\frac{120}{360} \\\\times \\\\pi \\\\times 9^2 = 27\\\\pi\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q6biv: 270 Major Sector Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q6biv',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the major sector with radius \\(8\\text{ cm}\\) and center angle \\(270^\\circ\\). Give the answer in exact form.',
    opts: [
      { text: '\\(48\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(64\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(32\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(16\\pi\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the sector area formula: Area = \\(\\frac{\\theta}{360} \\times \\pi r^2\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{270}{360} \\\\times \\\pi \\\\times 8^2 = \\\\frac{3}{4} \\\\times 64\\\pi = 48\\\pi\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q6biv-board',
        boundingbox: [-10, 10, 10, -10],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'point', id: 'P1', coords: [8, 0], visible: false },
          { type: 'point', id: 'P2', coords: [0, 8], visible: false },
          { type: 'segment', from: 'O', to: 'P1', color: 'blue' },
          { type: 'segment', from: 'O', to: 'P2', color: 'blue' },
          { type: 'arc', center: 'O', from: 'P2', to: 'P1', color: 'blue' },
          { type: 'rightangle', points: ['P1', 'O', 'P2'], size: 0.8 },
          { type: 'text', coords: [4, -0.6], content: '8 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the parameters.',
        workingOut: 'r = 8\\\\text{ cm}, \\\\quad \\\\theta = 270^\\\\circ',
        graphData: null
      },
      {
        explanation: 'Apply the sector formula.',
        workingOut: 'A = \\\\frac{\\\\theta}{360} \\\\pi r^2',
        graphData: null
      },
      {
        explanation: 'Calculate the final exact value.',
        workingOut: 'A = \\\\frac{270}{360} \\\\times \\\\pi \\\\times 8^2 = 48\\\\pi\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q6bv: 30 Sector Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q6bv',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the sector with radius \\(12\\text{ cm}\\) and center angle \\(30^\\circ\\). Give the answer in exact form.',
    opts: [
      { text: '\\(12\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(24\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(6\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(36\\pi\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the sector area formula with \\(\\theta = 30^\\circ\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{30}{360} \\\\times \\\pi \\\\times 12^2 = \\\\frac{1}{12} \\\\times 144\\\pi = 12\\\pi\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q6bv-board',
        boundingbox: [-2, 14, 14, -2],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'point', id: 'P1', coords: [12, 0], visible: false },
          { type: 'point', id: 'P2', coords: [10.39, 6], visible: false },
          { type: 'segment', from: 'O', to: 'P1', color: 'blue' },
          { type: 'segment', from: 'O', to: 'P2', color: 'blue' },
          { type: 'arc', center: 'O', from: 'P1', to: 'P2', color: 'blue' },
          { type: 'text', coords: [6, -0.6], content: '12 cm' },
          { type: 'text', coords: [2.5, 0.7], content: '30°' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State radius and angle.',
        workingOut: 'r = 12\\\\text{ cm}, \\\\quad \\\\theta = 30^\\\\circ',
        graphData: null
      },
      {
        explanation: 'Apply the formula.',
        workingOut: 'A = \\\\frac{\\\\theta}{360} \\\\pi r^2',
        graphData: null
      },
      {
        explanation: 'Obtain exact result.',
        workingOut: 'A = \\\\frac{30}{360} \\\\times \\\\pi \\\\times 12^2 = 12\\\\pi\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q6bvi: 45 Sector Area ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q6bvi',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the sector with radius \\(8\\text{ cm}\\) and center angle \\(45^\\circ\\). Give the answer in exact form.',
    opts: [
      { text: '\\(8\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(16\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(4\\pi\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(32\\pi\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the sector area formula with \\(\\theta = 45^\\circ\\).',
    solution: 'The area is calculated as:\\n\\\[A = \\\\frac{45}{360} \\\\times \\\pi \\\\times 8^2 = \\\\frac{1}{8} \\\\times 64\\\pi = 8\\\pi\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q6bvi-board',
        boundingbox: [-2, 10, 10, -2],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'point', id: 'P1', coords: [8, 0], visible: false },
          { type: 'point', id: 'P2', coords: [5.66, 5.66], visible: false },
          { type: 'segment', from: 'O', to: 'P1', color: 'blue' },
          { type: 'segment', from: 'O', to: 'P2', color: 'blue' },
          { type: 'arc', center: 'O', from: 'P1', to: 'P2', color: 'blue' },
          { type: 'text', coords: [4, -0.6], content: '8 cm' },
          { type: 'text', coords: [2, 0.8], content: '45°' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the dimensions.',
        workingOut: 'r = 8\\\\text{ cm}, \\\\quad \\\\theta = 45^\\\\circ',
        graphData: null
      },
      {
        explanation: 'Calculate the sector area.',
        workingOut: 'A = \\\\frac{45}{360} \\\\times \\\\pi \\\\times 8^2 = 8\\\\pi\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q6c: General Sector Formula ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q6c',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Choose the correct algebraic expression for the area \\(A\\) of a sector with radius \\(r\\) and central angle \\(\\theta^\\circ\\).',
    opts: [
      { text: '\\(A = \\\\frac{\\\\theta}{360} \\\\pi r^2\\)', imageUrl: '' },
      { text: '\\(A = \\\\frac{\\\\theta}{180} \\\\pi r^2\\)', imageUrl: '' },
      { text: '\\(A = \\\\frac{\\\\theta}{360} (2 \\\\pi r)\\)', imageUrl: '' },
      { text: '\\(A = \\\\theta \\\\pi r^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'The sector area is a fraction of the total area of the circle, where the fraction is defined by the central angle divided by a full rotation.',
    solution: 'A full circle has an angle of \\(360^\\circ\\) and an area of \\(\\pi r^2\\).\\n\\nTherefore, a sector representing a fraction \\(\\frac{\\\\theta}{360}\\) of the full rotation has area:\\n\\\[A = \\\\frac{\\\\theta}{360} \\\\pi r^2\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Recall the area of a full circle.',
        workingOut: 'A_{\\\\text{circle}} = \\\\pi r^2',
        graphData: null
      },
      {
        explanation: 'Express the central angle as a fraction of a full circle rotation.',
        workingOut: '\\\\text{Fraction} = \\\\frac{\\\\theta}{360}',
        graphData: null
      },
      {
        explanation: 'Multiply the fraction by the full circle area.',
        workingOut: 'A = \\\\frac{\\\\theta}{360} \\\\pi r^2',
        graphData: null
      }
    ]
  },

  // --- Q7a: Reverse Area - Circle ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q7a',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the radius of the circle with an area of \\(15\\text{ mm}^2\\). (Correct to two decimal places.)',
    opts: [
      { text: '\\(2.19\\text{ mm}\\)', imageUrl: '' },
      { text: '\\(4.77\\text{ mm}\\)', imageUrl: '' },
      { text: '\\(1.54\\text{ mm}\\)', imageUrl: '' },
      { text: '\\(3.18\\text{ mm}\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Rearrange the circle area formula: \\(r = \\sqrt{A/\\pi}\\).',
    solution: 'From the area formula:\\n\\\[15 = \\\\pi r^2\\\\\\\\\nr^2 = \\\\frac{15}{\\\\pi} \\\\approx 4.7746\\\\\\\\\nr = \\\\sqrt{\\\\frac{15}{\\\\pi}} \\\\approx 2.19\\\\text{ mm}\\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Write the circle area equation.',
        workingOut: 'A = \\\\pi r^2',
        graphData: null
      },
      {
        explanation: 'Substitute the given area and solve for \\(r^2\\).',
        workingOut: 'r^2 = \\\\frac{15}{\\\\pi}',
        graphData: null
      },
      {
        explanation: 'Find the square root to calculate the radius.',
        workingOut: 'r = \\\\sqrt{\\\\frac{15}{\\\\pi}} \\\\approx 2.19\\\\text{ mm}',
        graphData: null
      }
    ]
  },

  // --- Q7b: Reverse Area - Circle ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q7b',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the radius of the circle with an area of \\(80\\text{ cm}^2\\). (Correct to two decimal places.)',
    opts: [
      { text: '\\(5.05\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(25.46\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(10.09\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(5.64\\text{ cm}\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Use the formula: \\(r = \\sqrt{A/\\pi}\\).',
    solution: 'Solve for the radius:\\n\\\[80 = \\\\pi r^2\\\\\\\\\nr^2 = \\\\frac{80}{\\\\pi} \\\\approx 25.4647\\\\\\\\\nr = \\\\sqrt{\\\\frac{80}{\\\\pi}} \\\\approx 5.05\\\\text{ cm}\\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Rearrange the area equation for \\(r\\).',
        workingOut: 'r = \\\\sqrt{\\\\frac{A}{\\\\pi}}',
        graphData: null
      },
      {
        explanation: 'Substitute the area \\(80\\\\text{ cm}^2\\).',
        workingOut: 'r = \\\\sqrt{\\\\frac{80}{\\\\pi}}',
        graphData: null
      },
      {
        explanation: 'Evaluate the square root.',
        workingOut: 'r \\\\approx 5.05\\\\text{ cm}',
        graphData: null
      }
    ]
  },

  // --- Q7c: Reverse Area - Circle (Exact Area) ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q7c',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the radius of a circle with an area of \\(16\\pi\\text{ m}^2\\).',
    opts: [
      { text: '\\(4\\text{ m}\\)', imageUrl: '' },
      { text: '\\(8\\text{ m}\\)', imageUrl: '' },
      { text: '\\(16\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(2\\text{ m}\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Set up the equation \\(\\pi r^2 = 16\\pi\\) and solve for r.',
    solution: 'Solve for radius:\\n\\\[\\\\pi r^2 = 16\\\\pi\\\\\\\\\nr^2 = 16\\\\\\\\\nr = 4\\\\text{ m}\\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Set up the area formula.',
        workingOut: '\\\\pi r^2 = 16\\\\pi',
        graphData: null
      },
      {
        explanation: 'Divide both sides by \\(\\\\pi\\).',
        workingOut: 'r^2 = 16',
        graphData: null
      },
      {
        explanation: 'Solve for \\(r\\).',
        workingOut: 'r = 4\\\\text{ m}',
        graphData: null
      }
    ]
  },

  // --- Q7d: Reverse Area - Circle (Exact Area) ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q7d',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    question: 'Calculate the radius of a circle with an area of \\(36\\pi\\text{ cm}^2\\).',
    opts: [
      { text: '\\(6\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(18\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(12\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(9\\text{ cm}\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Solve the equation \\(\\pi r^2 = 36\\pi\\).',
    solution: 'Solve for radius:\\n\\\[\\\\pi r^2 = 36\\\\pi\\\\\\\\\nr^2 = 36\\\\\\\\\nr = 6\\\\text{ cm}\\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Set up the area formula.',
        workingOut: '\\\\pi r^2 = 36\\\\pi',
        graphData: null
      },
      {
        explanation: 'Solve for \\(r^2\\).',
        workingOut: 'r^2 = 36',
        graphData: null
      },
      {
        explanation: 'Calculate the square root.',
        workingOut: 'r = 6\\\\text{ cm}',
        graphData: null
      }
    ]
  },

  // --- Q8: Area of Shaded Ring (Annulus) ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q8',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Find the area of the shaded ring (annulus) with an inner radius of \\(4\\text{ cm}\\) and an outer radius of \\(6\\text{ cm}\\). Give the answer in exact form and correct to two decimal places.',
    opts: [
      { text: '\\(20\\pi\\text{ cm}^2\\) (approx. \\(62.83\\text{ cm}^2\\))', imageUrl: '' },
      { text: '\\(52\\pi\\text{ cm}^2\\) (approx. \\(163.36\\text{ cm}^2\\))', imageUrl: '' },
      { text: '\\(10\\pi\\text{ cm}^2\\) (approx. \\(31.42\\text{ cm}^2\\))', imageUrl: '' },
      { text: '\\(16\\pi\\text{ cm}^2\\) (approx. \\(50.27\\text{ cm}^2\\))', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Area of annulus = Area of outer circle - Area of inner circle.',
    solution: 'Calculate the outer and inner areas:\\n\\\[A_{\\\\text{annulus}} = \\\\pi R^2 - \\\\pi r^2 = \\\\pi (6^2 - 4^2) = \\\\pi (36 - 16) = 20\\\\pi \\\\approx 62.83\\\\text{ cm}^2\\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q8-board',
        boundingbox: [-7, 7, 7, -7],
        elements: [
          { type: 'point', id: 'O', coords: [0, 0], name: 'O', visible: true },
          { type: 'circle', id: 'C_outer', center: 'O', radius: 6, color: 'blue', fillOpacity: 0.1 },
          { type: 'circle', id: 'C_inner', center: 'O', radius: 4, color: 'white', fillOpacity: 1.0 },
          { type: 'point', id: 'R1', coords: [3.46, 2], visible: false },
          { type: 'point', id: 'R2', coords: [5.2, 3], visible: false },
          { type: 'segment', from: 'O', to: 'R1', dash: 2, color: 'red' },
          { type: 'segment', from: 'O', to: 'R2', dash: 2, color: 'red' },
          { type: 'text', coords: [1, 0.3], content: '4 cm' },
          { type: 'text', coords: [3, 1.2], content: '6 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the outer radius (R) and inner radius (r).',
        workingOut: 'R = 6\\\\text{ cm}, \\\\quad r = 4\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Write the formula for the area of an annulus.',
        workingOut: 'A = \\\\pi R^2 - \\\\pi r^2 = \\\\pi (R^2 - r^2)',
        graphData: null
      },
      {
        explanation: 'Evaluate the area.',
        workingOut: 'A = \\\\pi (6^2 - 4^2) = 20\\\\pi \\\\approx 62.83\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q9: Reverse Area comparison ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q9',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the radius of a circle whose area is half that of a circle with a radius of \\(8\\text{ cm}\\). (Correct to two decimal places.)',
    opts: [
      { text: '\\(5.66\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(4.00\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(8.00\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(2.83\\text{ cm}\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Find the area of the larger circle first, halve it, then find the corresponding radius.',
    solution: 'Area of larger circle is:\\n\\\[A_1 = \\\\pi \\\\times 8^2 = 64\\\\pi\\\\text{ cm}^2\\\]\\nArea of smaller circle is:\\n\\\[A_2 = \\\\frac{1}{2} \\\\times 64\\\\pi = 32\\\\pi\\\\text{ cm}^2\\\]\\nRadius of smaller circle is:\\n\\\[r = \\\\sqrt{\\\\frac{32\\\\pi}{\\\\pi}} = \\\\sqrt{32} \\\\approx 5.66\\\\text{ cm}\\\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Determine the area of the original circle.',
        workingOut: 'A_1 = \\\\pi \\\\times 8^2 = 64\\\\pi\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Find the target area which is half of the original.',
        workingOut: 'A_2 = 32\\\\pi\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Calculate the target radius.',
        workingOut: 'r_2 = \\\\sqrt{\\\\frac{32\\\\pi}{\\\\pi}} = \\\\sqrt{32} \\\\approx 5.66\\\\text{ cm}',
        graphData: null
      }
    ]
  },

  // --- Q10a: Composite Shape - L-Shape ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q10a',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the composite L-shaped region with the following dimensions:\\n- Total width = \\(12\\text{ cm}\\)\\n- Total height = \\(10\\text{ cm}\\)\\n- Top horizontal side = \\(6\\text{ cm}\\)\\n- Right vertical side = \\(4\\text{ cm}\\)',
    opts: [
      { text: '\\(96\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(120\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(84\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(108\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Divide the L-shape into two rectangles.',
    solution: 'Divide the L-shape vertically into two rectangles:\\n- Rectangle 1 (left): width = 6 cm, height = 10 cm. Area = 60 cm².\\n- Rectangle 2 (right): width = 6 cm (12 - 6), height = 6 cm (10 - 4). Area = 36 cm².\\n\\nTotal area = 60 + 36 = 96 cm².',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q10a-board',
        boundingbox: [-1, 11, 13, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [12, 0], visible: false },
          { type: 'point', id: 'C', coords: [12, 6], visible: false },
          { type: 'point', id: 'D', coords: [6, 6], visible: false },
          { type: 'point', id: 'E', coords: [6, 10], visible: false },
          { type: 'point', id: 'F', coords: [0, 10], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D', 'E', 'F'], color: 'blue', fillOpacity: 0.1 },
          { type: 'text', coords: [6, -0.6], content: '12 cm' },
          { type: 'text', coords: [-1, 5], content: '10 cm' },
          { type: 'text', coords: [3, 10.3], content: '6 cm' },
          { type: 'text', coords: [12.3, 3], content: '6 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Split the shape into two simple rectangles.',
        workingOut: '\\\\text{Area} = A_1 + A_2',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the left rectangle.',
        workingOut: 'A_1 = 6 \\\\times 10 = 60\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the right rectangle.',
        workingOut: 'A_2 = (12 - 6) \\\\times 6 = 36\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Sum the areas to get the total area.',
        workingOut: 'A_{\\\\text{total}} = 60 + 36 = 96\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q10b: Composite Shape - U-Shape ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q10b',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the composite U-shaped region with the following dimensions:\\n- Total width = \\(18\\text{ cm}\\)\\n- Total height = \\(15\\text{ cm}\\)\\n- Bottom widths of the legs = \\(4\\text{ cm}\\) each\\n- Height of the inner cutout = \\(10\\text{ cm}\\)',
    opts: [
      { text: '\\(170\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(270\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(210\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(190\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Subtract the area of the inner rectangle cutout from the area of the outer bounding rectangle.',
    solution: 'Area of outer rectangle: 18 cm x 15 cm = 270 cm².\\nInner cutout dimensions: width = 10 cm (18 - 4 - 4), height = 10 cm.\\nInner cutout area = 10 cm x 10 cm = 100 cm².\\n\\nTotal area = 270 - 100 = 170 cm².',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q10b-board',
        boundingbox: [-1, 16, 19, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [18, 0], visible: false },
          { type: 'point', id: 'C', coords: [18, 15], visible: false },
          { type: 'point', id: 'D', coords: [14, 15], visible: false },
          { type: 'point', id: 'E', coords: [14, 5], visible: false },
          { type: 'point', id: 'F', coords: [4, 5], visible: false },
          { type: 'point', id: 'G', coords: [4, 15], visible: false },
          { type: 'point', id: 'H', coords: [0, 15], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], color: 'blue', fillOpacity: 0.1 },
          { type: 'text', coords: [9, -0.6], content: '18 cm' },
          { type: 'text', coords: [-1, 7.5], content: '15 cm' },
          { type: 'text', coords: [2, -0.5], content: '4 cm' },
          { type: 'text', coords: [16, -0.5], content: '4 cm' },
          { type: 'text', coords: [9, 6], content: '10 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the total area of the enclosing outer rectangle.',
        workingOut: 'A_{\\\\text{outer}} = 18 \\\\times 15 = 270\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Find the dimensions of the cutout region.',
        workingOut: '\\\\text{Cutout Width} = 18 - 4 - 4 = 10\\\\text{ cm}, \\\\quad \\\\text{Cutout Height} = 10\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the cutout rectangle.',
        workingOut: 'A_{\\\\text{cutout}} = 10 \\\\times 10 = 100\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Subtract the cutout area from the outer area.',
        workingOut: 'A_{\\\\text{total}} = 270 - 100 = 170\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q10c: Composite Shape - House Shape ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q10c',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the house-shaped composite region consisting of a rectangle and a triangular roof with:\\n- Rectangle base = \\(6\\text{ cm}\\)\\n- Rectangle side height = \\(4\\text{ cm}\\)\\n- Total height from base to the apex of the roof = \\(7\\text{ cm}\\)',
    opts: [
      { text: '\\(33\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(42\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(24\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(36\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Divide the shape into a rectangle of height 4 cm and a triangle of height 3 cm (7 - 4).',
    solution: 'Calculate the two component areas:\\n- Rectangle: 6 cm x 4 cm = 24 cm².\\n- Triangle: base = 6 cm, height = 3 cm (7 - 4). Area = 0.5 x 6 x 3 = 9 cm².\\n\\nTotal area = 24 + 9 = 33 cm².',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q10c-board',
        boundingbox: [-1, 8, 7, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [6, 0], visible: false },
          { type: 'point', id: 'C', coords: [6, 4], visible: false },
          { type: 'point', id: 'D', coords: [3, 7], visible: false },
          { type: 'point', id: 'E', coords: [0, 4], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D', 'E'], color: 'blue', fillOpacity: 0.1 },
          { type: 'text', coords: [3, -0.5], content: '6 cm' },
          { type: 'text', coords: [-0.8, 2], content: '4 cm' },
          { type: 'text', coords: [6.3, 5], content: '7 cm' },
          { type: 'segment', from: 'C', to: 'E', dash: 2 }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the area of the bottom rectangular section.',
        workingOut: 'A_{\\\\text{rect}} = 6 \\\\times 4 = 24\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Calculate the vertical height of the triangular roof.',
        workingOut: 'h = 7 - 4 = 3\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the triangle.',
        workingOut: 'A_{\\\\text{tri}} = \\\\frac{1}{2} \\\\times 6 \\\\times 3 = 9\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Add the two areas to find the total area.',
        workingOut: 'A_{\\\\text{total}} = 24 + 9 = 33\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q10d: Composite Shape - Semicircle + Rectangle ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q10d',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the composite shape consisting of a rectangle with a semicircle on top of it:\\n- Rectangle width = \\(6\\text{ cm}\\)\\n- Rectangle height = \\(3\\text{ cm}\\)\\n\\n(Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(32.14\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(46.27\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(24.50\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(36.14\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'The semicircle diameter is 6 cm (so radius is 3 cm). Add the rectangle area (18) and the semicircle area (0.5 * pi * 3^2).',
    solution: 'Calculate both parts:\\n- Rectangle area: 6 cm x 3 cm = 18 cm².\\n- Semicircle area: radius = 3 cm. Area = 0.5 x pi x 3² = 4.5pi ≈ 14.137 cm².\\n\\nTotal area = 18 + 14.137 = 32.14 cm².',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q10d-board',
        boundingbox: [-1, 7, 7, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [6, 0], visible: false },
          { type: 'point', id: 'C', coords: [6, 3], visible: false },
          { type: 'point', id: 'D', coords: [0, 3], visible: false },
          { type: 'point', id: 'M', coords: [3, 3], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'arc', center: 'M', from: 'C', to: 'D', color: 'blue' },
          { type: 'text', coords: [3, -0.5], content: '6 cm' },
          { type: 'text', coords: [-0.8, 1.5], content: '3 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the rectangle area.',
        workingOut: 'A_{\\\\text{rect}} = 6 \\\\times 3 = 18\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Find the radius of the semicircle.',
        workingOut: 'r = \\\\frac{6}{2} = 3\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the semicircle.',
        workingOut: 'A_{\\\\text{semi}} = \\\\frac{1}{2} \\\\pi r^2 = 4.5\\\\pi \\\\approx 14.14\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Sum the two components for the final area.',
        workingOut: 'A_{\\\\text{total}} = 18 + 14.14 = 32.14\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q10e: Composite Shape - Stadium/Oval Track ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q10e',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of a stadium track made from a central rectangle and two semicircles at each end:\\n- Rectangle length = \\(15\\text{ m}\\)\\n- Rectangle width = \\(10\\text{ m}\\)\\n\\n(Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(228.54\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(307.08\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(150.00\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(207.08\\text{ m}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'The two semicircles combine to make one full circle of diameter 10 m (radius 5 m). Add the rectangle area (15 * 10 = 150) and circle area.',
    solution: 'Calculate the areas:\\n- Rectangle: 15 m x 10 m = 150 m².\\n- Two semicircles = 1 circle of radius r = 5 m. Area = pi x 5² = 25pi ≈ 78.54 m².\\n\\nTotal area = 150 + 78.54 = 228.54 m².',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q10e-board',
        boundingbox: [-6, 6, 21, -6],
        elements: [
          { type: 'point', id: 'A', coords: [0, -5], visible: false },
          { type: 'point', id: 'B', coords: [15, -5], visible: false },
          { type: 'point', id: 'C', coords: [15, 5], visible: false },
          { type: 'point', id: 'D', coords: [0, 5], visible: false },
          { type: 'point', id: 'M1', coords: [0, 0], visible: false },
          { type: 'point', id: 'M2', coords: [15, 0], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'arc', center: 'M1', from: 'D', to: 'A', color: 'blue' },
          { type: 'arc', center: 'M2', from: 'B', to: 'C', color: 'blue' },
          { type: 'text', coords: [7.5, -5.5], content: '15 m' },
          { type: 'text', coords: [7.5, 0], content: '10 m' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the area of the central rectangular section.',
        workingOut: 'A_{\\\\text{rect}} = 15 \\\\times 10 = 150\\\\text{ m}^2',
        graphData: null
      },
      {
        explanation: 'Combine the two semicircular ends into a single full circle.',
        workingOut: '\\\\text{Radius } (r) = \\\\frac{10}{2} = 5\\\\text{ m}',
        graphData: null
      },
      {
        explanation: 'Calculate the area of this full circle.',
        workingOut: 'A_{\\\\text{circle}} = \\\\pi \\\\times 5^2 = 25\\\\pi \\\\approx 78.54\\\\text{ m}^2',
        graphData: null
      },
      {
        explanation: 'Sum both sections to find the total track area.',
        workingOut: 'A_{\\\\text{total}} = 150 + 78.54 = 228.54\\\\text{ m}^2',
        graphData: null
      }
    ]
  },

  // --- Q10f: Composite Shape - Quadrant + Square ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q10f',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the area of the composite shape consisting of a rectangle/square on the left and a quadrant (quarter circle) on the right, with:\\n- Base width = \\(5\\text{ m}\\)\\n- Left height = \\(7\\text{ m}\\)',
    opts: [
      { text: '\\(54.63\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(35.00\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(74.63\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(44.63\\text{ m}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Divide the shape into a rectangle of dimensions 5 m x 7 m and a quadrant with a radius of 5 m.',
    solution: 'Divide the shape:\\n- Rectangle: 5 m x 7 m = 35 m².\\n- Quadrant: radius = 5 m. Area = 0.25 x pi x 5² = 6.25pi ≈ 19.63 m².\\n\\nTotal area = 35 + 19.63 = 54.63 m².',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q10f-board',
        boundingbox: [-1, 9, 12, -1],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [5, 0], visible: false },
          { type: 'point', id: 'C', coords: [10, 0], visible: false },
          { type: 'point', id: 'D', coords: [5, 5], visible: false },
          { type: 'point', id: 'E', coords: [5, 7], visible: false },
          { type: 'point', id: 'F', coords: [0, 7], visible: false },
          { type: 'polygon', points: ['A', 'B', 'E', 'F'], color: 'blue', fillOpacity: 0.1 },
          { type: 'arc', center: 'B', from: 'C', to: 'D', color: 'blue' },
          { type: 'segment', from: 'B', to: 'D', dash: 2 },
          { type: 'text', coords: [2.5, -0.5], content: '5 m' },
          { type: 'text', coords: [-0.8, 3.5], content: '7 m' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the area of the left rectangle.',
        workingOut: 'A_{\\\\text{rect}} = 5 \\\\times 7 = 35\\\\text{ m}^2',
        graphData: null
      },
      {
        explanation: 'Identify the radius of the quadrant (which matches the width of the shape).',
        workingOut: 'r = 5\\\\text{ m}',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the quadrant.',
        workingOut: 'A_{\\\\text{quad}} = \\\\frac{1}{4} \\\\pi r^2 = \\\\frac{25\\\\pi}{4} \\\\approx 19.63\\\\text{ m}^2',
        graphData: null
      },
      {
        explanation: 'Sum the two components.',
        workingOut: 'A_{\\\\text{total}} = 35 + 19.63 = 54.63\\\\text{ m}^2',
        graphData: null
      }
    ]
  },

  // --- Q10g: Composite Shape - Multi-Step L-Shape ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q10g',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the area of the composite step-like shape with the following dimensions:\\n- Total bottom length = \\(24\\text{ cm}\\)\\n- Left vertical height = \\(12\\text{ cm}\\)\\n- Vertical step down height = \\(2\\text{ cm}\\)',
    opts: [
      { text: '\\(264\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(288\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(240\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(192\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Divide the shape horizontally or vertically into rectangles using the heights of the steps.',
    solution: 'Split the shape into two sections:\\n- Left rectangle: width = 12 cm, height = 12 cm. Area = 12 x 12 = 144 cm².\\n- Right rectangle: width = 12 cm (24 - 12), height = 10 cm (12 - 2). Area = 12 x 10 = 120 cm².\\n\\nTotal area = 144 + 120 = 264 cm².',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q10g-board',
        boundingbox: [-2, 14, 26, -2],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [24, 0], visible: false },
          { type: 'point', id: 'C', coords: [24, 10], visible: false },
          { type: 'point', id: 'D', coords: [12, 10], visible: false },
          { type: 'point', id: 'E', coords: [12, 12], visible: false },
          { type: 'point', id: 'F', coords: [0, 12], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D', 'E', 'F'], color: 'blue', fillOpacity: 0.1 },
          { type: 'text', coords: [12, -0.6], content: '24 cm' },
          { type: 'text', coords: [-1.5, 6], content: '12 cm' },
          { type: 'text', coords: [13, 11], content: '2 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Divide the composite shape into two rectangles vertically.',
        workingOut: '\\\\text{Area} = A_1 + A_2',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the left square/rectangle.',
        workingOut: 'A_1 = 12 \\\\times 12 = 144\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Determine the dimensions and area of the right rectangle.',
        workingOut: '\\\\text{Width} = 24 - 12 = 12\\\\text{ cm}, \\\\quad \\\\text{Height} = 12 - 2 = 10\\\\text{ cm}',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the right rectangle.',
        workingOut: 'A_2 = 12 \\\\times 10 = 120\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Find the total sum.',
        workingOut: 'A_{\\\\text{total}} = 144 + 120 = 264\\\\text{ cm}^2',
        graphData: null
      }
    ]
  },

  // --- Q10h: Composite Shape - Semicircle + Central Rectangle + Triangle ---
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16a',
    topicCode: '16A',
    topicTitle: 'Review of area',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16a-q10h',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the area of the composite shape consisting of a central rectangle, a top semicircle, and a bottom triangle:\\n- Rectangle dimensions = \\(14\\text{ cm} \\\\times 6\\text{ cm}\\)\\n- Semicircle diameter = \\(10\\text{ cm}\\)\\n- Bottom triangle height = \\(5\\text{ cm}\\)\\n\\n(Round to two decimal places.)',
    opts: [
      { text: '\\(158.27\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(183.27\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(135.50\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(119.00\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Sum the areas of the rectangle, the semicircle (diameter 10 cm, radius 5 cm), and the bottom triangle (base 14 cm, height 5 cm).',
    solution: 'Calculate each section:\\n- Rectangle Area: 14 cm x 6 cm = 84 cm².\\n- Semicircle Area: radius = 5 cm. Area = 0.5 x pi x 5² = 12.5pi ≈ 39.27 cm².\\n- Triangle Area: base = 14 cm, height = 5 cm. Area = 0.5 x 14 x 5 = 35 cm².\\n\\nTotal area = 84 + 39.27 + 35 = 158.27 cm².',
    graphData: {
      jsxGraph: {
        id: 'y9-16a-q10h-board',
        boundingbox: [-2, 13, 16, -7],
        elements: [
          { type: 'point', id: 'A', coords: [0, 0], visible: false },
          { type: 'point', id: 'B', coords: [14, 0], visible: false },
          { type: 'point', id: 'C', coords: [14, 6], visible: false },
          { type: 'point', id: 'D', coords: [0, 6], visible: false },
          { type: 'point', id: 'E', coords: [7, -5], visible: false },
          { type: 'point', id: 'M', coords: [7, 6], visible: false },
          { type: 'point', id: 'S1', coords: [2, 6], visible: false },
          { type: 'point', id: 'S2', coords: [12, 6], visible: false },
          { type: 'polygon', points: ['A', 'B', 'C', 'D'], color: 'blue', fillOpacity: 0.1 },
          { type: 'polygon', points: ['A', 'B', 'E'], color: 'blue', fillOpacity: 0.1 },
          { type: 'arc', center: 'M', from: 'S2', to: 'S1', color: 'blue' },
          { type: 'text', coords: [7, -0.6], content: '14 cm' },
          { type: 'text', coords: [14.5, 3], content: '6 cm' },
          { type: 'text', coords: [7, 6.5], content: '10 cm' },
          { type: 'text', coords: [8, -2.5], content: '5 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the area of the rectangle.',
        workingOut: 'A_{\\\\text{rect}} = 14 \\\\times 6 = 84\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the semicircle.',
        workingOut: 'A_{\\\\text{semi}} = \\\\frac{1}{2} \\\\pi (5)^2 = 12.5\\\\pi \\\\approx 39.27\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the triangle.',
        workingOut: 'A_{\\\\text{tri}} = \\\\frac{1}{2} \\\\times 14 \\\\times 5 = 35\\\\text{ cm}^2',
        graphData: null
      },
      {
        explanation: 'Sum the three component areas.',
        workingOut: 'A_{\\\\text{total}} = 84 + 39.27 + 35 = 158.27\\\\text{ cm}^2',
        graphData: null
      }
    ]
  }
];
