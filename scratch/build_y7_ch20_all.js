const fs = require('fs');

const questions = [];

// ========================================================
// Q1: Polyhedra (Split into 2 standalone questions)
// ========================================================

// Part 1
questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Determine which of the following shapes are **polyhedra** (solids bounded by flat polygonal faces, straight edges, and sharp vertices):

<div style="display: flex; justify-content: center; gap: 16px; margin: 16px 0;">
  <div style="border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q1_a.png" style="max-height: 95px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape A</div>
  </div>
  <div style="border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q1_b.png" style="max-height: 95px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape B</div>
  </div>
  <div style="border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q1_c.png" style="max-height: 95px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape C</div>
  </div>
</div>`,
  options: [
    'Only Shape A is a polyhedron',
    'Only Shape B is a polyhedron',
    'Shapes A and B are polyhedra',
    'All three shapes are polyhedra'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's analyze each shape based on the definition of a <strong>polyhedron</strong> (a 3D solid bounded only by flat polygonal faces):</p><ul><li><strong>Shape A (Slanted triangular prism):</strong> All faces are flat rectangles or triangles, and all edges are straight. Thus, Shape A **is a polyhedron**.</li><li><strong>Shape B (Cone):</strong> It has a curved lateral surface. Because not all of its faces are flat polygons, Shape B **is not a polyhedron**.</li><li><strong>Shape C (Hemisphere):</strong> It has a curved dome surface. Because it contains a curved face, Shape C **is not a polyhedron**.</li></ul><p>Therefore, only Shape A is a polyhedron.</p></div>`,
  createdAt: new Date().toISOString()
});

// Part 2
questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Determine which of the following shapes are **polyhedra** (solids bounded by flat polygonal faces, straight edges, and sharp vertices):

<div style="display: flex; justify-content: center; gap: 16px; margin: 16px 0;">
  <div style="border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q1_d.png" style="max-height: 95px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape D</div>
  </div>
  <div style="border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q1_e.png" style="max-height: 95px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape E</div>
  </div>
  <div style="border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q1_f.png" style="max-height: 95px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape F</div>
  </div>
