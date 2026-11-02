import { EXT2_RENUMBER } from './ext2Renumber.js';
import { EXT1_Y12_RENUMBER } from './ext1Y12Renumber.js';
import { ADV_Y12_RENUMBER } from './advY12Renumber.js';

// Topics moved to another chapter id keep their own ids, but practice progress
// on each device is stored under `sapere:tp:{uid}:{chapterId}:{topicId}…`.
// Copy those keys to the new chapter once per device so progress follows.
export const MOVED_TOPICS = [
  // Year 7 Fractions split into part 1 / part 2 to match the textbook (2026-10-04).
  { from: 'y7-4', to: 'y7-4p2', topics: ['y7-4h', 'y7-4i', 'y7-4j', 'y7-4k', 'y7-4l'] },
];


const FLAG = 'sapere:topic-moves:v1';
// Courses re-laid out to a new textbook (Extension 2 in 2026-10, Extension 1 and Advanced Year 12 in 2026-11): each student's
// progress on a device follows its topic to the new id (see topicRenumber). Once per student per device, per course.
const RENUMBERS = [
  ['sapere:ext2-renumber:v1', EXT2_RENUMBER],
  ['sapere:ext1y12-renumber:v1', EXT1_Y12_RENUMBER],
  ['sapere:advy12-renumber:v1', ADV_Y12_RENUMBER],
];

function migrateRenumberedProgress(uid, storage) {
  let moved = 0;
  for (const [flag, renumber] of RENUMBERS) {
    const flagKey = `${flag}:${uid}`;
    if (storage.getItem(flagKey)) continue;
    const keys = [];
    for (let i = 0; i < storage.length; i += 1) keys.push(storage.key(i));
    const { remove, set } = renumber.planProgressMoves(uid, keys, (k) => storage.getItem(k));
    remove.forEach((k) => storage.removeItem(k));
    set.forEach(([k, v]) => storage.setItem(k, v));
    storage.setItem(flagKey, '1');
    moved += set.length;
  }
  return moved;
}

export function migrateMovedTopicProgress(uid, storage = globalThis.localStorage) {
  if (!uid || !storage) return 0;
  try {
    let copied = migrateRenumberedProgress(uid, storage);
    const flagKey = `${FLAG}:${uid}`;
    if (storage.getItem(flagKey)) return copied;
    const keys = [];
    for (let i = 0; i < storage.length; i += 1) keys.push(storage.key(i));
    for (const move of MOVED_TOPICS) {
      for (const topicId of move.topics) {
        const fromPrefix = `sapere:tp:${uid}:${move.from}:${topicId}`;
        for (const key of keys) {
          if (!key || !key.startsWith(fromPrefix)) continue;
          const rest = key.slice(fromPrefix.length);
          if (rest && !rest.startsWith(':')) continue; // y7-4h must not match y7-4hx
          const toKey = `sapere:tp:${uid}:${move.to}:${topicId}${rest}`;
          if (storage.getItem(toKey) == null) { storage.setItem(toKey, storage.getItem(key)); copied += 1; }
        }
      }
    }
    storage.setItem(flagKey, '1');
    return copied;
  } catch {
    return 0; // storage full / blocked — progress just starts fresh for those topics
  }
}
