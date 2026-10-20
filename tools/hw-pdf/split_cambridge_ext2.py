#!/usr/bin/env python3
"""Split the 2026 Cambridge Extension 2 Year 12 chapter PDFs (CMS6_Extension2_Yr12_chNN.pdf) into one worksheet PDF
per curriculum topic: 'E2 Ch1A.pdf' … 'E2 Ch1R Review.pdf', 'E2 Ch4X Appendix 3D.pdf'. The file name carries the topic
code, which is how a Drive file gets linked to its topic afterwards.

  python3 tools/hw-pdf/split_cambridge_ext2.py <dir with the chapter PDFs> <output dir>

How it cuts: every page has a running header — the section code ('1B') sits at the start of odd pages and at the end of
even pages; the review starts at its 'Chapter N Review' heading (an even page still shows the previous section's code);
an appendix starts at its 'Appendix' heading. Pages before the first
section (the chapter introduction) are left out.
"""
import os, re, sys
from pypdf import PdfReader, PdfWriter
import subprocess

src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)

def page_texts(path):
    t = subprocess.run(['pdftotext', '-layout', path, '-'], capture_output=True, text=True).stdout.split('\f')
    return t[:-1] if t and not t[-1].strip() else t

def norm(l): return re.sub(r'\s+', ' ', l).strip()

def classify(n, text):
    lines = [norm(l) for l in text.splitlines() if l.strip()]
    if not lines: return None, False
    first = lines[0]
    app = any(re.match(r'^Appendix\b', l) for l in lines[:6])
    if any(l == f'Chapter {n} Review' for l in lines[:4]): return 'R', app   # the review heading sits at the top of its page
    m = re.match(rf'^({n}[A-Z]) [A-Z]', first) or re.search(rf' ({n}[A-Z])$', first)
    if m: return m.group(1), app
    if re.search(rf'Chapter {n} [Rr]eview', first): return 'R', app
    return None, app

summary = []
for n in range(1, 8):
    path = os.path.join(src, f'CMS6_Extension2_Yr12_ch0{n}.pdf')
    texts = page_texts(path)
    labels, cur, in_app = [], None, False
    for t in texts:
        code, app = classify(n, t)
        if app: in_app = True
        if in_app: cur = 'APP'
        elif code: cur = code
        labels.append(cur)
    reader = PdfReader(path)
    groups = {}
    for i, lab in enumerate(labels):
        if lab: groups.setdefault(lab, []).append(i)
    for lab, idx in groups.items():
        if lab == 'R': name = f'E2 Ch{n}R Review.pdf'
        elif lab == 'APP': name = f'E2 Ch{n}X Appendix.pdf'
        else: name = f'E2 Ch{lab}.pdf'
        w = PdfWriter()
        for i in idx: w.add_page(reader.pages[i])
        with open(os.path.join(out, name), 'wb') as f: w.write(f)
        summary.append((name, idx[0] + 1, idx[-1] + 1, len(idx)))
    skipped = [i + 1 for i, l in enumerate(labels) if not l]
    print(f'chapter {n}: {len(texts)} pages, left out (introduction): {skipped}')
for name, a, b, c in summary: print(f'  {name:32} pages {a}-{b} ({c})')
