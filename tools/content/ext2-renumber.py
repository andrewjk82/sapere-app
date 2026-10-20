#!/usr/bin/env python3
"""Re-lay out content/chapters/y12e2-*.json to the 2026 textbook (CambridgeMATHS NSW Stage 6 Extension 2, Year 12).

  python3 tools/content/ext2-renumber.py [--src content/chapters] [--out content/chapters]

Question ids and bodies are untouched — each question just moves to its new topic. Reads the six old chapter files,
writes the seven new ones. Run it ONCE on old-layout files (new ids reuse old ones, so a second pass would scramble
them); it refuses to run when chapter 7 already exists in --src.
"""
import json, os, sys, argparse

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
ap = argparse.ArgumentParser()
ap.add_argument('--src', default=os.path.join(ROOT, 'content', 'chapters'))
ap.add_argument('--out', default=os.path.join(ROOT, 'content', 'chapters'))
args = ap.parse_args()

if os.path.exists(os.path.join(args.src, 'y12e2-7.json')):
    sys.exit('y12e2-7.json already exists in --src: the layout looks migrated already. Nothing done.')

# new structure (id, title, topics[(code, title)]) — keep in step with src/constants/curriculumData.js
NEW = [
 (1,'Complex Numbers I',[('1A','The Arithmetic of Complex Numbers'),('1B','Quadratic Equations'),('1C','The Argand Diagram'),('1D','Modulus-Argument Form'),('1E','Vectors and the Complex Plane'),('1F','Curves and Regions in the Argand Diagram')]),
 (2,'Proof',[('2A','Logic and The Language of Proof'),('2B','Further Logic and Language of Proof'),('2C','Number Proofs'),('2D','Proof by Contraposition and by Contradiction'),('2E','Algebraic Inequalities'),('2F','Further Proof by Induction'),('2G','Inequalities in Geometry and Calculus')]),
 (3,'Complex Numbers II: Polynomials & de Moivre',[('3A','Polynomials and Complex Numbers'),('3B','Powers of Complex Numbers'),('3C','Trigonometric Identities'),('3D','Roots of Complex Numbers')]),
 (4,'Vectors',[('4A','The Vector Equation of a Line'),('4B','Parallel, Intersecting and Skew Lines'),('4C','Perpendicular Lines'),('4D','Vector Equations of Circles and Spheres'),('4E','Other Parametric Curves'),('4F','The Algebra of the Dot Product'),('4G','Vectors and Geometry in Two Dimensions'),('4H','Vectors and Geometry in Three Dimensions'),('4X','Appendix: Some Geometry in 3D')]),
 (5,'Trigonometric Identities',[('5A','Products to Sums'),('5B','The t-Formulae')]),
 (6,'Integration',[('6A','The Standard Integrals'),('6B','Algebraic Manipulation'),('6C','Substitution'),('6D','Partial Fractions'),('6E','Denominators with Quadratics'),('6F','Integration by Parts'),('6G','Trigonometric Integrals'),('6H','Reduction Formulae'),('6I','Miscellaneous Integrals')]),
 (7,'Mechanics',[('7A','Resolving Forces'),('7B','Planes and Pulleys'),('7C','Forces and Acceleration'),('7D','Simple Harmonic Motion and Time'),('7E','Simple Harmonic Motion and Displacement'),('7F','Horizontal Resisted Motion'),('7G','Vertical Resisted Motion'),('7H','Projectile Motion'),('7I','Resisted Projectile Motion'),('7J','Miscellaneous Problems')]),
]
# old topic code -> new topic code (same table as src/utils/ext2Renumber.js)
MOVE = {'1A':'1A','1B':'1B','1C':'1C','1D':'1D','1E':'1E','1F':'1F','1G':'3A','1H':'1R',
        '2A':'2A','2B':'2C','2C':'2D','2D':'2E','2E':'2F','2F':'2G','2G':'2R',
        '3A':'3B','3B':'3C','3C':'3D','3F':'3R',
        '4A':'6A','4B':'6B','4C':'6C','4D':'6D','4E':'6E','4F':'6F','4G':'6G','4H':'6H','4I':'6I','4J':'6R',
        '5A':'4X','5B':'4G','5C':'4F','5D':'4F','5E':'4G','5F':'4A','5G':'4D','5H':'4R',
        '6A':'7C','6B':'7D','6C':'7E','6D':'7F','6E':'7G','6F':'7H','6G':'7J','6H':'7R'}
RETIRED = {'3D', '3E'}   # Euler's exponential form is not in the new book

new_topics = {}
for n, title, topics in NEW:
    for code, t in topics + [(f'{n}R', 'Chapter Review Exercise')]:
        new_topics[code] = {'topicId': f'y12e2-{code}', 'code': code, 'title': t, 'questions': []}

for n in range(1, 7):
    d = json.load(open(os.path.join(args.src, f'y12e2-{n}.json')))
    for t in d['topics']:
        old = t['topicId'].replace('y12e2-', '')
        qs = t.get('questions', [])
        if old in RETIRED:
            if qs: sys.exit(f'{old} has {len(qs)} question(s) but is retired: place them by hand first.')
            continue
        if old not in MOVE: sys.exit(f'unknown old topic {old}')
        new_topics[MOVE[old]]['questions'].extend(qs)

os.makedirs(args.out, exist_ok=True)
total = 0
for n, title, topics in NEW:
    codes = [c for c, _ in topics] + [f'{n}R']
    out = {'chapterId': f'y12e2-{n}', 'title': f'Chapter {n}: {title}', 'year': 'Year 12',
           'topics': [new_topics[c] for c in codes]}
    total += sum(len(t['questions']) for t in out['topics'])
    with open(os.path.join(args.out, f'y12e2-{n}.json'), 'w') as f:
        json.dump(out, f, indent=2, ensure_ascii=False); f.write('\n')
print(f'wrote 7 chapter files, {total} questions placed')
