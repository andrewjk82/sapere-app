import { getDocument } from '/Users/andrewkim/Desktop/sapere1/node_modules/pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, writeFileSync } from 'fs';
const data = new Uint8Array(readFileSync('/Users/andrewkim/Downloads/e2 textbook/CMS6_Extension2_Yr12_ch08_answers.pdf'));
const pdf = await getDocument({ data, disableFontFace: true }).promise;
const pages = [];
for (let p = 1; p <= pdf.numPages; p++) {
  const page = await pdf.getPage(p);
  const vp = page.getViewport({ scale: 1 });
  const tc = await page.getTextContent();
  const words = [];
  for (const it of tc.items) {
    if (!it.str || !it.str.trim()) continue;
    const [, , , d, e, f] = it.transform;
    const h = Math.abs(d) || it.height || 9;
    const y = vp.height - f;            // baseline from the top
    words.push([e, y - h * 0.8, e + it.width, y + h * 0.2, it.str.trim(), Math.round(h * 10) / 10]);
  }
  pages.push({ W: vp.width, H: vp.height, words });
}
writeFileSync('parsed.json', JSON.stringify(pages));
console.log(pages.length, 'pages', pages[0].words.length, 'items on p1');
