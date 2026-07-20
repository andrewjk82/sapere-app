#!/usr/bin/env node
import fs from 'fs';

const FILE = './src/constants/seedYear10Ch3JQuestions.js';
const IMPORT_PATH = '../../src/constants/seedYear10Ch3JQuestions.js';

const escapeMath = (str) => {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
};

const generateStepByStep = (q) => {
  const qtext = q.question || '';
  const id = q.id;

  // 1. Simplify
  if (id.includes('-q1') || qtext.toLowerCase().includes('simplify:')) {
    if (id === 'y10-3j-q1a') {
      return [
        {
          explanation: "Identify the like terms in the expression. Terms with \\\\(a^2\\\\) can be grouped together, and terms with \\\\(b\\\\) can be grouped together.",
          workingOut: "\\\\(4a^2 - 5b + 2a^2 + 6b = (4a^2 + 2a^2) + (-5b + 6b)\\\\)"
        },
        {
          explanation: "Add or subtract the coefficients of the like terms: \\\\(4+2=6\\\\) for the \\\\(a^2\\\\) terms, and \\\\(-5+6=1\\\\) for the \\\\(b\\\\) terms.",
          workingOut: "\\\\(6a^2 + 1b = 6a^2 + b\\\\)"
        },
        {
          explanation: "No more like terms left. The fully simplified expression is:",
          workingOut: "\\\\(6a^2 + b\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q1b') {
      return [
        {
          explanation: "Evaluate the multiplication parts first: \\\\(4x \\times 2y = 8xy\\\\) and \\\\(2x \\times 4x = 8x^2\\\\).",
          workingOut: "\\\\(4x \\times 2y - 3x^2 - 5xy + 2x \\times 4x = 8xy - 3x^2 - 5xy + 8x^2\\\\)"
        },
        {
          explanation: "Group the like terms together. Group the \\\\(x^2\\\\) terms and the \\\\(xy\\\\) terms.",
          workingOut: "\\\\((-3x^2 + 8x^2) + (8xy - 5xy)\\\\)"
        },
        {
          explanation: "Combine the coefficients: \\\\(-3 + 8 = 5\\\\) for the \\\\(x^2\\\\) terms, and \\\\(8 - 5 = 3\\\\) for the \\\\(xy\\\\) terms.",
          workingOut: "\\\\(5x^2 + 3xy\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q1c') {
      return [
        {
          explanation: "Simplify the fraction terms using index laws first: \\\\(\\frac{6x^2y^3}{3xy} = 2xy^2\\\\) and \\\\(\\frac{8x^3y^2}{2x^2y^2} = 4x\\\\).",
          workingOut: "\\\\(2xy^2 + 4x^2 - 4x + 2xy^2\\\\)"
        },
        {
          explanation: "Combine the like terms: \\\\(2xy^2 + 2xy^2 = 4xy^2\\\\).",
          workingOut: "\\\\((2xy^2 + 2xy^2) + 4x^2 - 4x = 4xy^2 + 4x^2 - 4x\\\\)"
        },
        {
          explanation: "The simplified expression is:",
          workingOut: "\\\\(4xy^2 + 4x^2 - 4x\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q1d') {
      return [
        {
          explanation: "Apply index laws to simplify each fraction term individually.",
          workingOut: "\\\\(\\frac{8a^3b^3}{ab} + \\frac{4a^3b^2}{b^2} - \\frac{10a^5b}{2a^2b} + \\frac{15a^4b^2}{3a^2} = 8a^2b^2 + 4a^3 - 5a^3 + 5a^2b^2\\\\)"
        },
        {
          explanation: "Group and combine the like terms: \\\\(8a^2b^2 + 5a^2b^2 = 13a^2b^2\\\\) and \\\\(4a^3 - 5a^3 = -a^3\\\\).",
          workingOut: "\\\\((8a^2b^2 + 5a^2b^2) + (4a^3 - 5a^3)\\\\)"
        },
        {
          explanation: "The final simplified expression is:",
          workingOut: "\\\\(13a^2b^2 - a^3\\\\)"
        }
      ];
    }
  }

  // 2. Expand and collect (single & double brackets)
  if (id.includes('-q2') || id.includes('-q3') || id.includes('-q4') || qtext.toLowerCase().includes('expand:')) {
    if (id === 'y10-3j-q2a') {
      return [
        {
          explanation: "Distribute each term outside the brackets: multiply \\\\(4\\\\) by \\\\(x+3\\\\) and \\\\(3\\\\) by \\\\(x-2\\\\).",
          workingOut: "\\\\(4(x+3) + 3(x-2) = (4x + 12) + (3x - 6)\\\\)"
        },
        {
          explanation: "Group the like terms: \\\\(4x\\\\) with \\\\(3x\\\\), and \\\\(12\\\\) with \\\\(-6\\\\).",
          workingOut: "\\\\((4x + 3x) + (12 - 6)\\\\)"
        },
        {
          explanation: "Combine the terms to get the final simplified expression.",
          workingOut: "\\\\(7x + 6\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q2b') {
      return [
        {
          explanation: "Distribute: multiply \\\\(6\\\\) by \\\\(y+2\\\\) and \\\\(-4\\\\) by \\\\(y-3\\\\). Note that \\\\(-4 \\times -3 = +12\\\\).",
          workingOut: "\\\\(6y + 12 - 4y + 12\\\\)"
        },
        {
          explanation: "Group the like terms: \\\\(6y - 4y\\\\) and \\\\(12 + 12\\\\).",
          workingOut: "\\\\((6y - 4y) + (12 + 12)\\\\)"
        },
        {
          explanation: "Combine the coefficients to find the simplified result.",
          workingOut: "\\\\(2y + 24\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q2c') {
      return [
        {
          explanation: "Multiply the variable terms outside the brackets: \\\\(3x \\times x + 3x \\times 4\\\\) and \\\\(2x \\times x + 2x \\times (-5)\\\\).",
          workingOut: "\\\\(3x^2 + 12x + 2x^2 - 10x\\\\)"
        },
        {
          explanation: "Group the \\\\(x^2\\\\) terms and \\\\(x\\\\) terms together.",
          workingOut: "\\\\((3x^2 + 2x^2) + (12x - 10x)\\\\)"
        },
        {
          explanation: "Simplify by adding the coefficients.",
          workingOut: "\\\\(5x^2 + 2x\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q2d') {
      return [
        {
          explanation: "Distribute: \\\\(4y(y-2) = 4y^2 - 8y\\\\) and \\\\(-3y(2y-4) = -6y^2 + 12y\\\\). Be careful with the sign of \\\\(-3y \\times -4 = +12y\\\\).",
          workingOut: "\\\\(4y^2 - 8y - 6y^2 + 12y\\\\)"
        },
        {
          explanation: "Group the like terms: \\\\(4y^2 - 6y^2\\\\) and \\\\(-8y + 12y\\\\).",
          workingOut: "\\\\((4y^2 - 6y^2) + (-8y + 12y)\\\\)"
        },
        {
          explanation: "Combine coefficients to get the final simplified expression.",
          workingOut: "\\\\(-2y^2 + 4y\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q2e') {
      return [
        {
          explanation: "Use the FOIL method to expand the double brackets: First, Outer, Inner, Last.",
          workingOut: "\\\\((3x+2)(x+4) = 3x^2 + 12x + 2x + 8\\\\)"
        },
        {
          explanation: "Combine the middle terms (\\\\(12x + 2x\\\\)).",
          workingOut: "\\\\(3x^2 + (12x + 2x) + 8\\\\)"
        },
        {
          explanation: "Write the final simplified quadratic expression.",
          workingOut: "\\\\(3x^2 + 14x + 8\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q2f') {
      return [
        {
          explanation: "FOIL expand: \\\\(3a \\times 2a = 6a^2\\\\), \\\\(3a \\times -3 = -9a\\\\), \\\\(5 \\times 2a = 10a\\\\), \\\\(5 \\times -3 = -15\\\\).",
          workingOut: "\\\\(6a^2 - 9a + 10a - 15\\\\)"
        },
        {
          explanation: "Combine the like terms \\\\(-9a + 10a\\\\).",
          workingOut: "\\\\(6a^2 + a - 15\\\\)"
        },
        {
          explanation: "The final expanded expression is:",
          workingOut: "\\\\(6a^2 + a - 15\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q2g') {
      return [
        {
          explanation: "Expand both sets of double brackets separately.",
          workingOut: "\\\\((3y^2 + 14y + 8) - (y^2 + 3y - 10)\\\\)"
        },
        {
          explanation: "Distribute the negative sign to the second bracket and group like terms.",
          workingOut: "\\\\(3y^2 + 14y + 8 - y^2 - 3y + 10 = (3y^2 - y^2) + (14y - 3y) + (8 + 10)\\\\)"
        },
        {
          explanation: "Simplify the coefficients to get the final expression.",
          workingOut: "\\\\(2y^2 + 11y + 18\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q2h') {
      return [
        {
          explanation: "Expand both products: \\\\((c+4)(2c+3) = 2c^2 + 11c + 12\\\\) and \\\\((3c-2)(c-4) = 3c^2 - 14c + 8\\\\).",
          workingOut: "\\\\((2c^2 + 11c + 12) - (3c^2 - 14c + 8)\\\\)"
        },
        {
          explanation: "Distribute the negative sign and combine like terms.",
          workingOut: "\\\\(2c^2 + 11c + 12 - 3c^2 + 14c - 8 = (2c^2 - 3c^2) + (11c + 14c) + (12 - 8)\\\\)"
        },
        {
          explanation: "Combine coefficients to find the simplified result.",
          workingOut: "\\\\(-c^2 + 25c + 4\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q3a') {
      return [
        {
          explanation: "Expand the double brackets first: \\\\((x+2)(2x+3) = 2x^2 + 3x + 4x + 6 = 2x^2 + 7x + 6\\\\).",
          workingOut: "\\\\(4(2x^2 + 7x + 6)\\\\)"
        },
        {
          explanation: "Multiply each term inside the bracket by the outer coefficient 4.",
          workingOut: "\\\\(4 \\times 2x^2 + 4 \\times 7x + 4 \\times 6\\\\)"
        },
        {
          explanation: "The final expanded expression is:",
          workingOut: "\\\\(8x^2 + 28x + 24\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q3b') {
      return [
        {
          explanation: "Expand the double brackets first: \\\\((2a+3)(4a-1) = 8a^2 + 10a - 3\\\\).",
          workingOut: "\\\\(3(8a^2 + 10a - 3)\\\\)"
        },
        {
          explanation: "Multiply all terms inside the brackets by 3.",
          workingOut: "\\\\(3 \\times 8a^2 + 3 \\times 10a + 3 \\times (-3)\\\\)"
        },
        {
          explanation: "The final expanded expression is:",
          workingOut: "\\\\(24a^2 + 30a - 9\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q3c') {
      return [
        {
          explanation: "Expand both parts: \\\\(3(2y+3)(y+4) = 3(2y^2 + 11y + 12) = 6y^2 + 33y + 36\\\\) and \\\\(2(y-3)(2y+5) = 2(2y^2 - y - 15) = 4y^2 - 2y - 30\\\\).",
          workingOut: "\\\\((6y^2 + 33y + 36) + (4y^2 - 2y - 30)\\\\)"
        },
        {
          explanation: "Group the like terms: \\\\(6y^2 + 4y^2\\\\), \\\\(33y - 2y\\\\), and \\\\(36 - 30\\\\).",
          workingOut: "\\\\((6y^2 + 4y^2) + (33y - 2y) + (36 - 30)\\\\)"
        },
        {
          explanation: "Combine the coefficients.",
          workingOut: "\\\\(10y^2 + 31y + 6\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q3d') {
      return [
        {
          explanation: "Expand both parts: \\\\(4(b+3)(2b+1) = 8b^2 + 28b + 12\\\\) and \\\\(2(b-2)(b-4) = 2(b^2 - 6b + 8) = 2b^2 - 12b + 16\\\\).",
          workingOut: "\\\\((8b^2 + 28b + 12) - (2b^2 - 12b + 16)\\\\)"
        },
        {
          explanation: "Subtract the second expression from the first, distributing the negative sign.",
          workingOut: "\\\\(8b^2 + 28b + 12 - 2b^2 + 12b - 16 = (8b^2 - 2b^2) + (28b + 12b) + (12 - 16)\\\\)"
        },
        {
          explanation: "Simplify coefficients to find the final expression.",
          workingOut: "\\\\(6b^2 + 40b - 4\\\\)"
        }
      ];
    }
    // Fractions (q4 series)
    if (id === 'y10-3j-q4a') {
      return [
        {
          explanation: "Distribute the fractions: \\\\(\\frac{2}{3}(x+3) = \\frac{2x}{3} + 2\\\\) and \\\\(\\frac{1}{4}(x-2) = \\frac{x}{4} - \\frac{1}{2}\\\\).",
          workingOut: "\\\\(\\frac{2x}{3} + 2 + \\frac{x}{4} - \\frac{1}{2}\\\\)"
        },
        {
          explanation: "Use a common denominator of 12 for the fractions.",
          workingOut: "\\\\(\\frac{8x}{12} + \\frac{3x}{12} + \\frac{24}{12} - \\frac{6}{12}\\\\)"
        },
        {
          explanation: "Combine the terms over the common denominator.",
          workingOut: "\\\\(\\frac{11x + 18}{12}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q4b') {
      return [
        {
          explanation: "Distribute the coefficients: \\\\(4(\\frac{a}{2} + \\frac{1}{3}) = 2a + \\frac{4}{3}\\\\) and \\\\(-2(\\frac{a}{3} - \\frac{1}{4}) = -\\frac{2a}{3} + \\frac{1}{2}\\\\).",
          workingOut: "\\\\(2a + \\frac{4}{3} - \\frac{2a}{3} + \\frac{1}{2}\\\\)"
        },
        {
          explanation: "Group the \\\\(a\\\\) terms and constant terms.",
          workingOut: "\\\\((2a - \\frac{2a}{3}) + (\\frac{4}{3} + \\frac{1}{2}) = \\frac{4a}{3} + (\\frac{8}{6} + \\frac{3}{6})\\\\)"
        },
        {
          explanation: "Write the final simplified expression.",
          workingOut: "\\\\(\\frac{4a}{3} + \\frac{11}{6}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q4c') {
      return [
        {
          explanation: "Expand: \\\\(\\frac{1}{2}x(x+4) = \\frac{x^2}{2} + 2x\\\\) and \\\\(\\frac{1}{3}x(x-2) = \\frac{x^2}{3} - \\frac{2x}{3}\\\\).",
          workingOut: "\\\\(\\frac{x^2}{2} + 2x + \\frac{x^2}{3} - \\frac{2x}{3}\\\\)"
        },
        {
          explanation: "Group terms and find common denominators (6 for \\\\(x^2\\\\) and 3 for \\\\(x\\\\)).",
          workingOut: "\\\\((\\frac{3x^2}{6} + \\frac{2x^2}{6}) + (\\frac{6x}{3} - \\frac{2x}{3})\\\\)"
        },
        {
          explanation: "Combine terms to write the final simplified fraction.",
          workingOut: "\\\\(\\frac{5x^2 + 8x}{6}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q4d') {
      return [
        {
          explanation: "Expand both parts: \\\\(\\frac{3}{4}y(\\frac{y}{2}-2) = \\frac{3y^2}{8} - \\frac{3y}{2}\\\\) and \\\\(-\\frac{1}{3}y(3y-4) = -y^2 + \\frac{4y}{3}\\\\).",
          workingOut: "\\\\(\\frac{3y^2}{8} - \\frac{3y}{2} - y^2 + \\frac{4y}{3}\\\\)"
        },
        {
          explanation: "Find common denominators (8 for \\\\(y^2\\\\) terms, 6 for \\\\(y\\\\) terms).",
          workingOut: "\\\\((\\frac{3y^2}{8} - \\frac{8y^2}{8}) + (-\\frac{9y}{6} + \\frac{8y}{6})\\\\)"
        },
        {
          explanation: "Simplify to get the final expression.",
          workingOut: "\\\\(-\\frac{5y^2}{8} - \\frac{y}{6}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q4e') {
      return [
        {
          explanation: "Expand using FOIL.",
          workingOut: "\\\\(\\frac{1}{2}x \\cdot x + \\frac{1}{2}x \\cdot \\frac{1}{3} + 2 \\cdot x + 2 \\cdot \\frac{1}{3} = \\frac{x^2}{2} + \\frac{x}{6} + 2x + \\frac{2}{3}\\\\)"
        },
        {
          explanation: "Combine the \\\\(x\\\\) terms using the common denominator of 6.",
          workingOut: "\\\\(\\frac{x^2}{2} + (\\frac{x}{6} + \\frac{12x}{6}) + \\frac{2}{3}\\\\)"
        },
        {
          explanation: "Write the final expression.",
          workingOut: "\\\\(\\frac{x^2}{2} + \\frac{13x}{6} + \\frac{2}{3}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q4f') {
      return [
        {
          explanation: "Expand the first set: \\\\(\\frac{y^2}{3} + \\frac{25y}{6} + 12\\\\). Expand the second set: \\\\(y^2 - \\frac{y}{6} - \\frac{1}{6}\\\\).",
          workingOut: "\\\\((\\frac{y^2}{3} + \\frac{25y}{6} + 12) - (y^2 - \\frac{y}{6} - \\frac{1}{6})\\\\)"
        },
        {
          explanation: "Distribute the negative sign and combine like terms using a common denominator of 6.",
          workingOut: "\\\\((\\frac{2y^2}{6} - \\frac{6y^2}{6}) + (\\frac{25y}{6} + \\frac{y}{6}) + (12 + \\frac{1}{6})\\\\)"
        },
        {
          explanation: "Simplify to find the final result.",
          workingOut: "\\\\(-\\frac{2}{3}y^2 + \\frac{13}{3}y + \\frac{73}{6}\\\\)"
        }
      ];
    }
  }

  // 3. Furnace power calculation in Standard form (y10-3j-q10)
  if (id === 'y10-3j-q10') {
    return [
      {
        explanation: "Substitute the given values into the formula \\\\(P = I^2 R\\\\), where \\\\(I = 5.0 \\times 10^3\\\\) and \\\\(R = 3.2 \\times 10^{-1}\\\\).",
        workingOut: "\\\\(P = (5.0 \\times 10^3)^2 \\times (3.2 \\times 10^{-1})\\\\)"
      },
      {
        explanation: "Square the current: \\\\((5.0 \\times 10^3)^2 = 5.0^2 \\times (10^3)^2 = 25 \\times 10^6\\\\).",
        workingOut: "\\\\(P = (25 \\times 10^6) \\times (3.2 \\times 10^{-1})\\\\)"
      },
      {
        explanation: "Multiply the numeric parts and combine powers of 10: \\\\(25 \\times 3.2 = 80\\\\), and \\\\(10^6 \\times 10^{-1} = 10^5\\\\). Write in standard scientific notation.",
        workingOut: "\\\\(P = 80 \\times 10^5 = 8.0 \\times 10^6 \\text{ W}\\\\)"
      }
    ];
  }

  // 4. Algebraic Fractions with common denominator (e.g. q21 series)
  if (id.includes('-q21') || qtext.toLowerCase().includes('common denominator')) {
    if (id === 'y10-3j-q21a') {
      return [
        {
          explanation: "The denominators are 4 and 5. Find the Lowest Common Denominator (LCD), which is 20.",
          workingOut: "\\\\(\\frac{5(5x-2)}{20} + \\frac{4(2x-3)}{20}\\\\)"
        },
        {
          explanation: "Expand the numerators: \\\\(5(5x-2) = 25x - 10\\\\) and \\\\(4(2x-3) = 8x - 12\\\\).",
          workingOut: "\\\\(\\frac{25x - 10 + 8x - 12}{20}\\\\)"
        },
        {
          explanation: "Combine like terms in the numerator to get the final simplified fraction.",
          workingOut: "\\\\(\\frac{33x - 22}{20} = \\frac{11(3x - 2)}{20}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q21b') {
      return [
        {
          explanation: "The denominators are \\\\((x+2)\\\\) and \\\\((x+3)\\\\). The common denominator is \\\\((x+2)(x+3)\\\\).",
          workingOut: "\\\\(\\frac{3(x+3)}{(x+2)(x+3)} + \\frac{4(x+2)}{(x+2)(x+3)}\\\\)"
        },
        {
          explanation: "Expand the numerators: \\\\(3x + 9\\\\) and \\\\(4x + 8\\\\).",
          workingOut: "\\\\(\\frac{(3x + 9) + (4x + 8)}{(x+2)(x+3)}\\\\)"
        },
        {
          explanation: "Add the terms in the numerator to find the final fraction.",
          workingOut: "\\\\(\\frac{7x + 17}{(x+2)(x+3)}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q21c') {
      return [
        {
          explanation: "The LCD is \\\\((x+3)(x-2)\\\\). Multiply the numerator of each term by the opposite denominator.",
          workingOut: "\\\\(\\frac{2(x-2)}{(x+3)(x-2)} - \\frac{5(x+3)}{(x+3)(x-2)}\\\\)"
        },
        {
          explanation: "Expand the numerators and write under a single denominator. Be careful with the minus sign.",
          workingOut: "\\\\(\\frac{(2x - 4) - (5x + 15)}{(x+3)(x-2)}\\\\)"
        },
        {
          explanation: "Combine like terms: \\\\(2x - 5x = -3x\\\\) and \\\\(-4 - 15 = -19\\\\).",
          workingOut: "\\\\(\\frac{-3x - 19}{(x+3)(x-2)} = \\frac{-(3x + 19)}{(x+3)(x-2)}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q21d') {
      return [
        {
          explanation: "Factorise the denominators first: \\\\(3x^2+2x = x(3x+2)\\\\) and \\\\(3x^2+5x+2 = (3x+2)(x+1)\\\\).",
          workingOut: "\\\\(\\frac{3}{x(3x+2)} - \\frac{2}{(3x+2)(x+1)}\\\\)"
        },
        {
          explanation: "The LCD is \\\\(x(3x+2)(x+1)\\\\). Adjust the numerators accordingly.",
          workingOut: "\\\\(\\frac{3(x+1) - 2x}{x(3x+2)(x+1)}\\\\)"
        },
        {
          explanation: "Simplify the numerator: \\\\(3x + 3 - 2x = x + 3\\\\).",
          workingOut: "\\\\(\\frac{x+3}{x(3x+2)(x+1)}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q21e') {
      return [
        {
          explanation: "Factorise the denominators: \\\\(x^2+2x = x(x+2)\\\\) and \\\\(x^2-4 = (x+2)(x-2)\\\\).",
          workingOut: "\\\\(\\frac{5}{x(x+2)} - \\frac{2}{(x+2)(x-2)}\\\\)"
        },
        {
          explanation: "The LCD is \\\\(x(x+2)(x-2)\\\\). Rewrite the numerators.",
          workingOut: "\\\\(\\frac{5(x-2) - 2x}{x(x+2)(x-2)}\\\\)"
        },
        {
          explanation: "Simplify the numerator: \\\\(5x - 10 - 2x = 3x - 10\\\\).",
          workingOut: "\\\\(\\frac{3x - 10}{x(x+2)(x-2)}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q21f') {
      return [
        {
          explanation: "Factorise the denominators: \\\\(x^2-16 = (x+4)(x-4)\\\\) and \\\\(4+3x-x^2 = -(x-4)(x+1)\\\\).",
          workingOut: "\\\\(\\frac{4}{(x+4)(x-4)} - \\frac{3}{-(x-4)(x+1)} = \\frac{4}{(x+4)(x-4)} + \\frac{3}{(x-4)(x+1)}\\\\)"
        },
        {
          explanation: "The LCD is \\\\((x+4)(x-4)(x+1)\\\\). Rewrite the numerators.",
          workingOut: "\\\\(\\frac{4(x+1) + 3(x+4)}{(x+4)(x-4)(x+1)}\\\\)"
        },
        {
          explanation: "Simplify the numerator: \\\\(4x + 4 + 3x + 12 = 7x + 16\\\\).",
          workingOut: "\\\\(\\frac{7x + 16}{(x+4)(x-4)(x+1)}\\\\)"
        }
      ];
    }
  }

  // 5. Algebraic fractions simplify (q22 series)
  if (id.includes('-q22') || qtext.toLowerCase().includes('simplify:')) {
    if (id === 'y10-3j-q22a') {
      return [
        {
          explanation: "Factorise all numerators and denominators in the expression first.",
          workingOut: "\\\\(\\frac{x^2+5x+4}{x^2+x-12} \\times \\frac{x^2-9}{x^2+6x+8} = \\frac{(x+4)(x+1)}{(x+4)(x-3)} \\times \\frac{(x+3)(x-3)}{(x+4)(x+2)}\\\\)"
        },
        {
          explanation: "Cancel out the common factors that appear in both the numerator and the denominator.",
          workingOut: "\\\\(\\frac{\\cancel{(x+4)}(x+1)}{\\cancel{(x+4)}\\cancel{(x-3)}} \\times \\frac{(x+3)\\cancel{(x-3)}}{(x+4)(x+2)}\\\\)"
        },
        {
          explanation: "Write the remaining terms as a single simplified fraction.",
          workingOut: "\\\\(\\frac{(x+1)(x+3)}{(x+4)(x+2)}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q22b') {
      return [
        {
          explanation: "Factorise all quadratic expressions in both fractions.",
          workingOut: "\\\\(\\frac{(x+2)(x+3)}{(x+3)(x-1)} \\times \\frac{(x-4)(x-1)}{(2x+1)(x+2)}\\\\)"
        },
        {
          explanation: "Cancel the common factors: \\\\((x+3)\\\\), \\\\((x-1)\\\\), and \\\\((x+2)\\\\).",
          workingOut: "\\\\(\\frac{\\cancel{(x+2)}\\cancel{(x+3)}}{\\cancel{(x+3)}\\cancel{(x-1)}} \\times \\frac{(x-4)\\cancel{(x-1)}}{(2x+1)\\cancel{(x+2)}}\\\\)"
        },
        {
          explanation: "Write the remaining terms in simplified form.",
          workingOut: "\\\\(\\frac{x-4}{2x+1}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q22c') {
      return [
        {
          explanation: "Factorise all components: \\\\(x^2+4x-5 = (x+5)(x-1)\\\\), \\\\(x^2+3x = x(x+3)\\\\), and \\\\(x^2+x-2 = (x+2)(x-1)\\\\).",
          workingOut: "\\\\(\\frac{(x+5)(x-1)}{x(x+3)} \\div \\frac{(x+2)(x-1)}{x+3}\\\\)"
        },
        {
          explanation: "Convert division to multiplication by multiplying by the reciprocal of the divisor.",
          workingOut: "\\\\(\\frac{(x+5)(x-1)}{x(x+3)} \\times \\frac{x+3}{(x+2)(x-1)}\\\\)"
        },
        {
          explanation: "Cancel the common factors \\\\((x-1)\\\\) and \\\\((x+3)\\\\).",
          workingOut: "\\\\(\\frac{(x+5)\\cancel{(x-1)}}{x\\cancel{(x+3)}} \\times \\frac{\\cancel{x+3}}{(x+2)\\cancel{(x-1)}} = \\frac{x+5}{x(x+2)}\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q22d') {
      return [
        {
          explanation: "Factorise each numerator and denominator.",
          workingOut: "\\\\(4x^2-4x = 4x(x-1)\\\\,;\\\\, 2x^2+5x+2 = (2x+1)(x+2)\\\\,;\\\\, 16-16x = -16(x-1)\\\\,;\\\\, 2x^2+9x+4 = (2x+1)(x+4)\\\\)"
        },
        {
          explanation: "Convert the division into multiplication by taking the reciprocal of the second fraction.",
          workingOut: "\\\\(\\frac{4x(x-1)}{(2x+1)(x+2)} \\times \\frac{(2x+1)(x+4)}{-16(x-1)}\\\\)"
        },
        {
          explanation: "Cancel the common terms \\\\((2x+1)\\\\), \\\\((x-1)\\\\), and reduce the coefficients \\\\(\\frac{4}{-16} = -\\frac{1}{4}\\\\).",
          workingOut: "\\\\(\\frac{\\cancel{4}x\\cancel{(x-1)}}{\\cancel{(2x+1)}(x+2)} \\times \\frac{\\cancel{(2x+1)}(x+4)}{-\\cancel{16}\\cancel{(x-1)}} = -\\frac{x(x+4)}{4(x+2)}\\\\)"
        }
      ];
    }
  }

  // 6. Solve (Equations & Inequalities)
  if (id.includes('-q5') || id.includes('-q9') || qtext.toLowerCase().includes('solve:')) {
    if (id === 'y10-3j-q5a') {
      return [
        {
          explanation: "Add 5 to both sides to isolate the variable term.",
          workingOut: "\\\\(3x = 13 + 5 \\Rightarrow 3x = 18\\\\)"
        },
        {
          explanation: "Divide both sides by 3 to find \\\\(x\\\\).",
          workingOut: "\\\\(x = \\frac{18}{3} = 6\\\\)"
        },
        {
          explanation: "Verify the solution in the original equation.",
          workingOut: "\\\\(3(6) - 5 = 18 - 5 = 13\\\\)"
        }
      ];
    }
    if (id === 'y10-3j-q5b') {
      return [
        {
          explanation: "Subtract 7 from both sides to isolate the term with \\\\(y\\\\).",
          workingOut: "\\\\(-2y = 15 - 7 \\Rightarrow -2y = 8\\\\)"
        },
        {
          explanation: "Divide both sides by -2. Remember that dividing by a negative number reverses signs.",
          workingOut: "\\\\(y = \\frac{8}{-2} = -4\\\\)"
        },
        {
          explanation: "Confirm the solution is correct.",
          workingOut: "\\\\(7 - 2(-4) = 7 + 8 = 15\\\\)"
        }
      ];
    }
  }

  // 7. Word Problems
  if (id.includes('-q6') || id.includes('-q7') || id.includes('-q8')) {
    return [
      {
        explanation: "Translate the word problem into mathematical terms. Identify the unknown quantities and define variables to represent them.",
        workingOut: "Set up the algebraic expressions based on the given conditions."
      },
      {
        explanation: "Construct an equation using the relationships described in the problem (such as distance, speed, time, or percentages).",
        workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
      },
      {
        explanation: "Solve the equation step-by-step to find the requested values (length, speed, or volume).",
        workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
      }
    ];
  }

  // 8. Subject of formula
  if (id.includes('-q11') || id.includes('-q12') || id.includes('-q13') || qtext.toLowerCase().includes('subject')) {
    return [
      {
        explanation: "To make the target variable the subject, first clear any fractions by multiplying both sides, or square both sides if the variable is under a square root.",
        workingOut: qtext.replace('Make x the subject of the formula: ', '').replace('Make g the subject of this formula: ', '')
      },
      {
        explanation: "Move all terms containing the target variable to one side of the equation and all other terms to the opposite side.",
        workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
      },
      {
        explanation: "Factor out the target variable if it appears in multiple terms, then divide by the remaining expression to isolate it completely.",
        workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
      }
    ];
  }

  // 9. Expand DOTS / Difference of squares
  if (id.includes('-q14')) {
    return [
      {
        explanation: "This expression follows the pattern \\\\((a+b)(a-b)\\\\), which represents the Difference of Two Squares (DOTS).",
        workingOut: "Formula: \\\\((a+b)(a-b) = a^2 - b^2\\\\)"
      },
      {
        explanation: "Identify \\\\(a\\\\) and \\\\(b\\\\) from the brackets. Square the first term and square the second term.",
        workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
      },
      {
        explanation: "Subtract the squared terms to obtain the final expanded expression.",
        workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
      }
    ];
  }

  // 10. Factorise (INCLUDING Detailed Cross-Method Math Steps)
  if (id.includes('-q15') || id.includes('-q16') || id.includes('-q17') || id.includes('-q18') || id.includes('-q19') || id.includes('-q20') || qtext.toLowerCase().includes('factorise:')) {
    // Common Factor only
    if (qtext.includes('4x^2 - 20x') || qtext.includes('x^2 - 12x')) {
      return [
        {
          explanation: "Look for the highest common factor (HCF) shared by all terms in the expression.",
          workingOut: qtext.replace('Factorise: ', '')
        },
        {
          explanation: "Divide each term by the common factor and write the remaining terms inside a set of brackets.",
          workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
        },
        {
          explanation: "Double-check by mentally expanding the brackets.",
          workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
        }
      ];
    }
    // DOTS Factorise
    if (qtext.includes('-') && (qtext.includes('25') || qtext.includes('49') || qtext.includes('y^2') || qtext.includes('b^2') || qtext.includes('16') || qtext.includes('64') || qtext.includes('fraction') || qtext.includes('/') || qtext.includes('9'))) {
      return [
        {
          explanation: "Identify if the expression can be written as a difference of two squares: \\\\(A^2 - B^2\\\\). If there is a common numeric factor, factorise it out first.",
          workingOut: qtext.replace('Factorise: ', '')
        },
        {
          explanation: "Determine what terms are being squared to form \\\\(A^2\\\\) and \\\\(B^2\\\\).",
          workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
        },
        {
          explanation: "Apply the DOTS identity: \\\\(A^2 - B^2 = (A+B)(A-B)\\\\) to write the final factorised form.",
          workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
        }
      ];
    }

    // Monic / Non-monic quadratics (e.g. 4x² + 14x - 18) - Using Cross Method Math Steps
    let expression = qtext.replace('Factorise: ', '');
    if (id === 'y10-3j-q20d') { // 4x^2 + 14x - 18
      return [
        {
          explanation: "First, pull out the common factor 2 from the expression \\\\(4x^2 + 14x - 18\\\\) to simplify the trinomial.",
          workingOut: "\\\\(4x^2 + 14x - 18 = 2(2x^2 + 7x - 9)\\\\)"
        },
        {
          explanation: "Use the Cross Method to factorise the quadratic trinomial \\\\(2x^2 + 7x - 9\\\\):\n- Find factors of the first term \\\\(2x^2 = (2x) \\cdot (x)\\\\).\n- Find factors of the last term \\\\(-9 = (9) \\cdot (-1)\\\\).\n- Cross-multiply: \\\\(2x \\cdot (-1) = -2x\\\\) and \\\\(x \\cdot 9 = 9x\\\\).\n- Add the results: \\\\(-2x + 9x = 7x\\\\), which matches the middle term.",
          workingOut: "\\\\(2x^2 + 7x - 9 = 2x^2 + 9x - 2x - 9 = x(2x+9) - 1(2x+9) = (2x+9)(x-1)\\\\)"
        },
        {
          explanation: "Bring back the common factor 2 to state the final completely factorised expression.",
          workingOut: "\\\\(2(2x+9)(x-1)\\\\)"
        }
      ];
    }

    // Generic Cross Method Explanations for all other quadratic trinomials
    return [
      {
        explanation: "Identify the coefficients of the quadratic trinomial \\\\(ax^2 + bx + c\\\\). If there is a common factor among \\\\(a\\\\), \\\\(b\\\\), and \\\\(c\\\\), factorise it out first.",
        workingOut: `\\\\(${expression}\\\\)`
      },
      {
        explanation: "Apply the Cross Method (or split-the-middle-term method). Find two numbers that multiply to \\\\(a \\cdot c\\\\) and add up to \\\\(b\\\\) to split the middle term.",
        workingOut: q.opts && q.opts[q.a] ? `\\\\(${expression} \\rightarrow \\text{Split middle term to match cross-multiplication}\\:\\:\\: ${q.opts[q.a]}\\\\\\)` : ""
      },
      {
        explanation: "Factorise by grouping pairs of terms to get the final binomial product.",
        workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : ""
      }
    ];
  }

  // Default backup
  return [
    { explanation: "Read the question carefully and determine the appropriate mathematical rules to apply.", workingOut: qtext },
    { explanation: "Perform the intermediate algebraic steps (expansion, factorization, or transposition) systematically.", workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : "" },
    { explanation: "Check your calculations and state the final result.", workingOut: q.opts && q.opts[q.a] ? q.opts[q.a] : "" }
  ];
};

// ── Read & patch the file ─────────────────────────────────────
let content = fs.readFileSync(FILE, 'utf8');

import(IMPORT_PATH).then((module) => {
  const questions = module.Y10_CH3J_QUESTIONS;
  let patchedCount = 0;

  for (const q of questions) {
    // 1. Force convert any non-multiple_choice questions back to multiple_choice
    // and replace type / options if they got corrupted
    if (q.type !== 'multiple_choice') {
      console.log(`Fixing corrupted type for: ${q.id}`);
      // Find and replace type in string
      const idIdx = content.indexOf(`"id": "${q.id}"`);
      const typeStart = content.indexOf('"type":', idIdx);
      const typeEnd = content.indexOf(',', typeStart);
      content = content.substring(0, typeStart) + `"type": "multiple_choice"` + content.substring(typeEnd);
    }

    const steps = generateStepByStep(q);
    const idStr = `"id": "${q.id}"`;
    const idIdx = content.indexOf(idStr);
    if (idIdx === -1) continue;

    const stepsStart = content.indexOf('"solutionSteps":', idIdx);
    if (stepsStart === -1) continue;

    const arrStart = content.indexOf('[', stepsStart);
    let depth = 0, arrEnd = -1;
    for (let i = arrStart; i < content.length; i++) {
      if (content[i] === '[') depth++;
      else if (content[i] === ']') {
        depth--;
        if (depth === 0) { arrEnd = i; break; }
      }
    }
    if (arrEnd === -1) continue;

    const stepsForJs = steps.map(step => {
      const exp = escapeMath(step.explanation);
      const wo = step.workingOut ? escapeMath(step.workingOut) : null;
      return `      {\n        "explanation": "${exp}",\n        "workingOut": ${wo ? '"' + wo + '"' : 'null'},\n        "graphData": null\n      }`;
    }).join(',\n');

    const replacement = `[\n${stepsForJs}\n    ]`;
    content = content.substring(0, arrStart) + replacement + content.substring(arrEnd + 1);
    patchedCount++;

    if (q.subQuestions) {
      for (const sq of q.subQuestions) {
        const sqSteps = generateStepByStep(sq);
        const sqIdStr = `"id": "${sq.id}"`;
        const sqIdIdx = content.indexOf(sqIdStr);
        if (sqIdIdx === -1) continue;

        const sqStepsStart = content.indexOf('"solutionSteps":', sqIdIdx);
        if (sqStepsStart === -1) continue;

        const sqArrStart = content.indexOf('[', sqStepsStart);
        let sqDepth = 0, sqArrEnd = -1;
        for (let i = sqArrStart; i < content.length; i++) {
          if (content[i] === '[') sqDepth++;
          else if (content[i] === ']') {
            sqDepth--;
            if (sqDepth === 0) { sqArrEnd = i; break; }
          }
        }
        if (sqArrEnd === -1) continue;

        const sqStepsForJs = sqSteps.map(step => {
          const exp = escapeMath(step.explanation);
          const wo = step.workingOut ? escapeMath(step.workingOut) : null;
          return `      {\n        "explanation": "${exp}",\n        "workingOut": ${wo ? '"' + wo + '"' : 'null'},\n        "graphData": null\n      }`;
        }).join(',\n');

        const sqReplacement = `[\n${sqStepsForJs}\n    ]`;
        content = content.substring(0, sqArrStart) + sqReplacement + content.substring(sqArrEnd + 1);
        patchedCount++;
      }
    }
  }

  fs.writeFileSync(FILE, content);
  console.log(`Successfully rewrote ${patchedCount} questions to English math steps and verified multiple_choice.`);
  process.exit(0);
}).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
