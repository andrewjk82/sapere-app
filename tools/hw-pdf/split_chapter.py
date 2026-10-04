#!/usr/bin/env python3
"""Split an ICE-EM chapter PDF into one PDF per topic (the homework worksheets).

A topic starts on the page whose big heading is its code ("9A"); it runs to the
page before the next topic heading, or *including* that page when the next
heading starts part-way down it (the two topics share the page). The last topic
of a chapter runs to the end; a "Review exercise" / "Challenge exercise" block
starts the review topic.

usage: split_chapter.py <chapter.pdf> <outdir> <prefix> <code:Title> ...
       e.g. split_chapter.py "Chapter 9 Measurement.pdf" out "Y7 Ch" "9A:Units of measurement" ...
Writes "<prefix><code>.pdf" per topic; prints the page ranges.
"""
import re, subprocess, sys, os
from pypdf import PdfReader, PdfWriter

def page_words(pdf, n):
    x = subprocess.run(['pdftotext', '-bbox', '-f', str(n), '-l', str(n), pdf, '-'], capture_output=True, text=True).stdout
    return [(float(c[1]), float(c[3]) - float(c[1]), c[4]) for c in re.findall(r'xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>', x)]

def find_headings(pdf, npages, chap):
    """({code: (page, y)}, review (page, y) | None, last_page). Review = the "Review exercise" block;
    last_page stops before the book's "Answers to exercises" when a chapter is cut from a whole book."""
    out, review, last = {}, None, npages
    for n in range(1, npages + 1):
        ws = page_words(pdf, n)
        txt = ' '.join(w[2] for w in ws[:4])
        if txt.startswith('Answers to exercises'):
            last = n - 1
            break
        big = [w for w in ws if w[1] >= 55]
        code = ''.join(w[2] for w in big)
        if re.fullmatch(rf'{chap}[A-Z]', code) and code not in out:
            out[code] = (n, min(w[0] for w in big))
        if review is None and out:   # only after the first section heading (whole-book files)
            for a, b in zip(ws, ws[1:]):
                if a[2] == 'Review' and b[2] in ('exercise', 'execrise') and a[1] >= 18:
                    review = (n, a[0]); break
    return out, review, last

def main():
    pdf, outdir, prefix, *topics = sys.argv[1:]
    reader = PdfReader(pdf, strict=False); total = len(reader.pages)
    chap = re.match(r'\d+', topics[0]).group()
    heads, review, last = find_headings(pdf, total, chap)
    os.makedirs(outdir, exist_ok=True)
    starts, review_claimed = [], False
    for t in topics:
        code, title = t.split(':', 1)
        if code in heads: starts.append((code, *heads[code]))
        elif re.search(r'review|revision', title, re.I) and review: starts.append((code, *review)); review_claimed = True
        else: print(f'!! {code} {title}: heading not found'); starts.append((code, None, None))
    # A review block nobody claimed ends the last lesson and is saved on its own.
    stop = [] if review_claimed or not review else [(review[0], review[1])]
    def write(name, a, b):
        w = PdfWriter()
        for p in range(a - 1, b): w.add_page(reader.pages[p])
        with open(os.path.join(outdir, name), 'wb') as f: w.write(f)
        print(f'{name[:-4]}: pages {a}-{b} ({b - a + 1})')
    for i, (code, page, y) in enumerate(starts):
        if page is None: continue
        later = [(p, yy) for _, p, yy in starts[i + 1:] if p] + stop
        nxt = min(later) if later else None
        end = last if nxt is None else (nxt[0] if nxt[1] > 100 else nxt[0] - 1)
        write(f'{prefix}{code}.pdf', page, max(end, page))
    if stop: write(f'{prefix}{chap}R Review.pdf', review[0], last)

if __name__ == "__main__":
    main()
