"""Hand-drawn SVG figures for the Y9 papers. Labels placed outward from sides / inside angle wedges."""
import math

STROKE = '#334155'
FONT = "font-family='Times New Roman, serif' font-size='15' fill='#111'"


def _t(x, y, s, italic=False, anchor='middle'):
    st = " font-style='italic'" if italic else ''
    return f"<text x='{x:.1f}' y='{y:.1f}' text-anchor='{anchor}' dominant-baseline='central' {FONT}{st}>{s}</text>"


def _unit(vx, vy):
    L = math.hypot(vx, vy)
    return vx / L, vy / L


def tri(P, vlabels=None, sides=None, right=None, angles=None, w=300, h=200, note=None):
    """P: dict name->(x,y). sides: list of (n1,n2,label). right: vertex name. angles: list of (vertex,label)."""
    global BOXES
    BOXES = []
    names = list(P)
    cx = sum(p[0] for p in P.values()) / 3
    cy = sum(p[1] for p in P.values()) / 3
    out = [f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {w} {h}' width='100%' style='max-width:{w}px'>"]
    pts = ' '.join(f'{P[n][0]},{P[n][1]}' for n in names)
    out.append(f"<polygon points='{pts}' fill='none' stroke='{STROKE}' stroke-width='2' stroke-linejoin='round'/>")
    if right:
        R = P[right]
        a, b = [P[n] for n in names if n != right]
        ua = _unit(a[0] - R[0], a[1] - R[1]); ub = _unit(b[0] - R[0], b[1] - R[1])
        s = 12
        p1 = (R[0] + ua[0] * s, R[1] + ua[1] * s); p3 = (R[0] + ub[0] * s, R[1] + ub[1] * s)
        p2 = (p1[0] + ub[0] * s, p1[1] + ub[1] * s)
        out.append(f"<polyline points='{p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f} {p3[0]:.1f},{p3[1]:.1f}' fill='none' stroke='{STROKE}' stroke-width='1.4'/>")
    for (n1, n2, lab) in (sides or []):
        a, b = P[n1], P[n2]
        mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        nx, ny = _unit(-(b[1] - a[1]), b[0] - a[0])
        if (mx - cx) * nx + (my - cy) * ny < 0:
            nx, ny = -nx, -ny
        import re
        tw = len(re.sub('<[^>]+>', '', lab)) * 7.4; th = 15
        off = 6 + abs(nx) * tw / 2 + abs(ny) * th / 2
        out.append(_t(mx + nx * off, my + ny * off, lab))
        BOXES.append((mx + nx * off, my + ny * off, tw, th, lab))
    for (v, lab) in (angles or []):
        V = P[v]
        a, b = [P[n] for n in names if n != v]
        ua = _unit(a[0] - V[0], a[1] - V[1]); ub = _unit(b[0] - V[0], b[1] - V[1])
        r = 24
        A1 = (V[0] + ua[0] * r, V[1] + ua[1] * r); B1 = (V[0] + ub[0] * r, V[1] + ub[1] * r)
        cross = ua[0] * ub[1] - ua[1] * ub[0]
        sweep = 1 if cross > 0 else 0
        out.append(f"<path d='M{A1[0]:.1f},{A1[1]:.1f} A{r},{r} 0 0 {sweep} {B1[0]:.1f},{B1[1]:.1f}' fill='none' stroke='{STROKE}' stroke-width='1.3'/>")
        bx, by = _unit(ua[0] + ub[0], ua[1] + ub[1])
        ang = math.acos(max(-1, min(1, ua[0] * ub[0] + ua[1] * ub[1])))
        segs0 = [(P[names[i]], P[names[(i + 1) % 3]]) for i in range(3)]
        def clear(cx_, cy_, bw, bh):
            for (a, b) in segs0:
                for k in range(201):
                    t = k / 200; x = a[0] + (b[0] - a[0]) * t; y = a[1] + (b[1] - a[1]) * t
                    if abs(x - cx_) < bw / 2 + 3 and abs(y - cy_) < bh / 2 + 3:
                        return False
            return True
        rl = r + 16
        while not clear(V[0] + bx * rl, V[1] + by * rl, len(lab) * 7.4, 14):
            rl += 2
        out.append(_t(V[0] + bx * rl, V[1] + by * rl, lab, italic=lab in ('θ', 'x°')))
        BOXES.append((V[0] + bx * rl, V[1] + by * rl, len(lab) * 7.4, 14, lab))
    for n, lab in (vlabels or {}).items():
        V = P[n]
        ux, uy = _unit(V[0] - cx, V[1] - cy)
        out.append(_t(V[0] + ux * 16, V[1] + uy * 16, lab, italic=True))
        BOXES.append((V[0] + ux * 16, V[1] + uy * 16, 9, 14, lab))
    if note:
        out.append(f"<text x='{w-6}' y='{h-6}' text-anchor='end' font-family='Arial' font-size='10' fill='#555'>{note}</text>")
    out.append('</svg>')
    segs = [(P[names[i]], P[names[(i + 1) % 3]]) for i in range(3)]
    for (bx_, by_, bw, bh, lab) in BOXES:
        for (a, b) in segs:
            for k in range(201):
                t = k / 200; x = a[0] + (b[0] - a[0]) * t; y = a[1] + (b[1] - a[1]) * t
                if abs(x - bx_) < bw / 2 + 3 and abs(y - by_) < bh / 2 + 3:
                    raise SystemExit(f'label {lab!r} touches a side')
        if bx_ - bw / 2 < 0 or by_ - bh / 2 < 0 or bx_ + bw / 2 > w or by_ + bh / 2 > h:
            raise SystemExit(f'label {lab!r} outside viewBox')
    return ''.join(out)


BOXES = []
I = lambda s: f"<tspan font-style='italic'>{s}</tspan>"

# ---------------- Paper A ----------------
A_PYTH = tri({'A': (80, 25), 'B': (80, 175), 'C': (280, 175)}, right='B',
             sides=[('A', 'B', '16 cm'), ('B', 'C', '12 cm'), ('A', 'C', I('x') + ' cm')], w=340, h=215,
             note='NOT TO SCALE')
# ∠C = 90°, ∠A = 70°, AB = 20, BC = x
A_TRIG1 = tri({'A': (70, 180), 'C': (150, 180), 'B': (150, 30)}, right='C',
              vlabels={'A': 'A', 'B': 'B', 'C': 'C'},
              sides=[('A', 'B', '20 cm'), ('B', 'C', I('x') + ' cm')], angles=[('A', '70°')], w=260, h=215,
              note='NOT TO SCALE')
# ∠A = 90°, AC = 12, AB = 5, θ at B
A_TRIG2 = tri({'A': (70, 160), 'B': (70, 70), 'C': (286, 160)}, right='A',
              vlabels={'A': 'A', 'B': 'B', 'C': 'C'},
              sides=[('A', 'B', '5 cm'), ('A', 'C', '12 cm')], angles=[('B', 'θ')], w=340, h=195,
              note='NOT TO SCALE')


def trapezium():
    w, h = 340, 175
    TL, TR, BR, BL = (70, 30), (250, 30), (300, 140), (40, 140)
    s = [f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {w} {h}' width='100%' style='max-width:{w}px'>",
         f"<polygon points='{TL[0]},{TL[1]} {TR[0]},{TR[1]} {BR[0]},{BR[1]} {BL[0]},{BL[1]}' fill='none' stroke='{STROKE}' stroke-width='2'/>",
         f"<line x1='120' y1='30' x2='120' y2='140' stroke='{STROKE}' stroke-width='1.3' stroke-dasharray='5 4'/>",
         f"<polyline points='120,128 132,128 132,140' fill='none' stroke='{STROKE}' stroke-width='1.2'/>",
         _t(160, 16, '78 cm'), _t(170, 157, '93 cm'), _t(146, 85, '54 cm'),
         f"<text x='{w-6}' y='{h-4}' text-anchor='end' font-family='Arial' font-size='10' fill='#555'>NOT TO SCALE</text>",
         '</svg>']
    return ''.join(s)


A_TRAP = trapezium()

# ---------------- Paper B ----------------
B_PYTH = tri({'A': (70, 30), 'B': (70, 160), 'C': (260, 160)}, right='B',
             sides=[('A', 'B', I('x') + ' cm'), ('B', 'C', '8 cm'), ('A', 'C', '12 cm')], w=330, h=200,
             note='NOT TO SCALE')
# angle 38° at A, opposite side BC = 9.4, hypotenuse AB = x
B_TRIG1 = tri({'A': (40, 165), 'C': (250, 165), 'B': (250, 30)}, right='C',
              sides=[('A', 'B', I('x') + ' cm'), ('B', 'C', '9.4 cm')], angles=[('A', '38°')], w=320, h=195,
              note='NOT TO SCALE')
# opposite 7.2, adjacent 10.5, θ at A
B_TRIG2 = tri({'A': (40, 160), 'C': (260, 160), 'B': (260, 45)}, right='C',
              sides=[('A', 'C', '10.5 m'), ('B', 'C', '7.2 m')], angles=[('A', 'θ')], w=330, h=190,
              note='NOT TO SCALE')


def prism():
    # right-angled triangle cross-section legs 6 (vertical) and 8 (horizontal), length 15 receding
    w, h = 360, 200
    F1, F2, F3 = (40, 170), (40, 70), (175, 170)          # front face: right angle at F1
    dx, dy = 140, -50
    B1, B2, B3 = [(x + dx, y + dy) for (x, y) in (F1, F2, F3)]
    L = lambda a, b, dash=False: (f"<line x1='{a[0]}' y1='{a[1]}' x2='{b[0]}' y2='{b[1]}' stroke='{'#64748b' if dash else STROKE}' "
                                   f"stroke-width='{1.3 if dash else 2}'{' stroke-dasharray=\"5 4\"' if dash else ''}/>")
    s = [f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {w} {h}' width='100%' style='max-width:{w}px'>",
         f"<polygon points='{F1[0]},{F1[1]} {F2[0]},{F2[1]} {F3[0]},{F3[1]}' fill='#e0e7ff' fill-opacity='0.55' stroke='none'/>",
         L(F1, F2), L(F2, F3), L(F3, F1), L(F2, B2), L(F3, B3), L(B2, B3),
         L(F1, B1, True), L(B1, B2, True), L(B1, B3, True),
         f"<polyline points='40,158 52,158 52,170' fill='none' stroke='{STROKE}' stroke-width='1.2'/>",
         _t(18, 120, '6 cm'), _t(107, 186, '8 cm'), _t(258, 155, '15 cm'),
         f"<text x='{w-6}' y='{h-4}' text-anchor='end' font-family='Arial' font-size='10' fill='#555'>NOT TO SCALE</text>",
         '</svg>']
    return ''.join(s)


B_PRISM = prism()
