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
  },

  // ==========================================
  // Q10: Writing Fractions with Constraints (Topic: 4D)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4d',
    topicCode: '4D',
    topicTitle: 'Comparison of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which fraction is closer to $1$ than $\\frac{9}{10}$?`,
    options: ["$\\frac{11}{12}$", "$\\frac{7}{8}$", "$\\frac{4}{5}$", "$\\frac{5}{6}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Calculate the distance to 1</strong><br>To find which fraction is closer to $1$, calculate the difference between $1$ and each fraction:<br>- For $\\frac{9}{10}$: $1 - \\frac{9}{10} = \\frac{1}{10} = 0.10$.<br>- For $\\frac{11}{12}$: $1 - \\frac{11}{12} = \\frac{1}{12} \\approx 0.0833$.<br>- For $\\frac{7}{8}$: $1 - \\frac{7}{8} = \\frac{1}{8} = 0.125$.<br>- For $\\frac{4}{5}$: $1 - \\frac{4}{5} = \\frac{1}{5} = 0.20$.<br>- For $\\frac{5}{6}$: $1 - \\frac{5}{6} = \\frac{1}{6} \\approx 0.1667$.</p><p><strong>Step 2: Compare distances</strong><br>Since $\\frac{1}{12} < \\frac{1}{10}$ ($0.0833 < 0.10$), $\\frac{11}{12}$ has a smaller distance to $1$, which means it is closer to $1$ than $\\frac{9}{10}$ is.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4d',
    topicCode: '4D',
    topicTitle: 'Comparison of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which fraction lies strictly between $\\frac{1}{4}$ and $\\frac{3}{4}$?`,
    options: ["$\\frac{5}{8}$", "$\\frac{1}{8}$", "$\\frac{7}{8}$", "$\\frac{9}{10}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find a common denominator</strong><br>To compare fractions easily, convert them to a common denominator of $8$:<br>- $\\frac{1}{4} = \\frac{2}{8}$<br>- $\\frac{3}{4} = \\frac{6}{8}$</p><p><strong>Step 2: Check which option is inside the range</strong><br>We need a fraction between $\\frac{2}{8}$ and $\\frac{6}{8}$. Among the options, $\\frac{5}{8}$ satisfies $\\frac{2}{8} < \\frac{5}{8} < \\frac{6}{8}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4d',
    topicCode: '4D',
    topicTitle: 'Comparison of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Which fraction is equivalent to $\\frac{2}{3}$, but has a denominator strictly greater than $60$?`,
    options: ["$\\frac{42}{63}$", "$\\frac{38}{57}$", "$\\frac{20}{30}$", "$\\frac{40}{60}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Apply denominator constraint</strong><br>The denominator must be strictly greater than $60$. This rules out:<br>- $\\frac{20}{30}$ (denominator is $30$)<br>- $\\frac{40}{60}$ (denominator is exactly $60$, which is not strictly greater than $60$)</p><p><strong>Step 2: Test remaining options</strong><br>- Check $\\frac{42}{63}$: Divide numerator and denominator by their greatest common divisor $21$:<br>$\\frac{42 \\div 21}{63 \\div 21} = \\frac{2}{3}$.<br>This fraction simplifies exactly to $\\frac{2}{3}$ and has denominator $63 > 60$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4d',
    topicCode: '4D',
    topicTitle: 'Comparison of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Which fraction lies strictly between the whole numbers $5$ and $6$?`,
    options: ["$\\frac{23}{4}$", "$\\frac{19}{4}$", "$\\frac{27}{4}$", "$\\frac{15}{3}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert improper fractions to mixed numerals</strong><br>- $\\frac{23}{4} = 5\\frac{3}{4}$ (between $5$ and $6$).<br>- $\\frac{19}{4} = 4\\frac{3}{4}$ (between $4$ and $5$).<br>- $\\frac{27}{4} = 6\\frac{3}{4}$ (between $6$ and $7$).<br>- $\\frac{15}{3} = 5$ (exactly equal to the integer $5$).</p><p><strong>Step 2: Find correct range</strong><br>$\\frac{23}{4} = 5\\frac{3}{4}$ is the only fraction that lies between $5$ and $6$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4d',
    topicCode: '4D',
    topicTitle: 'Comparison of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Which fraction is larger than $\\frac{3}{5}$ but smaller than $\\frac{7}{8}$?`,
    options: ["$\\frac{3}{4}$", "$\\frac{1}{2}$", "$\\frac{9}{10}$", "$\\frac{11}{20}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert fractions to decimals for comparison</strong><br>- Lower bound: $\\frac{3}{5} = 0.60$.<br>- Upper bound: $\\frac{7}{8} = 0.875$.</p><p><strong>Step 2: Convert options to decimals</strong><br>- $\\frac{3}{4} = 0.75$ (lies between $0.60$ and $0.875$).<br>- $\\frac{1}{2} = 0.50$ (less than $0.60$).<br>- $\\frac{9}{10} = 0.90$ (greater than $0.875$).<br>- $\\frac{11}{20} = 0.55$ (less than $0.60$).</p><p><strong>Step 3: Conclusion</strong><br>$\\frac{3}{4}$ lies inside the required boundaries.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q11: Ordering Fractions (Topic: 4D)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4d',
    topicCode: '4D',
    topicTitle: 'Comparison of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Order the unit fractions $\\frac{1}{3}, \\frac{1}{8}, \\frac{1}{5}, \\frac{1}{12}, \\frac{1}{2}$ from smallest to largest.`,
    options: [
      "$\\frac{1}{12}, \\frac{1}{8}, \\frac{1}{5}, \\frac{1}{3}, \\frac{1}{2}$",
      "$\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{5}, \\frac{1}{8}, \\frac{1}{12}$",
      "$\\frac{1}{8}, \\frac{1}{12}, \\frac{1}{5}, \\frac{1}{3}, \\frac{1}{2}$",
      "$\\frac{1}{12}, \\frac{1}{5}, \\frac{1}{8}, \\frac{1}{3}, \\frac{1}{2}$"
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand unit fractions</strong><br>For unit fractions (fractions with a numerator of $1$), the value of the fraction decreases as the denominator increases. A larger denominator means a whole is divided into more, smaller parts.</p><p><strong>Step 2: Arrange by denominator size in descending order</strong><br>$\\text{Denominator size: } 12 > 8 > 5 > 3 > 2$.<br>Therefore, the fractions in ascending order are:<br>$\\frac{1}{12} < \\frac{1}{8} < \\frac{1}{5} < \\frac{1}{3} < \\frac{1}{2}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4d',
    topicCode: '4D',
    topicTitle: 'Comparison of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Order these fractions from smallest to largest: $\\frac{2}{3}, \\frac{5}{6}, \\frac{7}{12}, \\frac{3}{4}$.`,
    options: [
      "$\\frac{7}{12}, \\frac{2}{3}, \\frac{3}{4}, \\frac{5}{6}$",
      "$\\frac{2}{3}, \\frac{7}{12}, \\frac{3}{4}, \\frac{5}{6}$",
      "$\\frac{7}{12}, \\frac{3}{4}, \\frac{2}{3}, \\frac{5}{6}$",
      "$\\frac{5}{6}, \\frac{3}{4}, \\frac{2}{3}, \\frac{7}{12}$"
    ],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find a common denominator</strong><br>The denominators are $3, 6, 12, 4$. The Lowest Common Multiple (LCM) is $12$.</p><p><strong>Step 2: Convert each fraction</strong><br>- $\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$<br>- $\\frac{5}{6} = \\frac{5 \\times 2}{6 \\times 2} = \\frac{10}{12}$<br>- $\\frac{7}{12} = \\frac{7}{12}$<br>- $\\frac{3}{4} = \\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$</p><p><strong>Step 3: Compare numerators</strong><br>Comparing the numerators: $7 < 8 < 9 < 10$.<br>So: $\\frac{7}{12} < \\frac{8}{12} < \\frac{9}{12} < \\frac{10}{12}$.<br>Substituting original fractions: $\\frac{7}{12} < \\frac{2}{3} < \\frac{3}{4} < \\frac{5}{6}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q12 & Q13: Basic Arithmetic Sums (Topic: 4E)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4e',
    topicCode: '4E',
    topicTitle: 'Addition and subtraction of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate the sum and write the answer in simplest form: $\\frac{2}{9} + \\frac{4}{9}$`,
    options: ["$\\frac{2}{3}$", "$\\frac{6}{9}$", "$\\frac{1}{3}$", "$\\frac{8}{9}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Add the numerators</strong><br>Since the denominators are the same, keep the denominator and add the numerators:<br>$\\frac{2}{9} + \\frac{4}{9} = \\frac{2 + 4}{9} = \\frac{6}{9}$.</p><p><strong>Step 2: Simplify the fraction</strong><br>Divide the numerator and denominator by their greatest common divisor $3$:<br>$\\frac{6 \\div 3}{9 \\div 3} = \\frac{2}{3}$.</p></div>`,
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
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate the sum and write in simplest form: $\\frac{3}{10} + \\frac{2}{5}$`,
    options: ["$\\frac{7}{10}$", "$\\frac{5}{15}$", "$\\frac{1}{2}$", "$\\frac{3}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find a common denominator</strong><br>The common denominator for $10$ and $5$ is $10$.</p><p><strong>Step 2: Convert fractions</strong><br>$\\frac{2}{5} = \\frac{2 \\times 2}{5 \\times 2} = \\frac{4}{10}$.</p><p><strong>Step 3: Add and simplify</strong><br>$\\frac{3}{10} + \\frac{4}{10} = \\frac{3 + 4}{10} = \\frac{7}{10}$. This is already in its simplest form.</p></div>`,
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
    question: `Evaluate the sum: $\\frac{2}{5} + \\frac{1}{3}$`,
    options: ["$\\frac{11}{15}$", "$\\frac{3}{8}$", "$\\frac{1}{15}$", "$\\frac{4}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find a common denominator</strong><br>The denominators $5$ and $3$ are co-prime. The common denominator is $5 \\times 3 = 15$.</p><p><strong>Step 2: Convert fractions</strong><br>- $\\frac{2}{5} = \\frac{2 \\times 3}{5 \\times 3} = \\frac{6}{15}$<br>- $\\frac{1}{3} = \\frac{1 \\times 5}{3 \\times 5} = \\frac{5}{15}$</p><p><strong>Step 3: Add</strong><br>$\\frac{6}{15} + \\frac{5}{15} = \\frac{6 + 5}{15} = \\frac{11}{15}$.</p></div>`,
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
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate the difference and write in simplest form: $\\frac{5}{6} - \\frac{1}{3}$`,
    options: ["$\\frac{1}{2}$", "$\\frac{4}{3}$", "$\\frac{3}{6}$", "$\\frac{2}{3}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find a common denominator</strong><br>The common denominator for $6$ and $3$ is $6$.</p><p><strong>Step 2: Convert the fraction</strong><br>$\\frac{1}{3} = \\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6}$.</p><p><strong>Step 3: Subtract and simplify</strong><br>$\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6}$.<br>Simplify by dividing both numerator and denominator by $3$: $\\frac{3 \\div 3}{6 \\div 3} = \\frac{1}{2}$.</p></div>`,
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
    question: `Evaluate the difference: $\\frac{4}{5} - \\frac{1}{3}$`,
    options: ["$\\frac{7}{15}$", "$\\frac{3}{2}$", "$\\frac{1}{15}$", "$\\frac{3}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find a common denominator</strong><br>The common denominator for $5$ and $3$ is $15$.</p><p><strong>Step 2: Convert both fractions</strong><br>- $\\frac{4}{5} = \\frac{4 \\times 3}{5 \\times 3} = \\frac{12}{15}$<br>- $\\frac{1}{3} = \\frac{1 \\times 5}{3 \\times 5} = \\frac{5}{15}$</p><p><strong>Step 3: Subtract</strong><br>$\\frac{12}{15} - \\frac{5}{15} = \\frac{7}{15}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Q15: Word Problems with Sums (Topic: 4F)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4f',
    topicCode: '4F',
    topicTitle: 'Word problems involving addition and subtraction of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Oliver collects $\\frac{3}{4}$ of a bucket of berries, Sophia collects $1\\frac{1}{2}$ buckets, and Noah collects $\\frac{1}{8}$ of a bucket. How many buckets of berries did they collect in total?`,
    options: ["$2\\frac{3}{8}$ buckets", "$2\\frac{1}{2}$ buckets", "$2\\frac{1}{8}$ buckets", "$2\\frac{5}{8}$ buckets"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Formulate the sum</strong><br>Total buckets $= \\frac{3}{4} + 1\\frac{1}{2} + \\frac{1}{8}$.</p><p><strong>Step 2: Convert the mixed number to an improper fraction</strong><br>$1\\frac{1}{2} = \\frac{3}{2}$.</p><p><strong>Step 3: Find a common denominator</strong><br>The common denominator for $4, 2, 8$ is $8$. Convert all fractions:<br>- $\\frac{3}{4} = \\frac{3 \\times 2}{4 \\times 2} = \\frac{6}{8}$<br>- $\\frac{3}{2} = \\frac{3 \\times 4}{2 \\times 4} = \\frac{12}{8}$<br>- $\\frac{1}{8} = \\frac{1}{8}$</p><p><strong>Step 4: Sum the fractions</strong><br>$\\frac{6}{8} + \\frac{12}{8} + \\frac{1}{8} = \\frac{19}{8}$.</p><p><strong>Step 5: Convert back to a mixed numeral</strong><br>$\\frac{19}{8} = 2\\frac{3}{8}$ buckets.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Ch5 Q2: Multiplication of Fractions (Topic: 4H)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4h',
    topicCode: '4H',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate: $\\frac{4}{5} \\times \\frac{3}{7}$`,
    options: ["$\\frac{12}{35}$", "$\\frac{28}{15}$", "$\\frac{7}{12}$", "$\\frac{12}{12}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply numerators and denominators</strong><br>Multiply the numerators together and the denominators together:<br>$\\frac{4}{5} \\times \\frac{3}{7} = \\frac{4 \\times 3}{5 \\times 7} = \\frac{12}{35}$. This cannot be simplified further.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4h',
    topicCode: '4H',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate and write in simplest form: $\\frac{5}{8} \\times \\frac{4}{15}$`,
    options: ["$\\frac{1}{6}$", "$\\frac{20}{120}$", "$\\frac{1}{12}$", "$\\frac{3}{8}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify by cross-cancellation</strong><br>Identify diagonal pairs:<br>- For $5$ and $15$: Divide both by $5$ to get $1$ and $3$.<br>- For $4$ and $8$: Divide both by $4$ to get $1$ and $2$.</p><p><strong>Step 2: Multiply simplified terms</strong><br>$\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1 \\times 1}{2 \\times 3} = \\frac{1}{6}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4h',
    topicCode: '4H',
    topicTitle: 'Multiplication of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Evaluate and write in simplest form: $\\frac{3}{5} \\times \\frac{10}{9} \\times \\frac{3}{4}$`,
    options: ["$\\frac{1}{2}$", "$\\frac{90}{180}$", "$\\frac{2}{3}$", "$\\frac{3}{4}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply the first two fractions</strong><br>$\\frac{3}{5} \\times \\frac{10}{9} = \\frac{3 \\times 10}{5 \\times 9} = \\frac{30}{45} = \\frac{2}{3}$ (dividing top and bottom by $15$).</p><p><strong>Step 2: Multiply by the third fraction</strong><br>$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{2 \\times 3}{3 \\times 4} = \\frac{6}{12} = \\frac{1}{2}$ (dividing by $6$).</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Ch5 Q2/Q3: Mixed Numeral Operations (Topic: 4J)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4j',
    topicCode: '4J',
    topicTitle: 'Multiplication and division of mixed numerals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Evaluate and write in simplest form: $2\\frac{1}{4} \\times \\frac{2}{3}$`,
    options: ["$1\\frac{1}{2}$", "$\\frac{18}{12}$", "$1\\frac{1}{3}$", "$2\\frac{1}{6}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert mixed numeral to improper fraction</strong><br>$2\\frac{1}{4} = \\frac{2 \\times 4 + 1}{4} = \\frac{9}{4}$.</p><p><strong>Step 2: Perform multiplication</strong><br>$\\frac{9}{4} \\times \\frac{2}{3} = \\frac{9 \\times 2}{4 \\times 3} = \\frac{18}{12}$.</p><p><strong>Step 3: Simplify</strong><br>Divide numerator and denominator by $6$:<br>$\\frac{18 \\div 6}{12 \\div 6} = \\frac{3}{2} = 1\\frac{1}{2}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4j',
    topicCode: '4J',
    topicTitle: 'Multiplication and division of mixed numerals',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Evaluate and write in simplest form: $1\\frac{1}{3} \\div 2\\frac{2}{5}$`,
    options: ["$\\frac{5}{9}$", "$1\\frac{4}{5}$", "$\\frac{9}{5}$", "$3\\frac{1}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert mixed numbers to improper fractions</strong><br>- $1\\frac{1}{3} = \\frac{1 \\times 3 + 1}{3} = \\frac{4}{3}$<br>- $2\\frac{2}{5} = \\frac{2 \\times 5 + 2}{5} = \\frac{12}{5}$</p><p><strong>Step 2: Multiply by the reciprocal of the divisor</strong><br>$\\frac{4}{3} \\div \\frac{12}{5} = \\frac{4}{3} \\times \\frac{5}{12}$.</p><p><strong>Step 3: Cross-cancel and compute</strong><br>Simplify $4$ and $12$ by dividing by $4$ ($4 \\rightarrow 1, 12 \\rightarrow 3$):<br>$\\frac{1}{3} \\times \\frac{5}{3} = \\frac{5}{9}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Ch5 Q3/Q4: Division of Fractions (Topic: 4I)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4i',
    topicCode: '4I',
    topicTitle: 'Division of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Evaluate and write in simplest form: $\\frac{2}{5} \\div \\frac{4}{15}$`,
    options: ["$1\\frac{1}{2}$", "$\\frac{30}{20}$", "$1\\frac{2}{3}$", "$\\frac{8}{75}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Multiply by reciprocal</strong><br>To divide by a fraction, multiply by its reciprocal:<br>$\\frac{2}{5} \\div \\frac{4}{15} = \\frac{2}{5} \\times \\frac{15}{4}$.</p><p><strong>Step 2: Cross-cancel and solve</strong><br>- For $2$ and $4$, divide by $2$ to get $1$ and $2$.<br>- For $5$ and $15$, divide by $5$ to get $1$ and $3$.<br>Multiply remaining: $\\frac{1 \\times 3}{1 \\times 2} = \\frac{3}{2} = 1\\frac{1}{2}$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4i',
    topicCode: '4I',
    topicTitle: 'Division of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate: $6 \\div \\frac{3}{5}$`,
    options: ["$10$", "$\\frac{18}{5}$", "$3\\frac{3}{5}$", "$12$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert whole number to fraction</strong><br>Write $6$ as $\\frac{6}{1}$.</p><p><strong>Step 2: Multiply by reciprocal</strong><br>$\\frac{6}{1} \\div \\frac{3}{5} = \\frac{6}{1} \\times \\frac{5}{3}$.</p><p><strong>Step 3: Simplify and compute</strong><br>Divide $6$ and $3$ by $3$ ($6 \\rightarrow 2, 3 \\rightarrow 1$):<br>$\\frac{2}{1} \\times \\frac{5}{1} = 10$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4i',
    topicCode: '4I',
    topicTitle: 'Division of fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isActive: true,
    isManual: true,
    question: `Evaluate: $\\frac{4}{7} \\div 2$`,
    options: ["$\\frac{2}{7}$", "$\\frac{8}{7}$", "$\\frac{4}{14}$", "$1\\frac{1}{7}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Convert whole number to fraction</strong><br>Write $2$ as $\\frac{2}{1}$.</p><p><strong>Step 2: Multiply by reciprocal</strong><br>$\\frac{4}{7} \\div \\frac{2}{1} = \\frac{4}{7} \\times \\frac{1}{2}$.</p><p><strong>Step 3: Simplify and compute</strong><br>Cross-cancel $4$ and $2$ by dividing by $2$ ($4 \\rightarrow 2, 2 \\rightarrow 1$):<br>$\\frac{2}{7} \\times \\frac{1}{1} = \\frac{2}{7}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Ch5 Q5/Q6: Order of Operations / Complex (Topic: 4L)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4l',
    topicCode: '4L',
    topicTitle: 'Order of operations with fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Evaluate and write in simplest form: $\\frac{2}{3} \\times \\frac{9}{10} + \\frac{2}{5}$`,
    options: ["$1$", "$\\frac{18}{30} + \\frac{2}{5}$", "$\\frac{4}{5}$", "$\\frac{3}{5}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Perform multiplication first</strong><br>Following BODMAS/PEMDAS, multiply before adding:<br>$\\frac{2}{3} \\times \\frac{9}{10} = \\frac{18}{30}$.<br>Simplify $\\frac{18}{30}$ by dividing by $6$: $\\frac{3}{5}$.</p><p><strong>Step 2: Perform addition</strong><br>$\\frac{3}{5} + \\frac{2}{5} = \\frac{3 + 2}{5} = \\frac{5}{5} = 1$.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4l',
    topicCode: '4L',
    topicTitle: 'Order of operations with fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Evaluate and write in simplest form: $\\frac{3}{4}$ of $\\frac{8}{9} \\times \\frac{1}{2}$`,
    options: ["$\\frac{1}{3}$", "$\\frac{1}{4}$", "$\\frac{2}{3}$", "$\\frac{1}{6}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Treat 'of' as multiplication</strong><br>$\\frac{3}{4}$ of $\\frac{8}{9} = \\frac{3}{4} \\times \\frac{8}{9} = \\frac{24}{36}$.<br>Simplify by dividing by $12$: $\\frac{2}{3}$.</p><p><strong>Step 2: Multiply by remaining fraction</strong><br>$\\frac{2}{3} \\times \\frac{1}{2} = \\frac{2}{6} = \\frac{1}{3}$ (dividing by $2$).</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4l',
    topicCode: '4L',
    topicTitle: 'Order of operations with fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Evaluate the complex fraction: $\\frac{\\frac{1}{2} + \\frac{1}{3}}{\\frac{5}{6} - \\frac{1}{6}}$`,
    options: ["$1\\frac{1}{4}$", "$1$", "$\\frac{5}{4}$", "$1\\frac{1}{2}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Simplify the numerator</strong><br>$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.</p><p><strong>Step 2: Simplify the denominator</strong><br>$\\frac{5}{6} - \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$.</p><p><strong>Step 3: Perform final division</strong><br>Numerator $\\div$ Denominator:<br>$\\frac{5}{6} \\div \\frac{2}{3} = \\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12}$.</p><p><strong>Step 4: Reduce to simplest form</strong><br>Divide top and bottom by $3$: $\\frac{15 \\div 3}{12 \\div 3} = \\frac{5}{4} = 1\\frac{1}{4}$.</p></div>`,
    createdAt: new Date().toISOString()
  },

  // ==========================================
  // Ch5 Q7-Q10: Advanced Word Problems (Topic: 4K)
  // ==========================================
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4k',
    topicCode: '4K',
    topicTitle: 'Word problems involving fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `A water tank that is $\\frac{2}{3}$ full contains $840$ liters of water. How many liters does it hold when it is completely full?`,
    options: ["$1260$ liters", "$1120$ liters", "$1680$ liters", "$1200$ liters"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the fraction</strong><br>We are given that $\\frac{2}{3}$ of the total capacity is equal to $840$ liters.</p><p><strong>Step 2: Find one fractional unit</strong><br>Find the volume of $\\frac{1}{3}$ of the tank by dividing by $2$:<br>$840 \\div 2 = 420$ liters.</p><p><strong>Step 3: Calculate full capacity</strong><br>The total capacity is $1$ whole ($3$ thirds), so multiply $\\frac{1}{3}$ of the capacity by $3$:<br>$420 \\times 3 = 1260$ liters.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4k',
    topicCode: '4K',
    topicTitle: 'Word problems involving fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `After driving $\\frac{3}{5}$ of a road trip journey, a driver has $180$ km further to go. What is the total length of the journey?`,
    options: ["$450$ km", "$300$ km", "$270$ km", "$540$ km"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Find fraction of remaining distance</strong><br>The total journey is $1$ whole. The remaining fraction is:<br>$1 - \\frac{3}{5} = \\frac{2}{5}$.</p><p><strong>Step 2: Set up relation</strong><br>We are given that this remaining $\\frac{2}{5}$ equals $180$ km.</p><p><strong>Step 3: Find one fractional unit</strong><br>Find $\\frac{1}{5}$ of the journey by dividing by $2$:<br>$180 \\div 2 = 90$ km.</p><p><strong>Step 4: Calculate total length</strong><br>The total journey is $5$ fifths, so multiply by $5$:<br>$90 \\times 5 = 450$ km.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4k',
    topicCode: '4K',
    topicTitle: 'Word problems involving fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `If you spend $\\frac{1}{4}$ of your savings, then $\\frac{1}{3}$ of what is left, and finally $\\frac{1}{2}$ of the remaining amount, what fraction of your original savings do you have left?`,
    options: ["$\\frac{1}{4}$", "$\\frac{1}{6}$", "$\\frac{1}{8}$", "$\\frac{1}{3}$"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Track the first transaction</strong><br>Start with $1$ whole. Spend $\\frac{1}{4}$, leaving:<br>$1 - \\frac{1}{4} = \\frac{3}{4}$ of your savings.</p><p><strong>Step 2: Track the second transaction</strong><br>Spend $\\frac{1}{3}$ of the remainder:<br>$\\frac{1}{3} \\times \\frac{3}{4} = \\frac{1}{4}$.<br>The remaining savings is now:<br>$\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$.</p><p><strong>Step 3: Track the third transaction</strong><br>Spend $\\frac{1}{2}$ of the new remainder:<br>$\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.<br>The final remaining savings is:<br>$\\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$ of your original savings.</p></div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-4',
    chapterTitle: 'Chapter 4: Fractions',
    topicId: 'y7-4k',
    topicCode: '4K',
    topicTitle: 'Word problems involving fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isActive: true,
    isManual: true,
    question: `Three bells toll together and ring every $1$ second, $1\\frac{1}{2}$ seconds, and $1\\frac{3}{4}$ seconds, respectively. After what period of time will they first toll together again?`,
    options: ["$21$ seconds", "$14$ seconds", "$10\\frac{1}{2}$ seconds", "$42$ seconds"],
    answer: 0,
    solution: `<div style="text-align: left;"><p><strong>Step 1: Understand the problem</strong><br>The bells will toll together at a time that is a multiple of all three intervals. We need to find the Least Common Multiple (LCM) of $1$, $1\\frac{1}{2} = \\frac{3}{2}$, and $1\\frac{3}{4} = \\frac{7}{4}$.</p><p><strong>Step 2: Convert to fractions with a common denominator</strong><br>Write all numbers with denominator $4$:<br>- $1 = \\frac{4}{4}$<br>- $\\frac{3}{2} = \\frac{6}{4}$<br>- $\\frac{7}{4} = \\frac{7}{4}$</p><p><strong>Step 3: Calculate LCM of fractional parts</strong><br>The formula for LCM of fractions is:<br>$\\text{LCM} = \\frac{\\text{LCM of the numerators}}{\\text{GCD of the denominators}}$.<br>1. LCM of numerators ($4, 6, 7$):<br>- Prime factorizations: $4 = 2^2$, $6 = 2 \\times 3$, $7 = 7$.<br>- LCM $= 2^2 \\times 3 \\times 7 = 4 \\times 3 \\times 7 = 84$.<br>2. GCD of denominators ($4, 4, 4$) is $4$.</p><p><strong>Step 4: Compute LCM</strong><br>$\\text{LCM} = \\frac{84}{4} = 21$ seconds.</p></div>`,
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
