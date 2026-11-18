import math, itertools
# Helper: collision-free labelled function graphs as hand-built SVG (see CLAUDE.md figure rules).
# lib.py (svgw, tx, ln, dot, n) lives in the author scratch folder: copy those 5 tiny helpers when reusing.
from lib import *
_uid = itertools.count(1)
def _w(t,size): return 0.62*size*len(t.replace('−','-'))+4
def plot(curves, xr, yr, W=440, H=320, lab=1, pts=(), extra='', maxw=440, arrows=True, labels=True, stepy=None, tags=()):
    u = next(_uid); x0, x1 = xr; y0, y1 = yr; m = 28
    pw, ph = W - 2 * m, H - 2 * m
    sx = lambda x: m + (x - x0) / (x1 - x0) * pw
    sy = lambda y: m + (y1 - y) / (y1 - y0) * ph
    b = f'<clipPath id="c{u}"><rect x="{m}" y="{m}" width="{pw}" height="{ph}"/></clipPath>'
    for gx in range(math.ceil(x0), math.floor(x1) + 1): b += ln(sx(gx), m, sx(gx), m + ph, '#e2e8f0', 1)
    for gy in range(math.ceil(y0), math.floor(y1) + 1): b += ln(m, sy(gy), m + pw, sy(gy), '#e2e8f0', 1)
    b += ln(m, sy(0), m + pw, sy(0), '#334155', 1.6) + ln(sx(0), m, sx(0), m + ph, '#334155', 1.6)
    b += f'<path d="M{n(m+pw+7)},{n(sy(0))} l-9,-4.5 v9z" fill="#334155"/><path d="M{n(sx(0))},{n(m-7)} l-4.5,9 h9z" fill="#334155"/>'
    occ = []   # pixel points that labels must avoid
    occ += [(m + i * 2, sy(0)) for i in range(int(pw / 2) + 1)] + [(sx(0), m + i * 2) for i in range(int(ph / 2) + 1)]
    cl = ''
    for c in curves:
        fn, lo, hi = c[:3]; col = c[3] if len(c) > 3 else '#1e293b'; w = c[4] if len(c) > 4 else 2.6; dash = c[5] if len(c) > 5 else None
        segs, cur = [], []
        N = 900
        for i in range(N + 1):
            x = lo + (hi - lo) * i / N
            try: y = fn(x)
            except Exception: y = None
            if y is None or y != y or y < y0 - 0.02 * (y1 - y0) or y > y1 + 0.02 * (y1 - y0):
                if cur: segs.append(cur); cur = []
            else: cur.append((x, y))
        if cur: segs.append(cur)
        for sg in segs:
            if len(sg) < 2: continue
            occ += [(sx(x), sy(y)) for x, y in sg]
            cl += f'<polyline points="{" ".join(f"{n(sx(x))},{n(sy(y))}" for x, y in sg)}" fill="none" stroke="{col}" stroke-width="{w}" stroke-linejoin="round" stroke-linecap="round"' + (f' stroke-dasharray="{dash}"' if dash else '') + '/>'
            if arrows and len(c) <= 6:
                for (xa, ya), (xb, yb) in ((sg[-2], sg[-1]), (sg[1], sg[0])):
                    X, Y = (sg[-1] if (xa, ya) == sg[-2] else sg[0])
                    if abs(Y - y1) < 0.12 * (y1 - y0) or abs(Y - y0) < 0.12 * (y1 - y0):
                        dx, dy = sx(xb) - sx(xa), sy(yb) - sy(ya); L = math.hypot(dx, dy) or 1; dx, dy = dx / L, dy / L
                        px, py = sx(xb), sy(yb)
                        cl += f'<path d="M{n(px+dx*9)},{n(py+dy*9)} L{n(px-dy*4.5)},{n(py+dx*4.5)} L{n(px+dy*4.5)},{n(py-dx*4.5)}z" fill="{col}"/>'
    b += f'<g clip-path="url(#c{u})">{cl}</g>'
    for (x, y, *_r) in pts: occ.append((sx(x), sy(y)))
    placed = []
    def free(cx, cy, w, h, pad=3):
        L, R, T, B = cx - w / 2 - pad, cx + w / 2 + pad, cy - h / 2 - pad, cy + h / 2 + pad
        if L < 2 or R > W - 2 or T < 2 or B > H - 2: return False
        if any(L <= px <= R and T <= py <= B for px, py in occ): return False
        for (a, bb, c2, d) in placed:
            if not (R < a or L > c2 or B < bb or T > d): return False
        return True
    def put(text, ax, ay, col, size=12, w=700, it=False, cands=None, rmin=12):
        tw, th = _w(text, size), size + 2
        if cands is None:
            cands = [(dx * r, dy * r) for r in (rmin, rmin + 8, rmin + 16, rmin + 26) for dx, dy in ((1, -1), (-1, -1), (1, 1), (-1, 1), (0, -1), (0, 1), (1, 0), (-1, 0))]
        for dx, dy in cands:
            cx, cy = ax + dx, ay + dy
            if free(cx, cy, tw, th):
                placed.append((cx - tw / 2 - 1, cy - th / 2 - 1, cx + tw / 2 + 1, cy + th / 2 + 1))
                return tx(cx, cy + size * 0.35, text, size, col, 'middle', w, it)
        raise AssertionError('no free spot for label ' + text)
    lb = tx(m + pw + 10, sy(0) + 16, 'x', 13, '#334155', 'start', 600, True) + tx(sx(0) + 10, m - 8, 'y', 13, '#334155', 'start', 600, True)
    if labels:
        for gx in range(math.ceil(x0), math.floor(x1) + 1):
            if gx and gx % lab == 0:
                t = str(gx).replace('-', '−')
                for off in (13, 25, -12):
                    cx, cy = sx(gx), sy(0) + off
                    if free(cx, cy, _w(t, 10), 11, 1):
                        placed.append((cx - _w(t, 10) / 2, cy - 6, cx + _w(t, 10) / 2, cy + 6)); lb += tx(cx, cy + 3.5, t, 10, '#64748b', 'middle', 500); break
        for gy in range(math.ceil(y0), math.floor(y1) + 1):
            if gy and gy % (stepy or lab) == 0:
                t = str(gy).replace('-', '−')
                for off in (-13, -26, 13):
                    cx, cy = sx(0) + off, sy(gy)
                    if free(cx, cy, _w(t, 10), 11, 1):
                        placed.append((cx - _w(t, 10) / 2, cy - 6, cx + _w(t, 10) / 2, cy + 6)); lb += tx(cx, cy + 3.5, t, 10, '#64748b', 'middle', 500); break
    for p in pts:
        x, y, label, col, dx, dy = p
        b += dot(sx(x), sy(y), 4.6, col)
    for p in pts:
        x, y, label, col, dx, dy = p
        if label: lb += put(label, sx(x), sy(y), col, 12, 700, False, rmin=14)
    for (text, x, y, col, it) in tags:
        lb += put(text, sx(x), sy(y), col, 14, 600, it, rmin=16)
    return svgw(W, H, b + lb + extra, maxw), sx, sy
def P_(*a, **k): return plot(*a, **k)[0]
