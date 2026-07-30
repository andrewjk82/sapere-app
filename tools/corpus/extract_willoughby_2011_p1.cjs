const questions = [
  {
    id: "wghs-2011-y8-t1-q1",
    type: "teacher_review",
    difficulty: "medium",
    chapterId: "y8-ch8",
    topicId: "y8-8a",
    topicCode: "8A",
    timeLimit: 120,
    question: "Find the value of the pronumerals to one decimal place where necessary. Show all working out.",
    subQuestions: [
      {
        id: "wghs-2011-y8-t1-q1a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "Find the value of \\(x\\).",
        a: "x = 25",
        graphData: {
          svg: `<svg viewBox="0 0 150 150" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M 30,120 L 120,120 L 30,30 Z" stroke="black" stroke-width="1.5" fill="none" />
<path d="M 30,110 L 40,110 L 40,120" stroke="black" stroke-width="1.5" fill="none" />
<text x="10" y="80" font-family="Times New Roman" font-size="14">20cm</text>
<text x="60" y="135" font-family="Times New Roman" font-size="14">15 cm</text>
<text x="80" y="70" font-family="Times New Roman" font-size="14">x cm</text>
</svg>`
        },
        solutionSteps: [
          { explanation: "Use Pythagoras' theorem.", workingOut: "x^2 = 20^2 + 15^2", graphData: null },
          { explanation: "Calculate the squares.", workingOut: "x^2 = 400 + 225 = 625", graphData: null },
          { explanation: "Take the square root.", workingOut: "x = \\sqrt{625} = 25", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q1b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "Find the value of \\(y\\).",
        a: "y = 16.7",
        graphData: {
          svg: `<svg viewBox="0 0 200 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M 30,90 L 170,90 L 120,30 Z" stroke="black" stroke-width="1.5" fill="none" />
<path d="M 120,30 L 115,36 L 121,41 L 126,35 Z" stroke="black" stroke-width="1.5" fill="none" />
<text x="90" y="105" font-family="Times New Roman" font-size="14">20 cm</text>
<text x="60" y="55" font-family="Times New Roman" font-size="14">y cm</text>
<text x="140" y="55" font-family="Times New Roman" font-size="14">11 cm</text>
</svg>`
        },
        solutionSteps: [
          { explanation: "Use Pythagoras' theorem.", workingOut: "20^2 = y^2 + 11^2", graphData: null },
          { explanation: "Rearrange to solve for \\(y^2\\).", workingOut: "y^2 = 20^2 - 11^2", graphData: null },
          { explanation: "Calculate the values.", workingOut: "y^2 = 400 - 121 = 279", graphData: null },
          { explanation: "Take the square root and round to one decimal place.", workingOut: "y = \\sqrt{279} \\approx 16.7", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q1c",
        type: "short_answer",
        difficulty: "hard",
        timeLimit: 60,
        question: "Find the value of \\(x\\).",
        a: "x = 11",
        graphData: {
          svg: `<svg viewBox="0 0 200 150" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M 30,30 L 180,30 L 180,110 L 90,110 Z" stroke="black" stroke-width="1.5" fill="none" />
<path d="M 170,30 L 170,40 L 180,40" stroke="black" stroke-width="1.5" fill="none" />
<path d="M 170,110 L 170,100 L 180,100" stroke="black" stroke-width="1.5" fill="none" />
<line x1="30" y1="20" x2="180" y2="20" stroke="black" stroke-width="1" />
<polygon points="30,20 35,17 35,23" fill="black" />
<polygon points="180,20 175,17 175,23" fill="black" />
<text x="95" y="15" font-family="Times New Roman" font-size="12">51 cm</text>
<text x="35" y="80" font-family="Times New Roman" font-size="12">41 cm</text>
<text x="185" y="75" font-family="Times New Roman" font-size="12">9 cm</text>
<text x="130" y="125" font-family="Times New Roman" font-size="12">x cm</text>
</svg>`
        },
        solutionSteps: [
          { explanation: "Drop a perpendicular line from the top-left vertex to the bottom edge, creating a right-angled triangle.", workingOut: "Let the horizontal leg of this triangle be \\(y\\).", graphData: null },
          { explanation: "Use Pythagoras' theorem on the newly formed triangle.", workingOut: "y^2 = 41^2 - 9^2", graphData: null },
          { explanation: "Calculate \\(y\\).", workingOut: "y^2 = 1681 - 81 = 1600 \\Rightarrow y = \\sqrt{1600} = 40", graphData: null },
          { explanation: "Use the total length of the top edge to find \\(x\\).", workingOut: "x = 51 - 40 = 11", graphData: null }
        ]
      }
    ]
  },
  {
    id: "wghs-2011-y8-t1-q2",
    type: "short_answer",
    difficulty: "medium",
    chapterId: "y8-ch8",
    topicId: "y8-8a",
    topicCode: "8A",
    timeLimit: 120,
    question: "Is the triangle below a right angled triangle? Show your working.",
    a: "No",
    graphData: {
      svg: `<svg viewBox="0 0 150 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M 20,100 L 140,70 L 70,30 Z" stroke="black" stroke-width="1.5" fill="none" />
<text x="40" y="60" font-family="Times New Roman" font-size="14">8 m</text>
<text x="110" y="45" font-family="Times New Roman" font-size="14">5 m</text>
<text x="80" y="95" font-family="Times New Roman" font-size="14">9 m</text>
</svg>`
    },
    solutionSteps: [
      { explanation: "Check if the square of the longest side equals the sum of the squares of the other two sides.", workingOut: "9^2 = 8^2 + 5^2", graphData: null },
      { explanation: "Calculate both sides.", workingOut: "81 = 64 + 25 = 89", graphData: null },
      { explanation: "Since the two sides are not equal, the triangle is not right-angled.", workingOut: "81 \\neq 89 \\therefore \\text{Triangle is not right-angled}", graphData: null }
    ]
  },
  {
    id: "wghs-2011-y8-t1-q3",
    type: "teacher_review",
    difficulty: "medium",
    chapterId: "y8-ch8",
    topicId: "y8-8a",
    topicCode: "8A",
    timeLimit: 120,
    question: "For the following problems draw a diagram and answer the question showing all working.",
    subQuestions: [
      {
        id: "wghs-2011-y8-t1-q3a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 120,
        question: "Find the length of the diagonal of a rectangle with length 16 cm and breadth 8 cm. (Answer to one decimal place)",
        a: "17.9 cm",
        solutionSteps: [
          { explanation: "Draw a rectangle and its diagonal to form a right-angled triangle. Let the diagonal be \\(l\\).", workingOut: "l^2 = 8^2 + 16^2", graphData: null },
          { explanation: "Calculate the squares.", workingOut: "l^2 = 64 + 256 = 320", graphData: null },
          { explanation: "Take the square root and round to one decimal place.", workingOut: "l = \\sqrt{320} \\approx 17.9 \\text{ cm}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q3b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 120,
        question: "A ladder of length 10 m reaches 7m up the side of a wall. How far is the foot of the ladder from the base of the wall? (Answer to one decimal place)",
        a: "7.1 m",
        solutionSteps: [
          { explanation: "Draw a diagram representing the wall, ground, and ladder forming a right-angled triangle. Let the distance along the ground be \\(x\\).", workingOut: "10^2 = x^2 + 7^2", graphData: null },
          { explanation: "Rearrange to solve for \\(x^2\\).", workingOut: "x^2 = 10^2 - 7^2", graphData: null },
          { explanation: "Calculate the values.", workingOut: "x^2 = 100 - 49 = 51", graphData: null },
          { explanation: "Take the square root and round to one decimal place.", workingOut: "x = \\sqrt{51} \\approx 7.1 \\text{ m}", graphData: null }
        ]
      }
    ]
  }
];

module.exports = questions;
