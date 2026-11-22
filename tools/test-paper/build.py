"""Secret Study test-paper generator (standard format, 2026-11).

Usage:  python3 tools/test-paper/build.py tools/test-paper/papers/<spec>.py
Writes  tools/test-paper/out/<SLUG>_<code>.pdf and <SLUG>_<code>_Answers.pdf for every paper in the spec.
See .agents/skills/sapere-test-paper/SKILL.md for the format and authoring rules.
"""
import sys, os, base64, importlib.util, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
KX = 'file://' + ROOT + '/node_modules/katex/dist/'
ROMAN = 'abcdefgh'
LOGO = 'data:image/png;base64,' + base64.b64encode(open(os.path.join(HERE, 'logo_purple.png'), 'rb').read()).decode()

TOPICS = []  # set from the spec
YEAR = 'Year 9'  # set from the spec

# lines of working space per mark (group-paper style ruled lines)
LINES = {1: 4, 2: 6, 3: 9}

CSS = """
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
:root { --ink:#1e1b4b; --violet:#7c3aed; --lav:#a78bfa; --lav-50:#f5f3ff; --lav-100:#ede9fe; --lav-200:#ddd6fe; --muted:#64748b; }
@page { size: A4; margin: 15mm 15mm 16mm 15mm; }
* { box-sizing: border-box; }
body { margin:0; font-family: 'Inter', Arial, sans-serif; color: var(--ink); font-size: 11pt; }
.serif, .qtext, .opt, .part-text { font-family: 'Lora', Georgia, 'Times New Roman', serif; font-size: 12pt; line-height: 1.55; }
.katex { font-size: 1.08em; }

/* ---------- cover ---------- */
.cover { height: 263mm; display:flex; flex-direction:column; justify-content:space-between; page-break-after: always; position:relative; }
.cover-top { display:flex; justify-content:space-between; align-items:center; padding-bottom: 16px; border-bottom: 2px solid var(--lav-200); }
.brand { display:flex; align-items:center; gap: 14px; }
.brand img { height: 46px; }
.brand .bar { width:5px; align-self:stretch; background: var(--violet); border-radius: 3px; }
.brand .s1 { font-size: 20pt; font-weight: 900; letter-spacing: .1em; color: var(--violet); line-height:1; }
.brand .s2 { font-size: 8.5pt; font-weight: 700; letter-spacing: .32em; color: var(--violet); opacity:.6; margin-top: 5px; }
.meta { text-align:right; font-size: 9.5pt; font-weight: 700; color: var(--muted); line-height: 1.6; }
.cover-mid { text-align:center; }
.pill { display:inline-block; background: var(--lav-100); color: var(--violet); font-weight: 800; font-size: 9pt;
  letter-spacing: .18em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid var(--lav-200); }
.ctitle { font-size: 38pt; font-weight: 900; letter-spacing: -.03em; margin: 14px 0 4px; line-height: 1.05; }
.ctitle span { color: var(--violet); }
.csub { font-size: 13pt; font-weight: 600; color: var(--muted); }
.student { display:grid; grid-template-columns: 1.4fr 1fr; gap: 10px 22px; margin: 0 4px; }
.field { border-bottom: 1.5px solid var(--ink); padding: 14px 0 4px; font-size: 9pt; font-weight: 800; color: var(--muted); letter-spacing:.06em; text-transform: uppercase; }
.ibox { border: 2px solid var(--lav); border-radius: 16px; padding: 18px 22px; background: var(--lav-50); }
.ititle { font-size: 10pt; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; border-bottom: 1px solid var(--lav-200); padding-bottom: 7px; margin-bottom: 12px; }
.times { display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 12px; }
.tbox { background:#fff; border:1px solid var(--lav-200); border-radius: 12px; padding: 9px 14px; }
.tl { font-size: 7.5pt; font-weight: 800; color: var(--muted); text-transform: uppercase; letter-spacing: .05em; }
.tv { font-size: 14pt; font-weight: 900; }
.ilist { margin: 0; padding-left: 20px; font-size: 9.8pt; color:#334155; } .ilist li { margin-bottom: 5px; }
.lower { display:grid; grid-template-columns: 1.55fr 1fr; gap: 22px; align-items:start; }
.thead { font-size: 8.5pt; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
.tgrid { display:grid; grid-template-columns: 1fr 1fr; gap: 5px 14px; font-size: 9pt; font-weight: 600; }
.tgrid div::before { content:'•'; color: var(--lav); margin-right: 6px; font-size: 12pt; }
.marks { width:100%; border-collapse: separate; border-spacing:0; border:2px solid var(--ink); border-radius: 12px; overflow:hidden; font-size: 9.5pt; }
.marks th { background: var(--violet); color:#fff; font-weight: 800; padding: 6px 8px; text-align:left; }
.marks td { padding: 9px 8px; border-top: 1px solid var(--lav-200); font-weight: 700; }
.marks td:last-child { text-align:right; color: var(--muted); }
.marks tr.tot td { background: var(--lav-100); font-weight: 900; color: var(--ink); }

/* ---------- question pages ---------- */
.sec { display:flex; align-items:center; gap: 12px; background: var(--lav-100); border-left: 6px solid var(--violet);
  border-radius: 10px; padding: 10px 16px; margin: 0 0 18px; page-break-after: avoid; }
.sec .sn { font-size: 12.5pt; font-weight: 900; } .sec .sd { font-size: 9.5pt; color: var(--muted); font-weight: 600; margin-left:auto; }
.mc { display:flex; gap: 12px; margin: 0 0 56px; page-break-inside: avoid; break-inside: avoid; }
.qn { flex: 0 0 34px; height: 30px; border-radius: 9px; background: var(--violet); color:#fff; font-weight: 900; font-size: 11pt;
  display:flex; align-items:center; justify-content:center; }
.qn.sa { background: var(--ink); }
.qb { flex:1; padding-top: 3px; }
.opts { display:grid; grid-template-columns: 1fr 1fr; gap: 20px 28px; margin-top: 18px; }
.opt { display:flex; align-items:center; gap: 10px; }
.bub { flex: 0 0 24px; height: 24px; border-radius: 50%; border: 1.6px solid var(--lav); color: var(--violet);
  font-family: Inter, Arial, sans-serif; font-weight: 800; font-size: 9.5pt; display:flex; align-items:center; justify-content:center; }
.q { display:flex; gap: 12px; margin: 0 0 8px; }
.part { display:flex; gap: 10px; margin: 12px 0 0; }
.pl { flex: 0 0 26px; font-weight: 800; color: var(--violet); padding-top: 2px; }
.ptext { flex:1; }
.mk { flex: 0 0 auto; align-self:flex-start; font-size: 8.5pt; font-weight: 800; color: var(--violet); background: var(--lav-100);
  border-radius: 6px; padding: 2px 8px; margin-top: 3px; white-space: nowrap; }
.ws { margin: 6px 0 4px 34px; }
.ws div { height: 30px; border-bottom: 1px solid #cbd5e1; }
.keep { page-break-inside: avoid; break-inside: avoid; }
.fig { margin: 10px 0 6px; } .fig svg { display:block; }
.nw { white-space: nowrap; }
.end { margin: 26px auto 0; text-align:center; font-weight: 900; letter-spacing: .25em; color: var(--violet); font-size: 10pt; }
.pb { page-break-before: always; }

/* ---------- answer key ---------- */
.khead { display:flex; justify-content:space-between; align-items:center; border-bottom: 2px solid var(--lav-200); padding-bottom: 12px; margin-bottom: 16px; }
.khead h1 { font-size: 17pt; margin: 0; font-weight: 900; } .khead h1 span { color: var(--violet); }
.key { border-collapse: collapse; width: 100%; font-size: 10.5pt; margin-bottom: 18px; }
.key td { vertical-align: top; padding: 6px 8px; border-bottom: 1px solid var(--lav-200); }
.key td:first-child { font-weight: 900; color: var(--violet); white-space: nowrap; width: 54px; }
.key td:nth-child(2) { font-weight: 800; width: 34px; }
.key tr:nth-child(even) td { background: #faf8ff; }
.src { color:#94a3b8; font-size: 8pt; font-family: Arial, sans-serif; margin-top: 2px; }
"""


