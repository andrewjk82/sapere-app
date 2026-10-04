#!/usr/bin/env python3
"""Split every remaining Y7 chapter PDF using the topic list from a curriculum JSON.
usage: run_y7.py <curriculum.json> <outdir> [chapter ...]"""
import glob, os, re, sys, json, subprocess
sys.path.insert(0, os.path.dirname(__file__))
from pypdf import PdfReader
cur = json.load(open(sys.argv[1])); out = sys.argv[2]
only = [int(x) for x in sys.argv[3:]]
D = os.path.expanduser('~/Downloads')
tops = {}
for c in cur['chapters']:
    for t in c.get('topics', []):
        tops.setdefault(int(re.match(r'\d+', t['code']).group()), []).append(t)
for n in (only or [7] + list(range(9, 24))):
    cands = []
    for f in glob.glob(f'{D}/Chapter {n} *.pdf'):
        if 'Mechanics' in f: continue
        try: cands.append((len(PdfReader(f, strict=False).pages), os.path.getmtime(f), f))
        except Exception: pass
    if not cands: print(f'Ch{n}: no readable PDF'); continue
    pages, _, f = max(cands)
    args = [f'{t["code"]}:{t["title"]}' for t in tops[n]]
    print(f'== Ch{n}  {os.path.basename(f)} ({pages} pages)')
    r = subprocess.run([sys.executable, os.path.join(os.path.dirname(__file__), 'split_chapter.py'), f, out, 'Y7 Ch'] + args, capture_output=True, text=True)
    print('\n'.join(l for l in r.stdout.splitlines() if l.strip()))
