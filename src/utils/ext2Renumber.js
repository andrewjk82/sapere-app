import { makeRenumber } from './topicRenumber.js';

// Extension 2 was re-laid out to match the 2026 textbook (CambridgeMATHS NSW Stage 6 Extension 2, Year 12):
// chapters were renumbered and some topics moved. Question ids did not change; the topic ids below did.
// Everything a student keeps on a device under an old topic id (practice progress, curriculum notes) follows
// the topic to its new id. `OLD_TO_NEW_TOPIC[oldId] = newId`; the identity entries are left out.
export const OLD_TO_NEW_TOPIC = {
  'y12e2-1G': 'y12e2-3A',
  'y12e2-1H': 'y12e2-1R',
  'y12e2-2B': 'y12e2-2C',
  'y12e2-2C': 'y12e2-2D',
  'y12e2-2D': 'y12e2-2E',
  'y12e2-2E': 'y12e2-2F',
  'y12e2-2F': 'y12e2-2G',
  'y12e2-2G': 'y12e2-2R',
  'y12e2-3A': 'y12e2-3B',
  'y12e2-3B': 'y12e2-3C',
  'y12e2-3C': 'y12e2-3D',
  'y12e2-3F': 'y12e2-3R',
  'y12e2-4A': 'y12e2-6A',
  'y12e2-4B': 'y12e2-6B',
  'y12e2-4C': 'y12e2-6C',
  'y12e2-4D': 'y12e2-6D',
  'y12e2-4E': 'y12e2-6E',
  'y12e2-4F': 'y12e2-6F',
  'y12e2-4G': 'y12e2-6G',
  'y12e2-4H': 'y12e2-6H',
  'y12e2-4I': 'y12e2-6I',
  'y12e2-4J': 'y12e2-6R',
  'y12e2-5A': 'y12e2-4X',
  'y12e2-5B': 'y12e2-4G',
  'y12e2-5C': 'y12e2-4F',
  'y12e2-5D': 'y12e2-4F',
  'y12e2-5E': 'y12e2-4G',
  'y12e2-5F': 'y12e2-4A',
  'y12e2-5G': 'y12e2-4D',
  'y12e2-5H': 'y12e2-4R',
  'y12e2-6A': 'y12e2-7C',
  'y12e2-6B': 'y12e2-7D',
  'y12e2-6C': 'y12e2-7E',
  'y12e2-6D': 'y12e2-7F',
  'y12e2-6E': 'y12e2-7G',
  'y12e2-6F': 'y12e2-7H',
  'y12e2-6G': 'y12e2-7J',
  'y12e2-6H': 'y12e2-7R',
};

export { chapterOfTopic } from './topicRenumber.js';

// Old chapter id → the new chapter(s) a student's assigned / completed chapter becomes.
export const OLD_TO_NEW_CHAPTER = { 'y12e2-4': ['y12e2-6'], 'y12e2-5': ['y12e2-4'], 'y12e2-6': ['y12e2-7'] };

// Topics that no longer exist in the book (Euler's exponential form): dropped.
const RETIRED = ['y12e2-3D', 'y12e2-3E'];

// What a student's assigned / completed ids become, and the once-per-device moves of practice progress and curriculum
// notes (see topicRenumber).
export const EXT2_RENUMBER = makeRenumber({ prefix: 'y12e2-', topicMap: OLD_TO_NEW_TOPIC, chapterMap: OLD_TO_NEW_CHAPTER, retired: RETIRED });
export const { migrateStudentIds, planProgressMoves, planNoteMoves } = EXT2_RENUMBER;
