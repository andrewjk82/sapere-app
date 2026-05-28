const fs = require('fs');

const questions = [];

const createQ = (id, difficulty, timeLimit, qText, subQs, graphData = null) => {
  questions.push({
    id: `y10-6k-q${id}`,
    type: "short_answer",
    difficulty,
    timeLimit,
    question: qText,
    a: "",
    solution: "",
    solutionSteps: [],
    hint: "",
    t: "Revision",
    graphData,
    subQuestions: subQs.map(sq => ({
      id: `y10-6k-q${id}${sq.id}`,
      type: "short_answer",
      question: sq.q,
      a: sq.a,
      solutionSteps: sq.steps || []
    }))
  });
};

// Q1
createQ(1, "easy", 30, "For a rectangular prism measuring \\( 40 \\) cm \\( \\times \\) \\( 25 \\) cm \\( \\times \\) \\( 15 \\) cm, calculate:", [
  { id: "a", q: "a) the surface area", a: "3950", steps: [{explanation: "SA = 2(lw + lh + wh)", workingOut: "2(40\\times 25 + 40\\times 15 + 25\\times 15) = 3950"}] },
  { id: "b", q: "b) the volume", a: "15000", steps: [{explanation: "V = lwh", workingOut: "40 \\times 25 \\times 15 = 15000"}] }
]);

// Q2
createQ(2, "easy", 30, "A rectangular prism has a surface area of \\( 600 \\) cm\\(^2\\). If its length is \\( 20 \\) cm and its width is \\( 5 \\) cm, calculate the height of the rectangular prism.", [
  { id: "a", q: "Calculate the height.", a: "8", steps: [
    {explanation: "Use SA formula", workingOut: "2(20\\times 5 + 20h + 5h) = 600"},
    {explanation: "Simplify", workingOut: "100 + 25h = 300"},
    {explanation: "Solve for h", workingOut: "25h = 200 \\Rightarrow h = 8"}
  ]}
]);

// Q3
createQ(3, "easy", 30, "A rectangular prism has a volume of \\( 840 \\) cm\\(^3\\). If its length is \\( 14 \\) cm and its width is \\( 10 \\) cm, calculate the height of the rectangular prism.", [
  { id: "a", q: "Calculate the height.", a: "6", steps: [
    {explanation: "Use Volume formula", workingOut: "14 \\times 10 \\times h = 840"},
    {explanation: "Solve for h", workingOut: "140h = 840 \\Rightarrow h = 6"}
  ]}
]);

// Q4
createQ(4, "easy", 30, "The cross-section \\( ABCD \\) of the prism shown is an isosceles trapezium with \\( AB = 10 \\) cm, \\( DC = 22 \\) cm, \\( AD = BC = 10 \\) cm and \\( AE = 25 \\) cm.\n\nCalculate:", [
  { id: "a", q: "a) the area of \\( ABCD \\)", a: "128", steps: [
    {explanation: "Find the height of the trapezium", workingOut: "\\text{Height} = \\sqrt{10^2 - 6^2} = 8"},
    {explanation: "Area formula", workingOut: "\\frac{1}{2}(10 + 22) \\times 8 = 128"}
  ]},
  { id: "b", q: "b) the surface area of the prism", a: "1556", steps: [
    {explanation: "Perimeter of trapezium", workingOut: "10 + 22 + 10 + 10 = 52"},
    {explanation: "SA = 2(Base Area) + (Perimeter \\(\\times\\) length)", workingOut: "2(128) + 52(25) = 256 + 1300 = 1556"}
  ]},
  { id: "c", q: "c) the volume of the prism", a: "3200", steps: [
    {explanation: "Volume = Area of cross-section \\(\\times\\) length", workingOut: "128 \\times 25 = 3200"}
  ]}
], {
  geometry: {
    width: 250,
    points: {
      "D": [0,0], "C": [22,0], "A": [6, 8], "B": [16, 8],
      "H": [10,12], "G": [32,12], "E": [16,20], "F": [26,20]
    },
    segments: [
      {"from":"D","to":"C"}, {"from":"C","to":"B"}, {"from":"B","to":"A"}, {"from":"A","to":"D"},
      {"from":"H","to":"G", "dashed":true}, {"from":"G","to":"F"}, {"from":"F","to":"E"}, {"from":"E","to":"H", "dashed":true},
      {"from":"D","to":"H", "dashed":true}, {"from":"C","to":"G"}, {"from":"B","to":"F"}, {"from":"A","to":"E"}
    ]
  }
});

