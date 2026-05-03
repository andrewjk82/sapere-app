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
      id: 'y3-1', 
      title: 'Multiplication & Division', 
      modules: 10,
      topics: [
        { id: 't1', title: 'Array models', status: 'done' },
        { id: 't2', title: 'Times tables (2, 5, 10)', status: 'active' },
        { id: 't3', title: 'Division as grouping', status: 'next' },
        { id: 't4', title: 'Word problems', status: 'next' }
      ]
    },
    { 
      id: 'y3-2', 
      title: 'Fractions & Decimals', 
      modules: 8,
      topics: [
        { id: 't1', title: 'Half and Quarter', status: 'done' },
        { id: 't2', title: 'Thirds and Eighths', status: 'next' },
        { id: 't3', title: 'Number line fractions', status: 'locked' }
      ]
    },
    { 
      id: 'y3-3', 
      title: 'Geometry & Space', 
      modules: 7,
      topics: [
        { id: 't1', title: '2D Shapes', status: 'locked' },
        { id: 't2', title: '3D Objects', status: 'locked' },
        { id: 't3', title: 'Symmetry', status: 'locked' }
      ]
    }
  ],
  'Year 4': [
    { id: 'y4-1', title: 'Large Numbers & Place Value', modules: 10 },
    { id: 'y4-2', title: 'Fractions, Decimals & Percentages', modules: 12 },
    { id: 'y4-3', title: 'Area & Perimeter', modules: 8 }
  ],
  'Year 5': [
    { id: 'y5-1', title: 'Order of Operations', modules: 8 },
    { id: 'y5-2', title: 'Decimals & Percentages', modules: 10 },
    { id: 'y5-3', title: 'Data Representation', modules: 7 },
    { id: 'y5-4', title: 'Volume & Capacity', modules: 8 }
  ],
  'Year 6': [
    { id: 'y6-1', title: 'Algebra Foundations', modules: 10 },
    { id: 'y6-2', title: 'Ratio & Rates', modules: 8 },
    { id: 'y6-3', title: 'Probability Basics', modules: 7 },
    { id: 'y6-4', title: 'Angles & Geometry', modules: 9 }
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
    { id: 'y8-1', title: 'Linear Relationships', modules: 12 },
    { id: 'y8-2', title: 'Pythagoras Theorem', modules: 8 },
    { id: 'y8-3', title: 'Probability & Statistics', modules: 10 },
    { id: 'y8-4', title: 'Surds & Indices', modules: 9 }
  ],
  'Year 9': [
    { id: 'y9-1', title: 'Simultaneous Equations', modules: 10 },
    { id: 'y9-2', title: 'Quadratic Expressions', modules: 12 },
    { id: 'y9-3', title: 'Trigonometry Basics', modules: 10 },
    { id: 'y9-4', title: 'Statistics & Data Analysis', modules: 8 }
  ],
  'Year 10': [
    { id: 'y10-1', title: 'Quadratic Equations', modules: 12 },
    { id: 'y10-2', title: 'Trigonometry: Advanced', modules: 10 },
    { id: 'y10-3', title: 'Logarithms & Exponentials', modules: 10 },
    { id: 'y10-4', title: 'Probability Distributions', modules: 9 }
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
          { id: 'y11a-2D', code: '2D', title: 'Rationalising the denominator' }
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
