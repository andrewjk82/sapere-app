/**
 * Decide whether a pre-generated "next_prep" daily assignment may be used today.
 *
 * The server's users/{uid}/daily_assignments/next_prep doc is the source of
 * truth: whichever device uses it deletes it. A device's localStorage copy is
 * only trusted when it is the same prep (same version) the server still holds —
 * otherwise another device already used it. 2026-10 Jane report: a copy left on
 * one device since 10-21 was served on 10-24 after a second device had already
 * used it on 10-23, so she got yesterday's 15 questions again.
 *
 * serverReadFailed → we couldn't reach the server (offline); fall back to the
 * local copy so the student can still practise.
 *
 * Returns { prep, clearLocal }.
 */
export const pickPrepAssignment = ({ serverPrep, serverReadFailed = false, localPrep, previousAssignment }) => {
  let prep;
  let clearLocal = false;

  if (serverReadFailed) {
    prep = localPrep || null;
  } else {
    prep = serverPrep || null;
    if (localPrep && (!serverPrep || String(localPrep.version) !== String(serverPrep.version))) {
      clearLocal = true;
    }
  }

  if (prep && previousAssignment && sameQuestionSet(prep, previousAssignment)) {
    // Already used for the previous day — never serve it twice.
    return { prep: null, clearLocal: Boolean(localPrep) };
  }
  return { prep, clearLocal };
};

const idsOf = (a) => (Array.isArray(a?.questionIds) && a.questionIds.length > 0
  ? a.questionIds
  : (a?.questions || []).map((q) => q?.id)).filter(Boolean);

export const sameQuestionSet = (a, b) => {
  if (a?.generatedAt && b?.generatedAt && a.generatedAt === b.generatedAt) return true;
  const x = idsOf(a);
  const y = idsOf(b);
  if (x.length === 0 || x.length !== y.length) return false;
  const ys = new Set(y);
  return x.every((id) => ys.has(id));
};
