import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targetData = {
  // 1. y8-5h-q2a_alpha: Find alpha in parallelogram (alpha = 140)
  'y8-5h-q2a_alpha': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\alpha\\) in the parallelogram below, giving reasons.',
    opts: [
      '\\(40^\\circ\\) (Opposite angles of a parallelogram are equal)',
      '\\(140^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(140^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(160^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    options: [
      '\\(40^\\circ\\) (Opposite angles of a parallelogram are equal)',
      '\\(140^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(140^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(160^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We start by identifying that ABCD is a parallelogram. In a parallelogram, consecutive (co-interior) angles add up to \\(180^\\circ\\) because the opposite sides are parallel.',
        workingOut: '\\text{Given: Parallelogram with angle } A = 40^\\circ \\text{ and adjacent angle } B = \\alpha'
      },
      {
        explanation: 'Using the co-interior angle rule for parallel lines AD and BC, we write down the equation to find \\(\\alpha\\).',
        workingOut: '\\alpha = 180^\\circ - 40^\\circ'
      },
      {
        explanation: 'Calculating the subtraction, we find \\(\\alpha = 140^\\circ\\). This matches option B.',
        workingOut: '\\alpha = 140^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallelogram sides -->
  <polygon points="100,140 140,50 300,50 260,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel line arrows -->
  <!-- AB and DC (single arrow) -->
  <path d="M 122 105 L 118 95 L 128 99" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 282 105 L 278 95 L 288 99" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
  <!-- AD and BC (double arrow) -->
  <path d="M 172 140 L 182 140" fill="none" stroke="#475569" stroke-width="2"/>
  
  <!-- Vertices circles -->
  <circle cx="100" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="140" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="300" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="260" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="45" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="275" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (symmetrical arcs & clear labels inside the corners) -->
  <!-- A: 40deg (radius 22) -->
  <path d="M 121 133 A 22 22 0 0 0 108 122" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="123" y="125" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">40°</text>
  
  <!-- B: alpha (radius 22) -->
  <path d="M 130 72 A 22 22 0 0 0 159 60" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="148" y="75" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 2. y8-5h-q2a_beta: Find beta in parallelogram (beta = 40)
  'y8-5h-q2a_beta': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\beta\\) in the parallelogram below, giving reasons.',
    opts: [
      '\\(40^\\circ\\) (Opposite angles of a parallelogram are equal)',
      '\\(40^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(140^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(140^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    options: [
      '\\(40^\\circ\\) (Opposite angles of a parallelogram are equal)',
      '\\(40^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(140^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(140^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: 'We identify that in the parallelogram ABCD, the angle at vertex A is given as \\(40^\\circ\\), and we need to find \\(\\beta\\) at vertex C.',
        workingOut: '\\text{Given: Parallelogram with angle } A = 40^\\circ \\text{ and opposite angle } C = \\beta'
      },
      {
        explanation: 'We apply the geometric property that opposite angles in any parallelogram are equal in size.',
        workingOut: '\\beta = \\angle A'
      },
      {
        explanation: 'Therefore, the measure of \\(\\beta\\) is exactly \\(40^\\circ\\). This matches option A.',
        workingOut: '\\beta = 40^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallelogram sides -->
  <polygon points="100,140 140,50 300,50 260,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Vertices circles -->
  <circle cx="100" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="140" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="300" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="260" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="45" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="275" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles -->
  <!-- A: 40deg -->
  <path d="M 121 133 A 22 22 0 0 0 108 122" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="123" y="125" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">40°</text>
  
  <!-- C: beta (radius 22) -->
  <path d="M 279 57 A 22 22 0 0 0 292 68" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="277" y="68" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // 3. y8-5h-q2a_gamma: Find gamma in parallelogram (gamma = 140)
  'y8-5h-q2a_gamma': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\gamma\\) in the parallelogram below, giving reasons.',
    opts: [
      '\\(40^\\circ\\) (Opposite angles of a parallelogram are equal)',
      '\\(140^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(140^\\circ\\) (Angles around a point add to \\(360^\\circ\\))',
      '\\(160^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))'
    ],
    options: [
      '\\(40^\\circ\\) (Opposite angles of a parallelogram are equal)',
      '\\(140^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(140^\\circ\\) (Angles around a point add to \\(360^\\circ\\))',
      '\\(160^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We locate \\(\\gamma\\) at vertex D. Since ABCD is a parallelogram, consecutive angles such as \\(\\angle A\\) and \\(\\angle D\\) are co-interior angles between parallel lines AD and BC.',
        workingOut: '\\text{Given: Parallelogram with angle } A = 40^\\circ \\text{ and adjacent angle } D = \\gamma'
      },
      {
        explanation: 'Co-interior angles are supplementary, so they add up to \\(180^\\circ\\). We compute the value of \\(\\gamma\\).',
        workingOut: '\\gamma = 180^\\circ - 40^\\circ'
      },
      {
        explanation: 'Calculating the subtraction gives \\(\\gamma = 140^\\circ\\). This matches option B.',
        workingOut: '\\gamma = 140^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallelogram sides -->
  <polygon points="100,140 140,50 300,50 260,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Vertices circles -->
  <circle cx="100" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="140" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="300" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="260" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="45" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="275" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles -->
  <!-- A: 40deg -->
  <path d="M 121 133 A 22 22 0 0 0 108 122" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="123" y="125" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">40°</text>
  
  <!-- D: gamma (radius 22) -->
  <path d="M 241 130 A 22 22 0 0 0 270 122" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="252" y="115" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">γ</text>
</svg>`
  },

  // 4. y8-5h-q2c_alpha: Find alpha in trapezium (alpha = 115)
  'y8-5h-q2c_alpha': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\alpha\\) in the trapezium below, giving reasons.',
    opts: [
      '\\(65^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(115^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(115^\\circ\\) (Opposite angles of a quadrilateral are equal)',
      '\\(125^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    options: [
      '\\(65^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(115^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(115^\\circ\\) (Opposite angles of a quadrilateral are equal)',
      '\\(125^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'In the trapezium ABCD, the top side BC is parallel to the bottom side AD. Therefore, the consecutive angles along the leg AB are co-interior.',
        workingOut: '\\text{Given: } BC \\parallel AD \\text{ with } \\angle A = 65^\\circ \\text{ and } \\angle B = \\alpha'
      },
      {
        explanation: 'Since co-interior angles add up to \\(180^\\circ\\), we solve for \\(\\alpha\\).',
        workingOut: '\\alpha = 180^\\circ - 65^\\circ'
      },
      {
        explanation: 'Subtracting \\(65^\\circ\\) from \\(180^\\circ\\) gives \\(115^\\circ\\). This matches option B.',
        workingOut: '\\alpha = 115^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Trapezium sides -->
  <polygon points="80,140 130,50 270,50 320,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel line arrows on BC and AD -->
  <path d="M 195,50 L 205,45 L 205,55 Z M 195,140 L 205,135 L 205,145 Z" fill="#475569"/>
  
  <!-- Labels -->
  <text x="65" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="120" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="280" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="335" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles -->
  <!-- A: 65deg -->
  <path d="M 102 131 A 24 24 0 0 0 90 118" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="108" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- B: alpha (radius 22) -->
  <path d="M 120 68 A 22 22 0 0 0 148 60" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="135" y="75" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 5. y8-5h-q2c_beta: Find beta in trapezium (beta = 125)
  'y8-5h-q2c_beta': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\beta\\) in the trapezium below, giving reasons.',
    opts: [
      '\\(55^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(125^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(125^\\circ\\) (Vertically opposite angles are equal)',
      '\\(135^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    options: [
      '\\(55^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(125^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(125^\\circ\\) (Vertically opposite angles are equal)',
      '\\(135^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'In the trapezium ABCD, the top side BC is parallel to the bottom side AD. The consecutive angles along the leg CD are co-interior angles.',
        workingOut: '\\text{Given: } BC \\parallel AD \\text{ with } \\angle D = 55^\\circ \\text{ and } \\angle C = \\beta'
      },
      {
        explanation: 'Co-interior angles add up to \\(180^\\circ\\), which gives us the subtraction equation.',
        workingOut: '\\beta = 180^\\circ - 55^\\circ'
      },
      {
        explanation: 'Subtracting \\(55^\\circ\\) from \\(180^\\circ\\) yields \\(125^\\circ\\). This matches option B.',
        workingOut: '\\beta = 125^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Trapezium sides -->
  <polygon points="80,140 130,50 270,50 320,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel line arrows -->
  <path d="M 195,50 L 205,45 L 205,55 Z M 195,140 L 205,135 L 205,145 Z" fill="#475569"/>
  
  <!-- Labels -->
  <text x="65" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="120" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="280" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="335" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles -->
  <!-- D: 55deg -->
  <path d="M 298 118 A 24 24 0 0 0 310 131" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="292" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">55°</text>
  
  <!-- C: beta -->
  <path d="M 252 60 A 22 22 0 0 0 280 68" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="265" y="75" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // 6. y8-5h-q2d_alpha: Find alpha in triangle (alpha = 70)
  'y8-5h-q2d_alpha': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\alpha\\) in the isosceles triangle below, giving reasons.',
    opts: [
      '\\(40^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(70^\\circ\\) (Base angles of an isosceles triangle are equal)',
      '\\(70^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(110^\\circ\\) (Exterior angle of a triangle)'
    ],
    options: [
      '\\(40^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(70^\\circ\\) (Base angles of an isosceles triangle are equal)',
      '\\(70^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(110^\\circ\\) (Exterior angle of a triangle)'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We look at triangle PQR. The tick marks on segments PQ and PR show that they are equal in length, making it an isosceles triangle.',
        workingOut: '\\text{Given: Isosceles triangle PQR with PQ = PR, and vertex angle } P = 40^\\circ'
      },
      {
        explanation: 'Since PQ = PR, the base angles opposite to these sides are equal. Therefore, \\(\\angle PQR = \\angle PRQ = \\alpha\\). We write down the triangle sum equation.',
        workingOut: '40^\\circ + 2\\alpha = 180^\\circ'
      },
      {
        explanation: 'Solving the equation, we subtract \\(40^\\circ\\) and divide by 2: \\(2\\alpha = 140^\\circ \\Rightarrow \\alpha = 70^\\circ\\). This matches option B.',
        workingOut: '\\alpha = 70^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle sides and extended line -->
  <line x1="100" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="40" x2="140" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="40" x2="260" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Equal side ticks -->
  <!-- tick on PQ -->
  <path d="M 166,80 L 174,90" stroke="#475569" stroke-width="2"/>
  <!-- tick on PR -->
  <path d="M 234,80 L 226,90" stroke="#475569" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="200" y="25" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="130" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="260" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="350" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles -->
  <!-- P: 40deg (radius 20) -->
  <path d="M 189 57 A 20 20 0 0 0 211 57" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="200" y="72" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">40°</text>
  
  <!-- Q: alpha (radius 22) -->
  <path d="M 152 112 A 22 22 0 0 0 162 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="160" y="112" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 7. y8-5h-q2d_beta: Find beta (beta = 110)
  'y8-5h-q2d_beta': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\beta\\) in the diagram below, giving reasons.',
    opts: [
      '\\(70^\\circ\\) (Base angles of an isosceles triangle are equal)',
      '\\(110^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(110^\\circ\\) (Vertically opposite angles are equal)',
      '\\(140^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))'
    ],
    options: [
      '\\(70^\\circ\\) (Base angles of an isosceles triangle are equal)',
      '\\(110^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(110^\\circ\\) (Vertically opposite angles are equal)',
      '\\(140^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We look at vertex R. The interior base angle of the triangle is \\(\\alpha = 70^\\circ\\). The angle \\(\\beta\\) is adjacent to \\(\\alpha\\) on the straight line QS.',
        workingOut: '\\text{Given: Straight line QS with adjacent angles } \\alpha = 70^\\circ \\text{ and } \\beta'
      },
      {
        explanation: 'Since angles on a straight line add up to \\(180^\\circ\\), we set up the equation to solve for \\(\\beta\\).',
        workingOut: '\\beta = 180^\\circ - 70^\\circ'
      },
      {
        explanation: 'Calculating the subtraction gives \\(\\beta = 110^\\circ\\). This matches option B.',
        workingOut: '\\beta = 110^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle sides and extended line -->
  <line x1="100" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="40" x2="140" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="40" x2="260" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Labels -->
  <text x="200" y="25" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="130" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="260" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="350" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles -->
  <!-- R interior: alpha = 70deg -->
  <text x="240" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- R exterior: beta (radius 22) -->
  <path d="M 272 112 A 22 22 0 0 1 282 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="288" y="112" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // 8. y8-5h-q2e_alpha: Find alpha in right isosceles triangle (alpha = 45)
  'y8-5h-q2e_alpha': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\alpha\\) in the triangle below, giving reasons.',
    opts: [
      '\\(45^\\circ\\) (Equal sides of a right-angled isosceles triangle have equal opposite angles)',
      '\\(45^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(90^\\circ\\) (Perpendicular lines form a right angle)',
      '\\(135^\\circ\\) (Exterior angle of a triangle)'
    ],
    options: [
      '\\(45^\\circ\\) (Equal sides of a right-angled isosceles triangle have equal opposite angles)',
      '\\(45^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(90^\\circ\\) (Perpendicular lines form a right angle)',
      '\\(135^\\circ\\) (Exterior angle of a triangle)'
    ],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: 'We analyze triangle ABC. The tick marks on CA and CB show they are equal in length, and the square at C denotes a right angle (\\(90^\\circ\\)). This makes ABC a right-angled isosceles triangle.',
        workingOut: '\\text{Given: Triangle ABC with CA = CB, and } \\angle C = 90^\\circ'
      },
      {
        explanation: 'Since CA = CB, the base angles opposite to these sides are equal. Therefore, \\(\\angle CAB = \\angle CBA = \\alpha\\). The sum of angles in a triangle is \\(180^\\circ\\).',
        workingOut: '90^\\circ + 2\\alpha = 180^\\circ'
      },
      {
        explanation: 'Solving for \\(\\alpha\\): \\(2\\alpha = 90^\\circ \\Rightarrow \\alpha = 45^\\circ\\). This matches option A.',
        workingOut: '\\alpha = 45^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Right-angle triangle and extension line -->
  <line x1="100" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="130" x2="150" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="30" x2="250" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle box at C -->
  <rect x="150" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Ticks on CA and CB -->
  <path d="M 145,75 L 155,85" stroke="#475569" stroke-width="2"/>
  <path d="M 195,125 L 205,135" stroke="#475569" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="150" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="135" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="250" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="350" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles -->
  <!-- A: alpha -->
  <path d="M 150 48 A 18 18 0 0 1 163 43" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="166" y="60" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 9. y8-5h-q2e_beta: Find beta (beta = 135)
  'y8-5h-q2e_beta': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\beta\\) in the diagram below, giving reasons.',
    opts: [
      '\\(45^\\circ\\) (Base angles of an isosceles triangle are equal)',
      '\\(90^\\circ\\) (Perpendicular lines form a right angle)',
      '\\(135^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(135^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))'
    ],
    options: [
      '\\(45^\\circ\\) (Base angles of an isosceles triangle are equal)',
      '\\(90^\\circ\\) (Perpendicular lines form a right angle)',
      '\\(135^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(135^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))'
    ],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: 'We look at vertex B. The interior angle of the triangle is \\(\\alpha = 45^\\circ\\). The angle \\(\\beta\\) lies on the straight line CD adjacent to this angle.',
        workingOut: '\\text{Given: Straight line CD with adjacent angles } \\alpha = 45^\\circ \\text{ and } \\beta'
      },
      {
        explanation: 'Since adjacent angles on a straight line sum to \\(180^\\circ\\), we set up the subtraction.',
        workingOut: '\\beta = 180^\\circ - 45^\\circ'
      },
      {
        explanation: 'Subtracting \\(45^\\circ\\) from \\(180^\\circ\\) yields \\(135^\\circ\\). This matches option C.',
        workingOut: '\\beta = 135^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Right-angle triangle and extension line -->
  <line x1="100" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="130" x2="150" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="30" x2="250" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle box at C -->
  <rect x="150" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="150" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="135" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="250" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="350" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles -->
  <!-- B interior: alpha = 45deg -->
  <text x="232" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">45°</text>
  
  <!-- B exterior: beta (radius 22) -->
  <path d="M 264 116 A 22 22 0 0 1 272 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="278" y="112" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // 10. y8-5h-q2f_alpha: Find alpha (alpha = 30)
  'y8-5h-q2f_alpha': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\alpha\\) in the triangle below, giving reasons.',
    opts: [
      '\\(30^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(30^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(60^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(90^\\circ\\) (Perpendicular lines form right angles)'
    ],
    options: [
      '\\(30^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(30^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(60^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(90^\\circ\\) (Perpendicular lines form right angles)'
    ],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: 'We observe a right-angled triangle PQR. The angle at Q is marked with a square, denoting \\(90^\\circ\\). The other two interior angles are labeled \\(2\\alpha\\) and \\(\\alpha\\).',
        workingOut: '\\text{Given: Triangle with angles } 90^\\circ, \\; 2\\alpha, \\; \\alpha'
      },
      {
        explanation: 'Since the sum of angles in a triangle is \\(180^\\circ\\), the two acute angles must add up to \\(90^\\circ\\). We construct the equation.',
        workingOut: '2\\alpha + \\alpha = 90^\\circ \\;\\Rightarrow\\; 3\\alpha = 90^\\circ'
      },
      {
        explanation: 'Dividing both sides by 3, we find \\(\\alpha = 30^\\circ\\). This matches option A.',
        workingOut: '\\alpha = 30^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Right-angle triangle and extension line -->
  <line x1="80" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="120" y1="130" x2="120" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="120" y1="30" x2="270" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle box at Q -->
  <rect x="120" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="120" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="105" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="270" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="350" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles -->
  <!-- P: 2alpha -->
  <path d="M 120 48 A 18 18 0 0 1 133 42" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="138" y="60" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">2α</text>
  
  <!-- R interior: alpha -->
  <path d="M 248 115 A 22 22 0 0 0 248 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="240" y="122" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 11. y8-5h-q2f_beta: Find beta (beta = 150)
  'y8-5h-q2f_beta': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\beta\\) in the diagram below, giving reasons.',
    opts: [
      '\\(30^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(90^\\circ\\) (Perpendicular lines form a right angle)',
      '\\(150^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(150^\\circ\\) (Vertically opposite angles are equal)'
    ],
    options: [
      '\\(30^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(90^\\circ\\) (Perpendicular lines form a right angle)',
      '\\(150^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(150^\\circ\\) (Vertically opposite angles are equal)'
    ],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: 'We look at vertex R. The interior angle of the triangle is \\(\\alpha = 30^\\circ\\). The angle \\(\\beta\\) lies adjacent to it along the straight line QS.',
        workingOut: '\\text{Given: Straight line QS with adjacent angles } \\alpha = 30^\\circ \\text{ and } \\beta'
      },
      {
        explanation: 'Adjacent angles on a straight line add up to \\(180^\\circ\\). We write down the subtraction equation.',
        workingOut: '\\beta = 180^\\circ - 30^\\circ'
      },
      {
        explanation: 'Subtracting \\(30^\\circ\\) from \\(180^\\circ\\) gives \\(150^\\circ\\). This matches option C.',
        workingOut: '\\beta = 150^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Right-angle triangle and extension line -->
  <line x1="80" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="120" y1="130" x2="120" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="120" y1="30" x2="270" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle box at Q -->
  <rect x="120" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="120" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="105" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="270" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="350" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles -->
  <!-- R interior: alpha = 30deg -->
  <text x="240" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">30°</text>
  
  <!-- R exterior: beta (radius 22) -->
  <path d="M 284 116 A 22 22 0 0 1 292 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="298" y="112" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // 12. y8-5h-q3a: Quadrilateral angle sum (gamma = 105)
  'y8-5h-q3a': {
    type: 'multiple_choice',
    question: 'Write down an equation involving the pronumeral and solve for \\(\\gamma\\) in the quadrilateral below.',
    opts: [
      '\\(95^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(105^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(105^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(115^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    options: [
      '\\(95^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(105^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(105^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(115^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We begin by recognizing that ABCD is a quadrilateral. The sum of the interior angles of any quadrilateral is always equal to \\(360^\\circ\\).',
        workingOut: '65^\\circ + 120^\\circ + 70^\\circ + \\gamma = 360^\\circ'
      },
      {
        explanation: 'We combine the known angle values to simplify the equation.',
        workingOut: '255^\\circ + \\gamma = 360^\\circ'
      },
      {
        explanation: 'Subtracting \\(255^\\circ\\) from \\(360^\\circ\\), we solve for \\(\\gamma\\). \\(\\gamma = 105^\\circ\\). This matches option B.',
        workingOut: '\\gamma = 105^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Quadrilateral sides -->
  <polygon points="90,140 120,40 280,40 250,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="75" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="110" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="290" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="265" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (radius 22) -->
  <!-- A: 65deg -->
  <path d="M 112 135 A 22 22 0 0 0 99 119" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="115" y="123" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- B: 120deg -->
  <path d="M 111 60 A 22 22 0 0 0 138 48" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="127" y="65" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">120°</text>
  
  <!-- C: gamma -->
  <path d="M 262 48 A 22 22 0 0 0 289 60" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="271" y="65" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">γ</text>
  
  <!-- D: 70deg -->
  <path d="M 241 119 A 22 22 0 0 0 228 135" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="232" y="123" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
</svg>`
  },

  // 13. y8-5h-q3b: Triangle base angle (alpha = 65)
  'y8-5h-q3b': {
    type: 'multiple_choice',
    question: 'Write down an equation involving the pronumeral and solve for \\(\\alpha\\) in the triangle below.',
    opts: [
      '\\(50^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(65^\\circ\\) (Base angles of an isosceles triangle are equal, and sum to \\(180^\\circ\\))',
      '\\(65^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(130^\\circ\\) (Exterior angle of a triangle)'
    ],
    options: [
      '\\(50^\\circ\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(65^\\circ\\) (Base angles of an isosceles triangle are equal, and sum to \\(180^\\circ\\))',
      '\\(65^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(130^\\circ\\) (Exterior angle of a triangle)'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We observe a triangle with two equal base angles labeled \\(\\alpha\\) and a vertex angle of \\(50^\\circ\\). The sum of all interior angles of any triangle is \\(180^\\circ\\).',
        workingOut: '\\alpha + \\alpha + 50^\\circ = 180^\\circ'
      },
      {
        explanation: 'We simplify the equation by combining like terms.',
        workingOut: '2\\alpha + 50^\\circ = 180^\\circ'
      },
      {
        explanation: 'Subtracting \\(50^\\circ\\) and dividing by 2: \\(2\\alpha = 130^\\circ \\Rightarrow \\alpha = 65^\\circ\\). This matches option B.',
        workingOut: '\\alpha = 65^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle sides -->
  <polygon points="100,130 200,40 300,130" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="85" y="135" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="200" y="25" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="135" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  
  <!-- Angles (radius 22) -->
  <!-- A: alpha -->
  <path d="M 121 121 A 22 22 0 0 0 115 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="124" y="122" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- B: 50deg -->
  <path d="M 189 57 A 20 20 0 0 0 211 57" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="200" y="72" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">50°</text>
  
  <!-- C: alpha -->
  <path d="M 285 130 A 22 22 0 0 0 279 121" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="276" y="122" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 14. y8-5h-q3c: Quadrilateral algebra (3alpha = 180 -> alpha = 60)
  'y8-5h-q3c': {
    type: 'multiple_choice',
    question: 'Write down an equation involving the pronumeral and solve for \\(\\alpha\\) in the quadrilateral below.',
    opts: [
      '\\(45^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(60^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(60^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(90^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    options: [
      '\\(45^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(60^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(60^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(90^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We sum the four interior angles of the quadrilateral ABCD. The total sum is always equal to \\(360^\\circ\\).',
        workingOut: '70^\\circ + 2\\alpha + 110^\\circ + \\alpha = 360^\\circ'
      },
      {
        explanation: 'We combine like terms (the constant values and the terms with \\(\\alpha\\)).',
        workingOut: '3\\alpha + 180^\\circ = 360^\\circ'
      },
      {
        explanation: 'Subtracting \\(180^\\circ\\) and dividing by 3: \\(3\\alpha = 180^\\circ \\Rightarrow \\alpha = 60^\\circ\\). This matches option B.',
        workingOut: '\\alpha = 60^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Quadrilateral sides -->
  <polygon points="90,140 110,40 280,50 240,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="75" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="100" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="290" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="255" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (radius 22) -->
  <!-- A: 70deg -->
  <path d="M 112 135 A 22 22 0 0 0 99 119" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="115" y="123" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- B: 2alpha -->
  <path d="M 102 59 A 22 22 0 0 0 128 48" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="118" y="65" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">2α</text>
  
  <!-- C: 110deg -->
  <path d="M 262 48 A 22 22 0 0 0 289 60" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="268" y="65" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">110°</text>
  
  <!-- D: alpha -->
  <path d="M 231 119 A 22 22 0 0 0 218 135" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="222" y="123" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 15. y8-5h-q3d: Parallelogram angle sum (beta = 50)
  'y8-5h-q3d': {
    type: 'multiple_choice',
    question: 'Write down an equation involving the pronumeral and solve for \\(\\beta\\) in the parallelogram below.',
    opts: [
      '\\(50^\\circ\\) (Co-interior angles of a parallelogram add to \\(180^\\circ\\))',
      '\\(50^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(130^\\circ\\) (Opposite angles of a parallelogram are equal)',
      '\\(130^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))'
    ],
    options: [
      '\\(50^\\circ\\) (Co-interior angles of a parallelogram add to \\(180^\\circ\\))',
      '\\(50^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(130^\\circ\\) (Opposite angles of a parallelogram are equal)',
      '\\(130^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))'
    ],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: 'We identify that ABCD is a parallelogram. In a parallelogram, co-interior angles add up to \\(180^\\circ\\) because opposite sides are parallel.',
        workingOut: '\\text{Given: Adjacent angles } \\beta \\text{ and } 130^\\circ'
      },
      {
        explanation: 'We write down the co-interior angle equation and solve for \\(\\beta\\).',
        workingOut: '\\beta + 130^\\circ = 180^\\circ'
      },
      {
        explanation: 'Subtracting \\(130^\\circ\\) from \\(180^\\circ\\) yields \\(\\beta = 50^\\circ\\). This matches option A.',
        workingOut: '\\beta = 50^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallelogram sides -->
  <polygon points="100,140 140,50 300,50 260,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="45" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="275" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (radius 22) -->
  <!-- A: beta -->
  <path d="M 121 133 A 22 22 0 0 0 108 122" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="123" y="125" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- B: 130deg -->
  <path d="M 130 72 A 22 22 0 0 0 159 60" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="148" y="75" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">130°</text>
  
  <!-- C: beta -->
  <path d="M 279 57 A 22 22 0 0 0 292 68" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="277" y="68" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- D: 130deg -->
  <path d="M 241 130 A 22 22 0 0 0 270 122" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="252" y="115" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">130°</text>
</svg>`
  },

  // 16. y8-5h-q3e: Quadrilateral algebra (2theta = 240 -> theta = 120)
  'y8-5h-q3e': {
    type: 'multiple_choice',
    question: 'Write down an equation involving the pronumeral and solve for \\(\\theta\\) in the quadrilateral below.',
    opts: [
      '\\(110^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(120^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(120^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(240^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    options: [
      '\\(110^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(120^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))',
      '\\(120^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(240^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We sum all four interior angles of the quadrilateral PQRS. The total sum is \\(360^\\circ\\).',
        workingOut: '70^\\circ + \\theta + \\theta + 50^\\circ = 360^\\circ'
      },
      {
        explanation: 'We simplify the equation by combining the terms.',
        workingOut: '2\\theta + 120^\\circ = 360^\\circ'
      },
      {
        explanation: 'Subtracting \\(120^\\circ\\) and dividing by 2: \\(2\\theta = 240^\\circ \\Rightarrow \\theta = 120^\\circ\\). This matches option B.',
        workingOut: '\\theta = 120^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Quadrilateral sides -->
  <polygon points="90,140 90,50 270,40 300,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="75" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="75" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="280" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="315" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles (radius 22) -->
  <!-- P: 70deg -->
  <path d="M 112 140 A 22 22 0 0 0 90 118" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="110" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- Q: theta -->
  <path d="M 90 72 A 22 22 0 0 0 112 50" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="108" y="68" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">θ</text>
  
  <!-- R: theta -->
  <path d="M 248 41 A 22 22 0 0 0 270 62" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="252" y="62" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">θ</text>
  
  <!-- S: 50deg -->
  <path d="M 278 140 A 22 22 0 0 0 293 119" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="272" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">50°</text>
</svg>`
  },

  // 17. y8-5h-q3f: Trapezium algebra (alpha = 80)
  // Corrected answer from typo 100 to correct value 80!
  'y8-5h-q3f': {
    type: 'multiple_choice',
    question: 'Write down an equation involving the pronumeral and solve for \\(\\alpha\\) in the trapezium below.',
    opts: [
      '\\(80^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(100^\\circ\\) (Opposite angles of a trapezium are equal)',
      '\\(100^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(120^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))'
    ],
    options: [
      '\\(80^\\circ\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(100^\\circ\\) (Opposite angles of a trapezium are equal)',
      '\\(100^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(120^\\circ\\) (Angles in a quadrilateral add to \\(360^\\circ\\))'
    ],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: 'We identify that PQRS is a trapezium with parallel top and bottom sides (PQ \\parallel SR). Thus, the angles along the legs are co-interior.',
        workingOut: '\\text{Given: } PQ \\parallel SR \\text{ with } \\angle Q = 100^\\circ \\text{ and } \\angle R = \\alpha'
      },
      {
        explanation: 'Since co-interior angles add up to \\(180^\\circ\\), we set up the equation to solve for \\(\\alpha\\).',
        workingOut: '100^\\circ + \\alpha = 180^\\circ'
      },
      {
        explanation: 'Subtracting \\(100^\\circ\\) from \\(180^\\circ\\) yields \\(\\alpha = 80^\\circ\\). This matches option A.',
        workingOut: '\\alpha = 80^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Trapezium sides -->
  <polygon points="80,140 140,50 260,50 320,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel line arrows on PQ and SR -->
  <path d="M 195,50 L 205,45 L 205,55 Z M 195,140 L 205,135 L 205,145 Z" fill="#475569"/>
  
  <!-- Labels -->
  <text x="65" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="270" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="335" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  
  <!-- Angles (radius 22) -->
  <!-- S: 65deg -->
  <path d="M 102 131 A 24 24 0 0 0 90 118" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="108" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- P: 115deg -->
  <path d="M 120 68 A 22 22 0 0 0 148 60" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="135" y="75" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">115°</text>
  
  <!-- Q: 100deg -->
  <path d="M 252 60 A 22 22 0 0 0 280 68" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="265" y="75" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">100°</text>
  
  <!-- R: alpha -->
  <path d="M 298 118 A 24 24 0 0 0 310 131" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="292" y="122" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  }
};

async function run() {
  const batch = db.batch();

  for (const [id, fields] of Object.entries(targetData)) {
    console.log(`Setting up y8-5h doc: ${id}`);
    const docRef = db.collection('questions').doc(id);
    batch.set(docRef, {
      ...fields,
      isNew: true,
      geometry: FieldValue.delete(),
      'graphData.geometry': FieldValue.delete() // Ensure legacy geometry is purged!
    }, { merge: true });
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
    ids: FieldValue.arrayUnion(...Object.keys(targetData)),
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  await batch.commit();
  console.log('Successfully updated all Year 8 Chapter 5H questions with beautiful SVGs & paired geometric reasons!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
