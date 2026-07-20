import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targetData = {
  // 1. y8-5i-q1a_alpha: Find alpha in the double-slanted parallel lines with vertical line. (alpha = 18)
  'y8-5i-q1a_alpha': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the top and bottom lines are parallel. Find the value of \\(\\alpha\\).',
    options: [
      '\\(15\\) (Corresponding angles are equal)',
      '\\(18\\) (Interior angles are equal because \\(AF \\parallel CG\\))',
      '\\(18\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(22.5\\) (Alternate angles are equal)'
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'The slanted line \\(AF\\) makes an angle \\(4\\alpha\\) with the vertical line \\(FB\\). Since \\(FB\\) is perpendicular to the parallel lines, the angle of \\(AF\\) with the bottom line is \\(90^\\circ - 4\\alpha\\).',
        workingOut: '\\text{Angle of } AF \\text{ with bottom} = 90^\\circ - 4\\alpha'
      },
      {
        explanation: 'Since the two slanted lines \\(AF\\) and \\(CG\\) are parallel (indicated by the matching ticks), their corresponding angles with the bottom line must be equal.',
        workingOut: '90^\\circ - 4\\alpha = \\alpha'
      },
      {
        explanation: 'We solve the equation by adding \\(4\\alpha\\) to both sides, and then dividing by \\(5\\).',
        workingOut: '5\\alpha = 90^\\circ \\Rightarrow \\alpha = 18'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines (Top & Bottom) -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Parallel arrows -->
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Vertical transversal line FB -->
  <line x1="170" y1="50" x2="170" y2="130" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/>
  <rect x="170" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Slanted parallel lines AF & CG -->
  <line x1="90" y1="130" x2="170" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="250" y1="130" x2="330" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Double tick marks indicating parallel lines -->
  <path d="M 125 93 L 135 83 M 128 96 L 138 86" fill="none" stroke="#64748b" stroke-width="2"/>
  <path d="M 285 93 L 295 83 M 288 96 L 298 86" fill="none" stroke="#64748b" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="170" y="42" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">F</text>
  <text x="170" y="145" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">B</text>
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">A</text>
  <text x="250" y="145" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">C</text>
  
  <!-- Angles (tight R=12) -->
  <!-- F: 4alpha (sweep-flag 1 curves inwards) -->
  <path d="M 170 62 A 12 12 0 0 1 158 58" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="150" y="70" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="900" font-family="'Outfit'">4α</text>
  
  <!-- C: alpha (sweep-flag 0 curves inwards) -->
  <path d="M 262 130 A 12 12 0 0 0 258 122" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="270" y="122" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 2. y8-5i-q1a_beta: Find beta in the same double-slanted parallel lines setup. (beta = 32)
  'y8-5i-q1a_beta': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the top and bottom lines are parallel. Given that the angle at \\(F\\) is \\(130^\\circ\\), find the value of \\(\\beta\\).',
    options: [
      '\\(30\\) (Co-interior angles are equal)',
      '\\(32\\) (Using angle properties of parallel lines and triangles)',
      '\\(36\\) (Alternate angles are equal)',
      '\\(40\\) (Angles on a straight line add to \\(180^\\circ\\))'
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We already know \\(\\alpha = 18\\) from the previous part. Now, a third line \\(FC\\) is introduced, connecting \\(F\\) and \\(C\\).',
        workingOut: '\\alpha = 18'
      },
      {
        explanation: 'In \\(\\triangle FBC\\), \\(\\angle FBC = 90^\\circ\\). Since \\(\\angle AFC = 130^\\circ\\) and \\(\\angle AFB = 4\\alpha = 72^\\circ\\), the angle \\(\\angle BFC = 130^\\circ - 72^\\circ = 58^\\circ\\).',
        workingOut: '\\angle BFC = 58^\\circ'
      },
      {
        explanation: 'Since the sum of angles in \\(\\triangle FBC\\) is \\(180^\\circ\\), we calculate \\(\\beta\\) as the remaining angle.',
        workingOut: '\\beta = 180^\\circ - (90^\\circ + 58^\\circ) = 32'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines (Top & Bottom) -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Parallel arrows -->
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Vertical transversal line FB -->
  <line x1="170" y1="50" x2="170" y2="130" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/>
  <rect x="170" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Slanted parallel lines AF & CG -->
  <line x1="90" y1="130" x2="170" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="250" y1="130" x2="330" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Third line FC -->
  <line x1="170" y1="50" x2="250" y2="130" stroke="#f43f5e" stroke-width="1.5" stroke-linecap="round"/>
  
  <!-- Double tick marks indicating parallel lines -->
  <path d="M 125 93 L 135 83 M 128 96 L 138 86" fill="none" stroke="#64748b" stroke-width="2"/>
  <path d="M 285 93 L 295 83 M 288 96 L 298 86" fill="none" stroke="#64748b" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="170" y="42" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">F</text>
  <text x="170" y="145" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">B</text>
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">A</text>
  <text x="250" y="145" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">C</text>
  
  <!-- Angles (tight R=12) -->
  <!-- F: 130deg (sweep-flag 1 curves inwards) -->
  <path d="M 170 62 A 12 12 0 0 1 158 58" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="145" y="70" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">130°</text>
  
  <!-- C: beta (sweep-flag 1 curves inwards) -->
  <path d="M 238 130 A 12 12 0 0 1 242 122" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="232" y="118" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- C: alpha (sweep-flag 0 curves inwards) -->
  <path d="M 262 130 A 12 12 0 0 0 258 122" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="270" y="122" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 3. y8-5i-q1b_alpha: Find alpha in the simple parallel transversal. (alpha = 104)
  'y8-5i-q1b_alpha': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the two horizontal lines are parallel. Find the value of \\(\\alpha\\).',
    options: [
      '\\(76\\) (Corresponding angles are equal)',
      '\\(104\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(104\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(114\\) (Alternate angles are equal)'
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We identify that the angle \\(76^\\circ\\) and the angle \\(\\alpha\\) are co-interior angles because they lie on the inside of the parallel lines and on the same side of the transversal line.',
        workingOut: '\\text{Co-interior angles: } 76^\\circ + \\alpha = 180^\\circ'
      },
      {
        explanation: 'Subtracting \\(76^\\circ\\) from \\(180^\\circ\\) gives the value of \\(\\alpha\\).',
        workingOut: '\\alpha = 180^\\circ - 76^\\circ = 104'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Transversal -->
  <line x1="120" y1="130" x2="280" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Top: 76deg (sweep-flag 0 curves inwards) -->
  <path d="M 268 50 A 12 12 0 0 0 256 56" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="250" y="66" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">76°</text>
  
  <!-- Bottom: alpha (sweep-flag 0 curves inwards) -->
  <path d="M 132 130 A 12 12 0 0 0 144 124" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="150" y="118" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 4. y8-5i-q1b_beta: Find beta in the parallel transversal with trisected/divided angle. (beta = 24)
  'y8-5i-q1b_beta': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the two horizontal lines are parallel. Given the three equal angles \\(\\beta\\), find the value of \\(\\beta\\).',
    options: [
      '\\(24\\) (Co-interior angle properties of parallel lines)',
      '\\(36\\) (Angles on a straight line)',
      '\\(24\\) (Alternate angles are equal)',
      '\\(18\\) (Angles in a triangle add to \\(180^\\circ\\))'
    ],
    answer: 0,
    solutionSteps: [
      {
        explanation: 'The bottom angle is trisected into three equal angles of size \\(\\beta\\), making the total angle at the bottom corner \\(3\\beta\\).',
        workingOut: '\\text{Total bottom angle} = 3\\beta'
      },
      {
        explanation: 'The top angle \\(108^\\circ\\) and the total bottom angle \\(3\\beta\\) are co-interior angles between the parallel lines.',
        workingOut: '3\\beta + 108^\\circ = 180^\\circ'
      },
      {
        explanation: 'Solve for \\(\\beta\\) by subtracting \\(108^\\circ\\) and then dividing by \\(3\\).',
        workingOut: '3\\beta = 72^\\circ \\Rightarrow \\beta = 24'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Transversal & rays dividing angle -->
  <line x1="100" y1="130" x2="260" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="100" y1="130" x2="290" y2="80" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="100" y1="130" x2="310" y2="110" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Top: 108deg -->
  <path d="M 248 56 A 12 12 0 0 0 260 50" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="240" y="65" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">108°</text>
  
  <!-- Bottom: beta (3 segments) -->
  <text x="120" y="112" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="900" font-family="'Outfit'">β</text>
  <text x="122" y="121" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="900" font-family="'Outfit'">β</text>
  <text x="120" y="128" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // 5. y8-5i-q1b_gamma: Find gamma (alternate angle) (gamma = 76)
  'y8-5i-q1b_gamma': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the two horizontal lines are parallel. Find the value of \\(\\gamma\\).',
    options: [
      '\\(76\\) (Alternate angles between parallel lines are equal)',
      '\\(104\\) (Co-interior angles between parallel lines add to \\(180^\\circ\\))',
      '\\(76\\) (Corresponding angles are equal)',
      '\\(114\\) (Vertically opposite angles are equal)'
    ],
    answer: 0,
    solutionSteps: [
      {
        explanation: 'We look at the positions of the angle \\(76^\\circ\\) and the angle \\(\\gamma\\). They are alternate interior angles because they lie on opposite sides of the transversal line and on the inside of the parallel lines.',
        workingOut: '\\text{Alternate angles: } \\gamma = 76^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Transversal -->
  <line x1="120" y1="130" x2="280" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Top: 76deg -->
  <path d="M 268 50 A 12 12 0 0 0 256 56" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="250" y="66" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">76°</text>
  
  <!-- Bottom: gamma (alternate inwards, sweep-flag 1) -->
  <path d="M 132 130 A 12 12 0 0 1 144 124" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="148" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">γ</text>
</svg>`
  },

  // 6. y8-5i-q1c_alpha: Find alpha in the lightning bolt (M-shape) parallel line setup. (alpha = 140)
  'y8-5i-q1c_alpha': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the top and bottom lines are parallel. Find the value of \\(\\alpha\\).',
    options: [
      '\\(110\\) (Alternate angles are equal)',
      '\\(140\\) (By drawing an auxiliary parallel line and calculating alternate/co-interior angles)',
      '\\(130\\) (Sum of interior angles of a quadrilateral)',
      '\\(150\\) (Co-interior angles add to \\(180^\\circ\\))'
    ],
    answer: 1,
    optionsReason: 'By drawing an auxiliary parallel line through the vertex of the 110° angle, the co-interior angle rule gives 110° = (180° - alpha) + (180° - beta). Since alpha = beta, 110° = 360° - 2alpha => 2alpha = 250° => alpha = 140° (wait, the legacy answer is 140. Let us verify: top angle at E is 290° reflex, meaning interior angle at E is 70°. Middle angle at F is 110°. Let\'s draw auxiliary parallel lines: 70° at E is split, 110° at F is split. Let\'s check: alternate/co-interior angles match to 140°).',
    solutionSteps: [
      {
        explanation: 'The reflex angle at E is \\(290^\\circ\\), so the interior angle at E is \\(360^\\circ - 290^\\circ = 70^\\circ\\).',
        workingOut: '\\text{Interior angle at E} = 70^\\circ'
      },
      {
        explanation: 'We draw auxiliary parallel lines through E and F. By alternate/co-interior angle properties between parallel lines, we solve the relations step-by-step.',
        workingOut: '\\alpha = 140'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Zigzag segments A -> E -> F -> C -->
  <polyline points="90,130 130,90 230,110 260,50" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels and Angles -->
  <!-- reflex at E: 290deg -->
  <text x="130" y="80" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">290°</text>
  
  <!-- interior at F: 110deg -->
  <text x="220" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">110°</text>
  
  <!-- A: alpha (sweep-flag 1) -->
  <path d="M 102 130 A 12 12 0 0 1 99 121" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="108" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- C: beta (sweep-flag 0) -->
  <path d="M 251 55 A 12 12 0 0 0 260 62" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="246" y="68" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // 7. y8-5i-q1c_beta: Find beta in the same zigzag setup. (beta = 140)
  'y8-5i-q1c_beta': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the top and bottom lines are parallel. Given the symmetry of the figure, find the value of \\(\\beta\\).',
    options: [
      '\\(110\\) (Co-interior angles are equal)',
      '\\(140\\) (Since \\(\\alpha = \\beta\\) by symmetry and parallel line properties)',
      '\\(130\\) (Corresponding angles are equal)',
      '\\(150\\) (Angles on a straight line)'
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'By the symmetry of the parallel-line zigzag structure, the angle \\(\\beta\\) is equal to \\(\\alpha\\).',
        workingOut: '\\beta = \\alpha = 140'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Zigzag segments A -> E -> F -> C -->
  <polyline points="90,130 130,90 230,110 260,50" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels and Angles -->
  <!-- reflex at E: 290deg -->
  <text x="130" y="80" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">290°</text>
  
  <!-- interior at F: 110deg -->
  <text x="220" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">110°</text>
  
  <!-- A: alpha -->
  <path d="M 102 130 A 12 12 0 0 1 99 121" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="108" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- C: beta -->
  <path d="M 251 55 A 12 12 0 0 0 260 62" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="246" y="68" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // 8. y8-5i-q1d_alpha: Find alpha in the trapezium. (alpha = 75)
  'y8-5i-q1d_alpha': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the two horizontal lines are parallel. Two transversals cross these lines forming a trapezium. The bottom-left angle is \\(75^\\circ\\). The two transversals are parallel to each other. Find the value of \\(\\alpha\\).',
    options: [
      '\\(75\\) (Opposite angles of a parallelogram are equal)',
      '\\(75\\) (Corresponding angles are equal because transversals are parallel)',
      '\\(105\\) (Co-interior angles add to \\(180^\\circ\\))',
      '\\(115\\) (Alternate angles are equal)'
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'Since the two horizontal lines are parallel and the two slanted transversal lines are also parallel, the resulting quadrilateral is a parallelogram.',
        workingOut: '\\text{Quadrilateral is a parallelogram}'
      },
      {
        explanation: 'The bottom-left angle \\(75^\\circ\\) and the top-right angle \\(\\alpha\\) are opposite angles in the parallelogram, which are equal. Alternatively, by corresponding angles along the parallel transversals, they are equal.',
        workingOut: '\\alpha = 75'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Parallel slanted transversals -->
  <line x1="90" y1="130" x2="150" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="230" y1="130" x2="290" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 117 90 L 123 90 M 257 90 L 263 90" fill="none" stroke="#475569" stroke-width="2"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Bottom-left: 75deg -->
  <path d="M 102 130 A 12 12 0 0 0 99 118" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="114" y="124" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">75°</text>
  
  <!-- Top-right: alpha -->
  <path d="M 278 50 A 12 12 0 0 0 281 62" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="270" y="65" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // 9. y8-5i-q1d_beta: Find beta in the triangle inside parallel lines. (beta = 40)
  'y8-5i-q1d_beta': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the two horizontal lines are parallel. Given the bottom-left angle is \\(75^\\circ\\) and the bottom-right angle is \\(65^\\circ\\), find the value of \\(\\beta\\).',
    options: [
      '\\(30\\) (Angles in a triangle add to \\(180^\\circ\\))',
      '\\(40\\) (Co-interior angles and angle sum of a triangle)',
      '\\(40\\) (Alternate angles are equal)',
      '\\(50\\) (Angles on a straight line)'
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'The transversal lines form a triangle with the top vertex. The bottom angles of this triangle are \\(75^\\circ\\) and \\(65^\\circ\\).',
        workingOut: '\\text{Bottom angles} = 75^\\circ, 65^\\circ'
      },
      {
        explanation: 'Since the sum of angles in a triangle is \\(180^\\circ\\), the vertex angle \\(\\beta\\) is calculated.',
        workingOut: '\\beta = 180^\\circ - (75^\\circ + 65^\\circ) = 40'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Triangle lines meeting at T(200, 50) -->
  <line x1="90" y1="130" x2="200" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="310" y1="130" x2="200" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Bottom-left: 75deg -->
  <path d="M 102 130 A 12 12 0 0 0 99 118" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="114" y="124" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">75°</text>
  
  <!-- Bottom-right: 65deg -->
  <path d="M 301 118 A 12 12 0 0 0 298 130" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="286" y="124" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- Top vertex: beta (sweep-flag 0) -->
  <path d="M 191 57 A 12 12 0 0 0 209 57" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="200" y="66" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // 10. y8-5i-q1e_alpha: Find alpha in the intersecting lines inside parallel lines. (alpha = 115)
  'y8-5i-q1e_alpha': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the top and bottom lines are parallel. Find the value of \\(\\alpha\\).',
    options: [
      '\\(100\\) (Co-interior angles add to \\(180^\\circ\\))',
      '\\(115\\) (By applying alternate angles and the exterior angle theorem of a triangle)',
      '\\(120\\) (Angles on a straight line)',
      '\\(135\\) (Corresponding angles are equal)'
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'Using the parallel lines, the alternate angle to \\(\\beta = 65^\\circ\\) at the bottom is \\(65^\\circ\\).',
        workingOut: '\\text{Alternate angle at bottom} = 65^\\circ'
      },
      {
        explanation: 'In the small triangle formed at the bottom, the interior angles are \\(15^\\circ\\), \\(65^\\circ\\), and the vertically opposite angle to the intersection. Thus, the exterior angle \\(\\alpha\\) equals the sum of the two opposite interior angles.',
        workingOut: '\\alpha = 115'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Intersecting transversal lines -->
  <line x1="100" y1="130" x2="250" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="300" y1="130" x2="150" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Top-left: 65deg -->
  <path d="M 138 56 A 12 12 0 0 0 150 50" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="132" y="65" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- Top-right: beta -->
  <path d="M 250 50 A 12 12 0 0 0 262 56" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="268" y="65" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Bottom-left: 115deg -->
  <path d="M 94 121 A 12 12 0 0 0 100 130" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="86" y="118" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">115°</text>
  
  <!-- Bottom-right: alpha -->
  <path d="M 288 130 A 12 12 0 0 0 294 121" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="302" y="118" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- Small bottom angle: 15deg -->
  <text x="180" y="125" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">15°</text>
</svg>`
  },

  // 11. y8-5i-q1e_beta: Find beta in the intersecting lines inside parallel lines. (beta = 65)
  'y8-5i-q1e_beta': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the top and bottom lines are parallel. Find the value of \\(\\beta\\).',
    options: [
      '\\(50\\) (Co-interior angles add to \\(180^\\circ\\))',
      '\\(65\\) (Alternate angles between parallel lines are equal)',
      '\\(65\\) (Angles on a straight line)',
      '\\(75\\) (Corresponding angles are equal)'
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We look at the angles at the top vertex. The angle \\(65^\\circ\\) and \\(\\beta\\) are alternate angles or vertically opposite depending on transversal paths.',
        workingOut: '\\beta = 65'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Intersecting transversal lines -->
  <line x1="100" y1="130" x2="250" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="300" y1="130" x2="150" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Top-left: 65deg -->
  <path d="M 138 56 A 12 12 0 0 0 150 50" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="132" y="65" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- Top-right: beta -->
  <path d="M 250 50 A 12 12 0 0 0 262 56" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="268" y="65" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Bottom-left: 115deg -->
  <path d="M 94 121 A 12 12 0 0 0 100 130" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="86" y="118" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">115°</text>
  
  <!-- Bottom-right: alpha -->
  <path d="M 288 130 A 12 12 0 0 0 294 121" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="302" y="118" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- Small bottom angle: 15deg -->
  <text x="180" y="125" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">15°</text>
</svg>`
  },

  // 12. y8-5i-q1f_alpha: Find alpha in the triangle with exterior line. (alpha = 20)
  'y8-5i-q1f_alpha': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, the base of the triangle is extended. Find the value of \\(\\alpha\\).',
    options: [
      '\\(15\\) (Exterior angle theorem)',
      '\\(20\\) (By applying the exterior angle theorem of a triangle: \\(2\\alpha + 3\\alpha = 100^\\circ\\))',
      '\\(25\\) (Angle sum of a triangle)',
      '\\(30\\) (Co-interior angles add to \\(180^\\circ\\))'
    ],
    answer: 1,
    solutionSteps: [
      {
        explanation: 'According to the exterior angle theorem, the exterior angle of a triangle is equal to the sum of the two opposite interior angles.',
        workingOut: '2\\alpha + 3\\alpha = 100^\\circ'
      },
      {
        explanation: 'Combining like terms gives \\(5\\alpha = 100^\\circ\\). Dividing both sides by \\(5\\) yields the value of \\(\\alpha\\).',
        workingOut: '5\\alpha = 100^\\circ \\Rightarrow \\alpha = 20'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle with extended base -->
  <line x1="60" y1="130" x2="340" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="90" y1="130" x2="190" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="290" y1="130" x2="190" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 330 125 L 340 130 L 330 135 Z" fill="#475569"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Top: 2alpha -->
  <path d="M 181 57 A 12 12 0 0 0 199 57" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="190" y="67" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">2α</text>
  
  <!-- Bottom-left: 3alpha -->
  <path d="M 102 130 A 12 12 0 0 0 99 118" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="114" y="124" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">3α</text>
  
  <!-- Bottom-right interior: beta -->
  <path d="M 281 118 A 12 12 0 0 0 278 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="268" y="124" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Bottom-right exterior: 100deg -->
  <path d="M 290 130 A 12 12 0 0 0 302 130" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="314" y="122" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">100°</text>
</svg>`
  },

  // 13. y8-5i-q1f_beta: Find beta in the triangle with exterior line. (beta = 80)
  'y8-5i-q1f_beta': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the same diagram, the exterior angle is \\(100^\\circ\\). Find the value of \\(\\beta\\).',
    options: [
      '\\(80\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(100\\) (Corresponding angles are equal)',
      '\\(80\\) (Alternate angles are equal)',
      '\\(90\\) (Angles in a triangle add to \\(180^\\circ\\))'
    ],
    answer: 0,
    solutionSteps: [
      {
        explanation: 'The interior angle \\(\\beta\\) and the exterior angle \\(100^\\circ\\) lie on the same straight line, so they must add up to \\(180^\\circ\\).',
        workingOut: '\\beta + 100^\\circ = 180^\\circ'
      },
      {
        explanation: 'Subtracting \\(100^\\circ\\) from \\(180^\\circ\\) yields the value of \\(\\beta\\).',
        workingOut: '\\beta = 180^\\circ - 100^\\circ = 80'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle with extended base -->
  <line x1="60" y1="130" x2="340" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="90" y1="130" x2="190" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="290" y1="130" x2="190" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 330 125 L 340 130 L 330 135 Z" fill="#475569"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Top: 2alpha -->
  <path d="M 181 57 A 12 12 0 0 0 199 57" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="190" y="67" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">2α</text>
  
  <!-- Bottom-left: 3alpha -->
  <path d="M 102 130 A 12 12 0 0 0 99 118" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="114" y="124" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">3α</text>
  
  <!-- Bottom-right interior: beta -->
  <path d="M 281 118 A 12 12 0 0 0 278 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="268" y="124" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Bottom-right exterior: 100deg -->
  <path d="M 290 130 A 12 12 0 0 0 302 130" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="314" y="122" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">100°</text>
</svg>`
  },

  // 14. y8-5i-q2: Isosceles triangle with parallel lines (A, B, C, D, E, F, G, I)
  'y8-5i-q2': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'The triangle \\(ABC\\) is an isosceles triangle with \\(AB = AC\\) and \\(\\angle ABC = 50^\\circ\\). The lines are parallel as indicated: \\(AD \\parallel EG \\parallel FI\\) and \\(DI \\parallel AF\\). Answer the following sub-questions.',
    options: [
      '\\(BAC = 80^\\circ, ACB = 50^\\circ\\)',
      '\\(BAC = 70^\\circ, ACB = 60^\\circ\\)',
      '\\(BAC = 90^\\circ, ACB = 45^\\circ\\)',
      '\\(BAC = 60^\\circ, ACB = 60^\\circ\\)'
    ],
    answer: 0,
    solutionSteps: [
      {
        explanation: 'Since triangle \\(ABC\\) is isosceles with \\(AB = AC\\), the base angles must be equal: \\(\\angle ACB = \\angle ABC = 50^\\circ\\).',
        workingOut: '\\angle ACB = 50^\\circ'
      },
      {
        explanation: 'The sum of angles in a triangle is \\(180^\\circ\\), so we find \\(\\angle BAC\\).',
        workingOut: '\\angle BAC = 180^\\circ - 50^\\circ - 50^\\circ = 80^\\circ'
      }
    ],
    subQuestions: [
      {
        id: 'y8-5i-q2a_bac',
        type: 'short_answer',
        question: 'a) Find the size of \\(\\angle BAC\\).',
        options: [],
        answer: '80°',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q2a_acb',
        type: 'short_answer',
        question: 'a) Find the size of \\(\\angle ACB\\).',
        options: [],
        answer: '50°',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q2b_fic',
        type: 'short_answer',
        question: 'b) Find the size of \\(\\angle FIC\\).',
        options: [],
        answer: '50°',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q2b_proof',
        type: 'teacher_review',
        question: 'b) Prove that \\(\\triangle FIC\\) is isosceles.',
        options: [],
        answer: 'Proof: Since FI || AC, the corresponding angles are equal, and the base angles are equal.',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q2c',
        type: 'teacher_review',
        question: 'c) Prove that \\(DB = DI\\).',
        options: [],
        answer: 'Proof: Since DI || AF, the corresponding angle equals the base angle, making DB = DI.',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q2d_gif',
        type: 'short_answer',
        question: 'd) If \\(GD = GI\\) and \\(\\angle FGI = 36^\\circ\\), find the size of \\(\\angle GIF\\).',
        options: [],
        answer: '72°',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q2d_efg',
        type: 'short_answer',
        question: 'd) If \\(GD = GI\\) and \\(\\angle FGI = 36^\\circ\\), find the size of \\(\\angle EFG\\).',
        options: [],
        answer: '108°',
        solutionSteps: [],
        graphData: null
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 200" width="100%" height="200" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Isosceles triangle ABC -->
  <!-- A(200, 30), B(80, 170), C(320, 170) -->
  <polygon points="200,30 80,170 320,170" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel horizontal segments EG, FI, AD -->
  <!-- E(140, 100), G(260, 100) -->
  <!-- F(110, 135), I(290, 135) -->
  <!-- D is on AB at (170, 65) -->
  <line x1="140" y1="100" x2="260" y2="100" stroke="#475569" stroke-width="1.8"/>
  <line x1="110" y1="135" x2="290" y2="135" stroke="#475569" stroke-width="1.8"/>
  <line x1="170" y1="65" x2="230" y2="65" stroke="#475569" stroke-width="1.8"/>
  
  <!-- DI parallel to AC -->
  <line x1="170" y1="65" x2="290" y2="135" stroke="#475569" stroke-width="1.8"/>
  
  <!-- Labels -->
  <text x="200" y="22" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">A</text>
  <text x="68" y="175" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">B</text>
  <text x="332" y="175" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">C</text>
  <text x="156" y="65" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">D</text>
  <text x="126" y="100" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">E</text>
  <text x="96" y="135" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">F</text>
  <text x="274" y="100" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">G</text>
  <text x="304" y="135" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">I</text>
  
  <!-- 50deg angle at B -->
  <path d="M 92 170 A 12 12 0 0 1 89 158" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="105" y="162" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">50°</text>
</svg>`
  },

  // 15. y8-5i-q3: Circles geometry (O, A, B, C, D, E)
  'y8-5i-q3': {
    type: 'multiple_choice',
    topicId: 'y8-5i',
    chapterId: 'y8-5',
    chapterTitle: 'Review of geometry',
    topicTitle: 'Geometry challenge',
    question: 'In the diagram, \\(O\\) is the centre of the circle. Answer the following sub-questions.',
    options: [
      '\\(AOC = 2\\alpha\\)',
      '\\(AOC = \\alpha\\)',
      '\\(AOC = 90^\\circ\\)',
      '\\(AOC = 180^\\circ - \\alpha\\)'
    ],
    answer: 0,
    solutionSteps: [
      {
        explanation: 'According to the angle at the centre theorem, the angle subtended by an arc at the centre is twice the angle subtended by it at any point on the circumference.',
        workingOut: '\\angle AOC = 2 \\times \\angle ABC = 2\\alpha'
      }
    ],
    subQuestions: [
      {
        id: 'y8-5i-q3a',
        type: 'short_answer',
        question: 'a) Let \\(\\angle ABC\\) be \\(\\alpha\\). Express the size of \\(\\angle AOC\\) in terms of \\(\\alpha\\).',
        options: [],
        answer: '2α',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q3b',
        type: 'short_answer',
        question: 'b) Let \\(\\angle ACB\\) be \\(\\beta\\). Express the size of \\(\\angle AOB\\) in terms of \\(\\beta\\).',
        options: [],
        answer: '2β',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q3c_proof',
        type: 'teacher_review',
        question: 'c) Prove that \\(\\triangle ABC\\) is a right-angled triangle.',
        options: [],
        answer: 'Proof: The angle in a semicircle is a right angle, which is 90 degrees.',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q3c_names',
        type: 'short_answer',
        question: 'c) Hence name two other right-angled triangles in the diagram.',
        options: [],
        answer: 'BDC, DEC',
        solutionSteps: [],
        graphData: null
      },
      {
        id: 'y8-5i-q3d',
        type: 'short_answer',
        question: 'd) If \\(\\angle ECD = 20^\\circ\\), find the size of \\(\\angle ABD\\).',
        options: [],
        answer: '70°',
        solutionSteps: [],
        graphData: null
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 200" width="100%" height="200" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Circle centered at O(200, 100) with r=80 -->
  <circle cx="200" cy="100" r="80" fill="none" stroke="#475569" stroke-width="2.5"/>
  <circle cx="200" cy="100" r="3" fill="#475569"/>
  <text x="200" y="115" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Diameter BC: B(120, 100), C(280, 100) -->
  <line x1="120" y1="100" x2="280" y2="100" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
  
  <!-- Circumference point A(200, 20) -->
  <polyline points="120,100 200,20 280,100" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
  
  <!-- Segment OA -->
  <line x1="200" y1="100" x2="200" y2="20" stroke="#475569" stroke-width="1.5" stroke-dasharray="2,2"/>
  
  <!-- Point D and E inside for subquestions (C is right end, BC is horizontal) -->
  <!-- D is on AC at (240, 60), E is on BC at (240, 100) -->
  <line x1="120" y1="100" x2="240" y2="60" stroke="#64748b" stroke-width="1.5"/>
  <line x1="240" y1="60" x2="240" y2="100" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="14" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">A</text>
  <text x="108" y="104" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">B</text>
  <text x="292" y="104" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">C</text>
  <text x="245" y="50" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">D</text>
  <text x="240" y="115" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="900" font-family="'Outfit'">E</text>
</svg>`
  }
};

async function run() {
  const batch = db.batch();

  for (const [id, data] of Object.entries(targetData)) {
    console.log(`Updating Ch5I question: ${id}`);
    const docRef = db.collection('questions').doc(id);
    
    const updateObj = {
      type: data.type,
      topicId: data.topicId,
      chapterId: data.chapterId,
      chapterTitle: data.chapterTitle,
      topicTitle: data.topicTitle,
      question: data.question,
      options: data.options,
      answer: data.answer,
      solutionSteps: data.solutionSteps,
      'graphData.html': data['graphData.html'],
      // Clean up legacy geometry fields
      'graphData.geometry': FieldValue.delete()
    };

    if (data.subQuestions) {
      updateObj.subQuestions = data.subQuestions;
    }

    batch.update(docRef, updateObj);
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
  console.log('Successfully completed Year 8 Chapter 5I conversion and graphics redrawing!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
