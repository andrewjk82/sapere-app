/**
 * Split text into plain-text and markdown-table segments, using the same
 * rules as MathView.jsx's convertMarkdownTables (a "| a | b |" line followed
 * by a "|---|---|" separator starts a table; following "|…|" lines are rows).
 *
 * Returns [{ type: 'text', text }, { type: 'table', headers, rows }].
 */
const tableLineRe = /^\s*\|.+\|\s*$/;
const separatorRe = /^\s*\|[\s|:-]+\|\s*$/;
const parseCells = (l) => l.replace(/^\s*\||\|\s*$/g, '').split('|').map((c) => c.trim());

export const splitMarkdownTables = (str) => {
  if (typeof str !== 'string' || !str) return [{ type: 'text', text: str || '' }];
  // Same line split as MathView: real newlines or a lone "\n" escape, never a
  // TeX command starting with \n (\neq, \nu …).
  const lines = str.split(/\r?\n|\\n(?![a-zA-Z])/);
  const segments = [];
  let textBuf = [];
  const flush = () => {
    if (textBuf.length) segments.push({ type: 'text', text: textBuf.join('\n') });
    textBuf = [];
  };
  let i = 0;
  while (i < lines.length) {
    if (tableLineRe.test(lines[i]) && i + 1 < lines.length && separatorRe.test(lines[i + 1])) {
      flush();
      const headers = parseCells(lines[i]);
      i += 2;
      const rows = [];
      while (i < lines.length && tableLineRe.test(lines[i])) {
        rows.push(parseCells(lines[i]));
        i++;
      }
      segments.push({ type: 'table', headers, rows });
    } else {
      textBuf.push(lines[i]);
      i++;
    }
  }
  flush();
  return segments;
};

export const hasMarkdownTable = (str) => splitMarkdownTables(str).some((s) => s.type === 'table');
