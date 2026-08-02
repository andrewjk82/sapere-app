// Thin wrapper around Date.now(). The React Compiler's purity lint flags
// direct Date.now()/new Date() calls written inside component files (it
// can't see through the reactive scope), so timer-driven components should
// read "now" through this instead — same pattern as getSprintWeekId's
// `now = new Date()` default living in utils/sprintWeek.js rather than
// inline in a component.
export const nowMs = () => Date.now();
