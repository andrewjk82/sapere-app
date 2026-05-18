import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, query, where, writeBatch } from 'firebase/firestore';

const chapterData = {
  chapterId: 'y11a-7',
  chapterTitle: 'Chapter 7: Coordinate Geometry',
  year: 'Year 11',
  course: 'Advanced',
  isManual: true
};

export const questions7A = [
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the midpoint of the line segment $AB$ joining the points $A(5, 7)$ and $B(1, 11)$.",
    "options": [
      {
        "text": "$(3, 9)$",
        "imageUrl": ""
      },
      {
        "text": "$(3, 18)$",
        "imageUrl": ""
      },
      {
        "text": "$(6, 9)$",
        "imageUrl": ""
      },
      {
        "text": "$(2, 8)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the midpoint formula**\n$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Assign variables to the coordinates**\n- Point $A(5, 7) \\implies (x_1, y_1)$\n- Point $B(1, 11) \\implies (x_2, y_2)$\n\n**Step 3: Substitute the coordinates into the formula**\n- **x-coordinate**:\n  $$x = \\frac{5 + 1}{2} = \\frac{6}{2} = 3$$\n- **y-coordinate**:\n  $$y = \\frac{7 + 11}{2} = \\frac{18}{2} = 9$$\n\n**Step 4: Combine the coordinates**\n$$\\text{Midpoint} = (3, 9)$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the midpoint of the line segment $AB$ joining the points $A(2, 10)$ and $B(8, 4)$.",
    "options": [
      {
        "text": "$(5, 7)$",
        "imageUrl": ""
      },
      {
        "text": "$(6, 6)$",
        "imageUrl": ""
      },
      {
        "text": "$(5, 6)$",
        "imageUrl": ""
      },
      {
        "text": "$(10, 14)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the midpoint formula**\n$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Assign variables to the coordinates**\n- Point $A(2, 10) \\implies (x_1, y_1)$\n- Point $B(8, 4) \\implies (x_2, y_2)$\n\n**Step 3: Substitute the coordinates into the formula**\n- **x-coordinate**:\n  $$x = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$\n- **y-coordinate**:\n  $$y = \\frac{10 + 4}{2} = \\frac{14}{2} = 7$$\n\n**Step 4: Combine the coordinates**\n$$\\text{Midpoint} = (5, 7)$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the midpoint of the line segment $AB$ joining the points $A(-6, 5)$ and $B(10, -9)$.",
    "options": [
      {
        "text": "$(2, -2)$",
        "imageUrl": ""
      },
      {
        "text": "$(2, -7)$",
        "imageUrl": ""
      },
      {
        "text": "$(4, -4)$",
        "imageUrl": ""
      },
      {
        "text": "$(-8, 7)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the midpoint formula**\n$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Assign variables to the coordinates**\n- Point $A(-6, 5) \\implies (x_1, y_1)$\n- Point $B(10, -9) \\implies (x_2, y_2)$\n\n**Step 3: Substitute the coordinates into the formula**\n- **x-coordinate**:\n  $$x = \\frac{-6 + 10}{2} = \\frac{4}{2} = 2$$\n- **y-coordinate**:\n  $$y = \\frac{5 + -9}{2} = \\frac{-4}{2} = -2$$\n\n**Step 4: Combine the coordinates**\n$$\\text{Midpoint} = (2, -2)$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the midpoint of the line segment $AB$ joining the points $A(-5, 8)$ and $B(5, 3)$.",
    "options": [
      {
        "text": "$(0, 5.5)$",
        "imageUrl": ""
      },
      {
        "text": "$(0, 5)$",
        "imageUrl": ""
      },
      {
        "text": "$(0, 11)$",
        "imageUrl": ""
      },
      {
        "text": "$(5, 5.5)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the midpoint formula**\n$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Assign variables to the coordinates**\n- Point $A(-5, 8) \\implies (x_1, y_1)$\n- Point $B(5, 3) \\implies (x_2, y_2)$\n\n**Step 3: Substitute the coordinates into the formula**\n- **x-coordinate**:\n  $$x = \\frac{-5 + 5}{2} = \\frac{0}{2} = 0$$\n- **y-coordinate**:\n  $$y = \\frac{8 + 3}{2} = \\frac{11}{2} = 5.5$$\n\n**Step 4: Combine the coordinates**\n$$\\text{Midpoint} = (0, 5.5)$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the midpoint of the line segment $AB$ joining the points $A(0, -6)$ and $B(-9, -14)$.",
    "options": [
      {
        "text": "$(-4.5, -10)$",
        "imageUrl": ""
      },
      {
        "text": "$(-9, -20)$",
        "imageUrl": ""
      },
      {
        "text": "$(-4.5, -20)$",
        "imageUrl": ""
      },
      {
        "text": "$(-4, -10)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the midpoint formula**\n$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Assign variables to the coordinates**\n- Point $A(0, -6) \\implies (x_1, y_1)$\n- Point $B(-9, -14) \\implies (x_2, y_2)$\n\n**Step 3: Substitute the coordinates into the formula**\n- **x-coordinate**:\n  $$x = \\frac{0 + -9}{2} = \\frac{-9}{2} = -4.5$$\n- **y-coordinate**:\n  $$y = \\frac{-6 + -14}{2} = \\frac{-20}{2} = -10$$\n\n**Step 4: Combine the coordinates**\n$$\\text{Midpoint} = (-4.5, -10)$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the midpoint of the line segment $AB$ joining the points $A(6, -9)$ and $B(6, 9)$.",
    "options": [
      {
        "text": "$(6, 0)$",
        "imageUrl": ""
      },
      {
        "text": "$(0, 0)$",
        "imageUrl": ""
      },
      {
        "text": "$(6, -9)$",
        "imageUrl": ""
      },
      {
        "text": "$(12, 0)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the midpoint formula**\n$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Assign variables to the coordinates**\n- Point $A(6, -9) \\implies (x_1, y_1)$\n- Point $B(6, 9) \\implies (x_2, y_2)$\n\n**Step 3: Substitute the coordinates into the formula**\n- **x-coordinate**:\n  $$x = \\frac{6 + 6}{2} = \\frac{12}{2} = 6$$\n- **y-coordinate**:\n  $$y = \\frac{-9 + 9}{2} = \\frac{0}{2} = 0$$\n\n**Step 4: Combine the coordinates**\n$$\\text{Midpoint} = (6, 0)$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the exact length of the line segment joining the points $A(2, 5)$ and $B(6, 2)$.",
    "options": [
      {
        "text": "$5$",
        "imageUrl": ""
      },
      {
        "text": "$25$",
        "imageUrl": ""
      },
      {
        "text": "$\\sqrt{7}$",
        "imageUrl": ""
      },
      {
        "text": "$\\sqrt{13}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the distance formula**\n$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\n**Step 2: Identify variables**\n- $x_1 = 2, \\ y_1 = 5$\n- $x_2 = 6, \\ y_2 = 2$\n\n**Step 3: Substitute the coordinates**\n$$AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$\n$$AB^2 = (6 - (2))^2 + (2 - (5))^2$$\n$$AB^2 = (4)^2 + (-3)^2$$\n$$AB^2 = 16 + 9$$\n$$AB^2 = 25$$\n\n**Step 4: Take the square root**\n$$AB = \\sqrt{25}$$\n$$AB = 5$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the exact length of the line segment joining the points $A(-3, 8)$ and $B(2, -4)$.",
    "options": [
      {
        "text": "$13$",
        "imageUrl": ""
      },
      {
        "text": "$169$",
        "imageUrl": ""
      },
      {
        "text": "$12$",
        "imageUrl": ""
      },
      {
        "text": "$\\sqrt{145}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the distance formula**\n$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\n**Step 2: Identify variables**\n- $x_1 = -3, \\ y_1 = 8$\n- $x_2 = 2, \\ y_2 = -4$\n\n**Step 3: Substitute the coordinates**\n$$AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$\n$$AB^2 = (2 - (-3))^2 + (-4 - (8))^2$$\n$$AB^2 = (5)^2 + (-12)^2$$\n$$AB^2 = 25 + 144$$\n$$AB^2 = 169$$\n\n**Step 4: Take the square root**\n$$AB = \\sqrt{169}$$\n$$AB = 13$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the exact length of the line segment joining the points $A(-6, -3)$ and $B(2, 3)$.",
    "options": [
      {
        "text": "$10$",
        "imageUrl": ""
      },
      {
        "text": "$100$",
        "imageUrl": ""
      },
      {
        "text": "$8$",
        "imageUrl": ""
      },
      {
        "text": "$\\sqrt{52}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the distance formula**\n$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\n**Step 2: Identify variables**\n- $x_1 = -6, \\ y_1 = -3$\n- $x_2 = 2, \\ y_2 = 3$\n\n**Step 3: Substitute the coordinates**\n$$AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$\n$$AB^2 = (2 - (-6))^2 + (3 - (-3))^2$$\n$$AB^2 = (8)^2 + (6)^2$$\n$$AB^2 = 64 + 36$$\n$$AB^2 = 100$$\n\n**Step 4: Take the square root**\n$$AB = \\sqrt{100}$$\n$$AB = 10$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the exact length of the line segment joining the points $A(4, 7)$ and $B(6, 5)$.",
    "options": [
      {
        "text": "$2\\sqrt{2}$",
        "imageUrl": ""
      },
      {
        "text": "$\\sqrt{8}$",
        "imageUrl": ""
      },
      {
        "text": "$4$",
        "imageUrl": ""
      },
      {
        "text": "$2$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the distance formula**\n$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\n**Step 2: Identify variables**\n- $x_1 = 4, \\ y_1 = 7$\n- $x_2 = 6, \\ y_2 = 5$\n\n**Step 3: Substitute the coordinates**\n$$AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$\n$$AB^2 = (6 - (4))^2 + (5 - (7))^2$$\n$$AB^2 = (2)^2 + (-2)^2$$\n$$AB^2 = 4 + 4$$\n$$AB^2 = 8$$\n\n**Step 4: Take the square root**\n$$AB = \\sqrt{8}$$\n$$AB = 2\\sqrt{2}$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the exact length of the line segment joining the points $A(-5, -2)$ and $B(3, 2)$.",
    "options": [
      {
        "text": "$4\\sqrt{5}$",
        "imageUrl": ""
      },
      {
        "text": "$\\sqrt{80}$",
        "imageUrl": ""
      },
      {
        "text": "$8$",
        "imageUrl": ""
      },
      {
        "text": "$10$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the distance formula**\n$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\n**Step 2: Identify variables**\n- $x_1 = -5, \\ y_1 = -2$\n- $x_2 = 3, \\ y_2 = 2$\n\n**Step 3: Substitute the coordinates**\n$$AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$\n$$AB^2 = (3 - (-5))^2 + (2 - (-2))^2$$\n$$AB^2 = (8)^2 + (4)^2$$\n$$AB^2 = 64 + 16$$\n$$AB^2 = 80$$\n\n**Step 4: Take the square root**\n$$AB = \\sqrt{80}$$\n$$AB = 4\\sqrt{5}$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the exact length of the line segment joining the points $A(8, -15)$ and $B(0, 0)$.",
    "options": [
      {
        "text": "$17$",
        "imageUrl": ""
      },
      {
        "text": "$289$",
        "imageUrl": ""
      },
      {
        "text": "$15$",
        "imageUrl": ""
      },
      {
        "text": "$13$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the distance formula**\n$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\n**Step 2: Identify variables**\n- $x_1 = 8, \\ y_1 = -15$\n- $x_2 = 0, \\ y_2 = 0$\n\n**Step 3: Substitute the coordinates**\n$$AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$\n$$AB^2 = (0 - (8))^2 + (0 - (-15))^2$$\n$$AB^2 = (-8)^2 + (15)^2$$\n$$AB^2 = 64 + 225$$\n$$AB^2 = 289$$\n\n**Step 4: Take the square root**\n$$AB = \\sqrt{289}$$\n$$AB = 17$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the midpoint $M$ of the line segment joining the points $P(-4, 2)$ and $Q(8, 18)$.",
    "options": [
      {
        "text": "$(2, 10)$",
        "imageUrl": ""
      },
      {
        "text": "$(4, 10)$",
        "imageUrl": ""
      },
      {
        "text": "$(2, 8)$",
        "imageUrl": ""
      },
      {
        "text": "$(6, 20)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the midpoint formula**\n$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Plug in coordinates of $P(-4, 2)$ and $Q(8, 18)$**\n$$x = \\frac{-4 + 8}{2} = \\frac{4}{2} = 2$$\n$$y = \\frac{2 + 18}{2} = \\frac{20}{2} = 10$$\n\n**Step 3: State the final coordinates**\n$$M = (2, 10)$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "For the points $P(-4, 2)$ and $Q(8, 18)$, find the lengths of segments $PM$ and $MQ$ where $M(2, 10)$ is the midpoint, and verify their relationship.",
    "options": [
      {
        "text": "$PM = MQ = 10$",
        "imageUrl": ""
      },
      {
        "text": "$PM = 8, \\ MQ = 12$",
        "imageUrl": ""
      },
      {
        "text": "$PM = MQ = \\sqrt{50}$",
        "imageUrl": ""
      },
      {
        "text": "$PM = MQ = 20$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Calculate the length of $PM$ using the distance formula**\nFor $P(-4, 2)$ and $M(2, 10)$:\n$$PM = \\sqrt{(2 - (-4))^2 + (10 - 2)^2}$$\n$$PM = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n\n**Step 2: Calculate the length of $MQ$**\nFor $M(2, 10)$ and $Q(8, 18)$:\n$$MQ = \\sqrt{(8 - 2)^2 + (18 - 10)^2}$$\n$$MQ = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n\n**Step 3: Compare both lengths**\nSince both calculations yield $10$, we have:\n$$PM = MQ = 10$$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the exact side lengths of the triangle formed by the vertices $P(0, 2)$, $Q(1, 6)$ and $R(5, 7)$.",
    "options": [
      {
        "text": "$PQ = \\sqrt{17}, \\ QR = \\sqrt{17}, \\ PR = 5\\sqrt{2}$",
        "imageUrl": ""
      },
      {
        "text": "$PQ = 17, \\ QR = 17, \\ PR = 50$",
        "imageUrl": ""
      },
      {
        "text": "$PQ = \\sqrt{13}, \\ QR = \\sqrt{13}, \\ PR = 5$",
        "imageUrl": ""
      },
      {
        "text": "$PQ = \\sqrt{17}, \\ QR = \\sqrt{13}, \\ PR = 5\\sqrt{2}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Calculate $PQ$ using points $P(0, 2)$ and $Q(1, 6)$**\n$$PQ = \\sqrt{(1 - 0)^2 + (6 - 2)^2} = \\sqrt{1^2 + 4^2} = \\sqrt{1 + 16} = \\sqrt{17}$$\n\n**Step 2: Calculate $QR$ using points $Q(1, 6)$ and $R(5, 7)$**\n$$QR = \\sqrt{(5 - 1)^2 + (7 - 6)^2} = \\sqrt{4^2 + 1^2} = \\sqrt{16 + 1} = \\sqrt{17}$$\n\n**Step 3: Calculate $PR$ using points $P(0, 2)$ and $R(5, 7)$**\n$$PR = \\sqrt{(5 - 0)^2 + (7 - 2)^2} = \\sqrt{5^2 + 5^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}$$\n\n**Step 4: Summarize the results**\n- $PQ = \\sqrt{17}$\n- $QR = \\sqrt{17}$\n- $PR = 5\\sqrt{2}$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "By examining the side lengths of the triangle formed by $P(0, 2)$, $Q(1, 6)$ and $R(5, 7)$, classify the triangle $\\Delta PQR$.",
    "options": [
      {
        "text": "Isosceles triangle",
        "imageUrl": ""
      },
      {
        "text": "Scalene triangle",
        "imageUrl": ""
      },
      {
        "text": "Equilateral triangle",
        "imageUrl": ""
      },
      {
        "text": "Right-angled scalene triangle",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Retrieve side lengths**\nFrom our previous calculations, we found:\n- $PQ = \\sqrt{17}$\n- $QR = \\sqrt{17}$\n- $PR = 5\\sqrt{2}$\n\n**Step 2: Compare the side lengths**\nSince $PQ = QR = \\sqrt{17}$ (two sides are equal) and $PR \\neq \\sqrt{17}$ (the third side is different):\n$$\\text{Two sides are equal in length.}$$\n\n**Step 3: Classify the triangle**\nA triangle with two equal sides is defined as an **isosceles** triangle."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the exact side lengths of the triangle $\\Delta ABC$ with vertices $A(0, 0)$, $B(18, 24)$ and $C(50, 0)$.",
    "options": [
      {
        "text": "$AB = 30, \\ BC = 40, \\ AC = 50$",
        "imageUrl": ""
      },
      {
        "text": "$AB = 18, \\ BC = 32, \\ AC = 50$",
        "imageUrl": ""
      },
      {
        "text": "$AB = 24, \\ BC = 30, \\ AC = 40$",
        "imageUrl": ""
      },
      {
        "text": "$AB = 30, \\ BC = 30, \\ AC = 50$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Calculate $AB$ using $A(0, 0)$ and $B(18, 24)$**\n$$AB = \\sqrt{(18 - 0)^2 + (24 - 0)^2} = \\sqrt{18^2 + 24^2}$$\n$$AB = \\sqrt{324 + 576} = \\sqrt{900} = 30$$\n\n**Step 2: Calculate $BC$ using $B(18, 24)$ and $C(50, 0)$**\n$$BC = \\sqrt{(50 - 18)^2 + (0 - 24)^2} = \\sqrt{32^2 + (-24)^2}$$\n$$BC = \\sqrt{1024 + 576} = \\sqrt{1600} = 40$$\n\n**Step 3: Calculate $AC$ using $A(0, 0)$ and $C(50, 0)$**\nSince both points lie on the x-axis:\n$$AC = |50 - 0| = 50$$\n\n**Step 4: Summarize lengths**\n- $AB = 30$\n- $BC = 40$\n- $AC = 50$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Show that the triangle $\\Delta ABC$ with vertices $A(0, 0)$, $B(18, 24)$ and $C(50, 0)$ is right-angled.",
    "options": [
      {
        "text": "Yes, because $AB^2 + BC^2 = AC^2$ ($30^2 + 40^2 = 50^2$)",
        "imageUrl": ""
      },
      {
        "text": "No, because $AB^2 + BC^2 \\neq AC^2$",
        "imageUrl": ""
      },
      {
        "text": "Yes, because $AB = BC$",
        "imageUrl": ""
      },
      {
        "text": "Yes, because angle $A$ is $90^\\circ$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Retrieve side lengths**\nFrom our previous computations:\n- $AB = 30$\n- $BC = 40$\n- $AC = 50$\n\n**Step 2: Apply the converse of Pythagoras' theorem**\nFor $\\Delta ABC$ to be right-angled with hypotenuse $AC$, it must satisfy:\n$$AB^2 + BC^2 = AC^2$$\n\n**Step 3: Calculate the squares of the sides**\n- Left side:\n  $$AB^2 + BC^2 = 30^2 + 40^2 = 900 + 1600 = 2500$$\n- Right side:\n  $$AC^2 = 50^2 = 2500$$\n\n**Step 4: Draw conclusion**\nSince $2500 = 2500$, the equation $AB^2 + BC^2 = AC^2$ holds true. By the converse of Pythagoras' theorem, $\\Delta ABC$ is a right-angled triangle with the right angle at vertex $B$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the exact side lengths of the triangle $\\Delta ABC$ formed by the vertices $A(0, 6)$, $B(4, -1)$ and $C(-4, 5)$.",
    "options": [
      {
        "text": "$AB = \\sqrt{65}, \\ BC = 10, \\ AC = \\sqrt{17}$",
        "imageUrl": ""
      },
      {
        "text": "$AB = \\sqrt{65}, \\ BC = \\sqrt{80}, \\ AC = \\sqrt{17}$",
        "imageUrl": ""
      },
      {
        "text": "$AB = 8, \\ BC = 10, \\ AC = 4$",
        "imageUrl": ""
      },
      {
        "text": "$AB = \\sqrt{17}, \\ BC = 10, \\ AC = \\sqrt{65}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Calculate $AB$ using $A(0, 6)$ and $B(4, -1)$**\n$$AB = \\sqrt{(4 - 0)^2 + (-1 - 6)^2} = \\sqrt{4^2 + (-7)^2} = \\sqrt{16 + 49} = \\sqrt{65}$$\n\n**Step 2: Calculate $BC$ using $B(4, -1)$ and $C(-4, 5)$**\n$$BC = \\sqrt{(-4 - 4)^2 + (5 - (-1))^2} = \\sqrt{(-8)^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$$\n\n**Step 3: Calculate $AC$ using $A(0, 6)$ and $C(-4, 5)$**\n$$AC = \\sqrt{(-4 - 0)^2 + (5 - 6)^2} = \\sqrt{(-4)^2 + (-1)^2} = \\sqrt{16 + 1} = \\sqrt{17}$$\n\n**Step 4: Summarize lengths**\n- $AB = \\sqrt{65}$\n- $BC = 10$\n- $AC = \\sqrt{17}$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "easy",
    "type": "multiple_choice",
    "question": "Find the midpoints of the three sides $AB$, $BC$, and $AC$ of the triangle $\\Delta ABC$ formed by $A(0, 6)$, $B(4, -1)$ and $C(-4, 5)$.",
    "options": [
      {
        "text": "Midpoints: $AB(2, 2.5), \\ BC(0, 2), \\ AC(-2, 5.5)$",
        "imageUrl": ""
      },
      {
        "text": "Midpoints: $AB(2, 3.5), \\ BC(0, 2), \\ AC(-2, 5.5)$",
        "imageUrl": ""
      },
      {
        "text": "Midpoints: $AB(2, 2.5), \\ BC(0, 3), \\ AC(-2, 1)$",
        "imageUrl": ""
      },
      {
        "text": "Midpoints: $AB(4, 5), \\ BC(0, 4), \\ AC(-4, 11)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Calculate midpoint of side $AB$ using $A(0, 6)$ and $B(4, -1)$**\n$$M_{AB} = \\left(\\frac{0 + 4}{2}, \\frac{6 + (-1)}{2}\\right) = \\left(2, \\frac{5}{2}\\right) = (2, 2.5)$$\n\n**Step 2: Calculate midpoint of side $BC$ using $B(4, -1)$ and $C(-4, 5)$**\n$$M_{BC} = \\left(\\frac{4 + (-4)}{2}, \\frac{-1 + 5}{2}\\right) = \\left(0, \\frac{4}{2}\\right) = (0, 2)$$\n\n**Step 3: Calculate midpoint of side $AC$ using $A(0, 6)$ and $C(-4, 5)$**\n$$M_{AC} = \\left(\\frac{0 + (-4)}{2}, \\frac{6 + 5}{2}\\right) = \\left(-2, \\frac{11}{2}\\right) = (-2, 5.5)$$\n\n**Step 4: Summarize midpoints**\n- Midpoint of $AB$: $(2, 2.5)$\n- Midpoint of $BC$: $(0, 2)$\n- Midpoint of $AC$: $(-2, 5.5)$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A circle with center $O(0, 0)$ passes through the point $A(8, 15)$. What is its radius?",
    "options": [
      {
        "text": "$17$",
        "imageUrl": ""
      },
      {
        "text": "$289$",
        "imageUrl": ""
      },
      {
        "text": "$15$",
        "imageUrl": ""
      },
      {
        "text": "$\\sqrt{23}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Use the distance formula from the origin**\nThe radius is the distance from $O(0, 0)$ to $A(8, 15)$:\n$$r = \\sqrt{(x - 0)^2 + (y - 0)^2} = \\sqrt{x^2 + y^2}$$\n\n**Step 2: Plug in the coordinates**\n$$r = \\sqrt{8^2 + 15^2}$$\n$$r = \\sqrt{64 + 225}$$\n$$r = \\sqrt{289} = 17$$\n\n**Step 3: State the final radius**\nThe radius of the circle is $17$ units."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "A circle with center $B(5, 12)$ passes through the origin $O(0,0)$. What is its radius?",
    "options": [
      {
        "text": "$13$",
        "imageUrl": ""
      },
      {
        "text": "$169$",
        "imageUrl": ""
      },
      {
        "text": "$12$",
        "imageUrl": ""
      },
      {
        "text": "$\\sqrt{17}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Use the distance formula from the origin**\nThe radius is the distance from $B(5, 12)$ to $O(0,0)$:\n$$r = \\sqrt{(5 - 0)^2 + (12 - 0)^2} = \\sqrt{5^2 + 12^2}$$\n\n**Step 2: Evaluate the sum of squares**\n$$r = \\sqrt{25 + 144}$$\n$$r = \\sqrt{169} = 13$$\n\n**Step 3: State the final radius**\nThe radius is $13$ units."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Find the coordinates of the center of a circle with diameter $CD$, where $C(4, 3)$ and $D(10, -5)$.",
    "options": [
      {
        "text": "$(7, -1)$",
        "imageUrl": ""
      },
      {
        "text": "$(3, -4)$",
        "imageUrl": ""
      },
      {
        "text": "$(14, -2)$",
        "imageUrl": ""
      },
      {
        "text": "$(7, -2)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand diameter and center relationship**\nThe center of the circle is the **midpoint** of the diameter $CD$.\n\n**Step 2: Apply the midpoint formula**\n$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 3: Substitute the endpoints $C(4, 3)$ and $D(10, -5)$**\n$$x = \\frac{4 + 10}{2} = \\frac{14}{2} = 7$$\n$$y = \\frac{3 + (-5)}{2} = \\frac{-2}{2} = -1$$\n\n**Step 4: Combine coordinates**\nThe center is $(7, -1)$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Determine if the point $E(-8, -15)$ lies on the circle with center at the origin $O(0,0)$ and radius $17$.",
    "options": [
      {
        "text": "Yes, because the distance $OE = 17$",
        "imageUrl": ""
      },
      {
        "text": "No, because the distance $OE = 23$",
        "imageUrl": ""
      },
      {
        "text": "No, because the distance $OE = \\sqrt{161}$",
        "imageUrl": ""
      },
      {
        "text": "Yes, because $E$ lies on the x-axis",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand the condition for a point to lie on a circle**\nA point lies on a circle if its distance from the center is exactly equal to the radius ($17$).\n\n**Step 2: Calculate the distance from $O(0,0)$ to $E(-8, -15)$**\n$$OE = \\sqrt{(-8 - 0)^2 + (-15 - 0)^2}$$\n$$OE = \\sqrt{(-8)^2 + (-15)^2}$$\n$$OE = \\sqrt{64 + 225}$$\n$$OE = \\sqrt{289} = 17$$\n\n**Step 3: Compare with the radius**\nSince $OE = 17$, the distance is exactly equal to the radius. Therefore, the point $E$ lies on the circle."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Find the midpoint of the line segment $AC$ joining the vertices $A(5, 10)$ and $C(-1, 2)$ of the quadrilateral $ABCD$.",
    "options": [
      {
        "text": "$(2, 6)$",
        "imageUrl": ""
      },
      {
        "text": "$(3, 6)$",
        "imageUrl": ""
      },
      {
        "text": "$(2, 4)$",
        "imageUrl": ""
      },
      {
        "text": "$(4, 12)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the midpoint formula**\n$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Plug in $A(5, 10)$ and $C(-1, 2)$**\n$$x = \\frac{5 + (-1)}{2} = \\frac{4}{2} = 2$$\n$$y = \\frac{10 + 2}{2} = \\frac{12}{2} = 6$$\n\n**Step 3: State the final coordinates**\nThe midpoint of $AC$ is $(2, 6)$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Find the midpoint of the line segment $BD$ joining the vertices $B(1, 4)$ and $D(3, 8)$ of the quadrilateral $ABCD$.",
    "options": [
      {
        "text": "$(2, 6)$",
        "imageUrl": ""
      },
      {
        "text": "$(1.5, 6)$",
        "imageUrl": ""
      },
      {
        "text": "$(2, 8)$",
        "imageUrl": ""
      },
      {
        "text": "$(4, 12)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Apply the midpoint formula**\n$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Plug in $B(1, 4)$ and $D(3, 8)$**\n$$x = \\frac{1 + 3}{2} = \\frac{4}{2} = 2$$\n$$y = \\frac{4 + 8}{2} = \\frac{12}{2} = 6$$\n\n**Step 3: State the final coordinates**\nThe midpoint of $BD$ is $(2, 6)$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Given that the midpoints of diagonals $AC$ and $BD$ of the quadrilateral $ABCD$ are both $(2, 6)$, what geometric conclusion can you draw about the quadrilateral?",
    "options": [
      {
        "text": "It is a parallelogram because its diagonals bisect each other.",
        "imageUrl": ""
      },
      {
        "text": "It is a trapezoid because only two sides are parallel.",
        "imageUrl": ""
      },
      {
        "text": "It is a kite because adjacent sides are equal.",
        "imageUrl": ""
      },
      {
        "text": "No conclusion can be made.",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Retrieve the diagonal midpoints**\n- Midpoint of diagonal $AC = (2, 6)$\n- Midpoint of diagonal $BD = (2, 6)$\n\n**Step 2: Interpret the intersection**\nSince both diagonals share the exact same midpoint, they intersect at their midpoints. This means the diagonals **bisect each other**.\n\n**Step 3: Classify the shape**\nBy definition, a quadrilateral whose diagonals bisect each other is a **parallelogram**."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Find the exact side lengths of the quadrilateral $ABCD$ with vertices $A(4, 3)$, $B(11, 4)$, $C(6, 9)$ and $D(-1, 8)$.",
    "options": [
      {
        "text": "$AB = BC = CD = AD = 5\\sqrt{2}$",
        "imageUrl": ""
      },
      {
        "text": "$AB = BC = 5\\sqrt{2}, \\ CD = AD = 10$",
        "imageUrl": ""
      },
      {
        "text": "$AB = CD = 7, \\ BC = AD = 5$",
        "imageUrl": ""
      },
      {
        "text": "$AB = BC = CD = AD = 50$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Calculate $AB$ using $A(4, 3)$ and $B(11, 4)$**\n$$AB = \\sqrt{(11 - 4)^2 + (4 - 3)^2} = \\sqrt{7^2 + 1^2} = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2}$$\n\n**Step 2: Calculate $BC$ using $B(11, 4)$ and $C(6, 9)$**\n$$BC = \\sqrt{(6 - 11)^2 + (9 - 4)^2} = \\sqrt{(-5)^2 + 5^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}$$\n\n**Step 3: Calculate $CD$ using $C(6, 9)$ and $D(-1, 8)$**\n$$CD = \\sqrt{(-1 - 6)^2 + (8 - 9)^2} = \\sqrt{(-7)^2 + (-1)^2} = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2}$$\n\n**Step 4: Calculate $AD$ using $A(4, 3)$ and $D(-1, 8)$**\n$$AD = \\sqrt{(-1 - 4)^2 + (8 - 3)^2} = \\sqrt{(-5)^2 + 5^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}$$\n\n**Step 5: Conclude**\nAll 4 sides have the exact same length of $5\\sqrt{2}$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Based on the side lengths of the quadrilateral $ABCD$ with vertices $A(4, 3)$, $B(11, 4)$, $C(6, 9)$ and $D(-1, 8)$, classify the shape.",
    "options": [
      {
        "text": "Rhombus",
        "imageUrl": ""
      },
      {
        "text": "Kite",
        "imageUrl": ""
      },
      {
        "text": "Rectangle",
        "imageUrl": ""
      },
      {
        "text": "Trapezium",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Retrieve side lengths**\nFrom our previous computations:\n- $AB = 5\\sqrt{2}$\n- $BC = 5\\sqrt{2}$\n- $CD = 5\\sqrt{2}$\n- $AD = 5\\sqrt{2}$\n\n**Step 2: Identify geometric characteristics**\nAll four sides of the quadrilateral are equal in length:\n$$AB = BC = CD = AD = 5\\sqrt{2}$$\n\n**Step 3: Draw class definition**\nA quadrilateral with four equal sides is defined as a **rhombus**."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Find the exact side lengths of the triangle with vertices $X(2, -2)$, $Y(6, 4)$ and $Z(0, 8)$.",
    "options": [
      {
        "text": "$XY = \\sqrt{52}, \\ YZ = \\sqrt{52}, \\ XZ = \\sqrt{104}$",
        "imageUrl": ""
      },
      {
        "text": "$XY = 52, \\ YZ = 52, \\ XZ = 104$",
        "imageUrl": ""
      },
      {
        "text": "$XY = \\sqrt{20}, \\ YZ = \\sqrt{20}, \\ XZ = 4\\sqrt{5}$",
        "imageUrl": ""
      },
      {
        "text": "$XY = \\sqrt{52}, \\ YZ = \\sqrt{40}, \\ XZ = 10$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Calculate $XY$ using $X(2, -2)$ and $Y(6, 4)$**\n$$XY = \\sqrt{(6 - 2)^2 + (4 - (-2))^2} = \\sqrt{4^2 + 6^2} = \\sqrt{16 + 36} = \\sqrt{52}$$\n\n**Step 2: Calculate $YZ$ using $Y(6, 4)$ and $Z(0, 8)$**\n$$YZ = \\sqrt{(0 - 6)^2 + (8 - 4)^2} = \\sqrt{(-6)^2 + 4^2} = \\sqrt{36 + 16} = \\sqrt{52}$$\n\n**Step 3: Calculate $XZ$ using $X(2, -2)$ and $Z(0, 8)$**\n$$XZ = \\sqrt{(0 - 2)^2 + (8 - (-2))^2} = \\sqrt{(-2)^2 + 10^2} = \\sqrt{4 + 100} = \\sqrt{104}$$\n\n**Step 4: Summarize exact lengths**\n- $XY = \\sqrt{52}$\n- $YZ = \\sqrt{52}$\n- $XZ = \\sqrt{104} = 2\\sqrt{26}$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Show that the triangle $\\Delta XYZ$ with vertices $X(2, -2)$, $Y(6, 4)$ and $Z(0, 8)$ is a right-angled isosceles triangle.",
    "options": [
      {
        "text": "Yes, because $XY = YZ = \\sqrt{52}$ and $XY^2 + YZ^2 = XZ^2$ ($52 + 52 = 104$)",
        "imageUrl": ""
      },
      {
        "text": "No, because $XY^2 + YZ^2 \\neq XZ^2$",
        "imageUrl": ""
      },
      {
        "text": "Yes, but it is scalene, not isosceles.",
        "imageUrl": ""
      },
      {
        "text": "Yes, because all sides are equilateral.",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Check if the triangle is isosceles**\nSince the side lengths are $XY = \\sqrt{52}$, $YZ = \\sqrt{52}$ and $XZ = \\sqrt{104}$:\n$$XY = YZ = \\sqrt{52}$$\nBecause two sides are equal in length, the triangle is **isosceles**.\n\n**Step 2: Check if the triangle satisfies Pythagoras' theorem**\nFor the right angle to be at vertex $Y$, we must satisfy:\n$$XY^2 + YZ^2 = XZ^2$$\nSubstitute the squares of the side lengths:\n$$(\\sqrt{52})^2 + (\\sqrt{52})^2 = 52 + 52 = 104$$\n$$XZ^2 = (\\sqrt{104})^2 = 104$$\nSince $104 = 104$, Pythagoras' theorem is satisfied, meaning $\\Delta XYZ$ is right-angled at $Y$.\n\n**Step 3: Combine both properties**\nTherefore, $\\Delta XYZ$ is a **right-angled isosceles triangle**."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Find the area of the right-angled isosceles triangle $\\Delta XYZ$ with vertices $X(2, -2)$, $Y(6, 4)$ and $Z(0, 8)$.",
    "options": [
      {
        "text": "$26$",
        "imageUrl": ""
      },
      {
        "text": "$52$",
        "imageUrl": ""
      },
      {
        "text": "$13$",
        "imageUrl": ""
      },
      {
        "text": "$26\\sqrt{2}$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Identify base and height**\nSince $\\Delta XYZ$ is right-angled at vertex $Y$, the two perpendicular sides forming the right angle are the base and height:\n- $\\text{Base} = XY = \\sqrt{52}$\n- $\\text{Height} = YZ = \\sqrt{52}$\n\n**Step 2: Apply the triangle area formula**\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$\n$$\\text{Area} = \\frac{1}{2} \\times \\sqrt{52} \\times \\sqrt{52}$$\n\n**Step 3: Evaluate the multiplication**\n$$\\text{Area} = \\frac{1}{2} \\times 52 = 26$$\n\n**Step 4: State the final area**\nThe area of the triangle is $26$ square units."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Find the distance of each of the points $A(1, 5)$, $B(3, \\sqrt{17})$, $C(4, \\sqrt{10})$ and $D(5, 1)$ from the origin $O(0,0)$ to show they lie on a circle with center at the origin.",
    "options": [
      {
        "text": "$OA = OB = OC = OD = \\sqrt{26}$",
        "imageUrl": ""
      },
      {
        "text": "$OA = OB = OC = OD = 26$",
        "imageUrl": ""
      },
      {
        "text": "$OA = 5, \\ OB = 17, \\ OC = 10, \\ OD = 5$",
        "imageUrl": ""
      },
      {
        "text": "The distances are unequal.",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Calculate distance of $A(1, 5)$ from $O(0,0)$**\n$$OA = \\sqrt{1^2 + 5^2} = \\sqrt{1 + 25} = \\sqrt{26}$$\n\n**Step 2: Calculate distance of $B(3, \\sqrt{17})$ from $O(0,0)$**\n$$OB = \\sqrt{3^2 + (\\sqrt{17})^2} = \\sqrt{9 + 17} = \\sqrt{26}$$\n\n**Step 3: Calculate distance of $C(4, \\sqrt{10})$ from $O(0,0)$**\n$$OC = \\sqrt{4^2 + (\\sqrt{10})^2} = \\sqrt{16 + 10} = \\sqrt{26}$$\n\n**Step 4: Calculate distance of $D(5, 1)$ from $O(0,0)$**\n$$OD = \\sqrt{5^2 + 1^2} = \\sqrt{25 + 1} = \\sqrt{26}$$\n\n**Step 5: Conclude**\nSince $OA = OB = OC = OD = \\sqrt{26}$ (all points are equidistant from the origin), they all lie on a circle centered at the origin with a radius of $\\sqrt{26}$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "What are the radius, diameter, circumference and area of the circle passing through points $A(1, 5)$, $B(3, \\sqrt{17})$, $C(4, \\sqrt{10})$ and $D(5, 1)$ with its center at the origin?",
    "options": [
      {
        "text": "$r = \\sqrt{26}, \\ d = 2\\sqrt{26}, \\ C = 2\\pi\\sqrt{26}, \\ A = 26\\pi$",
        "imageUrl": ""
      },
      {
        "text": "$r = 26, \\ d = 52, \\ C = 52\\pi, \\ A = 676\\pi$",
        "imageUrl": ""
      },
      {
        "text": "$r = \\sqrt{26}, \\ d = 26, \\ C = 26\\pi, \\ A = 26\\pi$",
        "imageUrl": ""
      },
      {
        "text": "$r = 5, \\ d = 10, \\ C = 10\\pi, \\ A = 25\\pi$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Identify the radius ($r$)**\nFrom our previous computations, the radius is the distance from the origin to any point:\n$$r = \\sqrt{26}$$\n\n**Step 2: Calculate the diameter ($d$)**\n$$d = 2r = 2\\sqrt{26}$$\n\n**Step 3: Calculate the circumference ($C$)**\n$$C = 2\\pi r = 2\\pi\\sqrt{26}$$\n\n**Step 4: Calculate the area ($A$)**\n$$A = \\pi r^2 = \\pi (\\sqrt{26})^2 = 26\\pi$$\n\n**Step 5: Summarize results**\n- **Radius**: $\\sqrt{26}$\n- **Diameter**: $2\\sqrt{26}$\n- **Circumference**: $2\\pi\\sqrt{26}$\n- **Area**: $26\\pi$"
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "The point $M(4, 9)$ is the midpoint of the line segment joining $A(2, 14)$ and $B(x_2, y_2)$. Find the coordinates $x_2$ and $y_2$ of $B$.",
    "options": [
      {
        "text": "$(6, 4)$",
        "imageUrl": ""
      },
      {
        "text": "$(3, 11.5)$",
        "imageUrl": ""
      },
      {
        "text": "$(6, 5)$",
        "imageUrl": ""
      },
      {
        "text": "$(8, -2)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the midpoint coordinate relations**\n$$x_m = \\frac{x_1 + x_2}{2} \\quad \\text{and} \\quad y_m = \\frac{y_1 + y_2}{2}$$\n\n**Step 2: Substitute known variables**\n- $x_m = 4, \\ y_m = 9$\n- $x_1 = 2, \\ y_1 = 14$\n\n**Step 3: Solve for $x_2$**\n$$4 = \\frac{2 + x_2}{2}$$\n$$4 \\times 2 = 2 + x_2$$\n$$8 = 2 + x_2 \\implies x_2 = 6$$\n\n**Step 4: Solve for $y_2$**\n$$9 = \\frac{14 + y_2}{2}$$\n$$9 \\times 2 = 14 + y_2$$\n$$18 = 14 + y_2 \\implies y_2 = 4$$\n\n**Step 5: Write the coordinates of $B$**\nThe coordinates of $B$ are $(6, 4)$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "If $A(-2, 3)$ is the midpoint of the line segment joining $S(x, y)$ and $T(4, 8)$, find the coordinates of $S$.",
    "options": [
      {
        "text": "$(-8, -2)$",
        "imageUrl": ""
      },
      {
        "text": "$(1, 5.5)$",
        "imageUrl": ""
      },
      {
        "text": "$(-6, -2)$",
        "imageUrl": ""
      },
      {
        "text": "$(-8, -5)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Use the midpoint formulas**\n$$x_m = \\frac{x_s + x_t}{2} \\quad \\text{and} \\quad y_m = \\frac{y_s + y_t}{2}$$\n\n**Step 2: Plug in $M(-2, 3)$ and $T(4, 8)$**\n- **x-coordinate**:\n  $$-2 = \\frac{x + 4}{2}$$\n  $$-4 = x + 4 \\implies x = -8$$\n- **y-coordinate**:\n  $$3 = \\frac{y + 8}{2}$$\n  $$6 = y + 8 \\implies y = -2$$\n\n**Step 3: State the coordinates of $S$**\nThe coordinates of $S$ are $(-8, -2)$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "The midpoint of the line segment $PQ$ is $M(3, -5)$. Find the coordinates of $P$ if $Q = (6, 1)$.",
    "options": [
      {
        "text": "$(0, -11)$",
        "imageUrl": ""
      },
      {
        "text": "$(0, -9)$",
        "imageUrl": ""
      },
      {
        "text": "$(4.5, -2)$",
        "imageUrl": ""
      },
      {
        "text": "$(9, -4)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Use the midpoint formula**\n$$x_m = \\frac{x_p + x_q}{2} \\quad \\text{and} \\quad y_m = \\frac{y_p + y_q}{2}$$\n\n**Step 2: Plug in $M(3, -5)$ and $Q(6, 1)$**\n- **x-coordinate**:\n  $$3 = \\frac{x_p + 6}{2}$$\n  $$6 = x_p + 6 \\implies x_p = 0$$\n- **y-coordinate**:\n  $$-5 = \\frac{y_p + 1}{2}$$\n  $$-10 = y_p + 1 \\implies y_p = -11$$\n\n**Step 3: State coordinates of $P$**\nThe coordinates of $P$ are $(0, -11)$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Find the coordinates of the endpoint $B$ of a circle diameter $AB$, given that the circle has center $Q(5, 6)$ and the other endpoint is $A(9, 4)$.",
    "options": [
      {
        "text": "$(1, 8)$",
        "imageUrl": ""
      },
      {
        "text": "$(7, 5)$",
        "imageUrl": ""
      },
      {
        "text": "$(1, 10)$",
        "imageUrl": ""
      },
      {
        "text": "$(13, 2)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand diameter midpoint relationship**\nThe center $Q(5, 6)$ is the midpoint of the diameter $AB$ joining $A(9, 4)$ and $B(x, y)$.\n\n**Step 2: Use the midpoint formulas**\n- **x-coordinate**:\n  $$5 = \\frac{9 + x}{2}$$\n  $$10 = 9 + x \\implies x = 1$$\n- **y-coordinate**:\n  $$6 = \\frac{4 + y}{2}$$\n  $$12 = 4 + y \\implies y = 8$$\n\n**Step 3: State the coordinates of $B$**\nThe opposite endpoint $B$ is $(1, 8)$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Given that $P(5, 8)$ is one vertex of the square $PQRS$, and the center of the square is $M(9, 0)$, find the coordinates of the opposite vertex $R$.",
    "options": [
      {
        "text": "$(13, -8)$",
        "imageUrl": ""
      },
      {
        "text": "$(7, 4)$",
        "imageUrl": ""
      },
      {
        "text": "$(13, -16)$",
        "imageUrl": ""
      },
      {
        "text": "$(14, -8)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Understand geometry of diagonals in a square**\nIn a square $PQRS$, the diagonals bisect each other at the center $M$. Therefore, the center $M(9, 0)$ is the midpoint of diagonal $PR$.\n\n**Step 2: Use the midpoint formulas for $P(5, 8)$ and $R(x, y)$**\n- **x-coordinate**:\n  $$9 = \\frac{5 + x}{2}$$\n  $$18 = 5 + x \\implies x = 13$$\n- **y-coordinate**:\n  $$0 = \\frac{8 + y}{2}$$\n  $$0 = 8 + y \\implies y = -8$$\n\n**Step 3: State the coordinates of $R$**\nThe opposite vertex $R$ is $(13, -8)$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Which of the following pairs of points $A$ and $B$ has a midpoint of exactly $M(5, 7)$?",
    "options": [
      {
        "text": "$A(2, 4)$ and $B(8, 10)$",
        "imageUrl": ""
      },
      {
        "text": "$A(3, 5)$ and $B(9, 11)$",
        "imageUrl": ""
      },
      {
        "text": "$A(1, 3)$ and $B(7, 9)$",
        "imageUrl": ""
      },
      {
        "text": "$A(0, 0)$ and $B(5, 7)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: Test each coordinate option using the midpoint formula**\n$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\n**Step 2: Test Option 1: $A(2, 4)$ and $B(8, 10)$**\n$$x = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$\n$$y = \\frac{4 + 10}{2} = \\frac{14}{2} = 7$$\n$$\\text{Midpoint} = (5, 7)$$\nThis matches perfectly!\n\n**Step 3: Let's inspect other options for educational context**\n- Option 2: Midpoint of $(3, 5)$ and $(9, 11)$ is $(6, 8)$.\n- Option 3: Midpoint of $(1, 3)$ and $(7, 9)$ is $(4, 6)$.\n- Option 4: Midpoint of $(0, 0)$ and $(5, 7)$ is $(2.5, 3.5)$.\n\n**Step 4: Draw final conclusion**\nTherefore, the correct pair of points is $A(2, 4)$ and $B(8, 10)$."
  },
  {
    "chapterId": "y11a-7",
    "chapterTitle": "Chapter 7: Coordinate Geometry",
    "year": "Year 11",
    "course": "Advanced",
    "isManual": true,
    "topicId": "y11a-7A",
    "topicCode": "7A",
    "topicTitle": "Lengths and midpoints of line segments",
    "difficulty": "medium",
    "type": "multiple_choice",
    "question": "Which of the following pairs of points $C$ and $D$ are exactly $13$ units apart?",
    "options": [
      {
        "text": "$C(2, 3)$ and $D(7, 15)$",
        "imageUrl": ""
      },
      {
        "text": "$C(1, 1)$ and $D(4, 5)$",
        "imageUrl": ""
      },
      {
        "text": "$C(0, 2)$ and $D(6, 8)$",
        "imageUrl": ""
      },
      {
        "text": "$C(-1, -1)$ and $D(9, 9)$",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "### Step-by-Step Solution\n\n**Step 1: State the distance formula**\n$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\n**Step 2: Verify Option 1: $C(2, 3)$ and $D(7, 15)$**\n$$d^2 = (7 - 2)^2 + (15 - 3)^2$$\n$$d^2 = 5^2 + 12^2$$\n$$d^2 = 25 + 144 = 169$$\n$$d = \\sqrt{169} = 13$$\nThis is exactly $13$ units!\n\n**Step 3: Evaluate other options**\n- Option 2: distance $= \\sqrt{3^2 + 4^2} = 5$\n- Option 3: distance $= \\sqrt{6^2 + 6^2} = 6\\sqrt{2}$\n- Option 4: distance $= \\sqrt{10^2 + 10^2} = 10\\sqrt{2}$\n\n**Step 4: Confirm final answer**\nThe correct pair of points is $C(2, 3)$ and $D(7, 15)$."
  }
];

export const importYear11AdvCh7 = async (forceReset = false) => {
  console.log(`Starting sync of Y11 Adv Ch7A (Total ${questions7A.length})...` + '\n' + `Chapter: Coordinate Geometry`);
  try {
    const qSnap = await getDocs(query(collection(db, 'questions'), 
      where('chapterId', '==', 'y11a-7'),
      where('topicCode', '==', '7A')
    ));
    
    const batch = writeBatch(db);
    qSnap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(`Cleared ${qSnap.size} old questions under chapter y11a-7, topicCode 7A.`);

    let count = 0;
    for (const q of questions7A) {
        await addDoc(collection(db, 'questions'), { 
          ...q, 
          createdAt: serverTimestamp(), 
          updatedAt: serverTimestamp(), 
          isActive: true 
        });
        count++;
    }
    console.log(`Successfully imported ${count} questions.`);
    return count;
  } catch (err) {
    console.error('Import failed:', err);
    throw err;
  }
};