def head(title):
    return f"""<!doctype html><html><head><meta charset='utf-8'><title>{title}</title>
<link rel='stylesheet' href='{KX}katex.min.css'><script src='{KX}katex.min.js'></script>
<script src='{KX}contrib/auto-render.min.js'></script><style>{CSS}</style></head><body>"""

TAIL = """<script>document.fonts.ready.then(()=>{renderMathInElement(document.body,{delimiters:[{left:'\\\\(',right:'\\\\)',display:false}],throwOnError:true});
document.body.setAttribute('data-done','1');});</script></body></html>"""


def brand():
    return (f"<div class='brand'><img src='{LOGO}'><div class='bar'></div>"
            "<div><div class='s1'>SECRET</div><div class='s2'>STUDY</div></div></div>")


def totals(P):
    sa = sum(m for q in P['sa'] for (_, m, _, _) in q['parts'])
    n_sa = sum(len(q['parts']) for q in P['sa'])
    return len(P['mc']), n_sa, len(P['mc']) + sa


def cover(P):
    n_mc, n_sa, tot = totals(P)
    lastq = n_mc + len(P['sa'])
    return f"""<div class='cover'>
<div class='cover-top'>{brand()}<div class='meta'>{YEAR} · Mathematics<br>{P.get('kind', 'Comprehensive Test')}</div></div>
<div class='cover-mid'><div class='pill'>Mathematics Assessment</div>
<div class='ctitle'>{YEAR} <span>Test</span></div></div>
<div class='student'><div class='field'>Student name</div><div class='field'>Class</div>
<div class='field'>Teacher</div><div class='field'>Date</div></div>
<div class='ibox'><div class='ititle'>General Instructions</div>
<div class='times'><div class='tbox'><div class='tl'>Reading time</div><div class='tv'>5 minutes</div></div>
<div class='tbox'><div class='tl'>Working time</div><div class='tv'>60 minutes</div></div>
<div class='tbox'><div class='tl'>Total marks</div><div class='tv'>{tot}</div></div></div>
<ol class='ilist'><li>Section I: Questions 1–{n_mc}, multiple choice (1 mark each). Circle the letter of the correct answer.</li>
<li>Section II: Questions {n_mc+1}–{lastq} ({n_sa} parts). Write your answers in the spaces provided and show all working.</li>
<li>Calculators may be used. Diagrams are not drawn to scale.</li></ol></div>
<div class='lower'><div><div class='thead'>Topics covered in this paper</div><div class='tgrid'>{''.join(f'<div>{t}</div>' for t in TOPICS)}</div></div>
<table class='marks'><tr><th>Section</th><th style='text-align:right'>Mark</th></tr>
<tr><td>I · Multiple choice</td><td>/ {n_mc}</td></tr><tr><td>II · Written answers</td><td>/ {tot-n_mc}</td></tr>
<tr class='tot'><td>Total</td><td>/ {tot}</td></tr></table></div>
</div>"""


