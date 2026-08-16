/**
 * Sapere HSC Question DNA — canonical taxonomy v1.0
 *
 * Source: Sapere_HSC_AI_Ingestion_Pipeline_Master_Prompt_v2.md §7.
 * This supersedes the 18-entry `high_value_archetypes` list from the earlier
 * HSC intelligence seed — that list is kept only as historical reference,
 * NOT used for tagging. Do not add a DNA id here without going through the
 * candidate → evidence → promotion flow (master prompt §8-13).
 *
 * `operations` are Sapere-authored reasoning-step sequences (not sourced from
 * NESA) — descriptive metadata for students, not fabricated answer content.
 *
 * `priorityScore` (0-100) is carried over from the earlier HSC intelligence
 * seed's `topic_priority` list (12 syllabus modules, AI-estimated study
 * priority — NOT an official NESA score), mapped onto whichever module each
 * DNA belongs to. Used for the "Focus for you" personal-priority formula:
 * personal_priority = 0.55 * priorityScore + 0.45 * (100 - student_mastery).
 */

export const DNA_TAXONOMY_VERSION = '1.3';

// ─── Version history ────────────────────────────────────────────────────────
// v1.0 — initial 32-entry taxonomy from the master prompt (§7).
// v1.1 (2026-08-12) — promoted TRIG-GEO-01 from candidate CAND-TRIG-001.
//   44 occurrences across the HSC trial corpus (sine/cosine rule, bearings,
//   arcs & sectors, right-angled triangle problems) with similarity <0.75 to
//   any existing DNA — meets the master prompt §12 promotion trigger
//   (occurrences>=3 AND similarity<0.75). Tutor-approved.
// v1.2 (2026-08-16) — grew the reasoningBlueprint warmup pools for
//   CALC-STAT-01, CALC-INT-01, FIN-GP-01 and FIN-INTEREST-01 from a fixed 3
//   items each up to 12-15, matching the randomized-draw pattern piloted on
//   CALC-DIFF-01 (24 items) — see sapere-question-dna skill rule 5.
// v1.3 (2026-08-16, later same day) — added a first reasoningBlueprint pool
//   (2-5 DNA-generic items each) to every remaining DNA that had none: all
//   of TRIGONOMETRY, PROBABILITY, FUNCTIONS_ALGEBRA, STATISTICS, plus
//   CALC-TAN-01/CALC-OPT-01/CALC-AREA-01/CALC-MOTION-01 and SEQ-01/
//   SERIES-01. Every one of the 33 DNAs now has a warmup pool. These are a
//   first pass (2-5 items, not yet grown to the 12-24 depth of the 5 DNAs
//   with real question corpora attached) — deepen later if/when those
//   DNAs get real question-specific pre-step work.

