/**
 * Rebuild Y12A 6E from q10 onwards:
 *  - Deactivate empty multi/subquestion parents
 *  - Standalone MC where possible; keep sketch as teacher_review with real model answers
 *  - Detailed solutionSteps (no finance templates)
 *
 *   node tools/scripts/rebuildY12A6EFromQ10.cjs
 */
'use strict';

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

const META = {
  topicId: 'y12a-6E',
  chapterId: 'y12a-6',
  chapterTitle: 'Chapter 6: The trigonometric functions',
  topicCode: '6E',
  topicTitle: 'Applications of integration',
  c: '6E',
  t: 'Applications of integration',
  year: 'Year 12',
  origin: 'seed',
  isNew: true,
  isManual: true,
  graphData: null,
  isActive: true,
  subQuestions: [],
  blanks: [],
  questionImage: '',
  examPaper: '',
};

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

function mc(id, question, opts, a, steps, extra = {}) {
  if (opts.length !== 4) throw new Error(id + ' needs 4 opts');
  const correct = opts[a];
  return {
    id,
    ...META,
    type: 'multiple_choice',
    difficulty: extra.difficulty || 'medium',
    timeLimit: extra.timeLimit || 120,
    title: question.replace(/\\\(|\\\)/g, '').slice(0, 55) + '…',
    question,
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a,
    answer: String(a),
    hint: extra.hint || 'Set up a definite integral for the required area and evaluate exactly.',
    solution: `The correct answer is ${correct}.`,
    solutionSteps: steps,
    requiresManualGrading: false,
  };
}

function tr(id, question, answer, steps, extra = {}) {
  return {
    id,
    ...META,
    type: 'teacher_review',
    difficulty: extra.difficulty || 'medium',
    timeLimit: extra.timeLimit || 180,
    title: question.replace(/\\\(|\\\)/g, '').slice(0, 55) + '…',
    question,
    answer,
    hint: extra.hint || 'Show clear working or a labelled sketch as required.',
    solution: answer,
    solutionSteps: steps,
    requiresManualGrading: true,
  };
}

