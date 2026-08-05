const str = "Here, \\(M = \\left(\\frac{1 + 9}{2}, \\frac{4 + 4}{2}\\right) = \\left(\\frac{10}{2}, \\frac{8}{2}\\right) = (5, 4)\\).";

let midRegex = /M = \\left\(\\frac{([-.\d]+)\s*\+\s*([-.\d]+)}{2},\s*\\frac{([-.\d]+)\s*\+\s*([-.\d]+)}{2}\\right\)/;
console.log("midRegex match:", str.match(midRegex));

let midRegex2 = /M = \\left\\(\\frac{([-.\d]+)\s*\+\s*([-.\d]+)}{2},\s*\\frac{([-.\d]+)\s*\+\s*([-.\d]+)}{2}\\right\\)/;
console.log("midRegex2 match:", str.match(midRegex2));

let epMatch = "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((1, 4)\\) and \\((9, 4)\\).".match(/endpoints? \\\(\s*\(([-.\d]+),\s*([-.\d]+)\)\s*\\\) and \\\(\s*\(([-.\d]+),\s*([-.\d]+)\)\s*\\\)/);
console.log("epMatch match:", epMatch);

let mRegex3 = /\\\\frac{([-.\\d]+) \\+ ([-.\\d]+)}{2}/g;
console.log("mRegex3:", [...str.matchAll(mRegex3)]);

let originalRegex = /\\frac{([-.\d]+) \+ ([-.\d]+)}{2}/g;
console.log("originalRegex:", [...str.matchAll(originalRegex)]);