// Q5
createQ(5, "easy", 30, "A cylindrical water tank stands on its circular base. It has a diameter of \\( 4 \\) m and a height of \\( 2.5 \\) m.", [
  { id: "a", q: "a) Calculate the volume of the tank, to the nearest litre.", a: "31416", steps: [
    {explanation: "Radius is half of diameter", workingOut: "r = 2"},
    {explanation: "Volume in m\\(^3\\)", workingOut: "\\pi \\times 2^2 \\times 2.5 = 10\\pi \\approx 31.4159 \\text{ m}^3"},
    {explanation: "Convert to litres", workingOut: "31.4159 \\times 1000 = 31416 \\text{ L}"}
  ]},
  { id: "b", q: "b) Calculate the depth of water in the tank, to the nearest centimetre, when it contains \\( 5000 \\) litres of water.", a: "40", steps: [
    {explanation: "Convert 5000 L to m\\(^3\\)", workingOut: "5 \\text{ m}^3"},
    {explanation: "Use volume formula", workingOut: "\\pi \\times 2^2 \\times d = 5"},
    {explanation: "Solve for d", workingOut: "d = \\frac{5}{4\\pi} \\approx 0.39789 \\text{ m} = 40 \\text{ cm}"}
  ]}
]);

// Q6
createQ(6, "easy", 30, "Find exact answers to these questions (leaving \\( \\pi \\) in your answer if necessary).", [
  { id: "a", q: "a) A square-based pyramid has base side length \\( 14 \\) cm and perpendicular height \\( 24 \\) cm.\ni) Calculate the surface area", a: "896", steps: [
    {explanation: "Find slant height", workingOut: "\\sqrt{7^2 + 24^2} = \\sqrt{625} = 25"},
    {explanation: "Surface area", workingOut: "14^2 + 4 \\times (\\frac{1}{2} \\times 14 \\times 25) = 196 + 700 = 896"}
  ]},
  { id: "b", q: "ii) Calculate the volume", a: "1568", steps: [
    {explanation: "Volume formula", workingOut: "\\frac{1}{3} \\times 14^2 \\times 24 = 1568"}
  ]},
  { id: "c", q: "b) A cone has a radius of \\( 5 \\) cm and a slant height of \\( 13 \\) cm.\ni) Calculate the exact surface area", a: "90\\pi", steps: [
    {explanation: "Surface area", workingOut: "\\pi r^2 + \\pi r l = 25\\pi + 5(13)\\pi = 90\\pi"}
  ]},
  { id: "d", q: "ii) Calculate the exact volume", a: "100\\pi", steps: [
    {explanation: "Find height", workingOut: "h = \\sqrt{13^2 - 5^2} = 12"},
    {explanation: "Volume formula", workingOut: "\\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (25)(12) = 100\\pi"}
  ]}
]);

// Q7
createQ(7, "medium", 90, "In the pyramid \\( VABCD \\) shown, \\( VB \\) is perpendicular to rectangle \\( ABCD \\), \\( AB = 15 \\) m, \\( BC = 8 \\) m and \\( VB = 6 \\) m.", [
  { id: "a", q: "a) Calculate the surface area of the pyramid in m\\(^2\\), correct to one decimal place.", a: "328.6", steps: [
    {explanation: "Area of base ABCD", workingOut: "15 \\times 8 = 120"},
    {explanation: "Area of VBC (right-angled at B)", workingOut: "\\frac{1}{2} \\times 8 \\times 6 = 24"},
    {explanation: "Area of VBA (right-angled at B)", workingOut: "\\frac{1}{2} \\times 15 \\times 6 = 45"},
    {explanation: "Area of VDC (VC is perpendicular to DC)", workingOut: "VC = \\sqrt{6^2 + 8^2} = 10 \\Rightarrow \\text{Area} = \\frac{1}{2} \\times 15 \\times 10 = 75"},
    {explanation: "Area of VAD (VA is perpendicular to AD)", workingOut: "VA = \\sqrt{6^2 + 15^2} = \\sqrt{261} \\Rightarrow \\text{Area} = \\frac{1}{2} \\times 8 \\times \\sqrt{261} = 4\\sqrt{261} \\approx 64.6"},
    {explanation: "Total surface area", workingOut: "120 + 24 + 45 + 75 + 64.6 = 328.6"}
  ]},
  { id: "b", q: "b) Calculate the volume of the pyramid.", a: "240", steps: [
    {explanation: "Volume formula", workingOut: "\\frac{1}{3} \\times \\text{Base Area} \\times \\text{height} = \\frac{1}{3} \\times 120 \\times 6 = 240"}
  ]}
], {
  geometry: {
    width: 250,
    points: {
      "D": [0,0], "C": [15,0], "A": [6,5], "B": [21,5], "V": [21,15]
    },
    segments: [
      {"from":"D","to":"C"}, {"from":"C","to":"B"}, {"from":"B","to":"A", "dashed":true}, {"from":"A","to":"D", "dashed":true},
      {"from":"V","to":"A", "dashed":true}, {"from":"V","to":"B"}, {"from":"V","to":"C"}, {"from":"V","to":"D"}
    ]
  }
});

