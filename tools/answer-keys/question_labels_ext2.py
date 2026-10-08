#!/usr/bin/env python3
"""Question-side labels for the Sadler & Ward Extension 2 book (anonymous fonts): numbers are "7." items,
parts "(a)" items, exercises "Exercise" + "1A", sections "1B Title" headings. usage: <items.json>... > labels.json"""
import json, re, sys
from collections import OrderedDict

def build(toks):
    toks = sorted(toks, key=lambda t: (t[0], t[1], t[2]))
    lines = []
    for t in toks:
        if lines and lines[-1][0] == t[0] and abs(lines[-1][1] - t[1]) < 4: lines[-1][2].append(t)
        else: lines.append([t[0], t[1], [t]])
    ordered = [t for ln in lines for t in sorted(ln[2], key=lambda t: t[2])]
    parts, cur = OrderedDict(), 0
    for *_, kind, v in ordered:
        if kind == 'N':
            n = int(v)
            if (cur <= n <= cur + 3 and n != cur) or (cur == 0 and n == 1):
                cur = n; parts.setdefault(cur, [])
        elif cur and v not in parts[cur]:
            parts[cur].append(v)
    top = max(parts) if parts else 0
    PRED = {'i': 'h', 'v': 'u', 'x': 'w'}
    out = []
    for n in range(1, top + 1):
        ps = parts.get(n, [])
        letters = [x for x in ps if len(x) == 1 and (x not in PRED or PRED[x] in ps)]
        ps = sorted(letters) if letters else ps   # Ext2 sets parts in columns ((a)(c)(e) above (b)(d)(f)): list them a, b, c…
        out += [f'{n}{x}' for x in ps] if ps else [str(n)]
    return out

res = {}
for path in sys.argv[1:]:
    items = json.load(open(path))
    state, pending = None, None
    tokens = {}
    for it in sorted(items, key=lambda i: (i['p'], round(i['y']), i['x'])):
        s, y, h = it['s'].strip(), it['y'], it['h']
        if h >= 15 and s == 'Exercise':
            pending = (it['p'], round(y)); continue
        if pending and h >= 15 and re.fullmatch(r'\d+[A-Z]', s) and it['p'] == pending[0] and abs(round(y) - pending[1]) < 3:
            state = s; tokens.setdefault(state, []); pending = None; continue
        if h >= 17 and re.match(r'\d+[A-Z] ', s):
            state = None; continue
        if not state or not (50 < y < 790): continue
        m = re.fullmatch(r'(\d{1,2})\.', s)
        if m and 85 <= it['x'] <= 100:
            tokens[state].append((it['p'], round(y), it['x'], 'N', m.group(1)))
        else:
            m = re.match(r'\(([a-z])\)(\s|$)', s)
            if m: tokens[state].append((it['p'], round(y), it['x'], 'P', m.group(1)))
    for k, v in tokens.items(): res[k] = build(v)
json.dump(res, sys.stdout)
