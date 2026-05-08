const toDisplayText = (value, fallback = '') => {
  if (value === null || value === undefined) return fallback;

  let str = '';
  if (typeof value === 'string') {
    str = value;
  } else if (typeof value === 'number' || typeof value === 'boolean') {
    str = String(value);
  } else if (typeof value === 'object') {
    str = String(value.text ?? value.label ?? value.question ?? value.value ?? fallback);
  } else {
    str = fallback;
  }

  str = str.replace(/√/g, '\\sqrt');
  str = str.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');

  // Without \b boundaries!
  str = str.replace(/(?<!\$)(\\(?:sqrt|pi|theta|pm|approx|times|div)(?:\{[^}]*\})?)(?!\$)/g, '$$$1$$');

  return str;
};

const input1 = "Expand: 2√3(3 + √3)";
console.log('Processed:', toDisplayText(input1));
