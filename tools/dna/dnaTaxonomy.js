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

export const DNA_TAXONOMY_VERSION = '1.2';

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
  },
  {
    dna_id: 'CALC-MOTION-01', family: 'CALCULUS', skill: 'Motion / rates of change',
    operations: ['relate_quantities', 'differentiate_or_integrate', 'apply_initial_conditions', 'interpret'], priorityScore: 96, // C3
  },

  // ── TRIGONOMETRY ────────────────────────────────────────────────────────
  {
    dna_id: 'TRIG-EQ-01', family: 'TRIGONOMETRY', skill: 'Trigonometric equations',
    operations: ['identify_domain', 'solve_equation', 'find_all_solutions_in_domain'], priorityScore: 80, // T3
  },
  {
    dna_id: 'TRIG-GRAPH-01', family: 'TRIGONOMETRY', skill: 'Trigonometric graph parameters',
    operations: ['identify_amplitude_period_shift', 'sketch_or_read_graph', 'interpret'], priorityScore: 80, // T3
  },
  {
    dna_id: 'TRIG-MODEL-01', family: 'TRIGONOMETRY', skill: 'Trigonometric modelling',
    operations: ['form_model', 'solve_within_domain', 'interpret_context'], priorityScore: 80, // T3
  },
  {
    dna_id: 'TRIG-ID-01', family: 'TRIGONOMETRY', skill: 'Trigonometric identities',
    operations: ['apply_identity', 'simplify_or_prove'], priorityScore: 80, // T3
  },
  {
    dna_id: 'TRIG-GEO-01', family: 'TRIGONOMETRY', skill: 'Non-right-angle triangle trigonometry (sine/cosine rule, bearings, arcs & sectors)',
    operations: ['interpret_diagram', 'apply_sine_or_cosine_rule', 'apply_bearing_or_arc_sector_formula', 'round_appropriately'],
    priorityScore: 75, // T1
    dna_version: '1.1', created_reason: 'Promoted from CAND-TRIG-001 — 44 occurrences, recurring across schools/years.',
  },

  // ── PROBABILITY ─────────────────────────────────────────────────────────
  {
    dna_id: 'PROB-COND-01', family: 'PROBABILITY', skill: 'Conditional probability',
    operations: ['identify_condition', 'apply_conditional_formula', 'interpret'], priorityScore: 89, // S1
  },
  {
    dna_id: 'PROB-TOTAL-01', family: 'PROBABILITY', skill: 'Multi-stage / tree diagrams',
    operations: ['build_tree_or_table', 'multiply_along_branches', 'sum_relevant_paths'], priorityScore: 89, // S1
  },
  {
    dna_id: 'PROB-COMP-01', family: 'PROBABILITY', skill: 'Complement / repeated events',
    operations: ['identify_complement_or_union', 'apply_probability_law', 'interpret'], priorityScore: 89, // S1
  },
  {
    dna_id: 'PROB-DIST-01', family: 'PROBABILITY', skill: 'Discrete probability distributions',
    operations: ['identify_distribution', 'compute_expected_value_or_variance', 'interpret'], priorityScore: 89, // S1
  },
  {
    dna_id: 'PROB-NORM-01', family: 'PROBABILITY', skill: 'Normal distribution',
    operations: ['compute_z_score', 'read_or_apply_normal_probability', 'interpret_context'], priorityScore: 91, // S3
  },
  {
    dna_id: 'PROB-CONT-01', family: 'PROBABILITY', skill: 'Continuous distributions / PDF / CDF',
    operations: ['verify_area_equals_one', 'integrate_pdf', 'interpret_probability'], priorityScore: 91, // S3
  },

  // ── FUNCTIONS / ALGEBRA ─────────────────────────────────────────────────
  {
    dna_id: 'FUNC-GRAPH-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Function graphs (domain/range/asymptotes/intercepts)',
    operations: ['identify_domain_range', 'identify_key_features', 'sketch_or_describe'], priorityScore: 88, // F2
  },
  {
    dna_id: 'FUNC-TRANS-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Transformations',
    operations: ['identify_transformation', 'apply_to_base_function', 'sketch_or_describe'], priorityScore: 88, // F2
  },
  {
    dna_id: 'FUNC-COMP-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Composite functions',
    operations: ['identify_component_functions', 'compose', 'evaluate_or_state_domain'], priorityScore: 86, // F1
  },
  {
    dna_id: 'FUNC-INV-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Inverse functions',
    operations: ['swap_variables', 'solve_for_new_dependent', 'state_domain_range'], priorityScore: 86, // F1
  },
  {
    dna_id: 'ALG-EQ-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Algebraic equations/inequations',
    operations: ['rearrange', 'solve', 'check_validity_in_context'], priorityScore: 86, // F1
  },
  {
    dna_id: 'ALG-LOG-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Logarithmic equations',
    operations: ['apply_log_laws', 'solve', 'check_domain'], priorityScore: 74, // E1
  },
  {
    dna_id: 'ALG-EXP-01', family: 'FUNCTIONS_ALGEBRA', skill: 'Exponential equations/models',
    operations: ['form_or_use_exponential_model', 'solve_for_parameter', 'interpret_rate'], priorityScore: 74, // E1
  },

  // ── STATISTICS ──────────────────────────────────────────────────────────
  {
    dna_id: 'STAT-DESC-01', family: 'STATISTICS', skill: 'Descriptive statistics',
    operations: ['compute_measure_of_centre_or_spread', 'interpret_context'], priorityScore: 84, // S2
  },
  {
    dna_id: 'STAT-BIV-01', family: 'STATISTICS', skill: 'Bivariate data / regression',
    operations: ['read_scatterplot', 'fit_or_use_line_of_best_fit', 'interpret_gradient_intercept'], priorityScore: 84, // S2
  },
  {
    dna_id: 'STAT-CORR-01', family: 'STATISTICS', skill: 'Correlation',
    operations: ['compute_or_read_correlation_coefficient', 'interpret_strength_direction'], priorityScore: 84, // S2
  },
  {
    dna_id: 'STAT-INTERP-01', family: 'STATISTICS', skill: 'Statistical interpretation (context)',
    operations: ['read_summary_statistic', 'connect_to_real_world_context'], priorityScore: 84, // S2
  },

  // ── SEQUENCES / FINANCIAL ───────────────────────────────────────────────
  {
    dna_id: 'SEQ-01', family: 'SEQUENCES_FINANCIAL', skill: 'Sequences (AP/GP)',
    operations: ['identify_sequence_type', 'find_nth_term_or_common_difference_ratio'], priorityScore: 82, // M1
  },
  {
    dna_id: 'SERIES-01', family: 'SEQUENCES_FINANCIAL', skill: 'Series (sum, limiting sum)',
    operations: ['identify_series_type', 'apply_sum_formula', 'interpret'], priorityScore: 82, // M1
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
