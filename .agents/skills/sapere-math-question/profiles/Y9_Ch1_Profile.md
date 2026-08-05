# Chapter Profile: Year 9 Chapter 1
## Algebra

### 1. Core Concepts & Formulas

**1A: Substitution**
- Replace pronumerals with numerical values and evaluate.
- **Order of operations:**
  1. Evaluate expressions inside brackets first.
  2. Powers.
  3. Multiplication and division (left to right).
  4. Addition and subtraction (left to right).

**1B: Like Terms**
- **Like terms** contain the same pronumerals with the same indices.
- Multiplication order is not important (e.g., $2x^2y$ and $3yx^2$ are like terms).
- **Unlike terms** cannot be added or subtracted to form a single term.

**1C: Multiplication and Division**
- Any two terms can be multiplied/divided.
- Write variables in alphabetical order (e.g., $3abc$, not $3bca$).
- When dividing by a fraction, multiply by its reciprocal.
- Final answers should be expressed in simplest form (highest common factor cancelled).

**1D: Simple Expansion of Brackets**
- Distributive Law: $a(b + c) = ab + ac$ and $a(b - c) = ab - ac$.
- Each term in the brackets is multiplied by the term outside the brackets.

**1E: Binomial Products**
- Expanding two pairs of brackets: $(a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd$.
- Each term in the second pair of brackets is multiplied by each term in the first.

**1F: Perfect Squares**
- General form: $(a + b)^2 = a^2 + 2ab + b^2$ and $(a - b)^2 = a^2 - 2ab + b^2$.
- The expansion consists of the sum of the squares of the terms plus (or minus) twice the product of the terms.

**1G: Difference of Two Squares**
- General form: $(a + b)(a - b) = a^2 - b^2$.
- Expanding produces a "first term squared minus second term squared" result, as the middle terms cancel out ($ab - ab = 0$).

---

### 2. Standard Solution Methodology (Step-by-Step)

When generating `solutionSteps` for this chapter, enforce the following pedagogical flow:

**Step 1: Identify the operation and terms**
- Clearly state what algebraic operation needs to be performed (substitution, collecting like terms, expansion).
- Write out the initial expression.

**Step 2: Apply the relevant algebraic law (if applicable)**
- Mention the specific law being used (e.g., "Apply the distributive law to expand the brackets", "Identify like terms", "Apply the perfect square expansion").
- Show the unsimplified intermediate step.

**Step 3: Calculate/Simplify**
- Perform the arithmetic operations step-by-step.
- Collect any remaining like terms.

**Step 4: Final Answer & Pitfall Warning**
- State the final simplified expression or value.
- **Add a warning for common mistakes** relevant to the topic (see below).

---

### 3. Common Student Pitfalls (오개념 & 잦은 실수)

Include these in the explanation of the relevant steps to preempt student errors:

- **1A Substitution:** Evaluating $-x^2$ when $x$ is negative. E.g., if $x = -3$, $-x^2 = -(-3)^2 = -9$, not $+9$. Also, forgetting the strict order of operations.
  *Warning phrasing: "When substituting negative numbers, always use brackets. Remember the order of operations: powers before multiplication."*
- **1B Like Terms:** Confusing variables with different powers. E.g., thinking $5x^2y$ and $6xy^2$ are like terms.
  *Warning phrasing: "Terms are only 'like' if both the variables AND their powers are identical. $x^2y$ and $xy^2$ are not like terms."*
- **1D Expansion:** Forgetting to distribute a negative sign to the second term inside the bracket. E.g., $-2(x - 4) \rightarrow -2x - 8$ instead of the correct $-2x + 8$.
  *Warning phrasing: "When expanding with a negative term outside the bracket, remember to multiply the negative sign into EVERY term inside. Negative $\times$ negative = positive."*
- **1E Binomial Products:** Missing the "cross" terms when multiplying out.
  *Warning phrasing: "Make sure every term in the first bracket multiplies every term in the second bracket (e.g., using the FOIL method)."*
- **1F Perfect Squares:** Expanding $(a + b)^2$ as $a^2 + b^2$. This is a very common and fatal error.
  *Warning phrasing: "Remember the middle term! $(a + b)^2$ is NOT $a^2 + b^2$. It must include $2ab$."*
- **1G Difference of Squares:** Confusing it with perfect squares.
  *Warning phrasing: "Notice the alternating signs $(a+b)(a-b)$. The middle terms cancel out, leaving just $a^2 - b^2$."*
