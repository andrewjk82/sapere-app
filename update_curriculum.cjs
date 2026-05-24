const fs = require('fs');

const ext1Data = [
  {
    id: 'y11e1-1',
    title: 'Chapter 1: Algebra review',
    modules: 5,
    topics: [
      { id: 'y11e1-1A', code: '1A', title: 'Expanding brackets' },
      { id: 'y11e1-1B', code: '1B', title: 'Factoring' },
      { id: 'y11e1-1C', code: '1C', title: 'Algebraic fractions' },
      { id: 'y11e1-1D', code: '1D', title: 'Solving quadratic equations' },
      { id: 'y11e1-1E', code: '1E', title: 'Solving simultaneous equations' }
    ]
  },
  {
    id: 'y11e1-2',
    title: 'Chapter 2: Numbers and surds',
    modules: 4,
    topics: [
      { id: 'y11e1-2A', code: '2A', title: 'Real numbers and intervals' },
      { id: 'y11e1-2B', code: '2B', title: 'Surds and their arithmetic' },
      { id: 'y11e1-2C', code: '2C', title: 'Further simplification of surds' },
      { id: 'y11e1-2D', code: '2D', title: 'Rationalising the denominator' }
    ]
  },
  {
    id: 'y11e1-3',
    title: 'Chapter 3: Functions and graphs',
    modules: 9,
    topics: [
      { id: 'y11e1-3A', code: '3A', title: 'Functions and function notation' },
      { id: 'y11e1-3B', code: '3B', title: 'Functions, relations, and graphs' },
      { id: 'y11e1-3C', code: '3C', title: 'Review of linear graphs' },
      { id: 'y11e1-3D', code: '3D', title: 'Quadratic functions \u2014 factoring and the graph' },
      { id: 'y11e1-3E', code: '3E', title: 'Completing the square and the graph' },
      { id: 'y11e1-3F', code: '3F', title: 'The quadratic formulae and the graph' },
      { id: 'y11e1-3G', code: '3G', title: 'Powers, cubics, and circles' },
      { id: 'y11e1-3H', code: '3H', title: 'Two graphs that have asymptotes' },
      { id: 'y11e1-3I', code: '3I', title: 'Direct and inverse variation' }
    ]
  },
  {
    id: 'y11e1-4',
    title: 'Chapter 4: Equations and inequations',
    modules: 4,
    topics: [
      { id: 'y11e1-4A', code: '4A', title: 'Linear equations and inequations' },
      { id: 'y11e1-4B', code: '4B', title: 'Quadratic equations and inequations' },
      { id: 'y11e1-4C', code: '4C', title: 'The discriminant' },
      { id: 'y11e1-4D', code: '4D', title: 'Quadratic identities' }
    ]
  },
  {
    id: 'y11e1-5',
    title: 'Chapter 5: Transformations and symmetry',
    modules: 8,
    topics: [
      { id: 'y11e1-5A', code: '5A', title: 'Translations of known graphs' },
      { id: 'y11e1-5B', code: '5B', title: 'Reflection in the y-axis and x-axis' },
      { id: 'y11e1-5C', code: '5C', title: 'Even and odd symmetry' },
      { id: 'y11e1-5D', code: '5D', title: 'Horizontal and vertical dilations' },
      { id: 'y11e1-5E', code: '5E', title: 'The absolute value function' },
      { id: 'y11e1-5F', code: '5F', title: 'Composite functions' },
      { id: 'y11e1-5G', code: '5G', title: 'Combining transformations' },
      { id: 'y11e1-5H', code: '5H', title: 'Continuity and piecewise-defined functions' }
    ]
  },
  {
    id: 'y11e1-6',
    title: 'Chapter 6: Further graphs',
    modules: 8,
    topics: [
      { id: 'y11e1-6A', code: '6A', title: 'Solving two particular inequations' },
      { id: 'y11e1-6B', code: '6B', title: 'The sign of a function' },
      { id: 'y11e1-6C', code: '6C', title: 'Sketching reciprocal functions' },
      { id: 'y11e1-6D', code: '6D', title: 'Sketching sums and differences' },
      { id: 'y11e1-6E', code: '6E', title: 'Modifying a function using absolute value' },
      { id: 'y11e1-6F', code: '6F', title: 'Inverse relations and functions' },
      { id: 'y11e1-6G', code: '6G', title: 'Inverse function notation' },
      { id: 'y11e1-6H', code: '6H', title: 'Defining functions and relations parametrically' }
    ]
  },
  {
    id: 'y11e1-7',
    title: 'Chapter 7: Trigonometry',
    modules: 10,
    topics: [
      { id: 'y11e1-7A', code: '7A', title: 'Trigonometry with right-angled triangles' },
      { id: 'y11e1-7B', code: '7B', title: 'Problems involving right-angled triangles' },
      { id: 'y11e1-7C', code: '7C', title: 'Trigonometric functions of a general angle' },
      { id: 'y11e1-7D', code: '7D', title: 'Quadrant, sign, and related acute angle' },
      { id: 'y11e1-7E', code: '7E', title: 'Given one trigonometric function, find another' },
      { id: 'y11e1-7F', code: '7F', title: 'Trigonometric identities' },
      { id: 'y11e1-7G', code: '7G', title: 'Trigonometric equations' },
      { id: 'y11e1-7H', code: '7H', title: 'The sine rule and the area formula' },
      { id: 'y11e1-7I', code: '7I', title: 'The cosine rule' },
      { id: 'y11e1-7J', code: '7J', title: 'Problems involving general triangles' }
    ]
  },
  {
    id: 'y11e1-8',
    title: 'Chapter 8: Lines in the coordinate plane',
    modules: 5,
    topics: [
      { id: 'y11e1-8A', code: '8A', title: 'Lengths and midpoints of line segments' },
      { id: 'y11e1-8B', code: '8B', title: 'Gradients of line segments and lines' },
      { id: 'y11e1-8C', code: '8C', title: 'Equations of lines' },
      { id: 'y11e1-8D', code: '8D', title: 'Further equations of lines' },
      { id: 'y11e1-8E', code: '8E', title: 'Using pronumerals in place of numbers' }
    ]
  },
  {
    id: 'y11e1-9',
    title: 'Chapter 9: Exponential and logarithmic functions',
    modules: 7,
    topics: [
      { id: 'y11e1-9A', code: '9A', title: 'Indices' },
      { id: 'y11e1-9B', code: '9B', title: 'Fractional indices' },
      { id: 'y11e1-9C', code: '9C', title: 'Logarithms' },
      { id: 'y11e1-9D', code: '9D', title: 'The laws for logarithms' },
      { id: 'y11e1-9E', code: '9E', title: 'Equations involving logarithms and indices' },
      { id: 'y11e1-9F', code: '9F', title: 'Exponential and logarithmic graphs' },
      { id: 'y11e1-9G', code: '9G', title: 'Applications of these functions' }
    ]
  },
  {
    id: 'y11e1-10',
    title: 'Chapter 10: Differentiation',
    modules: 12,
    topics: [
      { id: 'y11e1-10A', code: '10A', title: 'Tangents and the derivative' },
      { id: 'y11e1-10B', code: '10B', title: 'The derivative as a limit' },
      { id: 'y11e1-10C', code: '10C', title: 'A rule for differentiating powers of x' },
      { id: 'y11e1-10D', code: '10D', title: 'The notation dy/dx for the derivative' },
      { id: 'y11e1-10E', code: '10E', title: 'The chain rule' },
      { id: 'y11e1-10F', code: '10F', title: 'Differentiating powers with negative indices' },
      { id: 'y11e1-10G', code: '10G', title: 'Differentiating powers with fractional indices' },
      { id: 'y11e1-10H', code: '10H', title: 'The product rule' },
      { id: 'y11e1-10I', code: '10I', title: 'The quotient rule' },
      { id: 'y11e1-10J', code: '10J', title: 'Rates of change' },
      { id: 'y11e1-10K', code: '10K', title: 'Average velocity and average speed' },
      { id: 'y11e1-10L', code: '10L', title: 'Instantaneous velocity and speed' }
    ]
  },
  {
    id: 'y11e1-11',
    title: 'Chapter 11: Polynomials',
    modules: 7,
    topics: [
      { id: 'y11e1-11A', code: '11A', title: 'The language of polynomials' },
      { id: 'y11e1-11B', code: '11B', title: 'Graphs of polynomial functions' },
      { id: 'y11e1-11C', code: '11C', title: 'Division of polynomials' },
      { id: 'y11e1-11D', code: '11D', title: 'The remainder and factor theorems' },
      { id: 'y11e1-11E', code: '11E', title: 'Consequences of the factor theorem' },
      { id: 'y11e1-11F', code: '11F', title: 'Sums and products of zeroes' },
      { id: 'y11e1-11G', code: '11G', title: 'Geometry using polynomial techniques' }
    ]
  },
  {
    id: 'y11e1-12',
    title: "Chapter 12: Euler's number",
    modules: 3,
    topics: [
      { id: 'y11e1-12A', code: '12A', title: 'The exponential function base e' },
      { id: 'y11e1-12B', code: '12B', title: 'Transformations of exponential functions' },
      { id: 'y11e1-12C', code: '12C', title: 'The logarithmic function base e' }
    ]
  },
  {
    id: 'y11e1-13',
    title: 'Chapter 13: Radian measure of angles',
    modules: 4,
    topics: [
      { id: 'y11e1-13A', code: '13A', title: 'Radian measure of angle size' },
      { id: 'y11e1-13B', code: '13B', title: 'Solving trigonometric equations' },
      { id: 'y11e1-13C', code: '13C', title: 'Arcs and sectors of circles' },
      { id: 'y11e1-13D', code: '13D', title: 'Trigonometric graphs in radians' }
    ]
  },
  {
    id: 'y11e1-14',
    title: 'Chapter 14: Probability',
    modules: 7,
    topics: [
      { id: 'y11e1-14A', code: '14A', title: 'Sets and Venn diagrams' },
      { id: 'y11e1-14B', code: '14B', title: 'Probability and sample spaces' },
      { id: 'y11e1-14C', code: '14C', title: 'Sample space graphs and tree diagrams' },
      { id: 'y11e1-14D', code: '14D', title: 'Venn diagrams and the addition theorem' },
      { id: 'y11e1-14E', code: '14E', title: 'Multi-stage experiments and the product rule' },
      { id: 'y11e1-14F', code: '14F', title: 'Probability tree diagrams' },
      { id: 'y11e1-14G', code: '14G', title: 'Conditional probability' }
    ]
  },
  {
    id: 'y11e1-15',
    title: 'Chapter 15: Data and probability',
    modules: 3,
    topics: [
      { id: 'y11e1-15A', code: '15A', title: 'Random variables and frequency tables' },
      { id: 'y11e1-15B', code: '15B', title: 'Cumulative frequency' },
      { id: 'y11e1-15C', code: '15C', title: 'Grouped data' }
    ]
  },
  {
    id: 'y11e1-16',
    title: 'Chapter 16: Further trigonometry',
    modules: 5,
    topics: [
      { id: 'y11e1-16A', code: '16A', title: 'Three-dimensional trigonometry' },
      { id: 'y11e1-16B', code: '16B', title: 'Trigonometric functions of compound angles' },
      { id: 'y11e1-16C', code: '16C', title: 'The double-angle formulae' },
      { id: 'y11e1-16D', code: '16D', title: 'Trigonometric equations' },
      { id: 'y11e1-16E', code: '16E', title: 'The sum of sine and cosine functions' }
    ]
  }
];

