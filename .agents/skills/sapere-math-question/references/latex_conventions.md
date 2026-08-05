# LaTeX Conventions for Sapere

## Delimiter Rules by Context

### 1. Question Text (`question` field)
Use `\\(` and `\\)` for inline math:
```
"question": "Find the domain of \\(f(x) = \\sqrt{x - 2}\\)."
```

### 2. Options (`opts[]` array)
Each option uses `\\(` and `\\)`:
```javascript
opts: [
  "\\(x \\ge 2\\)",
  "\\(x \\ge -2\\)",
  "\\(x \\in \\mathbb{R}\\)",
  "\\(x > 0\\)"
]
```

### 3. WorkingOut in solutionSteps
Raw LaTeX without delimiters for display math. The renderer wraps these automatically:
```javascript
workingOut: "x^2 + 3x + 2 = (x+1)(x+2)"
```

For text mixed with math inside `workingOut`, use `\\text{}`:
```javascript
workingOut: "\\text{Domain } x \\ge 2, \\text{ Range } y \\ge 0"
```

### 4. Explanation in solutionSteps
Natural language with `\\(` `\\)` for inline math references:
```javascript
explanation: "Since \\(x^2 + 3\\) is always positive, the denominator can never be zero."
```

## Forbidden Patterns

### ❌ Nested Delimiters
```
"\\(\\text{Answer} = \\(x + 3\\)\\)"  // BROKEN — nested \\( \\)
```

### ✅ Correct
```
"\\(\\text{Answer} = x + 3\\)"  // Single wrapper
```

### ❌ Dollar Signs in Options
```
opts: ["$x = 3$"]  // Don't use $ in opts
```

### ✅ Correct
```
opts: ["\\(x = 3\\)"]  // Always \\( \\)
```

## Common LaTeX Commands Used

| Symbol | LaTeX |
|--------|-------|
| Fraction | `\\frac{a}{b}` |
| Square root | `\\sqrt{x}` |
| nth root | `\\sqrt[n]{x}` |
| Real numbers | `\\mathbb{R}` |
| Not equal | `\\neq` |
| Greater/equal | `\\ge` or `\\geq` |
| Less/equal | `\\le` or `\\leq` |
| Implies | `\\implies` |
| Arrow | `\\to` |
| Infinity | `\\infty` |
| Degrees | `^\\circ` |
| Text in math | `\\text{some text}` |
| Absolute value | `\|x\|` or `\\lvert x \\rvert` |

## Escape Levels

### In Seed JS Files (`.js`)
The seed file uses raw JS strings. LaTeX backslashes need double escaping:
```javascript
question: "Evaluate \\\\(\\\\frac{1}{2}\\\\)"
// JS string → "Evaluate \\(\frac{1}{2}\\)"
// Rendered → "Evaluate ½"
```

### In Node.js Update Scripts (`.cjs`)
When strings are built in JS and sent to Firestore:
```javascript
const q = {
  question: "Find \\(f(x)\\)"  // Single backslash — Firestore stores it as-is
};
```

### In JSON.stringify Output
`JSON.stringify()` will add one layer of escaping. The seed file writer
uses a regex to strip quoted keys but does NOT alter string values, so
the escaping is preserved correctly.
