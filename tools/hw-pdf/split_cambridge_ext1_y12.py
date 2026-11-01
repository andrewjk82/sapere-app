#!/usr/bin/env python3
"""Split the 2026 Cambridge Extension 1 Year 12 (2nd ed.) chapter PDFs (CMS6_Extension1_Y12_2ed_chNN.pdf) into one
worksheet PDF per curriculum topic: 'E1Y12 Ch1A.pdf' … 'E1Y12 Ch1R Review.pdf'. The file name carries the topic code,
which is how a Drive file gets linked to its topic afterwards (tools/scripts/migrateExt1Y12Curriculum.mjs).

  python3 tools/hw-pdf/split_cambridge_ext1_y12.py <dir with the chapter PDFs> <output dir>

How it cuts: every page's running header carries the section code — at the start of odd pages ('1A Sequences … 3')
and at the end of even pages ('2 Chapter 1 Sequences and series 1A'). The review starts at the page whose header or
top lines say 'Chapter N review'. Page 1 (the chapter title page) is left out. Same approach as split_cambridge_ext2.py.
"""
import glob, os, re, subprocess, sys
from pypdf import PdfReader, PdfWriter

src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)

def page_texts(path):
    t = subprocess.run(['pdftotext', '-layout', path, '-'], capture_output=True, text=True).stdout.split('\f')
    return t[:-1] if t and not t[-1].strip() else t

def norm(l): return re.sub(r'\s+', ' ', l).strip()

def classify(n, text):
    lines = [norm(l) for l in text.splitlines() if l.strip()]
    if not lines: return None
    head = lines[0]
    if any(re.search(rf'Chapter {n} [Rr]eview', l) for l in lines[:4]): return 'R'
    m = re.match(rf'^({n}[A-Z]) \S', head) or re.search(rf' ({n}[A-Z])$', head)
    return m.group(1) if m else None

summary = []
for n in range(1, 19):
    path = glob.glob(os.path.join(src, f'CMS6_Extension1_Y12_2ed_ch{n:02d}*.pdf'))[0]
    texts = page_texts(path)
    labels, cur = [], None
    for i, t in enumerate(texts):
        code = classify(n, t) if i > 0 else None
        if cur == 'R': code = 'R'                      # nothing after the review belongs to a section
        if code: cur = code
        labels.append(cur)
    reader = PdfReader(path)
    groups = {}
    for i, lab in enumerate(labels):
        if lab: groups.setdefault(lab, []).append(i)
    for lab, idx in groups.items():
        name = f'E1Y12 Ch{n}R Review.pdf' if lab == 'R' else f'E1Y12 Ch{lab}.pdf'
        w = PdfWriter()
        for i in idx: w.add_page(reader.pages[i])
        with open(os.path.join(out, name), 'wb') as f: w.write(f)
        summary.append((name, idx[0] + 1, idx[-1] + 1, len(idx)))
    skipped = [i + 1 for i, l in enumerate(labels) if not l]
    print(f'chapter {n}: {len(texts)} pages, left out: {skipped}')
for name, a, b, c in summary: print(f'  {name:28} pages {a}-{b} ({c})')
