/**
 * Past Paper Question Registry
 *
 * Add new past paper seed files here as they are seeded.
 * The generate-past-paper API imports from this single file.
 */

import { CARINGBAH_2020_QUESTIONS }      from './seedCaringbah2020Questions.js';
import { ABBOTSLEIGH_2020_QUESTIONS }    from './seedAbbotsleigh2020Questions.js';
import { ASCHAM_2020_QUESTIONS }         from './seedAscham2020Questions.js';
import { BARKER_2020_QUESTIONS }         from './seedBarker2020Questions.js';
import { BAULKHAM_2020_QUESTIONS }       from './seedBaulkham2020Questions.js';
import { BLACKTOWN_BOYS_2020_QUESTIONS } from './seedBlacktownBoys2020Questions.js';
import { CTHS_2020_QUESTIONS }           from './seedCherrybrookTech2020Questions.js';
import { CTHS_2020_SIMILAR_QUESTIONS }   from './seedCherrybrookTech2020SimilarQuestions.js';
import { CRANBROOK_2023_QUESTIONS }      from './seedCranbrook2023Questions.js';
import { DANEBANK_2020_QUESTIONS }       from './seedDanebank2020Questions.js';

// ─── Add new past paper imports above this line ───────────────────────────────

export const ALL_PAST_PAPER_QUESTIONS = [
  ...CARINGBAH_2020_QUESTIONS,
  ...ABBOTSLEIGH_2020_QUESTIONS,
  ...ASCHAM_2020_QUESTIONS,
  ...BARKER_2020_QUESTIONS,
  ...BAULKHAM_2020_QUESTIONS,
  ...BLACKTOWN_BOYS_2020_QUESTIONS,
  ...CTHS_2020_QUESTIONS,
  ...CTHS_2020_SIMILAR_QUESTIONS,
  ...CRANBROOK_2023_QUESTIONS,
  ...DANEBANK_2020_QUESTIONS,
  // ─── Add new past paper arrays above this line ────────────────────────────
];
