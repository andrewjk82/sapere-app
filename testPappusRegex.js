// Test script
import { toDisplayText } from './src/utils/mathPreprocess.js';

const content = "\\( X = DV \\\\cap UE, \\\\; Y = EW \\\\cap VF, \\\\; Z = FU \\\\cap WD \\)";
const mathBlockRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;

const parts = content.split(mathBlockRegex);
console.log('Parts:', parts);

// Let's run toDisplayText on the parts
const parsed = parts.map(p => toDisplayText(p, '', { currencyHtml: true }));
console.log('Parsed:', parsed);
익