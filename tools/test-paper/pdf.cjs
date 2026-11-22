// Renders the HTML papers written by build.py to A4 PDFs (Playwright, pre-installed Chromium).
// usage: node pdf.cjs <outDir> <baseName|footerLabel> ...
const { chromium } = require('playwright');
(async () => {
  const [dir, ...jobs] = process.argv.slice(2);
  const b = await chromium.launch();
  let failed = false;
  for (const job of jobs) {
    const [f, label] = job.split('|');
    const p = await b.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto('file://' + dir + '/' + f + '.html');
    await p.waitForSelector('body[data-done]', { timeout: 30000 }).catch(() => errs.push('KaTeX render did not finish'));
    const bad = await p.$$eval('.katex-error', e => e.map(x => x.title));
    await p.pdf({ path: dir + '/' + f + '.pdf', format: 'A4', printBackground: true,
      margin: { top: '16mm', bottom: '16mm', left: '15mm', right: '15mm' }, displayHeaderFooter: true, headerTemplate: '<span></span>',
      footerTemplate: '<div style="font-family:Arial;font-size:8px;width:100%;padding:0 15mm;display:flex;justify-content:space-between;color:#8b5cf6"><span style="font-weight:700;letter-spacing:.15em">SECRET STUDY</span><span style="color:#64748b">' + label + '</span><span style="color:#64748b"><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>' });
    if (errs.length || bad.length) { failed = true; console.error(f, 'ERRORS', errs, bad); } else console.log('ok', f + '.pdf');
    await p.close();
  }
  await b.close();
  process.exit(failed ? 1 : 0);
})();
