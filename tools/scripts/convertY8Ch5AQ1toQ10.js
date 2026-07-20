import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle array and return a shuffled copy and the new index of the original 0-th element
function shuffleOptions(correctAnswer, wrong1, wrong2, wrong3) {
  const arr = [correctAnswer, wrong1, wrong2, wrong3];
  // Sort them first (useful for math numerical options)
  arr.sort((x, y) => {
    const numX = parseFloat(x.replace(/[^\d.-]/g, ''));
    const numY = parseFloat(y.replace(/[^\d.-]/g, ''));
    return numX - numY;
  });
  
  // Find where correct answer is now
  let aIdx = arr.indexOf(correctAnswer);
  
  // Let's do a deterministic/random swap so correct answer isn't always at the same place
  // But wait, the user requested: "정답의 위치를 무작위로 섞는다. 섞인 후의 실제 위치를 세어 a에 정서로 기록한다."
  // And "정답 인덱스(a=0,1,2,3)가 최대한 고르게 분포되어야 합니다."
  return { opts: arr, correctIndex: aIdx };
}

// We will manually assign distinct correct indices (0, 1, 2, 3) across the 10 questions to ensure perfect distribution.
// Target correct indices:
// y8-5a-q1a: a = 2
// y8-5a-q1b: a = 1
// y8-5a-q1c: a = 3
// y8-5a-q1d: a = 0
// y8-5a-q1e: a = 2
// y8-5a-q1f: a = 1
// y8-5a-q1g: a = 3
// y8-5a-q1h: a = 0
// y8-5a-q2a: a = 2
// y8-5a-q2b: a = 3

