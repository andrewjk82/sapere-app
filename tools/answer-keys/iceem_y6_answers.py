#!/usr/bin/env python3
"""ICE-EM Year 6 (3rd ed.) answers (PDF pages 403-446) -> per-topic answer images + mapping.json for upload.mjs.
usage: iceem_y6_answers.py <book.pdf> <Year_6.json> <outdir> [first_page=403] [last_page=446]
Sections start at bold headings "<code> WHOLE CLASS | INDIVIDUAL | REVIEW QUESTIONS" (one column or two per page).
Kick off / Show what you know / chapter titles are dropped. Labels: question numbers (+ part letters) read in order."""
import re, sys, os, json, subprocess
from PIL import Image
pdf, cur, out = sys.argv[1], json.load(open(sys.argv[2])), sys.argv[3]
FIRST = int(sys.argv[4]) if len(sys.argv) > 4 else 403
LAST = int(sys.argv[5]) if len(sys.argv) > 5 else 446
cur = cur.get('data', cur)
topic_id = {t['code']: t['id'] for c in cur['chapters'] for t in c['topics']}
os.makedirs(out, exist_ok=True)
DPI = 150; K = DPI / 72
TOP, BOT, MID = 32, 758, 289
TITLES = {'WHOLE': 'Whole class', 'INDIVIDUAL': 'Individual', 'REVIEW': 'Review questions'}

def words(n):
    x = subprocess.run(['pdftotext', '-bbox', '-f', str(n), '-l', str(n), pdf, '-'], capture_output=True, text=True).stdout
    return [(float(a), float(b), float(c), float(d), t) for a, b, c, d, t in
            re.findall(r'xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>', x)]

pages = {}; page_words = {}            # n -> grayscale page image
blocks = []           # (page, x0, x1, y0, y1, code)
tokens_by = {}        # code -> [(token, x rel. to column)]
cur_key = None
for n in range(FIRST, LAST + 1):
    ws = [w for w in words(n) if (TOP + (30 if n == FIRST else 0)) < w[1] < BOT]
    subprocess.run(['pdftoppm', '-r', str(DPI), '-f', str(n), '-l', str(n), '-png', pdf, f'{out}/pg'], capture_output=True)
    f = next(os.path.join(out, f) for f in os.listdir(out) if f.startswith('pg') and f.endswith(f'{n}.png'))
    pages[n] = Image.open(f).convert('L'); page_words[n] = ws
    two = any(re.fullmatch(r'\d+[A-K]', w[4]) and 285 <= w[0] <= 340 and any(v[4] in TITLES and abs(v[1] - w[1]) < 4 for v in ws) for w in ws) or sum(1 for w in ws if re.fullmatch(r'\d{1,2}', w[4]) and 288 <= w[0] <= 322) >= 3 and not any(w[0] < 288 < w[2] for w in ws)
    cols = [(0, MID), (MID, 596)] if two else [(0, 596)]
    heads = []   # (x, y, owner code)
    for i, w in enumerate(ws):
        same = [v for v in ws if v[0] > w[0] and abs(v[1] - w[1]) < 4]
        nxt = min(same, key=lambda v: v[0]) if same else None
        if re.fullmatch(r'\d+[A-K]', w[4]) and nxt and nxt[4] in TITLES:
            heads.append((w[0], w[1], w[4]))
        elif w[4] == 'Chapter' and nxt and re.fullmatch(r'\d+:', nxt[4]):   # chapter title + Kick off + Show what you know ride with the chapter's first topic
            heads.append((w[0], w[1], nxt[4][:-1] + 'A'))
    for x0, x1 in cols:
        hs = sorted([h for h in heads if x0 <= h[0] < x1], key=lambda h: h[1])
        cuts = [(TOP, cur_key)] + [(h[1] - 3, h[2]) for h in hs]
        for j, (y0, key) in enumerate(cuts):
            y1 = cuts[j + 1][0] if j + 1 < len(cuts) else BOT
            if j > 0: cur_key = key
            if key is None: continue
            inb = [w for w in ws if x0 <= w[0] < x1 and y0 <= w[1] < y1]
            if not inb: continue
            blocks.append((n, x0, x1, y0, y1, key))
            tokens_by.setdefault(key, []).extend((w[4], w[0] - x0) for w in sorted(inb, key=lambda w: (round(w[1] / 6), w[0])))

