# Homework worksheets: split a chapter PDF into one PDF per topic

The homework feature links one Google Drive PDF to each curriculum topic
(Curriculum → topic → "Homework PDF"). These scripts cut a textbook chapter PDF
into those per-topic files. Used for ICE-EM Year 7 chapters 7, 9–23 (2026-10-04).

```
python3 tools/hw-pdf/run_y7.py <curriculum.json> <outdir> [chapter ...]
```

`<curriculum.json>` is the Firestore `curriculum/Year_7` document (for topic codes/titles);
chapter PDFs are looked up as `~/Downloads/Chapter N *.pdf` (largest/readable copy wins).
`split_chapter.py` does one chapter. Output files are named `Y7 Ch9A.pdf`
(chapter + topic letter) — the name is what links a Drive file to its topic later.

How it cuts: a topic starts on the page whose big heading is its code (`9A`) and ends on the
page before the next heading — or on that page too when the next heading sits part-way down it.
A "Review exercise" block nobody asked for is written as `Y7 Ch9R Review.pdf` and the last
lesson stops before it. A chapter cut from a whole-book PDF stops before "Answers to exercises".
Checked against the hand-made Ch5 split (same page ranges for 5 of 6 topics; 5B differs by one
shared page).
