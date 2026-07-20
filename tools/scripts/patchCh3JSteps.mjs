#!/usr/bin/env node
/**
 * Patch all solutionSteps in seedYear10Ch3JQuestions.js
 * by reading the file, finding each question by id, and replacing solutionSteps.
 */
import fs from 'fs';

const FILE = './src/constants/seedYear10Ch3JQuestions.js';

// All hand-crafted step replacements keyed by question id
const FIXED_STEPS = {
  'y10-3j-q1a': [
    { explanation: "Identify the like terms. The \\\\(a^2\\\\) terms are \\\\(4a^2\\\\) and \\\\(2a^2\\\\); the \\\\(b\\\\) terms are \\\\(-5b\\\\) and \\\\(6b\\\\). Group them together.", workingOut: "\\\\((4a^2 + 2a^2) + (-5b + 6b)\\\\)", graphData: null },
    { explanation: "Add the coefficients: \\\\(4+2=6\\\\) for \\\\(a^2\\\\) terms, and \\\\(-5+6=+1\\\\) for \\\\(b\\\\) terms.", workingOut: "\\\\(6a^2 + b\\\\)", graphData: null },
    { explanation: "The fully simplified expression is \\\\(6a^2 + b\\\\). No more like terms remain.", workingOut: "\\\\(6a^2 + b\\\\)", graphData: null }
  ],
  'y10-3j-q1b': [
    { explanation: "First evaluate the multiplication terms: \\\\(4x \\times 2y = 8xy\\\\) and \\\\(2x \\times 4x = 8x^2\\\\). Rewrite.", workingOut: "\\\\(8xy - 3x^2 - 5xy + 8x^2\\\\)", graphData: null },
    { explanation: "Group like terms: \\\\(x^2\\\\) terms: \\\\(-3x^2+8x^2=5x^2\\\\); \\\\(xy\\\\) terms: \\\\(8xy-5xy=3xy\\\\).", workingOut: "\\\\(5x^2 + 3xy\\\\)", graphData: null },
    { explanation: "Final simplified expression: \\\\(5x^2 + 3xy\\\\).", workingOut: "\\\\(5x^2 + 3xy\\\\)", graphData: null }
  ],
  'y10-3j-q1c': [
    { explanation: "Simplify each fraction using index laws: \\\\(\\frac{6x^2y^3}{3xy}=2xy^2\\\\) and \\\\(\\frac{8x^3y^2}{2x^2y^2}=4x\\\\).", workingOut: "\\\\(2xy^2 + 4x^2 - 4x + 2xy^2\\\\)", graphData: null },
    { explanation: "Combine \\\\(xy^2\\\\) terms: \\\\(2xy^2+2xy^2=4xy^2\\\\).", workingOut: "\\\\(4xy^2 + 4x^2 - 4x\\\\)", graphData: null },
    { explanation: "Final simplified form: \\\\(4xy^2 + 4x^2 - 4x\\\\).", workingOut: "\\\\(4xy^2 + 4x^2 - 4x\\\\)", graphData: null }
  ],
  'y10-3j-q1d': [
    { explanation: "Simplify each fraction: \\\\(\\frac{8a^3b^3}{ab}=8a^2b^2\\\\), \\\\(\\frac{4a^3b^2}{b^2}=4a^3\\\\), \\\\(\\frac{10a^5b}{2a^2b}=5a^3\\\\), \\\\(\\frac{15a^4b^2}{3a^2}=5a^2b^2\\\\).", workingOut: "\\\\(8a^2b^2 + 4a^3 - 5a^3 + 5a^2b^2\\\\)", graphData: null },
    { explanation: "Collect like terms — \\\\(a^2b^2\\\\): \\\\(8+5=13\\\\); \\\\(a^3\\\\): \\\\(4-5=-1\\\\).", workingOut: "\\\\(13a^2b^2 - a^3\\\\)", graphData: null },
    { explanation: "Final: \\\\(13a^2b^2 - a^3\\\\).", workingOut: "\\\\(13a^2b^2 - a^3\\\\)", graphData: null }
  ],
  'y10-3j-q2a': [
    { explanation: "Use the distributive law on each bracket: \\\\(4(x+3) = 4x+12\\\\) and \\\\(3(x-2) = 3x-6\\\\).", workingOut: "\\\\(4x + 12 + 3x - 6\\\\)", graphData: null },
    { explanation: "Collect \\\\(x\\\\) terms: \\\\(4x+3x=7x\\\\). Collect constants: \\\\(12-6=6\\\\).", workingOut: "\\\\(7x + 6\\\\)", graphData: null },
    { explanation: "Final: \\\\(7x + 6\\\\).", workingOut: "\\\\(7x + 6\\\\)", graphData: null }
  ],
  'y10-3j-q2b': [
    { explanation: "Distribute: \\\\(6(y+2)=6y+12\\\\) and \\\\(-4(y-3)=-4y+12\\\\) (note: negative times negative is positive).", workingOut: "\\\\(6y + 12 - 4y + 12\\\\)", graphData: null },
    { explanation: "Collect \\\\(y\\\\) terms: \\\\(6y-4y=2y\\\\). Constants: \\\\(12+12=24\\\\).", workingOut: "\\\\(2y + 24\\\\)", graphData: null },
    { explanation: "Final: \\\\(2y + 24\\\\).", workingOut: "\\\\(2y + 24\\\\)", graphData: null }
  ],
  'y10-3j-q2c': [
    { explanation: "Distribute: \\\\(3x(x+4)=3x^2+12x\\\\) and \\\\(2x(x-5)=2x^2-10x\\\\).", workingOut: "\\\\(3x^2 + 12x + 2x^2 - 10x\\\\)", graphData: null },
    { explanation: "Collect: \\\\(x^2\\\\): \\\\(3+2=5\\\\). \\\\(x\\\\): \\\\(12-10=2\\\\).", workingOut: "\\\\(5x^2 + 2x\\\\)", graphData: null },
    { explanation: "Final: \\\\(5x^2 + 2x\\\\).", workingOut: "\\\\(5x^2 + 2x\\\\)", graphData: null }
  ],
  'y10-3j-q2d': [
    { explanation: "Distribute: \\\\(4y(y-2)=4y^2-8y\\\\) and \\\\(-3y(2y-4)=-6y^2+12y\\\\).", workingOut: "\\\\(4y^2 - 8y - 6y^2 + 12y\\\\)", graphData: null },
    { explanation: "Collect: \\\\(y^2\\\\): \\\\(4-6=-2\\\\). \\\\(y\\\\): \\\\(-8+12=4\\\\).", workingOut: "\\\\(-2y^2 + 4y\\\\)", graphData: null },
    { explanation: "Final: \\\\(-2y^2 + 4y\\\\).", workingOut: "\\\\(-2y^2 + 4y\\\\)", graphData: null }
  ],
  'y10-3j-q2e': [
    { explanation: "Use FOIL on \\\\((3x+2)(x+4)\\\\): F=\\\\(3x^2\\\\), O=\\\\(12x\\\\), I=\\\\(2x\\\\), L=\\\\(8\\\\).", workingOut: "\\\\(3x^2 + 12x + 2x + 8\\\\)", graphData: null },
    { explanation: "Collect middle terms: \\\\(12x+2x=14x\\\\).", workingOut: "\\\\(3x^2 + 14x + 8\\\\)", graphData: null },
    { explanation: "Final: \\\\(3x^2 + 14x + 8\\\\).", workingOut: "\\\\(3x^2 + 14x + 8\\\\)", graphData: null }
  ],
  'y10-3j-q2f': [
    { explanation: "FOIL \\\\((3a+5)(2a-3)\\\\): F=\\\\(6a^2\\\\), O=\\\\(-9a\\\\), I=\\\\(10a\\\\), L=\\\\(-15\\\\).", workingOut: "\\\\(6a^2 - 9a + 10a - 15\\\\)", graphData: null },
    { explanation: "Collect middle terms: \\\\(-9a+10a=a\\\\).", workingOut: "\\\\(6a^2 + a - 15\\\\)", graphData: null },
    { explanation: "Final: \\\\(6a^2 + a - 15\\\\).", workingOut: "\\\\(6a^2 + a - 15\\\\)", graphData: null }
  ],
  'y10-3j-q2g': [
    { explanation: "Expand each pair: \\\\((3y+2)(y+4)=3y^2+14y+8\\\\) and \\\\((y-2)(y+5)=y^2+3y-10\\\\).", workingOut: "\\\\((3y^2+14y+8)-(y^2+3y-10)\\\\)", graphData: null },
    { explanation: "Distribute the minus and collect: \\\\(y^2\\\\): \\\\(3-1=2\\\\), \\\\(y\\\\): \\\\(14-3=11\\\\), const: \\\\(8+10=18\\\\).", workingOut: "\\\\(2y^2 + 11y + 18\\\\)", graphData: null },
    { explanation: "Final: \\\\(2y^2 + 11y + 18\\\\).", workingOut: "\\\\(2y^2 + 11y + 18\\\\)", graphData: null }
  ],
  'y10-3j-q2h': [
    { explanation: "Expand: \\\\((c+4)(2c+3)=2c^2+11c+12\\\\) and \\\\((3c-2)(c-4)=3c^2-14c+8\\\\).", workingOut: "\\\\((2c^2+11c+12)-(3c^2-14c+8)\\\\)", graphData: null },
    { explanation: "Distribute minus and collect: \\\\(c^2\\\\): \\\\(2-3=-1\\\\), \\\\(c\\\\): \\\\(11+14=25\\\\), const: \\\\(12-8=4\\\\).", workingOut: "\\\\(-c^2 + 25c + 4\\\\)", graphData: null },
    { explanation: "Final: \\\\(-c^2 + 25c + 4\\\\).", workingOut: "\\\\(-c^2 + 25c + 4\\\\)", graphData: null }
  ],
  'y10-3j-q3a': [
    { explanation: "First FOIL the brackets: \\\\((x+2)(2x+3)=2x^2+3x+4x+6=2x^2+7x+6\\\\).", workingOut: "\\\\(4(2x^2 + 7x + 6)\\\\)", graphData: null },
    { explanation: "Multiply through by 4: \\\\(8x^2+28x+24\\\\).", workingOut: "\\\\(8x^2 + 28x + 24\\\\)", graphData: null },
    { explanation: "Final: \\\\(8x^2 + 28x + 24\\\\).", workingOut: "\\\\(8x^2 + 28x + 24\\\\)", graphData: null }
  ],
  'y10-3j-q3b': [
    { explanation: "FOIL \\\\((2a+3)(4a-1)=8a^2-2a+12a-3=8a^2+10a-3\\\\).", workingOut: "\\\\(3(8a^2 + 10a - 3)\\\\)", graphData: null },
    { explanation: "Multiply by 3: \\\\(24a^2+30a-9\\\\).", workingOut: "\\\\(24a^2 + 30a - 9\\\\)", graphData: null },
    { explanation: "Final: \\\\(24a^2 + 30a - 9\\\\).", workingOut: "\\\\(24a^2 + 30a - 9\\\\)", graphData: null }
  ],
  'y10-3j-q3c': [
    { explanation: "\\\\(3(2y+3)(y+4)=3(2y^2+11y+12)=6y^2+33y+36\\\\). \\\\(2(y-3)(2y+5)=2(2y^2-y-15)=4y^2-2y-30\\\\).", workingOut: "\\\\((6y^2+33y+36)+(4y^2-2y-30)\\\\)", graphData: null },
    { explanation: "Collect: \\\\(y^2\\\\): \\\\(6+4=10\\\\), \\\\(y\\\\): \\\\(33-2=31\\\\), const: \\\\(36-30=6\\\\).", workingOut: "\\\\(10y^2 + 31y + 6\\\\)", graphData: null },
    { explanation: "Final: \\\\(10y^2 + 31y + 6\\\\).", workingOut: "\\\\(10y^2 + 31y + 6\\\\)", graphData: null }
  ],
  'y10-3j-q3d': [
    { explanation: "\\\\(4(b+3)(2b+1)=4(2b^2+7b+3)=8b^2+28b+12\\\\). \\\\(2(b-2)(b-4)=2(b^2-6b+8)=2b^2-12b+16\\\\).", workingOut: "\\\\((8b^2+28b+12)-(2b^2-12b+16)\\\\)", graphData: null },
    { explanation: "Distribute minus and collect: \\\\(b^2\\\\): \\\\(8-2=6\\\\), \\\\(b\\\\): \\\\(28+12=40\\\\), const: \\\\(12-16=-4\\\\).", workingOut: "\\\\(6b^2 + 40b - 4\\\\)", graphData: null },
    { explanation: "Final: \\\\(6b^2 + 40b - 4\\\\).", workingOut: "\\\\(6b^2 + 40b - 4\\\\)", graphData: null }
  ],
  'y10-3j-q4a': [
    { explanation: "Distribute: \\\\(\\frac{2}{3}(x+3)=\\frac{2x}{3}+2\\\\) and \\\\(\\frac{1}{4}(x-2)=\\frac{x}{4}-\\frac{1}{2}\\\\).", workingOut: "\\\\(\\frac{2x}{3}+2+\\frac{x}{4}-\\frac{1}{2}\\\\)", graphData: null },
    { explanation: "Common denominator 12: \\\\(\\frac{8x}{12}+\\frac{3x}{12}+\\frac{24}{12}-\\frac{6}{12}=\\frac{11x+18}{12}\\\\).", workingOut: "\\\\(\\frac{11x+18}{12}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{11x+18}{12}\\\\).", workingOut: "\\\\(\\frac{11x+18}{12}\\\\)", graphData: null }
  ],
  'y10-3j-q4b': [
    { explanation: "Distribute: \\\\(4(\\frac{a}{2}+\\frac{1}{3})=2a+\\frac{4}{3}\\\\) and \\\\(-2(\\frac{a}{3}-\\frac{1}{4})=-\\frac{2a}{3}+\\frac{1}{2}\\\\).", workingOut: "\\\\(2a+\\frac{4}{3}-\\frac{2a}{3}+\\frac{1}{2}\\\\)", graphData: null },
    { explanation: "\\\\(a\\\\) terms (LCD 3): \\\\(\\frac{6a-2a}{3}=\\frac{4a}{3}\\\\). Constants (LCD 6): \\\\(\\frac{8+3}{6}=\\frac{11}{6}\\\\).", workingOut: "\\\\(\\frac{4a}{3}+\\frac{11}{6}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{4a}{3}+\\frac{11}{6}\\\\).", workingOut: "\\\\(\\frac{4a}{3}+\\frac{11}{6}\\\\)", graphData: null }
  ],
  'y10-3j-q4c': [
    { explanation: "Distribute: \\\\(\\frac{x}{2}(x+4)=\\frac{x^2}{2}+2x\\\\) and \\\\(\\frac{x}{3}(x-2)=\\frac{x^2}{3}-\\frac{2x}{3}\\\\).", workingOut: "\\\\(\\frac{x^2}{2}+2x+\\frac{x^2}{3}-\\frac{2x}{3}\\\\)", graphData: null },
    { explanation: "\\\\(x^2\\\\) terms (LCD 6): \\\\(\\frac{3x^2+2x^2}{6}=\\frac{5x^2}{6}\\\\). \\\\(x\\\\) terms: \\\\(\\frac{6x-2x}{3}=\\frac{4x}{3}=\\frac{8x}{6}\\\\).", workingOut: "\\\\(\\frac{5x^2+8x}{6}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{5x^2+8x}{6}\\\\).", workingOut: "\\\\(\\frac{5x^2+8x}{6}\\\\)", graphData: null }
  ],
  'y10-3j-q4d': [
    { explanation: "Distribute: \\\\(\\frac{3y}{4}(\\frac{y}{2}-2)=\\frac{3y^2}{8}-\\frac{3y}{2}\\\\) and \\\\(\\frac{y}{3}(3y-4)=y^2-\\frac{4y}{3}\\\\).", workingOut: "\\\\(\\frac{3y^2}{8}-\\frac{3y}{2}-y^2+\\frac{4y}{3}\\\\)", graphData: null },
    { explanation: "\\\\(y^2\\\\) (LCD 8): \\\\(\\frac{3-8}{8}y^2=-\\frac{5y^2}{8}\\\\). \\\\(y\\\\) (LCD 6): \\\\(\\frac{-9y+8y}{6}=-\\frac{y}{6}\\\\).", workingOut: "\\\\(-\\frac{5y^2}{8}-\\frac{y}{6}\\\\)", graphData: null },
    { explanation: "Final: \\\\(-\\frac{5y^2}{8}-\\frac{y}{6}\\\\).", workingOut: "\\\\(-\\frac{5y^2}{8}-\\frac{y}{6}\\\\)", graphData: null }
  ],
  'y10-3j-q4e': [
    { explanation: "FOIL \\\\((\\frac{x}{2}+2)(x+\\frac{1}{3})\\\\): F=\\\\(\\frac{x^2}{2}\\\\), O=\\\\(\\frac{x}{6}\\\\), I=\\\\(2x\\\\), L=\\\\(\\frac{2}{3}\\\\).", workingOut: "\\\\(\\frac{x^2}{2}+\\frac{x}{6}+2x+\\frac{2}{3}\\\\)", graphData: null },
    { explanation: "Combine \\\\(x\\\\) terms (LCD 6): \\\\(\\frac{x+12x}{6}=\\frac{13x}{6}\\\\).", workingOut: "\\\\(\\frac{x^2}{2}+\\frac{13x}{6}+\\frac{2}{3}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{x^2}{2}+\\frac{13x}{6}+\\frac{2}{3}\\\\).", workingOut: "\\\\(\\frac{x^2}{2}+\\frac{13x}{6}+\\frac{2}{3}\\\\)", graphData: null }
  ],
  'y10-3j-q4f': [
    { explanation: "Expand first product: \\\\((\\frac{y}{2}+4)(\\frac{2y}{3}+3)=\\frac{y^2}{3}+\\frac{3y}{2}+\\frac{8y}{3}+12\\\\). Simplify: \\\\(\\frac{y^2}{3}+\\frac{25y}{6}+12\\\\). Expand second: \\\\((y-\\frac{1}{2})(y+\\frac{1}{3})=y^2-\\frac{y}{6}-\\frac{1}{6}\\\\).", workingOut: "\\\\(\\left(\\frac{y^2}{3}+\\frac{25y}{6}+12\\right)-\\left(y^2-\\frac{y}{6}-\\frac{1}{6}\\right)\\\\)", graphData: null },
    { explanation: "Distribute minus and collect: \\\\(y^2\\\\): \\\\(\\frac{1}{3}-1=-\\frac{2}{3}\\\\), \\\\(y\\\\): \\\\(\\frac{25+1}{6}=\\frac{13}{3}\\\\), const: \\\\(12+\\frac{1}{6}=\\frac{73}{6}\\\\).", workingOut: "\\\\(-\\frac{2}{3}y^2+\\frac{13}{3}y+\\frac{73}{6}\\\\)", graphData: null },
    { explanation: "Final: \\\\(-\\frac{2}{3}y^2+\\frac{13}{3}y+\\frac{73}{6}\\\\).", workingOut: "\\\\(-\\frac{2}{3}y^2+\\frac{13}{3}y+\\frac{73}{6}\\\\)", graphData: null }
  ],
  'y10-3j-q5a': [
    { explanation: "Add 5 to both sides to remove the constant from the left: \\\\(3x = 13+5\\\\).", workingOut: "\\\\(3x = 18\\\\)", graphData: null },
    { explanation: "Divide both sides by 3.", workingOut: "\\\\(x = \\frac{18}{3} = 6\\\\)", graphData: null },
    { explanation: "Check: \\\\(3(6)-5=13\\\\) ✓", workingOut: "\\\\(x = 6\\\\)", graphData: null }
  ],
  'y10-3j-q5b': [
    { explanation: "Subtract 7 from both sides: \\\\(-2y=15-7=8\\\\).", workingOut: "\\\\(-2y = 8\\\\)", graphData: null },
    { explanation: "Divide by \\\\(-2\\\\).", workingOut: "\\\\(y = \\frac{8}{-2} = -4\\\\)", graphData: null },
    { explanation: "Check: \\\\(7-2(-4)=7+8=15\\\\) ✓", workingOut: "\\\\(y = -4\\\\)", graphData: null }
  ],
  'y10-3j-q5c': [
    { explanation: "Subtract \\\\(2x\\\\) from both sides: \\\\(4x-2x+5=-7\\\\), so \\\\(2x+5=-7\\\\). Then subtract 5.", workingOut: "\\\\(2x = -12\\\\)", graphData: null },
    { explanation: "Divide by 2.", workingOut: "\\\\(x = -6\\\\)", graphData: null },
    { explanation: "Check: \\\\(4(-6)+5=-19=2(-6)-7\\\\) ✓", workingOut: "\\\\(x = -6\\\\)", graphData: null }
  ],
  'y10-3j-q5d': [
    { explanation: "Expand: \\\\(3(2x-1)=6x-3\\\\). Equation: \\\\(6x-3=2x+13\\\\). Subtract \\\\(2x\\\\): \\\\(4x-3=13\\\\).", workingOut: "\\\\(4x = 16\\\\)", graphData: null },
    { explanation: "Divide by 4.", workingOut: "\\\\(x = 4\\\\)", graphData: null },
    { explanation: "Check: \\\\(3(7)=21=2(4)+13\\\\) ✓", workingOut: "\\\\(x = 4\\\\)", graphData: null }
  ],
  'y10-3j-q5e': [
    { explanation: "Multiply every term by 6 (LCD of 2 and 3): \\\\(3x+2x=30\\\\).", workingOut: "\\\\(5x = 30\\\\)", graphData: null },
    { explanation: "Divide by 5.", workingOut: "\\\\(x = 6\\\\)", graphData: null },
    { explanation: "Check: \\\\(\\frac{6}{2}+\\frac{6}{3}=3+2=5\\\\) ✓", workingOut: "\\\\(x = 6\\\\)", graphData: null }
  ],
  'y10-3j-q5f': [
    { explanation: "Multiply both sides by 4 (LCD): \\\\(2(x+3)=3(x-1)\\\\). Expand: \\\\(2x+6=3x-3\\\\).", workingOut: "\\\\(6+3=3x-2x\\\\)", graphData: null },
    { explanation: "Simplify: \\\\(x=9\\\\).", workingOut: "\\\\(x = 9\\\\)", graphData: null },
    { explanation: "Check: \\\\(\\frac{12}{2}=6=\\frac{3(8)}{4}\\\\) ✓", workingOut: "\\\\(x = 9\\\\)", graphData: null }
  ],
  'y10-3j-q5g': [
    { explanation: "Expand left: \\\\(2(x-3)+3(x+2)=2x-6+3x+6=5x\\\\).", workingOut: "\\\\(5x = 4x\\\\)", graphData: null },
    { explanation: "Subtract \\\\(4x\\\\): \\\\(x=0\\\\).", workingOut: "\\\\(x = 0\\\\)", graphData: null },
    { explanation: "Check: \\\\(2(-3)+3(2)=0=4(0)\\\\) ✓", workingOut: "\\\\(x = 0\\\\)", graphData: null }
  ],
  'y10-3j-q5h': [
    { explanation: "Expand: \\\\((x+2)(x-3)=x^2-x-6\\\\) and \\\\((x-1)(x+4)=x^2+3x-4\\\\). The \\\\(x^2\\\\) cancels.", workingOut: "\\\\(-x-6=3x-4\\\\)", graphData: null },
    { explanation: "Rearrange: \\\\(-6+4=3x+x\\\\) so \\\\(-2=4x\\\\).", workingOut: "\\\\(x = -\\frac{1}{2}\\\\)", graphData: null },
    { explanation: "Check: both sides equal when \\\\(x=-\\frac{1}{2}\\\\) ✓", workingOut: "\\\\(x = -\\frac{1}{2}\\\\)", graphData: null }
  ],
  'y10-3j-q6a': [
    { explanation: "Perimeter = \\\\(2(l+w)=80\\\\) so \\\\(l+w=40\\\\). With width \\\\(=x\\\\), length \\\\(=40-x\\\\).", workingOut: "\\\\(\\text{length} = (40-x) \\text{ m}\\\\)", graphData: null },
    { explanation: "Width is simply \\\\(x\\\\) metres.", workingOut: "\\\\(\\text{width} = x \\text{ m}\\\\)", graphData: null },
    { explanation: "The width in terms of \\\\(x\\\\) is \\\\(x\\\\) m.", workingOut: "\\\\(x \\text{ m}\\\\)", graphData: null }
  ],
  'y10-3j-q6b': [
    { explanation: "Area: \\\\(x(40-x)=375\\\\). Expand and rearrange: \\\\(x^2-40x+375=0\\\\).", workingOut: "\\\\(x^2 - 40x + 375 = 0\\\\)", graphData: null },
    { explanation: "Factorise: \\\\((x-15)(x-25)=0\\\\), so \\\\(x=15\\\\) or \\\\(x=25\\\\).", workingOut: "\\\\(x = 15 \\text{ or } x = 25\\\\)", graphData: null },
    { explanation: "By convention length > width, so length \\\\(= 25\\\\) m (with width = 15 m).", workingOut: "\\\\(\\text{length} = 25 \\text{ m}\\\\)", graphData: null }
  ],
  'y10-3j-q7': [
    { explanation: "Let \\\\(v\\\\) = walking speed (km/min). Running speed = \\\\(3v\\\\). Total distance: \\\\(12v + 6(3v)=4\\\\).", workingOut: "\\\\(30v = 4 \\Rightarrow v = \\frac{2}{15} \\text{ km/min}\\\\)", graphData: null },
    { explanation: "Running speed \\\\(= 3v = \\frac{6}{15} = 0.4\\\\) km/min.", workingOut: "\\\\(0.4 \\times 60 = 24 \\text{ km/h}\\\\)", graphData: null },
    { explanation: "The running speed is 24 km/h.", workingOut: "\\\\(24 \\text{ km/h}\\\\)", graphData: null }
  ],
  'y10-3j-q8': [
    { explanation: "Let \\\\(x\\\\) = litres drained. After draining, antifreeze = \\\\(0.5(10-x)\\\\). Add \\\\(x\\\\) pure antifreeze: \\\\(0.5(10-x)+x=8\\\\).", workingOut: "\\\\(5-0.5x+x=8 \\Rightarrow 0.5x=3\\\\)", graphData: null },
    { explanation: "Solve: \\\\(x=6\\\\).", workingOut: "\\\\(x = 6 \\text{ litres}\\\\)", graphData: null },
    { explanation: "Drain 6 litres and replace with pure antifreeze.", workingOut: "\\\\(6 \\text{ litres}\\\\)", graphData: null }
  ],
  'y10-3j-q10': [
    { explanation: "Substitute into \\\\(P=I^2R\\\\): \\\\(I=5.0\\times10^3\\\\), \\\\(R=3.2\\times10^{-1}\\\\).", workingOut: "\\\\(P=(5.0\\times10^3)^2\\times(3.2\\times10^{-1})\\\\)", graphData: null },
    { explanation: "Square current: \\\\(25\\times10^6\\\\). Multiply: \\\\(25\\times3.2\\times10^{5}=80\\times10^5\\\\).", workingOut: "\\\\(80\\times10^5 = 8.0\\times10^6\\\\)", graphData: null },
    { explanation: "Power = \\\\(8.0\\times10^6\\\\) W.", workingOut: "\\\\(P=8.0\\times10^6 \\text{ W}\\\\)", graphData: null }
  ],
  'y10-3j-q11a': [
    { explanation: "Substitute \\\\(u=15.5,t=2.0,a=9.8\\\\) into \\\\(s=ut+\\frac{1}{2}at^2\\\\).", workingOut: "\\\\(s=15.5(2)+\\frac{1}{2}(9.8)(4)\\\\)", graphData: null },
    { explanation: "Calculate: \\\\(31+19.6=50.6\\\\).", workingOut: "\\\\(s=50.6\\\\)", graphData: null },
    { explanation: "So \\\\(s=50.6\\\\) m.", workingOut: "\\\\(s=50.6 \\text{ m}\\\\)", graphData: null }
  ],
  'y10-3j-q11b': [
    { explanation: "From \\\\(s=ut+\\frac{1}{2}at^2\\\\), subtract \\\\(ut\\\\): \\\\(s-ut=\\frac{1}{2}at^2\\\\).", workingOut: "\\\\(s-ut = \\frac{1}{2}at^2\\\\)", graphData: null },
    { explanation: "Multiply by 2 and divide by \\\\(t^2\\\\).", workingOut: "\\\\(a=\\frac{2(s-ut)}{t^2}\\\\)", graphData: null },
    { explanation: "\\\\(a\\\\) is now the subject.", workingOut: "\\\\(a=\\frac{2(s-ut)}{t^2}\\\\)", graphData: null }
  ],
  'y10-3j-q12b': [
    { explanation: "Substitute \\\\(T=4, g=9.8\\\\) into \\\\(T=2\\pi\\sqrt{\\frac{p}{g}}\\\\). Divide by \\\\(2\\pi\\\\): \\\\(\\frac{2}{\\pi}=\\sqrt{\\frac{p}{9.8}}\\\\).", workingOut: "\\\\(\\frac{4}{\\pi^2}=\\frac{p}{9.8}\\\\)", graphData: null },
    { explanation: "Multiply by 9.8: \\\\(p=\\frac{4\\times9.8}{\\pi^2}\\approx3.97\\\\) m.", workingOut: "\\\\(p\\approx3.97 \\text{ m}\\\\)", graphData: null },
    { explanation: "Length of pendulum \\\\(\\approx 3.97\\\\) m.", workingOut: "\\\\(p\\approx3.97 \\text{ m}\\\\)", graphData: null }
  ],
  'y10-3j-q13a': [
    { explanation: "Subtract \\\\(q\\\\) from both sides of \\\\(px+q=r\\\\).", workingOut: "\\\\(px = r-q\\\\)", graphData: null },
    { explanation: "Divide both sides by \\\\(p\\\\).", workingOut: "\\\\(x=\\frac{r-q}{p}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is the subject.", workingOut: "\\\\(x=\\frac{r-q}{p}\\\\)", graphData: null }
  ],
  'y10-3j-q13b': [
    { explanation: "Divide both sides of \\\\(p(x+q)=r\\\\) by \\\\(p\\\\).", workingOut: "\\\\(x+q=\\frac{r}{p}\\\\)", graphData: null },
    { explanation: "Subtract \\\\(q\\\\).", workingOut: "\\\\(x=\\frac{r}{p}-q\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is the subject.", workingOut: "\\\\(x=\\frac{r}{p}-q\\\\)", graphData: null }
  ],
  'y10-3j-q13c': [
    { explanation: "Add \\\\(q\\\\) to both sides of \\\\(\\frac{x}{p}-q=r\\\\).", workingOut: "\\\\(\\frac{x}{p}=r+q\\\\)", graphData: null },
    { explanation: "Multiply both sides by \\\\(p\\\\).", workingOut: "\\\\(x=p(r+q)\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is the subject.", workingOut: "\\\\(x=p(r+q)\\\\)", graphData: null }
  ],
  'y10-3j-q13d': [
    { explanation: "From \\\\(\\frac{p}{x}=q\\\\), multiply both sides by \\\\(x\\\\): \\\\(p=qx\\\\).", workingOut: "\\\\(p=qx\\\\)", graphData: null },
    { explanation: "Divide by \\\\(q\\\\).", workingOut: "\\\\(x=\\frac{p}{q}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is the subject.", workingOut: "\\\\(x=\\frac{p}{q}\\\\)", graphData: null }
  ],
  'y10-3j-q13e': [
    { explanation: "Subtract \\\\(r\\\\) from both sides of \\\\(p=\\frac{q}{x}+r\\\\): \\\\(p-r=\\frac{q}{x}\\\\).", workingOut: "\\\\(p-r=\\frac{q}{x}\\\\)", graphData: null },
    { explanation: "Multiply by \\\\(x\\\\) then divide by \\\\((p-r)\\\\).", workingOut: "\\\\(x=\\frac{q}{p-r}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is the subject.", workingOut: "\\\\(x=\\frac{q}{p-r}\\\\)", graphData: null }
  ],
  'y10-3j-q13f': [
    { explanation: "Subtract \\\\(\\frac{1}{m}\\\\) from both sides: \\\\(\\frac{1}{x}=\\frac{1}{n}-\\frac{1}{m}\\\\).", workingOut: "\\\\(\\frac{1}{x}=\\frac{m-n}{mn}\\\\)", graphData: null },
    { explanation: "Take the reciprocal of both sides.", workingOut: "\\\\(x=\\frac{mn}{m-n}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is the subject.", workingOut: "\\\\(x=\\frac{mn}{m-n}\\\\)", graphData: null }
  ],
  'y10-3j-q13g': [
    { explanation: "Multiply both sides by \\\\((q-x)\\\\): \\\\(p(q-x)=q+x\\\\). Expand: \\\\(pq-px=q+x\\\\).", workingOut: "\\\\(pq-q=x+px=x(1+p)\\\\)", graphData: null },
    { explanation: "Divide by \\\\((1+p)\\\\).", workingOut: "\\\\(x=\\frac{q(p-1)}{p+1}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is the subject.", workingOut: "\\\\(x=\\frac{q(p-1)}{p+1}\\\\)", graphData: null }
  ],
  'y10-3j-q13h': [
    { explanation: "Square both sides of \\\\(q=\\sqrt{\\frac{p+x}{p-x}}\\\\): \\\\(q^2=\\frac{p+x}{p-x}\\\\). Cross-multiply.", workingOut: "\\\\(q^2(p-x)=p+x\\\\)", graphData: null },
    { explanation: "Expand and collect \\\\(x\\\\): \\\\(pq^2-p=x(1+q^2)\\\\).", workingOut: "\\\\(x=\\frac{p(q^2-1)}{q^2+1}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is the subject.", workingOut: "\\\\(x=\\frac{p(q^2-1)}{q^2+1}\\\\)", graphData: null }
  ],
  'y10-3j-q13i': [
    { explanation: "Divide by \\\\(q\\\\) and square both sides: \\\\(\\frac{p^2}{q^2}=\\frac{x+r}{x-r}\\\\). Cross-multiply: \\\\(p^2(x-r)=q^2(x+r)\\\\).", workingOut: "\\\\(p^2x-p^2r=q^2x+q^2r\\\\)", graphData: null },
    { explanation: "Collect: \\\\(x(p^2-q^2)=r(p^2+q^2)\\\\).", workingOut: "\\\\(x=\\frac{r(p^2+q^2)}{p^2-q^2}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is the subject.", workingOut: "\\\\(x=\\frac{r(p^2+q^2)}{p^2-q^2}\\\\)", graphData: null }
  ],
  'y10-3j-q13j': [
    { explanation: "From \\\\(T=2\\pi\\sqrt{\\frac{L}{g}}\\\\), divide by \\\\(2\\pi\\\\) and square: \\\\(\\frac{T^2}{4\\pi^2}=\\frac{L}{g}\\\\).", workingOut: "\\\\(\\frac{T^2}{4\\pi^2}=\\frac{L}{g}\\\\)", graphData: null },
    { explanation: "Multiply both sides by \\\\(g\\\\).", workingOut: "\\\\(L=\\frac{gT^2}{4\\pi^2}\\\\)", graphData: null },
    { explanation: "\\\\(L\\\\) is the subject.", workingOut: "\\\\(L=\\frac{gT^2}{4\\pi^2}\\\\)", graphData: null }
  ],
  'y10-3j-q14a': [
    { explanation: "Recognise the difference of two squares pattern: \\\\((a+b)(a-b)=a^2-b^2\\\\). Here \\\\(a=x, b=4\\\\).", workingOut: "\\\\(x^2 - 4^2\\\\)", graphData: null },
    { explanation: "Calculate \\\\(4^2=16\\\\).", workingOut: "\\\\(x^2 - 16\\\\)", graphData: null },
    { explanation: "Final: \\\\(x^2-16\\\\).", workingOut: "\\\\(x^2 - 16\\\\)", graphData: null }
  ],
  'y10-3j-q14b': [
    { explanation: "Apply DOTS with \\\\(a=x, b=3\\\\): \\\\((x+3)(x-3)=x^2-3^2\\\\).", workingOut: "\\\\(x^2 - 9\\\\)", graphData: null },
    { explanation: "Calculate \\\\(3^2=9\\\\).", workingOut: "\\\\(x^2 - 9\\\\)", graphData: null },
    { explanation: "Final: \\\\(x^2-9\\\\).", workingOut: "\\\\(x^2 - 9\\\\)", graphData: null }
  ],
  'y10-3j-q14c': [
    { explanation: "Apply DOTS with \\\\(a=2a, b=3\\\\): \\\\((2a)^2-3^2\\\\).", workingOut: "\\\\((2a)^2 - 3^2\\\\)", graphData: null },
    { explanation: "Calculate: \\\\((2a)^2=4a^2, 3^2=9\\\\).", workingOut: "\\\\(4a^2 - 9\\\\)", graphData: null },
    { explanation: "Final: \\\\(4a^2-9\\\\).", workingOut: "\\\\(4a^2 - 9\\\\)", graphData: null }
  ],
  'y10-3j-q14d': [
    { explanation: "Apply DOTS with \\\\(a=4x, b=3y\\\\): \\\\((4x)^2-(3y)^2\\\\).", workingOut: "\\\\((4x)^2-(3y)^2\\\\)", graphData: null },
    { explanation: "Calculate: \\\\(16x^2-9y^2\\\\).", workingOut: "\\\\(16x^2 - 9y^2\\\\)", graphData: null },
    { explanation: "Final: \\\\(16x^2-9y^2\\\\).", workingOut: "\\\\(16x^2 - 9y^2\\\\)", graphData: null }
  ],
  'y10-3j-q14e': [
    { explanation: "Apply DOTS: \\\\((\\frac{a}{3})^2-2^2\\\\).", workingOut: "\\\\(\\left(\\frac{a}{3}\\right)^2 - 4\\\\)", graphData: null },
    { explanation: "Calculate: \\\\(\\frac{a^2}{9}-4\\\\).", workingOut: "\\\\(\\frac{a^2}{9} - 4\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{a^2}{9}-4\\\\).", workingOut: "\\\\(\\frac{a^2}{9} - 4\\\\)", graphData: null }
  ],
  'y10-3j-q14f': [
    { explanation: "Apply DOTS: \\\\((\\frac{x}{2})^2-(\\frac{y}{3})^2\\\\).", workingOut: "\\\\(\\left(\\frac{x}{2}\\right)^2-\\left(\\frac{y}{3}\\right)^2\\\\)", graphData: null },
    { explanation: "Calculate: \\\\(\\frac{x^2}{4}-\\frac{y^2}{9}\\\\).", workingOut: "\\\\(\\frac{x^2}{4}-\\frac{y^2}{9}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{x^2}{4}-\\frac{y^2}{9}\\\\).", workingOut: "\\\\(\\frac{x^2}{4}-\\frac{y^2}{9}\\\\)", graphData: null }
  ],
  'y10-3j-q15a': [
    { explanation: "Write \\\\(x^2-25=x^2-5^2\\\\) — a difference of two squares.", workingOut: "\\\\(x^2 - 5^2\\\\)", graphData: null },
    { explanation: "Apply \\\\(a^2-b^2=(a+b)(a-b)\\\\) with \\\\(a=x, b=5\\\\).", workingOut: "\\\\((x+5)(x-5)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+5)(x-5)\\\\).", workingOut: "\\\\((x+5)(x-5)\\\\)", graphData: null }
  ],
  'y10-3j-q15b': [
    { explanation: "Write \\\\(a^2-49=a^2-7^2\\\\).", workingOut: "\\\\(a^2-7^2\\\\)", graphData: null },
    { explanation: "Apply DOTS: \\\\((a+7)(a-7)\\\\).", workingOut: "\\\\((a+7)(a-7)\\\\)", graphData: null },
    { explanation: "Final: \\\\((a+7)(a-7)\\\\).", workingOut: "\\\\((a+7)(a-7)\\\\)", graphData: null }
  ],
  'y10-3j-q15c': [
    { explanation: "Write \\\\(4x^2-9=(2x)^2-3^2\\\\).", workingOut: "\\\\((2x)^2-3^2\\\\)", graphData: null },
    { explanation: "Apply DOTS: \\\\((2x+3)(2x-3)\\\\).", workingOut: "\\\\((2x+3)(2x-3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x+3)(2x-3)\\\\).", workingOut: "\\\\((2x+3)(2x-3)\\\\)", graphData: null }
  ],
  'y10-3j-q15d': [
    { explanation: "Write \\\\(9a^2-16b^2=(3a)^2-(4b)^2\\\\).", workingOut: "\\\\((3a)^2-(4b)^2\\\\)", graphData: null },
    { explanation: "Apply DOTS: \\\\((3a+4b)(3a-4b)\\\\).", workingOut: "\\\\((3a+4b)(3a-4b)\\\\)", graphData: null },
    { explanation: "Final: \\\\((3a+4b)(3a-4b)\\\\).", workingOut: "\\\\((3a+4b)(3a-4b)\\\\)", graphData: null }
  ],
  'y10-3j-q15e': [
    { explanation: "Factor out 2 first: \\\\(2x^2-50=2(x^2-25)\\\\).", workingOut: "\\\\(2(x^2-25)\\\\)", graphData: null },
    { explanation: "Apply DOTS inside: \\\\(2(x+5)(x-5)\\\\).", workingOut: "\\\\(2(x+5)(x-5)\\\\)", graphData: null },
    { explanation: "Final: \\\\(2(x+5)(x-5)\\\\).", workingOut: "\\\\(2(x+5)(x-5)\\\\)", graphData: null }
  ],
  'y10-3j-q15f': [
    { explanation: "Factor out 3: \\\\(3a^2-48=3(a^2-16)=3(a^2-4^2)\\\\).", workingOut: "\\\\(3(a^2-16)\\\\)", graphData: null },
    { explanation: "Apply DOTS: \\\\(3(a+4)(a-4)\\\\).", workingOut: "\\\\(3(a+4)(a-4)\\\\)", graphData: null },
    { explanation: "Final: \\\\(3(a+4)(a-4)\\\\).", workingOut: "\\\\(3(a+4)(a-4)\\\\)", graphData: null }
  ],
  'y10-3j-q16a': [
    { explanation: "To factorise \\\\(x^2+5x+6\\\\), find two numbers that multiply to \\\\(6\\\\) and add to \\\\(5\\\\): that's \\\\(2\\\\) and \\\\(3\\\\).", workingOut: "\\\\(2\\times3=6, \\quad 2+3=5\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+2)(x+3)\\\\).", workingOut: "\\\\((x+2)(x+3)\\\\)", graphData: null },
    { explanation: "Check by expanding: \\\\(x^2+5x+6\\\\) ✓", workingOut: "\\\\((x+2)(x+3)\\\\)", graphData: null }
  ],
  'y10-3j-q16b': [
    { explanation: "Find two numbers multiplying to \\\\(12\\\\) adding to \\\\(7\\\\): \\\\(3\\\\) and \\\\(4\\\\).", workingOut: "\\\\(3\\times4=12, \\quad 3+4=7\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+3)(x+4)\\\\).", workingOut: "\\\\((x+3)(x+4)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(x+4)\\\\).", workingOut: "\\\\((x+3)(x+4)\\\\)", graphData: null }
  ],
  'y10-3j-q16c': [
    { explanation: "Find two numbers multiplying to \\\\(12\\\\) adding to \\\\(-7\\\\): \\\\(-3\\\\) and \\\\(-4\\\\).", workingOut: "\\\\((-3)\\times(-4)=12, \\quad -3+(-4)=-7\\\\)", graphData: null },
    { explanation: "Write as \\\\((x-3)(x-4)\\\\).", workingOut: "\\\\((x-3)(x-4)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x-3)(x-4)\\\\).", workingOut: "\\\\((x-3)(x-4)\\\\)", graphData: null }
  ],
  'y10-3j-q16d': [
    { explanation: "Find two numbers multiplying to \\\\(-12\\\\) adding to \\\\(-1\\\\): \\\\(3\\\\) and \\\\(-4\\\\).", workingOut: "\\\\(3\\times(-4)=-12, \\quad 3+(-4)=-1\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+3)(x-4)\\\\).", workingOut: "\\\\((x+3)(x-4)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(x-4)\\\\).", workingOut: "\\\\((x+3)(x-4)\\\\)", graphData: null }
  ],
  'y10-3j-q16e': [
    { explanation: "Find two numbers multiplying to \\\\(-15\\\\) adding to \\\\(2\\\\): \\\\(5\\\\) and \\\\(-3\\\\).", workingOut: "\\\\(5\\times(-3)=-15, \\quad 5+(-3)=2\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+5)(x-3)\\\\).", workingOut: "\\\\((x+5)(x-3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+5)(x-3)\\\\).", workingOut: "\\\\((x+5)(x-3)\\\\)", graphData: null }
  ],
  'y10-3j-q16f': [
    { explanation: "Find two numbers multiplying to \\\\(-15\\\\) adding to \\\\(-2\\\\): \\\\(3\\\\) and \\\\(-5\\\\).", workingOut: "\\\\(3\\times(-5)=-15, \\quad 3+(-5)=-2\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+3)(x-5)\\\\).", workingOut: "\\\\((x+3)(x-5)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(x-5)\\\\).", workingOut: "\\\\((x+3)(x-5)\\\\)", graphData: null }
  ],
  'y10-3j-q17a': [
    { explanation: "For \\\\(2x^2+7x+3\\\\): \\\\(ac=6\\\\). Two numbers multiplying to 6 adding to 7: \\\\(1\\\\) and \\\\(6\\\\). Split middle term.", workingOut: "\\\\(2x^2+x+6x+3\\\\)", graphData: null },
    { explanation: "Group: \\\\(x(2x+1)+3(2x+1)=(x+3)(2x+1)\\\\).", workingOut: "\\\\((x+3)(2x+1)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(2x+1)\\\\).", workingOut: "\\\\((x+3)(2x+1)\\\\)", graphData: null }
  ],
  'y10-3j-q17b': [
    { explanation: "For \\\\(3x^2+10x+3\\\\): \\\\(ac=9\\\\). Numbers: \\\\(1\\\\) and \\\\(9\\\\).", workingOut: "\\\\(3x^2+x+9x+3\\\\)", graphData: null },
    { explanation: "Group: \\\\(x(3x+1)+3(3x+1)=(x+3)(3x+1)\\\\).", workingOut: "\\\\((x+3)(3x+1)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(3x+1)\\\\).", workingOut: "\\\\((x+3)(3x+1)\\\\)", graphData: null }
  ],
  'y10-3j-q17c': [
    { explanation: "For \\\\(6x^2+x-2\\\\): \\\\(ac=-12\\\\). Numbers: \\\\(4\\\\) and \\\\(-3\\\\).", workingOut: "\\\\(6x^2+4x-3x-2\\\\)", graphData: null },
    { explanation: "Group: \\\\(2x(3x+2)-1(3x+2)=(2x-1)(3x+2)\\\\).", workingOut: "\\\\((2x-1)(3x+2)\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x-1)(3x+2)\\\\).", workingOut: "\\\\((2x-1)(3x+2)\\\\)", graphData: null }
  ],
  'y10-3j-q17d': [
    { explanation: "For \\\\(4x^2-4x-3\\\\): \\\\(ac=-12\\\\). Numbers: \\\\(2\\\\) and \\\\(-6\\\\).", workingOut: "\\\\(4x^2+2x-6x-3\\\\)", graphData: null },
    { explanation: "Group: \\\\(2x(2x+1)-3(2x+1)=(2x-3)(2x+1)\\\\).", workingOut: "\\\\((2x-3)(2x+1)\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x-3)(2x+1)\\\\).", workingOut: "\\\\((2x-3)(2x+1)\\\\)", graphData: null }
  ],
  'y10-3j-q17e': [
    { explanation: "For \\\\(6x^2-13x+6\\\\): \\\\(ac=36\\\\). Numbers: \\\\(-9\\\\) and \\\\(-4\\\\).", workingOut: "\\\\(6x^2-9x-4x+6\\\\)", graphData: null },
    { explanation: "Group: \\\\(3x(2x-3)-2(2x-3)=(3x-2)(2x-3)\\\\).", workingOut: "\\\\((3x-2)(2x-3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((3x-2)(2x-3)\\\\).", workingOut: "\\\\((3x-2)(2x-3)\\\\)", graphData: null }
  ],
  'y10-3j-q17f': [
    { explanation: "Recognise \\\\(4x^2+12x+9=(2x)^2+2(2x)(3)+3^2\\\\) — a perfect square trinomial.", workingOut: "\\\\((2x+3)^2\\\\)", graphData: null },
    { explanation: "Write as perfect square: \\\\((2x+3)^2\\\\).", workingOut: "\\\\((2x+3)^2\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x+3)^2\\\\).", workingOut: "\\\\((2x+3)^2\\\\)", graphData: null }
  ],
  'y10-3j-q18a': [
    { explanation: "Factorise \\\\(x^2+5x+6=0\\\\): numbers to 6 adding to 5 are \\\\(2\\\\) and \\\\(3\\\\).", workingOut: "\\\\((x+2)(x+3)=0\\\\)", graphData: null },
    { explanation: "Set each factor to zero: \\\\(x+2=0\\\\) or \\\\(x+3=0\\\\).", workingOut: "\\\\(x=-2 \\text{ or } x=-3\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=-2\\\\) or \\\\(x=-3\\\\).", workingOut: "\\\\(x=-2 \\text{ or } x=-3\\\\)", graphData: null }
  ],
  'y10-3j-q18b': [
    { explanation: "Factorise \\\\(x^2-7x+10=0\\\\): numbers to 10 adding to \\\\(-7\\\\): \\\\(-2\\\\) and \\\\(-5\\\\).", workingOut: "\\\\((x-2)(x-5)=0\\\\)", graphData: null },
    { explanation: "\\\\(x-2=0\\\\) or \\\\(x-5=0\\\\).", workingOut: "\\\\(x=2 \\text{ or } x=5\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=2\\\\) or \\\\(x=5\\\\).", workingOut: "\\\\(x=2 \\text{ or } x=5\\\\)", graphData: null }
  ],
  'y10-3j-q18c': [
    { explanation: "Take square roots: \\\\(x^2=9 \\Rightarrow x=\\pm\\sqrt{9}\\\\).", workingOut: "\\\\(x=\\pm3\\\\)", graphData: null },
    { explanation: "\\\\(x=3\\\\) or \\\\(x=-3\\\\).", workingOut: "\\\\(x=\\pm3\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=\\pm3\\\\).", workingOut: "\\\\(x=\\pm3\\\\)", graphData: null }
  ],
  'y10-3j-q18d': [
    { explanation: "Rearrange: \\\\(2x^2=8 \\Rightarrow x^2=4\\\\). Take square roots.", workingOut: "\\\\(x=\\pm2\\\\)", graphData: null },
    { explanation: "\\\\(x=2\\\\) or \\\\(x=-2\\\\).", workingOut: "\\\\(x=\\pm2\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=\\pm2\\\\).", workingOut: "\\\\(x=\\pm2\\\\)", graphData: null }
  ],
  'y10-3j-q18e': [
    { explanation: "Rearrange to \\\\(x^2+2x-8=0\\\\). Numbers to \\\\(-8\\\\) adding to \\\\(2\\\\): \\\\(4\\\\) and \\\\(-2\\\\).", workingOut: "\\\\((x+4)(x-2)=0\\\\)", graphData: null },
    { explanation: "\\\\(x=-4\\\\) or \\\\(x=2\\\\).", workingOut: "\\\\(x=-4 \\text{ or } x=2\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=-4\\\\) or \\\\(x=2\\\\).", workingOut: "\\\\(x=-4 \\text{ or } x=2\\\\)", graphData: null }
  ],
  'y10-3j-q18f': [
    { explanation: "Rearrange: \\\\(x^2-5x=0\\\\). Factor out \\\\(x\\\\): \\\\(x(x-5)=0\\\\).", workingOut: "\\\\(x(x-5)=0\\\\)", graphData: null },
    { explanation: "\\\\(x=0\\\\) or \\\\(x-5=0\\\\).", workingOut: "\\\\(x=0 \\text{ or } x=5\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=0\\\\) or \\\\(x=5\\\\).", workingOut: "\\\\(x=0 \\text{ or } x=5\\\\)", graphData: null }
  ],
  'y10-3j-q19a': [
    { explanation: "\\\\(a=1,b=6,c=4\\\\). Discriminant: \\\\(\\Delta=36-16=20\\\\). Quadratic formula: \\\\(x=\\frac{-6\\pm\\sqrt{20}}{2}\\\\).", workingOut: "\\\\(x=\\frac{-6\\pm 2\\sqrt{5}}{2}\\\\)", graphData: null },
    { explanation: "Simplify: \\\\(x=-3\\pm\\sqrt{5}\\\\).", workingOut: "\\\\(x=-3\\pm\\sqrt{5}\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=-3+\\sqrt{5}\\approx-0.76\\\\) or \\\\(x=-3-\\sqrt{5}\\approx-5.24\\\\).", workingOut: "\\\\(x=-3\\pm\\sqrt{5}\\\\)", graphData: null }
  ],
  'y10-3j-q19b': [
    { explanation: "\\\\(a=2,b=-3,c=-1\\\\). \\\\(\\Delta=9+8=17\\\\).", workingOut: "\\\\(x=\\frac{3\\pm\\sqrt{17}}{4}\\\\)", graphData: null },
    { explanation: "Two solutions from \\\\(\\pm\\sqrt{17}\\\\).", workingOut: "\\\\(x=\\frac{3+\\sqrt{17}}{4} \\text{ or } \\frac{3-\\sqrt{17}}{4}\\\\)", graphData: null },
    { explanation: "Approx: \\\\(x\\approx1.78\\\\) or \\\\(x\\approx-0.28\\\\).", workingOut: "\\\\(x=\\frac{3\\pm\\sqrt{17}}{4}\\\\)", graphData: null }
  ],
  'y10-3j-q19c': [
    { explanation: "Rearrange to \\\\(x^2-4x+1=0\\\\). \\\\(\\Delta=16-4=12\\\\).", workingOut: "\\\\(x=\\frac{4\\pm\\sqrt{12}}{2}=\\frac{4\\pm2\\sqrt{3}}{2}\\\\)", graphData: null },
    { explanation: "Simplify: \\\\(x=2\\pm\\sqrt{3}\\\\).", workingOut: "\\\\(x=2\\pm\\sqrt{3}\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=2+\\sqrt{3}\\approx3.73\\\\) or \\\\(x=2-\\sqrt{3}\\approx0.27\\\\).", workingOut: "\\\\(x=2\\pm\\sqrt{3}\\\\)", graphData: null }
  ],
  'y10-3j-q19d': [
    { explanation: "Rearrange to \\\\(3x^2+5x-2=0\\\\). \\\\(\\Delta=25+24=49\\\\).", workingOut: "\\\\(x=\\frac{-5\\pm7}{6}\\\\)", graphData: null },
    { explanation: "\\\\(x=\\frac{2}{6}=\\frac{1}{3}\\\\) or \\\\(x=\\frac{-12}{6}=-2\\\\).", workingOut: "\\\\(x=\\frac{1}{3} \\text{ or } x=-2\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=\\frac{1}{3}\\\\) or \\\\(x=-2\\\\).", workingOut: "\\\\(x=\\frac{1}{3} \\text{ or } x=-2\\\\)", graphData: null }
  ],
  'y10-3j-q20a': [
    { explanation: "Add equations to eliminate \\\\(y\\\\): \\\\((2x+y)+(x-y)=9+3\\\\).", workingOut: "\\\\(3x=12 \\Rightarrow x=4\\\\)", graphData: null },
    { explanation: "Substitute \\\\(x=4\\\\) into \\\\(x-y=3\\\\): \\\\(4-y=3\\\\), so \\\\(y=1\\\\).", workingOut: "\\\\(y=1\\\\)", graphData: null },
    { explanation: "Solution: \\\\(x=4, y=1\\\\).", workingOut: "\\\\(x=4, \\quad y=1\\\\)", graphData: null }
  ],
  'y10-3j-q20b': [
    { explanation: "Multiply first by 2: \\\\(2x+6y=14\\\\). Subtract second \\\\((2x+3y=8)\\\\): \\\\(3y=6\\\\).", workingOut: "\\\\(y=2\\\\)", graphData: null },
    { explanation: "Substitute into \\\\(x+3(2)=7\\\\): \\\\(x=1\\\\).", workingOut: "\\\\(x=1\\\\)", graphData: null },
    { explanation: "Solution: \\\\(x=1, y=2\\\\).", workingOut: "\\\\(x=1, \\quad y=2\\\\)", graphData: null }
  ],
  'y10-3j-q20c': [
    { explanation: "Substitute \\\\(y=2x-1\\\\) into \\\\(3x+2y=12\\\\): \\\\(3x+2(2x-1)=12\\\\).", workingOut: "\\\\(7x-2=12 \\Rightarrow 7x=14 \\Rightarrow x=2\\\\)", graphData: null },
    { explanation: "\\\\(y=2(2)-1=3\\\\).", workingOut: "\\\\(y=3\\\\)", graphData: null },
    { explanation: "Solution: \\\\(x=2, y=3\\\\).", workingOut: "\\\\(x=2, \\quad y=3\\\\)", graphData: null }
  ],
  'y10-3j-q20d': [
    { explanation: "Rearrange first: \\\\(y=8-3x\\\\). Substitute: \\\\(2x-2(8-3x)=2\\\\).", workingOut: "\\\\(8x-16=2 \\Rightarrow 8x=18 \\Rightarrow x=\\frac{9}{4}\\\\)", graphData: null },
    { explanation: "\\\\(y=8-3(\\frac{9}{4})=8-\\frac{27}{4}=\\frac{5}{4}\\\\).", workingOut: "\\\\(y=\\frac{5}{4}\\\\)", graphData: null },
    { explanation: "Solution: \\\\(x=\\frac{9}{4}, y=\\frac{5}{4}\\\\).", workingOut: "\\\\(x=\\frac{9}{4}, \\quad y=\\frac{5}{4}\\\\)", graphData: null }
  ],
  'y10-3j-q21a': [
    { explanation: "LCD of 4 and 5 is 20. Rewrite: \\\\(\\frac{5(5x-2)}{20}+\\frac{4(2x-3)}{20}\\\\).", workingOut: "\\\\(\\frac{25x-10+8x-12}{20}\\\\)", graphData: null },
    { explanation: "Combine numerator: \\\\(33x-22=11(3x-2)\\\\).", workingOut: "\\\\(\\frac{11(3x-2)}{20}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{11(3x-2)}{20}\\\\).", workingOut: "\\\\(\\frac{11(3x-2)}{20}\\\\)", graphData: null }
  ],
  'y10-3j-q21b': [
    { explanation: "LCD is \\\\((x+2)(x+3)\\\\). Rewrite fractions over this denominator.", workingOut: "\\\\(\\frac{3(x+3)+4(x+2)}{(x+2)(x+3)}\\\\)", graphData: null },
    { explanation: "Expand numerator: \\\\(3x+9+4x+8=7x+17\\\\).", workingOut: "\\\\(\\frac{7x+17}{(x+2)(x+3)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{7x+17}{(x+2)(x+3)}\\\\).", workingOut: "\\\\(\\frac{7x+17}{(x+2)(x+3)}\\\\)", graphData: null }
  ],
  'y10-3j-q21c': [
    { explanation: "LCD is \\\\((x+3)(x-2)\\\\). Rewrite and subtract.", workingOut: "\\\\(\\frac{2(x-2)-5(x+3)}{(x+3)(x-2)}\\\\)", graphData: null },
    { explanation: "Expand: \\\\(2x-4-5x-15=-3x-19\\\\).", workingOut: "\\\\(\\frac{-3x-19}{(x+3)(x-2)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{-(3x+19)}{(x+3)(x-2)}\\\\).", workingOut: "\\\\(\\frac{-(3x+19)}{(x+3)(x-2)}\\\\)", graphData: null }
  ],
  'y10-3j-q21d': [
    { explanation: "Factorise denominators: \\\\(x(3x+2)\\\\) and \\\\((3x+2)(x+1)\\\\). LCD=\\\\(x(3x+2)(x+1)\\\\).", workingOut: "\\\\(\\frac{3(x+1)-2x}{x(3x+2)(x+1)}\\\\)", graphData: null },
    { explanation: "Numerator: \\\\(3x+3-2x=x+3\\\\).", workingOut: "\\\\(\\frac{x+3}{x(3x+2)(x+1)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{x+3}{x(3x+2)(x+1)}\\\\).", workingOut: "\\\\(\\frac{x+3}{x(3x+2)(x+1)}\\\\)", graphData: null }
  ],
  'y10-3j-q21e': [
    { explanation: "Factorise: \\\\(x(x+2)\\\\) and \\\\((x+2)(x-2)\\\\). LCD=\\\\(x(x+2)(x-2)\\\\).", workingOut: "\\\\(\\frac{5(x-2)-2x}{x(x+2)(x-2)}\\\\)", graphData: null },
    { explanation: "Numerator: \\\\(5x-10-2x=3x-10\\\\).", workingOut: "\\\\(\\frac{3x-10}{x(x+2)(x-2)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{3x-10}{x(x+2)(x-2)}\\\\).", workingOut: "\\\\(\\frac{3x-10}{x(x+2)(x-2)}\\\\)", graphData: null }
  ],
  'y10-3j-q21f': [
    { explanation: "Factorise: \\\\((x+4)(x-4)\\\\) and \\\\(-(x-4)(x+1)\\\\). LCD=\\\\((x+4)(x-4)(x+1)\\\\).", workingOut: "\\\\(\\frac{4(x+1)+3(x+4)}{(x+4)(x-4)(x+1)}\\\\)", graphData: null },
    { explanation: "Numerator: \\\\(4x+4+3x+12=7x+16\\\\).", workingOut: "\\\\(\\frac{7x+16}{(x+4)(x-4)(x+1)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{7x+16}{(x+4)(x-4)(x+1)}\\\\).", workingOut: "\\\\(\\frac{7x+16}{(x+4)(x-4)(x+1)}\\\\)", graphData: null }
  ],
};

