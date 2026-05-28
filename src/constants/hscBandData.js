// NSW HSC Band cutoffs and scaling helpers.
// Band cutoffs = aligned HSC mark thresholds (fixed by NESA, do not change year to year).
export const BAND_CUTOFFS = {
  'Advanced':    { 6: 90, 5: 80, 4: 70, 3: 60, 2: 50 },
  'Standard 2':  { 6: 90, 5: 80, 4: 70, 3: 60, 2: 50 },
  'Standard 1':  { 5: 90, 4: 70, 3: 50, 2: 30 },
  'Extension 1': { E4: 90, E3: 75, E2: 50, E1: 25 },
  'Extension 2': { E4: 90, E3: 75, E2: 50, E1: 25 },
  'default':     { 6: 90, 5: 80, 4: 70, 3: 60, 2: 50 },
};

// Raw-to-aligned scaling curves (piecewise linear control points [rawPct, alignedMark]).
// Derived from multi-year NESA band boundary data (rawmarks.info, 2019–2025 averages).
// rawPct = raw exam score expressed as a percentage of total marks (0–100).
// Extension 1 raw is out of 70 — convert before passing: (rawMark / 70) * 100.
// Extension 2 raw is out of 100.
const SCALING_CURVES = {
  'Advanced': [
    [0,   0],
    [12,  50],   // Band 2 boundary
    [22,  60],   // Band 3 boundary
    [42,  70],   // Band 4 boundary
    [62,  80],   // Band 5 boundary
    [78,  90],   // Band 6 boundary  (2025 ≈ 77, 2024 ≈ 76, 2023 ≈ 79 → avg ~78)
    [100, 100],
  ],
  'Standard 2': [
    [0,   0],
    [15,  50],
    [32,  60],   // Band 3 boundary
    [52,  70],   // Band 4 boundary
    [70,  80],   // Band 5 boundary
    [88,  90],   // Band 6 boundary  (2022: 87, 2025: ~88 → avg ~88)
    [100, 100],
  ],
  // Extension 1 raw is out of 70; caller must normalise to 0-100 pct first.
  'Extension 1': [
    [0,   0],
    [13,  25],   // E1 boundary  (raw 9/70 = 12.9%)
    [24,  50],   // E2 boundary  (raw 17/70 = 24.3%)
    [56,  75],   // E3 boundary  (raw 39/70 = 55.7%, avg 2023–2025)
    [73,  90],   // E4 boundary  (raw 51/70 = 72.9%, avg 2023–2025)
    [100, 100],
  ],
  'Extension 2': [
    [0,   0],
    [20,  50],   // E1 boundary
    [35,  65],   // E2 boundary
    [50,  75],   // E3 boundary  (avg 2022–2023)
    [67,  90],   // E4 boundary  (avg 2022–2025)
    [100, 100],
  ],
};

// Piecewise linear interpolation over a set of [x, y] control points.
const piecewiseLinear = (points, x) => {
  const clamped = Math.max(points[0][0], Math.min(points[points.length - 1][0], x));
  for (let i = 1; i < points.length; i++) {
    const [x0, y0] = points[i - 1];
    const [x1, y1] = points[i];
    if (clamped <= x1) {
      const t = (clamped - x0) / (x1 - x0);
      return y0 + t * (y1 - y0);
    }
  }
  return points[points.length - 1][1];
};

/**
 * Convert a raw exam percentage to an estimated HSC aligned mark.
 * For Extension 1, pass (rawMark / 70 * 100) as rawPct.
 */
export const scaleRawToAligned = (rawPct, course = 'default') => {
  const curve = SCALING_CURVES[course];
  if (!curve) return rawPct; // no curve available → return as-is
  return Math.round(piecewiseLinear(curve, rawPct) * 10) / 10;
};

