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
  },
  {
    dna_id: 'CALC-TAN-01', family: 'CALCULUS', skill: 'Tangent / normal',
    operations: ['differentiate', 'evaluate_gradient', 'form_line_equation'], priorityScore: 93, // C2
  },
  {
    dna_id: 'CALC-STAT-01', family: 'CALCULUS', skill: 'Stationary points & curve analysis',
    operations: ['differentiate', 'find_stationary_point', 'classify', 'sketch_or_describe'], priorityScore: 93, // C2
  },
  {
    dna_id: 'CALC-OPT-01', family: 'CALCULUS', skill: 'Optimisation',
    operations: ['model', 'differentiate', 'find_stationary_point', 'classify', 'interpret'], priorityScore: 96, // C3
  },
  {
    dna_id: 'CALC-INT-01', family: 'CALCULUS', skill: 'Integration',
    operations: ['identify_technique', 'integrate', 'apply_initial_condition_or_limits'], priorityScore: 95, // C4
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
  },
];

export const DNA_BY_ID = Object.fromEntries(QUESTION_DNA.map(d => [d.dna_id, d]));