// Q8
createQ(8, "medium", 90, "The curved surface area of a cone is \\( 65\\pi \\) cm\\(^2\\) and the area of the circular base is \\( 25\\pi \\) cm\\(^2\\).", [
  { id: "a", q: "a) Calculate the radius of the cone.", a: "5", steps: [
    {explanation: "Base area", workingOut: "\\pi r^2 = 25\\pi \\Rightarrow r^2 = 25 \\Rightarrow r = 5"}
  ]},
  { id: "b", q: "b) Calculate the exact perpendicular height of the cone.", a: "12", steps: [
    {explanation: "Curved surface area", workingOut: "\\pi r l = 65\\pi \\Rightarrow 5l = 65 \\Rightarrow l = 13"},
    {explanation: "Use Pythagoras to find height", workingOut: "h = \\sqrt{13^2 - 5^2} = 12"}
  ]},
  { id: "c", q: "c) Calculate the volume of the cone, correct to the nearest cm\\(^3\\).", a: "314", steps: [
    {explanation: "Volume formula", workingOut: "V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (25)(12) = 100\\pi"},
    {explanation: "Calculate to nearest whole number", workingOut: "100\\pi \\approx 314.159 \\approx 314"}
  ]}
]);

// Q9
createQ(9, "medium", 90, "A storage tank is constructed as a cylinder with a hemisphere at each end of the cylinder. The radius of the cylinder is \\( 2 \\) m and the overall length of the tank is \\( 10 \\) m.\n\nCalculate (correct to 1 decimal place):", [
  { id: "a", q: "a) the surface area of the tank in m\\(^2\\)", a: "125.7", steps: [
    {explanation: "Length of cylindrical part", workingOut: "10 - 2 - 2 = 6 \\text{ m}"},
    {explanation: "Two hemispheres make one sphere", workingOut: "\\text{SA} = 4\\pi(2^2) + 2\\pi(2)(6) = 16\\pi + 24\\pi = 40\\pi"},
    {explanation: "Calculate to 1 decimal place", workingOut: "40\\pi \\approx 125.7"}
  ]},
  { id: "b", q: "b) the volume of the tank", a: "108.9", steps: [
    {explanation: "Volume of sphere + cylinder", workingOut: "\\frac{4}{3}\\pi(2^3) + \\pi(2^2)(6) = \\frac{32\\pi}{3} + 24\\pi = \\frac{104\\pi}{3}"},
    {explanation: "Calculate to 1 decimal place", workingOut: "\\frac{104\\pi}{3} \\approx 108.9"}
  ]}
]);

// Q10
createQ(10, "medium", 90, "Fill in the missing entries for the scale factors.", [
  { id: "a", q: "a) If Length scale factor is \\( 4 \\), find the Area and Volume scale factors.", a: "16, 64", steps: [] },
  { id: "b", q: "b) If Length scale factor is \\( 2.5 \\), find the Area and Volume scale factors.", a: "6.25, 15.625", steps: [] },
  { id: "c", q: "c) If Area scale factor is \\( 9 \\), find the Length and Volume scale factors.", a: "3, 27", steps: [] },
  { id: "d", q: "d) If Area scale factor is \\( 49 \\), find the Length and Volume scale factors.", a: "7, 343", steps: [] },
  { id: "e", q: "e) If Volume scale factor is \\( 216 \\), find the Length and Area scale factors.", a: "6, 36", steps: [] },
  { id: "f", q: "f) If Volume scale factor is \\( 1000 \\), find the Length and Area scale factors.", a: "10, 100", steps: [] }
]);

const out = 'export const Y10_CH6_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';';
fs.writeFileSync('src/constants/seedYear10Ch6KQuestions.js', out);

