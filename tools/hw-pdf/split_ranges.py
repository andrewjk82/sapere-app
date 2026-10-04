#!/usr/bin/env python3
"""Cut a PDF into files by explicit page ranges.
usage: split_ranges.py <book.pdf> <ranges.json> <outdir>
ranges.json: { "Y12 Adv Ch1A": [20, 24], ... }  (1-based, inclusive)"""
import json, os, sys
from pypdf import PdfReader, PdfWriter
pdf, ranges, out = sys.argv[1:4]
reader = PdfReader(pdf, strict=False)
os.makedirs(out, exist_ok=True)
for name, (a, b) in json.load(open(ranges)).items():
    w = PdfWriter()
    for p in range(a - 1, b): w.add_page(reader.pages[p])
    with open(os.path.join(out, f'{name}.pdf'), 'wb') as f: w.write(f)
    print(f'{name}: pages {a}-{b} ({b - a + 1})')
