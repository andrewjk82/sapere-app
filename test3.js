const str = "hello\\nworld";
console.log('Original:', str);
console.log('Replaced with /\\\\n/ :', str.replace(/\\n/g, '\n'));
console.log('Replaced with /\\\\\\\\n/ :', str.replace(/\\\\n/g, '\n'));
