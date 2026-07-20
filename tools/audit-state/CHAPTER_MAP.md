# Curriculum chapter/topic map — Year 1, 5-12 (Firestore-verified)

All counts below are the ACTUAL live Firestore counts (from `question_index`/`question_topic_index`), not seed-file lengths — seed files were found to be stale for 73/78 registered chapters (teacher edits, unsynced changes, etc.), so seed-file array length is NOT a reliable count. This map excludes the 196 `exam:` chapters (4,012 questions) — those are a separate, already-deprioritized project (task #5).

**Source key:** `[seed]` = registered in curriculumSeeds.js (has a local seed file, though its content may be stale vs Firestore — verify before trusting). `[orphan]` = exists only in Firestore, no seed file at all — read/write directly against Firestore like y7-4a did.

Empty chapters (question_index count=0) excluded entirely: y11a-13, y11e1-6/11/14/16, y12a-4/7, y12e1-5/8/10/11/12/13.

**Known data-quality flags** (not yet investigated): `y9-2` question_index has a stale/broken id; `y7-5` chapterTitle missing, sample topicTitle looks copy-pasted from y7-4h. `[orphan]` chapters have zero `question_topic_index` entries (never synced) — the one topic shown is a sample only, its count is actually the WHOLE chapter's total, and there are likely more undiscovered topics. First pass through an orphan chapter must read its real topic breakdown directly and update this file.

Use this as the daily coworker's traversal order. Mark each chapter `[ ]` -> `[x]` as its audit pass completes.

**Standing rule: skip empty topics/chapters (user decision, 2026-07-08).** Any
topic or chapter with 0 Firestore questions gets marked `[skip — empty]`, not
`[ ]`/`[x]` — there's nothing to convert, so it's neither pending nor done, just
irrelevant. A chapter counts as fully `[x]` done once every one of its
NON-empty topics is converted — empty topics don't block completion. Missing
content (a topic that should exist per the textbook but has zero Firestore
questions) is a different problem from MCQ conversion — don't try to author
brand-new questions to fill it, just skip and move on.

**⚠️ Year 5 and Year 6 are EXCLUDED from the MCQ conversion campaign (user decision,
2026-07-08).** Skip both sections entirely for now — do not convert or touch
anything under them. (They remain relevant for the other audit tasks #1-4 in
`PROGRESS.md`, which are a separate project from MCQ conversion.)

**Current status (2026-07-08):** User has already manually completed MCQ conversion
through Ch1/Ch2/Ch3 (or equivalent) for every year level. Marked `[x]` below:
y7-1/2/3, y8-1/2/3, y9-1/3, y10-1/2/3, y11a-1/2/3, y11e1-1, y12a-1/3. Year 5 and
Year 6 are excluded from this campaign entirely (see ⛔ markers), so their Ch1-3
equivalent status doesn't matter here. Year 11e1 and Year 12a have no separate
Ch2 chapter with real curriculum content (Year 11e1 only has Ch1 and Ch4 at all;
Year 12e1 has no real content anywhere, all 0q). Year 12e1 needs nothing marked.

**Two unresolved cases — do not touch until the user confirms:**
- **`y9-2`** (Year 9's presumed Ch2) — exists in Firestore (37q) but is an orphan
  with a broken/stale question_index id, title unknown. Likely real Ch2 content,
  not yet confirmed done or not.
- **`y12a-2`** — exists (2q) but titled "Ascham 2020 HSC Trial", i.e. stray trial-exam
  questions, not actual Year 12a Chapter 2 curriculum content. Do not mark as
  "Ch2 done" — it almost certainly isn't the real chapter 2.

## Traversal order: chapter-number rounds across years (user decision, 2026-07-08)

**Changed from year-major to chapter-major.** Instead of finishing all of Year
7's chapters before moving to Year 8, process one "round" at a time: every
year's Chapter N, in year order (7 → 8 → 9 → 10 → 11a → 11e1 → 12a → 12e1,
always skipping ⛔ Year 5/6), before moving to Chapter N+1.

**Pacing (updated 2026-07-08 — user explicitly chose to batch, not spread out):**
one full ROUND (all chapters listed for that round) gets done in a single run,
not one chapter per day. Token/session cost is real and scales with work done,
but the user decided that's an acceptable tradeoff for finishing a round in one
sitting. Only stop mid-round if you genuinely can't finish carefully (quality
over speed still applies within the run) — if that happens, leave clear notes
per the "Unit of work" section so the next run resumes without redoing work.

**Round 4 (current round — Ch1-3 already done manually before this campaign started):**

1. `y7-4` — Chapter 4: Fractions — 153q+ (orphan, likely more undiscovered topics beyond known `y7-4h`) — **← START HERE, next run**
2. `y8-4` — Chapter 4: Integers — 50q
3. `y9-4` — Chapter 4: Factorisation — 26q
4. `y10-4` — Chapter 4: Lines and linear equations — 147q
5. `y11a-4` — Chapter 4: Equations and inequations — 204q
6. `y11e1-4` — Chapter 4: Equations and inequations — 107q
7. ~~`y12a-4`~~ — SKIP, 0q, empty (confirmed)
8. ~~`y12e1-4`~~ — SKIP, doesn't exist in the tracked chapter list (no content)

