import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore';

export const importYear11Ch3Questions = async () => {
  const questions = [
    // Q1: Determine which are functions
    {
      title: "Q1a - Is it a function?",
      question: "Determine which of the following relations are functions: graph (a) (a circle centered at origin).",
      type: "multiple_choice",
      options: [{text: "Function", imageUrl: ""}, {text: "Not a function", imageUrl: ""}],
      answer: "1",
      difficulty: "easy",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3B",
      topicTitle: "Functions, relations, and graphs",
      isManual: true,
      solution: "A circle fails the vertical line test; a vertical line can intersect it at two points. Therefore, it is not a function."
    },
    {
      title: "Q1b - Is it a function?",
      question: "Determine which of the following relations are functions: graph (b) (a cubic-like curve).",
      type: "multiple_choice",
      options: [{text: "Function", imageUrl: ""}, {text: "Not a function", imageUrl: ""}],
      answer: "0",
      difficulty: "easy",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3B",
      topicTitle: "Functions, relations, and graphs",
      isManual: true,
      solution: "The graph passes the vertical line test; any vertical line intersects the curve at most once. It is a function."
    },
    {
      title: "Q1c - Is it a function?",
      question: "Determine which of the following relations are functions: graph (c) (split relation).",
      type: "multiple_choice",
      options: [{text: "Function", imageUrl: ""}, {text: "Not a function", imageUrl: ""}],
      answer: "1",
      difficulty: "easy",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3B",
      topicTitle: "Functions, relations, and graphs",
      isManual: true,
      solution: "The graph contains points that align vertically, failing the vertical line test. It is not a function."
    },
    {
      title: "Q1d - Is it a function?",
      question: "Determine which of the following relations are functions: graph (d) (two parallel vertical lines).",
      type: "multiple_choice",
      options: [{text: "Function", imageUrl: ""}, {text: "Not a function", imageUrl: ""}],
      answer: "1",
      difficulty: "easy",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3B",
      topicTitle: "Functions, relations, and graphs",
      isManual: true,
      solution: "Vertical lines fail the vertical line test because they contain infinitely many y-values for a single x-value. Not a function."
    },

    // Q2: Domain and Range (Short Answer)
    {
      title: "Q2a - Domain and Range",
      question: "Write down the domain and range of the relation in Question 1, graph (a) (Circle radius 2).",
      type: "short_answer",
      answer: "Domain: [-2, 2], Range: [-2, 2]",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3B",
      topicTitle: "Functions, relations, and graphs",
      isManual: true,
      solution: "The circle spans from -2 to 2 on the x-axis (Domain) and from -2 to 2 on the y-axis (Range)."
    },

    // Q3: Evaluate functions
    {
      title: "Q3a(1) - Evaluate f(3)",
      question: "For $f(x) = x^2 + 4x$, find $f(3)$.",
      type: "short_answer",
      answer: "21",
      difficulty: "easy",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3A",
      topicTitle: "Functions and function notation",
      isManual: true,
      solution: "$f(3) = (3)^2 + 4(3) = 9 + 12 = 21$."
    },
    {
      title: "Q3a(2) - Evaluate f(-2)",
      question: "For $f(x) = x^2 + 4x$, find $f(-2)$.",
      type: "short_answer",
      answer: "-4",
      difficulty: "easy",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3A",
      topicTitle: "Functions and function notation",
      isManual: true,
      solution: "$f(-2) = (-2)^2 + 4(-2) = 4 - 8 = -4$."
    },
    {
      title: "Q3b(1) - Evaluate f(3)",
      question: "For $f(x) = x^3 - 3x^2 + 5$, find $f(3)$.",
      type: "short_answer",
      answer: "5",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3A",
      topicTitle: "Functions and function notation",
      isManual: true,
      solution: "$f(3) = 3^3 - 3(3^2) + 5 = 27 - 27 + 5 = 5$."
    },
    {
      title: "Q3b(2) - Evaluate f(-2)",
      question: "For $f(x) = x^3 - 3x^2 + 5$, find $f(-2)$.",
      type: "short_answer",
      answer: "-15",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3A",
      topicTitle: "Functions and function notation",
      isManual: true,
      solution: "$f(-2) = (-2)^3 - 3(-2)^2 + 5 = -8 - 12 + 5 = -15$."
    },

    // Q4: Natural Domain
    {
      title: "Q4a - Natural Domain",
      question: "Find the natural domain of $f(x) = \\frac{1}{x-2}$.",
      type: "short_answer",
      answer: "x != 2",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3B",
      topicTitle: "Functions, relations, and graphs",
      isManual: true,
      solution: "Denominator cannot be zero: $x-2 \\neq 0 \\implies x \\neq 2$."
    },
    {
      title: "Q4b - Natural Domain",
      question: "Find the natural domain of $f(x) = \\sqrt{x-1}$.",
      type: "short_answer",
      answer: "x >= 1",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3B",
      topicTitle: "Functions, relations, and graphs",
      isManual: true,
      solution: "Square root requires non-negative argument: $x-1 \\geq 0 \\implies x \\geq 1$."
    },
    {
      title: "Q4c - Natural Domain",
      question: "Find the natural domain of $f(x) = \\sqrt{3x+2}$.",
      type: "short_answer",
      answer: "x >= -2/3",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3B",
      topicTitle: "Functions, relations, and graphs",
      isManual: true,
      solution: "$3x+2 \\geq 0 \\implies 3x \\geq -2 \\implies x \\geq -2/3$."
    },
    {
      title: "Q4d - Natural Domain",
      question: "Find the natural domain of $f(x) = \\frac{1}{\\sqrt{2-x}}$.",
      type: "short_answer",
      answer: "x < 2",
      difficulty: "hard",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3B",
      topicTitle: "Functions, relations, and graphs",
      isManual: true,
      solution: "Denominator must be positive and non-zero: $2-x > 0 \\implies x < 2$."
    },

    // Q5: F(a)-1 and F(a-1)
    {
      title: "Q5a(1) - Functional Expression",
      question: "For $F(x) = 2x + 3$, find $F(a) - 1$.",
      type: "short_answer",
      answer: "2a + 2",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3A",
      topicTitle: "Functions and function notation",
      isManual: true,
      solution: "$F(a) - 1 = (2a + 3) - 1 = 2a + 2$."
    },
    {
      title: "Q5a(2) - Functional Expression",
      question: "For $F(x) = 2x + 3$, find $F(a - 1)$.",
      type: "short_answer",
      answer: "2a + 1",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3A",
      topicTitle: "Functions and function notation",
      isManual: true,
      solution: "$F(a - 1) = 2(a - 1) + 3 = 2a - 2 + 3 = 2a + 1$."
    },

    // Q6: Sketching with intercepts
    {
      title: "Q6a - Intercepts and Sketch",
      question: "Find the $x$-intercept and the $y$-intercept of $y = 2x + 2$, then sketch use the intercepts to sketch the line.",
      type: "graph_sketch",
      answer: "x-int: -1, y-int: 2",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3C",
      topicTitle: "Review of linear graphs",
      isManual: true,
      solution: "$y$-int (x=0): 2. $x$-int (y=0): $2x+2=0 \\implies x=-1$. Sketch the line passing through (-1, 0) and (0, 2)."
    },
    {
      title: "Q6b - Intercepts and Sketch",
      question: "Find the $x$-intercept and the $y$-intercept of $x - 3y + 6 = 0$, then sketch use the intercepts to sketch the line.",
      type: "graph_sketch",
      answer: "x-int: -6, y-int: 2",
      difficulty: "medium",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3C",
      topicTitle: "Review of linear graphs",
      isManual: true,
      solution: "$y$-int (x=0): $-3y+6=0 \\implies y=2$. $x$-int (y=0): $x+6=0 \\implies x=-6$. Sketch the line passing through (-6, 0) and (0, 2)."
    },

    // Q7: Sketch through origin
    {
      title: "Q7a - Sketch through origin",
      question: "Sketch the line $y = 2x$ through the origin.",
      type: "graph_sketch",
      answer: "Line y=2x",
      difficulty: "easy",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3C",
      topicTitle: "Review of linear graphs",
      isManual: true,
      solution: "The line passes through (0, 0) and (1, 2)."
    },

    // Q8: Sketch vertical/horizontal
    {
      title: "Q8a - Sketch vertical/horizontal",
      question: "Sketch the horizontal line $y = -1$.",
      type: "graph_sketch",
      answer: "Horizontal line y=-1",
      difficulty: "easy",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3C",
      topicTitle: "Review of linear graphs",
      isManual: true,
      solution: "A horizontal line crossing the y-axis at -1."
    },

    // Q9: Quadratic sketch
    {
      title: "Q9a - Quadratic Sketch",
      question: "Find the zeroes of $y = f(x) = 16 - x^2$. Sketch the graph showing all intercepts and the coordinates of the vertex. Also state the domain and range.",
      type: "graph_sketch",
      answer: "Zeroes: -4, 4. Vertex: (0, 16). Domain: R, Range: y <= 16",
      difficulty: "hard",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3D",
      topicTitle: "Quadratic functions — factoring and the graph",
      isManual: true,
      solution: "Zeroes: $16-x^2=0 \\implies x=\\pm 4$. Vertex: (0, 16). Parabola opens downwards."
    },
    {
      title: "Q9e - Quadratic Sketch",
      question: "Find the zeroes of $y = f(x) = x^2 + x - 6$. Sketch the graph showing all intercepts and the coordinates of the vertex. Also state the domain and range.",
      type: "graph_sketch",
      answer: "Zeroes: -3, 2. Vertex: (-0.5, -6.25). Domain: R, Range: y >= -6.25",
      difficulty: "hard",
      year: "Year 11",
      chapterId: "y11a-3",
      chapterTitle: "Chapter 3: Functions and graphs",
      topicId: "y11a-3D",
      topicTitle: "Quadratic functions — factoring and the graph",
      isManual: true,
      solution: "$x^2+x-6 = (x+3)(x-2)$. Zeroes: -3, 2. Vertex: $x = -0.5, y = (-0.5)^2 + (-0.5) - 6 = -6.25$."
    }
  ];

  try {
    // Check if any already exist to avoid duplicates
    const qSnap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-3'), where('isManual', '==', true)));
    console.log(`Current questions for y11a-3: ${qSnap.size}`);
    
    if (qSnap.size > 15) {
      console.log("Questions already imported (found > 15). Skipping.");
      return;
    }

    console.log(`Starting import of ${questions.length} questions...`);
    for (const q of questions) {
      await addDoc(collection(db, 'questions'), {
        ...q,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    }
    console.log("Import complete!");
  } catch (err) {
    console.error("Import failed:", err);
  }
};
