const json = '["hello\\\\\\\\nworld"]';
const parsed = JSON.parse(json);
console.log('Parsed element:', parsed[0]);
console.log('Includes actual newline (\\n)?', parsed[0].includes('\n'));
console.log('Includes literal backslash-n (\\\\n)?', parsed[0].includes('\\n'));
