import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-5',
  chapterTitle: 'Chapter 5: Functions and Graphs',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

const questions5A = [
  // --- Q1: Transformations of Parabola (Modified) ---
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'Find the value of $y = (x - 2)^2$ when $x = 3$.',
    options: [{ text: '1', imageUrl: '' }, { text: '2', imageUrl: '' }, { text: '4', imageUrl: '' }, { text: '9', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Substitute $x = 3$ into the equation.\n$$y = (3 - 2)^2$$\nStep 2: Simplify the expression inside the parenthesis.\n$$y = (1)^2$$\nStep 3: Calculate the square.\n$$y = 1$$'
  },
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'What is the coordinates of the vertex for the parabola $y = (x - 3)^2$?',
    options: [{ text: '$(3, 0)$', imageUrl: '' }, { text: '$(-3, 0)$', imageUrl: '' }, { text: '$(0, 3)$', imageUrl: '' }, { text: '$(0, -3)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Identify the standard vertex form $y = a(x - h)^2 + k$.\nStep 2: Compare $y = (x - 3)^2$ to the standard form.\n- Here, $h = 3$ and $k = 0$.\nStep 3: The vertex is $(h, k)$.\nResult: $(3, 0)$'
  },
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'Which transformation maps the graph of $y = x^2$ onto $y = (x - 4)^2$?',
    options: [
      { text: 'A horizontal shift 4 units to the right', imageUrl: '' },
      { text: 'A horizontal shift 4 units to the left', imageUrl: '' },
      { text: 'A vertical shift 4 units up', imageUrl: '' },
      { text: 'A vertical shift 4 units down', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Analyze the change in the function. The variable $x$ is replaced by $(x - 4)$.\nStep 2: Recall the rule: $f(x - h)$ represents a horizontal shift of $h$ units.\nStep 3: Since $h = 4$ (positive), the graph moves to the **right**.\nResult: 4 units to the right.'
  },

  // --- Q2: Transformations of Cubic (Modified) ---
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'Find the $y$-intercept of the cubic function $y = \\frac{1}{2}x^3 + 4$.',
    options: [{ text: '$(0, 4)$', imageUrl: '' }, { text: '$(0, 2)$', imageUrl: '' }, { text: '$(4, 0)$', imageUrl: '' }, { text: '$(0, 0)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: To find the $y$-intercept, set $x = 0$.\nStep 2: Substitute into the equation:\n$$y = \\frac{1}{2}(0)^3 + 4$$\n$$y = 0 + 4 = 4$$\nStep 3: The intercept is a point $(0, 4)$.'
  },
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'What transformation maps $y = x^3$ to $y = x^3 + 5$?',
    options: [
      { text: 'A vertical shift 5 units up', imageUrl: '' },
      { text: 'A vertical shift 5 units down', imageUrl: '' },
      { text: 'A horizontal shift 5 units left', imageUrl: '' },
      { text: 'A horizontal shift 5 units right', imageUrl: '' }
    ],
    answer: "0",
    solution: 'Step 1: Observe that 5 is added to the entire function ($y = f(x) + k$).\nStep 2: Adding a constant $k$ outside the parent function moves the graph vertically.\nStep 3: Since $k = 5$ is positive, the shift is **upward**.\nResult: 5 units up.'
  },

  // --- Q3: Parabola Shifting Logic ---
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'How has the parabola $y = x^2$ been shifted to produce $y = x^2 + 3$?',
    options: [{ text: 'Shifted 3 units up', imageUrl: '' }, { text: 'Shifted 3 units down', imageUrl: '' }, { text: 'Shifted 3 units right', imageUrl: '' }, { text: 'Shifted 3 units left', imageUrl: '' }],
    answer: "0",
    solution: 'The transformation $y = f(x) + k$ shifts the graph vertically by $k$ units. Here $k = 3$, so it is 3 units up.'
  },
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'How has the parabola $y = x^2$ been shifted to produce $y = (x + 5)^2$?',
    options: [{ text: 'Shifted 5 units left', imageUrl: '' }, { text: 'Shifted 5 units right', imageUrl: '' }, { text: 'Shifted 5 units up', imageUrl: '' }, { text: 'Shifted 5 units down', imageUrl: '' }],
    answer: "0",
    solution: 'The transformation $y = f(x + h)$ shifts the graph horizontally. For $x + 5$, the shift is 5 units to the **left**.'
  },

  // --- Q4: Hyperbola Shifting Logic ---
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'Describe the shift from $y = \\frac{1}{x}$ to $y = \\frac{1}{x - 6}$.',
    options: [{ text: '6 units to the right', imageUrl: '' }, { text: '6 units to the left', imageUrl: '' }, { text: '6 units up', imageUrl: '' }, { text: '6 units down', imageUrl: '' }],
    answer: "0",
    solution: 'Replacing $x$ with $(x - 6)$ in the denominator is a horizontal translation of 6 units to the right.'
  },
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'Describe the shift from $y = \\frac{1}{x}$ to $y = \\frac{1}{x} - 2$.',
    options: [{ text: '2 units down', imageUrl: '' }, { text: '2 units up', imageUrl: '' }, { text: '2 units left', imageUrl: '' }, { text: '2 units right', imageUrl: '' }],
    answer: "0",
    solution: 'Subtracting 2 from the entire function is a vertical translation of 2 units down.'
  },

  // --- Q7: Circle Shifting Logic ---
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'Find the center of the circle given by the equation $(x + 2)^2 + y^2 = 9$.',
    options: [{ text: '$(-2, 0)$', imageUrl: '' }, { text: '$(2, 0)$', imageUrl: '' }, { text: '$(0, -2)$', imageUrl: '' }, { text: '$(0, 2)$', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: Standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: For $(x + 2)^2 + y^2 = 9$, we have $h = -2$ and $k = 0$.\nStep 3: The center is $(h, k) = (-2, 0)$.'
  },
  {
    ...chapterData, topicId: 'y11a-5A', topicCode: '5A', topicTitle: 'Translations of graphs',
    difficulty: 'easy', type: 'multiple_choice',
    question: 'What is the radius of the circle $(x - 1)^2 + (y + 4)^2 = 16$?',
    options: [{ text: '4', imageUrl: '' }, { text: '16', imageUrl: '' }, { text: '1', imageUrl: '' }, { text: '2', imageUrl: '' }],
    answer: "0",
    solution: 'Step 1: The equation is in the form $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: Identify $r^2 = 16$.\nStep 3: Take the square root: $r = \\sqrt{16} = 4$.'
  }
];

export const importYear11AdvCh5 = async () => {
  console.log(`Starting sync of Y11 Adv Ch5A (Total ${questions5A.length})...`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), 
      where('chapterId', '==', 'y11a-5'),
      where('topicCode', '==', '5A')
    ));
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();

    let count = 0;
    for (const q of questions5A) {
        await addDoc(collection(db, 'questions'), { ...q, createdAt: serverTimestamp(), updatedAt: serverTimestamp(), isActive: true });
        count++;
    }
    console.log(`Successfully imported ${count} questions.`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
