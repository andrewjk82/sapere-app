export const CURRICULUM_DATA = {
  'Basic Calculation': [
    {
      id: 'calc-stage-1',
      title: 'Stage 1: Number Sense & Basic Add/Sub (Year 1)',
      modules: 3,
      topics: [
        { id: 'calc-1-core', code: 'C1.1', group: 'Core', title: 'Add/subtract single digits & number bonds to 10' },
        { id: 'calc-1-adv', code: 'C1.2', group: 'Advanced', title: 'Number bonds to 20 & missing addends' },
        { id: 'calc-1-enrich', code: 'C1.3', group: 'Enrichment', title: 'Mental make-10 method & estimation' }
      ]
    },
    {
      id: 'calc-stage-2',
      title: 'Stage 2: 2- and 3-Digit Add/Sub (Year 2)',
      modules: 3,
      topics: [
        { id: 'calc-2-core', code: 'C2.1', group: 'Core', title: '2-digit and 3-digit add/sub & check by inverse' },
        { id: 'calc-2-adv', code: 'C2.2', group: 'Advanced', title: 'Multiple carries & finding unknowns' },
        { id: 'calc-2-enrich', code: 'C2.3', group: 'Enrichment', title: 'Front-end estimation & giving change' }
      ]
    },
    {
      id: 'calc-stage-3',
      title: 'Stage 3: Multiplication & Times Tables (Year 2-3)',
      modules: 3,
      topics: [
        { id: 'calc-3-core', code: 'C3.1', group: 'Core', title: 'Tables 2-9 & 2-digit x 1-digit' },
        { id: 'calc-3-adv', code: 'C3.2', group: 'Advanced', title: '3-digit x 1-digit & distributive property' },
        { id: 'calc-3-enrich', code: 'C3.3', group: 'Enrichment', title: 'Mental doubling & halving' }
      ]
    },
    {
      id: 'calc-stage-4',
      title: 'Stage 4: Division & Its Link to Mult (Year 3-4)',
      modules: 3,
      topics: [
        { id: 'calc-4-core', code: 'C4.1', group: 'Core', title: 'Remainders & multi-digit ÷ 1-digit' },
        { id: 'calc-4-adv', code: 'C4.2', group: 'Advanced', title: 'Long division & divisibility rules' },
        { id: 'calc-4-enrich', code: 'C4.3', group: 'Enrichment', title: 'Estimation & sharing equally' }
      ]
    },
    {
      id: 'calc-stage-5',
      title: 'Stage 5: Fractions (Year 3-5)',
      modules: 3,
      topics: [
        { id: 'calc-5-core', code: 'C5.1', group: 'Core', title: 'Equivalent fractions & same denom. add/sub' },
        { id: 'calc-5-adv', code: 'C5.2', group: 'Advanced', title: 'Unlike denoms & multiplying fractions' },
        { id: 'calc-5-enrich', code: 'C5.3', group: 'Enrichment', title: 'Fractions on number line & ratio intro' }
      ]
    },
    {
      id: 'calc-stage-6',
      title: 'Stage 6: Decimals (Year 4-5)',
      modules: 3,
      topics: [
        { id: 'calc-6-core', code: 'C6.1', group: 'Core', title: 'Tenths/hundredths add/sub & rounding' },
        { id: 'calc-6-adv', code: 'C6.2', group: 'Advanced', title: 'Multiply/divide by 10/100/1000 & decimal x decimal' },
        { id: 'calc-6-enrich', code: 'C6.3', group: 'Enrichment', title: 'Money & measurement calculations' }
      ]
    },
    {
      id: 'calc-stage-7',
      title: 'Stage 7: Bringing It All Together (Year 5-6)',
      modules: 3,
      topics: [
        { id: 'calc-7-core', code: 'C7.1', group: 'Core', title: 'Order of operations (BODMAS)' },
        { id: 'calc-7-adv', code: 'C7.2', group: 'Advanced', title: 'Nested brackets & negative numbers' },
        { id: 'calc-7-enrich', code: 'C7.3', group: 'Enrichment', title: 'Problem-solving & percentages' }
      ]
    }
  ],
  'Year 1': [
    {
      id: 'y1-number',
      title: 'Number',
      modules: 44,
      topics: [
        { id: 'y1-num-001', code: 'N1', group: 'Counting & Place Value', title: 'Fill in missing numbers forward and backward' },
        { id: 'y1-num-002', code: 'N2', group: 'Counting & Place Value', title: 'Skip count by 2s, 5s and 10s' },
        { id: 'y1-num-003', code: 'N3', group: 'Counting & Place Value', title: 'Find what comes before or after a number' },
        { id: 'y1-num-004', code: 'N4', group: 'Counting & Place Value', title: 'Represent tens and ones using place value' },
        { id: 'y1-num-005', code: 'N5', group: 'Counting & Place Value', title: 'Write the number shown by blocks' },
        { id: 'y1-num-006', code: 'N6', group: 'Counting & Place Value', title: 'Mark or find numbers on a number line' },
        { id: 'y1-num-007', code: 'N7', group: 'Counting & Place Value', title: 'Find missing numbers on a hundreds chart' },
        { id: 'y1-num-008', code: 'N8', group: 'Counting & Place Value', title: 'Order numbers from smallest to largest' },
        { id: 'y1-num-009', code: 'N9', group: 'Counting & Place Value', title: 'Write numbers in words' },
        { id: 'y1-num-010', code: 'N10', group: 'Addition & Subtraction within 20', title: 'Solve simple addition equations' },
        { id: 'y1-num-011', code: 'N11', group: 'Addition & Subtraction within 20', title: 'Find a missing addend' },
        { id: 'y1-num-012', code: 'N12', group: 'Addition & Subtraction within 20', title: 'Find a missing first number' },
        { id: 'y1-num-013', code: 'N13', group: 'Addition & Subtraction within 20', title: 'Judge true or false number sentences' },
        { id: 'y1-num-014', code: 'N14', group: 'Addition & Subtraction within 20', title: 'Use number line jumps for addition and subtraction' },
        { id: 'y1-num-015', code: 'N15', group: 'Addition & Subtraction within 20', title: 'Count blocks and write a number sentence' },
        { id: 'y1-num-016', code: 'N16', group: 'Addition & Subtraction within 20', title: 'Use the make 10 strategy' },
        { id: 'y1-num-017', code: 'N17', group: 'Addition & Subtraction within 20', title: 'Use part-part-whole diagrams' },
        { id: 'y1-num-018', code: 'N18', group: 'Addition & Subtraction within 20', title: 'Use doubles and near doubles facts' },
        { id: 'y1-num-019', code: 'N19', group: 'Addition & Subtraction within 20', title: 'Write fact families' },
        { id: 'y1-num-020', code: 'N20', group: 'Addition & Subtraction within 20', title: 'Use related addition and subtraction facts' },
        { id: 'y1-num-021', code: 'N21', group: 'Addition & Subtraction within 20', title: 'Solve addition and subtraction word problems' },
        { id: 'y1-num-022', code: 'N22', group: 'Addition & Subtraction within 20', title: 'Spot and fix errors in calculations' },
        { id: 'y1-num-023', code: 'N23', group: 'Addition & Subtraction within 20', title: 'Solve two-step addition problems' },
        { id: 'y1-num-024', code: 'N24', group: 'Odd & Even', title: 'Identify whether a number is odd or even' },
        { id: 'y1-num-025', code: 'N25', group: 'Odd & Even', title: 'Circle even numbers' },
        { id: 'y1-num-026', code: 'N26', group: 'Odd & Even', title: 'Sort numbers into odd and even groups' },
        { id: 'y1-num-027', code: 'N27', group: 'Odd & Even', title: 'Continue odd and even patterns' },
        { id: 'y1-num-028', code: 'N28', group: 'Odd & Even', title: 'Judge true or false odd and even statements' },
        { id: 'y1-num-029', code: 'N29', group: 'Odd & Even', title: 'Pair objects to test odd or even' },
        { id: 'y1-num-030', code: 'N30', group: 'Odd & Even', title: 'List even numbers in a range' },
        { id: 'y1-num-031', code: 'N31', group: 'Fractions', title: 'Shade half or one quarter of a shape' },
        { id: 'y1-num-032', code: 'N32', group: 'Fractions', title: 'Identify a picture showing one half' },
        { id: 'y1-num-033', code: 'N33', group: 'Fractions', title: 'Recognise whether a shape is divided equally' },
        { id: 'y1-num-034', code: 'N34', group: 'Fractions', title: 'Count equal parts in a divided shape' },
        { id: 'y1-num-035', code: 'N35', group: 'Fractions', title: 'Identify a shape showing one quarter' },
        { id: 'y1-num-036', code: 'N36', group: 'Fractions', title: 'Solve equal sharing word problems' },
        { id: 'y1-num-037', code: 'N37', group: 'Fractions', title: 'Judge true or false fraction statements' },
        { id: 'y1-num-038', code: 'N38', group: 'Money', title: 'Name coins and notes' },
        { id: 'y1-num-039', code: 'N39', group: 'Money', title: 'Find the total value of a group of coins' },
        { id: 'y1-num-040', code: 'N40', group: 'Money', title: 'Choose coins to make an exact amount' },
        { id: 'y1-num-041', code: 'N41', group: 'Money', title: 'Order coins from least to greatest value' },
        { id: 'y1-num-042', code: 'N42', group: 'Money', title: 'Decide whether there is enough money' },
        { id: 'y1-num-043', code: 'N43', group: 'Money', title: 'Match coins to their values' },
        { id: 'y1-num-044', code: 'N44', group: 'Money', title: 'Solve simple spending and change word problems' }
      ]
    },
    {
      id: 'y1-algebra',
      title: 'Algebra',
      modules: 17,
      topics: [
        { id: 'y1-alg-001', code: 'A1', group: 'Repeating Patterns', title: 'Continue repeating patterns' },
        { id: 'y1-alg-002', code: 'A2', group: 'Repeating Patterns', title: 'Find what comes next in a pattern' },
        { id: 'y1-alg-003', code: 'A3', group: 'Repeating Patterns', title: 'Find the missing element in a pattern' },
        { id: 'y1-alg-004', code: 'A4', group: 'Repeating Patterns', title: 'Create a pattern using shapes or colours' },
        { id: 'y1-alg-005', code: 'A5', group: 'Repeating Patterns', title: 'Identify the rule in a repeating pattern' },
        { id: 'y1-alg-006', code: 'A6', group: 'Repeating Patterns', title: 'Fix a mistake in a pattern' },
        { id: 'y1-alg-007', code: 'A7', group: 'Repeating Patterns', title: 'Match patterns with the same rule' },
        { id: 'y1-alg-008', code: 'A8', group: 'Understanding Equals', title: 'Judge true or false equivalent number sentences' },
        { id: 'y1-alg-009', code: 'A9', group: 'Understanding Equals', title: 'Fill blanks in equivalent number sentences' },
        { id: 'y1-alg-010', code: 'A10', group: 'Understanding Equals', title: 'Balance a scale using a number' },
        { id: 'y1-alg-011', code: 'A11', group: 'Understanding Equals', title: 'Choose equals or not equals symbols' },
        { id: 'y1-alg-012', code: 'A12', group: 'Understanding Equals', title: 'Write a number sentence using equals' },
        { id: 'y1-alg-013', code: 'A13', group: 'Number Patterns', title: 'Skip count and fill blanks' },
        { id: 'y1-alg-014', code: 'A14', group: 'Number Patterns', title: 'Identify the rule in a number pattern' },
        { id: 'y1-alg-015', code: 'A15', group: 'Number Patterns', title: 'Continue number patterns' },
        { id: 'y1-alg-016', code: 'A16', group: 'Number Patterns', title: 'Find the mistake in a number pattern' },
        { id: 'y1-alg-017', code: 'A17', group: 'Number Patterns', title: 'List numbers when counting by a given amount' }
      ]
    },
    {
      id: 'y1-measurement',
      title: 'Measurement',
      modules: 20,
      topics: [
        { id: 'y1-mea-001', code: 'M1', group: 'Length', title: 'Compare which object is longer or shorter' },
        { id: 'y1-mea-002', code: 'M2', group: 'Length', title: 'Order objects from shortest to longest' },
        { id: 'y1-mea-003', code: 'M3', group: 'Length', title: 'Measure using informal units' },
        { id: 'y1-mea-004', code: 'M4', group: 'Length', title: 'Estimate then measure length' },
        { id: 'y1-mea-005', code: 'M5', group: 'Length', title: 'Judge true or false length statements' },
        { id: 'y1-mea-006', code: 'M6', group: 'Length', title: 'Measure length using paper clips or similar units' },
        { id: 'y1-mea-007', code: 'M7', group: 'Mass & Capacity', title: 'Compare heavier and lighter objects' },
        { id: 'y1-mea-008', code: 'M8', group: 'Mass & Capacity', title: 'Order objects from lightest to heaviest' },
        { id: 'y1-mea-009', code: 'M9', group: 'Mass & Capacity', title: 'Compare containers that hold more or less' },
        { id: 'y1-mea-010', code: 'M10', group: 'Mass & Capacity', title: 'Judge true or false mass statements' },
        { id: 'y1-mea-011', code: 'M11', group: 'Mass & Capacity', title: 'Read balance scales' },
        { id: 'y1-mea-012', code: 'M12', group: 'Mass & Capacity', title: 'Choose which container holds the most' },
        { id: 'y1-mea-013', code: 'M13', group: 'Time', title: 'Read o clock and half past times' },
        { id: 'y1-mea-014', code: 'M14', group: 'Time', title: 'Draw clock hands for o clock and half past times' },
        { id: 'y1-mea-015', code: 'M15', group: 'Time', title: 'Sequence morning, afternoon and night' },
        { id: 'y1-mea-016', code: 'M16', group: 'Time', title: 'Put days of the week in order' },
        { id: 'y1-mea-017', code: 'M17', group: 'Time', title: 'Put months in order' },
        { id: 'y1-mea-018', code: 'M18', group: 'Time', title: 'Know how many days are in a week' },
        { id: 'y1-mea-019', code: 'M19', group: 'Time', title: 'Compare which activity takes longer' },
        { id: 'y1-mea-020', code: 'M20', group: 'Time', title: 'Find the day after a given day' }
      ]
    },
    {
      id: 'y1-space',
      title: 'Space',
      modules: 19,
      topics: [
        { id: 'y1-spa-001', code: 'S1', group: '2D Shapes', title: 'Name 2D shapes' },
        { id: 'y1-spa-002', code: 'S2', group: '2D Shapes', title: 'Count sides and corners of 2D shapes' },
        { id: 'y1-spa-003', code: 'S3', group: '2D Shapes', title: 'Identify shapes by number of sides' },
        { id: 'y1-spa-004', code: 'S4', group: '2D Shapes', title: 'Sort shapes into groups' },
        { id: 'y1-spa-005', code: 'S5', group: '2D Shapes', title: 'Judge true or false shape property statements' },
        { id: 'y1-spa-006', code: 'S6', group: '2D Shapes', title: 'Draw and label a rectangle' },
        { id: 'y1-spa-007', code: 'S7', group: '2D Shapes', title: 'Find hidden shapes in a picture' },
        { id: 'y1-spa-008', code: 'S8', group: '3D Objects', title: 'Name 3D objects' },
        { id: 'y1-spa-009', code: 'S9', group: '3D Objects', title: 'Count faces, edges and corners' },
        { id: 'y1-spa-010', code: 'S10', group: '3D Objects', title: 'Match 3D objects to real-life examples' },
        { id: 'y1-spa-011', code: 'S11', group: '3D Objects', title: 'Identify objects that roll, stack or slide' },
        { id: 'y1-spa-012', code: 'S12', group: '3D Objects', title: 'Sort 3D objects by properties' },
        { id: 'y1-spa-013', code: 'S13', group: '3D Objects', title: 'Judge true or false 3D object statements' },
        { id: 'y1-spa-014', code: 'S14', group: 'Position & Direction', title: 'Use position words such as above, below, next to and behind' },
        { id: 'y1-spa-015', code: 'S15', group: 'Position & Direction', title: 'Follow simple movement directions' },
        { id: 'y1-spa-016', code: 'S16', group: 'Position & Direction', title: 'Identify arrow directions' },
        { id: 'y1-spa-017', code: 'S17', group: 'Position & Direction', title: 'Describe object positions using position words' },
        { id: 'y1-spa-018', code: 'S18', group: 'Position & Direction', title: 'Find objects on a simple grid map' },
        { id: 'y1-spa-019', code: 'S19', group: 'Position & Direction', title: 'Give directions on a grid' }
      ]
    },
    {
      id: 'y1-statistics',
      title: 'Statistics',
      modules: 11,
      topics: [
        { id: 'y1-sta-001', code: 'ST1', group: 'Data Collection', title: 'Read tally charts' },
        { id: 'y1-sta-002', code: 'ST2', group: 'Data Collection', title: 'Complete tally charts from data' },
        { id: 'y1-sta-003', code: 'ST3', group: 'Data Collection', title: 'Find categories with the most or least' },
        { id: 'y1-sta-004', code: 'ST4', group: 'Data Collection', title: 'Compare categories using how many more' },
        { id: 'y1-sta-005', code: 'ST5', group: 'Data Collection', title: 'Write a question to collect data' },
        { id: 'y1-sta-006', code: 'ST6', group: 'Graphs', title: 'Read picture graphs' },
        { id: 'y1-sta-007', code: 'ST7', group: 'Graphs', title: 'Identify tallest and shortest bars' },
        { id: 'y1-sta-008', code: 'ST8', group: 'Graphs', title: 'Find totals from two graph categories' },
        { id: 'y1-sta-009', code: 'ST9', group: 'Graphs', title: 'Judge true or false graph statements' },
        { id: 'y1-sta-010', code: 'ST10', group: 'Graphs', title: 'Draw a picture graph from data' },
        { id: 'y1-sta-011', code: 'ST11', group: 'Graphs', title: 'Choose a good graph title' }
      ]
    },
    {
      id: 'y1-probability',
      title: 'Probability',
      modules: 10,
      topics: [
        { id: 'y1-pro-001', code: 'P1', group: 'Likelihood Language', title: 'Classify events as certain, possible or impossible' },
        { id: 'y1-pro-002', code: 'P2', group: 'Likelihood Language', title: 'Order events from impossible to certain' },
        { id: 'y1-pro-003', code: 'P3', group: 'Likelihood Language', title: 'Judge true or false likelihood statements' },
        { id: 'y1-pro-004', code: 'P4', group: 'Likelihood Language', title: 'Classify events as likely or unlikely' },
        { id: 'y1-pro-005', code: 'P5', group: 'Likelihood Language', title: 'Match events to likelihood words' },
        { id: 'y1-pro-006', code: 'P6', group: 'Simple Experiments', title: 'List possible coin flip outcomes' },
        { id: 'y1-pro-007', code: 'P7', group: 'Simple Experiments', title: 'Reason about possible dice outcomes' },
        { id: 'y1-pro-008', code: 'P8', group: 'Simple Experiments', title: 'Identify the most likely colour from a bag' },
        { id: 'y1-pro-009', code: 'P9', group: 'Simple Experiments', title: 'Judge equally likely coin outcomes' },
{ id: 'y1-pro-010', code: 'P10', group: 'Simple Experiments', title: 'Predict heads after repeated coin flips' }
      ]
    }
  ],
  'Year 2': [
    {
      id: 'y2-rwn',
      title: 'Representing Whole Numbers',
      modules: 6,
      topics: [
        { id: 'y2-rwn-1', code: 'MA1-RWN-01', title: '3-digit numbers: Read, write and represent numbers to 1000' },
        { id: 'y2-rwn-2', code: 'MA1-RWN-01', title: 'Place value: Hundreds, tens and ones; identify digit values' },
        { id: 'y2-rwn-3', code: 'MA1-RWN-01', title: 'Count to 1000: Count in 1s, 10s and 100s; before & after to 1000' },
        { id: 'y2-rwn-4', code: 'MA1-RWN-02', title: 'Partition numbers: Standard and non-standard partitioning of 3-digit numbers' },
        { id: 'y2-rwn-5', code: 'MA1-RWN-02', title: 'Rounding: Round to nearest 10 and nearest 100' },
        { id: 'y2-rwn-6', code: 'MA1-RWN-02', title: 'Money: Count and order Australian notes and coins' }
      ]
    },
    {
      id: 'y2-csq',
      title: 'Combining and Separating Quantities',
      modules: 5,
      topics: [
        { id: 'y2-csq-1', code: 'MA1-CSQ-01', title: 'Additive relations: Combinations to 20; fact families; commutative property' },
        { id: 'y2-csq-2', code: 'MA1-CSQ-01', title: 'Add and subtract to 100: Mental strategies; adding/subtracting tens' },
        { id: 'y2-csq-3', code: 'MA1-CSQ-01', title: 'Extend to 200: Place value strategies crossing tens' },
        { id: 'y2-csq-4', code: 'MA1-CSQ-01', title: 'Bar model: Represent problems using bar/part-whole model within 20' },
        { id: 'y2-csq-5', code: 'MA1-CSQ-01', title: 'Word problems: Unknowns; equality and missing numbers' }
      ]
    },
    {
      id: 'y2-fg',
      title: 'Forming Groups',
      modules: 4,
      topics: [
        { id: 'y2-fg-1', code: 'MA1-FG-01', title: 'Multiplication: Equal groups; commutative property; arrays' },
        { id: 'y2-fg-2', code: 'MA1-FG-01', title: 'Multiplication facts: Solve problems using 2x, 5x and 10x tables' },
        { id: 'y2-fg-3', code: 'MA1-FG-01', title: 'Division: Sharing and grouping; repeated subtraction; remainders' },
        { id: 'y2-fg-4', code: 'MA1-FG-01', title: 'Fractions: Halves, quarters and eighths of shapes and sets' }
      ]
    },
    {
      id: 'y2-gm',
      title: 'Geometric Measure',
      modules: 4,
      topics: [
        { id: 'y2-gm-1', code: 'MA1-GM-01', title: 'Length - formal units: Measure using metres and centimetres' },
        { id: 'y2-gm-2', code: 'MA1-GM-02', title: 'Length - informal units: Compare and order using informal units' },
        { id: 'y2-gm-3', code: 'MA1-GM-03', title: 'Fractions of length: Halves, quarters and eighths using repeated halving' },
        { id: 'y2-gm-4', code: 'MA1-GM-03', title: 'Position and maps: Read simple maps; follow a path using directions' }
      ]
    },
    {
      id: 'y2-nsm',
      title: 'Non-Spatial Measure',
      modules: 4,
      topics: [
        { id: 'y2-nsm-1', code: 'MA1-NSM-01', title: 'Time - tell the time: Hour, half-hour and quarter-hour' },
        { id: 'y2-nsm-2', code: 'MA1-NSM-01', title: 'Time - units: Hours, minutes, seconds; choose appropriate units' },
        { id: 'y2-nsm-3', code: 'MA1-NSM-02', title: 'Calendars: Use calendars to solve simple problems' },
        { id: 'y2-nsm-4', code: 'MA1-NSM-02', title: 'Mass: Compare and order mass using informal units' }
      ]
    },
    {
      id: 'y2-2ds',
      title: '2D Spatial Structure',
      modules: 4,
      topics: [
        { id: 'y2-2ds-1', code: 'MA1-2DS-01', title: 'Shapes: Quadrilaterals; pentagons; hexagons; octagons; polygons' },
        { id: 'y2-2ds-2', code: 'MA1-2DS-01', title: 'Slides, flips and turns: Transformations of 2D shapes' },
        { id: 'y2-2ds-3', code: 'MA1-2DS-02', title: 'Symmetry: Recognise line symmetry in shapes and pictures' },
        { id: 'y2-2ds-4', code: 'MA1-2DS-02', title: 'Area: Measure and estimate area using square units in rows/columns' }
      ]
    },
    {
      id: 'y2-3ds',
      title: '3D Spatial Structure',
      modules: 2,
      topics: [
        { id: 'y2-3ds-1', code: 'MA1-3DS-01', title: '3D objects: Faces, edges and vertices; compare 2D vs 3D; sort' },
        { id: 'y2-3ds-2', code: 'MA1-3DS-02', title: 'Volume and capacity: Measure using informal units; displacement' }
      ]
    },
    {
      id: 'y2-data',
      title: 'Data',
      modules: 3,
      topics: [
        { id: 'y2-data-1', code: 'MA1-DATA-01', title: 'Collect data: Surveys; tally charts; suitable questions' },
        { id: 'y2-data-2', code: 'MA1-DATA-01', title: 'Display data: Picture graphs with scale; tables and lists' },
        { id: 'y2-data-3', code: 'MA1-DATA-02', title: 'Interpret data: Read and describe displays; order by category' }
      ]
    },
    {
      id: 'y2-chan',
      title: 'Chance',
      modules: 2,
      topics: [
        { id: 'y2-chan-1', code: 'MA1-CHAN-01', title: 'Chance language: Certain, likely, unlikely, impossible' },
        { id: 'y2-chan-2', code: 'MA1-CHAN-01', title: 'Possible outcomes: Identify outcomes of chance experiments' }
      ]
    }
  ],
  'Year 3': [
    {
      id: 'y3-rn',
      title: 'Representing Numbers Using Place Value (A)',
      modules: 4,
      topics: [
        { id: 'y3-rn-1', code: 'MA2-RN-01', title: 'Whole numbers to thousands: Read, represent and order numbers to thousands; identify place value of each digit' },
        { id: 'y3-rn-2', code: 'MA2-RN-01', title: 'Partition and regroup: Apply place value to partition and regroup numbers up to 4 digits; expanded notation' },
        { id: 'y3-rn-3', code: 'MA2-RN-01', title: 'Count on and back: Count by 1, 10 and 100; compare numbers to 10 000' },
        { id: 'y3-rn-4', code: 'MA2-RN-02', title: 'Rounding: Round to the nearest 10 and 100' }
      ]
    },
    {
      id: 'y3-ar',
      title: 'Additive Relations (A)',
      modules: 5,
      topics: [
        { id: 'y3-ar-1', code: 'MA2-AR-01', title: 'Mental strategies: Fact families; commutative and associative properties; bridging to 10' },
        { id: 'y3-ar-2', code: 'MA2-AR-01', title: 'Add and subtract 2- and 3-digit: Use partitioning strategies; estimate using rounding' },
        { id: 'y3-ar-3', code: 'MA2-AR-02', title: 'Principle of equality: Recognise and use the connection between addition and subtraction' },
        { id: 'y3-ar-4', code: 'MA2-AR-02', title: 'Bar model and number sentences: Represent and solve problems with bar models; find missing values in number sentences' },
        { id: 'y3-ar-5', code: 'MA2-AR-01', title: 'Money: Represent money values in multiple ways; dollars and cents' }
      ]
    },
    {
      id: 'y3-mr',
      title: 'Multiplicative Relations (A)',
      modules: 5,
      topics: [
        { id: 'y3-mr-1', code: 'MA2-MR-01', title: 'Arrays and equal groups: Use arrays to establish multiplication facts; link to repeated addition' },
        { id: 'y3-mr-2', code: 'MA2-MR-01', title: 'Multiplication facts 2, 4, 5, 10: Recall and use multiplication facts; generate and describe number patterns' },
        { id: 'y3-mr-3', code: 'MA2-MR-02', title: 'Division facts 3, 4, 5, 10: Recall division facts related to multiplication; use grouping and sharing' },
        { id: 'y3-mr-4', code: 'MA2-MR-01', title: 'Multiples and patterns: Multiples of 2, 3, 4, 5, 10; number sequences and rules' },
        { id: 'y3-mr-5', code: 'MA2-MR-02', title: 'Problem solving: Represent and solve multiplication and division word problems' }
      ]
    },
    {
      id: 'y3-pf',
      title: 'Partitioned Fractions (A)',
      modules: 4,
      topics: [
        { id: 'y3-pf-1', code: 'MA2-PF-01', title: 'Unit fractions: Model and represent unit fractions (1/2, 1/4, 1/3, 1/5) as parts of a whole and on a number line' },
        { id: 'y3-pf-2', code: 'MA2-PF-01', title: 'Fractions by halving: Create eighths, sixths and tenths using repeated halving techniques' },
        { id: 'y3-pf-3', code: 'MA2-PF-01', title: 'Fractions as division: Understand fractions as equal sharing, such as 3/4 of a length' },
        { id: 'y3-pf-4', code: 'MA2-PF-01', title: 'Number line: Place fractions and their multiples to a complete whole on a number line' }
      ]
    },
    {
      id: 'y3-gm',
      title: 'Geometric Measure (A)',
      modules: 4,
      topics: [
        { id: 'y3-gm-1', code: 'MA2-GM-01', title: 'Length - formal units: Measure and compare using metres, centimetres and millimetres' },
        { id: 'y3-gm-2', code: 'MA2-GM-02', title: 'Estimation: Estimate and check lengths using appropriate units' },
        { id: 'y3-gm-3', code: 'MA2-GM-03', title: 'Angles: Identify angles as measures of turn; classify as less than, equal to or greater than a right angle' },
        { id: 'y3-gm-4', code: 'MA2-GM-01', title: 'Grid maps and position: Interpret movement on a map; locate positions using grid references' }
      ]
    },
    {
      id: 'y3-2ds',
      title: '2D Spatial Structure (A)',
      modules: 3,
      topics: [
        { id: 'y3-2ds-1', code: 'MA2-2DS-01', title: '2D shapes - features: Compare and describe features of 2D shapes including triangles, quadrilaterals, pentagons and hexagons' },
        { id: 'y3-2ds-2', code: 'MA2-2DS-02', title: 'Transformations: Reflect, translate and rotate shapes; identify lines of symmetry' },
        { id: 'y3-2ds-3', code: 'MA2-2DS-03', title: 'Area: Measure and estimate area using square centimetres (cm^2) and square metres (m^2)' }
      ]
    },
    {
      id: 'y3-3ds',
      title: '3D Spatial Structure (A)',
      modules: 2,
      topics: [
        { id: 'y3-3ds-1', code: 'MA2-3DS-01', title: 'Prisms and pyramids: Make models; compare and describe key features; sketch 3D objects' },
        { id: 'y3-3ds-2', code: 'MA2-3DS-02', title: 'Volume and capacity: Measure and order containers using litres; compare using familiar metric units' }
      ]
    },
    {
      id: 'y3-nsm',
      title: 'Non-Spatial Measure (A)',
      modules: 3,
      topics: [
        { id: 'y3-nsm-1', code: 'MA2-NSM-01', title: 'Mass - kg and g: Compare objects using kilograms and grams; measure using scales' },
        { id: 'y3-nsm-2', code: 'MA2-NSM-02', title: 'Time - analogue: Read and represent time to the hour and past the hour; time to the nearest minute' },
        { id: 'y3-nsm-3', code: 'MA2-NSM-02', title: 'Time - units: Seconds, minutes, hours and days; duration of events' }
      ]
    },
    {
      id: 'y3-data',
      title: 'Data (A)',
      modules: 3,
      topics: [
        { id: 'y3-data-1', code: 'MA2-DATA-01', title: 'Collect data: Collect discrete data; organise using tally charts and tables' },
        { id: 'y3-data-2', code: 'MA2-DATA-01', title: 'Display data: Construct picture graphs and column graphs using a given scale' },
        { id: 'y3-data-3', code: 'MA2-DATA-02', title: 'Interpret data: Read and compare data in tables, dot plots and column graphs' }
      ]
    },
    {
      id: 'y3-chan',
      title: 'Chance (A)',
      modules: 2,
      topics: [
        { id: 'y3-chan-1', code: 'MA2-CHAN-01', title: 'Possible outcomes: Identify and list possible outcomes of chance experiments' },
        { id: 'y3-chan-2', code: 'MA2-CHAN-01', title: 'Record and compare: Predict, conduct and record results; compare predictions to outcomes' }
      ]
    }
  ],
  'Year 4': [
    {
      id: 'y4-rn',
      title: 'Representing Numbers Using Place Value (B)',
      modules: 6,
      topics: [
        { id: 'y4-rn-1', code: 'MA2-RN-01', title: 'Numbers to 6 digits: Apply place value to partition, regroup and rename numbers up to 6 digits; expanded notation' },
        { id: 'y4-rn-2', code: 'MA2-RN-01', title: 'Tens of thousands: Order numbers in the thousands; recognise numbers 10, 100 or 1000 times as large' },
        { id: 'y4-rn-3', code: 'MA2-RN-02', title: 'Rounding — advanced: Round to nearest ten thousand; target digit rounding strategy' },
        { id: 'y4-rn-4', code: 'MA2-RN-01', title: 'Decimals — tenths: Extend place value to tenths; represent tenths on a number line' },
        { id: 'y4-rn-5', code: 'MA2-RN-01', title: 'Decimals — hundredths: Place value to hundredths; hundredths on a number line; connect fractions and decimals' },
        { id: 'y4-rn-6', code: 'MA2-RN-01', title: 'Multiply/divide by 10, 100, 1000: Recognise effect of multiplying and dividing whole numbers by powers of 10' }
      ]
    },
    {
      id: 'y4-ar',
      title: 'Additive Relations (B)',
      modules: 5,
      topics: [
        { id: 'y4-ar-1', code: 'MA2-AR-01', title: 'Regroup to 1000+: Partition, rearrange and regroup numbers to at least 1000 to solve additive problems' },
        { id: 'y4-ar-2', code: 'MA2-AR-01', title: 'Efficient strategies: Turnarounds, friendly pairs, estimation; choose and apply strategies flexibly' },
        { id: 'y4-ar-3', code: 'MA2-AR-01', title: 'Money and budgeting: Apply addition and subtraction to money and budgeting contexts' },
        { id: 'y4-ar-4', code: 'MA2-AR-02', title: 'Inverse operations: Use inverse operations to check solutions; find unknown quantities in number sentences' },
        { id: 'y4-ar-5', code: 'MA2-AR-02', title: 'Equivalent sentences: Complete number sentences involving additive relations; equivalent values' }
      ]
    },
    {
      id: 'y4-mr',
      title: 'Multiplicative Relations (B)',
      modules: 6,
      topics: [
        { id: 'y4-mr-1', code: 'MA2-MR-01', title: 'All multiplication facts to 10×10: Recall facts for 2, 3, 4, 5, 6, 8, 9 and 10; use known facts to find related facts' },
        { id: 'y4-mr-2', code: 'MA2-MR-01', title: 'Area model: Use the structure of the area model to represent multiplication and division' },
        { id: 'y4-mr-3', code: 'MA2-MR-01', title: 'Factors and multiples: Identify factors of numbers; investigate number sequences of related multiples' },
        { id: 'y4-mr-4', code: 'MA2-MR-01', title: 'Multiples of 10: Operate with multiples of 10 using known number facts and strategies' },
        { id: 'y4-mr-5', code: 'MA2-MR-02', title: 'All division facts to 10×10: Recall division facts for 2, 3, 4, 5, 6, 8, 9 and 10; inverse operations' },
        { id: 'y4-mr-6', code: 'MA2-MR-02', title: 'Word problems: Represent and solve word problems with number sentences involving multiplication or division' }
      ]
    },
    {
      id: 'y4-pf',
      title: 'Partitioned Fractions (B)',
      modules: 4,
      topics: [
        { id: 'y4-pf-1', code: 'MA2-PF-01', title: 'Equivalent fractions: Model and identify equivalent fractions as lengths on a number line' },
        { id: 'y4-pf-2', code: 'MA2-PF-01', title: 'Fractions greater than one: Represent fractional quantities equal to and greater than 1 whole' },
        { id: 'y4-pf-3', code: 'MA2-PF-01', title: 'Mixed numerals: Name, record and represent mixed numerals (e.g. 2½); convert to and from improper fractions' },
        { id: 'y4-pf-4', code: 'MA2-PF-01', title: 'Fractions as division: Apply understanding of fractions as division in problems' }
      ]
    },
    {
      id: 'y4-gm',
      title: 'Geometric Measure (B)',
      modules: 4,
      topics: [
        { id: 'y4-gm-1', code: 'MA2-GM-01', title: 'Perimeter: Measure and calculate perimeter of rectangles and irregular shapes using mm, cm and m' },
        { id: 'y4-gm-2', code: 'MA2-GM-01', title: 'Millimetres: Measure with millimetres; convert between mm, cm and m using scaled instruments' },
        { id: 'y4-gm-3', code: 'MA2-GM-02', title: 'Angles — compare: Compare and classify angles as acute, right, obtuse or straight' },
        { id: 'y4-gm-4', code: 'MA2-GM-03', title: 'Grid maps — create: Create and interpret grid maps; use grid references and directional language to describe routes' }
      ]
    },
    {
      id: 'y4-2ds',
      title: '2D Spatial Structure (B)',
      modules: 3,
      topics: [
        { id: 'y4-2ds-1', code: 'MA2-2DS-01', title: 'Combine and split shapes: Create 2D shapes from combining and splitting common shapes; quadrilaterals' },
        { id: 'y4-2ds-2', code: 'MA2-2DS-02', title: 'Symmetry and tessellation: Create symmetrical patterns and shapes; tessellate shapes' },
        { id: 'y4-2ds-3', code: 'MA2-2DS-03', title: 'Area — grid structure: Measure areas of shapes and irregular shapes using a grid; compare surfaces using metric units' }
      ]
    },
    {
      id: 'y4-3ds',
      title: '3D Spatial Structure (B)',
      modules: 2,
      topics: [
        { id: 'y4-3ds-1', code: 'MA2-3DS-01', title: 'Nets of 3D objects: Connect 3D objects with 2D representations; sketch and construct nets of prisms' },
        { id: 'y4-3ds-2', code: 'MA2-3DS-02', title: 'Volume — litres and mL: Measure and compare capacities using litres and millilitres; convert L and mL' }
      ]
    },
    {
      id: 'y4-nsm',
      title: 'Non-Spatial Measure (B)',
      modules: 4,
      topics: [
        { id: 'y4-nsm-1', code: 'MA2-NSM-01', title: 'Mass — scaled instruments: Measure and compare masses using scales; read graduated scales to measure kg and g' },
        { id: 'y4-nsm-2', code: 'MA2-NSM-02', title: 'Digital time: Represent and interpret digital time displays; connect analogue and digital' },
        { id: 'y4-nsm-3', code: 'MA2-NSM-02', title: 'am and pm notation: Use am and pm notation; time to the nearest minute' },
        { id: 'y4-nsm-4', code: 'MA2-NSM-02', title: 'Timetables: Read and interpret timetables; convert units of time' }
      ]
    },
    {
      id: 'y4-data',
      title: 'Data (B)',
      modules: 3,
      topics: [
        { id: 'y4-data-1', code: 'MA2-DATA-01', title: 'Select collection methods: Select, trial and refine methods for data collection' },
        { id: 'y4-data-2', code: 'MA2-DATA-01', title: 'Many-to-one scale graphs: Construct picture graphs and column graphs using many-to-one scales' },
        { id: 'y4-data-3', code: 'MA2-DATA-02', title: 'Compare data displays: Interpret and compare data across multiple displays' }
      ]
    },
    {
      id: 'y4-chan',
      title: 'Chance (B)',
      modules: 3,
      topics: [
        { id: 'y4-chan-1', code: 'MA2-CHAN-01', title: 'Likelihood of outcomes: Describe and compare the likelihood of outcomes using everyday language' },
        { id: 'y4-chan-2', code: 'MA2-CHAN-01', title: 'Dependent and independent: Identify when events are affected or not affected by previous events' },
        { id: 'y4-chan-3', code: 'MA2-CHAN-01', title: 'Predict and compare: Predict possible outcomes; conduct experiments and compare results' }
      ]
    }
  ],
  'Year 5': [
    {
      id: 'y5-rn',
      title: 'Represents Numbers (A)',
      modules: 5,
      topics: [
        { id: 'y5-rn-1', code: 'MA3-RN-01', title: 'Numbers to millions: Recognise, represent and order numbers in the millions; apply place value to partition, regroup and rename numbers to 1 billion' },
        { id: 'y5-rn-2', code: 'MA3-RN-02', title: 'Decimals to thousandths: Extend place value beyond hundredths to thousandths; compare, order and represent decimals up to 3 decimal places' },
        { id: 'y5-rn-3', code: 'MA3-RN-03', title: 'Negative integers: Locate and represent integers (positive and negative) on a number line' },
        { id: 'y5-rn-4', code: 'MA3-RN-01', title: 'Percentages: Determine percentages of quantities; find equivalent fractions and decimals for benchmark percentages (10%, 25%, 50%)' },
        { id: 'y5-rn-5', code: 'MA3-RN-01', title: 'Percentage discounts: Calculate percentage discounts of 10%, 25% and 50% in real contexts' }
      ]
    },
    {
      id: 'y5-ar',
      title: 'Additive Relations (A)',
      modules: 4,
      topics: [
        { id: 'y5-ar-1', code: 'MA3-AR-01', title: 'Efficient mental and written strategies: Apply efficient strategies to solve addition and subtraction problems with large whole numbers' },
        { id: 'y5-ar-2', code: 'MA3-AR-01', title: 'Reasonableness of solutions: Use estimation, rounding and place value understanding to check the reasonableness of solutions' },
        { id: 'y5-ar-3', code: 'MA3-AR-01', title: 'Add and subtract decimals: Apply known strategies to add and subtract decimal numbers in context' },
        { id: 'y5-ar-4', code: 'MA3-AR-01', title: 'Budgeting: Choose and use efficient strategies to solve addition and subtraction problems in budgeting contexts' }
      ]
    },
    {
      id: 'y5-mr',
      title: 'Multiplicative Relations (A)',
      modules: 6,
      topics: [
        { id: 'y5-mr-1', code: 'MA3-MR-01', title: 'Multiply 2, 3, 4-digit × 1-digit: Use partitioning and place value; use estimation and rounding to check reasonableness' },
        { id: 'y5-mr-2', code: 'MA3-MR-01', title: 'Multiply 2 and 3-digit × 2-digit: Select and apply mental and written strategies including area model and column multiplication' },
        { id: 'y5-mr-3', code: 'MA3-MR-01', title: 'Factors and products: Determine products and factors; identify prime and composite numbers; highest common factor; factor trees' },
        { id: 'y5-mr-4', code: 'MA3-MR-02', title: 'Division with remainders: Represent and solve division problems with whole number remainders; short and long division strategies' },
        { id: 'y5-mr-5', code: 'MA3-MR-02', title: 'Divide 3+ digit by 1-digit: Select and apply strategies to divide numbers with 3 or more digits by a one-digit divisor' },
        { id: 'y5-mr-6', code: 'MA3-MR-01', title: 'Order of operations: Explore brackets and order of operations (BODMAS) to write and evaluate number sentences' }
      ]
    },
    {
      id: 'y5-rqf',
      title: 'Representing Quantity Fractions (A)',
      modules: 6,
      topics: [
        { id: 'y5-rqf-1', code: 'MA3-RQF-01', title: 'Compare and order fractions: Compare and order unit fractions with denominators 2, 3, 4, 5, 6, 8 and 10; recognise 1 as the whole' },
        { id: 'y5-rqf-2', code: 'MA3-RQF-01', title: 'Add and subtract same denominator: Solve problems involving addition and subtraction of fractions with the same denominator' },
        { id: 'y5-rqf-3', code: 'MA3-RQF-01', title: 'Equivalent fractions: Use equivalence to add and subtract fractional quantities; add fractions with related denominators' },
        { id: 'y5-rqf-4', code: 'MA3-RQF-02', title: 'Fractions as division: Recognise that a fraction can represent a division; build up to the whole from a given fractional part' },
        { id: 'y5-rqf-5', code: 'MA3-RQF-01', title: 'Fractions of quantities: Find ½, ¼, ⅕ and 1/10 of measures and quantities; fraction word problems' },
        { id: 'y5-rqf-6', code: 'MA3-RQF-01', title: 'Simplifying fractions: Simplify fractions; compare fractions with different denominators' }
      ]
    },
    {
      id: 'y5-gm',
      title: 'Geometric Measure (A)',
      modules: 5,
      topics: [
        { id: 'y5-gm-1', code: 'MA3-GM-01', title: 'Cartesian coordinate plane: Explore the coordinate system; locate and describe points using (x, y) notation in the first quadrant' },
        { id: 'y5-gm-2', code: 'MA3-GM-02', title: 'Kilometres and metres: Use metres and kilometres for length and distances; choose appropriate units' },
        { id: 'y5-gm-3', code: 'MA3-GM-02', title: 'Perimeter of shapes: Measure lengths to find perimeters; calculate perimeter of rectangles and composite shapes' },
        { id: 'y5-gm-4', code: 'MA3-GM-03', title: 'Measuring angles in degrees: Estimate, measure and compare angles using degrees; use a protractor to measure and identify types of angles' },
        { id: 'y5-gm-5', code: 'MA3-GM-03', title: 'Angles on a line and at a point: Identify that angles on a straight line sum to 180°; angles at a point sum to 360°' }
      ]
    },
    {
      id: 'y5-2ds',
      title: '2D Spatial Structure (A)',
      modules: 5,
      topics: [
        { id: 'y5-2ds-1', code: 'MA3-2DS-01', title: 'Classify 2D shapes: Classify triangles (scalene, isosceles, equilateral) and quadrilaterals by their properties; regular and irregular polygons' },
        { id: 'y5-2ds-2', code: 'MA3-2DS-02', title: 'Area — hectares and km²: Use hectares and square kilometres as units for larger areas; calculate area of rectangles' },
        { id: 'y5-2ds-3', code: 'MA3-2DS-02', title: 'Area — parallelograms: Calculate area of a parallelogram using subdivision and rearrangement' },
        { id: 'y5-2ds-4', code: 'MA3-2DS-02', title: 'Area — triangles: Determine the area of a triangle using the relationship to rectangles' },
        { id: 'y5-2ds-5', code: 'MA3-2DS-03', title: 'Composite figures: Find the area of composite figures using addition and subtraction of component shapes' }
      ]
    },
    {
      id: 'y5-3ds',
      title: '3D Spatial Structure (A)',
      modules: 2,
      topics: [
        { id: 'y5-3ds-1', code: 'MA3-3DS-01', title: 'Prisms and pyramids: Compare, describe and name; connect 3D objects with 2D representations and nets' },
        { id: 'y5-3ds-2', code: 'MA3-3DS-02', title: 'Capacity — convert units: Choose appropriate units; connect decimal representations to the metric system; use displacement for irregular solids' }
      ]
    },
    {
      id: 'y5-nsm',
      title: 'Non-Spatial Measure (A)',
      modules: 2,
      topics: [
        { id: 'y5-nsm-1', code: 'MA3-NSM-01', title: 'Time — 24-hour and timezones: Interpret 24-hour time; determine time differences across Australian time zones' },
        { id: 'y5-nsm-2', code: 'MA3-NSM-02', title: 'Temperature: Measure, compare and interpret temperatures using Celsius; read thermometers' }
      ]
    },
    {
      id: 'y5-data',
      title: 'Data (A)',
      modules: 2,
      topics: [
        { id: 'y5-data-1', code: 'MA3-DATA-01', title: 'Many-to-one scale graphs: Construct column graphs, picture graphs and line graphs using many-to-one scales' },
        { id: 'y5-data-2', code: 'MA3-DATA-02', title: 'Interpret and compare: Read, interpret and compare data across a range of display types; pose questions and draw conclusions' }
      ]
    },
    {
      id: 'y5-chan',
      title: 'Chance (A)',
      modules: 2,
      topics: [
        { id: 'y5-chan-1', code: 'MA3-CHAN-01', title: 'Probability language and scale: Order outcomes from impossible to certain; describe using fractions and the probability scale 0 to 1' },
        { id: 'y5-chan-2', code: 'MA3-CHAN-01', title: 'Observed vs expected outcomes: Conduct experiments, record results and compare observed outcomes with expected theoretical outcomes' }
      ]
    }
  ],
  'Year 6': [
    {
      id: 'y6-rn',
      title: 'Represents Numbers (B)',
      modules: 4,
      topics: [
        { id: 'y6-rn-1', code: 'MA3-RN-03', title: 'Integers on a number line: Locate and represent positive and negative integers; order integers; understand direction and distance from zero' },
        { id: 'y6-rn-2', code: 'MA3-RN-01', title: 'Fractions, decimals, percentages: Make connections between benchmark fractions, decimals and percentages (e.g. ½ = 0.5 = 50%); convert fluently between forms' },
        { id: 'y6-rn-3', code: 'MA3-RN-01', title: 'Percentage discounts: Determine percentage discounts of 10%, 25% and 50%; apply to real money contexts' },
        { id: 'y6-rn-4', code: 'MA3-RN-03', title: 'Ordering negative integers: Compare and order positive and negative integers; represent on a horizontal and vertical number line' }
      ]
    },
    {
      id: 'y6-ar',
      title: 'Additive Relations (B)',
      modules: 4,
      topics: [
        { id: 'y6-ar-1', code: 'MA3-AR-01', title: 'Efficient strategies — large numbers: Choose and apply efficient mental and written strategies for addition and subtraction of large numbers' },
        { id: 'y6-ar-2', code: 'MA3-AR-01', title: 'Add and subtract decimals: Apply known strategies to add and subtract decimal numbers to 3 decimal places' },
        { id: 'y6-ar-3', code: 'MA3-AR-01', title: 'Budgeting contexts: Solve problems involving addition and subtraction in real-life budgeting and financial contexts' },
        { id: 'y6-ar-4', code: 'MA3-AR-01', title: 'Reasonableness: Use leading digit approximation and rounding of decimal numbers to check solutions' }
      ]
    },
    {
      id: 'y6-mr',
      title: 'Multiplicative Relations (B)',
      modules: 5,
      topics: [
        { id: 'y6-mr-1', code: 'MA3-MR-01', title: 'Multiply and divide whole numbers: Select and apply strategies for multi-digit multiplication and division including long division' },
        { id: 'y6-mr-2', code: 'MA3-MR-01', title: 'Multiply and divide decimals by powers of 10: Multiply and divide decimal numbers by 10, 100 and 1000; connect to place value shifts' },
        { id: 'y6-mr-3', code: 'MA3-MR-01', title: 'Equivalent number sentences: Use equivalent number sentences involving multiplication and division to find unknown quantities' },
        { id: 'y6-mr-4', code: 'MA3-MR-01', title: 'Number patterns: Represent and describe number patterns formed by multiples; identify rules in sequences' },
        { id: 'y6-mr-5', code: 'MA3-MR-01', title: 'Order of operations (full): Explore brackets and full order of operations (BODMAS) to write and evaluate multi-step number sentences' }
      ]
    },
    {
      id: 'y6-rqf',
      title: 'Representing Quantity Fractions (B)',
      modules: 5,
      topics: [
        { id: 'y6-rqf-1', code: 'MA3-RQF-01', title: 'Compare fractions (different denominators): Compare fractions using equivalence; compare fractions with different denominators by finding common denominators' },
        { id: 'y6-rqf-2', code: 'MA3-RQF-01', title: 'Add fractions with related denominators: Use equivalence to add and subtract fractional quantities including fractions with related denominators' },
        { id: 'y6-rqf-3', code: 'MA3-RQF-01', title: 'Fractions of whole numbers: Find fractional quantities of whole numbers — halves, quarters, fifths and tenths; solve word problems' },
        { id: 'y6-rqf-4', code: 'MA3-RQF-02', title: 'Fractions as division: Recognise that a fraction represents division; build up to the whole from a given fractional part' },
        { id: 'y6-rqf-5', code: 'MA3-RQF-01', title: 'Simplify fractions: Simplify fractions using highest common factor; understand equivalence across forms' }
      ]
    },
    {
      id: 'y6-gm',
      title: 'Geometric Measure (B)',
      modules: 6,
      topics: [
        { id: 'y6-gm-1', code: 'MA3-GM-01', title: 'All 4 quadrants: Use the full Cartesian coordinate system across all 4 quadrants; plot and describe locations using positive and negative coordinates' },
        { id: 'y6-gm-2', code: 'MA3-GM-02', title: 'Convert metric length units: Connect decimal representations to the metric system; convert between mm, cm, m and km' },
        { id: 'y6-gm-3', code: 'MA3-GM-02', title: 'Solve length problems: Solve problems involving comparison of lengths using appropriate units of measurement' },
        { id: 'y6-gm-4', code: 'MA3-GM-03', title: 'Angles on a straight line: Investigate that angles on a straight line sum to 180°; apply to find unknown angles' },
        { id: 'y6-gm-5', code: 'MA3-GM-03', title: 'Angles at a point: Investigate that angles at a point sum to 360°; apply to find unknown angles' },
        { id: 'y6-gm-6', code: 'MA3-GM-03', title: 'Vertically opposite angles: Investigate the relationships formed by the intersection of straight lines; identify and use vertically opposite angles' }
      ]
    },
    {
      id: 'y6-2ds',
      title: '2D Spatial Structure (B)',
      modules: 5,
      topics: [
        { id: 'y6-2ds-1', code: 'MA2-2DS-01', title: 'Transformations on a grid: Translate, reflect and rotate shapes on a coordinate grid; describe transformations precisely' },
        { id: 'y6-2ds-2', code: 'MA2-2DS-01', title: 'Enlargement: Explore the enlargement transformation; understand scale and similarity' },
        { id: 'y6-2ds-3', code: 'MA3-2DS-03', title: 'Area of composite figures: Find the area of composite figures by subdivision into familiar shapes' },
        { id: 'y6-2ds-4', code: 'MA3-2DS-02', title: 'Area of parallelograms: Calculate the area of a parallelogram using base × height via subdivision and rearrangement' },
        { id: 'y6-2ds-5', code: 'MA3-2DS-02', title: 'Area of triangles: Determine the area of a triangle using ½ × base × height' }
      ]
    },
    {
      id: 'y6-3ds',
      title: '3D Spatial Structure (B)',
      modules: 2,
      topics: [
        { id: 'y6-3ds-1', code: 'MA3-3DS-01', title: 'Construct 3D objects: Construct prisms and pyramids using nets; make objects using cubes' },
        { id: 'y6-3ds-2', code: 'MA3-3DS-02', title: 'Volume — cm³ and m³: Use cubic centimetres and cubic metres; recognise the multiplicative structure (l × w × h) to find volume of rectangular prisms' }
      ]
    },
    {
      id: 'y6-nsm',
      title: 'Non-Spatial Measure (B)',
      modules: 2,
      topics: [
        { id: 'y6-nsm-1', code: 'MA3-NSM-01', title: 'Convert mass units: Convert between common metric units of mass (mg, g, kg, t); net mass vs gross mass' },
        { id: 'y6-nsm-2', code: 'MA3-NSM-02', title: 'Duration problems: Solve problems involving duration using 12- and 24-hour time; personal and transport timetables' }
      ]
    },
    {
      id: 'y6-data',
      title: 'Data (B)',
      modules: 3,
      topics: [
        { id: 'y6-data-1', code: 'MA3-DATA-01', title: 'Extended data displays: Interpret and compare dot plots, pie charts, side-by-side column graphs, line graphs and two-way tables' },
        { id: 'y6-data-2', code: 'MA3-DATA-01', title: 'Misleading data: Identify and explain misleading data and graphs in digital media and real contexts' },
        { id: 'y6-data-3', code: 'MA3-DATA-01', title: 'Data in digital media: Interpret data presented in digital media and broader contexts; critically evaluate representations' }
      ]
    },
    {
      id: 'y6-chan',
      title: 'Chance (B)',
      modules: 3,
      topics: [
        { id: 'y6-chan-1', code: 'MA3-CHAN-01', title: 'Create random generators: Create random generators (spinners, cards, dice); describe probabilities using fractions' },
        { id: 'y6-chan-2', code: 'MA3-CHAN-01', title: 'Small and large trials: Conduct chance experiments with both small and large numbers of trials; record systematically' },
        { id: 'y6-chan-3', code: 'MA3-CHAN-01', title: 'Observed vs expected: Compare observed frequencies of outcomes with expected theoretical results; use proportional reasoning' }
      ]
    }
  ],
  'Year 7': [
    {
      id: 'y7-1',
      title: 'Whole numbers',
      modules: 12,
      topics: [
        { id: 'y7-1a', code: '1A', title: 'The number line', page: 2 },
        { id: 'y7-1b', code: '1B', title: 'Addition', page: 4 },
        { id: 'y7-1c', code: '1C', title: 'The standard addition algorithm', page: 6 },
        { id: 'y7-1d', code: '1D', title: 'Subtraction', page: 8 },
        { id: 'y7-1e', code: '1E', title: 'Multiplication', page: 12 },
        { id: 'y7-1f', code: '1F', title: 'Combinations of operations and the distributive law', page: 15 },
        { id: 'y7-1g', code: '1G', title: 'Place value', page: 18 },
        { id: 'y7-1h', code: '1H', title: 'The standard multiplication algorithms', page: 21 },
        { id: 'y7-1i', code: '1I', title: 'Division', page: 23 },
        { id: 'y7-1j', code: '1J', title: 'The short division algorithm', page: 28 },
        { id: 'y7-1k', code: '1K', title: 'The long division algorithm', page: 30 },
        { id: 'y7-1l', code: '1L', title: 'Order of operations', page: 32 }
      ]
    },
    {
      id: 'y7-2',
      title: 'Factors, multiples, primes and divisibility',
      modules: 9,
      topics: [
        { id: 'y7-2a', code: '2A', title: 'Factors and multiples', page: 39 },
        { id: 'y7-2b', code: '2B', title: 'Odd and even numbers', page: 43 },
        { id: 'y7-2c', code: '2C', title: 'Prime and composite numbers', page: 45 },
        { id: 'y7-2d', code: '2D', title: 'Powers of numbers', page: 47 },
        { id: 'y7-2e', code: '2E', title: 'Using mental strategies to multiply and divide', page: 51 },
        { id: 'y7-2f', code: '2F', title: 'Using powers in factorisation', page: 54 },
        { id: 'y7-2g', code: '2G', title: 'Squares and square roots', page: 57 },
        { id: 'y7-2h', code: '2H', title: 'Lowest common multiple and highest common factor', page: 59 },
        { id: 'y7-2i', code: '2I', title: 'Divisibility tests', page: 61 }
      ]
    },
    {
      id: 'y7-3',
      title: 'An introduction to algebra',
      modules: 7,
      topics: [
        { id: 'y7-3a', code: '3A', title: 'Using algebra', page: 70 },
        { id: 'y7-3b', code: '3B', title: 'Algebraic notation', page: 74 },
        { id: 'y7-3c', code: '3C', title: 'Substitution', page: 77 },
        { id: 'y7-3d', code: '3D', title: 'Addition and subtraction of like terms', page: 79 },
        { id: 'y7-3e', code: '3E', title: 'Brackets', page: 82 },
        { id: 'y7-3f', code: '3F', title: 'Multiplying terms', page: 86 },
        { id: 'y7-3g', code: '3G', title: 'Describing arrays, areas and number patterns', page: 87 }
      ]
    },
    {
      id: 'y7-4',
      title: 'Fractions',
      modules: 12,
      topics: [
        { id: 'y7-4a', code: '4A', title: 'What is a fraction?', page: 97 },
        { id: 'y7-4b', code: '4B', title: 'Equivalent fractions and simplest form', page: 103 },
        { id: 'y7-4c', code: '4C', title: 'Mixed numerals and division by whole numbers', page: 108 },
        { id: 'y7-4d', code: '4D', title: 'Comparison of fractions', page: 112 },
        { id: 'y7-4e', code: '4E', title: 'Addition and subtraction of fractions', page: 114 },
        { id: 'y7-4f', code: '4F', title: 'Word problems involving addition and subtraction of fractions', page: 118 },
        { id: 'y7-4g', code: '4G', title: 'Subtraction of mixed numerals', page: 120 },
        { id: 'y7-4h', code: '4H', title: 'Multiplication of fractions', page: 126 },
        { id: 'y7-4i', code: '4I', title: 'Division of fractions', page: 129 },
        { id: 'y7-4j', code: '4J', title: 'Multiplication and division of mixed numerals', page: 134 },
        { id: 'y7-4k', code: '4K', title: 'Word problems involving fractions', page: 136 },
        { id: 'y7-4l', code: '4L', title: 'Order of operations with fractions', page: 138 }
      ]
    },
    {
      id: 'y7-5',
      title: 'An introduction to geometry',
      modules: 7,
      topics: [
        { id: 'y7-5a', code: '5A', title: 'Points, lines and planes', page: 144 },
        { id: 'y7-5b', code: '5B', title: 'Intervals, rays and angles', page: 148 },
        { id: 'y7-5c', code: '5C', title: 'Measuring angles', page: 151 },
        { id: 'y7-5d', code: '5D', title: 'Angles at a point - geometric arguments', page: 157 },
        { id: 'y7-5e', code: '5E', title: 'Angles associated with transversals', page: 163 },
        { id: 'y7-5f', code: '5F', title: 'Further problems involving parallel lines', page: 172 },
        { id: 'y7-5g', code: '5G', title: 'Proving that two lines are parallel', page: 178 }
      ]
    },
    {
      id: 'y7-6',
      title: 'Algebra with fractions',
      modules: 3,
      topics: [
        { id: 'y7-6a', code: '6A', title: 'Division in algebra', page: 188 },
        { id: 'y7-6b', code: '6B', title: 'Multiplication and division in algebra', page: 190 },
        { id: 'y7-6c', code: '6C', title: 'Dividing and cancelling', page: 194 }
      ]
    },
    {
      id: 'y7-7',
      title: 'Decimals',
      modules: 8,
      topics: [
        { id: 'y7-7a', code: '7A', title: 'Place value and comparison of decimals', page: 202 },
        { id: 'y7-7b', code: '7B', title: 'Converting decimals to fractions and fractions to decimals', page: 207 },
        { id: 'y7-7c', code: '7C', title: 'Addition and subtraction of decimals', page: 211 },
        { id: 'y7-7d', code: '7D', title: 'Multiplication and division by powers of 10', page: 213 },
        { id: 'y7-7e', code: '7E', title: 'Multiplication of one decimal by another', page: 217 },
        { id: 'y7-7f', code: '7F', title: 'Division of decimals', page: 219 },
        { id: 'y7-7g', code: '7G', title: 'Recurring decimals', page: 223 },
        { id: 'y7-7h', code: '7H', title: 'Rounding of decimals', page: 225 }
      ]
    },
    {
      id: 'y7-8',
      title: 'Measurement',
      modules: 10,
      topics: [
        { id: 'y7-8a', code: '8A', title: 'Units of measurement', page: 232 },
        { id: 'y7-8b', code: '8B', title: 'Other units', page: 237 },
        { id: 'y7-8c', code: '8C', title: 'The unitary method', page: 238 },
        { id: 'y7-8d', code: '8D', title: 'Perimeter', page: 240 },
        { id: 'y7-8e', code: '8E', title: 'Area', page: 243 },
        { id: 'y7-8f', code: '8F', title: 'Areas by addition and subtraction', page: 247 },
        { id: 'y7-8g', code: '8G', title: 'Areas of triangles and parallelograms', page: 251 },
        { id: 'y7-8h', code: '8H', title: 'Volume of rectangular prisms', page: 259 },
        { id: 'y7-8i', code: '8I', title: 'Time', page: 262 },
        { id: 'y7-8j', code: '8J', title: 'Speed', page: 266 }
      ]
    },
    {
      id: 'y7-9',
      title: 'Review and problem-solving',
      modules: 4,
      topics: [
        { id: 'y7-9a', code: '9A', title: 'Review', page: 276 },
        { id: 'y7-9b', code: '9B', title: 'Problem-solving', page: 288 },
        { id: 'y7-9c', code: '9C', title: 'Number bases', page: 293 },
        { id: 'y7-9d', code: '9D', title: 'Binary numbers', page: 296 }
      ]
    },
    {
      id: 'y7-10',
      title: 'Integers',
      modules: 6,
      topics: [
        { id: 'y7-10a', code: '10A', title: 'Negative integers', page: 300 },
        { id: 'y7-10b', code: '10B', title: 'Addition and subtraction of a positive integer', page: 304 },
        { id: 'y7-10c', code: '10C', title: 'Addition and subtraction of a negative integer', page: 306 },
        { id: 'y7-10d', code: '10D', title: 'Multiplication involving negative integers', page: 310 },
        { id: 'y7-10e', code: '10E', title: 'Division involving negative integers', page: 312 },
        { id: 'y7-10f', code: '10F', title: 'Indices and order of operations', page: 315 }
      ]
    },
    {
      id: 'y7-11',
      title: 'Algebra and the Cartesian plane',
      modules: 4,
      topics: [
        { id: 'y7-11a', code: '11A', title: 'Substitution with integers', page: 323 },
        { id: 'y7-11b', code: '11B', title: 'The Cartesian plane', page: 326 },
        { id: 'y7-11c', code: '11C', title: 'Completing tables and plotting points', page: 330 },
        { id: 'y7-11d', code: '11D', title: 'Finding rules', page: 333 }
      ]
    },
    {
      id: 'y7-12',
      title: 'Triangles and constructions',
      modules: 5,
      topics: [
        { id: 'y7-12a', code: '12A', title: 'Angles in triangles', page: 344 },
        { id: 'y7-12b', code: '12B', title: 'Circles and compasses', page: 351 },
        { id: 'y7-12c', code: '12C', title: 'Isosceles and equilateral triangles', page: 355 },
        { id: 'y7-12d', code: '12D', title: 'Constructions with compasses and a straight edge', page: 360 },
        { id: 'y7-12e', code: '12E', title: 'Quadrilaterals', page: 363 }
      ]
    },
    {
      id: 'y7-13',
      title: 'Negative fractions and decimals',
      modules: 4,
      topics: [
        { id: 'y7-13a', code: '13A', title: 'Addition and subtraction of negative fractions', page: 373 },
        { id: 'y7-13b', code: '13B', title: 'Multiplication and division of negative fractions', page: 376 },
        { id: 'y7-13c', code: '13C', title: 'Negative decimals', page: 380 },
        { id: 'y7-13d', code: '13D', title: 'Substitution involving negative fractions and decimals', page: 382 }
      ]
    },
    {
      id: 'y7-14',
      title: 'Percentages and ratios',
      modules: 6,
      topics: [
        { id: 'y7-14a', code: '14A', title: 'Percentages, fractions and decimals', page: 387 },
        { id: 'y7-14b', code: '14B', title: 'One quantity as a percentage of another', page: 392 },
        { id: 'y7-14c', code: '14C', title: 'Percentage of a quantity', page: 394 },
        { id: 'y7-14d', code: '14D', title: 'Ratios', page: 395 },
        { id: 'y7-14e', code: '14E', title: 'Solving problems with ratios', page: 399 },
        { id: 'y7-14f', code: '14F', title: 'Best buys', page: 400 }
      ]
    },
    {
      id: 'y7-15',
      title: 'Solving equations',
      modules: 8,
      topics: [
        { id: 'y7-15a', code: '15A', title: 'An introduction to equations', page: 406 },
        { id: 'y7-15b', code: '15B', title: 'Equivalent equations', page: 408 },
        { id: 'y7-15c', code: '15C', title: 'Solving equations involving more than one step', page: 412 },
        { id: 'y7-15d', code: '15D', title: 'Equations with negative solutions', page: 414 },
        { id: 'y7-15e', code: '15E', title: 'Expanding brackets and solving equations', page: 415 },
        { id: 'y7-15f', code: '15F', title: 'Collecting like terms and solving equations', page: 418 },
        { id: 'y7-15g', code: '15G', title: 'Equations with pronumerals on both sides', page: 421 },
        { id: 'y7-15h', code: '15H', title: 'Solving problems using equations', page: 422 }
      ]
    },
    {
      id: 'y7-16',
      title: 'Probability',
      modules: 2,
      topics: [
        { id: 'y7-16a', code: '16A', title: 'An introduction to probability', page: 429 },
        { id: 'y7-16b', code: '16B', title: 'Experiments and counting', page: 431 }
      ]
    },
    {
      id: 'y7-17',
      title: 'Transformations and symmetry',
      modules: 7,
      topics: [
        { id: 'y7-17a', code: '17A', title: 'Translations', page: 442 },
        { id: 'y7-17b', code: '17B', title: 'Rotations', page: 446 },
        { id: 'y7-17c', code: '17C', title: 'Reflections', page: 451 },
        { id: 'y7-17d', code: '17D', title: 'Combinations of transformations', page: 454 },
        { id: 'y7-17e', code: '17E', title: 'Transformations in the Cartesian plane', page: 459 },
        { id: 'y7-17f', code: '17F', title: 'Symmetry', page: 462 },
        { id: 'y7-17g', code: '17G', title: 'Regular polygons', page: 465 }
      ]
    },
    {
      id: 'y7-18',
      title: 'Graphs and tables',
      modules: 6,
      topics: [
        { id: 'y7-18a', code: '18A', title: 'Reading tables', page: 474 },
        { id: 'y7-18b', code: '18B', title: 'The pictogram', page: 477 },
        { id: 'y7-18c', code: '18C', title: 'Column graphs', page: 481 },
        { id: 'y7-18d', code: '18D', title: 'Divided bar charts and pie charts', page: 485 },
        { id: 'y7-18e', code: '18E', title: 'Line graphs', page: 492 },
        { id: 'y7-18f', code: '18F', title: 'Applications of the line graph', page: 495 }
      ]
    },
    {
      id: 'y7-19',
      title: 'Statistics',
      modules: 4,
      topics: [
        { id: 'y7-19a', code: '19A', title: 'Data and dot plots', page: 506 },
        { id: 'y7-19b', code: '19B', title: 'Mode', page: 509 },
        { id: 'y7-19c', code: '19C', title: 'Stem-and-leaf plots', page: 512 },
        { id: 'y7-19d', code: '19D', title: 'Median, mean and range', page: 514 }
      ]
    },
    {
      id: 'y7-20',
      title: 'Polyhedra and three-dimensional drawing',
      modules: 2,
      topics: [
        { id: 'y7-20a', code: '20A', title: 'Polyhedra', page: 523 },
        { id: 'y7-20b', code: '20B', title: 'Drawing a solid', page: 527 }
      ]
    },
    {
      id: 'y7-21',
      title: 'Review and problem-solving',
      modules: 2,
      topics: [
        { id: 'y7-21a', code: '21A', title: 'Review', page: 534 },
        { id: 'y7-21b', code: '21B', title: 'Tessellations', page: 544 }
      ]
    },
    {
      id: 'y7-22',
      title: 'Sets and Venn diagrams',
      modules: 8,
      topics: [
        { id: 'y7-22a', code: '22A', title: 'Describing and naming sets' },
        { id: 'y7-22b', code: '22B', title: 'Finite and infinite sets' },
        { id: 'y7-22c', code: '22C', title: 'Subsets of a set' },
        { id: 'y7-22d', code: '22D', title: 'Sets and the number line' },
        { id: 'y7-22e', code: '22E', title: 'Union and intersection' },
        { id: 'y7-22f', code: '22F', title: 'Set complements and Venn diagrams' },
        { id: 'y7-22g', code: '22G', title: 'Keeping count with Venn diagrams' },
        { id: 'y7-22h', code: '22H', title: 'Problem-solving using Venn diagrams' }
      ]
    }
  ],
  'Year 8': [
    {
      id: 'y8-1',
      title: 'Chapter 1: Whole numbers',
      modules: 2,
      topics: [
        { id: 'y8-1a', code: '1A', title: 'Addition and subtraction of whole numbers' },
        { id: 'y8-1b', code: '1B', title: 'Multiplication and division of whole numbers' }
      ]
    },
    {
      id: 'y8-2',
      title: 'Chapter 2: Fractions and decimals',
      modules: 7,
      topics: [
        { id: 'y8-2a', code: '2A', title: 'Equivalent fractions and simplest form' },
        { id: 'y8-2b', code: '2B', title: 'Adding and subtracting fractions' },
        { id: 'y8-2c', code: '2C', title: 'Multiplying and dividing fractions' },
        { id: 'y8-2d', code: '2D', title: 'The unitary method' },
        { id: 'y8-2e', code: '2E', title: 'Decimal notation' },
        { id: 'y8-2f', code: '2F', title: 'Operations on decimals' },
        { id: 'y8-2g', code: '2G', title: 'Fractions, decimals and rounding' }
      ]
    },
    {
      id: 'y8-3',
      title: 'Chapter 3: Review of factors and indices',
      modules: 5,
      topics: [
        { id: 'y8-3a', code: '3A', title: 'Factors, prime and composite numbers, multiples' },
        { id: 'y8-3b', code: '3B', title: 'Indices and the index laws' },
        { id: 'y8-3c', code: '3C', title: 'Order of operations' },
        { id: 'y8-3d', code: '3D', title: 'Divisibility tests' },
        { id: 'y8-3e', code: '3E', title: 'Prime factorisation and its applications' }
      ]
    },
    {
      id: 'y8-4',
      title: 'Chapter 4: Negative numbers',
      modules: 7,
      topics: [
        { id: 'y8-4a', code: '4A', title: 'Negative integers' },
        { id: 'y8-4b', code: '4B', title: 'Addition and subtraction of a positive integer' },
        { id: 'y8-4c', code: '4C', title: 'Addition and subtraction of a negative integer' },
        { id: 'y8-4d', code: '4D', title: 'Multiplication and division with negative integers' },
        { id: 'y8-4e', code: '4E', title: 'Indices and order of operations' },
        { id: 'y8-4f', code: '4F', title: 'The Cartesian plane' },
        { id: 'y8-4g', code: '4G', title: 'Negative fractions' }
      ]
    },
    {
      id: 'y8-5',
      title: 'Chapter 5: Review of geometry',
      modules: 7,
      topics: [
        { id: 'y8-5a', code: '5A', title: 'Angles at a point' },
        { id: 'y8-5b', code: '5B', title: 'Angles associated with transversals' },
        { id: 'y8-5c', code: '5C', title: 'Further problems involving parallel lines' },
        { id: 'y8-5d', code: '5D', title: 'Proving that two lines are parallel' },
        { id: 'y8-5e', code: '5E', title: 'Angles in triangles' },
        { id: 'y8-5f', code: '5F', title: 'Isosceles and equilateral triangles' },
        { id: 'y8-5g', code: '5G', title: 'Quadrilaterals' }
      ]
    },
    {
      id: 'y8-6',
      title: 'Chapter 6: Algebra - part 1',
      modules: 7,
      topics: [
        { id: 'y8-6a', code: '6A', title: 'Notation and substitution' },
        { id: 'y8-6b', code: '6B', title: 'Solving equations' },
        { id: 'y8-6c', code: '6C', title: 'Expanding brackets' },
        { id: 'y8-6d', code: '6D', title: 'Solving equations with brackets' },
        { id: 'y8-6e', code: '6E', title: 'Collecting like terms and solving equations' },
        { id: 'y8-6f', code: '6F', title: 'Problem-solving using algebra' },
        { id: 'y8-6g', code: '6G', title: 'Multiplying and dividing algebraic fractions' }
      ]
    },
    {
      id: 'y8-7',
      title: 'Chapter 7: Percentages',
      modules: 8,
      topics: [
        { id: 'y8-7a', code: '7A', title: 'Review of percentages' },
        { id: 'y8-7b', code: '7B', title: 'Changing fractions to percentages and percentages to fractions (revisited)' },
        { id: 'y8-7c', code: '7C', title: 'Sums, differences and products of percentages' },
        { id: 'y8-7d', code: '7D', title: 'Simple interest' },
        { id: 'y8-7e', code: '7E', title: 'Discount' },
        { id: 'y8-7f', code: '7F', title: 'Percentage increase and decrease' },
        { id: 'y8-7g', code: '7G', title: 'The unitary method' },
        { id: 'y8-7h', code: '7H', title: 'Simple interest II' }
      ]
    },
    {
      id: 'y8-8',
      title: "Chapter 8: Pythagoras' theorem",
      modules: 3,
      topics: [
        { id: 'y8-8a', code: '8A', title: "Applying Pythagoras' theorem" },
        { id: 'y8-8b', code: '8B', title: 'Finding a shorter side' },
        { id: 'y8-8c', code: '8C', title: 'Irrational numbers' }
      ]
    },
    {
      id: 'y8-9',
      title: 'Chapter 9: Review and problem-solving',
      modules: 4,
      topics: [
        { id: 'y8-9a', code: '9A', title: 'Review' },
        { id: 'y8-9b', code: '9B', title: 'Problem-solving' },
        { id: 'y8-9c', code: '9C', title: 'Modular arithmetic and congruence' },
        { id: 'y8-9d', code: '9D', title: 'Addition, multiplication and powers in modular arithmetic' }
      ]
    },
    {
      id: 'y8-10',
      title: 'Chapter 10: Rates and ratios',
      modules: 6,
      topics: [
        { id: 'y8-10a', code: '10A', title: 'Review of the unitary method' },
        { id: 'y8-10b', code: '10B', title: 'Solving problems using the unitary method' },
        { id: 'y8-10c', code: '10C', title: 'Speed' },
        { id: 'y8-10d', code: '10D', title: 'Ratios' },
        { id: 'y8-10e', code: '10E', title: 'Using ratios in problems' },
        { id: 'y8-10f', code: '10F', title: 'Scale drawings' }
      ]
    },
    {
      id: 'y8-11',
      title: 'Chapter 11: Algebra - part 2',
      modules: 4,
      topics: [
        { id: 'y8-11a', code: '11A', title: 'Expanding brackets and collecting like terms' },
        { id: 'y8-11b', code: '11B', title: 'Addition and subtraction of algebraic fractions' },
        { id: 'y8-11c', code: '11C', title: 'Solving equations' },
        { id: 'y8-11d', code: '11D', title: 'Problem-solving with equations' }
      ]
    },
    {
      id: 'y8-12',
      title: 'Chapter 12: Congruent triangles',
      modules: 6,
      topics: [
        { id: 'y8-12a', code: '12A', title: 'Congruence of figures in the plane' },
        { id: 'y8-12b', code: '12B', title: 'Congruent triangles' },
        { id: 'y8-12c', code: '12C', title: 'Congruent triangles: The SSS and AAS tests' },
        { id: 'y8-12d', code: '12D', title: 'Congruent triangles: The SAS and RHS tests' },
        { id: 'y8-12e', code: '12E', title: 'Using congruence in geometrical problems' },
        { id: 'y8-12f', code: '12F', title: 'Congruence and special triangles' }
      ]
    },
    {
      id: 'y8-13',
      title: 'Chapter 13: Congruence and special quadrilaterals',
      modules: 3,
      topics: [
        { id: 'y8-13a', code: '13A', title: 'Parallelograms and their properties' },
        { id: 'y8-13b', code: '13B', title: 'Rhombuses and their properties' },
        { id: 'y8-13c', code: '13C', title: 'Rectangles and squares and their properties' }
      ]
    },
    {
      id: 'y8-14',
      title: 'Chapter 14: Circles',
      modules: 4,
      topics: [
        { id: 'y8-14a', code: '14A', title: 'Features of the circle' },
        { id: 'y8-14b', code: '14B', title: 'Circumference of a circle' },
        { id: 'y8-14c', code: '14C', title: 'Area of a circle' },
        { id: 'y8-14d', code: '14D', title: 'Areas of composite figures' }
      ]
    },
    {
      id: 'y8-15',
      title: 'Chapter 15: Areas, volumes and time',
      modules: 8,
      topics: [
        { id: 'y8-15a', code: '15A', title: 'Review of area and length' },
        { id: 'y8-15b', code: '15B', title: 'Areas of special quadrilaterals' },
        { id: 'y8-15c', code: '15C', title: 'Volume of a rectangular prism' },
        { id: 'y8-15d', code: '15D', title: 'Volumes of other prisms' },
        { id: 'y8-15e', code: '15E', title: 'Volume of a cylinder' },
        { id: 'y8-15f', code: '15F', title: 'Surface area of a prism' },
        { id: 'y8-15g', code: '15G', title: 'Conversion of units' },
        { id: 'y8-15h', code: '15H', title: 'Time' }
      ]
    },
    {
      id: 'y8-16',
      title: 'Chapter 16: Probability',
      modules: 4,
      topics: [
        { id: 'y8-16a', code: '16A', title: 'An introduction to probability' },
        { id: 'y8-16b', code: '16B', title: "'Or' and 'and'" },
        { id: 'y8-16c', code: '16C', title: 'Two-way tables' },
        { id: 'y8-16d', code: '16D', title: 'Further uses of Venn diagrams' }
      ]
    },
    {
      id: 'y8-17',
      title: 'Chapter 17: Formulas and factorisation',
      modules: 4,
      topics: [
        { id: 'y8-17a', code: '17A', title: 'Formulas' },
        { id: 'y8-17b', code: '17B', title: 'Expansion and factorisation' },
        { id: 'y8-17c', code: '17C', title: 'Binomial products' },
        { id: 'y8-17d', code: '17D', title: 'Factorisation of simple quadratics' }
      ]
    },
    {
      id: 'y8-18',
      title: 'Chapter 18: Graphing straight lines',
      modules: 8,
      topics: [
        { id: 'y8-18a', code: '18A', title: 'The Cartesian plane' },
        { id: 'y8-18b', code: '18B', title: 'Straight-line graphs that pass through the origin' },
        { id: 'y8-18c', code: '18C', title: 'Straight-line graphs that do not pass through the origin' },
        { id: 'y8-18d', code: '18D', title: 'Points and lines' },
        { id: 'y8-18e', code: '18E', title: 'The y-intercept and the gradient of a line' },
        { id: 'y8-18f', code: '18F', title: 'More on gradients' },
        { id: 'y8-18g', code: '18G', title: 'Applications to constant rate problems' },
        { id: 'y8-18h', code: '18H', title: 'Not all graphs are straight lines' }
      ]
    },
    {
      id: 'y8-19',
      title: 'Chapter 19: Statistics',
      modules: 3,
      topics: [
        { id: 'y8-19a', code: '19A', title: 'Comparing means and medians' },
        { id: 'y8-19b', code: '19B', title: 'Sampling data' },
        { id: 'y8-19c', code: '19C', title: 'Variation of means and proportions' }
      ]
    },
    {
      id: 'y8-20',
      title: 'Chapter 20: Review and problem-solving',
      modules: 3,
      topics: [
        { id: 'y8-20a', code: '20A', title: 'Review' },
        { id: 'y8-20b', code: '20B', title: 'Problem-solving' },
        { id: 'y8-20c', code: '20C', title: 'Fibonacci sequences' }
      ]
    }
  ],
  'Year 9': [
    {
      id: 'y9-1',
      title: 'Chapter 1: Algebra',
      modules: 8,
      topics: [
        { id: 'y9-1a', code: '1A', title: 'Substitution' },
        { id: 'y9-1b', code: '1B', title: 'Like terms' },
        { id: 'y9-1c', code: '1C', title: 'Multiplication and division' },
        { id: 'y9-1d', code: '1D', title: 'Simple expansion of brackets' },
        { id: 'y9-1e', code: '1E', title: 'Binomial products' },
        { id: 'y9-1f', code: '1F', title: 'Perfect squares' },
        { id: 'y9-1g', code: '1G', title: 'Difference of two squares' },
        { id: 'y9-1h', code: '1H', title: 'Miscellaneous questions' }
      ]
    },
    {
      id: 'y9-2',
      title: "Chapter 2: Pythagoras' theorem and surds",
      modules: 9,
      topics: [
        { id: 'y9-2a', code: '2A', title: "Review of Pythagoras' theorem and applications" },
        { id: 'y9-2b', code: '2B', title: 'Simplifying surds' },
        { id: 'y9-2c', code: '2C', title: 'Addition and subtraction of surds' },
        { id: 'y9-2d', code: '2D', title: 'Multiplication and division of surds' },
        { id: 'y9-2e', code: '2E', title: 'Special products' },
        { id: 'y9-2f', code: '2F', title: 'Rationalising the denominator' },
        { id: 'y9-2g', code: '2G', title: "Applications of Pythagoras' theorem in three dimensions" },
        { id: 'y9-2h', code: '2H', title: 'Binomial denominators' },
        { id: 'y9-2i', code: '2I', title: 'Irrational numbers and surds' }
      ]
    },
    {
      id: 'y9-3',
      title: 'Chapter 3: Consumer arithmetic',
      modules: 7,
      topics: [
        { id: 'y9-3a', code: '3A', title: 'Review of percentages' },
        { id: 'y9-3b', code: '3B', title: 'Using percentages' },
        { id: 'y9-3c', code: '3C', title: 'Simple interest' },
        { id: 'y9-3d', code: '3D', title: 'Percentage increase and decrease' },
        { id: 'y9-3e', code: '3E', title: 'Repeated increase and decrease' },
        { id: 'y9-3f', code: '3F', title: 'Compound interest' },
        { id: 'y9-3g', code: '3G', title: 'Depreciation' }
      ]
    },
    {
      id: 'y9-4',
      title: 'Chapter 4: Factorisation',
      modules: 5,
      topics: [
        { id: 'y9-4a', code: '4A', title: 'Factorisation using common factors' },
        { id: 'y9-4b', code: '4B', title: 'Factorisation using the difference of two squares' },
        { id: 'y9-4c', code: '4C', title: 'Factorisation of simple quadratics' },
        { id: 'y9-4d', code: '4D', title: 'Quadratics with common factors' },
        { id: 'y9-4e', code: '4E', title: 'Using factorisation to simplify algebraic expressions' }
      ]
    },
    {
      id: 'y9-5',
      title: 'Chapter 5: Linear equations and inequalities',
      modules: 8,
      topics: [
        { id: 'y9-5a', code: '5A', title: 'Expressions' },
        { id: 'y9-5b', code: '5B', title: 'Solving simple linear equations' },
        { id: 'y9-5c', code: '5C', title: 'Equations with brackets' },
        { id: 'y9-5d', code: '5D', title: 'Linear equations involving fractions' },
        { id: 'y9-5e', code: '5E', title: 'Using linear equations to solve problems' },
        { id: 'y9-5f', code: '5F', title: 'Literal equations' },
        { id: 'y9-5g', code: '5G', title: 'Inequalities' },
        { id: 'y9-5h', code: '5H', title: 'Solving linear inequalities' }
      ]
    },
    {
      id: 'y9-6',
      title: 'Chapter 6: Formulas',
      modules: 3,
      topics: [
        { id: 'y9-6a', code: '6A', title: 'Substitution into formulas' },
        { id: 'y9-6b', code: '6B', title: 'Changing the subject of a formula' },
        { id: 'y9-6c', code: '6C', title: 'Constructing formulas' }
      ]
    },
    {
      id: 'y9-7',
      title: 'Chapter 7: Congruence and special quadrilaterals',
      modules: 5,
      topics: [
        { id: 'y9-7a', code: '7A', title: 'Review of angles' },
        { id: 'y9-7b', code: '7B', title: 'Reasoning with angles' },
        { id: 'y9-7c', code: '7C', title: 'Using congruence' },
        { id: 'y9-7d', code: '7D', title: 'Parallelograms' },
        { id: 'y9-7e', code: '7E', title: 'Tests for rhombuses, rectangles and squares' }
      ]
    },
    {
      id: 'y9-8',
      title: 'Chapter 8: Index laws',
      modules: 5,
      topics: [
        { id: 'y9-8a', code: '8A', title: 'The index laws' },
        { id: 'y9-8b', code: '8B', title: 'Negative indices' },
        { id: 'y9-8c', code: '8C', title: 'Fractional indices' },
        { id: 'y9-8d', code: '8D', title: 'Scientific notation' },
        { id: 'y9-8e', code: '8E', title: 'Significant figures' }
      ]
    },
    {
      id: 'y9-9',
      title: 'Chapter 9: Enlargements and similarity',
      modules: 5,
      topics: [
        { id: 'y9-9a', code: '9A', title: 'Enlargements' },
        { id: 'y9-9b', code: '9B', title: 'Using ratios in similar figures' },
        { id: 'y9-9c', code: '9C', title: 'The AAA similarity test for triangles' },
        { id: 'y9-9d', code: '9D', title: 'The SAS similarity test for triangles' },
        { id: 'y9-9e', code: '9E', title: 'The SSS and RHS similarity tests' }
      ]
    },
    {
      id: 'y9-10',
      title: 'Chapter 10: Review and problem-solving',
      modules: 2,
      topics: [
        { id: 'y9-10a', code: '10A', title: 'Review' },
        { id: 'y9-10b', code: '10B', title: 'Problem-solving' }
      ]
    },
    {
      id: 'y9-11',
      title: 'Chapter 11: Coordinate geometry',
      modules: 8,
      topics: [
        { id: 'y9-11a', code: '11A', title: 'Distance between two points' },
        { id: 'y9-11b', code: '11B', title: 'The midpoint of an interval' },
        { id: 'y9-11c', code: '11C', title: 'The gradient of a line' },
        { id: 'y9-11d', code: '11D', title: 'The equation of a straight line' },
        { id: 'y9-11e', code: '11E', title: 'Graphing straight lines' },
        { id: 'y9-11f', code: '11F', title: 'The equation of a line using the gradient and a point' },
        { id: 'y9-11g', code: '11G', title: 'Parallel and perpendicular straight lines' },
        { id: 'y9-11h', code: '11H', title: 'The equation of a circle' }
      ]
    },
    {
      id: 'y9-12',
      title: 'Chapter 12: Probability',
      modules: 5,
      topics: [
        { id: 'y9-12a', code: '12A', title: 'An introduction to probability' },
        { id: 'y9-12b', code: '12B', title: 'The complement, union and intersection' },
        { id: 'y9-12c', code: '12C', title: 'Relative frequency' },
        { id: 'y9-12d', code: '12D', title: 'Multi-stage experiments' },
        { id: 'y9-12e', code: '12E', title: 'Two-step experiments involving replacement' }
      ]
    },
    {
      id: 'y9-13',
      title: 'Chapter 13: Trigonometry',
      modules: 7,
      topics: [
        { id: 'y9-13a', code: '13A', title: 'Introduction' },
        { id: 'y9-13b', code: '13B', title: 'The tangent ratio' },
        { id: 'y9-13c', code: '13C', title: 'The three basic trigonometric ratios' },
        { id: 'y9-13d', code: '13D', title: 'Finding angles' },
        { id: 'y9-13e', code: '13E', title: 'Miscellaneous exercises' },
        { id: 'y9-13f', code: '13F', title: 'Solving problems using trigonometry' },
        { id: 'y9-13g', code: '13G', title: 'True bearings' }
      ]
    },
    {
      id: 'y9-14',
      title: 'Chapter 14: Simultaneous linear equations',
      modules: 6,
      topics: [
        { id: 'y9-14a', code: '14A', title: 'Solving simultaneous equations by drawing graphs' },
        { id: 'y9-14b', code: '14B', title: 'Substitution' },
        { id: 'y9-14c', code: '14C', title: 'Elimination' },
        { id: 'y9-14d', code: '14D', title: 'Problems involving simultaneous linear equations' },
        { id: 'y9-14e', code: '14E', title: 'Geometry and simultaneous equations' },
        { id: 'y9-14f', code: '14F', title: 'Families of straight lines' }
      ]
    },
    {
      id: 'y9-15',
      title: 'Chapter 15: Further factorisation',
      modules: 7,
      topics: [
        { id: 'y9-15a', code: '15A', title: 'Review of factorisation' },
        { id: 'y9-15b', code: '15B', title: 'Grouping' },
        { id: 'y9-15c', code: '15C', title: 'Factorising monic quadratics' },
        { id: 'y9-15d', code: '15D', title: 'Factorising the general quadratic ax^2 + bx + c' },
        { id: 'y9-15e', code: '15E', title: 'Simplifying, multiplying and dividing algebraic fractions' },
        { id: 'y9-15f', code: '15F', title: 'Adding and subtracting algebraic fractions' },
        { id: 'y9-15g', code: '15G', title: 'Completing the square' }
      ]
    },
    {
      id: 'y9-16',
      title: 'Chapter 16: Measurement—areas, volumes and time',
      modules: 6,
      topics: [
        { id: 'y9-16a', code: '16A', title: 'Review of area' },
        { id: 'y9-16b', code: '16B', title: 'Review of surface area of a prism' },
        { id: 'y9-16c', code: '16C', title: 'Surface area of a cylinder' },
        { id: 'y9-16d', code: '16D', title: 'Volumes' },
        { id: 'y9-16e', code: '16E', title: 'Conversion of units' },
        { id: 'y9-16f', code: '16F', title: 'Small and large units of measurement' }
      ]
    },
    {
      id: 'y9-17',
      title: 'Chapter 17: Quadratic equations',
      modules: 6,
      topics: [
        { id: 'y9-17a', code: '17A', title: 'Solution of simple quadratic equations' },
        { id: 'y9-17b', code: '17B', title: 'Solution of quadratic equations when the coefficient of x^2 is not 1' },
        { id: 'y9-17c', code: '17C', title: 'Quadratics in disguise' },
        { id: 'y9-17d', code: '17D', title: 'Applications of quadratic equations' },
        { id: 'y9-17e', code: '17E', title: 'Graphs of quadratics' },
        { id: 'y9-17f', code: '17F', title: 'Solving quadratic equations by completing the square' }
      ]
    },
    {
      id: 'y9-18',
      title: 'Chapter 18: Rates and direct proportion',
      modules: 2,
      topics: [
        { id: 'y9-18a', code: '18A', title: 'Rates' },
        { id: 'y9-18b', code: '18B', title: 'Direct proportion' }
      ]
    },
    {
      id: 'y9-19',
      title: 'Chapter 19: Statistics',
      modules: 5,
      topics: [
        { id: 'y9-19a', code: '19A', title: 'Stem-and-leaf plots and back-to-back stem-and-leaf plots' },
        { id: 'y9-19b', code: '19B', title: 'Grouped data' },
        { id: 'y9-19c', code: '19C', title: 'Histograms and summary of representations' },
        { id: 'y9-19d', code: '19D', title: 'Mean, median, mode and range' },
        { id: 'y9-19e', code: '19E', title: 'The statistical investigation process' }
      ]
    },
    {
      id: 'y9-20',
      title: 'Chapter 20: Review and problem-solving',
      modules: 2,
      topics: [
        { id: 'y9-10a', code: '20A', title: 'Review' },
        { id: 'y9-10b', code: '20B', title: 'Problem-solving' }
      ]
    }
  ],
  'Year 10': [
    {
      id: 'y10-1',
      title: 'Chapter 1: Consumer arithmetic',
      modules: 5,
      topics: [
        { id: 'y10-1a', code: '1A', title: 'Review of percentages' },
        { id: 'y10-1b', code: '1B', title: 'Percentage increase and decrease' },
        { id: 'y10-1c', code: '1C', title: 'Repeated increases and decreases' },
        { id: 'y10-1d', code: '1D', title: 'Compound interest' },
        { id: 'y10-1e', code: '1E', title: 'Compound depreciation' }
      ]
    },
    {
      id: 'y10-2',
      title: 'Chapter 2: Review of surds',
      modules: 5,
      topics: [
        { id: 'y10-2a', code: '2A', title: 'Irrational numbers and surds' },
        { id: 'y10-2b', code: '2B', title: 'Addition and subtraction of surds' },
        { id: 'y10-2c', code: '2C', title: 'Multiplication and division of surds' },
        { id: 'y10-2d', code: '2D', title: 'Special products' },
        { id: 'y10-2e', code: '2E', title: 'Rationalising denominators' }
      ]
    },
    {
      id: 'y10-3',
      title: 'Chapter 3: Algebra review',
      modules: 9,
      topics: [
        { id: 'y10-3a', code: '3A', title: 'Expanding brackets and collecting like terms' },
        { id: 'y10-3b', code: '3B', title: 'Solving linear equations and inequalities' },
        { id: 'y10-3c', code: '3C', title: 'More difficult linear equations and inequalities' },
        { id: 'y10-3d', code: '3D', title: 'Formulas' },
        { id: 'y10-3e', code: '3E', title: 'Factorising a difference of two squares' },
        { id: 'y10-3f', code: '3F', title: 'Monic quadratics and grouping' },
        { id: 'y10-3g', code: '3G', title: 'Non-monic quadratics' },
        { id: 'y10-3h', code: '3H', title: 'An introduction to algebraic fractions' },
        { id: 'y10-3i', code: '3I', title: 'Further algebraic fractions' }
      ]
    },
    {
      id: 'y10-4',
      title: 'Chapter 4: Lines and linear equations',
      modules: 6,
      topics: [
        { id: 'y10-4a', code: '4A', title: 'Distance between two points and midpoint of an interval' },
        { id: 'y10-4b', code: '4B', title: 'Gradient' },
        { id: 'y10-4c', code: '4C', title: 'Gradient-intercept form and the general form of the equation of a line' },
        { id: 'y10-4d', code: '4D', title: 'Point-gradient form of an equation of a line' },
        { id: 'y10-4e', code: '4E', title: 'Review of simultaneous linear equations' },
        { id: 'y10-4f', code: '4F', title: 'Solving word problems using simultaneous equations' }
      ]
    },
    {
      id: 'y10-5',
      title: 'Chapter 5: Quadratic equations',
      modules: 6,
      topics: [
        { id: 'y10-5a', code: '5A', title: 'Solution of quadratic equations' },
        { id: 'y10-5b', code: '5B', title: 'Rearranging to standard form' },
        { id: 'y10-5c', code: '5C', title: 'Applications of quadratic equations' },
        { id: 'y10-5d', code: '5D', title: 'Perfect squares and completing the square' },
        { id: 'y10-5e', code: '5E', title: 'Solving quadratic equations by completing the square' },
        { id: 'y10-5f', code: '5F', title: 'The quadratic formula' }
      ]
    },
    {
      id: 'y10-6',
      title: 'Chapter 6: Surface area and volume',
      modules: 5,
      topics: [
        { id: 'y10-6a', code: '6A', title: 'Review of prisms and cylinders' },
        { id: 'y10-6b', code: '6B', title: 'Pyramids' },
        { id: 'y10-6c', code: '6C', title: 'Cones' },
        { id: 'y10-6d', code: '6D', title: 'Spheres' },
        { id: 'y10-6e', code: '6E', title: 'Enlargement' }
      ]
    },
    {
      id: 'y10-7',
      title: 'Chapter 7: The parabola',
      modules: 7,
      topics: [
        { id: 'y10-7a', code: '7A', title: 'Parabolas congruent to y = x^2' },
        { id: 'y10-7b', code: '7B', title: 'Sketching the graph of the quadratic y = ax^2 + bx + c, where a = +/-1' },
        { id: 'y10-7c', code: '7C', title: 'The general quadratic y = ax^2 + bx + c' },
        { id: 'y10-7d', code: '7D', title: 'Symmetry and factorisation' },
        { id: 'y10-7e', code: '7E', title: 'Sketching via the discriminant' },
        { id: 'y10-7f', code: '7F', title: 'Applications involving quadratics' },
        { id: 'y10-7g', code: '7G', title: 'Quadratic inequalities' }
      ]
    },
    {
      id: 'y10-8',
      title: 'Chapter 8: Review of congruence and similarity',
      modules: 4,
      topics: [
        { id: 'y10-8a', code: '8A', title: 'Review of triangles' },
        { id: 'y10-8b', code: '8B', title: 'Congruence' },
        { id: 'y10-8c', code: '8C', title: 'Enlargements and similarity' },
        { id: 'y10-8d', code: '8D', title: 'Similarity and intervals within a triangle' }
      ]
    },
    {
      id: 'y10-9',
      title: 'Chapter 9: Indices, exponentials and logarithms - part 1',
      modules: 7,
      topics: [
        { id: 'y10-9a', code: '9A', title: 'Review of powers and integer indices' },
        { id: 'y10-9b', code: '9B', title: 'Scientific notation and significant figures' },
        { id: 'y10-9c', code: '9C', title: 'Powers with rational indices' },
        { id: 'y10-9d', code: '9D', title: 'Graphs of exponential functions' },
        { id: 'y10-9e', code: '9E', title: 'Exponential equations' },
        { id: 'y10-9f', code: '9F', title: 'Exponential growth and decay' },
        { id: 'y10-9g', code: '9G', title: 'Logarithms' }
      ]
    },
    {
      id: 'y10-10',
      title: 'Chapter 10: Review and problem-solving',
      modules: 3,
      topics: [
        { id: 'y10-10a', code: '10A', title: 'Review' },
        { id: 'y10-10b', code: '10B', title: 'Miscellaneous questions' },
        { id: 'y10-10c', code: '10C', title: 'Problem-solving' }
      ]
    },
    {
      id: 'y10-11',
      title: 'Chapter 11: Circles, hyperbolas and simultaneous equations',
      modules: 4,
      topics: [
        { id: 'y10-11a', code: '11A', title: 'Cartesian equation of a circle' },
        { id: 'y10-11b', code: '11B', title: 'The rectangular hyperbola' },
        { id: 'y10-11c', code: '11C', title: 'Intersections of graphs' },
        { id: 'y10-11d', code: '11D', title: 'Regions of the plane' }
      ]
    },
    {
      id: 'y10-12',
      title: 'Chapter 12: Further trigonometry',
      modules: 8,
      topics: [
        { id: 'y10-12a', code: '12A', title: 'Review of the basic trigonometric ratios' },
        { id: 'y10-12b', code: '12B', title: 'Exact values' },
        { id: 'y10-12c', code: '12C', title: 'Three-dimensional trigonometry' },
        { id: 'y10-12d', code: '12D', title: 'The sine rule' },
        { id: 'y10-12e', code: '12E', title: 'Trigonometric ratios of obtuse angles' },
        { id: 'y10-12f', code: '12F', title: 'The cosine rule' },
        { id: 'y10-12g', code: '12G', title: 'Finding angles using the cosine rule' },
        { id: 'y10-12h', code: '12H', title: 'Area of a triangle' }
      ]
    },
    {
      id: 'y10-13',
      title: 'Chapter 13: Circle geometry',
      modules: 6,
      topics: [
        { id: 'y10-13a', code: '13A', title: 'Angles at the centre and the circumference' },
        { id: 'y10-13b', code: '13B', title: 'Angles at the circumference and cyclic quadrilaterals' },
        { id: 'y10-13c', code: '13C', title: 'Chords and angles at the centre' },
        { id: 'y10-13d', code: '13D', title: 'Tangents and radii' },
        { id: 'y10-13e', code: '13E', title: 'The alternate segment theorem' },
        { id: 'y10-13f', code: '13F', title: 'Similarity and circles' }
      ]
    },
    {
      id: 'y10-14',
      title: 'Chapter 14: Indices, exponentials and logarithms - part 2',
      modules: 4,
      topics: [
        { id: 'y10-14a', code: '14A', title: 'Logarithm rules' },
        { id: 'y10-14b', code: '14B', title: 'Change of base' },
        { id: 'y10-14c', code: '14C', title: 'Graphs of exponential and logarithm functions' },
        { id: 'y10-14d', code: '14D', title: 'Applications to science, population growth and finance' }
      ]
    },
    {
      id: 'y10-15',
      title: 'Chapter 15: Probability',
      modules: 5,
      topics: [
        { id: 'y10-15a', code: '15A', title: 'Review of probability' },
        { id: 'y10-15b', code: '15B', title: 'The complement, union and intersection' },
        { id: 'y10-15c', code: '15C', title: 'Conditional probability' },
        { id: 'y10-15d', code: '15D', title: 'Independent events' },
        { id: 'y10-15e', code: '15E', title: 'Sampling with replacement and without replacement' }
      ]
    },
    {
      id: 'y10-16',
      title: 'Chapter 16: Direct and inverse proportion',
      modules: 3,
      topics: [
        { id: 'y10-16a', code: '16A', title: 'Direct proportion' },
        { id: 'y10-16b', code: '16B', title: 'Inverse proportion' },
        { id: 'y10-16c', code: '16C', title: 'Proportionality in several variables' }
      ]
    },
    {
      id: 'y10-17',
      title: 'Chapter 17: Polynomials',
      modules: 8,
      topics: [
        { id: 'y10-17a', code: '17A', title: 'The language of polynomials' },
        { id: 'y10-17b', code: '17B', title: 'Adding, subtracting and multiplying polynomials' },
        { id: 'y10-17c', code: '17C', title: 'Dividing polynomials' },
        { id: 'y10-17d', code: '17D', title: 'The remainder theorem and factor theorem' },
        { id: 'y10-17e', code: '17E', title: 'Factorising polynomials' },
        { id: 'y10-17f', code: '17F', title: 'Polynomial equations' },
        { id: 'y10-17g', code: '17G', title: 'Sketching polynomials' },
        { id: 'y10-17h', code: '17H', title: 'Further sketching of polynomials' }
      ]
    },
    {
      id: 'y10-18',
      title: 'Chapter 18: Statistics',
      modules: 8,
      topics: [
        { id: 'y10-18a', code: '18A', title: 'The median and the interquartile range' },
        { id: 'y10-18b', code: '18B', title: 'Boxplots' },
        { id: 'y10-18c', code: '18C', title: 'Boxplots, histograms and outliers' },
        { id: 'y10-18d', code: '18D', title: 'The mean and the standard deviation' },
        { id: 'y10-18e', code: '18E', title: 'Interpreting the standard deviation' },
        { id: 'y10-18f', code: '18F', title: 'Time-series data' },
        { id: 'y10-18g', code: '18G', title: 'Bivariate data' },
        { id: 'y10-18h', code: '18H', title: 'Line of best fit' }
      ]
    },
    {
      id: 'y10-19',
      title: 'Chapter 19: Trigonometric functions',
      modules: 5,
      topics: [
        { id: 'y10-19a', code: '19A', title: 'Angles in the four quadrants' },
        { id: 'y10-19b', code: '19B', title: 'Finding angles' },
        { id: 'y10-19c', code: '19C', title: 'Angles of any magnitude' },
        { id: 'y10-19d', code: '19D', title: 'The trigonometric functions and their symmetries' },
        { id: 'y10-19e', code: '19E', title: 'Trigonometric equations' }
      ]
    },
    {
      id: 'y10-20',
      title: 'Chapter 20: Functions and inverse functions',
      modules: 5,
      topics: [
        { id: 'y10-20a', code: '20A', title: 'Functions and domains' },
        { id: 'y10-20b', code: '20B', title: 'Inverse functions' },
        { id: 'y10-20c', code: '20C', title: 'Function notation and the range of a function' },
        { id: 'y10-20d', code: '20D', title: 'Transformations of graphs of functions' },
        { id: 'y10-20e', code: '20E', title: 'Composites and inverses' }
      ]
    },
    {
      id: 'y10-21',
      title: 'Chapter 21: Review and problem-solving',
      modules: 2,
      topics: [
        { id: 'y10-21a', code: '21A', title: 'Review' },
        { id: 'y10-21b', code: '21B', title: 'Problem-solving' }
      ]
    }
  ],
  'Year 11': {
    'Standard': [
      { id: 'y11s-1', title: 'Algebra: Formulae & Equations', modules: 12 },
      { id: 'y11s-2', title: 'Measurement: Applications', modules: 10 },
      { id: 'y11s-3', title: 'Financial Maths: Interest', modules: 8 }
    ],
    'Advanced': [
      {
        id: 'y11a-1',
        title: 'Chapter 1: Algebra review',
        modules: 5,
        topics: [
          { id: 'y11a-1A', code: '1A', title: 'Expanding brackets' },
          { id: 'y11a-1B', code: '1B', title: 'Factoring' },
          { id: 'y11a-1C', code: '1C', title: 'Algebraic fractions' },
          { id: 'y11a-1D', code: '1D', title: 'Solving quadratic equations' },
          { id: 'y11a-1E', code: '1E', title: 'Solving simultaneous equations' }
        ]
      },
      {
        id: 'y11a-2',
        title: 'Chapter 2: Numbers and surds',
        modules: 4,
        topics: [
          { id: 'y11a-2A', code: '2A', title: 'Real numbers and intervals' },
          { id: 'y11a-2B', code: '2B', title: 'Surds and their arithmetic' },
          { id: 'y11a-2C', code: '2C', title: 'Further simplification of surds' },
          { id: 'y11a-2D', code: '2D', title: 'Rationalising the denominator' },
          { id: 'y11a-2E', code: '2E', title: 'Binomial expansion of surds' },
          { id: 'y11a-2F', code: '2F', title: 'Further rationalising the denominator' },
          { id: 'y11a-2G', code: '2G', title: 'Surd equations' }
        ]
      },
      {
        id: 'y11a-3',
        title: 'Chapter 3: Functions and graphs',
        modules: 9,
        topics: [
          { id: 'y11a-3A', code: '3A', title: 'Functions and function notation' },
          { id: 'y11a-3B', code: '3B', title: 'Functions, relations, and graphs' },
          { id: 'y11a-3C', code: '3C', title: 'Review of linear graphs' },
          { id: 'y11a-3D', code: '3D', title: 'Quadratic functions — factoring and the graph' },
          { id: 'y11a-3E', code: '3E', title: 'Completing the square and the graph' },
          { id: 'y11a-3F', code: '3F', title: 'The quadratic formulae and the graph' },
          { id: 'y11a-3G', code: '3G', title: 'Powers, cubics, and circles' },
          { id: 'y11a-3H', code: '3H', title: 'Two graphs that have asymptotes' },
          { id: 'y11a-3I', code: '3I', title: 'Direct and inverse variation' }
        ]
      },
      {
        id: 'y11a-4',
        title: 'Chapter 4: Equations and inequations',
        modules: 4,
        topics: [
          { id: 'y11a-4A', code: '4A', title: 'Linear equations and inequations' },
          { id: 'y11a-4B', code: '4B', title: 'Quadratic equations and inequations' },
          { id: 'y11a-4C', code: '4C', title: 'The discriminant' },
          { id: 'y11a-4D', code: '4D', title: 'Quadratic identities' }
        ]
      },
      {
        id: 'y11a-5',
        title: 'Chapter 5: Transformations and symmetry',
        modules: 8,
        topics: [
          { id: 'y11a-5A', code: '5A', title: 'Translations of known graphs' },
          { id: 'y11a-5B', code: '5B', title: 'Reflection in the y-axis and x-axis' },
          { id: 'y11a-5C', code: '5C', title: 'Even and odd symmetry' },
          { id: 'y11a-5D', code: '5D', title: 'Horizontal and vertical dilations' },
          { id: 'y11a-5E', code: '5E', title: 'The absolute value function' },
          { id: 'y11a-5F', code: '5F', title: 'Composite functions' },
          { id: 'y11a-5G', code: '5G', title: 'Combining transformations' },
          { id: 'y11a-5H', code: '5H', title: 'Continuity and piecewise-defined functions' }
        ]
      },
      {
        id: 'y11a-6',
        title: 'Chapter 6: Trigonometry',
        modules: 10,
        topics: [
          { id: 'y11a-6A', code: '6A', title: 'Trigonometry with right-angled triangles' },
          { id: 'y11a-6B', code: '6B', title: 'Problems involving right-angled triangles' },
          { id: 'y11a-6C', code: '6C', title: 'Trigonometric functions of a general angle' },
          { id: 'y11a-6D', code: '6D', title: 'Quadrant, sign, and related acute angle' },
          { id: 'y11a-6E', code: '6E', title: 'Given one trigonometric function, find another' },
          { id: 'y11a-6F', code: '6F', title: 'Trigonometric identities' },
          { id: 'y11a-6G', code: '6G', title: 'Trigonometric equations' },
          { id: 'y11a-6H', code: '6H', title: 'The sine rule and the area formula' },
          { id: 'y11a-6I', code: '6I', title: 'The cosine rule' },
          { id: 'y11a-6J', code: '6J', title: 'Problems involving general triangles' }
        ]
      },
      {
        id: 'y11a-7',
        title: 'Chapter 7: Lines in the coordinate plane',
        modules: 5,
        topics: [
          { id: 'y11a-7A', code: '7A', title: 'Lengths and midpoints of line segments' },
          { id: 'y11a-7B', code: '7B', title: 'Gradients of line segments and lines' },
          { id: 'y11a-7C', code: '7C', title: 'Equations of lines' },
          { id: 'y11a-7D', code: '7D', title: 'Further equations of lines' },
          { id: 'y11a-7E', code: '7E', title: 'Using pronumerals in place of numbers' }
        ]
      },
      {
        id: 'y11a-8',
        title: 'Chapter 8: Exponential and logarithmic functions',
        modules: 7,
        topics: [
          { id: 'y11a-8A', code: '8A', title: 'Indices' },
          { id: 'y11a-8B', code: '8B', title: 'Fractional indices' },
          { id: 'y11a-8C', code: '8C', title: 'Logarithms' },
          { id: 'y11a-8D', code: '8D', title: 'The laws for logarithms' },
          { id: 'y11a-8E', code: '8E', title: 'Equations involving logarithms and indices' },
          { id: 'y11a-8F', code: '8F', title: 'Exponential and logarithmic graphs' },
          { id: 'y11a-8G', code: '8G', title: 'Applications of these functions' }
        ]
      },
      {
        id: 'y11a-9',
        title: 'Chapter 9: Differentiation',
        modules: 12,
        topics: [
          { id: 'y11a-9A', code: '9A', title: 'Tangents and the derivative' },
          { id: 'y11a-9B', code: '9B', title: 'The derivative as a limit' },
          { id: 'y11a-9C', code: '9C', title: 'A rule for differentiating powers of x' },
          { id: 'y11a-9D', code: '9D', title: 'dy/dx notation — tangents and normals' },
          { id: 'y11a-9E', code: '9E', title: 'Differentiating powers with negative indices' },
          { id: 'y11a-9F', code: '9F', title: 'Differentiating powers with fractional indices' },
          { id: 'y11a-9G', code: '9G', title: 'The chain rule' },
          { id: 'y11a-9H', code: '9H', title: 'The product rule' },
          { id: 'y11a-9I', code: '9I', title: 'The quotient rule' },
          { id: 'y11a-9J', code: '9J', title: 'Rates of change' },
          { id: 'y11a-9K', code: '9K', title: 'Average velocity and average speed' },
          { id: 'y11a-9L', code: '9L', title: 'Instantaneous velocity and speed' }
        ]
      },
      {
        id: 'y11a-10',
        title: 'Chapter 10: Euler’s number',
        modules: 3,
        topics: [
          { id: 'y11a-10A', code: '10A', title: 'The exponential function base e' },
          { id: 'y11a-10B', code: '10B', title: 'Transformations of exponential functions' },
          { id: 'y11a-10C', code: '10C', title: 'The logarithmic function base e' }
        ]
      },
      {
        id: 'y11a-11',
        title: 'Chapter 11: Radian measure of angles',
        modules: 4,
        topics: [
          { id: 'y11a-11A', code: '11A', title: 'Radian measure of angle size' },
          { id: 'y11a-11B', code: '11B', title: 'Solving trigonometric equations' },
          { id: 'y11a-11C', code: '11C', title: 'Arcs and sectors of circles' },
          { id: 'y11a-11D', code: '11D', title: 'Trigonometric graphs in radians' }
        ]
      },
      {
        id: 'y11a-12',
        title: 'Chapter 12: Probability',
        modules: 7,
        topics: [
          { id: 'y11a-12A', code: '12A', title: 'Sets and Venn diagrams' },
          { id: 'y11a-12B', code: '12B', title: 'Probability and sample spaces' },
          { id: 'y11a-12C', code: '12C', title: 'Sample space graphs and tree diagrams' },
          { id: 'y11a-12D', code: '12D', title: 'Venn diagrams and the addition theorem' },
          { id: 'y11a-12E', code: '12E', title: 'Multi-stage experiments and the product rule' },
          { id: 'y11a-12F', code: '12F', title: 'Probability tree diagrams' },
          { id: 'y11a-12G', code: '12G', title: 'Conditional probability' }
        ]
      },
      {
        id: 'y11a-13',
        title: 'Chapter 13: Data and probability',
        modules: 3,
        topics: [
          { id: 'y11a-13A', code: '13A', title: 'Random variables and frequency tables' },
          { id: 'y11a-13B', code: '13B', title: 'Cumulative frequency' },
          { id: 'y11a-13C', code: '13C', title: 'Grouped data' }
        ]
      }
    ],
    'Extension 1': [
      { id: 'y11e1-1', title: 'Further Functions', modules: 10 },
      { id: 'y11e1-2', title: 'Trigonometric Identities', modules: 12 },
      { id: 'y11e1-3', title: 'Combinatorics', modules: 8 }
    ]
  },
  'Year 12': {
    'Standard': [
      { id: 'y12s-1', title: 'Financial Maths: Annuities', modules: 10 },
      { id: 'y12s-2', title: 'Statistical Analysis', modules: 12 }
    ],
    'Advanced': [
      {
        id: 'y12a-1',
        title: 'Chapter 1: Sequences and series',
        modules: 9,
        topics: [
          { id: 'y12a-1A', code: '1A', title: 'Sequences and how to specify them' },
          { id: 'y12a-1B', code: '1B', title: 'Arithmetic sequences' },
          { id: 'y12a-1C', code: '1C', title: 'Geometric sequences' },
          { id: 'y12a-1D', code: '1D', title: 'Solving problems involving APs and GPs' },
          { id: 'y12a-1E', code: '1E', title: 'Adding up the terms of a sequence' },
          { id: 'y12a-1F', code: '1F', title: 'Summing an arithmetic series' },
          { id: 'y12a-1G', code: '1G', title: 'Summing a geometric series' },
          { id: 'y12a-1H', code: '1H', title: 'The limiting sum of a geometric series' },
          { id: 'y12a-1I', code: '1I', title: 'Recurring decimals and geometric series' }
        ]
      },
      {
        id: 'y12a-2',
        title: 'Chapter 2: Graphs and equations',
        modules: 9,
        topics: [
          { id: 'y12a-2A', code: '2A', title: 'The sign of a function' },
          { id: 'y12a-2B', code: '2B', title: 'Vertical and horizontal asymptotes' },
          { id: 'y12a-2C', code: '2C', title: 'A curve-sketching menu' },
          { id: 'y12a-2D', code: '2D', title: 'Solving inequations' },
          { id: 'y12a-2E', code: '2E', title: 'Using graphs to solve equations and inequations' },
          { id: 'y12a-2F', code: '2F', title: 'Review of translations and reflections' },
          { id: 'y12a-2G', code: '2G', title: 'Dilations' },
          { id: 'y12a-2H', code: '2H', title: 'Combinations of transformations' },
          { id: 'y12a-2I', code: '2I', title: 'Trigonometric graphs' }
        ]
      },
      {
        id: 'y12a-3',
        title: 'Chapter 3: Curve-sketching using the derivative',
        modules: 8,
        topics: [
          { id: 'y12a-3A', code: '3A', title: 'Increasing, decreasing and stationary at a point' },
          { id: 'y12a-3B', code: '3B', title: 'Stationary points and turning points' },
          { id: 'y12a-3C', code: '3C', title: 'Second and higher derivatives' },
          { id: 'y12a-3D', code: '3D', title: 'Concavity and points of inflection' },
          { id: 'y12a-3E', code: '3E', title: 'Systematic curve sketching with the derivative' },
          { id: 'y12a-3F', code: '3F', title: 'Global maximum and minimum' },
          { id: 'y12a-3G', code: '3G', title: 'Applications of maximisation and minimisation' },
          { id: 'y12a-3H', code: '3H', title: 'Primitive functions' }
        ]
      },
      {
        id: 'y12a-4',
        title: 'Chapter 4: Integration',
        modules: 9,
        topics: [
          { id: 'y12a-4A', code: '4A', title: 'Areas and the definite integral' },
          { id: 'y12a-4B', code: '4B', title: 'The fundamental theorem of calculus' },
          { id: 'y12a-4C', code: '4C', title: 'The definite integral and its properties' },
          { id: 'y12a-4D', code: '4D', title: 'Challenge – proving the fundamental theorem' },
          { id: 'y12a-4E', code: '4E', title: 'The indefinite integral' },
          { id: 'y12a-4F', code: '4F', title: 'Finding areas by integration' },
          { id: 'y12a-4G', code: '4G', title: 'Areas of compound regions' },
          { id: 'y12a-4H', code: '4H', title: 'The trapezoidal rule' },
          { id: 'y12a-4I', code: '4I', title: 'The reverse chain rule' }
        ]
      },
      {
        id: 'y12a-5',
        title: 'Chapter 5: The exponential and logarithmic functions',
        modules: 11,
        topics: [
          { id: 'y12a-5A', code: '5A', title: 'Review of exponential functions base e' },
          { id: 'y12a-5B', code: '5B', title: 'Differentiation of exponential functions' },
          { id: 'y12a-5C', code: '5C', title: 'Applications of differentiation' },
          { id: 'y12a-5D', code: '5D', title: 'Integration of exponential functions' },
          { id: 'y12a-5E', code: '5E', title: 'Applications of integration' },
          { id: 'y12a-5F', code: '5F', title: 'Review of logarithmic functions' },
          { id: 'y12a-5G', code: '5G', title: 'Differentiation of logarithmic functions' },
          { id: 'y12a-5H', code: '5H', title: 'Applications of differentiation of loge x' },
          { id: 'y12a-5I', code: '5I', title: 'Integration of the reciprocal function' },
          { id: 'y12a-5J', code: '5J', title: 'Applications of integration of 1 / x' },
          { id: 'y12a-5K', code: '5K', title: 'Calculus with other bases' }
        ]
      },
      {
        id: 'y12a-6',
        title: 'Chapter 6: The trigonometric functions',
        modules: 5,
        topics: [
          { id: 'y12a-6A', code: '6A', title: 'The behaviour of sin x near the origin' },
          { id: 'y12a-6B', code: '6B', title: 'Differentiating the trigonometric functions' },
          { id: 'y12a-6C', code: '6C', title: 'Applications of differentiation' },
          { id: 'y12a-6D', code: '6D', title: 'Integrating the trigonometric functions' },
          { id: 'y12a-6E', code: '6E', title: 'Applications of integration' }
        ]
      },
      {
        id: 'y12a-7',
        title: 'Chapter 7: Motion and rates',
        modules: 6,
        topics: [
          { id: 'y12a-7A', code: '7A', title: 'Average velocity and speed' },
          { id: 'y12a-7B', code: '7B', title: 'Velocity and acceleration as derivatives' },
          { id: 'y12a-7C', code: '7C', title: 'Integrating with respect to time' },
          { id: 'y12a-7D', code: '7D', title: 'Rates and differentiation' },
          { id: 'y12a-7E', code: '7E', title: 'Rates and integration' },
          { id: 'y12a-7F', code: '7F', title: 'Exponential growth and decay' }
        ]
      },
      {
        id: 'y12a-8',
        title: 'Chapter 8: Series and finance',
        modules: 5,
        topics: [
          { id: 'y12a-8A', code: '8A', title: 'Applications of APs and GPs' },
          { id: 'y12a-8B', code: '8B', title: 'The use of logarithms with GPs' },
          { id: 'y12a-8C', code: '8C', title: 'Simple and compound interest' },
          { id: 'y12a-8D', code: '8D', title: 'Investing money by regular instalments' },
          { id: 'y12a-8E', code: '8E', title: 'Paying off a loan' }
        ]
      },
      {
        id: 'y12a-9',
        title: 'Chapter 9: Displaying and interpreting data',
        modules: 6,
        topics: [
          { id: 'y12a-9A', code: '9A', title: 'Displaying data' },
          { id: 'y12a-9B', code: '9B', title: 'Grouped data and histograms' },
          { id: 'y12a-9C', code: '9C', title: 'Quartiles and interquartile range' },
          { id: 'y12a-9D', code: '9D', title: 'Bivariate data' },
          { id: 'y12a-9E', code: '9E', title: 'Formulae for correlation and regression' },
          { id: 'y12a-9F', code: '9F', title: 'Using technology with bivariate data' }
        ]
      },
      {
        id: 'y12a-10',
        title: 'Chapter 10: Continuous probability distributions',
        modules: 7,
        topics: [
          { id: 'y12a-10A', code: '10A', title: 'Relative frequency' },
          { id: 'y12a-10B', code: '10B', title: 'Continuous distributions' },
          { id: 'y12a-10C', code: '10C', title: 'Mean and variance of a distribution' },
          { id: 'y12a-10D', code: '10D', title: 'The standard normal distribution' },
          { id: 'y12a-10E', code: '10E', title: 'General normal distributions' },
          { id: 'y12a-10F', code: '10F', title: 'Applications of the normal distribution' },
          { id: 'y12a-10G', code: '10G', title: 'Investigations using the normal distribution' }
        ]
      }
    ],
    'Extension 1': [
      { id: 'y12e1-1', title: 'Vectors', modules: 12 },
      { id: 'y12e1-2', title: 'Proof', modules: 10 }
    ],
    'Extension 2': [
      { id: 'y12e2-1', title: 'Complex Numbers', modules: 15 },
      { id: 'y12e2-2', title: 'Nature of Proof', modules: 12 },
      { id: 'y12e2-3', title: 'Integration Techniques', modules: 18 }
    ]
  }
};