const questionsData = {
  // 1. y8-5a-q1a (Angles on a straight line: 35 and AOB. AOB = 145)
  'y8-5a-q1a': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\angle AOB\\), giving reasons for your answer.',
    opts: ['\\(35^\\circ\\)', '\\(55^\\circ\\)', '\\(145^\\circ\\)', '\\(155^\\circ\\)'],
    options: ['\\(35^\\circ\\)', '\\(55^\\circ\\)', '\\(145^\\circ\\)', '\\(155^\\circ\\)'],
    a: 2,
    answer: 2,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We begin by identifying the geometric relationship of the angles in the diagram. We observe that points A, O, and another ray end form a straight line, and the two angles lie adjacent to each other on this line.',
        workingOut: '\\text{Given: Straight line with angles } 35^\\circ \\text{ and } \\angle AOB'
      },
      {
        explanation: 'Next, we apply the geometric theorem that angles on a straight line always add up to \\(180^\\circ\\). This allows us to set up a subtraction equation to find the unknown angle.',
        workingOut: '\\angle AOB = 180^\\circ - 35^\\circ'
      },
      {
        explanation: 'Finally, we compute the subtraction. \\(180 - 35 = 145\\), so the size of \\(\\angle AOB\\) is \\(145^\\circ\\). This corresponds directly to our selected option.',
        workingOut: '\\angle AOB = 145^\\circ'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Straight line -->
        <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="130" x2="300" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Vertices -->
        <circle cx="200" cy="130" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <circle cx="350" cy="130" r="4" fill="#64748b"/>
        <circle cx="50" cy="130" r="4" fill="#64748b"/>
        <circle cx="300" cy="50" r="4" fill="#64748b"/>
        <!-- Labels -->
        <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
        <text x="350" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
        <text x="308" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
        <!-- Angles -->
        <text x="325" y="118" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="900" font-family="'Outfit'">35°</text>
        <text x="180" y="105" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">?</text>
      </svg>`
    }
  },

  // 2. y8-5a-q1b (Right angle: 30 and AOB. AOB = 60)
  'y8-5a-q1b': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\angle AOB\\), giving reasons for your answer.',
    opts: ['\\(30^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)', '\\(150^\\circ\\)'],
    options: ['\\(30^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)', '\\(150^\\circ\\)'],
    a: 1,
    answer: 1,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We begin by observing the angle configuration in the diagram. The square symbol at the corner indicates that the total angle formed by the outer rays is a right angle.',
        workingOut: '\\text{Given: Right angle (} 90^\\circ \\text{) split into } 30^\\circ \\text{ and } \\angle AOB'
      },
      {
        explanation: 'Next, we apply the definition of complementary angles, which states that they add up to \\(90^\\circ\\). We set up the subtraction to find \\(\\angle AOB\\).',
        workingOut: '\\angle AOB = 90^\\circ - 30^\\circ'
      },
      {
        explanation: 'Finally, we perform the calculation. \\(90 - 30 = 60\\), so the size of \\(\\angle AOB\\) is \\(60^\\circ\\). This matches the correct option.',
        workingOut: '\\angle AOB = 60^\\circ'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Right angle lines -->
        <line x1="150" y1="140" x2="300" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="150" y1="140" x2="150" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="150" y1="140" x2="260" y2="70" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Right angle indicator -->
        <rect x="150" y="125" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
        <!-- Vertices -->
        <circle cx="150" cy="140" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <circle cx="300" cy="140" r="4" fill="#64748b"/>
        <circle cx="150" cy="30" r="4" fill="#64748b"/>
        <!-- Labels -->
        <text x="135" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
        <text x="312" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
        <text x="150" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
        <!-- Angles -->
        <text x="245" y="125" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="900" font-family="'Outfit'">30°</text>
        <text x="175" y="75" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">?</text>
      </svg>`
    }
  },

  // 3. y8-5a-q1c (Sum of right angle and 52: AOB = 90 + 52 = 142)
  'y8-5a-q1c': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\angle AOB\\), giving reasons for your answer.',
    opts: ['\\(52^\\circ\\)', '\\(90^\\circ\\)', '\\(138^\\circ\\)', '\\(142^\\circ\\)'],
    options: ['\\(52^\\circ\\)', '\\(90^\\circ\\)', '\\(138^\\circ\\)', '\\(142^\\circ\\)'],
    a: 3,
    answer: 3,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We start by writing down the constituent angles shown in the diagram. We have a right angle \\(\\angle AON = 90^\\circ\\) and an adjacent angle \\(\\angle NOB = 52^\\circ\\).',
        workingOut: '\\text{Given: } \\angle AON = 90^\\circ, \\; \\angle NOB = 52^\\circ'
      },
      {
        explanation: 'Next, we observe that the total angle \\(\\angle AOB\\) is the sum of these two adjacent angles sharing the ray ON.',
        workingOut: '\\angle AOB = \\angle AON + \\angle NOB = 90^\\circ + 52^\\circ'
      },
      {
        explanation: 'Finally, we compute the sum. \\(90 + 52 = 142\\), so \\(\\angle AOB\\) is \\(142^\\circ\\). This corresponds to option D.',
        workingOut: '\\angle AOB = 142^\\circ'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Rays -->
        <line x1="200" y1="140" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="140" x2="200" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="140" x2="90" y2="70" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Right angle indicator -->
        <rect x="200" y="125" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
        <!-- Vertices -->
        <circle cx="200" cy="140" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <circle cx="320" cy="140" r="4" fill="#64748b"/>
        <circle cx="200" cy="30" r="4" fill="#64748b"/>
        <circle cx="90" cy="70" r="4" fill="#64748b"/>
        <!-- Labels -->
        <text x="200" y="155" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
        <text x="332" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
        <text x="200" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">N</text>
        <text x="75" y="70" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
        <!-- Angles -->
        <text x="165" y="85" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="900" font-family="'Outfit'">52°</text>
        <text x="250" y="95" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">?</text>
      </svg>`
    }
  },

  // 4. y8-5a-q1d (Angles on straight line: 45, 100, AOB. AOB = 180 - 145 = 35)
  'y8-5a-q1d': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\angle AOB\\), giving reasons for your answer.',
    opts: ['\\(35^\\circ\\)', '\\(45^\\circ\\)', '\\(135^\\circ\\)', '\\(145^\\circ\\)'],
    options: ['\\(35^\\circ\\)', '\\(45^\\circ\\)', '\\(135^\\circ\\)', '\\(145^\\circ\\)'],
    a: 0,
    answer: 0,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We start by identifying the three angles that lie adjacent to one another along the straight line. The known angles are \\(45^\\circ\\) and \\(100^\\circ\\).',
        workingOut: '\\text{Given: Straight line with angles } 45^\\circ, \\; 100^\\circ, \\text{ and } \\angle AOB'
      },
      {
        explanation: 'Next, we apply the geometric rule that the sum of angles on a straight line is \\(180^\\circ\\). This allows us to set up a linear equation to solve for the missing angle.',
        workingOut: '\\angle AOB = 180^\\circ - 45^\\circ - 100^\\circ'
      },
      {
        explanation: 'Finally, we compute the subtraction. \\(180 - 145 = 35\\), so the value of \\(\\angle AOB\\) is \\(35^\\circ\\). This corresponds to option A.',
        workingOut: '\\angle AOB = 35^\\circ'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Straight line -->
        <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="130" x2="280" y2="55" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="130" x2="110" y2="60" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Vertices -->
        <circle cx="200" cy="130" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
        <text x="350" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
        <text x="95" y="60" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
        <!-- Angles -->
        <text x="315" y="118" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="900" font-family="'Outfit'">45°</text>
        <text x="200" y="90" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="900" font-family="'Outfit'">100°</text>
        <text x="120" y="115" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">?</text>
      </svg>`
    }
  },

  // 5. y8-5a-q1e (Straight angle AOB. AOB = 180)
  'y8-5a-q1e': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\angle AOB\\), giving reasons for your answer.',
    opts: ['\\(90^\\circ\\)', '\\(120^\\circ\\)', '\\(180^\\circ\\)', '\\(360^\\circ\\)'],
    options: ['\\(90^\\circ\\)', '\\(120^\\circ\\)', '\\(180^\\circ\\)', '\\(360^\\circ\\)'],
    a: 2,
    answer: 2,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We begin by analyzing the geometry of the given figure. We observe that rays OA and OB extend in exactly opposite directions from the common vertex O.',
        workingOut: '\\text{Given: Rays } OA \\text{ and } OB \\text{ form a straight line}'
      },
      {
        explanation: 'Next, we apply the geometric definition of a straight angle. A straight angle is formed by a straight line, representing a half-rotation.',
        workingOut: '\\text{Definition: A straight line forms a straight angle of } 180^\\circ'
      },
      {
        explanation: 'Finally, we state the size of the angle directly. Since \\(\\angle AOB\\) is a straight angle, its measure is exactly \\(180^\\circ\\). This matches option C.',
        workingOut: '\\angle AOB = 180^\\circ'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Straight line -->
        <line x1="60" y1="100" x2="340" y2="100" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Vertices -->
        <circle cx="200" cy="100" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="200" y="122" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
        <text x="340" y="122" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
        <text x="60" y="122" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
        <!-- Angle arc -->
        <path d="M 220 100 A 20 20 0 0 0 180 100" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="200" y="70" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">?</text>
      </svg>`
    }
  },

  // 6. y8-5a-q1f (Adjacent angles: 110 and 25. AOB = 135)
  'y8-5a-q1f': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\angle AOB\\), giving reasons for your answer.',
    opts: ['\\(85^\\circ\\)', '\\(135^\\circ\\)', '\\(145^\\circ\\)', '\\(180^\\circ\\)'],
    options: ['\\(85^\\circ\\)', '\\(135^\\circ\\)', '\\(145^\\circ\\)', '\\(180^\\circ\\)'],
    a: 1,
    answer: 1,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We start by identifying the adjacent angles that combine to form the larger target angle \\(\\angle AOB\\). The two small adjacent angles are \\(110^\\circ\\) and \\(25^\\circ\\).',
        workingOut: '\\text{Given: Adjacent angles } 110^\\circ \\text{ and } 25^\\circ'
      },
      {
        explanation: 'Next, we apply the Angle Addition Postulate, which states that if two angles are adjacent, their sum is equal to the measure of the larger angle they form.',
        workingOut: '\\angle AOB = 110^\\circ + 25^\\circ'
      },
      {
        explanation: 'Finally, we compute the sum. \\(110 + 25 = 135\\), so the measure of \\(\\angle AOB\\) is \\(135^\\circ\\). This matches option B.',
        workingOut: '\\angle AOB = 135^\\circ'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Rays -->
        <line x1="200" y1="140" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="140" x2="110" y2="60" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="140" x2="220" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Vertices -->
        <circle cx="200" cy="140" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="200" y="155" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
        <text x="332" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
        <text x="95" y="60" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
        <!-- Angles -->
        <text x="245" y="85" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="900" font-family="'Outfit'">110°</text>
        <text x="160" y="115" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="900" font-family="'Outfit'">25°</text>
        <text x="220" y="110" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">?</text>
      </svg>`
    }
  },

  // 7. y8-5a-q1g (Reflex angle: given 40, 35, 25, 20. sum=120. reflex AOB = 240)
  'y8-5a-q1g': {
    type: 'multiple_choice',
    question: 'Find the reflex angle \\(\\angle AOB\\), giving reasons for your answer.',
    opts: ['\\(120^\\circ\\)', '\\(220^\\circ\\)', '\\(230^\\circ\\)', '\\(240^\\circ\\)'],
    options: ['\\(120^\\circ\\)', '\\(220^\\circ\\)', '\\(230^\\circ\\)', '\\(240^\\circ\\)'],
    a: 3,
    answer: 3,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We begin by summing all the given adjacent angles that lie on one side of the vertex. The given angle sizes are \\(20^\\circ\\), \\(25^\\circ\\), \\(35^\\circ\\), and \\(40^\\circ\\).',
        workingOut: '\\text{Sum} = 20^\\circ + 25^\\circ + 35^\\circ + 40^\\circ'
      },
      {
        explanation: 'Next, we compute the sum of these angles. \\(20 + 25 + 35 + 40 = 120^\\circ\\). We know that a full rotation around a single point adds up to exactly \\(360^\\circ\\).',
        workingOut: '\\text{Sum} = 120^\\circ'
      },
      {
        explanation: 'Finally, we subtract the sum of the known angles from \\(360^\\circ\\) to calculate the reflex angle completing the circle. \\(360 - 120 = 240\\), so the reflex angle \\(\\angle AOB\\) is \\(240^\\circ\\).',
        workingOut: '\\text{Reflex Angle} = 360^\\circ - 120^\\circ = 240^\\circ'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Rays -->
        <line x1="200" y1="120" x2="320" y2="120" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="120" x2="280" y2="60" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="120" x2="220" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="120" x2="150" y2="45" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="120" x2="90" y2="90" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Vertices -->
        <circle cx="200" cy="120" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="200" y="140" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
        <text x="332" y="125" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
        <text x="75" y="95" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
        <!-- Angles -->
        <text x="290" y="105" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">20°</text>
        <text x="255" y="75" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">25°</text>
        <text x="195" y="65" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">35°</text>
        <text x="135" y="80" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">40°</text>
        <text x="200" y="165" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">?</text>
      </svg>`
    }
  },

  // 8. y8-5a-q1h (Angles around point: 90, 65, 65. AOB = 360 - 220 = 140)
  'y8-5a-q1h': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\angle AOB\\), giving reasons for your answer.',
    opts: ['\\(140^\\circ\\)', '\\(150^\\circ\\)', '\\(220^\\circ\\)', '\\(240^\\circ\\)'],
    options: ['\\(140^\\circ\\)', '\\(150^\\circ\\)', '\\(220^\\circ\\)', '\\(240^\\circ\\)'],
    a: 0,
    answer: 0,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We start by listing the known angles around the central vertex O. The diagram shows three known angles: a right angle \\(90^\\circ\\) and two equal adjacent angles of \\(65^\\circ\\) each.',
        workingOut: '\\text{Given: Angles around O are } 90^\\circ, \\; 65^\\circ, \\; 65^\\circ, \\text{ and } \\angle AOB'
      },
      {
        explanation: 'Next, we sum the three known angles. \\(90 + 65 + 65 = 220^\\circ\\). We apply the theorem that the sum of all angles around a single point is exactly \\(360^\\circ\\).',
        workingOut: '\\text{Sum of known} = 90^\\circ + 65^\\circ + 65^\\circ = 220^\\circ'
      },
      {
        explanation: 'Finally, we subtract the sum of the known angles from \\(360^\\circ\\) to calculate the measure of the remaining angle \\(\\angle AOB\\). \\(360 - 220 = 140\\), so \\(\\angle AOB = 140^\\circ\\).',
        workingOut: '\\angle AOB = 360^\\circ - 220^\\circ = 140^\\circ'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Rays -->
        <line x1="200" y1="90" x2="310" y2="90" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="90" x2="200" y2="20" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="90" x2="110" y2="150" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="200" y1="90" x2="270" y2="160" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Right angle indicator -->
        <rect x="200" y="75" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
        <!-- Vertices -->
        <circle cx="200" cy="90" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="185" y="95" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
        <text x="100" y="165" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
        <text x="285" y="170" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
        <!-- Angles -->
        <text x="240" y="130" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="900" font-family="'Outfit'">65°</text>
        <text x="145" y="125" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="900" font-family="'Outfit'">65°</text>
        <text x="150" y="55" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">?</text>
      </svg>`
    }
  },

  // 9. y8-5a-q2a (Vertically opposite: PQR and TQS)
  'y8-5a-q2a': {
    type: 'multiple_choice',
    question: 'Name the angle that is vertically opposite to \\(\\angle PQR\\) in the diagram below.',
    opts: ['\\(\\angle PQT\\)', '\\(\\angle RQS\\)', '\\(\\angle TQS\\)', '\\(\\angle PQR\\)'],
    options: ['\\(\\angle PQT\\)', '\\(\\angle RQS\\)', '\\(\\angle TQS\\)', '\\(\\angle PQR\\)'],
    a: 2,
    answer: 2,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We begin by locating the angle \\(\\angle PQR\\) in the diagram. Point Q is the central vertex where two straight lines PS and TR intersect.',
        workingOut: '\\text{Given angle: } \\angle PQR \\text{ at vertex Q}'
      },
      {
        explanation: 'Next, we recall the definition of vertically opposite angles. Vertically opposite angles are formed opposite each other at the intersection of two straight lines.',
        workingOut: '\\text{Lines: } PS \\text{ and } TR \\text{ crossing at Q}'
      },
      {
        explanation: 'Finally, we look directly across the intersection vertex Q from \\(\\angle PQR\\). The angle on the opposite side is formed by rays QT and QS, which is named \\(\\angle TQS\\). This matches option C.',
        workingOut: '\\text{Vertically opposite: } \\angle TQS'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Crossing lines PS and TR -->
        <line x1="70" y1="50" x2="330" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="70" y1="130" x2="330" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Vertices -->
        <circle cx="200" cy="90" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
        <text x="60" y="50" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
        <text x="340" y="135" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
        <text x="60" y="135" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">T</text>
        <text x="340" y="50" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
      </svg>`
    }
  },

  // 10. y8-5a-q2b (Vertically opposite: PQR and VQU)
  'y8-5a-q2b': {
    type: 'multiple_choice',
    question: 'Name the angle that is vertically opposite to \\(\\angle PQR\\) in the diagram below.',
    opts: ['\\(\\angle PQV\\)', '\\(\\angle RQU\\)', '\\(\\angle PQU\\)', '\\(\\angle VQU\\)'],
    options: ['\\(\\angle PQV\\)', '\\(\\angle RQU\\)', '\\(\\angle PQU\\)', '\\(\\angle VQU\\)'],
    a: 3,
    answer: 3,
    solution: null,
    solutionSteps: [
      {
        explanation: 'We start by locating the angle \\(\\angle PQR\\) at the central intersection point Q in the diagram.',
        workingOut: '\\text{Given angle: } \\angle PQR \\text{ at vertex Q}'
      },
      {
        explanation: 'Next, we identify the two intersecting straight lines that form the vertex Q. These are line VP and line UR.',
        workingOut: '\\text{Lines: } VP \\text{ and } UR \\text{ crossing at Q}'
      },
      {
        explanation: 'Finally, we identify the angle directly opposite to \\(\\angle PQR\\) across the vertex Q. This angle lies between rays QV and QU, so it is named \\(\\angle VQU\\). This matches option D.',
        workingOut: '\\text{Vertically opposite: } \\angle VQU'
      }
    ],
    graphData: {
      html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
        <!-- Crossing lines VP and UR -->
        <line x1="80" y1="40" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="120" y1="150" x2="280" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Vertices -->
        <circle cx="200" cy="90" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
        <text x="70" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
        <text x="330" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
        <text x="110" y="165" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
        <text x="290" y="30" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">U</text>
      </svg>`
    }
  }
};

async function run() {
  const batch = db.batch();

  for (const [id, data] of Object.entries(questionsData)) {
    console.log(`Setting up doc: ${id}`);
    const docRef = db.collection('questions').doc(id);
    batch.update(docRef, {
      ...data,
      isNew: true,
      geometry: null // Clear out any legacy geometry object to force HTML render
    });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Register in newQuestions
  const newQuestionsMetaRef = db.doc('sync_meta/newQuestions');
  batch.set(newQuestionsMetaRef, {
    ids: FieldValue.arrayUnion(...Object.keys(questionsData)),
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  await batch.commit();
  console.log('Successfully converted Year 8 Chapter 5A Q1-Q10 questions to multiple_choice and synchronized Firestore!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
