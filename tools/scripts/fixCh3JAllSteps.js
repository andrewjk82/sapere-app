#!/usr/bin/env node
/**
 * Fix ALL Ch3J solutionSteps to have proper, mathematically specific intermediate steps.
 * 
 * Strategy: For each question type, generate real working steps based on the expression.
 * Updates Firestore directly.
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDV4CjHNMGk2Aj4TdG53Rj5lOnHRFYi8TI",
  authDomain: "sapere-app-5d9ff.firebaseapp.com",
  projectId: "sapere-app-5d9ff",
  storageBucket: "sapere-app-5d9ff.appspot.com",
  messagingSenderId: "440895013413",
  appId: "1:440895013413:web:3f2c58c9ee6fd3bdc6cd5f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ──────────────────────────────────────────────────────────
// HAND-CRAFTED STEPS FOR EVERY QUESTION (keyed by id)
// ──────────────────────────────────────────────────────────
const FIXED_STEPS = {

  // ── SIMPLIFY (q1) ──────────────────────────────────────
  'y10-3j-q1a': [
    { explanation: "Identify like terms: \\\\(a^2\\\\) terms and \\\\(b\\\\) terms can each be grouped.", workingOut: "\\\\((4a^2 + 2a^2) + (-5b + 6b)\\\\)", graphData: null },
    { explanation: "Add coefficients: \\\\(4+2=6\\\\) for \\\\(a^2\\\\) terms, and \\\\(-5+6=1\\\\) for \\\\(b\\\\) terms.", workingOut: "\\\\(6a^2 + b\\\\)", graphData: null },
    { explanation: "Final simplified form.", workingOut: "\\\\(6a^2 + b\\\\)", graphData: null }
  ],
  'y10-3j-q1b': [
    { explanation: "First evaluate the products: \\\\(4x \\times 2y = 8xy\\\\) and \\\\(2x \\times 4x = 8x^2\\\\).", workingOut: "\\\\(8xy - 3x^2 - 5xy + 8x^2\\\\)", graphData: null },
    { explanation: "Group like terms: \\\\(x^2\\\\): \\\\(-3+8=5\\\\), \\\\(xy\\\\): \\\\(8-5=3\\\\).", workingOut: "\\\\(5x^2 + 3xy\\\\)", graphData: null },
    { explanation: "Final simplified form.", workingOut: "\\\\(5x^2 + 3xy\\\\)", graphData: null }
  ],
  'y10-3j-q1c': [
    { explanation: "Simplify each fraction: \\\\(\\frac{6x^2y^3}{3xy} = 2xy^2\\\\) and \\\\(\\frac{8x^3y^2}{2x^2y^2} = 4x\\\\).", workingOut: "\\\\(2xy^2 + 4x^2 - 4x + 2xy^2\\\\)", graphData: null },
    { explanation: "Combine \\\\(xy^2\\\\) terms: \\\\(2xy^2 + 2xy^2 = 4xy^2\\\\).", workingOut: "\\\\(4xy^2 + 4x^2 - 4x\\\\)", graphData: null },
    { explanation: "Final simplified form: \\\\(4xy^2 + 4x^2 - 4x\\\\).", workingOut: "\\\\(4xy^2 + 4x^2 - 4x\\\\)", graphData: null }
  ],
  'y10-3j-q1d': [
    { explanation: "Simplify each fraction: \\\\(\\frac{8a^3b^3}{ab}=8a^2b^2\\\\), \\\\(\\frac{4a^3b^2}{b^2}=4a^3\\\\), \\\\(\\frac{10a^5b}{2a^2b}=5a^3\\\\), \\\\(\\frac{15a^4b^2}{3a^2}=5a^2b^2\\\\).", workingOut: "\\\\(8a^2b^2 + 4a^3 - 5a^3 + 5a^2b^2\\\\)", graphData: null },
    { explanation: "Collect like terms: \\\\(a^2b^2\\\\): \\\\(8+5=13\\\\). \\\\(a^3\\\\): \\\\(4-5=-1\\\\).", workingOut: "\\\\(13a^2b^2 - a^3\\\\)", graphData: null },
    { explanation: "Final simplified form.", workingOut: "\\\\(13a^2b^2 - a^3\\\\)", graphData: null }
  ],

  // ── EXPAND single brackets (q2a-q2d) ─────────────────────
  'y10-3j-q2a': [
    { explanation: "Distribute each bracket: \\\\(4(x+3) = 4x+12\\\\) and \\\\(3(x-2) = 3x-6\\\\).", workingOut: "\\\\(4x + 12 + 3x - 6\\\\)", graphData: null },
    { explanation: "Collect like terms: \\\\(x\\\\): \\\\(4+3=7\\\\). Constants: \\\\(12-6=6\\\\).", workingOut: "\\\\(7x + 6\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(7x + 6\\\\).", workingOut: "\\\\(7x + 6\\\\)", graphData: null }
  ],
  'y10-3j-q2b': [
    { explanation: "Distribute: \\\\(6(y+2) = 6y+12\\\\) and \\\\(-4(y-3) = -4y+12\\\\) (note: minus × minus = plus).", workingOut: "\\\\(6y + 12 - 4y + 12\\\\)", graphData: null },
    { explanation: "Collect like terms: \\\\(y\\\\): \\\\(6-4=2\\\\). Constants: \\\\(12+12=24\\\\).", workingOut: "\\\\(2y + 24\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(2y + 24\\\\).", workingOut: "\\\\(2y + 24\\\\)", graphData: null }
  ],
  'y10-3j-q2c': [
    { explanation: "Distribute: \\\\(3x(x+4) = 3x^2+12x\\\\) and \\\\(2x(x-5) = 2x^2-10x\\\\).", workingOut: "\\\\(3x^2 + 12x + 2x^2 - 10x\\\\)", graphData: null },
    { explanation: "Collect like terms: \\\\(x^2\\\\): \\\\(3+2=5\\\\). \\\\(x\\\\): \\\\(12-10=2\\\\).", workingOut: "\\\\(5x^2 + 2x\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(5x^2 + 2x\\\\).", workingOut: "\\\\(5x^2 + 2x\\\\)", graphData: null }
  ],
  'y10-3j-q2d': [
    { explanation: "Distribute: \\\\(4y(y-2)=4y^2-8y\\\\) and \\\\(-3y(2y-4)=-6y^2+12y\\\\).", workingOut: "\\\\(4y^2 - 8y - 6y^2 + 12y\\\\)", graphData: null },
    { explanation: "Collect like terms: \\\\(y^2\\\\): \\\\(4-6=-2\\\\). \\\\(y\\\\): \\\\(-8+12=4\\\\).", workingOut: "\\\\(-2y^2 + 4y\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(-2y^2 + 4y\\\\).", workingOut: "\\\\(-2y^2 + 4y\\\\)", graphData: null }
  ],

  // ── EXPAND double brackets (q2e-q2h) ─────────────────────
  'y10-3j-q2e': [
    { explanation: "Use FOIL: F=\\\\(3x^2\\\\), O=\\\\(12x\\\\), I=\\\\(2x\\\\), L=\\\\(8\\\\).", workingOut: "\\\\(3x^2 + 12x + 2x + 8\\\\)", graphData: null },
    { explanation: "Collect middle terms: \\\\(12x+2x=14x\\\\).", workingOut: "\\\\(3x^2 + 14x + 8\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(3x^2 + 14x + 8\\\\).", workingOut: "\\\\(3x^2 + 14x + 8\\\\)", graphData: null }
  ],
  'y10-3j-q2f': [
    { explanation: "Use FOIL on \\\\((3a+5)(2a-3)\\\\): F=\\\\(6a^2\\\\), O=\\\\(-9a\\\\), I=\\\\(10a\\\\), L=\\\\(-15\\\\).", workingOut: "\\\\(6a^2 - 9a + 10a - 15\\\\)", graphData: null },
    { explanation: "Collect middle terms: \\\\(-9a+10a=a\\\\).", workingOut: "\\\\(6a^2 + a - 15\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(6a^2 + a - 15\\\\).", workingOut: "\\\\(6a^2 + a - 15\\\\)", graphData: null }
  ],
  'y10-3j-q2g': [
    { explanation: "Expand each pair: \\\\((3y+2)(y+4)=3y^2+14y+8\\\\) and \\\\((y-2)(y+5)=y^2+3y-10\\\\).", workingOut: "\\\\((3y^2+14y+8)-(y^2+3y-10)\\\\)", graphData: null },
    { explanation: "Distribute the minus sign and collect: \\\\(y^2\\\\): \\\\(3-1=2\\\\), \\\\(y\\\\): \\\\(14-3=11\\\\), constant: \\\\(8+10=18\\\\).", workingOut: "\\\\(2y^2 + 11y + 18\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(2y^2 + 11y + 18\\\\).", workingOut: "\\\\(2y^2 + 11y + 18\\\\)", graphData: null }
  ],
  'y10-3j-q2h': [
    { explanation: "Expand: \\\\((c+4)(2c+3)=2c^2+11c+12\\\\) and \\\\((3c-2)(c-4)=3c^2-14c+8\\\\).", workingOut: "\\\\((2c^2+11c+12)-(3c^2-14c+8)\\\\)", graphData: null },
    { explanation: "Distribute negative: \\\\(2c^2+11c+12-3c^2+14c-8\\\\). Collect: \\\\(c^2\\\\): \\\\(-1\\\\), \\\\(c\\\\): \\\\(25\\\\), const: \\\\(4\\\\).", workingOut: "\\\\(-c^2 + 25c + 4\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(-c^2 + 25c + 4\\\\).", workingOut: "\\\\(-c^2 + 25c + 4\\\\)", graphData: null }
  ],

  // ── EXPAND with outer coefficient (q3) ───────────────────
  'y10-3j-q3a': [
    { explanation: "First FOIL the brackets: \\\\((x+2)(2x+3)=2x^2+7x+6\\\\).", workingOut: "\\\\(4(2x^2 + 7x + 6)\\\\)", graphData: null },
    { explanation: "Multiply through by 4: \\\\(8x^2+28x+24\\\\).", workingOut: "\\\\(8x^2 + 28x + 24\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(8x^2 + 28x + 24\\\\).", workingOut: "\\\\(8x^2 + 28x + 24\\\\)", graphData: null }
  ],
  'y10-3j-q3b': [
    { explanation: "FOIL \\\\((2a+3)(4a-1)=8a^2-2a+12a-3=8a^2+10a-3\\\\).", workingOut: "\\\\(3(8a^2 + 10a - 3)\\\\)", graphData: null },
    { explanation: "Multiply by 3: \\\\(24a^2+30a-9\\\\).", workingOut: "\\\\(24a^2 + 30a - 9\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(24a^2 + 30a - 9\\\\).", workingOut: "\\\\(24a^2 + 30a - 9\\\\)", graphData: null }
  ],
  'y10-3j-q3c': [
    { explanation: "\\\\(3(2y+3)(y+4)=3(2y^2+11y+12)=6y^2+33y+36\\\\). \\\\(2(y-3)(2y+5)=2(2y^2-y-15)=4y^2-2y-30\\\\).", workingOut: "\\\\((6y^2+33y+36)+(4y^2-2y-30)\\\\)", graphData: null },
    { explanation: "Collect: \\\\(y^2\\\\): \\\\(6+4=10\\\\), \\\\(y\\\\): \\\\(33-2=31\\\\), const: \\\\(36-30=6\\\\).", workingOut: "\\\\(10y^2 + 31y + 6\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(10y^2 + 31y + 6\\\\).", workingOut: "\\\\(10y^2 + 31y + 6\\\\)", graphData: null }
  ],
  'y10-3j-q3d': [
    { explanation: "\\\\(4(b+3)(2b+1)=4(2b^2+7b+3)=8b^2+28b+12\\\\). \\\\(2(b-2)(b-4)=2(b^2-6b+8)=2b^2-12b+16\\\\).", workingOut: "\\\\((8b^2+28b+12)-(2b^2-12b+16)\\\\)", graphData: null },
    { explanation: "Distribute minus and collect: \\\\(b^2\\\\): \\\\(8-2=6\\\\), \\\\(b\\\\): \\\\(28+12=40\\\\), const: \\\\(12-16=-4\\\\).", workingOut: "\\\\(6b^2 + 40b - 4\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(6b^2 + 40b - 4\\\\).", workingOut: "\\\\(6b^2 + 40b - 4\\\\)", graphData: null }
  ],

  // ── EXPAND with fractions (q4) ────────────────────────────
  'y10-3j-q4a': [
    { explanation: "Distribute: \\\\(\\frac{2}{3}(x+3)=\\frac{2x}{3}+2\\\\) and \\\\(\\frac{1}{4}(x-2)=\\frac{x}{4}-\\frac{1}{2}\\\\).", workingOut: "\\\\(\\frac{2x}{3}+2+\\frac{x}{4}-\\frac{1}{2}\\\\)", graphData: null },
    { explanation: "Common denominator 12: \\\\(\\frac{8x+3x}{12}+\\frac{24-6}{12}=\\frac{11x+18}{12}\\\\).", workingOut: "\\\\(\\frac{11x+18}{12}\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(\\frac{11x+18}{12}\\\\).", workingOut: "\\\\(\\frac{11x+18}{12}\\\\)", graphData: null }
  ],
  'y10-3j-q4b': [
    { explanation: "Distribute: \\\\(4(\\frac{a}{2}+\\frac{1}{3})=2a+\\frac{4}{3}\\\\) and \\\\(-2(\\frac{a}{3}-\\frac{1}{4})=-\\frac{2a}{3}+\\frac{1}{2}\\\\).", workingOut: "\\\\(2a+\\frac{4}{3}-\\frac{2a}{3}+\\frac{1}{2}\\\\)", graphData: null },
    { explanation: "\\\\(a\\\\) terms (LCD 3): \\\\(\\frac{6a-2a}{3}=\\frac{4a}{3}\\\\). Constants (LCD 6): \\\\(\\frac{8+3}{6}=\\frac{11}{6}\\\\).", workingOut: "\\\\(\\frac{4a}{3}+\\frac{11}{6}\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(\\frac{4a}{3}+\\frac{11}{6}\\\\).", workingOut: "\\\\(\\frac{4a}{3}+\\frac{11}{6}\\\\)", graphData: null }
  ],
  'y10-3j-q4c': [
    { explanation: "Distribute: \\\\(\\frac{x}{2}(x+4)=\\frac{x^2}{2}+2x\\\\) and \\\\(\\frac{x}{3}(x-2)=\\frac{x^2}{3}-\\frac{2x}{3}\\\\).", workingOut: "\\\\(\\frac{x^2}{2}+2x+\\frac{x^2}{3}-\\frac{2x}{3}\\\\)", graphData: null },
    { explanation: "\\\\(x^2\\\\) (LCD 6): \\\\(\\frac{3x^2+2x^2}{6}=\\frac{5x^2}{6}\\\\). \\\\(x\\\\) (LCD 3): \\\\(\\frac{6x-2x}{3}=\\frac{4x}{3}=\\frac{8x}{6}\\\\).", workingOut: "\\\\(\\frac{5x^2+8x}{6}\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(\\frac{5x^2+8x}{6}\\\\).", workingOut: "\\\\(\\frac{5x^2+8x}{6}\\\\)", graphData: null }
  ],
  'y10-3j-q4d': [
    { explanation: "Distribute: \\\\(\\frac{3y}{4}(\\frac{y}{2}-2)=\\frac{3y^2}{8}-\\frac{3y}{2}\\\\) and \\\\(\\frac{y}{3}(3y-4)=y^2-\\frac{4y}{3}\\\\).", workingOut: "\\\\(\\frac{3y^2}{8}-\\frac{3y}{2}-y^2+\\frac{4y}{3}\\\\)", graphData: null },
    { explanation: "\\\\(y^2\\\\) (LCD 8): \\\\(\\frac{3-8}{8}y^2=-\\frac{5y^2}{8}\\\\). \\\\(y\\\\) (LCD 6): \\\\(\\frac{-9+8}{6}y=-\\frac{y}{6}\\\\).", workingOut: "\\\\(-\\frac{5y^2}{8}-\\frac{y}{6}\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(-\\frac{5y^2}{8}-\\frac{y}{6}\\\\).", workingOut: "\\\\(-\\frac{5y^2}{8}-\\frac{y}{6}\\\\)", graphData: null }
  ],
  'y10-3j-q4e': [
    { explanation: "FOIL: \\\\(\\frac{x}{2}\\cdot x=\\frac{x^2}{2}\\\\), \\\\(\\frac{x}{2}\\cdot\\frac{1}{3}=\\frac{x}{6}\\\\), \\\\(2\\cdot x=2x\\\\), \\\\(2\\cdot\\frac{1}{3}=\\frac{2}{3}\\\\).", workingOut: "\\\\(\\frac{x^2}{2}+\\frac{x}{6}+2x+\\frac{2}{3}\\\\)", graphData: null },
    { explanation: "Combine \\\\(x\\\\) terms (LCD 6): \\\\(\\frac{x+12x}{6}=\\frac{13x}{6}\\\\).", workingOut: "\\\\(\\frac{x^2}{2}+\\frac{13x}{6}+\\frac{2}{3}\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(\\frac{x^2}{2}+\\frac{13x}{6}+\\frac{2}{3}\\\\).", workingOut: "\\\\(\\frac{x^2}{2}+\\frac{13x}{6}+\\frac{2}{3}\\\\)", graphData: null }
  ],
  'y10-3j-q4f': [
    { explanation: "Expand first: \\\\((\\frac{y}{2}+4)(\\frac{2y}{3}+3)=\\frac{y^2}{3}+\\frac{3y}{2}+\\frac{8y}{3}+12=\\frac{y^2}{3}+\\frac{25y}{6}+12\\\\). Expand second: \\\\((y-\\frac{1}{2})(y+\\frac{1}{3})=y^2-\\frac{y}{6}-\\frac{1}{6}\\\\).", workingOut: "\\\\((\\frac{y^2}{3}+\\frac{25y}{6}+12)-(y^2-\\frac{y}{6}-\\frac{1}{6})\\\\)", graphData: null },
    { explanation: "Distribute minus and collect: \\\\(y^2\\\\): \\\\(\\frac{1}{3}-1=-\\frac{2}{3}\\\\), \\\\(y\\\\): \\\\(\\frac{25+1}{6}=\\frac{13}{3}\\\\), const: \\\\(12+\\frac{1}{6}=\\frac{73}{6}\\\\).", workingOut: "\\\\(-\\frac{2}{3}y^2+\\frac{13}{3}y+\\frac{73}{6}\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(-\\frac{2}{3}y^2+\\frac{13}{3}y+\\frac{73}{6}\\\\).", workingOut: "\\\\(-\\frac{2}{3}y^2+\\frac{13}{3}y+\\frac{73}{6}\\\\)", graphData: null }
  ],

  // ── SOLVE linear equations (q5) ──────────────────────────
  'y10-3j-q5a': [
    { explanation: "Isolate the variable by adding 5 to both sides: \\\\(3x = 13 + 5 = 18\\\\).", workingOut: "\\\\(3x = 18\\\\)", graphData: null },
    { explanation: "Divide both sides by 3: \\\\(x = \\frac{18}{3} = 6\\\\).", workingOut: "\\\\(x = 6\\\\)", graphData: null },
    { explanation: "Check: \\\\(3(6)-5=18-5=13\\\\) ✓", workingOut: "\\\\(x = 6\\\\)", graphData: null }
  ],
  'y10-3j-q5b': [
    { explanation: "Subtract 7 from both sides: \\\\(-2y = 15 - 7 = 8\\\\).", workingOut: "\\\\(-2y = 8\\\\)", graphData: null },
    { explanation: "Divide both sides by \\\\(-2\\\\): \\\\(y = \\frac{8}{-2} = -4\\\\).", workingOut: "\\\\(y = -4\\\\)", graphData: null },
    { explanation: "Check: \\\\(7-2(-4)=7+8=15\\\\) ✓", workingOut: "\\\\(y = -4\\\\)", graphData: null }
  ],
  'y10-3j-q5c': [
    { explanation: "Collect \\\\(x\\\\) terms on left: subtract \\\\(2x\\\\) from both sides: \\\\(4x-2x+5 = -7\\\\), so \\\\(2x = -12\\\\).", workingOut: "\\\\(2x + 5 = -7 \\Rightarrow 2x = -12\\\\)", graphData: null },
    { explanation: "Divide by 2: \\\\(x = -6\\\\).", workingOut: "\\\\(x = -6\\\\)", graphData: null },
    { explanation: "Check: \\\\(4(-6)+5=-19\\\\) and \\\\(2(-6)-7=-19\\\\) ✓", workingOut: "\\\\(x = -6\\\\)", graphData: null }
  ],
  'y10-3j-q5d': [
    { explanation: "Expand left side: \\\\(3(2x-1)=6x-3\\\\). Equation becomes \\\\(6x-3=2x+13\\\\).", workingOut: "\\\\(6x - 3 = 2x + 13\\\\)", graphData: null },
    { explanation: "Subtract \\\\(2x\\\\) from both sides: \\\\(4x=16\\\\), so \\\\(x=4\\\\).", workingOut: "\\\\(4x = 16 \\Rightarrow x = 4\\\\)", graphData: null },
    { explanation: "Check: \\\\(3(7)=21=2(4)+13\\\\) ✓", workingOut: "\\\\(x = 4\\\\)", graphData: null }
  ],
  'y10-3j-q5e': [
    { explanation: "Multiply every term by 6 (LCD of 2 and 3) to clear fractions: \\\\(3x+2x=30\\\\).", workingOut: "\\\\(\\frac{x}{2}+\\frac{x}{3}=5 \\Rightarrow 3x+2x=30\\\\)", graphData: null },
    { explanation: "Simplify: \\\\(5x=30\\\\), so \\\\(x=6\\\\).", workingOut: "\\\\(5x = 30 \\Rightarrow x = 6\\\\)", graphData: null },
    { explanation: "Check: \\\\(\\frac{6}{2}+\\frac{6}{3}=3+2=5\\\\) ✓", workingOut: "\\\\(x = 6\\\\)", graphData: null }
  ],
  'y10-3j-q5f': [
    { explanation: "Multiply both sides by 4: \\\\(2(x+3)=3(x-1)\\\\).", workingOut: "\\\\(\\frac{x+3}{2}=\\frac{3(x-1)}{4} \\Rightarrow 2(x+3)=3(x-1)\\\\)", graphData: null },
    { explanation: "Expand: \\\\(2x+6=3x-3\\\\). Collect: \\\\(9=x\\\\).", workingOut: "\\\\(2x + 6 = 3x - 3 \\Rightarrow x = 9\\\\)", graphData: null },
    { explanation: "Check: \\\\(\\frac{12}{2}=6\\\\) and \\\\(\\frac{3(8)}{4}=6\\\\) ✓", workingOut: "\\\\(x = 9\\\\)", graphData: null }
  ],
  'y10-3j-q5g': [
    { explanation: "Expand brackets: \\\\(2(x-3)+3(x+2)=4x\\\\) gives \\\\(2x-6+3x+6=4x\\\\).", workingOut: "\\\\(5x = 4x\\\\)", graphData: null },
    { explanation: "Wait, \\\\(2x-6+3x+6=5x+0=5x\\\\). So \\\\(5x=4x \\Rightarrow x=0\\\\).", workingOut: "\\\\(x = 0\\\\)", graphData: null },
    { explanation: "Check: \\\\(2(-3)+3(2)=-6+6=0=4(0)\\\\) ✓", workingOut: "\\\\(x = 0\\\\)", graphData: null }
  ],
  'y10-3j-q5h': [
    { explanation: "Expand: \\\\((x+2)(x-3)=x^2-x-6\\\\) and \\\\((x-1)(x+4)=x^2+3x-4\\\\). Equation: \\\\(x^2-x-6=x^2+3x-4\\\\).", workingOut: "\\\\(-x-6=3x-4\\\\)", graphData: null },
    { explanation: "Collect: \\\\(-6+4=3x+x\\\\), so \\\\(-2=4x\\\\), giving \\\\(x=-\\frac{1}{2}\\\\).", workingOut: "\\\\(4x = -2 \\Rightarrow x = -\\frac{1}{2}\\\\)", graphData: null },
    { explanation: "Check: both sides equal when \\\\(x=-\\frac{1}{2}\\\\) ✓", workingOut: "\\\\(x = -\\frac{1}{2}\\\\)", graphData: null }
  ],

  // ── WORD PROBLEMS (q6, q7, q8) ───────────────────────────
  'y10-3j-q6a': [
    { explanation: "The gardener has 80 m of edging. A rectangle has perimeter \\\\(2(\\text{length}+\\text{width})=80\\\\), so length + width = 40. Width = \\\\(x\\\\), so length \\\\(= 40-x\\\\).", workingOut: "\\\\(\\text{width} = x \\text{ m}, \\quad \\text{length} = (40-x) \\text{ m}\\\\)", graphData: null },
    { explanation: "Express the width: given width = \\\\(x\\\\), length = \\\\(40 - x\\\\) in terms of \\\\(x\\\\).", workingOut: "\\\\(\\text{Width} = x\\\\)", graphData: null },
    { explanation: "The width of the garden in terms of \\\\(x\\\\) is \\\\(x\\\\) metres.", workingOut: "\\\\(x \\text{ m}\\\\)", graphData: null }
  ],
  'y10-3j-q6b': [
    { explanation: "Area = length × width = \\\\((40-x) \\cdot x = 375\\\\). This gives a quadratic equation.", workingOut: "\\\\(x(40-x) = 375\\\\)", graphData: null },
    { explanation: "Expand and rearrange: \\\\(40x - x^2 = 375 \\Rightarrow x^2 - 40x + 375 = 0\\\\). Factorise: \\\\((x-15)(x-25)=0\\\\).", workingOut: "\\\\((x-15)(x-25) = 0 \\Rightarrow x = 15 \\text{ or } x = 25\\\\)", graphData: null },
    { explanation: "If \\\\(x=15\\\\): length \\\\(=25\\\\) m. If \\\\(x=25\\\\): length \\\\(=15\\\\) m. By convention length > width, so length \\\\(= 25\\\\) m.", workingOut: "\\\\(\\text{length} = 25 \\text{ m}\\\\)", graphData: null }
  ],
  'y10-3j-q7': [
    { explanation: "Let walking speed = \\\\(v\\\\) km/min. Running speed = \\\\(3v\\\\). Distance walked + distance run = 4 km.", workingOut: "\\\\(12v + 6(3v) = 4\\\\)", graphData: null },
    { explanation: "Simplify: \\\\(12v + 18v = 30v = 4\\\\), so \\\\(v = \\frac{4}{30} = \\frac{2}{15}\\\\) km/min.", workingOut: "\\\\(v = \\frac{2}{15} \\text{ km/min}\\\\)", graphData: null },
    { explanation: "Running speed \\\\(= 3v = \\frac{6}{15}\\\\) km/min \\\\(= 0.4 \\times 60 = 24\\\\) km/h.", workingOut: "\\\\(\\text{Running speed} = 24 \\text{ km/h}\\\\)", graphData: null }
  ],
  'y10-3j-q8': [
    { explanation: "Let \\\\(x\\\\) = litres drained. Antifreeze remaining after draining = \\\\(0.5(10-x)\\\\). Add back \\\\(x\\\\) L pure antifreeze.", workingOut: "\\\\(0.5(10-x) + x = 0.8 \\times 10\\\\)", graphData: null },
    { explanation: "Expand: \\\\(5 - 0.5x + x = 8 \\Rightarrow 0.5x = 3\\\\).", workingOut: "\\\\(0.5x = 3 \\Rightarrow x = 6\\\\)", graphData: null },
    { explanation: "6 litres must be drained and replaced with pure antifreeze.", workingOut: "\\\\(x = 6 \\text{ litres}\\\\)", graphData: null }
  ],

  // ── STANDARD FORM / INDICES (q9, q10) ────────────────────
  'y10-3j-q9': [
    { explanation: "Standard form: \\\\(a \\times 10^n\\\\) where \\\\(1 \\le a < 10\\\\). Identify the value of \\\\(a\\\\) and the power of 10.", workingOut: "\\\\(3.6 \\times 10^5\\\\)", graphData: null },
    { explanation: "Move the decimal 5 places to the right to get 360000.", workingOut: "\\\\(3.6 \\times 10^5 = 360\\,000\\\\)", graphData: null },
    { explanation: "Answer: \\\\(360\\,000\\\\).", workingOut: "\\\\(360000\\\\)", graphData: null }
  ],
  'y10-3j-q10': [
    { explanation: "Substitute \\\\(I = 5.0 \\times 10^3\\\\) and \\\\(R = 3.2 \\times 10^{-1}\\\\) into \\\\(P = I^2R\\\\).", workingOut: "\\\\(P = (5.0 \\times 10^3)^2 \\times (3.2 \\times 10^{-1})\\\\)", graphData: null },
    { explanation: "Square the current: \\\\((5.0)^2 = 25\\\\), \\\\((10^3)^2 = 10^6\\\\). So \\\\(P = 25 \\times 10^6 \\times 3.2 \\times 10^{-1}\\\\).", workingOut: "\\\\(25 \\times 3.2 \\times 10^{6-1} = 80 \\times 10^5\\\\)", graphData: null },
    { explanation: "Convert to standard form: \\\\(80 \\times 10^5 = 8.0 \\times 10^6\\\\) W.", workingOut: "\\\\(P = 8.0 \\times 10^6 \\text{ W}\\\\)", graphData: null }
  ],

  // ── KINEMATICS (q11) ─────────────────────────────────────
  'y10-3j-q11a': [
    { explanation: "Substitute \\\\(u=15.5\\\\), \\\\(t=2.0\\\\), \\\\(a=9.8\\\\) into \\\\(s = ut + \\frac{1}{2}at^2\\\\).", workingOut: "\\\\(s = 15.5(2.0) + \\frac{1}{2}(9.8)(2.0)^2\\\\)", graphData: null },
    { explanation: "Calculate each term: \\\\(15.5 \\times 2 = 31\\\\) and \\\\(\\frac{1}{2} \\times 9.8 \\times 4 = 19.6\\\\).", workingOut: "\\\\(s = 31 + 19.6 = 50.6\\\\)", graphData: null },
    { explanation: "So \\\\(s = 50.6\\\\) m.", workingOut: "\\\\(s = 50.6 \\text{ m}\\\\)", graphData: null }
  ],
  'y10-3j-q11b': [
    { explanation: "Starting from \\\\(s = ut + \\frac{1}{2}at^2\\\\), subtract \\\\(ut\\\\) from both sides.", workingOut: "\\\\(s - ut = \\frac{1}{2}at^2\\\\)", graphData: null },
    { explanation: "Multiply both sides by 2: \\\\(2(s-ut) = at^2\\\\). Divide by \\\\(t^2\\\\).", workingOut: "\\\\(a = \\frac{2(s-ut)}{t^2}\\\\)", graphData: null },
    { explanation: "\\\\(a\\\\) is now the subject.", workingOut: "\\\\(a = \\frac{2(s-ut)}{t^2}\\\\)", graphData: null }
  ],

  // ── PENDULUM (q12) ────────────────────────────────────────
  'y10-3j-q12b': [
    { explanation: "Substitute \\\\(T=4\\\\) and \\\\(g=9.8\\\\) into \\\\(T=2\\pi\\sqrt{\\frac{p}{g}}\\\\) and solve for \\\\(p\\\\).", workingOut: "\\\\(4 = 2\\pi\\sqrt{\\frac{p}{9.8}}\\\\)", graphData: null },
    { explanation: "Divide by \\\\(2\\pi\\\\): \\\\(\\frac{2}{\\pi}=\\sqrt{\\frac{p}{9.8}}\\\\). Square both sides: \\\\(\\frac{4}{\\pi^2}=\\frac{p}{9.8}\\\\).", workingOut: "\\\\(p = \\frac{4 \\times 9.8}{\\pi^2} \\approx 3.97\\\\)", graphData: null },
    { explanation: "\\\\(p \\approx 3.97\\\\) m (given answer \\\\(\\approx 4\\\\) m).", workingOut: "\\\\(p \\approx 3.97 \\text{ m}\\\\)", graphData: null }
  ],

  // ── REARRANGE (q13) ───────────────────────────────────────
  'y10-3j-q13a': [
    { explanation: "Starting from \\\\(px + q = r\\\\), subtract \\\\(q\\\\) from both sides.", workingOut: "\\\\(px = r - q\\\\)", graphData: null },
    { explanation: "Divide both sides by \\\\(p\\\\).", workingOut: "\\\\(x = \\frac{r-q}{p}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is now the subject.", workingOut: "\\\\(x = \\frac{r-q}{p}\\\\)", graphData: null }
  ],
  'y10-3j-q13b': [
    { explanation: "Divide both sides of \\\\(p(x+q)=r\\\\) by \\\\(p\\\\).", workingOut: "\\\\(x + q = \\frac{r}{p}\\\\)", graphData: null },
    { explanation: "Subtract \\\\(q\\\\) from both sides.", workingOut: "\\\\(x = \\frac{r}{p} - q\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is now the subject.", workingOut: "\\\\(x = \\frac{r}{p} - q\\\\)", graphData: null }
  ],
  'y10-3j-q13c': [
    { explanation: "From \\\\(\\frac{x}{p} - q = r\\\\), add \\\\(q\\\\) to both sides.", workingOut: "\\\\(\\frac{x}{p} = r + q\\\\)", graphData: null },
    { explanation: "Multiply both sides by \\\\(p\\\\).", workingOut: "\\\\(x = p(r+q)\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is now the subject.", workingOut: "\\\\(x = p(r+q)\\\\)", graphData: null }
  ],
  'y10-3j-q13d': [
    { explanation: "From \\\\(\\frac{p}{x} = q\\\\), multiply both sides by \\\\(x\\\\): \\\\(p = qx\\\\).", workingOut: "\\\\(p = qx\\\\)", graphData: null },
    { explanation: "Divide both sides by \\\\(q\\\\).", workingOut: "\\\\(x = \\frac{p}{q}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is now the subject.", workingOut: "\\\\(x = \\frac{p}{q}\\\\)", graphData: null }
  ],
  'y10-3j-q13e': [
    { explanation: "From \\\\(p = \\frac{q}{x} + r\\\\), subtract \\\\(r\\\\): \\\\(p-r = \\frac{q}{x}\\\\).", workingOut: "\\\\(p - r = \\frac{q}{x}\\\\)", graphData: null },
    { explanation: "Multiply by \\\\(x\\\\): \\\\(x(p-r)=q\\\\). Divide by \\\\((p-r)\\\\).", workingOut: "\\\\(x = \\frac{q}{p-r}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is now the subject.", workingOut: "\\\\(x = \\frac{q}{p-r}\\\\)", graphData: null }
  ],
  'y10-3j-q13f': [
    { explanation: "From \\\\(\\frac{1}{x} + \\frac{1}{m} = \\frac{1}{n}\\\\), subtract \\\\(\\frac{1}{m}\\\\): \\\\(\\frac{1}{x} = \\frac{1}{n} - \\frac{1}{m}\\\\).", workingOut: "\\\\(\\frac{1}{x} = \\frac{1}{n} - \\frac{1}{m}\\\\)", graphData: null },
    { explanation: "Find common denominator: \\\\(\\frac{1}{x} = \\frac{m-n}{mn}\\\\). Take reciprocal of both sides.", workingOut: "\\\\(x = \\frac{mn}{m-n}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is now the subject.", workingOut: "\\\\(x = \\frac{mn}{m-n}\\\\)", graphData: null }
  ],
  'y10-3j-q13g': [
    { explanation: "From \\\\(p = \\frac{q+x}{q-x}\\\\), multiply both sides by \\\\((q-x)\\\\): \\\\(p(q-x) = q+x\\\\).", workingOut: "\\\\(pq - px = q + x\\\\)", graphData: null },
    { explanation: "Collect \\\\(x\\\\) terms: \\\\(pq-q = x+px = x(1+p)\\\\).", workingOut: "\\\\(x = \\frac{q(p-1)}{p+1}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is now the subject.", workingOut: "\\\\(x = \\frac{q(p-1)}{p+1}\\\\)", graphData: null }
  ],
  'y10-3j-q13h': [
    { explanation: "From \\\\(q = \\sqrt{\\frac{p+x}{p-x}}\\\\), square both sides: \\\\(q^2 = \\frac{p+x}{p-x}\\\\).", workingOut: "\\\\(q^2(p-x) = p+x\\\\)", graphData: null },
    { explanation: "Expand: \\\\(pq^2-xq^2=p+x\\\\). Collect \\\\(x\\\\): \\\\(pq^2-p = x+xq^2 = x(1+q^2)\\\\).", workingOut: "\\\\(x = \\frac{p(q^2-1)}{q^2+1}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is now the subject.", workingOut: "\\\\(x = \\frac{p(q^2-1)}{q^2+1}\\\\)", graphData: null }
  ],
  'y10-3j-q13i': [
    { explanation: "From \\\\(p = q\\sqrt{\\frac{x+r}{x-r}}\\\\), divide by \\\\(q\\\\): \\\\(\\frac{p}{q}=\\sqrt{\\frac{x+r}{x-r}}\\\\). Square: \\\\(\\frac{p^2}{q^2}=\\frac{x+r}{x-r}\\\\).", workingOut: "\\\\(p^2(x-r) = q^2(x+r)\\\\)", graphData: null },
    { explanation: "Expand: \\\\(p^2x - p^2r = q^2x + q^2r\\\\). Collect: \\\\(x(p^2-q^2)=r(p^2+q^2)\\\\).", workingOut: "\\\\(x = \\frac{r(p^2+q^2)}{p^2-q^2}\\\\)", graphData: null },
    { explanation: "\\\\(x\\\\) is now the subject.", workingOut: "\\\\(x = \\frac{r(p^2+q^2)}{p^2-q^2}\\\\)", graphData: null }
  ],
  'y10-3j-q13j': [
    { explanation: "From \\\\(T = 2\\pi\\sqrt{\\frac{L}{g}}\\\\), divide by \\\\(2\\pi\\\\): \\\\(\\frac{T}{2\\pi}=\\sqrt{\\frac{L}{g}}\\\\). Square both sides.", workingOut: "\\\\(\\frac{T^2}{4\\pi^2} = \\frac{L}{g}\\\\)", graphData: null },
    { explanation: "Multiply both sides by \\\\(g\\\\).", workingOut: "\\\\(L = \\frac{gT^2}{4\\pi^2}\\\\)", graphData: null },
    { explanation: "\\\\(L\\\\) is now the subject.", workingOut: "\\\\(L = \\frac{gT^2}{4\\pi^2}\\\\)", graphData: null }
  ],

  // ── EXPAND DOTS (q14) ─────────────────────────────────────
  'y10-3j-q14a': [
    { explanation: "Recognise the difference of two squares pattern: \\\\((a+b)(a-b) = a^2-b^2\\\\). Here \\\\(a=x\\\\) and \\\\(b=4\\\\).", workingOut: "\\\\((x+4)(x-4) = x^2 - 4^2\\\\)", graphData: null },
    { explanation: "Calculate \\\\(4^2 = 16\\\\).", workingOut: "\\\\(x^2 - 16\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(x^2 - 16\\\\).", workingOut: "\\\\(x^2 - 16\\\\)", graphData: null }
  ],
  'y10-3j-q14b': [
    { explanation: "Apply DOTS: \\\\((x+3)(x-3) = x^2 - 3^2\\\\).", workingOut: "\\\\(x^2 - 9\\\\)", graphData: null },
    { explanation: "Calculate \\\\(3^2 = 9\\\\).", workingOut: "\\\\(x^2 - 9\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(x^2 - 9\\\\).", workingOut: "\\\\(x^2 - 9\\\\)", graphData: null }
  ],
  'y10-3j-q14c': [
    { explanation: "Apply DOTS: \\\\((2a+3)(2a-3) = (2a)^2 - 3^2\\\\).", workingOut: "\\\\(4a^2 - 9\\\\)", graphData: null },
    { explanation: "Calculate: \\\\((2a)^2=4a^2\\\\) and \\\\(3^2=9\\\\).", workingOut: "\\\\(4a^2 - 9\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(4a^2 - 9\\\\).", workingOut: "\\\\(4a^2 - 9\\\\)", graphData: null }
  ],
  'y10-3j-q14d': [
    { explanation: "Apply DOTS: \\\\((4x+3y)(4x-3y) = (4x)^2 - (3y)^2\\\\).", workingOut: "\\\\(16x^2 - 9y^2\\\\)", graphData: null },
    { explanation: "Calculate: \\\\((4x)^2=16x^2\\\\) and \\\\((3y)^2=9y^2\\\\).", workingOut: "\\\\(16x^2 - 9y^2\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(16x^2 - 9y^2\\\\).", workingOut: "\\\\(16x^2 - 9y^2\\\\)", graphData: null }
  ],
  'y10-3j-q14e': [
    { explanation: "Apply DOTS: \\\\((\\frac{a}{3}+2)(\\frac{a}{3}-2) = (\\frac{a}{3})^2 - 2^2\\\\).", workingOut: "\\\\(\\frac{a^2}{9} - 4\\\\)", graphData: null },
    { explanation: "Calculate: \\\\((\\frac{a}{3})^2=\\frac{a^2}{9}\\\\) and \\\\(2^2=4\\\\).", workingOut: "\\\\(\\frac{a^2}{9} - 4\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(\\frac{a^2}{9} - 4\\\\).", workingOut: "\\\\(\\frac{a^2}{9} - 4\\\\)", graphData: null }
  ],
  'y10-3j-q14f': [
    { explanation: "Apply DOTS: \\\\((\\frac{x}{2}+\\frac{y}{3})(\\frac{x}{2}-\\frac{y}{3}) = (\\frac{x}{2})^2 - (\\frac{y}{3})^2\\\\).", workingOut: "\\\\(\\frac{x^2}{4} - \\frac{y^2}{9}\\\\)", graphData: null },
    { explanation: "Final answer: \\\\(\\frac{x^2}{4} - \\frac{y^2}{9}\\\\).", workingOut: "\\\\(\\frac{x^2}{4} - \\frac{y^2}{9}\\\\)", graphData: null },
    { explanation: "\\\\(\\frac{x^2}{4} - \\frac{y^2}{9}\\\\).", workingOut: "\\\\(\\frac{x^2}{4} - \\frac{y^2}{9}\\\\)", graphData: null }
  ],

  // ── FACTORISE DOTS (q15) ──────────────────────────────────
  'y10-3j-q15a': [
    { explanation: "Recognise \\\\(x^2-25 = x^2 - 5^2\\\\), a difference of two squares.", workingOut: "\\\\(x^2 - 5^2\\\\)", graphData: null },
    { explanation: "Apply: \\\\(a^2-b^2 = (a+b)(a-b)\\\\) with \\\\(a=x, b=5\\\\).", workingOut: "\\\\((x+5)(x-5)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\((x+5)(x-5)\\\\).", workingOut: "\\\\((x+5)(x-5)\\\\)", graphData: null }
  ],
  'y10-3j-q15b': [
    { explanation: "Recognise \\\\(a^2-49 = a^2 - 7^2\\\\).", workingOut: "\\\\(a^2 - 7^2\\\\)", graphData: null },
    { explanation: "Apply DOTS: \\\\((a+7)(a-7)\\\\).", workingOut: "\\\\((a+7)(a-7)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\((a+7)(a-7)\\\\).", workingOut: "\\\\((a+7)(a-7)\\\\)", graphData: null }
  ],
  'y10-3j-q15c': [
    { explanation: "\\\\(4x^2-9 = (2x)^2 - 3^2\\\\).", workingOut: "\\\\((2x)^2 - 3^2\\\\)", graphData: null },
    { explanation: "Apply DOTS: \\\\((2x+3)(2x-3)\\\\).", workingOut: "\\\\((2x+3)(2x-3)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\((2x+3)(2x-3)\\\\).", workingOut: "\\\\((2x+3)(2x-3)\\\\)", graphData: null }
  ],
  'y10-3j-q15d': [
    { explanation: "\\\\(9a^2-16b^2 = (3a)^2 - (4b)^2\\\\).", workingOut: "\\\\((3a)^2 - (4b)^2\\\\)", graphData: null },
    { explanation: "Apply DOTS: \\\\((3a+4b)(3a-4b)\\\\).", workingOut: "\\\\((3a+4b)(3a-4b)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\((3a+4b)(3a-4b)\\\\).", workingOut: "\\\\((3a+4b)(3a-4b)\\\\)", graphData: null }
  ],
  'y10-3j-q15e': [
    { explanation: "First factor out any common factor: \\\\(2x^2-50 = 2(x^2-25)\\\\).", workingOut: "\\\\(2(x^2-25)\\\\)", graphData: null },
    { explanation: "Now apply DOTS inside: \\\\(x^2-25=(x+5)(x-5)\\\\).", workingOut: "\\\\(2(x+5)(x-5)\\\\)", graphData: null },
    { explanation: "Final factorised form: \\\\(2(x+5)(x-5)\\\\).", workingOut: "\\\\(2(x+5)(x-5)\\\\)", graphData: null }
  ],
  'y10-3j-q15f': [
    { explanation: "\\\\(3a^2-48 = 3(a^2-16) = 3(a^2 - 4^2)\\\\).", workingOut: "\\\\(3(a^2-16)\\\\)", graphData: null },
    { explanation: "Apply DOTS: \\\\(3(a+4)(a-4)\\\\).", workingOut: "\\\\(3(a+4)(a-4)\\\\)", graphData: null },
    { explanation: "Final: \\\\(3(a+4)(a-4)\\\\).", workingOut: "\\\\(3(a+4)(a-4)\\\\)", graphData: null }
  ],

  // ── FACTORISE monic quadratics (q16) ─────────────────────
  'y10-3j-q16a': [
    { explanation: "Factorise \\\\(x^2+5x+6\\\\): find two numbers that multiply to \\\\(6\\\\) and add to \\\\(5\\\\).", workingOut: "\\\\(2 \\times 3 = 6, \\quad 2 + 3 = 5\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+2)(x+3)\\\\).", workingOut: "\\\\((x+2)(x+3)\\\\)", graphData: null },
    { explanation: "Check: \\\\((x+2)(x+3)=x^2+5x+6\\\\) ✓", workingOut: "\\\\((x+2)(x+3)\\\\)", graphData: null }
  ],
  'y10-3j-q16b': [
    { explanation: "\\\\(x^2+7x+12\\\\): find two numbers that multiply to \\\\(12\\\\) and add to \\\\(7\\\\).", workingOut: "\\\\(3 \\times 4 = 12, \\quad 3 + 4 = 7\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+3)(x+4)\\\\).", workingOut: "\\\\((x+3)(x+4)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(x+4)\\\\).", workingOut: "\\\\((x+3)(x+4)\\\\)", graphData: null }
  ],
  'y10-3j-q16c': [
    { explanation: "\\\\(x^2-7x+12\\\\): find two numbers that multiply to \\\\(12\\\\) and add to \\\\(-7\\\\).", workingOut: "\\\\(-3 \\times -4 = 12, \\quad -3+(-4) = -7\\\\)", graphData: null },
    { explanation: "Write as \\\\((x-3)(x-4)\\\\).", workingOut: "\\\\((x-3)(x-4)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x-3)(x-4)\\\\).", workingOut: "\\\\((x-3)(x-4)\\\\)", graphData: null }
  ],
  'y10-3j-q16d': [
    { explanation: "\\\\(x^2-x-12\\\\): find two numbers that multiply to \\\\(-12\\\\) and add to \\\\(-1\\\\).", workingOut: "\\\\(3 \\times (-4) = -12, \\quad 3+(-4) = -1\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+3)(x-4)\\\\).", workingOut: "\\\\((x+3)(x-4)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(x-4)\\\\).", workingOut: "\\\\((x+3)(x-4)\\\\)", graphData: null }
  ],
  'y10-3j-q16e': [
    { explanation: "\\\\(x^2+2x-15\\\\): find two numbers that multiply to \\\\(-15\\\\) and add to \\\\(2\\\\).", workingOut: "\\\\(5 \\times (-3) = -15, \\quad 5+(-3) = 2\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+5)(x-3)\\\\).", workingOut: "\\\\((x+5)(x-3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+5)(x-3)\\\\).", workingOut: "\\\\((x+5)(x-3)\\\\)", graphData: null }
  ],
  'y10-3j-q16f': [
    { explanation: "\\\\(x^2-2x-15\\\\): multiply to \\\\(-15\\\\), add to \\\\(-2\\\\): \\\\(3\\\\) and \\\\(-5\\\\).", workingOut: "\\\\(3 \\times (-5) = -15, \\quad 3+(-5) = -2\\\\)", graphData: null },
    { explanation: "Write as \\\\((x+3)(x-5)\\\\).", workingOut: "\\\\((x+3)(x-5)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(x-5)\\\\).", workingOut: "\\\\((x+3)(x-5)\\\\)", graphData: null }
  ],

  // ── NON-MONIC FACTORISE (q17) ─────────────────────────────
  'y10-3j-q17a': [
    { explanation: "For \\\\(2x^2+7x+3\\\\): multiply \\\\(a \\cdot c = 2 \\times 3 = 6\\\\). Find two numbers that multiply to 6 and add to 7: \\\\(1\\\\) and \\\\(6\\\\).", workingOut: "\\\\(2x^2 + x + 6x + 3\\\\)", graphData: null },
    { explanation: "Group and factorise: \\\\(x(2x+1)+3(2x+1)\\\\).", workingOut: "\\\\((x+3)(2x+1)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(2x+1)\\\\).", workingOut: "\\\\((x+3)(2x+1)\\\\)", graphData: null }
  ],
  'y10-3j-q17b': [
    { explanation: "For \\\\(3x^2+10x+3\\\\): \\\\(ac=9\\\\). Numbers multiplying to 9 adding to 10: \\\\(1\\\\) and \\\\(9\\\\).", workingOut: "\\\\(3x^2 + x + 9x + 3\\\\)", graphData: null },
    { explanation: "Group: \\\\(x(3x+1)+3(3x+1) = (x+3)(3x+1)\\\\).", workingOut: "\\\\((x+3)(3x+1)\\\\)", graphData: null },
    { explanation: "Final: \\\\((x+3)(3x+1)\\\\).", workingOut: "\\\\((x+3)(3x+1)\\\\)", graphData: null }
  ],
  'y10-3j-q17c': [
    { explanation: "For \\\\(6x^2+x-2\\\\): \\\\(ac=-12\\\\). Numbers: \\\\(4\\\\) and \\\\(-3\\\\) (multiply to \\\\(-12\\\\), add to \\\\(1\\\\)).", workingOut: "\\\\(6x^2 + 4x - 3x - 2\\\\)", graphData: null },
    { explanation: "Group: \\\\(2x(3x+2)-1(3x+2)=(2x-1)(3x+2)\\\\).", workingOut: "\\\\((2x-1)(3x+2)\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x-1)(3x+2)\\\\).", workingOut: "\\\\((2x-1)(3x+2)\\\\)", graphData: null }
  ],
  'y10-3j-q17d': [
    { explanation: "For \\\\(4x^2-4x-3\\\\): \\\\(ac=-12\\\\). Numbers: \\\\(-6\\\\) and \\\\(2\\\\) (multiply to \\\\(-12\\\\), add to \\\\(-4\\\\)).", workingOut: "\\\\(4x^2 - 6x + 2x - 3\\\\)", graphData: null },
    { explanation: "Group: \\\\(2x(2x-3)+1(2x-3)=(2x+1)(2x-3)\\\\).", workingOut: "\\\\((2x+1)(2x-3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x+1)(2x-3)\\\\).", workingOut: "\\\\((2x+1)(2x-3)\\\\)", graphData: null }
  ],
  'y10-3j-q17e': [
    { explanation: "For \\\\(6x^2-13x+6\\\\): \\\\(ac=36\\\\). Numbers: \\\\(-9\\\\) and \\\\(-4\\\\) (multiply to \\\\(36\\\\), add to \\\\(-13\\\\)).", workingOut: "\\\\(6x^2 - 9x - 4x + 6\\\\)", graphData: null },
    { explanation: "Group: \\\\(3x(2x-3)-2(2x-3)=(3x-2)(2x-3)\\\\).", workingOut: "\\\\((3x-2)(2x-3)\\\\)", graphData: null },
    { explanation: "Final: \\\\((3x-2)(2x-3)\\\\).", workingOut: "\\\\((3x-2)(2x-3)\\\\)", graphData: null }
  ],
  'y10-3j-q17f': [
    { explanation: "For \\\\(4x^2+12x+9\\\\): recognise \\\\((2x)^2 + 2(2x)(3) + 3^2\\\\) — a perfect square.", workingOut: "\\\\((2x+3)^2\\\\)", graphData: null },
    { explanation: "Perfect square: \\\\((2x+3)^2\\\\).", workingOut: "\\\\((2x+3)^2\\\\)", graphData: null },
    { explanation: "Final: \\\\((2x+3)^2\\\\).", workingOut: "\\\\((2x+3)^2\\\\)", graphData: null }
  ],

  // ── SOLVE QUADRATICS (q18) ────────────────────────────────
  'y10-3j-q18a': [
    { explanation: "Factorise \\\\(x^2+5x+6=0\\\\): find numbers multiplying to 6 adding to 5 → \\\\(2\\\\) and \\\\(3\\\\).", workingOut: "\\\\((x+2)(x+3) = 0\\\\)", graphData: null },
    { explanation: "Set each factor to zero: \\\\(x+2=0\\\\) or \\\\(x+3=0\\\\).", workingOut: "\\\\(x = -2 \\text{ or } x = -3\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x = -2\\\\) or \\\\(x = -3\\\\).", workingOut: "\\\\(x = -2 \\text{ or } x = -3\\\\)", graphData: null }
  ],
  'y10-3j-q18b': [
    { explanation: "Factorise \\\\(x^2-7x+10=0\\\\): numbers multiplying to 10 adding to \\\\(-7\\\\): \\\\(-2\\\\) and \\\\(-5\\\\).", workingOut: "\\\\((x-2)(x-5) = 0\\\\)", graphData: null },
    { explanation: "\\\\(x-2=0\\\\) or \\\\(x-5=0\\\\).", workingOut: "\\\\(x = 2 \\text{ or } x = 5\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=2\\\\) or \\\\(x=5\\\\).", workingOut: "\\\\(x = 2 \\text{ or } x = 5\\\\)", graphData: null }
  ],
  'y10-3j-q18c': [
    { explanation: "Rearrange \\\\(x^2=9\\\\): take square roots of both sides.", workingOut: "\\\\(x = \\pm\\sqrt{9} = \\pm 3\\\\)", graphData: null },
    { explanation: "\\\\(x = 3\\\\) or \\\\(x = -3\\\\).", workingOut: "\\\\(x = \\pm 3\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=3\\\\) or \\\\(x=-3\\\\).", workingOut: "\\\\(x = \\pm 3\\\\)", graphData: null }
  ],
  'y10-3j-q18d': [
    { explanation: "Rearrange: \\\\(2x^2-8=0 \\Rightarrow x^2=4\\\\). Take square roots.", workingOut: "\\\\(x = \\pm\\sqrt{4} = \\pm 2\\\\)", graphData: null },
    { explanation: "\\\\(x=2\\\\) or \\\\(x=-2\\\\).", workingOut: "\\\\(x = \\pm 2\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=2\\\\) or \\\\(x=-2\\\\).", workingOut: "\\\\(x = \\pm 2\\\\)", graphData: null }
  ],
  'y10-3j-q18e': [
    { explanation: "Expand and rearrange \\\\(x^2+2x=8\\\\) to \\\\(x^2+2x-8=0\\\\). Factorise: numbers to \\\\(-8\\\\) adding \\\\(2\\\\): \\\\(4\\\\) and \\\\(-2\\\\).", workingOut: "\\\\((x+4)(x-2) = 0\\\\)", graphData: null },
    { explanation: "\\\\(x=-4\\\\) or \\\\(x=2\\\\).", workingOut: "\\\\(x = -4 \\text{ or } x = 2\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=-4\\\\) or \\\\(x=2\\\\).", workingOut: "\\\\(x = -4 \\text{ or } x = 2\\\\)", graphData: null }
  ],
  'y10-3j-q18f': [
    { explanation: "Rearrange: \\\\(x^2-5x=0 \\Rightarrow x(x-5)=0\\\\).", workingOut: "\\\\(x(x-5) = 0\\\\)", graphData: null },
    { explanation: "\\\\(x=0\\\\) or \\\\(x=5\\\\).", workingOut: "\\\\(x = 0 \\text{ or } x = 5\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=0\\\\) or \\\\(x=5\\\\).", workingOut: "\\\\(x = 0 \\text{ or } x = 5\\\\)", graphData: null }
  ],

  // ── QUADRATIC FORMULA (q19) ───────────────────────────────
  'y10-3j-q19a': [
    { explanation: "For \\\\(x^2+6x+4=0\\\\): identify \\\\(a=1, b=6, c=4\\\\). Discriminant: \\\\(\\Delta = 36-16=20\\\\).", workingOut: "\\\\(x = \\frac{-6 \\pm \\sqrt{20}}{2}\\\\)", graphData: null },
    { explanation: "Simplify \\\\(\\sqrt{20}=2\\sqrt{5}\\\\): \\\\(x=\\frac{-6\\pm2\\sqrt{5}}{2}=-3\\pm\\sqrt{5}\\\\).", workingOut: "\\\\(x = -3 \\pm \\sqrt{5}\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=-3+\\sqrt{5}\\\\) or \\\\(x=-3-\\sqrt{5}\\\\).", workingOut: "\\\\(x = -3 \\pm \\sqrt{5}\\\\)", graphData: null }
  ],
  'y10-3j-q19b': [
    { explanation: "For \\\\(2x^2-3x-1=0\\\\): \\\\(a=2,b=-3,c=-1\\\\). \\\\(\\Delta=9+8=17\\\\).", workingOut: "\\\\(x = \\frac{3 \\pm \\sqrt{17}}{4}\\\\)", graphData: null },
    { explanation: "Two solutions from \\\\(\\pm\\sqrt{17}\\\\).", workingOut: "\\\\(x = \\frac{3+\\sqrt{17}}{4} \\text{ or } \\frac{3-\\sqrt{17}}{4}\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x \\approx 1.78\\\\) or \\\\(x \\approx -0.28\\\\).", workingOut: "\\\\(x = \\frac{3 \\pm \\sqrt{17}}{4}\\\\)", graphData: null }
  ],
  'y10-3j-q19c': [
    { explanation: "Rearrange to \\\\(x^2-4x+1=0\\\\). \\\\(a=1,b=-4,c=1\\\\). \\\\(\\Delta=16-4=12\\\\).", workingOut: "\\\\(x = \\frac{4 \\pm \\sqrt{12}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2}\\\\)", graphData: null },
    { explanation: "Simplify: \\\\(x=2\\pm\\sqrt{3}\\\\).", workingOut: "\\\\(x = 2 \\pm \\sqrt{3}\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=2+\\sqrt{3}\\\\) or \\\\(x=2-\\sqrt{3}\\\\).", workingOut: "\\\\(x = 2 \\pm \\sqrt{3}\\\\)", graphData: null }
  ],
  'y10-3j-q19d': [
    { explanation: "Rearrange \\\\(3x^2+5x=2\\\\) to \\\\(3x^2+5x-2=0\\\\). \\\\(\\Delta=25+24=49\\\\).", workingOut: "\\\\(x = \\frac{-5 \\pm 7}{6}\\\\)", graphData: null },
    { explanation: "\\\\(x=\\frac{2}{6}=\\frac{1}{3}\\\\) or \\\\(x=\\frac{-12}{6}=-2\\\\).", workingOut: "\\\\(x = \\frac{1}{3} \\text{ or } x = -2\\\\)", graphData: null },
    { explanation: "Solutions: \\\\(x=\\frac{1}{3}\\\\) or \\\\(x=-2\\\\).", workingOut: "\\\\(x = \\frac{1}{3} \\text{ or } x = -2\\\\)", graphData: null }
  ],

  // ── SIMULTANEOUS EQUATIONS (q20) ─────────────────────────
  'y10-3j-q20a': [
    { explanation: "Add the equations to eliminate \\\\(y\\\\): \\\\((2x+y)+(x-y)=9+3\\\\) gives \\\\(3x=12\\\\).", workingOut: "\\\\(3x = 12 \\Rightarrow x = 4\\\\)", graphData: null },
    { explanation: "Substitute \\\\(x=4\\\\) into \\\\(x-y=3\\\\): \\\\(4-y=3 \\Rightarrow y=1\\\\).", workingOut: "\\\\(y = 1\\\\)", graphData: null },
    { explanation: "Solution: \\\\(x=4, y=1\\\\).", workingOut: "\\\\(x=4, \\quad y=1\\\\)", graphData: null }
  ],
  'y10-3j-q20b': [
    { explanation: "Multiply first equation by 2: \\\\(2x+6y=14\\\\). Subtract second: \\\\((2x+6y)-(2x+3y)=14-8\\\\) gives \\\\(3y=6\\\\).", workingOut: "\\\\(3y = 6 \\Rightarrow y = 2\\\\)", graphData: null },
    { explanation: "Substitute \\\\(y=2\\\\) into \\\\(x+3(2)=7\\\\): \\\\(x=1\\\\).", workingOut: "\\\\(x = 1\\\\)", graphData: null },
    { explanation: "Solution: \\\\(x=1, y=2\\\\).", workingOut: "\\\\(x=1, \\quad y=2\\\\)", graphData: null }
  ],
  'y10-3j-q20c': [
    { explanation: "From \\\\(y=2x-1\\\\), substitute into \\\\(3x+2y=12\\\\): \\\\(3x+2(2x-1)=12\\\\).", workingOut: "\\\\(3x + 4x - 2 = 12 \\Rightarrow 7x = 14\\\\)", graphData: null },
    { explanation: "\\\\(x=2\\\\). Substitute: \\\\(y=2(2)-1=3\\\\).", workingOut: "\\\\(x=2, \\quad y=3\\\\)", graphData: null },
    { explanation: "Solution: \\\\(x=2, y=3\\\\).", workingOut: "\\\\(x=2, \\quad y=3\\\\)", graphData: null }
  ],
  'y10-3j-q20d': [
    { explanation: "From first equation: \\\\(y=8-3x\\\\). Substitute into second: \\\\(2x-2(8-3x)=2\\\\).", workingOut: "\\\\(2x - 16 + 6x = 2 \\Rightarrow 8x = 18\\\\)", graphData: null },
    { explanation: "\\\\(x=\\frac{9}{4}\\\\). \\\\(y=8-3(\\frac{9}{4})=\\frac{5}{4}\\\\).", workingOut: "\\\\(x = \\frac{9}{4}, \\quad y = \\frac{5}{4}\\\\)", graphData: null },
    { explanation: "Solution: \\\\(x=\\frac{9}{4}, y=\\frac{5}{4}\\\\).", workingOut: "\\\\(x = \\frac{9}{4}, \\quad y = \\frac{5}{4}\\\\)", graphData: null }
  ],

  // ── ALGEBRAIC FRACTIONS (q21) ─────────────────────────────
  'y10-3j-q21a': [
    { explanation: "LCD of 4 and 5 is 20. Multiply each fraction to get denominator 20.", workingOut: "\\\\(\\frac{5(5x-2)}{20} + \\frac{4(2x-3)}{20}\\\\)", graphData: null },
    { explanation: "Expand numerators: \\\\(25x-10+8x-12=33x-22\\\\).", workingOut: "\\\\(\\frac{33x-22}{20}\\\\)", graphData: null },
    { explanation: "Simplify: factor numerator \\\\(11(3x-2)\\\\). Final: \\\\(\\frac{11(3x-2)}{20}\\\\).", workingOut: "\\\\(\\frac{11(3x-2)}{20}\\\\)", graphData: null }
  ],
  'y10-3j-q21b': [
    { explanation: "LCD is \\\\((x+2)(x+3)\\\\). Rewrite both fractions with this denominator.", workingOut: "\\\\(\\frac{3(x+3)}{(x+2)(x+3)} + \\frac{4(x+2)}{(x+2)(x+3)}\\\\)", graphData: null },
    { explanation: "Combine numerators: \\\\(3(x+3)+4(x+2)=3x+9+4x+8=7x+17\\\\).", workingOut: "\\\\(\\frac{7x+17}{(x+2)(x+3)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{7x+17}{(x+2)(x+3)}\\\\).", workingOut: "\\\\(\\frac{7x+17}{(x+2)(x+3)}\\\\)", graphData: null }
  ],
  'y10-3j-q21c': [
    { explanation: "LCD is \\\\((x+3)(x-2)\\\\). Rewrite: \\\\(\\frac{2(x-2)}{(x+3)(x-2)} - \\frac{5(x+3)}{(x+3)(x-2)}\\\\).", workingOut: "\\\\(\\frac{2(x-2) - 5(x+3)}{(x+3)(x-2)}\\\\)", graphData: null },
    { explanation: "Expand: \\\\(2x-4-5x-15=-3x-19\\\\).", workingOut: "\\\\(\\frac{-3x-19}{(x+3)(x-2)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{-(3x+19)}{(x+3)(x-2)}\\\\).", workingOut: "\\\\(\\frac{-(3x+19)}{(x+3)(x-2)}\\\\)", graphData: null }
  ],
  'y10-3j-q21d': [
    { explanation: "Factorise denominators: \\\\(3x^2+2x=x(3x+2)\\\\) and \\\\(3x^2+5x+2=(3x+2)(x+1)\\\\). LCD = \\\\(x(3x+2)(x+1)\\\\).", workingOut: "\\\\(\\frac{3(x+1)}{x(3x+2)(x+1)} - \\frac{2x}{x(3x+2)(x+1)}\\\\)", graphData: null },
    { explanation: "Combine: \\\\(\\frac{3x+3-2x}{x(3x+2)(x+1)}=\\frac{x+3}{x(3x+2)(x+1)}\\\\).", workingOut: "\\\\(\\frac{x+3}{x(3x+2)(x+1)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{x+3}{x(3x+2)(x+1)}\\\\).", workingOut: "\\\\(\\frac{x+3}{x(3x+2)(x+1)}\\\\)", graphData: null }
  ],
  'y10-3j-q21e': [
    { explanation: "Factorise: \\\\(x^2+2x=x(x+2)\\\\) and \\\\(x^2-4=(x+2)(x-2)\\\\). LCD=\\\\(x(x+2)(x-2)\\\\).", workingOut: "\\\\(\\frac{5(x-2)}{x(x+2)(x-2)} - \\frac{2x}{x(x+2)(x-2)}\\\\)", graphData: null },
    { explanation: "Combine: \\\\(\\frac{5x-10-2x}{x(x+2)(x-2)}=\\frac{3x-10}{x(x+2)(x-2)}\\\\).", workingOut: "\\\\(\\frac{3x-10}{x(x+2)(x-2)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{3x-10}{x(x+2)(x-2)}\\\\).", workingOut: "\\\\(\\frac{3x-10}{x(x+2)(x-2)}\\\\)", graphData: null }
  ],
  'y10-3j-q21f': [
    { explanation: "Factorise: \\\\(x^2-16=(x+4)(x-4)\\\\) and \\\\(4+3x-x^2=-(x^2-3x-4)=-(x-4)(x+1)\\\\). LCD=\\\\((x+4)(x-4)(x+1)\\\\).", workingOut: "\\\\(\\frac{4(x+1)}{(x+4)(x-4)(x+1)} - \\frac{-3(x+4)}{(x+4)(x-4)(x+1)}\\\\)", graphData: null },
    { explanation: "Numerator: \\\\(4(x+1)+3(x+4)=4x+4+3x+12=7x+16\\\\).", workingOut: "\\\\(\\frac{7x+16}{(x+4)(x-4)(x+1)}\\\\)", graphData: null },
    { explanation: "Final: \\\\(\\frac{7x+16}{(x+4)(x-4)(x+1)}\\\\).", workingOut: "\\\\(\\frac{7x+16}{(x+4)(x-4)(x+1)}\\\\)", graphData: null }
  ],
};

async function fixSteps() {
  console.log('Fetching all y10-3j questions from Firestore...');
  const topicRef = collection(db, 'topics', 'y10-3j', 'questions');
  const snapshot = await getDocs(topicRef);

  let fixed = 0;
  let skipped = 0;
  const promises = [];

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const id = data.id || docSnap.id;

    if (FIXED_STEPS[id]) {
      promises.push(
        updateDoc(docSnap.ref, { solutionSteps: FIXED_STEPS[id] })
          .then(() => { fixed++; console.log('Fixed:', id); })
      );
    } else {
      skipped++;
      // console.log('No fix defined for:', id);
    }
  });

  await Promise.all(promises);
  console.log(`\nDone! Fixed: ${fixed}, Skipped (no fix defined): ${skipped}`);
  process.exit(0);
}

fixSteps().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
