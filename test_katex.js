import katex from 'katex';
const str = "\\begin{array}{c@{\\quad}r} & 312 \\\\ \\times & 24 \\\\ \\hline & 1248 \\quad (312 \\times 4) \\\\ + & 6240 \\quad (312 \\times 20) \\\\ \\hline & 7488 \\end{array}";
try {
  katex.renderToString(str, { throwOnError: true, displayMode: false });
  console.log("Success!");
} catch (e) {
  console.log("Error:", e.message);
}
