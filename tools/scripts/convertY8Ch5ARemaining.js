import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle options and keep track of correct index (gently distributed)
const targetData = {
  // y8-5a-q2c: Vertically opposite crossing lines
  'y8-5a-q2c': {
    type: 'multiple_choice',
    question: 'Name the angle that is vertically opposite to \\(\\angle PQR\\) in the diagram below.',
    opts: ['\\(\\angle AQR\\)', '\\(\\angle PQC\\)', '\\(\\angle AQC\\)', '\\(\\angle BQC\\)'],
    options: ['\\(\\angle AQR\\)', '\\(\\angle PQC\\)', '\\(\\angle AQC\\)', '\\(\\angle BQC\\)'],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: 'We begin by identifying the two straight lines that intersect to form the configuration. These intersecting lines are PC and AR, which cross at the vertex Q.',
        workingOut: '\\text{Lines: } PC \\text{ and } AR \\text{ intersecting at } Q'
      },
      {
        explanation: 'Next, we recall that vertically opposite angles are the angles opposite each other at the intersection of two straight lines. They are equal in size.',
        workingOut: '\\text{Opposite rays: QP } \\leftrightarrow \\text{ QC, and QR } \\leftrightarrow \\text{ QA}'
      },
      {
        explanation: 'Finally, we look directly across the vertex Q from \\(\\angle PQR\\). The angle on the opposite side is formed by rays QA and QC, which is named \\(\\angle AQC\\). This matches option C.',
        workingOut: '\\text{Vertically opposite to } \\angle PQR = \\angle AQC'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Crossing lines PC and AR -->
  <line x1="80" y1="40" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="80" y1="140" x2="320" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="80" cy="40" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="320" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="80" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="320" cy="40" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="70" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="330" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="70" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="330" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <!-- R is on the right-down diagonal? Wait, the line is AR, so A(-2,1) to R(2,-1). Ray QR is opposite to QA. So R is (320, 140) and C is (80, 140).
       Wait, let's fix label R to (330, 145) and C to (70, 145) to be perfectly consistent! -->
  <text x="330" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="70" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
</svg>`
  },

  // y8-5a-q3a: Find alpha on a straight line (180 - 62 = 118)
  'y8-5a-q3a': {
    type: 'multiple_choice',
    question: 'Find the size of the angle denoted by \\(\\alpha\\) in the diagram below, giving reasons.',
    opts: ['\\(62^\\circ\\)', '\\(108^\\circ\\)', '\\(118^\\circ\\)', '\\(128^\\circ\\)'],
    options: ['\\(62^\\circ\\)', '\\(108^\\circ\\)', '\\(118^\\circ\\)', '\\(128^\\circ\\)'],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: 'We start by identifying the straight line in the diagram, which is the segment AC. The ray BE meets this line at point B, forming two adjacent angles: \\(62^\\circ\\) and \\(\\alpha\\).',
        workingOut: '\\text{Given: Straight line AC with adjacent angles } 62^\\circ \\text{ and } \\alpha'
      },
      {
        explanation: 'Next, we apply the geometric rule that angles on a straight line are supplementary and add up to \\(180^\\circ\\). This allows us to set up a linear equation to find the value of \\(\\alpha\\).',
        workingOut: '\\alpha = 180^\\circ - 62^\\circ'
      },
      {
        explanation: 'Finally, we compute the subtraction. \\(180 - 62 = 118\\), so the measure of \\(\\alpha\\) is \\(118^\\circ\\). This matches option C.',
        workingOut: '\\alpha = 118^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray BE at 62deg -->
  <line x1="200" y1="130" x2="252" y2="33" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <path d="M 230 130 A 30 30 0 0 0 214.1 103.5" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 188.3 108 A 25 25 0 0 0 175 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="50" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="350" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="252" cy="33" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="50" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="350" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="260" y="25" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">E</text>
  
  <!-- Angles -->
  <text x="245" y="120" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">62°</text>
  <text x="162" y="112" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // y8-5a-q3b-beta: Perpendicular lines (90)
  'y8-5a-q3b-beta': {
    type: 'multiple_choice',
    question: 'Find the size of the angle denoted by \\(\\beta\\) in the diagram below, giving reasons.',
    opts: ['\\(45^\\circ\\)', '\\(90^\\circ\\)', '\\(135^\\circ\\)', '\\(180^\\circ\\)'],
    options: ['\\(45^\\circ\\)', '\\(90^\\circ\\)', '\\(135^\\circ\\)', '\\(180^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We start by examining the lines J K and M N, which intersect at point L. The diagram displays a small square symbol at their intersection.',
        workingOut: '\\text{Intersection vertex is L with a right angle symbol}'
      },
      {
        explanation: 'Next, we recall that the square symbol denotes a right angle, indicating that the intersecting lines are perpendicular to each other.',
        workingOut: '\\text{Perpendicular lines form angles of } 90^\\circ'
      },
      {
        explanation: 'Finally, since the lines are perpendicular, all four angles formed at the intersection L are right angles. Therefore, the angle \\(\\beta\\) is exactly \\(90^\\circ\\). This matches option B.',
        workingOut: '\\beta = 90^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Perpendicular crossing lines -->
  <line x1="80" y1="90" x2="320" y2="90" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="10" x2="200" y2="170" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle indicator -->
  <rect x="200" y="75" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Angle Arc for beta (bottom-left) -->
  <path d="M 180 90 A 20 20 0 0 0 200 110" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="215" y="85" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">L</text>
  <text x="80" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">J</text>
  <text x="320" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">K</text>
  <text x="200" y="178" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">M</text>
  <text x="200" y="25" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">N</text>
  
  <!-- Angle Label -->
  <text x="175" y="115" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // y8-5a-q3b-theta: Perpendicular lines (90)
  'y8-5a-q3b-theta': {
    type: 'multiple_choice',
    question: 'Find the size of the angle denoted by \\(\\theta\\) in the diagram below, giving reasons.',
    opts: ['\\(45^\\circ\\)', '\\(90^\\circ\\)', '\\(135^\\circ\\)', '\\(180^\\circ\\)'],
    options: ['\\(45^\\circ\\)', '\\(90^\\circ\\)', '\\(135^\\circ\\)', '\\(180^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We start by examining the lines J K and M N, which intersect at point L. The diagram displays a small square symbol at their intersection.',
        workingOut: '\\text{Intersection vertex is L with a right angle symbol}'
      },
      {
        explanation: 'Next, we recall that the square symbol denotes a right angle, indicating that the intersecting lines are perpendicular to each other.',
        workingOut: '\\text{Perpendicular lines form angles of } 90^\\circ'
      },
      {
        explanation: 'Finally, since the lines are perpendicular, all four angles formed at the intersection L are right angles. Therefore, the angle \\(\\theta\\) is exactly \\(90^\\circ\\). This matches option B.',
        workingOut: '\\theta = 90^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Perpendicular crossing lines -->
  <line x1="80" y1="90" x2="320" y2="90" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="10" x2="200" y2="170" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle indicator -->
  <rect x="200" y="75" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Angle Arc for theta (top-left) -->
  <path d="M 180 90 A 20 20 0 0 1 200 70" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="215" y="98" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">L</text>
  <text x="80" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">J</text>
  <text x="320" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">K</text>
  <text x="200" y="178" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">M</text>
  <text x="200" y="25" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">N</text>
  
  <!-- Angle Label -->
  <text x="175" y="70" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">θ</text>
</svg>`
  },

  // y8-5a-q3c-alpha: Vertically opposite (52)
  'y8-5a-q3c-alpha': {
    type: 'multiple_choice',
    question: 'Find the size of the angle denoted by \\(\\alpha\\) in the diagram below, giving reasons.',
    opts: ['\\(48^\\circ\\)', '\\(52^\\circ\\)', '\\(128^\\circ\\)', '\\(138^\\circ\\)'],
    options: ['\\(48^\\circ\\)', '\\(52^\\circ\\)', '\\(128^\\circ\\)', '\\(138^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We begin by observing the intersection of the two straight lines in the diagram, crossing at the common vertex V.',
        workingOut: '\\text{Two intersecting lines crossing at vertex V}'
      },
      {
        explanation: 'Next, we locate the known angle of \\(52^\\circ\\) and the unknown angle \\(\\alpha\\). We notice they lie directly across from each other at the intersection point V.',
        workingOut: '\\text{Angles } \\alpha \\text{ and } 52^\\circ \\text{ are vertically opposite}'
      },
      {
        explanation: 'Finally, we apply the geometric theorem that vertically opposite angles are equal. Therefore, \\(\\alpha\\) is exactly equal to \\(52^\\circ\\). This matches option B.',
        workingOut: '\\alpha = 52^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines -->
  <line x1="80" y1="140" x2="320" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="80" y1="40" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 52deg (right) -->
  <path d="M 235 90 A 40 40 0 0 0 228.4 75" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- alpha (left) -->
  <path d="M 165 90 A 40 40 0 0 0 171.6 105" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  
  <!-- Angles -->
  <text x="245" y="85" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">52°</text>
  <text x="155" y="102" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // y8-5a-q3c-beta: Angles on a straight line (180 - 52 = 128)
  'y8-5a-q3c-beta': {
    type: 'multiple_choice',
    question: 'Find the size of the angle denoted by \\(\\beta\\) in the diagram below, giving reasons.',
    opts: ['\\(52^\\circ\\)', '\\(62^\\circ\\)', '\\(118^\\circ\\)', '\\(128^\\circ\\)'],
    options: ['\\(52^\\circ\\)', '\\(62^\\circ\\)', '\\(118^\\circ\\)', '\\(128^\\circ\\)'],
    a: 3,
    answer: 3,
    solutionSteps: [
      {
        explanation: 'We start by identifying the straight line that contains both the known angle of \\(52^\\circ\\) and the unknown angle \\(\\beta\\). They lie adjacent to each other along this line.',
        workingOut: '\\text{Given: Adjacent angles } 52^\\circ \\text{ and } \\beta \\text{ on a straight line}'
      },
      {
        explanation: 'Next, we apply the geometric rule that angles on a straight line are supplementary and sum to \\(180^\\circ\\). We set up the subtraction equation.',
        workingOut: '\\beta = 180^\\circ - 52^\\circ'
      },
      {
        explanation: 'Finally, we compute the subtraction. \\(180 - 52 = 128\\), so the measure of \\(\\beta\\) is \\(128^\\circ\\). This matches option D.',
        workingOut: '\\beta = 128^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines -->
  <line x1="80" y1="140" x2="320" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="80" y1="40" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 52deg (right) -->
  <path d="M 235 90 A 40 40 0 0 0 228.4 75" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- beta (top) -->
  <path d="M 228.4 75 A 40 40 0 0 0 171.6 75" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  
  <!-- Angles -->
  <text x="245" y="85" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">52°</text>
  <text x="200" y="60" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // y8-5a-q4a: Find theta (42)
  'y8-5a-q4a': {
    type: 'multiple_choice',
    question: 'In the diagram below, angles marked with the same Greek letter are equal in size. Find the value of \\(\\theta\\), giving reasons.',
    opts: ['\\(38^\\circ\\)', '\\(42^\\circ\\)', '\\(84^\\circ\\)', '\\(138^\\circ\\)'],
    options: ['\\(38^\\circ\\)', '\\(42^\\circ\\)', '\\(84^\\circ\\)', '\\(138^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We begin by identifying the geometric relationship between the given angle of \\(42^\\circ\\) and the target variable \\(\\theta\\) at the intersection vertex V.',
        workingOut: '\\text{Angles: } 42^\\circ \\text{ and } \\theta'
      },
      {
        explanation: 'Next, we notice that these two angles lie directly opposite each other across the intersecting straight lines at vertex V.',
        workingOut: '\\text{Relationship: Vertically opposite angles}'
      },
      {
        explanation: 'Finally, we apply the theorem that vertically opposite angles are equal in size. Therefore, \\(\\theta\\) is exactly equal to \\(42^\\circ\\). This matches option B.',
        workingOut: '\\theta = 42^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines -->
  <line x1="80" y1="140" x2="320" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="80" y1="40" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <path d="M 235 90 A 40 40 0 0 0 228.4 75" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 165 90 A 40 40 0 0 0 171.6 105" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  
  <!-- Angles -->
  <text x="245" y="85" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">42°</text>
  <text x="155" y="102" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">θ</text>
</svg>`
  },

  // y8-5a-q4b: Find beta (30)
  'y8-5a-q4b': {
    type: 'multiple_choice',
    question: 'In the diagram below, angles marked with the same Greek letter are equal in size. Find the value of \\(\\beta\\), giving reasons.',
    opts: ['\\(20^\\circ\\)', '\\(30^\\circ\\)', '\\(60^\\circ\\)', '\\(120^\\circ\\)'],
    options: ['\\(20^\\circ\\)', '\\(30^\\circ\\)', '\\(60^\\circ\\)', '\\(120^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We start by identifying the straight line on which three adjacent angles lie. The angles are \\(120^\\circ\\), \\(\\beta\\), and another \\(\\beta\\).',
        workingOut: '\\text{Given: Straight line with angles } 120^\\circ, \\; \\beta, \\; \\beta'
      },
      {
        explanation: 'Next, we apply the rule that angles on a straight line add up to \\(180^\\circ\\). This allows us to set up a linear equation.',
        workingOut: '120^\\circ + 2\\beta = 180^\\circ'
      },
      {
        explanation: 'Finally, we solve for \\(\\beta\\) by subtracting \\(120^\\circ\\) and dividing by 2. \\(2\\beta = 60^\\circ\\), so \\(\\beta = 30^\\circ\\). This matches option B.',
        workingOut: '2\\beta = 60^\\circ \\;\\Rightarrow\\; \\beta = 30^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 1 (120deg) -->
  <line x1="200" y1="130" x2="150" y2="43.4" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 2 (150deg) -->
  <line x1="200" y1="130" x2="113.4" y2="80" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 120deg (right) -->
  <path d="M 235 130 A 35 35 0 0 0 182.5 99.7" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- beta 1 (middle) -->
  <path d="M 182.5 99.7 A 35 35 0 0 0 169.8 112.5" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <!-- beta 2 (left) -->
  <path d="M 169.8 112.5 A 35 35 0 0 0 165 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="220" y="98" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">120°</text>
  <text x="170" y="86" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  <text x="145" y="112" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // y8-5a-q4c: Find alpha (45)
  'y8-5a-q4c': {
    type: 'multiple_choice',
    question: 'In the diagram below, angles marked with the same Greek letter are equal in size. Find the value of \\(\\alpha\\), giving reasons.',
    opts: ['\\(30^\\circ\\)', '\\(45^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)'],
    options: ['\\(30^\\circ\\)', '\\(45^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We begin by observing the straight line divided into 4 adjacent angles, all labeled with the Greek letter \\(\\alpha\\).',
        workingOut: '\\text{Given: Straight line split into 4 equal angles of size } \\alpha'
      },
      {
        explanation: 'Next, we recall that the sum of angles on a straight line is \\(180^\\circ\\). This gives us the equation to solve.',
        workingOut: '4\\alpha = 180^\\circ'
      },
      {
        explanation: 'Finally, we divide both sides by 4 to find \\(\\alpha\\). \\(\\alpha = 180^\\circ / 4 = 45^\\circ\\). This matches option B.',
        workingOut: '\\alpha = 45^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 45deg ray -->
  <line x1="200" y1="130" x2="271" y2="59" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 90deg ray -->
  <line x1="200" y1="130" x2="200" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 135deg ray -->
  <line x1="200" y1="130" x2="129" y2="59" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <path d="M 230 130 A 30 30 0 0 0 221.2 108.8" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 221.2 108.8 A 30 30 0 0 0 200 100" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 200 100 A 30 30 0 0 0 178.8 108.8" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 178.8 108.8 A 30 30 0 0 0 170 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="240" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="212" y="90" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="188" y="90" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="160" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // y8-5a-q4d: Find alpha (60)
  'y8-5a-q4d': {
    type: 'multiple_choice',
    question: 'In the diagram below, angles marked with the same Greek letter are equal in size. Find the value of \\(\\alpha\\), giving reasons.',
    opts: ['\\(45^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)', '\\(120^\\circ\\)'],
    options: ['\\(45^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)', '\\(120^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We begin by observing the angles arrayed in a full circle around the central vertex V. There are 6 adjacent angles, all equal and labeled \\(\\alpha\\).',
        workingOut: '\\text{Given: 6 equal angles of size } \\alpha \\text{ around vertex V}'
      },
      {
        explanation: 'Next, we apply the geometric rule that angles around a single point sum up to exactly \\(360^\\circ\\). This allows us to set up a multiplication equation.',
        workingOut: '6\\alpha = 360^\\circ'
      },
      {
        explanation: 'Finally, we solve for \\(\\alpha\\) by dividing \\(360^\\circ\\) by 6. \\(\\alpha = 360^\\circ / 6 = 60^\\circ\\). This matches option B.',
        workingOut: '\\alpha = 60^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- 6 crossing rays from V(200, 90) -->
  <line x1="100" y1="90" x2="300" y2="90" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
  <line x1="150" y1="3.4" x2="250" y2="176.6" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
  <line x1="150" y1="176.6" x2="250" y2="3.4" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="215" y="105" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="240" y="80" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="215" y="45" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="165" y="60" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="160" y="110" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="185" y="145" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="235" y="130" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // y8-5a-q4e: Find beta (130)
  'y8-5a-q4e': {
    type: 'multiple_choice',
    question: 'In the diagram below, angles marked with the same Greek letter are equal in size. Find the value of \\(\\beta\\), giving reasons.',
    opts: ['\\(100^\\circ\\)', '\\(110^\\circ\\)', '\\(120^\\circ\\)', '\\(130^\\circ\\)'],
    options: ['\\(100^\\circ\\)', '\\(110^\\circ\\)', '\\(120^\\circ\\)', '\\(130^\\circ\\)'],
    a: 3,
    answer: 3,
    solutionSteps: [
      {
        explanation: 'We begin by identifying the three angles that lie around the central point O. One angle is known to be \\(100^\\circ\\), and the other two adjacent angles are equal, labeled \\(\\beta\\).',
        workingOut: '\\text{Given: Angles around O are } 100^\\circ, \\; \\beta, \\; \\beta'
      },
      {
        explanation: 'Next, we apply the geometric property that angles around a point sum to \\(360^\\circ\\). This allows us to construct a linear equation.',
        workingOut: '100^\\circ + 2\\beta = 360^\\circ'
      },
      {
        explanation: 'Finally, we solve for \\(\\beta\\) by subtracting \\(100^\\circ\\) and dividing by 2. \\(2\\beta = 260^\\circ\\), so \\(\\beta = 130^\\circ\\). This matches option D.',
        workingOut: '2\\beta = 260^\\circ \\;\\Rightarrow\\; \\beta = 130^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Rays from O(200, 90) -->
  <line x1="200" y1="90" x2="300" y2="90" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 2 (100deg) -->
  <line x1="200" y1="90" x2="182.6" y2="188.5" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 3 (230deg) -->
  <line x1="200" y1="90" x2="135.7" y2="13.4" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 100deg -->
  <path d="M 230 90 A 30 30 0 0 1 195 120" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- beta 1 -->
  <path d="M 195 120 A 30 30 0 0 1 177 71.6" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <!-- beta 2 -->
  <path d="M 177 71.6 A 30 30 0 0 1 230 90" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="212" y="105" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="225" y="130" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">100°</text>
  <text x="160" y="100" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  <text x="200" y="65" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // y8-5a-q4f-gamma: Vertically opposite (4gamma = 120 -> gamma = 30)
  'y8-5a-q4f-gamma': {
    type: 'multiple_choice',
    question: 'In the diagram below, find the value of \\(\\gamma\\), giving reasons.',
    opts: ['\\(15^\\circ\\)', '\\(30^\\circ\\)', '\\(45^\\circ\\)', '\\(60^\\circ\\)'],
    options: ['\\(15^\\circ\\)', '\\(30^\\circ\\)', '\\(45^\\circ\\)', '\\(60^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We start by locating the crossing straight lines intersecting at vertex M. We identify the vertically opposite angle relationship.',
        workingOut: '\\text{Given: Vertically opposite angles across vertex M}'
      },
      {
        explanation: 'Next, we notice that the angle \\(\\theta = 120^\\circ\\) is vertically opposite to the combined adjacent angles labeled \\(3\\gamma\\) and \\(\\gamma\\). Since vertically opposite angles are equal, their sum equals \\(120^\\circ\\).',
        workingOut: '3\\gamma + \\gamma = 120^\\circ \\;\\Rightarrow\\; 4\\gamma = 120^\\circ'
      },
      {
        explanation: 'Finally, we solve for \\(\\gamma\\) by dividing both sides by 4. \\(\\gamma = 120^\\circ / 4 = 30^\\circ\\). This matches option B.',
        workingOut: '\\gamma = 30^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines -->
  <line x1="80" y1="140" x2="320" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="80" y1="40" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Middle splitting ray for gamma -->
  <line x1="200" y1="90" x2="110" y2="65" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">M</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="245" y="85" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">120°</text>
  <text x="145" y="105" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">3γ</text>
  <text x="145" y="55" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">γ</text>
</svg>`
  },

  // y8-5a-q4f-theta: Straight line (180 - 60 = 120)
  'y8-5a-q4f-theta': {
    type: 'multiple_choice',
    question: 'In the diagram below, find the value of \\(\\theta\\), giving reasons.',
    opts: ['\\(60^\\circ\\)', '\\(110^\\circ\\)', '\\(120^\\circ\\)', '\\(180^\\circ\\)'],
    options: ['\\(60^\\circ\\)', '\\(110^\\circ\\)', '\\(120^\\circ\\)', '\\(180^\\circ\\)'],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: 'We start by locating \\(\\theta\\) and the adjacent angle of \\(60^\\circ\\) along a single straight line.',
        workingOut: '\\text{Given: Adjacent angles } \\theta \\text{ and } 60^\\circ \\text{ on a straight line}'
      },
      {
        explanation: 'Next, we apply the supplementary angle rule, which states that angles on a straight line add up to \\(180^\\circ\\).',
        workingOut: '\\theta + 60^\\circ = 180^\\circ'
      },
      {
        explanation: 'Finally, we solve for \\(\\theta\\) by subtraction. \\(\\theta = 180^\\circ - 60^\\circ = 120^\\circ\\). This matches option C.',
        workingOut: '\\theta = 120^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines -->
  <line x1="80" y1="140" x2="320" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="80" y1="40" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">M</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="245" y="85" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">θ</text>
  <text x="200" y="60" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">60°</text>
</svg>`
  },

  // y8-5a-q4g: Straight line algebra ((alpha + 40) + (alpha - 20) = 180 -> alpha = 80)
  'y8-5a-q4g': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\alpha\\) in the diagram below, giving reasons.',
    opts: ['\\(60^\\circ\\)', '\\(70^\\circ\\)', '\\(80^\\circ\\)', '\\(90^\\circ\\)'],
    options: ['\\(60^\\circ\\)', '\\(70^\\circ\\)', '\\(80^\\circ\\)', '\\(90^\\circ\\)'],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: 'We begin by identifying the two algebraic angles adjacent on a straight line. The angles are labeled \\(\\alpha + 40^\\circ\\) and \\(\\alpha - 20^\\circ\\).',
        workingOut: '\\text{Given: Adjacent angles } (\\alpha + 40^\\circ) \\text{ and } (\\alpha - 20^\\circ) \\text{ on a straight line}'
      },
      {
        explanation: 'Next, we apply the geometric theorem that angles on a straight line add up to \\(180^\\circ\\). This allows us to set up an algebraic equation.',
        workingOut: '(\\alpha + 40^\\circ) + (\\alpha - 20^\\circ) = 180^\\circ'
      },
      {
        explanation: 'Finally, we simplify the equation and solve for \\(\\alpha\\). \\(2\\alpha + 20^\circ = 180^\circ \\;\Rightarrow\\; 2\\alpha = 160^\circ \\;\Rightarrow\\; \alpha = 80^\circ\\). This matches option C.',
        workingOut: '2\\alpha = 160^\\circ \\;\\Rightarrow\\; \\alpha = 80^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray at 60deg (so alpha+40 = 120deg on the left, alpha-20 = 60deg on the right) -->
  <line x1="200" y1="130" x2="150" y2="43.4" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="135" y="100" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">α + 40°</text>
  <text x="245" y="115" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">α - 20°</text>
</svg>`
  },

  // y8-5a-q4h: Right angle algebra (3alpha + 2alpha = 90 -> alpha = 18)
  'y8-5a-q4h': {
    type: 'multiple_choice',
    question: 'Find the value of \\(\\alpha\\) in the diagram below, giving reasons.',
    opts: ['\\(15^\\circ\\)', '\\(18^\\circ\\)', '\\(20^\\circ\\)', '\\(24^\\circ\\)'],
    options: ['\\(15^\\circ\\)', '\\(18^\\circ\\)', '\\(20^\\circ\\)', '\\(24^\\circ\\)'],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: 'We begin by observing the right angle divided into two adjacent algebraic angles. The square symbol at the vertex V indicates the total angle is \\(90^\\circ\\).',
        workingOut: '\\text{Given: Right angle divided into } 3\\alpha \\text{ and } 2\\alpha'
      },
      {
        explanation: 'Next, we apply the definition of complementary angles, which states that they add up to \\(90^\\circ\\). We construct the algebraic equation.',
        workingOut: '3\\alpha + 2\\alpha = 90^\\circ'
      },
      {
        explanation: 'Finally, we combine like terms and solve for \\(\\alpha\\). \\(5\\alpha = 90^\circ \\;\Rightarrow\\; \alpha = 18^\circ\\). This matches option B.',
        workingOut: '5\\alpha = 90^\\circ \\;\\Rightarrow\\; \\alpha = 18^\\circ'
      }
    ],
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Right angle lines -->
  <line x1="150" y1="140" x2="300" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="140" x2="150" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray splitting them (at 36deg: 2*18 = 36deg from horizontal) -->
  <line x1="150" y1="140" x2="247" y2="70" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle indicator -->
  <rect x="150" y="125" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Vertices -->
  <circle cx="150" cy="140" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="135" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="210" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">2α</text>
  <text x="175" y="75" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">3α</text>
</svg>`
  }
};

async function run() {
  const batch = db.batch();

  for (const [id, fields] of Object.entries(targetData)) {
    console.log(`Setting up remaining doc: ${id}`);
    const docRef = db.collection('questions').doc(id);
    batch.update(docRef, {
      ...fields,
      isNew: true,
      geometry: null // Clear legacy geometry to force HTML render
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
    ids: FieldValue.arrayUnion(...Object.keys(targetData)),
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  await batch.commit();
  console.log('Successfully converted remaining Q11 to Q25 questions to multiple_choice with clean SVGs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
