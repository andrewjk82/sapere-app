/**
 * Deterministic grading for reasoning-blueprint steps (Sapere_Question_DNA_v2.0
 * §3-6). Two kinds, both graded without AI judgement:
 *
 * - DNA-generic warmup steps ('select') — true for every question sharing a
 *   DNA (see tools/dna/dnaTaxonomy.js, DnaReasoningWarmup.jsx).
 * - Question-specific pre-steps ('complete') — tied to one real question's
 *   own numbers (see questions/{id}.reasoning_blueprint,
 *   QuestionReasoningSteps.jsx). The question's actual final answer is never
 *   graded here — that stays on the existing, already-verified MC/short-answer
 *   path in HscTypePracticeSession.jsx (mcOptionShuffle.js) so there is only
 *   ever one place that decides "is the real answer correct".
 */

const computeRegistry = {
  multiply: ({ a, b }) => a * b,
};

function parseNumeric(value) {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return NaN;
  const cleaned = value.trim().replace(/[$,]/g, '').replace(/%$/, '');
  const n = Number(cleaned);
  if (Number.isNaN(n)) return NaN;
  return value.trim().endsWith('%') ? n : n; // percentages are compared as their face value (e.g. "4.5" not 0.045)
}

/**
 * @param {object} step
 * @param {string} response
 * @returns {{correct: boolean, error_type?: string}}
 */
export function gradeDnaStep(step, response) {
  if (step.interaction_type === 'complete') {
    let expected;
    if (step.compute) {
      const fn = computeRegistry[step.compute];
      if (!fn) throw new Error(`Unknown compute key: ${step.compute}`);
      expected = fn(step.params);
    } else {
      expected = parseNumeric(step.expected_response);
    }
    const given = parseNumeric(response);
    if (Number.isNaN(given)) return { correct: false, error_type: 'E_unparsable_response' };
    const tolerance = step.tolerance ?? 0;
    return Math.abs(given - expected) <= tolerance
      ? { correct: true }
      : { correct: false, error_type: 'E_execution_error' };
  }

  // select / identify / verify / justify — exact option-id match
  if (response === step.expected_response) return { correct: true };
  const match = (step.common_errors || []).find((e) => e.id === response);
  return { correct: false, error_type: match ? match.error_type : 'E_unclassified' };
}
