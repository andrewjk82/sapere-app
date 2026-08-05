# Chapter Profile: Year 10 Chapter 11
## Circles, hyperbolas and simultaneous equations

### 1. Core Concepts & Formulas

**11A: Cartesian equation of a circle**
- **Centre at origin**: $x^2 + y^2 = r^2$.
- **Standard form**: $(x-h)^2 + (y-k)^2 = r^2$ (Centre at $(h, k)$, radius $r$).
- **Finding centre and radius**: Group $x$-terms and $y$-terms, and complete the square for both quadratics. e.g., $x^2 + 4x + y^2 + 6y = -4 \implies (x+2)^2 + (y+3)^2 = 9$. Centre is $(-2,-3)$, radius is $3$.

**11B: The rectangular hyperbola**
- **Basic form**: $y = \frac{a}{x}$. Asymptotes at $x=0$ and $y=0$.
- **Translations**: $y = \frac{a}{x-h} + k$.
  - Vertical asymptote: $x = h$.
  - Horizontal asymptote: $y = k$.
- **Transformations**: Reflection in x-axis ($y = -\frac{a}{x}$), stretches (multiply by $a$).

**11C: Intersections of graphs**
- **Method**: Solve equations simultaneously to find points of intersection.
- Substituting $y = mx+c$ into a circle/hyperbola/parabola equation yields a quadratic.
- Check discriminant ($\Delta = b^2 - 4ac$):
  - $\Delta > 0$: 2 points of intersection.
  - $\Delta = 0$: 1 point of intersection (tangent).
  - $\Delta < 0$: 0 points of intersection.

**11D: Regions of the plane**
- **Half-planes**: Regions defined by inequalities like $y \geq 2x+1$ or $x < 3$.
  - Solid line for $\leq$ or $\geq$. Dashed line for $<$ or $>$.
  - Test a point (e.g., $(0,0)$) not on the boundary to determine which side to shade.
- **Discs**: Regions defined by circle inequalities.
  - $(x-h)^2 + (y-k)^2 \leq r^2$ represents the region inside and on the circle.
  - $(x-h)^2 + (y-k)^2 > r^2$ represents the region strictly outside the circle.

### 2. Common Pitfalls & Constraints (Category F & J Rules)

- **Square Roots**: Forgetting that $(x-h)^2 = a \implies x-h = \pm\sqrt{a}$. Distance/radius $r$ must be positive, but coordinates can be negative.
- **Completing the Square**: Forgetting to add the square of half the coefficient to **both** sides of the equation.
- **Asymptotes**: Treating a vertical asymptote as an intercept or ignoring the domain restriction $x \neq h$.
- **Inequalities**: Failing to reverse the inequality sign when multiplying/dividing by a negative number.
- **MathJax Formatting**: Not wrapping equations like $x^2 + y^2 = r^2$ in `\(` and `\)` within `workingOut`.

### 3. Step-by-Step Writing Guidelines

When generating `solutionSteps` for Chapter 11:
1. **Identify Form**: For circles, explicitly state if the equation needs completing the square. For hyperbolas, identify $h$ and $k$ for asymptotes.
2. **Algebraic Manipulation**: Show the step-by-step process of completing the square or substituting simultaneous equations.
3. **Solve**: Find the values (e.g., coordinates $(x,y)$ or radius $r$). If finding intersections, substitute $x$-values back to find $y$-values.
4. **Final Answer**: Clearly state the final geometric properties or intersection points. Ensure all math blocks are enclosed in `\(` and `\)`.
