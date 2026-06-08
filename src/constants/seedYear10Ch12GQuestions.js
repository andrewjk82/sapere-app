export const Y10_CH12G_QUESTIONS = [
  {
    id: 'y10-12g-q6a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A rhombus $PQRS$ has side lengths $8\\text{ m}$, and contains an angle of $128^\\circ$.\n\nFind the length of the longer diagonal, correct to two decimal places.',
    a: '14.38',
    solution: 'The longer diagonal is opposite the obtuse angle ($128^\\circ$).\n\nUsing the cosine rule in the triangle formed by two sides and the longer diagonal $d_1$:\n$d_1^2 = 8^2 + 8^2 - 2(8)(8)\\cos 128^\\circ$\n$d_1^2 = 64 + 64 - 128\\cos 128^\\circ$\n$d_1^2 \\approx 128 - 128(-0.6157) \\approx 206.80$\n$d_1 = \\sqrt{206.80} \\approx 14.38\\text{ m}$',
    t: 'Finding angles using the cosine rule',
    hint: 'The longer diagonal is opposite the larger angle ($128^\\circ$). Use the cosine rule.'
  },
  {
    id: 'y10-12g-q6b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A rhombus $PQRS$ has side lengths $8\\text{ m}$, and contains an angle of $128^\\circ$.\n\nFind the length of the shorter diagonal, correct to two decimal places.',
    a: '7.01',
    solution: 'Adjacent angles in a rhombus add to $180^\\circ$. The acute angle is $180^\\circ - 128^\\circ = 52^\\circ$.\nThe shorter diagonal $d_2$ is opposite the $52^\\circ$ angle.\n\nUsing the cosine rule:\n$d_2^2 = 8^2 + 8^2 - 2(8)(8)\\cos 52^\\circ$\n$d_2^2 = 128 - 128\\cos 52^\\circ \\approx 128 - 78.805 \\approx 49.195$\n$d_2 = \\sqrt{49.195} \\approx 7.01\\text{ m}$',
    t: 'Finding angles using the cosine rule',
    hint: 'Find the acute angle of the rhombus first (co-interior angles add to $180^\\circ$). Then use the cosine rule.'
  },
  {
    id: 'y10-12g-q6c',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A rhombus $PQRS$ has side lengths $8\\text{ m}$, and contains an angle of $128^\\circ$.\n\nFind the area of the rhombus, correct to two decimal places.',
    a: '50.43',
    solution: 'The area of a rhombus can be found using the formula $A = a^2 \\sin \\theta$, or by finding the area of two identical triangles.\nArea $= 2 \\times \\left(\\frac{1}{2} \\times 8 \\times 8 \\times \\sin 128^\\circ\\right)$\nArea $= 64 \\sin 128^\\circ$\nArea $\\approx 64 \\times 0.7880 \\approx 50.43\\text{ m}^2$',
    t: 'Finding angles using the cosine rule',
    hint: 'Use the sine area formula: $\\text{Area} = ab\\sin C$ for the two triangles that make up the rhombus, or $A = a^2\\sin\\theta$.'
  },
  {
    id: 'y10-12g-q7',
    type: 'teacher_review',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Prove the cosine rule when the included angle, $A$ is obtuse.',
    a: '',
    solution: 'Consider $\\triangle ABC$ where angle $A$ is obtuse. Drop a perpendicular from $B$ to meet $CA$ extended at $D$. Let the height be $h$ and the extended length $DA$ be $x$.\n\nIn the small right-angled $\\triangle BDA$:\n$\\angle BDA = 90^\\circ$\n$\\angle BAD = 180^\\circ - A$\nUsing trigonometry: $\\cos(180^\\circ - A) = \\frac{x}{c}$. Since $\\cos(180^\\circ - A) = -\\cos A$, we have $x = -c \\cos A$.\nAlso, by Pythagoras\' theorem: $h^2 + x^2 = c^2$.\n\nIn the large right-angled $\\triangle BDC$, the base is $DC = b + x$.\nUsing Pythagoras\' theorem:\n$a^2 = h^2 + (b + x)^2$\n$a^2 = h^2 + b^2 + 2bx + x^2$\nRearranging the terms:\n$a^2 = (h^2 + x^2) + b^2 + 2bx$\nSubstitute $h^2 + x^2 = c^2$ and $x = -c \\cos A$:\n$a^2 = c^2 + b^2 + 2b(-c \\cos A)$\n$a^2 = b^2 + c^2 - 2bc \\cos A$\n\nThis proves the cosine rule for an obtuse angle.',
    t: 'Finding angles using the cosine rule',
    hint: 'Drop a perpendicular from $B$ to the line $AC$ extended. Use Pythagoras\' theorem on both the small and large right-angled triangles, and note that $\\cos(180^\\circ - A) = -\\cos A$.'
  }
,
  {
  "id": "y10-12g-q1a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "In the given triangle, calculate the unknown side length, giving your answer correct to two decimal places.\n\nA triangle has sides of $7\\text{ cm}$ and $9\\text{ cm}$, with an included angle of $64^\\circ$.",
  "a": "8.65",
  "solution": "Let the unknown side be $x$.\nUsing the cosine rule:\n$x^2 = 7^2 + 9^2 - 2(7)(9)\\cos 64^\\circ$\n$x^2 = 49 + 81 - 126\\cos 64^\\circ$\n$x^2 = 130 - 126(0.4384) \\approx 130 - 55.2348 = 74.7652$\n$x = \\sqrt{74.7652} \\approx 8.65\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$."
},
  {
  "id": "y10-12g-q1b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "In the given triangle, calculate the unknown side length, giving your answer correct to two decimal places.\n\nA triangle has sides of $8\\text{ cm}$ and $10\\text{ cm}$, with an included angle of $21^\\circ$.",
  "a": "3.82",
  "solution": "Let the unknown side be $x$.\nUsing the cosine rule:\n$x^2 = 8^2 + 10^2 - 2(8)(10)\\cos 21^\\circ$\n$x^2 = 64 + 100 - 160\\cos 21^\\circ$\n$x^2 = 164 - 160(0.9336) \\approx 164 - 149.373 = 14.627$\n$x = \\sqrt{14.627} \\approx 3.82\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$."
},
  {
  "id": "y10-12g-q1c",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "In the given triangle, calculate the unknown side length, giving your answer correct to two decimal places.\n\nA triangle has sides of $8\\text{ cm}$ and $10\\text{ cm}$, with an included angle of $130^\\circ$.",
  "a": "16.34",
  "solution": "Let the unknown side be $x$.\nUsing the cosine rule:\n$x^2 = 10^2 + 8^2 - 2(10)(8)\\cos 130^\\circ$\n$x^2 = 100 + 64 - 160\\cos 130^\\circ$\n$x^2 = 164 - 160(-0.6428) \\approx 164 + 102.846 = 266.846$\n$x = \\sqrt{266.846} \\approx 16.34\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$. Remember that $\\cos 130^\\circ$ is negative."
},
  {
  "id": "y10-12g-q1d",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "In the given triangle, calculate the unknown side length, giving your answer correct to two decimal places.\n\nA triangle has two sides of $4\\text{ cm}$, with an included angle of $120^\\circ$.",
  "a": "6.93",
  "solution": "Let the unknown side be $x$.\nUsing the cosine rule:\n$x^2 = 4^2 + 4^2 - 2(4)(4)\\cos 120^\\circ$\n$x^2 = 16 + 16 - 32(-0.5)$\n$x^2 = 32 + 16 = 48$\n$x = \\sqrt{48} \\approx 6.93\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$. Note that $\\cos 120^\\circ = -0.5$."
},
  {
  "id": "y10-12g-q2",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "$ABCD$ is a parallelogram with sides $15\\text{ cm}$ and $18\\text{ cm}$. The angle at $A$ is $65^\\circ$. Find the length of the shorter diagonal, correct to two decimal places.",
  "a": "17.91",
  "solution": "The shorter diagonal $BD$ is opposite the acute angle $\\angle A = 65^\\circ$.\nUsing the cosine rule in $\\triangle ABD$:\n$BD^2 = 15^2 + 18^2 - 2(15)(18)\\cos 65^\\circ$\n$BD^2 = 225 + 324 - 540\\cos 65^\\circ$\n$BD^2 = 549 - 540(0.4226) \\approx 549 - 228.214 = 320.786$\n$BD = \\sqrt{320.786} \\approx 17.91\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "The shorter diagonal is opposite the acute angle. Use the cosine rule in the triangle formed by two adjacent sides and the shorter diagonal."
},
  {
  "id": "y10-12g-q3",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A vertical pole $OV$ is being held in position by two ropes, $VA$ and $VB$. The points $A$, $O$, and $B$ are collinear on horizontal ground. If $VA = 6\\text{ m}$, $VB = 6.5\\text{ m}$, $\\angle OVB = 32^\\circ$ and $\\angle OVA = 27^\\circ$, find the distance $AB$, correct to one decimal place.",
  "a": "6.2",
  "solution": "Method 1: Using the cosine rule\nIn $\\triangle VAB$, the total angle at $V$ is $\\angle AVB = \\angle OVA + \\angle OVB = 27^\\circ + 32^\\circ = 59^\\circ$.\nUsing the cosine rule:\n$AB^2 = 6^2 + 6.5^2 - 2(6)(6.5)\\cos 59^\\circ$\n$AB^2 = 36 + 42.25 - 78\\cos 59^\\circ$\n$AB^2 = 78.25 - 78(0.5150) \\approx 78.25 - 40.173 = 38.077$\n$AB = \\sqrt{38.077} \\approx 6.17 \\approx 6.2\\text{ m}$\n\nMethod 2: Using right-angled triangles\nIn $\\triangle VOA$, $OA = 6 \\sin 27^\\circ \\approx 2.724\\text{ m}$\nIn $\\triangle VOB$, $OB = 6.5 \\sin 32^\\circ \\approx 3.444\\text{ m}$\nSince $O$ lies between $A$ and $B$, $AB = OA + OB \\approx 2.724 + 3.444 = 6.168 \\approx 6.2\\text{ m}$",
  "t": "Finding angles using the cosine rule",
  "hint": "You can either use right-angled triangles $\\triangle VOA$ and $\\triangle VOB$ to find $OA$ and $OB$, or use the cosine rule on the large triangle $\\triangle VAB$ with the angle $\\angle AVB = 27^\\circ + 32^\\circ$."
},
  {
  "id": "y10-12g-q4",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A ship is $300\\text{ km}$ from port on a bearing of $070^\\circ\\text{T}$. A second ship is $400\\text{ km}$ from the same port and on a bearing of $140^\\circ\\text{T}$. How far apart, correct to the nearest kilometre, are the two ships?",
  "a": "410",
  "solution": "The angle between the two ships from the port is the difference in their bearings:\nAngle $= 140^\\circ - 70^\\circ = 70^\\circ$.\nLet the distance between the ships be $d$.\nUsing the cosine rule in the triangle formed by the port and the two ships:\n$d^2 = 300^2 + 400^2 - 2(300)(400)\\cos 70^\\circ$\n$d^2 = 90000 + 160000 - 240000\\cos 70^\\circ$\n$d^2 = 250000 - 240000(0.3420) \\approx 250000 - 82084.8 = 167915.2$\n$d = \\sqrt{167915.2} \\approx 409.77$\n\nCorrect to the nearest kilometre, the ships are $410\\text{ km}$ apart.",
  "t": "Finding angles using the cosine rule",
  "hint": "Find the angle between the two bearings ($140^\\circ - 70^\\circ$). Then use the cosine rule with the two distances as side lengths."
},
  {
  "id": "y10-12g-q5",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A pilot flies a plane on course for an airport $600\\text{ km}$ away. Unfortunately, due to an error, his bearing is out by $2^\\circ$. After travelling $700\\text{ km}$ he realises he is off course. How far from the airport is he, correct to the nearest kilometre?",
  "a": "103",
  "solution": "We form a triangle with the original destination, the starting point, and the plane's current position.\nThe sides are $600\\text{ km}$ and $700\\text{ km}$, and the included angle is the error in bearing, which is $2^\\circ$.\nLet the distance to the airport be $x$.\nUsing the cosine rule:\n$x^2 = 600^2 + 700^2 - 2(600)(700)\\cos 2^\\circ$\n$x^2 = 360000 + 490000 - 840000\\cos 2^\\circ$\n$x^2 = 850000 - 840000(0.99939) \\approx 850000 - 839488.2 = 10511.8$\n$x = \\sqrt{10511.8} \\approx 102.52$\n\nCorrect to the nearest kilometre, he is $103\\text{ km}$ from the airport.",
  "t": "Finding angles using the cosine rule",
  "hint": "Draw a triangle with side lengths $600\\text{ km}$ and $700\\text{ km}$. The included angle is the bearing error of $2^\\circ$. Use the cosine rule to find the third side."
}
];
