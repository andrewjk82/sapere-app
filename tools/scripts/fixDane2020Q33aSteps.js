/**
 * Patch solutionSteps for dane2020-q33a / dane2020s-q33a only.
 * Point-reads + merge writes; bumps questions version (no index rebuild needed —
 * steps are not membership).
 *
 *   node tools/scripts/fixDane2020Q33aSteps.js
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const sa = JSON.parse(
  readFileSync(
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
      '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

function step(explanation, workingOut) {
  return {
    explanation,
    workingOut,
    graphData: null,
  };
}

const PATCHES = {
  'dane2020-q33a': {
    solution: [
      'Split into four geometric pieces (signed area).',
      'AB: quarter circle r=2 above → +π.',
      'BC: triangle base 2, height 2 below → −2.',
      'CD: rectangle 2×2 below → −4.',
      'DE: quarter circle r=2 below → −π.',
      'Total: π − 2 − 4 − π = −6.',
    ].join(' '),
    solutionSteps: [
      step(
        'A definite integral equals signed area: regions above the \\(x\\)-axis count positive, regions below count negative. Split the path into the four geometric pieces \\(AB\\), \\(BC\\), \\(CD\\), and \\(DE\\).',
        '\\(\\displaystyle\\int_0^8 f(x)\\,dx = [AB] + [BC] + [CD] + [DE]\\)'
      ),
      step(
        'Piece \\(AB\\): quarter circle of radius \\(2\\) centred at the origin, from \\(A(0,2)\\) to \\(B(2,0)\\), entirely above the \\(x\\)-axis. Area of a full circle is \\(\\pi r^2\\), so a quarter is \\(\\tfrac14\\pi r^2\\).',
        '\\([AB] = +\\dfrac{1}{4}\\pi(2)^2 = +\\dfrac{1}{4}\\pi\\cdot 4 = +\\pi\\)'
      ),
      step(
        'Piece \\(BC\\): straight line from \\(B(2,0)\\) to \\(C(4,-2)\\), entirely below the \\(x\\)-axis. The region between this line and the \\(x\\)-axis is a right triangle with base \\(4-2=2\\) and height \\(2\\). Signed area is negative.',
        '\\([BC] = -\\dfrac{1}{2}\\times 2\\times 2 = -2\\)'
      ),
      step(
        'Piece \\(CD\\): horizontal segment from \\(C(4,-2)\\) to \\(D(6,-2)\\), so \\(y=-2\\) for \\(4\\le x\\le 6\\). This is a rectangle of width \\(6-4=2\\) and height \\(2\\), fully below the axis.',
        '\\([CD] = -(2)\\times(2) = -4\\)'
      ),
      step(
        'Piece \\(DE\\): quarter circle of radius \\(2\\) from \\(D(6,-2)\\) to \\(E(8,0)\\) (centre \\((8,-2)\\)), entirely below the \\(x\\)-axis. Same area magnitude as \\(AB\\), but signed negative.',
        '\\([DE] = -\\dfrac{1}{4}\\pi(2)^2 = -\\pi\\)'
      ),
      step(
        'Add the four signed areas. The \\(+\\pi\\) and \\(-\\pi\\) cancel, leaving the triangular and rectangular contributions.',
        '\\(\\pi + (-2) + (-4) + (-\\pi) = \\pi - 2 - 4 - \\pi = -6\\)'
      ),
      step(
        'Therefore \\(\\displaystyle\\int_0^8 f(x)\\,dx = -6\\). (Net area below the axis exceeds the area above.)',
        '\\(-6\\)'
      ),
    ],
  },
  'dane2020s-q33a': {
    solution: [
      'Split into four geometric pieces (signed area).',
      'AB: quarter circle r=2 above → +π.',
      'BC: triangle base 1, height 2 below → −1.',
      'CD: rectangle 3×2 below → −6.',
      'DE: quarter circle r=2 below → −π.',
      'Total: π − 1 − 6 − π = −7.',
    ].join(' '),
    solutionSteps: [
      step(
        'A definite integral equals signed area: regions above the \\(x\\)-axis count positive, regions below count negative. Split the path into the four geometric pieces \\(AB\\), \\(BC\\), \\(CD\\), and \\(DE\\).',
        '\\(\\displaystyle\\int_0^8 f(x)\\,dx = [AB] + [BC] + [CD] + [DE]\\)'
      ),
      step(
        'Piece \\(AB\\): quarter circle of radius \\(2\\) centred at the origin, from \\(A(0,2)\\) to \\(B(2,0)\\), entirely above the \\(x\\)-axis. Area of a full circle is \\(\\pi r^2\\), so a quarter is \\(\\tfrac14\\pi r^2\\).',
        '\\([AB] = +\\dfrac{1}{4}\\pi(2)^2 = +\\dfrac{1}{4}\\pi\\cdot 4 = +\\pi\\)'
      ),
      step(
        'Piece \\(BC\\): straight line from \\(B(2,0)\\) to \\(C(3,-2)\\), entirely below the \\(x\\)-axis. The region between this line and the \\(x\\)-axis is a right triangle with base \\(3-2=1\\) and height \\(2\\). Signed area is negative.',
        '\\([BC] = -\\dfrac{1}{2}\\times 1\\times 2 = -1\\)'
      ),
      step(
        'Piece \\(CD\\): horizontal segment from \\(C(3,-2)\\) to \\(D(6,-2)\\), so \\(y=-2\\) for \\(3\\le x\\le 6\\). This is a rectangle of width \\(6-3=3\\) and height \\(2\\), fully below the axis.',
        '\\([CD] = -(3)\\times(2) = -6\\)'
      ),
      step(
        'Piece \\(DE\\): quarter circle of radius \\(2\\) from \\(D(6,-2)\\) to \\(E(8,0)\\) (centre \\((8,-2)\\)), entirely below the \\(x\\)-axis. Same area magnitude as \\(AB\\), but signed negative.',
        '\\([DE] = -\\dfrac{1}{4}\\pi(2)^2 = -\\pi\\)'
      ),
      step(
        'Add the four signed areas. The \\(+\\pi\\) and \\(-\\pi\\) cancel, leaving the triangular and rectangular contributions.',
        '\\(\\pi + (-1) + (-6) + (-\\pi) = \\pi - 1 - 6 - \\pi = -7\\)'
      ),
      step(
        'Therefore \\(\\displaystyle\\int_0^8 f(x)\\,dx = -7\\). (Net area below the axis exceeds the area above.)',
        '\\(-7\\)'
      ),
    ],
  },
};

async function main() {
  for (const [id, patch] of Object.entries(PATCHES)) {
    const ref = db.collection('questions').doc(id);
    const snap = await ref.get();
    if (!snap.exists) {
      console.log('missing', id);
      continue;
    }
    if (snap.data().origin === 'teacher') {
      console.log('skip teacher', id);
      continue;
    }
    await ref.set(
      {
        solutionSteps: patch.solutionSteps,
        solution: patch.solution,
        isNew: true,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log(
      'patched',
      id,
      'steps',
      patch.solutionSteps.length,
      'prevSteps',
      (snap.data().solutionSteps || []).length
    );
  }

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('done version', ver);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
