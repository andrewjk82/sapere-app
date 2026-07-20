const processedContent = '\\\\( X = DV \\\\cap UE, \\\\; Y = EW \\\\cap VF, \\\\; Z = FU \\\\cap WD \\\\)';
const mathBlockRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
const parts = processedContent.split(mathBlockRegex);
console.log('Parts:', parts);
