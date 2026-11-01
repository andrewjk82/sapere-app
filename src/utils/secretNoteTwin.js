import { generateCalculationQuestion } from '../services/calculationGenerator';
import { canTwin } from './secretNote';

// Split from secretNote.js: that module is on the login path (App, FlameBuddy), and this
// one import pulled the whole calculation generator into the main bundle.

// Generate a twin (same topic, fresh numbers). Returns null when not possible.
export function generateTwin(q) {
  if (canTwin(q)) {
    const twin = generateCalculationQuestion(q.topicId || 'calc-1-core');
    return { ...twin, _isTwin: true, _twinOf: q.id };
  }
  return null;
}