</div>`,
  options: [
    'Shapes D and E are polyhedra',
    'Only Shape E is a polyhedron',
    'Shapes E and F are polyhedra',
    'All three shapes are polyhedra'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's analyze each shape based on the definition of a <strong>polyhedron</strong>:</p><ul><li><strong>Shape D (Hollow rectangular block with compartments):</strong> Although it has internal cut-outs, every single surface is a flat rectangle, and all boundaries are straight lines. Thus, Shape D **is a polyhedron**.</li><li><strong>Shape E (L-shaped block):</strong> All faces are flat polygons (L-shapes or rectangles) and all edges are straight. Thus, Shape E **is a polyhedron**.</li><li><strong>Shape F (Cylinder):</strong> It has a curved cylindrical lateral face. Since it contains a curved surface, Shape F **is not a polyhedron**.</li></ul><p>Therefore, Shapes D and E are polyhedra.</p></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q2: Faces, Edges, Vertices (5 standalone questions)
// ========================================================

// Q2-a
questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Find the number of faces ($F$), edges ($E$) and vertices ($V$) of the skewed rectangular prism shown below:

<div style="text-align: center; margin: 16px 0;">
  <img src="/images/ch20/q2_a.png" style="max-height: 125px; border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;" />
</div>`,
  options: [
    'F = 6, E = 12, V = 8',
    'F = 6, E = 8, V = 12',
    'F = 5, E = 9, V = 6',
    'F = 8, E = 12, V = 6'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's count the features of this skewed rectangular prism (parallelepiped):</p><ul><li><strong>Faces (F):</strong> It has 6 rectangular/parallelogram faces (top, bottom, and 4 sides). <br />$$F = 6$$.</li><li><strong>Edges (E):</strong> It has 4 edges on the bottom base, 4 on the top base, and 4 vertical connecting edges. <br />$$E = 12$$.</li><li><strong>Vertices (V):</strong> It has 4 corners on the bottom base and 4 corners on the top base. <br />$$V = 8$$.</li></ul><p>Notice that Euler's formula holds true: $$V - E + F = 8 - 12 + 6 = 2$$.</p></div>`,
  createdAt: new Date().toISOString()
});

// Q2-b
questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Find the number of faces ($F$), edges ($E$) and vertices ($V$) of the right triangular prism shown below:

<div style="text-align: center; margin: 16px 0;">
  <img src="/images/ch20/q2_b.png" style="max-height: 125px; border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;" />
</div>`,
  options: [
    'F = 5, E = 9, V = 6',
    'F = 5, E = 6, V = 9',
    'F = 6, E = 9, V = 5',
    'F = 4, E = 6, V = 4'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's count the features of this right triangular prism:</p><ul><li><strong>Faces (F):</strong> It has 2 triangular bases (top and bottom) and 3 rectangular sides. <br />$$F = 5$$.</li><li><strong>Edges (E):</strong> It has 3 edges on the bottom triangle, 3 on the top triangle, and 3 vertical edges. <br />$$E = 9$$.</li><li><strong>Vertices (V):</strong> It has 3 corner points on the bottom base and 3 on the top base. <br />$$V = 6$$.</li></ul><p>Checking Euler's formula: $$V - E + F = 6 - 9 + 5 = 2$$.</p></div>`,
  createdAt: new Date().toISOString()
});

// Q2-c
questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Find the number of faces ($F$), edges ($E$) and vertices ($V$) of the triangular pyramid (tetrahedron) shown below:

<div style="text-align: center; margin: 16px 0;">
  <img src="/images/ch20/q2_c.png" style="max-height: 125px; border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;" />
</div>`,
  options: [
    'F = 4, E = 6, V = 4',
    'F = 4, E = 4, V = 6',
    'F = 5, E = 8, V = 5',
    'F = 5, E = 6, V = 5'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's count the features of this triangular pyramid (tetrahedron):</p><ul><li><strong>Faces (F):</strong> It has 1 triangular base and 3 triangular sides that meet at the top apex. <br />$$F = 4$$.</li><li><strong>Edges (E):</strong> It has 3 edges bounding the base triangle and 3 slant edges going up to the apex. <br />$$E = 6$$.</li><li><strong>Vertices (V):</strong> It has 3 corners at the base and 1 apex corner at the top. <br />$$V = 4$$.</li></ul><p>Checking Euler's formula: $$V - E + F = 4 - 6 + 4 = 2$$.</p></div>`,
  createdAt: new Date().toISOString()
});

// Q2-d
questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Find the number of faces ($F$), edges ($E$) and vertices ($V$) of the pentagonal pyramid shown below:

<div style="text-align: center; margin: 16px 0;">
  <img src="/images/ch20/q2_d.png" style="max-height: 125px; border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;" />
</div>`,
  options: [
    'F = 6, E = 10, V = 6',
    'F = 6, E = 6, V = 10',
    'F = 5, E = 10, V = 5',
    'F = 7, E = 12, V = 7'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's count the features of this pentagonal pyramid:</p><ul><li><strong>Faces (F):</strong> It has 1 pentagonal base and 5 triangular sides meeting at the top. <br />$$F = 6$$.</li><li><strong>Edges (E):</strong> It has 5 edges on the base pentagon and 5 slant edges meeting at the top. <br />$$E = 10$$.</li><li><strong>Vertices (V):</strong> It has 5 corners around the base pentagon and 1 apex corner at the top. <br />$$V = 6$$.</li></ul><p>Checking Euler's formula: $$V - E + F = 6 - 10 + 6 = 2$$.</p></div>`,
  createdAt: new Date().toISOString()
});

// Q2-e
questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Find the number of faces ($F$), edges ($E$) and vertices ($V$) of the square pyramid shown below:

<div style="text-align: center; margin: 16px 0;">
  <img src="/images/ch20/q2_e.png" style="max-height: 125px; border: 1px solid #e2e8f0; padding: 8px; border-radius: 8px; background: white;" />
</div>`,
  options: [
    'F = 5, E = 8, V = 5',
    'F = 5, E = 5, V = 8',
    'F = 6, E = 10, V = 6',
    'F = 4, E = 6, V = 4'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's count the features of this square pyramid:</p><ul><li><strong>Faces (F):</strong> It has 1 square base and 4 triangular lateral faces meeting at the apex. <br />$$F = 5$$.</li><li><strong>Edges (E):</strong> It has 4 edges around the square base and 4 slant edges connecting to the apex. <br />$$E = 8$$.</li><li><strong>Vertices (V):</strong> It has 4 corners at the base and 1 apex corner at the top. <br />$$V = 5$$.</li></ul><p>Checking Euler's formula: $$V - E + F = 5 - 8 + 5 = 2$$.</p></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q3: Prisms (Split into 2 standalone questions)
// ========================================================

// Part 1
questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Determine which of the following shapes are **prisms** (polyhedra with two congruent, parallel bases and flat rectangular connecting sides, maintaining a uniform cross-section):

<div style="display: flex; justify-content: center; gap: 16px; margin: 16px 0; flex-wrap: wrap;">
  <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q3_a.png" style="max-height: 100px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape A</div>
  </div>
  <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q3_b.png" style="max-height: 100px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape B</div>
  </div>
  <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q3_c.png" style="max-height: 100px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape C</div>
  </div>
  <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q3_d.png" style="max-height: 100px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape D</div>
  </div>
</div>`,
  options: [
    'Only Shape D is a prism',
    'Shapes A and D are prisms',
    'Shapes C and D are prisms',
    'None of the shapes are prisms'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's analyze each shape based on the criteria for a <strong>prism</strong>:</p><ul><li><strong>Shape A (Beveled cube):</strong> One corner is cut off. Because the cross-section parallel to the top/bottom faces is not uniform, it **is not a prism**.</li><li><strong>Shape B (Curved shield-like shape):</strong> Since it has curved edges/surfaces, it is not even a polyhedron. Thus, it **is not a prism**.</li><li><strong>Shape C (Hexagonal pyramid):</strong> It tapers to a single vertex (apex). The cross-sections shrink as we move upwards, so it **is not a prism**.</li><li><strong>Shape D (Slanted triangular prism):</strong> It has two congruent, parallel triangular bases, and flat rectangular lateral faces. Since its cross-section parallel to the bases is completely uniform, it **is a prism**.</li></ul><p>Therefore, only Shape D is a prism.</p></div>`,
  createdAt: new Date().toISOString()
});

// Part 2
questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Determine which of the following shapes are **prisms** (polyhedra with two congruent, parallel bases and flat rectangular connecting sides, maintaining a uniform cross-section):

<div style="display: flex; justify-content: center; gap: 16px; margin: 16px 0;">
  <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q3_e.png" style="max-height: 100px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape E</div>
  </div>
  <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q3_f.png" style="max-height: 100px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape F</div>
  </div>
  <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white;">
    <img src="/images/ch20/q3_g.png" style="max-height: 100px; display: block; margin: 0 auto 6px;" />
    <div style="text-align: center; font-weight: bold; font-size: 13px;">Shape G</div>
  </div>
</div>`,
  options: [
    'All three shapes (E, F, and G) are prisms',
    'Only Shapes E and F are prisms',
    'Only Shapes F and G are prisms',
    'Only Shape E is a prism'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's analyze these three complex polyhedra:</p><ul><li><strong>Shape E (House-like pentagonal prism):</strong> It has front and back walls that are congruent parallel pentagons, connected by rectangular side/roof panels. Its cross-section parallel to the front/back walls is completely uniform. Thus, it **is a prism**.</li><li><strong>Shape F (L-shaped block):</strong> It has two congruent, parallel L-shaped bases (top and bottom) connected by rectangular sides. Its cross-section parallel to the top/bottom is uniform. Thus, it **is a prism**.</li><li><strong>Shape G (U-channel / trenched block):</strong> Similar to Shape F, it has congruent parallel L/U-shaped bases (front and back walls) connected by rectangular sides. Its cross-section is uniform. Thus, it **is a prism**.</li></ul><p>Therefore, all three shapes (E, F, and G) are prisms.</p></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q4: Euler's Formula for Prisms (Custom composite question)
// ========================================================
const q4_table_html = `<div style="display: flex; justify-content: center; margin: 16px 0;">
  <table style="width: 100%; max-width: 500px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <thead>
      <tr style="background: #2563eb; color: white;">
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Type of cross-section</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Faces (F)</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Edges (E)</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Vertices (V)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Triangular (3-sided)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Rectangular (4-sided)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Pentagonal (5-sided)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Hexagonal (6-sided)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
    </tbody>
  </table>
</div>`;

questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `For a prism with an $n$-sided polygonal cross-section, complete the features table and solve parts (b) to (d):

<div style="text-align: center; margin: 16px 0;">
  <img src="/images/ch20/q4_prisms.png" alt="Four Prisms" style="max-width: 480px; width: 100%; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white;" />
</div>

${q4_table_html}

Analyze the structural characteristics and select the correct set of results for parts (b), (c), and (d):
* **b** For each prism in the table, evaluate $V - E + F$.
* **c** If the polygonal cross-section of a prism has $n$ sides, find formulas in terms of $n$ for:
  * **i** the number of faces ($F$)
  * **ii** the number of edges ($E$)
  * **iii** the number of vertices ($V$)
* **d** Simplify $V - E + F$ using your formulas from part (c).`,
  options: [
    '(b) V - E + F = 2; (c) F = n + 2, E = 3n, V = 2n; (d) V - E + F = 2n - 3n + (n + 2) = 2',
    '(b) V - E + F = 2; (c) F = 2n, E = 3n, V = n + 2; (d) V - E + F = 1',
    '(b) V - E + F = 0; (c) F = n + 1, E = 2n, V = 2n; (d) V - E + F = 0',
    '(b) V - E + F = 2; (c) F = n + 2, E = 2n, V = 3n; (d) V - E + F = 3'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's systematically construct the relationships for prisms:</p><ul><li><strong>Part (a) Completed Table:</strong><ul><li><strong>Triangular (3-sided):</strong> $F = 3+2=5$, $E = 3\\times3=9$, $V = 2\\times3=6$. <br />Evaluating: $V - E + F = 6 - 9 + 5 = 2$.</li><li><strong>Rectangular (4-sided):</strong> $F = 4+2=6$, $E = 3\\times4=12$, $V = 2\\times4=8$. <br />Evaluating: $V - E + F = 8 - 12 + 6 = 2$.</li><li><strong>Pentagonal (5-sided):</strong> $F = 5+2=7$, $E = 3\\times5=15$, $V = 2\\times5=10$. <br />Evaluating: $V - E + F = 10 - 15 + 7 = 2$.</li><li><strong>Hexagonal (6-sided):</strong> $F = 6+2=8$, $E = 3\\times6=18$, $V = 2\\times6=12$. <br />Evaluating: $V - E + F = 12 - 18 + 8 = 2$.</li></ul></li><li><strong>Part (b):</strong> For each of these prisms, the calculation $$V - E + F$$ is exactly equal to **2**.</li><li><strong>Part (c) General Formulas in terms of $n$:</strong><ul><li><strong>i. Faces (F):</strong> A prism has 2 polygonal bases plus $n$ rectangular sides. <br />$$F = n + 2$$.</li><li><strong>ii. Edges (E):</strong> A prism has $n$ edges on the top base, $n$ on the bottom base, and $n$ vertical side edges. <br />$$E = 3n$$.</li><li><strong>iii. Vertices (V):</strong> A prism has $n$ corner points on the top base and $n$ on the bottom base. <br />$$V = 2n$$.</li></ul></li><li><strong>Part (d) Substitution & Simplification:</strong><br />$$V - E + F = (2n) - (3n) + (n + 2)$$<br />$$V - E + F = 2n - 3n + n + 2 = 2$$.</li></ul><p>This universal relation $$V - E + F = 2$$ is known as <strong>Euler's formula</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q5: Euler's Formula for Pyramids (Custom composite question)
// ========================================================
const q5_table_html = `<div style="display: flex; justify-content: center; margin: 16px 0;">
  <table style="width: 100%; max-width: 500px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <thead>
      <tr style="background: #dc2626; color: white;">
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Type of base</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Faces (F)</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Edges (E)</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Vertices (V)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Triangular (3-sided)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Rectangular (4-sided)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Pentagonal (5-sided)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Hexagonal (6-sided)</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
    </tbody>
  </table>
</div>`;

questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `For a pyramid with an $n$-sided polygonal base, complete the features table and solve parts (b) to (d):

<div style="text-align: center; margin: 16px 0;">
  <img src="/images/ch20/q5_pyramids.png" alt="Four Pyramids" style="max-width: 480px; width: 100%; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: white;" />
</div>

${q5_table_html}

Analyze the structural characteristics and select the correct set of results for parts (b), (c), and (d):
* **b** For each pyramid in the table, evaluate $V - E + F$.
* **c** If the polygonal base of a pyramid has $n$ sides, find formulas in terms of $n$ for:
  * **i** the number of faces ($F$)
  * **ii** the number of edges ($E$)
  * **iii** the number of vertices ($V$)
* **d** Simplify $V - E + F$ using your formulas from part (c).`,
  options: [
    '(b) V - E + F = 2; (c) F = n + 1, E = 2n, V = n + 1; (d) V - E + F = (n + 1) - 2n + (n + 1) = 2',
    '(b) V - E + F = 2; (c) F = n + 2, E = 3n, V = n + 1; (d) V - E + F = 1',
    '(b) V - E + F = 0; (c) F = n + 1, E = n, V = n + 1; (d) V - E + F = 0',
    '(b) V - E + F = 2; (c) F = 2n, E = 2n, V = n + 1; (d) V - E + F = 3'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's systematically construct the relationships for pyramids:</p><ul><li><strong>Part (a) Completed Table:</strong><ul><li><strong>Triangular (3-sided):</strong> $F = 3+1=4$, $E = 2\\times3=6$, $V = 3+1=4$. <br />Evaluating: $V - E + F = 4 - 6 + 4 = 2$.</li><li><strong>Rectangular (4-sided):</strong> $F = 4+1=5$, $E = 2\\times4=8$, $V = 4+1=5$. <br />Evaluating: $V - E + F = 5 - 8 + 5 = 2$.</li><li><strong>Pentagonal (5-sided):</strong> $F = 5+1=6$, $E = 2\\times5=10$, $V = 5+1=6$. <br />Evaluating: $V - E + F = 6 - 10 + 6 = 2$.</li><li><strong>Hexagonal (6-sided):</strong> $F = 6+1=7$, $E = 2\\times6=12$, $V = 6+1=7$. <br />Evaluating: $V - E + F = 7 - 12 + 7 = 2$.</li></ul></li><li><strong>Part (b):</strong> For each of these pyramids, the calculation $$V - E + F$$ is exactly equal to **2**.</li><li><strong>Part (c) General Formulas in terms of $n$:</strong><ul><li><strong>i. Faces (F):</strong> A pyramid has 1 polygonal base plus $n$ triangular sides meeting at the top. <br />$$F = n + 1$$.</li><li><strong>ii. Edges (E):</strong> A pyramid has $n$ edges around the base polygon and $n$ slant edges meeting at the top. <br />$$E = 2n$$.</li><li><strong>iii. Vertices (V):</strong> A pyramid has $n$ corner points on the base plus 1 apex corner point at the top. <br />$$V = n + 1$$.</li></ul></li><li><strong>Part (d) Substitution & Simplification:</strong><br />$$V - E + F = (n + 1) - (2n) + (n + 1)$$<br />$$V - E + F = n + 1 - 2n + n + 1 = 2$$.</li></ul><p>Once again, we verify that Euler's formula $$V - E + F = 2$$ holds universal for all pyramids as well!</p></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q6: Platonic Solids (Custom composite question)
// ========================================================
const q6_table_html = `<div style="display: flex; justify-content: center; margin: 16px 0;">
  <table style="width: 100%; max-width: 500px; border-collapse: collapse; font-family: inherit; font-size: 14px; text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <thead>
      <tr style="background: #6b21a8; color: white;">
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Platonic solid</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Faces (F)</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Edges (E)</th>
        <th style="padding: 10px 12px; font-weight: 600; border: 1px solid #cbd5e1;">Vertices (V)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Cube</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Tetrahedron</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Octahedron</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Dodecahedron</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
      <tr style="background: #f8fafc;"><td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 500; text-align: left;">Icosahedron</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td><td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #475569;">?</td></tr>
    </tbody>
  </table>
</div>`;

questions.push({
  chapterId: 'y7-20',
  chapterTitle: 'Chapter 20: Three-dimensional solids',
  topicId: 'y7-20a',
  topicCode: '20A',
  topicTitle: 'Polyhedra',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `Complete the Platonic solids features table and solve part (b):

${q6_table_html}

Analyze the features and select the correct option summarizing part (b):
* **b** For each of the five Platonic solids, evaluate the value of $V - E + F$.`,
  options: [
    'V - E + F = 2 for all five Platonic solids (Euler\'s formula).',
    'V - E + F = 1 for all five Platonic solids.',
    'V - E + F = 0 for all five Platonic solids.',
    'V - E + F = 3 for all five Platonic solids.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's find the values of $F$, $E$, and $V$ for each Platonic solid and evaluate $$V - E + F$$:</p><ul><li><strong>Cube (Hexahedron):</strong> $F = 6$, $E = 12$, $V = 8$. <br />$$V - E + F = 8 - 12 + 6 = 2$$.</li><li><strong>Tetrahedron:</strong> $F = 4$, $E = 6$, $V = 4$. <br />$$V - E + F = 4 - 6 + 4 = 2$$.</li><li><strong>Octahedron:</strong> $F = 8$, $E = 12$, $V = 6$. <br />$$V - E + F = 6 - 12 + 8 = 2$$.</li><li><strong>Dodecahedron (12 pentagonal faces):</strong> $F = 12$, $E = 30$, $V = 20$. <br />$$V - E + F = 20 - 30 + 12 = 2$$.</li><li><strong>Icosahedron (20 triangular faces):</strong> $F = 20$, $E = 30$, $V = 12$. <br />$$V - E + F = 12 - 30 + 20 = 2$$.</li></ul><p>Therefore, $$V - E + F = 2$$ holds perfectly for all five Platonic solids! This is known as <strong>Euler's formula</strong> for convex polyhedra.</p></div>`,
  createdAt: new Date().toISOString()
});

console.log('Total Chapter 20A questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch20A = async (forceReset = false) => {
  console.log('[Ch20A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch20 (20a to 20b) questions...');
      const topicsToDelete = ['y7-20a', 'y7-20b'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch20 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-20a', 'y7-20b'];
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
    console.log('[Ch20A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch20A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch20A.js', output);
console.log('Done!');
