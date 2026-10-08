import { getDocument } from '/Users/andrewkim/Desktop/sapere1/node_modules/pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, writeFileSync } from 'fs';
const [src, dst] = process.argv.slice(2);
const pdf = await getDocument({ data: new Uint8Array(readFileSync(src)), disableFontFace: true }).promise;
const out = [];
for (let p = 1; p <= pdf.numPages; p++) {
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
writeFileSync(dst, JSON.stringify(out));
const fonts = {};
for (const o of out) if (/^(\d{1,2}[a-h]?|[a-h])$/.test(o.s.trim())) { const k = o.font.replace(/^[A-Z]{6}\+/, ''); fonts[k] = (fonts[k] || 0) + 1; }
console.log(fonts);
