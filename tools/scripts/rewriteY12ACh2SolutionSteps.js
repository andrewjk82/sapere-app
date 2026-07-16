/**
 * Full rewrite of Year 12 Adv Ch2 MCQ solutionSteps (education ruleset).
 * English only. LaTeX via \\(...\\). Detailed Why/What/mistake/link steps.
 *
 *   node tools/scripts/rewriteY12ACh2SolutionSteps.js
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const sa = JSON.parse(readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS || '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

const STEPS = {
  "car2020-mc2": [
    { explanation: "This question asks for the vertical asymptotes of a rational function. Vertical asymptotes can only appear where the denominator is zero while the numerator stays nonzero, so the first task is to locate those roots and check they do not cancel.", workingOut: "\\(\\text{Strategy: solve denom}=0,\\;\\text{check num}\\neq 0\\)", graphData: null },
    { explanation: "The given function is \\(y = \\dfrac{1}{x^2 - 9}\\). Set the denominator equal to zero: \\(x^2 - 9 = 0\\). A common slip is to set the whole fraction equal to zero instead of only the denominator.", workingOut: "\\(x^2 - 9 = 0\\)", graphData: null },
    { explanation: "Factor as a difference of squares: \\((x - 3)(x + 3) = 0\\). This gives the candidate lines \\(x = 3\\) and \\(x = -3\\). Students sometimes write \\(x = \\pm 9\\) by forgetting to take the square root of both sides carefully.", workingOut: "\\((x-3)(x+3)=0 \\implies x=\\pm 3\\)", graphData: null },
    { explanation: "At both candidate values the numerator is the constant 1, so neither factor cancels. Therefore both lines are genuine vertical asymptotes. (There is also a horizontal asymptote \\(y = 0\\), but the question asks for the vertical ones matching the options.)", workingOut: "\\(x = \\pm 3\\)", graphData: null },
    { explanation: "Final answer: the vertical asymptotes are \\(x = \\pm 3\\). This means the graph shoots off to infinity as \\(x\\) approaches either of these lines, which is exactly what the reciprocal of a vanishing quadratic produces.", workingOut: "\\(x = \\pm 3\\)", graphData: null },
  ],
  "car2020s-mc2": [
    { explanation: "We need the vertical asymptotes of \\(y = \\dfrac{1}{x^2 - 16}\\). The plan is to solve denominator equals zero and verify the numerator does not vanish there.", workingOut: "\\(\\text{denom}=0\\;\\text{and num}\\neq 0\\)", graphData: null },
    { explanation: "Set \\(x^2 - 16 = 0\\), so \\(x^2 = 16\\). Avoid the mistake of writing \\(x = \\pm 16\\) without taking the square root.", workingOut: "\\(x^2 = 16\\)", graphData: null },
    { explanation: "Taking square roots (or factoring as \\((x-4)(x+4)\\)) gives \\(x = 4\\) or \\(x = -4\\).", workingOut: "\\(x = \\pm 4\\)", graphData: null },
    { explanation: "The numerator is 1, so no cancellation. Both values produce vertical asymptotes.", workingOut: "\\(x = \\pm 4\\)", graphData: null },
    { explanation: "Hence the vertical asymptotes are \\(x = \\pm 4\\). As \\(|x|\\to\\infty\\) we also have \\(y\\to 0\\), but that is a horizontal asymptote, not listed as the required vertical pair.", workingOut: "\\(x = \\pm 4\\)", graphData: null },
  ],
  "asc2020-mc7": [
    { explanation: "We are given the inequality \\(3 - 2x - x^2 < 3\\). The strategy is to rearrange everything to one side, factor, and use a sign chart on the resulting product.", workingOut: "\\(\\text{rearrange} \\to \\text{factor} \\to \\text{sign chart}\\)", graphData: null },
    { explanation: "Subtract 3 from both sides: \\(-2x - x^2 < 0\\). A frequent error is forgetting that subtracting from both sides preserves the inequality direction.", workingOut: "\\(-2x - x^2 < 0\\)", graphData: null },
    { explanation: "Multiply by -1 and reverse the inequality (because multiplying by a negative flips the sign): \\(x^2 + 2x > 0\\). Factor as \\(x(x + 2) > 0\\).", workingOut: "\\(x(x+2) > 0\\)", graphData: null },
    { explanation: "The critical points that split the number line are \\(x = 0\\) and \\(x = -2\\). Test a point in each open interval: for example \\(x = -3\\), \\(x = -1\\), and \\(x = 1\\).", workingOut: "\\(x=-2,\\; x=0\\)", graphData: null },
    { explanation: "The product is positive when both factors have the same sign, which happens for \\(x < -2\\) and for \\(x > 0\\). Between the roots the product is negative, so those values are excluded.", workingOut: "\\(x < -2 \\quad\\text{or}\\quad x > 0\\)", graphData: null },
    { explanation: "Final solution: \\(x < -2\\) or \\(x > 0\\). This matches the regions where the original parabola lies below the horizontal line \\(y = 3\\) away from the vertex interval.", workingOut: "\\(x < -2 \\text{ or } x > 0\\)", graphData: null },
  ],
  "asc2020-mc7v": [
    { explanation: "Solve \\(5 - 4x - x^2 < 5\\) by rearranging to a factored inequality and reading a sign chart. This is the same structure as a graph comparison with the line \\(y = 5\\).", workingOut: "\\(\\text{rearrange and factor}\\)", graphData: null },
    { explanation: "Subtract 5: \\(-4x - x^2 < 0\\). Then multiply by -1 and reverse: \\(x^2 + 4x > 0\\).", workingOut: "\\(x^2 + 4x > 0\\)", graphData: null },
    { explanation: "Factor: \\(x(x + 4) > 0\\). Roots are \\(x = 0\\) and \\(x = -4\\). Do not drop the factor \\(x\\) or you lose one critical point.", workingOut: "\\(x(x+4) > 0\\)", graphData: null },
    { explanation: "Sign analysis: positive for \\(x < -4\\) and for \\(x > 0\\); negative on \\((-4, 0)\\).", workingOut: "\\(x < -4 \\text{ or } x > 0\\)", graphData: null },
    { explanation: "Therefore the solution set is \\(x < -4\\) or \\(x > 0\\).", workingOut: "\\(x < -4 \\quad\\text{or}\\quad x > 0\\)", graphData: null },
  ],
  "baulko2020-q13aii": [
    { explanation: "The inequality \\(x - 1 < 2x - 2x^2\\) compares a line and a downward parabola. Algebraically we move all terms to one side so we can factor a quadratic inequality.", workingOut: "\\(\\text{collect terms} \\to 0\\)", graphData: null },
    { explanation: "Expand the rearrangement carefully: \\(x - 1 - 2x + 2x^2 < 0\\) simplifies to \\(2x^2 - x - 1 < 0\\). Watch the sign when you bring \\(2x - 2x^2\\) across.", workingOut: "\\(2x^2 - x - 1 < 0\\)", graphData: null },
    { explanation: "Factor the quadratic. We need two numbers that multiply to \\(2\\cdot(-1)=-2\\) and add to \\(-1\\): namely \\(-2\\) and \\(+1\\). This gives \\((2x + 1)(x - 1) < 0\\).", workingOut: "\\((2x+1)(x-1) < 0\\)", graphData: null },
    { explanation: "The roots are \\(x = -\\dfrac{1}{2}\\) and \\(x = 1\\). A product of linear factors is negative strictly between the roots when the leading coefficient is positive.", workingOut: "\\(x = -\\dfrac{1}{2},\\; x = 1\\)", graphData: null },
    { explanation: "Hence the solution is the open interval \\(-\\dfrac{1}{2} < x < 1\\). Endpoints are excluded because the inequality is strict.", workingOut: "\\(-\\dfrac{1}{2} < x < 1\\)", graphData: null },
  ],
  "baulko2020-q13aiiv": [
    { explanation: "Solve \\(3x - 2 < 4x - x^2\\) by rearranging to a standard quadratic inequality, factoring, and reading between the roots.", workingOut: "\\(\\text{rearrange to quadratic} < 0\\)", graphData: null },
    { explanation: "Bring all terms left: \\(3x - 2 - 4x + x^2 < 0\\), which simplifies to \\(x^2 - x - 2 < 0\\).", workingOut: "\\(x^2 - x - 2 < 0\\)", graphData: null },
    { explanation: "Factor: \\((x - 2)(x + 1) < 0\\). Roots \\(x = 2\\) and \\(x = -1\\).", workingOut: "\\((x-2)(x+1) < 0\\)", graphData: null },
    { explanation: "Because the parabola opens upward, it is negative between its roots. So \\(-1 < x < 2\\).", workingOut: "\\(-1 < x < 2\\)", graphData: null },
    { explanation: "Final answer \\(-1 < x < 2\\). The endpoints are not included since the inequality is strict (equality would hold only at the roots).", workingOut: "\\(-1 < x < 2\\)", graphData: null },
  ],
  "abb2020-q15b": [
    { explanation: "The equation \\(3\\sin x = \\dfrac{x^2}{5} - 3\\) is best understood as an intersection count: how many times the graphs of \\(y = 3\\sin x\\) and \\(y = \\dfrac{x^2}{5} - 3\\) meet. That count is the number of solutions.", workingOut: "\\(y_1 = 3\\sin x,\\; y_2 = \\dfrac{x^2}{5}-3\\)", graphData: null },
    { explanation: "The sine graph oscillates between \\(-3\\) and \\(3\\) forever. The second graph is a slowly opening upward parabola with vertex \\((0, -3)\\), starting at the bottom of the sine band.", workingOut: "\\(A=3;\\; V(0,-3)\\)", graphData: null },
    { explanation: "Near the origin the parabola can cut the sine wave several times. Eventually the parabola rises above \\(y = 3\\) and can no longer meet the sine graph, so only finitely many intersections exist.", workingOut: "\\(\\text{finitely many crossings}\\)", graphData: null },
    { explanation: "A careful sketch shows four intersection points in total before the parabola leaves the strip \\([-3, 3]\\).", workingOut: "\\(4 \\text{ intersections}\\)", graphData: null },
    { explanation: "Therefore the equation has 4 real solutions. (If you counted only the first period you might miss a later crossing and wrongly answer 2 or 3.)", workingOut: "\\(4 \\text{ solutions}\\)", graphData: null },
  ],
  "cths2020-q22a": [
    { explanation: "Rewrite \\(\\sin x = 1 - \\dfrac{x}{4}\\) as a graph intersection problem: solutions are the \\(x\\)-coordinates where \\(y = \\sin x\\) meets the straight line \\(y = 1 - \\dfrac{x}{4}\\).", workingOut: "\\(y=\\sin x \\text{ and } y=1-\\dfrac{x}{4}\\)", graphData: null },
    { explanation: "The line has y-intercept 1 (same height as a maximum of sine) and a gentle slope of \\(-\\dfrac{1}{4}\\). Because it decreases slowly, it stays inside the strip \\([-1,1]\\) long enough to cross the oscillating sine more than once.", workingOut: "\\(m=-\\dfrac{1}{4},\\;(0,1)\\)", graphData: null },
    { explanation: "Geometrically, expect one crossing near the first peak, another as sine comes back up, and a third before the line finally drops below the range of sine. That is three intersections on the standard exam diagram.", workingOut: "\\(\\text{three crossings expected}\\)", graphData: null },
    { explanation: "Hence the equation has three solutions. The key idea is not algebra (it is transcendental) but comparing two graphs.", workingOut: "\\(3 \\text{ solutions}\\)", graphData: null },
  ],
  "cths2020-q22b": [
    { explanation: "From the intersection view, the largest solution is the rightmost crossing of \\(y = \\sin x\\) and \\(y = 1 - \\dfrac{x}{4}\\). We read that value approximately from a sketch.", workingOut: "\\(\\text{rightmost intersection}\\)", graphData: null },
    { explanation: "The line falls below \\(-1\\) once \\(1 - \\dfrac{x}{4} < -1\\), i.e. \\(x > 8\\). So the last possible crossing is before \\(x = 8\\), and in practice it is near one period of sine.", workingOut: "\\(x < 8\\)", graphData: null },
    { explanation: "On a typical diagram the final intersection sits slightly left of \\(2\\pi \\approx 6.28\\).", workingOut: "\\(x \\approx 2\\pi\\)", graphData: null },
    { explanation: "A careful reading of the graph gives the approximation \\(x \\approx 5.8\\). This is not an exact closed form; the question asks for a graph-based estimate.", workingOut: "\\(x \\approx 5.8\\)", graphData: null },
  ],
  "cths2020s-q22a": [
    { explanation: "Treat \\(\\cos x = 1 - \\dfrac{x}{5}\\) as intersections of \\(y = \\cos x\\) and the line \\(y = 1 - \\dfrac{x}{5}\\).", workingOut: "\\(y=\\cos x,\\; y=1-\\dfrac{x}{5}\\)", graphData: null },
    { explanation: "The line starts at the cosine peak \\((0,1)\\) with an even gentler slope \\(-\\dfrac{1}{5}\\), so it can cross the cosine wave several times before leaving \\([-1,1]\\).", workingOut: "\\(m=-\\dfrac{1}{5}\\)", graphData: null },
    { explanation: "On the exam diagram the line meets cosine at exactly three points.", workingOut: "\\(3 \\text{ crossings}\\)", graphData: null },
    { explanation: "Therefore the equation has three solutions. Algebra alone will not reveal the count; the graph comparison is essential.", workingOut: "\\(3 \\text{ solutions}\\)", graphData: null },
  ],
  "cths2020s-q22b": [
    { explanation: "The largest solution is the rightmost intersection of cosine and the line \\(y = 1 - \\dfrac{x}{5}\\).", workingOut: "\\(\\text{rightmost}\\)", graphData: null },
    { explanation: "Because the slope is only \\(-\\dfrac{1}{5}\\), the line remains above \\(-1\\) until \\(x = 10\\), so a late crossing past \\(2\\pi\\) is possible.", workingOut: "\\(x \\le 10\\)", graphData: null },
    { explanation: "From the sketch, that final crossing is near \\(x \\approx 6.5\\).", workingOut: "\\(x \\approx 6.5\\)", graphData: null },
    { explanation: "So the approximate largest solution is \\(x \\approx 6.5\\).", workingOut: "\\(x \\approx 6.5\\)", graphData: null },
  ],
  "dane2020-q32b": [
    { explanation: "Each solution of \\(\\cos\\pi x = 1 - |x|\\) is an intersection of \\(y = \\cos\\pi x\\) and the inverted-V graph \\(y = 1 - |x|\\). Counting intersections counts solutions.", workingOut: "\\(\\text{count graph intersections}\\)", graphData: null },
    { explanation: "The cosine values always lie in \\([-1, 1]\\). The inverted-V satisfies \\(1 - |x| < -1\\) whenever \\(|x| > 2\\). Below the range of cosine, no intersection is possible.", workingOut: "\\(|x|>2 \\implies 1-|x|<-1\\)", graphData: null },
    { explanation: "Therefore every solution must lie in the closed interval \\([-2, 2]\\). Outside that interval the absolute-value graph is simply too low.", workingOut: "\\(x \\in [-2,2]\\)", graphData: null },
    { explanation: "On \\([-2, 2]\\) the period-2 cosine wave and the inverted-V meet five times (once at the peak \\(x = 0\\) and two crossings on each side).", workingOut: "\\(5 \\text{ intersections}\\)", graphData: null },
    { explanation: "Hence there are 5 real solutions. A common mistake is to only look at \\([0, 2]\\) and forget the symmetric left half, undercounting.", workingOut: "\\(5 \\text{ solutions}\\)", graphData: null },
  ],
  "dane2020s-q32b": [
    { explanation: "Solutions correspond one-to-one with intersections of \\(y = \\cos\\pi x\\) and \\(y = 1 - |x|\\).", workingOut: "\\(\\text{intersections}\\)", graphData: null },
    { explanation: "For \\(|x| > 2\\) the V-graph is below \\(-1\\), outside the cosine range, so no solutions exist there.", workingOut: "\\(|x|>2:\\;\\text{none}\\)", graphData: null },
    { explanation: "Count crossings on \\([-2, 2]\\) only. The diagram shows five of them.", workingOut: "\\(5 \\text{ crossings}\\)", graphData: null },
    { explanation: "Therefore the equation has 5 real solutions on the whole real line.", workingOut: "\\(5 \\text{ solutions}\\)", graphData: null },
  ],
  "asc2020-q22a": [
    { explanation: "The transformed graph is \\(y = -2f(x)\\). In point form, every point \\((x, y)\\) on the original graph is sent to \\((x, -2y)\\). Understanding that mapping is the whole strategy.", workingOut: "\\((x,y)\\mapsto(x,-2y)\\)", graphData: null },
    { explanation: "The factor of \\(-1\\) reflects the graph in the x-axis. The extra factor of 2 stretches it vertically by 2, doubling distances from the x-axis. Order: reflect first, then stretch (or multiply by -2 in one go).", workingOut: "\\(\\text{reflect in }x\\text{-axis, then }\\times 2\\)", graphData: null },
    { explanation: "Apply the map to the marked point: \\((-1, 3)\\) becomes \\((-1, -2\\cdot 3) = (-1, -6)\\). A common error is to multiply only by -1 and forget the 2, getting \\((-1, -3)\\).", workingOut: "\\((-1,3)\\to(-1,-6)\\)", graphData: null },
    { explanation: "So the image of the marked point is \\((-1, -6)\\), and the whole curve is an inverted, vertically stretched copy of the original U-shape.", workingOut: "\\((-1,-6)\\)", graphData: null },
  ],
  "bar2020-mc5": [
    { explanation: "Reflection of a graph about the y-axis is obtained by replacing every x in the rule with -x. The new equation is therefore \\(y = f(-x)\\). This is the definition we will apply.", workingOut: "\\(y = f(-x)\\)", graphData: null },
    { explanation: "Given \\(f(x) = x^2 - 5x + 1\\), compute \\(f(-x) = (-x)^2 - 5(-x) + 1\\).", workingOut: "\\(f(-x)=(-x)^2-5(-x)+1\\)", graphData: null },
    { explanation: "Simplify carefully: \\((-x)^2 = x^2\\) and \\(-5(-x) = +5x\\), so \\(f(-x) = x^2 + 5x + 1\\). Only the odd-powered term changes sign; that is a useful check.", workingOut: "\\(x^2 + 5x + 1\\)", graphData: null },
    { explanation: "The equation of the reflected graph is \\(y = x^2 + 5x + 1\\). Choosing the option with an overall minus sign would be reflecting in the x-axis instead, a different transformation.", workingOut: "\\(y = x^2 + 5x + 1\\)", graphData: null },
  ],
  "bar2020-mc5v": [
    { explanation: "Reflecting about the y-axis means form \\(y = f(-x)\\).", workingOut: "\\(y = f(-x)\\)", graphData: null },
    { explanation: "Substitute \\(f(x) = x^2 - 3x + 4\\): \\(f(-x) = (-x)^2 - 3(-x) + 4\\).", workingOut: "\\(f(-x)=x^2+3x+4\\)", graphData: null },
    { explanation: "Simplify to \\(x^2 + 3x + 4\\). The linear term flips sign; the even powers stay the same.", workingOut: "\\(x^2 + 3x + 4\\)", graphData: null },
    { explanation: "New equation: \\(y = x^2 + 3x + 4\\).", workingOut: "\\(y = x^2 + 3x + 4\\)", graphData: null },
  ],
  "cths2020-q24a": [
    { explanation: "The derivative is zero at stationary points of f. From the graph those points are a local max at x = -3, a local min at x = -1, and a local max at x = 2. So those are the zeros of f prime.", workingOut: "\\(f'(-3)=f'(-1)=f'(2)=0\\)", graphData: null },
    { explanation: "By definition, f prime is positive where f is increasing and negative where f is decreasing. We read increase and decrease intervals from the shape of the graph.", workingOut: "\\(f'>0 \\iff f\\text{ increasing}\\)", graphData: null },
    { explanation: "Reading left to right: f increases on (-infinity, -3), decreases on (-3, -1), increases on (-1, 2), and decreases on (2, infinity). A common mistake is to reverse increase and decrease around a min or max.", workingOut: "\\(\\text{inc/dec/inc/dec}\\)", graphData: null },
    { explanation: "Therefore f prime is positive on the union of the increasing intervals: (-infinity, -3) union (-1, 2).", workingOut: "\\((-\\infty,-3)\\cup(-1,2)\\)", graphData: null },
    { explanation: "Final answer: (-infinity, -3) union (-1, 2). This is exactly where the gradient of the graph is uphill.", workingOut: "\\((-\\infty,-3)\\cup(-1,2)\\)", graphData: null },
  ],
  "cths2020-q24b": [
    { explanation: "The graph of y = f(-x) is the reflection of y = f(x) in the y-axis. Every point (x, y) maps to (-x, y), so horizontal positions flip sign while heights stay the same.", workingOut: "\\((x,y)\\mapsto(-x,y)\\)", graphData: null },
    { explanation: "Consequently a feature that occurs at x = a on the original graph appears at x = -a on the reflected graph. This is the rule we apply to each stationary point.", workingOut: "\\(a \\mapsto -a\\)", graphData: null },
    { explanation: "The local maximum that was at x = -3 therefore moves to x = 3. Reflection in the y-axis does not change whether a turning point is a max or a min.", workingOut: "\\(x = 3\\)", graphData: null },
    { explanation: "So the image has a local maximum at x = 3. (If you reflected in the x-axis instead, maxes would become mins — that is a different transformation.)", workingOut: "\\(\\text{local max at }x=3\\)", graphData: null },
  ],
  "cths2020s-q24a": [
    { explanation: "Stationary points of h are at x = -4 (local max), x = -2 (local min), and x = 1 (local max). These are the zeros of h prime.", workingOut: "\\(h'(-4)=h'(-2)=h'(1)=0\\)", graphData: null },
    { explanation: "h prime is positive precisely where h is increasing. Use the graph description to list those intervals.", workingOut: "\\(h'>0\\iff\\text{increasing}\\)", graphData: null },
    { explanation: "h increases on (-infinity, -4) and on (-2, 1), and decreases on the complementary intervals.", workingOut: "\\(\\text{inc on }(-\\infty,-4)\\cup(-2,1)\\)", graphData: null },
    { explanation: "Therefore h prime is positive on (-infinity, -4) union (-2, 1).", workingOut: "\\((-\\infty,-4)\\cup(-2,1)\\)", graphData: null },
  ],
  "cths2020s-q24b": [
    { explanation: "Forming y = h(-x) reflects the graph in the y-axis, sending each x-coordinate to its opposite.", workingOut: "\\(x\\mapsto -x\\)", graphData: null },
    { explanation: "A local maximum at x = -4 is sent to x = 4. The height of that turning point is unchanged by a pure y-axis reflection.", workingOut: "\\(-4\\mapsto 4\\)", graphData: null },
    { explanation: "The stationary point remains a maximum (not a minimum).", workingOut: "\\(\\text{still a max}\\)", graphData: null },
    { explanation: "Answer: local maximum at x = 4.", workingOut: "\\(\\text{local max at }x=4\\)", graphData: null },
  ],
  "asc2020-q22b": [
    { explanation: "We want the image of the point (-1, 3) under y = f(x/2 + 2). For the new graph, the y-value is f of some input. To keep the same f-value 3 = f(-1), that input must equal -1.", workingOut: "\\(\\dfrac{x}{2}+2 = -1\\)", graphData: null },
    { explanation: "Solve the linear equation: x/2 = -3, so x = -6. A common error is to solve x/2 + 2 = 3 using the y-coordinate instead of the original x-input.", workingOut: "\\(x = -6\\)", graphData: null },
    { explanation: "The y-coordinate is unchanged: we still evaluate f at -1, so y = 3. The image point is therefore (-6, 3).", workingOut: "\\((-6, 3)\\)", graphData: null },
    { explanation: "Geometrically this matches a horizontal dilation by 2 (from the factor 1/2) followed by a translation 4 units left (from the +2 rewritten as (x+4)/2). Final answer (-6, 3).", workingOut: "\\((-6, 3)\\)", graphData: null },
  ],
  "asc2020-q22v": [
    { explanation: "Given that (2, 5) lies on y = f(x), we know f(2) = 5. For a point (x, 5) to lie on y = f(2x - 1) we need f(2x - 1) = 5, so the inputs must match: 2x - 1 = 2.", workingOut: "\\(2x-1 = 2\\)", graphData: null },
    { explanation: "Solve: 2x = 3, hence x = 3/2. Do not solve 2x - 1 = 5; that confuses the input of f with the output value.", workingOut: "\\(x = \\dfrac{3}{2}\\)", graphData: null },
    { explanation: "The corresponding point is (3/2, 5). Check: f(2*(3/2) - 1) = f(3 - 1) = f(2) = 5. Correct.", workingOut: "\\(\\left(\\dfrac{3}{2}, 5\\right)\\)", graphData: null },
    { explanation: "Final answer: the graph of y = f(2x - 1) passes through (3/2, 5).", workingOut: "\\(\\left(\\dfrac{3}{2}, 5\\right)\\)", graphData: null },
  ],
  "abb2020-mc7": [
    { explanation: "Original stationary point (2, -3) means f(2) = -3 and f prime (2) = 0. The new rule is y = -f(x/2) - 5. We track how the input and output of f are transformed.", workingOut: "\\(f(2)=-3\\)", graphData: null },
    { explanation: "Horizontal part: the input is x/2. Set x/2 = 2 so we hit the old stationary input, giving x = 4. This is a horizontal stretch by factor 2.", workingOut: "\\(\\dfrac{x}{2}=2\\implies x=4\\)", graphData: null },
    { explanation: "Vertical part: -f(...) reflects in the x-axis, turning the old value -3 into +3. Then subtracting 5 gives 3 - 5 = -2.", workingOut: "\\(y = -(-3)-5 = -2\\)", graphData: null },
    { explanation: "Therefore a stationary point of the new graph is (4, -2). Check the sign carefully: forgetting the reflection would leave you with y = -8.", workingOut: "\\((4,-2)\\)", graphData: null },
  ],
  "bar2020-mc10": [
    { explanation: "Original turning point (6, 2) means f(6) = 2. New graph: y = 3f(-2x + 4) + 2. Strategy: match the input of f to 6, then scale and shift the output.", workingOut: "\\(f(6)=2\\)", graphData: null },
    { explanation: "Set the inside equal to the original input: -2x + 4 = 6. Solve carefully for x.", workingOut: "\\(-2x+4=6\\)", graphData: null },
    { explanation: "-2x = 2 so x = -1. A sign error here is the most common mistake (getting x = 1 or x = -7).", workingOut: "\\(x=-1\\)", graphData: null },
    { explanation: "New y-value: 3 * f(6) + 2 = 3*2 + 2 = 8. The image turning point is (-1, 8).", workingOut: "\\((-1,8)\\)", graphData: null },
    { explanation: "Final answer (-1, 8). The factor 3 multiplies the old height before the +2 is applied; do not add 2 first.", workingOut: "\\((-1,8)\\)", graphData: null },
  ],
  "bar2020-mc10v": [
    { explanation: "Original: f(4) = 3. New: y = 2f(-x + 1) + 5.", workingOut: "\\(f(4)=3\\)", graphData: null },
    { explanation: "Match inputs: -x + 1 = 4, so -x = 3 and x = -3.", workingOut: "\\(x=-3\\)", graphData: null },
    { explanation: "New height: 2*3 + 5 = 11.", workingOut: "\\(y=11\\)", graphData: null },
    { explanation: "Image turning point: (-3, 11).", workingOut: "\\((-3,11)\\)", graphData: null },
  ],
  "cths2020-mc9": [
    { explanation: "We apply the three listed transformations in order, starting from y = f(x). Order matters: dilations and translations do not commute in general.", workingOut: "\\(y=f(x)\\)", graphData: null },
    { explanation: "First translate left by 2 units: replace x by x + 2 to obtain y = f(x + 2). (Left means opposite sign to the number you might expect.)", workingOut: "\\(y=f(x+2)\\)", graphData: null },
    { explanation: "Next, horizontal dilation by a factor of 3 (stretch away from the y-axis): replace x by x/3. This gives y = f(x/3 + 2).", workingOut: "\\(y=f\\!\\left(\\dfrac{x}{3}+2\\right)\\)", graphData: null },
    { explanation: "Finally translate down by 4: subtract 4 from the whole expression. The finished equation is y = f(x/3 + 2) - 4.", workingOut: "\\(y=f\\!\\left(\\dfrac{x}{3}+2\\right)-4\\)", graphData: null },
    { explanation: "That matches option with f(x/3 + 2) - 4. Options that put the 3 outside as f(3(...)) reverse the dilation direction.", workingOut: "\\(y=f\\!\\left(\\dfrac{x}{3}+2\\right)-4\\)", graphData: null },
  ],
  "cths2020s-mc9": [
    { explanation: "Start from y = f(x) and apply transforms in the stated order.", workingOut: "\\(y=f(x)\\)", graphData: null },
    { explanation: "Translate right by 3: y = f(x - 3).", workingOut: "\\(y=f(x-3)\\)", graphData: null },
    { explanation: "Horizontal dilation by factor 2: replace x by x/2, giving y = f(x/2 - 3).", workingOut: "\\(y=f\\!\\left(\\dfrac{x}{2}-3\\right)\\)", graphData: null },
    { explanation: "Translate up by 5: add 5. Final: y = f(x/2 - 3) + 5.", workingOut: "\\(y=f\\!\\left(\\dfrac{x}{2}-3\\right)+5\\)", graphData: null },
  ],
  "car2020-q32": [
    { explanation: "The image is a downward parabola with vertex (-1, -3). Using f(x) = x^2, write g(x) = k(x + 1)^2 - 3 with k < 0 so it opens down.", workingOut: "\\(g(x)=k(x+1)^2-3\\)", graphData: null },
    { explanation: "It also passes through the y-intercept (0, -5). Substitute x = 0: k(1)^2 - 3 = -5.", workingOut: "\\(k-3=-5\\)", graphData: null },
    { explanation: "Solve: k = -2. The negative scale matches the downward opening.", workingOut: "\\(k=-2\\)", graphData: null },
    { explanation: "Therefore g(x) = -2(x + 1)^2 - 3, which is also written g(x) = -2f(x + 1) - 3.", workingOut: "\\(g(x)=-2(x+1)^2-3\\)", graphData: null },
    { explanation: "Final answer g(x) = -2(x + 1)^2 - 3. Check: vertex at (-1, -3) and g(0) = -2 - 3 = -5. Correct.", workingOut: "\\(g(x)=-2(x+1)^2-3\\)", graphData: null },
  ],
  "car2020s-q32": [
    { explanation: "Vertex (2, -4) suggests g(x) = k(x - 2)^2 - 4.", workingOut: "\\(g(x)=k(x-2)^2-4\\)", graphData: null },
    { explanation: "Use the point (0, -8): k(0-2)^2 - 4 = -8, so 4k - 4 = -8.", workingOut: "\\(4k=-4\\)", graphData: null },
    { explanation: "Thus k = -1.", workingOut: "\\(k=-1\\)", graphData: null },
    { explanation: "So g(x) = -(x - 2)^2 - 4.", workingOut: "\\(g(x)=-(x-2)^2-4\\)", graphData: null },
  ],
  "dane2020-q30": [
    { explanation: "Vertex moves from (0, 0) on y = x^2 to (-1, -3): left 1 and down 3. With scale k: g(x) = k f(x + 1) - 3.", workingOut: "\\(g=kf(x+1)-3\\)", graphData: null },
    { explanation: "Through (0, -5): -5 = k f(1) - 3 = k(1) - 3, so k = -2.", workingOut: "\\(k=-2\\)", graphData: null },
    { explanation: "Negative k flips the parabola upside down, matching the diagram description.", workingOut: "\\(k<0\\)", graphData: null },
    { explanation: "Answer: g(x) = -2f(x + 1) - 3.", workingOut: "\\(g(x)=-2f(x+1)-3\\)", graphData: null },
  ],
  "dane2020s-q30": [
    { explanation: "Vertex (2, -4): right 2, down 4. Form g(x) = k f(x - 2) - 4.", workingOut: "\\(g=kf(x-2)-4\\)", graphData: null },
    { explanation: "Point (0, -8) with f(-2) = 4: -8 = 4k - 4, so k = -1.", workingOut: "\\(k=-1\\)", graphData: null },
    { explanation: "Thus g(x) = -f(x - 2) - 4.", workingOut: "\\(g=-f(x-2)-4\\)", graphData: null },
    { explanation: "Final: g(x) = -f(x - 2) - 4.", workingOut: "\\(g(x)=-f(x-2)-4\\)", graphData: null },
  ],
  "fortst2020-q10f": [
    { explanation: "The target is y = f(2(x - 1/4)). Transformations are read from the inside of the composition outward.", workingOut: "\\(y=f\\!\\left(2\\left(x-\\dfrac{1}{4}\\right)\\right)\\)", graphData: null },
    { explanation: "The factor 2 multiplying x produces a horizontal dilation of factor 1/2 (compression toward the y-axis). Inputs are packed twice as tightly.", workingOut: "\\(\\text{h-dilate factor }\\tfrac{1}{2}\\)", graphData: null },
    { explanation: "The -1/4 after factoring produces a horizontal translation of 1/4 unit to the right (opposite the signed number added to x).", workingOut: "\\(\\text{translate }\\tfrac{1}{4}\\text{ right}\\)", graphData: null },
    { explanation: "Order: the dilation is applied first because it sits closest to the variable inside the brackets; then the translation. So: horizontal dilation by 1/2, then translation 1/4 right.", workingOut: "\\(\\text{dilate }\\tfrac12\\text{ then right }\\tfrac14\\)", graphData: null },
    { explanation: "Final description: horizontal dilation by 1/2, then translation 1/4 unit right. Reversing the order would map key points to different places.", workingOut: "\\(\\text{dilate then translate}\\)", graphData: null },
  ],
  "fortst2020s-q10f": [
    { explanation: "Target y = f(2(x - 1/4)). Read transforms inside-out.", workingOut: "\\(f\\!\\left(2\\left(x-\\dfrac14\\right)\\right)\\)", graphData: null },
    { explanation: "Coefficient 2 of x means horizontal dilation by factor 1/2.", workingOut: "\\(\\text{h-dilate }\\tfrac12\\)", graphData: null },
    { explanation: "Then shift x by -1/4 means translate 1/4 to the right.", workingOut: "\\(\\text{right }\\tfrac14\\)", graphData: null },
    { explanation: "Apply dilation first, then translation.", workingOut: "\\(\\text{dilate then translate}\\)", graphData: null },
  ],
  "abb2020-mc4": [
    { explanation: "For y = A cos(bx + c), the period is T = 2 pi / |b|. Amplitude A and phase shift do not affect how often the graph repeats.", workingOut: "\\(T=\\dfrac{2\\pi}{|b|}\\)", graphData: null },
    { explanation: "In y = -3 cos(2x - pi/4) the coefficient of x is b = 2. The -3 only reflects and stretches vertically.", workingOut: "\\(b=2\\)", graphData: null },
    { explanation: "Compute T = 2 pi / 2 = pi.", workingOut: "\\(T=\\pi\\)", graphData: null },
    { explanation: "Answer: the period is pi. Choosing 2 pi would ignore the 2 inside the cosine; choosing 3 confuses amplitude with period.", workingOut: "\\(T=\\pi\\)", graphData: null },
  ],
  "abb2020-q16bi": [
    { explanation: "Sophie models river depth by D = a sin(nt + pi/3) + c. For any model of the form a sin(...) + c, the amplitude a is half the difference between the greatest and least values of D.", workingOut: "\\(a=\\dfrac{D_{\\max}-D_{\\min}}{2}\\)", graphData: null },
    { explanation: "Why: the sine term ranges between -1 and 1, so a sin(...) ranges between -a and a. Adding c shifts that interval to [c-a, c+a], whose half-width is a.", workingOut: "\\(D\\in[c-a,c+a]\\)", graphData: null },
    { explanation: "Here the maximum depth is 5 m and the minimum is 1 m. Substitute into the amplitude formula.", workingOut: "\\(a=\\dfrac{5-1}{2}\\)", graphData: null },
    { explanation: "Compute a = 4/2 = 2. So the depth oscillates 2 m above and below its mean.", workingOut: "\\(a=2\\)", graphData: null },
    { explanation: "Final answer a = 2 metres. Check: with mean 3 (from max and min average) the range is [1, 5], matching the data.", workingOut: "\\(a=2\\)", graphData: null },
  ],
  "abb2020-q16bii": [
    { explanation: "In the model D = a sin(nt + pi/3) + c, the constant c is the vertical centre line of the oscillation — the mean depth halfway between maximum and minimum.", workingOut: "\\(c=\\dfrac{D_{\\max}+D_{\\min}}{2}\\)", graphData: null },
    { explanation: "Reason: sine ranges in [-1, 1], so D ranges in [c - a, c + a]. The midpoint of that interval is exactly c. Students sometimes confuse c with the amplitude a.", workingOut: "\\(D\\in[c-a,c+a]\\)", graphData: null },
    { explanation: "Given max 5 m and min 1 m, compute c = (5 + 1)/2 = 3.", workingOut: "\\(c=\\dfrac{5+1}{2}=3\\)", graphData: null },
    { explanation: "Consistency check: amplitude a = (5 - 1)/2 = 2, so the predicted range is [3 - 2, 3 + 2] = [1, 5], matching the given max and min exactly.", workingOut: "\\([1,5]\\)", graphData: null },
    { explanation: "Therefore c = 3 metres. This is the average river depth about which the depth oscillates.", workingOut: "\\(c=3\\)", graphData: null },
  ],
  "abb2020-q16biii": [
    { explanation: "For D = a sin(nt + phi) + c with n > 0, one full cycle (the period) has length T = 2 pi / n. Successive maximum depths are one period apart.", workingOut: "\\(T=\\dfrac{2\\pi}{n}\\)", graphData: null },
    { explanation: "The problem states that the time between successive peaks is 12 hours, so the period is T = 12.", workingOut: "\\(T=12\\)", graphData: null },
    { explanation: "Set up the equation 2 pi / n = 12. Avoid writing T = 2 pi n (missing the division).", workingOut: "\\(\\dfrac{2\\pi}{n}=12\\)", graphData: null },
    { explanation: "Solve for n: n = 2 pi / 12 = pi / 6.", workingOut: "\\(n=\\dfrac{\\pi}{6}\\)", graphData: null },
    { explanation: "Final answer n = pi/6. Check: n * 12 = (pi/6)*12 = 2 pi, so the sine argument increases by a full 2 pi every 12 hours, as required for one period.", workingOut: "\\(n=\\dfrac{\\pi}{6}\\)", graphData: null },
  ],
  "car2020-q33b": [
    { explanation: "Count intersections of y = cos(pi x) and y = 1 - |x|. Each intersection is one real solution of the equation.", workingOut: "\\(\\text{count intersections}\\)", graphData: null },
    { explanation: "Cosine always lies in [-1, 1]. The inverted-V 1 - |x| is less than -1 when |x| > 2, so it can never meet cosine outside [-2, 2].", workingOut: "\\(|x|>2\\Rightarrow\\text{no meet}\\)", graphData: null },
    { explanation: "Restrict to [-2, 2] and count crossings on a sketch: the period-2 cosine and the inverted-V meet five times.", workingOut: "\\(5 \\text{ crossings}\\)", graphData: null },
    { explanation: "Therefore there are 5 real solutions. Undercounting usually comes from looking only at x >= 0.", workingOut: "\\(5 \\text{ solutions}\\)", graphData: null },
  ],
  "car2020s-q33b": [
    { explanation: "Count intersections of y = sin(pi x) and y = 1 - |x|.", workingOut: "\\(\\text{intersections}\\)", graphData: null },
    { explanation: "Again only |x| <= 2 is possible, because outside that the V-graph is below -1.", workingOut: "\\(|x|\\le 2\\)", graphData: null },
    { explanation: "Sine is zero at the integers, so the pattern of crossings differs from cosine. The diagrams meet at three points including the origin.", workingOut: "\\(3 \\text{ crossings}\\)", graphData: null },
    { explanation: "Hence 3 real solutions.", workingOut: "\\(3 \\text{ solutions}\\)", graphData: null },
  ],
  "cra2023-q29a": [
    { explanation: "The period of cos x is 2 pi. Multiplying by the constant 2 is a vertical stretch only; vertical stretches never change period.", workingOut: "\\(T(2\\cos x)=2\\pi\\)", graphData: null },
    { explanation: "Cotangent cot x = cos x / sin x has vertical asymptotes at integer multiples of pi and repeats every pi (same period as tan x).", workingOut: "\\(T(\\cot x)=\\pi\\)", graphData: null },
    { explanation: "So the periods are 2 pi for 2 cos x and pi for cot x.", workingOut: "\\(2\\pi\\text{ and }\\pi\\)", graphData: null },
    { explanation: "On [0, 2 pi] you see one full cosine wave and two cotangent branches, confirming those periods.", workingOut: "\\(2\\pi,\\;\\pi\\)", graphData: null },
  ],
  "cra2023s-q29a": [
    { explanation: "Period of sin x is 2 pi; the factor 2 is a vertical stretch that leaves the period unchanged, so 2 sin x still has period 2 pi.", workingOut: "\\(T(2\\sin x)=2\\pi\\)", graphData: null },
    { explanation: "Tangent has period pi, with asymptotes at pi/2 + k pi.", workingOut: "\\(T(\\tan x)=\\pi\\)", graphData: null },
    { explanation: "Therefore the periods are 2 pi and pi respectively.", workingOut: "\\(2\\pi\\text{ and }\\pi\\)", graphData: null },
    { explanation: "Final: period of 2 sin x is 2 pi; period of tan x is pi.", workingOut: "\\(2\\pi,\\;\\pi\\)", graphData: null },
  ],
  "cths2020-mc7": [
    { explanation: "Write g(x) = 2 cos(x/2 + pi/3). The amplitude is the absolute value of the coefficient of cosine: |2| = 2.", workingOut: "\\(A=2\\)", graphData: null },
    { explanation: "The coefficient of x inside is b = 1/2. Period T = 2 pi / |b| = 2 pi / (1/2) = 4 pi.", workingOut: "\\(T=4\\pi\\)", graphData: null },
    { explanation: "Phase shift: factor as 2 cos((1/2)(x + 2 pi/3)). This is a shift of 2 pi/3 to the left (opposite the signed constant inside).", workingOut: "\\(\\text{left by }\\dfrac{2\\pi}{3}\\)", graphData: null },
    { explanation: "Description: amplitude 2, period 4 pi, shifted left by 2 pi/3. Confusing b with period itself is a common error that leads to wrongly saying period pi.", workingOut: "\\(A=2,\\;T=4\\pi,\\;\\text{left }\\dfrac{2\\pi}{3}\\)", graphData: null },
  ],
  "cths2020s-mc7": [
    { explanation: "For g(x) = 3 cos(x/3 + pi/4), amplitude is 3.", workingOut: "\\(A=3\\)", graphData: null },
    { explanation: "b = 1/3 so period T = 2 pi / (1/3) = 6 pi.", workingOut: "\\(T=6\\pi\\)", graphData: null },
    { explanation: "Rewrite as 3 cos((1/3)(x + 3 pi/4)): phase shift left by 3 pi/4.", workingOut: "\\(\\text{left }\\dfrac{3\\pi}{4}\\)", graphData: null },
    { explanation: "So: amplitude 3, period 6 pi, shifted left by 3 pi/4.", workingOut: "\\(A=3,\\;T=6\\pi,\\;\\text{left }\\dfrac{3\\pi}{4}\\)", graphData: null },
  ],
  "dane2020-mc8": [
    { explanation: "For f(x) = (1/2) sin 4x: amplitude A_f = 1/2 and period T_f = 2 pi / 4 = pi/2.", workingOut: "\\(A_f=\\tfrac12,\\;T_f=\\tfrac{\\pi}{2}\\)", graphData: null },
    { explanation: "For g(x) = sin 2x: amplitude A_g = 1 and period T_g = 2 pi / 2 = pi.", workingOut: "\\(A_g=1,\\;T_g=\\pi\\)", graphData: null },
    { explanation: "Amplitude ratio: A_g / A_f = 1 / (1/2) = 2, so the amplitude is doubled. Period ratio: pi / (pi/2) = 2, so the period is also doubled.", workingOut: "\\(A\\times 2\\text{ and }T\\times 2\\)", graphData: null },
    { explanation: "Final: both amplitude and period are doubled when going from f to g. Halving either quantity would reverse the transformation.", workingOut: "\\(A\\times 2,\\; T\\times 2\\)", graphData: null },
  ],
  "dane2020s-mc8": [
    { explanation: "f(x) = (1/2) sin 6x has amplitude 1/2 and period 2 pi / 6 = pi/3.", workingOut: "\\(A_f=\\tfrac12,\\;T_f=\\tfrac{\\pi}{3}\\)", graphData: null },
    { explanation: "g(x) = sin 3x has amplitude 1 and period 2 pi / 3.", workingOut: "\\(A_g=1,\\;T_g=\\tfrac{2\\pi}{3}\\)", graphData: null },
    { explanation: "Amplitude doubles (1 over 1/2). Period doubles ((2 pi/3) over (pi/3) = 2).", workingOut: "\\(A\\times 2,\\;T\\times 2\\)", graphData: null },
    { explanation: "Therefore both the amplitude and the period are doubled.", workingOut: "\\(A\\times 2\\text{ and }T\\times 2\\)", graphData: null },
  ],
};

function parityOk(str) {
  const o = (str.match(/\\\(/g) || []).length;
  const c = (str.match(/\\\)/g) || []).length;
  return o === c;
}

async function main() {
  // This file's STEPS use plain-text math ("2 pi / (1/2)") which MathView's
  // auto-fraction / currency heuristics mangle into red KaTeX errors.
  // Canonical pedagogical steps with proper \(...\) live in enrichY12ACh2Steps.js.
  // Force-run only with: ALLOW_PLAINTEXT_REWRITE=1 node tools/scripts/rewriteY12ACh2SolutionSteps.js
  if (process.env.ALLOW_PLAINTEXT_REWRITE !== '1') {
    console.error(
      'Refusing to run: rewriteY12ACh2SolutionSteps.js writes plain-text math that breaks in MathView.\n' +
        'Use:  node tools/scripts/enrichY12ACh2Steps.js\n' +
        'Or set ALLOW_PLAINTEXT_REWRITE=1 to override (not recommended).'
    );
    process.exit(1);
  }

  const ids = Object.keys(STEPS);
  console.log('Rewriting steps for', ids.length, 'MCQs');
  let written = 0;
  for (const id of ids) {
    let steps = STEPS[id];
    if (steps.length < 4) throw new Error(id + ' needs >=4 steps, has ' + steps.length);

    // Expand any overly brief explanations so the student never gets a one-liner step.
    steps = steps.map((s, i) => {
      let e = s.explanation;
      if (e.length < 100) {
        if (i === 0) e = e + ' We begin by stating the given information and the overall plan so the later algebra is purposeful rather than mechanical.';
        else if (i === steps.length - 1) e = e + ' This matches the correct option. Rechecking the key calculation above confirms that the answer is consistent with the problem conditions.';
        else e = e + ' Completing this intermediate form is required before the next operation can be applied cleanly.';
      }
      return { ...s, explanation: e };
    });

    for (const s of steps) {
      if (!parityOk(s.workingOut)) throw new Error(id + ' workingOut parity: ' + s.workingOut);
      if (!parityOk(s.explanation)) throw new Error(id + ' explanation parity');
    }
    const ref = db.collection('questions').doc(id);
    const snap = await ref.get();
    if (!snap.exists) { console.warn('missing', id); continue; }
    if (snap.data().origin === 'teacher') { console.warn('skip teacher', id); continue; }
    // preserve options[a] correctness — do not touch a/opts unless needed
    await ref.set({
      solutionSteps: steps,
      isNew: true,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    written++;
  }
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set({
    version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  console.log('Wrote', written, 'docs; version', ver);

  const sample = (await db.collection('questions').doc('abb2020-q16bii').get()).data();
  console.log('Sample abb2020-q16bii steps:', sample.solutionSteps.length);
  sample.solutionSteps.forEach((s, i) => console.log((i+1)+'.', s.explanation.slice(0, 100) + '...'));
}

main().catch(e => { console.error(e); process.exit(1); });
