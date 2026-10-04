#!/usr/bin/env python3
"""ICE-EM Year 8: single-column "Answers to exercises" (answers-only PDF) -> per-section WebP crops + labels.
Run inside a directory with parsed.json (pdftotext -bbox words), items.json (pdfjs items with font names),
pages/p-NN.png (pdftoppm -r 150). Headings: "Exercise 2A", "Review exercise", "Challenge exercise", "Chapter 2 answers".
Question numbers/part letters are the Times-Bold items."""
import json, re, os
from collections import OrderedDict
from PIL import Image
P = json.load(open('parsed.json'))['pages']; items = json.load(open('items.json'))
S = 150 / 72; TOP, BOT = 92, 762; X0, X1 = 58, 535   # the page head is a grey band down to y=91
NP = len(str(len(P)))

def heads(ws):
    hs = []
    for w in ws:
        if w[3] - w[1] < 12: continue
        same = sorted([v for v in ws if abs(v[1] - w[1]) < 2 and v[0] > w[2] and v[0] - w[2] < 15], key=lambda v: v[0])
        nxt = same[0] if same else None
        t = w[4]
        m = re.fullmatch(r'Exercise\s*(\d+[A-Z])', t)   # "Exercise10B" is glued in one place
        if m: hs.append((w[1], 'EX', m.group(1)))
        elif t == 'Exercise' and nxt and re.fullmatch(r'\d+[A-Z]', nxt[4]): hs.append((w[1], 'EX', nxt[4]))
        elif t in ('Review', 'Challenge') and nxt and nxt[4] in ('exercise', 'execrise', 'exercises'): hs.append((w[1], t.upper(), ''))
        elif t == 'Chapter' and nxt and re.fullmatch(r'\d+', nxt[4]) and any(v[4] == 'answers' and v[0] > nxt[2] and v[0] - nxt[2] < 40 for v in ws if abs(v[1] - w[1]) < 2): hs.append((w[1], 'CH', nxt[4]))
        elif re.fullmatch(r'\d+[A-Z]', t) and nxt and nxt[4][:1].isupper() and w[0] < 100: hs.append((w[1], 'EX', t))   # "9A Review", "20B Problem-solving"
    return sorted(hs)

segs, chap, key = [], None, None
for pi, p in enumerate(P):
    ws = [w for w in p['words'] if TOP < w[1] and w[3] < BOT]
    if not ws: continue
    top = min(w[1] for w in ws); bot = max(w[3] for w in ws)
    hs = heads(ws); bounds = [h[0] for h in hs] + [bot]
    if key and (not hs or hs[0][0] - top > 4): segs.append([key, pi + 1, TOP, bounds[0]])
    for i, (y, kind, code) in enumerate(hs):
        if kind == 'CH': chap = code; key = None; continue
        key = code if kind == 'EX' else f'{chap}{kind}'
        segs.append([key, pi + 1, y, bounds[i + 1]])
segs = [s for s in segs if s[3] - s[2] > 3]
order = OrderedDict()
for s in segs: order.setdefault(s[0], []).append(s)

os.makedirs('out', exist_ok=True)
meta, labels = {}, {}
bold = [i for i in items if i['font'].endswith('Times-Bold')]
for key, ss in order.items():
    crops, nums = [], set()
    for _, pg, y0, y1 in ss:
        im = Image.open(f'pages/p-{pg:0{NP}d}.png').convert('L')
        colbot = max(w[3] for w in P[pg - 1]['words'] if w[3] < BOT)
        top = TOP if y0 <= TOP + 2 else max(TOP, y0 - 5)
        bot = BOT if y1 >= colbot - 1 else y1 - 4
        crops.append(im.crop((int(X0 * S), int(top * S), int(X1 * S), int(bot * S))))
        for b in bold:
            if b['p'] == pg and y0 - 2 <= b['y'] - b['h'] < y1 - 1 and re.fullmatch(r'\d{1,2}', b['s'].strip()):
                nums.add(int(b['s']))
    labels[key] = [str(i) for i in range(1, max(nums) + 1)] if nums else []
    w = max(c.width for c in crops)
    chunks, cur, h = [], [], 0
    for c in crops:
        if cur and h + c.height > 3000: chunks.append(cur); cur, h = [], 0
        cur.append(c); h += c.height
    if cur: chunks.append(cur)
    files = []
    for i, ch in enumerate(chunks):
        o = Image.new('L', (w, sum(c.height for c in ch)), 255); y = 0
        for c in ch: o.paste(c, (0, y)); y += c.height
        fn = f'out/{key}_{i}.webp'; o.save(fn, 'WEBP', quality=60, method=6); files.append(fn)
    meta[key] = files
json.dump(segs, open('segs.json', 'w')); json.dump(meta, open('meta.json', 'w'), indent=0); json.dump(labels, open('labels.json', 'w'), indent=0)
print(len(meta), 'sections', 'no labels:', [k for k, v in labels.items() if not v])
print('keys', list(meta))
