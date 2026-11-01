import { CURRICULUM_DATA } from '../constants/curriculumData.js';

// The light half of questionGenerator.js — kept separate so challengeUtils (on the
// login path) doesn't pull the whole ~250 KB generator into the main bundle.
// questionGenerator.js re-exports all of these.

export const DEFAULT_DIFFICULTY_MIX = {
  easy: 0.7,
  medium: 0.25,
  hard: 0.05,
};

export const QUESTION_BLUEPRINTS = Object.fromEntries(
  Object.entries(CURRICULUM_DATA).map(([year, data]) => {
    if (!Array.isArray(data)) return [year, {}];
    return [year, Object.fromEntries(data.map(chapter => [chapter.id, {
      title: chapter.title,
      topics: chapter.topics || [],
      types: [],
    }]))];
  })
);

export const getQuestionBlueprint = (year = 'Year 1', chapterId = 'y1-number') => (
  QUESTION_BLUEPRINTS[year]?.[chapterId] || null
);