function buildFromQ10() {
  const Q = [];

  // ── Q10 ────────────────────────────────────────────────────────────
  Q.push(
    tr(
      'y12a-6e-q10a',
      'Sketch the curve \\( y = 2\\cos\\pi x \\) on the interval \\( [-1, 1] \\), clearly marking the two \\(x\\)-intercepts.',
      'Cosine wave of amplitude 2, period 2; intercepts at \\(x = \\pm\\dfrac{1}{2}\\); max at \\((0,2)\\); ends at \\((\\pm 1, -2)\\).',
      [
        S(
          'Identify the key features of \\(y = 2\\cos\\pi x\\). Amplitude is 2 (vertical stretch). Period: standard cos has period \\(2\\pi\\); with argument \\(\\pi x\\) the period is \\(\\dfrac{2\\pi}{\\pi} = 2\\).',
          '\\(\\text{amplitude }2,\\ \\text{period }2\\)'
        ),
        S(
          '\\(x\\)-intercepts: set \\(2\\cos\\pi x = 0 \\Rightarrow \\cos\\pi x = 0 \\Rightarrow \\pi x = \\dfrac{\\pi}{2} + k\\pi \\Rightarrow x = \\dfrac{1}{2} + k\\). On \\([-1,1]\\) the intercepts are \\(x = -\\dfrac{1}{2}\\) and \\(x = \\dfrac{1}{2}\\).',
          '\\(x = \\pm\\dfrac{1}{2}\\)'
        ),
        S(
          'Other landmarks: at \\(x = 0\\), \\(y = 2\\) (maximum). At \\(x = \\pm 1\\), \\(\\cos(\\pm\\pi) = -1\\) so \\(y = -2\\) (minima at the ends of the interval).',
          '\\((0,2),\\ (\\pm 1,-2)\\)'
        ),
        S(
          'Sketch: smooth cosine wave from \\((-1,-2)\\) up through \\((-\\tfrac{1}{2},0)\\) to \\((0,2)\\), down through \\((\\tfrac{1}{2},0)\\) to \\((1,-2)\\). Mark the two intercepts clearly.',
          '\\(\\text{sketch on }[-1,1]\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Find where \\(\\cos\\pi x = 0\\) on \\([-1,1]\\).' }
    )
  );

  Q.push(
    mc(
      'y12a-6e-q10b',
      'Find the exact area bounded by the curve \\( y = 2\\cos\\pi x \\) and the \\(x\\)-axis between the two \\(x\\)-intercepts found in part (a).',
      [
        '\\(-\\dfrac{4}{\\pi}\\)',
        '\\(\\dfrac{1}{\\pi}\\)',
        '\\(\\dfrac{4}{\\pi}\\)',
        '\\(\\dfrac{\\pi}{4}\\)',
      ],
      2,
      [
        S(
          'From part (a), the intercepts are \\(x = -\\dfrac{1}{2}\\) and \\(x = \\dfrac{1}{2}\\). On this interval \\(\\cos\\pi x \\ge 0\\), so the curve is above the axis and area is simply the definite integral (no absolute value needed).',
          '\\(A = \\int_{-1/2}^{1/2} 2\\cos\\pi x\\,dx\\)'
        ),
        S(
          'Antiderivative: \\(\\int 2\\cos\\pi x\\,dx = 2\\cdot\\dfrac{1}{\\pi}\\sin\\pi x = \\dfrac{2}{\\pi}\\sin\\pi x\\).',
          '\\(F(x) = \\dfrac{2}{\\pi}\\sin\\pi x\\)'
        ),
        S(
          'Evaluate: \\(F\\!\\left(\\dfrac{1}{2}\\right) - F\\!\\left(-\\dfrac{1}{2}\\right) = \\dfrac{2}{\\pi}\\sin\\dfrac{\\pi}{2} - \\dfrac{2}{\\pi}\\sin\\!\\left(-\\dfrac{\\pi}{2}\\right) = \\dfrac{2}{\\pi}(1) - \\dfrac{2}{\\pi}(-1) = \\dfrac{2}{\\pi} + \\dfrac{2}{\\pi} = \\dfrac{4}{\\pi}\\).',
          '\\(\\dfrac{4}{\\pi}\\)'
        ),
        S(
          'Area is positive, so reject negative options. Final answer: \\(\\dfrac{4}{\\pi}\\).',
          '\\(\\dfrac{4}{\\pi}\\)'
        ),
      ],
      {
        difficulty: 'medium',
        hint: 'Integrate \\(2\\cos\\pi x\\) from \\(-1/2\\) to \\(1/2\\).',
      }
    )
  );

  // ── Q11 ────────────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6e-q11a',
      'An arch window 3 metres high and 2 metres wide is made in the shape of the curve \\( y = 3\\cos\\!\\left(\\dfrac{\\pi}{2}x\\right) \\). Find the area of the window in square metres, correct to one decimal place.',
      ['\\(2.8\\)', '\\(3.2\\)', '\\(3.8\\)', '\\(4.8\\)'],
      2,
      [
        S(
          'Width 2 m and height 3 m match the model: at \\(x = 0\\), \\(y = 3\\); the arch meets the ground where \\(y = 0\\), i.e. \\(\\cos\\dfrac{\\pi x}{2} = 0 \\Rightarrow \\dfrac{\\pi x}{2} = \\pm\\dfrac{\\pi}{2} \\Rightarrow x = \\pm 1\\). So integrate from \\(-1\\) to \\(1\\).',
          '\\(A = \\int_{-1}^{1} 3\\cos\\dfrac{\\pi x}{2}\\,dx\\)'
        ),
        S(
          'Antiderivative: \\(\\int 3\\cos\\dfrac{\\pi x}{2}\\,dx = 3\\cdot\\dfrac{2}{\\pi}\\sin\\dfrac{\\pi x}{2} = \\dfrac{6}{\\pi}\\sin\\dfrac{\\pi x}{2}\\).',
          '\\(F(x) = \\dfrac{6}{\\pi}\\sin\\dfrac{\\pi x}{2}\\)'
        ),
        S(
          'Evaluate: \\(F(1) - F(-1) = \\dfrac{6}{\\pi}\\sin\\dfrac{\\pi}{2} - \\dfrac{6}{\\pi}\\sin\\!\\left(-\\dfrac{\\pi}{2}\\right) = \\dfrac{6}{\\pi}(1) - \\dfrac{6}{\\pi}(-1) = \\dfrac{12}{\\pi}\\).',
          '\\(A = \\dfrac{12}{\\pi}\\)'
        ),
        S(
          'Numerically \\(\\dfrac{12}{\\pi} \\approx \\dfrac{12}{3.1416} \\approx 3.8197\\), which to one decimal place is \\(3.8\\) m\\(^2\\).',
          '\\(3.8\\)'
        ),
        S(
          'Final answer: \\(3.8\\). A common slip integrates only from 0 to 1 and halves the width incorrectly, getting about 1.9.',
          '\\(3.8\\)'
        ),
      ],
      {
        difficulty: 'medium',
        timeLimit: 150,
        hint: 'Integrate from \\(x=-1\\) to \\(x=1\\); then approximate \\(12/\\pi\\).',
      }
    )
  );

  // ── Q12 ────────────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6e-q12a',
      'The graphs of \\( y = x - \\sin x \\) and \\( y = x \\) enclose a region. Find the total area enclosed between these graphs from \\( x = 0 \\) to \\( x = 2\\pi \\).',
      ['\\(0\\)', '\\(2\\)', '\\(4\\)', '\\(2\\pi\\)'],
      2,
      [
        S(
          'The vertical gap between the curves is \\(x - (x - \\sin x) = \\sin x\\). So the enclosed area is the area between \\(y = \\sin x\\) and the \\(x\\)-axis from 0 to \\(2\\pi\\) (total absolute area).',
          '\\(A = \\int_{0}^{2\\pi}|\\sin x|\\,dx\\)'
        ),
        S(
          'On \\([0,\\pi]\\), \\(\\sin x \\ge 0\\); on \\([\\pi,2\\pi]\\), \\(\\sin x \\le 0\\). Split: \\(A = \\int_{0}^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx\\).',
          '\\(A = \\int_{0}^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}-\\sin x\\,dx\\)'
        ),
        S(
          'First half: \\([-\\cos x]_{0}^{\\pi} = -(-1) - (-1) = 1 + 1 = 2\\). Second half: \\([\\cos x]_{\\pi}^{2\\pi} = 1 - (-1) = 2\\).',
          '\\(2 + 2 = 4\\)'
        ),
        S(
          'Total area: \\(4\\). A common slip computes the signed integral \\(\\int_{0}^{2\\pi}\\sin x\\,dx = 0\\) and wrongly concludes the area is 0.',
          '\\(4\\)'
        ),
      ],
      {
        difficulty: 'medium',
        hint: 'The gap is \\(\\sin x\\); use absolute value / split at \\(\\pi\\).',
      }
    )
  );

  // ── Q13 ────────────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6e-q13a',
      'The region \\(R\\) is bounded by the curve \\( y = \\tan x \\), the \\(x\\)-axis and the line \\( x = \\dfrac{\\pi}{3} \\). The area of \\(R\\) is:',
      ['\\(\\ln\\dfrac{1}{2}\\)', '\\(\\ln 2\\)', '\\(\\dfrac{1}{2}\\ln 2\\)', '\\(1\\)'],
      1,
      [
        S(
          'From \\(x = 0\\) to \\(x = \\dfrac{\\pi}{3}\\), \\(\\tan x \\ge 0\\), so area is \\(\\displaystyle\\int_{0}^{\\pi/3}\\tan x\\,dx\\).',
          '\\(A = \\int_{0}^{\\pi/3}\\tan x\\,dx\\)'
        ),
        S(
          'Write \\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\). Substitute \\(u = \\cos x\\), \\(du = -\\sin x\\,dx\\): \\(\\int\\tan x\\,dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C\\).',
          '\\(\\int\\tan x\\,dx = -\\ln|\\cos x| + C\\)'
        ),
        S(
          'Evaluate: \\([-\\ln\\cos x]_{0}^{\\pi/3} = \\left(-\\ln\\cos\\dfrac{\\pi}{3}\\right) - \\left(-\\ln\\cos 0\\right) = -\\ln\\dfrac{1}{2} + \\ln 1 = -\\ln\\dfrac{1}{2} = \\ln 2\\).',
          '\\(\\ln 2\\)'
        ),
        S(
          'Final answer: \\(\\ln 2\\). A common slip stops at \\(-\\ln\\dfrac{1}{2}\\) without rewriting as \\(\\ln 2\\), or uses the wrong upper limit.',
          '\\(\\ln 2\\)'
        ),
      ],
      {
        difficulty: 'medium',
        hint: '\\(\\int\\tan x = -\\ln|\\cos x|\\); evaluate from 0 to \\(\\pi/3\\).',
      }
    )
  );

  // ── Q14 ────────────────────────────────────────────────────────────
  Q.push(
    tr(
      'y12a-6e-q14a',
      'Sketch the region bounded by the graphs of \\( y = \\sin x \\) and \\( y = \\cos x \\), and by the vertical lines \\( x = -\\dfrac{\\pi}{2} \\) and \\( x = \\dfrac{\\pi}{6} \\).',
      'On \\([-\\pi/2,\\pi/6]\\), \\(\\cos x \\ge \\sin x\\). Sketch both curves between the vertical lines; shade the region between them.',
      [
        S(
          'Vertical boundaries: \\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{\\pi}{6}\\). Sketch both sine and cosine on this interval.',
          '\\(x \\in \\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\)'
        ),
        S(
          'Compare heights: for every \\(x\\) in the interval, \\(\\cos x \\ge \\sin x\\) (they would meet at \\(\\pi/4\\), which lies to the right of \\(\\pi/6\\)). So cosine is the upper curve.',
          '\\(\\cos x \\ge \\sin x\\)'
        ),
        S(
          'Endpoints: at \\(x = -\\dfrac{\\pi}{2}\\), \\((\\sin,\\cos) = (-1,0)\\); at \\(x = \\dfrac{\\pi}{6}\\), \\(\\left(\\dfrac{1}{2},\\dfrac{\\sqrt{3}}{2}\\right)\\).',
          '\\text{mark endpoints}\\)'
        ),
        S(
          'Sketch and shade the band between the two curves from the left vertical line to the right one.',
          '\\(\\text{shaded region between curves}\\)'
        ),
      ],
      { difficulty: 'medium', hint: 'Decide which curve is above on the given interval.' }
    )
  );
  Q[Q.length - 1].solutionSteps[2].workingOut = '\\(\\text{mark endpoints}\\)';

  Q.push(
    mc(
      'y12a-6e-q14b',
      'Find the exact area of the region bounded by \\( y = \\sin x \\), \\( y = \\cos x \\), \\( x = -\\dfrac{\\pi}{2} \\) and \\( x = \\dfrac{\\pi}{6} \\).',
      [
        '\\(\\dfrac{3 - \\sqrt{3}}{2}\\)',
        '\\(\\dfrac{3 + \\sqrt{3}}{2}\\)',
        '\\(\\dfrac{1 + \\sqrt{3}}{2}\\)',
        '\\(2\\)',
      ],
      1,
      [
        S(
          'From the sketch, area is \\(\\displaystyle\\int_{-\\pi/2}^{\\pi/6}(\\cos x - \\sin x)\\,dx\\).',
          '\\(A = \\int_{-\\pi/2}^{\\pi/6}(\\cos x - \\sin x)\\,dx\\)'
        ),
        S(
          'Antiderivative: \\(\\sin x + \\cos x\\) (since integral of \\(-\\sin x\\) is \\(\\cos x\\)).',
          '\\(F(x) = \\sin x + \\cos x\\)'
        ),
        S(
          'At upper limit: \\(F\\!\\left(\\dfrac{\\pi}{6}\\right) = \\sin\\dfrac{\\pi}{6} + \\cos\\dfrac{\\pi}{6} = \\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}\\).',
          '\\(F\\!\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{1 + \\sqrt{3}}{2}\\)'
        ),
        S(
          'At lower limit: \\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = \\sin\\!\\left(-\\dfrac{\\pi}{2}\\right) + \\cos\\!\\left(-\\dfrac{\\pi}{2}\\right) = -1 + 0 = -1\\).',
          '\\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = -1\\)'
        ),
        S(
          'Difference: \\(\\dfrac{1 + \\sqrt{3}}{2} - (-1) = \\dfrac{1 + \\sqrt{3}}{2} + 1 = \\dfrac{1 + \\sqrt{3} + 2}{2} = \\dfrac{3 + \\sqrt{3}}{2}\\).',
          '\\(\\dfrac{3 + \\sqrt{3}}{2}\\)'
        ),
      ],
      {
        difficulty: 'hard',
        timeLimit: 150,
        hint: 'Integrate \\(\\cos x - \\sin x\\) from \\(-\\pi/2\\) to \\(\\pi/6\\).',
      }
    )
  );

  // ── Q15 ────────────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6e-q15a',
      'The curves \\( y = \\sin x \\) and \\( y = \\cos 2x \\) intersect at which of the following pairs of \\(x\\)-values (among others may exist)?',
      [
        '\\(x = 0\\) and \\(x = \\dfrac{\\pi}{2}\\)',
        '\\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{\\pi}{6}\\)',
        '\\(x = \\dfrac{\\pi}{4}\\) and \\(x = \\dfrac{\\pi}{3}\\)',
        '\\(x = -\\dfrac{\\pi}{6}\\) and \\(x = \\dfrac{\\pi}{2}\\)',
      ],
      1,
      [
        S(
          'Set \\(\\sin x = \\cos 2x\\). Use the double-angle identity \\(\\cos 2x = 1 - 2\\sin^{2}x\\).',
          '\\(\\sin x = 1 - 2\\sin^{2}x\\)'
        ),
        S(
          'Let \\(u = \\sin x\\): \\(u = 1 - 2u^{2} \\Rightarrow 2u^{2} + u - 1 = 0 \\Rightarrow (2u - 1)(u + 1) = 0\\). So \\(u = \\dfrac{1}{2}\\) or \\(u = -1\\).',
          '\\(\\sin x = \\dfrac{1}{2}\\ \\text{or}\\ \\sin x = -1\\)'
        ),
        S(
          '\\(\\sin x = -1 \\Rightarrow x = -\\dfrac{\\pi}{2}\\) (principal value in the usual sketching interval). \\(\\sin x = \\dfrac{1}{2} \\Rightarrow x = \\dfrac{\\pi}{6}\\) (among others).',
          '\\(x = -\\dfrac{\\pi}{2},\\ \\dfrac{\\pi}{6}\\)'
        ),
        S(
          'Verify by substitution: at \\(-\\dfrac{\\pi}{2}\\), both sides equal \\(-1\\); at \\(\\dfrac{\\pi}{6}\\), both equal \\(\\dfrac{1}{2}\\).',
          '\\(\\text{verified}\\)'
        ),
      ],
      {
        difficulty: 'medium',
        hint: 'Use \\(\\cos 2x = 1 - 2\\sin^{2}x\\).',
      }
    )
  );

  Q.push(
    tr(
      'y12a-6e-q15b',
      'On the same axes, sketch \\( y = \\sin x \\) and \\( y = \\cos 2x \\) on the interval \\( \\left[-\\dfrac{\\pi}{2},\\,\\dfrac{\\pi}{6}\\right] \\), marking the intersection points from part (a).',
      'Both curves meet at the endpoints of the interval; shade/note the region between them for the area in part (c).',
      [
        S(
          'Interval endpoints are exactly the intersection points found in (a). Plot both curves between these ends.',
          '\\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\)'
        ),
        S(
          '\\(y = \\sin x\\): from \\((-\\pi/2,-1)\\) up to \\((\\pi/6,1/2)\\). \\(y = \\cos 2x\\): at left end also \\(-1\\); has a local shape from the double angle; meets sine again at the right end.',
          '\\(\\text{two curves meet at endpoints}\\)'
        ),
        S(
          'Between the intersections, \\(\\cos 2x\\) lies above \\(\\sin x\\) (e.g. at \\(x = 0\\): cos 0 = 1 > sin 0 = 0).',
          '\\(\\cos 2x \\ge \\sin x\\)'
        ),
        S(
          'Sketch complete with intersection points marked for use in the area calculation.',
          '\\(\\text{sketch complete}\\)'
        ),
      ],
      { difficulty: 'medium' }
    )
  );

  Q.push(
    mc(
      'y12a-6e-q15c',
      'Hence find the exact area of the region bounded by \\( y = \\sin x \\) and \\( y = \\cos 2x \\) between their intersection points \\( x = -\\dfrac{\\pi}{2} \\) and \\( x = \\dfrac{\\pi}{6} \\).',
      [
        '\\(\\dfrac{\\sqrt{3}}{4}\\)',
        '\\(\\dfrac{3\\sqrt{3}}{4}\\)',
        '\\(\\dfrac{3\\sqrt{3}}{2}\\)',
        '\\(\\sqrt{3}\\)',
      ],
      1,
      [
        S(
          'Area: \\(\\displaystyle\\int_{-\\pi/2}^{\\pi/6}(\\cos 2x - \\sin x)\\,dx\\) (upper curve minus lower).',
          '\\(A = \\int_{-\\pi/2}^{\\pi/6}(\\cos 2x - \\sin x)\\,dx\\)'
        ),
        S(
          'Antiderivative: \\(\\dfrac{1}{2}\\sin 2x + \\cos x\\).',
          '\\(F(x) = \\dfrac{1}{2}\\sin 2x + \\cos x\\)'
        ),
        S(
          'At \\(\\dfrac{\\pi}{6}\\): \\(\\dfrac{1}{2}\\sin\\dfrac{\\pi}{3} + \\cos\\dfrac{\\pi}{6} = \\dfrac{1}{2}\\cdot\\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{4} + \\dfrac{2\\sqrt{3}}{4} = \\dfrac{3\\sqrt{3}}{4}\\).',
          '\\(F\\!\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{3\\sqrt{3}}{4}\\)'
        ),
        S(
          'At \\(-\\dfrac{\\pi}{2}\\): \\(\\dfrac{1}{2}\\sin(-\\pi) + \\cos\\!\\left(-\\dfrac{\\pi}{2}\\right) = 0 + 0 = 0\\).',
          '\\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = 0\\)'
        ),
        S(
          'Area: \\(\\dfrac{3\\sqrt{3}}{4} - 0 = \\dfrac{3\\sqrt{3}}{4}\\).',
          '\\(\\dfrac{3\\sqrt{3}}{4}\\)'
        ),
      ],
      {
        difficulty: 'hard',
        timeLimit: 150,
        hint: 'Integrate \\(\\cos 2x - \\sin x\\) between the intersection points.',
      }
    )
  );

  // ── Q16 ────────────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6e-q16a_i',
      'For every positive integer \\(n\\), the value of \\(\\displaystyle\\int_{0}^{2\\pi}\\sin nx\\,dx\\) is:',
      ['\\(2\\)', '\\(0\\)', '\\(\\dfrac{2}{n}\\)', '\\(2\\pi\\)'],
      1,
      [
        S(
          'Antiderivative: \\(\\int\\sin nx\\,dx = -\\dfrac{1}{n}\\cos nx\\).',
          '\\(F(x) = -\\dfrac{1}{n}\\cos nx\\)'
        ),
        S(
          'Evaluate: \\(F(2\\pi) - F(0) = -\\dfrac{1}{n}\\cos(2n\\pi) - \\left(-\\dfrac{1}{n}\\cos 0\\right) = -\\dfrac{1}{n}(1) + \\dfrac{1}{n}(1) = 0\\).',
          '\\(0\\)'
        ),
        S(
          'Why zero? Over whole periods of \\(\\sin nx\\) on \\([0,2\\pi]\\) (exactly \\(n\\) full waves), positive and negative lobes cancel in a signed integral.',
          '\\(\\text{signed integral cancels}\\)'
        ),
        S(
          'Final answer: \\(0\\). (This is not the same as the area under the curve, which uses absolute value.)',
          '\\(0\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Evaluate \\(-\\dfrac{1}{n}\\cos nx\\) at the limits.' }
    )
  );

  Q.push(
    mc(
      'y12a-6e-q16a_ii',
      'For every positive integer \\(n\\), the value of \\(\\displaystyle\\int_{0}^{2\\pi}\\cos nx\\,dx\\) is:',
      ['\\(2\\)', '\\(0\\)', '\\(\\dfrac{2}{n}\\)', '\\(2\\pi\\)'],
      1,
      [
        S(
          'Antiderivative: \\(\\int\\cos nx\\,dx = \\dfrac{1}{n}\\sin nx\\).',
          '\\(F(x) = \\dfrac{1}{n}\\sin nx\\)'
        ),
        S(
          'Evaluate: \\(F(2\\pi) - F(0) = \\dfrac{1}{n}\\sin(2n\\pi) - \\dfrac{1}{n}\\sin 0 = 0 - 0 = 0\\).',
          '\\(0\\)'
        ),
        S(
          'Same interpretation: full periods of cosine on \\([0,2\\pi]\\) cancel in the signed integral.',
          '\\(0\\)'
        ),
        S(
          'Final answer: \\(0\\).',
          '\\(0\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Evaluate \\(\\dfrac{1}{n}\\sin nx\\) at 0 and \\(2\\pi\\).' }
    )
  );

  function areaSinNxSteps(label, nExpr, nVal) {
    // area of |sin(nx)| on [0,2π] = 4 for integer n>=1
    return [
      S(
        `Area means total absolute area: \\(\\displaystyle\\int_{0}^{2\\pi}|\\sin(${nExpr})|\\,dx\\). The signed integral is 0 (part a), so we must take absolute value / sum lobes.`,
        `\\(A = \\int_{0}^{2\\pi}|\\sin(${nExpr})|\\,dx\\)`
      ),
      S(
        `On each half-period of length \\(\\dfrac{\\pi}{${nVal === 'n' ? 'n' : nVal}}\\), the absolute integral of a sine hump equals \\(\\dfrac{2}{${nVal === 'n' ? 'n' : nVal}}\\). There are \\(2${nVal === 'n' ? 'n' : nVal}\\) such half-waves in \\([0,2\\pi]\\).`,
        `\\(A = 2${nVal === 'n' ? 'n' : nVal}\\cdot\\dfrac{2}{${nVal === 'n' ? 'n' : nVal}} = 4\\)`
      ),
      S(
        nVal === 'n'
          ? 'For every positive integer \\(n\\), the factors cancel and the total area is 4.'
          : `Explicitly for ${label}: compute by splitting at zeros, or use the general result — the area is 4.`,
        '\\(4\\)'
      ),
      S(
        'Final answer: \\(4\\). A common slip reports 0 from the signed integral.',
        '\\(4\\)'
      ),
    ];
  }

  Q.push(
    mc(
      'y12a-6e-q16b_i',
      'Find the area between the curve \\( y = \\sin x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\).',
      ['\\(0\\)', '\\(2\\)', '\\(4\\)', '\\(2\\pi\\)'],
      2,
      [
        S(
          'Area is \\(\\int_{0}^{2\\pi}|\\sin x|\\,dx\\). Split at \\(\\pi\\) where sine changes sign.',
          '\\(A = \\int_{0}^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx\\)'
        ),
        S(
          'First: \\([-\\cos x]_{0}^{\\pi} = -(-1) - (-1) = 1 + 1 = 2\\). Second: \\([\\cos x]_{\\pi}^{2\\pi} = 1 - (-1) = 2\\).',
          '\\(2 + 2 = 4\\)'
        ),
        S(
          'Total area: \\(4\\).',
          '\\(4\\)'
        ),
        S(
          'Final answer: \\(4\\).',
          '\\(4\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Split the integral at \\(\\pi\\).' }
    )
  );

  Q.push(
    mc(
      'y12a-6e-q16b_ii',
      'Find the area between the curve \\( y = \\sin 2x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\).',
      ['\\(0\\)', '\\(2\\)', '\\(4\\)', '\\(2\\pi\\)'],
      2,
      areaSinNxSteps('sin 2x', '2x', '2'),
      { difficulty: 'medium', hint: 'There are 4 half-waves; each has absolute area 1.' }
    )
  );

  Q.push(
    mc(
      'y12a-6e-q16b_iii',
      'Find the area between the curve \\( y = \\sin 3x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\).',
      ['\\(0\\)', '\\(2\\)', '\\(4\\)', '\\(2\\pi\\)'],
      2,
      areaSinNxSteps('sin 3x', '3x', '3'),
      { difficulty: 'medium', hint: 'Same total absolute area pattern as \\(\\sin x\\) and \\(\\sin 2x\\).' }
    )
  );

  Q.push(
    mc(
      'y12a-6e-q16b_iv',
      'Find the area between the curve \\( y = \\sin nx \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\) (\\(n\\) a positive integer).',
      ['\\(0\\)', '\\(2\\)', '\\(4\\)', '\\(2n\\)'],
      2,
      areaSinNxSteps('sin nx', 'nx', 'n'),
      { difficulty: 'medium', hint: '\\(2n\\) half-waves each of area \\(2/n\\).' }
    )
  );

  Q.push(
    mc(
      'y12a-6e-q16b_v',
      'Find the area between the curve \\( y = \\cos nx \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\) (\\(n\\) a positive integer).',
      ['\\(0\\)', '\\(2\\)', '\\(4\\)', '\\(2n\\)'],
      2,
      [
        S(
          'Area: \\(\\int_{0}^{2\\pi}|\\cos nx|\\,dx\\). Cosine has the same lobe size as sine of the same frequency.',
          '\\(A = \\int_{0}^{2\\pi}|\\cos nx|\\,dx\\)'
        ),
        S(
          'Each absolute half-period contributes \\(\\dfrac{2}{n}\\), and there are \\(2n\\) such pieces on \\([0,2\\pi]\\).',
          '\\(A = 2n\\cdot\\dfrac{2}{n} = 4\\)'
        ),
        S(
          'Alternatively, shift: \\(|\\cos nx| = \\left|\\sin\\!\\left(nx + \\dfrac{\\pi}{2}\\right)\\right|\\) has the same integral as \\(|\\sin nx|\\).',
          '\\(4\\)'
        ),
        S(
          'Final answer: \\(4\\). Not 0 (that is the signed integral from part a).',
          '\\(4\\)'
        ),
      ],
      { difficulty: 'medium', hint: 'Same absolute area as \\(|\\sin nx|\\) on a full number of periods.' }
    )
  );

  // ── Q17 ────────────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6e-q17a',
      'For every positive integer \\(n\\), the value of \\(\\displaystyle\\int_{0}^{n}(1 + \\sin 2\\pi x)\\,dx\\) is:',
      ['\\(0\\)', '\\(1\\)', '\\(n\\)', '\\(2n\\)'],
      2,
      [
        S(
          'Integrate term by term: \\(\\int(1 + \\sin 2\\pi x)\\,dx = x - \\dfrac{1}{2\\pi}\\cos 2\\pi x + C\\).',
          '\\(F(x) = x - \\dfrac{1}{2\\pi}\\cos 2\\pi x\\)'
        ),
        S(
          'Evaluate from 0 to \\(n\\): \\(F(n) - F(0) = \\left(n - \\dfrac{1}{2\\pi}\\cos 2\\pi n\\right) - \\left(0 - \\dfrac{1}{2\\pi}\\cos 0\\right)\\).',
          '\\(F(n) - F(0)\\)'
        ),
        S(
          'For integer \\(n\\), \\(\\cos(2\\pi n) = 1 = \\cos 0\\). So \\(n - \\dfrac{1}{2\\pi}(1) + \\dfrac{1}{2\\pi}(1) = n\\).',
          '\\(n\\)'
        ),
        S(
          'Final answer: \\(n\\). The oscillating term cancels over whole periods; only the \\(+1\\) contributes net area \\(n\\).',
          '\\(n\\)'
        ),
      ],
      {
        difficulty: 'medium',
        hint: 'Antiderivative \\(x - \\dfrac{1}{2\\pi}\\cos 2\\pi x\\); use integer \\(n\\).',
      }
    )
  );

  Q.push(
    tr(
      'y12a-6e-q17b',
      'Sketch \\( y = 1 + \\sin 2\\pi x \\) for \\( 0 \\le x \\le n \\) (positive integer \\(n\\)), and interpret the result of part (a) geometrically.',
      'Wave of amplitude 1 about the line \\(y=1\\) (so between 0 and 2). Over each unit interval the net area under the curve is 1, hence total area from 0 to \\(n\\) is \\(n\\).',
      [
        S(
          'The graph is a sine wave of period 1 (because of \\(2\\pi x\\)), shifted up by 1. Range is \\([0,2]\\); it touches the \\(x\\)-axis at the bottom of each trough.',
          '\\(y = 1 + \\sin 2\\pi x\\)'
        ),
        S(
          'On each interval \\([k,k+1]\\), the area under the curve equals 1 (from part (a) with successive integers).',
          '\\(\\text{area per period } = 1\\)'
        ),
        S(
          'Therefore from 0 to \\(n\\) there are \\(n\\) such unit areas, totalling \\(n\\) — matching the integral in part (a).',
          '\\(\\text{total area } = n\\)'
        ),
        S(
          'Geometric meaning: the integral equals the total (unsigned, since \\(y \\ge 0\\)) area under the elevated sine wave over \\(n\\) periods.',
          '\\(\\text{sketch + interpretation}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 150 }
    )
  );

  return Q;
}

const EMPTY_PARENTS = [
  'y12a-6e-q10',
  'y12a-6e-q11',
  'y12a-6e-q12',
  'y12a-6e-q13',
  'y12a-6e-q14',
  'y12a-6e-q15',
  'y12a-6e-q16',
  'y12a-6e-q17',
];

(async () => {
  const built = buildFromQ10();
  console.log('built', built.length, 'questions');

  const seedPath = path.resolve('src/constants/seedYear12aCh6EQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const mod = require(seedPath);
  let list = mod.Y12A_CH6E_QUESTIONS || mod.default;

  const builtIds = new Set(built.map((q) => q.id));
  // keep questions before q10
  list = list.filter((q) => {
    const m = q.id && q.id.match(/y12a-6e-q(\d+)/);
    if (!m) return true;
    return Number(m[1]) < 10;
  });
  list = list.concat(built);

  writeFileSync(
    seedPath,
    'export const Y12A_CH6E_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6E_QUESTIONS;\n'
  );
  console.log('seed total', list.length);

  // deactivate empty parents
  let batch = db.batch();
  let ops = 0;
  for (const id of EMPTY_PARENTS) {
    batch.set(
      db.collection('questions').doc(id),
      {
        isActive: false,
        subQuestions: [],
        question: '',
        isNew: true,
        origin: 'seed',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    ops++;
    console.log('deactivate', id);
  }

  for (const q of built) {
    batch.set(
      db.collection('questions').doc(q.id),
      { ...q, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
    ops++;
    if (ops >= 400) {
      await batch.commit();
      batch = db.batch();
      ops = 0;
    }
    console.log('OK', q.id, q.type, 'a=', q.a, 'steps', q.solutionSteps.length);
  }
  if (ops) await batch.commit();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  const idx = spawnSync('node', ['tools/scripts/rebuildQuestionIndexes.js', 'y12a-6'], {
    encoding: 'utf8',
    timeout: 120000,
  });
  console.log(idx.stdout || '');
  if (idx.status !== 0) console.warn(idx.stderr);

  for (const id of ['y12a-6e-q10', 'y12a-6e-q10a', 'y12a-6e-q10b', 'y12a-6e-q13a', 'y12a-6e-q16b_iv']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      id,
      'type',
      d?.type,
      'active',
      d?.isActive,
      'Qlen',
      (d?.question || '').length,
      'steps',
      d?.solutionSteps?.length
    );
  }
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
