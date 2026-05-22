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

  // ════════════════════════════════════════════════════════════════════
  //  Year 2 — NSW Stage 1
  // ════════════════════════════════════════════════════════════════════
  'Year 2': [
    // Number & place value
    'Count to 1000 — Keep counting past 100 — group into hundreds, tens and ones',
    'Hundreds — A group of 100 ones, or 10 tens — 300 means 3 hundreds',
    'Place value to 3 digits — 248 means 2 hundreds, 4 tens and 8 ones',
    'Expanded form — Break a number into its parts — 365 = 300 + 60 + 5',
    'Standard form — A number written the normal way — 300 + 60 + 5 = 365',
    'Skip count by 3s — Count every third number — 3, 6, 9, 12, 15 …',
    'Skip count by 4s — Jump 4 each time — 4, 8, 12, 16, 20 …',
    'Skip count by 100s — Jump 100 each time — 100, 200, 300, 400 …',
    'Count from any number — Start anywhere and count forward or backward',
    'Compare numbers — Use < (less than), > (greater than) or = to compare',
    'Order numbers — Arrange numbers from smallest to largest, or largest to smallest',
    'Round to the nearest 10 — 47 rounds to 50, 23 rounds to 20',
    'Ordinal numbers — Show position — 1st, 2nd, 3rd, 4th, 5th …',
    'Even and odd to 100 — Even numbers end in 0,2,4,6,8; odd end in 1,3,5,7,9',
    'Number line to 100 — Find, place and count numbers on a marked line',
    'Hundred chart — A 10 by 10 grid showing the numbers 1 to 100',
    'Estimate a quantity — Make a sensible guess, then check by counting',
    // Addition & subtraction
    'Add 2-digit numbers — Add the ones, then add the tens — 34 + 25 = 59',
    'Subtract 2-digit numbers — Take away ones, then tens — 58 − 23 = 35',
    'Regroup / trade — Swap 10 ones for 1 ten when adding or subtracting',
    'Jump strategy — Add or subtract in jumps on a number line — 47 + 30 → 57, 67, 77',
    'Split strategy — Break numbers into tens and ones to add them',
    'Bridging to 10 — Add by first making the next ten — 8 + 5 → 8 + 2 + 3',
    'Inverse operations — Addition and subtraction undo each other',
    'Add three numbers — Look for pairs that make 10 to add quickly',
    'Compatible numbers — Pairs that are easy to add — 30 + 70, 25 + 75',
    'Word problems — Read a story and choose to add or subtract',
    'Estimate a sum — Round numbers to check if an answer is sensible',
    // Multiplication & division
    'Equal groups — The same number of objects in each group — 3 groups of 4',
    'Array — Objects arranged in equal rows and columns — 3 rows of 5',
    'Rows and columns — Arrays have equal rows across and equal columns down',
    'Repeated addition — Adding the same number again and again — 4 + 4 + 4 = 12',
    'Multiplication — A fast way to add equal groups — 3 × 4 means 3 groups of 4',
    'Times symbol (×) — The symbol that means multiply or "groups of"',
    'Sharing / division — Split a group into equal parts — 12 shared between 3 = 4',
    'Groups of — Division can ask how many equal groups can be made',
    'Doubling and halving — Double makes twice as much; halve splits into two',
    // Fractions
    'Eighth (1/8) — One of 8 equal parts of a whole',
    'Fraction of a group — Half of 10 counters is 5 counters',
    'Equal shares — Sharing fairly so every part is the same size',
    'Fractions of shapes — Show halves, quarters and eighths by shading',
    'Whole and parts — Equal parts can be put back together to make one whole',
    // Money
    'Add money — Combine coins and notes to find a total amount',
    'Make an amount — Use different coins to make the same value — 50c = 20c+20c+10c',
    'Count change — Work out the money given back after paying',
    'Dollars and cents notation — Write money like \\$2.50',
    'Compare prices — Decide which item costs more or less',
    // Patterns & algebra
    'Number pattern rule — The pattern grows or shrinks by the same amount each time',
    'Increasing pattern — Numbers get bigger by the same step each time',
    'Decreasing pattern — Numbers get smaller by the same step each time',
    'Missing number in a pattern — Use the rule to find a gap — 5, 10, __, 20',
    'Equal number sentences — Both sides balance — 5 + 3 = 4 + 4',
    // Measurement
    'Metre (m) — A unit for measuring longer lengths — a door is about 2 m tall',
    'Centimetre (cm) — A small unit of length — 100 cm = 1 m',
    'Measure with a ruler — Line up the zero mark and read the length',
    'Area — The amount of flat space a shape covers',
    'Cover with units — Measure area by counting square tiles that fit inside',
    'Litre (L) — A unit for measuring capacity — a large bottle holds 1 L',
    'Kilogram (kg) — A unit for measuring mass — about the mass of 1 litre of water',
    'Hefting — Holding objects to compare which feels heavier',
    'Quarter past — 15 minutes after the hour — quarter past 3 = 3:15',
    'Quarter to — 15 minutes before the next hour — quarter to 4 = 3:45',
    'Minutes — There are 60 minutes in 1 hour, 5 minutes between each clock number',
    'Months and seasons — 12 months make a year, grouped into four seasons',
    'Calendar — Find dates, days and months on a calendar',
    // Space & geometry
    'Quadrilateral — Any 2D shape with 4 straight sides',
    'Pentagon and hexagon — Shapes with 5 sides and 6 sides',
    'Sort 2D shapes — Group shapes by number of sides or corners',
    'Features of 3D objects — Count the faces, edges and vertices',
    'Flip, slide, turn — Ways to move a shape — flip (reflect), slide (translate), turn (rotate)',
    'Half turn — Rotating a shape halfway around',
    'Quarter turn — Rotating a shape a quarter of the way around',
    'Line of symmetry — A fold line where both halves match exactly',
    'Directions — Describe a path using left, right, forward and back',
    // Data & chance
    'Picture graph key — Each picture stands for a set number of items',
    'Column graph — Compare categories using bars of different heights',
    'Categories — Groups we sort data into — colours, animals, fruits',
    'Ask a question — Plan a survey question before collecting data',
    'Will / won’t / might happen — Describe how likely an event is',
    'More likely / less likely — Compare the chance of two events',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 3 — NSW Stage 2
  // ════════════════════════════════════════════════════════════════════
  'Year 3': [
    // Number & place value
    'Numbers to 10 000 — Read, write and order numbers up to ten thousand',
    'Thousands — A group of 1000 — 4000 means 4 thousands',
    'Place value to 4 digits — 5 273 = 5 thousands, 2 hundreds, 7 tens, 3 ones',
    'Expanded notation — 5 273 = 5000 + 200 + 70 + 3',
    'Round to nearest 10 and 100 — 463 rounds to 460, or to 500',
    'Compare and order — Use place value to order numbers up to 10 000',
    'Skip count by 6s, 7s, 8s, 9s — Extend skip counting to harder steps',
    'Number patterns — Continue and describe patterns that grow or shrink',
    // Addition & subtraction
    'Add 3-digit numbers — Line up place values and regroup where needed',
    'Subtract with regrouping — Trade a ten or hundred when the top digit is too small',
    'Mental strategies — Use compatible numbers, doubles and bridging to add fast',
    'Estimate then check — Round numbers to predict an answer, then calculate',
    'Inverse to check — Use subtraction to check an addition, and the reverse',
    // Multiplication & division
    'Multiplication facts — Recall the 2, 3, 4, 5 and 10 times tables',
    'Commutative law — Order does not change a product — 3 × 7 = 7 × 3',
    'Multiply by 10 — Every digit moves up one place value — 6 × 10 = 60',
    'Division facts — Use times tables backwards — 24 ÷ 6 = 4 because 6 × 4 = 24',
    'Remainder — The amount left over when a number cannot be shared equally',
    'Division as sharing or grouping — Share equally, or make equal groups',
    'Word problems — Decide which operation a story problem needs',
    // Fractions & decimals
    'Equivalent fractions — Different fractions that show the same amount — 1/2 = 2/4',
    'Thirds and fifths — One of 3, or one of 5, equal parts of a whole',
    'Compare unit fractions — The more parts, the smaller each part — 1/2 > 1/4',
    'Mixed numeral — A whole number and a fraction together — 2 1/3',
    'Fraction of a collection — Find 1/3 of 12 by sharing into 3 groups',
    'Fraction on a number line — Place fractions between whole numbers',
    'Tenths — One of 10 equal parts — written as a fraction 1/10 or decimal 0.1',
    'Decimal point — Separates the whole-number part from the fractional part',
    // Money & algebra
    'Dollars and cents — Write money with a decimal point — \\$3.45',
    'Calculate change — Subtract a cost from the money paid',
    'Round money to 5c — Cash totals are rounded to the nearest 5 cents',
    'Number sentence with unknown — Find the missing value — 7 × ? = 56',
    'Patterns from a rule — Build a number pattern by following a rule',
    // Measurement
    'Angle — The amount of turn between two arms that meet at a point',
    'Right angle — A square corner — exactly 90 degrees',
    'Compare angles — Decide which angle is larger by the amount of turn',
    'Parallel lines — Lines that stay the same distance apart and never meet',
    'Perimeter — The total distance around the outside of a shape',
    'Square centimetre — A unit of area — a square 1 cm by 1 cm',
    'Measure area with a grid — Count the squares that cover a shape',
    'Kilometre (km) — A unit for long distances — 1 km = 1000 m',
    'Gram (g) — A small unit of mass — 1000 g = 1 kg',
    'Millilitre (mL) — A small unit of capacity — 1000 mL = 1 L',
    'am and pm — am is before noon, pm is after noon',
    'Read minutes — Tell the time to the nearest 5 minutes on an analogue clock',
    'Elapsed time — Work out how long an activity lasts',
    // Space & geometry
    'Prism — A 3D object with the same shape at both ends',
    'Pyramid — A 3D object with a base and triangular faces meeting at a point',
    'Faces, edges, vertices — Count them to describe and name 3D objects',
    'Combine and split shapes — Make new shapes from smaller ones',
    'Grid reference — A letter and number that name a square on a map — B3',
    'Symmetry — A shape is symmetrical if one half is a mirror image of the other',
    'Angles of turn — A quarter, half and full turn equal 90°, 180° and 360°',
    // Data & chance
    'Scale on a graph — Even steps on an axis used to read values',
    'Collect and organise data — Use tally marks and tables',
    'Interpret a graph — Answer questions by reading a picture or column graph',
    'Likely vs unlikely — Compare events by how probable they are',
    'Possible outcomes — List everything that could happen in an experiment',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 4 — NSW Stage 2
  // ════════════════════════════════════════════════════════════════════
  'Year 4': [
    // Number & place value
    'Numbers to 100 000 — Read, write, order and compare large numbers',
    'Place value to 5 digits — Each place is 10 times the place to its right',
    'Expanded notation — 47 230 = 40000 + 7000 + 200 + 30',
    'Round to nearest 10, 100, 1000 — 4 720 rounds to 5 000',
    'Roman numerals — An old number system — I, V, X, L, C',
    'Negative numbers in context — Below zero — temperature and depth',
    // Addition & subtraction
    'Add and subtract to 5 digits — Use the standard written algorithm',
    'Mental computation — Choose efficient strategies for the numbers given',
    'Estimate to check — Round first to judge if an answer is reasonable',
    // Multiplication & division
    'Multiply by a 1-digit number — 246 × 3 using place value or an area model',
    'Multiply by 10, 100, 1000 — Digits shift left by 1, 2 or 3 places',
    'Times tables to 10 — Recall all multiplication facts up to 10 × 10',
    'Area model — Multiply by splitting numbers into parts in a rectangle',
    'Factor — A number that divides exactly into another — factors of 12: 1,2,3,4,6,12',
    'Multiple — The result of multiplying by a whole number — multiples of 5: 5,10,15…',
    'Division with remainder — 29 ÷ 4 = 7 remainder 1',
    'Distributive strategy — Split a number to multiply — 7 × 13 = 7×10 + 7×3',
    // Fractions & decimals
    'Equivalent fractions — Multiply or divide top and bottom by the same number',
    'Compare fractions — Use a common denominator or a number line',
    'Add fractions (same denominator) — Add the numerators, keep the denominator',
    'Subtract fractions (same denominator) — Subtract the numerators',
    'Mixed numerals and improper — Convert between 1 3/4 and 7/4',
    'Count by fractions — Count in halves, thirds and quarters',
    'Hundredths — One of 100 equal parts — 0.01 as a decimal',
    'Decimal place value — 3.47 = 3 ones, 4 tenths, 7 hundredths',
    'Decimals on a number line — Place tenths and hundredths between whole numbers',
    'Compare decimals — Line up the decimal point and compare place by place',
    'Fraction–decimal link — 1/2 = 0.5, 1/4 = 0.25, 3/10 = 0.3',
    // Patterns & money
    'Order of operations — Do multiplication and division before addition and subtraction',
    'Number patterns with fractions and decimals — Continue and describe the rule',
    'Equivalent number sentences — Find the unknown that keeps both sides equal',
    'Money problems — Add costs and calculate change with decimals',
    // Measurement
    'Acute angle — An angle smaller than a right angle (less than 90°)',
    'Obtuse angle — An angle larger than a right angle but less than a straight line',
    'Straight angle — A straight line — exactly 180 degrees',
    'Reflex angle — An angle larger than a straight angle (more than 180°)',
    'Measure angles — Use a protractor to measure in degrees',
    'Perpendicular lines — Two lines that meet at a right angle',
    'Area of a rectangle — Multiply length by width — length × width',
    'Square metre — A unit of area — a square 1 m by 1 m',
    'Perimeter — Add the side lengths around a shape',
    'Volume — The amount of space a 3D object takes up',
    'Capacity — How much a container can hold, measured in litres or mL',
    'Net — A flat pattern that folds up into a 3D object',
    'Convert units — 1 km = 1000 m, 1 m = 100 cm, 1 kg = 1000 g',
    '12- and 24-hour time — 3:00 pm is the same as 15:00',
    'Elapsed time — How much time has passed between a start and an end',
    'Read a calendar and timetable — Find dates, durations and schedules',
    // Space & geometry
    'Classify 2D shapes — Sort by sides, angles and parallel lines',
    'Classify 3D objects — Compare prisms, pyramids, cones and spheres',
    'Translation — Sliding a shape without turning or flipping it',
    'Reflection — Flipping a shape over a mirror line',
    'Rotation — Turning a shape around a point',
    'Symmetry — Identify lines of symmetry in shapes and patterns',
    'Grid coordinates — Locate points and paths on a grid map',
    // Data & chance
    'Survey data — Collect, organise and display information you have gathered',
    'Frequency table — Record how often each result occurs',
    'Column and dot plots — Display and compare data sets',
    'Equally likely — Outcomes that have the same chance of happening',
    'Describe chance — Use words like certain, likely, even chance, impossible',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 5 — NSW Stage 3
  // ════════════════════════════════════════════════════════════════════
  'Year 5': [
    // Number & place value
    'Numbers to millions — Read, write and order numbers in the millions',
    'Place value to 7 digits — Group digits into ones, thousands and millions',
    'Powers of 10 — Each place value is 10, 100 or 1000 times the next',
    'Round large numbers — Round to the nearest 10, 100, 1000 or 10 000',
    'Prime number — A number with exactly two factors: 1 and itself',
    'Composite number — A number with more than two factors',
    'Factors and multiples — Use them to simplify problems and find patterns',
    'Highest common factor — The largest factor shared by two numbers',
    'Lowest common multiple — The smallest multiple shared by two numbers',
    'Square numbers — The product of a number with itself — 1, 4, 9, 16, 25',
    // Operations
    'Multiply 2-digit numbers — 34 × 26 using the area model or long multiplication',
    'Long division — Divide larger numbers step by step',
    'Divide with remainders as fractions — Express the leftover as a fraction',
    'Order of operations (BIDMAS) — Brackets, then ×÷, then +−, working left to right',
    'Number properties — Use the associative and distributive laws to compute mentally',
    'Estimate and round to check — Judge whether a calculated answer is sensible',
    // Fractions & decimals
    'Add and subtract fractions — Use a common denominator first',
    'Improper fraction — The numerator is bigger than the denominator — 7/4',
    'Convert mixed and improper — 2 1/3 = 7/3 and back again',
    'Multiply a fraction by a whole number — 3 × 2/5 = 6/5',
    'Fraction of a quantity — 3/4 of 20 = 15',
    'Add and subtract decimals — Line up the decimal points',
    'Multiply decimals by 10, 100 — The digits shift left; the point appears to move',
    'Divide decimals by 10, 100 — The digits shift right',
    'Compare and order decimals — Use place value to the thousandths',
    // Percentage & ratio
    'Percentage — A fraction out of 100 — 45% means 45 per 100',
    'Fraction–decimal–percentage — 1/2 = 0.5 = 50%; switch between the three forms',
    'Discount — A reduction in price, often given as a percentage',
    // Patterns & algebra
    'Number patterns — Find the rule and continue patterns of numbers',
    'Patterns from rules — Build a table of values from a worded rule',
    'Find the unknown — Solve a number sentence with a missing value',
    // Measurement
    'Angles at a point — Angles around a point add to 360 degrees',
    'Angles on a line — Angles on a straight line add to 180 degrees',
    'Vertically opposite angles — Equal angles where two lines cross',
    'Triangle angle sum — The three angles of a triangle add to 180 degrees',
    'Measure and construct angles — Use a protractor accurately',
    'Area of a triangle — Half of base times height — ½ × b × h',
    'Area of a rectangle — length × width, in square units',
    'Perimeter and area — Perimeter is the boundary; area is the surface covered',
    'Volume in cubic units — Count or calculate unit cubes that fill a solid',
    'Volume of a rectangular prism — length × width × height',
    'Capacity and volume — 1 mL of water fills 1 cubic centimetre',
    'Convert metric units — Between mm, cm, m, km and g, kg, mL, L',
    'Timetables — Read and interpret bus, train and event schedules',
    '24-hour time — Times from 00:00 to 23:59 without am or pm',
    // Space & geometry
    'Properties of polygons — Regular and irregular shapes; sides and angles',
    '3D objects and nets — Match solids to the flat nets that build them',
    'Cartesian plane — A grid with an x-axis and y-axis to plot points',
    'Coordinates — An ordered pair (x, y) that names a point on the plane',
    'Transformations — Translate, reflect and rotate shapes on a grid',
    'Enlargement — Resize a shape using a scale factor',
    // Data & chance
    'Line graph — Shows how data changes over time using connected points',
    'Two-way table — Organise data by two categories at once',
    'Mean (average) — Add all values, then divide by how many there are',
    'Interpret data displays — Draw conclusions from graphs and tables',
    'Probability as a fraction — Chance written as favourable ÷ total outcomes',
    'List the sample space — Write out every possible outcome',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 6 — NSW Stage 3
  // ════════════════════════════════════════════════════════════════════
  'Year 6': [
    // Number & integers
    'Integers — Whole numbers including negatives — … −3, −2, −1, 0, 1, 2, 3 …',
    'Negative numbers — Numbers less than zero — used for temperature, debt, depth',
    'Number line with negatives — Negatives sit to the left of zero',
    'Add and subtract integers — Move right to add, left to subtract',
    'Order of operations — Brackets, indices, ÷ and ×, then + and −',
    'Prime factorisation — Write a number as a product of prime numbers — 12 = 2×2×3',
    'Divisibility rules — Quick tests for dividing by 2, 3, 4, 5, 6, 9, 10',
    'Square and cube numbers — 5² = 25 and 2³ = 8',
    // Fractions
    'Add and subtract fractions — With different denominators, find a common one first',
    'Multiply fractions — Multiply numerators together and denominators together',
    'Divide fractions — Multiply by the reciprocal (flip the second fraction)',
    'Fraction of a quantity — 2/3 of 18 = 12',
    'Simplify fractions — Divide top and bottom by the highest common factor',
    'Compare and order fractions — Use equivalent fractions or decimals',
    // Decimals & percentages
    'Operations with decimals — Add, subtract, multiply and divide decimal numbers',
    'Round decimals — Round to a given number of decimal places',
    'Percentage of a quantity — 20% of 150 = 0.2 × 150 = 30',
    'Discount and increase — Find a sale price or a marked-up price using percentages',
    'Express one quantity as a percentage of another — 15 out of 60 is 25%',
    'Convert between fractions, decimals and percentages — Switch fluently',
    // Ratio & rate
    'Ratio — A comparison of two quantities — 3 : 2 means 3 parts to 2 parts',
    'Simplify a ratio — Divide both parts by their common factor',
    'Divide a quantity in a ratio — Share 20 in the ratio 3 : 2',
    'Rate — A comparison of two different units — 60 km per hour',
    'Unit rate — A rate with a denominator of one — price per item',
    // Algebra
    'Algebraic thinking — Use a letter to stand for an unknown number',
    'Substitution — Replace a letter with a number to evaluate an expression',
    'Number sentences — Build and solve equations with an unknown',
    'Geometric and number patterns — Describe a rule and predict later terms',
    // Geometry & measurement
    'Angles in a triangle — The three angles add to 180 degrees',
    'Angles in a quadrilateral — The four angles add to 360 degrees',
    'Vertically opposite angles — Equal angles formed when two lines cross',
    'Angles on parallel lines — Corresponding and alternate angles',
    'Area of a parallelogram — base × perpendicular height',
    'Area of a triangle — ½ × base × height',
    'Area of composite shapes — Split a shape into rectangles and triangles',
    'Perimeter of composite shapes — Add every side around the boundary',
    'Volume of a rectangular prism — length × width × height',
    'Convert units of measurement — Length, area, mass, capacity and time',
    // Position
    'Cartesian plane (4 quadrants) — Plot points using positive and negative coordinates',
    'Translations with coordinates — Describe a slide by how x and y change',
    'Transformations — Reflect, rotate and translate shapes on the plane',
    // Data & chance
    'Mean, median and mode — Three different ways to describe a typical value',
    'Range — The difference between the largest and smallest value',
    'Dot plot and column graph — Displays used to compare and analyse data',
    'Interpret data — Draw conclusions and spot misleading graphs',
    'Probability scale — Chance runs from 0 (impossible) to 1 (certain)',
    'Sample space — The list of all possible outcomes of an experiment',
    'Theoretical vs experimental — Predicted chance compared with results',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 7 — NSW Stage 4
  // ════════════════════════════════════════════════════════════════════
  'Year 7': [
    // Number
    'Integer operations — Add, subtract, multiply and divide positive and negative numbers',
    'Index notation — A short way to write repeated multiplication — 2⁴ = 2×2×2×2',
    'Base and index — In 5³, 5 is the base and 3 is the index (power)',
    'Square number — The result of multiplying a number by itself — 49 = 7²',
    'Square root — The inverse of squaring — √49 = 7',
    'Order of operations — Evaluate brackets, indices, ×÷ then +− in order',
    'Prime factorisation — Express a number as a product of primes using a factor tree',
    'HCF and LCM — Highest common factor and lowest common multiple',
    'Rounding and estimation — Approximate to check the size of an answer',
    // Fractions, decimals, percentages
    'Equivalent fractions, decimals, percentages — Convert freely between the three',
    'Operations with fractions — Add, subtract, multiply and divide fractions',
    'Operations with decimals — All four operations, including by powers of 10',
    'Percentage of a quantity — Find a percentage and percentage change',
    'Recurring decimals — Decimals with a digit pattern that repeats forever',
    // Ratio & rate
    'Ratio — Compare quantities in a fixed proportion — simplify like a fraction',
    'Rate — Compare two quantities with different units — speed, price per kg',
    'Unitary method — Find the value of one part, then scale up or down',
    'Best buy — Compare unit prices to find the better value',
    // Algebra
    'Algebraic expression — A combination of numbers, variables and operations — 3x + 5',
    'Variable / pronumeral — A letter that represents an unknown or changing number',
    'Coefficient — The number multiplying a variable — in 7x the coefficient is 7',
    'Term and constant — Parts of an expression separated by + or −',
    'Like terms — Terms with the same variable part — 3x and 5x can be combined',
    'Expand brackets — Apply the distributive law — 4(x + 2) = 4x + 8',
    'Substitution — Replace a variable with a number to evaluate an expression',
    'Solve linear equations — Use inverse operations to find the unknown',
    'Build an equation — Translate a word problem into an equation',
    // Linear relationships
    'Linear relationship — A rule that produces a straight-line graph',
    'Cartesian plane — Plot ordered pairs to graph a relationship',
    'Table of values — List inputs and outputs to graph a rule',
    'Number plane quadrants — Four regions formed by the x- and y-axes',
    // Geometry
    'Angle types — Acute, right, obtuse, straight, reflex and revolution',
    'Angle relationships — Complementary (sum 90°) and supplementary (sum 180°) angles',
    'Angles at a point — Angles around a point add to 360°',
    'Angles and parallel lines — Corresponding, alternate and co-interior angles',
    'Triangle properties — Classify triangles by sides and by angles',
    'Quadrilateral properties — Parallelogram, rhombus, trapezium, kite and more',
    'Angle sum of polygons — Find the total interior angle of any polygon',
    // Measurement
    'Length and perimeter — Measure and calculate around 2D shapes',
    'Area formulas — Triangle, rectangle, parallelogram and their composites',
    'Volume of prisms — Cross-sectional area × length',
    'Circle parts — Radius, diameter, circumference and centre',
    'Units of measurement — Convert and use metric units of length, area and volume',
    // Statistics & probability
    'Collecting data — Census versus sample; primary and secondary data',
    'Display data — Dot plots, column graphs, stem-and-leaf and divided bars',
    'Mean, median, mode, range — Summary statistics describing a data set',
    'Outlier — A data value that is much larger or smaller than the rest',
    'Probability — The chance of an event, written as a fraction, decimal or percentage',
    'Sample space — The set of all possible outcomes',
    'Complementary events — Outcomes that together cover everything — P(A) + P(not A) = 1',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 8 — NSW Stage 4
  // ════════════════════════════════════════════════════════════════════
  'Year 8': [
    // Indices & numbers
    'Index laws — Multiply powers: add indices; divide powers: subtract indices',
    'Power of a power — Raise a power to a power by multiplying indices',
    'Zero index — Any non-zero number to the power of 0 equals 1',
    'Scientific notation — Write very large or small numbers using powers of 10',
    'Rational number — Any number that can be written as a fraction of two integers',
    'Irrational number — A number that cannot be written as an exact fraction',
    'Terminating and recurring decimals — Decimals that end, or that repeat forever',
    'Real number system — How natural, integer, rational and irrational numbers relate',
    // Percentages & money
    'Percentage change — Find percentage increase or decrease and the new amount',
    'Profit and loss — Compare cost price and selling price',
    'Discount and mark-up — Find a sale price or a marked-up price',
    'GST — Goods and services tax, a 10% addition to the price',
    'Simple interest — Interest = Principal × rate × time',
    // Ratio & rates
    'Ratio and proportion — Divide quantities in a given ratio; solve proportion problems',
    'Rates — Use and convert rates such as speed and density',
    'Direct proportion — Two quantities that grow at a constant rate',
    // Algebra
    'Expand brackets — Use the distributive law — 3(x + 4) = 3x + 12',
    'Expand binomial products — (x + 2)(x + 5) by multiplying every pair of terms',
    'Factorise — Reverse of expanding — take out the highest common factor',
    'Simplify expressions — Collect like terms and apply index laws',
    'Algebraic fractions — Simplify expressions written as fractions',
    'Solve two-step equations — Undo operations in reverse order',
    'Equations with variables on both sides — Move terms to gather the unknown',
    'Equations with brackets — Expand first, then solve',
    'Solve word problems — Form an equation from a worded situation',
    // Linear relationships
    'Gradient — The steepness of a line — rise divided by run',
    'y-intercept — Where a line crosses the y-axis',
    'Linear equation y = mx + c — m is the gradient, c is the y-intercept',
    'Graph a line — Plot from a table of values or from gradient and intercept',
    'x-intercept — Where a line crosses the x-axis (y = 0)',
    // Pythagoras & geometry
    'Pythagoras’ theorem — In a right triangle, a² + b² = c²',
    'Hypotenuse — The longest side of a right triangle, opposite the right angle',
    'Find a shorter side — Rearrange Pythagoras to find a or b',
    'Pythagorean triad — Whole-number sides of a right triangle — 3, 4, 5',
    'Congruent figures — Identical in shape and size — equal sides and angles',
    'Congruence tests — SSS, SAS, ASA and RHS for triangles',
    // Measurement
    'Circumference — The perimeter of a circle — C = πd',
    'Area of a circle — A = πr²',
    'Area of composite shapes — Combine basic area formulas',
    'Surface area — The total area of all the faces of a solid',
    'Volume of cylinders and prisms — Cross-section area × height',
    'Capacity — Convert between volume and capacity units',
    // Statistics & probability
    'Two-way table — Organises data by two categories at once',
    'Frequency and relative frequency — Counts, and counts as a proportion of the total',
    'Measures of centre and spread — Mean, median, mode and range',
    'Compare data sets — Use displays and statistics to compare groups',
    'Sample space and events — List outcomes; an event is a set of outcomes',
    'Probability of complement — P(not A) = 1 − P(A)',
    'Two-step experiments — Use tables and tree diagrams to list outcomes',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 9 — NSW Stage 5
  // ════════════════════════════════════════════════════════════════════
  'Year 9': [
    // Indices & surds
    'Index laws extended — Negative and fractional indices and their meaning',
    'Negative index — A negative power means the reciprocal — x⁻² = 1/x²',
    'Surd — A root that cannot be simplified to a rational number — √2, √3',
    'Simplify surds — √50 = √(25×2) = 5√2',
    'Operations with surds — Add, subtract and multiply like surds',
    'Scientific notation — Use powers of 10 for very large and very small numbers',
    // Financial mathematics
    'Simple interest — Interest = Principal × rate × time (I = Prn)',
    'Compound interest — Interest earned on the principal AND on previous interest',
    'Earning an income — Wages, salary, commission and overtime',
    'Percentage applications — Profit, loss, discount and percentage change',
    // Algebra
    'Expand binomial products — (x + 2)(x + 5) using the distributive law',
    'Perfect squares — (a + b)² = a² + 2ab + b²',
    'Difference of two squares — (a + b)(a − b) = a² − b²',
    'Factorise expressions — Common factor, grouping, and difference of two squares',
    'Factorise quadratics — Write x² + bx + c as a product of two binomials',
    'Algebraic fractions — Simplify, add, subtract, multiply and divide them',
    'Solve linear equations — Including those with fractions and brackets',
    'Solve linear inequalities — Solutions form a range, shown on a number line',
    'Rearrange formulas — Make a different variable the subject',
    // Linear relationships
    'Gradient–intercept form — y = mx + c describes any straight line',
    'Find the equation of a line — Use a gradient and a point, or two points',
    'Gradient from two points — m = (y₂ − y₁) ÷ (x₂ − x₁)',
    'Parallel and perpendicular lines — Equal gradients; gradients multiplying to −1',
    'Distance between two points — Apply Pythagoras to coordinates',
    'Midpoint — The average of the x-coordinates and of the y-coordinates',
    'Sketch a line — Use intercepts or gradient and y-intercept',
    // Non-linear relationships
    'Non-linear graphs — Parabolas and other curves are not straight lines',
    'The parabola — The graph of y = x², with a vertex and axis of symmetry',
    'Exponential graphs — Curves that grow or decay by a constant factor',
    // Trigonometry
    'Trigonometric ratios — Sine, cosine and tangent relate angles and side lengths',
    'SOH CAH TOA — Sin = O/H, Cos = A/H, Tan = O/A in a right triangle',
    'Find an unknown side — Use a trig ratio with a known angle',
    'Find an unknown angle — Use inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)',
    'Angles of elevation and depression — Angles measured up or down from the horizontal',
    // Measurement
    'Surface area of solids — Cylinders, prisms and composite solids',
    'Volume of solids — Prisms, cylinders and composite figures',
    'Accuracy of measurement — Limits of reading and significant figures',
    // Geometry
    'Similar figures — Same shape, sizes in proportion — linked by a scale factor',
    'Similar triangle tests — Conditions that prove two triangles are similar',
    'Properties of quadrilaterals — Prove results about parallelograms, rhombuses, etc.',
    'Geometric proof — Use known properties to justify a result',
    // Statistics & probability
    'Five-number summary — Minimum, lower quartile, median, upper quartile, maximum',
    'Box plot — A display of the five-number summary showing spread',
    'Interquartile range — The spread of the middle 50% of the data',
    'Compare distributions — Use box plots and statistics to compare data sets',
    'Probability with Venn diagrams — Show overlapping events and their outcomes',
    'Two-way tables in probability — Read probabilities from a frequency table',
    'Relative frequency — Estimate probability from experimental results',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 10 — NSW Stage 5
  // ════════════════════════════════════════════════════════════════════
  'Year 10': [
    // Surds & indices
    'Operations with surds — Add, subtract, multiply, divide and rationalise surds',
    'Rationalise the denominator — Remove a surd from the bottom of a fraction',
    'Fractional indices — A power that is a fraction equals a root — x^(1/2) = √x',
    'Index laws review — Combine all index laws to simplify expressions',
    // Financial mathematics
    'Compound interest formula — A = P(1 + r)ⁿ for repeated growth',
    'Depreciation — A quantity decreasing by a fixed percentage each period',
    'Future and present value — Compare money across different times',
    'Loans and repayments — Interest charged on a reducing balance',
    // Algebra & quadratics
    'Factorise quadratics — Write x² + bx + c as a product of two binomials',
    'Factorise harder quadratics — When the leading coefficient is not 1',
    'Solve quadratics by factorising — Use the null factor law',
    'The quadratic formula — x = (−b ± √(b²−4ac)) ÷ 2a solves any quadratic',
    'Completing the square — Rewrite a quadratic to reveal its turning point',
    'Discriminant — b² − 4ac tells how many real solutions a quadratic has',
    'Algebraic fractions — Add, subtract, multiply and divide more complex fractions',
    // Equations & inequalities
    'Solve simultaneous equations — Find the point where two graphs intersect',
    'Substitution and elimination — Two methods for solving simultaneous equations',
    'Solve quadratic equations — By factorising, the formula or completing the square',
    'Solve inequalities — Including those that require flipping the sign',
    // Graphs & functions
    'Parabola — The U-shaped graph of a quadratic — has a vertex and axis of symmetry',
    'Features of a parabola — Vertex, axis of symmetry, intercepts and direction',
    'Non-linear graphs — Parabola, exponential, hyperbola and circle',
    'The circle x² + y² = r² — Centred at the origin with radius r',
    'Exponential growth and decay — Quantities that multiply by a constant factor',
    'Polynomials — Expressions with whole-number powers of x',
    'Function — A rule that gives exactly one output for each input',
    'Function notation — f(x) names the output of a function for input x',
    'Domain and range — The set of allowed inputs and resulting outputs',
    // Trigonometry
    'Trigonometric ratios — Use sin, cos and tan in right-angled triangles',
    'Sine and cosine rules — Solve triangles that are not right-angled',
    'Area of a triangle — A = ½ab sin C using two sides and the included angle',
    'Bearings — Describe direction as a three-figure angle from north',
    'Trigonometry in 3D — Apply trig and Pythagoras to solid figures',
    'Exact ratios — Exact values of sin, cos and tan for 30°, 45° and 60°',
    // Geometry & measurement
    'Circle geometry — Angle and chord theorems involving circles',
    'Surface area and volume — Pyramids, cones, spheres and composite solids',
    'Similarity and scale factor — Relate lengths, areas and volumes of similar solids',
    // Statistics & probability
    'Standard deviation — A measure of how spread out data is from the mean',
    'Bivariate data — Data with two variables, displayed on a scatter plot',
    'Line of best fit — A straight line that models the trend in a scatter plot',
    'Correlation — How strongly two variables are related',
    'Conditional probability — The chance of an event given that another has occurred',
    'Probability trees — Diagrams for multi-step or sequential experiments',
    'Independent events — One event does not affect the chance of another',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 11 — Stage 6 · Mathematics Standard
  // ════════════════════════════════════════════════════════════════════
  'Year 11 Standard': [
    // Algebra
    'Formulas and equations — Substitute into and rearrange practical formulas',
    'Solve linear equations — Find an unknown using inverse operations',
    'Linear relationship — A constant rate of change graphs as a straight line',
    'Gradient and intercept — Interpret m and c in a practical linear model',
    'Direct variation — Two quantities increase together at a constant rate — y = kx',
    'Simultaneous equations — Solve two linear relationships graphically',
    'Graphing practical relationships — Read and interpret real-world graphs',
    'Algebraic modelling — Build an equation to describe a situation',
    // Measurement
    'Units of measurement — Convert between metric units and use significant figures',
    'Accuracy and error — Absolute, relative and percentage error in measurement',
    'Rates — Compare quantities with different units — fuel use, heart rate, pay',
    'Ratios and scale — Use scale on maps and plans to find real distances',
    'Perimeter and area — Composite shapes, including parts of circles',
    'Surface area and volume — Prisms, cylinders, spheres and composite solids',
    'Right-angled trigonometry — Use sin, cos and tan to find sides and angles',
    'Pythagoras’ theorem — Apply a² + b² = c² in practical measurement',
    'Energy and power — Calculate energy use and run-cost of appliances',
    // Financial mathematics
    'Earning money — Wages, salary, commission, piecework and overtime',
    'Income tax — Calculate tax payable using a tax table or bracket',
    'PAYG and net pay — Tax withheld and the take-home amount',
    'Budgeting — Plan income against expenses to manage money',
    'Simple interest — I = Prn for a fixed interest amount each period',
    'Currency conversion — Convert money between currencies using an exchange rate',
    // Statistics
    'Data classification — Categorical vs numerical, discrete vs continuous data',
    'Sampling methods — Random, stratified and systematic samples',
    'Displaying data — Frequency tables, dot plots, histograms and stem-and-leaf plots',
    'Summary statistics — Mean, median, mode, range and quartiles',
    'Measures of spread — Range, interquartile range and standard deviation',
    'Shape of a distribution — Symmetric, positively or negatively skewed',
    'Outliers — Identify and consider the effect of unusual values',
    // Probability
    'Theoretical probability — Probability of an event from equally likely outcomes',
    'Relative frequency — Estimate probability from experimental data',
    'Multi-stage events — Use tables and tree diagrams to list outcomes',
    'Expected frequency — Predict how often an event should occur',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 11 — Stage 6 · Mathematics Advanced
  // ════════════════════════════════════════════════════════════════════
  'Year 11 Advanced': [
    // Functions
    'Function — A relation where every input has exactly one output',
    'Function notation — f(x) gives the value of the function at x',
    'Domain and range — All valid inputs, and all resulting outputs',
    'Even and odd functions — Symmetry in the y-axis, or in the origin',
    'Linear function — Graphs as a straight line y = mx + b',
    'Quadratic function — Graphs as a parabola — y = ax² + bx + c',
    'Roots of a quadratic — Where the parabola crosses the x-axis',
    'The discriminant — Δ = b² − 4ac tells the number of real roots',
    'Completing the square — Reveals the vertex form of a parabola',
    'Cubic and polynomial functions — Higher-degree curves and their shapes',
    'Absolute value — The distance of a number from zero — always non-negative',
    'Reciprocal function — The hyperbola y = 1/x and its asymptotes',
    'Circles and semicircles — The graph of x² + y² = r²',
    'Transformations of graphs — Shift, stretch and reflect a known curve',
    'Solving inequalities — Linear, quadratic and absolute-value inequalities',
    // Trigonometric functions
    'Trigonometric ratios — Exact ratios and the unit circle',
    'Radian measure — An angle measured by arc length — π radians = 180°',
    'Arc length and sector area — Use radian measure to find them',
    'Sine and cosine rules — Solve non-right-angled triangles',
    'Area of a triangle — ½ab sin C with two sides and the included angle',
    'Trigonometric functions — The graphs of sin x, cos x and tan x',
    'Amplitude and period — The height and repeat length of a trig graph',
    'Pythagorean identity — sin²x + cos²x = 1',
    'Trigonometric equations — Solve equations over a given domain',
    // Exponentials & logarithms
    'Index and logarithm laws — Logs are the inverse of exponentials',
    'Exponential function — y = aˣ models growth and decay',
    'Logarithmic function — y = logₐx, the inverse of the exponential',
    'The number e — The natural base for continuous growth',
    // Calculus
    'Rates of change — Average and instantaneous rate of change',
    'The gradient of a tangent — The slope of a curve at a single point',
    'The derivative — The instantaneous rate of change function f′(x)',
    'Differentiation from first principles — The limit definition of the derivative',
    'Differentiation rules — Differentiate powers of x and simple sums',
    // Statistical analysis
    'Probability — Theoretical and experimental probability of events',
    'Venn diagrams and set notation — Union, intersection and complement',
    'Conditional probability — P(A given B), updating chance with new information',
    'Independent events — When P(A and B) = P(A) × P(B)',
    'Discrete random variable — A variable whose outcomes can be listed',
    'Probability distribution — Lists each outcome with its probability',
    'Expected value — The long-run average outcome of a random variable',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 11 — Stage 6 · Mathematics Extension 1
  // ════════════════════════════════════════════════════════════════════
  'Year 11 Extension 1': [
    // Functions
    'Further functions — Compose and transform functions; domain restrictions',
    'Composite function — Apply one function to the result of another — f(g(x))',
    'Inverse function — Undoes a function — reflect the graph in y = x',
    'Graphing techniques — Sketch sums, products and reciprocals of functions',
    'Region in the plane — Shade where an inequality is satisfied',
    'Parametric equations — Describe a curve using a parameter such as t',
    // Polynomials
    'Polynomial division — Divide polynomials and find quotient and remainder',
    'Remainder theorem — P(a) is the remainder when P(x) is divided by (x − a)',
    'Factor theorem — (x − a) is a factor of P(x) exactly when P(a) = 0',
    'Sum and product of roots — Relate a polynomial’s roots to its coefficients',
    'Graphing polynomials — Use roots and multiplicity to sketch the curve',
    // Inequalities
    'Inequalities — Solve polynomial, rational and absolute-value inequalities',
    // Trigonometry
    'Inverse trigonometric functions — sin⁻¹, cos⁻¹ and tan⁻¹ and their domains',
    'Trigonometric identities — Pythagorean, sum and difference identities',
    'Double-angle formulae — Express sin 2x, cos 2x and tan 2x',
    'Half-angle and t-formulae — Express trig functions in terms of tan(x/2)',
    'Trigonometric equations — Solve equations involving trig functions',
    'Sum-to-product identities — Rewrite sums of trig functions as products',
    'Three-dimensional trigonometry — Apply trig to problems in space',
    // Combinatorics
    'Counting techniques — The multiplication and addition principles',
    'Permutations — Ordered arrangements of objects — order matters',
    'Combinations — Selections of objects where order does not matter',
    'Arrangements with restrictions — Count when objects must, or must not, be together',
    'Pigeonhole principle — If items exceed boxes, some box holds more than one',
    'Binomial expansion — Expand (a + b)ⁿ using Pascal’s triangle or ⁿCᵣ',
    'Binomial coefficients — Properties and identities of ⁿCᵣ',
    // Calculus
    'Rates of change — Related rates and applications of the derivative',
    'Exponential growth and decay — Model with the rate equation dN/dt = kN',
    // Proof
    'Mathematical induction — Prove a statement true for all integers n ≥ 1',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 12 — Stage 6 · Mathematics Standard 2
  // ════════════════════════════════════════════════════════════════════
  'Year 12 Standard': [
    // Algebra
    'Types of relationships — Linear, quadratic, exponential and reciprocal models',
    'Modelling with graphs — Choose a model that fits practical data',
    'Simultaneous equations — Break-even analysis using two relationships',
    'Quadratic models — Use a parabola to model area, profit and motion',
    'Exponential models — Model growth and decay with y = a·bˣ',
    // Measurement
    'Trigonometry — Sine rule, cosine rule and the area rule for any triangle',
    'Bearings — Describe direction as a three-figure angle from north',
    'Rates and ratios — Use rates such as speed, density and concentration',
    'Scale drawings — Interpret plans, elevations and scale factors',
    'Right-angled problems — Combine Pythagoras and trig in applications',
    'Latitude and longitude — Position and time differences on the globe',
    // Financial mathematics
    'Investments — Compound interest and the future value of an investment',
    'Future value — The total value of an investment after interest',
    'Present value — The amount needed now to reach a future target',
    'Annuities — A series of equal regular payments or withdrawals',
    'Loans and credit — Calculate repayments, interest and reducing balances',
    'Loan repayment tables — Track principal and interest over time',
    'Depreciation — Straight-line and declining-balance methods',
    'Inflation and appreciation — How values rise over time',
    // Statistical analysis
    'Bivariate data — Scatter plots, correlation and the line of best fit',
    'Correlation coefficient — Measures the strength of a linear relationship',
    'Least-squares regression — A line used to predict and interpolate values',
    'Interpolation and extrapolation — Predict within, or beyond, the data range',
    'The normal distribution — A symmetric bell-shaped distribution',
    'z-score — How many standard deviations a value lies from the mean',
    'Empirical rule — About 68%, 95% and 99.7% of data within 1, 2, 3 SDs',
    'Comparing data sets — Use means, spread and z-scores to compare',
    // Networks
    'Networks — Vertices and edges representing connections',
    'Network terminology — Degree, path, cycle, connected and weighted graphs',
    'Minimum spanning tree — The cheapest way to connect every vertex',
    'Shortest path — The most efficient route through a network',
    'Critical path analysis — Schedule a project and find the minimum time',
    'Float time — The spare time an activity has without delaying a project',
    'Flow networks — Find the maximum flow through a network',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 12 — Stage 6 · Mathematics Advanced
  // ════════════════════════════════════════════════════════════════════
  'Year 12 Advanced': [
    // Functions & graphing
    'Graphing techniques — Transform and combine functions to sketch curves',
    'Reciprocal and quotient graphs — Sketch y = 1/f(x) and rational functions',
    // Trigonometric functions
    'Trigonometric functions — Amplitude, period and phase of sinusoidal graphs',
    'Trigonometric equations — Solve over a given domain',
    'Trigonometric identities — Simplify and prove expressions',
    'Modelling with trig functions — Tides, sound and other periodic data',
    // Differential calculus
    'Differentiation rules — Product, quotient and chain rules',
    'Derivative of trig, exp and log — Differentiate sin x, eˣ and ln x',
    'Tangents and normals — Use the derivative to find their equations',
    'Stationary points — Where the derivative is zero — maxima, minima, inflections',
    'The second derivative — Measures concavity and acceleration',
    'Concavity and inflection — Where a curve changes its bend',
    'Curve sketching — Use the first and second derivatives to draw a graph',
    'Optimisation — Use calculus to find maximum or minimum values',
    'Motion in a straight line — Displacement, velocity and acceleration',
    // Integral calculus
    'Anti-differentiation — The reverse of differentiation — finding the primitive',
    'The definite integral — The signed area between a curve and the x-axis',
    'Fundamental theorem of calculus — Links differentiation and integration',
    'Area between curves — Integrate the difference of two functions',
    'The trapezoidal rule — Approximate an area using trapeziums',
    'Exponential and log calculus — Differentiate and integrate eˣ and ln x',
    'Integration in motion — Recover velocity and displacement from acceleration',
    // Financial mathematics & series
    'Financial mathematics — Annuities, present and future value, loan schedules',
    'Arithmetic sequence — Terms with a common difference',
    'Geometric sequence — Terms with a common ratio',
    'Series — The sum of the terms of a sequence',
    'Limiting sum — The total of an infinite geometric series when |r| < 1',
    'Annuities as a series — Model regular payments with a geometric series',
    // Statistical analysis
    'Continuous random variable — Described by a probability density function',
    'Probability density function — The area under it gives a probability',
    'The normal distribution — Bell curve modelled by mean and standard deviation',
    'z-scores — Standardise values to compare across distributions',
    'Empirical rule — 68%, 95% and 99.7% within 1, 2 and 3 standard deviations',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 12 — Stage 6 · Mathematics Extension 1
  // ════════════════════════════════════════════════════════════════════
  'Year 12 Extension 1': [
    // Proof
    'Proof by mathematical induction — Prove a statement true for all integers n',
    'Induction with series and divisibility — Apply induction to varied results',
    // Vectors
    'Vectors — Quantities with both magnitude and direction',
    'Vector operations — Add, subtract and scale vectors; find the dot product',
    'Magnitude and direction — The length of a vector and the angle it makes',
    'Vectors in geometry — Prove geometric results using vectors',
    'Projectile motion — Model the path of an object under gravity using vectors',
    // Trigonometry
    'Trigonometric identities — Use them to simplify and solve problems',
    'Inverse trigonometric functions — Differentiate and integrate them',
    'Solving trig equations — Use identities to solve over a domain',
    // Calculus
    'Further integration — Integration by substitution',
    'Integration of trig and inverse trig — Standard integral forms',
    'Volumes of solids of revolution — Rotate a region about an axis',
    'Differential equations — Equations linking a function and its derivative',
    'Direction fields — Sketch the family of solutions of a differential equation',
    'Exponential growth and decay — Solve dN/dt = k(N − P) models',
    'Related rates of change — Connect the rates of two changing quantities',
    // Statistical analysis
    'The binomial distribution — Repeated independent trials with two outcomes',
    'Mean and variance of the binomial — np and np(1 − p)',
    'Normal approximation — Approximate the binomial with a normal distribution',
    'Sample proportions — The distribution of a proportion from many samples',
  ],

  // ════════════════════════════════════════════════════════════════════
  //  Year 12 — Stage 6 · Mathematics Extension 2
  // ════════════════════════════════════════════════════════════════════
  'Year 12 Extension 2': [
    // Proof
    'The nature of proof — Rigorous mathematical argument and notation',
    'Proving inequalities — Techniques for establishing inequality results',
    'Proof by contradiction — Assume the opposite and reach an absurdity',
    'Counterexample — A single case that disproves a general claim',
    // Complex numbers
    'Complex numbers — Numbers of the form a + bi, where i² = −1',
    'Arithmetic of complex numbers — Add, multiply and divide complex numbers',
    'Argand diagram — Represent complex numbers as points or vectors in a plane',
    'Modulus and argument — Polar form of a complex number',
    'De Moivre’s theorem — A powerful rule for powers and roots of complex numbers',
    'Roots of unity — The n complex solutions of zⁿ = 1',
    'Curves and regions — Loci described by complex-number conditions',
    // Vectors
    'Vectors in three dimensions — Geometry of lines and planes in space',
    'Vector equation of a line — Describe a line using a point and a direction',
    'Cross product — A vector perpendicular to two given vectors',
    // Calculus
    'Integration techniques — Substitution, partial fractions and by parts',
    'Recurrence in integration — Build reduction formulae for integrals',
    'Further differential equations — Model and solve more complex rate problems',
    // Mechanics
    'Mechanics — Motion under variable forces, resisted motion and projectiles',
    'Resisted motion — Motion against a force that depends on velocity',
    'Simple harmonic motion — Oscillation modelled by acceleration toward a centre',
    'Circular motion — Motion of an object travelling in a circular path',
  ],
};

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Map any course label the profile might store to a canonical Stage 6 course.
function normaliseCourse(course) {
  const c = String(Array.isArray(course) ? course[0] : course || '')
    .trim()
    .toLowerCase();
  if (!c) return '';
  if (c.includes('extension 2') || c.includes('extension2') || c === 'ext 2' || c === 'x2' || c.includes('ext2')) return 'Extension 2';
  if (c.includes('extension 1') || c.includes('extension1') || c === 'ext 1' || c === 'x1' || c.includes('ext1') || c.includes('extension')) return 'Extension 1';
  if (c.includes('advanced')) return 'Advanced';
  if (c.includes('standard')) return 'Standard';
  return '';
}

/**
 * Pick a random key concept for the given year level (and Stage 6 course).
 *
 * Lookup order:
 *   1. Exact "Year 11 Advanced" style key (year + course).
 *   2. Plain "Year 11" key.
 *   3. Any key that starts with the year (Year 11/12 split, no course given).
 *   4. A random concept from any year level.
 *
 * @param {string} yearLevel  e.g. "Year 1", "Year 11"
 * @param {string|string[]} [course]  e.g. "Advanced", "Mathematics Extension 1"
 * @returns {string}
 */
export function getRandomConcept(yearLevel, course = '') {
  const year = (yearLevel || '').trim();
  const courseNorm = normaliseCourse(course);

  // 1. Exact year + course key.
  if (year && courseNorm) {
    const exact = KEY_CONCEPTS[`${year} ${courseNorm}`];
    if (exact && exact.length > 0) return pick(exact);
  }

  // 2. Plain year key.
  const plain = KEY_CONCEPTS[year];
  if (plain && plain.length > 0) return pick(plain);

  // 3. Year 11/12 are split by course — with no course, merge all matching keys.
  if (year) {
    const merged = Object.entries(KEY_CONCEPTS)
      .filter(([key]) => key === year || key.startsWith(`${year} `))
      .flatMap(([, list]) => list);
    if (merged.length > 0) return pick(merged);
  }

  // 4. Fallback: any concept from any year.
  const allConcepts = Object.values(KEY_CONCEPTS).flat();
  if (allConcepts.length === 0) return '';
  return pick(allConcepts);
}

export default KEY_CONCEPTS;
