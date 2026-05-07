/**
 * NSW NESA Mathematics Key Concepts by Year Level
 * Source: NESA Mathematics K-10 Syllabus (2022)
 *
 * Add new year levels or concepts here.
 * If a year level has no concepts, a random concept from any other year is shown.
 */

const KEY_CONCEPTS = {
  'Year 1': [
    // Counting & Place Value
    'Count forward — Say the numbers in order going UP — 1, 2, 3, 4, 5 …',
    'Count backward — Say the numbers in order going DOWN — 10, 9, 8, 7 …',
    'Skip count by 2s — Count every second number — 2, 4, 6, 8, 10 …',
    'Skip count by 5s — Jump 5 each time — 5, 10, 15, 20, 25 …',
    'Skip count by 10s — Jump 10 each time — 10, 20, 30, 40, 50 …',
    'Tens — A group of 10 ones. Two tens = 20, three tens = 30 …',
    'Ones — Single objects or units — the leftover after making tens',
    'Place value — The value of a digit depends on WHERE it sits — 34 means 3 tens and 4 ones',
    'Tens and ones — Split a number into groups of ten and leftovers — 47 = 4 tens + 7 ones',
    'Before — The number that comes JUST before — 28 comes before 29',
    'After — The number that comes JUST after — 30 comes after 29',
    'Between — A number in the middle of two others — 15 is between 14 and 16',
    'Biggest / largest — The number with the greatest value — 9 is bigger than 6',
    'Smallest / least — The number with the lowest value — 2 is smaller than 7',
    'Number line — A straight line with numbers in order from left (small) to right (big)',
    'Count to 120 — We can keep counting past 100 — 118, 119, 120',
    'Estimate — Make a smart guess about how many — without counting every one',
    'One more / one less — Add 1 to get one more; take away 1 to get one less',
    'Ten more / ten less — Add 10 or take away 10 from any number',
    // Addition & Subtraction
    'Add / addition — Put groups together to find the total — sum, plus, altogether',
    'Plus (+) — The symbol that means ADD — 4 + 3 = 7',
    'Sum / total — The answer when you add numbers together — the sum of 4 and 3 is 7',
    'Altogether — How many when you put everything together — 5 red and 2 blue = 7 altogether',
    'Subtract / subtraction — Take away from a group to find what is left',
    'Minus (−) — The symbol that means TAKE AWAY — 9 − 3 = 6',
    'Difference — How many more one number is than another — the difference between 9 and 6 is 3',
    'Take away — Remove objects from a group — 10 take away 4 leaves 6',
    'Number sentence — A maths statement using numbers and symbols — e.g. 6 + 4 = 10',
    'Equals (=) — Both sides have the SAME value — 7 + 3 = 10',
    'Count on — Start at the bigger number and count up — for 7 + 3, start at 7 … 8, 9, 10',
    'Count back — Start at a number and count down — for 8 − 2, start at 8 … 7, 6',
    'Make 10 — Find a pair that adds to 10 — 6 + 4 = 10, 7 + 3 = 10',
    'Number bonds to 20 — Pairs of numbers that add to make 20 — 12 + 8, 15 + 5',
    'Doubles — Adding the same number twice — 4 + 4 = 8, 6 + 6 = 12',
    'Near doubles — One more or less than a double — 6 + 7 = 6 + 6 + 1 = 13',
    'Part-part-whole — A diagram showing how two PARTS make up a WHOLE',
    'Fact family — Four related number sentences using the same 3 numbers — 3+5=8, 5+3=8, 8−5=3, 8−3=5',
    'Missing number — Find the unknown — 6 + ? = 10, what is the missing number? (4)',
    // Odd & Even
    'Even numbers — Can be split into 2 equal groups with NOTHING left over — 2, 4, 6, 8, 10 …',
    'Odd numbers — Always have 1 left over when split into 2 groups — 1, 3, 5, 7, 9 …',
    'Even digits — Numbers ending in 0, 2, 4, 6 or 8 are EVEN',
    'Odd digits — Numbers ending in 1, 3, 5, 7 or 9 are ODD',
    'Pair — Two things that go together — even numbers can always be paired',
    // Fractions
    'Fraction — An equal part of a whole — we split something into equal pieces',
    'Whole — The complete shape or group before it is divided — 1 whole',
    'Half (1/2) — One of 2 equal parts — cut a sandwich in half: each piece is 1/2',
    'Quarter (1/4) — One of 4 equal parts — each is 1/4',
    'Equal parts — All pieces must be the SAME size to make a fair fraction',
    'Numerator — The TOP number in a fraction — tells how many parts we HAVE',
    'Denominator — The BOTTOM number in a fraction — tells how many equal parts in TOTAL',
    // Money
    'Coin — A round metal piece of money — 5c, 10c, 20c, 50c, $1, $2',
    'Note — A paper piece of money — $5, $10, $20, $50, $100',
    'Cent (c) — The smallest unit of Australian money — 100 cents = $1',
    'Dollar ($) — The main unit of Australian money — 1 dollar = 100 cents',
    'Value — How much a coin or note is worth',
    'Change — The money you get BACK when you pay more than something costs',
    'Price / cost — How much something is to buy',
    // Patterns
    'Pattern — Something that repeats in a regular way — red, blue, red, blue …',
    'Repeating pattern — A pattern with a core that keeps repeating',
    'Core — The smallest part that repeats — in red-blue-red-blue, the core is red-blue',
    'AB pattern — The simplest pattern — two things alternating — circle, square, circle, square',
    'What comes next? — Continue the pattern by working out the rule',
    'Rule — The instruction that describes how a pattern works',
    'Number pattern — A pattern made with numbers — 2, 4, 6, 8 (add 2 each time)',
    // Length
    'Length — How long something is from one end to the other',
    'Height — How tall something is — measured from bottom to top',
    'Longer / longer than — Has more length than — a ruler is longer than a pencil',
    'Shorter / shorter than — Has less length than — a pencil is shorter than a ruler',
    'Informal unit — An everyday object used to measure — hand spans, blocks, paper clips',
    'Measure — Find the size of something using a unit',
    'Compare — Look at two things to see which is bigger, smaller, taller, etc.',
    // Mass & Capacity
    'Mass — How heavy an object is — not the same as size',
    'Heavier / heaviest — Has more mass — a rock is heavier than a feather',
    'Lighter / lightest — Has less mass — a feather is lighter than a rock',
    'Balance scale — A tool to compare mass — the heavier side goes DOWN',
    'Capacity — How much a container can hold',
    'Full — A container that cannot hold any more',
    'Empty — A container with nothing inside',
    // Time
    'Clock — A tool used to tell the time — can be analogue (hands) or digital (numbers)',
    'Analogue clock — A clock with a circular face and moving hands',
    'Digital clock — A clock that shows time as numbers — 3:00',
    'Hour hand — The SHORT hand on a clock — points to the hour',
    'Minute hand — The LONG hand on a clock — points to the minutes',
    "O'clock — When the minute hand points straight UP to 12 — 3 o'clock = 3:00",
    "Half past — When the minute hand points straight DOWN to 6 — half past 3 = 3:30",
    'Hour — A unit of time — 1 hour = 60 minutes',
    'Days of the week — Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
    'Yesterday — The day before today',
    'Today — The current day',
    'Tomorrow — The day after today',
    'Morning — The time after midnight and before noon (12pm)',
    'Afternoon — The time from noon (12pm) until evening',
    'Months of the year — January, February, March … through to December',
    'Seasons — Summer, Autumn, Winter, Spring — each has its own weather',
    'Calendar — A chart showing all the days, weeks and months of a year',
    'Duration — How long something lasts',
    // 2D Shapes
    '2D shape — A FLAT shape with only length and width — drawn on paper',
    'Circle — A perfectly round shape with no sides or corners',
    'Triangle — A shape with 3 straight sides and 3 corners',
    'Square — A shape with 4 equal sides and 4 square corners',
    'Rectangle — A shape with 4 sides — opposite sides are equal — and 4 square corners',
    'Pentagon — A shape with 5 sides and 5 corners',
    'Hexagon — A shape with 6 sides and 6 corners',
    'Side — A straight line that makes part of the edge of a shape',
    'Corner / vertex — Where two sides of a shape meet — a square has 4 corners',
    'Symmetry — A shape has symmetry if you can fold it in half and both halves match exactly',
    // 3D Objects
    '3D object — A SOLID shape with length, width AND height — you can hold it',
    'Sphere — A perfectly round solid — like a ball — curved all the way around',
    'Cube — A solid with 6 equal square faces — like a dice',
    'Rectangular prism — A solid with 6 rectangular faces — like a brick or a cereal box',
    'Cylinder — A solid with 2 circular flat faces and 1 curved surface — like a can',
    'Cone — A solid with 1 circular flat base and 1 pointed tip — like an ice-cream cone',
    'Pyramid — A solid with a flat base and triangular faces that meet at a point',
    'Face — A flat surface on a 3D object — a cube has 6 faces',
    'Edge — Where two faces of a 3D object meet — a cube has 12 edges',
    'Vertex (vertices) — A corner where edges meet on a 3D object — a cube has 8 vertices',
    // Position & Direction
    'Position — Where something is located',
    'Above — Higher than something else — the bird is above the tree',
    'Below — Lower than something else — the fish is below the water',
    'Next to / beside — At the side of something — the book is next to the bag',
    'Between — In the middle of two things — the cat is between the two boxes',
    'In front of — Closer to you than something else',
    'Behind — Further from you, with something in the way',
    'Left — The direction of your left hand — the door is to the left',
    'Right — The direction of your right hand — the window is to the right',
    'Grid — A pattern of squares used as a map to find locations',
    'Map — A picture that shows where places are located',
    // Data
    'Data — Information we collect — it can be numbers or categories',
    'Tally — A way to count and record using marks — |||| means 4',
    'Tally chart — A table using tally marks to count categories',
    'Survey — Asking people questions to collect information',
    'Picture graph / pictograph — A graph using pictures or symbols to show data',
    'Column graph / bar graph — A graph using bars of different heights to compare data',
    'Most popular — The category with the most votes or the tallest bar',
    'Least popular — The category with the fewest votes or the shortest bar',
    // Chance
    'Chance — The possibility that something might happen',
    'Certain — Will definitely happen — the sun will rise tomorrow',
    'Impossible — Will never happen — rolling a 7 on a normal dice',
    'Likely — Probably will happen — it is likely to be warm in summer',
    'Unlikely — Probably will NOT happen — it is unlikely to snow in Sydney in summer',
    'Outcome — A possible result — when you flip a coin the outcomes are heads or tails',
    'Fair — Equal chance for all outcomes — a fair coin has equal chance of heads or tails',
    'Predict — Make a guess about what will happen before you try',
    'Experiment — Try something and record what happens — flip a coin 10 times',
  ],

  // ── Add future year levels below ──
  'Year 2': [],
  'Year 3': [],
  'Year 4': [],
  'Year 5': [],
  'Year 6': [],
  'Year 7': [],
  'Year 8': [],
  'Year 9': [],
  'Year 10': [],
  'Year 11': [],
  'Year 12': [],
};

/**
 * Pick a random key concept for the given year level.
 * Falls back to a random concept from any available year if none exist for the specified year.
 *
 * @param {string} yearLevel  e.g. "Year 1", "Year 10"
 * @returns {string}
 */
export function getRandomConcept(yearLevel) {
  const normalised = (yearLevel || '').trim();
  const pool = KEY_CONCEPTS[normalised];

  if (pool && pool.length > 0) {
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Fallback: collect all concepts across every year
  const allConcepts = Object.values(KEY_CONCEPTS).flat();
  if (allConcepts.length === 0) return '';
  return allConcepts[Math.floor(Math.random() * allConcepts.length)];
}

export default KEY_CONCEPTS;
