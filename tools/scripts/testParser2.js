function parseBracketTerm(str) {
  // str can be like "(3x^{-2}y^4)^{-2}" or "9(xy^2)^{-3}"
  // We want to extract: outer coefficient, inner string, outer power
  let outerCoeff = 1;
  const coeffMatch = str.match(/^([-+]?\d+)?\s*\(/);
  if (coeffMatch) {
    if (coeffMatch[1]) {
      outerCoeff = parseInt(coeffMatch[1]);
      if (str.startsWith('-') && !coeffMatch[1]) outerCoeff = -1;
    } else if (str.startsWith('-')) {
      outerCoeff = -1;
    }
  } else {
    // maybe it's not a bracket term?
    return null;
  }
  
  const bracketMatch = str.match(/\((.*?)\)\^\{?(-?\d+)\}?/);
  if (!bracketMatch) return null;
  const innerStr = bracketMatch[1];
  const outerPow = parseInt(bracketMatch[2]);
  
  return { outerCoeff, innerStr, outerPow };
}

function test() {
  const t1 = parseBracketTerm("(3x^{-2}y^4)^{-2}");
  console.log(t1);
  const t2 = parseBracketTerm("9(xy^2)^{-3}");
  console.log(t2);
}
test();
