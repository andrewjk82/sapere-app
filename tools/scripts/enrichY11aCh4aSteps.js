import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to wrap all formulas in standard \( ... \) delimiters
function wrapMath(str) {
  if (!str) return '';
  // If it is already wrapped or has complex LaTeX, return as is
  if (str.includes('\\(') || str.includes('$$') || str.includes('$')) {
    return str;
  }
  return `\\(${str}\\)`;
}

// Generate highly detailed step-by-step solutions for students
function generateSteps(q) {
  const steps = [];
  const questionText = q.question || '';
  
  // 1. Solve for x: -3x < 12
  if (questionText.includes('-3x < 12') || questionText.includes('-3x < 12')) {
    steps.push({
      explanation: "Start with the given inequality.",
      workingOut: wrapMath("-3x < 12")
    });
    steps.push({
      explanation: "Divide both sides by -3. Remember that when dividing or multiplying both sides of an inequality by a negative number, you MUST reverse the direction of the inequality sign.",
      workingOut: wrapMath("x > \\frac{12}{-3}")
    });
    steps.push({
      explanation: "Simplify the fraction to find the final solved inequality.",
      workingOut: wrapMath("x > -4")
    });
  }
  
  // 2. Solve for k: 5 - 2k > 13
  else if (questionText.includes('5 - 2k > 13')) {
    steps.push({
      explanation: "Start with the given linear inequality.",
      workingOut: wrapMath("5 - 2k > 13")
    });
    steps.push({
      explanation: "Subtract 5 from both sides to begin isolating the variable term.",
      workingOut: wrapMath("-2k > 13 - 5 \\implies -2k > 8")
    });
    steps.push({
      explanation: "Divide both sides by -2. Since you are dividing by a negative number, the inequality sign must be flipped from greater than (>) to less than (<).",
      workingOut: wrapMath("k < \\frac{8}{-2} \\implies k < -4")
    });
  }

  // 3. Solve for z: -5 - z >= 2
  else if (questionText.includes('-5 - z \\ge 2') || questionText.includes('-5 - z >= 2')) {
    steps.push({
      explanation: "Start with the given inequality.",
      workingOut: wrapMath("-5 - z \\ge 2")
    });
    steps.push({
      explanation: "Add 5 to both sides to isolate the term containing z.",
      workingOut: wrapMath("-z \\ge 2 + 5 \\implies -z \\ge 7")
    });
    steps.push({
      explanation: "Multiply or divide both sides by -1 to solve for z. Since we are multiplying by a negative number, we reverse the inequality direction from \\(\\ge\\) to \\(\\le\\).",
      workingOut: wrapMath("z \\le -7")
    });
  }

  // 4. Solve for y: -4y >= -24
  else if (questionText.includes('-4y \\ge -24') || questionText.includes('-4y >= -24')) {
    steps.push({
      explanation: "Start with the inequality.",
      workingOut: wrapMath("-4y \\ge -24")
    });
    steps.push({
      explanation: "Divide both sides by -4 to solve for y. Because we are dividing by a negative number, we reverse the direction of the inequality sign.",
      workingOut: wrapMath("y \\le \\frac{-24}{-4}")
    });
    steps.push({
      explanation: "Simplify the division on the right-hand side.",
      workingOut: wrapMath("y \\le 6")
    });
  }

  // 5. Solve for y: 5 - 4y <= 25 + y
  else if (questionText.includes('5 - 4y \\le 25 + y') || questionText.includes('5 - 4y <= 25 + y')) {
    steps.push({
      explanation: "Start with the inequality.",
      workingOut: wrapMath("5 - 4y \\le 25 + y")
    });
    steps.push({
      explanation: "Add 4y to both sides to group the variable terms on the right side.",
      workingOut: wrapMath("5 \\le 25 + y + 4y \\implies 5 \\le 25 + 5y")
    });
    steps.push({
      explanation: "Subtract 25 from both sides to isolate the term with the variable.",
      workingOut: wrapMath("5 - 25 \\le 5y \\implies -20 \\le 5y")
    });
    steps.push({
      explanation: "Divide both sides by 5 to find the range for y. Since 5 is positive, the inequality sign direction is unchanged.",
      workingOut: wrapMath("-4 \\le y \\implies y \\ge -4")
    });
  }

  // 6. Solve for x: 4 - x > 3x - 8
  else if (questionText.includes('4 - x > 3x - 8')) {
    steps.push({
      explanation: "Start with the inequality.",
      workingOut: wrapMath("4 - x > 3x - 8")
    });
    steps.push({
      explanation: "Add x to both sides to group the variable terms on the right side.",
      workingOut: wrapMath("4 > 3x + x - 8 \\implies 4 > 4x - 8")
    });
    steps.push({
      explanation: "Add 8 to both sides to isolate the term with x.",
      workingOut: wrapMath("4 + 8 > 4x \\implies 12 > 4x")
    });
    steps.push({
      explanation: "Divide both sides by 4 to solve for x.",
      workingOut: wrapMath("3 > x \\implies x < 3")
    });
  }

  // 7. Solve and choose the graph: 3x + 4 >= x + 10
  else if (questionText.includes('3x + 4 \\ge x + 10') || questionText.includes('3x + 4 >= x + 10')) {
    steps.push({
      explanation: "Subtract x from both sides to group the variable terms on the left side.",
      workingOut: wrapMath("3x - x + 4 \\ge 10 \\implies 2x + 4 \\ge 10")
    });
    steps.push({
      explanation: "Subtract 4 from both sides to isolate the term with x.",
      workingOut: wrapMath("2x \\ge 10 - 4 \\implies 2x \\ge 6")
    });
    steps.push({
      explanation: "Divide both sides by 2.",
      workingOut: wrapMath("x \\ge 3")
    });
    steps.push({
      explanation: "On a number line, \\(x \\ge 3\\) is represented by a solid (closed) circle at 3 (indicating 3 is included) with an arrow pointing to the right.",
      workingOut: ""
    });
  }

  // 8. Solve and choose the graph: 5b - 2 < 2b - 11
  else if (questionText.includes('5b - 2 < 2b - 11')) {
    steps.push({
      explanation: "Subtract 2b from both sides to group the variable terms on the left side.",
      workingOut: wrapMath("5b - 2b - 2 < -11 \\implies 3b - 2 < -11")
    });
    steps.push({
      explanation: "Add 2 to both sides to isolate the variable term.",
      workingOut: wrapMath("3b < -11 + 2 \\implies 3b < -9")
    });
    steps.push({
      explanation: "Divide both sides by 3.",
      workingOut: wrapMath("b < -3")
    });
    steps.push({
      explanation: "On a number line, this is represented by an open circle at -3 (indicating -3 is not included) with an arrow pointing to the left.",
      workingOut: ""
    });
  }

  // 9. Solve and choose the graph: 5a - 4 <= -14
  else if (questionText.includes('5a - 4 \\le -14') || questionText.includes('5a - 4 <= -14')) {
    steps.push({
      explanation: "Add 4 to both sides to isolate the variable term.",
      workingOut: wrapMath("5a \\le -14 + 4 \\implies 5a \\le -10")
    });
    steps.push({
      explanation: "Divide both sides by 5 to solve for a.",
      workingOut: wrapMath("a \\le -2")
    });
    steps.push({
      explanation: "On a number line, this is represented by a solid (closed) circle at -2 with an arrow pointing to the left.",
      workingOut: ""
    });
  }

  // 10. Solve and choose the graph: 2k + 6 > 16
  else if (questionText.includes('2k + 6 > 16')) {
    steps.push({
      explanation: "Subtract 6 from both sides to isolate the variable term.",
      workingOut: wrapMath("2k > 16 - 6 \\implies 2k > 10")
    });
    steps.push({
      explanation: "Divide both sides by 2 to solve for k.",
      workingOut: wrapMath("k > 5")
    });
    steps.push({
      explanation: "On a number line, this is represented by an open circle at 5 with an arrow pointing to the right.",
      workingOut: ""
    });
  }

  // 11. Solve and choose the graph: 4y >= -12
  else if (questionText.includes('4y \\ge -12') || questionText.includes('4y >= -12')) {
    steps.push({
      explanation: "Divide both sides by 4 to solve for y. Since 4 is positive, the inequality direction does not change.",
      workingOut: wrapMath("y \\ge \\frac{-12}{4} \\implies y \\ge -3")
    });
    steps.push({
      explanation: "On a number line, this is represented by a solid (closed) circle at -3 with an arrow pointing to the right.",
      workingOut: ""
    });
  }

  // 12. Solve and choose the graph: x - 5 < 2
  else if (questionText.includes('x - 5 < 2')) {
    steps.push({
      explanation: "Add 5 to both sides to solve for x.",
      workingOut: wrapMath("x < 2 + 5 \\implies x < 7")
    });
    steps.push({
      explanation: "On a number line, this is represented by an open circle at 7 with an arrow pointing to the left.",
      workingOut: ""
    });
  }

  // 13. Solve: -2x >= -10
  else if (questionText.includes('-2x \\ge -10') || questionText.includes('-2x >= -10')) {
    steps.push({
      explanation: "Start with the given inequality.",
      workingOut: wrapMath("-2x \\ge -10")
    });
    steps.push({
      explanation: "Divide both sides by -2. Since you are dividing by a negative number, the direction of the inequality sign must be reversed.",
      workingOut: wrapMath("x \\le \\frac{-10}{-2}")
    });
    steps.push({
      explanation: "Simplify the division.",
      workingOut: wrapMath("x \\le 5")
    });
  }

  // 14. Solve and write in interval notation: -5 < 2 - 1/3 k <= 4
  else if (questionText.includes('-5 < 2 - \\frac{1}{3}k \\le 4') || questionText.includes('-5 < 2 - 1/3 k <= 4')) {
    steps.push({
      explanation: "Start with the compound inequality.",
      workingOut: wrapMath("-5 < 2 - \\frac{1}{3}k \\le 4")
    });
    steps.push({
      explanation: "Subtract 2 from all parts of the inequality.",
      workingOut: wrapMath("-5 - 2 < -\\frac{1}{3}k \\le 4 - 2 \\implies -7 < -\\frac{1}{3}k \\le 2")
    });
    steps.push({
      explanation: "Multiply all parts by -3 to isolate k. Since we are multiplying by a negative number, we must reverse the direction of both inequality signs.",
      workingOut: wrapMath("(-7) \\times (-3) > k \\ge 2 \\times (-3) \\implies 21 > k \\ge -6")
    });
    steps.push({
      explanation: "Rewrite the solution with the smaller number on the left.",
      workingOut: wrapMath("-6 \\le k < 21")
    });
    steps.push({
      explanation: "Convert this to interval notation. A closed bracket `[` is used for inclusive boundaries, and a parenthesis `)` is used for exclusive boundaries.",
      workingOut: wrapMath("[-6, 21)")
    });
  }

  // 15. Solve and write in interval notation: -10 <= 6 - 4a < 2
  else if (questionText.includes('-10 \\le 6 - 4a < 2') || questionText.includes('-10 <= 6 - 4a < 2')) {
    steps.push({
      explanation: "Subtract 6 from all parts of the compound inequality.",
      workingOut: wrapMath("-10 - 6 \\le -4a < 2 - 6 \\implies -16 \\le -4a < -4")
    });
    steps.push({
      explanation: "Divide all parts by -4. Since we are dividing by a negative number, the direction of both inequality signs must be reversed.",
      workingOut: wrapMath("\\frac{-16}{-4} \\ge a > \\frac{-4}{-4} \\implies 4 \\ge a > 1")
    });
    steps.push({
      explanation: "Rewrite the inequality with the smaller number on the left.",
      workingOut: wrapMath("1 < a \\le 4")
    });
    steps.push({
      explanation: "Express the solution in interval notation.",
      workingOut: wrapMath("(1, 4]")
    });
  }

  // 16. Solve and write in interval notation: -6 < -3x < 12
  else if (questionText.includes('-6 < -3x < 12')) {
    steps.push({
      explanation: "Divide all parts of the compound inequality by -3. Since we are dividing by a negative number, we must reverse the direction of both inequality signs.",
      workingOut: wrapMath("\\frac{-6}{-3} > x > \\frac{12}{-3} \\implies 2 > x > -4")
    });
    steps.push({
      explanation: "Rewrite the inequality with the smaller number on the left.",
      workingOut: wrapMath("-4 < x < 2")
    });
    steps.push({
      explanation: "Express the solution in interval notation.",
      workingOut: wrapMath("(-4, 2)")
    });
  }

  // 17. Solve and choose the graph: -6 < y - 4 <= 3
  else if (questionText.includes('-6 < y - 4 \\le 3') || questionText.includes('-6 < y - 4 <= 3')) {
    steps.push({
      explanation: "Add 4 to all parts of the compound inequality to isolate y.",
      workingOut: wrapMath("-6 + 4 < y \\le 3 + 4 \\implies -2 < y \\le 7")
    });
    steps.push({
      explanation: "On a number line, this is represented by an open circle at -2 (since -2 is not included) and a solid (closed) circle at 7 (since 7 is included), with a line segment connecting them.",
      workingOut: ""
    });
  }

  // 18. Solve and choose the graph: -9 < 3b + 6 <= 9
  else if (questionText.includes('-9 < 3b + 6 \\le 9') || questionText.includes('-9 < 3b + 6 <= 9')) {
    steps.push({
      explanation: "Subtract 6 from all parts of the compound inequality.",
      workingOut: wrapMath("-9 - 6 < 3b \\le 9 - 6 \\implies -15 < 3b \\le 3")
    });
    steps.push({
      explanation: "Divide all parts by 3 to solve for b.",
      workingOut: wrapMath("\\frac{-15}{3} < b \\le \\frac{3}{3} \\implies -5 < b \\le 1")
    });
    steps.push({
      explanation: "On a number line, this is represented by an open circle at -5 and a solid circle at 1, with a line segment connecting them.",
      workingOut: ""
    });
  }

  // 19. Solve and choose the graph: -3 <= 3x <= 6
  else if (questionText.includes('-3 \\le 3x \\le 6') || questionText.includes('-3 <= 3x <= 6')) {
    steps.push({
      explanation: "Divide all parts of the compound inequality by 3 to isolate x.",
      workingOut: wrapMath("\\frac{-3}{3} \\le x \\le \\frac{6}{3} \\implies -1 \\le x \\le 2")
    });
    steps.push({
      explanation: "On a number line, this is represented by solid (closed) circles at both -1 and 2, with a line segment connecting them.",
      workingOut: ""
    });
  }

  // 20. Solve and choose the graph: -10 <= 5a < 15
  else if (questionText.includes('-10 \\le 5a < 15') || questionText.includes('-10 <= 5a < 15')) {
    steps.push({
      explanation: "Divide all parts of the compound inequality by 5 to isolate a.",
      workingOut: wrapMath("\\frac{-10}{5} \\le a < \\frac{15}{5} \\implies -2 \\le a < 3")
    });
    steps.push({
      explanation: "On a number line, this is represented by a solid (closed) circle at -2 and an open circle at 3, with a line segment connecting them.",
      workingOut: ""
    });
  }

  // 21. Solve and choose the graph: -8 < 4k - 4 < 8
  else if (questionText.includes('-8 < 4k - 4 < 8')) {
    steps.push({
      explanation: "Add 4 to all parts of the inequality.",
      workingOut: wrapMath("-8 + 4 < 4k < 8 + 4 \\implies -4 < 4k < 12")
    });
    steps.push({
      explanation: "Divide all parts by 4 to solve for k.",
      workingOut: wrapMath("\\frac{-4}{4} < k < \\frac{12}{4} \\implies -1 < k < 3")
    });
    steps.push({
      explanation: "On a number line, this is represented by open circles at both -1 and 3, with a line segment connecting them.",
      workingOut: ""
    });
  }

  // 22. Solve and choose the graph: 4 < x + 3 < 8
  else if (questionText.includes('4 < x + 3 < 8')) {
    steps.push({
      explanation: "Subtract 3 from all parts of the compound inequality.",
      workingOut: wrapMath("4 - 3 < x < 8 - 3 \\implies 1 < x < 5")
    });
    steps.push({
      explanation: "On a number line, this is represented by open circles at both 1 and 5, with a line segment connecting them.",
      workingOut: ""
    });
  }

  // 23. Solve the double inequation: 4 < x + 3 < 9
  else if (questionText.includes('4 < x + 3 < 9')) {
    steps.push({
      explanation: "Subtract 3 from all parts of the compound inequality to isolate x.",
      workingOut: wrapMath("4 - 3 < x < 9 - 3 \\implies 1 < x < 6")
    });
  }

  // 24. Solve and write in interval notation: -5 < 2 - 1/4 x <= 1
  else if (questionText.includes('-5 < 2 - \\frac{1}{4}x \\le 1') || questionText.includes('-5 < 2 - 1/4 x <= 1')) {
    steps.push({
      explanation: "Subtract 2 from all parts of the inequality.",
      workingOut: wrapMath("-5 - 2 < -\\frac{1}{4}x \\le 1 - 2 \\implies -7 < -\\frac{1}{4}x \\le -1")
    });
    steps.push({
      explanation: "Multiply all parts by -4 to isolate x. Since we are multiplying by a negative number, the direction of both inequality signs must be reversed.",
      workingOut: wrapMath("(-7) \\times (-4) > x \\ge (-1) \\times (-4) \\implies 28 > x \\ge 4")
    });
    steps.push({
      explanation: "Rewrite with the smaller number on the left.",
      workingOut: wrapMath("4 \\le x < 28")
    });
    steps.push({
      explanation: "Express the solution in interval notation.",
      workingOut: wrapMath("[4, 28)")
    });
  }

  // 25. Solve and write in interval notation: x/6 < 4 + x/3
  else if (questionText.includes('\\frac{x}{6} < 4 + \\frac{x}{3}') || questionText.includes('x/6 < 4 + x/3')) {
    steps.push({
      explanation: "Subtract \\(\\frac{x}{3}\\) from both sides to group the variable terms on the left.",
      workingOut: wrapMath("\\frac{x}{6} - \\frac{x}{3} < 4")
    });
    steps.push({
      explanation: "Find a common denominator to subtract the fractions on the left.",
      workingOut: wrapMath("\\frac{x}{6} - \\frac{2x}{6} < 4 \\implies -\\frac{x}{6} < 4")
    });
    steps.push({
      explanation: "Multiply both sides by -6. Since we are multiplying by a negative number, we reverse the inequality direction.",
      workingOut: wrapMath("x > 4 \\times (-6) \\implies x > -24")
    });
    steps.push({
      explanation: "Express the solution in interval notation.",
      workingOut: wrapMath("(-24, \\infty)")
    });
  }

  // 26. Solve and write in interval notation: x/4 < 2 + x/3
  else if (questionText.includes('\\frac{x}{4} < 2 + \\frac{x}{3}') || questionText.includes('x/4 < 2 + x/3')) {
    steps.push({
      explanation: "Subtract \\(\\frac{x}{3}\\) from both sides.",
      workingOut: wrapMath("\\frac{x}{4} - \\frac{x}{3} < 2")
    });
    steps.push({
      explanation: "Subtract the fractions by finding a common denominator (12).",
      workingOut: wrapMath("\\frac{3x}{12} - \\frac{4x}{12} < 2 \\implies -\\frac{x}{12} < 2")
    });
    steps.push({
      explanation: "Multiply both sides by -12 and reverse the inequality sign.",
      workingOut: wrapMath("x > 2 \\times (-12) \\implies x > -24")
    });
    steps.push({
      explanation: "Express in interval notation.",
      workingOut: wrapMath("(-24, \\infty)")
    });
  }

  // 27. Solve: 1/8(3 - x) - 1/4(3 + x) > 1
  else if (questionText.includes('\\frac{1}{8}(3 - x)') || questionText.includes('1/8(3 - x)')) {
    steps.push({
      explanation: "Start with the given fraction inequality.",
      workingOut: wrapMath("\\frac{1}{8}(3 - x) - \\frac{1}{4}(3 + x) > 1")
    });
    steps.push({
      explanation: "Multiply all terms on both sides of the inequality by the common denominator 8 to clear the fractions.",
      workingOut: wrapMath("(3 - x) - 2(3 + x) > 8")
    });
    steps.push({
      explanation: "Expand the terms and simplify the left side.",
      workingOut: wrapMath("3 - x - 6 - 2x > 8 \\implies -3 - 3x > 8")
    });
    steps.push({
      explanation: "Add 3 to both sides.",
      workingOut: wrapMath("-3x > 8 + 3 \\implies -3x > 11")
    });
    steps.push({
      explanation: "Divide both sides by -3. Since we are dividing by a negative number, reverse the direction of the inequality sign.",
      workingOut: wrapMath("x < -\\frac{11}{3}")
    });
  }

  // 28. Solve: 3x-2/4 >= x+2/5 - 1
  else if (questionText.includes('\\frac{3x-2}{4} \\ge') || questionText.includes('3x-2/4 >=')) {
    steps.push({
      explanation: "Start with the fraction inequality.",
      workingOut: wrapMath("\\frac{3x-2}{4} \\ge \\frac{x+2}{5} - 1")
    });
    steps.push({
      explanation: "Multiply both sides of the inequality by the common denominator 20 to clear the fractions.",
      workingOut: wrapMath("5(3x - 2) \\ge 4(x + 2) - 20")
    });
    steps.push({
      explanation: "Expand both sides of the inequality.",
      workingOut: wrapMath("15x - 10 \\ge 4x + 8 - 20 \\implies 15x - 10 \\ge 4x - 12")
    });
    steps.push({
      explanation: "Subtract 4x from both sides and add 10 to both sides.",
      workingOut: wrapMath("15x - 4x \\ge -12 + 10 \\implies 11x \\ge -2")
    });
    steps.push({
      explanation: "Divide both sides by 11.",
      workingOut: wrapMath("x \\ge -\\frac{2}{11}")
    });
  }

  // 29. Solve: 1/5 y >= 3/5 y - 2
  else if (questionText.includes('\\frac{1}{5}y \\ge \\frac{3}{5}y - 2') || questionText.includes('1/5 y >= 3/5 y - 2')) {
    steps.push({
      explanation: "Multiply all terms on both sides of the inequality by 5 to clear the fractions.",
      workingOut: wrapMath("y \\ge 3y - 10")
    });
    steps.push({
      explanation: "Subtract 3y from both sides.",
      workingOut: wrapMath("y - 3y \\ge -10 \\implies -2y \\ge -10")
    });
    steps.push({
      explanation: "Divide both sides by -2 and reverse the inequality sign direction.",
      workingOut: wrapMath("y \\le \\frac{-10}{-2} \\implies y \\le 5")
    });
    steps.push({
      explanation: "Express the solution in interval notation.",
      workingOut: wrapMath("(-\\infty, 5]")
    });
  }

  // 30. Solve: 1/5 y >= 2/5 y - 2
  else if (questionText.includes('\\frac{1}{5}y \\ge \\frac{2}{5}y - 2') || questionText.includes('1/5 y >= 2/5 y - 2')) {
    steps.push({
      explanation: "Multiply all terms on both sides of the inequality by 5 to clear the fractions.",
      workingOut: wrapMath("y \\ge 2y - 10")
    });
    steps.push({
      explanation: "Subtract 2y from both sides.",
      workingOut: wrapMath("y - 2y \\ge -10 \\implies -y \\ge -10")
    });
    steps.push({
      explanation: "Multiply both sides by -1 and reverse the inequality sign direction.",
      workingOut: wrapMath("y \\le 10")
    });
    steps.push({
      explanation: "Express the solution in interval notation.",
      workingOut: wrapMath("(-\\infty, 10]")
    });
  }

  // 31. Solve: -8 < 6x + 4 <= 10
  else if (questionText.includes('-8 < 6x + 4 \\le 10') || questionText.includes('-8 < 6x + 4 <= 10')) {
    steps.push({
      explanation: "Subtract 4 from all parts of the inequality.",
      workingOut: wrapMath("-8 - 4 < 6x \\le 10 - 4 \\implies -12 < 6x \\le 6")
    });
    steps.push({
      explanation: "Divide all parts by 6 to solve for x.",
      workingOut: wrapMath("\\frac{-12}{6} < x \\le \\frac{6}{6} \\implies -2 < x \\le 1")
    });
  }

  // 32. Solve: -11 < 4m - 1 < 5
  else if (questionText.includes('-11 < 4m - 1 < 5')) {
    steps.push({
      explanation: "Add 1 to all parts of the inequality.",
      workingOut: wrapMath("-11 + 1 < 4m < 5 + 1 \\implies -10 < 4m < 6")
    });
    steps.push({
      explanation: "Divide all parts by 4.",
      workingOut: wrapMath("\\frac{-10}{4} < m < \\frac{6}{4} \\implies -2.5 < m < 1.5")
    });
  }

  // 33. Graph matching: -6 <= x < 8
  else if (questionText.includes('-6 \\le x < 8') || questionText.includes('-6 <= x < 8')) {
    steps.push({
      explanation: "Look at the boundaries of the inequality range: \\(-6 \\le x < 8\\).",
      workingOut: ""
    });
    steps.push({
      explanation: "At -6, the inequality is inclusive (\\(\\le\\)), so we place a solid (closed) circle at -6.",
      workingOut: ""
    });
    steps.push({
      explanation: "At 8, the inequality is exclusive (\\(<\\)), so we place an open circle at 8.",
      workingOut: ""
    });
    steps.push({
      explanation: "Since x is between these two boundaries, we connect the two circles with a horizontal line segment.",
      workingOut: ""
    });
  }

  // 34. Graph matching: -4 <= x <= 2
  else if (questionText.includes('-4 \\le x \\le 2') || questionText.includes('-4 <= x <= 2')) {
    steps.push({
      explanation: "Since both inequalities are inclusive (\\(\\le\\)), we place closed (solid) circles at both -4 and 2, and draw a connecting line segment between them.",
      workingOut: ""
    });
  }

  // 35. Graph matching: 1 < x < 4
  else if (questionText.includes('1 < x < 4')) {
    steps.push({
      explanation: "Since both inequalities are exclusive (\\(<\\)), we place open circles at both 1 and 4, and draw a connecting line segment between them.",
      workingOut: ""
    });
  }

  // 36. Graph matching: -3 < a <= 2
  else if (questionText.includes('-3 < a \\le 2') || questionText.includes('-3 < a <= 2')) {
    steps.push({
      explanation: "Place an open circle at -3 (not included) and a solid (closed) circle at 2 (included), and draw a connecting line segment between them.",
      workingOut: ""
    });
  }

  // 37. Graph matching: -1 < x < 4
  else if (questionText.includes('-1 < x < 4')) {
    steps.push({
      explanation: "Place open circles at both -1 and 4 (both exclusive), and connect them with a horizontal line segment.",
      workingOut: ""
    });
  }

  // 38. Graph matching: 2 <= x < 6
  else if (questionText.includes('2 \\le x < 6') || questionText.includes('2 <= x < 6')) {
    steps.push({
      explanation: "Place a closed (solid) circle at 2 (inclusive) and an open circle at 6 (exclusive), and connect them with a horizontal line segment.",
      workingOut: ""
    });
  }

  // 39. Graph matching: x > 3
  else if (questionText.includes('x > 3')) {
    steps.push({
      explanation: "Since the inequality is exclusive (\\(>\\)), place an open circle at 3. The arrow points to the right because the values are greater than 3.",
      workingOut: ""
    });
  }

  // 40. Graph matching: x <= -2
  else if (questionText.includes('x \\le -2') || questionText.includes('x <= -2')) {
    steps.push({
      explanation: "Since the inequality is inclusive (\\(\\le\\)), place a closed (solid) circle at -2. The arrow points to the left because the values are less than or equal to -2.",
      workingOut: ""
    });
  }

  // 41. Graph matching: x >= 5
  else if (questionText.includes('x \\ge 5') || questionText.includes('x >= 5')) {
    steps.push({
      explanation: "Place a closed (solid) circle at 5 (inclusive) with an arrow pointing to the right (greater than or equal to).",
      workingOut: ""
    });
  }

  // 42. Graph matching: y <= 5
  else if (questionText.includes('y \\le 5') || questionText.includes('y <= 5')) {
    steps.push({
      explanation: "Place a closed (solid) circle at 5 (inclusive) with an arrow pointing to the left (less than or equal to).",
      workingOut: ""
    });
  }

  // 43. Graph matching: k >= -2
  else if (questionText.includes('k \\ge -2') || questionText.includes('k >= -2')) {
    steps.push({
      explanation: "Place a closed (solid) circle at -2 with an arrow pointing to the right.",
      workingOut: ""
    });
  }

  // 44. Solve for a: -a <= 4
  else if (questionText.includes('-a \\le 4') || questionText.includes('-a <= 4')) {
    steps.push({
      explanation: "Multiply or divide both sides by -1 to solve for a. Because we multiply by a negative number, the direction of the inequality sign reverses.",
      workingOut: wrapMath("a \\ge -4")
    });
  }

  // 45. Interval notation matching: -3 <= -y <= 2
  else if (questionText.includes('-3 \\le -y \\le 2') || questionText.includes('-3 <= -y <= 2')) {
    steps.push({
      explanation: "Multiply all parts by -1. Because we multiply by a negative number, we reverse both inequality signs.",
      workingOut: wrapMath("3 \\ge y \\ge -2")
    });
    steps.push({
      explanation: "Rewrite with the smaller number on the left.",
      workingOut: wrapMath("-2 \\le y \\le 3")
    });
    steps.push({
      explanation: "Express the solution in interval notation. Since both ends are inclusive, we use brackets `[` and `]`.",
      workingOut: wrapMath("[-2, 3]")
    });
  }

  // 46. Interval notation matching: -3 <= -x <= 2
  else if (questionText.includes('-3 \\le -x \\le 2') || questionText.includes('-3 <= -x <= 2')) {
    steps.push({
      explanation: "Multiply all parts by -1. Reverse both inequality signs.",
      workingOut: wrapMath("3 \\ge x \\ge -2")
    });
    steps.push({
      explanation: "Rewrite with the smaller number on the left.",
      workingOut: wrapMath("-2 \\le x \\le 3")
    });
    steps.push({
      explanation: "Express the solution in interval notation.",
      workingOut: wrapMath("[-2, 3]")
    });
  }

  // 47. Solve: 5 - 2x > 3x - 10
  else if (questionText.includes('5 - 2x > 3x - 10')) {
    steps.push({
      explanation: "Add 2x to both sides to group the variable terms on the right side.",
      workingOut: wrapMath("5 > 3x + 2x - 10 \\implies 5 > 5x - 10")
    });
    steps.push({
      explanation: "Add 10 to both sides.",
      workingOut: wrapMath("5 + 10 > 5x \\implies 15 > 5x")
    });
    steps.push({
      explanation: "Divide both sides by 5.",
      workingOut: wrapMath("3 > x \\implies x < 3")
    });
  }

  // 48. Solve: 3x - 1 <= -10
  else if (questionText.includes('3x - 1 \\le -10') || questionText.includes('3x - 1 <= -10')) {
    steps.push({
      explanation: "Add 1 to both sides.",
      workingOut: wrapMath("3x \\le -10 + 1 \\implies 3x \\le -9")
    });
    steps.push({
      explanation: "Divide both sides by 3.",
      workingOut: wrapMath("x \\le -3")
    });
  }

  // 49. Solve: 10 - 2x < 4
  else if (questionText.includes('10 - 2x < 4')) {
    steps.push({
      explanation: "Subtract 10 from both sides.",
      workingOut: wrapMath("-2x < 4 - 10 \\implies -2x < -6")
    });
    steps.push({
      explanation: "Divide both sides by -2. Since you are dividing by a negative number, the direction of the inequality sign must be reversed.",
      workingOut: wrapMath("x > \\frac{-6}{-2} \\implies x > 3")
    });
  }

  // 50. Solve: 4 - 3x > 13
  else if (questionText.includes('4 - 3x > 13')) {
    steps.push({
      explanation: "Subtract 4 from both sides.",
      workingOut: wrapMath("-3x > 13 - 4 \\implies -3x > 9")
    });
    steps.push({
      explanation: "Divide both sides by -3 and reverse the direction of the inequality sign.",
      workingOut: wrapMath("x < \\frac{9}{-3} \\implies x < -3")
    });
  }

  // 51. Solve: -x <= 5
  else if (questionText.includes('-x \\le 5') || questionText.includes('-x <= 5')) {
    steps.push({
      explanation: "Multiply or divide both sides by -1. Reverse the direction of the inequality sign.",
      workingOut: wrapMath("x \\ge -5")
    });
  }

  // 52. Part questions: Part (a): Consider y = 3x - 6. (i) Find the x-intercept. (ii) Solve 3x - 6 >= 0.
  else if (questionText.includes('Part (a): Consider y = 3x - 6')) {
    steps.push({
      explanation: "Find the x-intercept by setting y = 0.",
      workingOut: wrapMath("0 = 3x - 6 \\implies 3x = 6 \\implies x = 2")
    });
    steps.push({
      explanation: "Solve the inequality \\(3x - 6 \\ge 0\\).",
      workingOut: wrapMath("3x \\ge 6 \\implies x \\ge 2")
    });
  }

  // 53. Part questions: Part (b): For y = 3x - 2 and y = 4 - x, (i) find the intersection and (ii) solve 3x - 2 < 4 - x.
  else if (questionText.includes('Part (b): For y = 3x - 2 and y = 4 - x')) {
    steps.push({
      explanation: "Find the intersection point by setting the two equations equal to each other.",
      workingOut: wrapMath("3x - 2 = 4 - x \\implies 3x + x = 4 + 2 \\implies 4x = 6 \\implies x = 1.5")
    });
    steps.push({
      explanation: "Solve the inequality \\(3x - 2 < 4 - x\\).",
      workingOut: wrapMath("3x + x < 4 + 2 \\implies 4x < 6 \\implies x < 1.5")
    });
  }

  // 54. intercept/inequality match: For y = 8 - 4x, for what values of x is 8 - 4x > 0?
  else if (questionText.includes('For y = 8 - 4x, for what values of x')) {
    steps.push({
      explanation: "Start with the inequality.",
      workingOut: wrapMath("8 - 4x > 0")
    });
    steps.push({
      explanation: "Add 4x to both sides to group variable terms on the right side.",
      workingOut: wrapMath("8 > 4x")
    });
    steps.push({
      explanation: "Divide both sides by 4.",
      workingOut: wrapMath("2 > x \\implies x < 2")
    });
  }

  // 55. Solve: -2 <= 3k <= 4
  else if (questionText.includes('-2 \\le 3k \\le 4') || questionText.includes('-2 <= 3k <= 4')) {
    steps.push({
      explanation: "Divide all parts of the inequality by 3 to isolate k.",
      workingOut: wrapMath("-\\frac{2}{3} \\le k \\le \\frac{4}{3}")
    });
  }

  // 56. Business word problem
  else if (questionText.includes('Business: Fixed $1200, variable $40/item')) {
    steps.push({
      explanation: "Formulate the cost and revenue equations. Let x be the number of items. Cost \\(C = 1200 + 40x\\), Revenue \\(R = 70x\\).",
      workingOut: ""
    });
    steps.push({
      explanation: "(i) Find the break-even point where Revenue equals Cost: \\(R = C\\).",
      workingOut: wrapMath("70x = 1200 + 40x \\implies 30x = 1200 \\implies x = 40 \\text{ items}")
    });
    steps.push({
      explanation: "(ii) Find the minimum number of items to cover a loss of $500: \\(R - C \\ge -500\\).",
      workingOut: wrapMath("70x - (1200 + 40x) \\ge -500 \\implies 30x - 1200 \\ge -500 \\implies 30x \\ge 700 \\implies x \\ge 23.33 \\implies 24 \\text{ items}")
    });
    steps.push({
      explanation: "(iii) Find the number of items needed for a profit of $1500: \\(R - C = 1500\\).",
      workingOut: wrapMath("70x - (1200 + 40x) = 1500 \\implies 30x - 1200 = 1500 \\implies 30x = 2700 \\implies x = 90 \\text{ items}")
    });
  }

  // 57. Voting word problem
  else if (questionText.includes('31 members voted. Votes for Jack (x) > 2 * votes for Jill (y). Min votes for Jack?')) {
    steps.push({
      explanation: "Let x be the votes for Jack and y be the votes for Jill. We are given: \\(x + y = 31\\) and \\(x > 2y\\).",
      workingOut: ""
    });
    steps.push({
      explanation: "Express y in terms of x: \\(y = 31 - x\\). Substitute this into the inequality.",
      workingOut: wrapMath("x > 2(31 - x) \\implies x > 62 - 2x")
    });
    steps.push({
      explanation: "Add 2x to both sides and solve for x.",
      workingOut: wrapMath("3x > 62 \\implies x > 20.67")
    });
    steps.push({
      explanation: "Since votes must be integers, the minimum integer greater than 20.67 is 21.",
      workingOut: wrapMath("x = 21")
    });
  }

  // Default fallback if no specific rule matched
  if (steps.length === 0) {
    steps.push({
      explanation: "Solve the given equation or inequality.",
      workingOut: ""
    });
  }

  return steps;
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  console.log('Beginning Year 11 Advanced Chapter 4A direct Firestore solution enrichment for ' + snap.size + ' questions...');
  let updateCount = 0;
  const batch = db.batch();

  snap.forEach(d => {
    const data = d.data();
    const existingSteps = data.solutionSteps || [];
    
    // Check if we need to enrich (either empty, or less than 2 steps, to be extra thorough for student learning)
    if (existingSteps.length <= 1) {
      const generated = generateSteps(data);
      if (generated.length > 0 && generated[0].explanation !== "Solve the given equation or inequality.") {
        console.log('Enriching steps for question: ' + d.id + ' ("' + data.question.slice(0, 50) + '...")');
        batch.update(d.ref, {
          solutionSteps: generated
        });
        updateCount++;
      }
    }
  });

  if (updateCount > 0) {
    const questionsMetaRef = db.doc('sync_meta/questions');
    const now = Date.now();
    batch.update(questionsMetaRef, {
      version: now,
      membershipVersion: now,
      updatedAt: FieldValue.serverTimestamp()
    });

    await batch.commit();
    console.log('Successfully completed solution steps enrichment for ' + updateCount + ' questions!');
  } else {
    console.log('All questions already had solution steps or no matches found.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
