---
name: Generate Seed Clean Options
description: Ensures that when generating math questions (seed files), the generated options do not contain unsimplified arithmetic (like "y = 6 + 1" or "-x = -1") and are always fully resolved to final values (like "y = 7" and "x = 1").
---

# Instruction

When writing scripts that generate or process seed questions for mathematical problems (e.g., using `generate_seed.py` or `.cjs` scripts), ensure you add a sanitisation step to evaluate any unsimplified algebraic expressions in the generated options.

## Problem Description
Language models or logic generation scripts sometimes produce options like \`\( x = -1, y = 2 + 1 \)\` or \`\( -x = -1, y = 6 \)\` instead of the fully simplified values. These must be caught and evaluated before pushing to the database.

## Solution / Implementation Pattern

When generating the JSON structure or array of questions for a seed file, apply a sanitisation function to `q.opts` that evaluates these simple arithmetic strings using Regex.

### Example Sanitisation Logic (JavaScript/Node.js)

```javascript
// Function to clean up options
function cleanOptions(opts) {
  return opts.map(opt => {
    let newOpt = opt;
    
    // Handle anything like "var = a + b" or "var = a - b"
    const regexMath = /([a-zA-Z])\s*=\s*(-?\d+)\s*([\+\-])\s*(\d+)/g;
    newOpt = newOpt.replace(regexMath, (match, variable, a, op, b) => {
      const valA = parseInt(a, 10);
      const valB = parseInt(b, 10);
      const res = op === '+' ? valA + valB : valA - valB;
      return \`\${variable}=\${res}\`;
    });
    
    // Handle "-var = a" (e.g. -x = -1 -> x = 1)
    const regexMinusVar = /-([a-zA-Z])\s*=\s*(-?\d+)/g;
    newOpt = newOpt.replace(regexMinusVar, (match, variable, a) => {
       const valA = parseInt(a, 10);
       return \`\${variable}=\${-valA}\`;
    });

    return newOpt;
  });
}
```

Make sure you always apply this logic (or similar logic in Python if the generator is a Python script) to the options array before saving the seed data.
