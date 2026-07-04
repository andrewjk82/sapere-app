export const Y9_CH16B_QUESTIONS = [
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q1a',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of a cube with the following side length:\\n- Side length = \\(8\\\\text{ cm}\\)',
    opts: [
      { text: '\\(320\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(384\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(512\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(256\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '1',
    hint: 'A cube has 6 congruent square faces.',
    solution: 'A cube has 6 identical square faces. Each face has an area of:\\n\\[A = 8 \\\\times 8 = 64\\\\text{ cm}^2\\]\\n\\nTherefore, the total surface area is:\\n\\[\\\\text{Total SA} = 6 \\\\times 64 = 384\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q1a-board',
        boundingbox: [-3,9,9,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [5,0], visible: false },
          { type: 'point', id: 'C', coords: [5,5], visible: false },
          { type: 'point', id: 'D', coords: [0,5], visible: false },
          { type: 'point', id: 'E', coords: [2,2], visible: false },
          { type: 'point', id: 'F', coords: [7,2], visible: false },
          { type: 'point', id: 'G', coords: [7,7], visible: false },
          { type: 'point', id: 'H', coords: [2,7], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue', dash: 2 },
          { type: 'text', coords: [2.5,-0.6], content: '8 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the number of faces of a cube.',
        workingOut: '\\\\( \\\\text{Number of faces} = 6 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the area of a single square face.',
        workingOut: '\\\\( A_{\\\\text{face}} = 8^2 = 64\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply by 6 to find the total surface area.',
        workingOut: '\\\\( \\\\text{Total SA} = 6 \\\\times 64 = 384\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q1b',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of a cube with the following side length:\\n- Side length = \\(6\\\\text{ cm}\\)',
    opts: [
      { text: '\\(288\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(180\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(144\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(216\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '3',
    hint: 'A cube has 6 congruent square faces.',
    solution: 'A cube has 6 identical square faces. Each face has an area of:\\n\\[A = 6 \\\\times 6 = 36\\\\text{ cm}^2\\]\\n\\nTherefore, the total surface area is:\\n\\[\\\\text{Total SA} = 6 \\\\times 36 = 216\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q1b-board',
        boundingbox: [-3,9,9,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [5,0], visible: false },
          { type: 'point', id: 'C', coords: [5,5], visible: false },
          { type: 'point', id: 'D', coords: [0,5], visible: false },
          { type: 'point', id: 'E', coords: [2,2], visible: false },
          { type: 'point', id: 'F', coords: [7,2], visible: false },
          { type: 'point', id: 'G', coords: [7,7], visible: false },
          { type: 'point', id: 'H', coords: [2,7], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue', dash: 2 },
          { type: 'text', coords: [2.5,-0.6], content: '6 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the number of faces of a cube.',
        workingOut: '\\\\( \\\\text{Number of faces} = 6 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the area of a single square face.',
        workingOut: '\\\\( A_{\\\\text{face}} = 6^2 = 36\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply by 6 to find the total surface area.',
        workingOut: '\\\\( \\\\text{Total SA} = 6 \\\\times 36 = 216\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q1c',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of a rectangular prism with the following dimensions:\\n- Length = \\(14\\\\text{ cm}\\)\\n- Width = \\(11\\\\text{ cm}\\)\\n- Height = \\(4\\\\text{ cm}\\)',
    opts: [
      { text: '\\(480\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(520\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(508\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(254\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '2',
    hint: 'Use the surface area formula for a rectangular prism: SA = 2(lw + wh + lh).',
    solution: 'Use the formula for the surface area of a rectangular prism:\\n\\[\\\\text{SA} = 2(lw + wh + lh)\\]\\nSubstitute the given values:\\n\\[\\\\text{SA} = 2(14 \\\\times 11 + 11 \\\\times 4 + 14 \\\\times 4)\\]\\n\\[\\\\text{SA} = 2(154 + 44 + 56)\\]\\n\\[\\\\text{SA} = 2 \\\\times 254 = 508\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q1c-board',
        boundingbox: [-3,8,11,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [7,0], visible: false },
          { type: 'point', id: 'C', coords: [7,3], visible: false },
          { type: 'point', id: 'D', coords: [0,3], visible: false },
          { type: 'point', id: 'E', coords: [2,1.5], visible: false },
          { type: 'point', id: 'F', coords: [9,1.5], visible: false },
          { type: 'point', id: 'G', coords: [9,4.5], visible: false },
          { type: 'point', id: 'H', coords: [2,4.5], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue', dash: 2 },
          { type: 'text', coords: [3.5,-0.6], content: '14 cm' },
          { type: 'text', coords: [8.5,0.4], content: '11 cm' },
          { type: 'text', coords: [-1.2,1.5], content: '4 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the formula for the surface area of a rectangular prism.',
        workingOut: '\\\\( \\\\text{SA} = 2(lw + wh + lh) \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the given dimensions into the formula.',
        workingOut: '\\\\( \\\\text{SA} = 2(14 \\\\times 11 + 11 \\\\times 4 + 14 \\\\times 4) \\\\)',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for the total surface area.',
        workingOut: '\\\\( \\\\text{SA} = 2(154 + 44 + 56) = 2 \\\\times 254 = 508\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q1d',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of a rectangular prism with the following dimensions:\\n- Length = \\(4\\\\text{ cm}\\)\\n- Width = \\(8\\\\text{ cm}\\)\\n- Height = \\(15\\\\text{ cm}\\)',
    opts: [
      { text: '\\(380\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(212\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(480\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(424\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '3',
    hint: 'The surface area is the sum of the areas of the 6 rectangular faces.',
    solution: 'Use the formula for the surface area of a rectangular prism:\\n\\[\\\\text{SA} = 2(lw + wh + lh)\\]\\nSubstitute the given values:\\n\\[\\\\text{SA} = 2(4 \\\\times 8 + 8 \\\\times 15 + 4 \\\\times 15)\\]\\n\\[\\\\text{SA} = 2(32 + 120 + 60)\\]\\n\\[\\\\text{SA} = 2 \\\\times 212 = 424\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q1d-board',
        boundingbox: [-3,11,8,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [3,0], visible: false },
          { type: 'point', id: 'C', coords: [3,7], visible: false },
          { type: 'point', id: 'D', coords: [0,7], visible: false },
          { type: 'point', id: 'E', coords: [2,1.5], visible: false },
          { type: 'point', id: 'F', coords: [5,1.5], visible: false },
          { type: 'point', id: 'G', coords: [5,8.5], visible: false },
          { type: 'point', id: 'H', coords: [2,8.5], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue', dash: 2 },
          { type: 'text', coords: [1.5,-0.6], content: '4 cm' },
          { type: 'text', coords: [4.2,0.4], content: '8 cm' },
          { type: 'text', coords: [-1.2,3.5], content: '15 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the formula for the surface area of a rectangular prism.',
        workingOut: '\\\\( \\\\text{SA} = 2(lw + wh + lh) \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the given dimensions into the formula.',
        workingOut: '\\\\( \\\\text{SA} = 2(4 \\\\times 8 + 8 \\\\times 15 + 4 \\\\times 15) \\\\)',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for the total surface area.',
        workingOut: '\\\\( \\\\text{SA} = 2(32 + 120 + 60) = 2 \\\\times 212 = 424\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q1e',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of a rectangular prism with the following dimensions:\\n- Length = \\(9.2\\\\text{ cm}\\)\\n- Width = \\(2.5\\\\text{ cm}\\)\\n- Height = \\(5.0\\\\text{ cm}\\)',
    opts: [
      { text: '\\(182\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(145\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(81.5\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(163\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '3',
    hint: 'Use SA = 2(lw + wh + lh).',
    solution: 'Use the formula for the surface area of a rectangular prism:\\n\\[\\\\text{SA} = 2(lw + wh + lh)\\]\\nSubstitute the given values:\\n\\[\\\\text{SA} = 2(9.2 \\\\times 2.5 + 2.5 \\\\times 5.0 + 9.2 \\\\times 5.0)\\]\\n\\[\\\\text{SA} = 2(23.0 + 12.5 + 46.0)\\]\\n\\[\\\\text{SA} = 2 \\\\times 81.5 = 163\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q1e-board',
        boundingbox: [-3,8,11,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [5.5,0], visible: false },
          { type: 'point', id: 'C', coords: [5.5,3.5], visible: false },
          { type: 'point', id: 'D', coords: [0,3.5], visible: false },
          { type: 'point', id: 'E', coords: [1.5,1], visible: false },
          { type: 'point', id: 'F', coords: [7,1], visible: false },
          { type: 'point', id: 'G', coords: [7,4.5], visible: false },
          { type: 'point', id: 'H', coords: [1.5,4.5], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue', dash: 2 },
          { type: 'text', coords: [2.5,-0.6], content: '9.2 cm' },
          { type: 'text', coords: [6.2,0.3], content: '2.5 cm' },
          { type: 'text', coords: [-1.4,1.75], content: '5.0 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the formula for the surface area of a rectangular prism.',
        workingOut: '\\\\( \\\\text{SA} = 2(lw + wh + lh) \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the given dimensions into the formula.',
        workingOut: '\\\\( \\\\text{SA} = 2(9.2 \\\\times 2.5 + 2.5 \\\\times 5.0 + 9.2 \\\\times 5.0) \\\\)',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for the total surface area.',
        workingOut: '\\\\( \\\\text{SA} = 2(23.0 + 12.5 + 46.0) = 2 \\\\times 81.5 = 163\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q1f',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of a rectangular prism with the following dimensions:\\n- Length = \\(8.0\\\\text{ cm}\\)\\n- Width = \\(1.6\\\\text{ cm}\\)\\n- Height = \\(7.5\\\\text{ cm}\\)',
    opts: [
      { text: '\\(192.8\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(156.4\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(169.6\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(84.8\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '2',
    hint: 'Use the surface area formula: SA = 2(lw + wh + lh).',
    solution: 'Use the formula for the surface area of a rectangular prism:\\n\\[\\\\text{SA} = 2(lw + wh + lh)\\]\\nSubstitute the given values:\\n\\[\\\\text{SA} = 2(8.0 \\\\times 1.6 + 1.6 \\\\times 7.5 + 8.0 \\\\times 7.5)\\]\\n\\[\\\\text{SA} = 2(12.8 + 12.0 + 60.0)\\]\\n\\[\\\\text{SA} = 2 \\\\times 84.8 = 169.6\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q1f-board',
        boundingbox: [-3,8,11,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [5,0], visible: false },
          { type: 'point', id: 'C', coords: [5,4.5], visible: false },
          { type: 'point', id: 'D', coords: [0,4.5], visible: false },
          { type: 'point', id: 'E', coords: [1,1], visible: false },
          { type: 'point', id: 'F', coords: [6,1], visible: false },
          { type: 'point', id: 'G', coords: [6,5.5], visible: false },
          { type: 'point', id: 'H', coords: [1,5.5], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue', dash: 2 },
          { type: 'text', coords: [2.5,-0.6], content: '8.4 cm' },
          { type: 'text', coords: [5.6,0.3], content: '1.5 cm' },
          { type: 'text', coords: [-1.4,2.25], content: '6.2 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the formula for the surface area of a rectangular prism.',
        workingOut: '\\\\( \\\\text{SA} = 2(lw + wh + lh) \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the given dimensions into the formula.',
        workingOut: '\\\\( \\\\text{SA} = 2(8.0 \\\\times 1.6 + 1.6 \\\\times 7.5 + 8.0 \\\\times 7.5) \\\\)',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for the total surface area.',
        workingOut: '\\\\( \\\\text{SA} = 2(12.8 + 12.0 + 60.0) = 2 \\\\times 84.8 = 169.6\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q2',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'An ice-cream container has a square base and is open at the top. Its dimensions are:\\n- Base side length = \\(12\\\\text{ cm}\\)\\n- Height = \\(8\\\\text{ cm}\\)\\n\\nFind the surface area of the outside of the container.',
    opts: [
      { text: '\\(384\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(672\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(528\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(480\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '2',
    hint: 'Since the container is open at the top, it only has 5 faces: 1 bottom square face and 4 vertical rectangular faces.',
    solution: 'Calculate the area of the faces:\\n- Bottom square face: \\(12 \\\\times 12 = 144\\\\text{ cm}^2\\)\\n- 4 vertical side faces: \\(4 \\\\times (12 \\\\times 8) = 4 \\\\times 96 = 384\\\\text{ cm}^2\\)\\n\\nTotal outside surface area:\\n\\[\\\\text{SA} = 144 + 384 = 528\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q2-board',
        boundingbox: [-3,8,11,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [5,0], visible: false },
          { type: 'point', id: 'C', coords: [5,4], visible: false },
          { type: 'point', id: 'D', coords: [0,4], visible: false },
          { type: 'point', id: 'E', coords: [2,1.5], visible: false },
          { type: 'point', id: 'F', coords: [7,1.5], visible: false },
          { type: 'point', id: 'G', coords: [7,5.5], visible: false },
          { type: 'point', id: 'H', coords: [2,5.5], visible: false },
          { type: 'polygon', points: ["A","B","F","E"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'C', color: 'blue' },
          { type: 'segment', from: 'C', to: 'D', color: 'blue' },
          { type: 'segment', from: 'D', to: 'A', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'A', color: 'blue', dash: 2 },
          { type: 'text', coords: [2.5,-0.6], content: '13 cm' },
          { type: 'text', coords: [6.2,0.4], content: '13 cm' },
          { type: 'text', coords: [-1.4,2], content: '9 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the number and shapes of the faces to tile/paint. Since it is open at the top, it has 1 base and 4 walls.',
        workingOut: '\\\\( \\\\text{Faces} = 1\\\\text{ base} + 4\\\\text{ walls} \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the square bottom base.',
        workingOut: '\\\\( A_{\\\\text{base}} = 12 \\\\times 12 = 144\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the four side walls.',
        workingOut: '\\\\( A_{\\\\text{walls}} = 4 \\\\times (12 \\\\times 8) = 384\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Add the base area and wall area to get the total outside surface area.',
        workingOut: '\\\\( \\\\text{SA} = 144 + 384 = 528\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q3',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'A shoe box, open at the top, has the following dimensions:\\n- Length = \\(30\\\\text{ cm}\\)\\n- Width = \\(20\\\\text{ cm}\\)\\n- Height = \\(10.5\\\\text{ cm}\\)\\n\\nFind the total outside surface area of the box.',
    opts: [
      { text: '\\(1350\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(1650\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(1050\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(2250\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '1',
    hint: 'Since the box is open at the top, exclude the area of the top face: SA = lw + 2wh + 2lh.',
    solution: 'Calculate the outside surface area for an open box:\\n- Bottom face: \\(30 \\\\times 20 = 600\\\\text{ cm}^2\\)\\n- Two side faces (width): \\(2 \\\\times (20 \\\\times 10.5) = 420\\\\text{ cm}^2\\)\\n- Two front/back faces (length): \\(2 \\\\times (30 \\\\times 10.5) = 630\\\\text{ cm}^2\\)\\n\\nTotal surface area:\\n\\[\\\\text{SA} = 600 + 420 + 630 = 1650\\\\text{ cm}^2\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'State the formula for an open rectangular container.',
        workingOut: '\\\\( \\\\text{SA} = lw + 2wh + 2lh \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the given values into the open box formula.',
        workingOut: '\\\\( \\\\text{SA} = 30 \\\\times 20 + 2(20 \\\\times 10.5) + 2(30 \\\\times 10.5) \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the final total outside surface area.',
        workingOut: '\\\\( \\\\text{SA} = 600 + 420 + 630 = 1650\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q4a',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Dianne is painting her room. The dimensions of the room are:\\n- Height = \\(3.0\\\\text{ m}\\)\\n- Length = \\(4.0\\\\text{ m}\\)\\n- Width = \\(3.5\\\\text{ m}\\)\\n\\nWhat area must Dianne paint if she paints only the walls?',
    opts: [
      { text: '\\(59\\\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(35\\\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(90\\\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(45\\\\text{ m}^2\\)', imageUrl: '' }
    ],
    answer: '3',
    hint: 'The walls represent the lateral surface area of the room: 2(lh + wh).',
    solution: 'The area of the four walls is given by the formula:\\n\\[\\\\text{Area} = 2(lh + wh)\\]\\nSubstitute the given height, length, and width:\\n\\[\\\\text{Area} = 2(4.0 \\\\times 3.0 + 3.5 \\\\times 3.0)\\]\\n\\[\\\\text{Area} = 2(12.0 + 10.5) = 2 \\\\times 22.5 = 45\\\\text{ m}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q4a-board',
        boundingbox: [-3,7,10,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [6,0], visible: false },
          { type: 'point', id: 'C', coords: [6,4], visible: false },
          { type: 'point', id: 'D', coords: [0,4], visible: false },
          { type: 'point', id: 'E', coords: [2,1.5], visible: false },
          { type: 'point', id: 'F', coords: [8,1.5], visible: false },
          { type: 'point', id: 'G', coords: [8,5.5], visible: false },
          { type: 'point', id: 'H', coords: [2,5.5], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue', dash: 2 },
          { type: 'text', coords: [3,-0.6], content: '3.6 m' },
          { type: 'text', coords: [7.2,0.4], content: '3 m' },
          { type: 'text', coords: [-1.4,2], content: '3.2 m' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the surfaces that make up the walls (excluding ceiling and floor).',
        workingOut: '\\\\( \\\\text{Wall Area} = 2lh + 2wh \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the dimensions: height = 3.0 m, length = 4.0 m, width = 3.5 m.',
        workingOut: '\\\\( \\\\text{Wall Area} = 2(4.0 \\\\times 3.0) + 2(3.5 \\\\times 3.0) \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the total area of the walls.',
        workingOut: '\\\\( \\\\text{Wall Area} = 24.0 + 21.0 = 45\\\\text{ m}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q4b',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Dianne is painting her room. The dimensions of the room are:\\n- Height = \\(3.0\\\\text{ m}\\)\\n- Length = \\(4.0\\\\text{ m}\\)\\n- Width = \\(3.5\\\\text{ m}\\)\\n\\nWhat area must Dianne paint if she paints the walls and the ceiling?',
    opts: [
      { text: '\\(65\\\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(59\\\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(73\\\\text{ m}^2\\)', imageUrl: '' },
      { text: '\\(45\\\\text{ m}^2\\)', imageUrl: '' }
    ],
    answer: '1',
    hint: 'Add the ceiling area (lw) to the area of the walls (45 m²).',
    solution: 'The total painted area is the wall area plus the ceiling area:\\n- Walls: \\(45\\\\text{ m}^2\\)\\n- Ceiling: \\(lw = 4.0 \\\\times 3.5 = 14\\\\text{ m}^2\\)\\n\\nTotal area:\\n\\[\\\\text{Total Area} = 45 + 14 = 59\\\\text{ m}^2\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Calculate the area of the ceiling.',
        workingOut: '\\\\( A_{\\\\text{ceiling}} = 4.0 \\\\times 3.5 = 14\\\\text{ m}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Add the ceiling area to the previously calculated wall area (45 m²).',
        workingOut: '\\\\( A_{\\\\text{total}} = 45 + 14 = 59\\\\text{ m}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q5a',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of a right-angled triangular prism with the following dimensions:\\n- Base legs = \\(6\\\\text{ cm}\\) and \\(8\\\\text{ cm}\\) (hypotenuse = \\(10\\\\text{ cm}\\)\\n- Length of the prism = \\(20\\\\text{ cm}\\)',
    opts: [
      { text: '\\(456\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(528\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(480\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(576\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '1',
    hint: 'The surface area is the sum of the two triangular base areas and three rectangular side faces.',
    solution: 'The surface area consists of:\\n- Two right-angled triangles: \\(2 \\\\times \\\\left(\\\\frac{1}{2} \\\\times 6 \\\\times 8\\\\right) = 48\\\\text{ cm}^2\\)\\n- Three rectangular faces:\\n  1. Bottom face: \\(6 \\\\times 20 = 120\\\\text{ cm}^2\\)\\n  2. Back face: \\(8 \\\\times 20 = 160\\\\text{ cm}^2\\)\\n  3. Slanted face: \\(10 \\\\times 20 = 200\\\\text{ cm}^2\\)\\n\\nTotal surface area:\\n\\[\\\\text{SA} = 48 + 120 + 160 + 200 = 528\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q5a-board',
        boundingbox: [-3,9,11,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [4,0], visible: false },
          { type: 'point', id: 'C', coords: [0,5], visible: false },
          { type: 'point', id: 'D', coords: [5,2], visible: false },
          { type: 'point', id: 'E', coords: [9,2], visible: false },
          { type: 'point', id: 'F', coords: [5,7], visible: false },
          { type: 'polygon', points: ["A","B","C"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'E', color: 'blue' },
          { type: 'segment', from: 'C', to: 'F', color: 'blue' },
          { type: 'segment', from: 'E', to: 'F', color: 'blue' },
          { type: 'segment', from: 'D', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'D', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'D', color: 'blue', dash: 2 },
          { type: 'rightangle', points: ["B","A","C"], size: 0.5 },
          { type: 'text', coords: [2,-0.5], content: '5 cm' },
          { type: 'text', coords: [-1.4,2.5], content: '12 cm' },
          { type: 'text', coords: [5.2,0.4], content: '23 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the area of the two right-angled triangular bases.',
        workingOut: '\\\\( A_{\\\\text{triangles}} = 2 \\\\times \\\\left(\\\\frac{1}{2} \\\\times 6 \\\\times 8\\\\right) = 48\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the perimeter of the triangular base.',
        workingOut: '\\\\( P = 6 + 8 + 10 = 24\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Find the total surface area by adding the three rectangular walls (Perimeter * length) to the two bases.',
        workingOut: '\\\\( \\\\text{SA} = 48 + 24 \\\\times 20 = 48 + 480 = 528\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q5b',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of a trapezoidal prism. The front face is a trapezium with:\\n- Height = \\(8\\\\text{ cm}\\)\\n- Top parallel side = \\(9\\\\text{ cm}\\)\\n- Bottom parallel side = \\(15\\\\text{ cm}\\)\\n- Slanted side = \\(10\\\\text{ cm}\\)\\n- Length of the prism = \\(5\\\\text{ cm}\\)',
    opts: [
      { text: '\\(340\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(424\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(402\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(380\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '2',
    hint: 'Sum the areas of the two trapezoidal bases and the four rectangular sides.',
    solution: 'Calculate the areas:\\n- Two trapezoidal bases: \\(2 \\\\times \\\\frac{9 + 15}{2} \\\\times 8 = 192\\\\text{ cm}^2\\)\\n- Four rectangular sides (Perimeter \\\\times length):\\n  \\(P = 9 + 8 + 15 + 10 = 42\\\\text{ cm}\\)\\n  \\(\\\\text{Side Area} = 42 \\\\times 5 = 210\\\\text{ cm}^2\\)\\n\\nTotal surface area:\\n\\[\\\\text{SA} = 192 + 210 = 402\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q5b-board',
        boundingbox: [-3,9,13,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [6,0], visible: false },
          { type: 'point', id: 'C', coords: [4,4], visible: false },
          { type: 'point', id: 'D', coords: [0,4], visible: false },
          { type: 'point', id: 'E', coords: [3,2.5], visible: false },
          { type: 'point', id: 'F', coords: [9,2.5], visible: false },
          { type: 'point', id: 'G', coords: [7,6.5], visible: false },
          { type: 'point', id: 'H', coords: [3,6.5], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue', dash: 2 },
          { type: 'text', coords: [3,-0.5], content: '16 cm' },
          { type: 'text', coords: [5.2,2.2], content: '13 cm' },
          { type: 'text', coords: [-1.4,2], content: '12 cm' },
          { type: 'text', coords: [5.5,0.8], content: '4 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the area of the two trapezoidal base faces.',
        workingOut: '\\\\( A_{\\\\text{trapeziums}} = 2 \\\\times \\\\frac{9 + 15}{2} \\\\times 8 = 192\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Determine the perimeter of the trapezoidal base.',
        workingOut: '\\\\( P = 9 + 8 + 15 + 10 = 42\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the total surface area by adding the bases to the rectangular wrap.',
        workingOut: '\\\\( \\\\text{SA} = 192 + 42 \\\\times 5 = 402\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q5c',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of a symmetrical trapezoidal prism with the following dimensions:\\n- Parallel bases = \\(6\\\\text{ cm}\\) and \\(14\\\\text{ cm}\\)\\n- Height of trapezium = \\(3\\\\text{ cm}\\)\\n- Slanted sides = \\(5\\\\text{ cm}\\) each\\n- Length of the prism = \\(8\\\\text{ cm}\\)',
    opts: [
      { text: '\\(320\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(300\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(280\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(240\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '1',
    hint: 'The prism has 6 faces: 2 trapeziums, 1 top rectangle, 1 bottom rectangle, and 2 slanted side rectangles.',
    solution: 'Calculate the areas:\\n- Two trapezoidal bases: \\(2 \\\\times \\\\frac{6 + 14}{2} \\\\times 3 = 60\\\\text{ cm}^2\\)\\n- Four rectangular sides (Perimeter \\\\times length):\\n  \\(P = 6 + 14 + 5 + 5 = 30\\\\text{ cm}\\)\\n  \\(\\\\text{Side Area} = 30 \\\\times 8 = 240\\\\text{ cm}^2\\)\\n\\nTotal surface area:\\n\\[\\\\text{SA} = 60 + 240 = 300\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q5c-board',
        boundingbox: [-3,9,13,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [8,0], visible: false },
          { type: 'point', id: 'C', coords: [6,3], visible: false },
          { type: 'point', id: 'D', coords: [2,3], visible: false },
          { type: 'point', id: 'E', coords: [3,2], visible: false },
          { type: 'point', id: 'F', coords: [11,2], visible: false },
          { type: 'point', id: 'G', coords: [9,5], visible: false },
          { type: 'point', id: 'H', coords: [5,5], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue' },
          { type: 'segment', from: 'G', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue', dash: 2 },
          { type: 'text', coords: [4,-0.5], content: '13 cm' },
          { type: 'text', coords: [7.2,1.8], content: '5 cm' },
          { type: 'text', coords: [4,3.2], content: '5 cm' },
          { type: 'text', coords: [6.8,0.8], content: '5 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the area of the two trapezoidal base faces.',
        workingOut: '\\\\( A_{\\\\text{trapeziums}} = 2 \\\\times \\\\frac{6 + 14}{2} \\\\times 3 = 60\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Determine the perimeter of the trapezoidal base.',
        workingOut: '\\\\( P = 6 + 14 + 5 + 5 = 30\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the total surface area by combining the bases and the side rectangles.',
        workingOut: '\\\\( \\\\text{SA} = 60 + 30 \\\\times 8 = 300\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q5d',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of an isosceles triangular prism with the following dimensions:\\n- Base triangle width = \\(8\\\\text{ cm}\\), height = \\(3\\\\text{ cm}\\), slanted sides = \\(5\\\\text{ cm}\\) each\\n- Length of the prism = \\(12\\\\text{ cm}\\)',
    opts: [
      { text: '\\(240\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(192\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(216\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(264\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Sum the areas of the 2 triangular bases and 3 rectangular sides.',
    solution: 'Calculate the areas:\\n- Two triangular bases: \\(2 \\\\times \\\\left(\\\\frac{1}{2} \\\\times 8 \\\\times 3\\\\right) = 24\\\\text{ cm}^2\\)\\n- Three rectangular sides (Perimeter \\\\times length):\\n  \\(P = 8 + 5 + 5 = 18\\\\text{ cm}\\)\\n  \\(\\\\text{Side Area} = 18 \\\\times 12 = 216\\\\text{ cm}^2\\)\\n\\nTotal surface area:\\n\\[\\\\text{SA} = 24 + 216 = 240\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q5d-board',
        boundingbox: [-3,9,13,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [6,0], visible: false },
          { type: 'point', id: 'C', coords: [3,4], visible: false },
          { type: 'point', id: 'D', coords: [4,2.5], visible: false },
          { type: 'point', id: 'E', coords: [10,2.5], visible: false },
          { type: 'point', id: 'F', coords: [7,6.5], visible: false },
          { type: 'polygon', points: ["A","B","C"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'E', color: 'blue' },
          { type: 'segment', from: 'C', to: 'F', color: 'blue' },
          { type: 'segment', from: 'E', to: 'F', color: 'blue' },
          { type: 'segment', from: 'D', to: 'E', color: 'blue', dash: 2 },
          { type: 'segment', from: 'D', to: 'F', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'D', color: 'blue', dash: 2 },
          { type: 'text', coords: [3,-0.5], content: '6 cm' },
          { type: 'text', coords: [4.8,2.2], content: '5 cm' },
          { type: 'text', coords: [5.2,0.8], content: '15 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the area of the two triangular bases.',
        workingOut: '\\\\( A_{\\\\text{triangles}} = 2 \\\\times \\\\left(\\\\frac{1}{2} \\\\times 8 \\\\times 3\\\\right) = 24\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the perimeter of the triangular base.',
        workingOut: '\\\\( P = 8 + 5 + 5 = 18\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Find the total surface area by combining bases and the rectangular sides.',
        workingOut: '\\\\( \\\\text{SA} = 24 + 18 \\\\times 12 = 240\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q5e',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of the house-shaped pentagonal prism. The front face is a pentagon formed by a rectangle of width \\(5\\\\text{ cm}\\) and height \\(6\\\\text{ cm}\\), topped by a right-angled triangle with side lengths \\(3\\\\text{ cm}\\) and \\(4\\\\text{ cm}\\) (hypotenuse = \\(5\\\\text{ cm}\\)). The length of the prism is \\(10\\\\text{ cm}\\).',
    opts: [
      { text: '\\(272\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(360\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(290\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(312\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '3',
    hint: 'Sum the areas of the 2 pentagonal bases and the 5 rectangular sides.',
    solution: 'Calculate the areas:\\n- Base pentagon area = triangle area (\\(\\frac{1}{2} \\\\times 3 \\\\times 4 = 6\\)) + rectangle area (\\(5 \\\\times 6 = 30\\)) = \\(36\\\\text{ cm}^2\\).\\n- For 2 bases: \\(2 \\\\times 36 = 72\\\\text{ cm}^2\\).\\n- Perimeter of the pentagon base: \\(P = 5 + 6 + 6 + 3 + 4 = 24\\\\text{ cm}\\).\\n- Five rectangular side faces: \\(24 \\\\times 10 = 240\\\\text{ cm}^2\\).\\n\\nTotal surface area:\\n\\[\\\\text{SA} = 72 + 240 = 312\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q5e-board',
        boundingbox: [-3,10,11,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [5,0], visible: false },
          { type: 'point', id: 'C', coords: [5,4], visible: false },
          { type: 'point', id: 'D', coords: [2.5,6], visible: false },
          { type: 'point', id: 'E', coords: [0,4], visible: false },
          { type: 'point', id: 'A2', coords: [3,2], visible: false },
          { type: 'point', id: 'B2', coords: [8,2], visible: false },
          { type: 'point', id: 'C2', coords: [8,6], visible: false },
          { type: 'point', id: 'D2', coords: [5.5,8], visible: false },
          { type: 'point', id: 'E2', coords: [3,6], visible: false },
          { type: 'polygon', points: ["A","B","C","D","E"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'B2', color: 'blue' },
          { type: 'segment', from: 'C', to: 'C2', color: 'blue' },
          { type: 'segment', from: 'D', to: 'D2', color: 'blue' },
          { type: 'segment', from: 'E', to: 'E2', color: 'blue' },
          { type: 'segment', from: 'B2', to: 'C2', color: 'blue' },
          { type: 'segment', from: 'C2', to: 'D2', color: 'blue' },
          { type: 'segment', from: 'D2', to: 'E2', color: 'blue' },
          { type: 'segment', from: 'E2', to: 'A2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A2', to: 'B2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'A2', color: 'blue', dash: 2 },
          { type: 'text', coords: [1.2,5.2], content: '6 cm' },
          { type: 'text', coords: [3.8,5.2], content: '8 cm' },
          { type: 'text', coords: [5.2,2], content: '5 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the area of the front house-shaped pentagon base.',
        workingOut: '\\\\( A_{\\\\text{base}} = A_{\\\\text{triangle}} + A_{\\\\text{rectangle}} = \\\\frac{1}{2} \\\\times 3 \\\\times 4 + 5 \\\\times 6 = 36\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Find the perimeter of the pentagonal face.',
        workingOut: '\\\\( P = 5 + 6 + 6 + 3 + 4 = 24\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply the perimeter by the prism length (10 cm) to find the lateral area, then add two base areas.',
        workingOut: '\\\\( \\\\text{SA} = 2 \\\\times 36 + 24 \\\\times 10 = 72 + 240 = 312\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q5f',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the total surface area of an L-shaped prism. The front L-shape has dimensions:\\n- Bottom width = \\(10\\\\text{ cm}\\)\\n- Left height = \\(8\\\\text{ cm}\\)\\n- Top horizontal = \\(6\\\\text{ cm}\\)\\n- Inner vertical height = \\(4\\\\text{ cm}\\)\\n- Right vertical height = \\(4\\\\text{ cm}\\)\\n- Length of the prism = \\(5\\\\text{ cm}\\)',
    opts: [
      { text: '\\(308\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(344\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(256\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(280\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: '0',
    hint: 'Calculate the L-shaped base area, find the perimeter of the base, and use SA = 2 * Base + Perimeter * length.',
    solution: 'Calculate the areas:\\n- Base L-shape area: split into left rectangle (\\(6 \\\\times 8 = 48\\)) and right rectangle (\\((10 - 6) \\\\times 4 = 16\\)) \\\\(\\n  \\\\text{Base Area} = 48 + 16 = 64\\\\text{ cm}^2\\\\).\\n- Two bases: \\(2 \\\\times 64 = 128\\\\text{ cm}^2\\).\\n- Perimeter of L-shape: \\(P = 10 + 8 + 6 + 4 + 4 + 4 = 36\\\\text{ cm}\\).\\n- Side faces (Perimeter \\\\times length): \\(36 \\\\times 5 = 180\\\\text{ cm}^2\\).\\n\\nTotal surface area:\\n\\[\\\\text{SA} = 128 + 180 = 308\\\\text{ cm}^2\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q5f-board',
        boundingbox: [-3,10,11,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,0], visible: false },
          { type: 'point', id: 'B', coords: [6,0], visible: false },
          { type: 'point', id: 'C', coords: [6,3], visible: false },
          { type: 'point', id: 'D', coords: [3,3], visible: false },
          { type: 'point', id: 'E', coords: [3,6], visible: false },
          { type: 'point', id: 'F', coords: [0,6], visible: false },
          { type: 'point', id: 'A2', coords: [3,2], visible: false },
          { type: 'point', id: 'B2', coords: [9,2], visible: false },
          { type: 'point', id: 'C2', coords: [9,5], visible: false },
          { type: 'point', id: 'D2', coords: [6,5], visible: false },
          { type: 'point', id: 'E2', coords: [6,8], visible: false },
          { type: 'point', id: 'F2', coords: [3,8], visible: false },
          { type: 'polygon', points: ["A","B","C","D","E","F"], color: 'blue', fillOpacity: 0.1 },
          { type: 'segment', from: 'B', to: 'B2', color: 'blue' },
          { type: 'segment', from: 'C', to: 'C2', color: 'blue' },
          { type: 'segment', from: 'E', to: 'E2', color: 'blue' },
          { type: 'segment', from: 'F', to: 'F2', color: 'blue' },
          { type: 'segment', from: 'B2', to: 'C2', color: 'blue' },
          { type: 'segment', from: 'C2', to: 'D2', color: 'blue' },
          { type: 'segment', from: 'D2', to: 'E2', color: 'blue' },
          { type: 'segment', from: 'E2', to: 'F2', color: 'blue' },
          { type: 'segment', from: 'F2', to: 'A2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A2', to: 'B2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A', to: 'A2', color: 'blue', dash: 2 },
          { type: 'text', coords: [-1.2,3], content: '10 cm' },
          { type: 'text', coords: [3,-0.5], content: '12 cm' },
          { type: 'text', coords: [0.8,6.2], content: '8 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the L-shaped front base area by splitting it into two rectangles.',
        workingOut: '\\\\( A_{\\\\text{base}} = A_{\\\\text{rect1}} + A_{\\\\text{rect2}} = 6 \\\\times 8 + 4 \\\\times 4 = 64\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Find the perimeter of the L-shaped face.',
        workingOut: '\\\\( P = 10 + 8 + 6 + 4 + 4 + 4 = 36\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Find the total surface area by combining the two bases and the rectangular wrapper.',
        workingOut: '\\\\( \\\\text{SA} = 2 \\\\times 64 + 36 \\\\times 5 = 308\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q6a',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'A swimming pool has the following dimensions:\\n- Width = \\(12\\\\text{ m}\\)\\n- Length = \\(25\\\\text{ m}\\)\\n- Shallow end depth = \\(1\\\\text{ m}\\)\\n- Deep end depth = \\(2.5\\\\text{ m}\\)\\n\\nFind the length of the sloping bottom pool floor, \\(EH\\), correct to the nearest millimetre.',
    opts: [
      { text: '\\(25.075\\\\text{ m}\\)', imageUrl: '' },
      { text: '\\(25.000\\\\text{ m}\\)', imageUrl: '' },
      { text: '\\(25.125\\\\text{ m}\\)', imageUrl: '' },
      { text: '\\(25.045\\\\text{ m}\\)', imageUrl: '' }
    ],
    answer: '3',
    hint: 'Use Pythagoras\' theorem on the side profile: the horizontal distance is 25 m, and the vertical drop is 2.5 m - 1 m = 1.5 m.',
    solution: 'The side profile has a length of 25 m and a depth drop of:\\n\\[\\\\text{Depth difference} = 2.5 - 1.0 = 1.5\\\\text{ m}\\]\\nApply Pythagoras\' theorem to find the slanted bottom length \\(EH\\):\\n\\[EH = \\\\sqrt{25^2 + 1.5^2} = \\\\sqrt{625 + 2.25} = \\\\sqrt{627.25} \\\\approx 25.04496\\\\text{ m}\\]\\nRounding to the nearest millimetre (3 decimal places):\\n\\[EH = 25.045\\\\text{ m}\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16b-q6-board',
        boundingbox: [-3,8,14,-3],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'A', coords: [0,4], visible: false },
          { type: 'point', id: 'B', coords: [4,5], visible: false },
          { type: 'point', id: 'C', coords: [12,4.5], visible: false },
          { type: 'point', id: 'D', coords: [8,3.5], visible: false },
          { type: 'point', id: 'E', coords: [0,3], visible: false },
          { type: 'point', id: 'F', coords: [4,4], visible: false },
          { type: 'point', id: 'G', coords: [12,2], visible: false },
          { type: 'point', id: 'H', coords: [8,1], visible: false },
          { type: 'polygon', points: ["A","B","C","D"], color: 'blue', fillOpacity: 0.05 },
          { type: 'segment', from: 'A', to: 'E', color: 'blue' },
          { type: 'segment', from: 'B', to: 'F', color: 'blue' },
          { type: 'segment', from: 'C', to: 'G', color: 'blue' },
          { type: 'segment', from: 'D', to: 'H', color: 'blue' },
          { type: 'segment', from: 'E', to: 'H', color: 'blue' },
          { type: 'segment', from: 'H', to: 'G', color: 'blue' },
          { type: 'segment', from: 'F', to: 'G', color: 'blue', dash: 2 },
          { type: 'segment', from: 'E', to: 'F', color: 'blue', dash: 2 },
          { type: 'text', coords: [-1.5,3.5], content: 'A' },
          { type: 'text', coords: [4.2,5.2], content: 'B' },
          { type: 'text', coords: [12.2,4.7], content: 'C' },
          { type: 'text', coords: [8.2,3.7], content: 'D' },
          { type: 'text', coords: [-1.5,2.5], content: 'E' },
          { type: 'text', coords: [4.2,3.5], content: 'F' },
          { type: 'text', coords: [12.2,1.5], content: 'G' },
          { type: 'text', coords: [8.2,0.5], content: 'H' },
          { type: 'text', coords: [7.5,5], content: '25 m' },
          { type: 'text', coords: [1.5,4.7], content: '12 m' },
          { type: 'text', coords: [-1.5,3], content: '1 m' },
          { type: 'text', coords: [8.3,2], content: '2.5 m' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the horizontal length and the vertical depth drop for the sloping bottom floor.',
        workingOut: '\\\\( \\\\Delta h = 2.5 - 1.0 = 1.5\\\\text{ m} \\\\)',
        graphData: null
      },
      {
        explanation: 'Apply Pythagoras\' theorem to calculate the hypotenuse length \\(EH\\).',
        workingOut: '\\\\( EH = \\\\sqrt{25^2 + 1.5^2} = \\\\sqrt{627.25} \\\\approx 25.04496\\\\text{ m} \\\\)',
        graphData: null
      },
      {
        explanation: 'Round the calculated value to the nearest millimetre (three decimal places).',
        workingOut: '\\\\( EH \\\\approx 25.045\\\\text{ m} \\\\)',
        graphData: null
      }
    ]
  },
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16b',
    topicCode: '16B',
    topicTitle: 'Review of surface area of prism',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16b-q6b',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'A swimming pool has the following dimensions:\\n- Width = \\(12\\\\text{ m}\\)\\n- Length = \\(25\\\\text{ m}\\)\\n- Shallow end depth = \\(1\\\\text{ m}\\)\\n- Deep end depth = \\(2.5\\\\text{ m}\\)\\n- Bottom sloping length \\(EH \\\\approx 25.045\\\\text{ m}\\)\\n\\nFind the approximate number of tiles, each of size \\(15\\\\text{ cm} \\\\times 15\\\\text{ cm}\\), required to tile the sides and bottom of the pool. (The tiler may cut the tiles and piece them together.)',
    opts: [
      { text: '\\(20450\\)', imageUrl: '' },
      { text: '\\(19840\\)', imageUrl: '' },
      { text: '\\(18600\\)', imageUrl: '' },
      { text: '\\(19113\\)', imageUrl: '' }
    ],
    answer: '3',
    hint: 'Calculate the total surface area of the bottom, the two trapezoidal sides, the shallow end wall, and the deep end wall. Divide by the area of a single tile (0.0225 m²).',
    solution: 'Calculate the surface area of the five inside faces of the pool:\\n1. Sloping bottom: \\(12 \\\\times 25.04496 \\\\approx 300.5395\\\\text{ m}^2\\)\\n2. Two trapezoidal side walls: \\(2 \\\\times \\\\frac{1.0 + 2.5}{2} \\\\times 25 = 87.5\\\\text{ m}^2\\)\\n3. Shallow end wall: \\(12 \\\\times 1.0 = 12.0\\\\text{ m}^2\\)\\n4. Deep end wall: \\(12 \\\\times 2.5 = 30.0\\\\text{ m}^2\\)\\n\\nTotal surface area to tile:\\n\\[\\\\text{Total Area} = 300.5395 + 87.5 + 12.0 + 30.0 = 430.0395\\\\text{ m}^2\\]\\nArea of a single tile:\\n\\[0.15 \\\\times 0.15 = 0.0225\\\\text{ m}^2\\]\\nNumber of tiles:\\n\\[\\\\text{Tiles} = \\\\frac{430.0395}{0.0225} \\\\approx 19112.87 \\\\implies 19113\\\\text{ tiles}\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Calculate the area of the sloping bottom floor.',
        workingOut: '\\\\( A_{\\\\text{bottom}} = 12 \\\\times 25.04496 \\\\approx 300.5395\\\\text{ m}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the two trapezoidal side walls.',
        workingOut: '\\\\( A_{\\\\text{sides}} = 2 \\\\times \\\\frac{1.0 + 2.5}{2} \\\\times 25 = 87.5\\\\text{ m}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the area of the vertical ends (shallow and deep end walls).',
        workingOut: '\\\\( A_{\\\\text{ends}} = 12 \\\\times 1.0 + 12 \\\\times 2.5 = 12.0 + 30.0 = 42.0\\\\text{ m}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Find the total inside surface area and divide it by the area of one tile (0.0225 m²).',
        workingOut: '\\\\( \\\\text{Tiles} = \\\\frac{300.5395 + 87.5 + 42.0}{0.15 \\\\times 0.15} \\\\approx 19112.87 \\\\approx 19113 \\\\)',
        graphData: null
      }
    ]
  }
];
