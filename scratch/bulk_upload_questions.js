import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const questions = [
  // 1. Expand and simplify (Original 12)
  { id: '1a', q: "4(x + 3) + 5(2x - 3)", a: "$14x - 3$", opts: ["$14x - 3$", "$14x + 27$", "$14x + 3$", "$6x - 3$"], h: "Distribute 4 and 5.", s: "$4x + 12 + 10x - 15 = 14x - 3$", t: "Expanding brackets", c: "1A" },
  { id: '1b', q: "8(a - 2b) - 6(2a - 3b)", a: "$-4a + 2b$", opts: ["$-4a + 2b$", "$4a - 2b$", "$-4a - 2b$", "$20a - 34b$"], h: "Be careful with the negative sign when distributing -6.", s: "$8a - 16b - 12a + 18b = -4a + 2b$", t: "Expanding brackets", c: "1A" },
  { id: '1c', q: "-(a - b) - (a + b)", a: "$-2a$", opts: ["$-2a$", "$2b$", "$0$", "$-2a + 2b$"], h: "Distribute the negative sign.", s: "$-a + b - a - b = -2a$", t: "Expanding brackets", c: "1A" },
  { id: '1d', q: "$-4x^2(x + 3) - 2x^2(x - 1)$", a: "$-6x^3 - 10x^2$", opts: ["$-6x^3 - 10x^2$", "$-6x^3 - 14x^2$", "$-2x^3 - 10x^2$", "$-6x^3 + 10x^2$"], h: "Multiply the powers of x.", s: "$-4x^3 - 12x^2 - 2x^3 + 2x^2 = -6x^3 - 10x^2$", t: "Expanding brackets", c: "1A" },
  { id: '1e', q: "$(n + 7)(2n - 3)$", a: "$2n^2 + 11n - 21$", opts: ["$2n^2 + 11n - 21$", "$2n^2 - 11n - 21$", "$2n^2 + 17n - 21$", "$2n^2 + 11n + 21$"], h: "Use FOIL (First, Outside, Inside, Last).", s: "$2n^2 - 3n + 14n - 21 = 2n^2 + 11n - 21$", t: "Expanding brackets", c: "1A" },
  { id: '1f', q: "$(r + 3)^2$", a: "$r^2 + 6r + 9$", opts: ["$r^2 + 6r + 9$", "$r^2 + 9$", "$r^2 + 3r + 9$", "$2r + 6$"], h: "Remember $(a+b)^2 = a^2 + 2ab + b^2$.", s: "$(r+3)(r+3) = r^2 + 3r + 3r + 9 = r^2 + 6r + 9$", t: "Expanding brackets", c: "1A" },
  { id: '1g', q: "$(y - 5)(y + 5)$", a: "$y^2 - 25$", opts: ["$y^2 - 25$", "$y^2 + 10y - 25$", "$y^2 + 25$", "$y - 25$"], h: "Difference of two squares pattern: $(a-b)(a+b) = a^2 - b^2$.", s: "$y^2 + 5y - 5y - 25 = y^2 - 25$", t: "Expanding brackets", c: "1A" },
  { id: '1h', q: "$(3x - 5)(2x - 3)$", a: "$6x^2 - 19x + 15$", opts: ["$6x^2 - 19x + 15$", "$6x^2 - x + 15$", "$6x^2 - 19x - 15$", "$5x^2 - 19x + 15$"], h: "Use FOIL.", s: "$6x^2 - 9x - 10x + 15 = 6x^2 - 19x + 15$", t: "Expanding brackets", c: "1A" },
  { id: '1i', q: "$(t - 8)^2$", a: "$t^2 - 16t + 64$", opts: ["$t^2 - 16t + 64$", "$t^2 + 64$", "$t^2 - 8t + 64$", "$t^2 - 16t - 64$"], h: "Remember $(a-b)^2 = a^2 - 2ab + b^2$.", s: "$(t-8)(t-8) = t^2 - 8t - 8t + 64 = t^2 - 16t + 64$", t: "Expanding brackets", c: "1A" },
  { id: '1j', q: "$(2c + 7)(2c - 7)$", a: "$4c^2 - 49$", opts: ["$4c^2 - 49$", "$4c^2 + 49$", "$4c^2 - 28c - 49$", "$2c^2 - 49$"], h: "Difference of two squares.", s: "$4c^2 - 14c + 14c - 49 = 4c^2 - 49$", t: "Expanding brackets", c: "1A" },
  { id: '1k', q: "$(4p + 1)^2$", a: "$16p^2 + 8p + 1$", opts: ["$16p^2 + 8p + 1$", "$16p^2 + 1$", "$16p^2 + 4p + 1$", "$8p^2 + 8p + 1$"], h: "Square the first, twice the product, square the last.", s: "$16p^2 + 4p + 4p + 1 = 16p^2 + 8p + 1$", t: "Expanding brackets", c: "1A" },
  { id: '1l', q: "$(3u - 2)^2$", a: "$9u^2 - 12u + 4$", opts: ["$9u^2 - 12u + 4$", "$9u^2 + 4$", "$9u^2 - 6u + 4$", "$6u^2 - 12u + 4$"], h: "Square the first, twice the product, square the last.", s: "$9u^2 - 6u - 6u + 4 = 9u^2 - 12u + 4$", t: "Expanding brackets", c: "1A" },

  // 2. Factor (Original 18)
  { id: '2a', q: "$18a + 36$", a: "$18(a + 2)$", opts: ["$18(a + 2)$", "$18(a + 18)$", "$9(2a + 4)$", "$18a(1 + 2)$"], h: "Find the highest common factor.", s: "$18(a) + 18(2) = 18(a + 2)$", t: "Factoring", c: "1B" },
  { id: '2b', q: "$20b - 36$", a: "$4(5b - 9)$", opts: ["$4(5b - 9)$", "$4(5b + 9)$", "$2(10b - 18)$", "$4b(5 - 9)$"], h: "Find the HCF of 20 and 36.", s: "$4(5b) - 4(9) = 4(5b - 9)$", t: "Factoring", c: "1B" },
  { id: '2c', q: "$9c^2 + 36c$", a: "$9c(c + 4)$", opts: ["$9c(c + 4)$", "$9(c^2 + 4c)$", "$9c(c + 36)$", "$c(9c + 36)$"], h: "Look for both a common number and a common variable.", s: "$9c(c) + 9c(4) = 9c(c + 4)$", t: "Factoring", c: "1B" },
  { id: '2d', q: "$d^2 - 36$", a: "$(d - 6)(d + 6)$", opts: ["$(d - 6)(d + 6)$", "$(d - 6)^2$", "$(d + 6)^2$", "$(d - 18)(d + 18)$"], h: "Difference of two squares.", s: "$d^2 - 6^2 = (d-6)(d+6)$", t: "Factoring", c: "1B" },
  { id: '2e', q: "$e^2 + 13e + 36$", a: "$(e + 4)(e + 9)$", opts: ["$(e + 4)(e + 9)$", "$(e + 3)(e + 12)$", "$(e - 4)(e - 9)$", "$(e + 6)^2$"], h: "Find two numbers that multiply to 36 and add to 13.", s: "$4 \times 9 = 36, 4 + 9 = 13 \rightarrow (e+4)(e+9)$", t: "Factoring", c: "1B" },
  { id: '2f', q: "$f^2 - 12f + 36$", a: "$(f - 6)^2$", opts: ["$(f - 6)^2$", "$(f + 6)^2$", "$(f - 4)(f - 9)$", "$(f - 6)(f + 6)$"], h: "Find two numbers that multiply to 36 and add to -12.", s: "$-6 \times -6 = 36, -6 - 6 = -12 \rightarrow (f-6)(f-6)$", t: "Factoring", c: "1B" },
  { id: '2g', q: "$36 - 25g^2$", a: "$(6 - 5g)(6 + 5g)$", opts: ["$(6 - 5g)(6 + 5g)$", "$(6 - 5g)^2$", "$(5g - 6)(5g + 6)$", "$(6 + 5g)^2$"], h: "Difference of two squares: $6^2 - (5g)^2$.", s: "$(6-5g)(6+5g)$", t: "Factoring", c: "1B" },
  { id: '2h', q: "$h^2 - 9h - 36$", a: "$(h - 12)(h + 3)$", opts: ["$(h - 12)(h + 3)$", "$(h + 12)(h - 3)$", "$(h - 4)(h + 9)$", "$(h - 6)^2$"], h: "Find two numbers that multiply to -36 and add to -9.", s: "$-12 \times 3 = -36, -12 + 3 = -9 \rightarrow (h-12)(h+3)$", t: "Factoring", c: "1B" },
  { id: '2i', q: "$i^2 + 5i - 36$", a: "$(i + 9)(i - 4)$", opts: ["$(i + 9)(i - 4)$", "$(i - 9)(i + 4)$", "$(i + 6)(i - 6)$", "$(i + 12)(i - 3)$"], h: "Find two numbers that multiply to -36 and add to 5.", s: "$9 \times -4 = -36, 9 - 4 = 5 \rightarrow (i+9)(i-4)$", t: "Factoring", c: "1B" },
  { id: '2j', q: "$2j^2 + 11j + 12$", a: "$(2j + 3)(j + 4)$", opts: ["$(2j + 3)(j + 4)$", "$(2j + 4)(j + 3)$", "$(2j + 6)(j + 2)$", "$(j + 12)(2j + 1)$"], h: "Factor by grouping or trial and error.", s: "$2j^2 + 8j + 3j + 12 = 2j(j+4) + 3(j+4) = (2j+3)(j+4)$", t: "Factoring", c: "1B" },
  { id: '2k', q: "$3k^2 - 7k - 6$", a: "$(3k + 2)(k - 3)$", opts: ["$(3k + 2)(k - 3)$", "$(3k - 2)(k + 3)$", "$(3k + 3)(k - 2)$", "$(k - 6)(3k + 1)$"], h: "Multiply 3 and -6, find factors of -18 that add to -7.", s: "$3k^2 - 9k + 2k - 6 = 3k(k-3) + 2(k-3) = (3k+2)(k-3)$", t: "Factoring", c: "1B" },
  { id: '2l', q: "$5l^2 - 14l + 8$", a: "$(5l - 4)(l - 2)$", opts: ["$(5l - 4)(l - 2)$", "$(5l - 2)(l - 4)$", "$(5l + 4)(l + 2)$", "$(l - 8)(5l - 1)$"], h: "Factor by grouping.", s: "$5l^2 - 10l - 4l + 8 = 5l(l-2) - 4(l-2) = (5l-4)(l-2)$", t: "Factoring", c: "1B" },
  { id: '2m', q: "$4m^2 + 4m - 15$", a: "$(2m - 3)(2m + 5)$", opts: ["$(2m - 3)(2m + 5)$", "$(2m + 3)(2m - 5)$", "$(4m - 3)(m + 5)$", "$(2m - 15)(2m + 1)$"], h: "Factor by grouping.", s: "$4m^2 + 10m - 6m - 15 = 2m(2m+5) - 3(2m+5) = (2m-3)(2m+5)$", t: "Factoring", c: "1B" },
  { id: '2n', q: "$mn + m + pn + p$", a: "$(m + p)(n + 1)$", opts: ["$(m + p)(n + 1)$", "$m(n + p) + 1$", "$(mn + p)(m + 1)$", "$(m + n)(p + 1)$"], h: "Factor by grouping in pairs.", s: "$m(n+1) + p(n+1) = (m+p)(n+1)$", t: "Factoring", c: "1B" },
  { id: '2o', q: "$p^3 + 9p^2 + 4p + 36$", a: "$(p^2 + 4)(p + 9)$", opts: ["$(p^2 + 4)(p + 9)$", "$(p^2 + 9)(p + 4)$", "$(p + 2)(p + 9)$", "$p(p^2 + 9p + 4) + 36$"], h: "Factor by grouping in pairs.", s: "$p^2(p+9) + 4(p+9) = (p^2+4)(p+9)$", t: "Factoring", c: "1B" },
  { id: '2p', q: "$qt - rt - 5q + 5r$", a: "$(q - r)(t - 5)$", opts: ["$(q - r)(t - 5)$", "$(q + r)(t - 5)$", "$(q - r)(t + 5)$", "$(qt - 5)(r - 1)$"], h: "Factor by grouping in pairs.", s: "t(q-r) - 5(q-r) = (q-r)(t-5)", t: "Factoring", c: "1B" },
  { id: '2q', q: "$u^2w + vw - u^2x - vx$", a: "$(u^2 + v)(w - x)$", opts: ["$(u^2 + v)(w - x)$", "$(u^2 - v)(w + x)$", "$(uw + v)(u - x)$", "$(u^2 + w)(v - x)$"], h: "Factor by grouping in pairs.", s: "w(u^2+v) - x(u^2+v) = (u^2+v)(w-x)", t: "Factoring", c: "1B" },
  { id: '2r', q: "$x^2 - y^2 + 2x - 2y$", a: "$(x - y)(x + y + 2)$", opts: ["$(x - y)(x + y + 2)$", "$(x + y)(x - y + 2)$", "$(x - y)^2 + 2$", "$(x - y)(x + y - 2)$"], h: "Factor the difference of squares then factor out 2.", s: "$(x-y)(x+y) + 2(x-y) = (x-y)(x+y+2)", t: "Factoring", c: "1B" },

  // 3. Simplify (Original 18)
  { id: '3a', q: "$\\frac{x}{2} + \\frac{x}{4}$", a: "$\\frac{3x}{4}$", opts: ["$\\frac{3x}{4}$", "$\\frac{2x}{6}$", "$\\frac{x}{6}$", "$\\frac{x^2}{8}$"], h: "Find a common denominator (4).", s: "$\\frac{2x}{4} + \\frac{x}{4} = \\frac{3x}{4}$", t: "Algebraic fractions", c: "1C" },
  { id: '3b', q: "$\\frac{x}{2} - \\frac{x}{4}$", a: "$\\frac{x}{4}$", opts: ["$\\frac{x}{4}$", "$\\frac{x}{2}$", "$\\frac{2x}{4}$", "$0$"], h: "Find a common denominator.", s: "$\\frac{2x}{4} - \\frac{x}{4} = \\frac{x}{4}$", t: "Algebraic fractions", c: "1C" },
  { id: '3c', q: "$\\frac{x}{2} \\times \\frac{x}{4}$", a: "$\\frac{x^2}{8}$", opts: ["$\\frac{x^2}{8}$", "$\\frac{2x}{8}$", "$\\frac{x^2}{6}$", "$\\frac{3x}{4}$"], h: "Multiply numerators and denominators.", s: "$\\frac{x \times x}{2 \times 4} = \\frac{x^2}{8}$", t: "Algebraic fractions", c: "1C" },
  { id: '3d', q: "$\\frac{x}{2} \\div \\frac{x}{4}$", a: "$2$", opts: ["$2$", "$\\frac{1}{2}$", "$\\frac{x^2}{8}$", "$8$"], h: "Multiply by the reciprocal.", s: "$\\frac{x}{2} \times \\frac{4}{x} = \\frac{4x}{2x} = 2$", t: "Algebraic fractions", c: "1C" },
  { id: '3e', q: "$\\frac{3a}{2b} + \\frac{2a}{3b}$", a: "$\\frac{13a}{6b}$", opts: ["$\\frac{13a}{6b}$", "$\\frac{5a}{5b}$", "$\\frac{6a}{6b}$", "$\\frac{5a}{6b}$"], h: "Find common denominator 6b.", s: "$\\frac{9a}{6b} + \\frac{4a}{6b} = \\frac{13a}{6b}$", t: "Algebraic fractions", c: "1C" },
  { id: '3f', q: "$\\frac{3a}{2b} - \\frac{2a}{3b}$", a: "$\\frac{5a}{6b}$", opts: ["$\\frac{5a}{6b}$", "$\\frac{a}{b}$", "$\\frac{13a}{6b}$", "$\\frac{a}{6b}$"], h: "Common denominator 6b.", s: "$\\frac{9a}{6b} - \\frac{4a}{6b} = \\frac{5a}{6b}$", t: "Algebraic fractions", c: "1C" },
  { id: '3g', q: "$\\frac{3a}{2b} \\times \\frac{2a}{3b}$", a: "$\\frac{a^2}{b^2}$", opts: ["$\\frac{a^2}{b^2}$", "$\\frac{6a^2}{6b}$", "$\\frac{5a}{5b}$", "$\\frac{6a}{6b}$"], h: "Simplify before multiplying if possible.", s: "$\\frac{3a \times 2a}{2b \times 3b} = \\frac{6a^2}{6b^2} = \\frac{a^2}{b^2}$", t: "Algebraic fractions", c: "1C" },
  { id: '3h', q: "$\\frac{3a}{2b} \\div \\frac{2a}{3b}$", a: "$\\frac{9}{4}$", opts: ["$\\frac{9}{4}$", "$\\frac{4}{9}$", "$1$", "$\\frac{6a}{6b}$"], h: "Multiply by reciprocal.", s: "$\\frac{3a}{2b} \times \\frac{3b}{2a} = \\frac{9ab}{4ab} = \\frac{9}{4}$", t: "Algebraic fractions", c: "1C" },
  { id: '3i', q: "$\\frac{x}{y} + \\frac{y}{x}$", a: "$\\frac{x^2 + y^2}{xy}$", opts: ["$\\frac{x^2 + y^2}{xy}$", "$\\frac{x+y}{xy}$", "$\\frac{2x+2y}{xy}$", "$1$"], h: "Common denominator xy.", s: "$\\frac{x^2}{xy} + \\frac{y^2}{xy} = \\frac{x^2+y^2}{xy}$", t: "Algebraic fractions", c: "1C" },
  { id: '3j', q: "$\\frac{x}{y} - \\frac{y}{x}$", a: "$\\frac{x^2 - y^2}{xy}$", opts: ["$\\frac{x^2 - y^2}{xy}$", "$\\frac{x-y}{xy}$", "$0$", "$\\frac{x^2+y^2}{xy}$"], h: "Common denominator xy.", s: "$\\frac{x^2}{xy} - \\frac{y^2}{xy} = \\frac{x^2-y^2}{xy}$", t: "Algebraic fractions", c: "1C" },
  { id: '3k', q: "$\\frac{x}{y} \\times \\frac{y}{x}$", a: "$1$", opts: ["$1$", "$\\frac{xy}{yx}$", "$\\frac{x^2}{y^2}$", "$0$"], h: "Everything cancels out.", s: "$\\frac{xy}{yx} = 1$", t: "Algebraic fractions", c: "1C" },
  { id: '3l', q: "$\\frac{x}{y} \\div \\frac{y}{x}$", a: "$\\frac{x^2}{y^2}$", opts: ["$\\frac{x^2}{y^2}$", "$1$", "$\\frac{y^2}{x^2}$", "$\\frac{x}{y}$"], h: "Multiply by reciprocal.", s: "$\\frac{x}{y} \times \\frac{x}{y} = \\frac{x^2}{y^2}$", t: "Algebraic fractions", c: "1C" },

  // 4. Simplify (Original 18)
  { id: '4a', q: "$\\frac{x + 4}{5} + \\frac{x - 5}{3}$", a: "$\\frac{8x - 13}{15}$", opts: ["$\\frac{8x - 13}{15}$", "$\\frac{2x - 1}{8}$", "$\\frac{8x + 37}{15}$", "$\\frac{8x - 1}{15}$"], h: "Common denominator 15.", s: "$\\frac{3(x+4) + 5(x-5)}{15} = \\frac{3x+12+5x-25}{15} = \\frac{8x-13}{15}$", t: "Algebraic fractions", c: "1C" },
  { id: '4b', q: "$\\frac{5}{x + 4} + \\frac{3}{x - 5}$", a: "$\\frac{8x - 13}{(x + 4)(x - 5)}$", opts: ["$\\frac{8x - 13}{(x + 4)(x - 5)}$", "$\\frac{8}{2x - 1}$", "$\\frac{8x + 37}{(x+4)(x-5)}$", "$\\frac{8x-13}{15}$"], h: "Common denominator $(x+4)(x-5)$.", s: "$\\frac{5(x-5) + 3(x+4)}{(x+4)(x-5)} = \\frac{5x-25+3x+12}{(x+4)(x-5)} = \\frac{8x-13}{(x+4)(x-5)}$", t: "Algebraic fractions", c: "1C" },
  { id: '4c', q: "$\\frac{x + 1}{2} - \\frac{x - 4}{5}$", a: "$\\frac{3x + 13}{10}$", opts: ["$\\frac{3x + 13}{10}$", "$\\frac{3x - 3}{10}$", "$\\frac{3x + 5}{10}$", "$\\frac{7x + 13}{10}$"], h: "Common denominator 10. Distribute negative carefully.", s: "$\\frac{5(x+1) - 2(x-4)}{10} = \\frac{5x+5-2x+8}{10} = \\frac{3x+13}{10}$", t: "Algebraic fractions", c: "1C" },
  { id: '4d', q: "$\\frac{2}{x + 1} - \\frac{5}{x - 4}$", a: "$\\frac{-3x - 13}{(x + 1)(x - 4)}$", opts: ["$\\frac{-3x - 13}{(x + 1)(x - 4)}$", "$\\frac{3x + 13}{(x+1)(x-4)}$", "$\\frac{-3x + 3}{(x+1)(x-4)}$", "$\\frac{-3}{2x - 3}$"], h: "Common denominator $(x+1)(x-4)$.", s: "$\\frac{2(x-4) - 5(x+1)}{(x+1)(x-4)} = \\frac{2x-8-5x-5}{(x+1)(x-4)} = \\frac{-3x-13}{(x+1)(x-4)}$", t: "Algebraic fractions", c: "1C" },
  { id: '4e', q: "$\\frac{x}{2} - \\frac{x + 3}{4}$", a: "$\\frac{x - 3}{4}$", opts: ["$\\frac{x - 3}{4}$", "$\\frac{x + 3}{4}$", "$\\frac{3x + 3}{4}$", "$\\frac{x - 3}{2}$"], h: "Common denominator 4. Distribute negative.", s: "$\\frac{2x - (x+3)}{4} = \\frac{2x-x-3}{4} = \\frac{x-3}{4}$", t: "Algebraic fractions", c: "1C" },
  { id: '4f', q: "$\\frac{4}{x} - \\frac{x}{x + 3}$", a: "$\\frac{12 + 4x - x^2}{x(x + 3)}$", opts: ["$\\frac{12 + 4x - x^2}{x(x + 3)}$", "$\\frac{4x + 12 - x}{x(x+3)}$", "$\\frac{12 - x^2}{x(x+3)}$", "$\\frac{4}{x+3}$"], h: "Common denominator $x(x+3)$.", s: "$\\frac{4(x+3) - x^2}{x(x+3)} = \\frac{4x+12-x^2}{x(x+3)}$", t: "Algebraic fractions", c: "1C" },

  // --- NEW QUESTIONS FROM SECOND IMAGE ---
  // 5. Factor and simplify
  { id: '5a', q: "Factor and simplify: $\\frac{6a + 3b}{10a + 5b}$", a: "$\\frac{3}{5}$", opts: ["$\\frac{3}{5}$", "$\\frac{2}{3}$", "$\\frac{1}{2}$", "$\\frac{6}{10}$"], h: "Factor out 3 from numerator and 5 from denominator.", s: "$\\frac{3(2a+b)}{5(2a+b)} = \\frac{3}{5}$", t: "Algebraic fractions", c: "1C" },
  { id: '5b', q: "Factor and simplify: $\\frac{2x - 2y}{x^2 - y^2}$", a: "$\\frac{2}{x + y}$", opts: ["$\\frac{2}{x + y}$", "$\\frac{2}{x - y}$", "$\\frac{1}{x + y}$", "$\\frac{2}{x^2}$"], h: "Factor the numerator and the difference of squares in the denominator.", s: "$\\frac{2(x-y)}{(x-y)(x+y)} = \\frac{2}{x+y}$", t: "Algebraic fractions", c: "1C" },
  { id: '5c', q: "Factor and simplify: $\\frac{x^2 + 2x - 3}{x^2 - 5x + 4}$", a: "$\\frac{x + 3}{x - 4}$", opts: ["$\\frac{x + 3}{x - 4}$", "$\\frac{x - 3}{x - 4}$", "$\\frac{x + 3}{x + 4}$", "$\\frac{x - 1}{x - 4}$"], h: "Factor both quadratic expressions.", s: "$\\frac{(x+3)(x-1)}{(x-4)(x-1)} = \\frac{x+3}{x-4}$", t: "Algebraic fractions", c: "1C" },
  { id: '5d', q: "Factor and simplify: $\\frac{2x^2 + 3x + 1}{2x^3 + x^2 + 2x + 1}$", a: "$\\frac{x + 1}{x^2 + 1}$", opts: ["$\\frac{x + 1}{x^2 + 1}$", "$\\frac{1}{x + 1}$", "$\\frac{x + 1}{x + 1}$", "$\\frac{x^2 + 1}{x + 1}$"], h: "Factor the denominator by grouping.", s: "$\\frac{(2x+1)(x+1)}{x^2(2x+1) + (2x+1)} = \\frac{(2x+1)(x+1)}{(2x+1)(x^2+1)} = \\frac{x+1}{x^2+1}$", t: "Algebraic fractions", c: "1C" },
  { id: '5e', q: "Factor and simplify: $\\frac{a + b}{a^2 + 2ab + b^2}$", a: "$\\frac{1}{a + b}$", opts: ["$\\frac{1}{a + b}$", "$a + b$", "$\\frac{1}{a - b}$", "$\\frac{a+b}{a^2+b^2}$"], h: "Recognize the perfect square in the denominator.", s: "$\\frac{a+b}{(a+b)^2} = \\frac{1}{a+b}$", t: "Algebraic fractions", c: "1C" },
  { id: '5f', q: "Factor and simplify: $\\frac{3x^2 - 19x - 14}{9x^2 - 4}$", a: "$\\frac{x - 7}{3x - 2}$", opts: ["$\\frac{x - 7}{3x - 2}$", "$\\frac{x + 7}{3x - 2}$", "$\\frac{x - 7}{3x + 2}$", "$\\frac{3x + 2}{x - 7}$"], h: "Factor the numerator and the difference of squares in the denominator.", s: "$\\frac{(3x+2)(x-7)}{(3x-2)(3x+2)} = \\frac{x-7}{3x-2}$", t: "Algebraic fractions", c: "1C" },

  // 6. Solve by factoring
  { id: '6a', q: "Solve $a^2 - 49 = 0$ by factoring.", a: "$\\{7, -7\\}$", opts: ["$\\{7, -7\\}$", "$\\{7, 0\\}$", "$\\{49, -49\\}$", "$\\{7\\}$"], h: "Use difference of squares.", s: "$(a-7)(a+7) = 0 \\Rightarrow a=7, -7$", t: "Quadratic equations", c: "1D" },
  { id: '6b', q: "Solve $b^2 + 7b = 0$ by factoring.", a: "$\\{0, -7\\}$", opts: ["$\\{0, -7\\}$", "$\\{0, 7\\}$", "$\\{7, -7\\}$", "$\\{0\\}$"], h: "Factor out the common term $b$.", s: "$b(b+7) = 0 \\Rightarrow b=0, -7$", t: "Quadratic equations", c: "1D" },
  { id: '6c', q: "Solve $c^2 + 7c + 6 = 0$ by factoring.", a: "$\\{-6, -1\\}$", opts: ["$\\{-6, -1\\}$", "$\\{6, 1\\}$", "$\\{-6, 1\\}$", "$\\{-3, -2\\}$"], h: "Find two numbers that multiply to 6 and add to 7.", s: "$(c+6)(c+1) = 0 \\Rightarrow c=-6, -1$", t: "Quadratic equations", c: "1D" },
  { id: '6d', q: "Solve $d^2 + 6d - 7 = 0$ by factoring.", a: "$\\{-7, 1\\}$", opts: ["$\\{-7, 1\\}$", "$\\{7, -1\\}$", "$\\{-7, -1\\}$", "$\\{7, 1\\}$"], h: "Find two numbers that multiply to -7 and add to 6.", s: "$(d+7)(d-1) = 0 \\Rightarrow d=-7, 1$", t: "Quadratic equations", c: "1D" },
  { id: '6e', q: "Solve $e^2 - 5e + 6 = 0$ by factoring.", a: "$\\{3, 2\\}$", opts: ["$\\{3, 2\\}$", "$\\{-3, -2\\}$", "$\\{6, -1\\}$", "$\\{3, -2\\}$"], h: "Find two numbers that multiply to 6 and add to -5.", s: "$(e-3)(e-2) = 0 \\Rightarrow e=3, 2$", t: "Quadratic equations", c: "1D" },
  { id: '6f', q: "Solve $2f^2 - f - 6 = 0$ by factoring.", a: "$\\{-1.5, 2\\}$", opts: ["$\\{-1.5, 2\\}$", "$\\{1.5, -2\\}$", "$\\{-3, 2\\}$", "$\\{1, 3\\}$"], h: "Factor by grouping or trial and error.", s: "$(2f+3)(f-2) = 0 \\Rightarrow f=-1.5, 2$", t: "Quadratic equations", c: "1D" },
  { id: '6g', q: "Solve $2g^2 - 13g + 6 = 0$ by factoring.", a: "$\\{0.5, 6\\}$", opts: ["$\\{0.5, 6\\}$", "$\\{-0.5, -6\\}$", "$\\{1, 6\\}$", "$\\{0.5, -6\\}$"], h: "Factor by grouping.", s: "$(2g-1)(g-6) = 0 \\Rightarrow g=0.5, 6$", t: "Quadratic equations", c: "1D" },
  { id: '6h', q: "Solve $3h^2 + 2h - 8 = 0$ by factoring.", a: "$\\{4/3, -2\\}$", opts: ["$\\{4/3, -2\\}$", "$\\{-4/3, 2\\}$", "$\\{4, -2\\}$", "$\\{1, 2\\}$"], h: "Factor by grouping.", s: "$(3h-4)(h+2) = 0 \\Rightarrow h=4/3, -2$", t: "Quadratic equations", c: "1D" },

  // 7. Solve using quadratic formula
  { id: '7a', q: "Solve $x^2 - 4x + 1 = 0$ using the quadratic formula.", a: "$2 \\pm \\sqrt{3}$", opts: ["$2 \\pm \\sqrt{3}$", "$2 \\pm \\sqrt{5}$", "$4 \\pm \\sqrt{3}$", "$2 + \\sqrt{3}$"], h: "Use $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", s: "$x = \\frac{4 \\pm \\sqrt{16-4}}{2} = 2 \\pm \\sqrt{3}$", t: "Quadratic formula", c: "1E" },
  { id: '7b', q: "Solve $y^2 + 3y - 3 = 0$ using the quadratic formula.", a: "$\\frac{-3 \\pm \\sqrt{21}}{2}$", opts: ["$\\frac{-3 \\pm \\sqrt{21}}{2}$", "$\\frac{3 \\pm \\sqrt{21}}{2}$", "$\\frac{-3 \\pm \\sqrt{15}}{2}$", "$-3 \\pm \\sqrt{21}$"], h: "Apply the quadratic formula with $a=1, b=3, c=-3$.", s: "$y = \\frac{-3 \\pm \\sqrt{9+12}}{2} = \\frac{-3 \\pm \\sqrt{21}}{2}$", t: "Quadratic formula", c: "1E" },
  { id: '7c', q: "Solve $t^2 + 6t + 4 = 0$ using the quadratic formula.", a: "$-3 \\pm \\sqrt{5}$", opts: ["$-3 \\pm \\sqrt{5}$", "$-3 \\pm \\sqrt{20}$", "$3 \\pm \\sqrt{5}$", "$-3 + \\sqrt{5}$"], h: "Apply the quadratic formula and simplify the surd.", s: "$t = \\frac{-6 \\pm \\sqrt{36-16}}{2} = -3 \\pm \\sqrt{5}$", t: "Quadratic formula", c: "1E" },
  { id: '7d', q: "Solve $3x^2 - 2x - 2 = 0$ using the quadratic formula.", a: "$\\frac{1 \\pm \\sqrt{7}}{3}$", opts: ["$\\frac{1 \\pm \\sqrt{7}}{3}$", "$\\frac{2 \\pm \\sqrt{28}}{6}$", "$\\frac{1 \\pm \\sqrt{28}}{3}$", "$\\frac{-1 \\pm \\sqrt{7}}{3}$"], h: "Apply the quadratic formula and simplify.", s: "$x = \\frac{2 \\pm \\sqrt{4+24}}{6} = \\frac{1 \\pm \\sqrt{7}}{3}$", t: "Quadratic formula", c: "1E" },
  { id: '7e', q: "Solve $2a^2 + 5a - 5 = 0$ using the quadratic formula.", a: "$\\frac{-5 \\pm \\sqrt{65}}{4}$", opts: ["$\\frac{-5 \\pm \\sqrt{65}}{4}$", "$\\frac{5 \\pm \\sqrt{65}}{4}$", "$\\frac{-5 \\pm \\sqrt{15}}{4}$", "$-5 \\pm \\sqrt{65}$"], h: "Apply the quadratic formula with $a=2, b=5, c=-5$.", s: "$a = \\frac{-5 \\pm \\sqrt{25+40}}{4} = \\frac{-5 \\pm \\sqrt{65}}{4}$", t: "Quadratic formula", c: "1E" },
  { id: '7f', q: "Solve $4k^2 - 6k - 1 = 0$ using the quadratic formula.", a: "$\\frac{3 \\pm \\sqrt{13}}{4}$", opts: ["$\\frac{3 \\pm \\sqrt{13}}{4}$", "$\\frac{6 \\pm \\sqrt{52}}{8}$", "$\\frac{3 \\pm \\sqrt{52}}{4}$", "$\\frac{-3 \\pm \\sqrt{13}}{4}$"], h: "Apply the quadratic formula and simplify.", s: "$k = \\frac{6 \\pm \\sqrt{36+16}}{8} = \\frac{3 \\pm \\sqrt{13}}{4}$", t: "Quadratic formula", c: "1E" },

  // 8. Solve by completing the square
  { id: '8a', q: "Solve $x^2 + 4x = 6$ by completing the square.", a: "$-2 \\pm \\sqrt{10}$", opts: ["$-2 \\pm \\sqrt{10}$", "$2 \\pm \\sqrt{10}$", "$-2 \\pm \\sqrt{6}$", "$-4 \\pm \\sqrt{10}$"], h: "Add $(\\frac{b}{2})^2$ to both sides.", s: "$x^2 + 4x + 4 = 10 \\Rightarrow (x+2)^2 = 10 \\Rightarrow x = -2 \\pm \\sqrt{10}$", t: "Completing the square", c: "1F" },
  { id: '8b', q: "Solve $y^2 - 6y + 3 = 0$ by completing the square.", a: "$3 \\pm \\sqrt{6}$", opts: ["$3 \\pm \\sqrt{6}$", "$-3 \\pm \\sqrt{6}$", "$3 \\pm \\sqrt{3}$", "$6 \\pm \\sqrt{6}$"], h: "Move constant to other side, then add $(\\frac{b}{2})^2$.", s: "$y^2 - 6y + 9 = 6 \\Rightarrow (y-3)^2 = 6 \\Rightarrow y = 3 \\pm \\sqrt{6}$", t: "Completing the square", c: "1F" },
  { id: '8c', q: "Solve $x^2 - 2x = 12$ by completing the square.", a: "$1 \\pm \\sqrt{13}$", opts: ["$1 \\pm \\sqrt{13}$", "$-1 \\pm \\sqrt{13}$", "$1 \\pm \\sqrt{11}$", "$2 \\pm \\sqrt{13}$"], h: "Add $(\\frac{-2}{2})^2 = 1$ to both sides.", s: "$x^2 - 2x + 1 = 13 \\Rightarrow (x-1)^2 = 13 \\Rightarrow x = 1 \\pm \\sqrt{13}$", t: "Completing the square", c: "1F" },
  { id: '8d', q: "Solve $y^2 + 10y + 7 = 0$ by completing the square.", a: "$-5 \\pm 3\\sqrt{2}$", opts: ["$-5 \\pm 3\\sqrt{2}$", "$5 \\pm 3\\sqrt{2}$", "$-5 \\pm \\sqrt{18}$", "$-10 \\pm 3\\sqrt{2}$"], h: "Add $(\\frac{10}{2})^2 = 25$ to both sides.", s: "$y^2 + 10y + 25 = 18 \\Rightarrow (y+5)^2 = 18 \\Rightarrow y = -5 \\pm \\sqrt{18} = -5 \\pm 3\\sqrt{2}$", t: "Completing the square", c: "1F" }
];

