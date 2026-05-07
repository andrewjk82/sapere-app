// Direct Firebase REST import for Ch3 questions
// Run: node src/scripts/directImportCh3.mjs

const PROJECT_ID = 'sapere-fe23e';
const API_KEY = 'AIzaSyA0wipuWHllQjqiGdCttJ0U6N4mHZysZPk';

const questions = [
  { question: 'Simplify: $4x + 9x$', answer: '13x', solution: '$4x + 9x = 13x$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3A', topicTitle: 'Collecting like terms', difficulty: 'easy', year: 'Year 10', isManual: true },
  { question: 'Simplify: $5p^3q - 9p^3q + 11p^3q$', answer: '7p^3q', solution: '$(5-9+11)p^3q = 7p^3q$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3A', topicTitle: 'Collecting like terms', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Simplify: $ab - 2ab^2 - 6ab + ab^2$', answer: '-5ab - ab^2', solution: '$(ab-6ab)+(-2ab^2+ab^2)=-5ab-ab^2$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3A', topicTitle: 'Collecting like terms', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Simplify: $8x^3y - 2x^2y + 12x^3y - 8x^2y$', answer: '20x^3y - 10x^2y', solution: '$20x^3y - 10x^2y$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3A', topicTitle: 'Collecting like terms', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Expand: $-2(a + 4)$', answer: '-2a - 8', solution: '$-2a - 8$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'easy', year: 'Year 10', isManual: true },
  { question: 'Expand: $-3(b + 6)$', answer: '-3b - 18', solution: '$-3b - 18$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'easy', year: 'Year 10', isManual: true },
  { question: 'Expand: $-4(3b - 5)$', answer: '-12b + 20', solution: '$-12b + 20$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand: $-5(4b - 7)$', answer: '-20b + 35', solution: '$-20b + 35$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand: $d(d - 9)$', answer: 'd^2 - 9d', solution: '$d^2 - 9d$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand: $e(3e + 1)$', answer: '3e^2 + e', solution: '$3e^2 + e$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand: $f(5f + 6)$', answer: '5f^2 + 6f', solution: '$5f^2 + 6f$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand: $-2m(5m - 4)$', answer: '-10m^2 + 8m', solution: '$-10m^2 + 8m$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Expand: $-3n(5n + 7)$', answer: '-15n^2 - 21n', solution: '$-15n^2 - 21n$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Expand: $2p(3q - 5r)$', answer: '6pq - 10pr', solution: '$6pq - 10pr$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Expand: $-3x(2x + 5y)$', answer: '-6x^2 - 15xy', solution: '$-6x^2 - 15xy$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Expand: $-2z(3z - 4y)$', answer: '-6z^2 + 8zy', solution: '$-6z^2 + 8zy$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Expand: $2a(3 + 4ab)$', answer: '6a + 8a^2b', solution: '$6a + 8a^2b$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Expand and simplify: $2(c + 7) - 9$', answer: '2c + 5', solution: '$2c + 14 - 9 = 2c + 5$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand and simplify: $4(h + 1) + 3h$', answer: '7h + 4', solution: '$4h + 4 + 3h = 7h + 4$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand and simplify: $4(1 - 3q) + 15q$', answer: '3q + 4', solution: '$4 - 12q + 15q = 3q + 4$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand and simplify: $2a(3a + 2b) - 6a^2$', answer: '4ab', solution: '$6a^2 + 4ab - 6a^2 = 4ab$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand and simplify: $5(b - 2) - 4(b + 3)$', answer: 'b - 22', solution: '$5b - 10 - 4b - 12 = b - 22$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand and simplify: $4y(3y - 5) + 3(3y - 5)$', answer: '12y^2 - 11y - 15', solution: '$12y^2 - 20y + 9y - 15 = 12y^2 - 11y - 15$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Expand and simplify: $2p(3p + 1) - 4(2p + 1)$', answer: '6p^2 - 6p - 4', solution: '$6p^2 + 2p - 8p - 4 = 6p^2 - 6p - 4$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3B', topicTitle: 'Expansion', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Solve: $7x - 4 = 17$', answer: '3', solution: '$7x = 21 \\Rightarrow x = 3$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3C', topicTitle: 'Solving equations', difficulty: 'easy', year: 'Year 10', isManual: true },
  { question: 'Solve: $3x = 25 - 2x$', answer: '5', solution: '$5x = 25 \\Rightarrow x = 5$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3C', topicTitle: 'Solving equations', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Solve: $7x = 18 - 2x$', answer: '2', solution: '$9x = 18 \\Rightarrow x = 2$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3C', topicTitle: 'Solving equations', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Solve: $\\frac{x}{3} + 2 = 7$', answer: '15', solution: '$x/3 = 5 \\Rightarrow x = 15$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3C', topicTitle: 'Solving equations', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Solve: $\\frac{3x}{2} + 2 = 8$', answer: '4', solution: '$3x/2 = 6 \\Rightarrow x = 4$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3C', topicTitle: 'Solving equations', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Solve: $3x - 7 = x + 1$', answer: '4', solution: '$2x = 8 \\Rightarrow x = 4$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3C', topicTitle: 'Solving equations', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Solve: $\\frac{x}{2} + \\frac{x}{5} = 14$', answer: '20', solution: '$7x/10 = 14 \\Rightarrow x = 20$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3C', topicTitle: 'Solving equations', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Solve: $3(2x - 1) + 3x = 15$', answer: '2', solution: '$6x - 3 + 3x = 15 \\Rightarrow 9x = 18 \\Rightarrow x = 2$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3C', topicTitle: 'Solving equations', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Find $P$ when $a = 6, b = 7$ in $P = 4(a + b)$.', answer: '52', solution: '$P = 4(13) = 52$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3E', topicTitle: 'Formulas', difficulty: 'easy', year: 'Year 10', isManual: true },
  { question: 'Find $a$ when $P = 20, b = 6$ in $P = 4(a + b)$.', answer: '-1', solution: '$5 = a + 6 \\Rightarrow a = -1$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3E', topicTitle: 'Formulas', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Find $r_1$ if $R = 2, r_2 = 6$ in $\\frac{1}{R} = \\frac{1}{r_1} + \\frac{1}{r_2}$.', answer: '3', solution: '$1/r_1 = 1/2 - 1/6 = 1/3 \\Rightarrow r_1 = 3$', type: 'short_answer', chapterId: 'y10-3', topicCode: '3E', topicTitle: 'Formulas', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Factorise: $2ax - a + 6x - 3$', answer: '(2x - 1)(a + 3)', solution: '$a(2x-1)+3(2x-1)=(2x-1)(a+3)$', type: 'multiple_choice', options: ['$(2x-1)(a+3)$','$(2x+1)(a-3)$','$(x-1)(2a+3)$','$(2x-1)(a-3)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Factorise: $ab + 5b - 2a - 10$', answer: '(a + 5)(b - 2)', solution: '$b(a+5)-2(a+5)=(a+5)(b-2)$', type: 'multiple_choice', options: ['$(a+5)(b-2)$','$(a-5)(b+2)$','$(a+5)(b+2)$','$(a-5)(b-2)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Factorise: $2xy + 3y + 10x + 15$', answer: '(2x + 3)(y + 5)', solution: '$y(2x+3)+5(2x+3)=(2x+3)(y+5)$', type: 'multiple_choice', options: ['$(2x+3)(y+5)$','$(2x-3)(y-5)$','$(x+3)(2y+5)$','$(2x+3)(y-5)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Factorise: $3mx - 21x + 2m - 14$', answer: '(m - 7)(3x + 2)', solution: '$3x(m-7)+2(m-7)=(m-7)(3x+2)$', type: 'multiple_choice', options: ['$(m-7)(3x+2)$','$(m+7)(3x-2)$','$(3m-7)(x+2)$','$(m-7)(3x-2)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Factorise: $x^2 - 3x + 2$', answer: '(x - 2)(x - 1)', solution: '$(x-2)(x-1)$', type: 'multiple_choice', options: ['$(x-2)(x-1)$','$(x+2)(x+1)$','$(x-2)(x+1)$','$(x+2)(x-1)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Factorise: $c^2 + 12c + 11$', answer: '(c + 11)(c + 1)', solution: '$(c+11)(c+1)$', type: 'multiple_choice', options: ['$(c+11)(c+1)$','$(c+6)(c+6)$','$(c-11)(c-1)$','$(c+12)(c+1)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Factorise: $x^2 - 4x - 5$', answer: '(x - 5)(x + 1)', solution: '$(x-5)(x+1)$', type: 'multiple_choice', options: ['$(x-5)(x+1)$','$(x+5)(x-1)$','$(x-5)(x-1)$','$(x+4)(x-1)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Factorise: $y^2 + 9y - 10$', answer: '(y + 10)(y - 1)', solution: '$(y+10)(y-1)$', type: 'multiple_choice', options: ['$(y+10)(y-1)$','$(y-10)(y+1)$','$(y+5)(y+4)$','$(y+9)(y-1)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Factorise: $z^2 - 6z - 16$', answer: '(z - 8)(z + 2)', solution: '$(z-8)(z+2)$', type: 'multiple_choice', options: ['$(z-8)(z+2)$','$(z+8)(z-2)$','$(z-4)(z-4)$','$(z-16)(z+1)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Factorise: $c^2 + 8c - 20$', answer: '(c + 10)(c - 2)', solution: '$(c+10)(c-2)$', type: 'multiple_choice', options: ['$(c+10)(c-2)$','$(c-10)(c+2)$','$(c+4)(c+5)$','$(c+20)(c-1)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'medium', year: 'Year 10', isManual: true },
  { question: 'Factorise: $p^2 - 11p - 26$', answer: '(p - 13)(p + 2)', solution: '$(p-13)(p+2)$', type: 'multiple_choice', options: ['$(p-13)(p+2)$','$(p+13)(p-2)$','$(p-26)(p+1)$','$(p-11)(p-2)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Factorise: $k^2 - 11k - 42$', answer: '(k - 14)(k + 3)', solution: '$(k-14)(k+3)$', type: 'multiple_choice', options: ['$(k-14)(k+3)$','$(k+14)(k-3)$','$(k-21)(k+2)$','$(k-7)(k-6)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'hard', year: 'Year 10', isManual: true },
  { question: 'Factorise: $x^2 + 4x - 60$', answer: '(x + 10)(x - 6)', solution: '$(x+10)(x-6)$', type: 'multiple_choice', options: ['$(x+10)(x-6)$','$(x-10)(x+6)$','$(x+12)(x-5)$','$(x+15)(x-4)$'], chapterId: 'y10-3', topicCode: '3F', topicTitle: 'Factorising', difficulty: 'hard', year: 'Year 10', isManual: true },
];

async function getExistingQuestions() {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery?key=${API_KEY}`;
  const body = {
    structuredQuery: {
      from: [{ collectionId: 'questions' }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'chapterId' },
          op: 'EQUAL',
          value: { stringValue: 'y10-3' }
        }
      },
      select: { fields: [{ fieldPath: 'question' }] }
    }
  };
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const data = await res.json();
  const existing = new Set();
  for (const row of data) {
    if (row.document?.fields?.question?.stringValue) {
      existing.add(row.document.fields.question.stringValue);
    }
  }
  return existing;
}

function toFirestoreDoc(q) {
  const fields = {};
  for (const [k, v] of Object.entries(q)) {
    if (Array.isArray(v)) {
      fields[k] = { arrayValue: { values: v.map(s => ({ stringValue: s })) } };
    } else if (typeof v === 'boolean') {
      fields[k] = { booleanValue: v };
    } else {
      fields[k] = { stringValue: String(v) };
    }
  }
  return { fields };
}

async function addQuestion(q) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/questions?key=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toFirestoreDoc(q))
  });
  return res.ok;
}

async function main() {
  console.log('Fetching existing Ch3 questions...');
  const existing = await getExistingQuestions();
  console.log(`Found ${existing.size} existing questions in DB.`);

  let added = 0;
  let skipped = 0;
  for (const q of questions) {
    if (existing.has(q.question)) {
      skipped++;
    } else {
      const ok = await addQuestion(q);
      if (ok) { added++; console.log(`  + Added: ${q.question.slice(0, 50)}`); }
      else { console.log(`  ! Failed: ${q.question.slice(0, 50)}`); }
    }
  }
  console.log(`\nDone! Added: ${added}, Skipped (already exist): ${skipped}`);
  console.log(`Total Ch3 questions now: ~${existing.size + added}`);
}

main().catch(console.error);
