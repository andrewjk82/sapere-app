#!/usr/bin/env python3
"""Split the answers (CMS6_Extension2_Yr12_ch08_answers.pdf) of CambridgeMATHS NSW Stage 6 Extension 2 Year 12 (Sadler et al., 2026)
into one image set per exercise / chapter review, keyed by the NEW curriculum topic ids (y12e2-1A … y12e2-7J, y12e2-1R …).

Input (in the working directory):
  parsed.json — text items per page [{W, H, words: [[x0, y0, x1, y1, text, fontSize], ...]}] (pdfjs; `pdftotext -bbox` crashes on this
                file, so items.mjs next to this script builds it),
  pg-NN.png   — `pdftoppm -r 150 -png <answers pdf> pg`.
Writes out/<key>_<i>.webp, meta.json, labels.json and mapping.json ({ topicId: [{ key, title, labels, images }] }, the shape
upload.mjs reads).

Two text columns (x=55–299 and 301–549 pt); the page tab sits at x>552 on odd pages and x<45 on even pages and is cropped away.
Headings: "Exercise 1A" (key 1A), "Chapter 1 Review" (key 1R), "Chapter 2" (ends the previous section).
Question labels are the bold "1a" / "12" items that start a line at the column's left edge.
"""
import json, os, re
from collections import OrderedDict
from PIL import Image

P = json.load(open('parsed.json'))
S = 150 / 72
TOP, BOT = 58, 768
LX0, LX1, RX0, RX1 = 55, 299, 301, 549
COL_START = {'L': (55, 73), 'R': (300, 319)}   # x range of a question label
PAD = len(str(len(P)))


def col_words(page, col):
    ws = [w for w in page['words'] if 55 < w[1] < 770 and (w[3] - w[1]) < 30]
    return [w for w in ws if (w[0] < 300) == (col == 'L') and 50 < w[0] < 552]


def headings(ws):
    out = []
    for w in ws:
        t = w[4]
        m = re.fullmatch(r'Exercise (\d[A-Z])', t)
        if m: out.append((w[1], 'EX', m.group(1))); continue
        m = re.fullmatch(r'Chapter (\d) Review', t)
        if m: out.append((w[1], 'RV', m.group(1))); continue
        if re.fullmatch(r'Chapter \d', t) and w[5] > 14: out.append((w[1], 'CH', t.split()[1]))
    return sorted(set(out))


segs, key = [], None
for pi, page in enumerate(P):
    for col in ('L', 'R'):
        ws = col_words(page, col)
        if not ws: continue
        top = min(w[1] for w in ws)
        bot = max(w[3] for w in ws)
        hs = headings(ws)
        bounds = [h[0] - 8 for h in hs] + [bot]
        if key and (not hs or hs[0][0] - top > 8):
            segs.append([key, pi + 1, col, TOP, bounds[0]])
        for i, (y, kind, code) in enumerate(hs):
            if kind == 'CH': key = None; continue
            key = code if kind == 'EX' else f'{code}R'
            segs.append([key, pi + 1, col, y - 8, bounds[i + 1]])
segs = [s for s in segs if s[4] - s[3] > 3]
order = OrderedDict()
for s in segs: order.setdefault(s[0], []).append(s)

os.makedirs('out', exist_ok=True)
meta, labels, mapping = {}, {}, {}
for key, ss in order.items():
    crops, cand = [], []
    for _, pg, col, y0, y1 in ss:
        im = Image.open(f'pg-{pg:0{PAD}d}.png').convert('L')
        x0, x1 = (LX0, LX1) if col == 'L' else (RX0, RX1)
        top = max(TOP, y0 if y0 > TOP + 2 else TOP)
        bot = BOT if y1 >= BOT - 10 else y1 - 3
        crops.append(im.crop((int(x0 * S), int(top * S), int(x1 * S), int(bot * S))))
        ws = col_words(P[pg - 1], col)
        lo, hi = COL_START[col]
        for w in sorted(ws, key=lambda w: (round(w[1]), w[0])):
            m = re.fullmatch(r'(\d{1,2})[a-z]?', w[4])
            if y0 - 2 <= w[1] < y1 - 1 and m and lo <= w[0] <= hi and w[5] <= 10.5:
                if not [v for v in ws if abs(v[1] - w[1]) < 3 and v[2] <= w[0] + 0.5 and v is not w]:
                    cand.append(int(m.group(1)))
    nums, last = set(), 0
    for n in cand:
        if last <= n <= last + 8 and n >= 1: nums.add(n); last = max(last, n)   # answers are skipped for "show that" questions
    labels[key] = [str(i) for i in range(1, max(nums) + 1)] if nums else []
    w = max(c.width for c in crops)
    chunks, cur, h = [], [], 0
    for c in crops:
        if cur and h + c.height > 3000: chunks.append(cur); cur, h = [], 0
        cur.append(c); h += c.height
    if cur: chunks.append(cur)
    files = []
    for i, ch in enumerate(chunks):
        o = Image.new('L', (w, sum(c.height for c in ch)), 255)
        y = 0
        for c in ch: o.paste(c, (0, y)); y += c.height
        fn = f'out/{key}_{i}.webp'
        o.save(fn, 'WEBP', quality=60, method=6)
        files.append(fn)
    meta[key] = files
    title = 'Chapter review' if key.endswith('R') else f'Exercise {key}'
    mapping[f'y12e2-{key}'] = [{'key': key, 'title': title, 'labels': labels[key], 'images': files}]
json.dump(meta, open('meta.json', 'w'), indent=0)
json.dump(labels, open('labels.json', 'w'), indent=0)
json.dump(mapping, open('mapping.json', 'w'), indent=0)
sizes = [os.path.getsize(f) for v in meta.values() for f in v]
print(len(meta), 'sections,', len(sizes), 'images,', round(sum(sizes) / 1e6, 2), 'MB')
print('sections:', ' '.join(meta))
print('no question numbers found:', [k for k, v in labels.items() if not v])
print('total marking items:', sum(len(v) for v in labels.values()))