// ── Read & patch the file ─────────────────────────────────────
let content = fs.readFileSync(FILE, 'utf8');

let fixedCount = 0;
for (const [id, steps] of Object.entries(FIXED_STEPS)) {
  // Find the solutionSteps block for this id
  // Strategy: locate '"id": "y10-3j-qXX"' then find its solutionSteps array and replace it
  const stepsJson = JSON.stringify(steps, null, 6)
    // In the JS file, backslashes are already doubled, so we need to match the JS string escaping
    // The JSON.stringify will produce single backslashes, but in JS source they need to be doubled
    // We DON'T need to double them here since the content already has them doubled in the source
    ;
  
  // Match the solutionSteps array for this specific question id
  // We find the id, then find the next solutionSteps, then replace just that array
  const idPattern = new RegExp(
    `("id":\\s*"${id.replace('-', '\\-').replace('-', '\\-').replace('-', '\\-').replace('-', '\\-').replace('-', '\\-')}"[\\s\\S]*?)"solutionSteps":\\s*\\[[\\s\\S]*?\\](?=,\\s*\\n\\s*"graphData")`,
    ''
  );
  
  // Simpler approach: use indexOf to locate the id, then find solutionSteps after it
  const idStr = `"id": "${id}"`;
  const idIdx = content.indexOf(idStr);
  if (idIdx === -1) {
    console.log(`WARNING: Could not find id "${id}" in file`);
    continue;
  }
  
  // Find "solutionSteps": after the id
  const stepsStart = content.indexOf('"solutionSteps":', idIdx);
  if (stepsStart === -1) {
    console.log(`WARNING: No solutionSteps for "${id}"`);
    continue;
  }
  
  // Find the array start
  const arrStart = content.indexOf('[', stepsStart);
  
  // Find the matching closing bracket
  let depth = 0;
  let arrEnd = -1;
  for (let i = arrStart; i < content.length; i++) {
    if (content[i] === '[') depth++;
    else if (content[i] === ']') {
      depth--;
      if (depth === 0) { arrEnd = i; break; }
    }
  }
  
  if (arrEnd === -1) {
    console.log(`WARNING: Could not find array end for "${id}"`);
    continue;
  }
  
  // Build the replacement — we need to properly escape for JS source
  const stepsForJs = steps.map(step => {
    // workingOut and explanation are already double-escaped in our FIXED_STEPS object
    // When written to JS source they need to stay as-is
    const expEscaped = step.explanation.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const woEscaped = step.workingOut ? step.workingOut.replace(/\\/g, '\\\\').replace(/"/g, '\\"') : null;
    return `      {\n        "explanation": "${expEscaped}",\n        "workingOut": ${woEscaped ? '"' + woEscaped + '"' : 'null'},\n        "graphData": null\n      }`;
  }).join(',\n');
  
  const replacement = `[\n${stepsForJs}\n    ]`;
  
  content = content.substring(0, arrStart) + replacement + content.substring(arrEnd + 1);
  fixedCount++;
  console.log(`Patched: ${id}`);
}

fs.writeFileSync(FILE, content);
console.log(`\nDone! Patched ${fixedCount} questions in ${FILE}`);