def labels(tokens):
    out, num, nxt_letter, last_num = [], None, 'a', 0
    from collections import Counter
    left = [round(x / 3) * 3 for t, x in tokens if re.fullmatch(r'\d{1,2}', t)]
    base = Counter(left).most_common(1)[0][0] if left else 0
    for t, x in tokens:
        if re.fullmatch(r'\d{1,2}', t) and int(t) == last_num + 1 and abs(x - base) < 9:
            if num is not None and not out[-1:] == [str(num)] and not any(l.startswith(str(num)) for l in out[-1:]): out.append(str(num))
            num, last_num, nxt_letter = t, int(t), 'a'
            out.append(t)
        elif num and t == nxt_letter:
            if out and out[-1] == num: out.pop()
            out.append(num + t); nxt_letter = chr(ord(t) + 1)
    return out

def owner(n, w):
    for b in blocks:
        if b[0] == n and b[1] <= w[0] < b[2] and b[3] <= w[1] < b[4]: return b[5]
    return None

def render(code):
    """The topic's answers laid out as in the book: per page, a full-width band from its first block to its last, other topics' blocks whitened."""
    pieces = []
    for n in sorted({b[0] for b in blocks if b[5] == code}):
        mine = [b for b in blocks if b[0] == n and b[5] == code]
        img = pages[n].copy()
        y0 = min(w[1] for w in page_words[n] if owner(n, w) == code) - 4
        y1 = max(w[3] for w in page_words[n] if owner(n, w) == code) + 4
        orig = pages[n]
        for b in blocks:   # other topics' areas are painted out; this topic's own areas are put back from the page
            if b[0] == n and b[5] != code:
                img.paste(255, (int(max(b[1] - 1, 0) * K), int(b[3] * K), int(min(b[2] + 1, 596) * K), int(b[4] * K)))
        for b in mine:
            box = (int(max(b[1] - 1, 0) * K), int(b[3] * K), int(min(b[2] + 1, 596) * K), int(b[4] * K))
            img.paste(orig.crop(box), box[:2])
        pieces.append(img.crop((int(28 * K), int(y0 * K), int(567 * K), int(min(y1, BOT) * K))))
    w = max(i.width for i in pieces); chunks = []
    for i in pieces:
        bb = Image.eval(i, lambda p: 255 - p).getbbox()
        chunks.append(i.crop((0, max(bb[1] - 6, 0), i.width, min(bb[3] + 6, i.height))) if bb else i)
    def squeeze(im, gap=60, keep=28):   # long empty bands (painted-out neighbours) shrink to a short gap
        px = im.load(); W, H = im.size
        blank = [sum(1 for x in range(0, W, 2) if px[x, y] < 150) <= 2 for y in range(H)]
        out_rows, y = [], 0
        while y < H:
            if blank[y]:
                z = y
                while z < H and blank[z]: z += 1
                out_rows.append((y, y + keep) if z - y > gap and 0 < y else (y, z)); y = z
            else:
                z = y
                while z < H and not blank[z]: z += 1
                out_rows.append((y, z)); y = z
        res = Image.new('L', (W, sum(b - a for a, b in out_rows)), 255); yy = 0
        for a, b in out_rows: res.paste(im.crop((0, a, W, b)), (0, yy)); yy += b - a
        return res
    chunks = [squeeze(c) for c in chunks]
    page = Image.new('L', (w, sum(c.height for c in chunks) + 10 * (len(chunks) - 1)), 255); y = 0
    for c in chunks: page.paste(c, (0, y)); y += c.height + 10
    return page

mapping = {}
for code in sorted({b[5] for b in blocks}, key=lambda c: (int(re.match(r'\d+', c).group()), c)):
    tid = topic_id.get(code)
    if not tid: print('!! no topic for', code); continue
    img = render(code)
    parts, y = [], 0
    while y < img.height:   # <= 3000px tall per image
        parts.append(img.crop((0, y, img.width, min(img.height, y + 3000)))); y += 3000
    files = []
    for k, p in enumerate(parts):
        f = f'{tid}-{k}.webp'; p.save(os.path.join(out, f), 'WEBP', quality=82); files.append(f)
    mapping[tid] = [{'key': code, 'title': f'{code} Answers', 'labels': labels(tokens_by[code]), 'images': files}]
json.dump(mapping, open(os.path.join(out, 'mapping.json'), 'w'), indent=1)
print(len(mapping), 'topics')
print('topics without answers:', [c for c in topic_id if topic_id[c] not in mapping])