async function seed() {
  const collRef = db.collection('questions');
  
  console.log("Cleaning old questions...");
  const oldDocs = await collRef.where('chapterId', '==', 'y11a-1').get();
  const batchDelete = db.batch();
  oldDocs.forEach(d => batchDelete.delete(d.ref));
  await batchDelete.commit();

  console.log(`Seeding ${questions.length} multiple-choice questions...`);
  const batchAdd = db.batch();
  questions.forEach(qData => {
    const docRef = collRef.doc();
    
    // Create options with shuffling
    const shuffledOpts = qData.opts
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    
    const correctIndex = shuffledOpts.indexOf(qData.a);

    batchAdd.set(docRef, {
      chapterId: 'y11a-1',
      chapterTitle: 'Chapter 1: Algebra review',
      topicId: 'y11a-1' + qData.c.slice(-1),
      topicCode: qData.c,
      topicTitle: qData.t,
      isManual: true,
      title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
      question: qData.q,
      difficulty: 'medium',
      timeLimit: 120,
      type: 'multiple_choice',
      options: shuffledOpts.map(o => ({ text: o, imageUrl: "" })),
      answer: correctIndex.toString(),
      hint: qData.h,
      solution: qData.s,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
  });

  await batchAdd.commit();
  console.log(`Successfully added ${questions.length} questions!`);
  process.exit();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