const filepath = 'src/constants/curriculumData.js';
let content = fs.readFileSync(filepath, 'utf8');

// Find the boundaries of the 'Extension 1' array inside 'Year 11'
const startToken = "'Extension 1': [";
const startIndex = content.indexOf(startToken, content.indexOf("'Year 11'"));
if (startIndex !== -1) {
  let depth = 0;
  let endIndex = -1;
  let inString = false;
  let quoteChar = '';
  
  // Starting from the '[' of "'Extension 1': ["
  const bracketIndex = content.indexOf('[', startIndex);
  for (let i = bracketIndex; i < content.length; i++) {
    const char = content[i];
    if ((char === "'" || char === '"') && content[i-1] !== '\\') {
      if (!inString) {
        inString = true;
        quoteChar = char;
      } else if (char === quoteChar) {
        inString = false;
      }
    }
    
    if (!inString) {
      if (char === '[') depth++;
      else if (char === ']') {
        depth--;
        if (depth === 0) {
          endIndex = i;
          break;
        }
      }
    }
  }
  
  if (endIndex !== -1) {
    const jsonStr = JSON.stringify(ext1Data, null, 6).replace(/"/g, "'");
    // Format appropriately:
    const formattedStr = jsonStr.split('\\n').map(line => '    ' + line).join('\\n').trim();
    
    // We replace the content between '[' and ']' with our new array
    const newContent = content.substring(0, bracketIndex) + JSON.stringify(ext1Data, null, 6) + content.substring(endIndex + 1);
    
    // Convert back standard JSON to match the file's style roughly, though JSON stringify is valid JS anyway.
    fs.writeFileSync(filepath, newContent);
    console.log("Successfully replaced Extension 1 curriculum.");
  } else {
    console.error("Could not find end of Extension 1 array");
  }
} else {
  console.error("Could not find Extension 1 section");
}
