#!/usr/bin/env python3
"""Split the 2026 Cambridge Mathematics Advanced Year 12 (2nd ed.) book PDF (one file, CMS6_Advanced12_2ed_book.pdf) into one
worksheet PDF per curriculum topic: 'AY12 Ch1A.pdf' … 'AY12 Ch1R Review.pdf'. The file name carries the topic code, which
is how a Drive file gets linked to its topic afterwards (tools/scripts/migrateAdvY12Curriculum.mjs).

  python3 tools/hw-pdf/split_cambridge_adv_y12.py <book pdf> <output dir>

Chapter page ranges come from the PDF outline ('may12_2nd_<n>' bookmarks; the answers bookmark ends chapter 10). Inside a
chapter it cuts like split_cambridge_ext1_y12.py: every page's running header carries the section code — at the start of
odd pages ('1A Sequences … 3') and at the end of even pages ('2 Chapter 1 Sequences and series 1A'); the review starts at
the page whose top lines say 'Chapter N review'. The chapter title page is left out.
"""
import os, re, subprocess, sys
from pypdf import PdfReader, PdfWriter

src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
reader = PdfReader(src)

starts = {}
for item in reader.outline:
    if isinstance(item, list): continue
    m = re.fullmatch(r'may12_2nd_(\d+|answers)', item.title)
    if m: starts[m.group(1)] = reader.get_destination_page_number(item)   # 0-based
ranges = {n: (starts[str(n)], starts[str(n + 1)] if n < 10 else starts['answers']) for n in range(1, 11)}

def page_text(i):
    return subprocess.run(['pdftotext', '-layout', '-f', str(i + 1), '-l', str(i + 1), src, '-'], capture_output=True, text=True).stdout

def norm(l): return re.sub(r'\s+', ' ', l).strip()

def classify(n, text):
    lines = [norm(l) for l in text.splitlines() if l.strip()]
    if not lines: return None
    head = lines[0]
    if any(re.search(rf'Chapter {n} [Rr]eview', l) for l in lines[:4]): return 'R'
    m = re.match(rf'^({n}[A-Z]) \S', head) or re.search(rf' ({n}[A-Z])$', head)
    return m.group(1) if m else None

summary = []
for n, (a, b) in ranges.items():
    labels, cur = [], None
    for i in range(a, b):
        code = classify(n, page_text(i)) if i > a else None
        if cur == 'R': code = 'R'                      # nothing after the review belongs to a section
        if code: cur = code
        labels.append((i, cur))
    groups = {}
    for i, lab in labels:
        if lab: groups.setdefault(lab, []).append(i)
    for lab, idx in groups.items():
        name = f'AY12 Ch{n}R Review.pdf' if lab == 'R' else f'AY12 Ch{lab}.pdf'
        w = PdfWriter()
        for i in idx: w.add_page(reader.pages[i])
        with open(os.path.join(out, name), 'wb') as f: w.write(f)
        summary.append((name, idx[0] + 1, idx[-1] + 1, len(idx)))
    skipped = [i + 1 for i, l in labels if not l]
    print(f'chapter {n}: pdf pages {a + 1}-{b}, left out: {skipped}')
for name, a, b, c in summary: print(f'  {name:28} pages {a}-{b} ({c})')
