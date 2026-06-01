const str = "$A \\cup B = \\{1, 2\\}$";
const match = str.match(/^(.*?)(?:\s+|:\s*|,\s*)([\\\(|\$|\\\[].+?[\\\)|\\\]|\$])$/);
console.log(match);
