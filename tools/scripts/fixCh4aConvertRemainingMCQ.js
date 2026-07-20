import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle options and return new array with correct index
function shuffleOptions(opts, correctVal) {
  const arr = [...opts];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const idx = arr.indexOf(correctVal);
  return { options: arr, answer: String(idx) };
}

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  const updates = {
    // ==========================================
    // Category 7: Area Word Problems
    // ==========================================
    'y9-4a-7a': {
      question: "An expression for the area of a rectangle is \\(10b + 15\\). If the top side has length \\(2b + 3\\), find an expression for the missing side length.",
      ...shuffleOptions(["\\(10\\)", "\\(2\\)", "\\(5\\)", "\\(5(2b+3)\\)"], "\\(5\\)"),
      solutionSteps: [
        {
          explanation: "Write down the relation between rectangle area, length, and width: \\(\\text{Missing Side} = \\frac{\\text{Area}}{\\text{Given Side}}\\).",
          workingOut: "\\text{Missing Side} = \\frac{10b + 15}{2b + 3}"
        },
        {
          explanation: "Factorise the numerator by extracting the HCF \\(5\\), and then cancel out the common bracket factor \\((2b + 3)\\).",
          workingOut: "\\frac{5(2b + 3)}{2b + 3} = 5"
        }
      ]
    },
    'y9-4a-7b': {
      question: "An expression for the area of a rectangle is \\(12m + 8mn\\). If the top side has length \\(4m\\), find an expression for the missing side length.",
      ...shuffleOptions(["\\(3m + 2n\\)", "\\(3 + 2n\\)", "\\(4(3 + 2n)\\)", "\\(3 + 8n\\)"], "\\(3 + 2n\\)"),
      solutionSteps: [
        {
          explanation: "Express the missing side length as the area divided by the given side: \\(\\text{Missing Side} = \\frac{\\text{Area}}{\\text{Given Side}}\\).",
          workingOut: "\\text{Missing Side} = \\frac{12m + 8mn}{4m}"
        },
        {
          explanation: "Factorise the numerator by extracting the HCF \\(4m\\), then divide through to obtain the simplified expression.",
          workingOut: "\\frac{4m(3 + 2n)}{4m} = 3 + 2n"
        }
      ]
    },
    'y9-4a-7c': {
      question: "An expression for the area of a rectangle is \\(14y + 21\\). If the left side has length \\(7\\), find an expression for the missing side length.",
      ...shuffleOptions(["\\(2y + 21\\)", "\\(7(2y + 3)\\)", "\\(2y - 3\\)", "\\(2y + 3\\)"], "\\(2y + 3\\)"),
      solutionSteps: [
        {
          explanation: "Calculate the missing side length: \\(\\text{Missing Side} = \\frac{\\text{Area}}{\\text{Given Side}}\\).",
          workingOut: "\\text{Missing Side} = \\frac{14y + 21}{7}"
        },
        {
          explanation: "Factorise the numerator by extracting the HCF \\(7\\), then divide through.",
          workingOut: "\\frac{7(2y + 3)}{7} = 2y + 3"
        }
      ]
    },
    'y9-4a-7d': {
      question: "An expression for the area of a rectangle is \\(12pq + 18qr\\). If the left side has length \\(6q\\), find an expression for the missing side length.",
      ...shuffleOptions(["\\(2p + 3qr\\)", "\\(2p + 3r\\)", "\\(12p + 18r\\)", "\\(2pq + 3qr\\)"], "\\(2p + 3r\\)"),
      solutionSteps: [
        {
          explanation: "Formulate the division: \\(\\text{Missing Side} = \\frac{\\text{Area}}{\\text{Given Side}}\\).",
          workingOut: "\\text{Missing Side} = \\frac{12pq + 18qr}{6q}"
        },
        {
          explanation: "Factorise the numerator by pulling out the HCF \\(6q\\), then divide through.",
          workingOut: "\\frac{6q(2p + 3r)}{6q} = 2p + 3r"
        }
      ]
    },
    'y9-4a-7e': {
      question: "An expression for the area of a rectangle is \\(3b + b^2\\). If the top side has length \\(b\\), find an expression for the missing side length.",
      ...shuffleOptions(["\\(3b + 1\\)", "\\(b + 1\\)", "\\(3 + b\\)", "\\(3\\)"], "\\(3 + b\\)"),
      solutionSteps: [
        {
          explanation: "Calculate the missing side: \\(\\text{Missing Side} = \\frac{\\text{Area}}{\\text{Given Side}}\\).",
          workingOut: "\\text{Missing Side} = \\frac{3b + b^2}{b}"
        },
        {
          explanation: "Factorise the numerator by pulling out \\(b\\), then simplify.",
          workingOut: "\\frac{b(3 + b)}{b} = 3 + b"
        }
      ]
    },
    'y9-4a-7f': {
      question: "An expression for the area of a rectangle is \\(16x^2 + 8xy\\). If the top side has length \\(8x\\), find an expression for the missing side length.",
      ...shuffleOptions(["\\(2x + 8y\\)", "\\(2x + y\\)", "\\(x + y\\)", "\\(2x^2 + y\\)"], "\\(2x + y\\)"),
      solutionSteps: [
        {
          explanation: "Compute the missing side: \\(\\text{Missing Side} = \\frac{\\text{Area}}{\\text{Given Side}}\\).",
          workingOut: "\\text{Missing Side} = \\frac{16x^2 + 8xy}{8x}"
        },
        {
          explanation: "Extract the HCF \\(8x\\) from the numerator and cancel it with the denominator.",
          workingOut: "\\frac{8x(2x + y)}{8x} = 2x + y"
        }
      ]
    },
    'y9-4a-7g': {
      question: "An expression for the area of a rectangle is \\(18uv + 9u^2\\). If the left side has length \\(9u\\), find an expression for the missing side length.",
      ...shuffleOptions(["\\(2v + 9u\\)", "\\(v + u\\)", "\\(2v + u^2\\)", "\\(2v + u\\)"], "\\(2v + u\\)"),
      solutionSteps: [
        {
          explanation: "Calculate the missing side length: \\(\\text{Missing Side} = \\frac{\\text{Area}}{\\text{Given Side}}\\).",
          workingOut: "\\text{Missing Side} = \\frac{18uv + 9u^2}{9u}"
        },
        {
          explanation: "Extract the HCF \\(9u\\) from the numerator and simplify.",
          workingOut: "\\frac{9u(2v + u)}{9u} = 2v + u"
        }
      ]
    },
    'y9-4a-7h': {
      question: "An expression for the area of a rectangle is \\(30x^2y^2 - 20x^2\\). If the top side has length \\(3y^2 - 2\\), find an expression for the missing side length.",
      ...shuffleOptions(["\\(10xy\\)", "\\(10x^2y^2\\)", "\\(10x^2\\)", "\\(10\\)"], "\\(10x^2\\)"),
      solutionSteps: [
        {
          explanation: "Compute the division: \\(\\text{Missing Side} = \\frac{\\text{Area}}{\\text{Given Side}}\\).",
          workingOut: "\\text{Missing Side} = \\frac{30x^2y^2 - 20x^2}{3y^2 - 2}"
        },
        {
          explanation: "Factorise the numerator by extracting \\(10x^2\\), then cancel out the common bracket term.",
          workingOut: "\\frac{10x^2(3y^2 - 2)}{3y^2 - 2} = 10x^2"
        }
      ]
    },

    // ==========================================
    // Category 8: Three-term Factorisation
    // ==========================================
    'y9-4a-8a': {
      question: "Factorise fully: \\(6x^2y - 3xy + 12xy^2\\)",
      ...shuffleOptions(["\\(3(2x^2y - xy + 4xy^2)\\)", "\\(3xy(2x - 1 + 4y)\\)", "\\(3xy(2x + 4y)\\)", "\\(xy(6x - 3 + 12y)\\)"], "\\(3xy(2x - 1 + 4y)\\)"),
      solutionSteps: [
        {
          explanation: "Find the Highest Common Factor (HCF) of the numbers \\(6, -3, 12\\) and the variables \\(x^2y, xy, xy^2\\). The HCF is \\(3xy\\).",
          workingOut: "\\text{HCF} = 3xy"
        },
        {
          explanation: "Divide each term by the HCF to determine the expression inside the brackets.",
          workingOut: "3xy(2x - 1 + 4y)"
        }
      ]
    },
    'y9-4a-8b': {
      question: "Factorise fully: \\(6a^2b - 6ab + 24b^2\\)",
      ...shuffleOptions(["\\(6(a^2b - ab + 4b^2)\\)", "\\(6b(a^2 - a + 24b)\\)", "\\(6ab(a - 1 + 4b)\\)", "\\(6b(a^2 - a + 4b)\\)"], "\\(6b(a^2 - a + 4b)\\)"),
      solutionSteps: [
        {
          explanation: "Identify the Highest Common Factor (HCF) of the coefficients \\(6, -6, 24\\) and variables \\(a^2b, ab, b^2\\). The HCF is \\(6b\\).",
          workingOut: "\\text{HCF} = 6b"
        },
        {
          explanation: "Divide each term by \\(6b\\) to find the remaining terms inside the brackets.",
          workingOut: "6b(a^2 - a + 4b)"
        }
      ]
    },
    'y9-4a-8c': {
      question: "Factorise fully: \\(9mn + 18m^2 + 27n\\)",
      ...shuffleOptions(["\\(9mn(1 + 2m + 3n)\\)", "\\(9(mn + 2m^2 + 3n)\\)", "\\(3(3mn + 6m^2 + 9n)\\)", "\\(9m(n + 2m + 3n)\\)"], "\\(9(mn + 2m^2 + 3n)\\)"),
      solutionSteps: [
        {
          explanation: "Determine the Highest Common Factor (HCF). The coefficients \\(9, 18, 27\\) share a factor of \\(9\\). There are no common variables among all three terms.",
          workingOut: "\\text{HCF} = 9"
        },
        {
          explanation: "Factor out \\(9\\) from the expression.",
          workingOut: "9(mn + 2m^2 + 3n)"
        }
      ]
    },
    'y9-4a-8d': {
      question: "Factorise fully: \\(3p^2 + 6pq + 9q\\)",
      ...shuffleOptions(["\\(3p(p + 2q + 3q)\\)", "\\(3(p^2 + 6pq + 9q)\\)", "\\(3(p^2 + 2pq + 3q)\\)", "\\(p(3p + 6q + 9q)\\)"], "\\(3(p^2 + 2pq + 3q)\\)"),
      solutionSteps: [
        {
          explanation: "Find the Highest Common Factor (HCF) of the terms. The numbers \\(3, 6, 9\\) share \\(3\\). There is no variable common to all three terms.",
          workingOut: "\\text{HCF} = 3"
        },
        {
          explanation: "Factor out \\(3\\) from the expression.",
          workingOut: "3(p^2 + 2pq + 3q)"
        }
      ]
    },
    'y9-4a-8e': {
      question: "Factorise fully: \\(6x^2y + 4xy + 8xy^2\\)",
      ...shuffleOptions(["\\(2(3x^2y + 2xy + 4xy^2)\\)", "\\(2xy(3x + 2 + 4y)\\)", "\\(2xy(3x + 4y)\\)", "\\(xy(6x + 4 + 8y)\\)"], "\\(2xy(3x + 2 + 4y)\\)"),
      solutionSteps: [
        {
          explanation: "Find the Highest Common Factor (HCF) of the numbers \\(6, 4, 8\\) and variables \\(x^2y, xy, xy^2\\). The HCF is \\(2xy\\).",
          workingOut: "\\text{HCF} = 2xy"
        },
        {
          explanation: "Factor out \\(2xy\\) by dividing each term by it.",
          workingOut: "2xy(3x + 2 + 4y)"
        }
      ]
    },
    'y9-4a-8f': {
      question: "Factorise fully: \\(9u^2 + 12uv + 15uv^2\\)",
      ...shuffleOptions(["\\(3(3u^2 + 4uv + 5uv^2)\\)", "\\(3u(3u + 4v + 5v)\\)", "\\(u(9u + 12v + 15v^2)\\)", "\\(3u(3u + 4v + 5v^2)\\)"], "\\(3u(3u + 4v + 5v^2)\\)"),
      solutionSteps: [
        {
          explanation: "Identify the Highest Common Factor (HCF) of \\(9u^2, 12uv, 15uv^2\\). The HCF is \\(3u\\).",
          workingOut: "\\text{HCF} = 3u"
        },
        {
          explanation: "Divide each term by \\(3u\\) to obtain the simplified terms in brackets.",
          workingOut: "3u(3u + 4v + 5v^2)"
        }
      ]
    },
    'y9-4a-8g': {
      question: "Factorise fully: \\(6a^2b^2 + 12ab^2 + 18a^2b\\)",
      ...shuffleOptions(["\\(6(a^2b^2 + 2ab^2 + 3a^2b)\\)", "\\(6ab(ab + 2b + 3a)\\)", "\\(6ab(ab + 2b + 3)\\)", "\\(6a^2b^2(1 + 2 + 3)\\)"], "\\(6ab(ab + 2b + 3a)\\)"),
      solutionSteps: [
        {
          explanation: "Determine the Highest Common Factor (HCF) of the terms, which is \\(6ab\\).",
          workingOut: "\\text{HCF} = 6ab"
        },
        {
          explanation: "Factor out \\(6ab\\) from each term.",
          workingOut: "6ab(ab + 2b + 3a)"
        }
      ]
    },
    'y9-4a-8h': {
      question: "Factorise fully: \\(7k^2 - 21km - 28m^2\\)",
      ...shuffleOptions(["\\(7(k^2 - 21km - 28m^2)\\)", "\\(7k(k - 3m - 4m^2)\\)", "\\(7(k^2 - 3km - 4m^2)\\)", "\\(7m(k^2 - 3k - 4m)\\)"], "\\(7(k^2 - 3km - 4m^2)\\)"),
      solutionSteps: [
        {
          explanation: "Find the Highest Common Factor (HCF) of the coefficients \\(7, -21, -28\\), which is \\(7\\). There is no variable common to all terms.",
          workingOut: "\\text{HCF} = 7"
        },
        {
          explanation: "Factor out \\(7\\) from the expression.",
          workingOut: "7(k^2 - 3km - 4m^2)"
        }
      ]
    }
  };

  for (const [id, data] of Object.entries(updates)) {
    console.log(`Converting remaining ${id} to multiple_choice with shuffled options and multi-step detailed solutions...`);
    const docRef = questionsCol.doc(id);
    batch.update(docRef, {
      type: 'multiple_choice',
      question: data.question,
      options: data.options,
      answer: data.answer,
      solutionSteps: data.solutionSteps
    });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed conversion of all remaining 16 questions in Ch4A with highly detailed steps!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
