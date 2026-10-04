#!/usr/bin/env python3
"""Split the "Answers to Exercises" PDF of CambridgeMATHS Extension 2 Year 12 (Sadler & Ward, 2020) into one image set per exercise.

Input (in the working directory): parsed.json (pdftotext -bbox words as a list of {W,H,words}),
pages/p-NN.png (pdftoppm -r 150 of Answers.pdf). Writes out/<key>_<i>.webp, meta.json and labels.json.

Two columns (x=80 and x=320 pt). Sections start at "Exercise 1A" or "Review Exercise 1H" (key = the code);
a large "Chapter Two" heading ends the previous section. Question numbers are the first token on a line at
the column's left edge: "7" or "7(a)" (number glued to the first part).
"""
import json, os, re
from collections import OrderedDict
from PIL import Image

P = json.load(open('parsed.json'))
S = 150 / 72
TOP, BOT = 62, 770
COLS = {'L': (72, 308), 'R': (312, 562)}   # left column text ends ~296pt, right column ~553pt
START = {'L': (74, 90), 'R': (314, 330)}   # x range of a question number
CHAPTER_WORDS = {'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'}


def col_words(page, col):
    ws = [w for w in page['words'] if TOP < w[1] < BOT]
    return [w for w in ws if (w[0] < 310) == (col == 'L')]


def headings(ws):
    out = []
    for w in ws:
        line = sorted([v for v in ws if abs(v[1] - w[1]) < 2.5 and v[0] >= w[0]], key=lambda v: v[0])
        toks = [v[4] for v in line]
        if w[4] == 'Exercise' and len(toks) > 1 and re.fullmatch(r'\d[A-Z]', toks[1]):
            # "Review Exercise 1H": the heading starts at the word before
            prev = [v for v in ws if abs(v[1] - w[1]) < 2.5 and v[2] <= w[0] + 0.5 and v[4] == 'Review']
            out.append((prev[0][1] if prev else w[1], 'EX', toks[1]))
        elif w[4] == 'Chapter' and len(toks) == 2 and toks[1] in CHAPTER_WORDS and (w[3] - w[1]) > 14:
            out.append((w[1], 'CH', toks[1]))
    return sorted(set(out))


segs, key = [], None
for pi, page in enumerate(P):
    for col in ('L', 'R'):
        ws = col_words(page, col)
        if not ws:
            continue
        top = min(w[1] for w in ws)
        bot = max(w[3] for w in ws)
        hs = headings(ws)
        bounds = [h[0] for h in hs] + [bot]
        if pi == 0 and col == 'L':      # title page: skip the page title above the first heading
            segs_start = None
        if key and (not hs or hs[0][0] - top > 4):
            segs.append([key, pi + 1, col, TOP, bounds[0]])
        for i, (y, kind, code) in enumerate(hs):
            if kind == 'CH':
                key = None
                continue
            key = code
            segs.append([key, pi + 1, col, y, bounds[i + 1]])
segs = [s for s in segs if s[4] - s[3] > 3]
order = OrderedDict()
for s in segs:
    order.setdefault(s[0], []).append(s)

os.makedirs('out', exist_ok=True)
meta, labels = {}, {}
for key, ss in order.items():
    crops, cand = [], []
    for _, pg, col, y0, y1 in ss:
        im = Image.open(f'pages/p-{pg:0{len(str(len(P)))}d}.png').convert('L')
        x0, x1 = COLS[col]
        top = TOP if y0 <= TOP + 2 else max(TOP, y0 - 6)
        bot = BOT if y1 >= BOT - 10 else y1 - 3
        crops.append(im.crop((int(x0 * S), int(top * S), int(x1 * S), int(bot * S))))
        ws = col_words(P[pg - 1], col)
        lo, hi = START[col]
        for w in sorted(ws, key=lambda w: (round(w[1]), w[0])):
            m = re.fullmatch(r'(\d{1,2})(\([a-z]+\))?', w[4])
            if y0 - 2 <= w[1] < y1 - 1 and m and lo <= w[0] <= hi:
                if not [v for v in ws if abs(v[1] - w[1]) < 2.5 and v[2] <= w[0] + 0.5 and v is not w]:
                    cand.append(int(m.group(1)))
    nums, last = set(), 0
    for n in cand:
        if last <= n <= last + 8 and n >= 1:   # answers are skipped for "show that" questions
            nums.add(n); last = max(last, n)
    labels[key] = [str(i) for i in range(1, max(nums) + 1)] if nums else []
    w = max(c.width for c in crops)
    chunks, cur, h = [], [], 0
    for c in crops:
        if cur and h + c.height > 3000:
            chunks.append(cur); cur, h = [], 0
        cur.append(c); h += c.height
    if cur:
        chunks.append(cur)
    files = []
    for i, ch in enumerate(chunks):
        o = Image.new('L', (w, sum(c.height for c in ch)), 255)
        y = 0
        for c in ch:
            o.paste(c, (0, y)); y += c.height
        fn = f'out/{key}_{i}.webp'
        o.save(fn, 'WEBP', quality=60, method=6)
        files.append(fn)
    meta[key] = files
json.dump(meta, open('meta.json', 'w'), indent=0)
json.dump(labels, open('labels.json', 'w'), indent=0)
sizes = [os.path.getsize(f) for v in meta.values() for f in v]
print(len(meta), 'sections,', len(sizes), 'images,', round(sum(sizes) / 1e6, 2), 'MB')
print('no question numbers found:', [k for k, v in labels.items() if not v])
print('total marking items:', sum(len(v) for v in labels.values()))
