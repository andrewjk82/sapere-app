#!/usr/bin/env bash
# Kept for the command used on 2026-11-04: same as `y12_2026_question_labels.sh ext2 <dir> [--write]`.
exec bash "$(cd "$(dirname "$0")" && pwd)/y12_2026_question_labels.sh" ext2 "$@"
