const str = "$A \\cup B = \\{1, 2\\}$";
const match = str.match(/^(.*?)(?:\s+|:\s*|,\s*)(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\])$/);
console.log("For full math block:", match);

const str2 = "Find the value of $x^2$";
const match2 = str2.match(/^(.*?)(?:\s+|:\s*|,\s*)(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\])$/);
console.log("For text + math block:", match2);
