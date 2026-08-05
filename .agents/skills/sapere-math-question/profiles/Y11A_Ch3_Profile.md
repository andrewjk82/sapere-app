# Chapter Profile: Year 11 Advanced Chapter 3
## Functions and graphs

### 1. Core Concepts & Formulas

**3A: Functions and function notation**
- **Function**: A rule mapping each input (independent variable, $x$) to exactly one output (dependent variable, $y$).
- **Notation**: $f(x) = \dots$
- **Natural domain**: The set of valid $x$-values based on mathematical restrictions (e.g., denominators $\neq 0$).

**3B: Functions, relations, and graphs**
- **Relation vs Function**: A function must pass the vertical line test (no vertical line crosses the graph more than once).
- **Domain**: The set of all possible $x$-coordinates.
- **Range**: The set of all possible $y$-coordinates.

**3C: Review of linear graphs**
- **Linear forms**: Gradient-intercept form $y = mx + b$, general form $ax + by + c = 0$.
- **Special cases**: Horizontal lines $y=c$, vertical lines $x=k$ (relation, not a function).

**3D: Quadratic functions — factoring and the graph**
- **Forms**: General form $y = ax^2 + bx + c$, factored form $y = a(x - \alpha)(x - \beta)$.
- **Concavity**: Concave up if $a > 0$, concave down if $a < 0$.
- **Zeroes and Roots**: A squared factor $(x - \alpha)^2$ indicates a double zero (the graph is tangent to the x-axis at $x = \alpha$).
- **Axis of symmetry**: $x = \frac{\alpha + \beta}{2}$.

**3E: Completing the square and the graph**
- **Completed square form**: $y = a(x - h)^2 + k$.
- **Features**: The vertex is $(h, k)$ and the axis of symmetry is $x = h$.

**3F: The quadratic formulae and the graph**
- **Discriminant**: $\Delta = b^2 - 4ac$.
  - $\Delta > 0$: Two distinct zeroes.
  - $\Delta = 0$: One double zero (perfect square).
  - $\Delta < 0$: No real zeroes (no x-intercepts).
- **Axis of symmetry**: $x = -\frac{b}{2a}$.
- **Quadratic Formula**: $x = \frac{-b \pm \sqrt{\Delta}}{2a}$.

**3G: Powers, cubics, and circles**
- **Square root $y = \sqrt{x}$**: Upper half of a sideways parabola.
- **Cubics $y=x^3$**: Origin is a horizontal inflection. Factored cubics are sketched by testing regions between zeroes.
- **Circles**: $x^2 + y^2 = r^2$.
- **Semicircles**: $y = \pm\sqrt{r^2-x^2}$ (upper/lower, functions), $x = \pm\sqrt{r^2-y^2}$ (right/left, relations).

**3H: Two graphs that have asymptotes**
- **Exponential $y=a^x$**: Horizontal asymptote at $y=0$.
- **Rectangular hyperbola $y=\frac{k}{x}$**: Asymptotes at $x=0$ and $y=0$. Requires limit notation ($x \to \infty, y \to 0$).

**3I: Direct and inverse variation**
- **Direct**: $y = kx$ or $y = kx^n$.
- **Inverse**: $y = \frac{k}{x}$ or $y = \frac{k}{x^n}$. Constant $k$ determines proportionality.

---

### 2. Standard Solution Methodology (Step-by-Step)

When generating `solutionSteps` for this chapter, enforce the following pedagogical flow:

**Step 1: Identify the function/relation and goals**
- State the type of equation (quadratic, cubic, hyperbola, circle).
- Define what needs to be found (domain, range, roots, turning points).

**Step 2: Apply the core analytical tool**
- Use the relevant test or formula: e.g., the vertical line test, calculate the discriminant $\Delta$, complete the square, or find the restrictions on the variable for the natural domain.

**Step 3: Perform calculations and extract features**
- Calculate x-intercepts (zeroes) and y-intercepts.
- Determine the vertex or asymptotes.
- Sketch the graph or define the regions based on inequalities.

**Step 4: Final Answer & Pitfall Warning**
- State the final mathematical result clearly (e.g., Domain: $x \ge 2$).
- Include a relevant warning about common pitfalls.

---

### 3. Common Student Pitfalls (오개념 & 잦은 실수)

Include these in the explanation of the relevant steps to preempt student errors:

- **Domain Restrictions:** Forgetting that expressions inside square roots must be non-negative, and denominators cannot be zero.
  *Warning phrasing: "Always check the natural domain: denominators cannot be zero ($x \neq a$) and you cannot take the square root of a negative number ($x \ge a$)."*
- **Vertical Line Test:** Assuming all continuous curves are functions.
  *Warning phrasing: "Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function."*
- **Double Roots (Perfect Squares):** Misinterpreting a double root as crossing the x-axis.
  *Warning phrasing: "A squared factor like $(x-a)^2$ means the graph touches and turns around at the x-axis. It does not cross it."*
- **Discriminant $\Delta < 0$:** Thinking a negative discriminant means the function is always negative.
  *Warning phrasing: "A negative discriminant ($\Delta < 0$) just means there are no x-intercepts. If $a > 0$, the parabola sits entirely above the x-axis."*
- **Completing the Square for Non-Monics:** Forgetting to factor out the coefficient $a$ before halving the middle term.
  *Warning: "When completing the square for $ax^2 + bx + c$, you MUST factor out the leading coefficient $a$ from the $x$ terms first."*
- **Semicircles:** Confusing which semicircle equations represent functions.
  *Warning phrasing: "Equations like $x = \sqrt{r^2-y^2}$ represent left/right semicircles and are relations. Only $y = \pm\sqrt{r^2-x^2}$ are functions."*
