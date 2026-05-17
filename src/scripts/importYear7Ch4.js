import { db } from '../firebase/config.js';
import { collection, getDocs, query, where, doc, writeBatch } from 'firebase/firestore';
import { allQuestions as questions4A } from './importYear7Ch4A.js';

export const allQuestions = [
  ...questions4A,
  
  // ==========================================
  // Q1 & Q2: Fraction Locations on a Number Line (Topic: 4A)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Consider the fractions $A = \\frac{2}{5}$, $B = 1\\frac{3}{5}$, and $C = \\frac{12}{5}$ on a number line marked with whole numbers $0, 1, 2, 3$. Which statement about their locations is true?`,
    options: [
      "$A$ is between $0$ and $1$; $B$ is between $1$ and $2$; $C$ is between $2$ and $3$.",
      "$A$ is between $1$ and $2$; $B$ is between $2$ and $3$; $C$ is exactly $2$.",
      "$A$ is between $0$ and $1$; $B$ is exactly $1$; $C$ is between $1$ and $2$.",
      "$A$ is between $2$ and $3$; $B$ is between $0$ and $1$; $C$ is between $1$ and $2$."
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert improper fractions to mixed numbers</strong><br>- $A = \\frac{2}{5} = 0.4$ (strictly between $0$ and $1$).<br>- $B = 1\\frac{3}{5} = 1.6$ (strictly between $1$ and $2$).<br>- $C = \\frac{12}{5} = 2\\frac{2}{5} = 2.4$ (strictly between $2$ and $3$).</p><p><strong>Step 2: Compare with options</strong><br>The first statement correctly describes all three points.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Consider the fractions $P = \\frac{5}{6}$, $Q = 1\\frac{2}{3}$, and $R = \\frac{13}{6}$ on a number line. Which statement about their locations is true?`,
    options: [
      "$P$ is between $0$ and $1$; $Q$ is between $1$ and $2$; $R$ is between $2$ and $3$.",
      "$P$ is between $1$ and $2$; $Q$ is between $0$ and $1$; $R$ is between $2$ and $3$.",
      "$P$ is between $0$ and $1$; $Q$ is between $2$ and $3$; $R$ is exactly $2$.",
      "$P$ is exactly $1$; $Q$ is between $1$ and $2$; $R$ is between $0$ and $1$."
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Evaluate each fraction</strong><br>- $P = \\frac{5}{6}$ is a proper fraction, so $0 < P < 1$. It lies between $0$ and $1$.<br>- $Q = 1\\frac{2}{3}$ has a whole part of $1$ and a fractional part, so $1 < Q < 2$. It lies between $1$ and $2$.<br>- $R = \\frac{13}{6} = 2\\frac{1}{6}$ has a whole part of $2$, so $2 < R < 3$. It lies between $2$ and $3$.</p><p><strong>Step 2: Conclusion</strong><br>The first statement is correct.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q3: Fractions from situations (Topic: 4A)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Write the fraction that represents this situation: $9$ out of $13$ students in a class pass their music exam.`,
    options: ["$\\frac{9}{13}$", "$\\frac{13}{9}$", "$\\frac{4}{13}$", "$\\frac{9}{4}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Identify parts</strong><br>- The total quantity (the whole) is $13$ students, which represents the denominator.<br>- The subset being considered is $9$ students, which represents the numerator.</p><p><strong>Step 2: Construct the fraction</strong><br>The fraction is $\\frac{9}{13}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Fifteen minutes out of one hour are spent practicing piano. What fraction of the hour is spent practicing (in simplest form)?`,
    options: ["$\\frac{1}{4}$", "$\\frac{15}{60}$", "$\\frac{1}{3}$", "$\\frac{3}{4}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write the initial fraction</strong><br>An hour has $60$ minutes. So $15$ minutes out of $60$ is $\\frac{15}{60}$.</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor ($15$):<br>$\\frac{15 \\div 15}{60 \\div 15} = \\frac{1}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `One leg of a standard insect is broken (insects have $6$ legs). What fraction of the insect's legs are broken?`,
    options: ["$\\frac{1}{6}$", "$\\frac{5}{6}$", "$\\frac{1}{5}$", "$\\frac{6}{1}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Construct the fraction</strong><br>- Total number of legs (the denominator) = $6$.<br>- Number of broken legs (the numerator) = $1$.</p><p><strong>Step 2: Write the fraction</strong><br>The fraction is $\\frac{1}{6}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Five puppies out of a litter of eight are female. What fraction of the litter are female?`,
    options: ["$\\frac{5}{8}$", "$\\frac{3}{8}$", "$\\frac{8}{5}$", "$\\frac{5}{3}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Construct the fraction</strong><br>- Total puppies (denominator) = $8$.<br>- Female puppies (numerator) = $5$.</p><p><strong>Step 2: Result</strong><br>The fraction is $\\frac{5}{8}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4a',
    topicCode: '4A',
    topicTitle: 'What is a fraction?',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Only $9$ competitors out of a field of $29$ complete a grueling marathon. What fraction of the competitors completed the marathon?`,
    options: ["$\\frac{9}{29}$", "$\\frac{20}{29}$", "$\\frac{29}{9}$", "$\\frac{9}{20}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Construct the fraction</strong><br>- Total competitors (denominator) = $29$.<br>- Competitors who completed (numerator) = $9$.</p><p><strong>Step 2: Result</strong><br>The fraction is $\\frac{9}{29}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q4: Equivalent Fractions (Topic: 4B)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which option lists two fractions that are BOTH equivalent to $\\frac{6}{12}$?`,
    options: ["$\\frac{1}{2}$ and $\\frac{5}{10}$", "$\\frac{1}{3}$ and $\\frac{6}{18}$", "$\\frac{2}{3}$ and $\\frac{4}{6}$", "$\\frac{1}{2}$ and $\\frac{3}{4}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify the base fraction</strong><br>$\\frac{6}{12} = \\frac{6 \\div 6}{12 \\div 6} = \\frac{1}{2}$.</p><p><strong>Step 2: Test the options</strong><br>- In the first option, $\\frac{1}{2}$ is identical, and $\\frac{5}{10} = \\frac{1}{2}$. Both are equivalent. (Correct!)</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which option lists two fractions that are BOTH equivalent to $\\frac{5}{20}$?`,
    options: ["$\\frac{1}{4}$ and $\\frac{10}{40}$", "$\\frac{1}{2}$ and $\\frac{5}{10}$", "$\\frac{1}{5}$ and $\\frac{2}{10}$", "$\\frac{1}{4}$ and $\\frac{3}{8}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify the base fraction</strong><br>$\\frac{5}{20} = \\frac{5 \\div 5}{20 \\div 5} = \\frac{1}{4}$.</p><p><strong>Step 2: Test the options</strong><br>- $\\frac{1}{4}$ is equivalent.<br>- $\\frac{10}{40} = \\frac{10 \\div 10}{40 \\div 10} = \\frac{1}{4}$. Both are equivalent.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which option lists two fractions that are BOTH equivalent to $\\frac{18}{48}$?`,
    options: ["$\\frac{3}{8}$ and $\\frac{9}{24}$", "$\\frac{3}{8}$ and $\\frac{6}{12}$", "$\\frac{1}{4}$ and $\\frac{5}{20}$", "$\\frac{3}{4}$ and $\\frac{6}{8}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify the base fraction</strong><br>Divide the numerator and denominator by $6$:<br>$\\frac{18 \\div 6}{48 \\div 6} = \\frac{3}{8}$.</p><p><strong>Step 2: Test the options</strong><br>- $\\frac{3}{8}$ is equivalent.<br>- $\\frac{9}{24} = \\frac{9 \\div 3}{24 \\div 3} = \\frac{3}{8}$. Both are equivalent.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which option lists two fractions that are BOTH equivalent to $\\frac{4}{5}$?`,
    options: ["$\\frac{8}{10}$ and $\\frac{12}{15}$", "$\\frac{8}{10}$ and $\\frac{10}{12}$", "$\\frac{6}{8}$ and $\\frac{9}{12}$", "$\\frac{4}{5}$ and $\\frac{5}{4}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check scalar multiplication</strong><br>- $\\frac{4 \\times 2}{5 \\times 2} = \\frac{8}{10}$.<br>- $\\frac{4 \\times 3}{5 \\times 3} = \\frac{12}{15}$.<br>Both $\\frac{8}{10}$ and $\\frac{12}{15}$ are equivalent.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which option lists two fractions that are BOTH equivalent to $\\frac{9}{10}$?`,
    options: ["$\\frac{18}{20}$ and $\\frac{27}{30}$", "$\\frac{18}{20}$ and $\\frac{19}{20}$", "$\\frac{9}{10}$ and $\\frac{10}{9}$", "$\\frac{15}{20}$ and $\\frac{25}{30}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Check scalar multiplication</strong><br>- $\\frac{9 \\times 2}{10 \\times 2} = \\frac{18}{20}$.<br>- $\\frac{9 \\times 3}{10 \\times 3} = \\frac{27}{30}$.<br>Both are equivalent.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which option lists two fractions that are BOTH equivalent to $\\frac{7}{9}$?`,
    options: ["$\\frac{14}{18}$ and $\\frac{21}{27}$", "$\\frac{14}{18}$ and $\\frac{15}{18}$", "$\\frac{7}{9}$ and $\\frac{9}{7}$", "$\\frac{28}{36}$ and $\\frac{35}{40}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Apply scale factors</strong><br>- Scale factor $2$: $\\frac{7 \\times 2}{9 \\times 2} = \\frac{14}{18}$.<br>- Scale factor $3$: $\\frac{7 \\times 3}{9 \\times 3} = \\frac{21}{27}$.<br>Both are equivalent.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which option lists two mixed numbers or fractions that are BOTH equivalent to $2\\frac{1}{3}$?`,
    options: ["$\\frac{7}{3}$ and $\\frac{14}{6}$", "$2\\frac{2}{6}$ and $2\\frac{3}{12}$", "$\\frac{7}{3}$ and $\\frac{21}{6}$", "$2\\frac{1}{3}$ and $\\frac{8}{3}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert the mixed number to an improper fraction</strong><br>$2\\frac{1}{3} = \\frac{2 \\times 3 + 1}{3} = \\frac{7}{3}$.</p><p><strong>Step 2: Find equivalent forms</strong><br>- $\\frac{7}{3}$ is the direct improper fraction.<br>- Multiply top and bottom by $2$: $\\frac{7 \\times 2}{3 \\times 2} = \\frac{14}{6}$.<br>Both are equivalent.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which option lists two mixed numbers or fractions that are BOTH equivalent to $3\\frac{1}{4}$?`,
    options: ["$\\frac{13}{4}$ and $\\frac{26}{8}$", "$3\\frac{2}{8}$ and $3\\frac{3}{8}$", "$\\frac{13}{4}$ and $\\frac{39}{8}$", "$3\\frac{1}{4}$ and $\\frac{15}{4}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert to improper fraction</strong><br>$3\\frac{1}{4} = \\frac{3 \\times 4 + 1}{4} = \\frac{13}{4}$.</p><p><strong>Step 2: Find equivalent fraction</strong><br>- Multiply by $2$: $\\frac{13 \\times 2}{4 \\times 2} = \\frac{26}{8}$.<br>Both are equivalent.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which option lists two mixed numbers or fractions that are BOTH equivalent to $2\\frac{4}{5}$?`,
    options: ["$\\frac{14}{5}$ and $\\frac{28}{10}$", "$2\\frac{8}{10}$ and $2\\frac{10}{15}$", "$\\frac{14}{5}$ and $\\frac{42}{10}$", "$2\\frac{4}{5}$ and $\\frac{12}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert to improper fraction</strong><br>$2\\frac{4}{5} = \\frac{2 \\times 5 + 4}{5} = \\frac{14}{5}$.</p><p><strong>Step 2: Multiply by 2</strong><br>$\\frac{14 \\times 2}{5 \\times 2} = \\frac{28}{10}$.<br>Both are equivalent.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which option lists two fractions that are BOTH equivalent to $\\frac{5}{18}$?`,
    options: ["$\\frac{10}{36}$ and $\\frac{15}{54}$", "$\\frac{10}{36}$ and $\\frac{20}{54}$", "$\\frac{5}{18}$ and $\\frac{18}{5}$", "$\\frac{15}{36}$ and $\\frac{25}{54}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Apply scale factors</strong><br>- Multiply by $2$: $\\frac{5 \\times 2}{18 \\times 2} = \\frac{10}{36}$.<br>- Multiply by $3$: $\\frac{5 \\times 3}{18 \\times 3} = \\frac{15}{54}$.<br>Both are equivalent.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q5: Find value of 'n' (Topic: 4B)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the value of $n$ that makes the statement true: $\\frac{n}{50} = \\frac{12}{20}$`,
    options: ["$30$", "$25$", "$15$", "$40$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify the known fraction</strong><br>$\\frac{12}{20} = \\frac{12 \\div 4}{20 \\div 4} = \\frac{3}{5}$.</p><p><strong>Step 2: Solve for $n$</strong><br>We have $\\frac{n}{50} = \\frac{3}{5}$.<br>Multiply both sides by $50$:<br>$n = \\frac{3}{5} \\times 50 = 3 \\times 10 = 30$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the value of $n$ that makes the statement true: $\\frac{36}{30} = \\frac{6}{n}$`,
    options: ["$5$", "$6$", "$4$", "$8$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify the fraction on the left</strong><br>Divide the numerator and denominator by $6$:<br>$\\frac{36 \\div 6}{30 \\div 6} = \\frac{6}{5}$.</p><p><strong>Step 2: Equate terms</strong><br>Now we have $\\frac{6}{5} = \\frac{6}{n}$. Since the numerators are identical, the denominators must be equal too: $n = 5$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the value of $n$ that makes the statement true: $\\frac{12}{18} = \\frac{n}{90}$`,
    options: ["$60$", "$50$", "$45$", "$75$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify the first fraction</strong><br>$\\frac{12}{18} = \\frac{2}{3}$ (dividing top and bottom by $6$).</p><p><strong>Step 2: Multiply by 90</strong><br>We have $\\frac{2}{3} = \\frac{n}{90}$.<br>Multiply both sides by $90$:<br>$n = \\frac{2}{3} \\times 90 = 2 \\times 30 = 60$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the value of $n$ that makes the statement true: $\\frac{4}{9} = \\frac{24}{n}$`,
    options: ["$54$", "$45$", "$36$", "$63$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Observe numerator multiplier</strong><br>To go from $4$ to $24$, we multiply by $6$ ($4 \\times 6 = 24$).</p><p><strong>Step 2: Apply the same to the denominator</strong><br>To keep the fractions equivalent, multiply the denominator $9$ by $6$:<br>$n = 9 \\times 6 = 54$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the value of $n$ that makes the statement true: $\\frac{14}{n} = \\frac{70}{100}$`,
    options: ["$20$", "$25$", "$15$", "$30$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify the fraction on the right</strong><br>$\\frac{70}{100} = \\frac{7}{10}$.</p><p><strong>Step 2: Find n</strong><br>$\\frac{14}{n} = \\frac{7}{10}$. Since the numerator $7 \\times 2 = 14$, multiply the denominator by $2$: $n = 10 \\times 2 = 20$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Find the value of $n$ that makes the statement true: $\\frac{5}{n} = \\frac{35}{63}$`,
    options: ["$9$", "$7$", "$8$", "$10$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify the right side</strong><br>Divide $35$ and $63$ by $7$: $\\frac{35 \\div 7}{63 \\div 7} = \\frac{5}{9}$.</p><p><strong>Step 2: Equate</strong><br>$\\frac{5}{n} = \\frac{5}{9}$, so $n = 9$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q6: Simplifying fractions (Topic: 4B)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Reduce the fraction to its simplest form: $\\frac{6}{18}$`,
    options: ["$\\frac{1}{3}$", "$\\frac{2}{6}$", "$\\frac{1}{2}$", "$\\frac{3}{9}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find the greatest common divisor (GCD)</strong><br>The factors of $6$ are $1, 2, 3, 6$. The factors of $18$ include $6$. The GCD is $6$.</p><p><strong>Step 2: Divide both parts</strong><br>$\\frac{6 \\div 6}{18 \\div 6} = \\frac{1}{3}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Reduce the fraction to its simplest form: $\\frac{8}{84}$`,
    options: ["$\\frac{2}{21}$", "$\\frac{4}{42}$", "$\\frac{1}{10}$", "$\\frac{2}{23}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide by common factors</strong><br>Both $8$ and $84$ are even. Divide by $4$:<br>$\\frac{8 \\div 4}{84 \\div 4} = \\frac{2}{21}$. Since $2$ and $21$ share no common factors, this is the simplest form.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Reduce the fraction to its simplest form: $\\frac{135}{180}$`,
    options: ["$\\frac{3}{4}$", "$\\frac{9}{12}$", "$\\frac{2}{3}$", "$\\frac{3}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find common factors</strong><br>Both end in $5$ or $0$, so they are divisible by $5$:<br>$\\frac{135 \\div 5}{180 \\div 5} = \\frac{27}{36}$.</p><p><strong>Step 2: Simplify further</strong><br>Both $27$ and $36$ are multiples of $9$:<br>$\\frac{27 \\div 9}{36 \\div 9} = \\frac{3}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Reduce the fraction to its simplest form: $\\frac{35}{175}$`,
    options: ["$\\frac{1}{5}$", "$\\frac{5}{25}$", "$\\frac{1}{4}$", "$\\frac{1}{6}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify by dividing by 35</strong><br>$35 \\times 5 = 175$. Therefore:<br>$\\frac{35 \\div 35}{175 \\div 35} = \\frac{1}{5}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Reduce the fraction to its simplest form: $\\frac{28}{112}$`,
    options: ["$\\frac{1}{4}$", "$\\frac{2}{8}$", "$\\frac{1}{3}$", "$\\frac{1}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide by common factors</strong><br>Divide by $28$: $28 \\times 4 = 112$.<br>Thus, $\\frac{28 \\div 28}{112 \\div 28} = \\frac{1}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Reduce the fraction to its simplest form: $\\frac{56}{120}$`,
    options: ["$\\frac{7}{15}$", "$\\frac{14}{30}$", "$\\frac{8}{15}$", "$\\frac{7}{16}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide by 8</strong><br>Divide the numerator and denominator by their GCD which is $8$:<br>$\\frac{56 \\div 8}{120 \\div 8} = \\frac{7}{15}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Reduce the fraction to its simplest form: $\\frac{400}{150}$`,
    options: ["$\\frac{8}{3}$", "$\\frac{4}{3}$", "$\\frac{8}{5}$", "$\\frac{16}{6}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Cancel trailing zeros</strong><br>$\\frac{400}{150} = \\frac{40}{15}$.</p><p><strong>Step 2: Divide by 5</strong><br>$\\frac{40 \\div 5}{15 \\div 5} = \\frac{8}{3}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Reduce the fraction to its simplest form: $\\frac{384}{96}$`,
    options: ["$4$", "$6$", "$8$", "$\\frac{8}{2}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide numerator by denominator</strong><br>Check if $384$ is divisible exactly by $96$:<br>$96 \\times 4 = 384$.<br>So the fraction simplifies to the whole number $4$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4b',
    topicCode: '4B',
    topicTitle: 'Equivalent fractions and simplest form',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Reduce the fraction to its simplest form: $\\frac{180}{168}$`,
    options: ["$\\frac{15}{14}$", "$\\frac{30}{28}$", "$\\frac{15}{16}$", "$\\frac{16}{15}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide by 12</strong><br>The GCD of $180$ and $168$ is $12$:<br>$\\frac{180 \\div 12}{168 \\div 12} = \\frac{15}{14}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q7: Improper to Mixed Numerals (Topic: 4C)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4c',
    topicCode: '4C',
    topicTitle: 'Mixed numerals and division by whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Convert the improper fraction $\\frac{11}{4}$ to a mixed numeral.`,
    options: ["$2\\frac{3}{4}$", "$2\\frac{1}{4}$", "$3\\frac{1}{4}$", "$2\\frac{1}{2}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide numerator by denominator</strong><br>$11 \\div 4 = 2$ with a remainder of $3$.</p><p><strong>Step 2: Write as mixed numeral</strong><br>The quotient ($2$) is the whole number, the remainder ($3$) is the new numerator: $2\\frac{3}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4c',
    topicCode: '4C',
    topicTitle: 'Mixed numerals and division by whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Convert the improper fraction $\\frac{19}{6}$ to a mixed numeral.`,
    options: ["$3\\frac{1}{6}$", "$2\\frac{5}{6}$", "$3\\frac{5}{6}$", "$2\\frac{1}{6}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide</strong><br>$19 \\div 6 = 3$ remainder $1$.</p><p><strong>Step 2: Form mixed numeral</strong><br>$3\\frac{1}{6}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4c',
    topicCode: '4C',
    topicTitle: 'Mixed numerals and division by whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Convert the improper fraction $\\frac{23}{5}$ to a mixed numeral.`,
    options: ["$4\\frac{3}{5}$", "$4\\frac{2}{5}$", "$3\\frac{4}{5}$", "$4\\frac{4}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide</strong><br>$23 \\div 5 = 4$ remainder $3$.</p><p><strong>Step 2: Form mixed numeral</strong><br>$4\\frac{3}{5}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4c',
    topicCode: '4C',
    topicTitle: 'Mixed numerals and division by whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Convert the improper fraction $\\frac{52}{48}$ to a mixed numeral in its simplest form.`,
    options: ["$1\\frac{1}{12}$", "$1\\frac{4}{48}$", "$1\\frac{1}{6}$", "$1\\frac{1}{8}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert to mixed numeral</strong><br>$\\frac{52}{48} = 1\\frac{4}{48}$.</p><p><strong>Step 2: Reduce fractional part</strong><br>Simplify $\\frac{4}{48}$ by dividing top and bottom by $4$: $\\frac{1}{12}$.<br>Result: $1\\frac{1}{12}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4c',
    topicCode: '4C',
    topicTitle: 'Mixed numerals and division by whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Convert the improper fraction $\\frac{150}{120}$ to a mixed numeral in its simplest form.`,
    options: ["$1\\frac{1}{4}$", "$1\\frac{30}{120}$", "$1\\frac{1}{5}$", "$1\\frac{1}{3}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert to mixed numeral</strong><br>$\\frac{150}{120} = 1\\frac{30}{120}$.</p><p><strong>Step 2: Simplify</strong><br>$\\frac{30}{120} = \\frac{1}{4}$.<br>Result: $1\\frac{1}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4c',
    topicCode: '4C',
    topicTitle: 'Mixed numerals and division by whole numbers',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Convert the improper fraction $\\frac{99}{32}$ to a mixed numeral.`,
    options: ["$3\\frac{3}{32}$", "$3\\frac{1}{32}$", "$3\\frac{5}{32}$", "$2\\frac{31}{32}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Divide</strong><br>$99 \\div 32 = 3$ remainder $3$ (since $32 \\times 3 = 96$).</p><p><strong>Step 2: Form mixed numeral</strong><br>$3\\frac{3}{32}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q8: Fraction Sequences (Topic: 4E)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4e',
    topicCode: '4E',
    topicTitle: 'Addition and subtraction of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the next four terms in the sequence: $\\frac{3}{5}, 1\\frac{1}{5}, 1\\frac{4}{5}, 2\\frac{2}{5}, \\dots$`,
    options: [
      "$3, 3\\frac{3}{5}, 4\\frac{1}{5}, 4\\frac{4}{5}$",
      "$2\\frac{4}{5}, 3, 3\\frac{1}{5}, 3\\frac{2}{5}$",
      "$3, 3.2, 3.4, 3.6$",
      "$3, 3\\frac{2}{5}, 3\\frac{4}{5}, 4\\frac{1}{5}$"
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find the common difference</strong><br>Subtract the first term from the second term:<br>$1\\frac{1}{5} - \\frac{3}{5} = \\frac{6}{5} - \\frac{3}{5} = \\frac{3}{5}$.<br>The sequence increases by adding $\\frac{3}{5}$ at each step.</p><p><strong>Step 2: Compute subsequent terms</strong><br>- 5th term: $2\\frac{2}{5} + \\frac{3}{5} = 2\\frac{5}{5} = 3$.<br>- 6th term: $3 + \\frac{3}{5} = 3\\frac{3}{5}$.<br>- 7th term: $3\\frac{3}{5} + \\frac{3}{5} = 3\\frac{6}{5} = 4\\frac{1}{5}$.<br>- 8th term: $4\\frac{1}{5} + \\frac{3}{5} = 4\\frac{4}{5}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4e',
    topicCode: '4E',
    topicTitle: 'Addition and subtraction of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the next four terms in the sequence: $\\frac{4}{7}, 1\\frac{1}{7}, 1\\frac{5}{7}, 2\\frac{2}{7}, \\dots$`,
    options: [
      "$2\\frac{6}{7}, 3\\frac{3}{7}, 4, 4\\frac{4}{7}$",
      "$2\\frac{5}{7}, 3\\frac{2}{7}, 3\\frac{6}{7}, 4\\frac{3}{7}$",
      "$2\\frac{6}{7}, 3, 3\\frac{1}{7}, 3\\frac{2}{7}$",
      "$2\\frac{6}{7}, 3.5, 4.2, 4.9$"
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find the common difference</strong><br>$1\\frac{1}{7} - \\frac{4}{7} = \\frac{8}{7} - \\frac{4}{7} = \\frac{4}{7}$.</p><p><strong>Step 2: Add $\\frac{4}{7}$ to find subsequent terms</strong><br>- 5th term: $2\\frac{2}{7} + \\frac{4}{7} = 2\\frac{6}{7}$.<br>- 6th term: $2\\frac{6}{7} + \\frac{4}{7} = 2\\frac{10}{7} = 3\\frac{3}{7}$.<br>- 7th term: $3\\frac{3}{7} + \\frac{4}{7} = 3\\frac{7}{7} = 4$.<br>- 8th term: $4 + \\frac{4}{7} = 4\\frac{4}{7}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4e',
    topicCode: '4E',
    topicTitle: 'Addition and subtraction of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the next four terms in the sequence: $\\frac{1}{8}, \\frac{1}{4}, \\frac{3}{8}, \\frac{1}{2}, \\dots$`,
    options: [
      "$\\frac{5}{8}, \\frac{3}{4}, \\frac{7}{8}, 1$",
      "$\\frac{5}{8}, \\frac{3}{4}, 1, 1\\frac{1}{8}$",
      "$\\frac{9}{16}, \\frac{5}{8}, \\frac{11}{16}, \\frac{3}{4}$",
      "$0.6, 0.7, 0.8, 0.9$"
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Write terms with a common denominator</strong><br>The sequence is $\\frac{1}{8}, \\frac{2}{8}, \\frac{3}{8}, \\frac{4}{8}, \\dots$.<br>The common difference is clearly $\\frac{1}{8}$.</p><p><strong>Step 2: Find next terms and simplify</strong><br>- 5th term: $\\frac{5}{8}$.<br>- 6th term: $\\frac{6}{8} = \\frac{3}{4}$.<br>- 7th term: $\\frac{7}{8}$.<br>- 8th term: $\\frac{8}{8} = 1$.</p></div>`,
    createdAt: new Date().toISOString()
  }
];

export const importYear7Ch4 = async (forceReset = false) => {
  console.log('[Ch4 Year 7 Import] Starting physical migration via writeBatch...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('[Ch4 Year 7 Import] forceReset is TRUE. Deleting existing questions for chapter y7-4...');
      const oldSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-4')));
      
      if (!oldSnap.empty) {
        const deleteBatch = writeBatch(db);
        oldSnap.docs.forEach((d) => {
          deleteBatch.delete(d.ref);
        });
        await deleteBatch.commit();
        console.log(`[Ch4 Year 7 Import] Deleted ${oldSnap.docs.length} old questions successfully.`);
      }
    }

    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-4')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    const insertBatch = writeBatch(db);
    let needCommit = false;
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        const newDocRef = doc(collection(db, 'questions'));
        insertBatch.set(newDocRef, q);
        importedCount++;
        needCommit = true;
      }
    }
    
    if (needCommit) {
      await insertBatch.commit();
      console.log(`[Ch4 Year 7 Import] Batch write successful. Inserted ${importedCount} questions.`);
    } else {
      console.log('[Ch4 Year 7 Import] All questions are already up to date.');
    }
  } catch (error) {
    console.error('[Ch4 Year 7 Import] ERROR DURING BATCH SYNC:', error);
    throw error;
  }
  
  return importedCount;
};
