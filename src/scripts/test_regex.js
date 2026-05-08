const str1 = "√7 units".replace(/√/g, '\\sqrt');
console.log(JSON.stringify(str1));

const str2 = str1.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');
console.log(JSON.stringify(str2));

const mathSequenceRegex = /(\\[a-zA-Z]+(?:\{[^}]*\}|\d+)?(?:\s*[\+\-\=\>\<]\s*)?)+/g;
const str3 = str2.replace(mathSequenceRegex, (match) => {
  return `$${match.trim()}$`;
});
console.log(JSON.stringify(str3));

const testDb = "\\\\3x - y - 4 = 0";
console.log(JSON.stringify(testDb));
