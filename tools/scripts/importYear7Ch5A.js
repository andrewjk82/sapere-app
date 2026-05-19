import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Evaluate the product, simplifying where possible: $\\frac{1}{3} \\times \\frac{2}{5}$`,
    options: [`\\frac{2}{16}`, `\\frac{3}{15}`, `\\frac{2}{15}`, `\\frac{15}{2}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{1 \\times 2}{3 \\times 5} = \\frac{2}{15}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{2}{15}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Evaluate the product, simplifying where possible: $\\frac{2}{5} \\times \\frac{3}{7}$`,
    options: [`\\frac{6}{36}`, `\\frac{7}{35}`, `\\frac{6}{35}`, `\\frac{35}{6}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{2 \\times 3}{5 \\times 7} = \\frac{6}{35}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{6}{35}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Evaluate the product, simplifying where possible: $\\frac{1}{3} \\times \\frac{1}{5}$`,
    options: [`\\frac{1}{16}`, `\\frac{2}{15}`, `\\frac{1}{15}`, `15`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{1 \\times 1}{3 \\times 5} = \\frac{1}{15}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{1}{15}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Evaluate the product, simplifying where possible: $\\frac{1}{4} \\times \\frac{3}{5}$`,
    options: [`\\frac{3}{21}`, `\\frac{3}{20}`, `\\frac{4}{20}`, `\\frac{20}{3}`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{1 \\times 3}{4 \\times 5} = \\frac{3}{20}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{3}{20}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Evaluate the product, simplifying where possible: $\\frac{4}{3} \\times \\frac{2}{5}$`,
    options: [`\\frac{8}{15}`, `\\frac{15}{8}`, `\\frac{9}{15}`, `\\frac{8}{16}`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{4 \\times 2}{3 \\times 5} = \\frac{8}{15}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{8}{15}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Evaluate the product, simplifying where possible: $\\frac{4}{9} \\times \\frac{2}{7}$`,
    options: [`\\frac{8}{64}`, `\\frac{63}{8}`, `\\frac{8}{63}`, `\\frac{9}{63}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{4 \\times 2}{9 \\times 7} = \\frac{8}{63}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{8}{63}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Evaluate the product, simplifying where possible: $\\frac{5}{3} \\times \\frac{5}{4}$`,
    options: [`\\frac{25}{13}`, `\\frac{12}{25}`, `\\frac{25}{12}`, `\\frac{26}{12}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{5 \\times 5}{3 \\times 4} = \\frac{25}{12}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{25}{12}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Evaluate the product, simplifying where possible: $\\frac{5}{2} \\times \\frac{3}{8}$`,
    options: [`\\frac{15}{16}`, `\\frac{15}{17}`, `\\frac{16}{16}`, `\\frac{16}{15}`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{5 \\times 3}{2 \\times 8} = \\frac{15}{16}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{15}{16}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Evaluate the product, simplifying where possible: $\\frac{5}{4} \\times \\frac{3}{5}$`,
    options: [`\\frac{4}{4}`, `\\frac{3}{4}`, `\\frac{4}{3}`, `\\frac{3}{5}`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{5 \\times 3}{4 \\times 5} = \\frac{15}{20}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($5$):<br>$\\frac{15 \\div 5}{20 \\div 5} = \\frac{3}{4}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Find: $3 \\times \\frac{2}{5}$`,
    options: [`\\frac{6}{5}`, `\\frac{5}{6}`, `\\frac{7}{5}`, `\\frac{6}{6}`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{3 \\times 2}{1 \\times 5} = \\frac{6}{5}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{6}{5}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Find: $5 \\times \\frac{2}{9}$`,
    options: [`\\frac{9}{10}`, `\\frac{11}{9}`, `\\frac{10}{9}`, `\\frac{10}{10}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{5 \\times 2}{1 \\times 9} = \\frac{10}{9}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{10}{9}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{3}{10} \\times 7$`,
    options: [`\\frac{10}{21}`, `\\frac{21}{10}`, `\\frac{21}{11}`, `\\frac{22}{10}`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{3 \\times 7}{10 \\times 1} = \\frac{21}{10}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{21}{10}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Find: $7 \\times \\frac{3}{4}$`,
    options: [`\\frac{21}{5}`, `\\frac{22}{4}`, `\\frac{4}{21}`, `\\frac{21}{4}`],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{7 \\times 3}{1 \\times 4} = \\frac{21}{4}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{21}{4}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{2}{5} \\times 6$`,
    options: [`\\frac{13}{5}`, `\\frac{5}{12}`, `\\frac{12}{5}`, `\\frac{12}{6}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{2 \\times 6}{5 \\times 1} = \\frac{12}{5}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{12}{5}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{5}{12} \\times 5$`,
    options: [`\\frac{12}{25}`, `\\frac{25}{13}`, `\\frac{25}{12}`, `\\frac{26}{12}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{5 \\times 5}{12 \\times 1} = \\frac{25}{12}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{25}{12}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{1}{4}$ of $\\frac{1}{3}$`,
    options: [`\\frac{1}{12}`, `\\frac{2}{12}`, `\\frac{1}{13}`, `12`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert "of" to multiplication</strong><br>The word "of" means multiply: $\\frac{1}{4} \\times \\frac{1}{3}$.</p><p><strong>Step 2: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{1 \\times 1}{4 \\times 3} = \\frac{1}{12}$</p><p><strong>Step 3: Check for simplification</strong><br>The fraction $\\frac{1}{12}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{1}{5}$ of $\\frac{3}{4}$`,
    options: [`\\frac{3}{21}`, `\\frac{3}{20}`, `\\frac{4}{20}`, `\\frac{20}{3}`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert "of" to multiplication</strong><br>The word "of" means multiply: $\\frac{1}{5} \\times \\frac{3}{4}$.</p><p><strong>Step 2: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{1 \\times 3}{5 \\times 4} = \\frac{3}{20}$</p><p><strong>Step 3: Check for simplification</strong><br>The fraction $\\frac{3}{20}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{3}{7}$ of $\\frac{5}{6}$`,
    options: [`\\frac{6}{14}`, `\\frac{14}{5}`, `\\frac{5}{15}`, `\\frac{5}{14}`],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert "of" to multiplication</strong><br>The word "of" means multiply: $\\frac{3}{7} \\times \\frac{5}{6}$.</p><p><strong>Step 2: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{3 \\times 5}{7 \\times 6} = \\frac{15}{42}$</p><p><strong>Step 3: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($3$):<br>$\\frac{15 \\div 3}{42 \\div 3} = \\frac{5}{14}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{3}{4}$ of $\\frac{4}{3}$`,
    options: [`\\frac{2}{4}`, `2`, `1`, `\\frac{1}{2}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert "of" to multiplication</strong><br>The word "of" means multiply: $\\frac{3}{4} \\times \\frac{4}{3}$.</p><p><strong>Step 2: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{3 \\times 4}{4 \\times 3} = \\frac{12}{12}$</p><p><strong>Step 3: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($12$):<br>$\\frac{12 \\div 12}{12 \\div 12} = 1$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{7}{5}$ of $\\frac{2}{7}$`,
    options: [`\\frac{2}{6}`, `\\frac{3}{5}`, `\\frac{2}{5}`, `\\frac{5}{2}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert "of" to multiplication</strong><br>The word "of" means multiply: $\\frac{7}{5} \\times \\frac{2}{7}$.</p><p><strong>Step 2: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{7 \\times 2}{5 \\times 7} = \\frac{14}{35}$</p><p><strong>Step 3: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($7$):<br>$\\frac{14 \\div 7}{35 \\div 7} = \\frac{2}{5}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{3}{8}$ of $\\frac{5}{2}$`,
    options: [`\\frac{16}{16}`, `\\frac{16}{15}`, `\\frac{15}{16}`, `\\frac{15}{17}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert "of" to multiplication</strong><br>The word "of" means multiply: $\\frac{3}{8} \\times \\frac{5}{2}$.</p><p><strong>Step 2: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{3 \\times 5}{8 \\times 2} = \\frac{15}{16}$</p><p><strong>Step 3: Check for simplification</strong><br>The fraction $\\frac{15}{16}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{3}{5}$ of $7$`,
    options: [`\\frac{22}{5}`, `\\frac{21}{6}`, `\\frac{21}{5}`, `\\frac{5}{21}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert "of" to multiplication</strong><br>The word "of" means multiply: $\\frac{3}{5} \\times 7$.</p><p><strong>Step 2: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{3 \\times 7}{5 \\times 1} = \\frac{21}{5}$</p><p><strong>Step 3: Check for simplification</strong><br>The fraction $\\frac{21}{5}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{2}{7}$ of $11$`,
    options: [`\\frac{7}{22}`, `\\frac{23}{7}`, `\\frac{22}{8}`, `\\frac{22}{7}`],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert "of" to multiplication</strong><br>The word "of" means multiply: $\\frac{2}{7} \\times 11$.</p><p><strong>Step 2: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{2 \\times 11}{7 \\times 1} = \\frac{22}{7}$</p><p><strong>Step 3: Check for simplification</strong><br>The fraction $\\frac{22}{7}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{3}{2} \\times \\frac{8}{9}$`,
    options: [`\\frac{3}{4}`, `\\frac{4}{4}`, `\\frac{4}{3}`, `\\frac{5}{3}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{3 \\times 8}{2 \\times 9} = \\frac{24}{18}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($6$):<br>$\\frac{24 \\div 6}{18 \\div 6} = \\frac{4}{3}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{4}{15} \\times \\frac{5}{7}$`,
    options: [`\\frac{21}{4}`, `\\frac{4}{22}`, `\\frac{5}{21}`, `\\frac{4}{21}`],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{4 \\times 5}{15 \\times 7} = \\frac{20}{105}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($5$):<br>$\\frac{20 \\div 5}{105 \\div 5} = \\frac{4}{21}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{9}{16} \\times \\frac{8}{15}$`,
    options: [`\\frac{3}{10}`, `\\frac{10}{3}`, `\\frac{3}{11}`, `\\frac{4}{10}`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{9 \\times 8}{16 \\times 15} = \\frac{72}{240}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($24$):<br>$\\frac{72 \\div 24}{240 \\div 24} = \\frac{3}{10}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{6}{25} \\times \\frac{5}{18}$`,
    options: [`\\frac{2}{15}`, `\\frac{1}{16}`, `\\frac{1}{15}`, `15`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{6 \\times 5}{25 \\times 18} = \\frac{30}{450}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($30$):<br>$\\frac{30 \\div 30}{450 \\div 30} = \\frac{1}{15}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{13}{14} \\times \\frac{7}{26}$`,
    options: [`4`, `\\frac{1}{4}`, `\\frac{1}{5}`, `\\frac{2}{4}`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{13 \\times 7}{14 \\times 26} = \\frac{91}{364}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($91$):<br>$\\frac{91 \\div 91}{364 \\div 91} = \\frac{1}{4}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{15}{8} \\times \\frac{32}{45}$`,
    options: [`\\frac{3}{4}`, `\\frac{4}{3}`, `\\frac{4}{4}`, `\\frac{5}{3}`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{15 \\times 32}{8 \\times 45} = \\frac{480}{360}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($120$):<br>$\\frac{480 \\div 120}{360 \\div 120} = \\frac{4}{3}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{35}{18} \\times \\frac{27}{49}$`,
    options: [`\\frac{14}{15}`, `\\frac{15}{15}`, `\\frac{15}{14}`, `\\frac{16}{14}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{35 \\times 27}{18 \\times 49} = \\frac{945}{882}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($63$):<br>$\\frac{945 \\div 63}{882 \\div 63} = \\frac{15}{14}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Find: $\\frac{24}{45} \\times \\frac{35}{56}$`,
    options: [`\\frac{1}{3}`, `\\frac{2}{3}`, `\\frac{1}{4}`, `3`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the top numbers together and the bottom numbers together:<br>$\\frac{24 \\times 35}{45 \\times 56} = \\frac{840}{2520}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($840$):<br>$\\frac{840 \\div 840}{2520 \\div 840} = \\frac{1}{3}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{1}{2} \\times \\frac{1}{4} \\times \\frac{1}{5}$`,
    options: [`40`, `\\frac{1}{40}`, `\\frac{2}{40}`, `\\frac{1}{41}`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{1 \\times 1 \\times 1}{2 \\times 4 \\times 5} = \\frac{1}{40}$</p><p><strong>Step 2: Check for simplification</strong><br>The fraction $\\frac{1}{40}$ is already in its simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{2}{3} \\times \\frac{4}{5} \\times \\frac{5}{8}$`,
    options: [`\\frac{2}{3}`, `\\frac{1}{4}`, `3`, `\\frac{1}{3}`],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{2 \\times 4 \\times 5}{3 \\times 5 \\times 8} = \\frac{40}{120}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($40$):<br>$\\frac{40 \\div 40}{120 \\div 40} = \\frac{1}{3}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{1}{3} \\times \\frac{2}{5} \\times \\frac{5}{8}$`,
    options: [`12`, `\\frac{2}{12}`, `\\frac{1}{13}`, `\\frac{1}{12}`],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{1 \\times 2 \\times 5}{3 \\times 5 \\times 8} = \\frac{10}{120}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($10$):<br>$\\frac{10 \\div 10}{120 \\div 10} = \\frac{1}{12}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{2}{5} \\times \\frac{3}{4} \\times \\frac{5}{9}$`,
    options: [`\\frac{1}{6}`, `\\frac{1}{7}`, `6`, `\\frac{2}{6}`],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{2 \\times 3 \\times 5}{5 \\times 4 \\times 9} = \\frac{30}{180}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($30$):<br>$\\frac{30 \\div 30}{180 \\div 30} = \\frac{1}{6}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{5}{14} \\times \\frac{7}{10} \\times \\frac{8}{9}$`,
    options: [`\\frac{3}{9}`, `\\frac{2}{9}`, `\\frac{2}{10}`, `\\frac{9}{2}`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{5 \\times 7 \\times 8}{14 \\times 10 \\times 9} = \\frac{280}{1260}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($140$):<br>$\\frac{280 \\div 140}{1260 \\div 140} = \\frac{2}{9}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{3}{4} \\times \\frac{6}{7} \\times \\frac{14}{27}$`,
    options: [`3`, `\\frac{2}{3}`, `\\frac{1}{3}`, `\\frac{1}{4}`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{3 \\times 6 \\times 14}{4 \\times 7 \\times 27} = \\frac{252}{756}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($252$):<br>$\\frac{252 \\div 252}{756 \\div 252} = \\frac{1}{3}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{4}{9} \\times \\frac{7}{12} \\times \\frac{9}{14}$`,
    options: [`6`, `\\frac{1}{6}`, `\\frac{2}{6}`, `\\frac{1}{7}`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{4 \\times 7 \\times 9}{9 \\times 12 \\times 14} = \\frac{252}{1512}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($252$):<br>$\\frac{252 \\div 252}{1512 \\div 252} = \\frac{1}{6}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{18}{5} \\times \\frac{10}{21} \\times \\frac{7}{12}$`,
    options: [`2`, `\\frac{1}{2}`, `1`, `0`],
    answer: 2,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{18 \\times 10 \\times 7}{5 \\times 21 \\times 12} = \\frac{1260}{1260}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($1260$):<br>$\\frac{1260 \\div 1260}{1260 \\div 1260} = 1$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{7}{12} \\times \\frac{8}{21} \\times \\frac{9}{14}$`,
    options: [`\\frac{2}{7}`, `7`, `\\frac{1}{8}`, `\\frac{1}{7}`],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{7 \\times 8 \\times 9}{12 \\times 21 \\times 14} = \\frac{504}{3528}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($504$):<br>$\\frac{504 \\div 504}{3528 \\div 504} = \\frac{1}{7}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{4}{15} \\times \\frac{7}{8} \\times \\frac{10}{21}$`,
    options: [`\\frac{1}{10}`, `\\frac{1}{9}`, `\\frac{2}{9}`, `9`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{4 \\times 7 \\times 10}{15 \\times 8 \\times 21} = \\frac{280}{2520}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($280$):<br>$\\frac{280 \\div 280}{2520 \\div 280} = \\frac{1}{9}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{15}{16} \\times \\frac{24}{35} \\times \\frac{7}{9}$`,
    options: [`\\frac{1}{3}`, `\\frac{1}{2}`, `\\frac{2}{2}`, `2`],
    answer: 1,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{15 \\times 24 \\times 7}{16 \\times 35 \\times 9} = \\frac{2520}{5040}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($2520$):<br>$\\frac{2520 \\div 2520}{5040 \\div 2520} = \\frac{1}{2}$</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Complete the multiplication, simplifying where possible: $\\frac{9}{14} \\times \\frac{28}{33} \\times \\frac{11}{18}$`,
    options: [`3`, `\\frac{1}{4}`, `\\frac{2}{3}`, `\\frac{1}{3}`],
    answer: 3,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply all numerators and all denominators</strong><br>$\\frac{9 \\times 28 \\times 11}{14 \\times 33 \\times 18} = \\frac{2772}{8316}$</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($2772$):<br>$\\frac{2772 \\div 2772}{8316 \\div 2772} = \\frac{1}{3}$</p></div>`,
    createdAt: new Date().toISOString()
  }
,

  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Points, lines and planes',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Refer to the diagram below to answer the following questions about lines and points.`,
    graphData: { html: `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <polygon points="200,60 100,220 300,220" fill="rgba(99, 102, 241, 0.08)" stroke="rgba(99, 102, 241, 0.3)" stroke-width="1.5" stroke-dasharray="4"/>
  <line x1="50" y1="220" x2="350" y2="220" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="20" x2="330" y2="260" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="250" y1="20" x2="70" y2="260" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="200" cy="60" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="100" cy="220" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="300" cy="220" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <text x="200" y="45" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">P</text>
  <text x="80" y="235" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">Q</text>
  <text x="320" y="235" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">R</text>
</svg>` },
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Naming the Lines</strong><br>A line is defined by any two points it passes through. The three lines that enclose the triangular region are:<br>
    1. The line passing through $P$ and $Q$ (Line $PQ$)<br>
    2. The line passing through $Q$ and $R$ (Line $QR$)<br>
    3. The line passing through $R$ and $P$ (Line $RP$)</p>
    <p><strong>Part (b): Intersections</strong><br>The point of intersection between line $PQ$ and line $QR$ is the point they share, which is $Q$.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q1a',
        question: `Which list correctly names the three lines in the figure?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`Lines $PQ$, $QR$, and $RP$`, `Lines $P$, $Q$, and $R$`, `Lines $PR$, $QQ$, and $RR$`, `Lines $PP$, $QR$, and $RP$`],
        answer: 0
      },
      {
        id: 'q1b',
        question: `What is the point of intersection between line $PQ$ and line $QR$?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`Point $Q$`, `Point $P$`, `Point $R$`, `No intersection`],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Points, lines and planes',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `The diagram below shows two pairs of parallel lines. Answer the questions below using correct geometric symbols.`,
    graphData: { html: `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <line x1="50" y1="100" x2="350" y2="100" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="200" x2="350" y2="200" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="80" y1="250" x2="200" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="250" x2="320" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="190,95 200,100 190,105" fill="#6366f1"/>
  <polygon points="190,195 200,200 190,205" fill="#6366f1"/>
  <polygon points="135,145 140,150 132,152" fill="#6366f1"/>
  <polygon points="138,140 143,145 135,147" fill="#6366f1"/>
  <polygon points="255,145 260,150 252,152" fill="#6366f1"/>
  <polygon points="258,140 263,145 255,147" fill="#6366f1"/>
  <circle cx="170" cy="100" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="290" cy="100" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="110" cy="200" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="230" cy="200" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <text x="170" y="85" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">W</text>
  <text x="290" y="85" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">X</text>
  <text x="95" y="220" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">Z</text>
  <text x="245" y="220" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">Y</text>
</svg>` },
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a) & (b): Parallel Line Notation</strong><br>The symbol $\\parallel$ denotes "is parallel to". Therefore:<br>
    - "$WX$ is parallel to $ZY$" is written as $WX \\parallel ZY$.<br>
    - "$XY$ is parallel to $WZ$" is written as $XY \\parallel WZ$.</p>
    <p><strong>Part (c) & (d): Intersections and Points</strong><br>
    - The intersection of lines $WX$ and $XY$ is their common vertex, which is point $X$.<br>
    - Point $Y$ lies on both $XY$ and $YZ$.</p>
    <p><strong>Part (e): Parallel line properties</strong><br>Parallel lines, by definition, lie in the same plane and never meet, no matter how far they are produced. Therefore, no points lie on both $WX$ and $ZY$.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q2a',
        question: `In symbols, write "$WX$ is parallel to $ZY$".`,
        type: 'multiple_choice',
        isManual: true,
        options: [`$WX \\parallel ZY$`, `$WX \\perp ZY$`, `$WX \\parallel XY$`, `$WX = ZY$`],
        answer: 0
      },
      {
        id: 'q2b',
        question: `In symbols, write "$XY$ is parallel to $WZ$".`,
        type: 'multiple_choice',
        isManual: true,
        options: [`$XY \\parallel WZ$`, `$XY \\perp WZ$`, `$XY \\parallel WX$`, `$XY = WZ$`],
        answer: 0
      },
      {
        id: 'q2c',
        question: `What is the intersection of the lines $WX$ and $XY$?`,
        type: 'short_answer',
        isManual: false,
        options: [],
        answer: `X`
      },
      {
        id: 'q2d',
        question: `What point lies on both $XY$ and $YZ$?`,
        type: 'short_answer',
        isManual: false,
        options: [],
        answer: `Y`
      },
      {
        id: 'q2e',
        question: `Do any points lie on both lines $WX$ and $ZY$?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`No, because parallel lines never intersect.`, `Yes, point $W$.`, `Yes, point $X$.`, `Yes, point $Z$.`],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Points, lines and planes',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Analyze the complex system of intersecting and parallel lines below.`,
    graphData: { html: `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <line x1="50" y1="150" x2="350" y2="150" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="80" y1="60" x2="320" y2="240" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="40" x2="200" y2="260" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="320" y1="60" x2="80" y2="240" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="120" y1="50" x2="120" y2="250" stroke="#6366f1" stroke-dasharray="4" stroke-width="2"/>
  <line x1="280" y1="50" x2="280" y2="250" stroke="#6366f1" stroke-dasharray="4" stroke-width="2"/>
  <polygon points="120,110 116,120 124,120" fill="#6366f1"/>
  <polygon points="280,110 276,120 284,120" fill="#6366f1"/>
  <circle cx="200" cy="150" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="100" cy="150" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <circle cx="300" cy="150" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <circle cx="120" cy="90" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <circle cx="280" cy="210" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <text x="210" y="145" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">M</text>
  <text x="85" y="165" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">A</text>
  <text x="315" y="165" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">B</text>
  <text x="135" y="85" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">C</text>
  <text x="260" y="225" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">D</text>
</svg>` },
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Concurrent Lines</strong><br>Concurrent lines are lines that all pass through a single point. In the figure, four lines intersect at point $M$. These are lines $AB$, $CD$, and two other diagonal lines ($EF$ and $GH$).</p>
    <p><strong>Part (b): Parallel Lines</strong><br>The blue dashed lines on the left and right sides are marked with arrowheads. These are lines $AC$ and $BD$. In symbols, we write $AC \\parallel BD$.</p>
    <p><strong>Part (c) & (d): Intersections</strong><br>
    - The intersection of line $AB$ and line $CD$ is $M$.<br>
    - The intersection of $AB$ and $CD$ is point $M$. The line joining $C$ and $M$ is line $CM$.</p>
    <p><strong>Part (e): Point belonging to both lines</strong><br>The intersection point of line $AC$ (left dashed line) and $CD$ is point $C$.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q3a',
        question: `Name the four concurrent lines passing through the point $M$ in the diagram.`,
        type: 'multiple_choice',
        isManual: true,
        options: [`Lines $AB$, $CD$, $EF$, and $GH$`, `Lines $AC$, $BD$, $EM$, and $HM$`, `Lines $AM$, $BM$, $CM$, and $DM$`, `Lines $AB$, $CD$, $AC$, and $BD$`],
        answer: 0
      },
      {
        id: 'q3b',
        question: `Name the two parallel lines, using the correct symbol for "is parallel to".`,
        type: 'multiple_choice',
        isManual: true,
        options: [`$AC \\parallel BD$`, `$AB \\parallel CD$`, `$EF \\parallel GH$`, `$AC \\perp BD$`],
        answer: 0
      },
      {
        id: 'q3c',
        question: `Name the point of intersection of the lines $AB$ and $CD$.`,
        type: 'short_answer',
        isManual: false,
        options: [],
        answer: `M`
      },
      {
        id: 'q3d',
        question: `Name the line joining $C$ and the intersection of $AB$ and $CD$.`,
        type: 'multiple_choice',
        isManual: true,
        options: [`Line $CM$`, `Line $AM$`, `Line $CD$`, `Line $AC$`],
        answer: 0
      },
      {
        id: 'q3e',
        question: `What point belongs to both lines $AC$ and $CD$?`,
        type: 'short_answer',
        isManual: false,
        options: [],
        answer: `C`
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Points, lines and planes',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Examine the configuration of six distinct points below to solve the questions.`,
    graphData: { html: `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <circle cx="200" cy="50" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="80" cy="240" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="320" cy="240" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="140" cy="145" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="200" cy="240" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="260" cy="145" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <text x="200" y="35" text-anchor="middle" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">P</text>
  <text x="65" y="245" text-anchor="middle" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="335" y="245" text-anchor="middle" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">R</text>
  <text x="120" y="145" text-anchor="middle" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">U</text>
  <text x="200" y="260" text-anchor="middle" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">V</text>
  <text x="280" y="145" text-anchor="middle" fill="#1e293b" font-size="15" font-weight="900" font-family="'Outfit'">W</text>
</svg>` },
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Collinear Points</strong><br>Points are collinear if they all lie on the same straight line. In the diagram, points $P$, $U$, and $Q$ lie in a perfectly straight line forming one of the outer edges of the triangular shape.</p>
    <p><strong>Part (b): Concurrent Lines</strong><br>If we construct lines connecting the corners to the opposite midpoints ($PV$, $QW$, and $RU$), these three lines will intersect at a single central point. Lines that meet at a single point are called **concurrent** lines.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q4a',
        question: `Which of the following sets of points are collinear in the diagram?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`Points $P, U,$ and $Q$`, `Points $P, V,$ and $R$`, `Points $Q, W,$ and $P$`, `Points $U, V,$ and $W$`],
        answer: 0
      },
      {
        id: 'q4b',
        question: `If you connect the lines $PV$, $QW$, and $RU$ with straight lines, they intersect at a single point. What is the mathematical term for these three lines?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`They are concurrent`, `They are parallel`, `They are collinear`, `They do not intersect`],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Points, lines and planes',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `This problem demonstrates a famous result in projective geometry called Pappus' Theorem.`,
    graphData: { html: `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <line x1="40" y1="60" x2="360" y2="100" stroke="#475569" stroke-width="2"/>
  <line x1="40" y1="240" x2="360" y2="200" stroke="#475569" stroke-width="2"/>
  <line x1="100" y1="67.5" x2="200" y2="220" stroke="#94a3b8" stroke-width="1"/>
  <line x1="100" y1="232.5" x2="200" y2="80" stroke="#94a3b8" stroke-width="1"/>
  <line x1="200" y1="80" x2="300" y2="207.5" stroke="#94a3b8" stroke-width="1"/>
  <line x1="200" y1="220" x2="300" y2="92.5" stroke="#94a3b8" stroke-width="1"/>
  <line x1="300" y1="92.5" x2="100" y2="232.5" stroke="#94a3b8" stroke-width="1"/>
  <line x1="300" y1="207.5" x2="100" y2="67.5" stroke="#94a3b8" stroke-width="1"/>
  <line x1="80" y1="150" x2="320" y2="150" stroke="#6366f1" stroke-dasharray="4" stroke-width="1.5"/>
  <circle cx="100" cy="67.5" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="200" cy="80" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="300" cy="92.5" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="100" cy="232.5" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="200" cy="220" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="300" cy="207.5" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="150" cy="143.75" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <circle cx="250" cy="156.25" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <circle cx="200" cy="150" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <text x="100" y="52" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">D</text>
  <text x="200" y="65" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">E</text>
  <text x="300" y="77" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">F</text>
  <text x="100" y="252" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">U</text>
  <text x="200" y="240" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">V</text>
  <text x="300" y="227" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">W</text>
  <text x="150" y="130" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">X</text>
  <text x="250" y="180" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">Y</text>
  <text x="200" y="138" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">Z</text>
</svg>` },
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Pappus' Collinearity Theorem</strong><br>
    Pappus' theorem states that if we choose three collinear points $D, E, F$ on one line, and three collinear points $U, V, W$ on another line, then the cross-intersection points:<br>
    - $X$ (intersection of $DV$ and $UE$)<br>
    - $Y$ (intersection of $EW$ and $VF$)<br>
    - $Z$ (intersection of $FU$ and $WD$)<br>
    will always lie on a single straight line! Therefore, the points $X, Y,$ and $Z$ are **collinear**.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q5a',
        question: `According to Pappus' Theorem, what special mathematical property is shared by points $X, Y,$ and $Z$?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`They are collinear (they lie on a single straight line)`, `They are concurrent (lines pass through them)`, `They form an equilateral triangle`, `They are perpendicular to each other`],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Points, lines and planes',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `A four-point general quadrangle is shown below. We can produce (extend) its opposite sides to find additional intersections.`,
    graphData: { html: `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <line x1="120" y1="80" x2="360" y2="100" stroke="#475569" stroke-width="1.5" stroke-dasharray="3"/>
  <line x1="100" y1="160" x2="360" y2="100" stroke="#475569" stroke-width="1.5" stroke-dasharray="3"/>
  <line x1="120" y1="80" x2="80" y2="240" stroke="#475569" stroke-width="1.5" stroke-dasharray="3"/>
  <line x1="240" y1="90" x2="80" y2="240" stroke="#475569" stroke-width="1.5" stroke-dasharray="3"/>
  <line x1="120" y1="80" x2="220" y2="180" stroke="#94a3b8" stroke-width="1"/>
  <line x1="240" y1="90" x2="100" y2="160" stroke="#94a3b8" stroke-width="1"/>
  <polygon points="120,80 240,90 220,180 100,160" fill="rgba(99, 102, 241, 0.05)" stroke="#6366f1" stroke-width="2.5"/>
  <circle cx="120" cy="80" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="240" cy="90" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="220" cy="180" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="100" cy="160" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="360" cy="100" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <circle cx="80" cy="240" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <circle cx="170" cy="125" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <text x="120" y="65" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">P</text>
  <text x="245" y="75" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="235" y="195" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">R</text>
  <text x="85" y="170" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">S</text>
  <text x="375" y="105" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">X</text>
  <text x="65" y="245" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">Y</text>
  <text x="170" y="115" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">Z</text>
</svg>` },
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Side Extensions ($PQ$ and $SR$)</strong><br>Constructing the lines $PQ$ and $SR$ and extending them outward leads to their intersection point at $X$.</p>
    <p><strong>Part (b): Side Extensions ($PS$ and $QR$)</strong><br>Similarly, extending the opposite sides $PS$ and $QR$ leads to their intersection point at $Y$.</p>
    <p><strong>Part (c): Diagonal Intersections</strong><br>Constructing the diagonal lines $PR$ and $QS$ inside the quadrilateral results in them crossing exactly at point $Z$.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q6a',
        question: `If you construct the lines $PQ$ and $SR$, and produce (extend) them, at which point do they meet?`,
        type: 'short_answer',
        isManual: false,
        options: [],
        answer: `X`
      },
      {
        id: 'q6b',
        question: `If you construct the lines $PS$ and $QR$, and produce (extend) them, at which point do they meet?`,
        type: 'short_answer',
        isManual: false,
        options: [],
        answer: `Y`
      },
      {
        id: 'q6c',
        question: `Construct the diagonals $PR$ and $QS$, at which point do they intersect?`,
        type: 'short_answer',
        isManual: false,
        options: [],
        answer: `Z`
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Points, lines and planes',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Consider these basic conceptual axioms of geometry regarding points and lines.`,
    graphData: { html: `<svg viewBox="0 0 400 200" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <line x1="30" y1="60" x2="370" y2="60" stroke="#475569" stroke-width="2"/>
  <polygon points="20,60 30,55 30,65" fill="#475569"/>
  <polygon points="380,60 370,55 370,65" fill="#475569"/>
  <circle cx="100" cy="60" r="4" fill="#3b82f6"/>
  <circle cx="150" cy="60" r="4" fill="#3b82f6"/>
  <circle cx="200" cy="60" r="4" fill="#3b82f6"/>
  <circle cx="250" cy="60" r="4" fill="#3b82f6"/>
  <circle cx="300" cy="60" r="4" fill="#3b82f6"/>
  <text x="200" y="40" text-anchor="middle" fill="#64748b" font-size="12" font-weight="700" font-family="'Outfit'">Every line contains infinitely many points</text>
  <circle cx="200" cy="140" r="5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
  <line x1="100" y1="140" x2="300" y2="140" stroke="#94a3b8" stroke-width="1"/>
  <line x1="200" y1="90" x2="200" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="120" y1="100" x2="280" y2="180" stroke="#94a3b8" stroke-width="1"/>
  <line x1="120" y1="180" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <text x="200" y="125" text-anchor="middle" fill="#64748b" font-size="12" font-weight="700" font-family="'Outfit'">Infinitely many lines pass through every point</text>
</svg>` },
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Infinitely Many Points on a Line</strong><br>In geometry, a line is made up of points. Between any two distinct points on a line, no matter how close they are, we can always find another point. Because there is no limit to this density, there are **infinitely many** points on any line segment.</p>
    <p><strong>Part (b): Infinitely Many Lines through a Point</strong><br>Through any single point, we can draw a line in any direction (from $0^\\circ$ to $360^\\circ$). Since angles can be divided into infinitely small fractions, we can construct an infinite number of unique lines crossing through that exact same point.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q7a',
        question: `There are "infinitely many points on every line". Explain the use of the word infinitely in this statement.`,
        type: 'multiple_choice',
        isManual: true,
        options: [`It means there is no limit to the number of points; we can find as many points as we want between any two points.`, `It means a line has a fixed starting point and an ending point with exactly 10 points.`, `It means the line contains exactly 100 points.`, `It means the points are extremely large in size.`],
        answer: 0
      },
      {
        id: 'q7b',
        question: `There are "infinitely many lines passing through every point". Explain the use of the word infinitely in this statement.`,
        type: 'multiple_choice',
        isManual: true,
        options: [`It means we can draw as many lines as we want through a single point in different directions without ever running out.`, `It means only parallel lines can pass through a single point.`, `It means exactly 4 lines can cross at any point.`, `It means lines are infinitely thick.`],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Points, lines and planes',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `There are four distinct ways to arrange three straight lines in a single plane, as illustrated below.`,
    graphData: { html: `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <g transform="translate(0, 0)">
    <line x1="30" y1="30" x2="170" y2="30" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <line x1="30" y1="50" x2="170" y2="50" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <line x1="30" y1="70" x2="170" y2="70" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <text x="100" y="95" text-anchor="middle" fill="#64748b" font-size="13" font-weight="900" font-family="'Outfit'">A: 3 Parallel</text>
  </g>
  <g transform="translate(200, 0)">
    <line x1="30" y1="35" x2="170" y2="35" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <line x1="30" y1="65" x2="170" y2="65" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="15" x2="150" y2="85" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <text x="100" y="95" text-anchor="middle" fill="#64748b" font-size="13" font-weight="900" font-family="'Outfit'">B: 2 Parallel + Transversal</text>
  </g>
  <g transform="translate(0, 150)">
    <line x1="30" y1="75" x2="170" y2="75" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="25" x2="150" y2="125" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="125" x2="150" y2="25" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <circle cx="100" cy="75" r="4" fill="#f43f5e"/>
    <text x="100" y="145" text-anchor="middle" fill="#64748b" font-size="13" font-weight="900" font-family="'Outfit'">C: 3 Concurrent</text>
  </g>
  <g transform="translate(200, 150)">
    <line x1="30" y1="110" x2="170" y2="110" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="120" x2="130" y2="20" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <line x1="150" y1="120" x2="70" y2="20" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <polygon points="100,55 70,110 130,110" fill="rgba(99,102,241,0.15)"/>
    <text x="100" y="145" text-anchor="middle" fill="#64748b" font-size="13" font-weight="900" font-family="'Outfit'">D: Intersecting (Triangle)</text>
  </g>
</svg>` },
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Parallel Line Configurations</strong><br>Parallel lines appear in two configurations:<br>
    - **Configuration A**: All three lines are parallel ($L_1 \\parallel L_2 \\parallel L_3$).<br>
    - **Configuration B**: Two lines are parallel ($L_1 \\parallel L_2$), intersected by a third transversal line.<br>
    Thus, exactly **2** configurations involve parallel lines.</p>
    <p><strong>Part (b): Enclosing a Region</strong><br>To enclose a region (like a triangle), lines must intersect in pairs without all passing through the same point. Only **Configuration D** (three lines intersecting each other at three distinct points) encloses a triangular region.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q8a',
        question: `How many of the four configurations involve parallel lines?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`1`, `2`, `3`, `4`],
        answer: 1
      },
      {
        id: 'q8b',
        question: `Which configuration is the ONLY one that encloses a region?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`Configuration A`, `Configuration B`, `Configuration C`, `Configuration D`],
        answer: 3
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-5',
    topicId: 'y7-5a',
    topicCode: '5A',
    topicTitle: 'Points, lines and planes',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `In a plane, there are eight distinct possible configurations for placing four straight lines.`,
    graphData: { html: `<svg viewBox="0 0 400 240" width="100%" height="200" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <g transform="translate(10, 10)">
    <line x1="10" y1="20" x2="110" y2="20" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="10" y1="35" x2="110" y2="35" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="10" y1="50" x2="110" y2="50" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="10" y1="65" x2="110" y2="65" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <text x="60" y="85" text-anchor="middle" fill="#64748b" font-size="11" font-weight="900" font-family="'Outfit'">4 Parallel</text>
  </g>
  <g transform="translate(140, 10)">
    <line x1="10" y1="25" x2="110" y2="25" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="10" y1="60" x2="110" y2="60" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="20" y1="70" x2="50" y2="15" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="70" y1="70" x2="100" y2="15" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <text x="60" y="85" text-anchor="middle" fill="#64748b" font-size="11" font-weight="900" font-family="'Outfit'">Parallelogram</text>
  </g>
  <g transform="translate(270, 10)">
    <line x1="10" y1="42.5" x2="110" y2="42.5" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="60" y1="10" x2="60" y2="75" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="20" y1="15" x2="100" y2="70" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="20" y1="70" x2="100" y2="15" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="60" cy="42.5" r="3" fill="#f43f5e"/>
    <text x="60" y="85" text-anchor="middle" fill="#64748b" font-size="11" font-weight="900" font-family="'Outfit'">4 Concurrent</text>
  </g>
  <g transform="translate(140, 100)">
    <line x1="10" y1="100" x2="110" y2="100" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="20" y1="30" x2="100" y2="50" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="15" y1="110" x2="35" y2="20" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="105" y1="110" x2="85" y2="20" stroke="#475569" stroke-width="1.5" stroke-linecap="round"/>
    <polygon points="30,55 88,68 83,100 23,100" fill="rgba(99,102,241,0.15)"/>
    <text x="60" y="125" text-anchor="middle" fill="#64748b" font-size="11" font-weight="900" font-family="'Outfit'">Quadrilateral</text>
  </g>
</svg>` },
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Non-Parallel Configurations</strong><br>Out of the 8 configurations of 4 distinct lines, 5 involve at least one pair of parallel lines (e.g. 4 parallel, 3 parallel + 1 transversal, parallelogram, etc.). The remaining **3** configurations do not involve any parallel lines:<br>
    1. Four concurrent lines (all crossing at one single point).<br>
    2. Three concurrent lines cut by a fourth transversal line.<br>
    3. Four lines intersecting in pairs to form a quadrilateral (or complex quadrangle).</p>
    <p><strong>Part (b): Convex Quadrilateral</strong><br>Only the configuration where four lines intersect in pairs, forming a closed convex shape with four distinct vertices and no crossing lines inside it, encloses a simple **convex quadrilateral** region.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q9a',
        question: `How many of the eight configurations do NOT involve any parallel lines?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`1`, `2`, `3`, `4`],
        answer: 2
      },
      {
        id: 'q9b',
        question: `Which configuration of four distinct lines encloses a single quadrilateral region without any other lines crossing inside it?`,
        type: 'multiple_choice',
        isManual: true,
        options: [`Four lines intersecting to form a simple convex quadrilateral`, `Four parallel lines`, `Four concurrent lines`, `Three parallel lines cut by a transversal`],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  }

];

export const importYear7Ch5A = async (forceReset = false) => {
  console.log('[Ch5 Year 7 Fractions+Geometry Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch5 questions...');
      const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-5')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log(`Deleted ${existingSnap.size} existing questions.`);
    }

    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-5')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log(`[Ch5 Year 7 Fractions+Geometry Import] SUCCESS! ${importedCount} new questions imported.`);
    return importedCount;
  } catch (error) {
    console.error('[Ch5 Year 7 Fractions+Geometry Import] ERROR:', error);
    return 0;
  }
};
