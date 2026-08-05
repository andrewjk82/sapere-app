import { toDisplayText } from '../../src/utils/mathPreprocess.js';

const input = "Graph (A): amplitude 2, period \\(4\\pi\\), shifted left by \\(\\dfrac{2\\pi}{3}\\)";
console.log("Input:", input);
console.log("Output:", toDisplayText(input));
