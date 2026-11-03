#!/usr/bin/env bash
# Part-level marking labels ("1a", "1b", …) for the Extension 2 Year 12 (2026) answer keys, read from the
# textbook's QUESTION pages (not the answers, which skip some questions/parts). Images are not touched.
#
#   bash tools/answer-keys/ext2_2026_question_labels.sh "<dir with the chapter PDFs>"          → labels + dry run
#   bash tools/answer-keys/ext2_2026_question_labels.sh "<dir with the chapter PDFs>" --write  → writes the labels
#
# Every *.pdf in the dir except the answers PDF is read (one chapter per file, questions only). Stops if the
# question numbers are not in the Chivo-Black font question_labels.py expects (a different layout needs a new config).
# After --write: bump ANSWER_KEY_CACHE_VERSION in src/utils/answerKeyCache.js and push, or devices keep the old
# labels for 14 days.
set -euo pipefail
DIR="$1"; shift
HERE="$(cd "$(dirname "$0")" && pwd)"
BOOK='CambridgeMATHS NSW Stage 6 Mathematics Extension 2 Year 12 (2026)'
WORK="$(mktemp -d)"
echo "work dir: $WORK"

shopt -s nullglob
pdfs=()
for f in "$DIR"/*.pdf; do
  case "$(basename "$f" | tr '[:upper:]' '[:lower:]')" in *answer*) continue ;; esac
  pdfs+=("$f")
done
[ ${#pdfs[@]} -gt 0 ] || { echo "no chapter PDFs in $DIR"; exit 1; }

i=0
for f in "${pdfs[@]}"; do
  i=$((i + 1))
  echo "── $(basename "$f")"
  node "$HERE/pdf_text_fonts.mjs" "$f" "$WORK/items_$i.json" | tail -3
  if ! grep -q 'Chivo-Black' "$WORK/items_$i.json"; then
    echo "STOP: no Chivo-Black question numbers in $(basename "$f") — this book's fonts differ; question_labels.py needs a config for it."
    exit 1
  fi
  pages=$(python3 -c "import json,sys; print(max(it['p'] for it in json.load(open(sys.argv[1]))))" "$WORK/items_$i.json")
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
