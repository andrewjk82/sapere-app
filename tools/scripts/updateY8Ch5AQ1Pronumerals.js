import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updates = {
  // y8-5a-q1a (Angles on a straight line: 35 and x. x = 145)
  'y8-5a-q1a': {
    question: 'Find the value of \\(x\\) in the diagram below, giving reasons for your answer.',
    opts: ['\\(35^\\circ\\)', '\\(55^\\circ\\)', '\\(145^\\circ\\)', '\\(155^\\circ\\)'],
    options: ['\\(35^\\circ\\)', '\\(55^\\circ\\)', '\\(145^\\circ\\)', '\\(155^\\circ\\)'],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: 'We begin by identifying the geometric relationship of the angles in the diagram. We observe that points A, O, and another ray end form a straight line, and the two angles lie adjacent to each other on this line.',
        workingOut: '\\text{Given: Straight line with angles } 35^\\circ \\text{ and } x'
      },
      {
        explanation: 'Next, we apply the geometric theorem that angles on a straight line always add up to \\(180^\\circ\\). This allows us to set up a subtraction equation to find the unknown angle \\(x\\).',
        workingOut: 'x = 180^\\circ - 35^\\circ'
      },
      {
        explanation: 'Finally, we compute the subtraction. \\(180 - 35 = 145\\), so the size of \\(x\\) is \\(145^\\circ\\). This corresponds directly to our selected option.',
        workingOut: 'x = 145^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="355" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Slanted ray OB -->
  <line x1="200" y1="130" x2="300" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <path d="M 230 130 A 30 30 0 0 0 224 111" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 219 115 A 25 25 0 0 0 175 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="350" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="50" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="300" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="50" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="308" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles (labels moved closer to vertex and angle) -->
  <text x="245" y="120" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">35°</text>
  <text x="165" y="112" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">x</text>
</svg>`
  },

  // y8-5a-q1b (Right angle: 30 and x. x = 60)
  'y8-5a-q1b': {
    question: 'Find the value of \\(x\\) in the diagram below, giving reasons for your answer.',
    opts: ['\\(30^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)', '\\(150^\\circ\\)'],
    options: ['\\(30^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)', '\\(150^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We begin by observing the angle configuration in the diagram. The square symbol at the corner indicates that the total angle formed by the outer rays is a right angle.',
        workingOut: '\\text{Given: Right angle (} 90^\\circ \\text{) split into } 30^\\circ \\text{ and } x'
      },
      {
        explanation: 'Next, we apply the definition of complementary angles, which states that they add up to \\(90^\\circ\\). We set up the subtraction to find \\(x\\).',
        workingOut: 'x = 90^\\circ - 30^\\circ'
      },
      {
        explanation: 'Finally, we perform the calculation. \\(90 - 30 = 60\\), so the size of \\(x\\) is \\(60^\\circ\\). This matches the correct option.',
        workingOut: 'x = 60^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Right angle lines -->
  <line x1="150" y1="140" x2="300" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="140" x2="150" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="140" x2="260" y2="70" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle indicator -->
  <rect x="150" y="125" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Angle Arcs -->
  <path d="M 190 140 A 40 40 0 0 0 184.6 114.6" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 178.2 122 A 40 40 0 0 0 150 90" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="150" cy="140" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="300" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="150" cy="30" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="135" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="312" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="150" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles (labels closer to vertex and angle) -->
  <text x="210" y="130" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">30°</text>
  <text x="168" y="100" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">x</text>
</svg>`
  },

  // y8-5a-q1c (Right angle plus 52: x = 90 + 52 = 142)
  'y8-5a-q1c': {
    question: 'Find the value of \\(x\\) in the diagram below, giving reasons for your answer.',
    opts: ['\\(52^\\circ\\)', '\\(90^\\circ\\)', '\\(138^\\circ\\)', '\\(142^\\circ\\)'],
    options: ['\\(52^\\circ\\)', '\\(90^\\circ\\)', '\\(138^\\circ\\)', '\\(142^\\circ\\)'],
    a: 3,
    answer: 3,
    solutionSteps: [
      {
        explanation: 'We start by writing down the constituent angles shown in the diagram. We have a right angle \\(\\angle AON = 90^\\circ\\) and an adjacent angle \\(\\angle NOB = 52^\\circ\\).',
        workingOut: '\\text{Given: } \\angle AON = 90^\\circ, \\; \\angle NOB = 52^\\circ'
      },
      {
        explanation: 'Next, we observe that the total angle \\(x\\) is the sum of these two adjacent angles sharing the ray ON.',
        workingOut: 'x = \\angle AON + \\angle NOB = 90^\\circ + 52^\\circ'
      },
      {
        explanation: 'Finally, we compute the sum. \\(90 + 52 = 142\\), so \\(x\\) is \\(142^\\circ\\). This corresponds to option D.',
        workingOut: 'x = 142^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Rays -->
  <line x1="200" y1="140" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="140" x2="200" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="140" x2="90" y2="70" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle indicator -->
  <rect x="200" y="125" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Angle Arcs -->
  <path d="M 200 100 A 40 40 0 0 0 164.5 121.5" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 230 140 A 30 30 0 0 0 173 123" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="140" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="320" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="200" cy="30" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="90" cy="70" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="155" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="332" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="200" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">N</text>
  <text x="75" y="70" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles (labels closer to vertex and angle) -->
  <text x="175" y="100" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">52°</text>
  <text x="225" y="100" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">x</text>
</svg>`
  },

  // y8-5a-q1d (Straight line: 45, 100, x. x = 35)
  'y8-5a-q1d': {
    question: 'Find the value of \\(x\\) in the diagram below, giving reasons for your answer.',
    opts: ['\\(35^\\circ\\)', '\\(45^\\circ\\)', '\\(135^\\circ\\)', '\\(145^\\circ\\)'],
    options: ['\\(35^\\circ\\)', '\\(45^\\circ\\)', '\\(135^\\circ\\)', '\\(145^\\circ\\)'],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: 'We start by identifying the three angles that lie adjacent to one another along the straight line. The known angles are \\(45^\\circ\\) and \\(100^\\circ\\).',
        workingOut: '\\text{Given: Straight line with angles } 45^\\circ, \\; 100^\\circ, \\text{ and } x'
      },
      {
        explanation: 'Next, we apply the geometric rule that the sum of angles on a straight line is \\(180^\\circ\\). This allows us to set up a linear equation to solve for the missing angle \\(x\\).',
        workingOut: 'x = 180^\\circ - 45^\\circ - 100^\\circ'
      },
      {
        explanation: 'Finally, we compute the subtraction. \\(180 - 145 = 35\\), so the value of \\(x\\) is \\(35^\\circ\\). This corresponds to option A.',
        workingOut: 'x = 35^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="130" x2="280" y2="55" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="130" x2="110" y2="60" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <path d="M 235 130 A 35 35 0 0 0 226 102" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 221 97 A 35 35 0 0 0 167 104" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 163 108 A 35 35 0 0 0 165 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="350" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="50" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="110" cy="60" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="280" cy="55" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="350" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="95" y="60" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles (labels moved closer to vertex and angle) -->
  <text x="245" y="118" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">45°</text>
  <text x="200" y="80" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">100°</text>
  <text x="150" y="120" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">x</text>
</svg>`
  },

  // y8-5a-q1e (Straight angle: x = 180)
  'y8-5a-q1e': {
    question: 'Find the value of \\(x\\) in the diagram below, giving reasons for your answer.',
    opts: ['\\(90^\\circ\\)', '\\(120^\\circ\\)', '\\(180^\\circ\\)', '\\(360^\\circ\\)'],
    options: ['\\(90^\\circ\\)', '\\(120^\\circ\\)', '\\(180^\\circ\\)', '\\(360^\\circ\\)'],
    a: 2,
    answer: 2,
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
        explanation: 'Finally, we state the size of the angle directly. Since the angle \\(x\\) is a straight angle, its measure is exactly \\(180^\\circ\\). This matches option C.',
        workingOut: 'x = 180^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="60" y1="100" x2="340" y2="100" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Vertices -->
  <circle cx="200" cy="100" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="60" cy="100" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="340" cy="100" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="122" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="340" y="122" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="60" y="122" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angle arc -->
  <path d="M 230 100 A 30 30 0 0 0 170 100" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="200" y="60" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">x</text>
</svg>`
  },

  // y8-5a-q1f (Adjacent angles: 110 and 25. x = 135)
  'y8-5a-q1f': {
    question: 'Find the value of \\(x\\) in the diagram below, giving reasons for your answer.',
    opts: ['\\(85^\\circ\\)', '\\(135^\\circ\\)', '\\(145^\\circ\\)', '\\(180^\\circ\\)'],
    options: ['\\(85^\\circ\\)', '\\(135^\\circ\\)', '\\(145^\\circ\\)', '\\(180^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We start by identifying the adjacent angles that combine to form the larger target angle \\(x\\). The two small adjacent angles are \\(110^\\circ\\) and \\(25^\\circ\\).',
        workingOut: '\\text{Given: Adjacent angles } 110^\\circ \\text{ and } 25^\\circ'
      },
      {
        explanation: 'Next, we apply the Angle Addition Postulate, which states that if two angles are adjacent, their sum is equal to the measure of the larger angle they form.',
        workingOut: 'x = 110^\\circ + 25^\\circ'
      },
      {
        explanation: 'Finally, we compute the sum. \\(110 + 25 = 135\\), so the measure of \\(x\\) is \\(135^\\circ\\). This matches option B.',
        workingOut: 'x = 135^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Rays -->
  <line x1="200" y1="140" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="140" x2="110" y2="60" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="140" x2="220" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <path d="M 235 140 A 35 35 0 0 0 205 106" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 202 101 A 40 40 0 0 0 164.5 121.5" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 240 140 A 40 40 0 0 0 167 113.3" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="140" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="320" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="110" cy="60" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="220" cy="40" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="155" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="332" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="95" y="60" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles (labels moved closer to vertex and angle) -->
  <text x="235" y="100" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">110°</text>
  <text x="175" y="110" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">25°</text>
  <text x="215" y="75" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">x</text>
</svg>`
  },

  // y8-5a-q1g (Reflex angle: x = 240)
  'y8-5a-q1g': {
    question: 'Find the value of the reflex angle \\(x\\) in the diagram below, giving reasons for your answer.',
    opts: ['\\(120^\\circ\\)', '\\(220^\\circ\\)', '\\(230^\\circ\\)', '\\(240^\\circ\\)'],
    options: ['\\(120^\\circ\\)', '\\(220^\\circ\\)', '\\(230^\\circ\\)', '\\(240^\\circ\\)'],
    a: 3,
    answer: 3,
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
        explanation: 'Finally, we subtract the sum of the known angles from \\(360^\\circ\\) to calculate the reflex angle \\(x\\) completing the circle. \\(360 - 120 = 240\\), so the reflex angle \\(x\\) is \\(240^\\circ\\).',
        workingOut: 'x = 360^\\circ - 120^\\circ = 240^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Rays -->
  <line x1="200" y1="120" x2="320" y2="120" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="120" x2="280" y2="60" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="120" x2="220" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="120" x2="150" y2="45" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="120" x2="90" y2="90" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <path d="M 235 120 A 35 35 0 0 0 228 100" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <path d="M 224 96 A 35 35 0 0 0 206 82" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <path d="M 203 78 A 35 35 0 0 0 177 82" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <path d="M 174 84 A 35 35 0 0 0 167 100" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <path d="M 226 137 A 30 30 0 1 1 176 137" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="120" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="320" cy="120" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="90" cy="90" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="140" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="332" y="125" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="75" y="95" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles (labels moved closer to vertex and angle) -->
  <text x="270" y="110" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">20°</text>
  <text x="240" y="85" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">25°</text>
  <text x="195" y="75" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">35°</text>
  <text x="150" y="85" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">40°</text>
  <text x="200" y="165" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">x</text>
</svg>`
  },

  // y8-5a-q1h (Angles around point: 90, 65, 65. x = 140)
  'y8-5a-q1h': {
    question: 'Find the value of \\(x\\) in the diagram below, giving reasons for your answer.',
    opts: ['\\(140^\\circ\\)', '\\(150^\\circ\\)', '\\(220^\\circ\\)', '\\(240^\\circ\\)'],
    options: ['\\(140^\\circ\\)', '\\(150^\\circ\\)', '\\(220^\\circ\\)', '\\(240^\\circ\\)'],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: 'We start by listing the known angles around the central vertex O. The diagram shows three known angles: a right angle \\(90^\\circ\\) and two equal adjacent angles of \\(65^\\circ\\) each.',
        workingOut: '\\text{Given: Angles around O are } 90^\\circ, \\; 65^\\circ, \\; 65^\\circ, \\text{ and } x'
      },
      {
        explanation: 'Next, we sum the three known angles. \\(90 + 65 + 65 = 220^\\circ\\). We apply the theorem that the sum of all angles around a single point is exactly \\(360^\\circ\\).',
        workingOut: '\\text{Sum of known} = 90^\\circ + 65^\\circ + 65^\\circ = 220^\\circ'
      },
      {
        explanation: 'Finally, we subtract the sum of the known angles from \\(360^\\circ\\) to calculate the measure of the remaining angle \\(x\\). \\(360 - 220 = 140\\), so \\(x = 140^\\circ\\).',
        workingOut: 'x = 360^\\circ - 220^\\circ = 140^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Rays -->
  <line x1="200" y1="90" x2="310" y2="90" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="90" x2="200" y2="20" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="90" x2="110" y2="150" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="90" x2="270" y2="160" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle indicator -->
  <rect x="200" y="75" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Angle Arcs -->
  <path d="M 180 90 A 20 20 0 0 0 173 113" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 179 119 A 30 30 0 0 0 235 125" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 235 125 A 35 35 0 0 0 200 55" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="100" cy="165" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="285" cy="170" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="185" y="95" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="100" y="180" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="285" y="185" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles (labels moved closer to vertex and angle) -->
  <text x="225" y="125" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">65°</text>
  <text x="155" y="115" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">65°</text>
  <text x="160" y="65" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">x</text>
</svg>`
  }
};

async function run() {
  const batch = db.batch();

  for (const [id, fields] of Object.entries(updates)) {
    console.log(`Updating doc: ${id}`);
    const docRef = db.collection('questions').doc(id);
    batch.update(docRef, fields);
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully adjusted labels closer to vertices, replaced "?" with "x" and updated SVGs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