export const QUESTION_DNA = [
  // ── CALCULUS ────────────────────────────────────────────────────────────
  {
    dna_id: 'CALC-DIFF-01', family: 'CALCULUS', skill: 'Direct differentiation',
    operations: ['identify_rule', 'differentiate', 'simplify'], priorityScore: 93, // C2
    // Reasoning-blueprint warmup (Sapere_Question_DNA_v2.0 §3-4, 3rd DNA,
    // 2026-08-15). DNA-generic only — true for every CALC-DIFF-01 question
    // regardless of the specific function being differentiated. The core
    // failure mode here is rule misidentification (reaching for product
    // rule on a composition, or chain rule on a product), so the warmup
    // targets that recognition step before any real numbers appear.
    reasoningBlueprint: [
      {
        step_id: 'W1',
        objective: 'Recognise when a function is a PRODUCT of two separate functions (needs the product rule).',
        required_skill: 'CALC-DIFF-01.1',
        axis: 'recognition',
        interaction_type: 'select',
        options: [
          { id: 'a', label: '$f(x) = x^2 \\sin(x)$ — two different functions of $x$ multiplied together' },
          { id: 'b', label: '$f(x) = (3x+1)^5$ — one function raised to a power' },
          { id: 'c', label: '$f(x) = \\sin(x^2)$ — one function nested inside another' },
        ],
        expected_response: 'a',
        common_errors: [
          { id: 'b', error_type: 'CALC-DIFF-01.E1_composition_confused_with_product' },
          { id: 'c', error_type: 'CALC-DIFF-01.E1_composition_confused_with_product' },
        ],
        hints: [
          'A product has two genuinely separate function pieces multiplied side by side, like $x^2$ and $\\sin(x)$.',
          '$(3x+1)^5$ and $\\sin(x^2)$ are each a single function built by feeding one expression into another — that\'s composition, not a product.',
        ],
        explanation:
          '$x^2\\sin(x)$ is two distinct functions ($x^2$ and $\\sin(x)$) multiplied together — that structure needs the product rule, $\\frac{d}{dx}[uv] = u\'v+uv\'$.',
      },
      {
        step_id: 'W2',
        objective: 'Recognise when a function is a COMPOSITION (needs the chain rule).',
        required_skill: 'CALC-DIFF-01.2',
        axis: 'recognition',
        interaction_type: 'select',
        options: [
          { id: 'a', label: '$f(x) = (3x+1)^5$ — an "outer" power applied to an "inner" expression $3x+1$' },
          { id: 'b', label: '$f(x) = x^2 \\sin(x)$ — two functions multiplied' },
          { id: 'c', label: '$f(x) = \\dfrac{x^2}{\\sin(x)}$ — one function divided by another' },
        ],
        expected_response: 'a',
        common_errors: [{ id: 'b', error_type: 'CALC-DIFF-01.E1_composition_confused_with_product' }],
        hints: [
          'A composition has one "outer" operation (like "raise to the power 5") wrapped around a whole "inner" expression.',
          'If you could substitute $u = $ (inner expression) and rewrite $f$ purely in terms of $u$, it\'s a composition — needs the chain rule.',
        ],
        explanation:
          '$(3x+1)^5$ is "raise-to-the-5th" wrapped around the inner expression $3x+1$ — substituting $u=3x+1$ gives $f=u^5$, the signature of a composition needing the chain rule, $\\frac{d}{dx}f(u) = f\'(u)\\cdot u\'$.',
      },
      {
        step_id: 'W3',
        objective: 'Recall the correct quotient rule formula for $f(x) = \\dfrac{u}{v}$.',
        required_skill: 'CALC-DIFF-01.3',
        axis: 'strategy_selection',
        interaction_type: 'select',
        options: [
          { id: 'a', label: '$\\dfrac{u\'v - uv\'}{v^2}$' },
          { id: 'b', label: '$\\dfrac{uv\' - u\'v}{v^2}$' },
          { id: 'c', label: '$\\dfrac{u\'v + uv\'}{v^2}$' },
        ],
        expected_response: 'a',
        common_errors: [
          { id: 'b', error_type: 'CALC-DIFF-01.E2_quotient_rule_order_swap' },
          { id: 'c', error_type: 'CALC-DIFF-01.E3_quotient_rule_sign_error' },
        ],
        hints: [
          'The numerator subtracts, it doesn\'t add — quotient rule is not just product rule with a $v^2$ underneath.',
          'The order matters: it\'s ($u$-derivative first)$\\times v$ minus $u \\times$($v$-derivative), not the other way around.',
        ],
        explanation:
          'For $f = \\dfrac{u}{v}$, the derivative is $\\dfrac{u\'v-uv\'}{v^2}$ — get the subtraction order right (it changes the sign of the whole answer) and remember the $v^2$ denominator.',
      },
      // W4-W24 (2026-08-16): pool expansion pilot — the student explicitly
      // asked for the warmup to draw a random subset each session instead
      // of always showing the same fixed W1-W3, so it doesn't feel stale on
      // repeat visits. DnaReasoningWarmup.jsx now picks 3 at random from
      // however many are here; every DNA still generic (true regardless of
      // the specific function). CALC-DIFF-01 is the pilot DNA for this —
      // scale to the other DNAs only after this is validated in the UI.
      ...(() => {
        const w = (stepId, skillSuffix, objective, axis, options, correctId, errorMap, hints, explanation) => ({
          step_id: stepId,
          objective,
          required_skill: `CALC-DIFF-01.${skillSuffix}`,
          axis,
          interaction_type: 'select',
          options,
          expected_response: correctId,
          common_errors: Object.entries(errorMap).map(([id, error_type]) => ({ id, error_type })),
          hints,
          explanation,
        });
        return [
          w('W4', '4', 'Recognise a PRODUCT structure in a different pair of functions.', 'recognition',
            [
              { id: 'a', label: '$f(x) = x\\ln x$ — two different functions of $x$ multiplied together' },
              { id: 'b', label: '$f(x) = \\ln(3x+1)$ — a log wrapped around an inner linear expression' },
              { id: 'c', label: '$f(x) = \\dfrac{\\ln x}{x}$ — one function divided by another' },
            ],
            'a', { b: 'CALC-DIFF-01.E1_composition_confused_with_product', c: 'CALC-DIFF-01.E4_product_confused_with_quotient' },
            ['$x$ and $\\ln x$ are two separate pieces multiplied together, not one nested inside the other.'],
            '$x\\ln x$ multiplies two distinct functions, $x$ and $\\ln x$ — product rule.'),
          w('W5', '5', 'Recognise a COMPOSITION in a log function.', 'recognition',
            [
              { id: 'a', label: '$f(x) = \\ln(3x+1)$ — an "outer" log applied to an "inner" linear expression' },
              { id: 'b', label: '$f(x) = x\\ln x$ — two functions multiplied' },
              { id: 'c', label: '$f(x) = \\dfrac{\\ln x}{x}$ — one function divided by another' },
            ],
            'a', { b: 'CALC-DIFF-01.E1_composition_confused_with_product' },
            ['Substituting $u=3x+1$ turns this into $f=\\ln u$ — a single outer function wrapped around an inner expression.'],
            '$\\ln(3x+1)$ is "take the log of" wrapped around the inner expression $3x+1$ — chain rule.'),
          w('W6', '6', 'Recognise a QUOTIENT structure (needs the quotient rule).', 'recognition',
            [
              { id: 'a', label: '$f(x) = \\dfrac{x^2}{x+1}$ — one function divided by another' },
              { id: 'b', label: '$f(x) = x^2(x+1)$ — two functions multiplied' },
              { id: 'c', label: '$f(x) = (x+1)^2$ — one function raised to a power' },
            ],
            'a', { b: 'CALC-DIFF-01.E4_product_confused_with_quotient', c: 'CALC-DIFF-01.E1_composition_confused_with_product' },
            ['A quotient has a clear top and bottom, separated by a division line — that structure needs the quotient rule.'],
            '$\\dfrac{x^2}{x+1}$ is one function divided by another — quotient rule, $\\dfrac{u\'v-uv\'}{v^2}$.'),
          w('W7', '7', 'Recognise when a function needs BOTH the product rule AND the chain rule.', 'recognition',
            [
              { id: 'a', label: '$f(x) = x^2e^{3x}$ — a product where one factor ($e^{3x}$) is itself a composition' },
              { id: 'b', label: '$f(x) = x^2 + e^{3x}$ — two functions added together' },
              { id: 'c', label: '$f(x) = e^{3x^2}$ — a single composition, no product involved' },
            ],
            'a', { c: 'CALC-DIFF-01.E1_composition_confused_with_product' },
            ['Look for TWO separate factors multiplied together first — then check if either factor is itself a composition needing the chain rule.'],
            '$x^2$ and $e^{3x}$ are multiplied (product rule), and $e^{3x}$ is itself a composition (chain rule) — both rules combine here.'),
          w('W8', '8', 'Recognise a composite trig function.', 'recognition',
            [
              { id: 'a', label: '$f(x) = \\cos(5x)$ — an outer cosine applied to an inner linear expression' },
              { id: 'b', label: '$f(x) = 5\\cos(x)$ — a constant multiplied by a trig function' },
              { id: 'c', label: '$f(x) = \\cos(x) + 5$ — a trig function plus a constant' },
            ],
            'a', { b: 'CALC-DIFF-01.E5_constant_multiple_confused_with_composition' },
            ['$5\\cos(x)$ is just a constant multiple — no chain rule needed there. $\\cos(5x)$ has the $5$ INSIDE the cosine — that\'s composition.'],
            '$\\cos(5x)$ is "take the cosine of" wrapped around the inner expression $5x$ — needs the chain rule.'),
          w('W9', '9', 'Recall the product rule formula.', 'strategy_selection',
            [
              { id: 'a', label: '$\\dfrac{d}{dx}[uv] = u\'v + uv\'$' },
              { id: 'b', label: '$\\dfrac{d}{dx}[uv] = u\'v\'$' },
              { id: 'c', label: '$\\dfrac{d}{dx}[uv] = u\'v - uv\'$' },
            ],
            'a', { b: 'CALC-DIFF-01.E6_product_rule_multiplied_derivatives', c: 'CALC-DIFF-01.E3_quotient_rule_sign_error' },
            ['The product rule ADDS two terms — it never just multiplies the two derivatives together.'],
            '$\\dfrac{d}{dx}[uv] = u\'v + uv\'$ — the derivative of the first times the second, plus the first times the derivative of the second.'),
          w('W10', '10', 'Recall the chain rule\'s three-part structure.', 'strategy_selection',
            [
              { id: 'a', label: 'Differentiate the outer function, KEEP the inner expression unchanged inside it, then multiply by the inner expression\'s own derivative' },
              { id: 'b', label: 'Differentiate the outer function only — the inner expression\'s derivative is never needed' },
              { id: 'c', label: 'Differentiate the inner expression only, and ignore the outer function' },
            ],
            'a', { b: 'CALC-DIFF-01.E7_chain_rule_missing_inner_derivative' },
            ['Forgetting the final "multiply by the inner derivative" step is the single most common chain-rule mistake.'],
            'Chain rule: differentiate outer (inner stays as-is inside), then multiply by (inner)\'.'),
          w('W11', '11', 'Recall what the "$v^2$" in the quotient rule denominator actually is.', 'strategy_selection',
            [
              { id: 'a', label: 'The ORIGINAL denominator, squared — not differentiated' },
              { id: 'b', label: 'The derivative of the denominator, squared' },
              { id: 'c', label: 'The numerator, squared' },
            ],
            'a', { b: 'CALC-DIFF-01.E8_quotient_rule_denominator_confused' },
            ['$v$ in the formula $\\dfrac{u\'v-uv\'}{v^2}$ is the plain original bottom function — it does not get differentiated for the denominator part.'],
            'The quotient rule\'s denominator is the ORIGINAL bottom function squared, e.g. for $\\dfrac{u}{x+1}$ it\'s $(x+1)^2$.'),
          w('W12', '12', 'Spot the correct term order in the quotient rule numerator.', 'strategy_selection',
            [
              { id: 'a', label: '($u$-derivative) $\\times v$, MINUS $u \\times$ ($v$-derivative)' },
              { id: 'b', label: '($v$-derivative) $\\times u$, MINUS $v \\times$ ($u$-derivative)' },
              { id: 'c', label: 'Either order works, since multiplication is commutative' },
            ],
            'a', { b: 'CALC-DIFF-01.E2_quotient_rule_order_swap', c: 'CALC-DIFF-01.E2_quotient_rule_order_swap' },
            ['Swapping the order flips the sign of the whole answer — it matters which term comes first.'],
            'It\'s $u\'v - uv\'$, not $v\'u - vu\'$ — swapping the order gives the exact negative of the correct answer.'),
          w('W13', '13', 'Recall a basic trig derivative.', 'strategy_selection',
            [
              { id: 'a', label: '$\\dfrac{d}{dx}[\\sin x] = \\cos x$' },
              { id: 'b', label: '$\\dfrac{d}{dx}[\\sin x] = -\\cos x$' },
              { id: 'c', label: '$\\dfrac{d}{dx}[\\sin x] = \\sin x$' },
            ],
            'a', { b: 'CALC-DIFF-01.E9_basic_derivative_sign_error' },
            ['No negative sign here — that\'s the derivative of $\\cos x$, not $\\sin x$.'],
            '$\\dfrac{d}{dx}[\\sin x] = \\cos x$ — a standard derivative to know directly.'),
          w('W14', '14', 'Recall a basic trig derivative (the one with the sign trap).', 'strategy_selection',
            [
              { id: 'a', label: '$\\dfrac{d}{dx}[\\cos x] = -\\sin x$' },
              { id: 'b', label: '$\\dfrac{d}{dx}[\\cos x] = \\sin x$' },
              { id: 'c', label: '$\\dfrac{d}{dx}[\\cos x] = -\\cos x$' },
            ],
            'a', { b: 'CALC-DIFF-01.E9_basic_derivative_sign_error' },
            ['This is the one that trips people up — differentiating $\\cos x$ flips the sign.'],
            '$\\dfrac{d}{dx}[\\cos x] = -\\sin x$ — don\'t drop this negative sign.'),
          w('W15', '15', 'Recall the derivative of $e^x$.', 'strategy_selection',
            [
              { id: 'a', label: '$\\dfrac{d}{dx}[e^x] = e^x$' },
              { id: 'b', label: '$\\dfrac{d}{dx}[e^x] = xe^{x-1}$' },
              { id: 'c', label: '$\\dfrac{d}{dx}[e^x] = e^x \\ln x$' },
            ],
            'a', { b: 'CALC-DIFF-01.E10_exponential_confused_with_power_rule' },
            ['$e^x$ is its own derivative — it\'s not a power of $x$, so the power rule doesn\'t apply.'],
            '$\\dfrac{d}{dx}[e^x] = e^x$ — one of the defining properties of $e^x$.'),
          w('W16', '16', 'Recall the derivative of $\\ln x$.', 'strategy_selection',
            [
              { id: 'a', label: '$\\dfrac{d}{dx}[\\ln x] = \\dfrac{1}{x}$' },
              { id: 'b', label: '$\\dfrac{d}{dx}[\\ln x] = \\dfrac{1}{\\ln x}$' },
              { id: 'c', label: '$\\dfrac{d}{dx}[\\ln x] = x$' },
            ],
            'a', { b: 'CALC-DIFF-01.E11_log_derivative_confused' },
            ['A standard derivative worth knowing cold.'],
            '$\\dfrac{d}{dx}[\\ln x] = \\dfrac{1}{x}$.'),
          w('W17', '17', 'Recall the derivative of $\\tan x$.', 'strategy_selection',
            [
              { id: 'a', label: '$\\dfrac{d}{dx}[\\tan x] = \\sec^2 x$' },
              { id: 'b', label: '$\\dfrac{d}{dx}[\\tan x] = \\sec x \\tan x$' },
              { id: 'c', label: '$\\dfrac{d}{dx}[\\tan x] = -\\sec^2 x$' },
            ],
            'a', { b: 'CALC-DIFF-01.E9_basic_derivative_sign_error' },
            ['$\\sec x\\tan x$ is the derivative of $\\sec x$, not $\\tan x$.'],
            '$\\dfrac{d}{dx}[\\tan x] = \\sec^2 x$ — a standard derivative worth memorising.'),
          w('W18', '18', 'Find the inner derivative for a linear inner expression.', 'execution',
            [
              { id: 'a', label: 'For inner expression $7x-2$, the inner derivative is $7$' },
              { id: 'b', label: 'For inner expression $7x-2$, the inner derivative is $7x$' },
              { id: 'c', label: 'For inner expression $7x-2$, the inner derivative is $-2$' },
            ],
            'a', { b: 'CALC-DIFF-01.E7_chain_rule_missing_inner_derivative', c: 'CALC-DIFF-01.E7_chain_rule_missing_inner_derivative' },
            ['Differentiate the linear expression like any other function: the $x$-coefficient survives, the constant vanishes.'],
            'The derivative of $7x-2$ is just $7$ — the coefficient of $x$, since the constant term differentiates to $0$.'),
          w('W19', '19', 'Find the inner derivative for a quadratic inner expression.', 'execution',
            [
              { id: 'a', label: 'For inner expression $x^2-4$, the inner derivative is $2x$' },
              { id: 'b', label: 'For inner expression $x^2-4$, the inner derivative is $x^2$' },
              { id: 'c', label: 'For inner expression $x^2-4$, the inner derivative is $2$' },
            ],
            'a', { b: 'CALC-DIFF-01.E7_chain_rule_missing_inner_derivative', c: 'CALC-DIFF-01.E7_chain_rule_missing_inner_derivative' },
            ['Apply the ordinary power rule to the inner expression itself, term by term.'],
            'The derivative of $x^2-4$ is $2x$ (power rule on $x^2$; the constant $-4$ vanishes).'),
          w('W20', '20', 'Recognise when factoring/simplifying is needed after applying the product rule.', 'simplify_and_verify',
            [
              { id: 'a', label: 'When both terms share a common factor (e.g. both have $x^2$ and $e^{3x}$ in them), factor it out to match the answer format usually expected' },
              { id: 'b', label: 'Simplifying is never necessary — the unfactored product-rule result is always the final answer' },
              { id: 'c', label: 'Always multiply the two terms together at the end' },
            ],
            'a', { b: 'CALC-DIFF-01.E12_skipped_simplification' },
            ['HSC-style answers are usually expected in factored form, not left as a raw sum of two terms.'],
            'After applying the product rule, look for a common factor across both terms and factor it out.'),
          w('W21', '21', 'Recognise a valid simplification step on a quotient-rule result.', 'simplify_and_verify',
            [
              { id: 'a', label: 'If every term in BOTH the numerator and denominator shares a common factor, you can cancel it' },
              { id: 'b', label: 'You can cancel any single term from the numerator with any single term from the denominator, even if others don\'t share that factor' },
              { id: 'c', label: 'Quotient-rule results can never be simplified further' },
            ],
            'a', { b: 'CALC-DIFF-01.E13_invalid_partial_cancellation' },
            ['Cancellation only works when the SAME factor divides every term on both top and bottom — not just some of them.'],
            'Only cancel a factor that divides EVERY term in both the numerator and the denominator.'),
          w('W22', '22', 'Track a sign cancellation in a chain-rule derivative.', 'simplify_and_verify',
            [
              { id: 'a', label: '$-2(\\cos x)^{-3}\\times(-\\sin x)$ simplifies to a POSITIVE expression (two negatives cancel)' },
              { id: 'b', label: '$-2(\\cos x)^{-3}\\times(-\\sin x)$ stays NEGATIVE (the signs don\'t interact)' },
              { id: 'c', label: 'The signs can\'t be determined without knowing the value of $x$' },
            ],
            'a', { b: 'CALC-DIFF-01.E14_missed_sign_cancellation' },
            ['A negative times a negative is always positive, regardless of what $x$ is.'],
            'Two negative factors multiply to a positive result — always check for this cancellation before finalising a chain-rule answer.'),
          w('W23', '23', 'Recall the exponential rule for a base other than $e$.', 'strategy_selection',
            [
              { id: 'a', label: '$\\dfrac{d}{dx}[a^x] = a^x \\ln a$' },
              { id: 'b', label: '$\\dfrac{d}{dx}[a^x] = xa^{x-1}$' },
              { id: 'c', label: '$\\dfrac{d}{dx}[a^x] = a^x$ (same rule as base $e$)' },
            ],
            'a', { b: 'CALC-DIFF-01.E10_exponential_confused_with_power_rule', c: 'CALC-DIFF-01.E15_forgot_ln_a_factor' },
            ['The simple "own derivative" shortcut only works for base $e$ — any other base needs an extra $\\ln a$ factor.'],
            '$\\dfrac{d}{dx}[a^x] = a^x\\ln a$ — don\'t drop the $\\ln a$ factor when the base isn\'t $e$.'),
          w('W24', '24', 'Distinguish "find the general derivative" from "evaluate the derivative at a specific point".', 'recognition',
            [
              { id: 'a', label: '"Find $f\'(x)$" asks for the general derivative EXPRESSION (still contains $x$); "find $f\'(2)$" asks for a single NUMBER' },
              { id: 'b', label: 'Both instructions always mean exactly the same thing' },
              { id: 'c', label: '"Find $f\'(x)$" asks for a number; "find $f\'(2)$" asks for an expression' },
            ],
            'a', { c: 'CALC-DIFF-01.E16_instruction_misread' },
            ['If the question keeps the variable $x$ in the answer, it wants the general expression — a specific number like $f\'(2)$ means substitute and evaluate.'],
            '$f\'(x)$ is the general derivative expression (still has $x$ in it); $f\'(2)$ means substitute $x=2$ into that expression to get one number.'),
        ];
      })(),
    ],
  },
  {
    dna_id: 'CALC-TAN-01', family: 'CALCULUS', skill: 'Tangent / normal',
    operations: ['differentiate', 'evaluate_gradient', 'form_line_equation'], priorityScore: 93, // C2
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Know what a tangent line's gradient equals at a point.",
        "required_skill": "CALC-TAN-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The tangent's gradient equals $f'(x_0)$ — the derivative evaluated at that point"
          },
          {
            "id": "b",
            "label": "The tangent's gradient equals $f(x_0)$ — the function value at that point"
          },
          {
            "id": "c",
            "label": "The tangent's gradient is always $1$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-TAN-01.E1_gradient_vs_value_confusion"
          }
        ],
        "hints": [
          "The gradient of a curve at a point is exactly what the derivative measures there."
        ],
        "explanation": "The tangent line touches the curve at $x_0$ with the SAME gradient as the curve — that gradient is $f'(x_0)$."
      },
      {
        "step_id": "W2",
        "objective": "Recall how a normal line's gradient relates to the tangent's gradient.",
        "required_skill": "CALC-TAN-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Perpendicular: $m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}}$"
          },
          {
            "id": "b",
            "label": "The normal has the SAME gradient as the tangent"
          },
          {
            "id": "c",
            "label": "The normal's gradient is the negative of the tangent's: $m_{\\text{normal}}=-m_{\\text{tangent}}$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-TAN-01.E2_tangent_normal_confused"
          },
          {
            "id": "c",
            "error_type": "CALC-TAN-01.E3_perpendicular_rule_misapplied"
          }
        ],
        "hints": [
          "Perpendicular lines have gradients that are negative reciprocals of each other, not just opposite in sign."
        ],
        "explanation": "A normal line is perpendicular to the tangent at that point, so $m_{\\text{normal}}=-\\dfrac{1}{m_{\\text{tangent}}}$ (product of perpendicular gradients is $-1$)."
      },
      {
        "step_id": "W3",
        "objective": "Recall the point-gradient form used to write the line's equation.",
        "required_skill": "CALC-TAN-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$y-y_1=m(x-x_1)$, using the point $(x_1,y_1)$ and gradient $m$"
          },
          {
            "id": "b",
            "label": "$y=mx$, ignoring the specific point"
          },
          {
            "id": "c",
            "label": "$y_1-x_1=m(y-x)$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-TAN-01.E4_point_ignored"
          }
        ],
        "hints": [
          "A specific line through a specific point needs that point substituted in, not just the gradient."
        ],
        "explanation": "Point-gradient form $y-y_1=m(x-x_1)$ builds the line through the known point $(x_1,y_1)$ with gradient $m$."
      },
      {
        "step_id": "W4",
        "objective": "Know which function to substitute $x_0$ into for the gradient, versus for the $y$-coordinate.",
        "required_skill": "CALC-TAN-01.4",
        "axis": "execution",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Substitute $x_0$ into $f'(x)$ to get the gradient; substitute $x_0$ into the ORIGINAL $f(x)$ to get $y_1$"
          },
          {
            "id": "b",
            "label": "Substitute $x_0$ into $f(x)$ for both the gradient and the $y$-coordinate"
          },
          {
            "id": "c",
            "label": "Substitute $x_0$ into $f'(x)$ for both the gradient and the $y$-coordinate"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-TAN-01.E5_wrong_function_for_gradient"
          },
          {
            "id": "c",
            "error_type": "CALC-TAN-01.E6_wrong_function_for_coordinate"
          }
        ],
        "hints": [
          "The gradient comes from the DERIVATIVE; the point on the curve comes from the ORIGINAL function — two different substitutions, into two different expressions."
        ],
        "explanation": "Two separate substitutions are needed: $f'(x_0)$ gives the gradient, $f(x_0)$ gives the $y$-coordinate of the point the line passes through."
      },
      {
        "step_id": "W5",
        "objective": "Distinguish the instruction \"find the tangent\" from \"find the normal\".",
        "required_skill": "CALC-TAN-01.5",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "\"Tangent\" wants the line that TOUCHES the curve with the SAME gradient; \"normal\" wants the PERPENDICULAR line at that same point"
          },
          {
            "id": "b",
            "label": "Both instructions always produce the identical line"
          },
          {
            "id": "c",
            "label": "\"Tangent\" means perpendicular, \"normal\" means same gradient"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "CALC-TAN-01.E2_tangent_normal_confused"
          }
        ],
        "hints": [
          "\"Normal\" in this context specifically means perpendicular to the curve — not \"the usual/ordinary line\"."
        ],
        "explanation": "A tangent shares the curve's own gradient at that point; a normal is perpendicular to it — read the question carefully to know which gradient rule applies."
      }
    ],
  },
  {
    dna_id: 'CALC-STAT-01', family: 'CALCULUS', skill: 'Stationary points & curve analysis',
    operations: ['differentiate', 'find_stationary_point', 'classify', 'sketch_or_describe'], priorityScore: 93, // C2
    // Reasoning-blueprint warmup (Sapere_Question_DNA_v2.0 §3-4, 5th DNA,
    // 2026-08-15). DNA-generic only — true for every CALC-STAT-01
    // question regardless of the specific function. The core failure
    // modes here are: (1) confusing "stationary point" (f'(x)=0) with
    // "x-intercept" (f(x)=0) — a very common mix-up since both involve
    // "setting something to zero", and (2) misreading the second
    // derivative test's sign convention, and not knowing what to do when
    // it's inconclusive (f''=0).
    reasoningBlueprint: [
      {
        step_id: 'W1',
        objective: 'Recognise that a stationary point requires the DERIVATIVE to be zero, not the function itself.',
        required_skill: 'CALC-STAT-01.1',
        axis: 'recognition',
        interaction_type: 'select',
        options: [
          { id: 'a', label: 'Solve $f\'(x)=0$ — the gradient is zero at a stationary point' },
          { id: 'b', label: 'Solve $f(x)=0$ — the curve crosses the $x$-axis' },
          { id: 'c', label: 'Solve $f(0)$ — evaluate the function at $x=0$' },
        ],
        expected_response: 'a',
        common_errors: [{ id: 'b', error_type: 'CALC-STAT-01.E1_stationary_vs_intercept_confusion' }],
        hints: [
          'A stationary point is where the curve is momentarily flat — that\'s a statement about the GRADIENT, not the height of the curve.',
          'Setting $f(x)=0$ finds where the curve crosses the $x$-axis, a completely different question from where it has a turning point.',
        ],
        explanation:
          'A stationary point occurs where the gradient is zero, i.e. $f\'(x)=0$ — not where the function value itself is zero.',
      },
      {
        step_id: 'W2',
        objective: 'Recall the second derivative test\'s sign convention for classifying a stationary point.',
        required_skill: 'CALC-STAT-01.2',
        axis: 'strategy_selection',
        interaction_type: 'select',
        options: [
          { id: 'a', label: '$f\'\'(x)>0 \\Rightarrow$ local minimum; $f\'\'(x)<0 \\Rightarrow$ local maximum' },
          { id: 'b', label: '$f\'\'(x)>0 \\Rightarrow$ local maximum; $f\'\'(x)<0 \\Rightarrow$ local minimum' },
          { id: 'c', label: 'The sign of $f\'\'(x)$ doesn\'t affect the classification' },
        ],
        expected_response: 'a',
        common_errors: [{ id: 'b', error_type: 'CALC-STAT-01.E2_concavity_sign_reversed' }],
        hints: [
          'Think of a smile-shaped curve (concave up, like $y=x^2$ near its minimum) — it curves upward, matching a POSITIVE second derivative and a MINIMUM.',
          'A frown-shaped curve (concave down) curves downward, matching a NEGATIVE second derivative and a MAXIMUM.',
        ],
        explanation:
          '$f\'\'(x)>0$ means the curve is concave up (like a smile) at that point — a local minimum. $f\'\'(x)<0$ means concave down (a frown) — a local maximum.',
      },
      {
        step_id: 'W3',
        objective: 'Know what to do when the second derivative test is inconclusive ($f\'\'(x)=0$).',
        required_skill: 'CALC-STAT-01.3',
        axis: 'strategy_selection',
        interaction_type: 'select',
        options: [
          { id: 'a', label: 'Test the sign of $f\'(x)$ just before and just after the point (a sign diagram) to classify it directly' },
          { id: 'b', label: 'Conclude the point must be a horizontal point of inflection with no further checking' },
          { id: 'c', label: 'Conclude the point is definitely neither a maximum nor minimum' },
        ],
        expected_response: 'a',
        common_errors: [{ id: 'b', error_type: 'CALC-STAT-01.E3_assumed_inflection_without_checking' }],
        hints: [
          '$f\'\'(x)=0$ only means the second derivative test CAN\'T decide — it does not automatically mean "point of inflection". $y=x^4$ at $x=0$ has $f\'\'(0)=0$ but is still a minimum.',
          'When the second derivative test is inconclusive, fall back to checking the sign of $f\'(x)$ on either side of the point.',
        ],
        explanation:
          'When $f\'\'(x)=0$, the second derivative test gives no information — you must go back to checking the sign of $f\'(x)$ immediately either side of the point to correctly classify it.',
      },
      // W4-W15 (2026-08-16): pool expansion, same randomized-draw pattern
      // piloted on CALC-DIFF-01 — grow past the fixed 3 so repeat visits
      // don't feel stale. Still DNA-generic only.
      ...(() => {
        const w = (stepId, skillSuffix, objective, axis, options, correctId, errorMap, hints, explanation) => ({
          step_id: stepId,
          objective,
          required_skill: `CALC-STAT-01.${skillSuffix}`,
          axis,
          interaction_type: 'select',
          options,
          expected_response: correctId,
          common_errors: Object.entries(errorMap).map(([id, error_type]) => ({ id, error_type })),
          hints,
          explanation,
        });
        return [
          w('W4', '4', 'Recognise the difference between a "turning point" and a "horizontal point of inflection".', 'recognition',
            [
              { id: 'a', label: 'A turning point is where the curve changes direction (concavity/gradient sign changes either side); a horizontal point of inflection is stationary ($f\'=0$) but keeps going the SAME way' },
              { id: 'b', label: 'They are always exactly the same thing' },
              { id: 'c', label: 'A horizontal point of inflection is always a maximum' },
            ],
            'a', { b: 'CALC-STAT-01.E4_turning_point_vs_inflection', c: 'CALC-STAT-01.E4_turning_point_vs_inflection' },
            ['Both are "stationary" ($f\'=0$), but only a turning point actually reverses direction — check the sign of $f\'(x)$ on both sides.'],
            'Every turning point is stationary, but not every stationary point is a turning point — a horizontal point of inflection is flat for an instant but the curve keeps rising (or keeps falling) through it.'),
          w('W5', '5', 'Know the alternative to the second derivative test: the first-derivative sign diagram.', 'strategy_selection',
            [
              { id: 'a', label: 'Test the sign of $f\'(x)$ just before and just after the stationary point — sign change $+\\to-$ is a maximum, $-\\to+$ is a minimum, no change means not a turning point' },
              { id: 'b', label: 'The first-derivative sign only tells you where the curve is increasing, never anything about stationary points' },
              { id: 'c', label: 'A sign diagram can only be used on straight-line functions' },
            ],
            'a', { b: 'CALC-STAT-01.E5_sign_diagram_misunderstood' },
            ['This is the fallback method whenever the second derivative test is inconclusive or awkward to compute.'],
            'A first-derivative sign diagram classifies a stationary point directly from how $f\'(x)$ behaves either side of it, without needing $f\'\'(x)$ at all.'),
          w('W6', '6', 'Know what "concave up on an interval" actually requires.', 'recognition',
            [
              { id: 'a', label: '$f\'\'(x)>0$ for EVERY $x$ throughout that whole interval, not just at one point' },
              { id: 'b', label: '$f\'\'(x)>0$ at just one single point somewhere in the interval' },
              { id: 'c', label: '$f\'(x)>0$ throughout the interval' },
            ],
            'a', { b: 'CALC-STAT-01.E6_concavity_at_a_point_vs_interval', c: 'CALC-STAT-01.E6_concavity_at_a_point_vs_interval' },
            ['Concavity is a statement about a whole interval, not a single $x$-value — and it\'s about $f\'\'$, not $f\'$.'],
            'Concave up on an interval means $f\'\'(x)>0$ across the entire interval, not just at one point — mixing this up with $f\'(x)>0$ confuses concavity with increasing.'),
          w('W7', '7', 'Recognise that "find the nature of the stationary point(s)" requires a classification step, not just the $x$-value(s).', 'recognition',
            [
              { id: 'a', label: 'State whether each point is a maximum, minimum, or horizontal inflection — solving $f\'(x)=0$ alone doesn\'t answer this' },
              { id: 'b', label: 'Solving $f\'(x)=0$ for $x$ is the complete answer' },
              { id: 'c', label: 'State only the $y$-coordinate' },
            ],
            'a', { b: 'CALC-STAT-01.E7_missing_classification' },
            ['"Nature" is asking specifically for max/min/inflection — an $x$-value on its own doesn\'t say which type it is.'],
            '"Find the nature" means classify each stationary point (max, min, or horizontal inflection) using the second derivative test or a sign diagram — not just list the $x$-values where $f\'(x)=0$.'),
          w('W8', '8', 'Recognise that a stationary point at a restricted domain\'s ENDpoint is different from an interior stationary point.', 'recognition',
            [
              { id: 'a', label: 'An endpoint is only a stationary point if $f\'(x)=0$ actually holds there too — otherwise it\'s just a boundary of the domain, not a genuine stationary point' },
              { id: 'b', label: 'Every endpoint of a restricted domain automatically counts as a stationary point' },
              { id: 'c', label: 'Endpoints can never be stationary points' },
            ],
            'a', { b: 'CALC-STAT-01.E8_endpoint_assumed_stationary' },
            ['Being at the edge of the allowed domain doesn\'t by itself make the gradient zero there — check $f\'(x)=0$ explicitly.'],
            'A restricted-domain endpoint is only a stationary point if $f\'(x)=0$ genuinely holds there — otherwise it may still be a local max/min for the restricted domain, but not a stationary one.'),
          w('W9', '9', 'Know which value to substitute back to find the $y$-coordinate of a stationary point.', 'execution',
            [
              { id: 'a', label: 'Substitute the $x$-value into the ORIGINAL function $f(x)$, not into $f\'(x)$' },
              { id: 'b', label: 'Substitute the $x$-value into $f\'(x)$' },
              { id: 'c', label: 'Substitute the $x$-value into $f\'\'(x)$' },
            ],
            'a', { b: 'CALC-STAT-01.E9_wrong_function_for_coordinate', c: 'CALC-STAT-01.E9_wrong_function_for_coordinate' },
            ['$f\'(x)=0$ finds WHERE the stationary point is; the height of the curve there comes from the original $f(x)$.'],
            'The $x$-value solves $f\'(x)=0$, but the matching $y$-coordinate comes from substituting that $x$ back into the ORIGINAL function $f(x)$.'),
          w('W10', '10', 'Perform the second derivative test\'s substitution step correctly.', 'execution',
            [
              { id: 'a', label: 'Differentiate twice to get $f\'\'(x)$, THEN substitute the stationary point\'s $x$-value into that $f\'\'(x)$ expression' },
              { id: 'b', label: 'Substitute the $x$-value into $f\'(x)$ before differentiating a second time' },
              { id: 'c', label: 'Differentiate $f(x)$ twice at the specific $x$-value directly, skipping the general $f\'\'(x)$ expression' },
            ],
            'a', { b: 'CALC-STAT-01.E10_substitution_order_wrong' },
            ['Find the general $f\'\'(x)$ expression first, then plug in the number — doing it in the other order doesn\'t make sense.'],
            'Get the general expression $f\'\'(x)$ first by differentiating twice, then substitute the stationary point\'s $x$-value into it.'),
          w('W11', '11', 'Choose valid test points for a first-derivative sign diagram.', 'execution',
            [
              { id: 'a', label: 'Pick $x$-values strictly BETWEEN consecutive stationary points (or domain boundaries) — never exactly at a stationary point itself' },
              { id: 'b', label: 'Pick the stationary point\'s own $x$-value as the test point' },
              { id: 'c', label: 'Any $x$-value works, including ones far outside the relevant interval' },
            ],
            'a', { b: 'CALC-STAT-01.E11_test_point_at_critical_value' },
            ['Testing exactly at a stationary point just gives $0$ again — you need a nearby value to see which way the gradient is heading.'],
            'A valid sign-diagram test point sits strictly between two consecutive critical $x$-values, never on top of one — evaluating $f\'(x)$ there reveals the local increasing/decreasing behaviour.'),
          w('W12', '12', 'Distinguish "local" (relative) extremum from "global" (absolute) extremum on a restricted domain.', 'recognition',
            [
              { id: 'a', label: 'A local max/min only needs to be the highest/lowest NEARBY; a global max/min must be the highest/lowest over the ENTIRE domain, and may occur at an endpoint instead of a stationary point' },
              { id: 'b', label: 'Local and global extrema are always the same value' },
              { id: 'c', label: 'A global extremum can only ever occur at a stationary point, never at an endpoint' },
            ],
            'a', { c: 'CALC-STAT-01.E12_global_extremum_endpoint_ignored' },
            ['On a closed interval, always check the endpoint values too — the overall highest/lowest point isn\'t guaranteed to be a stationary point.'],
            'A local extremum is only the highest/lowest compared to its immediate neighbourhood; the global extremum on a restricted domain must also be compared against the domain\'s endpoint values.'),
          w('W13', '13', 'Know what to do after finding $f\'(x)=0$ gives an expression that needs factoring.', 'execution',
            [
              { id: 'a', label: 'Factor the derivative expression fully before solving — each factor set to zero gives a stationary point' },
              { id: 'b', label: 'If $f\'(x)$ doesn\'t obviously equal zero at $x=0$, conclude there are no stationary points' },
              { id: 'c', label: 'Only the first factor found needs to be solved' },
            ],
            'a', { b: 'CALC-STAT-01.E13_gave_up_without_factoring', c: 'CALC-STAT-01.E13_gave_up_without_factoring' },
            ['A derivative that isn\'t already factored still needs the usual factoring techniques (common factor, quadratic formula, etc.) before you can read off every root.'],
            'Solving $f\'(x)=0$ for a non-trivial expression means factoring it completely first — every distinct factor set to zero contributes a separate stationary point.'),
        ];
      })(),
    ],
  },
  {
    dna_id: 'CALC-OPT-01', family: 'CALCULUS', skill: 'Optimisation',
    operations: ['model', 'differentiate', 'find_stationary_point', 'classify', 'interpret'], priorityScore: 96, // C3
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recognise the first step in an optimisation problem with two related variables.",
        "required_skill": "CALC-OPT-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Use the given constraint equation to express the quantity to optimise in terms of a SINGLE variable, before differentiating"
          },
          {
            "id": "b",
            "label": "Differentiate the quantity to optimise immediately, treating both variables as independent"
          },
          {
            "id": "c",
            "label": "Ignore the constraint equation entirely"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-OPT-01.E1_skipped_single_variable_reduction"
          }
        ],
        "hints": [
          "You can only differentiate a function of ONE variable — use the constraint to eliminate the other one first."
        ],
        "explanation": "Optimisation problems give a constraint relating two variables — substitute it in so the quantity to optimise is written in terms of just one variable, then differentiate that."
      },
      {
        "step_id": "W2",
        "objective": "Know that finding a stationary point isn't the end of an optimisation problem.",
        "required_skill": "CALC-OPT-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The stationary point must still be CLASSIFIED as a maximum or minimum (via 2nd derivative test or sign diagram) to answer \"find the maximum/minimum\""
          },
          {
            "id": "b",
            "label": "Finding where $\\frac{d}{dx}=0$ is always the complete final answer"
          },
          {
            "id": "c",
            "label": "Classification is only needed if the question explicitly says the word \"classify\""
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-OPT-01.E2_missing_classification"
          }
        ],
        "hints": [
          "A stationary point on its own doesn't say whether it's the maximum or minimum the question is asking for — that needs an extra check."
        ],
        "explanation": "After solving for the stationary point, classify it (max/min) to confirm it actually answers \"find the maximum/minimum value\" — don't stop at just finding where the derivative is zero."
      },
      {
        "step_id": "W3",
        "objective": "Know to check domain endpoints in a restricted optimisation problem.",
        "required_skill": "CALC-OPT-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "If the variable has a realistic restricted domain (e.g. a length must be positive and less than some bound), also check the function's value AT the domain endpoints — the true max/min might be there, not at the stationary point"
          },
          {
            "id": "b",
            "label": "Domain endpoints never need to be checked in an optimisation problem"
          },
          {
            "id": "c",
            "label": "Only the stationary point matters, regardless of any domain restriction"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-OPT-01.E3_endpoints_ignored"
          },
          {
            "id": "c",
            "error_type": "CALC-OPT-01.E3_endpoints_ignored"
          }
        ],
        "hints": [
          "A restricted real-world domain means the true optimum might sit at the boundary of what's physically possible, not just at a stationary point."
        ],
        "explanation": "On a restricted (closed) domain, the global max/min could occur at an endpoint rather than a stationary point — always compare both."
      },
      {
        "step_id": "W4",
        "objective": "Know that a practical optimisation answer needs interpreting in context.",
        "required_skill": "CALC-OPT-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "State the final answer with correct units and, if the quantity must be a whole number (e.g. number of items), round appropriately in context"
          },
          {
            "id": "b",
            "label": "A bare number with no units or context is always sufficient"
          },
          {
            "id": "c",
            "label": "Decimal answers never need rounding, even for physically discrete quantities"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-OPT-01.E4_missing_context_interpretation"
          }
        ],
        "hints": [
          "A real-world optimisation answer is a length, cost, time, or quantity — it needs units and, where relevant, sensible rounding to make physical sense."
        ],
        "explanation": "Optimisation answers must be interpreted back in the real-world context (units, and rounding to a whole number if the quantity is discrete) — not left as a raw unlabelled number."
      },
      {
        "step_id": "W5",
        "objective": "Choose which variable to eliminate via substitution.",
        "required_skill": "CALC-OPT-01.5",
        "axis": "execution",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Solve the constraint equation for whichever variable makes the substitution algebraically simplest"
          },
          {
            "id": "b",
            "label": "Always eliminate whichever variable appears first in the constraint equation, regardless of complexity"
          },
          {
            "id": "c",
            "label": "It never matters which variable is eliminated — both choices are always equally simple"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "CALC-OPT-01.E5_harder_substitution_chosen"
          }
        ],
        "hints": [
          "Look at the constraint equation and pick whichever variable is easiest to isolate — this avoids messy fractions or extra algebra later."
        ],
        "explanation": "Rearranging the constraint for the algebraically simpler variable to eliminate makes the subsequent differentiation far more manageable — it's a genuine choice worth making deliberately."
      }
    ],
  },
  {
    dna_id: 'CALC-INT-01', family: 'CALCULUS', skill: 'Integration',
    operations: ['identify_technique', 'integrate', 'apply_initial_condition_or_limits'], priorityScore: 95, // C4
    // Reasoning-blueprint warmup (Sapere_Question_DNA_v2.0 §3-4, 4th DNA,
    // 2026-08-15). DNA-generic only — true for every CALC-INT-01 question
    // regardless of the specific function being integrated. The core
    // failure modes here are: (1) technique misidentification (reaching
    // for direct/power-rule integration on something that needs a
    // reverse-chain-rule/substitution recognition first), and (2) forgetting
    // +C vs. correctly using given limits/initial conditions to pin the
    // constant down — so the warmup targets both before any real numbers
    // appear.
    reasoningBlueprint: [
      {
        step_id: 'W1',
        objective: 'Recognise when a function needs the reverse chain rule (not just the plain power rule).',
        required_skill: 'CALC-INT-01.1',
        axis: 'recognition',
        interaction_type: 'select',
        options: [
          { id: 'a', label: '$\\displaystyle\\int (3x+1)^5\\,dx$ — a linear expression raised to a power' },
          { id: 'b', label: '$\\displaystyle\\int x^5\\,dx$ — a plain power of $x$' },
          { id: 'c', label: '$\\displaystyle\\int 5\\,dx$ — a constant' },
        ],
        expected_response: 'a',
        common_errors: [{ id: 'b', error_type: 'CALC-INT-01.E1_technique_misidentification' }],
        hints: [
          'A plain power of $x$ (or a constant) only needs the ordinary power rule for integration.',
          '$(3x+1)^5$ has an inner linear expression — integrating it needs the reverse chain rule, which divides by the derivative of that inner expression.',
        ],
        explanation:
          '$(3x+1)^5$ is a composed function (an inner linear expression raised to a power) — integrating it needs the reverse chain rule: $\\int (ax+b)^n\\,dx = \\dfrac{(ax+b)^{n+1}}{a(n+1)}+C$.',
      },
      {
        step_id: 'W2',
        objective: 'Know when an indefinite integral needs "+C" and when a definite integral does not.',
        required_skill: 'CALC-INT-01.2',
        axis: 'strategy_selection',
        interaction_type: 'select',
        options: [
          { id: 'a', label: 'Indefinite integral (no limits, e.g. $\\int f(x)\\,dx$) needs $+C$; a definite integral (with limits, e.g. $\\int_a^b f(x)\\,dx$) evaluates to a single number and does NOT' },
          { id: 'b', label: 'Every integral, definite or indefinite, always needs $+C$' },
          { id: 'c', label: 'Neither type ever needs $+C$' },
        ],
        expected_response: 'a',
        common_errors: [
          { id: 'b', error_type: 'CALC-INT-01.E2_unnecessary_plus_c' },
          { id: 'c', error_type: 'CALC-INT-01.E3_missing_plus_c' },
        ],
        hints: [
          'A definite integral (with limits) is evaluated by substituting both limits and subtracting — any $+C$ would cancel out anyway.',
          'An indefinite integral (the general antiderivative, no limits given) represents a whole family of curves, so it always needs $+C$.',
        ],
        explanation:
          'Indefinite integrals need $+C$ (a whole family of antiderivatives); definite integrals (with limits) evaluate to one specific number, so $+C$ is never written.',
      },
      {
        step_id: 'W3',
        objective: 'Recognise how a given initial condition (a known point on the curve) is used to find the value of C.',
        required_skill: 'CALC-INT-01.3',
        axis: 'strategy_selection',
        interaction_type: 'select',
        options: [
          { id: 'a', label: 'Substitute the given $x$ and $y$ values into the general antiderivative (which still has $+C$), then solve for $C$' },
          { id: 'b', label: 'Substitute the given $x$ value into the ORIGINAL function (before integrating), then solve for $C$' },
          { id: 'c', label: 'Ignore the initial condition — $C$ is always $0$' },
        ],
        expected_response: 'a',
        common_errors: [
          { id: 'b', error_type: 'CALC-INT-01.E4_wrong_function_for_condition' },
          { id: 'c', error_type: 'CALC-INT-01.E5_ignored_initial_condition' },
        ],
        hints: [
          'The initial condition is a point $(x,y)$ that lies ON the antiderivative curve — it\'s used AFTER integrating, not before.',
          'Substitute both the given $x$ and the given $y$ into $y = (\\text{antiderivative}) + C$, then solve the resulting equation for $C$.',
        ],
        explanation:
          'An initial condition is a known point on the integrated curve — substitute it into the general antiderivative (with $+C$ still in place) and solve for $C$; it\'s never applied to the original un-integrated function.',
      },
      // W4-W15 (2026-08-16): pool expansion, same randomized-draw pattern
      // piloted on CALC-DIFF-01. Still DNA-generic only.
      ...(() => {
        const w = (stepId, skillSuffix, objective, axis, options, correctId, errorMap, hints, explanation) => ({
          step_id: stepId,
          objective,
          required_skill: `CALC-INT-01.${skillSuffix}`,
          axis,
          interaction_type: 'select',
          options,
          expected_response: correctId,
          common_errors: Object.entries(errorMap).map(([id, error_type]) => ({ id, error_type })),
          hints,
          explanation,
        });
        return [
          w('W4', '4', 'Recall the integral of $\\sin(ax+b)$ — the reversed sign trap.', 'strategy_selection',
            [
              { id: 'a', label: '$\\displaystyle\\int \\sin(ax+b)\\,dx = -\\dfrac{1}{a}\\cos(ax+b)+C$' },
              { id: 'b', label: '$\\displaystyle\\int \\sin(ax+b)\\,dx = \\dfrac{1}{a}\\cos(ax+b)+C$' },
              { id: 'c', label: '$\\displaystyle\\int \\sin(ax+b)\\,dx = -a\\cos(ax+b)+C$' },
            ],
            'a', { b: 'CALC-INT-01.E6_trig_integral_sign_error', c: 'CALC-INT-01.E7_reverse_chain_factor_inverted' },
            ['Integration reverses differentiation, so the sign flips the OPPOSITE way to $\\frac{d}{dx}[\\cos x]=-\\sin x$.', 'Divide by $a$ (not multiply) — the reverse chain rule divides by the inner derivative.'],
            'Since $\\frac{d}{dx}[\\cos(ax+b)]=-a\\sin(ax+b)$, undoing it gives $\\int\\sin(ax+b)\\,dx=-\\frac{1}{a}\\cos(ax+b)+C$.'),
          w('W5', '5', 'Recall the integral of $\\cos(ax+b)$.', 'strategy_selection',
            [
              { id: 'a', label: '$\\displaystyle\\int \\cos(ax+b)\\,dx = \\dfrac{1}{a}\\sin(ax+b)+C$' },
              { id: 'b', label: '$\\displaystyle\\int \\cos(ax+b)\\,dx = -\\dfrac{1}{a}\\sin(ax+b)+C$' },
              { id: 'c', label: '$\\displaystyle\\int \\cos(ax+b)\\,dx = a\\sin(ax+b)+C$' },
            ],
            'a', { b: 'CALC-INT-01.E6_trig_integral_sign_error', c: 'CALC-INT-01.E7_reverse_chain_factor_inverted' },
            ['No extra negative here — that trap only applies to integrating $\\sin$, not $\\cos$.'],
            '$\\int\\cos(ax+b)\\,dx = \\dfrac{1}{a}\\sin(ax+b)+C$ — positive sign, divide by the inner derivative $a$.'),
          w('W6', '6', 'Recall the integral of $e^{ax+b}$.', 'strategy_selection',
            [
              { id: 'a', label: '$\\displaystyle\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b}+C$' },
              { id: 'b', label: '$\\displaystyle\\int e^{ax+b}\\,dx = e^{ax+b}+C$' },
              { id: 'c', label: '$\\displaystyle\\int e^{ax+b}\\,dx = a\\,e^{ax+b}+C$' },
            ],
            'a', { b: 'CALC-INT-01.E8_forgot_reverse_chain_divisor', c: 'CALC-INT-01.E7_reverse_chain_factor_inverted' },
            ['$e^x$ integrates to itself only when the exponent is exactly $x$ — with a linear inner expression, divide by its derivative $a$.'],
            '$\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b}+C$ — same reverse-chain-rule divisor idea as any other composed integrand.'),
          w('W7', '7', 'Recall the integral of $\\dfrac{1}{ax+b}$.', 'strategy_selection',
            [
              { id: 'a', label: '$\\displaystyle\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+C$' },
              { id: 'b', label: '$\\displaystyle\\int \\dfrac{1}{ax+b}\\,dx = \\ln|ax+b|+C$' },
              { id: 'c', label: '$\\displaystyle\\int \\dfrac{1}{ax+b}\\,dx = a\\ln|ax+b|+C$' },
            ],
            'a', { b: 'CALC-INT-01.E8_forgot_reverse_chain_divisor' },
            ['This is the one exception to the ordinary power rule (dividing by $n+1$ breaks down at $n=-1$) — it produces a log instead.'],
            '$\\int\\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+C$ — the log rule, still with the usual $\\dfrac{1}{a}$ reverse-chain-rule factor.'),
          w('W8', '8', 'Know why $\\int x^{-1}\\,dx$ can\'t use the ordinary power rule.', 'recognition',
            [
              { id: 'a', label: 'The power rule $\\frac{x^{n+1}}{n+1}$ divides by $n+1$, which is $0$ when $n=-1$ — undefined, so a special log rule is needed instead' },
              { id: 'b', label: 'The power rule works fine for $x^{-1}$, giving $\\frac{x^0}{0}$' },
              { id: 'c', label: '$x^{-1}$ can\'t be integrated at all' },
            ],
            'a', { b: 'CALC-INT-01.E9_power_rule_misapplied_at_n_negative_one' },
            ['Try the power rule formula with $n=-1$ and see what happens to the denominator.'],
            'The power rule breaks down exactly at $n=-1$ (division by zero) — that\'s why $\\int x^{-1}\\,dx = \\ln|x|+C$ is a separate rule, not a special case of the power rule.'),
          w('W9', '9', 'Know the correct order for substituting a definite integral\'s limits.', 'execution',
            [
              { id: 'a', label: '(antiderivative at the UPPER limit) $-$ (antiderivative at the LOWER limit)' },
              { id: 'b', label: '(antiderivative at the LOWER limit) $-$ (antiderivative at the UPPER limit)' },
              { id: 'c', label: 'Either order gives the same answer' },
            ],
            'a', { b: 'CALC-INT-01.E10_limits_swapped', c: 'CALC-INT-01.E10_limits_swapped' },
            ['Swapping the limits flips the sign of the whole result — order matters.'],
            'A definite integral $\\int_a^b f(x)\\,dx = F(b)-F(a)$ — upper limit\'s value minus lower limit\'s value, never the other way around.'),
          w('W10', '10', 'Recognise what a NEGATIVE definite integral value means when the curve dips below the $x$-axis.', 'recognition',
            [
              { id: 'a', label: 'The signed area is negative there — to find the actual (physical) area, take the absolute value of that piece before adding it to any part above the axis' },
              { id: 'b', label: 'A negative result means a calculation mistake was made — areas can never be negative' },
              { id: 'c', label: 'The negative sign can simply be ignored and the raw integral value used directly as "the area"' },
            ],
            'a', { b: 'CALC-INT-01.E11_negative_area_assumed_error', c: 'CALC-INT-01.E12_negative_signed_area_not_converted' },
            ['A definite integral computes SIGNED area — below the axis counts negative. Actual physical area is always non-negative, so take $|\\cdot|$ of any below-axis piece.'],
            'When part of a curve is below the $x$-axis, its definite integral is genuinely negative (signed area) — convert to physical area by taking the absolute value of that piece before summing.'),
          w('W11', '11', 'Recognise the correct setup for the area BETWEEN two curves.', 'strategy_selection',
            [
              { id: 'a', label: 'Integrate (TOP curve $-$ BOTTOM curve) between their points of intersection' },
              { id: 'b', label: 'Integrate just the top curve alone' },
              { id: 'c', label: 'Add the two curves together, then integrate the sum' },
            ],
            'a', { b: 'CALC-INT-01.E13_area_between_curves_single_function', c: 'CALC-INT-01.E13_area_between_curves_single_function' },
            ['The area between two curves is the gap between them — subtract the lower curve\'s height from the upper curve\'s height at every $x$, then integrate that difference.'],
            'Area between two curves $= \\int (\\text{top}-\\text{bottom})\\,dx$, evaluated between their intersection points — never just one curve alone.'),
          w('W12', '12', 'Pull a constant multiple out before integrating.', 'execution',
            [
              { id: 'a', label: '$\\displaystyle\\int 5x^3\\,dx = 5\\int x^3\\,dx = 5\\cdot\\dfrac{x^4}{4}+C$' },
              { id: 'b', label: '$\\displaystyle\\int 5x^3\\,dx$ requires the product rule since $5$ and $x^3$ are multiplied' },
              { id: 'c', label: 'The constant $5$ must also be integrated, becoming $5x$' },
            ],
            'a', { b: 'CALC-INT-01.E14_constant_multiple_needs_no_product_rule', c: 'CALC-INT-01.E14_constant_multiple_needs_no_product_rule' },
            ['A plain numeric coefficient just rides along unchanged — pull it outside the integral sign first, then integrate the $x$ part.'],
            'A constant coefficient is simply carried through: $\\int kf(x)\\,dx = k\\int f(x)\\,dx$ — no product rule needed for a plain number times a function.'),
          w('W13', '13', 'Apply the reverse chain rule to a new composed power expression.', 'execution',
            [
              { id: 'a', label: '$\\displaystyle\\int (2x-5)^4\\,dx = \\dfrac{(2x-5)^5}{2\\times 5}+C = \\dfrac{(2x-5)^5}{10}+C$' },
              { id: 'b', label: '$\\displaystyle\\int (2x-5)^4\\,dx = \\dfrac{(2x-5)^5}{5}+C$ (ignoring the inner derivative)' },
              { id: 'c', label: '$\\displaystyle\\int (2x-5)^4\\,dx = 4(2x-5)^3+C$' },
            ],
            'a', { b: 'CALC-INT-01.E8_forgot_reverse_chain_divisor', c: 'CALC-INT-01.E15_differentiated_instead_of_integrated' },
            ['Raise the power by 1, then divide by BOTH the new power AND the inner expression\'s own derivative.'],
            '$\\int (ax+b)^n\\,dx = \\dfrac{(ax+b)^{n+1}}{a(n+1)}+C$ — here $a=2, n=4$, giving $\\dfrac{(2x-5)^5}{10}+C$.'),
          w('W14', '14', 'Verify an integration result by differentiating it back.', 'simplify_and_verify',
            [
              { id: 'a', label: 'Differentiate the claimed antiderivative — if it doesn\'t recover the original integrand, the integration has an error somewhere' },
              { id: 'b', label: 'There is no way to check an integration result' },
              { id: 'c', label: 'Integrate the answer a second time to check it' },
            ],
            'a', { b: 'CALC-INT-01.E16_no_verification_used' },
            ['Differentiation undoes integration — it\'s the fastest self-check available.'],
            'Differentiating a proposed antiderivative should exactly reproduce the original integrand — a reliable way to catch reverse-chain-rule or sign slips before finalising an answer.'),
          w('W15', '15', 'Distinguish "evaluate the definite integral" from "find the indefinite integral / antiderivative".', 'recognition',
            [
              { id: 'a', label: '"Evaluate $\\int_a^b f(x)\\,dx$" wants a single NUMBER (limits given); "find $\\int f(x)\\,dx$" wants a general EXPRESSION with $+C$ (no limits)' },
              { id: 'b', label: 'Both instructions always produce a general expression with $+C$' },
              { id: 'c', label: 'Both instructions always produce a single number' },
            ],
            'a', { c: 'CALC-INT-01.E17_instruction_misread' },
            ['Check whether limits of integration are actually written on the integral sign — that\'s the signal for which type of answer is wanted.'],
            'A definite integral (with limits) evaluates to one number; an indefinite integral (no limits) is the general antiderivative family, written with $+C$.'),
        ];
      })(),
    ],
  },
  {
    dna_id: 'CALC-AREA-01', family: 'CALCULUS', skill: 'Area under/between curves',
    operations: ['find_intersections_or_bounds', 'integrate', 'substitute_limits', 'interpret_area'], priorityScore: 95, // C4
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the definite integral for area under a curve above the $x$-axis.",
        "required_skill": "CALC-AREA-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Area $=\\displaystyle\\int_a^b f(x)\\,dx$, where $f(x)\\ge 0$ throughout $[a,b]$"
          },
          {
            "id": "b",
            "label": "Area $= f(b)-f(a)$"
          },
          {
            "id": "c",
            "label": "Area $=\\displaystyle\\int_a^b f'(x)\\,dx$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "CALC-AREA-01.E1_differentiated_instead_of_integrated"
          }
        ],
        "hints": [
          "Area under a curve is found by INTEGRATING the function, not differentiating it."
        ],
        "explanation": "The area between a non-negative curve and the $x$-axis over $[a,b]$ is $\\int_a^b f(x)\\,dx$."
      },
      {
        "step_id": "W2",
        "objective": "Know the first step before finding the area between two curves.",
        "required_skill": "CALC-AREA-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Find the $x$-values where the two curves intersect FIRST — these become the limits of integration"
          },
          {
            "id": "b",
            "label": "Integrate both curves separately over an arbitrary interval, without finding intersections"
          },
          {
            "id": "c",
            "label": "The limits of integration are always $0$ and $1$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-AREA-01.E2_intersections_skipped"
          }
        ],
        "hints": [
          "The enclosed region between two curves runs exactly from where they cross to where they cross again — those crossing points ARE the limits."
        ],
        "explanation": "Solving where the two curves intersect (setting them equal) gives the correct limits of integration for the enclosed area between them."
      },
      {
        "step_id": "W3",
        "objective": "Recall the correct integrand for the area between two curves.",
        "required_skill": "CALC-AREA-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$\\displaystyle\\int_a^b [\\text{top curve} - \\text{bottom curve}]\\,dx$"
          },
          {
            "id": "b",
            "label": "$\\displaystyle\\int_a^b [\\text{top curve} + \\text{bottom curve}]\\,dx$"
          },
          {
            "id": "c",
            "label": "Integrate only the top curve, ignoring the bottom one"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-AREA-01.E3_added_instead_of_subtracted"
          },
          {
            "id": "c",
            "error_type": "CALC-AREA-01.E4_single_curve_only"
          }
        ],
        "hints": [
          "The area between the curves is the GAP between them — subtracting the lower curve's height from the upper curve's height at every $x$ measures exactly that gap."
        ],
        "explanation": "Area between two curves $=\\int_a^b(\\text{top}-\\text{bottom})\\,dx$ — never just one curve, and never added."
      },
      {
        "step_id": "W4",
        "objective": "Know what to do when the curve crosses the $x$-axis within the interval.",
        "required_skill": "CALC-AREA-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Split the integral at the crossing point(s), and take the absolute value of any piece that comes out negative, before summing for the total physical area"
          },
          {
            "id": "b",
            "label": "A single integral over the whole interval always gives the correct physical area, even if the curve dips below the axis"
          },
          {
            "id": "c",
            "label": "A curve can never cross the $x$-axis within a valid area problem"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-AREA-01.E5_signed_area_not_split"
          }
        ],
        "hints": [
          "A raw definite integral over a region straddling the axis gives a SIGNED total, where above/below pieces can cancel — split it to get the true physical area."
        ],
        "explanation": "When a curve crosses the $x$-axis inside the interval, split the integral at the crossing point(s) and take $|\\cdot|$ of any negative piece — otherwise below-axis area cancels above-axis area instead of adding to it."
      },
      {
        "step_id": "W5",
        "objective": "Recognise when \"area enclosed\" needs more than one region computed.",
        "required_skill": "CALC-AREA-01.5",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "If the curves cross more than twice, or the enclosed region has a different \"top\" curve on different sub-intervals, split into separate integrals for each piece"
          },
          {
            "id": "b",
            "label": "A single integral between the outermost two intersection points is always sufficient, regardless of how many times the curves cross"
          },
          {
            "id": "c",
            "label": "Enclosed area problems never involve more than one region"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-AREA-01.E6_multiple_regions_missed"
          }
        ],
        "hints": [
          "Sketch (or picture) which curve is on top over each part of the interval — if that swaps partway through, the area calculation needs to swap with it."
        ],
        "explanation": "When the \"top\" and \"bottom\" curve swap partway through the interval (multiple intersections), compute each sub-region's area separately with the correct top/bottom for that piece, then add them."
      }
    ],
  },
  {
    dna_id: 'CALC-MOTION-01', family: 'CALCULUS', skill: 'Motion / rates of change',
    operations: ['relate_quantities', 'differentiate_or_integrate', 'apply_initial_conditions', 'interpret'], priorityScore: 96, // C3
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall how velocity and acceleration relate to displacement via calculus.",
        "required_skill": "CALC-MOTION-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Velocity $=\\dfrac{dx}{dt}$ (derivative of displacement); acceleration $=\\dfrac{dv}{dt}=\\dfrac{d^2x}{dt^2}$ (derivative of velocity)"
          },
          {
            "id": "b",
            "label": "Velocity is the derivative of acceleration"
          },
          {
            "id": "c",
            "label": "Displacement is the derivative of velocity"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-MOTION-01.E1_chain_direction_reversed"
          },
          {
            "id": "c",
            "error_type": "CALC-MOTION-01.E1_chain_direction_reversed"
          }
        ],
        "hints": [
          "The chain runs displacement → velocity → acceleration by DIFFERENTIATING at each step, not the reverse."
        ],
        "explanation": "Differentiating displacement gives velocity; differentiating velocity (or twice-differentiating displacement) gives acceleration."
      },
      {
        "step_id": "W2",
        "objective": "Know what's needed to go from velocity back to displacement.",
        "required_skill": "CALC-MOTION-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Integrate velocity with respect to $t$, then use a given initial condition (e.g. starting position) to find the constant of integration"
          },
          {
            "id": "b",
            "label": "Differentiate velocity to get displacement"
          },
          {
            "id": "c",
            "label": "Integrate velocity — no initial condition is ever needed"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-MOTION-01.E1_chain_direction_reversed"
          },
          {
            "id": "c",
            "error_type": "CALC-MOTION-01.E2_initial_condition_skipped"
          }
        ],
        "hints": [
          "Integration always introduces a $+C$ — an initial position is exactly what pins that constant down."
        ],
        "explanation": "Going backward (velocity → displacement) means integrating, and the resulting $+C$ needs a given initial position to be resolved into a specific number."
      },
      {
        "step_id": "W3",
        "objective": "Distinguish \"at rest\" from \"changes direction\".",
        "required_skill": "CALC-MOTION-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "\"At rest\" just means $v=0$ at that instant; \"changes direction\" additionally requires the SIGN of $v$ to flip either side of that instant"
          },
          {
            "id": "b",
            "label": "These two phrases always mean exactly the same thing"
          },
          {
            "id": "c",
            "label": "\"Changes direction\" means $v=0$ with no further condition needed"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "CALC-MOTION-01.E3_direction_change_undertested"
          }
        ],
        "hints": [
          "A particle can momentarily stop ($v=0$) and then keep moving the SAME way — that's \"at rest\" but NOT \"changing direction\"."
        ],
        "explanation": "$v=0$ alone only confirms \"at rest\" at that instant — confirming an actual direction change needs checking that $v$ is positive on one side and negative on the other."
      },
      {
        "step_id": "W4",
        "objective": "Distinguish \"distance travelled\" from \"displacement\".",
        "required_skill": "CALC-MOTION-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Displacement is the NET change in position (can be negative); distance travelled is the TOTAL path length covered (always non-negative, sums every back-and-forth movement)"
          },
          {
            "id": "b",
            "label": "Distance travelled and displacement are always numerically identical"
          },
          {
            "id": "c",
            "label": "Displacement is always the larger of the two values"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-MOTION-01.E4_distance_displacement_conflated"
          }
        ],
        "hints": [
          "If a particle moves forward then comes partway back, the net displacement is smaller than the total ground it actually covered."
        ],
        "explanation": "Distance travelled adds up every bit of motion (both directions) as a positive total; displacement is just the net (final minus initial) position — they only match if the particle never reverses direction."
      },
      {
        "step_id": "W5",
        "objective": "Know when maximum speed occurs.",
        "required_skill": "CALC-MOTION-01.5",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Maximum speed occurs where acceleration $=0$ (a stationary point of the velocity function) — check it's actually a maximum of $|v|$, not a minimum"
          },
          {
            "id": "b",
            "label": "Maximum speed always occurs where displacement is at its maximum"
          },
          {
            "id": "c",
            "label": "Maximum speed occurs where velocity itself is exactly $0$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "CALC-MOTION-01.E5_max_speed_at_max_displacement"
          },
          {
            "id": "c",
            "error_type": "CALC-MOTION-01.E6_max_speed_at_zero_velocity"
          }
        ],
        "hints": [
          "Speed is $|v|$ — its stationary points come from where $\\frac{dv}{dt}=a=0$, exactly the same logic as finding a stationary point of any function."
        ],
        "explanation": "Since acceleration is the derivative of velocity, a stationary point of $v(t)$ (i.e. $a=0$) is where speed is momentarily at a maximum or minimum — check which with the usual classification method."
      }
    ],
  },

  // ── TRIGONOMETRY ────────────────────────────────────────────────────────
  {
    dna_id: 'TRIG-EQ-01', family: 'TRIGONOMETRY', skill: 'Trigonometric equations',
    operations: ['identify_domain', 'solve_equation', 'find_all_solutions_in_domain'], priorityScore: 80, // T3
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Know why a trig equation's solution must be restricted to the given domain.",
        "required_skill": "TRIG-EQ-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Trig functions are periodic — infinitely many angles solve the equation, so only the given domain (e.g. $0\\le x\\le 2\\pi$) narrows it to a finite, specific answer set"
          },
          {
            "id": "b",
            "label": "A trig equation always has exactly one solution regardless of domain"
          },
          {
            "id": "c",
            "label": "The domain restriction can be ignored once one solution is found"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-EQ-01.E1_periodicity_ignored"
          },
          {
            "id": "c",
            "error_type": "TRIG-EQ-01.E1_periodicity_ignored"
          }
        ],
        "hints": [
          "Sine, cosine and tangent repeat their values forever — without a domain restriction, \"solve\" would have infinitely many answers."
        ],
        "explanation": "A trig equation on its own has infinitely many solutions due to periodicity; the given domain narrows this down to the finite set the question actually wants."
      },
      {
        "step_id": "W2",
        "objective": "Recall the strategy for finding ALL solutions in a domain, not just the first.",
        "required_skill": "TRIG-EQ-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Find the reference angle, then use the sign of the trig ratio to identify EVERY quadrant it also holds in, generating all matching angles within the domain"
          },
          {
            "id": "b",
            "label": "Only the first angle found (e.g. from a calculator's inverse trig button) is ever needed"
          },
          {
            "id": "c",
            "label": "Add $90°$ repeatedly to the first solution to generate the rest"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-EQ-01.E2_only_first_solution_given"
          }
        ],
        "hints": [
          "A calculator's inverse trig function only ever returns ONE angle — the other matching angles come from using the reference angle in the other relevant quadrant(s)."
        ],
        "explanation": "Using the reference angle together with the CAST-quadrant sign pattern (or the general solution formula) generates every solution the sign of the ratio allows within the domain — not just the calculator's single output."
      },
      {
        "step_id": "W3",
        "objective": "Estimate how many solutions to expect from the domain size and the trig function's period.",
        "required_skill": "TRIG-EQ-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Compare the domain's length to the function's period (e.g. $2\\pi$ for sin/cos, $\\pi$ for tan) to sanity-check the number of solutions found"
          },
          {
            "id": "b",
            "label": "Every trig equation always has exactly 2 solutions, regardless of domain"
          },
          {
            "id": "c",
            "label": "The number of solutions can't be estimated in advance"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "TRIG-EQ-01.E3_solution_count_not_checked"
          }
        ],
        "hints": [
          "If the domain spans two full periods, expect roughly double the solutions of a single-period domain — a rough check against silently missing one."
        ],
        "explanation": "Comparing the domain length to the function's period gives a rough expected solution count — a useful sanity check against having missed (or double-counted) a solution."
      },
      {
        "step_id": "W4",
        "objective": "Recall standard exact-value angles.",
        "required_skill": "TRIG-EQ-01.4",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$\\sin 30° = \\dfrac{1}{2}$, $\\cos 60° = \\dfrac{1}{2}$, $\\tan 45° = 1$ are standard exact values worth knowing directly"
          },
          {
            "id": "b",
            "label": "Exact trig values can only ever be found using a calculator"
          },
          {
            "id": "c",
            "label": "$\\sin 30° = \\dfrac{\\sqrt{3}}{2}$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "TRIG-EQ-01.E4_exact_value_misremembered"
          }
        ],
        "hints": [
          "The 30-60-90 and 45-45-90 triangle ratios are the source of every one of these standard exact values."
        ],
        "explanation": "Standard exact values (from the 30-60-90 and 45-45-90 triangles) let many trig equations be solved without a calculator, and are needed to recognise \"nice\" answers."
      },
      {
        "step_id": "W5",
        "objective": "Know how tan equations differ from sin/cos equations in period.",
        "required_skill": "TRIG-EQ-01.5",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$\\tan\\theta$ repeats every $180°$ ($\\pi$ radians), HALF the period of $\\sin\\theta$/$\\cos\\theta$ (which repeat every $360°$/$2\\pi$) — so tan equations often have MORE solutions in the same domain"
          },
          {
            "id": "b",
            "label": "$\\tan\\theta$ has exactly the same period as $\\sin\\theta$ and $\\cos\\theta$"
          },
          {
            "id": "c",
            "label": "$\\tan\\theta$ repeats every $90°$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-EQ-01.E5_tan_period_confused"
          },
          {
            "id": "c",
            "error_type": "TRIG-EQ-01.E5_tan_period_confused"
          }
        ],
        "hints": [
          "Tan's graph has a much shorter repeating pattern than sin/cos — worth remembering when counting expected solutions."
        ],
        "explanation": "Tan has period $180°$ ($\\pi$), half that of sin/cos — a tan equation over the same domain as a sin/cos equation typically yields roughly twice as many solutions."
      }
    ],
  },
  {
    dna_id: 'TRIG-GRAPH-01', family: 'TRIGONOMETRY', skill: 'Trigonometric graph parameters',
    operations: ['identify_amplitude_period_shift', 'sketch_or_read_graph', 'interpret'], priorityScore: 80, // T3
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall what the amplitude of $y=a\\sin(bx+c)+d$ controls.",
        "required_skill": "TRIG-GRAPH-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Amplitude $=|a|$ — half the vertical distance between the graph's highest and lowest points"
          },
          {
            "id": "b",
            "label": "Amplitude $=d$ — the vertical shift"
          },
          {
            "id": "c",
            "label": "Amplitude $=b$ — controls the period"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-GRAPH-01.E1_amplitude_confused_with_shift"
          },
          {
            "id": "c",
            "error_type": "TRIG-GRAPH-01.E2_amplitude_confused_with_period_param"
          }
        ],
        "hints": [
          "Amplitude is about how far up/down the graph swings from its centre line, controlled by the coefficient OUT the front."
        ],
        "explanation": "The amplitude is $|a|$, the coefficient multiplying the trig function itself — it sets how far the graph swings above and below its centre line."
      },
      {
        "step_id": "W2",
        "objective": "Recall the period formula for $y=a\\sin(bx+c)+d$.",
        "required_skill": "TRIG-GRAPH-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Period $=\\dfrac{2\\pi}{b}$ (for sin/cos)"
          },
          {
            "id": "b",
            "label": "Period $= b$"
          },
          {
            "id": "c",
            "label": "Period $=2\\pi \\times b$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-GRAPH-01.E2_amplitude_confused_with_period_param"
          },
          {
            "id": "c",
            "error_type": "TRIG-GRAPH-01.E3_period_formula_inverted"
          }
        ],
        "hints": [
          "A LARGER $b$ squeezes the graph horizontally, meaning a SHORTER period — that's why $b$ appears in the denominator."
        ],
        "explanation": "Period $=\\dfrac{2\\pi}{b}$ — increasing $b$ compresses the graph, shortening its period; the formula divides, it doesn't multiply."
      },
      {
        "step_id": "W3",
        "objective": "Recall what $d$ and $c$ each control in $y=a\\sin(bx+c)+d$.",
        "required_skill": "TRIG-GRAPH-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$d$ shifts the whole graph vertically (new centre line $y=d$); $c$ produces a horizontal (phase) shift of $-c/b$"
          },
          {
            "id": "b",
            "label": "$d$ controls the period; $c$ controls the amplitude"
          },
          {
            "id": "c",
            "label": "Both $c$ and $d$ only ever affect the amplitude"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-GRAPH-01.E4_shift_params_confused"
          },
          {
            "id": "c",
            "error_type": "TRIG-GRAPH-01.E4_shift_params_confused"
          }
        ],
        "hints": [
          "$d$ sits outside the trig function entirely (vertical shift); $c$ sits inside, next to $x$ (horizontal shift, scaled by $b$)."
        ],
        "explanation": "$d$ is the vertical shift (raises/lowers the centre line to $y=d$); $c$ produces a horizontal shift of $-c/b$ once you factor $b$ out of $bx+c$."
      },
      {
        "step_id": "W4",
        "objective": "Know how to read amplitude and period directly off a graph.",
        "required_skill": "TRIG-GRAPH-01.4",
        "axis": "execution",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Amplitude = half the vertical distance from the highest point to the lowest point; period = the horizontal distance over which the pattern repeats exactly once"
          },
          {
            "id": "b",
            "label": "Amplitude is read as the full vertical distance from highest to lowest point (no halving)"
          },
          {
            "id": "c",
            "label": "Period is read as the horizontal distance from the graph's start to its first zero crossing"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-GRAPH-01.E5_amplitude_not_halved"
          },
          {
            "id": "c",
            "error_type": "TRIG-GRAPH-01.E6_period_misread_from_graph"
          }
        ],
        "hints": [
          "Amplitude is measured from the CENTRE line to a peak, not from peak to trough directly — that full peak-to-trough distance needs halving."
        ],
        "explanation": "Reading a graph: amplitude is half the peak-to-trough vertical distance; period is the horizontal length of one complete repeating cycle."
      }
    ],
  },
  {
    dna_id: 'TRIG-MODEL-01', family: 'TRIGONOMETRY', skill: 'Trigonometric modelling',
    operations: ['form_model', 'solve_within_domain', 'interpret_context'], priorityScore: 80, // T3
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recognise which real-world contexts suggest a sin/cos model.",
        "required_skill": "TRIG-MODEL-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Any context that rises and falls in a REPEATING, periodic cycle (tides, seasonal temperature, a Ferris wheel's height) suggests a sin or cos model"
          },
          {
            "id": "b",
            "label": "A steadily increasing quantity with no repetition (like compound interest) suggests a trig model"
          },
          {
            "id": "c",
            "label": "Trig models only apply to angles, never to real-world quantities like height or temperature"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-MODEL-01.E1_non_periodic_context_forced"
          },
          {
            "id": "c",
            "error_type": "TRIG-MODEL-01.E1_non_periodic_context_forced"
          }
        ],
        "hints": [
          "Look for language like \"cycle\", \"repeats every\", \"highest/lowest point occurs at\" — the hallmark of periodic behaviour."
        ],
        "explanation": "A trig model fits a context that genuinely cycles up and down on a regular repeating pattern — a steadily growing or one-directional quantity needs a different (e.g. exponential) model instead."
      },
      {
        "step_id": "W2",
        "objective": "Connect the context's max/min values to the model's amplitude and vertical shift.",
        "required_skill": "TRIG-MODEL-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Maximum $=d+|a|$, minimum $=d-|a|$ — so $d=$ (max+min)/2 and $|a|=$ (max-min)/2"
          },
          {
            "id": "b",
            "label": "Maximum and minimum are read directly as $a$ and $d$ with no calculation"
          },
          {
            "id": "c",
            "label": "The maximum value equals the period"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-MODEL-01.E2_max_min_directly_assigned"
          }
        ],
        "hints": [
          "The centre line sits exactly halfway between the highest and lowest values; the amplitude is the distance from that centre line up to the max."
        ],
        "explanation": "Given a context's highest and lowest values, the vertical shift $d$ is their average, and the amplitude $|a|$ is half their difference."
      },
      {
        "step_id": "W3",
        "objective": "Connect the real-world cycle length to the model's $b$ parameter.",
        "required_skill": "TRIG-MODEL-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Set the context's stated cycle length (e.g. \"repeats every 12 hours\") equal to the period formula $\\dfrac{2\\pi}{b}$, then solve for $b$"
          },
          {
            "id": "b",
            "label": "The cycle length is used directly as the value of $b$, with no formula needed"
          },
          {
            "id": "c",
            "label": "Cycle length only affects the amplitude, not $b$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "TRIG-MODEL-01.E3_cycle_length_misapplied"
          }
        ],
        "hints": [
          "The stated real-world period (e.g. \"12 hours between high tides\") IS the period of the model — plug it into $\\text{period}=2\\pi/b$ and solve for $b$."
        ],
        "explanation": "The context's stated cycle length equals the model's period, $\\dfrac{2\\pi}{b}$ — rearranging for $b$ converts the real-world time unit into the correct model parameter."
      },
      {
        "step_id": "W4",
        "objective": "Know to restrict a solved value to the realistic domain of the context.",
        "required_skill": "TRIG-MODEL-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "After solving the trig equation for the unknown (e.g. time), discard any solutions that don't make physical sense in context (e.g. negative time, or times outside the scenario's stated window)"
          },
          {
            "id": "b",
            "label": "Every mathematically valid solution from solving the equation is automatically a valid real-world answer"
          },
          {
            "id": "c",
            "label": "Only the smallest positive solution is ever kept, regardless of context"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-MODEL-01.E4_unrealistic_solution_kept"
          }
        ],
        "hints": [
          "A trig equation's full solution set includes plenty of mathematically valid but physically meaningless answers (like negative time) — filter by what actually makes sense in the story."
        ],
        "explanation": "Solving a trig model equation can produce solutions outside the sensible real-world range for the context — always check each solution against the actual scenario before reporting it as the answer."
      }
    ],
  },
  {
    dna_id: 'TRIG-ID-01', family: 'TRIGONOMETRY', skill: 'Trigonometric identities',
    operations: ['apply_identity', 'simplify_or_prove'], priorityScore: 80, // T3
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the Pythagorean identity.",
        "required_skill": "TRIG-ID-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$\\sin^2\\theta+\\cos^2\\theta=1$"
          },
          {
            "id": "b",
            "label": "$\\sin^2\\theta - \\cos^2\\theta=1$"
          },
          {
            "id": "c",
            "label": "$\\sin\\theta+\\cos\\theta=1$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-ID-01.E1_pythagorean_sign_error"
          },
          {
            "id": "c",
            "error_type": "TRIG-ID-01.E2_pythagorean_squares_dropped"
          }
        ],
        "hints": [
          "This comes directly from the unit circle / Pythagoras' theorem applied to a right triangle with hypotenuse 1 — both terms are SQUARED and ADDED."
        ],
        "explanation": "$\\sin^2\\theta+\\cos^2\\theta=1$ — the foundational trig identity, often rearranged to substitute for $\\sin^2\\theta$ or $\\cos^2\\theta$ during simplification."
      },
      {
        "step_id": "W2",
        "objective": "Recall the double angle formula for sine.",
        "required_skill": "TRIG-ID-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$"
          },
          {
            "id": "b",
            "label": "$\\sin 2\\theta = 2\\sin\\theta$"
          },
          {
            "id": "c",
            "label": "$\\sin 2\\theta = \\sin^2\\theta$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-ID-01.E3_double_angle_factor_dropped"
          },
          {
            "id": "c",
            "error_type": "TRIG-ID-01.E3_double_angle_factor_dropped"
          }
        ],
        "hints": [
          "Doubling the angle isn't the same as doubling the sine value directly — it comes from an angle-sum expansion instead."
        ],
        "explanation": "$\\sin 2\\theta=2\\sin\\theta\\cos\\theta$ — derived from expanding $\\sin(\\theta+\\theta)$ using the angle-sum formula."
      },
      {
        "step_id": "W3",
        "objective": "Know what a \"prove\" instruction requires, versus a \"verify with a number\" check.",
        "required_skill": "TRIG-ID-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Start from ONE side of the identity and algebraically manipulate it (using known identities) until it matches the other side exactly — a numeric check alone isn't a proof"
          },
          {
            "id": "b",
            "label": "Substituting one specific angle value and confirming both sides match numerically is a complete proof"
          },
          {
            "id": "c",
            "label": "Simply restating both sides is sufficient"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-ID-01.E4_numeric_check_mistaken_for_proof"
          }
        ],
        "hints": [
          "A single numeric example can't rule out the identity failing for some OTHER angle — only an algebraic derivation shows it's true for every angle."
        ],
        "explanation": "Proving a trig identity means transforming one side into the other using valid identity substitutions — checking a specific numeric angle only demonstrates it holds for that one value, not in general."
      },
      {
        "step_id": "W4",
        "objective": "Recognise when converting everything to sin and cos helps simplify a mixed trig expression.",
        "required_skill": "TRIG-ID-01.4",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "When an expression mixes $\\tan$, $\\sec$, $\\csc$, $\\cot$ with $\\sin$/$\\cos$, rewriting every term in terms of just $\\sin$ and $\\cos$ often reveals a common factor or cancellation"
          },
          {
            "id": "b",
            "label": "Converting to sin/cos never simplifies anything"
          },
          {
            "id": "c",
            "label": "Only $\\tan$ needs converting; $\\sec$, $\\csc$, $\\cot$ should be left as-is"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "TRIG-ID-01.E5_partial_conversion_only"
          }
        ],
        "hints": [
          "$\\tan\\theta=\\sin\\theta/\\cos\\theta$, $\\sec\\theta=1/\\cos\\theta$, and similarly for the others — writing everything on this common footing usually exposes how terms combine."
        ],
        "explanation": "Rewriting every reciprocal/quotient trig function ($\\tan,\\sec,\\csc,\\cot$) in terms of $\\sin$ and $\\cos$ puts a mixed expression on common ground, often exposing cancellations or the Pythagorean identity."
      }
    ],
  },
  {
    dna_id: 'TRIG-GEO-01', family: 'TRIGONOMETRY', skill: 'Non-right-angle triangle trigonometry (sine/cosine rule, bearings, arcs & sectors)',
    operations: ['interpret_diagram', 'apply_sine_or_cosine_rule', 'apply_bearing_or_arc_sector_formula', 'round_appropriately'],
    priorityScore: 75, // T1
    dna_version: '1.1', created_reason: 'Promoted from CAND-TRIG-001 — 44 occurrences, recurring across schools/years.',
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Know when the sine rule can be used.",
        "required_skill": "TRIG-GEO-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The sine rule needs a complete matching angle-side pair (an angle and the side directly opposite it) known, alongside one more angle or side"
          },
          {
            "id": "b",
            "label": "The sine rule can be used with any three known sides, no angle needed"
          },
          {
            "id": "c",
            "label": "The sine rule only works on right-angled triangles"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-GEO-01.E1_sine_rule_wrong_prerequisites"
          },
          {
            "id": "c",
            "error_type": "TRIG-GEO-01.E1_sine_rule_wrong_prerequisites"
          }
        ],
        "hints": [
          "Look for a known angle whose OPPOSITE side is also known — that matched pair is what the sine rule needs to work with."
        ],
        "explanation": "The sine rule requires at least one complete angle-opposite-side pair known — three sides with no angle (or an angle with no matched opposite side) needs the cosine rule instead."
      },
      {
        "step_id": "W2",
        "objective": "Recall the two forms of the cosine rule (finding a side vs finding an angle).",
        "required_skill": "TRIG-GEO-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Finding a side: $a^2=b^2+c^2-2bc\\cos A$; finding an angle: rearranged as $\\cos A=\\dfrac{b^2+c^2-a^2}{2bc}$"
          },
          {
            "id": "b",
            "label": "The exact same formula, with no rearrangement, is used whether solving for a side or an angle"
          },
          {
            "id": "c",
            "label": "The cosine rule can only ever be used to find a side, never an angle"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-GEO-01.E2_cosine_rule_form_confused"
          },
          {
            "id": "c",
            "error_type": "TRIG-GEO-01.E2_cosine_rule_form_confused"
          }
        ],
        "hints": [
          "When the UNKNOWN is an angle rather than a side, the formula needs rearranging to isolate $\\cos A$ before it can be solved."
        ],
        "explanation": "The side-form $a^2=b^2+c^2-2bc\\cos A$ is rearranged to $\\cos A=\\dfrac{b^2+c^2-a^2}{2bc}$ when the angle itself is the unknown — same relationship, different target variable."
      },
      {
        "step_id": "W3",
        "objective": "Recall arc length and sector area formulas.",
        "required_skill": "TRIG-GEO-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Arc length $=r\\theta$, sector area $=\\dfrac{1}{2}r^2\\theta$, with $\\theta$ measured in RADIANS"
          },
          {
            "id": "b",
            "label": "Arc length $=r\\theta$, sector area $=\\dfrac{1}{2}r^2\\theta$, with $\\theta$ measured in DEGREES, no conversion needed"
          },
          {
            "id": "c",
            "label": "Arc length $=2r\\theta$, sector area $=r^2\\theta$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-GEO-01.E3_radians_degrees_not_converted"
          },
          {
            "id": "c",
            "error_type": "TRIG-GEO-01.E4_arc_sector_formula_misremembered"
          }
        ],
        "hints": [
          "These formulas are only valid when $\\theta$ is in radians — a degree value must be converted first (multiply by $\\pi/180$)."
        ],
        "explanation": "Arc length $=r\\theta$ and sector area $=\\frac12 r^2\\theta$ both require $\\theta$ in RADIANS — using a degree value directly gives a badly wrong answer."
      },
      {
        "step_id": "W4",
        "objective": "Know how bearings are measured and how to convert them into a triangle-usable angle.",
        "required_skill": "TRIG-GEO-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "A bearing is measured CLOCKWISE from north (0°-360°) — converting it into an interior triangle angle usually needs a supplementary/co-interior angle argument from a diagram, not just reading the bearing directly"
          },
          {
            "id": "b",
            "label": "A bearing is measured anticlockwise from east, exactly like a standard angle in trigonometry"
          },
          {
            "id": "c",
            "label": "A bearing can always be used directly as a triangle's interior angle with no conversion"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "TRIG-GEO-01.E5_bearing_direction_convention_wrong"
          },
          {
            "id": "c",
            "error_type": "TRIG-GEO-01.E6_bearing_used_directly_as_interior_angle"
          }
        ],
        "hints": [
          "Sketch the north lines at each point first — the actual triangle angle usually comes from the DIFFERENCE between bearings or an alternate-angle relationship, not the bearing number itself."
        ],
        "explanation": "Bearings are clockwise from north — turning that into a usable interior triangle angle typically needs a diagram showing north lines at each vertex and applying angle relationships (co-interior, alternate) between them."
      },
      {
        "step_id": "W5",
        "objective": "Recognise the ambiguous case of the sine rule.",
        "required_skill": "TRIG-GEO-01.5",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Given two sides and a NON-included angle (SSA), there can be TWO valid triangles — check whether the obtuse-angle alternative for the found angle is also geometrically valid"
          },
          {
            "id": "b",
            "label": "The sine rule always produces exactly one unique triangle, no matter what information is given"
          },
          {
            "id": "c",
            "label": "The ambiguous case only ever applies to the cosine rule"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "TRIG-GEO-01.E7_ambiguous_case_wrong_rule"
          }
        ],
        "hints": [
          "$\\sin\\theta=\\sin(180°-\\theta)$ — the sine ratio can't distinguish an acute angle from its obtuse supplement, so both may be geometrically valid answers."
        ],
        "explanation": "With two sides and a non-included angle known (SSA), the sine rule can yield two different valid triangles — always check if the supplementary angle also fits the given information before discarding it."
      }
    ],
  },

  // ── PROBABILITY ─────────────────────────────────────────────────────────
  {
    dna_id: 'PROB-COND-01', family: 'PROBABILITY', skill: 'Conditional probability',
    operations: ['identify_condition', 'apply_conditional_formula', 'interpret'], priorityScore: 89, // S1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the conditional probability formula.",
        "required_skill": "PROB-COND-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$P(A|B)=\\dfrac{P(A\\cap B)}{P(B)}$"
          },
          {
            "id": "b",
            "label": "$P(A|B)=P(A)\\times P(B)$"
          },
          {
            "id": "c",
            "label": "$P(A|B)=\\dfrac{P(B)}{P(A\\cap B)}$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-COND-01.E1_conditional_formula_confused"
          },
          {
            "id": "c",
            "error_type": "PROB-COND-01.E2_conditional_fraction_inverted"
          }
        ],
        "hints": [
          "Conditional probability restricts the \"world\" to just outcomes where $B$ has happened, then asks what fraction of THAT restricted world also has $A$."
        ],
        "explanation": "$P(A|B)=\\dfrac{P(A\\cap B)}{P(B)}$ — the intersection probability divided by the probability of the condition, never the other way around."
      },
      {
        "step_id": "W2",
        "objective": "Recall how to test whether two events are independent.",
        "required_skill": "PROB-COND-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$A$ and $B$ are independent if $P(A|B)=P(A)$ (equivalently $P(A\\cap B)=P(A)\\times P(B)$)"
          },
          {
            "id": "b",
            "label": "$A$ and $B$ are independent if $P(A\\cap B)=0$"
          },
          {
            "id": "c",
            "label": "$A$ and $B$ are independent if $P(A)+P(B)=1$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-COND-01.E3_independence_confused_with_mutual_exclusivity"
          }
        ],
        "hints": [
          "Two events with zero overlap ($P(A\\cap B)=0$) are MUTUALLY EXCLUSIVE — a completely different property from independence."
        ],
        "explanation": "Independence means knowing $B$ happened doesn't change the probability of $A$: $P(A|B)=P(A)$ — not to be confused with mutual exclusivity ($P(A\\cap B)=0$)."
      },
      {
        "step_id": "W3",
        "objective": "Know that $P(A|B)$ and $P(B|A)$ are generally different quantities.",
        "required_skill": "PROB-COND-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$P(A|B)$ (probability of $A$ given $B$) is generally NOT equal to $P(B|A)$ (probability of $B$ given $A$) — read the question carefully to see which is being asked for"
          },
          {
            "id": "b",
            "label": "$P(A|B)$ always equals $P(B|A)$"
          },
          {
            "id": "c",
            "label": "The order after the \"$|$\" symbol doesn't matter"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-COND-01.E4_conditional_order_swapped"
          },
          {
            "id": "c",
            "error_type": "PROB-COND-01.E4_conditional_order_swapped"
          }
        ],
        "hints": [
          "\"Given a positive test, probability of disease\" is a very different question from \"given disease, probability of a positive test\" — the condition (after the $|$) sets which probability is being divided by."
        ],
        "explanation": "$P(A|B)$ restricts to the world where $B$ occurred; $P(B|A)$ restricts to the world where $A$ occurred — these use different denominators and are generally different numbers."
      },
      {
        "step_id": "W4",
        "objective": "Know how to read a conditional probability from a two-way table.",
        "required_skill": "PROB-COND-01.4",
        "axis": "execution",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Restrict to the row or column matching the GIVEN condition first, then find the requested outcome's count as a fraction of that restricted row/column total"
          },
          {
            "id": "b",
            "label": "Use the grand total of the whole table as the denominator, regardless of the given condition"
          },
          {
            "id": "c",
            "label": "Add the row total and column total together for the denominator"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-COND-01.E5_table_denominator_not_restricted"
          }
        ],
        "hints": [
          "The word \"given\" in the question tells you which row or column to restrict to BEFORE dividing — not the table's overall total."
        ],
        "explanation": "Reading $P(A|B)$ off a two-way table: find the row/column total for $B$ first (the new denominator), then divide the $A\\cap B$ cell by that restricted total."
      }
    ],
  },
  {
    dna_id: 'PROB-TOTAL-01', family: 'PROBABILITY', skill: 'Multi-stage / tree diagrams',
    operations: ['build_tree_or_table', 'multiply_along_branches', 'sum_relevant_paths'], priorityScore: 89, // S1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall how to find the probability of a single path through a tree diagram.",
        "required_skill": "PROB-TOTAL-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "MULTIPLY the probabilities along the branches followed for that one path"
          },
          {
            "id": "b",
            "label": "ADD the probabilities along the branches followed for that one path"
          },
          {
            "id": "c",
            "label": "Use only the probability on the final branch, ignoring earlier branches"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-TOTAL-01.E1_multiply_add_confused_within_path"
          }
        ],
        "hints": [
          "Each successive branch is an independent \"and\" condition on the previous one — probabilities for successive independent events multiply."
        ],
        "explanation": "A single path through a tree diagram multiplies the probabilities on each branch travelled — that reflects \"this AND then this AND then this\" happening in sequence."
      },
      {
        "step_id": "W2",
        "objective": "Recall how to combine probabilities across DIFFERENT paths reaching the same outcome.",
        "required_skill": "PROB-TOTAL-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "ADD the (already-multiplied) probabilities of every separate path that reaches that outcome"
          },
          {
            "id": "b",
            "label": "MULTIPLY the probabilities of every separate path that reaches that outcome"
          },
          {
            "id": "c",
            "label": "Only the highest-probability path counts, the rest are ignored"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-TOTAL-01.E2_multiply_add_confused_across_paths"
          }
        ],
        "hints": [
          "Different paths reaching the same outcome are alternative (\"or\") ways it could happen — probabilities for \"this OR this\" add together."
        ],
        "explanation": "When several distinct paths all lead to the same outcome, add each path's own (already-multiplied) probability — different paths are mutually exclusive alternatives."
      },
      {
        "step_id": "W3",
        "objective": "Know that branch probabilities from a single node must sum to 1.",
        "required_skill": "PROB-TOTAL-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "All the branches leading OUT of any single node must have probabilities that add up to exactly $1$"
          },
          {
            "id": "b",
            "label": "Branch probabilities from a node can add up to any total"
          },
          {
            "id": "c",
            "label": "Only the first two branches from a node need to sum to 1; extra branches don't count"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-TOTAL-01.E3_branch_probabilities_dont_sum_to_one"
          }
        ],
        "hints": [
          "Every outcome from that stage is represented by one of the branches — together they must account for the whole probability, i.e. $1$."
        ],
        "explanation": "Any set of branches from a single node in a tree diagram must sum to $1$ — a useful check for finding an unlabelled branch's probability by subtraction."
      },
      {
        "step_id": "W4",
        "objective": "Know how \"without replacement\" changes branch probabilities later in the tree.",
        "required_skill": "PROB-TOTAL-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "\"Without replacement\" reduces the total pool for later branches, so later probabilities depend on what was already removed (the denominator shrinks by 1 each draw)"
          },
          {
            "id": "b",
            "label": "\"Without replacement\" has no effect on later branch probabilities"
          },
          {
            "id": "c",
            "label": "\"Without replacement\" only affects the FIRST branch, never later ones"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-TOTAL-01.E4_without_replacement_ignored"
          }
        ],
        "hints": [
          "Once an item is removed and not put back, both the numerator and denominator for the next draw reflect that one item missing."
        ],
        "explanation": "\"Without replacement\" means each subsequent draw is from a smaller remaining pool — later branch probabilities must be recalculated based on what's already been removed, unlike \"with replacement\" where every draw uses the same probabilities."
      }
    ],
  },
  {
    dna_id: 'PROB-COMP-01', family: 'PROBABILITY', skill: 'Complement / repeated events',
    operations: ['identify_complement_or_union', 'apply_probability_law', 'interpret'], priorityScore: 89, // S1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the complement rule.",
        "required_skill": "PROB-COMP-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$P(\\text{not } A) = 1 - P(A)$"
          },
          {
            "id": "b",
            "label": "$P(\\text{not } A) = P(A)$"
          },
          {
            "id": "c",
            "label": "$P(\\text{not } A) = 1 + P(A)$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-COMP-01.E1_complement_formula_misapplied"
          }
        ],
        "hints": [
          "An event and its complement together cover every possibility — their probabilities must add to $1$."
        ],
        "explanation": "The complement rule $P(\\text{not }A)=1-P(A)$ follows from $A$ and \"not $A$\" together covering all outcomes."
      },
      {
        "step_id": "W2",
        "objective": "Recall the addition rule for \"A or B\", avoiding double-counting.",
        "required_skill": "PROB-COMP-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$P(A\\text{ or }B)=P(A)+P(B)-P(A\\text{ and }B)$"
          },
          {
            "id": "b",
            "label": "$P(A\\text{ or }B)=P(A)+P(B)$, with no adjustment needed"
          },
          {
            "id": "c",
            "label": "$P(A\\text{ or }B)=P(A)\\times P(B)$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-COMP-01.E2_overlap_not_subtracted"
          }
        ],
        "hints": [
          "Outcomes in BOTH $A$ and $B$ get counted once in $P(A)$ and again in $P(B)$ — subtracting the overlap once corrects for that double-count."
        ],
        "explanation": "$P(A\\text{ or }B)=P(A)+P(B)-P(A\\text{ and }B)$ — the overlap must be subtracted once to avoid counting it twice (unless $A$, $B$ are mutually exclusive, where the overlap is $0$ anyway)."
      },
      {
        "step_id": "W3",
        "objective": "Recognise when \"at least one\" is easier to compute via the complement.",
        "required_skill": "PROB-COMP-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$P(\\text{at least one}) = 1-P(\\text{none})$ — usually far simpler than directly summing every \"at least one\" case (one, two, three, ...)"
          },
          {
            "id": "b",
            "label": "\"At least one\" must always be computed by directly adding the probability of exactly one, exactly two, exactly three, etc."
          },
          {
            "id": "c",
            "label": "$P(\\text{at least one})=P(\\text{none})$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "PROB-COMP-01.E3_at_least_one_complement_reversed"
          }
        ],
        "hints": [
          "The complement of \"at least one\" is simply \"none\" — a single, easy-to-compute case, versus adding up every possible count of successes directly."
        ],
        "explanation": "\"At least one\" is the complement of \"none happening\" — computing $P(\\text{none})$ and subtracting from $1$ is almost always faster than summing every individual \"exactly $k$\" case."
      },
      {
        "step_id": "W4",
        "objective": "Recall how independent repeated trials combine.",
        "required_skill": "PROB-COMP-01.4",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "MULTIPLY the probability of each independent trial's outcome together (e.g. $P(\\text{3 successes in a row})=p\\times p\\times p$)"
          },
          {
            "id": "b",
            "label": "ADD the probability of each independent trial's outcome together"
          },
          {
            "id": "c",
            "label": "Independent repeated trials always have the same combined probability as a single trial"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-COMP-01.E4_repeated_trials_added_not_multiplied"
          }
        ],
        "hints": [
          "Independence means each trial's outcome doesn't affect the next — the \"AND\" combination of independent events multiplies their probabilities."
        ],
        "explanation": "For independent repeated trials, the probability of a specific sequence of outcomes is the PRODUCT of each individual trial's probability."
      }
    ],
  },
  {
    dna_id: 'PROB-DIST-01', family: 'PROBABILITY', skill: 'Discrete probability distributions',
    operations: ['identify_distribution', 'compute_expected_value_or_variance', 'interpret'], priorityScore: 89, // S1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Know the total-probability check for a discrete distribution table.",
        "required_skill": "PROB-DIST-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Every probability in the table must sum to exactly $1$ — a good first check, and often how an unknown probability value is found"
          },
          {
            "id": "b",
            "label": "The probabilities in a distribution table can sum to any value"
          },
          {
            "id": "c",
            "label": "Only the largest probability in the table matters, the rest are approximate"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-DIST-01.E1_probabilities_dont_sum_to_one"
          }
        ],
        "hints": [
          "Every possible outcome of the random variable is listed in the table — together they must account for the whole probability space."
        ],
        "explanation": "All probabilities in a valid discrete distribution table must sum to $1$ — frequently used to solve for an unknown probability value by subtracting the known ones from $1$."
      },
      {
        "step_id": "W2",
        "objective": "Recall the formula for expected value $E(X)$.",
        "required_skill": "PROB-DIST-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$E(X)=\\sum x\\cdot P(x)$ — each outcome weighted by its own probability, then summed"
          },
          {
            "id": "b",
            "label": "$E(X)=\\sum x$, ignoring the probabilities"
          },
          {
            "id": "c",
            "label": "$E(X)=$ the outcome with the highest probability"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-DIST-01.E2_expected_value_probabilities_ignored"
          },
          {
            "id": "c",
            "error_type": "PROB-DIST-01.E3_expected_value_confused_with_mode"
          }
        ],
        "hints": [
          "$E(X)$ is a weighted average — outcomes that are more likely should pull the average more toward themselves."
        ],
        "explanation": "$E(X)=\\sum x\\cdot P(x)$ — a probability-weighted average of every possible outcome, not just the most likely single value (that would be the mode)."
      },
      {
        "step_id": "W3",
        "objective": "Recall the formula for variance of a discrete distribution.",
        "required_skill": "PROB-DIST-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$\\text{Var}(X)=E(X^2)-[E(X)]^2$"
          },
          {
            "id": "b",
            "label": "$\\text{Var}(X)=E(X)^2$"
          },
          {
            "id": "c",
            "label": "$\\text{Var}(X)=E(X^2)+[E(X)]^2$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-DIST-01.E4_variance_formula_incomplete"
          },
          {
            "id": "c",
            "error_type": "PROB-DIST-01.E5_variance_sign_error"
          }
        ],
        "hints": [
          "This is the \"mean of the squares minus the square of the mean\" shortcut form of variance."
        ],
        "explanation": "$\\text{Var}(X)=E(X^2)-[E(X)]^2$ — requires computing $E(X^2)=\\sum x^2\\cdot P(x)$ separately from $E(X)$, then subtracting the square of the mean."
      },
      {
        "step_id": "W4",
        "objective": "Recognise the conditions for a binomial distribution.",
        "required_skill": "PROB-DIST-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "A FIXED number of trials, each with only TWO possible outcomes, a CONSTANT probability of success, and INDEPENDENT trials"
          },
          {
            "id": "b",
            "label": "Any repeated experiment automatically qualifies as binomial, regardless of the number of outcomes"
          },
          {
            "id": "c",
            "label": "Binomial only requires that the probability of success changes between trials"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "PROB-DIST-01.E6_binomial_conditions_violated"
          }
        ],
        "hints": [
          "Check all four conditions before assuming binomial: fixed $n$, only two outcomes each trial, same $p$ every time, and trials don't affect each other."
        ],
        "explanation": "A binomial setup needs: fixed number of trials $n$, exactly two outcomes per trial, constant probability of success $p$, and independence between trials — missing any one of these means it isn't binomial."
      }
    ],
  },
  {
    dna_id: 'PROB-NORM-01', family: 'PROBABILITY', skill: 'Normal distribution',
    operations: ['compute_z_score', 'read_or_apply_normal_probability', 'interpret_context'], priorityScore: 91, // S3
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the $z$-score formula.",
        "required_skill": "PROB-NORM-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$z=\\dfrac{x-\\mu}{\\sigma}$"
          },
          {
            "id": "b",
            "label": "$z=\\dfrac{\\mu-x}{\\sigma}$"
          },
          {
            "id": "c",
            "label": "$z=\\dfrac{x-\\sigma}{\\mu}$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-NORM-01.E1_zscore_sign_reversed"
          },
          {
            "id": "c",
            "error_type": "PROB-NORM-01.E2_zscore_terms_swapped"
          }
        ],
        "hints": [
          "$z$ measures how many standard deviations $x$ is ABOVE the mean — a value below the mean should give a negative $z$."
        ],
        "explanation": "$z=\\dfrac{x-\\mu}{\\sigma}$ — the raw value minus the mean, scaled by the standard deviation; get the order of $x-\\mu$ right or the sign of every subsequent answer flips."
      },
      {
        "step_id": "W2",
        "objective": "Know how to convert a standard normal table (giving $P(Z<z)$) into other probability queries.",
        "required_skill": "PROB-NORM-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$P(Z>z)=1-P(Z<z)$; $P(a<Z<b)=P(Z<b)-P(Z<a)$"
          },
          {
            "id": "b",
            "label": "The table value $P(Z<z)$ can be used directly for $P(Z>z)$ with no adjustment"
          },
          {
            "id": "c",
            "label": "$P(a<Z<b)=P(Z<b)+P(Z<a)$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-NORM-01.E3_upper_tail_not_converted"
          },
          {
            "id": "c",
            "error_type": "PROB-NORM-01.E4_between_probability_added_not_subtracted"
          }
        ],
        "hints": [
          "The table always gives area to the LEFT of $z$ — anything else (right tail, a middle band) needs a small conversion from that."
        ],
        "explanation": "Since standard normal tables give the cumulative $P(Z<z)$: an upper tail is $1$ minus that value, and a \"between\" probability is the difference of two cumulative values."
      },
      {
        "step_id": "W3",
        "objective": "Recall the empirical (68-95-99.7) rule for quick estimates.",
        "required_skill": "PROB-NORM-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "About 68% of data lies within $1\\sigma$ of the mean, 95% within $2\\sigma$, and 99.7% within $3\\sigma$"
          },
          {
            "id": "b",
            "label": "50% of data always lies within $1\\sigma$ of the mean"
          },
          {
            "id": "c",
            "label": "The empirical rule applies to any distribution, not just approximately normal ones"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-NORM-01.E5_empirical_rule_percentages_wrong"
          },
          {
            "id": "c",
            "error_type": "PROB-NORM-01.E6_empirical_rule_misapplied_to_non_normal"
          }
        ],
        "hints": [
          "These specific percentages (68/95/99.7) only hold for data that's genuinely approximately normal."
        ],
        "explanation": "The empirical rule (68-95-99.7%) is a quick sanity-check tool for approximately normal data — memorising these standard percentages avoids a full $z$-table lookup for round numbers of standard deviations."
      },
      {
        "step_id": "W4",
        "objective": "Know how to work BACKWARD from a probability to find the raw $x$-value.",
        "required_skill": "PROB-NORM-01.4",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Find the $z$-value matching the given probability (inverse normal), then rearrange $z=\\dfrac{x-\\mu}{\\sigma}$ to solve for $x=\\mu+z\\sigma$"
          },
          {
            "id": "b",
            "label": "The $x$-value equals the probability directly, with no $z$-score conversion needed"
          },
          {
            "id": "c",
            "label": "Working backward from a probability is not possible with the normal distribution"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "PROB-NORM-01.E7_inverse_normal_not_attempted"
          }
        ],
        "hints": [
          "Going from a probability back to an $x$-value reverses the usual direction — find $z$ first (inverse lookup), then convert that $z$ back into a raw value using $\\mu$ and $\\sigma$."
        ],
        "explanation": "An \"inverse normal\" question rearranges the $z$-score formula to $x=\\mu+z\\sigma$ — first find the $z$ matching the given probability, then substitute the known $\\mu,\\sigma$."
      }
    ],
  },
  {
    dna_id: 'PROB-CONT-01', family: 'PROBABILITY', skill: 'Continuous distributions / PDF / CDF',
    operations: ['verify_area_equals_one', 'integrate_pdf', 'interpret_probability'], priorityScore: 91, // S3
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the total-area condition for a valid probability density function (PDF).",
        "required_skill": "PROB-CONT-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The total area under the PDF over its entire domain must equal exactly $1$ — often the first step is solving for an unknown constant using this condition"
          },
          {
            "id": "b",
            "label": "The total area under a PDF can be any positive value"
          },
          {
            "id": "c",
            "label": "The PDF's maximum height must equal $1$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-CONT-01.E1_total_area_condition_ignored"
          },
          {
            "id": "c",
            "error_type": "PROB-CONT-01.E2_max_height_confused_with_total_area"
          }
        ],
        "hints": [
          "A PDF represents a full probability distribution — the total probability of all possible outcomes together must be $1$, which is the AREA under the curve, not its height."
        ],
        "explanation": "A valid PDF must integrate to exactly $1$ over its domain — setting $\\int f(x)\\,dx=1$ is the standard way to solve for an unknown constant in a given PDF."
      },
      {
        "step_id": "W2",
        "objective": "Recall how a probability over an interval is found from a PDF.",
        "required_skill": "PROB-CONT-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$P(a\\le X\\le b)=\\displaystyle\\int_a^b f(x)\\,dx$ — the area under the PDF between $a$ and $b$"
          },
          {
            "id": "b",
            "label": "$P(a\\le X\\le b)=f(b)-f(a)$"
          },
          {
            "id": "c",
            "label": "$P(a\\le X\\le b)=f\\left(\\dfrac{a+b}{2}\\right)$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-CONT-01.E3_probability_confused_with_difference_of_heights"
          }
        ],
        "hints": [
          "A probability for a continuous random variable is always an AREA under the density curve, not a height or a height-difference."
        ],
        "explanation": "For a continuous distribution, $P(a\\le X\\le b)$ is the definite integral of the PDF from $a$ to $b$ — the area under the curve over that interval."
      },
      {
        "step_id": "W3",
        "objective": "Recall how the CDF and PDF relate to each other.",
        "required_skill": "PROB-CONT-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "CDF$(x)=\\displaystyle\\int_{-\\infty}^x f(t)\\,dt$ (integral of the PDF up to $x$); conversely, PDF$(x)=\\dfrac{d}{dx}[\\text{CDF}(x)]$ (derivative of the CDF)"
          },
          {
            "id": "b",
            "label": "CDF and PDF are always exactly the same function"
          },
          {
            "id": "c",
            "label": "CDF is the derivative of the PDF"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-CONT-01.E4_cdf_pdf_relationship_confused"
          },
          {
            "id": "c",
            "error_type": "PROB-CONT-01.E5_cdf_pdf_derivative_direction_reversed"
          }
        ],
        "hints": [
          "The CDF accumulates probability up to a point (an integral of the PDF); differentiating that accumulation back gives the PDF again — same integrate/differentiate relationship as displacement/velocity."
        ],
        "explanation": "The CDF is the running (integrated) total of the PDF up to $x$; differentiating the CDF recovers the PDF — integration and differentiation link them in opposite directions."
      },
      {
        "step_id": "W4",
        "objective": "Know that a PDF must be non-negative everywhere on its domain.",
        "required_skill": "PROB-CONT-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "A valid PDF must satisfy $f(x)\\ge 0$ for every $x$ in its domain — a negative \"density\" would be meaningless"
          },
          {
            "id": "b",
            "label": "A PDF can be negative as long as the total area still works out to $1$"
          },
          {
            "id": "c",
            "label": "Only the PDF's value at the domain's midpoint needs to be non-negative"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "PROB-CONT-01.E6_negative_pdf_value_accepted"
          }
        ],
        "hints": [
          "A negative probability density has no valid interpretation — density values represent (roughly) \"how likely\" outcomes near $x$ are, which can't be negative."
        ],
        "explanation": "Checking $f(x)\\ge 0$ across the whole domain is a required validity check for any proposed PDF, alongside the total-area-equals-1 condition — both must hold."
      }
    ],
  },

  // ── FUNCTIONS / ALGEBRA ─────────────────────────────────────────────────
  {
    dna_id: 'FUNC-GRAPH-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Function graphs (domain/range/asymptotes/intercepts)',
    operations: ['identify_domain_range', 'identify_key_features', 'sketch_or_describe'], priorityScore: 88, // F2
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall what restricts a function's domain.",
        "required_skill": "FUNC-GRAPH-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Exclude any $x$-value that makes a denominator zero, or makes an expression under a square root negative"
          },
          {
            "id": "b",
            "label": "The domain is always all real numbers, regardless of the function's form"
          },
          {
            "id": "c",
            "label": "Only denominators need checking; square roots never restrict the domain"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-GRAPH-01.E1_domain_restriction_ignored"
          },
          {
            "id": "c",
            "error_type": "FUNC-GRAPH-01.E2_sqrt_restriction_missed"
          }
        ],
        "hints": [
          "Division by zero and square roots of negatives are both undefined in the reals — both need explicitly excluding."
        ],
        "explanation": "Domain restrictions come from operations that are undefined for certain inputs: a zero denominator, or a negative value under an even root — both must be excluded."
      },
      {
        "step_id": "W2",
        "objective": "Distinguish domain from range.",
        "required_skill": "FUNC-GRAPH-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Domain is the set of valid $x$-INPUTS; range is the set of resulting $y$-OUTPUTS the function actually produces"
          },
          {
            "id": "b",
            "label": "Domain and range always describe exactly the same set of values"
          },
          {
            "id": "c",
            "label": "Domain is the $y$-values, range is the $x$-values"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-GRAPH-01.E3_domain_range_confused"
          },
          {
            "id": "c",
            "error_type": "FUNC-GRAPH-01.E3_domain_range_confused"
          }
        ],
        "hints": [
          "Domain is about what you're ALLOWED to put in; range is about what actually comes OUT."
        ],
        "explanation": "Domain = valid inputs ($x$); range = the actual set of output values ($y$) the function produces over that domain."
      },
      {
        "step_id": "W3",
        "objective": "Recognise where a vertical asymptote comes from, versus a horizontal one.",
        "required_skill": "FUNC-GRAPH-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "A vertical asymptote occurs where the function is UNDEFINED (typically a zero denominator not cancelled by the numerator); a horizontal asymptote describes the END-BEHAVIOUR as $x\\to\\pm\\infty$"
          },
          {
            "id": "b",
            "label": "Vertical and horizontal asymptotes are found using exactly the same method"
          },
          {
            "id": "c",
            "label": "A horizontal asymptote occurs where the function is undefined"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "FUNC-GRAPH-01.E4_asymptote_types_confused"
          }
        ],
        "hints": [
          "Vertical asymptotes are about a specific FORBIDDEN $x$-value; horizontal asymptotes describe what happens far out to the left/right."
        ],
        "explanation": "A vertical asymptote comes from a genuine domain exclusion (often a zero denominator); a horizontal asymptote describes the value the function approaches as $x$ grows without bound in either direction."
      },
      {
        "step_id": "W4",
        "objective": "Recall how to find $x$- and $y$-intercepts.",
        "required_skill": "FUNC-GRAPH-01.4",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$x$-intercept: set $y=0$ and solve for $x$; $y$-intercept: set $x=0$ and evaluate"
          },
          {
            "id": "b",
            "label": "$x$-intercept: set $x=0$; $y$-intercept: set $y=0$"
          },
          {
            "id": "c",
            "label": "Both intercepts are found by setting the whole expression equal to $1$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-GRAPH-01.E5_intercept_axes_swapped"
          }
        ],
        "hints": [
          "An $x$-intercept sits ON the $x$-axis, meaning its $y$-coordinate is zero — the opposite variable is set to zero from what you might first guess."
        ],
        "explanation": "The $x$-intercept(s) come from solving $f(x)=0$; the $y$-intercept comes from evaluating $f(0)$ — mixing these up swaps which variable gets set to zero."
      }
    ],
  },
  {
    dna_id: 'FUNC-TRANS-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Transformations',
    operations: ['identify_transformation', 'apply_to_base_function', 'sketch_or_describe'], priorityScore: 88, // F2
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the effect of $f(x)+k$.",
        "required_skill": "FUNC-TRANS-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$f(x)+k$ shifts the graph VERTICALLY by $k$ (up if $k>0$, down if $k<0$)"
          },
          {
            "id": "b",
            "label": "$f(x)+k$ shifts the graph horizontally by $k$"
          },
          {
            "id": "c",
            "label": "$f(x)+k$ stretches the graph vertically by a factor of $k$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-TRANS-01.E1_vertical_shift_confused_with_horizontal"
          }
        ],
        "hints": [
          "Adding a constant OUTSIDE the function only changes the output ($y$) values, moving the whole graph up or down."
        ],
        "explanation": "A constant added AFTER evaluating $f(x)$ shifts the graph vertically by that amount — up for positive $k$, down for negative $k$."
      },
      {
        "step_id": "W2",
        "objective": "Recall the effect of $f(x-h)$ — the horizontal shift sign trap.",
        "required_skill": "FUNC-TRANS-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$f(x-h)$ shifts the graph RIGHT by $h$ when $h>0$ (the opposite of the sign you might first expect)"
          },
          {
            "id": "b",
            "label": "$f(x-h)$ shifts the graph LEFT by $h$ when $h>0$"
          },
          {
            "id": "c",
            "label": "$f(x-h)$ shifts the graph vertically by $h$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-TRANS-01.E2_horizontal_shift_direction_reversed"
          },
          {
            "id": "c",
            "error_type": "FUNC-TRANS-01.E1_vertical_shift_confused_with_horizontal"
          }
        ],
        "hints": [
          "To reach the same output as $f(0)$, you now need $x=h$ (not $x=-h$) — the graph's features have all moved to the RIGHT."
        ],
        "explanation": "$f(x-h)$ shifts RIGHT by $h$ for $h>0$ — a classic sign trap, since the formula subtracts but the graph moves in the positive direction."
      },
      {
        "step_id": "W3",
        "objective": "Recall the effect of $af(x)$, including when $a<0$.",
        "required_skill": "FUNC-TRANS-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$af(x)$ stretches the graph vertically by a factor of $|a|$, and REFLECTS it in the $x$-axis if $a<0$"
          },
          {
            "id": "b",
            "label": "$af(x)$ only ever stretches the graph, regardless of the sign of $a$"
          },
          {
            "id": "c",
            "label": "$af(x)$ reflects the graph in the $y$-axis"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "FUNC-TRANS-01.E3_vertical_horizontal_reflection_confused"
          }
        ],
        "hints": [
          "Multiplying every OUTPUT by a negative number flips the graph upside-down (about the $x$-axis), on top of the size change."
        ],
        "explanation": "$af(x)$ scales every $y$-value by $a$: $|a|$ sets the vertical stretch factor, and a negative $a$ additionally reflects the graph in the $x$-axis."
      },
      {
        "step_id": "W4",
        "objective": "Recall the effect of $f(bx)$, including when $b<0$ or $|b|>1$.",
        "required_skill": "FUNC-TRANS-01.4",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$f(bx)$ compresses the graph horizontally by a factor of $\\dfrac{1}{|b|}$, and reflects it in the $y$-axis if $b<0$"
          },
          {
            "id": "b",
            "label": "$f(bx)$ always stretches the graph horizontally, regardless of $|b|$"
          },
          {
            "id": "c",
            "label": "$f(bx)$ reflects the graph in the $x$-axis when $b<0$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-TRANS-01.E4_horizontal_scale_direction_reversed"
          },
          {
            "id": "c",
            "error_type": "FUNC-TRANS-01.E3_vertical_horizontal_reflection_confused"
          }
        ],
        "hints": [
          "A LARGER $|b|$ makes the input grow faster, so the same output is reached at a SMALLER $x$ — that's a horizontal squeeze, not a stretch."
        ],
        "explanation": "$f(bx)$ compresses horizontally by $1/|b|$ (stretches if $|b|<1$), and a negative $b$ reflects the graph in the $y$-axis — the horizontal counterpart to $af(x)$'s vertical effects."
      }
    ],
  },
  {
    dna_id: 'FUNC-COMP-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Composite functions',
    operations: ['identify_component_functions', 'compose', 'evaluate_or_state_domain'], priorityScore: 86, // F1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the order of evaluation for a composite function $(f\\circ g)(x)$.",
        "required_skill": "FUNC-COMP-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Apply the INNER function $g$ first, then feed that result into the OUTER function $f$: $(f\\circ g)(x)=f(g(x))$"
          },
          {
            "id": "b",
            "label": "Apply $f$ first, then feed the result into $g$"
          },
          {
            "id": "c",
            "label": "Multiply $f(x)$ and $g(x)$ together"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-COMP-01.E1_composition_order_reversed"
          },
          {
            "id": "c",
            "error_type": "FUNC-COMP-01.E2_composition_confused_with_multiplication"
          }
        ],
        "hints": [
          "Reading $f(g(x))$ from the inside out: $g$ acts on $x$ first, and $f$ then acts on whatever $g$ produced."
        ],
        "explanation": "$(f\\circ g)(x)=f(g(x))$ means evaluate the INNER function $g$ first, then apply $f$ to that result — never the reverse order."
      },
      {
        "step_id": "W2",
        "objective": "Know what restricts the domain of a composite function.",
        "required_skill": "FUNC-COMP-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The composite domain needs BOTH: $x$ must be in the domain of $g$, AND $g(x)$ must be in the domain of $f$"
          },
          {
            "id": "b",
            "label": "The composite domain is just the domain of $g$ alone"
          },
          {
            "id": "c",
            "label": "The composite domain is just the domain of $f$ alone"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-COMP-01.E3_composite_domain_only_inner_checked"
          },
          {
            "id": "c",
            "error_type": "FUNC-COMP-01.E4_composite_domain_only_outer_checked"
          }
        ],
        "hints": [
          "Even if $x$ is a valid input for $g$, the composite still fails if $g(x)$ then lands somewhere $f$ can't accept."
        ],
        "explanation": "A value of $x$ is only in the composite's domain if it's valid for $g$ AND the resulting $g(x)$ is also valid for $f$ — checking only one function's domain isn't enough."
      },
      {
        "step_id": "W3",
        "objective": "Know that composition is generally NOT commutative.",
        "required_skill": "FUNC-COMP-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$f(g(x))$ and $g(f(x))$ are generally DIFFERENT functions — swapping the order of composition changes the result"
          },
          {
            "id": "b",
            "label": "$f(g(x))$ always equals $g(f(x))$"
          },
          {
            "id": "c",
            "label": "Composition order only matters if $f$ and $g$ are both linear"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-COMP-01.E5_composition_assumed_commutative"
          }
        ],
        "hints": [
          "Try a concrete example: $f(x)=x+1$, $g(x)=x^2$ — $f(g(x))=x^2+1$ but $g(f(x))=(x+1)^2$, clearly different."
        ],
        "explanation": "Function composition order matters — $f(g(x))\\ne g(f(x))$ in general, so always check the question is asking for the specific order stated."
      }
    ],
  },
  {
    dna_id: 'FUNC-INV-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Inverse functions',
    operations: ['swap_variables', 'solve_for_new_dependent', 'state_domain_range'], priorityScore: 86, // F1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the method for finding an inverse function.",
        "required_skill": "FUNC-INV-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Swap $x$ and $y$ in the equation, then solve the resulting equation for the NEW $y$"
          },
          {
            "id": "b",
            "label": "Take the reciprocal of the original function, $1/f(x)$"
          },
          {
            "id": "c",
            "label": "Differentiate the function"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-INV-01.E1_inverse_confused_with_reciprocal"
          }
        ],
        "hints": [
          "An inverse \"undoes\" the function — swapping which variable is input vs output and re-solving captures exactly that reversal."
        ],
        "explanation": "Finding $f^{-1}$: write $y=f(x)$, swap $x$ and $y$ to get $x=f(y)$, then solve that equation for $y$ — the inverse is NOT the reciprocal $1/f(x)$."
      },
      {
        "step_id": "W2",
        "objective": "Know how domain and range swap between a function and its inverse.",
        "required_skill": "FUNC-INV-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The domain of $f$ becomes the RANGE of $f^{-1}$, and the range of $f$ becomes the DOMAIN of $f^{-1}$"
          },
          {
            "id": "b",
            "label": "A function and its inverse always share the exact same domain and range"
          },
          {
            "id": "c",
            "label": "The inverse function has no domain restrictions, regardless of the original function"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-INV-01.E2_domain_range_swap_missed"
          }
        ],
        "hints": [
          "Since the inverse swaps inputs and outputs, whatever used to be a valid OUTPUT of $f$ is now a valid INPUT of $f^{-1}$, and vice versa."
        ],
        "explanation": "Swapping $x$ and $y$ to build the inverse also swaps their roles: $f$'s domain becomes $f^{-1}$'s range, and $f$'s range becomes $f^{-1}$'s domain."
      },
      {
        "step_id": "W3",
        "objective": "Know the condition a function must satisfy to have a genuine inverse FUNCTION.",
        "required_skill": "FUNC-INV-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The function must be ONE-TO-ONE (pass the horizontal line test) — otherwise \"solving for $y$\" after swapping gives more than one output for some input, which isn't a function"
          },
          {
            "id": "b",
            "label": "Every function automatically has an inverse function, with no condition needed"
          },
          {
            "id": "c",
            "label": "The function must be linear to have an inverse"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-INV-01.E3_one_to_one_condition_ignored"
          }
        ],
        "hints": [
          "If a horizontal line crosses the original graph more than once, swapping $x$/$y$ would give a vertical line crossing the \"inverse\" more than once — not a valid function."
        ],
        "explanation": "A genuine inverse FUNCTION requires the original to be one-to-one — a many-to-one function needs its domain restricted first before a true inverse function can exist."
      },
      {
        "step_id": "W4",
        "objective": "Recall the graphical relationship between $f$ and $f^{-1}$.",
        "required_skill": "FUNC-INV-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The graph of $f^{-1}$ is the REFLECTION of the graph of $f$ in the line $y=x$"
          },
          {
            "id": "b",
            "label": "The graph of $f^{-1}$ is the reflection of $f$ in the $x$-axis"
          },
          {
            "id": "c",
            "label": "The graphs of $f$ and $f^{-1}$ are always identical"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "FUNC-INV-01.E4_reflection_axis_wrong"
          }
        ],
        "hints": [
          "Swapping $x$ and $y$-coordinates for every point is exactly what a reflection in the line $y=x$ does geometrically."
        ],
        "explanation": "Since finding $f^{-1}$ swaps the roles of $x$ and $y$, the graph of $f^{-1}$ is the mirror image of $f$'s graph reflected in the line $y=x$."
      }
    ],
  },
  {
    dna_id: 'ALG-EQ-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Algebraic equations/inequations',
    operations: ['rearrange', 'solve', 'check_validity_in_context'], priorityScore: 86, // F1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the fundamental rule for rearranging an equation.",
        "required_skill": "ALG-EQ-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Whatever operation is applied, it must be applied to BOTH sides of the equation equally, to keep it balanced"
          },
          {
            "id": "b",
            "label": "An operation can be applied to just one side, as long as the answer still \"looks right\""
          },
          {
            "id": "c",
            "label": "Equations can be rearranged freely with no restriction"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "ALG-EQ-01.E1_operation_applied_to_one_side_only"
          }
        ],
        "hints": [
          "An equation is a statement of balance — changing only one side breaks that balance and gives a wrong equation."
        ],
        "explanation": "Every rearranging step (adding, subtracting, multiplying, dividing, squaring, etc.) must be applied identically to both sides to preserve the equation's truth."
      },
      {
        "step_id": "W2",
        "objective": "Know why squaring both sides of an equation needs an extra check.",
        "required_skill": "ALG-EQ-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Squaring can introduce EXTRANEOUS solutions that don't actually satisfy the original (unsquared) equation — always substitute each solution back into the original equation to check"
          },
          {
            "id": "b",
            "label": "Squaring both sides never changes the solution set"
          },
          {
            "id": "c",
            "label": "Squaring both sides always removes valid solutions rather than adding false ones"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "ALG-EQ-01.E2_extraneous_solutions_not_checked"
          }
        ],
        "hints": [
          "Squaring makes both a positive and its negative counterpart satisfy the new equation, even though only one of them satisfied the original — that mismatch is where extraneous solutions sneak in."
        ],
        "explanation": "Squaring both sides of an equation can create solutions that satisfy the squared version but not the original — always verify each candidate solution back in the ORIGINAL (unsquared) equation."
      },
      {
        "step_id": "W3",
        "objective": "Know when an inequality's direction must flip.",
        "required_skill": "ALG-EQ-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Multiplying or dividing BOTH sides of an inequality by a NEGATIVE number flips the inequality sign"
          },
          {
            "id": "b",
            "label": "The inequality sign never changes, regardless of what operation is applied"
          },
          {
            "id": "c",
            "label": "Adding or subtracting a negative number flips the inequality sign"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "ALG-EQ-01.E3_flip_condition_wrong"
          }
        ],
        "hints": [
          "Try a simple check: $2<3$, but multiplying both sides by $-1$ gives $-2>-3$ — the sign had to flip to stay true."
        ],
        "explanation": "Only multiplying/dividing by a NEGATIVE value flips an inequality's direction — adding or subtracting any value (positive or negative) never does."
      }
    ],
  },
  {
    dna_id: 'ALG-LOG-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Logarithmic equations',
    operations: ['apply_log_laws', 'solve', 'check_domain'], priorityScore: 74, // E1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the log laws for products and quotients.",
        "required_skill": "ALG-LOG-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$\\log(ab)=\\log a+\\log b$; $\\log(a/b)=\\log a-\\log b$"
          },
          {
            "id": "b",
            "label": "$\\log(ab)=\\log a\\times\\log b$"
          },
          {
            "id": "c",
            "label": "$\\log(a/b)=\\log a\\times\\log b$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "ALG-LOG-01.E1_log_product_rule_multiplied"
          },
          {
            "id": "c",
            "error_type": "ALG-LOG-01.E2_log_quotient_rule_wrong"
          }
        ],
        "hints": [
          "Logs turn multiplication into ADDITION, and division into SUBTRACTION — never multiplication of the logs themselves."
        ],
        "explanation": "$\\log(ab)=\\log a+\\log b$ and $\\log(a/b)=\\log a-\\log b$ — logs convert products/quotients into sums/differences, not products."
      },
      {
        "step_id": "W2",
        "objective": "Know the domain restriction that must be checked after solving a log equation.",
        "required_skill": "ALG-LOG-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Logarithms are only defined for POSITIVE arguments — every candidate solution must be substituted back to confirm every log's argument is still positive"
          },
          {
            "id": "b",
            "label": "Log equations have no domain restriction — every algebraic solution is automatically valid"
          },
          {
            "id": "c",
            "label": "Only the final answer needs a positive value, not the arguments inside any logs along the way"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "ALG-LOG-01.E3_log_domain_not_checked"
          }
        ],
        "hints": [
          "$\\log$ of zero or a negative number is undefined — a solution that makes any log's argument non-positive must be rejected, even if it satisfies the rearranged equation."
        ],
        "explanation": "After solving a log equation algebraically, substitute each solution back into every original log expression to confirm all arguments are positive — extraneous solutions are common here."
      },
      {
        "step_id": "W3",
        "objective": "Recall the change of base formula.",
        "required_skill": "ALG-LOG-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$\\log_a b=\\dfrac{\\log_c b}{\\log_c a}$, for any convenient base $c$ (often base 10 or base $e$)"
          },
          {
            "id": "b",
            "label": "$\\log_a b=\\log_b a$"
          },
          {
            "id": "c",
            "label": "$\\log_a b=a\\times\\log b$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "ALG-LOG-01.E4_change_of_base_bases_swapped"
          }
        ],
        "hints": [
          "Both the numerator and denominator use the SAME new base — this lets any log be evaluated on a calculator that only has one specific base built in."
        ],
        "explanation": "Change of base: $\\log_a b=\\dfrac{\\log_c b}{\\log_c a}$ — rewrites a log in an inconvenient base using logs of a convenient base (e.g. natural log or log base 10)."
      },
      {
        "step_id": "W4",
        "objective": "Recall how to convert between log form and exponential form.",
        "required_skill": "ALG-LOG-01.4",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$\\log_a b=c$ is exactly equivalent to $a^c=b$"
          },
          {
            "id": "b",
            "label": "$\\log_a b=c$ is equivalent to $c^a=b$"
          },
          {
            "id": "c",
            "label": "$\\log_a b=c$ is equivalent to $b^c=a$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "ALG-LOG-01.E5_log_exponential_conversion_wrong"
          }
        ],
        "hints": [
          "A log answers \"what power do I raise the base to, to get this result?\" — converting back means writing exactly that power statement."
        ],
        "explanation": "$\\log_a b=c$ means \"$a$ raised to the power $c$ gives $b$\", i.e. $a^c=b$ — this conversion is often the key first step in solving a log equation."
      }
    ],
  },
  {
    dna_id: 'ALG-EXP-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Exponential equations/models',
    operations: ['form_or_use_exponential_model', 'solve_for_parameter', 'interpret_rate'], priorityScore: 74, // E1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the general form of an exponential growth/decay model.",
        "required_skill": "ALG-EXP-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$A=A_0(1+r)^t$ for growth, $A=A_0(1-r)^t$ for decay (or $A=A_0e^{kt}$ with $k>0$/$k<0$)"
          },
          {
            "id": "b",
            "label": "$A=A_0+rt$, a linear model"
          },
          {
            "id": "c",
            "label": "$A=A_0\\cdot r\\cdot t$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "ALG-EXP-01.E1_exponential_confused_with_linear"
          }
        ],
        "hints": [
          "The defining feature of exponential change is that the rate scales with the CURRENT amount, which is what the power (exponent) structure captures — not a straight-line model."
        ],
        "explanation": "Exponential growth/decay uses a base raised to the power of time, $A_0(1\\pm r)^t$ or $A_0e^{kt}$ — a linear model $A_0+rt$ describes constant additive change instead, a different shape entirely."
      },
      {
        "step_id": "W2",
        "objective": "Know how to solve for an unknown sitting in the exponent.",
        "required_skill": "ALG-EXP-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Isolate the exponential term, then take the $\\log$ (or $\\ln$) of both sides to bring the exponent down as a multiplier"
          },
          {
            "id": "b",
            "label": "Divide both sides by the base to remove the exponent"
          },
          {
            "id": "c",
            "label": "An exponent can only be solved for by guess-and-check"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "ALG-EXP-01.E2_log_solving_skipped"
          }
        ],
        "hints": [
          "Logs are specifically the inverse operation of exponentiation — applying one to both sides is exactly what's needed to bring a trapped exponent down to ground level."
        ],
        "explanation": "To solve for a variable in an exponent, isolate the exponential expression on one side, then apply $\\log$ (any consistent base) to both sides — $\\log(a^t)=t\\log a$ turns the exponent into an ordinary multiplier."
      },
      {
        "step_id": "W3",
        "objective": "Recall the exponent laws needed before solving.",
        "required_skill": "ALG-EXP-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$a^m\\cdot a^n=a^{m+n}$, $\\dfrac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$"
          },
          {
            "id": "b",
            "label": "$a^m\\cdot a^n=a^{mn}$"
          },
          {
            "id": "c",
            "label": "$(a^m)^n=a^{m+n}$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "ALG-EXP-01.E3_exponent_multiplication_law_wrong"
          },
          {
            "id": "c",
            "error_type": "ALG-EXP-01.E4_exponent_power_law_wrong"
          }
        ],
        "hints": [
          "Multiplying same-base powers ADDS the exponents; raising a power to another power MULTIPLIES them — two distinct laws, easy to swap by accident."
        ],
        "explanation": "Standard exponent laws: multiplying same-base powers adds exponents, dividing subtracts them, and a power raised to a power multiplies them — needed to simplify an expression before it can be solved."
      },
      {
        "step_id": "W4",
        "objective": "Recognise \"half-life\" / \"doubling time\" language as solving for $t$ at a specific target value.",
        "required_skill": "ALG-EXP-01.4",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "\"Half-life\" means solving for $t$ when the quantity equals HALF the original ($A=A_0/2$); \"doubling time\" means solving for $t$ when it equals DOUBLE the original ($A=2A_0$)"
          },
          {
            "id": "b",
            "label": "\"Half-life\" is a fixed number given directly by the model's coefficient, requiring no equation-solving"
          },
          {
            "id": "c",
            "label": "\"Doubling time\" means the growth rate $r$ itself equals $2$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "ALG-EXP-01.E5_half_life_doubling_time_not_solved"
          }
        ],
        "hints": [
          "Both phrases describe a TARGET amount relative to the start — set the model equal to that target and solve for $t$, same log technique as any other exponential equation."
        ],
        "explanation": "\"Half-life\"/\"doubling time\" set up an equation ($A_0(1\\pm r)^t=A_0/2$ or $=2A_0$) and solve for $t$ — the initial amount $A_0$ cancels out, leaving a standard log-solving equation."
      }
    ],
  },

  // ── STATISTICS ──────────────────────────────────────────────────────────
  {
    dna_id: 'STAT-DESC-01', family: 'STATISTICS', skill: 'Descriptive statistics',
    operations: ['compute_measure_of_centre_or_spread', 'interpret_context'], priorityScore: 84, // S2
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Know when the median is a better measure of centre than the mean.",
        "required_skill": "STAT-DESC-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The median is more RESISTANT to outliers and skewed data — the mean can be pulled strongly by one extreme value"
          },
          {
            "id": "b",
            "label": "The mean is always more resistant to outliers than the median"
          },
          {
            "id": "c",
            "label": "The median and mean are always affected identically by outliers"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-DESC-01.E1_mean_median_resistance_reversed"
          }
        ],
        "hints": [
          "A single huge outlier drags the mean toward it, but the median only cares about the MIDDLE-ranked value, which barely moves."
        ],
        "explanation": "The median is resistant to outliers/skew since it only depends on the middle value's rank; the mean incorporates every value's size, so one extreme value can shift it substantially."
      },
      {
        "step_id": "W2",
        "objective": "Know what a larger standard deviation indicates.",
        "required_skill": "STAT-DESC-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "A larger standard deviation means the data is MORE spread out from the mean"
          },
          {
            "id": "b",
            "label": "A larger standard deviation means the data is more tightly clustered around the mean"
          },
          {
            "id": "c",
            "label": "Standard deviation says nothing about spread, only about the average value"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-DESC-01.E2_std_dev_meaning_reversed"
          }
        ],
        "hints": [
          "Standard deviation is built from how far each data point sits from the mean — bigger typical distances mean a bigger standard deviation."
        ],
        "explanation": "Standard deviation measures spread around the mean — a larger value means data points are typically further from the mean, more variable."
      },
      {
        "step_id": "W3",
        "objective": "Recall the five-number summary and how IQR is calculated.",
        "required_skill": "STAT-DESC-01.3",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Five-number summary: min, $Q_1$, median, $Q_3$, max; $\\text{IQR}=Q_3-Q_1$"
          },
          {
            "id": "b",
            "label": "$\\text{IQR}=\\text{max}-\\text{min}$"
          },
          {
            "id": "c",
            "label": "The five-number summary is mean, mode, median, min, max"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-DESC-01.E3_iqr_confused_with_range"
          },
          {
            "id": "c",
            "error_type": "STAT-DESC-01.E4_five_number_summary_wrong_values"
          }
        ],
        "hints": [
          "IQR focuses on the MIDDLE 50% of the data (between the quartiles), unlike the full range which is sensitive to extreme outliers."
        ],
        "explanation": "The five-number summary (min, $Q_1$, median, $Q_3$, max) underlies a boxplot; IQR $=Q_3-Q_1$ measures the spread of the middle 50% of data, distinct from the overall range (max$-$min)."
      }
    ],
  },
  {
    dna_id: 'STAT-BIV-01', family: 'STATISTICS', skill: 'Bivariate data / regression',
    operations: ['read_scatterplot', 'fit_or_use_line_of_best_fit', 'interpret_gradient_intercept'], priorityScore: 84, // S2
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Know how to interpret the gradient of a line of best fit in context.",
        "required_skill": "STAT-BIV-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "The gradient represents the AVERAGE CHANGE in $y$ for every one-unit increase in $x$, expressed with the actual context's units"
          },
          {
            "id": "b",
            "label": "The gradient has no real-world meaning, it's purely a mathematical number"
          },
          {
            "id": "c",
            "label": "The gradient represents the total change in $y$ across the whole dataset"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-BIV-01.E1_gradient_interpretation_omitted"
          }
        ],
        "hints": [
          "A gradient of, say, \"$2$\" in a height-vs-age context means \"on average, height increases by 2 [units] for every extra year of age\" — always attach the real units and meaning."
        ],
        "explanation": "The gradient of a line of best fit is a rate: the average change in the response variable for each one-unit increase in the explanatory variable, stated with context and units."
      },
      {
        "step_id": "W2",
        "objective": "Know the difference between interpolation and extrapolation when using a fitted line.",
        "required_skill": "STAT-BIV-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Interpolation (predicting WITHIN the range of the original data) is generally reliable; extrapolation (predicting OUTSIDE that range) is riskier — the relationship may not continue to hold"
          },
          {
            "id": "b",
            "label": "Extrapolation is always just as reliable as interpolation"
          },
          {
            "id": "c",
            "label": "Interpolation only applies to categorical data, never numerical data"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-BIV-01.E2_extrapolation_risk_ignored"
          }
        ],
        "hints": [
          "There's no data evidence that the trend continues once you step outside the range you actually observed — the fitted line is just an assumption out there."
        ],
        "explanation": "Using the fitted line to predict a value within the observed data range (interpolation) is more trustworthy than predicting far beyond it (extrapolation), where the linear trend may no longer apply."
      },
      {
        "step_id": "W3",
        "objective": "Know what the sign of the gradient tells you about the relationship.",
        "required_skill": "STAT-BIV-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "A POSITIVE gradient means $y$ tends to increase as $x$ increases; a NEGATIVE gradient means $y$ tends to decrease as $x$ increases"
          },
          {
            "id": "b",
            "label": "The sign of the gradient has no meaning — only its size matters"
          },
          {
            "id": "c",
            "label": "A negative gradient means there is no relationship between the variables"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-BIV-01.E3_gradient_sign_meaning_ignored"
          }
        ],
        "hints": [
          "Picture the line sloping up (positive) or down (negative) as you move right — that direction is exactly what the gradient's sign is telling you."
        ],
        "explanation": "The gradient's sign shows the DIRECTION of the linear relationship: positive means the two variables tend to rise together, negative means one tends to fall as the other rises."
      }
    ],
  },
  {
    dna_id: 'STAT-CORR-01', family: 'STATISTICS', skill: 'Correlation',
    operations: ['compute_or_read_correlation_coefficient', 'interpret_strength_direction'], priorityScore: 84, // S2
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the range of the correlation coefficient $r$.",
        "required_skill": "STAT-CORR-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$r$ always lies between $-1$ and $1$ inclusive"
          },
          {
            "id": "b",
            "label": "$r$ can be any real number"
          },
          {
            "id": "c",
            "label": "$r$ always lies between $0$ and $1$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "STAT-CORR-01.E1_correlation_range_wrong"
          }
        ],
        "hints": [
          "$r=1$ and $r=-1$ represent perfect positive and perfect negative linear relationships respectively — the strongest possible values in either direction."
        ],
        "explanation": "The correlation coefficient $r$ is always between $-1$ and $1$; $-1$/$1$ mean a perfect linear relationship (negative/positive), $0$ means no linear relationship."
      },
      {
        "step_id": "W2",
        "objective": "Know how to read strength and direction from $r$.",
        "required_skill": "STAT-CORR-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$|r|$ close to $1$ = strong linear relationship; $|r|$ close to $0$ = weak; the SIGN of $r$ shows direction (positive/negative)"
          },
          {
            "id": "b",
            "label": "A negative $r$ always means a weak relationship"
          },
          {
            "id": "c",
            "label": "The size of $r$ shows direction, and the sign shows strength"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-CORR-01.E2_negative_r_confused_with_weak"
          },
          {
            "id": "c",
            "error_type": "STAT-CORR-01.E3_r_sign_magnitude_roles_swapped"
          }
        ],
        "hints": [
          "A strong NEGATIVE relationship (like $r=-0.95$) is just as strong as a strong positive one — strength comes from the SIZE (magnitude) of $r$, not its sign."
        ],
        "explanation": "Strength of the linear relationship comes from $|r|$ (closer to $1$ = stronger); the sign of $r$ separately indicates whether the relationship is positive or negative — don't conflate a negative sign with a weak relationship."
      },
      {
        "step_id": "W3",
        "objective": "Know the standing warning about correlation and causation.",
        "required_skill": "STAT-CORR-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "A strong correlation between two variables does NOT by itself prove that one causes the other — there could be a third factor, coincidence, or reverse causation"
          },
          {
            "id": "b",
            "label": "A correlation coefficient close to $1$ or $-1$ always proves causation"
          },
          {
            "id": "c",
            "label": "Causation can only be ruled out if $r=0$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-CORR-01.E4_correlation_assumed_causal"
          }
        ],
        "hints": [
          "Ice cream sales and drowning deaths correlate strongly (both rise in summer) — but neither causes the other; a hidden third factor (hot weather) drives both."
        ],
        "explanation": "\"Correlation does not imply causation\" — a strong statistical relationship is evidence worth investigating, but doesn't on its own establish that one variable causes changes in the other."
      }
    ],
  },
  {
    dna_id: 'STAT-INTERP-01', family: 'STATISTICS', skill: 'Statistical interpretation (context)',
    operations: ['read_summary_statistic', 'connect_to_real_world_context'], priorityScore: 84, // S2
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Know that a summary statistic needs connecting back to its real-world context.",
        "required_skill": "STAT-INTERP-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "State what the number MEANS in the actual scenario (with units and context), not just the bare numeric value on its own"
          },
          {
            "id": "b",
            "label": "A bare number is always a complete and sufficient answer for an interpretation question"
          },
          {
            "id": "c",
            "label": "Context and units are optional extras, not required for a correct answer"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-INTERP-01.E1_bare_number_without_context"
          }
        ],
        "hints": [
          "\"$42$\" on its own says nothing — \"the median delivery time was 42 minutes\" is what an interpretation question is actually asking for."
        ],
        "explanation": "A statistical interpretation question wants the number explained in terms of the real-world scenario — units and context turn a bare figure into a meaningful statement."
      },
      {
        "step_id": "W2",
        "objective": "Know to read a value off a table or graph precisely, with correct units.",
        "required_skill": "STAT-INTERP-01.2",
        "axis": "execution",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Read the exact value at the correct row/column or graph point, and report it WITH the units the table/graph itself uses"
          },
          {
            "id": "b",
            "label": "Approximate values are always acceptable, regardless of what the table/graph actually shows"
          },
          {
            "id": "c",
            "label": "Units can be omitted since they're implied by the question"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "STAT-INTERP-01.E2_value_misread_from_source"
          }
        ],
        "hints": [
          "Double-check which row/column (or axis point) the question is pointing to before reading off the number — misreading the source is a common slip."
        ],
        "explanation": "Reading a statistic from a table or graph means locating the exact correct cell/point and reporting its value with the units already given in that source."
      }
    ],
  },

  // ── SEQUENCES / FINANCIAL ───────────────────────────────────────────────
  {
    dna_id: 'SEQ-01', family: 'SEQUENCES_FINANCIAL', skill: 'Sequences (AP/GP)',
    operations: ['identify_sequence_type', 'find_nth_term_or_common_difference_ratio'], priorityScore: 82, // M1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Distinguish an arithmetic sequence from a geometric sequence.",
        "required_skill": "SEQ-01.1",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Arithmetic: consecutive terms differ by a fixed AMOUNT (add/subtract $d$); Geometric: consecutive terms differ by a fixed RATIO (multiply by $r$)"
          },
          {
            "id": "b",
            "label": "Arithmetic and geometric sequences are always the exact same type of sequence"
          },
          {
            "id": "c",
            "label": "Arithmetic sequences multiply by a fixed ratio; geometric sequences add a fixed amount"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "SEQ-01.E1_arithmetic_geometric_swapped"
          }
        ],
        "hints": [
          "Check consecutive-term differences (constant → arithmetic) vs. consecutive-term ratios (constant → geometric) to tell them apart."
        ],
        "explanation": "Arithmetic sequences change by a constant DIFFERENCE each term; geometric sequences change by a constant RATIO (multiplier) each term — a fundamentally different growth pattern."
      },
      {
        "step_id": "W2",
        "objective": "Recall the $n$th term formulas for AP and GP.",
        "required_skill": "SEQ-01.2",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "AP: $T_n=a+(n-1)d$; GP: $T_n=ar^{n-1}$"
          },
          {
            "id": "b",
            "label": "AP: $T_n=ar^{n-1}$; GP: $T_n=a+(n-1)d$"
          },
          {
            "id": "c",
            "label": "Both AP and GP use $T_n=a+(n-1)d$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "SEQ-01.E2_nth_term_formulas_swapped"
          },
          {
            "id": "c",
            "error_type": "SEQ-01.E2_nth_term_formulas_swapped"
          }
        ],
        "hints": [
          "Match the structure to the sequence type: repeated ADDING of $d$ gives $a+(n-1)d$; repeated MULTIPLYING by $r$ gives $ar^{n-1}$."
        ],
        "explanation": "AP $n$th term: $T_n=a+(n-1)d$ (add $d$ a total of $n-1$ times); GP $n$th term: $T_n=ar^{n-1}$ (multiply by $r$ a total of $n-1$ times)."
      },
      {
        "step_id": "W3",
        "objective": "Know how to test whether a given sequence is arithmetic or geometric.",
        "required_skill": "SEQ-01.3",
        "axis": "execution",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "Check if consecutive-term DIFFERENCES are constant (arithmetic) or if consecutive-term RATIOS are constant (geometric) — compute a few of each to confirm"
          },
          {
            "id": "b",
            "label": "Only check the first two terms; that's always enough to be certain"
          },
          {
            "id": "c",
            "label": "Assume every given sequence is automatically arithmetic"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "SEQ-01.E3_insufficient_terms_checked"
          }
        ],
        "hints": [
          "Two terms alone can't rule out coincidence — checking at least three consecutive differences/ratios confirms the pattern is genuinely constant."
        ],
        "explanation": "To classify a sequence, compute both consecutive differences and consecutive ratios across at least three terms — whichever comes out constant tells you the sequence type."
      }
    ],
  },
  {
    dna_id: 'SERIES-01', family: 'SEQUENCES_FINANCIAL', skill: 'Series (sum, limiting sum)',
    operations: ['identify_series_type', 'apply_sum_formula', 'interpret'], priorityScore: 82, // M1
    reasoningBlueprint: [
      {
        "step_id": "W1",
        "objective": "Recall the sum formulas for a finite AP and a finite GP.",
        "required_skill": "SERIES-01.1",
        "axis": "strategy_selection",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "AP: $S_n=\\dfrac{n}{2}(2a+(n-1)d)$ (or $\\dfrac{n}{2}(a+l)$); GP: $S_n=\\dfrac{a(r^n-1)}{r-1}$"
          },
          {
            "id": "b",
            "label": "AP and GP use the exact same sum formula"
          },
          {
            "id": "c",
            "label": "AP: $S_n=ar^{n-1}$; GP: $S_n=\\dfrac{n}{2}(2a+(n-1)d)$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "b",
            "error_type": "SERIES-01.E1_sum_formulas_conflated"
          },
          {
            "id": "c",
            "error_type": "SERIES-01.E1_sum_formulas_conflated"
          }
        ],
        "hints": [
          "Match the formula to the sequence type underneath it — a sum formula reflects HOW the terms were generated (adding $d$ vs multiplying by $r$)."
        ],
        "explanation": "AP sum: $S_n=\\dfrac{n}{2}(2a+(n-1)d)$; GP sum: $S_n=\\dfrac{a(r^n-1)}{r-1}$ — using the wrong family's formula gives a meaningless result."
      },
      {
        "step_id": "W2",
        "objective": "Know the condition needed for a limiting sum $S_\\infty$ to exist.",
        "required_skill": "SERIES-01.2",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$S_\\infty=\\dfrac{a}{1-r}$ only exists (converges) when $-1<r<1$ (i.e. $|r|<1$) — otherwise the terms don't shrink toward zero and there's no finite limiting sum"
          },
          {
            "id": "b",
            "label": "A limiting sum exists for every geometric series, regardless of $r$"
          },
          {
            "id": "c",
            "label": "A limiting sum only exists when $r>1$"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "SERIES-01.E2_limiting_sum_convergence_condition_wrong"
          }
        ],
        "hints": [
          "If $|r|\\ge 1$, each term stays the same size or grows — an infinite sum of those terms can't settle down to a finite number."
        ],
        "explanation": "The limiting sum formula $S_\\infty=\\dfrac{a}{1-r}$ is only valid for $|r|<1$, where successive terms shrink toward zero and the running total genuinely converges."
      },
      {
        "step_id": "W3",
        "objective": "Know when a problem calls for $S_\\infty$ versus $S_n$.",
        "required_skill": "SERIES-01.3",
        "axis": "recognition",
        "interaction_type": "select",
        "options": [
          {
            "id": "a",
            "label": "$S_\\infty$ is for an ONGOING/INFINITE process (e.g. \"the total distance a bouncing ball eventually travels\"); $S_n$ is for a specific FINITE number of terms"
          },
          {
            "id": "b",
            "label": "$S_\\infty$ and $S_n$ are interchangeable in every context"
          },
          {
            "id": "c",
            "label": "$S_n$ is only ever used when $n$ is explicitly given as a number in the question"
          }
        ],
        "expected_response": "a",
        "common_errors": [
          {
            "id": "c",
            "error_type": "SERIES-01.E3_finite_infinite_context_misread"
          }
        ],
        "hints": [
          "Look for language like \"forever\", \"eventually\", \"in the long run\" (limiting sum) versus \"the first $n$ terms\" or a specific finite count (finite sum)."
        ],
        "explanation": "Whether a question wants $S_n$ (a specific finite number of terms) or $S_\\infty$ (the ongoing/limiting total as the process continues indefinitely) depends on reading the context, not just whether a number for $n$ appears."
      }
    ],
  },
  {
    dna_id: 'FIN-GP-01', family: 'SEQUENCES_FINANCIAL', skill: 'Financial geometric-series modelling',
    operations: ['identify_geometric_structure', 'model_deposits_or_withdrawals', 'sum_gp', 'interpret'], priorityScore: 82, // M1
    // Reasoning-blueprint warmup (Sapere_Question_DNA_v2.0 §3-4, pilot 2026-08-15).
    // DNA-generic only — true for every FIN-GP-01 question regardless of its
    // specific numbers, so it can run BEFORE the student sees the real
    // question and hand off into the existing (already-verified) per-question
    // grading in HscTypePracticeSession unchanged. Do not add a step here that
    // depends on a specific question's numbers/answer key.
    reasoningBlueprint: [
      {
        step_id: 'W1',
        objective: 'Recognise the geometric-series structure.',
        required_skill: 'FIN-GP-01.1',
        axis: 'recognition',
        interaction_type: 'select',
        options: [
          { id: 'a', label: 'A fixed dollar amount is added or removed each period (arithmetic)' },
          { id: 'b', label: 'A fixed percentage or ratio is applied each period (geometric)' },
        ],
        expected_response: 'b',
        common_errors: [{ id: 'a', error_type: 'FIN-GP-01.E1_arithmetic_confusion' }],
        hints: [
          'Look at whether the change each period is a flat dollar amount, or a percentage/multiplier of the previous amount.',
          'Interest, growth and depreciation problems multiply by a ratio each period — that makes it geometric, not arithmetic.',
        ],
        explanation:
          'Interest-based financial series change by a fixed ratio each period, not a fixed amount — that makes them geometric series.',
      },
      {
        step_id: 'W2',
        objective: 'Select the formula family this problem needs.',
        required_skill: 'FIN-GP-01.2',
        axis: 'strategy_selection',
        interaction_type: 'select',
        options: [
          { id: 'a', label: '$T_n = ar^{n-1}$ — the value of one single term' },
          { id: 'b', label: '$S_n = \\dfrac{a(r^n-1)}{r-1}$ — the sum of all terms so far' },
          { id: 'c', label: '$S_\\infty = \\dfrac{a}{1-r}$ — the limiting sum as $n \\to \\infty$' },
        ],
        expected_response: 'b',
        common_errors: [
          { id: 'a', error_type: 'FIN-GP-01.E2_single_term_confusion' },
          { id: 'c', error_type: 'FIN-GP-01.E3_limiting_sum_confusion' },
        ],
        hints: [
          'The question asks for a total accumulated (or run-down) balance, not the size of one single deposit/withdrawal.',
          'A running financial balance is the sum of every term up to that point — not one term, and not an infinite sum (the number of periods is finite).',
        ],
        explanation:
          'A balance built from regular deposits/withdrawals is the sum of a finite GP, $S_n = \\dfrac{a(r^n-1)}{r-1}$ — not a single term and not the limiting sum.',
      },
      {
        step_id: 'W3',
        objective: 'Identify what $a$ and $r$ represent in a financial GP.',
        required_skill: 'FIN-GP-01.3',
        axis: 'recognition',
        interaction_type: 'select',
        options: [
          { id: 'a', label: '$a$ = the interest rate, $r$ = the first deposit' },
          { id: 'b', label: '$a$ = the first term (first deposit/withdrawal), $r$ = the growth factor per period (e.g. $1+\\text{rate}$)' },
          { id: 'c', label: '$a$ = the total number of periods, $r$ = the final balance' },
        ],
        expected_response: 'b',
        common_errors: [{ id: 'a', error_type: 'FIN-GP-01.E4_ar_swap' }],
        hints: [
          'In $S_n = \\dfrac{a(r^n-1)}{r-1}$, $a$ is always the value of the first term in the series.',
          'The common ratio $r$ is the per-period growth factor — for growth this is usually $1 + \\text{periodic rate}$.',
        ],
        explanation:
          '$a$ is the first deposit/withdrawal amount and $r$ is the per-period growth factor (commonly $1+\\text{rate}$ for growth, $1-\\text{rate}$ for decline) — substitute the question\'s actual numbers next.',
      },
      // W4-W13 (2026-08-16): pool expansion, same randomized-draw pattern
      // piloted on CALC-DIFF-01. Still DNA-generic only. W8/W9 target the
      // "grows then a fixed amount is removed" recurrence pattern found
      // during the FIN-GP-01 drop-bear retrofit (2026-08-16) — genuinely
      // common across this DNA's questions, not specific to one of them.
      ...(() => {
        const w = (stepId, skillSuffix, objective, axis, options, correctId, errorMap, hints, explanation) => ({
          step_id: stepId,
          objective,
          required_skill: `FIN-GP-01.${skillSuffix}`,
          axis,
          interaction_type: 'select',
          options,
          expected_response: correctId,
          common_errors: Object.entries(errorMap).map(([id, error_type]) => ({ id, error_type })),
          hints,
          explanation,
        });
        return [
          w('W4', '4', 'Distinguish geometric GROWTH from geometric DECLINE by the value of $r$.', 'recognition',
            [
              { id: 'a', label: '$r>1$ means the quantity is growing each period (e.g. compounding investment); $0<r<1$ means it\'s shrinking (e.g. depreciation)' },
              { id: 'b', label: '$r$ being positive always means growth, regardless of its size' },
              { id: 'c', label: '$r>1$ means shrinking, $r<1$ means growing' },
            ],
            'a', { b: 'FIN-GP-01.E5_ratio_size_ignored', c: 'FIN-GP-01.E6_growth_decline_reversed' },
            ['Compare $r$ to $1$, not to $0$ — a ratio just under $1$ still shrinks the sequence every period.'],
            'Growth needs $r>1$ (each term bigger than the last); decline/depreciation needs $0<r<1$ (each term smaller) — check where $r$ sits relative to $1$, not relative to $0$.'),
          w('W5', '5', 'Recognise a "how many periods until the target is reached" question needs solving for $n$ using logarithms.', 'strategy_selection',
            [
              { id: 'a', label: 'Set the term or sum formula equal to the target value, isolate the power of $r$, then take $\\log$ of both sides to solve for $n$' },
              { id: 'b', label: 'Guess-and-check is the only way to find $n$' },
              { id: 'c', label: '$n$ can be found by simply dividing the target by $r$' },
            ],
            'a', { c: 'FIN-GP-01.E7_log_solving_skipped' },
            ['Whenever the unknown is stuck in an exponent, isolating that power and taking logs of both sides is the standard way to bring $n$ down.'],
            'To solve for $n$ when it sits in an exponent (e.g. $ar^{n-1}=\\text{target}$), isolate $r^{n-1}$ then apply $\\log$ to both sides: $n-1 = \\dfrac{\\log(\\text{target}/a)}{\\log r}$.'),
          w('W6', '6', 'Know how to round $n$ once solved, for a "first time the target is reached/exceeded" question.', 'execution',
            [
              { id: 'a', label: 'Round UP to the next whole number of periods — a target isn\'t reached until a WHOLE period has completed' },
              { id: 'b', label: 'Round to the nearest whole number, up or down depending which is closer' },
              { id: 'c', label: 'Round DOWN, since the target might be reached partway through a period' },
            ],
            'a', { b: 'FIN-GP-01.E8_rounding_direction_wrong', c: 'FIN-GP-01.E8_rounding_direction_wrong' },
            ['If $n$ comes out as, say, $6.3$, the target genuinely isn\'t reached until period $7$ — a fractional period doesn\'t count as "reached".'],
            'For a "first period the target is reached/exceeded" question, always round the solved $n$ UP to the next whole number — a partial period hasn\'t actually happened yet.'),
          w('W7', '7', 'Watch for an off-by-one trap between "value right after the $n$th deposit" and "value one period later".', 'recognition',
            [
              { id: 'a', label: 'These can genuinely differ by one period — read carefully whether the question means immediately after a deposit/withdrawal, or after the following period\'s growth as well' },
              { id: 'b', label: 'They always mean exactly the same instant' },
              { id: 'c', label: 'The difference is never worth checking' },
            ],
            'a', { b: 'FIN-GP-01.E9_off_by_one_period' },
            ['"Immediately after the $n$th deposit" and "at the start of the $(n+1)$th period" sound similar but can be the same instant or one growth-step apart depending on the model — check exactly which the wording describes.'],
            'A financial GP model can define $T_n$ as the value right after the $n$th transaction, or after that period\'s growth has also been applied — misreading which one shifts every answer by one period.'),
          w('W8', '8', 'Recognise when a recurrence "grows by a percentage, THEN a fixed amount is added or removed" needs the GP SUM formula inside its closed form, not a plain GP term formula.', 'recognition',
            [
              { id: 'a', label: '$T_n = rT_{n-1}\\pm d$ (grow by ratio $r$, then adjust by a fixed amount $d$ each period) is NOT a pure geometric sequence — its closed form combines a GP term with a GP SUM of the repeated adjustments' },
              { id: 'b', label: 'This recurrence is still a pure geometric sequence, and $T_n=ar^{n-1}$ applies directly' },
              { id: 'c', label: 'This recurrence is arithmetic, since a fixed amount is involved' },
            ],
            'a', { b: 'FIN-GP-01.E10_mixed_recurrence_treated_as_pure_gp', c: 'FIN-GP-01.E10_mixed_recurrence_treated_as_pure_gp' },
            ['A pure GP only ever multiplies by $r$ — as soon as a fixed amount is also added/subtracted every period, the closed form needs a GP sum term to account for all those repeated adjustments.'],
            'A "grow by $r$, then add/remove a fixed amount $d$" recurrence has closed form $T_n = ar^n - d\\cdot\\dfrac{r^n-1}{r-1}$ (or similar) — the fixed adjustment accumulates as its own geometric SUM, it isn\'t a plain $ar^{n-1}$ term.'),
          w('W9', '9', 'Verify a given closed-form $T_n$ formula against the model\'s own starting value.', 'simplify_and_verify',
            [
              { id: 'a', label: 'Substitute the smallest valid $n$ (often $n=0$ or $n=1$) into the closed-form formula and check it matches the known starting amount' },
              { id: 'b', label: 'A closed-form formula never needs checking once it\'s derived' },
              { id: 'c', label: 'Substitute a large $n$ value and check the answer is a "nice" round number' },
            ],
            'a', { b: 'FIN-GP-01.E11_no_verification_used' },
            ['The cheapest sanity check on any derived formula is plugging in the starting point you already know the answer to.'],
            'A quick sanity check on a derived $T_n$ formula: substitute the model\'s known starting $n$ and confirm the formula reproduces the given initial amount.'),
          w('W10', '10', 'Interpret a "when does the balance run out / become extinct" question correctly.', 'recognition',
            [
              { id: 'a', label: 'Solve for the first whole-number $n$ where $T_n \\le 0$ (or the model breaks down) — the answer is a whole period, even if the algebra gives a decimal' },
              { id: 'b', label: 'Solve $T_n=0$ exactly and always round DOWN to a whole number' },
              { id: 'c', label: 'The balance can never reach zero in a geometric model' },
            ],
            'a', { c: 'FIN-GP-01.E12_extinction_assumed_impossible' },
            ['A repeated percentage-growth-plus-fixed-withdrawal model absolutely can run out — solve for $n$, then check which whole period actually first satisfies $T_n\\le 0$.'],
            'An "extinction"/"runs out" question wants the first whole $n$ where the balance is no longer positive — solve the inequality, then interpret the (often non-integer) result as the first whole period it happens in.'),
          w('W11', '11', 'Know the validity restriction on the geometric sum formula.', 'recognition',
            [
              { id: 'a', label: '$S_n=\\dfrac{a(r^n-1)}{r-1}$ requires $r\\ne 1$ — division by zero otherwise' },
              { id: 'b', label: 'The sum formula works for any value of $r$, including $r=1$' },
              { id: 'c', label: 'The sum formula only works when $r$ is negative' },
            ],
            'a', { b: 'FIN-GP-01.E13_r_equals_one_ignored' },
            ['Look at the denominator $r-1$ in the sum formula — it becomes $0$ exactly when $r=1$.'],
            'The finite GP sum formula $S_n=\\dfrac{a(r^n-1)}{r-1}$ is undefined at $r=1$ (division by zero) — a genuinely constant sequence needs $S_n=na$ instead.'),
          w('W12', '12', 'Recognise a "will the amount ever double/triple" question as solving $r^{n-1}=k$ for $n$.', 'strategy_selection',
            [
              { id: 'a', label: 'Set $ar^{n-1}=k\\cdot a$ (so $r^{n-1}=k$ after dividing by $a$), then solve for $n$ using logarithms' },
              { id: 'b', label: 'Simply multiply the number of periods by $k$' },
              { id: 'c', label: 'This type of question cannot be solved algebraically' },
            ],
            'a', { c: 'FIN-GP-01.E7_log_solving_skipped' },
            ['Dividing both sides by the first term $a$ isolates the pure ratio power $r^{n-1}$, ready for logs.'],
            '"When does it double/triple" means solving $ar^{n-1}=k\\cdot a$, i.e. $r^{n-1}=k$, via logarithms — the initial amount $a$ cancels out of the equation entirely.'),
        ];
      })(),
    ],
  },
  {
    dna_id: 'FIN-INTEREST-01', family: 'SEQUENCES_FINANCIAL', skill: 'Interest / loan / annuity modelling',
    operations: ['identify_interest_type', 'apply_formula_or_recurrence', 'interpret'], priorityScore: 82, // M1
    // Reasoning-blueprint warmup (2026-08-15) — DNA-generic only. Unlike
    // FIN-GP-01, this DNA covers several structurally different scenarios
    // (lump-sum PV/FV, loan amortisation, annuity depletion), so the
    // warmup sticks to what's true across ALL of them: converting the
    // annual rate to a periodic one, counting periods, and — since a
    // present-value bug was found and fixed on asc2020-mc8 while building
    // this — explicitly drilling "PV means divide by the factor".
    reasoningBlueprint: [
      {
        step_id: 'W1',
        objective: 'To use an interest-rate table or formula, what do you need to convert the annual rate into first?',
        required_skill: 'FIN-INTEREST-01.1',
        axis: 'execution',
        interaction_type: 'select',
        options: [
          { id: 'a', label: 'The rate per compounding period' },
          { id: 'b', label: 'The total interest earned over the whole term' },
          { id: 'c', label: 'The number of years' },
        ],
        expected_response: 'a',
        common_errors: [{ id: 'b', error_type: 'FIN-INTEREST-01.E1_rate_vs_interest_confusion' }],
        hints: [
          'Interest-rate tables and formulas always work with the rate for ONE compounding period, not the whole year.',
          'If interest compounds more than once a year, the annual rate has to be divided down first.',
        ],
        explanation: 'Every rate must first be converted to the rate per compounding period (e.g. annual ÷ periods per year) before it can be used in a formula or table.',
      },
      {
        step_id: 'W2',
        objective: 'What do you need to count to know how many times interest compounds?',
        required_skill: 'FIN-INTEREST-01.2',
        axis: 'execution',
        interaction_type: 'select',
        options: [
          { id: 'a', label: 'The number of compounding periods (years × periods per year)' },
          { id: 'b', label: 'The number of dollars invested' },
          { id: 'c', label: 'The interest rate' },
        ],
        expected_response: 'a',
        common_errors: [{ id: 'b', error_type: 'FIN-INTEREST-01.E2_periods_confusion' }],
        hints: [
          'Multiply the number of years by how many times per year interest compounds.',
        ],
        explanation: 'The number of periods is years × compounding frequency per year.',
      },
      {
        step_id: 'W3',
        objective: 'You know the future value you want, and need to find how much to invest today. Do you multiply or divide by the compounding factor?',
        required_skill: 'FIN-INTEREST-01.3',
        axis: 'strategy_selection',
        interaction_type: 'select',
        options: [
          { id: 'a', label: 'Multiply' },
          { id: 'b', label: 'Divide' },
        ],
        expected_response: 'b',
        common_errors: [{ id: 'a', error_type: 'FIN-INTEREST-01.E3_pv_fv_direction_confusion' }],
        hints: [
          'Going from a smaller amount today to a larger amount in the future is multiplying by the factor.',
          'Present value is the reverse direction — undo the multiplication.',
        ],
        explanation: 'Present value = future value ÷ compounding factor — the reverse of growing a lump sum forward.',
      },
      // W4-W14 (2026-08-16): pool expansion, same randomized-draw pattern
      // piloted on CALC-DIFF-01. Still DNA-generic only — true across the
      // lump-sum PV/FV, loan amortisation, and annuity scenarios this DNA
      // spans.
      ...(() => {
        const w = (stepId, skillSuffix, objective, axis, options, correctId, errorMap, hints, explanation) => ({
          step_id: stepId,
          objective,
          required_skill: `FIN-INTEREST-01.${skillSuffix}`,
          axis,
          interaction_type: 'select',
          options,
          expected_response: correctId,
          common_errors: Object.entries(errorMap).map(([id, error_type]) => ({ id, error_type })),
          hints,
          explanation,
        });
        return [
          w('W4', '4', 'Distinguish simple (flat-rate) interest from compound interest by what the interest is calculated on.', 'recognition',
            [
              { id: 'a', label: 'Simple interest is calculated on the ORIGINAL principal every period; compound interest is calculated on the CURRENT (growing) balance, which includes previously earned interest' },
              { id: 'b', label: 'Both types are always calculated on the original principal only' },
              { id: 'c', label: 'Simple interest grows faster than compound interest over a long term' },
            ],
            'a', { c: 'FIN-INTEREST-01.E4_simple_vs_compound_growth_reversed' },
            ['Compound interest is interest paid on interest already earned — that\'s what makes it grow faster over time than simple interest.'],
            'Simple interest: same fixed amount each period, based on the ORIGINAL principal. Compound interest: recalculated each period on the CURRENT balance, so it accelerates over time.'),
          w('W5', '5', 'Recall the simple interest formula.', 'strategy_selection',
            [
              { id: 'a', label: '$I = Prn$ ($P$=principal, $r$=rate per period, $n$=number of periods)' },
              { id: 'b', label: '$I = P(1+r)^n$' },
              { id: 'c', label: '$I = P + rn$' },
            ],
            'a', { b: 'FIN-INTEREST-01.E5_formula_family_swapped' },
            ['Simple interest is a straight multiplication, not a compounding power — that formula belongs to compound interest instead.'],
            '$I=Prn$ — simple interest is linear in $n$, no exponent involved.'),
          w('W6', '6', 'Recall the compound interest / future value formula.', 'strategy_selection',
            [
              { id: 'a', label: '$FV = PV(1+r)^n$ ($r$=rate per compounding period, $n$=number of compounding periods)' },
              { id: 'b', label: '$FV = PV \\cdot rn$' },
              { id: 'c', label: '$FV = PV + (1+r)^n$' },
            ],
            'a', { b: 'FIN-INTEREST-01.E5_formula_family_swapped' },
            ['Compounding is repeated multiplication by the growth factor, which is exactly what a power represents.'],
            '$FV=PV(1+r)^n$ — the principal grows by a factor of $(1+r)$ once for every compounding period.'),
          w('W7', '7', 'Recognise that a loan repayment reduces BOTH principal and interest, not just principal.', 'recognition',
            [
              { id: 'a', label: 'Each repayment first covers the interest accrued that period, and the remainder reduces the outstanding principal' },
              { id: 'b', label: 'Every repayment goes entirely toward reducing the principal, with interest charged separately at the end' },
              { id: 'c', label: 'Every repayment goes entirely toward the interest until the interest is fully paid off' },
            ],
            'a', { b: 'FIN-INTEREST-01.E6_repayment_split_misunderstood', c: 'FIN-INTEREST-01.E6_repayment_split_misunderstood' },
            ['Interest is charged on the outstanding balance each period first — whatever\'s left of the repayment then chips away at the principal itself.'],
            'A loan repayment is split: part covers that period\'s interest on the remaining balance, and the rest reduces the principal — which is why the outstanding balance shrinks more slowly at first.'),
          w('W8', '8', 'Distinguish an "annuity" (regular repeated payments) from a "lump sum" (single amount) when choosing a formula.', 'recognition',
            [
              { id: 'a', label: 'A lump sum uses the single-amount compound interest formula $FV=PV(1+r)^n$; an annuity (regular deposits/withdrawals) needs a SUM-of-a-GP-style formula instead, since many separate payments each compound for a different length of time' },
              { id: 'b', label: 'Both scenarios always use the exact same single-amount formula' },
              { id: 'c', label: 'An annuity is just a lump sum multiplied by the number of payments' },
            ],
            'a', { b: 'FIN-INTEREST-01.E7_annuity_treated_as_lump_sum', c: 'FIN-INTEREST-01.E7_annuity_treated_as_lump_sum' },
            ['A lump sum is invested/borrowed once; an annuity has many separate payments, each compounding for a different remaining time — that difference is exactly what a GP-sum-based annuity formula (or table factor) accounts for.'],
            'A single deposit/loan uses $FV=PV(1+r)^n$; a series of regular payments (an annuity) needs a table/formula built from summing each payment\'s own compounding — never treat repeated payments as one lump sum.'),
          w('W9', '9', 'Read an interest-rate/annuity table correctly for the number of periods and the periodic rate.', 'execution',
            [
              { id: 'a', label: 'Match the table row/column to the NUMBER OF COMPOUNDING PERIODS ($n$) and the RATE PER PERIOD — not the number of years and the annual rate directly, if compounding is more than once a year' },
              { id: 'b', label: 'Always use the row for the number of years, regardless of how often interest compounds' },
              { id: 'c', label: 'Always use the annual rate column, regardless of compounding frequency' },
            ],
            'a', { b: 'FIN-INTEREST-01.E8_table_row_period_mismatch', c: 'FIN-INTEREST-01.E9_table_column_rate_mismatch' },
            ['If interest compounds quarterly, the table needs $n=$years$\\times4$ periods and the rate column for the quarterly (not annual) rate.'],
            'Table factors are always indexed by (periodic rate, number of periods) — for anything compounding more than once a year, convert both the rate and the count before looking up the factor.'),
          w('W10', '10', 'Recognise the difference between "future value of an annuity" and "future value of a lump sum" formula structure.', 'recognition',
            [
              { id: 'a', label: 'A lump sum formula tracks ONE amount compounding; an annuity formula tracks a SERIES of equal regular payments, each compounding for a different number of remaining periods, then summed' },
              { id: 'b', label: 'They are structurally identical formulas' },
              { id: 'c', label: 'An annuity formula only ever applies to withdrawing money, never depositing it' },
            ],
            'a', { c: 'FIN-INTEREST-01.E10_annuity_assumed_withdrawal_only' },
            ['An annuity can model either regular deposits building up a balance, or regular withdrawals running one down — the key feature is "regular repeated payments", not the direction of the cash flow.'],
            'An annuity formula sums many separate payments, each compounding for its own remaining time until the valuation date — a lump-sum formula only ever tracks one single amount.'),
          w('W11', '11', 'Distinguish "reducing balance" from "flat-rate" loan interest calculation.', 'recognition',
            [
              { id: 'a', label: 'Reducing balance charges interest on the CURRENT outstanding amount each period (it shrinks as the loan is paid down); flat-rate charges interest on the ORIGINAL principal for the whole term regardless of repayments made' },
              { id: 'b', label: 'Both methods always produce identical total interest' },
              { id: 'c', label: 'Reducing balance always charges MORE total interest than flat-rate on the same loan' },
            ],
            'a', { c: 'FIN-INTEREST-01.E11_reducing_balance_vs_flat_rate_reversed' },
            ['If interest is always based on the ORIGINAL amount even as the balance is being paid down, that\'s flat-rate — usually the more expensive method overall.'],
            'Reducing-balance interest recalculates on the shrinking outstanding balance each period (generally cheaper overall); flat-rate interest is fixed on the original principal for the whole term, regardless of repayments already made.'),
          w('W12', '12', 'Interpret "how much interest was earned/paid" correctly.', 'recognition',
            [
              { id: 'a', label: 'Interest earned/paid = final amount $-$ original principal — NOT the final amount itself' },
              { id: 'b', label: 'Interest earned/paid IS the final amount' },
              { id: 'c', label: 'Interest earned/paid = final amount $\\times$ rate' },
            ],
            'a', { b: 'FIN-INTEREST-01.E12_final_amount_confused_with_interest' },
            ['The final balance includes the original principal too — subtract that principal back out to isolate just the interest portion.'],
            '"Interest earned/paid" asks for the GROWTH only: (final amount) $-$ (original principal) — quoting the final amount alone answers a different question.'),
          w('W13', '13', 'Recognise that comparing two interest options fairly needs the same principal AND the same time period.', 'strategy_selection',
            [
              { id: 'a', label: 'Compute the future value (or total interest) for BOTH options over the identical principal and identical time period before comparing them' },
              { id: 'b', label: 'Compare the two raw interest RATES directly, regardless of compounding frequency or term length' },
              { id: 'c', label: 'The option with the higher advertised rate is always better, regardless of anything else' },
            ],
            'a', { b: 'FIN-INTEREST-01.E13_raw_rates_compared_directly', c: 'FIN-INTEREST-01.E13_raw_rates_compared_directly' },
            ['A higher advertised annual rate compounded less often can lose out to a lower rate compounded more often — actually compute both outcomes rather than comparing the headline numbers.'],
            'Comparing financial options fairly means computing the actual future value or total interest for BOTH over the same principal and time — raw advertised rates alone (especially with different compounding frequencies) can be misleading.'),
        ];
      })(),
    ],
  },
];

export const DNA_BY_ID = Object.fromEntries(QUESTION_DNA.map(d => [d.dna_id, d]));
