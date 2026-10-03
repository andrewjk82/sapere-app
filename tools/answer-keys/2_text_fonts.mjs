import { getDocument } from '/Users/andrewkim/Desktop/sapere1/node_modules/pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, writeFileSync } from 'fs';
const data = new Uint8Array(readFileSync('/Users/andrewkim/Downloads/ICE-EM Maths Answer (1).pdf'));
const pdf = await getDocument({ data, disableFontFace: true }).promise;
const out = [];
for (let p = 1; p <= 103; p++) {
  const page = await pdf.getPage(p);
  await page.getOperatorList();
  const vp = page.getViewport({ scale: 1 });
  const tc = await page.getTextContent();
  for (const it of tc.items) {
    if (!it.str.trim()) continue;
    let name = it.fontName;
    try { name = page.commonObjs.get(it.fontName)?.name || name; } catch {}
    const [, , , dd, e, f] = it.transform;
    out.push({ p, s: it.str, x: e, y: vp.height - f, h: Math.abs(dd), font: name });
  }
}
writeFileSync('/private/tmp/claude-501/-Users-andrewkim-Desktop-sapere1/c5c04cb4-2a02-4500-9ebd-48f21663c7f1/scratchpad/ans/items.json', JSON.stringify(out));
const fonts = {};
for (const o of out) if (/^\d{1,2}$/.test(o.s.trim())) { const k = o.font.replace(/^[A-Z]{6}\+/, ''); fonts[k] = (fonts[k] || 0) + 1; }
console.log(fonts);
