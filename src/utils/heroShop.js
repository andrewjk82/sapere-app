// Hero shop rules. Coins are separate from XP: everyone starts with START_COINS, Daily Bingo lines add heroCoins,
// purchases add heroSpent. XP and the leaderboard never change here.
import { OPT } from './pixelHero.js';

export const itemKey = (group, id) => `${group}:${id}`;
export const priceOf = (group, id) => OPT[group]?.find((o) => o[0] === id)?.[2] ?? 0;
export const isOwned = (profile, group, id) => priceOf(group, id) === 0 || (profile?.heroOwned || []).includes(itemKey(group, id));
export const START_COINS = 1000;
export const balanceOf = (profile) => Math.max(0, START_COINS + (Number(profile?.heroCoins) || 0) - (Number(profile?.heroSpent) || 0));
