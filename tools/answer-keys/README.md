# Textbook answer keys → answer_keys/{topicId}

Splits a textbook "Answers to exercises" PDF into one answer image set per
curriculum topic, for the teacher's homework marking panel
(`src/components/homework/HomeworkMarkingPanel.jsx`). Teacher-only in
`firestore.rules`. First used for ICE-EM Mathematics 10 (2026-10-04).

Run everything in a scratch directory (paths inside the scripts point at the
Year 10 run — edit `PDF`/output paths for another book):

1. `pdftotext -bbox <pdf> bbox.html` then `python3 1_parse_words.py` — word boxes, headings.
2. `node 2_text_fonts.mjs` — text items with real font names (question numbers are `TimesLTStd-Bold`).
3. `python3 3_split_sections.py` — "Exercise 1A" / "10A Review" / Review / Challenge sections,
   in reading order (left column then right). Column x positions differ on odd/even pages.
4. `pdftoppm -r 150 -png <pdf> pages/p` then `python3 4_crop_images.py` — crops, stitches,
   erases the column divider, saves grayscale WebP (≤3000px tall per image).
5. `python3 5_question_numbers.py` — question labels per section (1..N; letters when a
   section has a single lettered question).
6. Build `mapping.json` ({ topicId: [{ key, title, labels, images }] }) against the
   Firestore `curriculum/Year_N` doc (Review/Challenge → the chapter's Revision topic, or a
   "Challenge exercise" topic when there is one), check samples by eye, then
   `node tools/answer-keys/upload.mjs <dir> "<book name>"`.

## Cambridge CMS6 (Advanced Year 12, answers at the back of the full book)

`cambridge_adv12.py` replaces steps 3–5 for this book: sections start at "Exercise 1A", the
chapter review at "Chapter 1 review exercise" (key `1R`), question numbers are read by position
(first token on a line at the column's left edge) instead of by font. Cut the answers pages out
first (`pages 598–682` of `CMS6_Advanced12_fullbook.pdf`), run `pdftotext -bbox` → `parsed.json`,
render `pdftoppm -r 150` → `pages/p-NN.png`, then run the script in that directory. Review keys map
to each chapter's review topic (`y12a-1j`, `y12a-2-2j`, `y12a-3I`, …).

Cambridge 2nd-edition Extension 1 Year 11 (2025) uses the same layout; run `cambridge_adv11.py` unchanged (answers pages 761–888 of the full book).

Cambridge 1st-edition Extension 1 Year 12 (2019): `cambridge_adv12.py` with `PAGE_TOP` (photo banner on the first answers page) and side-tab-safe crop bounds (55–541pt); the book comes as per-chapter PDFs plus `Ch18_Ans.pdf`.

Cambridge Extension 2 Year 12 (Sadler & Ward, 2020): `cambridge_ext2.py` — "Answers to Exercises" PDF, two wide columns (x=80 / x=320), headings "Exercise 1A (Page 8)" / "Review Exercise 1H", labels like `7(a)`. Review keys map to the "Chapter Review Exercise" topic of each chapter (`y12e2-1H`).

## ICE-EM Year 8 (two whole-book PDFs, answers at the back)

`iceem_y8_answers.py`: the answers are single-column pages with a grey page head (y<92pt); headings "Exercise 2A", "Review exercise", "Challenge exercise", "Chapter 2 answers"; question numbers are the `Times-Bold` items (pdfjs). Chapter-9/20 reviews restart numbering per chapter, so those two are labelled "1.1", "10.3". Worksheets: `tools/hw-pdf/run_book.py` cuts chapter PDFs out of a whole book and runs `split_chapter.py`.
