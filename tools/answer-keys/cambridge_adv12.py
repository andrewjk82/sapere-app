#!/usr/bin/env python3
"""Split the answers section of Cambridge CMS6 Advanced Year 12 into one image set per section.

Input (in the working directory): parsed.json (pdftotext -bbox words, see 1_parse_words.py),
pages/p-NN.png (pdftoppm -r 150 of the answers-only PDF). Writes out/<key>_<i>.webp,
meta.json (key -> images) and labels.json (key -> question numbers).

Sections start at "Exercise 1A"; "Chapter 1 review exercise" starts the review key "1R";
a plain "Chapter 2" heading ends the previous section. Two columns, text columns start at
x=57 / x=306 (pt); the grey side tab sits outside x<45 / x>543 and is cropped away.
"""
import json, os, re
from collections import OrderedDict
from PIL import Image

P = json.load(open('parsed.json'))
S = 150 / 72
TOP, BOT = 46, 762
LX0, LX1, RX0, RX1 = 45, 300, 300, 543
COL_START = {'L': (54, 67), 'R': (303, 317)}   # x range of a question number


def col_words(page, col):
    ws = [w for w in page['words'] if 45 < w[1] < 765 and (w[3] - w[1]) < 30]
    return [w for w in ws if (w[0] < 300) == (col == 'L') and 40 < w[0] < 560]


def headings(ws):
    out = []
    for i, w in enumerate(ws):
        line = sorted([v for v in ws if abs(v[1] - w[1]) < 2.5 and v[0] >= w[0]], key=lambda v: v[0])
        toks = [v[4] for v in line]
        if w[4] == 'Exercise' and len(toks) > 1 and re.fullmatch(r'\d+[A-Z]', toks[1]):
            out.append((w[1], 'EX', toks[1]))
        elif w[4] == 'Chapter' and len(toks) > 1 and re.fullmatch(r'\d+', toks[1]):
            if len(toks) > 3 and toks[2] == 'review':
                out.append((w[1], 'RV', toks[1]))
            elif len(toks) == 2:
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
        if key and (not hs or hs[0][0] - top > 4):
            segs.append([key, pi + 1, col, TOP, bounds[0]])
        for i, (y, kind, code) in enumerate(hs):
            if kind == 'CH':
                key = None
                continue
            key = code if kind == 'EX' else f'{code}R'
            segs.append([key, pi + 1, col, y, bounds[i + 1]])
segs = [s for s in segs if s[4] - s[3] > 3]
order = OrderedDict()
for s in segs:
    order.setdefault(s[0], []).append(s)

os.makedirs('out', exist_ok=True)
meta, labels = {}, {}
for key, ss in order.items():
    crops, nums = [], set()
    for _, pg, col, y0, y1 in ss:
        im = Image.open(f'pages/p-{pg:02d}.png').convert('L')
        x0, x1 = (LX0, LX1) if col == 'L' else (RX0, RX1)
        top = TOP if y0 <= TOP + 2 else max(TOP, y0 - 6)
        bot = BOT if y1 >= BOT - 10 else y1 - 3
        cr = im.crop((int(x0 * S), int(top * S), int(x1 * S), int(bot * S)))
        px = cr.load(); wpx, hpx = cr.size
        for x in range(max(0, wpx - 16), wpx):          # thin column rule / side-tab edge on the right
            if hpx > 40 and sum(1 for y in range(0, hpx, 2) if px[x, y] < 170) > 0.6 * (hpx / 2):
                for y in range(hpx): px[x, y] = 255
        crops.append(cr)
        ws = col_words(P[pg - 1], col)
        lo, hi = COL_START[col]
        for w in ws:
            if y0 - 2 <= w[1] < y1 - 1 and re.fullmatch(r'\d{1,2}', w[4]) and lo <= w[0] <= hi:
                if not [v for v in ws if abs(v[1] - w[1]) < 2.5 and v[2] <= w[0] + 0.5 and v is not w]:
                    nums.add(int(w[4]))
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
        out = Image.new('L', (w, sum(c.height for c in ch)), 255)
        y = 0
        for c in ch:
            out.paste(c, (0, y)); y += c.height
        fn = f'out/{key}_{i}.webp'
        out.save(fn, 'WEBP', quality=60, method=6)
        files.append(fn)
    meta[key] = files
json.dump(meta, open('meta.json', 'w'), indent=0)
json.dump(labels, open('labels.json', 'w'), indent=0)
sizes = [os.path.getsize(f) for v in meta.values() for f in v]
print(len(meta), 'sections,', len(sizes), 'images,', round(sum(sizes) / 1e6, 2), 'MB')
print('no question numbers found:', [k for k, v in labels.items() if not v])
print('total marking items:', sum(len(v) for v in labels.values()))