// School rank → estimated cohort average external HSC aligned score (%).
export const schoolRankToAvg = (rank) => {
  const r = Number(rank);
  if (!r || r <= 0) return null;
  if (r <= 10)  return 91;
  if (r <= 30)  return 87;
  if (r <= 60)  return 83;
  if (r <= 100) return 78;
  if (r <= 150) return 73;
  if (r <= 200) return 68;
  if (r <= 300) return 63;
  if (r <= 500) return 57;
  return 50;
};

const cohortSD = (avg) => {
  if (avg >= 85) return 7;
  if (avg >= 75) return 9;
  if (avg >= 65) return 11;
  return 12;
};

// Inverse normal CDF approximation (Beasley-Springer-Moro).
const invNorm = (p) => {
  const a = [0, -3.969683028665376e1, 2.209460984245205e2,
    -2.759285104469687e2, 1.383577518672690e2,
    -3.066479806614716e1, 2.506628277459239];
  const b = [-5.447609879822406e1, 1.615858368580409e2,
    -1.556989798598866e2, 6.680131188771972e1, -1.328068155288572e1];
  const c = [-7.784894002430293e-3, -3.223964580411365e-1,
    -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [7.784695709041462e-3, 3.224671290700398e-1,
    2.445134137142996, 3.754408661907416];
  const pLow = 0.02425, pHigh = 1 - pLow;
  let q, r;
  if (p < pLow) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) /
           ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
  }
  if (p <= pHigh) {
    q = p - 0.5; r = q*q;
    return (((((a[1]*r+a[2])*r+a[3])*r+a[4])*r+a[5])*r+a[6])*q /
           (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
  }
  q = Math.sqrt(-2 * Math.log(1 - p));
  return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) /
          ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
};

/**
 * Calculate projected HSC mark using NESA moderation logic.
 * pastPaperAvg is treated as a raw exam percentage and scaled to an aligned mark.
 *
 * @param {object} opts
 * @param {number} opts.schoolRank    - School's state rank for the subject
 * @param {number} opts.internalRank  - Student's rank within their school (1 = top)
 * @param {number} opts.internalTotal - Total students in the cohort
 * @param {number} opts.pastPaperAvg  - Student's average past paper % (raw, 0–100)
 * @param {string} opts.course        - Course key e.g. 'Advanced', 'Extension 1'
 */
export const calcProjectedMark = ({ schoolRank, internalRank, internalTotal, pastPaperAvg, course = 'default' }) => {
  const cohortAvg = schoolRankToAvg(schoolRank);
  if (!cohortAvg || !internalRank || !internalTotal || !pastPaperAvg) return null;

  // Percentile of student within school cohort (continuity correction)
  const percentile = 1 - ((internalRank - 0.5) / internalTotal);
  const clampedPct = Math.max(0.001, Math.min(0.999, percentile));

  // Where this percentile falls on cohort's external distribution (already in aligned scale)
  const sd = cohortSD(cohortAvg);
  const zScore = invNorm(clampedPct);
  const moderatedInternal = Math.min(100, Math.max(0, cohortAvg + zScore * sd));

  // Scale raw past paper % → estimated HSC aligned mark
  const externalEstimate = scaleRawToAligned(Math.min(100, Math.max(0, pastPaperAvg)), course);

  // NSW HSC: 50% internal (moderated) + 50% external
  const projectedMark = (moderatedInternal * 0.5) + (externalEstimate * 0.5);

  return {
    projectedMark: Math.round(projectedMark * 10) / 10,
    moderatedInternal: Math.round(moderatedInternal * 10) / 10,
    externalEstimate: Math.round(externalEstimate * 10) / 10,
    rawExternalPct: Math.round(pastPaperAvg * 10) / 10,
    cohortAvg,
    percentile: Math.round(percentile * 100),
  };
};

export const bandForMark = (mark, course = 'default') => {
  const cutoffs = BAND_CUTOFFS[course] || BAND_CUTOFFS['default'];
  const sorted = Object.entries(cutoffs).sort((a, b) => b[1] - a[1]);
  for (const [band, threshold] of sorted) {
    if (mark >= threshold) return band;
  }
  return 1;
};
