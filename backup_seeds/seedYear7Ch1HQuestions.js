export const Y7_CH1H_QUESTIONS = [
  // Q1 (selected 3)
  {
    id: 'y7-1h-q1a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the short multiplication method:\n\\(42 \\times 6\\)',
    a: '252',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the units first, carry over if needed, then multiply the tens.',
    solutionSteps: [
      {
        explanation: 'Set up the multiplication vertically.',
        workingOut: '\\(\\begin{array}{r l} 42 \\\\ \\times \\quad 6 \\\\ \\hline \\end{array}\\)'
      },
      {
        explanation: 'Multiply the units: \\(2 \\times 6 = 12\\). Write down 2 and carry over 1 to the tens column.',
        workingOut: '\\(\\begin{array}{r l} \\overset{1}{\\phantom{0}}42 \\\\ \\times \\quad 6 \\\\ \\hline 2 \\end{array}\\)'
      },
      {
        explanation: 'Multiply the tens: \\(4 \\times 6 = 24\\). Add the carried over 1: \\(24 + 1 = 25\\). Write down 25.',
        workingOut: '\\(\\begin{array}{r l} \\overset{1}{\\phantom{0}}42 \\\\ \\times \\quad 6 \\\\ \\hline 252 \\end{array}\\)'
      },
      {
        explanation: 'The final answer is 252.',
        workingOut: '\\(\\therefore\\; 252\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q1e',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the short multiplication method:\n\\(624 \\times 5\\)',
    a: '3120',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply each digit from right to left, carrying over as you go.',
    solutionSteps: [
      {
        explanation: 'Multiply the units: \\(4 \\times 5 = 20\\). Write 0, carry 2.',
        workingOut: '\\(\\begin{array}{r l} \\overset{\\phantom{0}2}{624} \\\\ \\times \\quad 5 \\\\ \\hline 0 \\end{array}\\)'
      },
      {
        explanation: 'Multiply the tens: \\(2 \\times 5 = 10\\). Add the carried 2: \\(10 + 2 = 12\\). Write 2, carry 1.',
        workingOut: '\\(\\begin{array}{r l} \\overset{12}{624} \\\\ \\times \\quad 5 \\\\ \\hline 20 \\end{array}\\)'
      },
      {
        explanation: 'Multiply the hundreds: \\(6 \\times 5 = 30\\). Add the carried 1: \\(30 + 1 = 31\\). Write 31.',
        workingOut: '\\(\\begin{array}{r l} \\overset{12}{624} \\\\ \\times \\quad 5 \\\\ \\hline 3120 \\end{array}\\)'
      },
      {
        explanation: 'The final answer is 3120.',
        workingOut: '\\(\\therefore\\; 3120\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q1i',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the short multiplication method:\n\\(7452 \\times 6\\)',
    a: '44712',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply each digit from right to left, carrying over as you go.',
    solutionSteps: [
      {
        explanation: 'Multiply units: \\(2 \\times 6 = 12\\). Write 2, carry 1.',
        workingOut: '\\(\\text{Units: } 2\\)'
      },
      {
        explanation: 'Multiply tens: \\(5 \\times 6 = 30\\). Add 1 to get 31. Write 1, carry 3.',
        workingOut: '\\(\\text{Tens: } 1\\)'
      },
      {
        explanation: 'Multiply hundreds: \\(4 \\times 6 = 24\\). Add 3 to get 27. Write 7, carry 2.',
        workingOut: '\\(\\text{Hundreds: } 7\\)'
      },
      {
        explanation: 'Multiply thousands: \\(7 \\times 6 = 42\\). Add 2 to get 44. Write 44.',
        workingOut: '\\(\\text{Thousands: } 44\\)'
      },
      {
        explanation: 'The final answer is 44712.',
        workingOut: '\\(\\therefore\\; 44712\\)'
      }
    ],
    graphData: null
  },

  // Q2 (selected 3)
  {
    id: 'y7-1h-q2a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the long multiplication method:\n\\(562 \\times 35\\)',
    a: '19670',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply by the units (5), then multiply by the tens (30), and add the results together.',
    solutionSteps: [
      {
        explanation: 'First, multiply 562 by the units digit (5).',
        workingOut: '\\(562 \\times 5 = 2810\\)'
      },
      {
        explanation: 'Next, multiply 562 by the tens digit (30). To do this, multiply by 3 and append a zero.',
        workingOut: '\\(562 \\times 30 = 16860\\)'
      },
      {
        explanation: 'Add the two results together to find the final product.',
        workingOut: '\\(\\begin{array}{r l} 2810 \\\\ + \\; 16860 \\\\ \\hline 19670 \\end{array}\\)'
      },
      {
        explanation: 'The final answer is 19670.',
        workingOut: '\\(\\therefore\\; 19670\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q2f',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the long multiplication method:\n\\(607 \\times 74\\)',
    a: '44918',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply by the units (4), then multiply by the tens (70), and add the results together.',
    solutionSteps: [
      {
        explanation: 'Multiply 607 by 4.',
        workingOut: '\\(607 \\times 4 = 2428\\)'
      },
      {
        explanation: 'Multiply 607 by 70.',
        workingOut: '\\(607 \\times 70 = 42490\\)'
      },
      {
        explanation: 'Add the two results together.',
        workingOut: '\\(\\begin{array}{r l} 2428 \\\\ + \\; 42490 \\\\ \\hline 44918 \\end{array}\\)'
      },
      {
        explanation: 'The final answer is 44918.',
        workingOut: '\\(\\therefore\\; 44918\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q2k',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Carry out the calculation, using the long multiplication method:\n\\(825 \\times 453\\)',
    a: '373725',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply by the units (3), tens (50), and hundreds (400), then sum the three results.',
    solutionSteps: [
      {
        explanation: 'Multiply 825 by the units digit (3).',
        workingOut: '\\(825 \\times 3 = 2475\\)'
      },
      {
        explanation: 'Multiply 825 by the tens digit (50).',
        workingOut: '\\(825 \\times 50 = 41250\\)'
      },
      {
        explanation: 'Multiply 825 by the hundreds digit (400).',
        workingOut: '\\(825 \\times 400 = 330000\\)'
      },
      {
        explanation: 'Add the three results together.',
        workingOut: '\\(\\begin{array}{r l} 2475 \\\\ 41250 \\\\ + \\; 330000 \\\\ \\hline 373725 \\end{array}\\)'
      },
      {
        explanation: 'The final answer is 373725.',
        workingOut: '\\(\\therefore\\; 373725\\)'
      }
    ],
    graphData: null
  },

  // Q3
  {
    id: 'y7-1h-q3a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Each student in a class is given 8 coloured pencils by the teacher. How many pencils does the teacher need to supply 24 students?',
    a: '192',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the number of students by the number of pencils per student.',
    solutionSteps: [
      {
        explanation: 'To find the total number of pencils needed, multiply the number of students (24) by the number of pencils given to each student (8).',
        workingOut: '\\(\\text{Total pencils} = 24 \\times 8\\)'
      },
      {
        explanation: 'Perform the multiplication.',
        workingOut: '\\(\\begin{array}{r l} 24 \\\\ \\times \\quad 8 \\\\ \\hline 192 \\end{array}\\)'
      },
      {
        explanation: 'The teacher needs to supply 192 pencils.',
        workingOut: '\\(\\therefore\\; 192\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q3b',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'A packaging machine in a factory packs 742 boxes per hour. How many boxes are packed in an 11-hour day?',
    a: '8162',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the number of boxes packed per hour by the number of hours.',
    solutionSteps: [
      {
        explanation: 'To find the total boxes, multiply the hourly rate (742) by the number of hours (11).',
        workingOut: '\\(\\text{Total boxes} = 742 \\times 11\\)'
      },
      {
        explanation: 'Multiply 742 by 1, and 742 by 10, then add.',
        workingOut: '\\(742 \\times 1 = 742\\)\n\\(742 \\times 10 = 7420\\)'
      },
      {
        explanation: 'Add the two results.',
        workingOut: '\\(742 + 7420 = 8162\\)'
      },
      {
        explanation: 'The machine packs 8162 boxes.',
        workingOut: '\\(\\therefore\\; 8162\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q3c',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'A brick wall has 52 rows of 614 bricks. How many bricks are in the wall?',
    a: '31928',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the number of rows by the number of bricks in each row.',
    solutionSteps: [
      {
        explanation: 'To find the total number of bricks, multiply the number of rows (52) by the bricks per row (614).',
        workingOut: '\\(\\text{Total bricks} = 614 \\times 52\\)'
      },
      {
        explanation: 'Multiply 614 by 2.',
        workingOut: '\\(614 \\times 2 = 1228\\)'
      },
      {
        explanation: 'Multiply 614 by 50.',
        workingOut: '\\(614 \\times 50 = 30700\\)'
      },
      {
        explanation: 'Add the two results together.',
        workingOut: '\\(1228 + 30700 = 31928\\)'
      },
      {
        explanation: 'There are 31928 bricks in the wall.',
        workingOut: '\\(\\therefore\\; 31928\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q3d',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'A publishing company packages books in boxes of 145. How many books are there in 312 boxes?',
    a: '45240',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the number of boxes by the number of books in each box.',
    solutionSteps: [
      {
        explanation: 'To find the total number of books, multiply the number of boxes (312) by the books per box (145).',
        workingOut: '\\(\\text{Total books} = 145 \\times 312\\)'
      },
      {
        explanation: 'Multiply 145 by 2.',
        workingOut: '\\(145 \\times 2 = 290\\)'
      },
      {
        explanation: 'Multiply 145 by 10.',
        workingOut: '\\(145 \\times 10 = 1450\\)'
      },
      {
        explanation: 'Multiply 145 by 300.',
        workingOut: '\\(145 \\times 300 = 43500\\)'
      },
      {
        explanation: 'Add all three results together.',
        workingOut: '\\(290 + 1450 + 43500 = 45240\\)'
      },
      {
        explanation: 'There are 45240 books in total.',
        workingOut: '\\(\\therefore\\; 45240\\)'
      }
    ],
    graphData: null
  },

  // Q4
  {
    id: 'y7-1h-q4',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A hall has 75 rows of 42 seats. How many seats are there in the hall?',
    a: '3150',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the number of rows by the number of seats in each row.',
    solutionSteps: [
      {
        explanation: 'To find the total number of seats, multiply the rows (75) by the seats per row (42).',
        workingOut: '\\(\\text{Total seats} = 75 \\times 42\\)'
      },
      {
        explanation: 'Multiply 75 by the units digit (2).',
        workingOut: '\\(75 \\times 2 = 150\\)'
      },
      {
        explanation: 'Multiply 75 by the tens digit (40).',
        workingOut: '\\(75 \\times 40 = 3000\\)'
      },
      {
        explanation: 'Add the two results.',
        workingOut: '\\(150 + 3000 = 3150\\)'
      },
      {
        explanation: 'There are 3150 seats in the hall.',
        workingOut: '\\(\\therefore\\; 3150\\)'
      }
    ],
    graphData: null
  },

  // Q5
  {
    id: 'y7-1h-q5',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A machine makes 348 doughnuts in an hour. How many doughnuts can it make in 14 hours?',
    a: '4872',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the hourly rate of doughnuts by the number of hours.',
    solutionSteps: [
      {
        explanation: 'To find the total number of doughnuts, multiply the rate per hour (348) by the total hours (14).',
        workingOut: '\\(\\text{Total doughnuts} = 348 \\times 14\\)'
      },
      {
        explanation: 'Multiply 348 by 4.',
        workingOut: '\\(348 \\times 4 = 1392\\)'
      },
      {
        explanation: 'Multiply 348 by 10.',
        workingOut: '\\(348 \\times 10 = 3480\\)'
      },
      {
        explanation: 'Add the two results.',
        workingOut: '\\(1392 + 3480 = 4872\\)'
      },
      {
        explanation: 'The machine can make 4872 doughnuts.',
        workingOut: '\\(\\therefore\\; 4872\\)'
      }
    ],
    graphData: null
  },

  // Q6
  {
    id: 'y7-1h-q6a',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Copy and complete the following short multiplication by finding the correct digit for each star (*):\n\\(\\begin{array}{r l} * \\; 8 \\\\ \\times \\quad 6 \\\\ \\hline 5 \\; 2 \\; * \\end{array}\\)',
    a: '88 x 6 = 528',
    t: 'The standard multiplication algorithms',
    hint: 'Look at the units column first: 8 x 6. What does it end in?',
    solutionSteps: [
      {
        explanation: 'First, multiply the units: \\(8 \\times 6 = 48\\). The last digit in the answer is 8, and we carry over 4.',
        workingOut: '\\(\\text{Last star } = 8\\)'
      },
      {
        explanation: 'Next, multiply the unknown tens digit (let\'s call it x) by 6, and add the carried over 4. This must equal 52.',
        workingOut: '\\(x \\times 6 + 4 = 52\\)'
      },
      {
        explanation: 'Subtract 4 from 52 to see what the multiplication alone should equal.',
        workingOut: '\\(x \\times 6 = 48\\)'
      },
      {
        explanation: 'Divide by 6 to find the unknown digit.',
        workingOut: '\\(x = 8\\)'
      },
      {
        explanation: 'The completed multiplication is \\(88 \\times 6 = 528\\).',
        workingOut: '\\(\\therefore\\; 88 \\times 6 = 528\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q6b',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Copy and complete the following short multiplication by finding the correct digit for each star (*):\n\\(\\begin{array}{r l} * \\; * \\; 7 \\\\ \\times \\quad 4 \\\\ \\hline 9 \\; 0 \\; * \\end{array}\\)',
    a: '227 x 4 = 908',
    t: 'The standard multiplication algorithms',
    hint: 'Look at the units column first: 7 x 4. What does it end in?',
    solutionSteps: [
      {
        explanation: 'First, multiply the units: \\(7 \\times 4 = 28\\). The last digit in the answer is 8, and we carry over 2.',
        workingOut: '\\(\\text{Last star } = 8\\)'
      },
      {
        explanation: 'Next, multiply the unknown tens digit (let\'s call it y) by 4, and add the carried 2. This must end in 0.',
        workingOut: '\\(y \\times 4 + 2 = \\dots 0\\)'
      },
      {
        explanation: 'The possible values for y are 2 or 7 (since \\(2 \\times 4 + 2 = 10\\) and \\(7 \\times 4 + 2 = 30\\)). If we try 7, we carry 3. If we try 2, we carry 1.',
        workingOut: '\\(\\text{Let\'s test } y = 2\\)'
      },
      {
        explanation: 'If y = 2, we carry 1. Now multiply the hundreds digit (let\'s call it z) by 4, and add 1. It must equal 9.',
        workingOut: '\\(z \\times 4 + 1 = 9\\)'
      },
      {
        explanation: 'Solving this: \\(z \\times 4 = 8\\), so \\(z = 2\\). This works perfectly.',
        workingOut: '\\(z = 2\\)'
      },
      {
        explanation: 'The completed multiplication is \\(227 \\times 4 = 908\\).',
        workingOut: '\\(\\therefore\\; 227 \\times 4 = 908\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q6c',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Copy and complete the following long multiplication by finding the correct digit for each star (*):\n\\(\\begin{array}{r l} * \\; * \\; * \\\\ \\times \\quad * \\; 4 \\\\ \\hline 8 \\; 5 \\; 2 \\\\ * \\; * \\; * \\; 0 \\\\ \\hline 5 \\; 1 \\; 1 \\; 2 \\end{array}\\)',
    a: '213 x 24 = 5112',
    t: 'The standard multiplication algorithms',
    hint: 'Use division to find the top number. 852 is the result of multiplying the top number by 4.',
    solutionSteps: [
      {
        explanation: 'The first row of the working out (852) is the result of multiplying the top 3-digit number by the units digit (4). We can find the top number by dividing.',
        workingOut: '\\(852 \\div 4 = 213\\)'
      },
      {
        explanation: 'So the top number is 213.',
        workingOut: '\\(\\text{Top number} = 213\\)'
      },
      {
        explanation: 'The final sum is 5112. The first row was 852. We can find the second row by subtracting.',
        workingOut: '\\(5112 - 852 = 4260\\)'
      },
      {
        explanation: 'The second row (4260) is the result of multiplying 213 by the tens digit (let\'s call it x) and appending a 0. So \\(213 \\times x = 426\\).',
        workingOut: '\\(x = 426 \\div 213 = 2\\)'
      },
      {
        explanation: 'So the bottom number is 24, and the full calculation is \\(213 \\times 24 = 5112\\).',
        workingOut: '\\(\\therefore\\; 213 \\times 24 = 5112\\)'
      }
    ],
    graphData: null
  },

  // Q7
  {
    id: 'y7-1h-q7a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A particular brand of lollies comes in packets of 28. A carton contains 32 packets. How many lollies are there in one carton?',
    a: '896',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the number of lollies per packet by the number of packets in a carton.',
    solutionSteps: [
      {
        explanation: 'To find the total number of lollies in one carton, multiply the packets (32) by the lollies per packet (28).',
        workingOut: '\\(\\text{Lollies per carton} = 32 \\times 28\\)'
      },
      {
        explanation: 'Use long multiplication to solve.',
        workingOut: '\\(32 \\times 8 = 256\\)\n\\(32 \\times 20 = 640\\)'
      },
      {
        explanation: 'Add the two results.',
        workingOut: '\\(256 + 640 = 896\\)'
      },
      {
        explanation: 'There are 896 lollies in one carton.',
        workingOut: '\\(\\therefore\\; 896\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q7b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A particular brand of lollies comes in packets of 28. A carton contains 32 packets. There are 896 lollies in one carton. How many lollies are there in 25 cartons?',
    a: '22400',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the number of lollies in one carton by 25.',
    solutionSteps: [
      {
        explanation: 'To find the total number of lollies in 25 cartons, multiply the lollies per carton (896) by 25.',
        workingOut: '\\(\\text{Total lollies} = 896 \\times 25\\)'
      },
      {
        explanation: 'Multiply 896 by 5.',
        workingOut: '\\(896 \\times 5 = 4480\\)'
      },
      {
        explanation: 'Multiply 896 by 20.',
        workingOut: '\\(896 \\times 20 = 17920\\)'
      },
      {
        explanation: 'Add the two results.',
        workingOut: '\\(4480 + 17920 = 22400\\)'
      },
      {
        explanation: 'There are 22400 lollies in 25 cartons.',
        workingOut: '\\(\\therefore\\; 22400\\)'
      }
    ],
    graphData: null
  },

  // Q8
  {
    id: 'y7-1h-q8',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A trolley at an airport is loaded with 18 cases, each with the maximum allowable weight of 25 kilograms. The empty trolley weighs 125 kilograms. What is the maximum possible weight of the trolley and the cases combined?',
    a: '575',
    t: 'The standard multiplication algorithms',
    hint: 'Calculate the total weight of the cases first, then add the weight of the trolley.',
    solutionSteps: [
      {
        explanation: 'First, find the total weight of all 18 cases by multiplying by the maximum weight per case (25 kg).',
        workingOut: '\\(\\text{Weight of cases} = 18 \\times 25\\)'
      },
      {
        explanation: 'Calculate the multiplication.',
        workingOut: '\\(18 \\times 25 = 450\\)'
      },
      {
        explanation: 'Now, add the weight of the empty trolley (125 kg) to the total weight of the cases.',
        workingOut: '\\(\\text{Total weight} = 450 + 125\\)'
      },
      {
        explanation: 'Perform the addition to find the final answer.',
        workingOut: '\\(\\therefore\\; 575\\)'
      }
    ],
    graphData: null
  },

  // Q9
  {
    id: 'y7-1h-q9',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'If 24 people each own 6 pairs of shoes, and 35 people each own 7 pairs of shoes, then how many shoes do the 59 people own in total?',
    a: '778',
    t: 'The standard multiplication algorithms',
    hint: 'Remember that a pair of shoes consists of 2 shoes.',
    solutionSteps: [
      {
        explanation: 'First, calculate the total number of pairs of shoes owned by the first group of 24 people.',
        workingOut: '\\(24 \\times 6 = 144 \\text{ pairs}\\)'
      },
      {
        explanation: 'Next, calculate the total number of pairs of shoes owned by the second group of 35 people.',
        workingOut: '\\(35 \\times 7 = 245 \\text{ pairs}\\)'
      },
      {
        explanation: 'Add the two amounts together to find the total number of pairs of shoes.',
        workingOut: '\\(\\text{Total pairs} = 144 + 245 = 389\\)'
      },
      {
        explanation: 'Since the question asks for the number of individual shoes, and there are 2 shoes in a pair, multiply the total pairs by 2.',
        workingOut: '\\(\\text{Total shoes} = 389 \\times 2\\)'
      },
      {
        explanation: 'Perform the multiplication to find the final answer.',
        workingOut: '\\(\\therefore\\; 778\\)'
      }
    ],
    graphData: null
  },

  // Q10
  {
    id: 'y7-1h-q10a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Calculate the age of a 13-year-old in months.',
    a: '156',
    t: 'The standard multiplication algorithms',
    hint: 'There are 12 months in a year.',
    solutionSteps: [
      {
        explanation: 'To convert years to months, multiply the number of years by 12, since there are 12 months in one year.',
        workingOut: '\\(\\text{Age in months} = 13 \\times 12\\)'
      },
      {
        explanation: 'Perform the multiplication.',
        workingOut: '\\(13 \\times 12 = 156\\)'
      },
      {
        explanation: 'A 13-year-old is 156 months old.',
        workingOut: '\\(\\therefore\\; 156\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q10b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Calculate the age of a 13-year-old in weeks.',
    a: '676',
    t: 'The standard multiplication algorithms',
    hint: 'There are 52 weeks in a year.',
    solutionSteps: [
      {
        explanation: 'To convert years to weeks, multiply the number of years by 52, since there are 52 weeks in one year.',
        workingOut: '\\(\\text{Age in weeks} = 13 \\times 52\\)'
      },
      {
        explanation: 'Perform the multiplication.',
        workingOut: '\\(13 \\times 52 = 676\\)'
      },
      {
        explanation: 'A 13-year-old is 676 weeks old.',
        workingOut: '\\(\\therefore\\; 676\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q10c',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Calculate the age of a 13-year-old in days. (Ignore leap years and assume 365 days in a year).',
    a: '4745',
    t: 'The standard multiplication algorithms',
    hint: 'There are 365 days in a standard year.',
    solutionSteps: [
      {
        explanation: 'To convert years to days, multiply the number of years by 365.',
        workingOut: '\\(\\text{Age in days} = 13 \\times 365\\)'
      },
      {
        explanation: 'Perform the multiplication.',
        workingOut: '\\(13 \\times 365 = 4745\\)'
      },
      {
        explanation: 'A 13-year-old is 4745 days old.',
        workingOut: '\\(\\therefore\\; 4745\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q10d',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Calculate the age of a 13-year-old in hours. (Ignore leap years and assume 4745 days total).',
    a: '113880',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the total number of days by 24 hours.',
    solutionSteps: [
      {
        explanation: 'To convert days to hours, multiply the number of days (4745) by 24, since there are 24 hours in one day.',
        workingOut: '\\(\\text{Age in hours} = 4745 \\times 24\\)'
      },
      {
        explanation: 'Perform the long multiplication.',
        workingOut: '\\(4745 \\times 4 = 18980\\)\n\\(4745 \\times 20 = 94900\\)'
      },
      {
        explanation: 'Add the results together.',
        workingOut: '\\(18980 + 94900 = 113880\\)'
      },
      {
        explanation: 'A 13-year-old is 113880 hours old.',
        workingOut: '\\(\\therefore\\; 113880\\)'
      }
    ],
    graphData: null
  },
  {
    id: 'y7-1h-q10e',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Calculate the age of a 13-year-old in seconds. (Assume 113880 total hours).',
    a: '409968000',
    t: 'The standard multiplication algorithms',
    hint: 'Multiply the total number of hours by 3600 (the number of seconds in one hour).',
    solutionSteps: [
      {
        explanation: 'To convert hours to seconds, multiply the total hours (113880) by the number of seconds in an hour (60 minutes x 60 seconds = 3600 seconds).',
        workingOut: '\\(\\text{Age in seconds} = 113880 \\times 3600\\)'
      },
      {
        explanation: 'Perform the long multiplication.',
        workingOut: '\\(11388 \\times 36 = 409968\\)'
      },
      {
        explanation: 'Append the three trailing zeroes to get the final answer.',
        workingOut: '\\(\\therefore\\; 409968000\\)'
      }
    ],
    graphData: null
  }
];
