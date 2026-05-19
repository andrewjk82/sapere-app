import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const ch2cQuestions = [
  // 1. Evaluate "of" (6 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'easy', question: 'Evaluate: $\\frac{3}{4}$ of $\\frac{8}{15}$', options: ['$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{3}{5}$', '$\\frac{2}{15}$'], answer: 0, solution: '$\\frac{3}{4} \\times \\frac{8}{15} = \\frac{3 \\times 8}{4 \\times 15}$. Cancel 3 and 15 (gives 5), cancel 4 and 8 (gives 2). Result: $\\frac{2}{5}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'easy', question: 'Evaluate: $\\frac{2}{5}$ of $\\frac{15}{16}$', options: ['$\\frac{3}{8}$', '$\\frac{1}{8}$', '$\\frac{5}{8}$', '$\\frac{3}{16}$'], answer: 0, solution: '$\\frac{2}{5} \\times \\frac{15}{16} = \\frac{2 \\times 15}{5 \\times 16}$. Cancel 5 and 15 (gives 3), cancel 2 and 16 (gives 8). Result: $\\frac{3}{8}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{4}{7}$ of $28$', options: ['$16$', '$12$', '$24$', '$14$'], answer: 0, solution: '$\\frac{4}{7} \\times \\frac{28}{1} = \\frac{4 \\times 28}{7}$. Cancel 7 and 28 (gives 4). $4 \\times 4 = 16$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'easy', question: 'Evaluate: $\\frac{5}{9}$ of $\\frac{18}{25}$', options: ['$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{3}{5}$', '$\\frac{2}{9}$'], answer: 0, solution: '$\\frac{5}{9} \\times \\frac{18}{25}$. Cancel 9 and 18 (gives 2). Cancel 5 and 25 (gives 5). Result: $\\frac{2}{5}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{7}{12}$ of $48$', options: ['$28$', '$24$', '$32$', '$21$'], answer: 0, solution: '$\\frac{7}{12} \\times \\frac{48}{1}$. Cancel 12 and 48 (gives 4). $7 \\times 4 = 28$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{8}{15}$ of $45$', options: ['$24$', '$18$', '$30$', '$20$'], answer: 0, solution: '$\\frac{8}{15} \\times \\frac{45}{1}$. Cancel 15 and 45 (gives 3). $8 \\times 3 = 24$.' },

  // 2. Evaluate multiplication (15 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'easy', question: 'Evaluate: $\\frac{1}{4} \\times \\frac{1}{5}$', options: ['$\\frac{1}{20}$', '$\\frac{2}{9}$', '$\\frac{1}{9}$', '$\\frac{2}{20}$'], answer: 0, solution: 'Multiply numerators: $1 \\times 1 = 1$. Multiply denominators: $4 \\times 5 = 20$. Result: $\\frac{1}{20}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'easy', question: 'Evaluate: $\\frac{1}{6} \\times \\frac{1}{7}$', options: ['$\\frac{1}{42}$', '$\\frac{2}{13}$', '$\\frac{1}{13}$', '$\\frac{1}{36}$'], answer: 0, solution: '$\\frac{1 \\times 1}{6 \\times 7} = \\frac{1}{42}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{2}{5} \\times \\frac{1}{4}$', options: ['$\\frac{1}{10}$', '$\\frac{2}{20}$', '$\\frac{3}{9}$', '$\\frac{1}{5}$'], answer: 0, solution: '$\\frac{2 \\times 1}{5 \\times 4} = \\frac{2}{20}$. Simplify: $\\frac{1}{10}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{5}{9} \\times \\frac{3}{10}$', options: ['$\\frac{1}{6}$', '$\\frac{1}{5}$', '$\\frac{2}{15}$', '$\\frac{1}{3}$'], answer: 0, solution: 'Cancel 5 and 10 (gives 2), 3 and 9 (gives 3). Result: $\\frac{1}{3 \\times 2} = \\frac{1}{6}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{5}{24} \\times \\frac{8}{15}$', options: ['$\\frac{1}{9}$', '$\\frac{1}{8}$', '$\\frac{2}{9}$', '$\\frac{1}{12}$'], answer: 0, solution: 'Cancel 5 and 15 (gives 3), 8 and 24 (gives 3). Result: $\\frac{1}{3 \\times 3} = \\frac{1}{9}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{7}{20} \\times \\frac{4}{21}$', options: ['$\\frac{1}{15}$', '$\\frac{1}{12}$', '$\\frac{1}{20}$', '$\\frac{2}{15}$'], answer: 0, solution: 'Cancel 7 and 21 (gives 3), 4 and 20 (gives 5). Result: $\\frac{1}{5 \\times 3} = \\frac{1}{15}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{18}{25} \\times \\frac{5}{9}$', options: ['$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{3}{5}$', '$\\frac{2}{25}$'], answer: 0, solution: 'Cancel 18 and 9 (gives 2), 5 and 25 (gives 5). Result: $\\frac{2}{5}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{12}{35} \\times \\frac{14}{15}$', options: ['$\\frac{8}{25}$', '$\\frac{6}{25}$', '$\\frac{7}{25}$', '$\\frac{4}{15}$'], answer: 0, solution: 'Cancel 12 and 15 by 3 (gives 4 and 5). Cancel 14 and 35 by 7 (gives 2 and 5). Result: $\\frac{4 \\times 2}{5 \\times 5} = \\frac{8}{25}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{21}{32} \\times \\frac{8}{27}$', options: ['$\\frac{7}{36}$', '$\\frac{5}{36}$', '$\\frac{7}{24}$', '$\\frac{3}{32}$'], answer: 0, solution: 'Cancel 21 and 27 by 3 (gives 7 and 9). Cancel 8 and 32 by 8 (gives 1 and 4). Result: $\\frac{7 \\times 1}{4 \\times 9} = \\frac{7}{36}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{11}{40} \\times \\frac{24}{33}$', options: ['$\\frac{1}{5}$', '$\\frac{2}{5}$', '$\\frac{3}{10}$', '$\\frac{1}{4}$'], answer: 0, solution: 'Cancel 11 and 33 (gives 1 and 3). Cancel 24 and 40 by 8 (gives 3 and 5). Result: $\\frac{1 \\times 3}{5 \\times 3} = \\frac{1}{5}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{9}{14} \\times \\frac{7}{18}$', options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{8}$', '$\\frac{1}{6}$'], answer: 0, solution: 'Cancel 9 and 18 (gives 2), 7 and 14 (gives 2). Result: $\\frac{1}{2 \\times 2} = \\frac{1}{4}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{5}{6} \\times \\frac{9}{20}$', options: ['$\\frac{3}{8}$', '$\\frac{1}{8}$', '$\\frac{5}{8}$', '$\\frac{3}{10}$'], answer: 0, solution: 'Cancel 5 and 20 (gives 4). Cancel 9 and 6 by 3 (gives 3 and 2). Result: $\\frac{3}{2 \\times 4} = \\frac{3}{8}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{15}{28} \\times \\frac{14}{25}$', options: ['$\\frac{3}{10}$', '$\\frac{1}{10}$', '$\\frac{3}{5}$', '$\\frac{1}{5}$'], answer: 0, solution: 'Cancel 15 and 25 by 5 (gives 3 and 5). Cancel 14 and 28 by 14 (gives 1 and 2). Result: $\\frac{3 \\times 1}{2 \\times 5} = \\frac{3}{10}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{27}{44} \\times \\frac{22}{45}$', options: ['$\\frac{3}{10}$', '$\\frac{3}{20}$', '$\\frac{1}{10}$', '$\\frac{1}{5}$'], answer: 0, solution: 'Cancel 27 and 45 by 9 (gives 3 and 5). Cancel 22 and 44 by 22 (gives 1 and 2). Result: $\\frac{3 \\times 1}{2 \\times 5} = \\frac{3}{10}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{9}{16} \\times \\frac{24}{35}$', options: ['$\\frac{27}{70}$', '$\\frac{9}{35}$', '$\\frac{27}{35}$', '$\\frac{18}{70}$'], answer: 0, solution: 'Cancel 24 and 16 by 8 (gives 3 and 2). Result: $\\frac{9 \\times 3}{2 \\times 35} = \\frac{27}{70}$.' },

  // 3. Mixed numbers (9 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $1\\frac{1}{4} \\times 2\\frac{2}{5}$', options: ['$3$', '$2\\frac{1}{2}$', '$3\\frac{1}{4}$', '$2\\frac{3}{4}$'], answer: 0, solution: 'Convert to improper fractions: $\\frac{5}{4} \\times \\frac{12}{5}$.\nCancel 5 and 5. Cancel 12 and 4 (gives 3). Result: $3$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $2\\frac{1}{3} \\times 1\\frac{2}{7}$', options: ['$3$', '$2\\frac{1}{7}$', '$3\\frac{1}{3}$', '$2\\frac{2}{21}$'], answer: 0, solution: '$\\frac{7}{3} \\times \\frac{9}{7}$.\nCancel 7 and 7. Cancel 9 and 3 (gives 3). Result: $3$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $3\\frac{1}{5} \\times 1\\frac{7}{8}$', options: ['$6$', '$5$', '$4\\frac{1}{2}$', '$6\\frac{1}{4}$'], answer: 0, solution: '$\\frac{16}{5} \\times \\frac{15}{8}$.\nCancel 16 and 8 (gives 2). Cancel 15 and 5 (gives 3). Result: $2 \\times 3 = 6$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $1\\frac{3}{8} \\times 2\\frac{2}{11}$', options: ['$3$', '$2\\frac{1}{4}$', '$3\\frac{1}{8}$', '$2\\frac{3}{4}$'], answer: 0, solution: '$\\frac{11}{8} \\times \\frac{24}{11}$.\nCancel 11 and 11. Cancel 24 and 8 (gives 3). Result: $3$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $2\\frac{4}{7} \\times 1\\frac{5}{9}$', options: ['$4$', '$3\\frac{1}{2}$', '$4\\frac{1}{7}$', '$3\\frac{8}{9}$'], answer: 0, solution: '$\\frac{18}{7} \\times \\frac{14}{9}$.\nCancel 18 and 9 (gives 2). Cancel 14 and 7 (gives 2). Result: $2 \\times 2 = 4$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $4\\frac{1}{6} \\times 1\\frac{1}{5}$', options: ['$5$', '$4\\frac{1}{5}$', '$6$', '$5\\frac{1}{6}$'], answer: 0, solution: '$\\frac{25}{6} \\times \\frac{6}{5}$.\nCancel 6 and 6. Cancel 25 and 5 (gives 5). Result: $5$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $1\\frac{7}{9} \\times 2\\frac{1}{4}$', options: ['$4$', '$3\\frac{1}{4}$', '$4\\frac{1}{2}$', '$3\\frac{7}{9}$'], answer: 0, solution: '$\\frac{16}{9} \\times \\frac{9}{4}$.\nCancel 9 and 9. Cancel 16 and 4 (gives 4). Result: $4$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $3\\frac{3}{5} \\times 1\\frac{1}{9}$', options: ['$4$', '$3\\frac{1}{5}$', '$4\\frac{2}{5}$', '$3\\frac{8}{9}$'], answer: 0, solution: '$\\frac{18}{5} \\times \\frac{10}{9}$.\nCancel 18 and 9 (gives 2). Cancel 10 and 5 (gives 2). Result: $2 \\times 2 = 4$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $2\\frac{5}{8} \\times 1\\frac{1}{7}$', options: ['$3$', '$2\\frac{3}{4}$', '$3\\frac{1}{8}$', '$2\\frac{6}{7}$'], answer: 0, solution: '$\\frac{21}{8} \\times \\frac{8}{7}$.\nCancel 8 and 8. Cancel 21 and 7 (gives 3). Result: $3$.' },

  // 4. Word problem (1 Q)
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: '$\\frac{5}{6}$ of a group of 864 students play sports. How many students is this?', options: ['$720$', '$740$', '$700$', '$760$'], answer: 0, solution: '$\\frac{5}{6} \\times 864 = 5 \\times (864 \\div 6) = 5 \\times 144 = 720$ students.' },

  // 5. Quantities (8 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Find the value of: $\\frac{2}{5}$ of 40 L', options: ['$16$ L', '$14$ L', '$18$ L', '$12$ L'], answer: 0, solution: '$\\frac{2}{5} \\times 40 = 2 \\times (40 \\div 5) = 2 \\times 8 = 16$ L.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Find the value of: $\\frac{3}{8}$ of 24 km', options: ['$9$ km', '$6$ km', '$12$ km', '$8$ km'], answer: 0, solution: '$\\frac{3}{8} \\times 24 = 3 \\times 3 = 9$ km.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Find the value of: $\\frac{7}{10}$ of 5000 m', options: ['$3500$ m', '$3000$ m', '$4000$ m', '$350$ m'], answer: 0, solution: '$\\frac{7}{10} \\times 5000 = 7 \\times 500 = 3500$ m.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Find the value of: $\\frac{4}{9}$ of 72 m', options: ['$32$ m', '$28$ m', '$36$ m', '$24$ m'], answer: 0, solution: '$\\frac{4}{9} \\times 72 = 4 \\times 8 = 32$ m.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Find the value of: $\\frac{3}{4}$ of 80 kg', options: ['$60$ kg', '$50$ kg', '$70$ kg', '$40$ kg'], answer: 0, solution: '$\\frac{3}{4} \\times 80 = 3 \\times 20 = 60$ kg.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Find the value of: $\\frac{5}{12}$ of 144 mm', options: ['$60$ mm', '$50$ mm', '$70$ mm', '$48$ mm'], answer: 0, solution: '$\\frac{5}{12} \\times 144 = 5 \\times 12 = 60$ mm.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Find the value of: $\\frac{2}{7}$ of 210 m', options: ['$60$ m', '$50$ m', '$70$ m', '$40$ m'], answer: 0, solution: '$\\frac{2}{7} \\times 210 = 2 \\times 30 = 60$ m.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Find the value of: $\\frac{9}{20}$ of 400 km', options: ['$180$ km', '$160$ km', '$200$ km', '$190$ km'], answer: 0, solution: '$\\frac{9}{20} \\times 400 = 9 \\times 20 = 180$ km.' },

  // 6. Division (12 Qs)
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $\\frac{3}{5} \\div \\frac{2}{7}$', options: ['$2\\frac{1}{10}$', '$1\\frac{1}{10}$', '$2\\frac{3}{10}$', '$1\\frac{3}{10}$'], answer: 0, solution: 'Multiply by reciprocal: $\\frac{3}{5} \\times \\frac{7}{2} = \\frac{21}{10}$.\nConvert to mixed number: $2\\frac{1}{10}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $\\frac{5}{9} \\div \\frac{4}{11}$', options: ['$1\\frac{19}{36}$', '$1\\frac{17}{36}$', '$2\\frac{5}{36}$', '$1\\frac{13}{36}$'], answer: 0, solution: 'Multiply by reciprocal: $\\frac{5}{9} \\times \\frac{11}{4} = \\frac{55}{36}$.\nConvert to mixed number: $1\\frac{19}{36}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $\\frac{2}{7} \\div \\frac{3}{8}$', options: ['$\\frac{16}{21}$', '$\\frac{15}{21}$', '$\\frac{17}{21}$', '$\\frac{14}{21}$'], answer: 0, solution: '$\\frac{2}{7} \\times \\frac{8}{3} = \\frac{16}{21}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $12 \\div \\frac{8}{5}$', options: ['$7\\frac{1}{2}$', '$6\\frac{1}{2}$', '$8\\frac{1}{2}$', '$7$'], answer: 0, solution: '$\\frac{12}{1} \\times \\frac{5}{8}$. Cancel 12 and 8 by 4 (gives 3 and 2).\n$\\frac{3 \\times 5}{2} = \\frac{15}{2} = 7\\frac{1}{2}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{4}{5} \\div 8$', options: ['$\\frac{1}{10}$', '$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{3}{10}$'], answer: 0, solution: '$\\frac{4}{5} \\times \\frac{1}{8}$. Cancel 4 and 8 (gives 2).\nResult: $\\frac{1}{5 \\times 2} = \\frac{1}{10}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'medium', question: 'Evaluate: $\\frac{3}{10} \\div 9$', options: ['$\\frac{1}{30}$', '$\\frac{1}{20}$', '$\\frac{1}{10}$', '$\\frac{3}{10}$'], answer: 0, solution: '$\\frac{3}{10} \\times \\frac{1}{9}$. Cancel 3 and 9 (gives 3).\nResult: $\\frac{1}{10 \\times 3} = \\frac{1}{30}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $\\frac{7}{12} \\div \\frac{5}{4}$', options: ['$\\frac{7}{15}$', '$\\frac{8}{15}$', '$\\frac{6}{15}$', '$\\frac{7}{12}$'], answer: 0, solution: '$\\frac{7}{12} \\times \\frac{4}{5}$. Cancel 4 and 12 (gives 3).\nResult: $\\frac{7}{3 \\times 5} = \\frac{7}{15}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $\\frac{5}{18} \\div 10$', options: ['$\\frac{1}{36}$', '$\\frac{1}{18}$', '$\\frac{1}{72}$', '$\\frac{5}{18}$'], answer: 0, solution: '$\\frac{5}{18} \\times \\frac{1}{10}$. Cancel 5 and 10 (gives 2).\nResult: $\\frac{1}{18 \\times 2} = \\frac{1}{36}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $\\frac{4}{9} \\div \\frac{8}{3}$', options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{2}{9}$'], answer: 0, solution: '$\\frac{4}{9} \\times \\frac{3}{8}$. Cancel 4 and 8 (gives 2), 3 and 9 (gives 3).\nResult: $\\frac{1}{3 \\times 2} = \\frac{1}{6}$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $15 \\div \\frac{5}{4}$', options: ['$12$', '$10$', '$15$', '$16$'], answer: 0, solution: '$\\frac{15}{1} \\times \\frac{4}{5}$. Cancel 15 and 5 (gives 3).\n$3 \\times 4 = 12$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $20 \\div \\frac{4}{7}$', options: ['$35$', '$30$', '$28$', '$42$'], answer: 0, solution: '$\\frac{20}{1} \\times \\frac{7}{4}$. Cancel 20 and 4 (gives 5).\n$5 \\times 7 = 35$.' },
  { chapterId: 'y8-2', topicId: 'y8-2c', difficulty: 'hard', question: 'Evaluate: $\\frac{14}{15} \\div \\frac{7}{5}$', options: ['$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{3}{5}$', '$\\frac{4}{5}$'], answer: 0, solution: '$\\frac{14}{15} \\times \\frac{5}{7}$. Cancel 14 and 7 (gives 2), 5 and 15 (gives 3).\nResult: $\\frac{2}{3}$.' }
];

async function seed() {
  console.log(`[Ch2C Import] Seeding ${ch2cQuestions.length} questions to Year 8 Chapter 2C...`);
  const batch = db.batch();
  const collRef = db.collection('questions');
  
  ch2cQuestions.forEach(q => {
    const docRef = collRef.doc();
    batch.set(docRef, {
      ...q,
      chapterTitle: 'Chapter 2: Fractions and decimals',
      topicCode: '2C',
      topicTitle: 'Multiplying and dividing fractions',
      year: 'Year 8',
      type: 'multiple_choice',
      isManual: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
  });

  await batch.commit();
  console.log(`Successfully added ${ch2cQuestions.length} questions to 2C!`);
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
