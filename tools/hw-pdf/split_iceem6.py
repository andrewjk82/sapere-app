#!/usr/bin/env python3
"""ICE-EM Year 6 (3rd ed.) whole book -> one PDF per curriculum topic ("Y6 Ch1A.pdf").
usage: split_iceem6.py <book.pdf> <Year_6.json> <outdir> <answers_first_page>
A topic starts on the page whose first line is "<code>  <title>"; it ends before the next topic's page (or the next
chapter's "CHAPTER n Preparation" page; the last stops before the answers)."""
import re, sys, os, subprocess, json
from pypdf import PdfReader, PdfWriter
pdf, cur, out, ans = sys.argv[1], json.load(open(sys.argv[2])), sys.argv[3], int(sys.argv[4])
cur = cur.get('data', cur)
reader = PdfReader(pdf, strict=False)
lt = subprocess.run(['pdftotext', '-layout', pdf, '-'], capture_output=True, text=True).stdout.split('\f')
first = lambda i: next((l.strip() for l in lt[i - 1].splitlines() if l.strip()), '')
codes = [t['code'] for c in cur['chapters'] for t in c['topics']]
start = {}; chap_start = {}
for p in range(12, ans):
    f = first(p)
    for l in [x.strip() for x in lt[p - 1].splitlines() if x.strip()][:5]:
        m = re.match(r'^(\d+[A-K])(\s{2,}\S.*)?$', l)
        if m and m.group(1) in codes and m.group(1) not in start: start[m.group(1)] = p; break
    m = re.match(r'^CHAPTER\s*\|?\s*(\d+)', ' '.join(f.split()) if False else f)
    txt = ' '.join(lt[p - 1].split()[:4])
    m = re.match(r'CHAPTER \| (\d+) Preparation', txt)
    if m: chap_start[int(m.group(1))] = p
mid = set()
for code in [c for c in codes if c not in start]:   # heading part-way down a page: the page is shared with the previous topic
    for q in range(12, ans):
        if any(re.match(rf'^\s*{code}(\s{{2,}}\S|\s*$)', l) for l in lt[q - 1].splitlines()):
            start[code] = q; mid.add(code); break
os.makedirs(out, exist_ok=True)
missing = [c for c in codes if c not in start]
print('missing headings:', missing)
order = sorted(start.items(), key=lambda kv: kv[1])
order = sorted(start.items(), key=lambda kv: kv[1])
for code, p in order:
    nxt = [(q, c) for c, q in order if q > p or (q == p and c != code and c in mid)]
    nxt += [(q, None) for q in chap_start.values() if q > p] + [(ans, None)]
    q, c = min(nxt, key=lambda x: (x[0], x[1] is None))
    end = q if c in mid else q - 1
    w = PdfWriter()
    for q in range(p - 1, end): w.add_page(reader.pages[q])
    w.write(open(os.path.join(out, f'Y6 Ch{code}.pdf'), 'wb'))
    print(f'{code}: {p}-{end}')
