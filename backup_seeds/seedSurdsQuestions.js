export const SURDS_QUESTIONS_Y11A = [
  // 2A: Real numbers and intervals (Q1-Q5)
  { id: 's2a_1', q: "Is $\\sqrt{45}$ rational or irrational?", a: "Irrational", opts: ["Rational", "Irrational", "Integer", "Fraction"], h: "45 is not a perfect square.", s: "$\\sqrt{45} = 3\\sqrt{5}$, which is an irrational number.", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_2', q: "Identify if $\\sqrt[3]{64}$ is rational or irrational.", a: "Rational", opts: ["Rational", "Irrational", "Surd", "Complex"], h: "Calculate the cube root.", s: "$\\sqrt[3]{64} = 4$, which is an integer (Rational).", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_3', q: "Express $0.32$ as a fraction in simplest form.", a: "$\\frac{8}{25}$", opts: ["$\\frac{8}{25}$", "$\\frac{32}{100}$", "$\\frac{4}{12}$", "$\\frac{16}{50}$"], h: "32/100 and simplify.", s: "$0.32 = \\frac{32}{100} = \\frac{8}{25}$", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_4', q: "Classify $\\pi + 2$ as rational or irrational.", a: "Irrational", opts: ["Rational", "Irrational", "Algebraic", "Integer"], h: "Adding a rational to an irrational results in an irrational.", s: "$\\pi$ is irrational, so $\\pi + 2$ is also irrational.", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_5', q: "Write the interval $x < 5$ using bracket notation.", a: "$(-\\infty, 5)$", opts: ["$(-\\infty, 5)$", "$[ -\\infty, 5)$", "$(-\\infty, 5]$ ", "$(5, \\infty)$"], h: "Exclusive inequality uses round brackets.", s: "$x < 5$ means everything from negative infinity up to 5 (not included).", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_6', q: "Express the interval $[-2, 7]$ using inequalities.", a: "$-2 \\le x \\le 7$", opts: ["$-2 \\le x \\le 7$", "$-2 < x < 7$", "$-2 \\le x < 7$", "$-2 < x \\le 7$"], h: "Square brackets mean inclusive.", s: "Notation $[-2, 7]$ means $x$ is between -2 and 7, including both.", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_7', q: "Write the inequality $-3 < x \\le 4$ in bracket notation.", a: "$(-3, 4]$", opts: ["$(-3, 4]$", "$[-3, 4]$", "$(-3, 4)$", "$[-3, 4)$"], h: "Check which endpoint is included.", s: "-3 is not included ($>$), 4 is included ($\\le$).", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_8', q: "Write the interval $(-\\infty, -4]$ using inequalities.", a: "$x \\le -4$", opts: ["$x \\le -4$", "$x < -4$", "$x \\ge -4$", "$x > -4$"], h: "Infinity means no boundary on one side.", s: "Up to and including -4.", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_9', q: "Classify $\\sqrt{1.44}$ as rational or irrational.", a: "Rational", opts: ["Rational", "Irrational", "Surd", "Imaginary"], h: "Calculate the square root of 1.44.", s: "$\\sqrt{1.44} = 1.2 = 6/5$. Rational.", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_10', q: "Identify if $3\\sqrt{7}$ is rational or irrational.", a: "Irrational", opts: ["Rational", "Irrational", "Integer", "Fraction"], h: "Multiple of an irrational.", s: "Product of rational and irrational is irrational.", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_11', q: "Write $-4 \\le x < 6$ in interval notation.", a: "$[-4, 6)$", opts: ["$[-4, 6)$", "$(-4, 6]$", "$[-4, 6]$", "$(-4, 6)$"], h: "Check the symbols.", s: "$-4$ is included, $6$ is not.", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_12', q: "Write $x > -4$ in interval notation.", a: "$(-4, \\infty)$", opts: ["$(-4, \\infty)$", "$[-4, \\infty)$", "$( -\\infty, -4)$", "$( -\\infty, -4]$"], h: "Greater than means towards positive infinity.", s: "$x > -4$ starts at -4 (not included).", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_13', q: "Express $(-5, 3)$ using inequalities.", a: "$-5 < x < 3$", opts: ["$-5 < x < 3$", "$-5 \\le x \\le 3$", "$-5 < x \\le 3$", "$-5 \\le x < 3$"], h: "Round brackets mean strictly greater/less.", s: "$-5 < x < 3$", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_14', q: "Express $[-5, 3]$ using inequalities.", a: "$-5 \\le x \\le 3$", opts: ["$-5 \\le x \\le 3$", "$-5 < x < 3$", "$-5 \\le x < 3$", "$-5 < x \\le 3$"], h: "Square brackets mean inclusive.", s: "$-5 \\le x \\le 3$", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_15', q: "Express $(3, \\infty)$ using inequalities.", a: "$x > 3$", opts: ["$x > 3$", "$x \\ge 3$", "$x < 3$", "$x \\le 3$"], h: "Infinity means no upper bound.", s: "$x > 3$", t: "Real numbers and intervals", c: "2A" },
  { id: 's2a_16', q: "Express $(-\\infty, -5]$ using inequalities.", a: "$x \\le -5$", opts: ["$x \\le -5$", "$x < -5$", "$x \\ge -5$", "$x > -5$"], h: "Up to -5, inclusive.", s: "$x \\le -5$", t: "Real numbers and intervals", c: "2A" },

  // 2B & 2C: Surds and their arithmetic / Further simplification (Q6-Q8)
  { id: 's2bc_1', q: "Simplify $\\sqrt{48}$.", a: "$4\\sqrt{3}$", opts: ["$4\\sqrt{3}$", "$2\\sqrt{12}$", "$16\\sqrt{3}$", "$3\\sqrt{4}$"], h: "Find largest square factor (16).", s: "$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$", t: "Further simplification of surds", c: "2C" },
  { id: 's2bc_2', q: "Simplify $\\sqrt{150}$.", a: "$5\\sqrt{6}$", opts: ["$5\\sqrt{6}$", "$25\\sqrt{6}$", "$6\\sqrt{5}$", "$10\\sqrt{1.5}$"], h: "150 = 25 x 6.", s: "$\\sqrt{150} = \\sqrt{25 \\times 6} = 5\\sqrt{6}$", t: "Further simplification of surds", c: "2C" },
  { id: 's2bc_3', q: "Simplify $3\\sqrt{24}$.", a: "$6\\sqrt{6}$", opts: ["$6\\sqrt{6}$", "$12\\sqrt{6}$", "$3\\sqrt{6}$", "$6\\sqrt{4}$"], h: "24 = 4 x 6.", s: "$3\\sqrt{4 \\times 6} = 3 \\times 2\\sqrt{6} = 6\\sqrt{6}$", t: "Further simplification of surds", c: "2C" },
  { id: 's2bc_4', q: "Simplify $2\\sqrt{80}$.", a: "$8\\sqrt{5}$", opts: ["$8\\sqrt{5}$", "$4\\sqrt{20}$", "$16\\sqrt{5}$", "$4\\sqrt{5}$"], h: "80 = 16 x 5.", s: "$2\\sqrt{16 \\times 5} = 2 \\times 4\\sqrt{5} = 8\\sqrt{5}$", t: "Further simplification of surds", c: "2C" },
  { id: 's2bc_5', q: "Simplify $5\\sqrt{8} + 2\\sqrt{18}$.", a: "$16\\sqrt{2}$", opts: ["$16\\sqrt{2}$", "$7\\sqrt{26}$", "$10\\sqrt{2}$", "$14\\sqrt{2}$"], h: "Simplify each surd first.", s: "$5(2\\sqrt{2}) + 2(3\\sqrt{2}) = 10\\sqrt{2} + 6\\sqrt{2} = 16\\sqrt{2}$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_6', q: "Simplify $3\\sqrt{7} \\times 2\\sqrt{5}$.", a: "$6\\sqrt{35}$", opts: ["$6\\sqrt{35}$", "$5\\sqrt{12}$", "$6\\sqrt{12}$", "$12\\sqrt{35}$"], h: "Multiply outer and inner numbers.", s: "$(3 \\times 2)(\\sqrt{7 \\times 5}) = 6\\sqrt{35}$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_7', q: "Simplify $\\sqrt{40} \\div \\sqrt{8}$.", a: "$\\sqrt{5}$", opts: ["$\\sqrt{5}$", "$5$", "$\\sqrt{32}$", "$2\\sqrt{5}$"], h: "Use $\\sqrt{a}/\\sqrt{b} = \\sqrt{a/b}$.", s: "$\\sqrt{40/8} = \\sqrt{5}$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_8', q: "Simplify $(4\\sqrt{6})^2$.", a: "$96$", opts: ["$96$", "$24$", "$144$", "$36$"], h: "$a^2 \\times b$.", s: "$4^2 \\times 6 = 16 \\times 6 = 96$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_9', q: "Simplify $\\sqrt{27} - \\sqrt{12}$.", a: "$\\sqrt{3}$", opts: ["$\\sqrt{3}$", "$\\sqrt{15}$", "$3\\sqrt{3}$", "$-3\\sqrt{3}$"], h: "$3\\sqrt{3} - 2\\sqrt{3}$.", s: "$3\\sqrt{3} - 2\\sqrt{3} = \\sqrt{3}$", t: "Further simplification of surds", c: "2C" },
  { id: 's2bc_10', q: "Simplify $3\\sqrt{2} + 4\\sqrt{50} - \\sqrt{32}$.", a: "$19\\sqrt{2}$", opts: ["$19\\sqrt{2}$", "$23\\sqrt{2}$", "$15\\sqrt{2}$", "$27\\sqrt{2}$"], h: "Convert everything to $\\sqrt{2}$ form.", s: "$3\\sqrt{2} + 4(5\\sqrt{2}) - 4\\sqrt{2} = 3\\sqrt{2} + 20\\sqrt{2} - 4\\sqrt{2} = 19\\sqrt{2}$", t: "Further simplification of surds", c: "2C" },
  { id: 's2bc_11', q: "Simplify $\\sqrt{54} - \\sqrt{24} + \\sqrt{150}$.", a: "$6\\sqrt{6}$", opts: ["$6\\sqrt{6}$", "$4\\sqrt{6}$", "$\\sqrt{180}$", "$12\\sqrt{6}$"], h: "Simplify to $\\sqrt{6}$ terms.", s: "$3\\sqrt{6} - 2\\sqrt{6} + 5\\sqrt{6} = 6\\sqrt{6}$", t: "Further simplification of surds", c: "2C" },
  { id: 's2bc_12', q: "Simplify $\\sqrt{20} \\times \\sqrt{5}$.", a: "$10$", opts: ["$10$", "$\\sqrt{100}$", "$5\\sqrt{2}$", "$25$"], h: "$\\sqrt{100}$.", s: "$10$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_13', q: "Simplify $2\\sqrt{6} \\times 4\\sqrt{3}$.", a: "$24\\sqrt{2}$", opts: ["$24\\sqrt{2}$", "$8\\sqrt{18}$", "$12\\sqrt{2}$", "$24$"], h: "$8\\sqrt{18} = 8(3\\sqrt{2})$.", s: "$24\\sqrt{2}$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_14', q: "Simplify $\\sqrt{98} - \\sqrt{72}$.", a: "$\\sqrt{2}$", opts: ["$\\sqrt{2}$", "$2\\sqrt{2}$", "$\\sqrt{26}$", "$0$"], h: "$7\\sqrt{2} - 6\\sqrt{2}$.", s: "$\\sqrt{2}$", t: "Further simplification of surds", c: "2C" },
  { id: 's2bc_15', q: "Simplify $2\\sqrt{45} - \\sqrt{20} + 3\\sqrt{5}$.", a: "$7\\sqrt{5}$", opts: ["$7\\sqrt{5}$", "$9\\sqrt{5}$", "$5\\sqrt{5}$", "$11\\sqrt{5}$"], h: "$6\\sqrt{5} - 2\\sqrt{5} + 3\\sqrt{5}$.", s: "$7\\sqrt{5}$", t: "Further simplification of surds", c: "2C" },
  { id: 's2bc_16', q: "Simplify $\\sqrt{5} + \\sqrt{5}$.", a: "$2\\sqrt{5}$", opts: ["$2\\sqrt{5}$", "$\\sqrt{10}$", "$5$", "$\\sqrt{25}$"], h: "Like terms.", s: "$2\\sqrt{5}$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_17', q: "Simplify $\\sqrt{5} \\times \\sqrt{5}$.", a: "$5$", opts: ["$5$", "$\\sqrt{10}$", "$25$", "$\\sqrt{5}$"], h: "Square of a root.", s: "$5$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_18', q: "Simplify $2\\sqrt{5} + \\sqrt{7} - 3\\sqrt{5}$.", a: "$\\sqrt{7} - \\sqrt{5}$", opts: ["$\\sqrt{7} - \\sqrt{5}$", "$\\sqrt{7} + \\sqrt{5}$", "$-\\sqrt{5}$", "$\\sqrt{2}$"], h: "Combine $\\sqrt{5}$ terms.", s: "$(2-3)\\sqrt{5} + \\sqrt{7} = -\\sqrt{5} + \\sqrt{7}$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_19', q: "Simplify $\\sqrt{35} \\div \\sqrt{5}$.", a: "$\\sqrt{7}$", opts: ["$\\sqrt{7}$", "$7$", "$\\sqrt{30}$", "$30$"], h: "Divide inside.", s: "$\\sqrt{35/5} = \\sqrt{7}$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_20', q: "Simplify $6\\sqrt{55} \\div 2\\sqrt{11}$.", a: "$3\\sqrt{5}$", opts: ["$3\\sqrt{5}$", "$4\\sqrt{44}$", "$3\\sqrt{11}$", "$3$"], h: "Divide outer and inner.", s: "$(6/2)\\sqrt{55/11} = 3\\sqrt{5}$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_21', q: "Simplify $\\sqrt{8} \\times \\sqrt{2}$.", a: "$4$", opts: ["$4$", "$\\sqrt{16}$", "$2\\sqrt{2}$", "$16$"], h: "$\\sqrt{16}$.", s: "$4$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_22', q: "Simplify $\\sqrt{10} \\times \\sqrt{2}$.", a: "$2\\sqrt{5}$", opts: ["$2\\sqrt{5}$", "$\\sqrt{20}$", "$10\\sqrt{2}$", "$5\\sqrt{2}$"], h: "$\\sqrt{20} = 2\\sqrt{5}$.", s: "$2\\sqrt{5}$", t: "Surds and their arithmetic", c: "2B" },
  { id: 's2bc_23', q: "Simplify $2\\sqrt{6} \\times 4\\sqrt{15}$.", a: "$24\\sqrt{10}$", opts: ["$24\\sqrt{10}$", "$8\\sqrt{90}$", "$24\\sqrt{15}$", "$80$"], h: "$8\\sqrt{90} = 8(3\\sqrt{10}) = 24\\sqrt{10}$.", s: "$24\\sqrt{10}$", t: "Surds and their arithmetic", c: "2B" },

  // 2E: Binomial expansion (Q9-Q10)
  { id: 's2e_1', q: "Expand and simplify: $\\sqrt{5}(3 - \\sqrt{5})$.", a: "$3\\sqrt{5} - 5$", opts: ["$3\\sqrt{5} - 5$", "$3\\sqrt{5} - 25$", "$15 - 5$", "$3\\sqrt{5} + 5$"], h: "Distribute the $\\sqrt{5}$.", s: "$3\\sqrt{5} - (\\sqrt{5})^2 = 3\\sqrt{5} - 5$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_2', q: "Expand and simplify: $2\\sqrt{3}(\\sqrt{6} + 4)$.", a: "$6\\sqrt{2} + 8\\sqrt{3}$", opts: ["$6\\sqrt{2} + 8\\sqrt{3}$", "$2\\sqrt{18} + 8\\sqrt{3}$", "$12 + 8\\sqrt{3}$", "$6\\sqrt{3} + 8\\sqrt{3}$"], h: "$\\sqrt{3} \\times \\sqrt{6} = \\sqrt{18} = 3\\sqrt{2}$.", s: "$2\\sqrt{18} + 8\\sqrt{3} = 2(3\\sqrt{2}) + 8\\sqrt{3} = 6\\sqrt{2} + 8\\sqrt{3}$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_3', q: "Expand: $(\\sqrt{3} + 4)(\\sqrt{3} - 1)$.", a: "$-1 + 3\\sqrt{3}$", opts: ["$-1 + 3\\sqrt{3}$", "$3 + 3\\sqrt{3} - 4$", "$-1 - 3\\sqrt{3}$", "$7 + 3\\sqrt{3}$"], h: "Use FOIL.", s: "$3 - \\sqrt{3} + 4\\sqrt{3} - 4 = -1 + 3\\sqrt{3}$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_4', q: "Expand and simplify: $(2\\sqrt{5} + 3)(3\\sqrt{5} - 2)$.", a: "$24 + 5\\sqrt{5}$", opts: ["$24 + 5\\sqrt{5}$", "$30 + 5\\sqrt{5} - 6$", "$24 - 5\\sqrt{5}$", "$36 + 5\\sqrt{5}$"], h: "Use FOIL.", s: "$6(5) - 4\\sqrt{5} + 9\\sqrt{5} - 6 = 30 + 5\\sqrt{5} - 6 = 24 + 5\\sqrt{5}$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_5', q: "Simplify: $(\\sqrt{11} - 3)(\\sqrt{11} + 3)$.", a: "$2$", opts: ["$2$", "$8$", "$121 - 9$", "$20$"], h: "Difference of squares.", s: "$11 - 9 = 2$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_6', q: "Expand: $(\\sqrt{6} - 2)^2$.", a: "$10 - 4\\sqrt{6}$", opts: ["$10 - 4\\sqrt{6}$", "$8 - 4\\sqrt{6}$", "$10 + 4\\sqrt{6}$", "$2$"], h: "$a^2 - 2ab + b^2$.", s: "$6 - 2(2\\sqrt{6}) + 4 = 10 - 4\\sqrt{6}$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_7', q: "Expand: $(3 + 2\\sqrt{2})^2$.", a: "$17 + 12\\sqrt{2}$", opts: ["$17 + 12\\sqrt{2}$", "$11 + 12\\sqrt{2}$", "$17 + 6\\sqrt{2}$", "$25$"], h: "$9 + 2(3)(2\\sqrt{2}) + (2\\sqrt{2})^2$.", s: "$9 + 12\\sqrt{2} + 8 = 17 + 12\\sqrt{2}$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_8', q: "Expand and simplify: $(\\sqrt{5} + 2)(3 - \\sqrt{5})$.", a: "$\\sqrt{5} + 1$", opts: ["$\\sqrt{5} + 1$", "$\\sqrt{5} - 1$", "$3\\sqrt{5} - 5 + 6 - 2\\sqrt{5}$", "$11$"], h: "FOIL.", s: "$3\\sqrt{5} - 5 + 6 - 2\\sqrt{5} = \\sqrt{5} + 1$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_9', q: "Expand: $(2\\sqrt{3} - 1)(3\\sqrt{3} + 5)$.", a: "$13 + 7\\sqrt{3}$", opts: ["$13 + 7\\sqrt{3}$", "$18 + 7\\sqrt{3} - 5$", "$23 + 7\\sqrt{3}$", "$13 - 7\\sqrt{3}$"], h: "FOIL.", s: "$6(3) + 10\\sqrt{3} - 3\\sqrt{3} - 5 = 18 + 7\\sqrt{3} - 5 = 13 + 7\\sqrt{3}$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_10', q: "Expand: $(\\sqrt{10} - 3)(\\sqrt{10} + 3)$.", a: "$1$", opts: ["$1$", "$7$", "$19$", "$10-9$"], h: "Difference of squares.", s: "$10 - 9 = 1$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_11', q: "Expand: $(\\sqrt{7} - 2)^2$.", a: "$11 - 4\\sqrt{7}$", opts: ["$11 - 4\\sqrt{7}$", "$9 - 4\\sqrt{7}$", "$11 + 4\\sqrt{7}$", "$3$"], h: "$7 - 2(2\\sqrt{7}) + 4$.", s: "$11 - 4\\sqrt{7}$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_12', q: "Expand: $(\\sqrt{5} + \\sqrt{2})^2$.", a: "$7 + 2\\sqrt{10}$", opts: ["$7 + 2\\sqrt{10}$", "$5 + 2$", "$7 + \\sqrt{10}$", "$9$"], h: "$5 + 2\\sqrt{10} + 2$.", s: "$7 + 2\\sqrt{10}$", t: "Binomial expansion of surds", c: "2E" },
  { id: 's2e_13', q: "Expand: $(4 - 3\\sqrt{2})^2$.", a: "$34 - 24\\sqrt{2}$", opts: ["$34 - 24\\sqrt{2}$", "$16 - 18 + 24\\sqrt{2}$", "$22 - 24\\sqrt{2}$", "$16 - 24\\sqrt{2} + 18$"], h: "$16 - 2(4)(3\\sqrt{2}) + 18$.", s: "$16 - 24\\sqrt{2} + 18 = 34 - 24\\sqrt{2}$", t: "Binomial expansion of surds", c: "2E" },

  // 2D & 2F: Rationalizing (Q11-Q13, Q15, Q17)
  { id: 's2f_1', q: "Rationalize $\\frac{5}{\\sqrt{7}}$.", a: "$\\frac{5\\sqrt{7}}{7}$", opts: ["$\\frac{5\\sqrt{7}}{7}$", "$\\frac{\\sqrt{35}}{7}$", "$\\frac{5}{7}$", "$5\\sqrt{7}$"], h: "Multiply by $\\sqrt{7}/\\sqrt{7}$.", s: "$\\frac{5\\sqrt{7}}{7}$", t: "Rationalising the denominator", c: "2D" },
  { id: 's2f_2', q: "Rationalize $\\frac{\\sqrt{3}}{2\\sqrt{5}}$.", a: "$\\frac{\\sqrt{15}}{10}$", opts: ["$\\frac{\\sqrt{15}}{10}$", "$\\frac{\\sqrt{3}}{10}$", "$\\frac{3}{10}$", "$\\frac{\\sqrt{15}}{5}$"], h: "Multiply by $\\sqrt{5}/\\sqrt{5}$.", s: "$\\frac{\\sqrt{15}}{2(5)} = \\frac{\\sqrt{15}}{10}$", t: "Rationalising the denominator", c: "2D" },
  { id: 's2f_3', q: "Rationalize $\\frac{1}{\\sqrt{5} + 2}$.", a: "$\\sqrt{5} - 2$", opts: ["$\\sqrt{5} - 2$", "$\\frac{\\sqrt{5}-2}{1}$", "$\\sqrt{5} + 2$", "$\\frac{1}{\\sqrt{5}-2}$"], h: "Conjugate is $\\sqrt{5} - 2$.", s: "$\\frac{\\sqrt{5}-2}{5-4} = \\sqrt{5}-2$", t: "Further rationalising the denominator", c: "2F" },
  { id: 's2f_4', q: "Rationalize $\\frac{6}{\\sqrt{5} - \\sqrt{2}}$.", a: "$2(\\sqrt{5} + \\sqrt{2})$", opts: ["$2(\\sqrt{5} + \\sqrt{2})$", "$\\frac{6(\\sqrt{5}+\\sqrt{2})}{3}$", "$3(\\sqrt{5} + \\sqrt{2})$", "$2\\sqrt{5} + 2\\sqrt{2}$"], h: "Denominator becomes $5-2=3$.", s: "$\\frac{6(\\sqrt{5}+\\sqrt{2})}{3} = 2(\\sqrt{5}+\\sqrt{2})$", t: "Further rationalising the denominator", c: "2F" },
  { id: 's2f_5', q: "Rationalize $\\frac{\\sqrt{2}}{\\sqrt{6} + 2}$.", a: "$\\frac{\\sqrt{12} - 2\\sqrt{2}}{2}$", opts: ["$\\frac{\\sqrt{3} - \\sqrt{2}}{1}$", "$\\frac{2\\sqrt{3} - 2\\sqrt{2}}{2}$", "$\\sqrt{3} - \\sqrt{2}$", "$\\frac{\\sqrt{12} + 2\\sqrt{2}}{2}$"], h: "Multiply by $(\\sqrt{6}-2)$.", s: "$\\frac{\\sqrt{12}-2\\sqrt{2}}{6-4} = \\frac{2\\sqrt{3}-2\\sqrt{2}}{2} = \\sqrt{3}-\\sqrt{2}$", t: "Further rationalising the denominator", c: "2F" },
  { id: 's2f_6', q: "Simplify $\\frac{3}{\\sqrt{5}-2} + \\frac{3}{\\sqrt{5}+2}$.", a: "$6\\sqrt{5}$", opts: ["$6\\sqrt{5}$", "$12$", "$6$", "$2\\sqrt{5}$"], h: "Common denominator is $(5-4)=1$.", s: "$\\frac{3(\\sqrt{5}+2) + 3(\\sqrt{5}-2)}{1} = 3\\sqrt{5} + 6 + 3\\sqrt{5} - 6 = 6\\sqrt{5}$", t: "Further rationalising the denominator", c: "2F" },
  { id: 's2f_7', q: "Rationalize $\\frac{\\sqrt{7} - \\sqrt{5}}{\\sqrt{7} + \\sqrt{5}}$.", a: "$6 - \\sqrt{35}$", opts: ["$6 - \\sqrt{35}$", "$12 - 2\\sqrt{35}$", "$\\frac{12-2\\sqrt{35}}{2}$", "$1$"], h: "Multiply by $(\\sqrt{7}-\\sqrt{5})$.", s: "$\\frac{7 - 2\\sqrt{35} + 5}{7-5} = \\frac{12-2\\sqrt{35}}{2} = 6-\\sqrt{35}$", t: "Further rationalising the denominator", c: "2F" },
  { id: 's2f_8', q: "Rationalize $\\frac{3\\sqrt{2} + 1}{3\\sqrt{2} - 1}$.", a: "$\\frac{19 + 6\\sqrt{2}}{17}$", opts: ["$\\frac{19 + 6\\sqrt{2}}{17}$", "$\\frac{19 - 6\\sqrt{2}}{17}$", "$\\frac{17 + 6\\sqrt{2}}{19}$", "$1$"], h: "Denominator is $(3\\sqrt{2})^2 - 1^2 = 18-1=17$.", s: "$\\frac{(3\\sqrt{2}+1)^2}{17} = \\frac{18 + 6\\sqrt{2} + 1}{17} = \\frac{19+6\\sqrt{2}}{17}$", t: "Further rationalising the denominator", c: "2F" },
  { id: 's2f_9', q: "Rationalize $\\frac{1}{\\sqrt{5}}$.", a: "$\\frac{\\sqrt{5}}{5}$", opts: ["$\\frac{\\sqrt{5}}{5}$", "$\\sqrt{5}$", "$\\frac{1}{5}$", "$\\frac{5}{\\sqrt{5}}$"], h: "Simple rationalize.", s: "$\\frac{\\sqrt{5}}{5}$", t: "Rationalising the denominator", c: "2D" },
  { id: 's2f_10', q: "Rationalize $\\frac{3}{\\sqrt{2}}$.", a: "$\\frac{3\\sqrt{2}}{2}$", opts: ["$\\frac{3\\sqrt{2}}{2}$", "$3\\sqrt{2}$", "$\\frac{\\sqrt{6}}{2}$", "$\\frac{2\\sqrt{3}}{3}$"], h: "Multiply by $\\sqrt{2}$.", s: "$\\frac{3\\sqrt{2}}{2}$", t: "Rationalising the denominator", c: "2D" },
  { id: 's2f_11', q: "Rationalize $\\frac{1}{5\\sqrt{3}}$.", a: "$\\frac{\\sqrt{3}}{15}$", opts: ["$\\frac{\\sqrt{3}}{15}$", "$\\frac{5\\sqrt{3}}{15}$", "$\\frac{\\sqrt{3}}{5}$", "$\\frac{1}{15}$"], h: "Multiply by $\\sqrt{3}$.", s: "$\\frac{\\sqrt{3}}{5(3)} = \\frac{\\sqrt{3}}{15}$", t: "Rationalising the denominator", c: "2D" },
  { id: 's2f_12', q: "Rationalize $\\frac{1}{\\sqrt{5} + \\sqrt{2}}$.", a: "$\\frac{\\sqrt{5} - \\sqrt{2}}{3}$", opts: ["$\\frac{\\sqrt{5} - \\sqrt{2}}{3}$", "$\\frac{\\sqrt{5} + \\sqrt{2}}{3}$", "$\\sqrt{5} - \\sqrt{2}$", "$\\frac{\\sqrt{3}}{3}$"], h: "Conjugate.", s: "$\\frac{\\sqrt{5}-\\sqrt{2}}{5-2} = \\frac{\\sqrt{5}-\\sqrt{2}}{3}$", t: "Further rationalising the denominator", c: "2F" },
  { id: 's2f_13', q: "Rationalize $\\frac{\\sqrt{3}}{\\sqrt{3} + 1}$.", a: "$\\frac{3 - \\sqrt{3}}{2}$", opts: ["$\\frac{3 - \\sqrt{3}}{2}$", "$\\frac{3 + \\sqrt{3}}{2}$", "$1 - \\sqrt{3}$", "$\\frac{\\sqrt{3}-3}{2}$"], h: "Multiply by $(\\sqrt{3}-1)$.", s: "$\\frac{3 - \\sqrt{3}}{3-1} = \\frac{3-\\sqrt{3}}{2}$", t: "Further rationalising the denominator", c: "2F" },
  { id: 's2f_14', q: "Rationalize $\\frac{3\\sqrt{7}}{2\\sqrt{5} - \\sqrt{7}}$.", a: "$\\frac{6\\sqrt{35} + 21}{13}$", opts: ["$\\frac{6\\sqrt{35} + 21}{13}$", "$\\frac{6\\sqrt{35} - 21}{13}$", "$\\frac{3\\sqrt{35} + 21}{13}$", "$21$"], h: "Multiply by $(2\\sqrt{5}+\\sqrt{7})$.", s: "$\\frac{3\\sqrt{7}(2\\sqrt{5}+\\sqrt{7})}{4(5)-7} = \\frac{6\\sqrt{35}+21}{13}$", t: "Further rationalising the denominator", c: "2F" },

  // 2G: Equations (Q14, Q16)
  { id: 's2g_1', q: "Find $x$ if $\\sqrt{12} + \\sqrt{27} = \\sqrt{x}$.", a: "$75$", opts: ["$75$", "$39$", "$15$", "$45$"], h: "Left side is $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.", s: "$5\\sqrt{3} = \\sqrt{25 \\times 3} = \\sqrt{75}$", t: "Surd equations", c: "2G" },
  { id: 's2g_2', q: "Find $x$ if $\\sqrt{18} + \\sqrt{50} = \\sqrt{x}$.", a: "$128$", opts: ["$128$", "$68$", "$32$", "$98$"], h: "Left side is $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$.", s: "$8\\sqrt{2} = \\sqrt{64 \\times 2} = \\sqrt{128}$", t: "Surd equations", c: "2G" },
  { id: 's2g_3', q: "Find $a$ and $b$ if $\\frac{2}{\\sqrt{3}-1} = a + b\\sqrt{3}$.", a: "$a=1, b=1$", opts: ["$a=1, b=1$", "$a=2, b=1$", "$a=1, b=2$", "$a=1, b=-1$"], h: "Rationalize the denominator.", s: "$\\frac{2(\\sqrt{3}+1)}{3-1} = \\frac{2(\\sqrt{3}+1)}{2} = 1 + \\sqrt{3}$. So $a=1, b=1$.", t: "Surd equations", c: "2G" },
  { id: 's2g_4', q: "Find $p$ and $q$ if $\\frac{\\sqrt{5}}{\\sqrt{5}-2} = p + q\\sqrt{5}$.", a: "$p=10, q=2$", opts: ["$p=5, q=2$", "$p=10, q=2$", "$p=5, q=1$", "$p=2, q=1$"], h: "Rationalize by $(\\sqrt{5}+2)$.", s: "$\\frac{\\sqrt{5}(\\sqrt{5}+2)}{5-4} = 5 + 2\\sqrt{5}$. Wait, my calc was wrong. $p=5, q=2$.", t: "Surd equations", c: "2G" },
  { id: 's2g_5', q: "If $\\sqrt{20} + \\sqrt{45} = \\sqrt{x}$, find $x$.", a: "$125$", opts: ["$125$", "$65$", "$25$", "$100$"], h: "$2\\sqrt{5} + 3\\sqrt{5} = 5\\sqrt{5}$.", s: "$5\\sqrt{5} = \\sqrt{125}$", t: "Surd equations", c: "2G" }
,

  // 2A: Pythagoras Theorem Applications (Appended)
  {
    "id": "y9-2a-1a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has two shorter sides of length 9 cm and 12 cm. Use Pythagoras' theorem to find the length of the hypotenuse $c$.",
    "a": "15",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "c^2 = 9^2 + 12^2"
      },
      {
        "explanation": "Calculate the squares.",
        "workingOut": "c^2 = 81 + 144 = 225"
      },
      {
        "explanation": "Take the square root to find the hypotenuse.",
        "workingOut": "c = \\sqrt{225} = 15"
      }
    ]
  },
  {
    "id": "y9-2a-1b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has two shorter sides of length 8 cm and 15 cm. Use Pythagoras' theorem to find the length of the hypotenuse $h$.",
    "a": "17",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "h^2 = 8^2 + 15^2"
      },
      {
        "explanation": "Calculate the squares.",
        "workingOut": "h^2 = 64 + 225 = 289"
      },
      {
        "explanation": "Take the square root to find the hypotenuse.",
        "workingOut": "h = \\sqrt{289} = 17"
      }
    ]
  },
  {
    "id": "y9-2a-1c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has two shorter sides of length 1.5 cm and 2 cm. Use Pythagoras' theorem to find the length of the hypotenuse $p$.",
    "a": "2.5",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "p^2 = 1.5^2 + 2^2"
      },
      {
        "explanation": "Calculate the squares.",
        "workingOut": "p^2 = 2.25 + 4 = 6.25"
      },
      {
        "explanation": "Take the square root to find the hypotenuse.",
        "workingOut": "p = \\sqrt{6.25} = 2.5"
      }
    ]
  },
  {
    "id": "y9-2a-1d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has two shorter sides of length 20 cm and 21 cm. Use Pythagoras' theorem to find the length of the hypotenuse $m$.",
    "a": "29",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "m^2 = 20^2 + 21^2"
      },
      {
        "explanation": "Calculate the squares.",
        "workingOut": "m^2 = 400 + 441 = 841"
      },
      {
        "explanation": "Take the square root to find the hypotenuse.",
        "workingOut": "m = \\sqrt{841} = 29"
      }
    ]
  },
  {
    "id": "y9-2a-2a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 13 cm and one shorter side of 5 cm. Use Pythagoras' theorem to find the length of the unknown side $k$.",
    "a": "12",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem and rearrange to find the shorter side.",
        "workingOut": "k^2 = 13^2 - 5^2"
      },
      {
        "explanation": "Calculate the squares and subtract.",
        "workingOut": "k^2 = 169 - 25 = 144"
      },
      {
        "explanation": "Take the square root to find the side length.",
        "workingOut": "k = \\sqrt{144} = 12"
      }
    ]
  },
  {
    "id": "y9-2a-2b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 25 cm and one shorter side of 24 cm. Use Pythagoras' theorem to find the length of the unknown side $w$.",
    "a": "7",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem and rearrange to find the shorter side.",
        "workingOut": "w^2 = 25^2 - 24^2"
      },
      {
        "explanation": "Calculate the squares and subtract.",
        "workingOut": "w^2 = 625 - 576 = 49"
      },
      {
        "explanation": "Take the square root to find the side length.",
        "workingOut": "w = \\sqrt{49} = 7"
      }
    ]
  },
  {
    "id": "y9-2a-2c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 39 cm and one shorter side of 15 cm. Use Pythagoras' theorem to find the length of the unknown side $n$.",
    "a": "36",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem and rearrange to find the shorter side.",
        "workingOut": "n^2 = 39^2 - 15^2"
      },
      {
        "explanation": "Calculate the squares and subtract.",
        "workingOut": "n^2 = 1521 - 225 = 1296"
      },
      {
        "explanation": "Take the square root to find the side length.",
        "workingOut": "n = \\sqrt{1296} = 36"
      }
    ]
  },
  {
    "id": "y9-2a-2d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 41 cm and one shorter side of 9 cm. Use Pythagoras' theorem to find the length of the unknown side $r$.",
    "a": "40",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem and rearrange to find the shorter side.",
        "workingOut": "r^2 = 41^2 - 9^2"
      },
      {
        "explanation": "Calculate the squares and subtract.",
        "workingOut": "r^2 = 1681 - 81 = 1600"
      },
      {
        "explanation": "Take the square root to find the side length.",
        "workingOut": "r = \\sqrt{1600} = 40"
      }
    ]
  },
  {
    "id": "y9-2a-2e",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 37 cm and one shorter side of 35 cm. Use Pythagoras' theorem to find the length of the unknown side $t$.",
    "a": "12",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem and rearrange to find the shorter side.",
        "workingOut": "t^2 = 37^2 - 35^2"
      },
      {
        "explanation": "Calculate the squares and subtract.",
        "workingOut": "t^2 = 1369 - 1225 = 144"
      },
      {
        "explanation": "Take the square root to find the side length.",
        "workingOut": "t = \\sqrt{144} = 12"
      }
    ]
  },
  {
    "id": "y9-2a-2f",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A right-angled triangle has a hypotenuse of 65 cm and one shorter side of 63 cm. Use Pythagoras' theorem to find the length of the unknown side $z$.",
    "a": "16",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem and rearrange to find the shorter side.",
        "workingOut": "z^2 = 65^2 - 63^2"
      },
      {
        "explanation": "Calculate the squares and subtract.",
        "workingOut": "z^2 = 4225 - 3969 = 256"
      },
      {
        "explanation": "Take the square root to find the side length.",
        "workingOut": "z = \\sqrt{256} = 16"
      }
    ]
  },
  {
    "id": "y9-2a-3a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use a calculator to find the approximation to 2 decimal places for $\\sqrt{21}$.",
    "a": "4.58",
    "opts": [],
    "h": "Enter the number in your calculator and round the second decimal digit.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Calculate the square root and round to 2 decimal places.",
        "workingOut": "\\sqrt{21} \\approx 4.58"
      }
    ]
  },
  {
    "id": "y9-2a-3b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use a calculator to find the approximation to 2 decimal places for $\\sqrt{43}$.",
    "a": "6.56",
    "opts": [],
    "h": "Enter the number in your calculator and round the second decimal digit.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Calculate the square root and round to 2 decimal places.",
        "workingOut": "\\sqrt{43} \\approx 6.56"
      }
    ]
  },
  {
    "id": "y9-2a-3c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use a calculator to find the approximation to 2 decimal places for $\\sqrt{79}$.",
    "a": "8.89",
    "opts": [],
    "h": "Enter the number in your calculator and round the second decimal digit.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Calculate the square root and round to 2 decimal places.",
        "workingOut": "\\sqrt{79} \\approx 8.89"
      }
    ]
  },
  {
    "id": "y9-2a-3d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use a calculator to find the approximation to 2 decimal places for $\\sqrt{515}$.",
    "a": "22.69",
    "opts": [],
    "h": "Enter the number in your calculator and round the second decimal digit.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Calculate the square root and round to 2 decimal places.",
        "workingOut": "\\sqrt{515} \\approx 22.69"
      }
    ]
  },
  {
    "id": "y9-2a-4a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse $c$ in a right-angled triangle with shorter sides 4 cm and 7 cm. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "\\sqrt{65}, 8.06",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "c^2 = 4^2 + 7^2 = 16 + 49 = 65"
      },
      {
        "explanation": "Take the square root and approximate.",
        "workingOut": "c = \\sqrt{65} \\approx 8.06"
      }
    ]
  },
  {
    "id": "y9-2a-4b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse $d$ in a right-angled triangle with shorter sides 5 cm and 9 cm. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "\\sqrt{106}, 10.30",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "d^2 = 5^2 + 9^2 = 25 + 81 = 106"
      },
      {
        "explanation": "Take the square root and approximate.",
        "workingOut": "d = \\sqrt{106} \\approx 10.30"
      }
    ]
  },
  {
    "id": "y9-2a-4c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse $m$ in a right-angled triangle with shorter sides 8 cm and 3 cm. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "\\sqrt{73}, 8.54",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "m^2 = 8^2 + 3^2 = 64 + 9 = 73"
      },
      {
        "explanation": "Take the square root and approximate.",
        "workingOut": "m = \\sqrt{73} \\approx 8.54"
      }
    ]
  },
  {
    "id": "y9-2a-4d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse $n$ in a right-angled triangle with shorter sides 6 cm and 4 cm. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "\\sqrt{52}, 7.21",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "n^2 = 6^2 + 4^2 = 36 + 16 = 52"
      },
      {
        "explanation": "Take the square root and approximate.",
        "workingOut": "n = \\sqrt{52} \\approx 7.21"
      }
    ]
  },
  {
    "id": "y9-2a-4e",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse $p$ in a right-angled triangle with shorter sides 10 cm and 6 cm. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "\\sqrt{136}, 11.66",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "p^2 = 10^2 + 6^2 = 100 + 36 = 136"
      },
      {
        "explanation": "Take the square root and approximate.",
        "workingOut": "p = \\sqrt{136} \\approx 11.66"
      }
    ]
  },
  {
    "id": "y9-2a-4f",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the hypotenuse $q$ in a right-angled triangle with shorter sides 8 cm and 5 cm. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "\\sqrt{89}, 9.43",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "q^2 = 8^2 + 5^2 = 64 + 25 = 89"
      },
      {
        "explanation": "Take the square root and approximate.",
        "workingOut": "q = \\sqrt{89} \\approx 9.43"
      }
    ]
  },
  {
    "id": "y9-2a-4g",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the shorter side $a$ in a right-angled triangle with hypotenuse 15 cm and the other side 5 cm. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "\\sqrt{200}, 14.14",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "a^2 = 15^2 - 5^2 = 225 - 25 = 200"
      },
      {
        "explanation": "Take the square root and approximate.",
        "workingOut": "a = \\sqrt{200} \\approx 14.14"
      }
    ]
  },
  {
    "id": "y9-2a-4h",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use Pythagoras' theorem to find the length of the shorter side $b$ in a right-angled triangle with hypotenuse 12 cm and the other side 8 cm. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "\\sqrt{80}, 8.94",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem.",
        "workingOut": "b^2 = 12^2 - 8^2 = 144 - 64 = 80"
      },
      {
        "explanation": "Take the square root and approximate.",
        "workingOut": "b = \\sqrt{80} \\approx 8.94"
      }
    ]
  },
  {
    "id": "y9-2a-4i",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "An isosceles triangle has a base of 8 cm and a height of 5 cm. Use Pythagoras' theorem to find the slant length $x$. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "\\sqrt{41}, 6.40",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Split the isosceles triangle into two right-angled triangles. The base is halved.",
        "workingOut": "\\text{Half base} = 8 / 2 = 4"
      },
      {
        "explanation": "Apply Pythagoras' theorem to find the hypotenuse (slant).",
        "workingOut": "x^2 = 4^2 + 5^2 = 16 + 25 = 41"
      },
      {
        "explanation": "Take the square root and approximate.",
        "workingOut": "x = \\sqrt{41} \\approx 6.40"
      }
    ]
  },
  {
    "id": "y9-2a-4j",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "An isosceles triangle has a slant length of 10 cm and a height of 7 cm. Use Pythagoras' theorem to find the total base length $y$. Calculate your answer first as an exact square root and then correct to 2 decimal places. (Format answer as \"exact, approx\")",
    "a": "2\\sqrt{51}, 14.28",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Split the isosceles triangle into two right-angled triangles to find half the base.",
        "workingOut": "\\text{Half base}^2 = 10^2 - 7^2 = 100 - 49 = 51"
      },
      {
        "explanation": "Find half the base and multiply by 2 for the full base.",
        "workingOut": "\\text{Half base} = \\sqrt{51}\\\\ y = 2 \\times \\sqrt{51} = 2\\sqrt{51} \\approx 14.28"
      }
    ]
  },
  {
    "id": "y9-2a-5a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 12, 35, 37 is right-angled.",
    "a": "Yes",
    "opts": [
      "Yes",
      "No"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "12^2 = 144, \\quad 35^2 = 1225, \\quad 37^2 = 1369"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "144 + 1225 = 1369. This equals 1369. Therefore, Yes."
      }
    ]
  },
  {
    "id": "y9-2a-5b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 14, 48, 50 is right-angled.",
    "a": "Yes",
    "opts": [
      "Yes",
      "No"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "14^2 = 196, \\quad 48^2 = 2304, \\quad 50^2 = 2500"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "196 + 2304 = 2500. This equals 2500. Therefore, Yes."
      }
    ]
  },
  {
    "id": "y9-2a-5c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 5, 7, 9 is right-angled.",
    "a": "No",
    "opts": [
      "Yes",
      "No"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "5^2 = 25, \\quad 7^2 = 49, \\quad 9^2 = 81"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "25 + 49 = 74. This does not equal 81. Therefore, No."
      }
    ]
  },
  {
    "id": "y9-2a-5d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 2.5, 6, 6.5 is right-angled.",
    "a": "Yes",
    "opts": [
      "Yes",
      "No"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "2.5^2 = 6.25, \\quad 6^2 = 36, \\quad 6.5^2 = 42.25"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "6.25 + 36 = 42.25. This equals 42.25. Therefore, Yes."
      }
    ]
  },
  {
    "id": "y9-2a-5e",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 8, 12, 15 is right-angled.",
    "a": "No",
    "opts": [
      "Yes",
      "No"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "8^2 = 64, \\quad 12^2 = 144, \\quad 15^2 = 225"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "64 + 144 = 208. This does not equal 225. Therefore, No."
      }
    ]
  },
  {
    "id": "y9-2a-5f",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Determine whether or not the triangle with the side lengths 11, 60, 61 is right-angled.",
    "a": "Yes",
    "opts": [
      "Yes",
      "No"
    ],
    "h": "Check if the sum of the squares of the two smaller sides equals the square of the largest side.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Square all three sides.",
        "workingOut": "11^2 = 121, \\quad 60^2 = 3600, \\quad 61^2 = 3721"
      },
      {
        "explanation": "Check if $a^2 + b^2 = c^2$.",
        "workingOut": "121 + 3600 = 3721. This equals 3721. Therefore, Yes."
      }
    ]
  },
  {
    "id": "y9-2a-6a",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Lengths of the two shortest sides of a right-angled triangle are 5 cm and 12 cm. Find the length of the hypotenuse. (Give your answer as a whole number or square root like $\\sqrt{x}$)",
    "a": "13",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Use Pythagoras' theorem.",
        "workingOut": "a^2 + b^2 = c^2"
      },
      {
        "explanation": "Solve for the unknown side.",
        "workingOut": "\\text{Result: } 13"
      }
    ]
  },
  {
    "id": "y9-2a-6b",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Lengths of the two shortest sides of a right-angled triangle are 4 cm and 7 cm. Find the length of the hypotenuse. (Give your answer as a whole number or square root like $\\sqrt{x}$)",
    "a": "\\sqrt{65}",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Use Pythagoras' theorem.",
        "workingOut": "a^2 + b^2 = c^2"
      },
      {
        "explanation": "Solve for the unknown side.",
        "workingOut": "\\text{Result: } \\sqrt{65}"
      }
    ]
  },
  {
    "id": "y9-2a-6c",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "In a right-angled triangle, the hypotenuse is 11 cm and one shorter side is 5 cm. Find the length of the other shorter side. (Give your answer as a whole number or square root like $\\sqrt{x}$)",
    "a": "\\sqrt{96}",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Use Pythagoras' theorem.",
        "workingOut": "a^2 + b^2 = c^2"
      },
      {
        "explanation": "Solve for the unknown side.",
        "workingOut": "\\text{Result: } \\sqrt{96}"
      }
    ]
  },
  {
    "id": "y9-2a-6d",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Lengths of the two shortest sides of a right-angled triangle are 7 cm and 9 cm. Find the length of the hypotenuse. (Give your answer as a whole number or square root like $\\sqrt{x}$)",
    "a": "\\sqrt{130}",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Use Pythagoras' theorem.",
        "workingOut": "a^2 + b^2 = c^2"
      },
      {
        "explanation": "Solve for the unknown side.",
        "workingOut": "\\text{Result: } \\sqrt{130}"
      }
    ]
  },
  {
    "id": "y9-2a-6e",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "In a right-angled triangle, the hypotenuse is 14 cm and one shorter side is 6 cm. Find the length of the other shorter side. (Give your answer as a whole number or square root like $\\sqrt{x}$)",
    "a": "\\sqrt{160}",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Use Pythagoras' theorem.",
        "workingOut": "a^2 + b^2 = c^2"
      },
      {
        "explanation": "Solve for the unknown side.",
        "workingOut": "\\text{Result: } \\sqrt{160}"
      }
    ]
  },
  {
    "id": "y9-2a-7",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "A window frame has height 1.5 m and width 0.8 m. Will a piece of glass 1.8 m wide fit through the opening diagonally?",
    "a": "No",
    "opts": [
      "Yes",
      "No"
    ],
    "h": "Calculate the diagonal of the window frame and compare it to 1.8 m.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Calculate the diagonal using Pythagoras' theorem.",
        "workingOut": "\\text{Diagonal}^2 = 1.5^2 + 0.8^2 = 2.25 + 0.64 = 2.89"
      },
      {
        "explanation": "Take the square root.",
        "workingOut": "\\text{Diagonal} = \\sqrt{2.89} = 1.7 \\text{ m}"
      },
      {
        "explanation": "Compare with the width of the glass.",
        "workingOut": "1.7 \\text{ m} < 1.8 \\text{ m}, \\text{ so it will not fit.}"
      }
    ]
  },
  {
    "id": "y9-2a-8",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A tradesman is making a wooden rectangular frame for a gate. In order to make the frame stronger, he will put a diagonal piece into the frame. If the frame is 1.4 m wide and 2.2 m high, find the length of the diagonal piece of wood, in metres, correct to 3 decimal places.",
    "a": "2.608",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Use Pythagoras' theorem to find the diagonal.",
        "workingOut": "d^2 = 1.4^2 + 2.2^2"
      },
      {
        "explanation": "Calculate the sum of squares.",
        "workingOut": "d^2 = 1.96 + 4.84 = 6.8"
      },
      {
        "explanation": "Take the square root and round to 3 decimal places.",
        "workingOut": "d = \\sqrt{6.8} \\approx 2.608"
      }
    ]
  },
  {
    "id": "y9-2a-9",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A signwriter leans his ladder against a wall so that he can paint a sign. The wall is vertical and the ground in front of the wall is horizontal. The signwriter's ladder is 5 m long. If the signwriter wants the top of the ladder to be 4.5 m above the ground when leaning against the wall, how far, correct to 1 decimal place, should the foot of the ladder be placed from the wall?",
    "a": "2.2",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "The ladder forms the hypotenuse of a right-angled triangle.",
        "workingOut": "x^2 + 4.5^2 = 5^2"
      },
      {
        "explanation": "Solve for the horizontal distance $x$.",
        "workingOut": "x^2 = 25 - 20.25 = 4.75"
      },
      {
        "explanation": "Take the square root and round to 1 decimal place.",
        "workingOut": "x = \\sqrt{4.75} \\approx 2.179 \\approx 2.2"
      }
    ]
  },
  {
    "id": "y9-2a-10",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "A boat builder needs to calculate the lengths of the stays needed to support a mast on a yacht. The mast is supported by two identical side stays ($AB$ and $AD$) going from point $A$ on the mast to each side of the boat, and a front stay ($AE$) going to the front of the boat. The base of the mast is $C$.\nGiven $AC = 4$ m, $CB = CD = 1.5$ m, and $CE = 2.2$ m:\n\na) Find the length, to the nearest centimetre, of one of the side stays, $AB$ or $AD$.\nb) Find the length, to the nearest centimetre, of the front stay, $AE$.\nc) Find the total length of stainless steel wire needed to make the three stays.",
    "a": "a) 427 cm, b) 457 cm, c) 1311 cm",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "a) Use Pythagoras in $\\triangle ACB$.",
        "workingOut": "AB = \\sqrt{AC^2 + CB^2} = \\sqrt{4^2 + 1.5^2} = \\sqrt{16 + 2.25} = \\sqrt{18.25} \\approx 4.272 \\text{ m} = 427 \\text{ cm}"
      },
      {
        "explanation": "b) Use Pythagoras in $\\triangle ACE$.",
        "workingOut": "AE = \\sqrt{AC^2 + CE^2} = \\sqrt{4^2 + 2.2^2} = \\sqrt{16 + 4.84} = \\sqrt{20.84} \\approx 4.565 \\text{ m} = 457 \\text{ cm}"
      },
      {
        "explanation": "c) Sum the lengths of the three stays.",
        "workingOut": "\\text{Total} = 2 \\times 4.272 + 4.565 = 8.544 + 4.565 = 13.109 \\text{ m} = 1311 \\text{ cm}"
      }
    ]
  },
  {
    "id": "y9-2a-11",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "As part of a design, an artist draws a circle passing through the four corners (vertices) of a square.\n\na) If the square has side lengths of 6 cm, what is the radius, to the nearest millimetre, of the circle?\nb) If the circle has a radius of 5 cm, what are the side lengths, to the nearest millimetre, of the square?",
    "a": "a) 42 mm, b) 71 mm",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "a) The diagonal of the square is the diameter of the circle.",
        "workingOut": "\\text{Diagonal} = \\sqrt{6^2 + 6^2} = \\sqrt{72} \\approx 8.485 \\text{ cm}"
      },
      {
        "explanation": "Find the radius (half the diameter).",
        "workingOut": "\\text{Radius} = 8.485 / 2 = 4.243 \\text{ cm} = 42 \\text{ mm}"
      },
      {
        "explanation": "b) If radius is 5 cm, diameter is 10 cm. Let the side be $s$.",
        "workingOut": "s^2 + s^2 = 10^2 \\Rightarrow 2s^2 = 100 \\Rightarrow s^2 = 50"
      },
      {
        "explanation": "Take the square root to find the side length.",
        "workingOut": "s = \\sqrt{50} \\approx 7.071 \\text{ cm} = 71 \\text{ mm}"
      }
    ]
  },
  {
    "id": "y9-2a-12",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Two triangular flags can be made from one square piece of material by cutting on the diagonal. If this diagonal side length is to be 120 cm long, what must be the side length of the square piece of material to the nearest mm?",
    "a": "849",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "Let the side length of the square be $s$. Use Pythagoras' theorem.",
        "workingOut": "s^2 + s^2 = 120^2"
      },
      {
        "explanation": "Solve for $s^2$.",
        "workingOut": "2s^2 = 14400 \\Rightarrow s^2 = 7200"
      },
      {
        "explanation": "Find $s$ and convert to mm.",
        "workingOut": "s = \\sqrt{7200} \\approx 84.853 \\text{ cm} = 849 \\text{ mm}"
      }
    ]
  },
  {
    "id": "y9-2a-13",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A girl planned to swim straight across a river of width 30 m. After she had swum across the river, she found she had been swept 5 m downstream. How far did she actually swim? Calculate your answer, in metres, correct to 1 decimal place.",
    "a": "30.4",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "The actual path forms the hypotenuse of a right-angled triangle with the width and downstream distance as the legs.",
        "workingOut": "\\text{Distance}^2 = 30^2 + 5^2 = 900 + 25 = 925"
      },
      {
        "explanation": "Take the square root to find the actual distance swum.",
        "workingOut": "\\text{Distance} = \\sqrt{925} \\approx 30.41 \\approx 30.4 \\text{ m}"
      }
    ]
  },
  {
    "id": "y9-2a-14",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A yachtsman wishes to build a shed with a rectangular base to store his sailing equipment. If the shed is to be 3.0 m wide and must be able to house a 5.2 m steel beam, which is to be stored diagonally across the floor, how long must the shed be? Calculate your answer, in metres, correct to 1 decimal place.",
    "a": "4.2",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "The floor of the shed is a rectangle, forming a right-angled triangle with the diagonal.",
        "workingOut": "\\text{Length}^2 + 3.0^2 = 5.2^2"
      },
      {
        "explanation": "Solve for the length squared.",
        "workingOut": "\\text{Length}^2 = 27.04 - 9 = 18.04"
      },
      {
        "explanation": "Take the square root and round.",
        "workingOut": "\\text{Length} = \\sqrt{18.04} \\approx 4.247 \\approx 4.2 \\text{ m}"
      }
    ]
  },
  {
    "id": "y9-2a-15",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "teacher_review",
    "difficulty": "hard",
    "q": "In triangle $PQR$, the angle at $Q$ is a right angle. The line $QS$ is drawn perpendicular to $PR$. $h$ is the length of $QS$ and $x$ is the length of $RS$. Given $PQ = 15$ and $QR = 8$:\n\na) Show that the length of $PR$ is 17.\nb) Find the area of triangle $PQR$ in two ways to show that $17h = 120$.\nc) Use Pythagoras' theorem to find $x$.",
    "a": "a) $15^2 + 8^2 = 17^2$, b) Area is 60. $0.5 \\times 17 \\times h = 60$, c) $x \\approx 3.76$",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "a) Use Pythagoras in $\\triangle PQR$.",
        "workingOut": "PR^2 = 15^2 + 8^2 = 225 + 64 = 289 \\Rightarrow PR = 17"
      },
      {
        "explanation": "b) Calculate the area using legs $PQ$ and $QR$.",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 15 \\times 8 = 60"
      },
      {
        "explanation": "Calculate the area using base $PR$ and height $QS$.",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 17 \\times h = 8.5h"
      },
      {
        "explanation": "Equate the two areas.",
        "workingOut": "8.5h = 60 \\Rightarrow 17h = 120"
      },
      {
        "explanation": "c) First, find $h$.",
        "workingOut": "h = 120 / 17"
      },
      {
        "explanation": "Use Pythagoras in $\\triangle QSR$ to find $x$.",
        "workingOut": "x^2 + h^2 = 8^2 \\Rightarrow x^2 + \\left(\\frac{120}{17}\\right)^2 = 64"
      },
      {
        "explanation": "Solve for $x$.",
        "workingOut": "x^2 = 64 - \\frac{14400}{289} = \\frac{18496 - 14400}{289} = \\frac{4096}{289} \\Rightarrow x = \\frac{64}{17} \\approx 3.76"
      }
    ]
  },
  {
    "id": "y9-2a-16",
    "c": "2A",
    "t": "Pythagoras' Theorem",
    "type": "teacher_review",
    "difficulty": "hard",
    "q": "In two identical squares of side length $c+d$, the first square contains an inner tilted quadrilateral formed by joining points that divide each side in the ratio $c:d$. The second square is divided into two smaller squares of sides $c$ and $d$, and two rectangles of dimensions $c \\times d$.\n\na) Prove that the tilted inner quadrilateral in the first square is a square.\nb) Using the areas of both large squares, prove Pythagoras' theorem ($a^2+b^2=c^2$ equivalent for the right triangles formed).",
    "a": "Teacher review required for proofs.",
    "opts": [],
    "h": "Use Pythagoras' theorem $a^2 + b^2 = c^2$.",
    "s": "",
    "solutionSteps": [
      {
        "explanation": "a) Show all four sides of the inner quadrilateral are equal.",
        "workingOut": "\\text{Each side is the hypotenuse of a right triangle with legs } c \\text{ and } d. \\text{ Length } = \\sqrt{c^2 + d^2}."
      },
      {
        "explanation": "Show the inner angles are $90^\\circ$.",
        "workingOut": "\\text{The acute angles of the corner triangles sum to } 90^\\circ. \\text{ The straight line angle is } 180^\\circ, \\text{ leaving } 90^\\circ \\text{ for the inner quadrilateral's corners.}"
      },
      {
        "explanation": "b) Relate the areas.",
        "workingOut": "\\text{Area of large square} = (c+d)^2. \\text{ From the first square, this is } 4 \\times (\\frac{1}{2}cd) + \\text{Area}(\\text{inner square})."
      },
      {
        "explanation": "Equate areas.",
        "workingOut": "c^2 + 2cd + d^2 = 2cd + \\text{Hypotenuse}^2 \\Rightarrow c^2 + d^2 = \\text{Hypotenuse}^2"
      }
    ]
  }
];

// Year 9 Ch2A questions (Pythagoras' theorem) - separate export for seeding
export const Y9_CH2A_QUESTIONS = SURDS_QUESTIONS_Y11A.filter(q => q.id && q.id.startsWith('y9-2a-'));
