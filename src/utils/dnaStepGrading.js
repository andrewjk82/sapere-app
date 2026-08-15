/**
 * Deterministic grading for DNA reasoning-blueprint warmup steps
 * (Sapere_Question_DNA_v2.0 §3-6, pilot on FIN-GP-01 — see
 * tools/dna/dnaTaxonomy.js and src/components/hsc/DnaReasoningWarmup.jsx).
 *
 * These warmup steps are select-only for now (identify_* / classify_* type
 * decisions that are true for every question sharing the DNA, not the
 * question's own numeric answer) — no AI judgement, exact option-id match
 * against `expected_response`, same spirit as src/utils/mcOptionShuffle.js
 * for the real question that follows.
 *
 * @param {{expected_response: string, common_errors?: {id:string, error_type:string}[]}} step
 * @param {string} response - the selected option id
 * @returns {{correct: boolean, error_type?: string}}
 */
export function gradeDnaStep(step, response) {
  if (response === step.expected_response) return { correct: true };
  const match = (step.common_errors || []).find((e) => e.id === response);
  return { correct: false, error_type: match ? match.error_type : 'E_unclassified' };
}
