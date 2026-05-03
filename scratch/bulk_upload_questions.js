import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const questions = [
  // 1. Expand and simplify
  { id: '1a', q: "4(x + 3) + 5(2x - 3)", a: "$14x - 3$", h: "Distribute 4 and 5.", s: "$4x + 12 + 10x - 15 = 14x - 3$", t: "Expanding brackets", c: "1A" },
  { id: '1b', q: "8(a - 2b) - 6(2a - 3b)", a: "$-4a + 2b$", h: "Be careful with the negative sign when distributing -6.", s: "$8a - 16b - 12a + 18b = -4a + 2b$", t: "Expanding brackets", c: "1A" },
  { id: '1c', q: "-(a - b) - (a + b)", a: "$-2a$", h: "Distribute the negative sign.", s: "$-a + b - a - b = -2a$", t: "Expanding brackets", c: "1A" },
  { id: '1d', q: "$-4x^2(x + 3) - 2x^2(x - 1)$", a: "$-6x^3 - 10x^2$", h: "Multiply the powers of x.", s: "$-4x^3 - 12x^2 - 2x^3 + 2x^2 = -6x^3 - 10x^2$", t: "Expanding brackets", c: "1A" },
  { id: '1e', q: "$(n + 7)(2n - 3)$", a: "$2n^2 + 11n - 21$", h: "Use FOIL (First, Outside, Inside, Last).", s: "$2n^2 - 3n + 14n - 21 = 2n^2 + 11n - 21$", t: "Expanding brackets", c: "1A" },
  { id: '1f', q: "$(r + 3)^2$", a: "$r^2 + 6r + 9$", h: "Remember $(a+b)^2 = a^2 + 2ab + b^2$.", s: "$(r+3)(r+3) = r^2 + 3r + 3r + 9 = r^2 + 6r + 9$", t: "Expanding brackets", c: "1A" },
  { id: '1g', q: "$(y - 5)(y + 5)$", a: "$y^2 - 25$", h: "Difference of two squares pattern: $(a-b)(a+b) = a^2 - b^2$.", s: "$y^2 + 5y - 5y - 25 = y^2 - 25$", t: "Expanding brackets", c: "1A" },
  { id: '1h', q: "$(3x - 5)(2x - 3)$", a: "$6x^2 - 19x + 15$", h: "Use FOIL.", s: "$6x^2 - 9x - 10x + 15 = 6x^2 - 19x + 15$", t: "Expanding brackets", c: "1A" },
  { id: '1i', q: "$(t - 8)^2$", a: "$t^2 - 16t + 64$", h: "Remember $(a-b)^2 = a^2 - 2ab + b^2$.", s: "$(t-8)(t-8) = t^2 - 8t - 8t + 64 = t^2 - 16t + 64$", t: "Expanding brackets", c: "1A" },
  { id: '1j', q: "$(2c + 7)(2c - 7)$", a: "$4c^2 - 49$", h: "Difference of two squares.", s: "$4c^2 - 14c + 14c - 49 = 4c^2 - 49$", t: "Expanding brackets", c: "1A" },
  { id: '1k', q: "$(4p + 1)^2$", a: "$16p^2 + 8p + 1$", h: "Square the first, twice the product, square the last.", s: "$16p^2 + 4p + 4p + 1 = 16p^2 + 8p + 1$", t: "Expanding brackets", c: "1A" },
  { id: '1l', q: "$(3u - 2)^2$", a: "$9u^2 - 12u + 4$", h: "Square the first, twice the product, square the last.", s: "$9u^2 - 6u - 6u + 4 = 9u^2 - 12u + 4$", t: "Expanding brackets", c: "1A" },

  // 2. Factor
  { id: '2a', q: "$18a + 36$", a: "$18(a + 2)$", h: "Find the highest common factor.", s: "$18(a) + 18(2) = 18(a + 2)$", t: "Factoring", c: "1B" },
  { id: '2b', q: "$20b - 36$", a: "$4(5b - 9)$", h: "Find the HCF of 20 and 36.", s: "$4(5b) - 4(9) = 4(5b - 9)$", t: "Factoring", c: "1B" },
  { id: '2c', q: "$9c^2 + 36c$", a: "$9c(c + 4)$", h: "Look for both a common number and a common variable.", s: "$9c(c) + 9c(4) = 9c(c + 4)$", t: "Factoring", c: "1B" },
  { id: '2d', q: "$d^2 - 36$", a: "$(d - 6)(d + 6)$", h: "Difference of two squares.", s: "$d^2 - 6^2 = (d-6)(d+6)$", t: "Factoring", c: "1B" },
  { id: '2e', q: "$e^2 + 13e + 36$", a: "$(e + 4)(e + 9)$", h: "Find two numbers that multiply to 36 and add to 13.", s: "$4 \times 9 = 36, 4 + 9 = 13 \rightarrow (e+4)(e+9)$", t: "Factoring", c: "1B" },
  { id: '2f', q: "$f^2 - 12f + 36$", a: "$(f - 6)^2$", h: "Find two numbers that multiply to 36 and add to -12.", s: "$-6 \times -6 = 36, -6 - 6 = -12 \rightarrow (f-6)(f-6)$", t: "Factoring", c: "1B" },
  { id: '2g', q: "$36 - 25g^2$", a: "$(6 - 5g)(6 + 5g)$", h: "Difference of two squares: $6^2 - (5g)^2$.", s: "$(6-5g)(6+5g)$", t: "Factoring", c: "1B" },
  { id: '2h', q: "$h^2 - 9h - 36$", a: "$(h - 12)(h + 3)$", h: "Find two numbers that multiply to -36 and add to -9.", s: "$-12 \times 3 = -36, -12 + 3 = -9 \rightarrow (h-12)(h+3)$", t: "Factoring", c: "1B" },
  { id: '2i', q: "$i^2 + 5i - 36$", a: "$(i + 9)(i - 4)$", h: "Find two numbers that multiply to -36 and add to 5.", s: "$9 \times -4 = -36, 9 - 4 = 5 \rightarrow (i+9)(i-4)$", t: "Factoring", c: "1B" },
  { id: '2j', q: "$2j^2 + 11j + 12$", a: "$(2j + 3)(j + 4)$", h: "Factor by grouping or trial and error.", s: "$2j^2 + 8j + 3j + 12 = 2j(j+4) + 3(j+4) = (2j+3)(j+4)$", t: "Factoring", c: "1B" },
  { id: '2k', q: "$3k^2 - 7k - 6$", a: "$(3k + 2)(k - 3)$", h: "Multiply 3 and -6, find factors of -18 that add to -7.", s: "$3k^2 - 9k + 2k - 6 = 3k(k-3) + 2(k-3) = (3k+2)(k-3)$", t: "Factoring", c: "1B" },
  { id: '2l', q: "$5l^2 - 14l + 8$", a: "$(5l - 4)(l - 2)$", h: "Factor by grouping.", s: "$5l^2 - 10l - 4l + 8 = 5l(l-2) - 4(l-2) = (5l-4)(l-2)$", t: "Factoring", c: "1B" },
  { id: '2m', q: "$4m^2 + 4m - 15$", a: "$(2m - 3)(2m + 5)$", h: "Factor by grouping.", s: "$4m^2 + 10m - 6m - 15 = 2m(2m+5) - 3(2m+5) = (2m-3)(2m+5)$", t: "Factoring", c: "1B" },
  { id: '2n', q: "$mn + m + pn + p$", a: "$(m + p)(n + 1)$", h: "Factor by grouping in pairs.", s: "$m(n+1) + p(n+1) = (m+p)(n+1)$", t: "Factoring", c: "1B" },
  { id: '2o', q: "$p^3 + 9p^2 + 4p + 36$", a: "$(p^2 + 4)(p + 9)$", h: "Factor by grouping in pairs.", s: "$p^2(p+9) + 4(p+9) = (p^2+4)(p+9)$", t: "Factoring", c: "1B" },
  { id: '2p', q: "$qt - rt - 5q + 5r$", a: "$(q - r)(t - 5)$", h: "Factor by grouping in pairs.", s: "$t(q-r) - 5(q-r) = (q-r)(t-5)$", t: "Factoring", c: "1B" },
  { id: '2q', q: "$u^2w + vw - u^2x - vx$", a: "$(u^2 + v)(w - x)$", h: "Factor by grouping in pairs.", s: "$w(u^2+v) - x(u^2+v) = (u^2+v)(w-x)$", t: "Factoring", c: "1B" },
  { id: '2r', q: "$x^2 - y^2 + 2x - 2y$", a: "$(x - y)(x + y + 2)$", h: "Factor the difference of squares then factor out 2.", s: "$(x-y)(x+y) + 2(x-y) = (x-y)(x+y+2)$", t: "Factoring", c: "1B" },

  // 3. Simplify (Algebraic Fractions Part 1)
  { id: '3a', q: "$\\frac{x}{2} + \\frac{x}{4}$", a: "$\\frac{3x}{4}$", h: "Find a common denominator (4).", s: "$\\frac{2x}{4} + \\frac{x}{4} = \\frac{3x}{4}$", t: "Algebraic fractions", c: "1C" },
  { id: '3b', q: "$\\frac{x}{2} - \\frac{x}{4}$", a: "$\\frac{x}{4}$", h: "Find a common denominator.", s: "$\\frac{2x}{4} - \\frac{x}{4} = \\frac{x}{4}$", t: "Algebraic fractions", c: "1C" },
  { id: '3c', q: "$\\frac{x}{2} \\times \\frac{x}{4}$", a: "$\\frac{x^2}{8}$", h: "Multiply numerators and denominators.", s: "$\\frac{x \times x}{2 \times 4} = \\frac{x^2}{8}$", t: "Algebraic fractions", c: "1C" },
  { id: '3d', q: "$\\frac{x}{2} \\div \\frac{x}{4}$", a: "$2$", h: "Multiply by the reciprocal.", s: "$\\frac{x}{2} \times \\frac{4}{x} = \\frac{4x}{2x} = 2$", t: "Algebraic fractions", c: "1C" },
  { id: '3e', q: "$\\frac{3a}{2b} + \\frac{2a}{3b}$", a: "$\\frac{13a}{6b}$", h: "Find common denominator 6b.", s: "$\\frac{9a}{6b} + \\frac{4a}{6b} = \\frac{13a}{6b}$", t: "Algebraic fractions", c: "1C" },
  { id: '3f', q: "$\\frac{3a}{2b} - \\frac{2a}{3b}$", a: "$\\frac{5a}{6b}$", h: "Common denominator 6b.", s: "$\\frac{9a}{6b} - \\frac{4a}{6b} = \\frac{5a}{6b}$", t: "Algebraic fractions", c: "1C" },
  { id: '3g', q: "$\\frac{3a}{2b} \\times \\frac{2a}{3b}$", a: "$\\frac{a^2}{b^2}$", h: "Simplify before multiplying if possible.", s: "$\\frac{3a \times 2a}{2b \times 3b} = \\frac{6a^2}{6b^2} = \\frac{a^2}{b^2}$", t: "Algebraic fractions", c: "1C" },
  { id: '3h', q: "$\\frac{3a}{2b} \\div \\frac{2a}{3b}$", a: "$\\frac{9}{4}$", h: "Multiply by reciprocal.", s: "$\\frac{3a}{2b} \times \\frac{3b}{2a} = \\frac{9ab}{4ab} = \\frac{9}{4}$", t: "Algebraic fractions", c: "1C" },
  { id: '3i', q: "$\\frac{x}{y} + \\frac{y}{x}$", a: "$\\frac{x^2 + y^2}{xy}$", h: "Common denominator xy.", s: "$\\frac{x^2}{xy} + \\frac{y^2}{xy} = \\frac{x^2+y^2}{xy}$", t: "Algebraic fractions", c: "1C" },
  { id: '3j', q: "$\\frac{x}{y} - \\frac{y}{x}$", a: "$\\frac{x^2 - y^2}{xy}$", h: "Common denominator xy.", s: "$\\frac{x^2}{xy} - \\frac{y^2}{xy} = \\frac{x^2-y^2}{xy}$", t: "Algebraic fractions", c: "1C" },
  { id: '3k', q: "$\\frac{x}{y} \\times \\frac{y}{x}$", a: "$1$", h: "Everything cancels out.", s: "$\\frac{xy}{yx} = 1$", t: "Algebraic fractions", c: "1C" },
  { id: '3l', q: "$\\frac{x}{y} \\div \\frac{y}{x}$", a: "$\\frac{x^2}{y^2}$", h: "Multiply by reciprocal.", s: "$\\frac{x}{y} \times \\frac{x}{y} = \\frac{x^2}{y^2}$", t: "Algebraic fractions", c: "1C" },

  // 4. Simplify (Algebraic Fractions Part 2)
  { id: '4a', q: "$\\frac{x + 4}{5} + \\frac{x - 5}{3}$", a: "$\\frac{8x - 13}{15}$", h: "Common denominator 15.", s: "$\\frac{3(x+4) + 5(x-5)}{15} = \\frac{3x+12+5x-25}{15} = \\frac{8x-13}{15}$", t: "Algebraic fractions", c: "1C" },
  { id: '4b', q: "$\\frac{5}{x + 4} + \\frac{3}{x - 5}$", a: "$\\frac{8x - 13}{(x + 4)(x - 5)}$", h: "Common denominator $(x+4)(x-5)$.", s: "$\\frac{5(x-5) + 3(x+4)}{(x+4)(x-5)} = \\frac{5x-25+3x+12}{(x+4)(x-5)} = \\frac{8x-13}{(x+4)(x-5)}$", t: "Algebraic fractions", c: "1C" },
  { id: '4c', q: "$\\frac{x + 1}{2} - \\frac{x - 4}{5}$", a: "$\\frac{3x + 13}{10}$", h: "Common denominator 10. Distribute negative carefully.", s: "$\\frac{5(x+1) - 2(x-4)}{10} = \\frac{5x+5-2x+8}{10} = \\frac{3x+13}{10}$", t: "Algebraic fractions", c: "1C" },
  { id: '4d', q: "$\\frac{2}{x + 1} - \\frac{5}{x - 4}$", a: "$\\frac{-3x - 13}{(x + 1)(x - 4)}$", h: "Common denominator $(x+1)(x-4)$.", s: "$\\frac{2(x-4) - 5(x+1)}{(x+1)(x-4)} = \\frac{2x-8-5x-5}{(x+1)(x-4)} = \\frac{-3x-13}{(x+1)(x-4)}$", t: "Algebraic fractions", c: "1C" },
  { id: '4e', q: "$\\frac{x}{2} - \\frac{x + 3}{4}$", a: "$\\frac{x - 3}{4}$", h: "Common denominator 4. Distribute negative.", s: "$\\frac{2x - (x+3)}{4} = \\frac{2x-x-3}{4} = \\frac{x-3}{4}$", t: "Algebraic fractions", c: "1C" },
  { id: '4f', q: "$\\frac{4}{x} - \\frac{x}{x + 3}$", a: "$\\frac{12 + 4x - x^2}{x(x + 3)}$", h: "Common denominator $x(x+3)$.", s: "$\\frac{4(x+3) - x^2}{x(x+3)} = \\frac{4x+12-x^2}{x(x+3)}$", t: "Algebraic fractions", c: "1C" }
];

async function seed() {
  const collRef = db.collection('questions');
  
  // 1. Clear existing questions for this chapter
  console.log("Cleaning old questions...");
  const oldDocs = await collRef.where('chapterId', '==', 'y11a-1').get();
  const batchDelete = db.batch();
  oldDocs.forEach(d => batchDelete.delete(d.ref));
  await batchDelete.commit();

  // 2. Add new questions with $ delimiters
  console.log("Seeding 48 questions with LaTeX delimiters...");
  const batchAdd = db.batch();
  questions.forEach(qData => {
    const docRef = collRef.doc();
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
      type: 'short_answer',
      answer: qData.a,
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
