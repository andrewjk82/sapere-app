#!/usr/bin/env python3
"""Cut a whole-book ICE-EM PDF into chapter PDFs, then split each into per-topic worksheets.
usage: run_book.py <book.pdf> <curriculum.json> <outdir> <prefix> <offset> <ans_printed_page> <ch>:<printed_start> ...
  offset = PDF page - printed page; chapters end where the next starts (the last stops before the answers).
  e.g. run_book.py 8a.pdf Year_8.json out "Y8 Ch" 13 282 1:1 2:17 3:57 ...
Topics (code + title) come from the Firestore curriculum doc; split_chapter.py does the page cutting."""
import os, re, sys, json, subprocess, tempfile
from pypdf import PdfReader, PdfWriter
book, cur, out, prefix, off, ans, *chs = sys.argv[1:]
off, ans = int(off), int(ans)
starts = [(int(a), int(b)) for a, b in (c.split(':') for c in chs)]
cur = json.load(open(cur))
cur = cur.get('data', cur)
tops = {}
for c in cur['chapters']:
    for t in c.get('topics', []):
        tops.setdefault(int(re.match(r'\d+', t['code']).group()), []).append(t)
reader = PdfReader(book, strict=False)
tmp = tempfile.mkdtemp()
for i, (n, p) in enumerate(starts):
    end = (starts[i + 1][1] if i + 1 < len(starts) else ans) - 1
    w = PdfWriter()
    for q in range(p + off - 1, end + off): w.add_page(reader.pages[q])
    f = os.path.join(tmp, f'Chapter {n}.pdf')
    with open(f, 'wb') as fh: w.write(fh)
    args = [f'{t["code"]}:{t["title"]}' for t in tops[n]]
    r = subprocess.run([sys.executable, os.path.join(os.path.dirname(__file__), 'split_chapter.py'), f, out, prefix] + args, capture_output=True, text=True)
    print(f'== Ch{n} (printed {p}-{end})'); print('\n'.join(l for l in r.stdout.splitlines() if l.strip()))
    if r.stderr.strip(): print(r.stderr[-300:])
