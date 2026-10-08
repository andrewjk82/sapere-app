#!/usr/bin/env python3
"""Question-side labels for ICE-EM Mathematics (Years 7-10, Cambridge 3rd ed. layout): exercise headings are
Syntax Bold "Exercise 1A" (sometimes split into pieces), section starts are huge Syntax Roman codes ("1B"),
"Review exercise" / "Challenge exercise" are big Syntax Bold. Question numbers and part letters are bold Times.
usage: qlabels_iceem.py items.json <last question page> [cfg-json] > labels.json"""
import json, re, sys
from collections import OrderedDict

items = json.load(open(sys.argv[1])); last = int(sys.argv[2])
CFG = {'label_font': 'TimesLTStd-Bold', 'label_h': [11.0, 13.0], 'key_prefix': '', 'chapter_from_code': True}
if len(sys.argv) > 3: CFG.update(json.loads(sys.argv[3]))
def font(i): return i['font'].split('+')[-1]
by_page = {}
for it in items:
    if it['p'] <= last: by_page.setdefault(it['p'], []).append(it)

def lines(its):
    its = sorted(its, key=lambda i: (round(i['y']), i['x'])); out = []
    for it in its:
        if out and abs(out[-1][0] - it['y']) < 2.5: out[-1][1].append(it)
        else: out.append([it['y'], [it]])
    return out

tokens, allx, state, chap = {}, {}, None, None
block_states = set()
PRED = {'i': 'h', 'v': 'u', 'x': 'w'}
for p in sorted(by_page):
    for y, row in lines(by_page[p]):
        row = sorted(row, key=lambda i: i['x'])
        syn = [i for i in row if 'Syntax' in font(i)]
        big = [i for i in syn if i['h'] >= 60]
        if big:                                   # section code, e.g. "1" + "B" pieces
            txt = ''.join(i['s'].strip() for i in big)
            m = re.match(r'(\d+)', txt)
            if m:
                chap = int(m.group(1)); state = None
                # "Review and problem-solving" chapters have no Exercise headings: each section code is its own block
                if chap in CFG.get('block_chapters', []):
                    state = re.sub(r'\s', '', txt).upper(); tokens.setdefault(state, []); block_states.add(state)
                continue
            # a drop-cap (R / C) of "Review exercise" / "Challenge exercise" is also huge: fall through to the heading check
        bold16 = ''.join(i['s'] for i in [i for i in syn if 11.5 <= i['h'] <= 17 and 'Bold' in font(i)]).replace(' ', '')
        m = re.search(r'^(?:e)?xercise(\d+)([A-Za-z])$', bold16, re.I)
        if m:
            state = f'{m.group(1)}{m.group(2).upper()}'; tokens.setdefault(state, []); continue
        head24 = ''.join(i['s'] for i in syn if i['h'] >= 24).replace(' ', '').capitalize()
        if head24.startswith('Reviewexercise') or head24.startswith('Challengeexercise'):
            state = f"{chap}{'REVIEW' if head24.startswith('Review') else 'CHALLENGE'}"; tokens.setdefault(state, []); continue
        if syn and any(i['h'] >= 39 for i in syn): state = None; continue
        if not state: continue
        if state in block_states:
            hb = ''.join(i['s'] for i in syn if 'Bold' in font(i) and 13 <= i['h'] <= 15)
            mb = re.match(r'\s*Chapter\s+(\d+)\s*:', hb)
            if mb: tokens[state].append((p, round(y), 0, 'H' + mb.group(1)))
        for it in row:
            s = it['s'].strip()
            if font(it) == CFG['label_font'] and CFG['label_h'][0] <= it['h'] <= CFG['label_h'][1] and 40 < it['y'] < 760 and re.fullmatch(r'\d{1,2}|[a-z]|i{2,3}|iv|vi{1,3}', s):
                tokens[state].append((p, round(it['y']), it['x'], s)); allx.setdefault(p, []).append((it['x'], s))

def build(toks, blocks=False):
    def keep(t):
        if t[3].startswith('H'): return True
        if t[3] not in ('i', 'v', 'x') and not re.fullmatch(r'i{2,3}|iv|vi{1,3}', t[3]): return True
        xs = [x for x, tt in allx.get(t[0], []) if re.fullmatch(r'[a-hj-uwyz]', tt)]
        return bool(xs) and any(abs(t[2] - x) <= 6 for x in xs)
    toks = [t for t in toks if keep(t)]
    toks = sorted(toks, key=lambda t: (t[0], t[1], t[2]))
    ls = []
    for t in toks:
        if ls and ls[-1][0] == t[0] and abs(ls[-1][1] - t[1]) < 4: ls[-1][2].append(t)
        else: ls.append([t[0], t[1], [t]])
    ordered = [t for ln in ls for t in sorted(ln[2], key=lambda t: t[2])]
    out = []
    def flush(parts, prefix):
        top = max(parts) if parts else 0
        for n in range(1, top + 1):
            ps = parts.get(n, [])
            letters = [x for x in ps if len(x) == 1 and (x not in PRED or PRED[x] in ps)]
            ps = sorted(letters) if letters else ps
            out.extend([f'{prefix}{n}{x}' for x in ps] if ps else [f'{prefix}{n}'])
    parts, cur, prefix = OrderedDict(), 0, ''
    for *_, s in ordered:
        if s.startswith('H'):                      # a "Chapter N:" block of a review chapter: numbering restarts
            flush(parts, prefix); parts, cur, prefix = OrderedDict(), 0, s[1:] + '.'
        elif re.fullmatch(r'\d{1,2}', s):
            n = int(s)
            if (cur <= n <= cur + 3 and n != cur) or (cur == 0 and n == 1): cur = n; parts.setdefault(cur, [])
        elif cur and s not in parts[cur]: parts[cur].append(s)
    flush(parts, prefix)
    return out
json.dump({CFG.get('key_prefix', '') + k: build(v) for k, v in tokens.items()}, sys.stdout)
