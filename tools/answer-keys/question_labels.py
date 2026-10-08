#!/usr/bin/env python3
"""Question-side labels for Cambridge CMS6 books: for every exercise / chapter review, the question
numbers and part letters ("1a", "1b", "2a"…) that the STUDENT is set — independent of which parts the
answers section prints. Reads items.json (node tools/answer-keys/pdf_text_fonts.mjs <book.pdf> items.json).
usage: qlabels.py items.json <last question page> > labels.json"""
import json, re, sys
from collections import OrderedDict

items = json.load(open(sys.argv[1]))
last = int(sys.argv[2])
by_page = {}
for it in items:
    if it['p'] <= last:
        by_page.setdefault(it['p'], []).append(it)

def font(it): return it['font'].split('+')[-1]
TOK = re.compile(r'\d{1,2}[a-z]?|[a-z]|i{2,3}|iv|vi{1,3}')
labels = OrderedDict()
tokens = {}
allx = {}
state = None         # current key
review_n = None      # chapter number while a review is running
for p in sorted(by_page):
    its = sorted(by_page[p], key=lambda i: (round(i['y']), i['x']))
    for it in its:
        s, f, y = it['s'].strip(), font(it), it['y']
        if f == 'Chivo-ExtraBold' and re.fullmatch(r'Exercise\s+\d+[A-Z]', s):
            state = s.split()[1]; tokens.setdefault(state, [])
        elif f == 'Chivo-ExtraBold' and it['h'] >= 15:
            state = None   # next section / chapter opener ends the exercise or review
        elif f == 'Chivo-Bold' and re.fullmatch(r'Chapter\s+(\d+)\s+Review', s, re.I) and 60 < y < 120:
            review_n = int(re.search(r'\d+', s).group()); state = f'{review_n}R'; tokens.setdefault(state, [])
        elif state and f == 'Chivo-Black' and 45 < y < 785 and TOK.fullmatch(s):
            tokens[state].append((p, round(y), it['x'], s))
            allx.setdefault(p, []).append((it['x'], s))

def build(toks):
    # i / v / x are also roman numerals: keep them as part letters only when they line up with the page's other part letters
    def keep(t):
        if t[3] not in ('i', 'v', 'x') and not re.fullmatch(r'i{2,3}|iv|vi{1,3}', t[3]): return True
        xs = [x for x, tt in allx.get(t[0], []) if re.fullmatch(r'[a-hj-uwyz]', tt)]
        return bool(xs) and any(abs(t[2] - x) <= 6 for x in xs)
    toks = [t for t in toks if keep(t)]
    # reading order: page, then lines top-to-bottom, left-to-right within a line
    toks = sorted(toks, key=lambda t: (t[0], t[1], t[2]))
    lines, last_key = [], None
    for t in toks:
        if lines and lines[-1][0] == t[0] and abs(lines[-1][1] - t[1]) < 4:
            lines[-1][2].append(t)
        else:
            lines.append([t[0], t[1], [t]])
    ordered = [t for ln in lines for t in sorted(ln[2], key=lambda t: t[2])]
    parts, cur, seen = OrderedDict(), 0, None
    for *_, s in ordered:
        m = re.fullmatch(r'(\d{1,2})([a-z])?', s)
        if m and cur <= int(m.group(1)) <= cur + 3 and (int(m.group(1)) != cur or m.group(2)) or (m and cur == 0 and int(m.group(1)) == 1):
            cur = int(m.group(1)); parts.setdefault(cur, [])
            if m.group(2) and m.group(2) not in parts[cur]: parts[cur].append(m.group(2))
        elif re.fullmatch(r'[a-z]|i{2,3}|iv|vi{1,3}', s) and cur and s not in parts[cur]:
            parts[cur].append(s)
    top = max(parts) if parts else 0
    out = []
    PRED = {'i': 'h', 'v': 'u', 'x': 'w'}
    for n in range(1, top + 1):
        ps = parts.get(n, [])
        # a question set out as (a)(b)(c) with roman items (i)(ii)(iii) in its stem: marks go on the letters;
        # roman-only questions keep their roman parts. A lone i/v/x is a letter part only after h/u/w.
        letters = [x for x in ps if len(x) == 1 and (x not in PRED or PRED[x] in ps)]
        ps = letters or ps
        out += [f'{n}{x}' for x in ps] if ps else [str(n)]
    return out

json.dump({k: build(v) for k, v in tokens.items()}, sys.stdout)
