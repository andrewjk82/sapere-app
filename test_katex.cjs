const katex = require('katex');
const str = "\\(\\begin{array}{r@{\\quad}l} \\overset{1}{\\phantom{0}}42 \\\\ \\times \\quad 6 \\\\ \\hline 2 \\end{array}\\)";
try {
  const inner = str.replace(/^\\\(|\\\)$/g, ''); 
  katex.renderToString(inner, { throwOnError: true, displayMode: false });
  console.log("Success!");
} catch (e) {
  console.log("Error:", e.message);
}
