const fs = require('fs');

const questions = [];

// ========================================================
// Q1: Describe translation shown in each diagram (a to f)
// ========================================================
questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Describe the translation from point $A$ to point $A\'$ shown in the diagram below.\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q1a.png" alt="Q1a Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '4 units right, 5 units up',
    '5 units right, 4 units up',
    '4 units left, 5 units up',
    '4 units right, 5 units down'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's find the horizontal and vertical movement from the original point $A$ to its image $A'$:</p><ul><li>Horizontal displacement: Count the grid steps to the right from the vertical grid line of $A$ to the vertical grid line of $A'$. It is exactly <strong>4 units to the right</strong>.</li><li>Vertical displacement: Count the grid steps upwards from the horizontal grid line of $A$ to the horizontal grid line of $A'$. It is exactly <strong>5 units up</strong>.</li></ul><p>Thus, the translation is <strong>4 units right, 5 units up</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Describe the translation from line segment $AB$ to its image $A\'B\'$ shown in the diagram below.\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q1b.png" alt="Q1b Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '3 units right, 1 unit up',
    '3 units right, 1 unit down',
    '1 unit right, 3 units up',
    '3 units left, 1 unit up'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>To find the translation of a shape, we can track the movement of any of its corresponding vertices (for example, from $A$ to $A'$):</p><ul><li>Starting at $A$, move <strong>3 units to the right</strong> and then <strong>1 unit up</strong> to reach $A'$.</li><li>The same translation applies to vertex $B$ to reach $B'$ (3 units right, 1 unit up).</li></ul><p>Therefore, the translation is <strong>3 units right, 1 unit up</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Describe the translation from triangle $ABC$ to its image $A\'B\'C\'$ shown in the diagram below.\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q1c.png" alt="Q1c Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '4 units right, 2 units down',
    '4 units right, 2 units up',
    '4 units left, 2 units down',
    '2 units right, 4 units down'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's track the translation of corresponding vertices, such as $A$ to $A'$:</p><ul><li>Starting at $A$, move <strong>4 units to the right</strong> and then <strong>2 units down</strong> to reach $A'$.</li><li>Verifying other vertices: $B \to B'$ is also 4 units right and 2 units down. $C \to C'$ is also 4 units right and 2 units down.</li></ul><p>Hence, the translation is <strong>4 units right, 2 units down</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Describe the translation from the blue circle (center $A$) to the red circle (center $A\'$) shown in the diagram below.\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q1d.png" alt="Q1d Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '4 units right, 2 units down',
    '4 units right, 2 units up',
    '4 units left, 2 units down',
    '2 units right, 4 units down'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's track the center point $A$ of the original blue circle to the center $A'$ of the translated red circle:</p><ul><li>Starting at $A$, move <strong>4 units to the right</strong> and <strong>2 units down</strong> to arrive exactly at $A'$.</li></ul><p>Therefore, the translation is <strong>4 units right, 2 units down</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'Describe the translation from triangle $ABC$ to its image $A\'B\'C\'$ shown in the diagram below.\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q1e.png" alt="Q1e Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '4 units right',
    '4 units left',
    '4 units up',
    '4 units down'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's track corresponding vertex $A$ to $A'$:</p><ul><li>The shape moves only horizontally. Starting at $A$, move exactly <strong>4 units to the right</strong> to reach $A'$.</li><li>There is no vertical displacement.</li></ul><p>Thus, the translation is <strong>4 units right</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Describe the translation from the right-angled triangle $ABC$ to its image $A\'B\'C\'$ shown in the diagram below.\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q1f.png" alt="Q1f Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '3 units right, 2 units down',
    '3 units right, 2 units up',
    '3 units left, 2 units down',
    '2 units right, 3 units down'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's track corresponding vertex $A$ to $A'$:</p><ul><li>Starting at $A$, move <strong>3 units to the right</strong> and <strong>2 units down</strong> to arrive at $A'$.</li><li>Checking vertex $B \to B'$ and $C \to C'$ confirms this exact same translation (3 units right, 2 units down).</li></ul><p>Therefore, the translation is <strong>3 units right, 2 units down</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q2: Draw image after described translation (a to d)
// ========================================================
questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'For the diagram below, a single point $A$ is shown at coordinate $(1, 1)$ where the bottom-left corner of the grid is $(0,0)$. If this point is translated by <strong>4 units up and 3 units right</strong>, what are the coordinates of its image $A\'$?\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q2a.png" alt="Q2a Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '$$A\' = (4, 5)$$',
    '$$A\' = (5, 4)$$',
    '$$A\' = (3, 4)$$',
    '$$A\' = (5, 5)$$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's apply the translation coordinates step-by-step:</p><ul><li>Original coordinates of point $A$: $(x, y) = (1, 1)$.</li><li>"3 units right" $\implies$ Add 3 to the $x$-coordinate: $$x' = 1 + 3 = 4$$.</li><li>"4 units up" $\implies$ Add 4 to the $y$-coordinate: $$y' = 1 + 4 = 5$$.</li></ul><p>So, the coordinates of the translated point $A'$ are <strong>$(4, 5)$</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'For the line segment $AB$ shown in the diagram below, $A$ is at $(1, 5)$ and $B$ is at $(4, 1)$. If the segment is translated by <strong>3 units right and 1 unit up</strong>, what are the coordinates of the image vertices $A\'$ and $B\'$?\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q2b.png" alt="Q2b Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '$$A\' = (4, 6) \\text{ and } B\' = (7, 2)$$',
    '$$A\' = (4, 5) \\text{ and } B\' = (7, 1)$$',
    '$$A\' = (3, 6) \\text{ and } B\' = (6, 2)$$',
    '$$A\' = (4, 7) \\text{ and } B\' = (7, 3)$$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's translate each vertex by adding 3 to $x$ and adding 1 to $y$:</p><ul><li>For vertex $A(1, 5)$: <br />$$x' = 1 + 3 = 4$$<br />$$y' = 5 + 1 = 6$$<br />$\implies A'(4, 6)$</li><li>For vertex $B(4, 1)$: <br />$$x' = 4 + 3 = 7$$<br />$$y' = 1 + 1 = 2$$<br />$\implies B'(7, 2)$</li></ul><p>Therefore, the new coordinates are <strong>$A'(4, 6)$ and $B'(7, 2)$</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'For the triangle $ABC$ shown below, $A$ is at $(3, 3)$, $B$ is at $(2, 0)$, and $C$ is at $(4, 0)$. If the triangle is translated by <strong>2 units up and 1 unit left</strong>, what are the coordinates of the image vertices $A\'$, $B\'$, and $C\'$?\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q2c.png" alt="Q2c Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '$$A\' = (2, 5), B\' = (1, 2), C\' = (3, 2)$$',
    '$$A\' = (4, 5), B\' = (3, 2), C\' = (5, 2)$$',
    '$$A\' = (2, 4), B\' = (1, 1), C\' = (3, 1)$$',
    '$$A\' = (2, 5), B\' = (1, 1), C\' = (3, 1)$$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's apply the translation "2 units up and 1 unit left" (subtract 1 from $x$, add 2 to $y$) to each vertex:</p><ul><li>For vertex $A(3, 3)$: <br />$$x' = 3 - 1 = 2$$<br />$$y' = 3 + 2 = 5$$<br />$\implies A'(2, 5)$</li><li>For vertex $B(2, 0)$: <br />$$x' = 2 - 1 = 1$$<br />$$y' = 0 + 2 = 2$$<br />$\implies B'(1, 2)$</li><li>For vertex $C(4, 0)$: <br />$$x' = 4 - 1 = 3$$<br />$$y' = 0 + 2 = 2$$<br />$\implies C'(3, 2)$</li></ul><p>Therefore, the new coordinates are <strong>$A'(2, 5), B'(1, 2), C'(3, 2)$</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'For the circle with center $A(3, 2)$ shown below, if the circle is translated by <strong>2 units right and 1 unit down</strong>, what are the coordinates of the translated center point $A\'$?\n\n<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q2d.png" alt="Q2d Diagram" style="max-width: 250px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px;" /></div>',
  options: [
    '$$A\' = (5, 1)$$',
    '$$A\' = (5, 3)$$',
    '$$A\' = (1, 1)$$',
    '$$A\' = (6, 1)$$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's translate the center coordinate $A(3, 2)$ by adding 2 to $x$ and subtracting 1 from $y$:</p><ul><li>$$x' = 3 + 2 = 5$$</li><li>$$y' = 2 - 1 = 1$$</li></ul><p>Thus, the translated center point $A'$ is at <strong>$(5, 1)$</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q3: Composite question about properties of translation
// ========================================================
questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `In the diagram below, $\\Delta X'Y'Z'$ is the image under translation of $\\Delta XYZ$. 

<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q3.png" alt="Q3 Diagram" style="max-width: 500px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px;" /></div>

Which of the following statements correctly summarizes the properties (angles, lengths, and area) of this translation?`,
  options: [
    'Corresponding angles are equal (e.g. $XZY = X\'Z\'Y\'$, $ZXY = Z\'X\'Y\'$), side lengths are preserved ($XY = X\'Y\'$), and both triangles have an identical area of 15 square units.',
    'Corresponding angles are equal, but the image triangle $\\Delta X\'Y\'Z\'$ has a larger side length and an area of 20 square units.',
    'The translation increases all angles by $10^\\circ$ while keeping the side lengths and area the same.',
    'The area of the image triangle $\\Delta X\'Y\'Z\'$ is halved because translation shrinks shapes.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Translations are <strong>isometric transformations</strong> (congruence-preserving), which means they preserve all geometric properties of the shape:</p><ul><li><strong>Angles:</strong> $\\angle XYZ = \\angle X'Y'Z'$ and $\\angle XZY = \\angle X'Z'Y'$. In fact, all corresponding angles remain perfectly equal.</li><li><strong>Lengths:</strong> The length of any side is identical to its image (e.g., $XY = X'Y'$).</li><li><strong>Area:</strong> The base of the triangle is 6 units, and the perpendicular height is 5 units. <br />$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times 5 = 15 \\text{ square units}$$.<br />Both triangles have the exact same area.</li></ul></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q4: Detailed properties and parallel intervals
// ========================================================
questions.push({
  chapterId: 'y7-17',
  chapterTitle: 'Chapter 17: Transformations and Symmetry',
  topicId: 'y7-17a',
  topicCode: '17A',
  topicTitle: 'Translations',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `In the diagram below, $\\Delta A'B'C'$ is the image under a translation of $\\Delta ABC$. 

<div style="text-align: center; margin: 16px 0;"><img src="/images/ch17/q4.png" alt="Q4 Diagram" style="max-width: 500px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px;" /></div>

Which of the following summaries correctly describes the translation vector, parallel intervals, and point movement?`,
  options: [
    'The translation is 8 units right and 2 units down. Intervals $AB \\parallel A\'B\'$, $AC \\parallel A\'C\'$, and $AL \\parallel A\'L\'$. Corresponding intervals are also equal in length (e.g. $BL = B\'L\'$), and no points remain unmoved.',
    'The translation is 6 units right and 1 unit down. Intervals $AB$ and $A\'B\'$ are perpendicular, and the point $L$ does not move.',
    'The translation is 8 units right and 2 units down. However, the image intervals are not parallel because translation rotates the shape.',
    'The translation is 8 units right and 2 units down. The vertices move, but point $L$ remains exactly in its original position.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's analyze the properties of this translation step-by-step:</p><ul><li><strong>Translation Vector:</strong> Track vertex $B$ to $B'$. $B$ is at $(1, 2)$ and $B'$ is at $(9, 0)$. The translation is exactly <strong>8 units to the right, and 2 units down</strong>.</li><li><strong>Image of point $L$:</strong> Since $L$ is at $(4, 2)$, applying the translation (add 8 to $x$, subtract 2 from $y$) places $L'$ at $(12, 0)$ on the line segment $B'C'$.</li><li><strong>Parallel Intervals:</strong> Translations keep corresponding line segments parallel to each other. Thus:<ul><li>$AB \\parallel A'B'$</li><li>$AC \\parallel A'C'$</li><li>$AL \\parallel A'L'$</li></ul></li><li><strong>Parallel and Equal Intervals:</strong> Corresponding parts are congruent and parallel, so $BL$ is parallel and equal in length to $B'L'$, and $CA$ is parallel and equal in length to $C'A'$.</li><li><strong>Unmoved Points:</strong> In a translation, <strong>every single point</strong> in the space is shifted by the exact same distance and direction. Therefore, no points remain unmoved.</li></ul></div>`,
  createdAt: new Date().toISOString()
});

console.log('Total Chapter 17A questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch17A = async (forceReset = false) => {
  console.log('[Ch17A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch17 (17a to 17h) questions...');
      const topicsToDelete = ['y7-17a', 'y7-17b', 'y7-17c', 'y7-17d', 'y7-17e', 'y7-17f', 'y7-17g', 'y7-17h'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch17 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-17a', 'y7-17b', 'y7-17c', 'y7-17d', 'y7-17e', 'y7-17f', 'y7-17g', 'y7-17h'];
    for (const tId of topicsToCheck) {
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
      existingSnap.docs.forEach(doc => {
        existingQuestions.add(doc.data().question.trim());
      });
    }
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch17A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch17A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch17A.js', output);
console.log('Done!');