def paper_html(P):
    n_mc, n_sa, tot = totals(P)
    h = [head(f"{YEAR} Test {P['code']}"), cover(P)]
    h.append(f"<div class='sec'><div class='sn'>Section I — Multiple choice</div><div class='sd'>{n_mc} marks · 1 mark each</div></div>")
    for i, (stem, opts, ans, src, sol) in enumerate(P['mc'], 1):
        o = ''.join(f"<div class='opt'><div class='bub'>{'ABCD'[k]}</div><div>{t}</div></div>" for k, t in enumerate(opts))
        h.append(f"<div class='mc'><div class='qn'>{i}</div><div class='qb'><div class='qtext'>{stem}</div><div class='opts'>{o}</div></div></div>")
    h.append(f"<div class='sec pb'><div class='sn'>Section II — Written answers</div><div class='sd'>{tot-n_mc} marks · show all working</div></div>")
    qn = n_mc
    for q in P['sa']:
        qn += 1
        single = len(q['parts']) == 1
        for k, (stem, m, _, _) in enumerate(q['parts']):
            h.append("<div class='keep'>")
            bare = not q.get('intro') and not q.get('fig')
            if k == 0 and not bare:
                h.append(f"<div class='q'><div class='qn sa'>{qn}</div><div class='qb'>")
                if q.get('intro'):
                    h.append(f"<div class='qtext'>{q['intro']}</div>")
                if q.get('fig'):
                    h.append(f"<div class='fig'>{q['fig']}</div>")
                h.append("</div></div>")
            lab = '' if single else f'({ROMAN[k]})'
            first = f"<div class='qn sa'>{qn}</div>" if (k == 0 and bare) else "<div style='flex:0 0 34px'></div>"
            h.append(f"<div class='part'{' style=\'margin-top:4px\'' if k == 0 and bare else ''}>{first}"
                     f"{'' if single and bare else f'<div class=\'pl\'>{lab}</div>'}<div class='ptext part-text'>{stem}</div>"
                     f"<div class='mk'>{m} mark{'s' if m>1 else ''}</div></div>")
            h.append("<div class='ws'>" + "<div></div>" * LINES[m] + "</div></div>")
    h.append("<div class='end'>END OF TEST</div>" + TAIL)
    return ''.join(h)


