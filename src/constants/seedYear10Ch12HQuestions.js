export const Y10_CH12H_QUESTIONS = [
  {
    id: 'y10-12h-q1a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Calculate the area, correct to one decimal place.\n\nA triangle with sides $9\\text{ cm}$ and $12\\text{ cm}$, and an included angle of $47^\\circ$.',
    a: '39.5',
    solution: '$\\text{Area} = \\frac{1}{2}ab\\sin C$\n$\\text{Area} = \\frac{1}{2} \\times 9 \\times 12 \\times \\sin 47^\\circ$\n$\\text{Area} = 54 \\times 0.73135 \\approx 39.493$\nCorrect to one decimal place, the area is $39.5\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'Use the sine area formula: $\\text{Area} = \\frac{1}{2}ab\\sin C$.'
  },
  {
    id: 'y10-12h-q1b',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Calculate the area, correct to one decimal place.\n\nA triangle with sides $6\\text{ cm}$ and $10\\text{ cm}$, and an included angle of $83^\\circ$.',
    a: '29.8',
    solution: '$\\text{Area} = \\frac{1}{2}ab\\sin C$\n$\\text{Area} = \\frac{1}{2} \\times 6 \\times 10 \\times \\sin 83^\\circ$\n$\\text{Area} = 30 \\times 0.9925 \\approx 29.776$\nCorrect to one decimal place, the area is $29.8\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'Use the sine area formula: $\\text{Area} = \\frac{1}{2}ab\\sin C$.'
  },
  {
    id: 'y10-12h-q1c',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Calculate the area, correct to one decimal place.\n\nA triangle with sides $8\\text{ cm}$ and $15\\text{ cm}$, and an included angle of $126^\\circ$.',
    a: '48.5',
    solution: '$\\text{Area} = \\frac{1}{2}ab\\sin C$\n$\\text{Area} = \\frac{1}{2} \\times 8 \\times 15 \\times \\sin 126^\\circ$\n$\\text{Area} = 60 \\times 0.8090 \\approx 48.541$\nCorrect to one decimal place, the area is $48.5\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'Use the sine area formula: $\\text{Area} = \\frac{1}{2}ab\\sin C$.'
  },
  {
    id: 'y10-12h-q2a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Calculate the area, correct to two decimal places.\n\nAn isosceles triangle $ABC$ with equal sides $AB = 5.6\\text{ cm}$ and $AC = 5.6\\text{ cm}$. The base angles $\\angle B$ and $\\angle C$ are both $70^\\circ$.',
    a: '10.08',
    solution: 'The included angle between the sides $AB$ and $AC$ is $\\angle A$.\nThe sum of angles in a triangle is $180^\\circ$, so $\\angle A = 180^\\circ - 70^\\circ - 70^\\circ = 40^\\circ$.\n$\\text{Area} = \\frac{1}{2}bc\\sin A = \\frac{1}{2}(5.6)(5.6)\\sin 40^\\circ$\n$\\text{Area} = 15.68 \\times 0.6428 \\approx 10.078$\nCorrect to two decimal places, the area is $10.08\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'Find the included angle between the two known sides first.'
  },
  {
    id: 'y10-12h-q2b',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Calculate the area, correct to two decimal places.\n\nA parallelogram $ABCD$ with adjacent sides $5\\text{ cm}$ and $10\\text{ cm}$, and an included angle of $70^\\circ$.',
    a: '46.98',
    solution: 'The area of a parallelogram is given by $ab\\sin\\theta$.\n$\\text{Area} = 5 \\times 10 \\times \\sin 70^\\circ$\n$\\text{Area} = 50 \\times 0.9397 \\approx 46.985$\nCorrect to two decimal places, the area is $46.98\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'A parallelogram can be split into two identical triangles. Its area is $ab\\sin\\theta$.'
  },
  {
    id: 'y10-12h-q2c',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Calculate the area, correct to two decimal places.\n\nAn equilateral triangle $ABC$ with side lengths of $10\\text{ cm}$.',
    a: '43.30',
    solution: 'An equilateral triangle has all angles equal to $60^\\circ$.\nUsing any two sides and the included angle:\n$\\text{Area} = \\frac{1}{2}(10)(10)\\sin 60^\\circ$\n$\\text{Area} = 50 \\times \\frac{\\sqrt{3}}{2} = 25\\sqrt{3} \\approx 43.301$\nCorrect to two decimal places, the area is $43.30\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'An equilateral triangle has all interior angles equal to $60^\\circ$.'
  },
  {
    id: 'y10-12h-q3',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'In $\\triangle ABC$, $\\angle CAB$ is an acute angle. The side $AB = 16\\text{ cm}$, $BC = 20\\text{ cm}$, and $\\angle C = 50^\\circ$.',
    a: '',
    solution: 'This problem contains multiple parts.',
    t: 'Area of a triangle',
    hint: 'Use the sine rule to find the unknown angle, then use the angle sum of a triangle to find the third angle. Finally, apply the area formula.',
    subQuestions: [
      {
        id: 'y10-12h-q3a',
        type: 'short_answer',
        question: 'Use the sine rule to find $\\angle CAB$, correct to one decimal place.',
        a: '73.2',
        hint: '$\\frac{\\sin A}{a} = \\frac{\\sin C}{c}$',
        solution: '$\\frac{\\sin A}{20} = \\frac{\\sin 50^\\circ}{16}$\n$\\sin A = \\frac{20\\sin 50^\\circ}{16} = 1.25 \\times 0.7660 \\approx 0.9576$\nSince $A$ is acute, $A = \\sin^{-1}(0.9576) \\approx 73.2^\\circ$.'
      },
      {
        id: 'y10-12h-q3b',
        type: 'short_answer',
        question: 'Find $\\angle ABC$, correct to one decimal place.',
        a: '56.8',
        hint: 'The angle sum of a triangle is $180^\\circ$.',
        solution: '$\\angle B = 180^\\circ - 50^\\circ - 73.2^\\circ = 56.8^\\circ$.'
      },
      {
        id: 'y10-12h-q3c',
        type: 'short_answer',
        question: 'Find the area of the triangle, correct to the nearest square centimetre.',
        a: '134',
        hint: 'Use the two known sides and the included angle $B$.',
        solution: '$\\text{Area} = \\frac{1}{2}ac\\sin B = \\frac{1}{2}(20)(16)\\sin 56.8^\\circ$\n$\\text{Area} = 160 \\times 0.8368 \\approx 133.88$\nCorrect to the nearest square centimetre, the area is $134\\text{ cm}^2$.'
      }
    ]
  },
  {
    id: 'y10-12h-q4',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'In $\\triangle ABC$, the side lengths are $AB = 6\\text{ cm}$, $AC = 8\\text{ cm}$, and $BC = 12\\text{ cm}$.',
    a: '',
    solution: 'This problem contains multiple parts.',
    t: 'Area of a triangle',
    hint: 'First find the angle $\\angle BAC$ using the cosine rule, then calculate the area using the sine area formula.',
    subQuestions: [
      {
        id: 'y10-12h-q4a',
        type: 'short_answer',
        question: 'Use the cosine rule to find $\\angle BAC$, to the nearest degree.',
        a: '117',
        hint: '$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$',
        solution: '$\\cos A = \\frac{6^2 + 8^2 - 12^2}{2(6)(8)}$\n$\\cos A = \\frac{36 + 64 - 144}{96} = \\frac{-44}{96} \\approx -0.4583$\n$A = \\cos^{-1}(-0.4583) \\approx 117.28^\\circ \\approx 117^\\circ$.'
      },
      {
        id: 'y10-12h-q4b',
        type: 'short_answer',
        question: 'Find the area of the triangle, correct to the nearest square centimetre.',
        a: '21',
        hint: '$\\text{Area} = \\frac{1}{2}bc\\sin A$',
        solution: 'Using the exact angle $117.28^\\circ$:\n$\\text{Area} = \\frac{1}{2}(6)(8)\\sin 117.28^\\circ$\n$\\text{Area} = 24 \\times 0.8888 \\approx 21.33$\nCorrect to the nearest square centimetre, the area is $21\\text{ cm}^2$.'
      }
    ]
  },
  {
    id: 'y10-12h-q5a',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Calculate the area of the triangle, correct to the nearest square centimetre.\n\nA triangle with side lengths $10\\text{ cm}$, $12\\text{ cm}$, and $18\\text{ cm}$.',
    a: '57',
    solution: 'Let $a=18$, $b=10$, $c=12$.\nUsing Heron\'s formula:\nSemi-perimeter $s = \\frac{10+12+18}{2} = 20$.\n$\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{20(2)(10)(8)} = \\sqrt{3200} \\approx 56.57$\nCorrect to the nearest square centimetre, the area is $57\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'Use Heron\'s formula or find an angle using the cosine rule first.'
  },
  {
    id: 'y10-12h-q5b',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Calculate the area of the triangle, correct to the nearest square centimetre.\n\nA triangle with sides $7\\text{ cm}$ and $11\\text{ cm}$, and an included angle of $52^\\circ$.',
    a: '30',
    solution: '$\\text{Area} = \\frac{1}{2}ab\\sin C$\n$\\text{Area} = \\frac{1}{2} \\times 7 \\times 11 \\times \\sin 52^\\circ$\n$\\text{Area} = 38.5 \\times 0.7880 \\approx 30.34$\nCorrect to the nearest square centimetre, the area is $30\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'Use the sine area formula: $\\text{Area} = \\frac{1}{2}ab\\sin C$.'
  },
  {
    id: 'y10-12h-q5c',
    type: 'short_answer',
    difficulty: 'easy',
    timeLimit: 60,
    question: 'Calculate the area of the triangle, correct to the nearest square centimetre.\n\nA triangle with angles $72^\\circ$ and $64^\\circ$, and the side between these two angles has length $18\\text{ cm}$.',
    a: '199',
    solution: 'The third angle is $180^\\circ - 72^\\circ - 64^\\circ = 44^\\circ$.\nUsing the sine rule to find another side $x$ opposite $64^\\circ$:\n$\\frac{x}{\\sin 64^\\circ} = \\frac{18}{\\sin 44^\\circ} \\implies x = \\frac{18\\sin 64^\\circ}{\\sin 44^\\circ} \\approx 23.28\\text{ cm}$.\nNow find the area using the $18\\text{ cm}$ side, the $23.28\\text{ cm}$ side, and the included angle $72^\\circ$.\n$\\text{Area} = \\frac{1}{2}(18)(23.28)\\sin 72^\\circ \\approx 199.25$\nCorrect to the nearest square centimetre, the area is $199\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'Find the third angle, use the sine rule to find another side, then use the sine area formula.'
  },
  {
    id: 'y10-12h-q6a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'In $\\triangle ABC$, the area of the triangle is $40\\text{ cm}^2$. The side $BC = 14\\text{ cm}$ and $\\angle B = 42^\\circ$. Find $AB$, correct to one decimal place.',
    a: '8.5',
    solution: 'Using the area formula: $\\text{Area} = \\frac{1}{2}ac\\sin B$\n$40 = \\frac{1}{2}(14)(AB)\\sin 42^\\circ$\n$40 = 7 \\times AB \\times 0.6691$\n$40 = 4.6839 \\times AB$\n$AB = \\frac{40}{4.6839} \\approx 8.54$\nCorrect to one decimal place, $AB = 8.5\\text{ cm}$.',
    t: 'Area of a triangle',
    hint: 'Substitute the known values into the sine area formula to solve for the missing side.'
  },
  {
    id: 'y10-12h-q6b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'In $\\triangle ABC$, the area of the triangle is $40\\text{ cm}^2$. The side $BC = 14\\text{ cm}$ and $\\angle B = 42^\\circ$. You found $AB \\approx 8.54\\text{ cm}$. Find $AC$, correct to one decimal place.',
    a: '9.6',
    solution: 'Using the cosine rule in $\\triangle ABC$:\n$AC^2 = AB^2 + BC^2 - 2(AB)(BC)\\cos B$\n$AC^2 = 8.54^2 + 14^2 - 2(8.54)(14)\\cos 42^\\circ$\n$AC^2 \\approx 72.93 + 196 - 239.12(0.7431) \\approx 268.93 - 177.69 = 91.24$\n$AC = \\sqrt{91.24} \\approx 9.55$\nCorrect to one decimal place, $AC = 9.6\\text{ cm}$.',
    t: 'Area of a triangle',
    hint: 'Use the cosine rule now that you know two sides and the included angle.'
  },
  {
    id: 'y10-12h-q6c',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'In $\\triangle ABC$, the area of the triangle is $40\\text{ cm}^2$. The side $BC = 14\\text{ cm}$, $\\angle B = 42^\\circ$, $AB \\approx 8.54\\text{ cm}$, and $AC \\approx 9.55\\text{ cm}$. Find $\\angle ACB$, correct to one decimal place.',
    a: '36.7',
    solution: 'Using the sine rule:\n$\\frac{\\sin C}{AB} = \\frac{\\sin B}{AC}$\n$\\frac{\\sin C}{8.54} = \\frac{\\sin 42^\\circ}{9.55}$\n$\\sin C = \\frac{8.54 \\sin 42^\\circ}{9.55} \\approx \\frac{8.54(0.6691)}{9.55} \\approx 0.5983$\n$C = \\sin^{-1}(0.5983) \\approx 36.7^\\circ$.',
    t: 'Area of a triangle',
    hint: 'Use the sine rule.'
  },
  {
    id: 'y10-12h-q7',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'An acute-angled triangle of area $60\\text{ cm}^2$ has side lengths of $16\\text{ cm}$ and $20\\text{ cm}$. What is the magnitude of the included angle, correct to the nearest degree?',
    a: '22',
    solution: '$\\text{Area} = \\frac{1}{2}ab\\sin C$\n$60 = \\frac{1}{2}(16)(20)\\sin C$\n$60 = 160\\sin C$\n$\\sin C = \\frac{60}{160} = 0.375$\nSince the triangle is acute-angled, $C = \\sin^{-1}(0.375) \\approx 22.02^\\circ$.\nCorrect to the nearest degree, the angle is $22^\\circ$.',
    t: 'Area of a triangle',
    hint: 'Set up the area equation using the sine area formula, and solve for $\\sin C$.'
  },
  {
    id: 'y10-12h-q8',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'An irregular block of land, $ABCD$, has $\\angle D = 90^\\circ$. The sides are $AD = 80\\text{ m}$, $CD = 130\\text{ m}$, $AB = 65\\text{ m}$, and $BC = 90\\text{ m}$.',
    a: '',
    solution: 'This problem contains multiple parts.',
    t: 'Area of a triangle',
    hint: 'First find the diagonal $AC$ using Pythagoras\' theorem in $\\triangle ADC$, then solve the rest of the problem.',
    subQuestions: [
      {
        id: 'y10-12h-q8a',
        type: 'short_answer',
        question: 'Calculate the length $AC$, correct to one decimal place.',
        a: '152.6',
        hint: 'Use Pythagoras\' theorem on the right-angled triangle $\\triangle ADC$.',
        solution: 'In $\\triangle ADC$, $\\angle D = 90^\\circ$.\n$AC^2 = AD^2 + CD^2 = 80^\\circ + 130^2 = 6400 + 16900 = 23300$\n$AC = \\sqrt{23300} \\approx 152.64$\nCorrect to one decimal place, $AC = 152.6\\text{ m}$.'
      },
      {
        id: 'y10-12h-q8b',
        type: 'short_answer',
        question: 'Calculate $\\angle ABC$, correct to one decimal place.',
        a: '159.7',
        hint: 'Use the cosine rule in $\\triangle ABC$.',
        solution: 'In $\\triangle ABC$, we know all three sides: $AB = 65$, $BC = 90$, $AC = 152.64$.\n$\\cos B = \\frac{65^2 + 90^2 - 152.64^2}{2(65)(90)}$\n$\\cos B = \\frac{4225 + 8100 - 23300}{11700} = \\frac{-10975}{11700} \\approx -0.9380$\n$B = \\cos^{-1}(-0.9380) \\approx 159.7^\\circ$.'
      },
      {
        id: 'y10-12h-q8c',
        type: 'short_answer',
        question: 'Calculate the area of the block, correct to one decimal place.',
        a: '6214.7',
        hint: 'Add the areas of the two triangles.',
        solution: 'Area of right $\\triangle ADC = \\frac{1}{2} \\times 80 \\times 130 = 5200\\text{ m}^2$.\nArea of $\\triangle ABC = \\frac{1}{2}(65)(90)\\sin 159.7^\\circ = 2925 \\times 0.3469 \\approx 1014.7\\text{ m}^2$.\nTotal Area = $5200 + 1014.7 = 6214.7\\text{ m}^2$.'
      }
    ]
  },
  {
    id: 'y10-12h-q9',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: '$ABCDE$ is a regular pentagon with side lengths $10\\text{ cm}$. Diagonals $AD$ and $AC$ are drawn.',
    a: '',
    solution: 'This problem contains multiple parts.',
    t: 'Area of a triangle',
    hint: 'Recall that the interior angle of a regular pentagon is $108^\\circ$. Use this to find the side lengths and areas of the triangles inside it.',
    subQuestions: [
      {
        id: 'y10-12h-q9a',
        type: 'short_answer',
        question: 'Find $\\angle AED$.',
        a: '108',
        hint: 'The sum of interior angles of a pentagon is $540^\\circ$.',
        solution: 'The interior angle of a regular pentagon is $\\frac{540^\\circ}{5} = 108^\\circ$.\nThus, $\\angle AED = 108^\\circ$.'
      },
      {
        id: 'y10-12h-q9b',
        type: 'short_answer',
        question: 'Find the area of $\\triangle ADE$, correct to two decimal places.',
        a: '47.55',
        hint: 'Use the sine area formula.',
        solution: 'In $\\triangle ADE$, $AE = 10$, $ED = 10$, and $\\angle E = 108^\\circ$.\n$\\text{Area} = \\frac{1}{2}(10)(10)\\sin 108^\\circ = 50 \\times 0.9511 \\approx 47.55\\text{ cm}^2$.'
      },
      {
        id: 'y10-12h-q9c',
        type: 'short_answer',
        question: 'Find $AD$, correct to two decimal places.',
        a: '16.18',
        hint: 'Use the cosine rule in $\\triangle ADE$.',
        solution: '$AD^2 = 10^2 + 10^2 - 2(10)(10)\\cos 108^\\circ = 200 - 200(-0.3090) = 261.8$\n$AD = \\sqrt{261.8} \\approx 16.18\\text{ cm}$.'
      },
      {
        id: 'y10-12h-q9d',
        type: 'short_answer',
        question: 'Find $\\angle ADE$.',
        a: '36',
        hint: '$\\triangle ADE$ is an isosceles triangle.',
        solution: 'Since $AE = ED$, $\\triangle ADE$ is isosceles.\n$\\angle ADE = \\frac{180^\\circ - 108^\\circ}{2} = 36^\\circ$.'
      },
      {
        id: 'y10-12h-q9e',
        type: 'short_answer',
        question: 'Find $\\angle ADC$.',
        a: '72',
        hint: 'The total interior angle at $D$ is $108^\\circ$.',
        solution: '$\\angle CDE = 108^\\circ$.\n$\\angle ADC = \\angle CDE - \\angle ADE = 108^\\circ - 36^\\circ = 72^\\circ$.'
      },
      {
        id: 'y10-12h-q9f',
        type: 'short_answer',
        question: 'Find $\\angle DAC$.',
        a: '36',
        hint: '$\\triangle ABC$ is identical to $\\triangle ADE$.',
        solution: '$\\triangle ABC$ is congruent to $\\triangle ADE$, so $\\angle CAB = 36^\\circ$.\n$\\angle EAB = 108^\\circ$.\n$\\angle DAC = 108^\\circ - \\angle EAD - \\angle CAB = 108^\\circ - 36^\\circ - 36^\\circ = 36^\\circ$.'
      },
      {
        id: 'y10-12h-q9g',
        type: 'short_answer',
        question: 'Find the area of $\\triangle ADC$, correct to two decimal places.',
        a: '76.94',
        hint: 'Use the two diagonals and the included angle $\\angle DAC$.',
        solution: 'In $\\triangle ADC$, $AD = AC = 16.18$ and $\\angle DAC = 36^\\circ$.\n$\\text{Area} = \\frac{1}{2}(16.18)(16.18)\\sin 36^\\circ = \\frac{1}{2}(261.8)(0.5878) \\approx 76.94\\text{ cm}^2$.'
      },
      {
        id: 'y10-12h-q9h',
        type: 'short_answer',
        question: 'Find the area of the pentagon, correct to two decimal places.',
        a: '172.04',
        hint: 'Sum the areas of the three triangles.',
        solution: 'The pentagon is made up of $\\triangle ADE$, $\\triangle ABC$, and $\\triangle ADC$.\nTotal Area $= 2 \\times \\text{Area}(\\triangle ADE) + \\text{Area}(\\triangle ADC) = 2(47.55) + 76.94 = 172.04\\text{ cm}^2$.'
      }
    ]
  },
  {
    id: 'y10-12h-q10',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A quadrilateral has diagonals of length $12\\text{ cm}$ and $18\\text{ cm}$. If the angle between the diagonals is $65^\\circ$, find the area of the quadrilateral, correct to the nearest square centimetre.',
    a: '98',
    solution: 'The area of a quadrilateral with diagonals $d_1$ and $d_2$ intersecting at an angle $\\theta$ is $\\frac{1}{2} d_1 d_2 \\sin \\theta$.\n$\\text{Area} = \\frac{1}{2} \\times 12 \\times 18 \\times \\sin 65^\\circ$\n$\\text{Area} = 108 \\times 0.9063 \\approx 97.88$\nCorrect to the nearest square centimetre, the area is $98\\text{ cm}^2$.',
    t: 'Area of a triangle',
    hint: 'Use the formula $\\text{Area} = \\frac{1}{2} d_1 d_2 \\sin \\theta$.'
  },
  {
    id: 'y10-12h-q11',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'The sides of a triangle $ABC$ are enlarged by a factor, $k$. Use the area formula to show that the area is enlarged by the factor, $k^2$.',
    a: '',
    solution: 'Let the original triangle have sides $a$ and $b$ with included angle $C$.\nOriginal Area $= \\frac{1}{2}ab\\sin C$.\nWhen the sides are enlarged by a factor $k$, the new side lengths are $ka$ and $kb$.\nThe angle $C$ remains unchanged (similar triangles have equal angles).\nNew Area $= \\frac{1}{2}(ka)(kb)\\sin C$\nNew Area $= k^2 \\left(\\frac{1}{2}ab\\sin C\\right)$\nNew Area $= k^2 \\times \\text{Original Area}$.\nThus, the area is enlarged by the factor $k^2$.',
    t: 'Area of a triangle',
    hint: 'Write down the area formula for sides $a$ and $b$, and then write it again for sides $ka$ and $kb$. Compare the two.'
  },
  {
    id: 'y10-12h-q12',
    type: 'teacher_review',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Prove that the formula $\\text{Area} = \\frac{1}{2}ab\\sin C$ gives the area of a triangle when $C$ is obtuse.',
    a: '',
    solution: 'Let $\\triangle ABC$ have an obtuse angle at $C$. Drop a perpendicular of height $h$ from $A$ to the line $BC$ extended, meeting at $D$.\nThe area of the triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} a h$.\nIn the right-angled triangle $\\triangle ADC$, the hypotenuse is $b$ and the angle inside the triangle at $C$ is $180^\\circ - C$.\nThus, $\\sin(180^\\circ - C) = \\frac{h}{b}$, which means $h = b\\sin(180^\\circ - C)$.\nWe know that $\\sin(180^\\circ - \\theta) = \\sin\\theta$, so $\\sin(180^\\circ - C) = \\sin C$.\nTherefore, $h = b\\sin C$.\nSubstituting this back into the area formula gives $\\text{Area} = \\frac{1}{2} a (b\\sin C) = \\frac{1}{2}ab\\sin C$.',
    t: 'Area of a triangle',
    hint: 'Drop a perpendicular from $A$ to the extended line $BC$. Use the fact that $\\sin(180^\\circ - C) = \\sin C$.'
  },
  {
    id: 'y10-12h-q13',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A triangle has sides of length $8\\text{ cm}$, $11\\text{ cm}$ and $15\\text{ cm}$.',
    a: '',
    solution: 'This problem contains multiple parts.',
    t: 'Area of a triangle',
    hint: 'Use the cosine rule to find the angle opposite the smallest side, then use the sine area formula.',
    subQuestions: [
      {
        id: 'y10-12h-q13a',
        type: 'short_answer',
        question: 'Find the size of the smallest angle in the triangle, correct to two decimal places.',
        a: '31.29',
        hint: 'The smallest angle is opposite the smallest side. Use the cosine rule.',
        solution: 'Let the smallest angle be $\\theta$. It is opposite the $8\\text{ cm}$ side.\n$\\cos \\theta = \\frac{11^2 + 15^2 - 8^2}{2(11)(15)} = \\frac{121 + 225 - 64}{330} = \\frac{282}{330} \\approx 0.8545$\n$\\theta = \\cos^{-1}(0.8545) \\approx 31.29^\\circ$.'
      },
      {
        id: 'y10-12h-q13b',
        type: 'short_answer',
        question: 'Calculate, correct to two decimal places, the area of the triangle.',
        a: '42.85',
        hint: 'Use the sine area formula with the angle you just found.',
        solution: '$\\text{Area} = \\frac{1}{2}(11)(15)\\sin 31.29^\\circ = 82.5 \\times 0.5194 \\approx 42.85\\text{ cm}^2$.'
      },
      {
        id: 'y10-12h-q13c',
        type: 'short_answer',
        question: 'Calculate the perimeter of the triangle.',
        a: '34',
        hint: 'Add up the lengths of all three sides.',
        solution: 'Perimeter $= 8 + 11 + 15 = 34\\text{ cm}$.'
      },
      {
        id: 'y10-12h-q13d',
        type: 'short_answer',
        question: 'Let $s$ = half the perimeter of the triangle. The area of the triangle can be found using Heron\'s formula: $\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}$. Use this formula to calculate the area of the triangle, correct to two decimal places.',
        a: '42.85',
        hint: 'Calculate $s$, then substitute it into Heron\'s formula.',
        solution: '$s = \\frac{34}{2} = 17$.\n$\\text{Area} = \\sqrt{17(17-8)(17-11)(17-15)} = \\sqrt{17 \\times 9 \\times 6 \\times 2} = \\sqrt{1836} \\approx 42.85\\text{ cm}^2$.'
      },
      {
        id: 'y10-12h-q13e',
        type: 'teacher_review',
        question: 'Check that your answers to parts b and d are the same.',
        a: '',
        hint: 'Verify that both calculation methods yield the same area.',
        solution: 'Both part b and part d give the answer $42.85\\text{ cm}^2$. The methods are consistent.'
      }
    ]
  }
];
