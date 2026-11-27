// Hero shop rules. Spending does NOT lower totalXP (the leaderboard keeps what was earned): spent XP is counted on its
// own, so a student can spend  totalXP − heroSpent.
import { OPT } from './pixelHero.js';

export const itemKey = (group, id) => `${group}:${id}`;
export const priceOf = (group, id) => OPT[group]?.find((o) => o[0] === id)?.[2] ?? 0;
export const isOwned = (profile, group, id) => priceOf(group, id) === 0 || (profile?.heroOwned || []).includes(itemKey(group, id));
export const balanceOf = (profile) => Math.max(0, (Number(profile?.totalXP) || 0) - (Number(profile?.heroSpent) || 0));
