#!/usr/bin/env bash
# Part-level marking labels ("1a", "1b", …) for the Year 12 CambridgeMATHS 2026 answer keys, read from the textbook's
# QUESTION pages (not the answers, which skip some questions/parts). Images are not touched.
#
#   bash tools/answer-keys/y12_2026_question_labels.sh <book> "<chapter PDF dir | whole-book PDF>"          → labels + dry run
#   bash tools/answer-keys/y12_2026_question_labels.sh <book> "<chapter PDF dir | whole-book PDF>" --write  → writes the labels
#
#   <book>  ext2  Extension 2 Year 12 (2026)               — dir of chapter PDFs (CMS6_Extension2_Yr12_chNN.pdf)
#           ext1  Extension 1 Year 12, 2nd edition (2026)  — dir of chapter PDFs (the *_ans.pdf answers file is skipped)
#           adv   Advanced Year 12, 2nd edition (2026)     — CMS6_Advanced12_2ed_book.pdf (answers start on PDF page 515,
#                                                            so only pages 1–514 are read)
#
# In a dir, every *.pdf except an answers PDF is read (one chapter per file). Stops if the question numbers are not in
# the Chivo-Black font question_labels.py expects (a different layout needs a new config).
# After --write: bump ANSWER_KEY_CACHE_VERSION in src/utils/answerKeyCache.js and push, or devices keep the old
# labels for 14 days.
set -euo pipefail
PRESET="${1:-}"; SRC="${2:-}"
[ -n "$PRESET" ] && [ -n "$SRC" ] || { sed -n '5,12p' "$0"; exit 1; }
shift 2
HERE="$(cd "$(dirname "$0")" && pwd)"
LAST=''
case "$PRESET" in
  ext2) BOOK='CambridgeMATHS NSW Stage 6 Mathematics Extension 2 Year 12 (2026)' ;;
  ext1) BOOK='CambridgeMATHS NSW Stage 6 Mathematics Extension 1 Year 12, 2nd edition (2026)' ;;
  adv)  BOOK='CambridgeMATHS NSW Stage 6 Mathematics Advanced Year 12, 2nd edition (2026)'; LAST=514 ;;
  *) echo "unknown book '$PRESET' (ext2 | ext1 | adv)"; exit 1 ;;
esac
WORK="$(mktemp -d)"
echo "book: $BOOK"
echo "work dir: $WORK"

pdfs=()
if [ -f "$SRC" ]; then
  pdfs=("$SRC")
else
  shopt -s nullglob
  for f in "$SRC"/*.pdf; do
    case "$(basename "$f" | tr '[:upper:]' '[:lower:]')" in *answer*|*_ans.pdf|*_ans_*) continue ;; esac
    pdfs+=("$f")
  done
fi
[ ${#pdfs[@]} -gt 0 ] || { echo "no PDFs in $SRC"; exit 1; }

i=0
for f in "${pdfs[@]}"; do
  i=$((i + 1))
  echo "── $(basename "$f")"
  node "$HERE/pdf_text_fonts.mjs" "$f" "$WORK/items_$i.json" | tail -3
  if ! grep -q 'Chivo-Black' "$WORK/items_$i.json"; then
    echo "STOP: no Chivo-Black question numbers in $(basename "$f") — this book's fonts differ; question_labels.py needs a config for it."
    exit 1
  fi
  pages="$LAST"
  [ -n "$pages" ] || pages=$(python3 -c "import json,sys; print(max(it['p'] for it in json.load(open(sys.argv[1]))))" "$WORK/items_$i.json")
  python3 "$HERE/question_labels.py" "$WORK/items_$i.json" "$pages" > "$WORK/labels_$i.json"
done

python3 - "$WORK" "$i" <<'EOF'
import json, re, sys
work, n = sys.argv[1], int(sys.argv[2])
ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']

def in_order(labels):
    # Parts are often set out in columns (a b c d down, e f g h next), so they are read a e i b f j …:
    # put each question's parts back in order (a, b, c … or i, ii, iii …), questions in their first-seen order.
    groups = {}
    for l in labels:
        m = re.fullmatch(r'(\d+)([a-z]*)', l)
        num, part = (m.group(1), m.group(2)) if m else (l, '')
        groups.setdefault(num, []).append(part)
    out = []
    for num, parts in groups.items():
        roman = any(p in ('ii', 'iii', 'iv', 'vi', 'vii', 'viii') for p in parts)
        key = (lambda p: ROMAN.index(p) if p in ROMAN else 99) if roman else (lambda p: p)
        out += [f'{num}{p}' for p in sorted(parts, key=key)]
    return out

merged = {}
for k in range(1, n + 1):
    for key, labels in json.load(open(f'{work}/labels_{k}.json')).items():
        if key in merged and merged[key] != labels:
            print(f'WARNING: {key} found in two files; keeping the longer list')
            if len(labels) <= len(merged[key]): continue
        merged[key] = labels
merged = {k: in_order(v) for k, v in merged.items()}
json.dump(merged, open(f'{work}/labels.json', 'w'), indent=0)
parts = sum(1 for v in merged.values() for l in v if not l.isdigit())
print(f'{len(merged)} sections, {sum(len(v) for v in merged.values())} labels ({parts} with a part letter)')
for key in list(merged)[:3]:
    print(f'  {key}: {" ".join(merged[key][:20])}{" …" if len(merged[key]) > 20 else ""}')
EOF

node "$HERE/update_labels.mjs" "$WORK/labels.json" "$BOOK" --questions "$@"
echo "labels: $WORK/labels.json"