Round 4 is done once all 6 real chapters above are `[x]`. **After round 4
finishes, start round 5** (every year's Chapter 5, same order, skipping any
that don't exist or are empty) — find them by grepping this file for
`**yXX-5**` entries, same way round 4's list above was built. Continue this
pattern for round 6, 7, etc. Not every year has every chapter number (e.g.
Year 7 has no Chapter 9 or 21) — skip years that don't have that number at all
for a given round, same as skipping empty chapters.

**Current status (2026-07-08): next chapter is `y7-4`, round 4, item 1 of 6.**

## Year 1

- [ ] **y1-number** [orphan] — Number (1 topics, 1q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 1q

## Year 5 — ⛔ EXCLUDED from MCQ conversion, do not process

- [ ] **y5-ar** [seed] — Additive Relations (A) (4 topics, 238q)
  - [ ] y5-ar-1 (MA3-AR-01) — Efficient mental and written strategies — 83q
  - [ ] y5-ar-2 (MA3-AR-01) — Reasonableness of solutions — 25q
  - [ ] y5-ar-3 (MA3-AR-01) — Add and subtract decimals — 15q
  - [ ] y5-ar-4 (MA3-AR-01) — Budgeting — 32q
- [ ] **y5-mr** [seed] — Multiplicative Relations (A) (1 topics, 133q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 133q
- [ ] **y5-rn** [seed] — Represents Numbers (A) (4 topics, 235q)
  - [ ] y5-rn-1 (MA3-RN-01) — Numbers to millions — 123q
  - [ ] y5-rn-2 (MA3-RN-02) — Decimals to thousandths — 67q
  - [ ] y5-rn-4 (MA3-RN-01) — Percentages — 32q
  - [ ] y5-rn-5 (MA3-RN-01) — Percentage discounts — 12q
- [ ] **y5-rqf** [seed] — Rational Quantities / Fractions (A) (1 topics, 77q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 77q

## Year 6 — ⛔ EXCLUDED from MCQ conversion, do not process

- [ ] **y6-ar** [orphan] — Chapter 4: Additive Relations (B) (1 topics, 34q)
  - [ ] y6-ar-2 (MA3-AR-01) — Add and subtract decimals — 34q
- [ ] **y6-frac** [orphan] — Chapter 2: Fractions (1 topics, 21q)
  - [ ] y6-frac-1 (FRAC1) — Basic Fractions — 21q
- [ ] **y6-mr** [orphan] — Chapter 5: Multiplicative Relations (B) (1 topics, 46q)
  - [ ] y6-mr-2 (MA3-MR-01) — Multiply and divide decimals — 46q
- [ ] **y6-rn** [orphan] — Chapter 3: Represents Numbers (B) (1 topics, 92q)
  - [ ] y6-rn-2 (MA3-RN-01) — Fractions, decimals, percentages — 92q
- [ ] **y6-wn** [orphan] — Chapter 1: Whole Numbers (Y6) (1 topics, 239q)
  - [ ] y6-wn-1 (WN1) — Word Problems and Averages — 239q

## Year 7

- [x] **y7-1** [seed] — Chapter 1: Whole numbers (13 topics, 1644q)
  - [x] y7-1a (1A) — The number line — 100q
  - [x] y7-1b (1B) — Addition — 141q
  - [x] y7-1c (1C) — The standard addition algorithm — 129q
  - [x] y7-1d (1D) — Subtraction — 135q
  - [x] y7-1e (1E) — Multiplication — 124q
  - [x] y7-1f (1F) — Mental strategies and distributive law — 120q
  - [x] y7-1g (1G) — Place value — 23q
  - [x] y7-1h (1H) — The standard multiplication algorithms — 24q
  - [x] y7-1i (1I) — Division — 36q
  - [x] y7-1j (1J) — The short division algorithm — 27q
  - [x] y7-1k (1K) — The long division algorithm — 15q
  - [x] y7-1l (1L) — Order of operations — 54q
  - [x] y7-1m (1M) — Revision — 24q
- [x] **y7-10** [orphan] — Chapter 10: Integers (1 topics, 72q)
  - [ ] y7-10a (10A) — Negative integers — 72q
- [x] **y7-11** [orphan] — Chapter 11: Linear equations (1 topics, 77q)
  - [ ] y7-11a (11A) — Substitution with integers — 77q
- [x] **y7-12** [orphan] — Triangles and constructions (1 topics, 59q)
  - [ ] y7-12a (12A) — Angles in triangles — 59q
- [x] **y7-13** [orphan] — Chapter 13: Negative fractions and decimals (1 topics, 67q)
  - [ ] y7-13a (13A) — Addition and subtraction of negative fractions — 67q
- [x] **y7-14** [orphan] — Chapter 14: Percentages and Ratios (1 topics, 80q)
  - [ ] y7-14a (14A) — Percentages, fractions and decimals — 80q
- [x] **y7-15** [orphan] — Chapter 15: Equations (1 topics, 36q)
  - [ ] y7-15a (15A) — An introduction to equations — 36q
- [x] **y7-16** [orphan] — Chapter 16: Probability (1 topics, 8q)
  - [ ] y7-16a (16A) — An introduction to probability — 8q
- [x] **y7-17** [orphan] — Chapter 17: Transformations and Symmetry (1 topics, 12q)
  - [ ] y7-17a (17A) — Translations — 12q
- [x] **y7-18** [orphan] — Chapter 18: Statistics and Graphs (1 topics, 4q)
  - [ ] y7-18a (18A) — Reading tables — 4q
- [x] **y7-19** [orphan] — Chapter 19: Numerical Data (1 topics, 9q)
  - [ ] y7-19a (19A) — Data and dot plots — 9q
- [x] **y7-2** [seed] — Chapter 2: Factors, multiples, primes and divisibility (9 topics, 419q)
  - [x] y7-2b (2B) — Odd and even numbers — 27q
  - [x] y7-2c (2C) — Prime and composite numbers — 16q
  - [x] y7-2d (2D) — Powers of numbers — 41q
  - [x] y7-2e (2E) — Using mental strategies to multiply and divide — 29q
  - [x] y7-2f (2F) — Using powers in factorisation — 15q
  - [x] y7-2g (2G) — Squares and square roots — 28q
  - [x] y7-2h (2H) — Lowest common multiple and highest common factor — 25q
  - [x] y7-2i (2I) — Divisibility tests — 29q
  - [x] y7-2j (2J) — Revision — 129q
- [x] **y7-20** [orphan] — Chapter 20: Three-dimensional solids (1 topics, 12q)
  - [ ] y7-20a (20A) — Polyhedra — 12q
- [x] **y7-22** [orphan] — Sets and Venn diagrams (1 topics, 7q)
  - [ ] y7-22a (22A) — Describing and naming sets — 7q
- [x] **y7-23** [seed] — Chapter 23: Algebra (9 topics, 101q)
  - [ ] y7-23a (23A) — Algebraic expressions — 25q
  - [ ] y7-23b (23B) — Like terms and unlike terms — 37q
  - [ ] y7-23c (23C) — Simplifying algebraic expressions — 62q
  - [ ] y7-23d (23D) — Collecting like terms — 44q
  - [ ] y7-23e (23E) — Writing algebraic expressions — 53q
  - [ ] y7-23f (23F) — Substitution — 45q
  - [ ] y7-23h (23H) — Multiplying, dividing and expanding — 50q
  - [ ] y7-23i (23I) — Applying algebra — 18q
  - [ ] y7-23j (23J) — Problem solving with algebra — 30q
- [x] **y7-3** [seed] — Chapter 3: An introduction to algebra (7 topics, 332q)
  - [x] y7-3b (3B) — Algebraic notation — 51q
  - [x] y7-3c (3C) — Substitution — 56q
  - [x] y7-3d (3D) — Adding and subtracting like terms — 50q
  - [x] y7-3e (3E) — Algebra with brackets — 40q
  - [x] y7-3f (3F) — Multiplying algebraic terms — 32q
  - [x] y7-3g (3G) — Describing arrays, areas and number patterns — 36q
  - [x] y7-3h (3H) — Chapter review — 93q
- [x] **y7-4** [orphan] — Chapter 4: Fractions (11 topics, 158q — real breakdown confirmed 2026-07-09 via chapterId-scoped query, prior "1 topic" entry was stale/incomplete). 153/158 already `multiple_choice`. Remaining 5 are `type: 'interactive_grid'` (tap-to-shade grid UI, e.g. doc `4MNScVMvZwMlJoWPZXtb`, all in y7-4a) — NOT simple text questions, converting them to 4-option MCQ would be a UI redesign, not a content transform. Flagged for human review, left untouched. Chapter counts as done — no other convertible-scope questions remain.
  - [x] y7-4a (4A) — What is a fraction? — 35q (30 MC + 5 interactive_grid, flagged)
  - [x] y7-4b — 25q (all MC)
  - [x] y7-4c — 6q (all MC)
  - [x] y7-4d — 12q (all MC)
  - [x] y7-4e — 27q (all MC)
  - [x] y7-4f — 5q (all MC)
  - [x] y7-4h (4H) — Multiplication of fractions — 17q (all MC)
  - [x] y7-4i — 9q (all MC)
  - [x] y7-4j — 6q (all MC)
  - [x] y7-4k — 5q (all MC)
  - [x] y7-4l — 11q (all MC)
- [ ] **y7-5** [orphan] — (title unknown) (1 topics, 52q)
  - [ ] y7-5a (5A) — Multiplication of fractions — 52q
- [x] **y7-6** [seed] — Chapter 6: Algebra with fractions (4 topics, 203q)
  - [ ] y7-6a (6A) — Division in algebra — 25q
  - [ ] y7-6b (6B) — Multiplication and division in algebra — 70q
  - [ ] y7-6c (6C) — Dividing and cancelling — 50q
  - [ ] y7-6d (6D) — Revision — 61q
- [x] **y7-7** [orphan] — Chapter 7: Decimals (1 topics, 173q)
  - [ ] y7-7b (7B) — Converting decimals to fractions and fractions to decimals — 173q
- [x] **y7-8** [orphan] — Chapter 8: Measurement (1 topics, 106q)
  - [ ] y7-8a (8A) — Units of measurement — 106q

## Year 8

- [x] **y8-1** [seed] — Chapter 1: Whole numbers (1 topics, 229q)
  - [x] y8-1c (1C) — Problem solving — 10q
- [ ] **y8-10** [seed] — Chapter 10: Rates and ratios (2 topics, 40q)
  - [ ] y8-10a (10A) — Review of the unitary method — 29q
  - [ ] y8-10G (10G) — Review of rates and ratios — 41q
- [ ] **y8-11** [seed] — Chapter 11: Algebra - part 2 (2 topics, 42q)
  - [ ] y8-11a (11A) — Expanding brackets and collecting like terms — 53q
  - [ ] y8-11e (11E) — Review — 45q
- [ ] **y8-12** [seed] — Chapter 12: Congruent triangles (2 topics, 25q)
  - [ ] y8-12a (12A) — Congruence of figures in the plane — 23q
  - [ ] y8-12g (12G) — Review — 29q
- [ ] **y8-13** [seed] — Chapter 13: Congruence and special quadrilaterals (2 topics, 22q)
  - [ ] y8-13a (13A) — Parallelograms and their properties — 22q
  - [ ] y8-13d (13D) — Review — 33q
- [ ] **y8-14** [seed] — Chapter 14: Circles (2 topics, 21q)
  - [ ] y8-14a (14A) — Features of the circle — 12q
  - [ ] y8-14e (14E) — Review — 16q
- [ ] **y8-15** [seed] — Chapter 15: Areas, volumes and time (2 topics, 37q)
  - [ ] y8-15a (15A) — Review of area and length — 8q
  - [ ] y8-15i (15I) — Review — 27q
- [ ] **y8-16** [seed] — Chapter 16: Probability (2 topics, 44q)
  - [ ] y8-16a (16A) — An introduction to probability — 27q
  - [ ] y8-16e (16E) — Review — 23q
- [ ] **y8-17** [seed] — Chapter 17: Formulas and factorisation (2 topics, 59q)
  - [ ] y8-17a (17A) — Formulas — 45q
  - [ ] y8-17e (17E) — Review — 59q
- [ ] **y8-18** [seed] — Chapter 18: Graphing straight lines (2 topics, 6q)
  - [ ] y8-18a (18A) — The Cartesian plane — 10q
  - [ ] y8-18i (18I) — Review — 34q
- [ ] **y8-19** [seed] — Chapter 19: Statistics (1 topics, 12q)
  - [ ] y8-19a (19A) — Comparing means and medians — 15q
- [x] **y8-2** [seed] — Chapter 2: Fractions and decimals (1 topics, 187q)
  - [x] y8-2h (2H) — Review of fractions and decimals — 36q
- [x] **y8-3** [seed] — Chapter 3: HCF and LCM (2 topics, 119q)
  - [x] y8-3a (3A) — HCF and LCM — 61q
  - [x] y8-3f (3F) — Review of factors and indices — 61q
- [ ] **y8-4** [seed] — Chapter 4: Integers (2 topics, 50q — confirmed 2026-07-09: y8-4a=27q [23 short_answer in-scope, 4 teacher_review/manualGrading], y8-4h=23q [22 short_answer in-scope, 1 teacher_review]). In-scope for MCQ conversion: 45.
  - [ ] y8-4a (4A) — Integers — 27q (23 in-scope)
  - [ ] y8-4h (4H) — Review of negative numbers — 23q (22 in-scope)
- [ ] **y8-5** [seed] — Chapter 5: Review of geometry (3 topics, 47q)
  - [ ] y8-5a (5A) — Angles — 25q
  - [ ] y8-5h (5H) — Review of geometry — 24q
  - [ ] y8-5i (5I) — Geometry challenge — 15q
- [ ] **y8-6** [seed] — Chapter 6: Substitution (2 topics, 125q)
  - [ ] y8-6a (6A) — Substitution — 59q
  - [ ] y8-6h (6H) — Review of algebra — 66q
- [ ] **y8-7** [seed] — Chapter 7: Percentages (2 topics, 153q)
  - [ ] y8-7a (7A) — Percentages — 99q
  - [ ] y8-7i (7I) — Review of percentages — 54q
- [ ] **y8-8** [seed] — Chapter 8: Pythagoras' theorem (1 topics, 15q)
  - [ ] y8-8d (8D) — Review of Pythagoras' theorem — 17q
- [ ] **y8-9** [seed] — Chapter 9: Pythagoras Theorem (1 topics, 65q)
  - [ ] y8-9a (9A) — Pythagoras theorem — 65q

## Year 9

- [x] **y9-1** [seed] — Chapter 1: Algebra (3 topics, 1000q)
  - [x] y9-1a (1A) — Substitution — 154q
  - [x] y9-1b (1B) — Like terms — 211q
  - [x] y9-1c (1C) — Multiplication and division — 179q
- [ ] **y9-11** [seed] — Chapter 11: Coordinate geometry (9 topics, 227q)
  - [ ] y9-11a (11A) — Distance between two points — 30q
  - [ ] y9-11b (11B) — The midpoint of an interval — 28q
  - [ ] y9-11c (11C) — The gradient of a line — 28q
  - [ ] y9-11d (11D) — The equation of a straight line — 58q
  - [ ] y9-11e (11E) — Graphing straight lines — 45q
  - [ ] y9-11f (11F) — The equation of a line using the gradient and a point — 25q
  - [ ] y9-11g (11G) — Parallel and perpendicular straight lines — 25q
  - [ ] y9-11h (11H) — The circle — 62q
  - [ ] y9-11i (11I) — Challenge exercise — 10q
- [ ] **y9-14** [seed] — Chapter 14: Simultaneous linear equations (7 topics, 280q)
  - [ ] y9-14a (14A) — Solving simultaneous equations by drawing graphs — 29q
  - [ ] y9-14b (14B) — Substitution — 33q
  - [ ] y9-14c (14C) — Elimination — 62q
  - [ ] y9-14d (14D) — Word Problems — 29q
  - [ ] y9-14e (14E) — Geometry and simultaneous equations — 28q
  - [ ] y9-14f (14F) — Families of straight lines — 19q
  - [ ] y9-14g (14G) — Revision — 81q
- [ ] **y9-16** [seed] — Chapter 16: Measurement—areas, volumes and time (5 topics, 219q)
  - [ ] y9-16a (16A) — Review of area — 43q
  - [ ] y9-16d (16D) — Volumes — 35q
  - [ ] y9-16e (16E) — Conversion of units — 41q
  - [ ] y9-16f (16F) — Small and large units of measurement — 23q
  - [ ] y9-16g (16G) — Revision — 41q
- [x] **y9-2** [orphan] — Chapter 2: Pythagoras' theorem and surds (10 topics per app UI, confirmed by user screenshot 2026-07-08 — question_index total was 37q across the whole chapter, suspiciously low for 10 topics; per-topic counts below are unconfirmed, not yet read from Firestore)
  - [ ] y9-2a (2A) — Review of Pythagoras' theorem and applications — count unknown
  - [ ] y9-2b (2B) — Simplifying surds — count unknown
  - [ ] y9-2c (2C) — Addition and subtraction of surds — count unknown
  - [ ] y9-2d (2D) — Multiplication and division of surds — count unknown
  - [ ] y9-2e (2E) — Special products — count unknown
  - [ ] y9-2f (2F) — Rationalising the denominator — count unknown
  - [ ] y9-2g (2G) — Applications of Pythagoras' theorem in three dimensions — count unknown
  - [ ] y9-2h (2H) — Binomial denominators — count unknown
  - [ ] y9-2i (2I) — Irrational numbers and surds — count unknown
  - [ ] y9-2j (2J) — Revision — count unknown
- [x] **y9-3** [seed] — Chapter 3: Consumer arithmetic (1 topics, 98q)
  - [x] y9-3a (3A) — Review of percentages — 98q
- [ ] **y9-4** [seed] — Chapter 4: Factorisation (1 topics, 26q — confirmed 2026-07-09, real Firestore count is 26 not 82; all 26 are `short_answer`, in-scope, no teacher_review/manualGrading/teacher-origin)
  - [ ] y9-4a (4A) — Factorisation — 26q
- [ ] **y9-5** [seed] — Chapter 5: Linear equations and inequalities (9 topics, 359q)
  - [ ] y9-5a (5A) — Expressions — 19q
  - [ ] y9-5b (5B) — Solving simple linear equations — 54q
  - [ ] y9-5c (5C) — Equations with brackets — 35q
  - [ ] y9-5d (5D) — Linear equations involving fractions — 79q
  - [ ] y9-5e (5E) — Using linear equations to solve problems — 51q
  - [ ] y9-5f (5F) — Literal equations — 22q
  - [ ] y9-5g (5G) — Inequalities — 36q
  - [ ] y9-5h (5H) — Solving linear inequalities — 65q
  - [ ] y9-5i (5I) — Revision — 9q
- [ ] **y9-6** [seed] — Chapter 6: Formulas (1 topics, 47q)
  - [ ] y9-6a (6A) — Formulas — 61q
- [ ] **y9-7** [seed] — Chapter 7: Congruence and special quadrilaterals (1 topics, 76q)
  - [ ] y9-7a (7A) — Review of angles — 73q
- [ ] **y9-8** [seed] — Chapter 8: Index laws (1 topics, 165q)
  - [ ] y9-8a (8A) — Index laws — 165q

## Year 10

- [x] **y10-1** [seed] — Chapter 1: Consumer arithmetic (6 topics, 953q)
  - [x] y10-1a (1A) — Review of percentage — 206q
  - [x] y10-1b (1B) — Percentage increase and decrease — 169q
  - [x] y10-1c (1C) — Repeated increases and decreases — 137q
  - [x] y10-1d (1D) — Compound interest — 145q
  - [x] y10-1e (1E) — Compound depreciation — 134q
  - [x] y10-1f (1F) — Revision — 128q
- [ ] **y10-11** [seed] — Chapter 11: Circles, hyperbolas and simultaneous equations (5 topics, 208q)
  - [ ] y10-11a (11A) — Cartesian equation of a circle — 42q
  - [ ] y10-11b (11B) — The rectangular hyperbola — 57q
  - [ ] y10-11c (11C) — Simultaneous equations — 36q
  - [ ] y10-11d (11D) — Regions of the plane — 45q
  - [ ] y10-11e (11E) — Revision — 54q
- [ ] **y10-12** [seed] — Chapter 12: Further trigonometry (10 topics, 96q)
  - [ ] y10-12a (12A) — Review of the basic trigonometric ratios — 28q
  - [ ] y10-12b (12B) — Exact trigonometric ratios — 20q
  - [ ] y10-12c (12C) — 3D Trigonometry — 33q
  - [ ] y10-12c-app (12C(Apps)) — Applications of Trigonometry — 7q
  - [ ] y10-12d (12D) — The Sine Rule — 16q
  - [ ] y10-12e (12E) — Trigonometric ratios of obtuse angles — 28q
  - [ ] y10-12f (12F) — The Cosine Rule — 12q
  - [ ] y10-12g (12G) — Finding angles using the cosine rule — 12q
  - [ ] y10-12h (12H) — Area of a triangle — 21q
  - [ ] y10-12i (12I) — Revision: Trigonometry — 24q
- [ ] **y10-13** [seed] — Chapter 13: Circle geometry (1 topics, 5q)
  - [ ] y10-13a (13A) — Angles at the centre and the circumference — 36q
- [ ] **y10-14** [seed] — Chapter 14: Logarithms (5 topics, 200q)
  - [ ] y10-14a (14A) — Logarithm rules — 84q
  - [ ] y10-14b (14B) — Change of base — 20q
  - [ ] y10-14c (14C) — Graphs of exponential and logarithm functions — 14q
  - [ ] y10-14d (14D) — Applications to science, population growth and finance — 11q
  - [ ] y10-14e (14E) — Revision — 65q
- [ ] **y10-15** [seed] — Chapter 15: Probability (5 topics, 106q)
  - [ ] y10-15a (15A) — Review of probability — 12q
  - [ ] y10-15b (15B) — The complement, union and intersection — 45q
  - [ ] y10-15c (15C) — Conditional probability — 12q
  - [ ] y10-15d (15D) — Independent events — 6q
  - [ ] y10-15e (15E) — Sampling with replacement and without replacement — 45q
- [ ] **y10-16** [seed] — Chapter 16: Direct and inverse proportion (4 topics, 92q)
  - [ ] y10-16a (16A) — Direct proportion — 28q
  - [ ] y10-16b (16B) — Inverse proportion — 23q
  - [ ] y10-16c (16C) — Proportionality in several variables — 18q
  - [ ] y10-16d (16D) — Revision — 28q
- [x] **y10-2** [seed] — Chapter 2: Review of surds (7 topics, 556q)
  - [x] y10-2a (2A) — Irrational numbers and surds — 86q
  - [x] y10-2b (2B) — Addition and subtraction of surds — 57q
  - [x] y10-2c (2C) — Multiplication and division of surds — 145q
  - [x] y10-2d (2D) — Special products — 41q
  - [x] y10-2e (2E) — Rationalising denominators — 77q
  - [x] y10-2f (2F) — Revision — 116q
  - [x] y10-2g (2G) — Challenge exercise — 32q
- [x] **y10-3** [seed] — Chapter 3: Algebra review (1 topics, 368q)
  - [x] y10-3j (3J) — Revision — 117q
- [ ] **y10-4** [seed] — Chapter 4: Lines and linear equations (7 topics, 147q — real breakdown confirmed 2026-07-09, prior "1 topic/55q" entry was stale). 76 already `multiple_choice`. 8 docs are compound multi-part (`subQuestions` array, e.g. doc `L78zWhgSGVV9J9H7fdnn` in y10-4b — has its own nested answer per sub-part, doesn't map to a single 4-option MCQ) — flagged for human review, skip. 8 `teacher_review`/9 `requiresManualGrading` skip per scope. In-scope for conversion: 55 (incl. 2 docs with missing `topicId` field — left as-is, not fabricated).
  - [ ] y10-4a (4A) — 14q (all MC)
  - [ ] y10-4b (4B) — Collinear points — 13q (11 MC, 2 subQuestions flagged)
  - [ ] y10-4c (4C) — 20q (17 MC, 3 subQuestions flagged)
  - [ ] y10-4d (4D) — 15q (9 MC, 6 in-scope)
  - [ ] y10-4e (4E) — 14q (10 MC, 4 in-scope)
  - [ ] y10-4f (4F) — 14q (11 MC, 3 in-scope)
  - [ ] y10-4g (4G) — Revision — 51q (40 in-scope, 8 teacher_review, 3 subQuestions flagged)
  - [ ] (2 docs with missing topicId, 4 MC + 2 in-scope)
- [ ] **y10-5** [seed] — Chapter 5: Quadratic equations (2 topics, 138q)
  - [ ] y10-5a (5A) — Solution of quadratic equations — 75q live (index says 79, stale by a few) — **15/75 converted to MCQ as a manual test run (2026-07-08), 60 remain: q2d onward through q3b+ — see `fix-y10-5-log.json`.** Found a separate content bug in `y10-5a-q2f` (question shows coefficient 1/1, should be 1/3 to match its own answer of n=1/3) — not yet fixed, flagged for next pass.
  - [ ] y10-5g (5G) — Revision — 58q
- [ ] **y10-6** [seed] — Chapter 6: Surface area and volume (2 topics, 35q)
  - [ ] y10-6a (6A) — Review of prisms and cylinders — 23q
  - [ ] y10-6k (6K) — Revision — 10q
- [ ] **y10-7** [seed] — Chapter 7: The parabola (2 topics, 74q)
  - [ ] y10-7a (7A) — Parabolas congruent to y = x^2 — 54q
  - [ ] y10-7h (7H) — Revision — 28q
- [ ] **y10-8** [seed] — Chapter 8: Review of congruence and similarity (2 topics, 43q)
  - [ ] y10-8a (8A) — Review of triangles — 25q
  - [ ] y10-8e (8E) — Revision — 20q
- [ ] **y10-9** [seed] — Chapter 9: Indices, Exponentials and Logarithms (1 topics, 94q)
  - [ ] y10-9a (9A) — Review of powers and integer indices — 95q

## Year 11a

- [x] **y11a-1** [seed] — Chapter 1: Algebra review (5 topics, 791q)
  - [x] y11a-1B (1B) — Factoring — 161q
  - [x] y11a-1c (1C) — Algebraic fractions — 119q
  - [x] y11a-1D (1D) — Solving quadratic equations — 118q
  - [x] y11a-1E (1E) — Solving simultaneous equations — 278q
  - [x] y11a-1F (1F) — Revision — 42q
- [ ] **y11a-11** [orphan] — Chapter 11: Radian measure of angles (1 topics, 96q)
  - [ ] y11a-11A (11A) — Radian measure of angle size — 96q
- [ ] **y11a-12** [orphan] — Chapter 12: Probability (1 topics, 19q)
  - [ ] y11a-12A (12A) — Sets and Venn diagrams — 19q
- [ ] **y11a-13** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [x] **y11a-2** [seed] — Chapter 2: Numbers and surds (4 topics, 242q)
  - [x] y11a-2B (2B) — Surds and their arithmetic — 78q
  - [x] y11a-2C (2C) — Further simplification of surds — 24q
  - [x] y11a-2D (2D) — Rationalising the denominator — 62q
  - [x] y11a-2E (2E) — Revision — 76q
- [x] **y11a-3** [seed] — Chapter 3: Functions and graphs (9 topics, 364q)
  - [x] y11a-3-3j (3J) — Revision — 19q
  - [x] y11a-3B (3B) — Functions, relations, and graphs — 168q
  - [x] y11a-3C (3C) — Review of linear graphs — 59q
  - [x] y11a-3D (3D) — Quadratic functions — factoring and the graph — 52q
  - [x] y11a-3E (3E) — Completing the square and the graph — 35q
  - [x] y11a-3F (3F) — The quadratic formulae and the graph — 35q
  - [x] y11a-3G (3G) — Powers, cubics, and circles — 42q
  - [x] y11a-3H (3H) — Two graphs that have asymptotes — 18q
  - [x] y11a-3I (3I) — Direct and inverse variation — 18q
- [ ] **y11a-4** [seed] — Chapter 4: Equations and inequations (real topic ids are y11a-4A/4C/4D/4E — confirmed 2026-07-09, 204q total, prior 4B/4C/4D/4E label list was stale). 89 already `multiple_choice`. 19 docs are compound multi-part (`subQuestions`) — flagged for review, skip. 8 `teacher_review`/7 `requiresManualGrading` skip per scope. In-scope: 88 (incl. 1 doc with missing topicId).
  - [ ] y11a-4A — 102q (87 MC, 15 in-scope)
  - [ ] y11a-4C — 46q (39 in-scope, 7 teacher_review)
  - [ ] y11a-4D — 20q (10 in-scope, 10 teacher_review)
  - [ ] y11a-4E — 33q (23 in-scope, 10 teacher_review)
  - [ ] (1 doc missing topicId, in-scope)
- [ ] **y11a-5** [seed] — Chapter 5: Transformations and symmetry (3 topics, 369q)
  - [ ] y11a-5G (5G) — Combining transformations — 23q
  - [ ] y11a-5H (5H) — Continuity and piecewise-defined functions — 33q
  - [ ] y11a-5I (5I) — Revision — 92q
- [ ] **y11a-6** [seed] — Chapter 6: Trigonometry (10 topics, 586q)
  - [ ] y11a-6B (6B) — Problems involving right-angled triangles — 21q
  - [ ] y11a-6C (6C) — Trigonometric functions of a general angle — 42q
  - [ ] y11a-6D (6D) — Quadrant, sign, and related acute angle — 138q
  - [ ] y11a-6E (6E) — Given one trigonometric function, find another — 73q
  - [ ] y11a-6F (6F) — Trigonometric identities — 63q
  - [ ] y11a-6G (6G) — Trigonometric equations — 48q
  - [ ] y11a-6H (6H) — The sine rule and the area formula — 38q
  - [ ] y11a-6I (6I) — The cosine rule — 30q
  - [ ] y11a-6J (6J) — Problems involving general triangles — 31q
  - [ ] y11a-6k (6K) — Revision — 49q
- [ ] **y11a-7** [seed] — Chapter 7: Lines in the coordinate plane (3 topics, 261q)
  - [ ] y11a-7B (7B) — Gradients of line segments and lines — 78q
  - [ ] y11a-7C (7C) — Equations of lines — 82q
  - [ ] y11a-7D (7D) — Further equations of lines — 86q
- [ ] **y11a-8** [orphan] — Chapter 8: Exponential and logarithmic functions (1 topics, 130q)
  - [ ] y11a-8A (8A) — Indices — 130q
- [ ] **y11a-9** [orphan] — Chapter 9: Differentiation (1 topics, 16q)
  - [ ] y11a-9A (9A) — Tangents and the derivative — 16q

## Year 11e1

- [x] **y11e1-1** [seed] — Chapter 1: Algebra review (4 topics, 222q)
  - [x] y11e1-1A (1A) — Algebra review — 92q
  - [x] y11e1-1B (1B) — Factoring — 161q
  - [x] y11e1-1C (1C) — Algebraic fractions — 86q
  - [x] y11e1-1D (1D) — Quadratic equations — 106q
- [ ] **y11e1-11** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y11e1-14** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y11e1-16** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y11e1-4** [seed] — Chapter 4: Equations and inequations (3 topics, 107q — confirmed 2026-07-09). 23 docs are compound multi-part (`subQuestions`) — flagged for review, skip. 3 `teacher_review`/1 `requiresManualGrading` skip. In-scope: 81. No questions already `multiple_choice` in this chapter.
  - [ ] y11e1-4B (4B) — Quadratic equations and inequations — 41q (32 in-scope, 2 teacher_review, rest subQuestions)
  - [ ] y11e1-4C (4C) — The discriminant — 46q (39 in-scope, 7 teacher_review)
  - [ ] y11e1-4D (4D) — Quadratic identities — 20q (10 in-scope, 10 teacher_review)
- [ ] **y11e1-6** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q

## Year 12a

- [x] **y12a-1** [seed] — Chapter 1: Sequences and series (1 topics, 1556q)
  - [x] ? — (unknown — no topic_index entries for this chapter) — 1556q
- [ ] **y12a-10** [orphan] — Ascham 2020 HSC Trial (1 topics, 9q)
  - [ ] y12a-10C (10C) — Mean and variance of a distribution — 9q
- [ ] **y12a-2** [orphan] — Chapter 2: Graphs and equations (title corrected 2026-07-08 per user screenshot — the "Ascham 2020 HSC Trial" chapterTitle seen earlier was a stale/wrong field on one sample doc, not the real chapter name). Only topic 2F has any content — see below. Chapter checkbox stays unchecked until 2F itself is actually converted (not yet done).
  - [ ] y12a-2F (2F) — Review of translations and reflections — 2q — **only populated topic, still needs MCQ conversion**
  - [skip — empty] y12a-2A (2A) — The sign of a function — 0q
  - [skip — empty] y12a-2B (2B) — Vertical and horizontal asymptotes — 0q
  - [skip — empty] y12a-2C (2C) — A curve-sketching menu — 0q
  - [skip — empty] y12a-2D (2D) — Solving inequations — 0q
  - [skip — empty] y12a-2E (2E) — Using graphs to solve equations and inequations — 0q
  - [skip — empty] y12a-2G (2G) — Dilations — 0q
  - [skip — empty] y12a-2H (2H) — Combinations of transformations — 0q
  - [skip — empty] y12a-2I (2I) — Trigonometric graphs — 0q
- [x] **y12a-3** [seed] — Chapter 3: Curve-sketching using the derivative (9 topics, 338q)
  - [x] y12a-3A (3A) — Increasing, decreasing and stationary at a point — 66q
  - [x] y12a-3B (3B) — Stationary points and turning points — 44q
  - [x] y12a-3C (3C) — Second and higher derivatives — 59q
  - [x] y12a-3D (3D) — Concavity and points of inflection — 25q
  - [x] y12a-3E (3E) — Systematic curve sketching with the derivative — 12q
  - [x] y12a-3F (3F) — Global maximum and minimum — 18q
  - [x] y12a-3G (3G) — Applications of maximisation and minimisation — 23q
  - [x] y12a-3H (3H) — Primitive functions — 69q
  - [x] y12a-3I (3I) — Chapter review exercise — 61q
- [ ] **y12a-4** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y12a-5** [seed] — Chapter 5: The exponential and logarithmic functions (12 topics, 723q)
  - [ ] y12a-5A (5A) — Review of exponential functions base e — 53q
  - [ ] y12a-5B (5B) — Differentiation of exponential functions — 117q
  - [x] y12a-5C (5C) — Applications of differentiation — 65 flat MC (flattened 2026-07-18; parent nesting hid parts from bank/counts)
  - [x] y12a-5D (5D) — Integration of exponential functions — 112 flat MC (flattened 2026-07-18; nesting hid them from bank/counts)

  - [x] y12a-5E (5E) — Applications of integration — 60 flat MC (converted 2026-07-18)
  - [x] y12a-5F (5F) — Review of logarithmic functions — 65 flat MC (converted 2026-07-18)
  - [ ] y12a-5G (5G) — Differentiation of logarithmic functions — 100q
  - [ ] y12a-5H (5H) — Applications of differentiation — 24q
  - [ ] y12a-5I (5I) — Integration giving logarithms — 68q
  - [ ] y12a-5J (5J) — Areas and the logarithmic function — 46q
  - [ ] y12a-5K (5K) — Calculus with other bases — 51q
  - [ ] y12a-5L (5L) — Chapter 5 Revision — 31q
- [ ] **y12a-6** [seed] — Chapter 6: The trigonometric functions (6 topics, 259q)
  - [ ] y12a-6A (6A) — The behaviour of sin x near the origin — 4q
  - [ ] y12a-6B (6B) — Differentiating the trigonometric functions — 83q
  - [ ] y12a-6C (6C) — Applications of differentiation — 38q
  - [ ] y12a-6D (6D) — Integrating the trigonometric functions — 71q
  - [ ] y12a-6E (6E) — Area — 42q
  - [ ] y12a-6F (6F) — Chapter review exercise — 26q
- [ ] **y12a-7** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y12a-8** [seed] — Chapter 8: Series and finance (6 topics, 140q)
  - [ ] y12a-8A (8A) — Applications of APs and GPs — 19q
  - [ ] y12a-8B (8B) — The use of logarithms with GPs — 22q
  - [ ] y12a-8C (8C) — Simple and compound interest — 57q
  - [ ] y12a-8D (8D) — Investing money by regular instalments — 14q
  - [ ] y12a-8E (8E) — Paying off a loan — 62q
  - [ ] y12a-8F (8F) — Chapter review exercise — 14q
- [ ] **y12a-9** [orphan] — Ascham 2020 HSC Trial (1 topics, 2q)
  - [ ] y12a-9D (9D) — Bivariate data — 2q

## Year 12e1

- [ ] **y12e1-10** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y12e1-11** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y12e1-12** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y12e1-13** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y12e1-5** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q
- [ ] **y12e1-8** [orphan] — (title unknown) (1 topics, 0q)
  - [ ] ? — (unknown — no topic_index entries for this chapter) — 0q

