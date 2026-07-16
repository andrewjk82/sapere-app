/**
 * Enrich Year 12 Adv Ch2 MCQ solutionSteps with fuller pedagogical explanations.
 *
 *   node tools/scripts/enrichY12ACh2Steps.js
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

function S(explanation, workingOut) {
  return {
    explanation,
    workingOut: workingOut.startsWith('\\(') ? workingOut : `\\(${workingOut}\\)`,
    graphData: null,
  };
}

/** id -> solutionSteps (4–6 detailed steps) */
const STEPS = {
  // ── 2B asymptotes ───────────────────────────────────────────
  'car2020-mc2': [
    S(
      'For a rational function written as a fraction, vertical asymptotes can only occur where the denominator is zero (and the numerator is not also zero there).',
      '\\text{look for denom } = 0'
    ),
    S(
      'Here the denominator is \\(x^2 - 9\\). Set it equal to zero and factorise as a difference of squares.',
      'x^2 - 9 = 0 \\implies (x-3)(x+3) = 0'
    ),
    S(
      'The solutions are \\(x = 3\\) and \\(x = -3\\). At both of these values the numerator is \\(1 \\neq 0\\), so neither factor cancels.',
      'x = 3 \\quad\\text{or}\\quad x = -3'
    ),
    S(
      'Therefore the graph has vertical asymptotes \\(x = \\pm 3\\). (As \\(|x| \\to \\infty\\) we also have a horizontal asymptote \\(y = 0\\), but that is not one of the options about vertical lines.)',
      'x = \\pm 3'
    ),
  ],
  'car2020s-mc2': [
    S(
      'Vertical asymptotes of \\(y = \\dfrac{1}{x^2 - 16}\\) occur where the denominator is zero and the numerator is nonzero.',
      '\\text{denom } = 0'
    ),
    S('Solve \\(x^2 - 16 = 0\\).', 'x^2 = 16'),
    S('Factorise: \\((x - 4)(x + 4) = 0\\), so \\(x = 4\\) or \\(x = -4\\).', 'x = \\pm 4'),
    S(
      'The numerator is the constant \\(1\\), so it never cancels these factors. Hence the vertical asymptotes are \\(x = \\pm 4\\).',
      'x = \\pm 4'
    ),
  ],

  // ── 2D inequations ──────────────────────────────────────────
  'asc2020-mc7': [
    S(
      'Start with the inequality \\(3 - 2x - x^2 < 3\\). Subtract \\(3\\) from both sides to simplify.',
      '3 - 2x - x^2 < 3'
    ),
    S('This reduces to \\(-2x - x^2 < 0\\). Factor out \\(-x\\) (or multiply by \\(-1\\) carefully).', '-x^2 - 2x < 0'),
    S(
      'Multiply both sides by \\(-1\\) and reverse the inequality: \\(x^2 + 2x > 0\\). Factor: \\(x(x + 2) > 0\\).',
      'x(x + 2) > 0'
    ),
    S(
      'A product of two factors is positive when both are positive or both are negative. The critical points are \\(x = 0\\) and \\(x = -2\\).',
      'x = 0,\\; x = -2'
    ),
    S(
      'Testing intervals: for \\(x < -2\\) both factors are negative (product positive); for \\(-2 < x < 0\\) the product is negative; for \\(x > 0\\) both positive. So the solution is \\(x < -2\\) or \\(x > 0\\).',
      'x < -2 \\quad\\text{or}\\quad x > 0'
    ),
  ],
  'asc2020-mc7v': [
    S('Begin with \\(5 - 4x - x^2 < 5\\). Subtract \\(5\\) from both sides.', '5 - 4x - x^2 < 5'),
    S('Obtain \\(-4x - x^2 < 0\\). Multiply by \\(-1\\) and reverse the inequality.', 'x^2 + 4x > 0'),
    S('Factor: \\(x(x + 4) > 0\\). Critical points: \\(x = 0\\) and \\(x = -4\\).', 'x(x + 4) > 0'),
    S(
      'Sign chart: product positive for \\(x < -4\\) and for \\(x > 0\\). (Between the roots the product is negative.)',
      'x < -4 \\quad\\text{or}\\quad x > 0'
    ),
    S('Therefore the solution set is \\(x < -4\\) or \\(x > 0\\).', 'x < -4 \\text{ or } x > 0'),
  ],
  'baulko2020-q13aii': [
    S(
      'Write the inequality \\(x - 1 < 2x - 2x^2\\). Bring every term to one side so that the right-hand side is zero.',
      'x - 1 - 2x + 2x^2 < 0'
    ),
    S('Simplify: \\(2x^2 - x - 1 < 0\\).', '2x^2 - x - 1 < 0'),
    S(
      'Factorise the quadratic. Look for two numbers that multiply to \\(2 \\times (-1) = -2\\) and add to \\(-1\\): namely \\(-2\\) and \\(1\\).',
      '2x^2 - 2x + x - 1 = (2x + 1)(x - 1)'
    ),
    S(
      'So \\((2x + 1)(x - 1) < 0\\). The roots are \\(x = -\\dfrac{1}{2}\\) and \\(x = 1\\).',
      'x = -\\dfrac{1}{2},\\; x = 1'
    ),
    S(
      'A product is negative strictly between the roots (opposite signs). Hence \\(-\\dfrac{1}{2} < x < 1\\).',
      '-\\dfrac{1}{2} < x < 1'
    ),
  ],
  'baulko2020-q13aiiv': [
    S('Start from \\(3x - 2 < 4x - x^2\\). Collect all terms on the left.', '3x - 2 - 4x + x^2 < 0'),
    S('Simplify: \\(x^2 - x - 2 < 0\\).', 'x^2 - x - 2 < 0'),
    S('Factorise: find factors of \\(-2\\) that add to \\(-1\\): \\((-2)\\) and \\(1\\).', '(x - 2)(x + 1) < 0'),
    S('Roots: \\(x = 2\\) and \\(x = -1\\).', 'x = -1,\\; x = 2'),
    S(
      'The quadratic (opening upwards) is negative between its roots. Solution: \\(-1 < x < 2\\).',
      '-1 < x < 2'
    ),
  ],

  // ── 2E graphs / intersections ───────────────────────────────
  'abb2020-q15b': [
    S(
      'Rewrite the equation as an intersection problem: solutions of \\(3\\sin x = \\dfrac{x^2}{5} - 3\\) are the \\(x\\)-coordinates where the graphs of \\(y = 3\\sin x\\) and \\(y = \\dfrac{x^2}{5} - 3\\) meet.',
      'y_1 = 3\\sin x,\\quad y_2 = \\dfrac{x^2}{5} - 3'
    ),
    S(
      'The sine graph oscillates between \\(-3\\) and \\(3\\) with period \\(2\\pi\\). The second graph is a parabola opening slowly upward with vertex \\((0, -3)\\).',
      'A_{\\sin} = 3;\\; V(0,-3)'
    ),
    S(
      'Near \\(x = 0\\) the parabola starts at the bottom of the sine band and rises. It can cross the sine wave a few times before rising above the range of sine.',
      '\\text{limited number of crossings}'
    ),
    S(
      'Sketching (or carefully counting intersections) shows four intersection points in total. Therefore the equation has 4 solutions.',
      '4 \\text{ solutions}'
    ),
  ],
  'cths2020-q22a': [
    S(
      'The equation \\(\\sin x = 1 - \\dfrac{x}{4}\\) is equivalent to finding where the curve \\(y = \\sin x\\) meets the straight line \\(y = 1 - \\dfrac{x}{4}\\).',
      'y = \\sin x \\quad\\text{and}\\quad y = 1 - \\dfrac{x}{4}'
    ),
    S(
      'The line has \\(y\\)-intercept \\(1\\) (so it starts at the same height as a maximum of sine) and a gentle negative slope of \\(-\\dfrac{1}{4}\\).',
      'm = -\\dfrac{1}{4},\\; (0,1)'
    ),
    S(
      'Because the line decreases slowly, it can cross the oscillating sine curve more than once: typically once on the way down from the first peak, again later, and once more before the line drops below \\(-1\\).',
      '\\text{multiple crossings}'
    ),
    S(
      'On the standard domain shown in the exam diagram, the line intersects \\(y = \\sin x\\) at exactly three points. That is why the equation has three solutions.',
      '3 \\text{ solutions}'
    ),
  ],
  'cths2020-q22b': [
    S(
      'From part (a), the solutions are the intersection points of \\(y = \\sin x\\) and \\(y = 1 - \\dfrac{x}{4}\\). We want the largest of these \\(x\\)-values.',
      '\\text{rightmost intersection}'
    ),
    S(
      'The line eventually falls below the range of sine (below \\(-1\\)), so only finitely many intersections exist. The last one occurs before the line drops too low.',
      '1 - \\dfrac{x}{4} > -1 \\implies x < 8'
    ),
    S(
      'Visually, the rightmost crossing lies a little to the left of \\(2\\pi \\approx 6.28\\) on a typical sketch.',
      'x \\approx 2\\pi'
    ),
    S(
      'Reading the graph carefully gives an approximate largest solution \\(x \\approx 5.8\\).',
      'x \\approx 5.8'
    ),
  ],
  'cths2020s-q22a': [
    S(
      'Rewrite \\(\\cos x = 1 - \\dfrac{x}{5}\\) as intersections of \\(y = \\cos x\\) and the line \\(y = 1 - \\dfrac{x}{5}\\).',
      'y = \\cos x,\\; y = 1 - \\dfrac{x}{5}'
    ),
    S(
      'The line passes through \\((0, 1)\\) (a maximum of cosine) with slope \\(-\\dfrac{1}{5}\\), so it decreases even more slowly than a slope of \\(-\\dfrac{1}{4}\\).',
      'm = -\\dfrac{1}{5}'
    ),
    S(
      'A slowly decreasing line starting at a cosine peak will cross the cosine wave several times before leaving the strip \\([-1, 1]\\).',
      '\\text{several crossings}'
    ),
    S('On the diagram used in the exam, there are exactly three intersection points, so the equation has three solutions.', '3 \\text{ solutions}'),
  ],
  'cths2020s-q22b': [
    S('The largest solution is the rightmost intersection of \\(y = \\cos x\\) and \\(y = 1 - \\dfrac{x}{5}\\).', '\\text{rightmost}'),
    S(
      'Because the slope is only \\(-\\dfrac{1}{5}\\), the line stays inside \\([-1,1]\\) a little longer than the previous similar problem.',
      '1 - \\dfrac{x}{5} \\ge -1 \\implies x \\le 10'
    ),
    S('From the graph, the final crossing is a little past \\(2\\pi\\).', 'x \\gtrsim 2\\pi'),
    S('A reasonable approximation is \\(x \\approx 6.5\\).', 'x \\approx 6.5'),
  ],
  'dane2020-q32b': [
    S(
      'Each real solution of \\(\\cos \\pi x = 1 - |x|\\) corresponds to an intersection of the graphs \\(y = \\cos \\pi x\\) and \\(y = 1 - |x|\\).',
      '\\text{count intersections}'
    ),
    S(
      'Note that \\(\\cos \\pi x\\) always lies between \\(-1\\) and \\(1\\). The inverted-V graph \\(y = 1 - |x|\\) satisfies \\(1 - |x| < -1\\) whenever \\(|x| > 2\\).',
      '|x| > 2 \\implies 1 - |x| < -1'
    ),
    S(
      'Therefore no intersections can occur for \\(|x| > 2\\). It is enough to count crossings on the interval \\([-2, 2]\\).',
      'x \\in [-2, 2]'
    ),
    S(
      'On \\([-2, 2]\\) the cosine wave (period \\(2\\)) and the inverted-V meet at five points (including the peak at the origin and two on each side).',
      '5 \\text{ solutions}'
    ),
  ],
  'dane2020s-q32b': [
    S('Solutions are intersections of \\(y = \\cos \\pi x\\) and \\(y = 1 - |x|\\).', '\\text{intersections}'),
    S('For \\(|x| > 2\\), \\(1 - |x| < -1\\), which is outside the range of cosine, so there are no solutions there.', '|x| > 2:\\; \\text{none}'),
    S('Restrict attention to \\([-2, 2]\\) and count the crossings carefully on a sketch.', 'x \\in [-2,2]'),
    S('There are five intersection points, so five real solutions.', '5 \\text{ solutions}'),
  ],

  // ── 2F reflections / derivatives ────────────────────────────
  'asc2020-q22a': [
    S(
      'The transformed graph is \\(y = -2f(x)\\). In coordinates, every point \\((x, y)\\) on the original graph is sent to \\((x, -2y)\\).',
      '(x, y) \\mapsto (x, -2y)'
    ),
    S(
      'The factor \\(-1\\) reflects the graph in the \\(x\\)-axis. The factor \\(2\\) then stretches it vertically by a factor of \\(2\\) (distances from the \\(x\\)-axis double).',
      '\\text{reflect in } x\\text{-axis, then }\\times 2'
    ),
    S(
      'Apply this to the marked point: \\((-1, 3) \\mapsto (-1, -2 \\times 3) = (-1, -6)\\).',
      '(-1, 3) \\to (-1, -6)'
    ),
    S(
      'So the image of \\((-1, 3)\\) is \\((-1, -6)\\), and the whole curve is an inverted, vertically stretched copy of \\(f\\).',
      '(-1, -6)'
    ),
  ],
  'bar2020-mc5': [
    S(
      'Reflection of a graph about the \\(y\\)-axis is obtained by replacing every occurrence of \\(x\\) in the equation by \\(-x\\). That is, the new function is \\(y = f(-x)\\).',
      'y = f(-x)'
    ),
    S('Substitute into \\(f(x) = x^2 - 5x + 1\\):', 'f(-x) = (-x)^2 - 5(-x) + 1'),
    S('Simplify: \\((-x)^2 = x^2\\) and \\(-5(-x) = 5x\\), so \\(f(-x) = x^2 + 5x + 1\\).', 'x^2 + 5x + 1'),
    S(
      'Notice only the odd-powered term changed sign. The new equation is \\(y = x^2 + 5x + 1\\).',
      'y = x^2 + 5x + 1'
    ),
  ],
  'bar2020-mc5v': [
    S('Reflection in the \\(y\\)-axis means form \\(y = f(-x)\\).', 'y = f(-x)'),
    S('With \\(f(x) = x^2 - 3x + 4\\):', 'f(-x) = (-x)^2 - 3(-x) + 4'),
    S('Simplify to \\(x^2 + 3x + 4\\).', 'x^2 + 3x + 4'),
    S('The image graph has equation \\(y = x^2 + 3x + 4\\).', 'y = x^2 + 3x + 4'),
  ],
  'cths2020-q24a': [
    S(
      'The derivative \\(f^{\prime}(x)\\) is zero at stationary points of \\(f\\). From the graph, these are at \\(x = -3\\) (local max), \\(x = -1\\) (local min), and \\(x = 2\\) (local max).',
      "f^{\prime}(-3) = f^{\prime}(-1) = f^{\prime}(2) = 0"
    ),
    S(
      'Where \\(f\\) is increasing, \\(f^{\prime} > 0\\); where \\(f\\) is decreasing, \\(f^{\prime} < 0\\).',
      "f^{\prime} > 0 \\iff f \\text{ increasing}"
    ),
    S(
      'Reading the graph: \\(f\\) increases on \\((-\\infty, -3)\\) (up to the first max), decreases on \\((-3, -1)\\), increases on \\((-1, 2)\\), then decreases on \\((2, \\infty)\\).',
      '\\text{inc / dec / inc / dec}'
    ),
    S(
      'Therefore \\(f^{\prime}(x) > 0\\) precisely on \\((-\\infty, -3) \\cup (-1, 2)\\).',
      '(-\\infty, -3) \\cup (-1, 2)'
    ),
  ],
  'cths2020-q24b': [
    S(
      'The graph of \\(y = f(-x)\\) is the reflection of \\(y = f(x)\\) in the \\(y\\)-axis. Every point \\((x, y)\\) maps to \\((-x, y)\\).',
      '(x, y) \\mapsto (-x, y)'
    ),
    S(
      'In particular, a feature at \\(x = a\\) on the original graph appears at \\(x = -a\\) on the reflected graph.',
      'a \\mapsto -a'
    ),
    S('The local maximum that was at \\(x = -3\\) therefore moves to \\(x = -(-3) = 3\\).', 'x = 3'),
    S(
      'Reflection in the \\(y\\)-axis does not turn a maximum into a minimum, so it remains a local maximum at \\(x = 3\\).',
      '\\text{local max at } x = 3'
    ),
  ],
  'cths2020s-q24a': [
    S(
      'Stationary points of \\(h\\) are at \\(x = -4\\) (local max), \\(x = -2\\) (local min), and \\(x = 1\\) (local max), so these are the zeros of \\(h^{\prime}\\).',
      "h^{\prime}(-4)=h^{\prime}(-2)=h^{\prime}(1)=0"
    ),
    S("\\(h^{\prime} > 0\\) on intervals where \\(h\\) is increasing.", "h^{\prime}>0 \\iff \\text{increasing}"),
    S(
      'From the description: increasing on \\((-\\infty, -4)\\) and on \\((-2, 1)\\); decreasing on \\((-4, -2)\\) and on \\((1, \\infty)\\).',
      '\\text{inc on }(-\\infty,-4)\\cup(-2,1)'
    ),
    S("Hence \\(h^{\prime}(x) > 0\\) for \\(x \\in (-\\infty, -4) \\cup (-2, 1)\\).", '(-\\infty,-4)\\cup(-2,1)'),
  ],
  'cths2020s-q24b': [
    S('The map \\(y = h(-x)\\) reflects the graph in the \\(y\\)-axis.', '(x,y)\\mapsto(-x,y)'),
    S('A local max at \\(x = -4\\) is sent to \\(x = 4\\).', '-4 \\mapsto 4'),
    S('The nature of the stationary point is preserved under this reflection.', '\\text{still a max}'),
    S('So the image has a local maximum at \\(x = 4\\).', '\\text{local max at } x = 4'),
  ],

  // ── 2G dilations ────────────────────────────────────────────
  'asc2020-q22b': [
    S(
      'We want the image of the point \\((-1, 3)\\) under \\(y = f\\!\\left(\\dfrac{x}{2} + 2\\right)\\). The \\(y\\)-coordinate of a point on \\(y = f(\\ldots)\\) equals \\(f(\\text{input})\\), so we need the input to equal the original \\(x\\)-coordinate \\(-1\\).',
      "\\dfrac{x}{2} + 2 = -1"
    ),
    S('Solve for the new \\(x\\): \\(\\dfrac{x}{2} = -3\\), so \\(x = -6\\).', 'x = -6'),
    S(
      'The \\(y\\)-value is unchanged because we still evaluate \\(f\\) at the same number \\(-1\\): \\(y = f(-1) = 3\\).',
      'y = 3'
    ),
    S(
      'Geometrically this is a horizontal dilation by factor \\(2\\) followed by a translation \\(4\\) units left. The image point is \\((-6, 3)\\).',
      '(-6, 3)'
    ),
  ],
  'asc2020-q22v': [
    S(
      'If \\((2, 5)\\) lies on \\(y = f(x)\\), then \\(f(2) = 5\\). For a point \\((x, 5)\\) to lie on \\(y = f(2x - 1)\\), we need \\(f(2x - 1) = 5 = f(2)\\), so the inputs match: \\(2x - 1 = 2\\).',
      '2x - 1 = 2'
    ),
    S('Solve: \\(2x = 3\\), hence \\(x = \\dfrac{3}{2}\\).', "x = \\dfrac{3}{2}"),
    S('The corresponding point is \\(\\left(\\dfrac{3}{2}, 5\\right)\\).', "\\left(\\dfrac{3}{2}, 5\\right)"),
    S(
      'Check: \\(f\\!\\left(2 \\cdot \\dfrac{3}{2} - 1\\right) = f(3 - 1) = f(2) = 5\\). Correct.',
      "\\left(\\dfrac{3}{2}, 5\\right)"
    ),
  ],

  // ── 2H combinations ─────────────────────────────────────────
  'abb2020-mc7': [
    S(
      'Original stationary point: \\((2, -3)\\), so \\(f(2) = -3\\) and \\(f^{\prime}(2) = 0\\). The new graph is \\(y = -f\\!\\left(\\dfrac{x}{2}\\right) - 5\\).',
      "f(2) = -3"
    ),
    S(
      'Horizontal effect: the input is \\(\\dfrac{x}{2}\\). Set \\(\\dfrac{x}{2} = 2\\) so we hit the old stationary input: \\(x = 4\\). (This is a horizontal stretch by factor \\(2\\).)',
      "\\dfrac{x}{2} = 2 \\implies x = 4"
    ),
    S(
      'Vertical effects: first form \\(-f(\\ldots)\\) (reflect in the \\(x\\)-axis), turning the old value \\(-3\\) into \\(+3\\); then subtract \\(5\\): \\(3 - 5 = -2\\).',
      'y = -(-3) - 5 = -2'
    ),
    S('Therefore a stationary point of the new graph is \\((4, -2)\\).', '(4, -2)'),
  ],
  'bar2020-mc10': [
    S(
      'Original turning point \\((6, 2)\\) means \\(f(6) = 2\\). New graph: \\(y = 3f(-2x + 4) + 2\\).',
      'f(6) = 2'
    ),
    S(
      'Match the input of \\(f\\) to \\(6\\): solve \\(-2x + 4 = 6\\).',
      '-2x + 4 = 6'
    ),
    S('Then \\(-2x = 2\\), so \\(x = -1\\).', 'x = -1'),
    S(
      'New \\(y\\)-coordinate: \\(3 \\cdot f(6) + 2 = 3 \\cdot 2 + 2 = 8\\). The image turning point is \\((-1, 8)\\).',
      '(-1, 8)'
    ),
  ],
  'bar2020-mc10v': [
    S('Original: \\(f(4) = 3\\). New: \\(y = 2f(-x + 1) + 5\\).', 'f(4) = 3'),
    S('Set the input equal to \\(4\\): \\(-x + 1 = 4\\).', '-x + 1 = 4'),
    S('Solve: \\(-x = 3\\), so \\(x = -3\\).', 'x = -3'),
    S('New height: \\(2 \\cdot 3 + 5 = 11\\). Image turning point: \\((-3, 11)\\).', '(-3, 11)'),
  ],
  'cths2020-mc9': [
    S(
      'Apply the transformations in the given order, starting from \\(y = f(x)\\).',
      'y = f(x)'
    ),
    S(
      'Translate left by \\(2\\) units: replace \\(x\\) by \\(x + 2\\) to get \\(y = f(x + 2)\\).',
      'y = f(x + 2)'
    ),
    S(
      'Horizontal dilation by a factor of \\(3\\) (stretch away from the \\(y\\)-axis): replace \\(x\\) by \\(\\dfrac{x}{3}\\). This gives \\(y = f\\!\\left(\\dfrac{x}{3} + 2\\right)\\).',
      "y = f\\!\\left(\\dfrac{x}{3} + 2\\right)"
    ),
    S(
      'Finally translate down by \\(4\\): subtract \\(4\\). The equation is \\(y = f\\!\\left(\\dfrac{x}{3} + 2\\right) - 4\\).',
      "y = f\\!\\left(\\dfrac{x}{3} + 2\\right) - 4"
    ),
  ],
  'cths2020s-mc9': [
    S('Start with \\(y = f(x)\\) and apply transforms in order.', 'y = f(x)'),
    S('Translate right by \\(3\\): \\(y = f(x - 3)\\).', 'y = f(x - 3)'),
    S(
      'Horizontal dilation by factor \\(2\\): replace \\(x\\) by \\(\\dfrac{x}{2}\\) to get \\(y = f\\!\\left(\\dfrac{x}{2} - 3\\right)\\).',
      "y = f\\!\\left(\\dfrac{x}{2} - 3\\right)"
    ),
    S('Translate up by \\(5\\): add \\(5\\). Final equation: \\(y = f\\!\\left(\\dfrac{x}{2} - 3\\right) + 5\\).', "y = f\\!\\left(\\dfrac{x}{2} - 3\\right) + 5"),
  ],
  'car2020-q32': [
    S(
      'The image is a downward-opening parabola with vertex \\((-1, -3)\\). Using vertex form based on \\(f(x) = x^2\\): \\(g(x) = k(x + 1)^2 - 3\\) with \\(k < 0\\).',
      'g(x) = k(x + 1)^2 - 3'
    ),
    S(
      'It also passes through the \\(y\\)-intercept \\((0, -5)\\). Substitute \\(x = 0\\): \\(g(0) = k(1)^2 - 3 = -5\\).',
      'k - 3 = -5'
    ),
    S('Solve: \\(k = -2\\).', 'k = -2'),
    S(
      'Therefore \\(g(x) = -2(x + 1)^2 - 3\\), which is the same as \\(g(x) = -2f(x + 1) - 3\\).',
      'g(x) = -2(x + 1)^2 - 3'
    ),
  ],
  'car2020s-q32': [
    S(
      'Vertex at \\((2, -4)\\) suggests \\(g(x) = k(x - 2)^2 - 4\\) (or equivalently \\(g(x) = k f(x - 2) - 4\\) with \\(f(x) = x^2\\)).',
      'g(x) = k(x - 2)^2 - 4'
    ),
    S('Use the given point \\((0, -8)\\): \\(k(0 - 2)^2 - 4 = -8\\).', '4k - 4 = -8'),
    S('Then \\(4k = -4\\), so \\(k = -1\\).', 'k = -1'),
    S('Hence \\(g(x) = -(x - 2)^2 - 4\\).', 'g(x) = -(x - 2)^2 - 4'),
  ],
  'dane2020-q30': [
    S(
      'Vertex moves from \\((0, 0)\\) on \\(y = x^2\\) to \\((-1, -3)\\): translate left \\(1\\) and down \\(3\\). With a vertical scale factor \\(k\\): \\(g(x) = k f(x + 1) - 3\\).',
      'g(x) = k f(x + 1) - 3'
    ),
    S('The graph passes through \\((0, -5)\\). Since \\(f(1) = 1^2 = 1\\):', '-5 = k\\cdot 1 - 3'),
    S('Solve: \\(k = -2\\) (negative, so the parabola opens downward, as required).', 'k = -2'),
    S('Therefore \\(g(x) = -2f(x + 1) - 3\\).', 'g(x) = -2f(x + 1) - 3'),
  ],
  'dane2020s-q30': [
    S(
      'Vertex \\((2, -4)\\): right \\(2\\), down \\(4\\). Form: \\(g(x) = k f(x - 2) - 4\\).',
      'g(x) = k f(x - 2) - 4'
    ),
    S('Point \\((0, -8)\\) with \\(f(-2) = 4\\): \\(-8 = 4k - 4\\).', '4k = -4'),
    S('So \\(k = -1\\).', 'k = -1'),
    S('Final answer: \\(g(x) = -f(x - 2) - 4\\).', 'g(x) = -f(x - 2) - 4'),
  ],
  'fortst2020-q10f': [
    S(
      'The transformed graph is \\(y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)\\). Work from the inside of the composition.',
      "y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)"
    ),
    S(
      'The factor \\(2\\) multiplying \\(x\\) is a horizontal dilation of factor \\(\\dfrac{1}{2}\\) (compression toward the \\(y\\)-axis): inputs are halved in spacing.',
      '\\text{horizontal dilation, factor } \\tfrac{1}{2}'
    ),
    S(
      'The \\(-\\dfrac{1}{4}\\) inside produces a horizontal translation of \\(\\dfrac{1}{4}\\) unit to the right (opposite sign to the number added to \\(x\\) after factoring).',
      '\\text{translate } \\tfrac{1}{4} \\text{ right}'
    ),
    S(
      'Order: the dilation (closest to the variable inside the innermost brackets) is applied first, then the translation. So: horizontal dilation by \\(\\dfrac{1}{2}\\), then translation \\(\\dfrac{1}{4}\\) right.',
      '\\text{dilate }\\tfrac12\\text{, then right }\\tfrac14'
    ),
  ],
  'fortst2020s-q10f': [
    S(
      'Target: \\(y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)\\).',
      "f\\!\\left(2\\left(x-\\dfrac14\\right)\\right)"
    ),
    S('Coefficient \\(2\\) of \\(x\\) ⇒ horizontal dilation by factor \\(\\dfrac{1}{2}\\).', '\\text{h-dilate }\\tfrac12'),
    S('Then the shift \\(x \\mapsto x - \\dfrac{1}{4}\\) ⇒ translate \\(\\dfrac{1}{4}\\) to the right.', '\\text{right }\\tfrac14'),
    S('Apply dilation first (inner), then translation.', '\\text{dilate then translate}'),
  ],

  // ── 2I trig ─────────────────────────────────────────────────
  'abb2020-mc4': [
    S(
      'A cosine graph \\(y = A\\cos(bx + c)\\) has period \\(T = \\dfrac{2\\pi}{|b|}\\). The amplitude \\(A\\) and phase shift do not affect the period.',
      "T = \\dfrac{2\\pi}{|b|}"
    ),
    S(
      'In \\(y = -3\\cos\\!\\left(2x - \\dfrac{\\pi}{4}\\right)\\) the coefficient of \\(x\\) is \\(b = 2\\).',
      'b = 2'
    ),
    S('Compute the period: \\(T = \\dfrac{2\\pi}{2} = \\pi\\).', 'T = \\pi'),
    S(
      'The leading \\(-3\\) only reflects and stretches vertically; it does not change how often the graph repeats. Answer: period \\(\\pi\\).',
      'T = \\pi'
    ),
  ],
  'abb2020-q16bi': [
    S(
      'Sophie’s model is \\(D = a\\sin(nt + \\phi) + c\\). For any sine (or cosine) model of this form, the amplitude is half the difference between the greatest and least values of \\(D\\).',
      "a = \\dfrac{D_{\\max} - D_{\\min}}{2}"
    ),
    S('Here the maximum depth is \\(5\\,\\text{m}\\) and the minimum depth is \\(1\\,\\text{m}\\).', 'D_{\\max} = 5,\\; D_{\\min} = 1'),
    S('Substitute: \\(a = \\dfrac{5 - 1}{2} = \\dfrac{4}{2} = 2\\).', 'a = 2'),
    S(
      'So the river depth oscillates \\(2\\,\\text{m}\\) above and below its mean: amplitude \\(a = 2\\).',
      'a = 2'
    ),
  ],
  'abb2020-q16bii': [
    S(
      'In the model \\(D = a\\sin(nt + \\phi) + c\\), the constant \\(c\\) shifts the sine wave vertically. It is the centre line (mean depth) halfway between the maximum and minimum.',
      "c = \\dfrac{D_{\\max} + D_{\\min}}{2}"
    ),
    S(
      'Why? The sine term ranges between \\(-a\\) and \\(a\\), so \\(D\\) ranges between \\(c - a\\) and \\(c + a\\). The midpoint of that interval is exactly \\(c\\).',
      'D \\in [c - a,\\, c + a]'
    ),
    S('With max \\(5\\) and min \\(1\\): \\(c = \\dfrac{5 + 1}{2} = 3\\).', 'c = 3'),
    S(
      'Check consistency with amplitude: \\(a = 2\\) gives range \\([3 - 2,\\, 3 + 2] = [1, 5]\\), matching the given depths. So \\(c = 3\\).',
      'c = 3'
    ),
  ],
  'abb2020-q16biii': [
    S(
      'For \\(D = a\\sin(nt + \\phi) + c\\) with \\(n > 0\\), one full cycle (period) takes time \\(T = \\dfrac{2\\pi}{n}\\).',
      "T = \\dfrac{2\\pi}{n}"
    ),
    S(
      '“Successive maximum depths” are one period apart. The problem states this time is \\(12\\) hours, so \\(T = 12\\).',
      'T = 12'
    ),
    S('Set up the equation \\(\\dfrac{2\\pi}{n} = 12\\).', '\\dfrac{2\\pi}{n} = 12'),
    S('Solve: \\(n = \\dfrac{2\\pi}{12} = \\dfrac{\\pi}{6}\\).', "n = \\dfrac{\\pi}{6}"),
    S(
      'Interpretation: the argument of sine increases by \\(2\\pi\\) when \\(t\\) increases by \\(12\\), since \\(n \\cdot 12 = \\dfrac{\\pi}{6} \\cdot 12 = 2\\pi\\).',
      "n = \\dfrac{\\pi}{6}"
    ),
  ],
  'car2020-q33b': [
    S('Count intersections of \\(y = \\cos \\pi x\\) and \\(y = 1 - |x|\\).', '\\text{intersections}'),
    S(
      'Cosine stays in \\([-1, 1]\\). The V-shape \\(1 - |x|\\) drops below \\(-1\\) when \\(|x| > 2\\), so no intersections exist outside \\([-2, 2]\\).',
      '|x| > 2:\\; \\text{none}'
    ),
    S('On \\([-2, 2]\\), period-\\(2\\) cosine meets the inverted-V five times.', '5 \\text{ crossings}'),
    S('Hence the equation has 5 real solutions.', '5 \\text{ solutions}'),
  ],
  'car2020s-q33b': [
    S('Count intersections of \\(y = \\sin \\pi x\\) and \\(y = 1 - |x|\\).', '\\text{intersections}'),
    S(
      'Sine has period \\(2\\) and range \\([-1,1]\\). The inverted-V peaks at \\((0,1)\\) and is below \\(-1\\) for \\(|x| > 2\\).',
      '|x|\\le 2 \\text{ only}'
    ),
    S(
      'Unlike cosine (which has a peak at each even integer), sine is zero at integers. The sketches meet at the origin and at two symmetric side points only.',
      '3 \\text{ crossings}'
    ),
    S('Therefore there are 3 real solutions.', '3 \\text{ solutions}'),
  ],
  'cra2023-q29a': [
    S(
      'Period of \\(y = \\cos x\\) is \\(2\\pi\\). Multiplying by the constant \\(2\\) is a vertical stretch; vertical stretches do not change period.',
      'T(2\\cos x) = 2\\pi'
    ),
    S(
      'The cotangent function \\(y = \\cot x = \\dfrac{\\cos x}{\\sin x}\\) has vertical asymptotes at integer multiples of \\(\\pi\\) and repeats every \\(\\pi\\).',
      'T(\\cot x) = \\pi'
    ),
    S('So the periods are \\(2\\pi\\) for \\(2\\cos x\\) and \\(\\pi\\) for \\(\\cot x\\).', '2\\pi \\text{ and } \\pi'),
    S('This matches what you see on a diagram over \\([0, 2\\pi]\\): cosine completes one full wave, while cot completes two branches.', '2\\pi,\\;\\pi'),
  ],
  'cra2023s-q29a': [
    S('Period of sine is \\(2\\pi\\); the factor \\(2\\) is only a vertical stretch, so \\(y = 2\\sin x\\) still has period \\(2\\pi\\).', 'T(2\\sin x)=2\\pi'),
    S('Tangent has period \\(\\pi\\) (asymptotes at \\(x = \\dfrac{\\pi}{2} + k\\pi\\)).', 'T(\\tan x)=\\pi'),
    S('Therefore the periods are \\(2\\pi\\) and \\(\\pi\\) respectively.', '2\\pi \\text{ and } \\pi'),
    S('On \\([0, 2\\pi]\\) you see one full sine wave and two tangent branches.', '2\\pi,\\;\\pi'),
  ],
  'cths2020-mc7': [
    S(
      'Write \\(g(x) = 2\\cos\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{3}\\right)\\). Amplitude is the absolute value of the coefficient of cosine: \\(|2| = 2\\).',
      'A = 2'
    ),
    S(
      'Period: with \\(b = \\dfrac{1}{2}\\), \\(T = \\dfrac{2\\pi}{|b|} = \\dfrac{2\\pi}{1/2} = 4\\pi\\).',
      'T = 4\\pi'
    ),
    S(
      'Phase shift: rewrite as \\(2\\cos\\dfrac{1}{2}\\left(x + \\dfrac{2\\pi}{3}\\right)\\). This is a shift of \\(\\dfrac{2\\pi}{3}\\) to the left (opposite the sign inside).',
      '\\text{left by }\\dfrac{2\\pi}{3}'
    ),
    S(
      'So the correct description is: amplitude \\(2\\), period \\(4\\pi\\), shifted left by \\(\\dfrac{2\\pi}{3}\\).',
      'A=2,\\; T=4\\pi,\\; \\text{left }\\dfrac{2\\pi}{3}'
    ),
  ],
  'cths2020s-mc7': [
    S('For \\(g(x) = 3\\cos\\!\\left(\\dfrac{x}{3} + \\dfrac{\\pi}{4}\\right)\\), amplitude is \\(3\\).', 'A = 3'),
    S('With \\(b = \\dfrac{1}{3}\\): period \\(T = \\dfrac{2\\pi}{1/3} = 6\\pi\\).', 'T = 6\\pi'),
    S(
      'Factor: \\(3\\cos\\dfrac{1}{3}\\left(x + \\dfrac{3\\pi}{4}\\right)\\) ⇒ phase shift left by \\(\\dfrac{3\\pi}{4}\\).',
      '\\text{left }\\dfrac{3\\pi}{4}'
    ),
    S('Description: amplitude \\(3\\), period \\(6\\pi\\), shifted left by \\(\\dfrac{3\\pi}{4}\\).', 'A=3,\\; T=6\\pi,\\; \\text{left }\\dfrac{3\\pi}{4}'),
  ],
  'dane2020-mc8': [
    S(
      'For \\(f(x) = \\tfrac{1}{2}\\sin 4x\\): amplitude \\(A_f = \\dfrac{1}{2}\\), period \\(T_f = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}\\).',
      "A_f = \\tfrac12,\\; T_f = \\tfrac{\\pi}{2}"
    ),
    S(
      'For \\(g(x) = \\sin 2x\\): amplitude \\(A_g = 1\\), period \\(T_g = \\dfrac{2\\pi}{2} = \\pi\\).',
      'A_g = 1,\\; T_g = \\pi'
    ),
    S('Compare amplitudes: \\(A_g / A_f = 1 / \\tfrac{1}{2} = 2\\) (doubled).', 'A \\times 2'),
    S(
      'Compare periods: \\(T_g / T_f = \\pi / \\tfrac{\\pi}{2} = 2\\) (also doubled). So both amplitude and period are doubled.',
      'A \\times 2\\text{ and } T \\times 2'
    ),
  ],
  'dane2020s-mc8': [
    S(
      '\\(f(x) = \\tfrac{1}{2}\\sin 6x\\): amplitude \\(\\tfrac{1}{2}\\), period \\(\\dfrac{2\\pi}{6} = \\dfrac{\\pi}{3}\\).',
      "A_f=\\tfrac12,\\; T_f=\\tfrac{\\pi}{3}"
    ),
    S(
      '\\(g(x) = \\sin 3x\\): amplitude \\(1\\), period \\(\\dfrac{2\\pi}{3}\\).',
      "A_g=1,\\; T_g=\\tfrac{2\\pi}{3}"
    ),
    S('Amplitude ratio: \\(1 / \\tfrac{1}{2} = 2\\) (doubled).', 'A \\times 2'),
    S(
      'Period ratio: \\(\\dfrac{2\\pi}{3} \\div \\dfrac{\\pi}{3} = 2\\) (doubled). Both amplitude and period double.',
      'A \\times 2\\text{ and } T \\times 2'
    ),
  ],
};

async function main() {
  const ids = Object.keys(STEPS);
  console.log('Enriching', ids.length, 'MCQs');
  let n = 0;
  for (const id of ids) {
    const ref = db.collection('questions').doc(id);
    const snap = await ref.get();
    if (!snap.exists) {
      console.warn('missing', id);
      continue;
    }
    if (snap.data().origin === 'teacher') {
      console.warn('skip teacher', id);
      continue;
    }
    const steps = STEPS[id];
    if (steps.length < 4) throw new Error(`${id} needs ≥4 steps`);
    await ref.set(
      {
        solutionSteps: steps,
        isNew: true,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    n++;
  }
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('Updated', n, 'docs; version', ver);

  // spot-check
  const d = (await db.collection('questions').doc('abb2020-q16bii').get()).data();
  console.log('\nabb2020-q16bii now has', d.solutionSteps.length, 'steps:');
  d.solutionSteps.forEach((s, i) => console.log(i + 1 + '.', s.explanation.slice(0, 90) + '...'));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
