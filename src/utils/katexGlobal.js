// KaTeX served from our own bundle instead of cdn.jsdelivr.net. The CDN stylesheet in index.html was
// render-blocking: on a network that blocks or stalls jsdelivr (school / tutoring-centre Wi-Fi) the whole
// first screen waited on it. Components still read the globals the CDN scripts used to set
// (window.katex, window.renderMathInElement), so this module only has to publish them — imported from
// main.jsx before <App /> renders, matching the old deferred scripts that ran before the app module.
import katex from 'katex';
import renderMathInElement from 'katex/contrib/auto-render';
import 'katex/dist/katex.min.css';

if (typeof window !== 'undefined') {
  window.katex = katex;
  window.renderMathInElement = renderMathInElement;
}
