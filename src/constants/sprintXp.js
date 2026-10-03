// Weekly sprint payout, per leaderboard: 1st / 2nd / 3rd, then every other
// participant. Used by the settlement job (api/_lib) and the leaderboard UI.
export const SPRINT_XP_TIERS = [10, 5, 2];
export const SPRINT_XP_PARTICIPATION = 1;

export const xpForRank = (rank) => SPRINT_XP_TIERS[rank - 1] ?? SPRINT_XP_PARTICIPATION;
