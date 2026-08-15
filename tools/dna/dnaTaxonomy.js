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

export const DNA_TAXONOMY_VERSION = '1.1';

// ─── Version history ────────────────────────────────────────────────────────
// v1.0 — initial 32-entry taxonomy from the master prompt (§7).
// v1.1 (2026-08-12) — promoted TRIG-GEO-01 from candidate CAND-TRIG-001.
//   44 occurrences across the HSC trial corpus (sine/cosine rule, bearings,
//   arcs & sectors, right-angled triangle problems) with similarity <0.75 to
//   any existing DNA — meets the master prompt §12 promotion trigger
//   (occurrences>=3 AND similarity<0.75). Tutor-approved.

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
    ],
  },
];

export const DNA_BY_ID = Object.fromEntries(QUESTION_DNA.map(d => [d.dna_id, d]));