def key_html(P):
    n_mc, n_sa, tot = totals(P)
    h = [head(f"{YEAR} Test {P['code']} Answers")]
    h.append(f"<div class='khead'>{brand()}<h1>{YEAR} Test {P['code']} — <span>Answers</span></h1></div>")
    h.append(f"<div class='sec'><div class='sn'>Section I — Multiple choice</div><div class='sd'>{n_mc} marks</div></div><table class='key'>")
    for i, (stem, opts, ans, src, sol) in enumerate(P['mc'], 1):
        s = f"<div class='src'>{src}</div>" if src else ''
        h.append(f"<tr><td>{i}</td><td>{'ABCD'[ans]}</td><td>{sol}{s}</td></tr>")
    h.append(f"</table><div class='sec'><div class='sn'>Section II — Written answers</div><div class='sd'>{tot-n_mc} marks</div></div><table class='key'>")
    qn = n_mc
    for q in P['sa']:
        qn += 1
        single = len(q['parts']) == 1
        for k, (stem, m, a, src) in enumerate(q['parts']):
            lab = f"{qn}" if single else f"{qn}({ROMAN[k]})"
            s = f"<div class='src'>{src}</div>" if src else ''
            h.append(f"<tr><td>{lab}</td><td>[{m}]</td><td>{a}{s}</td></tr>")
    h.append("</table>" + TAIL)
    return ''.join(h)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit('usage: python3 tools/test-paper/build.py tools/test-paper/papers/<spec>.py')
    spec_path = os.path.abspath(sys.argv[1])
    spec_mod = importlib.util.spec_from_file_location('spec', spec_path)
    spec = importlib.util.module_from_spec(spec_mod); spec_mod.loader.exec_module(spec)
    YEAR, TOPICS = spec.YEAR, spec.TOPICS
    out = os.path.join(HERE, 'out'); os.makedirs(out, exist_ok=True)
    jobs = []
    for P in spec.PAPERS:
        base = f"{spec.SLUG}_{P['code']}"
        label = f"{YEAR} Test {P['code']}"
        open(f'{out}/{base}.html', 'w').write(paper_html(P))
        open(f'{out}/{base}_Answers.html', 'w').write(key_html(P))
        jobs += [f'{base}|{label}', f'{base}_Answers|{label} Answers']
        n_mc, n_sa, tot = totals(P)
        print(f"Test {P['code']}: {n_mc} MC + {n_sa} written parts = {n_mc + n_sa} items, {tot} marks")
    r = subprocess.run(['node', os.path.join(HERE, 'pdf.cjs'), out] + jobs)
    sys.exit(r.returncode)
