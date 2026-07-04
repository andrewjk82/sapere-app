export const Y9_CH16D_QUESTIONS = [
  // 1a. Rectangular prism: area of shaded face A = 28 cm^2, height = 6 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q1a',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the volume of the rectangular prism.\\nThe area, \\(A\\), of the shaded face is given as:\\n- \\(A = 28\\\\text{ cm}^2\\)\\n\\nThe height perpendicular to this face is:\\n- \\(h = 6\\\\text{ cm}\\)',
    opts: [
      { text: '\\(168\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(186\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(154\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(142\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use the volume formula for a prism: Volume = area of base/face * height.',
    solution: 'Given the area of the shaded face:\\n\\[A = 28\\\\text{ cm}^2\\]\\nAnd the height perpendicular to this face:\\n\\[h = 6\\\\text{ cm}\\]\\n\\nCalculate the volume:\\n\\[V = A \\\\times h = 28 \\\\times 6 = 168\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q1a-board',
        boundingbox: [-2, 8, 8, -2],
        keepaspectratio: true,
        elements: [
          // Isometric projection points for a rectangular prism
          // Front face bottom-left
          { type: 'point', id: 'P1', coords: [0, 0], visible: false },
          { type: 'point', id: 'P2', coords: [4, 0], visible: false },
          { type: 'point', id: 'P3', coords: [4, 3], visible: false },
          { type: 'point', id: 'P4', coords: [0, 3], visible: false },
          // Back face points (shifted up and right)
          { type: 'point', id: 'P5', coords: [2, 1.5], visible: false },
          { type: 'point', id: 'P6', coords: [6, 1.5], visible: false },
          { type: 'point', id: 'P7', coords: [6, 4.5], visible: false },
          { type: 'point', id: 'P8', coords: [2, 4.5], visible: false },

          // Shaded bottom face polygon
          { type: 'polygon', points: ['P1', 'P2', 'P6', 'P5'], fillColor: 'blue', fillOpacity: 0.15, color: 'blue' },

          // Edges
          { type: 'segment', from: 'P1', to: 'P2', color: 'blue' },
          { type: 'segment', from: 'P2', to: 'P3', color: 'blue' },
          { type: 'segment', from: 'P3', to: 'P4', color: 'blue' },
          { type: 'segment', from: 'P4', to: 'P1', color: 'blue' },

          { type: 'segment', from: 'P2', to: 'P6', color: 'blue' },
          { type: 'segment', from: 'P3', to: 'P7', color: 'blue' },
          { type: 'segment', from: 'P4', to: 'P8', color: 'blue' },

          { type: 'segment', from: 'P6', to: 'P7', color: 'blue' },
          { type: 'segment', from: 'P7', to: 'P8', color: 'blue' },

          // Hidden edges (dashed)
          { type: 'segment', from: 'P1', to: 'P5', color: 'blue', dash: 2 },
          { type: 'segment', from: 'P5', to: 'P6', color: 'blue', dash: 2 },
          { type: 'segment', from: 'P5', to: 'P8', color: 'blue', dash: 2 },

          // Height indicator arrow
          { type: 'segment', from: 'P2', to: 'P3', color: 'red', firstArrow: true, lastArrow: true },

          // Labels
          { type: 'text', coords: [2.2, 0.4], content: 'A = 28 cm²' },
          { type: 'text', coords: [4.8, 1.5], content: '6 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the volume formula for a prism.',
        workingOut: '\\\\( V = A \\\\times h \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the area of the shaded face \\(A = 28\\\\text{ cm}^2\\) and the perpendicular height \\(h = 6\\\\text{ cm}\\).',
        workingOut: '\\\\( V = 28 \\\\times 6 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the final volume.',
        workingOut: '\\\\( V = 168\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 1b. Rectangular prism: area of shaded face A = 35 cm^2, height = 9 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q1b',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the volume of the rectangular prism.\\nThe area, \\(A\\), of the shaded face is given as:\\n- \\(A = 35\\\\text{ cm}^2\\)\\n\\nThe depth perpendicular to this face is:\\n- \\(d = 9\\\\text{ cm}\\)',
    opts: [
      { text: '\\(315\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(350\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(280\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(245\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use the volume formula for a prism: Volume = area of base/face * height.',
    solution: 'Given the area of the shaded face:\\n\\[A = 35\\\\text{ cm}^2\\]\\nAnd the depth perpendicular to this face:\\n\\[d = 9\\\\text{ cm}\\]\\n\\nCalculate the volume:\\n\\[V = A \\\\times d = 35 \\\\times 9 = 315\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q1b-board',
        boundingbox: [-2, 8, 10, -2],
        keepaspectratio: true,
        elements: [
          // Front face points
          { type: 'point', id: 'P1', coords: [0, 0], visible: false },
          { type: 'point', id: 'P2', coords: [4, 0], visible: false },
          { type: 'point', id: 'P3', coords: [4, 3], visible: false },
          { type: 'point', id: 'P4', coords: [0, 3], visible: false },
          // Back face points (shifted up and right)
          { type: 'point', id: 'P5', coords: [3, 2.5], visible: false },
          { type: 'point', id: 'P6', coords: [7, 2.5], visible: false },
          { type: 'point', id: 'P7', coords: [7, 5.5], visible: false },
          { type: 'point', id: 'P8', coords: [3, 5.5], visible: false },

          // Shaded front face polygon
          { type: 'polygon', points: ['P1', 'P2', 'P3', 'P4'], fillColor: 'blue', fillOpacity: 0.15, color: 'blue' },

          // Edges
          { type: 'segment', from: 'P1', to: 'P2', color: 'blue' },
          { type: 'segment', from: 'P2', to: 'P3', color: 'blue' },
          { type: 'segment', from: 'P3', to: 'P4', color: 'blue' },
          { type: 'segment', from: 'P4', to: 'P1', color: 'blue' },

          { type: 'segment', from: 'P2', to: 'P6', color: 'blue' },
          { type: 'segment', from: 'P3', to: 'P7', color: 'blue' },
          { type: 'segment', from: 'P4', to: 'P8', color: 'blue' },

          { type: 'segment', from: 'P6', to: 'P7', color: 'blue' },
          { type: 'segment', from: 'P7', to: 'P8', color: 'blue' },

          // Hidden edges (dashed)
          { type: 'segment', from: 'P1', to: 'P5', color: 'blue', dash: 2 },
          { type: 'segment', from: 'P5', to: 'P6', color: 'blue', dash: 2 },
          { type: 'segment', from: 'P5', to: 'P8', color: 'blue', dash: 2 },

          // Depth indicator arrow
          { type: 'segment', from: 'P2', to: 'P6', color: 'red', firstArrow: true, lastArrow: true },

          // Labels
          { type: 'text', coords: [2.0, 1.5], content: 'A = 35 cm²' },
          { type: 'text', coords: [5.8, 1.0], content: '9 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the volume formula for a prism.',
        workingOut: '\\\\( V = A \\\\times d \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the area of the shaded face \\(A = 35\\\\text{ cm}^2\\) and the depth \\(d = 9\\\\text{ cm}\\).',
        workingOut: '\\\\( V = 35 \\\\times 9 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the final volume.',
        workingOut: '\\\\( V = 315\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 1c. Triangular prism: area of shaded face A = 22 cm^2, length = 12 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q1c',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the volume of the triangular prism.\\nThe area, \\(A\\), of the shaded triangular face is given as:\\n- \\(A = 22\\\\text{ cm}^2\\)\\n\\nThe length of the prism is:\\n- \\(l = 12\\\\text{ cm}\\)',
    opts: [
      { text: '\\(264\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(242\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(220\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(198\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use the volume formula for a prism: Volume = area of base * length.',
    solution: 'Given the area of the shaded triangular face:\\n\\[A = 22\\\\text{ cm}^2\\]\\nAnd the length of the prism:\\n\\[l = 12\\\\text{ cm}\\]\\n\\nCalculate the volume:\\n\\[V = A \\\\times l = 22 \\\\times 12 = 264\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q1c-board',
        boundingbox: [-2, 8, 10, -2],
        keepaspectratio: true,
        elements: [
          // Front triangular face points
          { type: 'point', id: 'T1', coords: [0, 0], visible: false },
          { type: 'point', id: 'T2', coords: [4, 0], visible: false },
          { type: 'point', id: 'T3', coords: [2, 3], visible: false },
          // Back triangular face points
          { type: 'point', id: 'T4', coords: [3, 2.5], visible: false },
          { type: 'point', id: 'T5', coords: [7, 2.5], visible: false },
          { type: 'point', id: 'T6', coords: [5, 5.5], visible: false },

          // Shaded front triangular face polygon
          { type: 'polygon', points: ['T1', 'T2', 'T3'], fillColor: 'blue', fillOpacity: 0.15, color: 'blue' },

          // Edges
          { type: 'segment', from: 'T1', to: 'T2', color: 'blue' },
          { type: 'segment', from: 'T2', to: 'T3', color: 'blue' },
          { type: 'segment', from: 'T3', to: 'T1', color: 'blue' },

          { type: 'segment', from: 'T2', to: 'T5', color: 'blue' },
          { type: 'segment', from: 'T3', to: 'T6', color: 'blue' },

          { type: 'segment', from: 'T5', to: 'T6', color: 'blue' },

          // Hidden edges (dashed)
          { type: 'segment', from: 'T1', to: 'T4', color: 'blue', dash: 2 },
          { type: 'segment', from: 'T4', to: 'T5', color: 'blue', dash: 2 },
          { type: 'segment', from: 'T4', to: 'T6', color: 'blue', dash: 2 },

          // Length indicator arrow
          { type: 'segment', from: 'T2', to: 'T5', color: 'red', firstArrow: true, lastArrow: true },

          // Labels
          { type: 'text', coords: [2.0, 1.0], content: 'A = 22 cm²' },
          { type: 'text', coords: [5.8, 1.0], content: '12 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the base area A and perpendicular length l.',
        workingOut: '\\\\( A = 22\\\\text{ cm}^2, \\\\quad l = 12\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute these values into the volume of a prism formula: Volume = Area x length.',
        workingOut: '\\\\( V = 22 \\\\times 12 \\\\)',
        graphData: null
      },
      {
        explanation: 'Compute the final volume.',
        workingOut: '\\\\( V = 264\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 1d. Curved prism: area of shaded face A = 14 cm^2, length = 20 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q1d',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the volume of the solid with the curved sides.\\nThe area, \\(A\\), of the shaded face is given as:\\n- \\(A = 14\\\\text{ cm}^2\\)\\n\\nThe length of the solid is:\\n- \\(l = 20\\\\text{ cm}\\)',
    opts: [
      { text: '\\(280\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(240\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(320\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(180\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Volume is the cross-sectional area multiplied by the length perpendicular to it.',
    solution: 'Calculate the volume using the cross-sectional area:\\n\\[V = A \\\\times l = 14 \\\\times 20 = 280\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q1d-board',
        boundingbox: [-2, 8, 11, -2],
        keepaspectratio: true,
        elements: [
          // Front curved face boundary points
          { type: 'point', id: 'A1', coords: [0, 0], visible: false },
          { type: 'point', id: 'A2', coords: [4, 0], visible: false },
          { type: 'point', id: 'A3', coords: [4, 3], visible: false },
          { type: 'point', id: 'A4', coords: [0, 3], visible: false },

          // Back curved face boundary points
          { type: 'point', id: 'B1', coords: [4, 2.5], visible: false },
          { type: 'point', id: 'B2', coords: [8, 2.5], visible: false },
          { type: 'point', id: 'B3', coords: [8, 5.5], visible: false },
          { type: 'point', id: 'B4', coords: [4, 5.5], visible: false },

          // Draw front curved face using Bezier curves to represent the hourglass curved look
          {
            type: 'curve',
            x: function(t) { return t; },
            y: function(t) { return 0; },
            tRange: [0, 4],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return 4 + 0.5 * Math.sin(t * Math.PI); },
            y: function(t) { return 3 * t; },
            tRange: [0, 1],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return t; },
            y: function(t) { return 3; },
            tRange: [0, 4],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return 0.5 * Math.sin(t * Math.PI); },
            y: function(t) { return 3 * t; },
            tRange: [0, 1],
            color: 'blue'
          },

          // Connect front and back
          { type: 'segment', from: 'A1', to: 'B1', color: 'blue', dash: 2 },
          { type: 'segment', from: 'A2', to: 'B2', color: 'blue' },
          { type: 'segment', from: 'A3', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'A4', to: 'B4', color: 'blue' },

          // Back face top curve
          {
            type: 'curve',
            x: function(t) { return 4 + t; },
            y: function(t) { return 5.5; },
            tRange: [0, 4],
            color: 'blue'
          },
          // Back face right curve
          {
            type: 'curve',
            x: function(t) { return 8 + 0.5 * Math.sin(t * Math.PI); },
            y: function(t) { return 2.5 + 3 * t; },
            tRange: [0, 1],
            color: 'blue'
          },

          // Arrow indicating length
          { type: 'segment', from: 'A2', to: 'B2', color: 'red', firstArrow: true, lastArrow: true },

          // Labels
          { type: 'text', coords: [2.0, 1.5], content: 'A = 14 cm²' },
          { type: 'text', coords: [6.8, 1.0], content: '20 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Multiply the constant cross-sectional area by the uniform length perpendicular to the face.',
        workingOut: '\\\\( V = A \\\\times l \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute \\(A = 14\\\\text{ cm}^2\\) and \\(l = 20\\\\text{ cm}\\).',
        workingOut: '\\\\( V = 14 \\\\times 20 \\\\)',
        graphData: null
      },
      {
        explanation: 'Find the total volume.',
        workingOut: '\\\\( V = 280\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 1e. Cylinder: area of shaded face A = 85 cm^2, height = 8 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q1e',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the volume of the cylinder.\\nThe area, \\(A\\), of the shaded circular face is given as:\\n- \\(A = 85\\\\text{ cm}^2\\)\\n\\nThe height perpendicular to this face is:\\n- \\(h = 8\\\\text{ cm}\\)',
    opts: [
      { text: '\\(680\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(640\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(720\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(560\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Volume of a cylinder is the base area times its height.',
    solution: 'Given base area \\(A = 85\\\\text{ cm}^2\\) and height \\(h = 8\\\\text{ cm}\\):\\n\\[V = A \\\\times h = 85 \\\\times 8 = 680\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q1e-board',
        boundingbox: [-5, 12, 5, -2],
        keepaspectratio: true,
        elements: [
          // Centers
          { type: 'point', id: 'O1', coords: [0, 0], visible: false },
          { type: 'point', id: 'O2', coords: [0, 8], visible: false },

          // Outer boundaries
          { type: 'point', id: 'A', coords: [-3, 0], visible: false },
          { type: 'point', id: 'B', coords: [3, 0], visible: false },
          { type: 'point', id: 'C', coords: [-3, 8], visible: false },
          { type: 'point', id: 'D', coords: [3, 8], visible: false },

          // Vertical edges
          { type: 'segment', from: 'A', to: 'C', color: 'blue' },
          { type: 'segment', from: 'B', to: 'D', color: 'blue' },

          // Bottom shaded ellipse
          {
            type: 'curve',
            x: function(t) { return 3 * Math.cos(t); },
            y: function(t) { return 0.8 * Math.sin(t); },
            tRange: [0, 2 * Math.PI],
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.15
          },

          // Top ellipse
          {
            type: 'curve',
            x: function(t) { return 3 * Math.cos(t); },
            y: function(t) { return 8 + 0.8 * Math.sin(t); },
            tRange: [0, 2 * Math.PI],
            color: 'blue'
          },

          // Arrow indicating height
          { type: 'segment', from: 'B', to: 'D', color: 'red', firstArrow: true, lastArrow: true },

          // Labels
          { type: 'text', coords: [0, 0], content: 'A = 85 cm²' },
          { type: 'text', coords: [3.8, 4], content: '8 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the base area A and height h.',
        workingOut: '\\\\( A = 85\\\\text{ cm}^2, \\\\quad h = 8\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Apply the formula: Volume = Area of base x height.',
        workingOut: '\\\\( V = 85 \\\\times 8 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the final volume.',
        workingOut: '\\\\( V = 680\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 1f. Half cylinder: area of shaded face A = 30 cm^2, length = 16 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q1f',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Calculate the volume of the half-cylinder.\\nThe area, \\(A\\), of the shaded semi-circular face is given as:\\n- \\(A = 30\\\\text{ cm}^2\\)\\n\\nThe length of the half-cylinder is:\\n- \\(l = 16\\\\text{ cm}\\)',
    opts: [
      { text: '\\(480\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(450\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(520\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(380\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Volume is the cross-sectional semi-circle area times the perpendicular length.',
    solution: 'Volume of the half-cylinder is base area times length:\\n\\[V = A \\\\times l = 30 \\\\times 16 = 480\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q1f-board',
        boundingbox: [-6, 6, 12, -6],
        keepaspectratio: true,
        elements: [
          // Front semi-cylinder points (y decreases, so it curves down)
          {
            type: 'curve',
            x: function(t) { return 4 * Math.cos(t); },
            y: function(t) { return 1.5 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.15
          },
          // Back semi-cylinder curves (dashed)
          {
            type: 'curve',
            x: function(t) { return 4 + 4 * Math.cos(t); },
            y: function(t) { return 2.5 + 1.5 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue',
            dash: 2
          },

          { type: 'point', id: 'FL', coords: [-4, 0], visible: false },
          { type: 'point', id: 'FR', coords: [4, 0], visible: false },
          { type: 'point', id: 'BL', coords: [0, 2.5], visible: false },
          { type: 'point', id: 'BR', coords: [8, 2.5], visible: false },

          { type: 'segment', from: 'FL', to: 'FR', color: 'blue' },
          { type: 'segment', from: 'BL', to: 'BR', color: 'blue', dash: 2 },

          { type: 'segment', from: 'FL', to: 'BL', color: 'blue' },
          { type: 'segment', from: 'FR', to: 'BR', color: 'blue' },

          // Length arrow
          { type: 'segment', from: 'FR', to: 'BR', color: 'red', firstArrow: true, lastArrow: true },

          // Labels
          { type: 'text', coords: [0, -0.6], content: 'A = 30 cm²' },
          { type: 'text', coords: [6.8, 1.8], content: '16 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the base area A and length l.',
        workingOut: '\\\\( A = 30\\\\text{ cm}^2, \\\\quad l = 16\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Apply the formula: Volume = Area of base x length.',
        workingOut: '\\\\( V = 30 \\\\times 16 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate final volume.',
        workingOut: '\\\\( V = 480\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 2a. The volume of a cube of side length a
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q2a',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Express the volume of a cube of side length \\(a\\) in terms of the given pronumeral.',
    opts: [
      { text: '\\(a^3\\)', imageUrl: '' },
      { text: '\\(3a\\)', imageUrl: '' },
      { text: '\\(6a^2\\)', imageUrl: '' },
      { text: '\\(a^2\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'A cube has equal length, width, and height. Volume = length * width * height.',
    solution: 'The volume \\(V\\) of a cube with side length \\(a\\) is calculated by multiplying its three dimensions:\\n\\[V = a \\\\times a \\\\times a = a^3\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'A cube has three equal dimensions of length \\(a\\).',
        workingOut: '\\\\( \\\\text{Length} = a, \\\\quad \\\\text{Width} = a, \\\\quad \\\\text{Height} = a \\\\)',
        graphData: null
      },
      {
        explanation: 'Apply the volume formula for a rectangular prism: Volume = length x width x height.',
        workingOut: '\\\\( V = a \\\\times a \\\\times a \\\\)',
        graphData: null
      },
      {
        explanation: 'Write the expression in index form.',
        workingOut: '\\\\( V = a^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 2b. The volume of a rectangular prism with length a, width b and height c
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q2b',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Express the volume of a rectangular prism with length \\(a\\), width \\(b\\) and height \\(c\\) in terms of the given pronumerals.',
    opts: [
      { text: '\\(abc\\)', imageUrl: '' },
      { text: '\\(a + b + c\\)', imageUrl: '' },
      { text: '\\(2(ab + bc + ca)\\)', imageUrl: '' },
      { text: '\\(a^2bc\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Multiply the length, width, and height of the rectangular prism.',
    solution: 'The volume \\(V\\) of a rectangular prism is the product of its length \\(a\\), width \\(b\\), and height \\(c\\):\\n\\[V = a \\\\times b \\\\times c = abc\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Define the volume formula for a rectangular prism.',
        workingOut: '\\\\( V = \\\\text{length} \\\\times \\\\text{width} \\\\times \\\\text{height} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the given pronumerals \\(a\\), \\(b\\), and \\(c\\).',
        workingOut: '\\\\( V = a \\\\times b \\\\times c \\\\)',
        graphData: null
      },
      {
        explanation: 'Simplify the expression.',
        workingOut: '\\\\( V = abc \\\\)',
        graphData: null
      }
    ]
  },
  // 2c. The volume of a cylinder with radius a and height b
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q2c',
    difficulty: 'medium',
    timeLimit: 90,
    type: 'multiple_choice',
    question: 'Express the volume of a cylinder with radius \\(a\\) and height \\(b\\) in terms of the given pronumerals.',
    opts: [
      { text: '\\(\\pi a^2 b\\)', imageUrl: '' },
      { text: '\\(2\\pi a b\\)', imageUrl: '' },
      { text: '\\(\\pi a b^2\\)', imageUrl: '' },
      { text: '\\(2\\pi a^2 b\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use the cylinder volume formula: Volume = pi * radius^2 * height.',
    solution: 'The volume \\(V\\) of a cylinder with radius \\(a\\) and height \\(b\\) is given by:\\n\\[V = \\\\pi r^2 h = \\\\pi a^2 b\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'State the general volume formula for a cylinder.',
        workingOut: '\\\\( V = \\\\pi r^2 h \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute \\(r = a\\) and \\(h = b\\) into the equation.',
        workingOut: '\\\\( V = \\\\pi (a)^2 b \\\\)',
        graphData: null
      },
      {
        explanation: 'Write down the final volume expression.',
        workingOut: '\\\\( V = \\\\pi a^2 b \\\\)',
        graphData: null
      }
    ]
  },
  // 3a. Volume of prism: Rectangular prism 12 x 10 x 7 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3a',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the rectangular prism with the given dimensions:\\n- Length = \\(12\\\\text{ cm}\\)\\n- Width = \\(10\\\\text{ cm}\\)\\n- Height = \\(7\\\\text{ cm}\\)',
    opts: [
      { text: '\\(840\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(720\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(960\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(680\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Volume = length * width * height.',
    solution: 'Calculate the volume of the rectangular prism:\\n\\[V = l \\\\times w \\\\times h = 12 \\\\times 10 \\\\times 7 = 840\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3a-board',
        boundingbox: [-2, 8, 10, -2],
        keepaspectratio: true,
        elements: [
          // Front face points
          { type: 'point', id: 'A1', coords: [0, 0], visible: false },
          { type: 'point', id: 'A2', coords: [5, 0], visible: false },
          { type: 'point', id: 'A3', coords: [5, 3], visible: false },
          { type: 'point', id: 'A4', coords: [0, 3], visible: false },
          // Back face points (shifted up and right)
          { type: 'point', id: 'B1', coords: [3, 2], visible: false },
          { type: 'point', id: 'B2', coords: [8, 2], visible: false },
          { type: 'point', id: 'B3', coords: [8, 5], visible: false },
          { type: 'point', id: 'B4', coords: [3, 5], visible: false },

          // Edges
          { type: 'segment', from: 'A1', to: 'A2', color: 'blue' },
          { type: 'segment', from: 'A2', to: 'A3', color: 'blue' },
          { type: 'segment', from: 'A3', to: 'A4', color: 'blue' },
          { type: 'segment', from: 'A4', to: 'A1', color: 'blue' },

          { type: 'segment', from: 'A2', to: 'B2', color: 'blue' },
          { type: 'segment', from: 'A3', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'A4', to: 'B4', color: 'blue' },

          { type: 'segment', from: 'B2', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'B3', to: 'B4', color: 'blue' },

          // Hidden edges (dashed)
          { type: 'segment', from: 'A1', to: 'B1', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B4', color: 'blue', dash: 2 },

          // Labels
          { type: 'text', coords: [2.5, -0.6], content: '12 cm' },
          { type: 'text', coords: [7.0, 0.8], content: '10 cm' },
          { type: 'text', coords: [5.6, 1.5], content: '7 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the dimensions of the rectangular prism.',
        workingOut: '\\\\( l = 12\\\\text{ cm}, \\\\quad w = 10\\\\text{ cm}, \\\\quad h = 7\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the dimensions into the rectangular prism volume formula: Volume = l x w x h.',
        workingOut: '\\\\( V = 12 \\\\times 10 \\\\times 7 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the final volume.',
        workingOut: '\\\\( V = 840\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 3b. Volume of prism: Cube of side length 8 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3b',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the cube with side length:\\n- \\(s = 8\\\\text{ cm}\\)',
    opts: [
      { text: '\\(512\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(384\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(256\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(576\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Volume of a cube = side^3.',
    solution: 'Calculate the volume of the cube:\\n\\[V = s^3 = 8^3 = 512\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3b-board',
        boundingbox: [-2, 8, 9, -2],
        keepaspectratio: true,
        elements: [
          // Front face
          { type: 'point', id: 'A1', coords: [0, 0], visible: false },
          { type: 'point', id: 'A2', coords: [4, 0], visible: false },
          { type: 'point', id: 'A3', coords: [4, 4], visible: false },
          { type: 'point', id: 'A4', coords: [0, 4], visible: false },
          // Back face
          { type: 'point', id: 'B1', coords: [2.5, 2], visible: false },
          { type: 'point', id: 'B2', coords: [6.5, 2], visible: false },
          { type: 'point', id: 'B3', coords: [6.5, 6], visible: false },
          { type: 'point', id: 'B4', coords: [2.5, 6], visible: false },

          // Edges
          { type: 'segment', from: 'A1', to: 'A2', color: 'blue' },
          { type: 'segment', from: 'A2', to: 'A3', color: 'blue' },
          { type: 'segment', from: 'A3', to: 'A4', color: 'blue' },
          { type: 'segment', from: 'A4', to: 'A1', color: 'blue' },

          { type: 'segment', from: 'A2', to: 'B2', color: 'blue' },
          { type: 'segment', from: 'A3', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'A4', to: 'B4', color: 'blue' },

          { type: 'segment', from: 'B2', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'B3', to: 'B4', color: 'blue' },

          // Hidden edges
          { type: 'segment', from: 'A1', to: 'B1', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B4', color: 'blue', dash: 2 },

          // Side tick markers to show equal sides
          { type: 'tick', segment: 'A2', count: 1 },

          // Labels
          { type: 'text', coords: [2.0, -0.6], content: '8 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Identify the side length of the cube.',
        workingOut: '\\\\( s = 8\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Apply the cube volume formula: Volume = side^3.',
        workingOut: '\\\\( V = 8^3 = 8 \\\\times 8 \\\\times 8 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the final value.',
        workingOut: '\\\\( V = 512\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 3c. Volume of prism: Triangular prism base=8, h=6, length=12
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3c',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the triangular prism with the following cross-section dimensions:\\n- Triangle base = \\(8\\\\text{ cm}\\)\\n- Triangle perpendicular height = \\(6\\\\text{ cm}\\)\\n- Length of prism = \\(12\\\\text{ cm}\\)',
    opts: [
      { text: '\\(288\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(576\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(324\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(144\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Volume = area of triangle base * length = 0.5 * base * height * length.',
    solution: 'Calculate the area of the triangular base:\\n\\[A = \\\\frac{1}{2} \\\\times \\\\text{base} \\\\times \\\\text{height} = \\\\frac{1}{2} \\\\times 8 \\\\times 6 = 24\\\\text{ cm}^2\\]\\nMultiply by the length of the prism to find the volume:\\n\\[V = A \\\\times l = 24 \\\\times 12 = 288\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3c-board',
        boundingbox: [-2, 8, 12, -2],
        keepaspectratio: true,
        elements: [
          // Front triangular base points
          { type: 'point', id: 'T1', coords: [0, 0], visible: false },
          { type: 'point', id: 'T2', coords: [5, 0], visible: false },
          { type: 'point', id: 'T3', coords: [2.5, 4.5], visible: false },
          { type: 'point', id: 'M', coords: [2.5, 0], visible: false }, // mid-point for perpendicular height

          // Back triangular base points
          { type: 'point', id: 'T4', coords: [4, 2], visible: false },
          { type: 'point', id: 'T5', coords: [9, 2], visible: false },
          { type: 'point', id: 'T6', coords: [6.5, 6.5], visible: false },

          // Edges
          { type: 'segment', from: 'T1', to: 'T2', color: 'blue' },
          { type: 'segment', from: 'T2', to: 'T3', color: 'blue' },
          { type: 'segment', from: 'T3', to: 'T1', color: 'blue' },

          { type: 'segment', from: 'T2', to: 'T5', color: 'blue' },
          { type: 'segment', from: 'T3', to: 'T6', color: 'blue' },

          { type: 'segment', from: 'T5', to: 'T6', color: 'blue' },

          // Hidden edges
          { type: 'segment', from: 'T1', to: 'T4', color: 'blue', dash: 2 },
          { type: 'segment', from: 'T4', to: 'T5', color: 'blue', dash: 2 },
          { type: 'segment', from: 'T4', to: 'T6', color: 'blue', dash: 2 },

          // Perpendicular height indicators
          { type: 'segment', from: 'T3', to: 'M', color: 'red', dash: 2 },
          { type: 'rightangle', points: ['T3', 'M', 'T2'], size: 0.3 },

          // Labels
          { type: 'text', coords: [2.5, -0.6], content: '8 cm' },
          { type: 'text', coords: [1.8, 2.2], content: '6 cm' },
          { type: 'text', coords: [7.5, 1.8], content: '12 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the base area formula of a triangle and calculate it.',
        workingOut: '\\\\( A = \\\\frac{1}{2} \\\\times b \\\\times h_t = \\\\frac{1}{2} \\\\times 8 \\\\times 6 = 24\\\\text{ cm}^2  \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply the calculated base area by the length of the prism.',
        workingOut: '\\\\( V = A \\\\times l_p = 24 \\\\times 12 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the total volume.',
        workingOut: '\\\\( V = 288\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 3d. Volume of prism: Trapezoidal prism
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3d',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the trapezoidal prism with the following cross-section dimensions:\\n- Parallel side 1 = \\(15\\\\text{ cm}\\)\\n- Parallel side 2 = \\(25\\\\text{ cm}\\)\\n- Perpendicular height of trapezoid = \\(10\\\\text{ cm}\\)\\n- Length of prism = \\(40\\\\text{ cm}\\)',
    opts: [
      { text: '\\(8000\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(7200\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(6400\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(9000\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Area of trapezoid = 0.5 * (a + b) * h. Volume = Area * length.',
    solution: 'Calculate the area of the trapezoidal base:\\n\\[A = \\\\frac{1}{2} \\\\times (a + b) \\\\times h = \\\\frac{1}{2} \\\\times (15 + 25) \\\\times 10 = 200\\\\text{ cm}^2\\]\\nMultiply by the length of the prism:\\n\\[V = A \\\\times l = 200 \\\\times 40 = 8000\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3d-board',
        boundingbox: [-2, 10, 15, -2],
        keepaspectratio: true,
        elements: [
          // Front face coordinates (trapezoid)
          { type: 'point', id: 'A1', coords: [0, 0], visible: false },
          { type: 'point', id: 'A2', coords: [8, 0], visible: false },
          { type: 'point', id: 'A3', coords: [6, 4], visible: false },
          { type: 'point', id: 'A4', coords: [2, 4], visible: false },
          { type: 'point', id: 'H1', coords: [2, 0], visible: false }, // height base

          // Back face coordinates
          { type: 'point', id: 'B1', coords: [5, 3], visible: false },
          { type: 'point', id: 'B2', coords: [13, 3], visible: false },
          { type: 'point', id: 'B3', coords: [11, 7], visible: false },
          { type: 'point', id: 'B4', coords: [7, 7], visible: false },

          // Front lines
          { type: 'segment', from: 'A1', to: 'A2', color: 'blue' },
          { type: 'segment', from: 'A2', to: 'A3', color: 'blue' },
          { type: 'segment', from: 'A3', to: 'A4', color: 'blue' },
          { type: 'segment', from: 'A4', to: 'A1', color: 'blue' },

          // Depth lines
          { type: 'segment', from: 'A2', to: 'B2', color: 'blue' },
          { type: 'segment', from: 'A3', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'A4', to: 'B4', color: 'blue' },

          // Back lines
          { type: 'segment', from: 'B2', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'B3', to: 'B4', color: 'blue' },

          // Hidden lines
          { type: 'segment', from: 'A1', to: 'B1', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B4', color: 'blue', dash: 2 },

          // Height indicator line
          { type: 'segment', from: 'A4', to: 'H1', color: 'red', dash: 2 },
          { type: 'rightangle', points: ['A4', 'H1', 'A2'], size: 0.3 },

          // Labels
          { type: 'text', coords: [4.0, 4.4], content: '15 cm' },
          { type: 'text', coords: [4.0, -0.6], content: '25 cm' },
          { type: 'text', coords: [1.2, 2.0], content: '10 cm' },
          { type: 'text', coords: [10.5, 1.2], content: '40 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the cross-sectional area of the trapezoidal face using the area formula.',
        workingOut: '\\\\( A = \\\\frac{1}{2} \\\\times (a + b) \\\\times h = \\\\frac{1}{2} \\\\times (15 + 25) \\\\times 10 = 200\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply the cross-sectional area by the prism length.',
        workingOut: '\\\\( V = 200 \\\\times 40 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the total volume.',
        workingOut: '\\\\( V = 8000\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 3e. Volume of prism: L-shaped/step block
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3e',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the stepped block with the given dimensions:\\n- Overall width = \\(16\\\\text{ cm}\\)\\n- Overall height = \\(12\\\\text{ cm}\\)\\n- Overall length = \\(14\\\\text{ cm}\\)\\n- Step cut width = \\(10\\\\text{ cm}\\)\\n- Step cut height = \\(3\\\\text{ cm}\\)',
    opts: [
      { text: '\\(2268\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(2420\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(2180\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(2340\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Divide the L-shape into two rectangles, find total area, and multiply by length.',
    solution: 'Divide the front L-shaped face into two rectangles:\\n1. Top part: \\(6\\\\text{ cm wide} \\\\times 3\\\\text{ cm high} = 18\\\\text{ cm}^2\\)\\n2. Bottom part: \\(16\\\\text{ cm wide} \\\\times (12 - 3)\\\\text{ cm high} = 16 \\\\times 9 = 144\\\\text{ cm}^2\\)\\n\\nAdd the two areas to find the total base area:\\n\\[A = 18 + 144 = 162\\\\text{ cm}^2\\]\\nMultiply by the length to find the volume:\\n\\[V = A \\\\times l = 162 \\\\times 14 = 2268\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3e-board',
        boundingbox: [-2, 10, 14, -2],
        keepaspectratio: true,
        elements: [
          // Front face coordinates (composed of 6 vertices)
          { type: 'point', id: 'F1', coords: [0, 0], visible: false },
          { type: 'point', id: 'F2', coords: [6, 0], visible: false },
          { type: 'point', id: 'F3', coords: [6, 4], visible: false },
          { type: 'point', id: 'F4', coords: [2.2, 4], visible: false },
          { type: 'point', id: 'F5', coords: [2.2, 5], visible: false },
          { type: 'point', id: 'F6', coords: [0, 5], visible: false },

          // Back face coordinates (shifted)
          { type: 'point', id: 'B1', coords: [4, 3], visible: false },
          { type: 'point', id: 'B2', coords: [10, 3], visible: false },
          { type: 'point', id: 'B3', coords: [10, 7], visible: false },
          { type: 'point', id: 'B4', coords: [6.2, 7], visible: false },
          { type: 'point', id: 'B5', coords: [6.2, 8], visible: false },
          { type: 'point', id: 'B6', coords: [4, 8], visible: false },

          // Front lines
          { type: 'segment', from: 'F1', to: 'F2', color: 'blue' },
          { type: 'segment', from: 'F2', to: 'F3', color: 'blue' },
          { type: 'segment', from: 'F3', to: 'F4', color: 'blue' },
          { type: 'segment', from: 'F4', to: 'F5', color: 'blue' },
          { type: 'segment', from: 'F5', to: 'F6', color: 'blue' },
          { type: 'segment', from: 'F6', to: 'F1', color: 'blue' },

          // Connectors
          { type: 'segment', from: 'F2', to: 'B2', color: 'blue' },
          { type: 'segment', from: 'F3', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'F4', to: 'B4', color: 'blue' },
          { type: 'segment', from: 'F5', to: 'B5', color: 'blue' },
          { type: 'segment', from: 'F6', to: 'B6', color: 'blue' },

          // Back visible lines
          { type: 'segment', from: 'B2', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'B3', to: 'B4', color: 'blue' },
          { type: 'segment', from: 'B4', to: 'B5', color: 'blue' },
          { type: 'segment', from: 'B5', to: 'B6', color: 'blue' },

          // Hidden lines
          { type: 'segment', from: 'F1', to: 'B1', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B6', color: 'blue', dash: 2 },

          // Labels
          { type: 'text', coords: [3.0, -0.6], content: '16 cm' },
          { type: 'text', coords: [-0.8, 2.5], content: '12 cm' },
          { type: 'text', coords: [8.5, 1.2], content: '14 cm' },
          { type: 'text', coords: [2.3, 4.5], content: '10 cm' },
          { type: 'text', coords: [4.8, 5.8], content: '3 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Split the front L-shaped face into two simpler rectangular areas.',
        workingOut: '\\\\( A_1 = (16 - 10) \\\\times 12 = 6 \\\\times 12 = 72\\\\text{ cm}^2, \\\\quad A_2 = 10 \\\\times (12 - 3) = 10 \\\\times 9 = 90\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Sum the areas to find the total cross-sectional area.',
        workingOut: '\\\\( A_{\\\\text{total}} = 72 + 90 = 162\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply this total area by the uniform depth length of the block.',
        workingOut: '\\\\( V = 162 \\\\times 14 \\\\)',
        graphData: null
      },
      {
        explanation: 'Compute the final volume value.',
        workingOut: '\\\\( V = 2268\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 3f. Volume of prism: U-shaped channel block
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3f',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the U-shaped channel block with the given dimensions:\\n- Total width = \\(30\\\\text{ cm}\\)\\n- Total height = \\(12\\\\text{ cm}\\)\\n- Inner channel depth = \\(6\\\\text{ cm}\\)\\n- Inner channel width = \\(10\\\\text{ cm}\\)\\n- Total length = \\(10\\\\text{ cm}\\)',
    opts: [
      { text: '\\(3000\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(2800\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(3200\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(3600\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Subtract the volume of the inner channel cut-out from the overall rectangular block volume.',
    solution: 'Calculate the volume of the overall solid rectangular block:\\n\\[V_{\\\\text{outer}} = 30 \\\\times 12 \\\\times 10 = 3600\\\\text{ cm}^3\\]\\nCalculate the volume of the inner channel cut-out:\\n\\[V_{\\\\text{cut}} = 10 \\\\times 6 \\\\times 10 = 600\\\\text{ cm}^3\\]\\nSubtract to find the remaining volume:\\n\\[V = V_{\\\\text{outer}} - V_{\\\\text{cut}} = 3600 - 600 = 3000\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3f-board',
        boundingbox: [-2, 10, 15, -2],
        keepaspectratio: true,
        elements: [
          // Front face coordinates (8 vertices for U-shape)
          { type: 'point', id: 'F1', coords: [0, 0], visible: false },
          { type: 'point', id: 'F2', coords: [10, 0], visible: false },
          { type: 'point', id: 'F3', coords: [10, 4], visible: false },
          { type: 'point', id: 'F4', coords: [6.6, 4], visible: false },
          { type: 'point', id: 'F5', coords: [6.6, 2], visible: false },
          { type: 'point', id: 'F6', coords: [3.3, 2], visible: false },
          { type: 'point', id: 'F7', coords: [3.3, 4], visible: false },
          { type: 'point', id: 'F8', coords: [0, 4], visible: false },

          // Back face coordinates (shifted)
          { type: 'point', id: 'B1', coords: [3, 2.5], visible: false },
          { type: 'point', id: 'B2', coords: [13, 2.5], visible: false },
          { type: 'point', id: 'B3', coords: [13, 6.5], visible: false },
          { type: 'point', id: 'B4', coords: [9.6, 6.5], visible: false },
          { type: 'point', id: 'B5', coords: [9.6, 4.5], visible: false },
          { type: 'point', id: 'B6', coords: [6.3, 4.5], visible: false },
          { type: 'point', id: 'B7', coords: [6.3, 6.5], visible: false },
          { type: 'point', id: 'B8', coords: [3, 6.5], visible: false },

          // Front lines
          { type: 'segment', from: 'F1', to: 'F2', color: 'blue' },
          { type: 'segment', from: 'F2', to: 'F3', color: 'blue' },
          { type: 'segment', from: 'F3', to: 'F4', color: 'blue' },
          { type: 'segment', from: 'F4', to: 'F5', color: 'blue' },
          { type: 'segment', from: 'F5', to: 'F6', color: 'blue' },
          { type: 'segment', from: 'F6', to: 'F7', color: 'blue' },
          { type: 'segment', from: 'F7', to: 'F8', color: 'blue' },
          { type: 'segment', from: 'F8', to: 'F1', color: 'blue' },

          // Connectors
          { type: 'segment', from: 'F2', to: 'B2', color: 'blue' },
          { type: 'segment', from: 'F3', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'F4', to: 'B4', color: 'blue' },
          { type: 'segment', from: 'F5', to: 'B5', color: 'blue' },
          { type: 'segment', from: 'F6', to: 'B6', color: 'blue' },
          { type: 'segment', from: 'F7', to: 'B7', color: 'blue' },
          { type: 'segment', from: 'F8', to: 'B8', color: 'blue' },

          // Back visible lines
          { type: 'segment', from: 'B2', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'B3', to: 'B4', color: 'blue' },
          { type: 'segment', from: 'B4', to: 'B5', color: 'blue' },
          { type: 'segment', from: 'B5', to: 'B6', color: 'blue' },
          { type: 'segment', from: 'B6', to: 'B7', color: 'blue' },
          { type: 'segment', from: 'B7', to: 'B8', color: 'blue' },

          // Hidden lines
          { type: 'segment', from: 'F1', to: 'B1', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B8', color: 'blue', dash: 2 },

          // Labels
          { type: 'text', coords: [5.0, -0.6], content: '30 cm' },
          { type: 'text', coords: [-0.8, 2.0], content: '12 cm' },
          { type: 'text', coords: [5.0, 1.3], content: '6 cm' },
          { type: 'text', coords: [5.0, 4.4], content: '10 cm' },
          { type: 'text', coords: [12.0, 1.0], content: '10 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the cross-sectional area by subtracting the inner cut area from the outer block area.',
        workingOut: '\\\\( A_{\\\\text{outer}} = 30 \\\\times 12 = 360\\\\text{ cm}^2, \\\\quad A_{\\\\text{cut}} = 10 \\\\times 6 = 60\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Find the net cross-sectional base area.',
        workingOut: '\\\\( A = A_{\\\\text{outer}} - A_{\\\\text{cut}} = 360 - 60 = 300\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply the net area by the length of the channel block.',
        workingOut: '\\\\( V = 300 \\\\times 10 \\\\)',
        graphData: null
      },
      {
        explanation: 'Compute the final volume value.',
        workingOut: '\\\\( V = 3000\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 3g. Volume of prism: Right-angled triangular base prism
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3g',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the right-angled triangular prism with the following dimensions:\\n- Triangle base height = \\(30\\\\text{ cm}\\)\\n- Triangle horizontal base = \\(40\\\\text{ cm}\\)\\n- Prism length = \\(80\\\\text{ cm}\\)',
    opts: [
      { text: '\\(48000\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(96000\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(36000\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(24000\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Area of right triangle = 0.5 * base * height. Volume = Area * length.',
    solution: 'Calculate the area of the right-angled triangular cross-section:\\n\\[A = \\\\frac{1}{2} \\\\times 40 \\\\times 30 = 600\\\\text{ cm}^2\\]\\nMultiply by the length of the prism:\\n\\[V = A \\\\times l = 600 \\\\times 80 = 48000\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3g-board',
        boundingbox: [-2, 8, 12, -2],
        keepaspectratio: true,
        elements: [
          // Front right-triangle coordinates
          { type: 'point', id: 'T1', coords: [0, 0], visible: false },
          { type: 'point', id: 'T2', coords: [0, 4], visible: false },
          { type: 'point', id: 'T3', coords: [5, 0], visible: false },

          // Back right-triangle coordinates
          { type: 'point', id: 'T4', coords: [4, 2], visible: false },
          { type: 'point', id: 'T5', coords: [4, 6], visible: false },
          { type: 'point', id: 'T6', coords: [9, 2], visible: false },

          // Front lines
          { type: 'segment', from: 'T1', to: 'T2', color: 'blue' },
          { type: 'segment', from: 'T2', to: 'T3', color: 'blue' },
          { type: 'segment', from: 'T3', to: 'T1', color: 'blue' },

          // Connectors
          { type: 'segment', from: 'T2', to: 'T5', color: 'blue' },
          { type: 'segment', from: 'T3', to: 'T6', color: 'blue' },

          // Back lines
          { type: 'segment', from: 'T5', to: 'T6', color: 'blue' },

          // Hidden lines
          { type: 'segment', from: 'T1', to: 'T4', color: 'blue', dash: 2 },
          { type: 'segment', from: 'T4', to: 'T5', color: 'blue', dash: 2 },
          { type: 'segment', from: 'T4', to: 'T6', color: 'blue', dash: 2 },

          // Right angle markers
          { type: 'rightangle', points: ['T2', 'T1', 'T3'], size: 0.3 },
          { type: 'rightangle', points: ['T5', 'T4', 'T6'], size: 0.3, dash: 2 },

          // Labels
          { type: 'text', coords: [-0.8, 2.0], content: '30 cm' },
          { type: 'text', coords: [2.5, -0.6], content: '40 cm' },
          { type: 'text', coords: [5.0, 0.6], content: '80 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the base area of the right-angled triangle.',
        workingOut: '\\\\( A = \\\\frac{1}{2} \\\\times \\\\text{base} \\\\times \\\\text{height} = \\\\frac{1}{2} \\\\times 40 \\\\times 30 = 600\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply the base area by the length of the prism to find the volume.',
        workingOut: '\\\\( V = 600 \\\\times 80 \\\\)',
        graphData: null
      },
      {
        explanation: 'Determine final volume.',
        workingOut: '\\\\( V = 48000\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 3h. Volume of prism: Triangular prism 16 mm base, height of triangle to length=120 mm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3h',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the triangular prism with the following dimensions:\\n- Triangle base = \\(16\\\\text{ mm}\\)\\n- Triangle height = \\(15\\\\text{ mm}\\)\\n- Prism length = \\(120\\\\text{ mm}\\)',
    opts: [
      { text: '\\(14400\\\\text{ mm}^3\\)', imageUrl: '' },
      { text: '\\(28800\\\\text{ mm}^3\\)', imageUrl: '' },
      { text: '\\(12800\\\\text{ mm}^3\\)', imageUrl: '' },
      { text: '\\(19200\\\\text{ mm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Calculate triangle base area: 0.5 * base * height, and multiply by length.',
    solution: 'Calculate the triangular base area:\\n\\[A = \\\\frac{1}{2} \\\\times b \\\\times h = \\\\frac{1}{2} \\\\times 16 \\\\times 15 = 120\\\\text{ mm}^2\\]\\nMultiply by the length:\\n\\[V = A \\\\times l = 120 \\\\times 120 = 14400\\\\text{ mm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3h-board',
        boundingbox: [-2, 8, 12, -2],
        keepaspectratio: true,
        elements: [
          // Front triangular base points
          { type: 'point', id: 'T1', coords: [0, 0], visible: false },
          { type: 'point', id: 'T2', coords: [5, 0], visible: false },
          { type: 'point', id: 'T3', coords: [2.5, 4.5], visible: false },
          { type: 'point', id: 'M', coords: [2.5, 0], visible: false }, // mid-point

          // Back triangular base points
          { type: 'point', id: 'T4', coords: [4, 2], visible: false },
          { type: 'point', id: 'T5', coords: [9, 2], visible: false },
          { type: 'point', id: 'T6', coords: [6.5, 6.5], visible: false },

          // Edges
          { type: 'segment', from: 'T1', to: 'T2', color: 'blue' },
          { type: 'segment', from: 'T2', to: 'T3', color: 'blue' },
          { type: 'segment', from: 'T3', to: 'T1', color: 'blue' },

          { type: 'segment', from: 'T2', to: 'T5', color: 'blue' },
          { type: 'segment', from: 'T3', to: 'T6', color: 'blue' },
          { type: 'segment', from: 'T5', to: 'T6', color: 'blue' },

          // Hidden edges
          { type: 'segment', from: 'T1', to: 'T4', color: 'blue', dash: 2 },
          { type: 'segment', from: 'T4', to: 'T5', color: 'blue', dash: 2 },
          { type: 'segment', from: 'T4', to: 'T6', color: 'blue', dash: 2 },

          // Height guide
          { type: 'segment', from: 'T3', to: 'M', color: 'red', dash: 2 },
          { type: 'rightangle', points: ['T3', 'M', 'T2'], size: 0.3 },

          // Labels
          { type: 'text', coords: [2.5, -0.6], content: '16 mm' },
          { type: 'text', coords: [1.8, 2.2], content: '15 mm' },
          { type: 'text', coords: [7.5, 1.8], content: '120 mm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Compute the base area of the triangle.',
        workingOut: '\\\\( A = \\\\frac{1}{2} \\\\times 16 \\\\times 15 = 120\\\\text{ mm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply by the length of the prism to find the total volume.',
        workingOut: '\\\\( V = 120 \\\\times 120 \\\\)',
        graphData: null
      },
      {
        explanation: 'Obtain the final answer.',
        workingOut: '\\\\( V = 14400\\\\text{ mm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 3i. Volume of prism: trapezoid base with matching arrows
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3i',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the trapezoidal prism with the following dimensions:\\n- Parallel top side = \\(4\\\\text{ cm}\\)\\n- Parallel bottom side = \\(6\\\\text{ cm}\\)\\n- Perpendicular height of trapezoid = \\(2\\\\text{ cm}\\)\\n- Length of prism = \\(12\\\\text{ cm}\\)',
    opts: [
      { text: '\\(120\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(96\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(144\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(72\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Area of trapezoid = 0.5 * (a + b) * h. Volume = Area * length.',
    solution: 'Calculate the area of the trapezoidal base:\\n\\[A = \\\\frac{1}{2} \\\\times (a + b) \\\\times h = \\\\frac{1}{2} \\\\times (4 + 6) \\\\times 2 = 10\\\\text{ cm}^2\\]\\nMultiply by the length of the prism:\\n\\[V = A \\\\times l = 10 \\\\times 12 = 120\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3i-board',
        boundingbox: [-2, 8, 12, -2],
        keepaspectratio: true,
        elements: [
          // Front face coordinates
          { type: 'point', id: 'A1', coords: [0, 0], visible: false },
          { type: 'point', id: 'A2', coords: [6, 0], visible: false },
          { type: 'point', id: 'A3', coords: [5, 2.5], visible: false },
          { type: 'point', id: 'A4', coords: [1, 2.5], visible: false },
          { type: 'point', id: 'H1', coords: [1, 0], visible: false },

          // Back face coordinates
          { type: 'point', id: 'B1', coords: [3, 2], visible: false },
          { type: 'point', id: 'B2', coords: [9, 2], visible: false },
          { type: 'point', id: 'B3', coords: [8, 4.5], visible: false },
          { type: 'point', id: 'B4', coords: [4, 4.5], visible: false },

          // Front lines
          { type: 'segment', from: 'A1', to: 'A2', color: 'blue' },
          { type: 'segment', from: 'A2', to: 'A3', color: 'blue' },
          { type: 'segment', from: 'A3', to: 'A4', color: 'blue' },
          { type: 'segment', from: 'A4', to: 'A1', color: 'blue' },

          // Connectors
          { type: 'segment', from: 'A2', to: 'B2', color: 'blue' },
          { type: 'segment', from: 'A3', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'A4', to: 'B4', color: 'blue' },

          // Back lines
          { type: 'segment', from: 'B2', to: 'B3', color: 'blue' },
          { type: 'segment', from: 'B3', to: 'B4', color: 'blue' },

          // Hidden lines
          { type: 'segment', from: 'A1', to: 'B1', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B2', color: 'blue', dash: 2 },
          { type: 'segment', from: 'B1', to: 'B4', color: 'blue', dash: 2 },

          // Height guide
          { type: 'segment', from: 'A4', to: 'H1', color: 'red', dash: 2 },
          { type: 'rightangle', points: ['A4', 'H1', 'A2'], size: 0.3 },

          // Parallel indicators (arrows)
          { type: 'arrow', from: 'A4', to: 'A3', color: 'blue' },
          { type: 'arrow', from: 'A1', to: 'A2', color: 'blue' },

          // Labels
          { type: 'text', coords: [3.0, 2.9], content: '4 cm' },
          { type: 'text', coords: [3.0, -0.6], content: '6 cm' },
          { type: 'text', coords: [0.5, 1.25], content: '2 cm' },
          { type: 'text', coords: [7.5, 0.8], content: '12 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the base area of the trapezoidal face using the area formula.',
        workingOut: '\\\\( A = \\\\frac{1}{2} \\\\times (a + b) \\\\times h = \\\\frac{1}{2} \\\\times (4 + 6) \\\\times 2 = 10\\\\text{ cm}^2  \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply the base area by the length of the prism.',
        workingOut: '\\\\( V = 10 \\\\times 12 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the final volume.',
        workingOut: '\\\\( V = 120\\\\text{ cm}^3  \\\\)',
        graphData: null
      }
    ]
  },
  // 3j. Volume of prism: Regular hexagonal prism
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q3j',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the regular hexagonal prism with the following dimensions:\\n- Hexagon side length = \\(5\\\\text{ cm}\\)\\n- Hexagon perpendicular height (corner-to-corner/span) = \\(7\\\\text{ cm}\\)\\n- Prism length = \\(14\\\\text{ cm}\\)',
    opts: [
      { text: '\\(735\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(840\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(680\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(980\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Divide the regular hexagon into two trapezoids or triangles, calculate its total area, and multiply by length.',
    solution: 'A regular hexagon can be split into two trapezoids of parallel sides \\(5\\\\text{ cm}\\) and overall middle width \\(10\\\\text{ cm}\\) (since regular hexagon diagonal is twice the side length: \\(2s = 10\\\\text{ cm}\\)), with height \\(h = \\\\frac{7}{2} = 3.5\\\\text{ cm}\\) each.\\n\\nCalculate the total area of the hexagon base:\\n\\[A = 2 \\\\times \\\\left[\\\\frac{1}{2} \\\\times (5 + 10) \\\\times 3.5\\\\right] = 52.5\\\\text{ cm}^2\\]\\nMultiply by the length of the prism:\\n\\[V = A \\\\times l = 52.5 \\\\times 14 = 735\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q3j-board',
        boundingbox: [-4, 6, 12, -6],
        keepaspectratio: true,
        elements: [
          // Front regular hexagon points
          { type: 'point', id: 'H1', coords: [-1, 2.5], visible: false },
          { type: 'point', id: 'H2', coords: [1, 2.5], visible: false },
          { type: 'point', id: 'H3', coords: [2, 0], visible: false },
          { type: 'point', id: 'H4', coords: [1, -2.5], visible: false },
          { type: 'point', id: 'H5', coords: [-1, -2.5], visible: false },
          { type: 'point', id: 'H6', coords: [-2, 0], visible: false },

          // Back regular hexagon points (shifted)
          { type: 'point', id: 'K1', coords: [4, 4.5], visible: false },
          { type: 'point', id: 'K2', coords: [6, 4.5], visible: false },
          { type: 'point', id: 'K3', coords: [7, 2], visible: false },
          { type: 'point', id: 'K4', coords: [6, -0.5], visible: false },
          { type: 'point', id: 'K5', coords: [4, -0.5], visible: false },
          { type: 'point', id: 'K6', coords: [3, 2], visible: false },

          // Front lines
          { type: 'segment', from: 'H1', to: 'H2', color: 'blue' },
          { type: 'segment', from: 'H2', to: 'H3', color: 'blue' },
          { type: 'segment', from: 'H3', to: 'H4', color: 'blue' },
          { type: 'segment', from: 'H4', to: 'H5', color: 'blue' },
          { type: 'segment', from: 'H5', to: 'H6', color: 'blue' },
          { type: 'segment', from: 'H6', to: 'H1', color: 'blue' },

          // Connectors
          { type: 'segment', from: 'H1', to: 'K1', color: 'blue' },
          { type: 'segment', from: 'H2', to: 'K2', color: 'blue' },
          { type: 'segment', from: 'H3', to: 'K3', color: 'blue' },
          { type: 'segment', from: 'H4', to: 'K4', color: 'blue' },

          // Back visible lines
          { type: 'segment', from: 'K1', to: 'K2', color: 'blue' },
          { type: 'segment', from: 'K2', to: 'K3', color: 'blue' },
          { type: 'segment', from: 'K3', to: 'K4', color: 'blue' },

          // Hidden lines (dashed)
          { type: 'segment', from: 'H5', to: 'K5', color: 'blue', dash: 2 },
          { type: 'segment', from: 'H6', to: 'K6', color: 'blue', dash: 2 },
          { type: 'segment', from: 'K4', to: 'K5', color: 'blue', dash: 2 },
          { type: 'segment', from: 'K5', to: 'K6', color: 'blue', dash: 2 },
          { type: 'segment', from: 'K6', to: 'K1', color: 'blue', dash: 2 },

          // Labels
          { type: 'text', coords: [0.0, 2.8], content: '5 cm' },
          { type: 'text', coords: [-2.5, 0.0], content: '7 cm' },
          { type: 'text', coords: [5.2, 0.4], content: '14 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Determine the area of the regular hexagon base. Divide the regular hexagon into two identical trapezoids with parallel bases of 5 cm and 10 cm, and height of 3.5 cm each.',
        workingOut: '\\\\( A = 2 \\\\times \\\\left[ \\\\frac{1}{2} \\\\times (5 + 10) \\\\times 3.5 \\\\right] = 52.5\\\\text{ cm}^2 \\\\)',
        graphData: null
      },
      {
        explanation: 'Multiply the base area by the length of the prism.',
        workingOut: '\\\\( V = 52.5 \\\\times 14 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the final volume.',
        workingOut: '\\\\( V = 735\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 4a. Base area of prism: volume 240 cm^3, height 8 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q4a',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Find the area of the base of a prism whose volume is \\(240\\\\text{ cm}^3\\), given that its height is \\(8\\\\text{ cm}\\).',
    opts: [
      { text: '\\(30\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(40\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(20\\\\text{ cm}^2\\)', imageUrl: '' },
      { text: '\\(15\\\\text{ cm}^2\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use Base Area = Volume / Height.',
    solution: 'Rearrange the prism volume formula \\(V = A \\\\times h\\) to solve for base area \\(A\\):\\n\\[A = \\\\frac{V}{h} = \\\\frac{240}{8} = 30\\\\text{ cm}^2\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'State the relationship between volume, base area, and height of a prism.',
        workingOut: '\\\\( V = A \\\\times h \\\\)',
        graphData: null
      },
      {
        explanation: 'Rearrange the formula to solve for the base area A.',
        workingOut: '\\\\( A = \\\\frac{V}{h} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the given values \\(V = 240\\\\text{ cm}^3\\) and \\(h = 8\\\\text{ cm}\\) to find the area.',
        workingOut: '\\\\( A = \\\\frac{240}{8} = 30\\\\text{ cm}^2 \\\\)',
        graphData: null
      }
    ]
  },
  // 4b. Height of rectangular prism: square base 8.5 cm, volume 255 cm^3
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q4b',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Find the height of a rectangular prism if its square base has sides of length \\(8.5\\\\text{ cm}\\) and its volume is \\(255\\\\text{ cm}^3\\). (Round to two decimal places.)',
    opts: [
      { text: '\\(3.53\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(4.15\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(3.00\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(2.88\\\\text{ cm}\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Base area of a square is side^2. Height = Volume / Base Area.',
    solution: 'Calculate the base area of the square base:\\n\\[A = \\\\text{side}^2 = 8.5^2 = 72.25\\\\text{ cm}^2\\]\\nDivide the volume by the base area to find the height:\\n\\[h = \\\\frac{V}{A} = \\\\frac{255}{72.25} \\\\approx 3.529\\\\text{ cm} \\\\implies 3.53\\\\text{ cm}\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Calculate the area of the square base.',
        workingOut: '\\\\( A = 8.5^2 = 72.25\\\\text{ cm}^2  \\\\)',
        graphData: null
      },
      {
        explanation: 'Write the formula for the height of the prism.',
        workingOut: '\\\\( h = \\\\frac{V}{A} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute \\(V = 255\\\\text{ cm}^3\\) and \\(A = 72.25\\\\text{ cm}^2\\) to compute the height.',
        workingOut: '\\\\( h = \\\\frac{255}{72.25} \\\\approx 3.53\\\\text{ cm}  \\\\)',
        graphData: null
      }
    ]
  },
  // 4c. Length of side of a cube: volume 15.625 m^3
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q4c',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Find the length of the side of a cube whose volume is \\(15.625\\\\text{ m}^3\\).',
    opts: [
      { text: '\\(2.5\\\\text{ m}\\)', imageUrl: '' },
      { text: '\\(3.5\\\\text{ m}\\)', imageUrl: '' },
      { text: '\\(1.5\\\\text{ m}\\)', imageUrl: '' },
      { text: '\\(4.5\\\\text{ m}\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Side = cube root of Volume.',
    solution: 'Use the cube volume formula \\(V = s^3\\). Solve for side length \\(s\\) by taking the cube root of the volume:\\n\\[s = \\\\sqrt[3]{V} = \\\\sqrt[3]{15.625} = 2.5\\\\text{ m}\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Relate side length to the volume of a cube.',
        workingOut: '\\\\( V = s^3 \\\\)',
        graphData: null
      },
      {
        explanation: 'Take the cube root of both sides to isolate s.',
        workingOut: '\\\\( s = \\\\sqrt[3]{V} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute \\(V = 15.625\\\\text{ m}^3\\) and solve.',
        workingOut: '\\\\( s = \\\\sqrt[3]{15.625} = 2.5\\\\text{ m} \\\\)',
        graphData: null
      }
    ]
  },
  // 4d. Dimensions of a square-based prism: height is twice side length, volume 1228.25 mm^3
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q4d',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Find the side length of the square base of a square-based prism if its height is twice the side length of the square base and its volume is \\(1228.25\\\\text{ mm}^3\\). (Round to one decimal place.)',
    opts: [
      { text: '\\(8.5\\\\text{ mm}\\)', imageUrl: '' },
      { text: '\\(7.2\\\\text{ mm}\\)', imageUrl: '' },
      { text: '\\(9.1\\\\text{ mm}\\)', imageUrl: '' },
      { text: '\\(6.8\\\\text{ mm}\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Let side be x, then height is 2x. Volume = x^2 * 2x = 2x^3.',
    solution: 'Let \\(x\\) be the side length of the square base. Then the height of the prism is \\(2x\\).\\nUse the volume formula:\\n\\[V = x^2 \\\\times 2x = 2x^3\\]\\nSubstitute the given volume:\\n\\[2x^3 = 1228.25 \\\\implies x^3 = 614.125\\]\\nSolve for \\(x\\):\\n\\[x = \\\\sqrt[3]{614.125} = 8.5\\\\text{ mm}\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Set up an equation representing the volume with base side length x and height 2x.',
        workingOut: '\\\\( V = x^2 \\\\times 2x = 2x^3 \\\\)',
        graphData: null
      },
      {
        explanation: 'Divide the volume by 2 to solve for \\(x^3\\).',
        workingOut: '\\\\( x^3 = \\\\frac{1228.25}{2} = 614.125 \\\\)',
        graphData: null
      },
      {
        explanation: 'Take the cube root to find x.',
        workingOut: '\\\\( x = \\\\sqrt[3]{614.125} = 8.5\\\\text{ mm} \\\\)',
        graphData: null
      }
    ]
  },
  // 5a. Volume of cylinder: radius=4 cm, height=6 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q5a',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the cylinder with base radius \\(4\\\\text{ cm}\\) and height \\(6\\\\text{ cm}\\). (Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(301.59\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(280.44\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(325.80\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(241.12\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use formula: Volume = pi * r^2 * h.',
    solution: 'Calculate the volume of the cylinder:\\n\\[V = \\\\pi r^2 h = \\\\pi \\\\times 4^2 \\\\times 6 = 96\\\\pi\\\\text{ cm}^3\\]\\nEvaluate the decimal value:\\n\\[96\\\\pi \\\\approx 301.59289\\\\text{ cm}^3 \\\\implies 301.59\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q5a-board',
        boundingbox: [-6, 10, 6, -2],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'O1', coords: [0, 0], visible: false },
          { type: 'point', id: 'O2', coords: [0, 6], visible: false },

          { type: 'point', id: 'A', coords: [-4, 0], visible: false },
          { type: 'point', id: 'B', coords: [4, 0], visible: false },
          { type: 'point', id: 'C', coords: [-4, 6], visible: false },
          { type: 'point', id: 'D', coords: [4, 6], visible: false },

          { type: 'segment', from: 'A', to: 'C', color: 'blue' },
          { type: 'segment', from: 'B', to: 'D', color: 'blue' },

          // Ellipses using curve
          {
            type: 'curve',
            x: function(t) { return 4 * Math.cos(t); },
            y: function(t) { return 0.8 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return 4 * Math.cos(t); },
            y: function(t) { return 0.8 * Math.sin(t); },
            tRange: [0, Math.PI],
            color: 'blue',
            dash: 2
          },
          {
            type: 'curve',
            x: function(t) { return 4 * Math.cos(t); },
            y: function(t) { return 6 + 0.8 * Math.sin(t); },
            tRange: [0, 2 * Math.PI],
            color: 'blue'
          },

          { type: 'segment', from: 'O1', to: 'B', color: 'red', dash: 2 },

          { type: 'text', coords: [1.8, -0.6], content: '4 cm' },
          { type: 'text', coords: [4.8, 3], content: '6 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the radius r and height h.',
        workingOut: '\\\\( r = 4\\\\text{ cm}, \\\\quad h = 6\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute these values into the volume of a cylinder formula: Volume = pi * r^2 * h.',
        workingOut: '\\\\( V = \\\\pi \\\\times 4^2 \\\\times 6 = 96\\\\pi \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the decimal value.',
        workingOut: '\\\\( V \\\\approx 301.59\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 5b. Volume of cylinder: radius=10 cm, height=15 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q5b',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the cylinder with base radius \\(10\\\\text{ cm}\\) and height \\(15\\\\text{ cm}\\). (Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(4712.39\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(4510.50\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(4920.80\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(4280.12\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use formula: Volume = pi * r^2 * h.',
    solution: 'Calculate the volume of the cylinder:\\n\\[V = \\\\pi r^2 h = \\\\pi \\\\times 10^2 \\\\times 15 = 1500\\\\pi\\\\text{ cm}^3\\]\\nEvaluate the decimal value:\\n\\[1500\\\\pi \\\\approx 4712.3889\\\\text{ cm}^3 \\\\implies 4712.39\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q5b-board',
        boundingbox: [-12, 22, 12, -4],
        keepaspectratio: true,
        elements: [
          { type: 'point', id: 'O1', coords: [0, 0], visible: false },
          { type: 'point', id: 'O2', coords: [0, 15], visible: false },

          { type: 'point', id: 'A', coords: [-10, 0], visible: false },
          { type: 'point', id: 'B', coords: [10, 0], visible: false },
          { type: 'point', id: 'C', coords: [-10, 15], visible: false },
          { type: 'point', id: 'D', coords: [10, 15], visible: false },

          { type: 'segment', from: 'A', to: 'C', color: 'blue' },
          { type: 'segment', from: 'B', to: 'D', color: 'blue' },

          // Ellipses using curve
          {
            type: 'curve',
            x: function(t) { return 10 * Math.cos(t); },
            y: function(t) { return 2 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return 10 * Math.cos(t); },
            y: function(t) { return 2 * Math.sin(t); },
            tRange: [0, Math.PI],
            color: 'blue',
            dash: 2
          },
          {
            type: 'curve',
            x: function(t) { return 10 * Math.cos(t); },
            y: function(t) { return 15 + 2 * Math.sin(t); },
            tRange: [0, 2 * Math.PI],
            color: 'blue'
          },

          { type: 'segment', from: 'O1', to: 'B', color: 'red', dash: 2 },

          { type: 'text', coords: [4.5, -1.2], content: '10 cm' },
          { type: 'text', coords: [12.0, 7.5], content: '15 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the radius r and height h.',
        workingOut: '\\\\( r = 10\\\\text{ cm}, \\\\quad h = 15\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute these values into the volume of a cylinder formula: Volume = pi * r^2 * h.',
        workingOut: '\\\\( V = \\\\pi \\\\times 10^2 \\\\times 15 = 1500\\\\pi \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the decimal value.',
        workingOut: '\\\\( V \\\\approx 4712.39\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 5c. Volume of cylinder: horizontal, radius=8 cm, length=10 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q5c',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the horizontal cylinder with radius \\(8\\\\text{ cm}\\) and length \\(10\\\\text{ cm}\\). (Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(2010.62\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(1820.50\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(2240.80\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(1680.12\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use formula: Volume = pi * r^2 * l.',
    solution: 'Calculate the volume of the horizontal cylinder:\\n\\[V = \\\\pi r^2 l = \\\\pi \\\\times 8^2 \\\\times 10 = 640\\\\pi\\\\text{ cm}^3\\]\\nEvaluate the decimal value:\\n\\[640\\\\pi \\\\approx 2010.619\\\\text{ cm}^3 \\\\implies 2010.62\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q5c-board',
        boundingbox: [-2, 6, 12, -6],
        keepaspectratio: true,
        elements: [
          // Left circle center O1(0,0), radius=4, horizontal projection
          // Right circle center O2(8,0), radius=4
          { type: 'point', id: 'O1', coords: [0, 0], visible: false },
          { type: 'point', id: 'O2', coords: [8, 0], visible: false },

          {
            type: 'curve',
            x: function(t) { return 1.2 * Math.cos(t); },
            y: function(t) { return 4 * Math.sin(t); },
            tRange: [0.5 * Math.PI, 1.5 * Math.PI],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return 1.2 * Math.cos(t); },
            y: function(t) { return 4 * Math.sin(t); },
            tRange: [-0.5 * Math.PI, 0.5 * Math.PI],
            color: 'blue',
            dash: 2
          },

          {
            type: 'curve',
            x: function(t) { return 8 + 1.2 * Math.cos(t); },
            y: function(t) { return 4 * Math.sin(t); },
            tRange: [0, 2 * Math.PI],
            color: 'blue'
          },

          // Connectors
          { type: 'point', id: 'B_R', coords: [8, 4], visible: false },
          { type: 'segment', from: 'O1', to: 'O2', color: 'red', dash: 2 },
          { type: 'segment', from: 'O2', to: 'B_R', color: 'red', dash: 2 },

          { type: 'point', id: 'T1', coords: [0, 4], visible: false },
          { type: 'point', id: 'T2', coords: [8, 4], visible: false },
          { type: 'point', id: 'B1', coords: [0, -4], visible: false },
          { type: 'point', id: 'B2', coords: [8, -4], visible: false },

          { type: 'segment', from: 'T1', to: 'T2', color: 'blue' },
          { type: 'segment', from: 'B1', to: 'B2', color: 'blue' },

          // Labels
          { type: 'text', coords: [4.0, -0.6], content: '10 cm' },
          { type: 'text', coords: [8.8, 2.0], content: '8 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the radius r and length l.',
        workingOut: '\\\\( r = 8\\\\text{ cm}, \\\\quad l = 10\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute these values into the volume of a cylinder formula: Volume = pi * r^2 * l.',
        workingOut: '\\\\( V = \\\\pi \\\\times 8^2 \\\\times 10 = 640\\\\pi \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the decimal value.',
        workingOut: '\\\\( V \\\\approx 2010.62\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 5d. Volume of cylinder: horizontal length=20 cm, radius=2 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q5d',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the horizontal cylinder with radius \\(2\\\\text{ cm}\\) and length \\(20\\\\text{ cm}\\). (Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(251.33\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(220.45\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(280.12\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(198.88\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use formula: Volume = pi * r^2 * l.',
    solution: 'Calculate the volume of the horizontal cylinder:\\n\\[V = \\\\pi r^2 l = \\\\pi \\\\times 2^2 \\\\times 20 = 80\\\\pi\\\\text{ cm}^3\\]\\nEvaluate the decimal value:\\n\\[80\\\\pi \\\\approx 251.327\\\\text{ cm}^3 \\\\implies 251.33\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q5d-board',
        boundingbox: [-2, 4, 12, -4],
        keepaspectratio: true,
        elements: [
          // Left circle center O1(0,0), radius=2, horizontal projection
          // Right circle center O2(8,0), radius=2
          { type: 'point', id: 'O1', coords: [0, 0], visible: false },
          { type: 'point', id: 'O2', coords: [8, 0], visible: false },

          {
            type: 'curve',
            x: function(t) { return 0.8 * Math.cos(t); },
            y: function(t) { return 2 * Math.sin(t); },
            tRange: [0.5 * Math.PI, 1.5 * Math.PI],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return 0.8 * Math.cos(t); },
            y: function(t) { return 2 * Math.sin(t); },
            tRange: [-0.5 * Math.PI, 0.5 * Math.PI],
            color: 'blue',
            dash: 2
          },

          {
            type: 'curve',
            x: function(t) { return 8 + 0.8 * Math.cos(t); },
            y: function(t) { return 2 * Math.sin(t); },
            tRange: [0, 2 * Math.PI],
            color: 'blue'
          },

          // Connectors
          { type: 'point', id: 'B_R2', coords: [8, 2], visible: false },
          { type: 'segment', from: 'O1', to: 'O2', color: 'red', dash: 2 },
          { type: 'segment', from: 'O2', to: 'B_R2', color: 'red', dash: 2 },

          { type: 'point', id: 'T1', coords: [0, 2], visible: false },
          { type: 'point', id: 'T2', coords: [8, 2], visible: false },
          { type: 'point', id: 'B1', coords: [0, -2], visible: false },
          { type: 'point', id: 'B2', coords: [8, -2], visible: false },

          { type: 'segment', from: 'T1', to: 'T2', color: 'blue' },
          { type: 'segment', from: 'B1', to: 'B2', color: 'blue' },

          // Labels
          { type: 'text', coords: [4.0, -0.4], content: '20 cm' },
          { type: 'text', coords: [8.8, 1.0], content: '2 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the radius r and length l.',
        workingOut: '\\\\( r = 2\\\\text{ cm}, \\\\quad l = 20\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute these values into the volume of a cylinder formula: Volume = pi * r^2 * l.',
        workingOut: '\\\\( V = \\\\pi \\\\times 2^2 \\\\times 20 = 80\\\\pi \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the decimal value.',
        workingOut: '\\\\( V \\\\approx 251.33\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 5e. Volume of cylinder: half cylinder base radius=8 cm, length=12 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q5e',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the half-cylinder with base radius \\(8\\\\text{ cm}\\) and length \\(12\\\\text{ cm}\\). (Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(1206.37\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(1105.50\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(1312.80\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(980.12\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Volume of half-cylinder = 0.5 * pi * r^2 * l.',
    solution: 'Calculate the volume of the half-cylinder:\\n\\[V = \\\\frac{1}{2} \\\\times \\\\pi r^2 l = \\\\frac{1}{2} \\\\times \\\\pi \\\\times 8^2 \\\\times 12 = 384\\\\pi\\\\text{ cm}^3\\]\\nEvaluate the decimal value:\\n\\[384\\\\pi \\\\approx 1206.371\\\\text{ cm}^3 \\\\implies 1206.37\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q5e-board',
        boundingbox: [-6, 6, 12, -6],
        keepaspectratio: true,
        elements: [
          // Front semicircle (facing down)
          {
            type: 'curve',
            x: function(t) { return 4 * Math.cos(t); },
            y: function(t) { return 1.8 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue'
          },
          // Back semicircle (shifted)
          {
            type: 'curve',
            x: function(t) { return 4 + 4 * Math.cos(t); },
            y: function(t) { return 2.5 + 1.8 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue',
            dash: 2
          },

          { type: 'point', id: 'FL', coords: [-4, 0], visible: false },
          { type: 'point', id: 'FR', coords: [4, 0], visible: false },
          { type: 'point', id: 'BL', coords: [0, 2.5], visible: false },
          { type: 'point', id: 'BR', coords: [8, 2.5], visible: false },

          { type: 'segment', from: 'FL', to: 'FR', color: 'blue' },
          { type: 'segment', from: 'BL', to: 'BR', color: 'blue', dash: 2 },

          { type: 'segment', from: 'FL', to: 'BL', color: 'blue' },
          { type: 'segment', from: 'FR', to: 'BR', color: 'blue' },

          // Diameter indicators
          { type: 'segment', from: 'FL', to: 'FR', color: 'red', dash: 2 },

          // Labels
          { type: 'text', coords: [0, 0.5], content: '16 cm' },
          { type: 'text', coords: [2.5, 2.0], content: '12 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the base radius r and length l.',
        workingOut: '\\\\( r = 8\\\\text{ cm}, \\\\quad l = 12\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Apply the formula: Volume = 0.5 * pi * r^2 * length.',
        workingOut: '\\\\( V = 0.5 \\\\times \\\\pi \\\\times 8^2 \\\\times 12 = 384\\\\pi \\\\)',
        graphData: null
      },
      {
        explanation: 'Compute the decimal value.',
        workingOut: '\\\\( V \\\\approx 1206.37\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 5f. Volume of cylinder: half cylinder base radius=20 cm, length=30 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q5f',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the half-cylinder with base radius \\(20\\\\text{ cm}\\) and length \\(30\\\\text{ cm}\\). (Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(18849.56\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(16450.20\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(19220.80\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(15400.12\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Volume of half-cylinder = 0.5 * pi * r^2 * l.',
    solution: 'Calculate the volume of the half-cylinder:\\n\\[V = \\\\frac{1}{2} \\\\times \\\\pi r^2 l = \\\\frac{1}{2} \\\\times \\\\pi \\\\times 20^2 \\\\times 30 = 6000\\\\pi\\\\text{ cm}^3\\]\\nEvaluate the decimal value:\\n\\[6000\\\\pi \\\\approx 18849.5559\\\\text{ cm}^3 \\\\implies 18849.56\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q5f-board',
        boundingbox: [-6, 6, 12, -6],
        keepaspectratio: true,
        elements: [
          // Front semicircle (facing down)
          {
            type: 'curve',
            x: function(t) { return 4 * Math.cos(t); },
            y: function(t) { return 1.8 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue'
          },
          // Back semicircle (shifted)
          {
            type: 'curve',
            x: function(t) { return 4 + 4 * Math.cos(t); },
            y: function(t) { return 2.5 + 1.8 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue',
            dash: 2
          },

          { type: 'point', id: 'FL', coords: [-4, 0], visible: false },
          { type: 'point', id: 'FR', coords: [4, 0], visible: false },
          { type: 'point', id: 'BL', coords: [0, 2.5], visible: false },
          { type: 'point', id: 'BR', coords: [8, 2.5], visible: false },

          { type: 'segment', from: 'FL', to: 'FR', color: 'blue' },
          { type: 'segment', from: 'BL', to: 'BR', color: 'blue', dash: 2 },

          { type: 'segment', from: 'FL', to: 'BL', color: 'blue' },
          { type: 'segment', from: 'FR', to: 'BR', color: 'blue' },

          // Diameter indicators
          { type: 'segment', from: 'FL', to: 'FR', color: 'red', dash: 2 },

          // Labels
          { type: 'text', coords: [0, 0.5], content: '40 cm' },
          { type: 'text', coords: [2.5, 2.0], content: '30 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the base radius r and length l.',
        workingOut: '\\\\( r = 20\\\\text{ cm}, \\\\quad l = 30\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Apply the formula: Volume = 0.5 * pi * r^2 * length.',
        workingOut: '\\\\( V = 0.5 \\\\times \\\\pi \\\\times 20^2 \\\\times 30 = 6000\\\\pi \\\\)',
        graphData: null
      },
      {
        explanation: 'Compute the decimal value.',
        workingOut: '\\\\( V \\\\approx 18849.56\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 5g. Volume of cylinder: 270 deg sector radius=4 cm, height=2 cm
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q5g',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the volume of the 270-degree cylinder sector block with the following dimensions:\\n- Radius = \\(4\\\\text{ cm}\\)\\n- Height = \\(2\\\\text{ cm}\\). (Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(75.40\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(68.50\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(82.80\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(58.12\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Volume of a 270 deg cylinder sector = 270/360 * pi * r^2 * h.',
    solution: 'Calculate the volume using the sector fraction:\\n\\[V = \\\\frac{270}{360} \\\\times \\\\pi r^2 h = \\\\frac{3}{4} \\\\times \\\\pi \\\\times 4^2 \\\\times 2 = 24\\\\pi\\\\text{ cm}^3\\]\\nEvaluate the decimal value:\\n\\[24\\\\pi \\\\approx 75.398\\\\text{ cm}^3 \\\\implies 75.40\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q5g-board',
        boundingbox: [-10, 8, 10, -8],
        keepaspectratio: true,
        elements: [
          // Bottom center and top center
          { type: 'point', id: 'O1', coords: [0, -3], visible: false },
          { type: 'point', id: 'O2', coords: [0, 1], visible: false },

          // Outer points
          { type: 'point', id: 'P180', coords: [-6, -3], visible: false },
          { type: 'point', id: 'Q180', coords: [-6, 1], visible: false },
          { type: 'point', id: 'P0', coords: [6, -3], visible: false },
          { type: 'point', id: 'Q0', coords: [6, 1], visible: false },
          { type: 'point', id: 'P270', coords: [0, -4.8], visible: false },
          { type: 'point', id: 'Q270', coords: [0, -0.8], visible: false },
          { type: 'point', id: 'P90', coords: [0, -1.2], visible: false },
          { type: 'point', id: 'Q90', coords: [0, 2.8], visible: false },

          // Flat cuts
          { type: 'segment', from: 'O1', to: 'P180', color: 'blue' },
          { type: 'segment', from: 'O1', to: 'P270', color: 'blue' },
          { type: 'segment', from: 'O2', to: 'Q180', color: 'blue' },
          { type: 'segment', from: 'O2', to: 'Q270', color: 'blue' },

          // Vertical lines
          { type: 'segment', from: 'O1', to: 'O2', color: 'blue' },
          { type: 'segment', from: 'P180', to: 'Q180', color: 'blue' },
          { type: 'segment', from: 'P270', to: 'Q270', color: 'blue' },
          { type: 'segment', from: 'P0', to: 'Q0', color: 'blue' },

          // Parametric curves
          {
            type: 'curve',
            x: function(t) { return 6 * Math.cos(t); },
            y: function(t) { return -3 + 1.8 * Math.sin(t); },
            tRange: [Math.PI, 2.5 * Math.PI],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return 6 * Math.cos(t); },
            y: function(t) { return 1 + 1.8 * Math.sin(t); },
            tRange: [Math.PI, 2.5 * Math.PI],
            color: 'blue'
          },

          // Hidden back lines
          { type: 'segment', from: 'O1', to: 'P0', color: 'blue', dash: 2 },
          { type: 'segment', from: 'O2', to: 'Q0', color: 'blue' },
          {
            type: 'curve',
            x: function(t) { return 6 * Math.cos(t); },
            y: function(t) { return -3 + 1.8 * Math.sin(t); },
            tRange: [0.5 * Math.PI, Math.PI],
            color: 'blue',
            dash: 2
          },
          {
            type: 'curve',
            x: function(t) { return 6 * Math.cos(t); },
            y: function(t) { return 1 + 1.8 * Math.sin(t); },
            tRange: [0.5 * Math.PI, Math.PI],
            color: 'blue',
            dash: 2
          },
          { type: 'segment', from: 'P90', to: 'Q90', color: 'blue', dash: 2 },

          // Dimension Labels
          { type: 'text', coords: [-4.2, -1.0], content: '2 cm' },
          { type: 'text', coords: [-3.2, -3.6], content: '4 cm' },
          { type: 'text', coords: [0.8, -1.8], content: '270°' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'State the radius r, height h, and sector angle.',
        workingOut: '\\\\( r = 4\\\\text{ cm}, \\\\quad h = 2\\\\text{ cm}, \\\\quad \\\\theta = 270^{\\\\circ} \\\\)',
        graphData: null
      },
      {
        explanation: 'Apply the sector volume formula: Volume = (270/360) * pi * r^2 * h.',
        workingOut: '\\\\( V = \\\\frac{3}{4} \\\\times \\\\pi \\\\times 4^2 \\\\times 2 = 24\\\\pi \\\\)',
        graphData: null
      },
      {
        explanation: 'Compute the decimal value.',
        workingOut: '\\\\( V \\\\approx 75.40\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 5h. Volume of cylinder: T-shaped / composite cylinder
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q5h',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'Calculate the total volume of the composite solid consisting of two cylinders:\\n- Top cylinder: Radius = \\(5\\\\text{ cm}\\), Height = \\(2\\\\text{ cm}\\)\\n- Bottom cylinder: Radius = \\(2\\\\text{ cm}\\), Height = \\(6\\\\text{ cm}\\). (Round the final answer to two decimal places.)',
    opts: [
      { text: '\\(232.48\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(212.50\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(248.80\\\\text{ cm}^3\\)', imageUrl: '' },
      { text: '\\(198.12\\\\text{ cm}^3\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Add the volume of the top cylinder to the volume of the bottom cylinder.',
    solution: 'Calculate the volume of the top cylinder:\\n\\[V_{\\\\text{top}} = \\\\pi r_1^2 h_1 = \\\\pi \\\\times 5^2 \\\\times 2 = 50\\\\pi\\\\text{ cm}^3\\]\\nCalculate the volume of the bottom cylinder:\\n\\[V_{\\\\text{bottom}} = \\\\pi r_2^2 h_2 = \\\\pi \\\\times 2^2 \\\\times 6 = 24\\\\pi\\\\text{ cm}^3\\]\\nSum the volumes to get the total volume:\\n\\[V = 50\\\\pi + 24\\\\pi = 74\\\\pi \\\\approx 232.477\\\\text{ cm}^3 \\\\implies 232.48\\\\text{ cm}^3\\]',
    graphData: {
      jsxGraph: {
        id: 'y9-16d-q5h-board',
        boundingbox: [-8, 12, 8, -4],
        keepaspectratio: true,
        elements: [
          // Centers (isometric perspective)
          { type: 'point', id: 'O1', coords: [0, 0], visible: false },  // Bottom circle center
          { type: 'point', id: 'O2', coords: [0, 6], visible: false },  // Middle boundary center
          { type: 'point', id: 'O3', coords: [0, 8], visible: false },  // Top circle center

          // Outer points of the bottom cylinder (radius = 2, height = 6)
          { type: 'point', id: 'A', coords: [-2, 0], visible: false },
          { type: 'point', id: 'B', coords: [2, 0], visible: false },
          { type: 'point', id: 'C', coords: [-2, 6], visible: false },
          { type: 'point', id: 'D', coords: [2, 6], visible: false },

          // Outer points of the top cylinder (radius = 5, height = 2)
          { type: 'point', id: 'E', coords: [-5, 6], visible: false },
          { type: 'point', id: 'F', coords: [5, 6], visible: false },
          { type: 'point', id: 'G', coords: [-5, 8], visible: false },
          { type: 'point', id: 'H', coords: [5, 8], visible: false },

          // Bottom cylinder lines
          { type: 'segment', from: 'A', to: 'C', color: 'blue' },
          { type: 'segment', from: 'B', to: 'D', color: 'blue' },
          {
            type: 'curve',
            x: function(t) { return 2 * Math.cos(t); },
            y: function(t) { return 0.6 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return 2 * Math.cos(t); },
            y: function(t) { return 0.6 * Math.sin(t); },
            tRange: [0, Math.PI],
            color: 'blue',
            dash: 2
          },

          // Top cylinder lines
          { type: 'segment', from: 'E', to: 'G', color: 'blue' },
          { type: 'segment', from: 'F', to: 'H', color: 'blue' },
          {
            type: 'curve',
            x: function(t) { return 5 * Math.cos(t); },
            y: function(t) { return 6 + 1.5 * Math.sin(t); },
            tRange: [Math.PI, 2 * Math.PI],
            color: 'blue'
          },
          {
            type: 'curve',
            x: function(t) { return 5 * Math.cos(t); },
            y: function(t) { return 6 + 1.5 * Math.sin(t); },
            tRange: [0, Math.PI],
            color: 'blue',
            dash: 2
          },
          {
            type: 'curve',
            x: function(t) { return 5 * Math.cos(t); },
            y: function(t) { return 8 + 1.5 * Math.sin(t); },
            tRange: [0, 2 * Math.PI],
            color: 'blue'
          },

          // Radius indicators
          { type: 'segment', from: 'O1', to: 'B', color: 'red', dash: 2 },
          { type: 'segment', from: 'O3', to: 'H', color: 'red', dash: 2 },

          // Labels
          { type: 'text', coords: [1.0, -0.6], content: '4 cm' },
          { type: 'text', coords: [2.5, 8.8], content: '10 cm' },
          { type: 'text', coords: [2.6, 3.0], content: '6 cm' },
          { type: 'text', coords: [5.6, 7.0], content: '2 cm' }
        ]
      }
    },
    solutionSteps: [
      {
        explanation: 'Calculate the volume of the top cylinder (diameter 10 cm, so radius 5 cm).',
        workingOut: '\\\\( V_{\\\\text{top}} = \\\\pi r_1^2 h_1 = \\\\pi (5)^2 (2) = 50\\\\pi\\\\text{ cm}^3 \\\\)',
        graphData: null
      },
      {
        explanation: 'Calculate the volume of the bottom cylinder (diameter 4 cm, so radius 2 cm).',
        workingOut: '\\\\( V_{\\\\text{bottom}} = \\\\pi r_2^2 h_2 = \\\\pi (2)^2 (6) = 24\\\\pi\\\\text{ cm}^3 \\\\)',
        graphData: null
      },
      {
        explanation: 'Sum the two volumes to get the total volume and calculate the decimal approximation.',
        workingOut: '\\\\( V = 50\\\\pi + 24\\\\pi = 74\\\\pi \\\\approx 232.48\\\\text{ cm}^3 \\\\)',
        graphData: null
      }
    ]
  },
  // 6a. Cylinder: volume 200 cm^3, radius 4 cm -> find height
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q6a',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'A cylinder with base radius \\(4\\\\text{ cm}\\) has a volume of \\(200\\\\text{ cm}^3\\). Find its height. (Round to two decimal places.)',
    opts: [
      { text: '\\(3.98\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(4.12\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(3.56\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(4.50\\\\text{ cm}\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use formula h = Volume / (pi * radius^2).',
    solution: 'Rearrange the cylinder volume formula \\(V = \\\\pi r^2 h\\) to solve for height \\(h\\):\\n\\[h = \\\\frac{V}{\\\\pi r^2} = \\\\frac{200}{\\\\pi \\\\times 4^2} = \\\\frac{200}{16\\\\pi} \\\\approx 3.978\\\\text{ cm} \\\\implies 3.98\\\\text{ cm}\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'State the volume formula for a cylinder and identify the given variables.',
        workingOut: '\\\\( V = \\\\pi r^2 h, \\\\quad V = 200\\\\text{ cm}^3, \\\\quad r = 4\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Rearrange the formula to isolate the height h.',
        workingOut: '\\\\( h = \\\\frac{V}{\\\\pi r^2} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the values and compute the height.',
        workingOut: '\\\\( h = \\\\frac{200}{\\\\pi \\\\times 4^2} = \\\\frac{200}{16\\\\pi} \\\\approx 3.98\\\\text{ cm} \\\\)',
        graphData: null
      }
    ]
  },
  // 6b. Cylinder: height 8 cm, volume 375 cm^3 -> find radius
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q6b',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'A cylinder of height \\(8\\\\text{ cm}\\) has a volume of \\(375\\\\text{ cm}^3\\). Find its base radius. (Round to two decimal places.)',
    opts: [
      { text: '\\(3.86\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(4.12\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(3.54\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(4.45\\\\text{ cm}\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'Use formula r = sqrt(Volume / (pi * height)).',
    solution: 'Rearrange the cylinder volume formula \\(V = \\\\pi r^2 h\\) to solve for base radius \\(r\\):\\n\\[r^2 = \\\\frac{V}{\\\\pi h} = \\\\frac{375}{8\\\\pi} \\\\approx 14.92\\\\text{ cm}^2\\]\\nTake the square root:\\n\\[r = \\\\sqrt{\\\\frac{375}{8\\\\pi}} \\\\approx 3.862\\\\text{ cm} \\\\implies 3.86\\\\text{ cm}\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'State the volume formula and variables given.',
        workingOut: '\\\\( V = \\\\pi r^2 h, \\\\quad V = 375\\\\text{ cm}^3, \\\\quad h = 8\\\\text{ cm} \\\\)',
        graphData: null
      },
      {
        explanation: 'Solve the equation for the square of the radius, \\(r^2\\).',
        workingOut: '\\\\( r^2 = \\\\frac{V}{\\\\pi h} = \\\\frac{375}{8\\\\pi} \\\\approx 14.92 \\\\)',
        graphData: null
      },
      {
        explanation: 'Take the square root of both sides to find the radius r.',
        workingOut: '\\\\( r = \\\\sqrt{\\\\frac{375}{8\\\\pi}} \\\\approx 3.86\\\\text{ cm} \\\\)',
        graphData: null
      }
    ]
  },
  // 6c. Cylinder: volume 1000 cm^3, base radius equals height -> find height
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q6c',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'A cylinder of volume \\(1000\\\\text{ cm}^3\\) is such that its base radius is equal to its height. Find its height. (Round to two decimal places.)',
    opts: [
      { text: '\\(6.83\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(7.12\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(6.20\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(7.50\\\\text{ cm}\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'If r = h, then Volume = pi * h^3. Height = cubeRoot(Volume / pi).',
    solution: 'Given \\(r = h\\). Substitute into the volume formula:\\n\\[V = \\\\pi r^2 h = \\\\pi h^3\\]\\nSubstitute the given volume \\(V = 1000\\\\text{ cm}^3\\):\\n\\[\\\\pi h^3 = 1000 \\\\implies h^3 = \\\\frac{1000}{\\\\pi} \\\\approx 318.31\\]\\nSolve for \\(h\\) by taking the cube root:\\n\\[h = \\\\sqrt[3]{\\\\frac{1000}{\\\\pi}} \\\\approx 6.8278\\\\text{ cm} \\\\implies 6.83\\\\text{ cm}\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Use the condition radius equals height to rewrite the volume equation.',
        workingOut: '\\\\( V = \\\\pi h^3 \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute \\(V = 1000\\\\text{ cm}^3\\) and isolate \\(h^3\\).',
        workingOut: '\\\\( h^3 = \\\\frac{1000}{\\\\pi} \\\\approx 318.31 \\\\)',
        graphData: null
      },
      {
        explanation: 'Take the cube root of both sides to find the height h.',
        workingOut: '\\\\( h = \\\\sqrt[3]{\\\\frac{1000}{\\\\pi}} \\\\approx 6.83\\\\text{ cm} \\\\)',
        graphData: null
      }
    ]
  },
  // 6d. Cylinder: volume 500 cm^3, diameter is equal to height -> find height
  {
    chapterId: 'y9-16',
    chapterTitle: 'Chapter 16: Measurement—areas, volumes and time',
    topicId: 'y9-16d',
    topicCode: '16D',
    topicTitle: 'Volumes',
    year: 'Year 9',
    isManual: true,
    id: 'y9-16d-q6d',
    difficulty: 'hard',
    timeLimit: 120,
    type: 'multiple_choice',
    question: 'A cylinder of volume \\(500\\\\text{ cm}^3\\) is such that its diameter is equal to its height. Find its height. (Round to two decimal places.)',
    opts: [
      { text: '\\(8.60\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(9.12\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(7.85\\\\text{ cm}\\)', imageUrl: '' },
      { text: '\\(8.15\\\\text{ cm}\\)', imageUrl: '' }
    ],
    answer: 0,
    hint: 'If d = h, then r = h/2. Volume = pi * (h/2)^2 * h = (pi * h^3) / 4.',
    solution: 'Given \\(d = h \\\\implies r = \\\\frac{h}{2}\\). Substitute into the volume formula:\\n\\[V = \\\\pi r^2 h = \\\\pi \\\\left(\\\\frac{h}{2}\\\\right)^2 h = \\\\frac{\\\\pi h^3}{4}\\]\\nSubstitute the given volume \\(V = 500\\\\text{ cm}^3\\):\\n\\[\\\\frac{\\\\pi h^3}{4} = 500 \\\\implies \\\\pi h^3 = 2000 \\\\implies h^3 = \\\\frac{2000}{\\\\pi} \\\\approx 636.62\\]\\nSolve for \\(h\\) by taking the cube root:\\n\\[h = \\\\sqrt[3]{\\\\frac{2000}{\\\\pi}} \\\\approx 8.6025\\\\text{ cm} \\\\implies 8.60\\\\text{ cm}\\]',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Relate the radius to the height when diameter equals height, and rewrite the volume formula.',
        workingOut: '\\\\( r = \\\\frac{h}{2} \\\\implies V = \\\\pi \\\\left(\\\\frac{h}{2}\\\\right)^2 h = \\\\frac{\\\\pi h^3}{4} \\\\)',
        graphData: null
      },
      {
        explanation: 'Substitute \\(V = 500\\\\text{ cm}^3\\) and isolate \\(h^3\\).',
        workingOut: '\\\\( h^3 = \\\\frac{2000}{\\\\pi} \\\\approx 636.62 \\\\)',
        graphData: null
      },
      {
        explanation: 'Take the cube root of both sides to find the height h.',
        workingOut: '\\\\( h = \\\\sqrt[3]{\\\\frac{2000}{\\\\pi}} \\\\approx 8.60\\\\text{ cm} \\\\)',
        graphData: null
      }
    ]
  }
];
